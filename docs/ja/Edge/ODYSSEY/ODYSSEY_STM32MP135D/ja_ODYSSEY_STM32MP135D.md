---
description: ODYSSEY, STM32MP135D
title: ODYSSEY – STM32MP135D の使い方
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-STM32MP135D
last_update:
  date: 05/15/2025
  author: Xogium
---


# ODYSSEY – STM32MP135D の使い方

ODYSSEY STM32MP135D は、STM32 MPU ベースのコンパクトなシングルボードコンピュータであり、スマートホーム、販売機、IP カメラなど、さまざまな用途向けに設計された強力なハードウェアを小型フォームファクターで提供します。プロトタイプ作成を容易にするために設計された幅広い接続オプションを備えています。ハードウェアは以下の2つの異なるバリエーションで提供されています：
* [ODYSSEY STM32MP135D](https://www.seeedstudio.com/Odyssey-MP135D-p-5727.html)：基本的な microSD をストレージオプションとして提供し、すべての接続性を備えています。
* [ODYSSEY STM32MP135D with eMMC](https://www.seeedstudio.com/Odyssey-MP135D-eMMC-p-5728.html)：ストレージとして 4 GB eMMC を追加しています。

現在、オペレーティングシステムとしては buildroot のみがサポートされています。

## ハードウェア ##
* SoC: STM32MP135D
	* 32-bit Arm® Cortex®-A7
		* L1 32-Kbyte I / 32-Kbyte D
		* 128-Kbyte 統合レベル 2 キャッシュ
		* Arm® NEON™ および Arm® TrustZone®
* buildroot オペレーティングシステムをサポート。
* 接続性：
	* 2x 10/100 Mbps イーサネットポート、
		* eth1 は PoE および WOL をサポート。
	* 1x USB-A ポート、
	* 1x CSI 30p FPC コネクタ、
	* 1x LCD 40p FPC コネクタ、
	* Raspberry Pi 互換ピン配置の 40 ピン GPIO。
* ストレージ / メモリ：
	* 4 Gbits DRAM、
	* 256 Kbits EEPROM（64 バイトページサイズ）、
	* SD、SDHC、SDXC カードをサポートする microSD カードスロット、
	* 4 Gbytes eMMC（eMMC ストレージバリアントのみ）
* 電源供給オプション：
	* eth1 ポート経由の PoE、
	* USB-C コネクタ経由の 5V 入力。
* 基板寸法：85x56x17mm
* 基板重量：36g

## 始め方 ##
### ハードウェア ###
ハードウェアを始めるには、以下が必要です：
* 1x ODYSSEY STM32MP135D、
* 1x USB-C to USB-A ケーブル または USB-C to USB-C ケーブル、
* 1x イーサネットケーブル、
* 1x USB to UART ケーブル（例：[こちら](https://ftdichip.com/products/ttl-232r-rpi/)）。

まず、USB to UART ケーブルを慎重に接続してシリアルコンソールにアクセスします。以下の画像を参照してピンを正しく接続してください。
![STM32MP135D ODYSSEY ボードのトップダウンビュー。デバッグピンがブートジャンパーの隣に円で囲まれています。ピンはブートジャンパーに近い順に：WAKE、GND、TX、RX](https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEyMg_558688_ff47Pijnl_CdTY5i_1689582643?w=1201&h=801&type=image/png "UART0 ピンのハイライト")

このガイドでは USB-C を電源として使用します。USB-C ケーブルの片方をボードに接続し、もう片方をコンピュータに接続します。イーサネットケーブルを ODYSSEY の eth1 ポートに接続し、もう片方をルーターまたはネットワークスイッチに接続します。

>### 注意：事前にコンパイルされたパッケージを使用したい場合は、この[リンク](http://files.seeedstudio.com/wiki/102110859_ODYSSEY_MP135D_img.zip)をクリックしてください。

### ソフトウェア ###
このガイドでは以下のソフトウェアコンポーネントを使用します：
* [buildroot バージョン 2023.02 以降](https://buildroot.org/download.html)。
* [buildroot external tree](https://github.com/xogium/buildroot-stm32mp135d-odyssey)：アップストリーム buildroot と併用するためのもの。
* [snagboot](https://github.com/bootlin/snagboot)：DFU および USB マスストレージの操作を簡単にするユーティリティセット。snagrecover（fsbl および ssbl をボードの DRAM にアップロードするため）と snagflash（永続ストレージにデータをフラッシュするため）で構成されています。

注意：snagboot リポジトリの指示に従って正しくセットアップしてください。このガイドでは範囲外です。

#### 特徴 ####
external tree は以下を提供します：
* 単一の stm32mp135d_odyssey_defconfig を使用して、tf-a、optee、u-boot、および Linux カーネルを含む最小限で汎用的なシステムを構築します。ユーザー空間は最小限で、シンプルな busybox init システムとシェルで構成されています。
	* このシステムは以下の方法で使用できます：
		* eMMC に書き込んで起動（ハードウェアに eMMC がある場合）
		* microSD カードに書き込んで起動。
		* NFS 経由で起動。
* ポストビルドスクリプトは、eMMC 用の簡単に書き込めるブートローダーイメージを提供します。tf-a と FIP イメージを単一ファイルに結合し、DFU を使用して eMMC のブート領域に書き込むことを目的としています。
* genimage 設定は以下の2つのディスクイメージを生成します：
	* emmc.img：u-boot-env パーティションを含み、u-boot 環境を簡単に保存できるようにします。また、rootfs を含みます。ブートローダーは DFU を使用して eMMC のブート領域に保存されることが期待されます。
	* sdcard.img：fsbl1 および fsbl2 パーティションにそれぞれ tf-a の2つのコピーを含み、FIP イメージを含む単一の fip パーティションを含みます。また、emmc.img と同様の u-boot-env パーティションと単一の rootfs を含みます。
* external tree は、追加のオプションやコンテンツを追加したい場合に使用する空の external.mk、Config.in、および packages ディレクトリを提供します。詳細については buildroot マニュアルの該当セクションを参照してください。

#### ソフトウェアの取得 ####
この例では、buildroot と必要な external tree を取得し、それらを設定して使用する方法を示します：

まず、Buildroot の必要な依存関係をインストールします。以下を参照してください：
[Buildroot ユーザーマニュアル、第2章：システム要件](https://buildroot.org/downloads/manual/manual.html#requirement)。その後、ソースコードを設定します：
```
wget https://buildroot.org/downloads/buildroot-2023.02.5.tar.gz
tar -xf buildroot-2023.02.5.tar.gz
mv buildroot-2023.02.5 buildroot
git clone https://github.com/xogium/buildroot-stm32mp135d-odyssey
```

#### ビルド ####
ソースコードが正しく設定されたら、ビルドを進めます：
```
cd buildroot
make BR2_EXTERNAL=/absolute/path/to/buildroot-stm32mp135d-odyssey stm32mp135d_odyssey_defconfig
make
```

すべてが正常に進行すれば、buildroot ツリーの output/images ディレクトリに成功したシステムが生成されます。
```
ls -1 output/images
combined-tf-a-and-fip.img
emmc.img
fip.bin
rootfs.ext2
rootfs.ext4
rootfs.tar
sdcard.img
stm32mp135d-odyssey.dtb
tee.bin
tee-header_v2.bin
tee-pageable_v2.bin
tee-pager_v2.bin
tf-a-stm32mp135d-odyssey.stm32
u-boot.dtb
u-boot-nodtb.bin
zImage
```

#### システムの使用方法 ####
##### eMMC ブート #####
ボード上の中央のブートジャンパーを取り外して、DFUモードがアクティブであることを確認してください。minicomや他の類似のプログラムを使用してシリアルコンソールを開いてください。これが必要になります。

例として、ttyUSB0という名前のシリアルコンソールにアクセスするためにgnu screenを使用する方法を以下に示します。ボーレートは115200n8であることが期待されます。
```
sudo screen /dev/ttyUSB0 115200n8
```

次に、snagbootパッケージから以下のコマンドを実行し、u-bootに到達した際にシリアルコンソールウィンドウで任意のキーを押してブートシーケンスを中断する準備をしてください。
```
cd output/images
snagrecover -s stm32mp13 -f ../../board/stm32mp135d-odyssey/utilities/stm32mp1-stm32mp135d-odyssey.yaml
```

u-bootプロンプトに到達したら、以下を入力してeMMCブートパーティションを有効にします：```mmc partconf 1 1 1 1```。これにより、最初のeMMCブートパーティションが有効になり、ext csdレジスタ179を変更することでそこからブートできるようになります。その後、```dfu 0```を入力して、ホストマシンにすべてのDFU alt設定を公開します。これにはeMMCブート領域も含まれます。dfu-utilコマンドを使用してリストできます：
```
dfu-util -l
Found DFU: [0483:df11] ver=0200, devnum=7, cfg=1, intf=0, path="3-3", alt=4, name="mmc1_boot2", serial="0021001A3232510937393835"
Found DFU: [0483:df11] ver=0200, devnum=7, cfg=1, intf=0, path="3-3", alt=3, name="mmc1_boot1", serial="0021001A3232510937393835"
...
```

次に、snagflashツールを使用して、結合されたブートローダーイメージを両方のブート領域に書き込みます：
```
snagflash -P dfu -p 0483:df11 --dfu-keep -D 3:combined-tf-a-and-fip.img
snagflash -P dfu -p 0483:df11 -D 4:combined-tf-a-and-fip.img
```

これが完了したら、ボードをリセットし、中央のブートジャンパーをボードに戻してeMMCブートが正常に動作することを確認してください。この時点では、ユーザーエリアが空であるため、mmc1パーティション0からのブートでエラーが発生しますが、これは正常です。

再びu-bootプロンプトに戻ったら、```ums 0 1```を入力して、eMMCのユーザーエリアをホストマシンにUSBマスストレージデバイスとして公開します。lsblkを使用して割り当てられたデバイスノードを確認し、以下のコマンドで適切なデバイスノードにsdXを置き換えてください。書き込むデバイスが正しいことを二重に確認してください。これにより、デバイス全体が完全に消去されます！
```
snagflash -P ums -s emmc.img -b /dev/sdX
```

書き込みが完了したら、u-bootプロンプトでctrl+cを押してUSBマスストレージモードを終了します。その後、再びボードをリセットし、Linuxが起動してログインプロンプトが表示されることを確認してください。rootユーザーでログインし、パスワードは不要です。

##### Micro SDカードブート #####
システムをMicro SDカードに書き込みたい場合は、以下の手順に従い、適切なデバイスノードにsdXを置き換えてください：
```
sudo dd if=output/images/sdcard.img of=/dev/sdX bs=4M conv=fsync
```
ここで、sdXはMicro SDカードのデバイスノードに対応します。lsblkコマンドの出力を参照して、正しいデバイスノードを取得してください！そうしないと、データ損失が発生します。この操作はターゲットデバイスの内容を完全に消去します。

minicomや類似のプログラムを使用して、ボードのシリアルコンソールに接続してください。例として、ttyUSB0という名前のシリアルコンソールにアクセスするためにgnu screenを使用する方法を以下に示します。ボーレートは115200n8であることが期待されます。
```
sudo screen /dev/ttyUSB0 115200n8
```

Micro SDカードへの書き込みが成功したら、それをSTM32MP135D ODYSSEYボードのMicro SDソケットに挿入し、ブートジャンパーをMicro SDからのブートに調整します（すべてのジャンパーを取り外します）。必要に応じてボードをリセットしてください。buildrootのログインプロンプトが表示されたら、rootユーザーでログインし、パスワードは不要です。

##### NFSブート #####
NFS経由でシステムをブートするには、以下のように/etc/exportsを設定してください。必要に応じてサブネットや許可されたIPアドレスを置き換え、エクスポートされたパスも同様に調整してください：
```
/srv/nfs 192.168.1.0/24(rw,sync,crossmnt,fsid=0)
/srv/nfs/stm32mp135d 192.168.1.0/24(rw,nohide,insecure,no_subtree_check,async,no_root_squash)
```

また、NFSサーバーの設定でUDPモードが有効になっていることを確認してください。以下のように設定します：
```
/etc/nfs.conf
[nfsd]
...
udp=y
```

生成されたrootfs tarballを適切なディレクトリ（この場合は/srv/nfs/stm32mp135d）に展開します：
```
cd output/images
sudo mkdir srv/nfs/stm32mp135d
sudo bsdtar -xpf rootfs.tar -C /srv/nfs/stm32mp135d
```

中央のブートジャンパーを取り外して、DFUモードがアクティブであることを確認してください。minicomや他の類似のプログラムを使用してシリアルコンソールを開いてください。これが必要になります。例として、ttyUSB0という名前のシリアルコンソールにアクセスするためにgnu screenを使用する方法を以下に示します。ボーレートは115200n8であることが期待されます。
```
sudo screen /dev/ttyUSB0 115200n8
```

次に、snagbootパッケージから以下のコマンドを実行し、u-bootに到達した際にシリアルコンソールウィンドウで任意のキーを押してブートシーケンスを中断する準備をしてください：
```
cd output/images
snagrecover -s stm32mp13 -f ../../board/stm32mp135d-odyssey/utilities/stm32mp1-stm32mp135d-odyssey.yaml
```

u-bootプロンプトに到達したら、以下の手順でNFS経由でブートできます：
```
setenv eth1addr 2c:f7:f1:30:2b:62
setenv ethaddr 2c:f7:f1:30:2b:62
dhcp
nfs ${kernel_addr_r} 192.168.1.92:/srv/nfs/stm32mp135d/boot/zImage
nfs ${fdt_addr_r} 192.168.1.92:/srv/nfs/stm32mp135d/boot/stm32mp135d-odyssey.dtb
setenv bootargs root=/dev/nfs rootfstype=nfs ip=dhcp nfsroot=192.168.1.92:/srv/nfs/stm32mp135d,tcp,v3 rw quiet console=ttySTM0,115200n8 earlycon
bootz ${kernel_addr_r} - ${fdt_addr_r}
```
ここで、192.168.1.92はNFSサーバーをホストしているマシンの例です。設定されたMACアドレスも例であり、実際の環境では使用しないでください。これは、ボードのOTPにMACアドレスが定義されていないために必要ですが、EEPROMに半永久的に保存することが可能です（以下を参照）。rootユーザーでログインし、パスワードは不要です。

## EEPROM ##
### レイアウト ###
現在のEEPROMからMACアドレスを読み取る実装では、最初のMACアドレスがオフセット0から始まり、長さが6バイトであることを想定しています。2番目のMACアドレスはオフセット0x10に保存され、同じく長さが6バイトである必要があります。

* ヒント: ランダムなMACアドレスを生成するには、[こちらのジェネレーター](https://www.hellion.org.uk/cgi-bin/randmac.pl)を使用してください。

EEPROMにu-boot環境を保存する場合、環境が新しいページ境界から始まるようにしてください。ページサイズは64バイトです。例えば、環境のオフセットを0x40、サイズを0x2000、冗長オフセットを0x2080に設定することができます。以下はu-boot設定フラグメントの例です：
```
CONFIG_ENV_IS_IN_EEPROM=y
CONFIG_ENV_OFFSET=0x40
CONFIG_ENV_OFFSET_REDUND=0x2080
CONFIG_I2C_EEPROM=y
CONFIG_SYS_I2C_EEPROM_ADDR=0x50
CONFIG_NVMEM=y
```

これを適用するには、トップレベルのbuildrootディレクトリで```make menuconfig```を実行してください。ブートローダーメニューに移動し、u-bootをスクロールして追加の設定フラグメントパスを変更します。例えば、```$(BR2_EXTERNAL_STM32MP135D_ODYSSEY_PATH)/board/stm32mp135d-odyssey/configs/uboot.config```を入力します。

その後、```make clean && make```を使用して再ビルドを行ってください。

最終的に、MACアドレスの位置と長さを除いて、レイアウトは自由に使用できます。

### EEPROMの使用方法 ###
ボード上のEEPROMを使用するには、u-bootおよびLinuxの両方でnvmemデバイスとしてアクセスできます。例えば、EEPROMにMACアドレスを書き込むには以下のようにします：
```
printf '\x2c\xf7\xf1\30\x2b\x62'|dd of=/sys/bus/nvmem/devices/0-00501/nvmem bs=1
```

2番目のMACアドレスを保存するには、以下のようにします：
```
printf '\x2c\xf7\xf1\30\x2b\x63'|dd of=/sys/bus/nvmem/devices/0-00501/nvmem bs=1 seek=16
```

## Groveセンサーの接続と使用方法 ##
TODO

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [Caseyの尽力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=34112514)に感謝します。あなたの作業は[こちらで展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## リソース ##
* [外部buildrootツリーで使用されるARM Trusted Firmwareのフォーク](https://git.xogium.me/xogium/st-arm-trusted-firmware/tree/v2.8-stm32mp-odyssey-r2)
* [OP-TEEのフォーク](https://git.xogium.me/xogium/st-optee_os/tree/3.19.0-stm32mp-odyssey-r2)
* [U-Bootのフォーク](https://git.xogium.me/xogium/st-u-boot/tree/v2022.10-stm32mp-odyssey-r2)
* [Linuxカーネルのフォーク](https://github.com/xogium/st-linux/releases/tag/v6.1-stm32mp-odyssey-r3)