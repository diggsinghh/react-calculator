import React from "react"
import "./Calculator.css"

function Calculator(){
    return (
        <div className="calc-main-class">
            <div className="calc-body-class">
                <div className="display-class">
                </div>
                <div className="history-class"><button id="history-button">
                </button></div>
                <div className="button-group-class">
                    <button className="spacing-class">
                    </button>
                    <button className="spacing-class">
                    </button>
                    <button className="spacing-class">
                    </button>
                    <button className="spacing-class">
                    </button>
                </div>
                <div className="button-group-class">
                    <button className="spacing-class" style={{backgroundColor:"#FBFBFF"}}>
                    </button>
                    <button className="spacing-class" style={{backgroundColor:"#FBFBFF"}}>
                    </button>
                    <button className="spacing-class" style={{backgroundColor:"#FBFBFF"}}>
                    </button>
                    <button className="spacing-class">
                    </button>
                </div>
                <div className="button-group-class">
                    <button className="spacing-class" style={{backgroundColor:"#FBFBFF"}}>
                    </button>
                    <button className="spacing-class" style={{backgroundColor:"#FBFBFF"}}>
                    </button>
                    <button className="spacing-class" style={{backgroundColor:"#FBFBFF"}}>
                    </button>
                    <button className="spacing-class">
                    </button>
                </div>
                <div className="button-group-class">
                    <button className="spacing-class" style={{backgroundColor:"#FBFBFF"}}>
                    </button>
                    <button className="spacing-class" style={{backgroundColor:"#FBFBFF"}}>
                    </button>
                    <button className="spacing-class" style={{backgroundColor:"#FBFBFF"}}>
                    </button>
                    <button className="spacing-class">
                    </button>
                </div>
                <div className="button-group-class">
                    <button className="spacing-class">
                    </button>
                    <button className="spacing-class" style={{backgroundColor:"#FBFBFF"}}>
                    </button>
                    <button className="spacing-class">
                    </button>
                    <button className="spacing-class">
                    </button>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Calculator;