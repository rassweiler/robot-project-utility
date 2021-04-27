import React, { useState } from 'react';
import { ControllerObjectAlias } from '@rassweiler/kawasaki-as-parser/lib/interfaces';
import RobotBCD from '../../Components/RobotBCD';
import ControllerComments from '../../Components/ControllerComments';
import RobotMenu from '../../Components/RobotMenu';
import RobotMH from '../../Components/RobotMH';
import RobotTool from '../../Components/RobotTool';
import RobotVSF from '../../Components/RobotVSF';
import ControllerVariables from '../../Components/ControllerVariables';
import ControllerPrograms from '../../Components/ControllerPrograms';
import RobotPrograms from '../../Components/RobotPrograms';

const { ipcRenderer } = require('electron');

export default function Robot() {
	const [controller, setController] = useState<ControllerObjectAlias>({
		controllerType: '',
		manufacturer: 'Kawasaki',
		robots: [],
		ioComments: {
			inputs: [],
			outputs: [],
		},
		commonPrograms: [],
		stringVars: [],
		realVars: [],
		jointVars: [],
		transVars: [],
	});

	const [file, setFile] = useState('');
	const [errors, setErrors] = useState<string[]>([]);
	const [showRobot, setShowRobot] = useState(0);
	const [showErrors, setShowErrors] = useState(false);
	const [showInfo, setShowInfo] = useState(false);
	const [showVSF, setShowVSF] = useState(false);
	const [showTool, setShowTool] = useState(false);
	const [showMH, setShowMH] = useState(false);
	const [showSpot, setShowSpot] = useState(false);
	const [showBCD, setShowBCD] = useState(false);
	const [showComments, setShowComments] = useState(false);
	const [showRProg, setShowRProg] = useState(false);
	const [showCProg, setShowCProg] = useState(false);
	const [showVar, setShowVar] = useState(false);

	ipcRenderer.on(
		'on-open-backup',
		(
			_event: any,
			arg: {
				data: ControllerObjectAlias;
				fileName: string;
				errors: string[];
			}
		) => {
			const { data, fileName } = arg;
			setController(data);
			setFile(fileName);
			setErrors([...errors, ...arg.errors]);
		}
	);

	const onDrop = (event: any) => {
		event.preventDefault();
		event.stopPropagation();
		if (event.dataTransfer && event.dataTransfer.files) {
			ipcRenderer.send('open-drag-backup', {
				name: event.dataTransfer.files[0].name,
				path: event.dataTransfer.files[0].path,
			});
		}
	};
	const onDragOver = (event: { preventDefault: () => void }) => {
		event.preventDefault();
	};

	const openDialog = () => {
		ipcRenderer.send('on-open-backup');
	};
	const exportDialog = () => {
		ipcRenderer.send('export-robot-backup', 'Bigdildo.pdf');
	};
	const toggleRobot = (robot: number) => {
		setShowRobot(robot);
		return undefined;
	};
	const toggleErrors = () => {
		setShowErrors(!showErrors);
	};
	const toggleInfo = () => {
		setShowInfo(!showInfo);
	};
	const toggleVSF = () => {
		setShowVSF(!showVSF);
	};
	const toggleTool = () => {
		setShowTool(!showTool);
	};
	const toggleMH = () => {
		setShowMH(!showMH);
	};
	const toggleSpot = () => {
		setShowSpot(!showSpot);
	};
	const toggleBCD = () => {
		setShowBCD(!showBCD);
	};
	const toggleComments = () => {
		setShowComments(!showComments);
	};
	const toggleRProg = () => {
		setShowRProg(!showRProg);
	};
	const toggleCProg = () => {
		setShowCProg(!showCProg);
	};
	const toggleVar = () => {
		setShowVar(!showVar);
	};

	function RobotInfo() {
		return (
			<>
				<div className="container-header">
					<span className="header-text">
						File:
						{file !== '' ? ` ${file}` : ''}
					</span>
				</div>
				<div className="container-header">
					<span className="header-text">
						Controller:
						{controller.controllerType !== ''
							? ` ${controller.controllerType}`
							: ''}
					</span>
					<span className="header-text">
						Robot:
						{controller.robots[showRobot].robotModel !== ''
							? ` ${controller.robots[showRobot].robotModel}`
							: ''}
					</span>
					<span className="header-text">
						Type:
						{controller.robots[showRobot].robotType}
					</span>
				</div>
			</>
		);
	}

	function RobotErrors() {
		return (
			<div className="container-header errors">
				{errors.length > 0
					? errors.map((error) => {
							return (
								<div key={error} className="header-text">
									- {error}
								</div>
							);
					  })
					: null}
			</div>
		);
	}

	/*
	useEffect(() => {
		parseBackup();
	});
*/
	return (
		<>
			<RobotMenu
				robotOpened={file !== ''}
				numberOfRobots={controller.robots.length}
				currentRobot={showRobot}
				toggleRobot={toggleRobot}
				openDialog={openDialog}
				exportDialog={exportDialog}
				toggleErrors={toggleErrors}
				toggleInfo={toggleInfo}
				toggleVSF={toggleVSF}
				toggleTool={toggleTool}
				toggleMH={toggleMH}
				toggleSpot={toggleSpot}
				toggleBCD={toggleBCD}
				toggleComments={toggleComments}
				toggleRProg={toggleRProg}
				toggleCProg={toggleCProg}
				toggleVar={toggleVar}
			/>
			<div className="container" onDrop={onDrop} onDragOver={onDragOver}>
				{showInfo === true ? <RobotInfo /> : null}
				{showErrors === true ? <RobotErrors /> : null}
				{showVSF === true ? (
					<RobotVSF
						key={`Robot${showRobot}-VSF-${controller.robots[showRobot].robotType}`}
						robot={showRobot + 1}
						vsf={controller.robots[showRobot].vsf}
						install={controller.robots[showRobot].installPosition}
					/>
				) : null}
				<div className="page-break" />
				{showTool === true ? (
					<RobotTool
						key={`Robot${showRobot}-Tools-${controller.robots[showRobot].robotType}`}
						robot={showRobot + 1}
						tools={controller.robots[showRobot].tools}
					/>
				) : null}
				{showMH === true ? (
					<RobotMH
						key={`Robot${showRobot}-NCS-${controller.robots[showRobot].robotType}`}
						robot={showRobot + 1}
						ncs={controller.robots[showRobot].ncTable}
					/>
				) : null}
				{showSpot === true ? (
					<div className="sub-container">Spot</div>
				) : null}
				{showBCD === true ? (
					<RobotBCD bcds={controller.robots[showRobot].bcds} />
				) : null}
				{showComments === true ? (
					<ControllerComments comments={controller.ioComments} />
				) : null}
				{showRProg === true ? (
					<>
						<RobotPrograms
							robot={showRobot}
							programs={controller.robots[showRobot].programs}
						/>
					</>
				) : null}
				{showCProg === true ? (
					<>
						<ControllerPrograms programs={controller.commonPrograms} />
					</>
				) : null}
				{showVar === true ? (
					<ControllerVariables
						strings={controller.stringVars}
						reals={controller.realVars}
						joints={controller.jointVars}
						trans={controller.transVars}
					/>
				) : null}
			</div>
		</>
	);
}
