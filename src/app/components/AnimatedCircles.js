import React from "react";

const AnimatedCircles = () => {
	return (
		<svg
			viewBox="0 0 128 128"
			height="128"
			width="128"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g
				transform="translate(-295.96 229.86)"
				opacity="1"
				fill="none"
				stroke="#ffc700"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="1000"
				strokeDasharray="none"
				strokeOpacity="1"
			>
				{[64, 63.5, 63, 62.5, 62, 61.5].map((radius, index) => (
					<circle
						key={index}
						cx="359.961"
						cy="-165.86"
						r={radius}
						strokeWidth={(1 - index * 0.008).toFixed(3)}
						transform={
							[
								"matrix(-0.76311,-0.64626,0.64626,-0.76311,741.83952,-59.80103)",
								"matrix(0.11511,0.99335,-0.99335,0.11511,153.76886,-504.33511)",
								"matrix(0.78613,-0.61807,0.61807,0.78613,179.49795,187.00862)",
								"matrix(0.90591,-0.42347,0.42347,0.90591,104.10546,136.82692)",
								"matrix(0.37124,-0.92854,0.92854,0.37124,380.33672,229.95205)",
								"matrix(0.99992,-0.01259,0.01259,0.99992,2.11697,4.51864)",
							][index]
						}
					/>
				))}
			</g>
		</svg>
	);
};

export default AnimatedCircles;
