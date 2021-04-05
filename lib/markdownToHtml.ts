import remark from 'remark'
import html from 'remark-html'
import prism from './remark-prism/remark-prism/src'

export default async function markdownToHtml(markdown:any ) {
  // const withPrism = prism.highlight( markdown.toString(), prism.languages.javascript, 'javascript');
  const result = await remark().use(prism).use(html).process(markdown)
  return result.toString()
}

//  export default async function markdownToHtml(markdown:any ) {
//    const r = await require('unified')()
//      .use(require('remark-parse'))
//      .use(require('remark-stringify'))
//      .use(require('remark-prism'), {
//        /* options */
//      })
//      .use(require('remark-html'))
//      .process(markdown);


//   return r.toString()
// }
