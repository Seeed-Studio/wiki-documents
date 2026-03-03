---
description: 如何操作 - 快速简化流程
title: 完整步骤提交 Pull Request
keywords:
- 贡献者
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/full_steps_pull_request
last_update:
  date: 09/01/2024
  author: Matthew
---

### 感谢您考虑为我们的 Seeed Studio 文件做出贡献！

此简化的贡献流程旨在提供完整的步骤来提交文件的 PR。如果您只想添加 Markdown 文件和图片，可以查看[这里](/cn/quick_pull_request)。

## 按步骤将文件提交到仓库

### 前提条件：`git clone` 仓库并在本地部署网站

<strong><a href="/cn/Deploy_Page_Locally"><span><font color={'8DC215'} size={"4"}>点击这里，您可以在本地部署网站并查看更改！</font></span></a></strong>

### 1. 更新您的 fork 分支

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/1.jpg" /></div>

### 2. 更新下载的文件

使用以下代码更新下载的文件。

```
git checkout docusaurus-version
git pull
```

### 3. 修改现有文件的内容

Wiki 平台上的所有文件都存储在 "docs" 文件夹中。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/2.jpg" /></div>

:::note
您想要更改的文件名通常是 URL 的最后一部分（以 Seeed Studio XIAO ESP32C3 为例）。
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/3.jpg" /></div>
:::

#### 如果您打算添加文件

将所有新增文件（Markdown 文件和图片）存储在 "Contributor_Files" 文件夹中：

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/wiki-platform/contributor/files_stored.png" alt="pir" width={800} height="auto" /></p>

### 4. 本地检查更改的文件

完成更新后，您可以使用以下命令查看是否显示正常。

```
yarn start
```

在编辑平台上：

![image4](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/4.jpg)

在本地页面上：

![image5](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/5.jpg)

### 5. 保存并将更改推送到您的 forked GitHub 仓库

如果一切正常，您可以使用以下命令将更改推送到您的 forked GitHub 仓库。

```
git add "您更改的文件"
git commit -m "更新：我已更新 ..."
git push
```

### 6. 提交 Pull Request 到 Seeed Studio 仓库

一旦您将更改推送到您的 GitHub 仓库，将会自动显示一个栏目。点击 "Compare & Pull Request" 按钮：

![image6](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/6.jpg)

向我们展示您编辑的内容并点击 "create pull request" 按钮。

![image7](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/7.jpg)

感谢您的贡献！