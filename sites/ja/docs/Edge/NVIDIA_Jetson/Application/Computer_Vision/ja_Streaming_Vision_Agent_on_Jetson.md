---
description: デュアル Qwen3-VL-2B によるロールリングマルチモーダルメモリとライブ Ask UI を備えた Streaming Vision Agent を NVIDIA Jetson 上にデプロイする
title: Jetson 上の Streaming Vision Agent
tags:
  - AI モデルデプロイ
  - VLM
  - コンピュータビジョン
  - reComputer
  - Jetson
  - マルチモーダルメモリ
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/computer_vision.webp
sku: 100020039, 100094378
slug: /streaming_vision_agent_on_jetson
last_update:
  date: 08/03/2026
  author: HaoChen
updatedAt: '2026-08-03'
---

# Jetson 上の Streaming Vision Agent

## はじめに

多くの Jetson 向けビジョンデモは、**単一フレーム**検出（各フレームが独立）か、**短いオフラインクリップ**の理解（数秒の録画動画に対して一度だけ VLM を実行）で止まっています。どちらも連続するライブストリーム全体で状態を保持しないため、物体が視野から外れたあとやクリップが終わったあとには、証拠付きで「さっき何が起きたのか？」と尋ねることは通常できません。**Streaming Vision Agent** は、エッジ側で短い**オンラインロールリング**マルチモーダルメモリ（視覚埋め込み、エピソードイベント、セマンティックな事実）を保持し、カメラが動作し続けている間に、証拠となるフレームやクリップとともに質問に回答します。

この Wiki では Seeed の Jetson デバイス上（**reComputer Mini J5012 · JetPack 7.2** で検証）にリアルタイムデモをデプロイします。USB カメラがブラウザ UI に映像を供給し、2 つの独立した **Qwen3-VL-2B** インスタンスが認識と Ask を担当することで、回答処理がバックグラウンドのメモリ書き込みをブロックしないようにしています。

:::tip
この設計は、[WorldMM](https://worldmm.github.io)（CVPR 2026）のマルチモーダルメモリのアイデアに**着想を得ています**。このデモは Jetson 上の**オンラインロールリングウィンドウ**を対象としており、論文のオフライン EgoLife ベンチマークを再現するものではありません。[Inspiration & acknowledgments](#inspiration--acknowledgments) を参照してください。
:::

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

**JetPack 7.2**（L4T R39.2.0）を搭載した **reComputer Mini（Jetson AGX Orin 64GB）** で検証済みです。

## 概要

| レイヤー | 役割 |
| --- | --- |
| ビジュアルメモリ | VLM2Vec フレーム埋め込み + JPEG 証拠（約 5 秒ごと） |
| エピソードメモリ | Qwen3-VL-2B **#1** — 出現 / 移動 / 消失イベント（約 45 秒ごと） |
| セマンティックな事実 | エンティティ状態（`is_at` / `absent_from` / `usually_at`）+ タイムライン |
| Ask | メモリを検索 → Qwen3-VL-2B **#2** が軌跡 + 証拠付きで回答 |

ライブ映像、ロールリングメモリ、Ask のために `http://<jetson-ip>:8790` を開きます。

```text
Camera ──► visual @ ~5s (VLM2Vec)
       └──► episodic @ ~45s (Qwen3-VL-2B recognition)
Ask   ──► retrieve memory ──► Qwen3-VL-2B answer
```

## 対応ハードウェア

| 項目 | 構成 |
| --- | --- |
| **デバイス** | [reComputer J501 Mini](https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html) |
| **検証済み** | reComputer J501 Mini · **JetPack 7.2**（L4T 39.2.0） |
| **RAM / ディスク** | RAM 64 GB 推奨 · モデル + venv 用に空きディスク容量 50 GB 以上 |
| **カメラ** | USB UVC / V4L2（`/dev/video0`） |

## インストール

### 1. リポジトリをクローンする

```bash
git clone https://github.com/xbs0325/Streaming-Vision-Agent-Orin.git
cd Streaming-Vision-Agent-Orin
```

### 2. Jetson 用 Python 環境を作成する

```bash
bash script/jetson_setup.sh
```

デフォルトの venv パス: `~/leucus/.venv-worldmm`（`WORLDMM_VENV` で上書き可能）。

有効化して環境変数を設定します:

```bash
source "${WORLDMM_VENV:-$HOME/leucus/.venv-worldmm}/bin/activate"
export PYTHONPATH="$PWD/src:$PWD:$PYTHONPATH"
export WORLDMM_ATTN_IMPL=sdpa
export WORLDMM_QWEN_DEVICE_MAP=cuda:0
export WORLDMM_DTYPE=bfloat16
export WORLDMM_MODELS="${WORLDMM_MODELS:-$HOME/leucus/models/worldmm}"
export HF_HOME="$WORLDMM_MODELS/hf_home"
unset HF_ENDPOINT
```

:::caution
このスタックでは `HF_ENDPOINT=https://hf-mirror.com` を**設定しないでください** — `huggingface_hub` のダウンロードが失敗する可能性があります。
:::

### 3. モデルをダウンロードする

```bash
bash script/jetson_download_models.sh
```

| モデル | デフォルトの dual-2B ライブに必須か |
| --- | --- |
| Qwen3-VL-2B-Instruct | はい（認識 + Ask 用に**2 回**ロード） |
| Qwen3-Embedding-4B | はい |
| Qwen2-VL-2B-Instruct + VLM2Vec-V2.0 | はい（ビジュアルメモリ） |
| Qwen3-VL-8B-Instruct | オプション（`WORLDMM_DOWNLOAD_8B=1` または `--episodic-model 8b`） |

Qwen の重みは ModelScope 経由で、VLM2Vec は Hugging Face（`huggingface.co`）経由でダウンロードされます。初回ダウンロードにはネットワーク状況に応じて時間がかかる場合があります。

## ライブデモを実行する

USB カメラを接続し、次を実行します:

```bash
bash run.sh
# or:
python script/orin_live.py --ui-port 8790 --window-min 8 \
  --visual-interval 5 --episodic-interval 45
```

ブラウザで開きます:

```text
http://<jetson-ip>:8790/
```

デフォルトのランタイムは **dual 2B**（個別のモデルインスタンス、ロック、CUDA ストリーム）です。オプションフラグ:

| フラグ | 意味 |
| --- | --- |
| `--episodic-model 8b` | Qwen3-VL-8B によるより強力な認識 |
| `--shared-2b` | 1 つの 2B を両方の役割で共有（VRAM 削減; Ask が認識待ちになる） |
| `--window-min 10` | より長いロールリングメモリウィンドウ |

### スモークテスト（任意）

短時間のキャプチャ + パイプラインチェック:

```bash
python script/orin_smoke.py --vlm qwen3vl-2b --seconds 20 \
  --vlm2vec-base "$WORLDMM_MODELS/Qwen2-VL-2B-Instruct"
```

## デモ結果

Seeed のファイル CDN 上の短いクリップで、ロールリングメモリとライブ UI における Ask の回答の様子を示します。

<video src="https://files.seeedstudio.com/wiki/Jetson_AGX_Orin/streaming_vision_agent_demo_01.mp4" controls width="800"></video>

<video src="https://files.seeedstudio.com/wiki/Jetson_AGX_Orin/streaming_vision_agent_demo_02.mp4" controls width="800"></video>

<video src="https://files.seeedstudio.com/wiki/Jetson_AGX_Orin/streaming_vision_agent_demo_03.mp4" controls width="800"></video>

:::note
一部の Ask ターン（上のクリップと証拠サムネイルを参照）では、テキスト回答がある物体の名前を挙げている一方で、取得された証拠 JPEG / クリップにはロールリングウィンドウ内の**より前の時点**の**別の**物体が映っている場合があります。これは、短い dual-2B メモリデモでは想定される挙動です。検索が完全な同一性一致ではなく、最も近い視覚的証拠を紐付けることがあるためです。よりクリーンな結果を得るには、画面中央に 1 つの物体だけが映るようなインタラクションを推奨します。
:::

## 想定される表示

| シーン | 期待される動作 |
| --- | --- |
| 安定した机上ビュー | ライブフレーム + ステータスピル; エピソード / ビジュアルのカウンタが時間とともに増加 |
| 中央の視野に物体（例: イヤホンケース）を置く / 取り除く | 確認後にエピソードイベントが発生; Ask で「さっき置かれたものは何？」と質問可能 |
| 「What was just put down?」と尋ねる | 回答がタイムライン / 事実を引用し、必要に応じて JPEG またはクリップの証拠を提示 |

認識はセンターバイアスのトリガーと FULL + CENTER クロップパネルを使用し、画像端の手やマウスによるノイズを減らしています。

## このデモで使用しているモデル

| 役割 | デフォルトモデル |
| --- | --- |
| エピソード認識 | Qwen3-VL-2B-Instruct（インスタンス #1） |
| Ask / 回答 | Qwen3-VL-2B-Instruct（インスタンス #2） |
| テキスト埋め込み | Qwen3-Embedding-4B |
| ビジュアル埋め込み | Qwen2-VL-2B-Instruct + VLM2Vec-V2.0 LoRA |

## トラブルシューティング

| 問題 | 対処 |
| --- | --- |
| `/dev/video0` を開けない | `ls /dev/video*` を確認; `--device /dev/video1` を試す |
| `huggingface_hub` FileMetadataError | `unset HF_ENDPOINT`; hf-mirror の使用を避ける |
| Hub / transformers の競合 | `huggingface_hub>=0.34,<1` を維持（`jetson_setup.sh` で固定） |
| OOM / 非常に遅い | 他の重い GPU デモを同時に実行しない; `--shared-2b` や、より長い `--episodic-interval` を試す |
| Ask がブロックされているように感じる | `--shared-2b` を**使用していない**ことを確認; デフォルトの dual-2B では別ストリームで回答されるはずです |
| ポートが使用中 | `fuser -k 8790/tcp` を実行してから再起動 |

## リソース

- プロジェクト: https://github.com/xbs0325/Streaming-Vision-Agent-Orin

## インスピレーションと謝辞

このエッジデモは、長時間動画推論のための動的マルチモーダルメモリアジェントである **WorldMM**（CVPR 2026 Highlight）に着想を得ています。3 種類のメモリ（ビジュアル / エピソード / セマンティック）のアイデアを、Jetson 上のリアルタイムロールリングウィンドウに適用しています。

```bibtex
@inproceedings{yeo2026worldmm,
  title     = {WorldMM: Dynamic Multimodal Memory Agent for Long Video Reasoning},
  author    = {Yeo, Woongyeong and Kim, Kangsan and Yoon, Jaehong and Hwang, Sung Ju},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  month     = {June},
  year      = {2026},
  pages     = {25599-25609}
}
```

また、[HippoRAG](https://github.com/OSU-NLP-Group/HippoRAG)、[VLM2Vec](https://github.com/TIGER-AI-Lab/VLM2Vec)、および上流の [WorldMM](https://github.com/wgcyeo/WorldMM) 実装（Apache-2.0）にも感謝します。


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
