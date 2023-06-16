import rehypeToc from '@jsdevtools/rehype-toc'
import { unified } from 'unified'
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkRehype from 'remark-rehype/lib';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import 'highlight.js/styles/github-dark.css'
import rehypeHighlight from 'rehype-highlight/lib';
import './index.css'
function unifiedTest(posts) {
    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeToc)
        .use(rehypeSlug)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        // .use(remarkStringify)
        .process(posts)
    // const result = String(processor);
    return processor
}

async function remarkTest() {
    const processor = remark()
        .process(content)
    const a = await processor;
    console.log(a)
}

// unifiedTest();

const res = await fetch("./posts/demo.md");
const post = await res.text();

const a = await unifiedTest(post);
console.log(a.value);

document.querySelector('#root').innerHTML = a.value;
