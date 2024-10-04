import axios from "axios";
import { useCallback, useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import CountryView from "./CountryView";

const initialState = {
	countries: [],
	filteredCountries: [],
	error: null,
	property: "name",
	order: "asc",
	limit: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				...state,
				countries: action.payload,
			};
		case "FETCH_ERROR":
			return {
				...state,
				error: action.payload,
			};
		case "SET_FILTER_DATA":
			return {
				...state,
				filteredCountries: action.payload,
			};
		case "SET_PROPERTY":
			return {
				...state,
				property: action.payload,
			};
		case "SET_ORDER":
			return {
				...state,
				order: action.payload,
			};
		case "SET_LIMIT":
			return {
				...state,
				limit: action.payload,
			};
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

const Country = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const [searchParams, setSearchParams] = useSearchParams();
	const search = searchParams.get("search");
	const inputSearch = (i) => setSearchParams({ search: i });

	const setProperty = (i) => {
		dispatch({ type: "SET_PROPERTY", payload: i });
		filterCountries(i, state.order, state.limit);
	};
	const setOrder = (i) => {
		dispatch({ type: "SET_ORDER", payload: i });
		filterCountries(state.property, i, state.limit);
	};
	const setLimit = (i) => {
		if (i > 0) {
			dispatch({ type: "SET_LIMIT", payload: i });
			filterCountries(state.property, state.order, i);
		} else {
			dispatch({ type: "SET_LIMIT", payload: null });
			filterCountries(state.property, state.order, null);
		}
	};

	const fetchData = async () => {
		try {
			const response = await axios.get(
				"https://freetestapi.com/api/v1/countries"
			);
			dispatch({ type: "FETCH_SUCCESS", payload: response.data });
			dispatch({ type: "SET_FILTER_DATA", payload: response.data });
		} catch (error) {
			dispatch({ type: "FETCH_ERROR", payload: error.message });
			console.error("Error fetching data:", error);
		}
	};

	const searchCountries = useCallback(async () => {
		try {
			const response = await axios.get(
				`https://freetestapi.com/api/v1/countries?search=${search ?? ""}`
			);
			dispatch({ type: "FETCH_SUCCESS", payload: response.data });
			dispatch({ type: "SET_FILTER_DATA", payload: response.data });
		} catch (error) {
			dispatch({ type: "FETCH_ERROR", payload: error.message });
			console.error("Error fetching data:", error);
		}
	}, [search]);

	const filterCountries = useCallback(
		(property, order, limit) => {
			let data = [];
			if (order == "asc") {
				data = state.countries.sort((a, b) => {
					if (typeof a[property] === "string") {
						return a[property].localeCompare(b[property]);
					}
					return a[property] - b[property];
				});

				if (limit !== null) {
					data = data.slice(0, limit);
				}
			} else {
				data = state.countries.sort((a, b) => {
					if (typeof a[property] === "string") {
						return b[property].localeCompare(a[property]);
					}
					return b[property] - a[property];
				});

				if (limit !== null) {
					data = data.slice(0, limit);
				}
			}

			dispatch({ type: "SET_FILTER_DATA", payload: data });
		},
		[state.countries]
	);

	useEffect(() => {
		!search ? fetchData() : searchCountries();
	}, [searchCountries, search]);

	return (
		<CountryView
			countries={state.filteredCountries}
			search={inputSearch}
			dataSearch={search}
			property={setProperty}
			order={setOrder}
			limit={setLimit}
		/>
	);
};

export default Country;
