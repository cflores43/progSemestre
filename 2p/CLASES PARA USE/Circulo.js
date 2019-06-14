class Circulo{
    constructor(PuntoA,Radio){
        this.PuntoA = PuntoA
        this.Radio = Radio 
    }
    tostring(){
        console.log( "PUNTO A: " + this.PuntoA.x + " , " + this.PuntoA.y + " RADIO : " + this.Radio )
    }

}

module.exports=Circulo