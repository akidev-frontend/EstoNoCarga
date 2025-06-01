// === FUNCIONALIDAD ESPECÍFICA DE PÁGINAS DE ERROR ===

// Efecto en el código de error
function initErrorCodeAnimation() {
    const errorCodeDisplay = document.querySelector('.error-code-display');
    if (errorCodeDisplay) {
        errorCodeDisplay.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'pulse 0.5s infinite';
            }, 10);
            setTimeout(() => {
                this.style.animation = 'pulse 3s infinite';
            }, 2000);
        });
    }
}

// Inicialización específica de páginas de error
document.addEventListener('DOMContentLoaded', function() {
    initErrorCodeAnimation();
});