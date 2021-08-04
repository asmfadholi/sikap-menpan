const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const withAntdLess = require("next-plugin-antd-less");
const withPWA = require("next-pwa");

const config = {
	...withPWA({
		pwa: {
			dest: "public",
		},
	}),
	...withAntdLess({
		// optional
		modifyVars: { "@primary-color": "#b62b30" },
		// optional
		// lessVarsFilePath: "./src/styles/variables.less",
		// optional
		lessVarsFilePathAppendToEndOfContent: false,
		// optional https://github.com/webpack-contrib/css-loader#object
		cssLoaderOptions: {},

		// Other Config Here...

		webpack(config) {
			return config;
		},

		// ONLY for Next.js 10, if you use Next.js 11, delete this block
		// future: {
		// 	webpack5: true,
		// },
	}),
};

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([[bundleAnalyzer, config]]);
