class Triangule{
    constructor(puntoA, puntoB, puntoC){
        this.puntoA = puntoA
        this.puntoB = puntoB
        this.puntoC = puntoC 
    }
    toString(){
        console.log("Punto A:" + this.puntoA.x + "," + this.puntoA.y + 
        "," +"Punto B:" + this.puntoB.x + "," + this.puntoB.y + "," + 
        "PUNTO C: " + this.puntoC.x + "," + this.puntoA.C)    
    }


}

module.exports=Triangule