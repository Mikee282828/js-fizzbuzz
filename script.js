const row = document.querySelector("div.row");

for(let i = 1; i<101 ; i++){
    if(i%3==0 && i%5==0){
        const col = document.createElement("div");
        const div = document.createElement("div")
        div.className = "fizzbuzz";
        col.className="col-2";
        div.append("FizzBuzz");
        row.append(col);
        col.append(div);
    }else if(i%3==0){
        const col = document.createElement("div");
        const div = document.createElement("div")
        div.className = "fizz";
        col.className="col-2";
        div.append("Fizz");
        row.append(col);
        col.append(div);
    }else if(i%5==0){
        const col = document.createElement("div");
        const div = document.createElement("div")
        div.className = "buzz";
        col.className="col-2";
        div.append("Buzz");
        row.append(col);
        col.append(div);
    }else{
        const col = document.createElement("div");
        const div = document.createElement("div")
        div.className = "number";
        col.className="col-2";
        div.append(i);
        row.append(col);
        col.append(div);
    }
}