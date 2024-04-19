function customRender (reactElement, Container){

    //Ye code optimised nhi hai

    /* 
    
    const domElem = document.createElement(reactElement.type);
    domElem.innerHTML = reactElement.children;
    domElem.setAttribute("href", reactElement.props.href);
    domElem.setAttribute("target", reactElement.props.target);

    // container ke ander hum domElem ko insert kar rahe hai
    Container.appendChild(domElem); 
    
    */

    //here we are creating an element from reactElement
    const domElem = document.createElement(reactElement.type);
    domElem.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if( prop == "children") continue;
        domElem.setAttribute(prop, reactElement.props[prop]);
    }
    Container.appendChild(domElem); 

}



const reactElement = {
    type: "a",
    props: {
        href:  "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google.com"
}


const mainContainer = document.querySelector("#root");

customRender( reactElement, mainContainer);