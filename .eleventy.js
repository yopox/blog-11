const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addPassthroughCopy('CNAME')

  eleventyConfig.addFilter("imgFilter", name => {
    return "img/" + name
      .split('')
      .filter(c => c.match(/[a-zA-Z0-9\s]/))
      .join('')
      .toLowerCase()
      .replaceAll(' ', '-')
      + ".png";
  });

  return {
    dir: {input: 'src', output: '_site'}
  };
};
