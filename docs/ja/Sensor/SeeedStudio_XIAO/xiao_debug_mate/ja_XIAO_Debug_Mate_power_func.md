---
description: リッチコンテンツを含むドキュメントページを作成します。
title: パワーメーター
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_debug_mate_power
sidebar_position: 4
last_update:
  date: 10/22/2025
  author: Citric
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/32.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/ja/xiao_debug_mate_power" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

XIAO Debug Mate のパワーメーター機能は、デバイスを電圧、電流、消費電力を測定する多機能で高精度なツールに変身させます。直感的なグラフィカルインターフェースとリアルタイムデータ更新により、開発のあらゆる段階で XIAO ボードや他の接続されたハードウェアの電力消費を簡単に監視できます。超低消費電力動作の最適化や負荷下でのシステム安定性の検証など、パワーメーターは指先で明確で正確な洞察を提供します。このセクションでは、主要な機能とこの機能を最大限に活用する方法について説明します。

## パワーメーター使用のヒント

正確な測定を確保し、デバイスを保護するために、電力解析機能を使用する前にこれらの重要なヒントを確認してください。

### 安全な入力電圧

XIAO Debug Mate 自体は標準的な **5V/1A USB 電源** で給電する必要があります。電力不足、過電力、または非準拠の充電器を使用すると、動作が不安定になったり、デバイスを損傷するリスクがあります。

<svg viewBox="0 0 800 520" width="100%" height="auto" style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px', fontFamily: 'sans-serif' }}>
  <defs>
    <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#2f9e44" />
    </marker>
    <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#e03131" />
    </marker>
    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
    </filter>
  </defs>

  {/* Title */}
  <text x="400" y="40" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#333333">電源要件</text>

  {/* Central Device: XIAO Debug Mate - Moved down to align with taller boxes */}
  <g transform="translate(300, 175)">
    <rect x="0" y="0" width="200" height="140" rx="10" fill="#343a40" filter="url(#dropShadow)" />
    <rect x="10" y="10" width="180" height="120" rx="5" fill="#495057" />
    <text x="100" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ffffff">XIAO Debug Mate</text>
    <text x="100" y="75" textAnchor="middle" fontSize="12" fill="#adb5bd">USB-C 入力</text>

    {/* Port Graphic */}
    <rect x="70" y="90" width="60" height="20" rx="4" fill="#212529" stroke="#868e96" strokeWidth="2" />
    <line x1="80" y1="100" x2="120" y2="100" stroke="#868e96" strokeWidth="2" />
  </g>

  {/* Left Side: The CORRECT Way - Increased Height */}
  <g transform="translate(50, 120)">
    {/* Height increased from 200 to 250 */}
    <rect x="0" y="0" width="200" height="250" rx="8" fill="#ebfbee" stroke="#2f9e44" strokeWidth="2" strokeDasharray="5,5" />

    {/* Header */}
    <rect x="0" y="0" width="200" height="40" rx="8" fill="#2f9e44" />
    <rect x="0" y="20" width="200" height="20" fill="#2f9e44" />
    <text x="100" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ffffff">推奨</text>

    {/* Icon */}
    <circle cx="100" cy="90" r="25" fill="#ffffff" stroke="#2f9e44" strokeWidth="2" />
    <path d="M90 90 L100 90 L100 80 M100 90 L110 90" stroke="#2f9e44" strokeWidth="3" strokeLinecap="round" />

    <text x="100" y="145" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#2b8a3e">5V / 1A</text>
    <text x="100" y="170" textAnchor="middle" fontSize="14" fill="#2b8a3e">標準電源</text>

    {/* Result Tag - Moved down */}
    <g transform="translate(40, 210)">
      <rect x="0" y="0" width="120" height="24" rx="12" fill="#40c057" />
      <text x="60" y="17" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">安定動作</text>
    </g>
  </g>

  {/* Right Side: The WRONG Way - Increased Height to fix overflow */}
  <g transform="translate(550, 120)">
    {/* Height increased from 200 to 250 */}
    <rect x="0" y="0" width="200" height="250" rx="8" fill="#fff5f5" stroke="#e03131" strokeWidth="2" strokeDasharray="5,5" />

    {/* Header */}
    <rect x="0" y="0" width="200" height="40" rx="8" fill="#e03131" />
    <rect x="0" y="20" width="200" height="20" fill="#e03131" />
    <text x="100" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ffffff">避ける</text>

    {/* Warning Icons */}
    <circle cx="100" cy="90" r="25" fill="#ffffff" stroke="#e03131" strokeWidth="2" />
    <text x="100" y="98" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#e03131">!</text>

    {/* Bad Specs - Spaced out vertically */}
    <text x="100" y="140" textAnchor="middle" fontSize="14" fill="#c92a2a" fontWeight="bold">過電力 (&gt;5V)</text>
    <text x="100" y="165" textAnchor="middle" fontSize="14" fill="#c92a2a" fontWeight="bold">電力不足</text>
    <text x="100" y="190" textAnchor="middle" fontSize="14" fill="#c92a2a" fontWeight="bold">非準拠</text>

    {/* Result Tag - Moved down */}
    <g transform="translate(40, 215)">
      <rect x="0" y="0" width="120" height="24" rx="12" fill="#fa5252" />
      <text x="60" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">損傷リスク</text>
    </g>
  </g>

  {/* Connecting Arrows - Adjusted Y to new center (245) */}
  {/* Green Arrow */}
  <path d="M250 245 L290 245" stroke="#2f9e44" strokeWidth="4" markerEnd="url(#arrowGreen)" />

  {/* Red Arrow with X */}
  <path d="M550 245 L510 245" stroke="#e03131" strokeWidth="4" markerEnd="url(#arrowRed)" />
  <line x1="525" y1="235" x2="535" y2="255" stroke="#e03131" strokeWidth="3" />
  <line x1="535" y1="235" x2="525" y2="255" stroke="#e03131" strokeWidth="3" />

  {/* Bottom Note - Widened Box to fix overflow */}
  <g transform="translate(100, 430)">
    {/* Width increased from 400 to 600 */}
    <rect x="0" y="0" width="600" height="50" rx="4" fill="#f8f9fa" stroke="#dee2e6" strokeWidth="1" />
    <circle cx="30" cy="25" r="10" fill="#1c7ed6" />
    <text x="30" y="31" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">i</text>
    <text x="50" y="20" fontSize="12" fill="#495057" fontWeight="bold">ヒント：</text>
    {/* Text alignment adjusted for wider box */}
    <text x="50" y="35" fontSize="12" fill="#495057">標準的な PC の USB ポートまたは高品質な 5V/1A ウォールアダプターを使用してください。</text>
  </g>

</svg>

### 安全な測定範囲

パワーメーターは **1µA から 1A** の電流を測定するように設計された高精度機器です。10µA から 1A の範囲で **±1%** の精度を維持します。1A の制限を超えると、測定回路が損傷する可能性があります。

### 消費電力の差異：メーター vs バッテリー

Debug Mate で XIAO ボードの消費電力を測定する場合、測定は 5V 電源ラインから行われます。この電力は XIAO の内部電圧レギュレーター（LDO）を通って、チップ用の 3.3V を生成します。このレギュレーター自体も少量の電力を消費します。

<svg viewBox="0 0 800 450" width="100%" height="auto" style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px', fontFamily: 'sans-serif' }}>
  <defs>
    <marker id="arrowFlow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#495057" />
    </marker>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
    </filter>
  </defs>

  {/* Title */}
  <text x="400" y="40" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#333333">電力測定ロジック：レギュレーター前</text>

  {/* --- SECTION 1: The Measurement Device (Debug Mate) --- */}
  {/* Moved Left to x=20 to create space */}
  <g transform="translate(20, 100)">
    {/* Device Body */}
    <rect x="0" y="0" width="160" height="200" rx="10" fill="#343a40" filter="url(#shadow)" />
    <text x="80" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#ffffff">Debug Mate</text>

    {/* Screen */}
    <rect x="20" y="50" width="120" height="60" rx="4" fill="#212529" stroke="#495057" strokeWidth="2" />
    <text x="80" y="80" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#40c057" fontFamily="monospace">50.0 mA</text>
    <text x="80" y="100" textAnchor="middle" fontSize="10" fill="#868e96">表示値</text>

    {/* Probe Line Out - Extended length to cross the gap */}
    <line x1="160" y1="140" x2="280" y2="140" stroke="#fa5252" strokeWidth="6" />

    {/* 5V Label - Centered in the new gap */}
    <text x="220" y="130" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fa5252">5V ライン</text>

    {/* Measurement Point Indicator - Centered in the new gap */}
    <circle cx="220" cy="140" r="6" fill="#fa5252" stroke="#fff" strokeWidth="2" />
    <text x="220" y="165" textAnchor="middle" fontSize="11" fill="#fa5252" fontWeight="bold">測定ポイント</text>
  </g>

  {/* --- SECTION 2: The XIAO Board --- */}
  {/* Moved Right to x=300 to fix overlap */}
  <g transform="translate(300, 80)">
    {/* PCB Outline */}
    <rect x="0" y="0" width="480" height="240" rx="15" fill="#ebfbee" stroke="#2f9e44" strokeWidth="3" />
    <text x="20" y="30" fontSize="16" fontWeight="bold" fill="#2b8a3e">XIAO ボード</text>

    {/* Component: LDO Regulator */}
    <g transform="translate(50, 90)">
      <rect x="0" y="0" width="100" height="100" rx="4" fill="#e9ecef" stroke="#adb5bd" strokeWidth="2" />
      <text x="50" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#495057">LDO</text>
      <text x="50" y="50" textAnchor="middle" fontSize="10" fill="#868e96">Voltage Regulator</text>

      {/* Heat/Loss visualization */}
      <path d="M30 70 Q40 60 50 70 T70 70" stroke="#fd7e14" strokeWidth="2" fill="none" />
      <path d="M30 80 Q40 70 50 80 T70 80" stroke="#fd7e14" strokeWidth="2" fill="none" />
      <text x="50" y="120" textAnchor="middle" fontSize="11" fill="#fd7e14" fontWeight="bold">Self-Consumption</text>
      <text x="50" y="135" textAnchor="middle" fontSize="10" fill="#fd7e14">(~5mA Loss)</text>
    </g>

    {/* Component: MCU (The Chip) */}
    <g transform="translate(280, 60)">
      <rect x="0" y="0" width="140" height="140" rx="8" fill="#343a40" filter="url(#shadow)" />
      <rect x="10" y="10" width="120" height="120" rx="4" fill="#212529" />
      <text x="70" y="70" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ced4da">MCU / Chip</text>
      <text x="70" y="90" textAnchor="middle" fontSize="12" fill="#adb5bd">Actual Load</text>
      <text x="70" y="110" textAnchor="middle" fontSize="14" fill="#40c057" fontWeight="bold">~45 mA</text>
    </g>

    {/* Internal Connections */}
    {/* 5V Input to LDO - Dashed line inside board */}
    <line x1="0" y1="140" x2="50" y2="140" stroke="#fa5252" strokeWidth="4" strokeDasharray="4,4" opacity="0.6" />

    {/* 3.3V LDO to MCU */}
    <line x1="150" y1="140" x2="280" y2="140" stroke="#fab005" strokeWidth="6" markerEnd="url(#arrowFlow)" />
    {/* Moved text up slightly to avoid overlap with line */}
    <text x="215" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fab005">3.3V Line</text>
  </g>

  {/* --- SECTION 3: The Equation / Explanation --- */}
  <g transform="translate(100, 360)">
    <rect x="0" y="0" width="600" height="70" rx="8" fill="#f1f3f5" stroke="#dee2e6" strokeWidth="1" />

    {/* Equation Parts */}
    <text x="300" y="25" textAnchor="middle" fontSize="14" fill="#495057" fontWeight="bold">Why is the reading higher?</text>

    <g transform="translate(60, 45)">
      <text x="0" y="0" fontSize="16" fontWeight="bold" fill="#343a40">Displayed Value</text>
      <text x="140" y="0" fontSize="16" fontWeight="bold" fill="#868e96">=</text>
      <text x="170" y="0" fontSize="16" fontWeight="bold" fill="#2b8a3e">Chip Consumption</text>
      <text x="330" y="0" fontSize="16" fontWeight="bold" fill="#868e96">+</text>
      <text x="360" y="0" fontSize="16" fontWeight="bold" fill="#fd7e14">Regulator Overhead</text>
    </g>
  </g>

</svg>

したがって、Debug Mateに表示される電力値は、XIAOが3.3Vバッテリーで直接電源供給された場合の実際の消費電力よりもわずかに**高く**なります。これは「レギュレータ前」で測定される任意の測定において正常で予想される動作です。

### 校正と検証

すべてのXIAO Debug Mateは、工場で電圧と電流について個別に校正されています。この校正データは、メモリ（EEPROM）の書き込み保護セクションに保存され、ファームウェアアップデートの影響を受けません。

:::danger
この校正データを手動で消去または変更しようとしないでください。そうすると工場校正が破壊され、電力測定機能が永続的に無効になる可能性があります。
:::

## 入門ガイド

電力メーターにアクセスするには、メインメニューの**電力メーターアイコン**（右下）に移動し、**ボタンを押します**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/33.jpg" style={{width:600, height:'auto'}}/></div>

### 入門ガイド：3つの電力メーターUIの理解

電力メーター機能は、開発プロセスの特定の段階に合わせて調整された3つの異なるユーザーインターフェース（UI）を提供します。これらのビューを瞬時に切り替えて、高精度スナップショット、低電力読み取り、または長期分析など、必要なデータを取得できます。

**ナビゲーション：**
*   **UIの切り替え：** 単純に**スクロールホイールを回す**ことで、3つの電力メーター画面を循環できます。カーソルはありません。ページ全体が変わります。
*   **データのリセット：** UI 3の統計は、**ボタンを長押し**してメインメニューに戻るときのみクリアされます。

#### UI 1：高精度ダッシュボード

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/10.jpg" style={{width:600, height:'auto'}}/></div>

これはデフォルトビューで、即座の高解像度フィードバック用に設計されています。

*   **表示内容：**
    *   `U`：瞬時電圧（V）小数点以下4桁まで。
    *   `I`：瞬時電流（A）小数点以下4桁まで。
    *   `P`：瞬時電力（W）小数点以下4桁まで。

*   **目的と使用例：**
    このUIは**リアルタイムデバッグと基本的な健全性チェック**のためのものです。その高精度により、電力消費のわずかな変動も確認できます。この画面を使用して以下を迅速に検証します：
    *   デバイスがアイドル時に予想される電流量を消費しているか。
    *   周辺機器（画面やセンサーなど）をオンにした際の即座の電力への影響。
    *   5V電源の安定性。


#### UI 2：低電力用マルチユニットビュー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/11.jpg" style={{width:600, height:'auto'}}/></div>

このビューは、低電力プロジェクトの直感的な観察用に最適化されています。

*   **表示内容：**
    *   `U`：瞬時電圧（V）。
    *   `I`：瞬時電流、自動的にスケールされ**アンペア（A）**、**ミリアンペア（mA）**、**マイクロアンペア（µA）**で表示。
    *   `P`：瞬時電力、自動的にスケールされ**ワット（W）**と**ミリワット（mW）**で表示。

*   **目的と使用例：**
    バッテリー駆動またはエネルギー効率の良いデバイスを開発する際、電流はマイクロアンペア範囲まで下がることがあります。このUIは**手動での単位変換の必要性を排除し**、デバイスの電力消費の大きさを瞬時に理解できます。以下に最適です：
    *   デバイスが正常にディープスリープモードに入ったことの確認（電流はµA範囲であるべき）。
    *   単位を手動で計算することなく、異なるコード最適化の電力消費を比較。

#### UI 3：統計分析とバッテリー推定

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/12.jpg" style={{width:600, height:'auto'}}/></div>

このビューは、長期テストと最終製品検証用に設計されています。

*   **表示内容：**
    *   `Min/Max`：セッション中に記録された最小および最大**電流（A）**と**電力（W）**。
    *   `Total`：累積**エネルギー（Wh）**と**電荷（Ah）**。
    *   `Time`：測定セッション開始からの経過時間。

*   **動作：**
    タイマーとデータ蓄積は、この画面に最初に入ったときに**自動的に開始**されます。UI 1またはUI 2への切り替えはデータを**リセットしません**。長期テストの実行中にリアルタイム値を確認できます。データは、メインメニューに戻るときのみクリアされます。

*   **目的と使用例：**
    このUIは**デプロイ前検証**に不可欠です。バッテリーにコミットする前に、デバイスのワークロードをシミュレートし、この画面を使用して以下を行えます：
    *   ピーク電流（`Max A`）を特定し、バッテリーと電力回路が負荷を処理できることを確認。
    *   総消費電荷（`Total Ah`）を使用して、特定の容量（mAh）のバッテリーから期待できるバッテリー寿命を正確に推定。

#### **バッテリー寿命推定に関する重要な注意**

バッテリー計算にUI 3を使用する際の重要な詳細にご注意ください：

XIAO Debug Mateは、XIAOへの**5V電源入力**から消費される電力を測定します。この5V供給は、XIAOのオンボード電源管理IC（PMIC/LDO）によって3.3Vに変換されます。この変換プロセスは100%効率的ではなく、PMIC自体がわずかな電力を消費します。

XIAOをLi-Poバッテリーで直接電源供給する場合、通常は背面の3.3Vバッテリーパッドに接続し、5V-3.3V変換回路をバイパスします。

したがって、Debug Mateで測定される電力消費は、3.3Vバッテリーから実際に消費される電力よりも**わずかに高く**なります。測定値は、バッテリー寿命計算のための優れた安全な**上限推定値**です。

### XIAOの電力消費測定

これは最も簡単な使用例です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

1.  XIAOボードをXIAO Debug Mateの前面のメスヘッダーに直接差し込みます。
2.  Debug MateはXIAOに自動的に電源を供給し、その総電力消費の測定を開始します。

### XIAOとその周辺機器の測定

XIAOボードと接続されたセンサーやモジュールの合計電力消費を測定できます。

周辺機器（例：センサー）をXIAOソケット周辺のヘッダーのI/Oピンに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/35.jpg" style={{width:800, height:'auto'}}/></div>

:::danger 重要
1. 測定に含めるには、周辺機器はヘッダーの**5Vピン**から電源供給される**必要があります**。3.3Vピンから消費される電力は、XIAOの内部レギュレータによって供給され、Debug Mateでは測定**されません**。

2. 電力測定のために周辺機器をDebug MateのGroveポートに接続**しないでください**。その電力ラインはXIAO測定回路とは別です。
:::

### 他のマイクロコントローラーの測定

電力メーターはXIAO シリーズに限定されません。5Vで電源供給できる任意の開発ボードを測定できます。

1.  デュポンワイヤーを使用して、ターゲットボードをXIAO Debug Mateのメスヘッダーの**5VとGNDピン**に接続します。
2.  ターゲットシステム全体（マイクロコントローラーボードと測定したいすべての周辺機器）が、Debug Mateからのこの5V接続を通じて独占的に電源供給されることを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/34.jpg" style={{width:800, height:'auto'}}/></div>

**例：Seeeduino V4.2の測定**

1.  Seeeduino V4.2の**5Vピン**をDebug Mateのヘッダーの**5Vピン**に接続します。
2.  Seeeduino V4.2の**GNDピン**をDebug Mateのヘッダーの**GNDピン**に接続します。
3.  Debug Mateの電源を入れます。これでSeeeduinoボードに5Vを供給し、その総消費電流を測定します。

## トラブルシューティング

### Q1：Groveインターフェースの消費電力も統計に含まれますか？

電力測定のためにDebug MateのGroveポートに周辺機器を接続**しないでください**。その電力線はXIAO測定回路とは別になっています。

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
