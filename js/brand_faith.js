window.addEventListener("load",function(){


    const swiper6 = new Swiper('.station6', {
        
        // slidesPerView : 1.3,
        // spaceBetween : 5,
        // breakpoints: {
        //     300: {
        //       slidesPerView: 2.1,
        //       spaceBetween: 14,
        //     },
        //     768: {
        //       slidesPerView: 3,
        //       spaceBetween: 18,
        //     },
        //     1280: {
        //       slidesPerView: 3,
        //       spaceBetween: 20,
        //     },
        // },
        slidesPerView: "auto",
        spaceBetween : 10
    });

    let modalb = this.document.querySelector(".modalb")
    let highlight1 = this.document.querySelector(".highlight1")
    let highlight2 = this.document.querySelector(".highlight2")
    let highlight3 = this.document.querySelector(".highlight3")
    let highlight_close = this.document.querySelectorAll(".highlight_close")
    let highlight_btn1 = this.document.querySelector(".highlight_btn1")
    let highlight_btn2 = this.document.querySelector(".highlight_btn2")
    let highlight_btn3 = this.document.querySelector(".highlight_btn3")

    highlight_btn1.addEventListener("click",function(event){
        event.preventDefault()
        modalb.classList.add("on")
        highlight1.classList.add("on")
    })

    highlight_btn2.addEventListener("click",function(event){
        event.preventDefault()
        modalb.classList.add("on")
        highlight2.classList.add("on")
    })

    highlight_btn3.addEventListener("click",function(event){
        event.preventDefault()
        modalb.classList.add("on")
        highlight3.classList.add("on")
    })

    highlight_close.forEach(function(btn){
        btn.addEventListener("click",function(){
            modalb.classList.remove("on")
            highlight1.classList.remove("on")
            highlight2.classList.remove("on")
            highlight3.classList.remove("on")
        })
    })

})


