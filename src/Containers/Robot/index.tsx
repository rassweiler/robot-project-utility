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
import RobotSwitch from '../../Components/RobotSwitch';
import RobotGun from '../../Components/RobotGun';

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
	const [currentPage, setCurrentPage] = useState('');
	const [errors, setErrors] = useState<string[]>([]);
	const [showRobot, setShowRobot] = useState(0);

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
			if (fileName !== '' && fileName !== undefined) {
				setController(data);
				setFile(fileName);
				setErrors([...errors, ...arg.errors]);
				setCurrentPage('vsf');
			}
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
		setCurrentPage('errors');
	};
	const toggleVSF = () => {
		setCurrentPage('vsf');
	};
	const toggleTool = () => {
		setCurrentPage('tool');
	};
	const toggleMH = () => {
		setCurrentPage('mh');
	};
	const toggleSpot = () => {
		setCurrentPage('spot');
	};
	const toggleBCD = () => {
		setCurrentPage('bcd');
	};
	const toggleComments = () => {
		setCurrentPage('comment');
	};
	const toggleRProg = () => {
		setCurrentPage('rprog');
	};
	const toggleCProg = () => {
		setCurrentPage('cprog');
	};
	const toggleVar = () => {
		setCurrentPage('var');
	};
	const toggleSwitch = () => {
		setCurrentPage('switch');
	};

	function RobotInfo() {
		if (file && controller.robots.length > 0) {
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
							{controller.robots[showRobot].model !== ''
								? ` ${controller.robots[showRobot].model}`
								: ''}
						</span>
						<span className="header-text">
							Type:
							{controller.robots[showRobot].type}
						</span>
					</div>
					<div className="container-header">
						<span className="header-text">
							Program:
							{controller.robots[showRobot].currentPosition.program}
						</span>
						<span className="header-text">
							Step:
							{controller.robots[showRobot].currentPosition.step}
						</span>
						<span className="header-text">
							Joints:
							{controller.robots[showRobot].currentPosition.joints}
						</span>
					</div>
				</>
			);
		}
		return <></>;
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
				currentPage={currentPage}
				toggleRobot={toggleRobot}
				openDialog={openDialog}
				exportDialog={exportDialog}
				toggleErrors={toggleErrors}
				toggleVSF={toggleVSF}
				toggleTool={toggleTool}
				toggleMH={toggleMH}
				toggleSpot={toggleSpot}
				toggleBCD={toggleBCD}
				toggleComments={toggleComments}
				toggleRProg={toggleRProg}
				toggleCProg={toggleCProg}
				toggleVar={toggleVar}
				toggleSwitch={toggleSwitch}
			/>
			<div className="container" onDrop={onDrop} onDragOver={onDragOver}>
				<RobotInfo />
				{currentPage === 'errors' ? <RobotErrors /> : null}
				{currentPage === 'vsf' ? (
					<RobotVSF
						key={`Robot${showRobot}-VSF-${controller.robots[showRobot].type}`}
						robot={showRobot + 1}
						vsf={controller.robots[showRobot].vsf}
						install={controller.robots[showRobot].installPosition}
					/>
				) : null}
				<div className="page-break" />
				{currentPage === 'tool' ? (
					<RobotTool
						key={`Robot${showRobot}-Tools-${controller.robots[showRobot].type}`}
						robot={showRobot + 1}
						tools={controller.robots[showRobot].tools}
					/>
				) : null}
				{currentPage === 'mh' ? (
					<RobotMH
						key={`Robot${showRobot}-NCS-${controller.robots[showRobot].type}`}
						robot={showRobot + 1}
						ncs={controller.robots[showRobot].ncTable}
					/>
				) : null}
				{currentPage === 'spot' ? (
					<RobotGun
						robot={showRobot}
						guns={controller.robots[showRobot].spotGuns}
					/>
				) : null}
				{currentPage === 'bcd' ? (
					<RobotBCD bcds={controller.robots[showRobot].bcds} />
				) : null}
				{currentPage === 'comment' ? (
					<ControllerComments comments={controller.ioComments} />
				) : null}
				{currentPage === 'rprog' ? (
					<>
						<RobotPrograms
							robot={showRobot}
							programs={controller.robots[showRobot].programs}
						/>
					</>
				) : null}
				{currentPage === 'cprog' ? (
					<>
						<ControllerPrograms programs={controller.commonPrograms} />
					</>
				) : null}
				{currentPage === 'var' ? (
					<ControllerVariables
						strings={controller.stringVars}
						reals={controller.realVars}
						joints={controller.jointVars}
						trans={controller.transVars}
					/>
				) : null}
				{currentPage === 'switch' ? (
					<RobotSwitch
						robot={showRobot}
						switches={controller.robots[showRobot].switches}
					/>
				) : null}
			</div>
		</>
	);
}
