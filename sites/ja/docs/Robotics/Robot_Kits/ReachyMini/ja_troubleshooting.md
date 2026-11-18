---
description: Reachy Mini のよくある問題、組み立て、接続、ハードウェア、SDK、エラーメッセージを網羅した包括的なトラブルシューティングガイドおよび FAQ です。
image: https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini-demo/reachymini-soarm.webp
title: トラブルシューティング & FAQ
slug: /reachymini_troubleshooting
keywords:
  - troubleshooting
  - faq
  - support
  - issues
  - fixes
  - assembly
  - connection
  - motors
  - sdk
  - errors
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-09-29'
url: https://wiki.seeedstudio.com/ja/reachymini_troubleshooting/
---

# トラブルシューティング & FAQ

Reachy Mini サポートページへようこそ。以下の質問をクリックすると、回答が表示されます。

## 🛠️ トラブルシューティング - よくある問題

**重要なトラブルシューティング - まず最初にお読みください。既知の問題のすべてを解決できます！**


<details>
<summary><strong>他のどの対処よりも前に、すべての問題に共通：アップデート & 再起動</strong></summary>

**最新のソフトウェアを使用していること、そしてロボットとコンピュータの両方を再起動したことを必ず確認してください。**
ロボットを再起動するには、OFF を押して 5 秒待ち、その後 ON を押します。この簡単な手順で、よく知られている一般的な問題の多くが解決します。

**ソフトウェアをアップデートする方法：**

- **Reachy Mini Control を使用している場合**
  「⚙️」設定タブから「Check for updates」を選択します。アップデートが利用可能な場合は「Update now」をクリックします。
- **クローンしたリポジトリを使用している場合**
  次のいずれかを必ず満たしてください：
  - 最新のタグ付きリリースを使用している
  - `main` ブランチが最新の状態である（`git pull` を実行）

**Wireless Reachy Mini** の場合：`reachyminios_check` を実行して、すべてが正常であることを確認してください（[Get Started](/ja/reachymini_platforms_reachy_mini_get_started) を参照）。

</details>


<details>
<summary><strong>ブートストラップやアップデートの失敗 / Python 環境の問題（Lite & Simulation）</strong></summary>

Reachy Mini Control が初回ブートストラップ中に失敗したり、仮想環境の作成で止まってしまう場合、またはアップデート後に Python 環境が壊れた状態になってしまった場合は、デスクトップアプリから仮想環境をリセットできます。

リセットオプションは 2 種類あります：

- **Reset apps environment** — `apps_venv`（インストール済みアプリが使用する環境）のみを再作成します。インストール済みアプリは再インストールが必要になります。アプリだけが起動しない、またはインストールできない場合は、まずこちらを使用してください。
- **Full Environment Reset** — すべての Python ファイルを削除し、すべてを再ダウンロードします（インタプリタ + 2 つの venv）。ブートストラップ自体が失敗する場合、または「Reset apps environment」で解決しない場合に使用してください。数分かかることがあります。

**これらのボタンの場所：**

- **接続前**（Finding Robot 画面）：右上の ⚙️ アイコンをクリックします。「Local environment (USB & Sim)」の下に「Reset apps environment」とフルリセットオプションのメニューが表示されます。
- **接続後**（USB / Simulation モード）：Settings オーバーレイを開き、「Environment」セクションに移動します。ここに「Reset Apps Environment」と「Full Environment Reset」ボタンがあります。

フルリセット後、デスクトップアプリは次回起動時に再度ブートストラップを実行します。

</details>


<details>
<summary><strong>モーター関連の問題</strong></summary>

これは次のような問題に関するものです：
- モーターが赤く点滅する、または反応しない / 動かない。
- モーターに「Overload Error」などのエラーが表示される。
- モーターが見つからない：「No motor found on port」「Missing motor」など。

これらの症状のいずれかがある場合は、モーター関連の問題を診断・解決するための詳細な手順について、[Motors diagnosis and troubleshooting guide](/ja/reachymini_troubleshooting_motors_diagnosis) を参照してください。

Reachy Mini Testbench アプリを使用すると、これらの問題を効果的に特定して解決するのに役立ちます。

</details>

<details>
<summary><strong>Electrical Shock Error</strong></summary>

Dynamixel モーターで Electrical shock error が発生する場合、電源に問題があるか、どこかでショートが起きていることを意味します。
フット PCB からヘッドまでのケーブルに損傷がないか確認してください。特に次のケーブルを確認してください：
- 電源ケーブル（黒 & 赤）
- モーター用 3 芯ケーブル（300mm、200mm、100mm、40mm）

これは、上で説明した「Motor blinking red or Overload Error」と同じ原因である場合もあります。

</details>

<details>
<summary><strong>マイクが動作しない</strong></summary>

次のような症状がある場合：
- 音声録音が動作しない / 無音になる
- 音声録音の結果がすべてゼロになる

マイクケーブルが上下逆に接続されている可能性があります。
- ケーブルが白と青の場合は、青い側が上になっているかどうか、組み立て手順をもう一度確認してください。
- ケーブルが黒の場合は、「Main Board」と書かれている側が上になっていることを確認してください（下の写真を参照）。
![mic_cable](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/black_fpc_cable.png)


ケーブルが正しく接続されているにもかかわらず問題が続く場合、マイクの FPC ケーブルが破損している可能性が高いです。この問題を解決するには、チュートリアル [How to change the FPC cable of the microphone of Reachy Mini?](/ja/reachymini_troubleshooting_change_mic_fpc_cable) を参照してください。

</details>


<details>

<summary><strong>音量が小さい</strong></summary>

- ロボットをバージョン 1.2.3 以降にアップデートしてください

詳細については、ドキュメントを参照してください：
[Getting Started](/ja/reachymini_platforms_reachy_mini_get_started)

</details>

<details>
<summary><strong>パーミッションエラー</strong></summary>

- ロボットをバージョン 1.2.3 以降にアップデートしてください
- ロボットを再起動してください

</details>

<details>
<summary><strong>アンテナが 90° または 180° 回転しているように見える</strong></summary>

これは製造上の問題です。

次のガイドに従えば、簡単に修正できます：
[Antenna repositioning guide](https://drive.google.com/file/d/1FsmNpwELuXUbdhGHDMjG_CNpYXOMtR7A/view?usp=drive_link)

</details>

<details>
<summary><strong>モーターがガタつく</strong></summary>

**アンテナのガタつき**

これは最も一般的なケースです。アンテナ（モーター 17 と 18）は、垂直位置（0°）に設定するとガタつく傾向があります。この角度では、ギアボックスのバックラッシュにより、モーターは倒立振り子のような不安定な平衡状態になります。摩擦が非常に小さい位置の周りで姿勢を補正し続けるため、振動が発生します。

最も簡単な対処法は、アンテナを数度だけオフセットすることです（通常は 10° 程度で十分です）。これにより、重力がわずかなバイアスとして働き、機械的な遊びを一方向に取り切ることで、ガタつきが解消されます。

これは現在 Reachy Mini のデフォルト動作になっています。詳細は [PR #952](https://github.com/pollen-robotics/reachy_mini/pull/952) を参照してください。

**PID 値の調整**

別の方法として、[PID Control 値を調整](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/config/hardware_config.yaml#L66C1-L67C1)することもできます。最適な値はロボット個体ごとに異なる場合があり、製造上のごくわずかな摩擦の違いでも挙動が変わることがあります。

まずは、モーター 10（足）、17 および 18（アンテナ）の P を 180 に下げてみてください。
効果がない場合は、同じモーターの D を 10 に上げてみることもできます。

</details>

<details>
<summary><strong>ヘッドが動くときにきしみ音や摩擦音がする</strong></summary>

ロボットのヘッドが動くときに高いきしみ音や摩擦音が聞こえる場合、Stewart プラットフォームのロッドにある球面ジョイント（ボールジョイント）のメンテナンスが必要になっている可能性があります。連結ロッドの周囲に黒い粉や残留物が見られることもあります。

これは時間の経過に伴う通常の摩耗です。[Spherical Joints Maintenance guide](/ja/reachymini_troubleshooting_spherical_joints_maintenance) に従って、ジョイントの清掃とグリスアップを行ってください。

</details>

<details>
<summary><strong>Lite バージョンで映像が暗い</strong></summary>

**➡️ クイック対処：カメラ設定で露光時間を調整する**

暗い映像を改善するには、オート露光を有効にするか、カメラ制御アプリケーションを使って露光時間を手動で延長してください。これらのアプリケーションは、露光やその他のカメラパラメータを調整するための直感的なインターフェースを提供します。

**推奨アプリケーション：**

- **macOS：** [CameraController](https://github.com/itaybre/CameraController) - USB カメラ制御用のオープンソース GUI アプリケーション
- **Linux：** qv4l2 - V4L2 カメラ制御用の Qt ベース GUI アプリケーション
  - インストール：`sudo apt install qv4l2`
- **Windows：** [Webcam Settings](https://www.softpedia.com/get/Internet/WebCam/Webcam-Settings-Tool.shtml) または [ManyCam](https://manycam.com/)（高度なカメラ制御用）

これらのアプリケーションを使用すると、直感的なグラフィカルインターフェースから露光時間、明るさ、その他のカメラパラメータを調整できます。

---

**➡️ 上級者向け：libuvc を使用した詳細なカメラ制御**

カメラパラメータをより厳密に制御したい上級ユーザーは、libuvc ベースのコマンドラインユーティリティを使用できます。これらのツールは、すべての UVC カメラコントロールへの低レベルアクセスを提供します。

暗さの問題を特に解決するには、これらのコマンドラインツールを使って `auto-exposure-priority=1` を設定してください。

**プラットフォーム別コマンドラインツール：**

- **macOS：** [uvc-util](https://github.com/jtfrey/uvc-util)

- **Linux：** [v4l2-ctl](https://manpages.debian.org/testing/v4l-utils/v4l2-ctl.1.en.html)
  - インストール：`sudo apt install v4l-utils`

- **Windows：** Windows には直接相当するツールはありません。

**注意：** これらのコマンドラインツールには技術的な知識が必要であり、利用可能なカメラパラメータは選択したツールによって異なる場合があります。変更を行う前に、`--help` を使用して利用可能なコントロールを一覧表示してください。

</details>

<details>
<summary><strong>パッケージの中身に部品が足りない</strong></summary>

まず、すべてを開封したことを確認してください。一部の部品はあらかじめ組み立てられています（例：ヘッド下部はすでにヘッド後部に取り付けられています）。

![head_parts](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/head_parts.jpg)

次に、組み立てガイドの部品リストを確認し、本当に部品が不足しているかどうかを確認してください。
100% 間違いなく部品が不足している場合は、手元にあるすべての部品の写真と注文番号または請求書番号を添えて、sales@pollen-robotics.com までご連絡ください。
その間、自分で 3D プリントできるように、[stl files](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/descriptions/reachy_mini/mjcf/assets) も用意されています。
</details>


<details>
<summary><strong>USB-C ケーブルで Wireless Reachy Mini に接続できない</strong></summary>

Wireless ユニットは、Lite バージョンのように USB 経由でロボットを公開しないため、USB-C ケーブルをノート PC に接続しても有効な接続にはなりません。
代わりに、次のようにしてください：

- ロボットを Wi-Fi ネットワークに参加させ、ノート PC 上の SDK クライアントを使ってリモート制御します。
- 組み込み Raspberry Pi 上で直接コードを実行したい場合は、SSH で接続してそこでスクリプトを実行してください（これは、アプリを公開 / インストールした後に Reachy Mini Control が行っていることと同じです）。
- テザリング接続の場合は、USB-C-イーサネットアダプタとイーサネットケーブルを使用します。これにより、Wi‑Fi を有線イーサネットに置き換えるだけで済みます。

</details>

<details>
<summary><strong>ワイヤレスアクセスポイントが表示されない - RPI が起動しない</strong></summary>
ヘッド内のボードには、特定の位置にしておく必要があるスイッチがあります。そうなっていない場合、AP は表示されません。組み立て中にこのスイッチが動いてしまったか、工場でのミスである可能性があります。
スイッチが「download」ではなく「debug」位置になっていることを確認してください。以下の写真を参照してください：

![switch_position](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/wireless_switch.png)

このスイッチが正しい位置にあるにもかかわらず AP がまだ見えない場合は、[reflash the RPI Iso tutorial](/ja/reachymini_platforms_reachy_mini_reflash_the_rpi_iso) に従って Raspberry Pi の iso を再フラッシュする必要があるかもしれません。

</details>

## 🚀 はじめに & 組み立て

<details>
<summary><strong>組み立てには通常どのくらい時間がかかりますか？</strong></summary>

ほとんどのテスターは、**1.5〜2時間**と報告しています。経験レベルによっては最大 4 時間かかることもあります。

</details>

<details>
<summary><strong>組み立て中に難しい工程はありますか？</strong></summary>

特にありません。テスターは、**楽しく、シンプルで、満足感がある**と表現しています。基本的な工具と根気があれば十分です。**ケーブルの配線**と**部品を正しいトルクで締めること**が最も難しい要素です。Reachy Mini Lite または Wireless を購入すると、印刷されたユーザーガイドが同梱されており、ビデオとデジタルガイドにもアクセスできます。
Reachy Mini 用ビデオ [BETA](https://www.youtube.com/watch?v=_r0cHySFbeY)、LITE、WIRELESS

Reachy Mini 用デジタル組み立てガイド [BETA](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)、LITE、WIRELESS

</details>

<details>
<summary><strong>組み立てを終えたあとにケーブルが 2 本とネジが数本余りました。これは正常ですか？</strong></summary>

はい、まったく問題ありません。
組み立て中に部品が破損したり紛失したりした場合に備えて、予備のケーブルとネジをキットに意図的に含めています。

それらを取り付ける必要はありません。

</details>

<details>
<summary><strong>初回起動時に Reachy Mini が動きません。何を確認すべきですか？</strong></summary>

* **電源:** 7V-5A の電源が接続されていることを確認してください。USB 接続だけではモーターを駆動するには不十分です。
* **ケーブル:** すべてのケーブルが奥までしっかり挿し込まれているか確認してください。電源ケーブルの緩みは「モーターが応答しない」エラーの一般的な原因です。
* **トラブルシューティングセクション:** このページ上部の「Essential Troubleshooting」セクションを参照してください。

</details>

<details>
<summary><strong>デーモンを手動で起動する必要がありますか？</strong></summary>

**いいえ**

- Reachy Mini (Wireless) では、デーモンは組み込みの Raspberry Pi 上ですでに動作しています。
- Reachy Mini Lite では、[デスクトップアプリ](/ja/reachymini_platforms_reachy_mini_lite_get_started) を使用できます。
- デスクトップアプリがあなたのシステム（例：ARM64、特殊なディストリビューション）で動作しない場合は、[Python SDK をインストールして使用](/ja/reachymini_sdk_installation) することができます。これは完全にサポートされた代替手段です！

</details>



## 🔌 接続 & Reachy Mini の制御

<details>
<summary><strong>ロボットを Wi‑Fi に接続するにはどうすればよいですか？</strong></summary>

Wi‑Fi への接続に関する詳細な手順については、[Reachy Mini Wireless ガイド](/ja/reachymini_platforms_reachy_mini_get_started) を参照してください。

</details>

<details>
<summary><strong>Wi‑Fi ホットスポットをリセットするにはどうすればよいですか？</strong></summary>

ロボットの Wi‑Fi ホットスポットをリセットする必要がある場合（たとえば接続できない、またはネットワークを変更したい場合）、[Wi‑Fi リセットガイド](/ja/reachymini_platforms_reachy_mini_reset) の手順に従ってください。

</details>

<details>
<summary><strong>シリアルナンバーラベルに書かれている Bluetooth PIN が機能しません</strong></summary>

PIN はシリアルナンバーの下 5 桁です。ハードウェアが交換されている場合、ラベルが実際と一致しないことがあります。SSH 経由でロボット上の本当のシリアルナンバーを読み取ってください：

```bash
dfu-util -l
```

`Reachy Mini Audio DFU` 行の `serial` フィールドを使用します。例えば `serial="xxxxxxxx12345"` であれば、PIN は `12345` です。

</details>

<details>
<summary><strong>ロボットには Web API はありますか？</strong></summary>

はい。デーモンは REST API（FastAPI）と WebSocket をサポートしています。
* **ドキュメント:** `http://localhost:8000/docs`（デーモンが動作しているときに利用可能）。
* **機能:** 状態取得、関節の移動、デーモンの制御。

API を使用してロボットを制御し、その状態を取得したり、デーモン自体を制御したりできます。API は [FastAPI](https://fastapi.tiangolo.com/) と [pydantic](https://docs.pydantic.dev/latest/) モデルを使って実装されています。

これにより、ロボットとやり取りするために必要なすべてのエンドポイントが提供されます。例えば次のようなものです：

- ロボットの状態の取得（関節位置、モーターステータスなど）
- ロボットの関節を動かす、または特定のポーズを設定する

API は OpenAPI を使ってドキュメント化されており、デーモンが動作しているときは http://localhost:8000/docs で利用可能なすべてのルートにアクセスし、テストすることができます。また、http://localhost:8000/openapi.json で生の OpenAPI スキーマにアクセスすることもできます。

これは、お好みのプログラミング言語やフレームワーク向けのクライアントコードを生成したり、AI アプリケーションに接続したり、さらには MCP サーバーを作成したりしたい場合に役立ちます。

**WebSocket サポート**

API はリアルタイム更新のための WebSocket 接続もサポートしています。例えば、関節状態の更新を購読できます：

```
let ws = new WebSocket(`ws://127.0.0.1:8000/api/state/ws/full`);

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
};
```

</details>

<details>
<summary><strong>なぜ仮想環境（.venv）が必要なのですか？</strong></summary>

SDK のインストール時にパッケージの競合を防ぐのに役立ちます。

</details>

<details>
<summary><strong>reachy-mini.local が解決できません</strong></summary>

ワイヤレスユニットは mDNS を通じて `reachy-mini.local` として自らをアドバタイズします。これはほとんどの家庭用およびオフィスネットワークで動作しますが、一部の企業ネットワーク、カンファレンス会場、ホテルのネットワークでは失敗することがあります。

もし `reachy-mini.local` が解決できない場合：
- ルーターの DHCP クライアント一覧でロボットの IP アドレスを確認してください。
- Reachy Mini Control アプリを使用してください。ローカルネットワーク上でロボットを検出できます。
- 最後の手段として、サブネットをスキャンします：
```bash
for i in $(seq 1 254); do
  curl -sf --connect-timeout 0.3 "http://192.168.1.${i}:8000/api/daemon/status" > /dev/null 2>&1 && echo "Found: 192.168.1.${i}"
done
```
ネットワークに合わせて `192.168.1.` プレフィックスを調整してください。

</details>

<details>
<summary><strong>カンファレンス／ホテルの WiFi でロボットとコンピュータが通信できません</strong></summary>

多くのカンファレンスやホテルの WiFi ネットワークでは、**クライアント分離**が有効になっており、同じネットワーク上のデバイス同士が通信できないようになっています。症状としては、両方のデバイスが WiFi に接続され、同じサブネット上の IP アドレスを持っているにもかかわらず、互いの HTTP エンドポイントに到達できない、というものです。

**回避策:** モバイルフォンのホットスポットを使用します。ロボットとコンピュータの両方をそのホットスポットに接続してください。これにより、デバイス同士が互いを認識できるシンプルなネットワークが提供されます。

別の方法として、USB-C-イーサネットアダプタとイーサネットケーブルを使用して、ロボット（Wireless バージョン）に直接接続します。

</details>

<details>
<summary><strong>中国から HuggingFace サービスにアクセスするには？</strong></summary>

このミラーを使用できます：https://hf-mirror.com/

次の環境変数を設定する必要があります：
```bash
export HF_ENDPOINT=https://hf-mirror.com/
```

PyPI や GitHub などのサービスにアクセスするためにも、ミラーを使用する必要がある場合があることに注意してください。

</details>

<details>
<summary><strong>HTTP プロキシの背後で Reachy Mini を使用するには？</strong></summary>

Reachy Mini は、すべての送信 HTTP(S) トラフィックに対して標準的なプロキシ環境変数を尊重します。これは Hugging Face 認証、アプリストアのリスト表示、アプリのインストールと更新、そして WebRTC シグナリングサーバーに適用されます：

```bash
export HTTP_PROXY=http://proxy.example.com:3128
export HTTPS_PROXY=http://proxy.example.com:3128
export NO_PROXY=localhost,127.0.0.1,reachy-mini.local
```

ローカルアドレスは `NO_PROXY` に残しておき、デーモン API（Reachy Mini Control が使用）と mDNS 検出がプロキシを経由せずに到達可能な状態を維持してください。

Wireless バージョンでは、これらの変数はシェルだけでなくデーモンサービスからも見える必要があります。ユニットに追加して再起動してください：

```bash
sudo systemctl edit reachy-mini-daemon
```

次を追加して保存します：

```ini
[Service]
Environment="HTTP_PROXY=http://proxy.example.com:3128"
Environment="HTTPS_PROXY=http://proxy.example.com:3128"
Environment="NO_PROXY=localhost,127.0.0.1,reachy-mini.local"
```

```bash
sudo systemctl restart reachy-mini-daemon
```

既知の制限事項：

- テストでカバーされているのは認証なし HTTP プロキシのみです。認証が必要なプロキシ（`http://user:password@host:port`）は、そのまま下層のクライアントに渡され、CI では検証されていません。
- SOCKS プロキシはサポートされておらず、プロキシ URL はプレーンな `http://` でなければなりません（HTTPS はその中をトンネリングされます）。`https://` プロキシ URL は警告とともに無視されます。
- `ALL_PROXY` は考慮されません。`HTTP_PROXY` と `HTTPS_PROXY` を明示的に設定してください。
- これらの呼び出しに対して `~/.netrc` が参照されることはありません。プロキシはリクエストごとに明示的に解決されます。
- アプリはそれぞれ独自のプロセスで実行され、デーモンの環境を継承しますが、独自にネットワーク呼び出しを行うアプリは、自身でプロキシを尊重する責任があります。

</details>

<details>
<summary><strong>中国で会話アプリを動作させるには？</strong></summary>

Reachy Mini の会話アプリは OpenAI gpt-realtime API に依存しており、中国からはアクセスできない可能性があります。

現時点での最良の回避策は、あなたのマシン（Lite バージョン）、ロボット（Wireless バージョン）、またはルーターに VPN を設定することです。

VPN のルーティングルールを設定する際は：

1) ローカルネットワークトラフィックを除くトラフィックを VPN 経由にし、デバイスがローカルネットワークから引き続きアクセス可能な状態を保ってください。

次をホワイトリストに追加する必要があります：
- ローカル LAN の IP レンジ（ネットワーク構成に応じて、192.168.0.0/16、192.168.1.0/24 など）。
- 次のポート：
  - 22 (SSH)
  - 8000 (Reachy Mini デーモン)
  - 5353 TCP/UDP (mDNS / ローカル検出)

これにより、ロボットはローカルで到達可能かつ検出可能な状態を維持し、mDNS（`reachy-mini.local`）もネットワーク上で引き続き動作するはずです。

2) VPN が選択的ルーティングをサポートしている場合は、すべての HTTPS トラフィックをトンネリングするのではなく、必要な外部サービスのみを VPN 経由にする方が良い方法です。

可能であれば、VPN を `huggingface.co` と `api.openai.com` に対してのみ使用するように設定してください。

これによりネットワークへの副作用を最小限に抑え、ローカルサービスを通常どおり動作させることができます。

Wireless バージョンの場合、ロボット上で VPN を設定したら、変更を反映させるためにデーモンを再起動してください：
```
sudo systemctl restart reachy-mini-daemon
```
同じネットワーク上のデバイスからロボットに到達できるか確認するには、次を実行します：
```
ping reachy-mini.local
```

_オープンウェイトモデルに基づくアプローチも開発中です。続報をお待ちください！_

</details>


## 🤖 ハードウェア、モーター & 制限

<details>
<summary><strong>ハードウェアについての詳しい情報はどこで見られますか？</strong></summary>

ロボットのハードウェアコンポーネントの詳細については、[Reachy Mini Hardware ページ](/ja/reachymini_platforms_reachy_mini_hardware)を参照してください。

</details>

<details>
<summary><strong>安全制限（頭部 & ボディ）はどうなっていますか？</strong></summary>

これらの制限範囲外のポーズを指令すると、ロボットは自動的に最も近い安全なポーズにクランプされます。

* **ボディヨー:** [-180°, 180°]。
* **ヘッドピッチ/ロール:** [-40°, 40°]。
* **ヘッドヨー:** [-180°, 180°]。
* **複合制限:** `body_yaw` と `head_yaw` の差は **[-65°, 65°]** の範囲内でなければなりません。

</details>

<details>
<summary><strong>なぜモーターが「ぐにゃぐにゃ」または「固い」のですか？（コンプライアンス）</strong></summary>

* **`enable_motors()`**: モーター **ON**（固い）。ロボットは姿勢を保持します。
* **`disable_motors()`**: モーター **OFF**（ぐにゃぐにゃ）。手で動かすことができます。
* **`make_motors_compliant()`**: モーターは **ON だがソフト**。デモンストレーションによる教示に便利です。

</details>

<details>
<summary><strong>モーターのパラメータにはどうやってアクセスできますか？</strong></summary>

1. [scan_motors.py スクリプト](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/tools/scan_motors.py)を使ってモーターをスキャンする方法を参照できます。

- ロボットが Lite の場合は、スクリプトを自分のコンピュータ上で直接実行できます：
```bash
python -m reachy_mini.tools.scan_motors
```
- ロボットが Wireless の場合は、ロボットに ssh 接続します：
```bash
ssh pollen@reachy-mini.local
```
- venv を有効化します：
```bash
source /venvs/mini_daemon/bin/activate
```
- そしてスクリプトを実行します（そのためにはモーターの電源が入っている必要があります！）：
```bash
python -m reachy_mini.tools.scan_motors --wireless
```
- 検出されたモーターの一覧が表示されるはずです。すべてのモーターはボーレート 1000000 で、ID は 10,11, 12, 13, 14, 15,17, 18 になっている必要があります。いくつか欠けている場合は、ケーブルを再度確認してください。異なる ID やボーレートのモーターがある場合は、サポートに連絡してください。

正しい出力の例：
```
Trying baudrate: 9600
No motors found at baudrate 9600
Trying baudrate: 57600
No motors found at baudrate 57600
Trying baudrate: 115200
No motors found at baudrate 115200
Trying baudrate: 1000000
Found motors at baudrate 1000000: [10, 11,12,13, 14, 15, 16, 17, 18]
```
2. Lite: Dynamixel Wizard を使用してモーターのパラメータを読み取ることもできます。ガイドは[こちら](/ja/reachymini_platforms_reachy_mini_lite_wizard)を参照してください。

</details>

<details>
<summary><strong>モーターがしばらくすると反応しなくなります。</strong></summary>

* 電源アダプタの接続を確認してください。
* モーターが熱保護モード（過熱）に入った可能性があります。一度電源を切ってから入れ直してください。
* SDK を更新すること（`pip install -U reachy-mini`）で解決したユーザーもいます。
* モーターの LED が赤く点滅している場合は、上記の「Motor blinking red or Overload Error」セクションを参照してください。

</details>

<details>
<summary><strong>バッテリーには安全機能がありますか？</strong></summary>

Wireless には適切なバッテリーチャージャーが含まれています。
バッテリーには温度センサー付きの BMS も内蔵されています。

</details>

<details>
<summary><strong>残りのバッテリーはどうやって確認できますか？</strong></summary>

バッテリー残量を確認する手段は用意されておらず、これは設計上の既知の制限です。

「バッテリー残量低下」を示す LED インジケータのみがあります。充電が必要になると点灯します。（緑 -> オレンジ -> 赤）

</details>

<details>
<summary><strong>バッテリーの取り外し方</strong></summary>

- まず緑の LED が点灯していないことを確認します。
- 底面のネジ 3 本を外し、足部を少し引き出します。
![remove_foot](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/remove_foot.png)
- バッテリーを取り外せるように、示されているコネクタ（赤い矢印）を抜きます。バッテリーを固定するための両面テープが付いているはずなので、取り外しに少し力が必要な場合があります。
![battery_location](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/battery_connector.png)
- 再組み立ての際は、これらの手順を逆順で行ってください。ケーブルを挟み込まないように注意してください。

</details>

<details>
<summary><strong>一部の公式モーション中に頭がボディに触れることがあります</strong></summary>

この挙動は想定されたものであり、ハードウェアやソフトウェアのバグではありません。
ただし紛らわしい可能性があるため、この接触を避けるようにそれらのモーションを更新する予定です。

</details>

<details>
<summary><strong>外観を変更できますか（スキン/CAD）？</strong></summary>

* **CAD:** 完全な STEP ファイルはまだ公開されていませんが、今後公開する予定です。それまでの間は、リポジトリの [assets フォルダ](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/descriptions/reachy_mini/mjcf/assets)にいくつかの STL ファイルがあります。
* **スキン:** はい、コミュニティによってカスタムビルドが作成されています。いくつかの「スキン」STEP ファイルは Discord の ["Pimp my Reachy Mini"](https://discord.com/channels/519098054377340948/1453340883775651861) チャンネルで共有されています。

</details>

<details>
<summary><strong>マイクのフラットケーブルが壊れてしまいました</strong></summary>

マイクケーブルの仕様は次のとおりです：
- FFC/FPC フラットフレキシブルケーブル
- 12 ピン
- 0.5mm ピッチ
- タイプ A（同じ側にコネクタ）
- 長さ 15mm

マイクケーブルの交換品を探している場合の参考例をいくつか挙げます：
- [Amazon](https://www.amazon.fr/dp/B09TR4X1BP?ref=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&ref_=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&social_share=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z)
- [Farnell](https://fr.farnell.com/molex/15020-0127/cordon-ffc-12-cond-152mm-blanc/dp/3862090)

</details>


## 🐍 SDK、アプリ & プログラミング

<details>
<summary><strong>Python からはどうやって接続しますか？</strong></summary>

`ReachyMini` クラスを使用します。

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
    print(mini.state)
```

</details>

<details>
<summary><strong>新しいアプリはどうやって作成しますか？</strong></summary>

app assistant CLI を使用します：

```bash
reachy-mini-app-assistant create my_app_name /path/to/destination --publish
```

完全なガイドはこちらを参照してください: [Building & Publishing Apps](/ja/reachymini_sdk_apps) — アプリ構造、テスト、公開、デバッグ、デプロイについて説明しています。

</details>

<details>
<summary><strong>アプリが黙ってクラッシュする、または起動しません</strong></summary>

アプリが環境にインストールされていないパッケージに依存している場合、インポート時にエラーが表示されずにクラッシュします。手動でインポートをテストしてください：

```bash
# On Wireless
ssh pollen@reachy-mini.local "/venvs/apps_venv/bin/python3 -c 'from my_app.main import MyApp'"

# On Lite / local
python -c "from my_app.main import MyApp"
```

さらなるデバッグのヒント（ログの確認、よくある落とし穴）については、[Debugging Apps](/ja/reachymini_sdk_apps#debugging-apps) を参照してください。

</details>

<details>
<summary><strong>Reachy Mini Control から直接アプリをインストールできますか？</strong></summary>

はい！アプリがネイティブであれば Reachy Mini Control から直接インストールでき、Web ベースであればお気に入りに追加できます。

</details>

<details>
<summary><strong>Windows でアプリのインストールがすべて失敗します！</strong></summary>

Windows でシンボリックリンクを作成する権限が不十分であることが原因の可能性があります。環境変数 `HF_HUB_DISABLE_SYMLINKS_WARNING` を 1 に設定すると、失敗の原因となっている警告を抑制できます。

ターミナルで次を実行します：
```powershell
set HF_HUB_DISABLE_SYMLINKS_WARNING=1
```

</details>

<details>
<summary><strong>Hugging Face からのアプリインストールが失敗します。</strong></summary>

SDK を更新してください。初期バージョンには Space インストールに関するバグがありました。

```bash
pip install -U reachy-mini
```

</details>

<details>
<summary><strong>シミュレーションモードはありますか？</strong></summary>

はい、MuJoCo 経由で利用できます。まだ開発中ですが、`--sim` フラグを付けてコードを実行するか、物理演算なしでロジックだけをテストする場合は `ReachyMini(media_backend="no_media")` を使用できます。

</details>

<details>
<summary><strong>Wireless 上でアプリをどうやってデバッグしますか？</strong></summary>

組み込みコンピュータに SSH 接続し、アプリをクローン（またはコピー）して手動で実行します。これは Reachy Mini Control がアプリを起動するときに行っていることを再現します。

```bash
ssh pollen@reachy-mini.local
# password: root
cd your_app_name
python your_app_name/main.py
```

GUI は通常のアドレス（例：`http://reachy-mini.local:8042`）で開きます。

</details>



## 🕹️ ロボットを動かす

<details>
<summary><strong>頭部はどうやって動かしますか？</strong></summary>

`create_head_pose` と一緒に `goto_target` を使用します：

```python
from reachy_mini.utils import create_head_pose

# ... inside with ReachyMini() as mini:
mini.goto_target(head=create_head_pose(yaw=-10, pitch=20))
```

</details>

<details>
<summary><strong>`goto_target` と `set_target` の違いは何ですか？</strong></summary>

* **`goto_target`**: **スムーズ**。時間をかけて動きを補間します（デフォルト 0.5 秒）。ジェスチャーに最適です。
* **`set_target`**: **即時**。ターゲットを即座に設定します。高頻度制御（テレオペレーション、数式で定義された軌道）に最適です。

</details>

<details>
<summary><strong>動きを記録して再生するにはどうすればよいですか？</strong></summary>

**記録:**
制御ループの前後で `start_recording()` と `stop_recording()` を呼び出します。

```python
mini.start_recording()
# ... move robot ...
move = mini.stop_recording()
```

**再生:**
`RecordedMoves` クラスを使用して、[Hugging Face library](https://github.com/pollen-robotics/reachy_mini_dances_library) から動きを読み込みます。

```python
mini.play_move(recorded_moves.get("dance_1"))
```

</details>

<details>
<summary><strong>ロボットの動きがぎこちないです。制御ループは正しく動いていますか？</strong></summary>

デーモンのステータスを確認することで、モーター制御ループが正しく動作しているか確認できます：
- SDK 経由
```python
mini = ReachyMini()
print(mini.client.get_status())
```
- Lite では `http://localhost:8000/docs`、Wireless では `http://reachy-mini.local:8000/docs` の REST API 経由（`/api/daemon/status` エンドポイントを探してください）

およそ 50Hz（周期約 20ms）前後の値が表示されるはずです：
```python
{
  ...
"motor_controller": "ControlLoopStats(period=~19.99ms, read_dt=~1.94 ms, write_dt=~0.19 ms)"
  ...
}
```

周期が 20ms よりかなり大きい場合、制御ループの速度が十分ではないことを意味します。これは次のような原因が考えられます：
- コンピュータの CPU 負荷が高い（例：他のアプリが CPU を使いすぎている）。
- （Lite のみ）USB レイテンシが高い（シリアルポートの設定を試してください）。

</details>



<details>
<summary><strong>ロボットが動かず、エラーも報告されません</strong></summary>

モーションコマンドが受け付けられているのに何も起こらない場合、モーターが無効になっている可能性が高いです。トルクがオフでもデーモンはすべてのコマンドを受け付け、成功を報告し、エラーなしで 50Hz で制御ループを動かし続けるため、ロボットが動いていないことを示すものが何もありません。

モーターが無効のままになるよくある状況は 2 つあります：
- アプリが停止した後、またはデーモンが起動した直後で、ロボットがスリープ状態でぐったりしている。
- `wake_up()` が単独で呼び出された。ウェイクアップポーズ、エモート、サウンドは再生されますが、トルクは有効になりません。

現在のモードを確認します：

```python
mini = ReachyMini()
print(mini.client.get_status().backend_status.motor_control_mode)
```

`MotorControlMode.Disabled` と表示されている場合は、ロボットを動かす前にモーターを有効にします：

```python
mini.enable_motors()
mini.wake_up()
```

ぐったりしたロボットは、頭をスリープ位置で下げて体に近づけたままになっていることに注意してください。このときカメラはシェルの内側を向いており、露出とゲインが最大になった暗くほぼ一様な画像を返します。そのため、壊れたカメラと勘違いしやすくなります。カメラを調べる前に、頭がきちんと上がっているか確認してください。

</details>

## 👁️ ビジョン & オーディオ

<details>
<summary><strong>音量が小さすぎる（Linux）</strong></summary>

1.  `alsamixer` を実行します。
2.  **PCM1** を 100% に設定します。
3.  **PCM,0** を使って全体の音量を調整します。

永続化するには：
```bash
CARD=$(aplay -l | grep -i "reSpeaker" | head -n1 | sed -n 's/^card \([0-9]*\):.*/\1/p')
amixer -c "$CARD" set PCM,1 100%
sudo alsactl store "$CARD"
```

これは XVF3800 ベースのサウンドカードに関する[既知の問題](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/02_setting_up_the_hardware.html#low-volume-of-playback-audio-on-linux-for-project-ua)です。

</details>

<details>
<summary><strong>音質が良くない / スピーカーの音が「こもって」聞こえます。</strong></summary>

デーモンはすでに、ヘッドシェルの音響的な着色を補正するためのデフォルトのイコライザーを適用しています。それでも音が好みでない場合は、デーモンの設定ファイル内の `speaker_eq_gains` エントリを通じてバンドごとのゲインを調整するか、EQ を無効化できます。

</details>

<details>
<summary><strong>カメラフレームを取得するにはどうすればよいですか？</strong></summary>

`media` オブジェクトを使用します。

```python
with ReachyMini() as mini:
    frame = mini.media.get_frame()
    # Returns a numpy array (BGR format, compatible with OpenCV)
```

</details>

<details>
<summary><strong>マイク / スピーカーを使うにはどうすればよいですか？</strong></summary>

```python
# Get audio
sample = mini.media.get_audio_sample()

# Play audio
mini.media.push_audio_sample(numpy_chunk)
```

</details>

<details>
<summary><strong>生のマイク出力を取得できますか？</strong></summary>

はい — [6-channel firmware](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/firmware) をインストールしてください。

</details>

<details>
<summary><strong>Reachy に何かを見させるにはどうすればよいですか？</strong></summary>

* **2D（画像）:** `mini.look_at_image(x, y)` - (0,0 は左上)。
* **3D（ワールド）:** `mini.look_at_world(x, y, z)` - ロボット座標系での座標。

</details>

<details>
<summary><strong>顔追跡が遅く感じられます。</strong></summary>

性能は照明条件に大きく依存します。顔が十分に明るく照らされていることを確認してください。オンデバイスアプリケーションでは、LOCAL バックエンド（GStreamer IPC）が最も低いレイテンシを提供します。

</details>

<details>
<summary><strong>カメラにピントが合いません。</strong></summary>

look_at のサンプルを実行すると、カメラの前に手をかざすことで、カメラがピントを合わせているかどうかを簡単に確認できます。もしそうでなければ、カメラが物理的にブロックされている可能性があります。カメラは黒い部分に 4 本のネジで固定されているので、それらをごくわずかに、約 1/8 回転だけ緩めてください。

![camera_focus](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/troubleshooting_screw_focus_camera.png)

</details>

<details>
<summary><strong>カメラが検出されず（すべてのアプリが起動に失敗する）</strong></summary>

頭部と胴体の動きは動作しますが、すべてのアプリが起動に失敗し、多くの場合カメラに関するエラーではなく接続拒否で終わります。デーモンは起動時にカメラを必要とするため、カメラが見えていないとメディアスタック全体が巻き添えでダウンします。

まずカメラのフラットケーブルを確認してください：両端でしっかり奥まで差し込まれているか、向きが正しいかを確認します。マイクケーブルと同じルールで、青い面を上にするか、「Main Board」と書かれた面を上にします。差し直す前にロボットの電源を切り、その後電源を入れ直してください。

Wireless で確認するには：

```bash
rpicam-hello --list-cameras     # lists imx708_wide when the camera is seen
dmesg | grep "camera module ID" # one line per detected sensor
```

正常なロボットでは、`imx708 0-001a: camera module ID 0x0302` のような出力が表示されます。どちらのコマンドでもセンサーが報告されない場合、本当にカメラが見えておらず、ケーブルが最初に疑うべきポイントです。

> **注:** `dmesg` に `failed to read chip id 708, with error -5` という行があっても、それは正常であり異常の兆候ではありません。CM4 は 2 つの CSI ポートを持ち、Reachy Mini はそのうち 1 つしか使用しないため、未使用ポートは起動時のプローブに必ず失敗します。`camera module ID` 行がない場合にのみ、カメラが欠落していることを意味します。

</details>

<details>
<summary><strong>サウンドシステムが動作しているか確認するには？</strong></summary>

### Reachy Mini Lite バージョン

Lite バージョンをテストする最も簡単な方法は、コンピュータから *Pollen Robotics Reachy Mini Audio* デバイスを直接使用して、正しく動作しているか確認することです。

### Reachy Mini Wireless バージョン

Wireless バージョンでは、次の GStreamer コマンドを使用して音声の録音と再生をテストできます：

Wireless バージョンの場合、次のコマンドを使用できます：
```bash
# record a sound
gst-launch-1.0 -e alsasrc device="reachymini_audio_src" ! audioconvert ! audioresample ! wavenc ! filesink location="test.wav"
# playback the recording
gst-launch-1.0 filesrc location=test.wav ! wavparse ! audioconvert ! alsasink device=reachymini_audio_sink
#playback a test sound (pink noise)
gst-launch-1.0 audiotestsrc wave="pink-noise" ! audioconvert ! audioresample ! alsasink device="reachymini_audio_sink"
```

**高度なテスト:**
エコーキャンセル性能をテストするために、録音しながら同時にサウンドを再生することができます。これにより、マイクアレイがスピーカーからのエコーを適切に処理し、打ち消しているかを確認できます。

**トラブルシューティングのヒント:**
- ホームディレクトリに `.asoundrc` ファイルが存在することを確認する
- マイクが検出されているか確認：`arecord -l`
- スピーカーが検出されているか確認：`aplay -l`
- audio-board の設定で `No Reachy Mini Audio USB device found!` と表示されて失敗する場合、
  ReSpeaker オーディオボードが接続されているマシン上で SDK コードを実行してください。
  Lite の場合はあなたのコンピュータ、Wireless の場合はロボット本体です。

</details>



## 🔧 特定のエラーメッセージと対処法

<details>
<summary><strong>Motor &#39;&lt;name&gt;&#39; hardware errors: [&#39;Input Voltage Error&#39;]</strong></summary>

Reachy Mini ではより高い電圧を使用していますが、これは意図的なものです :)

</details>



<details>
<summary><strong>Error: "OSError: PortAudio library not found"</strong></summary>

このエラーは、`sounddevice` を直接使用したとき（例：`release_media()` を呼び出した後）に発生します。システム依存パッケージをインストールしてください：

```bash
sudo apt-get install libportaudio2
```

</details>

<details>
<summary><strong>Warning: "Circular buffer overrun"（シミュレーション / Mujoco）</strong></summary>

これは、ロボットに接続しているのにビデオフレームを消費していない場合に、バッファが一杯になって表示されます。
* **対処法:** ビデオが不要な場合は、`ReachyMini(media_backend="no_media")` で初期化してください。

</details>

<details>
<summary><strong>Conversation アプリがアップデート後に起動時クラッシュする（カスタムプロファイル）</strong></summary>

以前のバージョンで Conversation アプリ用のカスタムプロファイルを作成しており、アップデート後にアプリがすぐ終了してしまう場合、アプリはもはや存在しないパス上のプロファイルを探しています。最近のリリースでデフォルトのプロファイル位置が変更されたためです。

**症状** — ログの末尾が `prompts.py` から送出された `SystemExit: 1` で終わります。例：
```
File ".../reachy_mini_conversation_app/prompts.py", line 88, in get_session_instructions
    sys.exit(1)
SystemExit: 1
```

**推奨される対処法:** Reachy Mini Control デスクトップアプリから **Reset apps environment** をクリックします（上記「Bootstrap or update fails / Python environment issues」を参照）。その後、アプリを再インストールする必要があります。

**代替案（上級者向け）:** ロボットに SSH 接続します（Wireless: `ssh pollen@reachy-mini.local`）し、アプリ用 venv を直接削除してから Conversation アプリを再インストールします：
```bash
rm -rf /venvs/apps_venv
```

</details>


<details>
<summary><strong>マイク入力がない / 音源方向推定ができない（ベータ版ユニット）</strong></summary>

* **入力なし:** ファームウェア 2.1.3 が必要です。[update script](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/firmware/update.sh) を実行してください。
* **方向が出ない:** ファームウェア 2.1.0 以上が必要です。
* フラットフレキシブルケーブルが正しい向きで取り付けられているか確認してください（組み立てガイドのスライド 45〜47）。

</details>

<details>
<summary><strong>サーボパラメータ復元スクリプト</strong></summary>

サーボ（例：S5）のパラメータが異常な場合、バックアップ／復元ツールを使って標準パラメータを書き戻すことができます。

**関連ファイル**

- `dynamixel_xl330_backup_restore.py` — バックアップ／復元ツール
- `DYNAMIXEL_XL330_BACKUP.json` — このモデル用の標準パラメータファイル

ダウンロード URL: [dynamixel_xl330_backup_restore.py](https://files.seeedstudio.com/wiki/reachymini/dynamixel_xl330_backup_restore.py) および [DYNAMIXEL_XL330_BACKUP.json](https://files.seeedstudio.com/wiki/reachymini/DYNAMIXEL_XL330_BACKUP.json)

**前提条件**

- Python 3；Reachy Mini を U2D2 経由でコンピュータに接続し、サーボに通常どおり電源が入っていること（普段のデバッグ時と同じ状態）。
- 依存関係をインストール：`pip install dynamixel-sdk pyserial`
- 2 つのファイルを同じフォルダに置き、そのフォルダ内で全てのコマンドを実行します。

**手順**

1. **ツールを起動する**

   ```bash
   python dynamixel_xl330_backup_restore.py
   ```

   U2D2 のシリアルポートとボーレート 1,000,000 を選択します。メインメニューではまず全サーボをスキャンして一覧表示します — 6 個すべてが存在し、モデルが XL330-M288 であること、および S5 の実際の ID を確認してください。

2. **安全のためのバックアップ（必須）**

   メニューオプション 2（Export / backup ALL）を選択し、6 個すべてのモーターの現在のパラメータを JSON ファイルにエクスポートします（デフォルト名は `DYNAMIXEL_XL330_BACKUP_timestamp.json` のような形式）。これを `backup_all.json` にリネームして保管してください。これは復元前の元の状態であり、ロールバックやレジスタ差分の確認に役立ちます。

3. **S5 に標準パラメータを復元する**

   メニューオプション 3（Restore）を選択し、JSON リストから提供された標準パラメータファイルを選びます。マッピングモード 1（Same ID）を選択します。スクリプトは「restore plan」を表示し、どのサーボに書き込みが行われるか（現在 → バックアップ → 最終 ID）を示します。

   S5 が含まれていること、各モーターの最終 ID が現在の ID と一致していること（リネームされないこと）を確認し、`RESTORE` と入力します。

   スクリプトは次の処理を行います：Torque を強制的に Off → 各 config／PID／profile／Indirect Address パラメータを書き込み → 各項目を読み戻して検証 → 最後に全体レビュー；処理中は Torque は常に Off のままで、意図しない動きは発生しません。

   > 標準パラメータファイルに S5 のエントリのみが含まれている場合は S5 のみが書き込まれ、6 個すべてが含まれている場合は 6 個すべてが標準パラメータでフラッシュされます。どちらの場合も「restore plan」に明確に一覧表示されるので、確定前によく確認してください。

4. **スクリプトを終了し、サーボの電源を入れ直してから、ロボット上で S5 を全ストローク・最大負荷で再テストします。**

**チェックリスト**

- 再フラッシュ後、S5 は自力で一番上まで到達できますか（まだ押し上げが必要／ブザー音がするなどはありませんか）？
- スクリプトの出力は `RESTORE + VERIFY SUCCESS` になっていますか、それとも `[FAIL]` 行がありますか（ある場合は該当行を送ってください）？
- 手順 2 で作成した `backup_all.json` ファイル。

**注意事項**

- 再フラッシュ後に Torque が Off になっているのは正常です — ロボットソフトウェアが起動時に有効化します。
- スクリプトが `MODEL MISMATCH` を報告した場合、S5 のモデルが他のモーターと異なることを意味します — 重要な手がかりとなるので、その旨をお知らせください。
- 「restore plan」に S5 が含まれていない場合、または最終 ID が現在の ID と一致しない場合は、`RESTORE` と入力しないでください — 当社までご連絡ください（おそらくパラメータファイル内の ID が S5 の実際の ID と一致していません。修正版をお渡しします）。
- 再フラッシュと検証が通過しても問題が解決しない場合、設定は正常であると確認できるため、交換対応に進む根拠となります。

</details>

## 📦 配送と保証

<details>
<summary><strong>荷物が破損している／届かない。</strong></summary>

すぐに **Pollen Robotics** チームに連絡してください。パッケージの写真、レシート番号または請求書番号、およびフルネームを添えて sales@pollen-robotics.com までメールをお送りください。輸送会社に確認し、結果を随時お知らせします。

</details>

<details>
<summary><strong>返金ポリシー</strong></summary>

* **発送前:** `sales@pollen-robotics.com` に連絡いただければ 100% 返金いたします。
* **発送後:** 荷物の返品は 30 日以内に可能です。配送完了の証明と請求書またはレシート番号を添えて、営業窓口（sales@pollen-robotics.com）までご連絡ください。ご意見／フィードバックがあればぜひお知らせください。私たちは、オープンソースコミュニティが組み立てを楽しめるロボットを作ることに注力しています。

</details>

<details>
<summary><strong>保証</strong></summary>

部品が破損している／正常に動作しない場合、Pollen のアフターセールスチームが、それが保証対象となるハードウェア不良かどうかを判断します。その後、製造元から修理または交換用部品が提供されます。問題箇所の写真、レシート番号または請求書番号、およびフルネームを添えて sales@pollen-robotics.com までメールをお送りください。

</details>


## 💬 まだ解決しませんか？

このガイド内で問題の答えが見つからなかった場合は、ぜひ直接ご連絡ください。
Pollen Robotics チームとコミュニティは Discord 上で活動しており、個別のトラブルシューティングをお手伝いします。

👉 **[Pollen Robotics の Discord に参加する](https://discord.gg/Y7FgMqHsub)**