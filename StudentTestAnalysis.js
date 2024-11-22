class Student {
    constructor(name, results) {
        this.name = name;
        this.results = results;  
    }

   
    obliczSrednia() {
        const suma = this.results.reduce((sum, wynik) => sum + wynik, 0);
        return (suma / this.results.length).toFixed(2); 
    }

  
    znajdzNajwyzszyWynik() {
        return Math.max(...this.results);  
    }


    znajdzNajnizszyWynik() {
        return Math.min(...this.results);  
    }

    wyswietlWyniki() {
        console.log(`Student: ${this.name}`);
        console.log(`Wyniki testów: ${this.results.join(', ')}`);
        console.log(`Średnia wyniku: ${this.obliczSrednia()}`);
        console.log(`Najwyższy wynik: ${this.znajdzNajwyzszyWynik()}`);
        console.log(`Najniższy wynik: ${this.znajdzNajnizszyWynik()}`);
    }
}


const student = new Student('Marek', [85, 92, 88, 94]);

student.wyswietlWyniki();