const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/save-json', (req, res) => {
    const data = req.body;
    fs.writeFile(path.join(__dirname, '../Save/data.json'), JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('Lỗi khi lưu file JSON:', err);
            return res.status(500).json({ message: 'Lỗi khi lưu dữ liệu' });
        }
        res.json({ message: 'Dữ liệu đã được lưu thành công!' });
    });
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});