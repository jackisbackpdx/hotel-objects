function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.availableRooms = function() {
        return this.rooms - this.booked;
    };
}
let quayHotel = new Hotel('Quay Hotel', 40, 25);
let portlandHotel = new Hotel('checkSpotPDX');


const titleAvailable = document.getElementById('h1');
titleAvailable.textContent = quayHotel.name + ' has ' + quayHotel.availableRooms() + ' rooms available';

function changeImage() {
    document.getElementById('img1').style.zIndex = '2';
}