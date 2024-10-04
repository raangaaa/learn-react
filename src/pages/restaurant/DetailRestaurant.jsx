import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailRestaurant = () => {
	const [selectedResto, setSelectedResto] = useState(null);

	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://restaurant-api.dicoding.dev/detail/${id}`
				);
				setSelectedResto(response.data.restaurant);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [id]);

	return (
		<div>
			<div className="hero bg-base-200 min-h-screen flex flex-col">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src={`https://restaurant-api.dicoding.dev/images/small/${selectedResto?.pictureId}`}
						alt={selectedResto?.name}
						className="max-w-xl rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">{selectedResto?.name}!</h1>
						<p className="py-6">{selectedResto?.description}</p>
					</div>
				</div>

				<div className="w-4/5 grid grid-cols-2">
					<div>
						<p>
							<strong>Alamat:</strong> {selectedResto?.address}
						</p>
						<p>
							<strong>Kota:</strong> {selectedResto?.city}
						</p>
						<p>
							<strong>Rating:</strong> {selectedResto?.rating}
						</p>
						<div className="mt-4">
							<h3 className="text-lg font-semibold mb-2">Category</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<ul className="list-disc list-inside">
									{selectedResto?.categories.map((category, index) => (
										<li key={index}>{category.name}</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					{/* List Menu */}
					<div>
						<h3 className="text-xl font-semibold mb-2">Menu</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{/* List makanan */}
							<div>
								<h4 className="font-semibold">Makanan</h4>
								<ul className="list-disc list-inside">
									{selectedResto?.menus.foods.map((food, index) => (
										<li key={index}>{food.name}</li>
									))}
								</ul>
							</div>
							{/* List minuman */}
							<div>
								<h4 className="font-semibold">Minuman</h4>
								<ul className="list-disc list-inside">
									{selectedResto?.menus.drinks.map((drink, index) => (
										<li key={index}>{drink.name}</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailRestaurant;
