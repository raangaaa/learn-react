import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Grid = () => {
	const [resto, setResto] = useState({ restaurants: [] });

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://restaurant-api.dicoding.dev/list"
				);
				setResto(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-max bg-black">
				{resto?.restaurants?.map((item) => (
					<div key={item.id} className="relative overflow-hidden group">
						<Link to={"/restaurant/" + item.id}>
							<img
								src={`https://restaurant-api.dicoding.dev/images/small/${item.pictureId}`}
								alt={item.name}
								className="transform transition-transform duration-300 ease-in-out hover:scale-110 w-full h-full cursor-pointer"
							/>
							<div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
								<h3 className="font-semibold">{item.name}</h3>
								<p>{item.city}</p>
								<p>Rating: {item.rating}</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Grid;
