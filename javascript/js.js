function create(){
    let x = document.getElementById("izmers").value;
    let table = document.getElementById("laukums");
    
    let skaitli = [];
//    skaitli[0] = 101;
   
   //pirmā array 
    for(t = 0; t < x*x/2; t++){
        
        var randsk = Math.floor(Math.random() * 100) + 1;
        while(skaitli.includes(randsk)){
            var randsk = Math.floor(Math.random() * 100) + 1;
        }
        skaitli[t] = randsk;
    }
    
//katram pirmā array skaitlim izveidoju bināro skaitli un ieliku visus savā array
    let biskaitli= [];
    for (t = 0; t < (x*x)/2; t++){
        biskaitli[t] = dec2bin(skaitli[t]);
    }
    
    let koparray = [];
    for(var i = 0; i < x*x/2; i ++){
        koparray[i] = skaitli[i]
    }
    for(var i = 0; i<x*x/2; i++){
        koparray[i+(x*x/2)] = biskaitli[i];
    }
    shuffleArray(koparray);
   
    
    
    for(let i =0; i< x; i++){
        
        let row = table.insertRow(i);        
        for(let j =0; j< x; j++){
            
            let button = document.createElement('BUTTON');
            button.classList.add("grid")
            
            
            var text = document.createTextNode(koparray[x*i+j]);
            button.appendChild(text);
            
            let cell = row.insertCell(j);
            cell.appendChild(button);
            
            button.onclick=()=>{
               var firstText = "";
                for (var i = 0; i < oDiv.childNodes.length; i++) {
                    var curNode = oDiv.childNodes[i];
                    if (curNode.nodeName === "#text") {
                        firstText = curNode.nodeValue;
                        break;
                    }
                }
                alert(firstText);
                //button.parentNode.parentNode.parentNode.remove();
            }
        }   
    }
}


function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


    let doThis = document.getElementById("sakt");

    function tiritsakt(){
        create();
    }
    doThis.addEventListener("click", tiritsakt);
    

  