---
description: Xadow - GPS V2
title: Xadow - GPS V2
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_GPS_V2
sku: 113040009
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Xadow_GPS_V2/
---

---
![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/Xadow_GPS_v2.JPG)

Baseado no módulo GPS L70 da Quectel®, o Xadow GPS v2 combina a tecnologia AGPS avançada EASYTM (Embedded Assist System) e a tecnologia AlwaysLocateTM para alcançar alto desempenho, consumo de energia ultrabaixo e posicionamento rápido mesmo em níveis de sinal internos. Com um receptor de alta sensibilidade excelente (-163dBm de rastreamento) e uma antena chip embutida, o módulo pode rastrear até 22 satélites em 66 canais, tornando-o uma escolha perfeita para projetos de navegação. A placa também adota o novo conector Xadow de 11 PINs para melhorar a flexibilidade das conexões dos módulos.

[![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)

## Recursos
---

- EASY™, tecnologia AGPS avançada sem necessidade de memória externa
- Consumo de energia ultrabaixo no modo de rastreamento
- AlwaysLocate™, um controlador inteligente de modos alternados
- Alta sensibilidade
- Suporta QZSS
- Suporta DGPS, SBAS(WAAS/EGNOS/MSAS/GAGAN)
- Anti-interferência, Cancelador de Interferência Ativa Multitonal
- Antena chip integrada com eficiência de até 83%
- Conectores Xadow de 11 PINs integrados para conexão totalmente flexível com outros módulos Xadow
- Empilhável, encadeável e costurável com outros módulos Xadow

## Especificação
---

|||
|---|---|
|**Microcontrolador**|	Kinetis KL02|
|**Núcleo**|	ARM® 32-bit Cortex® -M0+CPU|
|**Fonte de Alimentação**	|3.3 - 6 V (via pinos breakout)|
|**Flash**|	32 KB|
|**SRAM**|	4 KB|
|**Frequência de Clock**|	48 MHz|
|**Consumo de Energia**	|18mA@Tracking, 21mA@Acquisition|
|**Economia de Energia**|	Máx. 3mA@AlwaysLocateTM, 7uA@Backup /Mode, 180uA@Standby Mode|
|**Canal**|	22(Tracking) / 66 (Acquisition)|
|**Taxa de Atualização**|	1Hz(Default), até 10Hz|
|**Precisão da Posição Horizontal**|	&lt;2.5m CEP|
|**Precisão de Velocidade**|	&lt;0.1m/s|
|**Velocidade Máxima**|	Máx.515m/s|
|**Inicialização fria/morna com EASYTM**|215s/5s|
|**Sensibilidade de Aquisição**|-145dBm|
|**Sensibilidade de Rastreamento**|	-163dBm|
|**Temperatura de Operação**|-40℃ a 85℃|
|**Protocolos	NMEA**|0183/PMTK|
|**Tipo de Antena**|	Antena chip|
|**Interface**|	Interface com Xadow GSM+BLE através de  / I2C (endereço de 7 bits 0x05)|
|**Dimensões**|	25.37mm X 20.30mm / 1” × 0.8”

## Visão Geral do Hardware
---
![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/Xadow_GPS_v2.png)

## Sobre o Sistema de Posicionamento Global (GPS)
---
O Sistema de Posicionamento Global (GPS) é um sistema de navegação baseado no espaço que fornece, em tempo real e em qualquer condição climática, informações de posição geográfica, altitude, velocidade de deslocamento e horário em qualquer lugar na superfície ou próximo à superfície da Terra onde haja uma linha de visão desobstruída para quatro ou mais satélites GPS. Anteriormente ele era usado apenas em projetos militares, e agora é livremente acessível para qualquer pessoa com um receptor GPS. As aplicações típicas do GPS abrangem navegação automotiva, transferência de tempo, temporização de sinais de tráfego, dispositivos antirroubo e de rastreamento, etc.

## Comunidade Rephone
---
[![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

Temos procurado um lugar melhor onde nossos apoiadores (Usuários RePhone) possam se reunir, de forma acolhedora e confortável, conversar sobre o RePhone, discutir problemas técnicos, compartilhar ideias/projetos e dar feedback sobre o desenvolvimento dos módulos no futuro. E aqui está ele, a [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone).

Agora junte-se a nós na [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone)! Juntos buscamos respostas, fazemos coisas interessantes, cuidamos uns dos outros e compartilhamos nossas experiências.

**Perguntas Frequentes**

Algumas perguntas frequentes na [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone) são coletadas e respondidas no tópico "Frequently Asked Questions of RePhone (FAQ)", que será mantido atualizado sempre que surgir um novo FAQ.


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/202000729_PCBA%3BXadow%20GPS%20v2.1_schemic%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}></div>



## Recursos
---
Continuaremos atualizando o código-fonte em nossa página no GitHub:

- [Código-fonte para Xadow GPS v2](https://github.com/WayenWeng/Xadow_GPS_v2/)
- [Código de teste para Xadow GPS v2 baseado no Eclipse IDE](https://github.com/WayenWeng/Xadow_GPS_v2_test/)

O diagrama esquemático do Xadow GPS v2 é fornecido no link a seguir:

- [Arquivos de Esquemático do Xadow GPS v2](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/202000729_PCBA%3BXadow%20GPS%20v2.1_schemic%20file.zip)

Quando você perceber que os valores do GPS estão um pouco distantes da sua localização real, talvez seja necessário gravar um novo firmware no Xadow GPS V2:

- [Aprenda como gravar um novo firmware com uma placa mbed](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/Burn_to_Xadow_modules.zip)

Confira mais informações sobre o GPS L70 e a antena chip:

- [Especificação do GPS L70 e da antena chip](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/GPS_L70_%26_Chip_Antenna.rar)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
