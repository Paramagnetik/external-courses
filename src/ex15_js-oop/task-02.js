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
    constructor(device = [new Kettle("Kettle"), new Chandelier("Chandelier"), new Microwave("Microwave")]) {
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

let bedroom = new Room;
let device = new Device;
