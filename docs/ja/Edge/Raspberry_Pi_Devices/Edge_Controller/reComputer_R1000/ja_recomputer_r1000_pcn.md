---
description: reComputer R1000 V1.1 製品変更説明
title: reComputer R1000 V1.1 製品変更詳細
keywords:
  - Edge
  - reComputer R1000 
  - Modbus RTU
  - rs485
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_v1_1_description
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに
reComputer R1000 V1.0 の Modbus 機能を使用する際に、一部のユーザーが DE ピン制御に問題を抱えていることが判明しました。ユーザー体験を向上させるために、RS485 をより使いやすくするためにピンの割り当てを変更し、製品全体にいくつかの調整を加えました。

## 変更内容
1. 新しいアンテナ穴を追加しました。以下の図に示すように、現在は 3 つのアンテナ穴があります。インターフェースのシルク印刷もそれに応じて調整されています。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/PCN/before_after.png" /></div>

2. PCBA バージョンが V1.0 から V1.1 に変更されました。

3. DSI インターフェースの調整：DSI0 から DSI1 に変更されました。

4. 内部スピーカーコネクタを削除しました。

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/PCN/delete.png" /></div>

5. 3 つの RS485 グループすべての DE トランシーバ方向制御ピンが、RTS 機能をサポートするピンに変更されました。

6. その他のピン調整を行いました。詳細については、[reComputer R1000 v1.1 ピン割り当て](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx) を参照してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>