---
description: ....
title: reBot Arm Jetson Bundle
tags:
  - reBot Arm 
  - reComputer Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /rebot_arm_jetson_bundle
sku: 100060965 | E26041401
last_update:
  date: 05/18/2026
  author: Youjiang
createdAt: '2026-05-18'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_jetson_bundle/
---

# Introdução ao reBot Arm B601 × NVIDIA Jetson

## Introdução

Uma plataforma de desenvolvimento de IA incorporada tudo-em-um para a nova era da IA Física.
À medida que a IA generativa evolui de simplesmente “entender o mundo” para “interagir com o mundo” ativamente, o desenvolvimento em robótica está entrando em uma nova era: IA Física.
Para ajudar desenvolvedores, pesquisadores e educadores a acelerar sua jornada em IA incorporada, a Seeed Studio combina o reBot Arm B601 totalmente open source com o avançado NVIDIA Jetson Developer Kit para criar um poderoso bundle de desenvolvimento de robótica de próxima geração.

Este bundle oferece não apenas capacidades precisas de manipulação robótica, mas também o enorme poder de computação de IA necessário para executar modelos de IA multimodal, modelos visão-linguagem (VLMs) e inferência robótica em tempo real localmente na borda.
É uma plataforma completa para construir a próxima onda de robôs inteligentes — desde aprendizado e pesquisa até prototipagem rápida e implantação.

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reBot Arm B601 </th>
        <th> NVIDIA® Jetson AGX Thor™ Developer Kit </th>
        <th> reComputer Classic J3011 </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110147.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Início Rápido </font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://docs.nvidia.com/jetson/agx-thor-devkit/user-guide/latest/quick_start.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Início Rápido </font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/reComputer_J30_40_with_Jetson_getting_start/">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Início Rápido </font></span></strong>
                </a>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

:::danger
Aqui, usamos o NVIDIA Jetson Thor como exemplo para demonstrar como controlar rapidamente o braço robótico reBot Arm B601 com o Jetson. Você também pode escolher outros dispositivos Jetson com base em suas necessidades específicas.
:::

## Por que este bundle?

Uma plataforma completa de desenvolvimento de IA incorporada

O desenvolvimento tradicional em robótica geralmente apresenta várias limitações:

1. Ecossistemas de hardware fechados
2. Poder de computação de IA insuficiente
3. Pilhas de software fragmentadas
4. Altas barreiras de desenvolvimento
5. Dificuldade em validar cenários reais de IA Física

O reBot Arm × Jetson Bundle foi projetado para resolver esses desafios.

Com este bundle, você obtém:

1. Uma plataforma de braço robótico 6+1 DoF totalmente open source
2. A principal plataforma de computação de IA de borda da NVIDIA, alimentada por GPU
3. Suporte nativo para ROS1, ROS2, Isaac Sim e LeRobot
4. Pronto para fluxos de trabalho de IA multimodal e IA generativa
5. Um ambiente unificado para educação, pesquisa e prototipagem em robótica de IA

## Primeiros passos

### Conexão de hardware

1. Consulte [este guia](https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/) para montar o braço robótico.
2. Use um adaptador USB-para-CAN para conectar o braço robótico ao NVIDIA Jetson pela interface Type-C.

### Instalar driver do braço com um clique

Abra a janela do terminal no Jetson e execute o seguinte comando.

```bash
uv pip install motorbridge
```

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_bundle/install_driver.png" />
</div>

### WebUI

Execute este comando no Nvidia Jetson:

```bash
motorbridge-gateway --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port /dev/ttyACM0 --serial-baud 921600 --dt-ms 20
```

Em seguida, abra `https://rebot-devarm.w0x7ce.eu/` no seu navegador, e você verá a seguinte página. A partir dessa interface, você pode ajustar parâmetros do motor, verificar o status do braço robótico e realizar outras operações.

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_bundle/webui.png" />
</div>

## Aplicação

<div
    style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
        marginTop: '24px'
    }}
>
    <a
        href="/pt-br/rebot_arm_b601_dm_lerobot/"
        style={{
            textDecoration: 'none',
            color: 'inherit',
            border: '1px solid #d9d9d9',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#443f3f',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            display: 'block'
        }}
    >
        <div style={{height: '220px', padding: '12px', background: '#ffffff'}}>
            <img
                src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_bundle/lerobot.png"
                alt="LeRobot for reBot Arm B601-DM"
                style={{width: '100%', height: '100%', objectFit: 'contain', display: 'block'}}
            />
        </div>
        <div style={{padding: '18px'}}>
            <h3 style={{margin: 0, fontSize: '1.05rem', lineHeight: 1.4}}>
                Primeiros passos com o reBot Arm B601-DM no LeRobot
            </h3>
        </div>
    </a>
    <a
        href="/pt-br/rebot_arm_b601_dm_grasping_demo/"
        style={{
            textDecoration: 'none',
            color: 'inherit',
            border: '1px solid #d9d9d9',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#443f3f',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            display: 'block'
        }}
    >
        <div style={{height: '220px', padding: '12px', background: '#ffffff'}}>
            <img
                src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png"
                alt="Visual Grasping Demo for reBot Arm B601-DM"
                style={{width: '100%', height: '100%', objectFit: 'contain', display: 'block'}}
            />
        </div>
        <div style={{padding: '18px'}}>
            <h3 style={{margin: 0, fontSize: '1.05rem', lineHeight: 1.4}}>
                Demo de apreensão visual do reBot Arm B601-DM
            </h3>
        </div>
    </a>
    <a
        href="/pt-br/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor/"
        style={{
            textDecoration: 'none',
            color: 'inherit',
            border: '1px solid #d9d9d9',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#443f3f',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            display: 'block'
        }}
    >
        <div style={{height: '220px', padding: '12px', background: '#ffffff'}}>
            <img
                src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_nemoclaw/robot_webui.png"
                alt="Control reBot Arm with NemoClaw on Nvidia Jetson Thor"
                style={{width: '100%', height: '100%', objectFit: 'contain', display: 'block'}}
            />
        </div>
        <div style={{padding: '18px'}}>
            <h3 style={{margin: 0, fontSize: '1.05rem', lineHeight: 1.4}}>
                Controle o reBot Arm com NemoClaw no Nvidia Jetson Thor
            </h3>
        </div>
    </a>
</div>

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
