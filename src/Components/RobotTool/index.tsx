import React from 'react';
import { ToolObjectAlias } from '@rassweiler/kawasaki-as-parser/lib/interfaces';

export default function RobotTool(props: {
	robot: number;
	tools: ToolObjectAlias[];
}) {
	const { robot, tools } = props;
	return (
		<>
			{tools.map((tool, index) => {
				return (
					<div
						// eslint-disable-next-line react/no-array-index-key
						key={`Robot-${robot}-Tool-${index}-data`}
						className="sub-container"
					>
						<div className="container-sub-header">
							Robot {robot} Tool {index + 1} TCP Data
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
							<span className="container-col">{tool.tcp.x}</span>
							<span className="container-col">{tool.tcp.y}</span>
							<span className="container-col">{tool.tcp.z}</span>
							<span className="container-col">{tool.tcp.rx}</span>
							<span className="container-col">{tool.tcp.ry}</span>
							<span className="container-col">{tool.tcp.rz}</span>
						</div>
						<div className="container-sub-header">
							Robot {robot} Tool {index + 1} COG Data
						</div>
						<div className="container-row row-header">
							<span className="container-col">Weight</span>
							<span className="container-col x">X</span>
							<span className="container-col y">Y</span>
							<span className="container-col z">Z</span>
						</div>
						<div className="container-row">
							<span className="container-col">{tool.cog.weight}</span>
							<span className="container-col">{tool.cog.x}</span>
							<span className="container-col">{tool.cog.y}</span>
							<span className="container-col">{tool.cog.z}</span>
						</div>
					</div>
				);
			})}
		</>
	);
}
