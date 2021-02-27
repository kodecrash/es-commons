
class Nav {

    constructor() {
        this.componentName = 'nav';
    }
    
    init() {
        this.setJQueryObjects();
        this.setEvents();
    }

    setJQueryObjects() {
        this.ele$ = $('#nav');
        this.navbarTogglerBtn$ =  $('#navbar-toggler-btn');
    }

    setEvents() {
        this.navbarTogglerBtn$.bind('click', (event) => {
            console.log('Events 5');
        });
    }

    loadHeader() {
      // Output loading status
      console.log('Nav component is loaded...')
    }
    
  }
  
  
const nav = new Nav(); 

export default nav;