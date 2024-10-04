import { BrowserRouter, Route, Routes } from "react-router-dom";

import ThemeContext from "./contexts/ThemeContext"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

import RestaurantPage from "./pages/RestaurantPage";
import DetailRestaurant from "./pages/restaurant/DetailRestaurant";
import ProductPage from "./pages/ProductPage";
import DetailProduct from "./pages/product/DetailProduct";
import CountryPage from "./pages/CountryPage";
import DetailCountry from "./pages/country/DetailCountry";

import Error404 from "./pages/errors/Error404";
import { useState } from "react";

const App = () => {
	const theme = useState("light");

	return (
		<BrowserRouter>
			<ThemeContext.Provider value={theme}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/restaurants" element={<RestaurantPage />} />
					<Route path="/restaurants/:id" element={<DetailRestaurant />} />
					<Route path="/products" element={<ProductPage />} />
					<Route path="/products/:id" element={<DetailProduct />} />
					<Route path="/countries" element={<CountryPage />} />
					<Route path="/countries/:id" element={<DetailCountry />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
				<Footer />
			</ThemeContext.Provider>
		</BrowserRouter>
	);
};

export default App;
