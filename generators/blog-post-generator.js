const { inputRequired } = require("./util")

module.exports = plop => {
  plop.setGenerator("blog post", {
    prompts: [
      {
        type: "input",
        name: "title",
        message: "Blog post title?",
        validate: inputRequired("title"),
      },
      {
        type: "input",
        name: "description",
        message: "Enter a tiny description about your post",
        validate: inputRequired("description"),
      },
      {
        type: "input",
        name: "tags",
        message: "tags? (separate with coma)",
      },
      {
        type: "confirm",
        name: "draft",
        message: "Is it a draft?",
      },
    ],
    actions: data => {
      // Get current date
      data.createdDate = new Date().toISOString().split("T")[0]
      // Parse tags as yaml array
      // if (data.tags) {
      //   data.tags = `\ntags:\n  - ${data.tags.split(",").join("\n  - ")}`
      // }

      return [
        {
          type: "add",
          path: "../data/blog/{{createdDate}}--{{dashCase title}}/index.md",
          templateFile: "templates/blog-post-md.template",
        },
      ]
    },
  })
}
