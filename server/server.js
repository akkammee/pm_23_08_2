const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
const PORT = 3000;
const DATA_FILE   = path.join(__dirname, 'resume.json');
const USERS_FILE  = path.join(__dirname, 'users.json');
const TOKENS_FILE = path.join(__dirname, 'tokens.json');

app.use(cors());
app.use(express.json());

function readJson(file) {
    if (!fs.existsSync(file)) return [];
    return JSON.parse(fs.readFileSync(file, 'utf-8'));
}
function writeJson(file, data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
}

// POST — реєстрація
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
        return res.status(400).json({ error: 'Введіть логін і пароль' });

    const users = readJson(USERS_FILE);
    if (users.find(u => u.username === username))
        return res.status(400).json({ error: 'Користувач вже існує' });

    users.push({ username, password });
    writeJson(USERS_FILE, users);
    res.json({ message: 'Реєстрація успішна' });
});

// POST — вхід
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const users = readJson(USERS_FILE);
    const user = users.find(u => u.username === username && u.password === password);

    if (!user)
        return res.status(401).json({ error: 'Невірний логін або пароль' });

    const token = crypto.randomBytes(32).toString('hex');
    const tokens = readJson(TOKENS_FILE);
    tokens.push({ token, username });
    writeJson(TOKENS_FILE, tokens);
    res.json({ token });
});

// GET — перевірка токена
app.get('/api/verify', (req, res) => {
    const auth = req.headers['authorization'];
    const token = auth && auth.split(' ')[1];
    if (!token) return res.status(401).json({ valid: false });

    const tokens = readJson(TOKENS_FILE);
    const found = tokens.find(t => t.token === token);
    found ? res.json({ valid: true }) : res.status(401).json({ valid: false });
});

// POST — вихід
app.post('/api/logout', (req, res) => {
    const auth = req.headers['authorization'];
    const token = auth && auth.split(' ')[1];
    if (token) {
        const tokens = readJson(TOKENS_FILE).filter(t => t.token !== token);
        writeJson(TOKENS_FILE, tokens);
    }
    res.json({ message: 'Вийшли успішно' });
});

// GET — отримати резюме
app.get('/api/resume', (req, res) => {
    try {
        const raw = fs.readFileSync(DATA_FILE, 'utf-8');
        res.json(JSON.parse(raw));
    } catch (err) {
        res.status(500).json({ error: 'Не вдалося прочитати дані', details: err.message });
    }
});

// POST — оновити резюме
app.post('/api/resume', (req, res) => {
    try {
        const newData = req.body;
        if (!newData || typeof newData !== 'object')
            return res.status(400).json({ error: 'Невірний формат даних' });

        const current = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
        const updated = {
            ...current, ...newData,
            header:  { ...current.header,  ...(newData.header  || {}) },
            sidebar: { ...current.sidebar, ...(newData.sidebar || {}) },
            content: { ...current.content, ...(newData.content || {}) },
        };

        fs.writeFileSync(DATA_FILE, JSON.stringify(updated, null, 2), 'utf-8');
        res.json({ message: 'Дані успішно збережені', data: updated });
    } catch (err) {
        res.status(500).json({ error: 'Не вдалося зберегти дані', details: err.message });
    }
});

app.listen(PORT, () => console.log(`Сервер запущено: http://localhost:${PORT}`));