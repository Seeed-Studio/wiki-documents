---
description: Este wiki explica como instalar e configurar o módulo 5G Quectel RM520N em dispositivos Jetson, cobrindo as etapas de configuração de hardware e os comandos AT necessários.
title: Módulo Quectel RM520N para Jetson
keywords:
  - Edge
  - reComputer
  - Jetson
  - 4G/5G
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/RM520N.webp
slug: /rm520n_module_for_jetson
last_update:
  date: 11/25/2025
  author: Youjiang
createdAt: '2025-11-25'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/rm520n_module_for_jetson/
---

O RM520N é uma série de módulos 5G para IoT especialmente otimizados para aplicações IoT/eMBB, projetado no formato M.2 de acordo com a especificação 3GPP Release 16, que suporta ambos os modos 5G NSA e SA. O RM520N é compatível com a série de módulos 5G RM50xQ da Quectel, com o módulo LTE-A Cat 6 EM06, com a série de módulos Cat 12 EM12/EM12xR/EM120K e com o módulo Cat 16 EM160R-GL, facilitando a migração de LTE-A para 5G.

O RM520N é um módulo de grau industrial destinado apenas a aplicações industriais e comerciais. Ele cobre praticamente todas as operadoras de grande porte no mundo e suporta a tecnologia de localização Qualcomm® IZat Gen9C Lite (GPS, GLONASS, BDS e Galileo). O receptor GNSS integrado simplifica muito o projeto do produto e fornece capacidade de posicionamento mais rápida, precisa e confiável.

Graças a um amplo conjunto de protocolos de Internet, interfaces padrão da indústria e abundantes funcionalidades (drivers USB e PCIe para Windows 10, Linux e Android), o módulo pode ser adotado em uma ampla gama de aplicações eMBB e IoT, incluindo roteadores industriais, gateways domésticos, STB, laptops industriais, laptops de consumo, PDAs industriais, tablets robustos, transmissão de vídeo e sinalização digital.

<!-- Need to image and jump button  -->

## Recursos

- Módulo multimodo 5G/4G/3G no formato M.2, otimizado para aplicações IoT e eMBB
- Cobertura mundial de 5G e LTE-A
- Suporta modos NSA e SA
- Receptor GNSS multiconstelação disponível para aplicações que exigem posicionamento rápido e preciso em qualquer ambiente
- Recursos aprimorados: DFOTA e VoLTE (opcional)

## Especificações
<div align="center">
  <img width ="950" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/specification.png"/>
</div>

## Dispositivos Suportados

- [reComputer Robotis J30/J40](https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html)
- [reComputer Industrial J30/J40](https://www.seeedstudio.com/reComputer-Industrial-optional-accessories.html)
- [reServer Industrial J30/J40](https://www.seeedstudio.com/reServer-Industrial-J401-optional-accessories.html)
- [reServer Industrial J501](https://www.seeedstudio.com/reServer-Industrial-J501-Carrier-board-for-Jetson-AGX-Orin-p-5950.html)

:::note
Somente os dispositivos testados são listados acima.
:::

## Conexão de Hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/hardware_connection.png"/>
</div>

:::danger
Neste wiki, usaremos o [reComputer Robotics J3011](https://www.seeedstudio.com/reComputer-Robotics-J3011-p-6503.html) como exemplo para demonstrar como instalar e configurar um módulo RM520N-GL em um dispositivo Jetson.
:::

Etapa 1. Prepare todos os materiais que serão utilizados.

- reComputer Robotics J4012 equipado com Jetpack 6.2
- Módulo Quectel RM520N-GL

Etapa 2. Ajuste a posição do parafuso de suporte.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/support_screw.png"/>
</div>

Etapa 3. Insira o módulo 5G na porta M.2 Key B.

Etapa 4. Aperte os parafusos de fixação e instale a antena.

Etapa 5. Instale o cartão SIM 5G no painel frontal.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/sim.jpg"/>
</div>

## Configurar o Módulo 5G

Inicie o dispositivo Jetson e insira o seguinte comando no terminal.
```bash
sudo apt install minicom
sudo minicom -D /dev/ttyUSB2
```

Na interface do minicom, podemos usar comandos AT para configurar o modo de operação do módulo 5G.

```bash
AT+CPIN? # Check SIM card status. A normal response is READY.
AT+QCFG="usbnet",3 # Set module operation mode to RNDIS. A normal response is OK.
AT+CFUN=1,1 # Restart the module. If it fails to start for an extended period, try restarting the Jetson device.
AT+QNWPREFCFG="mode_pref",AUTO # Set automatic network mode or prioritize LTE network mode
AT+QNWPREFCFG="mode_pref",LTE
```

Se tudo correr bem, seu dispositivo agora deverá conseguir acessar a internet normalmente.

Para verificar a qualidade da rede, você pode usar uma ferramenta de teste de velocidade para testar a velocidade da conexão.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/speed_test.png"/>
</div>


Problema conhecido: descobrimos que esse método de configuração permite que o módulo 5G se conecte à rede normalmente, mas as informações do mmcli exibem anomalias.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/mmcli.png"/>
</div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
