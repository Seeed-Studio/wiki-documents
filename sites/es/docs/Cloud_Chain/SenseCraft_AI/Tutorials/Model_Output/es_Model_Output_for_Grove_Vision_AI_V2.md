---
sidebar_position: 7
description: Este artículo describe cómo obtener salidas usando Grove Vision AI V2 y SenseCraft AI.
title: Salida del Modelo para Grove Vision AI V2
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai
aliases:
  - /sensecraft_ai_output_grove_visionai
last_update:
  date: 12/04/2024
  author: Citric
createdAt: '2025-09-03'
updatedAt: '2026-03-04'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/tutorials/sensecraft-ai-output-grove-vision-ai/
---

# Configurando la Salida del Modelo en SenseCraft AI para Grove Vision AI V2

Este artículo wiki proporciona una guía completa sobre cómo configurar los ajustes de salida del modelo para el dispositivo Grove Vision AI V2 usando la plataforma SenseCraft AI. Siguiendo estas instrucciones paso a paso, aprenderás cómo configurar condiciones de activación y acciones basadas en la salida de tu modelo entrenado ejecutándose en el Grove Vision AI V2.

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

1. Dispositivo Grove Vision AI V2

2. Cable USB-C para conectar el Grove Vision AI V2 a tu computadora

<div class="table-center">
	<table align="center">
		<tr>
			<th>Grove Vision AI V2</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Paso 1. Acceder al Espacio de Trabajo de Visión de SenseCraft AI y conectar el Grove Vision AI V2

Abre tu navegador web y navega a la página del Espacio de Trabajo de Visión de SenseCraft AI.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>One-Click Direct 🖱️</font></span></strong>
    </a>
</div><br />

De la lista de dispositivos disponibles, selecciona el Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/49.png" style={{width:1000, height:'auto'}}/></div>

Usando el cable USB-C, conecta tu dispositivo Grove Vision AI V2 a tu computadora. Una vez que el dispositivo esté conectado, haz clic en el botón **Connect** ubicado en la esquina superior izquierda de la página del Espacio de Trabajo de Visión de SenseCraft AI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## Paso 2. Asegurar que un Modelo esté Cargado en el Grove Vision AI V2

Antes de proceder, asegúrate de que tu dispositivo Grove Vision AI V2 tenga un modelo entrenado desplegado en él. Si aún no has desplegado un modelo, consulta la documentación de SenseCraft AI para obtener instrucciones sobre cómo entrenar y desplegar modelos en tu dispositivo.

- [Usando un modelo para Grove Vision AI V2](https://wiki.seeedstudio.com/es/sensecraft_ai_pretrained_models_for_grove_visionai_v2/)

Si quieres usar tu propio modelo entrenado, puedes consultar los siguientes dos Wikis.

- [Tipo de entrenamiento - Clasificación](https://wiki.seeedstudio.com/es/sensecraft_ai_training_classification/)
- [Tipo de entrenamiento - Detección de Objetos](https://wiki.seeedstudio.com/es/sensecraft_ai_training_object_detection/)

## Paso 3. Acceder a los Ajustes de Configuración de Salida

En la barra lateral izquierda de la página del Espacio de Trabajo de Visión, haz clic en la opción **Output** para acceder a los ajustes de configuración de salida para tu dispositivo Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/50.png" style={{width:1000, height:'auto'}}/></div>

En el lado derecho de la página, haz clic en el botón **Trigger action when event conditions are met**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/46.png" style={{width:800, height:'auto'}}/></div>

Aparecerá un cuadro de diálogo, solicitándote que ingreses varios parámetros que servirán como condiciones de activación para las acciones deseadas. Estos parámetros incluyen:

   - **Object**: Especifica el objeto que tu modelo debe detectar para activar la acción. Por ejemplo, "person" si quieres que la acción ocurra cuando se detecte una persona.

   - **Condition**: Elige la condición que debe cumplirse para que ocurra la activación. Las opciones incluyen "Greater than", "Less than", "Equal to", etc. Por ejemplo, seleccionar "Greater than" significa que la acción se activará cuando el nivel de confianza del objeto detectado sea mayor que el valor especificado.

   - **Confidence**: Establece el nivel mínimo de confianza requerido para que la detección de objetos active la acción. Este valor va de 1 a 100, siendo 100 la confianza más alta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/51.png" style={{width:600, height:'auto'}}/></div>

Después de configurar las condiciones de activación deseadas, haz clic en el botón **Confirm** para guardar los ajustes.

## Paso 4. Seleccionar las Acciones de Activación Deseadas

El Grove Vision AI V2 soporta dos tipos de acciones de activación:

  - **Light up the LED**: Cuando esta opción está seleccionada, el LED integrado en el Grove Vision AI V2 se encenderá cuando se cumplan las condiciones de activación.

  - **Save image to the SD Card**: Cuando esta opción está seleccionada, el Grove Vision AI V2 guardará la imagen capturada en la tarjeta MicroSD insertada en el dispositivo cuando se cumplan las condiciones de activación.

Selecciona la casilla de verificación junto a la(s) acción(es) de activación deseada(s) para habilitarlas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/52.png" style={{width:1000, height:'auto'}}/></div>

## Paso 5. Enviar la Configuración de Activación al Grove Vision AI V2

Finalmente, haz clic en el botón **Send** para transmitir la configuración de activación a tu dispositivo Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/53.png" style={{width:1000, height:'auto'}}/></div>

El Grove Vision AI V2 ahora ejecutará las acciones de activación configuradas cuando se cumplan las condiciones especificadas, proporcionando una indicación visual de la salida del modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/54.jpg" style={{width:400, height:'auto'}}/></div>


:::caution
Ten en cuenta que la funcionalidad de salida depende de la conexión basada en web entre la plataforma SenseCraft AI y tu dispositivo Grove Vision AI V2. Si la conexión se pierde o se interrumpe, las acciones de activación configuradas dejarán de funcionar. Asegúrate de mantener una conexión estable durante todo el proceso.
:::

## Conclusión

Siguiendo esta guía paso a paso, has aprendido cómo configurar los ajustes de salida del modelo y las acciones de activación en la plataforma SenseCraft AI para el dispositivo Grove Vision AI V2. Ahora puedes configurar tu dispositivo para realizar acciones específicas, como encender el LED integrado o guardar imágenes capturadas, basándose en la salida de tu modelo entrenado. Esta funcionalidad te permite crear aplicaciones y proyectos interactivos usando el Grove Vision AI V2 y SenseCraft AI. Recuerda mantener una conexión estable entre la plataforma web y tu dispositivo para un funcionamiento sin problemas.

El Grove Vision AI V2 sigue siendo esencialmente un sensor de cámara AI, por lo que no podemos esperar hacer mucho más que cosas de sensores con él. Si tienes un MCU adicional, puedes hacer proyectos más interesantes con la interfaz Grove o la interfaz Pin a Pin, SenseCraft AI es solo un medio para entregar el modelo, para más rutinas de Arduino en el modelo Grove Vision AI V2, por favor consulta [Primeros Pasos con Grove Vision AI V2](https://wiki.seeedstudio.com/es/grove_vision_ai_v2_software_support/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
