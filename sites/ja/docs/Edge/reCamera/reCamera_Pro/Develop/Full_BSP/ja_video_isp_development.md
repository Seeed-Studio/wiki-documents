---
description: "reCamera Pro のビデオ、rockit/MPI、ISP、センサー、RGA 機能を使ってアプリケーションを開発します。"
title: "ビデオおよび ISP 開発"
keywords:
  - "reCamera"
  - "reCamera Pro"
  - "RV1126B"
  - "SDK"
  - "C/C++"
  - "RKNN"
  - "Application Development"
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_video_isp_development
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/ja/recamera_pro_video_isp_development/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# ビデオおよび ISP 開発

このページでは、製品のビデオパイプラインと ISP インターフェースに焦点を当てます。通常の C/C++ アプリケーション環境とデプロイについては、[`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain) のクイックスタートに従ってください。ここで参照する `rockit`、IQ、およびセンサー設定の詳細は、フルソースパッケージに含まれる上級トピックです。

## コアコンセプト: rockit MPI パイプライン

Rockchip のビデオ処理は、モジュール、チャネル、バインディングからなる **rockit**（MPI, Media Process Interface）モデルを使用します。V4L2 を直接操作することは避けてください。モジュールの略語は次のとおりです。

| Module | Full Name | Purpose |
| --- | --- | --- |
| `VI` | Video Input | センサーから ISP を通してフレームを取得 |
| `VPSS` | Video Process Sub System | マルチチャネルのスケーリング、クロップ、フォーマット変換 |
| `VENC` | Video Encoder | H.264 / H.265 / JPEG / MJPEG エンコード |
| `VDEC` | Video Decoder | デコード |
| `VO` | Video Output | フレームをディスプレイへ送出 |
| `RGN` | Region | OSD オーバーレイとウォーターマーク |
| `AI` / `AO` | Audio In / Out | キャプチャ / 再生 |
| `AENC` / `ADEC` | Audio Encoder / Decoder | オーディオのエンコード / デコード |
| `AVS` | Around View System | マルチカメラのサラウンドビュー合成 |
| `IVS` | Intelligent Video Surveillance | 動体検知などのインテリジェント解析 |
| `TDE` | Two Dimensional Engine | 2D アクセラレーション |
| `MB` | Media Buffer | メディアバッファプール管理 |
| `SYS` | System | 初期化、バインディング、メモリ管理 |

対応するヘッダーファイルは `output/out/media_out/include/` にあり、`rk_mpi_<module>.h` という命名規則に従います（例：`rk_mpi_vi.h`、`rk_mpi_venc.h`、`rk_mpi_sys.h`）。その他のヘッダーとして `rk_debug.h`、`rk_defines.h`、`rk_errno.h` があります。

典型的なパイプライン:

```text
sensor → VI(dev0/pipe0/chn0) → VPSS(grp0) → VENC(chn0) → RTSP/File
                              ↘ RGN overlay
                              ↘ IVS intelligent analysis
```

モジュール同士は `RK_MPI_SYS_Bind()` で接続します。データはその後自動的に流れるため、自分でフレームを移動させる必要はありません。

## 既存サンプルの索引

### `media/samples/simple_test/` — 最小限の単一ファイルサンプル（推奨スタート地点）

各 `.c` ファイルは、完全かつ個別にビルド可能なプログラムです。ファイル名がパイプラインの内容を表します。

| File | Demonstration |
| --- | --- |
| `simple_vi_get_frame.c` | VI フレームを取得する、最小の VI サンプル |
| `simple_vi_get_frame_rkaiq.c` | フレームを取得し、rkaiq を手動で初期化 |
| `simple_vi_bind_venc.c` | VI から VENC へ接続し、ファイルへエンコード |
| `simple_vi_bind_venc_jpeg.c` | JPEG スナップショット取得 |
| `simple_vi_bind_venc_rtsp.c` | **VI から VENC を経由して RTSP 配信；最も一般的な出発点** |
| `simple_vi_bind_venc_rtsp_lowdelay.c` | 低遅延 RTSP |
| `simple_vi_bind_venc_rtsp_eptz.c` | 電子 PTZ |
| `simple_vi_bind_venc_svc_rtsp.c` | SVC スケーラブルエンコード |
| `simple_vi_bind_venc_osd.c` | OSD オーバーレイ |
| `simple_vi_bind_vpss_bind_venc.c` | 複数ストリーム用に VPSS を追加 |
| `simple_vi_bind_vpss_bind_vo.c` | 表示出力を追加 |
| `simple_vi_bind_ivs.c` | インテリジェント解析を接続 |
| `simple_vi_bind_avs_bind_venc.c` | サラウンドビュー合成 |
| `simple_vi_gdc_vo.c` | 歪み補正 |
| `simple_vdec_bind_vo.c` / `simple_vdec_bind_vo_rtsp_lowdelay.c` | デコードして表示 / 低遅延で再配信 |
| `simple_ai_bind_aenc.c` / `simple_adec_bind_ao.c` / `simple_ao_send_frame.c` | オーディオのキャプチャとエンコード / デコードと再生 / フレームの直接再生 |
| `simple_multi_ahd_vpss_test.c` | マルチチャネル AHD |
| `rv1126b/simple_irfpa_vi_bind_venc_rtsp.c` | **RV1126B 専用**：赤外線焦点面アレイとストリーミング |

`simple_test/` ディレクトリには、デュアルカメラ 1080p AVS キャリブレーション例として `rk_2_1920x1080.json` / `.xml` も含まれています。

### `media/samples/example/` — フル機能サンプル

| Subdirectory | File |
| --- | --- |
| `vi/` | `sample_vi.c`、`sample_multi_vi.c`、`sample_vi_eis.c`（電子式手ぶれ補正） |
| `venc/` | `sample_vi_vpss_osd_venc.c`、`sample_multi_vi_avs_osd_venc.c` |
| `vo/` | `sample_vi_vo.c` |
| `audio/` | `sample_ai.c`、`sample_ai_aenc.c` |
| `avs/` | `sample_avs.c`、`sample_multi_vi_avs.c` |
| `demo/` | `sample_demo_vi_venc.c`、`sample_demo_dual_camera.c`、`sample_demo_dual_camera_wrap.c`、`sample_demo_multi_cam.c`、`sample_demo_multi_camera_eptz.c`、`sample_demo_eis.c`、`sample_demo_aiisp.c`、`sample_demo_dual_aiisp.c`、`sample_demo_vi_avs_venc.c` |
| `test/` | ストレステスト：`sample_venc_stresstest.c`、`sample_vpss_stresstest.c`、`sample_isp_stresstest.c`、`sample_mulit_isp_stresstest.c`、`sample_multi_cam_stresstest.c`、`sample_rgn_stresstest.c`、`sample_ai_aenc_adec_ao_stresstest.c`、`sample_avs_stresstest.c`、`sample_vdec_vo_stresstest.c`、`sample_vdec_vpss_vo_stresstest.c`、`sample_demo_*_stresstest.c` |

安定性テストには、`test/` 配下の対応するストレステストを実行してください。

### `project/app/` 配下のアプリケーションレベルサンプル

| Directory | Contents |
| --- | --- |
| `testdemo/low_delay_net_display` | 低遅延ネットワーク表示 |
| `testdemo/yoloworld_demo` | YOLO-World 検出デモ（`3rdparty`、`resources`、`RkLunch.sh` を含む） |
| `aov_sample/` | 低消費電力の常時オンビジョン：`sample_aov_aiisp_iva_venc.c`、`sample_aoa_capture.c`、`sample_aov_audio.c`、`resume_suspend_test.sh` |
| `cvr/` | 車載録画 |
| `ao_record_demo/` | オーディオ録音デモ；その Makefile は rockit をリンクするための有用なテンプレートです |
| `uvc_app_tiny/` | UVC カメラモード |
| `recamera_ipc/` | 完全な製品実装。詳しくは [製品サービスアーキテクチャ](/ja/recamera_pro_bsp_services/) を参照してください。 |

## サンプルのビルドと実行

サンプルは media と一緒にビルドされます（`media/Makefile` の `all` ターゲットから `make -C ./samples` が呼び出されます）。

```bash
./build.sh media
ls output/out/media_out/           # should contain the sample binaries
```

RV1126B の場合、ビルド時に自動的に `-DRV1126B` が追加され、`simple_test/rv1103_rv1106_rv1103b_rv1126b/` および `simple_test/rv1126b/` 配下のチップ固有ソースファイルが使用されます。

サンプルをデバイスにコピーして実行します。

```bash
scp output/out/media_out/bin/simple_vi_bind_venc_rtsp root@<device-ip>:/userdata/
ssh root@<device-ip>
# /userdata/simple_vi_bind_venc_rtsp --help
```

> **リソース競合に関する警告:** 製品ファームウェアでは、`rkipc`（`recamera_ipc`）がすでに動作しており、VI/VENC/ISP リソースと、ポート 5554 上の RTSP サービスを占有しています。デバイスノードがすでに使用中であるために、サンプルが失敗する場合があります。デバッグの前にアプリケーションを停止してください。
>
> ```bash
> # sh /oem/usr/bin/RkLunch-stop.sh
> # または /etc/init.d/S21appinit stop を使用
> ```
>
> **デバイスノードへアクセスするために、システムサービスを無差別に kill しないでください。** デバッグ後にはサービスを再起動してください。本番環境では、共有設定または明示的なサービス停止手順を通じてアクセスを調整します。

## RTSP ストリーミングアーキテクチャ（重要）

reCamera Pro 上のストリーミングは、**2 段階**で行われます。

```text
recamera_ipc(rkipc) internal RTSP service listening on 127.0.0.1:5554
        ↓ rtsp://127.0.0.1:5554/live/0 (main)  /live/1 (sub)
     go2rtc converts the stream
        ↓ WebRTC :8555 / RTSP :554 (optional) / HLS, etc.
      External clients
```

設定ファイルは `project/cfg/BoardConfig_Recamera2/overlay/overlay-buildroot-go2rtc/oem/usr/etc/go2rtc/go2rtc.yaml` にあります。ポート 554 を外部に公開するかどうかは、`/userdata/config/rkipc.ini` の `[video.0.rtsp]`、`[video.0.onvif]`、`[video.1.rtsp]` セクション内の `enable` 設定で制御されます。[デバイスアクセスとデバッグ](/ja/recamera_pro_bsp_device_debug/) を参照してください。

`recamera_ipc` のデフォルト設定ファイルは `project/app/recamera_ipc/src/rv1126b_ipc/rkipc-3840x2160.ini` です。ここには解像度、ビットレート、フレームレート、および RTSP/ONVIF 設定が含まれます。

独自のストリーミングアプリケーションを作成する場合、次の 2 つの選択肢があります。

1. **rockit と `librtsp` を使用する:** `simple_vi_bind_venc_rtsp.c` と同様に独自の RTSP サービスを起動し（`-lrtsp` をリンク）、ポート 5554 以外のポートを選択します。
2. **GStreamer を使用する:** デバイスには GStreamer 1.22 が搭載されており（**プラグイン一覧はハードウェア上での検証がまだ必要です**）、`v4l2src` でキャプチャできます。次のプローブコマンドは動作確認済みとして記録されています。

```bash
# gst-launch-1.0 -v v4l2src device=/dev/video13 num-buffers=30 \
#   ! 'video/x-raw,format=NV12,width=1920,height=1080,framerate=30/1' \
#   ! videoconvert ! fakesink
```

デバイスノード番号（`/dev/video13` など）は**ファームウェアに依存**し、バージョン間で変わる可能性があります。デバイス上で `v4l2-ctl --list-devices` を実行して確認してください。

## ISP と rkaiq

### ソースコードの位置

- エンジンソース：`media/isp/camera_engine_rkaiq/`
- IQ ファイル：`media/isp/camera_engine_rkaiq/rkaiq/iqfiles/isp35/`（このボード構成では **isp35** を使用）
- FEC キャリブレーション：`media/isp/camera_engine_rkaiq/IspFec/fec_calib/`
- ヘッダー（ビルド後）：`output/out/media_out/include/rkaiq/`。`uAPI`、`uAPI2`、`algos`、`common`、`xcore`、`iq_parser`、`iq_parser_v2`、`smartIr` などのサブディレクトリがあります。
- ライブラリ：`-lrkaiq`（あわせて `-lstdc++ -lm` をリンク）

新しいコードでは一貫して **uAPI2**（`rk_aiq_user_api2_*.h`）が使用されます。`RV1126_RV1109` マクロを使うビルドのみ、古い uAPI を使用します。

### ボード構成内の IQ ファイル

ボード構成では次のように指定されています。

```bash
export RK_CAMERA_SENSOR_IQFILES="ainr/sc450ai_default_default.json ainr/sc450ai ainr/sc850sl ainr/sc850sl_default_default.json"
export RK_CAMERA_SENSOR_CAC_BIN=""
export RK_AIISP_MODEL=NONE
```

これは、イメージ内に **SC450AI** および **SC850SL** センサー向けの AINR（AI ノイズリダクション）IQ ファイルをパッケージします。AI-ISP モデルは無効化されています（`RK_AIISP_MODEL=NONE`）。

デバイス上では、パッケージされたファイルは `/oem/usr/share/iqfiles/` に配置され、`/etc/iqfiles` はこのディレクトリへのシンボリックリンクです（`build.sh` 内の `__PACKAGE_OEM()` / `__PACKAGE_ROOTFS()` によって作成されます）。

### IQ ファイルの置き換えやチューニング

- デバッグ中は、デバイス上のファイル `/oem/usr/share/iqfiles/<sensor>/<Module>.json` を直接置き換えます（`/oem` が読み取り専用の場合は再マウントしてください）。その後 `rkipc` を再起動して変更を反映させます。
- リリース用には、チューニング済みの JSON ファイルを `media/isp/camera_engine_rkaiq/rkaiq/iqfiles/isp35/ainr/` に戻し、`RK_CAMERA_SENSOR_IQFILES` に列挙してから、media とファームウェアを再ビルドします。

チューニングツールと手順については、`docs/zh/isp/Rockchip_Tuning_Guide_ISP35_CN.pdf`、`Rockchip_Color_Optimization_Guide_ISP39_ISP33_ISP35_CN.pdf`、`Rockchip_Development_Guide_IRFPA_CN.pdf`（赤外線）、および `Rockchip_Development_Guide_FEC_CN.pdf`（歪み補正キャリブレーション）を参照してください。

## センサーとカーネルドライバー

カーネルフラグメント `rv1126b-recamera2.config` は、多くのセンサードライバーを**モジュール**としてビルドします：

```text
SC450AI SC850SL SC200AI SC3336 SC401AI SC4336 SC530AI SC635HAI SC00AI series
GC2053 GC8613 GST412C IMX415 IMX464 IMX586 IMX708 OS04A10 PS5458
TECHPOINT(AHD Decoding)
```

また、`CONFIG_VIDEO_ROCKCHIP_FEC=y`（歪み補正ハードウェア）と `CONFIG_OF_OVERLAY=y`（ランタイム DTBO オーバーレイ）を有効にしています。`CONFIG_VIDEO_RK_IRCUT` は**無効**です。

カメラ関連のデバイスツリー：

| ファイル | 用途 |
| --- | --- |
| `rv1126b-recamera2-v1.dts` | トップレベルのエントリーポイント、`model = "Rockchip RV1126B RECAMERA PRO Board"` |
| `rv1126b-recamera2-cam-csi0.dtsi` / `-cam-csi1.dtsi` | CSI0 / CSI1 カメラパス |
| `rv1126b-recamera2-ext-cam-csi1.dts` | **拡張ボード**カメラ（`.dtbo` としてコンパイル） |
| `rv1126b-recamera2-baseboard-0.dts` / `-baseboard-1.dts` | ベースボードのバリアント |
| `rv1126b-recamera2-extboard-0.dts` / `-extboard-1.dts` | 拡張ボードのバリアント |
| `rv1126b-recamera2-disp.dtsi` | ディスプレイ |

`RK_KERNEL_RC_DTO=y` は DTBO（ランタイム Device Tree Overlay）を有効にします。ビルド出力の `rv1126b-recamera2-ext-*.dtbo` は、`build.sh` によって `/oem/usr/share/` にコピーされます。起動時に、ボード識別（`S00board-id`）が ADC を読み取り `/run/board_id.env` に書き込みます。システムはこの情報を使用して、オーバーレイを動的に選択します。この仕組みにより、1 つのファームウェアイメージで複数の reCamera Pro ハードウェア構成をサポートできます。詳しくは [System Customization (DTS / Kernel / Buildroot / Overlay)](/ja/recamera_pro_bsp_system_customization/) を参照してください。

## RGA とフォーマット変換

`media/rga/` は、スケーリング、NV12↔RGB 変換、回転、ブレンディングのための 2D アクセラレーションを提供します。`-lrga` をリンクしてください。

一般的なユースケース：VENC は NV12 を必要とし、一方 NPU モデルは RGB を必要とします。RGA を使って変換する方が、`videoconvert` を使うよりもはるかに高速で、CPU 使用率も低くなります。

**生の NV12 バイト列を RGB/BGR モデルに直接渡さないでください。** ピクセルフォーマットを変換し、データを明示的に正規化してください。

## 関連ドキュメント

| ドキュメント | パス |
| --- | --- |
| Rockit Runtime Developer Guide | `docs/zh/media/Rockchip_Developer_Guide_Linux_Rockit_Runtime_CN.pdf` |
| MPI C API Guide | `docs/zh/media/Rockchip_Developer_Guide_MPI_C_CN.pdf` |
| VI Driver Guide | `docs/zh/isp/Rockchip_Driver_Guide_VI_CN.pdf` |
| Camera Driver Guide | `docs/zh/isp/Rockchip_Developer_Guide_Camera_Driver_CN.pdf` |
| ISP35 Development and Tuning | `docs/zh/isp/Rockchip_Development_Guide_ISP35_CN.pdf`、`Rockchip_Tuning_Guide_ISP35_CN.pdf` |
| EIS 電子式手ぶれ補正 | `docs/zh/media/Rockchip_Developer_Guide_EIS_CN.pdf`、`Rockchip_RV1126B_Development_Guide_DIS_CN.pdf` |
| AOV 低消費電力モード | `docs/zh/media/Rockchip_Developer_Guide_Linux_AOV_CN.pdf` |
| DVR 車載録画 | `docs/zh/media/Rockchip_Developer_Guide_Linux_DVR_CN.pdf` |
| VENC トラブルシューティング | `docs/zh/media/Rockchip_Trouble_Shooting_Linux_VENC_CN.pdf` |
| AVS キャリブレーション | `docs/zh/media/Rockchip_Developer_Guide_AVS_Calib_Product_CN.pdf` |
| 高速起動 | `docs/zh/ipc/Rockchip_Developer_Guide_Linux_RKAI_CN.pdf`（Thunder Boot） |

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>