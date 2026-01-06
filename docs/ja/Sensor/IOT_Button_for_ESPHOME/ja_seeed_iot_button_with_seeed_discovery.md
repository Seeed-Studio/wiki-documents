---
description: Seeed HA Discovery 統合を使用して Seeed Studio IoT Button V2 を Home Assistant に接続し、シームレスなスマートホーム制御を実現します。
title: Seeed HA Discovery 経由で IoT Button を Home Assistant に接続
keywords:
  - IoT Button
  - Home Assistant
  - Seeed HA Discovery
  - ESP32-C6
  - Smart Home
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /ja/iot_button_v2_ha_discovery
last_update:
  date: 12/17/2025
  author: Citric
---

# Seeed HA Discovery 経由で IoT Button V2 を Home Assistant に接続

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/1.png" style={{width:800, height:'auto'}}/></div>

Seeed Studio IoT Button V2 は ESP32-C6 を搭載した多機能スマートスイッチで、カスタマイズ可能な RGB LED インジケーター、プログラム可能なイベントトリガー、USB-C 充電機能を提供します。このプロジェクトでは、Seeed HA Discovery 統合を使用して IoT Button V2 を Home Assistant に接続する方法をガイドします。これは ESP32 デバイスを Home Assistant に簡単に接続し、WebSocket 経由で自動検出とリアルタイム通信を可能にするソリューションです。

ESPHome を使用する場合と比較して、このソリューションはディープスリープに適したボタン使用ケースに特化して設計されています。ESPHome は現在 IoT Button V2 に対してライトスリープのみをサポートしており、これは時間の経過とともに高い電力消費につながり、実際のボタン押下がエンティティを確実にトリガーする前に専用の押下でデバイスを起動する必要があります。このファームウェアと Seeed HA Discovery 統合により、ボタンは適切にディープスリープに入り、ボタン操作で直接起動できるため、これらの制限を回避し、より応答性が高く電力効率的な体験を提供します。

## 入門ガイド

このプロジェクトでは、3つの主要な段階を説明します：ウェブベースのフラッシャーを使用して IoT Button V2 にファームウェアをフラッシュすること、HACS（Home Assistant Community Store）経由で Seeed HA Discovery 統合をインストールすること、そしてスマートホーム自動化のために Home Assistant でボタンを検出することです。

### 必要な材料

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT Button V2</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green は、ホームオートメーションの最も簡単でプライバシーに配慮した方法です。簡単なセットアップを提供し、すべてのスマートデバイスを1つのシステムで制御でき、すべてのデータはデフォルトでローカルに保存されます。このボードは活発な Home Assistant エコシステムの恩恵を受け、オープンソースにより毎月改善されます。

このチュートリアルでは Home Assistant Green を Home Assistant ホストとして使用することをお勧めしますが、Supervisor を備えた任意の Home Assistant ホストを使用することもできます。

:::tip Home Assistant のインストール
Seeed Studio 製品の一部について Home Assistant のインストール方法も書いていますので、参考にしてください。

- **[ODYSSEY-X86 での Home Assistant 入門](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant/)**
- **[reTerminal での Home Assistant 入門](https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant/)**
- **[LinkStar H68K/reRouter CM4 での Home Assistant 入門](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)**

Seeed Studio 製品を使用していない場合は、Home Assistant 公式ウェブサイトで他の製品への Home Assistant インストール方法を確認して学習することもできます。

- **[Home Assistant インストール](https://www.home-assistant.io/installation/)**
:::

### 事前準備

このプロジェクトを開始する前に、以下を確認してください：

- 動作中の Home Assistant インスタンス（Home Assistant OS、Container、または Core）
- Home Assistant に HACS（Home Assistant Community Store）がインストールされていること
- Google Chrome または Microsoft Edge ブラウザを搭載したコンピューター（ウェブベースのファームウェアフラッシュに必要）
- WiFi ネットワーク名（SSID）とパスワード
- IoT Button V2 と接続用の USB-C ケーブル

:::tip
まだ HACS をインストールしていない場合は、[公式 HACS インストールガイド](https://hacs.xyz/docs/setup/download/)に従って最初にセットアップしてください。Seeed HA Discovery 統合をインストールするには HACS が必要です。
:::

## IoT Button V2 にファームウェアをフラッシュ

[Seeed HA Discovery](https://github.com/limengdu/Seeed-Homeassistant-Discovery) は ESP32/nRF52840 デバイスを Home Assistant に簡単に接続するための完全なソリューションであり、最初のステップは IoT Button V2 に適切なファームウェアをフラッシュすることです。

:::caution
ウェブベースのファームウェアフラッシャーは **IoT Button V2 のみと互換性があります**。現在、IoT Button V1 での使用はサポートされていません。
:::

### ステップ 1. ウェブフラッシャーにアクセス

Google Chrome または Microsoft Edge ブラウザを開き、Seeed HA Discovery ウェブフラッシャーにアクセスします：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Seeed-Homeassistant-Discovery/flasher/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐフラッシュ 🖱️</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/2.png" style={{width:1000, height:'auto'}}/></div>

:::note
Web Serial は [Google Chrome と Microsoft Edge ブラウザで利用可能です（ただし iOS デバイスでは利用できません）](https://esphome.github.io/esp-web-tools/)。デスクトップまたはラップトップコンピューターでサポートされているブラウザを使用していることを確認してください。
:::

### ステップ 2. IoT Button V2 を接続

:::caution
Zigbee/ESPHome ファームウェアを使用している場合は、デバイスが自動的にスリープモードに入るかどうかに注意してください。デバイスがスリープモードに入ると、そのシリアルポートを見つけることができない場合があります。ファームウェアをフラッシュする前に、デバイスの青色 LED が点灯し、起動状態を維持していることを確認してください。
:::

**ステップ 2.1.** USB-C ケーブルを使用して IoT Button V2 をコンピューターに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/3.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 2.2.** ウェブフラッシャーページで、**IoT Button V2** ファームウェアオプションを見つけて **"Connect"** ボタンをクリックします。

**ステップ 2.3.** 利用可能なシリアルポートを表示するブラウザポップアップが表示されます。IoT Button V2 に対応するポート（通常は USB JTAG またはシリアルとラベル付けされています）を選択し、**"Connect"** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/5.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 3. ファームウェアをフラッシュ

**ステップ 3.1.** 接続されたら、**"Install IoT Button V2"** ボタンをクリックしてファームウェアアップロードプロセスを開始します。

**ステップ 3.2.** 次に、デバイスを消去するかどうかを選択する必要があります。ネットワーク認証情報を失うことなくデバイスファームウェアのみを更新したい場合は、このオプションをチェックせずに Next をクリックできます。別のファームウェアから切り替える場合は、最初のファームウェアフラッシュ時にこのボタンをチェックすることを強くお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/7.png" style={{width:600, height:'auto'}}/></div>

フラッシャーは既存のファームウェアを消去し、新しい Seeed HA Discovery ファームウェアをアップロードします。このプロセスは通常 1-2 分かかります。このプロセス中はデバイスを切断しないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/8.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.3.** "Installation complete!" メッセージが表示されたら、ファームウェアが正常にフラッシュされました。

### ファームウェア機能の理解

ディープスリープ機能を備えた IoT Button V2 ファームウェアは、いくつかの主要な機能を提供します：

**電源管理：**

- deep_sleep コンポーネントは、一定時間後に ESP32 でディープスリープモードに自動的に入るために使用できます。これは特にバッテリーで動作するノードで有用で、可能な限りエネルギーを節約する必要があります[[1]](https://esphome.io/components/deep_sleep/)。
- ボタンは非アクティブ状態が 3 分続くとライトスリープモードに入り、バッテリー電力を節約します
- スリープからの復帰はボタンを押すことでトリガーされます

**ボタンイベント：**

- **シングルプレス**: Home Assistant でシングルクリックイベントをトリガー
- **ダブルプレス**: Home Assistant でダブルクリックイベントをトリガー
- **ロングプレス**: ロングプレスイベントをトリガー（通常 1 秒以上）
- **トリプルプレス**: 開発者モードに入り、デバイスが 3 分間起動状態を維持し、シリアルポート接続を失うことなくファームウェアをフラッシュできます
- **ロングプレス（6 秒以上）**: LED が点滅した後、ボタンを離すとネットワーク再設定モードが開始され、新しい Wi-Fi ネットワークを設定できます

**LED フィードバック：**

- RGB LED がボタン押下と接続状態の視覚的フィードバックを提供
- 異なる状態に対するカスタマイズ可能な LED 色

**バッテリー監視：**

- バッテリーレベル推定のための ADC ベースの電圧読み取り
- Home Assistant へのリアルタイムバッテリー状態レポート

<svg
viewBox="0 0 800 450"
width="100%"
height="auto"
style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', display: 'block' }}
>
{/* Background for Dark Mode Support */}
<rect x="0" y="0" width="800" height="450" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />

{/* Header */}
<text x="400" y="35" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1e293b">
    IoT Button V2: ライフサイクル & イベント
</text>

{/* --- ACTIVE STATE (Top Center) --- */}
<g transform="translate(300, 60)">
    <rect x="0" y="0" width="200" height="90" rx="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
    <text x="100" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">ACTIVE STATE</text>
    <line x1="20" y1="35" x2="180" y2="35" stroke="#93c5fd" strokeWidth="1" />
    <text x="100" y="55" textAnchor="middle" fontSize="11" fill="#1e40af">Evaluate Press Type</text>
    <text x="100" y="70" textAnchor="middle" fontSize="11" fill="#1e40af">Send API Event to HA</text>
</g>

{/* --- DEEP SLEEP STATE (Bottom Center) --- */}
<g transform="translate(300, 320)">
    <rect x="0" y="0" width="200" height="80" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="2" />
    <text x="100" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#ffffff">DEEP SLEEP</text>
    <text x="100" y="50" textAnchor="middle" fontSize="11" fill="#94a3b8">Ultra Low Power</text>
    <text x="100" y="65" textAnchor="middle" fontSize="10" fill="#94a3b8">Waiting for GPIO Wakeup</text>
</g>

{/* --- WIFI CONFIG (Left Side) --- */}
<g transform="translate(50, 180)">
    <rect x="0" y="0" width="180" height="90" rx="10" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
    <text x="90" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#6b21a8">WIFI CONFIG</text>
    <line x1="20" y1="35" x2="160" y2="35" stroke="#d8b4fe" strokeWidth="1" />
    <text x="90" y="55" textAnchor="middle" fontSize="10" fill="#7e22ce">AP Mode Active</text>
    <text x="90" y="70" textAnchor="middle" fontSize="10" fill="#7e22ce">Reconfigure Network</text>
</g>

{/* --- DEVELOPER MODE (Right Side) --- */}
<g transform="translate(570, 180)">
    <rect x="0" y="0" width="180" height="90" rx="10" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
    <text x="90" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9a3412">DEVELOPER MODE</text>
    <line x1="20" y1="35" x2="160" y2="35" stroke="#fdba74" strokeWidth="1" />
    <text x="90" y="55" textAnchor="middle" fontSize="10" fill="#c2410c">OTA Updates Enabled</text>
    <text x="90" y="70" textAnchor="middle" fontSize="10" fill="#c2410c">Timeout: 3 Minutes</text>
</g>

{/* --- TRANSITIONS --- */}

{/* Active -> Config (Left) */}
<path d="M300 105 L230 105 L230 160 L140 160 L140 180" fill="none" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowPurple)" />
<rect x="160" y="130" width="60" height="20" rx="4" fill="#ffffff" stroke="#9333ea" strokeWidth="1"/>
<text x="190" y="144" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7e22ce">Hold 6s</text>

{/* Active -> Dev (Right) */}
<path d="M500 105 L570 105 L570 160 L660 160 L660 180" fill="none" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrowOrange)" />
<rect x="580" y="130" width="60" height="20" rx="4" fill="#ffffff" stroke="#ea580c" strokeWidth="1"/>
<text x="610" y="144" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#c2410c">3x Click</text>

{/* Active -> Sleep (Center Down) */}
<path d="M380 150 L380 310" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowGrey)" />
<text x="350" y="240" textAnchor="middle" fontSize="10" fill="#64748b">Task Done</text>

{/* Sleep -> Active (Wakeup) */}
<path d="M420 320 L420 160" fill="none" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowGreen)" />
<rect x="380" y="200" width="80" height="20" rx="4" fill="#ecfdf5" stroke="#10b981" />
<text x="420" y="214" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#047857">Wakeup</text>

{/* Config -> Sleep */}
<path d="M140 270 L140 360 L290 360" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowGrey)" />
<text x="140" y="320" textAnchor="middle" fontSize="10" fill="#64748b" transform="rotate(-90, 130, 320)">Finished</text>

{/* Dev -> Sleep */}
<path d="M660 270 L660 360 L510 360" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowGrey)" />
<text x="675" y="320" textAnchor="middle" fontSize="10" fill="#64748b" transform="rotate(90, 675, 320)">Timeout</text>

{/* LED Legend */}
<g transform="translate(50, 420)">
    <circle cx="10" cy="5" r="4" fill="#22c55e" />
    <text x="20" y="9" fontSize="10" fill="#475569">Press (Green)</text>
    <circle cx="100" cy="5" r="4" fill="#f97316" />
    <text x="110" y="9" fontSize="10" fill="#475569">Dev Mode (Orange)</text>
</g>

<defs>
    <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
    </marker>
    <marker id="arrowGrey" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
    </marker>
    <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#ea580c" />
    </marker>
    <marker id="arrowPurple" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#9333ea" />
    </marker>
</defs>
</svg>

## Seeed HA Discovery 統合をインストール

IoT Button V2 に適切なファームウェアが搭載されたので、次のステップは HACS を介して Home Assistant に Seeed HA Discovery 統合をインストールすることです。

### ステップ 4. HACS をインストール（まだインストールしていない場合）

まだ HACS をインストールしていない場合：

**ステップ 4.1.** Home Assistant Community Store（HACS）をインストールして、Home Assistant 内で Seeed HA Discovery プラグインのインストールを可能にします。

**ステップ 4.2.** https://www.hacs.xyz/docs/use/download/download/#to-download-hacs の公式 HACS インストールガイドに従ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/11.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 4.3.** HACS がシステムに完全に統合されるために、Home Assistant の再起動が必要な場合があります。

### ステップ 5. Seeed HA Discovery リポジトリを追加

**ステップ 5.1.** Seeed HA Discovery GitHub リポジトリに移動します：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Homeassistant-Discovery" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>リポジトリに移動</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**ステップ 5.2.** README セクションで、⚡ **ワンクリックインストール** エリアを見つけて、**OPEN HACS REPOSITORY ON MY HA** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/9.png" style={{width:800, height:'auto'}}/></div>

:::tip
このボタンは自動的に Home Assistant インスタンスにリダイレクトし、HACS リポジトリ追加ページを開きます。
:::

**ステップ 5.3.** Home Assistant URL を表示するリダイレクトページが表示されます。検出された Home Assistant アドレスが正しいことを確認してください（Home Assistant の IP アドレスまたはドメイン名と一致する必要があります）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/10.png" style={{width:600, height:'auto'}}/></div>

- アドレスが正しい場合は、**Open link** をクリックして続行します

- アドレスが間違っている場合は、`http://YOUR_HA_IP:8123` または `https://YOUR_HA_DOMAIN` の形式で正しい Home Assistant URL を手動で入力してください

**ステップ 5.4.** Home Assistant が開き、Seeed HA Discovery リポジトリ URL がすでに入力された HACS リポジトリ追加ダイアログが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/4.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 5.5.** 右下角の **Download** をクリックして、リポジトリを HACS に追加します。プラグインの最新バージョンを使用していることを確認してください。インストールスクリプトが完了したら、変更を適用するために Home Assistant を再起動する必要があります。Settings > System > Restart に移動して UI から Home Assistant を再起動できます。

:::note
ワンクリックボタンが機能しない場合は、以下の手順でリポジトリを手動で追加できます：

1. Home Assistant サイドバーで HACS を開く

2. 右下角のメニューボタン（3つの点）をクリック

3. "Custom repositories" を選択

4. `https://github.com/limengdu/Seeed-Homeassistant-Discovery` を入力し、カテゴリ "Integration" を選択
:::

## WiFi を設定して IoT Button を発見

統合がインストールされたので、IoT Button V2 を WiFi ネットワークに接続し、Home Assistant で発見できるように設定できます。

### ステップ 6. IoT Button V2 で WiFi を設定

**ステップ 6.1.** ファームウェアをフラッシュした後、IoT Button V2 は初期設定用の WiFi アクセスポイント（AP）を作成します。AP 名は通常 `Seeed_IoT_Button_V2_AP` になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/12.png" style={{width:400, height:'auto'}}/></div>

**ステップ 6.2.** スマートフォンまたはコンピューターを使用して、この WiFi アクセスポイントに接続します。

**ステップ 6.3.** キャプティブポータルが自動的に開くはずです。開かない場合は、ウェブブラウザを開いて `http://192.168.4.1` に移動してください。

**ステップ 6.4.** 設定ポータルで、ホーム WiFi ネットワークの認証情報を入力します：

:::note
IoT Button は現在、5G 周波数帯で動作するネットワークをサポートしていないことにご注意ください。
:::

- **SELECTED NETWORK**: あなたの WiFi ネットワーク名
- **PASSWORD**: あなたの WiFi パスワード

**ステップ 6.5.** **"Connect"** をクリックして設定を保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/17.png" style={{width:400, height:'auto'}}/></div>

**ステップ 6.6.** IoT Button V2 が再起動し、WiFi ネットワークに接続されます。RGB LED が青色で表示されます。

### ステップ 7. Home Assistant に IoT Button を追加

**ステップ 7.1.** 再起動後、サイドバーの Settings をクリックして設定メニューを開きます。設定メニュー内で、**Devices & Services** に移動します。

**ステップ 7.2.** IoT Button V2 が WiFi ネットワークに正常に接続されている場合、WiFi 接続後にデバイスが Home Assistant によって自動的に検出されます。デバイスが自動的に検出されない場合は、右下の "Add Integration" をクリックし、"Seeed HA Discovery" を検索して、デバイスの IP アドレスを入力することで手動で追加することもできます。

:::tip
デバイスの IP アドレスは、シリアルポートログまたはルーターのバックエンドから取得できます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/20.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 7.3.** 画面の指示に従って統合設定を完了します。ボタンを家のエリアに割り当てる必要がある場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/21.png" style={{width:500, height:'auto'}}/></div>

**ステップ 7.4.** 設定が完了すると、IoT Button V2 が Home Assistant ダッシュボードに表示され、ボタンイベント、バッテリー状態、LED 制御の利用可能なエンティティが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/1.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 8. オートメーションの作成

IoT Button が接続されたので、Home Assistant でオートメーションを作成できます：

**ステップ 8.1.** **Settings > Automations & Scenes** に移動します。

**ステップ 8.2.** **"Create Automation"** をクリックし、**"Start with an empty automation"** を選択します。

**ステップ 8.3.** **Trigger** では、IoT Button デバイスを選択し、イベントタイプ（シングルプレス、ダブルプレス、またはロングプレス）を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/22.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 8.4.** **Action** では、実行したい動作を選択します（例：ライトをオンにする、シーンをトリガーする、通知を送信する）。

**ステップ 8.5.** オートメーションを保存し、IoT Button を押してテストしてください！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



