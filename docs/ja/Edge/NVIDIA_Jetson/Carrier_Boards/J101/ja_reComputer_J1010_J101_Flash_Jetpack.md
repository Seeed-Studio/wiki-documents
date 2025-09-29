---
description: reComputer J1010 | J101
title: J101 キャリアボード
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_J1010_J101_Flash_Jetpack
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# J101 キャリアボード

このwikiでは、reComputer J1010にJetpack OSをフラッシュする方法を説明します。そのキャリアボードは公式のNVIDIA Nano Developer Carrier Boardのように設計されているため、JetPackを2つの方法でフラッシュできます。

## はじめに

**NVIDIA SDK Manager** Linux ソフトウェアを使用するか、**NVIDIA Linux Driver Package** を Linux コマンドライン経由で直接使用して、JetPack OS を reComputer J1010 にフラッシュできます。NVIDIA Jetson の初心者には、NVIDIA SDK Manager を強く推奨します。

- [オプション 1 - NVIDIA SDK Manager 経由での JetPack OS フラッシュ](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [オプション 2 - コマンドライン経由での JetPack OS フラッシュ](#flashing-jetpack-os-via-command-line)

まず必要な準備がいくつかあります：

### ソフトウェアの準備

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIA アカウント</span></a>
- Ubuntu 18.04 OS（またはそれ以上）を搭載したLinuxホストコンピュータ

:::note
このチュートリアルでは、Ubuntu 18.04 LTS ベースのシステムを使用してインストールを完了します。
:::

### ハードウェアの準備（強制リカバリモード）

インストール手順に進む前に、reComputer が強制リカバリモードになっていることを確認する必要があります。

**ステップ 1.** 開始する前に、reComputer の電源を切断する必要があります

**ステップ 2.** ジャンパーを使用して **FC REC** ピンと **GND** ピンを接続します。

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">ボタンヘッダー</th>
      <th align="center">説明</th>  
      <th align="center">ボタンヘッダー</th>
      <th align="center">説明</th>
    </tr>
    <tr>
      <td rowSpan="{6}"><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/4_3.jpg" /></div></td>
      <td align="center">1</td>
      <td align="center">PWR BTN</td>
      <td align="center">7</td>
      <td align="center">AUTO ON</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">8</td>
      <td align="center">DIS</td>
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
  </tbody>
</table>

**ステップ 3.** reComputerの左側にあるType-Cケーブルでrecomputerに電源を供給し、別のケーブルでreComputerの右側にあるLinuxホストPCに接続します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ1010_J101_flash_Jetpack.png" /></div>

!!!Attention
    配線前に、電源コネクタとデータコネクタにご注意ください。データコネクタを直接DC電源に接続しないでください。

**ステップ 4.** ホストコンピュータのコマンドラインウィンドウで、コマンド `lsusb` を入力します。返される内容に `ID 0955:7f21 NVidia Corp.` が含まれている場合、reComputerが強制リカバリモードになっており、後続の操作を進めることができます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

:::caution
Jetson-NanoのSPIインターフェースはデフォルトでGPIOと多重化されており、有効になっていません。有効にする方法については、[**このガイド**](/ja/enable_spi_interface_on_jetsonnano)を参照してください。
:::

## NVIDIA SDK Managerを使用したJetPack OSのフラッシュ

次に、NVIDIA SDK Managerを使用してシステムをインストールするチュートリアルを進めます。NVIDIA SDK Managerは、開発者ソフトウェアをバンドルし、NVIDIA SDKのエンドツーエンド開発環境セットアップソリューションを提供するオールインワンツールです。そのため、初心者にお勧めします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### ステップ 1. Linux ホストPCにNVIDIA SDK Managerをインストール

LinuxホストPC上でブラウザを開き、NVIDIA公式ウェブサイトから<a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>NVIDIA SDK Managerをダウンロード</span></a>する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### ステップ 2. NVIDIA SDK Managerを開いてログイン

LinuxホストPCの画面で、マウスを右クリックしてターミナルを開きます。次に、以下のコマンドを入力してSDK Managerを起動できます：

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

NVIDIA SDK Managerを初めて使用する場合、ウェブページがポップアップし、以前に登録したNVIDIAアカウントでログインするよう促されます。

### ステップ 3. ターゲットデバイスを選択

ログイン後、インストールの最初のステップである最初の画面に移動します。すでにreComputer J1010を接続しているため、ハードウェアデバイスを選択するウィンドウがポップアップします。

reComputer J1010には**NVIDIA Jetson Nano 4GBモジュール**が搭載されているため、最初のものを選択できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

最初の画面では、さらに多くの選択肢があります：

- Product Categoryパネルの**Jetson**を選択する必要があります。
- Hardware Configurationパネルでは、**Host Machineを選択しない**ことをお勧めします。これにより、現在のUbuntuホスト用のNVIDIAコンポーネントのインストールに時間がかかります。必要に応じて選択できます。
- Target Operating Systemパネルでは、異なる**オペレーティングシステム**と**JetPackバージョン**を選択できます。ただし、JetPackのバージョンに注意してください。異なるモジュールは異なるタイプのJetPackをサポートする場合があります。ここでは「JetPack 4.6.1」をお勧めします。
- Additional SDKsでは、eMMCのストレージ容量が16GBのみであるため、ここでDeepStreamをインストールするとメモリ不足になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Continueをクリックして次のステップに進みます。

### ステップ 4. 必要なコンポーネントを確認

**Details and License**から、ホストコンポーネントとターゲットコンポーネントのパネルを展開して、システムにインストールされるコンポーネントを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

システムのインストールのみが必要な場合は、SDKコンポーネントのチェックを外すことができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    インストールするコンポーネントを選択する際は、使用される容量に注意してください。内蔵eMMCサイズは16GBのみです。実際のニーズに応じて、この容量を賢く割り当てて使用してください。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    実際のテストの結果、SDKコンポーネントの完全セットをインストールした後、eMMC容量は約500MBしか残りません。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
    容量不足の問題を解決する方法を確認したい場合は、[トラブルシューティング](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space)を参照してください。

SDK Managerにすべてのファイルをデフォルトパス以外の場所にダウンロードさせたい場合は、画面下部にあるDownload & Install Optionsに移動し、使用したいパスを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

Continueを選択して次のステップに進みます。

### ステップ 5. システムをインストール

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

しばらくすると、NVIDIA SDK Managerに新しいウィンドウがポップアップし、IPアドレス経由でデバイスに接続する必要があることが表示されます。これは、システムが既にインストールされ、コンポーネントのインストールが進行されることを意味します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

この場合、**ジャンパーを抜いて**reComputerを再起動できます。次に、reComputerをHDMI経由でモニターに接続し、**ステップ4**で入力したパスワードを入力して、メインインターフェースにログインする必要があります。

この時点で、reComputerをLinuxホストPCと同じLANに接続し、`ifconfig`コマンドを使用してJetsonの**IPアドレス**を確認する必要があります。

LinuxホストPCに戻り、先ほど取得したIPアドレスを入力します。NVIDIA SDK ManagerはJetsonデバイスへの接続を試行し、次のSDKコンポーネントのインストールを完了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

以下のウィンドウが表示されると、インストールが完了しています。Jetsonの使用を開始するか、以下の手順に従って新しいシステムの基本設定を完了することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

!!!Attention
    システムに再度電源を入れる前に、必ずジャンパーを抜いて強制リカバリモードを終了してください。

## コマンドライン経由でのJetPack OSのフラッシュ

BSP（NVIDIA Linux Driver Package）をカスタマイズする自由度のおかげで、コマンドライン経由でのJetPack OSのフラッシュは、Linuxの知識ベースを持つユーザーにとって非常に簡単です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### ステップ1. 適切なNVIDIA Linux Driver Packageのダウンロード

**LinuxホストPC**で、ブラウザを開いて<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>にアクセスする必要があります。まず、Jetson Linuxのバージョンがrecomputer Jetsonモジュールをサポートしているかどうかを確認する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

適切なバージョンが見つかったら、クリックしてダウンロードページに移動します。「L4T Driver Package (BSP)」と「Sample Root Filesystem」を見つけてクリックし、ドライバーファイルをダウンロードします。ファイル名は`Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2`と`Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`のようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

例として、NVIDIA L4T 32.7.1バージョンを選択します。これはJetPack4.6.1の一部として含まれており、Jetson Nanoモジュールをサポートしています。ファイル名は以下の通りです：

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### ステップ2. コマンドライン経由でのパッケージファイルの解凍とRootfsの組み立て

LinuxホストPCで、フォルダを見つけて、以前にダウンロードしたパッケージファイルを保存する必要があります。次に、そのフォルダでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドラインを使用してファイルを解凍し、rootfsを組み立てます：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

:::tip
`${}` はファイル名を入力する場所です。
:::

*例として **NVIDIA L4T 32.7.1** の場合、ダウンロードしたファイルは `/Desktop/L4T_Drivers` に保存されているため、'/Desktop/L4T_Drivers' パスでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを実行します。

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### ステップ3. reComputerにシステムをフラッシュする

すでにreComputer J1010をリカバリモードに強制的に移行し、モジュールがJetson Nanoであるため、以下のコマンドを実行してreComputerに直接システムをフラッシュできます：

```sh
sudo ./flash.sh jetson-nano-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

L4Tのフラッシュには約10分、または低速なホストコンピュータではそれ以上の時間がかかります。

この時点で、ジャンパーを取り外してからreComputerを再度電源投入して使用することができます。

## Seeed BSPを使用したJetpack OSのフラッシュ

:::info

最近、NVIDIAがDRAMモデルを更新し、Seedはこのモジュール更新に対応した新しいファームウェアを現在リリースしています。

公式のNVIDIAイメージをフラッシュする過程で、DP信号によりシステムがフリーズする場合（フラッシュできずNVIDIAインターフェースで停止する現象として現れる）、更新されたモジュールを購入したことを証明します。この場合、現在提供している工場出荷時イメージをフラッシュする必要があります。

現在のこの工場出荷時イメージと元のイメージとの違いは以下の通りです：

1. DP設定が変更されています（一部のモジュールでDP信号によるシステムフリーズを防ぐため）。
2. SDカードスロットがデフォルトで使用可能状態に設定されており、SDカードスロット機能を有効にするためにデバイスツリーを追加で変更する必要がありません。
3. イメージにはJetpack4.6.6が含まれています。
4. 最新のPCNが組み込まれています。

:::

### ステップ1. 適切なNVIDIA Linux Driver Packageをダウンロード

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack バージョン</th>
      <th>ダウンロードリンク</th>
      <th>SHA265</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.6.6</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV7LGr3R0VRDsgfFibgOgfsBam44-zEqOrQJoUKpHXEmRw?e=gJEHhU" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>138547DF526D19F737DEC27856C078217D15FE9160F2669DF57823916BAA260E</td>
    </tr>
  </tbody>
</table>


</div>

### ステップ2. コマンドラインを使用してパッケージファイルを解凍し、Rootfsを組み立て

LinuxホストPC上で、事前にダウンロードしたパッケージファイルを保存するフォルダを見つける必要があります。次に、そのフォルダでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドラインを使用してファイルを解凍し、rootfsを組み立てます：

```sh
tar xpf  mfi_recomputer-nano-4g-4.6.6-32.7.6-2024-12-23.tbz2
cd mfi_jetson-nano-devkit-emmc
```

### ステップ 3. reComputer にシステムをフラッシュする

reComputer J1010 を既にリカバリモードに強制的に移行し、モジュールが Jetson Nano であるため、以下のコマンドを実行して reComputer に直接システムをフラッシュできます：

```bash
sudo ./nvmflash.sh --showlogs
```

## トラブルシューティング

### NVIDIA SDK Manager でのインストールのトラブルシューティング

様々なインストールエラーには多くの原因があります。以下は一般的なインストール問題のチェックリストで、破損したインストールからの復旧に役立つ可能性があります。

1. サマリーテーブルを確認して、どのコンポーネントが失敗したかを特定します。

    a. "Error" ステータスのグループを展開します。

    b. 失敗したコンポーネントを見つけたら、Install Error の右側にある詳細アイコンをクリックして Terminal タブにリダイレクトされ、正確なエラーが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. エラーが破損した apt リポジトリや不足している前提条件などの環境問題に関連している場合は、手動で修正してから Retry Failed Items ボタンをクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. インストールの再試行は他の2つの方法でも利用できます：

    a. **SDK Manager での eMMC へのフラッシュ -- ステップ 3** から、Repair/Uninstall ボタンを使用して Manage NVIDIA SDKs ページに移動します。必要に応じて、"Broken" ステータスの SDK を展開し、関連する部分（Host または Target）の Repair をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. **SDK Manager での eMMC へのフラッシュ -- ステップ 3** で、必要な SDK を選択して再度インストールを実行します。

5. 最後に、関連する SDK をアンインストールして再インストールしてみてください。

### コマンドラインを使用したインストールのトラブルシューティング

コマンドラインインストール方法は比較的シンプルで、強制リカバリモードが使用されるシナリオでエラーが発生しやすいことがよくあります。

**コマンドラインでの eMMC へのフラッシュ -- ステップ 2** で以下に示すエラーが発生した場合、Jetson-101 キャリアボードを強制リカバリモードに正常に入れることができなかった可能性があります。特に注意してください。Jetson-101 キャリアボードの電源が入った状態で強制リカバリモードに入らないでください。これは無効です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

**コマンドラインでの eMMC へのフラッシュ -- ステップ 3** でシステムに入ることができず、起動表示コマンドラインで止まっている場合、強制リカバリモードを終了していない可能性があります。同様に、Jetson-101 キャリアボードの電源が入っている間にジャンパーを抜いて強制リカバリモードを終了することは無効です。これらはすべて電源を切った状態で行う必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
より多くのストレージ容量が必要な場合は、SD カードを使用して容量を拡張するか、SD カードにシステムを書き込むことができます。推奨ソリューション [SD カードへのシステムフラッシュ](https://wiki.seeedstudio.com/ja/J1010_Boot_From_SD_Card/) を参照してください。
:::

## リソース

[reComputer J1010 データシート](https://files.seeedstudio.com/wiki/reComputer/reComputer-J1010-datasheet.pdf)

[reComptuer J101 キャリアボード回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J101_V2.0_SCH_240822.pdf)

[reComputer J1010 3D ファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/J1010-Jetson-Nano.stp)

[Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio Edge AI 成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson デバイス一覧](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
