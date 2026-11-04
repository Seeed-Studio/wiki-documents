---
description: ビルド、フラッシュ、ブート、およびランタイムの症状に基づいてフルソースパッケージの問題を診断します。
title: BSP トラブルシューティング
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_troubleshooting
sku: 10003420
sidebar_position: 8
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/ja/recamera_pro_bsp_troubleshooting/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# BSP トラブルシューティング

一般的なルールは、**まずどのレイヤーで失敗しているかを特定すること**です。この SDK には 5 つのレイヤーがあり、それぞれデバッグ方法が異なります：

```text
1. Host environment     → setup_build_env.sh --check / ./build.sh check
2. Build                → build.sh logs, make info, help <component>
3. Images and flashing  → output/image/, upgrade_tool, serial console
4. System boot          → serial console at 1500000, init scripts, /var/log
5. Application/runtime  → /var/log/Recamera2_developer.log, processes, ports, configuration
```

## 1. 一般的な診断ツール

| コマンド | 目的 |
| --- | --- |
| `./build.sh check` | ホスト側のビルド依存関係を確認 |
| `./build.sh info` | 現在の BoardConfig、空でないすべての `RK_*` 変数、3 つのコンポーネント SDK の `make info`、および電源ドメインチェックを表示 |
| `./build.sh help <component>` | コンポーネントに対して実際に実行される `make` コマンドと引数を表示し、手動で再現できるようにする |
| `make -C project/app/<app> V=1` | アプリケーションビルドの詳細な出力を有効化 |
| `make V=1 -C media/samples` | メディアの詳細な出力を有効化（空でない `V` は `CMD_DBG=@` の静音モードを無効化） |
| `./build.sh DEBUG app` | `-O0 -g` で再ビルドし、パッケージング時の strip をスキップ |
| `./build.sh ASAN app` | AddressSanitizer 付きで再ビルドし、メモリ問題を調査 |
| デバイス上で `/bin/sdkinfo` | デバイス上で動作しているビルドと BoardConfig を特定 |
| デバイス上で `cat /etc/ota_version` | ファームウェアバージョンを確認 |

`build.sh` は `trap 'err_handler' ERR` を設定します。失敗時には、失敗した関数と行番号を表示します。ログ内で `err_handler` または `Error:` を検索すると、問題箇所を素早く特定できます。

## 2. ホスト環境とビルドの問題

| 症状 | 原因 | 解決策 |
| --- | --- | --- |
| `./build.sh --help` がボード選択メニューを開く | `lunch` が実行されていない。スクリプトは引数を解析する前に `.BoardConfig.mk` をチェックする | まず `./build.sh lunch` を実行し、その後に `help` / `--help` を実行する |
| `Not found tool aarch64-rockchip1240-linux-gnu-gcc, please install first !!!` | ツールチェーンディレクトリが存在しない、または実行不可 | `tools/linux/toolchain/aarch64-rockchip1240-linux-gnu/bin/` が存在することを確認し、必要に応じて `tools/linux/toolchain/<tc>/env_install_toolchain.sh` を source する |
| `*** error: Please Check Configure !!!` / `build app depend on media libs and header files` | メディアをビルドする前にアプリのビルドが開始された | 先に `./build.sh media` を実行し、`output/out/media_out/{include,lib}` が存在することを確認する |
| `Build rootfs is not yet complete, packaging cannot proceed!` | rootfs の tar アーカイブが生成されていない | `./build.sh rootfs` を実行し、`output/out/sysdrv_out/rootfs_glibc_rv1126b.tar` を確認する |
| どのアプリのビルドが失敗したのか分からない | `project/app/Makefile` は `$(foreach)` でアプリを直列にビルドし、最初の失敗で終了する | `make -C project/app/<app> V=1` でビルドを再現する |
| Rust アプリ（`recamera_services`）が armv7 バイナリを生成する | アプリの Makefile のデフォルトが `armv7-unknown-linux-gnueabihf` になっている | `make SERVICE_TARGET=aarch64-unknown-linux-gnu` を実行する |
| `cross` がエラーを報告する、またはハングする | Docker が停止している、またはユーザーが docker グループに属していない | `sudo systemctl start docker` を実行し、ログアウトして再ログインする |
| Node フロントエンドのビルドが失敗する | Node.js のバージョンが 18 未満 | `nvm use 18` を実行するか、`setup_build_env.sh` によってインストールされたバージョンを使用する |
| CMake のバージョンが古すぎる | `recamera_ipc` には CMake 3.21 以上が必要 | `setup_build_env.sh` によってインストールされた CMake を使用し、PATH の順序を確認する |
| protobuf 関連のビルドエラー | `libprotobuf-dev` / `protobuf-compiler` が不足している | `sudo apt install libprotobuf-dev protobuf-compiler` を実行する |
| ボードを切り替えた後に予期しないエラーが発生する | 古い設定と新しい設定の出力が混在している | `./build.sh clean` を実行してから再ビルドする |
| ディスクがいっぱい | Buildroot、カーネル、メディアの出力が大きい | 少なくとも 20 GB（推奨 100 GB）の空き容量を確保し、`du -sh output sysdrv/source/buildroot` で使用状況を特定する |
| root で一度ビルドした後にパーミッションの問題が発生する | ビルド出力の所有者が root になっている | `sudo chown -R $USER:$USER .` を実行してから再ビルドする |
| シンボリックリンクが欠落してスクリプトが正しく動作しない | Windows 経由でファイルを転送した | 元の tar アーカイブを再展開する。[Download and Extract](/ja/recamera_pro_bsp_download/) を参照 |

## 3. フラッシュの問題

| 症状 | 原因 | 解決策 |
| --- | --- | --- |
| `upgrade_tool ld` にデバイスが表示されない | Maskrom / Loader モードになっていない、udev ルールがない、sudo で実行していない | `88-rockusb.rules` をインストールし、`udevadm control --reload-rules && udevadm trigger` を実行；`lsusb` で `2207:` デバイスが表示されることを確認し、`sudo` を使用する |
| `upgrade_tool` 実行時に `Permission denied` が出る | 展開時に実行権限が失われた | `chmod +x tools/linux/Linux_Upgrade_Tool/upgrade_tool` を実行する |
| `./rkflash.sh update` が何もしない | スクリプト内で該当ブランチがコメントアウトされている | `sudo upgrade_tool uf output/image/update.img` を実行する |
| `./rkflash.sh all` 実行後にパーティションの挙動がおかしい | `all` は `env.img` をフラッシュしない | `upgrade_tool di -p output/image/env.img` を手動で実行する（または `parameter.txt` を使用） |
| `./build.sh sdcard_upgrade` が何も出力しない | Recamera2 ボード設定で `RK_SDCARD_UPGRADE_UBOOT_DEFCONFIG` が定義されておらず、`check_config` が無言で終了している | 必要な変数をボード設定に追加する。[System Customization (DTS / Kernel / Buildroot / Overlay)](/ja/recamera_pro_bsp_system_customization/) を参照 |
| フラッシュ中断後にデバイスが文鎮化した | Loader が完全に書き込まれていない | 強制的に Maskrom モードにし、`upgrade_tool ul download.bin` を実行してから再度フラッシュする |
| `Writing 'xxx' failed` | イメージサイズがパーティションサイズと一致しない | `boot.img` が 11 M 未満、`rootfs.img` が 3 G 未満であることを確認する |

## 4. ブートの問題

**シリアルコンソールだけが信頼できるチャネルです：** 1500000 8N1、`console=ttyFIQ0`。

| シリアルコンソールの症状 | 診断 | 解決策 |
| --- | --- | --- |
| まったく出力がない | Loader / DDR が起動していない、またはシリアル接続 / ボーレートが間違っている | ボーレート 1500000 を確認し、`idblock.img` と `download.bin` を再フラッシュし、シリアル TX 信号を測定する |
| U-Boot は表示されるがその後停止する | カーネルイメージまたは DTB の問題 | `boot.img` を再フラッシュし、`RK_KERNEL_DTS` を確認する |
| `Kernel panic - not syncing: VFS: Unable to mount root fs` | rootfs がブートと一致していない、または PARTUUID が変更された | 同じビルドからの `boot` と `rootfs` を使用し、パーティション変更後は env を再フラッシュする |
| シリアルに watchdog メッセージが出てリセットを繰り返す | ブロックされたプロセスが watchdog のリフレッシュ（`-T 30`）を妨げている | `S15watchdog` を停止して調査し、ハングしているプロセスがないか確認する |
| システムは起動するがネットワークがない | udhcpc スクリプトまたは DNS 優先度の問題 | [Device Access and Debugging](/ja/recamera_pro_bsp_device_debug/) のネットワークトラブルシューティングセクションを参照 |
| 時刻が数時間単位でずれている | コメントでは RTC がローカルタイムを保持すると書かれているのに、`S20hwclock` が `--hctosys --utc` を使用している | RTC が UTC かローカルタイムかを確認し、必要に応じてスクリプトを調整する |
| U-Boot は動作するが Linux に入れない | rootfs が破損している | `sudo ./rkflash.sh rootfs` で rootfs のみをフラッシュする |

ブートシーケンスは次で確認できます：

```bash
# ls /etc/init.d/ /oem/usr/etc/init.d/          # Available startup scripts
# dmesg | head -50                               # Early kernel logs
# cat /var/log/Recamera2_developer.log | head    # Application logs
# ps w                                             # Processes that actually started
```

## 5. ランタイムおよびアプリケーションの問題

### 共有ライブラリが見つからない

```bash
# ldd /userdata/my_app
```

- `librockit.so`、`librknnrt.so` などが見つからない → `LD_LIBRARY_PATH` に `/oem/usr/lib` が含まれていない。ログインシェルでは `/etc/profile.d/RkEnv.sh` を通じて設定されるが、非ログインコンテキスト（init スクリプト、cron）では、このファイルを source するか変数を明示的に export する必要がある。
- サードパーティライブラリが見つからない → rootfs にライブラリが含まれていない。Buildroot パッケージを有効にする。[System Customization (DTS / Kernel / Buildroot / Overlay)](/ja/recamera_pro_bsp_system_customization/) を参照。
- リンク時に `-Wl,-rpath,/oem/usr/lib` が必要になる場合もある。[Choose a Development Path](/ja/recamera_pro_dev_path/) を参照。

### アーキテクチャ / ABI の不一致

```bash
# file /userdata/my_app        # Must be ARM aarch64
```

`Exec format error` は、そのバイナリが x86-64 向けにビルドされていることを意味します。`GLIBC_2.xx not found` は、ホストのツールチェーンがターゲットデバイスのランタイムより新しいことを意味します。

### ビデオの問題

| 症状 | 原因 | 解決策 |
| --- | --- | --- |
| サンプルが VI を開けない / デバイスノードがビジー | `rkipc` がすでにデバイスを占有している | `sh /oem/usr/bin/RkLunch-stop.sh` を実行してから再試行し、終了後にサービスを復元する |
| 画像が真っ黒または緑一色になる | センサーが検出されていない、または IQ ファイルがない | `dmesg | grep -i [sensor]` を実行し、`/oem/usr/share/iqfiles/` を確認する |
| 色がおかしい、またはノイズがひどい | IQ ファイルがセンサーと一致していない | `RK_CAMERA_SENSOR_IQFILES` と実装されているセンサーを比較する |
| RTSP ストリームを受信できない | go2rtc で外部ポート 554 が有効になっていない | `/userdata/config/rkipc.ini` の `[video.0.rtsp] enable` を確認し、`S50go2rtc` を再起動する |
| Web UI では映像が見えるが外部プレーヤーでは見えない | go2rtc の API が 127.0.0.1 にバインドされている | `:8555` の WebRTC を使用するか、SSH 経由でポート `1984` をフォワードする |
| `/dev/videoN` の番号が変わった | ファームウェアバージョンによってデバイスの列挙順が異なる | デバイス上で `v4l2-ctl --list-devices` を実行して確認し、番号をハードコードしない |

Rockchip のビデオトラブルシューティングガイドについては、`docs/zh/media/Rockchip_Trouble_Shooting_Linux_VENC_CN.pdf` を参照してください。

### NPU / AI の問題

| 症状 | 原因 | 解決策 |
| --- | --- | --- |
| `rknn_init` が失敗する | モデルが rv1126b 向けに変換されていない、または Toolkit と Runtime のバージョンが一致していない | `target_platform='rv1126b'` で再変換し、ボード上の `librknnrt.so` バージョン（内部ベースライン 2.3.2）を確認する |
| 推論結果が完全におかしい | 前処理の不一致（mean/std、RGB/BGR、NCHW/NHWC、リサイズポリシー） | 当て推量ではなく、エクスポートスクリプトのパラメータを確認する |
| 結果が不正確 | INT8 キャリブレーションセットが代表性に欠ける | まず FP16 ベースラインを確立し、その後より良いキャリブレーションセットで再量子化する |
| OOM / プロセスが kill される | LLM / VLM がメモリを使い過ぎている | `rkllm_benchmark_demo` で `memory_usage` を確認し、より小さい量子化を試す |
| 推論が遅い | NPU コアが 1 つしか使われていない | `rknn_set_core_mask(ctx, RKNN_NPU_CORE_0_1)` を設定する |
| 長時間動作後に性能が低下する | サーマルスロットリング | サーマル状態を確認し、`docs/zh/bsp/Rockchip_Developer_Guide_Thermal_CN.pdf` を参照する |
| VLM の出力が文字化けしている、または期待と大きく異なる | Vision 用特殊トークンが一致していない | 実行時に `img_start` / `img_end` / `img_content` を渡す |

### オーディオの問題

[Audio Development](/ja/recamera_pro_audio_development/) の問題一覧表を参照してください。最も一般的な問題は、dsnoop を使用せずに `hw:0,0` を直接開いてしまい、その結果 `Device or resource busy` が発生することです。

### サービスとポート

```bash
# netstat -tlnp        # 22 / 7681 / 21 / 8555 / 1984 / 8765 / 554 / 5554
# ps w | grep -E 'rkipc|gmgr|skt2ws|tmir|rcisd|go2rtc|ttyd|notify'
# /etc/init.d/S49notify start|stop
# /oem/usr/etc/init.d/S50go2rtc restart
```

SSH が正しいパスワードを拒否する場合、PAM ロックアウトがトリガーされている可能性があります（5 回の失敗 / 300 秒）。状態ファイルは `/userdata/config/system/login_lock.json` であり、再起動するとクリアされます。

ttyd ページでユーザーが許可されていないと表示される場合、`ssh-login-whitelist.sh` の許可リストには `root` と `admin` のみが含まれています。

FTP で config ディレクトリが表示されない場合、`vsftpd.conf` の `hide_file` / `deny_file` によって意図的に隠されています。代わりに SFTP を使用してください。

### ログ

```bash
# tail -f /var/log/Recamera2_developer.log    # Human-readable
# tail -n 100 /var/log/Recamera2.log          # JSON for programmatic parsing
# dmesg                                        # Kernel logs
```

ポート 8765 上の WebSocket ライブログは 127.0.0.1 にバインドされています。ホストからは `ssh -L 8765:127.0.0.1:8765 root@<IP>` を使用します。

### メモリとパフォーマンス

カーネルにはデバッグノードが有効化されています。次のコマンドで確認できます：

```bash
# cat /proc/rk_cma/*        2>/dev/null      # CONFIG_RK_CMA_PROCFS
# cat /proc/rk_dmabuf/*     2>/dev/null      # CONFIG_RK_DMABUF_PROCFS
# cat /proc/rk_memblock/*   2>/dev/null      # CONFIG_RK_MEMBLOCK_PROCFS
# cat /proc/rk_rga/*        2>/dev/null      # CONFIG_ROCKCHIP_RGA_PROC_FS
# ls /sys/kernel/debug/                       # CONFIG_DEBUG_FS
```

正確なノード名はデバイスに依存し、まだハードウェア検証が必要です。`RK_BOOTARGS_CMA_SIZE="8M"` は小さな CMA 領域を設定することに注意してください。大きな連続領域の割り当てに失敗する場合は、まずこれを確認してください。

コアダンプは `CONFIG_ELF_CORE=y` で有効になっています。`build.sh` の `__BUILD_ENABLE_COREDUMP_SCRIPT()` は有効化スクリプトを生成できます。これを `IMAGE/.../DEBUG_FILES/kernel/vmlinux.tar.bz2` およびクロス gdb と組み合わせて使用し、ダンプを解析します。

## 6. バグ報告に含める情報

社内レポートまたは Rockchip への課題報告（`docs/en/Rockchip_User_Guide_Bug_System_EN.pdf` を参照）の場合、次の情報を一度に収集してください：

```bash
# On the host
./build.sh info > info.txt 2>&1
cat IMAGE/*/build_info.txt

# On the device
/bin/sdkinfo
cat /etc/ota_version
uname -a && cat /proc/cmdline
dmesg > dmesg.txt
cat /var/log/Recamera2_developer.log > app.log
cat /run/board_id.env
netstat -tlnp
ps w
```

完全なシリアルブートログ（1500000 ボー）、再現手順、および `IMAGE/..._RELEASE_TEST/` アーカイブへのパスも含めてください。

静的ソース解析での指摘事項、その根拠、影響、および検証状況は、保守監査を運用手順から切り離しておくために [Source Review and Known Issues](/ja/recamera_pro_sdk_source_notes/) にまとめられています。関連する挙動に遭遇した場合は、まず現在の SDK ファイルとバージョンに照らして検証してください。

## テクニカルサポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>