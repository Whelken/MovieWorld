
//SECTION 7
const makeMovies = async () => {
     let movies = await fetch("../js/Backend/movies.json");
     const data = await movies.json();
     const contMovies__movies = document.querySelector(".contMovies__movies");
     for(let i = 0; i < 4 ; i++) {
       const { name,time,opening,img,id } = data[i];
       contMovies__movies.innerHTML += `
             <div class="movies__child">
                 <div class="child__contIMG">
                     <img src="${img}" alt="">
                 </div>
                 <h3>${name}</h3>
                 <div class="child__textInfo">
                     <p>${time}</p>
                     <p>${opening}</p>
                 </div>
                 <div class="child__buttons">
                     <a onclick="setMoviesToLocalS(${id})">see later</a>
                     <a class="wast" onclick="noneAll(),wastingMovie(${id})">Wast</a>
                 </div>
             </div>`;
             
     };
};
   
makeMovies();

const setMoviesToLocalS = async (id) => {
     try {
         const getMovies = await fetch("../js/Backend/movies.json");
         const datos = await getMovies.json();
         const movie = datos[id];
         localStorage.setItem(id,JSON.stringify(movie));
     } catch (error) {
         console.log(error)
     }
};

const button = document.querySelector(".seeker__contM a.button");
const contOfSeeker = document.querySelector(".seeker__contOfMovie");
const nameOfMovie = document.querySelector(".contM__movie");

const seekerMovie = async (nameMovie) =>{
     const data = await fetch("../js/Backend/movies.json");
     const movies = await data.json();
     for(let i = 0; i < movies.length; i++){
          if(movies[i].name === nameMovie){
               return contOfSeeker.innerHTML = `
               <div class="contOfMovie__movie">
               <h2>${movies[i].name}</h2>
               <div class="contOfMovie__img">
                    <img src="${movies[i].img}" alt="">
                </div>
               <div class="child__buttons">
                 <a onclick="setMoviesToLocalS(${movies[i].id})">see later</a>
                 <a class="wast" onclick="noneAll(),wastingMovie(${movies[i].id})">Wast</a>
               </div>
             </div>
               ` 
          }
          else contOfSeeker.innerHTML = `No se a encontrado la película`
     }
}

button.addEventListener("click",()=>{
     const value = nameOfMovie.value
     seekerMovie(value)
})