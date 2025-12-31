---
description: このページでは、XIAO Debug MateのUARTモニター機能の使用方法について説明します。
title: UARTモニター
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/main_uart.webp
slug: /ja/xiao_debug_mate_serial
sidebar_position: 3
last_update:
  date: 10/22/2025
  author: Citric
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/main_uart.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

XIAO Debug Mate UARTモニターのドキュメントへようこそ。

このページでは、Debug Mateをシリアルデータモニタリングに使用する方法について明確なガイダンスを提供します。ハードウェアセットアップの手順、推奨ソフトウェアツール、および開発・デバッグシナリオでUARTモニタリング機能を最大限に活用するための関連概念の説明をご覧いただけます。

## シリアルモニターを使用する前に理解すべき概念

詳細に入る前に、シリアル通信を扱う上で不可欠な2つの基本概念を明確にしましょう。

### シリアル通信

シリアル通信は、単一の通信チャネルを通じて、一度に1ビットずつ順次データを送信する方法です。これは、車が一車線の道路を一台ずつ走行するようなものと考えてください。マイクロコントローラーの世界では、これは最も一般的に**UART**（Universal Asynchronous Receiver-Transmitter）と呼ばれるプロトコルを使用して実装されます。これは、開発者がデバイスからデバッグメッセージ、センサー読み取り値、ステータス更新を取得する主要な方法です。

### RX/TX

これらは、シリアル通信を実現する2つのピンです：

*   **TX（Transmit）：** これは「送信」ピンです。マイクロコントローラーはこのピンを使用してデータを送信します。
*   **RX（Receive）：** これは「受信」ピンです。マイクロコントローラーはこのピンを使用して受信データを待機します。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/uart_communica_logic.gif" style={{width:800, height:'auto'}}/></div> -->

export const UartDiagram = () => (
  <div
    style={{
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: "#f4f4f9",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      maxWidth: "800px",
      margin: "20px auto",
      textAlign: "center"
    }}
  >
    <h3 style={{ color: "#333", marginBottom: "10px" }}>UART通信ロジック</h3>
    <div style={{ color: "#666", fontSize: "0.9em", marginBottom: "20px" }}>
      黄金律：<strong>TX</strong>（送信）は<strong>RX</strong>（受信）に接続する必要があります
    </div>

    <svg viewBox="0 0 600 350" style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#3498db" />
        </marker>
        <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#e67e22" />
        </marker>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Device A */}
      <g transform="translate(50, 50)">
        <rect x="0" y="0" width="120" height="200" rx="10" ry="10" fill="#ffffff" stroke="#333" strokeWidth="2" filter="url(#dropShadow)" />
        <text x="60" y="30" textAnchor="middle" fontWeight="bold" fill="#333">デバイス A</text>
        <text x="60" y="50" textAnchor="middle" fontSize="12" fill="#777">(MCU/PC)</text>

        {/* A Pins */}
        <g transform="translate(120, 80)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="-15" y="4" textAnchor="end" fontSize="14" fontWeight="bold" fill="#333">TX</text>
          <text x="-15" y="18" textAnchor="end" fontSize="10" fill="#999">送信</text>
        </g>
        <g transform="translate(120, 120)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="-15" y="4" textAnchor="end" fontSize="14" fontWeight="bold" fill="#333">RX</text>
          <text x="-15" y="18" textAnchor="end" fontSize="10" fill="#999">受信</text>
        </g>
        <g transform="translate(120, 170)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="-15" y="5" textAnchor="end" fontSize="14" fontWeight="bold" fill="#333">GND</text>
        </g>
      </g>

      {/* Device B */}
      <g transform="translate(430, 50)">
        <rect x="0" y="0" width="120" height="200" rx="10" ry="10" fill="#ffffff" stroke="#333" strokeWidth="2" filter="url(#dropShadow)" />
        <text x="60" y="30" textAnchor="middle" fontWeight="bold" fill="#333">デバイス B</text>
        <text x="60" y="50" textAnchor="middle" fontSize="12" fill="#777">(センサー)</text>

        {/* B Pins */}
        <g transform="translate(0, 80)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="15" y="4" textAnchor="start" fontSize="14" fontWeight="bold" fill="#333">TX</text>
          <text x="15" y="18" textAnchor="start" fontSize="10" fill="#999">送信</text>
        </g>
        <g transform="translate(0, 120)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="15" y="4" textAnchor="start" fontSize="14" fontWeight="bold" fill="#333">RX</text>
          <text x="15" y="18" textAnchor="start" fontSize="10" fill="#999">受信</text>
        </g>
        <g transform="translate(0, 170)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="15" y="5" textAnchor="start" fontSize="14" fontWeight="bold" fill="#333">GND</text>
        </g>
      </g>

      {/* Connections */}
      <path id="lineAtoB" d="M 176 130 C 250 130, 350 170, 424 170" fill="none" stroke="#e67e22" strokeWidth="3" markerEnd="url(#arrowhead-orange)" />
      <path id="lineBtoA" d="M 424 130 C 350 130, 250 170, 176 170" fill="none" stroke="#3498db" strokeWidth="3" markerEnd="url(#arrowhead-blue)" />
      <path d="M 176 220 L 424 220" fill="none" stroke="#333" strokeWidth="3" strokeDasharray="5,5" />

      {/* Animated Packets */}
      <circle r="5" fill="#e67e22">
        <animateMotion repeatCount="indefinite" dur="1.5s" keyPoints="0;1" keyTimes="0;1">
          <mpath href="#lineAtoB" />
        </animateMotion>
      </circle>
      <circle r="5" fill="#3498db">
        <animateMotion repeatCount="indefinite" dur="1.5s" begin="0.75s" keyPoints="0;1" keyTimes="0;1">
          <mpath href="#lineBtoA" />
        </animateMotion>
      </circle>

      {/* Labels */}
      <text x="300" y="110" textAnchor="middle" fontSize="12" fill="#e67e22" fontWeight="bold">データフロー (TX &rarr; RX)</text>
      <text x="300" y="200" textAnchor="middle" fontSize="12" fill="#3498db" fontWeight="bold">データフロー (RX &larr; TX)</text>
      <text x="300" y="240" textAnchor="middle" fontSize="12" fill="#333">共通グランド (GND)</text>
    </svg>

    <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "15px", fontSize: "0.85em", color: "#555" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", marginRight: "5px", background: "#e67e22" }}></div>
        <span>オレンジ：A から B</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", marginRight: "5px", background: "#3498db" }}></div>
        <span>青：B から A</span>
      </div>
    </div>
  </div>
);

<UartDiagram />

覚えておくべき最も重要なルールは、デバイス間でこれらのピンを**クロス接続**する必要があることです。一方のデバイスのTXピンは他方のRXピンに接続し、その逆も同様です。これは会話のようなものです：一人の口（TX）が他の人の耳（RX）に話しかけるのです。

## 入門ガイド

XIAO Debug Mateは、内蔵LCDスクリーンで直接、またはコンピューターにデータを転送することで、2つの方法でシリアルデータをモニターできます。このガイドでは両方の方法を説明します。

### ソフトウェア準備（PCモニタリング用）

コンピューターでシリアルデータを表示する場合は、「シリアルターミナル」または「シリアルモニター」アプリケーションが必要です。XIAO Debug MateはPC上で標準のCOMポートとして表示されます。以下は人気のあるソフトウェア選択肢です：

*   **PlatformIO Serial Monitor：** VS CodeでPlatformIOを使用している場合は、ステータスバーの "Serial Monitor" ボタンをクリックするだけです。
*   **Arduino IDE Serial Monitor：** Arduino IDEに組み込まれたクラシックでシンプルなモニター。
*   **PuTTY：** Windows用の軽量で非常に人気のあるターミナルエミュレーター。
*   **CoolTerm：** Windows、macOS、Linux用のユーザーフレンドリーで機能豊富なシリアルターミナル。
*   **minicom / screen：** LinuxおよびmacOSユーザー向けの強力なコマンドラインベースのツール。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/23.png" style={{width:1000, height:'auto'}}/></div>

### ハードウェア準備

XIAO Debug Mateは、シリアルモニタリング用にターゲットデバイスを接続する3つの柔軟な方法を提供します。

#### XIAOボード用（プラグアンドプレイ）

これはXIAOボードをモニタリングする最も簡単な方法です。Debug Mateは、デフォルトでXIAOの`Serial1`ポート（`D6`と`D7`）を監視するように設計されています。

1.  XIAOボードをXIAO Debug Mate前面のメスヘッダーに直接差し込むだけです。
2.  接続は自動的に行われます。追加のワイヤーは必要ありません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

#### UART Grove デバイス用

専用の Grove コネクタにより、UART ベースの Grove モジュールとのクリーンで安全な接続が可能です。

1.  Grove UART デバイス（例：Grove GPS や Grove MP3 V4）を用意します。
2.  標準の Grove ケーブルを使用して、XIAO Debug Mate の右側にある Grove ポートに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/24.jpg" style={{width:800, height:'auto'}}/></div>

#### その他の UART デバイス用

:::danger 電源ピン接続の注意事項
2つの開発ボードの3.3V電源ピンを接続する必要があるかどうかは、他のデバイスがDebug Mateから電源供給されているかどうかによります。他のデバイスが独自のUSB接続で電源供給されている場合は、デバイスとDebug Mateの3.3Vピンを接続しないでください。そうするとデバイスが損傷する可能性があります。
:::

他の開発ボードやカスタム回路など、アクセス可能な TX および RX ピンを持つ任意のデバイスを監視できます。

これを行う主な方法は2つあります：

*   **オプション1：メインヘッダーの使用：** DuPont ワイヤを使用して、デバイスの TX および RX ピンを XIAO Debug Mate の雌ヘッダーに接続します。クロス接続を忘れずに：デバイス TX -> Debug Mate RX（ヘッダーのピン D7）、デバイス RX -> Debug Mate TX（ヘッダーのピン D6）。

*   **オプション2：Grove ポートの使用：** **Grove to DuPont 変換ケーブル**を使用します。Grove コネクタを Debug Mate に差し込み、個別の DuPont 端子をデバイスの TX、RX、VCC、GND ピンに接続します。これはより安定で信頼性の高い接続方法です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/25.jpg" style={{width:800, height:'auto'}}/></div>

以下の図は Grove インターフェースのピン定義を示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/39.png" style={{width:400, height:'auto'}}/></div>

:::caution 重要な注意事項
デバイスの TX ピンが Debug Mate の受信ピンに接続され、デバイスの RX ピンが送信ピンに接続されていることを常に確認してください。
:::

多用途な設計により、XIAO Debug Mate では**最大2つの UART デバイスを同時に接続**できます：1つは XIAO ソケット経由、もう1つは Grove ポート経由です。その後、画面上のメニューを使用して各デバイスの監視を切り替えることができます。

この強力な機能により、**複数のシリアルデバイスを含む複雑なシステムをデバッグする際の面倒な再配線プロセスが不要になります**。

## シリアルモニターの操作

XIAO Debug Mate は、デバイス上と PC ベースの両方の監視に使用できる多用途なシリアルツールを備えています。このガイドでは、ナビゲーションと機能について説明します。


<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/xiao_debug_mate/uart.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 基本的なナビゲーションとコントロール

機能を探索する前に、インターフェースのナビゲーション方法を理解することが重要です。すべての操作はスクロールホイールとボタンを使用して実行されます。

1.  **メニューへの入り方：** メイン画面から、**スクロールホイール**を使用して**シリアルツールアイコン**（左下）をハイライトします。**ボタンを押して**シリアルメニューに入ります。

2.  **基本コントロール：**
    *   **スクロールホイール：** カーソルの移動や主要モード間の切り替えに使用します。
    *   **ボタン短押し：** 選択の確認や設定カーソルの有効化に使用します。
    *   **ボタン長押し：** メニューの終了や戻るために使用します。

主な操作状態は2つあります：

*   **カーソル非アクティブ：** この状態では、スクロールホイールを回すと主要機能間（例：パススルーモード vs モニターモード）を切り替えます。
*   **カーソルアクティブ：** 短押し後、画面上部にカーソルが表示されます。この時、スクロールホイールでカーソルを移動し、変更する設定を選択できます。

#### クイックナビゲーションガイド

| アクション | 機能 |
| :--- | :--- |
| **スクロールホイール（カーソルなし）** | パススルーモードとモニターモード間の切り替え。 |
| **ボタン短押し** | ソース/ボーレート用の選択カーソルを有効化。 |
| **ボタン長押し** | 前のメニューに戻る。 |

### 2つの監視モード

基本コントロールを理解したら、2つの主要な動作モード間を簡単に切り替えることができます。**スクロールホイール**を回すだけで（カーソルが非アクティブの間）切り替えられます。

#### 1. パススルーモード（PC へ）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/26.jpg" style={{width:600, height:'auto'}}/></div>

これはデフォルトモードで、選択されたソースからのすべてのシリアルデータを PC ベースのシリアルターミナルで表示するために、コンピューターに直接転送するように設計されています。

*   **画面表示：** 画面にはデータ自体ではなく、ステータス情報が表示されます。
    *   **左上：** アクティブなシリアルソース（例：`XIAO`）。
    *   **右上：** 現在のボーレート（例：`9600`）。
    *   **中央：** `RX` および `TX` インジケーター（Debug Mate の視点から）が PC との間のデータフローを示すためにアニメーションします。

#### 2. モニターモード（LCD 上）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/27.jpg" style={{width:600, height:'auto'}}/></div>

このモードは、シリアルデータを Debug Mate の LCD 画面に直接キャプチャして表示します。このモードではデータは PC に転送**されません**。

*   **画面表示：** 画面は2つのウィンドウに分割されてデータトラフィックを表示します。
    *   `RX ウィンドウ`：**XIAO/Grove ソケットから受信した**データを表示します。
    *   `TX ウィンドウ`：**PC から受信した**データを表示します。

:::caution
Debug Mate は両方のソースからのデータを同時に表示することはできません。設定メニューを使用してアクティブなソースを選択する必要があります。
:::

:::note
この文書の**RX**と**TX**のラベルは常に**Debug Mate の視点から**のものです：  
- **RX**は**Debug Mate が受信した**データを示します（つまり、Debug Mate *に入ってくる*シリアル信号）。  
- **TX**は**Debug Mate が送信した**データを示します（つまり、Debug Mate が*送信している*信号）。

これは、**XIAO や Grove デバイスから Debug Mate に送信されたデータは RX ウィンドウに表示される**ことを意味し、どのポートがソースとして選択されているかは関係ありません。RX ウィンドウに表示される内容は、設定で選択したソース（XIAO/Grove）によって決まります。

**TX**は常に**PC から発信された**データを指します — コンピューターのシリアルターミナルからメッセージを入力して送信すると、それらは Debug Mate の TX を介して現在選択されているソース（XIAO または Grove）に送信されます。  

- 「パススルー」と「モニター」の両方のモードで、PC は仮想 COM ポート経由で Debug Mate にデータを送信でき、Debug Mate はこれらのメッセージを選択したターゲットシリアルデバイスに渡します。  
- したがって、**TX ウィンドウ**に表示されるのは、現在の監視モードに関係なく、常に PC が Debug Mate を通じて送信しているものです。
:::

### ソースとボーレートの設定

データソースやボーレートを変更するには、まず設定カーソルを有効にする必要があります。

1.  **カーソルの有効化：** どちらのモードからでも、**ボタンを一度押します**。画面上部にカーソルが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/28.jpg" style={{width:600, height:'auto'}}/></div>

2.  **設定の選択：** **ボタン**を使用してカーソルをソース（`XIAO`/`Grove`）とボーレート間で移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/29.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
ソースを切り替えた後、新しいソースからのコンテンツがすぐに表示されない場合があります。これは、プリンターが前の入力ソースのデータの印刷が完了するのを待ってから、新しいソースからの情報を受信する必要があるためです。
:::

3.  **メニューに入る：** ボーレートオプションについて、希望する設定がハイライトされた状態で、**ボタンを押して**設定メニューを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/30.jpg" style={{width:600, height:'auto'}}/></div>

4.  **値の変更：** **スクロールホイール**を使用してボーレートを選択し、**ボタンを押して**確認します。

#### ボーレートメニューと視覚的インジケーター

ボーレートメニューでは、9つの一般的なレート（4800から921600）から選択できます。独特な視覚的演出として、このメニューに入ると**デバイス背面の36個のLEDマトリックス**も有効になり、選択されたレートを反映して光のパターンが変化します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/31.jpg" style={{width:800, height:'auto'}}/></div>

### 重要な概念と制限事項

*   **ブリッジではなくデバッガー：** Debug Mate は診断ツールであり、通信ブリッジではありません。XIAO ポートから Grove ポートへのデータの自動転送は行いません。
*   **固定シリアルパラメーター：** コアシリアルパラメーター（8-N-1）はファームウェアで固定されています。上級ユーザーはオープンソースコードを変更してこれらを変更できます。
*   **単一ソース監視：** 一度に1つのソース（XIAO または Grove）のみをアクティブに監視できます。

## 特別な謝辞

LED マトリックスのデザインインスピレーションを提供してくださった**啊猫啊狗晒太阳 (Ah Mao Ah Gou Shai Tai Yang)**に特別な感謝を申し上げます。Debug Mate のオンボード LED インジケーターのデザインは、彼らの優れたオープンソースプロジェクトを参考にしています。オリジナルのデザインは非常に創造的で実用的です。

オリジナルのデザインをご覧になりたい場合は、以下のリンクからデモンストレーション動画と作者のホームページをご確認ください。

*   [オリジナルデザインデモンストレーション動画](https://www.bilibili.com/video/BV1Sc411273Y/)
*   [作者の Bilibili ホームページ](https://space.bilibili.com/1155738723)

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
