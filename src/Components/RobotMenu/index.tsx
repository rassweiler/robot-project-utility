import React, { MouseEventHandler } from 'react';

export default function RobotMenu(props: {
	robotOpened: boolean;
	numberOfRobots: number;
	currentRobot: number;
	currentPage: string;
	toggleRobot: (
		robot: number
	) => MouseEventHandler<HTMLButtonElement> | undefined;
	openDialog: () => void;
	exportDialog: () => void;
	toggleErrors: () => void;
	toggleVSF: () => void;
	toggleTool: () => void;
	toggleMH: () => void;
	toggleSpot: () => void;
	toggleBCD: () => void;
	toggleComments: () => void;
	toggleRProg: () => void;
	toggleCProg: () => void;
	toggleVar: () => void;
	toggleSwitch: () => void;
}) {
	const {
		robotOpened,
		numberOfRobots,
		currentRobot,
		currentPage,
		toggleRobot,
		openDialog,
		exportDialog,
		toggleErrors,
		toggleVSF,
		toggleTool,
		toggleMH,
		toggleSpot,
		toggleBCD,
		toggleComments,
		toggleRProg,
		toggleCProg,
		toggleVar,
		toggleSwitch,
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
						className={
							currentPage === 'errors'
								? 'sub-menu-item active'
								: 'sub-menu-item'
						}
						onClick={toggleErrors}
					>
						<i className="fa fa-exclamation-circle" />
						Errors
					</button>
					<button
						type="button"
						className={
							currentPage === 'vsf'
								? 'sub-menu-item active'
								: 'sub-menu-item'
						}
						onClick={toggleVSF}
					>
						<i className="fa fa-cubes" />
						VSF
					</button>
					<button
						type="button"
						className={
							currentPage === 'tool'
								? 'sub-menu-item active'
								: 'sub-menu-item'
						}
						onClick={toggleTool}
					>
						<i className="fa fa-tools" />
						Tool
					</button>
					<button
						type="button"
						className={
							currentPage === 'mh'
								? 'sub-menu-item active'
								: 'sub-menu-item'
						}
						onClick={toggleMH}
					>
						<i className="fa fa-fist-raised" />
						MH
					</button>
					<button
						type="button"
						className={
							currentPage === 'spot'
								? 'sub-menu-item active'
								: 'sub-menu-item'
						}
						onClick={toggleSpot}
					>
						<i className="fa fa-plug" />
						Gun
					</button>
					<button
						type="button"
						className={
							currentPage === 'bcd'
								? 'sub-menu-item active'
								: 'sub-menu-item'
						}
						onClick={toggleBCD}
					>
						<i className="fa fa-laptop" />
						BCD
					</button>
					<button
						type="button"
						className={
							currentPage === 'comment'
								? 'sub-menu-item active'
								: 'sub-menu-item'
						}
						onClick={toggleComments}
					>
						<i className="fa fa-quote-left" />
						Comments
					</button>
					<button
						type="button"
						className={
							currentPage === 'rprog'
								? 'sub-menu-item active'
								: 'sub-menu-item'
						}
						onClick={toggleRProg}
					>
						<i className="fa fa-stream" />
						Robot Programs
					</button>
					<button
						type="button"
						className={
							currentPage === 'cprog'
								? 'sub-menu-item active'
								: 'sub-menu-item'
						}
						onClick={toggleCProg}
					>
						<i className="fa fa-stream" />
						Controller Programs
					</button>
					<button
						type="button"
						className={
							currentPage === 'var'
								? 'sub-menu-item active'
								: 'sub-menu-item'
						}
						onClick={toggleVar}
					>
						<i className="fa fa-laptop-code" />
						Variables
					</button>
					<button
						type="button"
						className={
							currentPage === 'switch'
								? 'sub-menu-item active'
								: 'sub-menu-item'
						}
						onClick={toggleSwitch}
					>
						<i className="fa fa-toggle-on" />
						Switches
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
