import { memo } from "react";
import { Link } from "react-router-dom";
import Alert from "../../components/Alert";
import PropTypes from "prop-types";
import Search from "../../components/Search";
import "./RestaurantView.scss"; // Import file SASS

const RestaurantView = ({ resto, error, search, query }) => {

	if (error) {
		return (
			<div className="restaurant-error">
				<h1 className="page-heading">Restaurants</h1>
				<Search search={search} />
				<Alert error={error} />
			</div>
		);
	}

	return (
		<div className="dark:bg-slate-600">
			<h1 className="page-heading">Restaurants</h1>
			<Search search={search} />
			<div className="restaurant-info">
				{query ? <p>Found : {resto?.founded}</p> : ""}
			</div>
			<div className="restaurant-grid">
				{resto?.restaurants?.map((item) => (
					<div className="restaurant-card bg-base-100" key={item.id}>
						<div className="restaurant-image-wrapper">
							<img
								src={`https://restaurant-api.dicoding.dev/images/small/${item.pictureId}`}
								alt={item.name}
								className="restaurant-image"
							/>
						</div>
						<div className="restaurant-body">
							<h2 className="restaurant-title">{item.name}</h2>
							<p className="restaurant-description">{item.description}</p>
							<div className="restaurant-actions">
								<Link
									to={"/restaurants/" + item.id}
									className="restaurant-detail-link"
								>
									Detail
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

RestaurantView.propTypes = {
	resto: PropTypes.object.isRequired,
	error: PropTypes.string,
	search: PropTypes.func.isRequired,
	query: PropTypes.string,
};

export default memo(RestaurantView);
