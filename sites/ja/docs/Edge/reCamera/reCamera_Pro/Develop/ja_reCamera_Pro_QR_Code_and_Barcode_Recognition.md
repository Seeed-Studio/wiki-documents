---
description: reCamera Pro を使用して QR コードとバーコードを認識し、ライブ動画をデバイスから直接、または Windows/Linux プロキシ経由で表示します。
title: reCamera Pro QR コードおよびバーコード認識
keywords:
  - エッジ AI
  - reCamera Pro
  - QR コード
  - バーコード認識
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_qr_code_barcode
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/16/2026
  author: yylin
createdAt: 2026-10-16
updatedAt: 2026-10-16
url: https://wiki.seeedstudio.com/ja/recamera_pro_qr_code_barcode/
---

# reCamera Pro QR コードおよびバーコード認識

このガイドでは、reCamera Pro 上で QR コードおよびバーコード認識アプリケーションのソース取得、ビルド、インストールを行い、ライブ動画をデバイスから直接、または Windows/Linux プロキシ経由のどちらで表示するかを選択する方法を説明します。構成は Seeed reCamera Pro Wiki で使用されているタスク指向の構造に従っています。参考資料：[reCamera Pro クイックスタートガイド](https://wiki.seeedstudio.com/ja/recamera_pro_getting_started/) および [SDK と最小アプリケーション](https://wiki.seeedstudio.com/ja/recamera_pro_sdk_setup/)。

## 始める前に

- reCamera Pro を、あなたのコンピュータから到達可能なネットワークに接続します。必要に応じて [Wi-Fi アクセスガイド](https://wiki.seeedstudio.com/ja/recamera_pro_wifi_access/) に従い、デバイスの IP アドレスを控えておきます。
- クロスコンパイルには Linux コンピュータ、または 64 ビット Linux ホスト上の WSL を使用します。SDK セットアップではターゲットビルドファイルを数ギガバイト分ダウンロードするため、インターネット接続と十分な空きディスク容量が必要です。
- 直接動画アクセスには、ネットワーク経由でデバイスに接続できるブラウザが必要です。
- Windows または Linux プロキシを使用する場合は、プロキシコンピュータに Nginx と FFmpeg をインストールします。Linux プロキシでは `libx264` エンコーダを含む FFmpeg ビルドが必要です。Windows 用 go2rtc 実行ファイルはこのリポジトリに含まれています。
- Web UI でデバイスの初回セットアップを完了します。以下のデプロイコマンドを使用する前に、**Device Info → Connection Settings** で SSH を有効にします。初回ログインとネットワーク設定については、Seeed の [クイックスタートガイド](https://wiki.seeedstudio.com/ja/recamera_pro_getting_started/) を参照してください。

## reCamera Pro へアプリケーションをデプロイする

Web ページを開く前に、reCamera Pro 上に認識アプリケーションをインストールして実行します。このプロジェクトは RV1126B/aarch64 をターゲットとしており、Windows や Linux コンピュータ向けにビルドされた通常の x86 プログラムはデバイス上では実行できません。

### 1. ソースを取得しクロスコンパイル SDK をインストールする

アプリケーションのソースは [yyling0101-a11y/recamera_pro_qr_code](https://github.com/yyling0101-a11y/recamera_pro_qr_code) でホストされています。ホストツールをインストールした後、アプリケーションソースと、RV1126B コンパイラおよびターゲット sysroot を提供する Seeed の別リポジトリ [reCamera Pro クロスコンパイル SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain) をクローンします。

```bash
sudo apt update
sudo apt install -y git cmake ninja-build pkg-config
mkdir -p ~/recamera_pro_workspace
cd ~/recamera_pro_workspace
git clone https://github.com/yyling0101-a11y/recamera_pro_qr_code.git
git clone https://github.com/Seeed-Projects/recamera_pro_toolchain.git
cd recamera_pro_toolchain
./scripts/setup.sh
source scripts/env.sh
bash scripts/check-sdk.sh
```

`setup.sh` は Seeed のリリースから SDK ツールチェーンと sysroot をダウンロードします。WSL を使用する場合、SDK は Linux ファイルシステム内に保持し、`/mnt/c` 以下には展開しないでください。

### 2. アプリケーションをビルドする

アプリケーションはターゲットの GStreamer、OpenCV、ZBar、Mosquitto ライブラリにリンクします。SDK の sysroot を使用し、デバイス用バイナリにはホスト x86 ライブラリを使用しないでください。

```bash
cd ~/recamera_pro_workspace/recamera_pro_qr_code
export RECAMERA_SDK_ROOT="$(cd ../recamera_pro_toolchain && pwd)"
source "$RECAMERA_SDK_ROOT/scripts/env.sh"
cmake -S cpp -B cpp/build -G Ninja \
  -DCMAKE_TOOLCHAIN_FILE="$RECAMERA_SDK_ROOT/cmake/recamera-pro-toolchain.cmake" \
  -DCMAKE_BUILD_TYPE=Release
cmake --build cpp/build -j4
file cpp/build/qr_pro
```

最後のコマンドは `ARM aarch64` を報告するはずです。CMake やリンカが GStreamer、OpenCV、ZBar、Mosquitto のヘッダー/ライブラリが見つからないと報告する場合は、SDK セットアップが完了していること、およびこれらのターゲットライブラリが sysroot 内に存在することを確認してください。クロスコンパイルエラーを解決するために x86 ホスト版をインストールしないでください。

### 3. デバイスを準備しアプリケーションをコピーする

USB データケーブルでデバイスをホストに接続して電源を入れるか、ホストと同じ LAN 上に配置します。デフォルトの USB アドレスは `192.168.42.1` です。異なる場合はネットワークに表示されるアドレスを使用します。初回セットアップ時に設定したデバイスパスワードを使用して、`root` として SSH ログインします。最初の SSH 接続時にはホストのフィンガープリントを確認してください。アプリケーションディレクトリを作成し、実行ファイル、Web ページ、デバイス側 go2rtc 設定、および起動スクリプトをコピーします：

```bash
ssh root@192.168.42.1 'mkdir -p /userdata/qr_rec'
scp cpp/build/qr_pro web/index.html web/go2rtc-recamerapro.yaml \
  scripts/S97qr_go2rtc scripts/S98qr_pro root@192.168.42.1:/userdata/qr_rec/
```

### 4. サービスをインストールして起動する

デバイスにログインして次を実行します：

```bash
ssh root@192.168.42.1
cd /userdata/qr_rec
cp go2rtc-recamerapro.yaml go2rtc.yaml
mkdir -p www
mv index.html www/index.html
chmod 755 qr_pro S97qr_go2rtc S98qr_pro
cp S97qr_go2rtc S98qr_pro /etc/init.d/
/etc/init.d/S97qr_go2rtc start
/etc/init.d/S98qr_pro start
```

`S97qr_go2rtc` は、デバイスに既にインストールされている go2rtc 実行ファイルを使用して、`rkipc` が生成する H.264 メインストリームを読み取ります。`S98qr_pro` は QR コードアプリケーションを起動します。`/etc/init.d/` 内の起動スクリプトは、デバイスの起動時に自動的に実行されます。`/userdata/qr_mqtt.env` に MQTT 認証情報が設定されている場合、アプリケーションの起動スクリプトがそれらを読み込みます。MQTT が設定されていない場合でも、動画と WebSocket 結果は利用可能なままです。

### 5. デバイスサービスを確認する

ブラウザで `http://192.168.42.1:8766/` を開きます。ページが読み込まれ、ステータスが「Results connected」に変わり、ライブ動画が表示されることを確認します。デバイス上のプロセスとログも確認できます：

```bash
ldd /userdata/qr_rec/qr_pro
ps | grep -E 'qr_pro|go2rtc'
tail -n 50 /userdata/qr_rec/qr_pro.log
tail -n 50 /userdata/qr_rec/qr_go2rtc.log
```

`ldd` が `not found` を報告しないことを確認します。デバイスイメージには、バイナリが使用する GStreamer、OpenCV、ZBar、Mosquitto のランタイムライブラリが用意されている必要があります。

直接動画アクセスでは、ブラウザのネットワークから TCP ポート 1986 と TCP/UDP ポート 8557 に到達できる必要があります。ページが読み込まれない場合は、まず `/userdata/qr_rec/qr_pro.log` を確認してください。ページとスキャン結果は動作するが動画が黒い場合は、go2rtc のログとこれらのポートを確認します。

### 6. 既存インストールを更新する

再ビルド後、コピー手順を再度実行し、その後デバイス上でサービスを再起動します：

```bash
/etc/init.d/S97qr_go2rtc restart
/etc/init.d/S98qr_pro restart
```

デプロイ後、アプリケーションはダイレクトモードで使用する準備が整います。Windows/Linux Nginx プロキシは動画を転送するための任意の方法であり、セットアップ手順については後続のセクションを参照してください。デバイスでのコマンドが完了したら、`exit` と入力して Linux/WSL ホストに戻ります。以下のホストプロキシ手順では、カレントディレクトリがクローンしたアプリケーションリポジトリであることを前提としています。

> 以下の例では、reCamera Pro に `192.168.42.1`、プロキシコンピュータに `192.168.3.151` を使用しています。自分のネットワーク上のアドレスに置き換えてください。

## 動画接続方法を選択する

| 方法 | URL | 使用する状況 |
| --- | --- | --- |
| デバイスから直接（デフォルト） | `http://DEVICE_IP:8766/` | コンピュータから reCamera Pro 上の TCP 1986 および UDP 8557 に到達できる場合 |
| Windows プロキシ | `http://WINDOWS_HOST_IP:18888/?video=proxy` | Windows Nginx と go2rtc を使用して動画を転送したい場合 |
| Linux プロキシ | `http://LINUX_HOST_IP:18888/?video=proxy` | Linux Nginx と go2rtc を使用して動画を転送したい場合 |

スキャン結果はページ右側に表示されます。Nginx は WebSocket の結果をデバイスへ転送します。プロキシモードでは、プロキシコンピュータ上の FFmpeg がデバイスの MJPEG ストリームを読み取り、ブラウザ向けに WebRTC 動画へ変換します。

## オプション 1: デバイスに直接接続する

1. アプリケーションとデバイス側 go2rtc サービスが実行中であることを確認します。
2. ブラウザで `http://DEVICE_IP:8766/` を開きます。
3. 右上のステータスが「Results connected」と表示されるまで待ち、ライブ動画が表示されることを確認します。

直接アクセスでは、Web ページとスキャン結果 WebSocket に TCP 8766、go2rtc シグナリングに TCP 1986、WebRTC メディアに TCP/UDP 8557 を使用します。ページと結果は動作するが動画が黒い場合は、ブラウザとデバイス間でポート 1986 および 8557 への接続性を確認してください。

## オプション 2: Windows コンピュータをプロキシとして使用する

1. Windows 用 Nginx と FFmpeg をインストールします。FFmpeg の `bin` ディレクトリを `PATH` に追加します。go2rtc 実行ファイルは `web/bin/windows/go2rtc.exe` に含まれています。
2. `web/go2rtc-windows.yaml` で、`webrtc.candidates` を Windows コンピュータの LAN IP アドレスに設定し、ストリーム URL がデバイス IP を使用していることを確認します。
3. `web/nginx.conf` で、`D:/path/to/recamera_pro_qr_code/web` を、このリポジトリの `web` ディレクトリへの絶対パスに置き換えます。`/ws` プロキシの転送先がデバイス IP を使用していることを確認します。
4. リポジトリのルートから PowerShell で go2rtc を起動し、そのターミナルを開いたままにします：

   ```powershell
   .\web\bin\windows\go2rtc.exe -config .\web\go2rtc-windows.yaml
   ```

5. 展開したディレクトリへのパスとリポジトリの設定ファイルを指定して Nginx を起動します。たとえば、Nginx が `C:\nginx` にインストールされ、リポジトリが `D:\recamera_pro_qr_code` にある場合：

   ```powershell
   cd C:\nginx
   .\nginx.exe -p C:/nginx/ -c D:/recamera_pro_qr_code/web/nginx.conf
   ```

   Windows ファイアウォールで、受信 TCP 18888、TCP 8557、および UDP 8557 が許可されている必要があります。Nginx 設定は、`mime.types` と `logs` ディレクトリを `-p` プレフィックスからの相対パスとして使用します。

6. ブラウザで `http://WINDOWS_HOST_IP:18888/?video=proxy` を開きます。

go2rtc API は `127.0.0.1:1986` のみで待ち受けており、Nginx がシグナリング要求をそこへ転送します。API ポートを LAN に直接公開しないでください。

## オプション 3: Linux コンピュータをプロキシとして使用する

以下の手順では Debian/Ubuntu を例として使用します。他のディストリビューションでは、適切なパッケージマネージャを使用して Nginx と FFmpeg をインストールしてください。

1. クローンしたプロジェクトのルートから、Nginx と `libx264` を含む FFmpeg ビルドをインストールします：

   ```bash
   sudo apt update
   sudo apt install nginx ffmpeg
   ffmpeg -hide_banner -encoders | grep libx264
   ```

   `grep` コマンドは `libx264` を一覧表示するはずです。表示されない場合は、ディストリビューションから完全な FFmpeg パッケージをインストールするか、x264 を有効にして FFmpeg をビルドしてください。

2. Linux 用の go2rtc 実行ファイルをダウンロードし、`/usr/local/bin/go2rtc` など PATH 上に配置します。Linux ホストの CPU アーキテクチャに合ったリリースを [go2rtc Releases](https://github.com/AlexxIT/go2rtc/releases) から選択してください。
3. Web ページをインストールします：

   ```bash
   sudo install -d /var/www/qr-pro
   sudo install -m 644 web/index.html /var/www/qr-pro/index.html
   ```

4. `web/go2rtc-linux.yaml` を編集します：`webrtc.candidates` を Linux プロキシコンピュータの LAN IP に設定し、`streams.qr` 内のデバイス IP を reCamera Pro のアドレスに置き換えます。この構成では、デバイスの MJPEG ストリームを読み取り、プロキシコンピュータの CPU 上で `libx264` を使ってエンコードします。
5. ターミナルで go2rtc を起動します：

   ```bash
   go2rtc -config web/go2rtc-linux.yaml
   ```

   ターミナルを開いたままにして、設定や FFmpeg のエラーがないことを確認してください。長期運用する場合は、同じコマンドを systemd サービスとして設定します。

6. `web/nginx-site.conf` を Nginx サイトとしてインストールします。`root` が `/var/www/qr-pro` を指していること、および `/ws` プロキシターゲットがデバイス IP を使用していることを確認してから、サイトを有効化し Nginx をリロードします。例：

   ```bash
   sudo cp web/nginx-site.conf /etc/nginx/sites-available/qr-pro
   sudo ln -s /etc/nginx/sites-available/qr-pro /etc/nginx/sites-enabled/qr-pro
   sudo nginx -t
   sudo systemctl reload nginx
   ```

   同じ名前のサイトリンクがすでに存在する場合は、その設定内容を確認して再利用してください。

7. プロキシコンピュータで、受信 TCP ポート 18888、TCP ポート 8557、および UDP ポート 8557 を許可します。ブラウザで `http://LINUX_HOST_IP:18888/?video=proxy` を開きます。

Windows と Linux のプロキシモードは、同じ Web ページと Nginx リバースプロキシのフローを使用します。go2rtc の設定は、FFmpeg 実行ファイルのパスと Nginx の Web ルートが異なります。プロキシエンコードはホストの CPU リソースを使用するため、ホストの CPU 能力が十分でない場合はダイレクトモードを使用してください。

## スキャン結果の利用

- スキャン結果はページ右側に表示されます。ブラウザが再接続した場合でも、現在の重複排除ウィンドウ内の結果を受信できます。
- デバイスは MQTT トピック `recamera/qr/result` に QoS 1 で結果を発行します。MQTT にはデバイス側での認証情報設定と、MQTT ブローカーへの接続が必要です。
- 視野内に留まり続けるバーコードは 1 回だけ報告されます。60 秒以上視野から外れた後であれば、再度報告される可能性があります。

## トラブルシューティング

| 症状 | 確認事項 |
| --- | --- |
| ページが開かない | Nginx、受信 TCP ポート 18888、およびプロキシコンピュータの IP アドレスを確認します |
| ページは開くが、スキャン結果が接続されない | Nginx の `/ws` ターゲット内のデバイス IP を確認し、アプリケーションが TCP 8766 をリッスンしていることを確認します |
| プロキシモードで映像が真っ黒になる | go2rtc が動作していること、FFmpeg が `http://DEVICE_IP:8766/video.mjpg` を読み取れること、および candidate IP がプロキシコンピュータのアドレスになっていることを確認します |
| ダイレクトモードで映像が真っ黒になる | デバイス側の go2rtc サービスと、TCP 1986 および TCP/UDP 8557 への接続性を確認します |
| `qr_pro` がすぐに終了する | `ldd /userdata/qr_rec/qr_pro` を実行し、`not found` がないか確認します。reCamera Pro SDK の sysroot に対して再ビルドし、ランタイムライブラリがインストール済みファームウェアと一致していることを確認します |
| Nginx がページを見つけられない | Windows/Linux の `root` パスを確認し、そこに `index.html` が存在することを確認します |
| Linux の FFmpeg がエンコーダーが利用できないと報告する | `ffmpeg -hide_banner -encoders` を実行し、`libx264` が一覧に含まれているか確認します |

## 詳しく見る

- [reCamera Pro クイックスタートガイド](https://wiki.seeedstudio.com/ja/recamera_pro_getting_started/)
- [reCamera Pro SDK と最小アプリケーション](https://wiki.seeedstudio.com/ja/recamera_pro_sdk_setup/)
- [go2rtc WebRTC ドキュメント](https://github.com/AlexxIT/go2rtc/blob/master/internal/webrtc/README.md)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
