import axios from "axios";
import { memo, useCallback, useEffect, useReducer } from "react";
import ProductView from "./ProductView";
import { useSearchParams } from "react-router-dom";


const initialState = {
	products: [],
	filteredProducts: [],
	error: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				...state,
				products: action.payload,
				filteredProducts: action.payload,
			};
		case "FETCH_ERROR":
			return {
				...state,
				error: action.payload,
			};
		case "SET_FILTER_DATA":
			return {
				...state,
				filteredProducts: action.payload,
			};
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

const Product = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const [searchParams, setSearchParams] = useSearchParams();
	const q = searchParams.get("q");
	const search = (input) => {
		setSearchParams({ q: input });
	};

	const fetchData = async () => {
		try {
			const response = await axios.get("https://fakestoreapi.com/products");
			dispatch({ type: "FETCH_SUCCESS", payload: response.data });
			dispatch({ type: "SET_FILTER_DATA", payload: response.data });
		} catch (error) {
			dispatch({ type: "FETCH_ERROR", payload: error.message });
			console.error("Error fetching data:", error);
		}
	};

	const filterData = useCallback(() => {
		if (q) {
			const filteredProduct = state.products.filter((item) =>
				item.title.toLowerCase().includes(q.toLowerCase())
			);

			dispatch({ type: "SET_FILTER_DATA", payload: filteredProduct });
		} else {
			dispatch({ type: "SET_FILTER_DATA", payload: state.products });
		}
	}, [state.products, q]);

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		filterData();
	}, [filterData, q]);

	return <ProductView products={state.filteredProducts} search={search} error={state.error} />;
};

export default memo(Product);
