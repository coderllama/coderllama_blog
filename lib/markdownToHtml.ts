import remark from 'remark'
import html from 'remark-html'
import prism from 'prismjs'

export default async function markdownToHtml(markdown:any ) {
  const result = await remark().use(html).process(markdown)
  const withPrism = prism.highlight( result.toString(), prism.languages.javascript, 'javascript');
  return withPrism
}
