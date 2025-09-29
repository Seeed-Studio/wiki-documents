---
description: WindowsでQuectel 4G Raspberry Pi HATをMBIMモードで設定し、安定したセルラーインターネット接続を実現するためのガイド。

title: 4G Raspberry Pi HAT - WindowsでのMBIMモード設定
keywords:
  - Raspberry Pi Hat
  - 初めての設定
  - IIoT
  - MBIM
  - 4G LTE
  
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcmd.webp
slug: /ja/raspberry_pi_4g_lte_hat_mbim
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


## はじめに

**Quectel 4G Raspberry Pi HAT**は、Windows上でMBIM（Mobile Broadband Interface Model）モードを利用してインターネット接続をサポートします。このモードにより、Windowsは4Gモジュールをネイティブなセルラーモデムとして認識し、安定したドライバー対応のネットワーク接続を可能にします。

このガイドでは、QuectelモジュールをMBIMモードに設定し、Windows 10/11システムでインターネットに接続するための手順を説明します。


## 必要条件

### ハードウェア要件 

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>    
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## ソフトウェア要件

以下を確認してください：
- 以前にインストールしたQuectel NDISまたはその他のドライバーがアンインストールされていること。
- 以下のリンクから提供される正しいMBIMドライバーがインストールされていること。

### MBIMドライバーのダウンロード
- [Quectel Windows MBIM Driver v1.3をダウンロード](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_Windows_MBIM_V1.3_EN.zip)
- [Quectelの最新アップデートを取得](https://www.quectel.com/download-zone/?_sf_s=MBIM)

インストール後、**コンピュータ管理** → **デバイスマネージャー**に移動してドライバーのインストールを確認できます。成功したインストールでは、「ネットワークアダプタ」および「ポート（COM & LPT）」の下にデバイスが表示されます。以下の画像のようになります。



  <div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/devicetree_mbim.PNG" 
    style={{ width: 600}} 
  />
</div>

### MBIMモードの設定

モジュールをMBIMモードに切り替えるには、**QCOM Tool**が必要です。

1. [QCOM Toolをダウンロードして開く](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/QCOM_V1.6.rar)。
2. 4G HATをUSB経由でWindows PCに接続し、電源を入れます。
3. QCOMで以下のATコマンドを送信して現在のUSBモードを確認します：
   ```
   AT+QCFG="usbnet"?
   ```
   - `"usbnet",2`以外の値が返された場合は、次の手順に進みます。

4. MBIMモードに切り替えるには、以下を送信します：
   ```
   AT+QCFG="usbnet",2
   ```
5. 次に再起動します：
   ```
   AT+CFUN=1,1
   ```

:::note
ATポートが応答しない場合があります。その場合はDMポートを使用してください。
:::



  <div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcommand.PNG" 
    style={{ width: 600}} 
  />
</div>



## ネットワークへの接続

MBIMモードに設定した後：
- Windowsは**セルラーネットワークインターフェース**を検出します。
- Windowsの**ネットワークとインターネット設定**からネットワークを管理し、接続できるようになります。

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/windows.PNG"
    style={{ width: 600}}
  />
</div>

## ネットワーク設定の確認

PCがMBIM経由でネットワーク接続を取得したか確認するには：
1. コマンドプロンプトを開きます。
2. 以下を実行します：
   ```
   ipconfig
   ```
   「モバイルブロードバンド接続」または「セルラー」の下にIPアドレスが表示されるはずです。

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcmd.PNG"
    style={{ width: 600}}
  />
</div>




## 技術サポートと製品ディスカッション

弊社製品をご利用いただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なるニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>