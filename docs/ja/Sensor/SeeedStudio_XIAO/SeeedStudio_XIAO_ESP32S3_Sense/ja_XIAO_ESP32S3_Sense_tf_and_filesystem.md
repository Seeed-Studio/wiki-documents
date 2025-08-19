---
description: このチュートリアルでは、XIAO ESP32S3でのmicroSDカードとファイルシステムの使用方法について説明します。
title: Senseバージョン用のMicroSDカード
keywords:
  - xiao esp32s3
  - esp32s3
  - tf
  - sd
  - ファイル
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_sense_filesystem
last_update:
  date: 05/15/2025
  author: Priyanshu Roy
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# ファイルシステムとXIAO ESP32S3 Sense

このチュートリアルでは、XIAO ESP32S3のファイルシステムの使用に焦点を当て、主にSenseバージョンのmicroSDカードスロットの使用について説明します。同時に、公式のESPファイルシステムSPIFFSや、チップ内蔵のFlashなどについても紹介します。

:::tip
このチュートリアルのmicroSDカード部分は**XIAO ESP32S3 Sense**に**のみ**適用されます。それ以外の内容はESP32-S3チップに適用されるため、microSDカードを除く例をXIAO ESP32S3で実行できます。
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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## はじめに

このチュートリアルではmicroSDカードを使用するため、事前にSense拡張ボードを取り付け、microSDカードを準備する必要があります。

### 拡張ボードの取り付け（Sense用）

拡張ボードの取り付けは非常に簡単です。拡張ボードのコネクタをXIAO ESP32S3のB2Bコネクタに合わせ、しっかり押し込んで「カチッ」という音が聞こえたら取り付け完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### microSDカードの準備

XIAO ESP32S3 Senseは**32GB**までのmicroSDカードをサポートしています。そのため、XIAO用にmicroSDカードを購入する際は、この仕様を参考にしてください。また、使用前にmicroSDカードを**FAT32**形式でフォーマットしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

フォーマット後、microSDカードをmicroSDカードスロットに挿入できます。挿入方向に注意してください。金色の端子が内側を向くようにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
もしmicroSDカードがESP32S3で認識されず、コンピュータでは認識される場合、**以下のようなエラー**が発生することがあります：

```shell
[  7273][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
[  7274][E][sd_diskio.cpp:759] sdcard_mount(): f_mount failed: (3) The physical drive cannot work
[  7588][E][sd_diskio.cpp:200] sdCommand(): Card Failed! cmd: 0x00
Card Mount Failed
```

以下の手順を試してください：

- Windowsフォーマッタを使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard1.png" style={{width:500, height:'auto'}}/></div>

- [SD Card Formatter](https://www.sdcard.org/downloads/formatter/)（サードパーティソフトウェア）を使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/sdcard2.png" style={{width:500, height:'auto'}}/></div>

**注意：**

- このプロセスはクイックフォーマットよりもかなり時間がかかります。

- この問題は、以前に他の目的（例：Linux OSが含まれていたmicroSDカード）で使用されていたmicroSDカードを再利用する場合に発生することがあります。

:::

### 拡張ボード用カードスロット回路設計

XIAO ESP32S3 SenseのカードスロットはESP32-S3の4つのGPIOを占有しており、占有するピンの詳細は以下の表に示されています。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">microSDカードスロット</th>
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

これはつまり、拡張ボードのmicroSDカード機能を使用する場合、XIAO ESP32S3のSPI機能を同時に使用することはできないことを意味します。J3のパッドを接続/切断することでmicroSDカード機能をオン/オフできます。

<table align="center">
	<tr>
	    <th>SPIピンを使用したい場合 / 拡張ボードのSDカードを無効化</th>
	    <th>拡張ボードのSDカードを有効化したい場合 / SPIピンを無効化</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
	</tr>
  <tr>
    <td>白い細い線に沿って切断し、はんだパッドの接続を解除します。</td>
    <td>2つのはんだパッドを一緒にはんだ付けします。</td>
  </tr>
</table>

:::tip
拡張ボードをインストールすると、デフォルトで microSD カード機能が有効になります。
:::

## microSDカード内のファイルを変更する

:::caution
このセクションは XIAO ESP32S3 Sense のみに適用されます。
:::

Arduino IDE には、XIAO ESP32S3 を使用して microSD カード上のファイルを操作する方法を示すいくつかの例があります。Arduino IDE で **File > Examples > SD > SD_Test** に移動するか、以下のコードをコピーしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/68.png" style={{width:700, height:'auto'}}/></div>

```cpp
#include "FS.h"
#include "SD.h"
#include "SPI.h"

void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("ディレクトリをリスト: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("ディレクトリのオープンに失敗しました");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("ディレクトリではありません");
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
    Serial.printf("ディレクトリを作成: %s\n", path);
    if(fs.mkdir(path)){
        Serial.println("ディレクトリが作成されました");
    } else {
        Serial.println("mkdir に失敗しました");
    }
}

void removeDir(fs::FS &fs, const char * path){
    Serial.printf("ディレクトリを削除: %s\n", path);
    if(fs.rmdir(path)){
        Serial.println("ディレクトリが削除されました");
    } else {
        Serial.println("rmdir に失敗しました");
    }
}

void readFile(fs::FS &fs, const char * path){
    Serial.printf("ファイルを読み込み: %s\n", path);

    File file = fs.open(path);
    if(!file){
        Serial.println("ファイルの読み込みに失敗しました");
        return;
    }

    Serial.print("ファイルから読み込み: ");
    while(file.available()){
        Serial.write(file.read());
    }
    file.close();
}

void writeFile(fs::FS &fs, const char * path, const char * message){
    Serial.printf("ファイルを書き込み: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("ファイルの書き込みに失敗しました");
        return;
    }
    if(file.print(message)){
        Serial.println("ファイルが書き込まれました");
    } else {
        Serial.println("書き込みに失敗しました");
    }
    file.close();
}

void appendFile(fs::FS &fs, const char * path, const char * message){
    Serial.printf("ファイルに追記: %s\n", path);

    File file = fs.open(path, FILE_APPEND);
    if(!file){
        Serial.println("ファイルの追記に失敗しました");
        return;
    }
    if(file.print(message)){
        Serial.println("メッセージが追記されました");
    } else {
        Serial.println("追記に失敗しました");
    }
    file.close();
}

void renameFile(fs::FS &fs, const char * path1, const char * path2){
    Serial.printf("ファイル名を変更 %s から %s へ\n", path1, path2);
    if (fs.rename(path1, path2)) {
        Serial.println("ファイル名が変更されました");
    } else {
        Serial.println("名前変更に失敗しました");
    }
}

void deleteFile(fs::FS &fs, const char * path){
    Serial.printf("ファイルを削除: %s\n", path);
    if(fs.remove(path)){
        Serial.println("ファイルが削除されました");
    } else {
        Serial.println("削除に失敗しました");
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
        Serial.printf("%u バイトを %u ミリ秒で読み込み\n", flen, end);
        file.close();
    } else {
        Serial.println("ファイルの読み込みに失敗しました");
    }


    file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("ファイルの書き込みに失敗しました");
        return;
    }

    size_t i;
    start = millis();
    for(i=0; i<2048; i++){
        file.write(buf, 512);
    }
    end = millis() - start;
    Serial.printf("%u バイトを %u ミリ秒で書き込み\n", 2048 * 512, end);
    file.close();
}

void setup(){
    Serial.begin(115200);
    while(!Serial);
    if(!SD.begin(21)){
        Serial.println("カードのマウントに失敗しました");
        return;
    }
    uint8_t cardType = SD.cardType();

    if(cardType == CARD_NONE){
        Serial.println("SDカードが接続されていません");
        return;
    }

    Serial.print("SDカードの種類: ");
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
    Serial.printf("SDカードのサイズ: %lluMB\n", cardSize);

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
    Serial.printf("総スペース: %lluMB\n", SD.totalBytes() / (1024 * 1024));
    Serial.printf("使用済みスペース: %lluMB\n", SD.usedBytes() / (1024 * 1024));
}

void loop(){

}
```

:::caution
サンプルプログラムをそのまま使用することはできません。プログラムが動作するように少し修正する必要があります。修正内容は、`Setup()` 関数内の元のコード `SD.begin()` を `SD.begin(21)` に変更することです。初期化のためにピン番号を指定してください。
:::

XIAO ESP32S3 Sense にプログラムをアップロードし、シリアルモニターを開くと、ファイル作成プロセスと書き込みプロセスが表示されます。また、microSD を USB に接続して、新しく作成されたファイルや内容をコンピュータで確認することもできます。

<div class="table-center">
    <table align="center">
        <tr>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.png" style={{width:500, height:'auto'}}/></div></td>
            <td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/69.png" style={{width:500, height:'auto'}}/></div></td>
        </tr>
    </table>
</div>

### プログラムの注釈

まず、以下のライブラリをインクルードする必要があります：ファイル操作用の **FS.h**、microSDカードとのインターフェース用の **SD.h**、および SPI 通信プロトコルを使用するための **SPI.h**。

1. `setup()` 内で、以下のコードにより `SD.begin(21)` を使用して microSDカードを初期化します。この場合、`SD.begin()` に渡すパラメータは CS ピンです。拡張ボードの microSDカード設計では、CS ピンは **GPIO 21** に接続されています。XIAO 用のラウンドディスプレイを使用している場合は、渡すパラメータを **D2** にする必要があります。

2. 以下のコードは、シリアルモニターに microSDカードの種類を表示します。

```c
uint8_t cardType = SD.cardType();

if(cardType == CARD_NONE){
    Serial.println("No SD card attached"); // SDカードが接続されていません
    return;
}

Serial.print("SD Card Type: "); // SDカードの種類：
if(cardType == CARD_MMC){
    Serial.println("MMC");
} else if(cardType == CARD_SD){
    Serial.println("SDSC");
} else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
} else {
    Serial.println("UNKNOWN"); // 不明
}
```

3. `cardSize()` メソッドを呼び出すことで、microSDカードのサイズを取得できます：

```c
uint64_t cardSize = SD.cardSize() / (1024 * 1024);
Serial.printf("SD Card Size: %lluMB\n", cardSize); // SDカードサイズ：
```

**この例では、microSDカード上のファイルを操作するためのいくつかの関数を提供しています。**

4. `listDir()` 関数は、SDカード上のディレクトリを一覧表示します。この関数は、ファイルシステム（SD）、メインディレクトリ名、およびディレクトリ内の階層レベルを引数として受け取ります。

   以下は、この関数を呼び出す例です。`/` は microSDカードのルートディレクトリを表します。

```c
listDir(SD, "/", 0);
```

5. `createDir()` 関数は、新しいディレクトリを作成します。引数として `SD` ファイルシステムとディレクトリ名のパスを渡します。例えば、以下のコマンドはルートに `mydir` という新しいディレクトリを作成します。

```c
createDir(SD, "/mydir");
```

6. microSDカードからディレクトリを削除するには、`removeDir()` 関数を使用し、引数として SD ファイルシステムとディレクトリ名のパスを渡します。

```c
removeDir(SD, "/mydir");
```

7. `readFile()` 関数は、ファイルの内容を読み取り、シリアルモニターに内容を表示します。これまでの関数と同様に、引数として `SD` ファイルシステムとファイルパスを渡します。例えば、以下のコードは `hello.txt` ファイルの内容を読み取ります。

```c
readFile(SD, "/hello.txt")
```

8. ファイルに内容を書き込むには、`writeFile()` 関数を使用します。引数として、`SD` ファイルシステム、ファイルパス、およびメッセージを渡します。以下のコードは、`hello.txt` ファイルに `Hello` を書き込みます。

```c
writeFile(SD, "/hello.txt", "Hello ");
```

9. 同様に、`appendFile()` 関数を使用して、既存の内容を上書きせずにファイルに内容を追加できます。以下のコードは、`hello.txt` ファイルに `World!\n` というメッセージを追加します。`\n` は、次回ファイルに何かを書き込む際に新しい行に書き込むことを意味します。

```c
appendFile(SD, "/hello.txt", "World!\n");
```

10. ファイル名を変更するには、`renameFile()` 関数を使用します。引数として SD ファイルシステム、元のファイル名、および新しいファイル名を渡します。以下のコードは、`hello.txt` ファイルの名前を `foo.txt` に変更します。

```c
renameFile(SD, "/hello.txt", "/foo.txt");
```

11. ファイルを削除するには、`deleteFile()` 関数を使用します。引数として SD ファイルシステムと削除したいファイルのファイルパスを渡します。以下のコードは、microSDカードから `foo.txt` ファイルを削除します。

```c
deleteFile(SD, "/foo.txt");
```

12. `testFileIO()` 関数は、ファイルの内容を読み取るのにかかる時間を表示します。以下の関数は、`test.txt` ファイルをテストします。

```c
testFileIO(SD, "/test.txt");
```

## ガスデータロギングに基づくMicroSDカードアプリケーション

:::caution
このセクションはXIAO ESP32S3 Senseのみ適用されます。
:::

このプロジェクトでは、XIAO ESP32S3 Senseを使用して、タイムスタンプ付きのデータをTFカードにログする方法を示します。例として、Multichannel Gas Sensorからの温度測定値を10分ごとにログします。XIAO ESP32S3は各測定の間にディープスリープモードに入り、ネットワークタイムプロトコル（NTP）を使用して日付と時刻を取得します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/72.jpg" style={{width:800, height:'auto'}}/></div>

このプロジェクトを完成させるには、以下のハードウェアを事前に準備する必要があります。

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio XIAO用拡張ベース（Grove OLED付き）</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

ソフトウェアについては、事前にArduino IDE用の以下のライブラリをインストールする必要があります。

- Taranaisによるフォーク版NTPClientライブラリ

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/taranais/NTPClient" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

- Multichannel Gas Sensorライブラリ

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_MultiGas" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

以下は完全なサンプルプログラムです。このプログラムではネットワークペアリング時間を使用する必要があるため、WiFi名とパスワードを自分のものに変更してください。

```cpp
#include "FS.h"
#include "SD.h"
#include <SPI.h>

// マルチチャンネルガスライブラリ
#include <Multichannel_Gas_GMXXX.h>
#include <Wire.h>

// NTPサーバーから時刻を取得するライブラリ
#include <NTPClient.h>
#include <WiFiUdp.h>

#include "WiFi.h"

// ディープスリープオプションを定義
uint64_t uS_TO_S_FACTOR = 1000000;  // マイクロ秒から秒への変換係数
// 10分間スリープ = 600秒
uint64_t TIME_TO_SLEEP = 600;

// ネットワーク認証情報を置き換える
const char* ssid     = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

// SDカードモジュールのCSピンを定義
#define SD_CS 21

// RTCメモリに読み取り番号を保存
RTC_DATA_ATTR int readingID = 0;

String dataMessage;

// ガスセンサー変数
int NO2_val, C2H5CH_val, VOC_val, CO_val;
GAS_GMXXX<TwoWire> gas;

// NTPクライアントを定義して時刻を取得
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);

// 日付と時刻を保存する変数
String formattedDate;
String dayStamp;
String timeStamp;

void setup() {
  // デバッグ用にシリアル通信を開始
  Serial.begin(115200);

  // SSIDとパスワードでWi-Fiネットワークに接続
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected.");

  // NTPClientを初期化して時刻を取得
  timeClient.begin();
  // タイムゾーンに合わせてオフセット時間を秒単位で設定
  // 例:
  // GMT +1 = 3600
  // GMT +8 = 28800
  // GMT -1 = -3600
  // GMT 0 = 0
  timeClient.setTimeOffset(3600);

  // SDカードを初期化
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
    return;    // 初期化失敗
  }

  // data.txtファイルが存在しない場合
  // SDカードにファイルを作成し、データラベルを書き込む
  File file = SD.open("/data.txt");
  if(!file) {
    Serial.println("File doesn't exist");
    Serial.println("Creating file...");
    writeFile(SD, "/data.txt", "Reading ID, Date, Hour, NO2, C2H5CH, VOC, CO \r\n");
  }
  else {
    Serial.println("File already exists");
  }
  file.close();

  // ガスセンサーを開始
  gas.begin(Wire, 0x08); // ハードウェアI2Cを使用

  getReadings();
  getTimeStamp();
  logSDCard();

  // 新しい読み取りごとにreadingIDをインクリメント
  readingID++;

  // ディープスリープを開始
  Serial.println("DONE! Going to sleep now.");

  // タイマーウェイクアップを有効化
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  esp_deep_sleep_start();
}

void loop() {
  // ESP32はディープスリープ状態にあるため
  // loop()には到達しません
}

// 温度を取得する関数
void getReadings(){
  // GM102B NO2センサーppm
  NO2_val = gas.getGM102B();
  // GM302B C2H5CHセンサーppm
  C2H5CH_val = gas.getGM302B();
  // GM502B VOCセンサー
  VOC_val = gas.getGM502B();
  // GM702B COセンサー
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

// NTPClientから日付と時刻を取得する関数
void getTimeStamp() {
  while(!timeClient.update()) {
    timeClient.forceUpdate();
  }
  // formattedDateは以下の形式で取得されます:
  // 2018-05-28T16:00:13Z
  // 日付と時刻を抽出する必要があります
  formattedDate = timeClient.getFormattedDate();
  Serial.println(formattedDate);

  // 日付を抽出
  int splitT = formattedDate.indexOf("T");
  dayStamp = formattedDate.substring(0, splitT);
  Serial.println(dayStamp);
  // 時刻を抽出
  timeStamp = formattedDate.substring(splitT+1, formattedDate.length()-1);
  Serial.println(timeStamp);
}

// SDカードにセンサー読み取り値を書き込む
void logSDCard() {
  dataMessage = String(readingID) + "," + String(dayStamp) + "," + String(timeStamp) + "," +
                String(NO2_val) + "," + String(C2H5CH_val) + "," + String(VOC_val) + "," +
                String(CO_val) + "\r\n";
  Serial.print("Save data: ");
  Serial.println(dataMessage);
  appendFile(SD, "/data.txt", dataMessage.c_str());
}

// SDカードに書き込む関数（この関数を変更しないでください）
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

// SDカードにデータを追加する関数（この関数を変更しないでください）
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

プログラムをコンパイルしてアップロードし、シリアルポートモニターを開きます。プログラムが正常に動作していれば、シリアルモニターに以下のメッセージが出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/70.png" style={{width:700, height:'auto'}}/></div>

microSDカードはいつでも取り外して、カードリーダーを使用して保存されたセンサーデータにアクセスできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/71.png" style={{width:500, height:'auto'}}/></div>

:::note
テストを容易にするために、データ保存の効果は1分ごとに示されていますが、実際のサンプルコードでは10分ごとにデータを保存するようになっています。
:::

:::caution
このプロジェクトに関して注意すべき点は以下の通りです：

1. マルチチャンネルガスセンサーは、正確な値を得るためにウォームアップ期間が必要です。そのため、記録された最初の数セットのデータは、誤差が大きい場合は破棄することを検討してください。
2. シリアルモニターは保存された情報を一度だけ出力します。この例ではディープスリープ機能を使用しているため、起床後にリセットされます。つまり、次のデバッグ情報を見るにはArduinoのシリアルポートを再度開く必要があります。ただし、カードに問題がなければ、センサーデータは設定した時間通りに収集されますのでご安心ください。
:::

### プログラムの注釈

この例では、XIAO ESP32S3は各読み取りの間にディープスリープモードに入ります。ディープスリープモードでは、すべてのコードを`setup()`関数内に記述する必要があります。なぜなら、XIAO ESP32S3は`loop()`関数に到達しないためです。

この例では、マイクロ秒を秒に変換する係数を使用しており、`TIME_TO_SLEEP`変数でスリープ時間を秒単位で設定できます。この場合、XIAO ESP32S3は10分（600秒）間スリープするように設定されています。異なるスリープ時間を設定したい場合は、`TIME_TO_SLEEP`変数にディープスリープの秒数を入力するだけです。

```c
// ディープスリープオプションを定義
uint64_t uS_TO_S_FACTOR = 1000000; // マイクロ秒から秒への変換係数
// 10分間スリープ = 600秒
uint64_t TIME_TO_SLEEP = 600;
```

次に、microSDカードのCSピンを定義します。この場合、**GPIO 21**に設定されています。

```c
#define SD_CS 21
```

`readingID`という変数を作成して、読み取りIDを保持します。これは、読み取りデータを整理するための方法です。ディープスリープ中に変数の値を保存するには、RTCメモリに保存する必要があります。RTCメモリにデータを保存するには、変数定義の前に`RTC_DATA_ATTR`を追加するだけです。

microSDカードに保存するデータを保持するためのString変数を作成します。

次の2行は、NTPサーバーから日付と時刻を取得するためのNTPClientを定義します。

```c
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP);
```

次に、`Setup()`関数内でNTPクライアントを初期化し、NTPサーバーから日付と時刻を取得します。タイムゾーンを調整するには、`setTimeOffset(<time>)`メソッドを使用できます。

すべての初期化が完了したら、読み取り値、タイムスタンプを取得し、それらをmicroSDカードに記録します。

コードを理解しやすくするために、以下の関数を作成しました：

- `getReadings()`: マルチチャンネルガスセンサーからガス値を読み取ります。
- `getTimeStamp()`: NTPサーバーから日付と時刻を取得します。
- `logSDcard()`: 上記のデータをmicroSDカードに記録します。

最後に、ESP32がディープスリープを開始します。

```c
esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
esp_deep_sleep_start();
```

これらの2つの関数を一緒に使用することをお勧めします。ウェイクアップ時間を設定した後、XIAOができるだけ早くディープスリープモードに入るようにしてください。

## シリアル・ペリフェラル・インターフェース・フラッシュ・ファイルシステム (SPIFFS)

:::caution
このセクションは XIAO ESP32C3、XIAO ESP32S3、または XIAO ESP32S3 Sense に適用されますが、このセクションは Arduino IDE 2.X をサポートしていません。
:::

ESP32 にはシリアル・ペリフェラル・インターフェース・フラッシュ・ファイルシステム (SPIFFS) が含まれています。SPIFFS は、SPI バスで接続されたフラッシュチップを持つマイクロコントローラー向けに作られた軽量ファイルシステムであり、ESP32 のフラッシュメモリのようなものです。このセクションでは、Arduino IDE 用のプラグインを使用して ESP32 ファイルシステムにファイルを簡単にアップロードする方法を紹介します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.jpg" style={{width:1000, height:'auto'}}/></div>

SPIFFS を使用すると、コンピューターの通常のファイルシステムのようにフラッシュメモリにアクセスできますが、より簡単で制限があります。ファイルの読み取り、書き込み、閉じる、削除が可能です。この投稿を書いている時点では、SPIFFS はディレクトリをサポートしていないため、すべてがフラットな構造で保存されます。

XIAO ESP32 で SPIFFS を使用することは特に以下の用途に便利です：

- 設定を含む構成ファイルを作成する
- データを永続的に保存する
- microSD カードを使用する代わりに少量のデータを保存するファイルを作成する
- Web サーバーを構築するための HTML および CSS ファイルを保存する
- 画像、図、アイコンを保存する

### Arduino ESP32 Filesystem Uploader のインストール

Arduino IDE 上でコードを書いて ESP32 ファイルシステムにファイルを作成、保存、書き込むことができます。しかし、この方法はあまり便利ではありません。なぜなら、ファイルの内容を Arduino スケッチ内で手動で入力する必要があるからです。

幸いにも、Arduino IDE 用のプラグインがあり、コンピューター上のフォルダから直接 ESP32 ファイルシステムにファイルをアップロードすることができます。このプラグインを使用すると、ファイル操作が非常に簡単になります。以下にインストール方法を説明します。

:::note
注意: この投稿を書いている時点では、ESP32 Filesystem Uploader プラグインは **Arduino 2.0** をサポートしていません。
:::

#### Windows

**ステップ 1.** [リリースページ](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/)にアクセスし、[ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) ファイルをクリックしてダウンロードします。

**ステップ 2.** スケッチブックの場所を確認します。Arduino IDE で **ファイル > 設定** に移動し、スケッチブックの場所を確認します。私の場合、次のパスにあります：`C:\Users\mengd\Documents\Arduino`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/73.png" style={{width:700, height:'auto'}}/></div>

**ステップ 3.** スケッチブックの場所に移動し、**tools** フォルダを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/74.png" style={{width:400, height:'auto'}}/></div>

**ステップ 4.** ダウンロードした _.zip_ フォルダを解凍します。解凍したフォルダを開き、ESP32FS フォルダを前のステップで作成した tools フォルダにコピーします。以下のようなフォルダ構造になっているはずです：

`<Sketchbook-location>/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/75.png" style={{width:500, height:'auto'}}/></div>

**ステップ 5.** 最後に、Arduino IDE を再起動します。

プラグインが正常にインストールされたか確認するには、Arduino IDE を開きます。**XIAO ESP32S3** または **XIAO ESP32C3** を選択し、**ツール** に移動して **ESP32 Sketch Data Upload** オプションがあるか確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/76.png" style={{width:600, height:'auto'}}/></div>

#### MacOS

**ステップ 1.** [リリースページ](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/)にアクセスし、[ESP32FS-1.1.zip](https://github.com/me-no-dev/arduino-esp32fs-plugin/releases/download/1.1/ESP32FS-1.1.zip) ファイルをクリックしてダウンロードします。

**ステップ 2.** ファイルを解凍します。

**ステップ 3.** `/Documents/Arduino/` に **tools** フォルダを作成します。

**ステップ 4.** 解凍した **ESP32FS** フォルダを **tools** ディレクトリにコピーします。以下のようなフォルダ構造になっているはずです：

`~Documents/Arduino/tools/ESP32FS/tool/esp32fs.jar`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/77.png" style={{width:500, height:'auto'}}/></div>

**ステップ 5.** 最後に、Arduino IDE を再起動します。

プラグインが正常にインストールされたか確認するには、Arduino IDE を開きます。**XIAO ESP32S3** または **XIAO ESP32C3** を選択し、**ツール** に移動して **ESP32 Sketch Data Upload** オプションがあるか確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/78.png" style={{width:600, height:'auto'}}/></div>

### Filesystem Uploader を使用したファイルのアップロード

ESP32 ファイルシステムにファイルをアップロードするには、以下の手順に従ってください。

**ステップ 6.** Arduino スケッチを作成して保存します。デモ用に空のスケッチを保存しても構いません。

**ステップ 7.** 次に、スケッチフォルダを開きます。**スケッチ > スケッチフォルダを表示** に移動します。スケッチが保存されているフォルダが開きます。

**ステップ 8.** そのフォルダ内に **data** という名前の新しいフォルダを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/79.png" style={{width:400, height:'auto'}}/></div>

**ステップ 9.** data フォルダ内に、ESP32 ファイルシステムに保存したいファイルを配置します。例として、いくつかのテキストを含む **test_example** という名前の _.txt_ ファイルを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/80.png" style={{width:700, height:'auto'}}/></div>

**ステップ 10.** 次に、ファイルをアップロードするには、Arduino IDE で **ツール > ESP32 Sketch Data Upload** に移動するだけです。

:::caution
アップローダーは、ファイルシステムに既に保存されていたものを上書きします。
:::

**SPIFFS Image Uploaded** というメッセージが表示されたら、ファイルは正常に ESP32 ファイルシステムにアップロードされています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/81.png" style={{width:800, height:'auto'}}/></div>

### アップローダーのテスト

では、ファイルが実際にESP32のファイルシステムに保存されたかどうかを確認してみましょう。以下のコードをESP32ボードにアップロードしてください。

```cpp
#include "SPIFFS.h"

void setup() {
  Serial.begin(115200);
  while(!Serial);

  if(!SPIFFS.begin(true)){
    Serial.println("SPIFFSのマウント中にエラーが発生しました");
    return;
  }

  File file = SPIFFS.open("/test_example.txt");
  if(!file){
    Serial.println("ファイルの読み取りに失敗しました");
    return;
  }

  Serial.println("ファイルの内容:");
  while(file.available()){
    Serial.write(file.read());
  }
  file.close();

}

void loop() {

}
```

アップロード後、ボーレート115200でシリアルモニタを開いてください。シリアルモニタに_.txt_ファイルの内容が表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/82.png" style={{width:800, height:'auto'}}/></div>

## フラッシュデータストレージ

:::caution
このセクションは、XIAO ESP32C3、XIAO ESP32S3、またはXIAO ESP32S3 Senseに適用されます。
:::

開発ボードを使用する際、多くの人がチップ上のフラッシュメモリを使用して重要なデータを保存したいと考えるでしょう。これには、異常な開発ボードの状態でもデータが失われないようにするストレージ方法が必要です。

このチュートリアルでは、以下の2つの異なるストレージ方法を使用して、XIAO ESP32のフラッシュメモリに重要なデータを保存する方法を紹介します：

1. 最初のガイドでは、Preferences.hライブラリを使用してESP32のフラッシュメモリにデータを永続的に保存する方法を説明します。フラッシュメモリに保存されたデータは、リセットや電源障害を超えて保持されます。Preferences.hライブラリを使用すると、ネットワーク認証情報、APIキー、しきい値、またはGPIOの最後の状態などのデータを保存するのに便利です。フラッシュメモリからデータを保存および読み取る方法を学びます。

2. 次のガイドでは、XIAO ESP32C3のEEPROMとは何か、それが何に役立つのかを説明します。また、EEPROMへの書き込みと読み取り方法を示し、学んだ概念を実践するためのプロジェクト例を構築します。

このセクションはXIAO ESP32C3向けに書かれていますが、新しいXIAO ESP32S3とも完全に互換性があるため、ここでのルーチンを直接使用できます。そのため、ここでは再度説明しません。

- [XIAO ESP32C3 データを永続的に保存する方法](https://wiki.seeedstudio.com/ja/xiaoesp32c3-flash-storage/)

## トラブルシューティング

## 引用 & 参考文献

この記事は、ESP32に関する**[Random Nerd Tutorials](https://randomnerdtutorials.com/)**のファイルシステムコンテンツを基にしており、Seeed Studio XIAO ESP32S3 Senseで検証されています。

**Random Nerd Tutorials**の著者の皆様の努力に感謝します！

以下は元の記事への参考リンクです。ESP32のファイルシステムについてさらに学びたい方は、以下のリンクをご覧ください。

- [ESP32: Arduino IDEを使用したMicroSDカードモジュールのガイド](https://randomnerdtutorials.com/esp32-microsd-card-arduino/)
- [ESP32 データロギング 温度をMicroSDカードに記録](https://randomnerdtutorials.com/esp32-data-logging-temperature-to-microsd-card/)
- [Arduino IDEでESP32ファイルシステムアップローダーをインストール](https://randomnerdtutorials.com/install-esp32-filesystem-uploader-arduino-ide/)

ESP32開発ボードの使用に関する詳細情報については、Random Nerd Tutorialsの公式ウェブサイトをご覧ください。

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

## 技術サポートと製品ディスカッション

.

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>