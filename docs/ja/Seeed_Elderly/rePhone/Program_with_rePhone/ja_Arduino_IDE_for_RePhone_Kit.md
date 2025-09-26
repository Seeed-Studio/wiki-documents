---
description: RePhone Kit 用 Arduino IDE
title: RePhone Kit 用 Arduino IDE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Arduino_IDE_for_RePhone_Kit
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhone は、興味深いプロジェクトを始めるための学習ツールとなります。現在、RePhone はさまざまな開発環境と開発言語をサポートしており、Eclipse IDE や Arduino IDE を使用して C/C++ でアプリケーションを構築したり、Lua や JavaScript を使用して構築することができます。

この Wiki は、Arduino IDE を使用して RePhone プロジェクトを始めるためのユーザーガイドです。

| 製品バージョン | 注文 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [RePhone core 2G-Atmel32u4 v1.0](https://wiki.seeedstudio.com/ja/RePhone_core_2G-Atmel32u4/)| [今すぐ購入](https://www.seeedstudio.com/RePhone-core-2G-Atmel32u4-v1-0-p-2779.html)| 
|[RePhone core 2G-AtmelSAMD21](https://wiki.seeedstudio.com/ja/Rephone_core_2G-AtmelSAMD21/)|[今すぐ購入](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html)|

Arduino IDE for RePhone のダウンロード
--------------------------------

RePhone 用の Arduino IDE をダウンロードする前に、以下のオペレーティングシステムを使用していることを確認してください：

**Windows XP/Vista/7/8/8.1**

RePhone 用の Arduino IDE は GitHub に公開されています。最適化や改善のために「プルリクエスト」を送信していただけると幸いです。

以前に Arduino IDE を使用したことがある場合、これは簡単な作業となるでしょう。Arduino に慣れていない場合でも、指示に従うだけで簡単かつ迅速に Arduino IDE を始めることができます。

以下をクリックしてください：

[![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Download_Arduino_IDE_for_RePhone.png)](https://github.com/Seeed-Studio/Arduino_IDE_for_RePhone)

GitHub ページで、**Download ZIP** をクリックしてファイルをダウンロードします。以下の画像のように表示されます：

![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Click_to_download_Arduino_IDE_for_RePhone.png)

ダウンロードが完了したら、適切な場所にファイルを解凍してください。

ドライバのインストール
------------------

### Windows 8 / 8.1 でのドライバ署名の強制を無効化

Windows 8/8.1 を使用している場合、ドライバをインストールする前に **ドライバ署名の強制** を無効化する必要があります。

**「ドライバ署名の強制」を無効化する前に、編集中のファイルを保存してください。操作中にシステムがシャットダウンされます。**

以下の手順に従って「ドライバ署名の強制」を無効化してください：

1. 「Windows キー」 + 「R」を押します。
2. `shutdown.exe /r /o /f /t 00` を入力します。
3. 「OK」ボタンをクリックします。
4. システムが「オプションの選択」画面に再起動します。
5. 「オプションの選択」画面で「トラブルシューティング」を選択します。
6. 「トラブルシューティング」画面で「詳細オプション」を選択します。
7. 「詳細オプション」画面で「Windows スタートアップ設定」を選択します。
8. 「再起動」ボタンをクリックします。
9. システムが「詳細ブートオプション」画面に再起動します。
10. 「ドライバ署名の強制を無効化」を選択します。
11. システムが起動したら、Windows と同じ手順で Arduino ドライバをインストールできます。

### 通常のドライバインストール

1. まず、**バッテリーを接続**するか、**外部電源（3.3 ～ 4.2V（SIMなし）/3.5 ～ 4.2V（SIMあり））** を Xadow GSM+BLE のバッテリーソケットに接続して RePhone を起動します。**電源キー（PWR）を 2 秒間押し続けて** **電源を入れます**（LED インジケータが **緑色** を示します）。その後、Micro USB ケーブルで RePhone を PC に接続します。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

2. **デバイスマネージャー**を開きます。「スタート」ボタンをクリックし、「コントロールパネル」をクリックし、「システムとセキュリティ」をクリックし、その後「システム」の下にある「デバイスマネージャー」をクリックします。管理者パスワードや確認を求められた場合は、パスワードを入力するか確認を行います。
デバイスマネージャーでは、以下のように不明なデバイスが表示されます：

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Unknown_Devices.png)

3. 不明なデバイスの1つを右クリックし、**ドライバーソフトウェアの更新**を選択します。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Update_Driver_Software.png)

4. **コンピューターを参照してドライバーソフトウェアを検索**を選択します。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Browse_my_computer_for_driver_software.png)

5. **参照**をクリックし、解凍した Arduino IDE for RePhone のフォルダ .. \\Arduino_IDE_for_RePhone\\drivers\\mtk を指定します。「次へ」をクリックしてドライバのインストールを開始します。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Locate_Driver.png)

6. ドライバソフトウェアが正常にインストールされると、以下のような**完了**ページが表示されます。「閉じる」をクリックし、**手順 1 から 6 を繰り返して別の不明なデバイスのドライバをインストールしてください**。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_complete_page.png)

### ドライバを手動でインストール

ドライバを手動でインストールすることもできます：

1. 「**コンピューター上のドライバーソフトウェアを参照**」ウィンドウで、「**コンピューター上のデバイスドライバーの一覧から選択**」をクリックします。

2. 次に「**ポート(COM&LPT)**」をクリックし、「**次へ**」を選択します。

3. 「**ディスク使用**」をクリックします。

4. その後、

-- **<big>Windows Vista 64bit</big>** を使用している場合、"**Arduino_IDE_for_RePhone-master\\drivers\\mtk\\Vista\\usb2ser_Vista64.inf\\**" を指定します。

-- **<big>Windows 7 以降の 64bit</big>** を使用している場合、"**Arduino_IDE_for_RePhone-master\\drivers\\mtk\\Win7\\usb2ser_Win764.inf**" を指定します。

### LinkIt Assist 2502 SDK 2.0.46 を使用したドライバのインストール

LinkIt Assist 2502 SDK 2.0.46 には、ドライバーインストールプログラムも含まれています。

[![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Linkit_assist_sdk_2.0.46-04.png)](http://download.labs.mediatek.com/MediaTek_LinkIt_Assist_2502_SDK_2_0_46.zip)

次に、ドライバーインストーラーを以下のパスで見つけてください：  
**"MediaTek_LinkIt_Assist_2502_SDK_2_0_46\\LINKIT_ASSIST_SDK\\Driver\\InstallMTKUSBCOMPortDriver.exe"**

ファームウェアの更新/フラッシュ
-------------------------

<div class="admonition note">
<p class="admonition-title">注意</p>
ファームウェアをフラッシュすると、RePhone に保存されているすべての設定やファイル（画像、音楽など）が削除されます。ファームウェアをフラッシュ/更新する前にデータのバックアップを取ってください。
</div>

RePhone 用の Arduino IDE を使用するには、ファームウェアを更新/フラッシュする必要があります。プロセスは以下のように簡単です：

1. **RePhone を PC から切断**し、**電源キー（PWR）を 2 秒間押し続けて電源をオフにします**（LED インジケーターが**赤**になり、その後消灯します）。

2. パス ***...Arduino_IDE_for_RePhone\\hardware\\tools\\mtk\\FirmwareUpdater.exe*** にある **FirmwareUpdater.exe** を開きます。Firmware Updater のプラットフォームが "**RePhone**" であることを確認してください。以下のように表示されていない場合は、"**Others**" をクリックし、パス ***...Arduino_IDE_for_RePhone\\hardware\\tools\\mtk\\firmware\\LinkIt_Device\\RePhone\\W15.19.p2-uart\\SEEED02A_DEMO_BB.cfg*** を指定して、**Download（緑のボタン）** をクリックします。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware.png)

3. 次に、USB ケーブルを使用して RePhone を PC に接続するよう求められます。RePhone が**オフ**になっていることを確認し、同時に機能するバッテリーが常に接続されている必要があります（電源が入っている状態）。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware_pluginrephone.png)

4. ダウンロードが完了するまで待ちます。これには約 1 分かかる場合があり、50% の状態でしばらく止まることがありますので、**辛抱強くお待ちください**。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware_downloading.png)

5. **Complete** ページで **OK** をクリックしてファームウェアの更新を完了します。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware_complete.png)

デフォルト設定へのリセット
-----------------

<div class="admonition note">
<p class="admonition-title">注意</p>
RePhone をデフォルトにリセットすると、RePhone に保存されているすべての設定やファイル（画像、音楽など）が削除されます。デフォルトにリセットする前にデータのバックアップを取ってください。
</div>

RePhone を**デフォルト**にリセットするには：

1. 「ファームウェアの更新/フラッシュ」セクションの手順に従ってファームウェアをフラッシュします。

2. RePhone_Create_Kit_VXP ファイルをダウンロードします。

    [![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/RePhone_Kit_Create_VXP.png)](https://github.com/WayenWeng/RePhone_Create_Kit_VXP/)

<!-- 3. [RePhone Mass Storage Mode](/ja/Xadow_GSMPlusBLE#Mass_Storage_Mode) に入ります -->

4. "RePhone Create Kit VXP" という名前のファイル内のすべてを RePhone の 5MB マスストレージにコピーします。

5. RePhone を再起動すれば完了です。リセットによりすべてのファイルが削除されているため、着信音として使用するために mp3 ファイルをマスストレージに追加する必要があります。

デモ：Hello World
-------------------

これで必要な準備が整いましたので、RePhone を使って作業を始めましょう。

まずは簡単なプログラム **Hello World** を試してみましょう。

1. 電源キー（PWR）を 2 秒間押し続けて電源をオンにします（LED インジケーターが緑色に点灯します）。

2. Arduino IDE for RePhone を解凍したフォルダ内の **Arduino_IDE_for_RePhone.exe** を開きます。ソフトウェアのインターフェースは以下のようになります：

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_interface.png)

3. **デバイスマネージャー**を開いて COM ポートを確認します。**2 つの COM ポート**が表示されます：

    -   MTK USB Debug Port はコードのアップロードに使用されます。
    -   MTK USB Modem Port はログ用で、**Serial.println()** を使用してシリアルモニターにメッセージを表示します。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_COM_Ports.png)

4. Arduino IDE ウィンドウで **ツール => ポート** をクリックし、**MTK USB Debug Port** を選択します。この場合は **COM20** ですが、PC によって COM 番号は異なる場合があります。Debug Port に対応していることを確認してください。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Debug_Port.png)

5. Arduino IDE ウィンドウで **ツール => ボード** をクリックし、**RePhone** を選択します。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Board.png)

6. 次のコードを Arduino IDE にコピーします：

        ```
        // hello world for test RePhone
        // loovee@10-18-2015
        
        void setup() {
            Serial.begin(115200);
        }
         
        void loop() {
            // put your main code here, to run repeatedly:
            Serial.println("Hello World, Hello RePhone!");
            delay(100);
        }
        ```

7. **アップロード**ボタンを押してコードを RePhone にアップロードします。コードが正常にアップロードされると、**Done uploading** と表示されます。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_upload.png)

8. RePhone はソフトウェアのアップロードとログ用に異なる COM ポートを使用するため、ログを読み取るには選択した COM ポートを **MTK USB Modem Port** に切り替える必要があります。Arduino IDE ウィンドウで **ツール => ポート** をクリックし、**MTK USB Modem Port** を選択します。この場合は **COM48** です。

    次に **シリアルモニター** を開きます。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Serial_Monitor.png)

9. **Serial.println()** で出力した **Hello World** を確認できます。

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Helloworld.png)

その他のサンプルコード
-----------------

さらに興味深いプロジェクトに進む場合は、いくつかのサンプルコードを試してみるのが良いスタートです。

1. **スケッチブックの場所**を**設定**で次のように設定してください：  
   ***Arduino_IDE_for_RePhone-master\\hardware\\arduino\\mtk***  
   （Arduino IDE for RePhone をインストールした場所）

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_Sketchlocation_1.png)

    その後、***Arduino_IDE_for_RePhone.exe*** を再起動すると、サンプルコードが表示されるようになります。  
    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_Sketchlocation_2.png)

2. また、すべての RePhone モジュール用の Arduino サンプルコードを以下のパスで手動で見つけることもできます：  
   ***Arduino_IDE_for_RePhone-master\\hardware\\arduino\\mtk\\libraries***

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Example_code_Arduino_IDE.png)

RePhone コミュニティ
-----------------

[![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

私たちは、RePhone ユーザー（支援者）が集まり、温かく快適に会話を楽しみ、RePhone に関する技術的な問題を議論し、アイデアやプロジェクトを共有し、将来のモジュール開発に関するフィードバックを提供できる場所を探してきました。そして、ここに「RePhone コミュニティ」が誕生しました。

今すぐ [RePhone コミュニティ](https://community.seeedstudio.com/discover.html?t=RePhone) に参加しましょう！

一緒に答えを探し、面白いものを作り、お互いを気遣い、経験を共有しましょう。

その他
----

ここまで素晴らしい仕事をしてきましたね！RePhone は、さまざまな機能と特長を持つモジュールの大家族とともに提供されています。モジュールに関する詳細なアプリケーションについては、Wiki をチェックしてください！

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit から作成されました -->

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>