
import {IoIosArrowRoundForward} from 'react-icons/io'
import { useInView } from 'react-intersection-observer';

const Section = ({item}) => {

	const {title, para, image, link} = item

	const { ref :containerRef, inView :conatinerIntersecting } = useInView({
		root: null,
		rootMargin: '0px 0px 40px 0px',
		threshold: 0
	});

	return (
		<div ref={containerRef} className={`single-section ${conatinerIntersecting ? 'animation' : ''}`}>
			<div className="single-inner-big">
				<div className="left">
					<h2>{title}</h2>
					<p>{para}</p>
					<span>{link} <IoIosArrowRoundForward /> </span>
				</div>
				<div className="right">
					<img src={image}alt={title} />
				</div>
			</div>
			<div className="single-inner-small">
				<h2>{title}</h2>
				<img src={image} alt={title} />
				<p>{para}</p>
				<span>{link} <IoIosArrowRoundForward /></span>
			</div>
		</div>
	)
}

export default Section