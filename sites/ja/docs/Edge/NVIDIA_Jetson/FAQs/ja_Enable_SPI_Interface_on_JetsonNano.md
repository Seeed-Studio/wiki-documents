---
description: Jetson-NanoでSPIインターフェースを有効にする
title: Jetson-NanoでSPIインターフェースを有効にする
keywords:
- SPI
- Jetson-nano
- BSP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /enable_spi_interface_on_jetsonnano
last_update:
  date: 07/02/2025
  author: Dayu
---

## はじめに

Jetson NanoはGPIOと多重化された2つのSPIインターフェースを備えていますが、SPIはデフォルトでは有効になっていません。設定ツール `/opt/nvidia/jetson-io/jetson-io.py` を使用してSPIを有効にできるOrinなどの他のJetsonシリーズとは異なり、この方法はJetson Nanoでは**適用できません**。

このセクションでは**SPI1**コントローラーを例として使用し、Jetson NanoでSPI機能を有効にする方法を提供します。この方法は、Jetsonデバイスにイメージをフラッシュする前に適用する必要があることに注意してください。

:::note
このwikiの方法は、Jetsonデバイスにイメージをフラッシュする前に適用する必要があります。
:::

## SPIの変更とフラッシュ

まず、Jetson Nanoの`REC`ピンと`GND`ピンをショートしてリカバリモードに入る必要があります。次に、ホストPC上で、フラッシュする予定のイメージを準備します。ただし、SPI変更を完了するまでは、Jetson Nanoにフラッシュしないでください。
[**J101用JetPackフラッシュチュートリアル**](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack/#:~:text=On%20the%20Linux%20host%20PC%2C%20we%20need%20to%20open%20a%20browser%20and%20go%20the%20Jetson%20Linux%20Archive.%20First%20we%20should%20check%20if%20the%20version%20of%20Jetson%20Linux%20is%20supported%20our%20reComputer%20Jetson%20module)を参照し、コマンドライン方法のみを使用してください。

  [NIVIDIA DEVELOPER](https://developer.nvidia.com/embedded/jetson-linux-archive#:~:text=Previous%20Jetson%20Linux%20Versions)から、**BSP**と**Simple Root Filesystem**を含む、お好みのバージョンをダウンロードしてください。
このガイドでは、例として**L4T 32.7.2**を使用します。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/source_nvidia_jetson-nao.png" /></div>

**BSP**と**Simple Root Filesystem**を同じディレクトリに配置し、以下の手順に従ってそれらを展開し、`apply_binaries.sh`を実行してください：

```bash
tar xf Jetson-210_Linux_R32.7.2_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

**Linux_for_Tegra** ディレクトリに新しい `.sh` ファイルを作成し、スクリプトを実行します。スクリプトの内容は以下の通りです：
<details>

<summary> modify_spi.sh </summary>

```shell
#!/bin/bash
set -e


cd "$(dirname "$0")"
cd kernel/dtb

DTS=tegra210-p3448-0002-p3449-0000-b00.dts
DTB=tegra210-p3448-0002-p3449-0000-b00.dtb


echo "📥 Decompiling $DTB to $DTS..."
sudo dtc -I dtb -O dts -o "$DTS" "$DTB"

fix_spi_node() {
    local node=$1
    if grep -A5 "$node {" "$DTS" | grep -q 'status'; then
        sudo sed -i "/$node {/,/spi-max-frequency/ s/status = \".*\";/status = \"okay\";/" "$DTS"
    else
        sudo sed -i "/$node {/,/spi-max-frequency/ s/compatible = \"tegra-spidev\";/&\n\t\tstatus = \"okay\";/" "$DTS"
    fi
}

echo "🔧 Enabling spi@0 and spi@1..."
fix_spi_node "spi@0"
fix_spi_node "spi@1"


patch_pin() {
    local pin=$1
    sudo sed -i "/${pin} {/,/nvidia,enable-input/ {
        s/nvidia,function = \"rsvd1\"/nvidia,function = \"spi1\"/
        s/nvidia,tristate = <0x01>/nvidia,tristate = <0x00>/
        s/nvidia,enable-input = <0x00>/nvidia,enable-input = <0x01>/
    }" "$DTS"
}

echo "🔧 Patching pinmux blocks..."
for pin in spi1_mosi_pc0 spi1_miso_pc1 spi1_sck_pc2 spi1_cs0_pc3 spi1_cs1_pc4; do
    patch_pin "$pin"
done

echo "🔧 Fixing tristate and input-enable for SPI1 pins..."


fix_pinmux_field() {
  local pin=$1
  awk -v pin="$pin" '
  BEGIN { in_block = 0 }
  {
    if ($0 ~ pin " {") {
      in_block = 1
    }
    if (in_block && /nvidia,tristate =/) {
      sub(/<0x1>/, "<0x0>")
    }
    if (in_block && /nvidia,enable-input =/) {
      sub(/<0x0>/, "<0x1>")
    }
    print
    if (in_block && /}/) {
      in_block = 0
    }
  }' "$DTS" | sudo tee "$DTS.fixed" > /dev/null && sudo mv "$DTS.fixed" "$DTS"
}

fix_pinmux_field "spi1_mosi_pc0"
fix_pinmux_field "spi1_miso_pc1"
fix_pinmux_field "spi1_sck_pc2"
fix_pinmux_field "spi1_cs0_pc3"
fix_pinmux_field "spi1_cs1_pc4"


echo "📦 Recompiling DTS to $DTB..."
sudo dtc -I dts -O dtb -o "$DTB" "$DTS"

echo "✅ SPI DTS patch applied and DTB regenerated successfully."
```

</details>

```bash
sudo bash modify_spi.sh
```

`modify_spi.sh` を実行した後。このスクリプトはデバイスツリー内の **SPI1** 設定を更新し、再コンパイルして古いものを上書きします。**SPI2** を有効にしたい場合は、`modify_spi.sh` スクリプト内のキーワード `spi1` を `spi2` に置き換えるだけです。

デバイスツリーを変更した後、イメージを Jetson-Nano にフラッシュします：

```bash
sudo ./flash.sh jetson-nano-emmc mmcblk0p1
```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/flashing_over_jetson-nano.png" /></div>

再起動後、**40ピン**ヘッダーの`SPI0_MOSI`、`SPI0_MISO`、`SPI0_CS0`、および`SPI0_CS1`ピンが使用可能になります。

## Jetson-naoでのSPI1のテスト

ピン19とピン21をショートします。これらはそれぞれ`SPI0_MOSI`と`SPI0_MISO`に対応し、**SPI1**コントローラーを使用してループバックテストを実行します。
Jetson-Nanoのデータシートは[こちら](https://developer.download.nvidia.com/assets/embedded/secure/jetson/Nano/docs/DA-09753-001_v1.0.pdf?__token__=exp=1751957680~hmac=6683559201b449f5191cbe0069e9299b1c3b373e82307d09a6a92d596bee4745&t=eyJscyI6ImdzZW8iLCJsc2QiOiJodHRwczovL3d3dy5nb29nbGUuY29tLyJ9
)からダウンロードして閲覧できます。特に**6ページ**を参照してください。
<div align="center"><img width="{200}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/40-pin_jetson-nano.jpg" /></div>

物理的な接続図を以下に示します：
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/real-connecr-spi.png
" /></div>

SPIドライバーモジュールをロードし、テストプログラムをダウンロードしてコンパイルします：

```bash
sudo modprobe spidev
git clone https://github.com/rm-hull/spidev-test
cd spidev-test/
gcc spidev_test.c -o spidev_test
```

テストプログラムを実行し、`spidev0.0`（**SPI1**に対応）を指定します：

```bash
./spidev_test -v -D /dev/spidev0.0 -p "Test"
```

テスト結果は以下に示されており、**SPI1**がループバック送信を正常に完了したことを示しています。また、`ls /dev/spidev*`を実行して利用可能なSPIコントローラーを確認することもできます。
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/spi_res_jetson-nano.png
" /></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
