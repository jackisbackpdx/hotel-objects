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
    new Hotel('Quay Hotel', 'https://i.imgur.com/v355qTe.jpg', 40, 25),
    new Hotel('Check In Pdx', 'https://i.imgur.com/9ZVukc0.jpg', 15, 4),
    new Hotel('Amsterdam Hotel', 'https://i.imgur.com/qtcmmvd.jpg', 34, 20)
];

//MADE HOTELS
let hotelTitle = document.getElementsByClassName('hotel');

for(let i = 0; i < hotels.length; i++) {
    hotelTitle[i].textContent = hotels[i].name + ' has ' + hotels[i].availableRooms() + ' rooms available';    
}
for(let i = 0; i < hotels.length; i++) {
    const buttons = document.querySelectorAll('button');
    buttons[i].textContent = hotels[i].name;
}
//CHANGED TEXT OF DIV H1

function image(file) {
    const img1 = document.getElementById('img');
    img1.style.height = '300px';
    img1.style.width = '500px';
    hotelTitle[0].textContent = '';
    hotelTitle[1].textContent = '';
    hotelTitle[2].textContent = '';
    img1.src = file.image;
    console.log(img1.src);
    document.getElementById('display-box').style.color = 'white';

    document.getElementById('update-name').textContent = file.name;
    let roomText = 'This hotel has ' + file.rooms + ' rooms.';
    document.getElementById('update-rooms').textContent = roomText;
    let availableText = 'This hotel has ' + file.availableRooms() + ' rooms left to check out';
    document.getElementById('update-available').textContent = availableText;

}
//FUNCTION ADDS IMAGE

