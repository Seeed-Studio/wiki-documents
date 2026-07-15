---
description: Kit GPS Bee
title: Kit GPS Bee
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /GPS_Bee_kit
sku: 113050003
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/GPS_Bee_kit/
---

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/Gpsbee_05.jpg)

Para tornar o módulo GPS facilmente compatível com o shield existente, usamos o mesmo encapsulamento de pinos do módulo sem fio XBee. Assim, você pode colocar o módulo GPS no shield existente que é compatível com XBee. Você também pode usar o [UartSBee V4](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) para conectar o módulo GPS à porta USB, executar um software chamado u-center para analisar os dados de GPS e redefinir o parâmetro do módulo GPS. Coloque o GPS Bee no [UartSBee V4](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) e conecte o [UartSBee V4](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) ao PC, abra o u-center.exe, escolha a porta UartSB, então você poderá ver os dados que o módulo GPS envia de volta, e o software os analisa e mostra as informações específicas, como: hora, velocidade, latitude e longitude, altitude em relação ao nível do mar, e assim por diante.

O kit vem com uma Mini Embedded Antenna U.FL para GPS; você também pode adquirir outra antena de tamanho maior [Embedded Antenna U.FL for GPS](https://www.seeedstudio.com/depot/embedded-antenna-ufl-for-gps-p-564.html?cPath=84_89). Compatível com todos os shields, placas de conexão e placas com soquetes padrão XBee.

[4 pin 2.54mm to 2.0mm Female jumper wire](https://www.seeedstudio.com/depot/4-pin-254mm-to-20mm-female-jumper-wire-100mm-p-403.html) também está disponível para facilitar a adaptação!

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/gps-bee-kit-with-mini-embedded-antenna-p-560.html?cPath=144_145)

## Recursos

---
- Motor u-blox 5 de 50 canais com mais de 1 milhão de correlacionadores efetivos
- Tempo até a primeira correção &lt;1 segundo para inicializações a quente e assistidas
- Sensibilidade de aquisição e rastreamento SuperSense® de -160dBm
- Inicialização acelerada com sinais fracos para módulos com recurso KickStart
- Suporta serviços A-GPS AssistNow Online e AssistNow Offline; compatível com OMA SUPL
- Alta imunidade a interferências
- Taxa de atualização de posição de 4 Hz
- Conector em miniatura de passo 2,0 mm, compatível com soquetes XBee
- Interfaces UART, USB, DDC e SPI
- Em conformidade com RoHS

## Ideias de Aplicação

---
- Qualquer sistema de posicionamento

## Especificações

---

| Item | Símbolo | Min | Típ | Máx | Unidade |
|------|--------|-----|-----|-----|------|
| Fonte de alimentação | Vcc | 2.7 | 3.0 | 3.6 | V |
| Corrente de pico de alimentação (Vcc=3.6V) | | | | 150 | mA |
| Corrente de alimentação sustentada (Vcc=3.0V) | | | | | |
| Aquisição | | | 102 | | mA |
| Rastreamento | | | 44 | | mA |
| Ganho da antena | | | 30 | | dB |
| Temperatura de operação | | -40 | | 85 | ℃ |

### Definição de pinos e classificação

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPS.jpg)

| Pino | Nome | Função |
|-----|------|----------|
| 1 | Vcc | Fonte de alimentação, 2.7-3.6VDC |
| 2 | TX | Porta Serial 1 |
| 3 | RX | Porta Serial 2 |
| 4 | NC | Reservado |
| 5 | EX | Reservado |
| 6 | NC | Reservado |
| 7 | NC | Reservado |
| 8 | NC | Reservado |
| 9 | NC | Reservado |
| 10 | GND | Terra |
| 11 | NC | Reservado |
| 12 | NC | Reservado |
| 13 | NC | Reservado |
| 14 | NC | Reservado |
| 15 | TP | Saída de pulso configurável (padrão 1Hz, máx 4Hz) |
| 16 | NC | Reservado |
| 17 | NC | Reservado |
| 18 | NC | Reservado |
| 19 | SCL | Pino de clock I2C (apenas configuração) |
| 20 | SDA | Pino de dados I2C (apenas configuração) |

## Uso

---
1. Shield GPS de uso geral: beneficiando-se do pinout e da tensão compatíveis com XBee, o GPS Bee pode reutilizar qualquer soquete XBee, desde o shield XBee até o XBee explore. Por exemplo, você pode simplesmente montar o módulo XBee em projetos Arduino por meio de um shield XBee.

2.

| | |
|---|---|
| USB | ![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam.jpg) |

| | |
|---|---|
| **Módulo GPS Bluetooth** Funciona com UartSB como um módulo GPS de porta USB. Você pode usar o poderoso Ucenter para obter facilmente detalhes práticos. Ou, adicionar um módulo Bluetooth para obter um módulo GPS Bluetooth para seus projetos. | ![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam-2.jpg) |

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam-3.jpg)

Clique [aqui](http://garden.seeedstudio.com/images/2/20/GPSBee-exam-3.jpg) para ver a imagem completa e legível.

### Observação sobre o módulo SIM28

1. O GPS Bee alterou o módulo para SIM28, que tem o mesmo footprint da versão original.

2. Você deve usar as ferramentas ["SIMCom GPS DEMO"](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIMCom_GPS_DEMO_V1.07.zip) para receber os dados do módulo SIM28.

3. Abra as ferramentas SIMCom_GPS_DEMO, vá para Module-&gt;properties-&gt;module-&gt;selecione SIM28.

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/SIM28_module_select.jpg)

4. Abra as ferramentas SIMCom_GPS_DEMO, vá para Module-&gt;connect. Selecione a porta serial que o módulo GPS utiliza.

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/SIM28_module_tools_pannel.jpg)

## Rastreador de Versões

| Revisão | Descrições | Lançamento |
|----------|-------------|----------|
| Kit GPS Bee (com Mini Embedded Antenna) | - | 8 Nov, 2009 |
| v0.91 | complementação | 15 Mar, 2011 |
| v1.2 | antena | 18 Mai, 2012 |
| v1.2 | alterar o módulo GPS para SIM28 | 5 Dez, 2013 |
| v1.3 | alterar o módulo GPS para SIM28, mover o LED para a parte inferior. | 10 Jan, 2014 |

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPS_Bee_v1.3_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
- [NEO-5 DataSheet Of U-blox](https://www.seeedstudio.com/depot/datasheet/NEO-5x_Data_Sheet(GPS.G5-MS5-07025).pdf)

- [NEO-6 DataSheet Of U-blox](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/NEO-6_DataSheet-GPS.G6-HW-09005-.pdf)

- [LEA-6 NEO-6 HardwareIntegrationManual](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/LEA-6_NEO-6_HardwareIntegrationManual.pdf)

- [U-center](https://www.seeedstudio.com/depot/datasheet/u-center_5.07_Installer.rar)

- [GPSBee Schematic v1.2.pdf](http://garden.seeedstudio.com/images/5/58/GPSBee_v1.2.pdf)

- [GPSBee v1.2 Eagle file](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPSBee_v1.2_eagle.zip)

- [SIM28_DATA_File](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIM28_DATA_File.zip)

- [SIMCom_GPS_DEMO_V1.07](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIMCom_GPS_DEMO_V1.07.zip)

- [GPSBee V1.3 Eagle File](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPS_Bee_v1.3_eagle.zip)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
