---
description: SenseCraft Model Assistant Getting Start with Seeed Studio XIAO ESP32S3.
title: SenseCraft Model Assistant with XIAO ESP32S3 (Sense)
keywords:
- esp32s3
- xiao
- tinyml
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_edgelab
last_update:
  date: 10/04/2023
  author: LynnL4
---

# SenseCraft Model Assistant Seeed Studio XIAO ESP32S3 入門ガイド

## はじめに
[SenseCraft Model Assistant](https://edgelab.readthedocs.io/en/latest/) は、組み込みAIに焦点を当てたオープンソースプロジェクトです。OpenMMLab の優秀なアルゴリズムを実世界のシナリオに最適化し、実装をよりユーザーフレンドリーにして、組み込みデバイスでより高速で正確な推論を実現しています。

## 必要なハードウェア
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio Round Display for XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- Type-C ケーブル

## 必要なソフトウェア
- ESP-IDF v4.4
- SenseCraft Model Assistant v0.1.0
- サンプルコード: [SenseCraft Model Assistant-example-esp32](https://github.com/Seeed-Studio/edgelab-example-esp32)

## インストール方法
### ESP-IDF のインストール

[ESP-IDF get started guide](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html) の手順に従って、ツールチェーンと ESP-IDF 自体をセットアップしてください。

次のステップでは、このインストールが成功し、[IDF 環境変数が設定されている](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html#step-4-set-up-the-environment-variables) ことを前提としています。具体的には：
* `IDF_PATH` 環境変数が設定されている
* `idf.py` と Xtensa-esp32 ツール（例：`xtensa-esp32-elf-gcc`）が `$PATH` にある

### サブモジュールの取得
プロジェクトのルートディレクトリに移動し、以下のコマンドを実行してサブモジュールを取得してください：

```
git clone https://github.com/Seeed-Studio/edgelab-example-esp32 && cd edgelab-example-esp32
git submodule init
git submodule update
```

## 使用方法
### サンプルのビルド

サンプルディレクトリ（`examples/<example_name>`）に移動し、サンプルをビルドしてください。

IDF_TARGET を設定します（ESP32-S3 ターゲットの場合、IDF バージョン `release/v4.4` が必要です）

```
idf.py set-target esp32s3
```

サンプルを設定します

```
idf.py menuconfig
```

- `Component config` -> `SenseCraft Model Assistant Configuration` -> `Camera Configuration` -> `Select Camera Pinout` でカメラモジュールを選択してください
![img](https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-camera.png)
- `Component config` -> `SenseCraft Model Assistant Configuration` -> `LCD Configuration` -> `Select LCD Pinout` で LCD モジュールを選択してください
![img](https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-lcd.png)


ビルドするには、以下を実行してください：

```
idf.py build
```


### サンプルの読み込みと実行

フラッシュするには（`/dev/ttyUSB0` をデバイスのシリアルポートに置き換えてください）：
```
idf.py --port /dev/ttyUSB0 flash
```

シリアル出力をモニターします：
```
idf.py --port /dev/ttyUSB0 monitor
```


## 技術サポート & 製品ディスカッション


私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>