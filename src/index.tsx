
import { Hello, hello } from "components/One";
import * as React from "react";
import * as ReactDOM from "react-dom";

export let a = 5;

hello();

ReactDOM.render(<Hello />, document.getElementById('example'));
