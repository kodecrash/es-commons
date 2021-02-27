class Login {

    constructor() {
        this.componentName = 'login';
        this.loginForm$ = null;
    }
    
    init() {
      console.log('Login Page initialized');
      this.setJQueryObjects();
      this.attachEvents();
    }

    setJQueryObjects() {
        this.loginForm$ = $('#loginForm');

    }

    attachEvents() {
        this.loginForm$.submit((event) => {
            event.preventDefault();
            window.location.href = '/home';
        });
    }

  }
  
  
const login = new Login(); 

export default login;