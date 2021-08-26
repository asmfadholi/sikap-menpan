module.exports = {
	apps: [
		{
			name: "sikap",
			script: "npm start",
			env: {
				PORT: 3001,
				NODE_ENV: "production",
			},
		},
	],
};
