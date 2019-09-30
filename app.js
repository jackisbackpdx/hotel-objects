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
    new Hotel('Oslo Hotel', 'https://i.imgur.com/v355qTe.jpg', 40, 25),
    new Hotel('Spain Hotel', 'https://i.imgur.com/9ZVukc0.jpg', 15, 4),
    new Hotel('Amsterdam Hotel', 'https://i.imgur.com/qtcmmvd.jpg', 34, 20),
];


function makeHotel() {
    let buttons = document.getElementsByClassName('button');
    let inputs = document.getElementsByTagName('input');
    if(inputs[0].value === '' || inputs[1].value === '' || inputs[2].value === '' || inputs[3].value === '') {
        return false;
    } else if (buttons.length < 7){
        let name = document.getElementById('name').value;
        let image = document.getElementById('image').value;
        let rooms = document.getElementById('rooms').value;
        let booked = document.getElementById('booked').value;
        const newHotel = new Hotel(name, image, rooms, booked);
        hotels.push(newHotel);
        
        const button = document.createElement('button');
        const buttonDiv = document.getElementById('buttons');
        button.classList.add('button');
        buttonDiv.appendChild(button);
        buttonText();
        onClickButton();
        beginningText();
    }
}


function beginningText() {
    for(let i = 0; i < hotels.length; i++) {
        let div = document.getElementById('hotel-text');
        let h1 = document.createElement('h1');
        h1.classList.add('hotel');
        div.appendChild(h1);
    
        let hotelTitle = document.getElementsByClassName('hotel');

        let updateName = document.getElementById('update-name').textContent;
        if(updateName === '' && hotels.length < 6){
            hotelTitle[i].textContent = hotels[i].name + ' has ' + hotels[i].availableRooms() + ' rooms available';   
        } else {
            return;  
        }
    }
}


function buttonText() {
    for(let i = 0; i < hotels.length; i++) {
        const buttons = document.getElementsByClassName('button');
        buttons[i].textContent = hotels[i].name;
    }
}

buttonText();
beginningText();


function image(file) {
    let hotelTitle = document.getElementsByClassName('hotel');
    const img1 = document.getElementById('img');
    img1.style.height = '300px';
    img1.style.width = '500px';

    for(let i = 0; i < hotels.length; i++) {
        hotelTitle[i].style.display = 'none';
    }

    img1.src = file.image;
    document.getElementById('display-box').style.color = 'white';

    document.getElementById('update-name').textContent = file.name;
    let roomText = 'This hotel has ' + file.rooms + ' rooms.';
    document.getElementById('update-rooms').textContent = roomText;
    let availableText = 'This hotel has ' + file.availableRooms() + ' rooms left to check out';
    document.getElementById('update-available').textContent = availableText;

    document.getElementById('display-box').style.display = 'flex';

}


function onClickButton() {
    const buttons = document.getElementsByClassName('button');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute('onclick', 'image(hotels[' + i + '])');
    }
}

onClickButton();

function clearH1() {
    let hotelTitle = document.getElementsByClassName('hotel');
    for(let i = 0; i < hotelTitle.length; i++)
    {
        if(hotelTitle[i].textContent === true) {
            hotelTitle[i].textContent = '';
        }
    }
}
//FUNCTION ADDS IMAGE

