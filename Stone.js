class Stone {

    constructor(_color, _location) {
        this.life = true;
        this.liberties = 4;
        this.color = _color ? "black" : "white";
        this.location = _location;
    }

    getLocation() {
        return this.location;
    }

    getLiberties() {
        return this.liberties;
    }

    updateLiberties(newLib) {
        this.liberties = newLib;
    }

    isAlive(){
        return this.life;
    }

    getColor() {
        return this.color;
    }
}

module.exports = Stone;