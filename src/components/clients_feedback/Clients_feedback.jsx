import React from "react";
import "./Clients_feedback.css";

function Clients_feedback() {
	return (
		<section className="clients">
			<div className="container">
				<div className="clients-content">
					<h1>What Clients Say</h1>
					<p className="clients_paragraph">
						Problems trying to resolve the conflict between the two major realms
						of Classical physics: Newtonian mechanics{" "}
					</p>
					<div className="feedback_cards">
						<div className="f-card">
							<img src="five-stars.svg" alt="" />
							<p>
								Product helps you see how many more days you need to work to
								reach your financial goal.
							</p>
							<div className="profile">
								<img src="client-1.png" width={50} height={50} alt="" />
								<div>
									<span>Wahid Ari</span>
									<p>Designer</p>
								</div>
							</div>
						</div>

            <div className="f-card">
							<img src="five-stars.svg" alt="" />
							<p>
								Product helps you see how many more days you need to work to
								reach your financial goal.
							</p>
							<div className="profile">
								<img src="client-2.png" width={50} height={50} alt="" />
								<div>
									<span>Wahid Ari</span>
									<p>Designer</p>
								</div>
							</div>
						</div>

            <div className="f-card">
							<img src="five-stars.svg" alt="" />
							<p>
								Product helps you see how many more days you need to work to
								reach your financial goal.
							</p>
							<div className="profile">
								<img src="client-3.png" width={50} height={50} alt="" />
								<div>
									<span>Wahid Ari</span>
									<p>Designer</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Clients_feedback;
