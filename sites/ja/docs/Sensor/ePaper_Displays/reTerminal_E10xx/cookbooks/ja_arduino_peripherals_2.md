---
description: reTerminal E1001 / E1002 / E1003 / E1004 向け Arduino クックブック — PCF8563 RTC の読み書き、ディープスリープによる低消費電力戦略、PDM マイクによるオーディオ録音を SD カードへ保存（E1001 / E1002 / E1003）、および静電容量式タッチによる描画（E1003 のみ）。
title: 'Arduino クックブック: RTC、低消費電力、オーディオ & タッチ (reTerminal E シリーズ)'
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.webp
slug: /reterminal_e10xx_with_arduino_peripherals_2
sidebar_position: 3
sidebar_label: Arduino – RTC、電源、オーディオ & タッチ
last_update:
  date: 05/27/2026
  author: Citric
createdAt: '2026-05-27'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino_peripherals_2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Arduino クックブック: RTC、低消費電力、オーディオ & タッチ (reTerminal E シリーズ)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/246.png" style={{width:600, height:'auto'}}/></div>

:::tip このシリーズの他のクックブック
- **[Arduino Cookbook: ePaper Display](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino)** — ePaper 画面へのテキスト、グラフィックス、画像の描画。
- **[Arduino Cookbook: Onboard Peripherals](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino_peripherals)** — LED、ブザー、ボタン、SHT4x センサ、バッテリーモニタ、microSD カード、および SD カード画像パイプライン。
:::

## はじめに

これは reTerminal E シリーズ向け周辺機能クックブックの第 2 弾です。[最初の周辺機能クックブック](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino_peripherals) では基本的な I/O 周辺機能（LED、ブザー、ボタン、SHT4x、バッテリー、SD カード）を扱いましたが、このページではさらに高度な 4 つのトピックを掘り下げます：

- **リアルタイムクロック (RTC)** — CR1220 コイン電池でバックアップされたオンボードの **PCF8563** RTC チップにより、メインバッテリーが取り外されても時刻を保持します。
- **低消費電力モード** — ディープスリープ、ライトスリープ、および GPIO ウェイクアップ戦略により、バッテリー寿命を数日から数か月へと延ばします。
- **PDM マイクロフォン** — オンボードの PDM デジタルマイク（E1001 / E1002 / E1003 のみ。E1004 にはマイクはありません）から音声を取得し、WAV ファイルとして microSD カードに保存します。
- **タッチスクリーン** — E1003（10.3 インチモデル）に搭載された静電容量式タッチパネルを使用して、ePaper ディスプレイ上にドットを描画します。タッチパネルを搭載しているのは E1003 のみです。

このクックブックのすべてのサンプルスケッチは、[OSHW-reTerminal-Series-E-D](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D) リポジトリからのものです。RTC、低消費電力、マイクのスケッチは **追加ライブラリのインストールは不要** で、すべて ESP32 のビルトイン API を使用します。タッチのスケッチには **Seeed_GFX** ライブラリが必要です。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 必要なもの

このクックブックは reTerminal E シリーズに適用されます。手元にあるデバイスを選んでください：

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### 事前準備

以下のサンプルを実行する前に、次の準備ができている必要があります：

- **Arduino IDE** に **ESP32 ボードパッケージ**（PDM マイク用に 3.0 以上）をインストールし、ボードとして **XIAO_ESP32S3** を選択していること。
- Tools メニューで **PSRAM** を **OPI PSRAM** に、**Flash** を **8 MB** に設定していること。
- 動作する **USB-C データケーブル** があり、正しいシリアルポートを選択していること。
- デバイスに基本的なスケッチを書き込めることを確認していること — まだの場合は、[Arduino Cookbook: ePaper Display](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino#environmental-preparation) の環境セットアップを参照してください。

このクックブック内のすべてのスケッチは、**GPIO44 (RX) / GPIO43 (TX)** の `Serial1` を通じて **115200 ボー**でデバッグ情報を出力します。これはキャリア基板上の USB-UART ブリッジであり、Arduino IDE が自動的に開く USB-CDC の `Serial` では **ありません**。Arduino シリアルモニタを開き、一致するポートとボーレートを選択してログを確認してください。

### ハードウェア対応状況の概要

このクックブックのすべての機能が 4 つのモデルすべてで利用できるわけではありません。以下の表は、どの機能が使用できるかをまとめたものです：

<div class="table-center">
  <table align="center">
    <tr>
      <th>機能</th>
      <th>E1001</th>
      <th>E1002</th>
      <th>E1003</th>
      <th>E1004</th>
    </tr>
    <tr>
      <td>PCF8563 RTC（外付け、I2C 0x51、CR1220 バックアップ）</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>ディープスリープ / ライトスリープ</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>ボタンウェイクアップ（KEY0）</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>PDM マイク録音</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>静電容量式タッチパネル</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
  </table>
</div>

## リアルタイムクロック (RTC)

すべての reTerminal E シリーズモデルには、NXP 製のオンボード **PCF8563** リアルタイムクロックチップが搭載されており、専用の 32.768 kHz 水晶発振子と **CR1220 コイン電池** ホルダを備えています。これにより、メインバッテリーが取り外されたり完全に放電した場合でも時刻を保持できます。

:::warning 電池は同梱されていません — ご自身で取り付けてください
CR1220 コイン電池はデバイスには **同梱されていません**。CR1220 電池を別途購入し、RTC が電源のオン・オフをまたいで時刻を保持できるように、事前に取り付ける必要があります。
:::

### CR1220 電池の取り付け

CR1220 電池ホルダは **PCB の背面** にあります。分解手順はモデルによって少し異なります：

<Tabs>
<TabItem value="e1001_e1002" label="E1001 / E1002" default>

<div style={{textAlign:'center'}}>
<iframe style={{width:'80%', aspectRatio:'16/9'}} src="https://files.seeedstudio.com/wiki/reterminal_e10xx/res/rtc_1001_1002.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**ステップ 1 — デバイスの電源を切る**

USB-C ケーブルを取り外し、デバイスの電源が完全にオフになっていることを確認します。

**ステップ 2 — 背面カバーを取り外す**

背面パネルの 4 本のネジを外し、リアカバーを持ち上げて PCB を露出させます。

**ステップ 3 — 電池ホルダを探す**

PCB 上で CR1220 コイン電池ホルダ（`BT2` または `CR1220` と表示）を探します。

**ステップ 4 — 電池を挿入する**

CR1220 電池を **プラス (+) 面が上** になるようにホルダに入れます。カチッと音がして固定されるまで軽く押し込みます。

**ステップ 5 — 再組み立て**

背面カバーを元に戻し、4 本のネジを締めます。これで RTC は電池でバックアップされ、メイン電源が切断されても時刻を保持します。

</TabItem>
<TabItem value="e1003" label="E1003">

<div style={{textAlign:'center'}}>
<iframe style={{width:'80%', aspectRatio:'16/9'}} src="https://files.seeedstudio.com/wiki/reterminal_e10xx/res/rtc_1003.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**ステップ 1 — デバイスの電源を切る**

USB-C ケーブルを取り外し、デバイスの電源が完全にオフになっていることを確認します。

**ステップ 2 — 背面カバーを取り外す**

背面パネルのネジを外し、リアカバーを持ち上げて PCB を露出させます。

**ステップ 3 — 電池ホルダを探す**

PCB 上で CR1220 コイン電池ホルダー（`BT2` または `CR1220` と表示）を見つけます。

**ステップ 4 — 電池を挿入する**

CR1220 電池を、**プラス（+）側が上**になるようにホルダーに入れます。カチッとはまるまで優しく押し込んでください。

**ステップ 5 — 再組み立て**

背面カバーを元に戻し、ネジを締めます。これで RTC はバックアップ電池で動作し、メイン電源が切断されても時刻を保持します。

</TabItem>
<TabItem value="e1004" label="E1004">

<div style={{textAlign:'center'}}>
<iframe style={{width:'80%', aspectRatio:'16/9'}} src="https://files.seeedstudio.com/wiki/reterminal_e10xx/res/rtc_1004.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**ステップ 1 — デバイスの電源を切る**

USB-C ケーブルを取り外し、デバイスの電源が完全に切れていることを確認します。

**ステップ 2 — 背面カバーを取り外す**

背面パネルの周囲にあるネジを外し、PCB が見えるように背面カバーを慎重に持ち上げて取り外します。

**ステップ 3 — 電池ホルダーの位置を確認する**

PCB 上で CR1220 コイン電池ホルダー（`BT2` または `CR1220` と表示）を見つけます。

**ステップ 4 — 電池を挿入する**

CR1220 電池を、**プラス（+）側が上**になるようにホルダーに入れます。カチッとはまるまで優しく押し込んでください。

**ステップ 5 — 再組み立て**

背面カバーを元に戻し、すべてのネジを締めます。これで RTC はバックアップ電池で動作し、メイン電源が切断されても時刻を保持します。

</TabItem>
</Tabs>

### ハードウェア概要

<div class="table-center">
  <table align="center">
    <tr>
      <th>パラメータ</th>
      <th>値</th>
    </tr>
    <tr>
      <td>チップ</td>
      <td>PCF8563M/TR (NXP)</td>
    </tr>
    <tr>
      <td>バス</td>
      <td>I2C — アドレス <strong>0x51</strong>（シリコン内で固定）</td>
    </tr>
    <tr>
      <td>SCL</td>
      <td>GPIO20</td>
    </tr>
    <tr>
      <td>SDA</td>
      <td>GPIO19</td>
    </tr>
    <tr>
      <td>水晶発振子</td>
      <td>32.768 kHz（OSCI / OSCO ピン）</td>
    </tr>
    <tr>
      <td>バックアップ電池</td>
      <td>CR1220 コイン電池 — メイン電源が切られている間も時刻を保持</td>
    </tr>
    <tr>
      <td>VL フラグ</td>
      <td>バックアップ電池の電圧が低すぎるときにチップによってセットされ、時刻が信頼できないことを示します</td>
    </tr>
  </table>
</div>

### 完全なスケッチ: RTC_PCF8563

完全なスケッチはリポジトリで利用できます：[`examples/RTC_PCF8563/RTC_PCF8563.ino`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/blob/main/examples/RTC_PCF8563/RTC_PCF8563.ino)。

<details>
<summary>クリックして RTC_PCF8563.ino の完全なコードを展開</summary>

```cpp
// ============================================================
// USER CONFIGURATION
// ============================================================

// --- How to set the initial time ---
//
// OPTION A — Compile-time (recommended):
//   Uncomment USE_COMPILE_TIME.  The C compiler embeds __DATE__ / __TIME__
//   (the exact moment you clicked "Upload") into the binary automatically.
//   No need to type the date by hand — just compile and flash.
//
#define USE_COMPILE_TIME
//
// OPTION B — Manual:
//   Comment out USE_COMPILE_TIME above, then fill in the values below.
//   INITIAL_YEAR must be in the range 2000–2099.
#define INITIAL_YEAR   2026
#define INITIAL_MONTH     5   // 1–12
#define INITIAL_DAY      26   // 1–31
#define INITIAL_HOUR     14   // 0–23
#define INITIAL_MIN       0   // 0–59
#define INITIAL_SEC       0   // 0–59

// --- When to write the time ---
//
// You do NOT need to touch anything here for normal use.
//
// How it works automatically:
//   • New board / battery just replaced → PCF8563 sets VL=1 internally
//     → code detects VL=1 at boot → writes the initial time once → done.
//   • Every reboot after that (battery healthy, VL=0)
//     → stored time is kept, nothing is overwritten.
//
// FORCE_SET_TIME is only for manual re-calibration (e.g. correcting drift).
// If you uncomment it, the clock is overwritten on EVERY boot — make sure
// to comment it out again and re-flash right after calibrating.
//
// #define FORCE_SET_TIME

// ============================================================
// END OF USER CONFIGURATION — no need to edit below this line
// ============================================================

#include <Wire.h>
#include <time.h>
#include <sys/time.h>

// ============================================================
// RtcTime — carries all date/time fields returned by rtcGetTime().
//
// Defined here, right after the #includes, so that Arduino IDE's
// automatic function-prototype injection (which is inserted after
// the last #include) can see the type before using it in prototypes
// like  static bool rtcGetTime(RtcTime &rt).
// ============================================================
struct RtcTime {
    int  year;       // full year (e.g. 2026)
    int  month;      // 1–12
    int  day;        // 1–31
    int  weekday;    // 0=Sunday … 6=Saturday
    int  hour;       // 0–23
    int  minute;     // 0–59
    int  second;     // 0–59
    bool voltageOK;  // false → VL flag set, battery was drained, time unreliable
};

// ---------- Serial debug (carrier USB-UART bridge) ----------
#define PIN_SERIAL_RX   44
#define PIN_SERIAL_TX   43
#define LOG             Serial1

// ---------- I2C pins (identical on all E1001 / E1002 / E1003 / E1004) --------
#define PIN_I2C_SCL     20   // ESP_IO20 / I2C0_SCL
#define PIN_I2C_SDA     19   // ESP_IO19 / I2C0_SDA

// ---------- PCF8563 I2C address (7-bit, fixed in hardware) -------------------
#define PCF8563_ADDR    0x51

// ---------- PCF8563 register map (only the registers used here) --------------
#define REG_CTRL1       0x00   // Control/Status 1 — bit5 STOP halts the clock
#define REG_CTRL2       0x01   // Control/Status 2
#define REG_SECONDS     0x02   // bit7 = VL (voltage-low flag); bits6:0 = seconds
#define REG_MINUTES     0x03   // bits6:0 = minutes
#define REG_HOURS       0x04   // bits5:0 = hours
#define REG_DAYS        0x05   // bits5:0 = day-of-month
#define REG_WEEKDAYS    0x06   // bits2:0 = weekday (0=Sunday)
#define REG_MONTHS      0x07   // bit7 = century (0→2000s, 1→1900s); bits4:0 = month
#define REG_YEARS       0x08   // bits7:0 = year within century (BCD, 00–99)
#define REG_CLKOUT      0x0D   // CLKOUT control — bit7 FE enables clock output pin

// ============================================================
// BCD ↔ decimal conversion
// The PCF8563 stores all time fields in BCD (Binary-Coded Decimal):
//   e.g. decimal 26 → upper nibble=2, lower nibble=6 → 0x26
// ============================================================
static inline uint8_t bcdToDec(uint8_t bcd)
{
    return static_cast<uint8_t>(((bcd >> 4) * 10U) + (bcd & 0x0FU));
}

static inline uint8_t decToBcd(uint8_t dec)
{
    return static_cast<uint8_t>(((dec / 10U) << 4) | (dec % 10U));
}

// ============================================================
// I2C read / write helpers
// ============================================================

// Read `len` consecutive registers starting at `reg` into `buf`.
// Uses a repeated-START (no STOP between write and read) as required by the
// PCF8563 data sheet.
static bool rtcReadRegs(uint8_t reg, uint8_t *buf, size_t len)
{
    Wire.beginTransmission(PCF8563_ADDR);
    Wire.write(reg);
    if (Wire.endTransmission(false) != 0) return false;   // repeated START

    const uint8_t received = Wire.requestFrom(static_cast<uint8_t>(PCF8563_ADDR),
                                              static_cast<uint8_t>(len));
    if (received != len) return false;

    for (size_t i = 0; i < len; i++) {
        buf[i] = static_cast<uint8_t>(Wire.read());
    }
    return true;
}

// Write a single register.
static bool rtcWriteReg(uint8_t reg, uint8_t value)
{
    Wire.beginTransmission(PCF8563_ADDR);
    Wire.write(reg);
    Wire.write(value);
    return Wire.endTransmission() == 0;
}

// ============================================================
// PCF8563 API
// ============================================================

// Check whether the chip responds on the I2C bus.
static bool rtcProbe()
{
    Wire.beginTransmission(PCF8563_ADDR);
    return Wire.endTransmission() == 0;
}

// Clear the STOP bit so the oscillator runs, and disable the CLKOUT pin
// (saves a small amount of power when the clock output is not needed).
static bool rtcInit()
{
    if (!rtcWriteReg(REG_CTRL1, 0x00)) return false;   // STOP=0 → run
    if (!rtcWriteReg(REG_CTRL2, 0x00)) return false;   // clear alarm/timer flags
    if (!rtcWriteReg(REG_CLKOUT, 0x00)) return false;  // FE=0 → disable CLKOUT
    return true;
}

// Return false if the voltage-low flag is set (time data is unreliable).
static bool rtcVoltageOK()
{
    uint8_t sec = 0;
    if (!rtcReadRegs(REG_SECONDS, &sec, 1)) return false;
    return (sec & 0x80U) == 0U;   // VL bit = 0 means voltage has been OK
}

// Write date and time to the RTC.
// `year` must be in the range 2000–2099.
// Weekday is computed automatically from the supplied date.
static bool rtcSetTime(int year, int month, int day,
                       int hour, int minute, int second)
{
    if (year  < 2000 || year  > 2099) return false;
    if (month < 1    || month > 12  ) return false;
    if (day   < 1    || day   > 31  ) return false;
    if (hour  < 0    || hour  > 23  ) return false;
    if (minute < 0   || minute > 59 ) return false;
    if (second < 0   || second > 59 ) return false;

    // Use mktime() to derive the weekday (0=Sunday) from the calendar date.
    struct tm t = {};
    t.tm_year = year - 1900;
    t.tm_mon  = month - 1;
    t.tm_mday = day;
    mktime(&t);   // fills t.tm_wday

    // Write all 7 time registers in one burst starting at REG_SECONDS.
    // The PCF8563 auto-increments the internal address pointer after each byte.
    Wire.beginTransmission(PCF8563_ADDR);
    Wire.write(REG_SECONDS);
    Wire.write(decToBcd(static_cast<uint8_t>(second)));
    Wire.write(decToBcd(static_cast<uint8_t>(minute)));
    Wire.write(decToBcd(static_cast<uint8_t>(hour)));
    Wire.write(decToBcd(static_cast<uint8_t>(day)));
    Wire.write(static_cast<uint8_t>(t.tm_wday));         // weekday is not BCD
    Wire.write(decToBcd(static_cast<uint8_t>(month)));   // century bit = 0 → 2000s
    Wire.write(decToBcd(static_cast<uint8_t>(year % 100)));
    return Wire.endTransmission() == 0;
}

// Read the current date and time from the RTC into an RtcTime struct.
static bool rtcGetTime(RtcTime &rt)
{
    uint8_t raw[7] = {};
    // Burst-read 7 bytes: seconds, minutes, hours, days, weekdays, months, years
    if (!rtcReadRegs(REG_SECONDS, raw, 7)) return false;

    rt.voltageOK = (raw[0] & 0x80U) == 0U;                // VL flag
    rt.second    = bcdToDec(raw[0] & 0x7FU);
    rt.minute    = bcdToDec(raw[1] & 0x7FU);
    rt.hour      = bcdToDec(raw[2] & 0x3FU);
    rt.day       = bcdToDec(raw[3] & 0x3FU);
    rt.weekday   = bcdToDec(raw[4] & 0x07U);
    rt.month     = bcdToDec(raw[5] & 0x1FU);

    const int yr = bcdToDec(raw[6]);
    // Century bit 1 in REG_MONTHS → 1900s, bit 0 → 2000s
    rt.year      = ((raw[5] & 0x80U) != 0U) ? (1900 + yr) : (2000 + yr);

    return true;
}

// ============================================================
// Sync the ESP32's POSIX system clock from the RTC.
// After calling this, standard C functions like time(), localtime(),
// and strftime() will return the correct time.
// ============================================================
static void syncSystemClock(const RtcTime &rt)
{
    struct tm t = {};
    t.tm_year = rt.year - 1900;
    t.tm_mon  = rt.month - 1;
    t.tm_mday = rt.day;
    t.tm_hour = rt.hour;
    t.tm_min  = rt.minute;
    t.tm_sec  = rt.second;
    const time_t epoch = mktime(&t);
    struct timeval tv  = { epoch, 0 };
    settimeofday(&tv, nullptr);
}

// ============================================================
// Compile-time timestamp parser
//
// The C preprocessor provides two string literals in every translation unit:
//   __DATE__  →  "May 26 2026"  (month name, day, 4-digit year)
//   __TIME__  →  "14:53:00"    (HH:MM:SS, 24-hour)
//
// We parse them here so callers get plain integers without any library.
// ============================================================
#ifdef USE_COMPILE_TIME
static void getCompileTime(int &year, int &month, int &day,
                           int &hour, int &minute, int &second)
{
    // Map the 3-letter month abbreviation to 1–12.
    // strncmp compares only the first 3 characters, so this is safe.
    const char *abbr  = __DATE__;       // "May 26 2026"
    const char *names = "JanFebMarAprMayJunJulAugSepOctNovDec";
    month = 1;
    for (int i = 0; i < 12; i++) {
        if (strncmp(abbr, names + i * 3, 3) == 0) { month = i + 1; break; }
    }

    // __DATE__ + 4  →  "26 2026"  (day starts at offset 4)
    // __DATE__ + 7  →  "2026"     (year starts at offset 7)
    day  = atoi(__DATE__ + 4);
    year = atoi(__DATE__ + 7);

    // __TIME__      →  "14:53:00"
    // __TIME__ + 3  →  "53:00"
    // __TIME__ + 6  →  "00"
    hour   = atoi(__TIME__);
    minute = atoi(__TIME__ + 3);
    second = atoi(__TIME__ + 6);
}
#endif  // USE_COMPILE_TIME

// ============================================================
// Helpers
// ============================================================
static const char *kWeekdayNames[] = {
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
};

// ============================================================
// Global state
// ============================================================
static unsigned long s_lastPrintMs = 0;

// ============================================================
// setup()
// ============================================================
void setup()
{
    // Use Serial1 (the USB-UART bridge on the carrier board, not USB-CDC).
    // GPIO43 = TX, GPIO44 = RX of the bridge chip.
    LOG.begin(115200, SERIAL_8N1, PIN_SERIAL_RX, PIN_SERIAL_TX);
    delay(500);

    LOG.println("=========================================");
    LOG.println("  RTC_PCF8563 — reTerminal E Series");
    LOG.println("=========================================");

    // ── Step 1: initialise I2C at 400 kHz (PCF8563 supports up to 400 kHz) ──
    Wire.begin(PIN_I2C_SDA, PIN_I2C_SCL);
    Wire.setClock(400000UL);
    LOG.printf("[I2C] Bus started: SDA=GPIO%d  SCL=GPIO%d  400 kHz\n",
               PIN_I2C_SDA, PIN_I2C_SCL);

    // ── Step 2: check the PCF8563 is reachable ──
    LOG.printf("[RTC] Probing PCF8563 at I2C address 0x%02X ...", PCF8563_ADDR);
    if (!rtcProbe()) {
        LOG.println(" NOT FOUND");
        LOG.println("[RTC] FATAL: check wiring and backup battery. Halting.");
        while (true) delay(1000);
    }
    LOG.println(" OK");

    // ── Step 3: clear STOP bit, disable CLKOUT ──
    if (!rtcInit()) {
        LOG.println("[RTC] FATAL: could not initialise PCF8563. Halting.");
        while (true) delay(1000);
    }

    // ── Step 4: decide whether the time needs to be set ──
    //
    // The VL (voltage-low) flag is stored inside the PCF8563 and survives
    // power cycles.  It is set by the chip whenever the backup battery
    // voltage has been too low to keep the clock running reliably.
    // We treat a set VL flag as "time is unknown and must be initialised".
    const bool voltageWasLow = !rtcVoltageOK();

#ifdef FORCE_SET_TIME
    const bool doSetTime = true;
    LOG.println("[RTC] FORCE_SET_TIME defined — overwriting RTC time.");
#else
    const bool doSetTime = voltageWasLow;
    if (voltageWasLow) {
        LOG.println("[RTC] WARNING: VL flag set — backup battery may be depleted.");
        LOG.println("[RTC] Time is unreliable; resetting to INITIAL_* constants.");
    } else {
        LOG.println("[RTC] Battery OK — retaining stored time.");
    }
#endif

    if (doSetTime) {
#ifdef USE_COMPILE_TIME
        // Parse the timestamp baked in at compile time.
        // __DATE__ / __TIME__ are evaluated by the C preprocessor during
        // compilation, so they reflect the moment "Upload" was clicked.
        int cy, cm, cd, ch, cmin, cs;
        getCompileTime(cy, cm, cd, ch, cmin, cs);
        LOG.printf("[RTC] Setting time from compile timestamp: "
                   "%04d-%02d-%02d  %02d:%02d:%02d\n",
                   cy, cm, cd, ch, cmin, cs);
        if (!rtcSetTime(cy, cm, cd, ch, cmin, cs)) {
            LOG.println("[RTC] ERROR: rtcSetTime() failed.");
        }
#else
        LOG.printf("[RTC] Setting time from INITIAL_* constants: "
                   "%04d-%02d-%02d  %02d:%02d:%02d\n",
                   INITIAL_YEAR, INITIAL_MONTH, INITIAL_DAY,
                   INITIAL_HOUR, INITIAL_MIN,   INITIAL_SEC);
        if (!rtcSetTime(INITIAL_YEAR, INITIAL_MONTH, INITIAL_DAY,
                        INITIAL_HOUR, INITIAL_MIN,   INITIAL_SEC)) {
            LOG.println("[RTC] ERROR: rtcSetTime() failed.");
        }
#endif
    }

    // ── Step 5: read back and sync the ESP32 system clock ──
    //
    // The ESP32 has its own software RTC that resets to Jan 1 1970 on each
    // power cycle.  By calling settimeofday() once at boot, we keep the
    // ESP32's POSIX time() / localtime() / strftime() in sync with the
    // hardware RTC so the rest of the firmware can use standard C time APIs.
    RtcTime rt;
    if (rtcGetTime(rt)) {
        syncSystemClock(rt);
        LOG.printf("[RTC] Current time: %04d-%02d-%02d (%s)  %02d:%02d:%02d\n",
                   rt.year, rt.month, rt.day, kWeekdayNames[rt.weekday],
                   rt.hour, rt.minute, rt.second);
        LOG.println("[RTC] ESP32 system clock synced.");
    } else {
        LOG.println("[RTC] ERROR: could not read time after init.");
    }

    LOG.println();
    LOG.println("[READY] Printing time every second.");
}

// ============================================================
// loop()
// ============================================================
void loop()
{
    const unsigned long now = millis();

    // Print time once per second (non-blocking: compare elapsed time instead
    // of calling delay(), so other tasks in loop() are never blocked).
    if (now - s_lastPrintMs >= 1000UL) {
        s_lastPrintMs = now;

        RtcTime rt;
        if (rtcGetTime(rt)) {
            // Show the time read directly from the hardware RTC.
            // The "[VL]" tag warns that the chip saw a low-voltage event.
            LOG.printf("[TIME] %04d-%02d-%02d (%s)  %02d:%02d:%02d%s\n",
                       rt.year, rt.month, rt.day,
                       kWeekdayNames[rt.weekday],
                       rt.hour, rt.minute, rt.second,
                       rt.voltageOK ? "" : "  [VL: battery low!]");

            // ── Optional: also print the time via the ESP32 POSIX API ──
            // This demonstrates that the system clock (synced at boot) is
            // ticking independently of the I2C bus.
            char buf[32];
            time_t epoch = time(nullptr);
            struct tm info;
            localtime_r(&epoch, &info);
            strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", &info);
            LOG.printf("[SYS ] ESP32 system time: %s\n", buf);

        } else {
            LOG.println("[RTC] ERROR: rtcGetTime() failed — check I2C bus.");
        }
    }
}
```

</details>

### コードの動作概要

このコードは、`setup()` 内で次の 5 ステップの初期化シーケンスに従います：

1. **I2C バスを初期化** — GPIO19（SDA）/ GPIO20（SCL）で 400 kHz に設定します。これは SHT4x センサと共有されている、reTerminal 標準の I2C ピンです。
2. **PCF8563 をプローブ** — アドレス 0x51 で応答を確認し、チップが動作していることを検証します。
3. **チップを初期化** — STOP ビットをクリア（発振器を動作させる）、アラームフラグをクリアし、消費電力を抑えるために CLKOUT ピンを無効化します。
4. **時刻を設定するかどうかを判断** — PCF8563 には、バックアップ電池の電圧が低下しすぎたときに自動的にセットされる **VL（Voltage Low）フラグ**があります。VL がセットされている場合（初回起動または電池交換後）、コードは初期時刻を書き込みます。そうでなければ保存されている時刻を維持します。
5. **ESP32 のシステムクロックを同期** — PCF8563 から時刻を読み取った後、`settimeofday()` を呼び出して、標準 C の時間関数（`time()`, `localtime()`, `strftime()`）が、その後のファームウェア全体で正しい時刻を返すようにします。

`loop()` は I2C 経由で 1 秒ごとに RTC を読み取り、フォーマットされた時刻を出力します。バックアップ電池の電圧が低い場合は `[VL]` タグが表示されます。

### 時刻設定オプション

| オプション | 有効化方法 | 動作 |
|---|---|---|
| **コンパイル時**（推奨） | `#define USE_COMPILE_TIME` | C プリプロセッサが `__DATE__` / `__TIME__`（Upload をクリックした瞬間）を埋め込みます。手間いらず — コンパイルして書き込むだけです。 |
| **手動** | `USE_COMPILE_TIME` をコメントアウトし、`INITIAL_*` 定数を設定 | 正確な日付と時刻を自分で入力します。オフライン環境で便利です。 |
| **強制上書き** | `#define FORCE_SET_TIME` | **毎回**の起動時に RTC を上書きします。再キャリブレーション時に使用し、その後コメントアウトして再書き込みします。 |

:::tip
VL フラグは電源サイクルをまたいで保持されます。一度時刻を設定し、CR1220 電池が健全であれば、PCF8563 はカウントを続け、以降の再起動では時刻は**上書きされません**。
:::

### 期待される出力

```
=========================================
  RTC_PCF8563 — reTerminal E Series
=========================================
[RTC] 2026-05-27 (Wed) 14:53:00
[READY] Printing time every second.
[TIME] 2026-05-27 (Wed) 14:53:01
[TIME] 2026-05-27 (Wed) 14:53:02
[TIME] 2026-05-27 (Wed) 14:53:03
```

バックアップ電池が消耗しているか装着されていない場合、`[VL: battery low!]` 警告が表示されます：

```
[RTC] WARNING: VL flag set — backup battery may be depleted.
[TIME] 2026-05-27 (Wed) 14:53:01  [VL: battery low!]
```

<!-- TODO: Insert serial monitor screenshot here -->

## 低消費電力モード

ESP32-S3 は複数の電源状態をサポートしています。バッテリー駆動の ePaper アプリケーションで最も有用なのは、**ディープスリープ**と**ライトスリープ**です：

<div class="table-center">
  <table align="center">
    <tr>
      <th>電源状態</th>
      <th>CPU</th>
      <th>Wi-Fi / BT</th>
      <th>RAM</th>
      <th>RTC</th>
      <th>ウェイクソース</th>
    </tr>
    <tr>
      <td><strong>Active</strong></td>
      <td>動作中</td>
      <td>オン</td>
      <td>すべて</td>
      <td>オン</td>
      <td>—</td>
    </tr>
    <tr>
      <td><strong>Light Sleep</strong></td>
      <td>一時停止</td>
      <td>オフ</td>
      <td>保持</td>
      <td>オン</td>
      <td>GPIO、タイマー</td>
    </tr>
    <tr>
      <td><strong>Deep Sleep</strong></td>
      <td>オフ</td>
      <td>オフ</td>
      <td>消失（RTC を除く）</td>
      <td>オン</td>
      <td>GPIO、タイマー、タッチ</td>
    </tr>
  </table>
</div>

### 完全なスケッチ：LowPower_DeepSleep

完全なスケッチはリポジトリで入手できます：[`examples/LowPower_DeepSleep/LowPower_DeepSleep.ino`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/blob/main/examples/LowPower_DeepSleep/LowPower_DeepSleep.ino)。

<details>
<summary>クリックして LowPower_DeepSleep.ino の全コードを展開</summary>

```cpp
// ============================================================
// USER CONFIGURATION
// ============================================================

// How many seconds to stay awake before entering deep sleep.
#define SLEEP_DELAY_SEC   5

// --- Wake-up button pin ---
// Uncomment the ONE line that matches your device.
// Only GPIO0–GPIO21 can wake the ESP32-S3 from deep sleep.
//
#define PIN_WAKE_BTN   3   // E1001 / E1002 / E1003 — KEY0
// #define PIN_WAKE_BTN   4   // E1004               — KEY0

// ============================================================
// END OF USER CONFIGURATION
// ============================================================

#include "esp_sleep.h"
#include "driver/rtc_io.h"

#define PIN_SERIAL_RX   44
#define PIN_SERIAL_TX   43
#define LOG             Serial1

// Survives deep sleep — increments on every wakeup.
RTC_DATA_ATTR static int s_bootCount = 0;

static const char* wakeupReason()
{
    switch (esp_sleep_get_wakeup_cause()) {
        case ESP_SLEEP_WAKEUP_EXT1:  return "GPIO button (EXT1)";
        default:                     return "power-on / manual reset";
    }
}

void setup()
{
    s_bootCount++;

    LOG.begin(115200, SERIAL_8N1, PIN_SERIAL_RX, PIN_SERIAL_TX);
    delay(100);

    LOG.println("========================================");
    LOG.println("  LowPower_DeepSleep — reTerminal E");
    LOG.println("========================================");
    LOG.printf("[WAKE] Boot #%d — wakeup: %s\n", s_bootCount, wakeupReason());
    LOG.printf("[WAKE] Entering deep sleep in %d seconds...\n", SLEEP_DELAY_SEC);
    LOG.printf("[WAKE] Press GPIO%d button to wake up.\n", PIN_WAKE_BTN);

    delay((uint32_t)SLEEP_DELAY_SEC * 1000);

    esp_sleep_enable_ext1_wakeup(1ULL << PIN_WAKE_BTN, ESP_EXT1_WAKEUP_ANY_LOW);

    // Normal GPIO pull-up is off during deep sleep; use keep-alive domain instead.
    rtc_gpio_pullup_en(static_cast<gpio_num_t>(PIN_WAKE_BTN));
    rtc_gpio_pulldown_dis(static_cast<gpio_num_t>(PIN_WAKE_BTN));

    LOG.println("[SLEEP] Entering deep sleep now.");
    LOG.flush();
    delay(10);

    esp_deep_sleep_start();
}

void loop()
{
    // esp_deep_sleep_start() in setup() never returns, so loop() is never reached.
    // If you see this message, deep sleep failed to start.
    LOG.println("[ERROR] deep sleep did not start!");
    delay(1000);
}
```

</details>

### コードの動作概要

1. **`setup()` が開始** — `RTC_DATA_ATTR` ブートカウンタをインクリメントします（この変数は ESP32-S3 の RTC メモリドメインに保持されるため、ディープスリープ後も残ります）。
2. **ステータスを表示** — ブート回数と、チップが起床した理由（GPIO ボタンか電源オンリセットか）を表示します。
3. **`SLEEP_DELAY_SEC` 秒待機**（デフォルト 5 秒）— シリアル出力を読む時間を確保します。
4. **ウェイクアップソースを設定** — `esp_sleep_enable_ext1_wakeup()` でボタンピン（KEY0）を登録します。ボタンはハードウェアプルアップでアクティブ Low なので、ウェイクアップレベルは `LOW` です。
5. **RTC プルアップを有効化** — 通常の GPIO プルアップはディープスリープ中は無効になります。`rtc_gpio_pullup_en()` は RTC ドメインのプルアップを使用して、スリープ中もボタンラインを HIGH に保ちます。
6. **ディープスリープへ移行** — `esp_deep_sleep_start()` により RTC ドメイン以外のすべての電源がオフになります。電流は **約 14 µA** まで低下します。
7. **ボタンが押されると** — RTC ドメインが GPIO の立下りエッジを検出し、チップが再起動して `setup()` がステップ 1 から再度実行されます。

:::tip ディープスリープが動作しているか確認する方法
`loop()` には、本来は**決して**実行されてはならない print 文が含まれています。シリアルモニタに `[ERROR] deep sleep did not start!` と表示される場合、ディープスリープは失敗しています。`[SLEEP]` の後に何も表示されない場合は、デバイスが本当にスリープ状態にあることを意味します。
:::

### ボタンウェイクアップピンの選択

ウェイクアップボタンは、GPIO の配置の違いによりモデルごとに異なります：

| モデル | ウェイクアップピン | `PIN_WAKE_BTN` | 備考 |
|---|---|---|---|
| **E1001 / E1002 / E1003** | GPIO3 (KEY0) | `3` | 右側のボタン（E1001/E1002 では緑のボタン） |
| **E1004** | GPIO4 (KEY0) | `4` | 右方向ボタン（フロントパネル） |

書き込み前に、USER CONFIGURATION セクション内で該当する行のコメントを外してください。

### 期待される出力

初回起動（電源オン）：

```
========================================
  LowPower_DeepSleep — reTerminal E
========================================
[WAKE] Boot #1 — wakeup: power-on / manual reset
[WAKE] Entering deep sleep in 5 seconds...
[WAKE] Press GPIO3 button to wake up.
[SLEEP] Entering deep sleep now.
```

KEY0 を押してウェイクアップした後：

```
========================================
  LowPower_DeepSleep — reTerminal E
========================================
[WAKE] Boot #2 — wakeup: GPIO button (EXT1)
[WAKE] Entering deep sleep in 5 seconds...
[WAKE] Press GPIO3 button to wake up.
[SLEEP] Entering deep sleep now.
```

<!-- TODO: Insert serial monitor screenshot here -->

### Wake → Work → Sleep パターン

ePaper アプリケーションでよく使われるパターンは次のとおりです：

1. **ディープスリープからウェイクアップ**（タイマーまたはボタン）。
2. **RTC を読み取る** — タイムスタンプ用。
3. **センサを読み取る**（SHT4x、バッテリーなど）。
4. **必要に応じて Wi-Fi に接続し、データを取得**。
5. **ePaper ディスプレイを更新** — 新しい情報を表示します。
6. **次回のスケジュールされたウェイクアップまでディープスリープに戻る**。

ボタンウェイクアップに加えて**タイマーウェイクアップ**を追加するには、次の行を追加するだけです：

```cpp
esp_sleep_enable_timer_wakeup(30 * 60 * 1000000ULL);  // 30 minutes
```

`esp_deep_sleep_start()` を呼び出す前に追加してください。両方のウェイクソースを同時に有効にできますが、先にトリガーされた方が優先されます。

## マイク（E1001 / E1002 / E1003）

:::caution E1004 にはマイクがありません
reTerminal **E1004** にはオンボードマイクが搭載されていません。このセクションのサンプルは **E1001、E1002、E1003** のみに適用されます。E1004 を使用している場合は、このセクションをスキップしてください。
:::

reTerminal E1001 / E1002 / E1003 には、オンボードの **PDM（Pulse Density Modulation）** デジタルマイクが搭載されています。PDM マイクは 1 ビットのシグマデルタストリームを出力し、ESP32-S3 内蔵の PDM ペリフェラルによってデコードされます — 外付けのコーデックチップは不要です。

### ハードウェア概要

<div class="table-center">
  <table align="center">
    <tr>
      <th>信号</th>
      <th>GPIO ピン</th>
      <th>説明</th>
    </tr>
    <tr>
      <td>PDM_CLK</td>
      <td>GPIO42</td>
      <td>マイクへのクロック出力</td>
    </tr>
    <tr>
      <td>PDM_DATA</td>
      <td>GPIO41</td>
      <td>マイクからの 1 ビットデータ入力</td>
    </tr>
    <tr>
      <td>MIC_PWR_EN</td>
      <td>GPIO38</td>
      <td>マイク電源イネーブル（アクティブ HIGH）— 使用前に必ず HIGH に駆動する必要があります</td>
    </tr>
  </table>
</div>

ピン配置は E1001、E1002、E1003 の間で同一です。マイク電源イネーブルピン（`GPIO38`）はロードスイッチ（TPS22916CYFPR）を制御します — 録音前に **必ず** HIGH に駆動し、録音後は電力節約のために LOW に戻すことができます。

:::note Arduino ESP32 ≥ 3.0 が必要
このスケッチは ESP-IDF 5.x の PDM-RX API（`driver/i2s_pdm.h`）を使用しており、これは Arduino ESP32 コア バージョン 3.0 以降でのみ利用可能です。ボードパッケージが最新であることを確認してください。
:::

### 完全なスケッチ：MicRecordToSD

完全なスケッチはリポジトリで入手できます：[`examples/MicRecordToSD/MicRecordToSD.ino`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/blob/main/examples/MicRecordToSD/MicRecordToSD.ino)。

<details>
<summary>MicRecordToSD.ino の完全なコードを表示するにはクリック</summary>

```cpp
// ============================================================
// USER CONFIGURATION
// ============================================================

// Uncomment ONE line to select your hardware model:
// #define DEVICE_E1001_E1002   // reTerminal E1001 or E1002
#define DEVICE_E1003      // reTerminal E1003

// Recording parameters
#define SAMPLE_RATE      16000U  // Sample rate in Hz (8000 / 16000 / 44100)
#define MAX_RECORD_SECS  30      // Auto-stop after this many seconds (0 = unlimited)
#define RECORD_DIR       "/REC"  // Directory on the SD card root

// ============================================================
// END OF USER CONFIGURATION — no need to edit below this line
// ============================================================

#include <SD.h>
#include <SPI.h>
#include <driver/i2s_pdm.h>    // ESP-IDF 5.x PDM-RX API (Arduino ESP32 >= 3.0)
#include <driver/i2s_common.h>

// ---------- Serial debug ---------
#define PIN_SERIAL_RX   44
#define PIN_SERIAL_TX   43
#define LOG             Serial1

// ---------- PDM Microphone -------
// Same on E1001, E1002, and E1003.
#define PIN_MIC_CLK     42   // GPIO42 — PDM_CLK  (R109 in schematic)
#define PIN_MIC_DATA    41   // GPIO41 — PDM_DATA (R110 in schematic)
#define PIN_MIC_PWR_EN  38   // GPIO38 — MIC power enable (TPS22916CYFPR EN, ESP_IO3B)

// ---------- SD Card --------------
// SPI bus is shared with the ePaper display; a separate CS keeps them independent.
#define PIN_SD_DET       15  // Card detect (LOW = card present)
#define PIN_SD_CS        14  // SPI Chip Select
#define PIN_SD_MISO       8
#define PIN_SD_MOSI       9
#define PIN_SD_SCK        7

// ---------- User Button ----------
#define PIN_BTN_KEY0      3  // KEY0 — active LOW (hardware pull-up)

// ---------- Model-specific pins --
#if defined(DEVICE_E1001_E1002)
  #define PIN_SD_EN    16    // GPIO16 — SD card power enable
  #define PIN_LED       6    // GPIO6  — onboard LED (inverted: LOW = ON)
#elif defined(DEVICE_E1003)
  #define PIN_SD_EN    39    // GPIO39 — SD card power enable
  #define PIN_LED      16    // GPIO16 — onboard LED (inverted: LOW = ON)
#else
  #error "Please define DEVICE_E1001_E1002 or DEVICE_E1003 in the USER CONFIGURATION section."
#endif

// ---------- I2S / Audio ----------
#define I2S_PORT          I2S_NUM_0
#define DMA_BUF_COUNT     8     // number of DMA descriptors
#define DMA_BUF_LEN       512   // frames per DMA descriptor
#define BITS_PER_SAMPLE   16
#define AUDIO_CHANNELS    1
#define BYTES_PER_SAMPLE  (BITS_PER_SAMPLE / 8)
#define BYTES_PER_SEC     (SAMPLE_RATE * AUDIO_CHANNELS * BYTES_PER_SAMPLE)

// Single-read chunk: matches one DMA buffer (512 frames × 2 bytes = 1024 bytes)
#define READ_BUF_BYTES    (DMA_BUF_LEN * BYTES_PER_SAMPLE)
static uint8_t s_dmaBuf[READ_BUF_BYTES];

// ============================================================
// WAV file header (44 bytes, little-endian)
// ============================================================
#pragma pack(push, 1)
struct WavHeader {
    // RIFF chunk
    char     riffTag[4];      // "RIFF"
    uint32_t riffSize;        // file size − 8
    char     waveTag[4];      // "WAVE"
    // fmt sub-chunk
    char     fmtTag[4];       // "fmt "
    uint32_t fmtSize;         // 16 for PCM
    uint16_t audioFormat;     // 1 = PCM
    uint16_t numChannels;     // 1 = mono
    uint32_t sampleRate;
    uint32_t byteRate;        // sampleRate × channels × bytesPerSample
    uint16_t blockAlign;      // channels × bytesPerSample
    uint16_t bitsPerSample;
    // data sub-chunk
    char     dataTag[4];      // "data"
    uint32_t dataSize;        // audio payload in bytes
};
#pragma pack(pop)

static_assert(sizeof(WavHeader) == 44, "WavHeader must be 44 bytes");

// ============================================================
// Global state
// ============================================================
static i2s_chan_handle_t s_rxHandle    = nullptr;  // ESP-IDF 5.x channel handle
static SPIClass          s_spiSD(HSPI);
static File        s_wavFile;
static bool        s_recording     = false;
static uint32_t    s_recordedBytes = 0;
static uint32_t    s_fileIndex     = 1;

// Button debounce
static bool          s_lastRawBtn    = HIGH;
static bool          s_stableBtn     = HIGH;
static unsigned long s_debounceMs    = 0;
static const unsigned long DEBOUNCE_DELAY = 50;

// LED blink
static unsigned long s_lastBlinkMs  = 0;
static bool          s_ledState     = false;

// ============================================================
// LED helpers (inverted logic)
// ============================================================
static void ledOn()  { digitalWrite(PIN_LED, LOW);  }
static void ledOff() { digitalWrite(PIN_LED, HIGH); }

// ============================================================
// WAV helpers
// ============================================================
static void writeWavHeader(File& f, uint32_t dataBytes)
{
    WavHeader h;
    memcpy(h.riffTag,  "RIFF", 4);
    h.riffSize     = 36 + dataBytes;
    memcpy(h.waveTag,  "WAVE", 4);
    memcpy(h.fmtTag,   "fmt ", 4);
    h.fmtSize      = 16;
    h.audioFormat  = 1;
    h.numChannels  = AUDIO_CHANNELS;
    h.sampleRate   = SAMPLE_RATE;
    h.byteRate     = BYTES_PER_SEC;
    h.blockAlign   = AUDIO_CHANNELS * BYTES_PER_SAMPLE;
    h.bitsPerSample = BITS_PER_SAMPLE;
    memcpy(h.dataTag,  "data", 4);
    h.dataSize     = dataBytes;
    f.write(reinterpret_cast<const uint8_t*>(&h), sizeof(h));
}

// ============================================================
// SD card helpers
// ============================================================
static bool mountSD()
{
    pinMode(PIN_SD_EN, OUTPUT);
    digitalWrite(PIN_SD_EN, HIGH);
    delay(10);

    s_spiSD.end();
    s_spiSD.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, PIN_SD_CS);

    if (!SD.begin(PIN_SD_CS, s_spiSD)) {
        LOG.println("[SD] Initialization failed — check card and formatting (FAT32).");
        return false;
    }
    LOG.printf("[SD] Mounted. Type: %s  Size: %llu MB\n",
               SD.cardType() == CARD_SDHC ? "SDHC" : "SD",
               SD.cardSize() / (1024ULL * 1024ULL));
    return true;
}

static String nextFilename()
{
    if (!SD.exists(RECORD_DIR)) {
        SD.mkdir(RECORD_DIR);
    }
    char buf[32];
    while (true) {
        snprintf(buf, sizeof(buf), "%s/REC_%04u.WAV", RECORD_DIR, s_fileIndex);
        if (!SD.exists(buf)) break;
        s_fileIndex++;
        if (s_fileIndex > 9999) s_fileIndex = 1;
    }
    return String(buf);
}

// ============================================================
// PDM / I2S helpers  (ESP-IDF 5.x new-API, Arduino ESP32 >= 3.0)
// ============================================================
static bool initMic()
{
    // ── Step 1: power up the microphone via the load switch ──
    LOG.println("[MIC] Powering on microphone...");
    pinMode(PIN_MIC_PWR_EN, OUTPUT);
    digitalWrite(PIN_MIC_PWR_EN, HIGH);
    delay(50);  // give the LDO and PDM decimation filter time to start up

    // ── Step 2: create an I2S RX channel ──
    LOG.println("[MIC] Creating I2S channel...");
    i2s_chan_config_t chanCfg = I2S_CHANNEL_DEFAULT_CONFIG(I2S_NUM_0, I2S_ROLE_MASTER);
    chanCfg.dma_desc_num  = DMA_BUF_COUNT;
    chanCfg.dma_frame_num = DMA_BUF_LEN;
    chanCfg.auto_clear    = true;

    esp_err_t err = i2s_new_channel(&chanCfg, nullptr, &s_rxHandle);
    if (err != ESP_OK) {
        LOG.printf("[MIC] i2s_new_channel failed: 0x%x\n", err);
        return false;
    }

    // ── Step 3: configure PDM-RX mode ──
    LOG.println("[MIC] Configuring PDM-RX mode...");
    i2s_pdm_rx_config_t pdmCfg = {};
    pdmCfg.clk_cfg  = I2S_PDM_RX_CLK_DEFAULT_CONFIG(SAMPLE_RATE);
    pdmCfg.slot_cfg = I2S_PDM_RX_SLOT_DEFAULT_CONFIG(I2S_DATA_BIT_WIDTH_16BIT,
                                                      I2S_SLOT_MODE_MONO);
    pdmCfg.gpio_cfg.clk             = static_cast<gpio_num_t>(PIN_MIC_CLK);
    pdmCfg.gpio_cfg.din             = static_cast<gpio_num_t>(PIN_MIC_DATA);
    pdmCfg.gpio_cfg.invert_flags.clk_inv = false;

    err = i2s_channel_init_pdm_rx_mode(s_rxHandle, &pdmCfg);
    if (err != ESP_OK) {
        LOG.printf("[MIC] i2s_channel_init_pdm_rx_mode failed: 0x%x\n", err);
        i2s_del_channel(s_rxHandle);
        s_rxHandle = nullptr;
        return false;
    }

    // ── Step 4: enable (starts the clock and DMA) ──
    LOG.println("[MIC] Enabling channel...");
    err = i2s_channel_enable(s_rxHandle);
    if (err != ESP_OK) {
        LOG.printf("[MIC] i2s_channel_enable failed: 0x%x\n", err);
        i2s_del_channel(s_rxHandle);
        s_rxHandle = nullptr;
        return false;
    }

    // ── Step 5: warm-up — discard a few DMA buffers with a finite timeout ──
    // The PDM decimation filter needs several milliseconds to settle.
    // Using a 500 ms timeout instead of portMAX_DELAY prevents hanging if
    // the hardware is not producing data for any reason.
    LOG.println("[MIC] Warming up PDM filter...");
    size_t dummy;
    for (int i = 0; i < 3; i++) {
        i2s_channel_read(s_rxHandle, s_dmaBuf, sizeof(s_dmaBuf),
                         &dummy, pdMS_TO_TICKS(500));
    }

    LOG.printf("[MIC] PDM initialized. Rate=%u Hz  Bits=%d  CLK=GPIO%d  DATA=GPIO%d\n",
               SAMPLE_RATE, BITS_PER_SAMPLE, PIN_MIC_CLK, PIN_MIC_DATA);
    return true;
}

// ============================================================
// Recording control
// ============================================================
static bool startRecording()
{
    String fname = nextFilename();
    s_wavFile = SD.open(fname, FILE_WRITE);
    if (!s_wavFile) {
        LOG.printf("[REC] Cannot create file: %s\n", fname.c_str());
        return false;
    }
    writeWavHeader(s_wavFile, 0);   // placeholder — filled in when recording stops
    s_recordedBytes = 0;
    s_recording     = true;
    ledOn();
    LOG.printf("[REC] Recording started → %s\n", fname.c_str());
    return true;
}

static void stopRecording()
{
    s_recording = false;
    ledOff();

    // Seek back to the beginning and rewrite the header with the real data size.
    s_wavFile.seek(0);
    writeWavHeader(s_wavFile, s_recordedBytes);
    s_wavFile.close();

    float seconds = static_cast<float>(s_recordedBytes) / BYTES_PER_SEC;
    LOG.printf("[REC] Recording stopped. %u bytes saved (%.1f s).\n",
               s_recordedBytes, seconds);
    s_fileIndex++;
}

// ============================================================
// setup()
// ============================================================
void setup()
{
    LOG.begin(115200, SERIAL_8N1, PIN_SERIAL_RX, PIN_SERIAL_TX);
    delay(500);   // brief pause for the serial bridge to enumerate

    LOG.println("=========================================");
    LOG.println("  MicRecordToSD — reTerminal E Series");
#if defined(DEVICE_E1001_E1002)
    LOG.println("  Device: E1001 / E1002");
#else
    LOG.println("  Device: E1003");
#endif
    LOG.println("=========================================");

    // LED
    pinMode(PIN_LED, OUTPUT);
    ledOff();

    // Startup blink to confirm power-on
    for (int i = 0; i < 3; i++) {
        ledOn();  delay(100);
        ledOff(); delay(100);
    }

    // User button (hardware pull-up, active LOW)
    pinMode(PIN_BTN_KEY0, INPUT);

    // SD card
    LOG.println("[SD] Mounting...");
    if (!mountSD()) {
        LOG.println("[SD] FATAL: could not mount SD card. Halting.");
        while (true) { delay(1000); }
    }

    // PDM microphone
    LOG.println("[MIC] Initializing PDM microphone...");
    if (!initMic()) {
        LOG.println("[MIC] FATAL: microphone init failed. Halting.");
        while (true) { delay(1000); }
    }

    LOG.println();
    LOG.printf("[READY] Press KEY0 to start recording (max %d s).\n", MAX_RECORD_SECS);
    LOG.printf("[READY] Files will be saved to %s/REC_XXXX.WAV\n", RECORD_DIR);
}

// ============================================================
// loop()
// ============================================================
void loop()
{
    // -------------------------------------------------------
    // Debounced button handling
    // -------------------------------------------------------
    const bool rawBtn = digitalRead(PIN_BTN_KEY0);
    if (rawBtn != s_lastRawBtn) {
        s_debounceMs = millis();
        s_lastRawBtn = rawBtn;
    }
    if ((millis() - s_debounceMs) > DEBOUNCE_DELAY && rawBtn != s_stableBtn) {
        s_stableBtn = rawBtn;
        if (s_stableBtn == LOW) {   // falling edge = button pressed
            if (!s_recording) {
                startRecording();
            } else {
                stopRecording();
            }
        }
    }

    // -------------------------------------------------------
    // Audio capture (only while recording)
    // -------------------------------------------------------
    if (s_recording) {
        size_t bytesRead = 0;
        // Use a 200 ms timeout so the button check in the next loop iteration
        // is still reached even if the DMA is unexpectedly slow.
        const esp_err_t err = i2s_channel_read(s_rxHandle, s_dmaBuf, sizeof(s_dmaBuf),
                                               &bytesRead, pdMS_TO_TICKS(200));
        if (err == ESP_OK && bytesRead > 0) {
            s_wavFile.write(s_dmaBuf, bytesRead);
            s_recordedBytes += bytesRead;
        } else if (err != ESP_OK && err != ESP_ERR_TIMEOUT) {
            LOG.printf("[REC] i2s_channel_read error: 0x%x — stopping.\n", err);
            stopRecording();
            return;
        }

        // Auto-stop when MAX_RECORD_SECS is reached
        if (MAX_RECORD_SECS > 0 && s_recordedBytes >= static_cast<uint32_t>(BYTES_PER_SEC) * MAX_RECORD_SECS) {
            LOG.println("[REC] Maximum duration reached — stopping automatically.");
            stopRecording();
            return;
        }

        // LED blink at 500 ms period while recording
        const unsigned long now = millis();
        if (now - s_lastBlinkMs >= 500) {
            s_lastBlinkMs = now;
            s_ledState    = !s_ledState;
            if (s_ledState) ledOn(); else ledOff();
        }
    }
}
```

</details>

### コードの動作概要

**初期化シーケンス（`setup()`）:**

1. **起動時の点滅** — 電源投入を確認するため、オンボード LED が 3 回点滅します。
2. **SD カードのマウント** — `PIN_SD_EN` を介して SD スロットに電源を供給し、HSPI バスを初期化してから `SD.begin()` を呼び出します。
3. **PDM マイクの初期化** — これは 4 段階のプロセスです：
   - `PIN_MIC_PWR_EN`（GPIO38）を介してマイクに**電源を投入** — TPS22916 ロードスイッチを HIGH に駆動します。
   - `i2s_new_channel()` を使用して **I2S チャンネルを作成** します。
   - `i2s_channel_init_pdm_rx_mode()` で **PDM-RX モードを設定** — サンプリングレート、ビット深度（16 ビット）、モノラルモード、および GPIO ピンを設定します。
   - **有効化とウォームアップ** — `i2s_channel_enable()` でクロックを開始し、その後 3 個の DMA バッファを読み出して破棄し、シグマデルタ減算フィルタが安定するまで待ちます。

**録音ループ（`loop()`）:**

1. **ボタンのデバウンス** — KEY0 を 50 ms のデバウンス時間で読み取ります。立下りエッジ（押されたとき）で：
   - 録音中でない場合 → 録音を**開始**（WAV ファイルを作成し、プレースホルダのヘッダを書き込み）。
   - 録音中の場合 → 録音を**停止**（実際のサイズでヘッダを書き換え、ファイルをクローズ）。
2. **オーディオキャプチャ** — `i2s_channel_read()` が 1 回につき 1 個の DMA バッファ（512 サンプル = 1024 バイト）を 200 ms のタイムアウト付きで読み取ります。データは直接 SD カードに書き込まれます。
3. **自動停止** — `MAX_RECORD_SECS` に達すると、録音は自動的に停止します。
4. **LED 点滅** — 録音がアクティブな間、LED は 500 ms 間隔で点滅します。

### モデル別設定

このスケッチでは、USER CONFIGURATION セクション内の `#define` を **1 つだけ** アンコメントする必要があります：

| モデル | `#define` | SD_EN ピン | LED ピン |
|---|---|---|---|
| E1001 / E1002 | `DEVICE_E1001_E1002` | GPIO16 | GPIO6 |
| E1003 | `DEVICE_E1003` | GPIO39 | GPIO16 |

### SD カードの準備

microSD カードの挿入とフォーマット手順については、最初のペリフェラルクックブックの **[Using the MicroSD Card](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino_peripherals#using-the-microsd-card)** セクションを参照してください。

:::note
reTerminal E シリーズは、**64 GB** までの microSD カードをサポートし、**FAT32** 形式でフォーマットする必要があります。
:::

:::tip E1004 は SD カードを装着済みで出荷されます
reTerminal **E1004** には、microSD カードがあらかじめ挿入されています。別途購入したり取り付けたりする必要はありません。その他のモデル（E1001 / E1002 / E1003）の場合は、自分でカードを挿入する必要があります。
:::

クイック準備手順：

1. microSD カードを **FAT32** でフォーマットします（E1004 でプリインストール済みのカードを使用する場合はこの手順をスキップ）。
2. スケッチは、最初の録音時に自動的に `/REC` ディレクトリを作成します。
3. 電源を入れる前に、カードが挿入されていることを確認します。

### 期待される出力

```
=========================================
  MicRecordToSD — reTerminal E Series
=========================================
[SD] Mounting...
[SD] Mounted. Size: 31918 MB
[MIC] Powering on microphone...
[MIC] Creating I2S channel...
[MIC] Configuring PDM-RX mode...
[MIC] Enabling channel...
[MIC] Warming up PDM filter...
[MIC] PDM ready. Rate=16000  CLK=GPIO42  DATA=GPIO41
[READY] Press KEY0 to record (max 30 s).
[READY] Files saved to /REC/REC_XXXX.WAV

[REC] Started → /REC/REC_0001.WAV
[REC] Stopped. 320000 bytes (10.0 s).
```

<!-- TODO: Insert serial monitor screenshot here -->
<!-- TODO: Insert photo of SD card with WAV files on PC -->

## タッチスクリーン（E1003 のみ）

:::caution E1003 専用機能
静電容量式タッチパネルは **reTerminal E1003**（10.3 インチモデル）でのみ利用可能です。E1001、E1002、および E1004 にはタッチパネルが**搭載されていません**。E1003 以外のモデルを使用している場合は、このセクションをスキップしてください。
:::

reTerminal E1003 には、I2C 接続の **GT911** 静電容量式タッチコントローラが搭載されています。16 階調グレースケールの ePaper ディスプレイと組み合わせることで、画面タップに反応するインタラクティブなアプリケーションを構築できます。

### ハードウェア概要

<div class="table-center">
  <table align="center">
    <tr>
      <th>Parameter</th>
      <th>Value</th>
    </tr>
    <tr>
      <td>タッチコントローラ</td>
      <td>GT911 (Goodix)</td>
    </tr>
    <tr>
      <td>バス</td>
      <td>I2C0 — アドレス <strong>0x5D</strong> または <strong>0x14</strong>（自動検出）</td>
    </tr>
    <tr>
      <td>SDA</td>
      <td>GPIO19</td>
    </tr>
    <tr>
      <td>SCL</td>
      <td>GPIO20</td>
    </tr>
    <tr>
      <td>INT</td>
      <td>GPIO2</td>
    </tr>
    <tr>
      <td>RESET</td>
      <td>GPIO48</td>
    </tr>
    <tr>
      <td>パネル解像度</td>
      <td>1872 × 1404 px</td>
    </tr>
  </table>
</div>

タッチコントローラは、PCF8563 RTC と SHT4x センサと同じ I2C バス（GPIO19/GPIO20）を共有しています。

### フルスケッチ: E1003_TouchDraw

完全なスケッチはリポジトリで入手できます：[`examples/E1003_TouchDraw/E1003_TouchDraw.ino`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/E1003_TouchDraw)。

<details>
<summary>クリックして E1003_TouchDraw.ino の全コードを表示</summary>

```cpp
#include <Arduino.h>
#include <Wire.h>

#include "driver.h"
#include "TFT_eSPI.h"
#include "TouchMapper.h"

// ---------- Serial status logs (carrier USB-UART bridge) ----------
#define PIN_SERIAL_RX       44
#define PIN_SERIAL_TX       43
#define LOG                 Serial1

// ---------- E1003 touch pins from the schematic ----------
#define PIN_I2C_SDA         19
#define PIN_I2C_SCL         20
#define PIN_TOUCH_INT        2
#define PIN_TOUCH_RESET     48

// ---------- GT911 register map ----------
#define GT911_ADDR_1      0x5D
#define GT911_ADDR_2      0x14
#define GT911_REG_COMMAND 0x8040
#define GT911_REG_PRODUCT 0x8140
#define GT911_REG_STATUS  0x814E
#define GT911_REG_POINT1  0x814F
#define GT911_REG_MAX_X   0x8048

#define TOUCH_POLL_MS       30
#define DRAW_MIN_MS        450
#define DRAW_MIN_DELTA_PX   12
#define DOT_RADIUS          10

#define E1003_PANEL_WIDTH   1872
#define E1003_PANEL_HEIGHT  1404

// Set to 1 only when the panel has obvious ghosting and you want a slow
// black-white cleanup before the example screen appears. Normal boot uses one
// refresh in drawStartupScreen().
#define STRONG_BOOT_CLEAR    0

static EPaper display_;

static uint8_t s_touchAddr = 0;
static uint16_t s_touchMaxX = 1;
static uint16_t s_touchMaxY = 1;
static uint16_t s_lastRawX = 0;
static uint16_t s_lastRawY = 0;
static bool s_haveLastPoint = false;
static TouchDisplayPoint s_lastPoint = {0, 0};
static TouchDisplayPoint s_displaySize = {E1003_PANEL_WIDTH, E1003_PANEL_HEIGHT};
static bool s_displayReady = false;
static unsigned long s_lastPollMs = 0;
static unsigned long s_lastDrawMs = 0;

static void updateDisplaySize()
{
  resolveDisplaySize(static_cast<uint16_t>(display_.width()),
                     static_cast<uint16_t>(display_.height()),
                     E1003_PANEL_WIDTH,
                     E1003_PANEL_HEIGHT,
                     &s_displaySize);
}

static bool i2cRead16(uint8_t addr, uint16_t reg, uint8_t* buf, size_t len)
{
  Wire.beginTransmission(addr);
  Wire.write(static_cast<uint8_t>(reg >> 8));
  Wire.write(static_cast<uint8_t>(reg & 0xFF));
  if (Wire.endTransmission(false) != 0) return false;

  const uint8_t got = Wire.requestFrom(addr, static_cast<uint8_t>(len));
  if (got != len) return false;

  for (size_t i = 0; i < len; i++) {
    buf[i] = static_cast<uint8_t>(Wire.read());
  }
  return true;
}

static bool i2cWrite16(uint8_t addr, uint16_t reg, uint8_t value)
{
  Wire.beginTransmission(addr);
  Wire.write(static_cast<uint8_t>(reg >> 8));
  Wire.write(static_cast<uint8_t>(reg & 0xFF));
  Wire.write(value);
  return Wire.endTransmission() == 0;
}

static void resetTouchController()
{
  pinMode(PIN_TOUCH_INT, INPUT);
  pinMode(PIN_TOUCH_RESET, OUTPUT);

  digitalWrite(PIN_TOUCH_RESET, LOW);
  delay(20);
  digitalWrite(PIN_TOUCH_RESET, HIGH);
  delay(120);
}

static bool probeGt911(uint8_t addr)
{
  uint8_t product[4] = {};
  if (!i2cRead16(addr, GT911_REG_PRODUCT, product, sizeof(product))) {
    return false;
  }
  LOG.printf("[touch] GT9xx found at 0x%02X, product: %c%c%c%c\n",
             addr, product[0], product[1], product[2], product[3]);
  return true;
}

static void readTouchLimits()
{
  uint8_t raw[4] = {};
  if (!i2cRead16(s_touchAddr, GT911_REG_MAX_X, raw, sizeof(raw))) {
    s_touchMaxX = s_displaySize.x;
    s_touchMaxY = s_displaySize.y;
    return;
  }

  const uint16_t maxX = static_cast<uint16_t>(raw[0] | (raw[1] << 8));
  const uint16_t maxY = static_cast<uint16_t>(raw[2] | (raw[3] << 8));

  if (maxX > 0 && maxY > 0) {
    s_touchMaxX = maxX;
    s_touchMaxY = maxY;
  }

  LOG.printf("[touch] Touch range: %u x %u, display: %u x %u\n",
             s_touchMaxX, s_touchMaxY, s_displaySize.x, s_displaySize.y);
}

static bool initTouch()
{
  resetTouchController();

  if (probeGt911(GT911_ADDR_1)) {
    s_touchAddr = GT911_ADDR_1;
  } else if (probeGt911(GT911_ADDR_2)) {
    s_touchAddr = GT911_ADDR_2;
  } else {
    LOG.println("[touch] GT9xx touch controller not found.");
    return false;
  }

  readTouchLimits();
  i2cWrite16(s_touchAddr, GT911_REG_COMMAND, 0x00);
  i2cWrite16(s_touchAddr, GT911_REG_STATUS, 0x00);
  pinMode(PIN_TOUCH_INT, INPUT_PULLUP);
  LOG.println("[touch] Ready.");
  return true;
}

static bool readTouchPoint(TouchDisplayPoint* point)
{
  uint8_t status = 0;
  if (!i2cRead16(s_touchAddr, GT911_REG_STATUS, &status, 1)) {
    LOG.println("[touch] Failed to read GT911 status register.");
    return false;
  }

  const int intLevel = digitalRead(PIN_TOUCH_INT);
  const uint8_t pointCount = status & 0x0F;
  if (!gt911StatusRequestsRead(status, intLevel)) {
    return false;
  }

  uint8_t raw[8] = {};
  const bool ok = i2cRead16(s_touchAddr, GT911_REG_POINT1, raw, sizeof(raw));
  i2cWrite16(s_touchAddr, GT911_REG_STATUS, 0x00);
  if (!ok) {
    LOG.println("[touch] Failed to read GT911 point data.");
    return false;
  }

  if (pointCount == 0 && (raw[1] == 0 && raw[2] == 0 && raw[3] == 0 && raw[4] == 0)) {
    return false;
  }

  const uint16_t rawX = static_cast<uint16_t>(raw[1] | (raw[2] << 8));
  const uint16_t rawY = static_cast<uint16_t>(raw[3] | (raw[4] << 8));
  s_lastRawX = rawX;
  s_lastRawY = rawY;
  const bool mapped = mapTouchToDisplay(rawX, rawY, s_touchMaxX, s_touchMaxY,
                                        s_displaySize.x,
                                        s_displaySize.y,
                                        point);
  return mapped;
}

static bool shouldDrawPoint(const TouchDisplayPoint& point)
{
  const unsigned long now = millis();
  if (!s_haveLastPoint) return true;
  if (now - s_lastDrawMs < DRAW_MIN_MS) return false;

  const int dx = abs(static_cast<int>(point.x) - static_cast<int>(s_lastPoint.x));
  const int dy = abs(static_cast<int>(point.y) - static_cast<int>(s_lastPoint.y));
  return dx >= DRAW_MIN_DELTA_PX || dy >= DRAW_MIN_DELTA_PX;
}

static void drawStartupScreen(bool touchReady)
{
  if (!s_displayReady) return;

  display_.fillSprite(TFT_WHITE);
  display_.setTextDatum(TC_DATUM);
  display_.setTextColor(TFT_BLACK, TFT_WHITE, true);
  display_.setTextSize(5);
  display_.drawString("E1003 Touch Draw", display_.width() / 2, 90);

  display_.setTextSize(3);
  display_.drawString(touchReady ? "Tap anywhere to draw dots." : "Touch controller not found.",
                      display_.width() / 2, 180);
  display_.drawFastHLine(80, 260, display_.width() - 160, TFT_BLACK);
  display_.update();
}

static void drawPoint(const TouchDisplayPoint& point)
{
  if (!s_displayReady) return;

  display_.fillCircle(point.x, point.y, DOT_RADIUS, TFT_BLACK);
  display_.drawCircle(point.x, point.y, DOT_RADIUS + 4, TFT_GRAY_6);
  display_.update();
  LOG.printf("[touch] raw=(%u,%u) screen=(%u,%u)\n",
             s_lastRawX, s_lastRawY, point.x, point.y);

  s_lastPoint = point;
  s_haveLastPoint = true;
  s_lastDrawMs = millis();
}

static bool setupDisplay()
{
  LOG.printf("[display] PSRAM found: %s, free PSRAM: %u bytes\n",
             psramFound() ? "yes" : "no",
             static_cast<unsigned>(ESP.getFreePsram()));

  if (!psramFound()) {
    LOG.println("[display] ERROR: enable Tools -> PSRAM -> OPI PSRAM.");
    return false;
  }

  display_.begin();
  updateDisplaySize();

  if (display_.width() == 0 || display_.height() == 0) {
    LOG.println("[display] ERROR: 1-bit ePaper buffer was not created.");
    return false;
  }

#if STRONG_BOOT_CLEAR
  LOG.println("[display] Clearing old ePaper image...");
  display_.fillScreen(TFT_BLACK);
  display_.update();
  delay(800);

  display_.fillScreen(TFT_WHITE);
  display_.update();
  delay(800);
#endif

  display_.initGrayMode(GRAY_LEVEL16);
  updateDisplaySize();

  if (display_.width() == 0 || display_.height() == 0) {
    LOG.println("[display] ERROR: 16-gray ePaper buffer was not created.");
    return false;
  }

  LOG.printf("[display] Ready: %u x %u\n", s_displaySize.x, s_displaySize.y);
  return true;
}

void setup()
{
  LOG.begin(115200, SERIAL_8N1, PIN_SERIAL_RX, PIN_SERIAL_TX);
  delay(100);

  LOG.println("========================================");
  LOG.println("  E1003_TouchDraw - reTerminal E1003");
  LOG.println("========================================");

  s_displayReady = setupDisplay();
  s_touchMaxX = s_displaySize.x;
  s_touchMaxY = s_displaySize.y;

  Wire.begin(PIN_I2C_SDA, PIN_I2C_SCL);
  Wire.setClock(400000UL);

  const bool touchReady = initTouch();
  drawStartupScreen(touchReady);

  if (!s_displayReady) {
    LOG.println("[hint] Display is not ready; check PSRAM and Seeed_GFX setup.");
  }
}

void loop()
{
  if (s_touchAddr == 0) {
    delay(1000);
    return;
  }

  const unsigned long now = millis();
  if (now - s_lastPollMs < TOUCH_POLL_MS) return;
  s_lastPollMs = now;

  TouchDisplayPoint point = {};
  if (readTouchPoint(&point) && shouldDrawPoint(point)) {
    drawPoint(point);
  }
}
```

</details>

### コードの動作概要

**初期化シーケンス（`setup()`）:**

1. **ePaper ディスプレイの初期化** — `setupDisplay()` は PSRAM の有無を確認します（1872×1404 のフレームバッファに必須）、EPaper オブジェクトを作成し、より滑らかな描画のために **16 階調グレーモード** に切り替えます。
2. **I2C を初期化** — GPIO19/GPIO20 上で 400 kHz に設定します。これは PCF8563 RTC と SHT4x センサが使用するのと同じバスです。
3. **GT911 をリセットしてプローブ** — タッチコントローラは GPIO48 を介してハードウェアリセットされ、その後 2 つの可能な I2C アドレス（0x5D と 0x14）でプローブされます。スケッチはチップが応答するアドレスを自動検出します。
4. **タッチ解像度を読み取り** — GT911 の内部 max-X/max-Y レジスタを読み出して、タッチ座標範囲を取得します。
5. **起動画面を描画** — ePaper に「E1003 Touch Draw」とプロンプトを表示します。

**タッチポーリングループ（`loop()`）:**

1. **30 ms ごとにポーリング** — GT911 のステータスレジスタを読み取り、新しいタッチイベントがあるかどうかを確認します。
2. **タッチ座標を読み取り** — GT911 のポイントデータレジスタから生の X/Y を取得し、`mapTouchToDisplay()` を使ってディスプレイ座標にマッピングします（タッチ解像度とディスプレイ解像度の差を考慮します）。
3. **デバウンスと距離チェック** — 新しいドットが描画されるのは次のいずれかの場合のみです：
   - 最後に描画してから少なくとも 450 ms が経過している **または**
   - タッチポイントが最後に描画したポイントから少なくとも 12 ピクセル移動している。
4. **ePaper に描画** — `fillCircle()` が黒の塗りつぶしドットを描画し、`drawCircle()` がグレーのハローリングを追加し、その後 `update()` がフレームバッファを ePaper パネルに送信します。

:::note ePaper refresh latency
各 `update()` 呼び出しは ePaper のフルリフレッシュをトリガーし、E1003 パネルでは約 **1〜2 秒** かかります。これは正常であり、ePaper は高速リフレッシュディスプレイではありません。デバウンスロジック（`DRAW_MIN_MS = 450 ms`）は、リフレッシュ要求でパネルを過負荷にしないように設計されています。
:::

### 事前準備

このスケッチを実行する前に：

1. Arduino Library Manager から **Seeed_GFX** ライブラリをインストールします。
2. Tools メニューで **PSRAM** を **OPI PSRAM** に設定します — PSRAM がない場合、ディスプレイバッファを確保できず、`display_.width()` は 0 を返します。
3. **Flash Size** を **8 MB** に設定します。
4. **XIAO_ESP32S3** ボードを選択します。

### 期待される出力

```
========================================
  E1003_TouchDraw - reTerminal E1003
========================================
[display] PSRAM found: yes, free PSRAM: 8159232 bytes
[display] Ready: 1872 x 1404
[touch] GT9xx found at 0x5D, product: 911
[touch] Touch range: 1872 x 1404, display: 1872 x 1404
[touch] Ready.
```

画面をタップした後：

```
[touch] raw=(468,302) screen=(468,302)
[touch] raw=(920,756) screen=(920,756)
[touch] raw=(1400,1100) screen=(1400,1100)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/247.png" style={{width:600, height:'auto'}}/></div>

## トラブルシューティング

### Q1: ディープスリープ中でもシリアル出力が見えます — これは低消費電力スケッチが動作していないという意味ですか？

これは正常であり、ディープスリープが失敗したという意味では**ありません**。

表示されているシリアル出力は、**キャリアボード上の USB-UART ブリッジチップ**（ESP32-S3 本体ではありません）によって処理されています。ブリッジチップは USB 接続から直接給電されるため、ESP32-S3 が起きているかスリープしているかに関係なく動作し続けます。これは実は意図的な設計であり、デバイスが高速なディープスリープサイクルに入った場合でも、常にシリアル出力を確認し、新しいファームウェアを書き込めるようにするためです。

ディープスリープが本当に有効になっているか確認するには、シリアルログをチェックします：

- `[SLEEP] Entering deep sleep now.` の後に無音状態が続く場合、デバイスはディープスリープ状態に**あります**。
- `[ERROR] deep sleep did not start!` が表示される場合は、何か問題が発生しています。

### Q2: シナリオごとに RTC スケッチを正しく使うにはどうすればよいですか？

<Tabs>
<TabItem value="scenario1" label="初回起動" default>

**シナリオ:** 新品のボード、または CR1220 バッテリを交換した直後。

何も変更する必要はありません — そのままスケッチを書き込んでください。

新品のボードでは、PCF8563 の内部 VL（Voltage Low）フラグは、バッテリが一度もクロックに電力を供給していないため、常に `1` になっています。スケッチは起動時に VL=1 を読み取り、コンパイル時刻を自動的に RTC に書き込みます。

USER CONFIGURATION が次のようになっていることを確認してください：

```cpp
#define USE_COMPILE_TIME     // ← enabled ✓
// #define FORCE_SET_TIME   // ← keep commented ✓
```

→ **Upload** をクリック → 完了。

</TabItem>
<TabItem value="scenario2" label="再起動 / 再給電">

**シナリオ:** ボードがすでに動作しており、その後再起動または電源の入れ直しを行った場合。

特に何もする必要はありません — 電源を入れるだけです。

CR1220 バッテリは、メイン電源がオフの間も PCF8563 を動作させ続けます。起動時にスケッチは VL=0（バッテリ正常）を読み取り、書き込みをスキップして保存されている時刻を保持します。シリアル出力にはすぐに正しい時刻が表示されます。

</TabItem>
<TabItem value="scenario3" label="再キャリブレーション">

**シナリオ:** RTC の時刻が誤っており、再キャリブレーションが必要な場合。

**ステップ 1 — 強制上書き。** `FORCE_SET_TIME` のコメントを外してから、書き込みを行います：

```cpp
#define USE_COMPILE_TIME
#define FORCE_SET_TIME      // ← uncomment this line
```

→ **Upload** をクリック → 時刻はコンパイル時刻に強制的に設定されます。

**ステップ 2 — 強制上書きを無効化。** すぐに再度コメントアウトし、もう一度書き込みます：

```cpp
#define USE_COMPILE_TIME
// #define FORCE_SET_TIME   // ← comment it back out
```

→ **Upload** をクリック → 以後の再起動では、保存された時刻が保持されます。

</TabItem>
</Tabs>


## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
