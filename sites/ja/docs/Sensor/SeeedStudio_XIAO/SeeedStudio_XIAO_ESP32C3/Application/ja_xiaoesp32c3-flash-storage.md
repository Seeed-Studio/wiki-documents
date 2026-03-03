---
description: XIAO ESP32C3 Flash-storage
title: XIAO ESP32C3 Flash-storage
keywords:
- XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/xiaoesp32c3-flash-storage
last_update:
  date: 03/03/2023
  author: Citric
---

# XIAO ESP32C3 データを異なる方法で永続的に保存する

開発ボードを使用する際、多くの人がチップ上のフラッシュメモリを使用して重要なデータを保存したいと考えるでしょう。これには、開発ボードに異常が発生してもデータが失われないことを保証する保存方法が必要です。

このチュートリアルでは、以下の2つの異なる保存方法でXIAO ESP32C3のフラッシュメモリに重要なデータを保存する方法を紹介します。

1. 最初のガイドでは、`Preferences.h`ライブラリを使用してESP32フラッシュメモリに**データを永続的に保存**する方法を示します。フラッシュメモリに保持されたデータは、リセットや電源障害が発生しても持続します。`Preferences.h`ライブラリの使用は、ネットワーク認証情報、APIキー、しきい値、またはGPIOの最後の状態などのデータを保存するのに便利です。フラッシュメモリからデータを保存および読み取りする方法を学習します。

2. 2番目のガイドでは、XIAO ESP32C3の**EEPROM**とは何か、そして何に役立つかを説明します。また、EEPROMへの書き込みと読み取りの方法を示し、学習した概念を実践するプロジェクト例を構築します。

この記事の大部分は[**RandomNerdTutorials.com**](https://randomnerdtutorials.com/)から来ており、一部のプログラムと説明はXIAO ESP32C3に適合するように若干修正されています。チュートリアルと方法を提供してくれた[**RandomNerdTutorials.com**](https://randomnerdtutorials.com/)に特別な感謝を表します。以下は元のソースへの直接リンクです。

- [ESP32 Flash Memory – Store Permanent Data (Write and Read)](https://randomnerdtutorials.com/esp32-flash-memory/)

- [Arduino EEPROM Explained – Remember Last LED State](https://randomnerdtutorials.com/arduino-eeprom-explained-remember-last-led-state/)

- [ESP32 Save Data Permanently using Preferences Library](https://randomnerdtutorials.com/esp32-save-data-permanently-preferences/)

## Preferencesライブラリを使用してデータを永続的に保存する

### Preferences.hライブラリ

このライブラリは、Arduino IDEにXIAO ESP32C3ボードをインストールすると自動的に「インストール」されます。

`Preferences.h`ライブラリは、key:valueペアを通じて変数値を保存するために優先的に使用されます。データを永続的に保存することは以下の場合に重要です：

- 変数の最後の状態を記憶する；

- 設定を保存する；

- 機器が何回起動されたかを保存する；

- または永続的に保存する必要がある他のデータタイプ。

XIAO ESP32C3を使用してファイルや非常に長い文字列やデータを保存したい場合は、拡張ボードとSDカードの使用をお勧めします。このチュートリアルの2つの方法の使用はお勧めしません。

以下は**Preferences.hライブラリの便利な関数**です

**関数1**. `begin()`メソッドは、定義された名前空間で「ストレージスペース」を開きます。falseの引数は、読み書きモードで使用することを意味します。読み取り専用モードで名前空間を開くまたは作成するにはtrueを使用します。

```c
preferences.begin("my-app", false);
```

この場合、名前空間名は my-app です。名前空間名は15文字に制限されています。

**Func 2**. `clear()` を使用して、開いた名前空間下のすべての設定をクリアします（名前空間自体は削除されません）：

```c
preferences.clear();
```

**機能 3**. 開いた名前空間からキーを削除する：

```c
preferences.remove(key);
```

**Func 4**. 開いた名前空間の下でプリファレンスを閉じるために `end()` メソッドを使用します：

```c
preferences.end();
```

**Func 5**. 保存したい変数の型に応じて、異なるメソッドを使用する必要があります。

`Preferences.h` ライブラリを使用する際は、保存したいデータ型を定義する必要があります。後でそのデータを読み取りたい場合は、保存されたデータ型を知っている必要があります。つまり、書き込みと読み取りのデータ型は同じである必要があります。

`Preferences.h` を使用して以下のデータ型を保存できます：char、Uchar、short、Ushort、int、Uint、long、Ulong、long64、Ulong64、float、double、bool、string、bytes。

<table align="center">
  <tbody><tr>
      <td align="center">Char</td>
      <td align="left"><code>putChar(const char*key, int8_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Char</td>
      <td align="left"><code>putUChar(const char* key, int8_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Short</td>
      <td align="left"><code>putShort(const char*key, int16_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Short</td>
      <td align="left"><code>putUShort(const char* key, uint16_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Int</td>
      <td align="left"><code>putInt(const char*key, int32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Int</td>
      <td align="left"><code>putUInt(const char* key, uint32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Long</td>
      <td align="left"><code>putLong(const char*key, int32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Long</td>
      <td align="left"><code>putULong(const char* key, uint32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Long64</td>
      <td align="left"><code>putLong64(const char*key, int64_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Long64</td>
      <td align="left"><code>putULong64(const char* key, uint64_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Float</td>
      <td align="left"><code>putFloat(const char*key, const float_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Double</td>
      <td align="left"><code>putDouble(const char* key, const double_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Bool</td>
      <td align="left"><code>putBool(const char*key, const bool value)</code></td>
    </tr>
    <tr>
      <td align="center">String</td>
      <td align="left"><code>putString(const char* key, const String value)</code></td>
    </tr>
    <tr>
      <td align="center">Bytes</td>
      <td align="left"><code>putBytes(const char*key, const void* value, size_t len)</code></td>
    </tr>
  </tbody></table>

**Func 6**. 同様に、取得したい変数の型に応じて異なるメソッドを使用する必要があります。

<table align="center">
    <tr>
     <td align="center">Char</td>
     <td align="left"><code>getChar(const char*key, const int8_t defaultValue)</code></td>
 </tr>
 <tr>
     <td align="center">Unsigned Char</td>
     <td align="left"><code>getUChar(const char* key, const uint8_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Short</td>
     <td align="left"><code>getShort(const char*key, const int16_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Short</td>
     <td align="left"><code>getUShort(const char* key, const uint16_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Int</td>
     <td align="left"><code>getInt(const char*key, const int32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Int</td>
     <td align="left"><code>getUInt(const char* key, const uint32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Long</td>
     <td align="left"><code>getLong(const char*key, const int32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Long</td>
     <td align="left"><code>getULong(const char* key, const uint32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Long64</td>
     <td align="left"><code>getLong64(const char*key, const int64_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Long64</td>
     <td align="left"><code>gettULong64(const char* key, const uint64_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Float</td>
     <td align="left"><code>getFloat(const char*key, const float_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Double</td>
     <td align="left"><code>getDouble(const char* key, const double_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Bool</td>
     <td align="left"><code>getBool(const char*key, const bool defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">String</td>
     <td align="left"><code>getString(const char* key, const String defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">String</td>
     <td align="left"><code>getString(const char*key, char* value, const size_t maxLen)</code></td>
 </tr>
    <tr>
     <td align="center">Bytes</td>
     <td align="left"><code>getBytes(const char*key, void* buf, size_t maxLen)</code></td>
 </tr>
</table>

**Func 7**. 名前空間の削除

Arduino の Preferences 実装では、名前空間を完全に削除するメソッドがありません。その結果、複数のプロジェクトを経て、ESP32 の不揮発性ストレージ（nvs）Preferences パーティションが満杯になる可能性があります。Preferences で使用される NVS メモリを完全に消去して再フォーマットするには、以下を含むスケッチを作成します：

```c
#include <nvs_flash.h>

void setup() {
  nvs_flash_erase(); // erase the NVS partition and...
  nvs_flash_init(); // initialize the NVS partition.
  while(true);
}

void loop() {

}
```

上記を実行した直後に、新しいスケッチをボードにダウンロードする必要があります。そうしないと、電源が入るたびにNVSパーティションが再フォーマットされてしまいます。

詳細については、Preferences.cppファイルを[こちら](https://github.com/espressif/arduino-esp32/blob/master/libraries/Preferences/src/Preferences.cpp)でアクセスできます。

### Preferences.hライブラリを使用する一般的な方法

**ステップ1.** Preferences.hライブラリを使用してデータを保存するには、まずスケッチにそれを含める必要があります：

```c
#include <Preferences.h>
```

**ステップ2.** 次に、Preferencesライブラリのインスタンスを初期化する必要があります。例えば、preferencesと呼ぶことができます：

```c
Preferences preferences;
```

**ステップ3.** `setup()`で、ボーレート115200でシリアルモニターを初期化します。

```c
Serial.begin(115200);
```

**ステップ4.** フラッシュメモリに`my-app`という「ストレージスペース」を読み書きモードで作成します。他の任意の名前を付けることもできます。

```c
preferences.begin("my-app", false);
```

**ステップ5.** getとputメソッドを使用してデータコンテンツを取得/保存します。

#### キー:値ペアデータの保存/取得

preferencesを使用して保存されるデータは次のような構造になっています：

```c
namespace {
  key:value
}
```

同じ名前空間に異なるキーを保存することができます。例えば：

```c
namespace {
  key1: value1
  key2: value2
}
```

同じキーを持つ複数の名前空間を持つこともできます（ただし、各キーはその値と組み合わせて）：

```c
namespace1{
  key:value1
}
namespace2{
  key:value2
}
```

例えば、"counter"キーに新しい値を保存します：

```c
preferences.putUInt("counter", counter);
```

次に、設定に保存されている `counter` キーの値を取得します。値が見つからない場合は、デフォルトで 0 を返します（このコードが初回実行時に発生します）。

```c
unsigned int counter = preferences.getUInt("counter", 0);
```

つまり、あなたのデータは次のような構造になっています：

```c
my-app{
  counter: counter
}
```

#### 文字列データの保存/取得

以下のコードは、`Preferences.h`を使用してネットワーク認証情報をESP32のフラッシュメモリに永続的に保存します。

SSIDの値（ssid変数）を保存するssidというキーを作成します – `putString()`メソッドを使用します。

```c
preferences.putString("ssid", ssid);
```

パスワード値（password変数）を保存するために、passwordという別のキーを追加します：

```c
preferences.putString("password", password);
```

つまり、あなたのデータは次のような構造になっています：

```c
my-app{
  ssid: ssid
  password: password
}
```

`getString()`メソッドを使用してSSIDとパスワードの値を取得します。変数を保存する際に使用したキー名、この場合はssidとpasswordキーを使用する必要があります：

```c
String ssid = preferences.getString("ssid", ""); 
String password = preferences.getString("password", "");
```

`getString()` 関数の第二引数として、空の文字列を渡しました。これは、preferences に `ssid` や `password` キーが保存されていない場合に返される値です。

**ステップ 6.** Preferences を閉じます。

```c
preferences.end();
```

- Store/get Key:value Pair データの完全な手順を以下に示します。

```c
#include <Preferences.h>

Preferences preferences;

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();

  // Open Preferences with my-app namespace. Each application module, library, etc
  // has to use a namespace name to prevent key name collisions. We will open storage in
  // RW-mode (second parameter has to be false).
  // Note: Namespace name is limited to 15 chars.
  preferences.begin("my-app", false);

  // Remove all preferences under the opened namespace
  //preferences.clear();

  // Or remove the counter key only
  //preferences.remove("counter");

  // Get the counter value, if the key does not exist, return a default value of 0
  // Note: Key name is limited to 15 chars.
  unsigned int counter = preferences.getUInt("counter", 0);

  // Increase counter by 1
  counter++;

  // Print the counter to Serial Monitor
  Serial.printf("Current counter value: %u\n", counter);

  // Store the counter to the Preferences
  preferences.putUInt("counter", counter);

  // Close the Preferences
  preferences.end();

  // Wait 10 seconds
  Serial.println("Restarting in 10 seconds...");
  delay(10000);

  // Restart ESP
  ESP.restart();
}

void loop() {

}
```

コードをボードにアップロードすると、シリアルモニターで以下のような結果が得られるはずです：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/1.png"/></div>

- 文字列データの保存/取得の完全な手順を以下に示します。

`Preferences.h`を使用してネットワーク認証情報を保存します。

```c
#include <Preferences.h>

Preferences preferences;

const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();

  preferences.begin("credentials", false);
  preferences.putString("ssid", ssid); 
  preferences.putString("password", password);

  Serial.println("Network Credentials Saved using Preferences");

  preferences.end();
}

void loop() {

}
```

コードをボードにアップロードすると、シリアルモニターで以下のような結果が得られるはずです：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/2.png"/></div>

Preferencesに保存されたネットワーク認証情報でWi-Fiに接続します。

```c
#include <Preferences.h>
#include "WiFi.h"

Preferences preferences;

String ssid;
String password;

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();
  
  preferences.begin("credentials", false);
 
  ssid = preferences.getString("ssid", ""); 
  password = preferences.getString("password", "");

  if (ssid == "" || password == ""){
    Serial.println("No values saved for ssid or password");
  }
  else {
    // Connect to Wi-Fi
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(100);
    WiFi.begin(ssid.c_str(), password.c_str());
    Serial.print("Connecting to WiFi ");
    Serial.println(ssid);
    Serial.println(password);
    while (WiFi.status() != WL_CONNECTED) {
      Serial.print('.');
      delay(1000);
    }
    Serial.println(WiFi.localIP());  
  }
}

void loop() {
  // put your main code here, to run repeatedly:
}
```

前のコードの後にこのコードをボードにアップロードしてください（認証情報が保存されていることを確認するため）。すべてが期待通りに動作すれば、シリアルモニターで以下のような結果が得られるはずです。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/3.png"/></div>

## EEPROMを使用した永続データの保存

### EEPROMとは？

EEPROMは、ESP32マイクロコントローラーの内部メモリで、ボードを再起動した後もデータをメモリに保持することができます。マイクロコントローラーを使用する際、特に電力損失の場合のように、意図的であろうとなかろうと、カードがオフになったときにデータをメモリに保持することは興味深いことです。

ESP32マイクロコントローラーには、Arduinoの EEPROMのようにインターフェースできるFlashメモリ領域があり、ボードがオフになった後でもデータをメモリに保持できます。

:::caution
重要な点として、EEPROMはサイズと寿命が限られていることです。メモリセルは必要な回数だけ読み取ることができますが、書き込みサイクル数は**100,000回**に制限されています。保存するデータのサイズと更新頻度に細心の注意を払うことをお勧めします。EEPROMメモリは、0から255までの512個の値、または128個のIPアドレスやRFIDタグを保存できます。
:::

ESP32のマイクロコントローラーにはEEPROM（電気的消去可能プログラマブル読み取り専用メモリ）があります。これは、バイト変数を保存できる小さなスペースです。EEPROMに保存された変数は、ESP32をリセットまたは電源オフしても、そこに保持されます。簡単に言えば、EEPROMはコンピューターのハードドライブに似た永続ストレージです。

EEPROMは電子的に読み取り、消去、再書き込みが可能です。Arduinoでは、EEPROMライブラリを使用してEEPROMから簡単に読み書きできます。

各EEPROM位置は1バイトを保存でき、これは8ビット数値のみを保存できることを意味し、0から255までの整数値が含まれます。

### 利用可能なEEPROM関数

Arduino IDEを使用してESP32フラッシュメモリから読み書きするために、EEPROMライブラリを使用します。ESP32でこのライブラリを使用することは、Arduinoで使用することと非常に似ています。そのため、Arduino EEPROMを以前に使用したことがある場合、これはそれほど違いはありません。

そこで、[Arduino EEPROM](https://randomnerdtutorials.com/arduino-eeprom-explained-remember-last-led-state/)に関する記事もご覧になることをお勧めします。

**関数1**. メモリサイズの初期化

関数を使用する前に、`EEPROM.begin()`でメモリのサイズを初期化する必要があります。

```c
EEPROM.begin(EEPROM_SIZE);
```

**Func 2**. 書き込み & 配置

EEPROMにデータを書き込むには、2つの引数を取る`EEPROM.write()`関数を使用します。最初の引数はデータを保存したいEEPROMの場所またはアドレスで、2番目は保存したい値です：

```c
EEPROM.write(address, value);
```

`EEPROM.write()` は `EEPROM.put()` を使用することと同等です。

```c
EEPROM.put(address, value);
```

例えば、アドレス0に9を書き込む場合は、次のようになります：

```c
EEPROM.write(0, 9);
```

:::tip
float データを保存したい場合、通常は `EEPROM.write()` メソッドの代わりに `EEPROM.put()` メソッドを使用します。write() メソッドを使用して保存したい場合は、`EEPROM.writeFloat()` を使用する必要があります。
:::

**Func 3**. Read & Get

EEPROM からバイトを読み取るには、`EEPROM.read()` 関数を使用します。この関数は、バイトのアドレスを引数として受け取ります。

```c
EEPROM.read(address);
```

`EEPROM.read()` は `EEPROM.get()` を使用することと同等です。

```c
EEPROM.get(address);
```

例えば、アドレス0に以前に保存されたバイトを読み取るには：

```c
EEPROM.read(0);
```

これは **9** を返します。これはその場所に格納されている値です。

:::tip
float データを取得したい場合は、通常 `EEPROM.read()` メソッドの代わりに `EEPROM.get()` メソッドを使用します。read() メソッドを使用して取得したい場合は、`EEPROM.readFloat()` を使用する必要があります。
:::

**Func 4**. 値の更新

`EEPROM.update()` 関数は特に便利です。この関数は、書き込まれる値が既に保存されている値と異なる場合にのみ EEPROM に書き込みを行います。

EEPROM は書き込み/消去サイクルが限られているため寿命に制限があるので、`EEPROM.write()` の代わりに `EEPROM.update()` 関数を使用することでサイクルを節約できます。

`EEPROM.update()` 関数は以下のように使用します：

```c
EEPROM.update(address, value);
```

現在、アドレス0に9が格納されています。そのため、以下を呼び出すと：

```c
EEPROM.update(0, 9);
```

現在保存されている値と書き込みたい値が同じであるため、EEPROMに再度書き込みは行われません。

:::note
EEPROM操作について詳しく学ぶには、[公式Arduinoドキュメント](https://docs.arduino.cc/learn/programming/eeprom-guide#eeprom-clear)を読むことができます。
:::

### EEPROMを使用する一般的な方法

XIAO ESP32C3のフラッシュメモリにデータを保存する方法を示すために、出力の最後の状態（この場合はLED）を保存します。

以下の回路図に示すように、XIAO ESP32C3にLEDを配線してください。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png"/></div>

まず、EEPROMライブラリをインクルードする必要があります。

```c
#include <EEPROM.h>
```

次に、EEPROMサイズを定義します。これは、フラッシュメモリでアクセスしたいバイト数です。この場合、LEDの状態を保存するだけなので、EEPROMサイズは1に設定されます。

```c
#define EEPROM_SIZE 1
```

このスケッチを動作させるために必要な他の変数も定義します。

```c
// constants won't change. They're used here to set pin numbers:
const int ledPin = D10;      // the number of the LED pin

// Variables will change:
int ledState = LOW;  // ledState used to set the LED

// Generally, you should use "unsigned long" for variables that hold time
// The value will quickly become too large for an int to store
unsigned long previousMillis = 0;  // will store last time LED was updated

// constants won't change:
const long interval = 10000;  // interval at which to blink (milliseconds)
```

`setup()`では、事前定義されたサイズでEEPROMを初期化します。

```c
EEPROM.begin(EEPROM_SIZE);
```

最新のLED状態でコードが初期化されることを確実にするため、`setup()`内で、フラッシュメモリから最後のLED状態を読み取る必要があります。これはアドレス0に保存されています。

その後、フラッシュメモリから読み取った値に応じて、LEDをONまたはOFFにするだけです。

```c
digitalWrite (ledPin, ledState);
```

`loop()` 関数セクションでは、一定時間にわたってLEDの状態を反転させるだけです。

```c
// check to see if it's time to blink the LED; that is, if the difference
// between the current time and last time you blinked the LED is bigger than
// the interval at which you want to blink the LED.
unsigned long currentMillis = millis();

if (currentMillis - previousMillis >= interval) {
    // save the last time you blinked the LED
    previousMillis = currentMillis;
    Serial.println("State changed");
    // if the LED is off turn it on and vice-versa:
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }

    // set the LED with the ledState of the variable:
    digitalWrite(ledPin, ledState);
}
```

次に、カウントダウンが終了したかどうかを判定し、終了後にLEDの状態を反転させ、フラッシュメモリに保存する必要があります。

```c
EEPROM.write(0, ledState);
```

最後に、EEPROM.commit()を使用して変更を有効にします。

```c
EEPROM.commit();
```

以下が完了した手順です。

:::caution
この例を長時間実行**しないで**ください。この例では、10秒ごとにEEPROMに書き込みを行うため、長時間実行するとEEPROMの寿命が**大幅に短縮**されます。
:::

```c
// include library to read and write from flash memory
#include <EEPROM.h>

// define the number of bytes you want to access
#define EEPROM_SIZE 1

// constants won't change. They're used here to set pin numbers:
const int ledPin = D10;      // the number of the LED pin

// Variables will change:
int ledState = LOW;  // ledState used to set the LED

// Generally, you should use "unsigned long" for variables that hold time
// The value will quickly become too large for an int to store
unsigned long previousMillis = 0;  // will store last time LED was updated

// constants won't change:
const long interval = 10000;  // interval at which to blink (milliseconds)

void setup() { 
  Serial.begin(115200);
  
  // initialize EEPROM with predefined size
  EEPROM.begin(EEPROM_SIZE);

  pinMode(ledPin, OUTPUT);

  // read the last LED state from flash memory
  ledState = EEPROM.read(0);
  // set the LED to the last stored state
  digitalWrite(ledPin, ledState);
}

void loop() {
  // here is where you'd put code that needs to be running all the time.

  // check to see if it's time to blink the LED; that is, if the difference
  // between the current time and last time you blinked the LED is bigger than
  // the interval at which you want to blink the LED.
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval) {
    // save the last time you blinked the LED
    previousMillis = currentMillis;
    Serial.println("State changed");
    // if the LED is off turn it on and vice-versa:
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }
    // save the LED state in flash memory
    EEPROM.write(0, ledState);
    EEPROM.commit();
    Serial.println("State saved in flash memory");

    // set the LED with the ledState of the variable:
    digitalWrite(ledPin, ledState);
  }
}
```

コードをボードにアップロードすると、シリアルモニターで以下のような結果が得られるはずです：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/4.png"/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
