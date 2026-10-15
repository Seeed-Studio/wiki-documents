---
description: Seeed Jetson での Weston コールドブート時に断続的に発生する EGL_NOT_INITIALIZED（R36.4.4 を搭載した reComputer Super J401 で確認済み）。2 つの DRM カード順序に関する症状、GNOME の推奨事項、およびフォローアップ用リンクについて説明します。
title: Weston のコールドブートが EGL_NOT_INITIALIZED で失敗する
tags:
  - JetPack
  - ディスプレイ
  - Weston
  - reComputer Super
keywords:
  - jetson
  - weston
  - EGL_NOT_INITIALIZED
  - tegra_drm
  - nvidia-drm
  - GNOME
  - JetPack 6
  - L4T R36
  - reComputer Super
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png
slug: /weston_egl_not_initialized_jetson_cold_boot
last_update:
  date: 08/17/2026
  author: haochen
createdAt: '2026-08-13'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/ja/weston_egl_not_initialized_jetson_cold_boot/
---

# Weston のコールドブートが EGL_NOT_INITIALIZED で失敗する

## はじめに

デフォルトのデスクトップを **Weston** に置き換えると、**コールドブート**後に**断続的に**失敗が発生する場合があります：

```text
failed to initialize display
EGL error state: EGL_NOT_INITIALIZED (0x3001)
```

**ウォームリブート**では成功することがあります。

このページでは、**確認済みの事例**と動作上の診断内容を記録し、同じログに遭遇した方が症状を照合しフォローアップできるようにします。これは、すべての Seeed Jetson イメージやすべての JetPack 6 のブートが影響を受けるという主張では**ありません**。

:::info 確認済みの事例
コンポジタとして Weston を使用し、Seeed の **R36.4.4**（JetPack 6.2）を書き込んだ **reComputer Super J401**（Jetson Orin Nano Super）。

同様の `card0` / `card1` の順序に関する Weston の問題は、他の **Jetson Orin + JetPack 6** 構成についても [NVIDIA Developer Forums](https://forums.developer.nvidia.com/) で議論されています。別の Seeed Orin 製品や L4T R36.x イメージで同じログが表示される場合、この FAQ は出発点として依然有効です — 下記の GitHub issue に詳細を追記してください。
:::

## 推奨デスクトップ

Weston が**不要な場合**は、Seeed Jetson イメージに同梱されている **GNOME** デスクトップを使用し続けてください。

これまでの報告は、（GDM を無効化したり、キオスク / サービス起動を使用したりした後の）コンポジタとしての **Weston** に関するものです。デフォルトの GNOME は、確認済みの事例で用いられた実用的な回避策です。

## 症状

確認されたログでは、次のようになっています：

- コールド電源投入時：Weston が `EGL_NOT_INITIALIZED` で失敗する。
- ソフト / ウォームリブート時：Weston が起動する場合がある。
- 失敗したブートでは、Weston が `/dev/dri/card0` を使用し、そのノードが `nvidia-drm` / `nv_platform` にバインドされており、`Cannot find any crtc or sizes` が出ることが多い。
- 成功したブートでは、Weston が `/dev/dri/card1` を使用し、もう一方のノードを `tegra_drm` が保持していることが多い。

失敗時ログの一例：

```text
using /dev/dri/card0
Loading module '.../gl-renderer.so'
failed to initialize display
EGL error state: EGL_NOT_INITIALIZED (0x3001)
```

## ログから分かること

[Linux_for_Tegra #50](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50) に対する Seeed BSP のレビューでは、Orin 上で `tegra_drm` と `nvidia-drm` の間に（どちらも DRM マイナーを登録できるため）**ロード順序の相互作用**があることが示唆されています。どちらのドライバが **minor 0**（`/dev/dri/card0`）を受け取るかについての保証は文書化されていません。

| Weston が失敗したときの観測結果 | Weston が起動したときの観測結果 |
| --- | --- |
| Weston は `/dev/dri/card0` を開き、そのノードは多くの場合 `nvidia-drm` / `nv_platform` である | Weston は `/dev/dri/card1` を開き、`tegra_drm` / host1x がもう一方のカードを保持していることが多い |

コールドブートとウォームブートではプローブタイミングが変化し、これが断続的な挙動と一致します。これはキャリアボードの書き込みエラーではなく、NVIDIA の **Weston-on-Tegra** スタックに属する問題です。NVIDIA はこの症状に対する専用の修正通知を公開していません。

## Weston をどうしても使う場合

1. 製品で本当に Weston が必要な場合を除き、**GNOME** を優先してください。
2. 残っている Weston の EGL/DRM 問題は **NVIDIA / アップストリーム側の課題**として扱い、Weston のログと `dmesg | grep -i drm` を添えて [NVIDIA Developer Forums](https://forums.developer.nvidia.com/) に投稿してください。
3. 失敗したブートと正常に動作したブートを比較するには：

```bash
# Which driver owns card0?
readlink -f /sys/class/drm/card0/device/driver
sudo udevadm info /dev/dri/card0
ls -l /dev/dri /dev/dri/by-path
sudo dmesg | grep -i drm
```

Seeed は DRM のプローブ順序を強制するサポート対象 BSP パッチを提供していません。`/dev/dri` ノード名の変更や独自の `modprobe` タイミングなど、コミュニティによる回避策はこの FAQ の**対象外**です。

別の SKU や L4T バージョンでこれを再現した場合は、ハードウェア、L4T/JetPack バージョン、および上記コマンドを添えて [Linux_for_Tegra #50](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50) にコメントしてください。

## リソース

- [Seeed Linux_for_Tegra #50 — Weston コールドブート時のディスプレイ / EGL_NOT_INITIALIZED](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50)
- [Wayland 起動時に modeset を有効化できない（AGX Orin, JP 6.0）](https://forums.developer.nvidia.com/t/cant-enable-modeset-on-boot-for-wayland/303843)
- [Weston キオスク / nvidia_drm のロード順序（Orin Nano Super）](https://forums.developer.nvidia.com/t/some-issues-i-found-trying-to-start-weston-automatically-in-a-kiosk-mode-using-systemd/348933)
- [NVIDIA Jetson Linux — Weston (Wayland) (R36.4)](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/SD/WindowingSystems/WestonWayland.html)
- [reComputer Super 入門ガイド](https://wiki.seeedstudio.com/ja/recomputer_jetson_super_getting_started/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
