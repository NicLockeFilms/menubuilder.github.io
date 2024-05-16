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
this.nextElementByTabIndex.focus();
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

var mname=document.createTextNode(nuevoNombre+"\n\t");
newName.appendChild(mname);
var newSub=document.createElement("div");
newSub.className+="submenu";
var whitespace="\n\t\t";
var ws=document.createTextNode(whitespace);
newSub.appendChild(ws);
for (var i=0;i<nombresItems.length;i++)
    {
        var newItem=document.createElement("div");
        newItem.className+="item";

        var itemName=nombresItems[i].value;
        var ina=document.createTextNode(itemName);
        newItem.appendChild(ina);
        newSub.appendChild(newItem);
        if (i==nombresItems.length-1)
            {
                var espb="\n\t";
                var eb=document.createTextNode(espb);
                newSub.appendChild(eb);
            }
        else {
            var espb="\n\t\t";
            var eb=document.createTextNode(espb);
            newSub.appendChild(eb);
        }
    }
newName.appendChild(newSub);
var lastspace="\n";
var lsp=document.createTextNode(lastspace);
newName.appendChild(lsp);
prueba.appendChild(newName);
salida.value=prueba.innerHTML;
console.log(prueba.innerHTML);
var textoplano=estilos.firstChild.data.split("#separadorespecial{}");

salidacss.value=textoplano[1]+"\n/*IMPORTANTE: SI DESEAS AGREGAR ESTE MENÚ A UN ELEMENTO FLEX HORIZONTAL RECUERDA MODIFICAR EL VALOR width DE LA CLASE '.menu' \nFLEX CON 4 MENÚS: width:25% <--- */";
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

function copiartexto (indicador)
{
    if (indicador==0)
        {var campocopy=document.getElementById("salida");
        campocopy.select();
        navigator.clipboard.writeText(campocopy.value);
        
        }
    else {
        var campocopy=document.getElementById("salidacss");
        campocopy.select();
        navigator.clipboard.writeText(campocopy.value);
    }    

    alert ("Texto copiado al portapapeles");
}
/* <label for="">Item 1</label>
        <input type="text" name="" id=""><br>
        <label for="">Item 1</label>
        <input type="text" name="" id=""><br>
        <label for="">Item 1</label>
        <input type="text" name="" id=""><br>
        <label for="">Item 1</label>
        <input type="text" name="" id=""><br>*/

