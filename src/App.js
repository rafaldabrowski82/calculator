import React from 'react';
import './App.css';
import * as actionTypes from './store/actions';
import {connect} from 'react-redux';

const App = (props) => {

    return (
        <div className="calculator">
            <div className="display">
                <p>{props.calc.result}</p>
            </div>
            <div className="digit">
                <button className="color-function" onClick={props.onClear}>AC</button>
                <button className="color-function">&#177;</button>
                <button className="color-function">%</button>
                <button className="color-operation" onClick={() => props.onOperator('/')}>&#247;</button>
                <button onClick={() => props.onNumber('7')}>7</button>
                <button onClick={() => props.onNumber('8')}>8</button>
                <button onClick={() => props.onNumber('9')}>9</button>
                <button className="color-operation" onClick={() => props.onOperator('*')}>&#215;</button>
                <button onClick={() => props.onNumber('4')}>4</button>
                <button onClick={() => props.onNumber('5')}>5</button>
                <button onClick={() => props.onNumber('6')}>6</button>
                <button className="color-operation" onClick={() => props.onOperator('-')}>-</button>
                <button onClick={() => props.onNumber('1')}>1</button>
                <button onClick={() => props.onNumber('2')}>2</button>
                <button onClick={() => props.onNumber('3')}>3</button>
                <button className="color-operation"  onClick={() => props.onOperator('+')}>+</button>
                <button className="zero"  onClick={() => props.onNumber('0')}>0</button>
                <button className="dot"  onClick={() => props.onDot('.')}>.</button>
                <button className="color-operation" onClick={props.onEqual}>=</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        calc: state,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEqual: () => dispatch({type: actionTypes.EQUAL}),
        onNumber: (sign) => dispatch({type: actionTypes.NUMBER, sign: sign}),
        onDot: (sign) => dispatch({type: actionTypes.DOT, sign: sign}),
        onClear: () => dispatch({type: actionTypes.CLEAR}),
        onOperator: (sign) => dispatch({type: actionTypes.OPERATOR, sign: sign}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
