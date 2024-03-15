const travelingLocations = [{
    rating: 4,
    title: "Maldives Island",
    location: "North Province, Maldives",
    price: "500$",
    duration: 3,
    members: 4,
    image: "https://images.unsplash.com/photo-1542370285-b8eb8317691c?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    rating: 5,
    title: "Santorini, Greece",
    location: "Aegean Sea, Greece",
    price: "700$",
    duration: 5,
    members: 2,
    image: "https://plus.unsplash.com/premium_photo-1697729953709-0d5eb0dfc6aa?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    rating: 4,
    title: "Kyoto, Japan",
    location: "Kansai region, Japan",
    price: "1000$",
    duration: 7,
    members: 3,
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    rating: 3,
    title: "Paris, France",
    location: "Île-de-France, France",
    price: "900$",
    duration: 4,
    members: 2,
    image: "https://plus.unsplash.com/premium_photo-1668883189361-9c754861dbd6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    rating: 4,
    title: "Cape Town, South Africa",
    location: "Western Cape, South Africa",
    price: "800$",
    duration: 6,
    members: 4,
    image: "https://images.unsplash.com/photo-1610085347824-e7b734cbe552?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    rating: 5,
    title: "New York City, USA",
    location: "New York, USA",
    price: "1200$",
    duration: 5,
    members: 3,
    image: "https://images.unsplash.com/photo-1532952626554-d0cace1cd3fc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    rating: 3,
    title: "Sydney, Australia",
    location: "New South Wales, Australia",
    price: "1000$",
    duration: 7,
    members: 2,
    image: "https://images.unsplash.com/photo-1563366334-8858658c7446?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    rating: 4,
    title: "Rio de Janeiro, Brazil",
    location: "Rio de Janeiro, Brazil",
    price: "1100$",
    duration: 5,
    members: 4,
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    rating: 5,
    title: "Amsterdam, Netherlands",
    location: "North Holland, Netherlands",
    price: "900$",
    duration: 4,
    members: 2,
    image: "https://plus.unsplash.com/premium_photo-1694475052717-df3d93d3e6eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    rating: 3,
    title: "Venice, Italy",
    location: "Veneto, Italy",
    price: "1000$",
    duration: 6,
    members: 3,
    image: "https://plus.unsplash.com/premium_photo-1661905885668-24992c025d0d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
];

function ratedStarts(a) {
let str = "";
for (let i = 0; i < a; i++) {
    str = str + '<i class="fa-solid fa-star"></i>';
}
for (let i = a; i < 5; i++) {
    str = str + '<i class="fa-regular fa-star"></i>';
}
return str;
}


let tavelingCardsContainer = document.querySelector(".travelings-cards");

function renderTravelingLocations(travelingLocations) {
tavelingCardsContainer.innerHTML = "";
for (let eachItem of travelingLocations) {
    let card = document.createElement("div");
    card.classList.add('traveling-card');
    let stars = ratedStarts(eachItem.rating)
    let innervalue = `
    <img src="${eachItem.image}" alt="">
    <div class="traveling-card-details">
        <div class="traveling-rating">
            ${stars}
        </div>
        <div class="traveling-title">
            ${eachItem.title}
        </div>
        <div class="traveling-body-details">
            <i class="fa-solid fa-location-dot"></i>${eachItem.location}
        </div>
        <div class="traveling-body-details">
            <i class="fa-solid fa-circle-dollar-to-slot"></i>${eachItem.price}
        </div>

        <div class="traveling-inner-details">
            <div class="traveling-duration">
                <i class="fa-regular fa-clock"></i>&nbsp;${eachItem.duration}Days
            </div>
            <div class="traveling-noofpersons">
                <i class="fa-regular fa-user"></i>&nbsp;${eachItem.members}
            </div>
        </div>
    </div>
    `
    card.innerHTML = innervalue;


    tavelingCardsContainer.appendChild(card);
}

}
renderTravelingLocations(travelingLocations);

let travelingSearch = document.querySelector(".traveling-search");
let travelingBtn = document.querySelector(".search-btn");

travelingBtn.addEventListener("click", (event) => {
let searchVal = travelingSearch.value;
if (searchVal === "") {
    renderTravelingLocations(travelingLocations);
    travelingBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
} else {
    let formattedSubstring = searchVal.replace(/\s+/g, '').toLowerCase();
    let searchResultLocations = travelingLocations.filter((item) => {
        let formattedString = item.title.replace(/\s+/g, '').toLowerCase();
        if (formattedString.includes(formattedSubstring)) {
            return true;
        }
    })
    travelingSearch.value = "";
    travelingBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    renderTravelingLocations(searchResultLocations);
}
})