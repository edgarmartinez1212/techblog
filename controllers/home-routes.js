const router = require("express").Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  const postData = await Post.findAll().catch((error) => {
    res.json(error);
  });

  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("all", { posts });
});

module.exports = router;
