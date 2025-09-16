---
description: リアルタイム光学文字認識
title: reComputer AI boxによるリアルタイムOCR
keywords:
  - Edge
  - reComputer R2000
  - reComputer R2100
  - yolov5
image: https://files.seeedstudio.com/wiki/Edge_Box/ocr.webp
slug: /ja/real-time-ocr
last_update:
  date: 6/16/2025
  author: Jiahao Li
---

## はじめに

OCR（光学文字認識）は、看板認識や請求書処理など、様々なシナリオに適用できます。このプロジェクトでは、Seeed Studioが製造するreComputer R2000またはreComputer R2000にPGNetモデルを展開し、加速されたリアルタイムOCR検出を実現します。

## ハードウェアの準備

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

> **注意:** USBカメラをUSBポートに挿入してください。

## ソフトウェアの準備

### システムの更新

```bash
sudo apt update && sudo apt full-upgrade -y
sudo apt install hailo-all -y
```

### プロジェクトのダウンロード

```bash
python -m venv .env --system-site-packages
source .env/bin/activate
pip install -r requirements.txt
```

## このプロジェクトの実行

```bash
python inference_pgnet.py pgnet_640.hef --camera 0
```

## 結果

OCRモデルがレシート上のテキストをリアルタイムで検出している様子を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/OCR.gif" alt="pir" width={1000} height="auto"/></p>

## 技術サポート

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、様々なサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>