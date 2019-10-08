/*============================================
          Objeto
============================================*/
class Car {

    posicionX = 0;
    posicionY = 0;

    constructor(posicionX, posicionY) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
    }

    /*============================================
              Métodos
    ============================================*/

    MoveRight(Img) {
        Img.src = "./Imagenes/autoderecha.png";
        document.getElementById('car').style.width = '140px';
        document.getElementById('car').style.height = '70px';

        if (this.posicionX <= 86) {
            Img.style.left = `${this.posicionX++}%`;
        }


    }
    MoveLeft(Img) {
        Img.src = "./Imagenes/autoizquierda.png";
        document.getElementById('car').style.width = '140px';
        document.getElementById('car').style.height = '70px';
        if (this.posicionX > 0) {
            Img.style.left = `${this.posicionX--}%`;
        }
    }
    MoveDown(Img) {
        Img.src = "./Imagenes/autoabajo.png";
        document.getElementById('car').style.width = '70px';
        document.getElementById('car').style.height = '140px';

        if (this.posicionY <= 79) {
            Img.style.top = `${this.posicionY++}%`;
        }
    }
    MoveUp(Img) {
        Img.src = "./Imagenes/autoarriba.png";
        document.getElementById('car').style.width = '70px';
        document.getElementById('car').style.height = '140px';

        if (this.posicionY > 0) {
            Img.style.top = `${this.posicionY--}%`;
        }
    }

    currentPosition(arrayPositionPrize, image) {

        let PositionCarX = image.x;
        let PositionCarY = image.y;

        for (let i = 0; i < arrayPositionPrize.length; i++) {
            let PositionXPrize = arrayPositionPrize[i].posX;
            let PositionYPrize = arrayPositionPrize[i].posY;

            console.log(`Coordenadas carrito`, PositionCarX, PositionCarY);
            console.log(`Coordenadas imagen`, PositionXPrize, PositionYPrize);

            if (PositionCarX >= PositionXPrize - 25 && PositionCarX <= PositionXPrize + 25 && PositionCarY >= PositionYPrize - 25 && PositionCarY <= PositionYPrize + 25) {
                return true;
            }
        }
        return false;
    }
}