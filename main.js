class Veicolo {
    marca;
    anno;
    colore;
    porte;
    carburante;

    constructor (marca, anno, colore, porte, carburante) {
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
        this.porte = porte;
        this.carburante = carburante;
    }

    // funzione per info
    getInfo() {
        return `marca: ${this.marca}, anno: ${this.anno}, colore: ${this.colore}`
    }

    // funzione per età
    /**
     * @param {number} currentYear 
     * @returns the age of the vehicle
     */
    getAge(currentYear) {
        let age = currentYear - this.anno;
        return `anni auto: ${age}`;
    }

}

// estensione della classe
class Automobile extends Veicolo {
    trasmissione;
    modello;

    // funzione per stampare porte e carburante
    getTechInfo() {
        return `numero porte: ${this.porte}, alimentazione: ${this.carburante}`
    }
}

// #region variabili
const macchina = new Veicolo('Fiat', 2019, 'blu');
const macchina_2 = new Automobile('Opel', 2020, 'nera', 4, 'benzina');

// #endregion variabili

console.log(macchina);
console.log(macchina.getInfo());
console.log(macchina.getAge(2024));
console.log(macchina_2);
console.log(macchina_2.getTechInfo());
