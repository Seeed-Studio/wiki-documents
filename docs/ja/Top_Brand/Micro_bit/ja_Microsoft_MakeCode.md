---
description: Micro_bit Microsoft MakeCode
title: Microsoft MakeCode
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Microsoft_MakeCode
last_update:
  date: 05/15/2025
  author: Seraphina
---


[Microsoft MakeCode](https://makecode.microbit.org/) エディターは、micro:bit をブロックベースのプログラミング言語でプログラムすることを可能にします。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918056-6a0b823f-6422-4d5a-875a-269bd63f20a0.png#align=left&display=inline&height=829&originHeight=829&originWidth=1255&size=0&status=done&style=none&width=1255) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/1.png)

## 拡張機能（またはパッケージ）の追加方法

micro:bit 用のほとんどのハードウェア拡張機能（例: モーターコントローラー）は、MakeCode エディター用の拡張機能（またはパッケージ）も提供されています。プロジェクトに拡張機能を追加することで、拡張ボードの機能を簡単に制御できるようになります。以下の手順に従って拡張機能を追加する方法を説明します：

1. 設定アイコンをクリックして拡張機能ページへのアクセスを見つけます：

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918045-91e397f1-e091-48d8-b7bd-ca956ccd04da.png#align=left&display=inline&height=397&originHeight=397&originWidth=397&size=0&status=done&style=none&width=397) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/2.png)

または、Advanced => Extensions ブロックカテゴリ内で見つけます。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918102-c76ae196-9eac-4da4-a424-34e6e1e2843d.png#align=left&display=inline&height=397&originHeight=397&originWidth=397&size=0&status=done&style=none&width=397) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/3.png)

2. キーワード（例: ‘bitkit’）で拡張機能を検索します。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918091-b1dfb28b-34ca-4b13-9b3c-d8016ee16c6f.png#align=left&display=inline&height=423&originHeight=423&originWidth=755&size=0&status=done&style=none&width=755) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/4.png)

または、GitHub URL を入力します（例: [https://github.com/seeed-studio/pxt-grove-zero-for-microbit](https://github.com/seeed-studio/pxt-grove-zero-for-microbit)）。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918098-85a5078a-5400-4400-9844-13fe1c92226d.png#align=left&display=inline&height=439&originHeight=439&originWidth=765&size=0&status=done&style=none&width=765) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/5.png)

3. 拡張機能をクリックすると、以下のようにエディターにブロックと JavaScript 定義が自動的に読み込まれます。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918092-687cc94e-c992-4cda-81fc-46efd75f0b6c.png#align=left&display=inline&height=825&originHeight=825&originWidth=1257&size=0&status=done&style=none&width=1257) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/6.png)

## プログラミング手順

- ステップ 1: MakeCode にアクセスします: [https://makecode.microbit.org/](https://makecode.microbit.org/)

- ステップ 2: USB ケーブルを使用して micro:bit を PC に接続します。接続が成功すると、micro:bit の背面にある電源インジケーター LED が点灯します。「この PC」を開くと、リストに MICROBIT ドライブが表示されます。

- ステップ 3: 新しいプロジェクトを作成すると、以下のようなワークスペースに移動します。LED マトリックスにハートのパターンを表示する簡単なプログラムを書いてみましょう。完了したら次のステップに進みます。
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918301-9ce6d080-3fa8-4196-9018-53a08ae4f046.png#align=left&display=inline&height=150&originHeight=150&originWidth=206&size=0&status=done&style=none&width=206) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/7.png)

- ステップ 4: プログラムを micro:bit にダウンロードします。プロジェクトにタイトルを付けます（例: show heart icon）。

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655918254-c10baa7a-f1b7-46a7-baf9-63b5865897e8.png#align=left&display=inline&height=73&originHeight=73&originWidth=698&size=0&status=done&style=none&width=698) -->
![](https://files.seeedstudio.com/wiki/microbit/image2/8.png)

まず、インターフェースの左下にある「Download」をクリックし、ポップアップダイアログボックスで「Save as」を選択して .hex ファイルを保存します。次に、別のポップアップダイアログボックスで MICROBIT ドライブを選択し、「Save」をクリックします（「Save as」が見つからない場合は、ダウンロードした .hex ファイルを自分で検索し、MICROBIT ドライブにコピーまたはドラッグしてください）。ダウンロード中はインジケーターが点滅しますが、プロセスが完了すると点灯状態になります。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>