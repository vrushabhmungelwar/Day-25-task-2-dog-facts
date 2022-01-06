fetch("https://moviesbyvrushabh.herokuapp.com/dogs")
  .then((res) => res.json())
  .then((data) => initialize(data))
  .catch((err) => console.log("Error:", err.message));

function initialize(data) {
  let x = Math.floor(Math.random() * 435 + 1);
  document.querySelector(".modal-body").innerHTML += `<h5> ${
    x + ". " + data[x].fact
  }</h5>`;
}