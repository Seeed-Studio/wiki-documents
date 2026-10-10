---
description: "Seeed 具身智能入门课程第二阶段：机械臂组装与基础控制第 5 章 — CAN 总线与电机通信：学习完本节后，需要能够理解以下几个问题："
title: 第 5 章 - CAN 总线与电机通信
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_5
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_5/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 2 阶段 · 第 5 章 · 理论</span>
    <h2>5. CAN 总线与电机通信</h2>
    <p>
      学习完本节后，需要能够理解以下几个问题：
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## CAN 总线与电机通信

学习完本节后，需要能够理解以下几个问题：

- CAN 总线上一条数据是如何发送出去的；
- CAN 数据帧由哪些部分组成；
- CAN ID、DLC、Data 分别表示什么；
- 标准帧与扩展帧有什么区别；
- CRC、ACK 等字段有什么作用。

对于实际开发来说，不需要一开始就记住 CAN 帧中的每一个 bit。

**入门阶段最重要的是先理解：ID、DLC、Data。**

## Can 基本原理

CAN 是 Controller Area Network 的缩写，是 ISO国际标准化的串行通信协议。CAN总线网络的结构有闭环和开环两种形式。

一般机械臂或者机器人的CAN总线网络结构使用的闭环结构的CAN总线网络，也就是总线两端各连接一个120欧的电阻，两根信号线形成回路。这种CAN总线网络由ISO 11898标准定义，是高速、短距离的CAN网络，通信速率为125kbit/s到1Mbit/s。在1Mbit/s通讯速率时，总线长度最长达40m。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-5cn/ch05-01cn.jpg" alt="" />
</div>

总线由两根信号线CAN_L和CAN_H组成。CAN传输的是差分信号，通过两根信号线的电压差，也就是CAN_H-CAN_L来表示总线电平。对应于逻辑1的称为隐性电平，对应于逻辑0称为显性电平。在ISO11898中，隐性电平在电压差0附近，显性电平主要在电压差2V附近。

## Can 协议

| 帧类型 | 帧用途 |
|-|-|
| 数据帧 | 发送数据 |
| 遥控帧 | 请求数据 |
| 错误帧 | 报告总线错误 |
| 过载帧 | 请求延迟 |
| 帧间隔 | 分隔连续帧 |

<callout emoji="📣">
由于DM电机用的是CAN 2.0标准数据帧，RS电机都用的是CAN 2.0拓展数据帧格式，下面只介绍这两种数据帧格式。建议将下面的介绍对照着电机的数据手册中的协议部分来看。
</callout>

## reBot DM标准数据帧（共11字节）

<table><colgroup><col/><col/><col/><col/><col/><col/><col/></colgroup><tbody><tr><td colspan="2" rowspan="2" vertical-align="middle"><b>字节</b></td><td colspan="5" vertical-align="top">位</td></tr><tr><td vertical-align="top">7</td><td vertical-align="top">6</td><td vertical-align="top">5</td><td vertical-align="top">4</td><td vertical-align="top">3－0</td></tr><tr><td vertical-align="top">字节1</td><td vertical-align="top">帧信息</td><td vertical-align="top">FF</td><td vertical-align="top">RTR</td><td vertical-align="top">X</td><td vertical-align="top">X</td><td vertical-align="top">DLC</td></tr><tr><td vertical-align="top">字节2</td><td vertical-align="top">帧ID1</td><td colspan="5" vertical-align="top">ID10－ID3</td></tr><tr><td vertical-align="top">字节3</td><td vertical-align="top">帧ID2</td><td colspan="2" vertical-align="top">ID2－ID0</td><td vertical-align="top">X</td><td vertical-align="top">X</td><td vertical-align="top">X</td></tr><tr><td vertical-align="top">字节4</td><td vertical-align="top">数据1</td><td colspan="5" vertical-align="top">DATA1</td></tr><tr><td vertical-align="top">字节5</td><td vertical-align="top">数据2</td><td colspan="5" vertical-align="top">DATA2</td></tr><tr><td vertical-align="top">字节6</td><td vertical-align="top">数据3</td><td colspan="5" vertical-align="top">DATA3</td></tr><tr><td vertical-align="top">字节7</td><td vertical-align="top">数据4</td><td colspan="5" vertical-align="top">DATA4</td></tr><tr><td vertical-align="top">字节8</td><td vertical-align="top">数据5</td><td colspan="5" vertical-align="top">DATA5</td></tr><tr><td vertical-align="top">字节9</td><td vertical-align="top">数据6</td><td colspan="5" vertical-align="top">DATA6</td></tr><tr><td vertical-align="top">字节10</td><td vertical-align="top">数据7</td><td colspan="5" vertical-align="top">DATA7</td></tr><tr><td vertical-align="top">字节11</td><td vertical-align="top">数据8</td><td colspan="5" vertical-align="top">DATA8</td></tr></tbody></table>

- 帧描述部分（前3字节）

**字节1为帧信息。**第7位（FF）表示帧格式，在标准帧中FF为0，第6位（RTR）表示帧的类型，RTR=0表示为数据帧，RTR=1表示为远程帧。DLC表示在数据帧时实际的数据长度。

**字节2到字节3是帧id。**其中标准数据帧的 ID 有 11 个位。从 ID10 到 ID0 依次发送，可以出现2^11种报文，帧ID的范围是：000-7FF，禁止高 7 位都为隐性（禁止设定：ID=1111111XXXX）。

- 帧数据部分（后8字节）

**字节4\－11为数据帧的实际数据。**

## reBot RS拓展数据帧（13字节）

<table><colgroup><col/><col/><col/><col/><col/><col/><col/><col/></colgroup><tbody><tr><td colspan="2" rowspan="2" vertical-align="middle"><b>字节</b></td><td colspan="5" vertical-align="top">位</td><td vertical-align="top"></td></tr><tr><td vertical-align="top">7</td><td vertical-align="top">6</td><td vertical-align="top">5</td><td vertical-align="top">4</td><td vertical-align="top">3</td><td vertical-align="top">2－0</td></tr><tr><td vertical-align="top">字节1</td><td vertical-align="top">帧信息</td><td vertical-align="top">FF</td><td vertical-align="top">RTR</td><td vertical-align="top">X</td><td vertical-align="top">X</td><td colspan="2" vertical-align="top">DLC</td></tr><tr><td vertical-align="top">字节2</td><td vertical-align="top">帧ID1</td><td colspan="6" vertical-align="top">ID28－ID21</td></tr><tr><td vertical-align="top">字节3</td><td vertical-align="top">帧ID2</td><td colspan="6" vertical-align="top">ID20－ID13</td></tr><tr><td vertical-align="top">字节4</td><td vertical-align="top">帧ID3</td><td colspan="6" vertical-align="top">ID12－ID5</td></tr><tr><td vertical-align="top">字节5</td><td vertical-align="top">帧ID4</td><td colspan="5" vertical-align="top">ID4－ID0</td><td vertical-align="top">x</td></tr><tr><td vertical-align="top">字节6</td><td vertical-align="top">数据1</td><td colspan="6" vertical-align="top">DATA1</td></tr><tr><td vertical-align="top">字节7</td><td vertical-align="top">数据2</td><td colspan="6" vertical-align="top">DATA2</td></tr><tr><td vertical-align="top">字节8</td><td vertical-align="top">数据3</td><td colspan="6" vertical-align="top">DATA3</td></tr><tr><td vertical-align="top">字节9</td><td vertical-align="top">数据4</td><td colspan="6" vertical-align="top">DATA4</td></tr><tr><td vertical-align="top">字节10</td><td vertical-align="top">数据5</td><td colspan="6" vertical-align="top">DATA5</td></tr><tr><td vertical-align="top">字节11</td><td vertical-align="top">数据6</td><td colspan="6" vertical-align="top">DATA6</td></tr><tr><td vertical-align="top">字节12</td><td vertical-align="top">数据7</td><td colspan="6" vertical-align="top">DATA7</td></tr><tr><td vertical-align="top">字节13</td><td vertical-align="top">数据8</td><td colspan="6" vertical-align="top">DATA8</td></tr></tbody></table>

- 帧描述部分（前5字节）**字节1为帧信息。**第7位（FF）表示帧格式，在扩展帧中FF为1，第6位（RTR）表示帧的类型，RTR=0表示为数据帧，RTR=1表示为远程帧。DLC表示在数据帧时实际的数据长度。**字节2到字节5是帧id。**扩展格式的 ID 有 29 个位，基本 ID 从 ID28 到 ID18，扩展 ID 由 ID17 到 ID0 表示。基本 ID 和 标准格式的 ID 相同，可以出现2^29种报文，且在数据链路上是有间隙的（对操作者透明），帧ID的范围是0000 0000-1FFF FFFF，禁止高 7 位都为隐性（禁止设定：基本 ID=1111111XXXX）。
- 帧数据部分（后8字节）**字节6\－13为数据帧的实际数据**

## CAN 数据链路层

可以把 CAN 总线理解成一个“多人群聊”。总线上连接了很多设备，例如：

- 主控制器；
- 电机；
- 传感器；
- 电池管理系统；
- 其他控制模块。

所有设备共用同一条 CAN 总线。当某个设备想发送数据时，不能直接随意发送，而是必须按照 CAN 协议规定的格式，把数据包装成一条完整的 **CAN 数据帧**。

可以把一条 CAN 帧简单理解成：

**开始发送 → 消息编号 → 数据长度 → 实际数据 → 数据检查 → 接收确认 → 发送结束**

对应的 CAN 帧结构可以简化为：

**SOF → ID → 控制字段 → DLC → Data → CRC → ACK → EOF**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-5cn/ch05-02cn.jpg" alt="" />
</div>

具体解释见下图：

<table><colgroup><col/><col/></colgroup><tbody><tr><td vertical-align="top">名称</td><td vertical-align="top">作用</td></tr><tr><td vertical-align="top">空闲段（bus idel）</td><td vertical-align="top">总线为隐性电平 1，所有节点都不操作总线，当没有设备发送数据时，CAN 总线处于空闲状态。当前没有设备讲话，大家都在等待。</td></tr><tr><td vertical-align="top">帧起始段（SOF）</td><td vertical-align="top">SOF 固定为一个显性位 <code>0</code>，由于 CAN 总线空闲时为 <code>1</code>，当总线上突然出现 <code>0</code> 时，其他设备就知道：有设备开始发送数据了。因此 SOF 可以理解成：<b>“我要开始发送了。”</b></td></tr><tr><td vertical-align="top">仲裁段（帧ID、RTR或SRR）</td><td vertical-align="top">ID：可以把它理解成：这条消息的编号。<br/>例如可以在电机控制中通过<code>0x01</code>：1号电机控制命令；<code>0x02</code>：2号电机控制命令等等；<b>ID更准确地表示“消息的身份或类型”。ID 数值越小，优先级越高。</b><br/>RTR：它主要用于区分：普通数据帧RTR=0和远程请求帧RTR=1。<b>日常发送普通 CAN 数据时，RTR 一般为 0。</b><br/>SRR：扩展帧专用的仲裁位，固定为 1。主要用于保证相同基础 ID 下，标准帧优先于扩展帧。</td></tr><tr><td vertical-align="top">控制段（IDE、保留位、DLC）</td><td vertical-align="top">IDE位用于区分标准桢还是扩展桢，<b>IDE = 1</b> 扩展帧，29 bit ID。<b>IDE = 0</b> 标准帧 11 bit ID。扩展帧的 ID 范围更大，可以提供更多的消息编号<br/>DLC：告诉接收方有多少数据。例如：<ul><li>DLC = 1，表示有 1 Byte 数据<b>8 bit</b>；</li><li>DLC = 4，表示有 4 Byte 数据<b>32 bit</b>；</li><li>DLC = 8，表示有 8 Byte 数据<b>64 bit</b>。</li></ul></td></tr><tr><td vertical-align="top">Data Field 数据段</td><td vertical-align="top">就是真正的数据内容，长度与 DLC 对应，例如，主控制器要向电机发送：目标位置；目标速度；目标力矩。<b>查看设备厂家提供的 CAN 通信协议，确认每个字节分别代表什么。</b></td></tr><tr><td vertical-align="top">CRC段</td><td vertical-align="top">CAN 数据的“检查码”。对所有的数据位进行 CRC 计算，包括帧起始、仲裁段、控制段、数据段，<b>检查 CAN 数据在传输过程中是否出现错误。</b>其中CRC 界定符必须是隐性电平。</td></tr><tr><td vertical-align="top">ACK段</td><td vertical-align="top">ACK——告诉发送方“我收到了”，发送方发送完毕后，释放总线，隐性电平 1，接收方若接收正确需要在此位回复显性电平 0，此时发送方读取 ACK 槽为 0，则表示收到 ACK。其中ACK界定符是接收方释放电平，为隐性电平。</td></tr><tr><td vertical-align="top">帧结束段（EOF，<b>End Of Frame</b>）</td><td vertical-align="top">当前这一条 CAN 数据发送结束。7 个隐性 1</td></tr></tbody></table>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-5cn/ch05-03cn.jpg" alt="" />
</div>

## SocketCAN

SocketCAN是CAN协议在Linux系统上的一种主流的实现方式，SocketCAN使用套接字API 、Linux网络栈技术，将CAN设备驱动程序实现为网络接口，使其有着易用、兼容性好等特点。

详细的用法的参考文档：https://docs.linuxkernel.org.cn/networking/can.html

</div>
