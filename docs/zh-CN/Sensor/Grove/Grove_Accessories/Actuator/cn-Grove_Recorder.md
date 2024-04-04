---
title: Grove - 录音机
description: Grove - 录音机
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove_Recorder/
slug: /cn/Grove_Recorder
last_update:
  date: 03/18/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Grove-Recoder.jpg)

Grove - Recorder基于ISD1820P芯片，可以录制8-20秒的音频。它提供了真正的单芯片语音录制功能，并提供了非易失性存储。录音时间可以通过更改模块PCB上的采样电阻（R6）来变化。默认情况下，板上电阻的值为100KΩ，因此模块提供的默认录音时间为10秒。音频录制可以通过板上的按钮直接控制，也可以通过微控制器（如Seeeduino）进行控制。https://www.seeedstudio.com/Grove-Recorder-p-1825.html)

## 特征

---

* 低功耗

* 非易失性存储

* 人性化操作

* 更换单个电阻器以更改记录持续时间和采样频率

* 添加一个电阻器以设置播放周期模式

* 随附并连接到 8Ω/2W 迷你扬声器（如图所示）
* 使用标准 4 针 Grove 电缆连接到其他 Grove 模块或微控制器，例如 Seeeduino

## 接口功能

---
![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Recorder_Bottom1.jpg)
![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Recorder_Top1.jpg)

<dl><dt>① LED指示灯
</dt><dd>模式:
<dl><dd>录制: 红色 LED 灯从录制持续时间开始到结束一直亮起。
</dd><dd>播放: 红色 LED 闪烁表示音频播放结束。
</dd></dl>
</dd></dl>
<dl><dt>② 采样电阻
</dt><dd>您可以根据下表通过更改采样电阻 （R6） 来设置录制持续时间和采样率:
</dd></dl>
<table  cellspacing="0" width="50%">
<tr>
<th scope="col"> ROSC
</th>
<th scope="col"> 期间
</th>
<th scope="col"> 采样频率
</th>
<th scope="col"> 输入带宽
</th></tr>
<tr>
<th scope="row"> 80 KΩ
</th>
<td> 8 秒
</td>
<td> 8.0 KHz
</td>
<td> 3.4 KHz
</td></tr>
<tr>
<th scope="row"> 100 KΩ (默认)
</th>
<td> 10 秒
</td>
<td> 6.4 KHz
</td>
<td> 2.6 KHz
</td></tr>
<tr>
<th scope="row"> 120 KΩ
</th>
<td> 12 秒
</td>
<td> 5.3 KHz
</td>
<td> 2.3 KHz
</td></tr>
<tr>
<th scope="row"> 160 KΩ
</th>
<td> 16 秒
</td>
<td> 4.0 KHz
</td>
<td> 1.7 KHz
</td></tr>
<tr>
<th scope="row"> 200 KΩ
</th>
<td> 20 秒
</td>
<td> 3.2 KHz
</td>
<td> 1.3 KHz
</td></tr>
</table>
<dl><dt>③ 播放电阻
</dt><dd>模式:
<dl><dd>循环: R8放置0Ω电阻
</dd><dd>单次: R8不放置电阻
</dd></dl>
</dd></dl>
<dl><dt>④ 播放键
</dt><dd>当前未使用
</dd><dt>⑤ 录音键
</dt><dt>⑥ Grove接口
</dt><dt>⑦ 扬声器接口
</dt><dt>⑧ 录音IC：ISD1820P
</dt></dl>


## 用法

---
按照以下步骤使用 **Grove - Recorder** 模块构建示例电路：

1. 将录音机模块连接到 Grove 电路的输出侧（电源模块右侧）。在电路的输入侧，您可以使用 [Grove - Button](/Grove-Button "Grove - Button")或 [Grove - Slide Potentiometer](/Grove-Slide_Potentiometer "Grove - Slide Potentiometer") 模块。
2. 给电路通电。

3. 按住录音机模块上的 REC 按钮并开始录制音频。板载红色 LED 将亮起。 继续录制音频，直到红色 LED 熄灭。LED 熄灭表示录制时间现已结束。

4. 要播放已录制的音频片段，请按下并持续按住 [Grove - Button](/Grove-Button "Grove - Button")。现在您应该能够听到录制的音频片段正在播放。继续按下并持续按住[Grove - Button](/Grove-Button "Grove - Button") ，直到看到录音模块板上的红色LED灯闪烁。闪烁表示音频播放现已完成。如果您使用的是[Grove - Button](/Grove-Button "Grove - Button")，而不是[Grove - Slide Potentiometer](/Grove-Slide_Potentiometer "Grove - Slide Potentiometer")，则只需将滑块从GND移动到VCC位置，即可随时听到播放内容。

5. 要覆盖已录制的音频，只需重复上述步骤3。新的消息将覆盖旧的消息。

以下是使用Grove - USB Power模块构建的Grove电路的示意图：

![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/REC_Grove-Recoder.JPG)

![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Play_Grove-Recoder.JPG)

如果您没有Grove - USB Power模块，可以使用Grove - DC Jack Power模块作为替代。

## 可用性

---
这个Grove模块可作为以下Grove套件系列的一部分提供

<!-- * [Grove Mixer Pack V2](/Grove-Mixer_Pack_V2 "GROVE MIXER PACK V2") -->

此外，您也可以在Seeed Studio Bazaar单独购买此模块。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove-Recorder_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [Grove - Recorder v1.0 原理图 (Eagle 文件)](https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove-Recorder_v1.0.zip)

* [Grove - Recorder v1.0 原理图 (pdf格式)](https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove-Recorder_v1.0.pdf)

* [ISD1820P数据手册.pdf (中文)](https://files.seeedstudio.com/wiki/Grove_Recorder/res/ISD1820P.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您在使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足您不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
