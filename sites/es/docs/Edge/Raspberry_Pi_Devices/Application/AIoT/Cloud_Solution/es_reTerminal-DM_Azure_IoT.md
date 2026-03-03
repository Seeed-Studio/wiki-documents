---
description: Azure IoT Edge Runtime on reTerminal DM
title: Azure IoT Edge Runtime on reTerminal DM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-DM_Azure_IoT
last_update:
  date: 11/6/2023
  author: Takashi
---

# Ejecutar Azure IoT Edge Runtime en dispositivo reTerminal DM con Debian 11 (ARM32v7)

<div style={{textAlign:'center'}}><iframe width={270} height={358} frameBorder={0} src="https://devicecatalog.azure.com/embed/c40637ad-a9bf-494e-8975-f4d37e43cf6f" title="reTerminal DM - Dispositivo Certificado por Azure" /></div>

## Introducción

reTerminal DM es un dispositivo todo-en-uno que funciona como Panel PC, HMI, PLC y Gateway IIoT, alimentado por Raspberry Pi CM4, con
panel frontal IP65 de 10.1'' e interfaces industriales ricas, integrado nativamente con Node-RED y compatible con
el ecosistema de software basado en Raspberry Pi.

Este documento describe cómo conectar el dispositivo reTerminal DM ejecutando Debian 11 (ARM32v7) con Azure IoT
Edge Runtime preinstalado y Gestión de Dispositivos. Este proceso de múltiples pasos incluye:

- Configurar Azure IoT Hub
- Registrar tu dispositivo IoT
- Construir e implementar componente cliente para probar la capacidad de gestión de dispositivos

## Paso 1: Prerrequisitos

Debes tener los siguientes elementos listos antes de comenzar el proceso:

1. [Crear una cuenta de Azure](https://azure.microsoft.com/en-us/free/)
2. [Registrarse en el Portal de Azure](https://portal.azure.com/#home)
3. [Configurar tu IoT hub](https://github.com/Azure/azure-iot-device-ecosystem/blob/master/setup_iothub.md)
4. [Agregar el Dispositivo Edge](https://docs.microsoft.com/en-us/azure/iot-edge/quickstart-linux)
5. [Agregar los Módulos Edge](https://docs.microsoft.com/en-us/azure/iot-edge/quickstart-linux?view=iotedge-2018-06#deploy-a-module)

## Paso 2: Preparar tu Dispositivo

1. Enciende el dispositivo. Conecta una fuente de alimentación de 12~24V al conector de bloque de terminales de alimentación de 2 pines.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE.png" style={{width:300, height:'auto'}}/></div>

2. Verifica la versión del SO, número de bits y arquitectura.

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
Si tu sistema operativo es anterior a Debian 11 (Bullseye) o LOG_BIT es 64, por favor instala la última versión de Raspberry Pi OS de 32 bits. Consulta [Pasos para Grabar Raspbian OS](https://wiki.seeedstudio.com/es/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os).
:::

:::tip
Si `uname -m` es aarch64, tu sistema operativo está ejecutando un kernel de 64 bits. Por favor cambia a un kernel de 32 bits. Consulta [Controlador para SO de 32 bits](https://wiki.seeedstudio.com/es/reterminal-dm-flash-OS/#32-bit-os-driver).
:::

## Paso 3: Prueba Manual para Azure IoT Edge en dispositivo

### 3.1 Runtime de Edge Habilitado

1. [Registra tu dispositivo](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#register-your-device)

2. [Ver dispositivos registrados y recuperar información de aprovisionamiento](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#view-registered-devices-and-retrieve-provisioning-information)

3. [Instalar IoT Edge](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-iot-edge)

```
$ curl https://packages.microsoft.com/config/debian/11/packages-microsoft-
prod.deb > ./packages-microsoft-prod.deb
$ sudo apt install ./packages-microsoft-prod.deb
$ rm ./packages-microsoft-prod.deb
```

4. [Instalar un motor de contenedores](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-a-container-engine)

```
sudo apt-get update
sudo apt-get install moby-engine
sudo vi /etc/docker/daemon.json
sudo systemctl restart docker
```

Establece el controlador de registro predeterminado al controlador de registro local como se muestra en el ejemplo a continuación.

```cpp
"log-driver": "local"
```

5. [Instalar el runtime de IoT Edge](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-the-iot-edge-runtime)

```
sudo apt-get update
sudo apt-get install aziot-edge defender-iot-micro-agent-edge
```

6. [Aprovisionar el dispositivo con su identidad en la nube](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#provision-the-device-with-its-cloud-identity)

```
sudo iotedge config mp --connection-string 'PRIMARY_CONNECTION_STRING'
sudo iotedge config apply
```

### 3.2 Verificar el daemon de iotedge

Abra el símbolo del sistema en su dispositivo IoT Edge, confirme que el daemon de IoT Edge de Azure está en estado de ejecución

```
sudo iotedge system status
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE2.png" style={{width:900, height:'auto'}}/></div>

Abre el símbolo del sistema en tu dispositivo IoT Edge, confirma que el módulo desplegado desde la nube se está
ejecutando en tu dispositivo IoT Edge

```
sudo iotedge list
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE3.png" style={{width:900, height:'auto'}}/></div>

En la página de detalles del dispositivo de Azure, deberías ver los módulos de tiempo de ejecución - edgeAgent, edgeHub y
los módulos SimulatedTemperatureSensor están en estado de ejecución

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE4.png" style={{width:900, height:'auto'}}/></div>

## Enlaces Adicionales

- [Qué es Azure IoT Edge](https://learn.microsoft.com/en-us/azure/iot-edge/about-iot-edge)
- [Plataformas compatibles con Azure IoT Edge](https://docs.microsoft.com/en-us/azure/iot-edge/support)
- [Desarrolla tus propios módulos IoT Edge](https://docs.microsoft.com/en-us/azure/iot-edge/module-development)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
