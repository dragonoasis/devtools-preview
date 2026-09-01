const e="Markdown Preview & Editor",t="Free online Markdown editor with live preview. Write and preview Markdown with GFM support, tables, code blocks, and more — all in your browser.",n=`# Hello Markdown

This is a **live preview** editor. Type on the left and see the rendered output on the right.

## Features

- **Bold**, *italic*, ~~strikethrough~~
- [Links](https://example.com)
- Inline \`code\` and code blocks

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

## Lists

1. First item
2. Second item
3. Third item

- Unordered item
- Another item

## Blockquote

> This is a blockquote.
> It can span multiple lines.

## Table

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

---

That's it! Start editing to see the preview update in real time.
`,o="lines",r="words",i="Markdown",s="Type Markdown here...",a="Preview",d={heading:"What Is a Markdown Editor?",content:"A Markdown editor lets you write content in Markdown syntax and instantly see the rendered HTML output. Markdown is a lightweight markup language created by John Gruber that uses plain text formatting syntax. It's widely used for documentation (README files), blogs, forums, and note-taking. This tool provides a side-by-side editing and preview experience with support for headings, bold/italic text, links, images, code blocks, tables, and more."},l={heading:"How to Use the Markdown Editor",steps:["Type or paste your Markdown content in the editor on the left.","The rendered HTML preview updates in real time on the right.","Use standard Markdown syntax: # for headings, ** for bold, * for italic, etc.","Copy the raw Markdown or the rendered HTML using the copy buttons.","The word and line counts are displayed above the editor."]},c={heading:"Common Use Cases",items:[{title:"README Authoring",description:"Write and preview GitHub README.md files before committing, ensuring formatting looks correct."},{title:"Blog Post Drafting",description:"Draft blog posts in Markdown and preview the rendered output before publishing to your CMS."},{title:"Documentation Writing",description:"Write technical documentation with code examples, tables, and structured headings."}]},h=[{question:"Does this support GitHub Flavored Markdown (GFM)?",answer:"Yes, the editor supports most GFM features including tables, fenced code blocks, strikethrough, and auto-linked URLs."},{question:"Is HTML allowed in the Markdown input?",answer:"Raw HTML is disabled for security reasons. The editor renders only standard Markdown syntax to prevent XSS vulnerabilities."},{question:"Can I export the rendered HTML?",answer:"Yes, use the copy button next to the preview panel to copy the generated HTML to your clipboard."}],u=["diff-viewer","text-case-format-converter"],p={title:e,description:t,markdownSample:n,lines:o,words:r,markdown:i,markdownPlaceholder:s,preview:a,whatIs:d,howToUse:l,useCases:c,faq:h,relatedTools:u};export{p as default,t as description,h as faq,l as howToUse,o as lines,i as markdown,s as markdownPlaceholder,n as markdownSample,a as preview,u as relatedTools,e as title,c as useCases,d as whatIs,r as words};
