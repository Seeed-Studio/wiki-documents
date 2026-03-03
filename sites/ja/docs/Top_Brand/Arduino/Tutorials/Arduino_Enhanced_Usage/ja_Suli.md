---
description: Suli
title: Suli
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Suli
last_update:
  date: 05/15/2025
  author: hushuxu
---


## Suliとは何か

女の子の名前のように聞こえますか？実際には、Seeed Unified Library Interface（Seeed統一ライブラリインターフェース）を意味します。これは、近い将来に取り組むべき重要な課題の一つです。

私たちは何百ものセンサー、アクチュエーター、ディスプレイ、その他の便利なモジュールを持っています。過去には主にArduinoアプリケーションに焦点を当て、Arduinoライブラリのみを提供していました。つまり、Raspberry、LauchPad、MCS51などの別のプラットフォームを使用する場合、私たちのライブラリを移植する必要があり、時にはそれが簡単ではありませんでした。

時々、顧客が非Arduinoプラットフォーム用のライブラリを提供するよう求めてきたとき、私たちができることは「すみません、Arduinoライブラリしかありません」と答えることだけでした。このように顧客に返答するのは気分が良くありませんでした。

そこで、私たちはライブラリをすべてのプラットフォームに適合させる方法があるのではないかと考えました。それは非常に困難な課題ですが、不可能ではありません。そして、最終的に解決策を見つけることができました。それがSuli – Seeed Unified Library Interfaceです。これにより、ほぼすべて（少なくとも90％）のライブラリが多くの一般的なプラットフォームに適合し、または移植を容易にすることができます。

## Suliはどのように機能するのか

以下の画像をご覧ください。

![](https://files.seeedstudio.com/wiki/Suli/img/Suli_layer2.jpg)

4つの円があり、最も内側がHW（ハードウェア）です。SuliはHWからリソースを呼び出します。例えば、GPIO、I2C、タイマー、UARTなどです。その後、Suli互換ライブラリ、そしてユーザーアプリケーションが続きます。私たちのすべてのライブラリはSuli関数のみを呼び出します。そのため、異なるプラットフォームに対してはSuliを移植するだけでライブラリを使用することができます。つまり、異なるプラットフォームにはそれぞれのSuliがあります。例えば、Arduino用のSuli、Mbed用のSuliなどです。

Suliに関するいくつかのポイント：

* 異なるプラットフォームには異なるSuliがあり、それぞれ特定のプラットフォーム用です。
* Suli互換ライブラリはプラットフォームに依存しません。
* Suli互換ライブラリはSuli内の関数を呼び出します。

Suliには2つのファイル、Suli.hとSuli.cpp（または.c）があります。そして、Suliは以下の関数を実装する必要があります。

**GPIOタイプ:**

```
typedef     int     IO_T;                           // IOタイプ
typedef     int     PIN_T;                          // ピン名
typedef     int     DIR_T;                          // ピン方向
typedef int ANALOG_T;                               // ピンアナログ
```

**GPIO状態:**

```
#define HAL_PIN_INPUT   INPUT          // INPUTとOUTPUTはArduino IDEで宣言されています
#define HAL_PIN_OUTPUT  OUTPUT
#define HAL_PIN_HIGH    HIGH           // HIGHとLOWはArduino IDEで宣言されています
#define HAL_PIN_LOW     LOW
```

**データタイプ:**
```
typedef signed char     int8;
typedef unsigned char   uint8;
typedef signed short    int16;
typedef unsigned short  uint16;
typedef signed long     int32;
typedef unsigned long   uint32;
```

**デジタルIO操作:**

```
void suli_pin_init(IO_T *pio, PIN_T pin);      // ピン初期化
void suli_pin_dir(IO_T *pio, DIR_T dir);       // ピン方向設定
void suli_pin_write(IO_T *pio, int16 state);   // ピン書き込み
int16 suli_pin_read(IO_T *pio);                // ピン読み取り
uint16 suli_pulse_in(IO_T *pio, uint8 state, uint32 timeout);
```

**アナログIO操作:**

```
void suli_analog_init(ANALOG_T * aio, PIN_T pin);
int16 suli_analog_read(ANALOG_T * aio);
```

**遅延:**

```
	void suli_delay_us(uint32 us);                 // マイクロ秒単位の遅延
	void suli_delay_ms(uint32 ms);                 // ミリ秒単位の遅延
```

**時間:**

```
	uint32 suli_millis(void);
	uint32 suli_micros(void);
```

**I2Cインターフェース:**

```
	void suli_i2c_init(void * i2c_device);
	uint8 suli_i2c_write(void * i2c_device, uint8 dev_addr, uint8 *data, uint8 len);
	uint8 suli_i2c_read(void * i2c_device, uint8 dev_addr, uint8 *buff, uint8 *len);
```

**UART:**

```
	void suli_uart_init(void * uart_device, int16 uart_num, uint32 baud);
	void suli_uart_send(void * uart_device, int16 uart_num, uint8 *data, uint16 len);
	void suli_uart_send_byte(void * uart_device, int16 uart_num, uint8 data);
	uint8 suli_uart_read_byte(void * uart_device, int16 uart_num);
	uint16 suli_uart_readable(void * uart_device, int16 uart_num);
```

SuliにはデジタルIO操作、アナログIO操作、I2C、UART機能が含まれています。非常に包括的ではないかもしれませんが、私の経験に基づけば、多くのライブラリにとって十分です。もちろん、将来的にさらに多くの機能が必要だと判明した場合には、それを追加する予定です。

## 次に何をするのか

私たちの計画は、すべてのSeeedライブラリをSuli互換にし、いくつかの一般的なプラットフォームのSuliを移植することです。これらのプラットフォームには、最初の段階でArduino、Mbed、Mesh Bee、Raspberry、LaunchPadが含まれます。この作業は6月までに完了する予定です。続報をお待ちください。

## 参考資料

- [SuliのGitリポジトリ](https://github.com/Seeed-Studio/Suli)

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>