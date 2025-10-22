---
description: MCP ツールを使用した Grove 拡張のガイド
title: MCP による Grove の拡張
sidebar_position: 6
keywords:
- AI
- SenseCAP
- Watcher
- Agent
- IIC
- Model
- Context
- protocol
- Grove
- MCP
image: http://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /ja/extending_grove_with_mcp
last_update:
  date: 10/22/2025
  author: Twelve
---
# MCP による Grove の拡張

## 概要

この文書では、ESP32-S3 ベースの SenseCAP Watcher 開発ボード上の Grove インターフェースを介して DHT20 温湿度センサーを使用する方法について説明します。

## Grove インターフェース定義（J5）

ハードウェア回路図によると、Grove インターフェースは以下のピンを使用します：

| Grove ピン | 機能 | ESP32-S3 接続 |
|-----------|------|---------------|
| Pin 1     | VCC  | GROVE_3.3V（3.3V 電源） |
| Pin 2     | SDA  | GPIO47（I2C0_SDA） |
| Pin 3     | SCL  | GPIO48（I2C0_SCL） |
| Pin 4     | GND  | GND |

## DHT20 センサー

- I2C アドレス：0x38（固定、変更不可）
- 供給電圧：2.0V - 5.5V（3.3V を使用）
- 通信プロトコル：I2C（最大 400kHz）
- 測定範囲：
    - 温度：-40°C ～ +80°C（精度：±0.5°C）
    - 湿度：0% ～ 100% RH（精度：±3% RH）

## ファイル構造

### 元のコード：
- [Xiaozhi ファームウェアコードリポジトリ](https://github.com/Wvirgil123/xiaozhi-esp32/tree/main)

### 新しいファイル：

- [dht20.h](https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/dht20.h)
- [dht20.cc](https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/dht20.cc)

- 上記の 2 つのファイルを以下の場所に配置してください：

    - ファイルの場所
        ```text
        main/boards/sensecap-watcher/
        ├── dht20.h              # DHT20 driver header
        └── dht20.cc             # DHT20 driver implementation
        ```

### 変更されたファイル

- [sensecap_watcher.cc](https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/sensecap_watcher.cc)

- 上記のファイルを以下の場所で置き換えてください：

    - ファイルの場所
        ```text
        main/boards/sensecap-watcher/
        └── sensecap_watcher.cc  # Integrates DHT20 sensor and MCP tool
        ```

:::caution 注意
上記のサンプルコードは参考用です。特定のセンサーモデル、開発環境、ファームウェアバージョンに応じて変更し、適切な統合と正常なコンパイルを確保してください。
:::

## コア機能（DHT20 センサー）

### 1. センサー初期化
DHT20 ドライバーは完全な初期化プロセスを実装します：
    - ステップ1. センサーリセット：0xBA リセットコマンドを送信
    - ステップ2. システム設定：レジスタ 0xE1 に [0x08, 0x00] を書き込み
    - ステップ3. キャリブレーション確認：ステータスレジスタのビット[3]をチェックしてセンサーがキャリブレーションされていることを確認
    - ステップ4. 再試行メカニズム：キャリブレーションが失敗した場合、最大 5 回まで再試行
    ```cpp
    esp_err_t ret = dht20_sensor_->Initialize();
    if (ret == ESP_OK) {
        ESP_LOGI(TAG, "DHT20 initialized successfully");
    }
    ```

### 2. 温度・湿度読み取り
読み取りプロセス：
    - ステップ1. 測定トリガー：コマンド [0xAC, 0x33, 0x00] を送信
    - ステップ2. 測定待機：80ms 遅延
    - ステップ3. 8 バイト読み取り：[ステータス、湿度 High、Middle、Low | 温度 High、Middle、Low、CRC]
    - ステップ4. データ解析：
        - 湿度 = （20 ビット生値）× 100 / 2^20
        - 温度 = （20 ビット生値）× 200 / 2^20 - 50

    ```cpp
    float temperature, humidity;
    esp_err_t ret = dht20_sensor_->ReadTempAndHumidity(temperature, humidity);
    if (ret == ESP_OK) {
        printf("Temperature: %.2f°C, Humidity: %.2f%%\n", temperature, humidity);
    }
    ```
## コア機能（内部 MCP ツールインターフェース）

### 1. 機能説明

- ツール名：`self.grove.get_temperature_humidity`
- ツール用途：Grove 接続された DHT20 センサーから現在の温度と湿度を読み取り

### 2. 呼び出し例

AI は以下のように呼び出すことができます：

```cpp
result = call_tool("self.grove.get_temperature_humidity", {})
```

### 3. 戻り値形式

- 成功：
    ```cpp
    {
        "temperature": 25.32,
        "humidity": 65.47,
        "status": "ok"
    }
    ```

- 失敗：

    ```cpp
    {
        "error": "DHT20 sensor not initialized"
    }
    ```

    または

    ```cpp
    {
        "error": "Failed to read DHT20: ESP_ERR_TIMEOUT"
    }
    ```

### 4. I2C 通信プロトコル

    | 機能 | コマンド/レジスタ | データ |
    |-----|-----------|------|
    | センサーリセット | 0xBA | - |
    | 設定レジスタ | 0xE1 | [0x08, 0x00] |
    | 測定トリガー | - | [0xAC, 0x33, 0x00] |
    | ステータス読み取り | - | 1 バイト |
    | データ読み取り | - | 7 バイト |

### 5. ステータスバイト定義

    | ビット | 機能 | 値 |
    |---|-----|---|
    | bit[7] | 測定ステータス | 1=測定中、0=アイドル |
    | bit[6:4] | 予約済み | - |
    | bit[3] | キャリブレーションステータス | 1=キャリブレーション済み、0=未キャリブレーション |
    | bit[2:0] | 予約済み | - |

### 6. データ解析アルゴリズム

```cpp
// Humidity data (20 bits)
uint32_t humidity_raw = (data[1] << 12) | (data[2] << 4) | (data[3] >> 4);
float humidity = humidity_raw * 100.0f / 1048576.0f;

// Temperature data (20 bits)
uint32_t temperature_raw = ((data[3] & 0x0F) << 16) | (data[4] << 8) | data[5];
float temperature = temperature_raw * 200.0f / 1048576.0f - 50.0f;
```

## トラブルシューティング

### よくある問題

1. **センサー初期化失敗**
- 考えられる原因：
    - Grove インターフェースが正しく電源供給されていない
    - I2C 接続の問題
    - センサーが接続されていないか損傷している
- 解決策
    ```cpp
    uint32_t grove_power = esp_io_expander_get_level(io_exp_handle, BSP_PWR_GROVE);
    ESP_LOGI(TAG, "Grove power status: %d", grove_power);
    ```
2. **読み取りタイムアウト**
- 考えられる原因：
    - センサーがビジー状態
    - I2C バスの競合
- 解決策
    - 読み取り間隔を ≥1s に確保
    - I2C 上の他のデバイスを確認

3. **無効なデータ**
- 考えられる原因：
    - センサーがキャリブレーションされていない
    - CRC チェック失敗（現在のバージョンでは未実装）
- 解決策：
    - センサーを再初期化
    - CRC チェックの実装を検討（data[6]）

## 参考資料

- [DHT20 データシート](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/DHT20.pdf)
- [SenseCAP Watcher 回路図](https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher/tree/main/Hardware)
- [Grove インターフェース仕様](https://wiki.seeedstudio.com/ja/Grove_System/)

## メンテナンス

コードは `main/boards/sensecap-watcher/` に存在し、他のボードには影響しません。

## 技術サポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>