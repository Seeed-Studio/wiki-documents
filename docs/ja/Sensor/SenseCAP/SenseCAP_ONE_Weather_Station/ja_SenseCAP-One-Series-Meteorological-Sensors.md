---
description: SenseCAP ONE コンパクト気象観測ステーション
title: SenseCAP ONE コンパクト気象観測ステーション
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP-One-Series-Meteorological-Sensors
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# SenseCAP ONE シリーズ気象センサー

![sensecap one](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/SenseCAP-ONE-1030x754.png)

##### _(SenseCAP ONE シリーズコンパクト気象観測ステーション)_

## 製品紹介

今日、マイクロクライメートとして知られる局地的な気象データは、より精密で正確な天気予報のための新たなフロンティアです。その結果、気象データの収集はますます小規模でグリッド化されています。これを受けて、気象データ収集の最も便利な手段である気象観測ステーションの需要が高まっています。

SenseCAP ONE コンパクト気象観測ステーションは、以下のパラメータを測定する複数の気象センサーで構成されています：気温・湿度、気圧、光、降水量、風速、風向、PM2.5、PM10。モジュラー設計を採用することで、SenseCAP ONE は実際のアプリケーションニーズに応じて、異なるセンサーの組み合わせを1つのコンパクトな気象観測ステーションに便利に統合することを可能にします。

製品は業界標準で設計され、IP66定格で、高精度、高信頼性と安定性、強い堅牢性を特徴としています。SenseCAP ONE シリーズは RS485/RS422 (Modbus) およびSDI-12インターフェースをサポートし、それぞれのインターフェースの他のセンサーとの簡単な拡張を可能にします。SenseCAP ONE は展開が簡単で、屋外フィールドの過酷な環境での長期運用に耐久性があり、スマートシティ、電力網、発電所、道路気象観測ステーション、空港、スマート農業などのシナリオでのアプリケーションに最適です。

![sensecap one catagories](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/overall.png)

特徴的なセンサーの組み合わせを含む合計6つのSenseCAP製品があります。特定のシナリオに適合するものを見つけるために、SenseCAP ONEの外観と各製品が測定できるパラメータを明確に示すチャートがあります。

### SenseCAP ONE S700 7-in-1 コンパクト気象センサー

SenseCAP ONE S700 7-in-1 コンパクト気象センサーは、スマートシティプロジェクトなどの異なるアプリケーションシナリオで重要な環境・気象データの収集と監視を支援します。SenseCAP ONE S700は、以下の7つのパラメータを測定するセンサーを搭載しています：気温、相対湿度、気圧、光強度、降雨量、風速、風向。

SenseCAP ONE はIP66認証を取得しており、最も厳しい屋外環境にも耐える強い堅牢性を特徴としています。風速と風向を測定するセンサーは、従来の機械式3カップまたはベーン風速計の代わりに超音波を使用しています。超音波センサーを使用する利点は、可動部品を減らすことでセンサーが壊れにくくなり、精度や人手を犠牲にすることなく保守が容易になることです。

SenseCAP ONE シリーズはRS 485 (MODBUS-RTU) / 232 / 422 (Modbus) / SDI-12通信プロトコルを使用しています。したがって、SenseCAP ONE コンパクト気象センサーは、RS 485 (MODBUS-RTU) / 232 / 422 (Modbus) / SDI-12をサポートする任意のデータロガーと使用できます。

また、SenseCAP ONE シリーズ気象センサーと使用できるSenseCAP [Sensor Hub 4G Data Logger](https://solution.seeedstudio.com/product/sensor-hub-4g-data-logger/)（ソーラー電源とDCウォール電源をサポート）も提供しています。データはSensor Hubに送信され、その後SenseCAPサーバーまたはプライベートサーバーに送信できます。SenseCAPサーバーの使用を選択した場合、独自のアプリケーションを簡単に作成できるAPIも提供しています。

![](https://sensecap-solution-upload.cdn.seeed.cn/cc/2020/05/Picture16.png?x-oss-process=image%2Fformat,webp)

## 機能

- **1つで複数の気象パラメータを測定**: 雨量強度、気温、相対湿度、気圧、光強度、降水強度、風速、風向など。

- **電子コンパス内蔵**: 簡単な設置が可能で、手動で北向きに設置する際は電子コンパスを無効にすることも選択できます。

- **フランジプレートと3mケーブル**がポールマウント用にパッケージに含まれています

- **IP66等級**: 防水・防塵、ヒーター利用可能、厳しい屋外環境に適しています。

- **可動部品のない超音波風速・風向センサー**

- **コンパクトサイズ、校正済み、設置簡単、メンテナンスフリー、ユーザーフレンドリー**

- **放射シールド**を装備し、正確な環境測定を保証します。

- **対応インターフェース**: RS 485 (MODBUS-RTU) / 232 / 422 (Modbus) / SDI-12

- **CE、FCC認証は手続き中**、近日公開予定….

## 測定仕様

![measurement](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/measurement%20specification.png)

## 一般仕様

![general](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/general%20specifications.png)

## デモ

ここでは[SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html)と[Raspberry Pi](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)を使って、あなた独自の気象観測所を作成する方法をご紹介します！最小限のセットアップと使いやすいコードで、すぐに始めたい初心者にとって素晴らしいチュートリアルです。

![](https://lh4.googleusercontent.com/CFwdaJ3jBZHVROiCzg1Mfu2dF5pNJwH3DAt7dloC4IKyKO_nFwISY_J-3JpZIqiZCazf9Y5DAxB7OxwNwhnwot3BY_I4Wx3CBdWrZNUwJMoDe9bCSzLmS4yxLVz0JYrm9HhjZl7N)

### なぜ気象観測所なのか？

気象データについて考えるとき、航空、海事、建設業界での重要性や、極端な気候の予測における重要性を認識するのは当然のことです。しかし、一般の個人にとって、そのような情報は家を出る際に傘を持参するかどうかを決める時にのみ関連するかもしれません。

新しいアプリケーションのおかげで、気象データが持つ潜在能力とその関連性がより大きくなるだけだと言ったらどうでしょうか？

衣料品業界では、年間収益損失の約35%が不正確な売上予測と、時間、季節・天候変化、祝日などの要因とアパレル売上の関係に関する統計によって引き起こされています。

これを軽減するために、正確な天気予報データを使用して特定地域への在庫配分を計画するのはどうでしょうか？例えば、将来の天候変化を考慮してダウンジャケットの需要がどのように上昇または下降するかを推定できます。

実際、多くの国がすでに気象データを使ってビジネス決定を推進しています。ドイツでは、ビール指数により気温が22℃を超えるとビール売上が急上昇すると述べられています。そして気温がさらに1度上昇するごとに、1日あたり230万本多くのビールが販売されます。まさに素晴らしい！

ビール指数に加えて、自動車指数、アイスクリーム指数、水着指数、食品カビ指数なども存在し、これらに基づいて企業は事前に生産・マーケティング計画を策定できます。ご覧のように、気象データの商業化には想像の余地がたくさんあります。

今日、マイクロクライメートとして知られる局地的な天候データは、より精密で正確な天気予報の新たなフロンティアです。その結果、気象データの収集はますます小規模でグリッド化されています。これを踏まえ、気象データ収集の最も便利な手段である気象観測所の需要が高まっています。今日のデモでは、SenseCAP ONE S700とRaspberry Piを使用して、わずか数ステップであなた独自の気象観測所を稼働させる方法をお見せします。

### 必要な材料

このチュートリアルに従うには、以下の材料が推奨されます。手元にあるなら古いRaspberry Pi 3も使用できますが、他のプロジェクトにも使用したい場合はPi 4の方がはるかに多くのパワーと汎用性を提供します。

- [Raspberry Pi 4 8GB](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html) x1

- [RS-485 Shield for Raspberry HAT](https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html) x1

- [SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html) x1

### ハードウェアセットアップ

まず、Seeed RS-485 ShieldをRaspberry Piに組み立てます。下図に示すようにRaspberry Piのピン1から25に合わせるよう注意してください。

![](https://lh4.googleusercontent.com/h4i69Ct7UV4euxBaw8dLj09gJGfhTm4mo2hXmlq2hDKmANg116M79P_U1P50W8B_1-3h1ckTUjew8NsUALx8-CDoiisaYnyq_fwyekfAffY6ZMf5vVL6WEn02xZoRlw_uSZw2G46)

次に、SenseCAP ONE S700をRS-485接続でRS-485 Shieldに接続します。以上です！

### ソフトウェアセットアップ

#### ステップ1: SenseCAP ONE S700の設定

まずSenseCAP ONE S700でプロトコルを設定する必要があります。最初にお使いのオペレーティングシステム用の最新SenseCAP ONE設定ツールを[こちら](https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases)からダウンロードしてインストールしてください。

設定ツールを開いたら、SenseCAP ONEをUSB Type-CでPCに接続し、シリアルポートで選択します。次に、接続をクリックします。

次に、設定を選択します。メインポートプロトコルで、下図のようにRS-485 ASCIIを選択します。次に、デバイスに書き込むを選択します。

![](https://lh5.googleusercontent.com/IaVOWjPMua04nLj8I1LP89rZ0JBNxpyEhSfDWupO9cMIYtsV6lsR90k1esRGWLsBgzCHB2Odj5kb3BIPF5kkCyRBwsnf_-a8L9gnQuTM5cEXfHpMA-WzaWt50AqNtHZZEhqXcEgx)

#### ステップ2: Raspberry Piの設定

このチュートリアルでは、インターネット接続が設定されたRaspberry Pi上で動作するRaspberry Pi OSを前提としています。Raspberry Piが初めての場合は、WiFiを稼働させる方法を[こちら](https://www.seeedstudio.com/blog/2021/01/25/three-methods-to-configure-raspberry-pi-wifi/)で学ぶことができます。

まず、Raspberry PiにNode.JS v10.22.xがインストールされていることを確認してください。そうでなければ、以下のスクリプトを実行してインストールしてください。

```
curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n
bash n 10
```

次のステップは、/dev/ttyS0でハードウェアシリアルを有効にすることです。ターミナルウィンドウで、以下のコマンドでRaspi Configツールを実行してください：

```
sudo raspi-config
```

### 気象観測ステーションの実行

セットアップ後、気象観測ステーションを起動して実行するのは簡単です。Raspberry Pi で以下のコマンドを実行して、気象観測ステーションのサーバーとウェブサイトをインストールして実行してください。

```
git@github.com:Seeed-Solution/SenseCAP-WeatherStation-Raspberry-Pi-Visualization.git
mv SenseCAP-WeatherStation-Raspberry-Pi-Visualization /opt/SenseCAP-WeatherStation-Raspberry-Pi-Visualization
cd /opt/SenseCAP-WeatherStation-Raspberry-Pi-Visualization

cd server && install --unsafe
cd website && install --unsafe

# pm2 start
npm install -g -y --unsafe pm2 http-server
pm2 start run-server.sh
pm2 start run-website.sh
pm2 save
pm2 ls
```

PCとRaspberry Piが同じローカルエリアネットワーク内にある状態で、ブラウザで以下のURLを通じて気象観測所のデータにアクセスします。

```
http://{Raspberry Pi IP}:8080
```

Raspberry PiのIPアドレスが不明な場合は、以下のコマンドを実行して、inetの横に表示されるIPアドレスを確認してください。

```
ifconfig wlan0
```

![](https://lh3.googleusercontent.com/1MviIYqYAIagHWvDDj8BXoRjBWAbqYATtQ4wyTrl4W3Z-XTwa9VcO63zkZ7_qD5mvu88EsJ9Euu8G4GAi8IW7WOy_047ZdO-7BWMGL1Qvz59Sv1n5vTZ6_OzzOY5JSBcAENfNrc5)

### 完了

すべてのセットアップを完了し、URLに正常にアクセスできたら、以下に示すようにリアルタイムで気象データが可視化されているのを確認できるはずです。SenseCAP ONE S700は、温度や湿度などの基本データを取得できるだけでなく、風向・風速、気圧、降雨量、さらには光量などの高度な情報も表示できるオールインワンプラットフォームです。

![](https://lh6.googleusercontent.com/SGQuzJr3kZIRojr79-Iu1-onBBQoCDNH6gFFPTh7eFJy7yYYlO97Y6uvtEgSvMmt68q1LBUlMJSgOUn7kFK3Meu2d1mv6oAovEiKlCwNkJaOmhEwBBeDVNDZMTrggOiZsHh2JHEq)

これにより、わずか数分で完全に機能する気象ステーションを構築できるだけでなく、データをリモートで可視化するように拡張することも可能です。また、強力なデータ分析と予測のために気象データを保存することもできます。

### まとめ

Raspberry Piと[SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.htmlhttps://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html)を使用して、わずか数ステップで気象ステーションを作成する方法のデモンストレーションを楽しんでいただけたことを願っています！このプロジェクトはシンプルですが、それが可能にする可能性はあなたの想像力によってのみ制限されます。

Raspberry Pi 4 8GBでの動作に加えて、SenseCAP ONEシリーズの製品は、当社の[SenseCAP Sensor Hub 4G Data Logger](https://www.seeedstudio.com/SenseCAP-Sensor-Hub-4G-Data-Logger-with-builtin-battery-p-4852.html)と簡単に展開・使用できます。展開が容易な産業グレードの4Gセルラーステーションとして、Sensor HubはMODBUS-RTU RS485プロトコルを使用してセンサーと通信し、さまざまなセンサーデータを同時に収集することができます。IP66定格で防水・防塵性能を持つSensor Hub 4G Data Loggerは、スマート農業、スマート気象ステーション、スマートシティなどの長期間にわたる信頼性の高い屋外アプリケーションに適しています。

さて、あなた自身の気象ステーションをどのように活用しますか？

## アプリケーション

![sensecap one applications](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/SenseCAP-ONE-Applications-1030x379.png)
