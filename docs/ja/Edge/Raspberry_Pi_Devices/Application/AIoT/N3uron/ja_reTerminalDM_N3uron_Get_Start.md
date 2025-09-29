---
description: N3uronを始める
title: N3uronを始める
keywords:
  - reTerminal DM
  - Getting started
  - IIoT
  - Industrial 
  - N3uron
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminalDM_N3uron_Get_Start
last_update:
  date: 2/27/2024
  author: Xabier Fernández and Kasun Thushara
---

## N3uronとは？

[N3uron](https://n3uron.com/)は、産業プラントフロアとサードパーティアプリケーション（オンプレミスまたはクラウド）間のシームレスな統合を可能にする、**IIoT & DataOps向けの完全な産業エッジプラットフォーム**です。

N3uronを使用することで、OTシステムとITシステム間の双方向データパイプラインを簡単に作成し、すべての運用データを単一の信頼できるソースに統合、モデル化、処理、可視化することで、デバイスをアプリケーションから分離し、最終的にこのデータを組織全体で利用可能にすることができます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_1.png" /></center>

- **モジュラー**: 完全にモジュラー設計で、約50のモジュールを提供しており、ユーザーはプロジェクトのニーズに応じて必要なものを積み重ね、アプリケーションに厳密に必要なもののみを取得できます。
- **クロスプラットフォーム**: N3uronは、ほとんどのWindowsおよびLinuxディストリビューションのバージョン、さらにRaspberry PiなどのARMアーキテクチャでも動作します。
- **無制限ライセンス**: N3uronは無制限ライセンスモデルを誇り、タグ、ユーザー、デバイス、接続の制限なく、手頃な価格で無制限の使用を提供します。
- **Webベース**: インストール後、ノードにアクセスするために必要なのはWebブラウザだけです。
- **迅速な展開と開発**: N3uronは1分以内にインストールでき、その開発環境は、特にテンプレートを利用する際に迅速なデータモデル作成を促進します。
- **極めて効率的**: 単一ノードで数十万のタグを簡単に管理でき、低いハードウェア要件を維持します。
- **スケーラブルで汎用性のあるアーキテクチャ**: N3uronは当初から、数百または数千のノードを持つ分散アーキテクチャをシームレスに展開するように設計されました。ユーザーはN3uron Linksを使用して複数のノードを迅速に接続し、ニーズに合わせてアーキテクチャを簡単にスケールできます。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### ソフトウェア

公式ウェブサイトから Raspberry Pi 64 bit OS の **Bullseye** バージョンをインストールすることをお勧めします。新しい Raspbian OS をインストールしたい場合は、この[**ガイド**](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/)に記載されている手順に従ってください。

## インストール

N3uron は、ワンステップ自動インストールスクリプトで簡単にインストールできます。以下の手順を進める前に、reTerminal DM がインターネットに接続されていることを確認してください。また、reTerminal に付属のデフォルトの Raspberry Pi OS を使用していることを前提としています。

 **ステップ 1**: まず、reTerminal DM にアクセスする必要があります。

- デスクトップ: マウスとキーボードを直接接続します。reTerminal DM デバイスでターミナルアプリケーションを開いてください。

- VNC: Virtual Network Computing (VNC) を使用したフルリモートデスクトップ。

- SSH: Secure Shell (SSH) を使用したリモート接続。reTerminal がネットワーク経由でアクセス可能で、SSH サーバーが有効になっていることを確認してください。

詳細については、[reTerminal DM での SSH サーバーの設定](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/#access-reterminal-dm-via-ssh)をご覧ください。

ターミナルで次のコマンドを入力します：

```sh
ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}
```

Raspberry Pi OSでは、デフォルトのユーザー名はpiです。
例えば：

```sh
ssh pi@192.168.2.100
```

パスワードの入力を求められます。Raspberry Pi OSでは、デフォルトのパスワードは**raspberry**です。

- ステップ2：ワンステップ自動インストールスクリプトでN3uronをインストールします。

```sh
curl -fsSL https://get.n3uron.com/install.sh | sudo bash
```

数秒でN3uronがインストールされ、起動して実行されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_3.gif" /></center>

## アンインストール

reTerminalからN3uronをアンインストールするには、ターミナルで以下のコマンドを実行してください

**ステップ 1:** N3uronサービスをアンインストールします。

```sh
sudo <n3uron folder>/bin/n3uron uninstall
```

例えば、N3uronが'/opt/n3uron'フォルダにインストールされている場合、コマンドは次のようになります：

```sh
sudo /opt/n3uron/bin/n3uron uninstall
```

**ステップ 2:** N3uronフォルダを削除する（オプション）。

```sh
sudo rm -r <n3uron folder>
```

例えば、N3uronフォルダが'/opt/n3uron'の場合、コマンドは次のようになります：

```sh
sudo rm -r /opt/n3uron
```

## N3uron WebUIへのアクセス

N3uron WebUIにアクセスするには、以下の手順に従ってください：

**ステップ1:** ローカルマシンでWebブラウザを開きます。

**ステップ2:** ブラウザのアドレスバーに以下のアドレスのいずれかを入力します：

- ローカルアクセス用: http://localhost:8003
- ローカルエリアネットワーク（LAN）内でのリモートアクセス用: http://reTerminal_IpAddress:8003
- ローカルセキュアアクセス用: https://localhost:8443
- ローカルエリアネットワーク（LAN）内でのセキュアリモートアクセス用: https://reTerminal_IpAddress:8443

**ステップ3:** Enterキーを押してN3uron WebUIログインページに移動します。

**ステップ4:** プロンプトが表示されたら、デフォルトのユーザー名 **admin** とパスワード **n3uron** を入力します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_4.gif" /></center>

## 使用方法

N3uronは、各モジュールが独立したプロセスとして実行され、Bootstrapが他のプロセスを管理するコアサービスとなるマイクロサービス指向アーキテクチャで設計されています。デフォルトでは **WebUI** モジュールが自動的に有効化され、インストール完了と同時にアクセス可能になります。追加機能は新しいモジュールインスタンスを作成することで有効化されます。

各モジュールは本番モードで実行するために有効なライセンスが必要です。モジュールが有効なライセンスを見つけられない場合、2時間のデモモードで実行されます。デモ期間を再開するには、モジュールを再起動する必要があります。

WebVisionモジュールを活用して最初のHMI体験を作成し、reTerminal DMの可視化機能を強化しましょう。

## reTerminal DMへのWebVisionの導入

WebVisionは、産業用アプリケーション向けに特別に設計された、自己完結型の純粋なWebベースHMI/SCADAインターフェースです。JavaScript、HTML5、CSSテクノロジーで完全に構築されたWebVisionは、比類のない柔軟性を提供し、ユーザーがスマートフォン、タブレット、タッチスクリーン、ラップトップ、デスクトップコンピューター、制御室ビデオウォールなど、さまざまなデバイスでアプリケーションをシームレスに制御できるようにします。

オールインワンソリューションとして設計されたWebVisionは、外部アプリケーションの必要性を排除し、必要なものはすべて箱から出してすぐに利用できます。監視と制御からデータ収集と分析まで、WebVisionは効率性と利便性の標準を設定します。
詳細については、[ナレッジベース](https://docs.n3uron.com/docs/web-vision)のWebVision専用ウェブサイトをご覧ください。

### WebVisionモジュールのインスタンス化

**ステップ1:** N3uronを開き、Configメニューに移動します。

**ステップ2:** Modulesをクリックし、新しいモジュールを作成します。このインスタンスには任意の名前を付けることができます（'.'、'/'などの特殊文字を含む名前は除く）が、簡単な識別のために、インスタンス化されるモジュール名と類似した名前を付けることをお勧めします。この例では、WebVisionモジュールが選択され、WebVisionという名前も付けられています。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_5.gif" /></center>

**ステップ3:** WebVisionのメイン設定に移動し、適切なサーバー設定を選択します。デフォルト設定はほとんどの使用ケースで十分です。詳細については、以下のリンクを参照してください：[WebVision初期設定](https://docs.n3uron.com/docs/web-vision-configuration)。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_6.png" /></center>

**ステップ4:** WebVisionモジュールがインスタンス化されたら、最初のステップは、WebUIのRolesセクションで以前に作成されたロールに権限を割り当てることです。デフォルトでは、管理アクセス用のAdministratorと通常アクセス用のUserの2つのロールが存在します。これらのロールにユーザーを追加するか、必要に応じて新しいロールを作成できます。ロールが確立されたら、DesignerとViewerロールの権限を適切に設定します。
さらに、各ロールにTagフィルターパスを設定します。Tagフィルターパスアクセスは、対応するロールによる可視化のために、タグモデルからどのタグがアクセス可能になるかを決定します。この場合、両方のロールにタグモデルの完全なパスを割り当てます。

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

**ステップ5:** 最初のWebVision画面をテストするために、タグを作成しましょう。WebUIに移動し、**Config**を選択し、**Tag**をクリックします。**Model**セクションで、メニューをクリックし、**New Tag**を選択します。例えば**TestTag**という名前を付け、タイプを**Number**として選択し、**Read-Write permission**を付与し、0に初期化し（オプション）、設定を保存します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_8.gif" /></center>

**ステップ6:** 次に、ConfigセクションのWebVisionに移動し、**Open Designer**をクリックします。
**Administrator認証情報**を使用してログインします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_9.png" /></center>

**ステップ7:** Templatesセクションで、Mainという名前の新しいContainerを作成します。次に、このコンテナをスタートアップとして指定します。これによりMainが最初のWebVision画面として設定されます。横にアスタリスク記号（*）が表示されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_10.gif" /></center>

**ステップ8:** Mainコンテナの背景色を変更します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_11.gif" /></center>

**ステップ9:** Mainコンテナ内で、Componentsに移動し、新しいコンポーネントを追加します。この例では、Gaugeコンポーネントを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_12.gif" /></center>

**ステップ 10:** Gauge コンポーネント内で、ゲージコンポーネントに表示される値を提供するタグを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_13.gif" /></center>

**ステップ 11:** 次に、Config セクションの WebVision に移動し、Open UI をクリックします。
Administrator の認証情報を使用してログインします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

**ステップ 12:** シンプルなデザインをテストするために、WebUI に移動し、Data > Realtime を選択します。TestTag の値を変更します。その後、WebVision UI に戻り、Gauge コンポーネントに表示される値が更新されているかを確認します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_15.gif" /></center>

reTerminal DM の体験を向上させるために、WebVision について探求すべきことがたくさんあります。詳細については、[WebVision に関するナレッジベース](https://docs.n3uron.com/docs/web-vision-configuration)をご参照ください。

N3uron の WebVision モジュールと Seeed Studio の reTerminal DM を組み合わせることで、SCADA および HMI アプリケーション向けの強力な視覚処理を提供します。この画像は説明目的の例として示されています。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_16.png" /></center>

ご覧いただいたのは始まりに過ぎません。約50のモジュールという印象的な配列が提供する無限の可能性を受け入れてください。大きな夢を抱き、革新し、N3uron の最先端機能でプロジェクトを新たな高みへと押し上げる勇気を持ってください。この強力なプラットフォームについてより深く知るには、[https://n3uron.com/](https://n3uron.com/) を訪問し、エキサイティングな発見の旅に出発しましょう！

## 技術サポート

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
