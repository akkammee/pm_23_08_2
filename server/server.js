const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'resume.json');

app.use(cors());
app.use(express.json());

app.get('/api/resume', (req, res) => {
    try {
        const raw = fs.readFileSync(DATA_FILE, 'utf-8');
        const data = JSON.parse(raw);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Не вдалося прочитати дані', details: err.message });
    }
});

app.post('/api/resume', (req, res) => {
    try {
        const newData = req.body;

        if (!newData || typeof newData !== 'object') {
            return res.status(400).json({ error: 'Невірний формат даних' });
        }

        const raw = fs.readFileSync(DATA_FILE, 'utf-8');
        const current = JSON.parse(raw);

        const updated = {
            ...current,
            ...newData,
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

app.listen(PORT, () => {
    console.log(`Сервер запущено: http://localhost:${PORT}`);
});