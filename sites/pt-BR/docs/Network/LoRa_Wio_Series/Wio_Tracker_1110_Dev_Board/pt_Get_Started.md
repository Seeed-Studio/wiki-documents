---
description: Primeiros passos com o Wio Tracker 1110
title: Primeiros passos com o Wio Tracker 1110
keywords:
  - Tracker
  - Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Get_Started_with_Wio-Trakcer_1110
sku: 114993186
sidebar_position: 2
last_update:
  date: 11/3/2023
  author: Jessie
createdAt: '2023-09-04'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Get_Started_with_Wio-Trakcer_1110/
---

Neste tutorial, vamos orientar os usuários a configurar rapidamente a placa de desenvolvimento Wio Tracker 1110 por meio do firmware de fábrica, conectá-la à nuvem SenseCAP e verificar os dados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/image.png" alt="pir" width={800} height="auto" /></p>

### Vincular a placa de desenvolvimento

Baixe o aplicativo SenseCAP Mate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

:::tip Nota
Selecione a versão **Global** ao se registrar.
:::

Clique em `+` -> `Add Device`.

Em seguida, escaneie o código QR na etiqueta da placa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-board.png" alt="pir" width={500} height="auto" /></p>

Dê um nome ao seu dispositivo e selecione o `Device Group` (opcional), depois clique em `Bind to account`.<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-dev.png" alt="pir" width={300} height="auto" /></p>

### Configurar a frequência e conectar ao gateway

Volte para a página `Device`, então você verá que a placa de desenvolvimento foi vinculada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-done.png" alt="pir" width={300} height="auto" /></p>

Clique em `Configuration Now`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/1.jpeg" alt="pir" width={300} height="auto" /></p>

Clique em `Ready, go to the next step`, que é entrar na busca de dispositivo.

:::info Nota
O dispositivo precisa ser ligado primeiro.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/2.jpeg" alt="pir" width={300} height="auto" /></p>

Pesquise o dispositivo por `Scan`, e quando encontrar um item na lista com o mesmo `S/N code` que o seu dispositivo, clique para entrar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/3.jpeg" alt="pir" width={300} height="auto" /></p>

Vá para a página `Setting`, escolha a plataforma como `SenseCAP for the Things Network` ou `SenseCAP for Helium`.

:::info Nota
Você também pode escolher outras, mas nesse caso, não poderá usar a plataforma SenseCAP.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg" alt="pir" width={300} height="auto" /></p>

<div style={{textAlign: 'center'}}>
<h2>Plataforma</h2>
  <table>
    <tbody>
      <tr>
        <td><h4>Plataforma</h4></td>
        <td><h4>Descrição</h4></td>
      </tr>
      <tr>
        <td>SenseCAP for The Things Network</td>
        <td>Plataforma padrão.
  Deve ser usada com o SenseCAP Gateway. SenseCAP constrói um servidor TTN proprietário que permite que os sensores sejam usados imediatamente quando emparelhados com um gateway SenseCAP.<br />
        <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP Outdoor Gateway</span></a><br />
        <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP Indoor Gateway</span></a></td>
      </tr>
      <tr>
        <td>SenseCAP for Helium</td>
        <td>Quando houver cobertura da rede Helium, os dados podem ser enviados via Helium. Os dispositivos rodam em um console Helium privado da SenseCAP. Os usuários não precisam criar dispositivos no console Helium, funcionando imediatamente com o SenseCAP Mate App e o Portal.<br />
        <a href="https://explorer.helium.com/" target="_blank"><span>Cobertura Helium</span></a></td>
      </tr>
      <tr>
        <td>Helium</td>
        <td>Conectar o dispositivo ao seu console público Helium</td>
      </tr>
      <tr>
        <td>The Things Network</td>
        <td>Conectar o dispositivo ao seu servidor TTN(TTS)</td>
      </tr>
      <tr>
        <td>Other Platform</td>
        <td>Outro servidor de rede LoRaWAN</td>
      </tr>
    </tbody>
  </table>
</div>

Escolha o `Frequency Plan`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/5.jpeg" alt="pir" width={300} height="auto" /></p>

Insira o `Position Uplink Interval (in minutes)` e o `Sensor Uplink Interval (in minutes)`.

| Parâmetros | Descrição |
| - | - |
| Position Uplink Interval (minutes) | Envio agendado das informações de localização.<br/>Padrão de 5 minutos.<br/>Quanto maior a frequência, maior o consumo de energia. |
| Sensor Uplink Interval (minutes) | Envio agendado dos dados do sensor.<br/>Padrão de 5 minutos.<br/>Quanto maior a frequência, maior o consumo de energia. |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/6.jpeg" alt="pir" width={300} height="auto" /></p>

Quando todas as informações em Settings estiverem de acordo com suas necessidades, você pode clicar em `Send` para transmiti-las para o **Tracker Wio 1110**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/7.jpeg" alt="pir" width={300} height="auto" /></p>

Vá para a página `Measure`, clique em `Measure`, então você obterá os valores dos sensores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/8.jpeg" alt="pir" width={500} height="auto" /></p>

### Verificar os dados

Ligue a placa de desenvolvimento e certifique-se de que há cobertura de rede nas proximidades; quando a placa de desenvolvimento estiver conectada com sucesso à rede, ela exibirá `online` na página `Device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/9.jpeg" alt="pir" width={300} height="auto" /></p>

Se a sua área tiver sinal fraco, basta instalar um gateway LoRaWAN - é tão simples quanto configurar um roteador Wi‑Fi. A beleza do LoRa está em sua flexibilidade e facilidade de expansão de rede. Essa solução confiável também é econômica. Por exemplo, o [SenseCAP M2 Indoor LoRaWAN Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) pode estender sua cobertura em até 10 km!

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_873855_RPfBjpKfW2xWddri_1693817031?w=680&h=446&type=image/png" alt="pir" width={600} height="auto" /></p>

:::tip
Coloque sua placa de desenvolvimento próxima à janela ou em um local sem obstruções, para que haja um sinal de GPS melhor e, assim, a placa possa obter os dados de localização com sucesso.
:::

Você pode verificar os dados de localização e dos sensores no aplicativo SenseCAP Mate ou no SenseCAP Portal.

**Aplicativo SenseCAP Mate**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/app-data.png" alt="pir" width={500} height="auto" /></p>

**SenseCAP Portal**

Se você criou uma conta pelo aplicativo, pode fazer login diretamente.
Vá até a página do seu dispositivo, clique em `Data` para verificar.

:::info
[SenseCAP Portal User Guide](https://sensecap-docs.seeed.cc/quickstart.html)
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/por.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/portal-da.png" alt="pir" width={800} height="auto" /></p>

### Como enviar dados imediatamente

1、Quando a placa de desenvolvimento é sacudida, causando vibrações, isso aciona **o sensor acelerômetro de três eixos** para coletar e enviar dados imediatamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake.GIF" alt="pir" width={800} height="auto" /></p>

Você pode visualizar as informações no monitor serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-shake.png" alt="pir" width={800} height="auto" /></p>

A interface do aplicativo SenseCAP Mate exibirá pacotes de dados quando o dispositivo for sacudido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake-app.JPG" alt="pir" width={300} height="auto" /></p>

2、Pressione o `BUTTON` uma vez, e o dispositivo irá coletar e enviar dados imediatamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/button.GIF" alt="pir" width={800} height="auto" /></p>

Você pode visualizar as informações no monitor serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-button.png" alt="pir" width={800} height="auto" /></p>

A interface do aplicativo SenseCAP Mate exibirá sinais de SOS e pacotes de dados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/sos-app.JPG" alt="pir" width={300} height="auto" /></p>

### Adicionar sensor Grove (opcional)

Além dos sensores integrados, as possibilidades são infinitas com a placa de desenvolvimento Wio tracker 1110. No firmware de fábrica, os seguintes sensores Grove também podem acessar esta placa e ser reconhecidos automaticamente.

<table align="center">
  <caption> <h2>Módulos Grove</h2> </caption>
  <tbody>
    <tr>
    <td><h4>Sensor</h4></td>
    <td><h4>Adquira Agora</h4></td>
    <td><h4>Sensor</h4></td>
    <td><h4>Adquira Agora</h4></td>
    </tr>
    <tr>
    <td>Sensor de Som - Baseado no amplificador LM358</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM358-amplifier-Arduino-Compatible.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/c_6.png" alt="" width={200} height="auto"/></a>
</div></td>
    <td>Sensor Barômetro de Alta Precisão-DPS310</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-high-precision-barometer-sensor-dps310-preview.jpg" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
<tr>
    <td>Sensor de Qualidade do Ar (SGP41)</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-voc-and-eco2-gas-sensor_sgp41_-v1.0-45font.jpg" alt="" width={200} height="auto"/></a>
</div></td>
    <td>Sensor de Luz Solar-SI1151</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Sunlight-Sensor.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar885583_3.jpg" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
<tr>
    <td>Sensor Ultrassônico de Distância</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove---ultrasonic-distance-sensor-preview_1.png" alt="" width={200} height="auto"/></a>
</div></td>
</tr>

  </tbody></table>

Conecte o sensor Grove à porta Grove correspondente na placa de desenvolvimento Wio Tracker.

Você também pode usar um [Grove-I2C Hub](https://www.seeedstudio.com/Grove-I2C-Hub.html) para conectar vários sensores I2C à placa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg" alt="pir" width={800} height="auto" /></p>

## Gravar Firmware

- [Firmware Mais Recente](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_app_release_sw_0.5_2024-06-06.uf2)

Clique duas vezes no botão `Reset`, deverá haver um driver `WM1110_BOOT` no seu PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

Arraste o arquivo `.uf2` para o driver. O download será executado automaticamente e, em seguida, o driver será desativado.

## SenseCAP API

SenseCAP API é para que os usuários gerenciem dispositivos e dados de IoT. Ela inclui 3 tipos de métodos de API: protocolo HTTP, protocolo MQTT e protocolo Websocket.
- Com a HTTP API, os usuários podem gerenciar dispositivos LoRa para obter dados brutos ou dados históricos.
- Com a MQTT API, os usuários podem assinar os dados de medição em tempo real do sensor por meio do protocolo MQTT.
- Com a Websocket API, os usuários podem obter dados de medição em tempo real dos sensores por meio do protocolo Websocket.

Consulte o [Guia do Usuário da API](https://sensecap-docs.seeed.cc/) para mais detalhes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>
