---
description: Reachy Mini のよくある問題、組み立て、接続、ハードウェア、SDK、エラーメッセージを網羅した包括的なトラブルシューティングガイドと FAQ です。
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
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/ja/reachymini_troubleshooting/
---

# トラブルシューティング & FAQ

Reachy Mini サポートページへようこそ。以下の質問をクリックすると、回答が表示されます。

## 🛠️ トラブルシューティング - よくある問題

**重要なトラブルシューティング - まず最初にお読みください。既知の問題のすべてを解決できます！**


<details>
<summary><strong>他のどの問題よりも前に：アップデート & 再起動</strong></summary>

**最新のソフトウェアを使用していること、そしてロボットとコンピュータの両方を再起動したことを確認してください。**
ロボットを再起動するには、OFF を押して 5 秒待ち、その後 ON を押します。この簡単な手順で、よくある既知の問題のいくつかは解決します。

**ソフトウェアをアップデートする方法：**

- **Reachy Mini Control を使用している場合**
  "⚙️" 設定タブから "Check for updates" を選択します。アップデートが利用可能な場合は "Update now" をクリックします。
- **クローンしたリポジトリを使用している場合**
  次のいずれかを満たしていることを確認してください：
  - 最新のタグ付きリリースを使用している
  - `main` ブランチが最新である（`git pull` を実行）

**Wireless Reachy Mini**: `reachyminios_check` を実行して、すべてが正常であることを確認してください（[Get Started](/ja/reachymini_platforms_reachy_mini_get_started) を参照）

</details>


<details>
<summary><strong>ブートストラップやアップデートの失敗 / Python 環境の問題（Lite & Simulation）</strong></summary>

Reachy Mini Control が初回のブートストラップ中に失敗したり、仮想環境の作成中に固まったり、アップデート後に Python 環境が壊れた状態になった場合は、デスクトップアプリから仮想環境をリセットできます。

リセットオプションは 2 種類あります：

- **Reset apps environment** — `apps_venv`（インストール済みアプリが使用する環境）のみを再作成します。インストール済みアプリは再インストールが必要になります。アプリだけが起動しない、またはインストールできない場合は、まずこれを使用してください。
- **Full Environment Reset** — すべての Python ファイルを削除し、すべてを再ダウンロードします（インタプリタ + 2 つの venv）。ブートストラップ自体が失敗する場合や、「Reset apps environment」で解決しなかった場合に使用してください。数分かかることがあります。

**これらのボタンの場所：**

- **接続前**（Finding Robot 画面）：右上の ⚙️ アイコンをクリックします。"Local environment (USB & Sim)" の下に、「Reset apps environment」とフルリセットオプションを含むメニューが表示されます。
- **接続後**（USB / Simulation モード）：Settings オーバーレイを開き、「Environment」セクションに移動します。ここに「Reset Apps Environment」と「Full Environment Reset」ボタンがあります。

フルリセット後、デスクトップアプリは次回起動時に再度ブートストラップを実行します。

</details>


<details>
<summary><strong>モーター関連の問題</strong></summary>

これは次のような問題に関するものです：
- モーターが赤く点滅する、または反応しない / 動かない。
- モーターに "Overload Error" のようなエラーが表示される。
- モーターが見つからない："No motor found on port"、"Missing motor" など。

上記のいずれかの症状がある場合は、モーター関連の問題を診断・解決するための詳細な手順について、[モーター診断とトラブルシューティングガイド](/ja/reachymini_troubleshooting_motors_diagnosis) を参照してください。

Reachy Mini Testbench アプリを使用すると、これらの問題を効果的に特定して解決するのに役立ちます。

</details>

<details>
<summary><strong>Electrical Shock Error </strong></summary>

Dynamixel モーターで Electrical shock error が発生するのは、電源に問題があるか、どこかでショートしていることを意味します。
フット PCB からヘッドまでのケーブルに損傷がないか確認してください。特に次のケーブルを確認してください：
- 電源ケーブル（黒 & 赤）
- モーター用 3 芯ケーブル（300mm、200mm、100mm、40mm）

これは、上で説明した「モーターが赤く点滅する、または Overload Error」と同じ原因である場合もあります。

</details>

<details>
<summary><strong>マイクが動作しない</strong></summary>

次のような症状がある場合：
- 音声録音が動作しない / 無音になる
- 音声録音がゼロのみを返す

マイクケーブルが上下逆に接続されている可能性があります。
- ケーブルが白と青の場合は、青い側が上になっているかどうか、組み立て手順をもう一度確認してください。
- ケーブルが黒の場合は、「Main Board」と書かれている側が上になっていることを確認してください（下の写真を参照）。
![mic_cable](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/black_fpc_cable.png)


ケーブルが正しく接続されていても問題が続く場合は、マイクの FPC ケーブルが損傷している可能性が高いです。この問題を解決するには、チュートリアル [Reachy Mini のマイクの FPC ケーブルを交換する方法](/ja/reachymini_troubleshooting_change_mic_fpc_cable) を参照してください。

</details>


<details>

<summary><strong>音量が小さい</strong></summary>

- ロボットをバージョン 1.2.3 以降にアップデートする

詳細については、ドキュメントを参照してください：
[Getting Started](/ja/reachymini_platforms_reachy_mini_get_started)

</details>

<details>
<summary><strong>パーミッションエラー</strong></summary>

- ロボットをバージョン 1.2.3 以降にアップデートする
- ロボットを再起動する

</details>

<details>
<summary><strong>アンテナが 90° または 180° 回転しているように見える</strong></summary>

これは製造上の問題です。

次のガイドに従えば、簡単に修正できます：
[アンテナ再配置ガイド](https://drive.google.com/file/d/1FsmNpwELuXUbdhGHDMjG_CNpYXOMtR7A/view?usp=drive_link)

</details>

<details>
<summary><strong>モーターが震える</strong></summary>

**アンテナが震える場合**

これは最も一般的なケースです。アンテナ（モーター 17 と 18）は、垂直位置（0°）に設定すると震えやすくなります。この角度では、ギアボックスのバックラッシュにより、モーターは倒立振り子のような不安定な平衡状態になります。摩擦が非常に小さい位置の周りで姿勢を維持しようとしてモーターが常に補正を行うため、振動が発生します。

最も簡単な対処法は、アンテナを数度（通常は 10° 程度で十分）ずらすことです。これにより、重力によってわずかなバイアスがかかり、機械的な遊びが一方向に取られるため、震えが解消されます。

これは現在 Reachy Mini のデフォルト動作になっています。詳細は [PR #952](https://github.com/pollen-robotics/reachy_mini/pull/952) を参照してください。

**PID 値の調整**

別の方法として、[PID 制御値を調整](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/config/hardware_config.yaml#L66C1-L67C1) することもできます。最適な値はロボット個体ごとに異なる場合があります。製造上のわずかな摩擦の違いでも挙動が変わるためです。

まずは、モーター 10（足）、17 と 18（アンテナ）の P を 180 に下げてみてください。
効果がない場合は、同じモーターの D を 10 に上げてみることもできます。

</details>

<details>
<summary><strong>ヘッドが動くときにきしみ音や摩擦音がする</strong></summary>

ロボットのヘッドが動くときに高音のきしみ音や摩擦音が聞こえる場合は、Stewart プラットフォームのロッドにある球面ジョイント（ボールジョイント）のメンテナンスが必要になっている可能性が高いです。連結ロッドの周りに黒い粉や残留物が見られることもあります。

これは時間の経過に伴う通常の摩耗です。[球面ジョイントメンテナンスガイド](/ja/reachymini_troubleshooting_spherical_joints_maintenance) に従って、ジョイントを清掃し、再度グリスアップしてください。

</details>

<details>
<summary><strong>Lite バージョンで映像が暗い</strong></summary>

**➡️ クイック対処法：カメラ設定で露光時間を調整する**

暗い映像を改善するには、オート露光を有効にするか、カメラ制御アプリケーションを使って露光時間を手動で増やしてください。これらのアプリケーションは、露光やその他のカメラパラメータを調整するための直感的なインターフェースを提供します。

**推奨アプリケーション：**

- **macOS:** [CameraController](https://github.com/itaybre/CameraController) - USB カメラ制御用のオープンソース GUI アプリケーション
- **Linux:** qv4l2 - V4L2 カメラ制御用の Qt ベース GUI アプリケーション
  - インストール: `sudo apt install qv4l2`
- **Windows:** [Webcam Settings](https://www.softpedia.com/get/Internet/WebCam/Webcam-Settings-Tool.shtml) または [ManyCam](https://manycam.com/) - 高度なカメラ制御用

これらのアプリケーションを使用すると、直感的なグラフィカルインターフェースを通じて、露光時間、明るさ、その他のカメラパラメータを調整できます。

---

**➡️ 上級者向け：libuvc を使用した詳細なカメラ制御**

カメラパラメータを厳密に制御したい上級ユーザーは、libuvc ベースのコマンドラインユーティリティを使用できます。これらのツールは、すべての UVC カメラ制御に対する低レベルアクセスを提供します。

暗い映像の問題を特に解決するには、これらのコマンドラインツールを使用して `auto-exposure-priority=1` を設定してください。

**プラットフォーム別コマンドラインツール：**

- **macOS:** [uvc-util](https://github.com/jtfrey/uvc-util)

- **Linux:** [v4l2-ctl](https://manpages.debian.org/testing/v4l-utils/v4l2-ctl.1.en.html)
  - インストール: `sudo apt install v4l-utils`

- **Windows:** Windows には直接相当するものはありません。

**注意:** これらのコマンドラインツールには技術的な知識が必要であり、使用するツールによってはアクセスできるカメラパラメータが異なる場合があります。変更を行う前に、`--help` を使用して利用可能な制御項目を一覧表示してください。

</details>

<details>
<summary><strong>パッケージの中に部品が足りない</strong></summary>

まずはすべてを開封してください。一部の部品はあらかじめ組み立てられています（例：ヘッド下部のパーツはすでにヘッド後部パーツの中に入っています）。

![head_parts](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/head_parts.jpg)

次に、組み立てガイドの部品リストを確認し、本当に部品が不足しているかどうかを確認してください。
100% 間違いなく部品が不足している場合は、手元にあるすべての部品の写真と注文番号または請求書番号を添えて、sales@pollen-robotics.com までご連絡ください。
その間、自分で 3D プリントできるように、[stl ファイル](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/descriptions/reachy_mini/mjcf/assets) も用意されています。
</details>


<details>
<summary><strong>USB-C ケーブルで Wireless Reachy Mini に接続できない</strong></summary>

Wireless ユニットは、Lite バージョンのように USB 経由でロボットを公開しないため、USB-C ケーブルをノート PC に接続しても、動作する接続にはなりません。
代わりに、次のようにしてください：

- ロボットを Wi-Fi ネットワークに参加させ、ノート PC 上の SDK クライアントを使用してリモートで制御します。
- 組み込み Raspberry Pi 上で直接コードを実行したい場合は、SSH で接続し、そこでスクリプトを実行します（これは、アプリを公開 / インストールした後に Reachy Mini Control が行っていることと同じです）。
- 有線接続の場合は、USB-C-から-EthernetアダプタとEthernetケーブルを使用します。これにより、Wi‑Fi を有線Ethernetに置き換えるだけで済みます。

</details>

<details>
<summary><strong>ワイヤレスアクセスポイントが表示されない - RPI が起動しない</strong></summary>
ヘッド内のボードには、特定の位置にしておく必要があるスイッチがあります。そうなっていない場合、AP は表示されません。組み立て中にこのスイッチが動いてしまったか、工場でのミスである可能性があります。
スイッチが「debug」側で、「download」側ではないことを確認してください。以下の写真を参照してください：

![switch_position](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/wireless_switch.png)

このスイッチが正しい位置にあるにもかかわらず、まだ AP が見えない場合は、[reflash the RPI Iso tutorial](/ja/reachymini_platforms_reachy_mini_reflash_the_rpi_iso) に従って Raspberry Pi の iso を再フラッシュする必要があるかもしれません。

</details>

## 🚀 はじめに & 組み立て

<details>
<summary><strong>組み立てには通常どのくらい時間がかかりますか？</strong></summary>

ほとんどのテスターは、**1.5〜2時間**と報告しています。経験レベルによっては最大4時間かかることもあります。

</details>

<details>
<summary><strong>組み立て中に難しい工程はありますか？</strong></summary>

特にありません。テスターは、**楽しく、簡単で、満足感がある**と表現しています。基本的な工具と根気があれば十分です。最も難しいのは、**ケーブルの配線**と**部品を正しいトルクで締めること**です。Reachy Mini Lite または Wireless を購入すると、印刷されたユーザーガイドが同梱されており、ビデオとデジタルガイドにもアクセスできます。
Reachy Mini 用ビデオ [BETA](https://www.youtube.com/watch?v=_r0cHySFbeY)、LITE、WIRELESS

Reachy Mini 用デジタル組み立てガイド [BETA](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)、LITE、WIRELESS

</details>

<details>
<summary><strong>組み立てを終えたあとにケーブルが2本とネジが数本余りました。これは普通ですか？</strong></summary>

はい、まったく問題ありません。
組み立て中に部品が破損したり紛失したりした場合に備えて、予備のケーブルとネジをキットに意図的に含めています。

それらを取り付ける必要はありません。

</details>

<details>
<summary><strong>初回起動時に Reachy Mini が動きません。何を確認すればよいですか？</strong></summary>

* **電源:** 7V-5A の電源が接続されていることを確認してください。USB 接続だけではモーターを駆動するには不十分です。
* **ケーブル:** すべてのケーブルが奥までしっかり挿さっているか確認してください。電源ケーブルの緩みは「motor not responding」エラーの一般的な原因です。
* **トラブルシューティングセクション:** このページ上部の Essential Troubleshooting セクションを参照してください。

</details>

<details>
<summary><strong>デーモンを手動で起動する必要がありますか？</strong></summary>

**いいえ**

- Reachy Mini（Wireless）の場合、デーモンは組み込みの Raspberry Pi 上ですでに動作しています。
- Reachy Mini Lite の場合は、[デスクトップアプリ](/ja/reachymini_platforms_reachy_mini_lite_get_started)を使用できます。
- デスクトップアプリがあなたのシステム（例：ARM64、特殊なディストリビューション）で動作しない場合は、[Python SDK をインストールして使用](/ja/reachymini_sdk_installation)することができます。これは完全にサポートされた代替手段です！

</details>



## 🔌 接続 & Reachy Mini の制御

<details>
<summary><strong>ロボットを Wi‑Fi に接続するにはどうすればよいですか？</strong></summary>

Wi‑Fi への接続方法の詳細な手順については、[Reachy Mini Wireless ガイド](/ja/reachymini_platforms_reachy_mini_get_started)を参照してください。

</details>

<details>
<summary><strong>Wi‑Fi ホットスポットをリセットするにはどうすればよいですか？</strong></summary>

ロボットの Wi‑Fi ホットスポットをリセットする必要がある場合（たとえば、接続できない、またはネットワークを変更したい場合）、[Wi‑Fi リセットガイド](/ja/reachymini_platforms_reachy_mini_reset)の手順に従ってください。

</details>

<details>
<summary><strong>ロボットには Web API はありますか？</strong></summary>

はい。デーモンは REST API（FastAPI）と WebSocket を提供します。
* **ドキュメント:** `http://localhost:8000/docs`（デーモンが動作しているときに利用可能）。
* **機能:** 状態取得、関節の移動、デーモンの制御。

API を使用してロボットを制御したり、その状態を取得したり、さらにはデーモン自体を制御することもできます。API は [FastAPI](https://fastapi.tiangolo.com/) と [pydantic](https://docs.pydantic.dev/latest/) モデルを使って実装されています。

これにより、ロボットとやり取りするために必要なすべてのエンドポイントが提供されます。含まれるものは次のとおりです：

- ロボットの状態の取得（関節位置、モーターの状態など）
- ロボットの関節を動かす、または特定のポーズを設定する

API は OpenAPI を使ってドキュメント化されており、デーモンが動作しているときは http://localhost:8000/docs で利用可能なすべてのルートにアクセスしてテストできます。また、http://localhost:8000/openapi.json で生の OpenAPI スキーマにアクセスすることもできます。

これは、好みのプログラミング言語やフレームワーク向けにクライアントコードを生成したり、AI アプリケーションに接続したり、さらには MCP サーバーを作成したりしたい場合に役立ちます。

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

SDK のインストール中にパッケージの競合を防ぐのに役立ちます。

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
`192.168.1.` プレフィックスを、あなたのネットワークに合わせて調整してください。

</details>

<details>
<summary><strong>カンファレンス／ホテルの Wi‑Fi でロボットとコンピュータが通信できません</strong></summary>

多くのカンファレンスやホテルの Wi‑Fi ネットワークでは、**クライアント分離**が有効になっており、同じネットワーク上のデバイス同士が通信できないようになっています。症状としては、両方のデバイスが Wi‑Fi に接続され、同じサブネット上の IP アドレスを持っているにもかかわらず、互いの HTTP エンドポイントに到達できない、というものです。

**回避策:** モバイルフォンのホットスポットを使用します。ロボットとコンピュータの両方をそのホットスポットに接続してください。これにより、デバイス同士が互いを認識できるシンプルなネットワークが提供されます。

別の方法として、USB-C-から-Ethernet アダプタと Ethernet ケーブルを使用して、ロボット（Wireless バージョン）に直接接続します。

</details>

<details>
<summary><strong>中国から HuggingFace のサービスにアクセスするには？</strong></summary>

このミラーを使用できます：https://hf-mirror.com/

次の環境変数を設定する必要があります：
```bash
export HF_ENDPOINT=https://hf-mirror.com/
```

PyPI や GitHub などのサービスにアクセスするためにも、ミラーを使用する必要がある場合があることに注意してください。

</details>

<details>
<summary><strong>中国で会話アプリを動作させるには？</strong></summary>

Reachy Mini の会話アプリは OpenAI gpt-realtime API に依存しており、中国からはアクセスできない可能性があります。

現時点での最良の回避策は、あなたのマシン（Lite バージョン）、ロボット（Wireless バージョン）、またはルーター自体に VPN を設定することです。

VPN のルーティングルールを設定する際は：

1) ローカルネットワークトラフィックを除くトラフィックを VPN 経由にルーティングし、デバイスがローカルネットワークから引き続きアクセス可能な状態を保ちます。

次のものをホワイトリストに登録する必要があります：
- ローカル LAN の IP レンジ（ネットワーク構成に応じて、192.168.0.0/16、192.168.1.0/24 など）。
- 次のポート：
  - 22（SSH）
  - 8000（Reachy Mini デーモン）
  - 5353 TCP/UDP（mDNS / ローカル検出）

これにより、ロボットがローカルで到達可能かつ検出可能な状態に保たれ、mDNS（`reachy-mini.local`）もネットワーク上で引き続き機能するはずです。

2) VPN が選択的ルーティングをサポートしている場合は、すべての HTTPS トラフィックをトンネリングするのではなく、必要な外部サービスのみを VPN 経由にルーティングする方が望ましいアプローチです。

可能であれば、VPN が `huggingface.co` と `api.openai.com` に対してのみ使用されるように設定してください。

これにより、ネットワークへの副作用を最小限に抑えつつ、ローカルサービスを通常どおり動作させることができます。

Wireless バージョンの場合、ロボット上で VPN を設定したら、変更を反映させるためにデーモンを再起動します：
```
sudo systemctl restart reachy-mini-daemon
```
同じネットワーク上のデバイスからロボットに到達できることを確認するには、次を実行できます：
```
ping reachy-mini.local
```

_オープンウェイトモデルに基づくアプローチも開発中です。続報をお待ちください！_

</details>


## 🤖 ハードウェア、モーター & 制限

<details>
<summary><strong>ハードウェアについての詳しい情報はどこで確認できますか？</strong></summary>

ロボットのハードウェアコンポーネントに関する詳細情報については、[Reachy Mini ハードウェアページ](/ja/reachymini_platforms_reachy_mini_hardware)を参照してください。

</details>

<details>
<summary><strong>安全上の制限（ヘッド & ボディ）はどのようになっていますか？</strong></summary>

これらの制限範囲外のポーズを指示した場合、ロボットは自動的に最も近い安全なポーズにクランプされます。

* **ボディヨー:** [-180°, 180°]。
* **ヘッドピッチ／ロール:** [-40°, 40°]。
* **ヘッドヨー:** [-180°, 180°]。
* **複合制限:** `body_yaw` と `head_yaw` の差は **[-65°, 65°]** の範囲内でなければなりません。

</details>

<details>
<summary><strong>なぜモーターが「ぐにゃぐにゃ」または「固い」のですか？（コンプライアンス）</strong></summary>

* **`enable_motors()`**: モーター **ON**（固い）。ロボットは姿勢を保持します。
* **`disable_motors()`**: モーター **OFF**（ぐにゃぐにゃ）。手で動かすことができます。
* **`make_motors_compliant()`**: モーター **ON だがソフト**。デモンストレーションによるティーチングに便利です。

</details>

<details>
<summary><strong>モーターのパラメータにはどうやってアクセスできますか？</strong></summary>

1. [scan_motors.py スクリプト](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/tools/scan_motors.py)を使ってモーターをスキャンする方法を参照できます。

- ロボットが Lite の場合は、スクリプトをそのままお使いのコンピュータ上で実行できます：
```bash
python -m reachy_mini.tools.scan_motors
```
- ロボットが Wireless の場合は、ssh でロボットに接続します：
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
- 検出されたモーターの一覧が表示されるはずです。すべてのモーターがボーレート 1000000 で、ID が 10,11, 12, 13, 14, 15,17, 18 になっている必要があります。いくつか欠けている場合は、ケーブルをもう一度確認してください。異なる ID やボーレートのモーターがある場合は、サポートにお問い合わせください。

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
2. Lite: Dynamixel Wizard を使ってモーターのパラメータを読み取ることもできます。ガイドは[こちら](/ja/reachymini_platforms_reachy_mini_lite_wizard)を参照してください。

</details>

<details>
<summary><strong>モーターがしばらくすると反応しなくなります。</strong></summary>

* 電源ケーブルの接続を確認してください。
* モーターがサーマルプロテクションモード（過熱）に入っている可能性があります。一度電源を切ってから入れ直してください。
* SDK を更新すること（`pip install -U reachy-mini`）で解決したユーザーもいます。
* モーターの LED が赤く点滅している場合は、上記の「Motor blinking red or Overload Error」セクションを参照してください。

</details>

<details>
<summary><strong>バッテリーには安全機能がありますか？</strong></summary>
Wireless には適切なバッテリー充電器が含まれています。
バッテリーには温度センサー付きの BMS も内蔵されています。

</details>

<details>
<summary><strong>残りのバッテリー残量はどうやって確認しますか？</strong></summary>
設計上の既知の制限として、バッテリーの状態を確認する手段は用意されていません。

充電が必要なときの「バッテリー残量低下」を示す LED 表示のみがあります。（緑 -> オレンジ -> 赤）

</details>

<details>
<summary><strong>バッテリーの取り外し方</strong></summary>

- まず緑色の LED が点灯していないことを確認します。
- 底面のネジ 3 本を外し、足部を少し引き出します。
![remove_foot](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/remove_foot.png)
- バッテリーを取り外せるように、示されているコネクタ（赤い矢印）を抜きます。バッテリーを固定するための両面テープが付いているはずなので、少し外しにくい場合があります。
![battery_location](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/battery_connector.png)
- 再組み立ての際は、これらの手順を逆順で行ってください。その際、ケーブルを挟み込まないよう注意してください。

</details>

<details>
<summary><strong>公式モーションの一部で頭が胴体に触れることがあります</strong></summary>

この挙動は想定されたものであり、ハードウェアやソフトウェアのバグではありません。
ただし紛らわしい場合があるため、この接触を避けるようにモーションを更新する予定です。

</details>

<details>
<summary><strong>外観（スキン/CAD）は変更できますか？</strong></summary>

* **CAD:** 完全な STEP ファイルはまだ公開されていませんが、今後公開する予定です。それまでの間は、リポジトリの [assets フォルダ](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/descriptions/reachy_mini/mjcf/assets) にいくつかの STL ファイルがあります。
* **Skins:** はい、コミュニティによってカスタムビルドが作成されています。いくつかの「スキン」STEP ファイルは Discord の ["Pimp my Reachy Mini"](https://discord.com/channels/519098054377340948/1453340883775651861) チャンネルで共有されています。

</details>

<details>
<summary><strong>マイクのフラットケーブルが壊れてしまいました</strong></summary>

マイクケーブルの仕様は次のとおりです：
- FFC/FPC フラットフレキシブルケーブル
- 12 ピン
- 0.5mm ピッチ
- タイプ A（コネクタが同じ側）
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

完全なガイドはこちらを参照してください：[Building & Publishing Apps](/ja/reachymini_sdk_apps) — アプリの構造、テスト、公開、デバッグ、デプロイについて説明しています。

</details>

<details>
<summary><strong>アプリが黙ってクラッシュする、または起動しません</strong></summary>

アプリが環境にインストールされていないパッケージに依存している場合、インポート時にエラーが表示されないままクラッシュします。インポートを手動でテストしてください：

```bash
# On Wireless
ssh pollen@reachy-mini.local "/venvs/apps_venv/bin/python3 -c 'from my_app.main import MyApp'"

# On Lite / local
python -c "from my_app.main import MyApp"
```

さらにデバッグのヒント（ログの確認、よくある落とし穴）については、[Debugging Apps](/ja/reachymini_sdk_apps#アプリのデバッグ) を参照してください。

</details>

<details>
<summary><strong>Reachy Mini Control から直接アプリをインストールできますか？</strong></summary>

はい！ネイティブアプリであれば Reachy Mini Control から直接インストールでき、Web ベースのアプリであればお気に入りに追加できます。

</details>

<details>
<summary><strong>Windows でアプリのインストールがすべて失敗します！</strong></summary>

Windows でシンボリックリンクを作成する権限が不足していることが原因の可能性があります。環境変数 `HF_HUB_DISABLE_SYMLINKS_WARNING` を 1 に設定すると、失敗の原因となっている警告を無効化できます。

ターミナルで次を実行します：
```powershell
set HF_HUB_DISABLE_SYMLINKS_WARNING=1
```

</details>

<details>
<summary><strong>Hugging Face からのアプリインストールが失敗します。</strong></summary>

SDK を更新してください。初期バージョンには Space のインストールに関するバグがありました。

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

組み込みコンピュータに SSH 接続し、アプリをクローン（またはコピー）して手動で実行します。これは、Reachy Mini Control がアプリを起動するときに行っていることを再現します。

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

* **`goto_target`**: **スムーズ**。時間をかけてモーションを補間します（デフォルト 0.5 秒）。ジェスチャーに最適です。
* **`set_target`**: **即時**。ターゲットを即座に設定します。高頻度制御（テレオペレーション、数式で定義された軌道）に最適です。

</details>

<details>
<summary><strong>動きを記録して再生するにはどうすればよいですか？</strong></summary>

**記録：**
制御ループの前後で `start_recording()` と `stop_recording()` を呼び出します。

```python
mini.start_recording()
# ... move robot ...
move = mini.stop_recording()
```

**再生：**
[Hugging Face ライブラリ](https://github.com/pollen-robotics/reachy_mini_dances_library) から動きを読み込むには、`RecordedMoves` クラスを使用します。

```python
mini.play_move(recorded_moves.get("dance_1"))
```

</details>

<details>
<summary><strong>ロボットの動きがぎこちなく見えます。制御ループは正しく動作していますか？</strong></summary>

デーモンのステータスを確認することで、モーター制御ループが正しく動作しているか確認できます：
- SDK 経由
```python
mini = ReachyMini()
print(mini.client.get_status())
```
- Lite では `http://localhost:8000/docs`、Wireless では `http://reachy-mini.local:8000/docs` の REST API 経由（`/api/daemon/status` エンドポイントを探してください）

およそ 50Hz（約 20ms 周期）前後の値が表示されるはずです：
```python
{
  ...
"motor_controller": "ControlLoopStats(period=~19.99ms, read_dt=~1.94 ms, write_dt=~0.19 ms)"
  ...
}
```

周期が 20ms より大幅に長い場合は、制御ループが十分な速度で動作していないことを意味します。これは次のような原因が考えられます：
- コンピュータの CPU 負荷が高い（例：他のアプリが CPU を使いすぎている）。
- （Lite のみ）USB レイテンシが高い（シリアルポートの設定を試してください）。

</details>



## 👁️ ビジョン & オーディオ

<details>
<summary><strong>音量が小さすぎます（Linux）</strong></summary>

1.  `alsamixer` を実行します。
2.  **PCM1** を 100% に設定します。
3.  **PCM,0** を使って全体の音量を調整します。

設定を永続化するには：
```bash
CARD=$(aplay -l | grep -i "reSpeaker" | head -n1 | sed -n 's/^card \([0-9]*\):.*/\1/p')
amixer -c "$CARD" set PCM,1 100%
sudo alsactl store "$CARD"
```

これは XVF3800 ベースのサウンドカードに関する[既知の問題](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/02_setting_up_the_hardware.html#low-volume-of-playback-audio-on-linux-for-project-ua)です。

</details>

<details>
<summary><strong>カメラフレームはどうやって取得しますか？</strong></summary>

`media` オブジェクトを使用します。

```python
with ReachyMini() as mini:
    frame = mini.media.get_frame()
    # Returns a numpy array (BGR format, compatible with OpenCV)
```

</details>

<details>
<summary><strong>マイク / スピーカーはどう使えばいいですか？</strong></summary>

```python
# Get audio
sample = mini.media.get_audio_sample()

# Play audio
mini.media.push_audio_sample(numpy_chunk)
```

</details>

<details>
<summary><strong>Reachy に何かを見させるにはどうすればいいですか？</strong></summary>

* **2D（画像）:** `mini.look_at_image(x, y)` - (0,0 は左上)。
* **3D（ワールド）:** `mini.look_at_world(x, y, z)` - ロボット座標系での座標。

</details>

<details>
<summary><strong>顔追跡が遅く感じます。</strong></summary>

パフォーマンスは照明条件に大きく依存します。顔が十分に明るく照らされていることを確認してください。ローカルバックエンド（GStreamer IPC）は、オンデバイスアプリケーションに対して最も低いレイテンシを提供します。

</details>

<details>
<summary><strong>サウンドシステムが動作しているかどうかを確認するには？</strong></summary>

### Reachy Mini Lite バージョン

Lite バージョンをテストする最も簡単な方法は、コンピュータから直接 *Pollen Robotics Reachy Mini Audio* デバイスを使用して、正しく動作しているか確認することです。

### Reachy Mini Wireless バージョン

Wireless バージョンでは、以下の GStreamer コマンドを使用して音声の録音と再生をテストできます：

Wireless バージョンの場合、次のコマンドを使用できます：
```bash
# record a sound
gst-launch-1.0 -e alsasrc device="reachymini_audio_src" ! audioconvert ! audioresample ! wavenc ! filesink location="test.wav"
# playback the recording
gst-launch-1.0 filesrc location=test.wav ! wavparse ! audioconvert ! alsasink device=reachymini_audio_sink
#playback a test sound (pink noise)
gst-launch-1.0 audiotestsrc wave="pink-noise" ! audioconvert ! audioresample ! alsasink device="reachymini_audio_sink"
```

**高度なテスト：**
エコーキャンセル性能をテストするために、録音しながら同時にサウンドを再生することができます。これにより、マイクアレイがスピーカーからのエコーを適切に処理・除去しているか確認できます。

**トラブルシューティングのヒント：**
- ホームディレクトリに `.asoundrc` ファイルが存在することを確認する
- マイクが認識されているか確認：`arecord -l`
- スピーカーが認識されているか確認：`aplay -l`
- `No Reachy Mini Audio USB device found!` というエラーで audio-board の設定に失敗する場合は、
  ReSpeaker オーディオボードが接続されているマシン上で SDK コードを実行してください。
  Lite の場合はあなたのコンピュータ、Wireless の場合はロボット本体になります。

</details>



## 🔧 特定のエラーメッセージと対処方法

<details>
<summary><strong>モーター &#39;&lt;name&gt;&#39; のハードウェアエラー: [&#39;Input Voltage Error&#39;]</strong></summary>
Reachy Mini ではより高い電圧を使用していますが、これは意図的なものです :)

</details>



<details>
<summary><strong>エラー: "OSError: PortAudio library not found"</strong></summary>

このエラーは、`release_media()` を呼び出した後などに `sounddevice` を直接使用したときに発生します。次のシステム依存パッケージをインストールしてください：

```bash
sudo apt-get install libportaudio2
```

</details>

<details>
<summary><strong>警告: "Circular buffer overrun"（シミュレーション / Mujoco）</strong></summary>

ロボットに接続しているにもかかわらず、ビデオフレームを消費しない場合に、バッファが一杯になってこのメッセージが表示されます。
* **対処法:** ビデオが不要な場合は、`ReachyMini(media_backend="no_media")` で初期化してください。

</details>

<details>
<summary><strong>Conversation アプリがアップデート後に起動時クラッシュする（カスタムプロファイル）</strong></summary>

以前のバージョンで Conversation アプリ用のカスタムプロファイルを作成しており、アップデート後にアプリがすぐ終了してしまう場合、アプリは既に存在しないパス上のプロファイルを探しています。最近のリリースでデフォルトのプロファイル位置が変更されたためです。

**症状** — ログの末尾が `prompts.py` から送出された `SystemExit: 1` で終わります。例：
```
File ".../reachy_mini_conversation_app/prompts.py", line 88, in get_session_instructions
    sys.exit(1)
SystemExit: 1
```

**対処法（推奨）：** Reachy Mini Control デスクトップアプリから **Reset apps environment** をクリックします（上記「Bootstrap or update fails / Python environment issues」を参照）。その後、アプリを再インストールする必要があります。

**代替案（上級者向け）：** ロボットに SSH 接続します（Wireless: `ssh pollen@reachy-mini.local`）し、アプリ用 venv を直接削除してから Conversation アプリを再インストールします：
```bash
rm -rf /venvs/apps_venv
```

</details>


<details>
<summary><strong>マイク入力 / 到来方向がない（ベータ版ユニット）</strong></summary>

* **入力なし:** ファームウェア 2.1.3 が必要です。[update script](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/firmware/update.sh) を実行してください。
* **方向なし:** ファームウェア 2.1.0 以上が必要です。
* フラットフレキシブルケーブルが正しい向きで取り付けられているか確認してください（組み立てガイドのスライド 45〜47）。

</details>



## 📦 出荷と保証

<details>
<summary><strong>荷物が破損している、または届きません。</strong></summary>

すぐに **Pollen Robotics** チームに連絡してください。パッケージの写真、領収書番号または請求書番号、およびフルネームを添えて sales@pollen-robotics.com までメールをお送りください。輸送会社に確認し、その結果をお知らせします。

</details>

<details>
<summary><strong>返金ポリシー</strong></summary>

* **出荷前:** `sales@pollen-robotics.com` に連絡していただければ 100% 返金いたします。
* **出荷後:** 荷物の返品は 30 日以内に行う必要があります。配送証明および請求書または領収書番号を添えて sales（sales@pollen-robotics.com）にご連絡ください。ご意見やフィードバックがあればぜひお知らせください。私たちはオープンソースコミュニティが作ることを楽しめるロボットを作ることに注力しています。

</details>

<details>
<summary><strong>保証</strong></summary>

部品が破損している、または誤動作している場合、Pollen のアフターセールスチームが、それが保証対象となるハードウェア不良かどうかを判断します。その後、製造元から修理または交換部品が提供されます。問題箇所の写真、領収書番号または請求書番号、およびフルネームを添えて sales@pollen-robotics.com までメールをお送りください。

</details>


## 💬 まだ解決しませんか？

このガイドで問題の答えが見つからなかった場合は、ぜひ直接ご連絡ください！
Pollen Robotics チームとコミュニティは Discord 上で活動しており、個別の問題のトラブルシューティングをお手伝いします。

👉 **[Pollen Robotics Discord に参加する](https://discord.gg/Y7FgMqHsub)**
