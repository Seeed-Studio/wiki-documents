---
description: "SO-ARM101 Sim-to-Real VLA コース第 14 章 —— Jetson エッジデバイスのセットアップ：対象の選択、SDK Manager、フォースリカバリーモード、JetPack 7.2 のフラッシュ、ボードの検証。"
title: 第 14 章 - Jetson エッジデバイスのセットアップ
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Jetson
  - AGX Orin
  - AGX Thor
  - JetPack
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_14
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_14/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 4 · 第 14 章 · Deploy on Jetson</span>
    <h2>14. Jetson エッジデバイスのセットアップ</h2>
    <p>
      GR00T N1.7 TensorRT デプロイのための Jetson プラットフォーム準備：対象の
      選択、JetPack 7.2 のフラッシュ、ロボット接続前のボード検証。
    </p>
    <div className="hero-actions">
      <a href="#targets">対象</a>
      <a href="#host">ホスト PC</a>
      <a href="#recovery">フォースリカバリー</a>
      <a href="#flash">フラッシュ</a>
      <a href="#verify">検証</a>
    </div>
  </div>
</section>

## 14.1 サポート対象

<section id="targets" className="section-card">
  <div className="section-title">
    <span>Orin または Thor</span>
    <h2>14.1 サポート対象</h2>
  </div>

SO-ARM101 パイプラインの検証済みデプロイ対象：

| 対象 | 検証済みソフトウェアパス | 後続で使用する実行環境 |
|---|---|---|
| Jetson AGX Orin | JetPack 7.2 / L4T R39.2 | `.venv-jp72` と `scripts/deployment/orin_jp72/run_full_trt.sh` |
| Jetson AGX Thor | JetPack 7.2 / L4T R39.2 | `.venv` と `scripts/activate_thor.sh` |

:::caution エンジンは対象固有
TensorRT エンジンは GPU アーキテクチャに依存します。Orin と Thor は同じ
チェックポイントとデータセットを共有できますが、各対象は独自のエンジン
バンドルをビルドする必要があります（第 18 章）。
:::

</section>

## 14.2 ホスト PC の準備

<section id="host" className="section-card">
  <div className="section-title">
    <span>Ubuntu ホスト</span>
    <h2>14.2 ホスト PC の準備</h2>
  </div>

Ubuntu ホストを次の条件で用意します：

- SDK Manager と JetPack パッケージ用に 25 GB 以上の空き；
- 信頼できる USB Type-C データケーブル；
- 安定したネットワーク接続；
- 管理者権限。

公式ダウンロードページから NVIDIA SDK Manager をインストール：
[https://developer.nvidia.com/sdk-manager](https://developer.nvidia.com/sdk-manager)。

</section>

## 14.3 フォースリカバリーモードへ入る

<section id="recovery" className="section-card">
  <div className="section-title">
    <span>ボタン操作</span>
    <h2>14.3 フォースリカバリーモードへ入る</h2>
  </div>

### Jetson AGX Thor 開発キット

1. Jetson の電源を切る；
2. リカバリー用 USB Type-C ポートをホスト PC に接続；
3. Force Recovery ボタンを押し続ける；
4. 押したまま Reset を押して離す；
5. Force Recovery を離す；
6. SDK Manager が対象を検出したことを確認。

| マーク | ボタン |
|---|---|
| 11 | 電源 |
| 12 | Force Recovery |
| 13 | Reset |

### Jetson AGX Orin 開発キット

Orin キットはこの操作の**前に電源が入っている**必要があります。2 番
（Force Recovery）と 3 番（Reset）のボタンを使います：

1. 40 ピンヘッダーの隣にある 10 番 USB Type-C ポートを Ubuntu ホストに接続；
2. 電源を接続し、キットが起動していることを確認；
3. 2 番（Force Recovery）を押し続ける；
4. 押したまま 3 番（Reset）を押し続ける；
5. 両方のボタンを離す；
6. SDK Manager が Orin 対象を検出したことを確認。

| マーク | ボタンまたはポート |
|---|---|
| 1 | 電源ボタン |
| 2 | Force Recovery ボタン |
| 3 | Reset ボタン |
| 10 | フラッシュ用 USB Type-C ポート |

### 代替：電源オフのままリカバリーモードへ

1. キットの電源が切れていることを確認；
2. 2 番（Force Recovery）を押し続ける；
3. 電源を接続。電源 LED が点かない場合は 1 番（電源）を押して離す；
4. Force Recovery を離す；
5. SDK Manager の検出を確認。

参考：[NVIDIA Jetson AGX Orin ユーザーガイド —— Force Recovery モード](https://docs.nvidia.com/jetson/agx-orin-devkit/user-guide/latest/setup_bsp.html#hardware-setup)。

</section>

## 14.4 JetPack のインストール

<section id="flash" className="section-card">
  <div className="section-title">
    <span>SDK Manager</span>
    <h2>14.4 JetPack のインストール</h2>
  </div>

SDK Manager で：

1. 対象ハードウェアに **Jetson AGX Thor / Jetson AGX Orin** を選択；
2. **JetPack 7.2** を選択；
3. デプロイが ISO ワークフローを必要としない限り **Direct Flash** を使用；
4. 対象のインストールと初期 Ubuntu セットアップを完了。

リカバリーケーブルを外す前に、SDK Manager のウィザードを
**Installation completed successfully** まで進めてください。

</section>

## 14.5 Jetson の検証

<section id="verify" className="section-card">
  <div className="section-title">
    <span>デバイス上で</span>
    <h2>14.5 Jetson の検証</h2>
  </div>

対象機で次のコマンドを実行します：

```bash
tr -d '\0' < /proc/device-tree/model
cat /etc/nv_tegra_release
df -h /
free -h
```

次のことを確認します：

- 検出されたモデルが意図した Orin / Thor と一致；
- 期待する JetPack/L4T リリースが報告される；
- NVMe またはルートファイルシステムにチェックポイント、backbone、ONNX、
  TensorRT エンジン用の十分な空きがある；
- 再起動後にシステムが正常に起動する。

完全なローカル TensorRT ワークフロー用に約 45–50 GB を確保してください。

次の章：[第 15 章 —— ロボットハードウェアの接続](ja_Sim2Real_VLA_15.md)。

</section>

</div>