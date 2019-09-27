function Hotel(name, image, rooms, booked,) {
    this.name = name;
    this.image = image;
    this.rooms = rooms;
    this.booked = booked;
    this.availableRooms = function() {
        return this.rooms - this.booked;
    };
}
let hotels = [
    new Hotel('Quay Hotel', '../images/hotel1.jpg', 40, 25),
    new Hotel('CheckInPDX', '../images/hotel2.jpeg', 15, 4)
];

//MADE HOTELS
let hotelTitle = document.getElementsByClassName('hotel');

for(let i = 0; i < hotels.length; i++) {
    hotelTitle[i].textContent = hotels[i].name + ' has ' + hotels[i].availableRooms() + ' rooms available';    
}
//CHANGED TEXT OF DIV H1

function image(file) {
    const img1 = document.getElementById('img');
    img1.style.height = '300px';
    img1.style.width = '500px';
    hotelTitle[0].textContent = '';
    hotelTitle[1].textContent = '';
    img1.src = file.image;
    console.log(img1.src);
}
//FUNCTION ADDS IMAGE
