---
description: reComputer J1020 v1 | A206
title: reComputer J1020v1 | A206
keywords:
  - Edge
  - reComputer JetPack™_OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_J1020_A206_Flash_JetPack
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# reComputer J1020v1（A206キャリアボード）にJetPackをフラッシュする

このwikiでは、reComputer J1020にJetpack OSをフラッシュする方法を説明します。このキャリアボードは公式のNVIDIA Nano Developer Carrier Boardのように設計されているため、JetPackを2つの方法でフラッシュできます。

## はじめに

**NVIDIA SDK Manager** Linux ソフトウェアを使用するか、**NVIDIA Linux Driver Package** をLinuxコマンドライン経由で直接使用して、JetPack OSをreComputer J1020にフラッシュできます。NVIDIA Jetsonの初心者には、NVIDIA SDK Managerを強く推奨します。

- [オプション1 - NVIDIA SDK Manager経由でJetPack OSをフラッシュする](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [オプション2 - コマンドライン経由でJetPack OSをフラッシュする](#flashing-jetpack-os-via-command-line)

まず、いくつかの準備が必要です：

### ソフトウェアの準備

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIAアカウント</span></a>
- Ubuntu 18.04 OS（またはそれ以上）を搭載したLinuxホストコンピュータ

!!!note
 このチュートリアルでは、Ubuntu 18.04 LTSベースのシステムを使用してインストールを完了します。

### ハードウェアの準備（強制リカバリモード）

インストール手順に進む前に、reComputerが強制リカバリモードになっていることを確認する必要があります。

**ステップ1.** 開始する前に、reComputerの電源を切断する必要があります。
**ステップ2.** リカバリモードに入るには、ジャンパーを使用して**FC REC**と**GND**を接続する必要があります。

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">ボタンヘッダー</th>
      <th align="center">説明</th>  
      <th align="center">ボタンヘッダー</th>
      <th align="center">説明</th>
    </tr>
    <tr>
      <td rowSpan={6}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/J202-b.png" /></div></td>
      <td align="center">1</td>
      <td align="center">PWR BTN</td>
      <td align="center">7</td>
      <td align="center">AUTO ON</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">8</td>
      <td align="center">DISABLE</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td align="center">FC REC</td>
      <td align="center">9</td>
      <td align="center">UART TXD</td>
    </tr>
    <tr>
      <td align="center">4</td>
      <td align="center">GND</td>
      <td align="center">10</td>
      <td align="center">UART RXD</td>
    </tr>
    <tr>
      <td align="center">5</td>
      <td align="center">SYS RET</td>
      <td align="center">11</td>
      <td align="center">LED +</td>
    </tr>
    <tr>
      <td align="center">6</td>
      <td align="center">GND</td>
      <td align="center">12</td>
      <td align="center">LED -</td>
    </tr>
  </tbody></table>

**ステップ3.** reComputerの左側にある12V/5A DCケーブルでreComputerに電源を供給し、Type-CケーブルでreComputerの右側をLinuxホストPCに接続します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png" /></div>

!!!Attention
    配線前に、電源コネクタとデータコネクタにご注意ください。データコネクタを直接DC電源に接続しないでください。

**ステップ4.** ホストコンピュータのコマンドラインウィンドウで、コマンド`lsusb`を入力します。返される内容に`ID 0955:7f21 NVidia Corp.`が含まれている場合、reComputerが強制リカバリモードになっており、後続の操作を進めることができます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## NVIDIA SDK ManagerによるJetPack OSのフラッシュ

次に、NVIDIA SDK Managerを使用してシステムをインストールするチュートリアルを進めます。NVIDIA SDK Managerは、開発者ソフトウェアをバンドルし、NVIDIA SDKのエンドツーエンド開発環境セットアップソリューションを提供するオールインワンツールです。そのため、初心者にお勧めします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### ステップ1. Linux ホストPCにNVIDIA SDK Managerをインストール

Linux ホストPCでブラウザを開き、NVIDIA公式ウェブサイトから<a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>NVIDIA SDK Managerをダウンロード</span></a>する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### ステップ2. NVIDIA SDK Managerを開いてログイン

Linuxホストの画面で、マウスを右クリックしてターミナルを開きます。次に、以下のコマンドを入力してSDK Managerを起動できます：

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

NVIDIA SDK Managerを初めて使用する場合、以前に登録したNVIDIAアカウントでログインするよう促すウェブページがポップアップします。

### ステップ3. ターゲットデバイスを選択

ログイン後、インストールの最初のステップである最初の画面に移動します。すでにreComputer J1020を接続しているため、ハードウェアデバイスを選択するウィンドウがポップアップします。

reComputer J1020には**NVIDIA Jetson Nano 4GBモジュール**が搭載されているため、最初のものを選択できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

最初の画面では、さらに多くの選択肢があります：

- Product Categoryパネルの**Jetson**を選択する必要があります。
- Hardware Configurationパネルでは、**Host Machineを選択しない**ことをお勧めします。これにより、現在のUbuntuホスト用のNVIDIAコンポーネントのインストールに時間がかかります。必要に応じて選択できます。
- Target Operating Systemパネルでは、異なる**オペレーティングシステム**と**JetPackバージョン**を選択できます。ただし、JetPackのバージョンに注意してください。異なるモジュールは異なるタイプのJetPackをサポートする場合があります。ここでは「JetPack 4.6.1」をお勧めします。
- Additional SDKsでは、eMMCのストレージ容量が16GBのみであるため、ここでDeepStreamをインストールするとメモリ不足になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Continueをクリックして次のステップに進みます。

### ステップ4. 必要なコンポーネントを確認

**Details and License**から、ホストコンポーネントとターゲットコンポーネントのパネルを展開して、システムにインストールされるコンポーネントを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

システムのインストールのみが必要な場合は、SDKコンポーネントのチェックを外すことができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    インストールするコンポーネントを選択する際は、使用される容量に注意してください。内蔵eMMCのサイズは16GBのみです。実際のニーズに応じて、この容量を賢く配分して使用してください。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    実際のテストの結果、SDKコンポーネントの完全セットをインストールした後、eMMC容量は約500MBしか残りません。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>

    容量不足の問題を解決する方法を確認したい場合は、[トラブルシューティング](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space)を参照してください。

SDK Managerにすべてのファイルをデフォルトパス以外の場所にダウンロードさせたい場合は、画面下部にあるDownload & Install Optionsに移動し、使用したいパスを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

Continueを選択して次のステップに進みます。

### ステップ5. システムをインストール

インストールが開始される前に、SDK Managerは`sudo`パスワードの入力を求めます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

しばらくすると、reComputer用の新しいシステムをセットアップするよう求められます。手動で強制リカバリモードに入ったため、ここでは`Manual setup: set the target to Force Recovery Mode via manual operations`を選択します。同時に、デフォルトの**Pre-Config**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

その後、新しいJetsonシステムの名前とパスワードをreComputerに入力する必要があります。これは自分で設定します。

準備ができたら、`Flash`をクリックして続行します。

ディスプレイにソフトウェアのダウンロードとインストールの進行状況が表示されます。インストールが完了するまで辛抱強くお待ちください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### （オプション）ステップ6. SDKコンポーネントのインストール

前の**ステップ4**でコンポーネントのインストールにチェックを入れた場合は、このステップを実行する必要があります。

しばらくすると、NVIDIA SDK Managerに新しいウィンドウがポップアップし、IPアドレス経由でデバイスに接続する必要があることを示すプロンプトが表示されます。これは、システムがすでにインストールされており、コンポーネントのインストールが進行されることを意味します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

この場合、**ジャンパーを抜いて**reComputerを再起動できます。次に、HDMI経由でreComputerをモニターに接続し、**ステップ4**で入力したパスワードを入力して、メインインターフェースにログインする必要があります。

この時点で、reComputerをLinuxホストPCと同じLANに接続し、`ifconfig`コマンドを使用してJetsonの**IPアドレス**を確認する必要があります。

LinuxホストPCに戻り、先ほど取得したIPアドレスを入力します。NVIDIA SDK ManagerはJetsonデバイスへの接続を試行し、次のSDKコンポーネントのインストールを完了するために進行します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

以下のウィンドウが表示されると、インストールが完了しています。Jetsonの使用を開始するか、以下の手順に従って新しいシステムの基本設定を完了することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

!!!Attention
    システムに再度電源を入れる前に、必ずジャンパーを抜いて強制リカバリモードを終了してください。

## コマンドラインによるJetPack OSのフラッシュ

BSP（NVIDIA Linux Driver Package）をカスタマイズする自由度のおかげで、コマンドラインによるJetPack OSのフラッシュは、Linuxの知識ベースを持つユーザーにとって非常に簡単になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### ステップ1. 適切なNVIDIA Linux Driver Packageのダウンロード

**LinuxホストPC**で、ブラウザを開いて<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>にアクセスする必要があります。まず、Jetson Linuxのバージョンがrecomputer Jetsonモジュールをサポートしているかどうかを確認する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

適切なバージョンが見つかったら、クリックしてダウンロードページに移動します。「L4T Driver Package (BSP)」と「Sample Root Filesystem」を見つけてクリックし、ドライバーファイルをダウンロードします。ファイル名は`Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2`と`Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`のようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

例として、JetPack4.6.1の一部として含まれ、Jetson Nanoモジュールをサポートするため、NVIDIA L4T 32.7.1バージョンを選択します。ファイル名は以下の通りです：

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### ステップ2. パッケージファイルの解凍とコマンドラインによるRootfsの組み立て

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
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
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
sudo ./flash.sh jetson-nano-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!Tip
    L4Tのフラッシュには約10分かかります。ホストコンピュータが遅い場合はそれ以上かかることもあります。

この時点で、ジャンパーを取り外してからreComputerを再度電源投入して使用することができます。

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

    a. **SDK Managerを使用したeMMCへのフラッシュ -- ステップ3**から、Repair/UninstallボタンでManage NVIDIA SDKsページに移動します。必要に応じて、"Broken"ステータスのSDKを展開し、関連する部分（HostまたはTarget）のRepairをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. **SDK Managerを使用したeMMCへのフラッシュ -- ステップ3**で、必要なSDKを選択して再度インストールを実行します。

5. 最後に、関連するSDKをアンインストールして再インストールしてみてください。

### コマンドラインを使用したインストールのトラブルシューティング

コマンドラインインストール方法は比較的シンプルで、強制リカバリモードが使用されるシナリオでエラーが発生しやすいことがよくあります。

**コマンドラインを使用したeMMCへのフラッシュ -- ステップ2**で以下に示すエラーが発生した場合、キャリアボードを強制リカバリモードにすることに成功していない可能性があります。特に注意してください。キャリアボードの電源が入った状態で強制リカバリモードに入らないでください。これは無効です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

**コマンドラインを使用したeMMCへのフラッシュ -- ステップ3**でシステムに入ることができず、起動表示コマンドラインで止まってしまう場合、強制リカバリモードを終了していない可能性があります。同様に、キャリアボードの電源が入っている間にジャンパーを抜いて強制リカバリモードを終了するのは無効です。これらはすべて電源を切った状態で行う必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

!!!Note
    より多くのストレージ容量が必要な場合は、SDカードを使用して容量を拡張するか、SDカードにシステムを書き込むことができます。推奨ソリューション[SDカードにシステムをフラッシュ](https://wiki.seeedstudio.com/ja/J101_Enable_SD_Card/)を参照してください。

## リソース

[reComputer J1020 データシート](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-Jetson-J1020-w_o-power-adapter-datasheet.pdf)

[reComptuer J102 (J202も含む) キャリアボード回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[reComputer J1010 3Dファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetsonシリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio Edge AI成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetsonシリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetsonデバイス一覧](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
