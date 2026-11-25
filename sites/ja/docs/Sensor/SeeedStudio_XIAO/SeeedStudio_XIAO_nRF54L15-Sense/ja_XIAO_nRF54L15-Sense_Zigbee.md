---
title: Seeed Studio XIAO nRF54L15 Sense Zigbee
description: ''
keywords:
  - xiao
  - nrf54l15
  - zigbee
  - ncs
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_0_1.webp
slug: /xiao_nrf54l15_zigbee
sku: 101991422
last_update:
  date: 1/27/2026
  author: Brandy
createdAt: '2026-01-27'
updatedAt: '2026-01-27'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54l15_zigbee/
---

このチュートリアルでは、Seeed Studio **XIAO nRF54L15** 開発ボード上で [Zigbee](https://en.wikipedia.org/wiki/Zigbee) アプリケーションを実装する方法を説明します。このボードは **Wi-Fi**、**Bluetooth Low Energy (BLE)**、**Zigbee** 接続を組み合わせており、**IoT アプリケーション**に最適です。本ガイドのサンプルでは、NCS を使用して Zigbee 機能を実現します。



:::note 前提条件: nRFConnect SDK の使用

まだ NCS を準備していない場合は、**[Getting Started Guide](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/#nrfconnect-sdk-usage)** を参照してください。 

nRF Connect SDK が完全にダウンロードされていない、または問題があると心配な場合は、次の方法でダウンロードした nRF Connect SDK の完全性と正しさを検証できます。**Manage west workspace** を選択し、次に **West Update** を選択します。以下の図のようになります。 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/26.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/27.png" style={{width:800, height:'auto'}}/></div>

:::
## 目次
- [Zigbee の概要](#zigbee-の概要)
  - [Zigbee データモデル](#zigbee-データモデル)
  - [Zigbee ネットワークアーキテクチャ](#zigbee-ネットワークアーキテクチャ)
    - [ネットワークトポロジ](#ネットワークトポロジ)
- [NCS Zigbee を始める](#ncs-zigbee-を始める)

## Zigbee の概要

Zigbee は、IEEE 802.15.4 規格に基づく**低消費電力**・**低帯域幅**の無線通信プロトコルです。**ホームオートメーション**、**スマートシティ**、**産業制御**などの IoT シナリオ向けに最適化されており、動的な環境において信頼性の高い通信を実現する堅牢なメッシュネットワーク機能を提供します。

- ここでは Zigbee に関連する内容について簡単に説明します。アプリケーションのサンプルをすぐに参照したい場合は、この部分を飛ばしても構いません。
       - [NCS Zigbee を始める](#ncs-zigbee-を始める)

### Zigbee データモデル

Zigbee 通信は **Zigbee Cluster Library (ZCL)** に依存しており、デバイスがどのように機能を構成し相互作用するかを定義します。主な構成要素は次のとおりです。

1. **デバイスタイプ**
    Zigbee デバイス（例：スイッチ、センサ、照明）は、機能的な**クラスタ**にグループ化された特定の動作であらかじめ定義されています。

2. **クラスタ**
    クラスタは次の論理的なグループです。

   - **属性**: 明るさや温度など、デバイスの状態を表します。
   - **コマンド**: ライトをオンにする、明るさを 50% に設定するなどの動作をトリガーします。

   例:

   - **On/Off Cluster**: 電源などの二値状態を制御します。
   - **Level Control Cluster**: 強度や明るさを調整します。
   - **Temperature Measurement Cluster**: 温度測定値を送信します。
   - **Scenes Cluster**: プリセット構成を保存および呼び出します。

3. **属性とコマンド**
    属性はデバイスのデータ（例：状態、設定）を保持し、コマンドは動作を開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Zigbee ネットワークアーキテクチャ

Zigbee ネットワークは、主に次の 3 種類のノードで構成されます。

1. **Zigbee コーディネータ (ZC)**  
   - ネットワークの中央ハブとして機能します。  
   - ネットワークの作成、デバイス認証、アドレス割り当てを処理します。  
   - ネットワークの初期化と管理を担当します。  
   - 各 Zigbee ネットワークには **1 つのコーディネータ**しか存在できません。  

2. **Zigbee ルータ (ZR)**  
   - デバイス間でメッセージを中継することでネットワーク範囲を拡張します。  
   - 追加のデバイスがネットワークに参加することをサポートします。  
   - 安定した動作と信頼性の高いメッセージ中継を確保するため、通常は商用電源で駆動されます。  
   - バッテリ駆動のルータも可能ですが、エネルギー消費が多いため一般的ではありません。 

 :::tip

もちろん、ルータは必須ではありません。距離が短い場合は、ルータを省略できます。例えば、次のデモではルータを使用しません。

:::

3. **Zigbee エンドデバイス (ZED)**  
   - 軽量で省電力なデバイスで、親ノード（コーディネータまたはルータ）のいずれかと通信します。  
   - 他のデバイスへのメッセージをルーティングしません。  
   - バッテリ駆動に最適化されており、エネルギー節約のため通常はスリープモードに入ります。

:::note

- **アドレッシングとルーティング**:
  - Zigbee は 16 ビットのアドレッシング方式を使用します。デバイスは直接アドレス指定と間接アドレス指定を組み合わせて通信します。  
  - ルーティングの決定は、AODV（Ad hoc On-demand Distance Vector）などのアルゴリズムを使用するルータによって行われます。  

- **電源管理**:
  - Zigbee エンドデバイスは低消費電力に最適化されています。必要なときだけ動作し、それ以外はスリープモードで動作することが多いです。  
  - ルータとコーディネータは、一般的に常時利用可能とするため商用電源で駆動されます。

:::

#### ネットワークトポロジ

Zigbee は、アプリケーション要件と環境に応じて、主に 3 種類のネットワークトポロジをサポートします。

#### 1. メッシュトポロジ

- 1 つのコーディネータと複数のルータで自己修復性の高い堅牢なネットワークを形成します。  
- 通信経路が途切れた場合、デバイスは動的にメッセージの経路を再設定でき、高い信頼性を確保します。  
- 広いカバレッジと冗長性を必要とする大規模ネットワークに最適です。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **主な特長**:  
  - 動的な経路再設定により高い信頼性を実現。  
  - スケーラブルなカバレッジを持つ大規模ネットワークをサポート。  
  - 自己修復メカニズムにより耐障害性が向上。  

#### 2. ツリートポロジ

- コーディネータが階層構造のルートとして機能し、ルータが枝を形成します。  
- 各枝には複数のエンドデバイスや追加のルータを持つことができ、木構造のようなネットワークを形成します。  
- 通信は階層的な経路に依存するため、単一点障害が発生する可能性があります。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **主な特長**:  
  - 構造化された環境に適しています。  
  - メッシュネットワークよりもセットアップと管理が容易です。  
  - 枝の障害に弱く、サブネットワーク全体が切断される可能性があります。  

#### 3. スタートポロジ

- すべてのデバイスがコーディネータと直接通信します。  
- 導入が簡単ですが、コーディネータが単一点障害となります。  
- デバイスがコーディネータの近くに配置される小規模ネットワークに最適です。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **主な特長**:  
  - セットアップと管理が容易。  
  - 通信距離とデバイス数の制約によりスケーラビリティが限定されます。  
  - すべての通信がコーディネータに依存するため、耐障害性が低くなります。  

:::tip

次のデモもこのタイプのトポロジです。
:::

## NCS Zigbee を始める

### ハードウェアの準備

XIAO nRF54L15 ボードを 3 枚用意する必要があります。

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
    <strong><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**図に示すようにデバイスを接続します**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/12.png" style={{width:800, height:'auto'}}/></div><br/>

### ソフトウェアの準備

**Step 1.** Zigbee R23 プラグインをインストールします

- **NCS** プラグインアイコンをクリックし、**Create a new application** を選択して、モードを **Browse nRF Connect SDK Add-on Index** に設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/1.png" style={{width:800, height:'auto'}}/></div>

- **R23** を検索し、**Zigbee R23 nRF Connect** -> **V1.2.1** に進みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/2.png" style={{width:800, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/3.png"style={{width:800, height:'auto'}}/></div><br/>

- 最新バージョンを選択し、ワークスペースディレクトリを選択して作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.5.png"style={{width:800, height:'auto'}}/></div><br/>
:::note

Zigbee プラグインのインストールが完了するまで待つと、NCS のバージョンは自動的に v2.9.2 に切り替わります。
プラグインはかなり大きく（4 GB 以上）なるため、ダウンロードには長い時間がかかります。ネットワーク接続を安定した状態に保ち、途中で処理を中断しないでください。

:::

- 作成が完了すると、ポップアップのプロンプトが表示されます。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/6.png"style={{width:800, height:'auto'}}/></div><br/>

**Step 2.** コードの準備

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/8.png"style={{width:400, height:'auto'}}/></div><br/>

- 公式の Seeed Studio リポジトリを参照して、サンプルを取得します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples " target="_blank" rel="noopener noreferrer">
    <strong><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

- あるいは、Git 環境が構築されている場合は、先ほど指定したファイルディレクトリにコードを直接 pull することもできます。

```Linux
git clone https://github.com/StarSphere-1024/XIAO_nRF54L15_Zigbee_Examples
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/7.png"style={{width:800, height:'auto'}}/></div><br/>

サンプルコードを取得したら、その内容を簡単に理解しておきましょう：

1.boards ディレクトリにはボードレベルの設定ファイルが含まれており、異なる開発ボード間のハードウェア差異（ピンやペリフェラルなど）に対応するために使用されます：
- 内部の .overlay ファイルは「Device Tree Overlay ファイル」であり、チップ／開発ボードのデフォルトのハードウェア設定を変更するために使用されます。
- 例えば、xiao_nrf54l15_nrf54l15_cpuapp.overlay は XIAO nRF54L15 用に特別に作成された設定ファイルです（例：コード内で D3 ピンを LED 制御ピンにマッピングするなど）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/10.5.png"style={{width:800, height:'auto'}}/></div><br/>

- その他のファイル（例：nrf54l15dk_xxx.overlay）は Nordic 純正の開発キット（DK）向けのものなので、気にする必要はありません。xiao_xxx というプレフィックスが付いたファイルのみに注目してください。

2. include ディレクトリはヘッダーファイルが格納されている場所です：
- zb_dimmable_light.h は Zigbee 調光ライト用の機能ヘッダーファイルであり、ライトノード向けの Zigbee プロトコル関連の関数やパラメータ（例：明るさ制御、状態報告）を定義しています。

3. src ディレクトリはコアコードが格納されている場所です：
 - main.c はプロジェクト全体のエントリーファイルであり、プログラムの起動ロジック、Zigbee ネットワークの初期化、および LED 制御ロジック（例：スイッチコマンドを受信した後に D3 ピンのレベルを制御する）を含みます。

4. ルートディレクトリ内のファイル これらはプロジェクトのビルドおよび設定ファイル（NCS/Zephyr フレームワークの標準ファイル）です：

- CMakeLists.txt: プロジェクトがコンパイルする必要のあるファイルや依存するライブラリを定義する CMake ビルドスクリプトです。
- Kconfig.sysbuild: プロジェクトのコンパイルオプション（例：Zigbee 機能やデバッグログを有効にするかどうか）を設定します。
- prj.conf: プロジェクトのコア設定ファイルであり、チップパラメータや Zephyr システムパラメータ（例：GPIO 機能、Zigbee プロトコルスタックの有効化）を設定します。
- sample.yaml: プロジェクトの基本情報（例：対応する開発ボード、機能の説明）を記述する NCS サンプル設定ファイルです。

### コードをコンパイルして書き込む

このガイドでは、既存のアプリケーション（ここでは light_switch を例とします）を VS Code 環境に追加し、ターゲットハードウェア（ここでは xiao_nrf54l15 を例とします）にコンパイルおよび書き込みを行う方法を説明します。

**Step 1.** アプリケーションをワークスペースに追加する

- APPLICATIONS パネルを探す：サイドバーで "APPLICATIONS" という名前のパネルを探します。

- 既存のアプリケーションを追加する：パネル右上にある「+」（Add an existing application）アイコンをクリックします。下図の赤枠で示されています。

- アプリケーションフォルダを選択する：ポップアップしたファイルブラウザウィンドウで、プロジェクトが存在するフォルダ（例：D:...\workspace）に移動します。リストから書き込みたいアプリケーションフォルダ（この例では light_switch）を選択し、「Open」ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/14.6.png"style={{width:800, height:'auto'}}/></div><br/>


**Step 2.** ビルドオプションの作成と設定

- ビルド構成を追加する："APPLICATIONS" パネルで、新しく追加された light_switch プロジェクトが表示されます。その下にある「+ Add build configuration」をクリックします。

- コンパイルパラメータを設定する：開いた "Add Build Configuration" ページで、次の設定を行います。SDK と Toolchain：インストール済みの nRF Connect SDK とツールチェーンが通常自動的に選択されますので、バージョンが正しいか確認してください。（先ほどダウンロードしたプラグインが完全であれば、ここでは自動的に V2.9 が選択されます。）

- Board target：これは最も重要なステップです。コードを実行するハードウェアを選択する必要があります。"Browse" をクリックするか、入力ボックスで直接検索します。図に示すように、選択する必要があるターゲットボードは xiao_nrf54l15/nrf54l15/cpuapp です。"Custom" にチェックを入れることで、公式にサポートされていないボードも含めて、ボードを素早くフィルタリングまたは検索できます。

- その他の設定：特別な要件がない限り、Kconfig fragments や Devicetree overlays などの他の設定は、現時点ではデフォルトのままにしておきます。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/15.png"style={{width:800, height:'auto'}}/></div><br/>
:::note
まず **"Custom"** にチェックを入れて、公式にサポートされていないボードも含めて素早くフィルタリングまたは検索し、その後、選択する必要があるターゲットボード：**xiao_nrf54l15/nrf54l15/cpuapp** を特定することを推奨します。直接検索すると、トラブルシューティングに時間がかかりすぎたり、ターゲットボードが見つからない可能性があります。

:::


:::note

- ボードレベルのファイルを更新します。ファイルを長期間更新していない場合は、使用前に更新することも推奨されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/11.png" style={{width:800, height:'auto'}}/></div><br/>

:::
詳細なチュートリアルについては、以下のリンクを参照してください。
      **[Getting Started Guide](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/#nrfconnect-sdk-使用方法)**. 

**Step 3.** コンパイルと書き込み

- ハードウェアを接続する：ターゲットハードウェア（例：XIAO nRF54L15 開発ボード）がデータケーブルで正しく PC に接続されていることを確認します。

- ターミナルを開く：**NRF CONNECT extension** の WELCOME パネルで、「Open terminal」オプション（図の赤枠で示されています）を探してクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/21.png" style={{width:250, height:'auto'}}/></div><br/>

- プロジェクトディレクトリに移動する：ターミナルで cd コマンドを使用して、プロジェクトフォルダに移動します。

```Linux
cd D:\code\nrf54115_zigbee\workspace\light_switch\.lbuild 
west flash
```

- このパスは、ご自身の実際のプロジェクトパスに置き換えてください。

- 書き込みプロセスを監視する：ターミナルには、コンパイルの進行状況、デバッガ（例：CMSIS-DAP）への接続、フラッシュの消去、データ書き込みプロセスなどの詳細なログが出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/17.png" style={{width:800, height:'auto'}}/></div><br/>

- 同様の手順で、残り 2 つのコードプロジェクトも書き込みます。
- コードが正しく書き込まれたかどうか心配な場合は、次の方法で確認できます。

  -  シリアルポート経由で開発ボードに接続し、シリアルポート出力を確認します（この方法は書き込み結果を検証できるだけでなく、プログラムの実行ログを直感的に確認できるため、検証ロジックがより明確になります）。

### Zigbee に接続する

**Step 1.** Zigbee に接続する

1. **Coordinator program** が書き込まれた XIAO 開発ボードの電源を入れて起動します。
2. シリアルポートアシスタントでログを確認し、コーディネータが Zigbee スタックの初期化とネットワークパラメータの設定を完了し、シリアルポート情報が出力されるまで待ちます。
3. コーディネータの電源を入れたままにしてネットワークを継続的に維持し、後続のデバイスがネットワークに参加するための基盤を提供します。

**Step 2.** 電球エンドのネットワーク参加設定

1. 電源投入済みのコーディネータネットワークが準備完了したら、Light Bulb プログラムが書き込まれた XIAO 開発ボードの電源を入れて起動します。

2. 電球エンドは自動的にネットワークスキャンを開始し、利用可能な Zigbee コーディネータネットワークを探索します。
3. 電球側のシリアルポートログを確認し、コーディネータネットワークへの参加が正常に完了していることを確認します。
コアログの参考例：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/22.png" style={{width:800, height:'auto'}}/></div><br/>

**Step 3.** ライトスイッチ側のネットワーク参加とデバイス検出

1. 電球側がネットワークに正常に参加したことを確認したら、Light Switch プログラムを書き込んだ XIAO 開発ボードの電源を入れて起動します（必要に応じてオンボードボタンでファクトリリセットを実行し、ネットワーク再スキャンを確実に行ってください）。
2. ライトスイッチ側は自動的にスキャンを行い、同じコーディネータネットワークに参加します。
コアログの参考例：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/23.png" style={{width:600, height:'auto'}}/></div><br/>
3. 電球側のシリアルポートログを確認し、コマンドが受信・実行され、LED がオン／オフ動作を完了していることを確認します。コアログの参考例：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/243.png" style={{width:400, height:'auto'}}/></div><br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/25.png" style={{width:400, height:'auto'}}/></div><br/>

### Zigbee ネットワークリセット手順

**Step 1.** コーディネータのネットワークリセット

ネットワークコーディネータのオンボードボタンを押して、Zigbee ネットワークのリセットを完了します。

**Step 2.** ライト制御デバイス（ライトスイッチ／電球）のリセットと再参加

1. ライト制御デバイス（ライトスイッチ／電球）のオンボードボタンを押し続けます；
2. デバイスのリセットボタンを押します；
3. オンボードボタンを離します。デバイスはリセットを完了し、新しい Zigbee ネットワークに自動的に参加します。

:::note

> <strong>重要:</strong> 以前のハードウェアリビジョンでは、BAT のみのコールドスタート時に、電源が入っていない SAMD11 に信号が逆流してしまう可能性があるため、オンボードの USB-シリアル UART を無効にする必要がある場合があります。V1.2 ではハードウェア信号のアイソレーションが追加されており、この履歴的な問題に対してのみ必要だった UART 回避策は不要になっています。これはオンボードの USB-シリアル／デバッグ UART のみに影響し、側面の <code>D6/TX</code> および <code>D7/RX</code> ユーザー UART ピンには影響しません。バージョンごとの設定については、[Getting Started の Battery Powered Board セクション](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/#バッテリー電圧検出)を参照してください。

:::

## 結果

すべてが正常に動作していれば、次のような結果が確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/result.gif" style={{width:600, height:'auto'}}/></div>

### FQA

1. インストール先のルートディレクトリとして、過度に長いディレクトリを使用しないでください。そうしないと、Windows 上でサンプルをコンパイルする際に、ディレクトリ名が長すぎることによるコンパイルエラーが頻発します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Zigbee/4.png" style={{width:1000, height:'auto'}}/></div><br/> 


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
