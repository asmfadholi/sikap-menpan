const chalk = require("chalk");

module.exports = () => {
	console.log("\n\nā ", chalk.black.bgGreen(" All done! Happy coding. \n"));
	console.log(
		"Installer has added ā” Nextify files to the current directory.  ",
		"\nInside this directory, you can run this command:",
	);

	// Scripts
	console.log(
		"\nš ",
		" Type",
		chalk.black.bgWhite(" npm run dev "),
		"\n\n",
		"	Use to compile and run your files.",
		"\n",
		"	Watches for any changes and reports back any errors in your code.",
	);

	// Support
	console.log("\nā ", chalk.black.bgYellow(" Support Nextify \n"));
	console.log(
		"Like Nextify? Check out our other free and open source repositories: \n",
	);
	console.log(
		`	${chalk.yellow("Cherry ā ")} https://bit.ly/3sEr75P`,
		"\n",
		`	${chalk.gray("ā¢ A design system to build the web.")}`,
		"\n",
		`	${chalk.yellow("GoPablo ā ")} http://bit.ly/2Hgkfpy`,
		"\n",
		`	${chalk.gray("ā¢ Create optimized static websites.")}`,
		"\n",
		`	${chalk.yellow("WordPressify ā ")} https://bit.ly/2KTqyQX`,
		"\n",
		`	${chalk.gray("ā¢ Automate your WordPress development workflow.")}`,
		"\n",
		`	${chalk.yellow("Nextify ā ")} https://bit.ly/3m4lVWm`,
		"\n",
		`	${chalk.gray("ā¢ React apps using Next.js and Emotion.")}`,
		"\n",
		`	${chalk.yellow("FuzzyMail ā ")} https://bit.ly/2P3Irlr`,
		"\n",
		`	${chalk.gray("ā¢ Responsive email template generator.")}`,
		"\n",
		`	${chalk.green("Powered by Riangle ā ")} https://bit.ly/2P5i26I`,
		"\n",
		"\n",
		`	${chalk.red(
			"Thank you for using ā” Nextify ā ",
		)} https://www.nextify.me`,
	);

	// Get started
	console.log("\n\nšÆ ", chalk.black.bgGreen(" Get Started ā \n"));
	console.log(" You can start: \n");
	console.log(
		` ${chalk.dim("1.")} Editing your new react application: ${chalk.green(
			`${process.cwd()}/src`,
		)}`,
	);
	console.log(
		` ${chalk.dim("2.")} Running: ${chalk.green("npm")} run dev`,
		"\n\n",
	);
	process.exit();
};
