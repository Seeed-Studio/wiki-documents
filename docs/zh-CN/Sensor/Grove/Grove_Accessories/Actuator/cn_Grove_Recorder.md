---
title: Grove - 录音模块
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove_Recorder/
slug: /cn/Grove_Recorder
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Grove-Recoder.jpg)

Grove - 录音模块基于 ISD1820P 芯片，可录制 8-20 秒的音频。它提供真正的单芯片语音录制功能，并具有非易失性存储。通过更改模块 PCB 上的采样电阻（R6），可以调整录音时间。默认情况下，板载电阻值为 100KΩ，因此模块默认录音时间为 10 秒。音频录制可以通过板载按钮直接控制，也可以通过微控制器（如 Seeeduino）控制。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Recorder-p-1825.html)

## 特性

---

* 低功耗

* 非易失性存储

* 用户友好的操作

* 更换单个电阻即可更改录音时长和采样频率

* 添加电阻可设置播放循环模式

* 配备并连接一个 8Ω/2W 的迷你扬声器（如图所示）

* 使用标准 4 针 Grove 电缆连接到其他 Grove 模块或微控制器（如 Seeeduino）

## 接口功能

---
![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Recorder_Bottom1.jpg)
![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Recorder_Top1.jpg)

<dl>
  <dt>① LED 指示灯</dt>
  <dd>
    模式：
    <dl>
      <dd>录音：红色 LED 灯从录音开始到结束始终亮起。</dd>
      <dd>播放：红色 LED 闪烁表示音频播放结束。</dd>
    </dl>
  </dd>
</dl>
<dl><dt>② 采样电阻</dt><dd>您可以通过更改采样电阻（R6）设置录音时长和采样率，参考下表：</dd></dl>
<table  cellspacing="0" width="50%">
<tr>
<th scope="col"> ROSC</th>
<th scope="col"> 时长</th>
<th scope="col"> 采样频率</th>
<th scope="col"> 输入带宽</th>
</tr>
<tr>
<th scope="row"> 80 KΩ</th>
<td> 8 秒</td>
<td> 8.0 KHz</td>
<td> 3.4 KHz</td>
</tr>
<tr>
<th scope="row"> 100 KΩ（默认）</th>
<td> 10 秒</td>
<td> 6.4 KHz</td>
<td> 2.6 KHz</td>
</tr>
<tr>
<th scope="row"> 120 KΩ</th>
<td> 12 秒</td>
<td> 5.3 KHz</td>
<td> 2.3 KHz</td>
</tr>
<tr>
<th scope="row"> 160 KΩ</th>
<td> 16 秒</td>
<td> 4.0 KHz</td>
<td> 1.7 KHz</td>
</tr>
<tr>
<th scope="row"> 200 KΩ</th>
<td> 20 秒</td>
<td> 3.2 KHz</td>
<td> 1.3 KHz</td>
</tr>
</table>
<dl>
  <dt>③ 播放电阻</dt>
  <dd>
    模式：
    <dl>
      <dd>循环：R8 放置 0Ω 电阻</dd>
      <dd>单次：R8 未放置电阻</dd>
    </dl>
  </dd>
</dl>
<dl><dt>④ 播放键</dt><dd>当前未使用</dd></dl>
<dl><dt>⑤ 录音键</dt><dd></dd></dl>
<dl><dt>⑥ Grove 接口</dt><dd></dd></dl>
<dl><dt>⑦ 扬声器接口</dt><dd></dd></dl>
<dl><dt>⑧ 录音芯片：ISD1820P</dt><dd></dd></dl>

## 使用方法

---
按照以下步骤使用 **Grove - 录音模块** 构建一个示例电路：

1. 将录音模块连接到 Grove 电路的输出端（电源模块右侧）。在电路的输入端，您可以使用 [Grove - 按钮](/cn/Grove-Button "Grove - 按钮") 或 [Grove - 滑动电位器](/cn/Grove-Slide_Potentiometer "Grove - 滑动电位器") 模块。
2. 给电路供电。

3. 按住录音模块上的 REC 按钮开始录音。板载红色 LED 将亮起。继续录音，直到红色 LED 熄灭。LED 熄灭表示录音时间已结束。

4. 要播放录制的音频片段，请按住 [Grove - 按钮](/cn/Grove-Button "Grove - 按钮")。您现在应该可以听到录制的音频片段。继续按住 [Grove - 按钮](/cn/Grove-Button "Grove - 按钮")，直到看到录音模块上的红色 LED 闪烁。闪烁表示音频播放已完成。如果您使用的是 [Grove - 滑动电位器](/cn/Grove-Slide_Potentiometer "Grove - 滑动电位器")，只需将滑块从 GND 移动到 VCC 位置即可随时播放。

5. 要覆盖录制的音频，只需重复上述第 3 步。新录制的消息将覆盖旧消息。

以下是使用 Grove - USB 电源模块构建的 Grove 电路示例图：

![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/REC_Grove-Recoder.JPG)

![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Play_Grove-Recoder.JPG)

如果您没有 Grove - USB 电源模块，请改用 Grove - DC 插孔电源模块。

## 可用性

---
此 Grove 模块可作为以下 Grove 套件系列的一部分使用：

<!-- * [Grove Mixer Pack V2](/cn/Grove-Mixer_Pack_V2 "GROVE MIXER PACK V2") -->

或者，也可以在 Seeed Studio Bazaar 单独购买。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove-Recorder_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [Grove - Recorder v1.0 原理图 (Eagle 文件)](https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove-Recorder_v1.0.zip)

* [Grove - Recorder v1.0 原理图 (pdf)](https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove-Recorder_v1.0.pdf)

* [ISD1820P 数据手册 (中文)](https://files.seeedstudio.com/wiki/Grove_Recorder/res/ISD1820P.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时能够获得顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>