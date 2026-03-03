---
description: Ignition Edgeを始める
title: Ignition Edgeを始める
keywords:
  - Edge
  - Edgebox RPI 200
  - Ignition Edge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edgebox-rpi-200-ignition-edge
last_update:
  date: 10/13/2023
  author: Corey Thompson
---
# Edgebox RPI 200 Ignition Edgeを始める

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/EdgeBox-200-Ignition/EdgeBox-200_Ignition_Edge.png" />
</p>

> ネットワークのリモートエッジで重要なデータをキャプチャ、処理、可視化することは困難で高コストになる場合があります。Inductive Automation®のIgnition Edgeは、フィールドで使用されるデバイスやネットワークエッジのOEMデバイス専用に設計された、制限付きで軽量なIgnition®ソフトウェアソリューションのラインです。Ignition Edgeにより、エッジコンピューティングはこれまで以上に簡単で手頃な価格になり、データ収集、可視化、システム管理をネットワークのエッジまで拡張できます。
>
> — [inductiveautomation.com](https://inductiveautomation.com/ignition/edge)

Ignition Edgeは、エッジデバイス上で組み合わせて使用し、ネットワークエッジで強力なソリューションを作成できる複数の製品を提供しています：

- **Ignition Edge IIoT**: フィールドデバイスデータをMQTT経由で公開します。
- **Ignition Edge Panel**: フィールドデバイス用のローカルHMIを作成します。
- **Ignition Edge Compute**: ネットワークに真のエッジコンピューティングを追加します。
- **Ignition Edge Sync Services**: ネットワークエッジからデータを同期します。
- **Ignition Edge EAM**: 他のEdge製品と組み合わせて集中管理を行います。

Ignition EdgeをネットワークエッジのフィールドおよびOEMデバイスに組み込むことで、最もリモートなデバイスでもIgnitionのスーパーパワーが機能します。Edgebox RPI 200は産業用信頼性とハイブリッド接続性を備えており、デジタルI/O、RS485、RS232、WiFi、BLE、\*4G、\*LoRa®などの強力な無線通信機能を持つため、Ignition Edgeコレクションの強力なアプリの組み合わせをホストする優れた選択肢となります。

> \*4Gおよび LoRa®モジュールはデフォルトでは含まれていません。関連するモジュールを適宜購入してください。

## ハードウェア前提条件

- SSHターミナル機能を持つPC / Mac
- Ignitionのデザイナーアプリケーションをインストールするための利用可能なハードドライブ容量を持つPC / Mac
- 12-24V DC電源
- イーサネットケーブル
- Edgebox RPI 200 x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

<br />

:::note
*このガイドでは、EdgeboxがSenseCraft Edge OSの工場出荷時インストールで動作しており、他のクライアントデバイスからSSHターミナルアクセスが可能であることを前提としています。*
:::

## Ignition Edgeのインストール

デバイスにIgnition Edgeをインストールするのは簡単です。

:::tip
デフォルトのSenseCraft Edge OSは32ビットインストールです。適切なインストーラーをダウンロードしてください。
:::

1. [Ignitionのダウンロードページ](https://inductiveautomation.com/downloads/)にアクセスします
2. 使用したいアプリケーションのバージョンをダウンロードします - パッケージをダウンロードする前に情報の入力を求められます。
3. 圧縮パッケージをインストールしたいエッジデバイスにコピーします（私は/opt/以下の場所を選択しました）
4. 現在の場所でパッケージを展開します
5. 残った元のパッケージを削除します
6. Ignition起動スクリプトを実行するための権限を変更します
7. Ignition起動スクリプトを起動します

これらの手順を自動化する便利なスクリプトが作成されています。これを使用するには、ignition edgeのダウンロード/インストールスクリプトを取得するだけです。スクリプトをダウンロードしたら、実行可能としてマークして実行します。必要なディレクトリを作成するためにスーパーユーザー権限が必要な場合があります。コーヒーでも飲みながらお待ちください。インストールには数分かかります。

```bash
curl -o download-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/download-ignition-edge.sh
chmod +x ./download-ignition-edge.sh
./download-ignition-edge.sh
```

### アンインストール

パッケージをアンインストールしたい場合（インストーラースクリプトによってインストールされたもの）、単純にアンインストールスクリプトをダウンロードして実行してください。Inductive Automationはアプリケーションのデフォルトの場所を提案していないため、*これはこのカスタムインストールでのみ動作します*。

```bash
curl -o uninstall-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/uninstall-ignition-edge.sh
chmod +x ./uninstall-ignition-edge.sh
./uninstall-ignition-edge.sh
```

## 初回のIgnition Edgeゲートウェイの起動

インストールが完了したら、サービスを開始する必要があります。[ゲートウェイをブート時に開始するように設定](#launch-ignition-edge-gateway-on-boot)してデバイスを再起動するか、手動でサービスを開始することを選択できます。

 ```bash
/opt/ignitionedge/ignition.sh start
```

:::tip
Ignition Edge Gatewayのホームページを読み込むことができれば、サービスが実行されているかどうかを簡単に確認できます。
:::

ゲートウェイのホームページを読み込むには、Edgebox自体で`localhost:8088`でWebブラウザを起動するか、ネットワーク上の別のデバイスから`{edgeboxhostname}:8088`で、またはネットワーク上のどこからでもEdgebox自体のIPアドレスで`{edgeboxip}:8088`でアクセスしてください。

<p style={{textAlign: 'center'}}>
  <img src ="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-eula-screenshot.png" />
</p>

### 起動時にIgnition Edge Gatewayを起動する

:::note
デバイスの起動時にゲートウェイのサービスを自動的に起動することをお勧めします。これを実現する方法は複数あり、最終的にはユーザーがどの方法を選択するかを決定します。
:::

起動時にサービスを起動する一つの方法は、起動コマンドを`.bashrc`に追加することです。これを行うには、お好みのテキストエディタで`.bashrc`を開くだけです。

```bash
nano ~/.bashrc
```

ファイルに起動コマンドを追加する

```bash
/opt/ignitionedge/ignition.sh start
```

<p style={{textAlign: 'center'}}>
  <img alt="Launch On Boot Setup" src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-gateway-launch-setup.png" />
</p>

そして、ファイルを保存することを忘れないでください！
（上記の例では nano を使用して `ctrl + x`）

:::warning
この方法では保存時にゲートウェイが起動しないため、変更が期待通りに動作することを確認するために Edgebox を再起動してください。
:::

## Ignition Edge の設定

ゲートウェイの設定は簡単なプロセスです。EULA に同意してから、Ignition のデフォルトユーザー/パスワードを作成してください。この情報は管理者権限で作成され、このシリーズ全体でシステム設定に使用されるため、覚えておいてください。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-create-user.png" />
</p>

:::note
Ignition Edge はデフォルトでマスター SCADA システムと通信するように設定されていますが、SCADA サーバーの使用は必須ではありません。Ignition Edge は完全にスタンドアロンの製品であり、将来必要に応じて SCADA ネットワークに簡単に接続できるように設定されています。
:::

ユーザーを作成した後、インストールのデフォルトポート設定を変更するかどうかを尋ねられます。私のネットワークには競合するポートがないため、デフォルトを受け入れることにしました。これらのポートは主要な SCADA インストールとの通信に使用されるため、既存の Ignition インストールと連携するように設定している場合は、このページが期待する値と一致することを確認してください。これらはアプリケーションで使用されるコアポートですが、将来モジュールをインストールする場合は、後で設定するポートが増える可能性があることに注意してください。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-configure-ports.png" />
</p>

これでサービスを初期化して起動する準備が整いました！セットアップには数分かかり、操作は必要ないため、後で確認することができます。完了するとデザイナーのホームページにリダイレクトされ、作業を開始できます！

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
