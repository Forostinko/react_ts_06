import './App.css';

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
//Rout for back arrow
import React, { useState } from 'react';

import About from '../About/About';
import BookDetails from '../BookList/BookDetails/Bookdetails';
import BooksList from '../BookList/BookList';
import NotFound from '../NotFound/NotFound';
import SearchBar from '../SearchBar/SearchBar';
import { ThemeContext } from '../../api/context/context';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

function App() {
 	const [search, setSearch] = useState('');

	//button state
	const [theme, setTheme] = useState('light');

	//theme toglle
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	}
  
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<Router>
				<div className="app">
					<SearchBar setSearch={setSearch} />
					<ThemeToggler />

					<Routes>
						<Route path="/" element={<BooksList search={search} />}></Route>
						<Route path="/book/:bookId" element={<BookDetails />}></Route>

						<Route path="/about" element={<About />} />

						<Route path="*" element={<Navigate to="/404" />} />
						<Route path="/404" element={<NotFound />} />
					</Routes>
				</div>
			</Router>
		</ThemeContext.Provider>
	);
}

export default App;