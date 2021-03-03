function create(){
    let x = document.getElementById("izmers").value;
    let table = document.getElementById("laukums");
    
    for(let i =0; i< x; i++){
        let row = table.insertRow(i);
        
        for(let j =0; j< x; j++){
            let button = document.createElement('BUTTON');
            button.classList.add("grid")
            
            var text = document.createTextNode(x*i+j+1);
            button.appendChild(text);
            
            let cell = row.insertCell(j);
            cell.appendChild(button);
            
            button.onclick=()=>{
                button.parentNode.parentNode.parentNode.remove();
            };
        }   
    }
}
    let doThis = document.getElementById("sakt");
    doThis.addEventListener("click", create);

  