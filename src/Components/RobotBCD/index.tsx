import React from 'react';
import { BCDObjectAlias } from '@rassweiler/kawasaki-as-parser/lib/interfaces';

export default function RobotBCD(props: { bcds: BCDObjectAlias[] }) {
	const { bcds } = props;
	return (
		<div className="sub-container">
			<div className="container-sub-header">BCD Data</div>
			<div className="container-row row-header">
				<span className="container-col">BCD</span>
				<span className="container-col">Program</span>
			</div>
			{bcds.map((bcd, index) => {
				return (
					// eslint-disable-next-line react/no-array-index-key
					<div key={`bcd-${index}`} className="container-row">
						<span className="container-col">{bcd.bcd}</span>
						<span className="container-col">{bcd.program}</span>
					</div>
				);
			})}
		</div>
	);
}
