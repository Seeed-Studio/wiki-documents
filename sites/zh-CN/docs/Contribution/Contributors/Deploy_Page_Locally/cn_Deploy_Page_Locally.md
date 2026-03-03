---
description: 本地部署 Wiki 平台
title: 本地部署 Wiki 平台
keywords:
- 贡献
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Deploy_Page_Locally
last_update:
  date: 2023/3/14
  author: Matthew
---

# 本地部署 Wiki 平台

### 1. Fork 并下载仓库

a. 请访问 [Seeed Studio Wiki 平台的 Github 仓库](https://github.com/Seeed-Studio/wiki-documents/tree/docusaurus-version)，然后 `fork` 您自己的 'wiki-documents' 仓库。

![image1](./1.jpg)

b. 将文件下载到您的本地电脑。如果您没有安装 `git`，可以从[这里](https://git-scm.com/)下载。

```
git clone {your repository}
```

![image2](./2.jpg)

### 2. 下载 node.js

请根据您的操作系统（Windows, Mac）下载 [node.js](https://nodejs.org/en/download/)。

请安装 `v20.18.1 (LTS)` 版本的 node.js，否则在安装过程中可能会出现错误。

### 3. 下载 Visual Studio Code

请根据您的操作系统（Windows, Mac）下载 [Visual Studio Code](https://code.visualstudio.com/Download)。

### 4. 安装 Yarn

打开 "Visual Studio Code"，并使用以下命令安装 Yarn。

```
npm install --global yarn
```

更多信息，请查看[这里](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)。

### 5. 使用 Yarn 自动安装依赖

```
yarn
```

对于使用 Windows 操作系统的用户，请将 "Powershell" 更改为 "命令提示符(cmd)"，然后执行 `yarn`。

### 6. 使用 Yarn 本地构建 Wiki 平台

```
yarn start
```

![image3](./3.jpg)

### 7. 现在您可以进行更改或添加文件

- [PR 的完整步骤](/cn/full_steps_pull_request)
- [PR 的快速步骤](/cn/quick_pull_request)