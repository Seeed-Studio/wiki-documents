---
description: Raspberry Pi 5、OpenWrt、および4G LTE HATを使用して、どこでも信頼性の高いインターネットアクセスを楽しみましょう。家庭、旅行、リモートロケーション向けの高性能なポータブルホットスポットを作成する方法を学びます。

title: Raspberry Pi 5と4G LTEモジュールでOpenWrtを設定する
keywords:
  - Raspberry Pi Hat
  - 初めてのセットアップ
  - ホットスポット
  - モバイルデータ
  - 4G LTE
  - OpenWRT
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mobile-cop.webp
slug: /ja/4g_lte_hat_and_raspberry_pi_router_with_openwrt
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


## はじめに

Raspberry Pi 5を**OpenWrt**と4G LTE HATと組み合わせることで、ポータブルホットスポットを作成するための強力で柔軟なソリューションを提供します。このセットアップは、リモートロケーションでのインターネットアクセスの提供、IoTデバイスのサポート、または外出先での個人用無線ネットワークの作成に最適です。OpenWrtのカスタマイズ性により、4G LTEモジュールとのシームレスな統合が可能となり、Raspberry Pi 5を信頼性が高く高性能な無線ルーターとして最大限に活用できます。家庭、旅行、またはプロフェッショナルな用途に関わらず、このガイドでは、Raspberry Pi 5をOpenWrtと4G LTE接続で動作する完全なホットスポットに変える方法を説明します。

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

## OpenWrtイメージのビルド

### OpenWrtスナップショットの選択

4G LTEモジュールを使用するには、特定の依存関係が必要です。OpenWrt Firmware Selectorを使用すると、イメージ作成プロセス中にこれらの依存関係を含める柔軟性が提供され、カスタマイズされたファームウェアをコンパイルできます。この方法を使用しない場合、セットアップ後にRaspberry Piで依存関係をインストールするための別のインターネットソースが必要になります。そのため、必要な依存関係をすでに含むファームウェアイメージをビルドすることをお勧めします。

- **[OpenWrt Firmware Selector](https://firmware-selector.openwrt.org/?version=SNAPSHOT&target=bcm27xx%2Fbcm2712&id=rpi-5)にアクセスし、スナップショットバージョンを選択します。**

- スナップショットは頻繁に更新されており、上級ユーザーに最適です。

- `Customize installed packages and/or first boot script`をクリックします。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-build-1.PNG" 
    style={{ width: 500}} 
  />
</div>

カスタムビルドプロセス中に以下のパッケージが含まれていることを確認してください：

- kmod-usb-net-cdc-ether
- kmod-usb-serial-option
- picocom
- minicom

### ビルド手順

- 必要なパッケージを設定ファイルに追加します。
- OpenWrtファームウェアをコンパイルします。
- コンパイル後に生成されたファクトリーイメージをダウンロードします。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-build.PNG" 
    style={{ width: 500}} 
  />
</div>

## Raspberry Pi 5 に OpenWrt をインストールする

- **Balena Etcher** などのツールを使用して、コンパイル済みのイメージを SD カードに書き込みます。
- SD カードを Raspberry Pi 5 に挿入します。
- Raspberry Pi を 4G LTE モジュールに接続します。

### デバイス接続の確認

SSH を使用して Raspberry Pi にアクセスします：

```bash
ssh root@192.168.1.1
```

### デバイスの詳細を確認する

- `dmesg` を使用して接続されているデバイスを確認します：

```bash
dmesg | grep usb
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-dmsg.PNG" 
    style={{ width: 500}} 
  />
</div>

- USB の詳細を表示します：
```bash
cat/sys/kernel/debug/usb/devices
```
:::note
これにより、メーカー、製品、およびその他のデバイス固有の詳細情報が表示されます。モジュールの電源がオンになっていることを確認してください。
:::

## LTE モジュールの設定

### Minicom を使用して設定を調整する

**Minicom** を開きます：

```bash
minicom -s
```
以下のようなインターフェースが表示されます。矢印キーを使用して「Serial port setup」を選択します。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom-serial.PNG" 
    style={{ width: 500}} 
  />
</div>

設定を構成します：
- ボーレートを 4G モジュールに合わせて設定します（例：9600）。
- 正しい COM ポートを選択します（例：/dev/ttyUSB2）。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom.PNG" 
    style={{ width: 500}} 
  />
</div>

- 設定をデフォルトとして保存します。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom-save.PNG" 
    style={{ width: 500}} 
  />
</div>

### ECM / ダイヤルアップモードを有効にする

以下の AT コマンドを送信して USB ネットワーキングモードを構成します：

```bash
minicom -D /dev/ttyUSB2
```

```bash
AT+QCFG="usbnet"
AT+QCFG="usbnet",1 
```

### 新しいネットワークインターフェースを追加する

- Web ブラウザを使用して OpenWrt の LuCI Web インターフェースにログインします（**192.168.1.1**）。
- **Network > Interfaces > Add New Interface** に移動します。
- インターフェースを設定します：
    - 検出されたデバイス（**eth1** または **usb0**）を選択します。
    - **DHCP クライアント**プロトコルを使用します。
    - インターフェースに名前を付けます（例：**USB_Modem**）。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-new-interface.PNG" 
    style={{ width: 500}} 
  />
</div>

- ファイアウォール設定を構成します：
    - インターフェースを WAN ゾーンに割り当てます。

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-firewall-interface.PNG" 
    style={{ width: 500}} 
  />
</div>

- DHCP サーバーの下で「Ignore Interface」を有効にします。

### ワイヤレスアクセスポイントを設定する

- LuCI Web インターフェースで **Network > Wireless > Add** に移動します。

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-wireless.PNG" 
    style={{ width: 500}} 
  />
</div>

- 新しいワイヤレスインターフェースを構成します：
    - **SSID**：デフォルトのままにするか、カスタマイズします。
    - **モード**：アクセスポイント。
    - **ネットワーク**：LAN。

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-wireless-settings.PNG" 
    style={{ width: 500}} 
  />
</div>

- **ワイヤレスセキュリティ**について：
    - 暗号化を **WPA2** に設定します。
    - 強力なパスワードを作成します。

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-password-wireless.PNG" 
    style={{ width: 500}} 
  />
</div>

- デバイスを再起動します。

### ワイヤレスネットワークをテストする

- 設定したワイヤレス SSID が近くのデバイスに表示されるはずです。
- 設定したパスワードを使用して接続し、4G LTE インターネットにアクセスします。

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-connection.PNG" 
    style={{ width: 500}} 
  />
</div>

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mobile-cop.png" 
    style={{ width: 500}} 
  />
</div>

## リソース

- **[ウェブページ]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[ウェブページ]** [OpenWRTがcdc_etherドライバーを使用したドングルをWAN接続に利用する方法](https://openwrt.org/docs/guide-user/network/wan/wwan/ethernetoverusb_cdc)


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>