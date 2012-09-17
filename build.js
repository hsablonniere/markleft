var fs = require('fs');
var marked = require('marked');
var hljs = require('highlight.js');

// Various transformation utils

var transform = {
  commentLineFeeds: function (data) {
    return data
        .replace(/(<!-- (?:slide|\.).*? -->)\n([^\n])/g, '$1\n\n$2');
  },

  renderIframe: function (data) {
    return data
        .replace(/<!-- render iframe(?: : ([0-9]+))? -->(\n\n```.*?\n([\s\S.]*?)\n```)/g, function (all, height, markedCode, innerCode) {
          height = height || 300;

          return '<!-- .rendered-iframe -->' + markedCode + '\n\n' +
              '<iframe class="rendered-iframe" src="data:text/html,' +
              encodeURIComponent(innerCode) +
              '" height="' + height + 'px"></iframe>';
        });
  },

  highlight: function (data) {
    return data
        .replace(/```(.*?)\n([\s\S.]*?)\n```/g, function (all, lang, code) {
          if (lang != null && lang !== '') {
            // highlight.js doesn't recognize html but xml
            var hljsLang = /^x?html\d*$/.test(lang) ? 'xml' : lang;

            code = '<pre data-language="' + lang + '"><code class="language-' + lang + '">' + hljs.highlight(hljsLang, code).value + '</code></pre>';
          } else {
            code = '<pre><code class="language-unknown">' + hljs.highlightAuto(code).value + '</code></pre>';
          }

          return code;
        });
  },

  tocTiles: function (data, toc) {
    return data
        .replace(/<h2(.*?)>(.*?)<\/h2>/g, function (all, attributes, title) {
          var slug = title
              .toLowerCase()
              .trim()
              .replace(/[^a-z\d]/g, '-')
              .replace(/-+/g, '-')
              .replace(/-$/, '');
          toc.push({title: title, slug: slug});
          return '<h2' + attributes + ' id="' + slug + '">' + title + '</h2>';
        });
  },

  insertToc: function (data, toc) {
    var starToc = '<div class="toc well">\n<ul class="nav nav-list">\n<li class="nav-header">Table of contents</li>\n',
        htmlToc,
        endToc = '\n</ul>\n</div>';

    htmlToc = starToc + toc.map(this.mapToc).join('\n') + endToc;

    return data.replace(/<!-- toc -->/, htmlToc);
  },

  mapToc: function (title) {
    return '<li><a href="#' + title.slug + '">' + title.title + '</a></li>';
  },

  headAndMetas: function (data) {
    return data
        .replace(/<!-- title : (.*?) -->/, '<title>$1</title>')
        .replace(/<!-- author : (.*?) -->/, '<meta name="author" content="$1">')
        .replace(/<!-- description : (.*?) -->/, '<meta name="description" content="$1">')
        .replace(/<!-- keywords : (.*?) -->/, '<meta name="keywords" content="$1">');
  },

  dZSections: function (data) {
    return data
        .replace(/<!-- slide(?: : (.+))? -->\n/, '<section class="$1">')
        .replace(/<!-- slide(?: : (.+))? -->\n/g, '</section>\n\n<section class="$1">')
        .replace(/<section class="">/g, '<section>');
  },

  blockClasses: function (data) {
    return data
        .replace(/<!-- \.(.+?) -->(\n)*<(.+?)>/g, function (all, classes, lineBreaks, tagAndAttr) {
          classes = classes.replace(/\./g, ' ');
          return lineBreaks + '<' + tagAndAttr + ' class="' + classes + '">'
        });
  },

  outputLineFeeds: function (data) {
    return data
        .replace(/(\n)*<\/p>/g, '</p>')
        .replace(/<p>(<.*>)<\/p>/g, '$1');
  }
};

// Main transformation

var markleft = function (data, fileName) {
  var start = '<!DOCTYPE html>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width">\n',
      toc = [],
      end = data.indexOf('<!-- slide') ? '\n</section>' : '\n';

  data = transform.commentLineFeeds(data);
  data = transform.renderIframe(data);
  data = transform.highlight(data);

  // Standard markdown transformation
  data = marked(data);

  data = transform.tocTiles(data, toc);
  data = transform.insertToc(data, toc);
  data = transform.headAndMetas(data);
  data = transform.dZSections(data);
  data = transform.blockClasses(data);
  data = transform.outputLineFeeds(data);

  return start + data + end;
};

// Get things done NOW!

['prezas', 'labs']
    .forEach(function (outputDir) {
      var inputDir = outputDir + '-md';

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
      }

      fs.readdirSync(inputDir)
          .forEach(function (fileName) {
            var mdContents = fs.readFileSync(inputDir + '/' + fileName, 'utf-8'),
                htmlContents = markleft(mdContents, fileName);

            console.log(inputDir + '/' + fileName + ' updated ;-)');

            fs.writeFileSync(outputDir + '/' + fileName.replace(/\.md$/, ".html"), htmlContents);
          });
    });
