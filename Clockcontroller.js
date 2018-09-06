/*
* 
* Dev: Thiago Azevedo
* E-mail: thiagoazevedo12@yahoo.com.br
*
* Um exemplo simple e como criar um relógio com JavaScript
*
*/

class ClockController {

    //Method Contructor
    constructor() {
        this._clockEl = document.querySelector('#clock');
        this._locale;

        //Method setTime()
        this.setClockTime();
    }

    //Method setTime
    setTime() {
        this.clock = this.currenteTime().toLocaleTimeString(this._locale);
    }

    setClockTime() {
        setInterval(() =>{
            this.setTime();
        }, 1000)
    }

    //Method Currente Time
    currenteTime() {
        return new Date();
    }

    //Method Setters
    get clock() {
        return this._clockEl.innerHTML;
    }

    get locale() {
        return this._locale;
    }

    //Method Setters
    set clock(value) {
        this._clockEl.innerHTML = value;
    }

    set locale(value) {
        this._locale = value;
    }

}