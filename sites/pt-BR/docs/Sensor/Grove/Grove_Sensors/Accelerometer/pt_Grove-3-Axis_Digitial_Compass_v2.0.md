---
description: Grove - Bússola Digital de 3 Eixos v2.0
title: Grove - Bússola Digital de 3 Eixos v2.0
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis_Digitial_Compass_v2.0
sku: 101020492
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Digitial_Compass_v2.0/
---

<!-- ![](https://files.seeedstudio.com/wiki/Bazaar_doc/101020492/main_page.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bazaar_doc/101020492/main_page.jpg" alt="pir" width={600} height="auto" /></p>

O Grove - Bússola Digital de 3 Eixos é um sensor de bússola digital baseado no Bosch BMM150. Ele permite a medição do campo magnético em três eixos perpendiculares e a saída pode ser lida através das interfaces I2C e SPI, sendo perfeitamente adequado para aplicações móveis de 3 eixos.

Esta é a segunda geração do Grove - Bússola Digital de 3 Eixos; em comparação com a primeira versão, esta versão pode atender perfeitamente aos exigentes requisitos de todas as aplicações de 3 eixos, enquanto o preço é quase a metade da primeira versão, sendo muito econômica.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)

## Recursos

- Alta resolução
- Alta precisão de direção
- Fácil de usar

## Especificações

| Item                         | Valor                                 |
|------------------------------|---------------------------------------|
| Tensão de operação           | 3.3V / 5V                             |
| Faixa típica de campo magnético | ±1300μT (eixos x, y),  ±2500μT (eixo z) |
| Resolução de campo magnético | 0.3μT                                 |
| Faixa de ângulo de saída     | 0º ~ 360º                             |
| Interface                    | I2C                                   |
| Temperatura de operação      | -40℃ a +85 ℃                         |
| Dimensões                    | 20mm x 20mm x 15mm                    |
|I2C Address|0x13|

:::note
    Se você quiser usar vários dispositivos I2C, consulte o [Software I2C](https://wiki.seeedstudio.com/pt-br/Arduino_Software_I2C_user_guide/).
:::
:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas compatíveis

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer bibliotecas de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

## Primeiros passos

### Brincar com Arduino

#### 　Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield| Grove-3-Axis_Digitial_Compass_v2.0 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)|

- **Passo 2.** Conecte o Grove-3-Axis_Digitial_Compass_v2.0 à porta **I2C** do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC através de um cabo USB.

    <!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
     Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino_v4 | Grove-3-Axis_Digitial_Compass_v2.0  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

<div class="admonition warning">
<p class="admonition-title">Caution</p>
Please plug the USB cable gently, otherwise you may damage the interface.Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click <a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html">here</a> to buy
</div>

#### Software

**Passo 1.** Baixe a [biblioteca](https://github.com/Seeed-Studio/Grove_3_Axis_Compass_V2.0_BMM150) do Github.

**Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

**Passo 3.** Crie um novo sketch Arduino e cole o código abaixo nele ou abra o código diretamente pelo caminho: **File->Examples->Grove_3_Axis_Compass_V2.0_BMM150-master->compass**

Aqui está o código

```c
/**
 * This example
*/

#include <Arduino.h>
#include <Wire.h>
// libraries
#include "bmm150.h"
#include "bmm150_defs.h"

BMM150 bmm = BMM150();

void setup()
{
  Serial.begin(9600);

  if(bmm.initialize() == BMM150_E_ID_NOT_CONFORM) {
    Serial.println("Chip ID can not read!");
    while(1);
  } else {
    Serial.println("Initialize done!");
  }

}

void loop()
{
  bmm150_mag_data value;
  bmm.read_mag_data();

  value.x = bmm.raw_mag_data.raw_datax;
  value.y = bmm.raw_mag_data.raw_datay;
  value.z = bmm.raw_mag_data.raw_dataz;

  float xyHeading = atan2(value.x, value.y);
  float zxHeading = atan2(value.z, value.x);
  float heading = xyHeading;

  if(heading < 0)
    heading += 2*PI;
  if(heading > 2*PI)
    heading -= 2*PI;
  float headingDegrees = heading * 180/M_PI;
  float xyHeadingDegrees = xyHeading * 180 / M_PI;
  float zxHeadingDegrees = zxHeading * 180 / M_PI;

  Serial.print("Heading: ");
  Serial.println(headingDegrees);

  delay(100);
}
```

**Passo 4.** Faça o upload do código. Se você não souber como fazer o upload do código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

**Passo 5.** Abra o monitor serial para receber os dados do sensor

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial.jpg" alt="pir" width={600} height="auto" /></p>

**Passo 6.** Dentro desses 3 segundos, incline e gire a bússola para frente e para trás em todos os eixos, como mostrado na figura abaixo.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/calibrate.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/calibrate.jpg" alt="pir" width={600} height="auto" /></p>

O tempo do período de calibração pode ser alterado através do parâmetro timeout na função **calibrate(uint16_t timeout)**.

:::note
      A bússola precisa ser calibrada, caso contrário você obterá dados imprecisos! Certifique-se de ter concluído o Passo 5.
:::

**Passo 7.** Finalmente, você verá algo como a figura a seguir.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial2.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
    O valor de direção está na faixa de 0º ~ 360º, esse valor é para o eixo Y; 0º significa que o eixo Y aponta para o Norte, 90º significa que o eixo Y aponta para o Oeste, 180º significa que o eixo Y aponta para o Sul, 270º significa que o eixo Y aponta para o Leste.
:::
Aproveite sua bússola!

### Brincar com Raspberry Pi (com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - bússola de 3 eixos|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte a bússola de 3 eixos à porta I2C do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Compass_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Compass_Hat.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento e instalar o grove.py no seu Raspberry Pi.

- **Passo 2**. Execute os comandos abaixo para rodar o código.

```
virtualenv -p python3 env
source env/bin/activate
#enter commmand
grove_3_axis_compass_bmm150
```

A seguir está o código grove_3_axis_compass_bmm150.py.

```python
from __future__ import print_function
import time
import bmm150
import math


def main():
    device = bmm150.BMM150()  # Bus number will default to 1
    while (1):
        x, y, z = device.read_mag_data()

        heading_rads = math.atan2(x, y)

        heading_degrees = math.degrees(heading_rads)

        print("Magnetometer x: {0:.2f}".format(x), end=' ')
        print(" y: {0:.2f}".format(y), end=' ')
        print(" z: {0:.2f}".format(z), end=' ')
        print(" uT")

        print('heading(axis_Y point to): {0:.2f} degree'.format(heading_degrees))
        time.sleep(.250)

if __name__ == '__main__':
    main()
```

:::success
    Se tudo correr bem, você conseguirá ver o seguinte resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ grove_3_axis_compass_bmm150
Magnetometer x: -34.12  y: 36.71  z: -21.25  uT
heading(axis_Y point to): 317.10 degree
Magnetometer x: -34.49  y: 38.20  z: -16.32  uT
heading(axis_Y point to): 317.92 degree
Magnetometer x: -34.12  y: 38.20  z: -9.87  uT
heading(axis_Y point to): 318.23 degree
Magnetometer x: -32.64  y: 38.94  z: -5.69  uT
heading(axis_Y point to): 320.03 degree
Magnetometer x: -31.52  y: 38.20  z: -2.28  uT
heading(axis_Y point to): 320.47 degree
Magnetometer x: -29.67  y: 38.20  z: 0.38  uT
heading(axis_Y point to): 322.16 degree
Magnetometer x: -26.33  y: 38.20  z: 4.55  uT
heading(axis_Y point to): 325.42 degree
^CExiting


```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Eagle File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Library]**  [Grove-3_Axis_Compass_V2.0 lib](https://github.com/Seeed-Studio/Grove_3_Axis_Compass_V2.0_BMM150)
- **[PDF]** [BST-BMM150-Datasheet](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Datasheet.pdf)

- **[Zip]** [Grove-3-Axis Digital Compass v2_Eagle File](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Eagle File.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
