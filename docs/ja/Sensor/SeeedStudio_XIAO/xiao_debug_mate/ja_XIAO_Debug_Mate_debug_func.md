---
description: リッチコンテンツを含むドキュメントページを作成します。
title: DAPLink デバッガ
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_debug_mate_debug
sidebar_position: 2
last_update:
  date: 10/22/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/15.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/ja/xiao_debug_mate_serial" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

XIAO Debug Mate の DAPLink 機能の公式ユーザーマニュアルへようこそ。この包括的なガイドは、初心者から上級者まで、プロフェッショナルなデバッグタスクにおいて XIAO Debug Mate の潜在能力を最大限に引き出すことを目的として設計されています。ここでは、DAPLink デバッガの接続、設定、操作方法を学び、必要不可欠なソフトウェアツールを理解し、幅広い XIAO シリーズ開発ボードでスムーズで生産的なデバッグ体験を確保するためのベストプラクティスに従うことができます。複雑なファームウェアのトラブルシューティングや開発ワークフローの効率化など、このドキュメントは明確なステップバイステップの手順、ヒント、詳細な技術説明を提供し、プロジェクトを最初から最後までサポートします。


## デバッガの概念についての説明

XIAO Debug Mate の DAPLink 機能を効果的に使用するには、デバッグを可能にするために連携して動作する主要なソフトウェアコンポーネントとプロトコルを理解することが役立ちます。以下は各概念の詳細と、それらがどのように関連しているかの説明です。

### GDB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/gdb.png" style={{width:800, height:'auto'}}/></div>

**[GDB](https://www.sourceware.org/gdb/)**（GNU Project Debugger）は、デバッグプロセスの中核エンジンです。これは、ホストコンピュータ（PC）上で動作する強力なコマンドラインツールです。GDB は、ターゲットマイクロコントローラ上でのプログラムの実行を制御する責任があります。以下のことが可能です：
*   プログラムの開始と停止。
*   特定のコード行で実行を一時停止するブレークポイントの設定。
*   コードを1行ずつステップ実行。
*   変数の値やメモリレジスタの内容の検査。

VS Code（PlatformIO 付き）や Eclipse などの最新の統合開発環境（IDE）の多くは、GDB のフロントエンドとして機能するグラフィカルユーザーインターフェースを提供し、クリックを GDB コマンドに変換します。

### OpenOCD/PyOCD

**[OpenOCD](https://openocd.org/)**（Open On-Chip Debugger）と **[PyOCD](https://pyocd.io/)** は、ホストコンピュータ上で動作する重要な「サーバー」アプリケーションです。これらは、GDB からの高レベルコマンドと物理デバッグプローブ（この場合は XIAO Debug Mate）が必要とする低レベル信号との間のブリッジまたは翻訳者として機能します。

GDB が「変数 `x` の値を読み取る」などのコマンドを発行すると、OpenOCD はこのコマンドを受信し、デバッグプローブが理解する命令のシーケンスに変換し、これらの命令を USB 経由でプローブに送信します。

### DAPLink

**[DAPLink](https://github.com/ARMmbed/DAPLink)** は、XIAO Debug Mate の ESP32-S3 マイクロコントローラ上で動作するオープンソースファームウェアです。このファームウェアは、Debug Mate を完全に機能するデバッグプローブに変換します。その主な役割は CMSIS-DAP プロトコルを実装することで、USB 経由でホストコンピュータからデバッグコマンドを受信し、ターゲットチップのデバッグピン（SWD）と物理的に相互作用することを可能にします。本質的に、DAPLink は OpenOCD によって送信された命令を実行するデバイス上の「エージェント」です。

### CMSIS-DAP

**[CMSIS-DAP](https://github.com/ARM-software/CMSIS-DAP)**（Cortex Microcontroller Software Interface Standard - Debug Access Port）は、ホストコンピュータが USB 経由でデバッグプローブと通信する方法を定義する標準化されたプロトコルです。XIAO Debug Mate の DAPLink ファームウェアがこの標準に準拠しているため、独自のドライバやソフトウェアを必要とすることなく、OpenOCD、PyOCD、Keil MDK などの幅広い業界標準ツールと即座に互換性があります。

### Telnet

**Telnet** は、シンプルなテキストベースのネットワークプロトコルです。デバッグの文脈では、OpenOCD は特定のポート（通常はポート 4444）で Telnet サーバーを開くことがよくあります。これにより、OpenOCD サーバー自体への直接的で人間が読める形式のコマンドラインインターフェースが提供されます。GDB がアプリケーションレベルのデバッグに使用される一方で、Telnet インターフェースは OpenOCD の設定、デバッグプローブの状態検査、低レベルリセットコマンドの発行などの高度なタスクに有用です。

### それらがどのように連携するか

<svg viewBox="0 0 880 480" width="100%" height="auto" style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px', fontFamily: 'sans-serif' }}>
  <defs>
    <marker id="arrowhead-fix" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#333333" />
    </marker>
    {/* Filter to create a background for text to prevent line overlap */}
    <filter x="0" y="0" width="1" height="1" id="solid">
      <feFlood floodColor="white" result="bg" />
      <feMerge>
        <feMergeNode in="bg"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  {/* Title */}
  <text x="440" y="30" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#333333">組み込みデバッグアーキテクチャ</text>

  {/* 1. HOST PC AREA (Expanded Size) */}
  <rect x="20" y="60" width="420" height="390" rx="10" fill="#f0f4f8" stroke="#cbd5e0" strokeWidth="2" />
  <text x="40" y="90" fontSize="16" fontWeight="bold" fill="#555555">ホスト PC（ソフトウェア）</text>

  {/* GDB Client */}
  <rect x="50" y="120" width="140" height="60" rx="5" fill="#fff3cd" stroke="#ffecb5" strokeWidth="2" />
  <text x="120" y="145" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#856404">GDB クライアント</text>
  <text x="120" y="165" textAnchor="middle" fontSize="10" fill="#856404">(arm-none-eabi-gdb)</text>

  {/* Telnet Client */}
  <rect x="50" y="300" width="140" height="60" rx="5" fill="#d1ecf1" stroke="#bee5eb" strokeWidth="2" />
  <text x="120" y="325" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0c5460">Telnet クライアント</text>
  <text x="120" y="345" textAnchor="middle" fontSize="10" fill="#0c5460">(人間 / スクリプト)</text>

  {/* Debug Server (OpenOCD/PyOCD) - Shifted Right slightly */}
  <rect x="280" y="150" width="140" height="210" rx="5" fill="#d4edda" stroke="#c3e6cb" strokeWidth="2" />
  <text x="350" y="180" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#155724">デバッグサーバー</text>
  <text x="350" y="200" textAnchor="middle" fontSize="12" fill="#155724">OpenOCD / PyOCD</text>
  <line x1="290" y1="255" x2="410" y2="255" stroke="#155724" strokeWidth="1" strokeDasharray="4" />
  <text x="350" y="275" textAnchor="middle" fontSize="11" fill="#155724" fontStyle="italic">GDB/Telnet を解析</text>
  <text x="350" y="290" textAnchor="middle" fontSize="11" fill="#155724" fontStyle="italic">USB に変換</text>

  {/* Connections inside Host */}

  {/* GDB to Server Connection */}
  {/* Path adjusted to go around text */}
  <path d="M190 150 L235 150 L235 190 L270 190" fill="none" stroke="#333333" strokeWidth="2" markerEnd="url(#arrowhead-fix)" />
  {/* Text moved UP and given a background rect effect via style or just placement */}
  <rect x="200" y="125" width="70" height="24" fill="#f0f4f8" /> 
  <text x="235" y="135" textAnchor="middle" fontSize="10" fill="#666666" fontWeight="bold">TCP ポート 3333</text>
  <text x="235" y="147" textAnchor="middle" fontSize="10" fill="#666666">(RSP プロトコル)</text>

  {/* Telnet to Server Connection */}
  <path d="M190 330 L235 330 L235 290 L270 290" fill="none" stroke="#333333" strokeWidth="2" markerEnd="url(#arrowhead-fix)" />
  <rect x="200" y="332" width="70" height="24" fill="#f0f4f8" />
  <text x="235" y="345" textAnchor="middle" fontSize="10" fill="#666666" fontWeight="bold">TCP ポート 4444</text>
  <text x="235" y="357" textAnchor="middle" fontSize="10" fill="#666666">(CLI コマンド)</text>

  {/* 2. USB CONNECTION */}
  <line x1="420" y1="255" x2="500" y2="255" stroke="#007bff" strokeWidth="4" />
  <text x="460" y="240" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#007bff">USB</text>
  <text x="460" y="275" textAnchor="middle" fontSize="11" fill="#007bff">CMSIS-DAP</text>

  {/* 3. HARDWARE PROBE */}
  <rect x="500" y="180" width="160" height="150" rx="5" fill="#e2e3e5" stroke="#d6d8db" strokeWidth="2" />
  <text x="580" y="210" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#383d41">デバッグプローブ</text>
  <text x="580" y="230" textAnchor="middle" fontSize="10" fill="#555555">(ハードウェアドングル)</text>

  {/* Firmware Box */}
  <rect x="515" y="250" width="130" height="60" rx="3" fill="#ffffff" stroke="#383d41" strokeWidth="1" strokeDasharray="2,2" />
  <text x="580" y="275" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#d63384">ファームウェア: DAPLink</text>
  <text x="580" y="295" textAnchor="middle" fontSize="9" fill="#555555">USB &lt;-&gt; SWD を処理</text>

  {/* 5. TARGET MCU */}
  <rect x="720" y="190" width="130" height="130" rx="5" fill="#ffeeba" stroke="#ffdf7e" strokeWidth="2" />
  <text x="785" y="220" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#856404">ターゲット MCU</text>
  <rect x="735" y="240" width="100" height="60" rx="2" fill="#ffffff" stroke="#856404" strokeWidth="1" />
  <text x="785" y="265" textAnchor="middle" fontSize="11" fill="#333333">コア</text>
  <text x="785" y="285" textAnchor="middle" fontSize="10" fill="#555555">(Cortex-M)</text>

  {/* 4. TARGET CONNECTION */}
  <line x1="660" y1="255" x2="720" y2="255" stroke="#333333" strokeWidth="2" markerEnd="url(#arrowhead-fix)" />
  {/* Moved text UP to avoid overlap with the arrow */}
  <text x="690" y="245" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333333">SWD / JTAG</text>

  {/* Legend / Explanation Box */}
  <rect x="500" y="360" width="350" height="90" rx="5" fill="#ffffff" stroke="#eeeeee" strokeWidth="1" />
  <text x="510" y="380" fontSize="12" fontWeight="bold" fill="#333333">主要概念：</text>
  <circle cx="520" cy="400" r="3" fill="#155724" />
  <text x="530" y="404" fontSize="11" fill="#555555">OpenOCD/PyOCD：GDBコマンドをUSBに変換します。</text>
  <circle cx="520" cy="420" r="3" fill="#007bff" />
  <text x="530" y="424" fontSize="11" fill="#555555">CMSIS-DAP：標準USBプロトコルです。</text>
  <circle cx="520" cy="440" r="3" fill="#d63384" />
  <text x="530" y="444" fontSize="11" fill="#555555">DAPLink：プローブ上で動作するファームウェアです。</text>

</svg>

以下は、IDEからターゲットXIAOまでの全体的なデバッグチェーンの概要です：

1.  **あなた**（IDE内で）「デバッグ開始」をクリックします。
2.  **IDE**が適切なプログラムファイルで**GDB**を起動します。
3.  **GDB**がPC上で動作している**OpenOCD**サーバーに接続します。
4.  **OpenOCD**がUSB経由で接続された**XIAO Debug Mate**を検出します。**CMSIS-DAP**プロトコルを使用してデバイスと通信します。
5.  Debug Mate上の**DAPLink**ファームウェアがこれらのCMSIS-DAPコマンドを受信します。
6.  **DAPLink**がこれらのコマンドを**SWD**（Serial Wire Debug）ピン（SWDIOとSWCLK）上の電気信号に変換します。
7.  これらのSWD信号がターゲットXIAO内の**ARM Cortexコア**を直接制御し、OpenOCDとGDBがCPUを一時停止し、メモリを読み取り、その他すべてのデバッグアクションを実行できるようにします。

要約すると：**GDB**は司令官、**OpenOCD**は翻訳者、**CMSIS-DAP**は彼らが話す言語、そして**DAPLink**は命令を実行する現場の兵士です。

## デバッグの開始

### 互換性チェック

XIAO Debug MateはXIAOエコシステム全体向けに設計されていますが、DAPLinkデバッグ機能はARM Cortex-Mコア専用です。ただし、UART機能と電力監視機能は、アーキテクチャに依存しないため、汎用的に互換性があります。詳細な互換性情報については、以下の表を参照してください。

<div class="table-center">

<table align="center">

<tr>

<th>XIAOモデル</th>

<th>コアアーキテクチャ</th>

<th>DAPLinkデバッグ</th>

<th>UARTモニター</th>

<th>電力アナライザー</th>

</tr>

<tr>

<td>XIAO SAMD21</td>

<td>ARM Cortex-M0+</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RP2040</td>

<td>ARM Cortex-M0+</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RP2350</td>

<td>ARM Cortex-M33</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO nRF52840</td>

<td>ARM Cortex-M4</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RA4M1</td>

<td>ARM Cortex-M4</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO MG24</td>

<td>ARM Cortex-M33</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO nRF54L15</td>

<td>ARM Cortex-M33</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C3</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C5</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C6</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-S3</td>

<td>Xtensa LX7</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

</table>

</div>

### ソフトウェアの準備

デバッグを開始する前に、必要なソフトウェアでホストコンピューターをセットアップする必要があります。

#### ドライバーのインストール

ドライバー要件はオペレーティングシステムによって異なります。

<Tabs>
<TabItem value="Windows" label="Windows" default>

Windowsでは、CMSIS-DAPインターフェース用の汎用USBドライバーをインストールする必要があります。これを行う最も簡単な方法は**Zadig**ユーティリティを使用することです。

1.  [公式ウェブサイト](https://zadig.akeo.ie/)からZadigをダウンロードします。
2.  XIAO Debug MateをPCに接続します。
3.  Zadigを実行します。`Options`に移動し、`List All Devices`がチェックされていることを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_1.png" style={{width:700, height:'auto'}}/></div>

4.  ドロップダウンリストから、**`CMSIS-DAP`**という名前のデバイスインターフェースを見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_2.png" style={{width:700, height:'auto'}}/></div>

  :::warning
  正しいインターフェースを選択するよう十分注意してください。Debug Mateの複数のインターフェース（例：シリアル用）が表示される場合があります。`CMSIS-DAP`のみを変更してください。
  :::

5.  緑色の矢印の右側のボックスで**`WinUSB`**ドライバーを選択します。
6.  `Replace Driver`をクリックします。インストールが完了すると、システムの準備が整います。

</TabItem>
<TabItem value="MacOS" label="MacOS">

ドライバーのインストールは必要ありません。macOSは汎用USBドライバーを通じてCMSIS-DAPデバイスの組み込みサポートを提供しています。

</TabItem>
<TabItem value="Linux" label="Linux">

ドライバーのインストールは必要ありません。LinuxカーネルにはCMSIS-DAPデバイス用のドライバーが含まれています。

</TabItem>
</Tabs>

#### OpenOCDのインストール

:::tip
確認済み：OpenOCDバージョン0.12.0-7以降を使用してください。
:::

互換性を確保し、最新機能にアクセスするため、**xPack**版のOpenOCDを使用することを強く推奨します。システムパッケージマネージャー（macOSのHomebrewやLinuxのAPTなど）は、多くの場合、現代のターゲットで正しく動作しない古いバージョンを提供します。

:::tip PlatformIOに関する注意
VS CodeでPlatformIO拡張機能を使用している場合、デバッグセッションを開始すると、PlatformIOが自動的にプロジェクト用の正しいバージョンのOpenOCDをダウンロードして設定します。PlatformIOのみを使用する場合、手動インストールは不要です。
:::

<Tabs>
<TabItem value="Windows" label="Windows" default>

Windowsでは、手動インストール方法は簡単です。

1.  **OpenOCDパッケージのダウンロード**

[xPack OpenOCDリリースページ](https://github.com/xpack-dev-tools/openocd-xpack/releases)に移動します。最新リリースまでスクロールし、Windows版（例：`xpack-openocd-...-win32-x64.zip`）を見つけます。このファイルをダウンロードします。

2.  **ファイルの展開**

ダウンロードしたZIPファイルを右クリックし、「すべて展開...」を選択します。`C:\Users\YourName\AppData\Local\xPacks\OpenOCD`などの安定した場所を選択します。展開後、`bin`ディレクトリを含む`xpack-openocd-0.12.0-7`のようなフォルダーができます。

3.  **OpenOCDをシステムPATHに追加**

これにより、任意のターミナルから`openocd`を実行できるようになります。

    - スタートメニューで「環境変数」を検索し、「システム環境変数の編集」を選択します。
    - **「環境変数...」**をクリックします。
    - 「ユーザー変数」の下で、**「Path」**変数を選択し、**「編集...」**をクリックします。
    - **「新規」**をクリックし、先ほど展開した`bin`ディレクトリへの完全パスを貼り付けます。例：  
      `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\bin`
    - すべてのウィンドウでOKをクリックして保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_3.png" style={{width:1000, height:'auto'}}/></div>

4.  **インストールの確認**

**新しい**コマンドプロンプトまたはPowerShellウィンドウを開き、次を実行します：

```bash
openocd --version
```

インストールが成功した場合、バージョン情報が表示されます（例：`xPack Open On-Chip Debugger 0.12.0+dev-02228`）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_4.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="MacOS" label="MacOS">

このプロセスはWindowsの手動セットアップと同様です。

1.  **OpenOCDパッケージのダウンロード**

[xPack OpenOCDリリースページ](https://github.com/xpack-dev-tools/openocd-xpack/releases)に移動します。最新リリースを見つけ、お使いのMac用の正しいアーカイブをダウンロードします（例：Intel用は`...-darwin-x64.tar.gz`、Apple Silicon用は`...-darwin-arm64.tar.gz`）。

2.  **ファイルの展開**

ターミナルを開き、以下のコマンドを実行します。ホームディレクトリに標準的な場所を作成します。

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder (or wherever you saved the file)
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **OpenOCDをPATHに追加**

`openocd`実行ファイルの場所をシェルに教える必要があります。現代のmacOSのデフォルトシェルはZshです。

```bash
# Add the path to your .zshrc file (for Zsh)
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.zshrc
```

:::note
`xpack-openocd-0.12.0-7`を実際に作成されたフォルダー名に置き換えてください。Bashを使用している場合は、`~/.zshrc`の代わりに`~/.bash_profile`を編集してください。
:::

4.  **適用と確認**

行った`PATH`の変更は、設定ファイルが再読み込みされるまで現在のターミナルセッションでは有効になりません。

既存のターミナルで以下のコマンドを実行します：

```bash
# For Zsh (default on modern macOS)
source ~/.zshrc
```

次に、以下を実行してインストールを確認します：

```bash
openocd --version
```

正しいxPackバージョン情報が表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_5.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
<TabItem value="Linux" label="Linux">

このプロセスは他のオペレーティングシステムでの手動セットアップと同様です。

1.  **OpenOCDパッケージのダウンロード**

[xPack OpenOCDリリースページ](https://github.com/xpack-dev-tools/openocd-xpack/releases)に移動します。最新リリースを見つけ、Linuxアーカイブ（`...-linux-x64.tar.gz`）をダウンロードします。

2.  **ファイルの展開**

ターミナルを開き、以下のコマンドを実行します。

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **OpenOCDをPATHに追加**

`openocd`実行ファイルの場所をシェルに教える必要があります。ほとんどのLinuxディストリビューションはBashシェルを使用しています。

```bash
# Add the path to your .bashrc file
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.bashrc
```

:::note
`xpack-openocd-0.12.0-7` を実際に作成されたフォルダ名に置き換えてください。
:::

4.  **適用と確認**

設定ファイルが再読み込みされるまで、現在のターミナルセッションでは `PATH` の変更は有効になりません。

既存のターミナルで以下のコマンドを実行してください：

```bash
# For Bash (default on most Linux distros)
source ~/.bashrc
```

次に、以下を実行してインストールを確認してください：

```bash
openocd --version
```

正しい xPack バージョン情報が表示されるはずです。

</TabItem>
</Tabs>

#### PyOCD のインストール

:::info
XIAO RA4M1 のファームウェア書き込み機能を使用する予定の場合は、ここの手順を参照して PyOCD を追加でダウンロードして使用する必要があります。
:::

PyOCD は、Arm Cortex-M マイクロコントローラのプログラミングとデバッグのための Python ベースのツールです。

<Tabs>
<TabItem value="Windows" label="Windows" default>

1.  **前提条件**
    システムに **Python** がインストールされていることを確認してください。インストールされていない場合は、公式の [python.org](python.org) ウェブサイトからダウンロードし、インストール時に **"Add Python to PATH"** のボックスにチェックを入れてください。

2.  **PyOCD のインストール**
    コマンドプロンプトまたは PowerShell ウィンドウを開き、以下のコマンドを実行してください：

    ```bash
    pip install -U pyocd
    ```

3.  **XIAO RA4M1 サポートパックのインストール**
    XIAO RA4M1 は `R7FA4M1AB` チップを使用しています。PyOCD がそれを認識するために、特定のサポートパックをインストールする必要があります。

    パックを検索して利用可能性を確認してください：
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    パックをインストールしてください：
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **ターゲットの確認**
    ターゲットが認識されているかどうかを確認してください：
    ```bash
    pyocd list --targets
    ```
    リストに `r7fa4m1ab` が表示されるはずです。

</TabItem>
<TabItem value="MacOS" label="MacOS">

1.  **前提条件**
    MacOS には通常 Python が付属していますが、最新バージョンを取得するために Homebrew または公式インストーラーを使用することをお勧めします。ターミナルを開いてください。

2.  **PyOCD のインストール**
    ターミナルで以下のコマンドを実行してください：

    ```bash
    pip3 install -U pyocd
    ```

3.  **XIAO RA4M1 サポートパックのインストール**
    XIAO RA4M1 は `R7FA4M1AB` チップを使用しています。特定のサポートパックをインストールする必要があります。

    パックを検索してください：
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    パックをインストールしてください：
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **ターゲットの確認**
    ターゲットが認識されているかどうかを確認してください：
    ```bash
    pyocd list --targets
    ```

</TabItem>
<TabItem value="Linux" label="Linux">

1.  **前提条件**
    パッケージマネージャーを使用して `python3` と `pip` がインストールされていることを確認してください（例：Ubuntu では `sudo apt install python3-pip`）。

    :::note USB 権限
    Linux では、`sudo` を使用せずに USB デバイスにアクセスできるように udev ルールを設定する必要がある場合があります。
    :::

2.  **PyOCD のインストール**
    ターミナルで以下のコマンドを実行してください：

    ```bash
    pip3 install -U pyocd
    ```

3.  **XIAO RA4M1 サポートパックのインストール**
    XIAO RA4M1 は `R7FA4M1AB` チップを使用しています。

    パックを検索してください：
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    パックをインストールしてください：
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **ターゲットの確認**
    ターゲットが認識されているかどうかを確認してください：
    ```bash
    pyocd list --targets
    ```

</TabItem>
</Tabs>


#### `XIAO_Debug_Mate_DAPLink_Package` パッケージの理解

DAPLink デバッガー機能の使用を開始する前に、ZIP ファイルを別途ダウンロードする必要があります。このファイルには、さまざまな XIAO ボードのデバッグに必要なすべてのファイルが含まれています。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_DAPLink_Package-v1.0.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> ZIP ファイルをダウンロード</font></span></strong>
    </a>
</div>


##### ディレクトリ構造の説明

ファイルを解凍すると、以下のフォルダ構造が表示されます。各部分には特定の目的があります：

```
XIAO_Debug_Mate_DAPLink_Package/
├── examples/
│   ├── Blink_nrf52840.elf
│   ├── Blink_SAMD21.bin
│   └── ... (other example firmwares)
├── target/
│   ├── XIAO_RA4M1/
│   │   └── ra4m1.cfg
│   └── XIAO_SAMD21/
│       └── at91samd21g18.cfg
├── XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0/
│   ├── bin/
│   │   └── openocd
│   └── share/
│       └── ... (OpenOCD scripts)
└── XIAO_MG24_Win_OpenOCD-v0.12.0/
    ├── bin/
    │   └── openocd.exe
    └── share/
        └── ... (OpenOCD scripts)
```

*   **`examples/`**
    このフォルダには、Arduino からエクスポートされたさまざまな XIAO ボード用のプリコンパイル済みサンプルファームウェアファイル（例：`.bin`、`.elf`、`.hex`）が含まれています。これらは、マイクロコントローラの書き込みとデバッグ方法を実演するために、後のチュートリアルで使用されます。

*   **`target/`**
    このフォルダには、公式の OpenOCD ディストリビューションに含まれていない可能性がある XIAO ボード用のターゲット設定（`.cfg`）ファイルが含まれています。XIAO SAMD21 や XIAO RA4M1 などのボードをシステムの既存の OpenOCD インストールで使用する場合、これらの設定ファイルを OpenOCD 環境に手動で追加する必要があります。具体的な手順については後で説明します。

*   **`XIAO_MG24_..._OpenOCD-v0.12.0/`**
    これは **XIAO MG24** ボード用の特別で非常に重要なコンポーネントです。現在、このチップのサポートは公式の OpenOCD リリースや標準の xPack ディストリビューションでは利用できません。この問題を解決するために、Windows（`XIAO_MG24_Win_...`）と macOS/Linux（`XIAO_MG24_Mac_Linux_...`）の両方に対して、完全でスタンドアロンの OpenOCD パッケージを提供しています。XIAO MG24 を使用する場合は、これらの特定のフォルダ内で提供される `openocd` 実行ファイルを**必ず**使用してください。

### ハードウェアの準備

デバッグ用のハードウェア接続は簡単です。

#### XIAO ボード用

XIAO Debug Mate は、すべての Seeed Studio XIAO ボードとのシームレスなプラグアンドプレイ体験を提供するように設計されています。

1.  XIAO ボードを取り、Debug Mate のメスヘッダーに合わせてください。
2.  **XIAO の USB-C ポートが Debug Mate の USB-C ポートと同じ方向を向いていることを確認してください。**
3.  XIAO が完全に装着されるまで、ソケットにまっすぐ押し込んでください。これにより、Debug Mate のポゴピンが XIAO の裏面の SWD パッドとしっかりと接続されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

:::note
**XIAO SAMD21**、**XIAO RP2040**、**XIAO nRF52840** などの初期の XIAO ボードの一部は、裏面パッドの統一規格が確立される前に設計されました。Debug Mate のポゴピンは可能な限り互換性があるように配置されていますが、これらの古いボードのわずかな違いにより、完璧な接触が得られない場合があります。

デバッグ接続が不安定な場合は、ソケット内で XIAO ボードの**位置を少し調整**してみてください。完全に押し込む必要はない場合があります。わずかなずれで、ポゴピンが XIAO の裏面の SWD パッドとしっかりと接触することがよくあります。
:::

:::danger ホットスワップ
XIAO と Debug Mate のホットスワップは強く推奨しません！
:::

#### その他の開発ボード用

XIAO Debug Mate は、他の ARM ベースの開発ボード用の汎用 SWD デバッグプローブとしても使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/16.jpg" style={{width:800, height:'auto'}}/></div>

1.  4 本のデュポンワイヤー（ターゲットボードに応じてメス-オスまたはメス-メス）が必要です。
2.  ターゲットボードの SWD デバッグピンを見つけてください。これらは通常 `SWDIO`、`SWCLK`、`GND`、時には `VTref` または `VCC` とラベル付けされています。
3.  XIAO Debug Mate の拡張ヘッダーからターゲットボードに以下のようにワイヤーを接続してください：

| XIAO Debug Mate ピン | ターゲットボードピン | 説明                               |
| :------------------ | :--------------- | :-------------------------------- |
| `SWDIO`             | `SWDIO`          | シリアルワイヤーデータ入出力             |
| `SWCLK`             | `SWCLK`          | シリアルワイヤークロック               |
| `GND`               | `GND`            | 共通グランド                        |
| `VCC`               | `VTref` または `3V3` | ターゲット電圧リファレンス（レベルシフト用に重要） |

接続が完了したら、CMSIS-DAP インターフェースを使用するように OpenOCD を設定し、他のプローブと同様にデバッグセッションを開始できます。


## Telnet を介した OpenOCD との対話

最新の IDE はデバッグ用のグラフィカルインターフェースを提供していますが、時にはより直接的で低レベルなデバッガーとの対話方法が必要になります。ここで Telnet が役立ちます。OpenOCD は Telnet サーバーを実行し、直接接続してテキストベースのコマンドを送信してターゲットチップを制御できます。これは、クイックチェック、自動化タスクのスクリプト作成、または完全な IDE が利用できない、または必要でない場合の問題のデバッグに非常に有用です。

### Telnet クライアントの有効化

Telnet を使用する前に、オペレーティングシステムで有効にする必要がある場合があります。デフォルトでは常にインストールまたは有効になっているわけではありません。

<Tabs>
<TabItem value="Windows" label="Windows" default>

最新の Windows システムでは、Telnet クライアントは手動で有効にする必要があるレガシー機能です。

1.  `Win` + `R` を押して「ファイル名を指定して実行」ダイアログを開き、`control panel` と入力して Enter を押してください。
2.  **プログラム** > **プログラムと機能** に移動してください。
3.  左側で **Windows の機能の有効化または無効化** をクリックしてください。
4.  表示される新しいウィンドウで、下にスクロールして **Telnet クライアント** を見つけてください。
5.  その横のボックスにチェックを入れて **OK** をクリックしてください。Windows が機能をインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_6.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="MacOS" label="MacOS">
最新バージョンのmacOSでは、ネイティブのTelnetクライアントが削除されている可能性があります。最も簡単なインストール方法は[Homebrew]を使用することです。ターミナルを開いて以下を実行してください：
```bash
brew install telnet
```
</TabItem>
<TabItem value="Linux" label="Linux">
ほとんどのLinuxディストリビューションにはTelnetクライアントが付属しています。存在しない場合は、パッケージマネージャーを使用して簡単にインストールできます。Debian/Ubuntuベースのシステムの場合、ターミナルを開いて以下を実行してください：
```bash
sudo apt-get update
sudo apt-get install telnet
```
</TabItem>
</Tabs>

### Telnetを使用したステップバイステップデバッグ

#### ステップ1：OpenOCDサーバーの実行

以下のリストからあなたのXIAOボードを見つけ、お使いのオペレーティングシステムに応じた具体的な手順に従ってOpenOCDサーバーを開始してください。このサーバープロセスは、GDBなどのデバッガーからの接続を待機します。

##### Seeed Studio XIAO SAMD21の場合

標準のOpenOCDパッケージには、XIAO SAMD21の設定ファイルが含まれていません。提供されたパッケージからシステムのOpenOCDインストールディレクトリに手動でコピーする必要があります。

**1. 設定ファイルのコピー**

*   **ソースファイル：** `XIAO_Debug_Mate_DAPLink_Package`から、ファイル：`target/XIAO_SAMD21/at91samd21g18.cfg`を見つけてください。
*   **コピー先フォルダ：** このファイルをxPack OpenOCDインストールの`target`スクリプトフォルダにコピーしてください。パスはOSによって異なります：

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\share\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
`YourName`と`xpack-openocd-0.12.0-7`を実際のユーザー名とインストールしたOpenOCDのバージョンに置き換えてください。
:::

**2. OpenOCDコマンドの実行**

システム上の任意の場所で新しいターミナルを開き、対応するコマンドを実行してください：

*   **Windows：**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg
    ```
*   **macOS / Linux：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg
    ```

---

##### Seeed Studio XIAO RP2040の場合

RP2040の設定は標準のxPack OpenOCDに含まれています。ターミナルを開いてコマンドを実行してください。

*   **Windows：**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000"
    ```
*   **macOS / Linux：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000"
    ```

---

##### Seeed Studio XIAO RP2350の場合

RP2350の設定は標準のxPack OpenOCDに含まれています。ターミナルを開いてコマンドを実行してください。

*   **Windows：**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000"
    ```
*   **macOS / Linux：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000"
    ```

---

##### Seeed Studio XIAO nRF52840の場合

nRF52の設定は標準のxPack OpenOCDに含まれています。ターミナルを開いてコマンドを実行してください。

*   **Windows：**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg
    ```
*   **macOS / Linux：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg
    ```

---

##### Seeed Studio XIAO RA4M1の場合

SAMD21と同様に、標準のOpenOCDパッケージにはXIAO RA4M1の設定ファイルが含まれていません。手動でコピーする必要があります。

**1. 設定ファイルのコピー**

*   **ソースファイル：** `XIAO_Debug_Mate_DAPLink_Package`から、ファイル：`target/XIAO_RA4M1/ra4m1.cfg`を見つけてください。
*   **コピー先フォルダ：** このファイルをxPack OpenOCDインストールの`target`スクリプトフォルダにコピーしてください。

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\share\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
`YourName`と`xpack-openocd-0.12.0-7`を実際のユーザー名とインストールしたOpenOCDのバージョンに置き換えてください。
:::

**2. OpenOCDコマンドの実行**

システム上の任意の場所で新しいターミナルを開き、対応するコマンドを実行してください：

*   **Windows：**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/ra4m1.cfg
    ```
*   **macOS / Linux：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/ra4m1.cfg
    ```

---

##### Seeed Studio XIAO MG24の場合

:::warning[重要]
XIAO MG24には、`XIAO_Debug_Mate_DAPLink_Package`に含まれている特別なバージョンのOpenOCDが必要です。システム全体のOpenOCDインストールを使用**しないでください**。パッケージで提供されている特定のディレクトリ内からコマンドを実行する**必要があります**。
:::

**1. ターミナルの準備**

コマンドラインツールを開き、解凍されたパッケージ内のお使いのオペレーティングシステム用の正しいフォルダに移動してください。

*   **Windows：**
    ```bash
    # Example if you unzipped it on your Desktop:
    cd C:\Users\YourName\Desktop\XIAO_Debug_Mate_DAPLink_Package\XIAO_MG24_Win_OpenOCD-v0.12.0
    ```
*   **macOS / Linux：**
    ```bash
    # Example if you unzipped it on your Desktop:
    cd ~/Desktop/XIAO_Debug_Mate_DAPLink_Package/XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0
    ```

**2. OpenOCDコマンドの実行**

正しいディレクトリ内に入ったら、以下のコマンドを実行してください：

*   **Windows：**
    ```bash
    bin\openocd.exe -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "reset_config srst_nogate"
    ```
*   **macOS / Linux：**
    ```bash
    bin/openocd -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "reset_config srst_nogate"
    ```

#### コマンドの詳細説明

コマンドの各部分が何をするかを理解することで、問題のトラブルシューティングやワークフローのカスタマイズに役立ちます。典型的なコマンドを分解してみましょう：

`bin/openocd -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "..."`

*   `bin/openocd`（または`bin\openocd.exe`）：これはOpenOCDプログラムを実行します。`bin`サブディレクトリに配置されていることを前提としており、これは標準的な慣例です。名前と拡張子はOSによって異なります。

*   `-s share/openocd/scripts`：`-s`フラグは重要です。OpenOCDにスクリプトライブラリを**検索**する場所を指示します。このパスが設定されることで、OpenOCDは`-f`フラグで指定されたファイルを見つけることができます。

*   `-f interface/cmsis-dap.cfg`：`-f`フラグは読み込む設定**ファイル**を指定します。この最初のファイルは、使用しているデバッグアダプター（標準のCMSIS-DAPプローブ）を定義します。

*   `-f target/rp2040.cfg`：この2番目の`-f`フラグは、ターゲットマイクロコントローラー（XIAOボード上のRP2040チップ）の設定を読み込みます。

*   `-c "..."`：`-c`フラグは、OpenOCDが開始した後に**コマンド**を渡します。
    *   `adapter speed 5000`：（RP2040/RP2350用）安定した通信のためにSWDクロック速度を5000 kHzに設定します。
    *   `reset_config srst_nogate`：（MG24用）この特定のターゲットに必要な特別なリセット設定です。

これらのコマンドのいずれかを実行した後、OpenOCDは接続を初期化し、GDBなどのデバッガーが接続する（通常はポート3333）のを待機します。その後、デバッガーを使用してプログラムを読み込み（`load <path/to/your/firmware.elf>`）、ブレークポイントを設定し、コードをデバッグできます。

#### ステップ2：Telnetサーバーへの接続

次に、**2番目の新しい**コマンドプロンプトまたはターミナルウィンドウを開きます。以下のコマンドを入力してEnterキーを押してください：

```bash
telnet localhost 4444
```

*   `localhost`はあなた自身のコンピューターを指します。
*   `4444`はOpenOCDがTelnet接続に使用するデフォルトのポート番号です。

接続が成功すると、ターミナルにOpenOCDからのウェルカムメッセージが表示され、コマンドを受け付ける準備ができた`>`プロンプトが表示されます。

#### ステップ3：デバッグコマンドの実行

Telnetセッションに直接コマンドを入力して、ターゲットチップを制御できるようになりました。最も一般的なコマンドをいくつか紹介します：

| コマンド             | 説明                                                                                                                                                             |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `init`              | **ターゲットの初期化。** チップへの接続を確立します。接続後に最初に実行すべきコマンドです。                                        |
| `reset halt`        | **リセットと停止。** マイクロコントローラーをリセットし、即座に実行を一時停止（停止）します。これはデバッグ準備状態に入る主要な方法です。                       |
| `reg`               | **レジスタの表示。** すべてのCPUレジスタの現在の値を表示します。                                                                                                   |
| `mdw [address] [count]` | **メモリ表示ワード。** メモリの内容を読み取り表示します。例えば、`mdw 0x20000000 10`はメモリアドレス`0x20000000`から10ワード（32ビット値）を表示します。 |
| `step`              | **シングルステップ。** CPU上で単一の命令を実行します。命令が関数呼び出しの場合、関数*内部*にステップインします。                                      |
| `resume`            | **実行の再開。** 現在の状態からプログラムを自由に実行させます。ブレークポイント（設定されている場合）にヒットするか、再度停止するまで継続します。              |
| `exit`              | **Telnetの終了。** Telnet接続を閉じ、コマンドプロンプトに戻ります。他のウィンドウのOpenOCDサーバーは実行を継続します。                          |

典型的な手動デバッグセッションは以下の手順に従います：
1.  `init`と入力してチップに接続します。
2.  `reset halt`と入力してプログラムを最初の段階で停止します。
3.  `mdw 0x20000000 10`と入力してRAMの値を検査します。
4.  `step`を数回入力して初期スタートアップコードを順次実行します。
5.  `resume`と入力してプログラムを正常に実行させます。
6.  完了したら`exit`と入力します。

## OpenOCD/PyOCDを使用したファームウェアの書き込み

インタラクティブなデバッグに加えて、XIAO Debug Mateはコマンドラインツールを使用してXIAOのマイクロコントローラーに直接ファームウェアをプログラミング（書き込み）することに優れています。この主要なツールは**OpenOCD**（Open On-Chip Debugger）と**PyOCD**です。

このガイドでは、これらの強力なツールを使用してプリコンパイル済みファームウェアファイルをアップロードする方法を説明します。ほとんどの互換性のあるXIAOボードはOpenOCDを使用しますが、**XIAO RA4M1**は特にフラッシュにPyOCDが必要なため、「OpenOCD/PyOCD」という表記を使用しています。

### フラッシュ互換性

この表は、提供されたツールでコマンドラインフラッシュがサポートされているXIAOボードとファイルタイプをまとめています。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAOモデル</th>
			<th>.bin</th>
			<th>.elf</th>
			<th>.hex</th>
            <th>ブートローダー</th>
		</tr>
		<tr>
			<td>Seeed Studio XIAO SAMD21</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
			<td>✅ (OpenOCD)</td>
            <td>✅ (.binファイル、OpenOCD使用)</td>
		</tr>
		<tr>
			<td>Seeed Studio XIAO RP2040</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
            <td>❌</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO RP2350</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
            <td>❌</td>
		</tr>
		<tr>
			<td>Seeed Studio XIAO nRF52840</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
            <td>✅ (.hexファイル、OpenOCD使用)</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO RA4M1</td>
			<td>✅ (PyOCD)</td>
			<td>❌</td>
			<td>✅ (PyOCD)</td>
            <td>✅ (.hexファイル、PyOCD使用)</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO MG24</td>
			<td>❌</td>
			<td>❌</td>
			<td>✅ (OpenOCD)</td>
            <td>❌</td>
		</tr>
	</table>
</div>

1. この互換性表で❌が付いている項目は、OpenOCD v0.12.0でのテストに失敗したサンプルです。時間を節約するため、他のファームウェアファイルを使用してください。
2. ブートローダーファイル：ここではXIAOブートローダーファイルとフラッシュコマンドのみを提供しています。このXIAOモデルがブートローダーファイルを同梱していない場合は、❌でマークされます。
3. **XIAO RA4M1とXIAO MG24は`.elf`ファイルのフラッシュをサポートしていません。XIAO RA4M1またはXIAO MG24に`.elf`ファイルをフラッシュしようとすると、デバイスがブリック状態になります**。

### 前提条件

1.  **OpenOCDのインストール：** **XIAO MG24を除く**すべてのXIAOボードについて、[システムにOpenOCDをインストールし、コマンドラインからアクセス可能にする（つまり、システムのPATHに追加する）](#install-openocd)必要があります。

2.  **XIAO Debug Mateファームウェアパッケージ：** カスタム設定ファイルとサンプルファームウェアを含むパッケージを用意しました。ダウンロードして展開してください。構造は以下の通りです：

    *   `examples/`：さまざまなXIAOボード用のプリコンパイル済みサンプルファームウェア（`.elf`、`.hex`、`.bin`）といくつかのXIAOブートローダーファイルが含まれています。
    *   `target/`：XIAO SAMD21やRA4M1などの特定のボードに必要なカスタムOpenOCD設定ファイル（`.cfg`）が含まれています。
    *   `XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0/`：macOSとLinux上でXIAO MG24をフラッシュするための自己完結型OpenOCD。
    *   `XIAO_MG24_Win_OpenOCD-v0.12.0/`：Windows上でXIAO MG24をフラッシュするための自己完結型OpenOCD。

3.  **ターミナル/コマンドプロンプト：** コマンドラインインターフェース（コマンドプロンプト、PowerShell、ターミナルなど）を開いて使用することに慣れている必要があります。

#### コマンド実行戦略

*   **オプションA（推奨）：パッケージディレクトリから実行**

    このガイドのすべてのコマンドは、展開した`XIAO_Debug_Mate_DAPLink_Package`フォルダのルートでターミナルを開いていることを前提としています。これは最もシンプルな方法で、ファームウェアと設定ファイルへの相対パスが直接機能します。

*   **オプションB（上級者向け）：任意のディレクトリから実行**

    独自のプロジェクトフォルダからコマンドを実行したい場合は、`-s`フラグを使用してOpenOCDにパッケージのカスタムスクリプトの場所を指定できます。

    *   **必要なアクション：** `openocd`コマンドに`-s <パッケージフォルダのパス>`を追加します。例：

        ```bash
        # Replace <path_to_package_folder> with the actual path
        openocd -s <path_to_package_folder> -f interface/cmsis-dap.cfg -f target/XIAO_SAMD21/at91samd21g18.cfg ...
        ```

:::note
**WindowsとmacOS/Linux：** すべてのコマンドにおいて、Windowsユーザーは`openocd`の代わりに`openocd.exe`を使用してください。クロスプラットフォーム互換性のため、ファイルパスにはフォワードスラッシュ（`/`）の使用を推奨します。
:::

**独自のカスタムファームウェアをフラッシュするには：**

サンプルパス（例：`examples/Blink_RP2040.elf`）を独自のファームウェアファイルのパスに置き換えるだけです。

### ファームウェアファイルの理解（.bin、.hex、.elf）

プロジェクトをコンパイルすると、ツールチェーンはマイクロコントローラーにアップロードするファイルを生成します。一般的に3つの形式があります：

*   **.bin（バイナリ）：** マシンコードのみを含む生のコンパクトなバイナリファイル。メモリアドレスに関する追加情報がないため、プログラミングツールにどこに配置するかを指示する必要があります。
*   **.hex（Intel HEX）：** バイナリコードのASCIIテキスト表現。メモリアドレス、チェックサム、メタデータが含まれており、`.bin`よりも堅牢な形式です。
*   **.elf（実行可能リンク可能形式）：** 最も包括的な形式。マシンコード、メモリアドレス情報に加えて、関数名、変数名、ソースコード行番号などのデバッグ情報も含まれています。これはデバッグに適した形式です。
*   **.bootloader（ブートローダーファイル）：** ブートローダーファイルは、マイクロコントローラーのメモリの保護された領域に存在し、ファームウェアのフラッシュ、デバイスの復旧、起動タスクを促進する役割を持つ特殊なファームウェアイメージです。XIAOボードでは、ブートローダーにより専用のハードウェアプログラマーを必要とせずに新しいアプリケーションコードをデバイスに（多くの場合USB経由で）アップロードできます。デバイスが応答しなくなったり、メインプログラムが失敗した場合、ブートローダーを再フラッシュすることでボードを復旧できます。特定のボードモデル用の公式ブートローダーファイルのみを使用してください。間違ったファイルを使用すると、特殊なツールで修理するまでデバイスが動作不能になる可能性があります。

**プロジェクトからこれらのファイルを取得する方法：**

*   **Arduino IDE：** コンパイル後（`Sketch > Verify/Compile`）、`Sketch > Export compiled Binary`を使用します。これによりスケッチフォルダに`.hex`または`.bin`ファイルが保存されます。
*   **PlatformIO：** ビルド成功後、ファームウェアファイル（`firmware.bin`、`firmware.hex`、`firmware.elf`）はプロジェクトの`.pio/build/<environment_name>/`ディレクトリにあります。



### `.bin`ファイルのフラッシュ

#### Seeed Studio XIAO SAMD21の場合

標準のOpenOCDパッケージにはXIAO SAMD21用の設定ファイルが含まれていません。提供されたパッケージからシステムのOpenOCDインストールディレクトリに手動でコピーする必要があります。

**1. 設定ファイルのコピー**

*   **ソースファイル：** `XIAO_Debug_Mate_DAPLink_Package`から、ファイル`target/XIAO_SAMD21/at91samd21g18.cfg`を見つけます。
*   **コピー先フォルダ：** このファイルをxPack OpenOCDインストールの`target`スクリプトフォルダにコピーします。パスはOSによって異なります：

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\share\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
`YourName`と`xpack-openocd-0.12.0-7`を実際のユーザー名とインストールしたOpenOCDのバージョンに置き換えてください。
:::

**2. ファームウェアのフラッシュ**

システムの任意の場所で新しいターミナルを開き、対応するコマンドを実行します：

*   **Windowsの場合：**
    ```powershell
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.bin 0x00002000 verify reset; shutdown"
    ```

*   **macOS / Linuxの場合：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.bin 0x00002000 verify reset; shutdown"
    ```

---

#### Seeed Studio XIAO RP2040の場合

OpenOCDを使用してXIAO RP2040をフラッシュする場合、`.bin`ファイルの代わりに`.elf`ファイルを使用することを強く推奨します。

これは、`.elf`ファイルには既にプログラムのメモリアドレス情報（リンカーアドレス）が内部に含まれているためです。OpenOCDは自動的に正しい場所（通常は`0x10000000`）に書き込むため、オフセットアドレスを手動で計算したり推測したりする必要がありません。

`.bin`ファイルを使用する必要がある場合は、XIAO RP2040のFlash開始アドレス`0x10000000`を手動で指定する必要があります。

**Windowsの場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.bin 0x10000000 verify reset exit"
```

**macOS / Linuxの場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.bin 0x10000000 verify reset exit"
```

---

#### Seeed Studio XIAO RP2350の場合

OpenOCDを使用してXIAO RP2350をフラッシュする場合、`.bin`ファイルの代わりに`.elf`ファイルを使用することを強く推奨します。

これは、`.elf`ファイルには既にプログラムのメモリアドレス情報（リンカーアドレス）が内部に含まれているためです。OpenOCDは自動的に正しい場所（通常は`0x10000000`）に書き込むため、オフセットアドレスを手動で計算したり推測したりする必要がありません。

`.bin`ファイルを使用する必要がある場合は、XIAO RP2350のFlash開始アドレス`0x10000000`を手動で指定する必要があります。

**Windowsの場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.bin 0x10000000 verify reset exit"
```

**macOS / Linuxの場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.bin 0x10000000 verify reset exit"
```

---

#### Seeed Studio XIAO nRF52840の場合

nRF52の設定は標準のxPack OpenOCDに含まれています。ターミナルを開いてコマンドを実行してください。

**Windowsの場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.bin 0x27000 verify reset exit"
```

**macOS / Linuxの場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.bin 0x27000 verify reset exit"
```

---

#### Seeed Studio XIAO RA4M1 の場合

現在、標準的な OpenOCD ディストリビューションには、専用ドライバーやターゲット設定ファイルなど、Renesas RA シリーズの組み込みサポートが不足していることがよくあります。これにより、OpenOCD を使用したフラッシュは手動設定が必要な複雑なプロセスになります。

そのため、RA4M1 に対してすぐに使えるサポートを提供する `PyOCD` の使用を強く推奨します。

ファームウェア（例：`Blink_RA4M1.hex`）をフラッシュするには、お使いのオペレーティングシステムに対応するコマンドを使用してください。

**Windows の場合：**
```powershell
pyocd flash -t r7fa4m1ab examples\Blink_RA4M1.bin —base-address 0x4000
```

**macOS / Linux の場合：**
```bash
pyocd flash -t r7fa4m1ab examples/Blink_RA4M1.bin —base-address 0x4000
```


### `.elf` ファイルのフラッシュ

:::danger
`.elf` ファイルをフラッシュする際は、ファームウェアのサイズに十分注意してください。ファイルが 2MB を超える場合は、デバイスに十分な Flash ストレージ容量があることを確認してください。これを怠ると、デバイスが使用不能になる可能性があります！
:::

#### Seeed Studio XIAO SAMD21 の場合

XIAO SAMD21 の Flash メモリは 256KB と限られているため、通常 256KB を超えるファームウェアファイルを書き込むことはできません。Blink サンプルの `.elf` ファイルは既に 658KB に達しており、書き込み不可能です。代わりに、より小さな `.bin` または `.hex` ファイルの使用を推奨します。

---

#### Seeed Studio XIAO RP2040 の場合

RP2040 の設定は標準の xPack OpenOCD に含まれています。ターミナルを開いてコマンドを実行してください。

**Windows の場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.elf verify reset exit"
```

**macOS / Linux の場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.elf verify reset exit"
```

---

#### Seeed Studio XIAO RP2350 の場合

RP2350 の設定は標準の xPack OpenOCD に含まれています。ターミナルを開いてコマンドを実行してください。

**Windows の場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.elf verify reset exit"
```

**macOS / Linux の場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.elf verify reset exit"
```

---

#### Seeed Studio XIAO nRF52840 の場合

nRF52 の設定は標準の xPack OpenOCD に含まれています。ターミナルを開いてコマンドを実行してください。

**Windows の場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.elf verify reset exit"
```

**macOS / Linux の場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.elf verify reset exit"
```

:::tip
時々、ファームウェアを有効にするために 2 回フラッシュする必要がある場合があります。これは正常な動作です。
:::

---

#### Seeed Studio XIAO RA4M1 の場合

:::danger デバイスを使用不能にしないでください
XIAO RA4M1 では `.elf` ファイルのフラッシュは禁止されています。これを行うとデバイスが使用不能になる可能性があります！！！
:::

---

#### Seeed Studio XIAO MG24 の場合

:::danger デバイスを使用不能にしないでください
XIAO MG24 では `.elf` ファイルのフラッシュは禁止されています。これを行うとデバイスが使用不能になる可能性があります！！！
:::


### `.hex` ファイルのフラッシュ

#### Seeed Studio XIAO SAMD21 の場合

標準の OpenOCD パッケージには XIAO SAMD21 の設定ファイルが含まれていません。提供されたパッケージからシステムの OpenOCD インストールディレクトリに手動でコピーする必要があります。

**1. 設定ファイルのコピー**

*   **ソースファイル：** `XIAO_Debug_Mate_DAPLink_Package` から、ファイル `target/XIAO_SAMD21/at91samd21g18.cfg` を見つけます。
*   **コピー先フォルダ：** このファイルを xPack OpenOCD インストールの `target` スクリプトフォルダにコピーします。パスは OS によって異なります：

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\share\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
`YourName` と `xpack-openocd-0.12.0-7` を実際のユーザー名とインストールした OpenOCD のバージョンに置き換えてください。
:::

**2. ファームウェアのフラッシュ**

システムの任意の場所で新しいターミナルを開き、対応するコマンドを実行します：

*   **Windows の場合：**
    ```powershell
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.hex verify reset; shutdown"
    ```

*   **macOS / Linux の場合：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.hex verify reset; shutdown"
    ```

---

#### Seeed Studio XIAO nRF52840 の場合

nRF52 の設定は標準の xPack OpenOCD に含まれています。ターミナルを開いてコマンドを実行してください。

**Windows の場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.hex verify reset exit"
```

**macOS / Linux の場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.hex verify reset exit"
```

---

#### Seeed Studio XIAO RA4M1 の場合

現在、標準的な OpenOCD ディストリビューションには、専用ドライバーやターゲット設定ファイルなど、Renesas RA シリーズの組み込みサポートが不足していることがよくあります。これにより、OpenOCD を使用したフラッシュは手動設定が必要な複雑なプロセスになります。

そのため、RA4M1 に対してすぐに使えるサポートを提供する `PyOCD` の使用を強く推奨します。

ファームウェア（例：`Blink_RA4M1.hex`）をフラッシュするには、お使いのオペレーティングシステムに対応するコマンドを使用してください。

**Windows の場合：**
```powershell
pyocd flash -e sector -a 0x0 -t r7fa4m1ab examples\Blink_RA4M1.hex
```

**macOS / Linux の場合：**
```bash
pyocd flash -e sector -a 0x0 -t r7fa4m1ab examples/Blink_RA4M1.hex
```

**コマンドの説明：**
*   `pyocd flash`：フラッシュ操作を実行します。
*   `-e sector`：プログラミング前にフラッシュメモリの必要なセクターを消去します。
*   `-a 0x0`：フラッシュの開始アドレスを指定します。これは `0x00000000` です。
*   `-t r7fa4m1ab`：ターゲット MCU タイプを指定します。
*   `examples\Blink_RA4M1.hex` または `examples/Blink_RA4M1.hex`：フラッシュしたいファームウェアファイルのパスです。Windows では `\`、macOS/Linux では `/` を使用することに注意してください。

#### Seeed Studio XIAO MG24 の場合

このボードには、パッケージからの専用 OpenOCD バージョンが必要です。コマンドを実行する前に、正しいディレクトリに移動する**必要があります**。

1.  **正しいディレクトリに移動：**
    *   **Windows の場合：** コマンドプロンプトを開いて実行：
        `cd XIAO_MG24_Win_OpenOCD-v0.12.0`
    *   **macOS/Linux の場合：** ターミナルを開いて実行：
        `cd XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0`

2.  **フラッシュコマンドの実行：**
    パッケージディレクトリの 2 階層下にいるため、ファームウェアへのパスは `../examples/Blink_MG24.hex` になります。

    **Windows の場合：**
    ```powershell
    bin\openocd.exe -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "init; reset_config srst_nogate; reset halt; program ../examples/Blink_MG24.hex; reset; exit"
    ```

    **macOS / Linux の場合：**
    ```bash
    bin/openocd -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "init; reset_config srst_nogate; reset halt; program ../examples/Blink_MG24.hex; reset; exit"
    ```


### ブートローダーファイルのフラッシュ

これはボードを復旧できる重要な操作です。

#### Seeed Studio XIAO SAMD21 の場合

標準の OpenOCD パッケージには XIAO SAMD21 の設定ファイルが含まれていません。提供されたパッケージからシステムの OpenOCD インストールディレクトリに手動でコピーする必要があります。

**1. 設定ファイルのコピー**

*   **ソースファイル：** `XIAO_Debug_Mate_DAPLink_Package` から、ファイル `target/XIAO_SAMD21/at91samd21g18.cfg` を見つけます。
*   **コピー先フォルダ：** このファイルを xPack OpenOCD インストールの `target` スクリプトフォルダにコピーします。パスは OS によって異なります：

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\share\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
`YourName` と `xpack-openocd-0.12.0-7` を実際のユーザー名とインストールした OpenOCD のバージョンに置き換えてください。
:::

**2. ファームウェアのフラッシュ**

このコマンドは、パッケージで提供されたカスタム `at91samd21g18.cfg` ファイルを使用して `.bin` ブートローダーをフラッシュします。

*   **Windows の場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Bootloader_SAMD21.bin verify reset; shutdown"
```

*   **macOS / Linux の場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Bootloader_SAMD21.bin verify reset; shutdown"
```

#### Seeed Studio XIAO nRF52840 の場合

このプロセスでは、ブートローダーをダウンロードし、チップを消去してから新しいファイルをフラッシュします。

このコマンドは、OpenOCD インストールの標準 `nrf52.cfg` を使用します。

**Windows の場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "init" -c "halt" -c "nrf5 mass_erase" -c "program examples/Bootloader_nRF52840-0.6.1.hex verify" -c "reset" -c "exit"
```

**macOS / Linux の場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "init" -c "halt" -c "nrf5 mass_erase" -c "program examples/Bootloader_nRF52840-0.6.1.hex verify" -c "reset" -c "exit"
```

:::tip
OpenOCD を使用してブートローダーを書き込み、その後ファームウェア bin を書き込んだ後、ファームウェア bin は正常に動作しません。プログラムを正常に動作させるには、Arduino を使用してプログラムをアップロードする必要があります。

これは、Nordic シリーズチップ（nRF52832 など）のブートローダーが起動時に特定のメモリアドレス（通常「Bootloader Settings Page」と呼ばれる）でアプリケーションファームウェアの有効性情報をチェックする必要があるためです。この「設定ページ」には、ファームウェアの CRC チェックサム、長さ、有効性フラグが含まれています。

OpenOCDのような汎用プログラミングツールを使用して.binファイルを直接書き込む場合、ファームウェアのバイナリデータを指定されたアプリケーション開始アドレスに書き込むだけで、Bootloaderが必要とする「設定ページ」を自動的に生成または書き込みません。そのため、デバイスが再起動すると、Bootloaderは有効な設定ページを検出できず、正当なアプリケーションが存在しないと判断し、ファームウェアの起動を拒否し、通常はDFU（Device Firmware Update）モードに入り、OTAまたはシリアルポート経由での更新を待機します。
:::

#### Seeed Studio XIAO RA4M1の場合

現在、標準的なOpenOCDディストリビューションには、専用ドライバーやターゲット設定ファイルなど、Renesas RAシリーズの組み込みサポートが不足していることがよくあります。これにより、OpenOCDを使用したフラッシュ書き込みは、手動設定が必要な複雑なプロセスになります。

そのため、RA4M1に対してすぐに使えるサポートを提供する`PyOCD`の使用を強く推奨します。

Bootloaderをフラッシュするには、お使いのオペレーティングシステムに対応するコマンドを使用してください。

**Windows の場合：**
```powershell
pyocd flash -t r7fa4m1ab examples\Bootloader_RA4M1.hex —erase chip
```

**macOS / Linux の場合：**
```bash
pyocd flash -t r7fa4m1ab examples/Bootloader_RA4M1.hex —erase chip
```


## PlatformIOでのデバッグの使用

まず、Visual Studio CodeにPlatformIO IDE拡張機能がインストールされていることを確認してください。

1.  **VS Codeのインストール**：[Visual Studio Codeをダウンロードしてインストール](https://code.visualstudio.com/)してください。
2.  **PlatformIO IDEのインストール**：VS Codeを開き、拡張機能ビュー（Ctrl+Shift+X）に移動し、`PlatformIO IDE`を検索してインストールします。

### PlatformIOプロジェクトの作成と設定

1.  **PlatformIOの起動**：VS CodeのアクティビティバーでPlatformIOアイコンをクリックし、「Home」を選択してPIO Homeスクリーンを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/17.png" style={{width:1000, height:'auto'}}/></div>

2.  **新しいプロジェクトの作成**：「New Project」をクリックし、プロジェクトに名前を付けます。
    *   **ボードの選択**：使用予定の特定のXIAOボードを検索します。

:::note
Seeed Studioボードはサードパーティリポジトリでホストされているため、特定のボードがデフォルトで検索リストに表示されない場合があります。この場合、汎用ボード（または利用可能な任意のボード）を選択してプロジェクトを初期化し、次のステップで修正します。
:::

3.  **`platformio.ini`の設定**：これが最も重要なステップです。XIAO Debug Mateでのデバッグを有効にし、ボードを正しく認識させるには、プロジェクトのルートにある`platformio.ini`ファイルを変更する必要があります。

    **Seeed Studioボードサポートの追加：**
    Seeed Studio開発ボードはデフォルトのPlatformIOレジストリには含まれていませんが、**サードパーティリポジトリ**で管理されています。これらを使用するには、設定でリポジトリURLを指定する必要があります。

    `platform`パラメータを以下のURLに設定する必要があります：
    `https://github.com/Seeed-Studio/platform-seeedboards`

    設定ファイルは、このカスタムリポジトリからボード定義をダウンロードし、アップロードとデバッグに使用するツールを指定するようPlatformIOに指示します。XIAO Debug Mateは標準的な**CMSIS-DAP**デバッガーとして機能します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/18.png" style={{width:1000, height:'auto'}}/></div>

    以下は、さまざまなXIAOモデルに対する推奨`platformio.ini`設定です。お使いのボードに対応する内容をコピーしてください。最新のボードサポートファイルを確実に入手するため、GitHubからの開発版プラットフォームを使用しています。

<Tabs>
<TabItem value="rp2350" label="XIAO RP2350" default>

```ini
[env:seeed_xiao_rp2350]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2350
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```

</TabItem>
<TabItem value="rp2040" label="XIAO RP2040">

```ini
[env:seeed_xiao_rp2040]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2040
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="samd21" label="XIAO SAMD21">

```ini
[env:seeed-xiao-samd]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-samd
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="nrf52840" label="XIAO nRF52840">

nRF52840の場合、PlatformIOは2つのボードサポートパッケージを提供しています。プロジェクトの要件に合うものを選択してください。

**Mbed Core：**
```ini
[env:seeed-xiao-mbed-nrf52840]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mbed-nrf52840
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```

**Adafruit Core：**
```ini
[env:seeed-xiao-afruitnrf52-nrf52840]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="ra4m1" label="XIAO RA4M1">

RA4M1は特別なケースであることに注意してください。アップロードには`pyocd`を使用しますが、デバッグには依然として`cmsis-dap`を使用します。

```ini
[env:seeed-xiao-ra4m1]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-ra4m1
framework = arduino
upload_protocol = pyocd
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="mg24" label="XIAO MG24">

```ini
[env:seeed-xiao-mg24]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mg24
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
</Tabs>

`platformio.ini`ファイルを保存した後、次回ビルドまたはデバッグを行う際に、PlatformIOが必要なツールチェーンとパッケージを自動的にダウンロードします。

### ステップバイステップデバッグ

ステップバイステップ実行は、コードのロジックを追跡し、バグを特定するためのコア機能です。

1.  **ハードウェアの接続**：XIAOボードをXIAO Debug Mateに接続します。Debug MateをUSB-Cケーブルでコンピュータに接続します。
2.  **デバッグの開始**：デバッグセッションは2つの方法で開始できます：
    *   `F5`キーを押す。
    *   「Run and Debug」ビュー（アクティビティバーのバグアイコン）に移動し、上部の緑色の「Start Debugging」矢印をクリックする。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/19.png" style={{width:1000, height:'auto'}}/></div>

3.  **デバッグコントロール**：PlatformIOがコードをコンパイルし、Debug Mate経由でXIAOにアップロードし、`main()`または`setup()`の最初の行で実行を一時停止します。エディタの上部にデバッグツールバーが表示され、プログラムフローを制御できます：
    *   **Continue（F5）**：次のブレークポイントにヒットするか、プログラムが終了するまで実行を再開します。
    *   **Step Over（F10）**：現在の行を実行します。行に関数呼び出しが含まれている場合、関数全体を実行して次の行で停止します。
    *   **Step Into（F11）**：現在の行を実行します。行に関数呼び出しが含まれている場合、デバッガーは関数に入り、その最初の行で停止します。
    *   **Step Out（Shift+F11）**：関数内で一時停止している場合、関数の残りを実行し、呼び出された行に戻ります。
    *   **Restart（Ctrl+Shift+F5）**：現在のデバッグセッションを終了して再開します。
    *   **Stop（Shift+F5）**：デバッグセッションを終了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/20.png" style={{width:1000, height:'auto'}}/></div>

### ブレークポイントデバッグ

プログラムを特定の場所で一時停止させたい場合、ブレークポイントが適切なツールです。

1.  **ブレークポイントの設定**：コードエディタで、一時停止したい行番号の左側にカーソルを移動します。薄い赤い点が表示されます。それをクリックしてブレークポイントを設定します（点が明るい赤色になります）。
2.  **ブレークポイントまで実行**：デバッグセッションを開始します（`F5`）。プログラムはフルスピードで実行され、ブレークポイントのある行に到達すると自動的に一時停止します。
3.  **ブレークポイントの管理**：「Run and Debug」サイドパネルの「BREAKPOINTS」セクションに、すべてのアクティブなブレークポイントが一覧表示されます。ここから有効化、無効化、削除ができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/21.png" style={{width:1000, height:'auto'}}/></div>

### RAM読み取り/書き込み

プログラムがブレークポイントで一時停止している間、変数の状態を検査し、さらには変更することができます。

1.  **変数の表示（読み取り）**：「Run and Debug」サイドパネルの「VARIABLES」セクションに、現在のスコープ内のすべてのローカル変数とグローバル変数、およびそれらの現在の値が表示されます。
2.  **変数の監視**：特定の変数や式を監視したい場合は、「WATCH」セクションに移動し、`+`アイコンをクリックして変数名（例：`myVariable`またはメモリアドレスを見るための`&myVariable`）を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/22.png" style={{width:1000, height:'auto'}}/></div>

3.  **変数の変更（書き込み）**：「VARIABLES」または「WATCH」セクションで、変数の値をダブルクリックして新しい値を入力できることがよくあります。Enterキーを押して変更を適用します。これは、プログラムを再起動することなく異なる条件をテストするのに非常に便利です。


## トラブルシューティング

### Q1：XIAO RA4M1をブリックしてしまった場合、修復する方法はありますか？

ブートローダーを再フラッシュしてデバイスを復元することを試すことができます。XIAO RA4M1モデルの場合、ブートローダー復旧については**[この方法](#for-seeed-studio-xiao-ra4m1-2)**を参照してください。

Bootloaderを復元する際にエラーが発生した場合は、XIAO RA4M1をコンピュータに接続されたXIAO Debug Mateに接続してみてください。XIAO RA4M1のBボタンを押し続けながら、同時にRボタンを一度クリックし、その後RとBの両方を離します。その後、Bootloaderを再度フラッシュしてください。

Bootloaderをフラッシュした後、Arduinoなどのソフトウェアを使用してファームウェアの再更新を試みてください。これにより通常は機能が復元されます。成功しない場合、デバイスは永続的に損傷し、修復不可能な可能性があります。XIAO Debug Mateでファームウェアをフラッシュする行為は、すべての責任を負う必要がある場合があります。


### Q2: デバイスがブリック状態になったかどうかはどのように判断できますか？

XIAOデバイスが損傷しているかどうかを判断する最も簡単な方法は、コンピュータに接続してもシリアルポート接続が表示されないことです。Bボタンを押し続けてからコンピュータに接続しても、デバイスがシリアルポート接続を表示しない場合、デバイスは損傷しています。


### Q3: 損傷した機器は修理できますか？技術サポートに連絡して交換を依頼できますか？

XIAOデバイスの損傷は通常、パーティション分割やBootloaderファイルの問題によって引き起こされます。これは通常、Bootloaderファイルを再フラッシュすることで解決できます。これが失敗した場合、現在のところ代替解決策はありません。ユーザーはこの操作を自分で実行することに対して完全な責任を負わなければならないため、フラッシュコマンドとファームウェアが検証済みで有効であることを確認してください。


## リソース

- **[ZIP]** [XIAO_Debug_Mate_DAPLink_Package-v1.0](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_DAPLink_Package-v1.0.zip)


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
