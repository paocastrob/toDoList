import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	notes = [];
	add() {
		let input1 = document.querySelector("#input1");
		this.notes.push(input1.value);
		input1.value = "";
		this.forceUpdate();
	}
	render() {
		return (
			<div>
				<h1>Todos</h1>
				<input id="input1" type="text" />
				<input type="button" value="Enter" onClick={() => this.add()} />
				{this.notes.map((e, i) => {
					return (
						<div>
							<div key={i}>{e}</div>
							<input
								type="button"
								value="delete"
								onClick={() => {
									this.notes.splice(i, 1);
									this.forceUpdate();
								}}
							/>
						</div>
					);
				})}
			</div>
		);
	}
}
