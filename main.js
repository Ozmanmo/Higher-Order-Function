// reference to the collapsible content 

const collapsible = document.querySelector("collapsible")

// Toggle when the content button is clicked 
collapsible.addEventListener("click",()=>{
    collapsible.classList.toggle("collapsed");
    const content =collapsible.nextElementSibling;
    if(content.style.maxHeight){
        content.style.maxHeight = null;
    }
    else{
        content.style.maxHeight =content.scrollHeight + "px";
    }
});