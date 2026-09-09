---
title: reCamera Pro GPIO ピン使用ガイド
description: この記事では、sysfs インターフェースを介して reCamera Pro 上の GPIO ピンをエクスポート、設定、使用する方法を説明し、ピン番号の計算式と Python コードのリファレンスを提供します。
keywords:
  - reCamera
  - reCamera Pro
  - GPIO
  - sysfs
  - Linux
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_gpio_guide
sku: 10003420
sidebar_position: 5
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: "2026-08-25"
updatedAt: "2026-08-25"
url: https://wiki.seeedstudio.com/ja/recamera_pro_gpio_guide/
---

# reCamera Pro GPIO ピン使用ガイド

## はじめに

この記事では、reCamera Pro 上で GPIO ピンを使用する方法について説明します。ピン番号の計算式を用いて目的の GPIO ピンを特定する方法、sysfs インターフェース経由でピンをエクスポートして方向とレベルを設定する方法、そして Python スクリプトを使用して GPIO 出力を制御したり入力レベルを読み取ったりする方法を学びます。

:::note
reCamera Pro では、外部に露出している汎用 GPIO は 2 本のみであり、その出力電圧は 12V〜21V（DC-IN 入力に依存）となるため、ほとんどのデバイスには適していません。しかし、拡張インターフェース上の UART または CAN ピンを汎用 GPIO として再設定することができます。これらのピンは標準的な 3.3V レベルを出力します。
:::

## GPIO ピンの位置を特定する

まず、以下の画像を参照して、必要な GPIO ピンの位置を確認します。

![拡張インターフェース図](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera-PRO_Expansion_CON.jpg)
![CAN ピン図](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/recamera_pro_can_gpio.jpg)

## ピン番号の計算式

GPIO ピン番号は、次の式を使って計算します。

```
GPIO bank × 32 + offset within bank
```

バンク内のオフセットは次のように計算します：`グループ番号 × 8 + グループ内ピン番号`。

例えば、**GPIO5_A2** の場合：

- バンク番号は 5
- バンク内オフセットは `0 × 8 + 2 = 2`

したがって、ピン番号は次のようになります：

```
5 × 32 + 2 = 162
```

バンク文字と番号の対応は次のとおりです：

| 文字 | 番号 |
| ------ | ------ |
| A      | 0      |
| B      | 1      |
| C      | 2      |
| D      | 3      |
| ...    | ...    |

## GPIO ピンのエクスポート

まず、デバイスのターミナルにアクセスする必要があります。次のいずれかの方法で実行できます。

1. SSH でデバイスに接続する
2. WebUI のターミナル機能を使用する

### GPIO sysfs インターフェースへ移動

```bash
cd /sys/class/gpio
```

### GPIO ピンをエクスポートする

```bash
echo 162 > export
```

### GPIO ピンの方向を設定する

ピンの方向は次の 2 つのモードをサポートします。

- 出力：`out`
- 入力：`in`（デフォルトモード）

```bash
echo out > direction
```

### GPIO ピンのレベルを設定する

レベルは次の 2 つの状態をサポートします。

- 高レベル：`1`
- 低レベル：`0`

```bash
echo 1 > value
```

## Python コードリファレンス

次の Python スクリプトは、GPIO ピンを制御して高レベルと低レベルを出力する方法を示しています。

```python
import os
import time

GPIO = 162  # The GPIO pin number calculated earlier

GPIO_PATH = f"/sys/class/gpio/gpio{GPIO}"

def write_file(path, value):
    with open(path, "w") as f:
        f.write(str(value))

# 1. Export the GPIO
if not os.path.exists(GPIO_PATH):
    write_file("/sys/class/gpio/export", GPIO)
    time.sleep(0.1)  # Wait for export to complete

# 2. Set to output mode (use 'in' for input mode)
write_file(f"{GPIO_PATH}/direction", "out")

# 3. Set high level
write_file(f"{GPIO_PATH}/value", 1)
time.sleep(1)

# 4. Set low level
write_file(f"{GPIO_PATH}/value", 0)
time.sleep(1)

# To read the pin level, you can use the following code:
# with open(f"/sys/class/gpio/gpio{GPIO}/value", "r") as f:
#     value = f.read().strip()
#     print(value)
```

## リソース

- [reCamera Pro 公式ドキュメント](https://wiki.seeedstudio.com/cn/recamera_pro_getting_started/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートオプションを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
