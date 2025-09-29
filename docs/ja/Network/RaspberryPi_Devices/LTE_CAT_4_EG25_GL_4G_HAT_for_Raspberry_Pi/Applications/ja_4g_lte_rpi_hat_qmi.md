---
description: Quectel EG25モジュールを搭載した4G HATを使用して、Raspberry PiでQMIモードで信頼性の高いLTEインターネット接続を設定する方法を学びます。Raspberry Piでのquectel-CMの設定、コンパイル、およびダイヤルの手順をステップバイステップで解説します。

title: 4G Raspberry Pi HAT - Raspberry Pi OSでのQMIモード設定
keywords:
  - Raspberry Pi Hat
  - 初めてのセットアップ
  - IIoT
  - QMI
  - 4G LTE
  
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Raspberry-Pi-4G-LTE-CAT4-HAT.webp
slug: /ja/raspberry_pi_4g_lte_hat_qmi
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


## はじめに

このガイドでは、Quectel EG25-Gモジュールを搭載した4G HATを使用して、Raspberry Piでインターネット接続を設定する方法を説明します。Quectel EG25-Gは、QMI（Qualcomm MSM Interface）モードを含む複数のネットワークプロトコルをサポートする広く使用されているLTEモデムであり、高速で効率的なモバイルブロードバンド接続を可能にします。このガイドに従うことで、QMIモードでモジュールを設定し、quectel-CMダイヤルアップツールをコンパイルして使用し、Raspberry Piで安定した4Gインターネット接続を確立する方法を学ぶことができます。この方法は、IoT展開、リモートモニタリング、エッジコンピューティングなど、モバイルインターネット接続を必要とするアプリケーションに最適です。

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

### ソフトウェア要件

#### 以前のダイヤル設定を削除

進める前に、競合を避けるために他のダイヤル方法を削除してください。

1. **正しいシリアルポートを確認**

以下のコマンドを実行して、正しいATコマンドポートを使用していることを確認します（必要に応じて`/dev/ttyUSB2`を置き換えてください）:

```bash
sudo minicom -D /dev/ttyUSB2
```

2. **USBネットワークモードを確認および設定**

minicomターミナル内で以下を入力します:

```bash
AT+QCFG="usbnet"?
```
- 応答が`usbnet,0`の場合、変更は不要です。

モードを明示的に`0`に設定するには、以下を入力します:

```bash
AT+QCFG="usbnet",0
```

3. **モジュールを再起動**

以下のコマンドでモジュールをリセットします:
```bash
AT+CFUN=1,1
```

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbnet_qmi.PNG" 
    style={{ width: 600}} 
  />
</div>

## カーネルドライバーの確認 (qmi_wwan など)

`qmi_wwan` ドライバーがロードされているか確認します：

```bash
lsmod 
```

- 出力に `qmi_wwan` が表示されている場合、カーネルドライバーがアクティブです。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/lsmod.PNG" 
    style={{ width: 600}} 
  />
</div>

## ダイヤルツールの移植

1. **ツールのダウンロードと解凍**

- ダウンロード後、[パッケージを解凍](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/eg25qmi.zip)してホームディレクトリに配置します。
- ホームディレクトリに移動します：
  
```bash
ls
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls1.PNG" 
    style={{ width: 600}} 
  />
</div>

- `eg25qmi` というフォルダが表示されるはずです。

2. **ツールディレクトリに移動**

```bash
cd eg25qmi
ls
```
- ダイヤルツールのソースファイルが表示されます。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls2.PNG" 
    style={{ width: 600}} 
  />
</div>

## コンパイル

1. **ダイヤルツールをコンパイル**
```bash
sudo make
```
- コンパイル後、緑色で表示される新しいファイルが生成されます。その中には `quectel-CM` ダイヤルツールが含まれます。

### コンパイルされたファイルを確認

```bash
ls
```
- `quectel-CM` 実行ファイルが表示されるはずです。これがインターネット接続に必要なダイヤルツールです。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls3.PNG" 
    style={{ width: 600}} 
  />
</div>

## ダイヤルアップによるインターネット接続

1. **ダイヤル開始**

```bash
sudo ./quectel-CM
```
- ダイヤルプロセスが成功すると、割り当てられたIPアドレスとゲートウェイ情報が表示されます。
- 最初の試行が失敗した場合は、少し待って再試行してください。2回目の試行で成功するはずです。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/connect.PNG" 
    style={{ width: 600}} 
  />
</div>

## ダイヤル後の確認

1. **ネットワークインターフェースを確認**
```bash
ifconfig
```
- `wwan0` インターフェースが表示され、IPアドレスが割り当てられていることを確認します。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/wwan0.PNG" 
    style={{ width: 600}} 
  />
</div>

2. **接続テスト**
```bash
ping -I wwan0 8.8.8.8
```
- Pingが成功すれば、接続がアクティブであることが確認できます。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ping.PNG" 
    style={{ width: 600}} 
  />
</div>

## 技術サポートと製品に関するディスカッション

弊社製品をご利用いただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズや好みに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>