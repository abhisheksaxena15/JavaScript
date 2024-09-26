//for loop
const x = "abhishek"
for(let i = 0; i<x.length ; i++){
    console.log(x[i]);
}
let y = 4
for(let i = 0;  i <= 10;  i++){
    console.log(`${y} X ${i} = ${y*i} `);
}


for(let i = 0; i<=10; i++){
    console.log("tis table is of " , i);
    
    for(let j = 0;j<=10; j++){
        console.log(`${i} X ${j} = ${i * j}`);
        
    }
}

for(let i = 0; i<10; i++){
    if(i == 5){
        console.log("5 is best");
        continue;
    }
    console.log(i);
    
}