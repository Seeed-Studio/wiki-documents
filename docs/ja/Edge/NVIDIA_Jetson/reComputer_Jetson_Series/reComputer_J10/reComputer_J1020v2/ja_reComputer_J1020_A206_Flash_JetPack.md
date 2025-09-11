---
description: reComputer J1020 v1 | A206
title: reComputer J1020v1 | A206
keywords:
  - Edge
  - reComputer JetPack™_OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_J1020_A206_Flash_JetPack
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer J1020v1 (A206キャリアボード)にJetPackをフラッシュする

このWikiでは、reComputer J1020にJetPack OSをフラッシュする方法を説明します。このキャリアボードは公式のNVIDIA Nano Developer Carrier Boardに似た設計となっているため、JetPackをフラッシュする方法は2つあります。

## はじめに

JetPack OSをreComputer J1020にフラッシュするには、**NVIDIA SDK Manager** Linuxソフトウェアを使用するか、Linuxコマンドラインを介して直接**NVIDIA Linux Driver Package**を使用することができます。NVIDIA Jetson初心者には、NVIDIA SDK Managerを強く推奨します。

- [オプション1 - NVIDIA SDK Managerを使用してJetPack OSをフラッシュする](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [オプション2 - コマンドラインを使用してJetPack OSをフラッシュする](#flashing-jetpack-os-via-command-line)

まずいくつか準備が必要です：

### ソフトウェアの準備

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIAアカウント</span></a>
- Ubuntu 18.04 OS（またはそれ以上）を搭載したLinuxホストコンピュータ

!!!note
 このチュートリアルでは、Ubuntu 18.04 LTSベースのシステムを使用してインストールを完了します。

### ハードウェアの準備（強制リカバリモード）

インストール手順に進む前に、reComputerが強制リカバリモードになっていることを確認する必要があります。

**ステップ1.** 開始する前に、reComputerの電源を切断してください。
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

**ステップ3.** reComputerの左側にある12V/5A DCケーブルで電源を入れ、右側にあるType-Cケーブルを使用してLinuxホストPCに接続します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png" /></div>

!!!Attention
    配線を行う前に、電源コネクタとデータコネクタに注意してください。データコネクタをDC電源に直接接続しないでください。

**ステップ4.** ホストコンピュータのコマンドラインウィンドウで、`lsusb`コマンドを入力します。返された内容に`ID 0955:7f21 NVidia Corp.`が含まれている場合、reComputerが強制リカバリモードになっていることを意味し、次の操作に進むことができます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## NVIDIA SDK Managerを使用したJetPack OSのフラッシュ

次に、NVIDIA SDK Managerを使用してシステムをインストールする手順について説明します。NVIDIA SDK Managerは、開発者向けソフトウェアを一括で提供し、NVIDIA SDKのエンドツーエンドの開発環境セットアップソリューションを提供するオールインワンツールです。そのため、初心者には特に推奨されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### ステップ 1. LinuxホストPCにNVIDIA SDK Managerをインストール

LinuxホストPCでブラウザを開き、NVIDIA公式ウェブサイトから<a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>NVIDIA SDK Managerをダウンロード</span></a>します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### ステップ 2. NVIDIA SDK Managerを開いてログイン

LinuxホストPCの画面で、マウスを右クリックしてターミナルを開きます。その後、以下のコマンドを入力してSDK Managerを起動します：

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

初めてNVIDIA SDK Managerを使用する場合、登録済みのNVIDIAアカウントでログインするよう促すウェブページが表示されます。

### ステップ 3. 対象デバイスを選択

ログイン後、インストールの最初のステップに進む画面が表示されます。すでにreComputer J1020を接続している場合、ハードウェアデバイスを選択するウィンドウがポップアップ表示されます。

reComputer J1020には**NVIDIA Jetson Nano 4GBモジュール**が搭載されているため、最初のオプションを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

最初の画面では、以下の選択肢があります：

- **Product Category**パネルで**Jetson**を選択する必要があります。
- **Hardware Configuration**パネルでは、**Host Machineを選択しないことを推奨**します。これを選択すると、現在のUbuntuホストにNVIDIAコンポーネントをインストールするのに時間がかかります。必要に応じて選択してください。
- **Target Operating System**パネルでは、異なる**オペレーティングシステム**と**JetPackバージョン**を選択できます。ただし、JetPackのバージョンに注意してください。異なるモジュールは異なるタイプのJetPackをサポートする場合があります。ここでは「JetPack 4.6.1」を推奨します。
- **Additional SDKs**では、eMMCのストレージ容量が16GBしかないため、ここでDeepStreamをインストールすると容量不足になる可能性があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

「Continue」をクリックして次のステップに進みます。

### ステップ 4. 必要なコンポーネントを確認

**Details and License**から、ホストコンポーネントとターゲットコンポーネントのパネルを展開して、システムにインストールされるコンポーネントを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

システムのみをインストールする場合は、SDKコンポーネントのチェックを外すことができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    インストールするコンポーネントを選択する際には、使用容量に注意してください。内蔵eMMCのサイズは16GBしかないため、実際のニーズに応じてこのスペースを賢く割り当てて使用してください。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    実際のテストでは、SDKコンポーネントをフルセットでインストールした後、eMMCの空き容量は約500MBしか残りません。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>

    容量不足の問題を解決する方法については、[トラブルシューティング](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space)を参照してください。

SDK Managerにすべてのファイルをデフォルトパス以外の場所にダウンロードさせたい場合は、画面下部にある「Download & Install Options」に移動し、使用したいパスを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

「Continue」を選択して次のステップに進みます。

### ステップ 5. システムをインストール

インストールを開始する前に、SDK Managerが`sudo`パスワードの入力を求めます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

しばらくすると、reComputer用の新しいシステムを設定するよう求められます。手動でリカバリモードに強制的に移行したため、ここでは`Manual setup: set the target to Force Recovery Mode via manual operations`を選択します。同時に、デフォルトの**Pre-Config**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

その後、新しいJetsonシステムの名前とパスワードをreComputerに入力します。これは自分で設定します。

準備ができたら、「Flash」をクリックして続行します。

画面にはソフトウェアのダウンロードとインストールの進行状況が表示されます。インストールが完了するまでしばらくお待ちください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### （オプション）ステップ 6. SDKコンポーネントをインストール

前の**ステップ 4**でコンポーネントのインストールを選択した場合、このステップを実行する必要があります。

しばらくすると、NVIDIA SDK Managerに新しいウィンドウがポップアップ表示され、IPアドレスを介してデバイスに接続するよう促されます。これはシステムがすでにインストールされており、コンポーネントのインストールが進行中であることを意味します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

この場合、**ジャンパーを取り外し**、reComputerを再起動します。その後、reComputerをHDMI経由でモニターに接続し、**ステップ4**で入力したパスワードを入力してメインインターフェースにログインします。

次に、reComputerをLinuxホストPCと同じLANに接続し、コマンド`ifconfig`を使用してJetsonの**IPアドレス**を確認する必要があります。

LinuxホストPCに戻り、先ほど取得したIPアドレスを入力します。NVIDIA SDK ManagerはJetsonデバイスへの接続を試み、次のSDKコンポーネントのインストールを完了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

以下のウィンドウが表示されたら、インストールは完了です。Jetsonの使用を開始するか、以下の手順に従って新しいシステムの基本設定を完了させることができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

!!!注意
    システムを再起動する前に、必ずジャンパーを取り外し、強制リカバリーモードを終了してください。

## コマンドラインを使用したJetPack OSのフラッシュ

BSP（NVIDIA Linux Driver Package）のカスタマイズの自由度のおかげで、Linuxの知識があるユーザーにとって、コマンドラインを使用したJetPack OSのフラッシュは非常に簡単です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### ステップ1. 適切なNVIDIA Linux Driver Packageをダウンロード

**LinuxホストPC**でブラウザを開き、<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>にアクセスします。まず、Jetson LinuxのバージョンがreComputer Jetsonモジュールをサポートしているか確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

適切なバージョンを見つけたら、ダウンロードページに移動します。「L4T Driver Package (BSP)」および「Sample Root Filesystem」を見つけてクリックし、ドライバファイルをダウンロードします。ファイル名は`Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2`および`Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`のようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

例として、JetPack4.6.1の一部であるNVIDIA L4T 32.7.1バージョンを選択し、Jetson Nanoモジュールをサポートしています。ファイル名は以下の通りです：

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### ステップ2. パッケージファイルの解凍とコマンドラインを使用したRootfsの構築

LinuxホストPCで、ダウンロードしたパッケージファイルを保存するフォルダを見つけます。その後、フォルダでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを使用してファイルを解凍し、rootfsを構築します：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

!!!注意
    `${}`はファイル名を指定する場所です。

*NVIDIA L4T 32.7.1の例として、ダウンロードしたファイルは`/Desktop/L4T_Drivers`に保存されています。そのため、`/Desktop/L4T_Drivers`パスでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを実行します。

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

出力は以下のようになります：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### ステップ3. システムをreComputerにフラッシュ

すでにreComputer J1020をリカバリーモードに設定し、モジュールがJetson Nanoであるため、以下のコマンドを実行してシステムをreComputerに直接フラッシュできます：

```sh
sudo ./flash.sh jetson-nano-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!ヒント
    L4Tのフラッシュには約10分かかります。ホストコンピュータが遅い場合はさらに時間がかかることがあります。

この時点で、ジャンパーを取り外し、reComputerを再度電源オンして使用することができます。

## トラブルシューティング

### NVIDIA SDK Manager を使用したインストールのトラブルシューティング

さまざまなインストールエラーには多くの原因があります。以下は一般的なインストール問題のチェックリストで、壊れたインストールから復旧する際に役立つかもしれません。

1. サマリーテーブルを確認して、どのコンポーネントが失敗したかを特定します。

    a. ステータスが「エラー」となっているグループを展開します。

    b. 失敗したコンポーネントを見つけたら、インストールエラーの右側にある詳細アイコンをクリックして、ターミナルタブにリダイレクトします。そこには正確なエラーが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. エラーが壊れた apt リポジトリや不足している前提条件などの環境問題に関連している場合は、手動で修正を試み、その後「Retry Failed Items」ボタンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. インストールの再試行は、以下の2つの方法でも可能です：

    a. **Flashing to eMMC with SDK Manager -- Step 3** から、Repair/Uninstall ボタンを使用して「Manage NVIDIA SDKs」ページに移動します。必要に応じて、「Broken」ステータスの SDK を展開し、該当部分（Host または Target）に対して Repair をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. **Flashing to eMMC with SDK Manager -- Step 3** で必要な SDK を選択し、再度インストールを実行します。

5. 最後に、該当する SDK をアンインストールして再インストールを試みます。

### コマンドラインを使用したインストールのトラブルシューティング

コマンドラインインストール方法は比較的簡単ですが、フォースリカバリーモードを使用するシナリオではエラーが発生しやすいです。

**Flashing to eMMC with command-line -- Step 2** で以下のエラーが発生した場合、キャリアボードをフォースリカバリーモードに正しく移行できていない可能性があります。特に注意してください。キャリアボードの電源がオンの状態でフォースリカバリーモードに入ることは無効です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

**Flashing to eMMC with command-line -- Step 3** でシステムに入れず、起動ディスプレイのコマンドラインで止まってしまう場合、フォースリカバリーモードを正しく終了していない可能性があります。同様に、キャリアボードの電源がオンの状態でジャンパーを抜いてフォースリカバリーモードを終了することも無効です。これらはすべて電源がオフの状態で行う必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

!!!注意
    もしより多くのストレージスペースが必要な場合、SDカードを使用して容量を拡張するか、システムをSDカードに書き込むことができます。推奨ソリューションについては、[Flash System on SD card](https://wiki.seeedstudio.com/ja/J101_Enable_SD_Card/) を参照してください。

## リソース
[reComputer J1020 データシート](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-Jetson-J1020-w_o-power-adapter-datasheet.pdf)

[reComputer J102 (J202も含む) キャリアボード回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[reComputer J1010 3D ファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio エッジAI成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson デバイスワンページ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>