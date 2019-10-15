event();

let arrayPositionPrize = [];

function event() {
    document.addEventListener('keydown', moveCar);
    document.getElementById('contenedor').addEventListener('click', setPrize);

}

let car = new Car(0, 0);

function moveCar(event) {
    let image = document.getElementById('car');
    switch (event.key) {
        case 'ArrowRight':
            car.MoveRight(image);
            break;
        case 'ArrowLeft':
            car.MoveLeft(image);
            break;
        case 'ArrowDown':
            car.MoveDown(image);
            break;
        case 'ArrowUp':
            car.MoveUp(image);
            break;
    }

    if (arrayPositionPrize.length > 0) {
        let resultado = car.currentPosition(arrayPositionPrize, image)
        console.log(resultado);
    }
}

function setPrize(event) {
    let prize = new Prize(0, 0);
    prize.PositionX(event.clientX);
    prize.PositionY(event.clientY);

    arrayPositionPrize.push(prize.createElementImg()); //Json un arrelgo de objetos
    // console.log(arrayPositionPrize);

}