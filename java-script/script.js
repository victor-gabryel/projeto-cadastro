//INDEX
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  //TELA-DE-LOGIN
  function entrar() {

    let email = document.getElementById('email')
    let senha = document.getElementById('senha')

    if (email.value == 'Victor' && senha.value == 123) {
      alert('Chama')
      //ADICIONAR REDIRECIONAMENTO 
    } else if (email.value == 0 || senha.value == 0) {
      alert('[ERRO] Falta preencher campos!')
    } else {
      alert('[ERRO] Usuário ou Senha incorretos!')
    }

    if (email.value == 'ADM' && senha.value == 321) {
      alert('Chama')
      //ADICIONAR REDIRECIONAMENTO 
    } else if (email.value == 0 || senha.value == 0) {
      alert('[ERRO] Falta preencher campos!')
    } else {
      alert('[ERRO] Usuário ou Senha incorretos!')
    } 
  }

  //MODOS-DE-TELA

  function modolight() {
    var body = document.body
    body.style.background = "linear-gradient(to left, #626278, #454557)"
  }

  function mododark() {
    var body = document.body
    var main = document.getElementById('main')
    var footer = document.getElementById('footer')
    body.style.background = "linear-gradient(to left, #23232E, #19192C)"
  }