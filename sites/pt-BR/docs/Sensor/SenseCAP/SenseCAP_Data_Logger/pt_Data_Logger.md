---
description: Registrador de Dados LoRaWAN SenseCAP S2100
title: Registrador de Dados LoRaWAN SenseCAP S2100
keywords:
  - registrador de dados SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger
sku: 114992872
last_update:
  date: 4/12/2023
  author: Yvonne
createdAt: '2023-02-24'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger/
---


# Registrador de Dados LoRaWAN SenseCAP S2100

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/1.png"/></div>

O Registrador de Dados SenseCAP S2100 é um dispositivo versátil que pode se conectar a sensores MODBUS-RTU RS485/Analógico/GPIO, permitindo a transmissão fácil de dados para a rede LoRaWAN. Com seu design LoRa e IP66, este dispositivo possui estabilidade e confiabilidade impressionantes, e pode cobrir um longo alcance de transmissão mantendo um consumo de energia ultrabaixo. É perfeito para uso externo e pode ser alimentado por bateria ou conectado a uma fonte de alimentação externa de 12 V para ainda mais flexibilidade. Quando conectado à fonte de alimentação de 12 V, a bateria interna substituível atua como fonte de alimentação de backup. Além disso, o Registrador de Dados S2100 é otimizado para OTA com Bluetooth integrado, tornando a configuração e as atualizações rápidas e simples. Para completar, o conversor S2110 permite que o Registrador de Dados S2100 se conecte a Sensores Grove, tornando-o uma excelente escolha para sensores LoRaWAN de nível industrial DIY e implantação em pequena escala.
<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

# Recursos

- Forte compatibilidade com diferentes sensores: suporta todos os sensores MODBUS-RTU RS485/Analógico (4 ~ 20 mA/0~10V) / GPIO (nível/pulso).
- Compatível com redes LoRaWAN® em todo o mundo: compatível com o protocolo LoRaWAN® V1.0.3 e pode funcionar com gateway LoRaWAN®. (suporta o plano de frequência universal de 863MHz ~928MHz).
- Longo alcance e alimentado por bateria substituível: com transmissão sem fio LoRaWAN®, o S2100 suporta bateria interna de 19Ah e 12V DC externa para alimentar dispositivos, e alcance de transmissão ultralargo de 2 km em cenários urbanos e 10 km em cenários de linha de visada.
- Projetado para uso em ambientes severos: temperatura de operação de -40℃ ~ 85℃ e gabinete com classificação IP66, adequado para uso externo, alta exposição a UV, chuvas intensas, condições empoeiradas etc.
- Configuração e gerenciamento remotos: a Seeed fornece o aplicativo SenseCAP Mate e o SenseCAP Portal, permitindo que os usuários gerenciem dados e configurem remotamente.

# Especificação

## Interface

|Item|Valor|
|---|---|
|Entrada de Corrente|4 a 20 mA (2 canais)|
|Entrada de Tensão|0 a 10V (2 canais)|
|RS485|Protocolo RS485 Modbus-RTU|

## Parâmetros Gerais

|Item|Valor|
|---|---|
|Modelo do Produto|SenseCAP S2100|
|Microcontrolador|Wio-E5|
|Protocolo Suportado|LoRaWAN v1.0.3 Classe A|
|Bluetooth Integrado|Ferramenta de App para alterar parâmetros e definir algoritmo de conversão de dados|
|Plano de Canal de Longo Alcance|IN865/EU868/US915/AU915/ AS923|
|Potência Máxima Transmitida|19dBm|
|Sensibilidade|-136dBm@SF12 BW=125KHz|
|Distância de Comunicação|2 a 10km (dependendo do ambiente)|
|Grau de Proteção IP|IP66|
|Temperatura de Operação|-40 a +85 °C|
|Umidade de Operação|0 a 100 %UR (sem condensação)|
|Peso do Dispositivo|280g|
|Certificação|CE / FCC / RoHS|

## Bateria (contida no equipamento)

|Item|Valor|
|---|---|
|Vida Útil da Bateria|Até 10 anos|
|Capacidade da Bateria|19Ah (não recarregável)|
|Tipo de Bateria|Bateria padrão SOCl2 tamanho D|

# Arquitetura

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/2.png"/></div>

# Opção de Fonte de Alimentação

- Opção 1: o registrador de dados pode funcionar no modo Periódico. Alimentado por uma bateria interna padrão Li-SOCl2 tamanho D de 19Ah, que é fácil de comprar online, pode ser instalado e implantado em ambiente externo sem alimentação adicional.

- Opção 2: o registrador de dados pode funcionar no modo de Potência Constante com uma fonte de alimentação externa de 12V DC. Fornecemos um Kit de Caixa de Junção correspondente para que o registrador de dados possa ser rapidamente montado.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/3.png"/></div>

# Suporta Sensores Industriais de Diferentes Interfaces

O Registrador de Dados LoRaWAN S2100 é um coletor de canal único e suporta apenas um dos seguintes protocolos por vez:

RS485: suporta protocolo padrão RS485 Modbus-RTU
Analógico: 2 x 0 ~ 10V ou 2 x 4 ~ 20mA.
GPIO: 1 x GPIO, coleta sinal de nível ou de pulso

:::tip
Modbus-RTU: este protocolo usa principalmente interfaces seriais RS-232 ou RS-485 para comunicações e é suportado por todos os programas comerciais de SCADA, IHM, servidor OPC e software de aquisição de dados disponíveis no mercado. Isso torna muito fácil integrar equipamentos compatíveis com Modbus em aplicações de monitoramento e controle novas ou existentes.

GPIO: significa General Purpose Input/Output. É uma interface padrão usada para conectar microcontroladores a outros dispositivos eletrônicos. Por exemplo, pode ser usada com sensores, diodos, displays e módulos System-on-Chip.
:::

# Aplicação

<div align="center"><img width="{800}" src="https://wdcdn.qpic.cn/MTY4ODg1NTA2NTM1OTkxNw_136830_-0LyGczsW0uya6Pi_1670038120?w=1280&h=696.6093366093365"/></div>
