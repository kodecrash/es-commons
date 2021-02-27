
class Header {

    constructor() {
        this.componentName = 'header';
    }
    
    init() {
        this.loadHeader();
    }

    setJQueryObjects() {

    }

    loadHeader() {
      // Output loading status
      console.log('Header component is loaded...')
    }
    
  }
  
  
const header = new Header(); 

export default header;