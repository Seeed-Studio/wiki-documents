---
description: SDK v1.0.10 ソーススナップショットに対する静的レビュー結果と検証状況。
title: ソースレビューと既知の問題
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - Reference
  - Documentation
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_source_notes
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/ja/recamera_pro_sdk_source_notes/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# ソースレビューと既知の問題

このページでは、SDK v1.0.10 の静的レビュー中に見つかり、ビルドまたは使用方法に影響する可能性がある項目を記録します。ハードウェア上での検証が明示されていない限り、指摘事項はソースコードの確認に基づくものであり、必ずしも実機で再現されたものではありません。

| 項目 | ソース位置 | 確認された指摘 | 影響と対応 |
| --- | --- | --- | --- |
| アプリ `install_to_userdata` のパッケージングパス | `project/build.sh`, `__PACKAGE_USERDATA()` | アプリディレクトリのチェックでは `userdata_app` を使用していますが、コピーコマンドは依然としてメディアパスから読み取っています。ソースで確認済み。 | userdata イメージ内にあるはずのファイルが、アプリの出力ディレクトリからコピーされない可能性があります。この機能が必要な場合は、最終的なイメージまたはデバイス上の内容を確認するか、起動時にファイルを作成／コピーしてください。 |
| `rkflash.sh update` ブランチ | `project/rkflash.sh` | 対応するブランチはコメントアウトされています。ソースで確認済み。 | `./rkflash.sh update` がアップデートを実行すると想定しないでください。[Flashing and Boot](/ja/recamera_pro_bsp_flash_boot/) に記載されたサポートされているコマンドを使用してください。 |
| `rkflash.sh all` における Env イメージ | `project/rkflash.sh` | `all` ブランチには `env.img` が含まれていません。ソースで確認済み。 | パーティションテーブルやブート環境を変更した後は、env イメージがフラッシュされ、有効になっているかを別途確認してください。 |
| `save` アーカイブディレクトリの大文字小文字 | `project/build.sh`, `build_save()`; ルート `quick_start_cn.md` | `build_save()` は `Image/...` パスを大文字に変換しますが、実際のディレクトリは `IMAGE/...` です。クイックスタートガイドも `IMAGE/` を使用しています。ソースで確認済み。 | 現在のスクリプトによって生成されるディレクトリ名を確認してください。Wiki における以前の `Image/` という記述は誤りでした。 |
| `sdkinfo` における SDK Version | `project/build.sh`, `build_get_sdk_version()` | バージョンは `.repo/manifest.xml` から取得されます。このソーススナップショットには `.repo/` が存在しないため、ビルドでは `NONE` が書き込まれる可能性があります。ソースで確認済み。 | `/etc/ota_version`、BoardConfig 名、ビルドアーカイブを合わせて確認してください。`sdkinfo` の SDK Version フィールドだけでリリースを特定しないでください。 |
| RTC コメントと UTC オプションの不一致 | `project/cfg/BoardConfig_Recamera2/overlay-buildroot-hwclock/etc/init.d/S20hwclock` | スクリプトのコメントと `hwclock --utc` が、異なる時間規約を示しているように見えます。ソースで確認済み。タイムゾーンの挙動はハードウェア検証が必要です。 | 時刻処理を変更する前に、タイムゾーン、RTC の規約、および再起動後の実際の時刻を確認してください。 |
| `recamera_services` のデフォルトクロスターゲット | `project/app/recamera_services/Makefile` | デフォルトターゲットは armv7 のように見えます。トップレベルのビルドがこれを上書きしているかどうかは、ビルドエントリポイントと照合する必要があります。静的な指摘であり、最終バイナリはまだ検証されていません。 | 手動ビルド後に出力に対して `file` を実行し、aarch64 をターゲットとしていることを確認してください。 |
| リリースノートのファイル名と自動検出 | `project/cfg/BoardConfig_Recamera2/` および `project/build.sh` 内の `build_info()` | 現在のリリースノートのファイル名は、スクリプトが検索する命名パターンと一致していません。また、ドキュメント自体も簡潔です。ソースで確認済み。 | リリース前に、アーカイブに正しい変更履歴が含まれていることを手動で確認してください。自動的な取り込みに依存しないでください。 |
| `recamera_onvif` と `recamera_utils` の README | 各アプリケーションディレクトリ | README ファイルは汎用テンプレートであり、このプロジェクト固有のビルド方法や使用方法を説明していません。ファイルを読んで確認済み。 | コンポーネントの挙動を理解するには、Makefile、ソースコード、および呼び出し元を確認してください。テンプレートの README をプロジェクトドキュメントとして扱わないでください。 |

## これらの指摘の読み方

- **ソースで確認済み (Confirmed in source):** 実装または設定が、引用されたソース内で直接確認できる状態です。まだ実機で動作させていない場合があります。
- **ハードウェア検証が必要 (Needs hardware verification):** 結果がハードウェア、ファームウェア、ランタイム設定、またはビルド成果物に依存しており、対象デバイス上で再現して確認する必要があります。
- パスや挙動は、この Wiki が対象とする v1.0.10 ソーススナップショットに関するものです。SDK をアップグレードした後は再確認し、これらの指摘をバージョンをまたいだ保証として扱わないでください。
- 必要に応じて SDK ソース内でこれらの問題を修正し、再ビルドしてください。このページは現在の挙動と影響を記録するものであり、修正を適用するものではありません。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>