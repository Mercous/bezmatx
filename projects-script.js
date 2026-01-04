document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const projectToggles = document.querySelectorAll('.project-toggle');
    

    initFiltering();
    

    initProjectAccordion();

    initAnimations();
    
    
    function initFiltering() {
        if (!filterButtons.length || !projectItems.length) return;
        
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
               
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                
                this.classList.add('active');
                
                
                const filterValue = this.getAttribute('data-filter');
                
               
                filterProjects(filterValue);
            });
        });
    }
    
   
    function filterProjects(filterValue) {
        let hasVisibleProjects = false;
        
        projectItems.forEach((item, index) => {
            const category = item.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                item.style.display = 'flex';
                item.style.flexDirection = 'column';
                hasVisibleProjects = true;
                
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            } else {
                
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                
                closeProject(item);
                
                
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
        
        
        if (hasVisibleProjects) {
            const firstVisibleProject = document.querySelector('.project-item[style*="display: flex"]');
            if (firstVisibleProject) {
                setTimeout(() => {
                    openProject(firstVisibleProject);
                }, 100);
            }
        }
    }
    
    
    function initProjectAccordion() {
        projectToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.stopPropagation();
                
                const projectItem = this.closest('.project-item');
                const projectContent = projectItem.querySelector('.project-content');
                const isActive = projectContent.classList.contains('active');
                
               
                closeAllProjects();
                
               
                if (!isActive) {
                    openProject(projectItem);
                }
            });
        });
        
        
        projectItems.forEach(item => {
            const header = item.querySelector('.project-header');
            if (header) {
                header.addEventListener('click', function(e) {
                    if (!e.target.closest('.project-toggle')) {
                        const projectItem = this.closest('.project-item');
                        const projectContent = projectItem.querySelector('.project-content');
                        const isActive = projectContent.classList.contains('active');
                        
                        closeAllProjects();
                        
                        if (!isActive) {
                            openProject(projectItem);
                        }
                    }
                });
            }
        });
        
       
        if (projectItems.length > 0) {
            setTimeout(() => {
                openProject(projectItems[0]);
            }, 300);
        }
    }
    
    
    function openProject(projectItem) {
        const content = projectItem.querySelector('.project-content');
        const toggle = projectItem.querySelector('.project-toggle');
        
        if (content && toggle) {
            content.classList.add('active');
            toggle.classList.add('active');
            projectItem.classList.add('active');
        }
    }
    
    
    function closeProject(projectItem) {
        const content = projectItem.querySelector('.project-content');
        const toggle = projectItem.querySelector('.project-toggle');
        
        if (content && toggle) {
            content.classList.remove('active');
            toggle.classList.remove('active');
            projectItem.classList.remove('active');
        }
    }
    
    
    function closeAllProjects() {
        projectItems.forEach(item => {
            closeProject(item);
        });
    }
    
    
    function initAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, parseInt(entry.target.dataset.index || 0) * 100);
                }
            });
        }, observerOptions);
        
        
        projectItems.forEach((item, index) => {
            item.dataset.index = index;
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(item);
        });
    }
    
    
    initSystemMessages();
    
    
    function initSystemMessages() {
       
        const soonButtons = document.querySelectorAll('.btn[disabled]');
        soonButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('Этот проект находится в разработке. Следите за обновлениями!');
            });
        });
        
        
        const participationButtons = document.querySelectorAll('a[href="partners.html"]');
        participationButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                if (this.textContent.includes('Участвовать')) {
                    e.preventDefault();
                    showNotification('Переход на страницу сотрудничества для участия в проекте');
                    setTimeout(() => {
                        window.location.href = 'partners.html';
                    }, 1500);
                }
            });
        });
    }
    
    
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-info-circle"></i>
                <span>${message}</span>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: var(--black);
            color: var(--white);
            padding: 15px 20px;
            border-radius: var(--radius-sm);
            box-shadow: var(--shadow-hover);
            z-index: 9999;
            transform: translateX(100%);
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
            max-width: 350px;
        `;
        
        const notificationContent = notification.querySelector('.notification-content');
        notificationContent.style.cssText = `
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 14px;
        `;
        
        notificationContent.querySelector('i').style.cssText = `
            font-size: 18px;
            color: var(--white);
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
            notification.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            notification.style.opacity = '0';
            
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    
    addBackToTopButton();
    
    
    function addBackToTopButton() {
        const backToTopButton = document.createElement('button');
        backToTopButton.className = 'back-to-top';
        backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
        backToTopButton.title = 'Наверх';
        
        backToTopButton.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: var(--black);
            color: var(--white);
            border: none;
            border-radius: 50%;
            cursor: pointer;
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
            box-shadow: var(--shadow);
        `;
        
        document.body.appendChild(backToTopButton);
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTopButton.style.opacity = '1';
                backToTopButton.style.transform = 'translateY(0)';
            } else {
                backToTopButton.style.opacity = '0';
                backToTopButton.style.transform = 'translateY(20px)';
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});