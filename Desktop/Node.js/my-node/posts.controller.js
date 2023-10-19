const fs = require("fs/promises");
const path = require("path");
const chalk = require("chalk");

const postsPath = path.join(__dirname, "dbdb.json");

async function addPostNode(title) {
	const posts = await getPostsNode();

	const post = {
		title,
		id: Date.now().toString(),
	};

	posts.push(post);
	await fs.writeFile(postsPath, JSON.stringify(posts));
	console.log(chalk.green.inverse("Note was added!"));
}

async function getPostsNode() {
	const posts = await fs.readFile(postsPath, { encoding: "utf-8" });
	return Array.isArray(JSON.parse(posts)) ? JSON.parse(posts) : [];
}

async function printPosts() {
	const posts = await getPostsNode();

	console.log(chalk.blue.inverse("Here is the list of posts:"));
	posts.forEach((post) => {
		console.log(chalk.blue(post.title, post.id));
	});
}

async function removePostNode(id) {
	const posts = await getPostsNode();
	const indexRemove = posts.findIndex((i) => i.id === id);
	posts.splice(indexRemove, 1);
	await fs.writeFile(postsPath, JSON.stringify(posts));
	console.log(chalk.green.inverse("Note was deleted!"));
}

module.exports = {
	addPostNode,
	printPosts,
	removePostNode,
};
