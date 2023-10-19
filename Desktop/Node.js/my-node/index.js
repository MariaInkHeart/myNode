const yargs = require("yargs");
const { addPostNode, printPosts, removePostNode } = require("./posts.controller");

yargs.command({
	command: "add",
	describe: "Add new note to list",
	builder: {
		title: {
			type: "string",
			describe: "Note Title",
			demandOption: true,
		},
	},
	handler({ title }) {
		addPostNode(title);
	},
});

yargs.command({
	command: "list",
	describe: "Print all notes",
	async handler() {
		printPosts();
	},
});

yargs.command({
	command: "remove",
	describe: "Remove note by id",
	builder: {
		id: {
			type: "string",
			describe: "Post id",
			demandOption: true,
		},
	},
	handler({ id }) {
		removePostNode(id);
	},
});

yargs.parse();
