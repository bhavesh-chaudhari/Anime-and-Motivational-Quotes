btn = document.getElementById("getAnimeQuotes");
show = document.getElementById("showAnimeQuotes");
btn2 = document.getElementById("getQuotes");
const main = document.getElementById("main");
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?api_key=1883f04448e29ab14e9c890f7744e4ad&query='

function animeShow(){
    {
        fetch("https://animechan.vercel.app/api/random")
          .then((response) => response.json())
          .then((quote) => {

            show.innerHTML = ""
            const quoteEl = document.createElement("div");
            quoteEl.classList.add("animequote");

            fetch(SEARCHAPI + quote.anime)
            .then((res)=>res.json())
            .then((data)=>{
              lol = data;
              
              if(data.results[0] != null){
                IMGPATH = "https://image.tmdb.org/t/p/w1280";
                store = data.results[0].poster_path
                if(store == null){
                  IMGPATH = "https://source.unsplash.com/1900x450/?"
                  store = "anime"
                }
              }
              else{
                IMGPATH = "https://source.unsplash.com/1900x450/?"
                store = "anime,japan"
              }
              quoteEl.innerHTML = `
                    <img
                      src="${IMGPATH + store}"
                      alt="${quote.anime}"
                    />
                    <div class="quoteTxt">
                      <h3>${quote.quote}</h3>
                    </div>
                    <div class="quoteAuthor">
                        <h4>Character -</h4>
                        <p>${quote.character}</p>
                    </div>
                    <div class="quoteAuthor">
                    <h4>Anime -</h4>
                    <p>${quote.anime}</p>
                   </div>
      
                        `;
            
              show.appendChild(quoteEl);   
            })

          });
      }
}

btn.addEventListener("click", () => animeShow());

animeShow()

function quoteShow(){
    {
        page = Math.floor(Math.random() * 7268);
        fetch("https://quote-garden.herokuapp.com/api/v3/quotes?page=" + page)
          .then((response) => response.json())
          .then((quotes) => {
      
            main.innerHTML = ""
              
            myArray = quotes.data;
            myArray.forEach((element) => {
              const quoteEl = document.createElement("div");
              quoteEl.classList.add("animequote");

              arr = [1,2,3,4,5,6,7,8,9,10]
      
              quoteEl.innerHTML = `
              <img
                class = "myImage"
                src="/Anime-and-Motivational-Quotes/quote-imgs/quote${ Math.floor(Math.random() * 10)}.jpeg"
                alt=""
              />
              <div class="quoteTxt">
                <h3>${element.quoteText}</h3>
              </div>
              <div class="quoteAuthor">
                  <h4>Author -</h4>
                  <p>${element.quoteAuthor}</p>
              </div>
                  `;
      
               main.appendChild(quoteEl);
            });
          });


      }
}

heading = document.querySelector(".heading");
heading.innerHTML = "Quotes"


btn2.addEventListener("click", ()=> quoteShow());

quoteShow()

function change(x){
    x.style.background = "red"
}

function inherit(x){
    x.style.background = "yellow"
}

function myFunction(x) {
    x.style.background = "yellow";
  }

  function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }

  }

  more = document.getElementById('more');
  more.addEventListener('click',()=>quoteShow())
