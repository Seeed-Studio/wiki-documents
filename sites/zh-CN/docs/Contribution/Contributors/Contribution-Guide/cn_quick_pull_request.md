---
description: 如何操作 - 快速简化流程
title: 快速提交 Pull Request
keywords:
- 社区
- 项目
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/quick_pull_request
last_update:
  date: 09/01/2024
  author: Matthew
---

### 感谢您考虑为我们的 Seeed Studio 文件做出贡献！

此简化的贡献流程旨在快速提交文件的 PR（无需在本地部署网站）。如果您希望在本地检查更改或新增页面，可以点击[这里](/cn/full_steps_pull_request)。

## 一键代码操作

假设您只需添加 Markdown 文件和图片：

1. 请访问 [Seeed Studio Wiki 平台的 GitHub 仓库](https://github.com/Seeed-Studio/wiki-documents/tree/docusaurus-version)，然后 `fork` 您自己的 'wiki-documents' 仓库。

2. 一次性复制所有代码并运行以下命令（记得将 `{your repo}` 替换为您 fork 的仓库）：

:::tip
例如，如果我的 GitHub 用户名是 `MatthewJeffson`，我的第一条命令是：`git clone --no-checkout --depth 1 https://github.com/MatthewJeffson/wiki-documents.git`
:::

```bash
git clone --no-checkout --depth 1 https://github.com/{your repo}}/wiki-documents.git
cd wiki-documents
git sparse-checkout init --cone
git sparse-checkout set sidebars.js docs 
git switch docusaurus-version
git pull origin docusaurus-version
```

在您的电脑中会生成一个名为 "wiki-documents" 的文件夹。

2. 将所有文件（Markdown 文件和图片）存储在 "Contributor_Files" 文件夹中：

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/wiki-platform/contributor/files_stored.png" alt="pir" width={800} height="auto" /></p>

3. 运行以下命令将所有文件推送到 GitHub：

```
git add .
git commit -m "Add new document"
git push origin docusaurus-version
```

4. 在您的仓库中点击 "Pull Request"，一切就完成了。

<strong><font color={'8DC215'} size={"5"}>完成！</font></strong>

## 分步介绍及自动检查

以下是上述流程的详细介绍，并包含自动检查代码的说明。

1. 首先，使用以下命令克隆仓库：

   ```
   git clone --no-checkout --depth 1 https://github.com/Seeed-Studio/wiki-documents.git
   ```

   这里我们使用了两个选项：
   - `--no-checkout`：克隆仓库时不检出任何文件，仅获取仓库的元数据。这可以加快克隆过程。
   - `--depth 1`：仅克隆文件和元数据的最新提交，不获取完整的历史记录。这进一步减少了下载的数据量。

2. 克隆完成后，进入仓库目录：

   ```
   cd wiki-documents
   ```

3. 接下来，启用 Git 的稀疏检出功能：

   ```
   git sparse-checkout init --cone
   ```

   稀疏检出允许仅检出仓库中的部分文件，而不是整个仓库。`--cone` 选项启用了锥形模式，支持更灵活的路径匹配。

4. 然后，配置稀疏检出的规则：

   ```
   git sparse-checkout set sidebars.js docs
   ```

   此命令告诉 Git 仅检出 `sidebars.js` 文件和 `docs` 目录。`sidebars.js` 是 Docusaurus 的配置文件，而 `docs` 目录包含所有的 Markdown 文档。

5. 配置稀疏检出规则后，切换到 `docusaurus-version` 分支：

   ```
   git switch docusaurus-version
   ```

   这一步是必要的，因为文档的开发和维护都在这个分支上进行。

6. 切换到目标分支后，拉取配置的文件和目录：

   ```
   git pull origin docusaurus-version
   ```

   此命令从远程仓库的 `docusaurus-version` 分支中拉取最新的 `sidebars.js` 和 `docs`。

7. 现在，贡献者可以在 `docs` 目录中添加新的 Markdown 文件，并修改 `sidebars.js` 文件以添加新文档的路径。

8. 添加新文档后，使用 Lint Markdown 工具检查新文件的语法：

   ```
   npm install -g @lint-md/cli
   npx @lint-md/cli docs/new-file.md
   ```

   如果新文件中存在任何语法错误或不符合规范的地方，Lint Markdown 会提供提示。贡献者可以根据提示进行修改，直到没有错误信息为止。

9. 如果贡献者希望自动修复一些常见的语法错误，可以使用 `--fix` 选项：

   ```
   npx @lint-md/cli docs/new-file.md --fix
   ```

   此命令会自动修复一些常见的格式问题，例如中英文之间缺少空格、错误使用省略号等。

10. 最后，完成所有修改后，贡献者可以提交更改并推送到远程仓库：

    ```
    git add .
    git commit -m "Add new document"
    git push origin docusaurus-version
    ```

    至此，新文档已成功添加到远程仓库的 `docusaurus-version` 分支。

通过在第 8 和第 9 步中使用 Lint Markdown 工具，我们可以确保新添加的文档符合规范，从而提高文档的整体质量和一致性。

这种简化的贡献流程结合稀疏检出和 Lint Markdown 工具，优化了贡献者的工作流程，使其更加高效和用户友好。