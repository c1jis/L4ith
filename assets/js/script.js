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

    // التعامل مع نموذج فحص الروابط
    const linkForm = document.getElementById('link-check-form');
    linkForm.addEventListener('submit', function(event) {
        event.preventDefault(); // منع الإرسال الافتراضي

        const url = document.getElementById('url').value.trim();
        const resultDiv = document.getElementById('link-check-result');

        if (url === '') {
            resultDiv.innerHTML = 'يرجى إدخال رابط.';
            return;
        }

        // إرسال طلب إلى API
        fetch('https://www.virustotal.com/vtapi/v2/url/report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `apikey=58bd99c710a8c37a5b014c8971db4c7a14540798a52fdc96a3348e8594daf82d&resource=${encodeURIComponent(url)}`
        })
        .then(response => response.json())
        .then(data => {
            if (data.positives > 0) {
                resultDiv.innerHTML = 'الرابط غير آمن.';
            } else {
                resultDiv.innerHTML = 'الرابط آمن.';
            }
        })
        .catch(error => {
            resultDiv.innerHTML = 'حدث خطأ أثناء فحص الرابط.';
            console.error('Error:', error);
        });
    });
});
