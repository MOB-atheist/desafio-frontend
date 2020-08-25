import React from 'react';
import './app.css'
import Search from './modules/Search';
import WeatherWidget from './modules/WeatherWidget';
import WeatherList from './modules/WeatherList';
function App() {
	return (
		<div className="container">
			<h1 className="container-title" >
				Previsão do tempo
			</h1>
			<Search />
			<WeatherWidget />
			<WeatherList />
		</div>
	);
}

export default App;
