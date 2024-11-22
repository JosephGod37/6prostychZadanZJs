class Cart{
    constructor(){
        this.listaProduktow = []
    }
    
    addProduct(...listaProduktow){
        this.listaProduktow.push(...listaProduktow)
    }
    removeProduct(nazwa){
        this.listaProduktow = this.listaProduktow.filter(produkt => produkt.nazwa !== nazwa);
    }

}

class Product{
    constructor(nazwa,cena,ilosc){
        this.nazwa=nazwa
        this.cena=cena
        this.ilosc=ilosc
    }
    wyswietl(){
        console.log(`Produkt: ${nazwa}, cena: ${cena}, ilosc: ${ilosc}`)
    }
}

let cart = new Cart()
cart.addProduct(new Product("woda",2.5,10))
cart.addProduct(new Product("piwo",2.5,10))
cart.addProduct(new Product("sok",2.6,10))

cart.removeProduct("piwo")
console.log(cart.listaProduktow)