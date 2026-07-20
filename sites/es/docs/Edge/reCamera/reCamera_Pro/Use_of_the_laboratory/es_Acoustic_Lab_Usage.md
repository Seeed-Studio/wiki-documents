---
title: Uso del Acoustic Lab
description: Este artículo presenta cómo utilizar la función Acoustic Lab en reCamera Pro para recopilar muestras de sonido ambiental, entrenar modelos de sonido personalizados y desplegarlos como eventos activados por sonido.
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
  date: 2026-07-13T00:00:00.000Z
  author: sizhaozhou
createdAt: "2026-07-13"
updatedAt: "2026-07-13"
url: https://wiki.seeedstudio.com/es/recamera_pro_acoustic_lab_usage/
---


## Introducción

La reCamera Pro incorpora una plataforma local dedicada al entrenamiento de sonido llamada Acoustic Lab. A través de esta plataforma, los usuarios pueden recopilar muestras de sonido ambiental, entrenar modelos de sonido personalizados y desplegarlos como eventos activados por sonido sin necesidad de conexión a Internet. Este artículo ofrece una guía detallada de cada módulo funcional del Acoustic Lab, cubriendo el flujo de trabajo completo desde la recopilación de audio y el entrenamiento del modelo hasta el despliegue y uso.

## Acceso a la función

1. Haz clic en el botón **Record Settings** para entrar en la interfaz de configuración de grabación.
2. Haz clic en el botón **Recording Configuration** para entrar en la interfaz de opciones de grabación.
3. Bajo el botón **Sound Event Trigger**, haz clic en el botón **Open Acoustic Lab** para entrar en la interfaz de entrenamiento de sonido.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Acoustic_Lab_Enter.png" /></div>

## Descripción general de la función

La interfaz principal del Acoustic Lab incluye las siguientes áreas clave:

1. **Espectrograma de audio en tiempo real**: Muestra el espectro de la señal de audio capturada actualmente en tiempo real, ayudando a los usuarios a comprender las características del sonido.
2. **Tabla de clasificación de confianza en tiempo real**: Muestra la clasificación por confianza de los sonidos ambientales actuales, ayudando a los usuarios a comprender la distribución del sonido.
3. **Configuración del micrófono**: Selecciona la fuente de entrada del micrófono y el número de canales.
4. **Frecuencia de captura de audio**: Una frecuencia más baja da como resultado una respuesta de captura más rápida, pero consume más recursos del sistema.
5. **Precisión de visualización de la tabla de confianza**: Personaliza la precisión numérica de la tabla de clasificación.
6. **Información de estado**: El primer parámetro indica el tiempo de ejecución del algoritmo y el segundo parámetro indica el número de modelos de sonido en el espacio de trabajo actual.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_AcousticsLab_Introuce.png" /></div>

## Entrenamiento de un modelo de sonido personalizado

Además de los modelos de sonido integrados, los usuarios pueden entrenar modelos de sonido personalizados según sus necesidades específicas.

### Recopilación de audio

1. En el Acoustic Lab, haz clic en el botón **Workspace** para entrar en el espacio de trabajo.
2. Haz clic en el botón **New workspace**, pon nombre al nuevo espacio de trabajo y luego haz clic en el botón **Create**.
3. En el área **Dataset**, primero recopila una muestra de ruido de fondo ambiental (duración recomendada: 20 segundos). Haz clic en el botón **Background Noise**, luego haz clic en el botón **Record** para comenzar la captura. El menú desplegable junto a este permite seleccionar la fuente de entrada del micrófono; el valor predeterminado es el audio del dispositivo.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Start.png" /></div>

4. Una vez completada la recopilación, haz clic en el botón **Stop**. Luego haz clic en el botón **Slice** para dividir la muestra de ruido de fondo en segmentos de 1 segundo.
   - (1) Especifica la parte que se recortará desde el inicio del ruido de fondo
   - (2) Especifica la parte que se recortará desde el final del ruido de fondo
   - (3) Divide la muestra de ruido de fondo
   - (4) Área para las muestras segmentadas

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Slice.png" /></div>

5. Haz clic en el botón **Add category** en la esquina superior derecha para añadir una categoría de sonido y ponle un nombre (por ejemplo, el nombre del sonido que deseas entrenar).
6. Haz clic en el botón **Record** para comenzar a grabar muestras de sonido (duración recomendada: 10 segundos). Los pasos posteriores son los mismos que en el paso 4.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Slice.png" /></div>

### Inicio del entrenamiento

Una vez recopiladas las muestras de sonido, puedes proceder al entrenamiento del modelo.

1. Haz clic en el botón **Hyperparameter** para entrar en la interfaz de configuración de hiperparámetros (mantén los valores predeterminados a menos que tengas requisitos específicos).
2. Haz clic en el botón **Train model** para iniciar el entrenamiento del modelo de sonido.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Train_Model.png" /></div>

## Despliegue del modelo

1. En la parte inferior de la interfaz del Acoustic Lab, busca la opción **Deploy**. En la lista **MODELS**, localiza el modelo que acabas de entrenar y haz clic en él para seleccionarlo y desplegarlo.
   - (1) Lista de modelos
   - (2) Espectrograma de audio en tiempo real

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

2. Vuelve a la interfaz principal de la WebUI y haz clic en el botón **Record Settings** para entrar en la interfaz de configuración de grabación.
3. Busca la opción **Sound Event Trigger** y haz clic en el botón **Configuration** a la derecha para entrar en la interfaz de configuración del disparador de sonido.
4. Selecciona la categoría de sonido que acabas de entrenar y luego haz clic en el botón **Confirm** para completar la configuración del disparador de sonido.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

## Solución de problemas

**Problema: El modelo entrenado no se encuentra en la lista de despliegue**

- Asegúrate de que el proceso de entrenamiento haya finalizado y de que se haya generado un archivo de modelo en el espacio de trabajo.
- Comprueba que el espacio de trabajo actual sea el mismo que se utilizó durante el entrenamiento.
- Intenta actualizar la página del Acoustic Lab o volver a entrar en ella.

**Problema: El disparador de sonido no es sensible o se activa de forma errónea**

- Comprueba si la muestra de ruido de fondo es suficiente. Se recomienda volver a recopilar más de 20 segundos de ruido de fondo ambiental.
- Ajusta el umbral de confianza en los hiperparámetros.
- Verifica que la fuente de entrada del micrófono y la configuración de canales sean correctas.

## Recursos

- [Página de producto de reCamera Pro](https://www.seeedstudio.com/)
- [Guía de inicio rápido de reCamera Pro](https://wiki.seeedstudio.com/es/recamera_pro_getting_started/)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestro producto. Estamos aquí para ofrecerte distintos niveles de soporte y garantizar que tu experiencia con nuestro producto sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>