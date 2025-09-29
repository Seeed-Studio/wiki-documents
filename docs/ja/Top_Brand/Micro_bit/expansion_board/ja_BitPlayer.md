---
description: Micro_bit BitPlayer
title: BitPlayer
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/BitPlayer
last_update:
  date: 05/15/2025
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608299-82ca0e88-02a3-4a72-bb27-0d6e31d508f5.png#height=609&id=HttEj&originHeight=609&originWidth=904&originalType=binary&ratio=1&size=0&status=done&style=none&width=904) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/1.png)

## はじめに
BitPlayerは、ポータブルピアノやスマート電卓などの創作にインスピレーションと興奮を提供します。持ち運びやすさと使いやすさを追求し、BitPlayerは典型的なゲームコントローラーが使用する全ボタン設計を廃止し、2軸ジョイスティックを採用しました。また、L、R、A、B、C、Dとラベル付けされた6つのプログラム可能なボタンを備えています。さらに、BitPlayer自体にはブザー、振動モーター、Grove I2Cポートが搭載されており、子供たちに生き生きとしたインタラクティブなゲーム体験を提供します。BitPlayerに単4電池を2本取り付けるだけで、どこでも簡単にDIYプロジェクトを楽しむことができます。すでにテスト済みですが、Bluetoothの位置が約10メートルの範囲内であれば、BitPlayerは他のデバイスと相互作用できます。リモートコントロールカーを実現したい場合は、[BitCar](https://docproxy.tinkergen.com/web/#/2?page_id=357)も準備することをお勧めします。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608604-b8c61682-56cb-4c53-aa80-90e45003792c.png#height=907&id=yenfN&originHeight=907&originWidth=905&originalType=binary&ratio=1&size=0&status=done&style=none&width=905) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/2.png)

## チュートリアル
以下は、BitPlayerの使用を開始するための関連チュートリアルです。

### 1. 指スピードゲーム
#### 1.1 実装
このプロジェクトでは、ジョイスティックを操作してLEDを順番に点灯させます。光が画面上をループする四角形のように走ります。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608313-1eb60ba3-e82b-4cea-baa3-0eba2906910c.png#height=266&id=FXfhp&originHeight=266&originWidth=473&originalType=binary&ratio=1&size=0&status=done&style=none&width=473) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/3.png)

#### 1.2 プログラムを書く
MakeCodeではBitPlayerを制御するブロックがないため、すべてが正常に動作するようにMakeCodeにBitPlayer拡張機能を追加する必要があります。以下の手順で学びましょう！

【BitPlayer拡張機能の追加方法】  
MakeCodeにアクセスします：[https://makecode.microbit.org](https://makecode.microbit.org/)

- ステップ1 MakeCodeの青いバーにある歯車アイコン（設定用）をクリックします。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608337-28675e0d-cba2-4fcd-9e95-ea566db99f46.png#height=489&id=URYAb&originHeight=489&originWidth=1000&originalType=binary&ratio=1&size=0&status=done&style=none&width=1000) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/4.png)

- ステップ2 ドロップダウンリストから「Extensions」を選択し、拡張機能ページに移動します。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608593-1510b8dd-4f3f-49b2-8145-fd6e87b854db.png#height=699&id=AAz5P&originHeight=699&originWidth=914&originalType=binary&ratio=1&size=0&status=done&style=none&width=914) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/5.png)

- ステップ3 検索ボックスにBitPlayer拡張機能のアドレスを入力します：[https://github.com/TinkerGen/pxt-BitPlayer](https://github.com/TinkerGen/pxt-BitPlayer)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608308-08990569-fce3-4dc8-a07a-ad1c3f1182e1.png#height=937&id=b9Blo&originHeight=937&originWidth=1920&originalType=binary&ratio=1&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/6.png)

> この拡張機能が存在しないと表示された場合は、ブラウザを閉じてMakeCodeに再度アクセスしてください。

<!-- - ステップ4 拡張パッケージをクリックすると、作業スペースに戻ります。BitPlayer拡張機能が正常に追加されたことが確認できます。![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608597-2ade6798-937e-47e0-8215-99e146f6d983.png#height=937&id=jyFxX&originHeight=937&originWidth=1920&originalType=binary&ratio=1&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/7.png)

次に進みましょう。  
まず、「on start」ブロックを追加します。LED on、x座標、y座標という3つの変数を作成します。  
次に、変数「LED on」を(x座標、y座標)という順序対でスプライトとして設定します。この順序対は最初に(0, 0)から始まります。  
その後、このプログラムロジックに従ってコードを記述します：ジョイスティックが上に引かれるとy座標が-1変化し、下に引かれるとy座標が1変化します。ジョイスティックが左に引かれるとx座標が-1変化し、右に引かれるとx座標が1変化します。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608356-3c424c72-15e0-4ee2-895e-4eee6ec085a1.png#height=699&id=GohIO&originHeight=699&originWidth=1434&originalType=binary&ratio=1&size=0&status=done&style=none&width=1434) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/8.png)

#### 1.3 デバイスを接続する
micro:bitをBitPlayerにまっすぐスライドさせて挿入し、逆向きにならないように注意してください。その後、USBケーブルを使用してmicro:bitをPCに接続します。micro:bitのLEDインジケーターが点灯しているか確認してください。点灯していない場合は、USBケーブルを抜いて再度接続してください。

#### 1.4 プログラムをダウンロードする
[以前のチュートリアル](https://docproxy.tinkergen.com/web/#/2?page_id=329)でプログラムをダウンロードする方法を紹介しましたが、簡単にまとめると以下の手順です：プログラムに名前を付け、「Download」ボタンをクリックしてmicro:bitに送信します。

#### 1.5 プログラムを実行する
BitPlayerのスイッチをオンにして、micro:bitが正常に動作するか確認してください。

### 2. リモートコントロールカー
[BitCarチュートリアル4](https://docproxy.tinkergen.com/web/#/2?page_id=357)をご覧ください。

## コース教材
micro:bitとBitPlayerに関するコース教材は、以下のアドレスから当社のオンライン学習プラットフォームMake2Learnでご覧いただけます：[https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## 技術サポートと製品に関する議論

当社の製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>