const load_products_button = document.getElementsByClassName("btn btn-primary my-2").item(0);
const api_url = "https://api.escuelajs.co/api/v1/products"
let res;

load_products_button.addEventListener("click", function (event) {
    event.preventDefault();

    getData();
});


function getData() {
    fetch(api_url)
        .then((respose) => {
            respose.json().then((res) => {
                console.log(res);
                console.log(res[0]);
            });
        })
        .catch((err) => {
            console.log("API no obtenida");
        });
}
