---
description: この記事では、CODESYS をベースにした reComputer R1000 の Modbus RTU 機能の使用方法を主に紹介します。

title: reComputer R1000 で UPS を使用して入力電圧を読み取る方法
keywords:
  - エッジコントローラー
  - reComputer R1000
  - reComputer R1100
  - I2C
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_use_ups
last_update:
  date: 05/15/2025
  author: Jiahao Li
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

この Wiki 記事では、reComputer R10 および R11 シリーズに UPS モジュールをインストールし、UPS を使用して入力電圧を読み取る方法を説明します。

## ハードウェア準備

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
      <th class="table-trnobg">UPS モデル</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
        <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/-/x-110992004-supercap_ups_ltc3350_module.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/SuperCAP-UPS-LTC3350-Module-p-5934.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

>注意  
>R1000 に UPS をインストールする方法については、この [リンク](https://wiki.seeedstudio.com/ja/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module) を参照してください。

## ソフトウェア準備

### ステップ 1: UPS モジュールの確認

```
sudo apt update
sudo apt install i2c-tools
sudo i2cdetect -y 6
```
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/ups/check_ups.png" /></center>

### ステップ 2: GitHub からリポジトリをダウンロード

```
git clone https://github.com/Seeed-Projects/Read-UPS-input-voltage.git
cd Read-UPS-input-voltage
sudo apt update
sudo apt install python3-smbus
```

### ステップ 3: 電圧のモニタリングを開始

```
python -m venv .venv --system-site-packages && source .venv/bin/activate
python read_voltage.py
```

## 結果

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/ups/ups_result.png" /></center>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>