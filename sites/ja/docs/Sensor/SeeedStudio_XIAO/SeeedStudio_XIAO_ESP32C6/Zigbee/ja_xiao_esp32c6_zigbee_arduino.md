---
description: このチュートリアルでは、XIAO ESP32C6開発ボードを使用してZigbeeアプリケーション開発の旅に出ます。XIAO ESP32C6は、Wi-FiとBluetooth Low Energy（BLE）接続を統合したESP32-C6チップを搭載したコンパクトながら強力なボードです。ESP Zigbee SDKを活用することで、XIAO ESP32C6の全ポテンシャルを引き出し、Zigbee機能を含むように機能を拡張できます。
title: XIAO ESP32C6 Zigbee クイックスタートガイド（Arduino）
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee/3.webp
slug: /ja/xiao_esp32c6_zigbee_arduino
last_update:
  date: 11/25/2024
  author: Spencer
---

## 概要

このチュートリアルでは、Seeed Studio **XIAO ESP32C6**開発ボードで[Zigbee](https://en.wikipedia.org/wiki/Zigbee)アプリケーションを実装する方法をガイドします。ESP32-C6チップを搭載したこのボードは、**Wi-Fi**、**Bluetooth Low Energy（BLE）**、**Zigbee**接続を組み合わせており、**IoTアプリケーション**に最適です。このガイドの例では、**esp-arduino Zigbee SDK**を使用してZigbee機能を実現します。

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/0.png"
    style={{ width: 680, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

### 学習内容

:::note 前提条件：Arduino開発環境のセットアップ

Arduino IDEの準備がまだの場合は、**[入門ガイド](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/#software-preparation)**を参照してください。**esp-arduinoボードバージョン**が**v3.0.6以降**であることを確認してください。これによりZigbee機能がサポートされます。

:::

このガイドでは、XIAO ESP32C6でZigbeeを使用する基本事項に焦点を当て、実用的なアプリケーションの明確な理解を確実にします：

1. [Zigbee概要](#zigbee_overview)：Zigbeeプロトコルとそのネットワーク構造を理解する。
2. [Zigbee Arduinoサンプル](#examples)：ESP32-C6で電球やスイッチなどのZigbeeサンプルを実装する。

## Zigbee概要 {#zigbee_overview}

Zigbeeは、IEEE 802.15.4標準に基づく**低消費電力**、**低帯域幅**のワイヤレス通信プロトコルです。**ホームオートメーション**、**スマートシティ**、**産業制御**などのIoTシナリオに特化しており、動的環境での信頼性の高い通信のための堅牢なメッシュネットワーク機能を提供します。

### Zigbeeデータモデル

Zigbee通信は**Zigbee Cluster Library（ZCL）**に依存しており、これはデバイスがその機能をどのように整理し、相互作用するかを定義します。主要コンポーネントには以下が含まれます：

1. **デバイスタイプ**
    Zigbeeデバイス（例：スイッチ、センサー、ライト）は特定の動作で事前定義され、機能的な**クラスター**にグループ化されます。

2. **クラスター**
    クラスターは以下の論理的なグループです：

   - **属性**：明度や温度などのデバイス状態を表します。
   - **コマンド**：ライトをオンにしたり明度を50%に設定するなどのアクションをトリガーします。

   例：

   - **On/Offクラスター**：電源などのバイナリ状態を制御します。
   - **レベル制御クラスター**：強度や明度を調整します。
   - **温度測定クラスター**：温度読み取り値を送信します。
   - **シーンクラスター**：プリセット設定を保存・呼び出しします。

3. **属性とコマンド**
    属性はデバイスデータ（例：状態、設定）を格納し、コマンドはアクションを開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Zigbeeネットワークアーキテクチャ

Zigbeeネットワークは3つの主要なノードタイプで構成されます：

1. **Zigbeeコーディネーター（ZC）**  
   - ネットワークの中央ハブとして機能します。  
   - ネットワーク作成、デバイス認証、アドレス割り当てを処理します。  
   - ネットワークの初期化と管理を担当します。  
   - 各Zigbeeネットワークには**1つのコーディネーター**のみ存在できます。  

2. **Zigbeeルーター（ZR）**  
   - デバイス間でメッセージを中継してネットワーク範囲を拡張します。  
   - 追加デバイスのネットワーク参加をサポートします。  
   - 通常は電源供給により、一定の動作と信頼性の高いメッセージ中継を確保します。  
   - バッテリー駆動のルーターも可能ですが、エネルギー需要が高いため一般的ではありません。  

3. **Zigbeeエンドデバイス（ZED）**  
   - 親ノード（コーディネーターまたはルーター）と通信する軽量で電力効率の良いデバイスです。  
   - 他のデバイスにメッセージをルーティングしません。  
   - バッテリー動作に最適化され、通常はエネルギー節約のためスリープモードに入ります。

:::note

- **アドレッシングとルーティング**：
  - Zigbeeは16ビットアドレッシングスキームを使用します。デバイスは直接および間接アドレッシングの組み合わせで通信します。  
  - ルーティング決定は、AODV（Ad hoc On-demand Distance Vector）などのアルゴリズムを使用してルーターによって行われます。  

- **電力管理**：
  - Zigbeeエンドデバイスは低消費電力に最適化されています。多くの場合スリープモードで動作し、必要な時のみ起動します。  
  - ルーターとコーディネーターは一般的に一貫した可用性のため電源供給されます。

:::

#### ネットワークトポロジー

Zigbeeは、アプリケーション要件と環境に応じて、3つの主要なネットワークトポロジーをサポートします：

#### 1. メッシュトポロジー

- 単一のコーディネーターと複数のルーターが自己修復可能で堅牢なネットワークを形成します。  
- 通信パスが中断された場合、デバイスは動的にメッセージを再ルーティングでき、高い信頼性を確保します。  
- 広範囲のカバレッジと冗長性を必要とする大規模ネットワークに最適です。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **主要機能**：  
  - 動的再ルーティングにより高い信頼性を確保します。  
  - スケーラブルなカバレッジで大規模ネットワークをサポートします。  
  - 自己修復メカニズムにより耐障害性が向上します。  

#### 2. ツリートポロジー

- コーディネーターが階層構造のルートとして機能し、ルーターがブランチを形成します。  
- 各ブランチには複数のエンドデバイスまたは追加のルーターを持つことができ、ツリー状の構造を作成します。  
- 通信は階層パスに依存し、潜在的な単一障害点を導入します。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **主要機能**：  
  - 構造化された環境でうまく機能します。  
  - メッシュネットワークよりもセットアップと管理が簡単です。  
  - ブランチ障害に脆弱で、サブネットワーク全体が切断される可能性があります。  

#### 3. スタートポロジー

- すべてのデバイスがコーディネーターと直接通信します。  
- 展開は簡単ですが、コーディネーターが単一障害点になります。  
- デバイスがコーディネーターの近くにある小規模ネットワークに最適です。  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **主要機能**：  
  - セットアップと管理が簡単です。  
  - 範囲とデバイス容量の制約によりスケーラビリティが制限されます。  
  - すべての通信をコーディネーターに依存するため、耐障害性が低下します。  

これらの概念を簡単に確認した後、XIAO ESP32C6でのZigbee開発を始めましょう。

## Arduinoサンプル {#examples}

[Zigbeeサンプル - Arduino](https://github.com/espressif/arduino-esp32/tree/master/libraries/Zigbee/examples)を参照してください

### サンプル1：電球とライトスイッチ {#Light_Bulb_switch}

まず、2つのXIAO ESP32C6を準備し、1つを**Zigbee電球**として、もう1つを**Zigbeeライトスイッチ**として使用します。

`Zigbee_On_Off_Light`と`Zigbee_On_Off_Switch`のサンプルを使用して、Zigbee対応デバイスが実際のシナリオでどのように相互作用するかを理解します。始める準備はできましたか？開発に飛び込みましょう！

#### Zigbee電球

Zigbeeモードで`Zigbee ED(end device)`を選択していることを確認してください。

いくつかの定数：

```cpp
#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // ESP32-C6/H2 Boot button
#define ZIGBEE_LIGHT_ENDPOINT 10
```

- `LED_PIN`は内蔵LEDを制御するために使用されます。
- `BUTTON_PIN`はファクトリーリセットボタン用です。
- `ZIGBEE_LIGHT_ENDPOINT`は電球のZigbeeエンドポイントを表し、ネットワーク内のサービス識別子のように機能します。

##### Zigbeeライトデバイスの定義

```cpp
ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);
```

この行は、エンドポイントIDを持つ`ZigbeeLight`オブジェクトを定義します。エンドポイントは、Zigbeeデバイス内の異なる機能を表すために使用されます。

##### デバイス状態制御関数

`setLED()`関数はLED状態を制御します：

```cpp
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}
```

`setLED()`関数はブール値を受け取り、入力値に基づいてLED状態を設定し、オンまたはオフにします。

##### `setup()`関数

`setup()`関数は、LED、ボタン、Zigbee設定を含むデバイスを初期化します。

```cpp
void setup() {
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);
```

まず、LEDピンを出力として設定し、初期状態でオフにします。

```cpp
  pinMode(BUTTON_PIN, INPUT_PULLUP);
```

ボタンピンは内部プルアップ抵抗付きの入力として設定されます。

```cpp
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");
```

これはデバイスのメーカー名とモデル名を設定し、Zigbeeネットワーク上でデバイスを識別するのに役立ちます。

```cpp
  zbLight.onLightChange(setLED);
```

これは`setLED()`をコールバック関数として登録し、ライト状態に変更があるたびに呼び出されます。

```cpp
  Zigbee.addEndpoint(&zbLight);
```

`zbLight`をZigbeeコアにエンドポイントとして追加します。これにより、他のZigbeeデバイスがこのエンドポイントと相互作用できるようになります。

```cpp
  Zigbee.begin();
```

最後に、`Zigbee.begin()`を呼び出してZigbeeスタックを初期化し、デバイスをネットワーク内のエンドデバイスとして開始します。

##### `loop()`関数

メインループはファクトリーリセットを実行するためのボタン押下を処理します：

```cpp
void loop() {
  if (digitalRead(BUTTON_PIN) == LOW) {
    delay(100);  // Key debounce handling
    int startTime = millis();
    while (digitalRead(BUTTON_PIN) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        Serial.printf("Resetting Zigbee to factory settings, reboot.\n");
        Zigbee.factoryReset();
      }
    }
  }
  delay(100);
}
```

このコードはボタンが押されているかどうかをチェックします：

- 押されている場合、100ms待機します（デバウンス処理のため）。
- ボタンが3秒以上押され続けた場合、`Zigbee.factoryReset()`を呼び出してファクトリーリセットをトリガーします。

この機能は、ネットワークやペアリングの問題によりデバイスを再設定する必要がある場合にユーザーにとって便利です。

:::tip
公式ルーチンは継続的に更新されており、私たちのドキュメントは最新のプログラムを最初に同期できない場合があります。相違がある場合は、**[Espressifのプログラム例](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Light/Zigbee_On_Off_Light.ino)**を参照してください。
:::

```cpp title=Zigbee_On_Off_Light.ino showLineNumbers
#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // ESP32-C6/H2 Boot button
#define ZIGBEE_LIGHT_ENDPOINT 10

ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);

/********************* RGB LED functions **************************/
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}

/********************* Arduino functions **************************/
void setup() {
  // Init LED and turn it OFF (if LED_PIN == RGB_BUILTIN, the rgbLedWrite() will be used under the hood)
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);

  // Init button for factory reset
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  //Optional: set Zigbee device name and model
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");

  // Set callback function for light change
  zbLight.onLightChange(setLED);

  //Add endpoint to Zigbee Core
  log_d("Adding ZigbeeLight endpoint to Zigbee Core");
  Zigbee.addEndpoint(&zbLight);

  // When all EPs are registered, start Zigbee. By default acts as ZIGBEE_END_DEVICE
  log_d("Calling Zigbee.begin()");
  Zigbee.begin();
}

void loop() {
  // Checking button for factory reset
  if (digitalRead(BUTTON_PIN) == LOW) {  // Push button pressed
    // Key debounce handling
    delay(100);
    int startTime = millis();
    while (digitalRead(BUTTON_PIN) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        // If key pressed for more than 3secs, factory reset Zigbee and reboot
        Serial.printf("Resetting Zigbee to factory settings, reboot.\n");
        Zigbee.factoryReset();
      }
    }
  }
  delay(100);
}
```

#### Zigbee ライトスイッチ

ここでは、XIAO ESP32C6が**Zigbee コーディネーター**として機能し、他のZigbeeデバイスを制御する責任を負います。ここで、**Zigbee スイッチ**はコントローラーを表し、Zigbeeライトデバイスにバインドし、ライトのオン/オフ切り替えなどのコマンドを通じて制御します。

##### インクルードと定義

```cpp
#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define SWITCH_ENDPOINT_NUMBER 5
#define GPIO_INPUT_IO_TOGGLE_SWITCH 9
#define PAIR_SIZE(TYPE_STR_PAIR) (sizeof(TYPE_STR_PAIR) / sizeof(TYPE_STR_PAIR[0]))
```

- `SWITCH_ENDPOINT_NUMBER`は`5`として定義されています。これはスイッチのエンドポイントを表します。電球の例と同様に、エンドポイント番号はZigbeeデバイス内の特定の機能を定義するために使用されます。
- `GPIO_INPUT_IO_TOGGLE_SWITCH`はGPIOピン`9`を指し、スイッチボタンとして機能します。
- `PAIR_SIZE()`は指定された配列のサイズを計算するために使用されるマクロで、ここではボタン設定の処理に使用されます。

##### スイッチ設定タイプと関数

コードはスイッチ機能に関連するいくつかの列挙型とデータ構造を定義しています：

```cpp
typedef enum {
  SWITCH_ON_CONTROL,
  SWITCH_OFF_CONTROL,
  SWITCH_ONOFF_TOGGLE_CONTROL,
  SWITCH_LEVEL_UP_CONTROL,
  SWITCH_LEVEL_DOWN_CONTROL,
  SWITCH_LEVEL_CYCLE_CONTROL,
  SWITCH_COLOR_CONTROL,
} SwitchFunction;

typedef struct {
  uint8_t pin;
  SwitchFunction func;
} SwitchData;

typedef enum {
  SWITCH_IDLE,
  SWITCH_PRESS_ARMED,
  SWITCH_PRESS_DETECTED,
  SWITCH_PRESSED,
  SWITCH_RELEASE_DETECTED,
} SwitchState;
```

- **`SwitchFunction`**はスイッチが実行できる異なる機能を列挙します（ライトのオン、オフ、切り替え、明度調整など）。
- **`SwitchData`**はGPIOピンと特定の機能をペアにする構造体で、異なる機能を持つ複数のボタンを追加する際の整理に役立ちます。
- **`SwitchState`**はユーザーの操作中のスイッチの異なる状態を表します（例：アイドル、押下、解放）。

##### Zigbee スイッチのインスタンス化

```cpp
static SwitchData buttonFunctionPair[] = {{GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}};
ZigbeeSwitch zbSwitch = ZigbeeSwitch(SWITCH_ENDPOINT_NUMBER);
```

- **`buttonFunctionPair`**はボタンの機能を定義する配列です。ここでは、`GPIO 9`に接続されたボタンがライトのオン/オフ切り替えに使用されます。
- **`zbSwitch`**はエンドポイント番号`5`で`ZigbeeSwitch`のインスタンスを作成します。

##### Zigbee 関数とGPIO割り込み処理

```cpp
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    zbSwitch.lightToggle();  // Sends a toggle command to the light.
  }
}
```

**`onZbButton()`**はボタンが押されるたびに呼び出されます。この場合、ライトを切り替えるZigbeeコマンドを送信します。

###### GPIOイベントの処理

```cpp
static void IRAM_ATTR onGpioInterrupt(void *arg) {
  xQueueSendFromISR(gpio_evt_queue, (SwitchData *)arg, NULL);
}
```

**`onGpioInterrupt()`**はGPIOピン割り込みを処理する割り込みサービスルーチン（ISR）です。ボタンが押されるたびにキューにイベントを配置します。

```cpp
static void enableGpioInterrupt(bool enabled) {
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); ++i) {
    if (enabled) {
      enableInterrupt((buttonFunctionPair[i]).pin);
    } else {
      disableInterrupt((buttonFunctionPair[i]).pin);
    }
  }
}
```

**`enableGpioInterrupt()`**は、パラメータ`enabled`が`true`か`false`かに応じて、GPIO割り込みを有効または無効にします。

##### セットアップ関数

```cpp
void setup() {
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  zbSwitch.setManufacturerAndModel("Espressif", "ZigbeeSwitch");
  zbSwitch.allowMultipleBinding(true);

  Zigbee.addEndpoint(&zbSwitch);
  Zigbee.setRebootOpenNetwork(180);

  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); i++) {
    pinMode(buttonFunctionPair[i].pin, INPUT_PULLUP);
    gpio_evt_queue = xQueueCreate(10, sizeof(SwitchData));
    if (gpio_evt_queue == 0) {
      log_e("Queue was not created and must not be used");
      while (1);
    }
    attachInterruptArg(buttonFunctionPair[i].pin, onGpioInterrupt, (void *)(buttonFunctionPair + i), FALLING);
  }

  Zigbee.begin(ZIGBEE_COORDINATOR);

  Serial.println("Waiting for Light to bound to the switch");
  while (!zbSwitch.isBound()) {
    Serial.printf(".");
    delay(500);
  }

  std::list<zb_device_params_t *> boundLights = zbSwitch.getBoundDevices();
  for (const auto &device : boundLights) {
    Serial.printf("Device on endpoint %d, short address: 0x%x\n", device->endpoint, device->short_addr);
    Serial.printf(
      "IEEE Address: %02X:%02X:%02X:%02X:%02X:%02X:%02X:%02X\n", device->ieee_addr[0], device->ieee_addr[1], device->ieee_addr[2], device->ieee_addr[3],
      device->ieee_addr[4], device->ieee_addr[5], device->ieee_addr[6], device->ieee_addr[7]
    );
    Serial.printf("Light manufacturer: %s", zbSwitch.readManufacturer(device->endpoint, device->short_addr));
    Serial.printf("Light model: %s", zbSwitch.readModel(device->endpoint, device->short_addr));
  }
  Serial.println();
}
```

- **シリアル通信の初期化**：デバッグ用にシリアルを初期化します。
- **デバイス情報**：メーカーとモデルを設定し、複数のデバイスのバインドを許可し、Zigbeeコアにエンドポイントを追加します。
- **ネットワーク初期化**：再起動後`180`秒間Zigbeeネットワークを開いて、デバイスの参加を許可します。
- **ボタン初期化**：ボタン用のGPIOピンを設定し、GPIO割り込みを処理するキューを作成し、ボタンに割り込みを接続します。
- **バインド待機**：コーディネーターはライトデバイスにバインドするまで待機してから続行します。バインドされると、バインドされたデバイス情報を出力します。

##### ループ関数

```cpp
void loop() {
  uint8_t pin = 0;
  SwitchData buttonSwitch;
  static SwitchState buttonState = SWITCH_IDLE;
  bool eventFlag = false;

  if (xQueueReceive(gpio_evt_queue, &buttonSwitch, portMAX_DELAY)) {
    pin = buttonSwitch.pin;
    enableGpioInterrupt(false);
    eventFlag = true;
  }
  while (eventFlag) {
    bool value = digitalRead(pin);
    switch (buttonState) {
      case SWITCH_IDLE:           buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_IDLE; break;
      case SWITCH_PRESS_DETECTED: buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_RELEASE_DETECTED; break;
      case SWITCH_RELEASE_DETECTED:
        buttonState = SWITCH_IDLE;
        (*onZbButton)(&buttonSwitch);
        break;
      default: break;
    }
    if (buttonState == SWITCH_IDLE) {
      enableGpioInterrupt(true);
      eventFlag = false;
      break;
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  static uint32_t lastPrint = 0;
  if (millis() - lastPrint > 10000) {
    lastPrint = millis();
    zbSwitch.printBoundDevices();
  }
}
```

- **ループ関数**は割り込みキュー（`gpio_evt_queue`）から読み取り、それに応じて`buttonState`を更新することでボタンの押下を管理します。
- ボタンが押されて離された時（`SWITCH_RELEASE_DETECTED`）、`onZbButton()`コールバックが呼び出されてライトを切り替えます。
- **10秒**ごとに、監視目的でバインドされたライトが出力されます。

:::tip
公式ルーチンは継続的に更新されており、私たちのドキュメントは最新のプログラムを即座に同期できない場合があります。相違がある場合は、**[Espressifのプログラム例](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Switch/Zigbee_On_Off_Switch.ino)**を参照してください。
:::

```cpp title=Zigbee_On_Off_Switch.ino showLineNumbers
#ifndef ZIGBEE_MODE_ZCZR
#error "Zigbee coordinator mode is not selected in Tools->Zigbee mode"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define SWITCH_ENDPOINT_NUMBER 5

/* Switch configuration */
#define GPIO_INPUT_IO_TOGGLE_SWITCH 9
#define PAIR_SIZE(TYPE_STR_PAIR)    (sizeof(TYPE_STR_PAIR) / sizeof(TYPE_STR_PAIR[0]))

typedef enum {
  SWITCH_ON_CONTROL,
  SWITCH_OFF_CONTROL,
  SWITCH_ONOFF_TOGGLE_CONTROL,
  SWITCH_LEVEL_UP_CONTROL,
  SWITCH_LEVEL_DOWN_CONTROL,
  SWITCH_LEVEL_CYCLE_CONTROL,
  SWITCH_COLOR_CONTROL,
} SwitchFunction;

typedef struct {
  uint8_t pin;
  SwitchFunction func;
} SwitchData;

typedef enum {
  SWITCH_IDLE,
  SWITCH_PRESS_ARMED,
  SWITCH_PRESS_DETECTED,
  SWITCH_PRESSED,
  SWITCH_RELEASE_DETECTED,
} SwitchState;

static SwitchData buttonFunctionPair[] = {{GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}};

ZigbeeSwitch zbSwitch = ZigbeeSwitch(SWITCH_ENDPOINT_NUMBER);

/********************* Zigbee functions **************************/
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    // Send toggle command to the light
    zbSwitch.lightToggle();
  }
}

/********************* GPIO functions **************************/
static QueueHandle_t gpio_evt_queue = NULL;

static void IRAM_ATTR onGpioInterrupt(void *arg) {
  xQueueSendFromISR(gpio_evt_queue, (SwitchData *)arg, NULL);
}

static void enableGpioInterrupt(bool enabled) {
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); ++i) {
    if (enabled) {
      enableInterrupt((buttonFunctionPair[i]).pin);
    } else {
      disableInterrupt((buttonFunctionPair[i]).pin);
    }
  }
}

/********************* Arduino functions **************************/
void setup() {

  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  //Optional: set Zigbee device name and model
  zbSwitch.setManufacturerAndModel("Espressif", "ZigbeeSwitch");

  //Optional to allow multiple light to bind to the switch
  zbSwitch.allowMultipleBinding(true);

  //Add endpoint to Zigbee Core
  log_d("Adding ZigbeeSwitch endpoint to Zigbee Core");
  Zigbee.addEndpoint(&zbSwitch);

  //Open network for 180 seconds after boot
  Zigbee.setRebootOpenNetwork(180);

  // Init button switch
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); i++) {
    pinMode(buttonFunctionPair[i].pin, INPUT_PULLUP);
    /* create a queue to handle gpio event from isr */
    gpio_evt_queue = xQueueCreate(10, sizeof(SwitchData));
    if (gpio_evt_queue == 0) {
      log_e("Queue was not created and must not be used");
      while (1);
    }
    attachInterruptArg(buttonFunctionPair[i].pin, onGpioInterrupt, (void *)(buttonFunctionPair + i), FALLING);
  }

  // When all EPs are registered, start Zigbee with ZIGBEE_COORDINATOR mode
  log_d("Calling Zigbee.begin()");
  Zigbee.begin(ZIGBEE_COORDINATOR);

  Serial.println("Waiting for Light to bound to the switch");
  //Wait for switch to bound to a light:
  while (!zbSwitch.isBound()) {
    Serial.printf(".");
    delay(500);
  }

  // Optional: read manufacturer and model name from the bound light
  std::list<zb_device_params_t *> boundLights = zbSwitch.getBoundDevices();
  //List all bound lights
  for (const auto &device : boundLights) {
    Serial.printf("Device on endpoint %d, short address: 0x%x\n", device->endpoint, device->short_addr);
    Serial.printf(
      "IEEE Address: %02X:%02X:%02X:%02X:%02X:%02X:%02X:%02X\n", device->ieee_addr[0], device->ieee_addr[1], device->ieee_addr[2], device->ieee_addr[3],
      device->ieee_addr[4], device->ieee_addr[5], device->ieee_addr[6], device->ieee_addr[7]
    );
    Serial.printf("Light manufacturer: %s", zbSwitch.readManufacturer(device->endpoint, device->short_addr));
    Serial.printf("Light model: %s", zbSwitch.readModel(device->endpoint, device->short_addr));
  }

  Serial.println();
}

void loop() {
  // Handle button switch in loop()
  uint8_t pin = 0;
  SwitchData buttonSwitch;
  static SwitchState buttonState = SWITCH_IDLE;
  bool eventFlag = false;

  /* check if there is any queue received, if yes read out the buttonSwitch */
  if (xQueueReceive(gpio_evt_queue, &buttonSwitch, portMAX_DELAY)) {
    pin = buttonSwitch.pin;
    enableGpioInterrupt(false);
    eventFlag = true;
  }
  while (eventFlag) {
    bool value = digitalRead(pin);
    switch (buttonState) {
      case SWITCH_IDLE:           buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_IDLE; break;
      case SWITCH_PRESS_DETECTED: buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_RELEASE_DETECTED; break;
      case SWITCH_RELEASE_DETECTED:
        buttonState = SWITCH_IDLE;
        /* callback to button_handler */
        (*onZbButton)(&buttonSwitch);
        break;
      default: break;
    }
    if (buttonState == SWITCH_IDLE) {
      enableGpioInterrupt(true);
      eventFlag = false;
      break;
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  // print the bound lights every 10 seconds
  static uint32_t lastPrint = 0;
  if (millis() - lastPrint > 10000) {
    lastPrint = millis();
    zbSwitch.printBoundDevices();
  }
}
```

#### デモンストレーション

<div class="video-container">
<iframe
  className="youtube-video-r"
  src="https://www.youtube.com/embed/Z2NROYx7hcQ"
  title="XIAO Zigbe Light bulb/switch Example"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>
</div>

Zigbee制御照明プロジェクトの完成おめでとうございます！あなたが探求できる、さらに多くのエキサイティングなZigbeeアプリケーションが待っています。素晴らしい作業を続けてください！

## リファレンス

- [Zigbee Examples- Arduino](https://github.com/espressif/arduino-esp32/blob/master/libraries/Zigbee/examples)
- [ESP Zigbee SDK](https://docs.espressif.com/projects/esp-zigbee-sdk/en/latest/esp32c6/introduction.html)
- [Arduino Core for ESP32 gets a Zigbee wrapper library](https://www.cnx-software.com/2024/08/23/arduino-core-for-esp32-gets-a-zigbee-wrapper-library/)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただきありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
