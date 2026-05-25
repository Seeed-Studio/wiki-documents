---
description: Um kit meshtastic DIY baseado no kit XIAO ESP32S3 & Wio-SX1262, placa de expansão XIAO, sensor Grove e módulo GNSS L76K com gabinete de acrílico.
title: Kit sanduíche de 4 camadas para Meshtastic
image: https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-08.jpg
slug: /4_layer_sandwich_for_meshtastic
sidebar_position: 6
last_update:
  date: 12/13/2024
  author: Evelyn Chen
createdAt: '2024-12-20'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/pt-br/4_layer_sandwich_for_meshtastic/
---

# Um kit Meshtastic sanduíche DIY de 4 camadas

Um nó meshtastic completo é desenvolvido com base no kit XIAO ESP32S3 & Wio-SX1262. Esta estrutura tipo sanduíche de 4 camadas, semelhante a um kit meshtastic, usa a placa de expansão XIAO como base. Por meio da interface Grove e da interface pino a pino, ela suporta uma variedade de módulos expansíveis que são suportados pelo firmware meshtastic. Também suporta o protocolo de comunicação I2C, incluindo iluminação ambiente controlável, sensores de telemetria, sensores ambientais e módulos GPS. Pode ser facilmente configurado para design modular e aplicação de funções por meio da tecnologia de comunicação meshtastic. Além disso, pode ser conectado a uma bateria externa de 3,7 V por meio do conector de bateria JST para realizar um nó móvel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-08.jpg" alt="pir" width={600} height="auto" /></p>

## Preparação de Hardware

| SKU | Nome do Produto |
| ---- | ---- |
| 102010611 | XIAO ESP32S3 & Wio-SX1262 Kit|
| 103030356 | Placa de Expansão XIAO|
| 110010024 | Case de Acrílico para Placa de Expansão XIAO |
| 109100021 | Módulo GNSS, Alimentado por Quectel L76K |
| 101020513 | Grove - Sensor de Temperatura, Umidade, Pressão e Gás (BME680) |
|  | Bateria LiPo 403040-450mA com conector JST |

:::note

1. O módulo GNSS precisa ter os pinos conflitantes modificados em sua versão anterior para que possa ser conectado ao módulo XIAO ESP32S3 de forma pino a pino. Portanto, adquira os módulos GNSS recém-estoqueados após **22 de dezembro de 2024**.
2. O arquivo DXF do case de acrílico é fornecido. Você pode usar placas de acrílico de 3 mm de espessura para cortar e montá-lo por conta própria.

:::

<div class="table-center">
  <table align="center">
    <tr>
      <th>Kit XIAO ESP32S3 & Wio-SX1262</th>
      <th>Placa de Expansão XIAO</th>
      <th>Case de Acrílico para Placa de Expansão XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110010024_preview-08.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-p-4812.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>Módulo GNSS, Alimentado por Quectel L76K</th>
      <th>Grove - Sensor de Temperatura, Umidade, Pressão e Gás (BME680)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-l76k-gnss-module-for-seeed-studio-xiao-feature.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar896611_img_0076a.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Além dos módulos acima, o kit também suporta os seguintes módulos Grove. Por favor, adquira-os de acordo com suas necessidades.

Módulos adicionais suportados:

| SKU | Nome do Produto | Link de Compra|
| ---- | ---- |---- |
| 101020932 | Grove - Sensor de Temperatura & Umidade V2.0 (DHT20) / DHT11 Atualizado/ Porta I2C | [Get One](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) |
| 101020192 | Grove - Sensor Barômetro (BMP280) | [Get One](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html) |
| 101020193 | Grove - Sensor de Temperatura, Umidade e Barômetro (BME280) | [Get One](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) |
| 101020556 | Grove - Sensor de Temperatura de Alta Precisão I2C (MCP9808) | [Get One](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) |
| 101020212 | Grove - Sensor de Temperatura & Umidade (SHT31) | [Get One](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html) |
| 101020513 | Grove - Sensor de Temperatura, Umidade, Pressão e Gás (BME680) | [Get One](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) |

## Passo 1: Gravar o Firmware Meshtastic

Certifique-se de que o firmware meshtastic já esteja pré-gravado no XIAO ESP32S3. Se não estiver, por favor grave seguindo [estas instruções](https://wiki.seeedstudio.com/pt-br/wio_sx1262_xiao_esp32s3_for_meshtastic/#gravar-firmware).

## Passo 2: Ressoldar o conector de pinos da placa de expansão XIAO

Para instalar o módulo GNSS na parte inferior da Placa de Expansão XIAO por meio de conexão pino a pino, é necessário ressoldar o conector fêmea da Placa de Expansão XIAO e substituí-lo por um conector fêmea equipado com pinos macho.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/120.png" alt="pir" width={400} height="auto" /></p>

## Passo 3: Cortar a laser o gabinete de acrílico de 3 mm

O arquivo dxf é fornecido para corte a laser.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/1.png" alt="pir" width={400} height="auto" /></p>

- [arquivo dxf](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/4_layer_sandwich_Casing.dxf)
- [arquivo dwg](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/4_layer_sandwich_Casing.dwg)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
