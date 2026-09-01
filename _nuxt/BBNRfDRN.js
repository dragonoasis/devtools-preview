const n="Markdown 编辑器与预览",e="免费在线 Markdown 编辑器，支持实时预览。支持 GFM 表格、代码块等，所有操作在浏览器中完成。",o=`# 你好 Markdown

这是一个**实时预览**编辑器。在左侧输入内容，右侧会显示渲染结果。

## 功能

- **粗体**、*斜体*、~~删除线~~
- [链接](https://example.com)
- 行内 \`code\` 和代码块

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

## 列表

1. 第一项
2. 第二项
3. 第三项

- 无序项
- 另一项

## 引用

> 这是一段引用。
> 它可以跨多行。

## 表格

| 表头 1 | 表头 2 | 表头 3 |
|--------|--------|--------|
| 单元格 1 | 单元格 2 | 单元格 3 |
| 单元格 4 | 单元格 5 | 单元格 6 |

---

就是这样！开始编辑即可实时查看预览。
`,w="行",l="词",t="Markdown",s="在此输入 Markdown...",k="预览",r={heading:"什么是Markdown 编辑器与预览？",content:"免费在线 Markdown 编辑器，支持实时预览。支持 GFM 表格、代码块等，所有操作在浏览器中完成。它把输入、选项、预览和输出放在同一页面，方便边修改边检查最终结果。适合整理文本、生成可复制内容以及核对字符和标记结构。"},a={heading:"如何使用Markdown 编辑器与预览",steps:["先填写“Markdown”中的必要内容。","按需修改选项或补充输入，结果会随着页面状态自动更新。","在“预览”中查看结果。 确认无误后可直接复制。"]},d={heading:"Markdown 编辑器与预览的常见使用场景",items:[{title:"整理可复制文本",description:"把原始文本转换成适合粘贴到文档、工单、代码注释或网站内容中的格式。"},{title:"文档与内容制作",description:"在写 README、文章、富文本或表格时，快速生成更整洁、可预览的结果。"},{title:"理解字符与编码",description:"遇到字符显示异常、转义问题或格式不统一时，先检查底层表示和统计信息。"}]},c=[{question:"页面里的预览或输出和最终平台效果会完全一致吗？",answer:"不一定。此处结果以当前浏览器和工具的解析逻辑为准，最终渲染仍可能受到目标平台、样式环境、客户端实现或文件查看器差异影响。"},{question:"我可以复制或导出什么内容？",answer:"通常可以直接复制结果区中的文本，部分页面还提供下载或更具体的输出格式。实际可用内容以当前页面展示的按钮和结果区域为准。"}],i=["diff-viewer","text-case-format-converter"],M={title:n,description:e,markdownSample:o,lines:"行",words:"词",markdown:t,markdownPlaceholder:s,preview:"预览",whatIs:r,howToUse:a,useCases:d,faq:c,relatedTools:i};export{M as default,e as description,c as faq,a as howToUse,w as lines,t as markdown,s as markdownPlaceholder,o as markdownSample,k as preview,i as relatedTools,n as title,d as useCases,r as whatIs,l as words};
