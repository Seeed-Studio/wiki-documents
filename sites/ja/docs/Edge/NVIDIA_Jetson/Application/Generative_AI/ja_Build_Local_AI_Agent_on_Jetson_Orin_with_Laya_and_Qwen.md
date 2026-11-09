---
title: Jetson Orin 上で Laya と Qwen を使ってローカル AI エージェントを構築する
description: NVIDIA Jetson Orin 上で Laya と Qwen を使ってローカル AI エージェントを構築します。意思決定モデルの仕組みを学び、reComputer 上でブラウザ自動化とホワイトボードのデモを実行します。
keywords:
  - NVIDIA Jetson
  - Jetson Orin
  - Jetson Orin NX
  - ローカル AI エージェント
  - Laya 意思決定モデル
  - Qwen3.5
  - ブラウザ自動化
  - reComputer Industrial
  - エッジ AI
slug: /jetson/local_decision_model_laya
draft: false
image: https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-cover-en-v3-dark.png
last_update:
  date: 11/04/2026
  author: zibo
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/ja/jetson/local_decision_model_laya/
---

# Jetson Orin 上で Laya と Qwen を使ってローカル AI エージェントを構築する

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-cover-en-v3-dark.png" alt="CLICK が選択された Laya と Qwen のアクションセレクタおよびフライト検索ブラウザに接続された reComputer Industrial ハードウェアのイラスト。" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

この wiki では、**NVIDIA Jetson Orin 上にローカル AI エージェントを構築します。** **Laya ローカル意思決定モデル（System One モデル）が次のアクションを選択し、Qwen3.5-4B がリクエストの解析とテキスト生成を担当します。** 測定は **Jetson Orin NX 16GB を搭載した reComputer Industrial J4012** を用いて行っています。

まずは実際のテスト結果を見てみましょう。エージェントには、深センから上海への片道直行便を、価格の安い順に並べて検索し、条件に合うフライトのチケットオプションを表示するよう指示しています。全体の実行プロセスはわずか 32.8 秒しかかかりませんでした。ブラウザ自動化の各種操作をエージェントに任せたことがある方なら、この時間がかなり有利であることがわかるはずです。
<div align="center">
  <img width={960} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-flight-search-demo.gif" alt="フライトデモのアニメーション画面録画：エージェントが片道の深セン発上海行き検索を入力して確定し、結果を直行便かつ最安値順に絞り込み、条件に合うフライトの運賃オプションレイヤーを開く。" loading="lazy" />
</div>

*フライトデモ。英語での 1 回のリクエスト、ライブの Trip.com ページ、そしてアシスタントが自動で開く運賃レイヤー。*

次に、描画用ホワイトボードを操作する別のデモを見てみましょう。自然言語でエージェントに描画を指示できるほか、いつでも自然言語でエージェントに内容の修正を依頼することもできます。
<div align="center">
  <img width={960} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-whiteboard-demo.gif" alt="ホワイトボードデモのアニメーション画面録画：Camera、Jetson、Display の 3 つのラベル付きボックスが描かれ矢印で接続され、その後 Jetson が緑色になり、その下に接続された Robot Arm ボックスが追加される。" loading="lazy" />
</div>

*ホワイトボードデモ。描く、色を変える、拡張する：1 枚のキャンバス上で 3 回のリクエスト、描き直しはなし。*

## 前提条件

- JetPack 6.2 を搭載した reComputer

## LLM はどのように Web ページを操作できるのか？

LLM エージェントにフライト検索を依頼する場面を想像してみてください。エージェントはリクエストを読み、ページを開き、次に何をすべきかを決める必要があります。ある時点では、ページには出発地と目的地のフィールド、日付セレクタ、そして **Search** ボタンが表示されているかもしれません。プログラムは、これらのコントロールを利用可能なアクションとして提供できますが、その中からどれかを選ぶ役割がまだ必要です。

従来のテキスト生成型 LLM は、タスクとページの説明を読み、アクションを書き出すことでその選択を行えます。たとえば、Search をクリックするよう指示を返すかもしれません。プログラムはその出力を解釈してクリックを実行します。ページが変化した後、アシスタントは再びページを観察し、次のアクションを問い合わせます。

この指示を生成するために、LLM はまずタスクとページ情報を読み込みます。その後、これまでに書いた内容に依存しながら、答えを少しずつ書き出していきます。これらのステップは **prefill** と **decode** と呼ばれます。ページが変化した後、アシスタントは次のアクションを決めるために、これらを繰り返すことがあります。

LLM は多くの異なる答えを書くことができます。しかし、プログラム側ですでに **都市名を入力する**、**Search をクリックする**、**待機する** といったアクションのリストを持っている場合はどうでしょうか。そのリストから 1 つを選ぶようモデルに依頼することもできます。ここで意思決定モデルが登場します。

## 意思決定モデルは何が違うのか？

意思決定モデルは、現在の状態、目標、および利用可能な選択肢の集合を受け取ります。そしてそれらの選択肢にスコアを付け、1 つを選択して返します。フライトの例では、必要な検索条件が満たされると、提示されたアクションの中から **Search をクリックする** を選択できます。プログラムはその選択を実際のページ上のコントロールに対応付け、クリックを実行します。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-text-vs-action-selection-en.png" alt="2 つの出力パス：自己回帰モデルは prefill と連続した decode ステップを実行し、意思決定モデルは入力をエンコードして提示されたアクション候補にスコアを付ける。" loading="lazy" />
</div>

*テキスト生成ではアクションを出力テキストとして生成し、Laya は提示された選択肢にスコアを付けます。*

どちらのアプローチも入力を処理し、計算を必要とします。テキストモデルも短いアクション ID を生成することができます。

このプロジェクトでは両方のモデルを使用します。**Qwen** はユーザーのリクエストを解釈し、必要に応じてテキストを提供します。**Laya** は現在の候補から操作とターゲットを繰り返し選択します。プログラムはツールを提供し、選択されたアクションを実行し、その結果を確認します。

## Laya はどのように次のアクションを選ぶのか？

1 つの意思決定がどのように行われるかを確認するために、ホワイトボードを使ってみましょう。**Camera** とラベル付けされた緑色のボックスがあり、それを移動したりラベルを変えたりせずに青色にしたいとします。

```text
Make the Camera rectangle background blue. Keep its text and position.
```

Laya に選択を依頼する前に、プログラムは状況をテキストで記述します。

| 入力 | Camera の例 |
| --- | --- |
| 状態 | Camera は緑色で、そのラベルと位置は既知 |
| 目標 | Camera を青色にし、ラベルと位置を維持する |
| 候補 | 利用可能な赤、緑、青、黄のボタン |

これを多肢選択式の質問だと考えてください。プログラムは、キャンバス上に何があり、何を変える必要があり、どのボタンが利用可能かを Laya に伝えます。そのうえで Laya はそれらのボタンから選択します。この記録された例では、目標は直接 Laya に与えられました。

Laya の内部では、**エンコーダ** がテキストを読み、状況の理解を構築します。すなわち、現在の色は緑で、望ましい色は青であり、ラベルと位置はそのままにすべきだということです。次に **decision head** が利用可能な答えにスコアを付けます。このプロジェクトでは、エンコーダとして mmBERT-base を使用しています。詳細は [固定されたモデル設定](https://huggingface.co/cklxx/laya-browser/blob/645cf366a2ae35f1086e8c20eff48f909bb49206/rl_agent_config.json) と [アーキテクチャのドキュメント](https://huggingface.co/convaiinnovations/laya#architecture) を参照してください。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-decision-model-architecture-en.png" alt="テキストの状態、目標、候補が mmBERT-base 双方向エンコーダと decision head に入力され、操作とクリックターゲットの別々の選択として出力される。" loading="lazy" />
</div>

*Laya は状態、目標、候補に関するテキストを読み取ります。この実装ではスクリーンショットのピクセルはモデルに送信しません。*

この意思決定では、選択肢 `3` が青いボタンです。Laya がそれを選ぶと、プログラムはそのアクション ID `color_blue` を使って対応するボタンを見つけます。ページやキャンバスの変化に応じて選択肢は変わるため、プログラムは次の状態を観察するたびに新しいリストを作成します。

結果は 2 つの問いに答えます。**何をすべきか？** そして **どこでそれを行うべきか？** この例では、Laya は `CLICK` と青いボタンを選択しました。両方の答えは同じバッチで計算できます。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-camera-blue-recorded-decision-en.png" alt="1 回の記録された意思決定で、CLICK が確率 0.9785 で選択され、青いターゲットが確率 0.9721 で選択される。新たなシーン読み取りにより、Camera が緑から青に変わったことが確認される。" loading="lazy" />
</div>

*記録された Camera の意思決定の 1 例。色付きボックスは保存されたシーン値から再構成されています。*

記録された結果では、`CLICK` は **0.9785** のスコアを受け取り、青いボタンは自分の選択肢集合の中で **0.9721** を受け取りました。プログラムはボタンをクリックし、その後キャンバスを再度読み取りました。Camera は青色になり、ラベルと位置は変わっていませんでした。

これらのスコアは、モデルがどの選択肢を好んだかを示します。ターゲットの `confidence` 値 **0.8859** は別のフィールドです。高いスコアだけでは、クリックが成功したか、タスク全体が完了したかを保証できません。

プログラムは適切な選択肢も提示しなければなりません。Laya はリストに存在しないボタンを選ぶことはできません。選択肢が多い場合、ラッパーはそれらをグループに分けて比較することがあります。つまり、1 回のリクエストに複数回のモデル評価が含まれる可能性があります。

## モデルの選択から検証済みの結果へ

Laya は青いボタンを選びました。これでタスクは完了したと言えるでしょうか。まだです。ボタンが移動しているかもしれませんし、クリックしてもボックスが変化しないかもしれません。プログラムはアクションを実行し、実際に何が起きたかを確認しなければなりません。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-verified-action-loop-en.png" alt="Qwen によるリクエスト解析から新たな観察、合法な候補、Laya の選択、ターゲット検証、UI 実行、そして独立した完了検証までのエージェントループ。" loading="lazy" />
</div>

*Qwen がリクエストを解釈し、Laya が利用可能なアクションの中から選択し、プログラムがそれらを実行して検証します。*

Camera の例では、プログラムは次の手順に従います。

1. **観察:** キャンバスを読み取り、利用可能な色ボタンを見つける。
2. **選択:** どのアクションとターゲットを使うかを Laya に問い合わせる。
3. **確認:** 選ばれたボタンがまだ利用可能かを確認する。キャンバスが変化している場合は、再度観察する。
4. **実行:** Playwright を使って青いボタンをクリックする。
5. **検証:** 再度キャンバスを読み取る。Camera は青色か？ ラベルと位置は変わっていないか？

結果にまだ改善の余地がある場合、プログラムはリトライ上限の範囲で、更新されたキャンバスを用いてループを繰り返すことができます。チェックを通過したら、タスク完了として報告します。モデルが `DONE` を返した場合でも、プログラムは実際の結果を必ず確認します。

同じ考え方はフライトにも当てはまります。プログラムは日付の選択などのアクションを提供し、その後でルート、日付、その他の要件を確認します。これらのアクションはアプリケーション内で実装されています。Laya はその中から選択するだけで、自分で新しいツールを作り出すことはありません。

## Jetson Orin ですぐに実行する

Jetson のデスクトップで、通常のユーザーとしてターミナルを開き、次を実行します：

```bash
git clone https://github.com/zibochen6/jetson-browser-assistant.git
cd jetson-browser-assistant
./setup.sh
```

インストーラーはデバイスをチェックし、分離された uv 環境と対応する CUDA PyTorch を準備し、Chromium をインストールし、固定バージョンのモデルをダウンロードし、llama.cpp をビルドしてサービスを事前読み込みします。`sudo` なしで実行してください。システムライブラリが必要なときに昇格したアクセス権を要求します。互換性、ダウンロード、トラブルシューティングについては、[README](https://github.com/zibochen6/jetson-browser-assistant#readme) と[インストールガイド](https://github.com/zibochen6/jetson-browser-assistant/blob/main/docs/installation.md)を参照してください。

## 意思決定モデルが有用なのはいつか？

ユーザーの目標や現在の状態は変化し得るが、利用可能なツールが限定されている場合、意思決定モデルを評価する価値があります。フライトのフィルターや、既存のホワイトボードオブジェクトの編集がその 2 つの例です。アプリケーション側では、現在の状態を観測し、有意義な選択肢を提供し、何が起きたかを検証する必要があります。

常に同じ手順に従う安定したタスクには、決定論的なスクリプトの方が簡単な場合があります。オープンエンドな回答や新しいテキストには、テキスト生成モデルが依然として有用です。このプロジェクトには同等のスクリプトのベースラインがないため、デモはスクリプトに対する速度や保守性の優位性を示すものではありません。

現在のリリースがカバーしているのは、限定された Trip.com のワークフローと小さなホワイトボードだけです。他のウェブサイト、任意の描画、音声、産業用制御には、別途開発と検証が必要です。Jetson の 16GB は CPU/GPU 共有メモリであり、他のアプリケーションやスワップが利用可能な容量に影響します。

## ブラウザとホワイトボードのデモを試す

デモを実行する前に、時間がどこに費やされているかを見てみましょう。記録されたフライトタスクは合計で **32.8 秒** かかりました。Laya の意思決定はタスク全体で合計約 **0.5 秒**、Qwen のパースは約 **3.5 秒** でした。ブラウザのアクション、ページ待機、チェック、保存も合計時間に寄与します。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-decision-vs-task-time-en.png" alt="独立したバーは、検索条件を再利用したフライトタスクにおいて、タスク経過時間 32.8 秒、Laya の累積意思決定 0.5 秒、Qwen のパース 3.5 秒を示しています。" loading="lazy" />
</div>

*記録されたフライトタスクのタイミング。バーは別々のカウンターであり、完全な加算内訳ではありません。このタスクは既存の検索条件を再利用しました。*

### フライトを検索する

アシスタントを起動し、`Models ready` と `Task>` が表示されるまで待ちます：

```bash
./launch.sh
```

次のタスクを入力し、日付を有効な将来の日付に置き換えてください：

```text
Find one-way flights from Shenzhen to Shanghai on 2026-11-13 for 1 adult in economy. Nonstop only, lowest price first. Show up to 3 options and open the fare options for one matching flight.
```

ランチャーにはウェブサイトと読み取り専用の Live Flow ウィンドウが表示されます。ウェブサイトのみを表示するには `./launch.sh --no-visualize` を使用します。候補、`Query verified`、`Fare options opened` を確認してください。アシスタントは注文や支払いを送信することなく、運賃オプションのレイヤーを開きます。

### 同じホワイトボードを編集する

アクティブなタスクを完了またはキャンセルし、空白のキャンバスを開きます：

```bash
./launch-whiteboard.sh --open examples/whiteboard/blank.excalidraw
```

`--open` は現在のキャンバスを置き換えますが、既存のエクスポートは残ります。`Task>` で次を入力します：

```text
Draw three labeled boxes: Camera on the left, Jetson in the center, and Display on the right. Connect Camera to Jetson and Jetson to Display with arrows.
```

完了したら、空白ファイルを再度開かずに 2 つ目のタスクを送信します：

```text
Make Jetson green. Add a box labeled Robot Arm below Jetson and connect Jetson to Robot Arm. Keep everything else.
```

完了した各ホワイトボードタスクは、編集可能な `scene.excalidraw`、PNG、スクリーンショット、検証レポートを保存します。[ホワイトボードガイド](https://github.com/zibochen6/jetson-browser-assistant/blob/main/docs/whiteboard.md)では、追加の編集や保存したシーンの再オープンについて説明しています。

タイミングは Enter キーを押した時点から開始され、パース、必要なブラウザの起動、推論、UI アクション、待機、検証、保存を含みます。モデルの読み込み、ウォームアップ、入力待ち時間は除外されます。人間の待ち時間は含まれ、別途報告されます。

タスクの実行中に Ctrl+C を押すとキャンセルできます。アイドル状態のプロンプトでは、`exit` または `quit` を入力すると、モデルとブラウザを起動したまま終了します。`./status.sh` でサービスを確認し、`./stop.sh` でプロジェクトのサービスとモデルを停止します。フライトの記録は `runs/` に、ホワイトボードの記録は `whiteboard-runs/` に保存されます。他の操作や復旧については、[使用ガイド](https://github.com/zibochen6/jetson-browser-assistant/blob/main/docs/usage.md)を参照してください。

## 参考文献

- [Jetson Browser Assistant のソースコードと README](https://github.com/zibochen6/jetson-browser-assistant)
- [laya-browser モデル、学習データと制約事項](https://huggingface.co/cklxx/laya-browser)
- [固定バージョンの laya-browser ラッパー](https://huggingface.co/cklxx/laya-browser/blob/645cf366a2ae35f1086e8c20eff48f909bb49206/laya_browser.py)
- [固定バージョンのエンコーダとヘッド設定](https://huggingface.co/cklxx/laya-browser/blob/645cf366a2ae35f1086e8c20eff48f909bb49206/rl_agent_config.json)
- [Laya のアーキテクチャと確率キャリブレーション](https://huggingface.co/convaiinnovations/laya#architecture)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
