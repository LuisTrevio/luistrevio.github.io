
let awi2 = false
let LastScrollY = 170
window.addEventListener("scroll", () => {
    if(LastScrollY < window.scrollY) {

        document.querySelectorAll('.button-scroll').forEach((result) => { result.classList.add('button-scroll-on');})
        document.querySelectorAll('.dst').forEach((result) => { result.classList.add('dst-on');})
        document.querySelectorAll('.animate').forEach((result) => { result.classList.add('animate-bur-on');})
        
        document.querySelectorAll('.vid').forEach((result) => { result.classList.add('vid-on');})
        document.querySelectorAll('.ltext').forEach((result) => { result.classList.add('ltext-on');})
        document.querySelectorAll('.rtext').forEach((result) => { result.classList.add('rtext-on');})
        awi2 = true
    } else { 
        
        document.querySelectorAll('.button-scroll').forEach((result) => { result.classList.remove('button-scroll-on');})
        document.querySelectorAll('.dst').forEach((result) => { result.classList.remove('dst-on');})

        document.querySelectorAll('.animate').forEach((result) => { result.classList.remove('animate-bur-on');})
         awi2 = false
    }
})

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    let smoother = ScrollSmoother.create({
        wrapper: ".content-center",
        content: ".stock-detalles",
        smooth: 1.2,
    });
    //kill the scroll trigger when the page is reloaded
    ScrollTrigger.refresh();
    ScrollSmoother.refresh();

    //the content padding is removed

    document.querySelector('.stock-detalles').style.padding = '70px 0px 30px 0px';
    if (window.innerWidth <= 786) { smoother.kill(); document.querySelector('.stock-detalles').style.padding = '0px';}

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 786) {
            smoother.kill();
            document.querySelector('.stock-detalles').style.padding = '0px';
        } else {
            smoother = ScrollSmoother.create({
                wrapper: ".content-center",
                content: ".stock-detalles",
                smooth: 1.2,
            });
            document.querySelector('.stock-detalles').style.padding = '70px 0px 30px 0px';
        }
        ScrollTrigger.refresh();
        ScrollSmoother.refresh();
    });
});

//se reinicia la pagina con location.reload(); pero mejor no hacer esto

//Empieza a contar el scroll y activa las animaciones en el menú
/*
let LastScrollY3 = 170
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

    const safariClasses = [
        ['.sar-web', 'sar-on'],
        ['.img-saf', 'img-safari'],
        ['.off-saf', 'off-safari'],
        ['.sms-saf', 'sms-safari']
    ];

    safariClasses.forEach(([selector, className]) => {
        document.querySelectorAll(selector).forEach(result => result.classList.add(className));
    });

    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0B0A0A');
   
    window.addEventListener("scroll", () => {
        const toggleClasses = [
            ['.animate-safari', 'animate-safari-on'],
            ['.name-safari', 'name-safari-on'],
            ['.header-safari', 'header-saf-on'],
            ['.h1-safari', 'h1-saf-on'],
        ];

        toggleClasses.forEach(([selector, className]) => {
            document.querySelectorAll(selector).forEach(result => {
                result.classList.toggle(className, LastScrollY3 < window.scrollY);
            });
        });
    });
}
*/
let LastScrollY2 = 0
window.addEventListener("scroll", () => {
    if(LastScrollY2 < window.scrollY) {
        document.querySelectorAll('.alert-dunot').forEach((result) => { result.classList.add('alert-donot');})
    }
    else {
        document.querySelectorAll('.alert-dunot').forEach((result) => { result.classList.remove('alert-donot');})
    }
})

//Imagen aleatoria en la página principal
const images = [
    'cato1.gif',
    'cato2.gif',
    'cato3.gif',
    'cato4.gif',
    'profile.png'
];
const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];
document.querySelector('.img-random').style.backgroundImage = `url(svg/${randomImage})`;
document.querySelector('.img-random').style.backgroundSize = 'cover';

document.querySelector('.img-random').addEventListener('click', () => {

    
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.querySelector('.img-random').style.backgroundImage = `url(svg/${randomImage})`;
    document.querySelector('.img-random').style.backgroundSize = 'cover';

    document.querySelectorAll('.awi').forEach((result) => {result.classList.add('awiwi')});
    setTimeout(() => {
        document.querySelectorAll('.awi').forEach((result) => {result.classList.remove('awiwi')});
    }, 100);

    if (awi2) {
       document.querySelectorAll('.awi2').forEach((result) => {result.classList.add('awiwi2')});
        setTimeout(() => {
        document.querySelectorAll('.awi2').forEach((result) => {result.classList.remove('awiwi2')});
        }, 100);
    }
});


//Menu en Dispositivos Móviles
function Dash() {
    const toggleClasses = [
        ['.menu-dash-up', 'menu-up'],
        ['.scr-fr', 'scroll-frost'],
        ['.bar-1', 'bur-1-up'],
        ['.bar-2', 'bur-2-up'],
        ['.bar-3', 'bur-3-up'],
        ['.box-up', 'box-tool-up'],
        ['.grid-up', 'grid-tool-up'],
        ['.select-up', 'select-ani-up'],
        ['.music-up', 'music-dash-up'],
        ['.block-up', 'top-block-up']
    ];

    toggleClasses.forEach(([selector, className]) => {
        document.querySelectorAll(selector).forEach(result => result.classList.toggle(className));
    });

    //tipwav.play();
    //tipwav.currentTime = 0;
    /*
    if(audio.paused) {
        document.querySelectorAll('.bumper').forEach((result) => {result.classList.remove('bumper-menu')})
    }  
    else {
        document.querySelectorAll('.bumper').forEach((result) => {result.classList.add('bumper-menu')})
    }*/
}

//Menu de desplazamiento hacia arriba (Mobile)
function Top() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.querySelectorAll('.top-ani').forEach((result) => {result.classList.add('top-animated')});
    document.querySelectorAll('.block-m').forEach((result) => {result.classList.add('block-menu')});
    setTimeout(() => {
        document.querySelectorAll('.top-ani').forEach((result) => {result.classList.remove('top-animated')});
    }, 100);
    setTimeout(() => {
        document.querySelectorAll('.block-m').forEach((result) => {result.classList.remove('block-menu')});
    }, 1000);
    //tipwav.play();
    //tipwav.currentTime = 0;
}

//PopUp o Ventana Modal
function Pop() {
    const toggleClasses = [
        ['.Pop-Exit', 'Pop-out'],
        ['.Status-Ani', 'Status-Animated'],
        ['.scr-fr', 'scroll-frost'],
        ['.close-up', 'Pop-Close-Up']
    ];

    toggleClasses.forEach(([selector, className]) => {
        document.querySelectorAll(selector).forEach(result => result.classList.toggle(className));
    });

    const classesToRemove = [
        'Pop-VS-Out', 'Pop-Git-Out', 'Pop-Fig-Out', 'Pop-HTML-Out', 'Pop-CSS-Out',
        'Pop-JS-Out', 'Pop-PY-Out', 'Pop-SQL-Out', 'Pop-Fr-Out', 'Pop-As-Out',
        'Pop-Office-Out', 'Pop-Mail-Out', 'Pop-Warn-Out', 'Pop-Share-Out' ,'Pop-Flex-Out', 'Pop-Magic-Out', 
        'Pop-Waltz-Out', 'Pop-Tech-Out', 'Pop-P1-Out', 'Pop-P2-Out', 'Pop-P3-Out', 'Pop-P4-Out'
    ];

    classesToRemove.forEach(className => {
        document.querySelectorAll(`.${className.replace('-Out', '-O')}`).forEach(result => {
            result.classList.remove(className);
        });
    });

    document.querySelector('.Pop-Waltz').scrollTop = 0;
    document.querySelector('.Pop-Tech').scrollTop = 0;
    
    document.querySelector('.reels-socialmedia').scrollLeft = 0;
    document.querySelectorAll('.trans-img').forEach((result) => {result.classList.remove('trans-img-off')});
    document.querySelectorAll('.HTML-Button').forEach((result) => {result.classList.remove('Close-HTML')});
}


//PopUp de las Habilidades
const popFunctions = [
    ['PopVS', 'Pop-VS-O', 'Pop-VS-Out'],
    ['PopGit', 'Pop-Git-O', 'Pop-Git-Out'],
    ['PopFig', 'Pop-Fig-O', 'Pop-Fig-Out'],
    ['PopHTML', 'Pop-HTML-O', 'Pop-HTML-Out'],
    ['PopCSS', 'Pop-CSS-O', 'Pop-CSS-Out'],
    ['PopJS', 'Pop-JS-O', 'Pop-JS-Out'],
    ['PopPY', 'Pop-PY-O', 'Pop-PY-Out'],
    ['PopSQL', 'Pop-SQL-O', 'Pop-SQL-Out'],
    ['PopFr', 'Pop-Fr-O', 'Pop-Fr-Out'],
    ['PopAs', 'Pop-As-O', 'Pop-As-Out'],
    ['PopOffice', 'Pop-Office-O', 'Pop-Office-Out'],
    ['PopMail', 'Pop-Mail-O', 'Pop-Mail-Out'],
    ['PopWarn', 'Pop-Warn-O', 'Pop-Warn-Out'],
    ['PopWaltz', 'Pop-Waltz-O', 'Pop-Waltz-Out'],
    ['PopShare', 'Pop-Share-O', 'Pop-Share-Out'],
    ['PopTech', 'Pop-Tech-O', 'Pop-Tech-Out'],
    ['PopPhoto1', 'Pop-P1-O', 'Pop-P1-Out'],
    ['PopPhoto2', 'Pop-P2-O', 'Pop-P2-Out'],
    ['PopPhoto3', 'Pop-P3-O', 'Pop-P3-Out'],
    ['PopPhoto4', 'Pop-P4-O', 'Pop-P4-Out']
];

popFunctions.forEach(([funcName, selector, className]) => {
    window[funcName] = () => {
        document.querySelectorAll(`.${selector}`).forEach(result => {
            result.classList.add(className);
        });
        setTimeout(() => { 
            document.querySelector('.reels-socialmedia').scrollTo(50, 0);
        },100); 
    };
});

//las popFunctions cuando están abiertas, se pueden arrastrar con el mouse
document.querySelectorAll('.Pop-Exit.Pop-out').forEach((result) => {
    result.addEventListener('mousedown', (event) => {
        const popElement = event.currentTarget;
        const offsetX = event.clientX - popElement.getBoundingClientRect().left;
        const offsetY = event.clientY - popElement.getBoundingClientRect().top;

        function mouseMoveHandler(e) {
            popElement.style.left = `${e.clientX - offsetX}px`;
            popElement.style.top = `${e.clientY - offsetY}px`;
        }

        function mouseUpHandler() {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });
});

//function tip() {tipwav.play();tipwav.currentTime = 0;}

window.addEventListener("load", () => {
    const warnClosed = localStorage.getItem('🍪');
    if (warnClosed === 'true') {    
    document.querySelectorAll('.Pop-Warn-O').forEach((result) => { result.classList.remove('Pop-Warn-Out');})
    } else {
    document.querySelectorAll('.Pop-Warn-O').forEach((result) => { result.classList.add('Pop-Warn-Out');})
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' && document.querySelector('.Pop-Exit.Pop-out')) {
        event.preventDefault();
        const focusableElements = document.querySelectorAll('.Pop-Exit.Pop-out a, .Pop-Exit.Pop-out button, .Pop-Exit.Pop-out input, .Pop-Exit.Pop-out textarea');
        if (focusableElements.length > 0) {
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            if (document.activeElement === lastElement && !event.shiftKey) {
                firstElement.focus();
            } else if (document.activeElement === firstElement && event.shiftKey) {
                lastElement.focus();
            }
        }
    }
});

//function CloseWarn() { localStorage.setItem('🍪', 'true');  document.querySelectorAll('.Pop-Warn-O').forEach((result) => { result.classList.remove('Pop-Warn-Out');})}

//PopUp de las Habilidades pero de Omitir
function Ommit() {
    const classesToRemove = [
        'Pop-VS-Out', 'Pop-Git-Out', 'Pop-Fig-Out', 'Pop-HTML-Out', 'Pop-CSS-Out',
        'Pop-JS-Out', 'Pop-PY-Out', 'Pop-SQL-Out', 'Pop-Fr-Out', 'Pop-As-Out', 'Pop-Share-Out',
    ];

    classesToRemove.forEach(className => {
        document.querySelectorAll(`.${className.replace('-Out', '-O')}`).forEach(result => {
            result.classList.remove(className);
        });
    });
}

function Ommit2() {
    const classesToRemove = [
        'Pop-Waltz-Out', 'Pop-Tech-Out'
    ];

    classesToRemove.forEach(className => {
        document.querySelectorAll(`.${className.replace('-Out', '-O')}`).forEach(result => {
            result.classList.remove(className);
        });
    });

    document.querySelector('.Pop-Waltz').scrollTop = 0;
    document.querySelector('.Pop-Tech').scrollTop = 0;
}

function Ommit3() {
    const classesToRemove = [
        'Pop-P1-Out', 'Pop-P2-Out', 'Pop-P3-Out', 'Pop-P4-Out'
    ];

    classesToRemove.forEach(className => {
        document.querySelectorAll(`.${className.replace('-Out', '-O')}`).forEach(result => {
            result.classList.remove(className);
        });
    });

    document.querySelectorAll('.trans-img').forEach((result) => {result.classList.add('trans-img-off')});
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.querySelector('.Pop-Exit.Pop-out')) {
        Pop();
    }
});

function PopFlex() {document.querySelectorAll('.Pop-Flex-O').forEach((result) => {result.classList.add('Pop-Flex-Out')})}
function PopMagic() {document.querySelectorAll('.Pop-Magic-O').forEach((result) => {result.classList.add('Pop-Magic-Out')})}

const rightButtons = Array.from(document.getElementsByClassName('slider-right'));
const leftButtons = Array.from(document.getElementsByClassName('slider-left'));
const containers = Array.from(document.getElementsByClassName('reel-screenshots'));

let index = 0;
for (const rightButton of rightButtons) {
    const container = containers[index];
    rightButton.addEventListener("click", function () {
        container.scrollLeft += 150;
    });
    index++;
}

index = 0;
for (const leftButton of leftButtons) {
    const container = containers[index];
    leftButton.addEventListener("click", function () {
        container.scrollLeft -= 150;
    });
    index++;
}

containers.forEach(container => {
    const leftButton = container.previousElementSibling;
    leftButton.disabled = true;
    leftButton.classList.add('icon-o-left');
});


containers.forEach(container => {
    container.addEventListener("scroll", function () {
        const rightButton = container.nextElementSibling;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            rightButton.disabled = true;
            rightButton.classList.add('icon-o-right');
        } else {
            rightButton.disabled = false;
            rightButton.classList.remove('icon-o-right');
        }
    });
});

containers.forEach(container => {
    container.addEventListener("scroll", function () {
        const leftButton = container.previousElementSibling;
        if (container.scrollLeft === 0) {
            leftButton.disabled = true;
            leftButton.classList.add('icon-o-left');
        } else {
            leftButton.disabled = false;
            leftButton.classList.remove('icon-o-left');
        }
    });
});


document.querySelectorAll(".email-button").forEach(CopyButton => {
    CopyButton.addEventListener("click", () => {
        const targetElement = document.querySelector(CopyButton.dataset.copy);
        const Text2Copy = targetElement.textContent
        .replace(/\s+/g, " ")
        .trim();

        navigator.clipboard.writeText(Text2Copy).then(() => {
            document.querySelectorAll('.button-ar').forEach((result) => {result.classList.add('button-air')})
            CopyButton.disable = true;
            setTimeout (() => {
            CopyButton.disable = false;
            document.querySelectorAll('.button-ar').forEach((result) => {result.classList.remove('button-air')})
            }, 2000); 
        })
    })
})


/* REPRODUCTOR DE MÚSICA
const audio = new Audio('music/hamster.mp3');

function Play() {
    const toggleClasses = [
        ['.Play', 'Play-Stop'],
        ['.Stop', 'Stop-Play']
    ];

    toggleClasses.forEach(([selector, className]) => {
        document.querySelectorAll(selector).forEach(result => result.classList.toggle(className));
    });

    if (audio.paused) {
        audio.play();
        document.querySelector('.music-progress-bar').style.animation = 'progress 3s linear infinite';
        document.querySelectorAll('.Play-i').forEach((result) => {result.classList.add('icon-pause') , result.classList.remove('icon-play')})
        document.querySelectorAll('.gradient-s').forEach((result) => {result.classList.remove('gradient-loading')})
        document.querySelectorAll('.bumper').forEach((result) => {result.classList.add('bumper-menu')}) 
    } else {
        audio.pause();
        document.querySelector('.music-progress-bar').style.animation = 'none';
        document.querySelectorAll('.Play-i').forEach((result) => {result.classList.remove('icon-pause'), result.classList.add('icon-play')}) 
  
    }
}
*/
function Volume() {
    document.querySelectorAll('.Volume-stop').forEach((result) => {result.classList.toggle('volume-colapse')});
    document.querySelectorAll('.Volume-i').forEach((result) => {result.classList.toggle('volume-hover')});
    document.querySelectorAll('.expande-pad').forEach((result) => {result.classList.toggle('music-expande')});
    document.querySelectorAll('.touch-volume').forEach((result) => {result.classList.toggle('volume-touch')});
}

document.addEventListener('click', function(event) {
    if (!event.target.closest('.music')) {
        document.querySelectorAll('.touch-volume').forEach((result) => {result.classList.remove('volume-touch')});
        document.querySelectorAll('.Volume-stop').forEach((result) => {result.classList.remove('volume-colapse')});
        document.querySelectorAll('.Volume-i').forEach((result) => {result.classList.remove('volume-hover')});
        document.querySelectorAll('.expande-pad').forEach((result) => {result.classList.remove('music-expande')});
    }
});

/* PAUSAR, DETENER Y PROGRESO DEL AUDIO
audio.addEventListener('pause', () => {
    document.querySelectorAll('.Play-i').forEach((result) => {result.classList.remove('icon-pause'), result.classList.add('icon-play')})
    document.querySelectorAll('.gradient-s').forEach((result) => {result.classList.add('gradient-loading')})
});

audio.addEventListener('ended', () => {
    document.querySelectorAll('.Play-i').forEach((result) => {result.classList.remove('icon-pause'), result.classList.add('icon-play')})
    document.querySelector('.music-progress-bar').style.animation = 'none';
});

const progress = document.querySelector('.music-progress-bar');
const playerProgress = document.querySelector('.music-progress');

audio.addEventListener('timeupdate', () => {
    const { currentTime, duration } = audio;
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    const minutesDuration = Math.floor(duration / 60);
    const secondsDuration = Math.floor(duration % 60);
    document.querySelector('.music-time').textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    document.querySelector('.music-duration').textContent = `${minutesDuration}:${secondsDuration < 10 ? '0' + secondsDuration : secondsDuration}`;
});

function updateProgressBar() {
    const { currentTime, duration } = audio;
    const percentage = audio.currentTime / audio.duration * 100;
    progress.style.width = `${percentage}%`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

playerProgress.addEventListener('mousedown', () => {
    playerProgress.addEventListener('mousemove', setProgressBar);
    document.addEventListener('mouseup', () => {
        playerProgress.removeEventListener('mousemove', setProgressBar);
    });
});

const volumeProgress = document.querySelector('.volume-progress-bar');
const volumePlayerProgress = document.querySelector('.volume-progress');

function updateVolumeProgressBar() {
    const percentage = audio.muted ? 0 : audio.volume * 100;
    volumeProgress.style.width = `${percentage}%`;
}

function setVolumeProgressBar(e) {
    const width = volumePlayerProgress.clientWidth;
    const clickX = e.offsetX;
    audio.volume = clickX / width;
}

audio.volume = 0.5;

volumePlayerProgress.addEventListener('click', setVolumeProgressBar);
audio.addEventListener('volumechange', updateVolumeProgressBar);

playerProgress.addEventListener('click', setProgressBar);
audio.addEventListener('timeupdate', updateProgressBar);

volumePlayerProgress.addEventListener('mousedown', () => {
    volumePlayerProgress.addEventListener('mousemove', setVolumeProgressBar);
    document.addEventListener('mouseup', () => {
        volumePlayerProgress.removeEventListener('mousemove', setVolumeProgressBar);
    });
});


function Back() {
    audio.currentTime -= 10;
    document.querySelectorAll('.back-ani').forEach((result) => {result.classList.add('icon-back-ani')});
    setTimeout(() => {
        document.querySelectorAll('.back-ani').forEach((result) => {result.classList.remove('icon-back-ani')});
    }, 100);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        audio.currentTime -= 10;
        document.querySelectorAll('.back-ani').forEach((result) => {result.classList.add('icon-back-ani')});
    }

    document.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowLeft') {
            document.querySelectorAll('.back-ani').forEach((result) => {result.classList.remove('icon-back-ani')});
        }
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        audio.currentTime += 10;  
    }
    document.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowRight') {}
    });
});*/

/* Mute y Audio
const audioMuted = localStorage.getItem('audioMuted');
function Mute() {
    //audio.muted = !audio.muted; Si el audio de la musica esta en silencio 
    tipwav.muted = !tipwav.muted;
    clickwav.muted = !clickwav.muted;

    document.querySelectorAll('.Mute').forEach((result) => {result.classList.toggle('Mute-Off')});
    document.querySelectorAll('.bounce-mute').forEach((result) => {result.classList.toggle('bounce-mute-on')});
    document.querySelectorAll('.byebye').forEach((result) => {result.classList.toggle('volume-bar-none')});
    document.querySelectorAll('.bruh').forEach((result) => {result.classList.toggle('bruh-on')});

    setTimeout(() => {
        document.querySelectorAll('.bounce-mute').forEach((result) => {result.classList.remove('bounce-mute-on')});
    }, 500);
    //updateVolumeProgressBar();
    if (tipwav.muted) {
        localStorage.setItem('audioMuted', 'true');
    } else {
        localStorage.setItem('audioMuted', 'false'); 
    }
}

if (audioMuted === 'true') {
    //audio.muted = true;
    tipwav.muted = true;
    clickwav.muted = true;
    document.querySelectorAll('.Mute').forEach((result) => {result.classList.add('Mute-Off')});
    document.querySelectorAll('.byebye').forEach((result) => {result.classList.add('volume-bar-none')});
    document.querySelectorAll('.bruh').forEach((result) => {result.classList.add('bruh-on')});
} else {
    //audio.muted = false;
    tipwav.muted = false;
    clickwav.muted = false;
    document.querySelectorAll('.Mute').forEach((result) => {result.classList.remove('Mute-Off')});
    document.querySelectorAll('.byebye').forEach((result) => {result.classList.remove('volume-bar-none')});
    document.querySelectorAll('.bruh').forEach((result) => {result.classList.remove('bruh-on')});
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'm') {
        //audio.muted = !audio.muted;
        tipwav.muted = !tipwav.muted;
        clickwav.muted = !clickwav.muted;

        document.querySelectorAll('.Mute').forEach((result) => {result.classList.toggle('Mute-Off')});
        document.querySelectorAll('.byebye').forEach((result) => {result.classList.toggle('volume-bar-none')});
        //updateVolumeProgressBar();
    }
});

function Stop() {
    audio.pause();
    audio.currentTime = 0;
    document.querySelectorAll('.Play-i').forEach((result) => {result.classList.remove('icon-pause'), result.classList.add('icon-play')});
    document.querySelector('.music-progress-bar').style.animation = 'none';
}
*/