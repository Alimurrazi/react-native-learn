import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component{
    state = {count: 0}

    increment=()=>{
        this.props.dispatch({type: 'INCREMENT'});
        // this.setState({
        //     count: this.state.count+1
        // });
    }

    decrement=()=>{
        this.props.dispatch({type: 'DECREMENT'});
        // this.setState({
        //     count: this.state.count-1
        // });
    }
    render(){
        return (<div>
            <h2>Counter</h2>
            <div>
                <button onClick={this.decrement}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.increment}>+</button>
            </div>
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

//export default Counter;
export default connect(mapStateToProps)(Counter);