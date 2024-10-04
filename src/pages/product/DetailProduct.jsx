import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
	const [singleProduct, setSingleProduct] = useState({});

	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://fakestoreapi.com/products/${id}`
				);
				setSingleProduct(response.data);
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
						src={singleProduct?.image}
						alt={singleProduct?.title}
						className="max-w-xs rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">{singleProduct?.title}!</h1>
						<p className="text-3xl font-semibold">{singleProduct?.category}!</p>
						<p className="py-6">{singleProduct?.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailProduct;
