---
description: Introdução ao Sensor SenseCAP Combo 5-em-1 com 4G
title: Introdução
keywords:
  - SenseCAP Combo
  - Data Logger
image: https://files.seeedstudio.com/wiki/SenseCAP/Combo/SenseCAP_Combo_5in1_4G.webp
slug: /sensecap_combo_introduction
sku: 100035616
last_update:
  date: 8/23/2026
  author: Janet
createdAt: '2026-08-23'
updatedAt: '2026-08-23'
url: https://wiki.seeedstudio.com/pt-br/sensecap_combo_introduction/
---

# Introdução ao Sensor SenseCAP Combo 5-em-1 com 4G

## Visão geral

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/combo-intro.png" alt="SenseCAP Combo 5-in-1 Sensor with 4G" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Combo-5-in-1-Sensor-with-4G-p-6906.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
    </a>
</div>

<br />

[**SenseCAP Combo 5-in-1 Sensor with 4G**](https://www.seeedstudio.com/SenseCAP-Combo-5-in-1-Sensor-with-4G-p-6906.html) é um dispositivo de baixo consumo, estável e fácil de usar, projetado para monitoramento ambiental multiparâmetro. Ele mede temperatura do ar, umidade, pressão atmosférica, intensidade de luz e CO₂. 

Além disso, ele pode conectar até 10 sensores externos Modbus-RTU RS485 com um [Splitter](https://www.seeedstudio.com/RS485-p-4880.html), oferecendo alta compatibilidade com a maioria dos sensores do mercado. 

Para transmissão de dados, o dispositivo usa conectividade 4G Cat.1 e o protocolo MQTT para enviar dados ao servidor do usuário. Ele é equipado com um painel solar e uma bateria recarregável de íon de lítio de 5200mAh, garantindo mais de 2 semanas de operação contínua durante quedas de energia ou tempo chuvoso. Também suporta alimentação direta por DC. 

Para evitar perda de dados, o dispositivo pode armazenar em cache até 500.000 registros de dados localmente quando o sinal estiver fraco ou interrompido. Assim que a comunicação é restabelecida, os dados são carregados automaticamente. Os usuários também podem exportar dados históricos diretamente por meio de uma conexão local. 

Projetado para implantação plug-and-play, o dispositivo suporta instalação suspensa e em poste, tornando a implantação simples mesmo para iniciantes. Construído com materiais à prova d'água e resistentes a UV, atende a rigorosos padrões de durabilidade e é ideal para ambientes severos como estufas.

## Recursos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/combo.jpg" alt="Software Platform" width={800} height="auto" /></p>

- **Sensores múltiplos integrados:** O dispositivo inclui sensores integrados para temperatura do ar, umidade, pressão atmosférica, intensidade de luz e CO₂, etc. (as opções disponíveis variam conforme a personalização).

- **Alta escalabilidade:** Ele fornece uma interface RS485 que pode conectar até 10 sensores externos via [Splitter](https://www.seeedstudio.com/RS485-p-4880.html). E suporta sensores padrão Modbus-RTU RS485 e fornece saídas de alimentação de 5V e 12V para alimentar dispositivos externos.

- **Cache de dados confiável:** Quando os sinais 4G estão fracos ou indisponíveis, o registrador pode armazenar até 500.000 registros de dados localmente. Os dados são enviados automaticamente assim que a conectividade é restabelecida, e arquivos históricos podem ser exportados para Excel.

- **Opções flexíveis de alimentação:** O dispositivo é alimentado principalmente por um painel solar integrado e bateria interna, mas também suporta uma fonte de alimentação DC externa.

- **Baixo consumo de energia:** Com uma bateria interna de 5200mAh, o dispositivo pode operar por mais de duas semanas sem carregamento solar ou durante quedas de energia.

- **Manutenção fácil:** Ele suporta atualizações remotas de firmware OTA (Over-the-Air), reduzindo a necessidade de manutenção em campo.

- **Operação em estufas:** Projetado para ambientes de estufas e agricultura indoor, opera de forma confiável de 0°C a 40°C.

- **Design à prova de intempéries:** Com classificação IPX5 e materiais resistentes a UV, o dispositivo é protegido contra chuva e envelhecimento, tornando-o adequado para diversos ambientes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/appearance.png" alt="Software Platform" width={800} height="auto" /></p>

## Arquitetura do sistema

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/System Architecture.png" alt="SenseCAP Combo 5-in-1 Sensor with 4G" width={800} height="auto" /></p>

SenseCAP Combo 5-in-1 Sensor with 4G envia dados para a SenseCAP Cloud Platform via rede 4G Cat.1. Os usuários podem visualizar dados em tempo real, gerenciar dispositivos e recuperar dados históricos por meio do [SenseCAP Portal](https://sensecap.seeed.cc/portal/#/login) ou do aplicativo SenseCraft. A plataforma também fornece HTTP API, MQTT API e WebSocket API para desenvolvimento e integração adicionais.

## Plataforma de software tudo-em-um para gerenciamento

Totalmente integrado com a [SenseCAP Cloud Platform](https://sensecap.seeed.cc/portal/#/login) e o aplicativo SenseCraft, fornecendo uma solução ponta a ponta desde a vinculação do dispositivo via código QR e monitoramento de dados em tempo real até configuração remota de parâmetros, cache de dados e acesso à API para integração com terceiros.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/system.png" alt="Software Platform" width={800} height="auto" /></p>

## Métodos de instalação

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/Installation Methods.png" alt="Software Platform" width={800} height="auto" /></p>

SenseCAP Combo suporta dois métodos de instalação para atender a diferentes cenários de implantação.

### Instalação suspensa

O dispositivo pode ser pendurado usando um fio através do orifício de montagem na parte superior. Este método é adequado para ambientes internos, como estufas, onde há estruturas suspensas disponíveis.

### Instalação em poste

O dispositivo pode ser montado em um poste usando suportes (não incluídos no pacote). Este método é ideal para implantações externas em campo aberto.

## Aplicações

SenseCAP Combo 5-in-1 Sensor with 4G é a solução ideal para monitoramento ambiental multiparâmetro em vários cenários. Ele é amplamente utilizado em:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/Applications.png" alt="Software Platform" width={800} height="auto" /></p>

- **Estufa inteligente**: Monitoramento em tempo real de temperatura, umidade, CO₂, intensidade de luz e pressão atmosférica para otimizar as condições de crescimento das culturas; conexão de sensores externos de solo via RS485 para coleta abrangente de dados ambientais.
- **Agricultura inteligente**: Monitoramento ambiental externo para agricultura em campo aberto, pomares e vinhedos; acompanhamento de mudanças microclimáticas para apoiar decisões de agricultura de precisão.
- **Monitoramento ambiental**: Monitoramento de qualidade do ar e parâmetros meteorológicos para estações de pesquisa, locais industriais e ambientes urbanos; registro de dados de longo prazo com cache de dados confiável para áreas com cobertura celular fraca.

## Especificações

### Parâmetros gerais

| Parâmetro | Especificação |
|-----------|---------------|
| Tipo de fonte de alimentação | Interface Type-C, entrada 5V / 2A |
| Interface de expansão | 1x RS485 (Modbus-RTU) |
| Número de sensores conectáveis | Suporta até 10 sensores externos usando um Splitter |
| Saída de alimentação para sensor externo | 12V / 0,35A, 5V / 0,35A |
| Protocolo | Protocolo MQTT; suporta servidores configurados pelo usuário via Sensor Hub Configuration Tool NG |
| 4G Cat.1 | Bandas de frequência globais / APN configurável; cartão Micro SIM / 3FF<br />LTE-FDD: B1/B2/B3/B4/B5/B7/B8/B12/B13/B14/B17/B18/B19/B20/B25/B26/B28<br />LTE-TDD: B34/B38/B39/B40/B41/B66/B71 |
| Cache de dados | Armazenamento local para até 500.000 registros em cache / Suporta exportação local |
| Antena | Antena integrada |
| Interruptor / indicadores LED | 1x interruptor de energia, 2x indicadores LED |
| Grau de proteção IP | IPX5, tratamento de impermeabilização da PCBA |
| Classificação de resistência a UV | F1 |
| Material do invólucro | PC/ASA |
| Temperatura de operação | 0°C ~ 40°C <br />**Nota:** A temperatura de operação do dispositivo é limitada pelo adaptador de energia incluído, que suporta uma faixa de temperatura de operação de 0°C a 40°C. <br />O adaptador de energia foi projetado apenas para uso interno. Não exponha o adaptador de energia diretamente a ambientes externos. O adaptador de energia deve ser instalado dentro de um invólucro à prova d'água ou quadro elétrico para garantir proteção adequada.|
| Temperatura de carregamento | 0°C ~ 40°C |
| Umidade de operação | 0 ~ 100 % RH (sem condensação) |
| Bateria | Bateria recarregável de íon de lítio de 5200mAh, 3,7V |
| Painel solar | Potência máxima 1W |
| Instalação | Suspensa ou em poste (Requer fio para suspensão; suportes para montagem em poste. Não incluídos no pacote) |
| Dimensões | 202 * 202 * 175 mm |
| Peso líquido | 0,8 kg |

### Especificações dos sensores

| Parâmetro | Faixa | Precisão | Resolução |
|-----------|-------|----------|------------|
| Temperatura do ar | -40°C ~ +85°C | ±0,2°C | 0,01°C |
| Umidade do ar | 0 ~ 100% RH (sem condensação) | ±2% RH | 0,01% RH |
| Ponto de orvalho (calculado pelo algoritmo T/H) | -100°C ~ 80°C | ±2°C | 0,01°C |
| Pressão barométrica | 300 ~ 1200 hPa | 1 hPa | 10 Pa |
| Intensidade de luz | 0 ~ 200.000 Lux | ±5% | 5 Lux |
| CO₂ | 0 - 10.000 ppm | ±50 ppm ±3% \* leitura (0 - 5.000 ppm); <br /> ±5% (5.000 - 10.000 ppm) | 1 ppm |

:::note
Para projetos que exigem parâmetros ambientais adicionais, também estão disponíveis configurações personalizadas com opções de sensores estendidos. Para consultas sobre personalização, entre em contato com techsupport@seeed.io.
:::

## Visão geral do hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/appearance-2.png" alt="Software Platform" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/appearance-3.png" alt="Software Platform" width={800} height="auto" /></p>

## Lista de partes

|  Nome | Quantidade |
|------|----------|
| SenseCAP Combo 5-in-1 Sensor with 4G | 1 |
| Cabo USB Type-C | 1 |
| Adaptador de energia | 1 |

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
