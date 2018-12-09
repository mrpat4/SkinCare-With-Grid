const methodContainer = document.querySelector(".method-items")

methodContainer.addEventListener('click', function (e){
    console.log(e)
    e.preventDefault()
    const modalToggle= e.target.closest(".method-link")
    if (!modalToggle) return
    const modal = modalToggle.parentNode.nextElementSibling
    const closeButton = modal.querySelector(".modal-button")
    
   const modalOpen = _ => {

    modal.classList.add("is-open")
    modal.style.animation = "fade-in .8s forwards"
    document.body.style.overflowY = "hidden"
   }

   const modalClose =  _ =>{
       modal.classList.remove("is-open")
       modal.removeEventListener("animationend", modalClose)
       
   }

    closeButton.addEventListener("click", _ =>{
        modal.style.animation = "fade-out .8s forwards"
        modal.addEventListener("animationend",modalClose)
        document.body.style.overflowY = "scroll"
    })

    document.addEventListener("keydown", e =>{
        console.log(e.keyCode)
        if(e.keyCode === 27 ){
            modal.style.animation = "fade-out .8s forwards"
        modal.addEventListener("animationend",modalClose)
        document.body.style.overflowY = "scroll"
        }
    })

    modalOpen()
});