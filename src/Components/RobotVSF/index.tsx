import React from 'react';
import {
	VSFObjectAlias,
	InstallPositionAlias,
} from '@rassweiler/kawasaki-as-parser/lib/interfaces';

export default function RobotVSF(props: {
	robot: number;
	vsf: VSFObjectAlias;
	install: InstallPositionAlias;
}) {
	const { robot, vsf, install } = props;
	return (
		<>
			<div className="sub-container">
				<div className="container-sub-header">
					Robot {robot} Install Position
				</div>
				<div className="container-row row-header">
					<span className="container-col x">X</span>
					<span className="container-col y">Y</span>
					<span className="container-col z">Z</span>
					<span className="container-col">RX</span>
					<span className="container-col">RY</span>
					<span className="container-col">RZ</span>
				</div>
				<div className="container-row">
					<span className="container-col">{install.x}</span>
					<span className="container-col">{install.y}</span>
					<span className="container-col">{install.z}</span>
					<span className="container-col">{install.rx}</span>
					<span className="container-col">{install.ry}</span>
					<span className="container-col">{install.rz}</span>
				</div>
			</div>
			<div className="sub-container">
				<div className="container-sub-header">Robot {robot} Link Data</div>
				<div className="container-row row-header">
					<span className="container-col">Joint</span>
					<span className="container-col">Radius</span>
					<span className="container-col">X1</span>
					<span className="container-col">Y1</span>
					<span className="container-col">Z1</span>
				</div>
				{vsf.linkData.map((l, index) => {
					return (
						<div key={index.toString()} className="container-row">
							<span className="container-col">{l.joint}</span>
							<span className="container-col">{l.radius}</span>
							<span className="container-col">{l.x1}</span>
							<span className="container-col">{l.y1}</span>
							<span className="container-col">{l.z1}</span>
						</div>
					);
				})}
			</div>
			<div className="sub-container">
				<div className="container-sub-header">Robot {robot} Area Data</div>
				<div className="container-row">
					<span className="container-col">
						Enabled: {vsf.area.enabled ? 'True' : 'False'}
					</span>
				</div>
				<div className="container-row">
					<span className="container-col">
						Upper Limit: {vsf.area.upper.toString()}
					</span>
					<span className="container-col">
						Lower Limit: {vsf.area.lower.toString()}
					</span>
				</div>
				<div className="container-row row-header">
					<span className="container-col">X1</span>
					<span className="container-col">Y1</span>
					<span className="container-col">X2</span>
					<span className="container-col">Y2</span>
				</div>
				{vsf.area.lines.map((line, index) => {
					const k = `area-line-${index}`;
					return (
						<div key={k} className="container-row">
							<span className="container-col">{line.x1}</span>
							<span className="container-col">{line.y1}</span>
							<span className="container-col">{line.x2}</span>
							<span className="container-col">{line.y2}</span>
						</div>
					);
				})}
			</div>
			<div className="page-break" />
			{vsf.parts.map((part, index) => {
				const i = `part-range-${index}`;
				return (
					<div key={i} className="sub-container">
						<div className="container-sub-header">
							Part Range {index + 1}
						</div>
						<div className="container-row">
							<span className="container-col">
								Enabled: {part.enabled ? 'True' : 'False'}
							</span>
						</div>
						<div className="container-row">
							<span className="container-col">
								Upper Limit: {vsf.area.upper.toString()}
							</span>
							<span className="container-col">
								Lower Limit: {vsf.area.lower.toString()}
							</span>
						</div>
						<div className="container-row row-header">
							<span className="container-col">X1</span>
							<span className="container-col">Y1</span>
							<span className="container-col">X2</span>
							<span className="container-col">Y2</span>
						</div>
						{part.lines.map((line, index2) => {
							const k = `area-line-${index2}`;
							return (
								<div key={k} className="container-row">
									<span className="container-col">{line.x1}</span>
									<span className="container-col">{line.y1}</span>
									<span className="container-col">{line.x2}</span>
									<span className="container-col">{line.y2}</span>
								</div>
							);
						})}
					</div>
				);
			})}
			{vsf.toolSpheres.map((tool, index1) => {
				const i = `tool-${index1}`;
				return (
					<div key={i} className="sub-container">
						<div className="container-sub-header">
							Robot {robot} Tool {(1 + index1).toString()} Sphere Data
						</div>
						<div className="container-row row-header">
							<span className="container-col">Sphere</span>
							<span className="container-col x">X</span>
							<span className="container-col y">Y</span>
							<span className="container-col z">Z</span>
							<span className="container-col">Radius</span>
						</div>
						{tool.spheres.map((sphere, index) => {
							const k = `tool-sphere-${index}`;
							return (
								<div key={k} className="container-row">
									<span className="container-col">{index + 1}</span>
									<span className="container-col">{sphere.x}</span>
									<span className="container-col">{sphere.y}</span>
									<span className="container-col">{sphere.z}</span>
									<span className="container-col">
										{sphere.radius}
									</span>
								</div>
							);
						})}
					</div>
				);
			})}
			{vsf.toolBoxes.map((tool, index1) => {
				const i = `toolbox-${index1}`;
				return (
					<div key={i} className="sub-container">
						<div className="container-sub-header">
							Robot {robot} Tool {(1 + index1).toString()} Box Data
						</div>
						<div className="container-row row-header">
							<span className="container-col">Rotation</span>
							<span className="container-col x">X</span>
							<span className="container-col y">Y</span>
							<span className="container-col z">Z</span>
							<span className="container-col">Depth</span>
							<span className="container-col">Width</span>
							<span className="container-col">Height</span>
						</div>
						<div className="container-row">
							<span className="container-col">{tool.rotation}</span>
							<span className="container-col">{tool.x}</span>
							<span className="container-col">{tool.y}</span>
							<span className="container-col">{tool.z}</span>
							<span className="container-col">{tool.depth}</span>
							<span className="container-col">{tool.width}</span>
							<span className="container-col">{tool.height}</span>
						</div>
						<div className="container-row row-header">
							<span className="container-col">Sphere</span>
							<span className="container-col x">X</span>
							<span className="container-col y">Y</span>
							<span className="container-col z">Z</span>
							<span className="container-col">Radius</span>
						</div>
						{tool.spheres.map((sphere, index) => {
							const k = `tool-sphere-${index}`;
							return (
								<div key={k} className="container-row">
									<span className="container-col">{index + 1}</span>
									<span className="container-col">{sphere.x}</span>
									<span className="container-col">{sphere.y}</span>
									<span className="container-col">{sphere.z}</span>
									<span className="container-col">
										{sphere.radius}
									</span>
								</div>
							);
						})}
					</div>
				);
			})}
			<div className="sub-container">
				<div className="container-sub-header">
					Robot {robot} Softlimit Data
				</div>
				<div className="container-row row-header">
					<span className="container-col">Joint</span>
					<span className="container-col">Min</span>
					<span className="container-col">Lower</span>
					<span className="container-col">Upper</span>
					<span className="container-col">Max</span>
				</div>
				{vsf.softLimits.map((limit, index) => {
					const k = `soft-limit-${index}`;
					return (
						<div key={k} className="container-row">
							<span className="container-col">{index + 1}</span>
							<span className="container-col">{limit.min}</span>
							<span className="container-col">{limit.lower}</span>
							<span className="container-col">{limit.upper}</span>
							<span className="container-col">{limit.max}</span>
						</div>
					);
				})}
			</div>
		</>
	);
}
