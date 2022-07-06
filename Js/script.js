/* CLASSE QUE CONTERÁ OS ELEMNTOS(ATRIBUTOS) QUE IREI MODIFICAR */

class MobileNavBar{
  constructor(buttomMenu, list, itens){
    this.buttomMenu = document.querySelector(buttomMenu);
    this.list = document.querySelector(list);
    this.itens = document.querySelectorAll(itens);
    this.activeClass = "active";
    this.desactiveClass = "desactive";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks(){
   this.itens.forEach((link, index) =>{      
     link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.3s ease forwards ${index / 8 + 0.3}s`);
   });
  }

  handleClick(){
    this.list.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent(){
    this.buttomMenu.addEventListener("click", this.handleClick);
  }

  init(){
    if(this.buttomMenu){
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavBar = new MobileNavBar(
  ".bt-menu",
  ".list",
  ".list a",
);

mobileNavBar.init();