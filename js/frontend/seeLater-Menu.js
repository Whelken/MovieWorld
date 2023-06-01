//All nav


//Menu responsive
const menu = document.querySelector(".contImgOfMenu").addEventListener("click",()=>{
    document.querySelector(".responsive").classList.toggle("move-menu")
})


//see later
const seeLater = document.querySelector(".contIMG").addEventListener("click",()=>{
   document.querySelector(".seeLater").classList.toggle("move-seeLater") 
})

const contSeeLater = document.querySelector(".seeLater__cont")
const mostrarEnCar = ()=>{
    for (let clave in localStorage) {
        try {
            let valor = JSON.parse(localStorage.getItem(clave))
            contSeeLater.innerHTML +=`
                <div class="movies__child1">
                    <div class="child__contImg1">
                        <img src="${valor.img}">
                    </div>
                    <div class="child__info1">
                        <h3>${valor.name}</h3>
                        <div class="info1__text">
                            <p>${valor.time}</p>
                            <p>${valor.opening}</p>
                        </div>
                        <div class="info__buttons1">
                            <a onclick="deleteMovie(${valor.id})">Delete</a>
                            <a  onclick="noneAll(),wastingMovie(${valor.id})">Wast</a>
                        </div>
                    </div>
                </div>
            `
        } catch (error) {
            console.log(error)
        }
    }
}
mostrarEnCar()
const deleteMovie = id => localStorage.removeItem(id);

//wast the movie
const wastMovie = document.querySelector(".wastingMovie");
const wastingMovie = async (id)=>{
    const  getVideo = await fetch("../js/Backend/movies.json");
    const datMovie = await getVideo.json();
    const movie  = datMovie[id];
    wastMovie.innerHTML = `
        <div class="wastingMovie__content">
            <div class="mot">
                <a onclick="noneMovie()" class="content__buttonClose">
                    <img src="../Imgs/icons/icons8-x-32.png" alt="">
                </a>
            </div>
            <div class="content__video">
               <video src="${movie.movie}" controls></video>
            </div>
        </div>
    `
};          

//close and open 
const noneAll  = ()=>{
    document.querySelector(".Allcontainer").style.display = "none";
    document.querySelector(".wastingMovie").style.display = "block"
}

const noneMovie  = ()=>{
    document.querySelector(".Allcontainer").style.display = "block";
    document.querySelector(".wastingMovie").style.display = "none"
}