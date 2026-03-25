---
description: Este artículo te guiará para comenzar rápidamente con reTerminal E1002.
title: Introducción a reTerminal E1002
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_with_reterminal_e1002
sidebar_position: 3
last_update:
  date: 07/21/2025
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1002/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introducción a reTerminal E1002

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

:::caution Consejos para actualizar el firmware
Recomendamos que **[completes la actualización del firmware de tu producto](#preliminary)** tan pronto como lo recibas para obtener la mejor experiencia.
:::

:::danger Advertencia sobre la vida útil de la pantalla
1. Si tu reTerminal ha estado inactivo durante mucho tiempo, puedes mantener presionado el botón verde del dispositivo durante 5 segundos para borrar el contenido de la pantalla (utilizando el firmware de fábrica), lo que puede prevenir eficazmente la sombra residual y aumentar la vida útil de la pantalla.

2. Siempre que sea posible, no muestres una misma imagen en la pantalla durante un período prolongado (más de 1 día), ya que esto puede crear una imagen residual, y se recomienda que la imagen de la pantalla se actualice al menos una vez al día. Si el dispositivo no se utiliza durante mucho tiempo, se recomienda borrar el contenido mostrado en el dispositivo.

3. Por favor, actualiza la pantalla con la menor frecuencia posible cuando estés utilizando y depurando el programa. Actualizar la pantalla a alta velocidad durante un período prolongado también puede reducir la vida útil de la pantalla.
:::

## Introducción

reTerminal E1002 es una pantalla ePaper a color de código abierto de 7,3 pulgadas con una excepcional duración de batería de 3 meses. Impulsada por ESP32-S3, es compatible de forma nativa con nuestra plataforma de interfaz sin código SenseCraft HMI para una creación de paneles sin esfuerzo, y al mismo tiempo es compatible con Home Assistant, TRMNL E-ink dashboard, Arduino y ESP-IDF para un desarrollo adicional. Con la pantalla ePaper a todo color E Ink® Spectra™ 6, es perfecta para marcos digitales y visualización de paneles de control a color.

### Características

- **Hermosa pantalla ePaper a color E Ink® Spectra™6 lista para usar**
- **Ultrabajo consumo con 3 meses de duración de batería**
- **Diseño e implementación de interfaz sin código con SenseCraft HMI**
- **Funciona con plataformas de software populares**
- **Personalización flexible de hardware y software**

## Descripción general del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/150.png" style={{width:1000, height:'auto'}}/></div><br />

El hardware de reTerminal E1002 incluye:

1. **Pantalla ePaper a todo color de 7,3 pulgadas**: Pantalla a todo color con resolución de 800×480
2. **Botones**: Situados en la parte superior del dispositivo para el uso manual de la pantalla
3. **Micrófono**
4. **Ranura para tarjeta MicroSD**: Para almacenamiento ampliable
5. **Interruptor de encendido**: Situado en la parte posterior para encender/apagar el dispositivo
6. **LED de estado**: Indicador de usuario (verde)
7. **LED de alimentación**: Indicador de carga (rojo)
8. **Puerto USB-C**: Para carga y actualizaciones de firmware
9. **Puerto de expansión**: Cabecera de expansión de 8 pines que proporciona conexiones VDD, GND, I2C y GPIO

## Primeros pasos

### Preparativos

**Paso 1.** Desempaqueta tu reTerminal E1002 y asegúrate de que todos los componentes estén incluidos:
- Dispositivo reTerminal E1002
- Cable USB-C
- Guía de inicio rápido

**Paso 2.** (Opcional) Inserta una tarjeta microSD si planeas usar el dispositivo como marco de fotos digital o necesitas almacenamiento adicional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
La pantalla ePaper de la Serie reTerminal E solo admite tarjetas MicroSD de hasta 64 GB en formato Fat32.  
La tarjeta SD de 64 GB está formateada como exFAT por defecto. Después de formatearla a FAT32, se puede montar correctamente y utilizar para almacenar imágenes.
:::

**Paso 3.** (Opcional) Instala los controladores USB si es necesario:

Según tu sistema operativo, es posible que necesites instalar controladores USB para garantizar una comunicación adecuada con tu reTerminal E1002:

- **Para ordenadores Mac**: Descarga e instala el controlador CH34X desde el [sitio web oficial de WCH](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)

- **Para ordenadores Windows**: 
  - Los sistemas Windows 11 suelen incluir el controlador por defecto
  - Para Windows 10 y versiones anteriores, es posible que necesites descargar e instalar el controlador CH341 desde el [sitio web oficial de WCH](https://www.wch-ic.com/downloads/CH341SER_ZIP.html)

- **Para sistemas Linux**: La mayoría de las distribuciones Linux modernas incluyen los controladores necesarios por defecto

**Paso 4.** Actualiza el firmware para asegurarte de que tu dispositivo esté ejecutando la última versión:

1. Conecta tu reTerminal E1002 a tu ordenador utilizando el cable USB-C

2. Enciende el dispositivo utilizando el interruptor de encendido en la parte posterior

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/134.jpg" style={{width:700, height:'auto'}}/></div>

3. Visita **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** e inicia sesión en tu cuenta

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

4. Navega a la sección **Workspace**

5. Haz clic en **Device Flasher** en la esquina superior derecha

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/9.png" style={{width:1000, height:'auto'}}/></div>

6. Selecciona tu dispositivo reTerminal E1002 de la lista. Según este tutorial, debes elegir **reTerminal E1002 7.3" Full Color Display**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/11.png" style={{width:800, height:'auto'}}/></div>

7. Elige la última versión de firmware en el menú desplegable

8. Haz clic en **Flash** y espera a que se complete el proceso de actualización

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/10.png" style={{width:800, height:'auto'}}/></div>

:::note
1. Actualizar el firmware garantiza un rendimiento óptimo y acceso a las funciones más recientes. Se recomienda realizar esta actualización antes de utilizar tu dispositivo por primera vez.

2. No es posible grabar el firmware correctamente cuando el dispositivo está apagado o en modo de suspensión. Si seleccionas el puerto correcto para tu dispositivo pero nunca ves el progreso de la grabación del firmware, entonces puede que necesites despertar el dispositivo pulsando el botón verde en la parte superior de la unidad e intentarlo de nuevo.
:::

### Encendido

**Paso 1.** Enciende el dispositivo deslizando el interruptor de encendido a la posición **ON**. El interruptor de encendido se encuentra en la parte posterior de la unidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/135.gif" style={{width:700, height:'auto'}}/></div>


**Paso 2.** En el primer arranque, el dispositivo mostrará información del producto e instrucciones de configuración de red.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/17.png" style={{width:600, height:'auto'}}/></div><br />


**Paso 3.** El LED verde de usuario se encenderá durante aproximadamente 30 segundos, indicando que el dispositivo está encendido e inicializándose. Tras 30 segundos sin operar el dispositivo, para garantizar la energía, el dispositivo entrará automáticamente en modo de suspensión y el LED se apagará automáticamente.

:::tip
Por lo tanto, necesitamos completar los siguientes pasos de configuración de red durante este tiempo. Cuando el dispositivo entra en suspensión, no podrás encontrar el punto de acceso del dispositivo. Si esto ocurre, puedes despertar el dispositivo pulsando una vez el botón verde de activación del dispositivo.
:::

### Configuración de red

<Tabs>
<TabItem value="Network Setup vis PC" label="Configuración de red vía PC" default>

**Paso 1.** Conéctate al punto de acceso Wi-Fi del dispositivo desde tu teléfono inteligente u ordenador. El nombre del AP aparecerá en la pantalla (no se requiere contraseña). Las credenciales de la red son `reTerminal E1002-{MAC Adress}`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**Paso 2.** Una vez conectado, tu teléfono debería redirigirte automáticamente a la página de configuración Wi-Fi. Si no es así, abre un navegador y navega a `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**Paso 3.** Selecciona tu red Wi-Fi local e introduce la contraseña, luego haz clic en "Connect".

:::note
La pantalla ePaper de la Serie reTerminal E solo admite redes WiFi de 2,4 GHz, no de 5 GHz ni otras bandas.
:::

**Paso 4.** Tras una conexión correcta, el dispositivo emitirá un pitido de confirmación y mostrará una pantalla con el código de emparejamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/2.png" style={{width:600, height:'auto'}}/></div>

### Conexión a la plataforma SenseCraft

**Paso 1.** Visita [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) en tu navegador web y crea una cuenta o inicia sesión.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


**Paso 2.** Navega a la sección **Workspace** y haz clic en **Add Device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/7.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Nombra tu dispositivo e introduce el código de emparejamiento que se muestra en la pantalla de tu dispositivo y haz clic en **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**Paso 4.** Una vez emparejado, el dispositivo mostrará un mensaje que te pedirá crear tu primer panel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/18.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup vis SenseCraft APP" label="Configuración de red mediante SenseCraft APP">

Este método utiliza la aplicación móvil SenseCraft para configurar la red del dispositivo y añadirlo a tu cuenta SenseCraft mediante Bluetooth.

Primero, descarga la aplicación SenseCraft. Puedes encontrarla buscando "SenseCraft" en Google Play Store o Apple App Store. Alternativamente, puedes descargarla desde este sitio web.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div><br />

**Paso 1.** Abre la aplicación SenseCraft, inicia sesión en tu cuenta y navega a la pestaña **User**. Toca **Device Bluetooth Configuration** para comenzar el proceso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 2.** En la pantalla "Please select the device type", elige tu modelo de reTerminal (por ejemplo, **reTerminal E1001** o **reTerminal E1002**).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 3.** Sigue las instrucciones en pantalla para poner tu dispositivo en modo de difusión Bluetooth. Normalmente se hace presionando simultáneamente los botones de página **Up** y **Down**. Asegúrate de que el Bluetooth de tu teléfono esté activado. Toca **Scan**, y la aplicación detectará los dispositivos cercanos. Selecciona tu dispositivo de la lista para conectarte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 4.** Una vez conectado mediante Bluetooth, la aplicación te pedirá que configures la conexión Wi‑Fi. Selecciona tu red Wi‑Fi local de 2,4 GHz de la lista desplegable, introduce la contraseña y toca **Next**.

:::note
El dispositivo solo se puede configurar a través de una red Wi‑Fi de 2,4G.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 5.** La aplicación enviará las credenciales Wi‑Fi al dispositivo y lo añadirá a tu cuenta SenseCraft. Aparecerá un mensaje de "Device added successfully" al completarse. Ahora puedes tocar **Start exploring!** para continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 6.** Tu reTerminal ahora aparecerá en tu lista de dispositivos en la pestaña principal **Device** de la aplicación, conectado correctamente a tu cuenta SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**Paso 7.** Puedes tocar el dispositivo en la lista para ver su página de **Device Detail**. Desde aquí, puedes gestionar el dispositivo y subir fotos. Para un diseño de panel y lienzo más complejo, se te pedirá que uses la versión web de SenseCraft en el navegador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

## Creación de un panel

El reTerminal E1002 se integra perfectamente con la plataforma SenseCraft HMI, que proporciona potentes herramientas para crear y personalizar contenido para tu dispositivo. En lugar de detallar aquí las operaciones paso a paso, exploremos las funciones clave de la plataforma para ayudarte a entender lo que es posible.

### Funciones de SenseCraft HMI

**Generador de IA**

Deja que la inteligencia artificial diseñe tu panel. Simplemente describe qué información quieres mostrar y el Generador de IA creará automáticamente un diseño atractivo y funcional. Es perfecto para generar rápidamente pantallas de clima, calendarios, listas de tareas o paneles informativos sin trabajo de diseño manual.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/12.png" style={{width:300, height:'auto'}}/></div>

**Galería**

Transforma tu reTerminal E1002 en un marco de fotos digital con la función Galería. Sube tus imágenes favoritas y la plataforma las optimizará para la pantalla de papel electrónico. Crea presentaciones de diapositivas con tiempos de transición personalizados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/13.png" style={{width:1000, height:'auto'}}/></div>

**Canvas**

Diseña tu panel desde cero con Canvas, una interfaz de arrastrar y soltar que ofrece varios elementos:
- Bloques de texto con fuentes y tamaños personalizables
- Marcadores de posición de imagen
- Widgets para hora, fecha y clima
- Herramientas de visualización de datos
- Formas y divisores para la organización del diseño

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/14.png" style={{width:1000, height:'auto'}}/></div>

**Integración de fuentes RSS**

Mantente al día con tus fuentes de noticias, blogs o sitios web favoritos añadiendo fuentes RSS a tu panel. La función RSS te permite mostrar titulares, resúmenes o artículos completos de múltiples fuentes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/15.png" style={{width:1000, height:'auto'}}/></div>

**Visualización de contenido web**

Captura y muestra contenido web específico en tu dispositivo. La función Web puede renderizar partes seleccionadas de sitios web, lo que te permite mostrar información como horarios de transporte, teletipos bursátiles u otras fuentes de datos en línea.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/22.png" style={{width:1000, height:'auto'}}/></div>

### Primeros pasos con SenseCraft HMI

Después de emparejar tu dispositivo con la plataforma SenseCraft como se describe en la sección anterior, estarás listo para crear tu primer panel. Para obtener instrucciones detalladas sobre cómo usar cada función, consulta las páginas Wiki correspondientes:

- [Descripción general de SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/)

Una vez que hayas creado y guardado tu panel en la plataforma SenseCraft, simplemente haz clic en "Deploy to Device", selecciona tu reTerminal E1002 emparejado y tu contenido personalizado se transmitirá de forma inalámbrica al dispositivo. La pantalla de papel electrónico se actualizará para mostrar tu panel, y podrás usar los botones de navegación para cambiar entre varias páginas si las has creado.

## Funcionamiento del dispositivo

### Botón de actualización

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/137.jpg" style={{width:700, height:'auto'}}/></div>

El botón de actualización en la parte superior del dispositivo cumple varias funciones:

- **Pulsación corta**: Actualiza manualmente la pantalla y comprueba si hay contenido nuevo desde la plataforma SenseCraft. El zumbador emitirá un pitido para confirmar la acción. Este botón también se usa comúnmente para activar el dispositivo. Puedes usar este botón para activar un dispositivo cuando se ha puesto en reposo y normalmente un comando de actualización del panel no está disponible inmediatamente para el dispositivo.

- **Pulsación larga** (funcionalidad futura): Activará el modo de entrada de voz.

### Botones de navegación

Los botones izquierdo y derecho te permiten navegar entre varias páginas si tu panel contiene más de una página:

- **Botón izquierdo**: Navega a la página anterior

- **Botón derecho**: Navega a la página siguiente

### Restablecimiento de red

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/138.jpg" style={{width:700, height:'auto'}}/></div>

Si necesitas conectarte a una red Wi‑Fi diferente:

**Paso 1.** Mantén presionados ambos botones de navegación (izquierdo y derecho) simultáneamente durante 2 segundos.

**Paso 2.** El dispositivo entrará en modo de configuración Wi‑Fi y podrás seguir de nuevo los pasos de [Network Setup](#Network-Setup) para conectarte a una nueva red.

### Indicadores LED

- **LED rojo**:
  - Apagado: Completamente cargado o sin cargar
  - Siempre encendido: cargando

- **LED verde**:
  - Encendido durante 30 segundos al arrancar: El dispositivo se está encendiendo

### Funcionamiento con batería

Cuando funciona con alimentación por batería:

- El dispositivo entrará automáticamente en modo de bajo consumo entre actualizaciones

- La duración de la batería depende de la frecuencia de actualización (normalmente 3 meses con una carga completa y la configuración predeterminada)

- El dispositivo mostrará un icono de batería baja en la esquina superior derecha cuando el nivel de batería sea inferior al 20 %

:::tip
Si quieres escribir algo de código por tu cuenta para leer el voltaje de la batería, será más preciso añadir un retardo de 10 ms antes de la función analogRead().
:::

### Pines de expansión

El reTerminal E1002 incluye un conector de expansión de 8 pines (J2) que proporciona opciones de conectividad para añadir sensores externos, módulos u otro hardware para ampliar la funcionalidad de tu dispositivo. Este conector de expansión expone varios pines GPIO del ESP32-S3 e interfaces de comunicación, lo que lo convierte en un punto de conexión versátil para tus proyectos DIY.

#### Distribución de pines del conector de expansión

El conector de expansión de 8 pines (J2) tiene la siguiente distribución de pines:

<div class="table-center">
	<table align="center">
		<tr>
			<th>Pin (de arriba hacia abajo)</th>
			<th>Etiqueta</th>
			<th>Pin ESP32-S3</th>
			<th>Función</th>
			<th>Descripción</th>
		</tr>
		<tr>
			<td>1</td>
			<td>HEADER_3V3</td>
			<td>-</td>
			<td>Alimentación</td>
			<td>Fuente de alimentación de 3,3 V para dispositivos externos</td>
		</tr>
		<tr>
			<td>2</td>
			<td>GND</td>
			<td>-</td>
			<td>Tierra</td>
			<td>Referencia de tierra común</td>
		</tr>
		<tr>
			<td>3</td>
			<td>ESP_IO46</td>
			<td>GPIO46</td>
			<td>GPIO/ADC</td>
			<td>Entrada/salida de propósito general con capacidad de entrada analógica</td>
		</tr>
		<tr>
			<td>4</td>
			<td>ESP_IO2/ADC1_CH4</td>
			<td>GPIO2</td>
			<td>GPIO/ADC</td>
			<td>GPIO de propósito general con capacidad de entrada analógica (canal 4 de ADC1)</td>
		</tr>
		<tr>
			<td>5</td>
			<td>ESP_IO17/TX1</td>
			<td>GPIO17</td>
			<td>GPIO/UART TX</td>
			<td>GPIO o señal de transmisión (TX) UART</td>
		</tr>
		<tr>
			<td>6</td>
			<td>ESP_IO18/RX1</td>
			<td>GPIO18</td>
			<td>GPIO/UART RX</td>
			<td>GPIO o señal de recepción (RX) UART</td>
		</tr>
		<tr>
			<td>7</td>
			<td>ESP_IO20/I2C0_SCL</td>
			<td>GPIO20</td>
			<td>GPIO/I2C SCL</td>
			<td>GPIO o señal de reloj I2C</td>
		</tr>
		<tr>
			<td>8</td>
			<td>ESP_IO19/I2C0_SDA</td>
			<td>GPIO19</td>
			<td>GPIO/I2C SDA</td>
			<td>GPIO o señal de datos I2C</td>
		</tr>
	</table>
</div>

## Colocación del dispositivo

El reTerminal E1002 viene con un soporte accesorio impreso en 3D que te permite colocar el dispositivo en posición vertical para una visualización óptima:

**Paso 1.** Localiza el soporte impreso en 3D incluido en el paquete.

**Paso 2.** Coloca el soporte contra el área de montaje designada en la parte trasera inferior del reTerminal E1002 donde se encuentran las tuercas incrustadas.

**Paso 3.** Utiliza un destornillador largo para fijar el soporte al dispositivo apretando los tornillos en las tuercas incrustadas en la parte trasera del reTerminal E1002.

**Paso 4.** Una vez fijado de forma segura, coloca el reTerminal E1002 sobre una superficie plana donde el soporte lo mantenga en posición vertical.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

:::note
El soporte proporciona un ángulo de visión fijo y no se puede ajustar. Esta posición fija está diseñada para ofrecer una visibilidad óptima en la mayoría de los escenarios de uso.

El soporte permite colocar el dispositivo sobre escritorios, encimeras o estanterías, lo que lo hace ideal para usarlo como pantalla de información, panel de control o marco de fotos digital en diversos entornos.
:::

## Solución de problemas

### P1: El dispositivo no enciende

- Asegúrate de que el interruptor de encendido esté en la posición ON
- Conecta el cable USB-C para cargar el dispositivo
- Comprueba si el LED rojo está siempre encendido (indicando carga)
- Si utilizas alimentación por batería, asegúrate de que la batería esté correctamente conectada y cargada

### P2: No se puede conectar al Wi-Fi

- Verifica que estés introduciendo la contraseña de Wi-Fi correcta
- Asegúrate de que tu red Wi-Fi esté operativa
- Comprueba si tu router Wi-Fi es compatible con redes de 2,4 GHz (5 GHz no es compatible)
- Intenta colocar el dispositivo más cerca de tu router Wi-Fi

### P3: La pantalla no se actualiza

- Pulsa el botón de actualización para activar manualmente una actualización
- Verifica que el dispositivo esté conectado a Wi-Fi (sin icono de desconexión en la esquina)
- Comprueba tu cuenta de SenseCraft para asegurarte de que el panel de control esté desplegado correctamente
- Si el problema persiste, intenta reiniciar el dispositivo

### P4: Conexión de red perdida

- El dispositivo intentará reconectarse automáticamente a las redes conocidas
- Cuando se vuelva a conectar, el icono de desconexión de Wi-Fi desaparecerá
- Si no puede reconectarse, sigue el procedimiento de Restablecimiento de red anterior

## Recursos

- [Esquemático del reTerminal E1002 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004321_reTerminal_E1002_V1_2_SCH_251120.pdf)
- [Hoja de datos del ESP32-S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [Documentación de la plataforma SenseCraft HMI](https://wiki.seeedstudio.com/es/sensecraft_hmi_overview)
- [Archivo STP del modelo 3D exterior completo](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reterminal_esp-250904.stp)
<!-- - [GitHub Repository](/es/getting_started_with_reterminal_e1002) -->

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
