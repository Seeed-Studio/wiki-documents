---
title: Stream Deck を使用して reCamera Gimbal を制御する
description: この Wiki では、Stream Deck を使用して reCamera Gimbal を制御する方法を説明します。
keywords:
  - reCamera Gimbal
  - センシング制御
slug: /using_stream_deck_to_control_recamera_gimbal
sku: 100029708
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_stream-deck-demo_show.gif
sidebar_position: 1
last_update:
  date: 2026-05-22
  author: Sizhao zhou
createdAt: '2026-05-22'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/ja/reCamera/reCamera_Basic/application/using_stream_deck_to_control_recamera_gimbal/
---

## はじめに

この Wiki では、Stream Deck を使用して reCamera Gimbal を制御する方法を説明します。Stream Deck から HTTP プロトコル経由でコマンドを送信することで、reCamera Gimbal を指定した角度に回転させたり、補助光をオン/オフしたり、オーディオを再生したり、その他の操作を行うことができます。

---

## デモ

Stream Deck 上のダイヤルを回して reCamera Gimbal の X 軸を制御し、左右に回転させ、ダイヤルを押して LED ライトを切り替えます。

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_stream-deck-demo_show.gif" alt="demo" />
</div>

---

## ハードウェアの準備

- reCamera Gimbal 1 台
- Stream Deck 1 台

<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tr>
      <table align="center">
        <tr>
          <th>reCamera Gimbal</th>
        </tr>
        <tr>
          <td>
            <div style={{textAlign:'center'}}>
              <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
              <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
              </a>
            </div>
          </td>
        </tr>
      </table>
    </tr>
  </table>
</div>

## reCamera の設定

ブラウザで reCamera Gimbal の IP アドレスを入力して Dashboard にログインします。次に、Stream Deck から送信されるコマンドを受信するための HTTP 通信ノードを設定します。

### 1. ダイヤルイベント処理（reCamera Webhook）

#### ヨー軸処理（Process Yaw）

- **ノードタイプ**: `http in` -> `function` -> `set-motor-angle`

- **ロジック概要**:
  - デフォルト角度は `180°` に設定されています。
  - 時計回り（cw）または反時計回り（ccw）のアクションを受信すると、角度を **10° ステップ** で増減します。
  - リセットトリガーを受信すると、角度をゼロにリセットします。
  - 安全な動作範囲を **0° ～ 345°** に制限します。

#### ピッチ軸処理（Process Pitch）

- **ノードタイプ**: `http in` -> `function` -> `set-motor-angle`

- **ロジック概要**:
  - デフォルト角度は `90°` に設定されています。
  - 時計回り（cw）または反時計回り（ccw）のアクションを受信すると、角度を **10° ステップ** で増減します。
  - リセットトリガーを受信すると、角度をゼロにリセットします。
  - 安全な動作範囲を **0° ～ 180°** に制限します。

#### デジタルズーム処理（Process Zoom）

- **ノードタイプ**: `http in` -> `function` -> `ui-template`

- **ロジック概要**:
  - デフォルトのズーム倍率は `1.0` です。
  - 回転中に **0.1 ステップ** でズームレベルを調整します（cw で増加 / ccw で減少）、押してリセットすると `1.0` に戻します。
  - ズーム範囲を **0.5x ～ 5.0x** に制限します。
  - 最終的なズーム係数をフロントエンドの Vue テンプレートに渡し、Dashboard 上の SVG キャンバスを CSS の `scale()` で動的に拡大縮小します。

#### 最終的な Node-RED 設定ノードの構成図は以下のとおりです:

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_stream-deck-node_red-config.png" alt="node-red" />
</div>

### 2. 基本ボタンイベント処理

| ボタン機能 | ノードタイプリンク | ロジック概要説明 |
| :--- | :--- | :--- |
| **LED 切り替え** | `http in` -> `function` -> `exec` | 内部の `ledState` 変数を保持し、**0 と 1 の間でトグル** します。状態が 1 のときは Linux コマンドライン経由で `brightness` に書き込んで白色 LED を点灯させ、状態が 0 のときは消灯します。 |
| **音声録音** | `http in` -> `exec` | システムレベルの `arecord` ツールを呼び出し、サンプリングレート 16000Hz、モノラル形式で **5 秒間音声を録音** し、`/home/recamera/test.wav` にローカル保存します。 |
| **音声再生** | `http in` -> `exec` | システムレベルの `aplay` ツールを呼び出し、新しく録音した `test.wav` 音声ファイルを直接 **再生** します。 |

---

## Stream Deck の設定

Stream Deck でアクションがトリガーされるたびに新しいブラウザウィンドウを開くことなくスムーズに操作できるようにするため、組み込みの **"System -> Website"** アクションを使用し、バックグラウンドでのサイレント実行を有効にします。

> **⚠️ 前提条件**: お使いのコンピュータからデバイスの IP アドレス `192.168.31.198` に対して ping が正常に実行できることを確認してください（実際のデバイスの IP アドレスに置き換えてください）。

### 1. ダイヤルエリアの設定（Stream Deck）

Stream Deck ソフトウェアのダイヤルセクションで、各ダイヤルに対して **3 つの個別の "System -> Website"** アクションをドラッグし、次のように設定します:

#### ダイヤル 1: ヨー軸制御（Yaw）

- **時計回り回転（ダイヤル操作）:**
  - **URL:** `http://192.168.31.198:1880/deck/yaw?action=cw`
  - **設定:** `GET request in background` にチェックを入れます

- **反時計回り回転（ダイヤル操作）:**
  - **URL:** `http://192.168.31.198:1880/deck/yaw?action=ccw`
  - **設定:** `GET request in background` にチェックを入れます
- **押下（プレス操作）:**
  - **URL:** `http://192.168.31.198:1880/deck/yaw?action=reset`
  - **設定:** `GET request in background` にチェックを入れます

#### ダイヤル 2: ピッチ軸制御（Pitch）

- **時計回り回転:**
  - **URL:** `http://192.168.31.198:1880/deck/pitch?action=cw`
  - **設定:** `GET request in background` にチェックを入れます

- **反時計回り回転:**
  - **URL:** `http://192.168.31.198:1880/deck/pitch?action=ccw`
  - **設定:** `GET request in background` にチェックを入れます
- **押下:**
  - **URL:** `http://192.168.31.198:1880/deck/pitch?action=reset`
  - **設定:** `GET request in background` にチェックを入れます

#### ダイヤル 3: デジタルズーム（Zoom）
>
> **注**: ズーム機構は、Dashboard 内の SVG 表示ボックスの比率を CSS を使用して制御します。

- **時計回り回転:**
  - **URL:** `http://192.168.31.198:1880/deck/zoom?action=cw`
  - **設定:** `GET request in background` にチェックを入れます
- **反時計回り回転:**
  - **URL:** `http://192.168.31.198:1880/deck/zoom?action=ccw`
  - **設定:** `GET request in background` にチェックを入れます
- **押下（デフォルトに戻す）:**
  - **URL:** `http://192.168.31.198:1880/deck/zoom?action=reset`
  - **設定:** `GET request in background` にチェックを入れます

### 2. ボタンエリアの設定（LED、録音、再生）

Stream Deck の基本ボタンセクションで、**3 つの "System -> Website"** アクションをドラッグし、次のように設定します:

| ボタン機能 | リクエスト URL | 必要な設定 |
| :--- | :--- | :--- |
| **LED 切り替え** | `http://192.168.31.198:1880/deck/led` | `GET request in background` にチェックを入れます |
| **音声録音** *(押して 5 秒間録音)* | `http://192.168.31.198:1880/deck/record` | `GET request in background` にチェックを入れます |
| **音声再生** | `http://192.168.31.198:1880/deck/play` | `GET request in background` にチェックを入れます |

---

## Node-RED フローを reCamera にデプロイする

まず、このガイドに従って reCamera を最新バージョン 0.2.4 にアップグレードしてください: [reCamera OS アップグレードチュートリアル](https://wiki.seeedstudio.com/cn/recamera_os_version_control/)。すでにバージョン 0.2.4 が動作している場合は、この手順をスキップできます。その後、右上の **"Deploy"** ボタンをクリックして、新しく作成したノードをボードにデプロイします。

---

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。特定のカスタマイズ目標に関するガイダンスが必要な場合や、ワークフローをさらに拡張したい場合は、いつでもお気軽にお問い合わせください。弊社は、製品をできるだけスムーズにご利用いただけるよう、複数のサポートオプションを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
