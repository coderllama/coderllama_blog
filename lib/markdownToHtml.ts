// import remark from 'remark'
// import html from 'remark-html'
// import prism from 'prismjs'

// export default async function markdownToHtml(markdown:any ) {
//   const withPrism = prism.highlight( markdown.toString(), prism.languages.javascript, 'javascript');
//   const result = await remark().use(html).process(withPrism)
//   return result.toString()
// }

 export default async function markdownToHtml(markdown:any ) {
   const r = await require('unified')()
     .use(require('remark-parse'))
     .use(require('remark-stringify'))
     .use(require('remark-prism'), {
       /* options */
     })
     .use(require('remark-html'))
     .process(markdown, (err: any, file: any) => console.log(String(file)));


  return r.toString()
}
