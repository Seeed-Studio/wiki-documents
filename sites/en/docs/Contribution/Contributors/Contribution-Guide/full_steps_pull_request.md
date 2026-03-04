---
description: How To - Quick Streamlined
title: Full Steps Pull Request
keywords:
- Contributor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /full_steps_pull_request
last_update:
  date: 09/01/2024
  author: Matthew
---

### Thank you for considering to contribute to our seeed-studio files!

This streamlined contribution process, is to be able to offer full steps to PR the files. If you just want to add md file and images, you can check [here](/quick_pull_request).


## Step by Step submit the files to repository

### Prerequisite: `git clone` repo and deploy the websites locally

<strong><a href="/Deploy_Page_Locally"><span><font color={'8DC215'} size={"4"}>You can deploy the website locally and see the changes by clicking here!</font></span></a></strong>

### 1. Bring your forked branch up to date

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/1.jpg" /></div>

### 2. Update the downloaded files

Use the code below and update the downloaded files.

```
git checkout docusaurus-version
git pull
```

### 3. Modify the contents of existed files

All the files on the wiki platform are stored in the "docs" folder.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/2.jpg" /></div>

:::note
The name of file you want to change usually is the last part of the url(take Seeed Studio XIAO ESP32C3 as an example).
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/3.jpg" /></div>
:::

#### If you are going to add files

Store all added files(The markdown files and pictures) in the "Contributor_Files" folder:

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/wiki-platform/contributor/files_stored.png" alt="pir" width={800} height="auto" /></p>


### 4. Check the files changed locally

Once you done updating, you can use the command below to see whether it shows fine.

```
yarn start
```

On the edit platform:

![image4](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/4.jpg)

On the local page:

![image5](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/5.jpg)

### 5. Save and push the changes to your forked github repository


If all is ok, you can use the command below to push the changes to your forked github repository.

```
git add "the files that you changed"
git commit -m "Update：I have updated ..."
git push
```

### 5. Pull request to the Seeed Studio Repository

Once you have pushed the changes to your github repository, there is a column showing up automatically. Click the "Compare & Pull Request" button:

![image6](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/6.jpg)

Show us what you have edited and click "create pull request" button to us.

![image7](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/7.jpg)

Thank you for your contributions!