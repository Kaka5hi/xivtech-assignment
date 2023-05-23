import Section from "./components/Section";

function App() {

	const data = [
		{
			title: `AI + RPA is what we do`,
			para: `Future-Proof your business. Drive efficiency, profitability and deliver on customer experience`,
			link: `AI + RPA Automation`,
			image: `/images/one.jpg`
		},
		{
			title: `Make Bolder Choices`,
			para: `Digital focused strategies to realize market-changing ideas`,
			link: `Build Better Apps`,
			image: `/images/two.png`
		},
		{
			title: `Innovate with Speed`,
			para: `Create higher quality software, deliver on customer expectations and business goals`,
			link: `DevOps`,
			image: `/images/three.jpg`
		},
		{
			title: `Embrace Cloud`,
			para: `With Cloud-First accelerate innovation and optimize performance`,
			link: `Cloud Services`,
			image: `/images/four.jpg`
		}
	]

	return (
		<div className="main-container">
			<h1>Let's Collaborate</h1>
			<div className="inner-container">
				{
					data?.map((item, index) => {
						return (
							<Section key={index} item={item} />
						)
					})
				}

			</div>
		</div>
	);
}

export default App;
