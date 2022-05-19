// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

let createUL = document.createElement("ul");

countries.forEach(paises => {
    let createLI = document.createElement("li");
    createLI.innerText = paises;
    createUL.appendChild(createLI);
});

document.body.appendChild(createUL);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let removeClass = document.querySelectorAll(".fn-remove-me");

let targetArray = Array.from(removeClass);

targetArray.forEach(borrar => {
    document.body.removeChild(borrar);
});


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let createULdiv = document.createElement("ul");

cars.forEach(coches => {
    let createLIdiv = document.createElement("li");
    createLIdiv.innerText = coches;
    createULdiv.appendChild(createLIdiv); 
});

let targetDiv = document.querySelector('div[data-function="printHere"]');

targetDiv.appendChild(createULdiv);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.

const countriesList = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const iterator of countriesList) {
    //Creamos primero los divs
    let divsList = document.createElement('div');
    divsList.className = 'list';
    //Insertamos title en los divs creados
    let titleList = document.createElement('h4');
    titleList.innerText = iterator.title;
    divsList.appendChild(titleList);
    //insertamos las imágenes en los divs creados
    let imgList = document.createElement("img");
    imgList.src = iterator.imgUrl;
    divsList.appendChild(imgList);
    //Insertamos todo al documento HTML
    document.body.appendChild(divsList);
};

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.

let deleteBTN = document.createElement("button");

deleteBTN.onclick = function () {
    let divsToErase = document.querySelectorAll('[class=list]');
    let divsToEraseArray = Array.from(divsToErase);
    document.body.removeChild(divsToEraseArray[divsToEraseArray.length-1]);
};

deleteBTN.innerText = 'BORRAR IMG';

document.body.appendChild(deleteBTN);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// elementos de las listas que elimine ese mismo elemento del html.

let ulList = document.querySelectorAll("ul");
let ulListArray = Array.from(ulList);

ulListArray.forEach(elemento => {
    let deleteBTNul = document.createElement("button");

    deleteBTNul.onclick = function () {
        let allLI = elemento.querySelectorAll("li");
        let allLiArray = Array.from(allLI);
        elemento.removeChild(allLiArray[allLiArray.length-1]); 
    };

    deleteBTNul.innerText = "BORRAR LISTA";

    elemento.appendChild(deleteBTNul);
});

