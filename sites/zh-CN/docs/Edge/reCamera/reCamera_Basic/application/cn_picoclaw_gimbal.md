---
title: 在 reCamera 上本地部署 Picoclaw
description: 本应用案例演示了在 reCamera 上本地部署 Picoclaw 的流程与应用。
keywords:
  - reCamera
  - Edge AI
slug: /recamera_picoclaw
sku: 100029708
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_turn_led.gif
sidebar_position: 11
last_update:
  date: 2026-06-24
  author: Sizhao zhou
createdAt: '2026-06-24'
updatedAt: '2026-06-24'
url: https://wiki.seeedstudio.com/cn/reCamera/reCamera_Basic/application/recamera_picoclaw/
---


## 1. 介绍
我们相信很多人都想在 reCamera 上实现自己的想法，但由于缺乏编程能力而无法实现。虽然我们提供了对新手非常友好的 node-red，但其功能相对简单，无法满足复杂需求。为了解决这些需求，我们提供了一个在 reCamera 上本地部署 Picoclaw 的案例。通过 Picoclaw，你可以让它帮你写代码、调试设备——无需自己动手。当然，它不仅可以帮你写代码，还可以直接控制板载硬件模块。还有更多玩法等待你去探索！！

## 2. 硬件准备

- 一套 reCamera Gimbal
- 一台电脑

<table align="center">
 <tr>
  <th>reCamera Gimbal</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## 3. 效果演示
### 3.1 让云台环顾四周
![look around](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_lookaround.gif)
### 3.2 通过自然语言控制板载硬件 - 控制 LED 灯
![led](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_turn_led.gif)
### 3.3 让 Agent 自动编写并运行脚本
![script](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_write_code.gif)

## 4. 部署教程
由于 ***openclaw*** 运行需要大量内存（>=2GB），我们选择部署轻量版的 Claw，即 ***picoclaw***，它只需要 10MB 内存即可运行，因此非常适合本项目。
### 4.1 下载 picoclaw 源码
点击链接下载 picoclaw 的源码压缩包（支持 riscv64 架构的 reCamera）：[picoclaw source code compressed package](https://github.com/sipeed/picoclaw/releases/download/nightly/picoclaw_Linux_riscv64.tar.gz)


### 4.2 SSH 连接到 reCamera
连接到 reCamera 后，输入以下命令进入 ***userdata*** 目录，并创建一个文件夹用于存放 picoclaw 源码。

  ```
  ssh recamera@[IP address of reCamera]
  cd /userdata
  mkdir picoclaw
  ```

### 4.3 将源码压缩包上传到 reCamera
将 picoclaw 源码压缩包上传到 reCamera 的 ***/userdata/picoclaw/*** 文件夹中。

  ```
  scp picoclaw_Linux_riscv64.tar.gz recamera@[IP address of reCamera]:/userdata/picoclaw
  ```

### 4.4 解压源码压缩包
在 reCamera 上输入以下命令解压 picoclaw 源码压缩包。

  ```
  tar -axvf picoclaw_Linux_riscv64.tar.gz
  ```

### 4.5 启动 picoclaw 的 Web UI
在 reCamera 上输入以下命令启动 picoclaw 的 Web UI。

  ```
  ./picoclaw-launcher -no-browser -public
  ```
服务启动后，打开浏览器访问 ***http://[reCamera 的 IP 地址]:18800***，如下图所示。
![ip_login](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_login.png)


## 5. 配置 picoclaw 大模型
在 Web UI 上设置密码后，按照以下步骤配置 picoclaw 大模型。

### 5.1 在左侧边栏找到 ***Model*** 选项并点击进入。

### 5.2 向下滚动找到 ***deepseek-chat*** 模型，并点击 ***Edit*** 按钮，如下图所示。
![model_edit](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_model_edit.png)

### 5.3 在 API-KEY 输入框中输入你的 API Key，并点击 ***Save*** 按钮保存配置。

### 5.4 配置成功后，点击右上角的 ***Start Service*** 按钮启动模型。
![start_service](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_server_start.png)

### 5.5 点击左侧的 ***Chat*** 选项，与模型开始对话。

## 6. 连接 QQ 机器人
在 Web UI 上设置密码后，按照以下步骤连接 QQ 机器人。
### 6.1 首先前往 [QQ Open Platform](https://q.qq.com/#/) 并登录你的 QQ 账号。

### 6.2 点击左侧的 ***Robot*** 选项，并点击 ***Create Robot*** 按钮，如下图所示。
![create_robot](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_creat_qq_bot.png)

### 6.3 创建机器人后，根据教程进行配置并获取对应的 Robot ID 和 Secret Key。然后返回 Web UI，在左侧找到 ***Channel*** 选项，向下滚动找到 ***QQ***，点击连接，填写 ID 和 Secret Key，点击 Save。
![qq_robot](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_config_qq.png)



## 7. 创建你自己的 Skill
在 /home/recamera 目录下，你可以找到 ***.picoclaw*** 文件夹。进入该文件夹后，可以找到 ***workspace***，再进入其中的 ***skill*** 文件夹——这里就是你创建自己技能的地方。

### 7.1 Skill 创建格式
```
skill-name/
├── SKILL.md            # Required - Main skill file
├── scripts/            # Optional - Executable scripts
├── references/         # Optional - Reference documents (loaded on demand)
└── assets/             # Optional - Resource files for output (templates, images, etc.)
```


## 8. 导入 reCamera Skills
我们专门为 reCamera 创建了几个简单的适配技能--->[Skill Link](https://drive.google.com/drive/folders/1bh-GXnF8QEMQW8UpO1aNcdOcblAF6B5H)
你会看到如下图所示的三个文件：
![skill_files](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_skill.png)

- ***recamera_read_manual***
读取 reCamera 硬件资源，类似于 reCamera 的知识库——只需将其放入 ***skill*** 文件夹中。

- ***recamera_video_record***
用于拍摄视频和照片的技能（基于 node-red 实现）——只需将其放入 ***skill*** 文件夹中。

- ***SKILL.md***
描述 reCamera Gimbal 整体硬件资源的主文件——将其放入 ***/skill/hardware*** 中覆盖原文件。


## 技术支持与产品讨论

感谢你选择我们的产品！我们提供多种支持方式，以确保你在使用产品的过程中尽可能顺畅。我们提供多种交流渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>