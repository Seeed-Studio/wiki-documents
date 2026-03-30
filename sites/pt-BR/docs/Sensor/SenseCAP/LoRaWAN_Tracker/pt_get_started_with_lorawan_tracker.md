---
description: Primeiros passos com o LoRaWAN Tracker
title: Primeiros passos com o LoRaWAN Tracker
keywords:
  - Tracker
  - LoRaWAN
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /get_started_with_lorawan_tracker
sku: 114993591
sidebar_position: 2
last_update:
  date: 1/9/2026
  author: Janet
createdAt: '2025-03-03'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/get_started_with_lorawan_tracker/
---

# Primeiros passos com o LoRaWAN Tracker

Este capítulo mostra como configurar rapidamente o seu SenseCAP T1000-E LoRaWAN Tracker com o aplicativo SenseCraft.
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-114993591-t1000-e-lorawan.jpg" alt="pir" width={800} height="auto" /></p>

## Visão geral do hardware

### Diagrama

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/diagram.png" alt="pir" width={800} height="auto" /></p>

### Descrições dos pinos

|No.|Nome|Função|Descrição|
| :- | :- | :- | :- |
|1|P0.00|XL1|Conexão para cristal de 32,768 kHz|
|2|P0.01|XL2|Conexão para cristal de 32,768 kHz|
|3|P0.02|<p>Entrada/saída digital</p><p>Entrada analógica</p>|Detecção do nível da bateria|
|4|P0.03|<p>Entrada/saída digital</p><p>Entrada analógica</p>|IO do LED vermelho|
|5|P0.04|<p>Entrada/saída digital</p><p>Entrada analógica</p>|Detecção da tensão VCC|
|6|P0.05|<p>Entrada/saída digital</p><p>Entrada analógica</p>|Detecção de inserção do carregador, deve ser configurado como sem pullup ou pulldown|
|7|P0.06|Entrada/saída digital|IO da tecla, deve ser configurado como input_pulldown|
|8|P0.07|Entrada/saída digital|LR1110 BUSY|
|9|P0.08|Entrada/saída digital|AG3335 VRTC EN|
|10|P0.09|Entrada NFC|NC|
|11|P0.10|Entrada NFC|NC|
|12|P0.11|Entrada/saída digital|SPI SCK|
|13|P0.12|Entrada/saída digital|SPI CS|
|14|P0.13|Entrada/saída digital|UART1 TX para AG3335|
|15|P0.14|Entrada/saída digital|UART1 RX para AG3335|
|16|P0.15|Entrada/saída digital|Interrupção RTC do AG3335|
|17|P0.16|Entrada/saída digital|UART1 TX para depuração|
|18|P0.17|Entrada/saída digital|UART1 RX para depuração|
|19|P0.18|Reset|Reset|
|20|P0.19|Entrada/saída digital|QSPI Clock para FLASH|
|21|P0.20|Entrada/saída digital|QSPI CS para FLASH|
|22|P0.21|Entrada/saída digital|QSPI IO0 para FLASH|
|23|P0.22|Entrada/saída digital|QSPI IO1 para FLASH|
|24|P0.23|Entrada/saída digital|QSPI IO2 para FLASH|
|25|P0.24|Entrada/saída digital|IO do LED verde|
|26|P0.25|Entrada/saída digital|PWM do buzzer|
|27|P0.26|Entrada/saída digital|I2C SDA|
|28|P0.27|Entrada/saída digital|I2C SCL|
|29|P0.28|<p>Entrada/saída digital</p><p>Entrada analógica</p>|NC|
|30|P0.29|<p>Entrada/saída digital</p><p>Entrada analógica</p>|Entrada ADC do sensor de luz|
|31|P0.30|<p>Entrada/saída digital</p><p>Entrada analógica</p>|NC|
|32|P0.31|<p>Entrada/saída digital</p><p>Entrada analógica</p>|Entrada ADC do sensor de temperatura|
|33|P1.00|Entrada/saída digital|QSPI IO3 para FLASH|
|34|P1.01|Entrada/saída digital|LR1110 DIO9|
|35|P1.02|Entrada/saída digital|Interrupção do acelerômetro|
|36|P1.03|Entrada/saída digital|Estado do carregador|
|37|P1.04|Entrada/saída digital|Carregamento concluído|
|38|P1.05|Entrada/saída digital|Habilitar buzzer|
|39|P1.06|Entrada/saída digital|Habilitar VCC do sensor|
|40|P1.07|Entrada/saída digital|Habilitar acelerômetro|
|41|P1.08|Entrada/saída digital|SPI MISO|
|42|P1.09|Entrada/saída digital|SPI MOSI|
|43|P1.10|Entrada/saída digital|LR1110 RESET|
|44|P1.11|Entrada/saída digital|AG3335 PWR EN|
|45|P1.12|Entrada/saída digital|Interrupção de SLEEP do AG3335|
|46|P1.13|Entrada/saída digital|Habilitar Flash|
|47|P1.14|Entrada/saída digital|AG3335 RESETB OUT|
|48|P1.15|Entrada/saída digital|Reset do AG3335|

## Visão geral do firmware de demonstração

### Descrição do posicionamento

|**Localização**|**Descrição**|
| - | - |
|GNSS|Envio das informações de longitude e latitude.<br/>(Geralmente não há sinal de GPS em ambientes internos, portanto é recomendado testar o dispositivo ao ar livre para obter a localização)|
|Wi-Fi|Envio do endereço MAC e informações de RSSI do AP Wi‑Fi.|
|Bluetooth|Envio do endereço MAC e informações de RSSI do beacon Bluetooth.|

### Botão

|**Ação do botão**|**Descrição**|
| - | - |
|Pressionar por 3 segundos|Ligar/desligar|
|Clicar no botão 3 vezes|Ativar/desativar Bluetooth|-|
|Clique duplo|Ativar/desativar alerta SOS|
|Clicar uma vez|Enviar dados de localização/bateria/sensor|

### LED

<table>
  <tr>
    <th colspan="2" valign="top"><b>Status do LED</b></th>
    <th colspan="1" valign="top"><b>Descrição</b></th>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">LED vermelho</td>
    <td colspan="1" valign="top">Aceso fixo</td>
    <td colspan="1" valign="top">Carregando</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Piscando</td>
    <td colspan="1" valign="top">Carregamento anormal</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="4">LED verde</td>
    <td colspan="1" valign="top">Aceso fixo</td>
    <td colspan="1" valign="top">
      <p>Dispositivo em modo DFU.</p>
      <p>Reinicie o dispositivo para sair do modo DFU (pressione e segure o botão e solte-o imediatamente após conectar o cabo de carregamento)</p>
    </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">
      <p>Ligado 500ms/Desligado 1s</p>
    </td>
    <td colspan="1" valign="top">Bluetooth ligado</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Respiração</td>
    <td colspan="1" valign="top">Ingressando na rede LoRaWAN</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Pisca rápido por 2s e depois apaga </td>
    <td colspan="1" valign="top">Ingressou na rede LoRaWAN com sucesso</td>
  </tr>
</table>

### Função do sensor

O SenseCAP T1000 Tracker está equipado com 3 sensores: sensor de temperatura, sensor de luz e acelerômetro de 3 eixos.
Você pode escolher ativar ou desativar esses sensores:

:::note
Quando os sensores estão ligados, o dispositivo consumirá mais energia.
:::

|**Sensor**|**Descrição**|
| - | - |
|Temperatura|<p>Sensor de temperatura independente onboard.</p><p>Pode haver algum atraso na medição de temperatura aqui, porque ele é separado do invólucro.</p><p>Faixa: -20 a 60℃; Precisão: ± 1℃ (mín 0,5℃, máx 1℃); Resolução: 0,1℃</p>|
|Luz|<p>O sensor de luz não é o valor real de lúmens monitorado, mas uma porcentagem da luz do escuro ao claro. Principalmente pode ser usado para monitoramento antiviolação e alguns monitoramentos sensíveis à luz.</p><p>Faixa: 0 a 100% (0% é escuro, 100% é o mais claro)</p>|
|Acelerômetro de 3 eixos|Definindo o valor da aceleração, eventos de movimento e de impacto são acionados.|

### Bateria

A vida útil da bateria depende de fatores como intervalo de uplink, uso dos sensores, distância de transmissão LoRa e temperatura de operação. A vida útil prevista da bateria é baseada em um ambiente de trabalho típico (25°C) e serve apenas como referência. A vida útil real da bateria pode variar.

**EU868(1C/SF12)**

|Intervalo de envio|1 minuto|5 minutos |60 minutos|1 dia|
|--|--|--|--|--|
|Vida útil da bateria (dia)|2,46|11,72|84,68|184,86|

**US915(1C/SF9)**

|Intervalo de envio|1 minuto|5 minutos |60 minutos|1 dia|
|--|--|--|--|--|
|Vida útil da bateria (dia)|2,89|13,66|92,59|186,83|

## Primeiros passos

Pressione o botão por 3s para ligar o dispositivo; uma melodia ascendente indica que o dispositivo foi ligado com sucesso.

### Conectar via aplicativo

- **Passo 1:** Baixar o aplicativo `SenseCraft`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

Faça login no aplicativo SenseCraft.

:::tip
Selecione Server Location como `Global`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/global-version.png" alt="pir" width={200} height="auto" /></p>
:::

- **Passo 2:** Adicionar dispositivo

Clique na aba `Add Device` no canto superior direito e, em seguida, escaneie o código QR na etiqueta do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

### Configurar o dispositivo

- Navegue até a página `User` -> `Device Bluetooth Configuration`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/config-ppa.png" alt="pir" width={200} height="auto" /></p>

- **Clique no botão 3 vezes** para entrar no modo de configuração. Nome do dispositivo: **T1000-E xxxx** (os últimos quatro dígitos do endereço MAC).

#### Configuração rápida

Para começar rapidamente com a `SenseCAP cloud`, você pode selecionar `Quick Configuration`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/quick-config.png" alt="pir" width={800} height="auto" /></p>

Configure o `Frequency Plan` de acordo com a sua região e defina o `Uplink Interval` desejado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/quick-1.png" alt="pir" width={200} height="auto" /></p>

#### Configuração avançada

Para uso avançado, selecione `Advanced Configuration`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/advan-config.png" alt="pir" width={800} height="auto" /></p>

Você pode ver as informações atuais do dispositivo, que incluem o `device EUI`, `hardware/software version`, `battery`, etc.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/info-dev.png" alt="pir" width={250} height="auto" /></p>

Navegue até `Settings` para configurar os parâmetros.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/setting-page.png" alt="pir" width={600} height="auto" /></p>

- **Configuração LoRa**

<table>
  <tr>
    <th colspan="1"></th>
    <th colspan="1" valign="top"><b>Parâmetros</b></th>
    <th colspan="1" valign="top"><b>Descrição</b></th>
  </tr>
  <tr>
    <td colspan="1" rowspan="5">Plataforma</td>
    <td colspan="1" valign="top">SenseCAP para The Things Network（por padrão）</td>
    <td colspan="1" valign="top">
      <p>Um servidor TTN proprietário da SenseCAP. Funciona imediatamente quando pareado com um gateway SenseCAP. </p>
      <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCA Outdoor Gateway</span></a><br />
      <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCA Indoor Gateway</span></a>
    </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">SenseCAP para Helium</td>
    <td colspan="1" valign="top">
      <p>Um console Helium privado da SenseCAP. </p>
      <p>Funciona imediatamente com o aplicativo SenseCAP Mate e o Portal.</p>
    </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Helium</td>
    <td colspan="1" valign="top">Servidor público Helium</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">The Things Network</td>
    <td colspan="1" valign="top">Servidor público TTN</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Outra plataforma</td>
    <td colspan="1" valign="top">Outro servidor de rede LoRaWAN</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Plano de Frequência</td>
    <td colspan="1" valign="top">EU868/US915/AU915/KR920/IN865/AS923-1/AS923-2/AS923-3/AS923-4</td>
    <td colspan="1" valign="top">EU868 por padrão</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Política de Pacotes</td>
    <td colspan="1" valign="top">1C</td>
    <td colspan="1" valign="top">Ativado por padrão</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">LoRaWAN ADR</td>
    <td colspan="1" valign="top">Ativado por padrão</td>
    <td colspan="1" valign="top">Ativado por padrão</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Restaurar Configuração LoRa</td>
    <td colspan="1" valign="top">Ativado por padrão</td>
    <td colspan="1" valign="top">Ativado por padrão</td>
  </tr>
</table>

- **Configuração Geral**

<table>
  <tr>
    <th colspan="1"></th>
    <th colspan="1" valign="top"><b>Parâmetros</b></th>
    <th colspan="1" valign="top"><b>Descrição</b></th>
  </tr>
  <tr>
    <td colspan="1">Acelerômetro de 3 eixos</td>
    <td colspan="1" valign="top">Ativar/Desativar, desativado por padrão</td>
    <td colspan="1" valign="top">Enviar os dados do acelerômetro de 3 eixos</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">Modo de Relatório SOS</td>
    <td colspan="1" valign="top">Único (por padrão)</td>
    <td colspan="1" valign="top">Enviar dados e relatar o evento SOS uma vez.<br/>Alarme do buzzer por 3 segundos </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Contínuo</td>
    <td colspan="1" valign="top">Enviar dados e relatar o evento SOS a cada minuto, termina após 30 vezes.<br/>Alarme do buzzer por 30 segundos</td>
  </tr>
  <tr>
    <td colspan="1">Intervalo de Uplink (min)</td>
    <td colspan="1" valign="top">1-10080min, 60min por padrão</td>
    <td colspan="1" valign="top">Enviar dados em intervalos.<br/>Quanto maior a frequência, maior o consumo de energia</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="7">Estratégia de Geolocalização</td>
    <td colspan="1" valign="top">Somente GNSS (por padrão)</td>
    <td colspan="1" valign="top">Usa apenas sistemas de satélite GPS para determinar a posição</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Somente Wi-Fi</td>
    <td colspan="1" valign="top">Envia o endereço MAC e informações de RSSI do AP Wi-Fi</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Somente Bluetooth</td>
    <td colspan="1" valign="top">Envia o endereço MAC e informações de RSSI do beacon Bluetooth</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">GNSS + Wi-Fi</td>
    <td colspan="1" valign="top">Usa posicionamento GPS primeiro, se o GPS falhar, então usa Wi-Fi em um ciclo de geolocalização</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Bluetooth + GNSS</td>
    <td colspan="1" valign="top">Usa posicionamento por Bluetooth primeiro, se o Bluetooth falhar, então usa GNSS em um ciclo de geolocalização</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Bluetooth + Wi-Fi</td>
    <td colspan="1" valign="top">Usa posicionamento por Bluetooth primeiro, se o Bluetooth falhar, então usa Wi-Fi em um ciclo de geolocalização</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Bluetooth + Wi-Fi + GNSS</td>
    <td colspan="1" valign="top">Usa Bluetooth, Wi-Fi e GNSS para posicionamento sucessivamente (muda para o próximo tipo de posicionamento após um tipo falhar)</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">GNSS(GPS)</td>
    <td colspan="1" valign="top">Tempo Máximo de Varredura GNSS (s)</td>
    <td colspan="1" valign="top">10-120s, 30s por padrão</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">Varredura IBeacon</td>
    <td colspan="1" valign="top">Número máximo de varreduras BLE</td>
    <td colspan="1" valign="top">3-5, 3 por padrão</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Tempo limite de Varredura (s)</td>
    <td colspan="1" valign="top">3-10s, 3s por padrão</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">UUID de Grupo (Hex)</td>
    <td colspan="1" valign="top">Definir Filtro de UUID, até 16bytes. <br/>Por exemplo, se definido como '01 020304', irá filtrar beacons com o padrão '0102 03 04 xx xx xx ...'</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Varredura Wi-Fi</td>
    <td colspan="1" valign="top">Número máximo de varreduras Wi-Fi</td>
    <td colspan="1" valign="top">3-5, 3 por padrão</td>
  </tr>
</table>

### Visualização de Dados do Dispositivo

#### SenseCraft App

Verifique a Localização no APP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### SenseCAP Portal

A principal função do SenseCAP Portal é gerenciar dispositivos SenseCAP e armazenar dados. Ele é construído sobre o Azure, um serviço de nuvem seguro e confiável da Microsoft. Os usuários podem solicitar uma conta e vincular todos os dispositivos a essa conta. O SenseCAP Portal fornece um portal web e API. O portal web inclui Dashboard, Gerenciamento de Dispositivos, Gerenciamento de Dados e Gerenciamento de Chave de Acesso. A API é aberta aos usuários para desenvolvimento adicional.

- **Dashboard:** Inclui Visão Geral do Dispositivo, Anúncio, Dados de Cena e Gráfico de Dados, etc.
- **Gerenciamento de Dispositivos:** Gerenciar dispositivos SenseCAP.
- **Gerenciamento de Dados:** Gerenciar dados, incluindo seção de Tabela de Dados e Gráfico, fornecendo métodos para pesquisar dados.
- **Sistema de Subcontas:** Registrar subcontas com diferentes permissões.
- **Gerenciamento de Chave de Acesso:** Gerenciar Chave de Acesso (para acessar o serviço da API), incluindo Criação de Chave, Atualização de Chave e Verificação de Chave.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### Visualização de Dados do Dispositivo

Faça login no [SenseCAP Portal](http://sensecap.seeed.cc)

Se você criou uma conta pelo APP, pode fazer login diretamente.

1) Selecione registrar conta, insira as informações de e-mail e clique em "register", o e-mail de registro será enviado para a caixa de correio do usuário

2) Abra o e-mail "SenseCAP…", clique no link de redirecionamento, preencha as informações relevantes e conclua o registro

3) Volte para a interface de login e conclua o login

Verifique o [Guia do Usuário do SenseCAP Portal](https://sensecap-docs.seeed.cc/quickstart.html) para mais detalhes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API

A SenseCAP API é para que os usuários gerenciem dispositivos IoT e dados. Ela inclui 3 tipos de métodos de API: protocolo HTTP, protocolo MQTT e protocolo Websocket.

- Com a HTTP API, os usuários podem gerenciar dispositivos LoRa, para obter dados brutos ou dados históricos.
- Com a MQTT API, os usuários podem assinar os dados de medição em tempo real do sensor através do protocolo MQTT.
- Com a Websocket API, os usuários podem obter dados de medição em tempo real dos sensores através do protocolo Websocket.

Por favor, verifique o [Guia do Usuário da API](https://sensecap-docs.seeed.cc/) para mais detalhes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>

## Decoder

- **[Decoder for TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000E_TTN_Decoder.js)**
- **[Decoder for Helium](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/Helium/SenseCAP_T1000E_Helium_Decoder.js)**

## Recurso

[GitHub](https://github.com/Seeed-Studio/Seeed-Tracker-T1000-E-for-LoRaWAN-dev-board)
