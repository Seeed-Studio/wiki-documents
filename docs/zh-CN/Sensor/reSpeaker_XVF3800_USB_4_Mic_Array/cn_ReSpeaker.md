---
description: ReSpeaker by Seeed Studio 是一个开源模块化语音接口平台，用于创建智能语音交互产品。它具有先进的麦克风阵列，支持远场识别、噪声抑制和音频处理算法，即使在嘈杂环境中也能提供清晰的语音捕获。兼容多个平台和语言，提供灵活的开发、开源设计和强大的社区支持。

title: ReSpeaker 介绍
keywords:
- reSpeaker
- Voice AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/respeaker
last_update:
  date: 8/12/2023
  author: Kasun Thushara
---


## 什么是 ReSpeaker？

ReSpeaker 是由 Seeed Studio 开发的开源模块化语音接口平台，专为创客、开发者和企业设计，用于创建智能语音交互产品。它集成了麦克风阵列、音频处理器和各种连接选项，使您能够轻松地为项目添加语音识别和交互功能。

## 产品系列

### ReSpeaker Lite

ReSpeaker Lite 系列是您轻松构建强大、高质量语音项目的入门之选。它采用 XMOS XU316 AI 音频芯片组和精密双麦克风阵列，提供清晰的远场语音捕获（最远 3 米）、先进的噪声抑制和回声消除功能——非常适合语音识别、智能助手和交互设备。选择多个版本以满足您的需求：**ReSpeaker Lite 2-Mic Array Voice Kit** 预焊接了 ESPHome 就绪的 XIAO ESP32S3，可即时设置，或者选择 **ReSpeaker Lite Voice Assistant Kit**，配有亚克力外壳和扬声器，提供完整的即用型解决方案。无论您是创客、开发者还是创新者，ReSpeaker Lite 都能为您提供性能、灵活性和开源自由，让您的语音项目成为现实。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeakerlite.png" alt="pir" width={600} height="auto" /></p>

<div className="table-center">
    <table className="table-nobg">
        <tbody>
            <tr className="table-trnobg">
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html"
                            style={{ marginRight: '150px' }}
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="4">🖱️ 立即购买</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://wiki.seeedstudio.com/cn/reSpeaker_usb_v3/"
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="3">📚 入门指南页面</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

### ReSpeaker XVF3800

ReSpeaker XMOS XVF3800 系列专为需要在嘈杂的真实环境中实现清晰语音捕获的创客、开发者和产品设计师而打造。它采用先进的 XVF3800 AI 音频处理器和精密的 4 麦克风圆形阵列，提供 360° 远场拾音、强大的波束成形以及工业级噪声和回声消除功能，有效距离可达 5 米。选择多样化的选项来适配您的项目——**预焊接 XIAO ESP32S3 的 ReSpeaker XVF3800** 可即时集成 ESPHome 或嵌入式应用，或者选择**ReSpeaker XVF3800 封装式 AI 语音解决方案**获得精致的即用型语音接口。无论是用于智能助手、机器人还是交互式信息亭，XVF3800 系列都能在紧凑、创客友好的外形中提供专业级的语音性能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xvf3800.png" alt="pir" width={600} height="auto" /></p>

<div className="table-center">
    <table className="table-nobg">
        <tbody>
            <tr className="table-trnobg">
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html"
                            style={{ marginRight: '150px' }}
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="4">🖱️ 立即购买</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/"
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="3">📚 入门指南页面</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

### ReSpeaker 2-Mics Pi HAT

ReSpeaker 2-Mics Pi HAT V2.0 将您的 Raspberry Pi 转变为强大的语音启用平台，非常适合构建智能助手、语音控制设备和交互式 AI 项目。配备 TLV320AIC3104 音频编解码器、双模拟麦克风和内置的 VAD、DOA 和 KWS NLU 算法，它提供清晰准确的语音捕获，实现响应式交互。其可编程 RGB LED、用户按钮和简单的即插即用设计使其易于原型制作和定制，无论您是集成 Alexa、Google Assistant 还是自己的语音界面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/hat.png" alt="pir" width={600} height="auto" /></p>

<div className="table-center">
    <table className="table-nobg">
        <tbody>
            <tr className="table-trnobg">
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html"
                            style={{ marginRight: '150px' }}
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="4">🖱️ 立即购买</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://wiki.seeedstudio.com/cn/ReSpeaker_2_Mics_Pi_HAT/"
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="3">📚 入门指南页面</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

### ReSpeaker XVF3000

ReSpeaker XVF3000 USB 麦克风阵列是一个即用型、即插即用的远场语音捕获解决方案，专为即时集成到您的应用程序中而设计——无需裸露的开发板或复杂的设置。它配备 4 麦克风阵列、USB Audio Class 1.0 兼容性和 12 个可编程 RGB LED，非常适合构建智能助手、会议系统和交互式语音项目。内置语音算法包括 VAD、DOA、波束成形、噪声抑制、去混响和声学回声消除，即使在具有挑战性的环境中也能提供清晰的语音拾取。为了获得精致的、可部署的设置，您还可以选择带有时尚保护外壳的版本，使其既适合原型制作也适合生产。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xvf3000.png" alt="pir" width={600} height="auto" /></p>

<div className="table-center">
    <table className="table-nobg">
        <tbody>
            <tr className="table-trnobg">
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://www.seeedstudio.com/ReSpeaker-USB-Mic-Array-p-4247.html"
                            style={{ marginRight: '150px' }}
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="4">🖱️ 立即购买</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
                <td className="table-trnobg">
                    <div className="get_one_now_container" style={{ textAlign: 'center' }}>
                        <a
                            className="get_one_now_item"
                            href="https://wiki.seeedstudio.com/cn/ReSpeaker_Mic_Array_v2.0/#version"
                        >
                            <strong>
                                <span>
                                    <font color="#FFFFFF" size="3">📚 入门指南页面</font>
                                </span>
                            </strong>
                        </a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## 核心特性

**先进的麦克风阵列技术**

采用圆形或线性阵列，配备2-4个MEMS麦克风，支持远场语音识别、声源定位和噪声抑制。即使在嘈杂环境中也能准确捕获5米范围内的语音指令。

**强大的音频处理能力**

内置专业音频处理算法，包括声学回声消除（AEC）、噪声抑制（NS）、语音活动检测（VAD）和波束成形技术，确保清晰的语音信号质量。

**灵活的开发选项**

支持多种开发平台和编程语言，包括Python、JavaScript和C/C++。兼容Raspberry Pi、Arduino和各种Linux开发板，提供完整的SDK和API接口。

**开源生态系统**

完全开源的硬件设计和软件栈，拥有活跃的开发者社区提供持续的技术支持。可自由定制和扩展功能以满足特定应用需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
