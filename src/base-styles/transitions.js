export const fadeInRight = {
	exit: {
		opacity: 0,
		x: 4,
	},
	enter: {
		opacity: 1,
		x: 0,
		transition: { duration: 400 },
	},
};

export const fadeInDown = {
	exit: {
		opacity: 0,
		y: -20,
	},
	enter: {
		opacity: 1,
		y: 0,
	},
};

export const button = {
	pressable: true,
	init: { opacity: 1 },
	press: { opacity: 0.8 },
};

export const openForm = {
	open: {
		height: '6.25rem',
	},
	closed: {
		height: '2.5rem',
	},
};
