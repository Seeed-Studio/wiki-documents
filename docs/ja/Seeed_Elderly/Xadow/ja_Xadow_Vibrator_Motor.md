---
description: Xadow - Vibrator Motor
title: Xadow - Vibrator Motor
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Vibrator_Motor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/img/Vibration_Motor_01.jpg)

この小さなバイブレーターモーターは、あなたの携帯電話のように振動することができます。使用する際は、モジュールに電源を供給し、「振動」コマンドを送信するだけです。実際には、「振動」コマンドは制御ピンを高レベルに設定することで、その後動作します。このモジュールが気に入っているのは、操作が成功したかどうかを知らせる短期間のショックを作り出すことができるためです。たとえば、腕を振ってiPhoneの曲を切り替えるような場合です。これはひどく聞こえるかもしれませんが、ブザーとは違います。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Vibration-Motor-p-1517.html)


##  仕様
---
*   動作電圧: 3.3V

*   定格回転数: 9000rpm

*   2つのデジタル信号で制御

*   寸法: 25.43mm x 20.35mm

##  デモンストレーション
---
振動モーターをオンにする方法を示すデモコードを以下に示します。

**ハードウェア設置: **

![](https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/img/XadowVibration.jpg)

注意: Xadow Vibrator MotorをXadow Main Boardに接続する際は、接続方向に注意する必要があります。接続方法は、一方のXadowモジュールの塗りつぶされていない角を、もう一方のモジュールの直角に接続することです（各Xadowモジュールの4つの角を参照してください）。
デモコードは以下のようになります:
```
<pre>
void setup()
{
    DDRF |= 0x01;
    DDRB |= 0x04;
}

void loop()
{
    //turn on the vibration motor
    PORTF |= 0x01;
    PORTB |= 0x04;
    delay(1000);
    //turn off the vibration motor
    PORTF &= ~(0x01);
    PORTB |= 0x04;
    delay(1000);
    //turn on the vibration motor
    PORTF |= 0x01;
    PORTB |= 0x04;
    delay(1000);
    //turn off the vibration motor
    PORTF |= 0x01;
    PORTB &= ~(0x04);
    delay(1000);
    //turn on the vibration motor
    PORTF |= 0x01;
    PORTB |= 0x04;
    delay(1000);
    //turn off the vibration motor
    PORTF &= ~(0x01);
    PORTB &= ~(0x04);
    delay(1000);
}</pre>
```


## オンライン回路図ビューアー

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/res/Xadow_Vibrator.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  リソース
---
[Xadow Vibrator Motor Eagle File](https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/res/Xadow_Vibrator.zip)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験を可能な限りスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに応えるために、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>