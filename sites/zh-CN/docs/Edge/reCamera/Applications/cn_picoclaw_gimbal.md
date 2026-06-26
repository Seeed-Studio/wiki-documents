---
title: 在reCamera上本地部署龙虾
description: 本应用案例展示了在 reCamera 上本地部署龙虾的过程及其应用。
keywords:
  - reCamera
  - Edge AI
slug: /recamera_picoclaw
sku: 100029708
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_turn_led.gif
sidebar_position: 11
last_update:
  date: 2026-06-24T00:00:00.000Z
  author: Sizhao zhou
createdAt: '2026-06-24'
updatedAt: '2026-06-24'
url: https://wiki.seeedstudio.com/cn/recamera_picoclaw/
---


## 1.介绍
相信很多人都会遇到想在reCamera上实现自己的想法，但是苦于不会编写相应的程序导致诸多想法无法实现，虽然我们有对新手及其友好的node-red供其使用，但是其功能相对简单，无法满足复杂的需求。所以为了满足这些需求，我们提供了在reCamera上本地部署龙虾的案例。有了龙虾你就可以让龙虾帮你写代码和调试设备，完全不需要自己动手。当然它不仅仅能帮你写代码，还能直接控制板载的硬件模块。有更多的玩法去等待你的开发！！

## 2.硬件准备

- 一台 reCamera Gimbal
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

## 3.效果演示
### 3.1 让Gimbal环顾周围环境 
![look around](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_lookaround.gif)
### 3.2 通过自然语言控制板载硬件--控制LED灯
![led](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_turn_led.gif)
### 3.3 让Agent自己写脚本并且运行
![script](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_write_code.gif)

## 4.部署教程
由于 ***openclaw*** 运行所需要的内存较大(>=2GB),所以我们选择部署一款轻量的龙虾,即 ***picoclaw***，仅需10MB内存就能运行，所以十分适合本项目使用。
### 4.1 下载picoclaw的源码的源码
点击链接下载picoclaw的源码压缩包(支持riscv64架构的reCamera)：[picoclaw的源码压缩包](https://github.com/sipeed/picoclaw/releases/download/nightly/picoclaw_Linux_riscv64.tar.gz)


### 4.2 SSH连接到reCamera
连接到reCamera后输入如下命令接入 ***userdata*** 目录,创建一个文件夹存放picoclaw的源码。

  ```
  ssh recamera@reCamera的ip地址
  cd /userdata
  mkdir picoclaw
  ```

### 4.3 上传源码压缩包到reCamera
上传picoclaw的源码压缩包到reCamera的 ***/userdata/picoclaw/*** 文件夹下。

  ```
  scp picoclaw_Linux_riscv64.tar.gz recamera@reCamera的ip地址:/userdata/picoclaw
  ```

### 4.4 解压源码压缩包
在reCamera上输入如下命令解压picoclaw的源码压缩包。

  ```
  tar -axvf picoclaw_Linux_riscv64.tar.gz
  ```

### 4.5 启动picoclaw的web ui端
在reCamera上输入如下命令启动picoclaw的web ui端。

  ```
  ./picoclaw-launcher -no-browser -public
  ```
在服务启动后，打开浏览器访问 ***http://reCamera的ip地址:18800*** 即可，如下图所示。
![ip_login](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_login.png)


## 5.配置picoclaw大模型
在web ui端设置好密码后，按照如下步骤去配置picoclaw的大模型。

### 5.1  左侧边栏找到 ***模型*** 选项，点击进入。

### 5.2 下滑找到 ***deepseek-chat*** 模型，点击 ***编辑*** 按钮，如下图所示。
![model_edit](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_model_edit.png)

### 5.3 在API-KEY输入框中输入你的API Key，点击 ***保存*** 按钮，保存配置。

### 5.4 配置成功后，点击右上角的***启动服务***按钮即可启动模型。
![start_service](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_server_start.png)

### 5.5 点击左侧的***对话***选项，即可与模型进行对话。

## 6.接入QQ机器人
在web ui端设置好密码后，按照如下步骤去接入QQ机器人。
### 6.1 首先去[QQ开放平台](https://q.qq.com/#/)，然后登录你自己的QQ账号。

### 6.2  点击左侧的***机器人***选项，点击 ***创建机器人*** 按钮，如下图所示。
![create_robot](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_creat_qq_bot.png)

### 6.3 创建完毕机器人后，按照教程配置好机器人并且获取到对应的机器人ID和密钥后，回到web ui端，找到左侧的***频道***选项，下拉找到***QQ***，然后点击接入填写ID和密钥点击保存即可。
![qq_robot](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_config_qq.png)



## 7.创建自己的skill
在/home/recamera目录下面，你可以找到 ***.picoclaw*** 这个文件夹，进入文件夹后，你可以找到 ***workspace*** 然后里面有一个***skill*** 文件夹，这个文件夹就是你创建自己的skill的地方。

### 7.1 创建 skill格式
```
skill-name/
├── SKILL.md            # 必需 - 技能主文件
├── scripts/            # 可选 - 可执行脚本
├── references/         # 可选 - 参考文档（按需加载）
└── assets/             # 可选 - 输出用资源文件（模板、图片等）
```


## 8.导入reCamera的skill
我们做了几个简单的skill，专门用来适配reCamera--->[skill链接](https://drive.google.com/drive/folders/1bh-GXnF8QEMQW8UpO1aNcdOcblAF6B5H)
你会看到有下图的三个文件:
![skill_files](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_skill.png)

- ***recamera_read_manual***
读取reCamera硬件资源，类似于reCamera的知识库，这个放到***skill***文件夹下即可。

- ***recamera_video_record***
一个可以拍视频和拍图片的skill（基于node-red实现），这个放到***skill***文件夹下即可。

- ***SKILL.md***
主文件，描述reCamera Gimbal整体硬件资源，这个放到***/skill/hardware***下面覆盖原文件即可


## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>