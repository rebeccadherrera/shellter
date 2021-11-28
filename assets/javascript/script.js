var saveHotelBtn = document.getElementById("Save-Hotel");
var hotelList = [];
var hotel;
var hotelDetails = [];


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





saveHotelBtn.addEventListener("click", saveHotel);

