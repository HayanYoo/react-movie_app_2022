import React from "react";

class App extends React.Component{
    state = {
        count : 0,
        minutes : 0, 
    };

    add = () => {
        this.setState(current =>( {count : current.count + 1}));
    };
    minus = () => {
        this.setState(current =>( {count : current.count - 1}));
    };

    onChange = (event) => {
            this.setState({minutes : event.target.value})
    };

    render() {
        return (
            <div>
                <div>The number is {this.state.count}</div>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
                <hr></hr>

                <h1 className="converter">Super Converter</h1>

                <label htmlFor="minutes">Minutes</label>
                <input 
                value={this.state.minutes} 
                id="minutes" 
                placeholder="Minutes" 
                type="number" 
                onChange ={this.onChange} 
                />
                <h4>You want to convert {this.state.minutes}</h4>
              
                <label htmlFor="hours">Minutes</label>
                <input
                value={this.state.minutes/60} 
                id="hours" 
                placeholder="Hours" 
                type="number"
                />

            </div>
        );
    }

}


export default App;
