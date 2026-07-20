---
description: Este wiki muestra cómo entrenar un modelo de clasificación para aquello que quieres reconocer.
title: entrenar modelo de clasificación con SenseCraft AI
keywords:
  - reCamera
  - Classification model
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /train_classification_model_online
last_update:
  date: 07/19/2026
  author: yylin
no_comments: false
createdAt: '2026-07-19'
updatedAt: '2026-07-19'
url: https://wiki.seeedstudio.com/es/train_classification_model_online/
---

# Entrena rápidamente modelos de clasificación de imágenes en línea con SenseCraft AI

SenseCraft AI ofrece un conjunto de herramientas basadas en navegador para entrenar modelos de clasificación de imágenes. No es necesario configurar un entorno local de deep learning ni escribir código de entrenamiento. Simplemente prepara imágenes para diferentes categorías y podrás completar en línea la recopilación de datos, el entrenamiento del modelo, la vista previa del rendimiento y el despliegue en el dispositivo.

Entrada de entrenamiento en línea: [SenseCraft AI Online Training](https://sensecraft.seeed.cc/ai/training?trainTab=2)

## Descripción general de funciones

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-5.png" /></div>

Con la herramienta de entrenamiento en línea de SenseCraft AI, puedes:

- Usar la cámara de tu ordenador para capturar imágenes de entrenamiento en tiempo real.
- Crear múltiples categorías de clasificación para tus objetivos de reconocimiento.
- Importar conjuntos de datos existentes o exportar tu conjunto de datos actual como copia de seguridad.
- Entrenar rápidamente modelos de clasificación de imágenes en la nube.
- Usar los modelos entrenados con reCamera.
- Previsualizar en línea los resultados de clasificación del modelo.
- Ver y gestionar los modelos entrenados en la sección de modelos históricos.

Todo el proceso se puede resumir en:

1. Crear categorías de clasificación.
2. Recopilar muestras de imágenes para cada categoría.
3. Seleccionar el dispositivo objetivo e iniciar el entrenamiento.
4. Previsualizar los efectos de clasificación usando la cámara.
5. Desplegar el modelo en reCamera.

## Para qué es adecuada la clasificación de imágenes

Los modelos de clasificación de imágenes se utilizan para determinar a qué categoría pertenece una imagen completa. Por ejemplo:

| Escenario de aplicación | Categorías de ejemplo |
| --- | --- |
| Reconocimiento del clima | Soleado, Nublado, Lluvioso, Neblinoso |
| Clasificación de objetos | Botella, Taza, Caja |
| Inspección de calidad de productos | Calificado, Rayado, Dañado |
| Reconocimiento de escenas | Interior, Exterior, Almacén, Oficina |
| Reconocimiento de gestos | OK, Pulgar arriba, Alto |
| Reconocimiento del estado del dispositivo | Normal, Alerta, Sin conexión |

> La clasificación de imágenes produce una única categoría para toda la imagen. Si necesitas localizar uno o más objetivos dentro del mismo fotograma y obtener sus posiciones, deberías usar la función de "Image Object Detection".

## Preparación antes de usar

Antes de comenzar el entrenamiento, prepara lo siguiente:

- Una cuenta con la que puedas iniciar sesión en SenseCraft AI.
- Un navegador moderno como Chrome o Edge.
- Una cámara de ordenador funcional, o imágenes ya organizadas por categorías.
- Al menos dos categorías que se puedan diferenciar.
- Si se necesita despliegue, una reCamera conectada a SenseCraft AI.

Al recopilar muestras usando la cámara del navegador, tendrás que permitir que la página web acceda a la cámara.

## Paso 1: Acceder a la página de entrenamiento en línea

1. Abre la [SenseCraft AI Online Training Page](https://sensecraft.seeed.cc/ai/training?trainTab=2).
2. Inicia sesión en tu cuenta de SenseCraft AI.
3. Ve a la página "Models" en la navegación superior y luego selecciona "Training".
4. Elige "Image Classification" como tipo de entrenamiento.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-6.png" /></div>

La página se divide principalmente en tres áreas:

- **Classification Data Collection**: Crear categorías y añadir muestras de entrenamiento.
- **Model Training**: Seleccionar un dispositivo e iniciar el entrenamiento.
- **Deployment & Preview**: Probar o desplegar el modelo después del entrenamiento.

## Paso 2: Crear categorías de clasificación

El sistema proporciona `Class 1` y `Class 2` por defecto. Se recomienda renombrarlas con nombres de categoría fáciles de entender. Aquí usaremos `have person` y `no person` para la demostración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-7.png" /></div>

1. Haz clic en el icono de edición junto al nombre de la categoría.
2. Introduce el nombre de la categoría, por ejemplo, `have person`, `no person`.
3. Haz clic en "Add Category +" si necesitas más categorías.
4. Usa el menú de más opciones a la derecha de una categoría para gestionarla o eliminarla.

Recomendaciones para nombrar categorías:

- Los nombres deben ser cortos, claros y no solaparse.
- Se recomienda usar nombres de tu negocio real.
- Intenta usar chino o inglés de forma coherente dentro del mismo proyecto.
- No dividas arbitrariamente en múltiples categorías muestras que se vean muy similares y tengan significados poco claros.

## Paso 3: Recopilar muestras de entrenamiento

### Recopilar mediante cámara

1. Selecciona en la izquierda la categoría a la que quieres añadir muestras.
2. En el menú desplegable "Input Source" de la derecha, selecciona `Webcam`.
3. Coloca el objetivo frente a la cámara.
4. Mantén pulsado el botón verde "Press and Hold to Record".
5. Repite la recopilación desde diferentes ángulos, posiciones, distancias y condiciones de iluminación.
6. Cambia a la siguiente categoría y repite el proceso.

Al recopilar, evita mantener siempre exactamente el mismo fondo y composición, ya que el modelo podría aprender por error características del fondo en lugar del propio objetivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-8.png" /></div>

### Importar conjunto de datos existente

Si ya has preparado tus datos de entrenamiento, puedes hacer clic en "Import Dataset" y subirlos siguiendo las instrucciones en pantalla.

Puedes elegir importar solo una categoría haciendo clic en los tres puntos junto a esa categoría y seleccionando importar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-9.png" /></div>

También puedes importar un conjunto de datos completo para un modelo. Sin embargo, antes de comprimirlo en un archivo zip, debes organizar los datos de cada categoría en carpetas nombradas según el `class_name` requerido y luego comprimirlas en un único archivo zip para importarlo. El sistema las asignará automáticamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-10.png" /></div>

Al organizar los datos, se recomienda:

- Asegurarse de que cada imagen represente solo una categoría clara.
- Eliminar imágenes borrosas, muy ocultas u etiquetadas de forma incorrecta.
- Procurar que el número de muestras en cada categoría sea similar.
- Incluir variaciones que puedan darse en el entorno real de despliegue.
- Evitar recopilar muestras de entrenamiento de fotogramas consecutivos del mismo vídeo continuo.

### Exportar o limpiar el conjunto de datos

- Haz clic en "Export Dataset" para hacer una copia de seguridad de los datos que has recopilado.
- Haz clic en "Clear" para eliminar las muestras de la tarea de entrenamiento actual y empezar de nuevo.

La operación de limpieza puede ser irreversible, por lo que se recomienda exportar primero el conjunto de datos como copia de seguridad.

## Cómo recopilar datos de mayor calidad

El rendimiento del modelo depende en gran medida de los datos de entrenamiento. Se recomienda recopilar muestras diversas para cada categoría en lugar de centrarse solo en la cantidad.

### Mantener recuentos de categorías relativamente equilibrados

Si una categoría tiene un gran número de muestras mientras que otras tienen solo unas pocas, el modelo puede tender más a producir la categoría con más muestras.

### Cubrir los entornos de uso en el mundo real

Idealmente, las muestras deberían cubrir:

- Diferentes condiciones de iluminación: día, noche, contraluz, poca luz.
- Diferentes ángulos: frontal, lateral, desde arriba, desde abajo.
- Diferentes distancias: primer plano, media distancia, lejana.
- Diferentes posiciones: centro, bordes y esquinas del fotograma.
- Diferentes fondos: fondos simples y complejos.
- Diferentes estados: ligera oclusión, variaciones de postura y diferencias de apariencia.

### Añadir muestras negativas o categorías de fondo

Si en tus escenas reales aparecen con frecuencia situaciones en las que "nada pertenece a ninguna categoría objetivo", puedes añadir una categoría `Background`, `Other` o "No Target" según las necesidades de tu negocio. Esto reduce la probabilidad de que el modelo produzca a la fuerza una categoría objetivo en escenas sin objetivo.

### Evitar la fuga de datos

Las imágenes usadas para las pruebas deben ser diferentes de las imágenes de entrenamiento. No juzgues la efectividad del modelo únicamente basándote en imágenes que ya hayan aparecido durante el entrenamiento.

## Paso 4: Entrenar el modelo

Después de completar la recopilación de muestras, continúa con "Step 2: Model Training".

1. Comprueba si cada categoría tiene suficientes muestras válidas.
2. Selecciona `reCamera` en el menú desplegable de dispositivos.
3. Si es necesario, despliega "Advanced Settings" para ver las opciones de entrenamiento disponibles en la página actual.
4. Haz clic en "Start Training".
5. Espera a que el entrenamiento termine. No cierres la página ni borres los datos durante el entrenamiento.

El tiempo de entrenamiento está influido por factores como el número de categorías, la cantidad de muestras, la configuración de entrenamiento y el estado del servidor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-11.png" /></div>

> Para el primer uso, se recomienda completar un modelo de referencia usando la configuración de entrenamiento predeterminada. Después de confirmar que los datos y el proceso son correctos, ajusta la configuración avanzada según el rendimiento real.

## Paso 5: Previsualizar y validar el modelo

Una vez que el entrenamiento se complete, podrás seleccionar el modelo recién generado en el área "Step 3: Deployment & Preview". El modelo también aparecerá en "Historical Models" en la parte inferior de la página.

Al hacer pruebas, se recomienda:

1. Usar nuevas imágenes que no formen parte del conjunto de entrenamiento o la señal de la cámara en tiempo real.
2. Probar cada categoría por separado.
3. Variar el ángulo, la distancia, la posición del objetivo y la iluminación ambiental.
4. Observar si la categoría predicha y la puntuación de confianza son estables.
5. Probar escenas sin objetivos y aquellas que se confunden fácilmente.
6. Registrar las muestras mal clasificadas y las que no se detectan para la siguiente ronda de entrenamiento.

Si el modelo funciona bien con las muestras de entrenamiento pero no logra reconocer correctamente con un fondo o ángulo diferente, normalmente indica una falta de diversidad en los datos, en lugar de simplemente necesitar más muestras similares.

## Paso 6: Desplegar en reCamera

Una vez que el entrenamiento se haya completado y validado mediante la vista previa, puedes seleccionar el modelo correspondiente en el área de despliegue y seguir las instrucciones en pantalla para desplegarlo en reCamera.

Hay dos métodos de despliegue para dispositivos reCamera; elige el que se adapte a tus necesidades.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-12.png" /></div>

Antes de desplegar, confirma lo siguiente:

- La reCamera está correctamente conectada a la red y en línea.
- El dispositivo está vinculado a tu cuenta actual de SenseCraft AI.
- Has seleccionado el modelo correcto generado en esta sesión de entrenamiento.
- La tarea actual del dispositivo permite actualizaciones o cambios de modelo.

Después del despliegue, el navegador redirigirá a la interfaz correspondiente del dispositivo, donde podrás ver en tiempo real el estado de ejecución del modelo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-4.png" /></div>

El método de despliegue que se muestra aquí es para un dispositivo reCamera conectado mediante cable USB. Redirigirá automáticamente a la dirección IP predeterminada del dispositivo `192.168.42.1` para previsualizar los resultados de detección del modelo.

## Uso de modelos históricos

La sección "Historical Models" en la parte inferior de la página se utiliza para ver tareas de entrenamiento completadas anteriormente. Cuando necesites usar un modelo antiguo, puedes desplegar la lista de modelos históricos y seleccionar el registro correspondiente para previsualizarlo o desplegarlo.

Para facilitar la gestión de múltiples resultados de entrenamiento, se recomienda guardar lo siguiente en los registros de tu proyecto:

- Fecha de entrenamiento.
- Lista de categorías.
- Número de muestras por categoría.
- Versión del conjunto de datos.
- Principales configuraciones de entrenamiento.
- Resultados de las pruebas.
- Dispositivo correspondiente donde se desplegó.

## Preguntas frecuentes

### El navegador no muestra la transmisión de la cámara.

- Comprueba si se han concedido permisos de cámara al navegador.
- Asegúrate de que la cámara no esté siendo utilizada en exclusiva por otra aplicación.
- Vuelve a seleccionar la cámara en el menú desplegable de fuente de entrada.
- Actualiza la página y vuelve a autorizar.
- Intenta usar la última versión de Chrome o Edge.

### El modelo siempre predice la misma categoría.

Las causas comunes incluyen muestras de categorías desequilibradas, una cantidad excesiva de datos para una categoría, características poco distintivas para otras categorías o la presencia de un fondo fijo en las imágenes de entrenamiento. Se recomienda complementar las muestras de las categorías poco representadas y garantizar condiciones de captura comparables para todas las categorías.

### La precisión de entrenamiento es alta, pero el rendimiento real es deficiente.

Esto suele significar que los datos de entrenamiento son demasiado uniformes o que las imágenes de prueba son demasiado similares a las imágenes de entrenamiento. Debes complementarlas con condiciones diversas del entorno real de despliegue, incluyendo diferentes ángulos, distancias, fondos e iluminación, y usar imágenes completamente nuevas para las pruebas.

### Dos categorías se confunden fácilmente.

Comprueba si las definiciones de las categorías son claras y céntrate en complementar muestras que resalten las diferencias entre las dos categorías. Además, elimina las imágenes con etiquetas incorrectas, objetivos poco claros o características de múltiples categorías.

### El modelo produce una categoría incluso cuando no hay objetivo.

Los modelos de clasificación suelen elegir la categoría más probable entre las existentes. Puedes añadir una categoría de "Background" u "Other" y usar umbrales de confianza en la aplicación para filtrar resultados poco fiables.

### No se puede encontrar el modelo recién entrenado.

- Confirma que la tarea de entrenamiento se ha completado.
- Despliega "Historical Models" para comprobarlo.
- Asegúrate de haber iniciado sesión con la cuenta que creó el modelo.
- Actualiza la página y vuelve a comprobar.

### No se puede desplegar en reCamera.

- Confirma que el dispositivo está en línea y vinculado a la cuenta actual.
- Comprueba la conexión de red del dispositivo.
- Asegúrate de haber seleccionado un modelo compatible con el dispositivo de destino.
- Evita desplegar repetidamente mientras el dispositivo realiza otras tareas de actualización.
- Asegúrate de que el entorno de funcionamiento del dispositivo reCamera sea normal, es decir, que la interfaz de configuración web pueda utilizarse correctamente.

## Proceso de iteración recomendado

Un modelo de clasificación fiable suele requerir múltiples iteraciones:

1. Entrena el primer modelo utilizando un conjunto de datos pequeño pero equilibrado.
2. Prueba con nuevos escenarios y registra los resultados erróneos.
3. Complementa las categorías correctas con escenas representativas mal clasificadas.
4. Limpia las etiquetas incorrectas y las muestras excesivamente redundantes.
5. Vuelve a entrenar y realiza pruebas comparativas bajo las mismas condiciones.
6. Despliega en reCamera una vez que el rendimiento cumpla los requisitos.
7. Recopila continuamente muestras difíciles en el entorno real y actualiza el modelo.

## Lista de buenas prácticas

Antes del entrenamiento:

- [ ] Las definiciones de las categorías son claras y no tienen solapamientos evidentes.
- [ ] Cada categoría tiene muestras de entrenamiento.
- [ ] La cantidad de muestras de cada categoría está aproximadamente equilibrada.
- [ ] Las muestras cubren diferentes ángulos, distancias, fondos e iluminación.
- [ ] Se han eliminado las imágenes borrosas y las etiquetas incorrectas.
- [ ] Se han preparado categorías de fondo u otras según sea necesario.
- [ ] Los conjuntos de datos importantes se han exportado y respaldado.

Antes del despliegue:

- [ ] Probado con nuevas escenas no utilizadas en el entrenamiento.
- [ ] Se han probado todas las categorías y los escenarios sin objetivo.
- [ ] Se han examinado las categorías que se confunden fácilmente.
- [ ] reCamera está conectada a la red y vinculada a la cuenta actual.
- [ ] Se han confirmado correctamente el modelo y el dispositivo de destino.
- [ ] Se ha planificado una validación secundaria en el entorno real de instalación.

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