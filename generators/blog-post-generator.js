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
        name: "tags",
        message: "tags? (separate with coma)",
      },
      {
        type: "confirm",
        name: "draft",
        message: "Is it a draft?",
      },
    ],
    //TODO Add a parameter to generate a path from the title
    actions: data => {
      // Get current date
      data.createdDate = new Date().toISOString().split("T")[0]

      // Parse tags as yaml array
      if (data.tags) {
        data.tags = `\ntags:\n  - ${data.tags.split(",").join("\n  - ")}`
      }

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
