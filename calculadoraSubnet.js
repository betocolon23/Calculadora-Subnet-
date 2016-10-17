

function checkSubnetClass() {
  // Sacar la clase
  var clase = 0;
  if (parseInt(document.getElementById("secondOctect").value) === 0) {
    document.getElementById("subnetClass").value = "Class A";
    clase = "a";

  }
  else if (parseInt(document.getElementById("thirdOctect").value) === 0) {
    document.getElementById("subnetClass").value = "Class B";
    clase = "b";
  }
  else if (parseInt(document.getElementById("fourthOctect").value) === 0) {
    document.getElementById("subnetClass").value = "Class C";
    clase = "c";
  }
  else {
    alert("Network address must contain a 0 in one of the octects");
  }

  //Utilizar cantidad de unos y ceros para sacar mascara
  var unos  = 0;
  var ceros = 0;
  unos = Math.log(document.getElementById("subnetNumber").value)/(Math.log(2));
  unos = Math.ceil(unos);


  ceros = 8 - unos;
  var x = 0;
  x = 256 - Math.pow(2,ceros);


  //Display subnet Mask
  if (clase == "a") {
    document.getElementById("subnetMask").value = "255." + x + ".0.0";
  }
 else if (clase == "b") {
   document.getElementById("subnetMask").value = "255." + "255." + x + ".0";
 }
 else if (clase == "c") {
   document.getElementById("subnetMask").value = "255." + "255." + "255." + x;
 }

 //Unir octectos en formato IP Address
 var primerOcteto = document.getElementById("firstOctect").value;
 var segundoOcteto = document.getElementById("secondOctect").value;
 var tercerOcteto = document.getElementById("thirdOctect").value;
 var cuartoOcteto =  document.getElementById("fourthOctect").value;

 document.getElementById("networkAddress").value = primerOcteto + "." +
 segundoOcteto + "." + tercerOcteto + "." + cuartoOcteto;

 //Display en la lista usando loop
var ipAddress = document.getElementById("subnetNumber").value;
var start = 0;
var ipList = document.getElementById("ipList");

for (var i = 0; i < ipAddress; i++) {
  if (clase == "c") {
    var subnet = document.createElement("li")
    subnet.innerHTML = "Subnet: " + primerOcteto + "." + segundoOcteto
    + "." + tercerOcteto + "." + start;
    ipList.appendChild(subnet);
    start += Math.pow(2, ceros);
  }
  else if (clase == "b") {
    var subnet = document.createElement("li")
    subnet.innerHTML = "Subnet: " + primerOcteto + "." + segundoOcteto
    + "." + start + "." + 0;
    ipList.appendChild(subnet);
    start += Math.pow(2, ceros);
  }
  else if (clase == "a") {
    var subnet = document.createElement("li")
    subnet.innerHTML = "Subnet: " + primerOcteto + "." + start
    + "." + 0 + "." + 0;
    ipList.appendChild(subnet);
    start += Math.pow(2, ceros);
  }
}

return false;
};
