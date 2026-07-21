---
description: ReachyMini は、AI とロボティクス学習のための、コンパクトでオープンソースなデスクトップ型ヒューマノイドロボットを構築・制御するためのプラットフォームです。
title: ReachyMini 入門ガイド
keywords:
  - Lerobot
  - Huggingface
  - ReachyMini
  - Robotics
  - 3D Printing
  - Open Source
  - Humanoid Robot
  - Python
image: https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/Reachy-mini-wake-up-companion.webp
slug: /reachymini_getting_started
sku: null
translation:
  skip: [zh-CN]
last_update:
  date: 1/7/2026
  author: TienjuiWong
createdAt: '2026-01-07'
updatedAt: '2026-05-20'
url: https://wiki.seeedstudio.com/ja/reachymini_getting_started/
---

<div style={{maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'}}>
  <video
    width="100%"
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    style={{display: 'block'}}
    ref={(video) => { if (video) video.play().catch(() => {}); }}>
    <source src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/Reachy-mini-wake-up-companion.mp4" type="video/mp4"/>
    お使いのブラウザは video タグをサポートしていません。
  </video>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.pollen-robotics.com/reachy-mini/#order" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🤖</font></span></strong>
</a>
</div>

**Reachy Mini** は、人とロボットのインタラクションや創造的なカスタムアプリケーションを探求するために設計された、初のオープンソース・デスクトップロボットです。**Pollen Robotics** と **Hugging Face** によって共同開発されたこのコンパクトなヒューマノイドロボットは、プロフェッショナルレベルのロボティクス機能を、手頃な価格であなたのデスクにもたらします。

**Seeed Studio** によって最適化・製造された Reachy Mini は、表現力豊かな物理的インタラクションと最新の AI 機能を兼ね備えています。音声アシスタント、コンピュータビジョンアプリケーション、教育ツールなど、どのようなものを構築する場合でも、Reachy Mini は実世界の AI 実験のための完全なプラットフォームを提供します。

:::tip
このページで学べること

- Reachy Mini の主な機能とアーキテクチャ
- Lite 版と Full 版のハードウェア仕様と違い
- Reachy Mini の組み立てと設定方法
- Python SDK を使ったロボットの制御方法
- Hugging Face のモデルやアプリケーションとの連携方法
- コミュニティリソースやサポートの見つけ方

:::

## 主な機能と仕様

Reachy Mini は、コンパクトなデスクトップサイズの筐体に、驚くほど多くの機能を詰め込んでいます。

| 機能 | Reachy Mini Lite | Reachy Mini (Full) |
|:---|:---|:---|
| **価格** | $299 + 送料 | $449 + 送料 |
| **コンピュート** | 外部（Mac/Linux 対応） | Raspberry Pi 4 搭載 |
| **接続性** | 有線のみ | WiFi + Ethernet（USB-C アダプタ経由） |
| **電源** | 有線電源 | バッテリー + 有線動作 |
| **マイク** | 4 | 4 |
| **スピーカー** | 5W | 5W |
| **カメラ** | 広角 | 広角 |
| **加速度センサー** | なし | あり |
| **頭部の可動** | 6 自由度 | 6 自由度 |
| **胴体の回転** | あり | あり |
| **アニメーションアンテナ** | 2 | 2 |
| **高さ** | 28 cm (11") | 28 cm (11") |
| **重量** | 1.5 kg (3.3 lbs) | 1.5 kg (3.3 lbs) |

### 物理的寸法

- **高さ:** 28 cm / 11 インチ（スリープモード時は約 23 cm / 9 インチ）
- **幅:** 16 cm / 6.3 インチ
- **重量:** 1.5 kg / 3.3 lbs

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '24px 0'}}>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachy_mini_dimensions.png" alt="Reachy Mini Dimensions" />
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>物理的寸法</p>
  </div>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/dof_table.png" alt="Degrees of Freedom Table" />
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>自由度仕様</p>
  </div>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/degrees_of_freedom.png" alt="Degrees of Freedom Diagram" />
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>動作範囲</p>
  </div>
</div>

## 人とロボットのインタラクションのための設計

Reachy Mini は、表現力が高く魅力的な人とロボットのインタラクションのために、特別に設計されています。

### 表現力豊かな動き

- **6 自由度の頭部:** 自然なパン・チルト・ロール動作
- **胴体の全回転:** ダイナミックなポジショニングのための 360 度回転
- **アニメーションアンテナ:** 個性とフィードバックを与える 2 本の表現力豊かなアンテナ

### マルチモーダルセンシング

- **4 マイクアレイ:** 音声認識や音源定位のための高度な音声取得
- **広角カメラ:** 顔検出、物体認識などのコンピュータビジョン機能
- **5W スピーカー:** 音声合成や効果音のためのクリアな音声出力

### オープンかつ拡張可能

- **完全オープンソース:** ハードウェア設計、ソフトウェア SDK、シミュレーション環境を公開
- **Python SDK:** 直感的なプログラミングインターフェース（JavaScript と Scratch 対応は近日追加予定）
- **Hugging Face 連携:** 音声・ビジョンなど最先端の AI モデルへ直接アクセス可能

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '24px 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/wLftEz-QF1E"
      title="Reachy Mini デモ 1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/JvdBJZ-qR18"
      title="Reachy Mini デモ 2"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/vRh8G46Nc5k"
      title="Reachy Mini デモ 3"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/dMpLCGvE2A0"
      title="Reachy Mini デモ 4"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
</div>

## ハードウェアバージョン

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/plumber.png" alt="Reachy Mini Plumber" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

### Reachy Mini Lite ($299)

Lite 版は、外部コンピュートを好む開発者や、すでに好みの開発環境を持っているユーザーに最適です。

**最適な用途:**

- Mac/Linux システムを使用している開発者
- コンピュートリソースを最大限自分で制御したいユーザー
- 既存のコンピュータラボを備えた教育現場
- 既存インフラとの統合が必要なプロジェクト

**制限事項:**

- ホストコンピュータとの有線接続が必要
- WiFi 機能なし
- 加速度センサーなし
- コンセントから給電する必要あり

### Reachy Mini Full ($449)

Full 版にはオンボードコンピュートが搭載されており、完全な自律動作とワイヤレス動作が可能です。

**最適な用途:**

- スタンドアロンのロボットアプリケーション
- ワイヤレスでの研究開発
- 加速度センサーデータが必要なプロジェクト
- 持ち運び可能なデモや導入

**追加機能:**

- Raspberry Pi 4 オンボードコンピュータ
- WiFi 接続
- ワイヤレス動作用バッテリー
- 内蔵加速度センサー

## 組み立てガイド

Reachy Mini はキットとして販売されており、組み立てにはおよそ **2〜3 時間** かかります。組み立てプロセスは、あらゆるレベルのビルダーが取り組みやすいように設計されています。

### 組み立て用リソース

- **インタラクティブ組み立てガイド:** [ステップバイステップのオンライン手順](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)

:::warning[組み立てのコツ]

- 2〜3 時間を確保し、清潔で明るい作業スペースを用意する
- 小型ドライバーセットが必要です（キットに同梱）
- 最良の結果のために、オンラインガイドをステップごとに順番に従う
- 組み立てながら各サブシステム（カメラ、マイク、サーボ）をテストする

:::

## ソフトウェアのはじめ方

### 前提条件

お使いのバージョンに応じて、次のものが必要です。

**Reachy Mini Lite:**

- Mac または Linux コンピュータ（Windows 対応は近日追加予定）
- Python 3.8 以上
- USB 接続

**Reachy Mini Full:**

- WiFi ネットワークまたは Ethernet 接続
- ダッシュボードにアクセスするための Web ブラウザ

### クイックスタートインストール

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/cowboy.png" alt="Reachy Mini Cowboy" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

次のコマンドで Reachy Mini SDK をインストールします。

```bash
pip install reachy-mini
```

> **プロ向けヒント:** [uv](https://docs.astral.sh/uv/getting-started/installation/) をインストールすると、アプリのインストールが 10〜100 倍高速になります（自動検出され、失敗した場合は `pip` にフォールバックします）。

### Hello World の例

わずか数行のコードでロボットを制御できます。

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

with ReachyMini() as mini:
    # Look up and tilt head
    mini.goto_target(
        head=create_head_pose(z=10, roll=15, degrees=True, mm=True),
        duration=1.0
    )
```

## ダッシュボードによる制御

Web ベースのダッシュボードにより、コードを書くことなく Reachy Mini をテスト・制御できる直感的なインターフェースが提供されます。

**機能:**

- リアルタイムのモーター制御
- カメラ映像の表示
- マイクのテスト
- アプリ管理
- システム診断

ダッシュボードは[公式リポジトリ](https://github.com/pollen-robotics/reachy_mini)からダウンロードするか、Reachy Mini Full のローカルネットワークから直接アクセスできます。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_webui.png"/>
</div>

## Hugging Face アプリエコシステム

Reachy Mini には、Hugging Face Spaces によって提供される、すぐに使えるアプリケーションのエコシステムが拡大し続けています。これらのアプリは、ロボットのダッシュボードからワンクリックで直接インストールできます。

### 注目のアプリ

**Conversation アプリ**

- 大規模言語モデルによる自然言語インタラクション
- 音声認識と音声合成
- カスタマイズ可能な人格とナレッジベース

<div style={{float: 'left', marginRight: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/reachy-hand-tracking-app.jpg" alt="Reachy Mini Hand Tracking" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

**Hand Tracker**

- コンピュータビジョンを用いたリアルタイムの手のトラッキング
- ロボットがあなたの手の動きに追従
- デモやインタラクション実験に最適

**Radio**

- 音声操作によるラジオストリーミング
- 楽曲や局を自然言語でリクエスト
- オーディオ処理機能をデモンストレーション

**その他多数：**
[Hugging Face Spaces](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini)でアプリコレクション全体を参照してください

<div align="center">
    <img width="600" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/apps.png" alt="Reachy Mini Apps Ecosystem"/>
</div>

## カスタムアプリケーションの構築

### Python SDK

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/reachy-conversation-app.jpg" alt="Reachy Mini Conversation" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

Python SDK は、Reachy Mini のすべてのシステムを包括的に制御するための機能を提供します：

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Motor control
    mini.goto_target(head=pose, duration=1.0)

    # Camera access
    frame = mini.camera.get_frame()

    # Audio I/O
    mini.speaker.play_audio(audio_data)
    audio = mini.microphones.record(duration=5.0)

    # Accelerometer (Full version only)
    orientation = mini.imu.get_orientation()
```

### AI 連携

Reachy Mini は、Hugging Face の幅広いモデルエコシステムとシームレスに統合できます：

- **音声認識：** Whisper、Wav2Vec2
- **音声合成：** Bark、SpeechT5
- **ビジョン：** ViT、CLIP、YOLO
- **言語：** LLaMA、Mistral、GPT モデル
- **マルチモーダル：** GPT-4V、LLaVA

### アプリの公開

作成したアプリを世界中の Reachy Mini コミュニティと共有しましょう：

1. SDK を使ってアプリを構築する
2. Hugging Face Space を作成する
3. `reachy-mini` タグを追加する
4. 公開して、数百万の Hugging Face ユーザーと共有する

## シミュレーション開発

MuJoCo シミュレーション環境を使用して、ハードウェアなしで Reachy Mini アプリケーションのプロトタイピングと開発が行えます：

```bash
pip install reachy-mini[simulation]
```

コードをテストし、素早く反復し、準備ができたらハードウェアにデプロイします。

## 技術仕様の詳細

### モーターシステム

- **自由度：** 6-DOF の頭部動作
- **制御：** 高精度サーボモーター
- **安全性：** 電流制限と位置フィードバック
- **スムーズな動き：** 自然な動きを実現する補間軌道

### オーディオシステム

- **マイクアレイ：** 最適な音源定位のために配置された 4 つのマイク
- **ビームフォーミング：** ハードウェアレベルのオーディオ処理
- **SNR：** 明瞭な音声取得のための高い信号対雑音比
- **スピーカー：** 明瞭な周波数特性を持つ 5W 出力

### ビジョンシステム

- **センサー：** 広角カメラ
- **解像度：** HD ビデオキャプチャ
- **FPS：** 1 秒あたり 30 フレーム
- **視野角：** デスクトップでのインタラクションに最適化

### 電源要件

**Lite バージョン：**

- ホストコンピュータまたは AC アダプタから USB 経由で給電
- 典型的な消費電力：5V @ 2A

**Full バージョン：**

- ワイヤレス動作用の内蔵バッテリー
- USB-C 充電
- バッテリー駆動時間：使用状況に応じて 2〜4 時間

## プライバシーとセキュリティ

<div style={{float: 'left', marginRight: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/astronaut.png" alt="Reachy Mini Astronaut" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

Reachy Mini はプライバシーを重視して設計されています：

- **データ収集なし：** ロボットはデフォルトでは個人データを保存・送信・処理しません
- **ローカル処理：** すべての AI 処理はローカルで実行可能
- **ユーザーコントロール：** カメラとマイクの機能は完全にユーザーの管理下にあります
- **オープンソース：** ソフトウェアとハードウェアの完全な透明性

Reachy Mini は、Pollen Robotics や Hugging Face にいかなるデータも送信しません。明示的にクラウドサービスを設定しない限り、すべての処理はローカルで行われます。

## コミュニティとサポート

### コミュニティに参加する

- **Discord：** [Reachy Mini Discord に参加](https://discord.com/invite/2bAhWfXme9)
- **GitHub：** [問題の報告とコントリビュート](https://github.com/pollen-robotics/reachy_mini)
- **公式サイト：** [https://www.pollen-robotics.com/reachy-mini/](https://www.pollen-robotics.com/reachy-mini/)

### ドキュメントと学習リソース

- **[公式開発ガイド](https://github.com/pollen-robotics/reachy_mini/blob/develop/README.md)：** 公式ドキュメントと開発リソース一式
- **[SDK インストール](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/installation.md)：** 5 分でコンピュータをセットアップ
- **[クイックスタートガイド](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/quickstart.md)：** Reachy Mini で最初の挙動を実行
- **[Python SDK](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/python-sdk.md)：** 動く・見る・話す・聞くを学ぶ
- **[AI 連携](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/integration.md)：** LLM を接続し、アプリを構築して Hugging Face に公開
- **[コアコンセプト](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/core-concept.md)：** アーキテクチャ、座標系、安全限界
- **[セカンダリ開発](https://github.com/Seeed-Projects/reachy-mini-starter)：** カスタムアプリケーション開発のための Seeed スターターガイド
- **[組み立てガイド](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)：** ステップバイステップの組み立て手順
- 🤗[**アプリをコミュニティと共有しましょう**](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)

## 次のステップは？

### ロードマップ

Reachy Mini プラットフォームは継続的に進化しています：

- **JavaScript 対応：** Web ベース開発向けに近日対応予定
- **Scratch 連携：** 初心者向けのブロックベースプログラミング
- **追加アプリ：** コミュニティアプリケーションのエコシステム拡大
- **ハードウェア拡張：** モジュラーアクセサリとアップグレード
- **強化された AI モデル：** オンボード処理向けに最適化されたモデル

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます。お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
