window.addEventListener("load",function(){

    let up_btn = this.document.querySelectorAll(".up_btn")
    up_btn.forEach(function(btn){
        btn.addEventListener("click",function(){
            window.scrollTo({
                top : 0,
                behavior: 'smooth',
            })
        })
    })

    // 검색버튼
    let search_btn_array = this.document.querySelectorAll(".search_btn")
    let modal = this.document.querySelector(".modal")
    let search = this.document.querySelector(".search")

    search_btn_array.forEach(function(btn){
        btn.addEventListener("click",function(event){
            event.preventDefault()
        modal.classList.add("on")
        search.classList.add("on")
        })
    })

    modal.addEventListener("click",function(event){
        event.preventDefault()
        modal.classList.remove("on")
        search.classList.remove("on")
    })

    // 이모티콘 호버스타일주기
    let hearticon_array = this.document.querySelectorAll(".hearticon")
    let basketicon_array = this.document.querySelectorAll(".basketicon")

    hearticon_array.forEach(function(icon){
        icon.addEventListener("mouseover",function(){
            icon.setAttribute("src","./img/heart_hover.svg")
        })
        icon.addEventListener("mouseout",function(){
            icon.setAttribute("src","./img/heart_default.svg")
        })
    })
    basketicon_array.forEach(function(icon){
        icon.addEventListener("mouseover",function(){
            icon.setAttribute("src","./img/basket_hover.svg")
        })
        icon.addEventListener("mouseout",function(){
            icon.setAttribute("src","./img/basket_default.svg")
        })
    })


    // 발표용 임시기능(발표 뒤에 header class명 지우기)
    let mypage_btn_array = this.document.querySelectorAll(".mypage_btn")
    mypage_btn_array.forEach(function(btn){
        btn.addEventListener("click",function(event){
            event.preventDefault()
            alert("서비스 준비중입니다.")
        })
    })
    let basket_btn_array = this.document.querySelectorAll(".basket_btn")
    basket_btn_array.forEach(function(btn){
        btn.addEventListener("click",function(event){
            event.preventDefault()
            alert("서비스 준비중입니다.")
        })
    })

    let talk_btn_imsi = this.document.querySelector(".talk_btn_imsi")
    talk_btn_imsi.addEventListener("click",function(event){
        event.preventDefault()
        alert("서비스 준비중입니다.")
    })
})