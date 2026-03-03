---
description: Deploy Wiki Platform Locally
title: Deploy Wiki Platform Locally
keywords:
- Contribution
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Deploy_Page_Locally
last_update:
  date: 3/14/2023
  author: Matthew
---

# Deploy Wiki Platform Locally

### 1. Fork and Download the Repository

a. Please visit the [Seeed Studio Wiki Platform's Github Repository](https://github.com/Seeed-Studio/wiki-documents/tree/docusaurus-version) and then `fork` the 'wiki-documents' repository of your own.

![image1](./1.jpg)

b. Download the files into your local PC. If you don't have `git` you can download [here](https://git-scm.com/).

```
git clone {your repository}
```

![image2](./2.jpg)

### 2. Download node.js

Please download the [node.js](https://nodejs.org/en/download/) according to your operating system(Windows, Mac).

Please install the `v20.18.1 (LTS)` version of nodejs, otherwise errors may occur during the installation process.

### 3. Download Visual Studio Code

Please download the [Visual Studio Code](https://code.visualstudio.com/Download) according to your operating system(Windows, Mac).

### 4. Install Yarn

Open the "Visual Studio Code" and use the followling command to install Yarn.

```
npm install --global yarn
```

For further information, please check [here](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).

### 5. Automatically install dependencies using Yarn

```
yarn
```

For people using Windows operating system, please change "Powershell" to "Command Prompt(cmd)" and then execute `yarn`.

### 6. Build the wiki patform locally using Yarn

```
yarn start
```

![image3](./3.jpg)

### 7. Now You can do the changes or add the files

- [Full steps to PR](/full_steps_pull_request)
- [Quick steps to PR](/quick_pull_request)
