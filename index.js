import React, { Component } from 'react';
import { createStore, combineReducers, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
const INCREASE_T = Symbol('INCREASE_T');
const INCREASE_AC = Symbol('INCREASE_AC');
let increaseReducer = (state={countNum: 0}, action)=> {
    console.log(state, action, '9jsldfjlksdjfsssssaaaaaaaaaaaaaa');
    switch(action.type){
        case INCREASE_T: return {countNum: state.countNum + 1};
        default: return state;
    }
};
let reducer = combineReducers({ increaseReducer});
let store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let increaseClick = state => {
    console.log(state, '18jsdfsldfjssss');
  return ({countNum: state.increaseReducer.countNum});
};
let mapStateToProps = increaseClick;
let onIncreaseClick = () => ({ type: INCREASE_T });
// let dispatchedIncrease = dispatch => ({value: bindActionCreators(onIncreaseClick, dispatch)});
let mapDispatchToProps = dispatch => ({actions: bindActionCreators({ onIncreaseClick }, dispatch) });

class Counter extends Component{
    render(){
        console.log(this.props, '28woeiruwiewwwwwwwwww');
        return (
            <div>
                <span>{this.props.countNum}</span>
                <button onClick={this.props.actions.onIncreaseClick}>Increase</button>
            </div>
        )        
    }
}
console.log(PropTypes, '38lsdkjfsjdfjjsssssssssdffffffff');
Counter.propTypes = {
    countNum: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
};
let App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

