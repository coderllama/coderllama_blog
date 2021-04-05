import remark from 'remark'
import html from 'remark-html'
import prism from 'prismjs'

export default async function markdownToHtml(markdown:any ) {
  const withPrism = prism.highlight( markdown.toString(), prism.languages.javascript, 'javascript');
  const result = await remark().use(html).process(withPrism)
  return result
}
