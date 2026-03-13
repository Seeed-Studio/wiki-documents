---
description: Grove - Sensor/Encoder de Posição Rotativa Magnética de 12 bits (AS5600)
title: Grove - Sensor/Encoder de Posição Rotativa Magnética de 12 bits (AS5600)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600
sku: 101020692
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/
---



![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-preview.jpg)

O Grove - AS5600 é um sensor de posição rotativa magnética sem contato programável de alta resolução de 12 bits. O Grove - AS5600 pode funcionar como um potenciômetro magnético ou um encoder magnético com excelente confiabilidade e durabilidade.

Comparado com o potenciômetro/encoder tradicional, o Grove - AS5600 tem vantagens significativas: alta precisão, sem contato, sem limitação de ângulo de rotação. Todas essas vantagens o tornam adequado para aplicações de medição de ângulo sem contato, como braço robótico, cabeça de tripé, controle de malha fechada de motor, posicionamento de eixo de máquina-ferramenta.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600-p-4192.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Sem contato, sem limitação de ângulo de rotação
- Alta resolução de 12 bits, 4096 posições por volta
- Grove I2C, Saída PWM/Analógica
- Grande flexibilidade na excursão angular: Ângulo máximo programável de 18° até 360°

## Especificação

|Parâmetro|Valor|
|---|---|
|Tensão de alimentação|3.3V / 5V|
|Temperatura ambiente de operação| -40 – 125℃|
|Corrente de entrada|-100-100mA|
|Flexibilidade|Ângulo máximo programável de 18°-360°|
|Interface|I2C(Endereço I2C Padrão: 0x36) & Não Alterável|
|Saída|Saída Analógica/PWM|
|Resolução de Saída|DAC de 12 bits|

## Princípio de Funcionamento

O Grove - AS5600 é baseado no Efeito Hall, o sensor Hall integrado pode detectar mudanças na direção do campo magnético, portanto também não há limite de ângulo de rotação. A informação de direção do campo magnético é amplificada pelo amplificador e, com a ajuda do conversor A/D de 12 bits integrado, o módulo AS5600 pode fornecer 4096 posições por volta. A saída é selecionável, você pode usar a interface I2C para fornecer os dados RAW ou fornecer a onda PWM/onda analógica através do pino OUT. Enquanto isso, o ângulo máximo também é programável, você pode definir o ângulo máximo de 18° a 360°, o que significa que a precisão angular medida é de até 18/4096.

![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-show-NS.jpg)

:::note
O AS5600 tem certos requisitos para o campo magnético a ser medido. Use um ímã com tamanho semelhante ao do chip. O módulo deve ser medido o mais próximo possível do campo magnético e o centro do sensor AS5600 deve ser alinhado com o centro do campo magnético. A distância vertical é preferencialmente de 0,5 mm a 3 mm.
:::

![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-2.jpg)

## Visão Geral do Hardware

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-pin.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-pin.jpg" /></a></p>
</figure>
</div>

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeiros Passos

### Brincar com Arduino

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-thumbnail.jpg)
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600-p-4192.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação de Seeeduino V4.2 e Baseshield.

#### Conexão de Hardware

- **Passo 1.** Conecte o Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600) à porta **I2C** do Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/HardwarePic.jpg)

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [AS5600](https://github.com/Seeed-Studio/Seeed_Arduino_AS5600) do Github.

:::note
Consulte How to install library para [instalar a biblioteca](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) para Arduino.
:::

- **Passo 2.** Reinicie a IDE do Arduino. Abra o exemplo **readAngle** pelo caminho: **File** → **Examples** → **Seeed_AS5600-master** → **readAngle**. Através deste demo, podemos ler os ângulos de um ímã embaixo do sensor.

O código de exemplo readAngle é o seguinte:

```cpp
#include <Wire.h>
#include <AS5600.h>
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
  #define SYS_VOL   3.3
#else
  #define SERIAL Serial
  #define SYS_VOL   5
#endif

AMS_5600 ams5600;

int ang, lang = 0;

void setup()
{
  SERIAL.begin(115200);
  Wire.begin();
  SERIAL.println(">>>>>>>>>>>>>>>>>>>>>>>>>>> ");
  if(ams5600.detectMagnet() == 0 ){
    while(1){
        if(ams5600.detectMagnet() == 1 ){
            SERIAL.print("Current Magnitude: ");
            SERIAL.println(ams5600.getMagnitude());
            break;
        }
        else{
            SERIAL.println("Can not detect magnet");
        }
        delay(1000);
    }
  }
}
/*******************************************************
/* Function: convertRawAngleToDegrees
/* In: angle data from AMS_5600::getRawAngle
/* Out: human readable degrees as float
/* Description: takes the raw angle and calculates
/* float value in degrees.
/*******************************************************/
float convertRawAngleToDegrees(word newAngle)
{
  /* Raw data reports 0 - 4095 segments, which is 0.087 of a degree */
  float retVal = newAngle * 0.087;
  ang = retVal;
  return ang;
}
void loop()
{
    SERIAL.println(String(convertRawAngleToDegrees(ams5600.getRawAngle()),DEC));
}
```

- **Passo 3.** Carregue o demo. Se você não sabe como carregar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 4.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas `ctrl`+`shift`+`m` ao mesmo tempo. Defina a taxa de baud para **115200**.

- **Passo 5.** O resultado deve ser como este quando for detectado um ímã embaixo do sensor:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/AS5600%20with%20Calibrators.gif"/></div>

:::note
Um calibrador é usado aqui. O arquivo 2D do Calibrator está listado em Resources, então fique à vontade para baixá-lo e cortá-lo a laser você mesmo!
:::

## FAQ

**Q1#** Como alcançar a precisão máxima?

**A1:** Certifique-se de que o sensor Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600) esteja a uma distância/posição fixa em relação ao ímã. Gire o ímã para ir do ângulo 0 até o ângulo 360 na primeira vez para garantir que o posicionamento esteja correto.

A biblioteca [AS5600](https://github.com/Seeed-Studio/Seeed_Arduino_AS5600) também fornece uma função de teste completa para operar o sensor.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012-bit%20Magnetic%20Rotary%20Position%20Sensor%20(AS5600).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo esquemático do Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012-bit%20Magnetic%20Rotary%20Position%20Sensor%20(AS5600).zip)
- **[PDF]** [AS5600 Datasheet](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Magnetic%20Rotary%20Position%20Sensor%20AS5600%20Datasheet.pdf)
- **[DWG]** [Calibrador do Grove - 12 bit Magnetic Rotary Position Sensor(AS5600)](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012%20bit%20Magnetic%20Rotary%20Position%20Sensor(AS5600)%20Calibrator.dwg)

## Suporte Técnico e Discussão de Produto


Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
