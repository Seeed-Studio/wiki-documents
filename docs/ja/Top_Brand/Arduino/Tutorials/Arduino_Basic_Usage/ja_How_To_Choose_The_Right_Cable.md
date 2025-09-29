---
description: 適切なケーブルの選び方
title: 適切なケーブルの選び方
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/How_To_Choose_The_Right_Cable
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus用

---


<!-- ---
name: 適切なケーブルの選び方
category: チュートリアル
title: 適切なケーブルの選び方
prodimagename:
surveyurl: https://www.research.net/r/How_To_Choose_The_Right_Cable
--- -->

## 悪い例

ここでは、Seeedが提供するさまざまなケーブルを紹介します。デモを作成する際、ジャンプワイヤを避けるのは難しいです。正直なところ、ジャンプワイヤは嫌いです。本当に散らかります。しかし、簡単なアプリケーションのためにPCBを作成できない場合、ジャンプワイヤを使用せざるを得ないことがあります。

ジャンプワイヤが必要であることを認めざるを得ない場合、なぜ適切なケーブルを選んでデモをもっと整然としたものにしないのでしょうか。
以下の画像はジャンプワイヤの悪い例を示しています。

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/How_to_choose_cable_1.jpg)

ただの混乱に見えませんか？

では、ケーブルの旅を始めましょう！

## Groveケーブル

GroveケーブルはGroveシステムで最も一般的なケーブルです。これらは[Base Shield](https://www.seeedstudio.com/depot/base-shield-v13-p-1378.html?cPath=98_16)とGroveセンサー、アクチュエータ、またはデバイスを接続するために使用されます。Grove Shieldsは複数のデバイスを同時に接続することをサポートしているため、プロジェクトでは複数のGroveケーブルが必要になる場合があります。

Groveケーブルは、5cm（約2インチ）から50cm（約20インチ）まで、さまざまな長さで利用可能です。プロトタイピングやプロジェクトエリアで利用可能なスペースの量、またはGroveデバイスや組み込みシステムをどれだけ密に配置する必要があるかに基づいて長さを選択してください。以下は、さまざまな長さのGroveケーブルの製品ページへの直接リンクです。Groveケーブルはポイントツーポイント接続に適しており、例えばGrove ShieldとGroveデバイスを接続する場合に使用されます。他の用途向けのGroveケーブルもあります。

Groveケーブルは4色に色分けされたワイヤと2つのオス型モジュラーコネクタを特徴としています。通常、一方の端はGrove Shieldに接続され、もう一方の端はGroveデバイスに接続されます。モジュラーコネクタはキー付きで、独自の形状をしており、シールドやデバイスの接続部に一方向でしか挿入できません。Groveケーブルのコネクタをシールドやデバイスに接続する際は、2つをしっかりと固定するために十分な圧力をかけてください。

Groveケーブルはストレートスルーで配線されています。つまり、コネクタAのピン1はコネクタBのピン1に接続され、ピン2はピン2に接続されるという具合です。また、ワイヤは色分けされています。ピン1は黄色、ピン2は白、ピン3は赤、ピン4は黒です。通常、ピン1とピン2は信号（例：A1/A2またはD1/D2）であり、ピン3とピン4は電源とグランドです。

- [5cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack.html)

- [20cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack.html)

- [30cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-30cm-Cable-5-PCs-Pack.html)

- [40cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-40cm-Cable-5-PCs-Pack.html)

- [50cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-50cm-Cable-5-PCs-Pack.html)

## Grove - ブランチケーブル

[[リンク](https://www.seeedstudio.com/Grove-Branch-Cable-5PCs-pack.html)]

Grove ブランチケーブルは、Grove システムで使用されるケーブルです。このケーブルは、3つのオス型ラッチコネクタと4本の色分けされたワイヤーで構成されています。Grove ブランチケーブルは、複数の Grove デバイスを Grove シールドにデイジーチェーン接続するために使用できます。通常、一端が Grove シールドに接続され、2つ目と3つ目のコネクタが2つの Grove デバイスに接続されます。

他の Grove ケーブルファミリーと同様に、オスコネクタはキー付きです。つまり、特定の形状をしており、対応するシールドやデバイスのコネクタに一方向にしか接続できません。また、コネクタをシールドやデバイスに接続する際は、Grove ブランチケーブルのオスコネクタを Grove シールドや Grove デバイスのメスレセプタクルにしっかりと押し込むようにしてください。Grove ブランチケーブルにはラッチ（「バックル」または「バックル付きケーブル」とも呼ばれる）が付いているため、ラッチが閉じると小さな音が聞こえ、対応する部分にラッチが閉じるのが見えるはずです。

これらのラッチ（またはバックル）は接続を強化し、高振動環境や生産環境で特に便利です。ケーブルを取り外す際には、ある程度の力を加える必要があります。Grove デバイスを移動したり変更したりする場合は、Grove ブランチケーブルコネクタのラッチを解除するために少し力を加え、その後レセプタクルまたはソケットから引き抜いてください。

Grove ブランチケーブルを使用して複数のデバイスを接続する場合は、特に注意してください。Grove シールドのアナログまたはデジタルピンが両方の Grove デバイスで共有されることを認識してください。このような構成は、2つのアナログデバイスには適していない場合があります。アナログデバイスとデジタルデバイスを Grove ブランチケーブルで接続すると、全く動作しない可能性もあります。

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/Grove-Branch_Cable-5PCs_pack-.jpg)

サンプルアプリケーション例：

- 2つ以上の I2C デバイスを接続またはデイジーチェーン接続する。複数のブランチケーブルを使用して I2C バスを拡張することができます。

- 同時に動作する必要がある2つのデバイスを接続する。例えば、[LED](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html) と [リレー](https://www.seeedstudio.com/Grove-Relay.html) を Grove シールドに単一の Grove ブランチケーブルで接続することができます。この場合、2つのデバイスは単一のデジタルピンで制御されるため、LED とリレーを同時にオンまたはオフにすることが可能です。

## Grove - サーボ用ブランチケーブル

[[リンク](https://www.seeedstudio.com/Grove-Branch-Cable-for-Servo-5PCs-pack.html)]

Grove サーボ用ブランチケーブルは、Grove ケーブルの別のタイプで、主に1つまたは2つのサーボをプロジェクトに接続するために使用されます。このケーブルは、1つのキー付き4ピンオスコネクタ（Grove シールドへの接続に適している）と、2つの3ピンオスピン型コネクタで構成されています。この構成では、電源とグラウンド（4ピンオスのピン3とピン4）が両方の3ピンオスコネクタに供給されます。4ピンコネクタのピン1（黄色）は Arduino の PWM 対応ピンの1つに接続され、1つの3ピンオスピンコネクタに出力されます。4ピンコネクタのピン2（白いワイヤー）は Arduino の2つ目の PWM 対応ピンに接続され、2つ目の3ピンオスピンコネクタに出力されます。

Grove サーボ用ブランチケーブルの4ピンキー付きコネクタは、通常 D2-D9 のような Grove シールドのデジタルソケットに接続されます。サーボを接続する際は、デジタル PWM ケーブル（黄色または白）のワイヤーカラーを確認し、どのデジタルピンがサーボ入力に対応しているかを把握してください。

Arduino UNO はピン3、5、6、9、10、11で PWM をサポートしています。Arduino Mega では、ピン2 - 13および44 - 46で動作します。ATmega8を搭載した古い Arduino ボードでは、analogWrite() はピン9、10、11でのみサポートされています。

こちらにいくつかの [サーボ](https://www.seeedstudio.com/catalogsearch/result/?q=servos) のリンクがあります。

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/4pinto2x3pin500.jpg)

## Groveから4pinメスジャンパー

以下の用途に使用できます：

- Groveデバイスを他のMCUに接続する場合。例えば、[Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html)を[Raspberry Pi](http://www.raspberrypi.org/)に接続したい場合。

- Base Shieldを使用して、非Groveデバイスを制御する場合。

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/4p254.jpg)

## その他のケーブル

他の用途に適したケーブルもあります。詳細については[こちら](https://www.seeedstudio.com/catalogsearch/result/?q=Cables)をクリックしてください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>