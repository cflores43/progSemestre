class Robot{
    constructor(hola){
        this.hola= hola;
    };
    speak(){
        console.log('Buenos dias creador, ¿Cual es mi Mision?')
    };
    passButter(){
        console.log('Pasando la mantequilla')
    };
    blinkLight(){
        console.log('Tarea terminada')
    };
};

let a = new Robot('aRobot');
a.speak()
a.passButter()
a.blinkLight()