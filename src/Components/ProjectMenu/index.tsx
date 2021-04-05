import React from 'react';
import './style.global.css';

export default function ProjectMenu() {
	return (
		<div className="sub-menu">
			<span className="sub-menu-item">
				<i className="fa fa-file" />
				New
			</span>
			<span className="sub-menu-item">
				<i className="fa fa-folder-open" />
				Open
			</span>
			<span className="sub-menu-item">
				<i className="fa fa-file-import" />
				Import
			</span>
			<span className="sub-menu-item">
				<i className="fa fa-save" />
				Save
			</span>
			<span className="sub-menu-item">
				<i className="fa fa-calendar-day" />
				<label htmlFor="startDate">Start</label>
				<input type="date" name="startDate" id="startDate" />
			</span>
			<span className="sub-menu-item">
				<i className="fa fa-calendar-day" />
				<label htmlFor="endDate">End</label>
				<input type="date" name="endDate" id="endDate" />
			</span>
			<span className="sub-menu-item">
				<i className="fa fa-sitemap" />
				Create
			</span>
		</div>
	);
}
