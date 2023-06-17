import { unified } from 'unified';
import 'fs';
import 'remark';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';

// const content = read()

function unifiedTest(posts) {
    const processor = unified()
        .use(remarkParse)
        .use(remarkStringify)
        .process(posts);
    // const result = String(processor);
    return processor
}

// unifiedTest();

const res = await fetch("./posts/demo.md");
const post = await res.text();

const a = unifiedTest(post).value;
console.log(a);
