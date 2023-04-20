import React, { useState } from "react";
import ReactDOM from "react-dom";
import Counter from './counter.jsx'
import "./styles.css";

const Home = () => {
	return (
		<div>
			<Counter />
		</div>
	);
};

// const rootElement = document.getElementById("app");
// ReactDOM.render(<Home />, rootElement);

export default Home;
