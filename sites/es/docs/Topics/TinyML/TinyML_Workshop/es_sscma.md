---
description: Este es un proyecto / plataforma de código abierto enfocado en IA embebida.
title: El "Parpadeo" de IA
keywords:
- tinyml course
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/sscma
last_update:
  date: 08/26/2024
  author: Matthew
---

## Familiarízate con las herramientas que estamos usando

### Plataforma SenseCraft AI

La [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) de Seeed Studio es una solución de IA basada en navegador.

Permite a los usuarios desplegar sin esfuerzo una vasta biblioteca de modelos de IA disponibles públicamente en sus dispositivos edge, proporcionando una experiencia fluida y fácil de usar, permitiéndote desplegar modelos de IA públicos directamente en tus dispositivos edge con **solo unos pocos clics**.

:::info
El núcleo de esto es un proyecto de código abierto y lo hemos compartido en [GitHub](https://github.com/Seeed-Studio/ModelAssistant) y también ofrecemos el [método de desarrollo](/es/ModelAssistant_Introduce_Overview).
:::

#### Cuenta de Usuario

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) es una plataforma abierta que permite a los usuarios navegar por todos los modelos de IA públicos y páginas de inicio sin iniciar sesión. Solo necesitas registrarte e iniciar sesión cuando necesites desplegar un modelo, o compartir tu propio modelo.

[SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) y [Plataforma de Datos SenseCraft](https://sensecap.seeed.cc/portal/#/login) (originalmente Plataforma en la Nube SenseCAP) son ambos servicios de software proporcionados por seeed studio para usuarios, los usuarios solo necesitan registrarse para una cuenta en cualquiera de las plataformas, y luego pueden usar la misma cuenta para iniciar sesión en ambas plataformas.

#### Registrarse

1. Ingresa tu nombre y email válido, y luego haz clic en "get capcha"<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/1.png)

2. Obtén el código de verificación de tu email e ingrésalo en la página de registro

:::note
el código de verificación es válido por 10min, por favor completa el registro dentro de 10 minutos
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/2.png)

3. Ingresa tu contraseña y otra información de usuario para completar tu registro. <br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/3.png)

#### Iniciar sesión

Inicia sesión con tu cuenta de email registrada

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/4.png)

Más sobre la plataforma SenseCraft AI puedes consultar [aquí](https://wiki.seeedstudio.com/es/sensecraft_ai_main/).

## Modelos de IA en la Plataforma SenseCraft AI

### Lista de modelos

Los modelos de IA públicos muestran todos los modelos de IA publicados; Los modelos de IA personalizados muestran todos tus propios modelos de IA subidos. El modelo se muestra en la lista como sigue

- Imagen de ejemplo de inferencia del modelo
- Nombre del Modelo
- Descripción del modelo
- Tipo de tarea de este modelo como detección, clasificación, segmentación, pose, generación
- Dispositivo Soportado: Dispositivo que soporta el despliegue de este modelo
- El nombre de usuario que publicó este modelo

**Buscar modelo**<br/>
Proporciona función de búsqueda basada en varios tipos de información clave en el modelo como nombre del modelo, tarea del modelo, dispositivo soportado, editor del modelo

**Modelo favorito**<br/>
Los usuarios pueden marcar como favoritos los modelos públicos

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/7.png)

Más información sobre Modelos de IA en la plataforma SenseCraft AI puedes consultar [aquí](https://wiki.seeedstudio.com/es/sensecraft_ai_overview/#pretrained-models).

## Espacio de Trabajo del Dispositivo

La plataforma SenseCraft AI proporciona un zoológico de modelos de IA para que los usuarios compartan y descarguen modelos de IA, y también tiene un espacio de trabajo del dispositivo donde los usuarios pueden ver los resultados de inferencia de sus dispositivos en tiempo real y gestionar sus dispositivos para mejorar la conveniencia y flexibilidad de la gestión de dispositivos.

### Espacio de Trabajo XIAO ESP32S3

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image4.png)

Puedes aprender más a través de la [documentación del Espacio de Trabajo XIAO ESP32S3](https://wiki.seeedstudio.com/es/XIAO_ESP32S3_Workspace/).

### Espacio de Trabajo Grove-Vision AI v2

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image10.png)

Puedes aprender más a través de la [documentación del Espacio de Trabajo Grove-Vision AI v2](https://wiki.seeedstudio.com/es/Grove_Vision_AI_v2_Workspace/).

### Espacio de Trabajo Nvidia Jeson

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

Puedes aprender más a través de la [documentación del Espacio de Trabajo Nvidia Jeson](https://wiki.seeedstudio.com/es/Nvidia_Jeson_Workspace/).

#### SenseCraft AI-Jetson

SenseCraft AI-Jetson es un kit de herramientas de desarrollo y plataforma diseñada para dispositivos NVIDIA Jetson Edge AI. Simplemente ejecuta el "Script de Inicio Rápido" y se te presentará una interfaz de usuario interactiva para ver una aplicación de ejemplo con un video precargado y un modelo de IA precargado. Si quieres añadir tu propia cámara USB, cámara IP, ¡puedes hacerlo simplemente con unos pocos clics!

Además de los diversos modelos de IA integrados que ofrecemos listos para usar, puedes acceder a una gran cantidad de modelos públicos en la plataforma SenseCraft AI y podrás descargar e implementar modelos de IA para escenarios específicos y crear soluciones de IA personalizadas basadas en tus necesidades. SenseCraft AI es tu socio inteligente de toma de decisiones para visión artificial, proporcionándote capacidades de inferencia y construcción de soluciones simples, flexibles y eficientes.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif)

Puedes aprender más a través de la [documentación de SenseCraft AI-Jetson](https://wiki.seeedstudio.com/es/SenseCraft_AI_Jetson/).

## El "Parpadeo" de IA: Usando IA Rápidamente

### 1. Comenzar con Reconocimiento Facial

Primero vamos al [Sitio Web de Implementación SenseCraft AI](https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974) luego simplemente conecta el XIAO ESP32S3 Sense a tu PC mediante un cable de datos para mostrar instantáneamente el reconocimiento facial.

#### Paso 1. Instalar la placa de expansión XIAO ESP32S3 Sense

Primero, necesitamos conectar correctamente la placa de expansión XIAO ESP32S3 Sense al XIAO. Instalar la placa de expansión es muy simple, solo necesitas alinear el conector en la placa de expansión con el conector B2B en el XIAO ESP32S3, presionarlo fuerte y escuchar un "clic", la instalación está completa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

#### Paso 2. Conectar el XIAO a tu PC

Conecta el XIAO a tu PC usando un cable de datos con función de transferencia de datos.

#### Paso 3. Ir a la página de la Plataforma SenseCraft AI y conectar el XIAO

Haz clic en el botón de abajo para ir a la página principal de la Plataforma SenseCraft AI.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"2"}>Plataforma SenseCraft AI</font></span></strong></a>
</div><br />

Una vez que estemos en la página principal de la Plataforma SenseCraft AI, primero necesitamos conectar el XIAO ESPS3, para eso, haz clic en el botón **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai3.png" style={{width:800, height:'auto'}}/></div>

El navegador entonces mostrará una ventana emergente. Necesitamos seleccionar el puerto correcto para XIAO aquí. Para **Windows**, este puerto usualmente comienza con **COM**, y en el caso de **MacOS**, este puerto usualmente comienza con **/dev/tty**. Y tendrá las palabras **USB JTAG**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai4.png" style={{width:800, height:'auto'}}/></div>

Hacer clic en el botón **Connect** solo resultará en una identificación automática de la placa y se está leyendo la información de configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai5.png" style={{width:800, height:'auto'}}/></div>

Luego podemos movernos al botón **Select Model** y hacer clic en él para encontrar otra ventana emergente. Aquí seleccioné el reconocimiento facial para la demostración. Después de seleccionarlo, haz clic en el botón **Send** y espera unos segundos. Verás directamente los resultados:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai6.gif" style={{width:500, height:'auto'}}/></div>

¡Lo tienes! ¡Has implementado exitosamente tu primer modelo ML!

### 2. SenseCraft Triggers - Hacer una acción de retroalimentación simple

Es decir, cuando reconocemos nuestra cara, hacemos que el LED del XIAO se encienda. Para eso, ve a la sección **Output** y Selecciona "Trigger action" para configurar un disparador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai7.png" style={{width:800, height:'auto'}}/></div>

Aquí, cuando la detección facial tenga confianza por encima del 50% y habilite un disparador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai8.png" style={{width:800, height:'auto'}}/></div>

Y aquí la **Trigger Action** es "Encender el LED". Después de eso, haz clic en "Send" y puedes ver, cada vez que se detecte la cara, puedes ver que el LED integrado se enciende.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai9.png" style={{width:800, height:'auto'}}/></div>

:::info
**¡Felicitaciones!** ¡Has implementado exitosamente el Sistema Automatizado de IA!
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai10.png" style={{width:800, height:'auto'}}/></div>
:::

<!-- ### 2. Detección de Palabras Clave (KWS) para controlar el LED integrado de XIAO. 

#### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/oa0BGRXnb8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### ¡Cómo funciona!

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/img/KWS_Diagram.png" style={{width:1000, height:'auto'}}/></div> 

**Paso 2.1. Descargar todos los archivos necesarios**

Descarga los tres archivos binarios a continuación.

<div class="table-center">
	<table align="center">
		<tr>
			<td>bootloader.bin</td>
			<td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.bootloader.bin" target="_blank"><b>Descargar</b></a></td>
		</tr>
		<tr>
			<td>partition-table.bin</td>
			<td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.partitions.bin" target="_blank"><b>Descargar</b></a></td>
		</tr>
    <tr>
      <td>XIAO_ESP32S3_Speech_Recognition.bin</td>
      <td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.bin" target="_blank"><b>Descargar</b></a></td>
    </tr>
	</table>
</div>

**Paso 2. Flashear todos los archivos al XIAO**

Por favor, haz clic en el botón de abajo para ir a la página de Herramientas de Flash de la Plataforma SenseCraft AI.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Ir a la Plataforma SenseCraft AI</font></span></strong></a>
</div><br />

Una vez que estés en la página web, por favor haz clic en el botón **Connect** desde **Deployment** y luego selecciona el número de puerto de tu XIAO. Nuevamente, debería estar claramente etiquetado como **USB JTAG**.

* **Paso 2.1** Seleccionar Deployment 
* **Paso 2.2** Seleccionar Deploy
* **Paso 2.3** Hacer clic en **Connect**

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/EdgeLab/src/img/edgeLab01.png?raw=true" style={{width:1000, height:'auto'}}/></div> 

* **Paso 2.4** Seleccionar el XIAO - debería estar claramente etiquetado como **USB JTAG**.
* **Paso 2.5** Finalmente hacer clic en Connect.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/EdgeLab/src/img/edgeLab2.png?raw=true" style={{width:1000, height:'auto'}}/></div> 

Una vez que la conexión sea correcta, podemos seleccionar el archivo a subir. Luego, por favor sigue el formato de abajo, llenando la dirección de flash y seleccionando el archivo correcto por turnos.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/EdgeLab/src/img/edgeLab3.png?raw=true" style={{width:1000, height:'auto'}}/></div> 

<div class="table-center">
	<table align="center">
		<tr>
			<td>1</td>
			<td>0x0000</td>
			<td>bootloader.bin</td>
		</tr>
		<tr>
			<td>2</td>
			<td>0x8000</td>
			<td>partition-table.bin</td>
		</tr>
    <tr>
	  <td>3</td>
      <td>0x10000</td>
      <td>XIAO_ESP32S3_Speech_Recognition.bin</td>
    </tr>
	</table>
</div>

Luego haz clic en **Burn**, observa la barra de progreso para todos los archivos y asegúrate de que cada archivo se flashee exitosamente antes de irte.

**Paso 3.** Reinicia para ver el efecto

Una vez que todos los archivos se hayan subido exitosamente, puedes presionar el botón de reset para permitir que el programa comience a ejecutarse. El efecto de este programa de muestra es que cuando el micrófono del XIAO ESP32S3 Sense detecta el comando Hello que pronuncias, la luz naranja LED incorporada se iluminará. Cuando se monitorea el comando Stop que dices, la luz naranja se apaga.

 -->
<!-- 
### 3. Más Modelos Precompilados Personalizados

:::tip
Además de los modelos de rostro preparados con anticipación, también estamos soportando más modelos para XIAO ESP32S3, ¡así que mantente atento!
:::

SenseCraft viene con varios modelos incorporados, puedes probar algunos otros modelos y experimentar.

- Detección de Rostros

  Vista previa:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/face_detection.png" style={{width:600, height:'auto'}}/></div>

- Medidor Digital de Agua

  Vista previa:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/digital_meter_number_detection.png" style={{width:600, height:'auto'}}/></div>

- yolov5 Medidor de Agua

  Vista previa:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/water_meter_number_detection.png" style={{width:600, height:'auto'}}/></div>

#### Uso de Modelos

Si quieres usar un modelo personalizado, sigue las instrucciones a continuación

**Paso 1. Selecciona los Modelos listados en "Ready to use AI models"**

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Custom_models.png" style={{width:800, height:'auto'}}/></div>

Aquí seleccioné la demo de lectura de medidor de agua. Después de seleccionarla, haz clic en el botón **Send** y espera unos segundos.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model_loading.png
" style={{width:800, height:'auto'}}/></div>

Finalmente, llegamos a la sección Preview, haz clic una vez en **Stop** en la esquina superior derecha, y luego haz clic en **Invoke**, si todo funciona sin problemas, puedes ver el efecto de pantalla en tiempo real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/10.gif" style={{width:800, height:'auto'}}/></div> 

<hr></hr> -->

# Por Hacer

- [ ] Cargar y Ejecutar **Modelo de Reconocimiento Facial** con la Plataforma SenseCraft AI.
- [ ] Configurar un Disparador y **Controlar LED** con la Plataforma SenseCraft AI.

<!-- :::tip
Si también quieres experimentar este medidor de agua que genera lecturas automáticamente, puedes descargar el paquete zip haciendo clic **[aquí](https://files.seeedstudio.com/wiki/tinyml-topic/clock-master.zip)**, descomprimirlo y luego hacer doble clic para abrir el archivo html en el directorio raíz.
::: -->
