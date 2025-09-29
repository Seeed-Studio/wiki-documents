---
description: ReComputer を使用してホームソフトルーターと NAS を構築する方法
title: ReComputer を使用してホームソフトルーターと NAS を構築する方法
keywords:
- ReComputer_Alpha
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/How-to-build-a-home-soft-router-and-NAS-With-ReComputer
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# ReComputer を使用してホームソフトルーターと NAS を構築する方法  

## 1. ハードウェアの準備  

- **ReComputer マザーボード:** このケースでは 8GB RAM + 64GB eMMC を使用します。
- **SSD:** NAS を構築するには、元の 64GB eMMC に加えて大容量のディスクドライブが必要です。HDD よりも寿命が長い SSD を使用することをお勧めします。また、RAID を考慮する必要はありません。m.2 SATA SSD、m.2 NVMe SSD、2.5" SATA SSD などを選択できます。
- **8cm 4ピン冷却ファン:** 暑い夏にはパッシブヒートシンクだけでは不十分です。より静かな大きなファンを選び、薄型エンクロージャーのために 9015 ではなく 8010 を選択してください。
- **エンクロージャー:** 心配しないでください。設計ドキュメントは誰でも利用可能で、好きなようにコピーできます。
- **Grove - OLED ディスプレイ 0.96":** ReComputer マザーボードには Arduino 用のマイクロコントローラーがあります。これを使って何か面白いことをしてみませんか？
- **いくつかのケーブル:** SATA データケーブル、SSD ケーブル、ファンケーブル、Grove ケーブルなど。一部のケーブルは再配線が必要になる場合がありますが、それほど難しくありません。  

 ![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/10.jpg)

 ![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/11.jpg)

 ![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/12.jpg)

**エンクロージャー**  

3mm 未満のアクリル板を選択することをお勧めします。詳細は添付ファイル `ReComputer_DarkBox.dxf` に記載されています。  

サポートピラー: 25mm x 4 と 27mm x 4。  

**ケーブル**  

ケーブルを作成する際には、HDD_PWR ピンの定義に注意してください。冷却ファンは HDD_PWR ピンの 12V 電源で駆動できます。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/13.jpg)

## 2. 組み立て  

ステップ 1: Grove - OLED ディスプレイ 0.96" をエンクロージャーに取り付けます。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/20.jpg)

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/21.jpg)

ステップ 2: 冷却ファンをエンクロージャーに取り付けます。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/22.jpg)

ステップ 3: 2.5" SSD をエンクロージャーに取り付けます。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/23.jpg)

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/24.jpg)

ステップ 4: 配線を行います。  

4ピン冷却ファンのピンアウト図に示されているように、`TACH`（タコ検出ピン）と `PWM`（タコ制御ピン）は Arduino 用マイクロコントローラーの 12 ピンと 13 ピンに接続されています（実際にはプログラム内の定義によります）。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/25fan_pinout.png)

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/25.jpg)

Grove - OLED ディスプレイ 0.96" を I2C、PWR、GND に接続します。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/26.jpg)

SAMD21 のシリアルポートを Intel CPU のシリアルポートに接続します。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/25uart.jpg)

ステップ 5: 前面および背面の蓋を取り付け、ネジを締めます。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/27.jpg)

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/28.jpg)

**放熱**  

ファンが提供する冷風が CPU のヒートシンクと SSD を通過し、効果的に熱を除去します。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/29.jpg)

## 3. Proxmox VE 仮想環境のインストールと設定  

インストールには8GB以上のUSBメモリが必要です。最新リリースの [Proxmox VE ISO](https://www.proxmox.com/en/downloads) をダウンロードしてください。  

Etcherを使用してUSBメモリに書き込みます。  

キーボード、マウス、ディスプレイ、USBメモリを接続します。ReComputerを起動し、`F7`キーを連打してブートデバイス選択画面に入ります。Uディスクブートを選択してください。  

PVEのインストールは非常に簡単ですが、以下に注意してください：  
**PVEはeMMCにインストールできません！**  

これは、PVEチームがeMMCの寿命がSSDよりも短いと考えており、eMMCへのPVEインストールを許可していないためです。  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/pve-grub-menu.png)

（画像はPVE公式サイトからダウンロードしました。私のPVEはバージョン6.0です。）  

問題がある場合は、[インストールドキュメント](https://pve.proxmox.com/wiki/Installation) を確認してください。  

ReComputerには2つのネットワークポートがあります。そのうちの1つをPVEの管理ネットワークに設定し、もう1つをソフトルーターシステムのWANポートに設定します。  

## 4. Arduino プログラム  

ReComputerボード上のSAMD21（Seeeduino Cortex-M0+互換）は、CPU温度に応じてファンの回転数を動的に制御するために使用されます。同時に、PVEシステムの一部の情報がOLEDスクリーンに表示されます。  

私の設計アイデア：  

- PVEはDebian Linuxボックスであるため、柔軟にプログラミングしてCPU温度を取得できます。
- SAMD21のUSBポートを介してプログラムをフラッシュすることが可能で、すでにIntel CPUのUSBポートに接続されています。
- SAMD21のもう1つのシリアルポート、Serial1はIntel CPUのシリアルポートに接続されているため、それを介して通信が可能です。（ハードウェアシリアルポートはUSBポートよりも信頼性が高いと考えています。）
- 簡単なArduinoプログラムを書いて、Serial1を介してCPU温度を読み取り、ファンの回転数を制御し、OLEDディスプレイを更新します。  

簡単ですよね？こちらが[Arduinoプログラム](https://github.com/KillingJacky/DarkBox)です。  

### 4.1 コンパイル  

まずArduino IDEでプログラムを開きます。`Seeeduino Cortex-M0+`を選択し、コンパイルログからbinファイルを見つけます。  

![image-20191112210126228](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/401.png)

![image-20191112210342437](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/402.png)

### 4.2 フラッシュ  

Arduino IDEで生成された`ReComputer.ino.bin`を`scp`コマンドを使用してPVEにコピーします。  

```
scp ReComputer.ino.bin root@192.168.1.x:~
```  

SSHを実行します。  

```
ssh root@192.168.1.x
```  

フラッシュツール`bosaac`をダウンロードします。  

```
wget http://downloads.arduino.cc/tools/bossac-1.7.0-x86_64-linux-gnu.tar.gz
tar zxvf bossac-1.7.0-x86_64-linux-gnu.tar.gz
cp bossac-1.7.0/bossac /usr/bin/
chmod a+x /usr/bin/bossac
```  

リセットとGndを2回短絡させてArduinoをブートローダーモードにします。  

![image-20191113230804316](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/resetArduino.png)

フラッシュツールを使用してArduinoプログラムをフラッシュします。  

```
bossac -i -d --port=/dev/ttyACM0 -U true -e -w -v ReComputer.ino.bin -R
```  

画面に以下が表示されます：  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/oled_gui.jpg)  

CPU温度とファンの回転数が画面に表示されます。温度が45℃未満の場合、ファンは停止します。  

システム負荷の履歴と現在のメモリ使用量も表示されます。  

ちなみに、PVEにスクリプトをインストールするのを忘れないでください。詳細はGithubリポジトリの`README`を確認してください。  

これで、ハードウェアの作業を完了し、スマート冷却システムと2TBのディスクドライブを備えた小型のPVEサーバーを構築しました。これにより、いくつかの仮想マシンとNASストレージに十分な容量が確保されます。  

## 5. ソフトルーティングシステムのインストール  

ReComputerのマザーボードには2つのギガビットイーサネットポートがあり、ソフトルーティングシステムを簡単に構築できます。ソフトルーティングシステムは通常のルーターよりも強力な機能を持ち、よりプロフェッショナルな家庭用ネットワーク環境を提供します。  

私は、コミュニティで一般的で使いやすい`lede(OpenWrt)`システムを選びました。  

以下はネットワークトポロジー図です：  

![image-20191116233322566](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/500networkArch.png)

### ステップ1: イメージをダウンロードしてインストールする  

[こちら](https://drive.google.com/file/d/1-R5mJOu43bKWHv8ViK2V1dtE4zBLDYyU/view?usp=sharing)からイメージをダウンロードしてください。  

これはledeのサードパーティによる修正版ソースコードからのものです。  

### ステップ2: イメージをPVEにアップロードする  

```
scp /PATH/TO/openwrt-x86-64-combined-squashfs.qcow2 root@192.168.32.222:~
```  

この.qcow2ファイルは、私がイメージをコンパイルした際にエクスポートしたものです。もし.imgファイルをダウンロードした場合は、以下のコマンドを使用して変換してください。  

```
qemu-img convert -f raw -O qcow2 lede-xxxxxxx-combined-ext4.img vm-100-disk-1.qcow2
```  

### ステップ3: 仮想マシンを作成し、イメージをインポートする  

WANネットワークポートを作成し、追加したWANを有効にするためにPVEを再起動します。  

![image-20191117161646454](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/503createWanBridge.png)

![image-20191117164131776](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/503wanActive.png)

仮想マシンを作成し、以下のように設定します（ウィザードの後で、2つ目のネットワークカードを手動で追加し、ハードディスクを削除します）。  

![image-20191117161819910](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/504ledeSummary.png)

ledeディスクイメージをインポートします。  

```
root@pve-home:~# qemu-img check openwrt-x86-64-combined-squashfs.qcow2
No errors were found on the image.
685/2824 = 24.26% allocated, 0.00% fragmented, 0.00% compressed clusters
Image end offset: 45219840
root@pve-home:~# qemu-img info openwrt-x86-64-combined-squashfs.qcow2
image: openwrt-x86-64-combined-squashfs.qcow2
file format: qcow2
virtual size: 177M (185073664 bytes)
disk size: 43M
cluster_size: 65536
Format specific information:
    compat: 1.1
    lazy refcounts: false
    refcount bits: 16
    corrupt: false
root@pve-home:~# qm importdisk 100 openwrt-x86-64-combined-squashfs.qcow2 local-lvm
  Rounding up size to full physical extent 180.00 MiB
  Logical volume "vm-100-disk-0" created.
    (100.00/100%)
```  

注意：100は作成した仮想マシンのID番号です。これはコンピュータ上で変更可能です。  

その後、`local-lvm`にインポートしたディスクが表示されます。  

![image-20191117163326117](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/505diskImported.png)

同時に、仮想マシンのハードウェアリストにもディスクが表示されます。  

![image-20191117163523743](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/506diskImported2.png)

ダブルクリックして追加します。  

![image-20191117163625885](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/507addDisk.png)

ディスクリストは以下のようになります：  

![image-20191117163718793](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/508finalHardwareSummary.png)

仮想マシンを起動し、コンソールを開いてカーネルログを確認します。`random: crng init done`が表示されたら、Enterキーを押します。`shell`が表示されれば、正常に起動しています。  

![image-20191117164609593](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/509ledeBootup.png)

ledeのイントラネットIPは`192.168.1.1`です。このIPにアクセスするには、ReComputerのLANネットワークポートにコンピュータを接続し、IPアドレスを静的IP`192.168.1.x`に設定する必要があります。  

![image-20191117165532300](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/510configLaptopNetwork.png)

ブラウザで`192.168.1.1`を入力してOpenWrtのログインインターフェースにアクセスします。デフォルトのユーザー名は`root`、パスワードは`password`です。  

![image-20191117165632253](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/20191220134207.png)

OpenWrtの使い方はこの記事の範囲を超えています。ぜひ学んで楽しんでください！  

## 6. NASシステムのインストール  

NASは家庭内ネットワークでますます重要なサービスの1つとなっています。PVE仮想環境で簡単にインストールできます。この例では、オープンソースのNASシステム`openmediavault`を選択します。  

### ステップ1: イメージを[こちら](https://sourceforge.net/projects/openmediavault/files/5.0.5/openmediavault_5.0.5-amd64.iso/download)からダウンロードしてインストールします。  

### ステップ2: イメージをPVEにアップロードします。  

![image-20191114152513579](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/602uploadInstaller.png)

### ステップ3: 仮想マシンを作成し、以下のように設定します。  

![image-20191117110324189](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/603omvConfig.png)

### ステップ4: 作成した仮想マシンを起動し、openmediavaultをインストールします。「Continue」または「OK」をクリックしてインストールが完了するまで進めます。  

![image-20191117110717036](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/604installOMV.png)

![image-20191117111323934](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/605installOMVDone.png)

インストールが完了すると、上記のウィンドウが表示されます。この時点で仮想マシン内のISOイメージを削除する必要があります。  

![image-20191117111506366](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/606removeCDROM.png)

コンソールに戻り、Enterキーを押して仮想マシンを再起動します。  

![image-20191117111854853](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/607omvFirstBoot.png)

画面に表示されるIPアドレスをコピーし、ブラウザに入力してOpenWrtのログインインターフェースにアクセスします。デフォルトのユーザー名は`admin`、パスワードは`openmediavault`です。  

![image-20191117112155601](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/608loginOMV.png)

![image-20191117112400979](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/609omvWebUIFirstView.png)

これでopenmediavaultシステムのインストールは完了です。次に行うべきことは、SSDをパススルーしてOMVシステムの読み書き効率を向上させることです。  

### ステップ5: ハードディスクのパススルー  

まず、PVEドキュメントに従ってIOMMUを有効にする必要があります。SSHを使用してPVEにアクセスし、以下を実行します。  

```
root@pve-home:~# vim /etc/default/grub
```  

`GRUB_CMDLINE_LINUX_DEFAULT`の後に`intel_iommu=on`を追加します。  

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on"
```  

次に`update-grub`を実行します。  

```
root@pve-home:~# update-grub
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-5.0.15-1-pve
Found initrd image: /boot/initrd.img-5.0.15-1-pve
Found memtest86+ image: /boot/memtest86+.bin
Found memtest86+ multiboot image: /boot/memtest86+_multiboot.bin
Adding boot menu entry for EFI firmware configuration
done
```  

以下のモジュールがロードされていることを確認してください。これらを`/etc/modules`に追加することで実現できます。  

```
vfio
vfio_iommu_type1
vfio_pci
vfio_virqfd
```  

モジュール関連の変更を行った後は、`initramfs`を更新する必要があります。Proxmox VEでは以下を実行して更新できます。  

```
root@pve-home:~# update-initramfs -u -k all
```  

最後に再起動して変更を有効にし、IOMMUが有効になっていることを確認します。  

```
[    1.810500] DMAR: Setting RMRR:
[    1.810644] DMAR: Setting identity map for device 0000:00:02.0 [0x77800000 - 0x7fffffff]
[    1.810794] DMAR: Setting identity map for device 0000:00:15.0 [0x75935000 - 0x75954fff]
[    1.810805] DMAR: Prepare 0-16MiB unity mapping for LPC
[    1.810891] DMAR: Setting identity map for device 0000:00:1f.0 [0x0 - 0xffffff]
[    1.810959] DMAR: Intel(R) Virtualization Technology for Directed I/O
```  

上記の出力が表示されれば、IOMMUが有効になっています。  

次に、パススルーしたいハードディスクがどのPCIインターフェースに接続されているかを確認します。SATA3インターフェースに接続されたSATAコントローラーは、00:12.0インターフェースにあります。  

```
root@pve-home:~# lspci -nn
00:00.0 Host bridge [0600]: Intel Corporation Device [8086:31f0] (rev 03)
00:02.0 VGA compatible controller [0300]: Intel Corporation Device [8086:3185] (rev 03)
00:0c.0 Network controller [0280]: Intel Corporation Device [8086:31dc] (rev 03)
00:0e.0 Audio device [0403]: Intel Corporation Device [8086:3198] (rev 03)
00:0f.0 Communication controller [0780]: Intel Corporation Celeron/Pentium Silver Processor Trusted Execution Engine Interface [8086:319a] (rev 03)
00:12.0 SATA controller [0106]: Intel Corporation Device [8086:31e3] (rev 03)
00:13.0 PCI bridge [0604]: Intel Corporation Device [8086:31d8] (rev f3)
00:14.0 PCI bridge [0604]: Intel Corporation Device [8086:31d6] (rev f3)
00:14.1 PCI bridge [0604]: Intel Corporation Device [8086:31d7] (rev f3)
00:15.0 USB controller [0c03]: Intel Corporation Device [8086:31a8] (rev 03)
00:17.0 Signal processing controller [1180]: Intel Corporation Device [8086:31b4] (rev 03)
00:17.1 Signal processing controller [1180]: Intel Corporation Device [8086:31b6] (rev 03)
00:17.2 Signal processing controller [1180]: Intel Corporation Device [8086:31b8] (rev 03)
00:18.0 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31bc] (rev 03)
00:18.1 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31be] (rev 03)
00:18.2 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31c0] (rev 03)
00:18.3 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31ee] (rev 03)
00:19.0 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO SPI Host Controller [8086:31c2] (rev 03)
00:1c.0 SD Host controller [0805]: Intel Corporation Celeron/Pentium Silver Processor SDA Standard Compliant SD Host Controller [8086:31cc] (rev 03)
00:1e.0 SD Host controller [0805]: Intel Corporation Device [8086:31d0] (rev 03)
00:1f.0 ISA bridge [0601]: Intel Corporation Device [8086:31e8] (rev 03)
00:1f.1 SMBus [0c05]: Intel Corporation Celeron/Pentium Silver Processor Gaussian Mixture Model [8086:31d4] (rev 03)
01:00.0 Non-Volatile memory controller [0108]: Samsung Electronics Co Ltd NVMe SSD Controller SM961/PM961 [144d:a804]
02:00.0 Ethernet controller [0200]: Intel Corporation I211 Gigabit Network Connection [8086:1539] (rev 03)
03:00.0 Ethernet controller [0200]: Intel Corporation I211 Gigabit Network Connection [8086:1539] (rev 03)
```  

PVEのWeb UIに戻ります。OMV仮想マシンで`Hardware -> Add PCI Device`を選択してください。

![image-20191117114829217](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/610pciPassthrough.png)

![image-20191117155102090](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/611selectPCI.png)

その後、仮想マシンを再起動すると、OMVでハードディスクが認識されていることが確認できます。

![image-20191117155433087](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/612seeTheNewDisk.png)

詳細についてはopenmediavaultのドキュメントを確認し、楽しんでください！