const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export default function searchImage(options) {
  /*
    -- Possible methods --
    search
      .expression()
      .sort_by()
      .max_results()
      .next_cursor()
      .with_field()
  */
  return cloudinary.search.expression(options.expression).execute().then(result => result)
}