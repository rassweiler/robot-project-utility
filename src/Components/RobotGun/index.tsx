import React from 'react';
import { SpotObjectAlias } from '@rassweiler/kawasaki-as-parser/lib/interfaces';

export default function RobotGun(props: {
	robot: number;
	guns: SpotObjectAlias[];
}) {
	const { robot, guns } = props;
	return (
		<>
			{guns.map((gun, index) => {
				return (
					<div
						// eslint-disable-next-line react/no-array-index-key
						key={`Robot-${robot}-Gun-${index}-data`}
						className="sub-container"
					>
						<div className="container-sub-header">
							Robot {robot + 1} Gun {index + 1} Data
						</div>
						<div className="container-row row-header">
							<span className="container-col">Reweld</span>
							<span className="container-col">Leak</span>
							<span className="container-col">Controller</span>
							<span className="container-col">Gun</span>
							<span className="container-col">Turns</span>
						</div>
						<div className="container-row">
							<span
								className={
									gun.reweld ? 'container-col y' : 'container-col x'
								}
							>
								{gun.reweld ? 'On' : 'Off'}
							</span>
							<span
								className={
									gun.leakCheck ? 'container-col y' : 'container-col x'
								}
							>
								{gun.leakCheck ? 'On' : 'Off'}
							</span>
							<span className="container-col">{gun.welderType}</span>
							<span className="container-col">{gun.gunType}</span>
							<span className="container-col">{gun.turnsRatio}</span>
						</div>
						<div className="container-row row-header">
							<span className="container-col">Squeeze</span>
							<span className="container-col">Max Pressure</span>
							<span className="container-col">Gun Area</span>
						</div>
						<div className="container-row">
							<span className="container-col">{gun.squeeze}</span>
							<span className="container-col">{gun.maxPressure}</span>
							<span className="container-col">{gun.gunArea}</span>
						</div>
						<div className="container-row row-header">
							<span className="container-col">Clearance Mvbl</span>
							<span className="container-col">Clearance Fixed</span>
							<span className="container-col">Wear Mvbl</span>
							<span className="container-col">Wear Fixed</span>
						</div>
						<div className="container-row">
							<span className="container-col">
								{gun.tipMovableClearance}
							</span>
							<span className="container-col">
								{gun.tipFixedClearance}
							</span>
							<span className="container-col">
								{gun.tipMovableWearLimit}
							</span>
							<span className="container-col">
								{gun.tipFixedwearLimit}
							</span>
						</div>
						<div className="container-row row-header">
							<span className="container-col">
								Linear Up:{' '}
								<span className={gun.linearUp.enabled ? 'y' : 'x'}>
									{gun.linearUp.enabled ? '  On' : ' Off'}
								</span>
							</span>
						</div>
						<div className="container-row row-header">
							<span className="container-col"> </span>
							<span className="container-col">0</span>
							<span className="container-col">1</span>
							<span className="container-col">2</span>
							<span className="container-col">3</span>
							<span className="container-col">4</span>
							<span className="container-col">5</span>
							<span className="container-col">6</span>
							<span className="container-col">7</span>
							<span className="container-col">8</span>
							<span className="container-col">9</span>
						</div>
						<div className="container-row">
							<span className="container-col">I1 %</span>
							{gun.linearUp.values.map((val, i) => {
								const key = `onepercent-${i}`;
								// eslint-disable-next-line react/no-array-index-key
								return (
									<span key={key} className="container-col">
										{val.onePercentSetting}
									</span>
								);
							})}
						</div>
						<div className="container-row">
							<span className="container-col">Value</span>
							{gun.linearUp.values.map((val, i) => {
								const key = `onepercent-${i}-value`;
								// eslint-disable-next-line react/no-array-index-key
								return (
									<span key={key} className="container-col">
										{val.onePercentValue}
									</span>
								);
							})}
						</div>
						<div className="container-row">
							<span className="container-col">I2 %</span>
							{gun.linearUp.values.map((val, i) => {
								const key = `onepercent-${i}`;
								// eslint-disable-next-line react/no-array-index-key
								return (
									<span key={key} className="container-col">
										{val.twoPercentSetting}
									</span>
								);
							})}
						</div>
						<div className="container-row">
							<span className="container-col">Value</span>
							{gun.linearUp.values.map((val, i) => {
								const key = `onepercent-${i}`;
								// eslint-disable-next-line react/no-array-index-key
								return (
									<span key={key} className="container-col">
										{val.twoPercentValue}
									</span>
								);
							})}
						</div>
						<div className="container-row row-header">
							<span className="container-col">
								Former Linear Up:{' '}
								<span
									className={gun.formerLinearUp.enabled ? 'y' : 'x'}
								>
									{gun.formerLinearUp.enabled ? '  On' : ' Off'}
								</span>
							</span>
						</div>
						<div className="container-row row-header">
							<span className="container-col"> </span>
							<span className="container-col">0</span>
							<span className="container-col">1</span>
							<span className="container-col">2</span>
							<span className="container-col">3</span>
							<span className="container-col">4</span>
							<span className="container-col">5</span>
							<span className="container-col">6</span>
							<span className="container-col">7</span>
							<span className="container-col">8</span>
							<span className="container-col">9</span>
						</div>
						<div className="container-row">
							<span className="container-col">I1 %</span>
							{gun.formerLinearUp.values.map((val, i) => {
								const key = `onepercent-${i}`;
								// eslint-disable-next-line react/no-array-index-key
								return (
									<span key={key} className="container-col">
										{val.onePercentSetting}
									</span>
								);
							})}
						</div>
						<div className="container-row">
							<span className="container-col">Value</span>
							{gun.formerLinearUp.values.map((val, i) => {
								const key = `onepercent-${i}-value`;
								// eslint-disable-next-line react/no-array-index-key
								return (
									<span key={key} className="container-col">
										{val.onePercentValue}
									</span>
								);
							})}
						</div>
						<div className="container-row">
							<span className="container-col">I2 %</span>
							{gun.formerLinearUp.values.map((val, i) => {
								const key = `onepercent-${i}`;
								// eslint-disable-next-line react/no-array-index-key
								return (
									<span key={key} className="container-col">
										{val.twoPercentSetting}
									</span>
								);
							})}
						</div>
						<div className="container-row">
							<span className="container-col">Value</span>
							{gun.formerLinearUp.values.map((val, i) => {
								const key = `onepercent-${i}`;
								// eslint-disable-next-line react/no-array-index-key
								return (
									<span key={key} className="container-col">
										{val.twoPercentValue}
									</span>
								);
							})}
						</div>
					</div>
				);
			})}
		</>
	);
}
