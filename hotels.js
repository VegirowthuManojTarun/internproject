let menuSection = document.getElementById('menuSection');
let menuIcon = document.getElementById('menuIcon');
let xIcon = document.getElementById('xIcon');
let menuIconSection = document.getElementById('menuIconSection');
menuIconSection.addEventListener('click', function() {
    menuSection.classList.toggle('menu-display')
    xIcon.classList.toggle('d-none')
    menuIcon.classList.toggle('d-none')
    document.getElementById('booknowBtn').classList.toggle('d-md-inline')
})


const hotels = [{
        hotel_name: "Ocean View Resort",
        hotel_location: "Maldives",
        hotel_image: "https://images.unsplash.com/photo-1520285774798-2f1616131a68?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        no_of_persons_in_room: 2,
        no_of_beds: 1,
        price_per_night: 300
    },
    {
        hotel_name: "Mountain Lodge",
        hotel_location: "Aspen, Colorado",
        hotel_image: "https://images.unsplash.com/photo-1602061970430-4fbf0ddc4c16?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        no_of_persons_in_room: 4,
        no_of_beds: 2,
        price_per_night: 250
    },
    {
        hotel_name: "Tropical Paradise Inn",
        hotel_location: "Hawaii",
        hotel_image: "https://plus.unsplash.com/premium_photo-1675039871348-6a717479cf37?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        no_of_persons_in_room: 2,
        no_of_beds: 1,
        price_per_night: 200
    },
    {
        hotel_name: "Riverside Retreat",
        hotel_location: "Amazon Rainforest",
        hotel_image: "https://plus.unsplash.com/premium_photo-1661962821338-c07da63995f9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        no_of_persons_in_room: 2,
        no_of_beds: 1,
        price_per_night: 150
    },
    {
        hotel_name: "City Lights Hotel",
        hotel_location: "New York City",
        hotel_image: "https://plus.unsplash.com/premium_photo-1661943659036-aa040d92ee64?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        no_of_persons_in_room: 3,
        no_of_beds: 2,
        price_per_night: 180
    },
    {
        hotel_name: "Ski Chalet Haven",
        hotel_location: "Swiss Alps",
        hotel_image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        no_of_persons_in_room: 6,
        no_of_beds: 3,
        price_per_night: 400
    },
    {
        hotel_name: "Desert Oasis Resort",
        hotel_location: "Dubai, UAE",
        hotel_image: "https://images.unsplash.com/photo-1527736848781-72dc3b2ee00f?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        no_of_persons_in_room: 2,
        no_of_beds: 1,
        price_per_night: 220
    },
    {
        hotel_name: "Sunset Beach Resort",
        hotel_location: "Maui, Hawaii",
        hotel_image: "https://images.unsplash.com/photo-1502827413338-5a45f9a611df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        no_of_persons_in_room: 3,
        no_of_beds: 2,
        price_per_night: 280
    },
    {
        hotel_name: "Lakeside Lodge",
        hotel_location: "Lake Tahoe, California",
        hotel_image: "https://plus.unsplash.com/premium_photo-1663127298242-78f68e721b6d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        no_of_persons_in_room: 4,
        no_of_beds: 2,
        price_per_night: 220
    }
];

let hotelCardsContainer = document.querySelector(".hotel-cards");

function renderHotelRooms(hotels) {
    hotelCardsContainer.innerHTML = "";
    for (let eachItem of hotels) {
        let card = document.createElement("div");
        card.classList.add('hotel-card');
        card.classList.add('shadow');
        let innervalue = `
        <img  class="hotel-image" src="${eachItem.hotel_image}">
        <div class="hotel-details">
            <h1 class="hotel-card-heading">${eachItem.hotel_name}</h1>
            <p class="hotel-card-details">${eachItem.hotel_location}</p>
            <div class="hotel-cards-options mt-4 mb-4">
                <div class="room-details ">
                    <i class="fa-regular fa-user mr-2"></i>
                    <p class="mt-3">${eachItem.no_of_persons_in_room} Guests</p>
                </div>
                <div class="room-details ">
                    <i class="fa-solid fa-bed mr-2"></i>
                    <p class="mt-3">${eachItem.no_of_beds} Bedrooms</p>
                </div>
            </div>
            <hr class="separator">
            <div class="price-and-bookings">
                <p class="price">${eachItem.price_per_night}$</p>
                <button class="signup-button">Book Now</button>
            </div>
        </div>
        
        `
        card.innerHTML = innervalue;
        hotelCardsContainer.appendChild(card);
    }

}

renderHotelRooms(hotels);


let travelingSearch = document.querySelector(".traveling-search");
let travelingBtn = document.querySelector(".search-btn");

travelingBtn.addEventListener("click", (event) => {
    let searchVal = travelingSearch.value;
    if (searchVal === "") {
        renderHotelRooms(hotels);
        travelingBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
    } else {
        let formattedSubstring = searchVal.replace(/\s+/g, '').toLowerCase();
        let searchResultHotels = hotels.filter((item) => {
            let formattedString = item.hotel_name.replace(/\s+/g, '').toLowerCase();
            if (formattedString.includes(formattedSubstring)) {
                return true;
            }
        })
        travelingSearch.value = "";
        travelingBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        renderHotelRooms(searchResultHotels);
    }
})