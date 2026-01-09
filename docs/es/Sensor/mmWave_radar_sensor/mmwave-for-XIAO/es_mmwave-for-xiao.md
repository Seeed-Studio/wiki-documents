---
description: Comenzando con Seeed Studio 24GHz mmWave para XIAO
title: 24GHz mmWave para XIAO
keywords:
- mmwave
- radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/mmwave_for_xiao
sku: 101010001
last_update:
  date: 11/09/2023
  author: Citric
---

# Seeed Studio 24GHz mmWave para XIAO

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:300, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div><br />

## Introducción

El Sensor mmWave de 24GHz para XIAO - Presencia Estática Humana es una placa de expansión para la serie Seeed Studio XIAO. Es un sensor de radar mmwave con antena integrada y alta sensibilidad que se basa en el principio FMCW. Combinado con el procesamiento de señales de radar y algoritmos precisos de detección del cuerpo humano, puede identificar cuerpos humanos en estados de movimiento y estacionarios.

### Características

- **Basado en el principio FMCW**: altamente sensible e inmune a interferencias ambientales
- **Detección Integral del Cuerpo Humano**: El sensor no solo detecta cuerpos humanos en movimiento con alta sensibilidad, sino que también exhibe sensibilidad a individuos estáticos, micro-movimientos, así como individuos en posiciones sentadas o acostadas.
- **Ajuste de Parámetros Inteligente Multi-Nivel**: Ajustado usando Bluetooth o un puerto serie, proporcionando flexibilidad para satisfacer condiciones ambientales variables y cambios de escena. Además, soporta configuración directa de parámetros a través de una aplicación, eliminando la necesidad de una conexión de puerto serie.
- **Amplio Ángulo de Detección y Larga Distancia de Detección**: Con un campo de visión de hasta 60 grados, el sensor puede detectar movimiento desde un ángulo amplio. Además, puede detectar objetos hasta 5 metros de distancia.
- **Excelente Penetración de Carcasa y Mejora Estética**: Tiene buena penetración de carcasa, permitiéndole trabajar discretamente dentro de la carcasa del producto sin necesidad de perforaciones en la superficie.

### Aplicación

- Control de luz con sensor de cuerpo humano
- Protección de seguridad de vida
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
        <td align="center">Capacidad de fuente de alimentación</td>
        <td align="center">>200mA</td>
    </tr>
    <tr>
        <td align="center">Corriente promedio de operación</td>
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

## Descripción General del Hardware

Este sensor mmwave es compatible con toda la gama de XIAO, por lo que las definiciones de pines siguen las definiciones de pines de XIAO. Sin embargo, considerando el uso generalizado de puertos serie, hemos diseñado una conexión serie suave para el sensor mmwave.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/2.png" style={{width:800, height:'auto'}}/></div>

El sensor depende en gran medida de los puertos serie suaves (D2 - TX, D3 - RX) y una fuente de alimentación de 3.3V. Aparte de eso, ninguno de los otros pines será utilizado.

## Primeros Pasos

Este módulo sensor admite tanto la visualización directa por software (vía Bluetooth) como el desarrollo secundario (usando XIAO y UART). Si deseas observar los valores del sensor lo antes posible, puedes consultar los pasos de **Primeros Pasos** para usar el software que proporcionamos.

## Conexiones de Hardware

El sensor está diseñado para compatibilidad con XIAO, por lo que en general, si quieres usar este sensor, necesitas preparar un XIAO e instalar la fila de pines hembra para el sensor. Al conectar al XIAO, presta especial atención a la dirección de instalación del sensor, por favor no lo conectes al revés, de lo contrario es probable que quemes el sensor o el XIAO.

:::caution
La dirección correcta a seguir es que la antena del sensor debe mirar hacia afuera.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

Después de confirmar que la dirección de conexión es correcta, puedes conectar el cable tipo USB-C a la computadora o fuente de alimentación, y el sensor comenzará a funcionar.

### Software del Sensor mmwave

El software HLKRadarTool puede usarse para observar los valores del sensor del radar directamente. El software actualmente admite sistemas IOS, Android y Windows.

- [Descargar HLKRadarTool desde Google Play](https://play.google.com/store/apps/details?id=com.hlk.hlkradartool).

- [Descargar HLKRadarTool desde App Store](https://apps.apple.com/us/app/hlkradartool/id1638651152).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/3.png" style={{width:500, height:'auto'}}/></div>

- [Descargar HLKRadarTool para Windows](https://files.seeedstudio.com/wiki/mmwave-for-xiao/HLKRadarTool.zip)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/4.png" style={{width:250, height:'auto'}}/></div>

A continuación, describimos cómo usar estos software en conjunto con el sensor.

### Guía de Operación del Software Móvil

Si deseas observar los valores del sensor en tu teléfono móvil, entonces necesitarás comunicarte con tu teléfono móvil usando el Bluetooth del sensor, lo que significa que también necesitarás un teléfono móvil con Bluetooth habilitado. Y descargar el software mencionado anteriormente con anticipación.

**Paso 1.** Abre la aplicación, y la aplicación busca dispositivos de radar cercanos. El nombre de difusión del dispositivo es **HLK-LD2410_xxxx** (xxxx son los últimos cuatro dígitos de la dirección mac).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/6.png" style={{width:500, height:'auto'}}/></div>

:::tip
La distancia de uso de la APP no debe exceder el rango de señal Bluetooth (dentro de 4 metros).
:::

**Paso 2.** Después de que el módulo se conecte exitosamente, puedes ver la información del radar, o depurar y guardar los parámetros.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/7.png" style={{width:400, height:'auto'}}/></div>

**Paso 3.** En la opción Más en la esquina superior derecha del software, puedes acceder al menú de configuración para establecer parámetros personalizados y características para el sensor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/8.png" style={{width:400, height:'auto'}}/></div>

:::tip
Antes de modificar estos parámetros y configuraciones, recomendamos que leas el [Manual de Protocolo de Usuario](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf) cuidadosamente y te refieras a las instrucciones del manual para modificar estos. Para más detalles sobre el significado de los valores mostrados por el software y los parámetros de configuración, por favor lee el [Manual de Protocolo de Usuario](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf).
:::

### Guía de Operación del Software de Windows

Para facilitar al usuario probar y configurar el módulo de manera rápida y eficiente, se proporciona una herramienta de configuración para PC. El usuario puede usar este software de herramienta para conectar el puerto serie del módulo, leer y configurar los parámetros del módulo, y recibir los resultados de detección reportados por el módulo. Datos, y visualización visual en tiempo real, lo que facilita enormemente el uso de los usuarios.

**Paso 1.** Usa la herramienta USB a puerto serie para conectar el puerto serie del módulo correctamente.

<div class="table-center">
 <table align="center">
  <tr>
   <th> </th>
   <th>Herramienta USB a puerto serie</th>
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

**Paso 2.** Selecciona el número de puerto serie correspondiente en la herramienta del ordenador host, establece la velocidad de baudios a **256000**, selecciona el **Modo de Ingeniería**, y haz clic para **Conectar** el dispositivo.

:::tip
Si abriste el software antes de conectar el sensor a tu ordenador, es posible que necesites hacer clic en Actualizar para refrescar el número de puerto.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/10.png" style={{width:800, height:'auto'}}/></div>

**Paso 3.** Después de que la conexión sea exitosa, haz clic en el botón Iniciar, y la interfaz gráfica de la derecha mostrará los resultados de la prueba y los datos. Después de que la conexión sea exitosa, haz clic en el botón Iniciar, y la interfaz gráfica de la derecha mostrará los resultados de la prueba y los datos.

:::note
Los parámetros no pueden ser leídos y configurados después de hacer clic en iniciar, y la configuración solo puede realizarse después de detener.
:::

La pelota es la indicación de salida del estado del objetivo: rojo significa que hay un objetivo en movimiento; púrpura significa que hay un objetivo estacionario; verde significa que no hay nadie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/11.png" style={{width:800, height:'auto'}}/></div>

## Recuperación Anormal del Sensor

Si has encontrado anomalías del radar en el proceso de usar el sensor, como datos que no se reportan, tiempo de inactividad y demás. Puedes intentar restaurar el firmware del sensor según aquí.

El método para recuperar el firmware es usar la APP del teléfono móvil con función Bluetooth, en la esquina superior derecha de la interfaz principal del software, selecciona **Más**, y luego selecciona **Inicializar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/14.png" style={{width:500, height:'auto'}}/></div>

## Actualización OTA

Cuando el firmware del dispositivo ha sido actualizado, la palabra **actualizable** aparecerá en la versión del firmware, mantén presionado el número de versión para entrar a la interfaz de actualización; solo las versiones **V1.07.22091516** o más nuevas soportan la actualización.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/12.png" style={{width:800, height:'auto'}}/></div>

El tiempo total de actualización toma de 1 a 3 minutos. La actualización debe realizarse desde el módulo, de lo contrario la actualización fallará si la señal Bluetooth es pobre.

No apagues o reinicies el módulo antes de que la actualización se complete, y no salgas forzosamente de la APP, de lo contrario la actualización fallará. Si la actualización falla, el programa del sensor se deshabilitará y la detección del sensor no será posible. Si la actualización del dispositivo falla, por favor reinicia el dispositivo y reconecta la APP, y aparecerá un aviso de "esperando actualización" en la lista de dispositivos:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/13.png" style={{width:800, height:'auto'}}/></div>

Haz clic en el dispositivo a actualizar para re-actualizar, y la función del radar puede ser restaurada solo después de que la actualización sea exitosa.

## Recursos

- **[PDF]** [Hoja de Datos del mmWave de 24GHz para XIAO-V1.00](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf)
- **[PDF]** [Manual de Protocolo de Usuario del mmWave de 24GHz para XIAO](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)
- **[PDF]** [Esquemático del mmWave de 24GHz para XIAO](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz-mmWave-for-xiao-SCH.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
