//section 6

//dOCUMENT select
let buttonR1 = document.querySelector(".right-scroll1");
let buttonL1 = document.querySelector(".left-scroll1");

buttonR1.style.transform = "translateX(30px)";
buttonL1.style.transform = "translateX(-30px)";
buttonL1.style.opacity = "0"

const movingA1 = () => {
  buttonR1.style.transform = "translateX(-10px)";
  buttonL1.style.transform = "translateX(10px)";
  buttonL.style.opacity = "1"
}

const movingL1 = () => {
     buttonR1.style.transform = "translateX(50px)";
     buttonL1.style.transform = "translateX(-50px)";
     buttonL1.style.opacity = "1"
   }

document.querySelector(".conSection6__content2").addEventListener("mouseenter", movingA1);
document.querySelector(".conSection6__content2").addEventListener("mouseleave", movingL1);

//content__pointsScroll
const pointsOfScroll1 = [
     document.querySelector(".scroll1"),
     document.querySelector(".scroll2"),
     document.querySelector(".scroll3")
]

//contOfAnimation__sensors

const sensors1 = [
     document.querySelector(".sensor1"),
     document.querySelector(".sensor2"),
     document.querySelector(".sensor3"),
]

const hideSensors1 = (sensor1,sensor2)=>{
     sensor1.style.display = "none"
     sensor2.style.display = "none"
}

for(let i = 0 ; i < sensors1.length ; i++ ){
     sensors1[i].style.display = "none"
}

//funcionalidad
let img1S = document.querySelector(".imgs__conmg1")
let img2S = document.querySelector(".imgs__conmg2")
let img3S = document.querySelector(".imgs__conmg3")

let position1 = 1

const hideImages1 = (imgA,imgB)=>{
     imgA.style.zIndex = "0"
     imgA.style.opacity = "0"

     imgB.style.zIndex = "0"
     imgB.style.opacity = "0"
}

const validaciónPosition1 = ()=>{
     
     if(position1 == 1){
          img1S.style.opacity = "1"
          sensors1[0].style.display = "block"

          pointsOfScroll1[0].style.background = "white"
          pointsOfScroll1[1].style.background = "gray"
          pointsOfScroll1[2].style.background = "gray"


          hideImages1(img2S,img3S)
          hideSensors1(sensors1[1],sensors1[2])
          console.log(position1);
     }
     else if(position1 == 2){
          img2S.style.opacity = "1"
          sensors1[1].style.display = "block"

          pointsOfScroll1[0].style.background = "gray"
          pointsOfScroll1[1].style.background = "white"
          pointsOfScroll1[2].style.background = "gray"

          hideImages1(img1S,img3S)
          hideSensors1(sensors1[0],sensors1[2])
          console.log(position1);
     }
     else if(position1 == 3){
          img3S.style.opacity = "1"
          sensors1[2].style.display = "block"

          pointsOfScroll1[0].style.background = "gray"
          pointsOfScroll1[1].style.background = "gray"
          pointsOfScroll1[2].style.background = "white"


          hideImages1(img1S,img2S)
          hideSensors1(sensors1[0],sensors1[1])
          console.log(position1);
     }
     
}

validaciónPosition1()

buttonR1.addEventListener("click", ()=>{
     position1++
     if(position1 > 3){
          position1 = 1;
     }
     validaciónPosition1()
})
buttonL1.addEventListener("click", ()=>{
     position1--
     if(position1 < 1){
          position1 = 3;
     }
     validaciónPosition1()
})

pointsOfScroll1[0].addEventListener("click", ()=> {
     position1 = 1;
     validaciónPosition1();
});
pointsOfScroll1[1].addEventListener("click", ()=> {
     position1 = 2;
     validaciónPosition1();
});
pointsOfScroll1[2].addEventListener("click", ()=> {
     position1 = 3;
     validaciónPosition1();
});

//moving the text
const contentT1 = [
     document.querySelector(".contText__text1"),
     document.querySelector(".contText__text2"),
     document.querySelector(".contText__text3"),
];



moveText(contentT1[0],sensors1[0])
moveText(contentT1[1],sensors1[1])
moveText(contentT1[2],sensors1[2])
