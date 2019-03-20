

class Figure {
    constructor (a) {
        this.a = a;
    }

     calcArea () {
        return this.a*this.a;
    }

}
class Circle extends Figure {
    
     calcArea (){
        return (Math.PI * Math.pow((this.a),2));
    }
}

class Rectangle extends Figure {
    constructor (a,b) {
        super(a);
        this.b = b;
    }

    calcArea (){
        return (this.b  * this.a);
    }
}

class Triangle extends Figure {
    constructor (a,b,c) {
        super(a);
        this.b = b;
        this.c = c;
    }

    calcArea (){
        var a = this.a,
        b =this.b ,
        c =this.c;

        var p = (a+b+c)/2;
       
        

         return (Math.sqrt(p*(p-a)*(p-b)*(p-c)));
    }
}
export default {Figure, Circle,Triangle,Rectangle}