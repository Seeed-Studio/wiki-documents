---
description: このWikiでは、ST7789 SPI LCDを例として使用し、Seeed reComputer J4012 Classic 上でSPIディスプレイを接続して駆動する方法を紹介します。  
title: reComputer J4012 Classic で SPI ディスプレイを使用する  
keywords:
- Jetson
- reComputer
- J4012 Classic
- SPI
- ST7789
- LCD  
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_spi_getting_start
sku: 110110145
last_update:
  date: 06/01/2026
  author: HaoChen
createdAt: '2026-06-01'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/ja/jetson_spi_getting_start/

---

# reComputer J4012 Classic で SPI ディスプレイを使用する

## はじめに

このWikiでは、Seeed reComputer J4012 Classic 上で SPI ディスプレイを接続して駆動する方法を紹介します。40ピンヘッダを介して SPI ディスプレイを使用するための基本的なワークフローを扱い、ハードウェア配線、SPI インターフェース設定、デバイスノードの確認、依存関係のインストール、C++ デモのコンパイル、および簡単な表示テストの実行を含みます。

本ガイドでは、ST7789 SPI LCD ディスプレイを例として使用します。ST7735 や ILI9341 など、他の SPI ディスプレイモジュールでも全体的なワークフローは類似していますが、配線の詳細、表示解像度、初期化シーケンス、ドライバパラメータなどが異なる場合があります。

本ガイドの方法は、他の SPI ディスプレイアプリケーションの参考としても利用できます。 

## ハードウェアの準備

### 必要なハードウェア

| 項目                         | 説明                                                   |
| ---------------------------- | ------------------------------------------------------ |
| reComputer J4012 Classic     | Jetson ベースのエッジ AI コンピュータ                 |
| SPI ディスプレイモジュール  | 本ガイドでは ST7789 SPI LCD ディスプレイを例として使用 |
| ジャンパーワイヤ（DuPont）  | ディスプレイを 40 ピンヘッダに接続するために使用      |
| HDMI ディスプレイまたは SSH 端末 | デバイスの設定およびテストに使用                  |

### 必要なソフトウェア

| ソフトウェア       | 説明                                              |
| ---------------- | ------------------------------------------------- |
| JetPack / Ubuntu | reComputer J4012 Classic 上で動作するオペレーティングシステム |
| g++              | C++ デモをコンパイルするために使用               |
| spidev           | Linux の SPI ユーザ空間インターフェース          |
| sysfs GPIO       | DC や RES などの GPIO ピンを制御するために使用   |

## ハードウェア接続

### 40 ピンヘッダ

reComputer J4012 Classic には 40 ピン拡張ヘッダが用意されています。このヘッダを通して SPI 信号や GPIO ピンを使用し、小型ディスプレイモジュールを接続できます。

![40-pin header pinout](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_01.png)

図 1. reComputer J4012 Classic の 40 ピンヘッダのピン配置

### SPI ディスプレイ配線例: ST7789

本ガイドでは、ST7789 SPI ディスプレイをサンプルのディスプレイモジュールとして使用します。以下の表に従って、ディスプレイを 40 ピンヘッダに接続します。

| ST7789 ピン | J4012 Classic 40 ピン | 機能         | 説明                                         |
| ---------- | -------------------- | ------------ | -------------------------------------------- |
| GND        | Pin 6                | GND          | グラウンド                                   |
| VCC        | Pin 1                | 3.3V         | ディスプレイへの電源入力                     |
| SCL        | Pin 23               | SPI SCLK     | SPI クロック信号                             |
| SDA        | Pin 19               | SPI MOSI     | J4012 Classic からディスプレイへの SPI データ |
| RES        | Pin 31               | GPIO / PQ.06 | ハードウェアリセット信号                     |
| DC         | Pin 29               | GPIO / PQ.05 | データ / コマンド選択                        |
| CS         | Pin 24               | SPI CS       | SPI チップセレクト                           |
| BLK        | Pin 17               | 3.3V         | バックライト電源、常時オン                   |

![ST7789 SPI display wiring](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_02.png)

図 2. reComputer J4012 Classic と ST7789 SPI ディスプレイ間の配線

## SPI インターフェースを有効化する

ディスプレイデモを実行する前に、40 ピンヘッダ上の SPI インターフェースを有効にする必要があります。

Jetson-IO 設定ツールを開きます:

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

40 ピンヘッダ設定メニューを選択します。

![Jetson-IO main menu](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_03.png)

図 3. Jetson-IO メインメニュー

![Configure header pins manually](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_04.png)  

図 4. "Configure header pins manually" を選択

![Enable spi1 function](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_05.png)  

図 5. 40 ピンヘッダ上で spi1 機能を有効化

設定を保存し、デバイスを再起動します:

```bash
sudo reboot
```

デバイスが再起動したら、`spidev` カーネルモジュールをロードします:

```bash
sudo modprobe spidev
```

この手順により、`/dev/spidev*` を確認またはアクセスする前に、Linux ユーザ空間 SPI ドライバが利用可能であることを保証します。

## SPI デバイスを確認する

デバイスが再起動したら、SPI デバイスノードが生成されているかどうかを確認します:

```bash
ls /dev/spidev*
```

SPI が正しく有効化されていれば、次のような出力が表示される場合があります:

```bash
/dev/spidev0.0
/dev/spidev0.1
```

![Check SPI device node](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_06.png)

図 6. SPI デバイスノードが正常に生成された状態

本ガイドでは、ST7789 ディスプレイは Pin 19、Pin 23、および Pin 24 に接続された SPI 信号を使用します。サンプルコードではデフォルトで `/dev/spidev0.0` を使用します。システムで生成される SPI デバイスノードが異なる場合は、コード内の SPI デバイスパスを変更してください。

## 依存関係をインストールする

パッケージリストを更新します:

```bash
sudo apt update
```

C++ コンパイラをインストールします:

```bash
sudo apt install -y g++
```

SPI デバイスノードが存在するかどうかを確認します:

```bash
ls /dev/spidev*
```

## GPIO ピンをエクスポートする

ディスプレイデモを実行する前に、`DC` と `RES` で使用する GPIO ピンをエクスポートします。デモは sysfs GPIO インターフェースを通じてこれら 2 本のピンを制御します。

本ガイドでは:

| 信号  | 40 ピン | GPIO 名  | GPIO 番号 |
| ------ | ------- | -------- | --------- |
| DC     | Pin 29  | `PQ.05`  | `453`     |
| RES    | Pin 31  | `PQ.06`  | `454`     |

`/sys/class/gpio/export` を通じて GPIO をエクスポートする際は、GPIO 名ではなく GPIO 番号を使用します。本ガイドでは、GPIO `453` が `PQ.05` に、GPIO `454` が `PQ.06` に対応します:

```bash
sudo sh -c 'echo 453 > /sys/class/gpio/export'
sudo sh -c 'echo 454 > /sys/class/gpio/export'
```

エクスポート後、対応する GPIO ノードは `PQ.05` と `PQ.06` として現れるはずです。GPIO ノードが存在するかどうかを確認します:

```bash
ls /sys/class/gpio/PQ.05
ls /sys/class/gpio/PQ.06
```

## ST7789 ディスプレイデモを実行する

このセクションでは、C++ デモを使用して、ST7789 SPI ディスプレイが reComputer J4012 Classic 上で正しく動作することを確認します。

このデモは次の操作を行います:

1. SPI デバイス `/dev/spidev0.0` をオープンします。

2. SPI モード、1 ワードあたりのビット数、および SPI 速度を設定します。

3. sysfs GPIO を通じて `DC` と `RES` ピンを制御します。

4. ST7789 ディスプレイコントローラを初期化します。

5. 画面全体を異なる RGB565 カラーで連続的に塗りつぶします。

このデモで使用する配線は以下のとおりです。

| 信号     | 40 ピン | GPIO / デバイス           |
| -------- | ------- | ------------------------- |
| SPI SCLK | Pin 23  | SPI クロック              |
| SPI MOSI | Pin 19  | SPI MOSI                  |
| SPI CS   | Pin 24  | SPI CS                    |
| RES      | Pin 31  | `/sys/class/gpio/PQ.06`   |
| DC       | Pin 29  | `/sys/class/gpio/PQ.05`   |
| BLK      | Pin 17  | 3.3V                      |

`st7789_spi.cpp` という名前のファイルを作成します:

```bash
nano st7789_spi.cpp
```

次の C++ デモコードを追加します:

```cpp
#include <iostream>
#include <fcntl.h>
#include <unistd.h>
#include <sys/ioctl.h>
#include <linux/spi/spidev.h>
#include <cstdint>
#include <cstring>

int spi_fd = -1;
int dc_fd = -1;
int res_fd = -1;

// GPIO paths for reComputer J4012 Classic
// DC  -> Pin 29 -> PQ.05
// RES -> Pin 31 -> PQ.06
const char* DC_DIR_PATH  = "/sys/class/gpio/PQ.05/direction";
const char* DC_VAL_PATH  = "/sys/class/gpio/PQ.05/value";
const char* RES_DIR_PATH = "/sys/class/gpio/PQ.06/direction";
const char* RES_VAL_PATH = "/sys/class/gpio/PQ.06/value";

bool write_file(const char* path, const char* value)
{
    int fd = open(path, O_WRONLY);
    if (fd < 0) {
        std::cerr << "open failed: " << path << std::endl;
        return false;
    }

    write(fd, value, strlen(value));
    close(fd);
    return true;
}

bool init_gpios()
{
    if (!write_file(DC_DIR_PATH, "out")) return false;
    if (!write_file(RES_DIR_PATH, "out")) return false;

    dc_fd = open(DC_VAL_PATH, O_WRONLY);
    res_fd = open(RES_VAL_PATH, O_WRONLY);

    if (dc_fd < 0 || res_fd < 0) {
        std::cerr << "open gpio value failed" << std::endl;
        return false;
    }

    return true;
}

void gpio_write(int fd, int value)
{
    lseek(fd, 0, SEEK_SET);
    write(fd, value ? "1" : "0", 1);
}

void WriteCommand(uint8_t cmd)
{
    gpio_write(dc_fd, 0);
    write(spi_fd, &cmd, 1);
}

void WriteData(uint8_t data)
{
    gpio_write(dc_fd, 1);
    write(spi_fd, &data, 1);
}

void WriteDataBuf(const uint8_t* data, size_t len)
{
    gpio_write(dc_fd, 1);

    const size_t CHUNK_SIZE = 4096;
    size_t bytes_sent = 0;

    while (bytes_sent < len) {
        size_t current_chunk = (len - bytes_sent > CHUNK_SIZE) ? CHUNK_SIZE : (len - bytes_sent);

        struct spi_ioc_transfer tr;
        std::memset(&tr, 0, sizeof(tr));

        tr.tx_buf = (unsigned long)(data + bytes_sent);
        tr.rx_buf = 0;
        tr.len = current_chunk;
        tr.speed_hz = 24000000;
        tr.bits_per_word = 8;

        if (ioctl(spi_fd, SPI_IOC_MESSAGE(1), &tr) < 0) {
            std::cerr << "SPI chunk transfer failed at " << bytes_sent << std::endl;
            return;
        }

        bytes_sent += current_chunk;
    }
}

void ST7789_Reset()
{
    gpio_write(res_fd, 0);
    usleep(200000);

    gpio_write(res_fd, 1);
    usleep(200000);
}

void ST7789_Init()
{
    ST7789_Reset();

    WriteCommand(0x11);       // Sleep Out
    usleep(120000);

    WriteCommand(0x3A);       // Pixel Format Set
    WriteData(0x05);          // RGB565

    WriteCommand(0x36);       // Memory Access Control
    WriteData(0x08);          // Default direction

    WriteCommand(0x21);       // Display Inversion ON

    WriteCommand(0x29);       // Display ON
    usleep(20000);
}

void ST7789_SetWindow(uint16_t x0, uint16_t y0, uint16_t x1, uint16_t y1)
{
    WriteCommand(0x2A);       // Column Address Set
    WriteData(x0 >> 8);
    WriteData(x0 & 0xFF);
    WriteData(x1 >> 8);
    WriteData(x1 & 0xFF);

    WriteCommand(0x2B);       // Row Address Set
    WriteData(y0 >> 8);
    WriteData(y0 & 0xFF);
    WriteData(y1 >> 8);
    WriteData(y1 & 0xFF);

    WriteCommand(0x2C);       // Memory Write
}

void ST7789_FillColor(uint16_t color)
{
    const int width = 240;
    const int height = 320;

    ST7789_SetWindow(0, 0, width - 1, height - 1);

    uint8_t screen_buf[height * width * 2];

    uint8_t high = color >> 8;
    uint8_t low = color & 0xFF;

    for (int i = 0; i < height * width * 2; i += 2) {
        screen_buf[i] = high;
        screen_buf[i + 1] = low;
    }

    WriteDataBuf(screen_buf, sizeof(screen_buf));
}

bool init_spi()
{
    spi_fd = open("/dev/spidev0.0", O_RDWR);
    if (spi_fd < 0) {
        std::cerr << "open /dev/spidev0.0 failed" << std::endl;
        return false;
    }

    uint8_t mode = SPI_MODE_0;
    uint8_t bits = 8;
    uint32_t speed = 24000000;

    ioctl(spi_fd, SPI_IOC_WR_MODE, &mode);
    ioctl(spi_fd, SPI_IOC_WR_BITS_PER_WORD, &bits);
    ioctl(spi_fd, SPI_IOC_WR_MAX_SPEED_HZ, &speed);

    return true;
}

uint16_t Rainbow_HSV_To_RGB565(int h)
{
    float r = 0, g = 0, b = 0;

    int sector = h / 60;
    float fractional = (h % 60) / 60.0f;

    float x = 1.0f - fractional;
    float y = fractional;

    switch (sector) {
        case 0: r = 1.0f; g = y;    b = 0.0f; break;
        case 1: r = x;    g = 1.0f; b = 0.0f; break;
        case 2: r = 0.0f; g = 1.0f; b = y;    break;
        case 3: r = 0.0f; g = x;    b = 1.0f; break;
        case 4: r = y;    g = 0.0f; b = 1.0f; break;
        case 5: r = 1.0f; g = 0.0f; b = x;    break;
        default: r = 0.0f; g = 0.0f; b = 0.0f; break;
    }

    uint8_t R8 = static_cast<uint8_t>(r * 255);
    uint8_t G8 = static_cast<uint8_t>(g * 255);
    uint8_t B8 = static_cast<uint8_t>(b * 255);

    return ((R8 >> 3) << 11) | ((G8 >> 2) << 5) | (B8 >> 3);
}

int main()
{
    uint16_t color = 0x001F;
    int i = 0;

    std::cout << "Init SPI..." << std::endl;
    if (!init_spi()) return -1;

    std::cout << "Init GPIO..." << std::endl;
    if (!init_gpios()) return -1;

    std::cout << "Init ST7789..." << std::endl;
    ST7789_Init();

    std::cout << "Fill 240x320 Color..." << std::endl;

    while (1) {
        color = Rainbow_HSV_To_RGB565(i++ % 360);
        ST7789_FillColor(color);
        usleep(10000);
    }

    close(spi_fd);
    close(dc_fd);
    close(res_fd);

    return 0;
}
```

デモをコンパイルします：

```bash
g++ st7789_spi.cpp -o st7789_spi
```

デモを実行します：

```bash
sudo ./st7789_spi
```

配線と SPI 設定が正しければ、ST7789 ディスプレイはさまざまな色で連続的にリフレッシュされます。

![ST7789 display demo result](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_gif_01.gif)

図 7. ST7789 ディスプレイ デモ結果

## コードの説明

### SPI 初期化

このデモは `/dev/spidev0.0` をオープンし、SPI インターフェースを次のように設定します。

| パラメータ     | 値                |
| ------------- | ---------------- |
| SPI デバイス  | `/dev/spidev0.0` |
| SPI モード    | `SPI_MODE_0`     |
| 1 ワードあたりのビット数 | `8`              |
| SPI 速度      | `24000000 Hz`    |

システムで生成される SPI デバイスノードが異なる場合は、デモコード内の次の行を変更してください：

```cpp
spi_fd = open("/dev/spidev0.0", O_RDWR);
```

たとえば、デバイスノードが `/dev/spidev1.0` の場合は、次のように変更します：

```cpp
spi_fd = open("/dev/spidev1.0", O_RDWR);
```

### GPIO 制御

このデモは sysfs GPIO を使用して `DC` と `RES` ピンを制御します。

| 信号  | 40 ピン ピン番号 | sysfs GPIO パス         |
| ------ | ---------- | ----------------------- |
| DC     | Pin 29     | `/sys/class/gpio/PQ.05` |
| RES    | Pin 31     | `/sys/class/gpio/PQ.06` |

`DC` ピンはコマンドモードとデータモードを切り替えるために使用されます。`RES` ピンは ST7789 ディスプレイをリセットするために使用されます。

### ST7789 初期化

このデモは次のコマンドで ST7789 ディスプレイを初期化します。

| コマンド | 説明                 |
| ------- | --------------------- |
| `0x11`  | スリープ解除          |
| `0x3A`  | ピクセルフォーマット設定 |
| `0x05`  | RGB565 フォーマット   |
| `0x36`  | メモリアクセス制御    |
| `0x21`  | ディスプレイ反転 On   |
| `0x29`  | ディスプレイ On       |

### 画面塗りつぶしテスト

このデモは RGB565 フォーマットを使用してフルスクリーンを塗りつぶします。デモで使用しているディスプレイ解像度は次のとおりです：

```cpp
const int width = 240;
const int height = 320;
```

使用している ST7789 ディスプレイの解像度が異なる場合は、実際の画面サイズに合わせてこれらの値を変更してください。

### SPI データ転送

フルスクリーンバッファは、1 回の小さな SPI 転送よりも大きくなります。そのため、このデモでは表示データをチャンクに分けて送信します：

```cpp
const size_t CHUNK_SIZE = 4096;
```

これにより転送サイズの制限を回避し、フルスクリーンリフレッシュをより安定させることができます。

## トラブルシューティング

### `/dev/spidev*` デバイスが見つからない

考えられる原因：

1. SPI インターフェースが有効になっていない。

2. Jetson-IO の設定が保存されていない。

3. SPI を有効にした後にデバイスを再起動していない。

4. デバイスツリーが SPI デバイスノードを公開していない。

5. システムイメージに想定される SPI 設定が含まれていない。

推奨される確認項目：

```bash
ls /dev/spidev*
```

SPI デバイスが見つからない場合は、Jetson-IO を再度実行し、SPI が有効になっているか確認してください。

### SPI または GPIO にアクセスすると Permission Denied になる

C++ デモを実行したときにパーミッションエラーが表示される場合は、`sudo` を付けて実行してみてください：

```bash
sudo ./st7789_spi
```

また、SPI デバイスおよび GPIO ノードのパーミッションを確認することもできます：

```bash
ls -l /dev/spidev*
ls -l /sys/class/gpio/PQ.05/value
ls -l /sys/class/gpio/PQ.06/value
```

### GPIO パスが存在しない

`/sys/class/gpio/PQ.05` または `/sys/class/gpio/PQ.06` が存在しない場合、使用しているシステムイメージでは GPIO の命名またはエクスポート方法が異なる可能性があります。

利用可能な GPIO ノードを確認してください：

```bash
ls /sys/class/gpio/
```

その後、実際のシステムに合わせてデモコード内の GPIO パスを変更してください。

### SPI はオープンできるがディスプレイに何も表示されない

考えられる原因：

1. ディスプレイの配線が正しくない。

2. SPI デバイスパスが正しくない。

3. CS、DC、または RES ピンが正しく接続されていない。

4. ディスプレイコントローラが ST7789 ではない。

5. ディスプレイに別の初期化シーケンスが必要。

6. バックライトピンに電源が供給されていない。

推奨される確認項目：

1. `VCC` が Pin 1 に接続されていることを確認します。

2. `GND` が Pin 6 に接続されていることを確認します。

3. `BLK` が Pin 17 に接続され、バックライトが点灯していることを確認します。

4. `SCL`、`SDA`、`CS` が Pin 23、Pin 19、Pin 24 に接続されていることを確認します。

5. `RES` と `DC` が Pin 31 と Pin 29 に接続されていることを確認します。

6. SPI 速度を下げて再度テストします。

7. ディスプレイモジュールのデータシートからディスプレイコントローラの型番を確認します。

### バックライトは点灯しているが画像が表示されない

バックライトは点灯しているが画像が表示されない場合、電源配線は正しいものの、SPI 通信またはディスプレイ初期化が正しくない可能性があります。

次の点を確認してください：

1. 正しい SPI デバイスを使用しているかどうか。

2. DC と RES ピンが正しく設定されているかどうか。

3. ディスプレイドライバが ST7789 コントローラに対応しているかどうか。

4. 画面解像度が正しいかどうか。

5. ディスプレイモジュールに行または列のオフセット設定が必要かどうか。

### 画像の色がおかしい

考えられる原因：

1. RGB と BGR のカラー順序が一致していない。

2. ディスプレイ反転設定が異なる。

3. `MADCTL` パラメータが使用しているパネルに適していない。

4. ディスプレイモジュールが、わずかに異なる ST7789 初期化シーケンスを使用している。

推奨される対処方法：

1. `MADCTL` の値を変更してみてください。

2. ディスプレイ反転を有効または無効にしてみてください。

3. ST7789 ディスプレイモジュールのデータシートを確認してください。

4. 使用しているモジュールが RGB か BGR のどちらのカラー順序を使用しているか確認してください。

### 画像の向きが正しくない

画像が回転または反転している場合は、初期化関数内の `MADCTL` コマンドパラメータを変更します：

```cpp
WriteCommand(0x36);
WriteData(0x08);
```

正しい値はディスプレイモジュールの向きによって異なります。

### ディスプレイのリフレッシュが遅い

考えられる原因：

1. SPI クロック速度が低すぎる。

2. プログラムが毎回フルスクリーンをリフレッシュしている。

3. ディスプレイモジュールのリフレッシュ性能に制限がある。

4. C++ デモは検証用に単純なフルスクリーン塗りつぶし方式を使用している。

推奨される対処方法：

1. SPI クロック速度を段階的に上げてください。

2. 不要なフルスクリーンリフレッシュを避けてください。

3. アプリケーションが対応している場合は、変更された領域のみをリフレッシュしてください。

4. 現在のカラーフィルテストは、基本的なハードウェア検証デモとしてのみ使用してください。

## まとめ

この wiki では、40 ピンヘッダを介して Seeed reComputer J4012 Classic に SPI ディスプレイを接続する方法を紹介しました。一般的な SPI ディスプレイのワークフローには、ディスプレイの配線、SPI インターフェースの有効化、SPI デバイスノードの確認、依存関係のインストール、C++ デモのコンパイル、およびディスプレイテストの実行が含まれます。

このガイドでは、ST7789 SPI LCD をサンプルのディスプレイモジュールとして使用しました。他の SPI ディスプレイでも全体的な手順は同様ですが、ディスプレイドライバ、解像度、初期化シーケンス、および配線の詳細は、実際のディスプレイモジュールに合わせて調整する必要があります。

## リソース

- [NVIDIA® Jetson Orin™ NX 16GB AI Device - reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)

- [reComputer J401x datasheet](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)

- [NVIDIA Jetson.GPIO mapping](https://github.com/NVIDIA/jetson-gpio/blob/master/lib/python/Jetson/GPIO/gpio_pin_data.py)

- [Linux spidev userspace API](https://docs.kernel.org/spi/spidev.html)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
