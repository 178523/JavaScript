class Proyectil {

    /*============================================
              Propiedades de objetos
    ============================================*/

    velocidadInicial = 0;
    angulo = 0;

    constructor(velocidadInicial, angulo) {
            this.velocidadInicial = velocidadInicial;
            this.angulo = angulo;
        }
        /*============================================
                  Métodos de objetos
        ============================================*/

    CalcularVelocidadX(t) {
        let VelocidadX = 0;

        VelocidadX = (this.velocidadInicial * Math.cos(this.angulo * (Math.PI / 180))) * t;

        return VelocidadX;
    }

    CalcularVelocidadY(t) {
        let VelocidadY = 0;

        VelocidadY = (this.velocidadInicial * Math.sin(this.angulo * (Math.PI / 180)));
        VelocidadY = VelocidadY * t - 0.5 * 9.8 * Math.pow(t, 2);
        return VelocidadY;
    }

    CrearSpan(posicionX, posicionY) {
        let spanCreador = document.createElement('span');
        spanCreador.style.left = `${posicionX}%`;
        spanCreador.style.bottom = `${posicionY}%`;
        document.getElementById('contenedor').appendChild(spanCreador);
    }
}