---
description: Micro_bit BitWear
title: BitWear
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/BitWear
last_update:
  date: 05/15/2025
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991110-809f156c-23cb-47b0-82fd-15fc1e221ba2.png#align=left&display=inline&height=670&originHeight=670&originWidth=1021&size=0&status=done&style=none&width=1021) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/1.png)

## はじめに
BitWear は、micro:bit ユーザー向けの低コストでコンパクトなアクセサリーで、楽しいウェアラブルガジェットを作ることができます。BitWear は 5 本のネジ（M3x5mm）で micro:bit に簡単に取り付けられ、2 つの CR2032 バッテリーで駆動します。バッテリーはしっかりと固定されており、BitWear を取り外さない限り取り出すことはできません。基板上には振動モーター、ブザー、アドレス指定可能な RGB LED が搭載されており、楽しいウェアラブルプロジェクトのために設計されています。BitWear の設計目標は、micro:bit の機能を最大限に活用しつつ、スペースを最小限に抑え、新しい micro:bit ユーザーに豊かなウェアラブル体験を提供することです。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991124-7551ded4-89b3-4524-8ea2-d43cf23c85dd.png#align=left&display=inline&height=547&originHeight=547&originWidth=1099&size=0&status=done&style=none&width=1099) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/2.png)

:::note
ユーザーは、CR2032 バッテリー 2 個と M3*5 ネジ 5 本を別途用意する必要があります。
:::

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991126-2181a46f-99d0-4ee3-b587-3c82a082af0b.png#align=left&display=inline&height=527&originHeight=527&originWidth=995&size=0&status=done&style=none&width=995) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/3.png)

:::tip
プログラムをテストする際は、最初に BitWear にバッテリーを取り付けないでください。USB ケーブルを使用して電源を供給し、プログラムの転送を確認してください。プログラムが完成し、オフラインで実行する必要がある場合のみバッテリーを取り付けてください。
:::

## チュートリアル
以下は、BitWear を使い始めるための関連チュートリアルです。

### 1. 目覚ましアラーム

#### 1.1 実装
これは、あなたを目覚めさせる魔法のガジェットです！プロジェクトが完成したら、両面テープを使ってガジェットを背中に固定します。眠りに落ちるようにゆっくりと前かがみになり、リマインダーが送信されるか確認してください。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991109-4bb68ed4-02eb-4499-b6df-bcebc2efe496.png#align=left&display=inline&height=522&originHeight=522&originWidth=928&size=0&status=done&style=none&width=928) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/4.png)

#### 1.2 プログラムを書く
まず、永続的なブロックを追加します。その中に「アイコンを表示」ブロックを接続します。このハートアイコンをそのまま使用します。
次に、IF-THEN ステートメントを追加します。その中に比較ブロック「&lt;」を接続します。ブロック内の左側のボックスには「加速度 (mg)」ブロックを「入力」タブから追加し、右側のボックスには「800」を入力します。
その後、「音楽」タブに移動し、「メロディーを開始 (dadadum) 繰り返し (1 回)」ブロックを下に接続します。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991101-b137ce8c-40cc-4e0f-a08b-a8b867c44cf6.png#align=left&display=inline&height=461&originHeight=461&originWidth=1303&size=0&status=done&style=none&width=1303) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/5.png)

#### 1.3 デバイスを接続する
BitWear を micro:bit に取り付けます。USB ケーブルを使用して micro:bit と PC を接続します。micro:bit の LED インジケーターが点灯していることを確認してください。

#### 1.4 プログラムをダウンロードする
[以前のチュートリアル](https://docproxy.tinkergen.com/web/#/2?page_id=329)でプログラムのダウンロード方法を紹介しましたが、以下の手順に簡略化できます：プログラムに名前を付け、「ダウンロード」ボタンをクリックして micro:bit に送信します。

#### 1.5 プログラムを実行する
BitWear の電源スイッチをオンにして、プログラムが正常に動作するか確認してください。

### 2. 光検出器
#### 2.1 実装
BitWear を取り付けた状態で、micro:bit は光レベルが 80 を超えると笑顔を表示します。そうでない場合、BitWear が振動し、micro:bit は悲しい顔を表示してメロディー「Baddy」を再生します。（実際のシナリオでは指定された光レベルが異なる場合があります。必要に応じて調整してください。）

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991125-adfecd70-04c0-4415-9c82-829929c8e68c.png#align=left&display=inline&height=494&originHeight=494&originWidth=878&size=0&status=done&style=none&width=878) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/6.png)

#### 2.2 プログラムを書く
MakeCode には BitWear を制御するブロックが用意されていません。そのため、MakeCode に拡張機能を手動で追加する必要があります。以下にその方法を説明します！

**BitWear 拡張機能を追加する方法：**
MakeCode にアクセスします：
[https://makecode.microbit.org](https://makecode.microbit.org/)

<!-- - ステップ 1: 新しいプロジェクトを作成してワークスペースに入ります。青いバーの歯車アイコン（設定用）をクリックします。![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991129-3a81d155-0279-412d-a66f-28ab0f9530cb.png#align=left&display=inline&height=496&originHeight=496&originWidth=1014&size=0&status=done&style=none&width=1014) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/7.png)

- ステップ 2: ドロップダウンリストから「拡張機能」を選択し、拡張機能ページに移動します。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991368-facfd798-ea8e-4703-89d8-78114f26d22e.png#align=left&display=inline&height=638&originHeight=638&originWidth=834&size=0&status=done&style=none&width=834) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/8.png)

- ステップ 3: BitWear 拡張機能のアドレスを検索ボックスに入力します：[https://github.com/TinkerGen/pxt-BitWear](https://github.com/TinkerGen/pxt-BitWear)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991151-7ca03e5e-ce2a-4c82-b993-788be270b4e7.png#align=left&display=inline&height=455&originHeight=455&originWidth=1007&size=0&status=done&style=none&width=1007) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/9.png)

> 拡張機能が存在しないというプロンプトが表示された場合は、ブラウザを閉じて再度 MakeCode にアクセスしてください。

- ステップ 4: 拡張パッケージをクリックすると、ワークスペースに戻ります。その後、BitWear 拡張機能が正常に追加されていることが確認できます。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991400-25ce2189-c8b8-461d-ae36-98595d4c26a4.png#align=left&display=inline&height=937&originHeight=937&originWidth=1920&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/10.png)

拡張機能を追加した後のタスクに進みましょう。

まず、`forever` ブロックを追加し、その中に `IF-THEN-ELSE` ステートメントを接続します。
以下のプログラムロジックとコードに従ってください：光レベルが 80 より大きい場合、micro:bit はスマイリーフェイスを表示します。そうでない場合、BitWear が振動し、micro:bit は悲しい顔を表示してメロディ「Baddy」を再生します。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991145-87f4c2d0-d211-489c-8886-8d5f257f1968.png#align=left&display=inline&height=635&originHeight=635&originWidth=1264&size=0&status=done&style=none&width=1264) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/11.png)

#### 2.3 デバイスを接続する
BitWear を micro:bit に取り付けます。USB ケーブルを使用して micro:bit と PC を接続してください。micro:bit の LED インジケーターが点灯していることを確認してください。
#### 2.4 プログラムをダウンロードする
以前のチュートリアルでプログラムのダウンロード方法を紹介しましたが、以下の手順に簡略化できます：プログラムの名前を変更し、「ダウンロード」ボタンをクリックして micro:bit に送信します。
#### 2.5 プログラムを実行する
BitWear の電源スイッチをオンにして、プログラムが正常に動作するか確認してください。

:::note
micro:bit には光センサーが内蔵されていないため、micro:bit は LED マトリックスを使用して周囲の光を感知します。LED アクチュエータは常に入力信号に変換され、電圧減衰時間のサンプルを取得します。この時間は、周囲環境の光レベルに大まかに比例します。
:::

## コース教材
micro:bit と BitWear に関する関連教材は、オンライン学習プラットフォーム Make2Learn で以下のアドレスから確認できます：[https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## 添付ファイル
#### [添付ファイル: BitWear チュートリアルのソースコード](https://tinkergen.com/filedownload/179236)

## 技術サポート & 製品ディスカッション

弊社製品をご利用いただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>