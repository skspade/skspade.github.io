---
title: Generating Blog Posts from Markdown Part 1
createdDate: "2020-02-24"
updatedDate: "2020-06-08"
image: person-holding-piece-of-biscuit-with-milk-in-glass-3252138.jpeg
path: "/blog/generating-blog-posts-pt-1"
draft: false
tags: "tutorial,plop"
description: "We will be utilizing a nice CLI utility called plop that will help keep our Markdown metadata consistent."
---

## WTH is plop?

> “a small tool that gives you a simple way to generate code or any other type of flat text files in a consistent way”

It's a handy highly customizable CLI tools that allows you to generate code based on functions and questions you configure.
You can set up a CLI questionnaire that when you fill it out, and it will generate code based on the functions you write.

[Check it](https://github.com/plopjs/plop) out for yourself

## Step 1: Install plop

Add it your project with

```sh
yarn add plop
```

## Step 2: Prepare your directory

```dir
📦generators
┣ 📂templates
┃ ┗ 📜blog-post-md.template
┣ 📜blog-post-generator.js
┣ 📜plopfile.js
┗ 📜util.js
```

## Step 3: Add customer scripts to `package.json`

```JSON
{
    "scripts":{
        "generate": "plop --plopfile ./generators/plopfile.js",
        "generate-build": "plop --plopfile ./generators/plopfile.js && gatsby build"
    }
}
```

## Step 4: Create your `plopfile` index

`plopfile.js`
This is the "entry" file. This loads up all your generators.

```js
module.exports = plop => {
  plop.load("./blog-post-generator.js")
}
```

## Step 5: Create your generator

`blog-post-generator.js`

```js
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
    actions: data => {
      // Get current date
      data.createdDate = new Date().toISOString().split("T")[0]

      // Parse tags from yaml array
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
```

## Step 6: Create your template

The template files are a basic layout to insert the data into.  
For example:

---

title: {{title}}
createdDate: "{{createdDate}}"
updatedDate: "{{createdDate}}"
image: welcoming.png
draft: {{draft}}
description: "{{description}}"
tags: {{tags}}

---

Remember those variables we created prompts for in Step 5? This is where they will be inserted into when the file is generated.

That's it! That's all you need to get started generating files with plop.
I find it extremely useful for things like creating a new markdown file for blog posts. It ensures that the data structure is consistent.
Since Gatsby `remark` plugin parses this data out for the app to use.

[REF](https://dev.to/ekafyi/adding-generators-to-your-gatsby-site-with-plop-2gd5)
