---
description: このチュートリアルでは、XIAO ESP32S3でmicroSDカードとファイルシステムを使用する方法について説明します。
title: Sense版のMicroSDカード
keywords:
  - xiao esp32s3
  - esp32s3
  - tf
  - sd
  - file
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_sense_filesystem
last_update:
  date: 09/15/2024
  author: Priyanshu Roy
---

# ファイルシステムとXIAO ESP32S3 Sense

このチュートリアルでは、XIAO ESP32S3のファイルシステムの使用に焦点を当て、主にSense版のmicroSDカードスロットの使用について説明します。同時に、公式のESPファイルシステムSPIFFS、チップ内蔵のFlashなども紹介します。

:::tip
このチュートリアルのmicroSDカード部分は**XIAO ESP32S3 Sense**にのみ適用されます。その他の内容はESP32-S3チップに適用されるため、microSDカード以外の例はXIAO ESP32S3で実行できます。
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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## はじめに

このチュートリアルではmicroSDカードを使用するため、事前にSense拡張ボードをインストールし、microSDカードを準備する必要があります。

### 拡張ボードのインストール（Sense用）

拡張ボードのインストールは非常に簡単です。拡張ボードのコネクタをXIAO ESP32S3のB2Bコネクタに合わせ、しっかりと押し込んで「カチッ」という音が聞こえれば、インストール完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### microSDカードの準備

XIAO ESP32S3 Senseは最大**32GB**のmicroSDカードをサポートしているため、XIAO用のmicroSDカードを購入予定の場合は、この仕様を参考にしてください。microSDカードを使用する前に、**FAT32**形式でフォーマットしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

フォーマット後、microSDカードをmicroSDカードスロットに挿入できます。挿入方向にご注意ください。金色の端子面が内側を向くようにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
microSDカードがESP32S3で認識されないが、コンピュータでは認識される**かつ**エラーが次のような場合：

```shell
[  7273][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
[  7274][E][sd_diskio.cpp:759] sdcard_mount(): f_mount failed: (3) The physical drive cannot work
[  7588][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
Card Mount Failed
```

以下の手順を実行してください：

- Windows フォーマッターを使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard1.png" style={{width:500, height:'auto'}}/></div>

- [SD Card Formatter](https://www.sdcard.org/downloads/formatter/)（サードパーティソフトウェア）を使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard2.png" style={{width:500, height:'auto'}}/></div>

**注意：**

- この処理はクイックフォーマットよりもかなり長い時間がかかります。

- これらのケースは、以前に他の目的で使用されたmicroSDカードを再利用する場合に発生します（例：Linux OSが含まれているmicroSDカードを再利用する場合）。

:::

### 拡張ボード用カードスロット回路設計

XIAO ESP32S3 SenseカードスロットはESP32-S3の4つのGPIOを占有し、占有するピンの詳細は以下の表に示されています。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">microSD Card Slot</th>
        </tr>
        <tr>
            <td align="center">GPIO21</td>
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

これは、拡張ボードのmicroSDカード機能を使用することを選択した場合、XIAO ESP32S3のSPI機能も同時に使用できないことを意味します。J3のパッドを接続/切断することで、microSDカード機能をオン/オフできます。

<table align="center">
 <tr>
     <th>SPIピンを使用したい場合 / 拡張ボードのSDカードを無効にする場合</th>
     <th>拡張ボードのSDカードを有効にしたい場合 / SPIピンを無効にする場合</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
 </tr>
  <tr>
    <td>白い細い線に沿ってカットし、はんだパッドの接続を切断します。</td>
    <td>2つのはんだパッドをはんだ付けして接続します。</td>
  </tr>
</table>

:::tip
デフォルトでは、拡張ボードが取り付けられた後、microSDカード機能が有効になります。
:::

## microSDカード内のファイルを変更する

:::caution
このセクションはXIAO ESP32S3 Senseのみに適用されます。
:::

Arduino IDEには、XIAO ESP32S3を使用してmicroSDカード上のファイルを処理する方法を示すいくつかの例があります。Arduino IDEで、**File > Examples > SD > SD_Test**に移動するか、以下のコードをコピーしてください。

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
サンプルプログラムを直接使用することはできないことに注意してください。プログラムが動作するように、プログラムに軽微な修正を加える必要があります。修正は、`Setup()` 関数内の元のコードを `SD.begin()` から `SD.begin(21)` に変更することです。初期化のためのピン番号を指定します。
:::

プログラムをXIAO ESP32S3 Senseにアップロードし、シリアルモニターを開くと、ファイル作成プロセスと書き込みプロセスが表示されます。また、microSDからUSBを使用して、コンピューター経由で新しく作成されたファイルと内容にアクセスすることもできます。

<div class="table-center">
    <table align="center">
        <tr>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.png" style={{width:500, height:'auto'}}/></div></td>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/69.png" style={{width:500, height:'auto'}}/></div></td>
        </tr>
    </table>
</div>

### プログラムの注釈

まず、以下のライブラリをインクルードする必要があります：ファイルを処理するための **FS.h**、microSDカードとのインターフェースのための **SD.h**、そして **SPI** 通信プロトコルを使用するための **SPI.h**。

1. `setup()` 内で、以下の行が `SD.begin(21)` でmicroSDカードを初期化します。ここで、`SD.begin()` にパラメータを渡す必要があり、それはCSピンです。そして拡張ボードのmicroSDカード設計では、CSピンは **GPIO 21** に接続されています。XIAO用のRound Displayを使用している場合は、渡すパラメータは **D2** である必要があります。

2. 以下の行はmicroSDカードのタイプをシリアルモニターに出力します。

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

3. `cardSize()` メソッドを呼び出すことで、microSDカードのサイズを取得できます：

```c
uint64_t cardSize = SD.cardSize() / (1024 * 1024);
Serial.printf("SD Card Size: %lluMB\n", cardSize);
```

**この例では、microSDカード上のファイルを処理するためのいくつかの関数を提供しています。**

4. `listDir()`関数は、SDカード上のディレクトリを一覧表示します。この関数は、ファイルシステム（SD）、メインディレクトリの名前、およびディレクトリに入るレベルを引数として受け取ります。

   この関数を呼び出す方法の例を以下に示します。`/`はmicroSDカードのルートディレクトリに対応します。

```c
listDir(SD, "/", 0);
```

5. `createDir()` 関数は新しいディレクトリを作成します。引数として `SD` ファイルシステムとディレクトリ名のパスを渡します。例えば、以下のコマンドはルートに `mydir` という新しいディレクトリを作成します。

```c
createDir(SD, "/mydir");
```

6. microSDカードからディレクトリを削除するには、`removeDir()`関数を使用し、引数としてSDファイルシステムとディレクトリ名のパスを渡します。

```c
removeDir(SD, "/mydir");
```

7. `readFile()`関数はファイルの内容を読み取り、シリアルモニターに内容を出力します。前の関数と同様に、引数として`SD`ファイルシステムとファイルパスを渡します。例えば、以下の行は`hello.txt`ファイルの内容を読み取ります。

```c
readFile(SD, "/hello.txt")
```

8. ファイルにコンテンツを書き込むには、`writeFile()` 関数を使用できます。引数として、`SD` ファイルシステム、ファイルパス、メッセージを渡します。以下の行は `hello.txt` ファイルに `Hello` を書き込みます。

```c
writeFile(SD, "/hello.txt", "Hello ");
```

9. 同様に、`appendFile()` 関数を使用してファイルにコンテンツを追加する（以前のコンテンツを上書きしない）ことができます。次の行は `hello.txt` ファイルに `World!\n` というメッセージを追加します。`\n` は、次回ファイルに何かを書き込む際に新しい行に書き込まれることを意味します。

```c
appendFile(SD, "/hello.txt", "World!\n");
```

10. `renameFile()`関数を使用してファイルの名前を変更できます。引数としてSDファイルシステム、元のファイル名、新しいファイル名を渡します。次の行は`hello.txt`ファイルを`foo.txt`に名前変更します。

```c
renameFile(SD, "/hello.txt", "/foo.txt");
```

11. `deleteFile()`関数を使用してファイルを削除します。引数としてSDファイルシステムと削除したいファイルのファイルパスを渡します。以下の行はmicroSDカードから`foo.txt`ファイルを削除します。

```c
deleteFile(SD, "/foo.txt");
```

12. `testFileIO()` 関数は、ファイルの内容を読み取るのにかかる時間を示します。以下の関数は test.txt ファイルをテストします。

```c
testFileIO(SD, "/test.txt");
```

## ガスデータロギングに基づくMicroSDカードアプリケーション

:::caution
このセクションはXIAO ESP32S3 Senseのみに適用されます。
:::

このプロジェクトでは、XIAO ESP32S3 Senseを使用してタイムスタンプ付きのデータをTFカードにログする方法を示します。例として、マルチチャンネルガスセンサーから10分ごとに温度測定値をログします。XIAO ESP32S3は各測定の間はディープスリープモードになり、Network Time Protocol（NTP）を使用して日付と時刻を要求します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/72.jpg" style={{width:800, height:'auto'}}/></div>

このプロジェクトを完了するには、以下のハードウェアを事前に準備する必要があります。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

ソフトウェアについては、Arduino IDE用に以下のライブラリを事前にインストールする必要があります。

- TaranaisによってフォークされたNTPClientライブラリ

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/taranais/NTPClient" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

- Multichannel Gas Sensorライブラリ

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_MultiGas" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

以下は完全なサンプルプログラムです。プログラムではネットワーク時刻同期を使用する必要があるため、プログラム内のWiFi名とパスワードをあなたのものに変更する必要があります。

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

プログラムをコンパイルしてアップロードし、シリアルポートモニターを開きます。プログラムが正常に動作すると、シリアルモニターから以下のメッセージ出力が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/70.png" style={{width:700, height:'auto'}}/></div>

いつでも便利な時にmicroSDカードを取り外し、カードリーダー経由で保存されたセンサーデータにアクセスできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/71.png" style={{width:500, height:'auto'}}/></div>

:::note
テストを容易にするため、効果は毎分データを保存するように表示されていますが、実際に提供されるサンプルコードは10分に1回データを保存します。
:::

:::caution
このプロジェクトについて以下の点にご注意ください：

1. Multichannel Gas Sensorは、取得される値が正確になる前にウォームアップ期間が必要です。そのため、記録される最初の数セットのデータは、エラーが大きい場合は破棄することを検討できます。
2. シリアルモニターは保存情報を一度だけ出力します。この例ではディープスリープ機能を使用しているため、起動後はリセットと同等であり、つまり次のデバッグ情報を見るためにはArduinoのシリアルポートを再度開く必要があります。しかし、カードに問題がなければ、設定した時間にセンサーデータが時間通りに収集されるのでご安心ください。

   :::

### プログラム注釈

この例では、XIAO ESP32S3は各読み取りの間にディープスリープモードになります。ディープスリープモードでは、XIAO ESP32S3は`loop()`に到達することがないため、すべてのコードは`setup()`関数内に配置する必要があります。

この例では、マイクロ秒から秒への変換係数を使用しているため、`TIME_TO_SLEEP`変数でスリープ時間を秒単位で設定できます。この場合、XIAO ESP32S3を10分間（600秒）スリープするように設定しています。XIAO ESP32S3を異なる期間スリープさせたい場合は、`TIME_TO_SLEEP`変数にディープスリープの秒数を入力するだけです。

```c
// Define deep sleep options
uint64_t uS_TO_S_FACTOR = 1000000; // Conversion factor for micro seconds to seconds
// Sleep for 10 minutes = 600 seconds
uint64_t TIME_TO_SLEEP = 600;
```

次に、microSDカードCSピンを定義します。この場合、**GPIO 21**に設定されています。

```c
#define SD_CS 21
```

`readingID`という変数を作成して、読み取りIDを保持します。これは読み取りデータを整理するための方法です。ディープスリープ中に変数の値を保存するには、RTC メモリに保存できます。RTC メモリにデータを保存するには、変数定義の前に `RTC_DATA_ATTR` を追加するだけです。

microSD カードに保存するデータを保持するための String 変数を作成します。

以下の2行は、NTP サーバーから日付と時刻を要求するための NTPClient を定義しています。

```c
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);
```

次に、`Setup()`関数でNTPクライアントを初期化して、NTPサーバーから日付と時刻を取得します。`setTimeOffset(<time>)`メソッドを使用して、お住まいのタイムゾーンに合わせて時刻を調整できます。

すべてが初期化された後、測定値を取得し、タイムスタンプを記録し、すべてをmicroSDカードにログ記録できます。

コードを理解しやすくするために、以下の関数を作成しました：

- `getReadings()`：マルチチャンネルガスセンサーからガス値を読み取ります；
- `getTimeStamp()`：NTPサーバーから日付と時刻を取得します；
- `logSDcard()`：前述のデータをmicroSDカードにログ記録します。

最後に、ESP32はディープスリープを開始します。

```c
esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
esp_deep_sleep_start();
```

これらの2つの機能を一緒に使用することをお勧めします。ウェイクアップ時間を設定した後、XIAOができるだけ早くディープスリープモードに入ることができるようにしてください。

## シリアルペリフェラルインターフェースフラッシュファイルシステム（SPIFFS）

:::caution
このセクションはXIAO ESP32C3、XIAO ESP32S3、またはXIAO ESP32S3 Senseに適用されますが、このセクションはArduino IDE 2.Xをサポートしていません。
:::

ESP32にはシリアルペリフェラルインターフェースフラッシュファイルシステム（SPIFFS）が含まれています。SPIFFSは、ESP32フラッシュメモリのようにSPIバスで接続されたフラッシュチップを持つマイクロコントローラー用に作成された軽量ファイルシステムです。この記事では、Arduino IDE用のプラグインを使用してESP32ファイルシステムにファイルを簡単にアップロードする方法を紹介します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.jpg" style={{width:1000, height:'auto'}}/></div>

SPIFFSを使用すると、コンピューターの通常のファイルシステムと同じようにフラッシュメモリにアクセスできますが、よりシンプルで制限があります。ファイルの読み取り、書き込み、クローズ、削除ができます。この記事を書いている時点では、SPIFFSはディレクトリをサポートしていないため、すべてがフラット構造で保存されます。

XIAO ESP32でSPIFFSを使用することは、特に以下の場合に便利です：

- 設定を含む設定ファイルの作成
- データの永続的な保存
- microSDカードを使用する代わりに少量のデータを保存するファイルの作成
- Webサーバーを構築するためのHTMLおよびCSSファイルの保存
- 画像、図、アイコンの保存

### Arduino ESP32 Filesystem Uploaderのインストール

Arduino IDEでコードを自分で書くことで、ESP32ファイルシステムにファイルを作成、保存、書き込みできます。これはあまり便利ではありません。なぜなら、Arduinoスケッチでファイルの内容を入力する必要があるからです。

幸い、コンピューター上のフォルダーからESP32ファイルシステムに直接ファイルをアップロードできるArduino IDE用のプラグインがあります。これにより、ファイルの操作が本当に簡単でシンプルになります。インストールしてみましょう。

:::note
注意：この記事を書いている時点では、ESP32 Filesystem UploaderプラグインはArduino 2.0で**サポートされていません**。
:::

#### Windows

**ステップ1.** [リリースページ](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/)に移動し、[ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip)ファイルをクリックしてダウンロードします。

**ステップ2.** スケッチブックの場所を見つけます。Arduino IDEで、**File > Preferences**に移動し、スケッチブックの場所を確認します。私の場合、次のパスにあります：`C:\Users\mengd\Documents\Arduino`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.png" style={{width:700, height:'auto'}}/></div>

**ステップ3.** スケッチブックの場所に移動し、**tools**フォルダーを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/74.png" style={{width:400, height:'auto'}}/></div>

**ステップ4.** ダウンロードした_.zip_フォルダーを解凍します。それを開き、ESP32FSフォルダーを前のステップで作成したtoolsフォルダーにコピーします。次のようなフォルダー構造になるはずです：

`<Sketchbook-location>/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/75.png" style={{width:500, height:'auto'}}/></div>

**ステップ5.** 最後に、Arduino IDEを再起動します。

プラグインが正常にインストールされたかどうかを確認するには、Arduino IDEを開きます。**XIAO ESP32S3**または**XIAO ESP32C3**を選択し、**Tools**に移動して、**ESP32 Sketch Data Upload**オプションがあることを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/76.png" style={{width:600, height:'auto'}}/></div>

#### MacOS

**ステップ1.** [リリースページ](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/)に移動し、[ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip)ファイルをクリックしてダウンロードします。

**ステップ2.** ファイルを解凍します。

**ステップ3.** `/Documents/Arduino/`に**tools**というフォルダーを作成します。

**ステップ4.** 解凍した**ESP32FS**フォルダーを**tools**ディレクトリにコピーします。次のようなフォルダー構造になるはずです。

`~Documents/Arduino/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/77.png" style={{width:500, height:'auto'}}/></div>

**ステップ5.** 最後に、Arduino IDEを再起動します。

プラグインが正常にインストールされたかどうかを確認するには、Arduino IDEを開きます。**XIAO ESP32S3**または**XIAO ESP32C3**を選択し、**Tools**に移動して、**ESP32 Sketch Data Upload**オプションがあることを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/78.png" style={{width:600, height:'auto'}}/></div>

### Filesystem Uploaderを使用したファイルのアップロード

ESP32ファイルシステムにファイルをアップロードするには、次の手順に従ってください。

**ステップ6.** Arduinoスケッチを作成して保存します。デモンストレーション目的で、空のスケッチを保存できます。

**ステップ7.** 次に、スケッチフォルダーを開きます。**Sketch > Show Sketch Folder**に移動できます。スケッチが保存されているフォルダーが開くはずです。

**ステップ8.** そのフォルダー内に、**data**という新しいフォルダーを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/79.png" style={{width:400, height:'auto'}}/></div>

**ステップ9.** dataフォルダー内は、ESP32ファイルシステムに保存したいファイルを置く場所です。例として、**test_example**という名前のテキストを含む_.txt_ファイルを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/80.png" style={{width:700, height:'auto'}}/></div>

**ステップ10.** 次に、ファイルをアップロードするには、Arduino IDEで**Tools > ESP32 Sketch Data Upload**に移動するだけです。

:::caution
アップローダーは、ファイルシステムに既に保存されているものをすべて上書きします。
:::

**SPIFFS Image Uploaded**メッセージが表示されると、ファイルがESP32ファイルシステムに正常にアップロードされました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/81.png" style={{width:800, height:'auto'}}/></div>

### アップローダーのテスト

それでは、ファイルが実際にESP32ファイルシステムに保存されたかどうかを確認してみましょう。次のコードをESP32ボードにアップロードするだけです。

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

アップロード後、ボーレート115200でシリアルモニターを開きます。シリアルモニター上に _.txt_ ファイルの内容が表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/82.png" style={{width:800, height:'auto'}}/></div>

## フラッシュデータストレージ

:::caution
このセクションはXIAO ESP32C3、XIAO ESP32S3、またはXIAO ESP32S3 Senseに適用されます。
:::

開発ボードを使用する際、多くの方がチップ上のフラッシュメモリを使用して重要なデータを保存したいと考えるでしょう。これには、開発ボードに異常が発生した場合でもデータが失われないことを保証するストレージ方法が必要です。

このチュートリアルでは、以下の2つの異なるストレージ方法から、XIAO ESP32フラッシュメモリに重要なデータを保存する方法を紹介します：

1. 最初のガイドでは、Preferences.hライブラリを使用してESP32フラッシュメモリにデータを永続的に保存する方法を示します。フラッシュメモリに保持されたデータは、リセットや電源障害を越えて持続します。Preferences.hライブラリの使用は、ネットワーク認証情報、APIキー、閾値、またはGPIOの最後の状態などのデータを保存するのに便利です。フラッシュメモリからデータを保存および読み取りする方法を学習します。

2. 2番目のガイドでは、XIAO ESP32C3 EEPROMとは何か、そして何に役立つかを説明します。また、EEPROMへの書き込みと読み取りの方法を示し、学習した概念を実践に移すプロジェクト例を構築します。

このセクションはXIAO ESP32C3向けに書かれており、新しいXIAO ESP32S3と完全に互換性があるため、ここでのルーチンを直接使用できます。そのため、ここでは再度説明しません。

- [XIAO ESP32C3 異なる方法でのデータ永続化](https://wiki.seeedstudio.com/ja/xiaoesp32c3-flash-storage/)

## トラブルシューティング

## 引用と参考文献

この記事は**[Random Nerd Tutorials](https://randomnerdtutorials.com/)**のESP32に関するファイルシステムコンテンツを参考にし、Seeed Studio XIAO ESP32S3 Senseで検証して使用しています。

**Random Nerd Tutorials**の著者の皆様の努力に特別な感謝を表します！

以下は元記事への参考リンクです。以下の元記事へのリンクを通じて、ESP32ファイルシステムについてより詳しく学習することを歓迎します。

- [ESP32: Guide for MicroSD Card Module using Arduino IDE](https://randomnerdtutorials.com/esp32-microsd-card-arduino/)
- [ESP32 Data Logging Temperature to MicroSD Card](https://randomnerdtutorials.com/esp32-data-logging-temperature-to-microsd-card/)
- [Install ESP32 Filesystem Uploader in Arduino IDE](https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/)

ESP32開発ボードの使用に関する詳細情報については、Random Nerd Tutorialsの公式ウェブサイトをお読みください。

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
