---
description: reTerminal DM Ignition Edge の使い方ガイド
title: reTerminal DM Ignition Edge の使い方ガイド
keywords:
  - Edge
  - reTerminal-DM
  - Ignition Edge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM-Getting-Started-with-Ignition-Edge
last_update:
  date: 05/15/2025
  author: Corey Thompson
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal DM Ignition Edge の使い方ガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/reTerminal_DM_Ignition_Edge.png" alt="pir" width="600" height="auto"/></p>

> ネットワークのリモートエッジで重要なデータを収集、処理、可視化することは困難で高コストになる場合があります。Inductive Automation® の Ignition Edge は、フィールドデバイスやネットワークエッジの OEM デバイス向けに特別に設計された、軽量で制限付きの Ignition® ソフトウェアソリューションのラインです。Ignition Edge を使用することで、エッジコンピューティングがこれまで以上に簡単かつ手頃な価格で実現でき、データ収集、可視化、システム管理をネットワークのエッジまで拡張することができます。
>
> — [inductiveautomation.com](https://inductiveautomation.com/ignition/edge)

Ignition Edge は、エッジデバイス上で組み合わせて使用できる複数の製品を提供し、ネットワークエッジで強力なソリューションを構築できます：
- **Ignition Edge IIoT**: フィールドデバイスのデータを MQTT を通じて公開。
- **Ignition Edge Panel**: フィールドデバイス用のローカル HMI を作成。
- **Ignition Edge Compute**: 真のエッジコンピューティングをネットワークに追加。
- **Ignition Edge Sync Services**: ネットワークエッジからデータを同期。
- **Ignition Edge EAM**: 他の Edge 製品と組み合わせて中央管理を実現。

Ignition Edge をネットワークエッジのフィールドデバイスや OEM デバイスに組み込むことで、Ignition をネットワークのエッジまで拡張できます。reTerminal DM は、デジタル I/O、CAN バス、RS485、RS232 などの豊富な拡張性とハイブリッド接続性、WiFi、BLE、\*4G、\*LoRa® などの強力な無線通信機能、さらに 10.1 インチの 10 点マルチタッチ高感度静電容量式パネルを備えており、Ignition Edge コレクションの強力なアプリをホストする優れたオプションとなります。

> \*4G および LoRa® モジュールは reTerminal DM にデフォルトでは付属していません。該当するモジュールを別途購入してください。

## ハードウェアの前提条件
- SSH ターミナル機能を備えた PC / Mac
- Ignition の Designer アプリケーションをインストールするための空き容量を持つ PC / Mac
- 12-24V DC 電源
- イーサネットケーブル
- reTerminal DM x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

:::note
*このガイドは、reTerminal DM が Raspberry Pi OS(x64) の新規インストールで、別のクライアントデバイスから SSH ターミナルアクセスが可能であることを前提としています。詳細な手順が必要な場合は、[reTerminal DM のオペレーティングシステムをフラッシュする手順](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os) を参照してください。*
:::

## reTerminal における Ignition Edge のインストール

デバイスに Ignition Edge をインストールするのは簡単です。

1. [Ignition のダウンロードページ](https://inductiveautomation.com/downloads/)にアクセスします。
2. 使用したいアプリケーションのバージョンをダウンロードします。ダウンロードする前に情報を入力するよう求められます。
3. 圧縮されたパッケージをインストールしたいエッジデバイスにコピーします（ここでは `/opt/` 以下の場所を選択しています）。
4. 現在の場所でパッケージを解凍します。
5. 元の圧縮パッケージを削除します。
6. Ignition のスタートスクリプトを実行可能にするために権限を変更します。
7. Ignition のスタートスクリプトを起動します。

これらの手順を自動化し、Inductive Automation のサイトでユーザーログインを作成する必要がない便利なスクリプトが用意されています。このスクリプトを使用するには、Ignition Edge のダウンロード/インストールスクリプトを取得するだけです。スクリプトをダウンロードしたら、実行可能にして実行します。必要なディレクトリを作成するためにスーパーユーザーの資格情報が必要になる場合があります。インストールには数分かかるので、コーヒーでも飲みながらお待ちください。

```bash
curl -o download-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/download-ignition-edge.sh
chmod +x ./download-ignition-edge.sh
./download-ignition-edge.sh
```

### アンインストール

インストーラースクリプトでインストールされたパッケージをアンインストールしたい場合は、アンインストールスクリプトをダウンロードして実行するだけです。Inductive Automation はアプリケーションのデフォルトの場所を提案していないため、*このカスタムインストールにのみ対応しています*。

```bash
curl -o uninstall-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/uninstall-ignition-edge.sh
chmod +x ./uninstall-ignition-edge.sh
./uninstall-ignition-edge.sh
```

## 初めて Ignition Edge Gateway を起動する

インストールが完了したら、サービスを起動する必要があります。[ゲートウェイを起動時に自動起動するよう設定](#launch-ignition-edge-gateway-on-boot)し、reTerminal を再起動するか、手動でサービスを起動することができます。

```bash
/opt/ignitionedge/ignition.sh start
```

:::tip
Ignition Edge Gateway のホームページを読み込むことができれば、サービスが実行中であることを簡単に確認できます。
:::

ゲートウェイのホームページを読み込むには、reTerminal 自体で `localhost:8088` を使用してウェブブラウザを起動するか、ネットワーク上の別のデバイスから `{reterminalhostname}:8088` を使用するか、または reTerminal 自体の IP アドレスを使用して `{reterminalip}:8088` にアクセスします。

<p style={{textAlign: 'center'}}>
  <img src ="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-eula-screenshot.png" />
</p>

### 起動時に Ignition Edge Gateway を自動起動する
:::note
デバイスの起動時にゲートウェイのサービスを自動的に起動することをお勧めします。これを実現する方法はいくつかあり、最終的にはユーザーがどの方法を選ぶかに依存します。
:::

サービスを起動時に自動起動する方法の一つとして、起動コマンドを `.bashrc` に追加する方法があります。これを行うには、任意のテキストエディタで `.bashrc` を開きます。

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

そして、ファイルを保存するのを忘れないでください！
（上記の例では `ctrl + x` を使用して nano で保存します）

:::warning
この方法では保存時にゲートウェイは起動しないため、変更が期待通りに動作することを確認するために reTerminal を再起動してください。
:::

## Ignition Edge の設定

ゲートウェイの設定は非常に簡単です。まず、EULA（エンドユーザー使用許諾契約）を承諾し、Ignition のデフォルトのユーザー名とパスワードを作成します。この情報は管理者権限で作成され、シリーズ全体を通じてシステム構成に使用されるため、忘れないようにしてください。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-create-user.png" />
</p>

:::note
Ignition Edge はデフォルトでマスター SCADA システムと通信するように設定されていますが、SCADA サーバーを使用する必要はありません。Ignition Edge は完全に独立した製品であり、将来的に SCADA ネットワークに簡単に接続できるように構成されています。
:::

ユーザーを作成した後、インストールのデフォルトのポート設定を変更するかどうか尋ねられます。ネットワークに競合するポートがないため、私はデフォルトを受け入れることを選びました。これらのポートは、プライマリ SCADA インストールと通信するために使用されます。そのため、既存のインストール Ignition と連携するように構成する場合は、このページが期待する値と一致していることを確認してください。これらはアプリケーションで使用される主要なポートですが、将来的にモジュールをインストールする場合、さらに多くのポートを構成する必要がある可能性があります。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-configure-ports.png" />
</p>

これでサービスを初期化して起動する準備が整いました！セットアップには数分かかりますが、操作は必要ないため、後で確認することができます。完了するとデザイナーのホームページにリダイレクトされ、作業を開始する準備が整います！

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

## 技術サポートと製品に関する議論

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>