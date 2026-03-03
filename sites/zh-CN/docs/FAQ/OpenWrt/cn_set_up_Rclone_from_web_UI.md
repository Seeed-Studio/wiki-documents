---
description: OpenWrt-FAQ
title: 如何通过 Web UI 设置 Rclone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/set_up_Rclone_from_web_UI
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q3: 我无法通过 Web UI 成功设置 Rclone -->

Rclone 是一个用于管理云存储驱动器上文件的程序。您可以使用它确保云文件与本地存储始终保持同步。

尽管 OpenWrt Luci 界面中提供了一个 UI 来配置 Rclone，但您需要首先在命令行中完成所有配置。之后，您才能通过 Web UI 查看文件。

请按照以下步骤操作：

- **步骤 1.** 访问 **OpenWrt Luci Web UI** 并导航到 `Services > Terminal`

- **步骤 2.** 使用您的 OpenWrt 凭据登录

- **步骤 3.** 输入以下命令启动 **rclone 配置过程**

```sh
rclone config
```

- **步骤 4.** 按 **n** 然后按 **Enter** 创建一个新的远程连接。

- **步骤 5.** 输入您选择的新远程连接的名称

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-1.1.png" alt="pir" width="600" height="auto"/></p>

- **步骤 6.** 找到您要创建远程连接的 **存储类型**，并从列表中输入相应的编号

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-2.png" alt="pir" width="450" height="auto"/></p>

**注意：** 此处以 **Google Drive** 为例，选择编号 **13**

- **步骤 7.** 当提示输入 **Client ID** 时，按 **Enter** 接受默认值

- **步骤 8.** 当提示输入 **Client Secret** 时，按 **Enter** 接受默认值

- **步骤 9.** 选择 **1** 作为 rclone 请求访问驱动器时使用的范围

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-3.png" alt="pir" width="550" height="auto"/></p>

**注意：** 这将授予对驱动器中所有文件的完全访问权限

- **步骤 10.** 当提示输入 **root folder ID** 时，按 **Enter** 接受默认值

- **步骤 11.** 当提示输入 **service account credentials JSON 文件路径** 时，按 **Enter** 接受默认值

- **步骤 12.** 在 **Edit advanced config** 提示时，按 **Enter**，默认选择 **No**

- **步骤 13.** 在 **Use auto config** 菜单中，按 **n** 然后按 **Enter**

- **步骤 14.** 将显示的链接复制并粘贴到浏览器中

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-4.png" alt="pir" width="500" height="auto"/></p>

- **步骤 15.** 登录您的 Google 账户并点击 **允许** 访问

- **步骤 16.** **复制** Google 登录页面上显示的代码，并将其 **粘贴** 到之前使用的命令行中

- **步骤 17.** 在 **Configure as a team drive** 提示时，按 **Enter** 接受默认值

- **步骤 18.** 按 **Enter** 确认远程连接的创建

您将看到如下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-5.png" alt="pir" width="300" height="auto"/></p>

- **步骤 19.** 输入 **q** 退出配置

- **步骤 20.** 导航到 `NAS > Rclone`，勾选 **run Rclone as daemon**，然后点击 **SAVE & APPLY**

- **步骤 21.** 复制 **rclone 地址**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-6.png" alt="pir" width="600" height="auto"/></p>

- **步骤 22.** 点击 **WEBUI REACT**，将打开一个新网页

- **步骤 23.** 将之前复制的 **rclone 地址** 粘贴到第一个空白列中

- **步骤 24.** 输入 **admin** 作为用户名和密码，然后点击 **Verify**

如果连接验证成功，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-7.png" alt="pir" width="300" height="auto"/></p>

- **步骤 25.** 点击 **Login** 并从侧边菜单中进入 **Explore**

- **步骤 26.** 输入我们之前创建的远程连接名称并点击 **Open**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-8.png" alt="pir" width="1000" height="auto"/></p>

现在，您将看到驱动器中可用的所有文件。