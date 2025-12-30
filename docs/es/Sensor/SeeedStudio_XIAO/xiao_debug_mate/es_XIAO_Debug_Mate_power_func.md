---
description: Aprende a usar la función de Medidor de Potencia del XIAO Debug Mate para monitoreo preciso de voltaje, corriente y potencia.
title: Medidor de Potencia
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/32.webp
slug: /es/xiao_debug_mate_power
sidebar_position: 4
last_update:
  date: 10/22/2025
  author: Citric
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/32.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

La función de Medidor de Potencia del XIAO Debug Mate transforma tu dispositivo en una herramienta versátil y de alta precisión para medir voltaje, corriente y consumo de potencia. Con una interfaz gráfica intuitiva y actualizaciones de datos en tiempo real, puedes monitorear fácilmente el consumo de energía de tu placa XIAO u otro hardware conectado durante todas las etapas de desarrollo. Ya sea que estés optimizando para operación de ultra bajo consumo o verificando la estabilidad del sistema bajo carga, el Medidor de Potencia proporciona información clara y precisa al alcance de tus dedos. Esta sección te guiará a través de sus capacidades clave y cómo obtener el máximo provecho de esta función.

## Consejos para Usar el Medidor de Potencia

Para asegurar mediciones precisas y proteger tu dispositivo, por favor revisa estos consejos importantes antes de usar la función de análisis de potencia.

### Voltaje de Entrada Seguro

El XIAO Debug Mate debe ser alimentado por una fuente USB estándar de **5V/1A**. Usar cargadores con potencia insuficiente, excesiva o no compatibles puede resultar en operación inestable o riesgo de dañar el dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/37.png" style={{width:1000, height:'auto'}}/></div>

### Rango de Medición Seguro

El medidor de potencia es un instrumento de alta precisión diseñado para medir corriente desde **1µA hasta 1A**. Mantiene una precisión de **±1%** en el rango de 10µA a 1A. Exceder el límite de 1A puede dañar la circuitería de medición.

### Discrepancia en el Consumo de Potencia: Medidor vs. Batería

Cuando mides el consumo de potencia de una placa XIAO con el Debug Mate, la medición se toma desde la línea de alimentación de 5V. Esta potencia luego pasa a través del regulador de voltaje interno del XIAO (LDO) para producir 3.3V para el chip. Este regulador consume una pequeña cantidad de potencia.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/38.png" style={{width:1000, height:'auto'}}/></div>

Por lo tanto, el valor de potencia mostrado en el Debug Mate será ligeramente **mayor** que la potencia real consumida por el XIAO si fuera alimentado directamente por una batería de 3.3V. Este es un comportamiento normal y esperado para cualquier medición tomada "pre-regulador".

### Calibración y Verificación

Cada XIAO Debug Mate es calibrado individualmente para voltaje y corriente en la fábrica. Estos datos de calibración se almacenan en una sección protegida contra escritura de la memoria (EEPROM) y no se ven afectados por las actualizaciones de firmware.

:::danger
No intentes borrar o alterar manualmente estos datos de calibración. Hacerlo destruirá la calibración de fábrica y puede deshabilitar permanentemente la funcionalidad de medición de potencia.
:::

## Primeros Pasos

Para acceder al medidor de potencia, navega al **icono del Medidor de Potencia** (abajo-derecha) en el menú principal y **presiona el botón**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/33.jpg" style={{width:600, height:'auto'}}/></div>

### Primeros Pasos: Entendiendo las Tres Interfaces del Medidor de Potencia

La función de Medidor de Potencia proporciona tres interfaces de usuario (UI) distintas, cada una adaptada para una etapa específica del proceso de desarrollo. Puedes cambiar instantáneamente entre estas vistas para obtener los datos que necesitas, ya sea una instantánea de alta precisión, una lectura de bajo consumo o un análisis a largo plazo.

**Navegación:**
*   **Cambiar UIs:** Simplemente **gira la rueda de desplazamiento** para alternar entre las tres pantallas del medidor de potencia. No hay cursor; toda la página cambia.
*   **Reiniciar Datos:** Las estadísticas en UI 3 se borran solo cuando **mantienes presionado el botón** para regresar al menú principal.

#### UI 1: Panel de Alta Precisión

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/10.jpg" style={{width:600, height:'auto'}}/></div>

Esta es la vista predeterminada, diseñada para retroalimentación inmediata de alta resolución.

*   **Lo que Muestra:**
    *   `U`: Voltaje Instantáneo (V) hasta 4 decimales.
    *   `I`: Corriente Instantánea (A) hasta 4 decimales.
    *   `P`: Potencia Instantánea (W) hasta 4 decimales.

*   **Propósito y Caso de Uso:**
    Esta UI es tu opción principal para **depuración en tiempo real y verificaciones fundamentales de cordura**. Su alta precisión te permite ver incluso pequeñas fluctuaciones en el consumo de potencia. Usa esta pantalla para verificar rápidamente:
    *   Si el dispositivo está consumiendo la cantidad esperada de corriente cuando está inactivo.
    *   El impacto inmediato de potencia al encender un periférico (como una pantalla o sensor).
    *   La estabilidad de tu fuente de alimentación de 5V.


#### UI 2: Vista Multi-Unidad para Bajo Consumo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/11.jpg" style={{width:600, height:'auto'}}/></div>

Esta vista está optimizada para la observación intuitiva de proyectos de bajo consumo.

*   **Lo que Muestra:**
    *   `U`: Voltaje Instantáneo (V).
    *   `I`: Corriente Instantánea, escalada automáticamente y mostrada en **Amperios (A)**, **miliamperios (mA)**, y **microamperios (µA)**.
    *   `P`: Potencia Instantánea, escalada automáticamente y mostrada en **Vatios (W)** y **milivatios (mW)**.

*   **Propósito y Caso de Uso:**
    Cuando desarrollas dispositivos alimentados por batería o eficientes en energía, la corriente puede caer al rango de microamperios. Esta UI **elimina la necesidad de conversión manual de unidades**, permitiéndote entender instantáneamente la magnitud del consumo de potencia de tu dispositivo. Es perfecta para:
    *   Verificar que tu dispositivo ha entrado exitosamente en modo de sueño profundo (la corriente debería estar en el rango de µA).
    *   Comparar el consumo de potencia de diferentes optimizaciones de código sin tener que calcular mentalmente las unidades.

#### UI 3: Análisis Estadístico y Estimación de Batería

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/12.jpg" style={{width:600, height:'auto'}}/></div>

Esta vista está diseñada para pruebas a largo plazo y validación de producto final.

*   **Lo que Muestra:**
    *   `Min/Max`: La **Corriente (A)** y **Potencia (W)** mínima y máxima registradas durante la sesión.
    *   `Total`: La **Energía (Wh)** y **Carga (Ah)** acumuladas.
    *   `Time`: El tiempo transcurrido desde que comenzó la sesión de medición.

*   **Operación:**
    El temporizador y la acumulación de datos **inician automáticamente** cuando entras por primera vez a esta pantalla. Cambiar a UI 1 o UI 2 **no** reiniciará los datos, permitiéndote verificar valores en tiempo real mientras una prueba a largo plazo está ejecutándose. Los datos solo se borran cuando sales al menú principal.

*   **Propósito y Caso de Uso:**
    Esta UI es esencial para **validación pre-despliegue**. Antes de comprometerte con una batería, puedes simular la carga de trabajo del dispositivo y usar esta pantalla para:
    *   Identificar la corriente pico (`Max A`) para asegurar que tu batería y circuitería de potencia puedan manejar la carga.
    *   Usar la carga total consumida (`Total Ah`) para estimar con precisión la vida de batería que puedes esperar de una batería de capacidad específica (mAh).

#### **Nota Importante sobre Estimación de Vida de Batería**

Por favor ten en cuenta un detalle crítico al usar UI 3 para cálculos de batería:

El XIAO Debug Mate mide la potencia consumida desde la **entrada de alimentación de 5V** al XIAO. Esta alimentación de 5V se convierte luego a 3.3V por el IC de gestión de potencia integrado del XIAO (PMIC/LDO). Este proceso de conversión no es 100% eficiente y el PMIC consume una pequeña cantidad de potencia.

Cuando alimentas un XIAO directamente con una batería Li-Po, típicamente lo conectas a las almohadillas de batería de 3.3V en la parte posterior, evitando el circuito de conversión de 5V a 3.3V.

Por lo tanto, el consumo de potencia medido por el Debug Mate será **ligeramente mayor** que la potencia real consumida desde una batería de 3.3V. El valor que mides es una excelente y segura **estimación de límite superior** para tus cálculos de vida de batería.

### Midiendo el Consumo de Potencia de un XIAO

Este es el caso de uso más directo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

1.  Simplemente conecta tu placa XIAO directamente en los conectores hembra en el frente del XIAO Debug Mate.
2.  El Debug Mate automáticamente alimentará el XIAO y comenzará a medir su consumo total de potencia.

### Midiendo un XIAO y sus Periféricos

Puedes medir el consumo de potencia combinado de una placa XIAO y cualquier sensor o módulo conectado.

Conecta tu periférico (ej., un sensor) a los pines I/O en los conectores que rodean el socket del XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/35.jpg" style={{width:800, height:'auto'}}/></div>

:::danger CRÍTICO
1. Para ser incluido en la medición, el periférico **debe** ser alimentado desde un **pin de 5V** en el conector. La potencia consumida desde el pin de 3.3V es suministrada por el regulador interno del XIAO y **no** será medida por el Debug Mate.

2. **No** conectes el periférico al puerto Grove del Debug Mate para medición de potencia, ya que su línea de alimentación está separada del circuito de medición del XIAO.
:::

### Midiendo Otros Microcontroladores

El medidor de potencia no está limitado a la serie XIAO. Puedes medir cualquier placa de desarrollo que pueda ser alimentada por 5V.

1.  Usa cables DuPont para conectar tu placa objetivo a los **pines 5V y GND** en los conectores hembra del XIAO Debug Mate.
2.  Asegúrate de que todo tu sistema objetivo (la placa microcontroladora y todos los periféricos que deseas medir) sea alimentado exclusivamente a través de esta conexión de 5V desde el Debug Mate.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/34.jpg" style={{width:800, height:'auto'}}/></div>

**Ejemplo: Midiendo un Seeeduino V4.2**

1.  Conecta el **pin 5V** del Seeeduino V4.2 al **pin 5V** en el header del Debug Mate.
2.  Conecta un **pin GND** del Seeeduino V4.2 a un **pin GND** en el header del Debug Mate.
3.  Enciende el Debug Mate. Ahora suministrará 5V a la placa Seeeduino y medirá su consumo total de corriente.

## Solución de Problemas

### P1: ¿El consumo de energía de la interfaz Grove también está incluido en las estadísticas?

**No** conectes el periférico al puerto Grove del Debug Mate para medición de energía, ya que su línea de alimentación está separada del circuito de medición XIAO.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
