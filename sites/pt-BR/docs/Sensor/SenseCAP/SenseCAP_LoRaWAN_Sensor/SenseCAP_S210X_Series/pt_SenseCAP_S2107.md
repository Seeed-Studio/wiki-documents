---
description: SenseCAP S2107
title: SenseCAP S2107
keywords:
  - SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_S2107
sku: 114993078
last_update:
  date: 9/25/2023
  author: KeweiLee
createdAt: '2023-09-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_S2107/
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/0.jpg" /></div>

# Descrição do Produto

O sensor de temperatura SenseCAP LoRaWAN® S2107 mede a temperatura na faixa de -50°C ~ 300°C. Um sensor de temperatura PT1000 de alta precisão que pode suportar detecção de temperatura em amplas faixas de temperatura e cenários industriais. 
Os sensores Pt1000 (sensores de temperatura de 1000 ohms) são o tipo mais comum de termômetro de resistência de platina. O S2107 suporta um circuito de três fios para sensores PT1000 e permite a conexão de até três sensores simultaneamente.
A temperatura de contato direto é um indicador importante em muitos cenários, especialmente em detecção de líquidos, monitoramento de alimentos, cadeia fria de armazenamento, caldeiras industriais, soluções de aquicultura. O S2107 é especificamente otimizado para OTA com Bluetooth integrado, o que permite configuração e atualização rápidas. Beneficiando-se do LoRa e do design IP66, este sensor apresenta estabilidade e confiabilidade e pode cobrir um longo alcance de transmissão enquanto mantém baixo consumo de energia. Diferente de dispositivos cabeados, ele é alimentado por bateria, reduzindo a carga de trabalho e a complexidade da implantação, e pode ser desmontado e instalado em poucos minutos.


[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)

# Recursos

- Compatível com redes LoRaWAN® globais: Compatível com diferentes tipos de gateways LoRaWAN® para permitir conexão rápida com redes LoRaWAN® (suporta o plano de frequência universal de 863MHz ~ 928MHz).
- Longo alcance e alimentado por bateria: Alcance de transmissão ultralargo de 2 km em cenários urbanos e 10 km em cenários em linha de visada. Alimentado por bateria padrão Li-SOCl2 facilmente substituível (tipo: ER34615) com até 10 anos de vida útil.
- Projetado para uso em ambientes agressivos: Temperatura de operação de -40℃ ~ 85℃ e gabinete com classificação IP66, adequado para uso externo, alta exposição a UV, chuvas intensas, condições empoeiradas, etc.
- Configuração e calibração simples: A SenseCAP fornece uma experiência sem código que permite aos usuários concluir a configuração e a calibração por meio do app SenseCAP Mate.
- **Armazenamento local: Quando a rede LoRaWAN é desconectada, o dispositivo pode armazenar localmente até 2000 registros de uplink**.

# Aplicações

- Detecção de líquidos
- Monitoramento de alimentos
- Cadeia fria de armazenamento
- Soluções de aquicultura

# Especificações

|**Temperatura**||
| :- | :- |
|Faixa|<p>-50 a 300 ℃ </p><p>(Para personalização de outras faixas, contate o setor de vendas)</p>|
|Precisão|±0,5℃|
|Resolução|0,1℃|
|**Parâmetros Gerais**||
|Modelo do Produto|S2107|
|Microcontrolador|Wio-E5|
|Protocolo Suportado|LoRaWAN v1.0.3 Classe A|
|Bluetooth Integrado|Ferramenta de app para alterar parâmetros|
|Plano de Canal LoRaWAN|IN865/EU868/US915/AU915/ AS923/KR920/RU864 \*|
|Potência Máxima Transmitida|19dBm|
|Sensibilidade|-136dBm@SF12 BW=125KHz|
|Distância de Comunicação|2 a 10 km (dependendo da antena do gateway e do ambiente|
|Grau de Proteção IP|IP66|
|Temperatura de Operação|-40 a +85 °C (LoRa DTU); -50 a 200℃ (Cabo); -50 a 300℃ (Sonda)|
|Umidade de Operação|0 a 100 %UR (sem condensação)|
|Peso do Dispositivo|360g|
|Comprimento do Cabo|3 metros|
|Certificação|CE / FCC / RoHS / TELEC|
|**Bateria (Contida no equipamento)**||
|Vida Útil da Bateria|Até 10 anos\*\*|
|Capacidade da Bateria|19Ah (não recarregável)|
|Tipo de Bateria|Bateria padrão SOCl2 tamanho D|

# Como adicionar 3 sensores PT1000 ao S2107

## Preparação de hardware

Conecte 3 sensores PT1000 conforme mostrado no diagrama
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/1.jpg" /></div>

## Preparação de software

Use o app SenseCAP Mate para configurar os sensores PT1000.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/2.png" /></div>

# Decodificador de Payload

## Código do Decodificador

Por favor, acesse o [Decodificador S210X](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S210X) da SenseCAP

## Exemplo de Análise de Dados

Pacote de medição do sensor de temperatura:
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/3.png" /></div>

Pacotes enviados ao recuperar da condição offline:
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/4.png" /></div>

Informações da bateria para o S2107:
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/5.png" /></div>

# Suporte Técnico SenseCAP

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
