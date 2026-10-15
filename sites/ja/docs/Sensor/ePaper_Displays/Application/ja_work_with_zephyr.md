---
description: Seeed Studio reTerminal E シリーズ ePaper デバイスで Zephyr RTOS を使用し、reTerminal E1001、E1002、E1003 向け公式 Zephyr ボードドキュメントへのリンクをまとめています。
title: Zephyr を使う
keywords:
  - ePaper ディスプレイ
  - Zephyr
  - RTOS
  - reTerminal
  - ESP32-S3
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png
slug: /epaper_work_with_zephyr
sidebar_position: 11
last_update:
  date: 06/30/2026
  author: Citric
createdAt: '2026-06-30'
url: https://wiki.seeedstudio.com/ja/epaper_work_with_zephyr/
updatedAt: '2026-07-01'
---

# Zephyr を使う

[Zephyr](https://www.zephyrproject.org/) は、組み込みデバイス向けのオープンソースリアルタイムオペレーティングシステムです。ビルドシステム、デバイスツリーに基づくハードウェア記述、カーネルサービス、ドライバ、そしてアップストリームのボード定義を備えた、本番志向のファームウェアスタックが必要な場合に役立ちます。

Zephyr にはすでに **reTerminal E1001**、**reTerminal E1002**、**reTerminal E1003** 向けの公式ボードドキュメントが含まれています。この Wiki ページは Seeed ePaper のエントリーポイントです。ここから正しいボードターゲットを選び、その後は公式 Zephyr ドキュメントに従ってインストール、ビルド、書き込み、デバッグを行ってください。

## Zephyr を使うべきタイミング

次のような要件があるプロジェクトでは Zephyr を使用してください：

- 構造化された RTOS 開発ワークフローが必要な場合
- アップストリームのボードサポートと、長期的に保守しやすいファームウェアが必要な場合
- スレッド、タイマー、キュー、デバイスドライバなどのカーネル機能が必要な場合
- 複数の組み込みボード間で一貫したビルドおよび書き込みワークフローが必要な場合
- Zephyr API を通じて ESP32-S3 のペリフェラルへ直接アクセスしたい場合

目的が Home Assistant ダッシュボード、ノーコードのページデザイン、あるいは Arduino 風の描画 API である場合は、[Seeed ePaper Displays overview](/ja/seeed_epaper_displays) の中から対応するアプリケーションページから始めてください。Zephyr は、RTOS レベルでカスタムファームウェアを構築したい開発者に最も適しています。

## 対応デバイス

Zephyr 開発を始める前に、次の reTerminal E シリーズデバイスのいずれかを用意してください。

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:220, height:'auto'}}/></a></div></td>
      <td><div style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:220, height:'auto'}}/></a></div></td>
      <td><div style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:220, height:'auto'}}/></a></div></td>
    </tr>
    <tr>
      <td align="center">7.5" モノクロ ePaper<br/>800 x 480</td>
      <td align="center">7.3" フルカラー ePaper<br/>800 x 480</td>
      <td align="center">10.3" モノクロ ePaper<br/>1404 x 1872、タッチ対応</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
    <tr>
      <td align="center"><code>reterminal_e1001/esp32s3/procpu</code></td>
      <td align="center"><code>reterminal_e1002/esp32s3/procpu</code></td>
      <td align="center"><code>reterminal_e1003/esp32s3/procpu</code></td>
    </tr>
  </table>
</div>

以下のクイックスタート用コマンド例では `procpu` ターゲットを使用しています。デュアルコアの詳細、ハードウェア機能一覧、対応ランナー、デバッグオプションについては、お使いのデバイス向け公式ボードページを参照してください。

## 推奨リーディングパス

初めて Zephyr をセットアップする場合は、次の順序で進めてください：

1. [Zephyr Getting Started Guide](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) を開き、使用しているオペレーティングシステム向けに Zephyr ツールチェーン、Python 依存関係、west、SDK をインストールします。
2. [Official Zephyr Documentation](#公式-Zephyr-ドキュメント) セクションから、お使いのデバイス向け公式ボードページを開きます。
3. ボードページの概要を読み、Zephyr によって記述されているディスプレイサイズ、SoC、オンボードセンサ、キー、LED、RTC、およびバッテリ関連ハードウェアを確認します。
4. ボードページの **Supported Features** セクションを使用して、どのペリフェラルがすでに Zephyr で記述されているかを確認します。
5. ボードページの **Programming and Debugging** セクションを使用して、ビルド、書き込み、リセット、デバッグ用のコマンドを確認します。

:::tip
開発中は、公式 Zephyr ボードページを常に開いておきましょう。現在のボードターゲット、対応機能、ランナー、ビルドオプションに関する信頼できる情報源です。
:::

## クイックコマンドパターン

Zephyr ワークスペースの準備ができたら、お使いのデバイスに対応するボードターゲットで `hello_world` サンプルをビルドします。

<div class="table-center">
  <table align="center">
    <tr>
      <th>デバイス</th>
      <th>ビルドコマンド</th>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td><code>west build -b reterminal_e1001/esp32s3/procpu samples/hello_world</code></td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td><code>west build -b reterminal_e1002/esp32s3/procpu samples/hello_world</code></td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td><code>west build -b reterminal_e1003/esp32s3/procpu samples/hello_world</code></td>
    </tr>
  </table>
</div>

次に、ビルドしたイメージを書き込みます：

```shell
west flash
```

書き込み後もボードがダウンロードモードのままの場合は、Zephyr に記載されているリセットオプションを使用してください：

```shell
west flash --reset-type watchdog-reset
```

MCUboot、sysbuild、高速な書き込み、OpenOCD デバッグ、高度なランナーオプションについては、お使いのデバイス向け公式ボードページの **Programming and Debugging** セクションに従ってください。

## 公式 Zephyr ドキュメント

以下のリンクを、Zephyr 固有のセットアップやボード詳細に関する主なリファレンスとして使用してください：

<div class="table-center">
  <table align="center">
    <tr>
      <th>トピック</th>
      <th>次のような場合に使用</th>
      <th>リンク</th>
    </tr>
    <tr>
      <td>Zephyr Getting Started</td>
      <td>Zephyr、west、Python 依存関係、および Zephyr SDK をインストールします。</td>
      <td><a href="https://docs.zephyrproject.org/latest/develop/getting_started/index.html" target="_blank" rel="noopener noreferrer">Getting Started を開く</a></td>
    </tr>
    <tr>
      <td>Zephyr Boards</td>
      <td>Zephyr がサポートするすべてのボードを検索し、現在のターゲット名を確認します。</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/index.html" target="_blank" rel="noopener noreferrer">Boards index を開く</a></td>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td>reTerminal E1001 向けの Zephyr アプリケーションをビルド、書き込み、デバッグします。</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/seeed/reterminal_e1001/doc/index.html" target="_blank" rel="noopener noreferrer">E1001 ドキュメントを開く</a></td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td>reTerminal E1002 向けの Zephyr アプリケーションをビルド、書き込み、デバッグします。</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/seeed/reterminal_e1002/doc/index.html" target="_blank" rel="noopener noreferrer">E1002 ドキュメントを開く</a></td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td>reTerminal E1003 向けの Zephyr アプリケーションをビルド、書き込み、デバッグします。</td>
      <td><a href="https://docs.zephyrproject.org/latest/boards/seeed/reterminal_e1003/doc/index.html" target="_blank" rel="noopener noreferrer">E1003 ドキュメントを開く</a></td>
    </tr>
  </table>
</div>

## 関連する Seeed Wiki ページ

- [Seeed ePaper Displays overview](/ja/seeed_epaper_displays)
- [Getting Started with reTerminal E1001](/ja/getting_started_with_reterminal_e1001)
- [Getting Started with reTerminal E1002](/ja/getting_started_with_reterminal_e1002)
- [Getting Started with reTerminal E1003](/ja/getting_started_with_reterminal_e1003)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
