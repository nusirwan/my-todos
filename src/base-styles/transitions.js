export const leftFadeIn = {
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

export const button = {
	pressable: true,
	init: { scale: 1 },
	press: { scale: 0.94 },
};

export const openForm = {
	open: {
		height: '6.25rem',
	},
	closed: {
		height: '2.5rem',
	},
};
