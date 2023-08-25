const res_nav = document.querySelector(".res-nav")
const menu_btn = document.querySelector(".res-nav-btn")
const close_btn = document.querySelector(".close-btn")
const res_btn = document.querySelectorAll(".res-btn")


menu_btn.addEventListener("click", (e) => {
    res_nav.style.display = "flex"
})

close_btn.addEventListener("click", (e)=> {
    res_nav.style.display = "none";
})


res_btn.forEach((btn) => {
    btn.addEventListener("click", (e)=> {
        res_nav.style.display = "none";
        
    })
})
