document.addEventListener("DOMContentLoaded", function () {
  let itensList = document.getElementById("list");
  console.log(itensList);

  console.log("DOM fully loaded and parsed");
  // get items or empty list
  var series = JSON.parse(localStorage.getItem("series")) || [];

  console.log(series);
  // create list items
  series.forEach((serie) => {
    let title = document.createElement("h3");
    let anoLancamento = document.createElement("p");
    let autor = document.createElement("p");

    // inner html
    title.innerHTML = serie.name;
    anoLancamento.innerHTML = serie.release;
    autor.innerHTML = serie.author;

    // add classes
    title.classList.add("serie-title");
    anoLancamento.classList.add("serie-infos");
    autor.classList.add("serie-infos");

    // create list element and append data
    let li = document.createElement("li");
    li.classList.add("card");
    li.classList.add("glass-effect");
    li.appendChild(title);
    li.appendChild(anoLancamento);
    li.appendChild(autor);

    itensList.appendChild(li);
  });
});
