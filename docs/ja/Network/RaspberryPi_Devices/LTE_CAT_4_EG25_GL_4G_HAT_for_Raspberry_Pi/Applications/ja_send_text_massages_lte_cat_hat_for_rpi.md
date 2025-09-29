---
description: Quectel 4G HAT を使用して IT システムにおける SMS の送受信の重要な役割を探ります。SMS が信頼性の高い通信を保証し、システムアラートを強化し、遠隔操作を可能にし、シームレスな統合とスケーラビリティを備えた IoT アプリケーションをサポートする方法を学びます。IT 専門家や IoT 愛好家に最適です。

title: Quectel 4G Raspberry Pi Hat を使用した SMS メッセージの送受信
keywords:
  - Raspberry Pi Hat
  - 初めての設定
  - IIoT
  - M2M
  - SMS
  - エッジコンピューティング
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.webp
slug: /ja/send_receive_sms_raspberry_pi_4g_lte_hat
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


## はじめに

4G の通信範囲が限られている農村部や遠隔地では、2G ネットワークを介した SMS 通信が IoT システムにおける途切れない接続を確保するための重要なツールとなります。**野生動物保護において、この技術は環境条件を監視し、動物の動きを追跡し、重要なイベントをリアルタイムで報告する自動アラートシステムを可能にします**。SMS 機能を備えた 4G モジュールを活用することで、デバイスは自動アラートを送信し、指示を受け取ることができ、現代のネットワークインフラが不足している地域でも保護活動が妨げられることはありません。この自動化と通信の統合により、遠隔地の野生動物エリアでの監視システムの効果が向上し、保護と研究のための信頼性の高いソリューションを提供します。

## ハードウェア準備
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

## セットアップ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.png" style={{width:800}}/></div>

## Windows 上で QCOM ツールを使用して SMS を送信する方法

### ステップ 1: モジュールのセットアップ

- **モジュールを接続する**
    - モジュールを USB 経由で Windows PC に接続します。DIP スイッチが正しい順序で配置されていることを確認してください。この場合、すべてのスイッチが 0 に設定されており、無効化されています。
- **モジュールをオンにする**
    - モジュールの電源ボタンを押します。
- **通信ポートを確認する**
    - [ドライバーが正しくインストールされていることを確認してください](https://wiki.seeedstudio.com/ja/getting_started_raspberry_pi_4g_lte_hat/#for-windows)。Windows デバイスマネージャーに COM ポートが表示されるはずです。

### ステップ 2: QCOM インターフェースを開く

- **QCOM をインストールして起動する**
  - **QCOM v1.6** ソフトウェアをダウンロードしてインストールします。（まだの場合）
  - PC 上でツールを起動します。
- **COM ポートを設定する**
  - QCOM インターフェースでモジュールに関連付けられた COM ポート（例: COM3）を選択します。
  - ボーレートを推奨値（例: 9600）に設定します。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/USBcommunication-2.PNG" 
    style={{ width: 600}} 
  />
</div>

### ステップ 3: SMS を送信する

**モジュール通信をテストする**

  - コマンド入力ボックスに以下のコマンドを入力します:
 
```bash
AT
```
  - 送信をクリックします。
  - モジュールは以下のように応答するはずです:

```bash
OK
```
  - これにより、モジュールが準備完了であることが確認されます。
  
**SMS モードを設定する**
  - SMS モードをテキストに設定するには、以下のコマンドを入力します:
```bash
AT+CMGF=1
```
  - 送信をクリックします。
  - モジュールは以下のように応答します:
```bash
OK
```
**SMSC 番号を確認する**

  - SIM カードから SMSC（ショートメッセージサービスセンター）番号を照会するには、以下を入力します:
```bash
AT+CSCA?
```
  - 送信をクリックします。応答は以下のようになります:
  
```bash
+CSCA: "+1234567890",145
OK
```
  - SMSC が設定されていない場合は、サービスプロバイダーに連絡して正しい番号を取得し、以下を使用して設定します:
```bash
AT+CSCA="+1234567890"
```
**SMS を作成して送信する**

- SMS を開始するコマンドを入力します:
```bash
AT+CMGS="+9876543210"
```
- +9876543210 を受信者の電話番号に置き換えます。

- 送信をクリックします。

- QCOM インターフェースに以下が表示されます:
```bash
>
```
- テキストボックスにメッセージ（例: Hello!）を入力します。

**SMS を送信する**
- Ctrl + Z を押すか、QCOM インターフェースオプションを使用して SMS を送信します。
- モジュールは以下のように応答します:
```bash
+CMGS: 25 
OK
```
- これにより、SMS が正常に送信されたことが確認されます。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_send.PNG" 
    style={{ width: 600}} 
  />
</div>

### ステップ 4: SMS を確認する

- 受信者の電話でメッセージが受信されていることを確認します。


## Raspberry PiでMinicomを使用してSMSを送信する

ドライバーをインストールし、モジュールを正しく起動していることを前提とします。そうでない場合は、[こちらのガイド](https://wiki.seeedstudio.com/ja/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi)を参照してください。

**ステップ 1: Minicomを開く**

:::note
ATコマンドで通信するための必要なドライバーがインストールされていない場合は、[こちらからインストール](https://wiki.seeedstudio.com/ja/getting_started_raspberry_pi_4g_lte_hat/#software-preparation)してください。
:::

```bash
sudo minicom -D /dev/ttyUSB2
```

**ステップ 2: 表のコマンドに従う**

| **コマンド**          | **応答**                     | **説明**                                         |
|-----------------------|------------------------------|-------------------------------------------------|
| `ATE`                | `OK`                        | Minicomで入力したコマンドを表示するエコーを有効化します。 |
| `AT`                 | `OK`                        | モジュールの準備状態を確認します。               |
| `AT+CMGF=1`          | `OK`                        | SMSモードをテキストモードに設定します。          |
| `AT+CSCA?`           | `+CSCA: "+1234567890",145`  | SIMからSMSC（ショートメッセージサービスセンター）番号を照会します。 |
| `AT+CMGS="+94712222803"` | `>`                      | 指定された受信者にメッセージ内容を入力する準備をします。 |
| *(メッセージを入力: `Hello!`)* | *(応答なし)*         | メッセージ内容を入力します。                     |
| *(`Ctrl+Z`を押す)*   | `+CMGS: 25` `OK`       | メッセージを送信します。モジュールは`+CMGS`とメッセージ参照IDで確認します。 |

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rpi_send_msg_1.PNG" 
    style={{ width: 600}} 
  />
</div>

## Pythonスクリプトでメッセージを送信する

```python
import serial
import time

# シリアルポートの設定
SERIAL_PORT = "COM7"  # モジュールのCOMポートに置き換えてください（例: WindowsではCOM3、Linuxでは/dev/ttyUSB2）
BAUD_RATE = 9600    # GSMモジュールのボーレートに合わせて調整してください

# SMSの詳細
SMSC_NUMBER = "+9477000000"  # キャリアのSMSC番号を国際形式で置き換えてください
RECIPIENT_NUMBER = "+94712222813"  # 受信者の電話番号を国際形式で置き換えてください
MESSAGE = "Hello, this is a test message from Python!"

def send_at_command(command, expected_response="OK", timeout=3):
    """ATコマンドをGSMモジュールに送信し、応答を待ちます。"""
    ser.write((command + "\r").encode())
    time.sleep(timeout)
    response = ser.read_all().decode()
    print(f"Command: {command}\nResponse: {response}")
    return expected_response in response

try:
    # シリアル接続を開く
    ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1)
    time.sleep(2)  # モジュールの初期化を待つ

    # GSMモジュールとの通信をテスト
    if not send_at_command("AT"):
        raise Exception("GSMモジュールが応答しません。接続を確認してください。")

    # SMSC番号を設定（必要な場合のみ）
    if not send_at_command(f'AT+CSCA="{SMSC_NUMBER}"'):
        raise Exception("SMSC番号の設定に失敗しました。")

    # SMSをテキストモードに設定
    if not send_at_command("AT+CMGF=1"):
        raise Exception("SMSモードの設定に失敗しました。")

    # SMSを送信
    if not send_at_command(f'AT+CMGS="{RECIPIENT_NUMBER}"', ">"):
        raise Exception("SMS送信の開始に失敗しました。")

    # メッセージ内容を提供し、Ctrl+Zを送信して完了
    ser.write((MESSAGE + "\x1A").encode())  # Ctrl+Zは'\x1A'として送信
    time.sleep(5)  # モジュールがSMSを送信するのを待つ
    response = ser.read_all().decode()
    print(f"SMS送信応答: {response}")

    if "OK" in response:
        print("SMSが正常に送信されました！")
    else:
        print("SMSの送信に失敗しました。モジュールまたはコマンド構文を確認してください。")

except Exception as e:
    print(f"エラー: {e}")

finally:
    if ser.is_open:
        ser.close()
```

## Windows環境でATコマンドを使用してSMSメッセージを受信する

ここでは、ATコマンドを使用してSMSメッセージを受信および読み取る手順を説明します。以下のコマンドを順番に実行してください。

ドライバーをインストールし、モジュールを正しく起動していることを前提とします。そうでない場合は、[こちらのガイド](https://wiki.seeedstudio.com/ja/getting_started_raspberry_pi_4g_lte_hat/#for-windows)を参照してください。

### ステップ1: SMSモードをテキストに設定する

AT+CMGF=1コマンドを使用して、GSMモジュールをテキストモードに設定し、SMSの処理を簡単にします。

**コマンド:**

```bash
AT+CMGF=1
期待される応答:
OK
```

### ステップ2: 現在のメッセージストレージを確認する
AT+CPMS?コマンドを使用して、現在のメッセージストレージ構成を確認します。

**コマンド:**
```bash
AT+CPMS?
```

**期待される応答:**
+CPMS: "SR",0,5,"MT",19,255,"MT",19,255 OK

**説明:**
- `SR`: ステータスレポートストレージ（例: SMS配信レポート）。
- `MT`: モバイル端末メモリ（SIMおよびモジュールストレージ）。
この例では、"MT"には255の容量のうち19件のメッセージが保存されています。

### ステップ3: メッセージストレージを"MT"に切り替える
モバイル端末メモリ内のメッセージにアクセスするために、AT+CPMS="MT"コマンドを使用してストレージを"MT"に切り替えます。

**コマンド:**

```bash
AT+CPMS="MT"
```
**期待される応答:**

```bash
+CPMS: 19,255,19,255,19,255 OK
```
**説明**

- 19,255: 現在19件のメッセージが保存されており、ストレージには255件のメッセージを保存可能です。

### ステップ4: 保存されているすべてのメッセージを一覧表示する
選択したメモリに保存されているすべてのメッセージを取得するには、AT+CMGL="ALL"コマンドを使用します。

**コマンド:**

```bash
AT+CMGL="ALL"
```
**期待される応答:**

```bash
+CMGL: 1,"REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! +CMGL: 2,"REC READ","+9876543210","","20/12/05,10:45:12+32" Another test message! OK
```
**説明:**

- +CMGL: 1: 最初のメッセージのインデックス。
- "REC UNREAD": メッセージのステータス（未読）。
- "+1234567890": 送信者の電話番号。
- Hello, this is a test message!: メッセージ内容。

### ステップ5: 特定のメッセージを読み取る

インデックス（例: インデックス1）を指定して特定のメッセージを読み取るには、AT+CMGR=|index|コマンドを使用します。

**コマンド:**
```bash
AT+CMGR=1
```
**期待される応答:**

```bash
+CMGR: "REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! OK
```
**説明:**

- `REC UNREAD`: メッセージが未読としてマークされています。
- `+1234567890`: 送信者の電話番号。
- Hello, this is a test message!: メッセージ内容。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rec_massages.PNG" 
    style={{ width: 600}} 
  />
</div>

## Raspberry PiでMinicomを使用してSMSメッセージを受信する

ドライバーをインストールし、モジュールを正しく起動していることを前提とします。そうでない場合は、[こちらのガイド](https://wiki.seeedstudio.com/ja/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi)を参照してください。

## ステップ1: Minicomを開く

```bash
sudo minicom -D /dev/ttyUSB2
```

## ステップ2: 表内のコマンドを順に実行する

| **ステップ** | **コマンド**          | **応答の詳細**                                                                                                                                                 | **目的/説明**                                                                                                                                                     |
|--------------|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1**        | `ATE`                | `OK`                                                                                                                                                           | ターミナルで入力したコマンドを表示するためのエコーを有効にします。                                                                                                 |
| **2**        | `AT+CMGF=1`          | `OK`                                                                                                                                                           | SMSモードをテキストモードに設定し、SMSの処理を簡単にします。                                                                                                      |
| **3**        | `AT+CPMS?`           | `+CPMS: "SR",0,5,"MT",19,255,"MT",19,255 OK`                                                                                                                   | 現在のメッセージストレージを確認します。 `"SR"`: ステータスレポート。 `"MT"`（モバイル端末）: SIMおよびモジュールに保存されたメッセージを含みます。               |
| **4**        | `AT+CPMS="MT"`       | `+CPMS: 19,255,19,255,19,255 OK`                                                                                                                               | メッセージストレージを`"MT"`（モバイル端末）に切り替えます。 `19,255`: 255件の保存可能なスロットのうち19件のメッセージが保存されています。                        |
| **5**        | `AT+CMGL="ALL"`      | `+CMGL: 1,"REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! +CMGL: 2,"REC READ","+9876543210","","20/12/05,10:45:12+32" Another test message! OK` | 選択したメモリに保存されているすべてのメッセージを取得します。 `"REC UNREAD"`: 未読メッセージ。 `+1234567890`: 送信者の電話番号。                                |
| **6**        | `AT+CMGR=1`          | `+CMGR: "REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! OK`                                                                | インデックス（例: `1`）を指定して特定のメッセージを読み取ります。 `"REC UNREAD"`: メッセージが未読であることを示します。 `Hello, this is a test message!`: メッセージ内容。 |

## リソース

- **[ウェブページ]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[ウェブページ]** [ATコマンドマニュアル V2.0](https://www.quectel.com/download/quectel_ec2xeg9xeg2x-gem05_series_at_commands_manual_v2-0-2/)

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