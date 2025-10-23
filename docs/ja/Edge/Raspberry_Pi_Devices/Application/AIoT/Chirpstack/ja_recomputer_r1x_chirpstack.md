---
description: Raspberry Pi搭載のreComputer R11でChirpStackを使用してLoRaWANゲートウェイを構築する方法を学びます。R1X00ゲートウェイ、Packet Forwarder、SenseCAP S2101センサーを設定してMQTT経由でIoTデータをストリーミングします。世界中のどこからでもLoRaデバイスとアプリケーションに安全にアクセスできます。

title: ChirpStack R1XゲートウェイとSenseCAP S2101の統合

keywords:
- ChripStack
- LoRa-WAN
- Raspberry-Pi 
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /ja/chirpstack_lora_gateway_r1x00
last_update:
  date: 9/18/2025
  author: Kasun Thushara
---

## はじめに

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/overall.jpg" alt="pir" width={700} height="auto" /></p>

このガイドでは、Raspberry Piを搭載したSeeed reComputer R11エッジコントローラーでChirpStackを使用した完全なLoRaWANゲートウェイソリューションのセットアップ方法を説明します。WM1302 LoRaコンセントレーターモジュールにより、R1Xデバイスは信頼性の高い長距離無線通信が可能な強力なゲートウェイとして機能します。Semtech Packet Forwarderを設定することで、LoRaデータをネットワーク層とアプリケーション層を管理するChirpStackにシームレスに送信できます。Dockerを使用してChirpStackサービスのインストールとデプロイメントを簡素化し、モジュラーでスケーラブルなセットアップを確保します。最後に、システムはMQTTと統合され、SenseCAP S2101センサーなどのLoRaデバイスから世界中のどこからでもアクセス可能なアプリケーションへの安全でリアルタイムなIoTデータストリーミングを可能にします。

## 必要なハードウェア

<table align="center">
  <tr>
      <th>reComputer R1X</th>
        <th>WM1302 LoRaWANゲートウェイモジュール</th>
        <th>SenseCAP S2101</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/wm1302.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/s210x.png" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

## Dockerインストールガイド

**1. システムパッケージの更新**

```bash
sudo apt update
sudo apt upgrade
```

**2. Dockerのインストール**

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

**3. ユーザーをDockerグループに追加**

```bash
sudo usermod -aG docker ${USER}
```

**4. システムの再起動**

```bash
sudo reboot
```

**5. インストールの確認**

```bash
docker run hello-world
```

**6. Docker Composeのインストール**

```bash
sudo apt install docker-compose
```

## Packet Forwarderの実行

**WM1302 LoRaコンセントレーター**は、LoRaモジュールとChirpStack間でデータを中継するために**Semtech Packet Forwarder**が必要です。reComputer R11はLoRaモジュール用の事前構築されたセットアップガイドを提供しています。

インストール手順については、公式Seeed Wikiを参照してください：
[Seeed reComputer R11 LoRaモジュールガイド](https://wiki.seeedstudio.com/ja/recomputer_r/#lora-module)

インストール後、以下の手順に従ってPacket Forwarderを設定して実行します。

**1. 設定の変更**

LoRa地域に対応する設定ファイルを開きます。例えば、**US915**の場合：

```bash
nano global_conf.json.sx1250.US915
```

**gateway_conf**セクションを更新してChirpStackサーバーを指すようにします：

```json
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* change with default server address/ports */
    "server_address": "localhost",
    "serv_port_up": 1700,
    "serv_port_down": 1700
}
```

> `AA555A0000000000`を実際のゲートウェイIDに置き換えてください。そのままにしておきます
> 購入したモジュールに応じて、LoRaWAN地域に適したJSONファイルを使用してください。

ファイルを保存して終了します：

- **CTRL + X**を押し、
- 次に**Y**を押し、
- 最後に**Enter**を押します。

**2. Packet Forwarderの開始**

更新された設定を使用してPacket Forwarderを実行します：

```bash
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

## ゲートウェイの開始

docker Composeファイルをダウンロードするには、reComputerでこのページにアクセスしてダウンロードする必要があります。[リンク](https://www.chirpstack.io/docs/getting-started/docker.html)

次に、yamlファイルの設定に応じて周波数帯域を変更します

```yml
 chirpstack-gateway-bridge:
    image: chirpstack/chirpstack-gateway-bridge:4
    restart: unless-stopped
    ports:
      - "1700:1700/udp"
    volumes:
      - ./configuration/chirpstack-gateway-bridge:/etc/chirpstack-gateway-bridge
    environment:
      - INTEGRATION__MQTT__EVENT_TOPIC_TEMPLATE=us915_0/gateway/{{ .GatewayID }}/event/{{ .EventType }}
      - INTEGRATION__MQTT__STATE_TOPIC_TEMPLATE=us915_0/gateway/{{ .GatewayID }}/state/{{ .StateType }}
      - INTEGRATION__MQTT__COMMAND_TOPIC_TEMPLATE=us915_0/gateway/{{ .GatewayID }}/command/#
    depends_on:
      - mosquitto

```

ChirpStackをインストールした後、**R11 LoRaゲートウェイ**を登録してデータ処理を開始できます。

**ChirpStackサービスの開始**

まだ実行されていない場合は、すべてのChirpStackサービスを起動します：

```bash
sudo docker-compose up -d
```

コンテナが実行されていることを確認します：

```bash
sudo docker ps
```

---

**ChirpStack Web UIへのアクセス**

1. Webブラウザを開いて以下にアクセスします：

```
http://localhost:8080/
```

2. デフォルトの認証情報でログインします：

```
Username: admin
Password: admin
```

---

## ゲートウェイの追加

1. ChirpStack UIで、**Gateways → Create Gateway**に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image1.png" alt="pir" width={800} height="auto" /></p>

2. 以下の詳細を入力します：

   - **Gateway ID**: `AA555A0000000000`（実際のゲートウェイIDに置き換えてください）
   - **Name**: ゲートウェイの説明的な名前を付けます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image2.png" alt="pir" width={800} height="auto" /></p>

3. **Create Gateway**をクリックして登録します。

4. この後、ChirpStack UIでゲートウェイを表示できるようになります

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image3.png" alt="pir" width={800} height="auto" /></p>

## デバイスプロファイルの追加

LoRaWANデバイス（例：**SenseCAP S2101**）をChirpStackに接続するには、まず**デバイスプロファイル**を作成する必要があります。

1. **Device Profiles → Create Device Profile**に移動します

2. 以下の詳細を入力します：

   - **Name**: デバイスプロファイルの説明的な名前を付けます
   - **Region**: デバイスとゲートウェイに一致する地域/サブバンドを選択します（例：`US915`）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image4.png" alt="pir" width={800} height="auto" /></p>

3. **Codec**タブに移動します：

   - **JavaScript Functions**を選択します
   - デバイス用のコーデックを貼り付けます

> ⚠️ コーデックはLoRaデバイス固有です。例えば、**Seeed S201x**を使用している場合は、以下のコードを使用できます。
> 異なるデバイスを使用している場合は、正しいコーデックについてメーカーに相談してください。

4. **Uplink/Downlink Codec**セクションにコーデックをコピー＆ペーストし、プロファイルを保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image5.png" alt="pir" width={800} height="auto" /></p>  

<details>
<summary>.js</summary>

```javascript

function decodeUplink(input) {
    return Decode(input.fPort, input.bytes, input.variables);
}

function Decode(fPort, bytes, variables) {
    var bytesString = bytes2HexString(bytes).toLocaleUpperCase();
    var fport = parseInt(fPort);
    var decoded = {
        valid: true,
        err: 0,
        payload: bytesString,
        messages: []
    };

    // CRC check
    if (!crc16Check(bytesString)) {
        decoded['valid'] = false;
        decoded['err'] = -1; // "crc check fail."
        return { data: decoded };
    }

    // Length Check
    if ((bytesString.length / 2 - 2) % 7 !== 0) {
        decoded['valid'] = false;
        decoded['err'] = -2; // "length check fail."
        return { data: decoded };
    }

    // Cache sensor id
    var sensorEuiLowBytes;
    var sensorEuiHighBytes;

    // Handle each frame
    var frameArray = divideBy7Bytes(bytesString);
    for (var forFrame = 0; forFrame < frameArray.length; forFrame++) {
        var frame = frameArray[forFrame];
        var channel = strTo10SysNub(frame.substring(0, 2));
        var dataID = strTo10SysNub(frame.substring(2, 6));
        var dataValue = frame.substring(6, 14);
        var realDataValue = isSpecialDataId(dataID) ? ttnDataSpecialFormat(dataID, dataValue) : ttnDataFormat(dataValue);

        if (checkDataIdIsMeasureUpload(dataID)) {
            decoded.messages.push({
                type: 'report_telemetry',
                measurementId: dataID,
                measurementValue: realDataValue
            });
        } else if (isSpecialDataId(dataID) || dataID === 5 || dataID === 6) {
            switch (dataID) {
                case 0x00: // node version
                    var versionData = sensorAttrForVersion(realDataValue);
                    decoded.messages.push({
                        type: 'upload_version',
                        hardwareVersion: versionData.ver_hardware,
                        softwareVersion: versionData.ver_software
                    });
                    break;
                case 1: // sensor version
                    break;
                case 2: // sensor eui low
                    sensorEuiLowBytes = realDataValue;
                    break;
                case 3: // sensor eui high
                    sensorEuiHighBytes = realDataValue;
                    break;
                case 7: // battery + interval
                    decoded.messages.push({
                        type: 'upload_battery',
                        battery: realDataValue.power
                    }, {
                        type: 'upload_interval',
                        interval: parseInt(realDataValue.interval) * 60
                    });
                    break;
                case 9:
                    decoded.messages.push({
                        type: 'model_info',
                        detectionType: realDataValue.detectionType,
                        modelId: realDataValue.modelId,
                        modelVer: realDataValue.modelVer
                    });
                    break;
                case 0x120: // remove sensor
                    decoded.messages.push({
                        type: 'report_remove_sensor',
                        channel: 1
                    });
                    break;
                default:
                    break;
            }
        } else {
            decoded.messages.push({
                type: 'unknown_message',
                dataID: dataID,
                dataValue: dataValue
            });
        }
    }

    if (sensorEuiHighBytes && sensorEuiLowBytes) {
        decoded.messages.unshift({
            type: 'upload_sensor_id',
            channel: 1,
            sensorId: (sensorEuiHighBytes + sensorEuiLowBytes).toUpperCase()
        });
    }

    return { data: decoded };
}

// ---------- Utils ----------
function crc16Check(data) {
    return true;
}

function bytes2HexString(arrBytes) {
    var str = '';
    for (var i = 0; i < arrBytes.length; i++) {
        var num = arrBytes[i];
        var tmp = (num < 0 ? (255 + num + 1) : num).toString(16);
        if (tmp.length === 1) tmp = '0' + tmp;
        str += tmp;
    }
    return str;
}

function divideBy7Bytes(str) {
    var frameArray = [];
    for (var i = 0; i < str.length - 4; i += 14) {
        frameArray.push(str.substring(i, i + 14));
    }
    return frameArray;
}

function littleEndianTransform(data) {
    var arr = [];
    for (var i = 0; i < data.length; i += 2) {
        arr.push(data.substring(i, i + 2));
    }
    return arr.reverse();
}

function strTo10SysNub(str) {
    var arr = littleEndianTransform(str);
    return parseInt(arr.join(''), 16);
}

function checkDataIdIsMeasureUpload(dataId) {
    return parseInt(dataId) > 4096;
}

function isSpecialDataId(dataID) {
    switch (dataID) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 7:
        case 9:
        case 0x120:
            return true;
        default:
            return false;
    }
}

function ttnDataSpecialFormat(dataId, str) {
    var strReverse = littleEndianTransform(str);
    if (dataId === 2 || dataId === 3) {
        return strReverse.join('');
    }

    var str2 = toBinary(strReverse);
    var arr = [];
    switch (dataId) {
        case 0: case 1: // versions
            for (var k = 0; k < str2.length; k += 16) {
                var tmp = str2.substring(k, k + 16);
                tmp = (parseInt(tmp.substring(0, 8), 2) || 0) + '.' + (parseInt(tmp.substring(8, 16), 2) || 0);
                arr.push(tmp);
            }
            return arr.join(',');
        case 4:
            for (var i = 0; i < str2.length; i += 8) {
                var item = parseInt(str2.substring(i, i + 8), 2);
                arr.push(item < 10 ? '0' + item : item.toString());
            }
            return arr.join('');
        case 7:
            return {
                interval: parseInt(str2.substr(0, 16), 2),
                power: parseInt(str2.substr(-16, 16), 2)
            };
        case 9:
            return {
                detectionType: parseInt(str2.substring(0, 8), 2),
                modelId: parseInt(str2.substring(8, 16), 2),
                modelVer: parseInt(str2.substring(16, 24), 2)
            };
    }
}

function ttnDataFormat(str) {
    var strReverse = littleEndianTransform(str);
    var str2 = toBinary(strReverse);
    if (str2[0] === '1') {
        var arr = str2.split('').map(b => b === '1' ? 0 : 1);
        var val = parseInt(arr.join(''), 2) + 1;
        return parseFloat('-' + val / 1000);
    }
    return parseInt(str2, 2) / 1000;
}

function sensorAttrForVersion(dataValue) {
    var arr = dataValue.split(',');
    return { ver_hardware: arr[0], ver_software: arr[1] };
}

function toBinary(arr) {
    return arr.map(item => {
        var bin = parseInt(item, 16).toString(2).padStart(8, '0');
        return bin;
    }).join('');
}

```

</details>

## デバイスの追加

**Device Profile** が作成されたら、ChirpStack に LoRaWAN デバイスを登録できます。

1. **Tenant → Application** に移動し、**Add Application** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image6.png" alt="pir" width={800} height="auto" /></p>  

2. アプリケーションの **Name** を入力して保存します
3. 新しく作成したアプリケーションを開き、**Add Device** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image7.png" alt="pir" width={800} height="auto" /></p>

4. 以下の詳細を入力します：

   - **Device EUI**: LoRa デバイスの EUI を貼り付けます（デバイスのデータシートまたは設定ソフトウェア（例：SenseCAP アプリケーション）で確認できます）
   - **Device Profile**: 先ほど作成したデバイスプロファイルを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image8.png" alt="pir" width={800} height="auto" /></p>

5. **Application Key** を入力し、**Submit** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image9.png" alt="pir" width={800} height="auto" /></p>

## デバイスステータスの確認

LoRaWAN デバイスを追加した後、デバイスが正しく接続され、データを送信していることを確認できます。

1. アプリケーションに移動し、追加したデバイスを選択します
2. **Events** タブに移動します

   - デバイスがネットワークに正常に参加すると、**join packet** が表示されます

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image10.png" alt="pir" width={800} height="auto" /></p>

3. パケットをクリックして**詳細情報**を表示します

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image11.png" alt="pir" width={500} height="auto" /></p>

- 例えば、SenseCAP S2101 などのデバイスから報告される**温度と湿度のデータ**を確認できます

## MQTT 統合

ChirpStack は **MQTT** を使用して LoRaWAN デバイスからアプリケーションやダッシュボードにデータをストリーミングします。これらのメッセージをリアルタイムで監視できます。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image12.png" alt="pir" width={800} height="auto" /></p>

1. PC を reComputer R11 ゲートウェイと**同じネットワーク**に接続します
2. **MQTT Explorer** などの MQTT クライアントを使用してトピックを購読します
3. MQTT クライアントを設定します：

   - **Host**: reComputer R11 の IP アドレス
   - **Port**: `1883`
4. 接続すると、デバイスを表す**トピックのツリー**が表示されます。例：

```
application/c853ffcd-53f0-4de3-83b9-5467ff895f76/device/2cf7f1c043500402/event/up
```

5. トピックを展開すると、SenseCAP S2101 などのデバイスの温度や湿度などのセンサーデータを含む**アップリンクメッセージ**が表示されます

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image13.png" alt="pir" width={800} height="auto" /></p>

## Node-RED 統合

MQTT ノードとカスタム関数を使用して、**Node-RED** で LoRaWAN デバイスデータを可視化できます。

1. **Node-RED** を開き、**MQTT IN** ノードをフローにドラッグします

2. MQTT ノードを設定します：

   - **Server**: reComputer R11 の IP（例：`10.0.0.208`）
   - **Port**: `1883`
   - **Topic**: `application/+/device/+/event/up`

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image15.png" alt="pir" width={600} height="auto" /></p>

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image14.png" alt="pir" width={600} height="auto" /></p>

3. MQTT メッセージペイロードをデコードするために **Function node** を追加します

   - 例えば、JSON オブジェクトから**温度**と**湿度**を抽出します

```javascript
   // Get the JSON payload
let data = msg.payload;

if (typeof data === "string") {
    try {
        data = JSON.parse(data);
    } catch (e) {
        node.error("Invalid JSON", msg);
        return [null, null];
    }
}

// Check if "object" and "messages" exist
if (!data.object || !Array.isArray(data.object.messages)) {
    node.warn("No messages found in payload");
    return [null, null];
}

// Find the two measurements
let tempMsg = null;
let humMsg = null;

data.object.messages.forEach(m => {
    if (m.type === "report_telemetry") {
        if (m.measurementId === 4097) {
            tempMsg = { topic: "temperature", payload: m.measurementValue };
        } else if (m.measurementId === 4098) {
            humMsg = { topic: "humidity", payload: m.measurementValue };
        }
    }
});

// Return 2 outputs: [temperature, humidity]
return [tempMsg, humMsg];
```

4. Function ノードから**2つの出力ノード**を接続します。1つは温度用、もう1つは湿度用です

5. 各出力を **Gauge node** または Node-RED の他の可視化ノードに接続して、センサーの読み取り値を表示します

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image16.png" alt="pir" width={600} height="auto" /></p>
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image17.png" alt="pir" width={600} height="auto" /></p>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験を可能な限りスムーズにするため、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
