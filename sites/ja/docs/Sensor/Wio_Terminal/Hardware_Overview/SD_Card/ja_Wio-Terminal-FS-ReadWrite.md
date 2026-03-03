---
description: 読み取りと書き込み
title: 読み取りと書き込み
keywords:
- Wio_terminal File_System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-FS-ReadWrite
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# SDカードからの読み取り/書き込み

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_13-53-10.jpg"/></div>

このリポジトリでは、SDカードからの読み取りおよび書き込み方法について説明します。これにより、SDカードからデータを読み込むことが可能になります。簡単なデモとして、センサーの読み取り結果をSDカードに保存する例を示します。

## Wio TerminalでのSDカードの初期化

以下のように`Seeed_FS`ライブラリをインクルードします。そして、`SD.begin(SDCARD_SS_PIN, SDCARD_SPI)`を使用してSDカードを初期化します。Wio TerminalではSPIを使用してSDカードと通信します。

```cpp
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

File myFile; // Fileクラスを初期化し、myFileという名前を付ける

void setup() {
  Serial.begin(115200);
  while (!Serial) {
  }

  Serial.print("Initializing SD card...");
  if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
    Serial.println("initialization failed!");
    while (1);
  }
  Serial.println("initialization done.");
```

## SDカードへの書き込み

SDカードに書き込むには、まずファイルを開く必要があります。ファイルシステムにはさまざまなモードがあり、ファイルを開く際に使用するモードを指定する必要があります。モードは以下の通りです：

| ファイルモード | 定義された名前 |
|----------------|----------------|
| 書き込み       | FILE_WRITE     |
| 読み取り       | FILE_READ      |
| 追記           | FILE_APPEND    |

ファイルを開くには、`open`というFileクラスのメンバ関数を使用します。この関数は以下の2つのパラメータを取ります：

```cpp
open(const char *filepath, uint8_t mode = FILE_READ) //デフォルトモードはREAD
```

この場合、`test.txt`という名前のテキストファイルを開き、`FILE_WRITE`モードを使用します。テキストファイル内に書き込むには、`println`関数(Fileクラス)を使用します：

```cpp
  // ファイルを開く。注意：一度に開けるファイルは1つだけなので、
  // 別のファイルを開く前にこのファイルを閉じる必要があります。
  myFile = SD.open("test.txt", FILE_WRITE); // 書き込みモード

  // ファイルが正常に開いた場合、書き込みを行う：
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3."); // テキストファイルにこれを書き込む
    // ファイルを閉じる：
    myFile.close();
    Serial.println("done.");
  } else {
    // ファイルが開かなかった場合、エラーを出力：
    Serial.println("error opening test.txt");
  }
```

**注意:** 一度に開けるファイルは1つだけなので、作業が終わったらファイルを閉じてください。

## SDカードからの読み取り

SDカードからファイルを読み取るには、ファイルを開く必要があります。この場合、`FILE_READ`モードを使用してファイルを読み取るだけです。

Fileクラスのメンバ関数`available()`を使用してファイルの利用可能性を確認し、`read()`を使用してファイル内の内容を出力します。

```cpp
myFile = SD.open("test.txt", FILE_READ); // 読み取りモード
  if (myFile) {
    Serial.println("test.txt:");

    // ファイル内に内容がある限り読み取る：
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // ファイルを閉じる：
    myFile.close();
  } else {
    // ファイルが開かなかった場合、エラーを出力：
    Serial.println("error opening test.txt");
  }
}
```

## 完全なコード

```cpp
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

File myFile;

void setup() {
  Serial.begin(115200);
  while (!Serial) {
  }
  Serial.print("SDカードを初期化しています...");
  if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
    Serial.println("初期化に失敗しました！");
    while (1);
  }
  Serial.println("初期化完了。");

  // ファイルを開きます。注意：一度に開けるファイルは1つだけです。
  // 別のファイルを開く前に現在のファイルを閉じる必要があります。
  myFile = SD.open("test.txt", FILE_WRITE);

  // ファイルが正常に開けた場合、書き込みを行います：
  if (myFile) {
    Serial.print("test.txtに書き込み中...");
    myFile.println("テスト 1, 2, 3.");
    // ファイルを閉じます：
    myFile.close();
    Serial.println("完了。");
  } else {
    // ファイルが開けなかった場合、エラーを表示します：
    Serial.println("test.txtのオープンエラー");
  }

  // 読み取りのためにファイルを再オープンします：
  myFile = SD.open("test.txt", FILE_READ);
  if (myFile) {
    Serial.println("test.txt:");

    // ファイルに内容がある限り読み取ります：
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // ファイルを閉じます：
    myFile.close();
  } else {
    // ファイルが開けなかった場合、エラーを表示します：
    Serial.println("test.txtのオープンエラー");
  }
}

void loop() {
  // setup後は何も実行されません
}
```

## QSPIを使用したFlashの読み取り/書き込み

FSライブラリが更新され、システムに[**SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)が導入されました。これにより、Wio TerminalのFlashにQSPIを使用してアクセスできるようになりました。

### 完全なサンプルコード

この例では**読み取り/消去/書き込み**を示します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/SFUD.png"/></div>

```cpp
#include <sfud.h>

#define SFUD_DEMO_TEST_BUFFER_SIZE                     1024
static uint8_t sfud_demo_test_buf[SFUD_DEMO_TEST_BUFFER_SIZE];
static void sfud_demo(uint32_t addr, size_t size, uint8_t *data);
 
#define SERIAL Serial

void setup()
{
    SERIAL.begin(115200);
    while(!SERIAL) {};
    while(!(sfud_init() == SFUD_SUCCESS));
    #ifdef SFUD_USING_QSPI
    sfud_qspi_fast_read_enable(sfud_get_device(SFUD_W25Q32_DEVICE_INDEX), 2);
    #endif
    sfud_demo(0, sizeof(sfud_demo_test_buf), sfud_demo_test_buf);
}

void loop()
{

}
/**
 * SFUDデモ：最初のフラッシュデバイステスト。
 *
 * @param addr フラッシュ開始アドレス
 * @param size テストフラッシュサイズ
 * @param data テストフラッシュデータバッファ
 */
static void sfud_demo(uint32_t addr, size_t size, uint8_t *data) {
    sfud_err result = SFUD_SUCCESS;
    const sfud_flash *flash = sfud_get_device_table() + 0;
    size_t i;
    /* 書き込みデータを準備 */
    for (i = 0; i < size; i++) {
        data[i] = i;
    }
    /* 消去テスト */
    result = sfud_erase(flash, addr, size);
    if (result == SFUD_SUCCESS) {
        SERIAL.println("フラッシュデータの消去完了");
    } else {
        SERIAL.println("フラッシュデータの消去失敗");
        return;
    }
    /* 書き込みテスト */
    result = sfud_write(flash, addr, size, data);
    if (result == SFUD_SUCCESS) {
        SERIAL.println("フラッシュデータの書き込み完了");
    } else {
        SERIAL.println("フラッシュデータの書き込み失敗");
        return;
    }
    /* 読み取りテスト */
    size_t BaseTime = micros();
    result = sfud_read(flash, addr, size, data);
    size_t CostTime = micros() - BaseTime;
    if (result == SFUD_SUCCESS) {
        SERIAL.println("フラッシュデータの読み取り成功。");
        SERIAL.println("オフセット (h) 00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F\r\n");
        for (i = 0; i < size; i++) {
            if (i % 16 == 0) {
                SERIAL.print("0x");
                SERIAL.print(addr + i,HEX);
                SERIAL.print("\t");
            }
            SERIAL.print(data[i],HEX);
            SERIAL.print("\t");
            if (((i + 1) % 16 == 0) || i == size - 1) {
                SERIAL.println("");
            }
        }
        SERIAL.println(" ");
    } else {
        SERIAL.println("フラッシュデータの読み取り失敗。");
    }
    /* データチェック */
    for (i = 0; i < size; i++) {
        if (data[i] != i % 256) {
            SERIAL.println("読み取りと書き込みデータのチェックにエラーがあります。");
   break;
        }
    }
    if (i == size) {
        SERIAL.println("フラッシュテストは成功しました。\r\n");
        SERIAL.print("読み取り時間: ");
        SERIAL.print(CostTime);
        SERIAL.println(" us");
    }
}
```