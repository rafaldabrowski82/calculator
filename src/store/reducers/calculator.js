import * as math from 'mathjs';

let initialState = {
    result: '0',
};

const CalculatorReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'EQUAL':
            const actualResultEqual = state.result;

            if(isNaN(Number(actualResultEqual[actualResultEqual.length-1]))) {
                return{
                    ...state,
                };
            } else {
                return{
                    ...state,
                    result: math.evaluate(state.result).toString(),
                };
            }
        case 'DOT':
            if(state.result.indexOf(action.sign) === -1) {
                return{
                    ...state,
                    result: state.result + '.',
                }
            } else {
                return{
                    ...state,
                };
            }
        case 'PERCENT':
            const actualStatePercent = state.result + '/100';

            return {
                ...state,
                result: math.evaluate(actualStatePercent).toString(),
            };
        case 'TOGGLE':
            const displayValue = state.result;

            return{
                ...state,
                result: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue,
            };
        case 'NUMBER':
            if(state.result === '0') {
                return{
                    ...state,
                    result: String(action.sign),
                };
            }
            else {
                return{
                    ...state,
                    result: String(state.result)+String(action.sign),
                };
            }
        case 'OPERATOR':
            const actualResultOperator = state.result;

            if(actualResultOperator[actualResultOperator.length-1] === '-' ||
                actualResultOperator[actualResultOperator.length-1] === '+' ||
                actualResultOperator[actualResultOperator.length-1] === '*' ||
                actualResultOperator[actualResultOperator.length-1] === '/') {
                return{
                    ...state,
                };
            }
            else {
                return{
                    ...state,
                    result: String(state.result)+String(action.sign),
                };
            }
        case 'CLEAR':
            return{
                ...state,
                result: '0',
            };
        default:
            return state;
    }
};

export default CalculatorReducer;