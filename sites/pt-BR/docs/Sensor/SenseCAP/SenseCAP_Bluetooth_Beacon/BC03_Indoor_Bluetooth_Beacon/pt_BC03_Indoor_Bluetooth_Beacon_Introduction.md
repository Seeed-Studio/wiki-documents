---
title: Introdução
description: SenseCAP_Bluetooth_Beacon_for_Tracker_Introduction
keywords:
  - Beacon
  - SenseCAP
  - BLE
  - Positioning
image: https://files.seeedstudio.com/wiki/BC03/1-BC03-Bluetooth-Beacon.webp
slug: /bluetooth_beacon03_for_tracker_introduction
sku: 100085893
last_update:
  date: 4/2/2026
  author: Janet
createdAt: '2026-03-24'
updatedAt: '2026-04-02'
url: https://wiki.seeedstudio.com/pt-br/bluetooth_beacon03_for_tracker_introduction/
---
# Introdução ao Beacon Bluetooth Interno BC03

O SenseCAP BC03 Indoor Bluetooth Beacon é um pequeno dispositivo sem fio que transmite sinais Bluetooth em intervalos regulares. Esses sinais podem ser detectados por dispositivos com Bluetooth, como [**SenseCAP T1000 Tracker**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html), [**SenseCAP T2000 
Tracker**](https://www.seeedstudio.com/SenseCAP-Asset-Tracker-T2000-A-p-6580.html), permitindo que eles determinem sua proximidade ao beacon, construindo uma solução baseada em localização para posicionamento interno, rastreamento de ativos e outras aplicações, o que possibilita detecção de proximidade e posicionamento interno em nível de metros.


![BC03](https://files.seeedstudio.com/wiki/BC03/1-BC03-Bluetooth-Beacon.jpg)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Indoor-Bluetooth-Beacon-BC03-p-6732.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
    </a>
</div>
<br />

:::tip Comparação de Versões
![Comparação de Versões](https://files.seeedstudio.com/wiki/BC03/beacon_version.png)
:::

## Sistema de Posicionamento Interno por Bluetooth

O GPS funciona bem em ambientes externos, mas seu desempenho é limitado em ambientes internos. Ao implantar beacons Bluetooth BC03 em ambientes internos, os trackers SenseCAP podem escanear os sinais dos beacons e estimar distâncias com base nos valores de RSSI. Combinado com algoritmos de posicionamento, isso possibilita **precisão de posicionamento interno em nível de metros (aproximadamente 2–3 metros)**.

Cenários típicos de aplicação incluem:

* Rastreamento de ativos
* Posicionamento de pessoal
* Análise de rotas
* Navegação interna

A solução pode ser integrada a plataformas em nuvem, aplicativos móveis e miniaplicativos.

![Posicionamento Interno](https://files.seeedstudio.com/wiki/BC03/beacon3.png)

Nós fornecemos um sistema de posicionamento interno por Bluetooth de código aberto projetado para funcionar perfeitamente com SenseCAP BLE Beacons e SenseCAP LoRaWAN Trackers.
Esta solução é totalmente open-source e personalizável, permitindo que os usuários criem, modifiquem e integrem seus próprios serviços de backend com base em nosso repositório no GitHub.

![Sistema de Posicionamento Interno](https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png)


:::tip
Confira o [Sistema de Posicionamento Interno](https://wiki.seeedstudio.com/pt-br/solutions/indoor-positioning-bluetooth-lorawan-tracker/) para mais detalhes.
:::

## Recursos
---

* **Bluetooth® LE 5.0**
* **Consumo ultrabaixo de energia**: Bateria Li/SOCl2 substituível, mais de **5 anos de vida útil da bateria** (0 dBm / 500 ms, configuração padrão)
* **Transmissão de longa distância**: Até **130 m** em áreas abertas
* **Instalação simples**: Puxe a película isolante e ele pode ser colado e instalado, reduzindo os custos de implantação.
* **Proteção UV**: Adequado para lâmpadas de esterilização UV e cenários semelhantes, sem alterar a aparência.
* **Configuração flexível**: Intervalo de advertising e potência de transmissão configuráveis
* **Alta compatibilidade**: Compatível com iOS 7.0+ e Android 4.3+
* **Suporte opcional a acelerômetro**: Área reservada na PCBA para detecção de movimento ou vibração

---
:::info
O BC03 possui uma antena BLE omnidirecional de alto ganho, baixo consumo de energia e interação com o usuário:

* **Capacidade Aprimorada de Transmissão de Beacon**
Estabilidade de advertising BLE e consistência de RSSI otimizadas, melhorando a precisão do posicionamento interno e a robustez em ambientes complexos.
* **Design da Antena**
Excelente eficiência de radiação e consistência direcional, antena onboard, alcançando assim um alcance de comunicação maior e comunicação mais estável sem ajuste preciso da direção de instalação.
* **Vida Útil de Bateria Prolongada**
Projeto de baixo consumo de energia ainda mais otimizado. Com a mesma configuração (0 dBm / 500 ms), o BC03 viabiliza implantação em larga escala e de longo prazo.
* **LED de Status Adicionado**
Um LED azul fornece feedback intuitivo do status do dispositivo durante a energização e operação, exibindo o status de inicialização e atualização do dispositivo.
:::

## Especificações

### Especificações Gerais

| Item                | Descrição                   |
| ------------------- | --------------------------- |
| Material            | ABS (Anti-UV)              |
| Cor                 | Branco                     |
| Grau de Proteção IP | Nenhum                     |
| Dimensão(C\*L\*A)    | Φ50*20,5 mm                |
| Peso                | ~45 g (incluindo bateria)  |
| Bateria             | Bateria Li/SOCl2, 2400 mAh|
| Chip                | Série nRF52                |
| Versão Bluetooth    | BLE 5.0 (retrocompatível com BLE 4.1) |
| Protocolo Bluetooth | iBeacon                    |
| Sensores            | Acelerômetro (opcional)    |
| LED                 | 1 × LED azul               |
| App                 | SenseCraft APP             |
| Temperatura de Trabalho | -20 ~ 60 °C            |
| Vida Útil da Bateria | > 5 anos (0 dBm / 500 ms na configuração padrão) |

### Parâmetros de Transmissão Padrão

| Parâmetro           | Valor Padrão                      |
| -------------------- | --------------------------------- |
| UUID                 | 5EEEDBCA-AC02-43B0-B0CF-C6EB07647825
 |
| Major                | Atribuído automaticamente a partir do endereço MAC do dispositivo (2 bytes inferiores) |
| Minor                | Atribuído automaticamente a partir do endereço MAC do dispositivo (2 bytes superiores) |
| Measured Power       | -59 dBm              |
| Tx Power             | -40 ~ +4dBm (0 dBm padrão)   |
| Advertising Interval | 20 ms ~ 30 s (500 ms padrão)  |
| Password             | 12345678                       |
| Device Name          | 03                             |

### Informações de Compatibilidade

| Sistema      | Dispositivos                               |
| ------------ | ------------------------------------------ |
| BLE          | BLE 4.1+                                   |
| iOS 7.0+     | iPhone 4S, iPhone 5/5C/5S, iPhone 6/6Plus/6S/6S Plus, iPhone 7/7Plus, iPad mini/mini2/4/Air/Pro, etc.      |
| Android 4.3+ | Samsung, XIAOMI, HUAWEI, ONEPLUS, vivo, OPPO, etc. |

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>