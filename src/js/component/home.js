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
			<div className="box1">
				<h1>My To do List</h1>
				<input
					className="input"
					id="input1"
					type="text"
					placeholder="Title..."
				/>
				<input
					className="post"
					type="button"
					value="Add"
					onClick={() => this.add()}
				/>
				{this.notes.map((e, i) => {
					return (
						<div>
							<div className="response" type="button" key={i}>
								{e}
							</div>
							<input
								className="deleteNote"
								type="button"
								value="Delete"
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
