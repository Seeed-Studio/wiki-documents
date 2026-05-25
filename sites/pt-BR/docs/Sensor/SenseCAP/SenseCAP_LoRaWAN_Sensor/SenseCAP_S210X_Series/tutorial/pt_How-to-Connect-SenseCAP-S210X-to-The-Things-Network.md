---
description: Conectar à The Things Network
title: Conectar à The Things Network
keywords:
  - SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.webp
slug: /Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network
last_update:
  date: 11/25/2024
  author: Leo
createdAt: '2023-02-24'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network/
---

# Conectar à The Things Network

## The Things Network

The Things Stack é um servidor de rede LoRaWAN de nível empresarial, construído sobre um núcleo de código aberto. O The Things Stack permite que você construa e gerencie redes LoRaWAN em seu próprio hardware ou na nuvem.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png)

## Conectar à The Things Network

### Criar uma nova conta

Site da TTN: &lt;https://www.thethingsnetwork.org/&gt;

### Configurar o Sensor

(1) Abra o App SenseCAP Mate

(2) Pressione o botão e segure por 3 segundos, o LED piscará com frequência de 1s.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/004.png)

(3) Clique no botão “Setup” para ativar o Bluetooth e clique em “Scan” para começar a escanear o Bluetooth do sensor.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/005.png)

(4) Selecione o Sensor pelo S/N (etiqueta). Em seguida, as informações básicas do sensor serão exibidas após entrar.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/006.png)
![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/007.png)

### Definir a frequência do Sensor via App SenseCAP Mate

Defina a banda de frequência correspondente com base na banda de frequência do gateway.

(1) Clique em “Setting” e selecione a plataforma “The Things Network”.

![wecom-temp-81208-6d8da19d41a879a504ad54c71bf4961c](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/008.png)

(2) Selecione o Plano de Frequência; se o seu gateway for US915, defina o sensor para US915.

![wecom-temp-73569-56429bfa7490c37c5ec3c5b2fc8ba435](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/009.png)

(3) O dispositivo usa OTAA para ingressar na rede LoRaWAN por padrão. Portanto, podemos definir aqui o Device EUI, App EUI e APP Key.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0010.png)

|**Parâmetro**|**Tipo**|
| - | - |
|Device EUI|16, hexadecimal de 0 ~ F|
|App EUI|16, hexadecimal de 0 ~ F|
|App Key|32, hexadecimal de 0 ~ F|

(4) Defina a Política de Pacotes. A estratégia de uplink de pacotes do sensor possui três modos.

|**Parâmetro**|**Descrição**|
| - | - |
|2C+1N (padrão)|2C+1N (2 pacotes confirmados e 1 não confirmado) é a melhor estratégia; esse modo minimiza a taxa de perda de pacotes, porém o dispositivo consumirá mais pacotes de dados na TTN ou créditos de dados na rede Helium.|
|1C|1C (1 confirmado) o dispositivo entrará em modo de espera após receber 1 pacote de confirmação do servidor.|
|1N|1N (1 não confirmado) o dispositivo apenas envia o pacote e depois começa a dormir, não importando se o servidor recebeu os dados ou não.|

(5) Clique no botão “Send” para enviar a configuração ao sensor para que ela tenha efeito.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0011.png)

(6) Clique no botão “Home”; o App desconectará a conexão Bluetooth.

Em seguida, o sensor será reiniciado.

(7) Quando o dispositivo é desconectado do Bluetooth, o LED acende por **5 segundos** e depois pisca como uma **luz respiratória**.

## Configuração da TTN

### Registro do Gateway na TTN

Crie um Gateway no console da TTN com base nas informações reais.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0012.png)

### Criar a Aplicação

Crie uma aplicação no seu console TTN. Dentro das aplicações, você pode registrar e gerenciar dispositivos finais e seus dados de rede. Depois de configurar seu conjunto de dispositivos, use uma das muitas opções de integração para enviar os dados relevantes para seus serviços externos.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0013.png)

## Adicionar o Sensor ao Console TTN

(1) Selecione a Aplicação que você criou e clique em ‘Register end device’ para adicionar seu dispositivo final.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0014.png)

(2) Selecione o dispositivo final no LoRaWAN Device Repository.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0015.png)

Em seguida, com base na marca, configure itens como os abaixo.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0016.png)

- End device brand: Selecione SenseCAP.
- Model: Selecione o modelo do seu sensor. (Se não houver, use adição manual)
- Hardware / Firmware Version: Normalmente, escolha a mais recente.
- Profile(Region)/Frequency plan: Obtenha a partir do App SenseCAP Mate

|**Frequência do Sensor**|**Nome Comum**|**Descrição**|
| - | - | - |
|EU863-870|EU868|Europa 863-870 MHz (SF9 para RX2 -recomendado)|
|US902-928|US915|Estados Unidos 902-928 MHz, FSB 2 (usado pela TTN)|
|AU915-928|AU915|Austrália 915-928 MHz, FSB 2 (usado pela TTN)|
|KR920-923|KR920|--------|
|IN865-867|IN865|--------|
|AS923|AS923-1|Ásia 920-923 MHZ|
||AS923-2||

Diferentes países e servidores de rede LoRaWAN usam diferentes planos de frequência.

Para a rede Helium, consulte:

[Planos de Frequência Helium](https://docs.helium.com/lorawan-on-helium/frequency-plans)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0017.png)

(3) Configure ‘Provisioning information’.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0018.png)

- JoinEUI: que significa o **APP EUI**, você pode obtê-lo a partir do App SenseCAP Mate.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0019.png)

- Device EUI/ App Key: Obtenha a partir da página de configuração via App SenseCAP Mate. Como na imagem abaixo.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0020.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0021.png)

(4) Registrar dispositivo final.

Depois de concluir os itens acima, clique em “Register end device” para salvar sua modificação.

:::tip note
Se ingressar na rede com sucesso, o LED **piscará rápido por 2s**.
:::

## Verificar Dados no Console TTN

Na página Data, o pacote de dados está sendo enviado. Para o formato do payload, consulte a seção de Decodificação de Payload.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0022.png)
