import React from 'react';
import { SwitchAlias } from '@rassweiler/kawasaki-as-parser/lib/interfaces';

export default function RobotSwitch(props: {
	robot: number;
	switches: SwitchAlias[];
}) {
	const { robot, switches } = props;
	return (
		<div className="sub-container">
			<div className="container-sub-header">Robot {robot + 1} Switches</div>
			<div className="container-row switch">
				{switches.map((s, index) => {
					return (
						// eslint-disable-next-line react/no-array-index-key
						<span key={s.switch + index} className="switch-container">
							<span className="switch-name">{s.switch}: </span>
							<span
								className={
									s.value ? 'switch-value y' : 'switch-value x'
								}
							>
								{s.value ? 'On' : 'Off'}
							</span>
						</span>
					);
				})}
			</div>
		</div>
	);
}
