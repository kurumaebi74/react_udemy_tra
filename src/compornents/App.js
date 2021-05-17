import React, { Component } from 'react';


// classコンポーネント
// class App extends Component
// {
// 	render()
// 	{
// 		// Classと入れ込み
// 			// const greeting = "Hi";
// 			// const dom = <div className="foo">{greeting}</div>
// 		// 代入してreturnもできる
// 			// const dom = <h1>Hello, world!</h1>;
// 			// return dom;
// 		return (
// 			<React.Fragment>
// 				<label htmlFor="bar">bar</label>
// 				<input type="text" onChange={() => {console.log("I am clicked!")}} />
// 			</React.Fragment>
// 		)
// 	}
// }
// 関数コンポーネント
const App = () => {
	return (
	<Counter></Counter>
	);
}

class Counter extends Component {
	constructor(props)
	{
		super(props);
		this.state ={count:0};
	}

	handlePulsButton = () => {
		this.setState({count: this.state.count + 1});
	}

	handleMinusButton = () =>{
		this.setState({count: this.state.count -1});
	}

	render(){
		console.log("render");
		return(
			<React.Fragment>
				<div>count: { this.state.count }</div>
				<button onClick={this.handlePulsButton}>+1</button>
				<button onClick={this.handleMinusButton}>-1</button>
			</React.Fragment>
		);
	}
}

// javascriptで書いた場合
// class App extends Component
// {
// 	render() {
// 		return React.createElement
// 		(
// 			"div",
// 			null,
// 			"Hello"
// 		);
// 	}
// }
export default App;
