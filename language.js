class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('siteLanguage') || 'ru';
        this.translations = translations;
        this.init();
    }
    
    init() {
        this.loadLanguage();
        
        document.querySelectorAll('.language-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                if (lang && this.translations[lang]) {
                    this.switchLanguage(lang);
                }
            });
        });
    }
    
    loadLanguage() {
        document.querySelectorAll('.language-btn').forEach(button => {
            if (button.dataset.lang === this.currentLang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        this.updatePageText();
    }
    
    switchLanguage(lang) {
        if (lang === this.currentLang) return;
        
        this.currentLang = lang;
        localStorage.setItem('siteLanguage', lang);
        
        document.querySelectorAll('.language-btn').forEach(button => {
            button.classList.remove('active');
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            }
        });
        
        this.updatePageText();
        
        this.showLanguageNotification(lang);
    }
    
    updatePageText() {
        const langData = this.translations[this.currentLang];
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (langData[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = langData[key];
                } else {
     
                    const translation = langData[key];
                    if (translation.includes('<br>')) {
                        element.innerHTML = translation;
                    } else {
                        element.textContent = translation;
                    }
                }
            }
        });
        
        document.documentElement.lang = this.currentLang;
        
        this.updateMetaTags();
    }
    
    updateMetaTags() {
        const pageTitles = {
            'index.html': this.currentLang === 'ru' ? 
                'Common Airwave — команда озвучки' : 
                'Common Airwave — voice acting team',
            'projects.html': this.currentLang === 'ru' ? 
                'Проекты — Common Airwave' : 
                'Projects — Common Airwave',
            'partners.html': this.currentLang === 'ru' ? 
                'Сотрудничество — Common Airwave' : 
                'Cooperation — Common Airwave',
            'player.html': this.currentLang === 'ru' ? 
                'Плеер — Common Airwave' : 
                'Player — Common Airwave'
        };
        
        const currentPage = window.location.pathname.split('/').pop();
        if (pageTitles[currentPage]) {
            document.title = pageTitles[currentPage];
        }
    }
    
    showLanguageNotification(lang) {
        const messages = {
            'ru': 'Язык изменён на Русский',
            'en': 'Language changed to English'
        };
        
       
        const notification = document.createElement('div');
        notification.className = 'language-notification';
        notification.textContent = messages[lang] || messages['en'];
        
        
        document.body.appendChild(notification);
        
        
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 10);
        

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 2500);
    }
    

    getTranslation(key) {
        return this.translations[this.currentLang][key] || key;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});