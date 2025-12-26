const express = require('express');
const app = express();
const port = 3000;

// نقطة النهاية التي تعيد بيانات المستخدم
app.get('/users/1', (req, res) => {
    const user = {
        id: 1,
        name: 'Alaa Nwelati',
        email: 'alaa@example.com',
        studentNumber: '030123098'
    };

    res.json(user);  // إرسال البيانات كاستجابة بصيغة JSON
});

// نقطة النهاية الرئيسية (الصفحة الرئيسية)
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// تشغيل الخادم
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
