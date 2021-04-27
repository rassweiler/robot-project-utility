import React from 'react';
import { IOCommentObjectAlias } from '@rassweiler/kawasaki-as-parser/lib/interfaces';

export default function ControllerComments(props: {
	comments: IOCommentObjectAlias;
}) {
	const { comments } = props;
	return (
		<>
			<div className="sub-container">
				<div className="container-sub-header">Robot Input Data</div>
				<div className="container-row row-header">
					<span className="container-col container-small">Input</span>
					<span className="container-col">Comment</span>
				</div>
				{comments.inputs.map((input, index) => {
					return (
						<div
							// eslint-disable-next-line react/no-array-index-key
							key={`Robot-input-${index}-data`}
							className="container-row"
						>
							<span className="container-col container-small">
								{input.signal}
							</span>
							<span className="container-col">{input.comment}</span>
						</div>
					);
				})}
			</div>
			<div className="sub-container">
				<div className="container-sub-header">Robot Input Data</div>
				<div className="container-row row-header">
					<span className="container-col container-small">Output</span>
					<span className="container-col">Comment</span>
				</div>
				{comments.outputs.map((output, index) => {
					return (
						<div
							// eslint-disable-next-line react/no-array-index-key
							key={`Robot-input-${index}-data`}
							className="container-row"
						>
							<span className="container-col container-small">
								{output.signal}
							</span>
							<span className="container-col">{output.comment}</span>
						</div>
					);
				})}
			</div>
		</>
	);
}
