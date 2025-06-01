// === FUNCIONALIDAD ESPECÍFICA DE TODOS LOS ERRORES ===

// Filtros por categoría
function initCategoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categorySections = document.querySelectorAll('.category-section');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar/ocultar categorías
            categorySections.forEach(section => {
                const sectionCategory = section.getAttribute('data-category');
                
                if (category === 'all' || sectionCategory === category) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
            
            // Limpiar búsqueda
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.value = '';
            }
        });
    });
}

// Búsqueda de errores
function initErrorSearch() {
    const searchInput = document.getElementById('search-input');
    const errorCards = document.querySelectorAll('.error-card');
    const categorySections = document.querySelectorAll('.category-section');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            let hasResults = false;
            
            // Si hay búsqueda, mostrar todas las categorías y quitar filtros
            if (searchTerm) {
                categorySections.forEach(section => {
                    section.classList.remove('hidden');
                });
                filterButtons.forEach(btn => btn.classList.remove('active'));
                filterButtons[0].classList.add('active'); // Activar "Todos"
            }
            
            // Filtrar cards
            errorCards.forEach(card => {
                const code = card.getAttribute('data-code') || '';
                const name = card.querySelector('.error-name')?.textContent.toLowerCase() || '';
                const desc = card.querySelector('.error-desc')?.textContent.toLowerCase() || '';
                
                const matches = code.includes(searchTerm) || 
                              name.includes(searchTerm) || 
                              desc.includes(searchTerm);
                
                if (matches) {
                    card.style.display = 'block';
                    hasResults = true;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Ocultar categorías vacías
            categorySections.forEach(section => {
                const visibleCards = section.querySelectorAll('.error-card[style="display: block"], .error-card:not([style*="display: none"])');
                if (searchTerm && visibleCards.length === 0) {
                    section.style.display = 'none';
                } else {
                    section.style.display = 'block';
                }
            });
            
            // Mostrar mensaje de "no hay resultados"
            showNoResults(!hasResults && searchTerm);
        });
    }
}

// Mostrar mensaje de no hay resultados
function showNoResults(show) {
    let noResultsDiv = document.querySelector('.no-results');
    
    if (show && !noResultsDiv) {
        noResultsDiv = document.createElement('div');
        noResultsDiv.className = 'no-results';
        noResultsDiv.innerHTML = `
            <h3>🔍 No se encontraron errores</h3>
            <p>Prueba con otro término de búsqueda o navega por las categorías.</p>
        `;
        document.querySelector('.errors-catalog .container').appendChild(noResultsDiv);
    } else if (!show && noResultsDiv) {
        noResultsDiv.remove();
    }
}

// Efecto hover mejorado en las cards
function initCardEffects() {
    const errorCards = document.querySelectorAll('.error-card');
    
    errorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Pequeña animación en el número
            const number = this.querySelector('.error-number');
            if (number) {
                number.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const number = this.querySelector('.error-number');
            if (number) {
                number.style.transform = 'scale(1)';
            }
        });
    });
}

// Scroll suave a categorías (si se implementa navegación)
function initCategoryNavigation() {
    // Por si quieres añadir navegación rápida a categorías
    const categoryTitles = document.querySelectorAll('.category-title');
    
    categoryTitles.forEach(title => {
        title.style.cursor = 'pointer';
        title.addEventListener('click', function() {
            this.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// Inicialización específica de la página todos los errores
document.addEventListener('DOMContentLoaded', function() {
    initCategoryFilters();
    initErrorSearch();
    initCardEffects();
    initCategoryNavigation();
});