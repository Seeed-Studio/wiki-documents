---
description: MeshCore ファームウェアのソースコード環境をセットアップし、Solar Node をコンパイルしてファームウェアを書き込むための実践チュートリアルです。
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
updatedAt: '2026-07-31'
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

インストール後、通常は左側のツールバーにアリの形をしたアイコンが表示されます。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### プロジェクトの準備

プロジェクトを配置したいフォルダを開きます。ターミナルでそのフォルダを開きます。[ここをクリック](https://github.com/meshcore-dev/MeshCore)してプロジェクトを git clone します。

VSCode を開き、PlatformIO アイコンをクリックして `select a folder` を選択します。プロジェクトをクローンしたフォルダを選択します。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png)

PlatformIO は必要な依存関係を自動的にインストールします。インストールが成功すると、`Project has been successfully updated` と表示されます。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png)

## ファームウェア開発

### 開発チュートリアル

ターゲットボード用の environment を探します。Solar node repeater を例に説明します：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/BoardSelection.png)

その後、PlatformIO がボードに必要な依存関係を準備します。

コードを変更します。ボード用の `variant.h` ファイルを変更することを推奨します。

コーディングが完了したら、次のコマンドを実行してコードをコンパイルし、uf2 ファイルに変換します。

``` bash
pio run -e SenseCap_Solar_repeater
pio run -e SenseCap_Solar_repeater -t create_uf2
```

次に RST ボタンをダブルクリックして DFU モードに入ります。ポップアップしたディスクに uf2 ファイルをドラッグします。uf2 ファイルは `.pio\build\SenseCap_Solar_repeater` にあります。

### 例

#### ユーザーライト制御

この例では、ユーザーライトを点滅させるループの書き方を示します。次のコードを `/examples/simple_repeater/main.cpp` にコピーします。

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

そして、ループを書きます：

``` python
#ifdef LED_WHITE
  updateUserLightBlink();
#endif
```

コンパイルして、uf2 ファイルを Solar Node に書き込みます。

## （上級）PR 提出

MeshCore プロジェクトへの貢献をご検討いただきありがとうございます！どのように貢献できますか？
**1. バグ報告**

- Issues トラッカーを使用する
- 明確なタイトルを付ける（例："Crash when calling begin() with invalid pin"）
- 再現手順を正確に記述する
- 使用しているボード、IDE バージョン、ライブラリバージョン、および関連するコードスニペットを含める
- 可能であれば、最小限かつ完全なサンプルスケッチを添付する

**2. 機能改善 / 新機能の提案**
- [Feature request] というプレフィックスを付けて issue を作成する
- ユースケースを説明する → どのような問題を解決しますか？
- 理想的な API / 挙動を記述する（コード例があると非常に役立ちます）
**3. コード変更の提出（Pull Request）**
### 小さな修正 
(誤字、コメント、サンプル、小さなバグ修正)
→ 事前に issue を立てる必要はなく、そのまま pull request を作成してください

### 大きな変更 / 新機能
1. まず issue を作成してアイデアを議論する
2. メンテナーから大まかな 👍 をもらう
3. 'dev' ブランチからリポジトリを fork し、自分のブランチ（fix/xxx, feature/yyy, docs/whatever）を作成する
4. 変更を加える
5. 必要に応じてサンプルを更新または追加する
6. コード内のコメントを追加 / 更新する
7. Pull Request を送信する

### Pull Request ガイドライン
- 1 つの機能 / 修正につき 1 つの Pull Request（小さい PR の方がレビューしやすく、早くなります）
- 説明的なコミットメッセージを使用する
  良い例: Fix I2C timeout handling on ESP32
  悪い例: update
- 関連する issue があれば参照する（Fixes #123, Closes #89 など）
- 公開 API を変更した場合は、README.md と library.properties を更新する
- 新機能には examples/ 内のサンプルスケッチを含めること
### コーディングスタイル
.clang-format に従い、既存の C++ スタイルに従ってください

- インデントはスペース 2 つ（タブは使用しない）
- 関数および変数には camelCase を使用
- クラス名には UpperCamelCase / PascalCase を使用
- #define の定数は ALL_CAPS を使用
- 可能であれば 1 行はおおよそ 100 文字未満に保つ
(ただし、厳密なルールよりも既存コードとの一貫性を優先します)

## 技術サポート & 製品ディスカッション

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>