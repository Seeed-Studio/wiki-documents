---
description: Grove - Sensor de Nível de Água
title: Grove - Sensor de Nível de Água
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Water-Level-Sensor
sku: 101020635
last_update:
  date: 1/6/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Water-Level-Sensor/
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-10CM-wiki.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-10CM-wiki.jpg" alt="pir" width={600} height="auto" /></p>

O Grove Water Level Sensor é um sensor muito preciso que pode ser útil em aplicações de medição de nível de água. Ele é completamente à prova d'água e usa almofadas capacitivas para detectar níveis de água de até 10 cm.

Usamos almofadas capacitivas na PCB do módulo e fizemos um revestimento conformal sobre a PCB para fazer com que o sensor seja protegido contra umidade, poeira, produtos químicos e altas temperaturas. Acreditamos que esta técnica permitirá que você faça medições de nível de água precisas (precisão de ±5 mm) facilmente.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Water-Level-Sensor-10CM-p-4443.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Water-Level-Sensor-10CM-p-4443.html)

## Características

- Fácil de usar (usa conector Grove sem necessidade de solda)
- Baseado em detecção capacitiva
- À prova d'água
- Revestimento Conformal
- Resistente à corrosão
- Detecta níveis de água de até 10 cm
- Interface I2C

## Especificações

|Parâmetro|Valor|
|---|---|
|Tensão de entrada|3.3V / 5V|
|Precisão de medição| ±5mm |
|Faixa de temperatura de operação|-40°C a 105°C|
|Endereços I2C|0x78 e 0x77|
|Interface|I2C|
|Dimensões|20mm x 133mm|

## Visão Geral de Hardware

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-pinout-1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-pinout-1.jpg" /></a></p>
  </figure>
</div>

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-UPDI.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-UPDI.png" /></a></p>
  </figure>
</div>

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros Passos

### Brincar com Arduino

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - Water Level Sensor|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-10CM-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Water-Level-Sensor-10CM-p-4443.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação de Seeeduino V4.2 e Baseshield.

#### Conexão de Hardware

- **Passo 1.** Conecte o Grove - Water Level Sensor à porta **I2C** do Grove - Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino a um PC via cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Connection.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Connection.png" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.**  Abra a Arduino IDE e crie um novo arquivo, depois copie o código a seguir para o novo arquivo.

```cpp
#include <Wire.h>

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define SERIAL SerialUSB
#else
#define SERIAL Serial
#endif

unsigned char low_data[8] = {0};
unsigned char high_data[12] = {0};


#define NO_TOUCH       0xFE
#define THRESHOLD      100
#define ATTINY1_HIGH_ADDR   0x78
#define ATTINY2_LOW_ADDR   0x77

void getHigh12SectionValue(void)
{
  memset(high_data, 0, sizeof(high_data));
  Wire.requestFrom(ATTINY1_HIGH_ADDR, 12);
  while (12 != Wire.available());

  for (int i = 0; i < 12; i++) {
    high_data[i] = Wire.read();
  }
  delay(10);
}

void getLow8SectionValue(void)
{
  memset(low_data, 0, sizeof(low_data));
  Wire.requestFrom(ATTINY2_LOW_ADDR, 8);
  while (8 != Wire.available());

  for (int i = 0; i < 8 ; i++) {
    low_data[i] = Wire.read(); // receive a byte as character
  }
  delay(10);
}

void check()
{
  int sensorvalue_min = 250;
  int sensorvalue_max = 255;
  int low_count = 0;
  int high_count = 0;
  while (1)
  {
    uint32_t touch_val = 0;
    uint8_t trig_section = 0;
    low_count = 0;
    high_count = 0;
    getLow8SectionValue();
    getHigh12SectionValue();

    Serial.println("low 8 sections value = ");
    for (int i = 0; i < 8; i++)
    {
      Serial.print(low_data[i]);
      Serial.print(".");
      if (low_data[i] >= sensorvalue_min && low_data[i] <= sensorvalue_max)
      {
        low_count++;
      }
      if (low_count == 8)
      {
        Serial.print("      ");
        Serial.print("PASS");
      }
    }
    Serial.println("  ");
    Serial.println("  ");
    Serial.println("high 12 sections value = ");
    for (int i = 0; i < 12; i++)
    {
      Serial.print(high_data[i]);
      Serial.print(".");

      if (high_data[i] >= sensorvalue_min && high_data[i] <= sensorvalue_max)
      {
        high_count++;
      }
      if (high_count == 12)
      {
        Serial.print("      ");
        Serial.print("PASS");
      }
    }

    Serial.println("  ");
    Serial.println("  ");

    for (int i = 0 ; i < 8; i++) {
      if (low_data[i] > THRESHOLD) {
        touch_val |= 1 << i;

      }
    }
    for (int i = 0 ; i < 12; i++) {
      if (high_data[i] > THRESHOLD) {
        touch_val |= (uint32_t)1 << (8 + i);
      }
    }

    while (touch_val & 0x01)
    {
      trig_section++;
      touch_val >>= 1;
    }
    SERIAL.print("water level = ");
    SERIAL.print(trig_section * 5);
    SERIAL.println("% ");
    SERIAL.println(" ");
    SERIAL.println("*********************************************************");
    delay(1000);
  }
}

void setup() {
  SERIAL.begin(115200);
  Wire.begin();
}

void loop()
{
  check();
}
```

- **Passo 3.** Envie o demo. Se você não sabe como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 4.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas `ctrl`+`shift`+`m` ao mesmo tempo. Configure o baud rate para **115200**.

- **Passo 5.** O resultado deve ser assim quando o sensor estiver na água:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Result.gif" /></div>

### FAQ

**Q1#** Aplicações úteis?

**A1:** Aqui fornecemos uma aplicação simples usando o **Grove - Water Level Sensor** com **Buzzer** e **módulo LED** para detecção de nível de água. Por favor, verifique o [código completo](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/water-level-sensor-demo.ino) aqui.

<!-- ![](https://files.seeedstudio.com/products/101020635/img/water%20level.2020-01-17%2018_27_47.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020635/img/water%20level.2020-01-17%2018_27_47.gif" alt="pir" width={600} height="auto" /></p>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/res/Grove%20-%20Water%20Level%20Sensor%20(10CM)_SCH%26PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo esquemático do Grove - Water Level Sensor (10CM)](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/res/Grove%20-%20Water%20Level%20Sensor%20(10CM)_SCH%26PCB.zip)
- **[PDF]** [ATtiny1616-1617-Automotive-Data-Sheet](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/res/ATtiny1616-1617-Automotive-Data-Sheet.pdf)

## Suporte Técnico e Discussão de Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x no seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width="{800}" src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
