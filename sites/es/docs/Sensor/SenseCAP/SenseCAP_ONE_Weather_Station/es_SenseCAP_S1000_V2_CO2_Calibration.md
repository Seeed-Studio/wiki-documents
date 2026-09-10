---
description: Procedimiento de calibración de CO₂ para el sensor meteorológico compacto SenseCAP S1000 V2 10-en-1.
title: Calibración de CO₂ del SenseCAP S1000 V2
keywords:
  - SenseCAP
  - SenseCAP S1000 V2
  - CO2 Calibration
  - Compact Weather Sensor
image: https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration.jpg
slug: /sensecap_s1000_v2_co2_calibration
sku: 101991024
last_update:
  date: 09/09/2026
  author: Zhai Chenyang
createdAt: '2026-09-09'
updatedAt: '2026-09-09'
url: https://wiki.seeedstudio.com/es/sensecap_s1000_v2_co2_calibration/
---

# Calibración de CO₂ del SenseCAP S1000 V2

:::note
Este procedimiento de calibración de CO₂ se aplica solo al **SKU 101991024** y no es compatible con la estación meteorológica multi-en-uno de CO₂ en versión IAP.
:::
   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration.jpg"/></div>
## Métodos de calibración

- **Corrección automática de línea base (ABC):** El sensor identifica la concentración estable de CO₂ más baja durante un período determinado y la ajusta al objetivo ABC, normalmente alrededor de 400 ppm. Este método es adecuado para oficinas, hogares y otros entornos que se ventilan con regularidad y que periódicamente alcanzan niveles de CO₂ de aire fresco exterior. En el S1000, el período de corrección automática se puede configurar usando `SA_ABC`, en horas.
- **Calibración de un punto objetivo:** La lectura del sensor se ajusta a una concentración de CO₂ conocida, como 1.000 ppm confirmados mediante un gas de calibración certificado o un instrumento de referencia fiable. Este método es adecuado para calibraciones precisas in situ, entornos con niveles de CO₂ constantemente altos o ubicaciones que no están expuestas regularmente al aire fresco. En el S1000, la concentración objetivo se puede introducir usando `SA_TC`, y la calibración de un punto se realiza inmediatamente después de introducir el valor.

## Procedimiento de calibración detallado

### Procedimiento de calibración automática ABC

#### Precauciones antes de habilitar ABC

- Durante cada ciclo ABC, el entorno debe alcanzar un nivel de CO₂ cercano a la concentración de fondo exterior durante un período de tiempo y mantenerse relativamente estable.
- ABC es adecuado para hogares, oficinas, aulas y salas de reuniones que se ventilan con regularidad.
- No es adecuado para invernaderos, instalaciones ganaderas, espacios continuamente ocupados o cerrados y entornos donde se añade CO₂ de forma intencionada.
- ABC evalúa tanto la concentración más baja detectada como su estabilidad; no trata simplemente la lectura más baja como 400 ppm.
- Desviaciones de medición significativas pueden requerir varios ciclos ABC para corregirse de forma gradual.

#### Configurar y habilitar ABC

`SA_ABC` establece el ciclo de calibración ABC para el sensor de CO₂ integrado en el sensor meteorológico compacto SenseCAP S1000 V2 10-en-1.

<div class="table-center">

| Parámetro | Valor |
| --- | --- |
| Unidad | Horas |
| Rango compatible | 0–65535 |
| Valor predeterminado | 0 (ABC deshabilitado) |
| Valores que deshabilitan ABC | 0 y 65535 |
| Ajuste recomendado | 180 horas (aproximadamente 7,5 días) |

</div>

1. Conéctate al dispositivo a través del puerto serie de servicio.

2. Comprueba la dirección ASCII del dispositivo usando los siguientes ajustes serie predeterminados.

   <div class="table-center">

   | Parámetro | Valor predeterminado |
   | --- | --- |
   | Baud rate | 9600 |
   | Bits de parada | 1 |
   | Bits de datos | 8 |
   | Paridad | None |

   </div>

   Si el terminal serie añade CRLF automáticamente, introduce solo `?`.

   **Enviar:**

   ```text
   ?
   ```

   **Respuesta:**

   ```text
   0XA
   ```

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration1.png"/></div>

3. Utiliza la dirección devuelta en los comandos posteriores. Si la dirección es `0`, envía el siguiente comando para establecer el ciclo ABC en el valor recomendado de 180 horas.

   **Enviar:**

   ```text
   0XA;SA_ABC=180
   ```

   **Respuesta:**

   ```text
   0XA;SA_ABC=180
   ```

   Esta respuesta indica que el ajuste se ha escrito correctamente.

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration2.png"/></div>
4. Verifica el ajuste actual.

   **Enviar:**

   ```text
   0XA;SA_ABC=?
   ```

   **Respuesta:**

   ```text
   SA_ABC=180
   ```

   Una respuesta que contenga `SA_ABC=180` confirma que ABC está habilitado.


   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration3.png"/></div>

### Procedimiento de calibración de un punto objetivo

#### Preparación antes de la calibración

1. Registra la lectura de CO₂ antes de la calibración.
2. Asegúrate de que el dispositivo esté alimentado y comunicándose correctamente.
3. Permite que el gas de referencia sustituya completamente al gas original dentro de la cámara de medición y alcance una condición estable.
4. Evita que las personas respiren directamente hacia el sensor.
5. Mantén la temperatura, la humedad y la presión lo más estables posible.

**Criterios de estabilidad recomendados**

- Deja tiempo suficiente para que el gas de referencia sustituya completamente al gas original.
- Confirma que al menos 3–5 mediciones consecutivas muestren solo una variación mínima.
- Asegúrate de que tanto el gas de calibración como el sensor estén a una temperatura estable.
- Mantén la cámara de calibración ventilada a presión atmosférica.
- No apliques gas presurizado directamente al sensor. Al usar una bombona de gas, utiliza un regulador de presión y un tubo adecuado para controlar el caudal.

#### Calibración objetivo

La calibración objetivo es un método de calibración de un punto para el sensor de CO₂ integrado en el sensor meteorológico compacto SenseCAP S1000 V2 10-en-1. Requiere un gas de calibración certificado o un instrumento de referencia fiable con una concentración de CO₂ conocida, como 400, 800, 1.000 o 1.500 ppm.

`SA_TC` especifica el valor de calibración objetivo en ppm. No tiene valor predeterminado y admite un rango de 0–10000 ppm. Después de escribir un valor válido, el dispositivo realiza inmediatamente una calibración de un punto.

#### Procedimiento de calibración

Para los parámetros serie predeterminados e instrucciones sobre cómo comprobar la dirección del dispositivo, consulta [Configurar y habilitar ABC](#Configurar-y-habilitar-ABC).

1. Coloca el dispositivo en una cámara de calibración adecuada.

2. Introduce una mezcla de gas de CO₂ de concentración conocida de acuerdo con los requisitos de funcionamiento de la cámara de calibración.

3. Mantén la cámara ventilada para conservar la presión atmosférica. Supervisa continuamente las lecturas de CO₂ y espera hasta que la concentración de gas dentro de la cámara se estabilice. Usa el siguiente comando para comprobar la lectura actual.

   **Enviar:**

   ```text
   0XA;G5?
   ```

   :::note
   Si el terminal serie añade CRLF automáticamente, introduce el comando directamente. De lo contrario, añade `<CR><LF>` al final del comando.
   :::

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration4.png"/></div>

4. Introduce la concentración objetivo conocida. Por ejemplo, cuando se utiliza gas de calibración certificado de 1.000 ppm, envía el siguiente comando.

   **Enviar:**

   ```text
   0XA;SA_TC=1000
   ```

   **Respuesta:**

   ```text
   0XA;SA_TC=1000
   ```

   Esta respuesta indica que el comando se recibió correctamente. El dispositivo realiza la calibración de un punto inmediatamente después de escribir el valor.

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration5.png"/></div>

5. Espera al menos un ciclo de actualización de datos de CO₂, aproximadamente 16 segundos de forma predeterminada, y luego vuelve a comprobar la lectura.

   **Enviar:**

   ```text
   0XA;G5?
   ```

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration6.jpg"/></div>

:::note
Introduce únicamente la concentración verificada del gas de calibración o del instrumento de referencia. No introduzcas un valor estimado para la calibración objetivo.
:::

