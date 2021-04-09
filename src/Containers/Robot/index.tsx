import React, { useState } from 'react';
import { ControllerObjectAlias } from '../../alias';
import RobotMenu from '../../Components/RobotMenu';
import RobotVSF from '../../Components/RobotVSF';

const { ipcRenderer } = require('electron');

export default function Robot() {
	const [robot, setRobot] = useState<ControllerObjectAlias>({
		controllerType: '',
		manufacturer: 'Kawasaki',
		robots: [],
	});

	const [file, setFile] = useState('');
	const [errors, setErrors] = useState<string[]>([]);
	const [showVSF, setShowVSF] = useState(false);
	const [showTool, setShowTool] = useState(false);
	const [showMH, setShowMH] = useState(false);
	const [showSpot, setShowSpot] = useState(false);
	const [showBCD, setShowBCD] = useState(false);
	const [showProg, setShowProg] = useState(false);
	const [showVar, setShowVar] = useState(false);

	ipcRenderer.on('on-parse-as-data', (event: any, arg: any) => {
		const data = arg;
		if (data !== undefined) {
			setRobot(data);
		} else {
			setFile('');
		}
	});
	ipcRenderer.on('on-fs-read-file', (event: any, arg: any) => {
		const data = arg;
		if (data === undefined) {
			setFile('');
		} else {
			ipcRenderer.send('on-parse-as-data', data);
		}
	});
	ipcRenderer.on('on-fs-dialog-open', (event: any, arg: any) => {
		const data = arg;
		if (data !== undefined) {
			setFile(data);
			ipcRenderer.send('on-fs-read-file', data);
		}
	});
	ipcRenderer.on('on-error', (event: any, arg: string) => {
		const data = arg;
		setErrors([...errors, data]);
	});

	const openDialog = () => {
		ipcRenderer.send('on-fs-dialog-open');
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
	const toggleProg = () => {
		setShowProg(!showProg);
	};
	const toggleVar = () => {
		setShowVar(!showVar);
	};

	/*
	useEffect(() => {
		parseBackup();
	});
*/
	return (
		<>
			<RobotMenu
				robotOpened={file !== ''}
				openDialog={openDialog}
				toggleVSF={toggleVSF}
				toggleTool={toggleTool}
				toggleMH={toggleMH}
				toggleSpot={toggleSpot}
				toggleBCD={toggleBCD}
				toggleProg={toggleProg}
				toggleVar={toggleVar}
			/>
			<div className="container">
				{errors.length > 0
					? errors.map((error) => {
							return (
								<div key={error} className="container-header">
									<span className="header-text">
										ERROR:
										{error}
									</span>
								</div>
							);
					  })
					: null}
				{robot.robots.length > 0 ? (
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
								{robot.controllerType !== ''
									? ` ${robot.controllerType}`
									: ''}
							</span>
							<span className="header-text">
								Robot:
								{robot.robots[0].robotModel !== ''
									? ` ${robot.robots[0].robotModel}`
									: ''}
							</span>
							<span className="header-text">
								Type:
								{robot.robots[0].robotType}
							</span>
						</div>
					</>
				) : null}
				{showVSF === true
					? robot.robots.map((r) => {
							return <RobotVSF key={r.robotType} vsf={r.vsf} />;
					  })
					: null}
				{showTool === true ? (
					<div className="container-robot-data">Tool</div>
				) : null}
				{showMH === true ? (
					<div className="container-robot-data">MH</div>
				) : null}
				{showSpot === true ? (
					<div className="container-robot-data">Spot</div>
				) : null}
				{showBCD === true ? (
					<div className="container-robot-data">BCD</div>
				) : null}
				{showProg === true ? (
					<div className="container-robot-data">Programs</div>
				) : null}
				{showVar === true ? (
					<div className="container-robot-data">Variables</div>
				) : null}
			</div>
		</>
	);
}
