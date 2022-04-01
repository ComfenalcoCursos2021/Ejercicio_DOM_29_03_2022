addEventListener("DOMContentLoaded", async function(e){
    let peticion = await fetch("config.json", {method: "GET"});
    let json = await peticion.json();

    let menus = document.querySelector("#menus");
    let header = document.querySelector("header");

    // <a href="" class="logo">Logo</a>
    let a = document.createElement("A");
    a.classList.add("logo");
    a.insertAdjacentText("beforeend", json.logo);
    header.insertAdjacentElement("afterbegin", a);

    //Mostrar el menu del config.json
    json.menu.forEach((data, id) => {
        let li = document.createElement("LI");
        let a = document.createElement("A");
        if(id==0){
            a.classList.add("active");
        }
        a.href = data.href;
        a.insertAdjacentText("beforeend", data.value);
        li.insertAdjacentElement("beforeend", a);
        menus.insertAdjacentElement("beforeend", li);
    });

    let h2 = document.createElement("H2");
    a = document.createElement("A");
    a.href =  json.paralax.titulo.href;
    a.classList.add("btn");
    a.insertAdjacentText("beforeend", json.paralax.titulo.value);
    h2.id = json.paralax.titulo.id;
    h2.insertAdjacentText("beforeend", json.paralax.titulo.nombre);

    console.log(h2);
    console.log(a);













    

    let stars = document.querySelector("#stars");
    let moon = document.querySelector("#moon");
    let mountains_front = document.querySelector("#mountains_front");
    let mountains_behind = document.querySelector("#mountains_behind");
    let text = document.querySelector("#text");
    let btn = document.querySelector(".btn");
    
    addEventListener("scroll", function(){
        let value = this.scrollY;
        stars.style = `left : ${value * 0.25}px;`;
        moon.style = `top : ${value * 1.05}px;`;
        mountains_front.style = `top : ${value * 0.5}px;`;
        mountains_behind.style = `top : ${value * 0}px;`;
        // text.style = `right : ${value * 10}px;`;
    })
})