document.getElementById("submit")
        .addEventListener("click", () => {
  document.getElementById("vote").classList.add("hidden");
  document.getElementById("thankYou").classList.remove("hidden");
})

// document.getElementsByClassName(".rButton").addEventListener("click", (event) => {
//     const bla = event.target.innerText;

//     console.log(bla);
//     document.getElementById("rating").innerHTML(bla);
// })

const bla = (event) => {
    document.getElementById("rating").innerHTML = event.target.value;
}