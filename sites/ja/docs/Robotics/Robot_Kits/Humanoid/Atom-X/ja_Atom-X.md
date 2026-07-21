---
description: Atom-X の使用を開始する。
title: Atom-X 入門ガイド
keywords:
  - ヒューマノイド
  - ロボティクス
  - Atom X
  - XIAO ESP32-S3
  - サーボ
image: https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/atom_x_overview.webp
slug: /atom_x
last_update:
  date: 5/22/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/ja/atom_x/
createdAt: '2026-05-25'
updatedAt: '2026-05-25'
---

import Link from '@docusaurus/Link';

# Atom-X 入門ガイド
## はじめに
Atom X は、ロボティクス開発者、メイカー、教育機関向けに設計された、オープンソースの 17 自由度 (DOF) 二足歩行ヒューマノイドロボットキットです。ロボットは 17 個の Fashionstar RA8-U25H-M バスサーボモーターによって駆動され、完全 3D プリントのオープンソース構造を採用しています。Seeed Studio XIAO ESP32-S3 メインコントローラと Grove 拡張ボードを搭載し、工場出荷時に完全な制御ファームウェアがプリインストールされています。Web ビジュアルモーションエディタは、ブラウザベースのリアルタイムデバッグ、ティーチングプログラミング、および JSON エクスポートをサポートし、クロスプラットフォームでの二次開発を容易にします。付属の RUC-01 アダプタボードは、安定化電源供給と UART インターフェースを提供し、Bluetooth/Web リモートコントロールをサポートします。箱から出してすぐに使用でき、モーションアルゴリズムの検証やデスクトップロボット開発に最適なプラットフォームです。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/atom_x_overview.webp" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Atom-X-17-DOF-Open-Source-Robot-Kit-p-6712.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 1. 製品概要

- **DOF 構成**: 合計 17 DOF で、腕、胴体、脚の各関節をカバーします。
- **構造と外観**: 完全 3D プリント構造で、公式に公開された STP/STL モデルファイルにより、部品交換、構造補強、外装デザインの再設計が容易です。
- **関節アクチュエータ**: Fashionstar RA8-U25H-M バスサーボモーター × 17（配線を簡素化するバス通信に対応）。
- **Web ビジュアルモーションエディタ**: インストール不要のブラウザベース制御プラットフォームを提供し、リアルタイムのサーボデバッグとティーチングモードによるプログラミングをサポートします。完成したモーショングループは標準 `.json` 形式ファイルとしてエクスポートでき、Arduino、STM32、Raspberry Pi など各種メインコントローラによる解析と統合が容易です。
- **箱から出してすぐに使用可能**: Seeed Studio XIAO ESP32-S3 をメインコントローラとして事前に構成しており、工場出荷時のデモプログラムが提供されています。
- **マルチモジュール拡張**: Seeed Studio XIAO 拡張ボードと組み合わせることで、オンボード Grove インターフェースを介して Seeed Grove シリーズのセンサー／コントローラモジュールを接続できます。
- **エコシステム拡張性**: Seeed Studio XIAO 拡張ボード上の Grove インターフェースを通じて、ビジョン、環境認識などの Grove エコシステムの各種センサーおよび制御モジュールを迅速に統合できます。
- **クロスプラットフォーム互換性**: 開発のハードルを下げるため、5V/3.3V 電源出力と UART インターフェースを備えた RUC-01 アダプタボードを提供します。シリアルポート機能を持つ任意のコントローラが通信可能です。

## 2. 仕様

| パラメータ | 値 |
|---|---|
| 自由度 (DOF) | 17 |
| シャーシ | 3D プリント |
| サーボモーター | RA8-U25H-M バスサーボモーター |
| サーボ電源インターフェースボード | RUC-01 が 4 つのサーボインターフェース、5V/3.3V 制御ボード電源、シリアル通信インターフェース（Grove インターフェース）を提供 |
| メインコントローラ | Seeedstudio XIAO ESP32-S3 + Seeed Studio XIAO 拡張ボード |
| 通信プロトコル | 非同期シリアル通信 (UART) |
| 寸法 | 200×122×389 mm |

## 3. 同梱品一覧

| 品目 | 数量 |
| ---------------------- | ---- |
| 17-DOF ロボット組立品 | 1 |
| ねじ KM M2*7mm | 10 |
| ねじ KB M2*7mm | 10 |
| ねじ PM M3*6mm | 2 |
| サーボケーブル 200mm 3 ピン | 2 |

:::tip
**17-DOF ロボット組立品に含まれるもの**

- RA8-U25H-M × 17
- ロボット構造部品（セット）× 1
- RUC-01 アダプタボード × 1
- Seeed XIAO ESP32-S3 × 1
- Seeed XIAO 拡張ボード × 1
  :::

## 4. 外形寸法

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/dimensions.png" />
</div>




## 5. ハードウェアアーキテクチャ

### 駆動および電源管理（RUC-01 インターフェースボード）

ロボットの電源ハブとして機能する駆動および電源管理（RUC-01 インターフェースボード）モジュールは、バス通信管理と電源分配を担当します。

- **サーボ通信**: オンボードの 4 つのバスサーボインターフェース（デイジーチェーン拡張対応）により、17 個のバスサーボモーターへ信号と電力を供給します。
- **PC デバッグインターフェース**: USB Type-C ポートを内蔵し、PC ホストに直接接続してモーショングループの編集とデバッグが可能です。
- **システム電源供給**: 電圧変換を行い、メインコントローラボードへ安定した電源入力を提供します。
- **通信インターフェース**: 上位メインコントローラボードからの制御コマンドを受信する標準 UART シリアルポートを提供します。

### ロジックメインコントローラと拡張（MCU + Grove シールド）

ロボットの「頭脳」として機能するロジックメインコントローラと拡張（MCU + Grove シールド）は、制御アルゴリズムの実行とセンサーデータの処理を担当します。

- **コアコントローラ**: 小型ながら高性能な Seeed Studio XIAO シリーズ開発ボードを採用しています。
- **エコシステム拡張**: 豊富な汎用インターフェースを備えた Grove インターフェース拡張ボードと組み合わせて使用します。
- **主な機能**: ロボットの運動学プログラムを実行し、Grove インターフェースを通じて超音波、ビジョン、音声モジュールなど各種センサーにシームレスに接続し、複雑なインタラクティブ機能を実現します。

### データフローの説明

**デバッグ／編集モード（Debug Mode）**

```
PC --(USB)--> RUC-01 --(Bus)--> Servos
```

説明: PC ソフトウェアを介してサーボ角度を直接調整し、XIAO メインコントローラを経由せずにモーショングループを保存します。

**自律モード（Autonomous Mode）**

```
Sensor / Remote --(Signal)--> XIAO --(UART Command)--> RUC-01 --(Bus)--> Servos
```

説明: XIAO メインコントローラが、センサーからのフィードバックまたは事前に保存されたコードに基づいてロボットの動作を自律的に制御します。



## 6. 機械構造

- ロボット構造の表示とデフォルトのサーボ ID 番号割り当て

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/servo_id_layout.webp" />
</div>

- すべてのサーボモーターが 0 度のときのロボット姿勢
<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/zero_degree_pose.png" />
</div>


## 7. 図面およびモデルのダウンロード

完全な 3D プリント用データを入手するには、次のページをご覧ください: [MakerWorld - Atom X](https://makerworld.com/zh/models/2534886-atom-x-robot#profileId-2790112)

:::tip
今後、より充実した組立動画や図解マニュアルを順次提供していきます。本ページの更新をぜひチェックしてください。
:::


## 8. 接続ガイド

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/board_connection_diagram.webp" />
</div>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-x/internal_wiring.webp" />
</div>


## 9. 使用方法
:::tip
Atom-X の使用方法については Atom-S ユーザーマニュアルを参照してください。すべての操作は Atom-S と同一です。
:::

<div style={{textAlign: 'center'}}>
    <Link to="/atom_s#8-使用を開始する最初のデモ" style={{display: 'inline-block', width: '200px', height: '40px', lineHeight: '40px', backgroundColor: '#007bff', color: '#ffffff', textDecoration: 'none', borderRadius: '28px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center'}}>
        ▶ デモを開始
    </Link>
</div>

## FAQ

## Q1: Atom-X にはどのようなバッテリーを使用すべきですか？

A: XT60 コネクタ付きの 2S または 3S Li-Po バッテリーを推奨します。

## Q2: XIAO ESP32-S3 の代わりに他のメインコントローラボードを使用できますか？

A: 設計は XIAO ESP32-S3 に最適化されていますが、十分な GPIO を備えた任意の ESP32 開発ボードであれば、コードを変更することで対応可能です。

## Q3: ファームウェアはどのように更新しますか？

A: XIAO ESP32-S3 を USB でコンピュータに接続し、Arduino IDE または PlatformIO を使用して新しいプログラムを書き込みます。
