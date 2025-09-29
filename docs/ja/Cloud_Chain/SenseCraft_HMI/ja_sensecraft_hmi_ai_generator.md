---
description: SenseCraftHMIプラットフォーム下のAI生成機能の使用方法を紹介します。
title: AI生成機能
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/sensecraft_hmi_ai_generation
sidebar_position: 2
last_update:
  date: 07/21/2025
  author: Citric
---

# SenseCraft HMIでのAI生成の使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/65.jpg" style={{width:700, height:'auto'}}/></div>

## はじめに

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)は、Seeed Studioのスクリーンベース製品専用に作成されたインタラクティブインターフェース設計プラットフォームです。その最も強力な機能の一つがAI生成機能で、自然言語で欲しいものを説明するだけで美しいディスプレイレイアウトや画像を作成できます。

このチュートリアルでは、[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)のGalleryとCanvasセクションの両方でAI生成機能を使用する方法をガイドし、以下のことを可能にします：

- テキスト説明に基づいたカスタム画像の生成

- 適切に配置されたコンポーネントを持つ完全なインターフェースレイアウトの作成

- 会話を通じたAI生成コンテンツの改良と調整

- ワンクリックでデザインを直接デバイスにデプロイ

この記事では、[reTerminal E1002](https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1002/)を例として、SenseCraft HMIプラットフォームでこの機能を使用する方法を説明します。

## AI生成の開始

AI生成機能は、SenseCraft HMIのGalleryとCanvasセクションの両方で利用できます。それぞれの実装は異なる目的を果たします：

- **Gallery AI生成**：説明に基づいてスタンドアロン画像を作成

- **Canvas AI生成**：ボタン、テキストフィールド、データ表示などの機能的コンポーネントを持つ完全なインターフェースを設計

これらの機能を効果的に使用する方法を探ってみましょう。

## GalleryでのAI生成

Gallery AI生成では、デザインスキルや外部ツールを必要とせずに、ディスプレイ用のカスタム画像を作成できます。

### Gallery AI生成へのアクセス

ステップ1. 以下のSenseCraft HMIプラットフォームに移動します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

ステップ2. デバイスを接続するか、使用する既にペアリングされたデバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/56.png" style={{width:1000, height:'auto'}}/></div>

ステップ3. 左サイドバーの「Gallery」タブをクリックします

ステップ4. 画面右側のAI Generatorパネルに注目してください

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/57.png" style={{width:1000, height:'auto'}}/></div>

### GalleryでのAIによる画像作成

ステップ1. AI Generatorパネルで、「Describe the image you want to generate...」のようなプロンプトが表示されたテキスト入力フィールドが表示されます

ステップ2. 作成したい画像の詳細な説明を入力します。例えば：

- 「日の出と松の木がある美しい山の風景」

- 「温度と湿度のアイコンを表示するミニマリストダッシュボード」

- 「中央にSeeed Studioロゴがある回路基板パターン」

ステップ3. 「Generate」ボタン（魔法の杖アイコン）をクリックして画像生成プロセスを開始します

ステップ4. AIがリクエストを処理する間待機します。これは通常、説明の複雑さに応じて10-30秒かかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/58.png" style={{width:1000, height:'auto'}}/></div>

ステップ5. 完了したら、「Add to Gallery」ボタンをクリックすると、AI生成画像がギャラリーに表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/59.png" style={{width:1000, height:'auto'}}/></div>

### AI生成Gallery画像の改良

画像を生成した後、AIとの会話を通じて改良できます：

ステップ1. 結果に満足できない場合は、AI Generatorパネルで直接フィードバックを提供できます。例えば：

- 「色をもっと鮮やかにして」

- 「画像にもっとコントラストを追加して」

- 「背景を青に変更して」

ステップ2. フィードバックに基づいて新しいバージョンを作成するために、再度「Generate」をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/60.png" style={{width:1000, height:'auto'}}/></div>

ステップ3. 結果に満足するまで、この反復プロセスを続けます

## CanvasでのAI生成

Canvas AI生成はより強力で、機能的なコンポーネントを持つ完全なインタラクティブインターフェースを作成できます。

### Canvas AI生成へのアクセス

ステップ1. 左サイドバーの「Canvas」タブをクリックします

ステップ2. 画面右側のAI Generatorパネルに注目してください。これはGalleryのものと似ています

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/61.png" style={{width:1000, height:'auto'}}/></div>

### CanvasでAIを使用したインターフェース作成

ステップ1. AI Generatorパネルで、作成したいインターフェースの説明を入力します。必要なコンポーネントについて具体的に記述してください。例：

- "温度表示、湿度ゲージ、予報アイコンを持つ天気ダッシュボードを作成"

- "照明、サーモスタット、セキュリティのボタンを持つスマートホーム制御パネルをデザイン"

- "歩数カウンター、心拍数表示、活動履歴を持つフィットネストラッカーインターフェースを作成"

ステップ2. 「Generate」ボタンをクリックしてインターフェース生成プロセスを開始します

ステップ3. AIがリクエストを処理してインターフェースレイアウトを作成するまで待ちます

ステップ4. 完了すると、AIは説明に従って様々なコンポーネントをCanvas上に配置します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/62.png" style={{width:1000, height:'auto'}}/></div>

### AI生成インターフェースの改良

Canvas AIは反復的な改善のために設計されています：

ステップ1. 生成されたインターフェースを確認し、変更したい点を特定します

ステップ2. AI Generatorパネルで具体的なフィードバックを提供できます。例：

- "温度表示を右上に移動"

- "ボタンを大きくして下にラベルを追加"

- "カラースキームをダークモードに変更"

- "上部中央に時計を追加"

ステップ3. フィードバックに基づいてインターフェースを更新するため、再度「Generate」をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/63.png" style={{width:1000, height:'auto'}}/></div>

ステップ4. コンポーネントを選択してCanvasの編集ツールを使用することで、手動で調整することもできます

### AI生成インターフェースで利用可能なコンポーネントタイプ

Canvas AIは様々なコンポーネントを作成・配置できます：

**基本コンポーネント：**

- テキストラベル

- 画像

- 図形（長方形、円、線）

- ボタン

- アイコン

**デバイスデータコンポーネント：**

- 温度表示

- 湿度インジケーター

- バッテリーレベルインジケーター

- 天気情報

- 時刻と日付表示

インターフェースを生成する際、プロンプトでこれらのコンポーネントを具体的に要求できます。

### AI生成インターフェースの使用

AI生成インターフェースに満足したら：

ステップ1. コンポーネントの位置やプロパティに最終的な手動調整を行います

ステップ2. 「Deploy」ボタンをクリックして、接続されたデバイスにインターフェースをデプロイします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/64.png" style={{width:600, height:'auto'}}/></div>

## AI生成のベストプラクティス

AI生成機能を最大限に活用するため、以下のヒントに従ってください：

### 効果的なプロンプトのヒント

1. **具体的に記述する**：「ダッシュボードを作成」ではなく、「中央に温度表示、右側に湿度、上部に時計を持つダッシュボードを作成」と記述する

2. **色とスタイルに言及する**：「すべての要素に角丸を使用した青と白のカラースキームを使用」

3. **馴染みのあるデザインを参照する**：「スマートサーモスタットインターフェースのように作成」または「フィットネストラッカーディスプレイに似たデザイン」

### 反復的な改良

最も成功するデザインは、多くの場合、複数回のフィードバックから生まれます：

1. 一般的な説明から始める

2. 初期デザインを生成する

3. 変更点について具体的なフィードバックを提供する

4. 更新されたバージョンを生成する

5. 満足するまで繰り返す

### AI生成と手動編集の組み合わせ

最良の結果を得るために：

1. AIを使用して基本レイアウトとコンポーネントを素早く作成する

2. 個々の要素の位置、サイズ、プロパティを手動で微調整する

3. カスタム機能やデータバインディングを手動で追加する

4. 新しいセクションを追加したり大きな変更を行いたい場合は、再度AIを使用する

## 結論

SenseCraft HMIのAI生成機能は、スクリーンベースのデバイス用インターフェースの作成方法を革新します。AI生成コンテンツの力とSenseCraft HMIの簡単なデプロイメントを組み合わせることで、広範囲なデザインスキルなしに、プロフェッショナルな見た目のディスプレイを素早く作成できます。

Galleryでカスタムイメージを生成する場合でも、Canvasで完全なインタラクティブインターフェースを生成する場合でも、AI生成ツールはあなたのアイデアをより速く、より少ない労力で実現するのに役立ちます。

## リソース

- [SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi)
- [Compatible Devices - reTerminal E Series](https://wiki.seeedstudio.com/ja/reterminal_e10xx_main_page/)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
