class Calculator{
    add(a,b){
        console.log(`${a}+${b} wynosi ${a+b}`)
    }
    subtraction(a,b){
        console.log(`${a}-${b} wynosi ${a-b}`);
    }
    multiplication(a,b){
        console.log(`${a}*${b} wynosi ${a*b}`)
    }
    division(a,b){
        console.log(`${a}/${b} wynosi ${a/b}`)
    }
}
const p1 = new Calculator()
p1.add(20,3)
p1.subtraction(20,3)
p1.multiplication(20,3)
p1.division(20,2)