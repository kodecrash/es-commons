
class Footer {

    constructor() {
        this.componentName = 'footer';
    }

    init() {
        this.loadFooter();
    }

    setJQueryObjects() {

    }

    loadFooter() {
      // Output loading status
      console.log('Footer component is loaded...')
    }
    
  }
  
  
const footer = new Footer(); 

export default footer;