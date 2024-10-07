import axios from "axios";
import { memo, useCallback, useEffect, useState } from "react";
import RestaurantView from "./RestaurantView";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addResto } from "../../stores/actions/restaurantAction";

const Restaurant = () => {
	const resto = useSelector((state) => state.resto.resto);
	const [error, setError] = useState();
	const dispatch = useDispatch()

	const [searchParams, setSearchParams] = useSearchParams();
	const q = searchParams.get("q");
	const search = (input) => setSearchParams({ q: input });

	const fetchData = async () => {
		try {
			const response = await axios.get(
				"https://restaurant-api.dicoding.dev/list"
			);
			return response.data.restaurants;
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
			return response.data.restaurants;
		} catch (error) {
			setError(error);
			console.error("Error fetching data:", error);
		}
	}, [q]);

	useEffect(() => {
		const getData = async (fetchData) => {
			const data = await fetchData();
			dispatch(addResto(data));
		};

		!q ? getData(fetchData) : getData(searchResto);
	}, [dispatch, q, searchResto]);

	return (
		<div>
			<RestaurantView resto={resto} error={error} search={search} query={q} />
		</div>
	);
};

export default memo(Restaurant);
