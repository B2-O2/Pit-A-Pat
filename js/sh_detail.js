window.onload = function() {
    let menu = document.getElementsByClassName("profileMenu")[0];

    menu.addEventListener("click", function() {
        document.getElementsByTagName('aside')[0].classList.toggle('visible');
    })
}

document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.querySelector(".catAnimation");

    // 애니메이션이 종료되면 이미지를 안 보이게 처리하는 함수
    function handleAnimationEnd() {
        imageElement.style.display = "none";
    }

    // animationend 이벤트 리스너 추가
    imageElement.addEventListener("animationend", handleAnimationEnd);
});