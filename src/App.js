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
                <button className="color-function" onClick={props.inputSign}>&#177;</button>
                <button className="color-function" onClick={() => props.onPercent('%')}>%</button>
                <button className="color-operation" onClick={() => props.inputOperator('/')}>&#247;</button>
                <button onClick={() => props.inputNumber('7')}>7</button>
                <button onClick={() => props.inputNumber('8')}>8</button>
                <button onClick={() => props.inputNumber('9')}>9</button>
                <button className="color-operation" onClick={() => props.inputOperator('*')}>&#215;</button>
                <button onClick={() => props.inputNumber('4')}>4</button>
                <button onClick={() => props.inputNumber('5')}>5</button>
                <button onClick={() => props.inputNumber('6')}>6</button>
                <button className="color-operation" onClick={() => props.inputOperator('-')}>-</button>
                <button onClick={() => props.inputNumber('1')}>1</button>
                <button onClick={() => props.inputNumber('2')}>2</button>
                <button onClick={() => props.inputNumber('3')}>3</button>
                <button className="color-operation"  onClick={() => props.inputOperator('+')}>+</button>
                <button className="zero"  onClick={() => props.inputNumber('0')}>0</button>
                <button className="dot"  onClick={() => props.inputDot('.')}>.</button>
                <button className="color-operation" onClick={props.onEqual}>=</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        calc: state,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEqual: () => dispatch({type: actionTypes.EQUAL}),
        inputNumber: (sign) => dispatch({type: actionTypes.NUMBER, sign: sign}),
        inputDot: (sign) => dispatch({type: actionTypes.DOT, sign: sign}),
        onClear: () => dispatch({type: actionTypes.CLEAR}),
        inputOperator: (sign) => dispatch({type: actionTypes.OPERATOR, sign: sign}),
        onPercent: (sign) => dispatch({type: actionTypes.PERCENT, sign: sign}),
        inputSign: () => dispatch({type: actionTypes.TOGGLE}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
