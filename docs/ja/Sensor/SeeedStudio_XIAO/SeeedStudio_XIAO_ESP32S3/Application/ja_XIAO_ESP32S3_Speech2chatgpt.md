---
description: このチュートリアルでは、XIAO ESP32S3を使用して音声を録音し、音声を認識し、その後ChatGPTに質問をして回答を画面に表示する方法を説明します。
title: XIAO ESP32S3 Senseを基にしたミニチュアChatGPT音声アシスタント
keywords:
- xiao esp32s3 sense
- chatGPT
- 音声からテキストへ
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_speech2chatgpt
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32S3 Senseを基にしたミニチュアChatGPT音声アシスタント

<iframe width="100%" height="400" src="https://www.youtube.com/embed/wPi-XjeJPNw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

本日は、XIAO ESP32S3 SenseとXIAO用のラウンドディスプレイを使用した新しいプロジェクトをご紹介します。このプロジェクトでは、まずXIAO ESP32S3 SenseのマイクとGoogle Cloudの音声からテキストへのサービスを使用して音声認識システムを構築します。認識された音声テキストを使用してOpenAIのインターフェースを呼び出し、ChatGPTに質問をして回答を得ます。最後に、認識された音声と回答内容を画面に表示します。

これが私たちのインテリジェントな「XIAO」アシスタントです！

このプロジェクトを完成させるために必要な一般的な手順を見てみましょう。

- [Google Cloud Speech to Textサービスの登録と有効化](#sign-up-and-enable-google-cloud-speech-to-text-service)
- [ローカルホストで音声からテキストへのサービスを展開](#deploy-speech-to-text-services-on-local-hosts)
- [XIAO ESP32S3 Senseで録音した音声ファイルをGoogle Cloudにアップロードして認識](#upload-xiao-esp32s3-sense-recorded-sound-files-to-google-cloud-for-recognition)
- [XIAO ESP32S3 SenseでChatGPTを展開](#deploy-chatgpt-on-xiao-esp32s3-sense)
- [画面表示内容の設計とプログラムの統合](#design-of-screen-display-content--integration-of-programs)

以下の図に一般的なフレームワーク構造を示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/17.png" style={{width:1000, height:'auto'}}/></div>

## はじめに

このプロジェクトを開始する前に、以下に記載されているように、事前にハードウェアとソフトウェアを準備する必要があります。

### ハードウェアの準備

プログラムの内容を完全に体験するには、少なくとも以下のハードウェア機器が必要です。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio XIAO用ラウンドディスプレイ</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

これに加えて、録音ファイルを保存するためにFAT32形式でフォーマットされた32GB以下のmicroSDカードが必要です。

XIAO ESP32S3 Senseは、SDカードスロットに接続された3つのプルアップ抵抗R4～R6を備えており、ラウンドディスプレイにもプルアップ抵抗があるため、両方を同時に使用するとSDカードを読み取ることができません。この問題を解決するために、XIAO ESP32S3 Sense拡張ボードのJ3を切断する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:500, height:'auto'}}/></div>

J3を切断すると、XIAO ESP32S3 SenseのSDカードスロットが正常に動作しなくなるため、ラウンドディスプレイのSDカードスロットにmicroSDカードを挿入する必要があります。

次に、microSDカード、XIAO ESP32S3 Sense、ラウンドディスプレイを順番に取り付けてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/101.gif" style={{width:500, height:'auto'}}/></div>

:::tip
J3接続を刃物で切断する際にカメラを傷つけないように、カメラモジュールを先に取り外すことをお勧めします。
:::

### ソフトウェアの準備

XIAO ESP32S3を使用するため、開始する前にWikiの指示に従ってXIAO ESP32S3オンボードパッケージをインストールしてください。

- [Seeed Studio XIAO ESP32S3 (Sense)の使い方](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/#software-preparation)

これに加えて、XIAO用ラウンドディスプレイも使用するため、Wikiに従って拡張ボードのライブラリを準備する必要があります。

- [Seeed Studio XIAO用ラウンドディスプレイの使い方](https://wiki.seeedstudio.com/ja/get_start_round_display/#getting-started)

プロジェクト中にChatGPTのライブラリやArduinoJSONなどのサードパーティライブラリを使用する場合があります。これらは以下からダウンロードしてArduino開発環境に追加できます。

- [ライブラリ](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/tree/main/libraries)

基本ライブラリに加えて、Nodeサービスも使用する必要があるため、Nodejsを自分でインストールする必要があります。[公式サイト](https://nodejs.org/en)から直接ダウンロードできます。

すべての準備が整ったら、今日のチュートリアルを始めましょう。

## Google Cloud Speech-to-Text サービスの登録と有効化

:::tip
Google Cloud Speech-to-Text サービスの登録と設定方法については、[公式 Google Cloud チュートリアル](https://cloud.google.com/speech-to-text/docs/before-you-begin#setting_up_your_google_cloud_platform_project)を直接参照することもできます。
:::

Speech-to-Text は、Google の人工知能 (AI) 技術によって動作する API です。音声データを Speech-to-Text に送信すると、その音声データのテキスト文字起こしを受け取ることができます。Speech-to-Text にリクエストを送信する前に、Google Cloud コンソールで API を有効にする必要があります。

### ステップ 1. Google Cloud コンソールにサインイン

[こちら](https://console.cloud.google.com/?_ga=2.241031875.1758680688.1685496686-1606155345.1684977559)をクリックして Google Cloud コンソールにアクセスできます。まだ Google Cloud に登録していない場合は、[こちら](https://console.cloud.google.com/?_ga=2.241031875.1758680688.1685496686-1606155345.1684977559)から登録できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/18.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. [プロジェクトセレクターページに移動](https://console.cloud.google.com/projectselector2/home/dashboard?_ga=2.5754355.1758680688.1685496686-1606155345.1684977559)

既存のプロジェクトを選択するか、新しいプロジェクトを作成できます。プロジェクトの作成に関する詳細は、[プロジェクトの作成と管理](https://cloud.google.com/resource-manager/docs/creating-managing-projects)を参照してください。

新しいプロジェクトを作成する場合、そのプロジェクトに請求アカウントをリンクするよう求められます。既存のプロジェクトを使用する場合は、請求が有効になっていることを確認してください。

:::note
注意: Speech-to-Text API を使用するには請求を有効にする必要がありますが、無料枠を超えない限り課金されません。詳細は [料金ページ](https://cloud.google.com/speech-to-text/pricing) を参照してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/2.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 3. Speech-to-Text サービスを開始

プロジェクトを選択し、それを請求アカウントにリンクしたら、Speech-to-Text API を有効にできます。ページ上部の「製品とリソースを検索」バーに **speech** と入力します。検索結果から **Cloud Speech-to-Text API** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/1.png" style={{width:600, height:'auto'}}/></div>

### ステップ 4. サービスアカウントを作成

プロジェクトにサービスアカウントがまだない場合は、新しいサービスアカウントを作成します。Speech-to-Text を使用するには、サービスアカウントを作成する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/3.png" style={{width:600, height:'auto'}}/></div>

新しいポップアップページで、**CREATE CREDENTIALS** の下にある **Service account** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/4.png" style={{width:1000, height:'auto'}}/></div>

**サービスアカウント名** ボックスに、新しいサービスアカウントの一意の名前を入力します。入力内容は自動的に **サービスアカウント ID ボックス** に反映されます。**サービスアカウントの説明** ボックスは任意ですが、複数のサービスアカウントをプロジェクトに関連付ける予定がある場合は記入をお勧めします。このボックスにサービスアカウントの簡単な説明を入力し、**CREATE AND CONTINUE** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/5.png" style={{width:500, height:'auto'}}/></div>

サービスアカウントに基本的な IAM ロールのいずれかを割り当てることをお勧めします。必要に応じて、1 つのサービスアカウントに複数のロールを割り当てることもできます。利用可能なロールとそれぞれの許可については、[IAM ロール](https://cloud.google.com/iam/docs/understanding-roles) を参照してください。ドロップダウンメニュー **Select a role** をクリックし、**Owner** を選択します。右側の列に表示されるオプションから、このサービスアカウントのロールを選択します。**CONTINUE** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/6.png" style={{width:500, height:'auto'}}/></div>

最後のステップでは、他のエンティティ（個人、Google グループなど）にサービスアカウントへのアクセスを許可するオプションがあります。追加のアクセスを許可する必要がない場合は、情報を入力せずに **DONE** をクリックできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/7.png" style={{width:500, height:'auto'}}/></div>

サービスアカウントは **Service Accounts** ページにリストされます。サービスアカウントの権限を変更したり、新しいキーを追加または生成したり、アクセスを許可したりすることがいつでも可能です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/8.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 5. サービスアカウント用の JSON キーを作成

このプライベートキーは、Speech-to-Text にリクエストを送信する際の[認証プロセス](https://cloud.google.com/speech-to-text/docs/before-you-begin#set_up_your_environment_variables)で使用します。

キーを作成するには、サービスアカウントをクリックし、**KEYS** タブを選択します。**ADD KEY -> Create new key** をクリックします。JSON 形式でキーを作成することをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/9.png" style={{width:800, height:'auto'}}/></div>

新しい形式のキーが自動的にダウンロードされます。このファイルを安全な場所に保存し、ファイルパスを記録してください。各新しい Speech-to-Text セッションの認証プロセスを開始する際に、このファイルを **GOOGLE_APPLICATION_CREDENTIALS** 環境変数に指定する必要があります。これは Speech-to-Text へのリクエストを認証するための重要なステップです。キーのユニークな ID はサービスアカウント名の横に表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/10.png" style={{width:1000, height:'auto'}}/></div>

:::note
キーは JSON 形式で保持してください。後のステップで使用します。
:::

## ローカルホストでの Speech-to-Text サービスのデプロイ

### ステップ 6. プロジェクトファイルをダウンロードする

チュートリアル全体を完了するために必要なプロジェクトファイルをパッケージ化しました。以下のボタンから直接 Github からダウンロードするか、Git コマンドを使用してローカルにダウンロードすることができます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> プロジェクトをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

```
git clone https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT.git
```

その間に、**ステップ 5** で準備した JSON ファイルを **NodejsServer** フォルダにコピーしてください。このファイルは後で使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/19.png" style={{width:600, height:'auto'}}/></div>


### ステップ 7. 認証環境変数を設定する

**GOOGLE_APPLICATION_CREDENTIALS** を設定するには、プロジェクトに関連付けられたサービスアカウントが必要であり、そのサービスアカウントの JSON キーにアクセスできる必要があります。

環境変数 **GOOGLE_APPLICATION_CREDENTIALS** を設定して、アプリケーションコードに認証資格情報を提供します。


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows" label="Windows">

PowerShellの場合:

```
$env:GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"
```

**KEY_PATH** をサービスアカウントキーを含む JSON ファイルのパスに置き換えてください。

例:

```
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\service-account-file.json"
```

コマンドプロンプトの場合:

```
set GOOGLE_APPLICATION_CREDENTIALS=KEY_PATH
```

**KEY_PATH** をサービスアカウントキーを含む JSON ファイルのパスに置き換えてください。

</TabItem>


<TabItem value="MacOS or Linux" label="MacOS または Linux">

```
export GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"
```


**KEY_PATH** をサービスアカウントキーを含む JSON ファイルのパスに置き換えてください。

例:

```
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
```

</TabItem>
</Tabs>

前のステップで、JSON ファイルを **NodejsServer** フォルダに配置しましたので、そのフォルダに直接移動し、右クリックして **Open in Powershell** を選択して Windows ターミナルを開きます。

その後、以下のコマンドを入力してください。

```
$env:GOOGLE_APPLICATION_CREDENTIALS="tensile-yen-3xxxxx-fdxxxxxxxxxx.json"
```

:::tip
上記のコマンドを実行する際は、JSON ファイル名を使用してください。
:::

:::caution
コンピュータを再起動したり、Powershell を閉じたりした場合、環境変数を再設定してキーを追加する必要がある場合があります。
:::

### ステップ 8. ローカル Google Cloud Speech-to-Text サービスのデプロイをテストする

すべてが整ったら、録音された音声と JSON プログラムを組み合わせて、録音をテキストに変換するデプロイが成功しているかどうかを確認できます。

プロジェクトフォルダ内の **NodejsServer** で Powershell ウィンドウを開いてください。

次に以下のコマンドを入力します。このコマンドは `speechAPItest.js` ファイルを実行し、プロジェクトのリソースフォルダ内の録音ファイルを音声入力ソースとして使用して Google Cloud に送信し、認識された音声内容を返します。

```
node ./speechAPItest.js
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/13.png" style={{width:800, height:'auto'}}/></div>

上記のように動作する場合、ローカルホストで Google Cloud サービスを正常にデプロイできたことを示しており、次のステップに進む準備が整っています。

問題が発生した場合は、[Google Cloud の公式説明書](https://cloud.google.com/speech-to-text/docs/) を参照して、デプロイプロセスにエラーや欠落がないか確認してください。

## XIAO ESP32S3 Senseで録音した音声ファイルをGoogle Cloudにアップロードして認識する

次に、アップロードする音声ファイルのパスを変更します。ローカルアップロードから、XIAO ESP32S3 Senseで録音した音声をアップロードする方法に切り替えます。XIAO ESP32S3 Senseで録音された音声ファイルは、まずmicroSDカードに保存され、その後ローカルポートを介してGoogle Cloudに転送されます。

### ステップ9. Google Cloud Speech Recognition Serviceのポートリスニングを有効にする

同様に、NodejsServerフォルダ内で、Poweshellを使用して以下のコマンドを実行します。

```
node ./speechAPIServer.js
```

実行すると、**speechAPIServer.js**プログラムが実行され、`localhost:8888`を継続的にリッスンします。このポートにファイルが転送されると、Google Cloudサービスが呼び出されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/20.png" style={{width:800, height:'auto'}}/></div>

リスニングが開始されたら、このウィンドウを開いたままにしておけば、サービスは稼働し続けます。

### ステップ10. ホストのIPアドレスを確認する

録音ファイルをXIAOからGoogle Cloud Servicesにアップロードするには、ホストのポート番号を使用する必要があるため、コンピュータホストのIPアドレスを確認する必要があります。

<Tabs>
<TabItem value="Windows" label="Windows">

Powershellで以下のコマンドを実行して、コンピュータのIPアドレス情報を取得します。

```
ipcofig
```

</TabItem>

<TabItem value="MacOS or Linux" label="MacOSまたはLinux">

シェルで以下のコマンドを実行して、コンピュータのIPアドレス情報を取得します。

```
ifconfig
```

</TabItem>
</Tabs>

IPアドレスをメモしておいてください。後で使用します。

### ステップ11. XIAO ESP32S3 Sense用プログラムのアップロード

プロジェクトフォルダ**[XIAOESP32S3-RECORD-UPLOAD](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/main/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino)**には、このセクションの例で使用するプログラムが準備されています。

<details>

<summary>ESP32バージョンが2.0.xの場合、ここをクリックして完全なプログラムをプレビュー</summary>

```cpp
#include <I2S.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// 録音プログラムで使用する変数。最適な結果を得るために変更しないでください。
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 10      // 秒。最大値は240

// 録音バッファに必要なバイト数
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

File file;
const char filename[] = "/recording.wav";

bool isWIFIConnected;

void setup() {
  // 初回実行時のセットアップコード
  Serial.begin(115200);
  while (!Serial) ;
  
  I2S.setAllPins(-1, 42, 41, -1, -1);
  
  // 送信モードはPDM_MONO_MODE（パルス密度変調モノモード）を使用
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("I2Sの初期化に失敗しました！");
    while (1) ;
  }

  if(!SD.begin(D2)){
    Serial.println("SDカードのマウントに失敗しました！");
    while (1) ;
  }
  
  xTaskCreate(i2s_adc, "i2s_adc", 1024 * 8, NULL, 1, NULL);
  delay(500);
  xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
}

void loop() {
  // 繰り返し実行されるメインコード
}

void i2s_adc(void *arg)
{
  uint32_t sample_size = 0;

  // 実際の録音バッファを指す変数
  uint8_t *rec_buffer = NULL;
  Serial.printf("録音を開始する準備ができました...\n");

  File file = SD.open(filename, FILE_WRITE);

  // WAVファイルのヘッダーを書き込む
  uint8_t wav_header[WAV_HEADER_SIZE];

  // WAVファイルヘッダー情報をwav_header配列に書き込む
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);

  // file.write()関数を呼び出して、wav_header配列のデータを新しく作成したWAVファイルに書き込む
  file.write(wav_header, WAV_HEADER_SIZE);

  // ESP32のPSRAM（外部キャッシュメモリ）を使用して、録音データを保存するためのメモリを動的に割り当てる
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("メモリ割り当てに失敗しました！\n");
    while(1) ;
  }
  Serial.printf("バッファ: %d バイト\n", ESP.getPsramSize() - ESP.getFreePsram());

  // 録音を開始
  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
  if (sample_size == 0) {
    Serial.printf("録音に失敗しました！\n");
  } else {
    Serial.printf("録音 %d バイト\n", sample_size);
  }

  // 音量を増加
  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
  }

  // WAVファイルにデータを書き込む
  Serial.printf("ファイルに書き込み中...\n");
  if (file.write(rec_buffer, record_size) != record_size)
    Serial.printf("ファイル書き込みに失敗しました！\n");

  free(rec_buffer);
  rec_buffer = NULL;
  file.close();
  Serial.printf("録音が終了しました。\n");
    
  listDir(SD, "/", 0);

  if(isWIFIConnected){
    uploadFile();
  }
  
  vTaskDelete(NULL);
}


void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 参考: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}


void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("ディレクトリをリスト表示: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("ディレクトリのオープンに失敗しました");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("ディレクトリではありません");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  ディレクトリ : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  ファイル: ");
            Serial.print(file.name());
            Serial.print("  サイズ: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  char* ssid = "wifi-ssid";
  char* password = "wifi-password";
  Serial.print("接続を試みています: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi接続完了！");
  isWIFIConnected = true;
  while(true){
    vTaskDelay(1000);
  }
}

void uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("ファイルが利用できません！");
    return;
  }

  Serial.println("===> ファイルをNode.jsサーバーにアップロード");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("HTTPレスポンスコード : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    String response = client.getString();
    Serial.println("==================== 音声認識結果 ====================");
    Serial.println(response);
    Serial.println("====================      終了      ====================");
  }else{
    Serial.println("エラー");
  }
  file.close();
  client.end();
}
```

</details>

<details>

<summary>ESP32バージョンが3.0.xの場合。完全なプログラムをプレビューするにはここをクリックしてください</summary>

```cpp
#include <ESP_I2S.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// 録音プログラムで使用する変数。最適な結果を得るために変更しないでください
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 10      // 秒。最大値は240

// I2Sの定義
I2SClass I2S;

// 録音バッファに必要なバイト数
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

File file;
const char filename[] = "/recording.wav";

bool isWIFIConnected;

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  while (!Serial) ;
  
  // 42番ピンをPDMクロック、41番ピンをPDMデータピンとして設定
  I2S.setPinsPdmRx(42, 41);

  // 送信モードはPDM_MONO_MODE（パルス密度変調モノモード）を使用
  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("I2Sの初期化に失敗しました！");
    while (1) ;
  }

  if(!SD.begin(D2)){
    Serial.println("SDカードのマウントに失敗しました！");
    while (1) ;
  }
  
  xTaskCreate(i2s_adc, "i2s_adc", 1024 * 8, NULL, 1, NULL);
  delay(500);
  xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
}

void loop() {
  // 繰り返し実行されるメインコードを記述
}

void i2s_adc(void *arg)
{
  uint32_t sample_size = 0;

  // 実際の録音バッファを指すために使用される変数
  uint8_t *rec_buffer = NULL;
  Serial.printf("録音の準備ができました...\n");

  File file = SD.open(filename, FILE_WRITE);

  // WAVファイルのヘッダーを書き込む
  uint8_t wav_header[WAV_HEADER_SIZE];

  // WAVファイルヘッダー情報をwav_header配列に書き込む
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);

  // file.write()関数を呼び出して、wav_header配列内のデータを新しく作成したWAVファイルに書き込む
  file.write(wav_header, WAV_HEADER_SIZE);

  // ESP32のPSRAM（外部キャッシュメモリ）を使用して、録音データを保存するためのメモリを動的に割り当てる
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("メモリ割り当てに失敗しました！\n");
    while(1) ;
  }
  Serial.printf("バッファ: %d バイト\n", ESP.getPsramSize() - ESP.getFreePsram());

  // 録音を開始
  // I2Sポート番号（この場合はI2S_NUM_0）、
  // データを書き込むバッファへのポインタ（rec_buffer）、
  // 読み取るデータのサイズ（record_size）、
  // 実際に読み取られるデータのサイズを指す変数へのポインタ（&sample_size）、
  // データを読み取るための最大待機時間（この場合はportMAX_DELAY、無限待機を示す）
  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
  if (sample_size == 0) {
    Serial.printf("録音に失敗しました！\n");
  } else {
    Serial.printf("録音 %d バイト\n", sample_size);
  }

  // 音量を増加
  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
  }

  // WAVファイルにデータを書き込む
  Serial.printf("ファイルに書き込み中...\n");
  if (file.write(rec_buffer, record_size) != record_size)
    Serial.printf("ファイル書き込みに失敗しました！\n");

  free(rec_buffer);
  rec_buffer = NULL;
  file.close();
  Serial.printf("録音が終了しました。\n");
    
  listDir(SD, "/", 0);

  if(isWIFIConnected){
    uploadFile();
  }
  
  vTaskDelete(NULL);
}


void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 参考: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}


void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("ディレクトリをリスト表示: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("ディレクトリのオープンに失敗しました");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("ディレクトリではありません");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  ディレクトリ : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  ファイル: ");
            Serial.print(file.name());
            Serial.print("  サイズ: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  char* ssid = "wifi-ssid";
  char* password = "wifi-password";
  Serial.print("接続を試みています: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fiに接続しました！");
  isWIFIConnected = true;
  while(true){
    vTaskDelay(1000);
  }
}

void uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("ファイルが利用できません！");
    return;
  }

  Serial.println("===> ファイルをNode.jsサーバーにアップロード");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("HTTPレスポンスコード: ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    String response = client.getString();
    Serial.println("==================== 音声認識結果 ====================");
    Serial.println(response);
    Serial.println("====================      終了      ====================");
  }else{
    Serial.println("エラー");
  }
  file.close();
  client.end();
}
```

</details>

プログラムをコンパイルしてアップロードする前に、状況に応じていくつかの変更を行う必要があります。

1. **録音時間の設定** - コードの[13行目](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#LL13C2-L13C2)で、デフォルトの録音時間は10秒に設定されています。この録音時間を最大240秒まで調整できます。
2. **録音ファイルの名前** - コードの[19行目](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#L19)で、録音ファイルの名前を変更できます。
3. **WiFiネットワーク名** - コードの[172行目](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#L172)で、Google Cloud Servicesをデプロイしているホストと同じLAN内のネットワーク名に変更してください。
4. **WiFiネットワークのパスワード** - コードの[173行目](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#LL173C5-L173C5)で、対応するネットワークのパスワードを変更してください。
5. **ホストIPアドレス** - コードの[198行目](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#LL198C7-L198C7)で、ここにホストのIPアドレスを入力し、ポート番号は8888のままにしてください。

プログラムを変更してアップロードしたら、シリアルモニターをオンにして、録音の準備を開始できます。10秒間の録音後、Google Cloudが録音ファイルを分析し、認識結果を返します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/15.png" style={{width:1000, height:'auto'}}/></div>

## XIAO ESP32S3 SenseでChatGPTをデプロイする

次に、難易度を上げて、コードにChatGPT呼び出しを追加します。

### ステップ12. 認識されたテキストを質問としてChatGPTに質問する

プロジェクトフォルダ **[XIAOESP32S3-SPEECH-TO-CHATGPT](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/main/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino)** には、このセクションの例のためのプログラムが準備されています。

<details>

<summary>ESP32のバージョンが2.0.xの場合、ここをクリックして完全なプログラムをプレビューしてください</summary>

```cpp
#include <I2S.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <ChatGPT.hpp>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// 録音プログラムで使用される変数。最適な動作のため変更しないでください。
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 5  // 秒。最大値は240

const char* ssid = "wifi-ssid";
const char* password = "wifi-password";

// 録音バッファに必要なバイト数
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

File file;
const char filename[] = "/recording.wav";
bool isWIFIConnected;

String chatgpt_Q;

TaskHandle_t chatgpt_handle;
WiFiClientSecure client;
ChatGPT<WiFiClientSecure> chat_gpt(&client, "v1", "OpenAI-TOKEN");

//*****************************************Arduino 基本設定******************************************//

void setup() {
  // 初回実行時のセットアップコード
  Serial.begin(115200);
  while (!Serial) ;
  
  I2S.setAllPins(-1, 42, 41, -1, -1);
  
  // 送信モードはPDM_MONO_MODE（パルス密度変調モノモード）を使用
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("I2Sの初期化に失敗しました！");
    while (1) ;
  }

  if(!SD.begin(D2)){
    Serial.println("SDカードのマウントに失敗しました！");
    while (1) ;
  }

  xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
  delay(500);
  xTaskCreate(i2s_adc, "i2s_adc", 1024 * 8, NULL, 1, NULL);
  xTaskCreate(chatgpt, "chatgpt", 1024 * 8, NULL, 2, &chatgpt_handle);
}

void loop() {
  // 繰り返し実行されるメインコード
}

//*****************************************RTOS タスク******************************************//

void i2s_adc(void *arg)
{
  while(1){
    uint32_t sample_size = 0;
  
    // 実際の録音バッファを指す変数
    uint8_t *rec_buffer = NULL;
    Serial.printf("録音の準備ができました...\n");
  
    File file = SD.open(filename, FILE_WRITE);
  
    // WAVファイルにヘッダーを書き込む
    uint8_t wav_header[WAV_HEADER_SIZE];
  
    // WAVファイルヘッダー情報をwav_header配列に書き込む
    generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  
    // file.write()関数を呼び出して、wav_header配列のデータを新しく作成したWAVファイルに書き込む
    file.write(wav_header, WAV_HEADER_SIZE);
  
    // ESP32のPSRAM（外部キャッシュメモリ）を使用して、録音データを保存するためのメモリを動的に割り当てる
    rec_buffer = (uint8_t *)ps_malloc(record_size);
    if (rec_buffer == NULL) {
      Serial.printf("メモリ割り当てに失敗しました！\n");
      while(1) ;
    }
    Serial.printf("バッファ: %d バイト\n", ESP.getPsramSize() - ESP.getFreePsram());
  
    // 録音開始
    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
    if (sample_size == 0) {
      Serial.printf("録音に失敗しました！\n");
    } else {
      Serial.printf("録音 %d バイト\n", sample_size);
    }
  
    // 音量を増加
    for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
      (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
    }
  
    // WAVファイルにデータを書き込む
    Serial.printf("ファイルに書き込み中...\n");
    if (file.write(rec_buffer, record_size) != record_size)
      Serial.printf("ファイル書き込みに失敗しました！\n");
  
    free(rec_buffer);
    rec_buffer = NULL;
    file.close();
    Serial.printf("録音が終了しました。\n");
      
    listDir(SD, "/", 0);

    bool uploadStatus = false;
  
    if(isWIFIConnected){
      uploadStatus = uploadFile();
    }
    
    if(uploadStatus)
      xTaskNotifyGive(chatgpt_handle);
    vTaskDelay(10000);       // 各録音は10秒間隔
  }
}

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  Serial.print("接続を試みています: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi接続成功！");
  isWIFIConnected = true;
  // SSL証明書の検証を無視
  client.setInsecure();
  while(true){
    vTaskDelay(1000);
  }
}

void chatgpt(void *pvParameters){
  while(1){
    // タスク1からの通知信号を待機
    ulTaskNotifyTake(pdTRUE, portMAX_DELAY);

    String result;
    if (chat_gpt.simple_message("gpt-3.5-turbo-0301", "user", chatgpt_Q, result)) {
      Serial.println("===成功===");
      Serial.println(result);
    } else {
      Serial.println("===エラー===");
      Serial.println(result);
    }

  }
}

//*****************************************オーディオ処理******************************************//

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 詳細はこちらを参照: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}

//*****************************************ファイル処理******************************************//

void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("ディレクトリをリスト表示: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("ディレクトリのオープンに失敗しました");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("ディレクトリではありません");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  ディレクトリ: ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  ファイル: ");
            Serial.print(file.name());
            Serial.print("  サイズ: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

bool uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("ファイルが利用できません！");
    return false;
  }

  Serial.println("===> ファイルをNode.jsサーバーにアップロード");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    String response = client.getString();
    Serial.println("==================== 音声認識結果 ====================");
    Serial.println(response);
    chatgpt_Q = response;
    Serial.println("====================      終了      ====================");
    file.close();
    client.end();
    return true;
  }else{
    Serial.println("エラー");
    return false;
  }
  
}
```

</details>

<details>

<summary>ESP32バージョンが3.0.xの場合。完全なプログラムをプレビューするにはここをクリックしてください</summary>

```cpp
#include <ESP_I2S.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <ChatGPT.hpp>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// 録音プログラムで使用される変数。最適な動作のため変更しないでください
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 5  // 秒。最大値は240

const char* ssid = "wifi-ssid";
const char* password = "wifi-password";

// I2Sの定義
I2SClass I2S;

// 録音バッファに必要なバイト数
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

File file;
const char filename[] = "/recording.wav";
bool isWIFIConnected;

String chatgpt_Q;

TaskHandle_t chatgpt_handle;
WiFiClientSecure client;
ChatGPT<WiFiClientSecure> chat_gpt(&client, "v1", "OpenAI-TOKEN");

//*****************************************Arduino 基本設定******************************************//

void setup() {
  // 初回実行時のセットアップコード
  Serial.begin(115200);
  while (!Serial) ;
  
  // 42番ピンをPDMクロック、41番ピンをPDMデータピンとして設定
  I2S.setPinsPdmRx(42, 41);

  // 送信モードはPDM_MONO_MODE（パルス密度変調モノモード）を使用
  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("I2Sの初期化に失敗しました！");
    while (1) ;
  }

  if(!SD.begin(D2)){
    Serial.println("SDカードのマウントに失敗しました！");
    while (1) ;
  }

  xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
  delay(500);
  xTaskCreate(i2s_adc, "i2s_adc", 1024 * 8, NULL, 1, NULL);
  xTaskCreate(chatgpt, "chatgpt", 1024 * 8, NULL, 2, &chatgpt_handle);
}

void loop() {
  // 繰り返し実行されるメインコード
}

//*****************************************RTOS タスク******************************************//

void i2s_adc(void *arg)
{
  while(1){
    uint32_t sample_size = 0;
  
    // 実際の録音バッファを指すために使用される変数
    uint8_t *rec_buffer = NULL;
    Serial.printf("録音の準備ができました...\n");
  
    File file = SD.open(filename, FILE_WRITE);
  
    // WAVファイルのヘッダーを書き込む
    uint8_t wav_header[WAV_HEADER_SIZE];
  
    // WAVファイルのヘッダー情報をwav_header配列に書き込む
    generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  
    // file.write()関数を呼び出して、wav_header配列内のデータを新しく作成したWAVファイルに書き込む
    file.write(wav_header, WAV_HEADER_SIZE);
  
    // ESP32のPSRAM（外部キャッシュメモリ）を使用して、録音データを保存するためのメモリを動的に割り当てる
    rec_buffer = (uint8_t *)ps_malloc(record_size);
    if (rec_buffer == NULL) {
      Serial.printf("メモリ割り当てに失敗しました！\n");
      while(1) ;
    }
    Serial.printf("バッファ: %d バイト\n", ESP.getPsramSize() - ESP.getFreePsram());
  
    // 録音開始
    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
    if (sample_size == 0) {
      Serial.printf("録音に失敗しました！\n");
    } else {
      Serial.printf("録音 %d バイト\n", sample_size);
    }
  
    // 音量を増加
    for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
      (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
    }
  
    // WAVファイルにデータを書き込む
    Serial.printf("ファイルに書き込み中...\n");
    if (file.write(rec_buffer, record_size) != record_size)
      Serial.printf("ファイル書き込みに失敗しました！\n");
  
    free(rec_buffer);
    rec_buffer = NULL;
    file.close();
    Serial.printf("録音が終了しました。\n");
      
    listDir(SD, "/", 0);

    bool uploadStatus = false;
  
    if(isWIFIConnected){
      uploadStatus = uploadFile();
    }
    
    if(uploadStatus)
      xTaskNotifyGive(chatgpt_handle);
    vTaskDelay(10000);       // 各録音は10秒間隔で行われる
  }
}

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  Serial.print("接続を試みています: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fiに接続しました！");
  isWIFIConnected = true;
  // SSL証明書の検証を無視
  client.setInsecure();
  while(true){
    vTaskDelay(1000);
  }
}

void chatgpt(void *pvParameters){
  while(1){
    // タスク1からの通知信号を待機
    ulTaskNotifyTake(pdTRUE, portMAX_DELAY);

    String result;
    if (chat_gpt.simple_message("gpt-3.5-turbo-0301", "user", chatgpt_Q, result)) {
      Serial.println("===成功===");
      Serial.println(result);
    } else {
      Serial.println("===エラー===");
      Serial.println(result);
    }

  }
}

//*****************************************オーディオ処理******************************************//

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 参考: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (PCMの場合は16)
    0x01, 0x00, // AudioFormat (PCMの場合は1)
    0x01, 0x00, // NumChannels (1チャンネル)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16ビット)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}

//*****************************************ファイル処理******************************************//

void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("ディレクトリをリスト表示: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("ディレクトリのオープンに失敗しました");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("ディレクトリではありません");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  ディレクトリ : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  ファイル: ");
            Serial.print(file.name());
            Serial.print("  サイズ: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

bool uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("ファイルが利用できません！");
    return false;
  }

  Serial.println("===> ファイルをNode.jsサーバーにアップロード");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    String response = client.getString();
    Serial.println("==================== 音声認識結果 ====================");
    Serial.println(response);
    chatgpt_Q = response;
    Serial.println("====================      終了      ====================");
    file.close();
    client.end();
    return true;
  }else{
    Serial.println("エラー");
    return false;
  }
  
}
```

</details>

再度、このプログラムを使用する前に、以下のコード変更を行う必要があります。

1. **ネットワークのWiFi名** - コードの[18行目](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L18)で、Google Cloud Servicesをデプロイするホストと同じLAN内のネットワーク名に変更してください。
2. **ネットワークのWiFiパスワード** - コードの[19行目](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL19C40-L19C40)で、ネットワークに対応するパスワードに変更してください。
3. **ホストIPアドレス** - コードの[241行目](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL241C7-L241C7)で、ここをホストのIPアドレスに変更し、ポート番号は8888のままにしてください。
4. **OpenAI APIトークン** - ChatGPTインターフェースを呼び出すために、OpenAIトークンを準備し、コードの[33行目](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L33)に記入してください。トークンを初めて使用する場合は、[このWikiの内容](https://wiki.seeedstudio.com/ja/xiaoesp32c3-chatgpt/#submit-questions-via-the-built-in-web-page)を読んで取得方法を学んでください。

変更後、プログラムをアップロードし、シリアルモニターをオンにしてください。録音後、ChatGPTが質問に対して返答した答えが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/16.png" style={{width:1000, height:'auto'}}/></div>

## 画面表示内容の設計とプログラムの統合

最後に、少し工夫を加えます。シリアルモニターを使用する代わりに、タッチスクリーンを使用してタッチおよびクリック機能を実現しました。

### ステップ13. SquareLine Studioを使用して表示画面を描画する

SquareLine Studioは、組み込みシステム向けのグラフィックライブラリであるLVGLによって開発されたGUIデザインツールです。SquareLine Studioは、開発者が組み込みシステムのユーザーインターフェースを迅速かつ効率的に作成および設計するのを支援するために設計されています。このツールは、UIを設計するためのドラッグアンドドロップインターフェースを提供し、さまざまなウィジェットやテーマをサポートしています。

このようなシンプルなインターフェースを設計するには、このツールを使用することをお勧めします。SquareLine Studioでのラウンドディスプレイの使用方法について詳しく知りたい場合は、[Wiki](https://wiki.seeedstudio.com/ja/using_lvgl_and_tft_on_round_display/#drawing-complex-ui-interfaces-with-squareline-studio)をご覧ください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/21.png" style={{width:1000, height:'auto'}}/></div>

スペースの都合上、この記事では表示ページの設計方法について詳しく説明しませんが、エクスポートされたプログラムコードを提供します。このコードは現在、[プロジェクトフォルダ](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/tree/main/ui)の**ui**フォルダ内にあります。

:::caution
SquareLine Studioの**v1.2.3**バージョンを使用することをお勧めします。テストの結果、v1.3.0バージョンではtft_eSPIライブラリとの互換性の問題が発生する可能性があります。
:::

### ステップ14. プロシージャの統合

最終的な完全なプロジェクトコードは、**[XIAOESP32S3-SPEECH-CHATGPT-COMPLETE](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/main/XIAOESP32S3-SPEECH-CHATGPT-COMPLETE/XIAOESP32S3-SPEECH-CHATGPT-COMPLETE.ino)** フォルダ内にあります。

<details>

<summary>もしあなたのESP32のバージョンが2.0.xの場合は、こちらをクリックして完全なプログラムをプレビューしてください。</summary>

```cpp
#include <lvgl.h>
#include <TFT_eSPI.h>
#include "ui.h"
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <ChatGPT.hpp>
#include <I2S.h>
#include <HTTPClient.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"


// 丸型ディスプレイ用のライブラリをインポートし、TFTディスプレイフレームとして使用するフレームを定義
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"


/* 画面の解像度に合わせて変更してください */
static const uint16_t screenWidth  = 240;
static const uint16_t screenHeight = 240;


// 録音プログラムで使用する変数（最適な動作のために変更しないでください）
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 5  // 秒数。最大値は240です。


// 録音バッファに必要なバイト数
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;


// 録音を保存するファイル名
File file;
const char filename[] = "/recording.wav";


// ネットワーク接続状態のフラグ
bool isWIFIConnected;


// ChatGPTが返信した質問の回答
String response;


// 各タスクの開始を示すフラグ
bool recordTask = false;
bool chatgptTask = false;

WiFiClientSecure client;
ChatGPT<WiFiClientSecure> chat_gpt(&client, "v1", "OpenAI-TOKEN");   // OpenAIキーをここに入力してください


// ご自身のネットワークに変更してください
const char* ssid = "wifi-ssid";
const char* password = "wifi-password";

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[ screenWidth * screenHeight / 10 ];


//****************************************LVGL****************************************************//

#if LV_USE_LOG != 0
/* シリアルデバッグ用 */
void my_print(const char * buf)
{
    Serial.printf(buf);
    Serial.flush();
}
#endif

/* 表示のフラッシュ処理 */
void my_disp_flush( lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p )
{
    uint32_t w = ( area->x2 - area->x1 + 1 );
    uint32_t h = ( area->y2 - area->y1 + 1 );

    tft.startWrite();
    tft.setAddrWindow( area->x1, area->y1, w, h );
    tft.pushColors( ( uint16_t * )&color_p->full, w * h, true );
    tft.endWrite();

    lv_disp_flush_ready( disp );
}

/* タッチパッドの読み取り */
void my_touchpad_read( lv_indev_drv_t * indev_driver, lv_indev_data_t * data )
{
    // uint16_t touchX = 0, touchY = 0;
    // bool touched = false;//tft.getTouch( &touchX, &touchY, 600 );

    lv_coord_t touchX, touchY;
    chsc6x_get_xy(&touchX, &touchY);

    // if( !touched )
    if(!chsc6x_is_pressed())
    {
        data->state = LV_INDEV_STATE_REL;
    }
    else
    {
        data->state = LV_INDEV_STATE_PR;

        /* 座標をセット */
        data->point.x = touchX;
        data->point.y = touchY;

        // Serial.print( "Data x " );
        // Serial.println( touchX );
        //
        // Serial.print( "Data y " );
        // Serial.println( touchY );

        // ロゴをクリックして設定すると録音を開始できます（コメント解除して設定してください）
        // if((touchX < 240 && touchX > 230) && (touchY < 120 && touchY > 100)){
          recordTask = true;
        // }
    }
}

//****************************************Arduino ベース****************************************************//

void setup()
{
    Serial.begin(115200); /* シリアルデバッグの準備 */
    // while(!Serial);

    pinMode(TOUCH_INT, INPUT_PULLUP);
    Wire.begin();

    String LVGL_Arduino = "こんにちは Arduino! ";
    LVGL_Arduino += String('V') + lv_version_major() + "." + lv_version_minor() + "." + lv_version_patch();

    Serial.println(LVGL_Arduino);
    Serial.println("私は LVGL_Arduino です");

    lv_init();

#if LV_USE_LOG != 0
    lv_log_register_print_cb(my_print); /* デバッグ用のプリント関数を登録 */
#endif

    tft.begin();          /* TFT 初期化 */
    tft.setRotation(0);   /* 横向き表示（反転） */

    lv_disp_draw_buf_init(&draw_buf, buf, NULL, screenWidth * screenHeight / 10);

    /* ディスプレイを初期化 */
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init(&disp_drv);
    /* 以下の行はご自身のディスプレイ解像度に変更してください */
    disp_drv.hor_res = screenWidth;
    disp_drv.ver_res = screenHeight;
    disp_drv.flush_cb = my_disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register(&disp_drv);

    /* （ダミーの）入力デバイスドライバを初期化 */
    static lv_indev_drv_t indev_drv;
    lv_indev_drv_init(&indev_drv);
    indev_drv.type = LV_INDEV_TYPE_POINTER;
    indev_drv.read_cb = my_touchpad_read;
    lv_indev_drv_register(&indev_drv);

    ui_init();

    I2S.setAllPins(-1, 42, 41, -1, -1);

    // 送信モードはPDM_MONO_MODE、つまりPDM（パルス密度変調）モノラルモードでの送信を意味します
    if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
        Serial.println("I2Sの初期化に失敗しました！");
        while (1);
    }

    if(!SD.begin(D2)){
        Serial.println("SDカードのマウントに失敗しました！");
        while (1);
    }

    Serial.println("セットアップ完了");

    // ネットワークの接続状態を定期的にチェックするFreeRTOSタスクを作成
    xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
}

void loop()
{
    lv_timer_handler(); /* GUIの処理を実行 */
    record();
    chatgpt();
    delay(5);
}

//*****************************************オーディオ処理******************************************//

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 参考：http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // チャンクID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // チャンクサイズ
    'W', 'A', 'V', 'E', // フォーマット
    'f', 'm', 't', ' ', // サブチャンク1ID
    0x10, 0x00, 0x00, 0x00, // サブチャンク1サイズ（PCMは16）
    0x01, 0x00, // オーディオフォーマット（PCMは1）
    0x01, 0x00, // チャンネル数（モノラル）
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // サンプルレート
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // バイトレート
    0x02, 0x00, // ブロックアライン
    0x10, 0x00, // ビット深度（16bit）
    'd', 'a', 't', 'a', // サブチャンク2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // サブチャンク2サイズ
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}

//*****************************************ファイル処理******************************************//

void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("ディレクトリ一覧: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("ディレクトリのオープンに失敗しました");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("ディレクトリではありません");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  ディレクトリ : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  ファイル : ");
            Serial.print(file.name());
            Serial.print("  サイズ : ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

bool uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("ファイルが見つかりません！");
    return false;
  }

  Serial.println("===> ファイルをNode.jsサーバーへアップロード中");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("HTTPレスポンスコード : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    response = client.getString();
    Serial.println("==================== 文字起こし結果 ====================");
    Serial.println(response);
    const char* chatgpt_Q = response.c_str();
    lv_label_set_text(ui_question, chatgpt_Q);
    Serial.println("====================          終了          ====================");
    file.close();
    client.end();
    recordTask = false;
    chatgptTask = true;
    return true;
  }else{
    Serial.println("エラーが発生しました");
    lv_label_set_text(ui_question, "エラー");
    recordTask = false;
    chatgptTask = false;
    return false;
  }
}


//*****************************************メイン関数******************************************//

void record(){
  if(recordTask){
    Serial.println("録音タスク開始!!!");
    lv_label_set_text(ui_question, "録音中 ...");
    lv_timer_handler();
    uint32_t sample_size = 0;
    
    // 実際の録音バッファを指すための変数
    uint8_t *rec_buffer = NULL;
    Serial.printf("録音開始準備中 ...\n");
  
    File file = SD.open(filename, FILE_WRITE);
  
    // WAVファイルにヘッダーを書き込む
    uint8_t wav_header[WAV_HEADER_SIZE];
  
    // wav_header配列にWAVファイルのヘッダー情報を書き込む
    generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  
    // 新規作成したWAVファイルにwav_header配列のデータを書き込む
    file.write(wav_header, WAV_HEADER_SIZE);
  
    // ESP32のPSRAM(外部キャッシュメモリ)を使い録音データ保存用メモリを動的確保
    rec_buffer = (uint8_t *)ps_malloc(record_size);
    if (rec_buffer == NULL) {
      Serial.printf("メモリ確保失敗!\n");
      while(1) ;
    }
    Serial.printf("バッファサイズ: %d バイト\n", ESP.getPsramSize() - ESP.getFreePsram());
  
    // 録音開始
    // I2Sポート番号（ここではI2S_NUM_0）、
    // 書き込み先バッファポインタ（rec_buffer）、
    // 読み込みサイズ（record_size）、
    // 実際に読み込んだサイズのポインタ（&sample_size）、
    // 最大待ち時間（portMAX_DELAY：無限待機）
    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
    if (sample_size == 0) {
      Serial.printf("録音失敗!\n");
    } else {
      Serial.printf("録音バイト数: %d\n", sample_size);
    }
  
    // 音量増加
    for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
      (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
    }
  
    // WAVファイルにデータ書き込み
    Serial.printf("ファイルに書き込み中 ...\n");
    if (file.write(rec_buffer, record_size) != record_size)
      Serial.printf("ファイル書き込み失敗!\n");
  
    free(rec_buffer);
    rec_buffer = NULL;
    file.close();
    Serial.printf("録音終了。\n");
    lv_label_set_text(ui_question, "認識中 ...");
    lv_timer_handler();
    listDir(SD, "/", 0);
  
    bool uploadStatus = false;
  
    if(isWIFIConnected){
      uploadStatus = uploadFile();
    }
  }
}

void chatgpt(){
  if(chatgptTask){
    Serial.println("ChatGPTタスク開始!!!");
    lv_label_set_text(ui_answer,"回答中 ...");
    lv_timer_handler();
    String result;
    if (chat_gpt.simple_message("gpt-3.5-turbo-0301", "user", response, result)) {
      Serial.println("===成功===");
      Serial.println(result);
      const char* chatgpt_A = result.c_str();
      lv_label_set_text(ui_answer, chatgpt_A);
    } else {
      Serial.println("===エラー===");
      Serial.println(result);
      lv_label_set_text(ui_answer, "エラー");
      lv_timer_handler();
    }
    recordTask = false;
    chatgptTask = false;
  }
}

//*****************************************RTOS******************************************//

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  Serial.print("接続を試みています: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fiに接続されました！");
  isWIFIConnected = true;
  // SSL証明書の検証を無視します
  client.setInsecure();
  while(true){
    vTaskDelay(1000);
  }
}
```

</details>

<details>

<summary>ESP32のバージョンが3.0.xの場合。完全なプログラムをプレビューするにはここをクリックしてください</summary>

```cpp
#include <lvgl.h>
#include <TFT_eSPI.h>
#include "ui.h"
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <ChatGPT.hpp>
#include <ESP_I2S.h>
#include <HTTPClient.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"


// ラウンドディスプレイ用ライブラリをインポートし、TFTディスプレイフレームとして使用するフレームを定義
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"


/*画面解像度を変更*/
static const uint16_t screenWidth  = 240;
static const uint16_t screenHeight = 240;


// 録音プログラムで使用する変数。最適な結果を得るために変更しないでください
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 5  // 秒。最大値は240です


// 録音バッファに必要なバイト数
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

// I2Sを定義
I2SClass I2S;

// 録音を保存するファイル名
File file;
const char filename[] = "/recording.wav";


// ネットワーク接続状態フラグ
bool isWIFIConnected;


// ChatGPTが返答した質問への回答
String response;


// 各タスク開始のフラグ
bool recordTask = false;
bool chatgptTask = false;

WiFiClientSecure client;
ChatGPT<WiFiClientSecure> chat_gpt(&client, "v1", "OpenAI-TOKEN");   // OpenAIキーを入力してください


// ネットワークを変更してください
const char* ssid = "wifi-ssid";
const char* password = "wifi-password";

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[ screenWidth * screenHeight / 10 ];


//****************************************LVGL****************************************************//

#if LV_USE_LOG != 0
/* シリアルデバッグ */
void my_print(const char * buf)
{
    Serial.printf(buf);
    Serial.flush();
}
#endif

/* ディスプレイのフラッシュ */
void my_disp_flush( lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p )
{
    uint32_t w = ( area->x2 - area->x1 + 1 );
    uint32_t h = ( area->y2 - area->y1 + 1 );

    tft.startWrite();
    tft.setAddrWindow( area->x1, area->y1, w, h );
    tft.pushColors( ( uint16_t * )&color_p->full, w * h, true );
    tft.endWrite();

    lv_disp_flush_ready( disp );
}

/* タッチパッドの読み取り */
void my_touchpad_read( lv_indev_drv_t * indev_driver, lv_indev_data_t * data )
{
    lv_coord_t touchX, touchY;
    chsc6x_get_xy(&touchX, &touchY);

    if(!chsc6x_is_pressed())
    {
        data->state = LV_INDEV_STATE_REL;
    }
    else
    {
        data->state = LV_INDEV_STATE_PR;

        /* 座標を設定 */
        data->point.x = touchX;
        data->point.y = touchY;

        // ロゴをクリックして録音を開始するには、以下のコメントを解除して設定してください
//        if((touchX < 240 && touchX > 230) && (touchY < 120 && touchY > 100)){
          recordTask = true;
//        }
    }
}

//****************************************Arduino Base****************************************************//

void setup()
{
    Serial.begin( 115200 ); /* シリアルデバッグの準備 */
//    while(!Serial);

    pinMode(TOUCH_INT, INPUT_PULLUP);
    Wire.begin();

    String LVGL_Arduino = "Hello Arduino! ";
    LVGL_Arduino += String('V') + lv_version_major() + "." + lv_version_minor() + "." + lv_version_patch();

    Serial.println( LVGL_Arduino );
    Serial.println( "I am LVGL_Arduino" );

    lv_init();

#if LV_USE_LOG != 0
    lv_log_register_print_cb( my_print ); /* デバッグ用のプリント関数を登録 */
#endif

    tft.begin();          /* TFT初期化 */
    tft.setRotation( 0 ); /* 横向き、反転 */

    lv_disp_draw_buf_init( &draw_buf, buf, NULL, screenWidth * screenHeight / 10 );

    /* ディスプレイを初期化 */
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init( &disp_drv );
    /* 以下の行をディスプレイ解像度に変更 */
    disp_drv.hor_res = screenWidth;
    disp_drv.ver_res = screenHeight;
    disp_drv.flush_cb = my_disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register( &disp_drv );

    /* (ダミーの)入力デバイスドライバを初期化 */
    static lv_indev_drv_t indev_drv;
    lv_indev_drv_init( &indev_drv );
    indev_drv.type = LV_INDEV_TYPE_POINTER;
    indev_drv.read_cb = my_touchpad_read;
    lv_indev_drv_register( &indev_drv );

    ui_init();

    // 42番ピンをPDMクロック、41番ピンをPDMデータピンとして設定
    I2S.setPinsPdmRx(42, 41);  

    // 送信モードはPDM_MONO_MODEで、PDM（パルス密度変調）モノモードを使用
    if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
        Serial.println("I2Sの初期化に失敗しました！");
        while (1) ;
    }

    if(!SD.begin(D2)){
        Serial.println("SDカードのマウントに失敗しました！");
        while (1) ;
    }

    Serial.println( "セットアップ完了" );

    // ネットワーク接続状態を定期的に確認するFreeRTOSタスクを作成
    xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
}

void loop()
{
    lv_timer_handler(); /* GUIの作業を実行 */
    record();
    chatgpt();
    delay(5);
}

//*****************************************オーディオ処理******************************************//

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 参考: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (PCMの場合は16)
    0x01, 0x00, // AudioFormat (PCMの場合は1)
    0x01, 0x00, // NumChannels (1チャンネル)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16ビット)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}

//*****************************************ファイル処理******************************************//

void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("ディレクトリをリスト表示: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("ディレクトリのオープンに失敗しました");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("ディレクトリではありません");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  DIR : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  FILE: ");
            Serial.print(file.name());
            Serial.print("  SIZE: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

bool uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("ファイルが利用できません！");
    return false;
  }

  Serial.println("===> ファイルをNode.jsサーバーにアップロード");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    response = client.getString();
    Serial.println("==================== 音声認識結果 ====================");
    Serial.println(response);
    const char* chatgpt_Q = response.c_str();
    lv_label_set_text(ui_question, chatgpt_Q);
    Serial.println("====================      終了      ====================");
    file.close();
    client.end();
    recordTask = false;
    chatgptTask = true;
    return true;
  }else{
    Serial.println("エラー");
    lv_label_set_text(ui_question, "エラー");
    recordTask = false;
    chatgptTask = false;
    return false;
  }
}


//*****************************************メイン関数******************************************//

void record(){
  if(recordTask){
    Serial.println("録音タスク開始!!!");
    lv_label_set_text(ui_question, "録音中 ...");
    lv_timer_handler();
    uint32_t sample_size = 0;
    
    // 実際の録音バッファを指す変数
    uint8_t *rec_buffer = NULL;
    Serial.printf("録音の準備ができました...\n");
  
    File file = SD.open(filename, FILE_WRITE);
  
    // WAVファイルにヘッダーを書き込む
    uint8_t wav_header[WAV_HEADER_SIZE];
  
    // WAVファイルヘッダー情報をwav_header配列に書き込む
    generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  
    // file.write()関数を呼び出して、wav_header配列内のデータを新しく作成したWAVファイルに書き込む
    file.write(wav_header, WAV_HEADER_SIZE);
  
    // ESP32のPSRAM（外部キャッシュメモリ）を使用して、録音データを保存するメモリ領域を動的に割り当てる
    rec_buffer = (uint8_t *)ps_malloc(record_size);
    if (rec_buffer == NULL) {
      Serial.printf("メモリ割り当てに失敗しました！\n");
      while(1) ;
    }
    Serial.printf("バッファ: %d バイト\n", ESP.getPsramSize() - ESP.getFreePsram());
  
    // 録音を開始
    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
    if (sample_size == 0) {
      Serial.printf("録音に失敗しました！\n");
    } else {
      Serial.printf("録音 %d バイト\n", sample_size);
    }
  
    // 音量を増加
    for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
      (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
    }
  
    // WAVファイルにデータを書き込む
    Serial.printf("ファイルに書き込み中...\n");
    if (file.write(rec_buffer, record_size) != record_size)
      Serial.printf("ファイル書き込みに失敗しました！\n");
  
    free(rec_buffer);
    rec_buffer = NULL;
    file.close();
    Serial.printf("録音が終了しました。\n");
    lv_label_set_text(ui_question, "識別中 ...");
    lv_timer_handler();
    listDir(SD, "/", 0);
  
    bool uploadStatus = false;
  
    if(isWIFIConnected){
      uploadStatus = uploadFile();
    }
  }
}

void chatgpt(){
  if(chatgptTask){
    Serial.println("ChatGPTタスク開始!!!");
    lv_label_set_text(ui_answer,"回答中 ...");
    lv_timer_handler();
    String result;
    if (chat_gpt.simple_message("gpt-3.5-turbo-0301", "user", response, result)) {
      Serial.println("===成功===");
      Serial.println(result);
      const char* chatgpt_A = result.c_str();
      lv_label_set_text(ui_answer, chatgpt_A);
    } else {
      Serial.println("===エラー===");
      Serial.println(result);
      lv_label_set_text(ui_answer, "エラー");
      lv_timer_handler();
    }
    recordTask = false;
    chatgptTask = false;
  }
}

//*****************************************RTOS******************************************//

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  Serial.print("接続を試みています: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi接続完了！");
  isWIFIConnected = true;
  // SSL証明書の検証を無視
  client.setInsecure();
  while(true){
    vTaskDelay(1000);
  }
}
```

</details>

例題プログラムをコンパイルしてアップロードする前に、状況に合わせていくつか変更する必要があります。

1. **ネットワークのWiFi名** - コードの[18行目](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L18)で、Google Cloud Servicesをデプロイしているホストと同じLAN内のネットワーク名に変更してください。
2. **ネットワークのWiFiパスワード** - コードの[19行目](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL19C40-L19C40)で、ネットワークに対応するパスワードに変更してください。
3. **ホストIPアドレス** - コードの[241行目](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL241C7-L241C7)で、ホストのIPアドレスに変更し、ポート番号は8888のままにしてください。
4. **OpenAI APIトークン** - ChatGPTインターフェースを呼び出すために、OpenAIトークンを準備し、コードの[33行目](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L33)に記入してください。初めてトークンを使用する場合は、[このWikiの内容](https://wiki.seeedstudio.com/ja/xiaoesp32c3-chatgpt/#submit-questions-via-the-built-in-web-page)を読んで取得方法を学んでください。

プログラムをアップロードして画面をクリックすると、録音タスクが開始されます。この時点で、マイクに向かって質問したい内容を話してください。認識結果が得られると、質問が画面の上半分に表示されます。その直後にChatGPTからの回答が得られ、画面の下半分に表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/22.jpg" style={{width:600, height:'auto'}}/></div>


## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>