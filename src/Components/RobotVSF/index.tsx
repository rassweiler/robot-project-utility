import React from 'react';
import './style.global.css';
import { VSFObjectAlias } from '../../alias';

export default function RobotVSF(props: { vsf: VSFObjectAlias }) {
	const { vsf } = props;
	return (
		<>
			<div className="container-robot-data">
				<div className="container-sub-header">Link Data</div>
				{vsf.linkData.map((l) => {
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
