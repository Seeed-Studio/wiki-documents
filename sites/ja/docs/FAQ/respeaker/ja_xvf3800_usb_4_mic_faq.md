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
createdAt: '2026-08-31'
url: https://wiki.seeedstudio.com/ja/respeaker_xvf3800_faq/
updatedAt: '2026-09-03'
---

<div class="respeaker-faq-page">

# reSpeaker XVF3800 USB 4-Mic Array FAQ

このページでは、reSpeaker XVF3800 USB 4-Mic Array に関する検証済みの回答をまとめています。各回答には、対象となる製品バリアントとファームウェアモード（適用対象）、および最新の公式情報源に照らして最後に検証された日付が記載されています。

## 始める前に

- デバイスが動作している正確な製品バリアントとファームウェアモード（USB か I2S か）を確認します。
- バージョン依存の手順を適用する前に、現在のファームウェアバージョンを確認します。
- このページの回答は 2026-08-31 時点で検証されています。これ以降に閲覧している場合は、リンクされている公式情報源を再確認してください。

<!-- RESPEAKER_FAQ_AUTO_START -->
## ドキュメントと使用方法 {#documentation-and-usage}

### XVF3800 のケースを破損させずに開けるにはどうすればよいですか？ {#open-casing-safely}

**適用対象:** クリップ式エンクロージャ付きで提供される ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日:** 2026-09-01

まずデバイスの電源を切り、接続を外してから、爪を使ってエンクロージャの縁に沿ってそっと持ち上げます。3 つあるロッククリップのうち 1 つを先に外し、その後で残りのクリップの周囲を作業します。カバーを無理にこじ開けたり、鋭利な金属工具を使用したりしないでください。

**前提条件:**

- デバイスが USB、スピーカー配線、およびその他すべての電源から完全に切り離されていること
- 基板やエンクロージャに傷が付かない清潔な作業面があること

1. すべてのケーブルを取り外し、エンクロージャを清潔な面に置きます。
2. 爪を使って一辺に沿ってそっと持ち上げ、最初のロッククリップが外れるまで行います。
3. そのまま縁に沿って進み、カバーをねじらないようにしながら残り 2 つのクリップを外します。
4. 軽い力ではクリップが動かない場合は作業を中止し、エンクロージャを無理にこじるのではなく、クリップの位置を変えてやり直してください。

**成功条件:**

- カバーが 3 つすべてのクリップを損傷なく分離できている
- PCB、コネクタ、およびエンクロージャに工具やこじ開けによる損傷が見られない

**補足:**

- 公式 Wiki では 3 つのロッククリップがあることを示し、爪で縁をやさしく持ち上げる方法を推奨しています。
- ケースを開ける行為は、サポート対象外の PCB 改造とは別のものです。

**参考情報:**

- [XVF3800 ケース開封トラブルシューティングガイド](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#how-can-i-open-the-casing-without-damaging-it)

### エンクロージャ設計用の XVF3800 機構ファイルはどこで入手できますか？ {#mechanical-design-files}

**適用対象:** ReSpeaker XVF3800 USB 4-Mic Array と、その公開されているエンクロージャの機構的インテグレーション

**最終検証日:** 2026-09-01

公式 Wiki の Resources セクションを使用します。ここには 2D 機構図、ボードレベルの 3D STEP モデル、上下エンクロージャそれぞれの STEP ファイルが公開されています。これらが公開されている機構リファレンスです。このページでは部品表（BOM）は公開されておらず、すべての部品の型番が含まれていることも保証されていません。

**前提条件:**

- 2D 図面用の PDF ビューア、または 3D ファイル用の STEP 対応 CAD ソフトウェア
- インテグレーション対象となる正確な基板およびエンクロージャバリアントの確認

1. 現行の XVF3800 入門ページの Resources セクションを開きます。
2. 2D 機構図と、該当する基板またはエンクロージャの STEP ファイルをダウンロードします。
3. それらのファイルを CAD ツールにインポートし、意図した製品バリアントに対して、取付穴、コネクタのクリアランス、およびエンクロージャ上下の整合を確認します。
4. 設計が公開ファイルに含まれていない部品型番や公差に依存する場合は、リリース前に必ず確認を依頼してください。

**成功条件:**

- 選択したビューアまたは CAD ツールで公式の 2D または STEP ファイルが開ける
- エンクロージャ設計が、公開ファイルに実際に記載されている寸法のみに基づいている

**補足:**

- 公開されている Resources セクションは、利用可能な 2D および 3D ファイルについての権威ある情報源です。
- 公開されていない部品型番、音響公差、基板とカバー間の距離制限などを主張しないでください。

**参考情報:**

- [XVF3800 公式機構リソース](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#resources)

### XVF3800 の I2C コマンド一覧はどこにあり、I2C 制御をどのように検証しますか？ {#i2c-command-reference}

**適用対象:** XIAO ESP32S3 またはその他のサポートされている組み込み I2C ホストに接続された ReSpeaker XVF3800

**最終検証日:** 2026-09-01

公式の XVF3800 I2C コマンドリファレンスを使用します。ホストは I2C マスター、XVF3800 は 7 ビットアドレス `0x2C` のスレーブであり、リードではビット 7 をセットしたコマンドバイトを送信し、その後、先頭バイトがステータスとなるレスポンスを受信します。チューニングやルーティングの書き込みを送る前に、まずドキュメントに記載された `VERSION` リードから始めてください。

**前提条件:**

- 想定している I2S または組み込み動作モード用のファームウェアと配線
- 基板に対してドキュメント化されている SDA および SCL ピンに設定された I2C マスター
- 最新の公式 I2C コマンドリファレンス

1. ホストを XVF3800 の 7 ビット I2C アドレス `0x2C` に設定します。
2. ドキュメントに記載された書き込みフレーム `[resid] [cmd] [write_byte_num] [data...]` を使用します。リードの場合は、レスポンスを要求する前に `[resid] [cmd | 0x80] [read_len + 1]` を送信します。
3. リソース ID 48、コマンド ID 0、および 3 バイトのペイロードを用いた `VERSION` の例を実装します。
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

### Raspberry Pi 5 や Linux で XVF3800 が USB デバイスとして検出されないのはなぜですか？ {#usb-not-detected-pi5-linux}

**適用対象:** Raspberry Pi 5 またはその他の Linux ホストに接続された ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日:** 2026-08-31

まずデータケーブル、XMOS の USB-C ポート、およびホスト側での列挙を確認します。デバイスが I2S ファームウェアで動作している場合や、通常のファームウェアが応答しなくなっている場合は、Safe Mode に入って USB DFU を通じて公式の USB ファームウェアイメージを書き込みます。

**前提条件:**

- 3.5 mm ジャック付近の XMOS USB-C ポートに接続された、既知の良好な USB データケーブル
- Linux ホストにインストールされた dfu-util
- 公式ファームウェアリポジトリ一式をダウンロードまたはクローン済みであること

1. `lsusb` と `arecord -l` を実行します。どちらのコマンドにもデバイスが表示されない場合は、ファームウェアを変更する前に、既知の良好なデータケーブルとホストの直接 USB ポートを試してください。
2. XVF3800 の電源を切ります。Mute ボタンを押しながら電源を再接続します。赤色 LED の点滅で Safe Mode への移行が確認できます。
3. `sudo dfu-util -l` を実行します。Safe Mode では DFU Upgrade と Factory のパーティションが見えるはずです。
4. `sudo dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_usb_dfu_firmware.bin` を使って公式 USB イメージを書き込みます。
5. 自動再起動後に再度 `lsusb` と `arecord -l` を実行し、その後、公式ホスト制御ツールで `VERSION` を読み出します。

**成功条件:**

- Linux が XVF3800 を USB デバイスとして列挙し、ALSA のキャプチャデバイスとして一覧表示する
- 公式ホスト制御ツールでファームウェアバージョンを読み取れる

**補足:**

- I2S ファームウェアは I2S ホスト向けであり、通常の USB オーディオ列挙は提供しません。
- Safe Mode も `dfu-util -l` に表示されない場合は、ケーブル、電源、およびホストポートの切り分けを継続してください。まったく列挙されないデバイスがファームウェア復旧で修復できると決めつけないでください。

**参考情報:**

- [Getting Started with reSpeaker XVF3800 USB Mic Array](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/)
- [公式 XVF3800 DFU ガイド](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/dfu_guide.md)

## ファームウェアとソフトウェア {#firmware-and-software}

### 誤ったファームウェアを書き込んだ後に XVF3800 を復旧するにはどうすればよいですか？ {#recover-wrong-firmware}

**適用対象:** ファームウェアまたは保存済み設定の変更後に、通常どおり起動または列挙しなくなった ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日:** 2026-08-31

工場出荷時の Safe Mode を使用し、そのモードでサポートされている更新方法を通じて正しい公式イメージを書き込みます。USB オーディオに復旧する場合は、Safe Mode から USB DFU を使用します。

**前提条件:**

- 3.5 mm ジャック付近の XMOS USB-C ポートに接続された、既知の良好な USB データケーブル
- インストール済みの dfu-util
- 想定している USB または I2S 動作モード用の正しい公式ファームウェアイメージ

1. 電源を完全に切断します。
2. Mute ボタンを押しながら電源を再接続します。赤色 LED が点滅するまで押し続けます。これが工場出荷時の Safe Mode が有効になったことを示します。
3. Windows または macOS では `dfu-util -l`、Linux では `sudo dfu-util -l` を実行します。DFU Upgrade と DFU Factory インターフェースが存在することを確認します。
4. USB 動作を復元するには、`dfu-util -R -e -a 1 -D /path/to/firmware.bin` を使用して選択した公式 USB イメージを書き込みます（Linux では `sudo` を使用）。
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

**適用対象:** USB ファームウェアと公式 Python ホスト制御ツールを使用している ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日:** 2026-08-31

リングモード（`LED_EFFECT = 5`）と `LED_RING_COLOR` を使用するには、USB ファームウェア v2.0.7 以降と、最新のホスト制御コマンドマップが必要です。古いファームウェアや古いツールでは、エフェクト 0〜4 しか認識されません。

**前提条件:**

- USB ファームウェア v2.0.7 以降。検証時点での最新の変更履歴バージョンは v2.1.0
- 公式リポジトリから取得した最新の `python_control/xvf_host.py`

1. `python xvf_host.py VERSION` を実行し、USB ファームウェアが v2.0.7 以降であることを確認します。
2. それより古い場合は、最新の公式 USB イメージを書き込み、デバイスを再起動します。
3. `python xvf_host.py LED_RING_COLOR --values` の後に、ちょうど 12 個のカラー値を続けて実行し、12 個すべてのリングカラーを設定します。
4. `python xvf_host.py LED_EFFECT --values 5` を実行してリングモードを有効にします。

**成功条件:**

- ツールがエフェクト値 5 を範囲外エラーなしで受け付ける
- 12 個すべての LED が指定したリングカラーを表示する

**注意:**

- `LED_RING_COLOR` には、LED ごとに 1 つずつ、合計ちょうど 12 個の値が必要です。
- スクリプトだけを更新しても、古いファームウェアにコマンドが追加されるわけではありません。ファームウェアとコマンドマップの両方が対応している必要があります。

**参考情報:**

- [XVF3800 USB ファームウェア変更履歴](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/usb/changelog.md)
- [公式 XVF3800 Python ホスト制御ツール](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/python_control/xvf_host.py)
- [公式ホスト制御使用ガイド](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/python_control/readme.md)

### XVF3800 USB ファームウェアを更新する前に Safe Mode に入る必要がありますか？ {#usb-dfu-without-safe-mode}

**対象:** Windows、macOS、または Linux 上で、応答のある USB ファームウェアから更新される ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日:** 2026-09-01

いいえ。現在動作中の USB ファームウェアが通常の DFU Upgrade インターフェースを公開している場合は不要です。`dfu-util -l` を実行し、XVF3800 DFU Upgrade ターゲットが表示される場合は、選択した公式 USB イメージをそのまま書き込みます。デバイスが I2S ファームウェアで動作している場合、通常のファームウェアが応答しない場合、またはその他の理由でリカバリが必要な場合は Safe Mode を使用してください。

**前提条件:**

- 3.5 mm ジャック付近の XMOS USB-C ポートに接続された、正常動作が確認されたデータケーブル
- インストール済みで、デバイスへのアクセスが許可されている `dfu-util`
- 完全な公式リポジトリと、必要なプロファイル用に選択した正確な USB イメージ

1. `dfu-util -l` を実行します（必要に応じて Linux では `sudo dfu-util -l` を実行）。
2. `reSpeaker DFU Upgrade` が alternate setting 1 として表示された場合、`dfu-util -R -e -a 1 -D /path/to/official_usb_firmware.bin` で書き込みます。
3. `-R` によって発生する自動再起動を待ち、その後 `dfu-util -l` と公式の `VERSION` コマンドを実行してデバイスを検証します。
4. I2S ファームウェアが動作している、または通常のファームウェアが応答しないために DFU Upgrade インターフェースが存在しない場合は、処理を中止し、公開されている Safe Mode リカバリ手順に従ってください。

**成功条件:**

- DFU 転送がエラーなく完了し、ボードが再起動する
- デバイスが意図したファームウェアバージョンを報告し、想定した USB プロファイルで列挙される

**注意:**

- Safe Mode はリカバリ用の経路であり、応答のある USB ファームウェア更新のたびに必須となる事前ステップではありません。
- I2S ファームウェアは通常の USB DFU を公開しません。工場出荷時の Safe Mode は USB DFU と I2C DFU の両方をサポートします。
- GitHub のファイルページでブラウザの「名前を付けて保存」操作を使用しないでください。リポジトリ全体を clone するかダウンロードしてください。

**参考情報:**

- [公式 XVF3800 DFU ガイド](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/dfu_guide.md)
- [XVF3800 Safe Mode とファームウェア更新ガイド](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#safe-mode)
- [最新の XVF3800 USB ファームウェアディレクトリ](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)

## オーディオの問題 {#audio-issues}

### XVF3800 の 6 チャンネル USB ファームウェアで一部の入力が無音なのはなぜですか？ {#six-channel-silent-inputs}

**対象:** Linux 上で公式の 6 チャンネル USB ファームウェアプロファイルを実行している ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日:** 2026-09-01

Linux では、ファームウェアが正常に動作していても、6 つのキャプチャコントロールがミュートされているか、ゼロに設定されている場合があります。最新の 6 チャンネル USB イメージを使用し、ALSA ですべてのキャプチャスイッチを有効にし、ゼロ以外のキャプチャレベルを設定してから、ミキサー状態を保存してください。最新のファームウェア変更履歴では、USB チャンネル 3〜6 が個別にルーティング可能であること、および古い 6 チャンネルプロファイルの生マイク信号のマッピングが記録されています。

**前提条件:**

- 最新の公式リポジトリと、意図的に選択した 6 チャンネル USB イメージ
- `arecord`、`amixer`、`alsactl` を含む ALSA ユーティリティ
- XVF3800 に割り当てられた実際の ALSA カード番号

1. `arecord -l` を実行し、XVF3800 の ALSA カード番号を `N` として控えます。
2. `amixer -c N cset numid=8 on,on,on,on,on,on` を実行して、6 つすべてのキャプチャスイッチを有効にします。
3. `amixer -c N cset numid=10 60,60,60,60,60,60` を実行し、必要に応じてゼロ以外のレベルを調整します。
4. `sudo alsactl store N` を実行し、その後新しい 6 チャンネルのテスト録音を行い、すべてのチャンネルを確認します。
5. USB リセット後に無音が再発する場合は、書き込んだイメージが最新であることを確認してください。公式の変更履歴には v2.0.10 での USB リセットリカバリ修正が記録されており、それ以降のイメージはそのリリースを置き換えています。

**成功条件:**

- 新しい 6 チャンネル録音で、アクティブなソースを持つ有効化された各チャンネルにゼロ以外のサンプルが含まれている
- Linux ホストの再接続または再起動後も、ミキサーコントロールが有効なままである

**注意:**

- チャンネル番号は、1 始まりのチャンネル番号または 0 始まりのソフトウェアインデックスとして表示される場合があります。録音を確認する際は、どちらの表記を用いているかを明示してください。
- 標準的な 6 チャンネルプロファイルが再生リファレンスチャンネルを公開するという古い主張を使用しないでください。最新の公式変更履歴では、古い 6 チャンネルプロファイルのチャンネル 3〜6 に生マイク信号があることが文書化されています。
- 公開されている変更履歴ではコマンドの存在は告知されていますが、完全なソース値レシピは公開されていないため、この FAQ では `AUDIO_MGR_OP_CH3` から `AUDIO_MGR_OP_CH6` までのカスタムルーティング値は規定していません。

**参考情報:**

- [XVF3800 6 チャンネルトラブルシューティング](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#why-are-some-channels-silent-with-the-xvf3800-6-channel-firmware)
- [最新の XVF3800 USB ファームウェア変更履歴](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/usb/changelog.md)
- [最新の XVF3800 USB ファームウェアディレクトリ](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)

### Linux で XVF3800 の再生音量が小さい場合、どのように上げればよいですか？ {#linux-speaker-volume-low}

**対象:** ALSA ベースの Linux ホスト上で再生デバイスとして使用される ReSpeaker XVF3800 USB 4-Mic Array

**最終検証日:** 2026-09-01

`alsamixer` で XVF3800 のサウンドカードを選択し、その `PCM-1` コントロールを 100% まで上げてから、デバイスを取り外す前に ALSA 状態を保存します。それでも出力が小さい場合は、まず外部出力デバイスを確認し、そのうえでオプションとして、ホスト側調整としての PulseAudio コントロールを使用してください。

**前提条件:**

- 文書化された XVF3800 の出力に接続された外部ヘッドホン、アクティブスピーカー、または互換スピーカー
- インストール済みの ALSA ミキサーユーティリティ
- Linux の再生サウンドカードとして認識されている XVF3800

1. `alsamixer` を実行し、F6 キーを押して XVF3800 のサウンドカードを選択します。
2. `PCM-1` に移動し、既知のテストサンプルを再生しながら 100% まで上げます。
3. Esc キーを押して終了し、XVF3800 を取り外す前に `sudo alsactl store` を実行します。
4. 出力が依然として小さい場合は、接続されている出力デバイスとケーブルを確認し、必要に応じて `pavucontrol` をインストールしてホスト側の再生レベルを確認します。

**成功条件:**

- 既知のテストサンプルが外部出力デバイスから適切なレベルで聞こえる
- ホストまたはデバイスを再起動した後も ALSA の `PCM-1` レベルが設定値のままである

**注意:**

- この手順は Linux 上の USB 再生用であり、I2S コーデックレジスタのチューニング手順ではありません。
- ソフトウェア音量を 100% を超えて上げると音声がクリップする可能性があります。通常のミキサーとハードウェア経路を確認した後にのみ使用してください。

**参考情報:**

- [XVF3800 Linux スピーカー音量トラブルシューティング](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#does-playback-sound-from-speaker-output-not-enough-)

### reSpeaker XVF3800 USB 4-Mic Array の音声認識精度が低いのはなぜですか？また、どのように改善できますか？ {#improve-recognition-accuracy}

**対象:** 公式の 16 kHz 6 チャンネル USB ファームウェアを実行し、ホスト側で 2 つの処理済み出力チャンネル（Ch0 Conference と Ch1 ASR）からキャプチャしている reSpeaker XVF3800 USB 4-Mic Array

**最終検証日:** 2026-10-13

XVF3800 の認識精度は、単一の固定設定ではなく、主にアレイが使用される音響条件に依存します。Seeed のベンチマークでは、同じデバイスとファームウェアでも、アレイに到達するノイズ量によって英語の単語誤り率が約 6% から約 35% まで変化しました。まずキャプチャ条件を改善し、2 つの処理済み出力チャンネルのどちらか一方が常に優れていると決めつけないでください。自分の環境で測定し、結果に基づいてチャンネルを選択してください。

![reSpeaker XVF3800 音声認識ベンチマーク：条件別の誤り率と 95% 信頼区間](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xvf3800_asr_accuracy_overview.png)

このベンチマークでは、信号対雑音比を 0 dB から +10 dB に上げると、2 つの処理済み出力チャンネルおよび両言語のいずれにおいても誤り率が低下しました。一方で、2 つのチャンネル間の差は条件によって方向が変化し、95% 信頼水準ではほとんどの場合区別できませんでした。このベンチマークは探索的なものであり、その絶対値はテストした構成にのみ当てはまります。

**前提条件:**

- 使用中のファームウェアイメージと、どのホストキャプチャインデックスが Ch0 と Ch1 に対応しているかを確認する
- 事前と事後の結果を比較可能に保つため、1 つの固定された基準録音と 1 つの固定された書き起こし環境を維持する

1. 精度が低い条件下で、同じリファレンス音声を両方の処理済み出力チャネル（Ch0 と Ch1）から録音し、同じモデルと設定で両方を文字起こしします。
2. 両方のチャネルを同じリファレンス文字起こしと比較してスコアリングします — 英語の場合は単語誤り率、中国語の場合は文字誤り率 — こうすることで、2 つのチャネルを同一の素材で比較できます。
3. アレイに到達するノイズを減らすか、音声レベルを上げて、デバイスでの音声対ノイズ比を改善し、そのうえで同じ録音とスコアリングを繰り返します。Seeed のベンチマークでは、このステップが最も大きく一貫した誤り率低下をもたらしました。
4. 自身の環境で測定結果が良かったチャネルを採用し、音響条件やファームウェアが変化するたびに、その選択を再確認します。

**成功基準：**

- 両方のチャネルが同じリファレンス文字起こしに対してスコアリングされ、各調整後の誤り率の変化が測定可能である
- アプリケーションで使用するチャネルは、想定されたデフォルトではなく、自身の環境で測定結果が良かったチャネルである

**注意事項：**

- Seeed のベンチマークでは、Ch1 − Ch0 の差の向きは音響条件によって変化し、ペアごとの比較のうち 95% 信頼区間がゼロを含まないものは少数でした。そのデータからチャネルの優先順位を一般化することはできません。
- このベンチマークは探索的なものであり、2 回のキャプチャセッションと条件ごと 6〜10 回の繰り返しを対象とし、多重比較補正は適用しておらず、計画されていたより広いマトリクスも未完了です。
- ベンチマークでは、いずれかの言語またはいずれかのチャネルが 80% 以上のスコアを示したすべてのキャプチャを除外しているため、公表されている数値は最悪ケースを表してはいません。
- ベンチマークの 0 dB および +10 dB のポイントは異なるサンプルに由来しており、その変化に対するペア間の区間は計算されていません。チャネル比較は、単一の DSP モジュールではなく、処理済み出力全体と認識パイプラインを反映しています。

**参考文献：**

- [reSpeaker XVF3800 USB 4-Mic Array official firmware and USB profiles](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)
- [reSpeaker XVF3800 USB 4-Mic Array product documentation](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/)

## ハードウェアの問題 {#hardware-issues}

### XVF3800 にスピーカーは内蔵されていますか？ {#external-speaker-required}

**対象：** ReSpeaker XVF3800 USB 4-Mic Array（XIAO ESP32S3 の有無を問わない）

**最終確認日：** 2026-09-01

いいえ。XVF3800 はマイクロフォンアレイ兼オーディオ処理デバイスであり、外部出力デバイスが必要です。ヘッドフォンまたはアクティブスピーカーには 3.5 mm ヘッドフォンジャックを使用し、対応する増幅スピーカーにはオンボードの JST スピーカーインターフェースを使用してください。

**前提条件：**

- 外部ヘッドフォン、アクティブスピーカー、または文書化されている JST 出力に対応したスピーカー
- アクティブな USB または I2S 動作モード用に設定された再生ソース

1. 公式ハードウェア概要に示されている 3.5 mm ヘッドフォン出力またはオンボード JST スピーカーインターフェースのいずれかを選択します。
2. 再生を開始する前に外部出力デバイスを接続します。
3. 既知の音声サンプルを再生し、USB モード使用時にはホスト側で XVF3800 出力を選択します。

**成功基準：**

- 接続された外部出力デバイスから音声が聞こえる
- マイクロフォンアレイ筐体単体から音が出ることは想定されていない

**注意事項：**

- 公開されているハードウェア概要には、3.5 mm ヘッドフォンジャックと JST スピーカーインターフェースが記載されていますが、内蔵スピーカーについては記載されていません。
- 現行の公式ハードウェアドキュメントを超えて、特定のコネクタのピン配置やサードパーティ製スピーカーモデルを推測しないでください。

**参考文献：**

- [Getting Started with ReSpeaker XVF3800](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/)

## 製品とビジネス {#product-and-business}

### XVF3800 USB 4-Mic Array は USB 経由で 48 kHz をサポートしますか？ {#usb-48-khz-support}

**対象：** Windows、Linux、または macOS 上で USB キャプチャに使用される ReSpeaker XVF3800 USB 4-Mic Array

**最終確認日：** 2026-08-31

はい。専用の公式イメージ `respeaker_xvf3800_usb_dfu_firmware_v2.1.0_48k2ch.bin` を使用してください。そのファイル名は、想定される 48 kHz・2 チャネルの USB プロファイルを示しています。汎用の v2.1.0 イメージから 48 kHz サポートを推測しないでください。

**前提条件：**

- 正確な `_v2.1.0_48k2ch.bin` イメージを含む、最新の公式ファームウェアリポジトリ一式
- XMOS USB-C ポートへの正常な USB データ接続と、ホストにインストールされた `dfu-util`
- アクティブな USB デバイスが公開しているフォーマットを表示・選択できる録音アプリケーション

1. 公式リポジトリ全体をクローンまたはダウンロードし、`xmos_firmwares/usb/respeaker_xvf3800_usb_dfu_firmware_v2.1.0_48k2ch.bin` を選択します。
2. 公式の XVF3800 アップデート手順に従って、そのイメージを USB DFU 経由で書き込み、デバイスの再起動を待ちます。
3. 再起動した USB オーディオデバイスが報告するフォーマットを確認します。ホストがその組み合わせを公開している場合にのみ、48,000 Hz と 2 チャネルのキャプチャを選択します。
4. 短いテスト録音を開始し、フォーマットネゴシエーションエラーなしにキャプチャが開始されることを確認します。

**成功基準：**

- フラッシュした XVF3800 イメージに対して、ホストが 48,000 Hz・2 チャネルのキャプチャモードを報告する
- 48,000 Hz で 2 チャネル録音がフォーマットネゴシエーションエラーなしに開始される

**注意事項：**

- 公式 USB 変更履歴では v2.1.0 が現行として示されており、現行ディレクトリには `v2.1.0_16k6ch` と `v2.1.0_48k2ch` の専用イメージも含まれています。
- リポジトリのディレクトリおよび変更履歴には、これらのバイナリに対する USB Audio Class ディスクリプタダンプは公開されていません。そのため、この FAQ は USB サンプル幅や追加のサンプルレート／チャネルの組み合わせについては言及しません。
- XVF3800 Wiki のファームウェア／サンプルレートのセクションは、本 FAQ の公開時までに、または公開と同時に修正する必要があります。なぜなら、そこにある古い「すべて 16 kHz」という記述が、現行のファームウェアディレクトリと矛盾しているためです。

**参考文献：**

- [Current official XVF3800 USB firmware directory](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)
- [Official XVF3800 USB firmware changelog](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/usb/changelog.md)
- [Official commit adding 48 kHz USB support](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/commit/8b0967aef554c2d270e70d428ed4e19f4ab811b8)

### XVF3800 は一意のデバイスシリアル番号を公開しますか？ {#unique-device-serial}

**対象：** 対応 USB ホストによって列挙される ReSpeaker XVF3800 USB 4-Mic Array

**最終確認日：** 2026-09-01

はい。現行の公式ハードウェア概要では、識別および複数デバイス管理のための一意のデバイスシリアル番号が内蔵されていると説明されています。USB または DFU の列挙時には、物理ユニットをアプリケーションレコードに関連付ける際、製品 SKU ではなくホストが報告するデバイスシリアルフィールドを使用してください。

**前提条件：**

- 対応する Windows、macOS、または Linux ホスト
- XMOS USB-C ポートへのデータ通信可能な接続
- DFU インターフェースが利用可能な場合の `dfu-util -l` など、ホスト側の列挙ツール

1. XMOS USB-C ポート経由で 1 台の XVF3800 をホストに接続します。
2. ホストの USB 列挙ツールを実行します。DFU インターフェースが見えている場合、`dfu-util -l` は `serial=` フィールドを表示します。
3. 報告されたシリアルを、ファームウェアバージョンや SKU ではなく、デバイス識別子として保存します。
4. 複数デバイスの展開では、各ユニットを個別に列挙し、アプリケーションが意図した物理ユニットを報告されたシリアルと正しく関連付けていることを確認します。

**成功基準：**

- 接続された XVF3800 に対して、ホストが空でないデバイスシリアルを報告する
- アプリケーションが、USB バス上の位置ではなく報告されたシリアルを用いて、意図したユニットを区別できる

**注意事項：**

- 公式製品ページでは、これを一意のデバイスシリアル番号と呼び、複数デバイス管理機能として紹介しています。
- この FAQ は Android 互換性やフルデュプレックス動作については言及しません。それらは元の質問の中でも別個で、サポート対象外の部分でした。

**参考文献：**

- [XVF3800 hardware overview](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#hardware-overview)
- [Official XVF3800 DFU guide](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/xmos_firmwares/dfu_guide.md)

<!-- RESPEAKER_FAQ_AUTO_END -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
