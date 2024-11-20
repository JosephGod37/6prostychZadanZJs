class Students{
    constructor({imie,wiek,listaOcen}){
        this.imie=imie
        this.wiek=wiek
        this.listaOcen=listaOcen || []
    }

    addGrade(...listaOcen){
        this.listaOcen.push(...listaOcen)
        console.log(this.listaOcen)
    }
    mean(){
        const suma = this.listaOcen.reduce((acc, ocena) => acc + ocena, 0);
        console.log(this.listaOcen.length)
        const srednia = suma/this.listaOcen.length
        console.log(srednia)
    }
    przedstawSie(){
        console.log(`Mam na imie ${this.imie}, mam ${this.wiek} lat`)
    }
}

const p1 = new Students({imie: "Jan", wiek: 43, listaOcen: [3]})
p1.addGrade(2,4,3)
p1.mean()
p1.przedstawSie()