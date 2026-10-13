---
description: reCamera Pro の完全な BSP ソースパッケージをダウンロードし、検証して展開します。
title: ソースパッケージのダウンロードと展開
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_download
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/ja/recamera_pro_bsp_download/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# ソースパッケージのダウンロードと展開

アーカイブをこちらからダウンロードします: [recamera-pro-sdk-v1.0.10.tar.gz](https://seeedstudio88-my.sharepoint.com/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fyoujiang%5Fyu%5Fseeedstudio88%5Fonmicrosoft%5Fcom%2FDocuments%2FreCamera%2Frecamera%2Dpro%2Dsdk%2Dv1%2E0%2E10%2Etar%2Egz&parent=%2Fpersonal%2Fyoujiang%5Fyu%5Fseeedstudio88%5Fonmicrosoft%5Fcom%2FDocuments%2FreCamera&ga=1)。これは本ガイドで説明している完全な BSP ソースパッケージです。

## パッケージ情報

| 項目 | 値 |
| --- | --- |
| ファイル名 | `recamera-pro-sdk-v1.0.10.tar.gz` |
| アーカイブサイズ | 約 3.7 GB（3,928,456,385 バイト） |
| 展開後サイズ | 約 12 GB |
| トップレベルディレクトリ | `recamera-pro-sdk-v1.0.10/` |
| SHA-256 | `0c171f7a65ed87a7112f07eb0408b91b934f456af32d91608f961a4a21bced8a` |

> SHA-256 値は、この Wiki を執筆した時点で実際に配布しているアーカイブから算出したものです。`./build.sh save` で作成した再パッケージ済みアーカイブやバンドルではチェックサムが異なる場合があります。その場合は、リリース記録に記載されているチェックサムを使用してください。

## ホスト環境の要件

| 項目 | 要件 |
| --- | --- |
| オペレーティングシステム | 64-bit Ubuntu（20.04 以降を推奨） |
| CPU アーキテクチャ | x86_64 または aarch64 |
| ディスク容量 | SDK を配置するパーティションに少なくとも 20 GB の空き領域が必要。複数のビルド成果物を保持する場合は 100 GB 以上を推奨 |
| メモリ | 16 GB 以上を推奨。メディアおよびカーネルの並列ビルドでは多くのメモリを消費する可能性があります |
| ネットワーク | ツールと依存関係をダウンロードするため、最初に `setup_build_env.sh` を実行する際に必要 |

参考測定値: SDK 用パーティションが 937 GB（うち 242 GB 使用済み）のホストで、3.7 GB のアーカイブを 12 GB に展開するのに、24 コア並列の `pigz` を用いた場合は約 20 秒かかりました。システム標準のシングルスレッド `gzip` を使用すると、数倍の時間がかかる可能性があります。

## アーカイブの検証

```bash
sha256sum recamera-pro-sdk-v1.0.10.tar.gz
```

出力を上記のチェックサムと比較してください。一致しない場合、ダウンロードが途中で切れているか、再パッケージされている可能性があります。**その場合は先に進まないでください。**

## アーカイブの展開

並列展開には `pigz` の使用を推奨します:

```bash
sudo apt install -y pigz
tar -I "pigz -d -p 16" -xf recamera-pro-sdk-v1.0.10.tar.gz
```

または標準的なコマンドを使用します:

```bash
tar -xzf recamera-pro-sdk-v1.0.10.tar.gz
```

展開後、メインのエントリポイントが存在することを確認します。これらは `project/` へのシンボリックリンクです:

```bash
cd recamera-pro-sdk-v1.0.10
ls -l build.sh rkflash.sh readme_cn.txt setup_build_env.sh
```

期待される出力には次のようなものが含まれます:

```text
build.sh -> project/build.sh
rkflash.sh -> project/rkflash.sh
readme_cn.txt -> project/readme_cn.txt
```

## 重要な注意事項

- **このパッケージを Windows 上で展開またはコピーしないでください。** SDK はシンボリックリンク（`build.sh`、`.BoardConfig.mk`、および `docs/` 配下の PDF ショートカット）や実行権限（`build.sh`、`rkflash.sh`、および `tools/` 配下のバイナリ）に大きく依存しています。Windows のファイルシステムではこれらが失われる可能性があり、その結果ビルドエラーやコマンド欠落を引き起こします。同梱の `readme_en.txt` でもこの点が明記されています。
- パッケージを Windows と Linux 間で転送する必要がある場合は、tar アーカイブのまま保持して Linux 上で展開するか、`git` / `repo` を使用してチェックアウトしてください。
- インストールパスにはスペースや非 ASCII 文字を含めないでください。Buildroot や一部の Makefile はスペースを正しく扱えません。
- `noexec` マウントされたパーティション上でビルドしないでください。`tools/linux/Linux_Upgrade_Tool/upgrade_tool` などのバイナリには実行権限が必要です。
- 展開済み SDK には `.repo/` は **含まれていません**。これはソーススナップショットです。このパッケージには該当しないため、`readme_en.txt` に記載されている `repo sync` の手順は無視してください。

## 実行権限を失った場合の修復（リカバリ）

パーミッションを保持しない環境を経由してパッケージを転送した場合は、次を試してください:

```bash
cd recamera-pro-sdk-v1.0.10
chmod +x build.sh rkflash.sh setup_build_env.sh project/build.sh project/rkflash.sh
chmod +x tools/linux/Linux_Upgrade_Tool/upgrade_tool
find . -name "*.sh" -exec chmod +x {} \;
```

一度シンボリックリンクが失われると、`chmod` では復元できません。元の tar アーカイブを再度展開してください。

## 展開後の最初のステップ

```bash
./setup_build_env.sh --check     # Check only; report missing tools without changing anything
```

詳細については、[ビルド環境のセットアップ](/ja/recamera_pro_bsp_build_environment/) を参照してください。

## SDK バージョンのアップグレードまたは切り替え

- 各 SDK リリースは個別の tar アーカイブです。新しいバージョンは**別のディレクトリ**に展開し、バージョンを混在させないでください。
- `lunch` メニュー内のボード設定番号は、`project/cfg/` 配下のファイル名をソートして生成されるため、リリース間で変わる可能性があります。ドキュメントやスクリプトにはメニュー番号ではなく、完全な設定ファイル名を記録してください。
- アプリケーションを移行するには、`project/app/<your-directory>/` ディレクトリ全体を新しい SDK 内の同じ場所にコピーし、新しいボード設定で対応する `RK_APP_xxx=y` オプションを有効にしてください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>