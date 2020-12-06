// //title이라는 id를 가진 부분의 색을 클릭했을때 변경
// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(255, 255, 255)";
// const OTHER_COLOR = "rgb(52, 73, 94)";

// function handleClick() {
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }else{
//         tltle.style.color = BASE_COLOR;
//     }
// } 


// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("click", handleClick);
// }

// init();

// //와이파이 켜고 끌때 인터넷 연결상태 콘솔창에서 볼 수 있음
// function handleOnLine(){
//     console.log("it's online");
// }

// function handleOffLine(){
//     console.log("it's offline");
// }


// window.addEventListener('online', handleOnLine);
// window.addEventListener('offline', handleOffLine);




// const title = document.querySelector("#title");

// const CLICKED_CLASS = "clicked"

// function handleClick(){
//     const currentClass = title.className;
//     if(currentClass !== CLICKED_CLASS){
//         title.className = CLICKED_CLASS;
//     } else{
//     title.className = "";
//     }
// }

// function init() {
//     title.addEventListener("click", handleClick);
// }

// init();

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"

function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(!hasClass){
    //     title.classList.add(CLICKED_CLASS);
    // } else{
    //     title.classList.remove(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);
}
function init() {
    title.addEventListener("click", handleClick);
}

init();