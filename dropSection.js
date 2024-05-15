var numitems=document.getElementById("nitems");
var extra=document.getElementById("extra");
var prueba=document.getElementById("prueba");
var salida=document.getElementById("salida");
var btnsend=document.getElementById("botonEnviar");

var estilos=document.getElementsByTagName("style")[0];
var salidacss=document.getElementById("salidacss");

numitems.onchange=revealNext;

function revealNext (){
    extra.innerHTML="";
    var subtitulo=document.createElement("h2");
    var texto=document.createTextNode("Ingresa el nombre para cada item del menú");
    subtitulo.appendChild(texto);
    extra.appendChild(subtitulo);
    var cant=this.value;

for (var i=0;i<cant;i++)
    {
     var newLabel=document.createElement("label");
     var labelText=document.createTextNode("Item "+(i+1));
     newLabel.appendChild(labelText);     
     extra.appendChild(newLabel);
     var newInput=document.createElement("input");
     newInput.type="text";
     newInput.className+="iteminp";
     newInput.required=true;
     extra.appendChild(newInput);
     extra.innerHTML=extra.innerHTML+"<br>";
    }

extra.style.display="block";
btnsend.style.display="block";
}

function construir(){
salida.value="";
prueba.innerHTML="";
var menuname=document.getElementsByName("mname")[0];
var nombresItems=extra.getElementsByClassName("iteminp");

if (comprobarInputs(nombresItems))
    {}
else {var newName=document.createElement('div');
newName.className+="menu";


var nuevoNombre=menuname.value;

var mname=document.createTextNode(nuevoNombre);
newName.appendChild(mname);
var newSub=document.createElement("div");
newSub.className+="submenu";

for (var i=0;i<nombresItems.length;i++)
    {
        var newItem=document.createElement("div");
        newItem.className+="item";

        var itemName=nombresItems[i].value;
        var ina=document.createTextNode(itemName);
        newItem.appendChild(ina);
        newSub.appendChild(newItem);
    }
newName.appendChild(newSub);

prueba.appendChild(newName);
salida.value=prueba.innerHTML;

var textoplano=estilos.firstChild.data.split("#separadorespecial{}");

salidacss.value=textoplano[1];
console.log(textoplano[1]);}
}


function comprobarInputs (vectorInputs){
    var verif=false;

    for (var i=0;i<vectorInputs.length&&verif==false;i++)
        {
            if (vectorInputs[i].value.length==0)
                {verif=true;}
        }
return verif;

}
/* <label for="">Item 1</label>
        <input type="text" name="" id=""><br>
        <label for="">Item 1</label>
        <input type="text" name="" id=""><br>
        <label for="">Item 1</label>
        <input type="text" name="" id=""><br>
        <label for="">Item 1</label>
        <input type="text" name="" id=""><br>*/

