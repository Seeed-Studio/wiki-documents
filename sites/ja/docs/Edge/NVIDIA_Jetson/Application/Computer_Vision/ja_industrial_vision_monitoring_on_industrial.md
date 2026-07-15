---
description: YOLO 物体検出と VLM 行動解析を用いて、NVIDIA Jetson 上に産業用ビジョン監視デモをデプロイする
title: 産業向けビジョン監視
tags:
  - AI モデルデプロイ
  - YOLO
  - コンピュータビジョン
  - reComputer
  - 産業用
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110191.jpg
slug: /industrial_vision_monitoring_on_industrial
last_update:
  date: 07/14/2026
  author: HaoChen
createdAt: '2026-07-13'
updatedAt: '2026-07-14'
url: https://wiki.seeedstudio.com/ja/industrial_vision_monitoring_on_industrial/
---

# 産業向けビジョン監視

## はじめに

産業現場や作業現場の安全性は、現場で「今」何が起きているかを把握することにかかっています — 事後ではなくリアルタイムで把握する必要があります。カメラは至るところにありますが、多くのシステムはいまだに人手による映像確認に依存しています。**産業用ビジョン AI** はこのギャップを埋めます。作業員がいるか、必要な PPE が着用されているか、危険な行動がシーン内に現れていないかを検出し、そのうえでエッジ側で即座にアラートを発報します。

この Wiki では、Seeed 産業用 Jetson デバイス上に参照用の**産業安全監視デモ**をデプロイします。USB カメラの映像をブラウザへストリーミングし、**YOLO** が人と PPE を検出し、**VLM** が危険な行動を解析します。どちらのモデルファミリーも入れ替え可能であり、このリポジトリは特定のチェックポイントに固定されたものではなく、あくまで出発点です。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tr>
    <th>reComputer Industrial J4012</th>
    <th>reServer Industrial J4011</th>
  </tr>
  <tr>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110191.jpg" style={{width:400, height:'auto'}}/>
      </div>
    </td>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110248-reserver-industrial-j4011-first.jpg" style={{width:400, height:'auto'}}/>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div>
    </td>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div>
    </td>
  </tr>
</table>
</div>

**reComputer Industrial J4012** および **reServer Industrial J4011** 上で **JetPack 7.2** にて検証済みです。

## 概要

| レイヤー | 役割 |
| --- | --- |
| YOLO | 人物検出（緑のボックス）およびヘルメットやベスト未着用などの PPE 違反（赤いボックス） |
| VLM | シーンレベルの行動アラート — 携帯電話の使用、喫煙、転倒、火災／煙など |

ブラウザで `http://<jetson-ip>:8080` を開くと、ライブ WebRTC 映像、検出オーバーレイ、アラートフィードを確認できます。

## 対応ハードウェア

| 項目 | 構成 |
| --- | --- |
| **デバイス** | [reComputer Industrial](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html)、[reServer Industrial](https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html) |
| **検証済み** | reComputer Industrial J4012、reServer Industrial J4011 · **JetPack 7.2** (L4T 39.2.0) |
| **JetPack** | **7.2** で検証済み · **6.2** は互換性がある想定 · 6.2 未満では手動で PyTorch ホイールが必要 |
| **RAM / ディスク** | RAM 最低 8 GB · 空きディスク 8 GB |
| **カメラ** | USB UVC / V4L2 (`/dev/video*`) |

:::note
**reComputer Industrial J4012** および **reServer Industrial J4011** 上で **JetPack 7.2** にてテスト済みです。同じ手順は、JetPack バージョンが一致している他の Seeed 産業用 Jetson デバイスにも適用できます。
:::

## インストール

リポジトリをクローンし、**対象の Jetson** 上でワンクリックスクリプトを実行します：

```bash
git clone https://github.com/xbs0325/industrial-inspection.git
cd industrial-inspection
./run.sh
```

`./run.sh` は `.env` がなければコピーし、モデルをダウンロードし、Docker イメージをビルドします（初回は **15～30 分**）。その後コンテナを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_run.png" style={{width:1000, height:'auto'}}/></div>

その後、次を開きます：

```text
http://<jetson-ip>:8080
```

:::note
アプリケーションはすべて Docker 内で動作するため、デフォルトのワークフローではホスト側で Python を手動セットアップする必要はありません。
:::

### JetPack に関する注意

| JetPack | PyTorch |
| --- | --- |
| **7.2** | Docker ビルド中に自動インストールされます（`TORCH_INDEX_URL=cu130`） |
| **6.2** | `TORCH_INDEX_URL` を使用中の CUDA 12.x のインデックスに設定するか、対応するホイールを `wheels/` に配置します |
| **6.2 未満** | `./run.sh` 実行前に、Jetson に対応した `torch-*.whl` / `torchvision-*.whl` を `wheels/` に配置します |

JetPack 関連ファイルを変更した後は、対象デバイス上で再ビルドしてください：

```bash
./clean.sh && ./run.sh
```

ホイールの入手元については、[Install Pytorch for reComputer Jetson](https://wiki.seeedstudio.com/ja/install_torch_on_recomputer/) を参照してください。

:::caution
JetPack や CUDA のバージョンが異なるデバイス間で Docker イメージをコピーしないでください。必ず対象の Jetson 上で再ビルドしてください。
:::

### 任意の `.env` 調整

```bash
CAMERA_PIPELINE=sw    # sw (default) or hw
```

## デモ結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_ui_cn.png" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_ui_en.png" style={{width:900, height:'auto'}}/></div>

カメラストリーム開始前のアイドル状態の UI。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_phone.png" style={{width:900, height:'auto'}}/></div>

VLM による行動アラート — 作業エリアでの携帯電話の使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_no_helmet.png" style={{width:900, height:'auto'}}/></div>

YOLO による PPE アラート — 安全ヘルメット未着用。

## このデモで使用しているモデル

デフォルトリリースには、以下のチェックポイントが同梱されています。リポジトリの設定と `models/` ディレクトリを更新することで、他の YOLO や VLM モデルに置き換えることができます。

| 役割 | デフォルトモデル | ファイル |
| --- | --- | --- |
| 人物検出 | YOLOv8n | `models/yolov8n.onnx` |
| PPE 検出 | YOLOv8 PPE | `models/ppe-yolov8n.pt` |
| 行動解析 | SmolVLM-500M-Instruct | `models/SmolVLM-500M-Instruct/` |

モデルは初回の `./run.sh` 実行時に自動ダウンロードされるか、`./scripts/download_models.sh` で手動ダウンロードできます。

## 停止とクリーンアップ

```bash
./clean.sh              # stop containers and remove local image
./clean.sh --full       # also remove models/, data/, bin/go2rtc
```

## トラブルシューティング

| 問題 | 対処 |
| --- | --- |
| Docker permission denied | ユーザーを `docker` グループに追加するか、`sudo docker` を使用します |
| 初回ビルドが遅い | 正常です（15～30 分）。JetPack 6.2 以前では、ホイールを `wheels/` に配置してください |
| PyTorch / CUDA の不整合 | 対象 Jetson 上で再ビルドし、別の JetPack からのイメージを再利用しないでください |
| コンテナ内にカメラが見えない | ホスト上の `/dev/video*` を確認してください。`./run.sh` は検出したカメラを自動マウントします |
| ブラウザに映像が出ない | `docker ps` で `industrial-go2rtc` を確認し、ポート `1984` に到達できることを確認してください |

## リソース

- プロジェクト: https://github.com/xbs0325/industrial-inspection
- [Install Pytorch for reComputer Jetson](https://wiki.seeedstudio.com/ja/install_torch_on_recomputer/)


## 技術サポートと製品ディスカッション

Seeed Studio の製品をお選びいただきありがとうございます。技術サポートおよび製品に関するディスカッションには、以下のチャネルをご利用ください。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

