







class Car {
    constructor(marka, model, color, tank) {
        this.marka = marka;
        this.model = model;
        this.color = color;
        this.tank = tank;
    }
    
    capacity(litr) {
        litr = prompt("benzini daxil edin")
        var emp=this.tank-litr
      if (litr <= this.tank) {
        return emp+"L"+" "+"bow yer qalib";
        } else {
            return "dashdi";
        }
        
    }
    

}


var mercedes = new Car("mercedes", "190", "black", 50);

alert(mercedes.capacity())

