---
description: Introdução ao Rastreador LoRaWAN
title: Introdução
keywords:
  - Rastreador
  - LoRaWAN
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /t1000e_for_lorawan_introduction
sku: 114993591
sidebar_position: 1
last_update:
  date: 2/4/2026
  author: Janet
createdAt: '2026-01-09'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/t1000e_for_lorawan_introduction/
---

# Introdução ao T1000-E para LoRaWAN 

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993591-t1000-e-lorawan.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-LoRaWAN-p-6408.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>
<br />

O T1000-E para LoRaWAN vem com firmware totalmente open source. Para aprimorar a experiência do usuário, fornecemos um firmware de demonstração pré-instalado nos dispositivos produzidos em fábrica. Os usuários podem explorar o firmware de demonstração para uma experiência inicial e também desenvolver seu próprio firmware personalizado. Para detalhes sobre desenvolvimento personalizado, consulte o [LoRaWAN Open Source Firmware](https://wiki.seeedstudio.com/pt-br/open_source_lorawan/).

:::caution note
Antes de gravar o firmware, certifique-se de que seu dispositivo é a versão `T1000-E for LoRaWAN` e não grave outro firmware Meshtastic neste modelo de rastreador, pois isso pode fazer com que o dispositivo deixe de funcionar completamente.
:::

**Comparação de Versões da Série T1000**

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

## Recursos
- **Software Open Source**: Oferece código-fonte completo, permitindo contribuições da comunidade e personalização do dispositivo.
- **Integração de Múltiplos Sensores**: Integra sensores de temperatura, luz e acelerômetro de 3 eixos. Suporta GNSS, WiFi e Bluetooth para posicionamento interno/externo. 
- **Configuração Fácil**: Através do [SenseCraft App](https://wiki.seeedstudio.com/pt-br/sensecraft-app/overview/), os usuários podem configurar facilmente os parâmetros do dispositivo. 
- **Suporte Robusto a LoRaWAN**: Garante acesso rápido do dispositivo à rede e configuração.
- **Botões Amigáveis ao Usuário**: Opções simples de botões para ligar/desligar, configuração de Bluetooth, alarme SOS, etc.

## Especificações

### Parâmetros Gerais

| Modelo do Produto       | T1000-E for LoRaWAN                                                  |
|--|--|
| Backhaul               | LoRaWAN® (v1.0.4 Classe A)                                          |
| Bluetooth              | Bluetooth v5.1, configuração via SenseCraft App                     |
| Plano de Canais LoRaWAN | IN865 / EU868 / US915 / AU915 / AS923 / KR920 / RU864              |
| Temperatura            | Faixa: -20 a 60°C; Δ Precisão: ±1°C; Resolução: 0,1°C              |
| Luz                    | 0 a 100% (0 é escuro, 100% é o mais claro)                          |
| Acelerômetro de 3 Eixos | Acelerômetro de 3 eixos para detectar movimento                   |
| LED e Buzzer           | LED e buzzer para indicar o status                                  |
| Botão                  | 1 botão para operar e acionar eventos (SOS)                         |
| Antena                 | Interna (GNSS/LoRa/Wi-Fi/BLE)                                       |
| Distância de Comunicação | 2 a 5 km (dependendo da antena do gateway, instalação e ambiente) |
| Grau de Proteção IP    | IP65                                                                 |
| Dimensões              | 85 x 55 x 6,5 mm                                                     |
| Peso do Dispositivo    | 32 g                                                                 |
| Temperatura de Operação | -20°C a +60°C                                                       |
| Umidade de Operação    | 5% - 95% (sem condensação)                                          |
| Certificação           | CE / FCC / RoHS                                                      |


### Localização

| Recurso                        | Descrição                                            |
|--|--|
| Constelação GNSS       | GPS / GLONASS / Galileo / BeiDou / QZSS                     |
| Sensibilidade GNSS     | -145 dBm inicial a frio / -160 dBm rastreamento             |
| Precisão de Localização GNSS | ~10 m CEP, GPS, -130 dBm                               |
| Posicionamento por Wi-Fi | Varredura passiva, envia 3~5 endereços MAC escaneados     |
| Posicionamento por Bluetooth | Envia os 3 melhores endereços MAC de sinal do Beacon escaneados |


### Bateria

| Recurso                        | Descrição                                                          |
|--|--|
| Capacidade da Bateria          | Bateria de íons de lítio recarregável, 700 mAh                    |
| Estimativa de Vida da Bateria  | 3 meses com uma única carga (uplink a cada 1 hora, apenas dados GNSS) |
| Monitoramento da Vida da Bateria | Uplink periódico do nível da bateria                            |
| Cabo de Carga (adaptador não incluído) | Cabo de carregamento magnético USB, 1 metro               |
| Tensão de Entrada de Energia   | 4,7 a 5,5 V DC                                                     |
| Temperatura de Carga           | 0 ~ +45°C                                                          |



## Visão Geral do Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000e_for_lorawan_hardware_overview.webp" alt="pir" width={800} height="auto" /></p>


## Aplicações

- **Rastreamento de Ativos**: Monitore remotamente o status e a localização dos ativos. Transmita dados de localização para a nuvem via LoRaWAN. Os usuários podem visualizar a posição em tempo real e a trajetória em plataformas de gerenciamento em dispositivos móveis ou PC.
- **Monitoramento Ambiental**: Utilize os sensores térmicos, fotosensíveis e o acelerômetro de 3 eixos integrados. Colete e envie dados ambientais em tempo real via LoRaWAN para o monitoramento remoto de parâmetros.
- **Gestão de Logística**: Instale em veículos ou encomendas. Acompanhe em tempo real o status do transporte de carga (rotas, paradas, chegada no horário), auxiliando empresas de logística no planejamento e na gestão.

## Suporte Técnico e Discussão sobre o Produto

Agradecemos por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
