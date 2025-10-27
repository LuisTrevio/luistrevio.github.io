let headerbg = false
let LastScrollY = 170
let NavLastScrollY = 30
let lastHeaderScroll = window.scrollY;
const header = document.querySelector('.header-back');
const mapbtn = document.querySelector('.map-back');
// Cambia el selector si tu header es diferente

window.addEventListener("scroll", () => {
    if(LastScrollY < window.scrollY) {

        document.querySelectorAll('.button-scroll').forEach((result) => { result.classList.add('button-scroll-on');})
        document.querySelectorAll('.dst').forEach((result) => { result.classList.add('dst-on');})
        document.querySelectorAll('.animate').forEach((result) => { result.classList.add('animate-bur-on');})
        

        document.querySelectorAll('.vid').forEach((result) => { result.classList.add('vid-on');})
        document.querySelectorAll('.ltext').forEach((result) => { result.classList.add('ltext-on');})
        document.querySelectorAll('.rtext').forEach((result) => { result.classList.add('rtext-on');})
        headerbg = true
        
    } else { 
        
        document.querySelectorAll('.button-scroll').forEach((result) => { result.classList.remove('button-scroll-on');})
        document.querySelectorAll('.dst').forEach((result) => { result.classList.remove('dst-on');})

        document.querySelectorAll('.animate').forEach((result) => { result.classList.remove('animate-bur-on');})
       
        headerbg = false
        
    }
});

window.addEventListener("scroll", () => {
    if(NavLastScrollY < window.scrollY) {
        document.querySelectorAll('.nav-blur').forEach((result) => { result.classList.add('nav-blur-off');})
    }else {
        document.querySelectorAll('.nav-blur').forEach((result) => { result.classList.remove('nav-blur-off');})
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const images = Array.from(document.querySelectorAll('.Photos'));
    let loaded = 0;
    let maxHeight = 0;

    function setCarruselHeight() {
        document.querySelector('.carrusel-img').forEach(container => {
            container.style.height = `${maxHeight}px`;
        });
    }

    images.forEach(img => {
        function checkHeight() {
            if (img.naturalHeight > maxHeight) {
                maxHeight = img.naturalHeight;
            }
            loaded++;
            if (loaded === images.length) {
                setCarruselHeight();
            }
        }
        if (img.complete) {
            checkHeight();
        } else {
            img.addEventListener('load', checkHeight);
        }
    });

    document.querySelectorAll('.Photos').forEach(img => {
        // Espera a que la imagen cargue si aún no está cargada
        if (img.complete) {
            console.log(`Imagen: ${img.src} - Ancho: ${img.naturalWidth}px, Alto: ${img.naturalHeight}px`);
        } else {
            img.addEventListener('load', () => {
                console.log(`Imagen: ${img.src} - Ancho: ${img.naturalWidth}px, Alto: ${img.naturalHeight}px`);
            });
        }
    });
});

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

    document.querySelector('.stock-detalles').style.padding = '70px 0px 70px 0px';
    if (window.innerWidth <= 786) { smoother.kill(); document.querySelector('.stock-detalles').style.padding = '0px';}
   
});

let LastScrollY3 = 170
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

    const safariClasses = [
        ['.sar-web', 'sar-on'],
        ['.img-saf', 'img-safari'],
        ['.off-saf', 'off-safari'],
        ['.sms-saf', 'sms-safari'], 
        ['.glass-saf', 'glass-safari'], 
    ];

    safariClasses.forEach(([selector, className]) => {
        document.querySelectorAll(selector).forEach(result => result.classList.add(className));
    });

    document.querySelector('.content-filter').style.background = '000000bc';

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
    /** 
    window.addEventListener('scroll', () => {
    
    if (document.querySelector('.filter-text.active').getAttribute('data-sort') === 'Fotos' || document.querySelector('.filter-text.active').getAttribute('data-sort') === 'Sitios Web') {}
    else {
        const currentScroll = window.scrollY;
        if (currentScroll > lastHeaderScroll && currentScroll > 50) {
        header && header.classList.remove('header-hide');
        mapbtn && mapbtn.classList.remove('header-hide');
        } else {
        header && header.classList.add('header-hide');
        mapbtn && mapbtn.classList.add('header-hide');
        }
        lastHeaderScroll = currentScroll;
        
    };
    });*/
}
/** 
else {
    window.addEventListener('scroll', () => {
    
    if (document.querySelector('.filter-text.active').getAttribute('data-sort') === 'Fotos' || document.querySelector('.filter-text.active').getAttribute('data-sort') === 'Sitios Web') {}
    else {
        const currentScroll = window.scrollY;
        if (currentScroll > lastHeaderScroll && currentScroll > 50) {
        header && header.classList.add('header-hide');
        mapbtn && mapbtn.classList.add('header-hide');
        } else {
        header && header.classList.remove('header-hide');
        mapbtn && mapbtn.classList.remove('header-hide');
        }
        lastHeaderScroll = currentScroll;
    };
    });
}*/


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

    if (headerbg) {
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
        ['.block-up', 'top-block-up'],
        ['.filter-up', 'filter-block-up'],
        ['.map-vis', 'map-visible'],
    ];

    toggleClasses.forEach(([selector, className]) => {
        document.querySelectorAll(selector).forEach(result => result.classList.toggle(className));
    });

    if(LastScrollY < window.scrollY) {
        document.querySelectorAll('.img-scroll-inv').forEach(result => result.classList.remove('invisible'));
    }
    else {
        document.querySelectorAll('.img-scroll-inv').forEach(result => result.classList.toggle('invisible'));
    }
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
        'Pop-Office-Out', 'Pop-Mail-Out', 'Pop-Warn-Out', 'Pop-Share-Out' ,'Pop-Report-Out', ,'Pop-Flex-Out', 'Pop-Magic-Out', 
        'Pop-Waltz-Out', 'Pop-Waltz2-Out',, 'Pop-Tech-Out', 'Pop-Store-Out', 'Pop-P1-Out', 'Pop-P2-Out', 'Pop-P3-Out', 'Pop-P4-Out'
    ];

    classesToRemove.forEach(className => {
        document.querySelectorAll(`.${className.replace('-Out', '-O')}`).forEach(result => {
            result.classList.remove(className);
        });
    });

    document.querySelector('.Pop-Waltz').scrollTop = 0;
    document.querySelector('.Pop-Waltz2').scrollTop = 0;
    document.querySelector('.Pop-Tech').scrollTop = 0;
    document.querySelector('.Pop-Store').scrollTop = 0;
    
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
    ['PopWaltz2', 'Pop-Waltz2-O', 'Pop-Waltz2-Out'],
    ['PopStore', 'Pop-Store-O', 'Pop-Store-Out'],
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

function CloseWarn() { localStorage.setItem('🍪', 'true');  document.querySelectorAll('.Pop-Warn-O').forEach((result) => { result.classList.remove('Pop-Warn-Out');})}

//PopUp de las Habilidades pero de Omitir
function Ommit() {
    const classesToRemove = [
        'Pop-VS-Out', 'Pop-Git-Out', 'Pop-Fig-Out', 'Pop-HTML-Out', 'Pop-CSS-Out',
        'Pop-JS-Out', 'Pop-PY-Out', 'Pop-SQL-Out', 'Pop-Fr-Out', 'Pop-As-Out', 'Pop-Share-Out','Pop-Report-Out',
    ];

    classesToRemove.forEach(className => {
        document.querySelectorAll(`.${className.replace('-Out', '-O')}`).forEach(result => {
            result.classList.remove(className);
        });
    });
}

function Ommit2() {
    const classesToRemove = [
        'Pop-Waltz-Out', 'Pop-Tech-Out', 'Pop-Store-Out', 'Pop-Waltz2-Out'
    ];

    classesToRemove.forEach(className => {
        document.querySelectorAll(`.${className.replace('-Out', '-O')}`).forEach(result => {
            result.classList.remove(className);
        });
    });

    document.querySelector('.Pop-Waltz').scrollTop = 0;
    document.querySelector('.Pop-Waltz2').scrollTop = 0;
    document.querySelector('.Pop-Tech').scrollTop = 0;
    document.querySelector('.Pop-Store').scrollTop = 0;
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

window.addEventListener('DOMContentLoaded', () => {
    const firstFilter = document.querySelector('.filter-text');
    if (firstFilter) {
        firstFilter.classList.add('active');
        filterBall.style.left = `${firstFilter.offsetLeft}px`;
        filterBall.style.width = `${firstFilter.offsetWidth}px`;
    }
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
});

document.querySelector('.filter-text[data-sort="Fotos"]').addEventListener('click', () => {
   if (window.innerWidth <= 780) {
        document.querySelector('.perfil').style.display = 'none';
    }
     window.scrollTo({top: 0, behavior: 'smooth'});
    document.querySelector('.property-text').style.display = 'none';

    document.querySelector('.filter-home').style.filter = 'brightness(0.5)';
    document.querySelector('.filter-fotos').style.filter = 'brightness(1)';
    document.querySelector('.filter-web').style.filter = 'brightness(0.5)';
    document.querySelectorAll('.home-menu').forEach((result) => { result.classList.remove('home-menu-blu');});
    document.querySelectorAll('.menu-btn-map').forEach((result) => { result.classList.remove('map-on');});
});

document.querySelector('.filter-text[data-sort="Sitios Web"]').addEventListener('click', () => {
    if (window.innerWidth <= 780) {
        document.querySelector('.perfil').style.display = 'none';
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



function ReportFake() {
    document.querySelector('.congratu-bla').style.display = 'flex';
    document.querySelector('.button-report-ok').style.display = 'flex';
    document.querySelector('.report-grid').style.display = 'none';
    document.querySelector('.button-report-send').style.display = "none";
}