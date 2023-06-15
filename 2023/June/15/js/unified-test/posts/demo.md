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