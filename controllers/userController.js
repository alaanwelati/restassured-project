// تعريف وحدة تحكم لجلب بيانات المستخدم
exports.getUser = (req, res) => {
    const user = {
        id: 1,
        name: 'Alaa Nwelati',
        email: 'alaa@example.com',
        studentNumber: '030123098'
    };

    res.json(user);  // إرسال البيانات كاستجابة بصيغة JSON
};
