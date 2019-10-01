class votos {

    votosAbstencion = 0;
    contra = 0;
    favor = 0;

    constructor() {

    }

    /*============================================
              Métodos de Objetos
    ============================================*/

    ContarFavor() {
        this.favor++;
        return this.favor;

    }
    ContarEnContra() {
        this.contra++;
        return this.contra;

    }
    ContarAbstencion() {
        this.votosAbstencion++;
        return this.votosAbstencion
    }


}