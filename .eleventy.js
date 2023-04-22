const {DateTime} = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");
const metagen = require('eleventy-plugin-metagen');

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(metagen);
    eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"));
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/assets/blog');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })
    return{
        dir:{
            input: "src",
            output:"public"
        }
    }
}