---
description: シリアルコンソール、SSH、ログ、ネットワークツールを使用して、デバイスを保守しカスタムファームウェアをデバッグします。
title: デバイスアクセスとデバッグ
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_device_debug
sku: 10003420
sidebar_position: 7
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/ja/recamera_pro_bsp_device_debug/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# デバイスアクセスとデバッグ

このページでは、ファームウェアに**実際に含まれている**デバッグチャネルをまとめます。情報は `project/cfg/BoardConfig_Recamera2/overlay/` 以下のボードオーバーレイ設定から取得しています。チャネルは `RK_POST_OVERLAY` オプションで追加・削除できます。詳細は [システムカスタマイズ (DTS / Kernel / Buildroot / Overlay)](/ja/recamera_pro_bsp_system_customization/) を参照してください。

## チャネル概要

| チャネル | ポート | 有効化元 | 用途 |
| --- | --- | --- | --- |
| シリアルコンソール | `ttyFIQ0`, **1500000** 8N1 | U-Boot `CONFIG_BAUDRATE` | ブートログ、U-Boot との対話、リカバリ |
| SSH | 22 | `overlay-buildroot-sshd` (`S50sshd`) | 主な開発チャネル |
| Web ターミナル ttyd | **7681** | `overlay-buildroot-ttyd` (`S50ttyd`) | ブラウザでシェルを開く |
| WebSocket ログ | **8765** (ループバックのみ) | `overlay-buildroot-log` (`S10log`) | Web UI でライブログを表示 |
| go2rtc API | **1984** (127.0.0.1 のみ) | `overlay-buildroot-go2rtc` (`S50go2rtc`) | ストリーム管理 API |
| go2rtc WebRTC | **8555** | 同上 | WebRTC ストリームの受信 |
| go2rtc RTSP | **554** (必要に応じて有効化) | 同上 | 外部 RTSP |
| 内部 rkipc RTSP | **5554** (127.0.0.1) | `recamera_ipc` | go2rtc 用のアップストリームソース |
| vsftpd | 21 | `overlay-buildroot-vsftpd` (`S70vsftpd`) | ファイル転送 |

## シリアルコンソール

U-Boot は `CONFIG_BAUDRATE=1500000` を設定しています (`sysdrv/source/uboot/u-boot/configs/rv1126b_recamera2_defconfig:162`)。カーネルコマンドラインは `console=ttyFIQ0` と `earlycon=uart8250,mmio32,0x20810000` を使用します。

```bash
# On the host (USB-to-serial adapter)
picocom -b 1500000 /dev/ttyUSB0
# Or
minicom -D /dev/ttyUSB0 -b 1500000
```

ボーレートは一般的な 115200 ではなく **1500000** です。ボーレートが一致しないと文字化けした出力になります。

シリアルコンソールは、システムがブートできない場合に利用可能な唯一のチャネルです。カーネルパニック、rootfs マウント失敗、DDR 初期化などの起動問題のデバッグに使用してください。

## SSH

`overlay-buildroot-sshd/etc/ssh/sshd_config` の主な設定:

```text
PermitRootLogin yes
PasswordAuthentication yes
AuthorizedKeysFile  .ssh/authorized_keys
UsePAM yes
UseDNS no
Subsystem sftp /usr/libexec/sftp-server
```

デフォルトでは、**root パスワードログインが有効**であり、公開鍵認証にも対応しています。ファイル転送には SFTP が利用できます。

```bash
ssh root@<device-IP>
scp my_app root@<device-IP>:/userdata/
sftp root@<device-IP>
```

### ログイン失敗時のロックアウト (PAM)

`overlay-buildroot-sshd/usr/libexec/ssh-login-lock.py` は、PAM を使用して総当たり攻撃から保護します:

- **連続 5 回失敗** すると (`MAX_ATTEMPTS = 5`)、アカウントは **300 秒間** ロックされます (`LOCKOUT_SECONDS = 300`)。
- 試行回数はクライアント IP (`PAM_RHOST`) ごとにカウントされ、時間基準として `/proc/uptime` を使用するため、**再起動するとカウンタはクリアされます**。
- 状態ファイル: `/userdata/config/system/login_lock.json`。対応するロックファイルは `login_lock.json.lock` です。

ロックアウトされた場合は 300 秒待つか、再起動するか、シリアルコンソール経由でログインして `/userdata/config/system/login_lock.json` を削除してください。

## Web ターミナル (`ttyd`)

`overlay-buildroot-ttyd/oem/usr/etc/init.d/S50ttyd` は次を起動します:

```text
ttyd -p 7681 /oem/usr/bin/ssh-login-whitelist.sh
```

ブラウザで `http://<device-IP>:7681` を開くと、ユーザー名の入力を求められます。ラッパースクリプト `ssh-login-whitelist.sh` は許可リストにあるユーザーのみを許可し、その後 `exec ssh <user>@localhost` を実行します:

```bash
ALLOWED_USERS=("root" "admin")
```

言い換えると、**ttyd は実質的にブラウザ内の SSH クライアントです**。認証は依然として SSH を使用します (上記の PAM ロックアウトポリシーを含む) 。許可リスト外のユーザーは拒否されます。ユーザーを追加するには、`ALLOWED_USERS` 配列を編集して rootfs を再ビルドするか、デバイス上でスクリプトを直接編集します (`/oem` が読み取り専用の場合は再マウントが必要な場合があります)。

## ログシステム

ファームウェアには 3 つのログレイヤーがあります。それぞれの役割を理解しておくと、デバッグ時間を節約できます。

### 1. syslog-ng (`overlay-buildroot-syslog-ng/etc/syslog-ng.conf`, @version 3.38)

| 出力 | パス / 宛先 | フォーマット |
| --- | --- | --- |
| `d_Recamera2` | `/var/log/Recamera2.log` | JSON: `{"sTimestamp","sLevel","sData"}` |
| `d_Recamera2_developer` | `/var/log/Recamera2_developer.log` | テキスト: `ISODATE HOST PROGRAM[PID]: [LEVEL] MESSAGE` |
| `d_python_udp` | UDP `127.0.0.1:5140` | WebSocket ログサービスへ転送 |

ログファイルの所有者は `root:adm` で、パーミッションは `0640` です。デバッグの際は、まず人間が読みやすい `Recamera2_developer.log` から確認し、プログラムによる解析には `Recamera2.log` (JSON) を使用してください。

```bash
# tail -f /var/log/Recamera2_developer.log
# tail -n 200 /var/log/Recamera2.log
```

### 2. WebSocket ログサービス (`overlay-buildroot-log/oem/usr/bin/websocket_log.py`)

`S10log` は python3 でこのサービスを起動します:

- syslog-ng によって転送されたメッセージを受信するため、UDP `127.0.0.1:5140` で待ち受けます。
- ポート **8765** で WebSocket サービスを提供し、`127.0.0.1` にバインドします (`SERVER_IP = "127.0.0.1"`)。
- 直近 **2000** 件のメッセージをメモリに保持します (`MAX_LOG_SIZE = 2000`)。

ループバックにバインドされているため、ホストからアクセスするには SSH でポートフォワードします:

```bash
ssh -L 8765:127.0.0.1:8765 root@<device-IP>
# Then connect a browser or script to ws://localhost:8765
```

Web UI のライブログパネルはこの経路を使用します。

### 3. シリアルコンソール / `dmesg`

カーネルメッセージは `console=ttyFIQ0` に送信されます。デバイス上では `dmesg` を使用してカーネルリングバッファを確認します。

## ビデオストリーム (go2rtc)

`overlay-buildroot-go2rtc/oem/usr/etc/go2rtc/go2rtc.yaml` のデフォルト設定:

```yaml
streams:
  main:
    - rtsp://127.0.0.1:5554/live/0
  sub:
    - rtsp://127.0.0.1:5554/live/1
api:
  listen: "127.0.0.1:1984"
webrtc:
  listen: ":8555"
rtsp:
  listen: ""        # Not listening by default
```

アーキテクチャは次のとおりです。**`recamera_ipc` (rkipc) が 127.0.0.1:5554 で内部 RTSP ソースを提供し → go2rtc がストリームをプルして WebRTC/HLS などのプロトコルで公開します**。`main` はメインストリーム、`sub` はサブストリームです。

### 外部 RTSP ポートは動的に設定される

`S50go2rtc` の起動時に `/userdata/config/rkipc.ini` を読み取り、次の優先順位で `:554` で RTSP を公開するかどうかを決定します:

1. `[video.0.rtsp]` セクションで `enable=1` を確認します。
2. それ以外の場合は、`[video.0.onvif]` セクションで `enable=1` を確認します。
3. さらにそれ以外の場合は、`[video.1.rtsp]` セクションで `enable=1` を確認します。
4. いずれも有効でない場合は RTSP ポートを開かず、デフォルト設定のみを使用します。

RTSP が有効な場合、デフォルトの YAML を `/tmp/go2rtc/go2rtc.yaml` に**コピー**し、`rtsp: listen: ":554"` を追加します。`authtype=1` の場合は、INI ファイルから `username` と `password` も含めます。これにより、読み取り専用の `/oem` ディレクトリ配下のデフォルト設定を変更せずに済みます。

デバッグに便利なコマンド:

```bash
# cat /userdata/config/rkipc.ini | grep -A5 '\[video.0.rtsp\]'
# cat /tmp/go2rtc/go2rtc.yaml          # Active configuration
# cat /var/run/go2rtc.pid
# /oem/usr/etc/init.d/S50go2rtc restart
```

`rkipc.ini` の RTSP / ONVIF スイッチを変更した後は、設定を再生成させるために go2rtc を再起動してください。

RTSP 有効時のストリーム URL:

```text
rtsp://<user>:<pass>@<device-IP>:554/...
http://<device-IP>:8555/            # WebRTC
```

URL パスは go2rtc のストリーム名 (`main` / `sub`) に依存します。デバイス上で検証した後、完全な例を追加してください。

## FTP (`vsftpd`)

`overlay-buildroot-vsftpd/etc/vsftpd.conf` は、ポート 21、`local_enable=YES`、`write_enable=YES`、`chroot_local_user=YES`、`ssl_enable=NO` を設定します。ユーザーリストは `root` と `admin` です。

設定ディレクトリは隠されており、アクセスは拒否されます:

```text
hide_file={config,*/config,config_tar,*/config_tar}
deny_file={config,*/config,config_tar,*/config_tar}
```

その結果、FTP 経由では `/userdata/config` は表示されません。これは意図的な製品設計であり、設定変更は Web UI または API を通じて行うことを想定しています。デバッグ時には FTP ではなく SSH/SFTP を使用してください。

## 環境変数とディレクトリ規約

`overlay-buildroot-rkenv/etc/profile.d/RkEnv.sh` は、ログインシェルに対して次の変数を設定します:

```bash
export OEM_HOME=/oem
export PATH=$PATH:/oem:/oem/bin:/oem/usr/bin:/oem/sbin:/oem/usr/sbin
export LD_LIBRARY_PATH=/oem/usr/lib:/oem/lib:$LD_LIBRARY_PATH
export HOME=/userdata
```

これは次のことを意味します:

- **`/oem`** には Seeed / Rockchip のアプリケーションとライブラリが含まれます (`go2rtc`、`ttyd` ラッパー、`websocket_log.py`、`librknnrt.so` などを含む)。
- **`/userdata`** は書き込み可能で、設定 (`/userdata/config/`) とユーザーデータを保存します。また、デフォルトの `HOME` でもあります。
- クロスコンパイルしたプログラムは、`LD_LIBRARY_PATH` を通じて `/oem/usr/lib` 配下のライブラリをロードできます。init スクリプトから実行する場合は、その環境でも変数が設定されていることを確認してください。

## その他の組み込みサービス

| スクリプト | 目的 |
| --- | --- |
| `overlay-buildroot-board-id/etc/init.d/S00board-id` | ブートの早い段階で実行され、ADC (`/sys/bus/iio/devices/iio:device0`) を読み取ってベースボードおよび拡張ボードのモデルを識別し、その結果を `/run/board_id.env` に書き込みます。3 サンプルを平均し、許容誤差は 440 です。電圧レベルは 0.0/0.3/0.6/0.9/1.2/1.5/1.8 V で、`V0.9`～`V1.5` および `TYPE0`～`TYPE6` にマッピングされます。 |
| `overlay-buildroot-hwclock/etc/init.d/S20hwclock` | ブート時に `hwclock --hctosys --utc` を実行して RTC から時刻を同期し、シャットダウン時に時刻を書き戻します。 |
| `overlay-buildroot-watchdog/etc/init.d/S15watchdog` | `watchdog -T 30 -t 15 /dev/watchdog` (タイムアウト 30 秒、キープアライブ間隔 15 秒) でハードウェアウォッチドッグを起動し、停止時には `/dev/watchdog` に `V` を書き込んで無効化します。 |
| `overlay-buildroot-udhcpc/usr/share/udhcpc/default.script` | インターフェースごとに `/tmp/resolv.conf.<iface>` を書き出し、それらを `/etc/resolv.conf` にマージするカスタマイズされた DHCP スクリプトです。**eth0 を優先**し、`/userdata/config/system/eth0_dns_mode` にある手動 DNS モードマーカーをサポートします。 |
| `overlay-buildroot-banner` | `/etc/motd` に reCamera の ASCII ロゴを配置し、`/etc/profile.d/banner.sh` が対話的な非 SSH セッションでのみそれを表示します。 |

> `S20hwclock` のコメントでは RTC がローカルタイムを保持すると記載されていますが、コマンドは `--utc` を使用しています。これは異なる時刻の扱いを意味します。時計のずれがタイムゾーンオフセットと一致する場合は、まずこれを調査してください。**実機で検証してください。**

ウォッチドッグに関する注意：`-T 30` は、**ウォッチドッグプロセスが 30 秒以上リフレッシュできないようなブロッキング処理があるとハードリセットが発生しうる**ことを意味します。デバッグ中に長時間ブレークポイントで止める必要がある場合は、先に `S15watchdog` を停止してください。

## デバイスを再フラッシュせずにファイルを転送する

これは日常的な開発で最もよく行う操作の 1 つです。方法は 3 つあります：

```bash
# 1. scp (simplest)
scp output/out/app_out/bin/hello_world root@<device-IP>:/userdata/

# 2. Batch transfer with sftp
sftp root@<device-IP> <<< $'put output/out/app_out/bin/hello_world /userdata/'

# 3. adb (only if adbd is enabled in the firmware) — verify on a device
adb push output/out/app_out/bin/hello_world /userdata/
```

`/oem` ではなく `/userdata` にファイルをコピーしてください：`/oem` は通常読み取り専用イメージから供給されますが、`/userdata` は書き込み可能です。

```bash
# ssh root@<device-IP>
# chmod +x /userdata/hello_world && /userdata/hello_world
```

プログラムが共有ライブラリを見つけられない場合は、まず `LD_LIBRARY_PATH` に `/oem/usr/lib` が含まれているか確認するか、`ldd /userdata/hello_world` を実行して不足しているライブラリを特定してください。[開発パスを選択する](/ja/recamera_pro_dev_path/) を参照してください。

## ネットワーク設定の診断

```bash
# ip addr                          # Check whether eth0 / wlan0 received an address
# cat /etc/resolv.conf             # Generated by udhcpc; eth0 takes priority when merging
# cat /tmp/resolv.conf.eth0        # Per-interface file
# cat /userdata/config/system/eth0_dns_mode   # Check for manual DNS mode
# netstat -tlnp                    # Check whether ports such as 22/7681/21/8555 are listening
```

Wi-Fi は `RK_ENABLE_WIFI=y` + `RK_ENABLE_WIFI_CHIP=AP6XXX` によって有効化されます。アプリケーションは `project/app/wifi_app` 配下にあります。

## 新しいボードのための 5 分チェックリスト

1. シリアルコンソールを 1500000 で接続し、ブートログと reCamera のバナーが表示されることを確認します。
2. `ip addr` を実行して IP アドレスを取得し、`ssh root@<IP>` が動作することを確認します。
3. `cat /proc/version` でカーネル 6.1.157 を、`uname -m` で `aarch64` を確認します。
4. `ls /oem/usr/lib | head` を実行し、`librknnrt.so` などのアプリケーションライブラリが存在することを確認します。
5. `netstat -tlnp` を実行し、go2rtc (8555)、ttyd (7681)、sshd (22) が待ち受けていることを確認します。
6. `tail -f /var/log/Recamera2_developer.log` を実行してアプリケーションログを確認します。
7. `cat /run/board_id.env` を確認し、ベースボードおよび拡張ボードの ID が正しく検出されていることを確認します。

## テクニカルサポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>