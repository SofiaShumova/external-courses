class Entity {
    constructor(name) {
        this.name = name;
    }
}
class Room extends Entity {
    constructor(name) {
        super(name);
        this.countSocket = 0;
        this.sockets = new Array();
        this.freeSocket = 0;
    }

    addSocket(...items) {
        for (let item of items) {
            this.countSocket++;
            this.freeSocket++;
            this.sockets.push(item);
        }
        console.log("Розетки добавлены")
    }

    turnOnDevice(device) {
        this.freeSocket--;

        for (let socket of this.sockets) {
            if (!socket.state) {
                socket.turnOn(device);
                console.log(`${device.name} включен в розетку`);
                return true;
            }
        }

        console.log("Недостаточно розеток")
        return false;
    }

    turnOffDevice(nameDevice) {
        for (let socket of this.sockets) {
            if (socket.device.name === nameDevice) {
                socket.turnOff();
                console.log(`${nameDevice}  выключен`)
                return true;
            }
        }

        console.log("Такое устройство не найдено");
        return false;
    }

    getPower() {
        let power = 0;
        for (let socket of this.sockets) {
            if (socket.state) {
                power += socket.device.power;
            }    
        }
        return power;
    }
}

class Socket extends Entity {
    constructor() {
        super("Розетка");
        this._state = false;
        this.device = null;
    }

    get state() {
        return this._state;
    }

    turnOn(device) {
        this._state = true;
        this.device = device;
    }

    turnOff() {
        this._state = false;
        this.device = null;
    }
}

class Device extends Entity {
    constructor(name, powerConsumption) {
        super(name);
        this.power = powerConsumption;
    }
}

let room = new Room("Спальня");
room.addSocket(new Socket(), new Socket())
room.turnOnDevice(new Device("Телевизор", 200))
room.turnOnDevice(new Device("Лампа", 200))
room.turnOnDevice(new Device("Пилот", 200))
console.log(room.getPower());
room.turnOffDevice("Телевизор")