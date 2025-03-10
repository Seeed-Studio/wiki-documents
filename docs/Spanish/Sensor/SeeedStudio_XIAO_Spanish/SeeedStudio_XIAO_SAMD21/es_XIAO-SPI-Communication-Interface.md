---
description: Comunicación SPI en XIAO SAMD21 de Seeed Studio
title: Comunicación SPI en XIAO SAMD21 de Seeed Studio
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-SPI-Communication-Interface
last_update:
  date: 02/19/2025
  author: Guillermo
---
### Interfaz de Comunicación SPI

### Hardware

**Materiales requeridos**

- [Seeed Studio XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x 1

- [Grove-Sensor de presión de alta precisión](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)

- Cable Tipo-C x1

**Conexión de Hardware**

- **Paso 1.** El **CSK** del Sensor de presión de alta precisión Grove se conecta al **SCK** del XIAO.

- **Paso 2.** El **CS** del Sensor se conecta al **D3** del XIAO.

- **Paso 3.** El **SDO** del Sensor se conecta al **MISO** del XIAO.

- **Paso 4.** El **SDI** del Sensor se conecta al **MOSI** del XIAO.

- **Paso 5.** El **GND** del Sensor se conecta al **GND** del XIAO.

- **Paso 6.** El **3V3** del Sensor se conecta al **3.3V** del XIAO.

- **Paso 7.** Conecta el XIAO a la PC a través de un cable Tipo-C.

### Software

:::note

Si es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Introducción a Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la biblioteca [DPS310-Pressure-Sensor](https://github.com/Infineon/DPS310-Pressure-Sensor.git) desde Github.

- **Paso 2.** Consulta [Cómo instalar bibliotecas](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) para instalar la biblioteca en Arduino.

- **Paso 3.** Copia el código en el IDE de Arduino y súbelo.

```c
#include <Dps310.h>

// Objeto Dps310
Dps310 Dps310PressureSensor = Dps310();

void setup()
{
  // Número de pin de la línea de selección de esclavo
  // XMC2GO
  int16_t pin_cs = 3;
  // Para XMC 1100 Bootkit & XMC4700 Relax Kit descomenta la siguiente línea
  // int16_t pin_cs = 10;

  Serial.begin(9600);
  while (!Serial);


  // Llamar a begin para inicializar Dps310
  // El parámetro pin_nr es el número del pin CS en tu microcontrolador
  Dps310PressureSensor.begin(SPI, pin_cs);

  // Tasa de medida de temperatura (valor entre 0 y 7)
  // 2^temp_mr resultados de medición de temperatura por segundo
  int16_t temp_mr = 2;
  // Tasa de sobre-muestreo de temperatura (valor entre 0 y 7)
  // 2^temp_osr mediciones internas de temperatura por resultado
  // Un valor más alto aumenta la precisión
  int16_t temp_osr = 2;
  // Tasa de medida de presión (valor entre 0 y 7)
  // 2^prs_mr resultados de medición de presión por segundo
  int16_t prs_mr = 2;
  // Tasa de sobre-muestreo de presión (valor entre 0 y 7)
  // 2^prs_osr mediciones internas de presión por resultado
  // Un valor más alto aumenta la precisión
  int16_t prs_osr = 2;
  // startMeasureBothCont habilita el modo de fondo
  // La temperatura y la presión se miden automáticamente
  // No es posible tener alta precisión y altas tasas de medición al mismo tiempo.
  // Consulta la hoja de datos (o prueba y error) para más información
  int16_t ret = Dps310PressureSensor.startMeasureBothCont(temp_mr, temp_osr, prs_mr, prs_osr);
  // Usa una de las líneas comentadas a continuación para medir solo temperatura o presión
  // int16_t ret = Dps310PressureSensor.startMeasureTempCont(temp_mr, temp_osr);
  // int16_t ret = Dps310PressureSensor.startMeasurePressureCont(prs_mr, prs_osr);


  if (ret != 0)
  {
    Serial.print("¡Fallo en la inicialización! ret = ");
    Serial.println(ret);
  }
  else
  {
    Serial.println("¡Inicialización completa!");
  }
}



void loop()
{
  uint8_t pressureCount = 20;
  float pressure[pressureCount];
  uint8_t temperatureCount = 20;
  float temperature[temperatureCount];

  // Esta función escribe los resultados de las mediciones continuas en los arreglos dados como parámetros
  // Los parámetros temperatureCount y pressureCount deben contener los tamaños de los arreglos temperature y pressure cuando se llama la función
  // Después del final de la función, temperatureCount y pressureCount contendrán los números de valores escritos en los arreglos
  // Nota: El Dps310 no puede guardar más de 32 resultados. Cuando su buffer de resultados está lleno, no guardará nuevos resultados de medición
  int16_t ret = Dps310PressureSensor.getContResults(temperature, temperatureCount, pressure, pressureCount);

  if (ret != 0)
  {
    Serial.println();
    Serial.println();
    Serial.print("¡FALLO! ret = ");
    Serial.println(ret);
  }
  else
  {
    Serial.println();
    Serial.println();
    Serial.print(temperatureCount);
    Serial.println(" valores de temperatura encontrados: ");
    for (int16_t i = 0; i < temperatureCount; i++)
    {
      Serial.print(temperature[i]);
      Serial.println(" grados Celsius");
    }

    Serial.println();
    Serial.print(pressureCount);
    Serial.println(" valores de presión encontrados: ");
    for (int16_t i = 0; i < pressureCount; i++)
    {
      Serial.print(pressure[i]);
      Serial.println(" Pascal");
    }
  }

  // Espera un tiempo, para que el Dps310 pueda rellenar su buffer
  delay(10000);
}
```

- **Paso 4.** Haz clic en **Herramientas** > **Monitor serial**, o presiona **Ctrl+Shift+M** juntos para abrir el monitor serial después de haber subido el código con éxito. El resultado aparecerá como sigue:

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/spi.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/spi.png" alt="pir" width={600} height="auto" /></p>
