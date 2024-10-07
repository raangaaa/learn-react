import PropTypes from "prop-types";
import { memo } from "react";
import Search from "../../components/Search";
import { Link } from "react-router-dom";
import "./CountryView.scss";

const CountryView = ({ countries, search, dataSearch, property, order, limit }) => {
	return (
		<div className="container dark:bg-dark-2 bg-light-2 dark:text-light-text text-dark-text min-h-screen">
			<div className="country-filter">
				<h1 className="text-head">Filter</h1>
				<label className="form-control w-full">
					<div className="label">
						<span className="label-text">Limit:</span>
					</div>
					<input
						type="number"
						placeholder="Type here"
						className="input input-bordered w-full dark:bg-dark-2 bg-light dark:text-light-text text-dark-text"
						onChange={(i) => limit(i.target.value)}
					/>
				</label>
				<label className="form-control w-full">
					<div className="label">
						<span className="label-text">Sortby:</span>
					</div>
					<select
						className="select select-bordered w-full dark:bg-dark-2 bg-light dark:text-light-text text-dark-text"
						onChange={(i) => property(i.target.value)}
					>
						<option value="name" selected>
							Name
						</option>
						<option value="capital">Capital</option>
						<option value="currency">Currency</option>
						<option value="population">Population</option>
						<option value="density">Density</option>
						<option value="land_area">Land Area</option>
					</select>
				</label>
				<label className="form-control w-full">
					<div className="label">
						<span className="label-text">Orderby:</span>
					</div>
					<select
						className="select select-bordered w-full dark:bg-dark-2 bg-light dark:text-light-text text-dark-text"
						onChange={(i) => order(i.target.value)}
					>
						<option value="asc" selected>
							a-Z | 1-9
						</option>
						<option value="desc">Z-a | 9-1</option>
					</select>
				</label>
			</div>
			<div className="country-data">
				<h1 className="page-heading">Countries</h1>
				<Search search={search} />
				<div className="restaurant-info">
					{dataSearch ? <p>Found : {countries?.length}</p> : ""}
				</div>
				<div className="country-grid">
					{countries?.map((item) => (
						<div className="country-card" key={item.id}>
							<div className="country-image-wrapper">
								<img
									src={item.flag}
									alt={item.name}
									className="country-image"
								/>
							</div>
							<div className="country-body">
								<h2 className="country-title">{item.name}</h2>
								<p className="country-description">
									Currency: <span>{item.currency}</span>
								</p>
								<div className="country-actions">
									<Link
										to={"/countries/" + item.id}
										className="country-detail-link"
									>
										Detail
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

CountryView.propTypes = {
	countries: PropTypes.array,
	search: PropTypes.func.isRequired,
	dataSearch: PropTypes.string,
	property: PropTypes.func.isRequired,
	order: PropTypes.func.isRequired,
	limit: PropTypes.func.isRequired,
};

export default memo(CountryView);
