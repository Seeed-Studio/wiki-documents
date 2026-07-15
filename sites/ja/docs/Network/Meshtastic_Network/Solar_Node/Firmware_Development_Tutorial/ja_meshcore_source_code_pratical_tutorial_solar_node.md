---
description: MeshCore ファームウェアのソースコード環境をセットアップし、Solar Node をコンパイルしてファームウェアを書き込むための実践的なチュートリアルです。
title: MeshCore ソースコード開発チュートリアル
keywords:
  - MeshCore
  - ソースコード
  - PlatformIO
  - Solar Node
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_solar_node
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/ja/meshcore_source_code_pratical_tutorial_solar_node/
createdAt: '2026-03-27'
updatedAt: '2026-04-02'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 前提条件

### 必要なツール

始める前に、次のツールを準備してください：

1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. [Python 3](https://www.python.org/downloads/)
3. [VS Code](https://code.visualstudio.com/)

### PlatformIO のインストール

VS Code の拡張機能マーケットプレイスで `PlatformIO` を検索してインストールします。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

インストール後、左側のツールバーにアリの形をしたアイコンが表示されます。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### プロジェクトの準備

プロジェクトを配置したいフォルダを開きます。ターミナルでそのフォルダを開きます。[ここをクリック](https://github.com/meshcore-dev/MeshCore)してプロジェクトを git clone します。

VSCode を開き、PlatformIO アイコンをクリックして `select a folder` を選択します。クローンしたプロジェクトのフォルダを選択します。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png)

PlatformIO は必要な依存関係を自動的にインストールします。インストールが成功すると、`Project has been successfully updated` が表示されます。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png)

## ファームウェア開発

### 開発チュートリアル

対象ボード用の environment（環境）を探します。例として Solar node repeater を使います：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/BoardSelection.png)

その後、PlatformIO がボードに必要な依存関係を準備します。

コードを変更します。ボードに対応する `variant.h` ファイルを変更することを推奨します。

コーディングが完了したら、次のコマンドを実行してコードをコンパイルし、uf2 ファイルに変換します。

``` bash
pio run -e SenseCap_Solar_repeater
pio run -e SenseCap_Solar_repeater -t create_uf2
```

次に RST ボタンをダブルクリックして DFU モードに入ります。ポップアップしたディスクに uf2 ファイルをドラッグします。uf2 ファイルは `.pio\build\SenseCap_Solar_repeater` にあります。

### 例

#### ユーザー LED 制御

この例では、ユーザー LED の点滅ループを書く方法を示します。次のコードを `/examples/simple_repeater/main.cpp` にコピーします。

``` python
#endif
#ifdef LED_WHITE
static void updateUserLightBlink() {
  static unsigned long lastLedPhaseChangeAt = 0;
  static bool lightIsOn = true;

  const unsigned long now = millis();
  if ((unsigned long)(now - lastLedPhaseChangeAt) >= 5000) {
    lightIsOn = !lightIsOn;
    lastLedPhaseChangeAt = now;
  }

  digitalWrite(LED_WHITE, lightIsOn ? LED_STATE_ON : !LED_STATE_ON);
}
```

そして、ループ部分を次のように記述します：

``` python
#ifdef LED_WHITE
  updateUserLightBlink();
#endif
```

コンパイルして、生成された uf2 ファイルを Solar Node にフラッシュします。

## （上級）PR 提出

MeshCore プロジェクトへの貢献を検討していただきありがとうございます！どのように貢献できるでしょうか？
**1. バグ報告**

- Issues トラッカーを使用する
- わかりやすいタイトルを付ける（例："Crash when calling begin() with invalid pin"）
- 再現するための手順を正確に記述する
- 使用しているボード、IDE バージョン、ライブラリバージョン、および関連するコードスニペットを記載する
- 可能であれば、最小限かつ完全なサンプルスケッチを添付する

**2. 機能改善 / 新機能の提案**
- [Feature request] のプレフィックスを付けて issue を作成する
- ユースケースを説明する → どのような問題を解決できるのか？
- 理想的な API / 動作を記述する（コード例があると非常に役立ちます）
**3. コード変更の提出（Pull Request）**
### 小さな修正 
(誤字、コメント、サンプル、軽微なバグ修正)
→ 事前に issue を立てる必要はなく、そのまま pull request を作成してください

### 大きな変更 / 新機能
1. まず issue を立ててアイデアを議論する
2. メンテナからおおまかな 👍 をもらう
3. 'dev' ブランチからリポジトリを fork し、自分のブランチ（fix/xxx, feature/yyy, docs/whatever）を作成する
4. 変更を加える
5. 必要に応じてサンプルを更新または追加する
6. コード内のコメントを追加・更新する
7. Pull Request を送信する

### Pull Request ガイドライン
- 1 つの機能 / 修正につき 1 つの pull request（小さい PR の方がレビューしやすく、早く終わります）
- 説明的なコミットメッセージを使用する
  良い例: Fix I2C timeout handling on ESP32
  悪い例: update
- 関連する issue があれば参照する（Fixes #123, Closes #89 など）
- 公開 API を変更した場合は、README.md と library.properties を更新する
- 新機能には examples/ 内のサンプルスケッチを含めること
### コーディングスタイル
.clang-format に従い、既存の C++ スタイルを守ってください

- インデントはスペース 2 つ（タブは禁止）
- 関数や変数は camelCase
- クラス名は UpperCamelCase / PascalCase
- #define の定数はすべて ALL_CAPS
- 可能な範囲で 1 行をおおよそ 100 文字未満に保つ
(ただし、厳密なルールよりも既存コードとの一貫性を優先します)
