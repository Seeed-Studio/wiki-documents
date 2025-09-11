---
description: メモリ拡張
title: メモリ拡張
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Jetson_Memory_Expansion
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus用

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer for Jetson メモリ拡張

reComputer for Jetson は16GBのeMMCを搭載しており、**Ubuntu 18.04 LTS** と **NVIDIA JetPack 4.6** がインストールされています。そのため、利用可能なユーザースペースは約2GBとなり、一部のプロジェクトでreComputerをトレーニングやデプロイに使用する際に大きな障害となります。このチュートリアルでは、この状況に基づいて異なるモデルのreComputerの拡張プロセスを紹介し、外部ストレージデバイスにシステムを移行することで開発者がシステムを拡張できるようにします。

## 容量拡張の基本

システムがインストールされているディスクの最初のセクターは**マスターブートレコード (MBR)**と呼ばれ、**BootLoader**、パーティションテーブル、および固定識別子**55AA**に関する情報が含まれています。Linuxの起動プロセスでは、**BootLoader**と**カーネル**が2つの重要なフェーズを経ます。

**フェーズ1:** BootLoaderは一時的なルートファイルシステム**(ramfs)**を初期化します**(initrd)**。ramfsには、起動時に必要なドライバ、ファイルシステム(fs)、ネットワーク(net)などの構成プログラムが含まれています。その後、BootLoaderの制御がカーネルに移され、カーネルがこれらのプログラムを取り出してメモリ**(RAM)**に移動し、実行してさまざまな機能モジュールをロードします。

**フェーズ2:** カーネルがramfsを使用して必要なモジュールをロードした後、システムを解放し、実際のルートファイルシステム**(rootfs)**を構成して実際のルートディレクトリにマウントします。

1. 上記の2つのフェーズでは、ramfsを使用して機能モジュールをロードするカーネル部分(フェーズ1)を変更する必要はありません。そのため、reComputerが拡張されても、引き続きeMMCを使用する必要があります。
2. 私たちが変更する必要があるのは第2フェーズであり、ルートファイルシステムを外部メモリにマウントすることで拡張を可能にします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/2.png" /></div>

## 容量拡張に関する注意事項

1. 外部ストレージによる拡張の主な原則は、rootfsを外部ストレージデバイスに設定することです。

2. この拡張方法ではLinuxカーネルレベルのシステムファイルを変更するため、解決が難しい問題に直面する可能性があります。このチュートリアルを実行する際は、新しいreComputerと新しいストレージデバイスを使用し、**デバイスに貴重なファイルを保存しないでください**。すべてが期待通りに動作しない場合、ストレージデバイスやreComputerを再フォーマットする必要があるかもしれません。最終的な保持オプションとして、可能であればシリアルポートを介してバックアップを復元するお手伝いをしますが、データ損失については自己責任となります。

3. この拡張プロセスではカーネルの再コンパイルを必要とせず、オンラインで利用可能な従来の拡張方法と比較して約40分のインストール時間を節約できます。

## キャリアボードおよびSSDによるM.2スロットを使用した拡張

SSD（Solid State Drive、ソリッドステートドライブ）は、ノートパソコンやデスクトップなどの主要なストレージデバイスとしてよく使用されます。その高い信頼性と高速なデータ読み書き速度により、reComputerの拡張に最適な選択肢です。以下の表は、現在SSD拡張ソリューションに対応しているreComputerシリーズ製品を示しています。reComputer J1010がSSD拡張をサポートしていない主な理由は、キャリアボードに適切なM.2スロットが装備されていないためです。

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


### ソフトウェアおよびハードウェア要件

SSDを使用した拡張ソリューションを実現するためには、以下の条件を満たす必要があります。これらは拡張が成功するための基本要件です。

<table align="center">
  <tbody><tr>
      <th align="center"> </th>
      <th align="center">ソフトウェアおよびハードウェア要件</th>  
    </tr>
    <tr>
      <th align="center">Jetson用reComputer</th>
      <td align="left">JetPackバージョン 4.4 ~ 4.6 <br />
        キャリアボードにM.2 M-Keyスロットが必要</td>
    </tr>
    <tr>
      <th align="center">SSD</th>
      <td align="left">SSDは第4世代拡張ファイルシステム（Ext4）である必要があります <br />
        M.2 M-KeyインターフェースとNVMeプロトコルを使用 <br />
        推奨容量 ≤ 512 GB</td>
    </tr>
  </tbody>
</table>


:::caution 注意
更新されたJetPackバージョンは拡張のテストが行われていないため、拡張の安定性や成功を保証することはできません。このチュートリアルを慎重に従ってください。

SSDはM.2 M-Keyである必要があります。それ以外の場合、キャリアボードのインターフェースと一致しません。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/3.jpeg"/></div>

第4世代拡張ファイルシステム（Ext4）以外のストレージデバイスでは拡張操作を完了できません。
:::

### 拡張手順

**ステップ1.** SSDを取り付ける

[ハードウェア説明書](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Hardware_Layout/)の手順に従って、reComputerにSSDを取り付けてください。

**ステップ2.** SSDを準備する

ショートカットキー`Ctrl+F`を使用するか、左上のUbuntuアイコンをクリックして**Disks**を検索し、Ubuntu 18.04に付属のDisksツールを開きます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/1.png" /></div>

左側でSSDを選択し、右上のメニューバーの下にある**Format Disk**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd1.jpg" /></div>


SSDをGPT形式にフォーマットします。確認を求めるポップアップウィンドウが表示され、ユーザーパスワードを入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd3.png" /></div>


次に、中央の**+**をクリックしてディスク文字を追加します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd6.png" /></div>


「次へ」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd7.png" /></div>


SSDに名前を付け、タイプで**Ext4**を選択して「作成」をクリックします。この時点で、拡張要件に従ってSSDの準備が完了しました。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd8.png" /></div>


**ステップ3.** SSDにルートディレクトリを構築する

gitコマンドを使用して、reComputerで使用するスクリプトファイルをダウンロードします。

```sh
$ git clone https://github.com/limengdu/rootOnNVMe.git
$ cd rootOnNVMe/
```

次に、以下のコマンドを実行して、eMMCのルートディレクトリからSSDにファイルを構築します。このステップの待ち時間は、使用しているルートディレクトリのサイズによって異なります。

```sh
$ ./copy-rootfs-ssd.sh
```

**ステップ4.** 環境を構成し、拡張を完了する

以下のコマンドを実行して、rootfsの構成を完了します。

```sh
$ ./setup-service.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/9.png" /></div>

reComputerを再起動すると、eMMCがメインインターフェース上で外部ストレージデバイスとして表示され、システムのフットプリントが減少していることが確認できます。これにより、拡張が成功したことがわかります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/11.png" /></div>

:::caution 注意
スクリプトファイル内のデフォルトのSSDパスは`/dev/nvme0n1p1`です。これはreComputerによってデフォルトで割り当てられるパスでもあります。`sudo fdisk -l`コマンドで確認した際に、SSDパスがこれと一致しない場合は、rootOnNVMe内の**copy-rootfs-ssd.sh**、**data/setssdroot.service**、および**data/setssdroot.sh**ファイル内のすべての`/dev/nvme0n1p1`を、SSDが存在するパスに変更してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/21.png" /></div>

上記の拡張では、eMMCから元のルートディレクトリの内容が削除されることはありません。SSDから起動したくない場合は、SSDを取り外すことでシステムはeMMCから起動します。
:::

## USBストレージデバイスによる容量拡張

USBフラッシュドライブやモバイルハードドライブなどのUSBストレージデバイスは、さまざまな場面で外部ストレージとして広く使用されています。USB拡張はreComputerにも適用可能です。以下の表は、現在USB拡張ソリューションが利用可能なreComputer製品を示しています。

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

USBストレージデバイスによる拡張の最大の利点は、USBデバイスの高い利便性と取り外しの簡単さです。しかし、高速USB 3.2インターフェースを使用しても、データ転送速度は標準PCIeバスよりもはるかに遅いため、安定性、信頼性、データ転送速度の観点ではSSD拡張方法の方が優れています。

### ソフトウェアおよびハードウェア要件

USBを使用した拡張ソリューションでは、以下の条件を満たす必要があります。これは、拡張が正常に行えることを確認するための基本要件です。

<table align="center">
  <tbody><tr>
      <th align="center"> </th>
      <th align="center">ソフトウェアおよびハードウェア要件</th>  
    </tr>
    <tr>
      <th align="center">Jetson用reComputer</th>
      <td align="left">JetPackバージョン4.4〜4.6 <br />
        搭載モジュールはJetson Nanoである必要があります</td>
    </tr>
    <tr>
      <th align="center">USBストレージデバイス</th>
      <td align="left">USBストレージデバイスは第4世代拡張ファイルシステム（Ext4）である必要があります <br />
        USBストレージデバイスの電源供給電流 ≤ 0.5 A</td>
    </tr>
  </tbody>
</table>

:::caution 注意
更新されたJetPackバージョンでは拡張のテストが行われていないため、拡張の安定性や成功を保証することはできません。このチュートリアルを慎重に従ってください。

大容量USBストレージデバイスでは、reComputerが適切に電源供給される必要があります。512 GBを超える容量のUSBストレージデバイスは推奨されません。不十分な電源供給は、reComputerの電源ダウンを引き起こす可能性があります。

Jetson Nano以外の搭載モジュールでは、この方法を使用した拡張は現在サポートされていません。

第4世代拡張ファイルシステム（Ext4）以外のストレージデバイスでは、拡張操作を完了することができません。
:::

### 拡張手順

**ステップ1.** 必要なドキュメントを準備する

gitコマンドを使用して、reComputerで使用するスクリプトファイルをダウンロードします。

```sh
$ git clone https://github.com/limengdu/bootFromUSB.git
$ cd bootFromUSB
```

**ステップ2.** USBストレージデバイスの準備

USBストレージデバイスをreComputerに接続し、Ubuntu 18.04に付属のDisksツールをショートカット`Ctrl+F`を使用するか、左上のUbuntuアイコンをクリックして**Disks**を検索して開きます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/1.png" /></div>

左側でUSBストレージデバイスを選択し、メニューバーの右上にある**Format Disk**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd1.jpg" /></div>

USBストレージデバイスをGPT形式にフォーマットします。確認を求めるポップアップウィンドウが表示され、ユーザーパスワードを入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd2.png" /></div>

次に、中央の**+**をクリックしてディスク文字を追加します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd4.png" /></div>

「次へ」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd5.png" /></div>

USBストレージデバイスに名前を付け、タイプで**Ext4**を選択し、「作成」をクリックします。この時点で、拡張要件に従ってUSBストレージデバイスの準備が完了しました。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd6.png" /></div>

**ステップ3.** USBストレージデバイスのマウント

**ステップ2**に従って準備したUSBストレージデバイスは、Disksソフトウェアで未マウントとして表示されます。

:::caution 注意
フォーマット後にUSBデバイスが自動的にマウントされている場合、このステップをスキップしてください。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/60.png" /></div>

USBデバイスをマウントするには、以下のコマンドを使用します。

```sh
$ mkdir /media/USB/
$ sudo mount <USB Device Path> /media/USB/
```

ここで、`<USB Device Path>`はUSBストレージデバイスのパスを指します。このパラメータは、Disksソフトウェアの「デバイス」セクションで確認するか、`sudo fdisk -l`コマンドで照会できます。例えば、私のUSBデバイスの場合、以下のコマンドを使用して`/dev/sda1`を`/media/USB/`にマウントできます。

```sh
$ sudo mount /dev/sda1 /media/USB/
```

デバイスのマウント場所を確認するには、以下のコマンドを使用します。

```sh
$ sudo findmnt -rno TARGET <USB Device Path>
```

私のUSBデバイスの場合、使用するコマンドは以下の通りです。

```sh
$ sudo findmnt -rno TARGET /dev/sda1
```

---

**ステップ4.** システムをUSBストレージデバイスにコピーする

**copyRootToUSB.sh**スクリプトは、eMMCシステム全体の内容をUSBストレージデバイスにコピーします。もちろん、USBストレージデバイスはeMMCよりも多くのストレージ容量を持っている必要があります。

使用するコマンドは以下の通りです。

```sh
usage: ./copyRootToUSB.sh [OPTIONS]
-d | --directory     カーネルの親ディレクトリパス

-v | --volume_label  検索するボリュームのラベル

-p | --path          USBドライブのデバイスパス (例: /dev/sda1)

-h | --help          このメッセージ
```

一般的な拡張のニーズに対しては、パラメータ`[OPTIONS]`で`-p`を選択し、その後に**ステップ3**で取得したUSBデバイスのパス（例: `/dev/sda1`）を追加します。例えば、私のUSBデバイスの場合、使用する完全なコマンドは以下の通りです。

```sh
$ ./copyRootToUSB.sh -p /dev/sda1
```

このコマンドの実行にかかる時間は、eMMCに保存されているファイルのサイズによって異なります。

---

**ステップ5.** USBデバイスのUUIDを照会する

念のため、USBデバイスのUUIDを確認する必要があります。

```sh
$ ./partUUID.sh 
```

このコマンドのデフォルトパスは**sda1 (/dev/sda1)**ですが、他のUSBデバイスのUUIDを確認することもできます。`-d`フラグを使用して`/dev/`を指定します。例えば、私のUSBデバイスの場合は以下の通りです。

```sh
$ ./partUUID.sh -d sdb1

UUID of Disk: /dev/sdb1
e34d67bb-83bb-4fc5-b9a4-a1388d2b2be5
Sample for /boot/extlinux/extlinux.conf entry:
APPEND ${cbootargs} root=UUID=e34d67bb-83bb-4fc5-b9a4-a1388d2b2be5 rootwait rootfstype=ext4
```

:::caution 注意
返されるUUIDが上記の例と形式や長さが異なる場合、そのデバイスはおそらくExt4としてフォーマットされていません。**ステップ2**からやり直してください！
:::

---

**ステップ6.** ブート構成を変更して拡張を完了する

まず、ブート構成ファイルのバックアップを作成する必要があります。

```sh
$ sudo cp /boot/extlinux/extlinux.conf /boot/extlinux/extlinux.conf.bak
```

このステップは、USBデバイス拡張操作において最も重要かつ危険なステップです。`/boot/extlinux/extlinux.conf`ファイルと`/media/nvidia/boot/extlinux/extlinux.conf`を編集し、新しいrootfsを指すエントリを追加します。場所はUSBデバイスのパスであり、以下のパラメータ`<path>`に記入します。このパス情報は**ステップ3**で取得します。

```sh
$ sudo vi /boot/extlinux/extlinux.conf
$ sudo vi /media/nvidia/boot/extlinux/extlinux.conf

LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      APPEND ${cbootargs} quiet root=<path> rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1
```

私が使用しているUSBストレージデバイスの場合、修正後の`/boot/extlinux/extlinux.conf`ファイルと`/media/nvidia/boot/extlinux/extlinux.conf`は以下のようになります。

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

# カスタムカーネルをテストする場合、元のカーネルのバックアップを作成し、
# このファイルに新しいエントリを追加することをお勧めします。これにより、
# デバイスが元のカーネルにフォールバックできるようになります。以下の手順を実行してください：
#
# 1. 元のカーネルのバックアップを作成
#      sudo cp /boot/Image /boot/Image.backup
#
# 2. カスタムカーネルを/boot/Imageにコピー
#
# 3. 以下のメニュー設定行をアンコメント
#
# 4. 再起動

# LABEL backup
#    MENU LABEL backup kernel
#    LINUX /boot/Image.backup
#    INITRD /boot/initrd
#    APPEND ${cbootargs}
```

ファイルを保存してreComputerを再起動すると、システムルートがUSBストレージデバイスに切り替わり、拡張が完了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/62.png" /></div>

## シリアルコンソールを使用したシステムバックアップの復元

システムがエラーやその他の理由（一般的なシナリオとして、起動時にNvidiaアイコンが繰り返し表示されるなど）で正常に起動しない場合、拡張時に作成したバックアップが重要な役割を果たします。このような状況で不安を感じるかもしれませんが、落ち着いて以下の手順に従い、reComputerをシリアルコンソールに接続してU-bootを操作し、バックアップを復元してください。

### 準備するもの

<table align="center">
  <tbody><tr>
      <th align="center">準備するもの</th>
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

### シリアルコンソールへのアクセス手順

**ステップ1.** UART to USBモジュールをreComputerに接続する

以下の表に従って、reComputerをUART to USBモジュールに接続してください。

<table align="center">
  <tbody><tr>
      <td colSpan={3}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/8.jpeg" /></div></td>
    </tr>
    <tr>
      <td align="center">reComputer</td>
      <td align="center"> </td>
      <td align="center">UART to USBモジュール</td>
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

:::tip
reComputerとUART to USBモジュール間のVCCインターフェースは接続する必要はありません。

ケーブルを接続した後、reComputerの電源をまだ入れないでください。そのまま置いておいてください。

拡張された外部メモリを切断してください。
:::

**ステップ2.** Ubuntuホストにminicomをインストールして起動する

Ubuntuホストにminicomがインストールされていない場合、以下のコマンドでインストールできます。

```sh
$ sudo apt-get install minicom
```

インストールが完了したら、以下のコマンドを入力してminicomを起動します。

```sh
$ sudo minicom
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/40.png" /></div>

**ステップ3.** minicomの設定準備

minicomのメニューバーでシリアルポートを開き、設定を行います。これにより、minicomを通じてreComputerの起動情報を取得できます。メニューバーでキーボードの**o**キーを押して設定画面にアクセスします。キーボードの上下矢印キーを使用してカーソルを**Serial port setup**に移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/41.png" /></div>

**ステップ4.** reComputerをUbuntuホストに接続する

この時点で、新しいコマンドラインウィンドウを作成し、以下のコマンドを入力して新しいデバイスのアクセスを監視します。

```sh
$ dmesg --follow
```

この時点でreComputerの電源を入れ、UART to USBモジュールを通じてreComputerをUSBポート経由でUbuntuホストに接続します。コマンドラインウィンドウには新しく接続されたデバイスの名前が表示されます。**tty**で始まるフラグメントを見つけて記録してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/44.png" /></div>

**ステップ5.** U-boot操作

minicomに戻り、**ステップ4**で取得したデバイス名を**Serial Device**に入力します。また、ボーレートが**115200**に設定されているか確認してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/42.png" /></div>

修正後、Enterキーを押して保存します。**Save setup as dfl**を選択してminicomインターフェースを終了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/43.png" /></div>

再度`sudo minicom`コマンドを入力してminicomに入り、ウィンドウ内でreComputerの起動情報が表示されるのを確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/45.png" /></div>

返された情報を使用してreComputerが起動に失敗する理由をトラブルシューティングできます。また、コマンド`help`を使用してU-bootシステムで利用可能なすべてのコマンドを確認できます。これらのコマンドの使用方法を理解することは問題解決に必要ですが、もちろん難しい場合もあります。

```sh
Tegra210 (P3450-0000) # help
?         - 'help'のエイリアス
base      - アドレスオフセットを表示または設定
bdinfo    - ボード情報構造を表示
blkcache  - ブロックキャッシュの診断と制御
boot      - デフォルトで起動、つまり'bootcmd'を実行
bootd     - デフォルトで起動、つまり'bootcmd'を実行
bootefi   - メモリからEFIペイロードを起動
bootelf   - メモリからELFイメージを起動
booti     - メモリからLinuxカーネル'Image'形式を起動
bootm     - メモリからアプリケーションイメージを起動
bootp     - BOOTP/TFTPプロトコルを使用してネットワーク経由でイメージを起動
bootvx    - ELFイメージからvxWorksを起動
cmp       - メモリ比較
coninfo   - コンソールデバイスと情報を表示
cp        - メモリコピー
crc32     - チェックサム計算
dcache    - データキャッシュを有効または無効にする
dfu       - デバイスファームウェアアップグレード
dhcp      - DHCP/TFTPプロトコルを使用してネットワーク経由でイメージを起動
dm        - ドライバーモデルの低レベルアクセス
echo      - 引数をコンソールに出力
editenv   - 環境変数を編集
enterrcm  - TegraをリセットしてUSBリカバリモードに入る
env       - 環境変数操作コマンド
exit      - スクリプトを終了
ext2load  - Ext2ファイルシステムからバイナリファイルをロード
ext2ls    - ディレクトリ内のファイルをリスト（デフォルトは/）
ext4load  - Ext4ファイルシステムからバイナリファイルをロード
ext4ls    - ディレクトリ内のファイルをリスト（デフォルトは/）
ext4size  - ファイルのサイズを判定
ext4write - ルートディレクトリにファイルを作成
false     - 何もしない（失敗）
fatinfo   - ファイルシステム情報を表示
fatload   - DOSファイルシステムからバイナリファイルをロード
fatls     - ディレクトリ内のファイルをリスト（デフォルトは/）
fatmkdir  - ディレクトリを作成
fatrm     - ファイルを削除
fatsize   - ファイルのサイズを判定
fatwrite  - DOSファイルシステムにファイルを書き込む
fdt       - フラットデバイスツリーのユーティリティコマンド
fstype    - ファイルシステムタイプを調べる
go        - アドレス'addr'でアプリケーションを開始
gpio      - GPIOピンのクエリと制御
gzwrite   - メモリを解凍してブロックデバイスに書き込む
help      - コマンドの説明/使用法を表示
i2c       - I2Cサブシステム
icache    - 命令キャッシュを有効または無効にする
imxtract  - マルチイメージの一部を抽出
itest     - 整数比較で真/偽を返す
ln        - シンボリックリンクを作成
load      - ファイルシステムからバイナリファイルをロード
loadb     - シリアルライン経由でバイナリファイルをロード（kermitモード）
loads     - シリアルライン経由でS-Recordファイルをロード
loadx     - シリアルライン経由でバイナリファイルをロード（xmodemモード）
loady     - シリアルライン経由でバイナリファイルをロード（ymodemモード）
loop      - アドレス範囲で無限ループ
ls        - ディレクトリ内のファイルをリスト（デフォルトは/）
lzmadec   - メモリ領域をlzma解凍
md        - メモリ表示
mii       - MIIユーティリティコマンド
mm        - メモリ修正（アドレス自動インクリメント）
mmc       - MMCサブシステム
mmcinfo   - MMC情報を表示
mw        - メモリ書き込み（埋め込み）
nm        - メモリ修正（アドレス固定）
nvme      - NVM Expressサブシステム
part      - ディスクパーティション関連コマンド
pci       - PCI構成スペースのリストとアクセス
ping      - ネットワークホストにICMP ECHO_REQUESTを送信
printenv  - 環境変数を表示
pxe       - PXEファイルを取得して起動するコマンド
reset     - CPUをリセット
run       - 環境変数内のコマンドを実行
save      - ファイルシステムにファイルを保存
saveenv   - 環境変数を永続ストレージに保存
setenv    - 環境変数を設定
sf        - SPIフラッシュサブシステム
showvar   - ローカルhushshell変数を表示
size      - ファイルのサイズを判定
sleep     - 一定時間実行を遅延
source    - メモリからスクリプトを実行
sspi      - SPIユーティリティコマンド
sysboot   - syslinuxファイルを取得して起動するコマンド
test      - /bin/shのような最小限のテスト
tftpboot  - TFTPプロトコルを使用してネットワーク経由でイメージを起動
true      - 何もしない（成功）
ums       - UMS [USB Mass Storage]を使用
unzip     - メモリ領域を解凍
usb       - USBサブシステム
usbboot   - USBデバイスから起動
version   - モニター、コンパイラー、リンカーのバージョンを表示
```

## 技術サポートと製品ディスカッション
私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>