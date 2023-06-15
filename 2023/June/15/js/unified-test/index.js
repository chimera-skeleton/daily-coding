import { unified } from 'unified'
import fs from 'fs';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
function read() {
    const demo = fs.readFileSync("./posts/demo.md", {
        encoding: "utf-8"
    })
    return demo
}

function processing() {
    const content = read();
    const processor = unified()
        .use(remarkParse)
        .use(remarkStringify)
        .process(content)
    processor.then( value => console.log(value.toString()))
}

const a = String("demo")

console.log(a)

// processing()
