---
title: Seeed Studio XIAO nRF54L15 Sense Zigbee
description: |
keywords:
  - xiao
  - nrf54l15
  - zigbee
  - ncs
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_0_1.webp
slug: /ja/xiao_nrf54l15_zigbee
sku: 101991422
last_update:
  date: 1/27/2026
  author: Brandy
---

このチュートリアルでは、Seeed Studio **XIAO nRF54L15** 開発ボードで [Zigbee](https://en.wikipedia.org/wiki/Zigbee) アプリケーションを実装する方法を説明します。このボードは **Wi-Fi**、**Bluetooth Low Energy (BLE)**、**Zigbee** 接続を組み合わせており、**IoT アプリケーション** に最適です。このガイドの例では、NCS を使用して Zigbee 機能を実現します。



:::note 前提条件：nRFConnect SDK の使用

NCS の準備がまだの場合は、**[入門ガイド](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/#nrfconnect-sdk-usage)** を参照してください。

nRF Connect SDK が完全にダウンロードされていない、または問題がある可能性を心配している場合は、以下の方法でダウンロードした nRF Connect SDK の整合性と正確性を確認できます。**Manage west workspace** を選択し、次に **West Update** を選択します（下図参照）。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/26.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/27.png" style={{width:800, height:'auto'}}/></div>

:::
## 目次
- [Zigbee 概要](#Zigbee-概要)
  - [Zigbee データモデル](#Zigbee-データモデル)
  - [Zigbee ネットワークアーキテクチャ](#Zigbee-ネットワークアーキテクチャ)
    - [ネットワークトポロジ](#ネットワークトポロジ)
- [NCS Zigbee の開始](#NCS-Zigbee-の開始)

## Zigbee 概要

Zigbee は IEEE 802.15.4 標準に基づく **低電力**、**低帯域幅** のワイヤレス通信プロトコルです。**ホームオートメーション**、**スマートシティ**、**産業制御** などの IoT シナリオに特化しており、動的環境での信頼性の高い通信のための堅牢なメッシュネットワーク機能を提供します。

- Zigbee 関連の内容について簡単に説明します。アプリケーション例を直接参照したい場合は、先に進むこともできます。
       - [NCS Zigbee の開始](#NCS-Zigbee-の開始)

### Zigbee データモデル

Zigbee 通信は **Zigbee Cluster Library (ZCL)** に依存しており、これはデバイスがその機能をどのように整理し、相互作用するかを定義します。主要なコンポーネントには以下が含まれます：

1. **デバイスタイプ**
    Zigbee デバイス（スイッチ、センサー、ライトなど）は特定の動作で事前定義されており、機能的な **クラスタ** にグループ化されています。

2. **クラスタ**
    クラスタは以下の論理的なグループです：

   - **属性**：明度や温度などのデバイス状態を表します。
   - **コマンド**：ライトをオンにしたり、明度を 50% に設定したりするアクションをトリガーします。

   例：

   - **On/Off クラスタ**：電源などのバイナリ状態を制御します。
   - **Level Control クラスタ**：強度や明度を調整します。
   - **Temperature Measurement クラスタ**：温度測定値を送信します。
   - **Scenes クラスタ**：プリセット設定を保存・呼び出しします。

3. **属性とコマンド**
    属性はデバイスデータ（状態、設定など）を保存し、コマンドはアクションを開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Zigbee ネットワークアーキテクチャ

Zigbee ネットワークは 3 つの主要なノードタイプで構成されます：

1. **Zigbee コーディネータ (ZC)**  
   - ネットワークの中央ハブとして機能します。  
   - ネットワークの作成、デバイス認証、アドレス割り当てを処理します。  
   - ネットワークの初期化と管理を担当します。  
   - 各 Zigbee ネットワークには **1 つのコーディネータ** のみ存在できます。  

2. **Zigbee ルータ (ZR)**  
   - デバイス間でメッセージを中継してネットワーク範囲を拡張します。  
   - 追加デバイスのネットワーク参加をサポートします。  
   - 通常は主電源で動作し、継続的な動作と信頼性の高いメッセージ中継を確保します。  
   - バッテリー駆動のルータも可能ですが、エネルギー需要が高いため一般的ではありません。 

 :::tip

もちろん、ルータは必須ではありません。距離が短い場合、ルータは省略できます。例えば、次のデモではルータを使用しません。

:::

3. **Zigbee エンドデバイス (ZED)**  
   - 親ノード（コーディネータまたはルータ）と通信する軽量で電力効率の良いデバイスです。  
   - 他のデバイスにメッセージをルーティングしません。  
   - バッテリー動作に最適化されており、通常はエネルギーを節約するためにスリープモードに入ります。

:::note

- **アドレッシングとルーティング**：
  - Zigbee は 16 ビットアドレッシングスキームを使用します。デバイスは直接アドレッシングと間接アドレッシングの組み合わせで通信します。  
  - ルーティング決定は、AODV（Ad hoc On-demand Distance Vector）などのアルゴリズムを使用してルータによって行われます。  

- **電力管理**：
  - Zigbee エンドデバイスは低消費電力に最適化されています。多くの場合スリープモードで動作し、必要な時のみ起動します。  
  - ルータとコーディネータは一般的に主電源で動作し、一貫した可用性を確保します。

:::

#### ネットワークトポロジ

Zigbee は、アプリケーション要件と環境に応じて、3 つの主要なネットワークトポロジをサポートします：

#### 1. メッシュトポロジ

- 単一のコーディネータと複数のルータが自己修復可能で堅牢なネットワークを形成します。  
- 通信パスが中断された場合、デバイスは動的にメッセージを再ルーティングでき、高い信頼性を確保します。  
- 広範囲のカバレッジと冗長性を必要とする大規模ネットワークに最適です。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **主な特徴**：  
  - 動的再ルーティングにより高い信頼性を確保します。  
  - スケーラブルなカバレッジで大規模ネットワークをサポートします。  
  - 自己修復メカニズムにより耐障害性が向上します。  

#### 2. ツリートポロジ

- コーディネータが階層構造のルートとして機能し、ルータがブランチを形成します。  
- 各ブランチには複数のエンドデバイスまたは追加のルータを持つことができ、ツリー状の構造を作成します。  
- 通信は階層パスに依存するため、潜在的な単一障害点が発生します。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **主な特徴**：  
  - 構造化された環境でうまく機能します。  
  - メッシュネットワークよりもセットアップと管理が簡単です。  
  - ブランチ障害に脆弱で、サブネットワーク全体が切断される可能性があります。  

#### 3. スタートポロジ

- すべてのデバイスがコーディネータと直接通信します。  
- 展開は簡単ですが、コーディネータが単一障害点になります。  
- デバイスがコーディネータの近くにある小規模ネットワークに最適です。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **主な特徴**：  
  - セットアップと管理が簡単です。  
  - 範囲とデバイス容量の制約により、スケーラビリティが制限されます。  
  - すべての通信をコーディネータに依存するため、耐障害性が低下します。  

:::tip

次のデモもこのタイプのトポロジです
:::

## NCS Zigbee の開始

### ハードウェアの準備

3 つの XIAO nRF54L15 ボードを準備する必要があります。

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-114993697-xiao-nrf54l15-sense_pre-soldered_.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54L15-Sense-Pre-Soldered-p-6500.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**図に示すようにデバイスを接続してください**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/12.png" style={{width:800, height:'auto'}}/></div><br/>

### ソフトウェアの準備

**ステップ 1.** Zigbee R23 プラグインをインストールします

- **NCS** プラグインアイコンをクリック -> **Create a new application** を選択し、モードを **Browse nRF Connect SDK Add-on Index** として選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/1.png" style={{width:800, height:'auto'}}/></div>

- **R23** を検索し、**Zigbee R23 nRF Connect** -> **V1.2.1** に移動します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/2.png" style={{width:800, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/3.png"style={{width:800, height:'auto'}}/></div><br/>

- 最新バージョンを選択 -> ワークスペースディレクトリを選択して作成します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.5.png"style={{width:800, height:'auto'}}/></div><br/>
:::note

Zigbee プラグインが完全にインストールされるまで待ち、NCS バージョンは自動的に v2.9.2 に切り替わります。
プラグインは非常に大きい（4GB以上）ため、ダウンロード処理には長時間かかります。ネットワーク接続を安定に保ち、途中でプロセスを中断しないでください。

:::

- 作成完了時にポップアップ通知が表示されます。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/6.png"style={{width:800, height:'auto'}}/></div><br/>

**ステップ 2.** コードの準備

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/8.png"style={{width:400, height:'auto'}}/></div><br/>

- Seeed Studio の公式リポジトリを参照してサンプルを取得してください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples " target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

- または、Git環境が設定されている場合は、先ほど指定したファイルディレクトリに直接コードをプルできます。

```Linux
git clone https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/7.png"style={{width:800, height:'auto'}}/></div><br/>

サンプルコードを取得した後、簡単に理解してみましょう：

1.boardsディレクトリには、異なる開発ボード間のハードウェア差異（ピンやペリフェラルなど）に適応するために使用されるボードレベルの設定ファイルが含まれています：
- 内部の.overlayファイルは「Device Tree Overlayファイル」で、チップ/開発ボードのデフォルトハードウェア設定を変更するために使用されます；
- 例えば、xiao_nrf54l15_nrf54l15_cpuapp.overlayは、XIAO nRF54L15専用に書かれた設定です（例：コード内でD3ピンをLED制御ピンにマッピング）；

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/10.5.png"style={{width:800, height:'auto'}}/></div><br/>

- その他のファイル（例：nrf54l15dk_xxx.overlay）は、Nordicの公式開発キット（DK）向けのものなので、気にする必要はありません—xiao_xxxで始まるファイルのみに注目してください。

2. includeディレクトリはヘッダーファイルが保存される場所です：
- zb_dimmable_light.hは、Zigbee調光可能ライトの機能ヘッダーファイルで、ライトノードのZigbeeプロトコル関連機能とパラメータ（例：明度制御、ステータス報告）を定義します。

3. srcディレクトリはコアコードが保存される場所です：
 - main.cはプロジェクト全体のエントリファイルで、プログラム起動ロジック、Zigbeeネットワーク初期化、LED制御ロジック（例：スイッチコマンド受信後のD3ピンレベル制御）が含まれています。

4. ルートディレクトリのファイル これらはプロジェクトのビルドと設定ファイルです（NCS/Zephyrフレームワークの標準ファイル）：

- CMakeLists.txt：プロジェクトがコンパイルする必要があるファイルと依存するライブラリを定義するCMakeビルドスクリプト；
- Kconfig.sysbuild：プロジェクトのコンパイルオプションを設定（例：Zigbee機能の有効化、デバッグログ）；
- prj.conf：プロジェクトのコア設定ファイルで、チップパラメータとZephyrシステムパラメータを設定（例：GPIO機能の有効化、Zigbeeプロトコルスタック）；
- sample.yaml：プロジェクトの基本情報を記述するNCSサンプル設定ファイル（例：サポートされる開発ボード、機能説明）。

### コードのコンパイルとフラッシュ

このガイドでは、既存のアプリケーション（light_switchを例として）をVS Code環境に追加し、ターゲットハードウェア（xiao_nrf54l15を例として）にコンパイルしてフラッシュする方法を説明します。

**ステップ 1.** アプリケーションをワークスペースに追加

- APPLICATIONSパネルを見つける：サイドバーで「APPLICATIONS」という名前のパネルを見つけます。

- 既存のアプリケーションを追加：パネルの右上角にある「+」（既存のアプリケーションを追加）アイコンをクリックします。下図の赤いボックスで示されています。

- アプリケーションフォルダを選択：ポップアップしたファイルブラウザウィンドウで、プロジェクトが配置されているフォルダ（例：D:...\workspace）に移動します。リストから、フラッシュしたいアプリケーションフォルダ—この例ではlight_switch—を選択し、「Open」ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/14.6.png"style={{width:800, height:'auto'}}/></div><br/>


**ステップ 2.** コンパイルオプションの作成と設定

- ビルド設定を追加：「APPLICATIONS」パネルで、新しく追加されたlight_switchプロジェクトが表示されます。その下の「+ Add build configuration」をクリックします。

- コンパイルパラメータを設定：開いた「Add Build Configuration」ページで、以下の設定を行います：SDK and Toolchain：インストールされたnRF Connect SDKとツールチェーンは通常自動的に選択されます—バージョンが正しいことを確認してください。（先ほどダウンロードしたプラグインが完全であれば、ここでV2.9が自動的に選択されます。）

- Board target：これが最も重要なステップです。コードが実行されるハードウェアを選択する必要があります。「Browse」をクリックするか、入力ボックスで直接検索します。図に示すように、選択する必要があるターゲットボードはxiao_nrf54l15/nrf54l15/cpuappです。「Custom」をチェックして、公式にサポートされていないボードを素早くフィルタリングまたは検索できます。

- その他の設定：特別な要件がない限り、Kconfig fragmentsやDevicetree overlaysなどの他の設定は、今のところデフォルトのままにしておきます。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/15.png"style={{width:800, height:'auto'}}/></div><br/>
:::note
まず**「Custom」**をチェックして、公式にサポートされていないボードを素早くフィルタリングまたは検索し、その後選択する必要があるターゲットボード：**xiao_nrf54l15/nrf54l15/cpuapp**を見つけることをお勧めします。直接検索すると、トラブルシューティングプロセスに時間がかかりすぎ、ターゲットボードが見つからない可能性があります。

:::


:::note

- ボードレベルファイルを更新してください。ファイルが長期間更新されていない場合は、使用前に更新することをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/11.png" style={{width:800, height:'auto'}}/></div><br/>

:::
詳細なチュートリアルについては、以下のリンクを参照してください。
      **[入門ガイド](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/#nrfconnect-sdk-usage)**。

**ステップ 3.** コンパイルとフラッシュ

- ハードウェアを接続：ターゲットハードウェア（例：XIAO nRF54L15開発ボード）がデータケーブルを介してコンピュータに適切に接続されていることを確認します。

- ターミナルを開く：**NRF CONNECT拡張機能**のWELCOMEパネルで、「Open terminal」オプションを見つけてクリックします（図の赤いボックスでマークされています）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/21.png" style={{width:250, height:'auto'}}/></div><br/>

- プロジェクトディレクトリに移動：ターミナルで、cdコマンドを使用してプロジェクトフォルダに入ります。

```Linux
cd D:\code\nrf54115_zigbee\workspace\light_switch\.lbuild 
west flash
```

- このパスを実際のプロジェクトパスに置き換えてください。

- フラッシュプロセスを監視：ターミナルは、コンパイル進行状況、デバッガ（例：CMSIS-DAP）への接続、フラッシュ消去、データ書き込みプロセスを含む詳細なログを出力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/17.png" style={{width:800, height:'auto'}}/></div><br/>

- 同様に、同じ手順で残りの2つのコードプロジェクトをフラッシュします。
- コードが正常にフラッシュされたかどうか心配な場合は、確認する方法があります：

  -  シリアルポート経由で開発ボードに接続し、シリアルポート出力を観察します（この方法はフラッシュ結果を確認するだけでなく、プログラム実行ログを直感的に表示でき、確認ロジックがより明確になります）。

### Zigbeeへの接続

**ステップ 1.** Zigbeeへの接続

1. **Coordinatorプログラム**がロードされたXIAO開発ボードの電源を入れて起動します。
2. シリアルポートアシスタントでログを観察し、コーディネータがZigbeeスタック初期化とネットワークパラメータ設定を完了し、シリアルポート情報が出力されるまで待ちます。
3. コーディネータの電源を入れたままにしてネットワークを継続的に維持し、後続のデバイスがネットワークに参加するための基盤を提供します。

**ステップ 2.** 電球端のネットワーク参加設定

1. 電源が入ったコーディネータネットワークの準備ができた後、Light BulbプログラムがロードされたXIAO開発ボードの電源を入れて起動します。

2. 電球端は自動的にネットワークスキャンを開始し、利用可能なZigbeeコーディネータネットワークを見つけます。
3. シリアルポートログを確認して、電球側がコーディネーターネットワークに正常に参加したことを確認します。
コアログの参考：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/22.png" style={{width:800, height:'auto'}}/></div><br/>

**ステップ 3.** ライトスイッチ側のネットワーク参加とデバイス検出

1. 電球側がネットワークに正常に参加したことを確認した後、Light Switch プログラムがロードされた XIAO 開発ボードに電源を入れて起動します（必要に応じてオンボードボタンでファクトリーリセットをトリガーして、ネットワークの再スキャンを確実に行います）。
2.ライトスイッチ側は自動的に同じコーディネーターネットワークをスキャンして参加します。
コアログの参考：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/23.png" style={{width:600, height:'auto'}}/></div><br/>
3. 電球側のシリアルポートログを確認して、コマンドが受信・実行され、LED がオン/オフ動作を完了することを確認します。コアログの参考：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/243.png" style={{width:400, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/25.png" style={{width:400, height:'auto'}}/></div><br/>

### Zigbee ネットワークリセット手順

**ステップ 1.** コーディネーターのネットワークリセット

ネットワークコーディネーターのオンボードボタンを押して、Zigbee ネットワークリセットを完了します。

**ステップ 2.** ライト制御デバイス（ライトスイッチ/電球）のリセットと再参加

1. ライト制御デバイス（ライトスイッチ/電球）のオンボードボタンを長押しします；
2. デバイスのリセットボタンを押します；
3. オンボードボタンを離します。デバイスはリセットを完了し、自動的に新しい Zigbee ネットワークに参加します。

:::note

> **重要：** デバイスがバッテリーで動作している場合、シリアルポートを明示的に無効にする必要があります。そうしないと、プログラムの起動に失敗します。

:::

## 結果

すべてが順調に進めば、以下の結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/result.gif" style={{width:600, height:'auto'}}/></div>

### よくある質問

1.インストールルートディレクトリとして過度に長いディレクトリを使用しないでください。そうしないと、Windows で例を コンパイルする際に、ディレクトリ名が長すぎることによるコンパイルエラーが頻繁に発生します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.png" style={{width:1000, height:'auto'}}/></div><br/> 


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
