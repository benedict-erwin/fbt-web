// ===== Navigation =====
function toggleNav() {
    document.querySelector('.navbar-links').classList.toggle('open');
}

// Close mobile nav when clicking a link
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.navbar-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            document.querySelector('.navbar-links').classList.remove('open');
        });
    });
});

// ===== i18n Language Switcher =====
function setLanguage(lang) {
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        if (window.i18n && window.i18n[lang] && window.i18n[lang][key]) {
            el.innerHTML = window.i18n[lang][key];
        }
    });

    document.documentElement.lang = lang;

    // Update toggle button
    var toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
        toggleBtn.textContent = lang === 'id' ? 'EN' : 'ID';
    }

    // Save preference (shared across all pages)
    localStorage.setItem('fbt-lang', lang);
}

function toggleLanguage() {
    var currentLang = document.documentElement.lang || 'id';
    var newLang = currentLang === 'id' ? 'en' : 'id';
    setLanguage(newLang);
}

// Init language on load
(function() {
    var savedLang = localStorage.getItem('fbt-lang') || 'id';
    // Wait for DOM and i18n data
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setLanguage(savedLang);
        });
    } else {
        setLanguage(savedLang);
    }
})();
