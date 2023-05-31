import React from "react";

class Crosswords extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({
          count: this.state.count + 1,
        });
      }
      decrement = () => {
        this.setState({
          count: Math.max(this.state.count - 1),
        });
      }

    render() {
        return (
            <div>
                <h1>COUNTER</h1>
                <div>
                    <button onClick={this.increment}>INCREMENT</button>
                    <button onClick={this.decrement}>DECREMENT</button>
                </div>
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default Crosswords;