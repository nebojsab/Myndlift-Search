import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
    state = {
        isLoading: true,
    };

    componentDidMount() {}

    render() {
        return <div>Something...</div>;
    }
}

render(<App />, document.getElementById("root"));
