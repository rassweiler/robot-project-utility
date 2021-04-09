import React from 'react';
import './style.global.css';
import { VSFObjectAlias } from '../../alias';

export default function RobotVSF(props: { vsf: VSFObjectAlias }) {
	const { vsf } = props;
	return (
		<>
			<div className="container-robot-data">
				<div className="container-sub-header">Link Data</div>
				{vsf.linkData.map((l, index) => {
					return (
						<div key={index.toString()} className="container-row">
							<span className="container-col-4">Joint: {l.joint}</span>
							<span className="container-col-4">Radius: {l.radius}</span>
							<span className="container-col-4">X1: {l.x1}</span>
							<span className="container-col-4">Y1: {l.y1}</span>
							<span className="container-col-4">Z1: {l.z1}</span>
						</div>
					);
				})}
			</div>
			<div className="container-robot-data">
				<div className="container-sub-header">Area Data</div>
				<div className="container-col-1">
					Enabled: {vsf.area.enabled ? 'True' : 'False'}
				</div>
				<div className="flex-container">
					<span className="container-col-2">
						Upper Limit: {vsf.area.upper.toString()}
					</span>
					<span className="container-col-2">
						Lower Limit: {vsf.area.lower.toString()}
					</span>
				</div>
				{vsf.area.lines.map((line, index) => {
					const k = `area-line-${index}`;
					return (
						<div key={k} className="container-row">
							<span className="container-col-4">X1: {line.x1}</span>
							<span className="container-col-4">Y1: {line.y1}</span>
							<span className="container-col-4">X2: {line.x2}</span>
							<span className="container-col-4">Y2: {line.y2}</span>
						</div>
					);
				})}
			</div>
			{vsf.parts.map((part, index) => {
				const i = `part-range-${index}`;
				return (
					<div key={i} className="container-robot-data">
						<div className="container-sub-header">
							Part Range {index + 1}
						</div>
						<div className="container-col-1">
							Enabled: {part.enabled ? 'True' : 'False'}
						</div>
						<div className="flex-container">
							<span className="container-col-2">
								Upper Limit: {vsf.area.upper.toString()}
							</span>
							<span className="container-col-2">
								Lower Limit: {vsf.area.lower.toString()}
							</span>
						</div>
						{part.lines.map((line, index2) => {
							const k = `area-line-${index2}`;
							return (
								<div key={k} className="container-row">
									<span className="container-col-4">
										X1: {line.x1}
									</span>
									<span className="container-col-4">
										Y1: {line.y1}
									</span>
									<span className="container-col-4">
										X2: {line.x2}
									</span>
									<span className="container-col-4">
										Y2: {line.y2}
									</span>
								</div>
							);
						})}
					</div>
				);
			})}
			{vsf.toolSpheres.map((tool, index1) => {
				const i = `tool-${index1}`;
				return (
					<div key={i} className="container-robot-data">
						<div className="container-sub-header">
							Tool {(1 + index1).toString()} Sphere Data
						</div>
						{tool.spheres.map((sphere, index) => {
							const k = `tool-sphere-${index}`;
							return (
								<div key={k} className="container-row">
									<span className="container-col-5">
										Sphere: {index + 1}
									</span>
									<span className="container-col-5">
										X: {sphere.x}
									</span>
									<span className="container-col-5">
										Y: {sphere.y}
									</span>
									<span className="container-col-5">
										z: {sphere.z}
									</span>
									<span className="container-col-5">
										Radius: {sphere.radius}
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
					<div key={i} className="container-robot-data">
						<div className="container-sub-header">
							Tool {(1 + index1).toString()} Box Data
						</div>
						<div className="container-row">
							<span className="container-col-4">
								Rotation: {tool.rotation}
							</span>
							<span className="container-col-4">X: {tool.x}</span>
							<span className="container-col-4">Y: {tool.y}</span>
							<span className="container-col-4">Z: {tool.z}</span>
						</div>
						<div className="container-row">
							<span className="container-col-3">
								Depth: {tool.depth}
							</span>
							<span className="container-col-3">
								Width: {tool.width}
							</span>
							<span className="container-col-3">
								Height: {tool.height}
							</span>
						</div>
						{tool.spheres.map((sphere, index) => {
							const k = `tool-sphere-${index}`;
							return (
								<div key={k} className="container-row">
									<span className="container-col-5">
										Sphere: {index + 1}
									</span>
									<span className="container-col-5">
										X: {sphere.x}
									</span>
									<span className="container-col-5">
										Y: {sphere.y}
									</span>
									<span className="container-col-5">
										z: {sphere.z}
									</span>
									<span className="container-col-5">
										Radius: {sphere.radius}
									</span>
								</div>
							);
						})}
					</div>
				);
			})}
			<div className="container-robot-data">
				<div className="container-sub-header">Softlimit Data</div>
				{vsf.softLimits.map((limit, index) => {
					const k = `soft-limit-${index}`;
					return (
						<div key={k} className="container-row">
							<span className="container-col-5">Joint: {index + 1}</span>
							<span className="container-col-5">Min: {limit.min}</span>
							<span className="container-col-5">
								Lower: {limit.lower}
							</span>
							<span className="container-col-5">
								Upper: {limit.upper}
							</span>
							<span className="container-col-5">Max: {limit.max}</span>
						</div>
					);
				})}
			</div>
		</>
	);
}
