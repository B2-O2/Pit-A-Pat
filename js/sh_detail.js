window.onload = function() {
    let menu = document.getElementsByClassName("profileMenu")[0];

    menu.addEventListener("click", function() {
        document.getElementsByTagName('aside')[0].classList.toggle('visible');
    })
}