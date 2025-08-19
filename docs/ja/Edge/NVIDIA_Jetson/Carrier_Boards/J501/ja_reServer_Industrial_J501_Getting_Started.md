---
description: このWikiでは、J501キャリアボードの機能を紹介し、JetpackシステムをJ501キャリアボードにフラッシュする方法を説明します。
title: Jetpackをフラッシュする
keywords:
- reServer
- Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reserver_j501_getting_started
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reServer J501 の使い方

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/reServer_J501.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-Industrial-J501-Carrier-Board-Add-on.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
  </a>
</div>

J501キャリアボードは、NVIDIA Jetson AGX Orinモジュールをサポートする強力な拡張ボードです。豊富なデータポートと拡張インターフェースを備え、AGX Orinモジュールの性能を完全に引き出します。また、GMSL拡張を追加することで、最大8台のGMSLカメラを接続することが可能です。

## 特徴

- **エッジコンピューティング向けの最強AIコンピュータを構築:** Jetson AGX Orinモジュールと統合するよう設計されており、最大275 TOPSのAI性能を発揮。Jetson AGX Xavierと比較して8倍のAI性能を提供。消費電力は15Wから60Wまで設定可能。
- **複数センサー向けの高速インターフェースをサポート:** 22レーンのPCIe Gen4、1x 10GbE、Display Port、16レーンのMIPI CSI-2、USB 3.2インターフェース、40ピンヘッダーを搭載。
- **複数IO向けの低速インターフェースをサポート:** 4x DI、4x DO、3x GND_DI、2x GND_DO、1x GND_ISO、1x CAN、1x RS232/RS422/RS485。
<!-- - **開発用BSP対応:** Jetpack 6対応のボードBSPがカスタムシステムイメージの開発をサポート。 -->

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
      <td> 3x USB3.1, <br /> 1x USB3.1 Type C(ホストモード), <br /> 1x USB2.0 Type C(デバイスモード) </td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td> 4x DI,4x DO,3x GND_DI,2x GND_DO,1x GND_ISO,1x CAN
1x RS232/RS422/RS485 </td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td> 1x HDMI 2.1 Type A 7680x4320 </td>
    </tr>
    <tr>
      <td>SATA</td>
      <td> 2x SATA III 6.0Gbps at 30 Hz </td>
    </tr>
    <tr>
      <td>SIM</td>
      <td> 1x Nano SIMカードスロット </td>
    </tr>
    <tr>
      <td>ボタン</td>
      <td> リセットボタン、リカバリーボタン </td>
    </tr>
    <tr>
      <td rowSpan={9}>拡張</td>
      <td> Mini PCIE </td>
      <td> 1x Mini PCIe for LoRaWAN®/4G/シリーズワイヤレス (モジュールは含まれません) </td>
    </tr>
    <tr>
      <td> M.2 Key B </td>
      <td> 1x M.2 Key B (3042/3052) 4G/5G対応 (モジュールは含まれません) </td>
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
      <td> ファン </td>
      <td> 1x ファンコネクタ (5V PWM) </td>
    </tr>
    <tr>
      <td> TPM </td>
      <td> 1x TPM 2.0コネクタ (モジュールは含まれません) </td>
    </tr>
    <tr>
      <td> RTC </td>
      <td> 1x RTCソケット (CR1220付属), <br />1x RTC 2ピン </td>
    </tr>
    <tr>
      <td> カメラ </td>
      <td> 2x 拡張コネクタ (各コネクタに8レーン) </td>
    </tr>
    <tr>
      <td> PCIE </td>
      <td> 1x PCIE </td>
    </tr>
    <tr>
      <td> 電源 </td>
      <td> 電源供給 </td>
      <td> DC 12V-36V 端子ブロック2ピン (24V/5A電源アダプタ付属)</td>
    </tr>
    <tr>
      <td rowSpan={3}> 機械的仕様 </td>
      <td> 寸法 (W x D) </td>
      <td> 176 x 163mm (モジュールは含まれません)</td>
    </tr>
    <tr>
      <td> 動作温度 </td>
      <td> -20~60℃ </td>
    </tr>
    <tr>
      <td> 重量 </td>
      <td> 225g (モジュールは含まれません) </td>
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

### 対応モジュール
- [NVIDIA® Jetson AGX Orin™ モジュール 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5458.html) 
- [NVIDIA® Jetson AGX Orin™ モジュール 64GB](https://www.seeedstudio.com/NVIDIA-JETSON-AGX-ORIN-64GB-Module-p-5552.html) 

### 必要条件

- UbuntuホストPC
- reServer J501キャリアボード
- NVIDIA® Jetson AGX Orin™ モジュール 32GB/64GB
- AGX Orin アクティブファン
- NVMe M.2 2280 内部SSD
- USB Type-C データ転送ケーブル

:::info

物理的なUbuntuホストデバイスを使用することを推奨します。仮想マシンの使用は避けてください。
以下の表を参照してホストマシンを準備してください。
        
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td rowspan="2"> JetPackバージョン </td>
        <td class="dbon" colspan="3"> Ubuntuバージョン (ホストコンピュータ) </td>
    </tr>
    <tr>
        <td> 18.04 </td>
        <td> 20.04 </td>
        <td> 22.04 </td>
    </tr>
    <tr>
        <td>JetPack 5.x</td>
        <td> ✅ </td>
        <td> ✅ </td>
        <td> </td>
    </tr>
    <tr>
        <td>JetPack 6.x</td>
        <td> </td>
        <td> ✅ </td>
        <td> ✅ </td>
    </tr>
  </tbody>
</table>

:::

### Jetpackイメージの準備

ここでは、使用するJetsonモジュールに対応するシステムイメージをUbuntu PCにダウンロードする必要があります。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpackバージョン</th>
      <th>Jetsonモジュール</th>
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
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EagENvz49i1GhTAMR9xCLlkBHscdcSHkYf9PQuPFcgR50A?e=mOMJ2c" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERG3upqXAQNHsJP6ZvG2MAEBGsndVCgrLnhcKvtWoGA6tA?e=14KO6z" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>56571770D7B1BAF53EAD3B1C173C075<br />4592601348501288C3E081FF8D51907F7</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUNTXrMsDcJCnIN2RvmXg6EBBLY6PRZiegvUjqI_N2i0YQ?e=SXEXXz" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EZ7iNOxMxL9AjcKFPLygVT8Bg5qnkE-ZsMmNmHkZzNayOg?e=qv2sbB" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>077878E3B84022BA1344ED2EE8738B9<br />EAECA6F6136468369B7DBB4FC5EF48802</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERoEi192vKFPnvFaqnqVz_oBNi3PAQ2W7gkZHpGu0XuuEw?e=pXYw9X" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ESfErbFgQl9NudcbGZXL3LMB9wavWcQwjtW6wYYtfwkE3A?e=H5sR4J" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>F3852FFC7A8CDDFD9C2857B2F3F6168<br />99DC69EE4D5BA92704DB192E803C29EA0</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecebi5JjKaVHmY-DymgG8AIBPRgAuCXVCrf4IYiKIfsMxA?e=OJPKwB" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eccs1larF2FNhKi8MHred5kB4pQImN4ZHSgDM3BUDVzBtQ?e=reKIhD" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>61434E1A88FF2A95F6B13B5FFA51557<br />FAE8D46C67C72DDF862DE51D91DAF6987</td>
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
Jetpack5のイメージファイルは約**4.5GB**のサイズで、ダウンロードには約15分かかります。Jetpack6のイメージファイルは約**16.7GB**のサイズで、ダウンロードには約60分かかります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの整合性を確認するには、SHA256ハッシュ値を比較することができます。

Ubuntuホストマシンでターミナルを開き、`sha256sum <File>`コマンドを実行してダウンロードしたファイルのSHA256ハッシュ値を取得してください。結果のハッシュ値がWikiに記載されているSHA256ハッシュ値と一致する場合、ダウンロードしたファームウェアが完全であることが確認できます。
:::

### 強制リカバリモードに入る

:::info
インストール手順に進む前に、ボードが強制リカバリモードにあることを確認する必要があります。
:::

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/CGMGZGqZPKM" title="J501 強制リカバリモードに入る方法" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> 手順詳細 </summary>

**ステップ1.** 強制リカバリボタンを押し続けます。

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/button.jpg" />
</div>

**ステップ2.** 電源ケーブルを接続してキャリアボードに電源を供給します。

**ステップ3.** 強制リカバリボタンを離します。

**ステップ4.** USB Type-Cデータ転送ケーブルを使用してボードをUbuntuホストPCに接続します。

**ステップ5.** LinuxホストPCでターミナルウィンドウを開き、`lsusb`コマンドを入力します。使用しているJetson SoMに応じて、以下のいずれかの出力が表示されれば、ボードが強制リカバリモードにあることを確認できます。

- AGX Orin 32GBの場合: **0955:7223 NVidia Corp**
- AGX Orin 64GBの場合: **0955:7423 NVidia Corp**

以下の画像はAGX Orin 32GBの場合です。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Jetsonへのフラッシュ

**ステップ1:** ダウンロードしたイメージファイルを解凍します:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# 例: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**ステップ2:** 以下のコマンドを実行してJetpackシステムをNVMe SSDにフラッシュします:

```bash
cd mfi_xxxx
# 例: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドの実行には2〜10分かかる場合があります。
:::

**ステップ3:** HDMIコネクタを使用してJ501をディスプレイに接続し、初期設定を完了します:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
必要に応じて**システム設定**を完了してください。
:::

**ステップ4 (オプション):** Nvidia Jetpack SDKをインストールする

Jetsonデバイスでターミナルを開き、以下のコマンドを実行してください:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## リソース

- [reServer Industrial J501 キャリアボード データシート](https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/reServer_Industrial_J501_Carrier_Board_Datasheet.pdf)
- [reServer Industrial J501 回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/202003906_reServer_Industrial_J501_Carrier_Board_v1.0_SCH_PDF_20240529.pdf)
- [reServer Industrial J501 3D ファイル](https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/RESERVER_AGX_ORIN_CARRIER_BOARD.stp)
- [Seeed Jetson シリーズ カタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio エッジ AI 成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson シリーズ 比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson デバイス ワンページ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)



## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>