fetch('/head.html')
.then(Response => Response.text())
.then(data => {
    document.head.innerHTML += data
})
.catch(error => console.log("에러 : ", error))

fetch('/header.html')
.then(Response => Response.text())
.then(data => {
    document.querySelector(".header_wrap").innerHTML += data
    let btn_gnb = this.document.querySelector("#btn_gnb")
    let btn_close_gnb = this.document.querySelector("#btn_gnb_close")
    let hidden_gnb = this.document.querySelector(".hidden_gnb")
    let fixed_btn = document.querySelector(".fixed_btn")
    
    btn_gnb.addEventListener("click",function(){
        hidden_gnb.classList.add("on")
        fixed_btn.style.zIndex = `0`
    })

    btn_close_gnb.addEventListener("click",function(){
        hidden_gnb.classList.remove("on")
        fixed_btn.style.zIndex = `1200`
    })
})
.catch(error => console.log("에러 : ", error))

fetch('/footer.html')
.then(Response => Response.text())
.then(data => {
    document.querySelector("footer").innerHTML += data
})
.catch(error => console.log("에러 : ", error))