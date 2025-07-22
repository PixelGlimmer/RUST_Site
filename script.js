// Копирование текста
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent || element.innerText;
    
    navigator.clipboard.writeText(text).then(() => {
        // Показываем уведомление о копировании
        const originalText = element.textContent;
        element.textContent = "Скопировано!";
        
        setTimeout(() => {
            element.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Ошибка копирования: ', err);
    });
}

// Эффект "кровавых" капель при наведении на кнопки
document.querySelectorAll('button, a').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 5px rgba(231, 76, 60, 0.7)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.textShadow = 'none';
    });
});

// Анимация заголовка
const logo = document.querySelector('.logo h1');
logo.innerHTML = logo.textContent.split('').map(letter => 
    `<span style="transition: color 0.3s ${Math.random()*0.5}s">${letter}</span>`
).join('');

document.querySelectorAll('.logo h1 span').forEach(span => {
    span.addEventListener('mouseenter', () => {
        span.style.color = '#e74c3c';
    });
    span.addEventListener('mouseleave', () => {
        span.style.color = '';
    });
});
