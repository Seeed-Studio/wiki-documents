---
description: コマンド一覧
title: Wio-S3 Wireless Module コマンド一覧
keywords:
  - wio
  - module
  - LoRa
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module-with-IPEX.webp
slug: /wio-s3_wireless_module_command_list
sku: 100020327,100079384
sidebar_position: 2
last_update:
  date: 6/9/2026
  author: Janet Zhang
createdAt: '2026-06-09'
updatedAt: '2026-06-09'
url: https://wiki.seeedstudio.com/ja/wio-s3_wireless_module_command_list/
---

## シリアルデバッグコマンド一覧

### システムコマンド

**1. `help [<string>] [-v <0|1>]`**

引数が指定されていない場合は、登録されているすべてのコマンドの概要を表示し、指定されている場合は、そのコマンドの概要を表示します。

| 項目 | 説明 | データ |
|------|-------------|------|
| `<string>` | コマンド名 | 省略可。指定した場合、そのコマンドの説明を表示します |
| `-v, --verbose=<0\|1>` | 指定した場合、指定した詳細レベルでコンソールコマンドを一覧表示します | 0 または 1 |

**使用例:**
- `help` : 利用可能なすべてのコマンドを表示します。
- `help lora_tx` : `lora_tx` コマンドの詳細情報を表示します。
- `help -v 1` : 詳細モードを有効にして完全なコマンド一覧を表示します。



### LoRa コマンド

**1. `lora_tx [-f <f>] [-s <6-12>] [-b <0|1|2>] [-c <1|2|3|4>] [-p] [--crc=<0|1>] [--iq=<0|1>] [--net=<0|1>] [-i <t>] [-d <d>] [-n <n>]`**

無線パラメータを設定して LoRa データパケットを送信します。

| 項目 | 説明 | データ |
|------|-------------|------------------|
| `-f, --freq=<f>` | 無線周波数を Hz 単位で設定 | 415000000 ~ 940000000 Hz, <br />デフォルト: 868000000 |
| `-s, --sf=<6-12>` | LoRa SF を設定 | 6 ~ 12, デフォルト: 7 |
| `-b, --bw=<0\|1\|2>` | LoRa 帯域幅を設定 | 0:125KHz, 1:250KHz, 2:500KHz, <br />デフォルト: 0 |
| `-c, --cr=<1\|2\|3\|4>` | LoRa 符号化率を設定 | 1:CR_4_5, 2:CR_4_6, 3:CR_4_7, 4:CR_4_8, デフォルト: 1 |
| `-p, --power=` | 無線出力を設定 | LPA: -17 ~ +14 dB, HPA: -9 ~ +22 dB, デフォルト: 10 |
| `--crc=<0\|1>` | LoRa CRC を設定 | 0:DISABLE, 1:ENABLE, デフォルト: 1 |
| `--iq=<0\|1>` | LoRa IQ モードを設定 | 0:STANDARD, 1:INVERTED, デフォルト: 0 |
| `--net=<0\|1>` | Public Network を設定 | 0:Private Network, 1:Public Network, デフォルト: 0 |
| `-i, --interval=<t>` | 送信間隔 (ms) を設定 | デフォルト: 0 |
| `-d, --txt=<d>` | 送信するテキストデータを設定 | デフォルト: hello |
| `-n, --num=<n>` | 送信パケット数 | 0: 連続送信, デフォルト: 1 |

**例:** `lora_tx -f 868000000 -s 7 -b 0 -c 1 -p 10 -d hello`  
周波数 868000000 Hz、SF7、帯域幅 125 kHz、符号化率 4/5、送信電力 10 dB で "hello" を送信する LoRa パケットを送信します。


**2. `lora_rx [-f <f>] [-s <6~12>] [-b <0|1|2>] [-c <1|2|3|4>] [--crc=<0|1>] [--iq=<0|1>] [--net=<0|1>] [--boosted=<0|1>]`**

無線パラメータを設定して LoRa パケットを受信します。

| 項目 | 説明 | データ |
|------|-------------|------------------|
| `-f, --freq=<f>` | 無線周波数を Hz 単位で設定 | 415000000 ~ 940000000 Hz, デフォルト: 868000000 |
| `-s, --sf=<6~12>` | LoRa SF を設定 | 6 ~ 12, デフォルト: 7 |
| `-b, --bw=<0\|1\|2>` | LoRa 帯域幅を設定 | 0:125KHz, 1:250KHz, 2:500KHz, デフォルト: 0 |
| `-c, --cr=<1\|2\|3\|4>` | LoRa 符号化率を設定 | 1:CR_4/5, 2:CR_4/6, 3:CR_4/7, 4:CR_4/8, デフォルト: 1 |
| `--crc=<0\|1>` | LoRa CRC を設定 | 0:DISABLE, 1:ENABLE, デフォルト: 1 |
| `--iq=<0\|1>` | LoRa IQ モードを設定 | 0:STANDARD, 1:INVERTED, デフォルト: 0 |
| `--net=<0\|1>` | Public Network を設定 | 0:Private Network, 1:Public Network, デフォルト: 0 |

**例:** `lora_rx -f 868000000 -s 7 -b 0`  
周波数 868000000 Hz、SF7、帯域幅 125 kHz で通常の受信モードにて LoRa パケットを受信します。


**3. `lora_cw [-f <f>] [-p] [-o]`**

RF テストおよびスペクトラム測定用に連続波信号を送信します。

| 項目 | 説明 | データ |
|------|-------------|------------------|
| `-f, --freq=<f>` | 無線周波数を Hz 単位で設定 | 415000000 ~ 940000000 Hz, デフォルト: 868000000 |
| `-p, --power=<f>` | 無線出力を設定 | LPA: -17 ~ +14 dB, HPA: -9 ~ +22 dB, デフォルト: 10 |
| `-o, --ocp=<f>` | 電流制限ステップを設定 | 0 ~ 63, ステップ 2.5mA, デフォルト: 24 |

**例:** `lora_cw -f 868000000 -p 10 -o 24`  
RF テスト用に、868 MHz、送信電力 10 dB、OCP 電流制限 60 mA で連続波信号を送信します。


**4. `lora_fcc_fhss [-m <0|1>] [-s <6~12>] [-c <1|2|3|4>] [-p] [--crc=<0|1>] [--iq=<0|1>] [--net=<0|1>] [-i <t>] [-d <d>]`**

FCC 準拠および RF 認証テストのために、周波数ホッピングモードで LoRa パケットを送信します。

| 項目 | 説明 | データ |
|------|-------------|------------------|
| `-m, --mode=<0\|1>` | FHSS モードを設定 | 0: FHSS_125K_MODE, 1: FHSS_500K_MODE, デフォルト: 0 |
| `-s, --sf=<6~12>` | LoRa SF を設定 | 6 ~ 12, デフォルト: 10 |
| `-c, --cr=<1\|2\|3\|4>` | LoRa 符号化率を設定 | 1:CR_4/5, 2:CR_4/6, 3:CR_4/7, 4:CR_4/8, デフォルト: 1 |
| `-p, --power=<f>` | 無線出力を設定 | LPA: -17 ~ +14 dB, HPA: -9 ~ +22 dB, デフォルト: 10 |
| `--crc=<0\|1>` | LoRa CRC を設定 | 0:DISABLE, 1:ENABLE, デフォルト: 1 |
| `--iq=<0\|1>` | LoRa IQ モードを設定 | 0:STANDARD, 1:INVERTED, デフォルト: 0 |
| `--net=<0\|1>` | Public Network を設定 | 0:Private Network, 1:Public Network, デフォルト: 0 |
| `-i, --interval=<t>` | 送信間隔 (ms) を設定 | デフォルト: 0 |
| `-d, --txt=<d>` | 送信するテキストデータを設定 | デフォルト: hello seeed! 1234567 |

**例:** `lora_fcc_fhss -m 1 -s 10 -c 1 -p 14 --crc=1 --iq=0 --net=0 -i 1000 -d test`  
FHSS_500K_mode、SF10、符号化率 4/5、送信電力 14 dB、CRC 有効、標準 IQ モード、プライベートネットワークモードで FHSS LoRa パケットを送信し、1000 ms ごとに "test" ペイロードを送信します。


### GPIO コマンド

**1. `gpio [-p <0~48>] [-d <0|1>] [-v <0|1>]`**

入出力テストおよびハードウェア検証のために GPIO ピンを制御します。

| 項目 | 説明 | データ |
|------|-------------|------------------|
| `-p, --pin=<0~48>` | GPIO ピン番号 | 0 ~ 48, デフォルト: 0 |
| `-d, --direction=<0\|1>` | GPIO 方向を設定 | 0: INPUT, 1: OUTPUT, デフォルト: 1 |
| `-v, --value=<0\|1>` | GPIO 出力値を設定 | 0: LOW, 1: HIGH, デフォルト: 0 |

**例:** `gpio -p 10 -d 1 -v 1`  
GPIO 10 を出力モードに設定し、ピン出力を High レベルに駆動します。


### Flash コマンド

**1. `flash [-b <100~1000>]`**

ブロック操作を使用してフラッシュメモリの読み書き性能をテストします。

| 項目 | 説明 | データ |
|------|-------------|------------------|
| `-b, --block=<100~1000>` | 読み書きテストを実行するブロック数 | 100 ~ 1000, デフォルト: 100 |

**例:** `flash -b 500`  
500 ブロックのデータを使用してフラッシュメモリの読み書きテストを実行します。


### WiFi コマンド

**1. `ap_set <ssid> [<pass>] [-a <authmode>] [-n <channel>] [-m <max_conn>]`**

カスタム SSID、パスワード、認証タイプ、チャネル設定でデバイスを WiFi AP モードで動作するように構成します。

| 項目 | 説明 | データ |
|------|-------------|------|
| `<ssid>` | AP の SSID | 必須 |
| `<pass>` | AP のパスワード | 任意 |
| `-a, --authmode=<authmode>` | WiFi 認証タイプ | open / wep / wpa2 / wpa2_enterprise |
| `-n, --channel=<channel>` | WiFi チャネル | 任意 |
| `-m, --max_conn=<max_conn>` | 最大ステーション数 | デフォルト: 2 |

**例:** `ap_set MyAP 12345678 -a wpa2 -n 6 -m 4`  
チャネル 6 に最大 4 クライアント接続可能な "MyAP" という名前の WPA2 WiFi AP を作成します。


**2. `ap_query`**

現在の AP 設定を表示し、ステーションモードの接続を切断します。

**例:** `ap_query`


**3. `wifi <action> [--espnow_enc=<int>] [--storage=<str>]`**

WiFi 操作アクション。

| 項目 | 説明 | データ |
|------|-------------|------|
| `<action>` | WiFi 操作アクション | init / deinit / start / stop / restart / status |
| `--espnow_enc=<int>` | ESP-NOW 暗号化 | init / restart のみ |
| `--storage=<str>` | WiFi ストレージタイプ | flash / ram |

**例:** `wifi init --storage=flash`  
WiFi サブシステムを初期化し、設定をフラッシュメモリに保存します。


**4. `wifi_count [<action>]`**

WiFi カウント統計。

| 項目 | 説明 | データ |
|------|-------------|------|
| `<action>` | カウンタ操作 | query(デフォルト) / clear |

**例:** `wifi_count clear` : 現在の WiFi カウント統計をクリアします。


**5. `wifi_mode <mode>`**

WiFi モードを設定します。

| 項目 | 説明 | データ |
|------|-------------|------|
| `<mode>` | WiFi モード | ap / sta / apsta |

**例:** `wifi_mode apsta` : AP モードとステーションモードを同時に有効にします。


**6. `wifi_protocol [<protocol>] [--2g=<2g_proto>] [--5g=<5g_proto>] [-i <interface>]`**

選択したインターフェース（AP または STA）がサポートする WiFi プロトコルを設定します。

**2 つの設定方法があります**:
- `<protocol>`: `esp_wifi_set_protocol()` を使用して WiFi プロトコルを設定
- `--2g / --5g`: `esp_wifi_set_protocols()` を使用して 2.4 GHz 帯と 5 GHz 帯のプロトコルを個別に設定

**注意**:
- `esp_wifi_set_protocol()` と `esp_wifi_set_protocols()` は同時に使用できません。
- パラメータが指定されていない場合は、現在の WiFi プロトコル設定が表示されます。


| 項目 | 説明 | データ |
|------|-------------|------|
| `<protocol>` | esp_wifi_set_protocol() を使用して WiFi プロトコルを設定 | 例: b, b/g, b/g/n <br />g/n は無効です。 |
| `--2g=<2g_proto>` | esp_wifi_set_protocols() を使用して 2.4 GHz プロトコルを設定 | API: esp_wifi_set_protocols. <br />プロトコル文字列: 'lr', 'b', 'g', 'n', 'ax'<br />lr モードとの組み合わせ: 'lr/b', 'lr/g' など<br />プロトコルビットマップ値: 16 進数の生ビットマップ値、例: 0x40
 |
| `--5g=<5g_proto>` | 5 GHz プロトコルを設定 | --2g と同じ形式 |
| `-i, --interface=<interface>` | WiFi インターフェースを選択 | ap, sta, デフォルト: sta |

**例:** `wifi_protocol --2g=lr/b/g/n -i sta`  
STA インターフェースを、2.4 GHz 帯で LR、802.11b、802.11g、802.11n プロトコルをサポートするように設定します。


**7. `wifi_bandwidth [<cbw>] [--2g=<2g_cbw>] [--5g=<5g_cbw>] [-i <interface>]`**

WiFi 帯域幅を設定します。

**2 つの設定方法があります**:
- `<cbw>`: `esp_wifi_set_bandwidth()` を使用して帯域幅を設定
- `--2g / --5g`: `esp_wifi_set_bandwidths()` を使用して 2.4 GHz 帯と 5 GHz 帯の帯域幅を個別に設定

**注意**:
- `esp_wifi_set_bandwidth()` と `esp_wifi_set_bandwidths()` は同時に使用できません。
- パラメータが指定されていない場合は、現在の WiFi 帯域幅設定が表示されます。

| 項目 | 説明 | データ |
|------|-------------|------|
| `<cbw>` | esp_wifi_set_bandwidth() を使用した帯域幅 | 20, 40 |
| `--2g=<2g_cbw>` | esp_wifi_set_bandwidths() を使用した 2.4 GHz 帯域幅 | 20, 40 |
| `--5g=<5g_cbw>` | esp_wifi_set_bandwidths() を使用した 5 GHz 帯域幅 | 20, 40 |
| `-i, --interface=<interface>` | WiFi インターフェースを選択 | ap, sta, デフォルト: sta |

**例:** `wifi_bandwidth --2g=20 -i sta`  
2.4 GHz 帯を 20 MHz チャネル帯域幅で動作するように設定します。


**8. `wifi_ps <type>`**

WiFi 電源モードを設定します。このコマンドはデバイスの WiFi 省電力モードを構成します。モードによって、消費電力とネットワーク性能のバランスが異なります。

| 種類 | モード | レイテンシ | 説明 |
|------|------|---------|-------------|
| 0 | WIFI_PS_NONE | 最低 | 省電力なし、フルパフォーマンス |
| 1 | WIFI_PS_MIN_MODEM | 中 | 省電力と性能のバランス |
| 2 | WIFI_PS_MAX_MODEM | 最高 | 最大限の省電力、遅延が大きい |

**例：** `wifi_ps 1` : WiFi 省電力モードを最小モデム省電力に設定します。


**9. `wifi_country [<code>] [-s <int>] [-n <int>] [-p <str>]`**

WiFi の国設定を取得または設定します。このコマンドは、国ごとの規制に基づき、使用可能なチャネルや送信ルールを含む WiFi 規制ドメインを構成します。

| 項目 | 説明 | データ |
|------|-------------|------|
| `<code>` | 国コードの設定（指定しない場合は現在の国コードを取得） | CN / US / JP / など |
| `-s, --schan=<int>` | WiFi チャネルの開始番号 | 整数（例：1） |
| `-n, --nchan=<int>` | サポートされるチャネルの総数 | 整数（例：13） |
| `-p, --policy=<str>` | 国ポリシーモード | auto（デフォルト）/ manual |

**例：** `wifi_country CN -s 1 -n 13 -p auto`  
WiFi の国を CN に設定し、チャネル 1〜13 を有効にし、自動規制ポリシーを使用します。


**10. `sta_connect <ssid> [<pass>] [-b <bssid>] [-n <channel>] [-no-disconnect] [-no-reconnect] [-full-scan] [-failure_retry=<int>] [-5g-offset=<rssi_5g_offset>]`**

STA モードのデバイスを指定した WiFi アクセスポイントに接続します。
| 項目 | 説明 | データ |
| :--- | :--- | :--- |
| `<ssid>` | WiFi AP の SSID | 文字列（WiFi 名） |
| `<pass>` | AP のパスワード | 文字列（WiFi パスワード） |
| `-b, --bssid=<bssid>` | 特定の AP MAC アドレス | MAC アドレス (xx:xx:xx:xx:xx:xx) |
| `-n, --channel=<channel>` | AP の WiFi チャネル | 整数 |
| `--no-disconnect` | テスト用：接続前に `esp_wifi_disconnect` を実行しない | / |
| `--no-reconnect` | WiFi 切断ハンドラでの自動再接続を無効化 | / |
| `--full-scan` | STA 接続時に全チャネルスキャンを有効化 | / |
| `--failure_retry=<int>` | 接続失敗後の再試行回数 | 整数 |
| `--5g-offset=<rssi_5g_offset>` | フルスキャン接続時の 5G SSID 用オフセット値 | 整数 |

**例：** `sta_connect MyWiFi 12345678 -n 6 --failure_retry=3 --full-scan` : 
STA モードで指定した WiFi AP に接続し、オプションでスキャン、再試行、および接続動作を制御します。


**11. `sta_disconnect`**

現在接続中の WiFi AP からデバイスを切断するか、再接続を停止します。

**例：** `sta_disconnect`


**12. `sta_scan [-h] [<ssid>] [-b <bssid>] [-n <int>] [--max=<int>] [--min=<int>] [--passive] [--passive-time=<int>] [--dwell=<int>] [-2 <int/hex>] [-5 <int/hex>] [--count-only]`**

ステーションモードで利用可能な WiFi アクセスポイントをスキャンします。

| 項目 | 説明 | データ |
| :--- | :--- | :--- |
| `<ssid>` | WiFi AP の SSID | 文字列（WiFi 名） |
| `-b, --bssid=<bssid>` | AP の BSSID | MAC アドレス (xx:xx:xx:xx:xx:xx) |
| `-n, --channel=<int>` | AP のチャネル | 整数 |
| `-h, --show-hidden` | 隠し AP を表示 | / |
| `--max=<int>` | アクティブスキャンの最大時間 | 整数（ms） |
| `--min=<int>` | アクティブスキャンの最小時間 | 整数（ms） |
| `--passive` | スキャンタイプをパッシブに設定 | / |
| `--passive-time` | パッシブスキャン時間 | 整数（ms） |
| `--dwell=<int>` | ホームチャネルの滞在時間 | 整数（ms） |
| `-2, --bitmap-2g=<int/hex>` | 2.4GHz チャネルスキャンビットマップ | Hex/int（例：ch1/6/11 用 0x842） |
| `-5, --bitmap-5g=<int/hex>` | 5GHz チャネルスキャンビットマップ | Hex/int（例：ch36/40 用 0x6） |
| `--count-only` | テスト用：AP 数のみをスキャン | / |

**例：** `sta_scan -h --passive --passive-time=120 --dwell=30 -2 0x842 -5 0x6`  
隠し AP を表示しつつ、選択した 2.4GHz および 5GHz チャネルをパッシブモードでフルスキャンします。


**13. `wifi_txpower [-u <unit>] [--reset]`**

WiFi 送信電力を設定するか、デフォルトにリセットします。

| 項目 | 説明 |
|------|-------------|
| `-u, --unit` | TX 電力値。1 ユニット = 0.25 dBm（例：8 = 2 dBm） |
| `--reset` | TX 電力を SDK 設定のデフォルト値にリセット |

**例：** `wifi_txpower -u 8` : WiFi 送信電力を 2 dBm に設定します。


### ネットワークコマンド

**1. `ping [-W <timeout>] [-i <interval>] [-s <size>] [-c <count>] [-Q <n>] [host] [--abort]`**

ネットワークホストに ICMP ECHO_REQUEST パケットを送信します。

| 項目 | 説明 | データ |
| :--- | :--- | :--- |
| `-W, --timeout=<timeout>` | 応答を待機する時間 | 整数（秒） |
| `-i, --interval=<interval>` | パケット送信間隔 | 浮動小数/整数（秒） |
| `-s, --packetsize=<size>` | 送信するデータバイト数として `<size>` を使用 | 整数（バイト） |
| `-c, --count=<count>` | 送信するパケット数。`<count>` 回の応答後に停止 | 整数、デフォルト：5 |
| `-Q, --tos=<n>` | IP Type of Service フィールド値 | 整数 |
| `host` | 対象の IP アドレスまたはドメイン名 | 文字列 |
| `--abort` | 実行中の ping プロセスを停止 | ping 中止 -> esp_ping_stop |


**例：** `ping -c 4 8.8.8.8` : 8.8.8.8 に ICMP エコー要求を 4 回送信します。


**2. `iperf [-suV] [-c <host>] [-p <port>] [-l <length>] [-i <interval>] [-t <time>] [-b <bandwidth>] [-f <format>] [--abort]`**

TCP または UDP を使用して、スループット、帯域幅、レイテンシなどのネットワーク性能を測定します。

| 項目 | 説明 | データ |
| :--- | :--- | :--- |
| `-c, --client` | クライアントモードで実行し、サーバーに接続 | IP/ドメイン |
| `-s, --server` | サーバーモードで実行 | / |
| `-u, --udp` | TCP の代わりに UDP を使用 | / |
| `-V, --ipv6_domain` | IPv6 プロトコルを使用 | / |
| `-p, --port=<port>` | サーバーポート番号 | 整数 |
| `-l, --len=<length>` | 送信に使用するバッファ長 | 整数（バイト）、デフォルト：TCP=16384、IPv4 UDP=1470、IPv6 UDP=1450 |
| `-i, --interval=<interval>` | 帯域幅レポートの間隔（秒） | 浮動小数/整数（秒） |
| `-t, --time=<time>` | テスト時間 | 整数（秒）、デフォルト 10 秒 |
| `-b, --bandwidth=<bandwidth>` | 目標帯域幅 | Mbits/sec |
| `-f, --format=<format>` | 出力フォーマット | 文字列、k = Kbits/sec, m = Mbits/sec |
| `--abort` | 実行中の iperf テストを停止 | / |

**例：** `iperf -c 192.168.1.10 -t 10 -i 1`: 
サーバー 192.168.1.10 に対して 10 秒間の TCP 帯域幅テストを実行し、1 秒ごとに結果をレポートします。


### BLE コマンド

**1. `ble [-a <0|1>]`**

Bluetooth のテストおよび検出のために、BLE アドバタイジング状態を制御します。

| 項目 | 説明 | データ |
| :--- | :--- | :--- |
| `-a, --adv=<0\|1>` | BLE アドバタイジング制御 | 0: アドバタイジング停止, 1: アドバタイジング開始, デフォルト: 0 |

**例：** `ble -a 1` : デバイス検出のために BLE アドバタイジングモードを開始します。


### 電源モードコマンド

**1. `sleep [-m <0|1|2>]`**

低消費電力テストのためにデバイスのスリープモードを構成します。

| 項目 | 説明 | データ |
| :--- | :--- | :--- |
| `-m, --mode=<0\|1\|2>` | 低消費電力テストのためにデバイスのスリープモードを構成します。 | 0: 待機, 1: ライトスリープ, 2: ディープスリープ, デフォルト: 0 |

**例：** `sleep -m 2` : デバイスをディープスリープモードに切り替えます。


## 技術サポート & 製品ディスカッション

技術的な問題がある場合は、[forum](http://forum.seeedstudio.com/) に投稿してください。

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>