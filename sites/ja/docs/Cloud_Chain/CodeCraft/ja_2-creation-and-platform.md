---
description: CodeCraft を使ってノーコードでハードウェアプロジェクトを構築します。ハードウェアを選択し、要件を記述し、プロジェクト例を使って書き込みとデバッグを行います。
title: CodeCraft クリエーション & プラットフォーム
keywords:
  - CodeCraft
  - Creation
sidebar_label: 2. クリエーション & プラットフォーム
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /codecraft/creation-and-platform
sidebar_position: 3
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/ja/codecraft/creation-and-platform/
createdAt: '2026-06-29'
updatedAt: '2026-08-04'
---

# CodeCraft クリエーション & プラットフォーム

## 2.1 ハンズオン開発：ノーコード実践

### 2.1.1 会話型ワークスペースを理解する

CodeCraft は Web ベースの会話型プログラミングプラットフォームです。ソフトウェアをダウンロードしたり、複雑なドライバをインストールしたりする必要はありません。Web ページ上でハードウェアを選択し、自然言語で要件を記述するだけで、ハードウェアプロジェクトを素早く構築できます。

![接続と書き込みのイラスト](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Connect-and-Burn-EN.png)

基本的なワークフローは次のとおりです：

1. [https://codecraft.seeed.cc](https://codecraft.seeed.cc/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=codecraft_home) にアクセスする
2. アカウントにログインする
3. 開発ボードを選択する
4. 実装したい機能を記述する
5. CodeCraft がプログラムを生成するのを待つ
6. コードを確認し、ハードウェアに書き込んでデバッグする

![書き込みとデバッグのイラスト](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Flashing-and-Debugging-EN.png)

---

### 2.1.2 ハードウェアの選択

ワークスペースでデバイスを選択します。推奨されるエントリーレベルのハードウェアは次のとおりです：

- Wio Terminal  
- XIAO ESP32S3 Sense  
- Grove Beginner Kit  

上記に加えて、CodeCraft は Seeed Studio のハードウェアエコシステム内の、より幅広いデバイスもサポートしています。プロジェクトのニーズに応じて、開発ボード、センサー、拡張モジュールを選択できます。ハードウェアを選択すると、CodeCraft はデバイスの性能に合わせて最適化されたコードとドキュメントを生成します。

![ハードウェア選択ページのイラスト](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/HardwareEco-EN.png)

---

## 2.2 プロジェクト例

このセクションでは、CodeCraft を使って異なるハードウェアプラットフォーム向けのプログラムを作成する方法を理解するための 3 つのプロジェクト例を紹介します。各例には、プロジェクトの目的、サンプルプロンプト、書き込み手順、および反復のガイドが含まれます。

---

### 2.2.1 ポモドーロタイマー

#### 2.2.1.1 プロジェクトの目的

この例では、Wio Terminal をベースにしたポモドーロタイマーの作成方法を説明します。プロジェクトでは、画面にリアルタイムのカウントダウンを表示し、ボタンを使って開始、一時停止、リセット、モード切り替えを制御します。

![Wio Terminal ポモドーロタイマーのイラスト](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Pomodoro-Timer-Display-EN.png)

---

#### 2.2.1.2 サンプルプロンプト

次のように入力できます：

> Wio Terminal 用のポモドーロタイマーのプログラムを作成してください。要件：
> 1. mm:ss 形式でリアルタイムのカウントダウンを表示する。
> 2. 集中時間を 25 分、休憩時間を 5 分に設定する。
> 3. ボタン A でタイマーの開始／一時停止を行う。
> 4. ボタン B でタイマーをリセットする。
> 5. ボタン C で集中モードと休憩モードを切り替える。
> 6. タイマーが終了したときにリマインダーメッセージを表示する。

<!--![Pomodoro Prompt Input Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/POMODORO-TIMER-PROMPT-EN.png)-->

---

#### 2.2.1.3 ハードウェアへの書き込み

1. Wio Terminal を USB ケーブルでコンピュータに接続します。  
2. 画面の指示に従って書き込みモードに入ります。  
3. CodeCraft で「Connect and Flash」ボタンをクリックします。  
4. アップロードが完了するまで待ちます。

![Wio Terminal 書き込みページのイラスト](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Pomodoro-Timer-Burning-EN.png)

---

#### 2.2.1.4 反復

プロジェクトを変更したい場合は、続けて CodeCraft に次のように伝えることができます：

> 集中時間を 45 分、休憩時間を 10 分に変更してください。

CodeCraft はあなたのリクエストに基づいてコードを更新し、新しいバージョンを生成します。

---

### 2.2.2 ESP32 LED 点滅

#### 2.2.2.1 プロジェクトの目的

この例では、ESP32 ベースの LED 点滅プロジェクトの作成方法を説明します。オンボード LED は 0.2 秒ごとに切り替わり、高速点滅を実現します。同時に、プログラムはシリアル出力を通じて LED の状態メッセージを送信します。LED が ON のときは “LED ON”、OFF のときは “LED OFF” を送信します。

<!--![ESP32 LED Blinking Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/图片路径待替换.png)-->

---

#### 2.2.2.2 サンプルプロンプト

次のように入力できます：

> ESP32 用の LED 点滅プログラムを作成してください。要件：
> 1. オンボード LED を使用する。
> 2. LED を 0.2 秒ごとに切り替える。
> 3. LED が ON のときは、シリアル経由で “LED ON” を送信する。
> 4. LED が OFF のときは、シリアル経由で “LED OFF” を送信する。
> 5. シリアルのボーレートを 115200 に設定する。
> 6. 継続的に動作させる。

<!--![ESP32 Prompt Input Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Prompt-EN.png)-->

---

#### 2.2.2.3 ハードウェアへの書き込み

1. ESP32 開発ボードを USB でコンピュータに接続します。  
2. CodeCraft で正しい ESP32 のシリアルポートを選択します。  
3. 「Connect and Flash」ボタンをクリックします。  
4. アップロードが完了するまで待ちます。  
5. シリアルモニタを開き、“LED ON” と “LED OFF” が交互に表示されることを確認します。

![ESP32 書き込みページのイラスト](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Burning-EN.png)

<!--![ESP32 Serial Monitor Output](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Debugging-EN.png)-->

---

#### 2.2.2.4 反復

プロジェクトを変更したい場合は、続けて CodeCraft に次のように伝えることができます：

> LED の点滅間隔を 1 秒に変更し、シリアル出力に点滅回数を表示してください。

CodeCraft はコードを更新し、新しいバージョンを生成します。

---

### 2.2.3 Grove Beginner Kit ボタン制御 LED

#### 2.2.3.1 プロジェクトの目的

この例では、Grove Beginner Kit を使用してボタン制御の LED プロジェクトを作成する方法を説明します。オンボードボタンで LED を制御し、ボタンが押されているときは LED が点灯し、離したときは消灯します。また、プログラムはシリアル出力を通じてボタンの状態をリアルタイムに出力します。押されているときは “Pressed”、離したときは “Released” を送信します。

<!--![Grove Beginner Kit Button Control Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/图片路径待替换.png)-->

---

#### 2.2.3.2 サンプルプロンプト

次のように入力できます：

> Grove Beginner Kit を使って「ボタン制御 LED スイッチ」を作成してください。要件：
> 1. オンボードボタンでオンボード LED を制御する。
> 2. ボタンが押されたときに LED を点灯する。
> 3. ボタンが離されたときに LED を消灯する。
> 4. シリアル経由でボタンの状態をリアルタイムに出力する。
> 5. ボタンが押されたときに “Pressed” を送信する。
> 6. ボタンが離されたときに “Released” を送信する。

<!--![Grove Beginner Kit Prompt Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Grove-Beginner-Kit-Prompt-EN.png)-->

---

#### 2.2.3.3 ハードウェアへの書き込み

書き込みの前に、ドライバが必要かどうかを確認してください：

- Windows では、まず Grove Beginner Kit のドライバをインストールする必要があります。そうしないと、デバイスやシリアルポートが認識されない場合があります。  
- macOS では、通常追加のドライバは不要です。

![Grove Beginner Kit Windows ドライバのヒント 1](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Beginner-Kit-driver-download-tips-EN.png)

![Grove Beginner Kit Windows ドライバのヒント 2](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/beginner-kit-driver-EN.png)

1. Grove Beginner Kit を USB でコンピュータに接続します。  
2. CodeCraft で正しいデバイスとシリアルポートを選択します。  
3. 「Connect and Flash」ボタンをクリックします。  
4. アップロードが完了するまで待ちます。  
5. オンボードボタンを押したり離したりして、LED の動作を観察します。  
6. シリアルモニタを開き、“Pressed” と “Released” が表示されることを確認します。  
   （注：コード内のボーレートがデバッガツールと一致していることを確認してください。）

![Grove Beginner Kit シリアルモニタ出力](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Beginner-Kit-Serial-Debugger-EN.png)

---

#### 2.2.3.4 反復

プロジェクトを変更したい場合は、続けて CodeCraft に次のように伝えることができます：

> ボタンが押されたときにブザーを 1 回鳴らし、シリアル出力にボタンが押された回数を表示してください。

CodeCraft はコードを更新し、新しいバージョンを生成します。

---

## 2.3 FAQ

**Q: なぜ書き込みに失敗するのですか？**  
A: 使用している USB ケーブルがデータ通信に対応しているか確認し、開発ボードが正しい書き込みモードになっていることを確認してください。

**Q: コンパイルエラーが発生した場合はどうすればよいですか？**  
A: ワークスペースのデバッグ情報を確認し、ボーレート、ハードウェアモデル、センサー構成が正しいことを確認してください。

**Q: さらに多くのプロジェクト例はどこで見つけられますか？**  
A: SenseCraft AI Application Gallery をご覧ください: [https://sensecraft.seeed.cc/ai/application](https://sensecraft.seeed.cc/ai/application?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_app_square)
