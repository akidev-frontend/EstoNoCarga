// === FUNCIONALIDAD ESPECÍFICA DEL HOME ===

// Easter egg: click en el 404 hero
function initHeroEasterEgg() {
    const errorCode = document.querySelector('.error-code');
    if (errorCode) {
        errorCode.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'glitch 0.5s infinite';
            }, 10);
            setTimeout(() => {
                this.style.animation = 'glitch 3s infinite';
            }, 2000);
        });
    }
}

// Efecto hover en error items
function initErrorItemsHover() {
    document.querySelectorAll('.error-item').forEach(item => {
        item.addEventListener('click', function() {
            const errorNumber = this.querySelector('.error-number').textContent;
            console.log(`Navegando a error ${errorNumber}`);
        });
    });
}

// Inicialización específica del home
document.addEventListener('DOMContentLoaded', function() {
    initHeroEasterEgg();
    initErrorItemsHover();
});