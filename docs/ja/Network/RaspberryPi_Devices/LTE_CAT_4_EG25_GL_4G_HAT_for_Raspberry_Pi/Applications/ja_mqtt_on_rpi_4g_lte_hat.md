---
description: Raspberry Pi 用 4G LTE HAT と MQTT プロトコルを活用して、IoT および IIoT アプリケーション向けの効率的でリアルタイムな通信を実現する方法を紹介します。AT コマンドを使用してリモート接続を簡素化し、スケーラブルで高速なデータ伝送とリモート管理を可能にします。

title: MQTT を使用した IIoT 向け 4G LTE 接続の設定
keywords:
  - Raspberry Pi Hat
  - 初めての設定
  - IIoT
  - IoT
  - MQTT
  - エッジコンピューティング
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_ex.webp
slug: /ja/mqtt_raspberry_pi_4g_lte_hat
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


## はじめに

Raspberry Pi 用 4G LTE HAT は、信頼性の高い高速なセルラー接続を提供し、リモートおよび産業用 IoT (IIoT) アプリケーションに不可欠です。軽量なメッセージングプロトコルである MQTT を使用することで、デバイスは孤立した場所でもセルラーネットワークを介して効率的に通信できます。AT コマンドを使用した設定により、IoT デバイスをネットワークに接続するプロセスが簡素化されます。この 4G LTE と MQTT の組み合わせにより、リアルタイムのデータ伝送が強化され、スケーラブルな IIoT ソリューションとリモート管理機能が可能になります。

## 前提条件

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

#### 通信ドライバーとツール

関連するドライバーや通信ツールをまだインストールしていない場合は、まず [ガイド](https://wiki.seeedstudio.com/ja/getting_started_raspberry_pi_4g_lte_hat/#software-preparation) を確認してください。

#### Mosquitto Explorer

Mosquitto ブローカー、特に **https://test.mosquitto.org** で利用可能なテストブローカーを使用します。このブローカーは `ユーザー名やパスワードを必要としません`。利便性のために、テスト目的で [Mosquitto をインストール](https://mqtt-explorer.com/) することをお勧めします。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_ex.PNG" 
    style={{ width: 500}} 
  />
</div>

## ATコマンドを使用してMQTTブローカーに接続する

**ステップ 1: 受信モードを設定する**

```bash
AT+QMTCFG="recv/mode",0,0,1
```

**ステップ 2: MQTTクライアント用のネットワークを開く**

```bash
AT+QMTOPEN=0,"test.mosquitto.org",1883
```

**ステップ 3: MQTT接続ステータスを確認する（オプション）**

```bash
AT+QMTOPEN?
```

**ステップ 4: Mosquitto MQTTサーバーにクライアントを接続する**

```bash
AT+QMTCONN=0,"clientExample"
```

:::note
クライアントIDは一意である必要があるため、非常にユニークなものを生成してください。Mosquittoのパブリックブローカーは、アクセスにユーザー名やパスワードを必要としません。
:::

**ステップ 5: トピックにメッセージを公開する**

```bash
AT+QMTPUBEX=0,0,0,0,"test/topic",30 
```

:::note
`>`が表示されたら、メッセージを入力してCtrl+Zを押してください。
:::

```bash
> This is test data, hello MQTT.
```

Mosquitto Explorerを開き、公開したトピックを入力します。そこで更新が表示されます。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_pub.PNG" 
    style={{ width: 500}} 
  />
</div>

**ステップ 6: トピックを購読する**

```bash
AT+QMTSUB=0,1,"test/topic",2
```

Mosquitto Explorerを開き、4Gモジュールから公開したいトピックとメッセージを入力します。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_sub_2.PNG" 
    style={{ width: 500}} 
  />
</div>

その後、4Gモジュール側で公開されたメッセージが正常に購読されたことが確認できます。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_sub_1.PNG" 
    style={{ width: 500}} 
  />
</div>

**ステップ 7: トピックの購読を解除する**

```bash
AT+QMTUNS=0,2,"test/topic"
```

**ステップ 8: MQTTサーバーからクライアントを切断する**

```bash
AT+QMTDISC=0
```

## Pythonコードの実装

### ステップ 1. ディレクトリと仮想環境の準備

- Raspberry Piでターミナルを開きます。
- 新しいプロジェクトフォルダを作成し、その中に移動します：
```bash
mkdir mqtt_EX
cd mqtt_EX
```

- Python仮想環境をセットアップします：
```bash
python3 -m venv --system-site-packages env
```

- 仮想環境を有効化します：

```bash
source env/bin/activate
```

- 必要なライブラリをインストールします：

```bash
pip install pyserial 
```

### ステップ 2. Pythonスクリプトの準備

- **Thonny Python IDE**（Raspberry Piにプリインストール済み）を開きます。

- Thonnyで新しいファイルを作成し、提供されたコードをエディタに貼り付けます。

- 4G HATのシリアルポートに合わせて`usb_port`パラメータを更新します。通常、`/dev/ttyUSB2`または`/dev/ttyUSB3`である可能性があります。例：

```bash
usb_port = "/dev/ttyUSB2"
```

- ファイルを**mqtt_EX**フォルダ内に`test_mqtt.py`として保存します。

```python
import serial
import time

# シリアルポートの設定
SERIAL_PORT = '/dev/ttyUSB2'  # 環境に応じて調整してください
BAUD_RATE = 9600


def send_at_command(ser, command, delay=1):
    """
    QuectelモジュールにATコマンドを送信し、応答を待ちます。
    """
    ser.write((command + '\r\n').encode())
    time.sleep(delay)
    response = ser.read_all().decode()
    print(f"Command: {command}\nResponse: {response}")
    return response


def main():
    # シリアル接続を開く
    ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=5)
    if not ser.is_open:
        ser.open()

    try:
        # MQTT受信モードを設定
        send_at_command(ser, 'AT+QMTCFG="recv/mode",0,0,1')

        # MQTT接続を開く
        send_at_command(ser, 'AT+QMTOPEN=0,"test.mosquitto.org",1883')
        send_at_command(ser, 'AT+QMTOPEN?')  # 接続ステータスを確認

        # MQTTブローカーに接続
        send_at_command(ser, 'AT+QMTCONN=0,"clientExample"')

        # トピックを購読
        send_at_command(ser, 'AT+QMTSUB=0,1,"test/topic_subscribe",2')

        print("メッセージを公開および購読中。停止するにはCtrl+Cを押してください。")

        while True:
            try:
                # メッセージを公開
                send_at_command(ser, 'AT+QMTPUBEX=0,0,0,0,"test/topic_publish",30')
                send_at_command(ser, 'This is test data, hello MQTT.', delay=0.5)

                # 購読トピックのメッセージを確認
                print("購読トピックのメッセージを確認中...")
                incoming = ser.read_all().decode()
                if incoming:
                    print(f"Received: {incoming}")

                # 操作間の遅延
                time.sleep(2)
            except KeyboardInterrupt:
                print("ループを終了します...")
                break

        # トピックの購読を解除
        send_at_command(ser, 'AT+QMTUNS=0,2,"test/topic_subscribe"')

        # ブローカーから切断
        send_at_command(ser, 'AT+QMTDISC=0')
    finally:
        # シリアル接続を閉じる
        ser.close()


if __name__ == '__main__':
    main()
```

### ステップ 3. スクリプトを実行する

- ターミナルを開き、プロジェクトディレクトリにいることを確認します：
```bash
cd mqtt_EX
```

- 仮想環境を有効化します：

```bash
source env/bin/activate
```

- Pythonを使用してスクリプトを実行します：
```bash
python test_mqtt.py
```

- 出力結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_python.PNG" style={{width:800}}/></div>

## リソース

- **[PDF 書籍]** [MQTT アプリケーションガイド](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_LTE_Standard_MQTT_Application_Note_V1.2.pdf)

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>