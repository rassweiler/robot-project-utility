import React from 'react';
import { ProgramObjectAlias } from '@rassweiler/kawasaki-as-parser/lib/interfaces';
import WeldDisplay from '../WeldDisplay';

export default function RobotPrograms(props: {
	robot: number;
	programs: ProgramObjectAlias[];
}) {
	const { robot, programs } = props;

	return (
		<>
			{programs.map((input, index) => {
				return (
					<div
						// eslint-disable-next-line react/no-array-index-key
						key={`Controller-string-${index}-var`}
						className="sub-container"
					>
						<div className="container-sub-header">
							<span className="container-col pg-head container-med">
								{input.name}
							</span>
							<span className="container-col pg-head container-med">
								{input.comment}
							</span>
							<span className="container-col pg-head">
								{input.arguments}
							</span>
						</div>
						{input.lines.map((val, i) => {
							if (val.type === 'comment' || val.type === 'as') {
								return (
									<div // eslint-disable-next-line react/no-array-index-key
										key={`controller-program-${index}-line-${i}-line`}
										className="container-row line"
									>
										{val.line ? (
											<span className="container-col-pg">
												{val.line}
											</span>
										) : null}
										{val.comment ? (
											<span className="container-col-pg string">
												&ldquo;{val.comment}&ldquo;
											</span>
										) : null}
									</div>
								);
							}
							if (val.type === 'function') {
								return (
									<div // eslint-disable-next-line react/no-array-index-key
										key={`controller-program-${index}-line-${i}-line`}
										className="container-row function line"
									>
										{val.function ? (
											<span className="container-col-pg">
												Function {val.function}
											</span>
										) : null}
										{val.arguments ? (
											<span className="container-col-pg">
												[
												{val.arguments.map((arg) => {
													return <> {arg} </>;
												})}
												]
											</span>
										) : null}
									</div>
								);
							}
							if (val.type === 'block') {
								return (
									<div
										// eslint-disable-next-line react/no-array-index-key
										key={`controller-program-${index}-line-${i}-line`}
										className="line"
									>
										<div className="container-row">
											{val.interpolation ? (
												<span className="container-col-pg">
													{val.interpolation}
												</span>
											) : null}
											<span className="container-col-pg">
												Spd {val.speed}
											</span>
											<span className="container-col-pg">
												Accu {val.accuracy}
											</span>
											<span className="container-col-pg">
												Tmr {val.timer}
											</span>
											<span className="container-col-pg">
												Tool {val.tool}
											</span>
											<span className="container-col-pg">
												Wrk {val.work}
											</span>
											<span className="container-col-pg">
												Grp {val.group}
											</span>
											{val.operation ? (
												<span className="container-col-pg">
													{val.operation}
												</span>
											) : null}
											{val.outputs !== '' ? (
												<span className="container-col-pg">
													O: {val.outputs}
												</span>
											) : null}
											{val.inputs !== '' ? (
												<span className="container-col-pg">
													I: {val.inputs}
												</span>
											) : null}
											{val.clampInstruction.clampNumber ? (
												<span className="container-col-pg">
													Clmp {val.clampInstruction.clampNumber}
												</span>
											) : null}
											{val.comment ? (
												<span className="container-col-pg string">
													&ldquo;{val.comment}&ldquo;
												</span>
											) : null}
										</div>
										<div // eslint-disable-next-line react/no-array-index-key
											className="container-row joints"
										>
											{val.joints.map((joint, j) => {
												return (
													<span // eslint-disable-next-line react/no-array-index-key
														key={`controller-program-${index}-line-${i}-joint-${j}`}
														className="container-col-pg"
													>
														{j + 1}: {joint}
													</span>
												);
											})}
										</div>
										<WeldDisplay
											clamp={val.clampInstruction}
											weld={val.weld}
										/>
									</div>
								);
							}
							return <></>;
						})}
					</div>
				);
			})}
		</>
	);
}
