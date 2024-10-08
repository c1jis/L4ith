// عند تحميل المستند
document.addEventListener('DOMContentLoaded', function() {
    // تغيير اللون عند النقر على الروابط في القائمة
    document.querySelectorAll('nav ul li a').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            // إزالة التحديد عن جميع الروابط
            document.querySelectorAll('nav ul li a').forEach(function(link) {
                link.classList.remove('active-link'); // استخدام فئة لتغيير النمط
            });

            // تمييز الرابط الذي تم النقر عليه
            anchor.classList.add('active-link'); // إضافة فئة للتحديد
        });
    });

    // إضافة تأثير التمرير السلس
    document.querySelectorAll('.scroll-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
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
        }
    });
});
