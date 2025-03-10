const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const docsDirectory = path.join(__dirname, 'docs')
const wikiFilePath = path.join(__dirname, '/src/utils/wiki.js')

const docList = []
const excludedPaths = [
  path.join(docsDirectory, 'Seeed_Elderly', 'weekly_wiki'), // weekly wiki 的历史目录
  path.join(docsDirectory, 'zh-CN'), // 排除中文文档的目录
  path.join(docsDirectory, 'Spanish'), // 排除西班牙语文档的目录
  path.join(docsDirectory, 'weekly_wiki.md'), // 排除 weekly wiki 的文件
  path.join(docsDirectory, 'Edge', 'Raspberry_Pi_Devices', 'RpiDevices.md'),
  

  path.join(docsDirectory, 'Edge', 'NVIDIA_Jetson', 'FAQs', 'How_to_Upgrade_Software_Packages_for_Jetson.md'), // 排除指定文档
  path.join(docsDirectory, 'Edge', 'reCamera', 'reCamera 2002 Series', 'software', 'develop_with_c_cpp.md'),
  path.join(docsDirectory, 'Edge', 'reCamera', 'reCamera 2002 Series', 'software', 'linux_fundamentals.md'),
  path.join(docsDirectory, 'Edge', 'reCamera', 'reCamera 2002 Series', 'ai_model_deployment', 'on_device_model.md'),
];

// 递归函数，用于遍历多层文件夹
function processDirectory(directory) {

  // 如果当前目录是要排除的路径，则跳过
  if (excludedPaths.includes(directory)) {
    return;
  }

  fs.readdirSync(directory).forEach((file) => {
    const filePath = path.join(directory, file)
    const fileStats = fs.statSync(filePath)

    // 如果文件或文件夹在排除列表中，则跳过
    if (excludedPaths.includes(filePath)) {
      return;
    }

    if (fileStats.isDirectory()) {
      // 如果是文件夹，则递归处理
      processDirectory(filePath)
    } else if (fileStats.isFile() && path.extname(file) === '.md') {
      // 如果是 Markdown 文件
      const fileContents = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContents)

      // 1. 去除 YAML 头部
      const markdownWithoutYaml = content.replace(/^---[\s\S]+?---\s*/, '')

      // 2. 去除所有代码块（包括以 ``` 开头的块）
      const markdownWithoutCodeBlocks = markdownWithoutYaml.replace(/```[\s\S]*?```/g, '')

      // 优先查找第一个一级标题（以 # 开头的行）
      const titleMatch = markdownWithoutCodeBlocks.match(/^#\s+(.*)/m)
      const title = titleMatch ? titleMatch[1].trim() : (data.title || '')

      // 3. 获取文件的 path（优先使用 slug，如果没有 slug，则根据路径生成）
      let filePathRelative = path.relative(docsDirectory, filePath); // 计算相对路径
      filePathRelative = filePathRelative.replace(/\\/g, '/'); // 将反斜杠换成正斜杠
      const slug = data.slug || filePathRelative.replace('.md', ''); // 如果没有 slug，则使用相对路径

      // 判断是否有 date 字段
      if (data.last_update && data.last_update.date) {
        docList.push({
          path: slug,
          image: data.image || '',
          title: title,
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
