import React from 'react';
import PropTypes from 'prop-types';

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
	const profiles = [
		{name: "taro", age:10},
		{name: "hanako", age:5},
		{name: "Noname"}
	]
	return (
	<div>
		{
			profiles.map((profiles, index) =>{
				return <User name={profiles.name} age={profiles.age} key={index}/>
			})
		}
	</div>
	)
}

const User = (props) => {
	return <div>this, I am {props.name}, and {props.age} yers old!</div>
}

User.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number.isRequired
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
