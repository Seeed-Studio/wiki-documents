---
description: ReSpeaker XVF3800 USB 4-Mic Array は、AEC、ビームフォーミング、ノイズ抑制、360° 音声キャプチャを備えたプロフェッショナルな円形マイクアレイです。XIAO ESP32S3 と組み合わせることで、スマートデバイス、ロボット、IoT アプリケーション向けの高度な音声制御を実現します。シームレスな統合とデュアルモードの柔軟性を体験してください。
title: reSpeaker で Pico-voice のウェイクワードと NLU を制御する
keywords:
  - reSpeaker
  - python
  - picovoice
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp
slug: /respeaker_xvf3800_picovoice
sku: 114993700,100005504,100099135,100070894
last_update:
  date: 3/24/2026
  author: Kasun Thushara
createdAt: '2026-03-24'
updatedAt: '2026-06-18'
url: https://wiki.seeedstudio.com/ja/respeaker_xvf3800_picovoice/
---

## はじめに 

[Picovoice](https://picovoice.ai/) はオンデバイス音声 AI を専門とする企業で、ウェイクワード検出、音声認識（speech-to-text）、インテント認識など、クラウドに依存せずに組み込み機器やエッジデバイス上でローカルに動作するフルスタック技術を提供しています。これらのソリューションは、低レイテンシ、プライバシー保護、クロスプラットフォーム展開を重視して設計されており、IoT やロボットシステムに適しています。 

[Porcupine](https://picovoice.ai/docs/porcupine/) は、Picovoice が提供する軽量かつ高精度なウェイクワード検出エンジンで、ディープニューラルネットワークを用いて構築され、組み込みシステム向けに最適化されています。常時待ち受け型のアプリケーションを、低い計算コストを維持しながら実現でき、マイコン、Raspberry Pi、モバイル、デスクトップなどのプラットフォームで動作します。 

Picovoice の [Rhino](https://picovoice.ai/docs/rhino/) は、音声コマンドを別個の speech-to-text ステップを必要とせずに、直接構造化されたインテントへ変換する speech-to-intent エンジンです。音声認識と自然言語理解を統合したワンステップのディープラーニング手法を用いることで、精度を向上させつつレイテンシを低減します。

## NLP、NLU、STT とは？

自然言語処理（NLP）は、機械が人間の言語を処理できるようにする広い分野であり、その一部である自然言語理解（NLU）は、特にその言語から意味やインテントを抽出することに焦点を当てています。Speech-to-Text（STT）は、話された音声をテキストに変換し、そのテキストが通常 NLU に渡されてユーザーの意図を理解します。Picovoice Rhino は、STT をスキップして音声を直接インテントに変換する（speech-to-intent）という異なるアプローチを取り、効率と精度を向上させています。

キーワード（ウェイクワード）検出（例：「Hey device」）はシステムを起動する最初のステップであり、起動後は STT → NLU パイプライン、または speech-to-intent（Rhino）のいずれかを用いてコマンドを理解し実行します。

## 目的

このデモでは、Picovoice Porcupine を用いたウェイクワード検出が、Raspberry Pi 上で効率的な speech-to-intent 処理を行う Picovoice Rhino とどのように連携するかを紹介します。システムはまずキーワードを待ち受けて起動し、一度トリガーされると、重いクラウド処理に依存することなく、話されたコマンドを直接実行可能なインテントに変換します。このアプローチは、リソースの限られた組み込みデバイス向けに高度に最適化されており、ロボットやエッジ AI アプリケーションに最適です。低レイテンシでリアルタイムな音声インタラクションを可能にし、制約のあるハードウェア上でも高速かつ信頼性の高い動作を実現します。

## 必要なハードウェア 

<div style={{ display: 'flex', justifyContent: 'center' }}>

<table>
  <tr>
    <th>reSpeaker Flex XVF3800 Circular</th>
    <th></th>
    <th>reSpeaker XVF3800</th>
  </tr>

  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg"
          style={{ width: 400, height: 'auto' }}
        />
      </div>
    </td>

    <td
      style={{
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: '24px',
        fontWeight: 'bold',
        padding: '0 20px'
      }}
    >
      または
    </td>

    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg"
          style={{ width: 400, height: 'auto' }}
        />
      </div>
    </td>
  </tr>

  <tr>
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                今すぐ入手 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>

    <td></td>

    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                今すぐ入手 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>
  </tr>
</table>

</div>

## ウェイクワード検出 

ロボット向け組み込みシステムにおけるウェイクワードは、**イベント駆動型の処理**を可能にし、デバイスを低消費電力のリスニング状態に保ちながら、必要なときだけ重い音声処理を有効にします。これにより、マイコンやエッジデバイスのようなリソース制約のあるハードウェアにおいて、CPU、メモリ、エネルギー消費を大幅に削減できます。また、音声パイプラインにおける**ゲーティング機構**として機能し、不要なノイズをフィルタリングして、音声認識や制御ロジックの不必要な起動を防ぎます。プライバシーの観点からも、ウェイクワード検出により、明示的なユーザーの意図が検出された後にのみ音声が取得または送信されるため、ほとんどのデータ処理をオンデバイスで完結できます。さらに、人とロボットのインタラクションにおいて自然なトリガーを提供し、環境中の会話とロボットに向けられたコマンドを区別するのに役立ちます。

reSpeaker のような高度なマイクアレイシステムとウェイクワードを組み合わせることで、具現化されたシステムにおいて**効率的かつ信頼性の高い**音声インタラクションを実現できます。ウェイクワードにより、必要なときだけフルの音声処理が有効になるため、組み込みハードウェア上での消費電力と CPU 使用率を削減できます。マイクアレイは、**ビームフォーミング、ノイズ抑制、Circular マイクアレイでの方向検出**を提供することでこれを強化し、騒がしい環境でも正確なウェイクワード認識を可能にします。この組み合わせにより誤検出が最小限に抑えられ、システム全体の応答性が向上します。また、デバイスが明示的に呼びかけられたときだけ応答し、適切な話者にフォーカスできるため、人とロボットのインタラクションも改善されます。

## Pico-voice でウェイクワードを使う方法

[Picovoice](https://console.picovoice.ai/) にサインアップすると、Access Key を取得できます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic1.png" alt="pir" width={800} height="auto" /></p>


### オプション A : 組み込みキーワード 

 Porcupine には、**AMERICANO、BLUEBERRY、BUMBLEBEE、GRAPEFRUIT、GRASSHOPPER、PICOVOICE、PORCUPINE、TERMINATOR、JARVIS** など、いくつかの組み込みウェイクワードオプションが用意されており、有効な Access Key があればそのまま使用できます。Access Key を使うことで、カスタムモデルをトレーニングすることなく、これらのキーワードを簡単にアプリケーションへ統合できます。

この構成では、ホストデバイスとして **Raspberry Pi 5** を使用し、ウェイクワード検出はデバイス上でローカルに実行されます。XMOS ベースのマイクシステムには **USB オーディオファームウェア** が書き込まれており、OS から標準的なオーディオ入力デバイスとして認識されます。

まず、必要な Porcupine ライブラリと依存関係を環境にインストールする必要があります。

```bash
pip install pvporcupine
```

インストール後、サンプルコードを使用してオーディオレコーダを初期化し、選択したキーワードを読み込み、ウェイクワードを継続的に待ち受けることができます。キーワードが検出されると、システムは録音や音声コマンドの処理など、後続のアクションをトリガーできます。

```python
import pvporcupine
from pvrecorder import PvRecorder

access_key = "YOUR_ACCESS_KEY"

porcupine = pvporcupine.create(
    access_key=access_key,
    keywords=["porcupine"]
)

recorder = PvRecorder(device_index=-1, frame_length=porcupine.frame_length)
recorder.start()

print("Listening...")

while True:
    pcm = recorder.read()
    result = porcupine.process(pcm)
    if result >= 0:
        print("Wake word detected!")

porcupine.delete()
recorder.stop()
recorder.delete()
```

### オプション B: カスタムキーワード 

Picovoice Console に移動してカスタムウェイクワードのページを開きます。使用したい言語を選択し、「hi flex」などのウェイクワードを定義します。コンソール内でウェイクワードをテストし、その検出性能を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic2.png" alt="pir" width={400} height="auto" /></p>

満足のいく結果が得られたら、Train をクリックしてモデルを生成します。次にターゲットプラットフォームを選択します。ここでは Raspberry Pi を選びます。最後に生成された .ppn ファイルをダウンロードします。このファイルは、アプリケーション内でカスタムウェイクワード検出に使用されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic3.png" alt="pir" width={600} height="auto" /></p>

**サンプルコード**

```python

import pvporcupine
from pvrecorder import PvRecorder

access_key = "YOUR_ACCESS_KEY"

porcupine = pvporcupine.create(
    access_key=access_key,
    keyword_paths=["/home/pi/porcupine_env/hi-flex_en_raspberry-pi_v4_0_0.ppn"]
)

recorder = PvRecorder(device_index=-1, frame_length=porcupine.frame_length)
recorder.start()

print("Listening...")

while True:
    pcm = recorder.read()
    result = porcupine.process(pcm)
    if result >= 0:
        print("Wake word detected!")

porcupine.delete()
recorder.stop()
recorder.delete()
```

## Speech to Intent 

Picovoice Rhino は、話されたコマンドを別個の speech-to-text ステップを必要とせずに、直接構造化されたインテントへ変換する speech-to-intent エンジンです。音声認識と自然言語理解を組み合わせた**ワンステップのディープラーニング手法**を用いることで、精度を向上させつつレイテンシを低減します。 
Rhino は**リアルタイムのオンデバイス処理**向けに最適化されており、オフラインで動作してネットワーク遅延がゼロであると同時に、すべての音声データをプライベートに保ちます。非常に効率的で、Raspberry Pi やマイコンなどの組み込み・IoT システム向けに設計されています。 
さらに Rhino では、インテントやスロットを含むカスタムコンテキストを開発者が定義できるため、システムはドメイン固有のコマンドを理解し、音声入力から直接アクションをトリガーできます。

### コンテキストを作成する 

コンテキストは、特定のドメインに対する音声コマンド、インテント、スロットの集合を定義します。ここでは、音声コマンドを使って ReSpeaker Flex を制御するために **“Bumblebee”** コンテキストを作成します。Picovoice の Rhino Speech-to-Intent コンソールに移動し、**“Empty”** テンプレートを使用して **Bumblebee** という名前の新しいコンテキストを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic4.png" alt="pir" width={600} height="auto" /></p>

### インテントを作成する

最上位では、コンテキストはドメイン内でのユーザーアクションを表すインテントの集合です。例えば、HiFlex コンテキスト内に「Gesture」というインテントを作成し、ジェスチャー関連の音声コマンドを表すようにします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic5.png" alt="pir" width={600} height="auto" /></p>

### インテントに表現を追加する

ユーザーは同じインテントを複数の言い方で表現でき、そのそれぞれのバリエーションを「表現（expression）」と呼びます。**Gesture** インテントに対しては、**“wave your head” や “shake your antenna”** のような表現を追加します。これらはいずれも同じ一連のアクションに対応します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic6.png" alt="pir" width={600} height="auto" /></p>

### スロットを使って変数を取得する 


スロットを使用して、ユーザー発話内の可変部分を取得します。この場合、**“wave”** や **“shake”** のような単語は、コマンド内の変化する状態を表すため、変数としてモデル化できます。これらのバリエーションを動的に取得するために、Rhino コンテキスト内に **“commands”** という名前のスロットを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic7.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic8.png" alt="pir" width={800} height="auto" /></p>

既存の表現を修正して、新しく作成したスロットを含めます。スロットを追加する際は、`$` 記号を使ってスロットを示し、その後オートコンプリートのドロップダウンから目的のスロットタイプを選択し、名前を割り当てます。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic9.png" alt="pir" width={800} height="auto" /></p>

準備ができたら、まずテストボタンをクリックしてテストしてみてください 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic10.png" alt="pir" width={800} height="auto" /></p>

### モデルをダウンロードしましょう

コンテキストの設計が完了したら、右上のダウンロードアイコンをクリックし、ターゲットプラットフォームを選択してから **“Download.”** をクリックします。Picovoice Console はそのプラットフォーム向けの Rhino モデルを自動的にトレーニングし、通常は約 5〜10 秒で完了します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic11.png" alt="pir" width={800} height="auto" /></p>

### サンプルコード

```python
import pvporcupine
import pvrhino
from pvrecorder import PvRecorder

access_key = "ACCESS KEY"

rhino = pvrhino.create(
    access_key=access_key,
    context_path="/home/pi/porcupine_env/Bumblebee_en_raspberry-pi_v4_0_0.rhn",
)

recorder = PvRecorder(device_index=-1, frame_length=rhino.frame_length)
recorder.start()

print("Listening...")

while True:
    pcm = recorder.read()
    is_finalized = rhino.process(pcm)

    if is_finalized:
        inference = rhino.get_inference()
        if inference.is_understood:
            print("Intent:", inference.intent)
            print("Slots:", inference.slots)
        else:
            print("Didn't understand")

        rhino.reset()


```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
