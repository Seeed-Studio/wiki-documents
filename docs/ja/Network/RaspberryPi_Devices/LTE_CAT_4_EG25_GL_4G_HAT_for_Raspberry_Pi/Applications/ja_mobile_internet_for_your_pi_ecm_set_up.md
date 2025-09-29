---
description: Raspberry PiでECMモードと4G LTEの世界を探求しましょう。このガイドでは、ECM（Ethernet Control Model）を使用してセルラー接続を構成し、プロジェクトにシームレスなインターネットアクセスを提供する手順を説明します。

title: Raspberry Piでモバイルインターネット - ECMセットアップ

keywords:
  - Raspberry Pi Hat
  - 初めてのセットアップ
  - IIoT
  - ECM
  - モバイルデータ
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power2.webp
slug: /ja/raspberry_pi_4g_hat_ecm_mobile_internet
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


## はじめに

**ECM（Ethernet Control Model）**は、Quectel EG25-G 4GモジュールのようなデバイスがRaspberry Pi上でネットワークインターフェースとして機能することを可能にするUSBネットワーキングプロトコルです。ECMモードを有効にすることで、このモジュールはセルラーインターネット接続を提供し、ポータブルインターネットルーター、IoTゲートウェイ、リモートモニタリングシステムなどのIoTアプリケーションに最適です。Raspberry PiはATコマンドを介してモジュールと通信し、ECMモード、GNSS、SMSなどの機能を管理し、有線やWi-Fiネットワークがない地域でも信頼性の高いインターネットアクセスを確保します。

## ハードウェアの準備

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

## ハードウェアセットアップ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.png" style={{width:800}}/></div>

Raspberry Piを使用してECMモード（Ethernet Control Model）でネットワーキングを設定するには、**ATコマンド**を使用してQuectelモジュールを操作します。

:::note
ATコマンドで通信するための必要なドライバーがインストールされていない場合は、[こちら](https://wiki.seeedstudio.com/ja/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi)からインストールしてください。
:::

## ネットワーク構成

### ステップ 1: Raspberry PiでMinicomを開く

```bash
sudo minicom -D /dev/ttyUSB2
AT
```

### ステップ 2: ECMモードを有効にする

```bash
AT+QCFG="usbnet",1
```

### ステップ 3: モードを確認する

```bash
AT+QCFG="usbnet"?
```
**usbnet,1**が返されれば、ECMモードがアクティブであることを示します。

### ステップ 4: ネットワークインターフェースを確認する

```bash
ifconfig
```

新しいインターフェース（usb0またはeth1）が表示されます。ここではusb0がECMモードのネットワークインターフェースです。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ifconfig_usb0.PNG" 
    style={{ width: 600}} 
  />
</div>

### ステップ 5: DHCPを使用してネットワークインターフェースをインターネットアクセス用に構成する

```bash
sudo dhclient usb0
sudo ip link set usb0 up
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb0-dhcp.png" 
    style={{ width: 600}} 
  />
</div>

### ステップ 6: インターネットアクセス用にルーティングを正しく設定する

```bash
sudo ip route add default via 192.168.225.1 dev usb0
```
usb0のIPに応じてゲートウェイを変更してください。

### ステップ 7: 名前解決のためにDNSエントリを追加する

**/etc/resolv.confファイルを編集してGoogleのDNSを使用します:**

```bash
sudo nano /etc/resolv.conf
```

### ステップ 8: 以下の2行を追加して保存

```bash
nameserver 8.8.8.8
nameserver 8.8.4.4
```

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/GoogleDNS.PNG" 
    style={{ width: 600}} 
  />
</div>

### ステップ 9: DNS設定を永続化する

```bash
sudo nano /etc/NetworkManager/NetworkManager.conf
```

### ステップ 10: [main]セクションに以下を追加して保存

```bash
dns=none
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/DNS.PNG" 
    style={{ width: 600}} 
  />
</div>

### ステップ 11: NetworkManagerを再起動する

```bash
sudo systemctl restart NetworkManager
```

### ステップ 12: 接続をテストする

```bash
ping -I usb0 8.8.8.8
nslookup google.com
```
4G LTE HATを使用してモバイルネットワークに正常に接続できたら、可能性は無限大です。**MQTT接続**を確立してIoTメッセージングを行ったり、**クラウドサービス**とシームレスに通信してデータ処理を行ったり、**FTPサーバー**を設定してリモートファイル転送を行うことができます。このセットアップにより、Raspberry PiはIoT、自動化、その他多岐にわたるアプリケーションのための強力でポータブルなゲートウェイに変身します。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>