---
description: Este artículo proporciona una introducción completa y guía de uso para el Seeed Studio XIAO Debug Mate.
title: Introducción al XIAO Debug Mate
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/main_1.webp
slug: /getting_started_with_xiao_debug_mate
sku: 109990585
sidebar_position: 1
last_update:
  date: 10/22/2025
  author: Citric
createdAt: '2025-11-25'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/getting_started_with_xiao_debug_mate/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/main_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>


## Introducción

Seeed Studio XIAO Debug Mate es una herramienta múltiple ESP32-S3 de código abierto que simplifica la depuración de sistemas embebidos con retroalimentación visual. Este dispositivo todo-en-uno cuenta con una pantalla LCD TFT independiente de 2.01 pulgadas, matriz de estado LED y soporte nativo para Seeed Studio XIAO, proporcionando funciones esenciales de depuración: depuración a nivel de chip DAPLink, monitoreo serial integrado con paso directo UART y medición precisa del consumo de energía. El diseño plug-and-play elimina el cableado complejo para un desarrollo optimizado.

### Especificaciones

<div class="table-center">
	<table align="center">
		<tr>
			<th>Parámetro</th>
			<th>Descripción</th>
		</tr>
		<tr>
			<td>Procesador</td>
			<td>Espressif ESP32-S3</td>
		</tr>
		<tr>
			<td>Entrada de Alimentación</td>
			<td>USB-C 5V/1A</td>
		</tr>
		<tr>
			<td>Pantalla</td>
			<td>LCD TFT de 2.01 pulgadas con resolución 240 x 296</td>
		</tr>
		<tr>
			<td>LED</td>
			<td>Matriz de 36 LED para Indicación de Estado (Por defecto: Velocidad de Baudios Serial)</td>
		</tr>
		<tr>
			<td>Entrada del Usuario</td>
			<td>1 x Botón de Usuario/Botón de Arranque <br /> 1 x Rueda de Desplazamiento <br /> 1 x Botón de Reinicio Empotrado</td>
		</tr>
		<tr>
			<td>Interfaz I/O</td>
			<td>14 x Pines Estándar XIAO <br /> 8 x Pines de Expansión <br /> 4 x Pines de Depuración SWD <br /> 1 x Conector Grove UART</td>
		</tr>
		<tr>
			<td>Tamaño del Producto</td>
			<td>100x20x56 mm</td>
		</tr>
		<tr>
			<td>Software</td>
			<td>Soporta DAPLink para depuración</td>
		</tr>
		<tr>
			<td>Chipset de Destino OpenOCD Soportado</td>
			<td>SAMD21, nRF52840 (Sense), RP2040, RP2350, RA4M1, MG24 (Sense)</td>
		</tr>
		<tr>
			<td>Carcasa</td>
			<td>Impresa en 3D en PLA Negro</td>
		</tr>
	</table>
</div>

### Características

- Interfaz SWD Compatible con DAPLink para Depuración Profesional a Nivel de Chip

- Monitor Serial Inteligente y Paso Directo UART

- Perfilado de Energía de Precisión

- Sistema de Retroalimentación Visual Independiente

- Plataforma de Código Abierto Diseñada para XIAO con Compatibilidad Universal


## Descripción del Hardware

El XIAO Debug Mate es una herramienta compacta todo-en-uno diseñada para optimizar tu flujo de trabajo de desarrollo embebido. A continuación se muestra una vista detallada de su diseño de hardware y componentes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

El dispositivo está equipado con los siguientes componentes de hardware clave:

* ① **Botón de Usuario**: Un botón pulsador ubicado en el borde superior, utilizado para entrada del usuario como hacer selecciones o confirmar acciones.

* ② **Socket XIAO**: Un socket dedicado compuesto por conectores hembra, diseñado para una conexión directa plug-and-play con una placa de la serie Seeed Studio XIAO.

* ③ **Pines Pogo**: Un conjunto de sondas con resorte ubicadas dentro del Socket XIAO (②). Su función específica es hacer contacto eléctrico confiable con las almohadillas en la parte posterior de la placa principal XIAO instalada.

* ④ **Conector de Expansión Exterior Interno**: Este conector está específicamente diseñado para extraer las señales de los pines posteriores de la placa principal XIAO, que están conectados a través de los Pines Pogo (③). Cuenta con un diseño de interfaz dual con conectores hembra en la parte superior (para cables Dupont) y pines macho en la parte inferior. Este diseño versátil permite que todo el dispositivo se use como una placa hija en otro sistema.

* ⑤ **Conector de Expansión Interno**: Este conector extrae los pines de los lados izquierdo y derecho de la placa principal XIAO. Al igual que el conector ④, cuenta con conectores hembra en la parte superior y pines macho en la parte inferior, proporcionando acceso conveniente a la E/S trasera del XIAO.

* ⑥ **Codificador Rotativo**: Una rueda de codificador rotativo (rodillo) en el borde superior, utilizada para navegar menús, desplazarse por opciones y ajustar valores en la pantalla.

* ⑦ **Pantalla**: LCD TFT de 2.01 pulgadas con resolución 240x296 para visualización clara de datos e interacción.

* ⑧ **Puerto Grove**: Para conectar módulos Grove externos basados en UART.

* ⑨ **Indicador de Velocidad de Baudios**: Un indicador visual en la parte posterior del dispositivo que muestra claramente la velocidad de baudios UART actualmente seleccionada.

* ⑩ **Puerto USB-C**: Un puerto USB-C ubicado en el lateral para proporcionar energía al dispositivo y facilitar la comunicación de datos, como programar la placa XIAO o paso directo UART.

## Primeros Pasos

### Instalar Pegatinas de Pines para el XIAO Debug Mate

Dentro del paquete, encontrarás cuatro pegatinas de distribución de pines. Estas están diseñadas para aplicarse junto a los conectores de expansión en el Debug Mate, dándote una referencia rápida y conveniente para la función de cada pin.

Para aplicarlas correctamente, observa el pequeño **triángulo blanco** en una esquina de cada pegatina. Este triángulo es un marcador de alineación. Debe orientarse para coincidir con la esquina correspondiente del PCB del Debug Mate. Las pegatinas del frente y la parte posterior también tienen diferentes orientaciones de texto para asegurar que sean legibles desde el lado correcto. Por favor, consulta la imagen a continuación para la colocación correcta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/sticket_1.jpg" style={{width:600, height:'auto'}}/></div>

Las pegatinas usan diferentes colores para distinguir las funciones de las dos filas de pines. Las etiquetas de pines azul oscuro corresponden a la fila interior, mientras que las etiquetas de pines verde claro corresponden a la fila exterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/sticket_2.jpg" style={{width:600, height:'auto'}}/></div>

Las marcas en los lados frontal y posterior también son diferentes. Por ejemplo, en el lado frontal, los pines XIAO están etiquetados con sus números de pin: D6, D7, D8, y así sucesivamente. En el lado posterior, estos pines están marcados con sus protocolos o funciones: TX, RX, SCK, y así sucesivamente.

### Primer Encendido

El XIAO Debug Mate requiere una fuente de alimentación constante de 5V/1A a través de su puerto USB-C. Al conectar la alimentación, el dispositivo se iniciará, mostrará una animación de inicio y luego llegará a la interfaz principal, listo para operar.

<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/xiao_debug_mate/first_power.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
En general, todas las funciones de XIAO en Debug Mate no requieren fuente de alimentación adicional para XIAO, a menos que se especifique lo contrario.
:::

### Lógica Operacional

La interfaz del dispositivo está controlada por un sistema simple e intuitivo de dos partes:

*   **Codificador Rotativo (Rodillo):** Gira el rodillo para navegar por los menús y resaltar opciones seleccionables.
*   **Botón:**
    *   **Clic Simple:** Confirma una selección o entra a un menú resaltado.
    *   **Presión Larga (mantener presionado por >2s y soltar):** Actúa como un botón "Atrás", regresándote a la pantalla o menú anterior.

<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/xiao_debug_mate/operational_logic.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Introducción al Menú de Operación

El firmware del XIAO Debug Mate está organizado en tres páginas funcionales principales, por las cuales puedes navegar usando el rodillo y el botón.

**1. Página Principal (Panel de Control)**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/1.jpg" style={{width:600, height:'auto'}}/></div>

Esta es la pantalla predeterminada y sirve como un panel de control central. Proporciona una vista general en tiempo real de todas las funciones clave:
*   **Estado de Depuración:** Indica si la función SWD `DEBUG` está activa.
*   **Estado UART:** Muestra la velocidad de baudios actual y la actividad en las líneas RX/TX.
*   **Métricas de Energía:** Muestra el Voltaje instantáneo (`U`), Corriente (`I`) y Potencia (`P`) que está consumiendo el XIAO conectado.

Desde esta página, puedes acceder a las otras dos funciones principales. Simplemente gira el rodillo para resaltar el módulo UART (abajo a la izquierda) o el módulo de Energía (abajo a la derecha), y luego haz clic simple en el botón para entrar a su página dedicada.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Módulo UART</th>
			<th>Módulo de Energía</th>
		</tr>
		<tr>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/2.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/3.jpg" style={{width:600, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

:::tip
1. La función de Depuración **solo es efectiva** bajo el menú de la página principal.
2. La página principal no puede recuperar mensajes del puerto serial. Las funciones de paso directo y monitoreo del puerto serial requieren acceder a la página de configuración del puerto serial.
:::

**2. Página UART**

Esta página está dedicada a la comunicación serial y ofrece dos modos distintos:

*   **Monitor UART:** Este modo captura y muestra datos seriales directamente en la pantalla LCD de 2.01 pulgadas del Debug Mate. Es perfecto para depuración rápida sobre la marcha sin una PC.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/5.jpg" style={{width:600, height:'auto'}}/></div>

*   **Paso Directo UART:** En este modo, el Debug Mate actúa como un puente USB-a-serial. Reenvía todos los datos seriales del dispositivo objetivo a tu PC. Los datos **no** se muestran en la pantalla del dispositivo pero pueden verse usando cualquier software de monitor serial en tu computadora (por ejemplo, Monitor Serial del IDE de Arduino, PuTTY, CoolTerm).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/4.jpg" style={{width:600, height:'auto'}}/></div>

Dentro de la página UART, puedes configurar lo siguiente resaltando la opción con la rueda y haciendo clic en el botón:
*   **Fuente:** Elige entre monitorear el `XIAO` integrado o un dispositivo externo conectado al puerto `Grove`.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Elegir XIAO</th>
			<th>Elegir Grove</th>
		</tr>
		<tr>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/6.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/7.jpg" style={{width:600, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

*   **Velocidad de Baudios:** Selecciona entre 9 velocidades de baudios preestablecidas, que van desde 4800 bps hasta 921600 bps. La matriz LED en la parte posterior se actualizará visualmente para reflejar tu selección.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Frontal</th>
			<th>Posterior</th>
		</tr>
		<tr>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/8.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/9.jpg" style={{width:600, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

**3. Página del Analizador de Energía**

Esta página proporciona una herramienta de análisis de energía de alta precisión con tres vistas de interfaz diferentes, entre las cuales puedes alternar desplazando la rueda.

*   **Vista 1: Medidor Digital Simple**
    Esta vista presenta una pantalla limpia con fuente grande del Voltaje (V), Corriente (A) y Potencia (W) instantáneos, medidos con una precisión de hasta cuatro decimales.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/10.jpg" style={{width:600, height:'auto'}}/></div>

*   **Vista 2: Vista Detallada de Bajo Consumo**
    Optimizada para aplicaciones de bajo consumo, esta vista se enfoca en la corriente y la potencia. Muestra los valores en múltiples unidades simultáneamente (ej., `18.234 mA` y `18234 uA`), ahorrándote el esfuerzo de conversiones manuales de unidades al rastrear el consumo a nivel de microamperios.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/11.jpg" style={{width:600, height:'auto'}}/></div>

*   **Vista 3: Análisis Estadístico**
    Esta vista es ideal para la validación de proyectos y estimación de duración de batería. Rastrea y muestra:
    *   **Mín/Máx:** Los valores mínimos y máximos de corriente y potencia registrados durante la sesión.
    *   **Total:** La energía acumulativa (`Wh`) y carga (`Ah`) consumida a lo largo del tiempo.
    *   **Tiempo:** La duración de la sesión de medición.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/12.jpg" style={{width:600, height:'auto'}}/></div>

    :::tip
    La primera vez que ingreses a la Vista 3, el temporizador de consumo de energía comenzará. Cuando mantengas presionado el botón de confirmación para salir de la Página del Analizador de Energía, el temporizador se reiniciará a cero.
    :::

:::tip **Nota Importante sobre la Medición de Energía:**
La función de análisis de energía mide la energía suministrada al XIAO a través de su **pin de 5V**. Esta medición incluye la energía consumida por el IC de Gestión de Energía (PMIC) integrado del XIAO y otros componentes del riel de 5V. Si planeas alimentar tu proyecto final con una batería LiPo conectada directamente a los pads de 3.3V/BAT del XIAO, el consumo de energía real será **menor** que lo reportado por el Debug Mate. Por favor, usa estos datos como una referencia valiosa, teniendo en cuenta esta diferencia para los cálculos finales de batería.
:::

### XIAO Debug Mate: Características y Uso

Para guías detalladas sobre cómo usar el depurador DAPLink, monitor UART y analizador de energía con IDEs y proyectos específicos, consulta nuestras guías de características dedicadas.

- [Depurador DAPLink de XIAO Debug Mate](https://wiki.seeedstudio.com/es/xiao_debug_mate_debug)
- [Monitor UART de XIAO Debug Mate](https://wiki.seeedstudio.com/es/xiao_debug_mate_serial)
- [Medidor de Energía de XIAO Debug Mate](https://wiki.seeedstudio.com/es/xiao_debug_mate_power)

## Reinicio

Si necesitas reiniciar el XIAO Debug Mate, tienes dos opciones:
1.  Desconectar y volver a conectar el cable de alimentación USB-C.
2.  Usar el **botón de Reinicio** oculto. Está ubicado en un pequeño orificio directamente debajo del puerto USB-C. Puedes presionarlo suavemente usando una herramienta de expulsión de tarjeta SIM o un clip.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/13.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
No apliques fuerza excesiva al usar el botón de reinicio, ya que esto podría dañar el interruptor interno.
:::

## Arranque

El botón principal del dispositivo tiene un propósito dual. Durante la operación normal, funciona como el botón **Confirmar/Atrás**. Sin embargo, también actúa como el botón **BOOT** para ingresar al modo flash del ESP32-S3.

Para ingresar al Modo Flash:
1.  Asegúrate de que el dispositivo esté apagado (desconectado).
2.  **Mantén presionado** el botón principal.
3.  Mientras mantienes presionado el botón, conecta el cable USB-C para alimentar el dispositivo.
4.  El dispositivo ahora estará en Modo Flash, listo para recibir nuevo firmware.

## Firmware de fábrica

Si necesitas restaurar el firmware de fábrica original, puedes hacerlo usando uno de los métodos a continuación. Primero, pon el dispositivo en **Modo Boot** como se describe en la sección anterior.

### Método 1: Usando Scripts de Flash

Hemos preparado un paquete con scripts de flasheo fáciles de usar para todos los sistemas operativos principales.

1.  Descarga el paquete de firmware.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_Flash_Script.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware ver. 1.0</font></span></strong>
    </a>
</div>

2.  Extrae el contenido del archivo zip.
3.  Pon tu XIAO Debug Mate en Modo Boot.
4.  Ejecuta el script apropiado para tu SO.

<Tabs>
<TabItem value="Windows" label="Windows" default>
Haz doble clic en el archivo `flash.bat`.
</TabItem>
<TabItem value="MacOS" label="MacOS">
Abre una terminal, navega a la carpeta extraída y ejecuta el comando: `sh flash.sh`
</TabItem>
<TabItem value="Linux" label="Linux">
Abre una terminal, navega a la carpeta extraída y ejecuta el comando: `sh flash.sh`
</TabItem>
</Tabs>

### Método 2: Usando esptool

Si tienes `esptool` instalado como parte del ESP-IDF o como un paquete de Python, puedes flashear el firmware manualmente.

1.  Descarga el archivo `.bin` del firmware de fábrica.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_Flash_Script.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware ver. 1.0</font></span></strong>
    </a>
</div>

2.  Pon tu XIAO Debug Mate en Modo Boot.
3.  Abre una terminal o símbolo del sistema y ejecuta el comando apropiado a continuación.

<Tabs>
<TabItem value="Windows" label="Windows" default>

```bash
esptool.exe --chip esp32s3 write_flash 0x0 firmware-v1.0.bin
```

</TabItem>
<TabItem value="MacOS" label="MacOS">

```bash
esptool.py --chip esp32s3 write_flash 0x0 firmware-v1.0.bin
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
esptool.py --chip esp32s3 write_flash 0x0 firmware-v1.0.bin
```

</TabItem>
</Tabs>

### Método 3: Usando PlatformIO con Firmware de Código Abierto

El firmware para XIAO Debug Mate es completamente de código abierto y está disponible en [GitHub](https://github.com/Seeed-Studio/OSHW-XIAO-Debug-Mate). Si quieres personalizar el firmware o compilarlo desde el código fuente, puedes usar PlatformIO.

1. Clona el repositorio:

```bash
git clone https://github.com/Seeed-Studio/OSHW-XIAO-Debug-Mate.git
```

2. Navega al directorio del firmware

3. Abre el proyecto en PlatformIO:
   - Si usas PlatformIO IDE (extensión de VS Code), abre la carpeta que contiene `platformio.ini`
   - O usa PlatformIO Core CLI

4. Pon tu XIAO Debug Mate en **Modo Boot** como se describe en la sección de Arranque anterior.

5. Compila y sube el firmware:

<Tabs>
<TabItem value="PlatformIO IDE" label="PlatformIO IDE" default>
- Haz clic en el botón "Upload" en la barra de herramientas de PlatformIO
- O usa la paleta de comandos: `PlatformIO: Upload`
</TabItem>
<TabItem value="PlatformIO CLI" label="PlatformIO CLI">

```bash
pio run --target upload
```

</TabItem>
</Tabs>

Este método te permite:
- Modificar el firmware para agregar características personalizadas
- Compilar la versión de desarrollo más reciente
- Contribuir al proyecto de código abierto
- Aprender de la implementación del código fuente

:::tip
Asegúrate de tener PlatformIO instalado. Puedes instalarlo como una extensión de VS Code o como una herramienta CLI independiente vía pip: `pip install platformio`
:::

## Solución de Problemas

### P1: Guía de Compatibilidad de Pines de XIAO Debug Mate

**Problema:** Tengo problemas con la función de depuración; parece que hay una mala conexión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/14.jpg" style={{width:600, height:'auto'}}/></div>

**Solución:** Esto puede suceder debido a dos razones principales:

1.  **Compatibilidad con Placas XIAO Más Antiguas:**
    Algunas de las placas XIAO más tempranas, como el **XIAO SAMD21**, **XIAO RP2040** y **XIAO nRF52840**, fueron diseñadas antes de que se estableciera un estándar unificado para los pads del lado posterior. Aunque los pines pogo del Debug Mate están posicionados para ser lo más compatibles posible, las ligeras variaciones en estas placas más antiguas pueden llevar a un contacto imperfecto.

    Si experimentas una conexión de depuración inestable, intenta **ajustar ligeramente la posición** de la placa XIAO dentro del socket. Puede que no necesites empujarla completamente hacia abajo. Un pequeño cambio a menudo puede asegurar que los pines pogo hagan contacto sólido con los pads SWD en la parte posterior del XIAO.

2.  **Desgaste de los Conectores:**
    Los conectores hembra, como cualquier conector mecánico, tienen una vida útil finita. Para maximizar su durabilidad y asegurar una conexión confiable, por favor sigue esta mejor práctica:
    *   Al insertar o remover una placa XIAO, aplica fuerza **directamente hacia arriba o hacia abajo**.
    *   **Evita mover o balancear** la placa XIAO de un lado a otro, ya que esto puede doblar los pines, ensanchar los contactos en el conector hembra y provocar conexiones deficientes con el tiempo.

## Agradecimientos Especiales

Agradecimientos especiales a **啊猫啊狗晒太阳 (Ah Mao Ah Gou Shai Tai Yang)** por la inspiración del diseño para la matriz LED. El diseño del indicador LED integrado del Debug Mate es una referencia a su excelente proyecto de código abierto. El diseño original es muy creativo y práctico.

Si te gustaría ver el diseño original, puedes consultar el video de demostración y la página principal del autor a través de los enlaces a continuación.

*   [Video de Demostración del Diseño Original](https://www.bilibili.com/video/BV1Sc411273Y/)
*   [Página Principal de Bilibili del Autor](https://space.bilibili.com/1155738723)

## Recursos

- **[ZIP]** [Carcasa Impresa en 3D del Seeed Studio XIAO Debug Mate](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/Seeed_Studio_XIAO_Debug_Mate_3D_Printed_Case.zip)
- **[PDF]** [PDF del Esquemático del Seeed Studio XIAO Debug Mate](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/Seeed_Studio_XIAO_Debug_Mate_V1.0_SCH_20250926.pdf)
- **[ZIP]** [Archivos KiCAD del Esquemático y PCB del Seeed Studio XIAO Debug Mate](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/Seeed_Studio_XIAO_Debug_Mate_V1.0_SCH&PCB_20250926.zip)
- **[GITHUB]** [Repositorio de Firmware del Seeed Studio XIAO Debug Mate](https://github.com/Seeed-Studio/OSHW-XIAO-Debug-Mate)

## Soporte Técnico y Discusión del Producto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
