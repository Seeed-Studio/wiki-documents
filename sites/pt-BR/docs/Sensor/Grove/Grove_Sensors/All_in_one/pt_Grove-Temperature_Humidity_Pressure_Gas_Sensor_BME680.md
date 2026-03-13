---
description: Grove - Sensor de Gás, Pressão, Umidade e Temperatura (BME680)
title: Grove - Sensor de Gás, Pressão, Umidade e Temperatura (BME680)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.webp
slug: /Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680
sku: 101020513
last_update:
  date: 4/14/2025
  author: Priyanshu Roy
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" /></div>

O Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) é um sensor multifunção que pode medir temperatura, pressão, umidade e gás ao mesmo tempo. Ele é baseado no módulo BME680 e você pode usar este sensor em seu GPS, dispositivos de IoT ou outro dispositivo que precise desses quatro parâmetros.



<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
</div>

:::note
  O “gás” significa qualidade do ar, que é principalmente afetada pelo gás [VOCs](https://en.wikipedia.org/wiki/Volatile_organic_compound) (compostos orgânicos voláteis). Nesta data, 8 de agosto de 2018, este módulo não oferece suporte à medição de gás para algumas placas Arduino. Ele só está disponível para placas Arduino com grande memória, como a plataforma ATMEGA2560. Se você usar outra plataforma Arduino, como: Arduino Uno, Seeeduino v4.2... o valor de gás que você obtiver não será preciso.
:::

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [data logger S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

Os sensores industriais da série SenseCAP S210x proporcionam uma experiência pronta para uso em sensoriamento ambiental. Consulte o Sensor Sem Fio de Temperatura e Umidade S2101, com maior desempenho e robustez, para monitoramento da qualidade do ar. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial bem-sucedido.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 Temp do Ar &amp; Umidade</strong></a></td>
    </tr>
  </tbody>
</table>

## Recursos

- 4 em 1 para múltiplas medições
- baixo consumo
- Ampla faixa de medição
- Saída opcional:

    Os sensores individuais de umidade, pressão e gás podem ser ativados/desativados de forma independente

## Especificação

|Item|Valor|
|---|---|
|Tensão de trabalho|3.3V/5V|
|Faixa de operação|-40~+85℃; 0-100% r.H.; 300-1100hPa|
|Interface digital|I2C(até 3.4MHZ)/ SPI(3 e 4 fios, até 10MHz)|
|Endereço I2C|0x76(padrão)/ 0x77(opcional)|

## Visão Geral de Hardware

### Mapa de Pinos

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/pin_map_back.jpg" /></div>

:::caution
        Se você quiser alterar as configurações padrão, talvez seja necessário cortar o pad e soldar por conta própria, siga a imagem acima e tenha cuidado ao usar faca ou ferro de solda.
:::

## Plataformas Suportadas

|Arduino|Raspberry Pi|ESP-IDF|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/esp_idf.png" alt="esp-idf" width={200} height="auto" /></p>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas bibliotecas de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer bibliotecas de software/códigos de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove-BME680 |
|--------------|-------------|-----------------|
|<div align="center"><img height="200" src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img height="200" src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img height="200" src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Compre Agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Compre Agora</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html" target="_blank">Compre Agora</a>|

:::note
**1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use um cabo USB com 4 fios internos; cabos com 2 fios não podem transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) à porta **I2C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/7.jpg" /></div>

:::note
Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino     |  Grove-BME680           |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| SDA           | Branco                  |
| SCL           | Amarelo                 |

#### Software

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove BME680](https://github.com/Seeed-Studio/Seeed_BME680) no Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo “BME680” pelo caminho: **File --> Examples --> Seeed BME680 --> seeed_bme680_test**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/demo_path.jpg" /></div>

- **Passo 4.** Envie o código de demonstração. Se você não souber como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Se tudo correr bem, você obterá o resultado.

O resultado deve ser semelhante a:

```c
Serial start!!!
temperature ===>> 27.14 C
pressure ===>> 94.51 KPa
humidity ===>> 65.76 %
gas ===>> 101.51 Kohms


temperature ===>> 27.15 C
pressure ===>> 94.51 KPa
humidity ===>> 65.76 %
gas ===>> 101.64 Kohms


temperature ===>> 27.14 C
pressure ===>> 94.51 KPa
humidity ===>> 65.77 %
gas ===>> 101.64 Kohms


temperature ===>> 27.15 C
pressure ===>> 94.51 KPa
humidity ===>> 65.80 %
gas ===>> 101.76 Kohms

```

:::note
        1 - Para obter um valor estável e preciso, você precisa deixar o Arduino rodar o código por cerca de 2 horas. O resultado será muito mais confiável depois disso.

        2 - Para a parte de gás, trata-se de uma resistência variável que reflete o valor do gás VOC, portanto a unidade é Kohms. 

        3 - Se você quiser obter um resultado confiável para a parte de gás, use o Arduino Mega e verifique [aqui](https://github.com/Seeed-Studio/Seeed_BME680_V1)
:::

### Brincar com ESP-IDF

#### Hardware

**Materiais necessários**

<table align="center">
  <tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio Grove Base for XIAO</th>
    <th>Grove BME680 Environmental Sensor</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" style={{height: 150, objectFit: 'contain'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
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

:::note
**1** Conecte o cabo USB com cuidado, caso contrário você poderá danificar a porta. Use um cabo USB com 4 fios internos; cabos com 2 fios não conseguem transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) ao Grove Base para XIAO usando o cabo Grove.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/XIAO_Grove_BME680.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Conecte o XIAO ESP32C3 ao PC por meio de um cabo USB.

#### Software

:::note
Se esta é a primeira vez que você trabalha com ESP-IDF, recomendamos fortemente que veja [Getting Started with ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) antes de começar.
:::

- **Passo 1.** Instale o ESP-IDF seguindo o [guia oficial](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html).

- **Passo 2.** Crie um novo projeto usando o template do ESP-IDF.

- **Passo 3.** Clone o repositório do componente BME680:
```bash
cd <your_project>/components
git clone --recursive https://github.com/Priyanshu0901/grove_bme680.git
```

- **Passo 4.** Configure os pinos I2C no arquivo `sdkconfig` do seu projeto ou usando o menuconfig:
```bash
idf.py menuconfig
```
Navegue até `Component config -> BME680 Sensor Configuration` e defina:
- Pino I2C SDA: 6
- Pino I2C SCL: 7

- **Passo 5.** Copie o código de exemplo do diretório `examples` do componente para o diretório `main` do seu projeto.

- **Passo 6.** Compile e faça o flash do projeto:
```bash
idf.py build
idf.py -p /dev/ttyUSB0 flash monitor
```

A saída deve ser semelhante a:

```
I (251) main_task: Started on CPU0
I (251) main_task: Calling app_main()
I (251) BME680_EXAMPLE: BME680 sensor example started
I (261) BME680_EXAMPLE: Initializing BME680 sensor...
I (261) BME680_IF: I2C interface initialized with address: 0x76
I (271) BME680_IF: BME680 interface initialized successfully
I (281) BME680: BME680 configured successfully
I (281) BME680: BME680 initialized successfully
I (281) BME680_EXAMPLE: BME680 initialized, waiting for sensor to stabilize...
I (1291) BME680_EXAMPLE: Performing first sensor reading...
I (1411) BME680_EXAMPLE: First sensor reading successful on attempt 1
I (1411) BME680_EXAMPLE: Sensor Data:
I (1411) BME680_EXAMPLE:   Temperature: 30.46 °C
I (1411) BME680_EXAMPLE:   Pressure: 910.34 hPa
I (1411) BME680_EXAMPLE:   Humidity: 51.17 %
I (1421) BME680_EXAMPLE:   Gas Resistance: 12561.98 kOhm
I (1421) BME680_EXAMPLE:   Gas Valid: Yes
I (1431) BME680_EXAMPLE:   Data Valid: Yes
I (1561) BME680_EXAMPLE: Sensor Data:
I (1561) BME680_EXAMPLE:   Temperature: 30.50 °C
I (1561) BME680_EXAMPLE:   Pressure: 910.33 hPa
I (1561) BME680_EXAMPLE:   Humidity: 51.20 %
I (1561) BME680_EXAMPLE:   Gas Resistance: 136.83 kOhm
I (1571) BME680_EXAMPLE:   Gas Valid: Yes
I (1571) BME680_EXAMPLE:   Data Valid: Yes
I (3691) BME680_EXAMPLE: Sensor Data:
I (3691) BME680_EXAMPLE:   Temperature: 30.50 °C
I (3691) BME680_EXAMPLE:   Pressure: 910.33 hPa
I (3691) BME680_EXAMPLE:   Humidity: 51.04 %
I (3691) BME680_EXAMPLE:   Gas Resistance: 96.77 kOhm
I (3701) BME680_EXAMPLE:   Gas Valid: Yes
I (3701) BME680_EXAMPLE:   Data Valid: Yes
```

:::note
1. O código de exemplo inclui tratamento de erros e mecanismos de recuperação para falhas de leitura do sensor.
2. O sensor precisa de algum tempo para estabilizar após a inicialização, portanto as primeiras leituras podem não ser precisas.
3. O valor de resistência de gás está em kOhms e representa a qualidade do ar.
4. O sensor suporta interfaces I2C e SPI, mas o exemplo usa I2C por padrão.
5. Certifique-se de usar os pinos I2C corretos (GPIO6 para SDA e GPIO7 para SCL) ao usar com o XIAO ESP32C3.
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor_BME680.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivo Eagle do Grove-BME680](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor_BME680.zip)
- **[Library]** [Biblioteca Seeed BME680](https://github.com/Seeed-Studio/Seeed_BME680)
- **[PDF]** [Datasheet do BME680](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/BME680.pdf)

## Projeto

Este é o vídeo de introdução deste produto, com demonstrações simples, que você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/O3oHtW2TlXY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico & Discussão sobre o Produto


Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
