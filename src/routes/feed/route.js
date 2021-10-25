module.exports = {
  // WARNING: Here be dragons and magic of all sorts.
  permalink: ({ request }) => `/${request.slug}/`,
};
