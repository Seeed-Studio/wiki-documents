---
description: Micro_bit BitMaker
title: BitMaker
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/BitMaker
last_update:
  date: 05/15/2025
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249977-72e43eb6-aa32-4fa3-8e31-d49d1110d946.png#height=466&id=TVoRI&originHeight=466&originWidth=800&originalType=binary&ratio=1&size=0&status=done&style=none&width=800) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/1.png)

## はじめに
BitMakerは、クレジットカードサイズのプラグアンドプレイ拡張ボードで、Groveモジュールとmicro:bitを接続するためのブリッジです。4つのRGB LED、メロディを再生するための内蔵ブザー、6つのGroveポート（そのうち1つはI2Cポート）を備えており、micro:bitをセンサー、アクチュエータ、通信モジュール、ディスプレイなど、数百種類のモジュールに接続することができます。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656250001-d4b242c7-636e-430b-8565-1503c4272f34.png#height=384&id=zyWSH&originHeight=384&originWidth=1123&originalType=binary&ratio=1&size=0&status=done&style=none&width=1123) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/2.png)

:::note
micro:bitにプログラムをダウンロードした後は、BitMakerがmicro USBケーブルを通じて電源に接続されていることを確認してください。
:::

## チュートリアル
BitMakerの使用を開始するための関連チュートリアルを以下に示します。

### 1. ミニ音楽プレーヤー

#### 1.1 実装
これは、誕生日の歌を再生し、黄色と緑のライトを点滅させるクールな音楽プレーヤーです。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249956-97e452a2-7a79-46f5-ab56-4f84a2333b3a.png#height=337&id=Q8LWx&originHeight=337&originWidth=599&originalType=binary&ratio=1&size=0&status=done&style=none&width=599) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/3.png)

#### 1.2 プログラムの作成
MakeCodeではRGB LEDを制御するブロックがないため、Neopixel拡張機能をMakeCodeに追加する必要があります。以下の手順で行いましょう！
[Neopixel拡張機能の追加方法]
MakeCodeにアクセスします：[https://makecode.microbit.org](https://makecode.microbit.org/)

- ステップ1 MakeCodeの青いバーにある歯車アイコン（設定用）をクリックします。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249950-b8584720-ef46-4f7f-83ac-0f6ac745f224.png#height=549&id=f8O2j&originHeight=549&originWidth=1124&originalType=binary&ratio=1&size=0&status=done&style=none&width=1124) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/4.png)

- ステップ2 ドロップダウンリストから「Extensions」を選択し、拡張機能ページに移動します。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249951-f3c071db-d274-45d5-b10e-f83303155562.png#height=653&id=Zd6ki&originHeight=653&originWidth=853&originalType=binary&ratio=1&size=0&status=done&style=none&width=853) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/5.png)

- ステップ3 Neopixel拡張機能のアドレスを検索ボックスに入力します：[https://www.adafruit.com/category/168](https://www.adafruit.com/category/168)

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249966-9061a1f4-eaea-4070-9416-d32bc76663f6.png#height=826&id=Gpf25&originHeight=826&originWidth=1552&originalType=binary&ratio=1&size=0&status=done&style=none&width=1552) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/6.png)

> この拡張機能が存在しないと表示された場合は、ブラウザを閉じて再試行してください。

- ステップ4 拡張パッケージをクリックすると、ホームページに戻ります。Neopixel拡張機能が正常に追加されたことが確認できます。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249970-0c17f823-8b1c-4ea0-8e65-74fae74c493b.png#height=826&id=rHYia&originHeight=826&originWidth=1552&originalType=binary&ratio=1&size=0&status=done&style=none&width=1552) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/7.png)

拡張機能を追加した後、次のタスクに進みましょう。

:::note
BitMaker拡張機能を追加したい場合は、上記と同じ手順に従ってください。BitMaker拡張機能：[https://github.com/TinkerGen/pxt-BitMaker](https://github.com/TinkerGen/pxt-BitMaker)
:::

まず、「on start」ブロックを追加します。「Music」タブに移動し、「start melody repeating」ブロックを接続します。このブロックで誕生日の歌を選択します。その後、「forever」ブロックをドラッグ＆ドロップします。初期LEDの数を4に設定し、色のフォーマットを確認します。このプログラムロジックに従います：ストリップは最初に赤く点滅し、0.5秒後に緑に点滅し、再び0.5秒間停止します。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249961-3f674736-8e2a-4dd3-bab0-f2177cd17f71.png#height=514&id=FqxUe&originHeight=514&originWidth=1193&originalType=binary&ratio=1&size=0&status=done&style=none&width=1193) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/8.png)

#### 1.3 デバイスの接続
micro:bitをBitMakerにまっすぐスライドさせて挿入し、逆向きにならないよう注意してください。その後、USBケーブルを使用してmicro:bitをPCに接続します。micro:bitのLEDインジケータが点灯しているか確認してください。点灯していない場合は、USBケーブルを抜いて再接続してください。

#### 1.4 プログラムのダウンロード
[以前のチュートリアル](#)でプログラムをダウンロードする方法を紹介しましたが、簡単にまとめると以下の手順です：プログラムの名前を変更し、「Download」ボタンをクリックしてmicro:bitに送信します。
<!-- [previous tutorials](#https://docproxy.tinkergen.com/web/#/2?page_id=329) -->

#### 1.5 プログラムの実行
BitMakerのスイッチをオンにして、micro:bitが正常に動作するか確認してください。

### 2. その他のチュートリアル
冒頭で述べたように、BitMakerはGroveモジュールとmicro:bitを接続することができます。[4.3 BitGadget Kit](#)で具体的なチュートリアルを提供していますので、それに従ってプロジェクトを始めてください。Groveモジュールをお持ちの場合は、ぜひ試してみてください。お持ちでない場合は、TinkerGenショップで購入してください！

> BitMakerはすべてのGroveモジュールと互換性があります。
<!-- [4.3 BitGadget Kit](#https://docproxy.tinkergen.com/web/#/2?page_id=325)  -->

## コース教材
micro:bit と BitMaker に関するコース教材は、以下のアドレスからオンライン学習プラットフォーム Make2Learn 上でご覧いただけます: [https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## 添付ファイル
添付ファイル: https://files.seeedstudio.com/wiki/microbit_wiki_page/microbit-music player.hex

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>