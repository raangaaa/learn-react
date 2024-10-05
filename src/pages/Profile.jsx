const Profile = () => {
	return (
		<div>
			<div className="hero dark:bg-dark-2 bg-light-2 dark:text-light-text text-dark-text min-h-screen">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">Box Office News!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button className="btn bg-blue-600 border-none text-white hover:bg-blue-700">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

//

export default Profile;
