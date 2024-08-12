document.addEventListener('DOMContentLoaded', function() {
    // تغيير اللون عند النقر على الروابط في القائمة
    document.querySelectorAll('nav ul li a').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            // إزالة التحديد عن جميع الروابط
            document.querySelectorAll('nav ul li a').forEach(function(link) {
                link.style.backgroundColor = ''; // إزالة لون الخلفية
                link.style.color = ''; // إزالة لون النص
            });

            // تمييز الرابط الذي تم النقر عليه
            anchor.style.backgroundColor = '#007bff'; // لون الخلفية عند التحديد
            anchor.style.color = '#fff'; // لون النص عند التحديد
        });
    });

    // التحقق من صحة النموذج قبل الإرسال
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('يرجى ملء جميع الحقول.');
            event.preventDefault(); // يمنع إرسال النموذج
        } else {
            // يمكن إضافة مزيد من التحقق من صحة البريد الإلكتروني إذا لزم الأمر
            // ويمكن إضافة معالجة إضافية هنا إذا لزم الأمر
        }
    });
});
