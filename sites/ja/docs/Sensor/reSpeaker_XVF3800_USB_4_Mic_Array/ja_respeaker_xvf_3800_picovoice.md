---
description: ReSpeaker XVF3800 USB 4-Mic Array は、AEC、ビームフォーミング、ノイズ抑制、360° 音声キャプチャを備えたプロフェッショナルな円形マイクアレイです。XIAO ESP32S3 と組み合わせることで、スマートデバイス、ロボット、IoT アプリケーション向けの高度な音声制御を実現します。シームレスな統合とデュアルモードの柔軟性を体験してください。
title: reSpeaker XVF3800 を Pico-voice で制御する
keywords:
  - reSpeaker
  - python
  - picovoice
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp
slug: /respeaker_xvf3800_picovoice
sku: 114993700
last_update:
  date: 3/24/2026
  author: Kasun Thushara
createdAt: '2026-03-24'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/ja/respeaker_xvf3800_python_sdk/
---

## はじめに 

[Picovoice](https://picovoice.ai/) は、オンデバイス音声 AI を専門とする企業であり、ウェイクワード検出、音声認識（speech-to-text）、インテント認識など、クラウドに依存せずに組み込み機器やエッジデバイス上でローカルに動作するフルスタック技術を提供しています。これらのソリューションは、低レイテンシ、プライバシー保護、クロスプラットフォーム展開を念頭に設計されており、IoT やロボットシステムに適しています。 

[Porcupine](https://picovoice.ai/docs/porcupine/) は、Picovoice が提供する軽量かつ高精度なウェイクワード検出エンジンで、ディープニューラルネットワークを用いて構築され、組み込みシステム向けに最適化されています。これにより、計算コストを抑えつつ常時待ち受けするアプリケーションを実現でき、マイコン、Raspberry Pi、モバイル、デスクトップなどのプラットフォームで動作します。 

Picovoice の [Rhino](https://picovoice.ai/docs/rhino/) は、音声コマンドを別個の speech-to-text ステップを必要とせずに、直接構造化されたインテントへ変換する speech-to-intent エンジンです。音声認識と自然言語理解を組み合わせた単一ステップのディープラーニング手法を用いることで、精度を向上させつつレイテンシを低減します。

## 必要なハードウェア 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## ウェイクワード検出 

ロボット向け組み込みシステムにおけるウェイクワードは、デバイスを低消費電力のリスニング状態に保ち、必要なときだけ重い音声処理を有効化する **イベント駆動型処理** を可能にします。これにより、マイコンやエッジデバイスのようなリソース制約のあるハードウェアにおいて、CPU、メモリ、エネルギー消費を大幅に削減できます。また、オーディオパイプラインにおける **ゲーティング機構** として機能し、不要なノイズをフィルタリングして、音声認識や制御ロジックの不必要な起動を防ぎます。プライバシーの観点からも、ウェイクワード検出により、明示的なユーザーの意図が検出された後にのみ音声が取得または送信されるため、ほとんどのデータ処理をデバイス上に留めることができます。さらに、人とロボットのインタラクションにおいて自然なトリガーを提供し、環境音会話とロボットに向けられたコマンドを区別するのに役立ちます。

ウェイクワードを reSpeaker XVF3800 のような高度なマイクアレイシステムと組み合わせて使用することで、具現化ロボットシステムにおいて **効率的かつ信頼性の高い** 音声インタラクションを実現できます。ウェイクワードは、必要なときだけフルの音声処理を有効化することで、組み込みハードウェア上の消費電力と CPU 使用率を削減します。マイクアレイは、**ビームフォーミング、ノイズ抑制、Circular mic array 上での方向検出** を提供することでこれを強化し、騒がしい環境でも正確なウェイクワード認識を可能にします。この組み合わせにより、誤検出を最小限に抑え、システム全体の応答性を向上させます。また、デバイスが明示的に呼びかけられたときだけ応答し、適切な話者にフォーカスできるようにすることで、人とロボットのインタラクションも改善されます。

## Pico-voice でウェイクワードを使う方法

[Picovoice](https://console.picovoice.ai/) にサインアップすると、Access Key を取得できます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic1.png" alt="pir" width={800} height="auto" /></p>


### オプション A : 組み込みキーワード 

 Porcupine には、**AMERICANO、BLUEBERRY、BUMBLEBEE、GRAPEFRUIT、GRASSHOPPER、PICOVOICE、PORCUPINE、TERMINATOR、JARVIS** など、いくつかの組み込みウェイクワードオプションが用意されており、有効な Access Key と組み合わせてそのまま使用できます。Access Key があれば、カスタムモデルをトレーニングすることなく、これらのキーワードを簡単にアプリケーションへ統合できます。

この構成では、ホストデバイスとして **Raspberry Pi 5** を使用し、ウェイクワード検出はデバイス上でローカルに実行されます。XMOS ベースのマイクシステムには **USB オーディオファームウェア** が書き込まれており、OS から標準的なオーディオ入力デバイスとして認識されます。

まず、必要な Porcupine ライブラリと依存関係を環境にインストールする必要があります。

```bash
pip install pvporcupine
```

インストール後、サンプルコードを使用してオーディオレコーダーを初期化し、選択したキーワードを読み込み、ウェイクワードを継続的に待ち受けることができます。キーワードが検出されると、システムは録音や音声コマンド処理などの後続アクションをトリガーできます。

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

Picovoice Console に移動してカスタムウェイクワードのページを開きます。使用したい言語を選択し、「hi flex」などのウェイクワードを定義します。コンソール上でウェイクワードをテストし、検出性能を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic2.png" alt="pir" width={400} height="auto" /></p>

問題なければ、Train をクリックしてモデルを生成します。次にターゲットプラットフォームを選択し（ここでは Raspberry Pi を選択）、最後に生成された .ppn ファイルをダウンロードします。このファイルをアプリケーション内で使用して、カスタムウェイクワード検出を行います。

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

## Speech to Intend 

Picovoice Rhino は、音声コマンドを別個の speech-to-text ステップを必要とせずに、直接構造化されたインテントへ変換する speech-to-intent エンジンです。音声認識と自然言語理解を組み合わせた **単一ステップのディープラーニング手法** を用いることで、精度を向上させつつレイテンシを低減します。 
Rhino は **リアルタイムのオンデバイス処理** に最適化されており、オフラインで動作してネットワーク遅延がゼロであると同時に、すべての音声データをプライベートに保ちます。非常に効率的で、Raspberry Pi やマイコンなどの組み込み・IoT システム向けに設計されています。 
さらに Rhino では、インテントとスロットを含むカスタムコンテキストを開発者が定義できるため、ドメイン固有のコマンドを理解し、音声入力から直接アクションをトリガーすることが可能です。 

### コンテキストを作成する 

コンテキストは、特定のドメインにおける発話コマンド、インテント、スロットの集合を定義します。ここでは、音声コマンドで ReSpeaker Flex を制御するための **「Bumblebee」** コンテキストを作成します。Picovoice の Rhino Speech-to-Intent コンソールに移動し、**「Empty」** テンプレートを使用して **Bumblebee** という名前の新しいコンテキストを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic4.png" alt="pir" width={600} height="auto" /></p>

### インテントを作成する

最上位レベルでは、コンテキストはドメイン内でのユーザーアクションを表すインテントの集合です。たとえば、HiFlex コンテキスト内に「Gesture」というインテントを作成し、ジェスチャー関連の音声コマンドを表現します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic5.png" alt="pir" width={600} height="auto" /></p>

### インテントに表現（expression）を追加する

ユーザーは同じインテントを複数の言い回しで表現でき、そのそれぞれのバリエーションを expression と呼びます。**Gesture** インテントに対しては、**“wave your head” や “shake your antenna”** のような表現を追加します。これらはいずれも同じアクションのグループにマッピングされます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic6.png" alt="pir" width={600} height="auto" /></p>

### スロットを使って変数を取得する 


スロットを使用して、ユーザー発話内の可変部分を取得します。この場合、**“wave”** や **“shake”** といった単語はコマンド内の変化する状態を表すため、変数としてモデル化できます。これらのバリエーションを動的に取得するために、Rhino コンテキスト内に **“commands”** という名前のスロットを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic7.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic8.png" alt="pir" width={800} height="auto" /></p>

既存の expression を修正して、新しく作成したスロットを含めます。スロットを追加する際は、`$` 記号を使ってスロットであることを示し、その後オートコンプリートのドロップダウンから目的のスロットタイプを選択して名前を割り当てます。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic9.png" alt="pir" width={800} height="auto" /></p>

準備ができたら、まず Test をクリックしてテストを行います。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic10.png" alt="pir" width={800} height="auto" /></p>

### モデルをダウンロードしましょう

コンテキストの設計が完了したら、右上のダウンロードアイコンをクリックし、ターゲットプラットフォームを選択してから **“Download”** をクリックします。Picovoice Console はそのプラットフォーム向けの Rhino モデルを自動的にトレーニングし、通常 5〜10 秒ほどで完了します。

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

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
