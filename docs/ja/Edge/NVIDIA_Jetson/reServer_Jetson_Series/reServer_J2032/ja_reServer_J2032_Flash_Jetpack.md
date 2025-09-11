---
description: reServer J2032
title: reServer J2032にNVIDIA JetPack™ OSをフラッシュする
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reServer_J2032_Flash_Jetpack
last_update:
  date: 05/15/2025
  author: w0x7ce
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ---
name: reServer 2032 Jetpackフラッシュ
category: reServer 2032 Jetpackフラッシュ
bzurl: 
wikiurl: 
sku: 
--- -->

# はじめに
このWikiでは、reServer J2032を使用してJetson Xavier NXモジュールにNVIDIA Jetpackオペレーティングシステムをフラッシュする方法を説明します。

以下は参考用のreServer J2030キャリアボードの概要です：

<div align="center">
  <p style={{fontSize: 'x-large', fontWeight: 'bold'}}>
    reServer J2030キャリアボードの概要
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

**NVIDIA SDK Manager**を使用してシステムをフラッシュすることができますが、**コマンドラインスクリプト**を使用して簡単に行うこともできます。Linuxの知識がある方には、より多くの機能を提供する**コマンドラインスクリプト**の使用を強くお勧めします。

- [NVIDIA SDK ManagerとLinuxターミナルを使用したJetPack OSのフラッシュ](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [Linuxターミナルを使用したJetPack OSのフラッシュ](#flashing-jetpack-os-via-command-line)

以下の準備が必要です：

### ソフトウェアの準備

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIAアカウント</span></a>
- Ubuntu 18.04 OS（またはそれ以上）を搭載したLinuxホストコンピュータ

!!!note
	このチュートリアルでは、Ubuntu 18.04 LTSベースのシステムを使用してインストールを完了します。

### ハードウェアの準備（フォースリカバリーモード）

インストール手順に進む前に、reServer J2032がフォースリカバリーモードに設定されていることを確認する必要があります。

**ステップ1.** 開始する前に、reServer J2032の電源を切断してください。

**ステップ2.** リカバリーモードに入るには、ジャンパーを使用して**FC REC**ピンと**GND**ピンを接続する必要があります。ピンの位置は以下の図を参照してください：

<div align="center">
  <p style={{fontSize: 'x-large', fontWeight: 'bold'}}>
    フォースリカバリージャンパー設定ガイド
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



**ステップ3.** Type-Cケーブルを使用してLinuxホストPCに接続し、reServer J2032の`NX USB`（以下の画像参照）Type-Cポートに接続します。その後、12V/5A DCケーブルを差し込み、前面の電源ボタンを押してreServer J2032の電源を入れます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/back_type_c.png" /></div>


<!-- !!!注意
    配線する前に、電源コネクタとデータコネクタに注意してください。データコネクタを直接DC電源に接続しないでください。 -->

**ステップ4.** **ホストコンピュータ（Ubuntu 18.04）**で`Terminal`を開き、コマンド`lsusb`を入力します。返された内容に`ID 0955:7e19 NVidia Corp.`が含まれている場合、reServer J2032がフォースリカバリーモードにあることを意味し、次のステップに進むことができます。

- Jetson Xavier NXの場合：**0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>

## NVIDIA SDK Manager を使用した JetPack OS のフラッシュ

次に、NVIDIA SDK Manager を使用してシステムをインストールする手順について説明します。NVIDIA SDK Manager は、開発者向けソフトウェアを一括で提供し、NVIDIA SDK のエンドツーエンドの開発環境セットアップソリューションを提供するオールインワンツールです。そのため、初心者には特に推奨されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### ステップ 1. Linux ホスト PC に NVIDIA SDK Manager をインストールする

Linux ホスト PC のブラウザを開き、NVIDIA の公式ウェブサイトから <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>NVIDIA SDK Manager をダウンロード</span></a> します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### ステップ 2. NVIDIA SDK Manager を開いてログインする

Linux ホスト PC の画面で、マウスを右クリックして `Terminal` を開きます。その後、以下のコマンドを入力して SDK Manager を起動します：

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

初めて NVIDIA SDK Manager を使用する場合、登録済みの NVIDIA アカウントでログインするよう促すウェブページが表示されます。

### ステップ 3. 対象デバイスを選択する

ログイン後、インストールの最初のステップに進む画面が表示されます。すでに reServer J2032 を接続している場合、ハードウェアデバイスを選択するウィンドウがポップアップ表示されます。

reServer J2032 には **NVIDIA Jetson NX モジュール**が搭載されているため、最初のオプションを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

最初の画面では、以下の選択肢があります：

- **Jetson** を「Product Category」パネルで選択する必要があります。
- 「Hardware Configuration」パネルでは、**Host Machine を選択しないことを推奨**します。これを選択すると、現在の Ubuntu ホストに NVIDIA コンポーネントをインストールするのに時間がかかります。必要に応じて選択してください。
- 「Target Operating System」パネルでは、異なる **オペレーティングシステム** と **JetPack バージョン** を選択できます。ただし、JetPack のバージョンには注意が必要です。異なるモジュールは異なるタイプの JetPack をサポートする場合があります。ここでは「JetPack 4.6.1」を推奨します。
- 「Additional SDKs」では、eMMC のストレージ容量が 16GB しかないため、ここで DeepStream をインストールすると容量不足になる可能性があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

「Continue」をクリックして次のステップに進みます。

### ステップ 4. 必要なコンポーネントを確認する

「Details and License」から、ホストコンポーネントとターゲットコンポーネントのパネルを展開して、システムにインストールされるコンポーネントを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

システムのみをインストールする場合は、SDK コンポーネントのチェックを外すことができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    インストールするコンポーネントを選択する際には、使用容量に注意してください。内蔵 eMMC のサイズは 16GB しかないため、実際のニーズに応じてこのスペースを賢く割り当てて使用してください。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>

    実際のテストでは、SDK コンポーネントをフルセットでインストールした後、eMMC の空き容量は約 500MB しか残りません。

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>

    容量不足の問題を解決する方法については、[トラブルシューティング](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space) を参照してください。

SDK Manager にすべてのファイルをデフォルトパス以外の場所にダウンロードさせたい場合は、画面下部にある「Download & Install Options」に移動し、使用したいパスを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

「Continue」を選択して次のステップに進みます。

### ステップ 5. システムをインストールする

インストールを開始する前に、SDK Manager は `sudo` パスワードの入力を求めます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

しばらくすると、新しいシステムを reServer J2032 に設定するよう求められます。手動でリカバリモードに強制的に移行したため、ここでは `Manual setup: set the target to Force Recovery Mode via manual operations` を選択します。同時に、デフォルトの **Pre-Config** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

その後、新しい Jetson システムの名前とパスワードを reServer J2032 に入力します。これは自分で設定します。

準備ができたら、`Flash` をクリックして続行します。

画面にはソフトウェアのダウンロードとインストールの進行状況が表示されます。インストールが完了するまでしばらくお待ちください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### （オプション）ステップ 6. SDK コンポーネントをインストールする

前の **ステップ 4** でコンポーネントのインストールを選択した場合、このステップを実行する必要があります。

しばらくすると、NVIDIA SDK Manager に新しいウィンドウがポップアップ表示され、IP アドレスを介してデバイスに接続するよう促されます。これはシステムがすでにインストールされており、コンポーネントのインストールが進行中であることを意味します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

この場合、**ジャンパーを取り外し**、reServer J2032を再起動します。その後、reServer J2032をHDMI/Display Portを介してモニターに接続し、**ステップ4**で入力したパスワードを入力してメインインターフェースにログインします。

次に、reServer J2032をLinuxホストPCと同じLANに接続し、コマンド`ifconfig`を使用してJetsonの**IPアドレス**を確認します。

LinuxホストPCに戻り、取得したIPアドレスを入力します。NVIDIA SDK ManagerがJetsonデバイスに接続を試み、次のSDKコンポーネントのインストールを完了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

以下のウィンドウが表示されたら、インストールが完了したことを示します。Jetsonを使用開始するか、以下の手順に従って新しいシステムの基本設定を完了することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

!!!注意
    ジャンパーを必ず取り外し、強制リカバリモードを終了してからシステムを再電源投入してください。

## JetPack OSをコマンドラインでフラッシュする

BSP（NVIDIA Linux Driver Package）のカスタマイズ自由度のおかげで、Linuxの知識があるユーザーにとってJetPack OSをコマンドラインでフラッシュするのは非常に簡単です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### ステップ1. 適切なNVIDIA Linux Driver Packageをダウンロードする

**LinuxホストPC**でブラウザを開き、<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>にアクセスします。まず、Jetson LinuxのバージョンがreServer J2032 Jetsonモジュールをサポートしているか確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/select_L4T.png" /></div>

適切なバージョンを見つけたら、ダウンロードページに進みます。「L4T Driver Package (BSP)」と「Sample Root Filesystem」を見つけてクリックし、ドライバファイルをダウンロードします。ファイル名は以下のようになります：
`Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2`および`Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/download_file.png" /></div>

例として、JetPack4.6.1の一部として含まれているNVIDIA L4T 32.7.1バージョンを選択し、Jetson Nanoモジュールをサポートしています。ファイル名は以下の通りです：

- Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
- Jetson_Linux_R32.7.1_aarch64.tbz2

### ステップ2. パッケージファイルを解凍し、コマンドラインでRootfsを組み立てる

LinuxホストPCで、ダウンロードしたパッケージファイルを保存するフォルダを見つけます。その後、フォルダでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを使用してファイルを解凍し、Rootfsを組み立てます：

```sh
$ tar xf ${L4T_RELEASE_PACKAGE}
$ cd Linux_for_Tegra/rootfs/
$ sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
$ cd ..
$ sudo ./apply_binaries.sh
```

!!!注意
    `${}`はファイル名を置く場所です。

**NVIDIA L4T 32.7.1**の例として、ダウンロードしたファイルは`/Desktop/L4T_Drivers`に保存されているため、`/Desktop/L4T_Drivers`パスでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを実行します。

```sh
$ tar xf Jetson_Linux_R32.7.1_aarch64.tbz2
$ cd Linux_for_Tegra/rootfs/
$ sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
$ cd ..
$ sudo ./apply_binaries.sh
```

出力は以下のようになります：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### ステップ3. システムをreComputerにフラッシュする

reComputer J1020をすでにリカバリモードに強制的に設定しており、モジュールはJetson Nanoです。以下のコマンドを実行してシステムをreComputerに直接フラッシュできます：

```sh
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!ヒント
    L4Tのフラッシュには約10分、またはホストコンピュータが遅い場合はそれ以上かかることがあります。

この時点でジャンパーを取り外し、reComputerを再度電源投入して使用することができます。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>