const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const docsDirectory = path.join(__dirname, 'docs')
const wikiFilePath = path.join(__dirname, '/src/utils/wiki.js')

const docList = []

// 递归函数，用于遍历多层文件夹
function processDirectory(directory) {
  fs.readdirSync(directory).forEach((file) => {
    const filePath = path.join(directory, file)
    const fileStats = fs.statSync(filePath)

    if (fileStats.isDirectory()) {
      // 如果是文件夹，则递归处理
      processDirectory(filePath)
    } else if (fileStats.isFile() && path.extname(file) === '.md') {
      // 如果是 Markdown 文件
      const fileContents = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContents)

      // 判断是否有 date 字段
      if (data.last_update && data.last_update.date) {
        // 使用 slug 字段作为路径
        const slug = data.slug || '';
        docList.push({
          path: slug,
          image: data.image || '',
          title: data.title || '',
          date: data.last_update.date,
        })
      }
    }
  })
}

processDirectory(docsDirectory)

// 根据 date 字段进行降序排序
docList.sort((a, b) => new Date(b.date) - new Date(a.date))

// 获取最新的 12 条文档
const latestDocs = docList.slice(0, 12)

// 将文档信息按照每个子数组最多包含 2 个文档的方式重新组织
const docList2D = []
for (let i = 0; i < latestDocs.length; i += 2) {
  const subArray = latestDocs.slice(i, i + 2)
  docList2D.push(subArray)
}

// 生成 wiki.js 文件
const wikiContent = `const docList = ${JSON.stringify(
  docList2D,
  null,
  2,
)};\n\nexport default docList;`

fs.writeFileSync(wikiFilePath, wikiContent)

console.log('wiki.js 文件生成成功！')