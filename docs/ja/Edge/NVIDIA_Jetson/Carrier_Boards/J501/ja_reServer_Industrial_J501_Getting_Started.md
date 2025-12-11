---
description: このwikiではJ501キャリアボードの機能を紹介し、J501キャリアボードにJetpackシステムをフラッシュする方法を説明します。
title: Jetpackのフラッシュ
keywords:
- reServer
- Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reserver_j501_getting_started
last_update:
  date: 08/19/2024
  author: Youjiang
---

# reServer J501の入門ガイド

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/reServer_J501.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-Industrial-J501-Carrier-Board-Add-on.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
  </a>
</div>

J501キャリアボードは、NVIDIA Jetson AGX Orinモジュールをサポートする強力な拡張ボードです。豊富なデータポートと拡張インターフェースを備え、AGX Orinモジュールの性能を完全に引き出します。また、GMSL拡張の追加により、最大8台のGMSLカメラの接続をサポートします。

## 特徴

- **エッジコンピューティング向けの最強AIコンピューターを構築：** Jetson AGX Orinモジュールとの統合を設計し、最大275 TOPSのAI性能を実現、Jetson AGX Xavierと比較して8倍のAI性能。15Wから60Wまでの電力設定が可能。
- **複数センサー向けの高速インターフェースサポート：** PCIe Gen4の22レーン、1x 10GbE、Display Port、MIPI CSI-2の16レーン、USB 3.2インターフェース、40ピンヘッダー。
- **複数IO向けの低速インターフェースサポート：** 4x DI、4x DO、3x GND_DI、2x GND_DO、1x GND_ISO、1x CAN、1x RS232/RS422/RS485。
<!-- - **BSP ready for development:** Jetpack 6 supported Board BSP ready for developing your custom system image. -->

## 仕様

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td rowSpan={7}>I/O</td>
      <td>Ethernet</td>
      <td> 1x LAN0 RJ45 GbE (10/100/1000Mbps), <br /> 1x LAN RJ45 GbE (10/100/1000/10000Mbps) </td>
    </tr>
    <tr>
      <td>USB</td>
      <td> 3x USB3.1, <br /> 1x USB3.1 Type C(Host mode), <br /> 1x USB2.0 Type C(Device mode) </td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td> 4x DI,4x DO,3x GND_DI,2x GND_DO,1x GND_ISO,1x CAN
1x RS232/RS422/RS485 </td>
    </tr>
    <tr>
      <td>Display</td>
      <td> 1x HDMI 2.1 Type A 7680x4320 </td>
    </tr>
    <tr>
      <td>SATA</td>
      <td> 2x SATA III 6.0Gbps at 30 Hz </td>
    </tr>
    <tr>
      <td>SIM</td>
      <td> 1x Nano SIM card slot </td>
    </tr>
    <tr>
      <td>Button</td>
      <td> Reset Button, Recovery Button </td>
    </tr>
    <tr>
      <td rowSpan={9}>拡張</td>
      <td> Mini PCIE </td>
      <td> 1x Mini PCIe for LoRaWAN®/4G/シリーズ ワイヤレス (モジュール別売) </td>
    </tr>
    <tr>
      <td> M.2 Key B </td>
      <td> 1x M.2 Key B (3042/3052) support 4G/5G (モジュール別売) </td>
    </tr>
    <tr>
      <td> M.2 Key E </td>
      <td> 1x M.2 Key E </td>
    </tr>
    <tr>
      <td> M.2 Key M </td>
      <td> 1x M.2 Key M (PCIE 4.0) </td>
    </tr>
    <tr>
      <td> Fan </td>
      <td> 1x Fan connectors (5V PWM) </td>
    </tr>
    <tr>
      <td> TPM </td>
      <td> 1x TPM 2.0 connector (モジュール別売) </td>
    </tr>
    <tr>
      <td> RTC </td>
      <td> 1x RTC socket (CR1220 included), <br />1x RTC 2-pin </td>
    </tr>
    <tr>
      <td> Camera </td>
      <td> 2x 拡張コネクタ (各コネクタ8レーン) </td>
    </tr>
    <tr>
      <td> PCIE </td>
      <td> 1x PCIE </td>
    </tr>
    <tr>
      <td> 電源 </td>
      <td> 電源供給 </td>
      <td> DC 12V-36V ターミナルブロック 2ピン (24V/5A電源アダプター付属)</td>
    </tr>
    <tr>
      <td rowSpan={3}> 機械的仕様 </td>
      <td> 寸法 (W x D) </td>
      <td> 176 x 163mm (モジュール別売)</td>
    </tr>
    <tr>
      <td> 動作温度 </td>
      <td> -20~60℃ </td>
    </tr>
    <tr>
      <td> 重量 </td>
      <td> 225g (モジュール別売) </td>
    </tr>
  </tbody>
</table>
</div>

## ハードウェア概要

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/hardware_overview.jpeg"/>
</div>

## J501キャリアボードへのJetPack OSのフラッシュ

ここでは、reServer J501に接続されたNVMe SSDに[Jetpack](https://developer.nvidia.com/embedded/jetson-linux-archive)をフラッシュする方法を説明します。

### サポートされるモジュール

- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)
- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)

### 前提条件

- Ubuntu ホストPC
- reServer J501 キャリアボード
- NVIDIA® Jetson AGX Orin™ Module 32GB/64GB
- AGX Orin アクティブファン
- NVMe M.2 2280 内蔵SSD
- USB Type-C データ転送ケーブル

:::info

仮想マシンではなく、物理的なubuntuホストデバイスを使用することをお勧めします。
ホストマシンの準備については、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack バージョン </td>
        <td class="dbon" colspan="3"> Ubuntu バージョン (ホストコンピューター) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 5.x</td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

### Jetpackイメージの準備

ここでは、使用するJetsonモジュールに対応するシステムイメージをUbuntu PCにダウンロードする必要があります：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpack バージョン</th>
      <th>Jetson モジュール</th>
      <th> GMSL </th>
      <th>ダウンロードリンク1</th>
      <th>ダウンロードリンク2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>5.1.3</td>
      <td>AGX Orin 32GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQD3U5NHij5gR5r4FB_AzC9vAbb3ERak_RvvIMoow0-X2fM?e=Ddf7Zi" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERG3upqXAQNHsJP6ZvG2MAEBGsndVCgrLnhcKvtWoGA6tA?e=14KO6z" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>c673dc8ae75addf8ca3224cf700be35<br />4eec0ca41cb5ecabb8953c276213a7119</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQD3ZjNepbc7SoC24H82Y4txAUhoSQIZ4l2ZcKGa3qgd9_E?e=bk1qc5" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EZ7iNOxMxL9AjcKFPLygVT8Bg5qnkE-ZsMmNmHkZzNayOg?e=qv2sbB" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>425a931e65f2715d8486c68565ad711<br />fd34b626ab023d025df2d84af81b62aa3</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDvJDte6YOfS5UI7C7ln0ryAVTRpxtGi9spgHOmEZG_sL8?e=jz5B4f" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ESfErbFgQl9NudcbGZXL3LMB9wavWcQwjtW6wYYtfwkE3A?e=H5sR4J" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>76abdd6de0a49bd95d57b361bebea59<br />a6a05e56779c7ceb863ad178f3ed98aaf</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBh9HqX5MHBQZF0WLe01k7mAXYqzHd4YJXaDt4uS2VZ8T4?e=AX0KSd" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eccs1larF2FNhKi8MHred5kB4pQImN4ZHSgDM3BUDVzBtQ?e=reKIhD" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>49076bd4bb7179dfe38c25bd5831c03<br />296bf26e86d67d9bca766a749a14257bd</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.0</td>
      <td>AGX Orin 32GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERTmpYBKF2tAodLyqpajhLkBxPdGUIWXfGytdCGwNu28qw?e=cJIbtM" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EeHcCFk-chtDnEzoXiwvxZwBQuK3I3mTOAJ8mnZJE-P2uA?e=X9g0HK" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>B1C1BBB14058B0F5C00C5657A8EF8FA<br />7A4C3711DB8AD82F7E614311F95063989</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ef5wlNXtxVRIulSKwJTT3ocBmCBlHbQNVnz3LRDJtRwlGQ?e=KAIiVS" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EX5HoeV09eFKtWj9YhAfgZ8Bt2k9bxxxSO5-TQBZoGLB-Q?e=hvcfG1" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>0C58022F626321EE42464AACBB47029<br />6B1AFE0A7256787158539BE7EC73E19C6</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWbP7xmg-fRAs7N-7iL42QMBaRcQvV23IITvt-uC4p2rUg?e=XZmnzC" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EY-HFdsaHWVOvJJ5fMynVO0BvEOv5W0h1IxeSfesNFRYag?e=5thYHs" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>4077631986A66EB3AF5FBF4FF2FBDBC<br />CD07E4DC1AA4076414EB1F4640AF72451</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUK5fwDqq0hNgcnyXg_-qXUBa9qnRJQ0AXdcInMIJWtbZg?e=iFVAAl" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EUmpL5LNJDRLjoC6oQg6Vv4BgQ9eA4MUl4yE43fycz667w?e=Xw5nga" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>8DCFF0FFBA81B756B0C62E50F4A106B<br />44116CC8171C05F48A328DE594D6A4CD9</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td>AGX Orin 32GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfhMqk5d6tFKiDqbtyWKFdsBV-NLqs9L4NBY0dRC-Y_jHw?e=JQMYcn" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td> - </td>
      <td>69CFD82D0C70B55D5BDD34E3EAF7AE8<br />DDCE002CCCDBA3DCEE40F40CD8BBA0478</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Edgau76MPUZAnuAixzf7TSUBGF2edqqdZO3mHRaZB_Gd7Q?e=omVwi3" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td> - </td>
      <td>3BAEB35868E4B187F4B7C35FA44D8E0<br />BD9486161E14F9F073993216F83DFA0E4</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcWxzMVxULFJoPMMzcb2OU4B0TrE5PUoP-3-9uh9LFgA4g?e=oAUYmS" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td> - </td>
      <td>B6A9F41B8B42060D19F811B718E4B71<br />FCBE699BB9EC7A50B4B24DF205003111B</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQaWP2i_eNlOuzhWEQYy8YkBvKksE58swLgIqCXOO4m-kg?e=D95cXx" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td> - </td>
      <td>AA04EFB99374DCDC89A57C039FA4E1F<br />F5C9371B22F8ED83612AC4C799CCB2640</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
jetpack5 イメージファイルのサイズは約 **4.5GB** で、ダウンロードには約 15 分かかります。Jetpack6 イメージファイルのサイズは約 **16.7GB** で、ダウンロードには約 60 分かかります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの整合性を確認するには、SHA256 ハッシュ値を比較できます。

Ubuntu ホストマシンで、ターミナルを開いて `sha256sum <File>` コマンドを実行し、ダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュが wiki で提供されている SHA256 ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

### フォースリカバリモードに入る

:::info
インストール手順に進む前に、ボードがフォースリカバリモードになっていることを確認する必要があります。
:::

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/CGMGZGqZPKM" title="J501 Enter Force Recovery Mode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> ステップバイステップ </summary>

**ステップ 1.** フォースリカバリボタンを離さずに押し続けます。

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/button.jpg" />
</div>

**ステップ 2.** 電源ケーブルを接続してキャリアボードに電源を供給します。

**ステップ 3.** フォースリカバリボタンを離します。

**ステップ 4.** USB Type-C データ転送ケーブルでボードを Ubuntu ホスト PC に接続します。

**ステップ 5.** Linux ホスト PC でターミナルウィンドウを開き、`lsusb` コマンドを入力します。使用している Jetson SoM に応じて、返される内容に以下の出力のいずれかが含まれている場合、ボードはフォースリカバリモードになっています。

- AGX Orin 32GB の場合：**0955:7223 NVidia Corp**
- AGX Orin 64GB の場合：**0955:7023 NVidia Corp**

以下の画像は AGX Orin 32GB の場合です

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Jetson にフラッシュする

**ステップ 1：** ダウンロードしたイメージファイルを展開します：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**ステップ 2：** 以下のコマンドを実行して jetpack システムを NVMe SSD にフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドは 2～10 分間実行される場合があります。
:::

**ステップ 3：** ボード上の HDMI コネクタを使用して J501 をディスプレイに接続し、初期設定セットアップを完了します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
必要に応じて **System Configuration** を完了してください。
:::

**ステップ 4（オプション）：** Nvidia Jetpack SDK をインストールする

Jetson デバイスでターミナルを開き、以下のコマンドを実行してください：

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## リソース

- [reServer Industrial J501 キャリアボードデータシート](https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/reServer_Industrial_J501_Carrier_Board_Datasheet.pdf)
- [reServer Industrial J501 回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/202003906_reServer_Industrial_J501_Carrier_Board_v1.0_SCH_PDF_20240529.pdf)
- [reServer Industrial J501 3D ファイル](https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/RESERVER_AGX_ORIN_CARRIER_BOARD.stp)
- [Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI 成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson デバイス一覧](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
