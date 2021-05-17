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
	<div>
		<Cat />
		<Cat />
		<Cat />
		<Cat />
		<Cat />
	</div>
	)
}

const Cat = () => {
	return <div>MEow!</div>
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
