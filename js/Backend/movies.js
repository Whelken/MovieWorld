const makeMovies = async () => {
    let movies = await fetch("../js/Backend/movies.json");
    const data = await movies.json();
    const contMovies__movies = document.querySelector(".contMovies__movies");
    data.forEach((element) => {
      const { name,time,opening,img,id } = element;
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
                    <a class="seeLater3" onclick="saveCleanShow(${id})">see later</a>
                    <a class="wast" onclick="noneAll(),wastingMovie(${id})">Wast</a>
                </div>
            </div>`;
    });
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

