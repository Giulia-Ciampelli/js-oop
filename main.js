console.log('im alive');

// In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.
// La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
// marca
// anno
// colore
// porte
// carburante
// Successivamente:
// Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
// Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
// Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()
// BONUS
// In questo bonus, dovrai estendere la classe "Veicolo" con una nuova classe chiamata "Automobile". La classe "Automobile" eredita tutte le proprietà e i metodi della classe "Veicolo" e ne aggiunge alcuni specifici per le automobili.
// Successivamente:
// Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
// Stampiamo il numero di porte e il tipo di carburante.

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
}

// #region variabili
const macchina = new Veicolo('Fiat', 2019, 'blu');

// #endregion variabili

console.log(macchina);
console.log(macchina.getInfo());
console.log(macchina.getAge(2024));
