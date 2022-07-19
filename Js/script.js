/* CLASSE QUE CONTERÁ OS ELEMNTOS(ATRIBUTOS) QUE IREI MODIFICAR */

class MobileNavBar{
  constructor(list, itens, btMenu, menuItem, itensMenu){
    this.list = document.querySelector(list);
    this.itens = document.querySelectorAll(itens);
    this.btMenu = document.querySelectorAll(btMenu)[0];
    this.menuItem = document.querySelectorAll(menuItem);    
    this.itensMenu = document.querySelectorAll(itensMenu);

    this.activeClass = "active";
    this.desactiveClass = "desactive";
    this.classAnimation = "animation";   

    this.handleClick = this.handleClick.bind(this);
    this.handleClickItensList = this.handleClickItensList.bind(this);
  }

  animateLinks(){  
    this.itens.forEach((link, index) =>{      
      link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.3s ease forwards ${index / 8 + 0.3}s`);
    });           
  }

  handleClick(){
    if(window.innerWidth <= 670){
      this.list.classList.toggle(this.activeClass);
      this.menuItem.forEach(item => {
        item.classList.toggle(this.classAnimation);
      })
      
      this.animateLinks();   
    }
  }

  handleClickItensList(){
    if(window.innerWidth <= 670){
      this.list.classList.toggle(this.activeClass);
      this.menuItem.forEach(item => {
        item.classList.toggle(this.classAnimation);
      })    
      this.animateLinks();
    }
  }

  addClickEvent(){    
    this.btMenu.addEventListener("click", this.handleClick);    
    this.itensMenu.forEach((item) => {
      item.addEventListener("click", this.handleClickItensList);      
    });     
  }

  init(){
    if(this.btMenu){
      this.addClickEvent();     
    }
    return this;
  }
}

const mobileNavBar = new MobileNavBar(
  ".list",
  ".list a",
  ".new-menu",
  ".header-principal .new-menu .item", 
  ".list .link-menu .itens-menu"
);

mobileNavBar.init();