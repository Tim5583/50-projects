 const btnEle = document.querySelector(".btn");

 btnEle.addEventListener("click", (e) => {
     const x = e.clientX;
     const y = e.clientY;

     const buttonTop = e.target.offsetTop;
     const buttonLeft = e.target.offsetLeft;

     const posX = x - buttonLeft;
     const posY = y - buttonTop;

     const circle = document.createElement("span");
     circle.classList.add("circle");
     circle.style.top = posY + "px";
     circle.style.left = posX + "px";

     btnEle.appendChild(circle);

     setTimeout(() => {
         circle.remove();
     }, 500);
 });