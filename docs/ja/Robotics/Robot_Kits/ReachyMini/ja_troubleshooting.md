---
description: Reachy Mini のよくある問題、組み立て、接続、ハードウェア、SDK、エラーメッセージを網羅した包括的なトラブルシューティングガイドと FAQ です。
title: トラブルシューティング & FAQ
slug: /ja/reachymini_troubleshooting
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
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# トラブルシューティング & FAQ

Reachy Mini サポートページへようこそ。よくある質問とその解決策を以下で確認できます。

## 🛠️ トラブルシューティング - よくある問題

:::warning 重要なトラブルシューティング
**まずはこれを読んでください** - 既知の問題のほとんどはこれで解決します！
:::

### 何よりも先に、どのような問題でも：アップデート & 再起動

:::tip 最初のステップ：アップデート & 再起動
**最新のソフトウェアを使用していること、そしてロボットとコンピュータの両方を再起動したことを確認してください。**

ロボットを再起動するには、OFF を押して 5 秒待ち、その後 ON を押します。この簡単な手順で、よくある既知の問題のいくつかが解決します。
:::

**ソフトウェアをアップデートする方法：**

* **ダッシュボードを Web ブラウザで使用している場合**
  `Settings` を開き、**Check for updates** をクリックします。
  ![Update](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/update.png)
* **新しいダッシュボード / アプリを使用している場合**
  アプリのバージョン 0.8.5 以降では、
* **クローンしたリポジトリを使用している場合**
  次のいずれかを確認してください：
  * 最新のタグ付きリリースを使用している
  * `develop` ブランチが最新である（`git pull`）。

**Wireless Reachy Mini** の場合：`reachyminios_check` を実行して、すべてが正常であることを確認してください（[Get Started](./platforms/reachy_mini/get_started.md) を参照）。

### モーター関連の問題

これは次のような問題に関するものです：
* モーターが赤く点滅している、または反応 / 動作しない。
* モーターに "Overload Error" のようなエラーが表示される。
* モーターが見つからない："No motor found on port"、"Missing motor" など。

:::info モーター診断
上記のいずれかの症状がある場合は、モーター関連の問題を診断・修正するための詳細な手順について、[Motors diagnosis and troubleshooting guide](./troubleshooting/motors_diagnosis.md) を参照してください。

Reachy Mini Testbench アプリを使用すると、これらの問題を効果的に特定して解決するのに役立ちます。
:::

### Electrical Shock Error

:::danger Electrical Shock Error
Dynamixel モーターで Electrical shock error が発生するのは、電源に問題があるか、どこかでショートしていることを意味します。

フット PCB からヘッドまでのケーブルに損傷がないか確認してください。特に次のケーブルを確認します：
* 電源ケーブル（黒 & 赤）
* モーター用 3 芯ケーブル（300mm、200mm、100mm、40mm）

これは、上で説明した "Motor blinking red or Overload Error" と同じ問題である可能性もあります。
:::

### マイクが動作しない

:::warning マイクの問題
次のような症状がある場合：
* 音声録音が動作しない / 無音になる
* 音声録音がゼロのみを返す

**マイクケーブルが上下逆に接続されている可能性があります。**
* ケーブルが白と青の場合は、青い側が上になっているかどうか、組み立て手順をもう一度確認してください。
* ケーブルが黒の場合は、"Main Board" と書かれている側が上になっていることを確認してください（下の写真を参照）。

![mic_cable](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/black_fpc_cable.png)
:::

ケーブルが正しく接続されているにもかかわらず問題が続く場合、マイクの FPC ケーブルが損傷している可能性が高いです。この問題を解決するには、チュートリアル [How to change the FPC cable of the microphone of Reachy Mini?](./troubleshooting/change_mic_fpc_cable.md) を参照してください。

### 音量が小さい

:::tip
* ロボットをバージョン 1.2.3 以降にアップデートしてください

詳細については、ドキュメント [Getting Started](./platforms/reachy_mini/get_started.md) を参照してください。
:::

### Permission errors

:::tip
* ロボットをバージョン 1.2.3 以降にアップデートしてください
* ロボットを再起動してください
:::

### アンテナが 90° または 180° 回転しているように見える

これは製造上の問題です。

次のガイドに従えば簡単に修正できます：
[Antenna repositioning guide](https://drive.google.com/file/d/1FsmNpwELuXUbdhGHDMjG_CNpYXOMtR7A/view?usp=drive_link)

### モーターがぶれる

モーターの PID 値が最適でない場合に発生することがあります。多くの場合、モーター 10（足）、17 と 18（アンテナ）は、位置保持中にわずかなジッターを示すことがあります。
これらはモーターが行っている細かな「調整」であり、この場合は過補正になっています。
良いニュースとして、[PID Control values を調整](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/config/hardware_config.yaml#L66C1-L67C1) して、このジッターを抑えることができます。

:::tip
まずはモーター 10、17、18 の P を 180 に下げてみてください。
それでも改善しない場合は、同じモーターの D を 10 に上げてみることもできます。
:::

### Lite バージョンで画像が暗い

:::info クイック修正：カメラ設定で露光時間を調整
暗い画像を修正するには、オート露光を有効にするか、カメラ制御アプリケーションを使用して露光時間を手動で増やしてください。これらのアプリケーションは、露光やその他のカメラパラメータを調整するための直感的なインターフェースを提供します。
:::

**推奨アプリケーション：**

* **macOS:** [CameraController](https://github.com/itaybre/CameraController) - USB カメラ制御用のオープンソース GUI アプリケーション
* **Linux:** qv4l2 - V4L2 カメラ制御用の Qt ベース GUI アプリケーション
  * インストール：`sudo apt install qv4l2`
* **Windows:** 高度なカメラ制御用に [Webcam Settings](https://www.softpedia.com/get/Internet/WebCam/Webcam-Settings-Tool.shtml) または [ManyCam](https://manycam.com/) を使用

これらのアプリケーションを使用すると、直感的なグラフィカルインターフェースを通じて、露光時間、明るさ、その他のカメラパラメータを調整できます。

---

:::info 上級者向け：詳細なカメラ制御のために libuvc を使用する
カメラパラメータを厳密に制御したい上級ユーザーは、libuvc ベースのコマンドラインユーティリティを使用できます。これらのツールは、すべての UVC カメラ制御への低レベルアクセスを提供します。

特に暗さの問題を修正するには、これらのコマンドラインツールを使用して `auto-exposure-priority=1` を設定します。
:::

**プラットフォーム別コマンドラインツール：**

* **macOS:** [uvc-util](https://github.com/jtfrey/uvc-util)

* **Linux:** [v4l2-ctl](https://manpages.debian.org/testing/v4l-utils/v4l2-ctl.1.en.html)
  * インストール：`sudo apt install v4l-utils`

* **Windows:** Windows には直接相当するものはありません。

:::note
これらのコマンドラインツールには技術的な知識が必要であり、利用可能なカメラパラメータへのアクセスは選択したツールによって異なる場合があります。変更を行う前に、`--help` を使用し、利用可能なコントロールを一覧表示してください。
:::

### パッケージの中に部品が足りません

:::tip まず確認
最初にすべてを開封したことを確認してください。一部の部品はあらかじめ組み立てられています（例：ヘッド下部のパーツはすでにヘッド後部のパーツに取り付けられています）。

![head_parts](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/head_parts.jpg)

その後、組み立てガイドの部品リストを確認し、本当に部品が不足しているかどうかを確認してください。
:::

部品が 100% 足りないと確信できる場合は、手元にあるすべての部品の写真と注文番号または請求書番号を添えて、sales@pollen-robotics.com までご連絡ください。
その間、自分で印刷できるように [stl files](https://github.com/pollen-robotics/reachy_mini/tree/develop/src/reachy_mini/descriptions/reachy_mini/mjcf/assets) も用意されています。

### USB-C ケーブルで Wireless Reachy Mini に接続できない

:::info
Wireless ユニットは、Lite バージョンのように USB 経由でロボットを公開しないため、USB-C ケーブルをノート PC に接続しても有効な接続にはなりません。

**代わりに：**
* ロボットを Wi-Fi ネットワークに参加させ、ノート PC 上の SDK クライアントを使用してリモートで制御します。
* 組み込み Raspberry Pi 上で直接コードを実行したい場合は、SSH で接続し、そこでスクリプトを実行します（これは、アプリを publish / install した後に Dashboard が行っていることです）。
* 有線接続にしたい場合は、USB-C-to-Ethernet アダプタと Ethernet ケーブルを使用します。これは単に Wi-Fi を有線 Ethernet に置き換えるだけです。
:::

### Wireless アクセスポイントが表示されない - RPI が起動しない

ヘッド内のボードにはスイッチがあり、所定の位置にある必要があります。そうでない場合、AP は表示されません。このスイッチは組み立て中に動かされてしまったか、工場でのミスである可能性があります。

:::warning
スイッチが "**download**" ではなく "**debug**" の位置にあることを確認してください。下の写真を参照してください：

![switch_position](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/wireless_switch.png)
:::

このスイッチが正しい位置にあるにもかかわらず AP がまだ見えない場合は、[reflash the RPI Iso tutorial](./platforms/reachy_mini/reflash_the_rpi_ISO.md) に従って Raspberry Pi の iso を再フラッシュする必要があるかもしれません。

## 🚀 はじめに & 組み立て

### 組み立てには通常どのくらい時間がかかりますか？

:::tip
ほとんどのテスターは、**1.5〜2 時間** と報告しています。経験レベルによっては最大 4 時間かかることもあります。
:::

### 組み立ての中で難しいステップはありますか？

特にありません。テスターは **楽しく、簡単で、満足感がある** と表現しています。基本的な工具と根気があれば十分です。ケーブルの配線と部品を適切なトルクで締めることが、最も難しい要素です。Reachy Mini Lite または Wireless を購入すると、印刷されたユーザーガイドが同梱されており、ビデオとデジタルガイドにもアクセスできます。

Reachy Mini [BETA](https://www.youtube.com/watch?v=_r0cHySFbeY)、LITE、WIRELESS 用ビデオ

Reachy Mini [BETA](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)、LITE、WIRELESS 用デジタル組み立てガイド

### 組み立て完了後にケーブルが 2 本とネジが数本余りました。これは正常ですか？

:::info
はい、まったく問題ありません。

組み立て中に部品が破損したり紛失したりした場合に備えて、予備のケーブルとネジをキットに意図的に含めています。

それらを取り付ける必要はありません。
:::

### 初回起動時に Reachy Mini が動きません。何を確認すべきですか？

:::warning チェックリスト
* **Power Supply:** 7V-5A の電源が接続されていることを確認してください。USB 接続だけではモーターを駆動するのに十分ではありません。
* **Cables:** すべてのケーブルが奥までしっかり挿入されていることを確認してください。電源ケーブルの緩みは "motor not responding" エラーの一般的な原因です。
* **Troubleshooting Section:** このページの一番上にある Essential Troubleshooting セクションを参照してください。
:::

### デーモンを手動で起動する必要がありますか？

:::success NO
* Reachy Mini (Wireless) では、デーモンは組み込み Raspberry Pi 上ですでに動作しています。
* Reachy Mini Lite では、[the desktop app](./platforms/reachy_mini_lite/get_started.md) を使用できます。
* デスクトップアプリが（ARM64 や特殊なディストリビューションなど）お使いのシステムで動作しない場合は、[install and use the Python SDK](./SDK/installation.md) を直接利用できます。これは完全にサポートされている代替手段です！
:::

## 🔌 接続とダッシュボード

### ロボットを Wi‑Fi に接続するには？

Wi‑Fi への接続手順の詳細については、[Reachy Mini Wireless ガイド](./platforms/reachy_mini/get_started.md)を参照してください。

### Wi‑Fi ホットスポットをリセットするには？

ロボットの Wi‑Fi ホットスポットをリセットする必要がある場合（接続できない、ネットワークを変更したい、など）、[Wi‑Fi Reset Guide](./platforms/reachy_mini/reset.md)の手順に従ってください。

### http://localhost:8000 のダッシュボードが動作しません。

:::info トラブルシューティング手順
**1. ブラウザの権限を確認する**：ブラウザがローカルネットワークへアクセスできることを確認してください。_macOS_ では、これらの権限は「System Settings → Privacy & Security → Local Network」にあります。

**2. Wireless Reachy Mini の場合**：PC とロボットの両方が**同じネットワーク**に接続されていることを確認し、そのうえでターミナルで次のコマンドを実行して接続性を確認してください：
:::

```bash
ping reachy-mini
```

:::info Lite Reachy Mini の場合
次の点を確認してください：
* _仮想環境:_ 仮想環境（`.venv`, `reachy_mini_env`, ...）内で実行していることを確認してください。
* _SDK の更新:_ 最新バージョンになっていることを確認してください。

`pip` を使う場合は、次を実行します：
```bash
pip install -U reachy-mini
```

`uv` を使う場合は、次を実行します：
```bash
uv pip install -U reachy-mini
```

* _デーモン:_ ターミナルでデーモン `reachy-mini-daemon` が動作していることを確認してください。
:::

### ロボットには Web API はありますか？

:::info はい！
デーモンは REST API（FastAPI）と WebSocket を提供します。
* **Docs:** `http://localhost:8000/docs`（デーモン動作時に利用可能）。
* **機能:** 状態取得、関節の移動、デーモンの制御。
:::

API を使ってロボットを制御したり、その状態を取得したり、さらにはデーモン自体を制御することもできます。API は [FastAPI](https://fastapi.tiangolo.com/) と [pydantic](https://docs.pydantic.dev/latest/) モデルを用いて実装されています。

ロボットとやり取りするために必要なエンドポイントはすべて提供されており、次のような操作が可能です：

* ロボットの状態の取得（関節位置、モーター状態など）
* ロボットの関節を動かす、または特定のポーズを設定する

API は OpenAPI を用いてドキュメント化されており、デーモンが動作しているときは http://localhost:8000/docs で利用可能なすべてのルートにアクセスし、テストできます。また、http://localhost:8000/openapi.json から生の OpenAPI スキーマにもアクセスできます。

これは、好みのプログラミング言語やフレームワーク向けのクライアントコードを生成したり、AI アプリケーションに接続したり、さらには MCP サーバーを作成したりしたい場合に役立ちます。

**WebSocket サポート**

API はリアルタイム更新のための WebSocket 接続にも対応しています。たとえば、関節状態の更新を購読できます：

```javascript
let ws = new WebSocket(`ws://127.0.0.1:8000/api/state/ws/full`);

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
};
```

### なぜ仮想環境 (.venv) が必要なのですか？

:::tip
SDK のインストール時にパッケージの競合を防ぐのに役立ちます。
:::

## 🤖 ハードウェア、モーターとリミット

### ハードウェアについての詳細情報はどこで確認できますか？

ロボットのハードウェア構成の詳細については、[Reachy Mini Hardware ページ](./platforms/reachy_mini/hardware.md)を参照してください。

### 安全リミット（頭部 & ボディ）はどうなっていますか？

:::warning 安全リミット
これらのリミットを超えるポーズを指示すると、ロボットは自動的に最も近い安全なポーズにクランプされます。
:::

* **Body Yaw:** [-180°, 180°]。
* **Head Pitch/Roll:** [-40°, 40°]。
* **Head Yaw:** [-180°, 180°]。
* **複合リミット:** `body_yaw` と `head_yaw` の差は **[-65°, 65°]** の範囲内でなければなりません。

### なぜモーターが「だらん」としたり「固く」なったりするのですか？（コンプライアンス）

* **`enable_motors()`**: モーター **ON**（固い）。ロボットは姿勢を保持します。
* **`disable_motors()`**: モーター **OFF**（だらん）。手で動かすことができます。
* **`make_motors_compliant()`**: モーターは **ON だがソフト**。デモンストレーションによる教示に便利です。

### モーターのパラメータにはどうやってアクセスしますか？

1. [scan_motors.py スクリプト](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/tools/scan_motors.py)を使ってモーターをスキャンする方法を参照できます。

:::tip ロボットが Lite の場合
スクリプトは PC 上で直接実行できます：
```bash
python -m reachy_mini.tools.scan_motors
```
:::

:::tip ロボットが Wireless の場合
ロボットに SSH 接続します：
```bash
ssh pollen@reachy-mini.local
```
venv を有効化します：
```bash
source /venvs/mini_daemon/bin/activate
```
そしてスクリプトを実行します（そのためにはモーターの電源が入っている必要があります！）：
```bash
python -m reachy_mini.tools.scan_motors --wireless
```
:::

検出されたモーターの一覧が表示されるはずです。すべてのモーターはボーレート 1000000 で、ID は 10,11, 12, 13, 14, 15,17, 18 になっている必要があります。いくつか欠けている場合は、ケーブルを再度確認してください。異なる ID やボーレートのモーターがある場合は、サポートに連絡してください。

正しい出力例：
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

2. Lite: Dynamixel Wizard を使ってモーターのパラメータを読み取ることもできます。ガイドは[こちら](./platforms/reachy_mini_lite/wizard.md)を参照してください。

### モーターがしばらくすると反応しなくなります。

* 電源ケーブルの接続を確認してください。
* モーターがサーマルプロテクションモード（過熱）に入った可能性があります。一度電源を切ってから入れ直してください。
* SDK を更新すること（`pip install -U reachy-mini`）で解決したユーザーもいます。
* モーターの LED が赤く点滅している場合は、上記の Essential Troubleshooting 内の「Motor blinking red or Overload Error」セクションを参照してください。

### バッテリーには安全機能がありますか？

:::info
Wireless には適切なバッテリーチャージャーが含まれています。
バッテリーには温度センサー付きの BMS も内蔵されています。
:::

### 残りバッテリーはどうやって確認しますか？

:::warning
バッテリー残量を確認する手段はなく、これは設計上の既知の制限です。

充電が必要なときの「バッテリー残量低下」を示す LED 表示のみがあります。（green -> orange -> red）
:::

### バッテリーの取り外し方

:::tip
* まず緑色の LED が点灯していないことを確認してください。
* 底面のネジ 3 本を外し、足部を少し引き出します。
![remove_foot](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/remove_foot.png)
* バッテリーを取り外せるように、示されているコネクタ（赤い矢印）を抜きます。バッテリーを固定するための両面テープが付いているはずなので、取り外しが少し固い場合があります。
![battery_location](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/battery_connector.png)
* 再組み立ての際は、これらの手順を逆順で行ってください。その際、ケーブルを挟み込まないよう注意してください。
:::

### 一部の公式モーション中に頭がボディに触れることがあります

:::info
この挙動は想定されたものであり、ハードウェアやソフトウェアのバグではありません。

ただし紛らわしいため、この接触を避けるようにモーションを更新する予定です。
:::

### 外観を変更できますか（スキン/CAD）？

:::info
* **CAD:** 完全な STEP ファイルはまだ公開されていませんが、今後公開する予定です。それまでの間は、リポジトリの [assets フォルダ](https://github.com/pollen-robotics/reachy_mini/tree/develop/src/reachy_mini/descriptions/reachy_mini/mjcf/assets)にいくつかの STL ファイルがあります。
* **Skins:** はい、コミュニティによってカスタムビルドが作成されています。いくつかの「skin」STEP ファイルは Discord の ["Pimp my Reachy Mini"](https://discord.com/channels/519098054377340948/1453340883775651861) チャンネルで共有されています。
:::

### マイクのフラットケーブルが壊れてしまいました

:::info 仕様
マイクケーブルの仕様は次のとおりです：
* FFC/FPC フラットフレキシブルケーブル
* 12 ピン
* 0.5mm ピッチ
* Type A（コネクタが同じ側）
* 15mm 長
:::

マイクケーブルの交換品を探している場合の参考リンクをいくつか挙げます：
* [Amazon](https://www.amazon.fr/dp/B09TR4X1BP?ref=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&ref_=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&social_share=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z)
* [Farnell](https://fr.farnell.com/molex/15020-0127/cordon-ffc-12-cond-152mm-blanc/dp/3862090)

## 🐍 SDK、アプリとプログラミング

### Python から接続するには？

`ReachyMini` クラスを使用します。

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
    print(mini.state)
```

### 新しい App を作成するには？

1.  ジェネレーターを使います：`reachy-mini-make-app my_app_name`。
2.  生成されたフォルダ内の `main.py` を編集します。
3.  次で実行します：`python my_app_name/main.py`。

詳細は [Hugging Face Tutorial](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps) を確認してください。

### ダッシュボードから直接アプリをインストールできますか？

:::tip
はい！ネイティブアプリであればダッシュボードから直接インストールでき、Web ベースのアプリであればお気に入りに追加できます。
:::

### Windows でアプリのインストールがすべて失敗します！

:::warning
Windows でシンボリックリンクを作成する権限が不足していることが原因の可能性があります。環境変数 `HF_HUB_DISABLE_SYMLINKS_WARNING` を 1 に設定すると、失敗の原因となっている警告を抑制できます。

ターミナルで次を実行します：
```powershell
set HF_HUB_DISABLE_SYMLINKS_WARNING=1
```
:::

### Hugging Face からのアプリインストールが失敗します。

:::tip
SDK を更新してください。初期バージョンには Space のインストールに関するバグがありました。

```bash
pip install -U reachy-mini
```
:::

### シミュレーションモードはありますか？

:::info
はい、MuJoCo 経由で利用できます。まだ開発中ですが、物理演算なしでロジックだけをテストする場合は `--sim` フラグや `ReachyMini(media_backend="no_media")` を付けてコードを実行できます。
:::

### Wireless でアプリをデバッグするには？

:::info
組み込みコンピュータに SSH 接続し、アプリをクローン（またはコピー）して手動で実行します。これは、ダッシュボードがアプリを起動するときの動作を再現します。
:::

```bash
ssh pollen@reachy-mini.local
# password: root
cd your_app_name
python your_app_name/main.py
```

GUI は通常のアドレス（例：`http://reachy-mini.local:8042`）で開きます。

## 🕹️ ロボットを動かす

### 頭部を動かすには？

`create_head_pose` とともに `goto_target` を使用します：

```python
from reachy_mini.utils import create_head_pose

# ... inside with ReachyMini() as mini:
mini.goto_target(head=create_head_pose(yaw=-10, pitch=20))
```

### `goto_target` と `set_target` の違いは何ですか？

:::info
* **`goto_target`**: **スムーズ**。時間をかけて動きを補間します（デフォルト 0.5 秒）。ジェスチャーに最適です。
* **`set_target`**: **即時**。ターゲットをすぐに設定します。高頻度制御（テレオペレーション、数式で定義された軌道）に最適です。
:::

### 動きを記録して再生するにはどうすればよいですか？

:::tip Recording
制御ループの前後で `start_recording()` と `stop_recording()` を呼び出します。
:::

```python
mini.start_recording()
# ... move robot ...
move = mini.stop_recording()
```

:::tip Replaying
[Hugging Face library](https://github.com/pollen-robotics/reachy_mini_dances_library) から動きを読み込むには `RecordedMoves` クラスを使用します。
:::

```python
mini.play_move(recorded_moves.get("dance_1"))
```

### ロボットの動きがぎこちなく見えます。制御ループは正しく動作していますか？

:::info
デーモンのステータスを確認することで、モーター制御ループが正しく動作しているか確認できます：
:::

* SDK 経由
```python
mini = ReachyMini()
print(mini.client.get_status())
```
* lite では `http://localhost:8000/docs`、Wireless では `http://reachy-mini.local:8000/docs` のダッシュボード API 経由（`/api/daemon/status` エンドポイントを探してください）

およそ 50Hz（周期約 20ms）前後の値が表示されるはずです：
```python
{
  ...
"motor_controller": "ControlLoopStats(period=~19.99ms, read_dt=~1.94 ms, write_dt=~0.19 ms)"
  ...
}
```

:::warning
周期が 20ms より大幅に長い場合、制御ループが十分な速度で動作していないことを意味します。これは次のような理由で発生する可能性があります：
* コンピュータの CPU 負荷が高い（例：他のアプリが CPU を使いすぎている）。
* （lite のみ）USB レイテンシが高い（シリアルポートの設定を試してください）。
:::

## 👁️ ビジョン & オーディオ

### 音量が小さすぎます（Linux）

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

### カメラフレームを取得するにはどうすればよいですか？

`media` オブジェクトを使用します。

```python
with ReachyMini() as mini:
    frame = mini.media.get_frame()
    # Returns an OpenCV-compatible numpy array
```

### マイク / スピーカーを使うにはどうすればよいですか？

```python
# Get audio
sample = mini.media.get_audio_sample()

# Play audio
mini.media.push_audio_sample(numpy_chunk)
```

### Reachy に何かを見させるにはどうすればよいですか？

* **2D（画像）:** `mini.look_at_image(x, y)` - (0,0 は左上)。
* **3D（ワールド）:** `mini.look_at_world(x, y, z)` - ロボット座標系での座標。

### 顔追跡が遅く感じられます。

:::tip
性能は照明条件に大きく依存します。顔が十分に明るく照らされていることを確認してください。デフォルトの OpenCV バックエンドと比べて、GStreamer バックエンドを使用するとレイテンシが改善される場合があります。
:::

### サウンドシステムが動作しているか確認するにはどうすればよいですか？

#### Reachy Mini Lite バージョン

:::info
Lite バージョンをテストする最も簡単な方法は、コンピュータから直接 *Pollen Robotics Reachy Mini Audio* デバイスを使用して、正しく動作しているか確認することです。
:::

#### Reachy Mini Wireless バージョン

:::info
Wireless バージョンでは、次の GStreamer コマンドを使用して音声の録音と再生をテストできます：
:::

```bash
# record a sound
gst-launch-1.0 -e alsasrc device="reachymini_audio_src" ! audioconvert ! audioresample ! wavenc ! filesink location="test.wav"
# playback the recording
gst-launch-1.0 filesrc location=test.wav ! wavparse ! audioconvert ! alsasink device=reachymini_audio_sink
#playback a test sound (pink noise)
gst-launch-1.0 audiotestsrc wave="pink-noise" ! audioconvert ! audioresample ! alsasink device=reachymini_audio_sink
```

:::tip Advanced Testing
エコーキャンセル性能をテストするために、録音しながら同時にサウンドを再生することができます。これにより、マイクアレイがスピーカーからのエコーを適切に処理・除去しているか確認できます。

**トラブルシューティングのヒント：**
* ホームディレクトリに `.asoundrc` ファイルが存在することを確認する
* マイクが認識されているか確認する：`arecord -l`
* スピーカーが認識されているか確認する：`aplay -l`
:::

## 🔧 特定のエラーメッセージと対処方法

### モーター `'<name>'` ハードウェアエラー: ['Input Voltage Error']

:::info
Reachy Mini ではより高い電圧を使用していますが、これは意図的なものです :)
:::

### エラー: "OSError: PortAudio library not found"

:::warning
システム依存パッケージが不足しています。次を実行してください：

```bash
sudo apt-get install libportaudio2
```

その後、デーモンを再起動してください。
:::

### 警告: "Circular buffer overrun"（シミュレーション / Mujoco）

:::tip
ロボットに接続しているにもかかわらずビデオフレームを消費していない場合、バッファが一杯になり、このメッセージが表示されます。

**対処法:** ビデオが不要な場合は、`ReachyMini(media_backend="no_media")` で初期化してください。
:::

### マイク入力 / 到来方向がない（ベータ版ユニット）

:::warning
* **入力なし:** ファームウェア 2.1.3 が必要です。[update script](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/firmware/update.sh) を実行してください。
* **方向なし:** ファームウェア 2.1.0 以上が必要です。
* フラットフレキシブルケーブルが正しい向きで取り付けられているか確認してください（組み立てガイドのスライド 45〜47）。
:::

## 📦 出荷と保証

### 荷物が破損している、または届いていません。

:::danger
すぐに **Pollen Robotics** チームに連絡してください。パッケージの写真、領収書番号または請求書番号、およびフルネームを添えて sales@pollen-robotics.com までメールをお送りください。輸送会社に確認し、結果をお知らせします。
:::

### 返金ポリシー

:::info
* **出荷前:** `sales@pollen-robotics.com` に連絡していただければ 100% 返金いたします。
* **出荷後:** 荷物の返送には 30 日間の猶予があります。配送証明および請求書または領収書番号を添えて sales（sales@pollen-robotics.com）にご連絡ください。ご意見やフィードバックがあればぜひお知らせください。私たちはオープンソースコミュニティが作ることを楽しめるロボットを開発することに注力しています。
:::

### 保証

:::info
部品が破損している、または誤動作している場合、Pollen のアフターセールスチームが保証対象となるハードウェア不良かどうかを判断します。その後、製造元から修理または交換部品が提供されます。問題箇所の写真、領収書番号または請求書番号、およびフルネームを添えて sales@pollen-robotics.com までメールをお送りください。
:::

## 💬 まだ解決しませんか？

このガイドで問題の答えが見つからなかった場合は、ぜひ直接ご連絡ください！
Pollen Robotics チームとコミュニティは Discord 上でアクティブに活動しており、個別の問題のトラブルシューティングをお手伝いします。

👉 **[Pollen Robotics Discord に参加する](https://discord.gg/Y7FgMqHsub)**
