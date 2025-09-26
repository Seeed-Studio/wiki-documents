---
description: Seeeduino の使い方ガイド
title: Seeeduino の使い方ガイド
keywords:
- Seeeduino_Series
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Getting_Started_with_Seeeduino
last_update:
  date: 05/15/2025
  author: hushuxu
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Hello_world.jpg" alt="pir" width={600} height="auto" /></p>

### **0. Hello world**

一般的に、プログラミング言語を学び始める際には、教師が簡単な「Hello World」の例を教えてくれます。これは基本的な入門ですが、とても重要なプロセスです。Arduino に慣れていなくても心配しないでください。Arduino の「Hello World」、つまり LED を点灯させる方法を学ぶことができます。
ここでは、Seeeduino を例にして、デジタル 13 ピンで制御される LED を点灯させる方法を学びます。この作業を始める前に、Arduino 環境をダウンロードし、Seeeduino ドライバを正常にインストールしていることを確認してください。まだの場合は、具体的な手順を学ぶためにこちらをクリックしてください。

### 1. Seeeduino を PC に接続する

USB ケーブルを使用して Seeeduino ボードをコンピュータに接続します。緑色の電源 LED（PWR とラベル付けされています）が点灯するはずです。
（Seeeduino が単独で動作する場合は、USB または電源アダプタを選択して Seeeduino に電力を供給できます。）

### 2. Blink サンプルを開く

LED ブリンクのサンプルスケッチを開きます：**File&gt;Examples&gt;01.Basics&gt;Blink**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started1.png" alt="pir" width={600} height="auto" /></p>

### 3. ボードを選択する

ツール &gt; ボード メニューで、使用している Arduino に対応するエントリを選択する必要があります。ここでは ATmega328 を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started2.png" alt="pir" width={600} height="auto" /></p>

### 4. シリアルポートを選択する

ツール | シリアルポート メニューから Arduino ボードのシリアルデバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started3.png" alt="pir" width={600} height="auto" /></p>

### 5. プログラムをアップロードする

次に、環境内の「Upload」ボタンをクリックするだけです。数秒待つと、ボード上の RX および TX LED が点滅するのが見えるはずです。アップロードが成功すると、ステータスバーに「Done uploading.」というメッセージが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started4.png" alt="pir" width={600} height="auto" /></p>

### 6. 結果

アップロードが完了して数秒後、ボード上のピン 13 (L) LED が点滅し始める（オレンジ色）はずです。もしそうなれば、おめでとうございます！Arduino が正常に動作するようになりました。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>