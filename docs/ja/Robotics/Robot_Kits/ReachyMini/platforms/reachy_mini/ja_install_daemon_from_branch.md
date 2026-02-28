---
description: 新機能やバグ修正をテストするために、特定の GitHub ブランチから Reachy Mini デーモンをインストールする開発者向けガイドです。
title: 特定ブランチから Daemon をインストールする
slug: /ja/reachymini_platforms_reachy_mini_install_daemon_from_branch
keywords:
- daemon
- branch
- install
- testing
- development
- ssh
- git
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# 特定のブランチから Daemon をインストールする

:::warning 開発者およびテスター専用
このガイドでは、公式リリース前の特定の GitHub ブランチから Reachy Mini デーモンをインストールする方法を説明します。新機能やバグ修正をテストする目的で使用してください。
:::

:::tip
v1.3.0 以降では、Web ダッシュボードの _Settings → Reachy Mini Update_ からブランチを直接インストールできます。
:::

## 前提条件

* Reachy Mini ロボットへの SSH アクセス（`pollen@reachy-mini.local`、パスワード: `root`）
* ロボットがあなたの Wi-Fi ネットワークに接続されていること（またはホットスポット経由でアクセス可能であること）

## オプション A: ローカル開発セットアップ

:::info
このオプションは、アクティブな開発と高速なデバッグサイクルを目的としています。システム全体のインストールに影響を与えることなく、安全に変更をテストできます。

このオプションではダッシュボードアプリのインストールは避けてください。ローカルの `reachy_mini` バージョンに対する変更は正しく反映されません。
:::

### 手順:

**ステップ 1:** SSH でロボットに接続します:
```bash
ssh pollen@reachy-mini.local
# Password: root
```

**ステップ 2:** 特定のブランチで Reachy Mini リポジトリをクローンします:
```bash
git clone -b <branch-name> https://github.com/pollen-robotics/reachy_mini.git
cd reachy_mini
```

**ステップ 3:** 仮想環境をセットアップします:
```bash
uv venv --python /venvs/mini_daemon/bin/python .venv
source .venv/bin/activate
uv sync --extra gstreamer --extra wireless-version
```

**ステップ 4:** システムのデーモンサービスを停止します:
```bash
sudo systemctl stop reachy-mini-daemon
```

:::tip
このステップは、再起動のたびに繰り返す必要があります。システムサービスは自動的に再起動されるためです。
:::

**ステップ 5:** テスト用にローカルデーモンを起動します:
```bash
reachy-mini-daemon --wireless-version
```

これで `~/reachy_mini` 内のコードを変更し、システムインストールに影響を与えることなく変更をテストできます。

## オプション B: システム全体へのカスタムインストール

:::info
このオプションでは、reachy-mini のブランチビルドをシステム全体のデーモンとしてインストールします。エンドツーエンドの徹底的なテストに適しており、ダッシュボードからのアプリのシームレスなインストールもサポートします。
:::

### 手順:

**ステップ 1:** SSH でロボットに接続します:
```bash
ssh pollen@reachy-mini.local
# Password: root
```

**ステップ 2:** デーモンの仮想環境を有効化します:
```bash
source /venvs/mini_daemon/bin/activate
```

**ステップ 3:** 特定のブランチをインストールします:
```bash
pip install --no-cache-dir --force-reinstall \
  "reachy_mini[gstreamer,wireless-version] @ git+https://github.com/pollen-robotics/reachy_mini.git@<branch-name>"
```
`<branch-name>` をテストしたいブランチ名に置き換えます（例: `develop`、`feature/my-feature`、`bugfix/issue-123`）。

:::note
ここでは `uv` ではなく `pip` を使用する必要があります。`uv pip install` は [`git lfs` と正しく動作しないためです](https://github.com/astral-sh/uv/issues/3312)。
:::

**ステップ 4:**（バージョン ≤ 1.2.13 のみ）`/venvs/apps_venv` を使ってステップ 2 と 3 を繰り返します。

**ステップ 5:** デーモンサービスを再起動します:
```bash
sudo systemctl restart reachy-mini-daemon
```

**ステップ 6:** インストールが正常に完了したか確認します:
```bash
pip show reachy-mini | grep Version
```
インストールしたブランチに対応するバージョンが表示されるはずです。

## 工場出荷時バージョンへのロールバック

ブランチのインストールで問題が発生した場合は、工場出荷時のデーモンを復元できます:

:::info ロールバック
**ステップ 1:** 元の工場出荷時デーモンを再インストールするために、Bluetooth 経由で **SOFTWARE_RESET コマンド** をトリガーします

**ステップ 2:** 詳細な手順については、[リセットガイド](./reset.md) を参照してください
:::

## 重要な注意事項

:::warning
* 異なるブランチインストール間を切り替える前に、**作業内容をバックアップ** してください
* システム全体へのインストールを行う前に、ローカル開発モードで**十分にテスト**してください
* インストール後は、次のコマンドで**システムログを監視**してください: `journalctl -u reachy-mini-daemon -f`
* **パフォーマンスへの影響:** 一部の開発ブランチでは、パフォーマンスや安定性が低下する場合があります
:::
