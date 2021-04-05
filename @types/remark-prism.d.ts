declare module "../lib/remark-prism/remark-prism/src" {
    import { Plugin } from "unified";
    type RemarkPrism = Plugin;
    const remarkPrism: RemarkPrism;
    export default remarkPrism;
}