// ===== CONFIGURACIÓN GENERAL =====
let headerbg = false;
let LastScrollY = 170;
let NavLastScrollY = 30;
let lastHeaderScroll = window.scrollY;
const header = document.querySelector('.header-back');
const mapbtn = document.querySelector('.map-back');

// Helper: Toggle clases en múltiples elementos
const toggleClasses = (selector, className, condition) => {
    document.querySelectorAll(selector).forEach(el => {
        if(condition === 'toggle') el.classList.toggle(className);
        else if(condition) el.classList.add(className);
        else el.classList.remove(className);
    });
};

// ===== EVENT LISTENER: SCROLL CONSOLIDADO =====
window.addEventListener("scroll", () => {
    const isScrollingDown = LastScrollY < window.scrollY;
    
    // Toggle clases principales
    toggleClasses('.button-scroll', 'button-scroll-on', isScrollingDown);
    toggleClasses('.dst', 'dst-on', isScrollingDown);
    toggleClasses('.animate', 'animate-bur-on', isScrollingDown);
    toggleClasses('.vid', 'vid-on', isScrollingDown);
    toggleClasses('.ltext', 'ltext-on', isScrollingDown);
    toggleClasses('.rtext', 'rtext-on', isScrollingDown);
    toggleClasses('.nav-blur', 'nav-blur-off', isScrollingDown);
    
    headerbg = isScrollingDown;
});


// ===== CARRUSEL DE IMÁGENES =====
document.addEventListener('DOMContentLoaded', () => {
    const images = Array.from(document.querySelectorAll('.Photos'));
    let loaded = 0;
    let maxHeight = 0;

    const setCarruselHeight = () => {
        const container = document.querySelector('.carrusel-img');
        if(container) container.style.height = `${maxHeight}px`;
    };

    images.forEach(img => {
        const checkHeight = () => {
            if(img.naturalHeight > maxHeight) maxHeight = img.naturalHeight;
            loaded++;
            if(loaded === images.length) setCarruselHeight();
        };
        
        if(img.complete) checkHeight();
        else img.addEventListener('load', checkHeight);
    });

    // Log de dimensiones de imágenes
    images.forEach(img => {
        const logDimensions = () => {
            console.log(`Imagen: ${img.src} - Ancho: ${img.naturalWidth}px, Alto: ${img.naturalHeight}px`);
        };
        if(img.complete) logDimensions();
        else img.addEventListener('load', logDimensions);
    });
});

// ===== GSAP Y SCROLL SMOOTHER =====
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    
    const smoother = ScrollSmoother.create({
        wrapper: ".content-center",
        content: ".stock-detalles",
        smooth: 1.2,
    });
    
    ScrollTrigger.refresh();
    ScrollSmoother.refresh();
    
    const detalles = document.querySelector('.stock-detalles');
    if(detalles) detalles.style.padding = '70px 0px 70px 0px';
    
    // Desactivar en dispositivos móviles
    if(window.innerWidth <= 786) {
        smoother.kill();
        if(detalles) detalles.style.padding = '0px';
    }
});
// ===== DETECCIÓN SAFARI =====
const isSafari = navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
const getIOSVersion = () => {
    const match = navigator.userAgent.match(/OS (\d+)_?(\d+)?_?(\d+)?/);
    return match ? parseFloat(match[1] + '.' + (match[2] || 0)) : null;
};

if(isSafari && (!('share' in navigator) || getIOSVersion() < 26)) {
    const safariClasses = [
        ['.sar-web', 'sar-on'],
        ['.img-saf', 'img-safari'],
        ['.off-saf', 'off-safari'],
        ['.sms-saf', 'sms-safari'], 
        ['.glass-saf', 'glass-safari'], 
    ];

    safariClasses.forEach(([selector, className]) => {
        toggleClasses(selector, className, true);
    });

    const filter = document.querySelector('.content-filter');
    if(filter) filter.style.background = '000000bc';

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if(themeColor) themeColor.setAttribute('content', '#0B0A0A');

    // Scroll listener para Safari
    let LastScrollY3 = 170;
    window.addEventListener("scroll", () => {
        const isDown = LastScrollY3 < window.scrollY;
        const toggleList = [
            ['.animate-safari', 'animate-safari-on'],
            ['.name-safari', 'name-safari-on'],
            ['.header-safari', 'header-saf-on'],
            ['.h1-safari', 'h1-saf-on'],
        ];
        toggleList.forEach(([selector, className]) => {
            document.querySelectorAll(selector).forEach(el => {
                el.classList.toggle(className, isDown);
            });
        });
    });
}
// ===== ALERTAS AL DESPLAZAR =====
let LastScrollY2 = 0;
window.addEventListener("scroll", () => {
    toggleClasses('.alert-dunot', 'alert-donot', LastScrollY2 < window.scrollY);
});

// ===== IMAGEN ALEATORIA =====
const images = ['cato1.gif', 'cato2.gif', 'cato3.gif', 'cato4.gif', 'profile.png'];

const setRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    const imgElement = document.querySelector('.img-random');
    if(imgElement) {
        imgElement.style.backgroundImage = `url(svg/${randomImage})`;
        imgElement.style.backgroundSize = 'cover';
    }
};

setRandomImage();

document.querySelector('.img-random')?.addEventListener('click', () => {
    setRandomImage();
    
    // Animación para .awi
    toggleClasses('.awi', 'awiwi', true);
    setTimeout(() => toggleClasses('.awi', 'awiwi', false), 100);
    
    // Animación para .awi2 si headerbg está activo
    if(headerbg) {
        toggleClasses('.awi2', 'awiwi2', true);
        setTimeout(() => toggleClasses('.awi2', 'awiwi2', false), 100);
    }
});

// ===== MENÚ MÓVIL (Dash) =====
function Dash() {
    const toggleList = [
        ['.menu-dash-up', 'menu-up'],
        ['.scr-fr', 'scroll-frost'],
        ['.bar-1', 'bur-1-up'],
        ['.bar-2', 'bur-2-up'],
        ['.bar-3', 'bur-3-up'],
        ['.box-up', 'box-tool-up'],
        ['.grid-up', 'grid-tool-up'],
        ['.select-up', 'select-ani-up'],
        ['.music-up', 'music-dash-up'],
        ['.block-up', 'top-block-up'],
        ['.filter-up', 'filter-block-up'],
        ['.map-vis', 'map-visible'],
    ];

    toggleList.forEach(([selector, className]) => {
        document.querySelectorAll(selector).forEach(el => el.classList.toggle(className));
    });

    // Toggle visibilidad de imagen según scroll
    const isScrollingDown = LastScrollY < window.scrollY;
    document.querySelectorAll('.img-scroll-inv').forEach(el => {
        el.classList.toggle('invisible', !isScrollingDown);
    });
}

// ===== FUNCIONES AUXILIARES DE UI =====
function Top() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    toggleClasses('.top-ani', 'top-animated', true);
    toggleClasses('.block-m', 'block-menu', true);
    setTimeout(() => toggleClasses('.top-ani', 'top-animated', false), 100);
    setTimeout(() => toggleClasses('.block-m', 'block-menu', false), 1000);
}

function Pop() {
    const toggleList = [
        ['.Pop-Exit', 'Pop-out'],
        ['.Status-Ani', 'Status-Animated'],
        ['.scr-fr', 'scroll-frost'],
        ['.close-up', 'Pop-Close-Up']
    ];

    toggleList.forEach(([selector, className]) => {
        document.querySelectorAll(selector).forEach(el => el.classList.toggle(className));
    });

    // Remover clases de PopUp específicos
    const classesToRemove = [
        'Pop-VS-Out', 'Pop-Git-Out', 'Pop-Fig-Out', 'Pop-HTML-Out', 'Pop-CSS-Out',
        'Pop-JS-Out', 'Pop-PY-Out', 'Pop-SQL-Out', 'Pop-Fr-Out', 'Pop-As-Out',
        'Pop-Office-Out', 'Pop-Mail-Out', 'Pop-Warn-Out', 'Pop-Share-Out', 'Pop-Report-Out',
        'Pop-Flex-Out', 'Pop-Magic-Out', 'Pop-Waltz-Out', 'Pop-Waltz2-Out', 'Pop-Tech-Out',
        'Pop-Store-Out', 'Pop-Txt-Out', 'Pop-P1-Out', 'Pop-P2-Out', 'Pop-P3-Out', 'Pop-P4-Out'
    ];

    classesToRemove.forEach(className => {
        const selector = '.' + className.replace('-Out', '-O');
        document.querySelectorAll(selector).forEach(el => el.classList.remove(className));
    });

    // Reiniciar scroll de PopUps específicos
    ['Pop-Waltz', 'Pop-Waltz2', 'Pop-Tech', 'Pop-Store', 'Pop-Txt'].forEach(id => {
        const el = document.querySelector('.' + id);
        if(el) el.scrollTop = 0;
    });

    // Resetear galería
    const reels = document.querySelector('.reels-socialmedia');
    if(reels) reels.scrollLeft = 0;
    toggleClasses('.trans-img', 'trans-img-off', false);
    toggleClasses('.HTML-Button', 'Close-HTML', false);
}

// ===== FUNCIONES GENERALES DE POPUPS =====
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
    ['PopWaltz2', 'Pop-Waltz2-O', 'Pop-Waltz2-Out'],
    ['PopStore', 'Pop-Store-O', 'Pop-Store-Out'],
    ['PopTxt', 'Pop-Txt-O', 'Pop-Txt-Out'],
    ['PopShare', 'Pop-Share-O', 'Pop-Share-Out'],
    ['PopReport', 'Pop-Report-O', 'Pop-Report-Out'],
    ['PopTech', 'Pop-Tech-O', 'Pop-Tech-Out'],
    ['PopPhoto1', 'Pop-P1-O', 'Pop-P1-Out'],
    ['PopPhoto2', 'Pop-P2-O', 'Pop-P2-Out'],
    ['PopPhoto3', 'Pop-P3-O', 'Pop-P3-Out'],
    ['PopPhoto4', 'Pop-P4-O', 'Pop-P4-Out']
];

popFunctions.forEach(([funcName, selector, className]) => {
    window[funcName] = () => {
        document.querySelectorAll(`.${selector}`).forEach(el => el.classList.add(className));
        setTimeout(() => {
            const reel = document.querySelector('.reels-socialmedia');
            if(reel) reel.scrollTo(50, 0);
        }, 100);
    };
});

// ===== FUNCIONALIDAD DRAG PARA POPUPS =====
document.querySelectorAll('.Pop-Exit.Pop-out').forEach(popElement => {
    popElement.addEventListener('mousedown', (event) => {
        const offsetX = event.clientX - popElement.getBoundingClientRect().left;
        const offsetY = event.clientY - popElement.getBoundingClientRect().top;

        const mouseMoveHandler = (e) => {
            popElement.style.left = `${e.clientX - offsetX}px`;
            popElement.style.top = `${e.clientY - offsetY}px`;
        };

        const mouseUpHandler = () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });
});

// ===== MANEJO DE COOKIES Y WARNINGS =====
window.addEventListener("load", () => {
    const warnClosed = localStorage.getItem('🍪') === 'true';
    toggleClasses('.Pop-Warn-O', 'Pop-Warn-Out', !warnClosed);
});

function CloseWarn() {
    localStorage.setItem('🍪', 'true');
    toggleClasses('.Pop-Warn-O', 'Pop-Warn-Out', false);
}

// ===== FUNCIONES POPFLEX Y POPMAGIC =====
function PopFlex() {
    document.querySelectorAll('.Pop-Flex-O').forEach(el => el.classList.add('Pop-Flex-Out'));
}

function PopMagic() {
    document.querySelectorAll('.Pop-Magic-O').forEach(el => el.classList.add('Pop-Magic-Out'));
}

// ===== EVENT LISTENERS DE TECLADO =====
document.addEventListener('keydown', (event) => {
    if(event.key === 'Tab' && document.querySelector('.Pop-Exit.Pop-out')) {
        event.preventDefault();
        const focusable = document.querySelectorAll('.Pop-Exit.Pop-out a, .Pop-Exit.Pop-out button, .Pop-Exit.Pop-out input, .Pop-Exit.Pop-out textarea');
        if(focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if(document.activeElement === last && !event.shiftKey) first.focus();
        else if(document.activeElement === first && event.shiftKey) last.focus();
    }
});

document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape' && document.querySelector('.Pop-Exit.Pop-out')) Pop();
});

// ===== FUNCIONES OMMIT =====
function Ommit() {
    const classesToRemove = [
        'Pop-VS-Out', 'Pop-Git-Out', 'Pop-Fig-Out', 'Pop-HTML-Out', 'Pop-CSS-Out',
        'Pop-JS-Out', 'Pop-PY-Out', 'Pop-SQL-Out', 'Pop-Fr-Out', 'Pop-As-Out', 'Pop-Share-Out', 'Pop-Report-Out',
    ];
    classesToRemove.forEach(className => {
        document.querySelectorAll(`.${className.replace('-Out', '-O')}`).forEach(el => el.classList.remove(className));
    });
}

function Ommit2() {
    const classesToRemove = ['Pop-Waltz-Out', 'Pop-Tech-Out', 'Pop-Store-Out', 'Pop-Waltz2-Out', 'Pop-Txt-Out'];
    classesToRemove.forEach(className => {
        document.querySelectorAll(`.${className.replace('-Out', '-O')}`).forEach(el => el.classList.remove(className));
    });
    ['Pop-Waltz', 'Pop-Waltz2', 'Pop-Tech', 'Pop-Store', 'Pop-Txt'].forEach(id => {
        const el = document.querySelector('.' + id);
        if(el) el.scrollTop = 0;
    });
}

function Ommit3() {
    const classesToRemove = ['Pop-P1-Out', 'Pop-P2-Out', 'Pop-P3-Out', 'Pop-P4-Out'];
    classesToRemove.forEach(className => {
        document.querySelectorAll(`.${className.replace('-Out', '-O')}`).forEach(el => el.classList.remove(className));
    });
    toggleClasses('.trans-img', 'trans-img-off', true);
}


//Filterball
const filterText = document.querySelectorAll('.filter-text');
const filterBall = document.querySelector('.filter-ball');
const filterPasive = document.querySelector('.filter-pasive');
const filterActive = document.querySelector('.filter-active');
filterText.forEach((text) => {
    text.addEventListener('click', () => {
        filterText.forEach((t) => t.classList.remove('active'));
        text.classList.add('active');
        filterBall.style.left = `${text.offsetLeft}px`;
        filterBall.style.width = `${text.offsetWidth}px`;
        document.querySelectorAll('.slur').forEach((result) => {result.classList.add('slur-active')});
        setTimeout(() => {document.querySelectorAll('.slur').forEach((result) => {result.classList.remove('slur-active')});}, 100);
        document.querySelectorAll('.blur-block').forEach((result) => {result.classList.add('blur-active')});
        setTimeout(() => {document.querySelectorAll('.blur-block').forEach((result) => {result.classList.remove('blur-active')});}, 200);
    });
});


window.addEventListener('load', () => {
    const activeText = document.querySelector('.filter-text.active');
    if (activeText) {
        filterBall.style.left = `${activeText.offsetLeft}px`;
        filterBall.style.width = `${activeText.offsetWidth}px`;
    }
    document.querySelector('.filter-home').style.filter = 'brightness(1)';
        document.querySelector('.filter-fotos').style.filter = 'brightness(0.5)';
        document.querySelector('.filter-web').style.filter = 'brightness(0.5)';

        document.querySelectorAll('.home-menu').forEach((result) => { result.classList.add('home-menu-blu');});
    document.querySelectorAll('.menu-btn-map').forEach((result) => { result.classList.add('map-on');});

});

// Al cargar la página, el filterball se posiciona en el primer filtro "All"
window.addEventListener('DOMContentLoaded', () => {
    const firstFilter = document.querySelector('.filter-text');
    if (firstFilter) {
        firstFilter.classList.add('active');
        filterBall.style.left = `${firstFilter.offsetLeft}px`;
        filterBall.style.width = `${firstFilter.offsetWidth}px`;
    }
});

// el filterball se puede arrastrar con el mouse y se queda en la posición del filtro que se suelte, pero no se puede arrastrar fuera de los filtros
filterBall.addEventListener('mousedown', (event) => {
    const offsetX = event.clientX - filterBall.getBoundingClientRect().left;
    function mouseMoveHandler(e) {
        let newLeft = e.clientX - offsetX;
        const minLeft = filterPasive.getBoundingClientRect().left;
        const maxLeft = filterActive.getBoundingClientRect().right - filterBall.offsetWidth;
        if (newLeft < minLeft) newLeft = minLeft;
        if (newLeft > maxLeft) newLeft = maxLeft;
        filterBall.style.left = `${newLeft}px`;
    }
    function mouseUpHandler() {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
        filterText.forEach((text) => {
            const textLeft = text.getBoundingClientRect().left;
            const textRight = text.getBoundingClientRect().right;
            const ballLeft = filterBall.getBoundingClientRect().left;
            if (ballLeft >= textLeft && ballLeft <= textRight) {
                filterText.forEach((t) => t.classList.remove('active'));
                text.classList.add('active');
                filterBall.style.left = `${text.offsetLeft}px`;
                filterBall.style.width = `${text.offsetWidth}px`;
                document.querySelectorAll('.slur').forEach((result) => {result.classList.add('slur-active')});
                setTimeout(() => {document.querySelectorAll('.slur').forEach((result) => {result.classList.remove('slur-active')});}, 100);
                document.querySelectorAll('.blur-block').forEach((result) => {result.classList.add('blur-active')});
                setTimeout(() => {document.querySelectorAll('.blur-block').forEach((result) => {result.classList.remove('blur-active')});}, 200);
            }
        });
    }
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
});


// Filtro de Secciones con el Data-sort 
document.querySelectorAll('.filter-text').forEach((filter) => {
    filter.addEventListener('click', () => {
        const filterValue = filter.getAttribute('data-sort');
        document.querySelectorAll('.section').forEach((section) => {
            if (section.getAttribute('data-sort') === filterValue || filterValue === 'default') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});


// Al hacer resize, el filterball se ajusta a la posición del filtro activo y si el filtro activo es "All" en dispositivos móviles, se muestra el perfil, de lo contrario se oculta
window.addEventListener('resize', () => {
    const activeText = document.querySelector('.filter-text.active');
    if (activeText) {
        filterBall.style.left = `${activeText.offsetLeft}px`;
        filterBall.style.width = `${activeText.offsetWidth}px`;
    }

    if (window.innerWidth <= 780) 
        {document.querySelector('.perfil').style.display = 'none';
            if (document.querySelector('.filter-text.active').getAttribute('data-sort') === 'all') {
               document.querySelector('.perfil').style.display = 'flex';
            }
        }
    else {document.querySelector('.perfil').style.display = 'flex';}
});


// Nav de Home, "All" se refiere a todas las secciones, se desplaza a la sección correspondiente al hacer click en el nav, con un scroll suave
document.querySelector('.filter-text[data-sort="all"]').addEventListener('click', () => {
    document.querySelectorAll('.section').forEach((section) => {
        section.style.display = 'block';
        window.scrollTo({top: 0, behavior: 'smooth'});
        document.querySelector('.perfil').style.display = 'flex';
         document.querySelector('.property-text').style.display = 'inline-block';

        document.querySelector('.filter-home').style.filter = 'brightness(1)';
        document.querySelector('.filter-fotos').style.filter = 'brightness(0.5)';
        document.querySelector('.filter-web').style.filter = 'brightness(0.5)';
    });
    document.querySelectorAll('.home-menu').forEach((result) => { result.classList.add('home-menu-blu');});
    document.querySelectorAll('.menu-btn-map').forEach((result) => { result.classList.add('map-on');});
     if (window.innerWidth <= 780) {
        document.querySelectorAll('.block-img-device').forEach((result) => { result.style.display = 'none';});
        document.querySelectorAll('.large-img-buble').forEach((result) => { result.style.display = 'flex';});
        document.querySelectorAll('.visualize-img').forEach((result) => { result.style.display = 'flex';});
     }
    
});

// Nav de Fotos y Sitios Web, se desplaza a la sección correspondiente al hacer click en el nav, con un scroll suave
document.querySelector('.filter-text[data-sort="Fotos"]').addEventListener('click', () => {
   if (window.innerWidth <= 780) {
        document.querySelector('.perfil').style.display = 'none';
        document.querySelectorAll('.block-img-device').forEach((result) => { result.style.display = 'flex';});
        document.querySelectorAll('.large-img-buble').forEach((result) => { result.style.display = 'none';});
        document.querySelectorAll('.visualize-img').forEach((result) => { result.style.display = 'none';});

    }
     window.scrollTo({top: 0, behavior: 'smooth'});
    document.querySelector('.property-text').style.display = 'none';

    document.querySelector('.filter-home').style.filter = 'brightness(0.5)';
    document.querySelector('.filter-fotos').style.filter = 'brightness(1)';
    document.querySelector('.filter-web').style.filter = 'brightness(0.5)';

    document.querySelectorAll('.home-menu').forEach((result) => { result.classList.remove('home-menu-blu');});
    document.querySelectorAll('.menu-btn-map').forEach((result) => { result.classList.remove('map-on');});

    });

// Nav de Sitios Web, se desplaza a la sección correspondiente al hacer click en el nav, con un scroll suave
document.querySelector('.filter-text[data-sort="Sitios Web"]').addEventListener('click', () => {
    if (window.innerWidth <= 780) {
        document.querySelector('.perfil').style.display = 'none';
           document.querySelectorAll('.block-img-device').forEach((result) => { result.style.display = 'none';});
            document.querySelectorAll('.large-img-buble').forEach((result) => { result.style.display = 'flex';});
                document.querySelectorAll('.visualize-img').forEach((result) => { result.style.display = 'flex';});
    }
     window.scrollTo({top: 0, behavior: 'smooth'});
    document.querySelector('.property-text').style.display = 'none';

    document.querySelector('.filter-home').style.filter = 'brightness(0.5)';
    document.querySelector('.filter-fotos').style.filter = 'brightness(0.5)';
    document.querySelector('.filter-web').style.filter = 'brightness(1)';
    document.querySelectorAll('.home-menu').forEach((result) => { result.classList.remove('home-menu-blu');});
    document.querySelectorAll('.menu-btn-map').forEach((result) => { result.classList.remove('map-on');});

 
});

document.querySelectorAll('.nav-img').forEach((img) => {
    img.addEventListener('click', () => {
        const sortClass = img.getAttribute('data-sort');
        document.querySelectorAll('.Photo').forEach((visualImg) => {
            if (visualImg.classList.contains(sortClass)) {
                visualImg.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.querySelectorAll('.img-burble').forEach((img) => {
    img.addEventListener('click', () => {
        const sortClass = img.getAttribute('data-sort');
        document.querySelectorAll('.Photo').forEach((visualImg) => {
            if (visualImg.classList.contains(sortClass)) {
                visualImg.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Dot de Carrusel de Fotos, se activa el dot que corresponda a la imagen que esté más cerca del centro del carrusel
document.querySelectorAll('.carrusel-img').forEach((container) => {
    const imgs = Array.from(container.querySelectorAll('.Photo'));
    const dots = Array.from(container.parentElement.querySelectorAll('.mini-img'));

    container.addEventListener('scroll', function () {

        let closestIdx = 0;
        let minDiff = Infinity;
        imgs.forEach((img, idx) => {
            const imgRect = img.getBoundingClientRect();
            const contRect = container.getBoundingClientRect();
            const imgCenter = imgRect.left + imgRect.width / 2;
            const contCenter = contRect.left + contRect.width / 2;
            const diff = Math.abs(imgCenter - contCenter);
            if (diff < minDiff) {
                minDiff = diff;
                closestIdx = idx;
            }
        });

        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === closestIdx);
        });
    });
});

// Carrusel de Pop de Fotos
const rightButtons2 = Array.from(document.getElementsByClassName('Pop-Next'));
const leftButtons2 = Array.from(document.getElementsByClassName('Pop-Prev'));
const containers2 = Array.from(document.getElementsByClassName('carrusel-img'));

let index2 = 0;
for (const rightButton2 of rightButtons2) {
    const container2 = containers2[index2];
    rightButton2.addEventListener("click", function () {
        container2.scrollLeft += 300;
    });
    index++;
}

index2 = 0;
for (const leftButton2 of leftButtons2) {
    const container2 = containers2[index2];
    leftButton2.addEventListener("click", function () {
        container2.scrollLeft -= 300;
    });
    index++;
}

containers2.forEach(container2 => {
    const leftButton2 = container2.previousElementSibling;
    leftButton2.disabled = true;
    leftButton2.classList.add('icon-o-left');
});


containers2.forEach(container2 => {
    container2.addEventListener("scroll", function () {
        const rightButton2 = container2.nextElementSibling;
        if (container2.scrollLeft + container2.clientWidth >= container2.scrollWidth) {
            rightButton2.disabled = true;
            rightButton2.classList.add('icon-o-right');
        } else {
            rightButton2.disabled = false;
            rightButton2.classList.remove('icon-o-right');
        }
    });
});

containers2.forEach(container2 => {
    container2.addEventListener("scroll", function () {
        const leftButton2 = container2.previousElementSibling;
        if (container2.scrollLeft === 0) {
            leftButton2.disabled = true;
            leftButton2.classList.add('icon-o-left');
        } else {
            leftButton2.disabled = false;
            leftButton2.classList.remove('icon-o-left');
        }
    });
});

//el "autocarrusel-img" se desplaza automáticamente cada 4 segundos
const autoContainers = Array.from(document.getElementsByClassName('autocarrusel-img'));
autoContainers.forEach(container => {
    let autoScroll = setInterval(() => {
        container.scrollLeft += 200;
    }, 4000);

    container.addEventListener('mouseleave', () => {
        autoScroll = setInterval(() => {
            container.scrollLeft += 200;
        }, 4000);
    });
   
    // el "autocarrusel-img" cuando llega al final, vuelve al inicio y se desactiva el autoScroll 
    // para que no se acumule el setInterval, pero se vuelve a activar cuando se sale del carrusel
    container.addEventListener('scroll', function () {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0;
            clearInterval(autoScroll);
        }
    });

    // se detiene cuando se sale del mouse del carrusel y se vuelve a activar el autoScroll
    container.addEventListener('mouseleave', () => {
        autoScroll = setInterval(() => {
            container.scrollLeft += 200;
        }, 4000);
    });

    // se detiene cuando toma el mouse sobre el carrusel
    container.addEventListener('mouseenter', () => {
        clearInterval(autoScroll);
    });

    // en telefono se detiene cuando se toca el carrusel y se vuelve a activar cuando se suelta
    container.addEventListener('touchstart', () => {
        clearInterval(autoScroll);
    });

   // las imagenes disminuyen su tamaño pero si esta en la posición central del carrusel, vuelve a su tamaño original
});

function ReportFake() {
    document.querySelector('.congratu-bla').style.display = 'flex';
    document.querySelector('.button-report-ok').style.display = 'flex';
    document.querySelector('.report-grid').style.display = 'none';
    document.querySelector('.button-report-send').style.display = "none";
}