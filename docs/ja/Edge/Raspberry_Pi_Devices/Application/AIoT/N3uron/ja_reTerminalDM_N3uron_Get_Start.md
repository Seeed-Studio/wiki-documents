---
description: N3uronの使い方を始める
title: N3uronの使い方を始める
keywords:
  - reTerminal DM
  - 初めての使用
  - IIoT
  - 産業用
  - N3uron
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminalDM_N3uron_Get_Start
last_update:
  date: 05/15/2025
  author: Xabier Fernández と Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## N3uronとは？

[N3uron](https://n3uron.com/) は、**IIoT & DataOps向けの完全な産業用エッジプラットフォーム**であり、工場の現場とサードパーティアプリケーション（オンプレミスまたはクラウド）間のシームレスな統合を可能にします。

N3uronを使用すると、OTシステムとITシステム間で双方向のデータパイプラインを簡単に作成でき、すべての運用データを単一の信頼できる情報源に統合、モデリング、処理、可視化することで、デバイスをアプリケーションから切り離すことができます。最終的には、このデータを組織全体で利用可能にします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_1.png" /></center>

- **モジュール式**: 完全にモジュール化されており、約50のモジュールが用意されています。ユーザーはプロジェクトのニーズに応じて必要なものだけを選択してスタックできます。
- **クロスプラットフォーム**: N3uronは、ほとんどのWindowsバージョンやLinuxディストリビューション、Raspberry PiのようなARMアーキテクチャ上で動作します。
- **無制限ライセンス**: N3uronは無制限のライセンスモデルを採用しており、タグ、ユーザー、デバイス、接続に制限なく、手頃な価格で利用できます。
- **ウェブベース**: 一度インストールすれば、ノードにアクセスするのに必要なのはウェブブラウザだけです。
- **迅速な展開と開発**: N3uronは1分以内にインストール可能で、特にテンプレートを使用する場合、データモデルの作成が迅速に行えます。
- **非常に効率的**: 単一のノードで数十万のタグを簡単に管理でき、ハードウェア要件も低く抑えられています。
- **スケーラブルで多用途なアーキテクチャ**: N3uronは、数百または数千のノードを持つ分散アーキテクチャをシームレスに展開するために設計されています。ユーザーはN3uron Linksを使用して複数のノードを迅速に接続し、ニーズに応じてアーキテクチャを簡単にスケールアップできます。

## 前提条件

### ハードウェア

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェア

公式ウェブサイトからRaspberry Pi 64ビットOSの**Bullseye**バージョンをインストールすることをお勧めします。新しいRaspbian OSをインストールしたい場合は、この[**ガイド**](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/)に記載された手順に従ってください。

## インストール

N3uronは、ワンステップの自動インストールスクリプトを使用して簡単にインストールできます。以下の手順を進める前に、reTerminal DMがインターネットに接続されていることを確認してください。また、reTerminalに付属しているデフォルトのRaspberry Pi OSを使用していることを前提としています。

**ステップ 1**: まず、reTerminal DMへのアクセスを取得する必要があります。

- デスクトップ: マウスとキーボードを直接接続してください。その後、reTerminal DMデバイス上でターミナルアプリケーションを開いてください。

- VNC: Virtual Network Computing (VNC)を使用した完全なリモートデスクトップ。

- SSH: Secure Shell (SSH)を使用したリモート接続。reTerminalがネットワーク経由でアクセス可能であり、SSHサーバーが有効になっていることを確認してください。

詳細については、[reTerminal DMでSSHサーバーを設定する](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/#access-reterminal-dm-via-ssh)をご覧ください。

ターミナルで以下のコマンドを入力してください:

```sh
ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}
```

Raspberry Pi OSでは、デフォルトのユーザー名はpiです。
例えば:

```sh
ssh pi@192.168.2.100
```

パスワードの入力を求められます。Raspberry Pi OSでは、デフォルトのパスワードは**raspberry**です。

**ステップ 2**: ワンステップの自動インストールスクリプトを使用してN3uronをインストールします。

```sh
curl -fsSL https://get.n3uron.com/install.sh | sudo bash
```

数秒でN3uronがインストールされ、稼働状態になります。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_3.gif" /></center>

## アンインストール

reTerminalからN3uronをアンインストールするには、ターミナルで以下のコマンドを実行してください。

**ステップ 1:** N3uronサービスをアンインストールします。
```sh
sudo <n3uron folder>/bin/n3uron uninstall
```

例えば、N3uronが「/opt/n3uron」フォルダーにインストールされている場合、コマンドは以下のようになります:
```sh
sudo /opt/n3uron/bin/n3uron uninstall
```

**ステップ 2:** N3uronフォルダーを削除します（オプション）。
```sh
sudo rm -r <n3uron folder>
```

例えば、N3uronフォルダーが「/opt/n3uron」の場合、コマンドは以下のようになります:

```sh
sudo rm -r /opt/n3uron
```

## N3uron WebUIへのアクセス

N3uron WebUIにアクセスするには、以下の手順を実行してください:

**ステップ 1:** ローカルマシンでウェブブラウザを開きます。

**ステップ 2:** ブラウザのアドレスバーに以下のいずれかのアドレスを入力します:
- ローカルアクセスの場合: http://localhost:8003
- ローカルエリアネットワーク(LAN)内でのリモートアクセスの場合: http://reTerminal_IpAddress:8003
- ローカルセキュアアクセスの場合: https://localhost:8443
- ローカルエリアネットワーク(LAN)内でのセキュアなリモートアクセスの場合: https://reTerminal_IpAddress:8443

**ステップ 3:** Enterキーを押してN3uron WebUIのログインページに移動します。

**ステップ 4:** プロンプトが表示されたら、デフォルトのユーザー名**admin**とパスワード**n3uron**を入力します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_4.gif" /></center>

## 使用方法

N3uronはマイクロサービス指向のアーキテクチャで設計されており、各モジュールが独立したプロセスとして実行されます。Bootstrapはコアサービスであり、他のプロセスを管理します。デフォルトでは**WebUI**モジュールが自動的に有効化されており、インストールが完了するとすぐにアクセス可能になります。追加の機能は新しいモジュールインスタンスを作成することで有効化されます。

各モジュールは、運用モードで実行するために有効なライセンスが必要です。モジュールが有効なライセンスを見つけられない場合、デモモードで2時間実行されます。デモ期間を再開するには、モジュールを再起動する必要があります。

WebVisionモジュールを利用して、最初のHMI体験を作成し、reTerminal DMの視覚化機能を向上させましょう。

## reTerminal DM における WebVision の紹介

WebVision は、産業用途向けに特化した自己完結型の純粋な Web HMI/SCADA インターフェースです。完全に JavaScript、HTML5、CSS 技術を基盤として構築されており、スマートフォン、タブレット、タッチスクリーン、ノートパソコン、デスクトップコンピュータ、制御室のビデオウォールなど、さまざまなデバイスでアプリケーションをシームレスに制御できる比類のない柔軟性を提供します。

オールインワンのソリューションとして設計された WebVision は、外部アプリケーションを必要とせず、必要なすべてがそのまま利用可能です。監視と制御からデータ収集と分析まで、WebVision は効率と利便性の基準を設定します。
詳細については、WebVision の専用ウェブサイト [Knowledge Base](https://docs.n3uron.com/docs/web-vision) をご覧ください。

### WebVision モジュールのインスタンス化

**ステップ 1:** N3uron を開き、Config メニューに移動します。

**ステップ 2:** Modules をクリックし、新しいモジュールを作成します。このインスタンスには任意の名前を付けることができます（ただし、‘.’、‘/’ などの特殊文字を含む名前は使用できません）。モジュールの識別を容易にするため、インスタンス名をインスタンス化するモジュール名に類似させることを推奨します。この例では、WebVision モジュールを選択し、WebVision という名前を付けています。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_5.gif" /></center>

**ステップ 3:** WebVision のメイン設定に移動し、適切なサーバー設定を選択します。ほとんどの使用ケースではデフォルト設定で十分です。詳細については、以下のリンクをご参照ください: [WebVision 初期設定](https://docs.n3uron.com/docs/web-vision-configuration)。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_6.png" /></center>

**ステップ 4:** WebVision モジュールがインスタンス化されたら、最初のステップとして、WebUI の Roles セクションで以前に作成されたロールに権限を割り当てます。デフォルトでは、管理アクセス用の Administrator と通常アクセス用の User の 2 つのロールが存在します。これらのロールにユーザーを追加するか、必要に応じて新しいロールを作成できます。ロールが確立されたら、Designer と Viewer のロールに応じて権限を設定します。
さらに、各ロールに対してタグフィルターパスを設定します。タグフィルターパスアクセスは、対応するロールが視覚化できるタグモデルのタグを決定します。この場合、タグモデルの完全なパスを両方のロールに割り当てます。

- Administrator:
    - Designer: Edit
    - Viewer: View
    - TagFilterPath:
        - Mode: Include
        - Path: /
        - Regex pattern: .*
- User:
    - Designer: None
    - Viewer: View
    - TagFilterPath:
        - Mode: Include
        - Path: /
        - Regex pattern: .*

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_7.gif" /></center>

- 有用なリンク

  - [ユーザーとロールの設定](https://docs.n3uron.com/docs/platform-security-users-and-roles)

  - [アクセス設定](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)

**ステップ 5:** 初期 WebVision 画面をテストするために、タグを作成します。WebUI に移動し、**Config** を選択して **Tag** をクリックします。**Model** セクションでメニューをクリックし、**New Tag** を選択します。例えば、**TestTag** という名前を付け、タイプを **Number** に設定し、**Read-Write 権限** を付与し、初期値を 0 に設定（任意）して設定を保存します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_8.gif" /></center>

**ステップ 6:** 次に、Config セクションの WebVision に移動し、**Open Designer** をクリックします。
**Administrator の資格情報**を使用してログインします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_9.png" /></center>

**ステップ 7:** Templates セクションで、Main という名前の新しいコンテナを作成します。その後、このコンテナをスタートアップとして指定します。これにより、Main が初期 WebVision 画面として設定され、横にアスタリスク記号 (*) が表示されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_10.gif" /></center>

**ステップ 8:** Main コンテナの背景色を変更します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_11.gif" /></center>

**ステップ 9:** Main コンテナ内で、Components に移動し、新しいコンポーネントを追加します。この例では、Gauge コンポーネントを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_12.gif" /></center>

**ステップ 10:** Gauge コンポーネント内で、ゲージコンポーネントに表示される値を提供するタグを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_13.gif" /></center>

**ステップ 11:** 次に、Config セクションの WebVision に移動し、Open UI をクリックします。
**Administrator の資格情報**を使用してログインします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

**ステップ 12:** 簡単なデザインをテストするために、WebUI に移動して Data > Realtime を選択します。TestTag の値を変更します。その後、WebVision UI に戻り、Gauge コンポーネントに表示される値が更新されたかどうかを確認します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_15.gif" /></center>

WebVision を活用して reTerminal DM の体験をさらに向上させる方法はたくさんあります。詳細については、[WebVision に関する Knowledge Base](https://docs.n3uron.com/docs/web-vision-configuration) をご参照ください。

N3uron の WebVision モジュールと Seeed Studio の reTerminal DM を組み合わせることで、SCADA および HMI アプリケーション向けの強力な視覚処理を提供します。この画像はその例を示しています。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_16.png" /></center>

これまでご覧いただいたのはほんの始まりに過ぎません。約50のモジュールからなる印象的な機能群が提供する無限の可能性を受け入れましょう。大きな夢を描き、革新し、N3uronの最先端機能を活用してプロジェクトを新たな高みへと引き上げてください。この強力なプラットフォームについてさらに詳しく知りたい方は、[https://n3uron.com/](https://n3uron.com/) を訪れて、エキサイティングな発見の旅に出発しましょう！

## 技術サポート

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>