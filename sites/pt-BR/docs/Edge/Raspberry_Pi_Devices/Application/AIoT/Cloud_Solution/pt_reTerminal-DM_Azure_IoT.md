---
description: Azure IoT Edge Runtime no reTerminal DM
title: Azure IoT Edge Runtime no reTerminal DM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM_Azure_IoT
last_update:
  date: 11/6/2023
  author: Takashi
createdAt: '2023-11-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-DM_Azure_IoT/
---

# Executar Azure IoT Edge Runtime no dispositivo reTerminal DM com Debian 11 (ARM32v7)

<div style={{textAlign:'center'}}><iframe width={270} height={358} frameBorder={0} src="https://devicecatalog.azure.com/embed/c40637ad-a9bf-494e-8975-f4d37e43cf6f" title="reTerminal DM - Azure Certified Device" /></div>

## Introdução

O reTerminal DM é um dispositivo tudo‑em‑um de Panel PC, HMI, PLC e gateway IIoT, com Raspberry Pi CM4, painel frontal IP65 de 10,1'' e interfaces industriais abrangentes, integrado nativamente com Node-RED e compatível com o ecossistema de software baseado em Raspberry Pi.

Este documento descreve como conectar o dispositivo reTerminal DM executando Debian 11 (ARM32v7) com Azure IoT Edge Runtime pré‑instalado e gerenciamento de dispositivo. Este processo em várias etapas inclui:

- Configurar o Azure IoT Hub
- Registrar seu dispositivo IoT
- Criar e implantar o componente cliente para testar a capacidade de gerenciamento de dispositivo

## Etapa 1: Pré-requisitos

Você deve ter os seguintes itens prontos antes de iniciar o processo:

1. [Create an Azure account](https://azure.microsoft.com/en-us/free/)
2. [Sign up to Azure Portal](https://portal.azure.com/#home)
3. [Setup your IoT hub](https://github.com/Azure/azure-iot-device-ecosystem/blob/master/setup_iothub.md)
4. [Add the Edge Device](https://docs.microsoft.com/en-us/azure/iot-edge/quickstart-linux)
5. [Add the Edge Modules](https://docs.microsoft.com/en-us/azure/iot-edge/quickstart-linux?view=iotedge-2018-06#deploy-a-module)

## Etapa 2: Preparar o seu dispositivo

1. Ligue o dispositivo. Conecte uma fonte de alimentação de 12~24V ao conector de bloco de terminais de alimentação de 2 pinos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE.png" style={{width:300, height:'auto'}}/></div>

2. Verifique a versão do sistema operacional, o número de bits e a arquitetura.

```
$ lsb_release -irc
Distributor ID: Raspbian
Release: 11
Codename: bullseye
$ getconf LONG_BIT
32
$ uname -m
armv7l
```

:::tip
Se o seu sistema operacional for mais antigo que Debian 11 (Bullseye) ou LOG_BIT for 64, instale o Raspberry Pi OS 32‑bit mais recente. Consulte [Steps for Flashing Raspbian OS](https://wiki.seeedstudio.com/pt-br/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os).
:::

:::tip
Se `uname -m` for aarch64, o seu sistema operacional está executando um kernel de 64 bits. Altere para o kernel de 32 bits. Consulte [32-bit OS driver](https://wiki.seeedstudio.com/pt-br/reterminal-dm-flash-OS/#32-bit-os-driver).
:::

## Etapa 3: Teste manual do Azure IoT Edge no dispositivo

### 3.1 Edge Runtime habilitado

1. [Register your device](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#register-your-device)

2. [View registered devices and retrieve provisioning information](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#view-registered-devices-and-retrieve-provisioning-information)

3. [Install IoT Edge](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-iot-edge)

```
$ curl https://packages.microsoft.com/config/debian/11/packages-microsoft-
prod.deb > ./packages-microsoft-prod.deb
$ sudo apt install ./packages-microsoft-prod.deb
$ rm ./packages-microsoft-prod.deb
```

4. [Install a container engine](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-a-container-engine)

```
sudo apt-get update
sudo apt-get install moby-engine
sudo vi /etc/docker/daemon.json
sudo systemctl restart docker
```

Defina o driver de log padrão como o driver de log local, conforme mostrado no exemplo abaixo.

```cpp
"log-driver": "local"
```

5. [Install the IoT Edge runtime](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-the-iot-edge-runtime)

```
sudo apt-get update
sudo apt-get install aziot-edge defender-iot-micro-agent-edge
```

6. [Provision the device with its cloud identity](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#provision-the-device-with-its-cloud-identity)

```
sudo iotedge config mp --connection-string 'PRIMARY_CONNECTION_STRING'
sudo iotedge config apply
```

### 3.2 Verificar o daemon iotedge

Abra o prompt de comando no seu dispositivo IoT Edge e confirme que o daemon Azure IoT Edge está em estado de execução

```
sudo iotedge system status
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE2.png" style={{width:900, height:'auto'}}/></div>

Abra o prompt de comando no seu dispositivo IoT Edge e confirme que o módulo implantado a partir da nuvem está em execução no seu dispositivo IoT Edge

```
sudo iotedge list
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE3.png" style={{width:900, height:'auto'}}/></div>

Na página de detalhes do dispositivo no Azure, você deve ver os módulos de runtime - edgeAgent, edgeHub e
SimulatedTemperatureSensor em estado de execução

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE4.png" style={{width:900, height:'auto'}}/></div>

## Links adicionais

- [What is Azure IoT Edge](https://learn.microsoft.com/en-us/azure/iot-edge/about-iot-edge)
- [Azure IoT Edge supported platforms](https://docs.microsoft.com/en-us/azure/iot-edge/support)
- [Develop your own IoT Edge modules](https://docs.microsoft.com/en-us/azure/iot-edge/module-development)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
