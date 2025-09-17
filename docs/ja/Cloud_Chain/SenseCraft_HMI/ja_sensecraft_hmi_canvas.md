---
description: SenseCraft HMIプラットフォーム下のCanvas機能の使用方法を紹介します。
title: Canvas機能
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/sensecraft_hmi_canvas
sidebar_position: 4
last_update:
  date: 07/21/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCraft HMIでのCanvas使用方法

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/141.jpg" style={{width:800, height:'auto'}}/></div>

## はじめに

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)のCanvas機能は、プラットフォームの最も強力で柔軟な機能であり、カスタムインターフェース、ダッシュボード、データ可視化を作成することができます。Canvasを使用すると、デバイスセンサー、天気情報、株価データなど、さまざまなソースからの動的データと静的要素を組み合わせた美しいディスプレイを設計できます。

この包括的なガイドでは、Canvas機能を使用してSeeedデバイス用のプロフェッショナルなディスプレイを作成する方法を説明します。基本的な図形やテキストから、リアルタイムデータウィジェットや既製のテンプレートまで、特定のニーズに合わせたカスタマイズされたインターフェースを構築するために必要なすべてを学習できます。

この記事では、[reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/)を例として、SenseCraft HMIプラットフォームでこの機能を使用する方法を説明します。

## Canvasの開始

### Canvas機能へのアクセス

ステップ1. 以下のSenseCraft HMIプラットフォームにアクセスします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

ステップ2. デバイスを接続するか、すでにペアリングされたデバイスを選択して使用します。

ステップ3. 左サイドバーの「Canvas」タブをクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/89.png" style={{width:1000, height:'auto'}}/></div>

### Canvasインターフェースの理解

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/90.png" style={{width:1000, height:'auto'}}/></div>

Canvasインターフェースは、いくつかの主要なセクションで構成されています：

1. **コンポーネントサイドバー**: Basic、Device、Data、Templatesにカテゴリ分けされた利用可能なすべての要素を含む左パネル

2. **Canvasエリア**: インターフェースを設計する中央のワークスペース

3. **ツールバー**: デザインツール、設定、フォーマットオプションを含む上部バー

4. **プロパティパネル**: 要素が選択されたときに表示され、外観と動作のカスタマイズが可能

5. **アクションボタン**: デザインをテストして適用するためのSave、Preview、Deployボタン

## 基本コンポーネント

Basicセクションでは、インターフェースレイアウトを作成するための基本的な要素を提供します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/91.png" style={{width:1000, height:'auto'}}/></div>

### Text

Textコンポーネントを使用すると、ラベル、タイトル、その他のテキストコンテンツをcanvasに追加できます。

ステップ1. Basicセクションの「Text」コンポーネントをクリックします。テキストは自動的にcanvasの中央に配置されます

ステップ2. テキストを配置したいエリアにドラッグします

ステップ3. 「Text」という単語が入ったデフォルトのテキストボックスが表示されます

ステップ4. プロパティパネルを使用してカスタマイズします：

  - フォントサイズ（デフォルトは30px）

  - テキストスタイル（太字、斜体、下線）

  - 配置（左、中央、右）

  - 色

  - フォントファミリー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/92.png" style={{width:1000, height:'auto'}}/></div>


### Data

Dataコンポーネントは、外部APIから取得した動的情報をcanvas上に直接表示するための強力なツールです。これにより、天気、株価、またはWeb APIを通じて利用可能なその他の情報などのリアルタイムデータを統合できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/143.png" style={{width:1000, height:'auto'}}/></div>

ステップ1. Basicセクションの「Data」コンポーネントをクリックします。「Data」という単語が入ったプレースホルダーテキストボックスがcanvas上に表示されます。

ステップ2. 「Data」コンポーネントを希望の位置にドラッグします。

ステップ3. コンポーネントが選択された状態で、ツールバーの**Data Settings**アイコン（チェーンリンクのような形）をクリックして設定パネルを開きます。

ステップ4. **Data Settings**パネルで、外部データソースを設定します：
   - **Remote Data URL**: データを取得したい外部APIの完全なURLを入力します。
   - **Data Key**: APIのJSONレスポンスから表示したいデータへの正確なパスを指定します。ネストされたオブジェクトにはドット記法（例：`current.temp_c`）を使用し、配列には数値インデックスを使用します。
   - **Precision**: 数値データの場合、表示したい小数点以下の桁数を設定します。デフォルトは2です。
   - **Test**: このボタンをクリックして、URLとData Keyが正しく、データが正常に取得できることを確認します。
   - **Request Headers（オプション）**: APIが認証やその他の目的で特定のヘッダーを必要とする場合、このセクションを展開して追加できます。

ステップ5. プロパティパネルを使用して表示されるデータの外観をカスタマイズすることもできます：
  - フォントサイズとスタイル
  - 配置
  - 色
  - フォントファミリー

### Image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/94.png" style={{width:1000, height:'auto'}}/></div>

Imageコンポーネントを使用すると、canvasに画像を追加できます。

ステップ1. 「Image」コンポーネントをクリックします

ステップ2. プロパティパネルで「Upload」をクリックして画像を追加するか、画像URLを入力します

ステップ3. 必要に応じてサイズと位置を調整します

### Date

Dateコンポーネントは、さまざまな形式で設定できる日付、時刻、またはタイムスタンプを表示します。

ステップ1. Dataセクションの「Date」コンポーネントをクリックします

ステップ2. コンポーネントは自動的にキャンバスの左上角に配置され、デフォルトの日付形式（通常はMM/DD/YYYY）が表示されます

ステップ3. ツールバーのカレンダーアイコンをクリックして、日付設定パネルを開きます

ステップ4. 日付設定パネルで：

   - 日付ピッカーまたは入力フィールドを使用して特定の日付を設定します

   - ドロップダウンメニューから日付形式を選択します（例：MM/DD/YYYY、DD/MM/YYYY、YYYY-MM-DD）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/105.png" style={{width:1000, height:'auto'}}/></div>

ステップ5. プロパティパネルを使用してさらにカスタマイズします：

   - フォントサイズとスタイル

   - テキストの色

   - 配置

   - 背景（必要に応じて）

:::note
キャンバスに表示される日付は静的で、日付設定で設定した内容を表します。デバイスにデプロイされると、日付コンポーネントは以下のいずれかの動作をします：

- 設定した静的日付を表示（締切日、イベント日などに便利）

- 動的モードに設定されている場合、現在の日付/時刻を表示し、デバイス上で自動的に更新されます
:::

### 図形

SenseCraft HMI Canvasは様々な図形コンポーネントを提供します：

- **Rectangle**: 標準的な長方形または正方形を作成

- **Round Rectangle**: 角が丸い長方形を作成

- **Circle**: 完全な円を作成

- **Ellipse**: 楕円形を作成

- **Triangle**: 三角形を作成

- **Polygon**: 多角形を作成

- **Line**: 直線を作成

- **Drawing**: フリーハンド描画を有効化

各図形について：

ステップ1. 希望する図形コンポーネントをクリックします

ステップ2. キャンバス上でクリック＆ドラッグして最終的な配置を決定します

ステップ3. プロパティパネルを使用してカスタマイズします：

  - 塗りつぶしの色

  - 境界線の色と幅

  - 不透明度

  - 角の半径（長方形の場合）

  - その他の図形固有のプロパティ

## デバイスコンポーネント

デバイスセクションには、接続されたSeeed reTerminal Eシリーズ ePaperディスプレイデバイスのセンサーからのデータを自動的に表示するコンポーネントが含まれています：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/95.png" style={{width:400, height:'auto'}}/></div>

<Tabs>
<TabItem value="Battery" label="Battery" default>

バッテリーコンポーネントは、接続されたデバイスの現在のバッテリーレベルを表示します。

ステップ1. 「Battery」コンポーネントをクリックします

ステップ2. コンポーネントは自動的にデバイスのバッテリー残量を表示します

ステップ3. プロパティパネルを使用してカスタマイズします：

  - フォントサイズ（デフォルトは30px）

  - テキストスタイル（太字、斜体、下線）

  - 配置（左、中央、右）

  - 色

  - フォントファミリー

</TabItem>
<TabItem value="Temperature" label="Temperature">

温度コンポーネントは、デバイスのセンサーからの現在の温度読み取り値を表示します。

ステップ1. 「Temperature」コンポーネントをクリックします

ステップ2. コンポーネントは自動的にデバイスからの温度読み取り値を表示します

ステップ3. プロパティパネルを使用してカスタマイズします：

  - フォントサイズ（デフォルトは30px）

  - テキストスタイル（太字、斜体、下線）

  - 配置（左、中央、右）

  - 色

  - フォントファミリー

</TabItem>
<TabItem value="Humidity" label="Humidity">

湿度コンポーネントは、デバイスのセンサーからの現在の湿度読み取り値を表示します。

ステップ1. 「Humidity」コンポーネントをクリックします

ステップ2. コンポーネントは自動的にデバイスからの湿度パーセンテージを表示します

ステップ3. プロパティパネルを使用してカスタマイズします：

  - フォントサイズ（デフォルトは30px）

  - テキストスタイル（太字、斜体、下線）

  - 配置（左、中央、右）

  - 色

  - フォントファミリー

</TabItem>
</Tabs>

## データコンポーネント

データセクションには、天気、株価などの情報を表示するために外部データソースに接続するコンポーネントが含まれています：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/96.png" style={{width:400, height:'auto'}}/></div>

### 天気

天気コンポーネントは、指定された場所の現在の天気情報を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/99.png" style={{width:1000, height:'auto'}}/></div>

ステップ1. データセクションの「天気」コンポーネントをクリックします

ステップ2. コンポーネントは自動的にキャンバスの左上角に配置され、デフォルトテキスト「Temperature」が表示されます

ステップ3. 上部のツールバーを使用して、天気表示オプションを設定します：

   - 場所フィールドから場所（例：「New York」）を選択します

   - ドロップダウンメニューから表示する天気データを選択します：

     * Current Weather（気温、天候）

     * Today（今日の予報）

     * Day 2からDay 7（将来の予報）

ステップ4. プロパティパネルを使用して外観をさらにカスタマイズします

:::note
キャンバスに表示される天気データは表示目的のみで、リアルタイムの天気を表すものではありません。実際の天気情報は、デザインをデバイスにデプロイした後にのみ表示され、その時点で天気サービスから実際のデータを取得します。
:::

### 天気アイコン

天気アイコンコンポーネントは、現在の天候状況の視覚的表現を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/100.png" style={{width:1000, height:'auto'}}/></div>

ステップ1. データセクションの「天気アイコン」コンポーネントをクリックします

ステップ2. コンポーネントは自動的にキャンバスの左上角に配置され、デフォルトの太陽アイコンが表示されます

ステップ3. 上部のツールバーを使用して、場所フィールドから場所（例：「New York」）を選択します

ステップ4. プロパティパネルを使用してカスタマイズします：
   - サイズと位置
   - アイコンスタイル

:::note
キャンバスに表示されるアイコンはプレースホルダーのみです。デバイスにデプロイした後、コンポーネントは指定された場所の実際の天候状況に基づいて適切な天気アイコンを取得して表示します。
:::

### 株価

株価コンポーネントは、指定されたシンボルのリアルタイム株式市場情報を表示します。

ステップ1. データセクションの「株価」コンポーネントをクリックします

ステップ2. コンポーネントは自動的にキャンバスの左上角に配置され、デフォルトテキスト「AAPL」（Appleの株式シンボル）が表示されます

ステップ3. ツールバーの「Config」ボタンをクリックして、株価設定パネルを開きます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/101.png" style={{width:1000, height:'auto'}}/></div>

ステップ4. 株価設定パネルで：

   - 株式シンボルフィールドに株式シンボル（例：「AAPL」、「MSFT」、「GOOGL」）を入力します

   - 「Search」をクリックしてシンボルを検証します

   - 提供されたフィールドにTwelve Data APIキーを入力します

ステップ5. ツールバーの「Symbol」ドロップダウンメニューから、表示する株価データを選択します：

   - Symbol（株式ティッカーシンボルのみを表示）

   - Current Price（最新の株価を表示）

   - Change（前回終値からの価格変動を表示）

   - Change Percent（パーセンテージ変動を表示）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/102.png" style={{width:1000, height:'auto'}}/></div>

ステップ6. プロパティパネルを使用して株価コンポーネントの外観をカスタマイズします

#### Twelve Data APIキーの取得

株価コンポーネントを使用するには、Twelve Dataから無料のAPIキーが必要です：

ステップ1. [twelvedata.com](https://twelvedata.com/)にアクセスします

ステップ2. 「Get Started Free」または「Sign Up」をクリックします

ステップ3. メールアドレスとパスワードでアカウントを作成します

ステップ4. 登録してログインしたら、ダッシュボードに移動します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/103.png" style={{width:1000, height:'auto'}}/></div>

ステップ5. APIキーを見つけてコピーします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/104.png" style={{width:800, height:'auto'}}/></div>

ステップ6. このAPIキーを株価設定パネルの「Twelve Data API Key」フィールドに貼り付けます

:::note
- Twelve Dataの無料プランでは、1分間および1日あたりのAPI呼び出し数に制限があります。

- キャンバスに表示される株価データは表示目的のみです。リアルタイムの株式情報は、デザインをデバイスにデプロイした後にのみ表示され、その時点でTwelve Dataのサーバーから現在のデータを取得します。

- 最も信頼性の高い体験のために、頻繁な株価更新が必要な場合は、Twelve Dataの有料プランへのアップグレードを検討してください。
:::

:::tip
テスト目的では、以下のような一般的な株式シンボルを使用できます：

- AAPL（Apple）

- MSFT（Microsoft）

- GOOGL（Alphabet/Google）

- AMZN（Amazon）

- TSLA（Tesla）
:::

### GitHub

GitHubコンポーネントは、GitHubユーザープロフィールに関する情報を表示します。

ステップ1. データセクションの「GitHub」コンポーネントをクリックします

ステップ2. コンポーネントは自動的にキャンバスの左上角に配置され、「Seeed Studio」または他のプレースホルダーを示すデフォルトテキストが表示されます

ステップ3. ツールバーに、GitHubユーザー名フィールド（例：「seeed-studio」）とドロップダウンメニューが表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/106.png" style={{width:1000, height:'auto'}}/></div>

ステップ4. フィールドに有効なGitHubユーザー名を入力し、表示されるGitHubユーザー設定パネルで「Validate」をクリックします

ステップ5. 「Display Name」（または類似）というラベルのドロップダウンメニューから、表示したいGitHubユーザー情報を選択します：

   - Display Name（ユーザーの表示名を表示）

   - Username（ユーザーのGitHubハンドルを表示）

   - Followers（フォロワー数を表示）

   - Following（フォロー中のユーザー数を表示）

   - Public Repos（パブリックリポジトリ数を表示）

   - Public Gists（パブリックgist数を表示）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/107.png" style={{width:1000, height:'auto'}}/></div>

ステップ 6. プロパティパネルを使用してGitHubコンポーネントの外観をカスタマイズします

:::note
- GitHubコンポーネントは、リアルタイムのGitHubデータを取得するために、デバイスでのインターネットアクセスが必要です。

- キャンバスに表示されるのはプレースホルダーのみです。実際のGitHub情報は、デバイスにデプロイした後に表示されます。

- GitHub APIにはレート制限があるため、過度な更新により一時的にコンポーネントが無効になる場合があります。
:::

:::tip
テスト用にこれらのGitHubユーザー名を試してみてください：

- seeed-studio（Seeed Studioの公式GitHub）

- torvalds（Linuxの作成者、Linus Torvalds）

- microsoft（Microsoftの公式GitHub）

- google（Googleの公式GitHub）
:::

### GitHub Repo

GitHub Repoコンポーネントは、特定のGitHubリポジトリに関する情報を表示します。

ステップ 1. データセクションの「GitHub Repo」コンポーネントをクリックします

ステップ 2. コンポーネントは自動的にキャンバスの左上角に配置され、デフォルトテキストとして「wiki-documents」が表示されます

ステップ 3. 表示されるGitHub Repository Configurationパネルで：

   - 現在のユーザーとリポジトリのステータスを確認できます

   - キーワードを入力してリポジトリを検索するか、フィールドを空のままにしてユーザーのすべてのリポジトリを表示します

   - 「Username/Repository」形式で特定のリポジトリを手動で入力します（例：「Seeed-Studio/wiki-documents」）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/108.png" style={{width:1000, height:'auto'}}/></div>

ステップ 4. 「Search」をクリックしてリポジトリを検索し、検証します

ステップ 5. ツールバーのドロップダウンメニューから、表示したいリポジトリ情報を選択します：

   - Name（リポジトリ名を表示）

   - Full Name（username/repository形式を表示）

   - Stars（スター数を表示）

   - Forks（フォーク数を表示）

   - Watchers（ウォッチャー数を表示）

   - Description（リポジトリの説明を表示）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/109.png" style={{width:1000, height:'auto'}}/></div>

ステップ 6. プロパティパネルを使用してGitHub Repoコンポーネントの外観をカスタマイズします

:::note
- GitHubユーザーコンポーネントと同様に、GitHub Repoコンポーネントもデータを取得するためにデバイスでのインターネットアクセスが必要です。

- キャンバスにはプレースホルダーテキストが表示されます。実際のリポジトリ情報は、デバイスにデプロイした後にのみ表示されます。

- GitHub APIにはレート制限があり、データの更新頻度に影響する場合があります。
:::

### YouTube

YouTubeコンポーネントは、YouTubeチャンネルに関する情報と統計を表示します。

ステップ 1. データセクションの「YouTube」コンポーネントをクリックします

ステップ 2. コンポーネントは自動的にキャンバスの左上角に配置され、デフォルトテキストとして「No API key configured」が表示されます

ステップ 3. 表示されるYouTube Configurationパネルで：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/110.png" style={{width:1000, height:'auto'}}/></div>

   - YouTube ChannelフィールドにYouTubeチャンネルID（例：「UC_x5XG1OV2P6uZZ5FSM9Ttw」）を入力します

   - 「Search」をクリックしてチャンネルを検証します

   - 提供されたフィールドにYouTube Data API Keyを入力します

   - API キーをお持ちでない場合は、「Google Cloud Console」リンクをクリックして無料のAPI キーを取得してください

ステップ 4. ツールバーのドロップダウンメニューから、表示したいチャンネル情報を選択します：

   - Channel Name（YouTubeチャンネル名を表示）

   - Channel ID（YouTubeチャンネルIDを表示）

   - Description（チャンネルの説明を表示）

   - Subscribers（登録者数を表示）

   - Views（総視聴回数を表示）

   - Videos（アップロードされた動画数を表示）

   - Published At（チャンネル作成日を表示）

   - Custom URL（利用可能な場合はカスタムURLを表示）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/111.png" style={{width:1000, height:'auto'}}/></div>

ステップ 5. プロパティパネルを使用してYouTubeコンポーネントの外観をカスタマイズします

#### YouTube Data API Keyの取得

:::note
API Keyの取得方法がわからない場合は、[Googleの公式ドキュメント](https://developers.google.com/youtube/v3/getting-started)もお読みください。
:::

YouTubeコンポーネントを使用するには、Google Cloud Consoleから無料のAPI キーが必要です：

ステップ 1. [Google Cloud Console](https://console.cloud.google.com/)にアクセスします

ステップ 2. 新しいプロジェクトを作成するか、既存のプロジェクトを選択します

ステップ 3. 「APIs & Services」>「Library」に移動します

ステップ 4. 「YouTube Data API v3」を検索して有効にします

ステップ 5. 「APIs & Services」>「Credentials」に移動します

ステップ 6. 「Create Credentials」>「API Key」をクリックします

ステップ 7. 新しいAPI キーをコピーします

ステップ 8. このAPI キーをYouTube Configurationパネルの「YouTube Data API Key」フィールドに貼り付けます

:::note
- YouTubeコンポーネントは、チャンネルデータを取得するためにデバイスでのインターネットアクセスが必要です。

- 有効なAPI キーとチャンネルIDを提供するまで、キャンバスには「No API key configured」が表示されます。

- GoogleのYouTube Data APIには、使用に影響する可能性があるクォータとレート制限があります。

- 一部の統計（正確な登録者数など）は、YouTubeのポリシーに基づいて四捨五入または概算される場合があります。
:::

## テンプレート

テンプレートは、複数のコンポーネントを組み合わせて統一感のある、すぐに使用できるディスプレイを作成する事前設計されたレイアウトを提供します。これにより時間を節約し、ゼロからレイアウトを設計することなく、プロフェッショナルな結果を保証します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/113.png" style={{width:350, height:'auto'}}/></div>

### 天気表示テンプレート

天気表示テンプレートは、任意の都市の現在の気象状況と7日間の予報を表示する完全な天気ダッシュボードを提供します。

ステップ1. テンプレートセクションの「Weather Display」テンプレートをクリックします

ステップ2. 表示される「Configure Template: Weather Display」ダイアログで：

   - 希望する温度単位（摂氏°Cまたは華氏°F）を選択します

   - 「City Name」フィールドに都市名を入力します

   - 「Search」をクリックして、その都市が天気データベースに存在することを確認します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/114.png" style={{width:800, height:'auto'}}/></div>

ステップ3. 検索が成功したら、「OK」をクリックして続行します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/115.png" style={{width:700, height:'auto'}}/></div>

ステップ4. 「Template Preview」ウィンドウが表示され、以下が表示されます：

   - 左パネルに現在の日付、天気状況、気温、最高/最低気温、湿度

   - 右パネルに都市名と7日間の予報（天気アイコンと気温範囲を含む）


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/116.png" style={{width:700, height:'auto'}}/></div>

ステップ5. プレビューを確認し、以下に注意してください：

   - テンプレートはキャンバス上の現在のすべての要素を置き換えます

   - すべてのテンプレート要素には競合を避けるために一意のIDが付与されます

   - キャンバスに適用した後でテンプレートを変更できます

ステップ6. 「Apply to Canvas」をクリックして、テンプレートをワークスペースに追加します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/117.png" style={{width:1000, height:'auto'}}/></div>

ステップ7. 天気表示テンプレートがキャンバスに配置され、デプロイまたはさらなるカスタマイズの準備が整いました

:::note
- 天気表示テンプレートは、デバイスでのインターネット接続が必要なリアルタイム天気APIデータを使用します。

- テンプレートはキャンバスに適用された後、完全にカスタマイズ可能です - 任意の要素のサイズ変更、位置変更、または変更ができます。

- 天気データは、プロジェクト設定で設定された更新間隔に従って自動的に更新されます。
:::

### 株式ダッシュボードテンプレート

株式ダッシュボードテンプレートは、価格、日次変動、変動率を含むリアルタイム株式市場データのクリーンでプロフェッショナルな表示を提供します。

ステップ1. テンプレートセクションの「Stock Dashboard」テンプレートをクリックします

ステップ2. 表示される「Configure Template: Stock Dashboard」ダイアログで：

   - 提供されたフィールドに[Twelve Data API Key](#getting-a-twelve-data-api-key)を入力します（セキュリティのためマスクされています）

   - Stock Symbolフィールドに株式シンボル（例：Apple Inc.の場合「AAPL」）を入力します

   - 「Search」をクリックして株式を検索します

ステップ3. 検索後、一致する株式のリストが表示されます。結果から希望する株式を選択します（例：「AAPL Apple Inc.」）

ステップ4. 「OK」をクリックして選択を確認します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/118.png" style={{width:700, height:'auto'}}/></div>

ステップ5. 「Template Preview」ウィンドウが表示され、以下が表示されます：

   - 左パネルに大きなテキストで株式シンボル

   - 右パネルに現在の株価、価格変動、変動率を表示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/119.png" style={{width:700, height:'auto'}}/></div>

ステップ6. プレビューを確認し、以下に注意してください：

   - テンプレートはキャンバス上の現在のすべての要素を置き換えます

   - すべてのテンプレート要素には競合を避けるために一意のIDが付与されます

   - キャンバスに適用した後でテンプレートを変更できます

ステップ7. 「Apply to Canvas」をクリックして、テンプレートをワークスペースに追加します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/120.png" style={{width:1000, height:'auto'}}/></div>

:::note
- 株式ダッシュボードテンプレートは、リアルタイム市場データを取得するためにデバイスでのインターネットアクセスが必要です。

- 株式市場データは、Twelve Dataの無料ティアでは少なくとも15分遅延されます。

- データはプロジェクトの更新間隔設定に従って更新されます。

- 市場データは、それぞれの取引所の取引時間中のみ利用可能です。
:::

### GitHubプロファイルテンプレート

GitHubプロファイルテンプレートは、GitHubユーザーのプロファイル情報と選択されたリポジトリの統計情報を表示する包括的なダッシュボードを作成します。

ステップ1. テンプレートセクションの「GitHub Profile」テンプレートをクリックします


ステップ2. 表示される「Configure Template: GitHub Profile」ダイアログで：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/121.png" style={{width:800, height:'auto'}}/></div>

   - 必須フィールドにGitHubユーザー名を入力します（例：「seeed-studio」）

   - オプションでRepository Searchフィールドにキーワードを入力してリポジトリをフィルタリングします

   - ユーザーのすべてのリポジトリを表示するには、検索フィールドを空のままにします

ステップ3. 「Search all '[username]' repositories」ボタンをクリックして、ユーザーのリポジトリを取得します

ステップ4. 表示されたリポジトリのリストから、紹介したいリポジトリを最大3つ選択します

   - 各リポジトリには、名前、説明、主要なプログラミング言語、スター数が表示されます

   - フィルターフィールドを使用してリポジトリリストを絞り込むことができます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/122.png" style={{width:700, height:'auto'}}/></div>

ステップ5. 「OK」をクリックして選択を確認します

ステップ6. 「Template Preview」ウィンドウが表示され、以下が表示されます：

   - 上部にGitHubユーザーの表示名

   - フォロワー数付きの「Github」ラベル

   - 水平区切り線

- 選択されたリポジトリとその名前およびスター数

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/123.png" style={{width:700, height:'auto'}}/></div>

ステップ 7. プレビューを確認し、以下の点に注意してください：

   - テンプレートはキャンバス上の現在のすべての要素を置き換えます

   - すべてのテンプレート要素には競合を避けるために一意のIDが付与されます

   - テンプレートをキャンバスに適用した後で修正することができます

ステップ 8. 「Apply to Canvas」をクリックして、テンプレートをワークスペースに追加します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/124.png" style={{width:1000, height:'auto'}}/></div>

:::note
- APIキーが必要な他のテンプレートとは異なり、GitHub Profileテンプレートは GitHubのパブリックAPIを使用し、認証は不要です。

- テンプレートには、インターフェースで明確に説明された2つの検索モードがあります：

  1. ユーザーのみ：ユーザー名のみを入力してすべてのリポジトリを表示

  2. ユーザー + キーワード：ユーザー名と特定のキーワードを入力してリポジトリをフィルタリング

- リポジトリの選択は、小さな画面での最適な表示を確保するために3つに制限されています。

- 一部のGitHub統計は近似値の場合があります（1,000を超えるフォロワー数は「1.0K」として表示されます）。
:::

### YouTube Channel Stats Template

YouTube Channel Stats Templateは、YouTubeチャンネルのブランディング、スローガン、登録者数をクリーンでモダンなデザインで表示します。

ステップ 1. Templatesセクションの「YouTube Channel Stats」テンプレートをクリックします

ステップ 2. 表示される「Configure Template: YouTube Channel Stats」ダイアログで：

   - [YouTube Data API Key](#getting-a-youtube-data-api-key)を入力します（セキュリティのためマスクされます）

   - サポートされている形式のいずれかでYouTube Channel Identifierを入力します：

     * Channel ID：「UC」で始まる24文字の文字列（例：UC_x5XG1OV2P6uZZ5FSM9Ttw）
     * @Handle：@で始まるチャンネルハンドル（例：@seeedstudiosz）
     * Channel URL：完全なYouTube URL（例：youtube.com/@seeedstudiosz）

ステップ 3. 「Validate Channel」をクリックして、チャンネルが存在することを確認し、そのデータを取得します

ステップ 4. 検証が成功すると、確認メッセージが表示されます（例：「Found channel: Seeed Studio • 20.4K」）

ステップ 5. 「OK」をクリックして続行します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/125.png" style={{width:800, height:'auto'}}/></div>

ステップ 6. 「Template Preview」ウィンドウが表示され、以下が表示されます：

   - スタイリッシュな黒い背景にチャンネル名とスローガン/説明が表示された左パネル

   - 「YouTube」ラベル、登録者数、「Subscribers」テキストが表示された右パネル

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/126.png" style={{width:800, height:'auto'}}/></div>

ステップ 7. プレビューを確認し、以下の点に注意してください：

   - テンプレートはキャンバス上の現在のすべての要素を置き換えます

   - すべてのテンプレート要素には競合を避けるために一意のIDが付与されます

   - テンプレートをキャンバスに適用した後で修正することができます

ステップ 8. 「Apply to Canvas」をクリックして、テンプレートをワークスペースに追加します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/127.png" style={{width:1000, height:'auto'}}/></div>


:::note
- YouTube Channel Statsテンプレートは、チャンネルデータを取得するためにデバイスでのインターネットアクセスが必要です。

- YouTube Data APIには使用に影響する可能性があるクォータとレート制限があります。

- テンプレートは、利用可能な場合にチャンネルのスローガンまたは説明を自動的に取得します。

- 多数の登録者を持つチャンネルの場合、カウントは省略される場合があります（例：1,200,000の場合は「1.2M」）。
:::

## 高度なキャンバス機能

### デバッグとJSON編集

SenseCraft HMI Canvasは高度なデバッグ機能を提供します：

ステップ1. ツールバーのデバッグアイコンをクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/128.png" style={{width:400, height:'auto'}}/></div>

ステップ2. 現在のレイアウトデータをJSON形式で表示するモーダルが開きます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/129.png" style={{width:700, height:'auto'}}/></div>

ステップ3. 以下のことができます：

   - レイアウトのJSON構造を表示

   - 「Manual Edit JSON」をクリックしてレイアウトコードを直接変更

   - 「Copy to Clipboard」をクリックしてJSONをバックアップや共有のために保存

   - 「Generate HTML」をクリックしてレイアウトのHTMLバージョンを作成

この機能は特に以下の場合に便利です：

- レイアウトの構造を理解する

- ビジュアルエディターでは困難な精密な調整を行う

- 複雑なレイアウトのバックアップを作成する

- レイアウトを他の人と共有する

### インポート・エクスポートと共有

SenseCraft HMIは便利なインポートとエクスポート機能を提供し、デザイン作業を簡単に保存、共有、復元できます。これら2つの機能はインターフェースの上部ツールバーにあり、アイコンで明確に識別できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/142.png" style={{width:1000, height:'auto'}}/></div>

#### デザインのエクスポート

エクスポート機能により、現在のUIデザインをファイルとして保存できます：

**ステップ1.** インターフェースデザインを完了した後、上部ツールバーの**エクスポート**ボタン（外向き矢印アイコン）をクリックします。

**ステップ2.** 表示されるファイル保存ダイアログで、保存場所を選択し、ファイルに名前を付けます。

**ステップ3.** 「保存」をクリックしてエクスポートプロセスを完了します。

デザインは全てのインターフェース情報を含むJSONファイルとして保存され、バックアップや共有に使用できます。

#### デザインのインポート

インポート機能により、以前にエクスポートしたデザインやテンプレートを読み込むことができます：

**ステップ1.** 上部ツールバーの**インポート**ボタン（内向き矢印アイコン）をクリックします。

**ステップ2.** ファイル選択ダイアログで、以前にエクスポートしたデザインファイルを見つけて選択します。

**ステップ3.** 「開く」をクリックすると、選択したデザインが現在のワークスペースに読み込まれます。

:::tip
インポート操作は現在のワークスペースの内容を置き換えます。データの損失を防ぐため、インポート前に現在のデザインをエクスポートすることをお勧めします。
:::

これらの機能は特に以下の場合に便利です：
- 大きな変更を行う前のデザインのバックアップ
- チームメンバーとのインターフェースデザインの共有
- 異なるデバイス間でのプロジェクトの転送
- 既製のテンプレートを使用した新しいプロジェクトの迅速な開始


### AIレイアウトジェネレーター

SenseCraft HMI CanvasにはAI搭載のレイアウトジェネレーターが含まれています：

ステップ1. 右上の「AI Generator」ボタンをクリックします

ステップ2. 作成したいレイアウトの説明を入力します

ステップ3. 「Generate」をクリックして、AIに説明に基づいたレイアウトを作成させます

ステップ4. 生成されたレイアウトを必要に応じてカスタマイズします

この機能は、ゼロから始めることなく迅速にレイアウトを作成するのに優れています。

:::tip
このセクションの使用に関する詳細な手順については、**[SenseCraft HMIでのAI生成の使用](https://wiki.seeedstudio.com/sensecraft_hmi_ai_generation/)**を参照してください。
:::

## デバイスへのデプロイ

キャンバスデザインを作成したら、Seeedデバイスにデプロイしたいと思うでしょう：

### デプロイ前のプレビュー

ステップ1. 上部ツールバーの「Preview」ボタンをクリック

ステップ2. デバイス上でのレイアウトの表示を確認

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/130.png" style={{width:700, height:'auto'}}/></div>

ステップ3. 必要に応じて調整を行う

### レイアウトの保存

ステップ1. 「Save」ボタンをクリックして現在のレイアウトを保存

ステップ2. レイアウトはSenseCraft HMIクラウドに保存されます

### デバイスへのデプロイ

ステップ1. デバイスが接続されており、「Online」ステータスが表示されていることを確認

ステップ2. 「Deploy」ボタンをクリック

ステップ3. デプロイプロセスが完了するまで待機

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/131.png" style={{width:1000, height:'auto'}}/></div>

ステップ4. 接続されたデバイスにレイアウトが表示されます

### デプロイ時の考慮事項

Seeedデバイスへの正常なデプロイのために：

1. **デバイス互換性**: レイアウトが特定のデバイスの画面解像度に最適化されていることを確認

2. **接続ステータス**: デプロイ前にデバイスが「Online」ステータスを表示していることを確認

3. **データコンポーネント**: データコンポーネント（Weather、Stock等）を使用する場合、デバイスがインターネット接続を持っていることを確認

4. **デバイスセンサー**: Battery、Temperature、Humidityなどのコンポーネントは、適切なセンサーを持つ互換性のあるSeeed reTerminal E Series ePaper Displayデバイスでのみ動作します

5. **リフレッシュレート**: データの更新頻度とデバイスの能力に基づいて適切な間隔時間を設定

## トラブルシューティング

### 一般的なCanvasの問題と解決策

1. **コンポーネントがデータを表示しない**:
   - デバイスのインターネット接続を確認
   - データソースが利用可能であることを確認
   - 動的コンポーネントのデータキーパスが正しいことを確認
   - キャンバスを更新するか再デプロイを試行

2. **デバイス上でのレイアウト問題**:
   - デプロイ前にPreview機能を使用してテスト
   - キャンバスの端に近すぎる場所に要素を配置することを避ける

3. **デプロイが失敗する**:
   - デバイスがSenseCraft HMIに適切に接続されていることを確認
   - デバイスのインターネット接続を確認
   - レイアウトを保存してから再度デプロイを試行
   - デバイスを再起動して再度デプロイを試行

4. **デバイスセンサーデータが表示されない**:
   - デバイスが必要なセンサーを持っていることを確認
   - デバイスのファームウェアが最新であることを確認
   - デバイスがSenseCraft HMIに適切に接続されていることを確認

5. **テキストや画像が歪んで表示される**:
   - コンポーネントのサイズと位置を調整
   - テキストコンポーネントのフォント設定を確認
   - 画像については、ディスプレイに適した解像度であることを確認

## まとめ

SenseCraft HMIのCanvas機能は、Seeedデバイス用のカスタムインターフェースとダッシュボードを作成するための強力なプラットフォームを提供します。基本的なデザイン要素と動的データコンポーネント、事前作成されたテンプレートを組み合わせることで、幅広い目的に対応するプロフェッショナルな外観のディスプレイを作成できます。

天気ステーション、デバイスモニター、情報ディスプレイ、コントロールパネルのいずれを構築する場合でも、Canvasはあなたのビジョンを実現するためのツールを提供します。直感的なドラッグアンドドロップインターフェースと、動的データバインディングやデバッグツールなどの高度な機能を組み合わせることで、初心者にもアクセスしやすく、経験豊富なユーザーが必要とする深さも提供します。

## リソース

- [SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi)
- [対応デバイス - reTerminal E シリーズ](https://wiki.seeedstudio.com/reterminal_e10xx_main_page/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

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
