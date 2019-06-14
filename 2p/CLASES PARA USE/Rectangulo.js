class Rectangulo{
    constructor(puntoA, puntoB){
        this.puntoA = puntoA;
        this.puntoB = puntoB;
    }

    toString(){
        console.log("Punto A: " + this.puntoA.x + "," + this.puntoA.y + "  ,  Punto B: " + this.puntoB.x + "," + this.puntoB.y)
    }
}

module.exports=Rectangulo