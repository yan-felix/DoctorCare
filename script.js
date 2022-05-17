//Funções========================================================================================================================
function changeNavBarOnScroll(){
    if(scrollY > 0){
        document
            .getElementById('Navigation')
            .classList
            .add('scroll');
    } else{
        document
            .getElementById('Navigation')
            .classList
            .remove('scroll');
    }
}

function showBackToTopButton(){
    if(scrollY > 400){
        document
            .getElementById('Back_To_Top_Button')
            .classList
            .add('show');
    } else{
        document
            .getElementById('Back_To_Top_Button')
            .classList
            .remove('show');
    }
}

function activateMenuAtCurrentSestion(currentSection){
    const targetLine = scrollY + innerHeight / 2 // Este cálculo serve para criar a linha imaginária que será usada de referência para saber em qual seção o usuário se encontra no momento atual da rolagem da página.
    const sectionTop = currentSection.offsetTop // O ".offsetTop" mostra/pega a posição do topo de um elemento html.
    const sectionHight = currentSection.offsetHeight // O ".offsetHight" mostra a altura de um elemento.
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    const sectionEndsAt = sectionTop + sectionHight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
    const inSectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
    const sectionID = currentSection.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionID}]`)

    menuElement.classList.remove('actived')

    if(inSectionBoundaries){
        menuElement.classList.add('actived')
    }
}

function onScroll(){ //Respon1sável por executar as mudanças relativas ao evento de rolagem.
    changeNavBarOnScroll()
    showBackToTopButton()
    activateMenuAtCurrentSestion(document.getElementById('Home'))
    activateMenuAtCurrentSestion(document.getElementById('Services'))
    activateMenuAtCurrentSestion(document.getElementById('About_Us'))
    activateMenuAtCurrentSestion(document.getElementById('Contacts'))
}

function openMenu(){
    document
        .body
        .classList
        .add('menu-expanded')
}

function closeMenu(){
    document
        .body
        .classList
        .remove('menu-expanded')

}

function testeTouch(){
    console.log("The touch is working!")
}

//Aplicação em execução==========================================================================================================
onScroll() //Garante que a função onScroll seja executada assim que a página for carregada, evitando assim que ao recarregar a página com top =! 0 a barra de navegação perca sua classe scroll.

window.addEventListener('scroll', onScroll)

ScrollReveal({ //ScrollReveal (biblioteca) => Responsável pelas animações que revela os elementos da página ao rolarmos ela.
    origin: 'top',
    distance: '3rem',
    duration: 700,
}).reveal(`
            #Home, 
            #Home img, 
            #Home .stats,
            #Services,
            #Services header,
            #Services .card,
            #About_Us header,
            #About_Us p,
            #About_Us img,
            #Contacts header,
            #Contacts img
        `);

        
// Made by: Yan Félix.