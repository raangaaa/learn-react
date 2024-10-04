import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailCountry = () => {
	const [country, setCountry] = useState({});

	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://freetestapi.com/api/v1/countries/${id}`
				);
				setCountry(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [id]);
	return (
		<div>
			<div className="hero bg-base-200 min-h-screen flex flex-col justify-center">
				<div className="hero-content flex-col lg:flex-row space-x-3">
					<img
						src={country?.flag}
						alt={country?.name}
						className="max-w-xs rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-4xl font-bold mt-6">{country?.name}</h1>
						<p className="text-lg font-normal">
							Capital: <span className="font-bold">{country?.capital}</span>
						</p>
						<p className="text-lg font-normal">
							Currency:{" "}
							<span className="font-bold">
								{country?.currency?.toLocaleString()}
							</span>
						</p>
						<p className="py-6">
							<span className="font-medium">
								Population: {country?.population?.toLocaleString()}
							</span>
							<br />
							<span className="font-medium">
								Density: {country?.density?.toLocaleString()}
							</span>
							<br />
							<span className="font-medium">
								Land Area: {country?.land_area?.toLocaleString()}
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailCountry;
