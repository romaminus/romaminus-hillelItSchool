
export function menuClickHandler({target}){

    let buttonOpen = document.querySelector(".btn--open");
    let buttonClose = document.querySelector(".btn--close");
    let menu = document.querySelector(".navbar");

    if(target.closest(".btn--open")){
        buttonOpen.style.cssText += "display: none;";
        buttonClose.style.cssText += "display: block;";
        menu.style.cssText += "display: flex;";
    }else if(target.closest(".btn--close")){
        buttonOpen.style.cssText += "display: flex;";
        buttonClose.style.cssText += "display: none;";
        menu.style.cssText += "display: none;";
    }
}

