---
description: Grove-6-Axis_Accelerometer&Gyroscope(BMI088)
title: Grove - 6-Axis Accelerometer&Gyroscope(BMI088)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-6-Axis_Accelerometer&Gyroscope_BMI088
sku: 101020584
last_update:
  date: 1/6/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-6-Axis_Accelerometer&Gyroscope_BMI088/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/main.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/main.jpg" alt="pir" width={600} height="auto" /></p>

O Grove - 6-Axis Accelerometer&Gyroscope(BMI088) é uma Unidade de Medição Inercial (IMU) de alto desempenho com 6 DoF (graus de liberdade) e alta supressão de vibração. Este sensor é baseado no BOSCH BMI088, que é uma IMU de alto desempenho com alta supressão de vibração. O sensor de 6 eixos combina um giroscópio triaxial de 16 bits e um acelerômetro triaxial de 16 bits. Em especial, você pode usar este sensor em drones e aplicações de robótica em ambientes exigentes.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-(BMI088)-p-3188.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-(BMI088)-p-3188.html)

## Recursos

- O BM1088 é projetado para drones, robótica e aplicações industriais com requisitos de desempenho desafiadores.
- Ampla faixa de medição de aceleração (até 24g)
- O acelerômetro apresenta um baixo TCO de 0,2 mg/K e baixo ruído espectral de apenas 230 pg/sqrt(Hz) na faixa de medição mais ampla de ± 24 g

## Especificações

|Item|Valor|
|---|---|
|Tensão de Operação|3.3V / 5V|
|Faixa de medição e sensibilidade|**Accelerometer** : ±3g @10920 LSB/g / ±6g @5460 LSB/g / ±12g @2730 LSB/g / ±24g @1365 LSB/g / **Gyroscope** : ±125°/s @262.1 LSB/°/s / ±250°/s @131.1 LSB/°/s / ±500°/s @65.5 LSB/°/s / ±1000°/s @32.8 LSB/°/s / ±2000°/s @16.4 LSB/°/s|
|Faixa de Temperatura de Operação|-40℃ ~ +85℃|
|Offset Zero|**Accelerometer** : ±30 mg **Gyroscope**: ±1°/s|
|TCO|**Accelerometer** :±0.2 mg/K **Gyroscope**: ±0.015°/s/K|
|Interface externa| I^2^C|
|Endereço I^2^C|              **Accelerometer**: 0x19        (default) \\   0x18(optional)   **Gyroscope**:  ±1°/s0x69(default) \\  0x68(optional)|

## Aplicações Típicas

- Drones e brinquedos voadores
- Robôs industriais, hover boards
- Aplicações domésticas (por exemplo, aspirador de pó, robôs sociais, etc.)

## Visão Geral do Hardware

### Pinagem

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out_back.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out_back.jpg" alt="pir" width={600} height="auto" /></p>

### Esquema

**Alimentação**

<!-- ![](https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_1.jpg" alt="pir" width={600} height="auto" /></p>

A faixa de tensão de operação do BMI088 é de 2.4-3.6V, então usamos o chip [XC6206P30](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf) para fornecer 3,0V estáveis. A entrada do XC6206P30 varia de 1,8V a 6,0V, portanto você pode usar este módulo com o seu Arduino tanto em 3,3V quanto em 5V.

**Circuito de conversor de nível bidirecional**
<!-- ![](https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_2.jpg" alt="pir" width={600} height="auto" /></p>

Este é um circuito típico de conversor de nível bidirecional para conectar duas seções de tensão diferentes de um barramento I^2^C. O barramento I<sup>2</sup>C deste sensor usa 3,3V; se o barramento I<sup>2</sup>C do Arduino usar 5V, este circuito será necessário. No esquema acima, **Q1** e **Q2** são MOSFETs de canal N [CJ2102](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/CJ2102.pdf), que atuam como uma chave bidirecional. Para entender melhor esta parte, você pode consultar o [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, só fornecemos biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove (BMI088) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-(BMI088)-p-3188.html" target="_blank">Adquira agora</a>|

:::note
    **1** Por favor, conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo com 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - 6-Axis Accelerometer&Gyroscope(BMI088) à porta **I^2^C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC através de um cabo USB.

<!-- 
![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/connect.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino      |  Cabo Grove       | Grove (BMI088) |
|--------------- |--------------------|-----|
| GND            | Preto              | GND |
| 5V or 3.3V     | Vermelho           | VCC |
| SDA            | Branco             | SDA |
| SCL            | Amarelo            | SCL |

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Seeed_BMI088](https://github.com/Seeed-Studio/Grove_6Axis_Accelerometer_And_Gyroscope_BMI088) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para o Arduino.

- **Passo 3.** Reinicie a Arduino IDE. Abra o exemplo; você pode abri-lo das três maneiras a seguir：
    1. Abra-o diretamente na Arduino IDE através do caminho: **File --> Examples --> Grove 6-Axis Accelerometer&Gyroscope --> BM1088_Example**.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/path_1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>
    2. Abra-o no seu computador clicando em **BM1088_Example.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Grove_6Axis_Accelerometer_And_Gyroscope_BMI088-master\examples\BMI088_Example**, onde **XXXX** é o local onde você instalou o Arduino IDE.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/path_2.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/path_2.jpg" alt="pir" width={600} height="auto" /></p>

 3. Ou você pode simplesmente clicar no ícone
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)   -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>
 no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch no Arduino IDE.

```cpp

#include "BMI088.h"

float ax = 0, ay = 0, az = 0;
float gx = 0, gy = 0, gz = 0;
int16_t temp = 0;

void setup(void)
{
    Wire.begin();
    Serial.begin(115200);

    while(!Serial);
    Serial.println("BMI088 Raw Data");

    while(1)
    {
        if(bmi088.isConnection())
        {
            bmi088.initialize();
            Serial.println("BMI088 is connected");
            break;
        }
        else Serial.println("BMI088 is not connected");

        delay(2000);
    }
}

void loop(void)
{    
    bmi088.getAcceleration(&ax, &ay, &az);
    bmi088.getGyroscope(&gx, &gy, &gz);
    temp = bmi088.getTemperature();

    Serial.print(ax);
    Serial.print(",");
    Serial.print(ay);
    Serial.print(",");
    Serial.print(az);
    Serial.print(",");

    Serial.print(gx);
    Serial.print(",");
    Serial.print(gy);
    Serial.print(",");
    Serial.print(gz);
    Serial.print(",");

    Serial.print(temp);

    Serial.println();

    delay(50);
}
```

:::note
        O arquivo de biblioteca pode ser atualizado. Este código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.
:::

- **Step 4.** Faça o upload do demo. Se você não sabe como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Step 5.** Abra o **Serial Monitor** do Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de transmissão para **115200**.

:::success
     Se tudo correr bem, quando você abrir o Serial Monitor, ele poderá mostrar como abaixo:
:::

```cpp
BMI088 Raw Data
BMI088 is connected
394.41,-383.06,818.66,1.71,-4.88,-2.93,27
390.20,-385.25,830.38,5.49,0.24,1.83,27
388.37,-380.31,826.54,0.73,2.93,7.57,27
395.51,-384.16,823.79,-0.85,-5.74,5.98,27
385.80,-386.72,824.52,3.78,-5.00,1.59,27
395.51,-384.52,824.71,1.46,3.17,10.86,27
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope(BMI088).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos Eagle do Grove - 6-Axis Accelerometer&Gyroscope(BMI088)](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope(BMI088).zip)

- **[Zip]** [Biblioteca Seeed BMI088](https://github.com/Seeed-Studio/Grove_6Axis_Accelerometer_And_Gyroscope_BMI088/archive/master.zip)

- **[PDF]** [Datasheet BMI088](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/BMI088.pdf)

- **[PDF]** [XC6206 DATASHEET](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## Projeto

Este é o vídeo de apresentação deste produto, com demos simples que você pode experimentar.

<iframe width={560} height={315} src="https://www.youtube.com/embed/gPi4EWuAGtg?rel=0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
