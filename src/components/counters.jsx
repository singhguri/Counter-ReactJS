import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onDelete,
      counters,
      onIncrement,
      onDecrement,
    } = this.props;

    // if (this.props.counters.length === 0)
    //   return <p>There are no Counters...</p>;
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
          style={{ fontSize: 20 }}
        >
          Reset
        </button>
        {/* <p>Showing {this.props.counters.length} Counters...</p> */}
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            key={counter.id}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
