---
description: Ignition Edge の使い方を始める
title: Ignition Edge の使い方を始める
keywords:
  - Edge
  - Edgebox RPI 200
  - Ignition Edge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edgebox-rpi-200-ignition-edge
last_update:
  date: 05/15/2025
  author: Corey Thompson
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Edgebox RPI 200 Ignition Edge の使い方を始める

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/EdgeBox-200-Ignition/EdgeBox-200_Ignition_Edge.png" />
</p>

> ネットワークのリモートエッジで重要なデータを収集、処理、可視化することは困難で高コストになることがあります。Inductive Automation® の Ignition Edge は、フィールドで使用されるデバイスやネットワークエッジの OEM デバイス向けに特別に設計された、限定的で軽量な Ignition® ソフトウェアソリューションのラインです。Ignition Edge を使用することで、エッジコンピューティングがこれまで以上に簡単かつ手頃な価格で利用できるようになり、ネットワークのエッジまでデータ収集、可視化、システム管理を拡張することができます。
>
> — [inductiveautomation.com](https://inductiveautomation.com/ignition/edge)

Ignition Edge は、ネットワークのエッジデバイス上で強力なソリューションを構築するために組み合わせて使用できるいくつかの製品を提供しています：
- **Ignition Edge IIoT**: フィールドデバイスのデータを MQTT を通じて公開します。
- **Ignition Edge Panel**: フィールドデバイス向けのローカル HMI を作成します。
- **Ignition Edge Compute**: ネットワークに真のエッジコンピューティングを追加します。
- **Ignition Edge Sync Services**: ネットワークのエッジからデータを同期します。
- **Ignition Edge EAM**: 他の Edge 製品と組み合わせて中央管理を実現します。

Ignition Edge をネットワークエッジのフィールドおよび OEM デバイスに組み込むことで、最もリモートなデバイスでも Ignition の強力な機能を活用できます。Edgebox RPI 200 は、デジタル I/O、RS485、RS232 といった産業用の信頼性とハイブリッド接続性を備え、WiFi、BLE、\*4G、\*LoRa® といった強力な無線通信機能を提供します。これにより、Ignition Edge コレクションの強力なアプリを組み合わせてホストする優れた選択肢となります。

> \*4G と LoRa® モジュールはデフォルトでは含まれていません。必要に応じて関連モジュールを購入してください。

## ハードウェアの前提条件
- SSH ターミナル機能を備えた PC / Mac
- Ignition の Designer アプリケーションをインストールするための十分なハードドライブ容量を備えた PC / Mac
- 12-24V DC 電源
- イーサネットケーブル
- Edgebox RPI 200 x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

:::note
*このガイドでは、Edgebox が SenseCraft Edge OS の工場出荷時インストールを実行しており、別のクライアントデバイスから SSH ターミナルアクセスが可能であることを前提としています。*
:::

## Ignition Edge のインストール

Ignition Edge をデバイスにインストールするのは簡単です。

:::tip
SenseCraft Edge OS のデフォルトは 32 ビットインストールです。適切なインストーラーをダウンロードしてください。
:::

1. [Ignition のダウンロードページ](https://inductiveautomation.com/downloads/)にアクセスします。
2. 使用したいアプリケーションのバージョンをダウンロードします。ダウンロードする前に情報を入力するよう求められます。
3. 圧縮されたパッケージをインストールしたいエッジデバイスにコピーします（例として /opt/ 以下の場所を選択しました）。
4. 現在の場所でパッケージを解凍します。
5. 残った元のパッケージを削除します。
6. Ignition のスタートスクリプトを実行するための権限を変更します。
7. Ignition のスタートスクリプトを起動します。

これらの手順を自動化する便利なスクリプトが作成されています。このスクリプトを使用するには、Ignition Edge のダウンロード/インストールスクリプトを取得するだけです。スクリプトをダウンロードしたら、実行可能に設定して実行します。必要なディレクトリを作成するためにスーパーユーザーの資格情報が必要になる場合があります。コーヒーを用意してお待ちください。インストールには数分かかります。

```bash
curl -o download-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/download-ignition-edge.sh
chmod +x ./download-ignition-edge.sh
./download-ignition-edge.sh
```

### アンインストール

インストーラースクリプトでインストールされたパッケージをアンインストールしたい場合は、アンインストールスクリプトをダウンロードして実行するだけです。Inductive Automation はアプリケーションのデフォルトの場所を提案していないため、*このカスタムインストールにのみ対応します*。

```bash
curl -o uninstall-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/uninstall-ignition-edge.sh
chmod +x ./uninstall-ignition-edge.sh
./uninstall-ignition-edge.sh
```

## 初めて Ignition Edge Gateway を起動する

インストールが完了したら、サービスを開始する必要があります。[ゲートウェイを起動時に自動的に開始する設定](#launch-ignition-edge-gateway-on-boot)を行い、デバイスを再起動するか、手動でサービスを開始することができます。

```bash
/opt/ignitionedge/ignition.sh start
```

:::tip
サービスが実行されているかどうかは、Ignition Edge Gateway のホームページを読み込むことで簡単に確認できます。
:::

ゲートウェイのホームページを読み込むには、Edgebox 自体で `localhost:8088` を使用してウェブブラウザを起動するか、ネットワーク上の別のデバイスから `{edgeboxhostname}:8088` を使用するか、Edgebox 自体の IP アドレスを使用して `{edgeboxip}:8088` を使用します。

<p style={{textAlign: 'center'}}>
  <img src ="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-eula-screenshot.png" />
</p>

### 起動時に Ignition Edge Gateway を起動する
:::note
デバイスの起動時にゲートウェイのサービスを自動的に起動することをお勧めします。これを実現する方法は複数あり、最終的にはユーザーがどの方法を選択するかに依存します。
:::

サービスを起動時に起動する方法の一つは、起動コマンドを `.bashrc` に追加することです。これを行うには、任意のテキストエディタで `.bashrc` を開きます。

```bash
nano ~/.bashrc
```

ファイルに起動コマンドを追加します。

```bash
/opt/ignitionedge/ignition.sh start
```

<p style={{textAlign: 'center'}}>
  <img alt="Launch On Boot Setup" src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-gateway-launch-setup.png" />
</p>

そしてファイルを保存するのを忘れないでください！
（上記の例では nano を使用しているため、`ctrl + x` を押します）

:::warning
この方法では保存時にゲートウェイが起動しないため、Edgebox を再起動して変更が期待通りに動作することを確認してください。
:::

## Ignition Edge の設定

ゲートウェイの設定は簡単なプロセスです。まず、EULA（エンドユーザーライセンス契約）に同意し、Ignition のデフォルトのユーザー名とパスワードを作成します。この情報は管理者権限で作成され、シリーズ全体を通じてシステム設定に使用されるため、忘れないようにしてください。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-create-user.png" />
</p>

:::note
Ignition Edge はデフォルトでマスター SCADA システムと通信するように設定されていますが、SCADA サーバーを使用する必要はありません。Ignition Edge は完全にスタンドアロンの製品であり、将来的に必要に応じて SCADA ネットワークに簡単に統合できるように設計されています。
:::

ユーザーを作成した後、インストールのデフォルトポート設定を変更するかどうか尋ねられます。私のネットワークではポートの競合がないため、デフォルトを受け入れることにしました。これらのポートは、プライマリ SCADA インストールと通信するために使用されます。そのため、既存の Ignition インストールと連携するように設定する場合は、このページが期待する値と一致していることを確認してください。これらはアプリケーションで使用される主要なポートですが、将来的にモジュールをインストールする場合、さらに多くのポートを設定する必要がある可能性があります。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-configure-ports.png" />
</p>

これでサービスを初期化して起動する準備が整いました！セットアップには数分かかりますが、操作は不要なので後で確認することができます。セットアップが完了するとデザイナーホームページにリダイレクトされ、作業を開始する準備が整います！

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>