// 1: hacer una petision a la pokeapi para mostrar con un console.log el nombre del poke

const getData = async () => {
  const promise = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await promise.json();
  console.log(data.name);
};

getData();

//2. hacer en el html una lista con un iput

//3. mostrar con un console.log lo que he puesto en el input al presionar cualquier tecla
const input = document.querySelector("#input");

// cuando llamo a showInput lo deberia hacer pasandole pokeInfo e input.value?

// 4. array con la info de los primeros 151 pokemons

const getData2 = async (i) => {
  const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
  const data2 = await promise.json();
  return data2;
};

let pokeInfo = [];

const dataFinal = async () => {
  let html = "";
  for (i = 1; i <= 151; i++) {
    const data2 = await getData2(i);
    pokeInfo.push(data2);
    html += `<li class="pokeList"><p class="pokeName">${data2.name}</p><img class="pokeImg" src="${data2.sprites.front_default}"> </li>`;
    //document.querySelector("#lista").innerHTML += `<li class="pokeList"><p class="pokeName">${data2.name}</p><img class="pokeImg" src="${data2.sprites.front_default}"> </li>`
  }
  document.querySelector("#lista").innerHTML = html;
  console.log(pokeInfo);
};

dataFinal();
console.log(dataFinal);

//mostrar en la lista el nombre del pokemon con su imagen (los 151)

// puedo usar la info obtenida o tengo aque seleccionar los <li>?

//filtrar pokemons x el input

const showInput = () => {
  let html = "";
  const pokeFilter = pokeInfo.filter((pokemon) => {
    if (pokemon.name.includes(input.value)) return true;
  });

  console.log(pokeFilter);

  for (i = 0; i < pokeFilter.length; i++) {
    html += `<li class="pokeList"><p class="pokeName">${pokeFilter[i].name}</p><img class="pokeImg" src="${pokeFilter[i].sprites.front_default}"> </li>`;
  }

  document.querySelector("#lista").innerHTML = html;
  // creamos una variable que almacenara la info filtrada
  // let html = ''
  //info.filter(pokeName => info.name)
  // if (pokeName.includes(input))
  // html += `<li class="pokeList"><p class="pokeName">${data2.name}</p><img class="pokeImg" src="${data2.sprites.front_default}"> </li>`;
  // document.querySelector("#lista").innerHTML = html;

  console.log(document.querySelector("#input").value);
};

input.addEventListener("input", showInput);
