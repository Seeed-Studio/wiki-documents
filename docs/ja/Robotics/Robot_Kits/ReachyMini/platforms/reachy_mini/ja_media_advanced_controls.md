---
description: libcamerasrc の制御、GStreamer の設定、XMOS XVF3800 のオーディオパラメータなど、Reachy Mini のカメラとマイクアレイを細かく調整するための高度な設定。
title: 高度なメディア制御
slug: /ja/reachymini_platforms_reachy_mini_media_advanced_controls
keywords:
- media
- camera
- microphone
- speaker
- libcamerasrc
- gstreamer
- xmos
- xvf3800
- audio
- dof
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# 高度なメディア制御

このページでは、カメラとサウンドシステムを細かく調整するための高度な設定について説明します。


## カメラ

Raspberry Pi カメラは、次のコマンドで検出できます：

```bash
rpicam-hello --list
# Available cameras
# -----------------
# 0 : imx708_wide [4608x2592 10-bit RGGB] (/base/soc/i2c0mux/i2c@0/imx708@1a)
#     Modes: 'SRGGB10_CSI2P' : 1536x864 [120.13 fps - (768, 432)/3072x1728 crop]
#                             2304x1296 [56.03 fps - (0, 0)/4608x2592 crop]
#                              4608x2592 [14.35 fps - (0, 0)/4608x2592 crop]
```

Reachy Mini で写真を撮るには：

```bash
rpicam-still -t 1 -r -o test.jpg --width 4608 --height 2592
# Copy the picture to your computer
# scp pollen@reachy-mini.local:/home/pollen/test.jpg .
```

すべてのカメラ制御については、[公式ドキュメント](https://www.raspberrypi.com/documentation/computers/camera_software.html)に詳しく記載されています。たとえば、オートフォーカス設定を変更できます：

```bash
rpicam-still -t 1 -r -o test.jpg --width 4608 --height 2592 --autofocus-mode manual --lens-position 0
rpicam-still -t 1 -r -o test.jpg --width 4608 --height 2592 --autofocus-mode manual --lens-position 1000
```

SDK レベルでは、カメラは [libcamerasrc](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/webrtc_daemon.py) コンポーネントを使用して GStreamer によって制御されます。利用可能なパラメータは、次のコマンドで確認できます：

```bash
gst-inspect-1.0 libcamerasrc
```

その後、コードを次のように変更できます：

```python
def _configure_video(
    self, cam_path: str, pipeline: Gst.Pipeline, webrtcsink: Gst.Element
) -> None:
    self._logger.debug(f"Configuring video {cam_path}")
    camerasrc = Gst.ElementFactory.make("libcamerasrc")
    # camerasrc.set_property("af-mode", "manual")
    # camerasrc.set_property("lens-position", 1000)
```


## マイクとスピーカー

4 マイクアレイは、[Seeed の reSpeaker XMOS XVF3800](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/) をベースにしています。これはオーディオ出力も提供します。デフォルトでは、オーディオプロセッサは音響エコーキャンセレーション（AEC）を実行するため、スピーカーからの出力はマイク入力から打ち消されます。このため、ロボットは自分の声を聞きません。

システム上では `Pollen Robotics Reachy Mini Audio` として認識されます。音量は `alsamixer` で調整できます。F6 を押してオーディオカードを選択し、F5 を押して入力および出力ボリュームを表示します。PCM（出力音量）以外はすべて 100% のままにし、PCM は必要に応じて調整することを推奨します。

AEC およびその他のオーディオフィルタリングは、XMOS XVF3800 によって調整できます。上級ユーザーは、サウンド処理をよりよく理解するために[公式ドキュメント](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/01_overview.html)を参照してください。パラメータの概要は[このページ](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/AA_control_command_appendix.html)に一覧されています。

これらのパラメータにアクセスするには、ヘルパー Python スクリプト [audio_control_utils.py](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/media/audio_control_utils.py) を使用します：

```bash
# Read a parameter
python src/reachy_mini/media/audio_control_utils.py PP_MIN_NS
# Output:
# PP_MIN_NS: (0.15000000596046448,)

# Write a parameter
python src/reachy_mini/media/audio_control_utils.py PP_MIN_NS --values 0
# Output:
# Writing to PP_MIN_NS with values: [0.0]
# Write operation completed successfully
```

マイクアレイはステレオチャンネルを出力するため、4 つすべてのマイクの生データを同時に取得することはできません。ただし、同時に 2 つの生マイク出力を取得することは可能です：

```bash
# mic 0 - left channel
python audio_control_utils.py AUDIO_MGR_OP_L --values 3 0
# mic 1 - right channel
python audio_control_utils.py AUDIO_MGR_OP_R --values 3 1

# mic 2 - left channel
python audio_control_utils.py AUDIO_MGR_OP_L --values 3 2
# mic 3 - right channel
python audio_control_utils.py AUDIO_MGR_OP_R --values 3 3
```

リニアアレイの配置は次のとおりです：

![リニアアレイの配置](https://www.xmos.com/documentation/XM-014888-PC/html/_images/03_DoA_azimuth_linear.png)

Reachy Mini の右アンテナはマイク 0 の近くにあり、左アンテナはマイク 3 の近くにあります。


### 音の到来方向

4 つのマイクのおかげで、システムは音の到来方向（DoA）を推定できます。方向は上記の配置に基づいて示されます。

```bash
python src/reachy_mini/media/audio_control_utils.py DOA_VALUE
# Output
# DOA_VALUE: [0, 133, 0, 0, 0, 1, 0, 0, 0]
python src/reachy_mini/media/audio_control_utils.py DOA_VALUE_RADIANS
# Output
# DOA_VALUE_RADIANS: (0.5410520434379578, 1.0)
```
この機能は [SDK](../../SDK/python-sdk.md#sensors--media) からも直接利用できます。
