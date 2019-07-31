import React from "react";

//create your first component
export class Home extends React.Component {
	notes = ["Sleep", "Go to the cinema"];
	add() {
		let input1 = document.querySelector("#input1");
		this.notes.push(input1.value);
		input1.value = "";
		this.forceUpdate();
	}
	render() {
		return (
			<div className="container bg-light p-5">
				<div className="">
					<h1>My To do List</h1>

					<div className="input-group mb-3 w-50">
						<input
							type="text"
							id="input1"
							className="form-control"
							placeholder="Title..."
							aria-label="Title..."
							aria-describedby="button-addon2"
						/>
						<div className="input-group-append">
							<button
								onClick={() => this.add()}
								className="btn btn-outline-success"
								type="button"
								id="button-addon2">
								Add To Do
							</button>
						</div>
					</div>
				</div>
				<div className="container">
					{this.notes.map((e, i) => {
						return (
							<div key={i} className="input-group mb-3 w-50">
								<input
									type="text"
									className="form-control"
									placeholder="Recipient's username"
									aria-label="Recipient's username"
									aria-describedby="button-addon2"
									defaultValue={e}
								/>
								<div className="input-group-append">
									<button
										onClick={() => {
											this.notes.splice(i, 1);
											this.forceUpdate();
										}}
										className="btn btn-danger"
										type="button"
										id="button-addon2">
										Remove
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

// <div key={i}>
// 							<div className="response" type="button" key={i}>
// 								{e}
// 							</div>
// 							<input
// 								className="deleteNote"
// 								type="button"
// 								value="Delete"
// 								onClick={() => {
// 									this.notes.splice(i, 1);
// 									this.forceUpdate();
// 								}}
// 							/>
// 						</div>
