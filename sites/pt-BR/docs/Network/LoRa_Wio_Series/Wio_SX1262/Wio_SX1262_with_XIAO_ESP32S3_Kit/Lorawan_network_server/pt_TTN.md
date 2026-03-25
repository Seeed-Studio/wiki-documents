---
description: Conexão TTN LNS baseada em Wio SX1262 com módulo XIAO esp32s3
title: Conectar ao TTN
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/40.png
slug: /wio_sx1262_xiao_esp32s3_LNS_TTN
sidebar_position: 1
last_update:
  date: 10/17/2024
  author: Evelyn Chen
createdAt: '2024-10-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/wio_sx1262_xiao_esp32s3_LNS_TTN/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/40.png" alt="pir" width={900} height="auto" /></p>

## Visão Geral

LoRaWAN é um protocolo de rede de longa distância e baixo consumo de energia construído sobre a técnica LoRa. Ele conecta dispositivos sem fio à Internet e gerencia a comunicação entre dispositivos de nó final e gateways de rede.

Seguindo o Guia de Introdução para LoRa, configuramos o Wio-SX1262 com o XIAO ESP32S3 como um gateway LoRa de hub de canal único.

Esta página wiki explica como configurar LoRaWAN com base no kit Wio-SX1262 com XIAO ESP32S3 como gateway de canal único para trocar dados com o TTN. E também conectar o nó sensor LoRa SenseCAP S210x ao kit Wio-SX1262 com XIAO ESP32S3 e transmitir os dados do sensor para o TTN (The Things Network).

## Adicionar Gateway LoRaWAN

Clique e crie uma nova conta do TTN: https://www.thethingsnetwork.org/.

Se você já tiver uma conta, pode visitar https://eu1.cloud.thethings.network/ diretamente.

Faça login e registre um gateway.

**Passo 1**. Registrar gateway

**Passo 2**. Preencha as informações corretas de `gateway EUI`, `gateway ID` e `frequency plan`.

**Passo 3**. Reinicie o módulo gateway e aguarde cerca de 2 minutos. Depois você pode verificar o status do gateway conectado.

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

## Criar um Aplicativo

Adicione um novo aplicativo no TTN

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/video1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

## Adicionar Sensor LoRa SenseCAP

### Configurar o Sensor LoRa via Sensecraft APP

Vamos adicionar um nó sensor SenseCAP ao TTN.

**Passo 1**. Baixe e abra o aplicativo Sensecraft.

**Passo 2**. Pressione o botão do sensor e mantenha pressionado por 3 segundos, o LED piscará na frequência de 1s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/41.png" alt="pir" width={300} height="auto" /></p>

**Passo 3**. Clique em “Scan” para adicionar um novo dispositivo e comece a escanear o código QR no dispositivo.

**Passo 4**. Clique em "Advanced Configuration" e selecione a plataforma "The Things Network"

**Passo 5**. Selecione o Plano de Frequência consistente com o gateway. Já configuramos o gateway para EU868, então o sensor também deve ser EU868.

**Passo 6**. O dispositivo usa OTAA para ingressar na rede LoRaWAN por padrão. Anote o `device EUI`, `App EUI` e `APP key`.

Há uma [instrução mais detalhada](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf) para conectar o sensor SenseCAP S210x ao The Things Network.

### Registrar no TTN

Registre um dispositivo final.

**Passo 1**. Selecione o tipo de dispositivo final e preencha o JoinEUI (AppEUI do Sensecraft). Em seguida, clique em *Confirm*.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/42.png" alt="pir" width={600} height="auto" /></p>

**Passo 2**. Preencha o DevEUI e o AppKey.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/43.png" alt="pir" width={600} height="auto" /></p>

**Passo 3**. Verifique novamente as informações de provisionamento preenchidas e, em seguida, clique em registrar dispositivo final. Os dados do sensor serão exibidos no painel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/44.png" alt="pir" width={600} height="auto" /></p>

## Recursos

- [The Things Network](https://eu1.cloud.thethings.network/)
- [Instruções do sensor SenseCAP para o TTN](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
