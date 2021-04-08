export type ControllerObjectAlias = {
	controllerType: string;
	robots: RobotObjectAlias[];
};

export type RobotObjectAlias = {
	robotType: string;
	robotModel: string;
	tools: ToolObjectAlias[];
	installPosition: InstallPositionAlias;
	softLimits: SoftLimitObjectAlias[];
	vsf: VSFObjectAlias;
	programs: ProgramObjectAlias[];
};

export type ToolObjectAlias = {
	tcp: {
		x: number;
		y: number;
		z: number;
		rx: number;
		ry: number;
		rz: number;
	};
	cog: {
		weight: number;
		x: number;
		y: number;
		z: number;
	};
};

export type InstallPositionAlias = {
	x: number;
	y: number;
	z: number;
	rx: number;
	ry: number;
	rz: number;
};

export type SoftLimitObjectAlias = {
	max: number;
	min: number;
	upper: number;
	lower: number;
};

export type VSFObjectAlias = {
	area: {
		enabled: boolean;
		upper: number;
		lower: number;
		lines: LineObjectAlias[];
	};
	parts: [
		{
			enabled: boolean;
			upper: number;
			lower: number;
			lines: LineObjectAlias[];
		}
	];
	linkData: [
		{
			radius: number;
			joint: number;
			x1: number;
			y1: number;
			z1: number;
			x2: number;
			y2: number;
			z2: number;
		}
	];
	toolSpheres: [
		{
			spheres: [
				{
					x: number;
					y: number;
					z: number;
					radius: number;
				}
			];
		}
	];
	toolBoxes: [
		{
			rotation: number;
			x: number;
			y: number;
			z: number;
			depth: number;
			width: number;
			height: number;
			spheres: [
				{
					radius: number;
					x: number;
					y: number;
					z: number;
				}
			];
		}
	];
};

export type LineObjectAlias = {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
};

export type ProgramObjectAlias = {
	name: string;
	comment: string;
	arguments: string[];
	lines: [
		{
			type: string;
			comment: string;
			function: number | undefined;
			arguments: string[] | undefined;
			interpolations: string;
			speed: number;
			accuracy: number;
			timer: number;
			tool: number;
			work: number;
			group: number;
			operation: string;
			clamp: number;
		}
	];
};
