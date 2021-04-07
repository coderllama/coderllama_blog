// import remark from 'remark'
// import html from 'remark-html'
// import prism from 'remark-prism'

// export default async function markdownToHtml(markdown:string ) {
//   const result = await remark().use(prism).use(html).process(markdown)
//   return result.toString()
// }

const markdownToHtml = async (markdown:string):Promise<any> => {
  const x = await require('unified')()
  .use(require('remark-parse'))
  .use(require('remark-stringify'))
  .use(require('remark-prism'), {
    plugins: [
      'line-numbers',
      'treeview',
    ]
  })
  .use(require('remark-html'))
  .process(markdown);

  return x.toString()
}

export default markdownToHtml