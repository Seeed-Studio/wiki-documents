---
description: Chassi LoRaWan Wio Terminal com LoRa-E5 com antena integrada e GNSS, EU868/US915
title: Chassi LoRaWan Wio Terminal com LoRa-E5 com antena integrada e GNSS, EU868/US915
keywords:
  - Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915
last_update:
  date: 1/30/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915/
---



![](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Feature-02.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

Chassi LoRaWan Wio Terminal com LoRa-E5 com antena integrada e GNSS, EU868/US915 incorporando o LoRa-E5 STM32WLE5JC, alimentado pelo núcleo de MCU ARM Cortex M4 de ultrabaixo consumo de energia e LoRa SX126x, é um módulo de rádio sem fio que suporta protocolo LoRa e LoRaWAN nas frequências EU868 & US915 e modulações (G)FSK, BPSK, (G)MSK, LoRa. O chassi LoRaWan Wio Terminal com LoRa-E5 com antena integrada e GNSS, EU868/US915 pode dotar suas placas de desenvolvimento de fortes recursos de alcance de transmissão ultralongo, simplesmente plugando e usando com o conector Grove integrado na placa.

Como uma atualização de nossa antiga versão - [Grove - LoRa Radio](https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz.html) - alimentada pelo [RFM95 ultra-long-range Transceiver Module](https://www.seeedstudio.com/RFM95-Ultra-long-Range-Transceiver-Module-LoRa-Module-support-868M-frequency-p-2807.html), o Grove LoRa-E5 incorporando o [LoRa-E5 STM32WLE5JC Module](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) é um módulo de rádio LoRa sem fio de alto desempenho e fácil utilização que suporta protocolo LoRaWAN.

O módulo LoRa-E5 LoRaWAN STM32WLE5JC é a principal parte funcional integrada ao chassi LoRaWan Wio Terminal com LoRa-E5 com antena integrada e GNSS, EU868/US915. É um módulo LoRaWAN que incorpora o núcleo de MCU ARM Cortex M4 de ultrabaixo consumo de energia e LoRa SX126x; como a primeira combinação do mundo de LoRa RF e chip de MCU em um único módulo minúsculo, ele suporta modulações (G)FSK, BPSK, (G)MSK e LoRa, e possui certificação FCC e CE. (Saiba mais sobre o LoRa-E5 na [LoRa-E5 wiki](https://wiki.seeedstudio.com/pt-br/LoRa-E5_STM32WLE5JC_Module/))

Mais comparações entre o chip LoRa-E5 e o RFM95:
![](https://files.seeedstudio.com/products/113990934/%E8%8A%AF%E7%89%87%E5%AF%B9%E6%AF%94_2021.3.4.png)

Ao conectar o chassi LoRaWan Wio Terminal com LoRa-E5 com antena integrada e GNSS, EU868/US915 às suas placas de desenvolvimento, seus dispositivos conseguem se comunicar e controlar o LoRa-E5 de forma conveniente por comando AT através de conexão UART. O Grove LoRa-E5 será uma escolha superior para desenvolvimento e testes de dispositivos de IoT e para cenários de IoT de longa distância e ultrabaixo consumo de energia como agricultura inteligente, escritório inteligente e indústria inteligente. Ele é projetado com padrões industriais, com ampla faixa de temperatura de trabalho de -40℃ ~ 85℃, alta sensibilidade entre -136 dBm e -137 dBm e potência de saída entre 10 dBm e 22 dBm.

## Recursos

- LoRa-E5 (STM32WLE5JC) incorporado
- Suporta protocolo LoRaWAN na faixa de frequência EU868/US915
- Alcance de transmissão ultralongo de até 10 km (valor ideal em espaço aberto)
- Controle fácil por comando AT via conexão UART
- Protótipo rápido com interfaces Grove plug-and-play
- Ultrabaixo consumo de energia e alto desempenho

## Visão geral do hardware

![](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Size-08.png)

1. LoRa-E5 STM32WLE5JC ([Datasheet](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf))
2. Conector MHF IPEX
3. Antena de fio
4. Conector Grove
5. LEDs indicadores

## Plataformas compatíveis

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Especificação

|                    | Parâmetros gerais     |
|--------------------|-----------------------|
| Tensão de alimentação: | 3.3V/5V               |
| Potência de saída:  | Até +20 dBm em 3.3V  |
| Frequência de trabalho | 868/915MHz            |
| Protocolo           | LoRaWAN               |
| Sensibilidade       | -116.5dBm ~ -136dBm   |
| Modulação           | LoRa, (G)FSK, (G)MSK e BPSK |
| Corrente            | Apenas 60uA em modo de suspensão |
| Tamanho             | 20*40mm               |
| Temperatura de trabalho | -40℃ ~ 85℃ |

## Lista de partes

|        Produtos         |        Quantidade         |
|-----------------------|----------------------|
| Chassi LoRaWan Wio Terminal com LoRa-E5 com antena integrada e GNSS, EU868/US915  | *1 |
| Antena | *1  |

## Aplicação

- Rastreador GPS LoRaWAN
- Testador de campo LoRaWAN
- Agricultura inteligente
- Cidades inteligentes
- Fábrica inteligente
- Prototipagem rápida de dispositivos LoRa com Wio Terminal
- Qualquer desenvolvimento de aplicação de comunicação sem fio de longa distância
- Aprendizado e pesquisa de aplicações LoRa e LoRaWAN

# Primeiros passos

**Materiais necessários**

| Wio Terminal | Chassi LoRaWan | Chassi de bateria |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/Wio-Terminal-Wiki.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Feature-14.png)|![enter image description here](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/45.png)
|[Get ONE Now](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Get ONE Now](https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html)|[Get ONE Now](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)|

# Projeto 1: Testador de gateway LoRaWAN WioTerminal

## Introdução

O Testador de Gateway LoRaWAN é uma ferramenta portátil multifuncional que pode detectar a cobertura de seus gateways LoRaWAN. Em seguida, ele o informará se o sinal está em uma faixa normal. Projetado para facilitar a implantação de uma rede LoRaWAN, o Testador de Gateway LoRaWAN o ajudará a determinar o local ideal para a implantação do seu gateway LoRaWAN.

Antes de desenvolver isto, analisamos o mercado de testadores LoRa; o preço geralmente varia de US\$ 200 a US\$ 500; no entanto, alguns deles não possuem um aplicativo de backend para relatar o sinal da rede, a hora atual, o status e diversas outras informações críticas. Portanto, decidimos trazer uma versão de baixo custo que consiga fazer ainda mais! Este projeto é baseado no relatório [**WioLoRaWANFieldTester**](https://www.disk91.com/2021/technology/lora/low-cost-lorawan-field-tester/) de [**Paul Pinault**](https://github.com/disk91/WioLoRaWANFieldTester). Temos a honra de ter acesso ao seu link e agradecemos por suas contribuições. Combinamos a elegante interface de usuário de Paul Pinault para o Wio Terminal com os módulos LoRa-E5 e GNSS para produzir a funcionalidade do Testador de Gateway LoRaWAN.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/%E5%9C%BA%E6%99%AF%E5%9B%BE2.jpg" /></div>

## Recurso

- Seleção de menu para diferentes modos de operação; controles de potência, SF, entrada de números de teste, etc.
- Suporta vários segmentos de rede (EU868, US915, US915HYBRID, AS923, KR920, IN865)
- Exibe conexão do dispositivo LoRa e status de uplink-downlink
- Backup dos resultados de teste anteriores
- Exibição gráfica de RSSI e SNR
- Mostra o número de vezes de uplink e downlink, bem como a probabilidade de perda de pacotes
- Relato da posição GPS, bem como a hora atual e o número de satélites.
- Exibe informações do dispositivo LoRa, isto é, DevEui, APPEui, Appkey, versão do firmware e mais
- Definir o DevEui, APPEui e Appkey

## Hardware

O hardware usado neste projeto é mais acessível do que a maioria no mercado, com o custo total sendo inferior a cem dólares.

- [**WioTerminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [**Chassi Wio Terminal - Bateria (650mAh)**](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)
- [**Chassi Wio Terminal - LoRa-E5 e GNSS**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Uso

### Instruções do Wio Terminal

O Testador de Gateway LoRaWAN basicamente envia, sob demanda, uma trama para o gateway em intervalos regulares, que então é transferida para o servidor (Uplink). Em seguida, ele aguarda um status de ACK. Se o testador LoRa não receber uma resposta, continuará enviando a mesma trama até que o número predefinido seja atingido. O ACK, por sua vez, retorna a resposta (Downlink) ao testador LoRa, implicando que a mensagem é encaminhada para um serviço de backend, de onde a informação é eventualmente exibida na tela do Wio Terminal.
Este projeto é baseado na plataforma Arduino, o que significa que utilizaremos a IDE Arduino e várias bibliotecas Arduino. Se esta é sua primeira vez usando o Wio Terminal, aqui está um guia para rapidamente [**Começar com o Wio Terminal**](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/).

biblioteca necessária:

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)
- [**TinyGPS**](https://github.com/mikalhart/TinyGPSPlus)
- [**LovyanGFX**](https://github.com/lovyan03/LovyanGFX)

### Nota

Quando você enviar o código, selecione o modo slave.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/ROLA.png" /></div>

### Configuração do Console TheThingsNetwork

Neste projeto, eu testo o medidor LoRa na plataforma [**TheThingsNetwork**](https://www.thethingsnetwork.org), a instrução é a seguinte:

Etapa 1: Acesse o [**site da TTN**](https://www.thethingsnetwork.org) e crie sua conta, depois vá para gateways para começar a configurar seu dispositivo.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gataway1.png" /></div>

Etapa 2: Adicione o dispositivo gateway:

- Proprietário
- ID do Gateway
- EUI do Gateway
- Nome do Gateway

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway2.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway3.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway4.png" /></div>

Etapa 3: Adicione a Aplicação:

- Proprietário
- ID da Aplicação
- Nome da Aplicação

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_applications.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/application2.png" /></div>

Etapa 4: Adicione o nó LoRa:

- Marca (Selecione Sense CAP)
- Modelo (Selecione LoRa-E5)
- Versão de Hardware (Padrão)
- Versão de Firmware (Padrão)
- Perfil (A região é de acordo com a sua localização)
- Plano de frequência
- AppEUI
- DEVEUI
- AppKey
- ID do Dispositivo Final

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device1.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device4.png" /></div>

Etapa 5: Adicione o código para decodificar os dados:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_decode1.png" /></div>

```cpp
function Decoder(bytes, port) {

  var decoded = {};
  if (port === 8) {
    decoded.latitude   = (bytes[3] | (bytes[2]<<8) | (bytes[1]<<16)  | (bytes[0]<<24)) /1000000;
    decoded.longitude  = (bytes[7] | (bytes[6]<<8) | (bytes[5]<<16)  | (bytes[4]<<24)) /1000000;
    decoded.altitude   = (bytes[9] | (bytes[8]<<8));
    decoded.satellites = bytes[9];
  }

  return decoded;
}
```

Etapa 5: Verifique o resultado no TheThingsNetwork

Vá para o gateway e clique em "Live data".

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_data.png" /></div>

### Instruções do Wio Terminal

Cada dispositivo LoRa possui um número de série exclusivo; depois de conectar o dispositivo LoRa ao Wio Terminal, serão exibidos o deveui, appeui e appkey na primeira página, e você precisará preencher o ID do LoRa e o ID do gateway no servidor.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/rola_tester_ID.png" /></div>

Há dados de Rssi e Snr, e será exibida a barra de sinal e Snr e a perda de pacotes depois de receber a resposta de ACK.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/RSSI.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/SNR.png" /></div>

Este dispositivo também possui função de GPS, mas não é recomendado para uso em espaços fechados, para não afetar a captura de satélites.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/GPS.png" /></div>

## Esquemático

Dê uma olhada no diretório da placa para detalhes sobre PCB e componentes.
Aqui está a versão simplificada dos esquemáticos para implementação DiY.
Se quiser mais detalhes, basta verificar a lista de arquivos.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/LORA_PCB.png" /></div>

## Caixa

O gabinete impresso em 3D pode ser encontrado na lista de arquivos, que contém o PCBA WioTerminal Chassis H e o arquivo de PCB. Você encontrará todo o design ali. Você também encontrará o arquivo-fonte do FreeCad caso queira modificá-lo / melhorá-lo.

A peça impressa em 3D é mostrada abaixo:

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/feature.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/preview.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/back.png"/></div>

# Projeto 2: Nó LoRa com WioTerminal - Monitor Inteligente de Jardim IoT

## Introdução

O Monitor Inteligente de Jardim IoT usa o Wio Terminal Chassis-LoRa-E5 e GNSS como um dispositivo IoT; ele basicamente envia um quadro para o gateway e depois o transfere para o servidor (Uplink). Nesse caso, posso agrupar outros dados com o quadro para fazer upload, como GPS, temperatura e umidade; você também pode adicionar outros dados de sensores conforme desejar. Depois que o ACK obtém a resposta (Downlink) de volta para o dispositivo LoRa, o status da conexão muda para conectado e é exibido no Wio Terminal, o que significa que a mensagem foi passada para o serviço de backend e então você pode visualizar os dados na plataforma TheThingsNetwork. Você também pode usar outras plataformas, mas o pré-requisito é que a plataforma possa suportar o Wio Terminal Chassis-LoRa-E5 e GNSS.

  <div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/%E5%B8%A6%E4%BC%A0%E6%84%9F%E5%99%A8%E5%9C%BA%E6%99%AF%E5%9B%BE.jpg"/></div>

## Funcionalidades

- O dispositivo LoRa pode exibir o DevEui, APPEui e Appkey na primeira página.
- Ele pode exibir a temperatura atual, a umidade e a hora atual.
- Exibe longitude, latitude e número de satélites.
- Exibe o status de conexão do dispositivo e da TTN.  

## Hardware

Para este demo você vai precisar da lista de dispositivos abaixo:

- [**WioTerminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Wio Terminal Chassis - Battery (650mAh)**](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

- [**Grove - Temperature&Humidity Sensor (DHT11)**](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html)

- [**Wio Terminal Chassis - LoRa-E5 and GNSS**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Uso

Este projeto é baseado na plataforma Arduino, o que significa que usaremos a IDE Arduino e várias bibliotecas Arduino. Se esta é a primeira vez que você usa o Wio Terminal, aqui está um guia para [**Começar com o Wio Terminal**](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/) rapidamente.

Bibliotecas necessárias:

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)
- [**TinyGPS**](https://github.com/mikalhart/TinyGPSPlus)
- [**Grove_Temperature_And_Humidity_Sensor**](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

### Configuração do Console TheThingsNetwork

Neste projeto, eu testo o medidor LoRa na plataforma [**TheThingsNetwork**](https://www.thethingsnetwork.org), a instrução é a seguinte:

Etapa 1: Acesse o [**site da TTN**](https://www.thethingsnetwork.org) e crie sua conta, depois vá para gateways para começar a configurar seu dispositivo.

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gataway1.png"/></div>

Etapa 2: Adicione o dispositivo gateway:

- Proprietário
- ID do Gateway
- EUI do Gateway
- Nome do Gateway

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway2.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway3.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway4.png"/></div>

Etapa 3: Adicione a Aplicação:

- Proprietário
- ID da Aplicação
- Nome da Aplicação

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_applications.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/application2.png"/></div>

Etapa 4: Adicione o nó LoRa:

- Marca (Selecione Sense CAP)
- Modelo (Selecione LoRa-E5)
- Versão de Hardware (Padrão)
- Versão de Firmware (Padrão)
- Perfil (A região é de acordo com a sua localização)
- Plano de frequência
- AppEUI
- DEVEUI
- AppKey
- ID do Dispositivo Final

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device1.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device4.png"/></div>

Etapa 5: Adicione o código para decodificar os dados:

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_decode1.png"/></div>

```cpp
function Decoder(bytes, port) {

  var decoded = {};
  if (port === 8) {
    decoded.temp = bytes[0] <<8 | bytes[1];
    decoded.humi = bytes[2] <<8 | bytes[3];
    decoded.latitude   = (bytes[7] | (bytes[6]<<8) | (bytes[5]<<16)  | (bytes[4]<<24)) /1000000;
    decoded.longitude  = (bytes[11] | (bytes[10]<<8) | (bytes[9]<<16)  | (bytes[8]<<24)) /1000000;
    decoded.altitude   = (bytes[15] | (bytes[14]<<8) | (bytes[13]<<16) | (bytes[12]<<24))/100;
    decoded.satellites = bytes[16];
  }

  return decoded;
}

```

Etapa 5: Verifique o resultado no TheThingsNetwork

Vá para o gateway e clique em "Live data".

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_dataTEMP1.png"/></div>

### Nota

Quando você enviar o código, selecione o modo slave.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/ROLA.png" /></div>

Cada dispositivo LoRa possui um número de série exclusivo; depois de conectar o dispositivo LoRa ao Wio Terminal, serão exibidos o deveui, appeui e appkey na primeira página, e você precisará preencher o ID do LoRa e o ID do gateway no servidor.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/temp_ID.png" /></div>

Na segunda página, serão exibidos temperatura, umidade, hora atual, longitude, latitude e número de satélites.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TEMP_GPS_DATA.png" /></div>

## PlatformIO

Nós também fornecemos código para PlatformIO.

[IcingTomato/LoRaNode-with-WioTerminal-IoT-Smart-Garden-Monitor](https://github.com/IcingTomato/LoRaNode-with-WioTerminal-IoT-Smart-Garden-Monitor)

[IcingTomato/WioTerminal-LoRaWAN-Gateway-Tester](https://github.com/IcingTomato/WioTerminal-LoRaWAN-Gateway-Tester)

## Recursos

Folha de dados:

- [Wio Terminal Chassis - LoRa-E5 and GNSS v1.2.zip](http://files.seeedstudio.com/wiki/LoRa_WioTerminal/res/WioTerminalChassis-LoRa-E5andGNSSv1.2SCH&PCB.zip)
- [LoRa-E5 datasheet and specifications](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf)
- [LoRa-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)
- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">Folha de dados STM32WLE5JC</a></p>

Certificações:

- [LoRa-E5-HF Certification CE-VOC-RED](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf)
- [LoRa-E5-HF FCC Certification -DSS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf)
- [LoRa-E5-HF FCC Certification -DTS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf)

SDK relevante:

- [Pacote STM32Cube MCU para a série STM32WL](https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
