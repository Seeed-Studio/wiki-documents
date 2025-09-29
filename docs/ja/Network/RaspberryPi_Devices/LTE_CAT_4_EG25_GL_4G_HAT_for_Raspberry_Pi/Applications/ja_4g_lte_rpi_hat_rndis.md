---
description: WindowsでRNDISを設定してRaspberry Pi 4G LTE HATをUSB経由で接続し、シームレスなインターネットおよびネットワークアクセスを実現します。

title: RNDIS on 4G LTE Raspberry pi HAT Windows
keywords:
  - Raspberry Pi Hat
  - 初めての設定
  - IIoT
  - RNDIS
  - 4G LTE
  
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /ja/raspberry_pi_4g_lte_hat_rndis
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


## はじめに

**RNDIS (Remote Network Driver Interface Specification)** は、USBデバイスがネットワークアダプタをエミュレートできるようにするMicrosoftのプロトコルであり、USB接続を介してWindows PCにインターネットまたはネットワークアクセスを提供します。Windowsでは、Quectelモジュールのようなデバイスが仮想イーサネットインターフェースとして機能するために、適切なRNDISドライバをインストールすることが重要です。ドライバがインストールされると、PCはデバイスをネットワークアダプタとして認識し、インターネット共有やローカルネットワーク通信が可能になります。このプロセスは、USB経由でインターネット接続を提供するセルラーモジュールで特に一般的です。

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
WindowsにNDISやその他のドライバをすでにインストールしている場合は、それをアンインストールし、以下のRNDISドライバをインストールしてください。

- [こちらからダウンロード](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_Windows_RNDIS_V1.1.12.zip)
- [最新の更新を取得](https://www.quectel.com/download-zone/?_sf_s=rndis)


インストール結果は、`コンピュータの管理` → `デバイスマネージャー` で確認できます。ドライバのインストールが成功した後の「デバイスマネージャー」画面は以下の通りです。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/devicetree.PNG" 
    style={{ width: 600}} 
  />
</div>



### RNDISモードの設定

RNDISモードを設定するには、QCOMツールを使用し、以下の手順に従ってください：  
1. [QCOMツール](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/QCOM_V1.6.rar)で以下のコマンドを入力して送信します：  
   **AT+QCFG="usbnet"?**  
   
2. 応答が **AT+QCFG="usbnet",3** を示さない場合は、以下のコマンドを送信して手動でRNDISモードに設定します：  
   **AT+QCFG="usbnet",3**


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbnetcommnad.PNG" 
    style={{ width: 600}} 
  />
</div>

### ネットワークへの接続

接続を示すネットワークインターフェース（例：Network X）が表示されるはずです。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/connection.PNG" 
    style={{ width: 400}} 
  />
</div>

ipconfigコマンドを使用して、新しいRNDIS設定を確認できます。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/3.PNG" 
    style={{ width: 600}} 
  />
</div>


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>