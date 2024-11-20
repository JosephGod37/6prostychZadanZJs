const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) =>{

    if(uppercase){
        text = text.toUpperCase()
        console.log(text)
    }
    else if(reverse){
        text = text.split('').reverse().join('')
        console.log(text)
    }
    else if (removeSpecialChars) {
        text = text.replace(/[^\w\s]/g, '');
        console.log(text);
    
    } 
}




const text="lubie spac i mam na imie igor!"
processText(text, { uppercase: true });
processText(text, { reverse: true });    

processText(text, { removeSpecialChars: true })