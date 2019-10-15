class Prize {
    posicionX = 0;
    posicionY = 0;
    sizeMargin = 0;

    constructor() {
        this.calculateSizeMargin();
    }

    PositionX(posicionX) {
        this.posicionX = posicionX;
    }

    PositionY(posicionY) {
        this.posicionY = posicionY;
    }


    calculateSizeMargin() {
        let marginContenedor = window.getComputedStyle(document.getElementById('contenedor'));

        let marginLeft = marginContenedor.getPropertyValue('margin-left');

        this.sizeMargin = marginLeft.substring(0, marginLeft.length - 2);
    }

    createElementImg() {
        let ImageCreate = document.createElement('img');

        let random = Math.floor(Math.random() * (5)) + 1;

        let posX = this.posicionX - this.sizeMargin - 25;
        let posY = this.posicionY - 25;

        ImageCreate.setAttribute('src', `./Imagenes/${random}.png`);
        ImageCreate.style.width = "50px";
        ImageCreate.style.left = `${posX}px`;
        ImageCreate.style.top = `${posY}px`;

        document.getElementById('contenedor').appendChild(ImageCreate);

        return { posX, posY }
    }

}