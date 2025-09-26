---
title: Wio Lite RISC V GD32VF103 with ESP8266
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Wio_Lite_RISC_V_GD32VF103_with_ESP8266/
slug: /ja/Wio_Lite_RISC_V_GD32VF103_with_ESP8266
last_update:
  date: 05/15/2025
  author: gunengyu
---


<!-- ！[](https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/%E4%BA%A7%E5%93%81%E6%8B%8D%E6%91%84%E6%A8%A1%E6%9D%BF_perspective-09.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/%E4%BA%A7%E5%93%81%E6%8B%8D%E6%91%84%E6%A8%A1%E6%9D%BF_perspective-09.png" alt="pir" width={600} height="auto" /></p>


Wio Lite RISC-Vは、GD32VF103をベースとしたフェザーフォームファクターのRISC-V開発ボードで、オンボードのESP8266 Wio CoreによりWiFi機能も備えています。

GD32VF103CBT6は、Nuclei System Technologyに基づくBumblebeeコアです。RV32IMAC命令セットとECLIC高速割り込み機能をサポートしています。コアの消費電力は従来のCortex-M3のわずか1/3です。

オンボードのESP8266 WiFiコアとLipo充電回路により、IoT制御ボードとして最適です。また、このボードの裏面にはマイクロSDスロットがあり、システムリソースを拡張することができます。

さらに、Wio Liteボードとして、Wio Lite RISC-Vは間違いなく[Grove Shield for Wio Lite](https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html)と連携して動作します。このシールドを使用することで、[200以上のGroveセンサー、アクチュエータ、ディスプレイ](https://www.seeedstudio.com/grove.html)を利用できます。例えば、好きな[Grove OLED](https://www.seeedstudio.com/catalogsearch/result/?cat=&q=grove+OLED)を選んで、視覚的な開発ボードを作成することができます。


<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>



## 特徴

+ RISC-V MCU GD32VF103CBT6
+ ESP8266 WiFi Wio Core
+ フェザーフォームファクター
+ JST2.0 Lipoポート
+ オンボードSDスロット
+ USB Type C

## ハードウェア概要
![](https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/hardware.png)

### 対応プラットフォーム


| PlatformIO                                                                                            | Arduino                                                                                             | Raspberry Pi                                                                                      |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/products/102991310/img/platformio-logo.png) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) |

## はじめに

### PlatformIOで始める

#### ハードウェア

**必要な材料**

+ [Wio Lite RISC-V (GD32VF103) - With ESP8266](https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html)
+ [USB 3.1 Type C to A ケーブル](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A.html)

- **ステップ 1** Wio LiteとPCをUSB Type C to Aケーブルで接続し、電源供給とダウンロード用のシリアルポートを確保します。

#### ソフトウェア

:::note
	RISC-V GD32はすでにArduinoフレームワークを使用したPlatformIO IDEをサポートしていますが、Arduino IDEはまだサポートされていません。
:::
- **ステップ 1** 

PlatformIO IDEをセットアップします。PlatformIO IDEはVisual Studio Codeをベースにしています。
[Visual Studio Code](https://code.visualstudio.com/)をダウンロードしてください。
Visual Studio Codeの左側にある「拡張機能」アイコンをクリックします。

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki1.png)

検索エンジンに「platformIO」と入力してインストールします。

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki2.png)

- **ステップ 2**

PlatformIO IDEを開き、「新しいプロジェクト」をクリックしてプロジェクトを作成します。プロジェクト名を入力し、ボードとしてGD32VF103V-EVAL(Sipeed)を選択します。フレームワークはArduinoを選択し、「完了」をクリックします。

- **ステップ 3**

Arduinoフレームワークのコードを編集し、Visual Studio Codeの下部にあるコンパイルボタンをクリックします。

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki5.png)

- **ステップ 4**

コードはバイナリファイルにコンパイルされます。[DFUツール](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)を使用してバイナリファイルをボードにダウンロードできます。また、DFUファームウェアをインストールして、DFU方式でコードをダウンロードできるようにする必要があります。DFUファームウェアは[DFUツール](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)の同じドキュメントに含まれています。

- **ステップ 5**

Wio Liteのリセットボタンを押し、左側のブートスイッチをオンにすると、DFUツールがボードを認識します。DFUツールフレームウェアをインストールした後、ブートスイッチを右側に切り替え、コンパイルされたバイナリファイルをボードのフラッシュにダウンロードします。「Leave DFU」をクリックしてボードをDFUツールから切断すると、コードが正しくボードに書き込まれます。

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki6.png)

### ウェブサイトを使用してオンボードユーザーLEDを制御するデモ

#### ハードウェア

**必要な材料**

+ [Wio Lite RISC-V (GD32VF103) - With ESP8266](https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html)
+ [UartSBee V5](https://www.seeedstudio.com/UartSBee-V5.html)のような任意のUSB to TTLアダプター
+ [USB 3.1 Type C to A ケーブル](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A.html)

- **ステップ 1** USB to TTLアダプターを使用してWio Liteのシリアルポートに接続します。(Wio LiteのシリアルポートはピンPA9-TX、PA10-RXです)
- **ステップ 2** 別のUSB to TTLアダプターを使用してESP8266のシリアルポートに接続します。(ESP8266のデータ送信を監視したい場合)
- **ステップ 3** Wio LiteとPCをUSB Type C to Aケーブルで接続し、電源供給とダウンロード用のシリアルポートを確保します。

#### ソフトウェアコード

```cpp
#include <Arduino.h>
const bool printReply = true;
const char line[] = "-----\n\r";
int loopCount=0;
 
char html[50];
char command[20];
char reply[500]; // 通常はこのようにしません
 
char ipAddress [20];
char LED[30];
int lenHtml = 0;
char temp[5];
 
void getReply(int wait)
{ 
    int tempPos = 0;
    long int time = millis();
    while( (time + wait) > millis())
    {   
        while(Serial1.available()>0)
        {   
            char c = Serial1.read(); 
            if (tempPos < 500) { reply[tempPos] = c; tempPos++;   }
        }
        reply[tempPos] = 0;
    } 
   
    if (printReply) { Serial.println( reply );  Serial.println(line);     }
}
void setup() 
{
  Serial.begin(115200);  // GD32のシリアルポート
  Serial1.begin(115200);  // ESP8266のシリアルポート
  pinMode(LED_BUILTIN, OUTPUT);
  
  delay(3000);

  Serial1.println("AT+CWQAP");
  getReply(2000);

  Serial1.println("AT+CWMODE=1");
  getReply(2000);

  Serial1.println("AT+CWJAP=\"Your WiFi SSID\",\"Password\""); // 自分のWiFiを追加
  getReply(5000);

  Serial1.print("AT+CIFSR\r\n");
  getReply(2000);
  
   int len = strlen( reply ); 
      bool done=false;
      bool error = false;
      int pos = 0;
      while (!done)
      {
           if ( reply[pos] == 34) { done = true;} 
           pos++;
           if (pos > len) { done = true;  error = true;}
      }
 
      if (!error)
      {
            int buffpos = 0;
            done = false;
            while (!done)
            {
               if ( reply[pos] == 34 ) { done = true; }
               else { ipAddress[buffpos] = reply[pos];    buffpos++; pos++;   }
            }
            ipAddress[buffpos] = 0;
      }
      else { strcpy(ipAddress,"ERROR"); }


      Serial.println(ipAddress);

      Serial1.print("AT+CIPMUX=1\r\n");
      getReply( 1500 );

      Serial1.print("AT+CIPSERVER=1,80\r\n");
      getReply( 1500 );
      
      
}

void loop()
{
          if(Serial1.available()) // ESP8266がデータを送信しているか確認
        {
          // これは+IPDの返信です - 非常に長いです。
          // 通常はメッセージ全体を変数にコピーする必要はありません。「HOST」までコピーするだけで十分です。
          // または、シリアルポートを読み取る際にデータを文字ごとに検索することもできます。
        
          getReply( 2000 );      
 
 
          bool foundIPD = false;
          for (int i=0; i<strlen(reply); i++)
          {
               if (  (reply[i]=='I') && (reply[i+1]=='P') && (reply[i+2]=='D')   ) { foundIPD = true;    }
          }


 
 
          if ( foundIPD  )  
          {
 
              loopCount++;
              // Serial.print( "リクエストがあります。ループ = ");  Serial.println(loopCount); Serial.println(""); 

            bool LEDstate = false;
            int LEDstatepos = 0;
              for (int i=0; i<strlen(reply); i++)
              {
                   if (!LEDstate) // 最初の名前の出現のみ取得
                   {
                         if ( (reply[i]=='L') &&  (reply[i+1]=='E')&&  (reply[i+2]=='D')&&  (reply[i+3]=='=')) 
                         { 
                             LEDstate = true;
                             LEDstatepos = i+4;
                           
                         }
                        
                   }     
              }

                  if (LEDstate)
              {
                    int tempPos = 0;
                    bool finishedCopying = false;
                    for (int i= LEDstatepos; i<strlen(reply); i++)
                    {
                         if ( (reply[i]==' ') && !finishedCopying )  { finishedCopying = true;   } 
                         if ( !finishedCopying )                     { LED[tempPos] = reply[i];   tempPos++; }
                    }              
                    //LED[tempPos] = 0;
              }
 
              if (LEDstate) { Serial.print( "LED状態 = ");  Serial.println(LED); Serial.println("");
                         
              } 
              else          { Serial.println( "形式が不正です");   Serial.println("");           }
              
              Serial.println("111");
              Serial.println(LED);
              Serial.println("000");
                  if(strcmp(LED,"on")==0){digitalWrite(LED_BUILTIN, HIGH); }
                  if(strcmp(LED ,"off")==0){digitalWrite(LED_BUILTIN, LOW); }
            strcpy(html,"<html><head></head><body>");
            strcpy(command,"AT+CIPSEND=0,25\r\n");
            Serial1.print(command);
            getReply(2000);
            Serial1.print(html);
            getReply(2000);


            strcpy(html,"<h1>LEDテスト</h1>");
            strcpy(command,"AT+CIPSEND=0,17\r\n");
            Serial1.print(command); 
            getReply(2000);      
            Serial1.print(html);
            getReply(2000);

            strcpy(html,"<p>LEDステートメント</p>");
            strcpy(command,"AT+CIPSEND=0,19\r\n");
            Serial1.print(command);  
            getReply(2000);     
            Serial1.print(html);
            getReply(2000);


            
                if (LEDstate)
             {
                  // 名前を書き込む
                  strcpy(html,"<p>LED状態は "); strcat(html, LED ); strcat(html,"</p>");
 
                  // cipsendコマンドのためにhtmlの長さが必要
                  lenHtml = strlen( html );
                  strcpy(command,"AT+CIPSEND=0,"); __itoa( lenHtml, temp, 10); strcat(command, temp); strcat(command, "\r\n");
                  Serial1.print(command);
                  getReply( 2000 );          
                  Serial1.print(html);
                  getReply( 2000 );                           
             }
 
 
              strcpy(html,"<form action=\""); strcat(html, ipAddress); strcat(html, "\" method=\"GET\">"); strcat(command, "\r\n");
 
              lenHtml = strlen( html );
              __itoa( lenHtml, temp, 10);
              strcpy(command,"AT+CIPSEND=0,"); 
              __itoa( lenHtml, temp, 10); 
              strcat(command, temp);  
              strcat(command, "\r\n");
 
              Serial1.print(command);
              getReply( 2000 );          
              Serial1.print(html);
              getReply( 2000 );          
 
              strcpy(html,"LED状態:<br><input type=\"text\" name=\"LED\">");
              strcpy(command,"AT+CIPSEND=0,43\r\n");
              Serial1.print(command);
              getReply( 2000 );
              Serial1.print(html);         
              getReply( 2000 );         
 
              strcpy(html,"<input type=\"submit\" value=\"送信\"></form>");
              strcpy(command,"AT+CIPSEND=0,43\r\n");
              Serial1.print(command);
              getReply( 2000 );       
              Serial1.print(html);
              getReply( 2000 );   
   
              
 
            strcpy(html,"</body></html>");
            strcpy(command,"AT+CIPSEND=0,14\r\n");
            Serial1.print(command);
            getReply( 2000 ); 
            Serial1.print(html);
            getReply( 2000 ); 

            Serial1.print( "AT+CIPCLOSE=0\r\n" );
            getReply( 1500 ); 
 
          } // if(espSerial.find("+IPD"))
      } //if(espSerial.available())
 
      for (int i=0; i<3 ;i++)
      {LED[i]=NULL;}
      delay (100);
 
      // 次のリクエストを待つためにここにドロップします。
}

```

- **ステップ 1** 上記のように PlatformIO Arduino フレームワークを作成し、このコードをコピーしてコンパイルします。DFU ツールを使用してボードにダウンロードしてください。

- **ステップ 2** Mobaxterm のようなシリアルアシスタントを使用し、正しいボーレートとシリアルポートを設定します。

- **ステップ 3** リセットボタンを押すと、シリアルアシスタントに「AT コマンド」が表示されます。

- **ステップ 4** 「AT+CIPSERVER=1,80」が表示された後、ESP8266 の IP アドレスをウェブサイトのアドレスとして設定し、開いてください。シリアルが「AT+CIPCLOSE=0」を表示した後、オンボード LED を制御するウェブサイトが表示されます。


![](https://files.seeedstudio.com/products/102991310/img/wiki2.png)


- **ステップ 5** 「on」または「off」と入力して送信すると、オンボードのユーザー LED がオンまたはオフになります。LED の状態がウェブサイトに表示され、オンボード LED がその状態に従います。


![](https://files.seeedstudio.com/products/102991310/img/wiki3.png)



![](https://files.seeedstudio.com/products/102991310/img/wiki4.png)



## リソース

- **[PDF]** [GD32VF103_Datasheet_Rev1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_Datasheet_Rev1.0.pdf)
- **[PDF]** [GD32VF103_User_Manual_EN_V1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_User_Manual_EN_V1.0.pdf)
- **[Zip]** [DFU Tool](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)


## 技術サポート & 製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
