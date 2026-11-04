---
description: SDK の用語、同梱されている技術文書、およびライセンス情報を参照します。
title: 用語集、ドキュメントマップ、ライセンス
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - Reference
  - Documentation
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_reference
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/ja/recamera_pro_sdk_reference/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# 用語集、ドキュメントマップ、ライセンス

## 用語集

### プラットフォームとハードウェア

| 用語 | 意味 |
| --- | --- |
| **RV1126B** | NPU と ISP35 を搭載した Rockchip の IPC 向け SoC。reCamera Pro のメインチップ。RK_CHIP=rv1126b, RK_ARCH=arm64 |
| **RV1126BP** | 一部の EVB ボード構成で使用される RV1126B パッケージ／派生バリアント |
| **RK801** | reCamera Pro で使用される PMIC |
| **RK817** | オーディオコーデック内蔵 PMIC（CONFIG_SND_SOC_RK817=y） |
| **ES7202** | マイクアレイキャプチャ用の Everest マルチチャネル ADC |
| **ISP35** | RV1126B の ISP バージョン。関連する IQ ファイルは iqfiles/isp35/ 配下にある |
| **eMMC** | オンボードストレージ（RK_BOOT_MEDIUM=emmc） |
| **Maskrom** | SoC ROM に内蔵されたダウンロードモード。フラッシュ書き込みのエントリポイント（USB VID 2207） |
| **loader / idblock** | DDR 初期化と第 1 段階ブートローダー。出力には idblock.img と download.bin が含まれる |
| **board ID** | ADC の抵抗分圧レベルによって検出されるベースボード／拡張ボードのバリアント。結果は /run/board_id.env に書き込まれる |
| **DTBO** | Device Tree Blob Overlay。1 つのファームウェアイメージで複数のハードウェアバリアントをサポートするために、実行時に使用される |

### SDK とビルドシステム

| 用語 | 意味 |
| --- | --- |
| **BSP** | Board Support Package。U-Boot、カーネル、rootfs、ドライバを含むボードレベルのサポート |
| **BoardConfig** | `project/cfg/<series>/BoardConfig-*.mk`。ビルド用のボードパラメータ一式 |
| **lunch** | BoardConfig を選択する操作。Android ビルドシステム由来の用語。.BoardConfig.mk シンボリックリンクを生成する |
| **sysdrv** | U-Boot／カーネル／MCU ソースを含むシステムドライバコンポーネント SDK。make で単独ビルド可能 |
| **media** | mpp / rockit / rkaiq / rga / iva などを含むマルチメディアコンポーネント SDK。make で単独ビルド可能 |
| **app** | project/app/ 配下のユーザ空間アプリケーション |
| **fragment** | ベース defconfig の上に順番に適用される、カーネル／U-Boot の増分 defconfig |
| **overlay** | パッケージング時に rootfs 上にコピーされるファイル群のディレクトリ。有効なエントリは RK_POST_OVERLAY に列挙される |
| **IQ file** | rkaiq のセンサチューニングパラメータ（JSON）を含む Image Quality ファイル |
| **rootfs** | 3 G パーティション上の、Buildroot で生成された ext4 ルートファイルシステム |
| **oem** | /oem ディレクトリ。このボードでは RK_BUILD_APP_TO_OEM_PARTITION=n のため、別パーティションではなく rootfs 内の通常ディレクトリとなる |
| **userdata** | /userdata にマウントされる書き込み可能パーティション。設定やユーザデータを保存し、デフォルトの HOME となる |
| **misc** | リカバリ／ファクトリリセットフラグを含む小さなパーティション |
| **RK_APP_TYPE** | リファレンスアプリケーションタイプ。このボードでは RKIPC_RV1126B_RECAMERA2 を使用 |
| **allsave** | all + save。./build.sh を引数なしで実行したときのデフォルト動作 |
| **RK_APP_xxx** | アプリケーションをビルドするかどうかを制御するボード設定スイッチ |
| **MAROC_\*** | Makefile.param 内のマクロ群。MAROC_COPY_PKG_TO_APP_OUTPUT、MAROC_STRIP_DEBUG_SYMBOL、MAROC_PKG_RELEASE などを含む |

### マルチメディア（rockit / MPI）

| 用語 | 意味 |
| --- | --- |
| **MPI** | Media Process Interface。rockit 用の統一プログラミングインターフェース |
| **rockit** | Rockchip の MPI ランタイム実装。-lrockit とリンクする |
| **MPP** | Media Process Platform。より低レベルのコーデックライブラリ群。-lrockchip_mpp とリンクする |
| **VI** | Video Input。ISP を介してセンサからフレームをキャプチャする |
| **VPSS** | Video Process Sub System。マルチチャネルのスケーリング／クロップ／フォーマット変換 |
| **VENC / VDEC** | ビデオのエンコード／デコード |
| **VO** | ディスプレイへの Video Output |
| **RGN** | OSD オーバーレイやウォーターマーク用のリージョンモジュール |
| **AI / AO** | Audio In / Audio Out |
| **AENC / ADEC** | オーディオのエンコード／デコード |
| **AVS** | 複数カメラのサラウンドビュー合成を行う Around View System |
| **IVS** | 動体検知などの解析を行う Intelligent Video Surveillance |
| **TDE** | 2D アクセラレーション用の Two Dimensional Engine |
| **RGA** | ラスタグラフィックアクセラレーション。スケーリング、NV12↔RGB 変換、回転を行う 2D アクセラレータ |
| **MB** | Media Buffer／バッファプール |
| **Bind** | RK_MPI_SYS_Bind() により 2 つのモジュール間のチャネルを接続し、データを自動的にフローさせる |
| **EIS / DIS** | 電子式／デジタル式の手ぶれ補正 |
| **ePTZ** | 電子的パン・チルト・ズーム |
| **SVC** | Scalable Video Coding |
| **AOV** | Always-On Vision。低消費電力の常時オンビジョン |
| **FEC** | 魚眼／歪み補正ハードウェア（CONFIG_VIDEO_ROCKCHIP_FEC=y） |
| **IRFPA** | 赤外線焦点面アレイ（サーマルイメージング） |
| **rkaiq** | 3A とチューニング用の Rockchip AI ISP エンジン。-lrkaiq とリンクする |
| **uAPI / uAPI2** | rkaiq の 2 世代のユーザ空間インターフェース。新規コードは uAPI2（rk_aiq_user_api2_*.h）を使用すること |
| **AINR** | AI ノイズリダクション。関連する IQ ファイルは iqfiles/isp35/ainr/ 配下にある |
| **AI-ISP** | NPU を使用して ISP 出力を強化する機能。このボードでは無効（RK_AIISP_MODEL=NONE） |

### AI / NPU

| 用語 | 意味 |
| --- | --- |
| **NPU** | RV1126B に統合された Neural Processing Unit |
| **RKNN** | Rockchip のニューラルネットワークモデル形式とランタイム（.rknn + librknnrt.so） |
| **RKNN-Toolkit2** | x86_64／Python 向けの PC 側モデル変換ツール。**SDK には含まれず**、別途インストールが必要。内部ベースライン：2.3.2 |
| **rknn-toolkit-lite2** | デバイス向けの Python 推論ラッパー。検証用途にのみ適しており、本番アプリケーションでは C API を使用する |
| **RKLLM** | Rockchip の大規模言語モデルランタイム（.rkllm + librkllmrt.so） |
| **rkllm-toolkit** | media/rknn-llm-mk/rknn-llm/rkllm-toolkit/ 配下にある PC 側 LLM 変換ツール |
| **ROCKIVA** | Rockchip のビジョンアルゴリズム群（人物／顔／ペット検出など）をパッケージ化したもの。-lrockiva とリンクする |
| **RKAI** | LLM と VLM のワークフローをカバーする、project/app/rkai/ 配下の Rockchip AI ラッパー |
| **VLM** | Vision-Language Model。画像とテキストのマルチモーダルモデル |
| **TTFT** | Time To First Token。RKLLM のベンチマーク指標 |
| **RKNN_NPU_CORE_x** | NPU コア割り当てマスク（AUTO / 0 / 0_1 / 0_1_2） |
| **INT8 quantization / calibration set** | 量子化には代表的な画像リストを使用する。キャリブレーションセットは検証セットと分離しておくこと |

### ネットワークとストリーミング

| 用語 | 意味 |
| --- | --- |
| **rkipc** | Rockchip の IPC リファレンスアプリケーション。reCamera Pro のメインアプリ（recamera_ipc）はこれをベースとしている |
| **go2rtc** | 内部 RTSP を WebRTC／HLS などに変換するオープンソースのストリーミングゲートウェイ。overlay 内のビルド済みバイナリとして提供される |
| **RTSP** | Real-Time Streaming Protocol。内部ソースは 127.0.0.1:5554。外部ポート :554 は必要に応じて有効化される |
| **WebRTC** | ブラウザベースのリアルタイム音声／映像。go2rtc は :8555 をリッスンする |
| **ONVIF** | recamera_onvif によって実装される、ネットワークデバイス相互運用標準 |
| **ttyd** | ポート 7681 上のウェブページ経由でターミナルを公開する |
| **main / sub stream** | live/0 および live/1 に対応する go2rtc のストリーム名 |

### reCamera サービス

| 用語 | 意味 |
| --- | --- |
| **gmgr** | GPIO Manager。ポート 8080 と /dev/shm/gmgr.sock 上で動作する Rust 製 GPIO HTTP／WebSocket サービス |
| **skt2ws** | rkipc-record-events を転送する Socket-to-WebSocket ブリッジ |
| **tmir** | TTY Mirror。シリアルポート ttyS4 のトラフィックをソケット／WebSocket に多重化する |
| **rcisd** | イベントキューイングとファイル転送を行う reCamera Intellisense デーモン |
| **RkLunch.sh** | /oem/usr/bin/ 配下にある、システム全体のアプリケーション起動エントリポイント |
| **vigil** | recamera_ipc/common/vigil* 配下のモジュール。protobuf と libblkid に依存する |
| **VQE** | Voice Quality Enhancement。音声フロントエンドアルゴリズム（AEC / ANS / AGC） |
| **AEC** | Acoustic Echo Cancellation。スピーカのリファレンス信号（asound.conf の Ch4）を必要とする |
| **dsnoop** | 1 つのハードウェアデバイスを複数プロセスで読み取れるようにする ALSA の共有キャプチャプラグイン |
| **KWS / ASR** | Keyword Spotting / Automatic Speech Recognition。対応する仮想デバイスは ai_kws / ai_asr |

## ドキュメントマップ

docs/ ディレクトリには **90 個の PDF ファイル**（中国語 52、英語 38）が含まれます。中国語版の方が内容が充実しているため、**まずそちらを確認してください**。

### 言語別・トピック別の件数

| トピック | 中国語 (docs/zh/) | 英語 (docs/en/) |
| --- | --- | --- |
| audio/ | 6 | 6 |
| bsp/ | 17 | 15 |
| ipc/ | 3 | 3 |
| isp/ | 8 | **2** |
| media/ | 9 | 7 |
| npu_iva/ | 1 | **0 (directory absent)** |
| security/ | 3 | 3 |
| wifibt/ | 3 | **0 (directory absent)** |
| ルートディレクトリ | — | 2 (Bug System, SDK Application and Synchronization) |

ROCKIVA SDK、Wi-Fi／Bluetooth 一式、ほとんどの ISP チューニングおよびドライバガイド、EIS／DIS、System Suspend、RGB_MCU、SDMMC／SDIO／eMMC、AVS キャリブレーション以外の一部メディアドキュメントなど、重要な文書の多くは中国語版のみで提供されています。海外顧客向けドキュメントでは、これらの資料を翻訳するか、英語版が含まれていないことを明記してください。

### タスク別にドキュメントを探す

| やりたいこと | 読むべきドキュメント |
| --- | --- |
| SDK を使い始めたい | docs/zh/ipc/Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_CN.pdf |
| ビデオパイプラインを構築したい | docs/zh/media/Rockchip_Developer_Guide_Linux_Rockit_Runtime_CN.pdf |
| MPI API を調べたい | docs/zh/media/Rockchip_Developer_Guide_MPI_C_CN.pdf |
| 画質をチューニングしたい／センサを変更したい | docs/zh/isp/Rockchip_Tuning_Guide_ISP35_CN.pdf, Rockchip_Development_Guide_ISP35_CN.pdf |
| カメラドライバを開発したい | docs/zh/isp/Rockchip_Developer_Guide_Camera_Driver_CN.pdf, Rockchip_Driver_Guide_VI_CN.pdf |
| 歪み補正をキャリブレーションしたい | docs/zh/isp/Rockchip_Development_Guide_FEC_CN.pdf。AVS については docs/zh/media/Rockchip_Developer_Guide_AVS_Calib_*_CN.pdf を参照 |
| 赤外線サーマルイメージングを開発したい | docs/zh/isp/Rockchip_Development_Guide_IRFPA_CN.pdf |
| ビデオエンコードをトラブルシュートしたい | docs/zh/media/Rockchip_Trouble_Shooting_Linux_VENC_CN.pdf |
| 低消費電力／バッテリー駆動 IPC を扱いたい | docs/zh/media/Rockchip_Developer_Guide_Linux_AOV_CN.pdf, docs/zh/wifibt/Rockchip_Developer_Guide_Linux_Low_Power_Wi-Fi_CN.pdf |
| 高速起動を実現したい | docs/zh/ipc/Rockchip_Developer_Guide_Linux_RKAI_CN.pdf, docs/zh/isp/Rockchip_ISP_Tuning_Guide_for_Thunder_Boot_CN.pdf |
| ビジョンアルゴリズムを利用したい | docs/zh/npu_iva/Rockchip_Developer_Guide_ROCKIVA_SDK_CN.pdf |
| オーディオコーデックについて知りたい | docs/zh/audio/Rockchip_Developer_Guide_Linux_RV_Series_ACodec_CN.pdf |
| エコーキャンセル／ノイズリダクションを行いたい | docs/zh/audio/Rockchip_Developer_Guide_Audio_Algorithm_VQE_Introduction_CN.pdf |
| マイクアレイのテストを行いたい | docs/zh/audio/Rockchip_Developer_Guide_Microphone_Array_TEST_CN.pdf |
| オーディオをトラブルシュートしたい | docs/zh/audio/Rockchip_Trouble_Shooting_Linux_Audio_CN.pdf |
| Wi-Fi／Bluetooth を扱いたい | docs/zh/wifibt/Rockchip_Developer_Guide_Linux_WIFI_BT_CN.pdf |
| GPIO を扱いたい | docs/zh/bsp/RV1126B_User_Manual_GPIO.pdf, RV1126B-P_User_Manual_GPIO.pdf |
| I2C／SPI／PWM／USB／WDT を扱いたい | docs/zh/bsp/ 配下の、対応する名前のガイド |
| eMMC／SD を扱いたい | docs/zh/bsp/Rockchip_Developer_Guide_SDMMC_SDIO_eMMC_CN.pdf |
| オープンソースのフラッシュソリューションを使いたい | docs/zh/bsp/Rockchip_Developer_Guide_Linux_Flash_Open_Source_Solution_CN.pdf |
| サーマル制御／周波数スケーリングを行いたい | docs/zh/bsp/Rockchip_Developer_Guide_Thermal_CN.pdf, Rockchip_Developer_Guide_CPUFreq_CN.pdf, Rockchip_Developer_Guide_Devfreq_CN.pdf |
| サスペンドとレジュームを扱いたい | docs/zh/bsp/Rockchip_RV1126B_Developer_Guide_System_Suspend_CN.pdf |
| ディスプレイを扱いたい | docs/zh/bsp/Rockchip_Developer_Guide_DRM_Display_Driver_CN.pdf |
| CAN バスを扱いたい | docs/zh/bsp/Rockchip_Developer_Guide_CAN_FD_CN.pdf |
| MCU 開発を行いたい | sysdrv/source/mcu/docs/Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf（SDK ルートからもリンクあり） |
| U-Boot を扱いたい | docs/zh/bsp/Rockchip_Developer_Guide_UBoot_Nextdev_CN.pdf |
| セキュアブート／OTP／TEE を扱いたい | docs/zh/security/ 配下の 3 つのドキュメント |
| ベンダーストレージ（シリアル番号など）を扱いたい | docs/en/bsp/Rockchip_Application_Notes_VendorStorage_EN.pdf（**英語のみ**） |
| RKLLM を扱いたい | media/rknn-llm-mk/rknn-llm/doc/Rockchip_RKLLM_SDK_CN_1.2.3.pdf |
| RKIPC アプリケーションを扱いたい | project/app/recamera_ipc/docs/Rockchip_Developer_Guide_Linux_RKIPC_CN.md（V1.7.6、Markdown） |
| RKAI アプリケーションを扱いたい | project/app/rkai/rkai/doc/Rockchip_Developer_Guide_Linux_RKAI_CN.md |
| フラッシュツールを使いたい | tools/linux/Linux_Upgrade_Tool/命令行开发工具使用文档.pdf |
| すべての設定オプションを確認したい | project/cfg-all-items-introduction.txt |
| Rockchip の不具合を報告したい | docs/en/Rockchip_User_Guide_Bug_System_EN.pdf |
| SDK の申請と同期を行いたい | docs/en/Rockchip_User_Guide_SDK_Application_And_Synchronization_EN.pdf |

SDK のルートには、よく使用されるドキュメントへのシンボリックリンクもあります：`Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_{CN,EN}.pdf`、Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf、Copyright_Statement.md、RECAMERA2-IPC-RELEASE-NOTES.md、RK-RELEASE-NOTES-IPC.txt。

## 著作権とコンプライアンス

### Rockchip 著作権表示

docs/Copyright_Statement.md（SDK ルートからもリンクされています）：

> Copyright(C) 2024 Rockchip Electronics Co., Ltd. All rights reserved.
>
> ROCKCHIP SOFTWARE は「現状有姿（AS IS）」で提供され、権原、商品性、特定目的への適合性、非侵害性を含む、明示または黙示のいかなる保証も行いません。Rockchip は、サードパーティ、オープンソース、または標準ベースの技術について一切の保証を行いません。受領者は、各権利者から必要となるすべてのライセンスおよび権利を取得する責任を負います。受領者にとって唯一かつ排他的な救済手段、および Rockchip の累積的な責任の全ては、Rockchip の選択により、該当する ROCKCHIP SOFTWARE を改訂または交換するか、受領者が支払った料金を返金することに限定されます。

実務上の意味合い：

- SDK 内の Rockchip コンポーネントは **現状有姿（AS IS）** で提供されます。何か問題が発生した場合は、自分で調査するか、Rockchip に issue を提出してください。
- **サードパーティライセンスのクリアは私たちの責任です。** SDK には多数のサードパーティソフトウェア（bluez 5.77、wpa_supplicant、hostapd、openssl、libnl、freetype、libjpeg、libpng、zlib、go2rtc、ttyd、syslog-ng、vsftpd、React エコシステム、Rust クレートなど）が含まれています。製品を出荷する前に、各コンポーネントについて GPL / LGPL / Apache / MIT / BSD などのコンプライアンス上の義務を確認してください。
- docs/ 配下の Rockchip PDF には機密区分の表示があります（多くは「Public」と記載されています）が、**配布前に必ず区分を確認してください**。「Internal」とマークされた資料は再配布しないでください。

### SDK コンポーネントのライセンス

| コンポーネント | ライセンス |
| --- | --- |
| media/mpp/ | media/mpp/mpp/LICENSES/ を参照（Apache-2.0 および MIT） |
| sysdrv/source/kernel/ | GPL-2.0（COPYING および LICENSES/ を参照） |
| sysdrv/source/uboot/ | GPL-2.0+ |
| Buildroot | GPL-2.0；各パッケージは独自のライセンスを持つ場合があります |
| project/app/recamera_ipc/ | LICENSE ファイルを含みます；その条件に従ってください |
| project/app/rkai/ | LICENSE ファイルを含みます；その条件に従ってください |
| Rockchip バイナリライブラリ（librknnrt.so、librockiva.so、rkaiq、IQ ファイルなど） | Rockchip 独自ライセンス。SDK とともに配布されます |

### この Wiki を外部公開する前に

- **この Wiki は Seeed の社内資料です。** 公開サイト（例：wiki.seeedstudio.com）に掲載する前に、社内 GitLab アドレス（iteam-gitlab.seeed.cn）、社内パス、ボード ID 抵抗レベルなどのハードウェア詳細、量産テストツール、未公開の製品計画を削除してください。
- **Rockchip の PDF を公開サイトにアップロードしないでください。** 公式な Rockchip 配布チャネルへリンクするか、「Seeed / Rockchip に問い合わせ」と記載してください。
- 公開ドキュメントでは、デフォルトパスワード、root SSH ログインポリシー、PAM ロックアウトパラメータを開示しないでください。[Device Access and Debugging](/ja/recamera_pro_bsp_device_debug/) にはそのような詳細が含まれているため、公開版では削除する必要があります。
- Seeed が開発したコンポーネント（recamera_*）の外部向けライセンス方針について、法務に確認してください。

## 略語リファレンス

| 略語 | 正式名称 |
| --- | --- |
| BSP | Board Support Package（ボードサポートパッケージ） |
| IPC | IP Camera（IP カメラ） |
| MPI | Media Process Interface（メディア処理インターフェース） |
| MPP | Media Process Platform（メディア処理プラットフォーム） |
| ISP | Image Signal Processor（イメージシグナルプロセッサ） |
| NPU | Neural Processing Unit（ニューラルプロセッシングユニット） |
| RGA | Raster Graphic Acceleration（ラスタグラフィックアクセラレーション） |
| IVA | Intelligent Video Analysis（ROCKIVA）（インテリジェントビデオ解析） |
| AOV | Always-On Vision（常時オンビジョン） |
| CVR | Car Video Recorder（車載ビデオレコーダー） |
| ONVIF | Open Network Video Interface Forum |
| OTA | Over-The-Air update（OTA アップデート） |
| DTBO | Device Tree Blob Overlay（デバイスツリーブロブオーバーレイ） |
| CMA | Contiguous Memory Allocator（連続メモリアロケータ） |
| AEC / ANS / AGC | Acoustic Echo Cancellation / Acoustic Noise Suppression / Automatic Gain Control（アコースティックエコーキャンセル / アコースティックノイズ抑圧 / 自動利得制御） |
| KWS / ASR | Keyword Spotting / Automatic Speech Recognition（キーワードスポッティング / 自動音声認識） |
| TTFT | Time To First Token（最初のトークンまでの時間） |
| UVC | USB Video Class |
| VQE | Voice Quality Enhancement（音声品質向上） |
| AHD | Analog High Definition（アナログハイビジョン） |

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
