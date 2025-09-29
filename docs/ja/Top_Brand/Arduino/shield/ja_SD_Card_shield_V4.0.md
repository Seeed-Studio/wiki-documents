---
description: SD_Card_shield_V4.0
title: SDカードシールド V4.0

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SD_Card_shield_V4.0
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/SD_Card_Shield-v4.jpg" alt="pir" width={600} height="auto" /></p>

これは新しくリリースされたSDカードシールドV4.0です。Arduinoにストレージスペースを提供します。ユーザーはArduinoの内蔵SDライブラリを使用してSDカードを読み書きできます。SD、SDHC、Micro SDカードをサポートしています。ArduinoのSPIポートのみを占有します。以前のバージョンと比較して、標準SDスロットとMicro SDスロットを標準スロットに統合し、付属のアダプターを使用してMicro SDカードを利用できます。未使用のピンを使用する他のシールドを積み重ねることができます。さらに、事前に形成されたI2CおよびUARTポートにより、Groveモジュールとの接続が容易になります。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/SD-Card-Shield-V4-p-1381.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## アプリケーションアイデア

-----------------

SDカードシールドを使用して素晴らしいプロジェクトを作成したい場合、以下のプロジェクトを参考にしてください。

ここでは、SDカードを使用した[LinkIt ONE](https://www.seeedstudio.com/depot/LinkIt-ONE-p-2017.html)に関するプロジェクトを紹介します。

### LinkIt ONEを使用した音楽プレーヤー

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/555a29dc85f7f.png" alt="pir" width={600} height="auto" /></p>

このプロジェクトでは、Grove - Water Sensorを使用して植物に水をやるためのシンプルで効果的なソリューションを作成します。

[今すぐ作成！](https://www.seeedstudio.com/recipe/246-music-player-with-linkit-one.html)

[***SDカードによるさらに素晴らしいプロジェクト***](https://www.seeedstudio.com/recipe/index.php?query=SD+Card)

特徴
--------

- 標準SDカード、SDHCカード、TFカード対応
- UART Grove & I2C接続対応
- 完全にサポートされたSDライブラリ
- 最小限のSPIポート
- 真に積み重ね可能

仕様
--------------

<table align={"center"} width = {"100%"}>
  <tbody>
  <tr>
    <td><h3>項目</h3></td>
    <td><h3>最小</h3></td>
    <td><h3>標準</h3></td>
    <td><h3>最大</h3></td>
    <td><h3>単位</h3></td>
  </tr>
  <tr>
    <td><h3>電圧</h3></td>
    <td><h4>3.5</h4></td>
    <td><h4>5.0</h4></td>
    <td><h4>5.5</h4></td>
    <td><h4>V</h4></td>
  </tr>
  <tr>
    <td><h3>電流</h3></td>
    <td><h4>0.159</h4></td>
    <td><h4>100</h4></td>
    <td><h4>200</h4></td>
    <td><h4>mA</h4></td>
  </tr>  
  <tr>
    <td><h3>対応カードタイプ</h3></td>
    <td rowspan="3" width = {"60%"}><h4>SDカード（32GB以下）；Micro SDカード（32GB以下）；SDHCカード（32GB以下）</h4></td>
    <td><h4>/</h4></td>
  </tr>
  <tr>
    <td><h4>寸法</h4></td>
    <td rowspan="3" width = {"60%"}><h4>68.7x53.5x19.00</h4></td>
    <td><h4>mm</h4></td>
  </tr>
  <tr>
    <td><h4>正味重量</h4></td>
    <td rowspan="3" width = {"60%"}><h4>14.8</h4></td>
    <td><h4>g</h4></td>
  </tr>
  </tbody></table>

ハードウェア概要
-----------------

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/Interface_FunctionV2.0.png" alt="pir" width={600} height="auto" /></p>

**Arduino上のピン使用（SDカード付き）**

D4: SD_CS;

D11: SD_DI;

D12: SD_DO;

D13: SD_CLK.

:::note
SDカードのフォーマットはFAT16またはFAT32です。16GBを超えるSDカードおよびSDHCカードはサポートされていません。
:::

使用方法
-----

以下はSDカードシールドのインストール手順です。

### ハードウェアインストール

1. SDカードをソケットに挿入し、SDカードシールドをArduinoに接続します。
2. USBケーブルを使用してArduinoをPCに接続します。

:::note
Micro SDカードを使用する場合は、Micro SDカードをアダプターに挿入し、次にMicro SDカードアダプターをソケットに挿入してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/SD_card_adopter.JPG" alt="pir" width={600} height="auto" /></p>

ハードウェアインストールが完了すると、以下のようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/Hardware_connection.JPG" alt="pir" width={600} height="auto" /></p>

### プログラムのアップロード

1. Arduino IDEを再起動します。次のパスを使用して「CardInfo」例を開きます：File --> Examples --> SD --> CardInfo。

    この例では、SDライブラリが基づいているユーティリティライブラリを使用してSDカードに関する情報を取得する方法を示します。カードが動作しているかどうかを確認するのに非常に便利です。このライブラリには「ReadWrite」などの他の例も多数含まれており、試してみることができます。

    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/Open_SD_Card_code.jpg" alt="pir" width={600} height="auto" /></p>

    上記のコードの簡単な説明：

    まず、カードが動作しているかどうかを確認します。動作していない場合、結果に至る可能性のある理由が出力されます。

    SDカードが正常に動作している場合、SDカードのタイプが出力されます。その後、FATタイプのボリュームのタイプとサイズが出力されます。

    最後に、カード上で見つかったファイル情報（名前、日付、バイト単位のサイズ）を取得します。

2. コードをアップロードします。

3. 結果を確認します。シリアルモニターをクリックすると、以下の画像が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/SD_Card_Infor.jpg" alt="pir" width={600} height="auto" /></p>

4. エラーが発生した場合は、すべての前の手順を再確認し、SDカードが動作していることを確認してください。それでも問題が解決しない場合は、SDカードを交換してみてください。

:::note
Arduinoのデフォルトコードは、SDカードが4GBを超える場合にSDサイズを正しく返しません。以下のコードでこの問題を解決できます。
:::

```cpp
    /*
      SDカードテスト

     この例では、SDライブラリが基づいているユーティリティライブラリを使用してSDカードに関する情報を取得する方法を示します。
     カードが動作しているかどうかを確認するのに非常に便利です。

     回路:
      * SDカードを以下のようにSPIバスに接続:
     ** MOSI - Arduino Uno/Duemilanove/Diecimilaのピン11
     ** MISO - Arduino Uno/Duemilanove/Diecimilaのピン12
     ** CLK - Arduino Uno/Duemilanove/Diecimilaのピン13
     ** CS - SDカードシールドまたはモジュールに依存します。
     ** 一貫性を保つためにここではピン4を使用


     作成日: 2011年3月28日
     作成者: Limor Fried
     修正日: 2012年4月9日
     修正者: Tom Igoe
     */
    // SDライブラリをインクルード:
    #include <SPI.h>
    #include <SD.h>

    // SDユーティリティライブラリ関数を使用して変数を設定:
    Sd2Card card;
    SdVolume volume;
    SdFile root;

    // SDシールドまたはモジュールに合わせて変更;
    // Arduino Ethernetシールド: ピン4
    // Adafruit SDシールドとモジュール: ピン10
    // Sparkfun SDシールド: ピン8
    const int chipSelect = 4;

    void setup()
    {
      // シリアル通信を開き、ポートが開くのを待つ:
      Serial.begin(9600);
      while (!Serial) {
        ; // シリアルポートが接続するのを待つ。Leonardoのみ必要
      }


      Serial.print("\nSDカードを初期化中...");
      // Ethernetシールドでは、CSはピン4です。デフォルトで出力として設定されています。
      // CSピンとして使用されていなくても、ハードウェアSSピン
      // (ほとんどのArduinoボードでは10、Megaでは53)は出力として残しておく必要があります。
      // そうしないとSDライブラリ関数が動作しません。
      pinMode(10, OUTPUT);     // Megaではこれを53に変更


      // カードが動作しているかどうかをテストするためにユーティリティライブラリの初期化コードを使用します。
      if (!card.init(SPI_HALF_SPEED, chipSelect)) {
        Serial.println("初期化に失敗しました。確認すべき事項:");
        Serial.println("* カードが挿入されていますか?");
        Serial.println("* 配線は正しいですか?");
        Serial.println("* シールドまたはモジュールに合わせてchipSelectピンを変更しましたか?");
        return;
      } else {
        Serial.println("配線は正しく、カードが存在します。");
      }

      // カードの種類を出力
      Serial.print("\nカードタイプ: ");
      switch (card.type()) {
        case SD_CARD_TYPE_SD1:
          Serial.println("SD1");
          break;
        case SD_CARD_TYPE_SD2:
          Serial.println("SD2");
          break;
        case SD_CARD_TYPE_SDHC:
          Serial.println("SDHC");
          break;
        default:
          Serial.println("不明");
      }

      // 次に、'volume'/'partition'を開こうとします - FAT16またはFAT32である必要があります
      if (!volume.init(card)) {
        Serial.println("FAT16/FAT32パーティションが見つかりません。\nカードをフォーマットしたことを確認してください");
        return;
      }


      // 最初のFATタイプボリュームの種類とサイズを出力

      uint64_t volumesize64;
      uint32_t volumesize32;
      Serial.print("\nボリュームタイプはFAT");
      Serial.println(volume.fatType(), DEC);
      Serial.println();

      volumesize64 = volume.blocksPerCluster();    // クラスターはブロックの集合体
      volumesize64 *= volume.clusterCount();       // 多くのクラスターが存在します
      volumesize64 *= 512;                            // SDカードブロックは常に512バイト

      Serial.print("ボリュームサイズ (バイト): ");
      printLLNumber(volumesize64, DEC);
      Serial.println();

      Serial.print("ボリュームサイズ (キロバイト): ");
      volumesize32 = volumesize64/1024;
      Serial.println(volumesize32);

      Serial.print("ボリュームサイズ (メガバイト): ");
      volumesize32 /= 1024;
      Serial.println(volumesize32);

      Serial.println("\nカード上で見つかったファイル (名前、日付、バイト単位のサイズ): ");
      root.openRoot(volume);

      // カード内のすべてのファイルを日付とサイズとともにリスト
      root.ls(LS_R | LS_DATE | LS_SIZE);
    }


    void loop(void) {

    }
    void printLLNumber(uint64_t n, uint8_t base)
    {
      unsigned char buf[16 * sizeof(long)];
      unsigned int i = 0;

      if (n == 0)
      {
        Serial.print((char)'0');
        return;
      }

      while (n > 0)
      {
        buf[i++] = n % base;
        n /= base;
      }

      for (; i > 0; i--)
        Serial.print((char) (buf[i - 1] < 10 ?
          '0' + buf[i - 1] :
          'A' + buf[i - 1] - 10));
    }
```

## SDカードシールド v4.0 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/PCBA-SD%20Card%20shield%20V4.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## SDカードシールド v4.0a 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/SD_Card_Shield_v4.0a.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## SDカードシールド v4.3 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/SD_Card_Shield_v4.3_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [SDカードシールド v4.0 回路図](https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/SD_Card_Shiled_v4.0.pdf)

- [SDカードシールド v4.0 Eagleファイル.zip](https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/PCBA-SD%20Card%20shield%20V4.0.zip)

- [SDカードシールド v4.0a Eagleファイル.zip](https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/SD_Card_Shield_v4.0a.zip)

- [SDカードシールド v4.3 Eagleファイル.zip](https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/SD_Card_Shield_v4.3_eagle_file.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/SD_Card_shield_V4.0 から作成されました -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>