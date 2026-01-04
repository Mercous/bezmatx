// Скрипт для страницы плеера с VK видео и поддержкой языка

document.addEventListener('DOMContentLoaded', function() {
    const projectsData = {
        'hazbin': {
            name: 'Отель Хазбин',
            name_en: 'Hazbin Hotel',
            description: 'Мюзикл-анимация о дочери Люцифера, Шарли, которая пытается перевоспитать грешников в своём отеле для давания им второго шанса попасть в Рай.',
            description_en: 'Musical animation about Lucifer\'s daughter, Charlie, who tries to rehabilitate sinners in her hotel to give them a second chance to get to Heaven.',
            episodes: [
                { 
                    id: 1, 
                    title: 'Пилотная серия',
                    title_en: 'Pilot Episode',
                    description: 'Знакомство с Шарли и её отелем для перевоспитания грешников', 
                    description_en: 'Introduction to Charlie and her hotel for rehabilitating sinners',
                    duration: '32:15', 
                    date: 'Январь 2023',
                    date_en: 'January 2023',
                    videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-220754053&id=456244914&hash=3c60be7d0ecd9776'
                },
                { 
                    id: 2, 
                    title: 'Ангельское нападение', 
                    title_en: 'Angel Attack',
                    description: 'Отель подвергается атаке ангелов-истребителей', 
                    description_en: 'The hotel is attacked by angel exterminators',
                    duration: '28:42', 
                    date: 'Март 2023',
                    date_en: 'March 2023',
                    videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-220754053&id=456244915&hash=4d70be8e1fce0887'
                },
                { 
                    id: 3, 
                    title: 'Новые жильцы', 
                    title_en: 'New Residents',
                    description: 'В отеле появляются новые постояльцы', 
                    description_en: 'New guests appear in the hotel',
                    duration: '26:18', 
                    date: 'Май 2023',
                    date_en: 'May 2023',
                    videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-220754053&id=456244916&hash=5e80be9f2fdf1998'
                },
                { 
                    id: 4, 
                    title: 'Музыкальный номер', 
                    title_en: 'Musical Number',
                    description: 'Шарли готовит большой музыкальный спектакль', 
                    description_en: 'Charlie prepares a big musical performance',
                    duration: '30:05', 
                    date: 'Август 2023',
                    date_en: 'August 2023',
                    videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-220754053&id=456244917&hash=6f90bea03fee2aa9'
                }
            ]
        },
        'helluva': {
            name: 'Адский Управляющий',
            name_en: 'Helluva Boss',
            description: 'Анимационный сериал о компании убийц в Аду, которые выполняют заказы от живых людей, желающих отомстить своим врагам.',
            description_en: 'Animated series about a company of assassins in Hell who carry out orders from living people who want to take revenge on their enemies.',
            episodes: [
                { 
                    id: 1, 
                    title: 'Пилот', 
                    title_en: 'Pilot',
                    description: 'Знакомство с Блицо и его командой', 
                    description_en: 'Introduction to Blitzo and his team',
                    duration: '22:30', 
                    date: 'Январь 2024',
                    date_en: 'January 2024',
                    videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-220754053&id=456244918&hash=7aa0bea14fff3bba'
                },
                { 
                    id: 2, 
                    title: 'Первое задание', 
                    title_en: 'First Assignment',
                    description: 'Команда получает свой первый заказ', 
                    description_en: 'The team receives their first order',
                    duration: '24:15', 
                    date: 'Февраль 2024',
                    date_en: 'February 2024',
                    videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-220754053&id=456244919&hash=8bb0bea25fff4ccb'
                },
                { 
                    id: 3, 
                    title: 'Проблемы с клиентом', 
                    title_en: 'Client Problems',
                    description: 'Не всё идет по плану с новым клиентом', 
                    description_en: 'Not everything goes according to plan with a new client',
                    duration: '21:45', 
                    date: 'Март 2024',
                    date_en: 'March 2024',
                    videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-220754053&id=456244920&hash=9cc0bea36fff5ddc'
                }
            ]
        },
        'guardians': {
            name: 'Стражи Галактики: Новая Эра',
            name_en: 'Guardians of the Galaxy: New Era',
            description: 'Фанфик по вселенной Marvel о приключениях Стражей Галактики после событий фильмов. Оригинальный сюжет с новыми персонажами.',
            description_en: 'Fan fiction based on the Marvel universe about the adventures of the Guardians of the Galaxy after the events of the films. Original plot with new characters.',
            episodes: [
                { 
                    id: 1, 
                    title: 'Возвращение', 
                    title_en: 'Return',
                    description: 'Стражи возвращаются после долгого отсутствия', 
                    description_en: 'The Guardians return after a long absence',
                    duration: '48:20', 
                    date: 'Июнь 2023',
                    date_en: 'June 2023',
                    videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-220754053&id=456244921&hash=add0bea47fff6eed'
                },
                { 
                    id: 2, 
                    title: 'Новая угроза', 
                    title_en: 'New Threat',
                    description: 'Появление нового врага галактического масштаба', 
                    description_en: 'The emergence of a new enemy of galactic scale',
                    duration: '52:15', 
                    date: 'Июль 2023',
                    date_en: 'July 2023',
                    videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-220754053&id=456244922&hash=bee0bea58fff7ffe'
                },
                { 
                    id: 3, 
                    title: 'Союзники', 
                    title_en: 'Allies',
                    description: 'Поиск новых союзников для борьбы с угрозой', 
                    description_en: 'Search for new allies to fight the threat',
                    duration: '46:30', 
                    date: 'Август 2023',
                    date_en: 'August 2023',
                    videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-220754053&id=456244923&hash=cff0bea69fff800f'
                }
            ]
        }
    };
    
    let currentLang = 'ru';
    
  
    function getUrlParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            project: params.get('project') || 'hazbin',
            episode: parseInt(params.get('episode')) || 1
        };
    }
    
   
    function initPlayer() {
        const params = getUrlParams();
        const projectId = params.project;
        const episodeNum = params.episode;
        
    
        const project = projectsData[projectId];
        if (!project) {
            window.location.href = 'player.html?project=hazbin&episode=1';
            return;
        }
        
      
        const episode = project.episodes.find(ep => ep.id === episodeNum);
        if (!episode) {
            window.location.href = `player.html?project=${projectId}&episode=1`;
            return;
        }
        
      
        updateProjectInfo(project, episode, episodeNum);
        
       
        updateEpisodesList(project, episodeNum, projectId);
        
       
        loadVKVideo(episode.videoUrl);
        
        
        initEpisodeNavigation(project, episodeNum, projectId);
        
       
        setupLanguageListener();
    }
    
   
    function setupLanguageListener() {
      
        if (window.languageManager) {
            currentLang = window.languageManager.currentLang;
            
           
            document.addEventListener('languageUpdated', () => {
                currentLang = window.languageManager.currentLang;
                updatePlayerLanguage();
            });
        }
    }
    
   
    function updatePlayerLanguage() {
        const params = getUrlParams();
        const projectId = params.project;
        const episodeNum = params.episode;
        
        const project = projectsData[projectId];
        if (!project) return;
        
        const episode = project.episodes.find(ep => ep.id === episodeNum);
        if (!episode) return;
        
       
        currentLang = window.languageManager ? window.languageManager.currentLang : 'ru';
        
       
        updateProjectInfo(project, episode, episodeNum);
        
       
        updateEpisodesList(project, episodeNum, projectId);
        
        
        initEpisodeNavigation(project, episodeNum, projectId);
    }
    
   
    function updateProjectInfo(project, episode, episodeNum) {
        
        const projectName = currentLang === 'en' && project.name_en ? project.name_en : project.name;
        const projectDescription = currentLang === 'en' && project.description_en ? project.description_en : project.description;
        const episodeTitle = currentLang === 'en' && episode.title_en ? episode.title_en : episode.title;
        const episodeDescription = currentLang === 'en' && episode.description_en ? episode.description_en : episode.description;
        const episodeDate = currentLang === 'en' && episode.date_en ? episode.date_en : episode.date;
        
        
        document.getElementById('player-episode-title').textContent = episodeTitle;
        document.getElementById('episode-duration').textContent = episode.duration;
        document.getElementById('episode-date').textContent = episodeDate;
        document.getElementById('episode-description-text').textContent = episodeDescription;
        
        
        document.getElementById('project-title-sidebar').textContent = projectName;
        document.getElementById('project-description-sidebar').textContent = projectDescription;
        document.getElementById('project-name-breadcrumb').textContent = projectName;
        
       
        const episodeCount = project.episodes.length;
        let episodesText;
        if (currentLang === 'en') {
            episodesText = `${episodeCount} ${episodeCount === 1 ? 'episode' : 'episodes'}`;
        } else {
            episodesText = `${episodeCount} ${episodeCount === 1 ? 'серия' : 
                          (episodeCount >= 2 && episodeCount <= 4 ? 'серии' : 'серий')}`;
        }
        document.getElementById('episodes-count').textContent = episodesText;
        
       
        const statusElement = document.querySelector('.project-status');
        if (statusElement) {
            if (currentLang === 'en') {
                statusElement.textContent = 'Completed';
            } else {
                statusElement.textContent = 'Завершён';
            }
        }
        
        
        updateProjectMetaInfo(project);
    }
    
    
    function updateProjectMetaInfo(project) {
        const metaItems = document.querySelectorAll('.project-meta-sidebar .meta-item');
        
        if (metaItems.length >= 3) {
            
            const episodeCount = project.episodes.length;
            let episodesText;
            if (currentLang === 'en') {
                episodesText = `${episodeCount} ${episodeCount === 1 ? 'episode' : 'episodes'}`;
            } else {
                episodesText = `${episodeCount} серий`;
            }
            metaItems[0].querySelector('span').textContent = episodesText;
            
          
            const yearSpan = metaItems[1].querySelector('span');
            const year = yearSpan.textContent;
            
            
            
            let readersText;
            if (currentLang === 'en') {
                readersText = `${project.episodes[0].id === 1 ? '12' : '10'} readers`;
            } else {
                readersText = `${project.episodes[0].id === 1 ? '12' : '10'} чтецов`;
            }
            metaItems[2].querySelector('span').textContent = readersText;
        }
    }
    
    
    function loadVKVideo(videoUrl) {
        const videoEmbed = document.getElementById('vk-video-embed');
        const videoLoading = document.getElementById('vk-video-loading');
        
       
        videoEmbed.innerHTML = '';
        
        
        if (videoLoading) {
            const loadingText = videoLoading.querySelector('p');
            if (loadingText) {
                loadingText.textContent = currentLang === 'en' ? 'Loading video...' : 'Загрузка видео...';
            }
        }
        
        
        const iframe = document.createElement('iframe');
        iframe.src = videoUrl;
        iframe.width = '100%';
        iframe.height = '600';
        iframe.frameBorder = '0';
        iframe.allowFullscreen = '1';
        iframe.style.backgroundColor = '#000';
        iframe.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
        iframe.title = 'VK Video Player';
        
        
        videoEmbed.appendChild(iframe);
        
        
        iframe.onload = function() {
            
            setTimeout(() => {
                if (videoLoading) {
                    videoLoading.style.display = 'none';
                }
                showNotification(currentLang === 'en' ? 'Video loaded' : 'Видео загружено');
            }, 1000);
        };
        
        
        iframe.onerror = function() {
            if (videoLoading) {
                videoLoading.innerHTML = `
                    <div class="video-error">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h3>${currentLang === 'en' ? 'Video Loading Error' : 'Ошибка загрузки видео'}</h3>
                        <p>${currentLang === 'en' ? 'Failed to load video. Please try again later.' : 'Не удалось загрузить видео. Пожалуйста, попробуйте позже.'}</p>
                        <button class="retry-button" onclick="location.reload()">
                            <i class="fas fa-redo"></i>
                            ${currentLang === 'en' ? 'Try Again' : 'Попробовать снова'}
                        </button>
                    </div>
                `;
            }
            showNotification(currentLang === 'en' ? 'Video loading error' : 'Ошибка загрузки видео', 'error');
        };
    }
    
    
    function updateEpisodesList(project, currentEpisodeNum, projectId) {
        const episodesList = document.getElementById('episodes-list');
        
       
        episodesList.innerHTML = '';
        
        
        project.episodes.forEach(episode => {
            const isActive = episode.id === currentEpisodeNum;
            const episodeTitle = currentLang === 'en' && episode.title_en ? episode.title_en : episode.title;
            const episodeDescription = currentLang === 'en' && episode.description_en ? episode.description_en : episode.description;
            
            const episodeItem = document.createElement('a');
            episodeItem.href = `player.html?project=${projectId}&episode=${episode.id}`;
            episodeItem.className = `episode-item-sidebar ${isActive ? 'active' : ''}`;
            episodeItem.innerHTML = `
                <div class="episode-number-sidebar">${episode.id}</div>
                <div class="episode-info-sidebar">
                    <h4>${episodeTitle}</h4>
                    <p>${episodeDescription}</p>
                </div>
                <div class="episode-duration-sidebar">${episode.duration}</div>
            `;
            
            episodesList.appendChild(episodeItem);
        });
    }
    
    
    function initEpisodeNavigation(project, currentEpisodeNum, projectId) {
        const prevEpisode = project.episodes.find(ep => ep.id === currentEpisodeNum - 1);
        const nextEpisode = project.episodes.find(ep => ep.id === currentEpisodeNum + 1);
        
        const prevBtn = document.getElementById('prev-episode-btn');
        const nextBtn = document.getElementById('next-episode-btn');
        const prevTitle = document.getElementById('prev-episode-title');
        const nextTitle = document.getElementById('next-episode-title');
        
        
        const prevLabel = document.querySelector('.prev-episode .nav-btn-label');
        const nextLabel = document.querySelector('.next-episode .nav-btn-label');
        
        if (prevLabel && window.languageManager) {
            prevLabel.textContent = window.languageManager.getTranslation('player.previous');
        }
        
        if (nextLabel && window.languageManager) {
            nextLabel.textContent = window.languageManager.getTranslation('player.next');
        }
        
        if (prevEpisode) {
            const prevEpisodeTitle = currentLang === 'en' && prevEpisode.title_en ? prevEpisode.title_en : prevEpisode.title;
            prevTitle.textContent = prevEpisodeTitle;
            prevBtn.onclick = function() {
                window.location.href = `player.html?project=${projectId}&episode=${prevEpisode.id}`;
            };
            prevBtn.disabled = false;
            prevBtn.style.opacity = '1';
            prevBtn.style.cursor = 'pointer';
        } else {
            prevBtn.disabled = true;
            prevTitle.textContent = currentLang === 'en' ? 'No previous' : 'Нет предыдущей';
            prevBtn.style.opacity = '0.5';
            prevBtn.style.cursor = 'not-allowed';
        }
        
        if (nextEpisode) {
            const nextEpisodeTitle = currentLang === 'en' && nextEpisode.title_en ? nextEpisode.title_en : nextEpisode.title;
            nextTitle.textContent = nextEpisodeTitle;
            nextBtn.onclick = function() {
                window.location.href = `player.html?project=${projectId}&episode=${nextEpisode.id}`;
            };
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
        } else {
            nextBtn.disabled = true;
            nextTitle.textContent = currentLang === 'en' ? 'No next' : 'Нет следующей';
            nextBtn.style.opacity = '0.5';
            nextBtn.style.cursor = 'not-allowed';
        }
    }
    
    
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = 'player-notification';
        notification.textContent = message;
        
        if (type === 'error') {
            notification.style.backgroundColor = '#dc3545';
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    
    function addBackToTopButton() {
        const backToTopButton = document.createElement('button');
        backToTopButton.className = 'back-to-top';
        backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
        backToTopButton.title = currentLang === 'en' ? 'Back to top' : 'Наверх';
        
        document.body.appendChild(backToTopButton);
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        
        if (window.languageManager) {
            document.addEventListener('languageUpdated', () => {
                backToTopButton.title = window.languageManager.currentLang === 'en' ? 'Back to top' : 'Наверх';
            });
        }
    }
    
    
    function updateTeamInfo() {
        const teamInfo = document.querySelector('.team-info-sidebar p');
        if (teamInfo) {
            if (currentLang === 'en') {
                teamInfo.textContent = 'Voice acting was done by the Common Airwave team using professional equipment and experienced readers.';
            } else {
                teamInfo.textContent = 'Озвучка выполнена командой Common Airwave с использованием профессионального оборудования и участием опытных чтецов.';
            }
        }
        
        const teamLink = document.querySelector('.team-link span');
        if (teamLink && window.languageManager) {
            teamLink.textContent = window.languageManager.getTranslation('player.joinTeam');
        }
    }
    
    
    function updateAllPlayerTexts() {
        
        updateTeamInfo();
        
       
        const descriptionTitle = document.querySelector('.episode-description h3');
        if (descriptionTitle && window.languageManager) {
            descriptionTitle.textContent = window.languageManager.getTranslation('player.episodeDescription');
        }
        
       
        const metaItems = document.querySelectorAll('.episode-meta-info .meta-item span');
        if (metaItems.length >= 3 && window.languageManager) {
            
            if (metaItems[0]) {
                metaItems[0].textContent = window.languageManager.getTranslation('player.voiceOver');
            }
            
            if (metaItems[1]) {
                metaItems[1].textContent = window.languageManager.getTranslation('player.language');
            }
            
            if (metaItems[2]) {
                metaItems[2].textContent = window.languageManager.getTranslation('player.subtitles');
            }
        }
        
        
        const episodesHeader = document.querySelector('.episodes-header h3');
        if (episodesHeader && window.languageManager) {
            episodesHeader.textContent = window.languageManager.getTranslation('player.episodes');
        }
        
        
        const allProjectsBtn = document.querySelector('.project-actions-sidebar .btn span');
        if (allProjectsBtn && window.languageManager) {
            allProjectsBtn.textContent = window.languageManager.getTranslation('player.allProjects');
        }
        
        
        const breadcrumbLink = document.querySelector('.breadcrumb-link span');
        if (breadcrumbLink && window.languageManager) {
            breadcrumbLink.textContent = window.languageManager.getTranslation('nav.back');
        }
    }
    
    
    function createLanguageUpdateEvent() {
        if (!window.languageUpdatedEvent) {
            window.languageUpdatedEvent = new Event('languageUpdated');
        }
        return window.languageUpdatedEvent;
    }
    
    
    if (window.languageManager) {
        const originalSwitchLanguage = window.languageManager.switchLanguage;
        window.languageManager.switchLanguage = function(lang) {
            originalSwitchLanguage.call(this, lang);
            
           
            document.dispatchEvent(createLanguageUpdateEvent());
            
            
            updateAllPlayerTexts();
            updatePlayerLanguage();
        };
    }
    
    
    initPlayer();
    addBackToTopButton();
    updateAllPlayerTexts();
    
    
    window.addEventListener('orientationchange', function() {
        
        setTimeout(() => {
            const iframe = document.querySelector('.vk-video-embed iframe');
            if (iframe) {
                
                const currentSrc = iframe.src;
                iframe.src = '';
                setTimeout(() => {
                    iframe.src = currentSrc;
                }, 100);
            }
        }, 300);
    });
    
    
    const backToProjectsBtn = document.querySelector('.telegram-btn span');
    if (backToProjectsBtn && window.languageManager) {
        backToProjectsBtn.textContent = window.languageManager.getTranslation('nav.back');
    }
    
    
    if (!document.querySelector('#player-notifications-styles')) {
        const style = document.createElement('style');
        style.id = 'player-notifications-styles';
        style.textContent = `
            .player-notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background-color: var(--black);
                color: var(--white);
                padding: 12px 20px;
                border-radius: var(--radius-sm);
                font-size: 14px;
                z-index: 9998;
                opacity: 0;
                transform: translateY(-10px);
                transition: all 0.3s ease;
                max-width: 280px;
                box-shadow: var(--shadow);
            }
            
            .back-to-top {
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
            }
            
            .back-to-top.visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            @media (max-width: 768px) {
                .player-notification {
                    top: 80px;
                    right: 10px;
                    padding: 10px 15px;
                    font-size: 12px;
                    max-width: 200px;
                }
                
                .back-to-top {
                    width: 44px;
                    height: 44px;
                    bottom: 20px;
                    right: 20px;
                    font-size: 18px;
                }
            }
            
            @media (max-width: 480px) {
                .back-to-top {
                    width: 40px;
                    height: 40px;
                    bottom: 16px;
                    right: 16px;
                    font-size: 16px;
                }
            }
        `;
        document.head.appendChild(style);
    }
});