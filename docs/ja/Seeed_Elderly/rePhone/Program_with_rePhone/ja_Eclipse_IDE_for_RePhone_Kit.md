---
description: Eclipse IDE for RePhone Kit
title: Eclipse IDE for RePhone Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Eclipse_IDE_for_RePhone_Kit
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhoneは、興味深いプロジェクトを始めるための学習ツールとなることができます。現在、RePhoneはさまざまな開発環境と開発言語をサポートしており、Eclipse IDEやArduino IDEを使用してC/C++でアプリケーションを構築したり、LuaやJavaScriptで開発することができます。

このWikiは、Eclipse IDEを使用してRePhoneプロジェクトを開始するためのユーザーガイドです。

| 製品バージョン | 注文 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [RePhone core 2G-Atmel32u4 v1.0](https://wiki.seeedstudio.com/ja/RePhone_core_2G-Atmel32u4/)| [購入する](https://www.seeedstudio.com/RePhone-core-2G-Atmel32u4-v1-0-p-2779.html)| 
|[RePhone core 2G-AtmelSAMD21](https://wiki.seeedstudio.com/ja/Rephone_core_2G-AtmelSAMD21/)|[購入する](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html)|

## Eclipse IDE for RePhoneのダウンロード
---
RePhone用のArduino IDEをダウンロードする前に、以下の条件を満たしたPCを用意してください：

*   オペレーションシステム: Microsoft Windows XP、Vista、7または8

*   Eclipse IDE: Indigo (3.7) with CDT 8.0.2.

以下のアイコンをクリックして、公式EclipseウェブサイトからEclipse IDE for C/C++ Developersをダウンロードしてインストールしてください。IDEのインストールには、適切なJAVA SE Development Kit 8がPCにインストールされている必要があります。

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide-02.png)](http://www.eclipse.org/downloads/packages/eclipse-ide-cc-developers-includes-incubating-components/indigosr2)

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/JSE-03.png)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

## Eclipseプラグインのインストール: LinkIt Assist 2502 SDK 2.0.46
---
RePhoneとEclipse IDEを利用するには、**LinkIt Assist 2502 EclipseプラグインをEclipse IDEと同じフォルダにインストールする必要があります**（‘_eclipse.exe_’がある場所）。

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Linkit_assist_sdk_2.0.46-04.png)](http://download.labs.mediatek.com/MediaTek_LinkIt_Assist_2502_SDK_2_0_46.zip)

LinkIt Assist 2502 SDK 2.0.46をインストールするには、以下の手順を実行してください：

**ステップ1.** **LinkIt Assist 2502 SDK 2.0.46** zipファイルをダウンロードします。

**ステップ2.** LinkIt Assist 2502 SDK 2.0.46 zipファイルの内容を解凍します。SDKにはEclipseプラグイン以外にもツールが含まれているため、内容を恒久的な場所に解凍することを検討してください。一時的な場所に解凍した場合、インストーラーは恒久的な場所に移動するオプションを提供します。

**ステップ3.** Eclipse IDEが実行されていないことを確認します。

**ステップ4.** LinkIt Assist 2502 SDK 2.0.46インストーラー‘**InstallPlugins.exe**’を実行します。以下の図を参照してください：

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_1.png)

**ステップ5.** ウェルカムページで‘**Next**’をクリックします。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_2.png)

**ステップ6.** Eclipse IDEの場所を選択するよう求められます。‘**Browse**’をクリックして、Eclipse IDEをインストールしたフォルダ（‘**Eclipse IDE for C/C++ Developer**’をインストールした指定フォルダ）を探します。‘**OK**’をクリックして‘**Next**’をクリックします。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_3.png)

**ステップ7.** SDKを恒久的な場所に移動する場合、一時的な場所にzipファイルを解凍した場合は‘**Move LinkIt Assist 2502 2.0 package to new folder**’をチェックします。‘**Browse**’をクリックしてSDKを保存する恒久的な場所を選択します。その後‘**Next**’をクリックして次のステップに進みます。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_4.png)

**ステップ8.** SDKのインストール準備画面で、選択した場所が正しいか確認し、‘**Install**’をクリックします。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_5.png)

**ステップ9.** インストールの最後のステップで、初めてLinkIt SDKをインストールする場合は‘**Install the MediaTek USB Driver**’をチェックし、‘**Finish**’をクリックしてインストールを完了します。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_6.png)

**ステップ10.** プラグインのインストールが完了すると、Eclipse IDEをインストールした場所に‘**LINKIT_ASSIST_SDK**’という名前のフォルダが作成されます。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_77.png)

Eclipseウィンドウを開いて"**eclipse.exe**"を実行すると、プラグインが表示されます。以下のセクション "**Create Your First Project: Hello World**" の**ステップ8**を参照してください。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Plug-ins.png)

## ファームウェアの更新/フラッシュ
---
**注意: ファームウェアをフラッシュすると、RePhone に保存されているすべての設定やファイル（画像、音楽など）が削除されます。フラッシュ/更新を行う前に、この点を十分に理解していることを確認してください。**

RePhone に興奮して、すぐにプログラミングを始めたい気持ちはわかりますが、その前に、コアモジュールである Xadow GSM+BLE のファームウェアが、インストールした LinkIt Assist SDK に対応していることを確認する必要があります。

ここでは、RePhone のファームウェアを更新/フラッシュする2つの方法を紹介します。

#### **LinkIt Assist SDK の内蔵ファームウェアアップデーターを使用する方法**

* * *

**ステップ 1.** まず、Xadow GSM+BLE が PC から切断されていることを確認し、GitHub から **最新の RePhone SDK** をダウンロードして解凍します。

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Download_RePhone_SDK.png)](https://github.com/WayenWeng/RePhone_SDK_Bin_Update//)

**ステップ 2.** インストールした SDK フォルダ内の **‘FirmwareUpdater.exe’** を起動します。このファイルは、_’eclipse\LINKIT_ASSIST_SDK\tools\FirmwareUpdater\FirmwareUpdater.exe’_ のパスにあります。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Linkit_firmwareupdater_000.png)

**ステップ 3.** LinkIt Firmware Updater ウィンドウで、プラットフォームとしてプルダウンリストから **‘Others’** を選択します。その後、_**...\SEEED02A_DEMO_PCB01_gprs_MT2502_S00.MAUI_11CW1418SP5_W15_29.bin\SEEED02A_DEMO_BB.cfg**_ を指定します。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update.png)

**ステップ 4.** **緑色の更新ボタン**をクリックし、画面上の2つの手順に従います。この際、Xadow GSM+BLE が **バッテリーに接続されている（電源が入っている）** 状態で PC に接続してください。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update_2.png)

**ステップ 5.** ダウンロードが完了するまで待ちます。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update_3.png)

**ステップ 6.** ファームウェアの更新が完了すると、Download Complete ページで確認されます。「**OK**」をクリックしてアップデーターを終了します。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update_4.png)

## 最初のプロジェクトを作成する: Hello World
---
**ステップ 1.** もう少しです！ **eclipse.exe** を起動します。Eclipse IDE を初めて使用する場合、Eclipse プロジェクト用の **Workspace** を選択するよう求められます。Workspace Launcher で **Browse** をクリックし、適切な場所を Workspace として選択します。Eclipse IDE をインストールした場所と同じ場所を Workspace に設定することをお勧めします。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_1.png)

**ステップ 2.** 新しい RePhone アプリケーションを作成するには、Eclipse の **File** メニューで **new** を選択し、**Other** をクリックします。または、**CTRL+N** のショートカットキーを使用することもできます。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_2.jpg)

**ステップ 3.** 新しいウィンドウで、**LinkIt Assist 2502 SDK 2.0** フォルダを展開し、**Application(*.vxp)** を選択します。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_3.png)

**ステップ 4.** 次に、**LinkIt Assist 2502 SDK 2.0 Wizard** に進みます。

*   新しいプロジェクトの名前を入力します。この例では "**hello_world**" と名付けます。

*   **Hardware Platform** のプルダウンメニューで **LinkIt Assist 2502** を選択します。

*   **Empty Application** をチェックします。

*   **Finish** をクリックしてセットアップを完了します。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_4.png)

**ステップ 5.** おめでとうございます！ XD 最初のプロジェクトが作成されました！ C/C++ Projects ペインからプロジェクトを開き、"**hello_world.c**" ファイルをダブルクリックします。以下のように表示されます。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_5.png)

**ステップ 6.** アプリケーションをアップロードする前に、以下を行う必要があります。

*   RePhone を起動するために、**バッテリーを Xadow GSM+BLE のバッテリーソケットに接続**し、電源キー（PWR）を2秒間押し続けて **電源を入れます**（LED インジケーターが **緑色** に点灯します）。

*   次に、Micro USB ケーブルを使用して RePhone を PC に接続します。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

**ステップ 7.** **デバイスマネージャー** を開いて COM ポートを確認します。2つの **COM ポート** が表示されます（PC によって COM 番号は異なる場合があります）。

*   **MTK USB Debug Port(COM4)** はログ用（シリアルモニターでメッセージを表示するなど）に使用されます。

*   **MTK USB Modem Port(COM5)** はコードのアップロードに使用されます。

**デバイスマネージャー** を開くには、**スタート** ボタンをクリックし、**コントロールパネル** をクリックし、**システムとセキュリティ** をクリックしてから、**システム** の下にある **デバイスマネージャー** をクリックします。管理者パスワードや確認を求められた場合は、パスワードを入力するか確認を行います。以下の画像を参照してください。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Check_ports.png)

**ステップ 8.** もう少しです！ "**hello_world.c**" に以下のコードを入力します：
```c
#include "vmsystem.h"
#include "vmtype.h"
#include "vmlog.h"
#include "vmtimer.h"
#include "ResID.h"
#include "hello_world.h"

VM_TIMER_ID_PRECISE sys_timer_id = 0;

void sys_timer_callback(VM_TIMER_ID_PRECISE sys_timer_id, void* user_data)
{
    vm_log_info("Hello World!");
}

void handle_sysevt(VMINT message, VMINT param)
{
    switch (message)
    {
        case VM_EVENT_CREATE:

        sys_timer_id = vm_timer_create_non_precise(1000, sys_timer_callback, NULL);
        break;
        case VM_EVENT_PAINT:
        break;
        case VM_EVENT_QUIT:
        break;
    }
}

void vm_main(void)
{
    vm_pmng_register_system_event_callback(handle_sysevt);
}
```

*   以下の画像の指示に従って、**Build Application** をクリックしてアプリケーションをアップロードします。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_6.png)

*   アプリケーションが正常にアップロードされると、下部の**コンソール**に報告されます。表示されない場合は、_**Window/Show View/Console**_ で再度開いてください。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_7.png)

**ステップ 9.** _LinkIt Assist Plug-in_ で **モニター** を開きます。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_8.png)

**データベースパスの設定**を求められる場合があります。そうでない場合は、**Config** メニューを開き、**Set Database Path** をクリックしてください。

*   下の画像に示されている "**...**" アイコンをクリックします。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_9.png)

*   "_**eclipse\LINKIT_ASSIST_SDK\tools\FirmwareUpdater\firmware\LinkIt_Device\LinkIt_Assist_2502\W15.19.p2\database.db**_" に移動し、**Open** をクリックします。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_10.png)

*   また、**COMポート**を **MTK USB Debug Port(COM4)** に設定し、**ボーレート**はデフォルト値の **115200** にします。

デバッグポートのCOM番号はPCによって異なる場合がありますが、**デバイスマネージャー**に表示されている **MTK USB Debug Port** を確認してください。

ウィンドウが表示されない場合は、**Config** メニューを開き、**Configure RS232...** をクリックしてください。

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_11.png)

**ステップ 10.** 素晴らしい仕事をしました！ さあ、「Hello」と世界に挨拶しましょう！

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_12.png)

##  デフォルト設定にリセットする
---
**デフォルト設定にリセットすると、RePhone内のすべての設定やファイル（画像、音楽など）が削除されますので、リセットする前に十分注意してください。**

RePhoneを**デフォルト設定**にリセットするには：

1. 「ファームウェアの更新/フラッシュ」セクションの指示に従ってファームウェアをフラッシュします。

2. RePhone_Create_Kit_VXPファイルをダウンロードします。

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/RePhone_Kit_Create_VXP.png)](https://github.com/WayenWeng/RePhone_Create_Kit_VXP/)

<!-- 3. [RePhone Mass Storage Mode](/ja/Xadow_GSMPlusBLE#Operating_Mode) に入ります -->

4. 「RePhone Create Kit VXP」という名前のファイル内のすべてをRePhoneの5MBマスストレージにコピーします。

5. RePhoneを再起動すれば完了です。リセットによってすべてのファイルが削除されるため、着信音として使用するためにmp3ファイルをマスストレージに追加する必要があります。

##  RePhoneコミュニティ
---
[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

私たちは、支援者（RePhoneユーザー）が集まり、温かく快適に会話をしたり、RePhoneについて議論したり、技術的な問題を共有したり、アイデアやプロジェクトを共有したり、将来のモジュール開発に関するフィードバックを提供したりするためのより良い場所を探してきました。そして、ここにRePhoneコミュニティがあります。

今すぐ [RePhoneコミュニティ](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4) に参加しましょう！

一緒に答えを探し、面白いものを作り、お互いを気遣い、経験を共有しましょう。

## LinkIt Assist SDKについての詳細
---
RePhoneは主にLinkIt Assist SDKを使用して開発されており、Mediatekは開発者向けに非常に詳細な開発者ガイドを提供しています。さらに詳しい情報を知りたい場合は、以下を参照してください：

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Developer_guide_en-06.png)](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/res/MediaTek_LinkIt_Assist_2502_Developers_Guide_v1_1.pdf)

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Developer_guide_cn-07_1.png)](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/res/MediaTek_LinkIt_Assist_2502_cn_v1_1.pdf)

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>