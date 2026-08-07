---
description: 为边缘 AI、硬件编程、机器人、物联网数据、HMI 仪表盘、设备运维，以及 SenseCAP MX 或 Hotspot 工作流选择合适的 SenseCraft 产品。
title: SenseCraft 产品与用户指南
hide_title: true
keywords:
  - SenseCraft
  - SenseCraft AI
  - CodeCraft
  - reComputer AI Lab
  - SenseCraft Robotics
  - SenseCraft Data Platform
  - SenseCraft App
  - SenseCraft HMI
  - Device Management Platform
  - SenseCAP MX
  - SenseCAP Hotspot
image: https://sensecraft-statics.seeed.cc/sensecraft-ai/Banner1.650c5596.png
slug: /Cloud
last_update:
  date: 08/06/2026
  author: Jancee
createdAt: '2023-01-05'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/cn/Cloud/
---

<div className="hero hero--primary margin-bottom--xl">
  <div className="container">
    <h1 className="hero__title">找到适合你的 SenseCraft 产品</h1>
    <div className="hero__subtitle">
      从你想要创建、连接、可视化或运维的内容开始。本指南会将每个目标映射到合适的 SenseCraft 产品、平台、下载资源和用户指南。
    </div>
    <div className="margin-top--md">
      <a className="button button--secondary button--lg margin-right--sm margin-bottom--sm" href="#choose-by-goal">
        按目标选择
      </a>
      <a className="button button--outline button--secondary button--lg margin-bottom--sm" href="https://sensecraft.seeed.cc/en/products" target="_blank" rel="noopener noreferrer">
        打开产品目录
      </a>
    </div>
  </div>
</div>

SenseCraft 汇集了用于构建 AI 与硬件应用、训练机器人、连接物联网设备、创建人机界面以及运维已部署边缘系统的软件。这些产品彼此相关，但各自服务于工作流中的不同阶段。

## 按目标选择


| 你的目标 | 从这里开始 |
| --- | --- |
| 创建、训练或部署边缘 AI 应用 | [SenseCraft AI](#sensecraft-ai) |
| 将一个想法变成可运行的硬件代码 | [CodeCraft](#codecraft) |
| 在 reComputer 硬件上运行优化的 AI 模型和工具 | [reComputer AI Lab](#recomputer-ai-lab) |
| 采集演示、训练并验证机械臂行为 | [SenseCraft Robotics](#sensecraft-robotics) |
| 连接物联网设备并采集或查看传感器数据 | [SenseCraft Data Platform](#sensecraft-data-platform) |
| 配置受支持的设备并在手机上监控它们 | [SenseCraft App](#sensecraft-app) |
| 为 reTerminal 创建仪表盘和显示体验 | [SenseCraft HMI](#sensecraft-hmi) |
| 运维分布式边缘设备并发布应用 | [SenseCraft Device Management Platform](#sensecraft-device-management-platform) |
| 为去中心化网络部署或管理 SenseCAP 网关 | [SenseCAP MX / Hotspot](#sensecap-mx-hotspot) |

## 创建 AI 与硬件应用

<div className="row">
  <div className="col col--6 margin-bottom--lg">
    <div className="card card--full-height">
      <div className="card__image">
        <img
          src="https://sensecraft.seeed.cc/assets/new_home/illustrations/sensecraft-ai-preview.png"
          alt="SenseCraft AI vision application preview"
          loading="lazy"
          style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div className="card__body">
        <div className="badge badge--success margin-bottom--sm">Create</div>
        <h3 id="sensecraft-ai">SenseCraft AI</h3>
        <div className="margin-bottom--sm"><strong>创建、分享、探索和部署 AI 应用。</strong></div>
        <div className="margin-bottom--sm">
          使用模型库、零代码训练和应用社区，将一个 AI 想法变成在受支持边缘设备上运行的推理。SenseCraft AI 为 SBC 设备提供 400 多个模型，并支持从社区应用一键部署。
        </div>
        <div className="margin-bottom--sm">
          <a href="https://sensecraft.seeed.cc/ai/model?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_model_library" target="_blank" rel="noopener noreferrer">模型库</a>
          {' · '}
          <a href="https://sensecraft.seeed.cc/ai/training?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_training" target="_blank" rel="noopener noreferrer">训练模型</a>
          {' · '}
          <a href="https://sensecraft.seeed.cc/ai/application?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_app_square" target="_blank" rel="noopener noreferrer">探索应用</a>
        </div>
      </div>
      <div className="card__footer">
        <a className="button button--primary margin-right--sm margin-bottom--sm" href="https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home" target="_blank" rel="noopener noreferrer">打开 SenseCraft AI</a>
        <a className="button button--outline button--secondary margin-bottom--sm" href="/cn/sensecraft-ai/sensecraft-ai-main/">阅读 Wiki 中心</a>
      </div>
    </div>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <div className="card card--full-height">
      <div className="card__image" style={{ background: 'var(--ifm-color-emphasis-100)' }}>
        <img
          src="https://sensecraft.seeed.cc/assets/codecraft.png"
          alt="CodeCraft hardware projects built with Wio Terminal, XIAO, and Grove"
          loading="lazy"
          style={{ width: '100%', height: '220px', objectFit: 'contain', display: 'block', padding: '1rem' }}
        />
      </div>
      <div className="card__body">
        <div className="badge badge--success margin-bottom--sm">Create</div>
        <h3 id="codecraft">CodeCraft</h3>
        <div className="margin-bottom--sm"><strong>一款以硬件为中心的 AI 编码助手，让你的想法在几分钟内变为现实。</strong></div>
        <div className="margin-bottom--sm">
          描述你想要构建的硬件项目，生成其代码，在云端编译，并直接从浏览器烧录。CodeCraft 支持基于 Wio Terminal、XIAO、Grove、Arduino 项目以及基于浏览器的 WebSerial 的实用原型开发和学习工作流。
        </div>
        <div className="margin-bottom--sm">
          <a href="https://codecraft.seeed.cc/workspace?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=codecraft_workspace" target="_blank" rel="noopener noreferrer">打开工作区</a>
          {' · '}
          <a href="https://codecraft.seeed.cc/pricing?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=codecraft_pricing" target="_blank" rel="noopener noreferrer">查看定价</a>
        </div>
      </div>
      <div className="card__footer">
        <a className="button button--primary margin-right--sm margin-bottom--sm" href="https://codecraft.seeed.cc/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=codecraft_home" target="_blank" rel="noopener noreferrer">打开 CodeCraft</a>
        <a className="button button--outline button--secondary margin-bottom--sm" href="/cn/codecraft/codecraft-overview/">阅读用户指南</a>
      </div>
    </div>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <div className="card card--full-height">
      <div className="card__image" style={{ background: 'var(--ifm-color-emphasis-100)' }}>
        <img
          src="https://files.seeedstudio.com/Edge_box/reComputer_Lab.webp"
          alt="reComputer AI Lab edge AI model and developer resource graphic"
          loading="lazy"
          style={{ width: '100%', height: '220px', objectFit: 'contain', display: 'block', padding: '1rem' }}
        />
      </div>
      <div className="card__body">
        <div className="badge badge--info margin-bottom--sm">Develop</div>
        <h3 id="recomputer-ai-lab">reComputer AI Lab</h3>
        <div className="margin-bottom--sm"><strong>为 reComputer 硬件优化的边缘 AI 模型、工具和教程。</strong></div>
        <div className="margin-bottom--sm">
          浏览 100 多个优化的计算机视觉、LLM 和 VLM 模型，然后在基于 NVIDIA Jetson、Rockchip 或 Raspberry Pi 的 reComputer 设备上运行它们。模型附带基准测试和开箱即用的部署命令，并在同一个开发者资源中心提供转换工具、教程和社区项目。
        </div>
        <div className="margin-bottom--sm">
          <a href="https://sensecraft.seeed.cc/ai-lab/models?lang=en&utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=ai_lab_models" target="_blank" rel="noopener noreferrer">浏览模型</a>
          {' · '}
          <a href="https://sensecraft.seeed.cc/ai-lab/tools?lang=en&utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=ai_lab_tools" target="_blank" rel="noopener noreferrer">打开工具</a>
        </div>
      </div>
      <div className="card__footer">
        <a className="button button--primary margin-right--sm margin-bottom--sm" href="https://sensecraft.seeed.cc/ai-lab/?lang=en&utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=ai_lab_home" target="_blank" rel="noopener noreferrer">探索 AI Lab</a>
        <a className="button button--outline button--secondary margin-bottom--sm" href="https://sensecraft.seeed.cc/ai-lab/tutorials?lang=en&utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=ai_lab_docs" target="_blank" rel="noopener noreferrer">浏览教程</a>
      </div>
    </div>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <div className="card card--full-height">
      <div className="card__image" style={{ background: 'var(--ifm-color-emphasis-100)' }}>
        <img
          src="https://sensecraft.seeed.cc/assets/rearm-landing/media/adv-overview.svg"
          alt="SenseCraft Robotics illustration of a robotic arm, conveyor, and operator"
          loading="lazy"
          style={{ width: '100%', height: '220px', objectFit: 'contain', display: 'block', padding: '0.75rem' }}
        />
      </div>
      <div className="card__body">
        <div className="badge badge--info margin-bottom--sm">Develop</div>
        <h3 id="sensecraft-robotics">SenseCraft Robotics</h3>
        <div className="margin-bottom--sm"><strong>一套开箱即用的机械臂训练平台。</strong></div>
        <div className="margin-bottom--sm">
          遵循一个连贯的工作流完成校准、演示数据采集、云端训练和验证。它专为教育和实验室、机器人研发概念验证以及无需高端本地训练机器的早期集成验证而设计。
        </div>
      </div>
      <div className="card__footer">
        <a className="button button--primary margin-right--sm margin-bottom--sm" href="https://sensecraft.seeed.cc/en/robotics?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_robotics_home" target="_blank" rel="noopener noreferrer">探索机器人</a>
        <a className="button button--outline button--secondary margin-bottom--sm" href="https://sensecraft.seeed.cc/en/download?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_robotics_download" target="_blank" rel="noopener noreferrer">下载应用</a>
      </div>
    </div>
  </div>
</div>

## 连接、可视化与运维

<div className="row">
  <div className="col col--6 margin-bottom--lg">
    <div className="card card--full-height">
      <div className="card__image" style={{ height: '220px', display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '0.5rem', alignItems: 'center', padding: '1rem', background: 'var(--ifm-color-emphasis-100)' }}>
        <img src="https://sensecraft.seeed.cc/assets/new_home/illustrations/iot-2.svg" alt="SenseCAP gateway and antenna" loading="lazy" style={{ width: '100%', maxHeight: '150px', objectFit: 'contain' }} />
        <img src="https://sensecraft.seeed.cc/assets/new_home/illustrations/iot-3.svg" alt="SenseCAP wireless field sensor" loading="lazy" style={{ width: '100%', maxHeight: '150px', objectFit: 'contain' }} />
        <img src="https://sensecraft.seeed.cc/assets/new_home/illustrations/iot-6.svg" alt="SenseCAP weather station" loading="lazy" style={{ width: '100%', maxHeight: '150px', objectFit: 'contain' }} />
        <img src="https://sensecraft.seeed.cc/assets/new_home/illustrations/iot-group.svg" alt="SenseCAP all-in-one environmental sensor" loading="lazy" style={{ width: '100%', maxHeight: '150px', objectFit: 'contain' }} />
      </div>
      <div className="card__body">
        <div className="badge badge--primary margin-bottom--sm">连接</div>
        <h3 id="sensecraft-data-platform">SenseCraft 数据平台</h3>
        <div className="margin-bottom--sm"><strong>一个用于 IoT 设备和数据管理的平台。</strong></div>
        <div className="margin-bottom--sm">
          配对支持的网关和传感器，收集数据，并在一个云平台中检查设备状态和遥测信息。它作为 SenseCAP 设备和常见 IoT 工作流的数据枢纽，支持 LoRaWAN、MQTT、Wi‑Fi、气象和环境感知。
        </div>
      </div>
      <div className="card__footer">
        <a className="button button--primary margin-right--sm margin-bottom--sm" href="https://sensecap.seeed.cc/portal/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_data_portal" target="_blank" rel="noopener noreferrer">打开数据平台</a>
        <a className="button button--outline button--secondary margin-bottom--sm" href="/cn/cloud/sensecraft-data/sensecraft-data-platform/overview/">阅读快速入门</a>
      </div>
    </div>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <div className="card card--full-height">
      <div className="card__image" style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--ifm-color-emphasis-100)' }}>
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e5/56/bb/e556bba0-f994-8931-b3ce-f00ed16d2cad/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg"
          alt="SenseCraft mobile app icon"
          loading="lazy"
          style={{ width: '132px', height: '132px', borderRadius: '28px', boxShadow: 'var(--ifm-global-shadow-md)' }}
        />
      </div>
      <div className="card__body">
        <div className="badge badge--primary margin-bottom--sm">连接</div>
        <h3 id="sensecraft-app">SenseCraft App</h3>
        <div className="margin-bottom--sm"><strong>一个在 iOS 和 Android 上用于 IoT 设备管理和 AI 配置的移动枢纽。</strong></div>
        <div className="margin-bottom--sm">
          使用该应用添加支持的设备，监控其数据和状态，更改可用设置，查看事件，并执行支持的蓝牙配置或升级。将此应用用于通用 SenseCAP 设备和数据工作流；它与 SenseCAP Hotspot App 相互独立。
        </div>
      </div>
      <div className="card__footer">
        <a className="button button--primary margin-right--sm margin-bottom--sm" href="https://sensecraft.seeed.cc/en/download" target="_blank" rel="noopener noreferrer">打开下载中心</a>
        <a className="button button--outline button--secondary margin-bottom--sm" href="/cn/sensecraft-app/overview/">阅读 App 指南</a>
      </div>
    </div>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <div className="card card--full-height">
      <div className="card__image">
        <img
          src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/23.png"
          alt="SenseCraft HMI website showing dashboard and display scenarios"
          loading="lazy"
          style={{ width: '100%', height: '220px', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
        />
      </div>
      <div className="card__body">
        <div className="badge badge--primary margin-bottom--sm">可视化</div>
        <h3 id="sensecraft-hmi">SenseCraft HMI</h3>
        <div className="margin-bottom--sm"><strong>为 reTerminal 创建或探索仪表盘设计。</strong></div>
        <div className="margin-bottom--sm">
          从仪表盘模板开始，或在画布上设计自己的显示界面，然后管理并将结果推送到支持的 reTerminal 设备。SenseCraft HMI 适用于信息展示、控制界面以及数据密集型设备体验。
        </div>
        <div className="margin-bottom--sm">
          <a href="https://sensecraft.seeed.cc/hmi/workspace/page?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_hmi_canvas" target="_blank" rel="noopener noreferrer">在画布上设计</a>
        </div>
      </div>
      <div className="card__footer">
        <a className="button button--primary margin-right--sm margin-bottom--sm" href="https://sensecraft.seeed.cc/hmi/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_hmi_home" target="_blank" rel="noopener noreferrer">打开 SenseCraft HMI</a>
        <a className="button button--outline button--secondary margin-bottom--sm" href="/cn/sensecraft_hmi_overview/">阅读 HMI 概览</a>
      </div>
    </div>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <div className="card card--full-height">
      <div className="card__image" style={{ background: 'var(--ifm-color-emphasis-100)' }}>
        <img
          src="https://sensecraft.seeed.cc/assets/new_home/illustrations/fleet-scene.svg"
          alt="A managed group of edge devices representing SenseCraft device operations"
          loading="lazy"
          style={{ width: '100%', height: '220px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
      </div>
      <div className="card__body">
        <div className="badge badge--warning margin-bottom--sm">运维</div>
        <h3 id="sensecraft-device-management-platform">SenseCraft 设备管理平台</h3>
        <div className="margin-bottom--sm"><strong>管理分布式边缘设备，并从一个控制平面下发应用、模型和更新。</strong></div>
        <div className="margin-bottom--sm">
          在部署后使用该平台监控支持的边缘节点，应用一致的运行时策略，并在多台设备上管理应用生命周期。它支持主流边缘硬件，包括 NVIDIA Jetson、Rockchip、Raspberry Pi 和 x86 边缘 PC。
        </div>
        <div className="margin-bottom--sm">
          <a href="https://seeed-fleet.com/apps?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_fleet_apps" target="_blank" rel="noopener noreferrer">浏览可用应用</a>
        </div>
      </div>
      <div className="card__footer">
        <a className="button button--primary margin-right--sm margin-bottom--sm" href="https://seeed-fleet.com?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_fleet_home" target="_blank" rel="noopener noreferrer">打开设备管理</a>
        <a className="button button--outline button--secondary margin-bottom--sm" href="https://seeed-fleet.com/docs?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_fleet_quick_start" target="_blank" rel="noopener noreferrer">阅读快速入门</a>
      </div>
    </div>
  </div>
</div>

## SenseCAP MX 和 Hotspot 产品

<div className="row">
  <div className="col col--12 margin-bottom--lg">
    <div className="card card--full-height">
      <div className="row row--no-gutters">
        <div className="col col--4">
          <div className="card__image" style={{ minHeight: '260px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--ifm-color-emphasis-100)' }}>
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7b/08/e7/7b08e7ab-70d4-186f-61b6-294c7ba96ae0/SenseCAP-AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg"
              alt="SenseCAP Hotspot mobile app icon"
              loading="lazy"
              style={{ width: '144px', height: '144px', borderRadius: '30px', boxShadow: 'var(--ifm-global-shadow-md)' }}
            />
          </div>
        </div>
        <div className="col col--8">
          <div className="card__body">
            <div className="badge badge--secondary margin-bottom--sm">DePIN</div>
            <h3 id="sensecap-mx-hotspot">SenseCAP MX / 热点</h3>
            <div className="margin-bottom--sm"><strong>适用于 Helium、Flux、Mysterium 和 Weather XM 网络的网关与管理工具。</strong></div>
            <div className="margin-bottom--sm">
              探索 SenseCAP MX 网关产品、文档以及受支持的去中心化网络工作流的服务状态。使用独立的 SenseCAP Hotspot App 来部署和管理受支持的 SenseCAP 网关和热点设备；不要将其与通用的 SenseCraft App 混淆。
            </div>
          </div>
          <div className="card__footer">
            <a className="button button--primary margin-right--sm margin-bottom--sm" href="https://www.sensecapmx.com/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecap_mx_home" target="_blank" rel="noopener noreferrer">探索 SenseCAP MX</a>
            <a className="button button--outline button--secondary margin-right--sm margin-bottom--sm" href="https://www.sensecapmx.com/docs/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecap_mx_docs" target="_blank" rel="noopener noreferrer">阅读 MX 文档</a>
            <a className="button button--outline button--secondary margin-bottom--sm" href="/cn/sensecraft-blockchain/sensecraft-hotspot-app/sensecap_hotspot_app/">阅读热点指南</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

:::info 产品边界

- **reComputer AI Lab** 是当前以 reComputer 为核心的模型、工具、教程和项目资源中心的官方名称。
- **SenseCraft Device Management Platform** 是用于管理已部署边缘设备和应用的运营层；先从一个具体的应用或解决方案入手，然后使用设备管理在规模化场景下进行运营。
- **SenseCraft App** 和 **SenseCAP Hotspot App** 是不同的移动产品。对受支持的 IoT 设备和数据工作流使用 SenseCraft App，对受支持的网关和热点工作流使用 SenseCAP Hotspot App。

:::

## 下载、文档与支持

- [打开 SenseCraft 产品目录](https://sensecraft.seeed.cc/en/products)
- [打开 SenseCraft 下载中心](https://sensecraft.seeed.cc/en/download)
- [浏览 SenseCraft 社区论坛](https://forum.seeedstudio.com/c/sensecraft)
- [联系 SenseCraft 团队](https://sensecraft.seeed.cc/en/products#contact)
