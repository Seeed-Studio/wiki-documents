---
title: reSpeaker XVF3800 USB 4-Mic Array FAQ
description: reSpeaker XVF3800 USB 4-Mic Array のセットアップ、USB 接続、ファームウェア、オーディオおよびチューニングに関するよくある質問。
slug: /respeaker_xvf3800_faq
last_update:
  date: 9/2/2026
  author: ray
keywords:
  - reSpeaker XVF3800 FAQ
  - reSpeaker XVF3800 troubleshooting
  - reSpeaker XVF3800 firmware
---

<div class="respeaker-faq-page">

# reSpeaker XVF3800 USB 4-Mic Array FAQ

このページには、reSpeaker XVF3800 USB 4-Mic Array に関する検証済みの回答が掲載されています。各回答には、対象となる製品バリアントとファームウェアモード（USB または I2S）、および最新の公式情報源に対して最後に検証された日付が記載されています。

## 始める前に

- デバイスが動作している正確な製品バリアントとファームウェアモード（USB または I2S）を確認します。
- バージョン固有の手順を適用する前に、現在のファームウェアバージョンを確認します。
- このページの回答は 2026-08-31 時点で最後に検証されています。これ以降に閲覧している場合は、リンクされた公式情報源を再確認してください。

<!-- RESPEAKER_FAQ_AUTO_START -->
## ドキュメントと使用方法 {#documentation-and-usage}

### XVF3800 の筐体を損傷させずに開けるにはどうすればよいですか？ {#open-casing-safely}

**対象:** クリップ式エンクロージャ付きで提供される ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日:** 2026-09-01

まずデバイスの電源を切り、接続を外してから、爪を使って筐体の縁に沿ってそっと持ち上げます。3 つあるロッククリップのうち 1 つを先に外してから、残りのクリップの周囲を作業します。カバーを無理にこじ開けたり、鋭利な金属工具を使用したりしないでください。

**前提条件:**

- デバイスが USB、スピーカー配線、およびその他すべての電源から完全に切り離されていること
- 基板と筐体が傷つかない清潔な作業面

1. すべてのケーブルを取り外し、筐体を清潔な面に置きます。
2. 爪を使って一辺に沿ってそっと持ち上げ、最初のロッククリップが外れるまで行います。
3. そのまま縁に沿って進み、カバーをねじらないようにしながら残り 2 つのクリップを外します。
4. 軽い力ではクリップが動かない場合は作業を中止し、筐体を無理にこじらず、クリップの位置に爪を当て直してください。

**成功条件:**

- 3 つすべてのクリップが損傷せずにカバーが分離している
- PCB、コネクタ、および筐体に工具やこじ開けによる損傷がない

**補足:**

- 公式 Wiki では 3 つのロッククリップがあることを示し、爪で筐体の縁をやさしく持ち上げることを推奨しています。
- 筐体を開けること自体は、サポート対象外の PCB 改造とは別の行為です。

**参考情報:**

- [XVF3800 筐体トラブルシューティングガイド](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#how-can-i-open-the-casing-without-damaging-it)

### エンクロージャ設計用の XVF3800 機構ファイルはどこで入手できますか？ {#mechanical-design-files}

**対象:** ReSpeaker XVF3800 USB 4-Mic Array と、その公開されている筐体の機構的インテグレーション

**最終検証日:** 2026-09-01

公式 Wiki の Resources セクションを使用します。ここには 2D 機構図、ボードレベルの 3D STEP モデル、上下それぞれの筐体 STEP ファイルが公開されています。これらが公開されている機構リファレンスです。このページでは部品表（BOM）は公開されておらず、すべての部品の型番が含まれていることも保証されていません。

**前提条件:**

- 2D 図面用の PDF ビューア、または 3D ファイル用の STEP 対応 CAD ソフトウェア
- インテグレーション対象となる正確な基板および筐体バリアントの確認

1. 現行の XVF3800 入門ページの Resources セクションを開きます。
2. 2D 機構図と、該当する基板または筐体の STEP ファイルをダウンロードします。
3. それらのファイルを CAD ツールにインポートし、意図した製品バリアントに対して、取付穴、コネクタのクリアランス、および筐体上下の整合を確認します。
4. 設計が公開ファイルに含まれていない部品型番や公差に依存する場合は、リリース前に必ず確認を依頼してください。

**成功条件:**

- 選択したビューアまたは CAD ツールで公式の 2D または STEP ファイルが開ける
- 筐体設計が、公開ファイルに実際に記載されている寸法のみに基づいている

**補足:**

- 公開されている Resources セクションは、利用可能な 2D および 3D ファイルについての権威ある情報源です。
- 公開されていない部品型番、音響公差、基板とカバー間の距離制限などを主張しないでください。

**参考情報:**

- [XVF3800 公式機構リソース](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#resources)

### XVF3800 の I2C コマンド一覧はどこにあり、I2C 制御をどのように検証しますか？ {#i2c-command-reference}

**対象:** XIAO ESP32S3 またはその他のサポートされる組み込み I2C ホストに接続された ReSpeaker XVF3800

**最終検証日:** 2026-09-01

公式の XVF3800 I2C コマンドリファレンスを使用します。ホストは I2C マスター、XVF3800 は 7 ビットアドレス `0x2C` のスレーブであり、リードではビット 7 をセットしたコマンドバイトを送信し、その後、先頭バイトがステータスであるレスポンスを受信します。チューニングやルーティングの書き込みを送る前に、まずドキュメントに記載された `VERSION` リードから始めてください。

**前提条件:**

- 目的とする I2S または組み込み動作モード用のファームウェアと配線
- 基板のドキュメントに記載された SDA および SCL ピンに設定された I2C マスター
- 最新の公式 I2C コマンドリファレンス

1. ホストを XVF3800 の 7 ビット I2C アドレス `0x2C` に設定します。
2. ドキュメントに記載された書き込みフレーム `[resid] [cmd] [write_byte_num] [data...]` を使用します。リードの場合は、レスポンスを要求する前に `[resid] [cmd | 0x80] [read_len + 1]` を送信します。
3. リソース ID 48、コマンド ID 0、および 3 バイトのペイロードを持つ `VERSION` の例を実装します。
4. レスポンスステータス `0` を成功、ステータス `64` を再試行として扱い、ステータスが成功でない場合はペイロードデータを有効として解析しないでください。
5. `VERSION` が動作したら、現在のコマンドテーブルから、必要なコマンドのリソース ID、コマンド ID、タイプ、値の個数、および方向のみを転記します。

**成功条件:**

- I2C トランザクションがステータス 0 と 3 バイトのファームウェアバージョンを返す
- 報告されたバージョンが XVF3800 にインストールされているファームウェアイメージとして妥当である

**補足:**

- I2C は制御プレーンであり、PCM オーディオは組み込みモードでは I2S を使用し、I2C パラメータトラフィックとしては転送されません。
- パラメータのバイト数、型、および値の範囲はコマンド固有であり、最新の公式テーブルから取得する必要があります。

**参考情報:**

- [公式 XVF3800 I2C コマンドリファレンス](https://wiki.seeedstudio.com/ja/respeaker_xvf_3800_i2c_list/)
- [XIAO ESP32S3 と XVF3800 の入門ガイド](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_xiao_getting_started/)

## 接続性と検出 {#connectivity-and-detection}

### Raspberry Pi 5 または Linux で XVF3800 が USB 経由で検出されないのはなぜですか？ {#usb-not-detected-pi5-linux}

**対象:** Raspberry Pi 5 またはその他の Linux ホストに接続された ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日:** 2026-08-31

まずデータケーブル、XMOS USB-C ポート、およびホスト側の列挙を確認します。デバイスが I2S ファームウェアで動作している場合や、通常のファームウェアが応答しなくなっている場合は、Safe Mode に入って USB DFU を通じて公式の USB ファームウェアイメージを書き込みます。

**前提条件:**

- 3.5 mm ジャック付近の XMOS USB-C ポートに接続された、既知の良好な USB データケーブル
- Linux ホストにインストールされた dfu-util
- 公式ファームウェアリポジトリ一式をダウンロードまたはクローン済みであること

1. `lsusb` と `arecord -l` を実行します。どちらのコマンドにもデバイスが表示されない場合は、ファームウェアを変更する前に、既知の良好なデータケーブルとホストの直接接続 USB ポートを試してください。
2. XVF3800 の電源を切ります。Mute ボタンを押しながら電源を再接続します。赤色 LED の点滅で Safe Mode への移行が確認できます。
3. `sudo dfu-util -l` を実行します。Safe Mode では DFU Upgrade と Factory のパーティションが表示されるはずです。
4. `sudo dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_usb_dfu_firmware.bin` を使用して公式 USB イメージを書き込みます。
5. 自動再起動後に再度 `lsusb` と `arecord -l` を実行し、その後、公式ホスト制御ツールで `VERSION` を読み出します。

**成功条件:**

- Linux が XVF3800 を USB デバイスとして列挙し、ALSA のキャプチャデバイスとして一覧表示する
- 公式ホスト制御ツールでファームウェアバージョンを読み取れる

**補足:**

- I2S ファームウェアは I2S ホスト向けであり、通常の USB オーディオ列挙を提供しません。
- Safe Mode も `dfu-util -l` に表示されない場合は、ケーブル、電源、およびホストポートの切り分けを継続してください。まったく列挙されないデバイスを、ファームウェアリカバリで修復できると決めつけないでください。

**参考情報:**

- [Getting Started with reSpeaker XVF3800 USB Mic Array](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/)
- [公式 XVF3800 DFU ガイド](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/dfu_guide.md)

## ファームウェアとソフトウェア {#firmware-and-software}

### 間違ったファームウェアを書き込んだ後に XVF3800 を復旧するにはどうすればよいですか？ {#recover-wrong-firmware}

**対象:** ファームウェアまたは保存済み設定の変更後に、通常どおり起動または列挙しなくなった ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日:** 2026-08-31

工場出荷時の Safe Mode を使用し、そのモードでサポートされている更新方法を通じて正しい公式イメージを書き込みます。USB オーディオに復旧する場合は、Safe Mode から USB DFU を使用します。

**前提条件:**

- 3.5 mm ジャック付近の XMOS USB-C ポートに接続された、既知の良好な USB データケーブル
- インストール済みの dfu-util
- 目的とする USB または I2S 動作モード用の正しい公式ファームウェアイメージ

1. 電源を完全に切断します。
2. Mute ボタンを押しながら電源を再接続します。赤色 LED が点滅するまで押し続けます。これが工場出荷時の Safe Mode が有効になったことを示します。
3. Windows または macOS では `dfu-util -l`、Linux では `sudo dfu-util -l` を実行します。DFU Upgrade と DFU Factory インターフェースが存在することを確認します。
4. USB 動作を復元するには、`dfu-util -R -e -a 1 -D /path/to/firmware.bin`（Linux では `sudo` を使用）で選択した公式 USB イメージを書き込みます。
5. ボードの再起動を待ち、USB オーディオの列挙を確認してから、公式ホスト制御ツールで `VERSION` を読み出します。

**成功条件:**

- ボードが Safe Mode を抜け、意図した動作モードで列挙される
- 報告されるファームウェアバージョンが書き込んだイメージと一致している

**補足:**

- USB ファームウェアは USB DFU をサポートし、I2S ファームウェアは I2C DFU をサポートし、工場出荷時の Safe Mode は両方をサポートします。
- 公式リポジトリ一式をダウンロードするかクローンしてください。GitHub の HTML ページをファームウェアバイナリとして保存しないでください。

**参考情報:**

- [XVF3800 Safe Mode とファームウェア更新ガイド](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/)
- [公式 XVF3800 ファームウェアリポジトリ](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares)

### XVF3800 で `LED_EFFECT 5` が範囲外エラーを返すのはなぜですか？ {#led-effect-5-out-of-range}

**対象:** USB ファームウェアと公式 Python ホスト制御ツールを使用している ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日：** 2026-08-31

リングモード（`LED_EFFECT = 5`）と `LED_RING_COLOR` を使用するには、USB ファームウェア v2.0.7 以降と、最新のホスト制御コマンドマップが必要です。古いファームウェアや古いツールでは、エフェクト 0〜4 のみが認識されます。

**前提条件：**

- USB ファームウェア v2.0.7 以降（検証時点での最新の変更履歴バージョンは v2.1.0）
- 公式リポジトリから取得した最新の `python_control/xvf_host.py`

1. `python xvf_host.py VERSION` を実行し、USB ファームウェアが v2.0.7 以降であることを確認します。
2. それより古い場合は、最新の公式 USB イメージを書き込み、デバイスを再起動します。
3. `python xvf_host.py LED_RING_COLOR --values` の後に、ちょうど 12 個のカラー値を続けて実行し、12 個すべてのリングカラーを設定します。
4. `python xvf_host.py LED_EFFECT --values 5` を実行してリングモードを有効にします。

**成功条件：**

- ツールがエフェクト値 5 を範囲外エラーなしで受け付ける
- 12 個すべての LED が指定したリングカラーを表示する

**注意：**

- `LED_RING_COLOR` には、LED ごとに 1 つずつ、合計ちょうど 12 個の値が必要です。
- スクリプトだけを更新しても、古いファームウェアにコマンドが追加されるわけではありません。ファームウェアとコマンドマップの両方が対応している必要があります。

**参考情報：**

- [XVF3800 USB ファームウェア変更履歴](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/usb/changelog.md)
- [公式 XVF3800 Python ホスト制御ツール](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/python_control/xvf_host.py)
- [公式ホスト制御使用ガイド](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/python_control/readme.md)

### XVF3800 USB ファームウェアを更新する前に Safe Mode に入る必要がありますか？ {#usb-dfu-without-safe-mode}

**対象：** Windows、macOS、または Linux 上で、応答のある USB ファームウェアから更新される ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日：** 2026-09-01

いいえ。現在動作中の USB ファームウェアが通常の DFU Upgrade インターフェイスを公開している場合は不要です。`dfu-util -l` を実行し、XVF3800 DFU Upgrade ターゲットが表示される場合は、選択した公式 USB イメージを直接書き込みます。デバイスが I2S ファームウェアで動作している場合、通常のファームウェアが応答しない場合、またはその他の理由でリカバリが必要な場合は Safe Mode を使用してください。

**前提条件：**

- 3.5 mm ジャック付近の XMOS USB-C ポートに接続された、正常動作が確認されたデータケーブル
- インストール済みで、デバイスへのアクセスが許可されている `dfu-util`
- 完全な公式リポジトリと、必要なプロファイル用に正確に選択された USB イメージ

1. `dfu-util -l` を実行します（必要に応じて Linux では `sudo dfu-util -l` を実行）。
2. `reSpeaker DFU Upgrade` が alternate setting 1 として表示された場合、`dfu-util -R -e -a 1 -D /path/to/official_usb_firmware.bin` で書き込みます。
3. `-R` によって発生する自動再起動を待ち、その後 `dfu-util -l` と公式の `VERSION` コマンドを実行してデバイスを検証します。
4. I2S ファームウェアがアクティブである、または通常のファームウェアが応答しないために DFU Upgrade インターフェイスが存在しない場合は、処理を中止し、公開されている Safe Mode リカバリ手順に従ってください。

**成功条件：**

- DFU 転送がエラーなく完了し、ボードが再起動する
- デバイスが意図したファームウェアバージョンを報告し、想定された USB プロファイルで列挙される

**注意：**

- Safe Mode はリカバリ用の経路であり、応答のある USB ファームウェアを毎回更新するための必須の事前ステップではありません。
- I2S ファームウェアは通常の USB DFU を公開しません。工場出荷時の Safe Mode は USB DFU と I2C DFU の両方をサポートします。
- GitHub のファイルページでブラウザの「名前を付けて保存」操作を使用しないでください。リポジトリ全体を clone するかダウンロードしてください。

**参考情報：**

- [公式 XVF3800 DFU ガイド](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/dfu_guide.md)
- [XVF3800 Safe Mode とファームウェア更新ガイド](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#safe-mode)
- [最新の XVF3800 USB ファームウェアディレクトリ](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)

## オーディオ関連の問題 {#audio-issues}

### XVF3800 の 6 チャンネル USB ファームウェアで一部の入力が無音なのはなぜですか？ {#six-channel-silent-inputs}

**対象：** Linux 上で公式の 6 チャンネル USB ファームウェアプロファイルを実行している ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日：** 2026-09-01

Linux では、ファームウェアが正常に動作していても、6 つのキャプチャコントロールがミュートされているか、ゼロに設定されている場合があります。最新の 6 チャンネル USB イメージを使用し、ALSA ですべてのキャプチャスイッチを有効にし、ゼロ以外のキャプチャレベルを設定し、ミキサー状態を保存してください。最新のファームウェア変更履歴では、USB チャンネル 3〜6 が個別にルーティング可能であること、および古い 6 チャンネルプロファイルの生マイクロフォンマッピングが記録されています。

**前提条件：**

- 最新の公式リポジトリと、意図的に選択された 6 チャンネル USB イメージ
- `arecord`、`amixer`、`alsactl` を含む ALSA ユーティリティ
- XVF3800 に割り当てられた実際の ALSA カード番号

1. `arecord -l` を実行し、XVF3800 の ALSA カード番号を `N` として控えます。
2. `amixer -c N cset numid=8 on,on,on,on,on,on` を実行して、6 つすべてのキャプチャスイッチを有効にします。
3. `amixer -c N cset numid=10 60,60,60,60,60,60` を実行し、必要に応じてゼロ以外のレベルを調整します。
4. `sudo alsactl store N` を実行し、その後新しい 6 チャンネルのテスト録音を行い、すべてのチャンネルを確認します。
5. USB リセット後に無音が再発する場合は、書き込まれているイメージが最新であることを確認してください。公式の変更履歴には v2.0.10 での USB リセットリカバリ修正が記録されており、それ以降のイメージはそのリリースを置き換えています。

**成功条件：**

- 新しい 6 チャンネル録音で、アクティブなソースを持つ有効化されたすべてのチャンネルにゼロ以外のサンプルが含まれている
- Linux ホストの再接続または再起動後も、ミキサーコントロールが有効なままである

**注意：**

- チャンネル番号は、1 始まりのチャンネル番号または 0 始まりのソフトウェアインデックスとして表示される場合があります。録音を確認する際は、どちらの表記を用いるかを明示してください。
- 標準的な 6 チャンネルプロファイルが再生リファレンスチャンネルを公開するという古い主張を使用しないでください。最新の公式変更履歴では、古い 6 チャンネルプロファイルのチャンネル 3〜6 に生マイク信号があることが文書化されています。
- 公開されている変更履歴ではコマンドの存在は告知されていますが、完全なソース値レシピは公開されていないため、この FAQ では `AUDIO_MGR_OP_CH3` から `AUDIO_MGR_OP_CH6` までのカスタムルーティング値は規定していません。

**参考情報：**

- [XVF3800 6 チャンネルトラブルシューティング](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#why-are-some-channels-silent-with-the-xvf3800-6-channel-firmware)
- [最新の XVF3800 USB ファームウェア変更履歴](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/usb/changelog.md)
- [最新の XVF3800 USB ファームウェアディレクトリ](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)

### Linux で XVF3800 の再生音量が小さい場合、どのように上げればよいですか？ {#linux-speaker-volume-low}

**対象：** ALSA ベースの Linux ホスト上で再生デバイスとして使用される ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日：** 2026-09-01

`alsamixer` で XVF3800 サウンドカードを選択し、その `PCM-1` コントロールを 100% まで上げ、デバイスを取り外す前に ALSA 状態を保存します。それでも出力が小さすぎる場合は、まず外部出力デバイスを確認し、そのうえでホスト側の追加調整として、文書化されている PulseAudio コントロールを使用してください。

**前提条件：**

- 文書化されている XVF3800 出力に接続された外部ヘッドホン、アクティブスピーカー、または互換スピーカー
- インストール済みの ALSA ミキサーユーティリティ
- Linux の再生サウンドカードとして認識されている XVF3800

1. `alsamixer` を実行し、F6 キーを押して XVF3800 サウンドカードを選択します。
2. `PCM-1` に移動し、既知のテストサンプルを再生しながら 100% まで上げます。
3. Esc キーを押して終了し、XVF3800 を取り外す前に `sudo alsactl store` を実行します。
4. 出力が依然として小さい場合は、接続されている出力デバイスとケーブルを確認し、必要に応じて `pavucontrol` をインストールしてホスト側の再生レベルを確認します。

**成功条件：**

- 既知のテストサンプルが、外部出力デバイスから適切なレベルで聞こえる
- ホストまたはデバイスを再起動した後も、ALSA の `PCM-1` レベルが設定されたままである

**注意：**

- この手順は Linux 上の USB 再生用であり、I2S コーデックレジスタのチューニング手順ではありません。
- ソフトウェア音量を 100% を超えて上げると音声がクリップする可能性があります。通常のミキサーとハードウェア経路を確認した後にのみ使用してください。

**参考情報：**

- [XVF3800 Linux スピーカー音量トラブルシューティング](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#does-playback-sound-from-speaker-output-not-enough-)

## ハードウェア関連の問題 {#hardware-issues}

### XVF3800 に内蔵スピーカーはありますか？ {#external-speaker-required}

**対象：** XIAO ESP32S3 の有無にかかわらず、ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日：** 2026-09-01

いいえ。XVF3800 はマイクアレイ兼オーディオ処理デバイスであり、外部出力デバイスが必要です。ヘッドホンやアクティブスピーカーには 3.5 mm ヘッドホンジャックを使用し、互換性のある増幅スピーカーにはオンボードの JST スピーカーインターフェイスを使用してください。

**前提条件：**

- 文書化されている JST 出力用の外部ヘッドホン、アクティブスピーカー、または互換スピーカー
- アクティブな USB または I2S 動作モード用に構成された再生ソース

1. 公式ハードウェア概要に示されている 3.5 mm ヘッドホン出力またはオンボード JST スピーカーインターフェイスのいずれかを選択します。
2. 再生を開始する前に外部出力デバイスを接続します。
3. 既知のオーディオサンプルを再生し、USB モードを使用している場合はホスト側で XVF3800 出力を選択します。

**成功条件：**

- 接続された外部出力デバイスから音声が聞こえる
- マイクアレイ筐体単体から音が出ないのは想定どおりである

**注意：**

- 公開されているハードウェア概要には、3.5 mm ヘッドホンジャックと JST スピーカーインターフェイスが記載されていますが、内蔵スピーカーについては記載されていません。
- 現在の公式ハードウェアドキュメントを超えて、特定のコネクタのピン配置やサードパーティ製スピーカーモデルを推測しないでください。

**参考情報：**

- [Getting Started with ReSpeaker XVF3800](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/)

## 製品とビジネス {#product-and-business}

### XVF3800 USB 4-Mic Array は USB 経由で 48 kHz をサポートしますか？ {#usb-48-khz-support}

**対象：** Windows、Linux、または macOS 上で USB キャプチャに使用される ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日：** 2026-08-31

はい。専用の公式イメージ `respeaker_xvf3800_usb_dfu_firmware_v2.1.0_48k2ch.bin` を使用してください。そのファイル名は、想定される 48 kHz・2 チャンネルの USB プロファイルを示しています。汎用の v2.1.0 イメージから 48 kHz 対応を推測しないでください。

**前提条件：**

- 現在の公式ファームウェアリポジトリ一式（正確な `_v2.1.0_48k2ch.bin` イメージを含む）
- XMOS の USB-C ポートへの正常な USB データ接続と、ホスト側にインストールされた `dfu-util`
- アクティブな USB デバイスが公開しているフォーマットを表示・選択できる録音アプリケーション

1. 公式リポジトリ一式をクローンまたはダウンロードし、`xmos_firmwares/usb/respeaker_xvf3800_usb_dfu_firmware_v2.1.0_48k2ch.bin` を選択します。
2. 公式の XVF3800 アップデート手順に従って USB DFU 経由でそのイメージを書き込み、デバイスの再起動を待ちます。
3. 再起動した USB オーディオデバイスが報告するフォーマットを確認します。ホストがその組み合わせを公開している場合にのみ、48,000 Hz かつ 2 チャンネルキャプチャを選択します。
4. 短いテスト録音を開始し、フォーマットネゴシエーションエラーなしにキャプチャが開始されることを確認します。

**成功条件：**

- ホストが、書き込んだ XVF3800 イメージに対して 48,000 Hz・2 チャンネルのキャプチャモードを報告する
- 2 チャンネル録音が 48,000 Hz で、フォーマットネゴシエーションエラーなしに開始される

**注意事項：**

- 公式の USB 変更履歴では v2.1.0 が現行とされており、現在のディレクトリには `v2.1.0_16k6ch` と `v2.1.0_48k2ch` の専用イメージも含まれています。
- リポジトリのディレクトリおよび変更履歴には、これらのバイナリに対する USB Audio Class ディスクリプタダンプは公開されていません。そのため、この FAQ では USB のサンプル幅や、その他のサンプルレート／チャンネル数の組み合わせについては一切主張しません。
- XVF3800 Wiki のファームウェア／サンプルレートのセクションは、この FAQ を公開する前または同時に修正する必要があります。なぜなら、古い「すべて 16 kHz」という記述が、現在のファームウェアディレクトリと矛盾しているためです。

**参考情報：**

- [現行の公式 XVF3800 USB ファームウェアディレクトリ](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)
- [公式 XVF3800 USB ファームウェア変更履歴](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/usb/changelog.md)
- [48 kHz USB サポートを追加した公式コミット](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/commit/8b0967aef554c2d270e70d428ed4e19f4ab811b8)

### XVF3800 は一意のデバイスシリアル番号を公開しますか？ {#unique-device-serial}

**対象：** 対応 USB ホストによって列挙された ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日：** 2026-09-01

はい。現在の公式ハードウェア概要では、識別および複数デバイス管理のための内蔵一意デバイスシリアル番号について説明しています。USB または DFU の列挙時には、物理ユニットをアプリケーションレコードに関連付ける際、製品 SKU ではなくホストが報告するデバイスシリアルフィールドを使用してください。

**前提条件：**

- 対応する Windows、macOS、または Linux ホスト
- XMOS の USB-C ポートへのデータ通信可能な接続
- DFU インターフェースが利用可能な場合の `dfu-util -l` など、ホスト側の列挙ツール

1. 1 台の XVF3800 を XMOS の USB-C ポート経由でホストに接続します。
2. ホストの USB 列挙ツールを実行します。DFU インターフェースが見えている場合、`dfu-util -l` は `serial=` フィールドを表示します。
3. 報告されたシリアルをデバイス識別子として保存し、ファームウェアバージョンや SKU としては扱わないでください。
4. 複数デバイス展開の場合は、各ユニットを個別に列挙し、アプリケーションが意図した物理ユニットを報告されたシリアルと正しく関連付けていることを確認します。

**成功条件：**

- 接続された XVF3800 に対して、ホストが空でないデバイスシリアルを報告する
- アプリケーションが、USB バス上の位置ではなく報告されたシリアルを用いて、意図したユニットを区別できる

**注意事項：**

- 公式製品ページでは、これを一意のデバイスシリアル番号と呼び、複数デバイス管理機能として紹介しています。
- この FAQ では、Android 互換性やフルデュプレックス動作については主張しません。これらは元の質問の中でも別個で、かつサポート対象外の部分でした。

**参考情報：**

- [XVF3800 ハードウェア概要](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#ハードウェア概要)
- [公式 XVF3800 DFU ガイド](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/dfu_guide.md)

<!-- RESPEAKER_FAQ_AUTO_END -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
