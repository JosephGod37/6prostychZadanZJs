class Produkt {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}


class FiltracjaProduktow {
    constructor(produkty) {
        this.produkty = produkty; 
    }
    filtruj(kategoria, minCena, maxCena) {
        return this.produkty
            .filter(produkt => produkt.category === kategoria) 
            .filter(produkt => produkt.price >= minCena && produkt.price <= maxCena); 
    }
    wyswietlProdukty(produkty) {
        if (produkty.length === 0) {
            console.log("Brak produktów spełniających kryteria.");
            return;
        }

        produkty.forEach(({ name, price, category }) => {
            console.log(`Produkt: ${name}, Kategoria: ${category}, Cena: ${price.toFixed(2)} PLN`);
        });
    }
}


const produkty = [
    new Produkt("Woda", 2.5, "napoje"),
    new Produkt("Piwo", 3.5, "napoje"),
    new Produkt("Chleb", 2.8, "pieczywo"),
    new Produkt("Masło", 7.5, "nabiał"),
    new Produkt("Ser", 12.0, "nabiał"),
    new Produkt("Sok", 4.0, "napoje"),
    new Produkt("Bułka", 1.5, "pieczywo")
];


const filtracja = new FiltracjaProduktow(produkty);

const wyniki = filtracja.filtruj("napoje", 2.0, 5.0);

filtracja.wyswietlProdukty(wyniki);