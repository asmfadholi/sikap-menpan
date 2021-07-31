const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPWA = require("next-pwa");

const config = {
	...withPWA({
		pwa: {
			dest: "public",
		},
	}),
};

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([[bundleAnalyzer, config]]);
