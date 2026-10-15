---
description: '--'
title: Primeiros Passos com Phospho
keywords:
  - NVIDIA Jetson
  - Phospho
  - Robotic Arm
  - SOARM100
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/lerobot/so_arm_100.webp
slug: /control_robotic_arm_via_phospho
last_update:
  date: 7/1/2025
  author: Youjiang
createdAt: '2025-07-01'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/control_robotic_arm_via_phospho/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introdução

Phospho é como engenheiros de ML tornam robôs reais inteligentes. Fornecemos o hardware, as bibliotecas e os recursos de controle remoto para que desenvolvedores possam coletar dados, treinar modelos de IA e implantar aplicações em robôs reais em minutos em vez de meses.

Neste wiki, demonstraremos o controle de movimento do braço robótico SO Arm 100 usando o phospho.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/phospho_1.png" />
</div>

## Pré-requisitos

- SO Arm 100/101
- Computador com sistema operacional Mac/Windows/Linux

:::note
Você pode adquirir um braço robótico pronto para uso em [phospho](https://robots.phospho.ai/starter-pack), ou obter o kit de montagem na [SeeedStudio](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html).
:::

## Primeiros Passos

### Preparar o Braço Robótico

1. Se você comprou o kit de braço robótico na Seeedstudio, será necessário consultar [este link](https://wiki.seeedstudio.com/pt-br/lerobot_so100m/#assembly) para montar seu braço robótico.
2. Se você o comprou na [Phospho](https://robots.phospho.ai/), receberá um dispositivo pronto para uso que permite pular completamente o processo de montagem.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/lerobot/so_arm_100.jpg" />
</div>

Após concluir a montagem, conecte o braço robótico ao seu computador usando um cabo de dados USB.

### Instalar o Phospho

<div style={{ textAlign: 'justify' }}>

A instalação do software phospho é bastante amigável, não exigindo configuração complexa de ambiente e levando pouco tempo para download. Você só precisa selecionar o comando de instalação apropriado com base no sistema operacional do seu computador.

</div>

<Tabs>
<TabItem value="MacOS" label="MacOS">

```bash
curl -fsSL https://raw.githubusercontent.com/phospho-app/phosphobot/main/install.sh | bash
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
curl -fsSL https://raw.githubusercontent.com/phospho-app/phosphobot/main/install.sh | sudo bash
```

</TabItem>
<TabItem value="Windows" label="Windows">

```bash
powershell -ExecutionPolicy ByPass -Command "irm https://raw.githubusercontent.com/phospho-app/phosphobot/main/install.ps1 | iex"
```

</TabItem>
</Tabs>

Em seguida, inicie o servidor:

```bash
phosphobot run
```

:::info
A inicialização do servidor pode levar até 15 segundos.
:::

Depois que o serviço for totalmente iniciado, você poderá acessar a interface de usuário no navegador em http://0.0.0.0:8020/.
<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/webui.png" />
</div>

### Conectar o Braço Robótico

Após a inicialização da WebUI, ela irá automaticamente detectar e reconhecer o braço robótico. Se o reconhecimento falhar, você pode iniciar a conexão manualmente.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/connection.png" />
</div>

Antes de operar o braço robótico, precisamos realizar a segunda calibração. Você pode consultar o seguinte vídeo tutorial para o procedimento de calibração.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/calibration.png" />
</div>

<div class="video-container">
  <iframe width="900" height="540" src="https://www.youtube.com/embed/65DW8yLcRmM" title="How to calibrate the SO-100 or SO-101 robot arm? Step by step guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::info
O Lerobot SO Arm 100/101 normalmente requer duas etapas de calibração:

1. Durante a montagem: A inicialização na posição zero deve ser realizada para cada servo motor.
2. Durante a operação do software: É necessário recalibrar para compensar erros de montagem.

:::

### Controlar o Braço Robótico com o Phospho

Diferente do repositório Lerobot, o Phospho não só oferece suporte à teleoperação via Leader, como também fornece múltiplos métodos de controle: controle por teclado/mouse, controle manual por arrastar e soltar e controle baseado em VR. Esse design enriquecerá significativamente nossas metodologias de coleta de dados.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/control.png" />
</div>

`Control Robot` --> `Keyboard control` --> `Start Moving Robot`

Se tudo correu bem, agora você deve conseguir controlar o movimento do braço robótico usando o teclado do seu computador.

:::note
Além do controle remoto de braços robóticos, o phospho oferece muitos outros recursos interessantes esperando para serem explorados! Experimente agora mesmo!
:::

## Demonstração de Efeito

Aqui experimentamos o controle do braço robótico baseado em VR. Depois de instalar o aplicativo de teleoperação phospho em VR, o sistema pode descobrir o braço robótico via rede local. Conforme demonstrado no vídeo, a interface de VR permite uma operação remota do movimento do braço robótico de forma impressionantemente suave.

<div class="video-container">
<iframe width="900" height="540" src="https://www.youtube.com/embed/dvkHfyivQjI" title="AI-Powered Control of the Robotic Arm via Phospho" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referências

- [https://phospho.ai/](https://phospho.ai/)
- [https://docs.phospho.ai/welcome](https://docs.phospho.ai/welcome)
- [https://github.com/phospho-app/phosphobot](https://github.com/phospho-app/phosphobot)
- [https://wiki.seeedstudio.com/pt-br/lerobot_so100m](https://wiki.seeedstudio.com/lerobot_so100m/)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
