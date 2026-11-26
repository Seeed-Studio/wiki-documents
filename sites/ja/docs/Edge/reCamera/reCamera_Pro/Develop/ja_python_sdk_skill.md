---
description: reCamera Pro Python SDK Skill を AI コーディングエージェントと一緒にインストールして使用し、recamera_ext や Kit アプリの構築、RKNN モデル変換、パッケージング、App Center へのデプロイを行います。
title: Skill を使う
keywords:
  - reCamera
  - reCamera Pro
  - Python SDK
  - AI coding agent
  - Agent Skills
  - recamera_ext
  - Kit
  - RKNN
  - RV1126B
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_python_sdk_skill
sku: 10003420
sidebar_position: 4.5
last_update:
  date: '2026-11-25'
  author: Go
url: https://wiki.seeedstudio.com/ja/recamera_pro_python_sdk_skill/
createdAt: '2026-11-23'
updatedAt: '2026-11-25'
---

# Skill を使って reCamera Pro の Python アプリを開発する

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png" alt="reCamera Pro Python SDK Skill" /></div>

## はじめに

[reCamera Pro Python SDK Skill](https://github.com/Seeed-Studio/recamera-pro-ext-api/tree/main/skill/recamera-pysdk) は、reCamera Pro（RV1126B）向けの Python 拡張 SDK ワークフローを Agent Skill としてパッケージ化したものです。インストール後は、コーディングエージェントがアイデアを評価し、`recamera_ext` デモを書き、Kit アプリを構築し、ONNX モデルを変換し、アプリを検証・パッケージングし、SSH 経由でデプロイできます。

この Skill 自体はカメラ上では動作しません。生成されるアプリは、デバイス側の `recamera_ext`、`kit`、および App Center manifest v2 を使用します。

:::note
この Skill の対象は **RV1126B SoC と aarch64 Linux を搭載した reCamera Pro** です。SG2002/RISC-V ベースの reCamera 2002 向けでは **ありません**。ネイティブ C++ 開発には [reCamera Pro Development Skill](/ja/recamera_pro_development_cpp_skill/) を使用してください。
:::

## Skill でできること

- **リクエストを評価** し、直接 SDK、Kit、または公開 HTTP API のどのルートを使うか選択
- `FrameSource` と `ResultSink` を使った **直接 SDK デモの作成**
- モデル読み込み、前処理、検出後処理、ブラウザオーバーレイを備えた **Kit アプリの構築**
- ONNX から RKNN への **モデル変換**（INT8 キャリブレーションと数値比較付き）
- manifest とソースを検証し、App Center v2 の `.tar.gz` に **検証とパッケージング**
- SSH 経由での **デプロイと診断**：アップロード、インストール、検証、読み取り専用診断の実行

## 対応環境

| 項目 | 対応構成 |
| --- | --- |
| デバイス | Seeed reCamera Pro |
| SoC | Rockchip RV1126B |
| ターゲットアーキテクチャ | aarch64 Linux |
| デバイス Python | 3.11 |
| ランタイム SDK | `recamera_ext` 1.5.0 + `kit` |
| NPU ランタイム | RKNN Runtime 2.3.2 |
| アプリプラットフォームプロファイル | `rv1126b-linux-gnu-cp311-rknn232-v1` |
| 変換ホスト | Linux x86_64、Python 3.11、RKNN-Toolkit2 2.3.2 |
| 対応エージェント | Claude Code、Codex、その他 Agent Skills 対応エージェント |
| 非対応 | SG2002 / RISC-V / `.cvimodel` |

## Skill のインストール

この Skill は SDK リポジトリ内のフォルダであり、個別のインストーラはありません。リポジトリをクローンし、エージェントの skills ディレクトリにコピーします：

```bash
git clone --depth 1 https://github.com/Seeed-Studio/recamera-pro-ext-api.git
mkdir -p ~/.claude/skills
cp -r recamera-pro-ext-api/skill/recamera-pysdk ~/.claude/skills/recamera-pysdk
```

Codex は `~/.agents/skills/recamera-pysdk` を使用します。プロジェクト単位の開発には `.claude/skills/` を使用してください。`SKILL.md`、`references/`、`scripts/` を保持し、その後エージェントを再起動します。

## Skill を使う：フレームから App Center アプリまで

### 1. リクエストを記述する

```text
Use the recamera-pysdk skill to assess this idea: I want to read the camera
stream, run my own motion analysis, and draw the result on the preview. Tell me
whether it is supported, which layer to use, and what runtime preconditions apply.
```

エージェントは **Supported / Supported with preconditions / Not supported through this SDK** のいずれかと、API ルートおよび境界を返します。SDK はカメラのメディアパイプラインを所有しておらず、統一されたスピーカー再生 API も持たないため、非対応の動作は明示的に伝える必要があります。

### 2. 最小限のフレームキャプチャと結果注入

```python
import numpy as np
from recamera_ext import FrameSource, ResultSink

prev = None
with FrameSource() as src, ResultSink(source_id="motion") as sink:
    for frame in src:
        cur = frame.array                 # zero-copy NV12 Y plane view
        if prev is not None:
            diff = np.abs(cur.astype(np.int16) - prev.astype(np.int16))
            ys, xs = np.nonzero(diff > 25)
            if xs.size >= 800:
                h, w = cur.shape
                box = (xs.min()/w, ys.min()/h,
                       xs.max()/w, ys.max()/h, 0.9, "motion")
                sink.send_detections(pts_us=frame.pts_us, boxes=[box])
        prev = cur.copy()                 # the next frame overwrites this view
```

- `frame.array` は現在のイテレーション中のみ有効です。保存、キューイング、スレッド間共有を行う前に `.copy()` を呼び出してください
- `ResultSink` のボックスは正規化された `[0, 1]` です。ピクセル値のままだと 1 ピクセルの見えないボックスに潰れてしまいます
- 現在のプラットフォームでは拡張ソケットは root のみ使用可能なため、プロセスを root として実行してください

### 3. App Center アプリを構築する

```python
from kit.app import App, run_app
from kit.runtime.postprocess.detect import postprocess
from kit import events as E

class MyDetector(App):
    owns_loop = True
    model_frame = "hw-direct"
    model_dma_input = True

    def run(self):
        for frame in self.frames():
            x = self.pre(frame)
            outs = self.models.det.infer(x)
            dets = postprocess(outs, x.info,
                               conf_thres=self.conf, iou_thres=self.iou,
                               input_size=self._pre_size,
                               class_names=self.class_names)
            self.emit([E.detection(d) for d in dets],
                      frame.pts, results=dets)

if __name__ == "__main__":
    run_app(MyDetector())
```

`conf` と `iou` は manifest の `config_schema` から自動バインドされます。`infer()` は生の RKNN テンソルを返し、`postprocess` を通す必要があります。デバイス側の失敗の大半は、次の 3 つの manifest ルールが原因です：

- **NPU**：`npu.rknn: scheduled` を宣言し、すべての `models[].file` を `artifacts[]` 内でバンドルされた `rknn` として、その実際の `sha256` と `size` とともに列挙する
- **Entry**：`entry` はパッケージルート（例：`app.py`）に置き、モデルとラベルはその隣に配置すること。`Path(__file__).parents[...]` は使用しない
- **Overlay**：ブラウザのボックスには `output.contract_version: 2`、`output.sink: "ws"`、`results[].box` 由来の `box` フィールド、および `render.boxes` が必要

## コマンドリファレンス

ここでは一般的なエントリポイントのみを示します。すべてのオプションについては Skill の `SKILL.md` と `references/` を参照してください：

```bash
# Offline validation
python skill/recamera-pysdk/scripts/validate_app.py --app-dir ./my-detector --mode demo

# Package the App Center archive
python skill/recamera-pysdk/scripts/package_app.py --app-dir ./my-detector --out ./dist

# ONNX -> RKNN (INT8)
python skill/recamera-pysdk/scripts/convert_model.py convert \
  --onnx model.onnx --recipe recipe.json --out build/model \
  --quant i8 --dataset calibration/images.txt \
  --model-id my-detector --task detect

# Upload and install
python skill/recamera-pysdk/scripts/deploy_app.py \
  --archive dist/<app>.tar.gz --host <device-ip> --user root \
  --action install --report deploy-report.json
```

- [SKILL.md](https://github.com/Seeed-Studio/recamera-pro-ext-api/blob/main/skill/recamera-pysdk/SKILL.md)
- [API reference](https://github.com/Seeed-Studio/recamera-pro-ext-api/tree/main/skill/recamera-pysdk/references/api)

## 開発ワークフロー

1. リクエストがサポートされているか **評価** し、直接 SDK か Kit かを選択します。
2. 現在の `kit.app.App` の形、または直接の `recamera_ext` 呼び出しで **実装** します。
3. 明示的な前処理レシピを指定して、新しい ONNX モデルを RKNN に **変換** します。
4. `validate_app.py` でオフライン **検証** を行い、すべてのエラーを修正します。
5. manifest v2 の `.tar.gz` を **パッケージング** し、ロックを解放します。
6. 必要に応じて SSH 経由で **デプロイ** し、その後インストールと検証を行います。
7. 検証、インストール、ライフサイクル、タスク結果を個別に報告して **受け入れ** を行います。パッケージングの成功はデバイス上での成功を意味しません。

## トラブルシューティング

| 問題 | 想定される原因 | 対処方法 |
| --- | --- | --- |
| Skill が一覧に表示されない | エージェントが skills ディレクトリを再読み込みしていない | フォルダに `SKILL.md` が含まれていることを確認し、エージェントを再起動します |
| エージェントが C++/GStreamer を提案する | タスクがネイティブ Skill にルーティングされた | ターゲットが Python SDK / RV1126B であることを明示します |
| `rc_ext_frame_open failed` | ファームウェアにエンドポイントがない、またはプロセスが root ではない | `/run/recamera/` を確認し、root として実行します |
| プレビューにボックスが表示されない | output/render コントラクトが欠落しているか不整合 | `brokered`、`contract_version: 2`、`box`、`coord`、`render.boxes` を確認します |
| `inference authorization failed` | scheduled モデルにバンドルされた `rknn` アーティファクトがない | 対応する `sha256`、`size`、`file`、`mount` を追加します |
| Windows でパッケージングが失敗する | アーカイブメンバーにバックスラッシュが含まれている | POSIX ホスト上でビルドするか、リソースをパッケージルートに配置します |

## リソース

- [reCamera Pro Python SDK Skill](https://github.com/Seeed-Studio/recamera-pro-ext-api/tree/main/skill/recamera-pysdk)
- [reCamera Pro Extension API リポジトリ](https://github.com/Seeed-Studio/recamera-pro-ext-api)
- [reCamera Pro Development Skill (C++)](/ja/recamera_pro_development_cpp_skill/)
- [reCamera 2002 C/C++ Development](/ja/recamera_develop_with_c_cpp/)
- [reCamera Pro 製品ページ](https://www.seeedstudio.com/reCamera-Pro-2GB.html)

## Q&A

**Q: エージェントが recamera-pysdk Skill をインストール後に一覧表示しません。何を確認すべきですか？**

A: コピーしたフォルダの直下に `SKILL.md`、`references/`、`scripts/` が含まれていること（1 階層深くネストされていないこと）、そしてそれが正しい skills ディレクトリに置かれていることを確認してください。Claude Code なら `~/.claude/skills/`、Codex なら `~/.agents/skills/`、プロジェクト単位の利用なら `.claude/skills/` です。その後、エージェントを再起動して skills ディレクトリを再読み込みさせます。

**Q: アプリはデバイス上で動作していますが、ブラウザプレビューにボックスが表示されません。なぜですか？**

A: 多くの場合、output/render コントラクトが欠落しているか不整合です。manifest で `output.contract_version: 2` と `output.sink: "ws"` が設定されていること、検出結果に `results[].box` から取得した `box` フィールドが含まれていること、そして `render.boxes` が有効になっていることを確認してください。ボックスは `[0, 1]` に正規化されている必要があります。ピクセル値のままだと、見えない 1 ピクセルのボックスに潰れてしまいます。

**Q: デバイス上で `rc_ext_frame_open failed` や `inference authorization failed` が発生します。どう対処すればよいですか？**

A: `rc_ext_frame_open failed` の場合は、ファームウェアが `/run/recamera/` 配下にソケットを公開していることを確認し、プロセスを root 権限で実行してください。`inference authorization failed` の場合は、スケジュールされた RKNN モデルが、実際の `sha256`、`size`、`file`、`mount` を持つバンドルされた `rknn` として `artifacts[]` に列挙されている必要があります。

### ログのエクスポート

問題が解決しない場合は、reCamera Pro (RV1126B) からログを収集し、サポートに送信してください。`<device-ip>` をお使いのデバイスの IP アドレスに置き換えてください：

```bash
# Pack device logs (falls back to /var/log + dmesg if /userdata/log is absent)
ssh root@<device-ip> 'tar czf /tmp/recamera-pro-logs.tar.gz /var/log /userdata/log 2>/dev/null; dmesg > /tmp/recamera-pro-dmesg.log'

# Pull the archives back to your host
scp root@<device-ip>:/tmp/recamera-pro-logs.tar.gz .
scp root@<device-ip>:/tmp/recamera-pro-dmesg.log .
```

ログアーカイブ、問題の簡単な説明（何をしたか / 何が起きたか / 何を期待していたか）、およびハードウェアモデルとファームウェアバージョンを **techsupport@seeed.io** までメールでお送りください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなレベルのサポートを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
