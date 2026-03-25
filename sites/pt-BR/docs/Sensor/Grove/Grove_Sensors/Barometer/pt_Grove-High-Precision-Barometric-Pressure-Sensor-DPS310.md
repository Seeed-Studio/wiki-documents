---
description: Grove - Sensor de Pressão Barométrica de Alta Precisão DPS310
title: Grove - Sensor de Pressão Barométrica de Alta Precisão DPS310
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-High-Precision-Barometric-Pressure-Sensor-DPS310
sku: 101020812
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-High-Precision-Barometric-Pressure-Sensor-DPS310/
---

Grove - Sensor de Pressão Barométrica de Alta Precisão (DPS310)

<!-- ![](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-wiki.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-wiki.jpg" alt="pir" width={600} height="auto" /></p>

A detecção de pressão barométrica é muito útil em medições ambientais ou de altitude. O sensor barométrico Grove é baseado no Infineon DPS310, um sensor de pressão de ar barométrica digital miniaturizado com alta precisão. Ele pode medir uma faixa de pressão de 300 a 1200 hPa, com precisão de ±0,002 hPa, o que significa que você pode detectar mudanças de altitude dentro de ±2 cm no máximo.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Y1.png"  height="48" width="300" /></a></p> -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)

## BMP280 vs. BME280 vs. DPS310

Nós já lançamos o [Grove - Barometer Sensor (BMP280)](https://wiki.seeedstudio.com/pt-br/Grove-Barometer_Sensor-BMP280/) e o [Grove - Barometer Sensor(BME280)](https://wiki.seeedstudio.com/pt-br/Grove-Barometer_Sensor-BME280/), deixe-nos mostrar o quão poderoso o Grove-DPS310 é por meio da comparação na tabela abaixo.

| ITEM | Grove-BMP280 | Grove-BME280 | Grove-DPS310 |
|------|--------------|--------------|--------------|
| Faixa de Pressão    | 300 ~ 1100 hPa | 300 ~ 1100 hPa | 300 ~ 1200 hPa | 
| Faixa de Temperatura | -40 ~ 85 ℃  | -40 ~ 85 ℃   | -40 ~ 85 °C   |
| Precisão de Pressão |  -  |  -  | ± 0.002 hPa (ou ±0.02 m) |
| Exatidão da Pressão (Absoluta) | ± 1 hPa (ou ±8 m) |± 1 hPa (ou ±8 m) |± 1 hPa (ou ±8 m)|
| Exatidão da Pressão (Relativa)| ± 0.12 hPa| ± 0.12 hPa| ± 0.06 hPa (ou ±0.5 m)|
| Resolução de Pressão| 0.18 Pa | 0.18 Pa | 0.06 Pa |
| Umidade|  -  | 0 ~ 100% |  -  |
| Comunicação | I<sup>2</sup>C/SPI | I<sup>2</sup>C/SPI | I<sup>2</sup>C/SPI |

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação|3.3V / 5V|
|Pressão de ar de operação|300 a 1200hPa|
|Precisão|±0.002hPa|
|Interface|I<sup>2</sup>C,SPI|
|Endereço I<sup>2</sup>C|O endereço padrão é 0x77, quando em curto-circuito, o endereço é 0x76|

:::note

    Ao comunicar no modo SPI, não selecione o endereço I<sup>2</sup>C como 0x76, caso contrário o SPI não conseguirá ler os dados normalmente (como I<sup>2</sup>C e SPI compartilham pinos, o endereço I<sup>2</sup>C como 0x76 é equivalente ao aterramento do pino MOSI).
:::

## Características

- Alta precisão de pressão: ± 0.002 hPa (ou ±0.02 m)
- Alta exatidão de pressão: ± 0.06 hPa (ou ±0.5 m) - Relativa; ± 1 hPa (ou ±8 m) - Absoluta
- Ampla faixa: Pressão: 300 –1200 hPa; Temperatura: -40 – 85 °C.
- Fácil de usar: Grove IIC (com interrupção) / SPI
- Baixo consumo de energia

## Aplicações Típicas

- Navegação interna (detecção de andar, por exemplo, em shoppings e estacionamentos)
- Saúde e esportes (ganho de elevação e velocidade vertical precisos)
- Navegação externa (tempo de inicialização e melhoria de precisão do GPS, dead-reckoning, por exemplo, em túneis)
- Estação meteorológica (“Microclima” e previsões locais)
- Drones (estabilidade de voo e controle de altura)

:::tip

    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Visão Geral de Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-pin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-pin.jpg" alt="pir" width={600} height="auto" /></p>

## Plataformas Suportadas

| Arduino | Raspberry Pi | BeagleBone | Wio | LinkIt ONE |
|---------|--------------|------------|-----|------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={600} height="auto" /></p> |<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={600} height="auto" /></p>  |

:::caution

    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas bibliotecas de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note

    Se esta é a primeira vez que você trabalha com Arduino, recomendamos firmemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 |Base Shield| Sensor de Pressão Barométrica de Alta Precisão |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)|

:::note

    **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use um cabo USB com 4 fios internos, cabos com 2 fios não conseguem transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

    **2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Sensor de Pressão Barométrica de Alta Precisão (DPS310) à porta **I<sup>2</sup>C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

#### Software

:::note

    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [DPS310-Pressure-Sensor](https://github.com/Infineon/DPS310-Pressure-Sensor.git) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Copie o código para a IDE do Arduino e faça o upload.

```cpp
#include <Dps310.h>

Dps310 Dps310PressureSensor = Dps310();

void setup()
{
  Serial.begin(9600);
  while (!Serial);
  Dps310PressureSensor.begin(Wire);
  Serial.println("Init complete!");
}

void loop()
{
  float Detection_array[10];
  uint8_t oversampling = 7;
  int16_t ret;
  int i;
  int size = 10;
  int state1;
  int state2;
/*In the following two cycles, the pressure state at the pre and post time was detected respectively.
  The sampling quantity was 10. The values with large deviation were removed, and the average value was calculated.*/
      ret = Dps310PressureSensor.measurePressureOnce(Detection_array[0], oversampling);
      state1 = Detection_array[0];
 for (i = 1; i < 9; i++)
  {
     ret = Dps310PressureSensor.measurePressureOnce(Detection_array[i], oversampling);
       if (Detection_array[i] - Detection_array[i - 1] < 5)
      {
        state1 += Detection_array[i];
      }
      else
      {
        size -= 1;
      }
  } 
 state1 = state1 / size;
 delay(100);


      ret = Dps310PressureSensor.measurePressureOnce(Detection_array[0], oversampling);
      state2 = Detection_array[0];
 for (i = 1; i < 9; i++)
  {
      ret = Dps310PressureSensor.measurePressureOnce(Detection_array[i], oversampling);
      if (Detection_array[i] - Detection_array[i - 1] < 5)
      {
        state2 += Detection_array[i];
      }
      else
      {
        size -= 1;
      }
  }
  state2 = state2 / size;

 if (ret != 0)
   {
    Serial.print("FAIL! ret = ");
    Serial.println(ret);
   }
/*Calculate the difference in air pressure to determine if you fall*/
    else if (state2 - state1 > 4)
     {
      Serial.println("You fell down. Do you need help?");
      delay(5000);
     }
    else
      Serial.println("It's ok!");
}

/*********************************************************************************************************
  END FILE
*********************************************************************************************************/
```

- **Passo 4.** Faça o upload da demonstração. Se você não souber como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o monitor serial. Se tudo correr bem e se você simular uma queda ou deixá-lo cair no chão, ele dirá se você precisa de ajuda.

## Recursos

- **[Library]** [DPS310-Pressure-Sensor](https://github.com/Seeed-Studio/Seeed_Arduino_DPS310.git)
- **[Datasheet]** [DPS310-Datasheet](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/res/DPS310-datasheet.pdf)
- **[Zip]** [Grove-High-Precision-Barometer-Sensor-(DPS310)](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/res/Grove%20-%20High%20Precision%20Barometer%20Sensor%20(DPS310)_v1.0.zip)

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/res/Grove%20-%20High%20Precision%20Barometer%20Sensor%20(DPS310)_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241,241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}} />

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
