import React, {Component} from 'react';
import './App.css';

class App extends Component {

    render() {

        return (
            <div className="calculator">
                <div className="display">
                    <p>0</p>
                </div>
                <div className="digit">
                    <button className="color-function">AC</button>
                    <button className="color-function">&#177;</button>
                    <button className="color-function">%</button>
                    <button className="color-operation">&#247;</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="color-operation">&#215;</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button className="color-operation">-</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className="color-operation">+</button>
                    <button className="zero">0</button>
                    <button>.</button>
                    <button className="color-operation">=</button>
                </div>
            </div>
        );

    }
}

export default App;
