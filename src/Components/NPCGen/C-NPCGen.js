// ========================IMPORTS
import { hover } from "@testing-library/user-event/dist/hover";

// ========================GLOBABL VARIABLES
//is used to check if mouse is hovering. toggled by button functions for mouseover
let isMouseHovering = false;


// ========================CSS VARIABLES
var NPC_Generator_Style = {

    // CSS Rules for anything with a div tag in this component
    mainWrap: {
        background:
            'linear-gradient(to bottom, rgba(145,85,77,0.5), rgba(185, 156, 107,0.5))',
        color: 'white',
        height: '10%',
        padding: '10px',
        margin: '50px',
        textAlign: 'center',
    },

    h2: {
      
        color: '#rgb(203, 186, 151)',
        textShadow: ' rgb(50, 50, 50) 2px 2px 1px',
        fontSize: '3.3rem',
        fontFamily: 'Cambria',
        margin: '0.75rem',
        fontWeight: '300',
        },

    compBtnNoneHover : {
// This is the default css style for a button element. used when the page loads
        backgroundColor: "rgb(100,250,100)",
        color: "black",
        border: "outset",
        borderRadius: "10px",
        padding: "5px",
        margin: "5px",
        textAlign: "Center",
        width: "100px",
        boxShadow: "2px 2px 3px black",
        fontWeight: "bolder",
    }

    };

    // ========================CUSTOM FUNCTIONS
const setBTNHoverBtnON = (e) => {

    isMouseHovering = true
    
    // This function fires when a button is entered by the mouse, changing its style
    compBtn: {

        e.target.style.background = "rgb(100,250,100)";
        e.target.style.color = "white";
        e.target.style.borderRadius = "10px";
        e.target.style.fontWeight = "bolder";
    }
}

const setBTNHoverBtnOFF = (e) => {
    
    isMouseHovering = false

    // This function fires when a button is left by the mouse, changing its style
    compBtn: {
        e.target.style.background = "rgb(100,250,100)";
        e.target.style.color = "black";
        e.target.style.borderRadius = "10px";
        e.target.style.fontWeight = "bolder";
        e.target.style.border = "outset";
    }
}

const setBTNClickDown = (e) => {
    // This function fires when a button is clicked by the mouse, changing its style
    compBtn: {
        e.target.style.background = "rgb(50,200,50)";
        e.target.style.color = "rgb(240,240,240)";
        e.target.style.fontWeight = "100";
        e.target.style.borderRadius = "15px";
        e.target.style.border = "inset";
        
    }
}

const setBTNClickUp = (e) => {
    // This function fires when a button is unclicked by the mouse, changing its style
    if(isMouseHovering)
    {
        console.log("Hovering after click: " + isMouseHovering)
    compBtn: 
        {
            //if user is still hovering over button when click is released...
            {
                
                e.target.style.background = "rgb(100,250,100)";
                e.target.style.color = "white";
                e.target.style.fontWeight = "bolder";
                e.target.style.borderRadius = "10px";
                e.target.style.border = "outset";
            }
        }
    }
    else
    {
        console.log("Hovering after click: " + isMouseHovering)
        compBtn: 
        //if user is NOT still hovering over button when click is released...
        {
            e.target.style.background = "rgb(100,250,100)";
            e.target.style.color = "black";
            e.target.style.fontWeight = "bolder";
            e.target.style.borderRadius = "10px";
            e.target.style.border = "outset";
        }
    }
}

    // ========================ACTUAL COMPONENT
isMouseHovering = false;

  const NPC_Generator = () => {
      
    return (

        

      <div style={NPC_Generator_Style.mainWrap}>
        
        <h2 style={NPC_Generator_Style.h1}>
            NPC Generator
        </h2>

        <div className="compBtn" style={NPC_Generator_Style.compBtnNoneHover} onMouseOver={setBTNHoverBtnON} onMouseLeave={setBTNHoverBtnOFF} onMouseDown={setBTNClickDown} onMouseUp={setBTNClickUp}>
            Randomise
        </div>

        <div className="compBtn" style={NPC_Generator_Style.compBtnNoneHover} onMouseOver={setBTNHoverBtnON} onMouseLeave={setBTNHoverBtnOFF} onMouseDown={setBTNClickDown} onMouseUp={setBTNClickUp}>
            New NPC
        </div>

        <div className="compBtn" style={NPC_Generator_Style.compBtnNoneHover} onMouseOver={setBTNHoverBtnON} onMouseLeave={setBTNHoverBtnOFF} onMouseDown={setBTNClickDown} onMouseUp={setBTNClickUp}>
            Save
        </div>

        <div className="compBtn" style={NPC_Generator_Style.compBtnNoneHover} onMouseOver={setBTNHoverBtnON} onMouseLeave={setBTNHoverBtnOFF} onMouseDown={setBTNClickDown} onMouseUp={setBTNClickUp}>
            Load
        </div>

        <div className="compBtn" style={NPC_Generator_Style.compBtnNoneHover} onMouseOver={setBTNHoverBtnON} onMouseLeave={setBTNHoverBtnOFF} onMouseDown={setBTNClickDown} onMouseUp={setBTNClickUp}>
            Delete
        </div>

      </div>
    );
  };

  export default NPC_Generator;