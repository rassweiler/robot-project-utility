import React from 'react';
import './style.global.css';

export default function RobotVSF(props: {
	vsf: {
		link: [];
		area: Record<string, unknown>;
		sphere: [];
		box: [];
		soft: [];
	};
}) {
	const { vsf } = props;
	return (
		<>
			<div className="container-robot-data">
				<div className="container-sub-header">Link Data</div>
				{vsf.link.map((l) => {
					return (
						<>
							<span>{l.radius}</span>
							<span>{l.joint}</span>
							<span>{l.x1}</span>
							<span>{l.y1}</span>
							<span>{l.z1}</span>
						</>
					);
				})}
			</div>
			<div className="container-robot-data">
				<div className="container-sub-header">Area Data</div>
			</div>
			<div className="container-robot-data">
				<div className="container-sub-header">Sphere Data</div>
			</div>
			<div className="container-robot-data">
				<div className="container-sub-header">Box Data</div>
			</div>
			<div className="container-robot-data">
				<div className="container-sub-header">Softlimit Data</div>
			</div>
		</>
	);
}
