---
description: Grove - Sensor de Barômetro (SPA06-003)
title: Grove - Sensor de Barômetro (SPA06-003)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/show.webp
slug: /grove_barometer_sensor_spa06_003
sku: 110992164
last_update:
  date: 05/13/2025
  author: robben
createdAt: '2025-05-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/grove_barometer_sensor_spa06_003/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/SPA06-003.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-and-Barometer-Sensor-SPA06-003-p-6441.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Descrição

**Grove - Temperature and Barometer Sensor(SPA06-003)** é um sensor ambiental de alta precisão e baixo consumo que mede a temperatura e a pressão atmosférica. Ele suporta comunicação I2C e SPI, e nós fornecemos a biblioteca SPA06-003 para Arduino.

:::note

Como o sensor é bastante sensível às condições ambientais, **NÃO o toque com os dedos**.
:::

## Características

- **Ampla faixa de medição:** As medições de pressão variam de 300hPa - 1100hPa e as medições de temperatura variam de -40℃ - +85℃.
- **Alta precisão:** Precisão absoluta de ±0,3 hPa para medição de pressão e precisão de ±1 ℃ para medição de temperatura.
- **Longo tempo de espera**: Usar o FIFO permite que o processador host permaneça em modo de suspensão por períodos mais longos entre as leituras, reduzindo o consumo total de energia do sistema e alcançando uma corrente de espera tão baixa quanto 0,5 μA.
- **Interface Grove:** Possui um [conector Grove de 4 pinos, garantindo uma experiência "Plug and Play"](https://wiki.seeedstudio.com/pt-br/Grove_System/) para conexão com plataformas de hardware populares como Arduino, Raspberry Pi, Micro:bit e muitas outras.

:::tip
Para mais detalhes sobre os módulos Grove, consulte o [Sistema Grove](https://wiki.seeedstudio.com/pt-br/Grove_System/).
:::

## Especificações

<div class="table-center">
  <table align="center" border="1" cellpadding="6" cellspacing="0">
    <tr>
      <th>Parâmetro</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>Tensão de Alimentação</td>
      <td>3.3V</td>
    </tr>
    <tr>
      <td>Interface</td>
      <td>I2C e SPI</td>
    </tr>
    <tr>
      <td>Endereço I2C</td>
     <td>0x77 (default)<br />0x76</td>
    </tr>
    <tr>
      <th colspan="2">Medição de Pressão Barométrica</th>
    </tr>
    <tr>
      <td>Faixa</td>
      <td>300~1100 hPa</td>
    </tr>
    <tr>
      <td>Precisão Absoluta</td>
      <td>±0.3 hPa</td>
    </tr>
    <tr>
      <th colspan="2">Medição de Temperatura</th>
    </tr>
    <tr>
      <td>Faixa</td>
      <td>-40℃ a +85℃</td>
    </tr>
    <tr>
      <td>Precisão</td>
      <td>±1℃</td>
    </tr>
    <tr>
      <td>Dimensões</td>
      <td>40mm x 20mm x 6.5mm</td>
    </tr>
  </table>
</div>

### **BMP280 vs. BME280 vs. DPS310 vs. SPA06-003**

<div class="table-center">
  <table align="center" border="1" cellpadding="6" cellspacing="0">
    <tr>
      <th>ITEM</th>
      <th>Grove-BMP280</th>
      <th>Grove-BME280</th>
      <th>Grove-DPS310</th>
      <th>Grove-SPA06-003</th>
    </tr>
    <tr>
      <td>Faixa de Pressão</td>
      <td>300 ~ 1100 hPa</td>
      <td>300 ~ 1100 hPa</td>
      <td>300 ~ 1200 hPa</td>
      <td>300 ~ 1100 hPa</td>
    </tr>
    <tr>
      <td>Faixa de Temperatura</td>
      <td>-40 ~ 85 ℃</td>
      <td>-40 ~ 85 ℃</td>
      <td>-40 ~ 85 °C</td>
      <td>-40 ~ 85 °C</td>
    </tr>
    <tr>
      <td>Precisão de Pressão</td>
      <td>-</td>
      <td>-</td>
      <td>± 0.002 hPa (ou ±0.02 m)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Precisão de Pressão (Absoluta)</td>
      <td>± 1 hPa (ou ±8 m)</td>
      <td>± 1 hPa (ou ±8 m)</td>
      <td>± 1 hPa (ou ±8 m)</td>
      <td>± 0.3 hPa</td>
    </tr>
    <tr>
      <td>Precisão de Pressão (Relativa)</td>
      <td>± 0.12 hPa</td>
      <td>± 0.12 hPa</td>
      <td>± 0.06 hPa (ou ±0.5 m)</td>
      <td>± 0.03 hPa (ou ±0.25 m)</td>
    </tr>
    <tr>
      <td>Resolução de Pressão</td>
      <td>0.18 Pa</td>
      <td>0.18 Pa</td>
      <td>0.06 Pa</td>
      <td>0.06 Pa</td>
    </tr>
    <tr>
      <td>Umidade</td>
      <td>-</td>
      <td>0 ~ 100%</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Comunicação</td>
      <td>I2C/SPI</td>
      <td>I2C/SPI</td>
      <td>I2C/SPI</td>
      <td>I2C/SPI</td>
    </tr>
    <tr>
      <td>Preço</td>
      <td>\$9.8</td>
      <td>\$18.7</td>
      <td>\$7.5</td>
      <td>\$4.5</td>
    </tr>
  </table>
</div>

### **Lista de Peças**

<div class="table-center">
  <table align="center" border="1" cellpadding="6" cellspacing="0">
    <tr>
      <th>Item</th>
      <th>Quantidade</th>
    </tr>
    <tr>
      <td>Grove Temperature and Barometer Sensor (SPA06-003)</td>
      <td>×1</td>
    </tr>
    <tr>
      <td>Grove - Cabo de 20cm</td>
      <td>×1</td>
    </tr>
  </table>
</div>

## Aplicações

- Estação meteorológica e monitoramento do clima
- Medir temperatura, pressão e altitude

## Primeiros Passos

### Diagrama de indicação

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/Grove-Barometer_Sensor-SPA06-003-Components.png" style={{width:800, height:'auto'}}/></div>

- **Pads de solda SPI**.
- **Pads de seleção do barramento de interface**, para selecionar o barramento I<sup>2</sup>C, conecte os dois pads por soldagem (isso vem conectado por padrão); para selecionar o barramento SPI, corte os dois pads com uma faca afiada ou um ferro de solda.
- **Pads de seleção de endereço da placa escrava**, para selecionar o endereço da placa escrava e evitar colisão de endereços.

:::tip

- Se você selecionou o barramento I2C, o endereço padrão da placa escrava é 0x77 (os dois pads da direita estão conectados). Se quiser usar o endereço 0x76, conecte apenas os dois da esquerda (desconecte os dois da direita) por soldagem.
- Você pode desconectar pads apenas com uma faca afiada.
- Se você selecionou o barramento SPI, o endereço padrão da placa escrava é 0x77 (os dois pads da direita estão conectados). Se quiser usar o endereço 0x76, desconecte todos os três pads.

:::

### Hardware

**Prepare os itens abaixo:**

- *Brinque com Arduino*

| Seeeduino V4.2                                               | Base Shield                                                  | Grove-Barometer Sensor SPA06-003                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width="400" height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width="400" height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/small.jpg" alt="pir" width="350" height="auto" /></p> |
| [Adquira Agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html) | [Adquira Agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html) | [Adquira Agora](https://www.seeedstudio.com/Grove-Temperature-and-Barometer-Sensor-SPA06-003-p-6441.html) |

- *Brinque com a Série XIAO*

| Seeed Studio Grove Base para XIAO                             | XIAO ESP32-S3                                                | Grove-Barometer Sensor SPA06-003                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png"/></div> | <div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" /></div> | <div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/small.jpg" /></div> |
| [Adquira Agora](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) | [Adquira Agora](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) | [Adquira Agora](https://www.seeedstudio.com/Grove-Temperature-and-Barometer-Sensor-SPA06-003-p-6441.html) |

### Software

**Passo 1.** Inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Baixar Arduino IDE</font></span></strong>
    </a>
</div>

<br></br>

**Passo 2.** Selecione o modelo da sua placa de desenvolvimento e adicione-o ao Arduino IDE.

- Se você quiser usar **Seeed Studio XIAO SAMD21** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#Configuração-de-Software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO RP2040** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#Configuração-de-Software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO RP2350** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_rp2350_arduino/#Configuração-do-Software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO nRF52840** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#Configuração-de-Software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32C3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started#Configuração-de-Software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32C6** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/#Preparação-de-Software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32S3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started#preparação-de-software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO RA4M1** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/getting_started_xiao_ra4m1/#preparação-de-software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO MG24** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_mg24_getting_started/#preparação-de-software)** para concluir a adição.

**Etapa 3.** Baixe a biblioteca do Github e consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SPA06" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Usar barramento I2C

**Etapa 1.** Conecte seu Grove ao controlador

- *Conectar Grove ao Arduino*

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/grove_with_arduino.png" /></div>

- *Conectar Grove e XIAO*

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/grove_with_esp32.png" /></div>

Duas combinações diferentes, mas usando o mesmo código.

:::tip

Não toque, chacoalhe ou deixe este produto em vibração quando estiver funcionando. Isso causará interferência e afetará a precisão dos dados coletados.

:::

Esta tabela de conexão se aplica a todas as placas com suporte a I2C.

<div className="table-center" style={{ textAlign: 'center' }}>
  <table style={{ borderCollapse: 'collapse', margin: 'auto' }} border="1" cellPadding="6">
    <thead>
      <tr>
        <th>Placas</th>
        <th>Grove-Barometer_Sensor-SPA06-003</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>3.3V</td>
        <td>VCC</td>
      </tr>
      <tr>
        <td>GND</td>
        <td>GND</td>
      </tr>
      <tr>
        <td>SDA</td>
        <td>SDA</td>
      </tr>
      <tr>
        <td>SCL</td>
        <td>SCL</td>
      </tr>
    </tbody>
  </table>
</div>

**Etapa 2.** Crie um novo sketch Arduino e cole nele os códigos abaixo ou abra o código diretamente pelo caminho: File -> Example -> Seeed Arduino SPA06 > Example1_BasicRead

**Etapa 3.** Envie o código. Se você não souber como enviar o código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

**Etapa 4.** Abra o monitor serial para receber os dados do sensor, incluindo temperatura, valor da pressão barométrica e altitude.

:::success
O resultado será exibido na **Porta Serial** conforme a seguir se tudo ocorrer bem.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/outcome.png" style={{width:400, height:'auto'}}/></div>

**Aqui está o código:**

```cpp
/*
 * Author: Kennan / Kenneract
 * GitHub: https://github.com/Kenneract/SPL07-003-Arduino-Library
 * Created: Mar.15.2025
 * Updated: Apr.14.2025, V1.0.0
 * Purpose: Example usage for the SPL07-003 sensor library. Connects
 *          to the sensor, configures the measurement and oversampling
 *          rate, sets the SPL07-003 to continuous sampling mode, then
 *          prints pressure/temperature measurements to the serial monitor.
 */

#include <Wire.h>
#include "SPL07-003.h"

// Define SPL07-006 I2C address
#define SPL07_ADDR SPL07_ADDR_DEF // Default I2C address (SDO=high)
// #define SPL07_ADDR SPL07_ADDR_ALT // Alternate I2C address (SDO=low)

// Create SPL07-003 sensor instance
SPL07_003 spl;

//HardwareSerial SerialOut(PA10, PA9); //for STM32F103C8Tx

// Runs at startup
void setup() {

  // Begin Serial
  Serial.begin(115200);

  // Configure & start I2C
  //Wire.setSDA(PB7); //for STM32F103C8Tx
  //Wire.setSCL(PB6); //for STM32F103C8Tx
  Wire.begin();

  // Connect to SPL07-003
  if (spl.begin(SPL07_ADDR) == false) {
    Serial.println("Error initializing SPL07-003 :(");
    while (1) {}
  }//if
  Serial.println("Connected to SPL07-003! :)");

  // Set pressure & temperature sampling settings
  spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES);
  spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE);

  // Set SPL07-003 to continuous measurements
  spl.setMode(SPL07_CONT_PRES_TEMP);

}//setup()


// Runs continuously
void loop() {

  // Wait for available reading
  if (spl.pressureAvailable() || spl.temperatureAvailable()) {
    // Read latest values
    double pres = spl.readPressure();
    double temp = spl.readTemperature();
    double altitude = spl.calcAltitude();
    // Print to serial
    Serial.print("Pres: ");
    Serial.print(pres, 3);
    Serial.print(" Pa, Temp: ");
    Serial.print(temp, 3);
    Serial.print(" C, Altitude: ");
    Serial.print(altitude, 3);
    Serial.println(" m");
  }//if

}//loop()
```

#### Usar barramento SPI

**Etapa 1.** Conecte o Grove Barometer Sensor SPA06-003 ao seu controlador

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/connect_grove_with_xiao.png" /></div>

:::tip

- Para selecionar o barramento SPI, use uma faca afiada ou um ferro de solda para cortar as duas ilhas na Área de Configuração do Barramento de Interface.

- Não toque, chacoalhe ou deixe este produto em vibração quando estiver funcionando. Isso causará interferência e afetará a precisão dos dados coletados.

:::

**Etapa 2.** Crie um novo sketch Arduino e cole nele os códigos abaixo ou abra o código diretamente pelo caminho: File -> Example -> Seeed Arduino SPA06 > Example3_SPIRead

**Etapa 3.** Envie o código. Se você não souber como enviar o código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

**Etapa 4.** Abra o monitor serial para receber os dados do sensor, incluindo temperatura, valor da pressão barométrica e altitude.

:::success
O resultado será exibido na **Porta Serial** conforme a seguir se tudo ocorrer bem.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/spi_outcome.png" style={{width:400, height:'auto'}}/></div>

**Aqui está o código:**

```cpp
#include <SPI.h>
#include "SPL07-003.h"


// Define SPL07-006 I2C address
#define SPL07_ADDR SPL07_ADDR_DEF // Default I2C address (SDO=high)
// #define SPL07_ADDR SPL07_ADDR_ALT // Alternate I2C address (SDO=low)
#define SS 1 //Define your own SPI pins

// Create SPL07-003 sensor instance
SPL07_003 spl;

//HardwareSerial SerialOut(PA10, PA9); //for STM32F103C8Tx

// Runs at startup
void setup() {

  // Begin Serial
  Serial.begin(115200);

  // Configure & start SPI
  SPI.begin();

  // Connect to SPL07-003
  if (spl.begin(SS,&SPI) == false) {
    Serial.println("Error initializing SPL07-003 :(");
    while (1) {}
  }//if
  Serial.println("Connected to SPL07-003! :)");

  // Set pressure & temperature sampling settings
  spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES);
  spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE);

  // Set SPL07-003 to continuous measurements
  spl.setMode(SPL07_CONT_PRES_TEMP);

}//setup()


// Runs continuously
void loop() {

  // Wait for available reading
  if (spl.pressureAvailable() || spl.temperatureAvailable()) {
    // Read latest values
    double pres = spl.readPressure();
    double temp = spl.readTemperature();
    double altitude = spl.calcAltitude();
    // Print to serial
    Serial.print("Pres: ");
    Serial.print(pres, 3);
    Serial.print(" Pa, Temp: ");
    Serial.print(temp, 3);
    Serial.print(" C, Altitude: ");
    Serial.print(altitude, 3);
    Serial.println(" m");
  }//if

}//loop()

```

#### Função

As seguintes funções são usadas no código de exemplo acima.

```cpp
spl.begin(SPL07_ADDR) / spl.begin(SS,&SPI)
```

Inicializa o sensor SPL07-003. Retorna falso se o sensor não for encontrado no barramento.

```cpp
spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES)
```

Configura o sensor de pressão com:

- taxa de dados de saída de 4 Hz
- média de 32 amostras para redução de ruído

Uma contagem de amostras mais alta melhora a precisão, mas aumenta o tempo de resposta.

```cpp
spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE)
```

Configura o sensor de temperatura com:

- taxa de atualização de 4 Hz
- média de 1 amostra (resposta mais rápida, menos suavização)

```cpp
spl.setMode(SPL07_CONT_PRES_TEMP)
```

Define o SPL07-003 para o modo contínuo de medição de pressão e temperatura, para que ele atualize os dados automaticamente sem acionamento manual.

```cpp
spl.pressureAvailable(), spl.temperatureAvailable()
```

Verifica se uma nova medição de pressão ou temperatura está disponível no sensor. Elas retornam verdadeiro quando dados novos estão prontos para leitura.

```cpp
spl.readPressure()
```

Lê o valor de pressão mais recente do sensor em Pascais (Pa).

```cpp
spl.readTemperature()
```

Lê a temperatura atual em graus Celsius (°C).

```cpp
spl.calcAltitude()
```

Estima a altitude (em metros) com base na leitura atual de pressão usando o modelo de atmosfera padrão.
Útil em aplicações como estimativa barométrica de altitude para drones ou estações meteorológicas.

## Recursos

- **[KiCAD]** [Grove-Barometer Sensor SPA06-003 SCH&PCB](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/res/SCH&PCB.zip)
- **[Datasheet]** [SPA06-003 Datasheet](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/res/Datasheet.PDF)
- **[References]** [I<sup>2</sup>C how-to for Arduino](https://www.arduino.cc/en/Reference/Wire)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
