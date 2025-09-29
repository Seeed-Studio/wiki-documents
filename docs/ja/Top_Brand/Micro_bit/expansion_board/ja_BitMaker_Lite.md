---
description: Micro_bit BitMaker lite
title: BitMaker Lite
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/BitMaker_lite
last_update:
  date: 05/15/2025
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416908-e058e745-c2f4-4263-8a0b-9c38faa4085d.png#align=left&display=inline&height=512&originHeight=512&originWidth=814&size=0&status=done&style=none&width=814) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/8.png)

## はじめに
BitMaker Liteは、BitMakerのコンパクトで簡略化されたバージョンです。Groveポートが3つしかありませんが、多くのプロジェクトにはこれで十分です。プラグ＆プレイの便利さにより、Groveモジュールを使用して簡単にプロジェクトを実現できます。内蔵のブザーにより、フルーツピアノのような興味深いオーディオプロジェクトも可能になります。さらに多くのGPIOにアクセスしたい場合、BitMaker Liteはmicro:bitのすべての利用可能なピンのブレークアウトも提供しており、ヘッダーコネクタをはんだ付けして使用することができます。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416911-961efb23-8578-4cfa-a224-29da21dcd517.png#align=left&display=inline&height=419&originHeight=419&originWidth=1156&size=0&status=done&style=none&width=1156) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/10.png)

## チュートリアル
### 1. 音楽プレーヤー
#### 1.1 実装

micro:bitは電源を入れると誕生日の歌を1回再生します。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416918-8d8828f3-a79b-45ad-a721-186f3f7756fb.png#align=left&display=inline&height=399&originHeight=399&originWidth=709&size=0&status=done&style=none&width=709) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/11.png)

#### 1.2 プログラムを書く
「on start」ブロックを追加し、「Music」タブから「start melody (dadadum) repeating (once)」ブロックを接続します。このブロックで誕生日の歌を選択します。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416887-1ca9e66a-ee00-4f89-83cf-7b8faafdfa3b.png#align=left&display=inline&height=171&originHeight=171&originWidth=535&size=0&status=done&style=none&width=535) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/12.png)

#### 1.3 デバイスを接続する
micro:bitをBitMaker Liteにスライドさせて挿入し、逆向きにしないよう注意してください。USBケーブルでmicro:bitをPCに接続します。micro:bitのLEDインジケータが点灯しているか確認してください。点灯していない場合、USBケーブルが誤って接続されている可能性があります。

#### 1.4 プログラムをダウンロードする
[以前のチュートリアル](https://docproxy.tinkergen.com/web/#/2?page_id=329)でプログラムのダウンロード方法を紹介しましたが、以下の手順に簡略化できます：プログラムの名前を変更し、「ダウンロード」ボタンをクリックしてmicro:bitに送信します。

#### 1.5 プログラムを実行する
BitMaker Liteのスイッチをオンにして、micro:bitが誕生日の歌を再生するか確認してください。

### 2. 加速度計で遊ぶ
#### 2.1 実装

micro:bitは異なるジェスチャーを行うたびにパターンを表示し、それに応じたメロディを再生します。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416904-9f5c413e-032f-4651-8d51-303ca7f57420.png#align=left&display=inline&height=490&originHeight=490&originWidth=632&size=0&status=done&style=none&width=632) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/13.png)

#### 2.2 プログラムを書く
プログラムのロジックとコードに従います：<br />
電源を入れると、micro:bitはハートのアイコンを表示します。<br />
micro:bitを振ると、画面がクリアされ、何も表示されません。<br />
ロゴが上向きの場合、micro:bitは「北」の矢印を表示し、「jump up」のメロディを再生します。<br />
ロゴが下向きの場合、micro:bitは「南」の矢印を表示し、「jump down」のメロディを再生します。<br />
micro:bitが左に傾くと、「西」の矢印を表示し、「dadadum」のメロディを再生します。<br />
micro:bitが右に傾くと、「東」の矢印を表示し、「entertainer」のメロディを再生します。<br />
画面が上向きの場合、micro:bitは笑顔を表示し、「power up」のメロディを再生します。<br />
画面が下向きの場合、micro:bitは悲しい顔を表示し、「power down」のメロディを再生します。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416885-b70ab193-d5c2-47d1-ab29-bdb3452d6aa2.png#align=left&display=inline&height=741&originHeight=741&originWidth=982&size=0&status=done&style=none&width=982) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/14.png)

#### 2.3 デバイスを接続する
micro:bitをBitMaker Liteにスライドさせて挿入し、逆向きにしないよう注意してください。USBケーブルでmicro:bitをPCに接続します。micro:bitのLEDインジケータが点灯しているか確認してください。点灯していない場合、USBケーブルが誤って接続されている可能性があります。

#### 2.4 プログラムをダウンロードする
以前のチュートリアルでプログラムのダウンロード方法を紹介しましたが、以下の手順に簡略化できます：プログラムの名前を変更し、「ダウンロード」ボタンをクリックしてmicro:bitに送信します。

#### 2.5 プログラムを実行する
BitMaker Liteのスイッチをオンにして、プログラムが正常に動作するか確認してください。

### 3. その他のプロジェクト

冒頭で述べたように、BitMaker LiteはGroveモジュールとmicro:bitを接続することができます。[4.2 BitStarter Kit](https://docproxy.tinkergen.com/web/#/2?page_id=403)で、具体的なチュートリアルを提供していますので、それに従ってプロジェクトを始めてください。Groveモジュールをお持ちの場合は、ぜひチュートリアルに従ってください。お持ちでない場合は、TinkerGen Shopで注文してください！

> BitMaker LiteはすべてのGroveモジュールと互換性があります。

#### 拡張機能を追加する
BitMaker Liteを使用する際にGroveモジュールを有効にするには、MakeCodeに拡張機能を追加する必要があります。その方法を見てみましょう：

- MakeCodeにアクセスします：[https://makecode.microbit.org](https://makecode.microbit.org/)
- 新しいプロジェクトを作成してワークスペースに入ります。青いバーの歯車アイコン（設定用）をクリックします。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416889-8342e086-2cdc-4416-bbbf-95d991f48444.png#align=left&display=inline&height=524&originHeight=524&originWidth=1072&size=0&status=done&style=none&width=1072) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/15.png)

- ドロップダウンリストから「Extensions」を選択し、拡張機能ページに移動します。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416908-ee4ae33c-ffc2-44b8-a127-bf55f7e4e0e5.png#align=left&display=inline&height=712&originHeight=712&originWidth=931&size=0&status=done&style=none&width=931) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/16.png)

- 検索ボックスに BitMaker Lite 拡張機能のアドレスを入力します: [https://github.com/TinkerGen/pxt-BitMaker](https://github.com/TinkerGen/pxt-BitMaker)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416930-10133e74-2d1f-41d1-9a3c-1c29482f27a3.png#align=left&display=inline&height=937&originHeight=937&originWidth=1920&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/17.png)

> 拡張機能が存在しないと表示された場合は、ブラウザを閉じて MakeCode に再度アクセスしてください。

- 拡張パッケージをクリックすると、ワークスペースに戻ります。その後、Grove 拡張機能が正常に追加されたことが確認できます。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416925-93ed4b5a-8d37-4841-be77-0d6564d01cc8.png#align=left&display=inline&height=937&originHeight=937&originWidth=1920&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/18.png)

## コース教材
micro:bit と BitMaker Lite に関する関連コース教材は、オンライン学習プラットフォーム Make2Learn で以下のアドレスからご覧いただけます: [https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## 添付ファイル
#### [添付ファイル: BitMaker Lite チュートリアルソースコード](https://tinkergen.com/filedownload/179268)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>