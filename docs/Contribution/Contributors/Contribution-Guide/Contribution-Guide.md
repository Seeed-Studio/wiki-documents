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

## Step by Step Modify Files

Before modifying the existed files, please make sure you can [build the wiki platform page locally](/Deploy_Page_Locally)

### 1. Bring your forked branch up to date

![image1](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/1.jpg)

### 2. Update the downloaded files
https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/
```
git checkout main
git pull
```

### 3. Modify the contents of existed files

All the files on the wiki platform are stored in the "docs" folder.

![image2](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/2.jpg)

And the name of file you want to change usually is the last part of the url(take Seeed Studio XIAO ESP32C3 as an example).

![image3](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/3.jpg)

Once you done updating, you can use the command below to see whether it shows fine.

```
yarn start
```

On the edit platform:

![image4](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/4.jpg)

On the local page:

![image5](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/5.jpg)

### 4. Save and push the changes to your forked github repository

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
