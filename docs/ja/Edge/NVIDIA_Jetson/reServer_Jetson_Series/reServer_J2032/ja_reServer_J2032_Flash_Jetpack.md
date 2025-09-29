---
description: reServer J2032
title: reServer J2032 Flash NVIDIA JetPack™ OS 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reServer_J2032_Flash_Jetpack
last_update:
  date: 01/03/2023
  author: w0x7ce
---

<!-- ---
name: reServer 2032 Flash Jetpack
category: reServer 2032 Flash Jetpack
bzurl: 
wikiurl: 
sku: 
--- -->

# はじめに

このwikiでは、reServer J2032を使用してJetson Xavier NXモジュールにNVIDIA Jetpack Operating Systemをフラッシュする方法を説明します。

参考として、reServer J2030キャリアボードの概要を以下に示します：

<div align="center">
  <p style={{fontSize: 'x-large', fontWeight: 'bold'}}>
    reServer J2030キャリアボード概要
  </p><table>
    <tbody><tr>
      </tr>
      <tr>
        <td align="center">前面</td>
        <td align="center">背面</td>
      </tr>
      <tr>
        <td align="center">
          <img width={700} src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware1.png" alt />
        </td>
        <td align="center">
          <img width={700} src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware2.png" alt />
        </td>
      </tr>
    </tbody></table>
</div>

## はじめに

**NVIDIA SDK manager** を使用してシステムをフラッシュすることも、**コマンドラインスクリプト** を使用して簡単に実行することもできます。Linux の知識ベースを持つ方には、より多くの機能を提供する **コマンドラインスクリプト** の使用を強くお勧めします。

- [NVIDIA SDK manager を使用した JetPack OS のフラッシュ](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [Linux ターミナルを使用した JetPack OS のフラッシュ](#flashing-jetpack-os-via-command-line)

まだいくつかの準備が必要です：

### ソフトウェアの準備

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIA アカウント</span></a>
- Ubuntu 18.04 OS（またはそれ以上）を搭載した Linux ホストコンピュータ

!!!note
 このチュートリアルでは、Ubuntu 18.04 LTS ベースのシステムを使用してインストールを完了します。

### ハードウェアの準備（強制リカバリモード）

インストール手順に進む前に、reServer J2032 が強制リカバリモードに設定されていることを確認する必要があります。

**ステップ 1.** 開始する前に、reServer J2032 の電源を切断する必要があります。

**ステップ 2.** リカバリモードに入るには、ジャンパーを使用して **FC REC** と **GND** ピンを接続する必要があります。ピンの位置は以下に示すとおりです：

<div align="center">
  <p style={{fontSize: 'x-large', fontWeight: 'bold'}}>
    強制リカバリジャンパー設定ガイド
  </p><table>
    <tbody><tr>
      </tr>
      <tr>
        <td align="center">
          <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reServerJ2032/force_recover.png" /></div>
        </td>
        <td align="center">
          <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/debugheader_REC.png" /></div>
          <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/j2032jumper.png" /></div>
        </td>
      </tr>
    </tbody></table>
</div>

**ステップ 3.** Type-C ケーブルを使用して、reServer J2032 の `NX USB`（下図参照）USB Type-C ポートで Linux ホスト PC に接続し、12V/5A DC ケーブルを差し込んでから、前面の電源ボタンを押して reServer J2032 の電源を入れます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/back_type_c.png" /></div>

<!-- !!!Attention
    Before wiring, please pay attention to the power connector and data connector, please do not connect the data connector directly to DC power. -->

**ステップ 4.** **ホストコンピュータ（Ubuntu 18.04）** で `Terminal` を開き、コマンド `lsusb` を入力します。返される内容に `ID 0955:7e19 NVidia Corp.` が含まれている場合、reServer J2032 が強制リカバリモードになっており、次のステップに進むことができます。

- Jetson Xavier NX の場合：**0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>

## NVIDIA SDK Manager を使用した JetPack OS のフラッシュ

次に、NVIDIA SDK Manager を使用してシステムをインストールするチュートリアルを説明します。NVIDIA SDK Manager は、開発者ソフトウェアをバンドルし、NVIDIA SDK のエンドツーエンド開発環境セットアップソリューションを提供するオールインワンツールです。そのため、初心者にお勧めします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### ステップ 1. Linux ホスト PC に NVIDIA SDK Manager をインストール

Linux ホスト PC でブラウザを開き、NVIDIA 公式ウェブサイトから <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>NVIDIA SDK Manager をダウンロード</span></a> する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### ステップ 2. NVIDIA SDK Manager を開いてログイン

Linux ホスト PC の画面で、マウスを右クリックして `Terminal` を開きます。次に、以下のコマンドを入力して SDK Manager を起動できます：

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

NVIDIA SDK Manager を初めて使用する場合、以前に登録した NVIDIA アカウントでログインするよう促すウェブページがポップアップします。

### ステップ 3. ターゲットデバイスを選択

ログイン後、インストールの最初のステップである最初の画面に移動します。reServer J2032 をすでに接続しているため、ハードウェアデバイスを選択するウィンドウがポップアップします。

reServer J2032 には **NVIDIA Jetson NX モジュール** が搭載されているため、最初のものを選択できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

最初の画面では、さらに多くの選択肢があります：

- Product Category パネルの **Jetson** を選択する必要があります。
- Hardware Configuration パネルでは、**Host Machine を選択しない** ことをお勧めします。これにより、現在の Ubuntu ホスト用の NVIDIA コンポーネントのインストールに時間がかかります。必要な場合は選択できます。
- Target Operating System パネルでは、異なる **オペレーティングシステム** と **JetPack バージョン** を選択できます。ただし、JetPack のバージョンに注意してください。異なるモジュールは異なるタイプの JetPack をサポートする場合があります。ここでは「JetPack 4.6.1」をお勧めします。
- Additional SDKs では、eMMC のストレージ容量が 16GB のみであるため、ここで DeepStream をインストールするとメモリ不足になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Continue をクリックして次のステップに進みます。

### ステップ 4. 必要なコンポーネントを確認

**Details and License** から、ホストコンポーネントとターゲットコンポーネントのパネルを展開して、システムにインストールされるコンポーネントを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

システムのインストールのみが必要な場合は、SDK コンポーネントのチェックを外すことができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    インストールするコンポーネントを選択する際は、使用される容量に注意してください。内蔵 eMMC のサイズは 16GB のみです。実際のニーズに応じて、このスペースを賢く割り当てて使用してください。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>

    実際のテストの結果、SDK コンポーネントの完全セットをインストールした後、eMMC スペースは約 500MB しか残りません。

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>


    容量不足の問題を解決する方法を確認したい場合は、[Troubleshooting](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space) を参照してください。

SDK Manager にすべてのファイルをデフォルトパス以外の場所にダウンロードさせたい場合は、画面下部にある Download & Install Options に移動し、使用したいパスを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

Continue を選択して次のステップに進みます。

### ステップ 5. システムをインストール

インストールが開始される前に、SDK Manager は `sudo` パスワードの入力を求めます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

しばらくすると、reServer J2032 の新しいシステムをセットアップするよう求められます。手動で強制的にリカバリモードに入ったため、ここでは `Manual setup: set the target to Force Recovery Mode via manual operations` を選択します。同時に、デフォルトの **Pre-Config** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

その後、reServer J2032の新しいJetsonシステムの名前とパスワードを入力する必要があります。これは自分で設定します。

準備ができたら、`Flash`をクリックして続行します。

ディスプレイにソフトウェアのダウンロードとインストールの進行状況が表示されます。インストールが完了するまで辛抱強くお待ちください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### （オプション）ステップ6. SDKコンポーネントのインストール

前の**ステップ4**でコンポーネントのインストールをチェックした場合は、このステップを実行する必要があります。

しばらくすると、NVIDIA SDK Managerに新しいウィンドウがポップアップし、IPアドレス経由でデバイスに接続する必要があることを示すプロンプトが表示されます。これは、システムがすでにインストールされており、コンポーネントのインストールが進行されることを意味します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

この場合、**ジャンパーを抜いて**reServer J2032を再起動できます。次に、HDMI/Display Port経由でreServer J2032をモニターに接続し、**ステップ4**で入力したパスワードを入力して、メインインターフェースにログインする必要があります。

この時点で、reServer J2032をLinuxホストPCと同じLANに接続し、`ifconfig`コマンドを使用してJetsonの**IPアドレス**を確認する必要があります。

LinuxホストPCに戻り、先ほど取得したIPアドレスを入力します。NVIDIA SDK ManagerはJetsonデバイスに接続を試み、次のSDKコンポーネントのインストールを完了するために進行します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

以下のウィンドウが表示されると、インストールが完了しています。Jetsonの使用を開始するか、以下の手順に従って新しいシステムの基本設定を完了することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

!!!Attention
    システムに再度電源を入れる前に、必ずジャンパーを抜いて強制リカバリモードを終了してください。

## コマンドライン経由でのJetPack OSのフラッシュ

BSP（NVIDIA Linux Driver Package）をカスタマイズする自由度のおかげで、コマンドライン経由でのJetPack OSのフラッシュは、Linuxの知識ベースを持つユーザーにとって非常に簡単になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### ステップ1. 適切なNVIDIA Linux Driver Packageのダウンロード

**LinuxホストPC**で、ブラウザを開いて<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>にアクセスする必要があります。まず、Jetson LinuxのバージョンがreServer J2032 Jetsonモジュールをサポートしているかどうかを確認する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/select_L4T.png" /></div>

適切なバージョンを見つけたら、クリックしてダウンロードページに移動します。「L4T Driver Package (BSP)」と「Sample Root Filesystem」を見つけてクリックし、ドライバーファイルをダウンロードします。ファイル名は`Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2`と`Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`のようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/download_file.png" /></div>

例として、JetPack4.6.1の一部として含まれ、Jetson Nanoモジュールをサポートするため、NVIDIA L4T 32.7.1バージョンを選択します。ファイル名は以下の通りです：

- Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
- Jetson_Linux_R32.7.1_aarch64.tbz2

### ステップ2. コマンドライン経由でのパッケージファイルの解凍とRootfsの組み立て

LinuxホストPCで、フォルダを見つけて、以前にダウンロードしたパッケージファイルを保存する必要があります。次に、そのフォルダでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドラインを使用してファイルを解凍し、rootfsを組み立てます：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

!!!Note
    `${}` はファイル名を入力する場所です。

**NVIDIA L4T 32.7.1** の例として、ダウンロードしたファイルは `/Desktop/L4T_Drivers` に保存されているため、'/Desktop/L4T_Drivers' パスでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを実行します。

```sh
tar xf Jetson_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

出力は次のようになります：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### ステップ3. reComputerにシステムをフラッシュする

すでにreComputer J1020をリカバリモードに強制的に移行し、モジュールがJetson Nanoであるため、以下のコマンドを実行してreComputerに直接システムをフラッシュできます：

```sh
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!Tip
    L4Tのフラッシュには約10分かかります。ホストコンピュータが遅い場合はそれ以上かかることもあります。

この時点で、ジャンパーを取り外してからreComputerの電源を再度入れ直して使用することができます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
