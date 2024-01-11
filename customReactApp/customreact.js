// const ElementCreate = document.createElement(ElementRef, type);
// ElementCreate.innerHTML = ElementRef.children;
// for(const prop in ElementRef.props){
//     ElementCreate.setAttribute(prop, ElementRef.props[prop])
// } 
// root.appendChild(ElementCreate);

// const ElementRef = {
//     type: 'a',
//     props: {
//         href: "https://amazon.in",
//         target: '_blank'
//     },
//     children: "Click here and get Amazon Shopping Discount"
// };

// const MainContainer = document.getElementById("root");
// customRender(ElementRef, MainContainer);

const ElementComponent = React.createElement(
    "a",
    {
        href: "https://amazon.in",
        target: '_blank'
    },
    "Click here to check the Amazon Offer"
);
ReactDOM.render(
    ElementComponent,
    document.getElementById("root")
);