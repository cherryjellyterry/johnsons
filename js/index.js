window.addEventListener("load",function(){
    const swiper1 = new Swiper('.station_hero1', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
          },
        autoplay: true,
        speed : 1000,
        // autoHeight: true,
        
    });

    const swiper2 = new Swiper('.station_hero2', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
          },
        autoplay: true,
        speed : 1000,
        // autoHeight: true,
        
    });

    const swiper3 = new Swiper('.station3', {
        slidesPerView : 1.3,
        spaceBetween : 2,
        breakpoints: {
            300: {
              slidesPerView: 2.2,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 3.3 ,
              spaceBetween: 18,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
        },
    });

    const swiper4 = new Swiper('.station4', {
        slidesPerView : 1.3,
        spaceBetween : 2,
        breakpoints: {
            300: {
              slidesPerView: 2.2,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 3.3,
              spaceBetween: 18,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 18,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
        },
    });

    const swiper5 = new Swiper('.station5', {
        slidesPerView : 1.3,
        spaceBetween : 2,
        breakpoints: {
            300: {
              slidesPerView: 2.5,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 3.7,
              spaceBetween: 18,
            },
            1280: {
              slidesPerView: 4.7,
              spaceBetween: 20,
            },
        },
    });

    // 메인페이지 베스트셀러 상품이미지 다양하게주기
    let station3_img_array = this.document.querySelectorAll(".best_main_list figure")

    // 1번째
    station3_img_array[0].addEventListener("mouseover",function(){
        let img = this.querySelector("img")
        img.setAttribute('src',"./img/whitelotiononthebed.jpg")
    })
    station3_img_array[0].addEventListener("mouseout",function(){
        let img = this.querySelector("img")
        img.setAttribute('src',"./img/whitelotionwithcottons.jpg")
    })

    // 2번째
    station3_img_array[1].addEventListener("mouseover",function(){
        let img = this.querySelector("img")
        img.setAttribute('src',"./img/pinklotionwithhearts.jpg")
    })
    station3_img_array[1].addEventListener("mouseout",function(){
        let img = this.querySelector("img")
        img.setAttribute('src',"./img/pinklotiononthebed.jpg")
    })

    // 3번째
    station3_img_array[2].addEventListener("mouseover",function(){
        let img = this.querySelector("img")
        img.setAttribute('src',"./img/yellowwash.jpg")
    })
    station3_img_array[2].addEventListener("mouseout",function(){
        let img = this.querySelector("img")
        img.setAttribute('src',"./img/yellowwashinthebathroom.jpg")
    })

    // 4번째
    station3_img_array[3].addEventListener("mouseover",function(){
        let img = this.querySelector("img")
        img.setAttribute('src',"./img/bedtimeoilwithlamp.jpg")
    })
    station3_img_array[3].addEventListener("mouseout",function(){
        let img = this.querySelector("img")
        img.setAttribute('src',"./img/bedtimeonthebed.jpg")
    })


    // 팝업 버튼
    let popup_dont_show_again = this.document.querySelectorAll(".popup_dont_show_again")
    let popup_close = this.document.querySelectorAll(".popup_close")
    let popup_pc = this.document.querySelector(".popup_pc")
    let popup_mo = this.document.querySelector(".popup_mo")
    let popup_mo_modal = this.document.querySelector(".popup_mo_modal")

    popup_dont_show_again.forEach(function(btn){
      btn.addEventListener("click",function(){
        popup_pc.style.display = `none`
        popup_mo.style.display = `none`
        popup_mo_modal.classList.add("off")
      })
    })

    popup_close.forEach(function(btn){
      btn.addEventListener("click",function(){
        popup_pc.style.display = `none`
        popup_mo.style.display = `none`
        popup_mo_modal.classList.add("off")
      })
    })

    popup_mo_modal.addEventListener("click",function(){
      popup_mo_modal.classList.add("off")
      popup_mo.style.display = "none"
      popup_pc.style.display = `none`
    })

    // 장바구니

    let basket_best_main_array = this.document.querySelectorAll(".basket_best_main")
    let basket_icon_header_array = this.document.querySelectorAll(".basket_icon_header")

    basket_best_main_array.forEach(function(btn){
      btn.addEventListener("click",function(event){
        event.preventDefault()
        basket_icon_header_array.forEach(function(basket){
          basket.classList.add("on")
        })
      })
    })
})