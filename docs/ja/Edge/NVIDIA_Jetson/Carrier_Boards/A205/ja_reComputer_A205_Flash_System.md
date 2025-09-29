---
description: A205 Carrier Board
title: A205 Carrier Board
keywords:
  - Edge
  - reComputer Carrier_Board_for_Jetson_Moudule
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_A205_Flash_System
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---
<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

# A205 Carrier Board に JetPack OS をフラッシュする（NVIDIA Jetson Nano & NVIDIA Jetson Xavier NX 対応）

このwikiでは、NVIDIA Jetson Nano モジュールと NVIDIA Jetson Xavier モジュールの両方をサポートする A205 Carrier Board に Jetpack OS をフラッシュする方法を説明します。ここでは、システムをフラッシュする2つの方法を紹介します。A205 Carrier Board は公式の NVIDIA Jetson Carrier Board とは異なるため、対応するドライバーもインストールする必要があります。

![image](https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A205.png)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A205-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5133.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong></a>
</div>

## はじめに

**NVIDIA SDK manager と Linux ターミナル**を使用してシステムをフラッシュするか、**Linux ターミナル**のみを使用して簡単に実行できます。Linux の知識ベースをお持ちの方には、Linux ターミナルのみの使用を強くお勧めします。

- [NVIDIA SDK manager を使用した JetPack OS のフラッシュ](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [Linux ターミナルを使用した JetPack OS のフラッシュ](#flashing-jetpack-os-via-command-line)

まず、いくつかの準備が必要です：

### ソフトウェアの準備

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIA アカウント</span></a>
- Ubuntu 18.04 OS（またはそれ以上）を搭載した Linux ホストコンピュータ

!!!note
 このチュートリアルでは、Ubuntu 18.04 LTS ベースのシステムを使用してインストールを完了します。

### ハードウェアの準備（強制リカバリモード）

インストール手順に進む前に、ボードが強制リカバリモードになっていることを確認する必要があります。ボードには異なるタイプがありますので、違いに注意してください。

**ステップ 1.** まず、ボードの電源を切断する必要があります。

**ステップ 2.** キャリアボードと Linux ホスト PC を **USB type-C ケーブル**で接続します

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A2051.png" /></div>

**ステップ 3.** **RECOVERY ボタン（W32）**を押しながらボードの電源を入れ、その後ボタンを離します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A2052.jpg" /></div>

**ステップ 4.** Linux ホスト PC の画面で、マウスを右クリックしてターミナルを開き、コマンド `lsusb` を入力します。返される内容に `NVidia Corp.` が含まれている場合、A205 Carrier Board が強制リカバリモードになっており、後続の操作に進むことができます。

ID はキャリアボード上のモジュールによって異なり、情報は以下のように表示されます：

- Jetson Nano の場合：**0955:7f21 NVidia Corp**
- Jetson Xavier NX の場合：**0955:7e19 NVidia Corp**
- Jetson TX2 NX の場合：**0955:7c18 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## NVIDIA SDK Manager を使用した JetPack OS のフラッシュ

次に、NVIDIA SDK Manager を使用してシステムをインストールするチュートリアルを進めていきます。NVIDIA SDK Manager は、開発者向けソフトウェアをバンドルし、NVIDIA SDK のエンドツーエンドの開発環境セットアップソリューションを提供するオールインワンツールです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### ステップ 1. Linux ホスト PC に NVIDIA SDK Manager をインストール

Linux ホスト PC でブラウザを開き、NVIDIA 公式ウェブサイトから <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>NVIDIA SDK Manager をダウンロード</span></a> する必要があります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack1.png" /></div>

### ステップ 2. NVIDIA SDK Manager を開いてログイン

Linux ホスト PC の画面で、マウスを右クリックしてターミナルを開きます。次に、以下のコマンドを入力して SDK Manager を起動できます：

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

NVIDIA SDK Manager を初めて使用する場合、事前に登録した NVIDIA アカウントでログインするよう促すウェブページがポップアップ表示されます。

### ステップ 3. ターゲットデバイスを選択

ログイン後、インストールの最初のステップである最初の画面に移動します。ボードをすでに接続しているため、ハードウェアデバイスを選択するためのウィンドウがポップアップ表示されます。

この例では **NVIDIA Jetson Nano 4GB モジュール** を搭載しているため、最初のものを選択できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

最初の画面では、さらに多くの選択肢があります：

- Product Category パネルの **Jetson** を選択する必要があります。
- Hardware Configuration パネルでは、**Host Machine を選択しない** ことをお勧めします。これにより、現在の Ubuntu ホスト用の NVIDIA コンポーネントのインストールにより多くの時間がかかります。必要に応じて選択できます。
- Target Operating System パネルでは、異なる **オペレーティングシステム** と **JetPack バージョン** を選択できます。ただし、JetPack のバージョンには注意してください。異なるモジュールは異なるタイプの JetPack をサポートする場合があります。ここでは「JetPack 4.6.1」をお勧めします。
- Additional SDKs では、eMMC のストレージ容量が 16GB のみであるため、ここで DeepStream をインストールするとメモリ不足になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Continue をクリックして次のステップに進みます。

### ステップ 4. 必要なコンポーネントを確認

**Details and License** から、ホストコンポーネントとターゲットコンポーネントのパネルを展開して、システムにインストールされるコンポーネントを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

システムのインストールのみが必要な場合は、SDK コンポーネントのチェックを外すことができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    インストールするコンポーネントを選択する際は、使用される容量に注意を払うことをお勧めします。内蔵 eMMC のサイズは 16GB のみです。実際のニーズに応じて、このスペースを賢明に割り当てて使用してください。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    実際のテストの結果、SDK コンポーネントの完全セットをインストールした後、eMMC スペースは約 500MB しか残りません。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
    容量不足の問題を解決する方法を確認したい場合は、[トラブルシューティング](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space) を参照してください。

SDK Manager にすべてのファイルをデフォルトパス以外の場所にダウンロードさせたい場合は、画面下部にある Download & Install Options に移動し、使用したいパスを選択します。

そして、A205 キャリアボードにはフラッシュドライブが必要であるため、まず **Download now. Install later.** ボックスにチェックを入れて、システムをダウンロードしてもインストールしないようにしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/60.png" /></div>

Continue を選択して次のステップに進みます。

この時点で、システムは選択したパスへのダウンロードを開始するため、この時間を利用してドライバーを準備できます。

### ステップ 5. 適切なドライバーを選択

次に、ボード上の各コンポーネントが動作することを確認するために、ドライバーもインストールする必要があります。まず、キャリアボードとモジュールに応じて Ubuntu ホストでドライバーファイルを選択する必要があります。

<table align="center">
  <tbody><tr>
      <th align="center">キャリアボード</th>
      <th align="center">Jetson モジュール</th>  
      <th align="center">JetPack バージョン</th>
      <th align="center">L4T バージョン</th>
      <th align="center">ダウンロードアドレス</th>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Nano eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nano.zip">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nx.zip">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson TX2NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_tx2nx.zip">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">5.0.2</td>
      <td align="center">35.1.0</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/A205/205nx_jp5.0.2.zip">ダウンロード</a></td>
    </tr>
  </tbody></table>

!!!Note
 ダウンロードしたファイルには、A205用の2つのJetPack 5.0.2ドライバが含まれています。どちらも正常に動作しますが、一方は**IMX-219カメラ**をサポートし、もう一方は**IMX-477カメラ**をサポートしています。

### ステップ6. システムフォルダでドライバを解凍する

!!!Attention
 このステップを進める前に、SDK Managerがシステムのダウンロードを完了していることを確認してください！

Linux ホストPCでは、公式イメージの一部のファイルをダウンロードしたドライバパッケージファイルで置き換える必要があります。ここではSDK Managerを使用しているため、公式イメージの位置（パス）は以下のようになります：

`/home/<username>/nvidia/nvidia_sdk/JetPack_<version num>_Linux_<board name>_TARGETS/Linux_for_Tegra`

### ファイルの置き換え

!!!Attention
 ファイルを置き換える前に、`kernel`フォルダ内で置き換えられる`.dtb`ファイルのバックアップを作成し、別のパスに一時的に保存することを選択できます。これにより、いつでも公式ダウンロードを復元できます。

ファイルを公式のものにドラッグできます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A20X/12.png" /></div>

または、以下のコマンドを実行してファイルを置き換えることができます：

```sh
cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}
```

!!!Note
    `${}` は環境変数の使用です。
 `${Drive package kernel path}` はカーネルイメージフォルダへのフルパスを示します
 `${Officially unpacked Linux_for_Tegra path}` は公式に提供されたL4T zipパッケージを展開した後のLinux_for_Tegraフォルダへのフルパスを示します。

### ステップ7. システムのインストール

先ほどシステムのインストールを後で行うことを選択したため、この時点で先ほどの**ステップ3から4**を再度実行する必要があります。これにより、ドライバファイルがすでに置き換えられたA205にシステムがインストールされます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/61.png" /></div>

インストールが開始される前に、SDK Managerが`sudo`パスワードの入力を求めます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

SDK ManagerはJetsonターゲットをForce Recovery Modeにするための2つのオプションをサポートしています。Jetson-202 Carrier Boardをフォースリカバリモードにする操作を理解しており、前のステップですでにフォースリカバリモードになっているため、`Manual setup: set the target to Force Recovery Mode via manual operations`を選択します。

OEM設定を事前設定するかどうかも選択できます。

- **Pre-Config**: SDK Managerは事前定義された設定でターゲットをフラッシュし、フラッシュ後にSystem Configuration Wizardを完了する必要がありません。
- **Runtime**: ターゲットにデフォルト設定は設定されず、フラッシュ後にSystem Configuration Wizardを手動で完了する必要があります。

ここでは、デフォルトの**Pre-Config**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

その後、下部で新しいJetsonシステムの名前とパスワードを入力してください。これらを覚えておいてください。

準備ができたら、`Flash`をクリックして続行します。

ディスプレイにソフトウェアのダウンロードとインストールの進行状況が表示されます。インストールが完了するまで辛抱強くお待ちください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### （オプション）ステップ7. SDKコンポーネントのインストール

前の**ステップ4**でコンポーネントのインストールをチェックした場合、このステップを実行する必要があります。

しばらくすると、NVIDIA SDK Managerに新しいウィンドウがポップアップし、IPアドレス経由でデバイスに接続する必要があることを示すプロンプトが表示されます。これは、システムがすでにインストールされ、コンポーネントのインストールが進行されることを意味します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

この場合、**ジャンパーを抜いて**ボードを再起動できます。次に、HDMI経由でボードをモニターに接続し、**ステップ4**で入力したパスワードを入力して、メインインターフェースにログインする必要があります。

この時点で、ボードをLinuxホストPCと同じLANに接続し、`ifconfig`コマンドを使用してJetsonの**IPアドレス**を確認する必要があります。

LinuxホストPCに戻り、先ほど取得したIPアドレスを入力します。NVIDIA SDK ManagerはJetsonデバイスへの接続を試み、次のSDKコンポーネントのインストールを完了するために進行します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

以下のウィンドウが表示されると、インストールが完了しています。しかし、まだドライバをインストールする必要があるため、ボードを**Force Recovery Mode**のままにしておく必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

フラッシュ後、ボードを完全に適用できます。

## コマンドライン経由でのJetPack OSのフラッシュ

BSP（NVIDIA Linux Driver Package）をカスタマイズする自由度のおかげで、コマンドライン経由でのJetPack OSのフラッシュは、Linuxの知識ベースを持つユーザーにとって非常に簡単になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### ステップ1. 適切なNVIDIA Linux Driver Packageをダウンロード

**Linux ホストPC**で、ブラウザを開いて<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>にアクセスする必要があります。まず、Jetson Linuxのバージョンがサポートされているかを確認する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

適切なバージョンが見つかったら、クリックしてダウンロードページに移動します。「L4T Driver Package (BSP)」と「Sample Root Filesystem」を見つけてクリックし、ドライバーファイルをダウンロードします。ファイル名は`Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2`と`Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`のようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/A205_Flash_Jetpack.png" /></div>

例として、JetPack4.6.1の一部として含まれ、Jetson Nanoモジュールをサポートするため、NVIDIA L4T 32.7.1バージョンを選択します。ファイル名は以下の通りです：

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### ステップ2. パッケージファイルの解凍とコマンドライン経由でのRootfsの組み立て

Linux ホストPCで、フォルダを見つけて、以前にダウンロードしたパッケージファイルを保存する必要があります。次に、そのフォルダでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドラインを使用してファイルを解凍し、rootfsを組み立てます：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
```

!!!Note
    `${}` はファイル名を入力する場所です。

**NVIDIA L4T 32.7.1** の例として、ダウンロードしたファイルは `/Desktop/L4T_Drivers` に保存されているため、'/Desktop/L4T_Drivers' パスでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを実行します。

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
```

### ステップ 3. 適切なドライバーの選択

パッケージを解凍した後、ボード上の各コンポーネントが正常に動作するようにドライバーもインストールする必要があります。まず、キャリアボードとモジュールに応じて、Ubuntu ホストでドライバーファイルを選択する必要があります。

<table align="center">
  <tbody><tr>
      <th align="center">キャリアボード</th>
      <th align="center">Jetson モジュール</th>  
      <th align="center">JetPack バージョン</th>
      <th align="center">L4T バージョン</th>
      <th align="center">ダウンロードアドレス</th>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Nano eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nano.zip">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nx.zip">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson TX2NX eMMC</td>
      <td align="center">4.6</td>
      <td align="center">32.6.1</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_tx2nx.zip">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">A205</td>
      <td align="center">Jetson Xavier NX eMMC</td>
      <td align="center">5.0.2</td>
      <td align="center">35.1.0</td>
      <td align="center"><a href="https://files.seeedstudio.com/wiki/A205/205nx_jp5.0.2.zip">ダウンロード</a></td>
    </tr>
  </tbody>
</table>

!!!Note
 ダウンロードファイルには A205 用の JetPack 5.0.2 ドライバーが 2 つ含まれています。どちらも正常に動作しますが、一方は **IMX-219 カメラ**をサポートし、もう一方は **IMX-477 カメラ**をサポートしています。

### ステップ 4. ファイル内のドライバーを解凍

ファイルを公式のものにドラッグできます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A20X/12.png" /></div>

または、以下のコマンドを実行してファイルを置き換えることができます：

```sh
cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}
```

!!!Note
    `${}` は環境変数の使用です。
 `${Drive package kernel path}` はカーネルイメージフォルダへのフルパスを示します
 `${Officially unpacked Linux_for_Tegra path}` は公式に提供されたL4T zipパッケージを展開した後のLinux_for_Tegraフォルダへのフルパスを示します。

### ステップ 5.  ボードへのシステムのフラッシュ

この例ではNVIDIA Jetson Nanoモジュールを使用し、以下のコマンドを実行してシステムを直接ボードにフラッシュできます：

```sh
sudo ./apply_binaries.sh
sudo ./flash.sh ${BOARD} mmcblk0p1
```

!!!Note
    `${BOARD}` は環境変数の使用であり、その情報はキャリアボード内のモジュール名である必要があります。詳細な情報については<a href="https://files.seeedstudio.com/wiki/A20X/6.png" target="_blank"><span>こちら</span></a>で確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!Tip
    L4Tのフラッシュには約10分かかります。ホストコンピュータが遅い場合はそれ以上かかることもあります。

フラッシュ後、ボードを完全に使用できます。

## トラブルシューティング

### NVIDIA SDK Managerでのインストールのトラブルシューティング

様々なインストールエラーには多くの原因があります。以下は一般的なインストール問題のチェックリストで、破損したインストールからの復旧に役立つ可能性があります。

1. サマリーテーブルを確認して、どのコンポーネントが失敗したかを特定します。

    a. "Error"ステータスのグループを展開します。

    b. 失敗したコンポーネントを見つけたら、Install Errorの右側にある詳細アイコンをクリックしてTerminalタブにリダイレクトされ、正確なエラーが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. エラーが破損したaptリポジトリや不足している前提条件などの環境問題に関連している場合は、手動で修正してから、Retry Failed Itemsボタンをクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. インストールの再試行は他の2つの方法でも利用できます：

    a. **SDK ManagerでeMMCにフラッシュ -- ステップ3**から、Repair/UninstallボタンでManage NVIDIA SDKsページに移動します。必要に応じて、"Broken"ステータスのSDKを展開し、関連する部分（HostまたはTarget）のRepairをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. **SDK ManagerでeMMCにフラッシュ -- ステップ3**で、必要なSDKを選択して再度インストールを実行します。

5. 最後に、関連するSDKをアンインストールして再インストールしてみてください。

### コマンドラインを使用したインストールのトラブルシューティング

コマンドラインインストール方法は比較的シンプルで、強制リカバリモードが使用されるシナリオでエラーが発生しやすいことがよくあります。

**コマンドラインでeMMCにフラッシュ -- ステップ2**で以下に示すエラーが発生した場合、ボードを強制リカバリモードに正常に入れることができなかった可能性があります。特に注意してください。キャリアボードの電源が入った状態で強制リカバリモードに入らないでください。これは無効です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

**コマンドラインでeMMCにフラッシュ -- ステップ3**でシステムに入ることができず、起動表示コマンドラインで止まっている場合、強制リカバリモードを終了していない可能性があります。同様に、キャリアボードの電源が入っている間にジャンパーを抜いて強制リカバリモードを終了することは無効です。これらはすべて電源を切った状態で行う必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

!!!Note
    より多くのストレージ容量が必要な場合は、SDカードを使用して容量を拡張するか、SDカードにシステムを書き込むことができます。推奨ソリューション[SDカードにシステムをフラッシュ](https://wiki.seeedstudio.com/ja/J101_Enable_SD_Card/)を参照してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
