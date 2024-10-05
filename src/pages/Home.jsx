const Home = () => {
	return (
		<div className="relative">
			<div
				className="hero min-h-screen dark:text-light-text text-dark-text"
				style={{
					backgroundImage:
						"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
						<p className="mb-5">
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

			<div className="hero dark:bg-dark-2 bg-light-2 dark:text-light-text text-dark-text min-h-screen">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
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

export default Home;
