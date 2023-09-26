---
description: Contribution Guide
title: Contribution Guide
keywords:
- Contributor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Contribution-Guide
last_update:
  date: 03/01/2023
  author: Matthew
---

# Contribution(Pull Request) Guide



<strong><font color={'8DC215'} size={"5"}>Thanks for your efforts! <br /> Please follow steps below to complete your submission on GitHub.</font></strong>

## Before everything starts

- Please make sure you can [build the wiki platform page locally](/Deploy_Page_Locally)
- All files to be uploaded(pull request) should be placed in this path:
`/docs/Contribution/Contributors/file_transfer_station/"create a folder to store your files"`

## Step by Step submit the files to repository

Here are the detailed uploading steps.

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

Show us what you have edited and click "creat pull request" button to us.

![image7](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/7.jpg)

Thank you for your contributions!

## FAQ

### 1. Where do I keep the images?

You can simply place them in the same path as the .md file you changed, and then name them with number in the order they are used in the file.

Hint: Check the folder in ``"wiki-documents/docs/Contribution/Contributors/Deploy_Page_Locally/Deploy_Page_Locally.md"``
