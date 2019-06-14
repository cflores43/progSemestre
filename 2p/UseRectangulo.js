const Point = require('../CLASES PARA USE/Point2')

const Rectangulo =  require('../CLASES PARA USE/Rectangulo')

let p1 = new Point(6,9);
let p2 = new Point(8,8);

let rectanguloPapu = new Rectangulo(p1,p2)

rectanguloPapu.toString()