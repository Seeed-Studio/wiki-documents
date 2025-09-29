---
description: メモリ拡張
title: メモリ拡張
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Jetson_Memory_Expansion
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# reComputer for Jetson メモリ拡張

reComputer for Jetsonは16GBのeMMCを搭載して販売されており、**ubuntu 18.04 LTS**と**NVIDIA JetPack 4.6**がインストールされているため、残りの利用可能なユーザー領域は約2GBとなっており、これは一部のプロジェクトでreComputerを訓練や展開に使用する際の大きな障害となっています。このチュートリアルでは、この状況に基づいてreComputerの異なるモデルに対する拡張プロセスを紹介し、開発者が外部ストレージデバイスにシステムを転送することでシステムを拡張できるよう支援します。

## 容量拡張の基本原理

システムがインストールされているディスクの最初のセクターは**マスターブートレコード（MBR）**と呼ばれ、**BootLoader**、パーティションテーブル、および固定識別子**55AA**に関する情報が含まれています。Linuxの起動プロセス中、**BootLoader**と**kernel**は2つの重要な段階を経ます。

**段階1：** BootLoaderは一時的なルートファイルシステム**（ramfs）**を**（initrd）**初期化します。ramfsには、起動時に必要なドライバー、ファイルシステム（fs）、ネットワーク（net）などの設定プログラムが含まれています。その後、BootLoaderの制御がカーネルに移され、カーネルがこれらのプログラムを取り出し、メモリ**（RAM）**に移動して実行し、様々な機能モジュールをロードできるようになります。

**段階2：** カーネルがramfsで必要なモジュールをロードした後、システムを解放し、実際のルートファイルシステム**（rootfs）**を設定して実際のルートディレクトリにマウントします。

1. 上記の2つの段階において、カーネルがramfsで機能モジュールをロードする部分（段階1）を変更する必要はないため、reComputerが拡張されても、依然としてeMMCを使用する必要があります。
2. 変更が必要なのは第2段階で、ルートファイルシステムを外部メモリにマウントすることで、拡張を実現します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/2.png" /></div>

## 容量拡張に関する注意事項

1. 外部ストレージによる拡張の主な原理は、rootfsを外部ストレージデバイス上に設定することです。

2. この拡張方法はLinuxカーネルレベルのシステムファイルを変更するため、解決が困難な問題に遭遇する可能性があります。このチュートリアルに従って拡張を完了する際は、新しいreComputerと新しいストレージデバイスを使用し、**デバイスに貴重なファイルを保存しようとしないでください**。すべてが期待通りに動作しない場合、ストレージデバイスやreComputerの再フォーマットが必要になる可能性があり、最終的な保持オプションとして、可能であればシリアルポート経由でバックアップの復元をお手伝いしますが、データ損失については自己責任となります。

3. この拡張プロセスはカーネルの再コンパイルを必要とせず、オンラインで利用可能な他の従来の拡張方法と比較して約40分のインストール時間を節約できます。

## キャリアボード上のM.2スロットとSSDによる拡張

SSD（Solid State Drive）は、ラップトップやデスクトップなどの主要ストレージデバイスとしてよく使用されます。高い信頼性と高速なデータ読み書き速度により、reComputerの拡張に最適な選択肢です。以下の表は、現在SSD拡張ソリューションが利用可能なreComputerシリーズ製品を示しています。reComputer J1010がSSD拡張をサポートしない主な理由は、キャリアボードに適切なM.2スロットが搭載されていないためです。

<table align="center">
  <tbody><tr>
      <th align="center">製品</th>
      <th align="center">reComputer J1020</th>  
      <th align="center">reComputer J2011</th>
      <th align="center">reComputer J2012</th>
      <th align="center">reComputer J2021</th>
    </tr>
    <tr>
      <th align="center">SKU
      </th><td align="center">110061361</td>
      <td align="center">110061363</td>
      <td align="center">110061401</td>
      <td align="center">110061381</td>
    </tr>
    <tr>
      <th align="center">側面図</th>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
    </tr>
    <tr>
      <th align="center">搭載モジュール</th>
      <td align="center">Jetson Nano 4G</td>
      <td align="center">Jetson Xavier NX 8GB</td>
      <td align="center">Jetson Xavier NX 16GB</td>
      <td align="center">Jetson Xavier NX 8GB</td>
    </tr>
    <tr>
      <th align="center">動作キャリアボード</th>
      <td align="center">Jetson A206</td>
      <td align="center">Jetson A206</td>
      <td align="center">Jetson A206</td>
      <td align="center">J202</td>
    </tr>
  </tbody>
</table>

### ソフトウェアとハードウェア要件

SSDを使用した拡張ソリューションでは、以下の条件を満たす必要があります。これらは拡張が成功することを証明するための基本要件です。

<table align="center">
  <tbody><tr>
      <th align="center"> </th>
      <th align="center">ソフトウェアとハードウェア要件</th>  
    </tr>
    <tr>
      <th align="center">reComputer for Jetson</th>
      <td align="left">JetPack バージョン 4.4 ~ 4.6 <br />
        キャリアボードにはM.2 M-Keyスロットが必要</td>
    </tr>
    <tr>
      <th align="center">SSD</th>
      <td align="left">SSDは第4世代拡張ファイルシステム（Ext4）である必要があります <br />
        NVMeプロトコル対応のM.2 M-Keyインターフェース <br />
        推奨容量 ≤ 512 GB</td>
    </tr>
  </tbody>
</table>

!!!Attention
    更新されたJetPackバージョンは拡張についてテストされていないため、拡張の安定性や成功は保証できません。このチュートリアルに慎重に従ってください。

    SSDはM.2 M-Keyである必要があります。そうでなければキャリアボード上のインターフェースと一致しません。
    <div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/3.jpeg"/></div>

    拡張第4世代ファイルシステム（Ext4）以外のストレージデバイスでは拡張操作を完了できません。

### 拡張手順

**ステップ1.** SSDを取り付ける

[ハードウェア説明書](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Hardware_Layout/)の手順に従って、reComputer用のSSDを取り付けます。

**ステップ2.** SSDを準備する

ショートカット`Ctrl+F`を使用するか、左上のUbuntuアイコンをクリックして**Disks**を検索し、Ubuntu 18.04に付属のDisksツールを開きます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/1.png" /></div>

左側でSSDを選択し、メニューバーの右上にある**Format Disk**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd1.jpg" /></div>

SSDをGPT形式にフォーマットします。確認を求めるポップアップウィンドウが表示され、ユーザーパスワードの入力が求められます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd3.png" /></div>

次に、中央の**+**をクリックしてディスク文字を追加します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd6.png" /></div>

「Next」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd7.png" /></div>

SSDに名前を付け、タイプで**Ext4**を選択して「Create」をクリックしてください。この時点で拡張要件に従ってSSDの準備が完了しました。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd8.png" /></div>

**ステップ3.** ルートディレクトリをSSDに構築する

gitコマンドを使用して、reComputerで使用する必要があるスクリプトファイルをダウンロードします。

```sh
git clone https://github.com/limengdu/rootOnNVMe.git
cd rootOnNVMe/
```

次に、以下のコマンドを実行してeMMCのルートディレクトリからSSDにファイルをビルドします。この手順の待機時間は、使用しているルートディレクトリのサイズによって異なります。

```sh
./copy-rootfs-ssd.sh
```

**ステップ4.** 環境を設定し、展開を完了する

以下のコマンドを実行してrootfsの設定を完了します。

```sh
./setup-service.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/9.png" /></div>

reComputerを再起動すると、メインインターフェースでeMMCが外部ストレージデバイスになっていることがわかり、システムのフットプリントが削減されていることが確認できるため、拡張が成功したことがわかります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/11.png" /></div>

!!!Attention
    スクリプトファイル内のデフォルトのSSDパスは `/dev/nvme0n1p1` で、これはreComputerによってデフォルトで割り当てられるパスでもあります。`sudo fdisk -l` コマンドでSSDパスがこれと一致しないことがわかった場合は、rootOnNVMe内のファイル **copy-rootfs-ssd.sh**、**data/setssdroot.service**、および **data/setssdroot.sh** 内のすべての `/dev/nvme0n1p1` のパスを、SSDが配置されているパスに変更してください。
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/21.png" /></div>

    上記の拡張では、eMMCから元のルートディレクトリの内容は削除されません。SSDからブートしたくない場合は、SSDを取り外すことができ、システムは依然としてeMMCからブートします。

## USBストレージデバイスによる容量拡張

USBフラッシュドライブやモバイルハードドライブなどのUSBストレージデバイスは、生活の様々な分野で外部ストレージとして広く使用されており、USB拡張もreComputerに適用できます。以下の表は、現在USB拡張ソリューションが利用可能なreComputer製品を一覧表示しています。

<table align="center">
  <tbody><tr>
      <th align="center">製品</th>
      <th align="center">reComputer J1010</th>  
    </tr>
    <tr>
      <th align="center">SKU</th>
      <td align="center">110061362</td>
    </tr>
    <tr>
      <th align="center">側面図</th>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview3_1.png" /></div></td>
    </tr>
    <tr>
      <th align="center">搭載モジュール</th>
      <td align="center">Jetson Nano 4G</td>
    </tr>
    <tr>
      <th align="center">動作キャリアボード</th>
      <td align="center">J1010キャリアボード</td>
    </tr>
  </tbody>
</table>

USBストレージデバイス経由でのスケーリングがSSD経由でのスケーリングに対する最大の利点は、USBデバイスの高い利便性と取り外しの簡単さです。
しかし、高速なUSB 3.2インターフェースを使用しても、データ転送速度は標準的なPCIeバスよりもはるかに劣るため、安定性、信頼性、データ転送速度の観点では、SSD拡張方式の方が優れています。

### ソフトウェアとハードウェア要件

USBを使用した拡張ソリューションでは、以下の条件を満たす必要があります。これは拡張が正常に実行できることを検証するための基本要件です。

<table align="center">
  <tbody><tr>
      <th align="center"> </th>
      <th align="center">ソフトウェアとハードウェア要件</th>  
    </tr>
    <tr>
      <th align="center">reComputer for Jetson</th>
      <td align="left">JetPack バージョン 4.4 ~ 4.6 <br />
        搭載モジュールはJetson Nanoである必要があります</td>
    </tr>
    <tr>
      <th align="center">USBストレージデバイス</th>
      <td align="left">USBストレージデバイスは第4世代拡張ファイルシステム（Ext4）である必要があります <br />
        USBストレージデバイスの電源供給電流 ≤ 0.5 A</td>
    </tr>
  </tbody>
</table>

!!!注意
    更新されたJetPackバージョンは拡張についてテストされていないため、拡張の安定性や成功は保証できません。このチュートリアルに慎重に従ってください。

    大容量USBストレージデバイスは、適切な動作を維持するためにreComputerが適切に電源供給される必要があり、512GB以上の容量のUSBストレージデバイスは推奨されません。電源供給不足によりreComputerの電源が落ちる可能性があります。

    Jetson Nano以外の搭載モジュールは、現時点でこの方法による拡張をサポートしていません。

    非拡張第4世代ファイルシステム（Ext4）のストレージデバイスは拡張操作を完了できません。

### 拡張手順

**ステップ1.** 必要なドキュメントを準備する

gitコマンドを使用して、reComputerで使用する必要があるスクリプトファイルをダウンロードします。

```sh
git clone https://github.com/limengdu/bootFromUSB.git
cd bootFromUSB
```

**ステップ 2.** USBストレージデバイスの準備

USBストレージデバイスをreComputerに接続し、ショートカット`Ctrl+F`を使用するか、左上角のUbuntuアイコンをクリックして**Disks**を検索することで、Ubuntu 18.04に付属のDisksツールを開きます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/1.png" /></div>

左側でUSBストレージデバイスを選択し、メニューバーの右上角にある**Format Disk**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd1.jpg" /></div>

USBストレージデバイスをGPT形式にフォーマットします。確認を求めるポップアップウィンドウが表示され、ユーザーパスワードの入力が必要になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd2.png" /></div>

次に、中央の**+**をクリックしてディスク文字を追加します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd4.png" /></div>

「Next」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd5.png" /></div>

USBストレージデバイスに名前を付け、タイプで**Ext4**を選択して「Create」をクリックしてください。この時点で、拡張要件に従ったUSBストレージデバイスの準備が完了しました。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd6.png" /></div>

**ステップ 3.** USBストレージデバイスのマウント

**ステップ 2**に従って準備されたUSBストレージデバイスは、Disksソフトウェアでアンマウント状態として表示されます。

!!!Note
 フォーマット後にUSBデバイスが自動的にマウントされていることがわかった場合は、このステップをスキップしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/60.png" /></div>

以下のコマンドを使用してUSBデバイスをマウントします。

```sh
mkdir /media/USB/
sudo mount <USB Device Path> /media/USB/
```

`<USB Device Path>` は USB ストレージデバイスのパスを指します。このパラメータは Disks ソフトウェアの Device で確認するか、`sudo fdisk -l` コマンドで照会できます。例えば、私の USB デバイスの場合、以下のコマンドで `/dev/sda1` を `/media/USB/` にマウントできます。

```sh
sudo mount /dev/sda1 /media/USB/
```

次のコマンドを使用して、デバイスのマウント場所を確認してください。

```sh
sudo findmnt -rno TARGET <USB Device Path>
```

私のUSBデバイスの場合、使用する必要があるコマンドは以下の通りです：

```sh
sudo findmnt -rno TARGET /dev/sda1
```

**ステップ 4.** システムをUSBストレージデバイスにコピーする

**copyRootToUSB.sh** スクリプトは、eMMCシステム全体の内容をUSBストレージデバイスにコピーします。もちろん、USBストレージデバイスはeMMCよりも多くのストレージ容量を持っている必要があります。

使用するコマンドは以下の通りです。

```sh
usage: ./copyRootToUSB.sh [OPTIONS]
-d | --directory     Directory path to parent of kernel

-v | --volume_label  Label of Volume to lookup

-p | --path          Device Path to USB drive (e.g. /dev/sda1)

-h | --help  This message
```

一般的に、通常の拡張ニーズに対しては、パラメータ `[OPTIONS]` で `-p` を選択するだけで、後で **ステップ3** で取得したUSBデバイスのパス（例：`/dev/sda1`）を追加する必要があります。例えば、私のUSBデバイスの場合、使用する必要がある完全なコマンドは次のとおりです：

```sh
./copyRootToUSB.sh -p /dev/sda1
```

このコマンドの実行時間は、eMMCに保存されているファイルのサイズによって異なります。

**ステップ5.** USBデバイスのUUIDの照会

念のため、USBデバイスのUUIDを調べる必要があります。

```sh
./partUUID.sh 
```

このコマンドのデフォルトパスは **sda1 (/dev/sda1)** ですが、他のUSBデバイスのUUIDも確認できます。`-d`フラグを使用して`/dev/`を指定します。例えば、私のUSBデバイスの場合は次のようになります：

```sh
$ ./partUUID.sh -d sdb1

UUID of Disk: /dev/sdb1
e34d67bb-83bb-4fc5-b9a4-a1388d2b2be5
Sample for /boot/extlinux/extlinux.conf entry:
APPEND ${cbootargs} root=UUID=e34d67bb-83bb-4fc5-b9a4-a1388d2b2be5 rootwait rootfstype=ext4
```

!!!注意
    返されたUUIDが上記の例と形式や長さが異なる場合、デバイスはおそらくExt4としてフォーマットされていません。**ステップ2**からやり直してください！

**ステップ6.** ブート設定を変更して拡張を完了する

まず、ブート設定ファイルのバックアップを作成する必要があります。

```sh
sudo cp /boot/extlinux/extlinux.conf /boot/extlinux/extlinux.conf.bak
```

この手順は、USBデバイス拡張操作において最も重要で危険な手順です。`/boot/extlinux/extlinux.conf`ファイルと`/media/nvidia/boot/extlinux/extlinux.conf`を編集し、新しいrootfsを指すエントリを追加します。場所はUSBデバイスのパスで、以下のパラメータ`<path>`に記入します。パス情報は**手順3**で取得されます。

```sh
$ sudo vi /boot/extlinux/extlinux.conf
$ sudo vi /media/nvidia/boot/extlinux/extlinux.conf

LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      APPEND ${cbootargs} quiet root=<path> rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1
```

私が使用しているUSBストレージデバイスでは、変更された `/boot/extlinux/extlinux.conf` ファイルと `/media/nvidia/boot/extlinux/extlinux.conf` の内容は以下の通りです：

```sh
TIMEOUT 30
DEFAULT primary

MENU TITLE L4T boot options

LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      APPEND ${cbootargs} quiet root=/dev/sda1 rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1
#      APPEND ${cbootargs} quiet root=/dev/mmcblk0p1 rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1 

# When testing a custom kernel, it is recommended that you create a backup of
# the original kernel and add a new entry to this file so that the device can
# fallback to the original kernel. To do this:
#
# 1, Make a backup of the original kernel
#      sudo cp /boot/Image /boot/Image.backup
#
# 2, Copy your custom kernel into /boot/Image
#
# 3, Uncomment below menu setting lines for the original kernel
#
# 4, Reboot

# LABEL backup
#    MENU LABEL backup kernel
#    LINUX /boot/Image.backup
#    INITRD /boot/initrd
#    APPEND ${cbootargs}
```

ファイルを保存してreComputerを再起動すると、システムルートがUSBストレージデバイスに切り替わり、拡張が完了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/62.png" /></div>

## シリアルコンソール経由でのシステムバックアップの復元

エラーによりシステムが正常に起動しない場合、またはその他の理由（一般的なシナリオは起動時にNvidiaアイコンが繰り返し表示される）の場合、拡張時に作成したバックアップが重要な役割を果たします。この瞬間のあなたの不安を理解していますが、辛抱強く以下の手順に従ってreComputerをシリアルコンソールに入れ、U-bootを操作してバックアップを復元します。

### 材料準備

<table align="center">
  <tbody><tr>
      <th align="center">材料準備</th>
      <th align="center">説明</th>  
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/7.jpeg" /></div></th>
      <td align="left">Ubuntuホスト x1</td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerheadline.png" /></div></th>
      <td align="left">システムにアクセスできないreComputer Jetson x1</td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/5.png" /></div></th>
      <td align="left"><a href="https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html?queryID=cb30ad1a9d75c9ef437912535186b130&objectID=1112&indexName=bazaar_retailer_products">UART to USBモジュール x1</a></td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/6.png" /></div></th>
      <td align="left"><a href="https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html?queryID=a51c4491cb6b462a1e844c832c98c52a&objectID=2042&indexName=bazaar_retailer_products">メス-メス デュポンワイヤー x3</a></td>
    </tr>
  </tbody>
</table>

### シリアルコンソールにアクセスする手順

**ステップ 1.** UART to USB モジュールを reComputer に接続する

以下の表の配線指示に従って、reComputer を UART to USB モジュールに接続します。

<table align="center">
  <tbody><tr>
      <td colSpan={3}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/8.jpeg" /></div></td>
    </tr>
    <tr>
      <td align="center">reComputer</td>
      <td align="center"> </td>
      <td align="center">UART to USB module</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">UART TXD</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
    <tr>
      <td align="center">UART RXD</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
  </tbody>
</table>

!!!Tip
    reComputer と UART to USB モジュール間の VCC インターフェースは接続する必要がありません。

    ケーブル接続後、reComputer は当面電源を入れる必要がないので、今のところ脇に置いておいてください。

    拡張された外部メモリを取り外してください。

**ステップ 2.** Ubuntu ホストに minicom をインストールして開始する

Ubuntu ホストに minicom がインストールされていない場合は、以下のコマンドでコンピュータに minicom をインストールできます。

```sh
sudo apt-get install minicom
```

インストールが完了するまで待った後、minicomを起動するコマンドを入力します。

```sh
sudo minicom
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/40.png" /></div>

**ステップ 3.** minicomの設定準備

minicomのメニューバーで、シリアルポートを開いて設定し、minicomを通じてreComputerの起動情報を取得できるようにします。メニューバーで、キーボードの**o**キーを押して設定画面にアクセスします。キーボードの上下矢印キーを使用してカーソルを**Serial port setup**に移動させます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/41.png" /></div>

**ステップ 4.** reComputerをUbuntuホストに接続

この時点で、新しいコマンドラインウィンドウを作成し、そのウィンドウでコマンドを入力して新しいデバイスのアクセスを監視します。

```sh
dmesg --follow
```

この時点で、reComputerの電源を入れ、UART to USBモジュールをUSBポート経由でUbuntuホストに接続されたreComputerと接続します。コマンドラインウィンドウには新しく接続されたデバイスの名前が表示されるので、**tty**で始まる部分を見つけて書き留める必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/44.png" /></div>

**ステップ 5.** U-boot操作

minicomに戻り、**ステップ4**で取得したデバイス名を**Serial Device**に入力します。また、ボーレートが**115200**に設定されているかどうかも確認してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/42.png" /></div>

変更後、Enterキーを押して保存します。**Save setup as dfl**を選択し、minicomインターフェースを終了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/43.png" /></div>

再度`sudo minicom`コマンドを入力し、minicomに入ると、ウィンドウにreComputerの起動情報が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/45.png" /></div>

返された情報を使用してreComputerが起動に失敗する理由をトラブルシューティングでき、helpコマンドを使用してU-bootシステムで利用可能なすべてのコマンドを確認できます。これらのコマンドの使用方法を知ることは問題を解決するために必要ですが、もちろん難しい場合もあります。

```sh
Tegra210 (P3450-0000) # help
?         - alias for 'help'
base      - print or set address offset
bdinfo    - print Board Info structure
blkcache  - block cache diagnostics and control
boot      - boot default, i.e., run 'bootcmd'
bootd     - boot default, i.e., run 'bootcmd'
bootefi   - Boots an EFI payload from memory
bootelf   - Boot from an ELF image in memory
booti     - boot Linux kernel 'Image' format from memory
bootm     - boot application image from memory
bootp     - boot image via network using BOOTP/TFTP protocol
bootvx    - Boot vxWorks from an ELF image
cmp       - memory compare
coninfo   - print console devices and information
cp        - memory copy
crc32     - checksum calculation
dcache    - enable or disable data cache
dfu       - Device Firmware Upgrade
dhcp      - boot image via network using DHCP/TFTP protocol
dm        - Driver model low level access
echo      - echo args to console
editenv   - edit environment variable
enterrcm  - reset Tegra and enter USB Recovery Mode
env       - environment handling commands
exit      - exit script
ext2load  - load binary file from a Ext2 filesystem
ext2ls    - list files in a directory (default /)
ext4load  - load binary file from a Ext4 filesystem
ext4ls    - list files in a directory (default /)
ext4size  - determine a file's size
ext4write - create a file in the root directory
false     - do nothing, unsuccessfully
fatinfo   - print information about filesystem
fatload   - load binary file from a dos filesystem
fatls     - list files in a directory (default /)
fatmkdir  - create a directory
fatrm     - delete a file
fatsize   - determine a file's size
fatwrite  - write file into a dos filesystem
fdt       - flattened device tree utility commands
fstype    - Look up a filesystem type
go        - start application at address 'addr'
gpio      - query and control gpio pins
gzwrite   - unzip and write memory to block device
help      - print command description/usage
i2c       - I2C sub-system
icache    - enable or disable instruction cache
imxtract  - extract a part of a multi-image
itest     - return true/false on integer compare
ln        - Create a symbolic link
load      - load binary file from a filesystem
loadb     - load binary file over serial line (kermit mode)
loads     - load S-Record file over serial line
loadx     - load binary file over serial line (xmodem mode)
loady     - load binary file over serial line (ymodem mode)
loop      - infinite loop on address range
ls        - list files in a directory (default /)
lzmadec   - lzma uncompress a memory region
md        - memory display
mii       - MII utility commands
mm        - memory modify (auto-incrementing address)
mmc       - MMC sub system
mmcinfo   - display MMC info
mw        - memory write (fill)
nm        - memory modify (constant address)
nvme      - NVM Express sub-system
part      - disk partition related commands
pci       - list and access PCI Configuration Space
ping      - send ICMP ECHO_REQUEST to network host
printenv  - print environment variables
pxe       - commands to get and boot from pxe files
reset     - Perform RESET of the CPU
run       - run commands in an environment variable
save      - save file to a filesystem
saveenv   - save environment variables to persistent storage
setenv    - set environment variables
sf        - SPI flash sub-system
showvar   - print local hushshell variables
size      - determine a file's size
sleep     - delay execution for some time
source    - run script from memory
sspi      - SPI utility command
sysboot   - command to get and boot from syslinux files
test      - minimal test like /bin/sh
tftpboot  - boot image via network using TFTP protocol
true      - do nothing, successfully
ums       - Use the UMS [USB Mass Storage]
unzip     - unzip a memory region
usb       - USB sub-system
usbboot   - boot from USB device
version   - print monitor, compiler and linker version
```

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
