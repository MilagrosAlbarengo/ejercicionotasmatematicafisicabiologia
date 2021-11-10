//ejercicio numero 2
//escribir una funcion que permita al usuario ingresar 5 nombres y sus notas

function ingresar(indice:number) {
  let nombres:string[]=new Array(5);

  for (let index=0;index< nombres.length; index++)¨{
    //nombres[index]= prompt("Ingresar nombres de alumnos");
    console.log(( `El nombre en el index '${[index]}'es: '${nombres[index]}'`))
}

let matematicas:number[]=new Array(5);

for (let index=0;index< matematicas.length; index++)¨{
  //matematicas[index]= prompt("Ingresar notas de matematicas");
  console.log(( `la nota de matematicas en el index '${[index]}'es: '${matematicas[index]}'`))
}

let fisica:number[]=new Array(5);

for (let index=0;index< fisica.length; index++)¨{
  //fisica[index]= prompt("Ingresar notas de fisica");
  console.log(( `la nota de fisica en el index '${[index]}'es: '${fisica[index]}'`))
}

let biologia:number[]=new Array(5);

for (let index=0;index< biologia.length; index++)¨{
  //biologia[index]= prompt("Ingresar notas de biologia");
  console.log(( `la nota de biologia en el index '${[index]}'es: '${biologia[index]}'`))
}


  
}
