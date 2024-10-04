import PropTypes from "prop-types";
import { memo } from "react";
import { Link } from "react-router-dom";
import "./ProductView.scss"; // Import file SASS
import Search from "../../components/Search";
import Alert from "../../components/Alert";

const ProductView = ({ products, search, error }) => {
	if (error) {
		return (
			<div className="product-error">
				<h1 className="text-center font-bold text-3xl">Restaurants</h1>
				<Search search={search} />
				<Alert error={error} />
			</div>
		);
	}

	return (
		<>
			<h1 className="page-heading">Products</h1>
			<Search search={search} />
			<div className="product-grid">
				{products?.map((item) => (
					<div className="product-card bg-base-100" key={item.id}>
						<div className="product-image-wrapper">
							<img
								src={item.image}
								alt={item.title}
								className="product-image"
							/>
						</div>
						<div className="product-body">
							<h2 className="product-title">{item.title}</h2>
							<p className="product-description">{item.description}</p>
							<div className="product-actions">
								<Link
									to={"/products/" + item.id}
									className="product-detail-link"
								>
									Detail
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

ProductView.propTypes = {
	products: PropTypes.array,
	search: PropTypes.func.isRequired,
	error: PropTypes.string,
};

export default memo(ProductView);
