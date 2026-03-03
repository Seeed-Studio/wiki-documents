---
title: 自転車用ダイナモ（ブラケット付き） - 6V 3W
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Bicycle_Dynamo_With_Bracket-6V_3W/
slug: /ja/Bicycle_Dynamo_With_Bracket-6V_3W
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](http://bz.seeedstudio.com/depot/images/product/Bidynamo.jpg)

この製品はクリーンで環境に優しいエネルギーを提供します。燃料を使用せずに電力を生成し、安全かつ静かに動作します。スタイリッシュで、低炭素生活を通じて地球保護に貢献することができます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/bicycle-dynamo-with-bracket-6v-3w-p-798.html?cPath=155)

## 特徴
---
* シンプルで美しい外観と放熱設計
* 防雨、防塵、耐振動
* 定電流出力

## 注意事項
---
1. 長時間の走行後にダイナモの外装に触れないでください。体をやけどする可能性があります。少なくとも10分間待ってください。
2. 雨の日に使用できますが、水中に入れないでください。また、子供の手の届かない場所に保管してください。

## 仕様
---
### ダイナモの全体サイズと構造

1. ダイナモ本体の最大直径は40.5mm、主本体の最長長さは94.5mmです。

![](https://files.seeedstudio.com/wiki/Bicycle_Dynamo_With_Bracket-6V_3W/img/Bicycle-spec.JPG)

1. 摩擦ローラー  
2. ダイナモ本体  
3. 磁石鋼  
4. 巻線サポート  
5. スプリングハウジング  
6. コイル  
7. レンチ  
8. ラグプレート  
9. リアカバー  

2. 出力: 6V, 3W

3. 保証期間: 1年

4. 使用寿命: 2～3年

### 技術パラメータ

**定電圧下での出力電力テスト**

<table>
  <tbody><tr>
      <th>速度(km/h)</th>
      <th>出力電力(W)</th>
      <th>出力電圧(V)</th>
      <th>出力電流(A)</th>
  </tr>
  <tr>
      <td width="200px">5</td>
      <td width="200px">0.56</td>
      <td width="200px">6.00</td>
      <td width="200px">0.126</td>
  </tr>
  <tr>
      <td>15</td>
      <td>1.89</td>
      <td>6.00</td>
      <td>0.369</td>
  </tr>
  <tr>
      <td>30</td>
      <td>4.09</td>
      <td>6.00</td>
      <td>0.560</td>
  </tr>
  </tbody>
</table>

**定抵抗負荷テスト（18オーム）**

<table>
  <tbody><tr>
      <th>速度(km/h)</th>
      <th>出力電力(W)</th>
      <th>出力電圧(V)</th>
      <th>出力電流(A)</th>
  </tr>
  <tr>
      <td width="200px">5</td>
      <td width="200px">0.45</td>
      <td width="200px">2.45</td>
      <td width="200px">0.115</td>
  </tr>
  <tr>
      <td>15</td>
      <td>1.89</td>
      <td>5.78</td>
      <td>0.325</td>
  </tr>
  <tr>
      <td>30</td>
      <td>3.21</td>
      <td>7.23</td>
      <td>0.435</td>
  </tr>
  </tbody>
</table>

**温度テスト：**

<table>
  <tbody><tr>
      <th>周囲温度</th>
      <th>外装温度</th>
      <th>温度上昇</th>
      <th>備考</th>
  </tr>
  <tr>
      <td width="200px">20℃</td>
      <td width="200px">55.2℃</td>
      <td width="200px">32.2℃</td>
      <td width="200px">30cmの距離を保ってテスト</td>
  </tr>
  </tbody>
</table>

## 使用方法

### ハードウェアの取り付け

ダイナモを自転車の前フォークにある車輪の近くに固定し、高さを適切な位置に調整します。（ダイナモの固定側「左または右」に注意してください。これが一致している必要があります。）

1. レンチを動かして、ダイナモローラーが車輪の縁に適切な位置で接触するようにします。

## FAQ
---
以下に質問を記載してください：

*   Arduinoを直接駆動するために使用できますか？

A: もし「直接」とはダイナモからArduinoに直接配線をつなぐことを意味するのであれば、それはできません。なぜなら、すべての発電機と同様に、このようなダイナモは交流（AC）を出力します。これはタングステンランプ（つまり電球）には問題ありませんが、LEDやArduinoのような半導体デバイスはすべて直流（DC）が必要です。そのため、まずブリッジ整流器が必ず必要になります。その後に何を追加するかは、予算やニーズによります。Arduinoには安定した電圧が必要なので、ダイナモを基本的にバッテリーチャージャーとして使用し、その充電されたバッテリーからすべての機器に電力を供給する必要があります。

効率を最大化するために必要なのは、理想的にはDC-DCコンバーター（「ブースト・バックコンバーター」で検索してください）か、最低限でもブリッジ整流器で駆動される何らかの充電回路です。

以下のリンクを参照してください。

*   停止した場合（例：赤信号で）、当然エネルギーの出力も停止します。エネルギーの流れを維持するには、コンデンサが必要ですか？

A: はい、それは数秒から1分以上の間機能します。使用するLEDの明るさやコンデンサの容量によります。

Q: バッテリー？どのような仕様のものが必要ですか？

A: 「スタンドライト」を備えた自転車ライトの作り方を説明している多数のサイトをGoogleで検索してください。
それが探すべき検索用語です。

Q: 私の目的は、a) 携帯電話を充電すること、または b) Arduinoを駆動してクールなことをすることです :)

A: それは*十分*可能ですが、再び言いますが、その（かなり変動する）3〜約12ボルトの交流（AC）を適切で安定した直流（DC）に変換する必要があります。オンオフスイッチを使用する場合、ダイナモ自体の「スイッチ」に加えて、電圧レギュレーターを使用することを忘れないでください。ダイナモから出力される電圧は、ダイオードを通じて負荷がない場合、ダイナモの絶対*ピーク*出力電圧までコンデンサを簡単に充電する可能性があります。そして、LEDを再接続した瞬間に焼損する可能性があります。ライトを常に接続してオンにしておき、スタンドライトとしてコンデンサを使用し、ダイナモを車輪から外すことでオフにする場合は、その問題はありません。

Cheers --Nighto 2011年6月10日 01:37 (CST)

*   供給されるダイナモは前フォークにのみ取り付けることを想定しています。また、特定のダイナモは片側でしか動作しません。このダイナモはその点でかなり柔軟性がありません。自転車の前フォークに取り付けられたダイナモの写真については、[https://en.wikipedia.org/wiki/Bottle_dynamo](https://en.wikipedia.org/wiki/Bottle_dynamo) を参照してください。

ここで購入する多くの人々は、自転車の照明以外の目的で使用しているため、これらの点は彼らにとって重要ではありません。

自転車用ダイナモであることやその価格を考えると、自転車利用者にとって競争力のある選択肢であることを考慮し、自転車で使用しないとは想定しないでください。そして、この価格にしては十分なダイナモですが、安全に取り付ける必要があります。それは基本的な常識です。

*   不明な場合は、地元の自転車整備士に相談してください。*

## リソース
---
*   [ファイル:Spec.doc](https://files.seeedstudio.com/wiki/Bicycle_Dynamo_With_Bracket-6V_3W/res/Spec.doc)

## 外部リンク

アプリケーションアイデア、ドキュメント/データシート、またはソフトウェアライブラリを提供する外部ウェブページへのリンク。

[ダイナモの配線方法](http://www.yellowjersey.org/dami.html)（信じられないかもしれませんが、これを知る必要がある人もいます）

[http://pilom.com/BicycleElectronics/DynamoCircuits.htm](http://pilom.com/BicycleElectronics/DynamoCircuits.htm)

[http://www.candlepowerforums.com/vb/forumdisplay.php?86-Bicycle](http://www.candlepowerforums.com/vb/forumdisplay.php?86-Bicycle)

## 技術サポート & 製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>