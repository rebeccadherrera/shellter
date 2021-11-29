var saveHotelBtn = document.getElementById("Save-Hotel");

var hotelList = [];
var hotel;
var hotelDetails = [];


saveHotelBtn.style.display = 'none';


var saveHotel = function() {
    hotel = document.getElementById('locations-panel-details')
    hotel = hotel.innerText.slice(6);
    
    displayOnCard(hotel);
    

    

    hotelList = localStorage.getItem("HotelList");

    if (!hotel && hotelList) {
      hotelList = JSON.parse(hotelList);
    }
    else if(hotelList) {
      hotelList = JSON.parse(hotelList);
      hotelList.push(hotel);
    }
    else if (hotel) {
      hotelList = [hotel];
    }

    if (hotelList) {
      localStorage.setItem("HotelList" , JSON.stringify(hotelList));

    return hotelList;
    }
};

var displayOnCard = function(hotel) {
  console.log(hotel);

  var card1 = document.getElementById('card-1');
  var card2 = document.getElementById('card-2');
  var card3 = document.getElementById('card-3');
  var card4 = document.getElementById('card-4');

  
  card4.textContent = card3.textContent;
  card3.textContent = card2.textContent;
  card2.textContent = card1.textContent;
  card1.textContent = hotel;
};

var hideSaveBtn = function(event) {
  console.log(event);
  if ($(event.target).hasClass("back-button")) {
    saveHotelBtn.style.display = 'none';
  }
};

var showSaveBtn = function(event) {
  console.log(event.target);
  console.log('<button class="details-button"> View details </button>');
  if ($(event.target).hasClass("details-button")) {
    saveHotelBtn.style.display = 'block';
  }
};




$("#locations-panel-details").on("click", hideSaveBtn);
$("#location-results-list").on("click", showSaveBtn);
saveHotelBtn.addEventListener("click", saveHotel);

