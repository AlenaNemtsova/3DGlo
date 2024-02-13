import test from './modules/test'

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello, webpack';

    return element;
}

test();

document.body.appendChild(component());

