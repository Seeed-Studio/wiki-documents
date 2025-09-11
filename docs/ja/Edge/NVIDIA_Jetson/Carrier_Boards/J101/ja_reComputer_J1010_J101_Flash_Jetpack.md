---
description: reComputer J1010 | J101
title: J101 キャリアボード
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_J1010_J101_Flash_Jetpack
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# J101 キャリアボード

このWikiでは、reComputer J1010にJetpack OSをフラッシュする方法を説明します。このキャリアボードは公式のNVIDIA Nano Developer Carrier Boardに似た設計となっているため、JetPackをフラッシュする方法は2つあります。

## はじめに

JetPack OSをreComputer J1010にフラッシュするには、**NVIDIA SDK Manager** Linuxソフトウェアを使用する方法と、Linuxコマンドラインを使用して**NVIDIA Linux Driver Package**を直接使用する方法があります。NVIDIA Jetson初心者には、NVIDIA SDK Managerを強く推奨します。

- [オプション 1 - NVIDIA SDK Managerを使用してJetPack OSをフラッシュする](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [オプション 2 - コマンドラインを使用してJetPack OSをフラッシュする](#flashing-jetpack-os-via-command-line)

まず、いくつかの準備が必要です：

### ソフトウェアの準備

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIAアカウント</span></a>
- Ubuntu 18.04 OS（またはそれ以上）を搭載したLinuxホストコンピュータ

:::note
このチュートリアルでは、Ubuntu 18.04 LTSベースのシステムを使用してインストールを完了します。
:::

### ハードウェアの準備（強制リカバリモード）

インストール手順に進む前に、reComputerが強制リカバリモードになっていることを確認する必要があります。

**ステップ 1.** 開始する前に、reComputerの電源を切断してください。

**ステップ 2.** ジャンパーを使用して**FC REC**ピンと**GND**ピンを接続します。

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

**ステップ 3.** reComputerの左側にType-Cケーブルを使用して電源を供給し、右側にもう1本のケーブルを使用してLinuxホストPCに接続します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ1010_J101_flash_Jetpack.png" /></div>

!!!注意
    配線を行う前に、電源コネクタとデータコネクタに注意してください。データコネクタを直接DC電源に接続しないでください。

**ステップ 4.** ホストコンピュータのコマンドラインウィンドウで、`lsusb`コマンドを入力します。返された内容に`ID 0955:7f21 NVidia Corp.`が含まれている場合、reComputerが強制リカバリモードになっていることを意味し、次の操作に進むことができます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

## NVIDIA SDK Manager を使用した JetPack OS のフラッシュ

次に、NVIDIA SDK Manager を使用してシステムをインストールする手順について説明します。NVIDIA SDK Manager は、開発者向けソフトウェアを一括で提供し、NVIDIA SDK のエンドツーエンドの開発環境セットアップソリューションを提供するオールインワンツールです。そのため、初心者には特に推奨されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

### ステップ 1. Linux ホスト PC に NVIDIA SDK Manager をインストール

Linux ホスト PC のブラウザを開き、NVIDIA の公式ウェブサイトから <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>NVIDIA SDK Manager をダウンロード</span></a> します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>

### ステップ 2. NVIDIA SDK Manager を開いてログイン

Linux ホスト PC の画面で、右クリックしてターミナルを開きます。その後、以下のコマンドを入力して SDK Manager を起動します：

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>

NVIDIA SDK Manager を初めて使用する場合、登録済みの NVIDIA アカウントでログインするよう促すウェブページが表示されます。

### ステップ 3. 対象デバイスを選択

ログイン後、インストールの最初のステップに進む画面が表示されます。すでに reComputer J1010 を接続している場合、ハードウェアデバイスを選択するウィンドウがポップアップ表示されます。

reComputer J1010 には **NVIDIA Jetson Nano 4GB モジュール**が搭載されているため、最初のオプションを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>

最初の画面では、以下の選択肢があります：

- **Product Category パネル**で **Jetson** を選択する必要があります。
- **Hardware Configuration パネル**では、**Host Machine を選択しないことを推奨**します。これを選択すると、現在の Ubuntu ホストに NVIDIA コンポーネントをインストールするのに時間がかかります。必要に応じて選択してください。
- **Target Operating System パネル**では、異なる **オペレーティングシステム** と **JetPack バージョン** を選択できます。ただし、JetPack のバージョンには注意が必要です。異なるモジュールが異なるタイプの JetPack をサポートする場合があります。ここでは "JetPack 4.6.1" を推奨します。
- **Additional SDKs** では、eMMC のストレージ容量が 16GB しかないため、ここで DeepStream をインストールすると容量不足になる可能性があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

「Continue」をクリックして次のステップに進みます。

### ステップ 4. 必要なコンポーネントを確認

**Details and License** から、ホストコンポーネントとターゲットコンポーネントのパネルを展開して、システムにインストールされるコンポーネントを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

システムのみをインストールする場合は、SDK コンポーネントのチェックを外すことができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

!!!Tip
    インストールするコンポーネントを選択する際には、使用容量に注意してください。内蔵 eMMC のサイズは 16GB しかないため、実際のニーズに応じてこのスペースを賢く割り当てて使用してください。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
    実際のテストでは、SDK コンポーネントをフルセットでインストールした後、eMMC の空き容量は約 500MB しか残りません。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
    容量不足の問題を解決する方法については、[トラブルシューティング](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space) を参照してください。

SDK Manager にすべてのファイルをデフォルトパス以外の場所にダウンロードさせたい場合は、画面下部にある Download & Install Options に移動し、使用したいパスを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

「Continue」を選択して次のステップに進みます。

### ステップ 5. システムをインストール

インストールを開始する前に、SDK Manager は `sudo` パスワードの入力を求めます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

しばらくすると、新しいシステムを reComputer に設定するよう求められます。手動でリカバリモードに強制的に移行したため、ここでは `Manual setup: set the target to Force Recovery Mode via manual operations` を選択します。同時に、デフォルトの **Pre-Config** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

その後、新しい Jetson システムの名前とパスワードを reComputer に入力します。これは自分で設定します。

準備ができたら、「Flash」をクリックして続行します。

画面にはソフトウェアのダウンロードとインストールの進行状況が表示されます。インストールが完了するまでしばらくお待ちください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

### （オプション）ステップ 6. SDK コンポーネントをインストール

前の **ステップ 4** でコンポーネントのインストールを選択した場合、このステップを実行する必要があります。

しばらくすると、NVIDIA SDK Manager に新しいウィンドウがポップアップ表示され、IP アドレスを介してデバイスに接続する必要があることが通知されます。これはシステムがすでにインストールされており、コンポーネントのインストールが進行中であることを意味します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

この場合、**ジャンパーを取り外し**、reComputerを再起動します。その後、reComputerをHDMI経由でモニターに接続し、**ステップ4**で入力したパスワードを入力してメインインターフェースにログインします。

次に、reComputerをLinuxホストPCと同じLANに接続し、コマンド`ifconfig`を使用してJetsonの**IPアドレス**を確認します。

LinuxホストPCに戻り、先ほど取得したIPアドレスを入力します。NVIDIA SDK ManagerがJetsonデバイスへの接続を試み、次のSDKコンポーネントのインストールを完了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

以下のウィンドウが表示されたら、インストールが完了したことを示します。Jetsonの使用を開始するか、以下の手順に従って新しいシステムの基本設定を完了することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

!!!注意
    ジャンパーを必ず取り外し、強制リカバリモードを終了してからシステムを再電源投入してください。

## JetPack OSをコマンドラインでフラッシュする

BSP（NVIDIA Linux Driver Package）をカスタマイズする自由度のおかげで、Linuxの知識があるユーザーにとってコマンドラインでJetPack OSをフラッシュするのは非常に簡単です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### ステップ1. 適切なNVIDIA Linux Driver Packageをダウンロードする

**LinuxホストPC**でブラウザを開き、<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>にアクセスします。まず、Jetson LinuxのバージョンがreComputer Jetsonモジュールをサポートしているか確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png" /></div>

適切なバージョンを見つけたら、ダウンロードページに進みます。「L4T Driver Package (BSP)」と「Sample Root Filesystem」を見つけてクリックし、ドライバファイルをダウンロードします。ファイル名は以下のようになります：
`Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2`および`Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

例として、NVIDIA L4T 32.7.1バージョンを選択します。このバージョンはJetPack4.6.1の一部として含まれており、Jetson Nanoモジュールをサポートしています。ファイル名は以下の通りです：

- Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
- Jetson-210_Linux_R32.7.2_aarch64.tbz2

### ステップ2. パッケージファイルを解凍し、コマンドラインでRootfsを組み立てる

LinuxホストPCで、ダウンロードしたパッケージファイルを保存するフォルダを見つけます。その後、フォルダでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを使用してファイルを解凍し、Rootfsを組み立てます：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

:::tip
`${}`はファイル名を入力する場所です。
:::

**NVIDIA L4T 32.7.1**の例として、ダウンロードしたファイルは`/Desktop/L4T_Drivers`に保存されています。そのため、`/Desktop/L4T_Drivers`パスでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを実行します。

```sh
tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

出力は以下のようになります：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### ステップ3. システムをreComputerにフラッシュする

reComputer J1010をすでにリカバリモードにしており、モジュールがJetson Nanoであるため、以下のコマンドを実行してシステムをreComputerに直接フラッシュできます：

```sh
sudo ./flash.sh jetson-nano-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

L4Tのフラッシュには約10分、またはホストコンピュータが遅い場合はそれ以上かかります。

この時点でジャンパーを取り外し、reComputerを再度電源投入して使用することができます。

## Seeed BSP を使用した Jetpack OS のフラッシュ
:::info

最近、NVIDIA は DRAM モデルを更新し、Seeed はこのモジュール更新に対応した新しいファームウェアをリリースしました。

公式の NVIDIA イメージをフラッシュする過程で、DP 信号が原因でシステムがフリーズする場合（フラッシュできず、NVIDIA インターフェースで停止する現象）、更新されたモジュールを購入したことが証明されます。この場合、現在提供しているファクトリーイメージをフラッシュする必要があります。

このファクトリーイメージと元のイメージの現在の違いは以下の通りです：
1. DP 設定が変更されました（一部のモジュールで DP 信号が原因でシステムがフリーズするのを防ぐため）。
2. SD カードスロットがデフォルトで使用可能な状態に設定されており、SD カードスロット機能を有効にするためにデバイスツリーを追加で変更する必要はありません。
3. イメージには Jetpack4.6.6 が含まれています。
4. 最新の PCN が組み込まれています。

:::

### ステップ 1. 適切な NVIDIA Linux Driver Package をダウンロードする

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

### ステップ 2. パッケージファイルを解凍し、コマンドラインで Rootfs を組み立てる

Linux ホスト PC 上で、ダウンロードしたパッケージファイルを保存するフォルダを見つけます。そのフォルダでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを使用してファイルを解凍し、Rootfs を組み立てます：

```sh
tar xpf  mfi_recomputer-nano-4g-4.6.6-32.7.6-2024-12-23.tbz2
cd mfi_jetson-nano-devkit-emmc
```

### ステップ 3. システムを reComputer にフラッシュする

すでに reComputer J1010 をリカバリーモードに強制的に設定し、モジュールが Jetson Nano であるため、以下のコマンドを実行してシステムを直接 reComputer にフラッシュできます：

```bash
sudo ./nvmflash.sh --showlogs
```

## トラブルシューティング

### NVIDIA SDK Manager を使用したインストールのトラブルシューティング

さまざまなインストールエラーの原因は多岐にわたります。以下は一般的なインストール問題のチェックリストで、壊れたインストールから復旧するのに役立つ場合があります。

1. サマリーテーブルを確認して、どのコンポーネントが失敗したかを特定します。

    a. 「エラー」ステータスのグループを展開します。

    b. 失敗したコンポーネントを見つけたら、インストールエラーの右側にある詳細アイコンをクリックして、ターミナルタブにリダイレクトします。そこに正確なエラーが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. エラーが壊れた apt リポジトリや不足している前提条件などの環境問題に関連している場合は、手動で修正を試み、その後「Retry Failed Items」ボタンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. インストールの再試行は、他の 2 つの方法でも可能です：

    a. **Flashing to eMMC with SDK Manager -- Step 3** から、Repair/Uninstall ボタンを使用して Manage NVIDIA SDKs ページに移動します。必要に応じて、「Broken」ステータスの SDK を展開し、関連部分（Host または Target）に対して Repair をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. **Flashing to eMMC with SDK Manager -- Step 3** で必要な SDK を選択し、再度インストールを実行します。

5. 最後に、関連する SDK をアンインストールして再インストールを試みます。

### コマンドラインを使用したインストールのトラブルシューティング

コマンドラインによるインストール方法は比較的シンプルですが、強制リカバリーモードを使用するシナリオではエラーが発生しやすいです。

**Flashing to eMMC with command-line -- Step 2** で以下のエラーが発生した場合、Jetson-101 キャリアボードを強制リカバリーモードに正しく設定できていない可能性があります。特に注意してください。Jetson-101 キャリアボードが電源オンの状態で強制リカバリーモードに入ることは無効です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

**Flashing to eMMC with command-line -- Step 3** でシステムに入れず、起動ディスプレイのコマンドラインで停止している場合、強制リカバリーモードを終了していない可能性があります。同様に、Jetson-101 キャリアボードが電源オンの状態でジャンパーを抜いて強制リカバリーモードを終了することは無効です。これらはすべて電源オフの状態で行う必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
より多くのストレージスペースが必要な場合、SD カードを使用して容量を拡張するか、システムを SD カードに書き込むことができます。推奨ソリューションについては [Flash System on SD card](https://wiki.seeedstudio.com/ja/J1010_Boot_From_SD_Card/) を参照してください。
:::

## リソース
[reComputer J1010 データシート](https://files.seeedstudio.com/wiki/reComputer/reComputer-J1010-datasheet.pdf)

[reComputer J101 キャリアボード回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J101_V2.0_SCH_240822.pdf)

[reComputer J1010 3D ファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/J1010-Jetson-Nano.stp)

[Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio エッジ AI 成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson デバイスワンページ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)



## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>