---
description: reComputer シリーズの RS485 インターフェースをテストするためのループバックテストの使用方法を学びます。
title: reComputer RS485 テスト
keywords:
  - RS485
  - reComputer
  - loopback test
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_rs485_loopback_test
sku: 113991314,113991274, 113991294, 113991295, 113991334, 113991374, 113991375,100020831, 100045506, 100080766, 100026042, 100061305, 100099044, 100097052, 100091962
last_update:
  date: 01/14/2026
  author: Jiahao
createdAt: '2026-01-14'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/recomputer_rs485_loopback_test/
---

## はじめに

この Wiki は、RS485 インターフェースを持つすべての reComputer デバイス（reComputer R10/R11/R20/R21 を含む）に適用され、RS485 の受信および送信機能が正しく動作しているかをテストするために使用できます。

## ハードウェアの準備

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer r1000</th>
  <th>reComputer r1100</th>
  <th>reComputer r2000</th>
  <th>reComputer r2100</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991375_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1035-10-p-5925.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1113-10-p-6258.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 接続

テストする RS485 インターフェースのペアを選択し、A1 を A2 に、B1 を B2 に接続してください：

<center><img width={1000} src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/RS485/RS485_connection.jpg" /></center>

## ソフトウェアの準備

以下のコマンドを使用してダウンロードします：

```bash
git clone https://github.com/ackPeng/R1100_TEST.git
```

コンパイル

```bash
gcc -o serial_test serial_test.c
```

## テスト

```bash
#From ttyACM0 to ttyACM1, send RS485_1 to RS485_2
./serial_test /dev/ttyACM0 /dev/ttyACM1 115200
```
<center><img width={800} src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/RS485/compile_and_test.png" /></center>

```bash
# From ttyACM1 to ttyACM0, send RS485_2 to RS485_1
./serial_test /dev/ttyACM1 /dev/ttyACM0 115200
```
<center><img width={1000} src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/RS485/send_test.png" /></center>


## 技術サポート

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
