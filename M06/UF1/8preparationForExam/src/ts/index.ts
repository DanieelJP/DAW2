function modificarBom(){
   let input:string = (document.getElementById("data") as HTMLInputElement).value;
   let inputD:number = parseInt(input);


   for(let i:number=0; i<inputD; i++){
   console.log(i);
   let finestra: Window =(window.open("", "", "width=300, height=300"))!;
   finestra.document.write((i).toString());
   finestra.document.body.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
}
}