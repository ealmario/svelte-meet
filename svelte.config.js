const { default: preprocess } = require("svelte/types/compiler/preprocess");

const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess(),
}