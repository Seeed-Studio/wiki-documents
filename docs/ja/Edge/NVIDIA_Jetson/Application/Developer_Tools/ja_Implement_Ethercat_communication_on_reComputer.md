---
description: このwikiでは、リアルタイム産業自動化制御アプリケーション向けにreComputer JetsonでEtherCAT通信を実装する詳細な手順を提供します。
title: reComputerでEthercat通信を実装する
keywords:
- EtherCAT
- reComputer
- Jetson
- Real-time communication
- Industrial automation
- SOEM
- Robotics control
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
EtherCAT（Ethernet for Control Automation Technology）は、自動化、ロボティクス、モーションシステムにおけるリアルタイム自動化制御向けに設計された高性能なオープンソース産業用イーサネットプロトコルです。このwikiでは、reComputer JetsonシリーズでEtherCat通信を実行する方法を説明します。
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-with-GMSL-extension-board-p-6537.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
</a></div>

## 前提条件

- reComputer（Jetpack 6.2がプリインストール済み）
- イーサネットケーブル
- EtherCATスレーブデバイス

## リアルタイム性能の検証

EtherCAT通信を実装する前に、reComputerシステムが産業自動化のリアルタイム性能要件を満たしていることを確認することが重要です。

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
**リアルタイム性能分析:**
- 最大レイテンシ: 34マイクロ秒
- 平均レイテンシ: 2-6マイクロ秒  
- 6つのテストスレッドすべてが9-34マイクロ秒の範囲内で安定したレイテンシを示している
- システム負荷: 0.00
- レイテンシ分布は均一で一貫している

この性能は100マイクロ秒未満のハードリアルタイムアプリケーション要件を満たしており、ロボティクス制御や産業オートメーションアプリケーションに適している。
:::

## SOEMライブラリ概要

<div style={{ textAlign: "justify" }}>
SOEM（Simple Open EtherCAT Master）は軽量でオープンソースのEtherCATマスターライブラリで、開発者にリアルタイムEtherCAT通信を確立するためのポータブルで柔軟な方法を提供します。NVIDIA JetsonにはネイティブなEtherCATハードウェアインターフェースがありませんが、SOEMは標準ネットワークインターフェースを通じて生のEthernetフレームを使用して、完全にソフトウェアでEtherCAT通信を可能にします。
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

**ステップ1.** SOEMリポジトリをクローン

```bash
# Clone the SOEM library from GitHub
git clone https://github.com/OpenEtherCATsociety/SOEM
cd SOEM
```

**ステップ 2.** ビルドとインストール

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

**ステップ 2.** slaveinfoサンプルに移動し、検出プログラムを実行します：

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
**検証成功:**
出力に「slave found」が表示された場合、以下が確認されます：

- SOEMソフトウェアスタックが正常に動作している
- EtherCATスレーブデバイスが適切に接続されている
- 通信リンクが確立されている

:::

## 基本通信例

### C例

基本的なEtherCAT通信を実演する簡単なCプログラムを作成します：

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

# include "ethercat.h"

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
    char*ifname = "enP8p1s0";  // Network interface name

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

Makefileファイルを作成してこのプログラムをコンパイルします：
:::note
`SOEM_PATH`を自分のインストールパスに置き換えてください！
:::

<details>
<summary> Makefile </summary>

```Makefile
# Makefile for EtherCAT Communication Test with Local SOEM Library

# Compiler and flags
CC = gcc
CFLAGS = -Wall -Wextra -std=c99 -O2
LDFLAGS = -lrt -lpthread

# Local SOEM library paths
SOEM_PATH = /home/seeed/ethercat/SOEM
INCLUDES = -I$(SOEM_PATH)/build/install/include
LIBS = -L$(SOEM_PATH)/build -lsoem

# Target executables
TARGET_FULL = ethercat_communication_test
TARGET_SIMPLE = ethercat_simple_test

# Source files
SOURCES_FULL = ethercat_communication_test.c
SOURCES_SIMPLE = ethercat_simple_test.c

# Object files
OBJECTS_FULL = $(SOURCES_FULL:.c=.o)
OBJECTS_SIMPLE = $(SOURCES_SIMPLE:.c=.o)

# Default target
all: $(TARGET_SIMPLE)

# Build the simple version (recommended)
simple: $(TARGET_SIMPLE)

# Build the full version
full: $(TARGET_FULL)

# Build the simple executable
$(TARGET_SIMPLE): $(OBJECTS_SIMPLE)
 $(CC) $(OBJECTS_SIMPLE) -o $(TARGET_SIMPLE) $(LIBS) $(LDFLAGS)
 @echo "✅ Simple version build completed successfully!"
 @echo "Run with: sudo ./$(TARGET_SIMPLE)"

# Build the full executable
$(TARGET_FULL): $(OBJECTS_FULL)
 $(CC) $(OBJECTS_FULL) -o $(TARGET_FULL) $(LIBS) $(LDFLAGS)
 @echo "✅ Full version build completed successfully!"
 @echo "Run with: sudo ./$(TARGET_FULL)"

# Compile source files
%.o: %.c
 $(CC) $(CFLAGS) $(INCLUDES) -c $< -o $@

# Clean build files
clean:
 rm -f $(OBJECTS_FULL) $(OBJECTS_SIMPLE) $(TARGET_FULL) $(TARGET_SIMPLE)
 @echo "🧹 Cleaned build files"

# Check local SOEM installation
check-soem:
 @echo "Checking local SOEM installation..."
 @if [ -f "$(SOEM_PATH)/build/install/include/soem/soem.h" ]; then \
  echo "✅ SOEM headers found at $(SOEM_PATH)/build/install/include/soem/soem.h"; \
 else \
  echo "❌ SOEM headers not found"; \
 fi
 @if [ -f "$(SOEM_PATH)/build/libsoem.a" ]; then \
  echo "✅ SOEM library found at $(SOEM_PATH)/build/libsoem.a"; \
 else \
  echo "❌ SOEM library not found"; \
 fi

# Test compilation
test-compile: check-soem
 @echo "Testing compilation..."
 @make clean
 @make simple
 @echo "✅ Compilation test successful!"

# Manual compilation commands for reference
manual-compile:
 @echo "Manual compilation commands:"
 @echo "Simple version:"
 @echo "  gcc -Wall -Wextra -std=c99 -O2 \\"
 @echo "      -I$(SOEM_PATH)/build/install/include \\"
 @echo "      ethercat_simple_test.c \\"
 @echo "      -o ethercat_simple_test \\"
 @echo "      -L$(SOEM_PATH)/build -lsoem -lrt -lpthread"
 @echo ""
 @echo "Full version:"
 @echo "  gcc -Wall -Wextra -std=c99 -O2 \\"
 @echo "      -I$(SOEM_PATH)/build/install/include \\"
 @echo "      ethercat_communication_test.c \\"
 @echo "      -o ethercat_communication_test \\"
 @echo "      -L$(SOEM_PATH)/build -lsoem -lrt -lpthread"

# Help target
help:
 @echo "Available targets:"
 @echo "  all           - Build the simple version (default)"
 @echo "  simple        - Build the simple version"
 @echo "  full          - Build the full version"
 @echo "  clean         - Remove build files"
 @echo "  check-soem    - Check local SOEM installation"
 @echo "  test-compile  - Test compilation"
 @echo "  manual-compile - Show manual compilation commands"
 @echo "  help          - Show this help message"
 @echo ""
 @echo "Quick start:"
 @echo "  make          # Build the program"
 @echo "  sudo ./ethercat_simple_test  # Run the program"
 @echo ""
 @echo "SOEM library location: $(SOEM_PATH)"

```

</details>

プログラムをコンパイルして実行する：

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
上記のように、EtherCat通信が成功すると、スレーブステーションの駆動モードが変更され、スレーブステーションのステータス情報を正常に読み取ることができるようになります。
</div>

### Python例

Pythonベースのアプリケーションでは、pysoem ライブラリを使用できます：

<details>
<summary> conmunicate_test.py </summary>

```python
import pysoem
import time
import struct

# Initialize EtherCAT communication

# Network interface name

interface_name = "enP8p1s0"

# Create EtherCAT master object

master = pysoem.Master()

# Open EtherCAT master connection

master.open(interface_name)

# Initialize slaves

master.config_init()

slaver = master.slaves[0]

print(f"Found slave: {slaver.name}, state: {slaver.state}")

print("📡 Entering PRE-OP state (SDO communication allowed)...")

# Set master state to PREOP_STATE

master.state = pysoem.PREOP_STATE

# Write state to EtherCAT network

master.write_state()

# Check if entered successfully

if master.state == pysoem.PREOP_STATE:
    print("📡 Successfully entered PRE-OP state")
else:
    print("📡 Failed to enter PRE-OP state")

# Enter SAFE-OP state (safe PDO communication allowed)

master.state = pysoem.SAFEOP_STATE
master.write_state()

# Check if entered successfully

if master.state == pysoem.SAFEOP_STATE:
    print("📡 Successfully entered SAFE-OP state")
else:
    print("📡 Failed to enter SAFE-OP state")

# Enter OP state (full PDO communication allowed)

master.state = pysoem.OP_STATE
master.write_state()

# Check if entered successfully

if master.state == pysoem.OP_STATE:
    print("📡 Master successfully entered OP state")
else:
    print("📡 Failed to enter OP state")

# Switch between different control modes

slaver.sdo_write(0x6060, 0, struct.pack('<B', 1))  # Set mode to position control
print("✅ Successfully set position control mode")
print(f"Current mode: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)

slaver.sdo_write(0x6060, 0, struct.pack('<B', 3))  # Set mode to velocity control
print("✅ Successfully set velocity control mode")
print(f"Current mode: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)

slaver.sdo_write(0x6060, 0, struct.pack('<B', 4))  # Set mode to torque control
print("✅ Successfully set torque control mode")
print(f"Current mode: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)

slaver.sdo_write(0x6060, 0, struct.pack('<B', 6))  # Set mode to homing
print("✅ Successfully set homing mode")
print(f"Current mode: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)

slaver.sdo_write(0x6060, 0, struct.pack('<B', 7))  # Set mode to interpolated position mode
print("✅ Successfully set interpolated position mode")
print(f"Current mode: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)

slaver.sdo_write(0x6060, 0, struct.pack('<B', 8))  # Set mode to cyclic synchronous position mode
print("✅ Successfully set cyclic synchronous position mode")
print(f"Current mode: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)

slaver.sdo_write(0x6060, 0, struct.pack('<B', 0))  # Set mode to no mode
print("✅ Successfully set no mode")
print(f"Current mode: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)

# Set necessary parameters for control configuration

slaver.sdo_write(0x607F, 0, struct.pack('<I', 1000000))  # Maximum position range
print(f"Position range: {slaver.sdo_read[0x607F, 0](0)}")
slaver.sdo_write(0x6081, 0, struct.pack('<I', 1000000))  # Maximum velocity
print(f"Maximum velocity: {slaver.sdo_read[0x6081, 0](0)}")
slaver.sdo_write(0x6083, 0, struct.pack('<I', 1000))     # Maximum acceleration
print(f"Maximum acceleration: {slaver.sdo_read[0x6083, 0](0)}")
print("✅ Successfully set servo parameters")

# Configure receive PDO mapping (1600h) - Master to slave

slaver.sdo_write(0x1600, 0, struct.pack('<B', 0))  # Clear existing mapping
slaver.sdo_write(0x1600, 1, struct.pack('<I', 0x60400010))  # Control word (6040h, 16-bit)
slaver.sdo_write(0x1600, 2, struct.pack('<I', 0x607A0020))  # Target position (607Ah, 32-bit)
slaver.sdo_write(0x1600, 0, struct.pack('<B', 2))  # Set mapping count

# Configure transmit PDO mapping (1A00h) - Slave to master

slaver.sdo_write(0x1A00, 0, struct.pack('<B', 0))  # Clear existing mapping
slaver.sdo_write(0x1A00, 1, struct.pack('<I', 0x60410010))  # Status word (6041h, 16-bit)
slaver.sdo_write(0x1A00, 2, struct.pack('<I', 0x60640020))  # Actual position (6064h, 32-bit)
slaver.sdo_write(0x1A00, 0, struct.pack('<B', 2))  # Set mapping count
print("✅ PDO mapping configuration completed")

print(f"Slave state: {slaver.state}")

print("EtherCAT communication test completed")

```

</details>

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/python.png" />
</div>

:::info
Pythonスクリプトを実行する前に、pysoemライブラリをインストールする必要があります：

```bash
pip3 install pysoem

# Run Python example with sudo
sudo python3 ethercat_python.py
```

:::

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
