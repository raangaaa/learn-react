import axios from "axios";
import { memo, useCallback, useEffect, useState } from "react";
import RestaurantView from "./RestaurantView";
import { useSearchParams } from "react-router-dom";

const Restaurant = () => {
	const [resto, setResto] = useState({});
	const [error, setError] = useState();

	const [searchParams, setSearchParams] = useSearchParams();
	const q = searchParams.get("q");
	const search = (input) => setSearchParams({ q: input });

	const fetchData = async () => {
		try {
			const response = await axios.get(
				"https://restaurant-api.dicoding.dev/list"
			);
			setResto(response.data);
		} catch (error) {
			setError(error);
			console.error("Error fetching data:", error);
		}
	};

	const searchResto = useCallback(async () => {
		try {
			const response = await axios.get(
				`https://restaurant-api.dicoding.dev/search?q=${q}`
			);
			setResto(response.data);
		} catch (error) {
			setError(error);
			console.error("Error fetching data:", error);
		}
	}, [q]);

	useEffect(() => {
		!q ? fetchData() : searchResto();
	}, [q, searchResto]);

	return (
		<div>
			<RestaurantView resto={resto} error={error} search={search} query={q} />
		</div>
	);
};

export default memo(Restaurant);
