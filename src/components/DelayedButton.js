import React, { Component } from "react";

// Code DelayedButton Component Here
export default class DelayedButton extends Component{
    delayClicker = e => {
        e.persist();
        window.setTimeout(() => {
          this.props.onDelayedClick(e);
        }, this.props.delay);
      };
    render() {
        return (
            <div>
                <button onClick={this.delayClicker}>CLick to Delay</button>
            </div>
        )
    }
}
