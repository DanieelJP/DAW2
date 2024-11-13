function carregar(){
  let idioma:string = localStorage.getItem('idioma') as string;
  let color:string = localStorage.getItem('color') as string;

  let h1: HTMLHeadingElement = document.getElementById("header") as HTMLHeadingElement;
  let p: HTMLParagraphElement = document.getElementById("paragraph") as HTMLParagraphElement;

  if (idioma == "catala" && h1 != null) {
    h1.innerHTML = "Text en català";
    p.innerHTML = "Per veure els canvis, actualitzar la pàgina."
  } else if (idioma == "castella" && h1 != null) {
    h1.innerHTML = "Texto en castellano";
    p.innerHTML = "Para ver los cambios, actualitzar la página."
  } else if (idioma == "angles" && h1 != null) {
    h1.innerHTML = "Text in English";
    p.innerHTML = "To see the changes, refresh the page."
  }
  document.body.style.backgroundColor = color;
}


