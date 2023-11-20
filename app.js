let fileterCarsResponseList = document.getElementById("filtered-cars-response-list");
let searchInput = document.getElementById("search-input");
let errorBlock = document.getElementById("error-block");
let filteredCars = [];

function Search() {
    let searchQuery = searchInput.value;
    

    fetch(`https://rentcar.webwide.ge/api/Car/filter?city=${searchQuery}&pageIndex=1&pageSize=10`, {
        method: "GET",
    })
    .then((response) => {

        if (response.ok) {
          
            return response.json();
        } else {
            errorBlock.innerHTML = `<h1>  მანქანა ვერ ვიპოვეთ</h1>`
        }
    })
    .then((car) => {
        console.log(car);

        fileterCarsResponseList.innerHTML = "";
        filteredCars = [];
            car.data.forEach((dataCar) =>{
            filteredCars.push(dataCar);
            console.log(dataCar);
        })

        filteredCars.forEach((car) => {
            fileterCarsResponseList.innerHTML = "";
            ` 
              <div class="card" style="width: 18rem;">
              <img src="${car.imageUrl1}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${car.brand}</h5>
                <p class="card-text">${car.model}</p>
                <p class="card-text">${car.price}ლ დღეში</p>
                <a href="#" class="btn btn-primary">${car.year}</a>
                <a href="#" class="btn btn-primary">${car.transmission}</a>
              </div>
            </div>
              `;
        });
    });
}
