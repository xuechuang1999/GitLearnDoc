({
  // Please visit the URL below for more information:
  // https://shd101wyy.github.io/markdown-preview-enhanced/#/extend-parser

  onWillParseMarkdown: async function(markdown) {
    return markdown;
  },

  onDidParseMarkdown: async function(html) {
    return html;
  },
  onWillParseMarkdown: function(markdown) {
    return new Promise((resolve, reject)=> {
      markdown = markdown.replace(/\!\[([1-9]?[1-9]?[0-9])\%\]\(([\w\W]+?)\)/gm, (c0, c1,c2) =>'\<img style\=\"width: '+c1+'\%\" src\=\"'+c2+'\"  alt=\"\" align\=center \/\>');
      return resolve(markdown)
    })
  },
})

