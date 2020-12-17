class Device {
    constructor(name) {
        this.name = name;
    }

    turn(onOff = "off") {
        return onOff;
    }

    power(i, v) {
        this.i = i;
        this.v = v;

        return i * v + "Bt";
    }
}

class Kettle extends Device {
    turn() {
        return "on"
    }

    power() {
        return 36 + "Bt";
    }
}

class Chandelier extends Device {
    turn() {
        return "off"
    }
}

class Microwave extends Device {
    turn() {
        return "on"
    }
}

class Room {
    constructor(device) {
        this.devices = device;
    }

    square(height, width) {
        return height * width;
    }

    findName(value) {
        return this.devices.filter((elem) =>
        elem.name === value)
    }
}

let bEdroom = new Room([new Kettle("Kettle"), new Chandelier("Chandelier"), new Microwave("Microwave")]);
let device = new Device("LG");
