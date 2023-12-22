import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Clients_feedback from "./components/clients_feedback/Clients_feedback";
import Client_strategy from "./components/content_strategy/Content_strategy";
import Price_table from "./components/price_table/Price_table";
import Footer from "./components/footer/Footer"



function App() {
	return (
		<div>
			<Header/>
			<Hero/>
			<About/>
			<Client_strategy/>
			<Price_table/>
			<Clients_feedback/>
			<Footer/>
		</div>
	);
}

export default App;




