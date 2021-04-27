import React from 'react';
import { MHTableObjectAlias } from '@rassweiler/kawasaki-as-parser/lib/interfaces';

export default function RobotMH(props: {
	robot: number;
	ncs: MHTableObjectAlias[];
}) {
	const { robot, ncs } = props;
	if (ncs.length > 0) {
		return (
			<>
				<div className="sub-container">
					<div className="container-sub-header">Robot {robot} NC Data</div>
					<div className="container-row row-header">
						<span className="container-col">Index</span>
						{ncs[0].axisData.map((axis, index) => {
							return (
								<span
									// eslint-disable-next-line react/no-array-index-key
									key={`Robot-${robot}-NC-${index}-axisdataheader-${index}`}
									className="container-col"
								>
									Axis {index + 8}
								</span>
							);
						})}
						<span className="container-col">Comment</span>
					</div>
					{ncs.map((nc, index) => {
						return (
							<div
								// eslint-disable-next-line react/no-array-index-key
								key={`Robot-${robot}-NC-${index}-data`}
								className="container-row"
							>
								<span className="container-col">{nc.tableIndex}</span>
								{nc.axisData.map((axis, i) => {
									return (
										<span
											// eslint-disable-next-line react/no-array-index-key
											key={`Robot-${robot}-NC-${index}-data-${i}`}
											className="container-col"
										>
											{axis}
										</span>
									);
								})}
								<span className="container-col">{nc.comment}</span>
							</div>
						);
					})}
				</div>
			</>
		);
	}
	return <></>;
}
