---
description: A205 キャリアボード
title: A205 キャリアボード
keywords:
  - Edge
  - reComputer キャリアボード_for_Jetson_モジュール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_A205_Flash_System
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus用

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

# JetPack OS を A205 キャリアボードにフラッシュする (NVIDIA Jetson Nano & NVIDIA Jetson Xavier NX 対応)

このウィキでは、NVIDIA Jetson Nano モジュールおよび NVIDIA Jetson Xavier モジュールの両方をサポートする A205 キャリアボードに JetPack OS をフラッシュする方法を説明します。ここではシステムをフラッシュする2つの方法を紹介します。また、A205 キャリアボードは公式の NVIDIA Jetson キャリアボードとは異なるため、対応するドライバもインストールする必要があります。

![image](https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A205.png)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A205-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5133.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## はじめに

**NVIDIA SDK マネージャーと Linux ターミナル**を使用してシステムをフラッシュすることも、**Linux ターミナル**を使用して簡単に行うこともできます。Linux の知識がある方には、Linux ターミナルのみを使用することを強くお勧めします。

- [NVIDIA SDK マネージャーと Linux ターミナルを使用して JetPack OS をフラッシュする](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [Linux ターミナルを使用して JetPack OS をフラッシュする](#flashing-jetpack-os-via-command-line)

まず、いくつかの準備が必要です：

### ソフトウェアの準備

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIA アカウント</span></a>
- Ubuntu 18.04 OS (またはそれ以上) を搭載した Linux ホストコンピュータ

!!!note
 このチュートリアルでは、Ubuntu 18.04 LTS ベースのシステムを使用してインストールを完了します。

### ハードウェアの準備 (フォースリカバリーモード)

インストール手順に進む前に、ボードがフォースリカバリーモードになっていることを確認する必要があります。ボードにはさまざまな種類があるため、違いに注意してください。

**ステップ 1.** まず、ボードの電源を切断します。

**ステップ 2.** キャリアボードと Linux ホスト PC を **USB Type-C ケーブル**で接続します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A2051.png" /></div>

**ステップ 3.** **RECOVERY ボタン (W32)** を押しながらボードの電源を入れて起動し、その後ボタンを離します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A2052.jpg" /></div>

**ステップ 4.** Linux ホスト PC の画面で、マウスを右クリックしてターミナルを開き、コマンド `lsusb` を入力します。返された内容に `NVidia Corp.` が含まれている場合、A205 キャリアボードがフォースリカバリーモードになっており、次の操作に進むことができます。

ID はキャリアボード上のモジュールによって異なり、以下のように表示されます：

- Jetson Nano の場合: **0955:7f21 NVidia Corp**
- Jetson Xavier NX の場合: **0955:7e19 NVidia Corp**
- Jetson TX2 NX の場合: **0955:7c18 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## NVIDIA SDK Managerを使用したJetPack OSのフラッシュ

次に、NVIDIA SDK Managerを使用してシステムをインストールする手順について説明します。NVIDIA SDK Managerは、開発者向けソフトウェアをバンドルし、NVIDIA SDKのエンドツーエンドの開発環境セットアップソリューションを提供するオールインワンツールです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### ステップ1. LinuxホストPCにNVIDIA SDK Managerをインストール

LinuxホストPCでブラウザを開き、NVIDIA公式ウェブサイトから<a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>NVIDIA SDK Managerをダウンロード</span></a>します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack1.png" /></div>

### ステップ2. NVIDIA SDK Managerを開いてログイン

LinuxホストPCの画面で、右クリックしてターミナルを開きます。その後、以下のコマンドを入力してSDK Managerを起動します：

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

NVIDIA SDK Managerを初めて使用する場合、登録済みのNVIDIAアカウントでログインするよう促すウェブページが表示されます。

### ステップ3. 対象デバイスを選択

ログイン後、インストールの最初のステップに進む画面が表示されます。ボードがすでに接続されている場合、ハードウェアデバイスを選択するウィンドウがポップアップ表示されます。

ここでは、**NVIDIA Jetson Nano 4GBモジュール**を使用している例を示していますので、最初のオプションを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

最初の画面では、以下の選択肢があります：

- **Jetson** を製品カテゴリパネルで選択する必要があります。
- ハードウェア構成パネルでは、**ホストマシンを選択しない**ことをお勧めします。現在のUbuntuホストにNVIDIAコンポーネントをインストールするのに時間がかかるためです。ただし、必要に応じて選択できます。
- ターゲットオペレーティングシステムパネルでは、異なる**オペレーティングシステム**と**JetPackバージョン**を選択できます。ただし、JetPackのバージョンには注意が必要です。異なるモジュールは異なるタイプのJetPackをサポートする場合があります。ここでは「JetPack 4.6.1」を推奨します。
- 追加のSDKでは、eMMCのストレージ容量が16GBしかないため、ここでDeepStreamをインストールするとメモリ不足になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

「続行」をクリックして次のステップに進みます。

### ステップ4. 必要なコンポーネントを確認

**詳細とライセンス**から、ホストコンポーネントとターゲットコンポーネントパネルを展開して、システムにインストールされるコンポーネントを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

システムのみをインストールする場合は、SDKコンポーネントのチェックを外すことができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    インストールするコンポーネントを選択する際には、使用容量に注意してください。内蔵eMMCのサイズは16GBしかないため、実際のニーズに応じてこのスペースを賢く割り当てて使用してください。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    実際のテストでは、SDKコンポーネントのフルセットをインストールした後、eMMCスペースは約500MBしか残りません。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
    容量不足の問題を解決する方法については、[トラブルシューティング](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space)を参照してください。

SDK Managerにすべてのファイルをデフォルトパス以外の場所にダウンロードさせたい場合は、画面下部にある「ダウンロード＆インストールオプション」に移動し、使用したいパスを選択します。

また、A205キャリアボードにはフラッシュドライブが必要なため、システムをダウンロードするだけでインストールしないように、**「今すぐダウンロード。後でインストール。」**ボックスを必ずチェックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/60.png" /></div>

「続行」を選択して次のステップに進みます。

この時点で、システムは選択したパスにダウンロードを開始します。この時間を利用してドライバを準備することができます。

### ステップ5. 適切なドライバを選択

次に、ボード上の各コンポーネントが正常に動作するように、ドライバもインストールする必要があります。まず、キャリアボードとモジュールに応じてUbuntuホストでドライバファイルを選択します。

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

!!!注意
ダウンロードされたファイルには、A205用のJetPack 5.0.2ドライバーが2つ含まれています。どちらも正常に動作しますが、1つは**IMX-219カメラ**をサポートし、もう1つは**IMX-477カメラ**をサポートしています。

### ステップ 6. システムフォルダ内でドライバーを解凍する

!!!注意
SDK Managerがシステムのダウンロードを完了していることを確認してから、このステップを進めてください！

LinuxホストPCでは、公式イメージ内のいくつかのファイルをダウンロードしたドライバーパッケージのファイルに置き換える必要があります。ここではSDK Managerを使用しているため、公式イメージの位置（パス）は以下の通りです：

`/home/<username>/nvidia/nvidia_sdk/JetPack_<version num>_Linux_<board name>_TARGETS/Linux_for_Tegra`

### ファイルの置き換え

!!!注意
ファイルを置き換える前に、`kernel`フォルダ内で置き換えられる`.dtb`ファイルのバックアップを作成し、別のパスに一時的に保存することを選択できます。これにより、公式ダウンロードをいつでも復元することができます。

ファイルを公式フォルダにドラッグすることができます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A20X/12.png" /></div>

または、以下のコマンドを実行してファイルを置き換えることもできます：

```sh
cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}
```

!!!注意
    `${}`は環境変数の使用を示します。
 `${Drive package kernel path}`はカーネルイメージフォルダへの完全なパスを示します。
 `${Officially unpacked Linux_for_Tegra path}`はL4T zipパッケージを解凍した後の公式提供フォルダLinux_for_Tegraへの完全なパスを示します。

### ステップ 7. システムのインストール

以前にシステムを後でインストールすることを選択したため、この時点で**ステップ3から4**を再実行する必要があります。これにより、ドライバーファイルがすでに置き換えられた状態でA205にシステムがインストールされます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/61.png" /></div>

インストールが始まる前に、SDK Managerが`sudo`パスワードの入力を求めます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

SDK Managerは、Jetsonターゲットを強制リカバリモードにするための2つのオプションをサポートしています。Jetson-202キャリアボードを強制リカバリモードにする操作を理解しており、前のステップで既に強制リカバリモードにしているため、`Manual setup: set the target to Force Recovery Mode via manual operations`を選択します。

また、OEM構成を事前に設定するかどうかを選択できます。

- **Pre-Config**: SDK Managerは事前定義された構成でターゲットをフラッシュし、フラッシュ後にシステム構成ウィザードを完了する必要はありません。
- **Runtime**: ターゲットにデフォルト構成が設定されておらず、フラッシュ後にシステム構成ウィザードを手動で完了する必要があります。

ここではデフォルトの**Pre-Config**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

その後、新しいJetsonシステムの名前とパスワードを下部に入力してください。これらを忘れないようにしてください。

準備ができたら、`Flash`をクリックして続行します。

画面にはソフトウェアのダウンロードとインストールの進行状況が表示されます。インストールが完了するまで辛抱強く待ってください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### （オプション）ステップ 7. SDKコンポーネントのインストール

前の**ステップ4**でコンポーネントのインストールを選択した場合、このステップを実行する必要があります。

しばらくすると、NVIDIA SDK Managerに新しいウィンドウが表示され、IPアドレスを介してデバイスに接続する必要があることが通知されます。これはシステムがすでにインストールされており、コンポーネントのインストールが進行することを意味します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

この場合、**ジャンパーを抜き取り**、ボードを再起動します。その後、HDMIを介してボードをモニターに接続し、**ステップ4**で入力したパスワードを入力してメインインターフェースにログインします。

この時点で、ボードをLinuxホストPCと同じLANに接続し、コマンド`ifconfig`を使用してJetsonの**IPアドレス**を確認する必要があります。

LinuxホストPCに戻り、先ほど取得したIPアドレスを入力します。NVIDIA SDK ManagerはJetsonデバイスに接続し、次のSDKコンポーネントのインストールを完了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

以下のウィンドウが表示されたら、インストールが完了しています。ただし、ドライバーをインストールする必要があるため、ボードを**強制リカバリモード**にしたままにしておく必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

フラッシュ後、ボードを完全に使用することができます。

## コマンドラインで JetPack OS をフラッシュする

BSP（NVIDIA Linux Driver Package）のカスタマイズが可能なため、Linuxの知識があるユーザーにとってコマンドラインで JetPack OS をフラッシュするのは非常に簡単です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### ステップ 1. 適切な NVIDIA Linux Driver Package をダウンロードする

**Linux ホスト PC**でブラウザを開き、<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>にアクセスします。まず、Jetson Linux のバージョンがサポートされているか確認してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

適切なバージョンを見つけたら、ダウンロードページに進みます。「L4T Driver Package (BSP)」と「Sample Root Filesystem」を見つけてクリックし、ドライバファイルをダウンロードします。ファイル名は `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` や `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2` のようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/A205_Flash_Jetpack.png" /></div>

例として、JetPack4.6.1 の一部として含まれている NVIDIA L4T 32.7.1 バージョンを選択します。このバージョンは Jetson Nano モジュールをサポートしています。ファイル名は以下の通りです：

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### ステップ 2. パッケージファイルを解凍し、コマンドラインで Rootfs を組み立てる

Linux ホスト PC で、ダウンロードしたパッケージファイルを保存するフォルダを見つけます。その後、フォルダでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを使用してファイルを解凍し、Rootfs を組み立てます：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
```

!!!注意
    `${}` はファイル名を指定する場所です。

*NVIDIA L4T 32.7.1 の例として、ダウンロードしたファイルは `/Desktop/L4T_Drivers` に保存されているため、'/Desktop/L4T_Drivers' パスでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを実行します。

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
```

### ステップ 3. 適切なドライバを選択する

パッケージを解凍した後、ボード上の各コンポーネントが動作するようにドライバをインストールする必要があります。まず、キャリアボードとモジュールに応じて Ubuntu ホストでドライバファイルを選択します。

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

!!!注意
 JetPack 5.0.2 ドライバには A205 用のものが2つ含まれています。どちらも正常に動作しますが、1つは **IMX-219 カメラ**をサポートし、もう1つは **IMX-477 カメラ**をサポートします。

### ステップ 4. ファイル内のドライバを解凍する

ファイルを公式のものにドラッグすることができます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A20X/12.png" /></div>

または、以下のコマンドを実行してファイルを置き換えることができます：

```sh
cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}
```

!!!注意
    `${}` は環境変数の使用を示します。
 `${Drive package kernel path}` はカーネルイメージフォルダへの完全なパスを示します。
 `${Officially unpacked Linux_for_Tegra path}` は L4T zip パッケージを解凍した後の公式提供フォルダ Linux_for_Tegra フォルダへの完全なパスを示します。

### ステップ 5. システムをボードにフラッシュする

例として NVIDIA Jetson Nano モジュールを使用し、以下のコマンドを実行してシステムをボードに直接フラッシュします：

```sh
sudo ./apply_binaries.sh
sudo ./flash.sh ${BOARD} mmcblk0p1
```

!!!注意
    `${BOARD}` は環境変数の使用を示します。この情報はキャリアボード内のモジュール名である必要があります。<a href="https://files.seeedstudio.com/wiki/A20X/6.png" target="_blank"><span>こちら</span></a>で詳細を確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!ヒント
    L4T のフラッシュには約10分かかります。ホストコンピュータが遅い場合はさらに時間がかかることがあります。

フラッシュ後、ボードを完全に使用することができます。

## トラブルシューティング

### NVIDIA SDK Manager を使用したインストールのトラブルシューティング

さまざまなインストールエラーには多くの原因があります。以下は一般的なインストール問題のチェックリストで、壊れたインストールから回復するのに役立つかもしれません。

1. サマリーテーブルを確認して、どのコンポーネントが失敗したかを特定します。

    a. ステータスが「Error」となっているグループを展開します。

    b. 失敗したコンポーネントを見つけたら、インストールエラーの右側にある詳細アイコンをクリックして、ターミナルタブにリダイレクトします。ここで正確なエラーが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. エラーが壊れた apt リポジトリや不足している前提条件などの環境問題に関連している場合は、それを手動で修正してから「Retry Failed Items」ボタンをクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. インストールの再試行は、以下の2つの方法でも可能です：

    a. **Flashing to eMMC with SDK Manager -- Step 3** から、Repair/Uninstall ボタンを使用して「Manage NVIDIA SDKs」ページに移動します。必要に応じて、「Broken」ステータスの SDK を展開し、該当部分（Host または Target）に対して Repair をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. **Flashing to eMMC with SDK Manager -- Step 3** で必要な SDK を選択し、再度インストールを実行します。

5. 最後に、該当する SDK をアンインストールして再インストールを試みてください。

### コマンドラインを使用したインストールのトラブルシューティング

コマンドラインによるインストール方法は比較的簡単ですが、フォースリカバリーモードを使用するシナリオではエラーが発生しやすいです。

**Flashing to eMMC with command-line -- Step 2** で以下のエラーが発生した場合、ボードをフォースリカバリーモードに正しく移行できなかった可能性があります。特に注意してください。キャリアボードの電源がオンの状態でフォースリカバリーモードに入ることは無効です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

**Flashing to eMMC with command-line -- Step 3** でシステムに入れず、起動ディスプレイのコマンドラインで立ち往生している場合、フォースリカバリーモードを終了できていない可能性があります。同様に、キャリアボードの電源がオンの状態でジャンパーを外してフォースリカバリーモードを終了することも無効です。これらはすべて電源がオフの状態で行う必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

!!!注意
    もしより多くのストレージスペースが必要な場合、SDカードを使用して容量を拡張するか、システムをSDカードに書き込むことができます。推奨ソリューションについては、[Flash System on SD card](https://wiki.seeedstudio.com/ja/J101_Enable_SD_Card/) を参照してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>