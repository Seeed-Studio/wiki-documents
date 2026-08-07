---
description: reCamera と Meshtastic を使って長距離セキュリティシステムを構築し、LoRa メッシュネットワーク経由で AI 検知アラートをワイヤレスで Home Assistant にプッシュします
title: reCamera と Meshtastic を用いた長距離セキュリティシステムの構築
keywords:
  - エッジ AI
  - reCamera
  - Meshtastic
  - LoRa
  - Home Assistant
image: https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/demo_show.gif
slug: /recamera_meshtastic_ha_security_system
sku: 100029708
sidebar_position: 13
last_update:
  date: 06/29/2026
  author: Sizhao Zhou
createdAt: '2026-06-29'
updatedAt: '2026-06-30'
url: https://wiki.seeedstudio.com/ja/reCamera/reCamera_Basic/application/recamera_meshtastic_ha_security_system/
---

# reCamera と Meshtastic を用いた長距離セキュリティシステムの構築  

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/demo_show.gif" /></div>  

## 1. はじめに  

WiFi や携帯電話ネットワークの圏外である荒野や大規模農場、遠隔の山間部で、どのようにインテリジェントなセキュリティ監視を実現すればよいでしょうか？  

このチュートリアルでは、非常にギークな「ネットワーク不要のセキュリティ」ソリューションを提供します。つまり、**reCamera PoE** の強力なエッジ AI 計算能力を活用してリアルタイムの人物検知を行います。ターゲットを検知すると、基板上のハードウェアピンを介して即座に **XIAO ESP32S3 + Wio-SX1262 モジュール（送信機）** をトリガーします。アラート信号は低周波の電波に変換され、数キロメートルにわたる複雑な地形を伝搬して屋内の **Wio-SX1262 受信機** に捕捉され、ローカルの **Home Assistant (HA)** システムへプッシュされる MQTT メッセージへとシームレスに変換されます。  

この一連の経路にはクラウドサーバーが一切不要であり、プライバシー、低消費電力、超長距離通信を高い次元で両立できます。  

### システム通信アーキテクチャ  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/system_framework.png" /></div>  

全体のデータフローは次のとおりです。  

- reCamera PoE 上で YOLO 人物検知モデルを実行し、人を検知すると GPIO ピンから Low レベル信号を出力する  
- XIAO ESP32S3（送信機）が D2 ピンで Low レベルのトリガーを検出し、Wio-SX1262 を介して LoRa 無線パケットを送信する  
- XIAO ESP32S3（受信機）が Wio-SX1262 経由で LoRa パケットを受信し、WiFi を通じて MQTT プロトコルで Home Assistant にプッシュする  
- Home Assistant が MQTT メッセージを受信し、自動アラート（通知や他のスマートデバイスとの連携など）をトリガーする  

---  

## 2. ハードウェアの準備  

<table align="center">
 <tr>
  <th>XIAO ESP32S3 & Wio-SX1262 キット</th>
  <th>reCamera PoE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
   </a>
  </div></td>
  <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
   </a>
  </div></td>
 </tr>
</table>  

- XIAO ESP32S3 & Wio-SX1262 キット：2 セット（1 セットは LoRa 送信機用、もう 1 セットは LoRa 受信機用）  
- ローカルスマートホスト：1 台。Home Assistant と MQTT Broker を実行するために使用（HA を実行できる小型ホストであれば何でも可）  
- デュポン延長ケーブル：数本。reCamera の GPIO と XIAO ESP32S3 間の物理信号配線に使用  

---  

## 3. Meshtastic ネットワークの設定  

2 台の XIAO ESP32S3 間で長距離 LoRa 通信を実現するために、両方に **Meshtastic** オープンソースファームウェアを書き込む必要があります。  

### 3.1 ファームウェアの書き込みと基本 RF 同期（受信機・送信機の両方に必須）  

**Step 1**: XIAO ESP32S3 を USB-C データケーブルで PC に接続します。  

:::note Note  
書き込み前に、ESP32 を Bootloader ダウンロードモードにします。操作方法：BOOT ボタンを押し続けたまま RESET ボタンを 1 回押し、その後 BOOT ボタンを離します。  
:::  

**Step 2**: [Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスし、デバイスタイプとして `Seeed Xiao ESP32-S3` を選択し、**Full Erase** にチェックを入れてから **Flash** をクリックしてファームウェアを書き込みます。  

**Step 3**: ファームウェア書き込み後、[Meshtastic Web Client](https://client.meshtastic.org/) にアクセスし、**Add Connection** をクリックして新しいデバイスを追加し、接続方法として **Serial** を選択して対応するシリアルデバイスを選び、**Connect** をクリックします。  

**Step 4**: **Settings → Radio Config → LoRa** に移動し、`Region` をお住まいの地域で合法な周波数帯（例：`CN` や `US`）に設定し、`Modem Preset` を応答速度向上のため **`Short Turbo`** に設定します。  

### 3.2 受信機の設定（屋内に設置し HA に接続）  

受信機は LoRa パケットを受信し、WiFi 経由で MQTT を用いて Home Assistant にプッシュする役割を担います。  

**Step 1 — キーの生成と保存**: **Channels** タブで、Primary チャンネル用に 128-bit の `Pre-Shared Key` を生成します。  

:::note Note  
必ずこのキーをオフラインでコピーして保存してください。後で送信機側に入力する必要があり、両端のキーは完全に一致していなければなりません。  
:::  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/reCamera_Meshtastic_password.png" /></div>  

**Step 2 — ローカルネットワークへの接続**: **Device Config → Network** で WiFi を有効にし、自宅の WiFi SSID とパスワードを入力します。  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_connect_wifi.png" /></div>  

**Step 3 — MQTT 転送の有効化**: **Module Config → MQTT** で `Enable MQTT Client` にチェックを入れ、`JSON Enabled` を有効にし、`Address` には HA ホストのローカル IP アドレスを正確に入力します（例：`192.168.4.7`）。  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_mqtt_config.png" /></div>  

**Step 4**: すべての設定が完了したら、右上の **Save** をクリックして保存し、デバイスの再起動を待ちます。  

### 3.3 送信機の設定（屋外に設置し reCamera に接続）  

送信機は GPIO ピンのレベル変化を監視し、Low レベルを検出した際に LoRa アラートパケットを送信する役割を担います。  

:::note Note  
送信機側では WiFi と MQTT を**有効にしないでください**。GPIO トリガーの受信と LoRa 無線信号の送信のみに専念させます。  
:::  

**Step 1**: 受信機側の ESP32 を取り外し、送信機用の ESP32 に差し替え、Meshtastic Web Client で **Connect** をクリックしてそのまま接続します。  

**Step 2 — RF パラメータの同期**: **Radio Config → LoRa** に移動し、受信機側と同一であることを確認します（Region と Modem Preset が完全に同じ）。MQTT を有効にする必要はありません。  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_shut_lora_config.png" /></div>  

**Step 3 — Pre-Shared Key の入力**: **Channels** タブで、受信機側で生成した `Pre-Shared Key` を完全に貼り付けます。  

**Step 4 — GPIO ハードウェアトリガーの設定**: **Module Config → Detection Sensor** でモジュールを有効化し、以下のパラメータで設定します。  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_shut_detect_config.png" /></div>  

| パラメータ | 設定値 | 説明 |
| :--- | :--- | :--- |
| Minimum Broadcast Seconds | 15 | 頻繁なトリガーによるチャネル輻輳を防ぐための最小送信間隔 |
| Friendly Name | Human | カスタムアラート名。MQTT メッセージの識別子として使用される |
| Monitor Pin | 3 | XIAO ESP32S3 の D2 ピンに対応 |
| Detection Triggered Type | LOGIC_LOW | Low レベルトリガー（reCamera は人物検知時に Low レベルを出力） |  

**Step 5**: 右上の **Save** をクリックして保存し、デバイスの再起動を待ちます。  

---  

## 4. reCamera エンドポイントの設定と物理配線  

### 4.1 システムリソースの解放  

デフォルトでは、reCamera の Node-RED と SSCMA バックグラウンドサービスがカメラリソースを占有しています。SSH 経由で reCamera にログインし（デフォルト IP は `192.168.42.1`、ユーザー名とパスワードはいずれも `recamera`）、ターミナルで次のコマンドを実行してバックグラウンドサービスを停止します。  

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```  

### 4.2 映像ストリーム転送スクリプトの起動  

:::note Note  
スクリプトを実行するホストは、**同一ローカルネットワーク** 上で reCamera PoE と接続されている必要があります。reCamera PoE バージョンは、同じルーターまたはスイッチに接続して IP アドレスを取得していれば十分です。  
:::  

監視用ホスト（映像ストリームを受信するために使用するホスト）上で Python スクリプトを実行し、reCamera からプッシュされる映像フレームを受信します。  

```bash
python udp_client.py
```  

### 4.3 人物検知プログラムの起動  

reCamera のターミナルで次のコマンドを実行し、オンボードの YOLO 人物検知モデルを起動します。最初の引数はモデルファイルのパス（reCamera 付属のモデルをそのまま使用可能）、2 つ目の引数は映像ストリーム転送スクリプトを実行しているホストの IP アドレスです。  

```bash
sudo ./model_detector ./Models/model.cvimodel 192.168.4.7
```  

### 4.4 ESP32 送信機と reCamera の接続  

上記のソフトウェア設定が完了したら、デュポンケーブルを使用して XIAO ESP32S3（送信機）と reCamera を物理的に接続します。  

- 黒ケーブル：ESP32 の **GND** ピン → reCamera の **GND** ピン  
- 緑ケーブル：ESP32 の **D2** ピン → reCamera の GPIO 信号出力ピン  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/reCamera_xiao_connect_line.png" /></div>  

:::note Note  
LoRa モジュールの送信電力を十分に確保するため、ESP32 送信機には（USB ケーブルまたはバッテリー経由で）別途電源を供給してください。  
:::  

---  

## 5. Home Assistant でアラートを受信する  

### 5.1 受信機が正常に動作していることを確認する  

開始する前に、受信機側の ESP32 の電源がオンになっており動作していること、HA ホストと同じ WiFi ネットワークに接続されていること、そして MQTT アドレスが正しく設定されていることを確認してください。  

### 5.2 HA で MQTT メッセージをリッスンする  

ブラウザを開き、Home Assistant の IP アドレスを入力して **MQTT 管理インターフェース** にアクセスします。設定で **Listen to all** オプションを有効にします。  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/ha_show_result.png" /></div>  

reCamera が人を検知すると、Meshtastic 送信機が LoRa 経由でアラート情報を受信機に送信し、受信機は `Human`（送信機側で設定した Friendly Name）を含むメッセージを MQTT 経由で HA にプッシュします。MQTT リッスンインターフェース上で、リアルタイムにアラートメッセージを確認できます：  

```json
{
  "payload": {
    "text":"Human detect"
  }
}
```  

### 5.3 HA で自動アラートを設定する  

Home Assistant でオートメーションルールを作成し、MQTT メッセージ内の `payload.text` が `Human detect` のときに、モバイル通知、アラームとの連動、ログ記録などのアラートアクションをトリガーするように設定します。これにより、全体の「ネットワーク不要セキュリティ」システムのクローズドループが完成します。  

---  

## 6. 注意事項  

- 送信機と受信機の LoRa `Region` と `Modem Preset` は完全に同一である必要があります。一致していない場合、通信は失敗します  
- 送信機と受信機の `Pre-Shared Key` は同一である必要があります。そうでないと、パケットを正しく復号できません  
- `Minimum Broadcast Seconds` を短くしすぎると LoRa チャネルの輻輳を引き起こす可能性があります。15 秒以上に保つことを推奨します  
- reCamera の GPIO ピンは 3.3V レベルであり、XIAO ESP32S3 の D2 ピンレベルと互換性があるため、レベル変換は不要です  
- 送信機は、可能な限り開けた高い位置に設置して、最良の LoRa 通信距離を確保してください  

---  

## 7. よくある質問  

### Q1: 受信機と送信機が通信できない場合はどうすればよいですか？  

両端の LoRa `Region` と `Modem Preset` が完全に同一であるか、`Pre-Shared Key` が一致しているかを確認してください。加えて、2 台のデバイス間の距離が有効な LoRa 通信範囲内であること、およびアンテナが正しく取り付けられていることを確認してください。  

### Q2: reCamera が人を検知しているのに、HA がアラートを受信しない場合は？  

次の順序で切り分けを行ってください：reCamera の GPIO 信号出力が正常かどうか（テスターで測定可能）、送信機側の Detection Sensor モジュールの Monitor Pin が 3（D2）に正しく設定されているか、受信機の WiFi および MQTT 設定が正しいか、MQTT Address に HA ホストの IP が入力されているか。  

### Q3: Meshtastic 受信機が WiFi と MQTT に正常に接続されていることを確認するには？  

Meshtastic Web Client で受信機のデバイスステータスパネルを確認し、WiFi ステータスが Connected、MQTT ステータスが Connected になっていることを確認してください。  

---  

## 8. リソース  

- [reCamera クイックスタートガイド](https://wiki.seeedstudio.com/ja/recamera_getting_started/)  
- [Meshtastic 公式ドキュメント](https://meshtastic.org/docs/)  
- [Meshtastic Web Flasher](https://flasher.meshtastic.org/)  
- [reCamera OS GitHub](https://github.com/Seeed-Studio/reCamera-OS)  
- [XIAO ESP32S3 Wiki](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/)  

---  

## テクニカルサポートと製品ディスカッション  

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなレベルのサポートを提供しています。また、異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。  

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>  

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>