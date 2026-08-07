---
description: このチュートリアルでは、XIAO ESP32S3 上で microSD カードとファイルシステムを使用する方法について説明します。
title: Sense バージョン向け MicroSD カード
keywords:
  - xiao esp32s3
  - esp32s3
  - tf
  - sd
  - file
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_sense_filesystem
last_update:
  date: 08/06/2026
  author: Priyanshu Roy
createdAt: '2022-11-15'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/ja/xiao_esp32s3_sense_filesystem/
---

# ファイルシステムと XIAO ESP32S3 Sense

このチュートリアルでは、XIAO ESP32S3 のファイルシステムの使用方法、特に Sense バージョン向けの microSD カードスロットの使い方に焦点を当てます。同時に、公式 ESP ファイルシステムである SPIFFS や、チップ内蔵の Flash などについても紹介します。

:::tip
このチュートリアルの microSD カードに関する部分は **XIAO ESP32S3 Sense** にのみ適用されます。それ以外の内容は ESP32-S3 チップに適用されるため、microSD カードを除き、XIAO ESP32S3 上でサンプルを実行できます。
:::

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 入門ガイド

このチュートリアルでは microSD カードを使用するため、事前に Sense 拡張ボードを取り付け、microSD カードを準備しておく必要があります。

### 拡張ボードの取り付け（Sense 用）

拡張ボードの取り付けはとても簡単です。拡張ボード上のコネクタを XIAO ESP32S3 上の B2B コネクタに合わせて、カチッと音がするまでしっかり押し込めば、取り付け完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### microSD カードの準備

XIAO ESP32S3 Sense は最大 **32GB** までの microSD カードをサポートしています。そのため、XIAO 用に microSD カードを購入する場合は、この仕様を参考にしてください。また、microSD カードを使用する前に、microSD カードを **FAT32** 形式でフォーマットしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

フォーマット後、microSD カードを microSD カードスロットに挿入できます。挿入方向に注意し、金色の端子（ゴールドフィンガー）が内側を向くようにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
microSD カードがコンピュータでは認識されるのに ESP32S3 では認識されず、エラーが次のような表示になる場合：

```shell
[  7273][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
[  7274][E][sd_diskio.cpp:759] sdcard_mount(): f_mount failed: (3) The physical drive cannot work
[  7588][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
Card Mount Failed
```

次の手順を実行してください：

- Windows Formatter を使用する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard1.png" style={{width:500, height:'auto'}}/></div>

- [SD Card Formatter](https://www.sdcard.org/downloads/formatter/)（サードパーティ製ソフトウェア）を使用する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard2.png" style={{width:500, height:'auto'}}/></div>

**注意：**

- この処理にはクイックフォーマットよりもかなり長い時間がかかります。

- これらのケースは、以前に別の用途で使用されていた microSD カードを再利用する場合に発生します（例：Linux OS が入っていた microSD カードを再利用する場合など）。

:::

### 拡張ボードのカードスロット回路設計

XIAO ESP32S3 Sense のカードスロットは ESP32-S3 の 4 本の GPIO を使用しており、その使用ピンの詳細は以下の表のとおりです。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">microSD カードスロット</th>
        </tr>
        <tr>
            <td align="center">GPIO3</td>
            <td align="center">CS</td>
        </tr>
        <tr>
            <td align="center">D8 / A8 / Qt7 / GPIO7</td>
            <td align="center">SCK</td>
        </tr>
        <tr>
            <td align="center">D9 / A9 / Qt8 / GPIO8</td>
            <td align="center">MISO</td>
        </tr>
        <tr>
            <td align="center">D10 / A10 / Qt9 / GPIO9</td>
            <td align="center">MOSI</td>
        </tr>
    </table>
</div>

これはまた、拡張ボードの microSD カード機能を使用する場合、XIAO ESP32S3 の SPI 機能を同時に使用できないことも意味します。J3 のパッドを接続／カットすることで、microSD カード機能をオン／オフできます。

<table align="center">
 <tr>
     <th>拡張ボードの SPI ピンを使用したい場合 / SD カードを無効にしたい場合</th>
     <th>拡張ボード上の SD カードを有効にしたい場合 / SPI ピンを無効にしたい場合</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
 </tr>
  <tr>
    <td>白い細い線に沿ってカットし、はんだパッドの接続を切ります。</td>
    <td>2 つのはんだパッドをはんだ付けして接続します。</td>
  </tr>
</table>

:::tip
デフォルトでは、拡張ボードを取り付けると microSD カード機能が有効になります。
:::

## microSD カード内のファイルを編集する

:::caution
このセクションは XIAO ESP32S3 Sense のみに適用されます。
:::

Arduino IDE には、XIAO ESP32S3 を使用して microSD カード上のファイルを扱う方法を示すサンプルがいくつか用意されています。Arduino IDE で **File > Examples > SD > SD_Test** に移動するか、以下のコードをコピーしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/68.png" style={{width:700, height:'auto'}}/></div>

```cpp
#include "FS.h"
#include "SD.h"
#include "SPI.h"

void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("Listing directory: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("Failed to open directory");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("Not a directory");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  DIR : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  FILE: ");
            Serial.print(file.name());
            Serial.print("  SIZE: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

void createDir(fs::FS &fs, const char * path){
    Serial.printf("Creating Dir: %s\n", path);
    if(fs.mkdir(path)){
        Serial.println("Dir created");
    } else {
        Serial.println("mkdir failed");
    }
}

void removeDir(fs::FS &fs, const char * path){
    Serial.printf("Removing Dir: %s\n", path);
    if(fs.rmdir(path)){
        Serial.println("Dir removed");
    } else {
        Serial.println("rmdir failed");
    }
}

void readFile(fs::FS &fs, const char * path){
    Serial.printf("Reading file: %s\n", path);

    File file = fs.open(path);
    if(!file){
        Serial.println("Failed to open file for reading");
        return;
    }

    Serial.print("Read from file: ");
    while(file.available()){
        Serial.write(file.read());
    }
    file.close();
}

void writeFile(fs::FS &fs, const char * path, const char * message){
    Serial.printf("Writing file: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("Failed to open file for writing");
        return;
    }
    if(file.print(message)){
        Serial.println("File written");
    } else {
        Serial.println("Write failed");
    }
    file.close();
}

void appendFile(fs::FS &fs, const char * path, const char * message){
    Serial.printf("Appending to file: %s\n", path);

    File file = fs.open(path, FILE_APPEND);
    if(!file){
        Serial.println("Failed to open file for appending");
        return;
    }
    if(file.print(message)){
        Serial.println("Message appended");
    } else {
        Serial.println("Append failed");
    }
    file.close();
}

void renameFile(fs::FS &fs, const char * path1, const char * path2){
    Serial.printf("Renaming file %s to %s\n", path1, path2);
    if (fs.rename(path1, path2)) {
        Serial.println("File renamed");
    } else {
        Serial.println("Rename failed");
    }
}

void deleteFile(fs::FS &fs, const char * path){
    Serial.printf("Deleting file: %s\n", path);
    if(fs.remove(path)){
        Serial.println("File deleted");
    } else {
        Serial.println("Delete failed");
    }
}

void testFileIO(fs::FS &fs, const char * path){
    File file = fs.open(path);
    static uint8_t buf[512];
    size_t len = 0;
    uint32_t start = millis();
    uint32_t end = start;
    if(file){
        len = file.size();
        size_t flen = len;
        start = millis();
        while(len){
            size_t toRead = len;
            if(toRead > 512){
                toRead = 512;
            }
            file.read(buf, toRead);
            len -= toRead;
        }
        end = millis() - start;
        Serial.printf("%u bytes read for %u ms\n", flen, end);
        file.close();
    } else {
        Serial.println("Failed to open file for reading");
    }


    file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("Failed to open file for writing");
        return;
    }

    size_t i;
    start = millis();
    for(i=0; i<2048; i++){
        file.write(buf, 512);
    }
    end = millis() - start;
    Serial.printf("%u bytes written for %u ms\n", 2048 * 512, end);
    file.close();
}

void setup(){
    Serial.begin(115200);
    while(!Serial);
    if(!SD.begin(21)){
        Serial.println("Card Mount Failed");
        return;
    }
    uint8_t cardType = SD.cardType();

    if(cardType == CARD_NONE){
        Serial.println("No SD card attached");
        return;
    }

    Serial.print("SD Card Type: ");
    if(cardType == CARD_MMC){
        Serial.println("MMC");
    } else if(cardType == CARD_SD){
        Serial.println("SDSC");
    } else if(cardType == CARD_SDHC){
        Serial.println("SDHC");
    } else {
        Serial.println("UNKNOWN");
    }

    uint64_t cardSize = SD.cardSize() / (1024 * 1024);
    Serial.printf("SD Card Size: %lluMB\n", cardSize);

    listDir(SD, "/", 0);
    createDir(SD, "/mydir");
    listDir(SD, "/", 0);
    removeDir(SD, "/mydir");
    listDir(SD, "/", 2);
    writeFile(SD, "/hello.txt", "Hello ");
    appendFile(SD, "/hello.txt", "World!\n");
    readFile(SD, "/hello.txt");
    deleteFile(SD, "/foo.txt");
    renameFile(SD, "/hello.txt", "/foo.txt");
    readFile(SD, "/foo.txt");
    testFileIO(SD, "/test.txt");
    Serial.printf("Total space: %lluMB\n", SD.totalBytes() / (1024 * 1024));
    Serial.printf("Used space: %lluMB\n", SD.usedBytes() / (1024 * 1024));
}

void loop(){

}
```

:::caution
サンプルプログラムはそのままでは使用できないため、動作を保証するにはプログラムを少し修正する必要があります。修正内容は、`Setup()` 関数内の元のコードを `SD.begin()` から `SD.begin(21)` に変更することです。初期化のためのピン番号を指定します。
:::

プログラムを XIAO ESP32S3 Sense に書き込み、シリアルモニタを開くと、ファイルの作成プロセスと書き込みプロセスが表示されます。また、microSD を USB に変換して、コンピュータから新しく作成されたファイルと内容にアクセスすることもできます。

<div class="table-center">
    <table align="center">
        <tr>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.png" style={{width:500, height:'auto'}}/></div></td>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/69.png" style={{width:500, height:'auto'}}/></div></td>
        </tr>
    </table>
</div>

### プログラムの注釈

まず、次のライブラリをインクルードする必要があります。ファイルを扱うための **FS.h**、microSD カードとインターフェースするための **SD.h**、そして SPI 通信プロトコルを使用するための **SPI.h** です。

1. `setup()` 内では、次の行で `SD.begin(21)` を使って microSD カードを初期化します。ここでは `SD.begin()` に CS ピンであるパラメータを渡す必要があります。拡張ボードの microSD カード設計では、CS ピンは **GPIO 21** に接続されています。Round Display for XIAO を使用している場合は、渡すパラメータは **D2** にする必要があります。

2. 次の行では、シリアルモニタに microSD カードの種類を出力します。

```c
uint8_t cardType = SD.cardType();

if(cardType == CARD_NONE){
    Serial.println("No SD card attached");
    return;
}

Serial.print("SD Card Type: ");
if(cardType == CARD_MMC){
    Serial.println("MMC");
} else if(cardType == CARD_SD){
    Serial.println("SDSC");
} else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
} else {
    Serial.println("UNKNOWN");
}
```

3. `cardSize()` メソッドを呼び出すことで、microSD カードの容量を取得できます。

```c
uint64_t cardSize = SD.cardSize() / (1024 * 1024);
Serial.printf("SD Card Size: %lluMB\n", cardSize);
```

**このサンプルでは、microSD カード上のファイルを扱うための複数の関数を提供しています。**

4. `listDir()` 関数は SD カード上のディレクトリを一覧表示します。この関数は引数として、ファイルシステム（SD）、メインディレクトリ名、およびディレクトリ内をどの階層までたどるかを受け取ります。

   この関数を呼び出す例を次に示します。`/` は microSD カードのルートディレクトリに対応します。

```c
listDir(SD, "/", 0);
```

5. `createDir()` 関数は新しいディレクトリを作成します。引数として `SD` ファイルシステムとディレクトリ名のパスを渡します。例えば、次のコマンドはルートに `mydir` という新しいディレクトリを作成します。

```c
createDir(SD, "/mydir");
```

6. microSD カードからディレクトリを削除するには、`removeDir()` 関数を使用し、引数として SD ファイルシステムとディレクトリ名のパスを渡します。

```c
removeDir(SD, "/mydir");
```

7. `readFile()` 関数はファイルの内容を読み取り、その内容をシリアルモニタに出力します。前述の関数と同様に、引数として `SD` ファイルシステムとファイルパスを渡します。例えば、次の行は `hello.txt` ファイルの内容を読み取ります。

```c
readFile(SD, "/hello.txt")
```

8. ファイルに内容を書き込むには、`writeFile()` 関数を使用できます。引数として、`SD` ファイルシステム、ファイルパス、メッセージを渡します。次の行は `hello.txt` ファイルに `Hello` と書き込みます。

```c
writeFile(SD, "/hello.txt", "Hello ");
```

9. 同様に、`appendFile()` 関数を使用して、既存の内容を上書きせずにファイルに内容を追記できます。次の行は `hello.txt` ファイルにメッセージ `World!\n` を追記します。`\n` は、次にファイルに何かを書き込むときに、新しい行に書き込まれることを意味します。

```c
appendFile(SD, "/hello.txt", "World!\n");
```

10. `renameFile()` 関数を使用してファイル名を変更できます。引数として、SD ファイルシステム、元のファイル名、新しいファイル名を渡します。次の行は `hello.txt` ファイルの名前を `foo.txt` に変更します。

```c
renameFile(SD, "/hello.txt", "/foo.txt");
```

11. `deleteFile()` 関数を使用してファイルを削除します。引数として、SD ファイルシステムと削除したいファイルのファイルパスを渡します。次の行は microSD カードから `foo.txt` ファイルを削除します。

```c
deleteFile(SD, "/foo.txt");
```

12. `testFileIO()` 関数は、ファイルの内容を読み取るのにどれくらい時間がかかるかを示します。次の関数は test.txt ファイルをテストします。

```c
testFileIO(SD, "/test.txt");
```

## ガスデータロギングに基づく MicroSD カードアプリケーション

:::caution
このセクションは XIAO ESP32S3 Sense のみに適用されます。
:::

このプロジェクトでは、XIAO ESP32S3 Sense を使用して、タイムスタンプ付きデータを TF カードに記録する方法を示します。例として、Multichannel Gas Sensor からの温度測定値を 10 分ごとに記録します。XIAO ESP32S3 は各測定の間はディープスリープモードになり、ネットワークタイムプロトコル（NTP）を使用して日付と時刻を取得します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/72.jpg" style={{width:800, height:'auto'}}/></div>

このプロジェクトを完成させるには、事前に以下のハードウェアを用意する必要があります。

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Multichannel Gas Sensor v2</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/04.png" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

ソフトウェアとしては、事前に Arduino IDE 用に以下のライブラリをインストールする必要があります。

- Taranais によってフォークされた NTPClient ライブラリ

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/taranais/NTPClient" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

- Multichannel Gas Sensor ライブラリ

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_MultiGas" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

以下が完成したサンプルプログラムです。プログラムではネットワークを利用した時刻合わせを行う必要があるため、プログラム内の WiFi 名とパスワードをあなたのものに変更してください。

```cpp
#include "FS.h"
#include "SD.h"
#include <SPI.h>

//multichannel gas libraries
#include <Multichannel_Gas_GMXXX.h>
#include <Wire.h>

// Libraries to get time from NTP Server
#include <NTPClient.h>
#include <WiFiUdp.h>

#include "WiFi.h"

// Define deep sleep options
uint64_t uS_TO_S_FACTOR = 1000000;  // Conversion factor for micro seconds to seconds
// Sleep for 10 minutes = 600 seconds
uint64_t TIME_TO_SLEEP = 600;

// Replace with your network credentials
const char* ssid     = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

// Define CS pin for the SD card module
#define SD_CS 21

// Save reading number on RTC memory
RTC_DATA_ATTR int readingID = 0;

String dataMessage;

// Gas Sensor variables
int NO2_val, C2H5CH_val, VOC_val, CO_val;
GAS_GMXXX<TwoWire> gas;

// Define NTP Client to get time
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);

// Variables to save date and time
String formattedDate;
String dayStamp;
String timeStamp;

void setup() {
  // Start serial communication for debugging purposes
  Serial.begin(115200);

  // Connect to Wi-Fi network with SSID and password
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected.");

  // Initialize a NTPClient to get time
  timeClient.begin();
  // Set offset time in seconds to adjust for your timezone, for example:
  // GMT +1 = 3600
  // GMT +8 = 28800
  // GMT -1 = -3600
  // GMT 0 = 0
  timeClient.setTimeOffset(3600);

  // Initialize SD card
  SD.begin(SD_CS);
  if(!SD.begin(SD_CS)) {
    Serial.println("Card Mount Failed");
    return;
  }
  uint8_t cardType = SD.cardType();
  if(cardType == CARD_NONE) {
    Serial.println("No SD card attached");
    return;
  }
  Serial.println("Initializing SD card...");
  if (!SD.begin(SD_CS)) {
    Serial.println("ERROR - SD card initialization failed!");
    return;    // init failed
  }

  // If the data.txt file doesn't exist
  // Create a file on the SD card and write the data labels
  File file = SD.open("/data.txt");
  if(!file) {
    Serial.println("File doens't exist");
    Serial.println("Creating file...");
    writeFile(SD, "/data.txt", "Reading ID, Date, Hour, NO2, C2H5CH, VOC, CO \r\n");
  }
  else {
    Serial.println("File already exists");
  }
  file.close();

  // Start the gas sensor
  gas.begin(Wire, 0x08); // use the hardware I2C

  getReadings();
  getTimeStamp();
  logSDCard();

  // Increment readingID on every new reading
  readingID++;

  // Start deep sleep
  Serial.println("DONE! Going to sleep now.");

  // Enable Timer wake_up
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  esp_deep_sleep_start();
}

void loop() {
  // The ESP32 will be in deep sleep
  // it never reaches the loop()
}

// Function to get temperature
void getReadings(){
  // GM102B NO2 sensor ppm
  NO2_val = gas.getGM102B();
  // GM302B C2H5CH sensor ppm
  C2H5CH_val = gas.getGM302B();
  // GM502B VOC sensor
  VOC_val = gas.getGM502B();
  // GM702B CO sensor
  CO_val = gas.getGM702B();

  Serial.print("NO2 Value is: ");
  Serial.println(NO2_val);

  Serial.print("C2H5CH Value is: ");
  Serial.println(C2H5CH_val);

  Serial.print("VOC Value is: ");
  Serial.println(VOC_val);

  Serial.print("CO Value is: ");
  Serial.println(CO_val);
}

// Function to get date and time from NTPClient
void getTimeStamp() {
  while(!timeClient.update()) {
    timeClient.forceUpdate();
  }
  // The formattedDate comes with the following format:
  // 2018-05-28T16:00:13Z
  // We need to extract date and time
  formattedDate = timeClient.getFormattedDate();
  Serial.println(formattedDate);

  // Extract date
  int splitT = formattedDate.indexOf("T");
  dayStamp = formattedDate.substring(0, splitT);
  Serial.println(dayStamp);
  // Extract time
  timeStamp = formattedDate.substring(splitT+1, formattedDate.length()-1);
  Serial.println(timeStamp);
}

// Write the sensor readings on the SD card
void logSDCard() {
  dataMessage = String(readingID) + "," + String(dayStamp) + "," + String(timeStamp) + "," +
                String(NO2_val) + "," + String(C2H5CH_val) + "," + String(VOC_val) + "," +
                String(CO_val) + "\r\n";
  Serial.print("Save data: ");
  Serial.println(dataMessage);
  appendFile(SD, "/data.txt", dataMessage.c_str());
}

// Write to the SD card (DON'T MODIFY THIS FUNCTION)
void writeFile(fs::FS &fs, const char * path, const char * message) {
  Serial.printf("Writing file: %s\n", path);

  File file = fs.open(path, FILE_WRITE);
  if(!file) {
    Serial.println("Failed to open file for writing");
    return;
  }
  if(file.print(message)) {
    Serial.println("File written");
  } else {
    Serial.println("Write failed");
  }
  file.close();
}

// Append data to the SD card (DON'T MODIFY THIS FUNCTION)
void appendFile(fs::FS &fs, const char * path, const char * message) {
  Serial.printf("Appending to file: %s\n", path);

  File file = fs.open(path, FILE_APPEND);
  if(!file) {
    Serial.println("Failed to open file for appending");
    return;
  }
  if(file.print(message)) {
    Serial.println("Message appended");
  } else {
    Serial.println("Append failed");
  }
  file.close();
}
```

プログラムをコンパイルして書き込み、シリアルポートモニタを開きます。プログラムが正常に動作していれば、シリアルモニタから次のようなメッセージが出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/70.png" style={{width:700, height:'auto'}}/></div>

必要なときにいつでも microSD カードを取り外し、カードリーダーを介して保存されたセンサーデータにアクセスできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/71.png" style={{width:500, height:'auto'}}/></div>

:::note
テストを容易にするため、ここでは 1 分ごとにデータを保存する効果を示していますが、実際に提供しているサンプルコードでは 10 分ごとに 1 回データを保存します。
:::

:::caution
このプロジェクトについては、次の点に注意してください。

1. Multichannel Gas Sensor は、取得した値が正確になるまでウォームアップの時間が必要です。そのため、最初に記録された数セットのデータは、誤差が大きい場合は破棄してよいと考えられます。
2. このサンプルではディープスリープ機能を使用しているため、シリアルモニタは保存情報を 1 回だけ出力します。これは、ウェイクアップ後にリセットされたのと同等であり、次のデバッグ情報を見るには Arduino のシリアルポートを再度開く必要があるということです。ただし、カードに問題がなければ、センサーデータは設定した時刻どおりに収集されるので安心してください。

   :::

### プログラムの注釈

この例では、XIAO ESP32S3 は各読み取りの間にディープスリープモードになります。ディープスリープモードでは、すべてのコードを `setup()` 関数内に記述する必要があります。これは、XIAO ESP32S3 が `loop()` に到達することはないためです。

この例では、マイクロ秒から秒への変換係数を使用しているため、`TIME_TO_SLEEP` 変数でスリープ時間を秒単位で設定できます。この場合、XIAO ESP32S3 を 10 分（600 秒）スリープするように設定しています。XIAO ESP32S3 を別の時間だけスリープさせたい場合は、ディープスリープさせたい秒数を `TIME_TO_SLEEP` 変数に入力するだけです。

```c
// Define deep sleep options
uint64_t uS_TO_S_FACTOR = 1000000; // Conversion factor for micro seconds to seconds
// Sleep for 10 minutes = 600 seconds
uint64_t TIME_TO_SLEEP = 600;
```

次に、microSD カードの CS ピンを定義します。この例では **GPIO 21** に設定されています。

```c
#define SD_CS 21
```

読み取り ID を保持するために `readingID` という変数を作成します。これは、読み取り値を整理するための方法です。ディープスリープ中に変数の値を保存するには、RTC メモリに保存できます。RTC メモリにデータを保存するには、変数定義の前に `RTC_DATA_ATTR` を追加するだけです。

microSD カードに保存するデータを保持するための String 変数を作成します。

次の 2 行は、NTP サーバーから日付と時刻を要求する NTPClient を定義します。

```c
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);
```

次に、`Setup()` 関数内で NTP クライアントを初期化し、NTP サーバーから日付と時刻を取得します。タイムゾーンに合わせて時刻を調整するには、`setTimeOffset(<time>)` メソッドを使用できます。

すべての初期化が完了したら、測定値とタイムスタンプを取得し、それらをすべて microSD カードに記録できます。

コードをより理解しやすくするために、次の関数を作成しました。

- `getReadings()`: Multichannel Gas Sensor からガス値を読み取ります。
- `getTimeStamp()`: NTP サーバーから日付と時刻を取得します。
- `logSDcard()`: 上記のデータを microSD カードに記録します。

最後に、ESP32 がディープスリープを開始します。

```c
esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
esp_deep_sleep_start();
```

これら 2 つの関数を組み合わせて使用することをお勧めします。ウェイクアップ時間を設定したら、XIAO ができるだけ早くディープスリープモードに入れるようにしてください。

## シリアルペリフェラルインターフェースフラッシュファイルシステム（SPIFFS）

:::caution
このセクションは XIAO ESP32C3、XIAO ESP32S3、または XIAO ESP32S3 Sense に適用されますが、このセクションは Arduino IDE 2.X をサポートしていません。
:::

ESP32 には Serial Peripheral Interface Flash File System（SPIFFS）が含まれています。SPIFFS は、ESP32 のフラッシュメモリのように SPI バスで接続されたフラッシュチップを持つマイクロコントローラ向けに作成された軽量ファイルシステムです。この記事では、Arduino IDE 用プラグインを使用して、ESP32 のファイルシステムにファイルを簡単にアップロードする方法を紹介します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.jpg" style={{width:1000, height:'auto'}}/></div>

SPIFFS を使用すると、コンピュータの通常のファイルシステムと同様にフラッシュメモリへアクセスできますが、より単純で制限があります。ファイルの読み取り、書き込み、クローズ、削除が可能です。この記事執筆時点では、SPIFFS はディレクトリをサポートしていないため、すべてがフラットな構造で保存されます。

XIAO ESP32 で SPIFFS を使用すると、特に次のような用途に便利です。

- 設定を含む構成ファイルの作成
- データを永続的に保存
- microSD カードを使用する代わりに、少量のデータを保存するファイルを作成
- Web サーバーを構築するための HTML および CSS ファイルの保存
- 画像、図、アイコンの保存

### Arduino ESP32 Filesystem Uploader のインストール

Arduino IDE 上で自分でコードを書けば、ESP32 のファイルシステムにファイルを作成・保存・書き込みできます。しかしこの方法はあまり実用的ではありません。というのも、ファイルの内容を Arduino スケッチ内にすべて入力しなければならないからです。

幸いなことに、Arduino IDE 用のプラグインがあり、コンピュータ上のフォルダから ESP32 のファイルシステムにファイルを直接アップロードできます。これにより、ファイルを扱う作業が非常に簡単になります。では、インストールしてみましょう。

:::note
注：この記事執筆時点では、ESP32 Filesystem Uploader プラグインは **Arduino 2.0 ではサポートされていません**。
:::

#### Windows

**ステップ 1.** [releases ページ](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/) にアクセスし、[ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) ファイルをクリックしてダウンロードします。

**ステップ 2.** Sketchbook の場所を確認します。Arduino IDE で **File > Preferences** に進み、Sketchbook の場所を確認します。私の場合は次のパスです：`C:\Users\mengd\Documents\Arduino`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.png" style={{width:700, height:'auto'}}/></div>

**ステップ 3.** Sketchbook の場所に移動し、**tools** フォルダを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/74.png" style={{width:400, height:'auto'}}/></div>

**ステップ 4.** ダウンロードした _.zip_ フォルダを解凍します。開いて、ESP32FS フォルダを前のステップで作成した tools フォルダにコピーします。次のようなフォルダ構成になっているはずです。

`<Sketchbook-location>/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/75.png" style={{width:500, height:'auto'}}/></div>

**ステップ 5.** 最後に、Arduino IDE を再起動します。

プラグインが正しくインストールされたか確認するには、Arduino IDE を開きます。**XIAO ESP32S3** または **XIAO ESP32C3** を選択し、**Tools** に進んで **ESP32 Sketch Data Upload** オプションがあるか確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/76.png" style={{width:600, height:'auto'}}/></div>

#### MacOS

**ステップ 1.** [releases ページ](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/) にアクセスし、[ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) ファイルをクリックしてダウンロードします。

**ステップ 2.** ファイルを展開します。

**ステップ 3.** `/Documents/Arduino/` に **tools** というフォルダを作成します。

**ステップ 4.** 展開した **ESP32FS** フォルダを **tools** ディレクトリにコピーします。次のようなフォルダ構成になっているはずです。

`~Documents/Arduino/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/77.png" style={{width:500, height:'auto'}}/></div>

**ステップ 5.** 最後に、Arduino IDE を再起動します。

プラグインが正しくインストールされたか確認するには、Arduino IDE を開きます。**XIAO ESP32S3** または **XIAO ESP32C3** を選択し、**Tools** に進んで **ESP32 Sketch Data Upload** オプションがあるか確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/78.png" style={{width:600, height:'auto'}}/></div>

### Filesystem Uploader を使ったファイルのアップロード

ESP32 のファイルシステムにファイルをアップロードするには、次の手順に従ってください。

**ステップ 6.** Arduino スケッチを作成して保存します。デモ用として、空のスケッチを保存してもかまいません。

**ステップ 7.** 次に、スケッチフォルダを開きます。**Sketch > Show Sketch Folder** に進みます。スケッチが保存されているフォルダが開くはずです。

**ステップ 8.** そのフォルダ内に **data** という新しいフォルダを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/79.png" style={{width:400, height:'auto'}}/></div>

**ステップ 9.** data フォルダ内に、ESP32 のファイルシステムに保存したいファイルを配置します。例として、**test_example** という名前で、いくつかのテキストを含む _.txt_ ファイルを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/80.png" style={{width:700, height:'auto'}}/></div>

**ステップ 10.** その後、ファイルをアップロードするには、Arduino IDE で **Tools > ESP32 Sketch Data Upload** に進むだけです。

:::caution
アップローダーは、ファイルシステムにすでに保存されているものをすべて上書きします。
:::

**SPIFFS Image Uploaded** というメッセージが表示されたら、ファイルは正常に ESP32 のファイルシステムにアップロードされています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/81.png" style={{width:800, height:'auto'}}/></div>

### アップローダーのテスト

では、そのファイルが実際に ESP32 のファイルシステムに保存されたかどうかを確認してみましょう。次のコードを ESP32 ボードに書き込むだけです。

```cpp
#include "SPIFFS.h"

void setup() {
  Serial.begin(115200);
  while(!Serial);

  if(!SPIFFS.begin(true)){
    Serial.println("An Error has occurred while mounting SPIFFS");
    return;
  }

  File file = SPIFFS.open("/test_example.txt");
  if(!file){
    Serial.println("Failed to open file for reading");
    return;
  }

  Serial.println("File Content:");
  while(file.available()){
    Serial.write(file.read());
  }
  file.close();

}

void loop() {

}
```

アップロード後、ボーレートを 115200 に設定してシリアルモニタを開きます。シリアルモニタ上に _.txt_ ファイルの内容が表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/82.png" style={{width:800, height:'auto'}}/></div>

## フラッシュデータストレージ

:::caution
このセクションは、XIAO ESP32C3、XIAO ESP32S3、または XIAO ESP32S3 Sense に適用されます。
:::

開発ボードを使用する際、多くの人はチップ上のフラッシュメモリを使って重要なデータを保存したいと考えるでしょう。そのためには、開発ボードに異常が発生した場合でもデータが失われないことを保証するストレージ方式が必要です。

このチュートリアルでは、XIAO ESP32 のフラッシュメモリに重要なデータを保存する 2 つの異なるストレージ方法について紹介します。

1. 最初のガイドでは、Preferences.h ライブラリを使用して ESP32 のフラッシュメモリにデータを永続的に保存する方法を示します。フラッシュメモリに保持されたデータは、リセットや電源断後も保持されます。Preferences.h ライブラリを使用すると、ネットワーク認証情報、API キー、しきい値、さらには GPIO の最後の状態などのデータを保存するのに便利です。フラッシュメモリへのデータの保存と読み出し方法を学びます。

2. 2 つ目のガイドでは、XIAO ESP32C3 の EEPROM とは何か、そしてそれが何に役立つのかを説明します。また、EEPROM への書き込みと読み出し方法を紹介し、学んだ概念を実践に移すためのプロジェクト例を構築します。

このセクションは XIAO ESP32C3 向けに作成されており、新しい XIAO ESP32S3 と完全な互換性があります。そのため、ここにあるルーチンをそのまま使用でき、ここでは改めて説明しません。

- [XIAO ESP32C3 Data Permanently in different ways](https://wiki.seeedstudio.com/ja/xiaoesp32c3-flash-storage/)

## トラブルシューティング

## 引用・参考文献

この記事は、ESP32 上のファイルシステムに関する **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** の内容を参考にし、Seeed Studio XIAO ESP32S3 Sense 上で検証したものです。

**Random Nerd Tutorials** の著者の皆様の多大なご尽力に心より感謝いたします。

以下は元記事への参照リンクです。ESP32 のファイルシステムについてさらに詳しく知りたい方は、ぜひ以下の元記事リンクをご覧ください。

- [ESP32: Guide for MicroSD Card Module using Arduino IDE](https://randomnerdtutorials.com/esp32-microsd-card-arduino/)
- [ESP32 Data Logging Temperature to MicroSD Card](https://randomnerdtutorials.com/esp32-data-logging-temperature-to-microsd-card/)
- [Install ESP32 Filesystem Uploader in Arduino IDE](https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/)

ESP32 開発ボードの使用に関する詳細情報については、Random Nerd Tutorials の公式ウェブサイトをお読みください。

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
