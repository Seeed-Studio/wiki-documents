---
description: Getting started with Seeed Studio 24GHz mmWave for XIAO
title: Seeed Studio 24GHz mmWave para XIAO
keywords:
- mmwave
- radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/mmwave_for_xiao
last_update:
  date: 07/17/2025
  author: Guillermo
---

# Seeed Studio 24GHz mmWave para XIAO

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:300, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

## Introducción

El sensor de ondas milimétricas de 24GHz para XIAO - Detección de Presencia Humana Estática, es una placa de expansión para la serie Seeed Studio XIAO. Se trata de un sensor radar de alta sensibilidad con antena integrada, basado en el principio FMCW. Combinando procesamiento de señales de radar con algoritmos precisos de detección corporal, es capaz de detectar cuerpos humanos tanto en movimiento como en estado estacionario.

### Características

- **Basado en el principio FMCW**: alta sensibilidad e inmunidad a interferencias ambientales.
- **Detección integral del cuerpo humano**: detecta con alta sensibilidad tanto cuerpos en movimiento como personas estáticas, micromovimientos, y personas sentadas o acostadas.
- **Ajuste inteligente multinivel de parámetros**: configurable por Bluetooth o puerto serial. También se puede configurar mediante app, sin necesidad de conexión por puerto serial.
- **Amplio ángulo de detección y largo alcance**: campo de visión de hasta 60 grados y un rango de detección de hasta 5 metros.
- **Excelente penetración de carcasa y estética**: puede funcionar oculto dentro del producto sin perforaciones visibles, gracias a su capacidad de penetrar carcasas no metálicas.

### Aplicaciones

- Control de iluminación por presencia
- Protección de vida y seguridad
- Electrodomésticos inteligentes
- Seguridad inteligente

### Especificaciones

<div class="table-center">
  <table align="center">
    <tr>
        <th>Parámetro</th>
        <th>Valor</th>
    </tr>
    <tr>
        <td align="center">Frecuencia de operación</td>
        <td align="center">24GHz ~ 24.25GHz</td>
    </tr>
    <tr>
        <td align="center">Voltaje de operación</td>
        <td align="center">DC 5V</td>
    </tr>
    <tr>
        <td align="center">Capacidad de alimentación</td>
        <td align="center">>200mA</td>
    </tr>
    <tr>
        <td align="center">Corriente promedio</td>
        <td align="center">79mA</td>
    </tr>
    <tr>
        <td align="center">Modulación</td>
        <td align="center">FMCW</td>
    </tr>
    <tr>
        <td align="center">Interfaz</td>
        <td align="center">GPIO (nivel IO 3.3V), UART</td>
    </tr>
    <tr>
        <td align="center">Aplicación objetivo</td>
        <td align="center">Sensor de presencia humana</td>
    </tr>
    <tr>
        <td align="center">Distancia de detección</td>
        <td align="center">0.75m ~ 6m (ajustable)</td>
    </tr>
    <tr>
        <td align="center">Ángulo de detección</td>
        <td align="center">±60°</td>
    </tr>
    <tr>
        <td align="center">Resolución de distancia</td>
        <td align="center">0.75m</td>
    </tr>
    <tr>
        <td align="center">Ancho de banda de barrido</td>
        <td align="center">250MHz</td>
    </tr>
    <tr>
        <td align="center">Temperatura ambiente</td>
        <td align="center">-40℃ ~ 85℃</td>
    </tr>
    <tr>
        <td align="center">Dimensiones</td>
        <td align="center">18mm x 22mm</td>
    </tr>
  </table>
</div>

## Descripción del Hardware

Este sensor mmWave es compatible con toda la gama XIAO, por lo tanto, sus pines siguen el mismo esquema de definición. Considerando el uso generalizado de puertos seriales, se ha diseñado una conexión serial por software.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/2.png" style={{width:800, height:'auto'}}/></div>

El sensor se basa principalmente en los pines de puerto serial por software (D2 - TX, D3 - RX) y en una alimentación de 3.3V. Los demás pines no se utilizan.

## Primeros Pasos

Este módulo sensor permite tanto la visualización directa por software (Bluetooth) como el desarrollo personalizado mediante UART con placas XIAO.  
Si deseas comenzar a visualizar los datos del sensor rápidamente, consulta la sección **Primeros Pasos** usando el software proporcionado.

## Conexiones de Hardware

El sensor está diseñado para ser compatible con XIAO. Para usarlo, necesitas preparar una placa XIAO e instalar los headers hembra en la placa para conectarlo.  
**Atención:** Asegúrate de conectar el sensor en la dirección correcta. Si lo conectas al revés, podrías dañar el sensor o la placa XIAO.

:::caution
La dirección correcta de conexión es con la antena del sensor orientada hacia afuera.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

Una vez que verifiques que la conexión es correcta, puedes conectar el cable USB tipo C a la computadora o fuente de poder, y el sensor comenzará a funcionar.

### Software del Sensor mmWave

El software **HLKRadarTool** permite observar directamente los valores del sensor. Actualmente es compatible con iOS, Android y Windows.

- [Descargar HLKRadarTool desde Google Play](https://play.google.com/store/apps/details?id=com.hlk.hlkradartool).

- [Descargar HLKRadarTool desde App Store](https://apps.apple.com/us/app/hlkradartool/id1638651152).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/3.png" style={{width:500, height:'auto'}}/></div>


- [Descargar HLKRadarTool para Windows](https://files.seeedstudio.com/wiki/mmwave-for-xiao/HLKRadarTool.zip)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/4.png" style={{width:250, height:'auto'}}/></div>

A continuación, se describirá cómo utilizar este software en conjunto con el sensor.

### Guía de Operación con Software Móvil

Si deseas observar los valores del sensor en tu teléfono móvil, necesitas un teléfono con Bluetooth y la app instalada.

**Paso 1.** Abre la app; ésta buscará radares cercanos. El nombre de difusión del dispositivo es **HLK-LD2410_xxxx** (xxxx son los últimos cuatro dígitos de la MAC).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/6.png" style={{width:500, height:'auto'}}/></div>

:::tip
La distancia de uso de la app no debe exceder el rango de la señal Bluetooth (aprox. 4 m).
:::

**Paso 2.** Una vez conectado el módulo, podrás ver la información del radar, depurar y guardar parámetros.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/7.png" style={{width:400, height:'auto'}}/></div>

**Paso 3.** En la opción **More** (arriba a la derecha), accede al menú de configuración para ajustar parámetros y funciones del sensor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/8.png" style={{width:400, height:'auto'}}/></div>

:::tip
Antes de modificar parámetros, lee detenidamente el [Manual de Protocolo de Usuario](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf) y sigue sus indicaciones.
:::

### Guía de Operación con Software para Windows

Para facilitar la prueba y configuración rápida, se proporciona una herramienta de PC. Con ella puedes conectar el puerto serie, leer y configurar parámetros, recibir datos de detección y verlos en tiempo real.

**Paso 1.** Conecta el módulo al convertidor USB-serie correctamente:

<div class="table-center">
	<table align="center">
		<tr>
			<th> </th>
			<th>Convertidor USB a puerto serial</th>
            <th>Sensor mmWave</th>
		</tr>
		<tr>
			<td rowspan="5"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/9.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center">3V3</td>
			<td align="center">3V3</td>
		</tr>
		<tr>
			<td align="center">GND</td>
			<td align="center">GND</td>
		</tr>
		<tr>
			<td align="center">RX</td>
			<td align="center">TX</td>
		</tr>
		<tr>
			<td align="center">TX</td>
			<td align="center">RX</td>
		</tr>
	</table>
</div>

**Paso 2.** En la herramienta de PC, selecciona el puerto serie, ajusta la baudios a **256000**, elige **Engineering Mode** y haz clic en **Connect**.

:::tip
Si abriste el software antes de conectar el sensor, puede que necesites pulsar **Refresh** para actualizar la lista de puertos.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/10.png" style={{width:800, height:'auto'}}/></div>

**Paso 3.** Tras la conexión, haz clic en **Start**. La interfaz gráfica mostrará los resultados y datos de prueba.

:::note
No podrás leer ni configurar parámetros mientras esté activo; detén la prueba para acceder a la configuración.
:::

Los círculos indican el estado del objetivo:  
- Rojo = MovingTarget  
- Morado = StaticTarget  
- Verde = NoTarget

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/11.png" style={{width:800, height:'auto'}}/></div>

## Recuperación de Fallos del Sensor

Si el sensor presenta anomalías (sin datos, bloqueos, etc.), puedes restaurar el firmware vía Bluetooth:

En la app móvil, en la esquina superior derecha del interfaz principal selecciona **More** y luego **Initialize**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/14.png" style={{width:500, height:'auto'}}/></div>

## Actualización OTA

Cuando haya una versión nueva de firmware, aparecerá la palabra **upgradeable** junto a la versión. Mantén presionado el número de versión para entrar al menú de actualización; solo las versiones **V1.07.22091516** o superiores lo soportan.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/12.png" style={{width:800, height:'auto'}}/></div>

La actualización dura entre 1–3 minutos. Debe iniciarse desde la app, y no desconectar ni reiniciar el módulo ni forzar el cierre de la app. Si falla, el sensor dejará de funcionar. En caso de fallo, reinicia el módulo, reconéctalo a la app y verás “waiting for upgrade” en la lista de dispositivos:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/13.png" style={{width:800, height:'auto'}}/></div>

Selecciona el dispositivo para reintentar la actualización; la funcionalidad se restaurará al completarse correctamente.

## Recursos

- **[PDF]** [Datasheet 24GHz mmWave for XIAO V1.00](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf)  
- **[PDF]** [Manual de Protocolo de Usuario](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)  
- **[PDF]** [SCH 24GHz mmWave for XIAO](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz-mmWave-for-xiao-SCH.pdf)  

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos!  
Estamos para brindarte soporte y garantizar la mejor experiencia.  
Ofrecemos varios canales de comunicación según tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>







