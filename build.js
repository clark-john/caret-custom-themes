const { compile } = require('sass')
const { 
	writeFileSync, 
	mkdirSync, 
	readdirSync,
	accessSync 
} = require('fs')

/**
 * Compilation of .scss files at themes folder
 * 
 * @author John Clark <john_cl4rk@yahoo.com>
*/

try {
	accessSync('./dist')
} catch(_) {
	mkdirSync('./dist')
}

for (let x of readdirSync('./themes/')) {
	x = x.substring(0, x.length - 5)
	const result = compile(`./themes/${x}.scss`)
	writeFileSync(`./dist/${x}.css`, result.css)
}
