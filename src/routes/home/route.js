const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  // the all function returns an array of all of the 'request' objects of a route. Since this is the homepage, there is only one.
  all: () => [{ slug: '/' }],
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  permalink: ({ request }) => request.slug,
  data: ({ data }) => {
    // The data function populates what data should be in available in our Svelte template.
    // Since we will be listing out Elder.js's hooks, we make sure to populate that on the data object so it can be looped through
    // in our Svelte template.
    data.hookInterface = hookInterface;
    data.hookEntityDefinitions = hookEntityDefinitions;

    newBlogs = data.markdown.blog.sort((a, b) => {
      if (a?.frontmatter?.title ?? '' < b?.frontmatter?.title ?? '') return -1;
      if (a?.frontmatter?.title ?? '' > b?.frontmatter?.title ?? '') return 1;
      return 0;
    });

    return {
      ...data,
      markdown: {
        ...data.markdown,
        blog: newBlogs,
      },
    };
  },
};
