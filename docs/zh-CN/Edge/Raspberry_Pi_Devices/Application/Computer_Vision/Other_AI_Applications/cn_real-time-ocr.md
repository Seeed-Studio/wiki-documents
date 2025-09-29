---
description: 实时光学字符识别
title: 使用 reComputer AI 盒子进行实时 OCR
keywords:
  - Edge
  - reComputer R2000
  - reComputer R2100
  - yolov5
image: https://files.seeedstudio.com/wiki/Edge_Box/ocr.webp
slug: /cn/real-time-ocr
last_update:
  date: 6/16/2025
  author: Jiahao Li
---

## 介绍

OCR，即光学字符识别，可以应用于各种场景，如标志识别和发票处理。在这个项目中，PGNet 模型被部署在 Seeed Studio 生产的 reComputer R2000 或 reComputer R2000 上，以实现加速和实时的 OCR 检测。

## 硬件准备

<div class="table-center">
  <table align="center">
    <tr>
        <th>reComputer AI R2000</th>
        <th>reComputer AI Industrial R2000</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image114993560.jpeg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

> **注意：** 请将 USB 摄像头插入 USB 端口。

## 软件准备

### 更新系统

```bash
sudo apt update && sudo apt full-upgrade -y
sudo apt install hailo-all -y
```

### 下载项目

```bash
python -m venv .env --system-site-packages
source .env/bin/activate
pip install -r requirements.txt
```

## 运行此项目

```bash
python inference_pgnet.py pgnet_640.hef --camera 0
```

## 结果

您可以看到 OCR 模型实时检测收据上的文本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/OCR.gif" alt="pir" width={1000} height="auto"/></p>

## 技术支持

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>