---
description: Recopila muestras de sonido, entrena un modelo de clasificación de sonido personalizado en reCamera Pro o SenseCraft y despliega eventos activados por sonido.
title: Entrenar un modelo de sonido
keywords:
  - reCamera
  - reCamera Pro
  - Acoustic Lab
  - sound model
  - training
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_acoustic_lab_usage
sku: 10003420
sidebar_position: 8
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_acoustic_lab_usage/
---

# Entrenar un modelo de sonido

reCamera Pro incluye una plataforma local de entrenamiento de sonido llamada **Acoustic Lab**. Puedes recopilar muestras de sonido ambiental, entrenar modelos de sonido personalizados y desplegarlos como eventos activados por sonido, todo en el dispositivo y sin conexión a Internet.

## Acceder a Acoustic Lab

1. Haz clic en **Record Settings** en la interfaz web.
2. Haz clic en **Recording Configuration**.
3. Debajo del botón **Sound Event Trigger**, haz clic en **Open Acoustic Lab**.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Acoustic_Lab_Enter.png" /></div>

## Descripción general de la interfaz

La interfaz principal de Acoustic Lab incluye:

1. **Espectrograma de audio en tiempo real**: espectro de frecuencias del audio actual
2. **Tabla de clasificación de confianza en tiempo real**: clasificación por confianza de los sonidos actuales
3. **Configuración del micrófono**: fuente de entrada y número de canales
4. **Frecuencia de muestreo de audio**: más baja = respuesta más rápida, más recursos
5. **Precisión de visualización de la tabla de confianza**: precisión numérica
6. **Información de estado**: tiempo de ejecución del algoritmo y número de modelos de sonido en el espacio de trabajo

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_AcousticsLab_Introuce.png" /></div>

## Entrenamiento local

### 1. Adquisición de audio

1. Haz clic en **Workspace** y luego en **New workspace**. Ponle un nombre y haz clic en **Create**.
2. En el área **Dataset**, primero recopila ruido de fondo (recomendado: 20 segundos). Haz clic en **Background Noise** → **Record**. El menú desplegable te permite seleccionar la fuente de entrada del micrófono; el valor predeterminado es el audio del dispositivo.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Start.png" /></div>

3. Después de grabar, haz clic en **Stop** y luego en **Slice** para dividir el ruido de fondo en segmentos de 1 segundo:
   - (1) Recortar desde el inicio
   - (2) Recortar desde el final
   - (3) Dividir la muestra
   - (4) Área de visualización de muestras divididas

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Slice.png" /></div>

4. Haz clic en **Add category** para añadir una categoría de sonido y ponle un nombre.
5. Haz clic en **Record** para grabar muestras de sonido (recomendado: 10 segundos). Divide de la misma manera.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Slice.png" /></div>

### 2. Iniciar el entrenamiento

1. Haz clic en **Hyperparameter** para revisar los parámetros de entrenamiento (mantén los valores predeterminados a menos que tengas necesidades específicas).
2. Haz clic en **Train model** para comenzar.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Train_Model.png" /></div>

## Entrenamiento en SenseCraft

Ve a la plataforma de [entrenamiento de modelos SenseCraft](https://sensecraft.seeed.cc/ai/training) y haz clic en **Audio Classification Detection**.

### 1. Seleccionar la fuente de entrada de audio

Hay varias fuentes de entrada disponibles. El valor predeterminado es el audio del ordenador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_SenseCraft_Source.png" /></div>

:::warning
SenseCraft aún no admite la entrada de audio del dispositivo, lo que puede afectar a la precisión de reconocimiento del modelo después del despliegue. Consulta [SenseCraft model accuracy](#precisión-del-modelo-sensecraft) más abajo.
:::

### 2. Recopilar ruido de fondo

Recopila al menos 20 segundos de ruido de fondo ambiental. Haz clic en **Collect Training Data**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Voice_Noice_Capture.png" /></div>

### 3. Recopilar muestras de sonido

Configura la duración de cada segmento de audio (predeterminado: 2 segundos).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Sample_Set_data.png" /></div>

### 4. Entrenar

Haz clic en **Train Model**.

## Desplegar el modelo

1. En Acoustic Lab, busca la opción **Deploy** en la parte inferior. En la lista **MODELS**, selecciona tu modelo entrenado y despliega.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

2. Vuelve a la interfaz principal de la Web UI → **Record Settings** → **Sound Event Trigger** → **Configuration**.
3. Selecciona tu categoría de sonido entrenada y haz clic en **Confirm**.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

## Solución de problemas

### El modelo entrenado no aparece en la lista de despliegue
- Confirma que el entrenamiento se completó y que se generó un archivo de modelo.
- Comprueba que estás en el mismo espacio de trabajo utilizado durante el entrenamiento.
- Actualiza la página de Acoustic Lab.

### El disparador de sonido es insensible o se activa falsamente
- Vuelve a recopilar al menos 20 segundos de ruido de fondo.
- Ajusta el umbral de confianza en los hiperparámetros.
- Confirma la fuente de entrada del micrófono y la configuración de canales.

### La precisión del modelo SenseCraft disminuye después del despliegue {#precisión-del-modelo-sensecraft}

Las características de audio del entrenamiento en SenseCraft difieren de la inferencia en el dispositivo. Para optimizar:

1. Al desplegar en SenseCraft, marca la opción para incluir el conjunto de datos.
2. Abre el espacio de trabajo en el dispositivo. Según los resultados reales de detección, añade más de 5 segundos de grabaciones con el micrófono del dispositivo:
   - **A.** Reconocimiento erróneo de sonidos que no son objetivo → graba ese sonido como ruido de fondo y añade segmentos.
   - **B.** Reconocimiento erróneo de sonidos objetivo → graba ese sonido en la categoría objetivo y añade segmentos.
3. Vuelve a entrenar en el dispositivo y cambia al nuevo modelo.

{/* TODO(verify): confirm whether local training supports multi-category models and maximum number of categories per model */}

## Páginas relacionadas

- [Activar captura por sonido](/es/recamera_pro_sound_trigger/)
- [Configurar la grabación de eventos](/es/recamera_pro_record_settings/)

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
