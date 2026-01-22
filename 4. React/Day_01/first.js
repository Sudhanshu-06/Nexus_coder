// create a element through js


// const header1= document.createElement('h1')
// header1.innerText="Hello coder army";
// header1.style.backgroundColor="pink";
// header1.style.fontSize="30px";
// header1.style.color="white";

// const header2= document.createElement('h2')
// header2.innerText="Hello coder army";
// header2.style.backgroundColor="blue";
// header2.style.fontSize="30px";
// header2.style.color="white";

// const root = document.getElementById('root')
// root.append(header1)
// root.append(header2)

const React ={

    createElement: function (tag,styles,children){
        const element= document.createElement(tag)

        if(typeof children==='object'){
            for(let val of children){
               element.append(val) 
            }
        }
        else
        element.innerText = children;

        for(let key in styles){
            element.style[key] = styles[key]
        }
        return element;
    }

}

const ReactDOM ={
    render: function(element,root){
        root.append(element)
    }
}
const header1 = React.createElement('h1',{fontsize:"30px",backgroundColor:"blue"},"Hello world!")
const header2 = React.createElement('h2',{fontsize:"25px",backgroundColor:"pink"},"How are you?")
const header3 = React.createElement('h3',{},"How are you?")


// unordered list

const li1= React.createElement('li',{},"HTML");
const li2= React.createElement('li',{},"CSS");
const li3= React.createElement('li',{},"JS");

const UL= React.createElement('ul',{fontsize:"30px",backgroundColor:"blue",color:"white"},[li1,li2,li3]) 


ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root'));
ReactDOM.render(UL,document.getElementById('root'));