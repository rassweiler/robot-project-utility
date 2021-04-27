import React, { MouseEventHandler } from 'react';

export default function RobotMenu(props: {
	robotOpened: boolean;
	numberOfRobots: number;
	currentRobot: number;
	toggleRobot: (
		robot: number
	) => MouseEventHandler<HTMLButtonElement> | undefined;
	openDialog: () => void;
	exportDialog: () => void;
	toggleErrors: () => void;
	toggleInfo: () => void;
	toggleVSF: () => void;
	toggleTool: () => void;
	toggleMH: () => void;
	toggleSpot: () => void;
	toggleBCD: () => void;
	toggleComments: () => void;
	toggleRProg: () => void;
	toggleCProg: () => void;
	toggleVar: () => void;
}) {
	const {
		robotOpened,
		numberOfRobots,
		currentRobot,
		toggleRobot,
		openDialog,
		exportDialog,
		toggleErrors,
		toggleInfo,
		toggleVSF,
		toggleTool,
		toggleMH,
		toggleSpot,
		toggleBCD,
		toggleComments,
		toggleRProg,
		toggleCProg,
		toggleVar,
	} = props;

	const MenuButtons = () => {
		if (robotOpened) {
			return (
				<>
					<button
						type="button"
						className="sub-menu-item"
						onClick={exportDialog}
					>
						<i className="fa fa-file-export" />
						Export
					</button>
					<button
						type="button"
						className="sub-menu-item"
						onClick={toggleErrors}
					>
						<i className="fa fa-exclamation-circle" />
						Errors
					</button>
					<button
						type="button"
						className="sub-menu-item"
						onClick={toggleInfo}
					>
						<i className="fa fa-info-circle" />
						Info
					</button>
					<button
						type="button"
						className="sub-menu-item"
						onClick={toggleVSF}
					>
						<i className="fa fa-cubes" />
						VSF
					</button>
					<button
						type="button"
						className="sub-menu-item"
						onClick={toggleTool}
					>
						<i className="fa fa-tools" />
						Tool
					</button>
					<button
						type="button"
						className="sub-menu-item"
						onClick={toggleMH}
					>
						<i className="fa fa-fist-raised" />
						MH
					</button>
					<button
						type="button"
						className="sub-menu-item"
						onClick={toggleSpot}
					>
						<i className="fa fa-plug" />
						Spot
					</button>
					<button
						type="button"
						className="sub-menu-item"
						onClick={toggleBCD}
					>
						<i className="fa fa-laptop" />
						BCD
					</button>
					<button
						type="button"
						className="sub-menu-item"
						onClick={toggleComments}
					>
						<i className="fa fa-quote-left" />
						Comments
					</button>
					<button
						type="button"
						className="sub-menu-item"
						onClick={toggleRProg}
					>
						<i className="fa fa-stream" />
						Robot Programs
					</button>
					<button
						type="button"
						className="sub-menu-item"
						onClick={toggleCProg}
					>
						<i className="fa fa-stream" />
						Controller Programs
					</button>
					<button
						type="button"
						className="sub-menu-item"
						onClick={toggleVar}
					>
						<i className="fa fa-laptop-code" />
						Variables
					</button>
				</>
			);
		}
		return <></>;
	};

	const RobotButtons = () => {
		const robots = [];
		for (let index = 0; index < numberOfRobots; index += 1) {
			const k = `robot-select-${index}`;
			const a =
				currentRobot === index
					? 'sub-menu-item-robot selected'
					: 'sub-menu-item-robot';
			robots.push(
				<button
					type="button"
					className={a}
					onClick={() => toggleRobot(index)}
					key={k}
				>
					{index + 1}
				</button>
			);
		}
		if (robotOpened) {
			return (
				<>
					<span className="sub-menu-item-label">View Robot:</span>
					{robots}
				</>
			);
		}
		return <></>;
	};

	return (
		<>
			<div className="sub-menu">
				<button
					type="button"
					className="sub-menu-item"
					onClick={openDialog}
				>
					<i className="fa fa-folder-open" />
					Open
				</button>
				{MenuButtons()}
			</div>
			<div className="sub-menu-robots">{RobotButtons()}</div>
		</>
	);
}
