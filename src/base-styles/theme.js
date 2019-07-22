export default {
	breakpoints: {
		mobile: 'min-width: 26.25rem',
		tablet: 'min-width: 48rem',
		laptop: 'min-width: 80rem',
	},
	contentWidth: {
		laptop: '75rem',
	},
	colors: {
		white: 'rgb( 255, 255, 255 )',
		sanJuan: 'rgb( 51, 84, 109 )',
		dawnPink: 'rgb( 247, 239, 237 )',
		silverChalice: 'rgb( 171, 171, 171 )',
		turquoiseBlue: 'rgb( 97, 212, 226 )',
		neptune: 'rgb( 127, 167, 184 )',
		carnation: 'rgb( 241, 72, 91 )',
	},
	transitions: {
		leftFadeIn: {
			exit: {
				opacity: 0,
				x: 4,
			},
			enter: {
				opacity: 1,
				x: 0,
				transition: { duration: 400 },
			},
		},
		openForm: {
			open: {
				height: '6.25rem',
			},
			closed: {
				height: '2.5rem',
			},
		},
	},
};
