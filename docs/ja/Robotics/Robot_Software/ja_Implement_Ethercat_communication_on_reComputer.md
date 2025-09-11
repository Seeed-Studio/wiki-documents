---
description: このwikiでは、リアルタイム産業オートメーション制御アプリケーション向けにreComputer JetsonでEtherCAT通信を実装する詳細な手順を提供します。
title: reComputerでEthercat通信を実装する
keywords:
- EtherCAT
- reComputer
- Jetson
- リアルタイム通信
- 産業オートメーション
- SOEM
- ロボティクス制御
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics_2.webp
slug: /ja/recomputer_ethercat_communication
last_update:
  date: 2025-09-05
  author: Zibo
---

<div align="center">
    <img width={600}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100001302_recomputer_robotics_j3011_with_gmsl_extension.jpg" />
</div>

<div style={{ textAlign: "justify" }}>
EtherCAT（Ethernet for Control Automation Technology）は、オートメーション、ロボティクス、モーションシステムにおけるリアルタイムオートメーション制御用に設計された高性能でオープンソースの産業用Ethernetプロトコルです。このwikiでは、reComputer Jetsonシリーズでの EtherCat通信の実行方法を説明します。
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-with-GMSL-extension-board-p-6537.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 前提条件

- reComputer（Jetpack 6.2プリインストール）
- Ethernetケーブル
- EtherCATスレーブデバイス


## リアルタイム性能の検証

EtherCAT通信を実装する前に、reComputerシステムが産業オートメーション用のリアルタイム性能要件を満たしていることを確認することが重要です。

### リアルタイムテストツールのインストール

```bash
# Install rt-tests package for real-time latency measurement
sudo apt update
sudo apt install rt-tests -y
```

### Cyclictestの実行

```bash
# Run cyclictest with 6 threads and priority 80
sudo cyclictest -t 6 -p 80
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/cyc1.png" />
</div>

`jetson_clocks`を有効にする前は、一部のスレッドのレイテンシが比較的高いことが観察できます。そのため、以下のコマンドで`jetson_clocks`を有効にする必要があります：
```bash
sudo jetson_clocks
```
<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/cyc2.png" />
</div>
:::info
**リアルタイム性能分析：**
- 最大レイテンシ：34マイクロ秒
- 平均レイテンシ：2-6マイクロ秒
- 6つのテストスレッドすべてが9-34マイクロ秒の範囲内で安定したレイテンシを示している
- システム負荷：0.00
- レイテンシ分布は均一で一貫している

この性能は100マイクロ秒未満のハードリアルタイムアプリケーション要件を満たしており、ロボティクス制御や産業オートメーションアプリケーションに適しています。
:::

## SOEMライブラリの概要

<div style={{ textAlign: "justify" }}>
SOEM（Simple Open EtherCAT Master）は、開発者にリアルタイムEtherCAT通信を確立するためのポータブルで柔軟な方法を提供する軽量でオープンソースのEtherCATマスターライブラリです。NVIDIA JetsonにはネイティブなEtherCATハードウェアインターフェースがありませんが、SOEMは標準ネットワークインターフェースを通じて生のEthernetフレームを使用して、完全にソフトウェアでEtherCAT通信を可能にします。
</div>

### 主な機能

- **ソフトウェアベースの実装** - 特別なハードウェアは不要
- **リアルタイム対応** - 低レイテンシ通信に最適化
- **クロスプラットフォーム** - Linux、Windows、組み込みシステムで動作
- **オープンソース** - 自由に使用・変更可能
- **複数スレーブサポート** - 多数のEtherCATデバイスを制御可能

## ハードウェア接続

以下のセットアップを使用してEtherCATネットワークを接続します：

1. **標準Ethernetケーブルを使用**（Cat5e以上を推奨）
2. **reComputer（マスター）**を**EtherCATスレーブデバイス**に接続

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/hc.jpg" />
</div>


## SOEMライブラリのインストール

**ステップ1.** SOEMリポジトリのクローン

```bash
# Clone the SOEM library from GitHub
git clone https://github.com/OpenEtherCATsociety/SOEM
cd SOEM
```

**ステップ2.** ビルドとインストール

```bash
# Create build directory
mkdir build
cd build

# Configure with CMake
cmake ..

# Compile with 4 parallel jobs
make -j4

# Install system-wide
sudo make install
```

## EtherCAT通信のテスト

**ステップ1.** ネットワークインターフェースの識別：
```bash
# Check available network interfaces
ifconfig
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/ifname.png" />
</div>

**ステップ2.** slaveinfoサンプルに移動して検出プログラムを実行：

```bash
# Navigate to slaveinfo sample
cd /path/to/SOEM/build/samples/slaveinfo

# Run slave detection (replace enP8p1s0 with your interface name)
sudo ./slaveinfo enP8p1s0
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/slaver_info.png" />
</div>

:::success
**検証成功：**
出力に「slave found」が表示された場合、以下が確認されます：
- SOEMソフトウェアスタックが正常に動作している
- EtherCATスレーブデバイスが適切に接続されている
- 通信リンクが確立されている
:::

## 基本通信例

### C言語の例

基本的なEtherCAT通信を実演するシンプルなCプログラムを作成します：

<details>
<summary> ethercat_communication_test.c </summary>
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <stdint.h>
#include <sys/time.h>

// EtherCAT includes
#include "ethercat.h"

// Function prototypes
void print_state_info(const char* state_name, int success);
void set_control_mode(int mode);
void read_control_mode(void);
void set_servo_parameters(void);
void configure_pdo_mapping(void);
void sleep_ms(int milliseconds);

int main(int argc, char *argv[])
{
    int ret;
    char *ifname = "enP8p1s0";  // Network interface name

    printf("EtherCAT Communication Test - C Version\n");
    printf("=======================================\n\n");

    // Initialize EtherCAT communication
    printf("Initializing EtherCAT communication...\n");

    // Initialize EtherCAT master
    if (ec_init(ifname)) {
        printf("✅ EtherCAT master initialized successfully\n");
    } else {
        printf("❌ Failed to initialize EtherCAT master\n");
        return -1;
    }

    // Find and configure slaves
    if (ec_config_init(FALSE) > 0) {
        printf("✅ Found %d slaves\n", ec_slavecount);
    } else {
        printf("❌ No slaves found\n");
        ec_close();
        return -1;
    }

    // Print slave information
    printf("Found slave: %s, state: %d\n", 
           ec_slave[1].name, ec_slave[1].state);

    // Enter PRE-OP state (SDO communication allowed)
    printf("\n📡 Entering PRE-OP state (SDO communication allowed)...\n");
    ec_statecheck(0, EC_STATE_PRE_OP, EC_TIMEOUTSTATE);
    ret = ec_writestate(0);
    if (ret == EK_OK) {
        print_state_info("PRE-OP", 1);
    } else {
        print_state_info("PRE-OP", 0);
    }

    // Enter SAFE-OP state (safe PDO communication allowed)
    printf("\n📡 Entering SAFE-OP state (safe PDO communication allowed)...\n");
    ec_statecheck(0, EC_STATE_SAFE_OP, EC_TIMEOUTSTATE);
    ret = ec_writestate(0);
    if (ret == EK_OK) {
        print_state_info("SAFE-OP", 1);
    } else {
        print_state_info("SAFE-OP", 0);
    }

    // Enter OP state (full PDO communication allowed)
    printf("\n📡 Entering OP state (full PDO communication allowed)...\n");
    ec_statecheck(0, EC_STATE_OPERATIONAL, EC_TIMEOUTSTATE);
    ret = ec_writestate(0);
    if (ret == EK_OK) {
        print_state_info("OP", 1);
    } else {
        print_state_info("OP", 0);
    }

    // Switch between different control modes
    printf("\n=== Control Mode Testing ===\n");

    set_control_mode(1);  // Position control
    set_control_mode(3);  // Velocity control
    set_control_mode(4);  // Torque control
    set_control_mode(6);  // Homing
    set_control_mode(7);  // Interpolated position mode
    set_control_mode(8);  // Cyclic synchronous position mode
    set_control_mode(0);  // No mode

    // Set servo parameters
    printf("\n=== Setting Servo Parameters ===\n");
    set_servo_parameters();

    // Configure PDO mapping
    printf("\n=== Configuring PDO Mapping ===\n");
    configure_pdo_mapping();

    // Print final slave state
    printf("\nSlave state: %d\n", ec_slave[1].state);

    printf("\nEtherCAT communication test completed\n");

    // Cleanup
    ec_close();
    return 0;
}

void print_state_info(const char* state_name, int success)
{
    if (success) {
        printf("📡 Successfully entered %s state\n", state_name);
    } else {
        printf("📡 Failed to enter %s state\n", state_name);
    }
}

void set_control_mode(int mode)
{
    uint8_t mode_data = (uint8_t)mode;
    int ret;

    // Write control mode to object 0x6060
    ret = ec_SDOwrite(1, 0x6060, 0, FALSE, sizeof(mode_data), &mode_data, EC_TIMEOUTRXM);

    if (ret > 0) {
        switch(mode) {
            case 1:
                printf("✅ Successfully set position control mode\n");
                break;
            case 3:
                printf("✅ Successfully set velocity control mode\n");
                break;
            case 4:
                printf("✅ Successfully set torque control mode\n");
                break;
            case 6:
                printf("✅ Successfully set homing mode\n");
                break;
            case 7:
                printf("✅ Successfully set interpolated position mode\n");
                break;
            case 8:
                printf("✅ Successfully set cyclic synchronous position mode\n");
                break;
            case 0:
                printf("✅ Successfully set no mode\n");
                break;
            default:
                printf("✅ Successfully set mode %d\n", mode);
                break;
        }
    } else {
        printf("❌ Failed to set control mode %d\n", mode);
    }

    // Read back the current mode
    read_control_mode();
    sleep_ms(1000);
}

void read_control_mode(void)
{
    int ret;
    uint8_t mode_data;
    int wkc;

    ret = ec_SDOread(1, 0x6060, 0, FALSE, &wkc, &mode_data, sizeof(mode_data), EC_TIMEOUTRXM);

    if (ret > 0) {
        printf("Current mode: %d\n", mode_data);
    } else {
        printf("Failed to read current mode\n");
    }
}

void set_servo_parameters(void)
{
    int ret;
    uint32_t param_value;
    int wkc;

    // Set maximum position range (0x607F)
    param_value = 1000000;
    ret = ec_SDOwrite(1, 0x607F, 0, FALSE, sizeof(param_value), &param_value, EC_TIMEOUTRXM);
    if (ret > 0) {
        printf("✅ Set maximum position range: %u\n", param_value);
    } else {
        printf("❌ Failed to set position range\n");
    }

    // Read back position range
    ret = ec_SDOread(1, 0x607F, 0, FALSE, &wkc, &param_value, sizeof(param_value), EC_TIMEOUTRXM);
    if (ret > 0) {
        printf("Position range: %u\n", param_value);
    }

    // Set maximum velocity (0x6081)
    param_value = 1000000;
    ret = ec_SDOwrite(1, 0x6081, 0, FALSE, sizeof(param_value), &param_value, EC_TIMEOUTRXM);
    if (ret > 0) {
        printf("✅ Set maximum velocity: %u\n", param_value);
    } else {
        printf("❌ Failed to set velocity\n");
    }

    // Read back velocity
    ret = ec_SDOread(1, 0x6081, 0, FALSE, &wkc, &param_value, sizeof(param_value), EC_TIMEOUTRXM);
    if (ret > 0) {
        printf("Maximum velocity: %u\n", param_value);
    }

    // Set maximum acceleration (0x6083)
    param_value = 1000;
    ret = ec_SDOwrite(1, 0x6083, 0, FALSE, sizeof(param_value), &param_value, EC_TIMEOUTRXM);
    if (ret > 0) {
        printf("✅ Set maximum acceleration: %u\n", param_value);
    } else {
        printf("❌ Failed to set acceleration\n");
    }

    // Read back acceleration
    ret = ec_SDOread(1, 0x6083, 0, FALSE, &wkc, &param_value, sizeof(param_value), EC_TIMEOUTRXM);
    if (ret > 0) {
        printf("Maximum acceleration: %u\n", param_value);
    }

    printf("✅ Successfully set servo parameters\n");
}

void configure_pdo_mapping(void)
{
    int ret;
    uint8_t mapping_count;
    uint32_t mapping_data;
    int wkc;

    // Configure receive PDO mapping (1600h) - Master to slave
    printf("Configuring receive PDO mapping (1600h)...\n");

    // Clear existing mapping
    mapping_count = 0;
    ret = ec_SDOwrite(1, 0x1600, 0, FALSE, sizeof(mapping_count), &mapping_count, EC_TIMEOUTRXM);

    // Set control word mapping (6040h, 16-bit)
    mapping_data = 0x60400010;
    ret = ec_SDOwrite(1, 0x1600, 1, FALSE, sizeof(mapping_data), &mapping_data, EC_TIMEOUTRXM);

    // Set target position mapping (607Ah, 32-bit)
    mapping_data = 0x607A0020;
    ret = ec_SDOwrite(1, 0x1600, 2, FALSE, sizeof(mapping_data), &mapping_data, EC_TIMEOUTRXM);

    // Set mapping count
    mapping_count = 2;
    ret = ec_SDOwrite(1, 0x1600, 0, FALSE, sizeof(mapping_count), &mapping_count, EC_TIMEOUTRXM);

    if (ret > 0) {
        printf("✅ Receive PDO mapping configured\n");
    } else {
        printf("❌ Failed to configure receive PDO mapping\n");
    }

    // Configure transmit PDO mapping (1A00h) - Slave to master
    printf("Configuring transmit PDO mapping (1A00h)...\n");

    // Clear existing mapping
    mapping_count = 0;
    ret = ec_SDOwrite(1, 0x1A00, 0, FALSE, sizeof(mapping_count), &mapping_count, EC_TIMEOUTRXM);

    // Set status word mapping (6041h, 16-bit)
    mapping_data = 0x60410010;
    ret = ec_SDOwrite(1, 0x1A00, 1, FALSE, sizeof(mapping_data), &mapping_data, EC_TIMEOUTRXM);

    // Set actual position mapping (6064h, 32-bit)
    mapping_data = 0x60640020;
    ret = ec_SDOwrite(1, 0x1A00, 2, FALSE, sizeof(mapping_data), &mapping_data, EC_TIMEOUTRXM);

    // Set mapping count
    mapping_count = 2;
    ret = ec_SDOwrite(1, 0x1A00, 0, FALSE, sizeof(mapping_count), &mapping_count, EC_TIMEOUTRXM);

    if (ret > 0) {
        printf("✅ Transmit PDO mapping configured\n");
    } else {
        printf("❌ Failed to configure transmit PDO mapping\n");
    }

    printf("✅ PDO mapping configuration completed\n");
}

void sleep_ms(int milliseconds)
{
    usleep(milliseconds * 1000);
}

```
</details>

Create a Makefile file to compile this program:
:::note
Replace `SOEM_PATH` to your own installation path!
:::

<details>
<summary> Makefile </summary>
```Makefile
# ローカルSOEMライブラリを使用したEtherCAT通信テスト用Makefile

# コンパイラとフラグ
CC = gcc
CFLAGS = -Wall -Wextra -std=c99 -O2
LDFLAGS = -lrt -lpthread

# ローカルSOEMライブラリのパス
SOEM_PATH = /home/seeed/ethercat/SOEM
INCLUDES = -I$(SOEM_PATH)/build/install/include
LIBS = -L$(SOEM_PATH)/build -lsoem

# ターゲット実行ファイル
TARGET_FULL = ethercat_communication_test
TARGET_SIMPLE = ethercat_simple_test

# ソースファイル
SOURCES_FULL = ethercat_communication_test.c
SOURCES_SIMPLE = ethercat_simple_test.c

# オブジェクトファイル
OBJECTS_FULL = $(SOURCES_FULL:.c=.o)
OBJECTS_SIMPLE = $(SOURCES_SIMPLE:.c=.o)

# デフォルトターゲット
all: $(TARGET_SIMPLE)

# シンプル版をビルド（推奨）
simple: $(TARGET_SIMPLE)

# フル版をビルド
full: $(TARGET_FULL)

# シンプル実行ファイルをビルド
$(TARGET_SIMPLE): $(OBJECTS_SIMPLE)
	$(CC) $(OBJECTS_SIMPLE) -o $(TARGET_SIMPLE) $(LIBS) $(LDFLAGS)
	@echo "✅ シンプル版のビルドが正常に完了しました！"
	@echo "実行方法: sudo ./$(TARGET_SIMPLE)"

# フル実行ファイルをビルド
$(TARGET_FULL): $(OBJECTS_FULL)
	$(CC) $(OBJECTS_FULL) -o $(TARGET_FULL) $(LIBS) $(LDFLAGS)
	@echo "✅ フル版のビルドが正常に完了しました！"
	@echo "実行方法: sudo ./$(TARGET_FULL)"

# ソースファイルをコンパイル
%.o: %.c
	$(CC) $(CFLAGS) $(INCLUDES) -c $< -o $@

# ビルドファイルをクリーン
clean:
	rm -f $(OBJECTS_FULL) $(OBJECTS_SIMPLE) $(TARGET_FULL) $(TARGET_SIMPLE)
	@echo "🧹 ビルドファイルをクリーンしました"

# ローカルSOEMインストールをチェック
check-soem:
	@echo "ローカルSOEMインストールをチェック中..."
	@if [ -f "$(SOEM_PATH)/build/install/include/soem/soem.h" ]; then \
		echo "✅ SOEMヘッダーが見つかりました: $(SOEM_PATH)/build/install/include/soem/soem.h"; \
	else \
		echo "❌ SOEMヘッダーが見つかりません"; \
	fi
	@if [ -f "$(SOEM_PATH)/build/libsoem.a" ]; then \
		echo "✅ SOEMライブラリが見つかりました: $(SOEM_PATH)/build/libsoem.a"; \
	else \
		echo "❌ SOEMライブラリが見つかりません"; \
	fi

# コンパイルテスト
test-compile: check-soem
	@echo "コンパイルをテスト中..."
	@make clean
	@make simple
	@echo "✅ コンパイルテストが成功しました！"

# 参考用の手動コンパイルコマンド
manual-compile:
	@echo "手動コンパイルコマンド:"
	@echo "シンプル版:"
	@echo "  gcc -Wall -Wextra -std=c99 -O2 \\"
	@echo "      -I$(SOEM_PATH)/build/install/include \\"
	@echo "      ethercat_simple_test.c \\"
	@echo "      -o ethercat_simple_test \\"
	@echo "      -L$(SOEM_PATH)/build -lsoem -lrt -lpthread"
	@echo ""
	@echo "フル版:"
	@echo "  gcc -Wall -Wextra -std=c99 -O2 \\"
	@echo "      -I$(SOEM_PATH)/build/install/include \\"
	@echo "      ethercat_communication_test.c \\"
	@echo "      -o ethercat_communication_test \\"
	@echo "      -L$(SOEM_PATH)/build -lsoem -lrt -lpthread"

# ヘルプターゲット
help:
	@echo "利用可能なターゲット:"
	@echo "  all           - シンプル版をビルド（デフォルト）"
	@echo "  simple        - シンプル版をビルド"
	@echo "  full          - フル版をビルド"
	@echo "  clean         - ビルドファイルを削除"
	@echo "  check-soem    - ローカルSOEMインストールをチェック"
	@echo "  test-compile  - コンパイルをテスト"
	@echo "  manual-compile - 手動コンパイルコマンドを表示"
	@echo "  help          - このヘルプメッセージを表示"
	@echo ""
	@echo "クイックスタート:"
	@echo "  make          # プログラムをビルド"
	@echo "  sudo ./ethercat_simple_test  # プログラムを実行"
	@echo ""
	@echo "SOEMライブラリの場所: $(SOEM_PATH)"

```

</details>

Compile and run the program:
```bash
make gcc -Wall -Wextra -std=c99 -O2 -I/home/seeed/ethercat/SOEM/build/install/include -c ethercat_simple_test.c -o ethercat_simple_test.o

sudo ./ethercat_simple_test
```
<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/conmunicate.png" />
</div>

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/conmunicate.gif" />
</div>

<div style={{ textAlign: "justify" }}>
As shown above, successful EtherCat communication will modify the slave station's driving mode, and it will be able to normally read the status information of the slave station.
</div>

### Python Example

For Python-based applications, you can use the pysoem library:

<details>
<summary> conmunicate_test.py </summary>
```python
import pysoem          
import time           
import struct         


# EtherCAT通信を初期化
# ネットワークインターフェース名
interface_name = "enP8p1s0"

# EtherCATマスターオブジェクトを作成
master = pysoem.Master()

# EtherCATマスター接続を開く
master.open(interface_name)

# スレーブを初期化
master.config_init()

slaver = master.slaves[0]

print(f"Found slave: {slaver.name}, state: {slaver.state}")

print("📡 PRE-OP状態に移行中（SDO通信が許可されます）...") 
# マスター状態をPREOP_STATEに設定
master.state = pysoem.PREOP_STATE
# EtherCATネットワークに状態を書き込み
master.write_state()

# 正常に移行したかチェック
if master.state == pysoem.PREOP_STATE:
    print("📡 PRE-OP状態への移行に成功しました")
else:
    print("📡 PRE-OP状態への移行に失敗しました")


# SAFE-OP状態に移行（安全なPDO通信が許可されます）
master.state = pysoem.SAFEOP_STATE
master.write_state()

# 正常に移行したかチェック
if master.state == pysoem.SAFEOP_STATE:
    print("📡 SAFE-OP状態への移行に成功しました")
else:
    print("📡 SAFE-OP状態への移行に失敗しました")

# OP状態に移行（完全なPDO通信が許可されます）
master.state = pysoem.OP_STATE
master.write_state()

# 正常に移行したかチェック
if master.state == pysoem.OP_STATE:
    print("📡 マスターがOP状態への移行に成功しました")
else:
    print("📡 OP状態への移行に失敗しました")


# 異なる制御モード間の切り替え

slaver.sdo_write(0x6060, 0, struct.pack('<B', 1))  # モードを位置制御に設定
print("✅ 位置制御モードの設定に成功しました")
print(f"Current mode: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)


slaver.sdo_write(0x6060, 0, struct.pack('<B', 3))  # モードを速度制御に設定
print("✅ 速度制御モードの設定に成功しました")
print(f"Current mode: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)

slaver.sdo_write(0x6060, 0, struct.pack('<B', 4))  # モードをトルク制御に設定
print("✅ トルク制御モードの設定に成功しました")
print(f"Current mode: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)


slaver.sdo_write(0x6060, 0, struct.pack('<B', 6))  # モードをホーミングに設定
print("✅ ホーミングモードの設定に成功しました")
print(f"Current mode: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)


slaver.sdo_write(0x6060, 0, struct.pack('<B', 7))  # モードを補間位置モードに設定
print("✅ 補間位置モードの設定に成功しました")
print(f"Current mode: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)


slaver.sdo_write(0x6060, 0, struct.pack('<B', 8))  # モードを周期同期位置モードに設定
print("✅ 周期同期位置モードの設定に成功しました")
print(f"Current mode: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)


slaver.sdo_write(0x6060, 0, struct.pack('<B', 0))  # モードをモードなしに設定
print("✅ モードなしの設定に成功しました")
print(f"Current mode: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)


# 制御設定に必要なパラメータを設定
slaver.sdo_write(0x607F, 0, struct.pack('<I', 1000000))  # 最大位置範囲
print(f"Position range: {slaver.sdo_read(0x607F, 0)[0]}")
slaver.sdo_write(0x6081, 0, struct.pack('<I', 1000000))  # 最大速度
print(f"Maximum velocity: {slaver.sdo_read(0x6081, 0)[0]}")
slaver.sdo_write(0x6083, 0, struct.pack('<I', 1000))     # 最大加速度
print(f"Maximum acceleration: {slaver.sdo_read(0x6083, 0)[0]}")
print("✅ サーボパラメータの設定に成功しました")


# 受信PDOマッピング（1600h）を設定 - マスターからスレーブへ
slaver.sdo_write(0x1600, 0, struct.pack('<B', 0))  # 既存のマッピングをクリア
slaver.sdo_write(0x1600, 1, struct.pack('<I', 0x60400010))  # 制御ワード（6040h、16ビット）
slaver.sdo_write(0x1600, 2, struct.pack('<I', 0x607A0020))  # 目標位置（607Ah、32ビット）
slaver.sdo_write(0x1600, 0, struct.pack('<B', 2))  # マッピング数を設定

# 送信PDOマッピング（1A00h）を設定 - スレーブからマスターへ
slaver.sdo_write(0x1A00, 0, struct.pack('<B', 0))  # 既存のマッピングをクリア
slaver.sdo_write(0x1A00, 1, struct.pack('<I', 0x60410010))  # ステータスワード（6041h、16ビット）
slaver.sdo_write(0x1A00, 2, struct.pack('<I', 0x60640020))  # 実際の位置（6064h、32ビット）
slaver.sdo_write(0x1A00, 0, struct.pack('<B', 2))  # マッピング数を設定
print("✅ PDOマッピング設定が完了しました")

print(f"Slave state: {slaver.state}")

print("EtherCAT通信テストが完了しました")
```
</details>

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/python.png" />
</div>


:::info
Before running the Python script, you need to install the pysoem library:
```bash
pip3 install pysoem

# sudoでPythonサンプルを実行
sudo python3 ethercat_python.py
```

:::

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
