# 06.15.2023
## javascript
### unified
#### Syntax tree
- tree --> whole document
- node --> unist node        JS Object with a field（type）
  - esast               JS
  - hast                HTML
  - mdast            Markdown
  - nlcst               Natural language
	- xast                 XML

- vfile
- MDX
- syntax-tree

#### Ecosystems
- parse text to a tree
- compile that tree back to text

- [rehype](https://github.com/rehypejs/rehype) (hast) — HTML
- [remark](https://github.com/remarkjs/remark) (mdast) — markdown
- [retext](https://github.com/retextjs/retext) (nlcst) — natural language

#### plugins
- 每一个ecosystem都有自己生态里的插件
- 还有公有的插件

#### in my opinion
- content
	- parse 
specifications     mdast, hast, nlcst...
processors           remark, rehype
- ast             
- result

``` javascript
import { getAllPostsName, getPostData } from '../../../lib/posts';
import hljs from 'highlight.js';
import style from './posts.module.css';
import 'highlight.js/styles/atom-one-dark.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Post({ postData }) {

    useEffect(() => {

        const toc = document.querySelector(".toc")

        const indexArr = document.querySelectorAll(`.${style.middle} h2, .${style.middle} h3`)

        const onThisPage = document.createElement("div")

        indexArr.forEach(index => {
            const tagName = index.tagName.toLowerCase()

            if (tagName === 'h2') {
                const html = `
                <div>
                    <a class='${style["toc-h2"]}' href='#${index.textContent.toLowerCase().replace(/\s/g, "-")}'>${index.textContent}</a>
                </div>
            `
                onThisPage.insertAdjacentHTML("beforeend", html)
            }

            if (tagName === 'h3') {
                const html = `
                <div>
                    <a class='${style["toc-h3"]}' href='#${index.textContent.toLowerCase().replace(/\s/g, "-")}'>${index.textContent}</a>
                </div>
            `
                onThisPage.insertAdjacentHTML("beforeend", html)
            }

        })

        console.log(onThisPage)

        toc.appendChild(onThisPage)

        return () => {
            toc.removeChild(onThisPage)
        }

    })

    console.log(postData)
    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <Link className={style.axios} href={"/"}>
                    <Image
                        src="/axios-color.svg"
                        alt='axios'
                        width={36}
                        height={36}
                    >
                    </Image>
                    <h2>Axios</h2>
                </Link>
                <div className={style.aside}>
                    <Link className={style.asideContent} href={"/posts/adapters"}>Adapters</Link>
                    <Link className={style.asideContent} href={"/posts/cancel"}>Cancel</Link>
                    <Link className={style.asideContent} href={"/posts/core"}>Core</Link>
                    <Link className={style.asideContent} href={"/posts/defaults"}>Defaults</Link>
                </div>
            </div>
            <article className={`${style.middle} md`}>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }}>
                </div>
            </article>
            <div className={style.right}>
                <div>On this page</div>
                <div className={`${style.sticky} toc`}></div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostsName()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
```
