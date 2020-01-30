import React from "react"
import "./Calculator.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'

function Calculator(){
    return (
        <div className="calc-main-class">
            <div className="calc-body-class">
                <div className="display-class">
                </div>
                <div className="history-class">
                    <button>
                        <FontAwesomeIcon icon={faHistory} />
                    </button>
                </div>
                <div className="button-group-class">
                    <button className="spacing-class">
                        CE
                    </button>
                    <button className="spacing-class">
                        C
                    </button>
                    <button className="spacing-class">
                        {"<-"}
                    </button>
                    <button className="spacing-class">
                        ÷
                    </button>
                </div>
                <div className="button-group-class">
                    <button className="spacing-class numkey-class">
                        7
                    </button>
                    <button className="spacing-class numkey-class">
                        8
                    </button>
                    <button className="spacing-class numkey-class">
                        9
                    </button>
                    <button className="spacing-class">
                        x
                    </button>
                </div>
                <div className="button-group-class">
                    <button className="spacing-class numkey-class">
                        4
                    </button>
                    <button className="spacing-class numkey-class">
                        5
                    </button>
                    <button className="spacing-class numkey-class">
                        6
                    </button>
                    <button className="spacing-class">
                        +
                    </button>
                </div>
                <div className="button-group-class">
                    <button className="spacing-class numkey-class">
                        1
                    </button>
                    <button className="spacing-class numkey-class">
                        2
                    </button>
                    <button className="spacing-class numkey-class">
                        3
                    </button>
                    <button className="spacing-class">
                        -
                    </button>
                </div>
                <div className="button-group-class">
                    <button className="spacing-class">
                        ±
                    </button>
                    <button className="spacing-class numkey-class">
                        0
                    </button>
                    <button className="spacing-class">
                        .
                    </button>
                    <button className="spacing-class" style={{color:"#4CAF50"}}>
                        =
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;