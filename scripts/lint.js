import { readFileSync } from 'node:fs'

const files = ['src/cart.js', 'test/cart.test.js', 'scripts/lint.js']
let hasErrors = false

for (const file of files) {
  const lines = readFileSync(file, 'utf8').split(/\r?\n/)

  for (const [index, line] of lines.entries()) {
    const lineNumber = index + 1

    if (line.includes('\t')) {
      console.error(`${file}:${lineNumber}: tabs are not allowed`)
      hasErrors = true
    }

    if (/\s+$/.test(line)) {
      console.error(`${file}:${lineNumber}: trailing whitespace is not allowed`)
      hasErrors = true
    }

    const indentation = line.match(/^ */)[0].length
    if (line.trim() && indentation % 2 !== 0) {
      console.error(`${file}:${lineNumber}: indentation must use multiples of two spaces`)
      hasErrors = true
    }

    if (/;\s*(?:\/\/.*)?$/.test(line)) {
      console.error(`${file}:${lineNumber}: semicolons are not allowed`)
      hasErrors = true
    }
  }
}

if (hasErrors) process.exitCode = 1
else console.log(`Style checks passed for ${files.join(', ')}`)
