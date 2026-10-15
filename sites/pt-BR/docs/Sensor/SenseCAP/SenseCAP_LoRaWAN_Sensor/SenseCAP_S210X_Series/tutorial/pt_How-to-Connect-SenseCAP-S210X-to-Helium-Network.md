---
description: Conectar à Rede Helium
title: Conectar à Rede Helium
keywords:
  - SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network
last_update:
  date: 11/26/2023
  author: Leo
createdAt: '2023-02-26'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network/
---

# Conectar à Rede Helium

## Helium Console

O Helium Console é uma ferramenta de gerenciamento de dispositivos baseada na web, hospedada pela Helium Foundation, que permite aos desenvolvedores registrar, autenticar e gerenciar seus dispositivos na rede Helium. Além do gerenciamento de dispositivos, o Console fornece conexões pré-criadas chamadas Integrações para rotear os dados dos dispositivos via HTTPs ou MQTT; ou diretamente para serviços em nuvem como AWS IoT.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/003.png)

## Conectar à Rede Helium

### Criar uma nova conta

Acesse &lt;https://console.helium.com/&gt; e registre sua conta.

### Configurar o Sensor

(1) Abra o aplicativo SenseCAP Mate

(2) Pressione o botão e segure por 3 segundos; o LED piscará com frequência de 1s.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/004.png)

(3) Clique no botão “Setup” para ligar o Bluetooth e clique em “Scan” para começar a escanear o Bluetooth do sensor.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/005.png)

(4) Selecione o sensor pelo S/N (etiqueta). Em seguida, as informações básicas do sensor serão exibidas depois de entrar.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/006.png)       ![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/007.png)

### Definir Frequência do Sensor via App SenseCAP Mate

Defina a banda de frequência correspondente com base na banda de frequência do gateway.

(1) Clique em “Setting” e selecione que a plataforma é “**Helium**”.

![wecom-temp-114185-2959d45aab4ab735f22b5fbf68a22c91](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/008.png)     ![wecom-temp-88582-e758abc6d2f73925e20290cddfebc421](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/009.png)

(2) Selecione o Frequency Plan; se o gateway for US915, defina o sensor para US915.

(3) Clique no botão “Send”, envie a configuração para o sensor para que ela entre em vigor.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0010.png)

(4) Clique no botão “Home”; o aplicativo desconectará a conexão Bluetooth.

Em seguida, o sensor será reiniciado.

(5) Quando o dispositivo é desconectado do Bluetooth, o LED acende por **15 segundos** e depois pisca como uma **luz respiratória**.

(6) Após ingressar na rede com sucesso, o LED **pisca rapidamente por 2s**.

# Configuração do Helium Console

## Adicionar Novo Dispositivo

(1) Clique em “Devices” –> “Add New Device”

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0011.png)

(2) Insira o Device EUI, App EUI, App Key: consulte o aplicativo SenseCAP Mate para obter detalhes.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0012.png)

(3) Salve o dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0013.png)

(4）Adicione uma nova label e, em seguida, adicione a label a um dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0014.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0015.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0016.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0017.png)

## Verificar os dados na Helium

(1) Entre na página de detalhes do dispositivo e encontre REAL TIME PACKETS.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0018.png)

(2) Ligue o Sensor; serão exibidos dados brutos.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0019.png)

## Enviar Dados da Helium para o Datacake

### Criar uma Conta Datacake

(1) Crie uma nova conta, site: &lt;https://datacake.co/&gt;

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0020.png)

(2) Clique em “Edit Profile” -> “API” -> Obter token de API.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0021.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0022.png)

### Adicionar Nova Integração no Helium Console

(1) Clique em “Integrations” -> ”Add New Integration” -> ”Datacake”.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0023.png)

(2) Insira o Datacake Token (Consulte [a seção](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/#_Create_a_Datacake)) e dê um nome para sua integração.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0024.png)

### Configurar os Flows na Helium

(1) Clique em “Flows”.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0025.png)

(2) Arraste a Label para um espaço em branco.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0026.png)

(3) Arraste a Integration para um espaço em branco.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0027.png)

(4) Conecte os dois blocos.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0028.png)

(5) Salve as alterações.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0029.png)

### Adicionar o Sensor no Datacake

(1) Volte ao Dashboard do Datacake e clique em “Device” -> ”Add Device”

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0030.png)

(2) Pesquise “Seeed”. Você pode selecionar alguns sensores diretamente.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0031.png)

(3) Selecione o Sensor Template.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0032.png)

(4) Selecione “Helium”.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0033.png)

(5) Insira o seu Device EUI e o Nome.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0034.png)

(6) Selecione o seu plano e adicione o dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0035.png)

### Verificar Dados no Datacake

Clique no botão Debug; será exibido o log de depuração.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0036.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0037.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0038.png)
