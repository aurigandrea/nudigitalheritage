const {DateTime} = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");
const schema = require("@quasibit/eleventy-plugin-schema");
const generateSocialImages = require("@manustays/eleventy-plugin-generate-social-images");


module.exports = function(eleventyConfig){
    eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"));
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/assets/blog');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPlugin(generateSocialImages, {
    promoImage: "./src/assets/logo.png",
    outputDir: "./public/assets/preview",
    urlPath: "/assets/preview",
        siteName: "heritagedigital.org",
	titleColor: "white",
	bgColor: ['#38baad']
  });
    eleventyConfig.addPlugin(schema);
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


