const govApi = 'https://data.cityofnewyork.us/resource/drss-6xix.json'

var saveHotelBtn = document.getElementById("Save-Hotel");
var bottomBorder = document.getElementById("bottom-border");

var hotelList = [];
var hotel;
var hotelDetails = [];

saveHotelBtn.style.display = 'none';



var saveHotel = function() {
    hotel = document.getElementById('locations-panel-details')
    hotel = hotel.innerText.slice(6);
    

    if (hotel) {
      displayOnCard(hotel);
    }
    
    
    var card1 = document.getElementById('card-1');
    var card2 = document.getElementById('card-2');
    var card3 = document.getElementById('card-3');
    var card4 = document.getElementById('card-4');
    

    hotelList = localStorage.getItem("HotelList");

    if (!hotel && hotelList) {
      hotelList = JSON.parse(hotelList);
    }
    else if(hotelList) {
      hotelList = JSON.parse(hotelList);
      hotelList[3] = card4.textContent;
      hotelList[2] = card3.textContent;
      hotelList[1] = card2.textContent;
      hotelList[0] = card1.textContent;
    }
    else if (hotel) {
      hotelList = [hotel];
    }

    if (hotelList) {
      localStorage.setItem("HotelList" , JSON.stringify(hotelList));

      card4.textContent = hotelList[3];
      card3.textContent = hotelList[2];
      card2.textContent = hotelList[1];
      card1.textContent = hotelList[0];
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
  if ($(event.target).hasClass("back-button") || $(event.target).parent().hasClass("back-button")) {
    saveHotelBtn.style.display = 'none';
    bottomBorder.style.display = 'block';
  }
};

var showSaveBtn = function(event) {
  console.log(event.target);
  console.log('<button class="details-button"> View details </button>');
  if ($(event.target).hasClass("details-button")) {
      saveHotelBtn.style.display = 'block';
      bottomBorder.style.display = 'none';
  }
};

async function getData() {
  try {
    const response = await fetch(govApi);
    const data = await response.json();
    console.log(data);
    console.log(data[5].ipv_dirs_19);
    document.getElementById('total').innerHTML = data[5].ipv_dirs_19;
  }catch (err) {
    console.log(err);
    document.getElementById('total').innerHTML = 'ERROR';
  }

};



getData();
saveHotel();

$("#locations-panel-details").on("click", hideSaveBtn);
$("#location-results-list").on("click", showSaveBtn);
$(saveHotelBtn).on("click", saveHotel);

