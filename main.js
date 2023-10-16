const dragElement = document.getElementById('drag');
const dropElement = document.getElementById('drop');
var btn= document.getElementById("btn");
var light= document.getElementById("light");
var logo=document.getElementById("logo");
let popup= document.getElementById("popup")

function toggleBtn(){
    btn.classList.toggle("active");
    light.classList.toggle("on");
    //logo.classList.toggle("on");
  }
  function openPopup(){
    popup.classList.add("open-popup");
  }
  function closePopup(){
    popup.classList.remove("open-popup");
  }
 
dragElement.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'profile');
});

dropElement.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropElement.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    dropElement.textContent = `Thanks for visiting Raaji ${data}`;
});
