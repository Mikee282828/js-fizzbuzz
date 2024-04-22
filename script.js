const row = document.querySelector("div.row");

for(let i = 1; i<101 ; i++){
    let valore = i;
    let classe = "number";
    if(i%3==0 && i%5==0){
        valore = "FizzBuzz";
        classe = "FizzBuzz";
    }else if(i%3==0){
        valore = "Fizz";
        classe = "Fizz";
    }else if(i%5==0){
        valore = "Buzz";
        classe = "Buzz";
    }
    const col = document.createElement("div");
    const div = document.createElement("div");
    div.className = classe;
    col.className="col-2";
    div.append(valore);
    row.append(col);
    col.append(div);
}