import React from 'react';
import './style.global.css';

export default function RobotMenu(props: {
	robotOpened: boolean;
	openDialog: () => void;
	toggleVSF: () => void;
	toggleTool: () => void;
	toggleMH: () => void;
	toggleSpot: () => void;
	toggleBCD: () => void;
	toggleProg: () => void;
	toggleVar: () => void;
}) {
	const {
		robotOpened,
		openDialog,
		toggleVSF,
		toggleTool,
		toggleMH,
		toggleSpot,
		toggleBCD,
		toggleProg,
		toggleVar,
	} = props;

	const RobotButtons = (opened: boolean) => {
		if (opened) {
			return (
				<>
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
						onClick={toggleProg}
					>
						<i className="fa fa-stream" />
						Programs
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

	return (
		<div className="sub-menu">
			<button type="button" className="sub-menu-item" onClick={openDialog}>
				<i className="fa fa-folder-open" />
				Open
			</button>
			<button type="button" className="sub-menu-item">
				<i className="fa fa-file-export" />
				Export
			</button>
			{RobotButtons(robotOpened)}
		</div>
	);
}
