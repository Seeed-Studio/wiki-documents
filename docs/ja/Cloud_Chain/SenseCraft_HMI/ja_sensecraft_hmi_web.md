---
description: SenseCraft HMIプラットフォームの機能であるWebの使用方法を紹介します。
title: Web機能
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/sensecraft_hmi_web
sidebar_position: 7
last_update:
  date: 07/21/2025
  author: Citric
---

# SenseCraft HMIでのWeb機能の使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/88.jpg" style={{width:800, height:'auto'}}/></div>

## はじめに

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)のWeb機能を使用すると、スクリーンベースのデバイスに直接Webコンテンツを表示できます。この強力な機能により、デバイスを専用のWebディスプレイに変換し、ダッシュボード、監視システム、ドキュメント、または必要なあらゆるWebコンテンツを表示できます。従来のブラウザとは異なり、SenseCraft HMIのWeb機能は組み込みディスプレイとIoTデバイス向けに最適化されており、情報キオスク、ステータスモニター、または専用Webインターフェースの作成に最適です。

このチュートリアルでは、SenseCraft HMIでのWeb機能の使用方法を説明し、Webコンテンツのセットアップ、プレビュー、およびデバイスへのデプロイメントについて説明します。

この記事では、[reTerminal E1002](https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1002/)を例として、SenseCraft HMIプラットフォームでこの機能を使用する方法を説明します。

## Web機能の開始

### Web機能へのアクセス

ステップ1. 以下のSenseCraft HMIプラットフォームにアクセスします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

ステップ2. デバイスを接続するか、すでにペアリングされたデバイスを選択して使用します。

ステップ3. 左サイドバーの「Web」タブをクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/83.png" style={{width:1000, height:'auto'}}/></div>

### Webインターフェースの理解

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/82.png" style={{width:1000, height:'auto'}}/></div>

Webインターフェースは3つの主要セクションで構成されています：

1. **URL設定パネル**: 右側に配置され、Webアドレスを入力できます

2. **表示エリア**: プレビューまたはデプロイメント後にWebコンテンツが表示されるメインセクション

3. **コントロールボタン**: 上部に配置され、プレビュー、保存、デプロイオプションが含まれます

Web機能に初めてアクセスする際、Webページを設定してプレビューするまで表示エリアは空になります。

## Webコンテンツの設定

### Webページの追加

ステップ1. 画面右側のWeb設定パネルを見つけます

ステップ2. 「URL」入力フィールドを見つけます

ステップ3. フィールドに有効なWebアドレスを入力します（例：https://weather.gov/）

:::tip
https://またはhttp://プレフィックスを含む完全なURLを入力してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/84.png" style={{width:1000, height:'auto'}}/></div>

ステップ4. 「Set」ボタンをクリックしてURLを検証します

### Webコンテンツのプレビュー

SenseCraft HMIの他の機能とは異なり、Web機能ではコンテンツを表示するために明示的なプレビューステップが必要です：

ステップ1. URLを入力して設定した後、上部ツールバーの「Preview」ボタンをクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/86.png" style={{width:1000, height:'auto'}}/></div>

ステップ2. 表示エリアでWebページが読み込まれるまで待ちます

ステップ3. Webコンテンツが正しく表示され、デバイスの画面サイズに適しているかを確認します

:::note
プレビューステップは、デプロイメント前にWebコンテンツがデバイスで適切に表示されることを確認できるため重要です。
:::

### Webコンテンツの保存とデプロイ

Webコンテンツをプレビューして適切に表示されることを確認したら：

ステップ1. 「Save」ボタンをクリックしてWeb設定を保存します

ステップ2. 「Deploy」をクリックして設定を接続されたデバイスに送信します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/87.png" style={{width:1000, height:'auto'}}/></div>

ステップ3. デプロイメント確認メッセージを待ちます

デプロイメントが成功すると、デバイスに設定されたWebページが表示されます。

## デバイス向けWebコンテンツの最適化

すべてのWebサイトが小型ディスプレイや組み込みデバイス向けに設計されているわけではありません。Webコンテンツの選択と最適化のためのヒントをご紹介します：

### Web対応コンテンツの選択

1. **モバイル対応のWebサイトを選択する**：

- モバイルデバイス向けに設計されたサイトは、通常小さな画面でより良く表示されます

- お使いのデバイスの解像度で適切に動作する適応レイアウトを持つサイトを探してください

2. **シンプルで軽量なページを検討する**：

- 重いJavaScriptを含む複雑なWebサイトは、読み込みが遅くなったり、より多くのリソースを消費する可能性があります

- 静的ページは通常、動的Webアプリケーションよりも優れたパフォーマンスを発揮します

3. **認証が必要なサイトを避ける**：

- ログインセッションが期限切れになり、手動での介入が必要になる場合があります

- 一部の認証方法は組み込みデバイスでは適切に動作しない可能性があります

### 推奨Webコンテンツタイプ

SenseCraft HMIのWeb機能で特に適切に動作するWebコンテンツタイプをご紹介します：

1. **天気ダッシュボード**：

- [Weather.gov](https://weather.gov)

- [Windy.com](https://www.windy.com/)

- [AccuWeather](https://www.accuweather.com/)

2. **監視ダッシュボード**：

- Grafanaダッシュボード

- ホームオートメーション制御パネル

- システムステータスページ

3. **情報表示**：

- 交通スケジュール

- フライト情報

- 会議室の利用可能状況

4. **ドキュメントまたはリファレンス**：

- ローカルwiki

- 手順ガイド

- クイックリファレンス情報

## カスタムWebコンテンツの作成

最高のエクスペリエンスを得るために、お使いのデバイスのディスプレイ専用に設計されたカスタムWebページの作成を検討してください：

### シンプルなHTMLページ

お使いのデバイスの解像度に最適化された基本的なHTMLページを作成できます。以下はシンプルな例です：

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Device Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            font-size: 18px;
        }
        .container {
            padding: 15px;
        }
        .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        .info-box {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="title">Device Status</div>
        <div class="info-box">Temperature: 22.5°C</div>
        <div class="info-box">Humidity: 45%</div>
        <div class="info-box">Battery: 87%</div>
    </div>
</body>
</html>
```

### カスタムページのホスティングオプション

カスタムWebコンテンツを表示するには、デバイスからアクセス可能な場所にホストする必要があります：

1. **ローカルネットワークサーバー**:

- ローカルネットワーク上にシンプルなWebサーバーを設定

- XAMPP、NGINX、またはWebサーバーを実行するRaspberry Piなどのツールを使用

2. **無料の静的ホスティングサービス**:

- [GitHub Pages](https://pages.github.com/)

- [Netlify](https://www.netlify.com/)

- [Vercel](https://vercel.com/)

3. **無料プランのあるクラウドサービス**:

- [Firebase Hosting](https://firebase.google.com/products/hosting)

- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)

## 特別な使用例

### ローカルネットワークリソースの表示

Web機能はローカルネットワーク上のリソースを表示するために使用できます：

1. **ホームオートメーションダッシュボード**:

- Home Assistant: `http://homeassistant.local:8123`

- OpenHAB: `http://openhab.local:8080`

2. **ネットワーク監視ツール**:

- ルーター管理パネル

- ネットワーク監視ダッシュボード

3. **ローカルメディアサーバー**:

- Plexステータスページ

- NAS Webインターフェース

:::warning
セキュリティ上の理由から、公開されているデバイスで管理インターフェースを表示する際は注意してください。
:::

### 自動ページローテーション

複数のWebページを順番に表示したい場合：

1. JavaScriptでURLを循環させるシンプルなHTMLページを作成：

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Rotator</title>
    <style>
        body, html, iframe {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            border: none;
            overflow: hidden;
        }
    </style>
    <script>
        // Array of URLs to rotate through
        const urls = [
            'https://weather.gov',
            'https://example.com/dashboard',
            'https://example.com/calendar'
        ];
        
        let currentIndex = 0;
        
        function rotatePages() {
            document.getElementById('display-frame').src = urls[currentIndex];
            currentIndex = (currentIndex + 1) % urls.length;
            setTimeout(rotatePages, 30000); // Change page every 30 seconds
        }
        
        window.onload = rotatePages;
    </script>
</head>
<body>
    <iframe id="display-frame" src="about:blank"></iframe>
</body>
</html>
```

2. 上記の方法のいずれかを使用してこのページをホストします

3. SenseCraft HMIのWeb機能にこのローテーターページのURLを入力します

## トラブルシューティング

### 一般的なWeb表示の問題と解決策

1. **Webページが読み込まれない**:

- URLが正しく、http://またはhttps://プレフィックスが含まれていることを確認してください。明らかに正しいURLを入力したにも関わらず、まだプレビューできない場合は、URLの末尾に「/」を追加してみてください。奇跡的な効果があるかもしれません。

- 通常のブラウザでテストして、ページにアクセスできるかどうかを確認してください

- デバイスがインターネットに接続されていることを確認してください

- 一部のWebサイトは埋め込みをブロックしたり、セキュリティ制限がある場合があります

2. **コンテンツが正しく表示されない**:

- Webサイトがデバイスのスクリーンサイズに最適化されていない可能性があります

- 利用可能な場合は、サイトのモバイル専用バージョンを試してください

- ディスプレイの寸法に特化したカスタムページの作成を検討してください

3. **パフォーマンスの問題**:

- アニメーションや重いJavaScriptを含む複雑なWebサイトは動作が遅くなる場合があります

- よりシンプルなページやカスタム構築の代替案を試してください

- 一部のWebサイトは、デバイスが処理できる以上のメモリを使用する場合があります

4. **デプロイメントが失敗する**:

- デバイスがSenseCraft HMIに適切に接続されていることを確認してください

- デバイスのインターネット接続を確認してください
  
- デバイスを再起動して、再度デプロイを試してください

5. **コンテンツの頻繁な更新が必要**:

- 一部の動的コンテンツは自動更新されない場合があります
  
- カスタムページで更新間隔を設定することを検討するか、
  
- 定期的に設定を再デプロイしてください

## ベストプラクティス

### セキュリティの考慮事項

Web機能を使用する際は、以下のセキュリティ考慮事項を念頭に置いてください：

1. **機密情報を避ける**:

- 公開されているデバイスで個人情報や機密情報を含むページを表示しないでください
  
- 管理パネルやコントロールインターフェースには注意してください

2. **可能な限りHTTPSを使用する**:

- 非セキュア（http://）URLよりもセキュア（https://）URLを優先してください
  
- これにより、デバイスに送信されるデータの保護に役立ちます

3. **ネットワーク分離を検討する**:

- 内部リソースを表示するディスプレイの場合、別のネットワークの使用を検討してください
  
- ファイアウォールルールを使用して、デバイスがアクセスできるものを制限してください

### メンテナンスのヒント

Web表示をスムーズに動作させ続けるために：

1. **定期的なチェック**:

- 表示されているコンテンツが正しく動作していることを定期的に確認してください

- Webサイトは予告なしにレイアウトやURLを変更する場合があります

2. **ブックマークの更新**:

- ディスプレイ用の有用なURLのリストを保持してください

- 優先サイトが変更された場合に備えて代替案をテストしてください

3. **バックアップの作成**:

- 重要なディスプレイの場合、迅速にデプロイできるバックアップページを作成してホストしてください

- これにより、主要なWebリソースが利用できなくなった場合の継続性が確保されます

## 結論

SenseCraft HMIのWeb機能は、スクリーンベースのデバイスでWebコンテンツを表示する柔軟な方法を提供します。このガイドに従うことで、Webページを設定、プレビュー、デプロイして、ニーズに合わせた情報ディスプレイ、ダッシュボード、または参照スクリーンを作成できます。

すべてのWebコンテンツが小さなディスプレイや組み込みデバイスに適しているわけではないことを覚えておいてください。最高のエクスペリエンスを得るために、モバイル対応のWebサイトを使用するか、デバイスの寸法と機能に特化して設計されたカスタムWebページの作成を検討してください。

## リソース

- [SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi)
- [対応デバイス - reTerminal E シリーズ](https://wiki.seeedstudio.com/ja/reterminal_e10xx_main_page/)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

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
