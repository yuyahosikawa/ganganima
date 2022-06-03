function ring(){
   document.getElementById("sound")
}
const $targetElement = document.querySelectorAll
(".animationtarget");
console.log(window.innerHeight)

document.addEventListener("scroll",function(){
    for(let x = 0; x < $targetElement.length; x++){
        const ElementDistans = $targetElement[x].
        getBoundingClientRect().top + $targetElement[x].clientHeight * .6
    if(window.innerHeight > ElementDistans){
        $targetElement[x].classList.add("show");
    }
    }


})