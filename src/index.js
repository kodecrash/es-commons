
import ESComponents  from './components/index';
import ESPages  from './pages/index';
import './styles/_main.scss';


console.log(ESComponents);
console.log(ESPages);

const esCommons = [...ESComponents, ...ESPages];

window.esCommons = esCommons.map( component => {

    const newValue = {};
    if (component.componentName) {
        newValue[component.componentName] = component;
    }
    return newValue;

});

// Initialize all Bin components

$(document).ready(() => {
    
    esCommons.forEach((component) => {
        window['esCommons'] = component;
        if (window['esCommons']) {
            window['esCommons'].init();
        }
    });

});
