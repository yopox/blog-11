const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy('src/img')

  eleventyConfig.addFilter("imgFilter", name => {
    return "img/" + name;
  });

  return {
    dir: {input: 'src', output: '_site'}
  };
};
