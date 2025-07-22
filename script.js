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