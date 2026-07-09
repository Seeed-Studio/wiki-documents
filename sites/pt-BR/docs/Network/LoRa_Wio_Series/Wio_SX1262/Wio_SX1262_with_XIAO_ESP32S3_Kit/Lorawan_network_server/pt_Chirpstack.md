---
description: Conexão LNS Chirpstack baseada em Wio SX1262 com módulo XIAO esp32s3
title: Conectar ao Chirpstack
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/51_1.png
slug: /wio_sx1262_xiao_esp32s3_LNS_Chirpstack
sidebar_position: 2
last_update:
  date: 10/17/2024
  author: Evelyn Chen
createdAt: '2024-10-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/wio_sx1262_xiao_esp32s3_LNS_Chirpstack/
---

# Kit Wio-SX1262 com XIAO ESP32S3 Conectado ao Chirpstack

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/51.png" alt="pir" width={900} height="auto" /></p>

## Visão Geral

LoRaWAN é um protocolo de rede de longa distância e baixo consumo de energia construído sobre a técnica LoRa. Ele conecta dispositivos sem fio à Internet e gerencia a comunicação entre dispositivos de nó final e gateways de rede.

Seguindo o Guia de Início Rápido para LoRa, configuramos o Wio-SX1262 com XIAO ESP32S3 como um gateway LoRa de hub de canal único.

Esta página da wiki explica como configurar LoRaWAN com base no kit Wio-SX1262 com XIAO ESP32S3 como gateway de canal único para troca de dados. E também conectar o nó sensor LoRa Sensecap S210x ao kit Wio-SX1262 com XIAO ESP32S3 e transmitir os dados do sensor para o Chirpstack.

## Instalar o Chirpstack localmente

Consulte estas [instruções](https://learn.semtech.com/mod/book/view.php?id=223&chapterid=266#:~:text=Enter%20the%20following%20to%20clone%20the%20ChirpStack%20Docker,Share%20it%20on%20any%20security%20popups%20you%20see.) para instalar o Chirpstack localmente.

1. Abra um navegador e visite http://localhost:8080 .

Você deverá ver a página de login do ChirpStack.

2. Entre com o nome de usuário padrão `admin` e senha `admin`.

## Adicionar Perfil de Dispositivo

Adicione perfis de dispositivo em Tenant:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/45.png" alt="pir" width={600} height="auto" /></p>

## Adicionar Gateway LoRaWAN

Registre o gateway e preencha o EUI do gateway:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/46.png" alt="pir" width={600} height="auto" /></p>

Adicionado com sucesso!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/47.png" alt="pir" width={600} height="auto" /></p>

## Adicionar Sensor LoRa SenseCAP

### Configurar Sensor LoRa via Sensecraft APP

Vamos adicionar um nó sensor Sensecap ao TTN.

**Passo 1**. Baixe e abra o aplicativo Sensecraft.

**Passo 2**. Pressione o botão do sensor e segure por 3 segundos, o LED irá piscar em frequência de 1 s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/41.png" alt="pir" width={300} height="auto" /></p>

**Passo 3**. Clique em “Scan” para adicionar um novo dispositivo e comece a escanear o código QR no dispositivo.

**Passo 4**. Clique em "Advanced Configuration" e selecione a plataforma "Other Platform"

**Passo 5**. Selecione o Plano de Frequência consistente com o gateway. Já definimos o gateway para EU868, então também defina o sensor como EU868.

**Passo 6**. O dispositivo usa OTAA para se juntar à rede LoRaWAN por padrão. Anote o `device EUI`, `App EUI` e `APP key`.

### Adicionar ao Chirpstack

**Passo 1**. Crie uma Application

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/48.png" alt="pir" width={600} height="auto" /></p>

**Passo 2**. Adicione o dispositivo na application e copie o `Device EUI` e `AppKEY` para os campos correspondentes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/49.png" alt="pir" width={600} height="auto" /></p>

**Passo 3**. Verifique o status do sensor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/50.png" alt="pir" width={600} height="auto" /></p>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
