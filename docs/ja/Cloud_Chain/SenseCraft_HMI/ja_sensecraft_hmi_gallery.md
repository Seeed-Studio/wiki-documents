---
description: SenseCraftHMIプラットフォーム下のGallery機能の使用方法を紹介します。
title: Gallery機能
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/sensecraft_hmi_gallery
sidebar_position: 3
last_update:
  date: 07/21/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCraft HMIでのGallery機能の使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/66.jpg" style={{width:800, height:'auto'}}/></div>

## はじめに

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)のGallery機能を使用すると、スクリーンベースのデバイスを美しいデジタルフォトフレームに変換できます。ローカル画像をアップロードしたり、URLから画像をインポートしたりして、カスタマイズ可能な切り替え間隔と視覚効果で表示できます。この機能は、Seeed Studioのディスプレイデバイスを使用してアンビエントディスプレイ、情報画面、または装飾的なフォトアルバムを作成するのに最適です。

このチュートリアルでは、SenseCraft HMIのGallery機能の使用方法を説明し、画像アップロード方法、表示設定、および最適なパフォーマンスのための重要な考慮事項をカバーします。

この記事では、[reTerminal E1002](https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1002/)を例として、SenseCraft HMIプラットフォームでこの機能を使用する方法を説明します。

## Galleryの使用開始

### Gallery機能へのアクセス

ステップ1. 以下のSenseCraft HMIプラットフォームにアクセスします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

ステップ2. デバイスを接続するか、すでにペアリングされたデバイスを選択して使用します。

ステップ3. 左サイドバーの「Gallery」タブをクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/67.png" style={{width:1000, height:'auto'}}/></div>

### Galleryインターフェースの理解

Galleryインターフェースは、いくつかの主要な要素で構成されています：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/68.png" style={{width:1000, height:'auto'}}/></div>

1. **コントロールパネル**: 上部に位置し、間隔時間、ディザーモード、およびアクションボタンの設定が含まれています

2. **画像表示エリア**: 現在の画像が表示されるメインセクション

3. **画像ツールバー**: 現在の画像を調整、ダウンロード、または削除するためのツールが含まれています

4. **サムネイルストリップ**: 下部に位置し、ギャラリー内のすべてのアップロード済み画像を表示します

5. **アクションボタン**: ギャラリーをテストしてデバイスに適用するための保存、プレビュー、およびデプロイボタン

## ギャラリーへの画像追加

SenseCraft HMIは、ギャラリーに画像を追加するための2つの方法を提供しています：ローカルファイルのアップロードまたはURLからのインポート。

### ローカル画像のアップロード

ステップ1. コントロールパネルの「Add Photos」ボタンをクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/70.png" style={{width:1000, height:'auto'}}/></div>

ステップ2. 表示されるダイアログで、「Upload Files」タブが選択されていることを確認します

ステップ3. 「Select Photos」をクリックして、コンピューターからアップロードしたい画像を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/69.png" style={{width:600, height:'auto'}}/></div>

ステップ4. 重要な画像要件と制限事項：

- JPG、PNG、GIF形式をサポート

- 2MBを超える写真は自動的に圧縮されます

- 5:3以外のアスペクト比は白いパディングで調整されます

- ターゲット解像度：800x480ピクセル（またはデバイスのネイティブ解像度）

- MicroSDカードなしでは、最大3枚の写真をアップロードできます

- MicroSDカードありでは、最大20枚の写真をアップロードできます

ステップ5. 必要に応じて、Ctrl/Cmd + クリックを使用して複数のファイルを選択します

ステップ6. 「Open」をクリックして選択した画像をアップロードします

### URLからの画像インポート

ステップ1. コントロールパネルの「Add Photos」ボタンをクリックします

ステップ2. 表示されるダイアログで、「Import from URL」タブを選択します

ステップ3. 提供されたフィールドに直接画像URLを入力します

ステップ4. 「Import」をクリックして画像をギャラリーに追加します

:::tip
URLからインポートする際は、.jpg、.png、.gifなどのファイル拡張子で終わる直接画像リンクを使用していることを確認してください。画像を含むWebページへのリンクは機能しない場合があります。
:::

## ギャラリーの管理

### 表示間隔の設定

間隔設定は、次の画像に切り替わるまでの各画像の表示時間を決定します：

ステップ1. コントロールパネルの「Interval(min):」フィールドを見つけます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/71.png" style={{width:600, height:'auto'}}/></div>

ステップ2. 希望する表示時間を分単位で入力します（例：1画像あたり1分の場合は1）

### ディザモードの選択

ディザモードは、特定のデバイスで最適な表示を行うために画像がどのように処理されるかに影響します：

ステップ1. コントロールパネルの「Dither Mode:」ドロップダウンを見つけます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/72.png" style={{width:600, height:'auto'}}/></div>

ステップ2. デバイスに適したオプションを選択します：

- **Full Color**: カラーLCDディスプレイに最適で、すべての色情報を保持します

- **Black and White**: 画像を純粋な白黒に変換し、モノクロ電子ペーパーディスプレイに理想的です

:::tip
電子ペーパー/電子インクディスプレイの場合、最適な表示品質と高速なリフレッシュレートのために「Black and White」モードを選択してください。LCDスクリーンの場合、「Full Color」が最高の視覚体験を提供します。
:::

### 画像ツールバーの使用

ギャラリー内の各画像は、画像の上に表示されるツールバーを使用して調整できます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/73.png" style={{width:700, height:'auto'}}/></div>

左から右へ、ツールは以下の通りです：

1. **Fill Horizontally**: アスペクト比を維持しながら画像を水平方向に画面いっぱいに調整します

2. **Fill Vertically**: アスペクト比を維持しながら画像を垂直方向に画面いっぱいに調整します

3. **Download**: 処理された画像をコンピューターに保存します

4. **Delete**: ギャラリーから画像を削除します

:::tip
横向きの画像には「Fill Horizontally」オプションを、縦向きの画像には「Fill Vertically」を使用して、画像の歪みを避けながらディスプレイスペースを最大限に活用してください。
:::

### 画像の並び替え

サムネイルストリップを使用して画像の表示順序を変更できます：

ステップ1. 画面下部のストリップで移動したい画像のサムネイルを見つけます

ステップ2. サムネイルをクリックしてシーケンス内の新しい位置にドラッグします

ステップ3. 離して新しい順序を設定します

## デバイスへのギャラリーのデプロイ

画像を追加して設定したら、接続されたデバイスにギャラリーをデプロイできます：

ステップ1. 「Save」ボタンをクリックしてギャラリー設定を保存します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/74.png" style={{width:1000, height:'auto'}}/></div>

:::tip
画像をアップロードまたはデザインした後は、習慣的に保存ボタンをクリックして、レイアウトデザインが簡単に失われないようにしてください。
:::

ステップ2. （オプション）「Preview」をクリックして、完全にデプロイすることなく、ギャラリーがデバイスでどのように表示されるかを確認します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/75.png" style={{width:1000, height:'auto'}}/></div>

ステップ3. 「Deploy」をクリックして接続されたデバイスにギャラリーを送信します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/76.png" style={{width:1000, height:'auto'}}/></div>

ステップ4. デプロイ確認メッセージを待ちます

:::tip
デプロイボタンをクリックした後、デバイスはすぐにアルバムを更新しない場合があります。デバイスがスリープモードになっている可能性があります。次回起動時に最新のアルバム画像を取得します。写真をすぐに更新したい場合は、デバイス上の緑色のボタンをクリックすると、デバイスが即座に起動してダッシュボードの更新を取得します。
:::

デプロイ後、デバイスは間隔設定に従って画像の表示を開始します。

## ストレージに関する考慮事項

### MicroSDカードの要件

デバイスに3枚以上の画像を保存するには、MicroSDカードを使用する必要があります：

1. **フォーマット**: MicroSDカードはFAT32でフォーマットする必要があります

2. **サイズ**: 8GB以上を推奨（最大32GBまでサポート）

3. **速度**: より良いパフォーマンスのためにClass 10以上を推奨

:::warning
FAT32以外のファイルシステムを使用すると、デバイスがMicroSDカードを認識しなかったり、画像の保存に失敗したりする可能性があります。
:::

### MicroSDカードをFAT32でフォーマットする方法

<Tabs>
<TabItem value="On Windows" label="On Windows" default>

ステップ1. MicroSDカードをコンピュータに挿入します

ステップ2. ファイルエクスプローラーを開き、MicroSDカードを右クリックします

ステップ3. 「フォーマット...」を選択します

ステップ4. ファイルシステムのドロップダウンから「FAT32」を選択します

ステップ5. 「開始」をクリックしてフォーマットを開始します

</TabItem>
<TabItem value="On macOS" label="On macOS">

ステップ1. MicroSDカードをコンピュータに挿入します

ステップ2. ディスクユーティリティを開きます（アプリケーション > ユーティリティ > ディスクユーティリティ）

ステップ3. サイドバーからMicroSDカードを選択します

ステップ4. 「消去」をクリックします

ステップ5. フォーマットとして「MS-DOS (FAT)」を選択します

ステップ6. 「消去」をクリックしてカードをフォーマットします

</TabItem>
</Tabs>

### MicroSDカードの挿入

ステップ1. デバイスの電源を切ります

ステップ2. デバイス上のMicroSDカードスロットを見つけます

ステップ3. 適切にフォーマットされたMicroSDカードを挿入します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

ステップ4. デバイスの電源を入れます

ステップ5. SenseCraft HMIに再接続して、拡張ストレージが認識されることを確認します

## ディスプレイ用の画像最適化

デバイスのディスプレイで最高の視覚的結果を得るために：

1. **解像度を合わせる**: デバイスのネイティブ解像度（通常800x480ピクセル）に合わせた画像を準備します

2. **アスペクト比を考慮する**: 白いパディングを避けるために5:3のアスペクト比の画像を使用します

3. **ディスプレイタイプに最適化する**:

- カラーLCDの場合: 標準的なカラー画像が適しています
- 電子ペーパー/電子インクの場合: より高いコントラストで色のグラデーションが少ない画像
- 2色電子ペーパーの場合: 白黒または高コントラストの画像

4. **ファイルサイズ**: 自動圧縮を避けるために画像を2MB未満に保ちます

5. **明度/コントラスト**: 特定のディスプレイの特性に基づいて調整します

## トラブルシューティング

### よくある問題と解決策

1. **画像がアップロードされない**:

- 画像がサポートされている形式（JPG、PNG、GIF）であることを確認してください

- ファイルサイズが大きすぎないことを確認してください（理想的には2MB未満）

- 別のブラウザを試すか、ブラウザのキャッシュをクリアしてください

2. **3枚以上の画像をアップロードできない**:

- 適切にフォーマットされたMicroSDカードがデバイスに挿入されていることを確認してください

- MicroSDカードがFAT32でフォーマットされていることを確認してください

- デバイスがMicroSDカードを適切に検出していることを確認してください

3. **画像が正しく表示されない**:

- 画像ツールバーを使用して明度/コントラストを調整してください

- デバイスの解像度に合わせた画像を準備してください

4. **デプロイメントが失敗する**:

- デバイスがSenseCraft HMIに適切に接続されていることを確認してください

- デバイスに十分なストレージ容量があることを確認してください
  
- デバイスを再起動して、再度デプロイを試してください

## 結論

SenseCraft HMIのギャラリー機能は、スクリーンベースのデバイスをデジタルフォトフレームに簡単に変換する方法を提供します。このガイドに従うことで、最適な表示のためのカスタマイズされた設定で、デバイス上で画像をアップロード、管理、表示することができます。

3枚以上の画像を保存するには、デバイスに適切にフォーマットされたMicroSDカードを挿入する必要があることを覚えておいてください。適切な設定により、Seeed Studioディスプレイデバイス上でお気に入りの画像を紹介する美しいスライドショーやディスプレイを作成できます。

## リソース

- [SenseCraft HMIプラットフォーム](https://sensecraft.seeed.cc/hmi)
- [対応デバイス - reTerminal Eシリーズ](https://wiki.seeedstudio.com/ja/reterminal_e10xx_main_page/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

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
