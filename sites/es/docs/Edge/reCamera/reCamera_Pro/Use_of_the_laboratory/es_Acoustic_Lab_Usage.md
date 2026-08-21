---
title: Uso de Acoustic Lab
description: Este artículo describe cómo usar la función Acoustic Lab en la reCamera Pro para recopilar muestras de sonido ambiental, entrenar modelos de sonido personalizados y desplegarlos como eventos activados por sonido.
keywords:
  - reCamera
  - reCamera Pro
  - Acoustic Lab
  - Sound Model
  - Sound Trigger
  - Custom Training
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_acoustic_lab_usage
sidebar_position: 1
last_update:
  date: 2026-07-13
  author: sizhaozhou
createdAt: '2026-07-13'
updatedAt: '2026-07-30'
url: https://wiki.seeedstudio.com/es/recamera_pro_acoustic_lab_usage/
---

## Introducción

La reCamera Pro está equipada con una plataforma local de entrenamiento de sonido llamada Acoustic Lab. A través de esta plataforma, los usuarios pueden recopilar muestras de sonido ambiental, entrenar modelos de sonido personalizados y desplegarlos como eventos activados por sonido sin conexión a internet. Este artículo detalla cada módulo funcional de Acoustic Lab, cubriendo el flujo de trabajo completo desde la adquisición de audio y el entrenamiento del modelo hasta el despliegue y el uso.

## Acceso a la función

1. Haz clic en el botón **Record Settings** para entrar en la interfaz de configuración de grabación.
2. Haz clic en el botón **Recording Configuration** para entrar en la interfaz de opciones de grabación.
3. Debajo del botón **Sound Event Trigger**, haz clic en el botón **Open Acoustic Lab** para entrar en la interfaz de entrenamiento de sonido.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Acoustic_Lab_Enter.png" /></div>

## Descripción general de la función

La interfaz principal de Acoustic Lab incluye las siguientes áreas centrales:

1. **Espectrograma de audio en tiempo real**: Muestra en tiempo real el espectro de frecuencias de la señal de audio capturada, ayudando a los usuarios a comprender las características del sonido.
2. **Tabla de clasificación de confianza en tiempo real**: Muestra la clasificación por confianza de los sonidos ambientales actuales, ayudando a los usuarios a comprender la distribución del sonido.
3. **Configuración del micrófono**: Selecciona la fuente de entrada del micrófono y el número de canales.
4. **Frecuencia de muestreo de audio**: Las frecuencias más bajas proporcionan una respuesta de adquisición más rápida pero consumen más recursos del sistema.
5. **Precisión de visualización de la tabla de clasificación de confianza**: Personaliza la precisión numérica mostrada en la tabla de clasificación.
6. **Información de estado**: El primer parámetro indica el tiempo de ejecución del algoritmo y el segundo parámetro indica el número de modelos de sonido en el espacio de trabajo actual.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_AcousticsLab_Introuce.png" /></div>

## Entrenamiento de modelos de sonido personalizados

Además de los modelos de sonido integrados, los usuarios pueden entrenar modelos de sonido personalizados según sus propias necesidades. Los usuarios pueden elegir entrenar localmente o en la plataforma [SenseCraft](https://sensecraft.seeed.cc/ai/#/home).

### Entrenamiento local

#### 1. Adquisición de audio

1. En Acoustic Lab, haz clic en el botón **Workspace** para entrar en el espacio de trabajo.
2. Haz clic en el botón **New workspace**, pon nombre al nuevo espacio de trabajo y luego haz clic en el botón **Create**.
3. En el área **Dataset**, primero recopila una muestra de ruido de fondo ambiental (duración recomendada: 20 segundos). Haz clic en el botón **Background Noise**, luego haz clic en **Record** para iniciar la adquisición. El menú desplegable junto a él te permite seleccionar la fuente de entrada del micrófono; el valor predeterminado es el audio del dispositivo.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Start.png" /></div>

4. Una vez completada la adquisición, haz clic en el botón **Stop**. Luego haz clic en el botón **Slice** para dividir la muestra de ruido de fondo en segmentos de 1 segundo.
   - (1) Especificar la parte que se recortará desde el inicio del ruido de fondo
   - (2) Especificar la parte que se recortará desde el final del ruido de fondo
   - (3) Dividir la muestra de ruido de fondo
   - (4) Área de visualización para las muestras divididas

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Slice.png" /></div>

5. Haz clic en el botón **Add category** en la esquina superior derecha para añadir una categoría de sonido y ponle un nombre (por ejemplo, el nombre del sonido que quieres entrenar).
6. Haz clic en el botón **Record** para empezar a grabar muestras de sonido (duración recomendada: 10 segundos). Los pasos posteriores son los mismos que en el paso 4.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Slice.png" /></div>

#### 2. Iniciar el entrenamiento

Después de completar la recopilación de muestras de sonido, puedes proceder con el entrenamiento del modelo.

1. Haz clic en el botón **Hyperparameter** para entrar en la interfaz de configuración de hiperparámetros (mantén la configuración predeterminada si no hay requisitos especiales).
2. Haz clic en el botón **Train model** para iniciar el entrenamiento del modelo de sonido.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Train_Model.png" /></div>

### Entrenamiento de modelos en SenseCraft

Ve a la plataforma de [entrenamiento de modelos de SenseCraft](https://sensecraft.seeed.cc/ai/training) y haz clic en el botón **Audio Classification Detection** para entrar en la interfaz de entrenamiento de sonido.

#### 1. Seleccionar la fuente de entrada de audio

En la plataforma SenseCraft, hay múltiples fuentes de entrada de audio disponibles. Los usuarios pueden elegir la fuente de entrada de micrófono adecuada según su situación real. El valor predeterminado es el audio del ordenador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_SenseCraft_Source.png" /></div>

:::warning
Actualmente, la plataforma SenseCraft aún no admite la entrada de audio del dispositivo, lo que puede afectar la precisión de reconocimiento del modelo. Para más detalles, consulta: [Decreased accuracy or false recognition after SenseCraft model deployment](#sensecraft-sound-model-accuracy).
:::

#### 2. Recopilar ruido de fondo

Al recopilar ruido de fondo ambiental, se recomienda recopilar más de 20 segundos de ruido de fondo ambiental para garantizar la precisión del entrenamiento del modelo. Haz clic en el botón ***Collect Training Data*** para iniciar la recopilación de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Voice_Noice_Capture.png" /></div>

#### 3. Recopilar muestras de sonido

Al recopilar muestras de sonido, los usuarios pueden establecer la duración de cada segmento de audio; el valor predeterminado es 2 segundos. Configura como se muestra en la imagen siguiente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Sample_Set_data.png" /></div>

#### 4. Entrenar el modelo

Haz clic en el botón ***Train Model*** para iniciar el entrenamiento del modelo de sonido.

## Despliegue del modelo

1. En la parte inferior de la interfaz de Acoustic Lab, busca la opción **Deploy**. En la lista **MODELS**, busca el modelo que acabas de entrenar, haz clic para seleccionarlo y despliega el modelo.
   - (1) Lista de modelos
   - (2) Espectrograma de audio en tiempo real

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

2. Vuelve a la interfaz principal de WebUI y haz clic en el botón **Record Settings** para entrar en la interfaz de configuración de grabación.
3. Busca la opción **Sound Event Trigger** y haz clic en el botón **Configuration** de la derecha para entrar en la interfaz de configuración del disparador de sonido.
4. Selecciona la categoría de sonido que acabas de entrenar y luego haz clic en el botón **Confirm** para completar la configuración del disparador de sonido.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

## Solución de problemas

### Problema: El modelo entrenado no se encuentra en la lista de despliegue

- Confirma que el proceso de entrenamiento se ha completado y que se ha generado un archivo de modelo en el espacio de trabajo.
- Comprueba si el espacio de trabajo actual es el mismo que se utilizó durante el entrenamiento.
- Intenta actualizar la página de Acoustic Lab o volver a entrar.

### Problema: El disparador de sonido es insensible o se activa de forma errónea

- Comprueba si la muestra de ruido de fondo es suficiente; se recomienda volver a recopilar más de 20 segundos de ruido de fondo ambiental.
- Ajusta el umbral de confianza en los hiperparámetros.
- Confirma que la fuente de entrada del micrófono y la configuración de canales sean correctas.

### Problema: La precisión del modelo de clasificación de sonido de SenseCraft disminuye o se producen reconocimientos erróneos después del despliegue en el dispositivo {#sensecraft-sound-model-accuracy}

Debido a que el dispositivo utilizado para la adquisición de sonido durante el entrenamiento en SenseCraft es diferente del dispositivo utilizado para la inferencia real del modelo, existen ciertas diferencias en las características de audio. Puedes consultar los siguientes métodos para optimizar la precisión del modelo desplegado:

- Al desplegar en SenseCraft, marca la opción para incluir el conjunto de datos y desplegarlo en el dispositivo.
- Abre el espacio de trabajo correspondiente en el dispositivo y, en función de los resultados de detección reales, añade al conjunto de datos una pequeña cantidad de fragmentos de muestra (más de 5 segundos) de datos recopilados desde el micrófono del dispositivo: 
***A.*** Reconocimiento erróneo de sonidos que no son objetivo: Usa el micrófono del dispositivo para grabar ese sonido en la categoría de ruido de fondo y añade fragmentos; 
***B.*** Reconocimiento erróneo de sonidos objetivo: Usa el micrófono del dispositivo para grabar ese sonido en la categoría objetivo y añade fragmentos.

- Haz clic en el botón de entrenamiento en el dispositivo para volver a entrenar el modelo. Una vez completado el entrenamiento, cambia al modelo y vuelve a comprobar el rendimiento de reconocimiento. Si aún no cumple las expectativas, repite los pasos anteriores.

Seguiremos optimizando y en el futuro admitiremos la adquisición de sonido mediante el micrófono del dispositivo en SenseCraft. Mantente atento.

## Recursos

- [Página de producto de reCamera Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)
- [Guía de inicio rápido de reCamera Pro](https://wiki.seeedstudio.com/es/recamera_pro_getting_started/)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestro producto. Nos comprometemos a proporcionar soporte en varios niveles para garantizar una experiencia fluida con nuestros productos. Ofrecemos varios canales de comunicación para adaptarnos a las diferentes preferencias y necesidades de los usuarios.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>