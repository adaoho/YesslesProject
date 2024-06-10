const createSlug = (title) => {
  // Convert the title to lowercase
  let slug = title.toLowerCase();

  // Replace spaces with hyphens and split into words
  let words = slug.split(/\s+/);

  // Limit to the first 9 words
  words = words.slice(0, 9);

  // Join the words with hyphens
  slug = words.join("-");

  // Remove or replace any special characters
  slug = slug.replace(/[^\w\-]+/g, "");

  // Remove multiple consecutive hyphens
  slug = slug.replace(/\-\-+/g, "-");

  // Trim hyphens from the start and end of the slug
  slug = slug.replace(/^-+/, "").replace(/-+$/, "");
  return slug;
};

module.exports = createSlug;
