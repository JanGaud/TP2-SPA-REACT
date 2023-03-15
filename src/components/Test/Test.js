import React from 'react';
import './Test.css';

class Test extends React.Component{

    constructor(props) {
        super(props);
        this.state = {compteur:0};
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState((prevState) => {
            return {
                compteur: prevState.compteur + 1
            };
        });
    }

    decrement() {
        this.setState((prevState) => {
            return {
                compteur: prevState.compteur - 1
            };
        });
    }


    render(){
        return(
            <div className="Test">
                <button onClick={() => this.decrement()} className="stop">-</button>
                <div>{this.state.compteur}</div>
                <button onClick={() => this.increment()} className="start">+</button>
            </div>
        );
    }
}


Test.propTypes = {};

Test.defaultProps = {};

export default Test;
