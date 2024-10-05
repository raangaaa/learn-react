import PropTypes from "prop-types";
import { memo } from "react";

const Search = ({ search }) => {
	return (
		<>
			<div className="w-full h-max my-5 p-3 space-y-4 flex flex-col items-center">
				<form className="w-1/2">
					<label className="input input-bordered flex items-center gap-2 dark:bg-dark-2 bg-light dark:text-light-text text-dark-text">
						<input
							type="text"
							name="q"
							className="grow"
							placeholder="Search"
							onChange={(input) => {
								search(input.target.value);
							}}
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="h-4 w-4 opacity-70"
						>
							<path
								fillRule="evenodd"
								d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
								clipRule="evenodd"
							/>
						</svg>
					</label>
				</form>
			</div>
		</>
	);
};

Search.propTypes = {
    search: PropTypes.func.isRequired
}

export default memo(Search);
