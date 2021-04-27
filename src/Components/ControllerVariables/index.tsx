import React from 'react';
import {
	JointVarObjectAlias,
	RealVarObjectAlias,
	StringVarObjectAlias,
	TransVarObjectAlias,
} from '@rassweiler/kawasaki-as-parser/lib/interfaces';

export default function ControllerVariables(props: {
	strings: StringVarObjectAlias[];
	reals: RealVarObjectAlias[];
	joints: JointVarObjectAlias[];
	trans: TransVarObjectAlias[];
}) {
	const { strings, reals, joints, trans } = props;
	return (
		<>
			<div className="sub-container">
				<div className="container-sub-header">Controller String Vars</div>
				<div className="container-row row-header">
					<span className="container-col container-med">Variable</span>
					<span className="container-col">Values</span>
				</div>
				{strings.map((input, index) => {
					return (
						<div
							// eslint-disable-next-line react/no-array-index-key
							key={`Controller-string-${index}-var`}
							className="container-row"
						>
							<span className="container-col container-med">
								{input.name}
							</span>
							{input.values.map((val, i) => {
								return (
									<span
										// eslint-disable-next-line react/no-array-index-key
										key={`controller-string-${index}-var-${i}`}
										className="container-col"
									>
										{val}
									</span>
								);
							})}
						</div>
					);
				})}
			</div>
			<div className="sub-container">
				<div className="container-sub-header">Controller Real Vars</div>
				<div className="container-row row-header">
					<span className="container-col container-med">Variable</span>
					<span className="container-col">Values</span>
				</div>
				{reals.map((input, index) => {
					return (
						<div
							// eslint-disable-next-line react/no-array-index-key
							key={`Controller-string-${index}-var`}
							className="container-row"
						>
							<span className="container-col container-med">
								{input.name}
							</span>
							{input.values.map((val, i) => {
								return (
									<span
										// eslint-disable-next-line react/no-array-index-key
										key={`controller-string-${index}-var-${i}`}
										className="container-col"
									>
										{val}
									</span>
								);
							})}
						</div>
					);
				})}
			</div>
			<div className="sub-container">
				<div className="container-sub-header">Controller Joint Vars</div>
				{joints.map((input, index) => {
					return (
						<div
							// eslint-disable-next-line react/no-array-index-key
							key={`Controller-string-${index}-var`}
						>
							<div className="container-row row-header">
								<span className="container-col">{input.name}</span>
							</div>
							<div className="container-row wrap vars">
								{input.values.map((val, i) => {
									return (
										<span
											// eslint-disable-next-line react/no-array-index-key
											key={`controller-string-${index}-var-${i}`}
											className="container-col-vars"
										>
											{val}
										</span>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
			<div className="sub-container">
				<div className="container-sub-header">Controller Trans Vars</div>
				{trans.map((input, index) => {
					return (
						<div
							// eslint-disable-next-line react/no-array-index-key
							key={`Controller-string-${index}-var`}
						>
							<div className="container-row">
								<span className="container-col row-header">
									{input.name}
								</span>
							</div>
							<div className="container-row wrap vars">
								{input.values.map((val, i) => {
									return (
										<span
											// eslint-disable-next-line react/no-array-index-key
											key={`controller-string-${index}-var-${i}`}
											className="container-col-vars"
										>
											{val}
										</span>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
