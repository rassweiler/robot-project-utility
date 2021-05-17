import React from 'react';
import { ProgramObjectAlias } from '@rassweiler/kawasaki-as-parser/lib/interfaces';
import WeldDisplay from '../WeldDisplay';

export default function ControllerPrograms(props: {
	programs: ProgramObjectAlias[];
}) {
	const { programs } = props;

	return (
		<>
			<div className="sub-container">
				<div className="container-sub-header">Controller Programs</div>
			</div>
			{programs.map((input, index) => {
				return (
					<div
						// eslint-disable-next-line react/no-array-index-key
						key={`Controller-string-${index}-var`}
						className="sub-container"
					>
						<div className="container-row row-header">
							<span className="container-col container-med">
								{input.name}
							</span>
							<span className="container-col container-med">
								{input.comment}
							</span>
							<span className="container-col">{input.arguments}</span>
						</div>
						{input.lines.map((val, i) => {
							if (val.type === 'as') {
								return (
									<div // eslint-disable-next-line react/no-array-index-key
										key={`controller-program-${index}-line-${i}-line`}
										className="container-row"
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
							if (val.type === 'comment') {
								return (
									<div // eslint-disable-next-line react/no-array-index-key
										key={`controller-program-${index}-line-${i}-line`}
										className="container-row"
									>
										<span className="container-col-pg string">
											&ldquo;{val.comment}&ldquo;
										</span>
									</div>
								);
							}
							if (val.type === 'function') {
								return (
									<div // eslint-disable-next-line react/no-array-index-key
										key={`controller-program-${index}-line-${i}-line`}
										className="container-row function"
									>
										{val.function ? (
											<span className="container-col-pg">
												Function {val.function}
											</span>
										) : null}
										{val.arguments ? (
											<span className="container-col-pg string">
												[ {val.arguments} ]
											</span>
										) : null}
									</div>
								);
							}
							if (val.type === 'block') {
								return (
									<div // eslint-disable-next-line react/no-array-index-key
										key={`controller-program-${index}-line-${i}-line`}
										className="container-row"
									>
										{val.interpolation ? (
											<span className="container-col-pg">
												{val.interpolation}
											</span>
										) : null}
										<span className="container-col-pg">
											Speed {val.speed}
										</span>
										<span className="container-col-pg">
											Accuracy {val.accuracy}
										</span>
										<span className="container-col-pg">
											Timer {val.timer}
										</span>
										<span className="container-col-pg">
											Tool {val.tool}
										</span>
										<span className="container-col-pg">
											Work {val.work}
										</span>
										<span className="container-col-pg">
											Group {val.group}
										</span>
										{val.clampInstruction.clampNumber ? (
											<span className="container-col-pg">
												Clmp {val.clampInstruction.clampNumber}
											</span>
										) : null}
										{val.operation ? (
											<span className="container-col-pg">
												{val.operation}
											</span>
										) : null}
										{val.comment ? (
											<span className="container-col-pg string">
												&ldquo;{val.comment}&ldquo;
											</span>
										) : null}
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
