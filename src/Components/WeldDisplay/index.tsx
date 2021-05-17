import React from 'react';
import {
	ClampObjectAlias,
	WeldObjectAlias,
} from '@rassweiler/kawasaki-as-parser/lib/interfaces';

export default function WeldDisplay(props: {
	clamp: ClampObjectAlias;
	weld: WeldObjectAlias;
}) {
	const { clamp, weld } = props;
	if (clamp && (clamp.clamp1 || clamp.clamp2)) {
		return (
			<div // eslint-disable-next-line react/no-array-index-key
				className="weld"
			>
				<div className="container-row row-header-weld">
					<span className="container-col">Clamp 1</span>
					<span className="container-col">Clamp 2</span>
					{clamp.instruction1 === 'W' ? (
						<>
							<span className="container-col">Current Mod</span>
							<span className="container-col">Tip Mod</span>
							<span className="container-col">Weld Mod</span>
						</>
					) : null}
				</div>
				<div className="container-row">
					<span className="container-col-weld weld-item">
						{clamp.clamp1 ? (
							<>
								1{clamp.instruction1}
								{clamp.gunNumber1}
							</>
						) : null}
					</span>
					<span className="container-col-weld weld-item">
						{clamp.clamp2 ? (
							<>
								2{clamp.instruction2}
								{clamp.gunNumber2}
							</>
						) : null}
					</span>
					{clamp.instruction1 === 'W' ? (
						<>
							<span className="container-col-weld weld-item">
								<span className={weld.autoCurMod ? 'y' : 'x'}>
									{weld.autoCurMod ? 'On' : 'Off'}
								</span>
							</span>
							<span className="container-col-weld weld-item">
								<span className={weld.autoTipMod ? 'y' : 'x'}>
									{weld.autoTipMod ? 'On' : 'Off'}
								</span>
							</span>
							<span className="container-col-weld weld-item">
								<span className={weld.autoWeldMod ? 'y' : 'x'}>
									{weld.autoWeldMod ? 'On' : 'Off'}
								</span>
							</span>
						</>
					) : null}
				</div>
				{clamp.instruction1 === 'W' ? (
					<>
						<div className="container-row row-header-weld">
							<span className="container-col">Mode1</span>
							<span className="container-col">Mode2</span>
							<span className="container-col">Type1</span>
							<span className="container-col">Type2</span>
							<span className="container-col">Sealer</span>
							<span className="container-col">BackBar</span>
							<span className="container-col">GunType</span>
						</div>
						<div className="container-row">
							<span className="container-col-weld weld-item">
								{weld.weldMode1}
							</span>
							<span className="container-col-weld weld-item">
								{weld.weldMode2}
							</span>
							<span className="container-col-weld weld-item">
								{weld.weldType1}
							</span>
							<span className="container-col-weld weld-item">
								{weld.weldType2}
							</span>
							<span
								className={
									weld.sealer
										? 'container-col-weld weld-item y'
										: 'container-col-weld weld-item x'
								}
							>
								{weld.sealer ? 'On' : 'Off'}
							</span>
							<span
								className={
									weld.backbar
										? 'container-col-weld weld-item y'
										: 'container-col-weld weld-item x'
								}
							>
								{weld.backbar ? 'On' : 'Off'}
							</span>
							<span
								className={
									weld.gunType
										? 'container-col-weld weld-item y'
										: 'container-col-weld weld-item x'
								}
							>
								{weld.gunType ? 'On' : 'Off'}
							</span>
						</div>
						<div className="container-row row-header-weld">
							<span className="container-col">M1</span>
							<span className="container-col">T1</span>
							<span className="container-col">M2</span>
							<span className="container-col">T2</span>
							<span className="container-col">M3</span>
							<span className="container-col">T3</span>
							<span className="container-col">M4</span>
							<span className="container-col">T4</span>
						</div>
						<div className="container-row">
							<span className="container-col-weld weld-item">
								{weld.mat1}
							</span>
							<span className="container-col-weld weld-item">
								{weld.thick1}
							</span>
							<span className="container-col-weld weld-item">
								{weld.mat2}
							</span>
							<span className="container-col-weld weld-item">
								{weld.thick2}
							</span>
							<span className="container-col-weld weld-item">
								{weld.mat3}
							</span>
							<span className="container-col-weld weld-item">
								{weld.thick3}
							</span>
							<span className="container-col-weld weld-item">
								{weld.mat4}
							</span>
							<span className="container-col-weld weld-item">
								{weld.thick4}
							</span>
						</div>
						<div className="container-row row-header-weld">
							<span className="container-col">Current 1</span>
							<span className="container-col">Weld Time 1</span>
							<span className="container-col">Current 2</span>
							<span className="container-col">Weld Time 2</span>
						</div>
						<div className="container-row">
							<span className="container-col-weld weld-item">
								{weld.current1}
							</span>
							<span className="container-col-weld weld-item">
								{weld.weldTime1}
							</span>
							<span className="container-col-weld weld-item">
								{weld.current2}
							</span>
							<span className="container-col-weld weld-item">
								{weld.weldTime2}
							</span>
						</div>
						<div className="container-row row-header-weld">
							<span className="container-col">Tip Force</span>
							<span className="container-col">Squeeze Time</span>
							<span className="container-col">Hold Time</span>
							<span className="container-col">Cool Time</span>
							<span className="container-col">Level</span>
							<span className="container-col">Pulsation</span>
						</div>
						<div className="container-row">
							<span className="container-col-weld weld-item">
								{weld.tipForce}
							</span>
							<span className="container-col-weld weld-item">
								{weld.squeezeTime}
							</span>
							<span className="container-col-weld weld-item">
								{weld.holdTime}
							</span>
							<span className="container-col-weld weld-item">
								{weld.coolTime}
							</span>
							<span className="container-col-weld weld-item">
								{weld.level}
							</span>
							<span className="container-col-weld weld-item">
								{weld.pulsation}
							</span>
						</div>
					</>
				) : null}
			</div>
		);
	}
	return (
		<div // eslint-disable-next-line react/no-array-index-key
			className="container-row welds weld"
		>
			.
		</div>
	);
}
