---
description: 如何使用 Sketchbook
title: 如何使用 Sketchbook

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/How_To_Use_Sketchbook
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

在另一个文档中，我们详细介绍了库的使用，我们知道库真的很容易使用！下载一个库，将其放到 Arduino 库目录中，打开示例就可以工作了。

然而，有时我们会遇到这样的问题：你制作了一个有趣的演示，这个演示需要包含一些库，你想要分享这个演示，所以你需要将代码发送给一些人，但经常会出现编译错误问题：缺少某个库。所以你需要将库发送给他。如果你的演示需要很多库，这些问题会更多。

实际上，Arduino 有一个 Sketchbook 可以很好地解决这个问题。Sketchbook 实际上是一个文件夹，你可以将它放在任何地方。这里我们将尝试使用 Sketchbook。

我写了一个 Sketchbook，你可以在[这里](https://github.com/loovee/NFC_ShieldBot_Demo)下载，
忽略其内容；我们的目的是让你熟悉 Sketchbook。下载后，我们将其放到 F 盘。

打开 Arduino IDE，点击 File-> Preferences，点击弹出的屏幕：

![](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/img/Sketchbook1.jpg)

将 Sketchbook location 指向下载代码的目录。点击 OK 完成操作。关闭并重新打开 Arduino IDE。

打开 File -> Sketchbook，你可以看到弹出很多项目，如 demo、shield_bot 等等。我们点击 demo，然后你可以打开它，现在你可以看到 demo 的代码。你可以发现这个 demo 包含很多你之前没有见过的库。然后我们点击编译按钮，成功且没有错误，奇怪吗？实际上，你可能已经注意到，在 NFC_Shieldbot_Demo 中有一个名为 libraries 的文件夹，是的，库就在这里。

![](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/img/Sketchbook2.jpg)

因此，当你想要制作一个演示时，你可以尝试构建一个 Sketchbook，并将所需的库放到 Sketchbook 的 libraries 文件夹中。就像你几分钟前下载的 Sketchbook 一样：

![](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/img/Sketchbook3.jpg)

###   资源

- [下载 pdf 文件](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/res/How_to_use_Sketchbook.pdf)

## 技术支持与产品讨论
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>