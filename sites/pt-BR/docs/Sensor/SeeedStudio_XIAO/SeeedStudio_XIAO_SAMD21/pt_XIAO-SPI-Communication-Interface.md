---
description: Comunicação SPI no Seeed Studio XIAO SAMD21
title: Comunicação SPI no Seeed Studio XIAO SAMD21
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-SPI-Communication-Interface
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/XIAO-SPI-Communication-Interface/
---
### Interface de Comunicação SPI

### Hardware

**Materiais necessários**

- [Seeed Studio XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x 1

- [Grove-High Precision pressure Sensor](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)

- Cabo Type-C x1

**Conexão de Hardware**

- **Passo 1.** **CSK** do Grove-High Precision pressure Sensor é conectado ao **SCK** do Seeed Studio XIAO.

- **Passo 2.** **CS** do sensor é conectado ao **D3** do Seeed Studio XIAO.

- **Passo 3.** **SDO** do sensor é conectado ao **MISO** do Seeed Studio XIAO.

- **Passo 4.** **SDI** do sensor é conectado ao **MOSI** do Seeed Studio XIAO.

- **Passo 5.** **GND** do sensor é conectado ao **GND** do Seeed Studio XIAO.

- **Passo 6.** **3V3** do sensor é conectado ao **3.3V** do Seeed Studio XIAO.

- **Passo 7.** Conecte o Seeed Studio XIAO ao PC por meio de um cabo Type-C.

### Software

:::note

Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [DPS310-Pressure-Sensor](https://github.com/Infineon/DPS310-Pressure-Sensor.git) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Copie o código para o Arduino IDE e faça o upload.

```c
#include <Dps310.h>

// Dps310 Opject
Dps310 Dps310PressureSensor = Dps310();

void setup()
{
  //pin number of your slave select line
  //XMC2GO
  int16_t pin_cs = 3;
  //for XMC 1100 Bootkit  & XMC4700 Relax Kit uncomment the following line
  //int16_t pin_cs = 10;

  Serial.begin(9600);
  while (!Serial);


  //Call begin to initialize Dps310
  //The parameter pin_nr is the number of the CS pin on your Microcontroller
  Dps310PressureSensor.begin(SPI, pin_cs);

  //temperature measure rate (value from 0 to 7)
  //2^temp_mr temperature measurement results per second
  int16_t temp_mr = 2;
  //temperature oversampling rate (value from 0 to 7)
  //2^temp_osr internal temperature measurements per result
  //A higher value increases precision
  int16_t temp_osr = 2;
  //pressure measure rate (value from 0 to 7)
  //2^prs_mr pressure measurement results per second
  int16_t prs_mr = 2;
  //pressure oversampling rate (value from 0 to 7)
  //2^prs_osr internal pressure measurements per result
  //A higher value increases precision
  int16_t prs_osr = 2;
  //startMeasureBothCont enables background mode
  //temperature and pressure ar measured automatically
  //High precision and hgh measure rates at the same time are not available.
  //Consult Datasheet (or trial and error) for more information
  int16_t ret = Dps310PressureSensor.startMeasureBothCont(temp_mr, temp_osr, prs_mr, prs_osr);
  //Use one of the commented lines below instead to measure only temperature or pressure
  //int16_t ret = Dps310PressureSensor.startMeasureTempCont(temp_mr, temp_osr);
  //int16_t ret = Dps310PressureSensor.startMeasurePressureCont(prs_mr, prs_osr);


  if (ret != 0)
  {
    Serial.print("Init FAILED! ret = ");
    Serial.println(ret);
  }
  else
  {
    Serial.println("Init complete!");
  }
}



void loop()
{
  uint8_t pressureCount = 20;
  float pressure[pressureCount];
  uint8_t temperatureCount = 20;
  float temperature[temperatureCount];

  //This function writes the results of continuous measurements to the arrays given as parameters
  //The parameters temperatureCount and pressureCount should hold the sizes of the arrays temperature and pressure when the function is called
  //After the end of the function, temperatureCount and pressureCount hold the numbers of values written to the arrays
  //Note: The Dps310 cannot save more than 32 results. When its result buffer is full, it won't save any new measurement results
  int16_t ret = Dps310PressureSensor.getContResults(temperature, temperatureCount, pressure, pressureCount);

  if (ret != 0)
  {
    Serial.println();
    Serial.println();
    Serial.print("FAIL! ret = ");
    Serial.println(ret);
  }
  else
  {
    Serial.println();
    Serial.println();
    Serial.print(temperatureCount);
    Serial.println(" temperature values found: ");
    for (int16_t i = 0; i < temperatureCount; i++)
    {
      Serial.print(temperature[i]);
      Serial.println(" degrees of Celsius");
    }

    Serial.println();
    Serial.print(pressureCount);
    Serial.println(" pressure values found: ");
    for (int16_t i = 0; i < pressureCount; i++)
    {
      Serial.print(pressure[i]);
      Serial.println(" Pascal");
    }
  }

  //Wait some time, so that the Dps310 can refill its buffer
  delay(10000);
}
```

- **Passo 4.** Clique em **Tools** > **Serial Monitor**, ou pressione **Ctrl+Shift+M** juntos, abra o monitor serial após o upload bem-sucedido, a saída aparece como segue:

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/spi.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/spi.png" alt="pir" width={600} height="auto" /></p>
