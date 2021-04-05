import React, { useState, useEffect } from 'react';
import RobotMenu from '../../Components/RobotMenu';
import RobotVSF from '../../Components/RobotVSF';

const KawasakiParser = require('@rassweiler/kawasaki-as-parser');

export default function Robot() {
	const [robot, setRobot] = useState({
		file: '',
		info: {
			robotModel: '',
			robotController: '',
			robotType: '',
		},
		vsf: {
			link: [],
			area: {},
			sphere: [],
			box: [],
			soft: [],
		},
	});

	const [file, setFile] = useState('');
	const [showVSF, setShowVSF] = useState(false);
	const [showTool, setShowTool] = useState(false);
	const [showMH, setShowMH] = useState(false);
	const [showSpot, setShowSpot] = useState(false);
	const [showBCD, setShowBCD] = useState(false);
	const [showProg, setShowProg] = useState(false);
	const [showVar, setShowVar] = useState(false);

	const parseBackup = async () => {
		if (file !== '') {
			const controller = await KawasakiParser.getControllerObject();
			setRobot(controller);
		}
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

	useEffect(() => {
		parseBackup();
	});

	return (
		<>
			<RobotMenu
				robotOpened={robot.file !== ''}
				toggleVSF={toggleVSF}
				toggleTool={toggleTool}
				toggleMH={toggleMH}
				toggleSpot={toggleSpot}
				toggleBCD={toggleBCD}
				toggleProg={toggleProg}
				toggleVar={toggleVar}
			/>
			<div className="container">
				<div className="container-header">
					<span className="header-text">
						Robot:
						{robot.info.robotModel !== ''
							? ` ${robot.info.robotModel}`
							: ''}
					</span>
					<span className="header-text">
						Controller:
						{robot.info.robotController !== ''
							? ` ${robot.info.robotController}`
							: ''}
					</span>
					<span className="header-text">
						Type:
						{robot.info.robotType !== ''
							? ` ${robot.info.robotType}`
							: ''}
					</span>
				</div>
				{showVSF === true ? <RobotVSF vsf={robot.vsf} /> : null}
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
