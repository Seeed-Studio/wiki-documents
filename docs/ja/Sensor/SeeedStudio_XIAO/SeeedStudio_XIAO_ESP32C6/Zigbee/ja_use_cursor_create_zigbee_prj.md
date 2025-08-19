---
description: XIAO ESP32C6とセンサーを使用して、CursorのAI搭載チャットでZigbeeアプリケーションを開発する方法を学びます。
title: Cursorを使用してXIAO ESP32C6でZigbeeプロジェクトを作成する
image: https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/13.webp
slug: /ja/use_cursor_create_zigbee_prj
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cursorを使用してXIAO ESP32C6でZigbeeプロジェクトを作成する

このガイドでは、CursorのAI搭載チャットを使用してXIAO ESP32C6とセンサーを使ったZigbeeアプリケーションを開発する方法を説明します。このチュートリアルを終える頃には、Cursorのチャットを独自に使用してXIAOボードとセンサーを使ったZigbeeアプリケーションを開発できるようになります。

## Cursorとは？

CursorはVisual Studio Codeを基盤として構築されたAI搭載のコードエディタです。強力なAI機能を統合しており、コードの記述、理解、デバッグをより効率的に行うことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/cursor.png" style={{width:600, height:'auto'}}/></div>

### 組み込み開発にCursorを使用する理由

Cursorは組み込みソフトウェア開発において以下の利点を提供します：

1. **コード生成**: Cursorは要件に基づいてコードを生成し、時間と労力を節約します。
2. **コンテキスト対応の支援**: Cursorはプロジェクト構造を理解し、関連する提案を提供します。
3. **デバッグ支援**: Cursorはコード内のバグを特定し修正するのを助けます。
4. **学習ツール**: 初心者にとって、Cursorは複雑な概念を説明し、教育的な洞察を提供します。
5. **効率性**: Cursorは大規模なコードベースをナビゲートし、未知のライブラリを迅速に理解するのを助けます。

XIAO ESP32C6のような組み込みシステムでは、Cursorはハードウェア固有のAPIを理解し、センサーとのやり取りのためのボイラープレートコードを生成し、ハードウェアとソフトウェアの統合問題をトラブルシュートするのに役立ちます。

## 必要な材料

このチュートリアルでは以下が必要です：

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C6</th>
			<th>Grove DHT11 温湿度センサー</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

- Groveケーブル
- USB-Cケーブル
- Arduino IDEがインストールされたコンピュータ
- Cursorアプリケーション（次のセクションでインストールします）

:::tip
このチュートリアルではDHT11温湿度センサーを例として使用します。他のセンサーをお持ちの場合は、それらを試してみても構いません。最適な体験を得るために、現在[ESP Zigbee SDK](https://github.com/espressif/esp-zigbee-sdk)でサポートされているセンサータイプを使用することをお勧めします。これにより、互換性が確保され、Zigbeeプロジェクトの構築がスムーズに進みます。
:::

## Cursor のインストール

以下の手順に従って、Cursor をお使いのオペレーティングシステムにインストールしてください：

<Tabs>
<TabItem value="Windows" label="Windows" default>

1. [Cursor ダウンロードページ](https://cursor.sh/)にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/windows_download_cursor.png" style={{width:1000, height:'auto'}}/></div>

2. 「Windows」をクリックします。
3. ダウンロードしたインストーラーを実行します。
4. 画面の指示に従ってインストールを完了します。

</TabItem>
<TabItem value="MACOS" label="MACOS">

1. [Cursor ダウンロードページ](https://cursor.sh/)にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/mac_download_cursor.png" style={{width:1000, height:'auto'}}/></div>

2. 「MacOS」をクリックします。
3. ダウンロードした .dmg ファイルを開きます。
4. Cursor アプリを Applications フォルダにドラッグします。
5. Applications フォルダから Cursor を開きます。

</TabItem>
</Tabs>


## Cursor のサブスクリプション

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/cursor_price.png" style={{width:1000, height:'auto'}}/></div>

Cursor は、さまざまなユーザーのニーズに対応するために異なるサブスクリプションプランを提供しています：

**無料 Hobby プラン**

Cursor は Hobby プランで無料でダウンロードして使用できます。このプランには以下が含まれます：
- 2000 回の補完
- 50 回の低速プレミアムリクエスト
- Pro 機能の 2 週間の試用期間

この無料プランは、Cursor の機能を試して探索するのに十分です。

**有料プラン**

より高度な機能や使用制限の拡張を求める場合、Cursor は有料サブスクリプションオプションを提供しています：

**Pro プラン ($20/月)**

- 無制限の補完
- 月間 500 回の高速プレミアムリクエスト
- 無制限の低速プレミアムリクエスト

**Business プラン ($40/ユーザー/月)**

- Pro のすべての機能
- 組織全体でプライバシーモードを強制
- チームの集中請求
- 使用統計を含む管理ダッシュボード
- SAML/OIDC SSO

完全な価格詳細は [Cursor の価格ページ](https://www.cursor.com/pricing)で確認できます。

どのプランを使用していても、Cursor で生成されたすべてのコードはあなたの所有物であり、商業目的を含めて自由に使用できます。

## Cursor のセットアップ

Cursor をインストールした後、以下の手順でセットアップを行います：

1. Cursor を起動します。
2. アカウントにサインインするか、新しいアカウントを作成します。
3. チャットパネルがアクセス可能であることを確認します（通常はインターフェースの右側に表示されます）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/1.png" style={{width:1000, height:'auto'}}/></div>

## Zigbee の例を開く

Cursor を使用してプロジェクトのコードを生成する際、例コードを提供することで生成されるプロジェクトの精度を大幅に向上させることができます。例は Cursor にとって参照点となり、プロジェクトの構造、構文、特定の要件を理解するのに役立ちます。これらの例を分析することで、Cursor はより正確で関連性の高いコードを生成し、ニーズに合わせたコードを提供します。

Zigbee プロジェクトの文脈では、適切な例を見つけることで Cursor が以下を理解する助けになります：
- 必要な特定の機能
- 使用すべき適切なライブラリや関数
- 使用しているハードウェアやインターフェースに対応したコードの生成

関連する例を提供することで、生成されたコードが正確に動作し、プロジェクトの要件を満たす可能性が高くなり、デバッグや修正にかかる時間と労力を節約できます。

では、ESP32 Arduino パッケージで提供される Zigbee の例を見つけて開いてみましょう：

1. まず、Arduino IDE に **最新の ESP32 ボードパッケージ**をインストールしていることを確認してください：
  - Arduino IDE を開きます。
  - **ツール > ボード > ボードマネージャ**に移動します。
  - **esp32**を検索します。
  - **Espressif Systems による esp32**を見つけます。
  - 最新バージョンを取得するために**インストール**または**更新**をクリックします。
  - インストールが完了するまで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/3.png" style={{width:1000, height:'auto'}}/></div>

2. Zigbee の例ディレクトリに移動します：

以下のパスは ESP32 ボードパッケージバージョン 3.1.3 を例として使用しています。インストールされているバージョンが異なる場合は、`3.1.3` を置き換えてください：
   
- Windows の場合： 

```
C:\Users\[YourUsername]\AppData\Local\Arduino15\packages\esp32\hardware\esp32\3.1.3\libraries\Zigbee\
```

- macOS の場合：
```
/Users/[YourUsername]/Library/Arduino15/packages/esp32/hardware/esp32/3.1.3/libraries/Zigbee/
```

3. Cursor を開き、ファイルメニューから **フォルダを開く** を選択します。

4. ステップ 2 の Zigbee ディレクトリパスに移動し、**開く**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/4.png" style={{width:1000, height:'auto'}}/></div>

## 適切な例の選択

Cursor の Chat を使用してコードを生成する前に、出発点として最も適切な例を特定する必要があります。

### デバイスタイプの決定

Zigbee デバイスは一般的に2つの主要なカテゴリに分類されます。この理解は、適切なサンプルコードを選択する上で非常に重要です。

1. **センサー**:
   - センサーは環境を「感知」し、データを収集するデバイスです。
   - 現実世界の物理情報を電子信号に変換します。
   - センサーはデータを「読み取り」、それをネットワークに送信するだけです。

   - **例**:
     - 温度センサー: 周囲の温度を測定
     - 湿度センサー: 空気中の湿度レベルを測定
     - 光センサー: 周囲の光の強度を検出
     - モーションセンサー: 近くで物体が動いているかを検出
     - ガスセンサー: 特定のガス濃度を検出

2. **アクチュエータ**:
   - アクチュエータは「動作を実行する」デバイスです。
   - コマンドを受信し、物理的な世界に影響を与えます。
   - アクチュエータは何かの状態を「変化させる」役割を担います。

   - **例**:
     - ライトスイッチ: ライトのオン/オフを切り替え
     - モーターコントローラー: モーターの回転を制御
     - リレー: 高電力の電気機器を制御
     - バルブコントローラー: 水や空気の流れを制御
     - ドアロック: ドアのロック/アンロックを制御

**デバイスタイプを決定する方法**:

- デバイスが主にデータを収集する（情報を読み取る）場合、それはセンサーです。
- デバイスが主に動作を実行する（状態を変化させる）場合、それはアクチュエータです。
- 一部のデバイスは両方の機能を持つ場合がありますが、その場合は主な機能に基づいて選択してください。

今回の例では、DHT11 は典型的なセンサーです。なぜなら、温度と湿度データを読み取るだけで、環境を変化させることはないからです。

### インターフェースタイプの特定

次に、センサーが使用するインターフェースタイプを特定します。

- **GPIO**: シンプルなデジタルまたはアナログピン
- **I2C**: 通信のための2線式インターフェース
- **SPI**: シリアルペリフェラルインターフェース
- **UART**: シリアル通信

DHT11 は、単一のデータラインを持つシンプルな GPIO インターフェースを使用します。

### Zigbee デバイスサポートの確認

次に進む前に、対象のデバイスタイプが ESP Zigbee SDK によってサポートされているかを確認することが重要です。以下のリンクでサポートされているデバイスタイプを確認できます:

- [ESP Zigbee Device Types](https://github.com/espressif/esp-zigbee-sdk/blob/main/components/esp-zigbee-lib/include/esp_zigbee_type.h)

このヘッダーファイルには、ESP の Zigbee 実装で現在サポートされているすべてのデバイスタイプが記載されています。このファイルを確認して以下を行ってください:

1. デバイスタイプがサポートされていることを確認
2. 必要な特定のデバイス ID とクラスタ ID をメモ
3. デバイスタイプに利用可能な機能を理解

もしデバイスタイプがリストにない場合、以下を検討してください:
- ニーズに合った類似のサポートされているデバイスタイプを選択
- カスタムデバイスタイプの実装を検討（上級者向け）
- ESP サポートに問い合わせてガイダンスを求める

### 最も近い例を見つける

Zigbee ライブラリの例を確認し、ニーズに最も近いものを見つけてください。DHT11 センサーの場合、以下のような例を探してください:

- `ZigbeeTemperatureSensor`
- `ZigbeeHumiditySensor`
- GPIO センサーの読み取りを示す例

幸いなことに、ESP は Zigbee の例として「Zigbee_Temp_Hum_Sensor_Sleepy」を提供しており、温度と湿度センサーのプロジェクトを作成するためのニーズに完全に一致します。この例では以下を示しています:

- 温度と湿度センサーのデバイスを実装する方法
- デバイスを省電力のスリーピーエンドデバイスとして設定する方法
- センサーの読み取り値を定期的に報告する方法
- Zigbee ネットワーキングとデータ送信を処理する方法

この例は以下の場所にあります:
`zigbee/example/Zigbee_Temp_Hum_Sensor_Sleepy`

この例は、DHT11 ベースの Zigbee センサー プロジェクトの優れた出発点となります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/5.png" style={{width:1000, height:'auto'}}/></div>

## ピン接続の決定

XIAO ESP32C6 と DHT11 センサーの場合、使用するピンを決定する必要があります：

1. DHT11 センサーは単一のデータピンを必要とします。

2. センサーを XIAO ESP32C6 のピン D0 (GPIO1) に接続します。

:::tip
XIAO の例では、GPIO (デジタル/アナログ) および SPI プロトコルデバイスのみが手動でピン設定を必要とします。I2C および UART デバイスについては、ピン定義が XIAO のボードパッケージ内で事前に設定されているため、このステップをスキップできます。
:::


## 技術文書の収集

センサーの技術文書を持っていることは非常に重要です。Seeed の製品を使用している場合、センサーやアクチュエータに関する詳細な文書やリソースを **[Seeed Studio の公式 Wiki](https://wiki.seeedstudio.com/ja/)** で見つけることができます。この Wiki のリソースセクションには Grove 製品のデータシートも含まれており、それを Cursor に提供できます。例えば、このプロジェクトで使用する DHT11 センサーの場合：

- [Grove DHT11 Wiki ページ](https://wiki.seeedstudio.com/ja/Grove-TemperatureAndHumidity_Sensor/)

他のメーカーのセンサーを使用している場合は、必要な技術文書を取得するために直接メーカーにお問い合わせください。


## Cursor のチャットを使用してコードを生成する

必要な情報がすべて揃ったら、Cursor のチャットを使用して Zigbee アプリケーションコードを生成できます。

ここで Cursor のチャットにプロンプトを作成する必要があります。

### センサープロジェクトテンプレート

私のようにデバイスとしてセンサーを使用する場合、以下のプロンプトを参考にしてください。

```
コードを参照して、Zigbee プロトコルを使用した ESP32-C6 の Arduino センサープロジェクトを作成してください。

プロジェクト名: [プロジェクト名]

センサーの詳細:
- 種類: [センサーのモデル]
- 接続: [ピン接続]

測定仕様:
- 測定するパラメータ: [測定値]
- 送信頻度: [送信間隔]

参考資料:
- 文書: [文書リンク]

Example ディレクトリに完全なプロジェクトを生成してください。メインファイルの名前は [プロジェクト名をアンダースコアに置き換えたもの].ino とし、包括的なコードコメントを含めてください。
```

プロンプトテンプレートの記入方法を分解し、DHT11 センサーを使用した例を示します：

1. **プロジェクト名**: プロジェクトの説明的な名前を選択します。
2. **センサーの詳細**:
   - 種類: 正確なセンサーモデルを指定します。
   - 接続: センサーと XIAO ESP32C6 の間のすべてのピン接続を記載します。
3. **測定仕様**:
   - パラメータ: 測定したい項目を記載します（温度、湿度など）。
   - 送信頻度: データを送信する頻度を記載します（例：5秒ごと）。
4. **参考資料**: データシートや文書へのリンクを含めます。

以下は、DHT11 温度および湿度センサーを使用したプロジェクトの完成したプロンプトです：

```
コードを参照して、Zigbee プロトコルを使用した ESP32-C6 の Arduino センサープロジェクトを作成してください。

プロジェクト名: Zigbee_DHT11_XIAO

センサーの詳細:
- 種類: DHT11 温度および湿度センサー
- 接続: DHT11 データピンを XIAO ESP32C6 の D2 に接続

測定仕様:
- 測定するパラメータ: 温度 (°C) と相対湿度 (%)
- 送信頻度: 1時間ごと

参考資料:
- 文書: 
  - DHT11 センサー: https://wiki.seeedstudio.com/ja/Grove-TemperatureAndHumidity_Sensor/
  - XIAO ESP32C6: https://wiki.seeedstudio.com/ja/xiao_pin_multiplexing_esp33c6/

Example ディレクトリに完全なプロジェクトを生成してください。メインファイルの名前は [プロジェクト名をアンダースコアに置き換えたもの].ino とし、包括的なコードコメントを含めてください。
```

### アクチュエータプロジェクトテンプレート

アクチュエータを使用したい場合は、以下のプロンプトテンプレートを使用できます。アクチュエータプロジェクトのプロンプト構造を見てみましょう：

```
コードを参照して、Zigbee プロトコルを使用した ESP32-C6 の Arduino アクチュエータプロジェクトを作成してください。

プロジェクト名: [プロジェクト名]

アクチュエータの詳細:
- 種類: [アクチュエータモデル]
- 接続: [ピン接続]

制御仕様:
- デフォルト動作: [起動時の状態]

参考資料:
- 文書: [文書リンク]

Example ディレクトリに完全なプロジェクトを生成してください。メインファイルの名前は [プロジェクト名をアンダースコアに置き換えたもの].ino とし、包括的なコードコメントを含めてください。
```

:::tip
Cursor を使用して最初のプロジェクトを構築する際は、複雑なロジックや要件ではなく、シンプルで基本的な機能から始めることをお勧めします。このアプローチにより、Cursor が誤ったコードを生成する可能性が大幅に減少します。まず、Cursor に動作確認が可能な基本的なプログラムを作成させます。基盤がしっかりしたら、徐々に機能や複雑さを追加してプロジェクトを強化できます。この反復的なアプローチは、より信頼性が高く、保守性のあるコードにつながります。
:::

プロンプトをプロジェクトの具体的な詳細で準備したら、以下の手順に従います：

1. Cursor のチャットパネルを開きます（通常はサイドバーのチャットアイコンをクリックします）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/6.png" style={{width:1000, height:'auto'}}/></div>

2. プロジェクト要件に最も近い例コードを見つけます。DHT11 温度および湿度センサーのプロジェクトの場合、「Zigbee_Temp_Hum_Sensor_Sleepy」例を使用します。

3. Zigbee の例ディレクトリから例コードファイルをドラッグ＆ドロップして Cursor チャットウィンドウに入れます。これにより、Cursor が Zigbee センサー実装の構造と要件を理解するのに役立ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/7.png" style={{width:1000, height:'auto'}}/></div>

4. 事前に作成したプロンプトをチャット入力フィールドにコピー＆ペーストし、Enter キーを押します。Cursor がプロンプトと例コードに基づいてプロジェクトを生成するのを待ちます。

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/9.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

5. **Accept** ボタンをクリックして生成されたコードを保存します。これにより、ワークスペースにプロジェクトファイルが作成されます。

## 生成されたコードのレビュー

Cursor がコードを生成した後、デバイスにアップロードする前に慎重にレビューすることが重要です。以下の主要なポイントを確認してください：

1. ピン構成

- すべてのピン割り当てが物理的な接続と一致していることを確認してください。
- 指定されたピンが実際に XIAO ESP32C6 上で利用可能であることを確認してください。
- ピンの競合がないことを確認してください（例：同じピンが複数の目的で使用されていない）。
- ピンが必要な機能（アナログ、デジタル、I2C など）をサポートしていることを確認してください。

2. 機能チェック

生成されたコードを要件と比較してください：
- 要求されたすべての機能が実装されているか？

例えば、提供されたプログラム内では、ピンが GPIO 番号で定義されていますが、これは wiki を読んで XIAO の A/D 番号が正しい GPIO 番号と一致しているかを確認する必要があり、少し手間がかかります。このため、Cursor にピンを A/D の形式で使用するよう依頼することができます。

<details>

<summary>完全なコードをプレビューするにはここをクリック</summary>

```cpp
/**
 * @brief DHT11 温湿度センサーと Zigbee を使用した XIAO ESP32C6
 * 
 * この例では、DHT11 センサーを使用して温度と湿度を測定し、データを毎時報告する Zigbee エンドデバイスを作成する方法を示します。
 * 
 * ハードウェア要件:
 * - XIAO ESP32C6 ボード
 * - DHT11 温湿度センサー
 * 
 * 接続:
 * - DHT11 データピン -> XIAO ESP32C6 の D2 (GPIO8)
 * - DHT11 VCC -> 3.3V
 * - DHT11 GND -> GND
 * 
 * デバイスは Zigbee エンドデバイスとして動作し、測定間にディープスリープに入ることで電力を節約します。
 */

#ifndef ZIGBEE_MODE_ED
#error "Zigbee エンドデバイスモードが Tools->Zigbee mode で選択されていません"
#endif

#include "Zigbee.h"
#include "DHT.h"

/* ピン定義 */
#define DHT_PIN 8  // XIAO ESP32C6 の D2
#define BOOT_BUTTON 9  // XIAO ESP32C6 のブートボタン

/* DHT11 センサー設定 */
#define DHT_TYPE DHT11
DHT dht(DHT_PIN, DHT_TYPE);

/* Zigbee 設定 */
#define TEMP_SENSOR_ENDPOINT_NUMBER 10

/* スリープ設定 */
#define uS_TO_S_FACTOR 1000000ULL  // マイクロ秒から秒への変換係数
#define TIME_TO_SLEEP  3600        // 1 時間 (3600 秒) スリープ

/* グローバル変数 */
ZigbeeTempSensor zbTempSensor = ZigbeeTempSensor(TEMP_SENSOR_ENDPOINT_NUMBER);

/************************ センサー関数 *****************************/
void measureAndSleep() {
  // DHT11 から温度と湿度を読み取る
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  // 読み取り値が有効か確認
  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("DHT11 センサーからの読み取りに失敗しました！");
    delay(1000);
    return;
  }

  // 温度と湿度の値を温度センサー EP に更新
  zbTempSensor.setTemperature(temperature);
  zbTempSensor.setHumidity(humidity);

  // 温度と湿度の値を報告
  zbTempSensor.report();
  Serial.printf("報告された温度: %.2f°C, 湿度: %.2f%%\r\n", temperature, humidity);

  // データ送信を許可するために小さな遅延を追加
  delay(100);

  // デバイスをディープスリープに入れる
  // Serial.println("1 時間スリープに入ります");
  // esp_deep_sleep_start();
}

/********************* Arduino セットアップ **************************/
void setup() {
  Serial.begin(115200);
  
  // DHT11 センサーを初期化
  dht.begin();

  // ボタンのスイッチを初期化
  pinMode(BOOT_BUTTON, INPUT_PULLUP);

  // ウェイクアップソースを設定
  // esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);

  // Zigbee デバイス情報を設定
  zbTempSensor.setManufacturerAndModel("Seeed", "XIAO_DHT11_Sensor");

  // 温度測定範囲を設定 (-20°C ～ 60°C、DHT11 用)
  zbTempSensor.setMinMaxValue(-20, 60);

  // 温度測定の許容誤差を設定 (DHT11 の ±2°C 精度)
  zbTempSensor.setTolerance(2);

  // 湿度センサーを設定 (DHT11 の 20-90% RH 範囲、±5% RH 精度)
  zbTempSensor.addHumiditySensor(20, 90, 5);

  // 電源をバッテリーに設定 (バッテリー駆動を想定)
  zbTempSensor.setPowerSource(ZB_POWER_SOURCE_BATTERY, 100);

  // エンドポイントを Zigbee コアに追加
  Zigbee.addEndpoint(&zbTempSensor);

  // エンドデバイス用の Zigbee 設定を作成
  esp_zb_cfg_t zigbeeConfig = ZIGBEE_DEFAULT_ED_CONFIG();
  zigbeeConfig.nwk_cfg.zed_cfg.keep_alive = 60000; // 60 秒のキープアライブ

  // Zigbee を開始
  if (!Zigbee.begin(&zigbeeConfig, false)) {
    Serial.println("Zigbee の起動に失敗しました！");
    Serial.println("再起動中...");
    ESP.restart();
  }

  Serial.println("Zigbee ネットワークに接続中");
  while (!Zigbee.connected()) {
    Serial.print(".");
    delay(100);
  }
  Serial.println("\nZigbee ネットワークへの接続に成功しました");

  // 接続確立のための時間を確保
  delay(1000);
}

/********************* Arduino ループ **************************/
void loop() {
  // ファクトリーリセットのためにブートボタンを確認
  if (digitalRead(BOOT_BUTTON) == LOW) {
    delay(100); // デバウンス
    int startTime = millis();
    while (digitalRead(BOOT_BUTTON) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        Serial.println("ファクトリーリセットが開始されました。1 秒後に再起動します...");
        delay(1000);
        Zigbee.factoryReset();
      }
    }
  }

  // センサーデータを測定してスリープに入る
  measureAndSleep();
} 
```

</details>

変更したい部分を選択し、プロンプトワードを入力して Enter を押すだけです。

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/11.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## プログラムの検証とアップロード

Cursor が Zigbee プロジェクトコードを生成したので、正しく動作するかどうかを確認する必要があります。これを行う最良の方法は、Arduino IDE を使用することです。Arduino IDE は、コードをコンパイルして XIAO ESP32C6 ボードにアップロードするための優れたツールを提供します。それでは、Arduino IDE に切り替えて検証プロセスを進めましょう：

1. Arduino IDE でメインファイルを開きます。
2. ボードメニューから **XIAO ESP32C6** ボードを選択します。
3. 適切なポートを選択します。
4. **Verify** をクリックしてコードをコンパイルします。
5. エラーが発生した場合は、Cursor のチャットに戻り、修正方法を尋ねてください。
6. コードが正常にコンパイルされたら、それを XIAO ESP32C6 にアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/10.png" style={{width:1000, height:'auto'}}/></div>

すべてが順調に進めば、Home Assistant で Zigbee デバイスが検出されるはずです（Home Assistant のセットアップに Zigbee ゲートウェイが含まれている場合）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/12.png" style={{width:1000, height:'auto'}}/></div>

## Cursor を使用したトラブルシューティング

生成されたコードに問題がある場合は、Cursor に助けを求めることができます：

1. 直面している具体的なエラーや問題を説明します。
2. Arduino IDE のエラーメッセージを含めます。
3. Cursor に修正や改善案を尋ねます。
4. 提案された変更を実装し、再度テストします。

Cursor の AI はデバッグに非常に優れており、手動では見つけにくい問題を特定することがよくあります。

例えば、初めて Zigbee 機能を使用する場合や、以下のようなコンパイルエラーが発生した場合：

```
#error Zigbee end device mode is not selected in Tools->Zigbee mode
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/15.png" style={{width:1000, height:'auto'}}/></div>

このような見落としによるエラーが発生した場合、Cursor にガイダンスを求めることができます。以下のようにプロンプトを入力してください：

***Arduino IDE で「Compilation error: #error Zigbee end device mode is not selected in Tools->Zigbee mode」というコンパイルエラーが発生しました。どうすればよいですか？***

Cursor は、Arduino IDE のツールメニューを確認し、適切な Zigbee モードを選択するよう提案するでしょう：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/16.png" style={{width:400, height:'auto'}}/></div>

発生したエラーについて Cursor に尋ねることで、解決プロセスを案内してもらえます。他にも以下のような一般的な問題について質問することができます：

- ライブラリのインストール問題
- ピン設定エラー
- センサー接続の問題
- 通信プロトコルの設定
- 電源管理の懸念

問題を明確に説明するだけで、Cursor は関連する提案や解決策を提供してくれます。

## Cursor を使用したプログラムの強化

基本的な Zigbee 機能が動作した後は、Cursor を使用してプログラムにさらに多くの機能や改善を追加することができます。シリアルポートの初期化チェックを追加する例を見てみましょう。

これは開発やデバッグ中に特に役立ちます。シリアルポートが準備完了になるまで待機することで、シリアル出力を見逃さないようにします。

1. Cursor でプロジェクトを開き、コード内の `setup()` 関数を見つけます。

2. チャットパネルで追加したい内容を説明します。例えば：
   "セットアップを進める前にシリアルポートが準備完了になるまで待機するコードを追加してください"

3. Cursor は以下のような修正案を提案します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/13.png" style={{width:1000, height:'auto'}}/></div>

これらの小さな改善を超えて、基本機能の上に Zigbee の価値を最大化するために省電力機能を実装することができます。Zigbee の主な利点の1つは低消費電力であり、スリープモードを適切に実装することでさらに最適化できます。

センサープロジェクトにディープスリープ機能を追加する方法を Cursor に依頼する例を以下に示します：

1. チャットパネルを開き、ディープスリープの実装を依頼します：

***温度と湿度の値を3時間ごとに1回報告し、それ以外の時間はディープスリープして電力を節約するようにプログラムを変更してください。***

2. Cursor は以下を含むコード修正案を提案します：

- スリープ時間の更新
- フィードバックを改善するためのスリープメッセージの更新
- 新しい報告間隔を反映するドキュメントの更新
- 3時間のディープスリープに戻る

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/cursor_zigbee_xiaoc6/14.png" style={{width:1000, height:'auto'}}/></div>

この電力最適化は、バッテリー駆動のセンサーノードに特に有用であり、報告頻度やセンサーの種類に応じて、バッテリー寿命を数日から数ヶ月、さらには数年に延ばす可能性があります。

Cursor を使用すれば、これらすべての機能を実装できます。要求を具体的に伝えることで、適切な支援を受けることができます。

## 結論

これで、Cursor の AI 搭載チャットを使用して、センサーを用いた XIAO ESP32C6 向けの Zigbee アプリケーションを開発する方法を学びました。このアプローチは、開発プロセスを大幅にスピードアップし、技術的な課題を克服するのに役立ちます。

Cursor に慣れるにつれて、組み込みプロジェクトでその機能をさらに活用する方法を発見できるでしょう。生成されるコードの品質はプロンプトの質に大きく依存するため、要件を具体的かつ詳細に記述することが重要です。

このチュートリアルは、組み込み開発をよりアクセスしやすくするための重要な一歩を示しています。Cursor のような AI ツールと XIAO ESP32C6 のような強力なハードウェアを組み合わせることで、IoT やセンサーネットワーク開発への参入障壁を下げることができます。これは特に以下の方々にとって価値があります：

- 組み込みシステムの学習を始めたばかりの初心者
- プロトタイピングプロセスを加速させたい経験豊富な開発者
- IoT や無線通信の概念を教える教育者
- スマートホームソリューションを作成したいメーカーやホビイスト

AI 支援開発ツールと Zigbee 技術の統合により、エネルギー効率が高く信頼性のある無線センサーネットワークを構築する新しい可能性が開かれます。この技術の組み合わせにより、開発サイクルが短縮されると同時に高品質なコードが維持され、最終的には IoT 分野でのイノベーションを促進します。

:::tip
この記事は Citric によって執筆され、Cursor の支援を受けています。
:::


## 技術サポートと製品に関するディスカッション

弊社の製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>