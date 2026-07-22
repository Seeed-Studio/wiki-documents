---
description: このWikiでは、Seeed reComputer J4012 Classic 上で SPI ディスプレイを接続して駆動する方法を、ST7789 SPI LCD を例に紹介します。
title: reComputer J4012 Classic で SPI ディスプレイを使用する
keywords:
  - Jetson
  - reComputer
  - J4012 Classic
  - SPI
  - ST7789
  - LCD
image: https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_02.png
slug: /jetson_spi_getting_start
sku: 110110145
last_update:
  date: 06/08/2026
  author: HaoChen
createdAt: '2026-06-01'
updatedAt: '2026-06-12'
url: https://wiki.seeedstudio.com/ja/jetson_spi_getting_start/
---

# reComputer J4012 Classic で SPI ディスプレイを使用する

## はじめに

このWikiでは、Seeed reComputer J4012 Classic 上で SPI ディスプレイを接続して駆動する方法を紹介します。40ピンヘッダを介して SPI ディスプレイを使用するための基本的なワークフローとして、ハードウェア配線、SPI インターフェース設定、デバイスノードの確認、依存パッケージのインストール、C++ デモのコンパイル、および簡単な表示テストの実行を扱います。

このガイドでは、ST7789 SPI LCD ディスプレイを例として使用します。ST7735 や ILI9341 など他の SPI ディスプレイモジュールでも、全体的なワークフローは類似していますが、配線の詳細、表示解像度、初期化シーケンス、ドライバパラメータなどが異なる場合があります。

本ガイドの方法は、他の SPI ディスプレイアプリケーションの参考としても利用できます。 

## ハードウェアの準備

### 必要なハードウェア

| 項目                         | 説明                                                 |
| ---------------------------- | ---------------------------------------------------- |
| reComputer J4012 Classic     | Jetson ベースのエッジ AI コンピュータ               |
| SPI ディスプレイモジュール  | 本ガイドでは ST7789 SPI LCD ディスプレイを例として使用 |
| ジャンパワイヤ（デュポン線） | ディスプレイを 40 ピンヘッダに接続するために使用    |
| HDMI ディスプレイまたは SSH ターミナル | デバイスの設定とテストに使用            |

### 必要なソフトウェア

| ソフトウェア       | 説明                                              |
| ---------------- | ------------------------------------------------- |
| JetPack / Ubuntu | reComputer J4012 Classic 上で動作するオペレーティングシステム |
| g++              | C++ デモをコンパイルするために使用               |
| spidev           | Linux の SPI ユーザ空間インターフェース          |
| sysfs GPIO       | DC や RES などの GPIO ピンを制御するために使用   |

## ハードウェア接続

### 40 ピンヘッダ

reComputer J4012 Classic には 40 ピン拡張ヘッダが用意されています。このヘッダを通して SPI 信号や GPIO ピンを利用し、小型ディスプレイモジュールを接続できます。

![40-pin header pinout](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_01.png)

図 1. reComputer J4012 Classic の 40 ピンヘッダのピン配置

### SPI ディスプレイ配線例: ST7789

このガイドでは、ST7789 SPI ディスプレイをサンプルのディスプレイモジュールとして使用します。以下の表に従って、ディスプレイを 40 ピンヘッダに接続します。

| ST7789 ピン | J4012 Classic 40 ピン | 機能         | 説明                                        |
| ---------- | -------------------- | ------------ | ------------------------------------------ |
| GND        | Pin 6                | GND          | グラウンド                                  |
| VCC        | Pin 1                | 3.3V         | ディスプレイへの電源入力                    |
| SCL        | Pin 23               | SPI SCLK     | SPI クロック信号                            |
| SDA        | Pin 19               | SPI MOSI     | J4012 Classic からディスプレイへの SPI データ |
| RES        | Pin 31               | GPIO / PQ.06 | ハードウェアリセット信号                    |
| DC         | Pin 29               | GPIO / PQ.05 | データ / コマンド選択                       |
| CS         | Pin 24               | SPI CS       | SPI チップセレクト                          |
| BLK        | Pin 17               | 3.3V         | バックライト電源、常時オン                  |

![ST7789 SPI display wiring](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_02.png)

図 2. reComputer J4012 Classic と ST7789 SPI ディスプレイ間の配線

## SPI インターフェースを有効化

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="jp5-jp6" label="JetPack 5 / JetPack 6">

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

デバイスの再起動後、`spidev` カーネルモジュールをロードします:

```bash
sudo modprobe spidev
```

この手順により、`/dev/spidev*` を確認またはアクセスする前に、Linux ユーザ空間 SPI ドライバが利用可能であることを保証します。

  </TabItem>

  <TabItem value="jp7" label="JetPack 7">

ディスプレイデモを実行する前に、Jetson Expansion Header Tool で SPI インターフェースを有効にし、ディスプレイで使用する GPIO ピンを設定します。

Jetson-IO 設定ツールを開きます:

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

40 ピンヘッダ設定メニューを選択します。

![Jetson-IO main menu](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_03.png)

図 3. Jetson-IO メインメニュー

![Configure header pins manually](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_04.png)  

図 4. "Configure header pins manually" を選択

![Enable spi1 and gpio for DC and RES](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_07.png)  

図 5. spi1 を有効にし、Pin 29 と Pin 31 を gpio として設定

JetPack 7 では、Jetson Expansion Header Tool で次の機能を選択します:

1. Pin 19、Pin 23、Pin 24 上の SPI 信号用に `spi1` を有効にします。
2. Pin 29（`extperiph3_clk`）を `DC` 信号用の `gpio` に設定します。
3. Pin 31（`extperiph4_clk`）を `RES` 信号用の `gpio` に設定します。

設定を保存し、デバイスを再起動します:

```bash
sudo reboot
```

デバイスの再起動後、`spidev` カーネルモジュールをロードします:

```bash
sudo modprobe spidev
```

この手順により、`/dev/spidev*` を確認またはアクセスする前に、Linux ユーザ空間 SPI ドライバが利用可能であることを保証します。

  </TabItem>
</Tabs>

## SPI デバイスの確認

デバイスの再起動後、SPI デバイスノードが生成されているか確認します:

```bash
ls /dev/spidev*
```

SPI が正しく有効になっていれば、次のような出力が表示されます:

```bash
/dev/spidev0.0
/dev/spidev0.1
```

![Check SPI device node](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_06.png)

図 6. SPI デバイスノードが正常に生成された状態

このガイドでは、ST7789 ディスプレイは Pin 19、Pin 23、Pin 24 に接続された SPI 信号を使用します。サンプルコードはデフォルトで `/dev/spidev0.0` を使用します。システムで別の SPI デバイスノードが生成されている場合は、コード内の SPI デバイスパスを変更してください。

## 依存パッケージのインストール

パッケージリストを更新します:

```bash
sudo apt update
```

C++ コンパイラをインストールします:

```bash
sudo apt install -y g++
```

SPI デバイスノードが存在するか確認します:

```bash
ls /dev/spidev*
```

## GPIO 制御

<Tabs>
  <TabItem value="jp5" label="JetPack 5">

ディスプレイデモを実行する前に、`DC` と `RES` で使用する GPIO ピンをエクスポートします。デモでは、これら 2 本のピンを sysfs GPIO インターフェース経由で制御します。

このガイドでは、次のように使用します:

| 信号  | 40 ピン | GPIO 名  | GPIO 番号 |
| ------ | ------- | -------- | --------- |
| DC     | Pin 29  | `PQ.05`  | `453`     |
| RES    | Pin 31  | `PQ.06`  | `454`     |

`/sys/class/gpio/export` を通して GPIO をエクスポートする際は、GPIO 名ではなく GPIO 番号を使用します。このガイドでは、GPIO `453` が `PQ.05` に、GPIO `454` が `PQ.06` に対応します:

```bash
sudo sh -c 'echo 453 > /sys/class/gpio/export'
sudo sh -c 'echo 454 > /sys/class/gpio/export'
```

エクスポート後、対応する GPIO ノードは `PQ.05` と `PQ.06` として現れるはずです。GPIO ノードが存在するか確認します:

```bash
ls /sys/class/gpio/PQ.05
ls /sys/class/gpio/PQ.06
```

  </TabItem>

  <TabItem value="jp6" label="JetPack 6">

JetPack 6 では、Linux のキャラクタデバイス GPIO インターフェースが使用されます。`DC` と `RES` ピンは `libgpiod` を通して制御されるため、sysfs GPIO のエクスポート手順は不要です。ただし JetPack 6 では、GPIO 出力として使用する前に、まずピンマルチプレクサ（pinmux）レジスタを通して GPIO ピンを設定する必要があります。

これらの信号の GPIO 名は次のとおりです:

| 信号  | 40 ピン | GPIO 名  |
| ------ | ------- | -------- |
| DC     | Pin 29  | `PQ.05`  |
| RES    | Pin 31  | `PQ.06`  |

### GPIO ピンマルチプレクサの設定

`libgpiod` を使用する前に、pinmux レジスタを通して `DC` と `RES` ピンを GPIO 出力として設定します。

`busybox` をインストールします:

```bash
sudo apt install -y busybox
```

`jetson-gpio-pinmux-lookup` を使用して、各 40 ピンヘッダピンの pinmux レジスタアドレスを調べます:

```bash
jetson-gpio-pinmux-lookup 29
jetson-gpio-pinmux-lookup 31
```

このツールは各ピンのレジスタアドレスを出力します。そのアドレスに `0x004` を書き込むことで、そのピンを GPIO 出力として設定します。

例えば、Pin 31（`RES` / `PQ.06`）を GPIO 出力として設定するには次のようにします:

```bash
sudo busybox devmem 0x02430070 w 0x004
```

同様に、`jetson-gpio-pinmux-lookup 29` が返すアドレスを使用して、Pin 29（`DC` / `PQ.05`）を設定します:

```bash
sudo busybox devmem <ADDRESS_FROM_LOOKUP> w 0x004
```

`<ADDRESS_FROM_LOOKUP>` は、お使いのデバイスで `jetson-gpio-pinmux-lookup 29` によって出力された実際のレジスタアドレスに置き換えてください。

:::note
これらの pinmux 設定は再起動後に保持されません。再起動のたびに `devmem` コマンドを再実行するか、起動スクリプトに追加してください。
:::

### GPIO ツールのインストール

GPIO ツールと開発用ライブラリをインストールします:

```bash
sudo apt update
sudo apt install -y gpiod libgpiod-dev
```

`gpioinfo` または `gpiofind` を使用して、対応する GPIO チップとラインオフセットを特定します:

```bash
gpioinfo | grep -E "PQ.05|PQ.06"
```

次のコマンドを使用することもできます：

```bash
gpiofind PQ.05
gpiofind PQ.06
```

`gpiofind` の出力は通常、次の形式で GPIO チップ名とラインオフセットを表示します：

```bash
gpiochipX LINE_OFFSET
```

`PQ.05` と `PQ.06` の GPIO チップ名とラインオフセットを記録します。これらの値は libgpiod ベースのデモコードで使用されます。

:::note
GPIO 名 `PQ.05` と `PQ.06` は物理信号を識別するために使用されます。実際の `gpiochip` とラインオフセットは、必ずお使いのデバイス上で `gpioinfo` または `gpiofind` を使って確認してください。
:::

  </TabItem>

  <TabItem value="jp7" label="JetPack 7">

JetPack 7 は Linux キャラクタデバイス GPIO インターフェースを使用します。`DC` と `RES` ピンは `libgpiod` を通して制御されるため、sysfs GPIO のエクスポート手順は不要です。Pin 29 と Pin 31 が Jetson Expansion Header Tool で既に `gpio` に設定されている場合、追加の手動 pinmux 設定は必要ありません。

これらの信号に対応する GPIO 名は次のとおりです：

| Signal | 40-pin Pin | GPIO name |
| ------ | ---------- | --------- |
| DC     | Pin 29     | `PQ.05`   |
| RES    | Pin 31     | `PQ.06`   |

GPIO ツールと開発ライブラリをインストールします：

```bash
sudo apt update
sudo apt install -y gpiod libgpiod-dev
```

対応する GPIO チップとラインオフセットを特定するために `gpioinfo` または `gpiofind` を使用します：

```bash
gpioinfo | grep -E "PQ.05|PQ.06"
```

次のコマンドを使用することもできます：

```bash
gpiofind PQ.05
gpiofind PQ.06
```

`gpiofind` の出力は通常、次の形式で GPIO チップ名とラインオフセットを表示します：

```bash
gpiochipX LINE_OFFSET
```

`PQ.05` と `PQ.06` の GPIO チップ名とラインオフセットを記録します。これらの値は libgpiod ベースのデモコードで使用されます。

:::note
GPIO 名 `PQ.05` と `PQ.06` は物理信号を識別するために使用されます。実際の `gpiochip` とラインオフセットは、必ずお使いのデバイス上で `gpioinfo` または `gpiofind` を使って確認してください。
:::

  </TabItem>
</Tabs>

## ST7789 ディスプレイデモを実行する

<Tabs>
  <TabItem value="jp5" label="JetPack 5">

このセクションでは、C++ デモを使用して ST7789 SPI ディスプレイが reComputer J4012 Classic 上で正しく動作することを確認します。

このデモは次の処理を行います：

1. SPI デバイス `/dev/spidev0.0` をオープンします。
2. SPI モード、1 ワードあたりのビット数、および SPI 速度を設定します。
3. sysfs GPIO を通して `DC` と `RES` ピンを制御します。
4. ST7789 ディスプレイコントローラを初期化します。
5. 画面全体をさまざまな RGB565 カラーで連続的に塗りつぶします。

このデモで使用する配線は次のとおりです。

| Signal   | 40-pin Pin | GPIO / Device           |
| -------- | ---------- | ----------------------- |
| SPI SCLK | Pin 23     | SPI clock               |
| SPI MOSI | Pin 19     | SPI MOSI                |
| SPI CS   | Pin 24     | SPI CS                  |
| RES      | Pin 31     | `/sys/class/gpio/PQ.06` |
| DC       | Pin 29     | `/sys/class/gpio/PQ.05` |
| BLK      | Pin 17     | 3.3V                    |

`st7789_spi.cpp` という名前のファイルを作成します：

```bash
nano st7789_spi.cpp
```

次の C++ デモコードを追加します：

```
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

  </TabItem>

  <TabItem value="jp6" label="JetPack 6">

このセクションでは、C++ デモを使用して ST7789 SPI ディスプレイが reComputer J4012 Classic 上で正しく動作することを確認します。

このデモは次の処理を行います：

1. SPI デバイス `/dev/spidev0.0` をオープンします。
2. SPI モード、1 ワードあたりのビット数、および SPI 速度を設定します。
3. `libgpiod` を通して `DC` と `RES` ピンを制御します。
4. ST7789 ディスプレイコントローラを初期化します。
5. 画面全体をさまざまな RGB565 カラーで連続的に塗りつぶします。

このデモで使用する配線は次のとおりです。

| Signal   | 40-pin Pin | GPIO / Device |
| -------- | ---------- | ------------- |
| SPI SCLK | Pin 23     | SPI clock     |
| SPI MOSI | Pin 19     | SPI MOSI      |
| SPI CS   | Pin 24     | SPI CS        |
| RES      | Pin 31     | `PQ.06`       |
| DC       | Pin 29     | `PQ.05`       |
| BLK      | Pin 17     | 3.3V          |

デモを実行する前に、上記の **GPIO Control** セクションで Pin 29 と Pin 31 の GPIO pinmux 設定を完了してください。

必要なビルドツールと GPIO 開発ライブラリをインストールします：

```bash
sudo apt update
sudo apt install -y build-essential linux-libc-dev gpiod libgpiod-dev busybox
```

`gpiofind` を使用して、`PQ.05` と `PQ.06` の GPIO チップ名とラインオフセットを確認します：

```bash
gpiofind PQ.05
gpiofind PQ.06
```

出力がデモで使用している値と異なる場合は、コード内の `GPIO_CHIP_NAME`、`DC_LINE_OFFSET`、`RES_LINE_OFFSET` を更新してください。

`st7789_spi_gpiod.cpp` という名前のファイルを作成します：

```bash
nano st7789_spi_gpiod.cpp
```

次の C++ デモコードを追加します：

```
#include <iostream>
#include <fcntl.h>
#include <unistd.h>
#include <sys/ioctl.h>
#include <linux/spi/spidev.h>
#include <cstdint>
#include <cstring>
#include <gpiod.h>

int spi_fd = -1;

// Update these values according to the gpiofind output on your device.
// DC  -> Pin 29 -> PQ.05
// RES -> Pin 31 -> PQ.06
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;

gpiod_chip* gpio_chip = nullptr;
gpiod_line* dc_line = nullptr;
gpiod_line* res_line = nullptr;

bool init_gpios()
{
    gpio_chip = gpiod_chip_open_by_name(GPIO_CHIP_NAME);
    if (!gpio_chip) {
        std::cerr << "Failed to open GPIO chip: " << GPIO_CHIP_NAME << std::endl;
        return false;
    }

    dc_line = gpiod_chip_get_line(gpio_chip, DC_LINE_OFFSET);
    if (!dc_line) {
        std::cerr << "Failed to get DC GPIO line" << std::endl;
        return false;
    }

    res_line = gpiod_chip_get_line(gpio_chip, RES_LINE_OFFSET);
    if (!res_line) {
        std::cerr << "Failed to get RES GPIO line" << std::endl;
        return false;
    }

    if (gpiod_line_request_output(dc_line, "st7789-dc", 0) < 0) {
        std::cerr << "Failed to request DC line as output" << std::endl;
        return false;
    }

    if (gpiod_line_request_output(res_line, "st7789-res", 1) < 0) {
        std::cerr << "Failed to request RES line as output" << std::endl;
        return false;
    }

    return true;
}

void gpio_write(gpiod_line* line, int value)
{
    if (gpiod_line_set_value(line, value) < 0) {
        std::cerr << "Failed to set GPIO value" << std::endl;
    }
}

void WriteCommand(uint8_t cmd)
{
    gpio_write(dc_line, 0);
    write(spi_fd, &cmd, 1);
}

void WriteData(uint8_t data)
{
    gpio_write(dc_line, 1);
    write(spi_fd, &data, 1);
}

void WriteDataBuf(const uint8_t* data, size_t len)
{
    gpio_write(dc_line, 1);

    const size_t CHUNK_SIZE = 4096;
    size_t bytes_sent = 0;

    while (bytes_sent < len) {
        size_t current_chunk = (len - bytes_sent > CHUNK_SIZE) ? CHUNK_SIZE : (len - bytes_sent);

        struct spi_ioc_transfer tr;
        std::memset(&tr, 0, sizeof(tr));

        tr.tx_buf = reinterpret_cast<unsigned long>(data + bytes_sent);
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
    gpio_write(res_line, 0);
    usleep(200000);

    gpio_write(res_line, 1);
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

    if (ioctl(spi_fd, SPI_IOC_WR_MODE, &mode) < 0) {
        std::cerr << "Failed to set SPI mode" << std::endl;
        return false;
    }

    if (ioctl(spi_fd, SPI_IOC_WR_BITS_PER_WORD, &bits) < 0) {
        std::cerr << "Failed to set SPI bits per word" << std::endl;
        return false;
    }

    if (ioctl(spi_fd, SPI_IOC_WR_MAX_SPEED_HZ, &speed) < 0) {
        std::cerr << "Failed to set SPI speed" << std::endl;
        return false;
    }

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

void cleanup()
{
    if (spi_fd >= 0) {
        close(spi_fd);
        spi_fd = -1;
    }

    if (dc_line) {
        gpiod_line_release(dc_line);
        dc_line = nullptr;
    }

    if (res_line) {
        gpiod_line_release(res_line);
        res_line = nullptr;
    }

    if (gpio_chip) {
        gpiod_chip_close(gpio_chip);
        gpio_chip = nullptr;
    }
}

int main()
{
    uint16_t color = 0x001F;
    int i = 0;

    std::cout << "Init SPI..." << std::endl;
    if (!init_spi()) {
        cleanup();
        return -1;
    }

    std::cout << "Init GPIO with libgpiod..." << std::endl;
    if (!init_gpios()) {
        cleanup();
        return -1;
    }

    std::cout << "Init ST7789..." << std::endl;
    ST7789_Init();

    std::cout << "Fill 240x320 Color..." << std::endl;

    while (1) {
        color = Rainbow_HSV_To_RGB565(i++ % 360);
        ST7789_FillColor(color);
        usleep(10000);
    }

    cleanup();
    return 0;
}
```

デモをコンパイルします：

```bash
g++ st7789_spi_gpiod.cpp -o st7789_spi_gpiod -lgpiod
```

デモを実行します：

```bash
sudo ./st7789_spi_gpiod
```

  </TabItem>

  <TabItem value="jp7" label="JetPack 7">

このセクションでは、C++ デモを使用して、ST7789 SPI ディスプレイが reComputer J4012 Classic 上で正しく動作することを確認します。

このデモは次の処理を行います：

1. SPI デバイス `/dev/spidev0.0` を開きます。
2. SPI モード、1ワードあたりのビット数、および SPI 速度を設定します。
3. `libgpiod` を通じて `DC` と `RES` ピンを制御します。
4. ST7789 ディスプレイコントローラを初期化します。
5. 画面をさまざまな RGB565 カラーで連続的に塗りつぶします。

このデモで使用する配線は次のとおりです。

| 信号     | 40ピン ピン | GPIO / デバイス |
| -------- | ---------- | ------------- |
| SPI SCLK | Pin 23     | SPI クロック   |
| SPI MOSI | Pin 19     | SPI MOSI      |
| SPI CS   | Pin 24     | SPI CS        |
| RES      | Pin 31     | `PQ.06`       |
| DC       | Pin 29     | `PQ.05`       |
| BLK      | Pin 17     | 3.3V          |

デモを実行する前に、上記の **Enable SPI Interface** セクションで、Pin 29 と Pin 31 が Jetson Expansion Header Tool で `gpio` として設定されていることを確認してください。JetPack 6 とは異なり、手動での `busybox devmem` による pinmux 設定は不要です。

必要なビルドツールと GPIO 開発ライブラリをインストールします：

```bash
sudo apt update
sudo apt install -y build-essential linux-libc-dev gpiod libgpiod-dev
```

`gpiofind` を使用して、`PQ.05` と `PQ.06` の GPIO チップとラインオフセットを確認します：

```bash
gpiofind PQ.05
gpiofind PQ.06
```

出力がデモで使用している値と異なる場合は、コード内の `GPIO_CHIP_NAME`、`DC_LINE_OFFSET`、`RES_LINE_OFFSET` を更新してください。

`st7789_spi_gpiod.cpp` という名前のファイルを作成します：

```bash
nano st7789_spi_gpiod.cpp
```

次の C++ デモコードを追加します：

```
#include <iostream>
#include <fcntl.h>
#include <unistd.h>
#include <sys/ioctl.h>
#include <linux/spi/spidev.h>
#include <cstdint>
#include <cstring>
#include <gpiod.h>

int spi_fd = -1;

// Update these values according to the gpiofind output on your device.
// DC  -> Pin 29 -> PQ.05
// RES -> Pin 31 -> PQ.06
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;

gpiod_chip* gpio_chip = nullptr;
gpiod_line* dc_line = nullptr;
gpiod_line* res_line = nullptr;

bool init_gpios()
{
    gpio_chip = gpiod_chip_open_by_name(GPIO_CHIP_NAME);
    if (!gpio_chip) {
        std::cerr << "Failed to open GPIO chip: " << GPIO_CHIP_NAME << std::endl;
        return false;
    }

    dc_line = gpiod_chip_get_line(gpio_chip, DC_LINE_OFFSET);
    if (!dc_line) {
        std::cerr << "Failed to get DC GPIO line" << std::endl;
        return false;
    }

    res_line = gpiod_chip_get_line(gpio_chip, RES_LINE_OFFSET);
    if (!res_line) {
        std::cerr << "Failed to get RES GPIO line" << std::endl;
        return false;
    }

    if (gpiod_line_request_output(dc_line, "st7789-dc", 0) < 0) {
        std::cerr << "Failed to request DC line as output" << std::endl;
        return false;
    }

    if (gpiod_line_request_output(res_line, "st7789-res", 1) < 0) {
        std::cerr << "Failed to request RES line as output" << std::endl;
        return false;
    }

    return true;
}

void gpio_write(gpiod_line* line, int value)
{
    if (gpiod_line_set_value(line, value) < 0) {
        std::cerr << "Failed to set GPIO value" << std::endl;
    }
}

void WriteCommand(uint8_t cmd)
{
    gpio_write(dc_line, 0);
    write(spi_fd, &cmd, 1);
}

void WriteData(uint8_t data)
{
    gpio_write(dc_line, 1);
    write(spi_fd, &data, 1);
}

void WriteDataBuf(const uint8_t* data, size_t len)
{
    gpio_write(dc_line, 1);

    const size_t CHUNK_SIZE = 4096;
    size_t bytes_sent = 0;

    while (bytes_sent < len) {
        size_t current_chunk = (len - bytes_sent > CHUNK_SIZE) ? CHUNK_SIZE : (len - bytes_sent);

        struct spi_ioc_transfer tr;
        std::memset(&tr, 0, sizeof(tr));

        tr.tx_buf = reinterpret_cast<unsigned long>(data + bytes_sent);
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
    gpio_write(res_line, 0);
    usleep(200000);

    gpio_write(res_line, 1);
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

    if (ioctl(spi_fd, SPI_IOC_WR_MODE, &mode) < 0) {
        std::cerr << "Failed to set SPI mode" << std::endl;
        return false;
    }

    if (ioctl(spi_fd, SPI_IOC_WR_BITS_PER_WORD, &bits) < 0) {
        std::cerr << "Failed to set SPI bits per word" << std::endl;
        return false;
    }

    if (ioctl(spi_fd, SPI_IOC_WR_MAX_SPEED_HZ, &speed) < 0) {
        std::cerr << "Failed to set SPI speed" << std::endl;
        return false;
    }

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

void cleanup()
{
    if (spi_fd >= 0) {
        close(spi_fd);
        spi_fd = -1;
    }

    if (dc_line) {
        gpiod_line_release(dc_line);
        dc_line = nullptr;
    }

    if (res_line) {
        gpiod_line_release(res_line);
        res_line = nullptr;
    }

    if (gpio_chip) {
        gpiod_chip_close(gpio_chip);
        gpio_chip = nullptr;
    }
}

int main()
{
    uint16_t color = 0x001F;
    int i = 0;

    std::cout << "Init SPI..." << std::endl;
    if (!init_spi()) {
        cleanup();
        return -1;
    }

    std::cout << "Init GPIO with libgpiod..." << std::endl;
    if (!init_gpios()) {
        cleanup();
        return -1;
    }

    std::cout << "Init ST7789..." << std::endl;
    ST7789_Init();

    std::cout << "Fill 240x320 Color..." << std::endl;

    while (1) {
        color = Rainbow_HSV_To_RGB565(i++ % 360);
        ST7789_FillColor(color);
        usleep(10000);
    }

    cleanup();
    return 0;
}
```

デモをコンパイルします：

```bash
g++ st7789_spi_gpiod.cpp -o st7789_spi_gpiod -lgpiod
```

デモを実行します：

```bash
sudo ./st7789_spi_gpiod
```

  </TabItem>
</Tabs>

配線と SPI 設定が正しければ、ST7789 ディスプレイはさまざまな色で連続的に更新されるはずです。

![ST7789 display demo result](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_gif_01.gif)

図 7. ST7789 ディスプレイ デモ結果

## コードの説明

<Tabs>
  <TabItem value="jp5" label="JetPack 5">

### SPI の初期化

このデモは `/dev/spidev0.0` を開き、SPI インターフェースを次のように設定します。

| パラメータ       | 値               |
| ------------- | ---------------- |
| SPI デバイス   | `/dev/spidev0.0` |
| SPI モード     | `SPI_MODE_0`     |
| 1ワードあたりのビット数 | `8`              |
| SPI 速度       | `24000000 Hz`    |

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

| 信号 | 40ピン ピン | sysfs GPIO パス        |
| ------ | ---------- | ----------------------- |
| DC     | Pin 29     | `/sys/class/gpio/PQ.05` |
| RES    | Pin 31     | `/sys/class/gpio/PQ.06` |

`DC` ピンはコマンドモードとデータモードを切り替えるために使用されます。`RES` ピンは ST7789 ディスプレイをリセットするために使用されます。

### ST7789 の初期化

このデモは次のコマンドで ST7789 ディスプレイを初期化します。

| コマンド | 説明                 |
| ------- | --------------------- |
| `0x11`  | Sleep Out             |
| `0x3A`  | Pixel Format Set      |
| `0x05`  | RGB565 フォーマット   |
| `0x36`  | メモリアクセス制御    |
| `0x21`  | Display Inversion On  |
| `0x29`  | Display On            |

### 画面塗りつぶしテスト

このデモでは、RGB565 フォーマットを使用して画面全体を塗りつぶします。デモで使用しているディスプレイ解像度は次のとおりです。

```cpp
const int width = 240;
const int height = 320;
```

お使いの ST7789 ディスプレイの解像度が異なる場合は、実際の画面サイズに合わせてこれらの値を変更してください。

### SPI データ転送

フルスクリーンバッファは、1 回の小さな SPI 転送よりも大きくなります。そのため、このデモでは表示データをチャンクに分割して送信します。

```cpp
const size_t CHUNK_SIZE = 4096;
```

これにより転送サイズの制限を回避し、フルスクリーンリフレッシュをより安定させることができます。

  </TabItem>

  <TabItem value="jp6" label="JetPack 6">

### SPI 初期化

このデモでは `/dev/spidev0.0` をオープンし、SPI インターフェースを次のように設定します。

| パラメータ      | 値               |
| ------------- | ---------------- |
| SPI デバイス   | `/dev/spidev0.0` |
| SPI モード     | `SPI_MODE_0`     |
| 1 ワードあたりのビット数 | `8`              |
| SPI 速度       | `24000000 Hz`    |

システムが生成する SPI デバイスノードが異なる場合は、デモコード内の次の行を変更してください。

```cpp
spi_fd = open("/dev/spidev0.0", O_RDWR);
```

たとえば、デバイスノードが `/dev/spidev1.0` の場合は、次のように変更します。

```cpp
spi_fd = open("/dev/spidev1.0", O_RDWR);
```

### GPIO 制御

このデモでは、`libgpiod` を使用して `DC` と `RES` ピンを制御します。プログラムは GPIO チップをオープンし、ラインオフセットで GPIO ラインを取得し、それらを出力としてリクエストし、その後、表示の初期化およびデータ転送中に値を設定します。

GPIO チップとラインオフセットは、次の行で設定されています。

```cpp
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;
```

`gpiofind` の出力が異なる場合は、デモをコンパイルする前にこれらの値を更新してください。

`DC` ピンはコマンドモードとデータモードを切り替えるために使用されます。`RES` ピンは ST7789 ディスプレイをリセットするために使用されます。

### ST7789 初期化

このデモでは、次のコマンドで ST7789 ディスプレイを初期化します。

| コマンド | 説明                  |
| ------- | --------------------- |
| `0x11`  | スリープ解除          |
| `0x3A`  | ピクセルフォーマット設定 |
| `0x05`  | RGB565 フォーマット   |
| `0x36`  | メモリアクセス制御    |
| `0x21`  | ディスプレイ反転 On   |
| `0x29`  | ディスプレイ On       |

### 画面塗りつぶしテスト

このデモでは、RGB565 フォーマットを使用して画面全体を塗りつぶします。デモで使用しているディスプレイ解像度は次のとおりです。

```cpp
const int width = 240;
const int height = 320;
```

お使いの ST7789 ディスプレイの解像度が異なる場合は、実際の画面サイズに合わせてこれらの値を変更してください。

### SPI データ転送

フルスクリーンバッファは、1 回の小さな SPI 転送よりも大きくなります。そのため、このデモでは表示データをチャンクに分割して送信します。

```cpp
const size_t CHUNK_SIZE = 4096;
```

これにより転送サイズの制限を回避し、フルスクリーンリフレッシュをより安定させることができます。

  </TabItem>

  <TabItem value="jp7" label="JetPack 7">

### SPI 初期化

このデモでは `/dev/spidev0.0` をオープンし、SPI インターフェースを次のように設定します。

| パラメータ      | 値               |
| ------------- | ---------------- |
| SPI デバイス   | `/dev/spidev0.0` |
| SPI モード     | `SPI_MODE_0`     |
| 1 ワードあたりのビット数 | `8`              |
| SPI 速度       | `24000000 Hz`    |

システムが生成する SPI デバイスノードが異なる場合は、デモコード内の次の行を変更してください。

```cpp
spi_fd = open("/dev/spidev0.0", O_RDWR);
```

たとえば、デバイスノードが `/dev/spidev1.0` の場合は、次のように変更します。

```cpp
spi_fd = open("/dev/spidev1.0", O_RDWR);
```

### GPIO 制御

このデモでは、`libgpiod` を使用して `DC` と `RES` ピンを制御します。プログラムは GPIO チップをオープンし、ラインオフセットで GPIO ラインを取得し、それらを出力としてリクエストし、その後、表示の初期化およびデータ転送中に値を設定します。

JetPack 7 では、Pin 29 と Pin 31 は Jetson Expansion Header Tool で既に `gpio` として設定されているはずです。デモを実行する前に手動で pinmux レジスタを設定する必要はありません。

GPIO チップとラインオフセットは、次の行で設定されています。

```cpp
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;
```

`gpiofind` の出力が異なる場合は、デモをコンパイルする前にこれらの値を更新してください。

`DC` ピンはコマンドモードとデータモードを切り替えるために使用されます。`RES` ピンは ST7789 ディスプレイをリセットするために使用されます。

### ST7789 初期化

このデモでは、次のコマンドで ST7789 ディスプレイを初期化します。

| コマンド | 説明                  |
| ------- | --------------------- |
| `0x11`  | スリープ解除          |
| `0x3A`  | ピクセルフォーマット設定 |
| `0x05`  | RGB565 フォーマット   |
| `0x36`  | メモリアクセス制御    |
| `0x21`  | ディスプレイ反転 On   |
| `0x29`  | ディスプレイ On       |

### 画面塗りつぶしテスト

このデモでは、RGB565 フォーマットを使用して画面全体を塗りつぶします。デモで使用しているディスプレイ解像度は次のとおりです。

```cpp
const int width = 240;
const int height = 320;
```

お使いの ST7789 ディスプレイの解像度が異なる場合は、実際の画面サイズに合わせてこれらの値を変更してください。

### SPI データ転送

フルスクリーンバッファは、1 回の小さな SPI 転送よりも大きくなります。そのため、このデモでは表示データをチャンクに分割して送信します。

```cpp
const size_t CHUNK_SIZE = 4096;
```

これにより転送サイズの制限を回避し、フルスクリーンリフレッシュをより安定させることができます。

  </TabItem>
</Tabs>

## トラブルシューティング

<Tabs>
  <TabItem value="jp5" label="JetPack 5">

### `/dev/spidev*` デバイスが見つからない

考えられる原因：

1. SPI インターフェースが有効になっていない。
2. Jetson-IO の設定が保存されていない。
3. SPI を有効化した後にデバイスを再起動していない。
4. デバイスツリーが SPI デバイスノードを公開していない。
5. システムイメージに想定される SPI 設定が含まれていない。

推奨される確認事項：

```bash
ls /dev/spidev*
```

SPI デバイスが見つからない場合は、Jetson-IO を再度実行し、SPI が有効になっているか確認してください。

### SPI または GPIO へのアクセスで Permission Denied が表示される

C++ デモの実行時にパーミッションエラーが表示される場合は、`sudo` を付けて実行してみてください。

```bash
sudo ./st7789_spi
```

SPI デバイスおよび GPIO ノードのパーミッションも確認できます。

```bash
ls -l /dev/spidev*
ls -l /sys/class/gpio/PQ.05/value
ls -l /sys/class/gpio/PQ.06/value
```

### GPIO パスが存在しない

`/sys/class/gpio/PQ.05` または `/sys/class/gpio/PQ.06` が存在しない場合、GPIO ピンが正しくエクスポートされていない可能性があります。

利用可能な GPIO ノードを確認してください。

```bash
ls /sys/class/gpio/
```

その後、GPIO ピンを再度エクスポートします。

```bash
sudo sh -c 'echo 453 > /sys/class/gpio/export'
sudo sh -c 'echo 454 > /sys/class/gpio/export'
```

### SPI はオープンできるがディスプレイに何も表示されない

考えられる原因：

1. ディスプレイの配線が正しくない。
2. SPI デバイスパスが正しくない。
3. CS、DC、または RES ピンが正しく接続されていない。
4. ディスプレイコントローラが ST7789 ではない。
5. ディスプレイが異なる初期化シーケンスを必要としている。
6. バックライトピンに電源が供給されていない。

推奨される確認事項：

1. `VCC` が Pin 1 に接続されていることを確認します。
2. `GND` が Pin 6 に接続されていることを確認します。
3. `BLK` が Pin 17 に接続され、バックライトが点灯していることを確認します。
4. `SCL`、`SDA`、`CS` が Pin 23、Pin 19、Pin 24 に接続されていることを確認します。
5. `RES` と `DC` が Pin 31 と Pin 29 に接続されていることを確認します。
6. SPI 速度を下げて再度テストします。
7. ディスプレイモジュールのデータシートからディスプレイコントローラの型番を確認します。

### バックライトは点灯するが画像が表示されない

バックライトは点灯しているが画像が表示されない場合、電源配線は正しいものの、SPI 通信またはディスプレイ初期化が正しくない可能性があります。

次の点を確認してください。

1. 正しい SPI デバイスが使用されているかどうか。
2. DC と RES ピンが正しく設定されているかどうか。
3. ディスプレイドライバが ST7789 コントローラに対応しているかどうか。
4. 画面解像度が正しいかどうか。
5. ディスプレイモジュールが行または列のオフセット設定を必要としていないかどうか。

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
4. 使用しているモジュールが RGB か BGR のどちらのカラー順序か確認してください。

### 画像の向きが正しくない

画像が回転している、または反転している場合は、初期化関数内の `MADCTL` コマンドパラメータを変更してください。

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

  </TabItem>

  <TabItem value="jp6" label="JetPack 6">

### `/dev/spidev*` デバイスが見つからない

考えられる原因：

1. SPI インターフェースが有効になっていない。
2. Jetson-IO の設定が保存されていない。
3. SPI を有効化した後にデバイスを再起動していない。
4. デバイスツリーが SPI デバイスノードを公開していない。
5. システムイメージに想定される SPI 設定が含まれていない。

推奨される確認事項：

```bash
ls /dev/spidev*
```

SPI デバイスが見つからない場合は、Jetson-IO を再度実行し、SPI が有効になっているか確認してください。

### SPI または GPIO へのアクセスで Permission Denied が表示される

C++ デモの実行時にパーミッションエラーが表示される場合は、`sudo` を付けて実行してみてください。

```bash
sudo ./st7789_spi_gpiod
```

SPI デバイスおよび GPIO キャラクタデバイスも確認できます。

```bash
ls -l /dev/spidev*
ls -l /dev/gpiochip*
```

### GPIO ラインが見つからない

`gpiofind PQ.05` または `gpiofind PQ.06` が結果を返さない場合は、利用可能な GPIO ラインを確認してください。

```bash
gpioinfo
```

その後、`DC` と `RES` ピンで使用されている GPIO 名を探します。GPIO チップ名またはラインオフセットが異なる場合は、デモコード内の次の値を更新してください。

```cpp
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;
```

### GPIO ラインのリクエストに失敗する

デモが GPIO ラインのリクエストに失敗したと報告する場合、考えられる原因は次のとおりです：

1. GPIO ピンマルチプレクサが出力として設定されていない。
2. 選択した GPIO チップが正しくない。
3. 選択したラインオフセットが正しくない。
4. GPIO ラインがすでに別のプロセスまたはドライバによって使用されている。
5. プログラムに `/dev/gpiochip*` へアクセスする権限がない。

推奨される確認事項：

1. Pin 29 と Pin 31 のピンマルチプレクサレジスタが設定されていることを確認します。必要に応じて、**GPIO Control** セクションの `jetson-gpio-pinmux-lookup` と `busybox devmem` コマンドを再実行してください。
2. GPIO ラインの状態を確認します：

```bash
gpioinfo | grep -E "PQ.05|PQ.06"
```

すでにラインが使用中の場合は、そのラインを使用しているプロセスを停止するか、ハードウェア接続に応じて正しい GPIO ラインを選択してください。

### SPI はオープンできるが表示が何も出ない

考えられる原因：

1. ディスプレイの配線が正しくない。
2. SPI デバイスパスが正しくない。
3. CS、DC、または RES ピンが正しく接続されていない。
4. DC/RES 用の GPIO チップまたはラインオフセットが正しくない。
5. ディスプレイコントローラが ST7789 ではない。
6. ディスプレイが異なる初期化シーケンスを必要としている。
7. バックライトピンに電源が供給されていない。

推奨される確認事項：

1. `VCC` が Pin 1 に接続されていることを確認します。
2. `GND` が Pin 6 に接続されていることを確認します。
3. `BLK` が Pin 17 に接続され、バックライトが点灯していることを確認します。
4. `SCL`、`SDA`、`CS` が Pin 23、Pin 19、Pin 24 に接続されていることを確認します。
5. `RES` と `DC` が Pin 31 と Pin 29 に接続されていることを確認します。
6. `gpiofind` または `gpioinfo` を使用して GPIO チップとラインオフセットを確認します。
7. SPI 速度を下げて再度テストします。
8. ディスプレイモジュールのデータシートからディスプレイコントローラの型番を確認します。

### バックライトは点灯するが画像が表示されない

バックライトが点灯しているが画像が表示されない場合、電源配線は正しいものの、SPI 通信、GPIO 制御、またはディスプレイの初期化が正しくない可能性があります。

次の点を確認してください：

1. 正しい SPI デバイスが使用されているかどうか。
2. DC と RES に対して正しい GPIO チップとラインオフセットが使用されているかどうか。
3. ディスプレイドライバが ST7789 コントローラに対応しているかどうか。
4. 画面解像度が正しいかどうか。
5. ディスプレイモジュールが行または列のオフセット設定を必要としているかどうか。

### 画像の色がおかしい

考えられる原因：

1. RGB と BGR のカラー順序が一致していない。
2. ディスプレイの反転設定が異なる。
3. `MADCTL` パラメータが使用しているパネルに適していない。
4. ディスプレイモジュールが、わずかに異なる ST7789 の初期化シーケンスを使用している。

推奨される解決策：

1. `MADCTL` の値を変更してみてください。
2. ディスプレイの反転を有効または無効にしてみてください。
3. ST7789 ディスプレイモジュールのデータシートを確認してください。
4. 使用しているモジュールが RGB か BGR のどちらのカラー順序かを確認してください。

### 画像の向きが正しくない

画像が回転していたり反転している場合は、初期化関数内の `MADCTL` コマンドパラメータを変更します：

```cpp
WriteCommand(0x36);
WriteData(0x08);
```

正しい値はディスプレイモジュールの向きによって異なります。

### ディスプレイのリフレッシュが遅い

考えられる原因：

1. SPI クロックスピードが低すぎる。
2. プログラムが毎回フルスクリーンをリフレッシュしている。
3. ディスプレイモジュールのリフレッシュ性能に制限がある。
4. C++ デモは検証用に単純なフルスクリーン塗りつぶし方式を使用している。

推奨される解決策：

1. SPI クロックスピードを段階的に上げてください。
2. 不要なフルスクリーンリフレッシュを避けてください。
3. アプリケーションが対応している場合は、変更された領域のみをリフレッシュしてください。
4. 現在のカラーフィルテストは、基本的なハードウェア検証デモとしてのみ使用してください。

  </TabItem>

  <TabItem value="jp7" label="JetPack 7">

### `/dev/spidev*` デバイスが見つからない

考えられる原因：

1. SPI インターフェースが有効化されていない。
2. Jetson-IO の設定が保存されていない。
3. SPI を有効化した後にデバイスを再起動していない。
4. デバイスツリーが SPI デバイスノードを公開していない。
5. システムイメージに想定している SPI 設定が含まれていない。

推奨される確認事項：

```bash
ls /dev/spidev*
```

SPI デバイスが見つからない場合は、Jetson-IO を再度実行し、`spi1` が有効になっているか確認してください。

### SPI または GPIO へのアクセスで Permission Denied が発生する

C++ デモを実行した際に権限エラーが表示される場合は、`sudo` を付けて実行してみてください：

```bash
sudo ./st7789_spi_gpiod
```

SPI デバイスおよび GPIO キャラクタデバイスも確認できます：

```bash
ls -l /dev/spidev*
ls -l /dev/gpiochip*
```

### GPIO ラインが見つからない

`gpiofind PQ.05` または `gpiofind PQ.06` が結果を返さない場合は、利用可能な GPIO ラインを確認してください：

```bash
gpioinfo
```

その後、`DC` と `RES` ピンで使用されている GPIO 名を探します。GPIO チップ名またはラインオフセットが異なる場合は、デモコード内の次の値を更新してください：

```cpp
const char* GPIO_CHIP_NAME = "gpiochip0";
const unsigned int DC_LINE_OFFSET  = 29;
const unsigned int RES_LINE_OFFSET = 31;
```

また、Jetson Expansion Header Tool で Pin 29 と Pin 31 が `gpio` として設定されていることも確認してください。

### GPIO ラインのリクエストに失敗する

デモが GPIO ラインのリクエストに失敗したと報告する場合、考えられる原因は次のとおりです：

1. Pin 29 または Pin 31 が Jetson Expansion Header Tool で `gpio` として設定されていない。
2. 選択した GPIO チップが正しくない。
3. 選択したラインオフセットが正しくない。
4. GPIO ラインがすでに別のプロセスまたはドライバによって使用されている。
5. プログラムに `/dev/gpiochip*` へアクセスする権限がない。

推奨される確認事項：

1. Jetson-IO を再度開き、Pin 29（`extperiph3_clk`）と Pin 31（`extperiph4_clk`）が `gpio` に設定されていることを確認します。
2. GPIO ラインの状態を確認します：

```bash
gpioinfo | grep -E "PQ.05|PQ.06"
```

すでにラインが使用中の場合は、そのラインを使用しているプロセスを停止するか、ハードウェア接続に応じて正しい GPIO ラインを選択してください。

### SPI はオープンできるが表示が何も出ない

考えられる原因：

1. ディスプレイの配線が正しくない。
2. SPI デバイスパスが正しくない。
3. CS、DC、または RES ピンが正しく接続されていない。
4. DC/RES 用の GPIO チップまたはラインオフセットが正しくない。
5. Pin 29 または Pin 31 が Jetson-IO で `gpio` として設定されていない。
6. ディスプレイコントローラが ST7789 ではない。
7. ディスプレイが異なる初期化シーケンスを必要としている。
8. バックライトピンに電源が供給されていない。

推奨される確認事項：

1. `VCC` が Pin 1 に接続されていることを確認します。
2. `GND` が Pin 6 に接続されていることを確認します。
3. `BLK` が Pin 17 に接続され、バックライトが点灯していることを確認します。
4. `SCL`、`SDA`、`CS` が Pin 23、Pin 19、Pin 24 に接続されていることを確認します。
5. `RES` と `DC` が Pin 31 と Pin 29 に接続されていることを確認します。
6. `gpiofind` または `gpioinfo` を使用して GPIO チップとラインオフセットを確認します。
7. Pin 29 と Pin 31 が Jetson-IO で `gpio` として設定されていることを確認します。
8. SPI 速度を下げて再度テストします。
9. ディスプレイモジュールのデータシートからディスプレイコントローラの型番を確認します。

### バックライトは点灯するが画像が表示されない

バックライトが点灯しているが画像が表示されない場合、電源配線は正しいものの、SPI 通信、GPIO 制御、またはディスプレイの初期化が正しくない可能性があります。

次の点を確認してください：

1. 正しい SPI デバイスが使用されているかどうか。
2. DC と RES に対して正しい GPIO チップとラインオフセットが使用されているかどうか。
3. Pin 29 と Pin 31 が Jetson-IO で `gpio` として設定されているかどうか。
4. ディスプレイドライバが ST7789 コントローラに対応しているかどうか。
5. 画面解像度が正しいかどうか。
6. ディスプレイモジュールが行または列のオフセット設定を必要としているかどうか。

### 画像の色がおかしい

考えられる原因：

1. RGB と BGR のカラー順序が一致していない。
2. ディスプレイの反転設定が異なる。
3. `MADCTL` パラメータが使用しているパネルに適していない。
4. ディスプレイモジュールが、わずかに異なる ST7789 の初期化シーケンスを使用している。

推奨される解決策：

1. `MADCTL` の値を変更してみてください。
2. ディスプレイの反転を有効または無効にしてみてください。
3. ST7789 ディスプレイモジュールのデータシートを確認してください。
4. 使用しているモジュールが RGB か BGR のどちらのカラー順序かを確認してください。

### 画像の向きが正しくない

画像が回転していたり反転している場合は、初期化関数内の `MADCTL` コマンドパラメータを変更します：

```cpp
WriteCommand(0x36);
WriteData(0x08);
```

正しい値はディスプレイモジュールの向きによって異なります。

### ディスプレイのリフレッシュが遅い

考えられる原因：

1. SPI クロックスピードが低すぎる。
2. プログラムが毎回フルスクリーンをリフレッシュしている。
3. ディスプレイモジュールのリフレッシュ性能に制限がある。
4. C++ デモは検証用に単純なフルスクリーン塗りつぶし方式を使用している。

推奨される解決策：

1. SPI クロックスピードを段階的に上げてください。
2. 不要なフルスクリーンリフレッシュを避けてください。
3. アプリケーションが対応している場合は、変更された領域のみをリフレッシュしてください。
4. 現在のカラーフィルテストは、基本的なハードウェア検証デモとしてのみ使用してください。

  </TabItem>
</Tabs>

## まとめ

この wiki では、Seeed reComputer J4012 Classic に 40 ピンヘッダを介して SPI ディスプレイを接続する方法を紹介しました。一般的な SPI ディスプレイのワークフローには、ディスプレイの配線、SPI インターフェースの有効化、SPI デバイスノードの確認、依存関係のインストール、C++ デモのコンパイル、およびディスプレイテストの実行が含まれます。JetPack 5 は sysfs GPIO を使用し、JetPack 6 は手動のピンマルチプレクサ設定とともに `libgpiod` を使用し、JetPack 7 は Jetson Expansion Header Tool で GPIO ピンを直接設定したうえで `libgpiod` を使用します。

本ガイドでは、例として ST7789 SPI LCD をディスプレイモジュールに使用しました。他の SPI ディスプレイの場合も全体の手順は類似していますが、ディスプレイドライバ、解像度、初期化シーケンス、および配線の詳細は、実際のディスプレイモジュールに応じて調整する必要があります。

## リソース

- [NVIDIA® Jetson Orin™ NX 16GB AI Device - reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)

- [reComputer J401x datasheet](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)

- [NVIDIA Jetson.GPIO mapping](https://github.com/NVIDIA/jetson-gpio/blob/master/lib/python/Jetson/GPIO/gpio_pin_data.py)

- [Linux spidev userspace API](https://docs.kernel.org/spi/spidev.html)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに合わせて選択いただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>