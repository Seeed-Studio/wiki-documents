---
description: Raspberry Pi 4G HAT のための TCP の力を解き放ちましょう。TCP がどのように信頼性の高いデータ交換を保証するかを探り、IoT アプリケーションやリモートモニタリングなどに不可欠な役割を果たします。

title: Raspberry Pi 用 4G LTE HAT - TCP/IP ネットワーキングの解説
keywords:
  - Raspberry Pi Hat
  - 初めてのセットアップ
  - IIoT
  - IoT
  - TCP/IP
  - エッジコンピューティング
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/tcp_python.webp
slug: /ja/tcp_ip_raspberry_pi_4g_lte_hat
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


## はじめに

TCP（Transmission Control Protocol）は、Raspberry Pi 4G HAT を使用するアプリケーションにおいて重要です。TCP はインターネット上で信頼性が高く、順序が保証され、エラーがチェックされたデータ伝送を実現します。これは、クラウドサーバーやリモートシステムとの一貫した通信が必要な IoT デバイスのようなリアルタイムアプリケーションにとって不可欠です。TCP の信頼性により、センサーの読み取り値やテレメトリなどの重要なデータを送信し、コマンドを受信する際にデータが失われたり破損したりすることがありません。Raspberry Pi をゲートウェイまたはクライアントとして使用することで、リモートモニタリング、メッセージングシステム、ファイル転送など、さまざまなアプリケーションをサポートします。

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

#### 通信ドライバとツール

関連するドライバや通信ツールをまだインストールしていない場合は、まず [ガイド](https://wiki.seeedstudio.com/ja/getting_started_raspberry_pi_4g_lte_hat/#software-preparation) を確認してください。

### 追加要件

以下の詳細を持つ事前設定済みの TCP サーバーが必要です：

- **ホスト**: 例えば、自分のサーバー、またはテスト目的で使用する `tcpbin.com`
- **ポート番号**: 専用のポート番号、ここでは `tcpbin.com` のポート `4242` を使用します。

`tcpbin.com` は、TCP/IP 通信のテストとデバッグに使用される公開 TCP サーバーです。送信されたメッセージをエコーバックするため、接続性とデータ伝送の確認に最適です。

## tcpbin.com に AT コマンドを送信する

Raspberry Pi では Minicom を、Windows では USB 経由で Qcom Tool を開きます。

```bash
sudo minicom -D /dev/ttyUSB2
```

| 手順 | アクション                                              | AT コマンド                       | 期待される応答                              |
|------|-----------------------------------------------------------|---------------------------------------------|-----------------------------------------------|
| 1    | モバイルネットワークプロバイダーの APN を設定します。        | `AT+QICSGP=1,1,"dialogbb","","",1`           | `OK`                                           |
| 2    | PDP コンテキストをアクティブ化します。                | `AT+QIACT=1`                                 | `OK`                                           |
| 3    | PDP コンテキストがアクティブ化されていることを確認します。     | `AT+QIACT?`                                  | `+QIACT: 1,1,1,"<Your_IP_Address>"` `OK`  |
| 4    | サーバーへの TCP 接続を開きます。     | `AT+QIOPEN=1,0,"TCP","tcpbin.com",4242,0,0`  | `+QIOPEN: 0,0` (接続成功を示します) |
| 5    | サーバーにメッセージを送信します。            | `AT+QISEND=0`                                | `>` (メッセージ入力のプロンプト) メッセージ入力後: `Hello TCPBin<Ctrl+Z>`  `SEND OK` |
| 6    | サーバーからの応答を読み取ります。       | `AT+QIRD=0,1500`                             | `+QIRD: <length>`  `Hello TCPBin`  `OK` |
| 7    | TCP 接続を閉じます。                | `AT+QICLOSE=0`                               | `OK`                                           |


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/tcp.PNG" 
    style={{ width: 500}} 
  />
</div>

## 自動化された Python スクリプト

以下は、Raspberry Pi 上で Quectel 4G LTE モジュールと対話するための自動化された Python スクリプトです。このスクリプトは serial ライブラリを使用してモジュールに AT コマンドを送信します。APN、ポート、ボーレート、TCP ポート、アドレスの変数をカスタマイズできます。

## Python コードの実装 

### ステップ 1. ディレクトリと仮想環境の準備

- Raspberry Pi のターミナルを開きます。
- 新しいプロジェクトフォルダを作成し、その中に移動します:
```bash
mkdir TCP_EX
cd TCP_EX
```
- Python 仮想環境をセットアップします:
```bash
python3 -m venv --system-site-packages env
```

- 仮想環境をアクティブ化します:

```bash
source env/bin/activate
```

- 必要なライブラリをインストールします:

```bash
pip install pyserial 
```

### ステップ 2. Python スクリプトの準備

- **Thonny Python IDE**（Raspberry Pi にプリインストール済み）を開きます。

- Thonny で新しいファイルを作成し、提供されたコードをエディタに貼り付けます。

- 4G HAT のシリアルポートに対応する usb_port パラメータを更新します。通常、`/dev/ttyUSB2` または `/dev/ttyUSB3` になります。例:

```bash
usb_port = "/dev/ttyUSB2"
```
- ファイルを **TCP_EX** フォルダに test_mqtt.py として保存します。

```python
import serial
import time

# 設定変数
APN = "dialogbb"  # ネットワークの APN に置き換えてください
PORT = "/dev/ttyUSB2"  # Quectel モジュールに接続されたシリアルポート
BAUDRATE = 9600  # 通信ボーレート
TCP_ADDRESS = "tcpbin.com"  # TCP サーバーアドレス
TCP_PORT = 4242  # TCP サーバーポート
MESSAGE = "Hello TCPBin"  # 送信するメッセージ


def send_command(ser, command, wait_for="OK", timeout=5):
    """
    モジュールに AT コマンドを送信し、応答を待ちます。
    """
    ser.write((command + "\r\n").encode())
    time.sleep(0.5)
    end_time = time.time() + timeout
    response = b""
    while time.time() < end_time:
        if ser.in_waiting > 0:
            response += ser.read(ser.in_waiting)
            if wait_for.encode() in response:
                break
    print(f">> {command}")
    print(response.decode().strip())
    return response.decode().strip()


def main():
    try:
        # シリアル接続を開く
        ser = serial.Serial(PORT, BAUDRATE, timeout=1)
        time.sleep(2)  # モジュールの初期化を待つ

        # 1. APN を設定
        send_command(ser, f'AT+QICSGP=1,1,"{APN}","","",1')

        # 2. PDP コンテキストをアクティブ化
        send_command(ser, "AT+QIACT=1")

        # 3. PDP コンテキストの状態を確認
        send_command(ser, "AT+QIACT?")

        # 4. TCP 接続を開く
        send_command(ser, f'AT+QIOPEN=1,0,"TCP","{TCP_ADDRESS}",{TCP_PORT},0,0')
        time.sleep(5)  # 接続が確立するのを待つ

        # 5. データを送信
        send_command(ser, f"AT+QISEND=0")
        ser.write((MESSAGE + "\x1A").encode())  # メッセージを送信し、Ctrl+Z で終了
        time.sleep(1)  # 送信のための時間を確保
        print("メッセージが送信されました。")

        # 6. 応答を読み取る
        response = send_command(ser, "AT+QIRD=0,1500")
        print(f"サーバー応答: {response}")

        # 7. 接続を閉じる
        send_command(ser, "AT+QICLOSE=0")
        print("接続が閉じられました。")

        # シリアルポートを閉じる
        ser.close()

    except Exception as e:
        print(f"エラー: {e}")


if __name__ == "__main__":
    main()
```

### ステップ 3. スクリプトを実行する

- ターミナルを開き、プロジェクトディレクトリにいることを確認します:
```bash
cd TCP_EX
```

- 仮想環境をアクティブ化します:

```bash
source env/bin/activate
```

- スクリプトを Python で実行します:
```bash
python test_tcp.py
```
- 出力結果
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/tcp_python.PNG" style={{width:600}}/></div>

## リソース

- **[PDF 書籍]** [TCP アプリケーションガイド](https://www.quectel.com/download/quectel_ec2xeg2xeg9xem05_series_tcpip_application_note_v1-3/ )

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>