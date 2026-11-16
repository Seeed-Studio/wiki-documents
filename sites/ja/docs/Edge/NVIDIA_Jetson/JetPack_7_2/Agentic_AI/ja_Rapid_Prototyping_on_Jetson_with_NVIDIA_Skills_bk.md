---
description: デバイス検査から実行可能なプロトタイプ作成とデモ用パッケージングまで、Jetson アプリケーション提供を加速するスキル駆動の再現可能なワークフローを学びます。
title: NVIDIA Skills を用いた Jetson 上での高速プロトタイピング
keywords:
  - Jetson
  - NVIDIA Skills
  - Claude Code
  - Agentic AI
  - Rapid Prototyping
  - reComputer
  - Edge AI
  - AI Agent
image: https://files.seeedstudio.com/wiki/nv_skills/banner.png
slug: /rapid_prototyping_on_jetson_with_nvidia_skills_bk
last_update:
  date: 07/10/2026
  author: zibo
createdAt: '2026-07-09'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/ja/rapid_prototyping_on_jetson_with_nvidia_skills_bk/
---

import Head from '@docusaurus/Head';

<Head>
  <meta name="robots" content="noindex, follow" />
</Head>


# NVIDIA Skills を用いた Jetson 上での高速プロトタイピング

:::note JetPack 7.2 collection copy
このコピーは、エージェントスキルが JetPack 7.2 開発者エコシステムの一部であるため含まれています。スキルを実行する前に、対象デバイスが JetPack 7.2 / L4T 39.2 を報告していることを確認し、ライブデバイスに対して提案されるすべてのパッケージや最適化内容を確認してください。
:::

<div style={{textAlign:'center'}}>
  <img alt="計画、ツール、実行がパイプされてプロトタイプになる、Claude Code + NVIDIA Skills for Jetson のバナー" src="https://files.seeedstudio.com/wiki/nv_skills/banner.png" style={{width:1000, height:'auto'}} />
</div>

## はじめに

Jetson プロジェクトが行き詰まる原因は、開発者がモデルコードを書けないからではほとんどありません。多くの場合、その前段階であるデプロイ周りの「つなぎ」の作業で止まります。具体的には、デバイス状態の確認、JetPack 互換性の確認、実用的なインストールパスの選定、最初の実行可能なパイプラインの構築、出力の検証、そして結果をデモ可能な形にパッケージングする作業です。実プロジェクトでは、最初の数日がしばしばこの部分で消えていきます。

ここで役立つのが **エージェント + スキルのワークフロー**です。Jetson に特化したスキルは、デバイス診断、メモリ検査、環境準備、モデルインポートなど、限定されたタスク群に対して AI コーディングエージェントに構造化された指示を与えます。何もないシェルから始めて、散在するドキュメントからワークフローを再構成する代わりに、Jetson を理解したデリバリーパスからスタートできます。

この手法は特定のエージェントフレームワークに結び付いているわけではありません。再利用可能なスキルを読み込み、ファイルを検査し、コマンドを実行し、リモートデバイスと対話できるエージェントであれば、どれでも同じパターンの恩恵を受けられます。このウォークスルーでは、ファイル検査、シェルコマンド実行、リモートデバイスへのアクセスが必要なワークフローであるため **Claude Code** を使用しますが、スキル自体は他のエージェントにも同じように読み込めます。

この記事は、意図的に**デリバリー手法**として書かれており、一度きりのデモログではありません。車両速度検出の例を用いますが、本当の目的は、さまざまな Jetson アプリケーションや異なるエージェント構成にまたがって再利用できる再現可能なパスを示すことです。

:::note
この記事でいう「Skills」とは、このワークフローで使用するコーディングエージェントに読み込まれる、**NVIDIA が作成した再利用可能なエージェントスキル**を指します。これは、Seeed の **Jetson DevelopTool「Skills」モジュール**（別の GUI 自動化機能）とは異なります。その GUI モジュールを探している場合は、[DevelopTool Skills モジュール](/ja/jetson_developtool_skills/)の記事を参照してください。
:::

## NVIDIA Skills とは

**スキル**とは、AI コーディングエージェントがオンデマンドで読み込む、再利用可能な手順とリファレンス資料の束です。スキルを呼び出すと、エージェントはタスク固有のガイダンスを受け取ります。何を検査するか、どの規約に従うか、どのツールを使うか、どの出力を検証するか、といった内容です。Claude Code では、`/<skill-name>` でスキルを明示的に指定するのは、その挙動をトリガーする方法の 1 つにすぎません。スキルがワークスペースにインストールされると、エージェントはそれらの中から自動的に選択することもできます。

Jetson 開発者に特に関連する NVIDIA スキルリポジトリは 2 つあります：

- Jetson 用途に限らない汎用ワークフロー向けの **[NVIDIA/skills](https://github.com/NVIDIA/skills)**

この記事では、これらのスキルを使って、繰り返し発生する立ち上げ作業を減らし、「デバイスが利用可能」な状態から「プロトタイプが検証済み」になるまでの道のりを短縮します。

## Jetson のデリバリーが遅くなる理由

Jetson アプリケーションの最初のバージョンでは、ハードウェアステータス、JetPack とランタイムの互換性、ARM 上でのパッケージインストールの選択、モデルの配置、起動コマンド、出力パス、そして最低限の性能検証を調整する必要があります。問題は、どれか 1 つのステップが不可能であることではありません。問題は、これらのステップがさまざまなツール、ドキュメント、場当たり的なシェル作業に分散しているため、本来より長くデリバリーパスがあいまいなままになってしまうことです。

スキル駆動のワークフローの実用的な価値は、これを次のように変える点にあります：

| 従来のパス | スキル駆動のパス |
| --- | --- |
| 行動前に複数のドキュメントを読む | タスクにフォーカスしたスキルから始める |
| デバイス状態を手作業で確認する | エージェントに Jetson を診断させる |
| 依存関係パスを勘で決める | エージェントに Jetson を理解したインストールパスを使わせる |
| 最初のプロトタイプを手作業で組み立てる | エージェントに最小の実行可能バージョンをスキャフォールドさせる |
| 成果物をチームメイトに手作業で説明する | エージェントにファイル、コマンド、出力を要約させる |
| 簡易デモ用インターフェースをゼロから作る | エージェントにプロトタイプを共有用にラップさせる |

## スキルが得意なこと

Jetson の作業において、スキルが最も力を発揮するのは、タスクがまだ不確実性の削減に関する段階にあるときです。つまり、現在のデバイスを検査し、より Jetson に適したセットアップパスを選び、モデルやテストアセットの周りに最初の実行可能なプロトタイプを生成し、何が作られたのかを説明し、その結果を表示・再実行可能な形にパッケージングする、といった場面です。一方で、スキルは本番エンジニアリングの代替としてはあまり有用ではありません。スキルは立ち上げと検証を加速できますが、最高の性能、本番レベルの信頼性、利用シーンに対するキャリブレーション済みの精度、スケールや保守性のための最終的なアーキテクチャ選択を保証するものではありません。この境界は重要です。というのも、このワークフローの目的は、信頼できるベースラインにより早く到達し、その後は意図的に堅牢化していくことだからです。

## Jetson デリバリーワークフローの 5 ステップ

<div style={{textAlign:'center'}}>
  <img alt="Jetson デリバリーワークフローの 5 ステップ：診断、準備、生成、検証、パッケージ" src="https://files.seeedstudio.com/wiki/nv_skills/jetson_delivery_workflow.png" style={{width:1000, height:'auto'}} />
</div>


## 各ステップで使うべきスキル

すべてのプロジェクトにすべてのスキルが必要なわけではありません。よりよい考え方は、特定のブロッカーが現れたときに、その状況に合ったスキルを使うことです。

### まずは `jetson-diagnostic` から始める

Jetson がデプロイ準備できているかどうか、まだ分からないときに最初に使います。実際には、エージェントに十分なライブデバイスコンテキストを与え、ワークフローの残りを通常ブロックする質問、すなわち、どの Jetson モデルが動作しているか、どの JetPack/L4T バージョンがインストールされているか、どれだけのメモリが空いているか、デバイスが熱的に制約されているかどうか、主要なサービスやハードウェアエンドポイントが見えているかどうか、といった点に答えられるようにします。

プロンプト例：
```text
/jetson-diagnostic Check whether this Jetson is ready for a real-time vision prototype and summarize any blockers.
```

<div style={{textAlign:'center'}}>
  <img alt="診断スキルによる Jetson デバイススナップショット：モデル、L4T、Ubuntu、RAM、電源モード、トッププロセス" src="https://files.seeedstudio.com/wiki/nv_skills/jetson-diagnostic.PNG" style={{width:900, height:'auto'}} />
</div>

### セットアップのガイダンスが一般的すぎるか安全でなくなったら `jetson-package` を使う

Jetson では、x86 Linux や一般的な AI チュートリアルからコピーしたパッケージインストールのアドバイスは、しばしば失敗します。`jetson-package` は、特に PyTorch や OpenCV などの依存関係について、ホストパッケージ、wheel、コンテナのどれを選ぶかを決める際に、エージェントに Jetson を理解したソースとデプロイパスを優先させたいときに使用します。

```text
/jetson-package Recommend the correct Jetson-compatible dependency path for this vision project.
```

### メモリが最初のボトルネックになっているときは `jetson-memory-audit` を使う

モデルのロードが遅い、プロセスが kill される、推論負荷時にデバイスが不安定に感じられる、といった場合に有用です。現在 DRAM を何が使用しているか、以前のプロセスが本当にメモリを解放したかどうか、設定変更がもっともらしく聞こえるだけでなく実際に測定可能な差を生んだかどうかについて、エージェントにデータに基づく見方を与えます。

```text
/jetson-memory-audit Measure the current memory pressure and identify the biggest consumers before I deploy this prototype.
```

<div style={{textAlign:'center'}}>
  <img alt="ヘッドレスモードと未使用サービスによる節約量と、それぞれが解放する RAM を列挙した最適化レポート" src="https://files.seeedstudio.com/wiki/nv_skills/memory-opt.PNG" style={{width:900, height:'auto'}} />
</div>

### デバイスがアプライアンスとして動作しているときは `jetson-headless-mode` を使う

Jetson をデスクトップマシンではなく専用のエッジノードとして使用している場合、ヘッドレスモードに切り替えることで、推論ワークロード向けのリソースを取り戻すことができます。

```text
/jetson-headless-mode Compare memory usage before and after enabling headless mode for this deployment target.
```

<div style={{textAlign:'center'}}>
  <img alt="ヘッドレスモード有効化の前後で比較したメモリ使用量" src="https://files.seeedstudio.com/wiki/nv_skills/headless-mode.PNG" style={{width:900, height:'auto'}} />
</div>

### 最初の実行可能バージョンを生成するにはタスク固有のビルドスキルを使う

デバイスと環境が把握できたら、次の目標は完璧さではありません。目標は、出力を検査可能な状態で **最小限の有用なプロトタイプ** に到達することです。

以下の例では、ビルドステップとして `deepstream-import-vision-model` を使用します。

## プロトタイプの受け入れ基準

最適化をさらに進める前に、何をもってプロトタイプが成功と見なせるかを定義します。最初の Jetson プロトタイプは、明確なコマンドで再実行でき、入力パスと出力パスが明示され、結果をすぐに確認でき、現在のリソース状況がもはや謎でなくなっていれば、たいてい十分です。主なボトルネックが見えており、次のエンジニアリングステップが自明であれば、そのプロトタイプはすでに役目を果たしています。最初のパスの目的は製品を完成させることではありません。不確実性を十分に早く減らし、次の反復を当て推量ではなく意図的なものにすることが目的です。

## 前提条件

以下の例のワークフローに従う前に、次のものを準備してください：

- 電源が入りネットワーク経由で到達可能な **reComputer Jetson** またはその他の Jetson デバイス
- Jetson 上で動作する **JetPack** 環境
- ワークフローを駆動するホストマシンにインストールされた **AI コーディングエージェント**
- ホストマシンから Jetson への **SSH アクセス**
- モデルのダウンロード、一時ファイル、出力用として Jetson 上に十分なストレージ
- すでに Jetson 上に配置済みの、ビデオクリップなどの **テストアセット**

この例では、テスト用動画 `top_view.mp4` が Jetson 上の `/home/seeed/workspace/traffic_monitor/` に配置されていると仮定します。

:::note
ホストマシンはコーディングエージェントを実行し、通常は SSH 経由で Jetson 上の作業をスキルを使って駆動します。実際には、エージェントが選択した実装パスに応じて、Python、DeepStream、コンテナサポートなど、追加の依存関係が必要になる場合があります。
:::

## スキル用ワークスペースをセットアップする

この記事で使用している Claude Code の例では、スキルはプロジェクトルートの `.claude/` ディレクトリ内に配置されます。

```bash
mkdir -p project/.claude/
cd project/
git clone https://github.com/NVIDIA/skills.git
cp -r skills/skills .claude/
claude
```

`claude` コマンドが起動したら、`/<skill-name>` と入力して、特定のスキルを明示的に読み込ませることができます。これは、どのワークフローを使いたいかすでに分かっている場合に便利です。ただし、一度スキルがワークスペースにインストールされれば、エージェントはそれらの存在を把握しており、あなたのリクエストに応じて自動的に選択できます。実際には、診断、パッケージ選定、メモリ検査、プロトタイプ生成などを完全に別々のセッションとして扱うのではなく、1 回のパスで複数のスキルを連鎖させることもあります。

<div style={{textAlign:'center'}}>
  <img alt="Jetson 用 /jet スキルコマンドを一覧表示している Claude Code セッション（2 つの SessionStart フックエラー付き）" src="https://files.seeedstudio.com/wiki/nv_skills/skills_list.PNG" style={{width:800, height:'auto'}} />
</div>

## ケーススタディ：ワークフローにマッピングした車両速度検出

次の例は、5 ステップのワークフローが実際にはどのように見えるかを示しています。例としては車両速度検出を扱っていますが、本当に重要なのは成果物の届け方のパターンです。

### ステップ 1. デバイスを診断する

まず、Jetson が実際にビジョン系ワークロードを実行できる状態かどうかを確認します。次のようなプロンプトを与えることで、エージェントはデバイスを調査し、生のテレメトリをただ垂れ流すのではなく、プロトタイプにとって重要なブロッカーを報告できるだけのコンテキストを得られます。

```text
/jetson-diagnostic Check the current status of my Jetson and summarize any blockers for a vision prototype.
SSH login: seeed@192.168.6.204
Password: seeed
```
:::note
上記の IP アドレスとパスワードは例です。自分の Jetson の認証情報に置き換えてください。`seeed` は一部の Seeed 製 Jetson デバイスでのデフォルトパスワードであり、本番機では変更すべきです。
:::

<div style={{textAlign:'center'}}>
  <img alt="Jetson のモデルと JetPack バージョンを一覧表示しているデバイスチェック出力" src="https://files.seeedstudio.com/wiki/nv_skills/check_device.PNG" style={{width:800, height:'auto'}} />
</div>

### ステップ 2. 環境を準備する

診断ステップで、プロトタイプを動かすには環境が十分クリーンでないことが分かった場合は、むやみに先へ進むのではなく、このタイミングで準備を行います。`jetson-package` は、エージェントが Jetson 互換の依存関係パスを選択するのに役立ち、`jetson-memory-audit` と `jetson-headless-mode` は、最初の障害がメモリプレッシャーや不要なデスクトップのオーバーヘッドである場合に有用です。

```text
/jetson-package Recommend the correct dependency path for this Jetson vision prototype.
```

```text
/jetson-memory-audit Measure memory usage before I deploy the model and identify the top consumers.
```

```text
/jetson-headless-mode Compare whether this device should be switched to headless mode for better inference headroom.
```

実務的な利点としては、前段の診断で本当に必要だと分かったときにだけセットアップ作業に時間を使える、という点があります。

### ステップ 3. 最小限の実行可能プロトタイプを構築する

ここからは、環境の準備完了からアプリケーションの立ち上げへと進みます。

```text
/deepstream-import-vision-model Help me access the following directory on Jetson: /home/seeed/workspace/traffic_monitor
Deploy a vehicle speed detection system under this directory. Use the top_view.mp4 file in this directory for testing.
```

これは、このウォークスルーで使用しているサンプルの俯瞰交通動画です：

<div style={{textAlign:'center'}}>
  <img alt="ウォークスルーで使用しているサンプルの俯瞰交通動画フレーム" src="https://files.seeedstudio.com/wiki/nv_skills/top_view.png" style={{width:1000, height:'auto'}} />
</div>

エージェントは、デバイス上に何が存在するかに応じて、異なる実装パスを選択する場合があります。この段階で重要なのは、最終的な本番スタックを選べているかどうかではありません。重要なのは、検査可能な結果を伴う、実行可能な最初のパスを生成できていることです。

このステップの終わりまでに、メインの推論スクリプトまたはアプリのエントリポイント、明確な再実行パス、注釈付き出力動画などの成果物、そして生成ファイルが既知のワークスペースに配置されている状態を目指します。これらの要素がそろっていれば、最終的なスタックが変更の余地を残していても、ベースラインはすでに有用です。

<div style={{textAlign:'center'}}>
  <img alt="タスクループが停止し、stop-hook エラーが出力されて終了しているエージェントセッション" src="https://files.seeedstudio.com/wiki/nv_skills/quick_deploy.PNG" style={{width:800, height:'auto'}} />
</div>

<div style={{textAlign:'center'}}>
  <img alt="detect_speed.py、入力動画、yolov8n.pt、output_annotated.mp4 を含む作業ディレクトリ一覧" src="https://files.seeedstudio.com/wiki/nv_skills/output_video.png" style={{width:1000, height:'auto'}} />
</div>

ここからワークフローの効果が現れ始めます。最初のパスでスクリプトやパスを手作業で配線する代わりに、実行可能なベースラインを評価し、どこにより深いエンジニアリング投資をすべきかを判断できます。

### ステップ 4. 出力を検証しアーキテクチャを確認する

最初のパスができたら、エージェントに対して、何を作成したのか、そしてどうやって再実行するのかを説明するよう依頼します。

```text
Please explain the generated files, the rerun command, the output locations, the current bottlenecks, and the technical approach and architecture you are using.
```

この時点で有用な問いは、「何か動いたか？」ではなく、「具体的に何が作られたのか、どうやって再実行するのか、出力はどこにあるのか、そしてエージェントはアーキテクチャ的に何を選択したのか？」です。良いフォローアップ説明があれば、ファイル構成、再実行パス、出力場所、検出と速度推定のアプローチ、および想定される性能ボトルネックについて、明確な見通しを得られるはずです。

<div style={{textAlign:'center'}}>
  <img alt="速度検出プロジェクトの各ファイルとその役割を一覧にした使用方法シート" src="https://files.seeedstudio.com/wiki/nv_skills/explain1.png" style={{width:800, height:'auto'}} />
</div>

<div style={{textAlign:'center'}}>
  <img alt="技術アーキテクチャの説明：YOLOv8n ステージの詳細を含む、認識・追跡・計測の 3 段階パイプライン" src="https://files.seeedstudio.com/wiki/nv_skills/explain6.png" style={{width:800, height:'auto'}} />
</div>

これにより時間を節約できます。エージェントはコードを生成するだけでなく、自身が作成したベースラインを理解し評価するために必要な時間も短縮してくれるからです。

### ステップ 5. プロトタイプを共有可能な形にパッケージングする

アルゴリズムがコマンドラインから動作するようになったら、次のギャップはたいてい「デモしやすさ」です。

```text
Help me create a web UI that I can access from my local PC to upload videos for detection and continuously loop the output video.
```

エージェントは、プロトタイプを小さな Web サービスや類似のインターフェースでラップし、チームメイトや顧客がコマンドラインに触れることなく試せるようにできます。

<div style={{textAlign:'center'}}>
  <img alt="デプロイを検証しているエージェントログ：ping 応答、Web UI からの HTTP 200、サービスを提供し続けている nohup プロセス" src="https://files.seeedstudio.com/wiki/nv_skills/web_ui_deploy.png" style={{width:1000, height:'auto'}} />
</div>

:::note
ローカル PC から UI にアクセスするには、選択したポートが Jetson 上でアクセス可能であり、両方のマシンが同じネットワーク上にあること、または SSH ポートフォワーディングを使用していることを確認してください。推論速度を評価する際は、転送された Web UI はネットワークレイテンシの影響でモデル性能以上に遅く感じられる可能性があるため、Jetson 側のローカルランタイムを基準に判断してください。
:::

<div style={{textAlign:'center'}}>
  <img alt="アップロードされた動画、検出された車両、Speed Stats パネルを表示している Traffic Speed Monitor Web UI" src="https://files.seeedstudio.com/wiki/nv_skills/out_ui.gif" style={{width:1000, height:'auto'}} />
</div>

これは、このワークフローが実務で有用なもう 1 つの理由です。同じプロセスで、プロトタイプの作成から、バックエンドの概念実証とデモ可能なパッケージングとのギャップを埋めることができます。

## よくある失敗パターンと次に取るべき行動

このワークフローは、適切なタイミングで適切な不確実性を減らすために使うときに最も役立ちます。

| 問題 | 典型的に意味すること | 対処方法 |
| --- | --- | --- |
| インストールパスが汎用的であるか、ARM で壊れる | Jetson 互換性が無視されている | `jetson-package` を使う |
| モデルがロードに失敗する、または推論が不安定 | 最初のボトルネックがメモリプレッシャーである | `jetson-memory-audit` を使う |
| デバイスがデスクトップサービスにメモリを使い過ぎている | Jetson をアプライアンスとして扱った方がよい | `jetson-headless-mode` を使う |
| プロトタイプは動くが遅すぎる | ベースラインは妥当だが、まだ最適化されていない | エージェントにボトルネックの特定と DeepStream または TensorRT の推奨を依頼する |
| デモがターミナル上でしか動かない | エンジニアリングのベースラインはあるが、共有可能ではない | エージェントに Web UI またはサービスラッパーとしてパッケージングするよう依頼する |

## プロトタイプから本番へ

このワークフローが最も力を発揮するのは、探索、立ち上げ、検証のフェーズです。ベースラインが実証されたら、次のステップは通常、手動でのハードニングです。

典型的な本番移行の動きとしては、プロトタイプのロジックをより構造化された DeepStream パイプラインに置き換えること、スループット向上のためにモデルを TensorRT に変換すること、トラッキングの堅牢性とキャリブレーション品質を高めること、場当たり的なスクリプトを保守可能なサービスやアプリケーションに作り替えること、そして実システムに必要な監視とデプロイの運用を追加することなどがあります。重要なポイントはシンプルです：**スキルを使って信頼できるベースラインまでの道のりを圧縮し、その後は意図的にハードニングすること。**

## 再利用可能なプロンプトテンプレート

次のプロンプトシーケンスは、新しい Jetson プロジェクトにとって良い出発点となるテンプレートです：

```text
1. Diagnose this Jetson and list any blockers for running a vision prototype.
2. Recommend the correct Jetson-compatible dependency path.
3. Build the smallest runnable prototype in /path/to/workspace using /path/to/test-asset.
4. Explain the generated files, rerun command, and expected outputs.
5. Measure the current bottleneck and recommend whether to stay in Python or move to DeepStream/TensorRT next.
6. Package the prototype into a simple demo interface if the baseline is validated.
```

このテンプレートは、物体検出、映像解析、ロボティクスの認識処理、その他の Jetson 側アプリケーションの立ち上げ作業などに合わせて応用できます。

## まとめ

ここでの主なポイントは、特定の 1 つのエージェントが 1 つの車両速度検出デモを構築できる、ということではありません。より有用なポイントは、**スキルを構造化されたワークフローとして扱うと、Jetson アプリケーションのデリバリーが大幅に高速化される**ということです。まずデバイスを診断し、必要な部分だけを準備し、最小限の実行可能なプロトタイプを生成し、出力とボトルネックを検証し、その結果を共有用にパッケージングする――これが再利用可能なパターンです。車両速度の例は、その 1 つのインスタンスに過ぎません。

## 参考情報

- [NVIDIA/skills (GitHub)](https://github.com/NVIDIA/skills) — NVIDIA による汎用エージェントスキル
- [NVIDIA-AI-IOT/jetson-device-skills (GitHub)](https://github.com/NVIDIA-AI-IOT/jetson-device-skills) — Jetson 向け専用スキル
- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code) — Claude Code のインストールと使用方法
- [Traffic Management DeepStream SDK](/ja/Traffic-Management-DeepStream-SDK/) — より手動で行う DeepStream 指向の手順
- [Deploy YOLOv8 with TensorRT and DeepStream SDK](/ja/YOLOv8-DeepStream-TRT-Jetson/) — より手動で行うモデルデプロイ手順
- [DevelopTool Skills module](/ja/jetson_developtool_skills/) — Seeed DevelopTool の "Skills" 自動化モジュール

## 関連リソース

- [Rapid Prototyping on Jetson with NVIDIA Skills](/ja/rapid_prototyping_on_jetson_with_nvidia_skills/)
- [NVIDIA skills repository](https://github.com/NVIDIA/skills)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
