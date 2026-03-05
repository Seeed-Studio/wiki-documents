---
description: reComputer Rugged J40 入門ガイド
title: reComputer Rugged J40 入門ガイド
keywords:
  - reComputer Rugged
  - IP66
  - Jetson
  - 入門ガイド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_recomputer_rugged_j40_getting_started
sku: 100046979,100002634
last_update:
  date: 03/04/2026
  author: Dayu
---

# reComputer Rugged J40 入門ガイド

:::note
この製品は現在開発中です。仕様および提供状況は予告なく変更される場合があります。
:::

<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png"/>
</div>

reComputer Rugged J40 は、NVIDIA Jetson Orin NX/Nano モジュールを搭載した IP66 対応のファンレスエッジ AI コンピュータです。船舶、車載、産業用途などの過酷な屋外環境向けに設計されており、完全防水の M12 コネクタを備えたコンパクトなパッシブ冷却筐体で、最大 100 TOPS の AI 性能を発揮します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>今すぐ入手 🖱️</font></span></strong>
  </a>
</div>

## 特長

- **IP66 防水**：すべての外部インターフェースに M12 防水コネクタを採用した完全密閉筐体
- **ファンレスパッシブ冷却**：0.7 m/s の気流条件で -20°C ～ +60°C の範囲で静音動作
- **堅牢・耐振動**：3 Grms @ 5–500 Hz、1 時間/軸 — 車載および船舶用途に適合
- **豊富な産業用 I/O**：CAN-FD（アイソレート）、RS-232/422/485、DI/DO、すべて M12 A コードコネクタ経由
- **柔軟なネットワーキング**：4× PoE GbE + 1× GbE（M12）、M.2 Key E（Wi-Fi/BT）、M.2 Key B（5G/GPS）
- **広範囲電源入力**：M12 B/A コードコネクタ経由で 19–48 V DC 入力
- **各種認証**：CE、FCC、RoHS、REACH

## 仕様

<table>
  <thead>
    <tr>
      <th colSpan={2}>製品名</th>
      <th>reComputer Rugged J4012</th>
      <th>reComputer Rugged J3011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>SKU</td>
      <td>100046979</td>
      <td>100002634</td>
    </tr>
    <tr>
      <td colSpan={2}>NVIDIA Jetson モジュール</td>
      <td>Orin NX 16GB</td>
      <td>Orin Nano 8GB</td>
    </tr>
    <tr>
      <td rowSpan={4}>プロセッサシステム</td>
      <td>AI 性能</td>
      <td>100 TOPS</td>
      <td>40 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>1024 コア NVIDIA Ampere、32 Tensor コア</td>
      <td>1024 コア NVIDIA Ampere、32 Tensor コア</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 コア Arm Cortex-A78AE v8.2 64-bit、2MB L2 + 4MB L3</td>
      <td>6 コア Arm Cortex-A78AE v8.2 64-bit、1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>16GB 128-bit LPDDR5 @ 102.4 GB/s</td>
      <td>8GB 128-bit LPDDR5 @ 68 GB/s</td>
    </tr>
    <tr>
      <td rowSpan={2}>ストレージ</td>
      <td>eMMC</td>
      <td colSpan={2}>-</td>
    </tr>
    <tr>
      <td>拡張</td>
      <td colSpan={2}>M.2 Key M (2280) NVMe SSD — 128 GB 付属</td>
    </tr>
    <tr>
      <td rowSpan={8}>I/O</td>
      <td>Ethernet</td>
      <td colSpan={2}>4× GbE RJ45 PoE PSE (802.3af, M12 防水) + 1× GbE RJ45 (M12 防水)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={2}>4× USB 3.2 Type-A (M12 防水) + 1× USB 2.0/3.0 Type-C (フラッシュ用、防水キャップ付き) + 1× USB Type-C (デバッグ)</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan={2}>1× HDMI（防水キャップ付き）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={2}>2× CAN-FD（アイソレート、120 Ω）M12 A コード 8 ピン経由</td>
    </tr>
    <tr>
      <td>シリアル</td>
      <td colSpan={2}>1× RS-232/422/485 M12 A コード 8 ピン経由</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={2}>2× DI + 2× DO M12 12 ピン / 8 ピン経由</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={2}>1× Nano SIM カードスロット</td>
    </tr>
    <tr>
      <td>アンテナ</td>
      <td colSpan={2}>4× SMA 防水アンテナコネクタ</td>
    </tr>
    <tr>
      <td rowSpan={2}>拡張</td>
      <td>M.2 Key E</td>
      <td colSpan={2}>Wi-Fi / Bluetooth モジュール（オプション）</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={2}>5G / GPS モジュール（オプション）</td>
    </tr>
    <tr>
      <td rowSpan={2}>電源</td>
      <td>入力</td>
      <td colSpan={2}>M12 B/A コードコネクタ経由で 19–48 V DC</td>
    </tr>
    <tr>
      <td>消費電力</td>
      <td colSpan={2}>標準 25 W、ヒューズ 10 A</td>
    </tr>
    <tr>
      <td rowSpan={6}>環境</td>
      <td>保護等級</td>
      <td colSpan={2}>IP66</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td colSpan={2}>-20°C ～ +60°C（0.7 m/s の気流時）</td>
    </tr>
    <tr>
      <td>湿度</td>
      <td colSpan={2}>10～95% RH（結露なきこと）</td>
    </tr>
    <tr>
      <td>振動</td>
      <td colSpan={2}>3 Grms @ 5–500 Hz、ランダム、1 時間/軸</td>
    </tr>
    <tr>
      <td>寸法</td>
      <td colSpan={2}>210 mm × 190 mm × 93 mm</td>
    </tr>
    <tr>
      <td>色</td>
      <td colSpan={2}>シルバーグレー（ミッドフレーム：シルバー、ヒートシンク：ブラック）</td>
    </tr>
    <tr>
      <td colSpan={2}>認証</td>
      <td colSpan={2}>CE、FCC、RoHS、REACH</td>
    </tr>
    <tr>
      <td colSpan={2}>保証</td>
      <td colSpan={2}>2 年</td>
    </tr>
  </tbody>
</table>

## ハードウェア概要

:::note
ハードウェア概要の画像は、製品が最終確定次第追加されます。
:::

**LED インジケータ：**

| LED | 色 | 状態 | 説明 |
|-----|-------|--------|-------------|
| PWR | 緑 | On | デバイスに電源が供給されています |
| PWR | 緑 | Off | デバイスに電源が供給されていません |
| ACT | 緑 | Flashing | SSD アクセス動作中 |

## JetPack をフラッシュする

:::note
BSP が利用可能になり次第、フラッシュ手順を追加します。フラッシュ手順は他の reComputer J40 シリーズデバイスと同じ手順に従います。
:::

最新のフラッシュガイドについては、[Flash BSP with Jetpack to Selected Jetson](/ja/flash/jetpack_to_selected_product) ページを参照してください。

### 前提条件

- reComputer Rugged J40
- 電源（19～48 V DC）
- Ubuntu ホスト PC（20.04 または 22.04）
- USB Type-C データケーブル（フラッシュ用）
- 外部モニタ + HDMI ケーブル
- キーボードとマウス

### Force Recovery モードに入る

1. **DEVICE** ポートと Ubuntu ホスト PC の間を USB Type-C ケーブルで接続します。
2. ピンを使用して **REC**（Recovery）ボタンを押し続けます。
3. REC を押したまま、電源を接続してボードの電源を入れます。
4. Recovery ボタンを離します。

Ubuntu ホスト PC 上で、次のコマンドでリカバリモードを確認します：

```bash
lsusb
```

モジュールごとの想定出力：
- Orin NX 16GB: `0955:7323 NVidia Corp`
- Orin Nano 8GB: `0955:7523 NVidia Corp`

## リソース

- [reComputer Rugged J40 データシート](#) *(近日公開)*
- [Linux_for_Tegra ソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson デバイス比較](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
