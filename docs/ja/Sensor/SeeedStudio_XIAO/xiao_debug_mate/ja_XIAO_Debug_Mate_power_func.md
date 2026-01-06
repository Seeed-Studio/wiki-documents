---
description: 正確な電圧、電流、電力監視のためのXIAO Debug MateのPower Meter機能の使用方法を学びます。
title: Power Meter
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/32.webp
slug: /ja/xiao_debug_mate_power
sidebar_position: 4
last_update:
  date: 10/22/2025
  author: Citric
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/32.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

XIAO Debug MateのPower Meter機能は、デバイスを電圧、電流、消費電力を測定するための多機能で高精度なツールに変換します。直感的なグラフィカルインターフェースとリアルタイムデータ更新により、開発のすべての段階でXIAOボードや他の接続されたハードウェアの電力消費を簡単に監視できます。超低消費電力動作の最適化や負荷下でのシステム安定性の検証など、Power Meterは指先で明確で正確な洞察を提供します。このセクションでは、主要な機能とこの機能を最大限に活用する方法について説明します。

## Power Meter使用のヒント

正確な測定を確保し、デバイスを保護するために、電力解析機能を使用する前にこれらの重要なヒントを確認してください。

### 安全な入力電圧

XIAO Debug Mate自体は標準的な**5V/1A USB電源**で給電する必要があります。電力不足、過電力、または非準拠の充電器を使用すると、動作が不安定になったり、デバイスを損傷するリスクがあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/37.png" style={{width:1000, height:'auto'}}/></div>

### 安全な測定範囲

パワーメーターは**1µAから1A**の電流を測定するように設計された高精度機器です。10µAから1Aの範囲で**±1%**の精度を維持します。1Aの制限を超えると、測定回路が損傷する可能性があります。

### 消費電力の差異：メーター対バッテリー

Debug MateでXIAOボードの消費電力を測定する場合、測定は5V電源ラインから行われます。この電力はXIAOの内部電圧レギュレーター（LDO）を通ってチップ用の3.3Vを生成します。このレギュレーター自体も少量の電力を消費します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/38.png" style={{width:1000, height:'auto'}}/></div>

したがって、Debug Mateに表示される電力値は、XIAOが3.3Vバッテリーで直接給電された場合の実際の消費電力よりもわずかに**高く**なります。これは「レギュレーター前」で行われる測定の正常で予想される動作です。

### 校正と検証

すべてのXIAO Debug Mateは工場で電圧と電流について個別に校正されています。この校正データはメモリ（EEPROM）の書き込み保護セクションに保存され、ファームウェア更新の影響を受けません。

:::danger
この校正データを手動で消去または変更しようとしないでください。そうすると工場校正が破壊され、電力測定機能が永続的に無効になる可能性があります。
:::

## 入門ガイド

パワーメーターにアクセスするには、メインメニューの**Power Meterアイコン**（右下）に移動し、**ボタンを押します**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/33.jpg" style={{width:600, height:'auto'}}/></div>

### 入門ガイド：3つのPower Meter UIの理解

Power Meter機能は、開発プロセスの特定の段階に合わせて調整された3つの異なるユーザーインターフェース（UI）を提供します。これらのビューを瞬時に切り替えて、高精度スナップショット、低消費電力読み取り、または長期分析など、必要なデータを取得できます。

**ナビゲーション：**
*   **UIの切り替え：** 単純に**スクロールホイールを回す**だけで3つのパワーメーター画面を循環できます。カーソルはありません；ページ全体が変更されます。
*   **データのリセット：** UI 3の統計は、**ボタンを長押し**してメインメニューに戻るときのみクリアされます。

#### UI 1：高精度ダッシュボード

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/10.jpg" style={{width:600, height:'auto'}}/></div>

これは即座の高解像度フィードバック用に設計されたデフォルトビューです。

*   **表示内容：**
    *   `U`：瞬時電圧（V）小数点以下4桁まで。
    *   `I`：瞬時電流（A）小数点以下4桁まで。
    *   `P`：瞬時電力（W）小数点以下4桁まで。

*   **目的と使用例：**
    このUIは**リアルタイムデバッグと基本的な健全性チェック**のためのものです。その高精度により、電力消費のわずかな変動も確認できます。この画面を使用して以下を迅速に検証します：
    *   デバイスがアイドル時に予想される電流量を消費しているか。
    *   周辺機器（画面やセンサーなど）をオンにした際の即座の電力への影響。
    *   5V電源の安定性。


#### UI 2：低消費電力用マルチユニットビュー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/11.jpg" style={{width:600, height:'auto'}}/></div>

このビューは低消費電力プロジェクトの直感的な観察用に最適化されています。

*   **表示内容：**
    *   `U`：瞬時電圧（V）。
    *   `I`：瞬時電流、自動的にスケールされ**アンペア（A）**、**ミリアンペア（mA）**、**マイクロアンペア（µA）**で表示。
    *   `P`：瞬時電力、自動的にスケールされ**ワット（W）**と**ミリワット（mW）**で表示。

*   **目的と使用例：**
    バッテリー駆動またはエネルギー効率的なデバイスを開発する際、電流はマイクロアンペア範囲まで低下することがあります。このUIは**手動での単位変換の必要性を排除し**、デバイスの消費電力の大きさを瞬時に理解できます。以下に最適です：
    *   デバイスが正常にディープスリープモードに入ったことの確認（電流はµA範囲であるべき）。
    *   単位を手動で計算することなく、異なるコード最適化の電力消費を比較。

#### UI 3：統計分析とバッテリー推定

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/12.jpg" style={{width:600, height:'auto'}}/></div>

このビューは長期テストと最終製品検証用に設計されています。

*   **表示内容：**
    *   `Min/Max`：セッション中に記録された最小および最大**電流（A）**と**電力（W）**。
    *   `Total`：累積**エネルギー（Wh）**と**電荷（Ah）**。
    *   `Time`：測定セッション開始からの経過時間。

*   **動作：**
    タイマーとデータ蓄積は、この画面に最初に入ったときに**自動的に開始**されます。UI 1またはUI 2への切り替えはデータを**リセットしません**。長期テストの実行中にリアルタイム値を確認できます。データはメインメニューに戻るときのみクリアされます。

*   **目的と使用例：**
    このUIは**デプロイ前検証**に不可欠です。バッテリーにコミットする前に、デバイスのワークロードをシミュレートし、この画面を使用して以下を行えます：
    *   ピーク電流（`Max A`）を特定し、バッテリーと電力回路が負荷を処理できることを確認。
    *   総消費電荷（`Total Ah`）を使用して、特定の容量（mAh）のバッテリーから期待できるバッテリー寿命を正確に推定。

#### **バッテリー寿命推定に関する重要な注意**

バッテリー計算にUI 3を使用する際の重要な詳細に注意してください：

XIAO Debug MateはXIAOへの**5V電力入力**から消費される電力を測定します。この5V供給はXIAOのオンボード電力管理IC（PMIC/LDO）によって3.3Vに変換されます。この変換プロセスは100%効率的ではなく、PMIC自体も少量の電力を消費します。

XIAOをLi-Poバッテリーで直接給電する場合、通常は背面の3.3Vバッテリーパッドに接続し、5Vから3.3Vへの変換回路をバイパスします。

したがって、Debug Mateで測定される消費電力は、3.3Vバッテリーから実際に消費される電力よりも**わずかに高く**なります。測定値はバッテリー寿命計算のための優れた安全な**上限推定値**です。

### XIAOの消費電力測定

これは最も簡単な使用例です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

1.  XIAOボードをXIAO Debug Mateの前面のメスヘッダーに直接差し込みます。
2.  Debug MateはXIAOに自動的に電力を供給し、総消費電力の測定を開始します。

### XIAOとその周辺機器の測定

XIAOボードと接続されたセンサーやモジュールの合計消費電力を測定できます。

周辺機器（例：センサー）をXIAOソケット周辺のヘッダーのI/Oピンに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/35.jpg" style={{width:800, height:'auto'}}/></div>

:::danger 重要
1. 測定に含めるには、周辺機器はヘッダーの**5Vピン**から電力を供給される**必要があります**。3.3Vピンから消費される電力はXIAOの内部レギュレーターによって供給され、Debug Mateでは測定**されません**。

2. 電力測定のために周辺機器をDebug MateのGroveポートに接続**しないでください**。その電力ラインはXIAO測定回路とは別です。
:::

### 他のマイクロコントローラーの測定

パワーメーターはXIAO系列に限定されません。5Vで給電できる任意の開発ボードを測定できます。

1.  デュポンワイヤーを使用して、ターゲットボードをXIAO Debug Mateのメスヘッダーの**5VとGNDピン**に接続します。
2.  ターゲットシステム全体（マイクロコントローラーボードと測定したいすべての周辺機器）がDebug Mateからのこの5V接続を通してのみ給電されることを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/34.jpg" style={{width:800, height:'auto'}}/></div>

**例：Seeeduino V4.2の測定**

1.  Seeeduino V4.2の**5Vピン**をDebug Mateのヘッダーの**5Vピン**に接続します。
2.  Seeeduino V4.2の**GNDピン**をDebug Mateのヘッダーの**GNDピン**に接続します。
3.  Debug Mateの電源を入れます。これでSeeeduinoボードに5Vを供給し、その総消費電流を測定します。

## トラブルシューティング

### Q1: Groveインターフェースの消費電力も統計に含まれますか？

電力測定のためにペリフェラルをDebug MateのGroveポートに接続**しないでください**。その電力線はXIAO測定回路とは別になっています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
