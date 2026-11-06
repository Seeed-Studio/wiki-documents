---
title: Crea un agente de IA local en Jetson Orin con Laya y Qwen
description: Crea un agente de IA local en NVIDIA Jetson Orin con Laya y Qwen. Aprende la mecánica del modelo de decisión y ejecuta automatización de navegador y demostraciones de pizarra en reComputer.
keywords:
  - NVIDIA Jetson
  - Jetson Orin
  - Jetson Orin NX
  - agente de IA local
  - modelo de decisión Laya
  - Qwen3.5
  - automatización de navegador
  - reComputer Industrial
  - IA en el borde
slug: /jetson/local_decision_model_laya
draft: false
image: https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-cover-en-v3-dark.png
last_update:
  date: 11/04/2026
  author: zibo
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/es/jetson/local_decision_model_laya/
---

# Crea un agente de IA local en Jetson Orin con Laya y Qwen

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-cover-en-v3-dark.png" alt="Ilustración del hardware reComputer Industrial conectado a un selector de acciones de Laya y Qwen y a un navegador de búsqueda de vuelos, con CLICK seleccionado." />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

Este wiki construye un **agente de IA local en NVIDIA Jetson Orin**. **El modelo de decisión local Laya (modelo System One) elige la siguiente acción; Qwen3.5-4B se encarga del análisis de la petición y la generación de texto.** Las mediciones provienen de un **reComputer Industrial J4012 con Jetson Orin NX 16GB**.

Veamos los resultados reales de la prueba. Se le pide al agente que busque vuelos directos de solo ida de Shenzhen a Shanghái, ordenados por el precio más bajo, y que muestre las opciones de billetes para los vuelos coincidentes. Todo el proceso de ejecución solo tomó 32,8 segundos. Quienes hayan utilizado agentes para realizar diversas operaciones de automatización de navegador pueden apreciar que este tiempo de ejecución es bastante ventajoso.
<div align="center">
  <img width={960} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-flight-search-demo.gif" alt="Grabación de pantalla animada de la demo de vuelos: el agente rellena y confirma una búsqueda de solo ida de Shenzhen a Shanghái, restringe los resultados a vuelos sin escalas ordenados por el precio más bajo y abre la capa de opciones de tarifa para un vuelo coincidente." loading="lazy" />
</div>

*Demostración de vuelos. Una petición en inglés, la página en vivo de Trip.com y la capa de tarifas que el asistente abre por sí mismo.*

Veamos otra demostración de operación de la pizarra para dibujar. Puedes usar lenguaje natural para controlar al agente para que dibuje, y también puedes usar lenguaje natural en cualquier momento para pedirle al agente que te ayude a modificar el contenido.
<div align="center">
  <img width={960} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-whiteboard-demo.gif" alt="Grabación de pantalla animada de la demo de pizarra: se dibujan tres cajas etiquetadas como Camera, Jetson y Display y se conectan con flechas; luego Jetson se vuelve verde y se añade debajo una caja conectada llamada Robot Arm." loading="lazy" />
</div>

*Demostración de pizarra. Dibujar, recolorear, ampliar: tres peticiones en un solo lienzo, sin redibujar nada.*

## Requisitos previos

- reComputer con JetPack 6.2

## ¿Cómo puede un LLM operar una página web?

Imagina pedirle a un agente LLM que encuentre vuelos. Lee la petición, abre la página y necesita decidir qué hacer a continuación. En un momento dado, la página puede mostrar campos de salida y destino, un selector de fecha y un botón de **Search**. Un programa puede proporcionar estos controles como acciones disponibles, pero algo todavía tiene que elegir uno.

Un LLM tradicional de generación de texto puede hacer esa elección leyendo la tarea y la descripción de la página y escribiendo una acción. Por ejemplo, podría devolver una instrucción para hacer clic en Search. El programa interpreta la salida y realiza el clic. Después de que la página cambie, el asistente la observa de nuevo y pide la siguiente acción.

Para producir esa instrucción, el LLM primero lee la tarea y la información de la página. Luego escribe su respuesta pieza por pieza, y cada pieza depende de lo que ya ha escrito. Estos pasos se llaman **prefill** y **decode**. Después de que la página cambie, el asistente puede repetirlos para decidir la siguiente acción.

Un LLM puede escribir muchas respuestas diferentes. Pero ¿y si el programa ya tiene una lista de acciones, como **rellenar una ciudad**, **hacer clic en Search** o **esperar**? Podría pedirle a un modelo que elija de esa lista en su lugar. Aquí es donde entra un modelo de decisión.

## ¿Qué hace de forma diferente un modelo de decisión?

Un modelo de decisión recibe el estado actual, el objetivo y un conjunto de opciones disponibles. Puntúa esas opciones y devuelve una selección. En el ejemplo de los vuelos, una vez que se verifican las condiciones de búsqueda requeridas, puede seleccionar **hacer clic en Search** de entre las acciones ofrecidas. El programa asigna esa selección a un control real de la página y realiza el clic.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-text-vs-action-selection-en.png" alt="Dos rutas de salida: un modelo autoregresivo realiza pasos de prefill y decode sucesivos, mientras que un modelo de decisión codifica la entrada y puntúa las acciones candidatas ofrecidas." loading="lazy" />
</div>

*La generación de texto produce una acción como texto de salida; Laya puntúa las opciones ofrecidas.*

Ambos enfoques procesan la entrada y requieren cómputo. Un modelo de texto también puede producir un ID de acción corto.

Este proyecto utiliza ambos modelos. **Qwen** interpreta la petición del usuario y proporciona texto cuando es necesario. **Laya** selecciona repetidamente una operación y un objetivo de entre los candidatos actuales. El programa proporciona las herramientas, ejecuta la acción seleccionada y comprueba el resultado.

## ¿Cómo selecciona Laya la siguiente acción?

Usemos la pizarra para ver cómo funciona una decisión. Hay una caja verde etiquetada **Camera**, y queremos hacerla azul sin moverla ni cambiar su etiqueta:

```text
Make the Camera rectangle background blue. Keep its text and position.
```

Antes de pedirle a Laya que elija, el programa describe la situación en texto:

| Entrada | Ejemplo de Camera |
| --- | --- |
| Estado | Camera es verde; se conocen su etiqueta y posición |
| Objetivo | Hacer que Camera sea azul y conservar su etiqueta y posición |
| Candidatos | Los botones rojo, verde, azul y amarillo disponibles |

Piensa en esto como una pregunta de opción múltiple. El programa le dice a Laya qué hay en el lienzo, qué necesita cambiar y qué botones están disponibles. Laya entonces elige entre esos botones. En este ejemplo grabado, el objetivo se proporcionó directamente a Laya.

Dentro de Laya, un **codificador** lee el texto y construye una comprensión de la situación: verde es el color actual, azul es el color deseado, y la etiqueta y la posición deben permanecer iguales. Una **cabeza de decisión** luego puntúa las respuestas disponibles. En este proyecto, el codificador es mmBERT-base; consulta la [configuración de modelo fijada](https://huggingface.co/cklxx/laya-browser/blob/645cf366a2ae35f1086e8c20eff48f909bb49206/rl_agent_config.json) y la [documentación de la arquitectura](https://huggingface.co/convaiinnovations/laya#architecture) para más detalles.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-decision-model-architecture-en.png" alt="El estado textual, el objetivo y los candidatos entran en el codificador bidireccional mmBERT-base y la cabeza de decisión, produciendo elecciones separadas de operación y objetivo de clic." loading="lazy" />
</div>

*Laya lee texto sobre el estado, el objetivo y los candidatos; esta implementación no envía píxeles de capturas de pantalla al modelo.*

Para esta decisión, la opción `3` es el botón azul. Una vez que Laya lo elige, el programa encuentra el botón correspondiente usando su ID de acción, `color_blue`. Las opciones pueden cambiar a medida que cambia la página o el lienzo, por lo que el programa crea una lista nueva cuando observa el siguiente estado.

El resultado responde a dos preguntas: **¿qué debo hacer?** y **¿dónde debo hacerlo?** Aquí, Laya seleccionó `CLICK` y el botón azul. Ambas respuestas pueden calcularse en el mismo lote.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-camera-blue-recorded-decision-en.png" alt="Una decisión registrada selecciona CLICK con probabilidad 0.9785 y el objetivo azul con probabilidad 0.9721; una nueva lectura de la escena confirma que Camera cambió de verde a azul." loading="lazy" />
</div>

*Una decisión registrada de Camera. Las cajas de colores se reconstruyen a partir de valores de escena guardados.*

En el resultado registrado, `CLICK` recibió una puntuación de **0.9785**, y el botón azul recibió **0.9721** en su propio conjunto de opciones. El programa hizo clic en el botón y luego leyó el lienzo de nuevo. Camera era azul, y su etiqueta y posición no habían cambiado.

Estas puntuaciones muestran qué opciones favoreció el modelo. El valor de `confidence` del objetivo, **0.8859**, es un campo separado. Una puntuación alta por sí sola no puede garantizar que un clic haya funcionado o que toda la tarea esté completa.

El programa también debe ofrecer las opciones correctas: Laya no puede elegir un botón que falte en su lista. Cuando hay muchas opciones, el contenedor puede compararlas en grupos. Eso significa que una petición puede implicar más de una evaluación del modelo.

## De una elección del modelo a un resultado verificado

Laya ha elegido el botón azul. ¿Significa eso que la tarea ha terminado? Aún no. El botón podría haberse movido, o el clic podría no cambiar la caja. El programa debe llevar a cabo la acción y comprobar qué ha ocurrido realmente.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-verified-action-loop-en.png" alt="Bucle del agente desde el análisis de la petición por Qwen hasta la nueva observación, candidatos legales, selección de Laya, validación del objetivo, ejecución de la interfaz de usuario y verificación independiente de la finalización." loading="lazy" />
</div>

*Qwen interpreta la petición, Laya selecciona entre las acciones disponibles y el programa las ejecuta y verifica.*

En el ejemplo de Camera, el programa sigue estos pasos:

1. **Observar:** Leer el lienzo y encontrar los botones de color disponibles.
2. **Elegir:** Preguntar a Laya qué acción y objetivo usar.
3. **Comprobar:** Asegurarse de que el botón elegido sigue disponible. Si el lienzo ha cambiado, observarlo de nuevo.
4. **Ejecutar:** Usar Playwright para hacer clic en el botón azul.
5. **Verificar:** Leer el lienzo de nuevo. ¿Camera es azul? ¿Su etiqueta y posición siguen sin cambios?

Si el resultado aún necesita trabajo, el programa puede repetir el bucle con el lienzo actualizado, dentro de sus límites de reintentos. Si las comprobaciones se superan, informa que la tarea está completa. Incluso si el modelo devuelve `DONE`, el programa sigue comprobando el resultado real.

La misma idea se aplica a los vuelos: el programa proporciona acciones como seleccionar una fecha y luego comprueba la ruta, la fecha y otros requisitos. Estas acciones se implementan en la aplicación. Laya elige entre ellas; no crea nuevas herramientas por sí misma.

## Ejecutar rápidamente en Jetson Orin

En el escritorio de Jetson, abre una terminal con tu usuario normal y ejecuta:

```bash
git clone https://github.com/zibochen6/jetson-browser-assistant.git
cd jetson-browser-assistant
./setup.sh
```

El instalador comprueba el dispositivo, prepara el entorno uv aislado y la versión de CUDA PyTorch correspondiente, instala Chromium, descarga los modelos fijados, compila llama.cpp y precarga los servicios. Ejecútalo sin `sudo`; solicitará acceso elevado cuando se necesiten bibliotecas del sistema. Consulta el [README](https://github.com/zibochen6/jetson-browser-assistant#readme) y la [guía de instalación](https://github.com/zibochen6/jetson-browser-assistant/blob/main/docs/installation.md) para ver compatibilidad, descargas y resolución de problemas.

## ¿Cuándo es útil un modelo de decisión?

Vale la pena evaluar un modelo de decisión cuando la meta del usuario o el estado actual pueden cambiar, pero las herramientas disponibles están acotadas. Los filtros de vuelos y las ediciones de objetos existentes en la pizarra son dos ejemplos. La aplicación aún necesita observar el estado actual, proporcionar opciones significativas y verificar lo que ha ocurrido.

Para una tarea estable que siempre sigue el mismo camino, un script determinista puede ser más sencillo. Para respuestas abiertas o texto nuevo, un modelo generador de texto sigue siendo útil. Este proyecto no tiene un script de referencia equivalente, por lo que las demostraciones no establecen una ventaja de velocidad o mantenimiento frente a los scripts.

La versión actual cubre un flujo de trabajo limitado de Trip.com y pizarras pequeñas. Otros sitios web, dibujo arbitrario, voz y control industrial requieren desarrollo y validación por separado. Los 16 GB de Jetson son memoria compartida CPU/GPU; otras aplicaciones y el swap afectan la capacidad disponible.

## Prueba las demostraciones de navegador y pizarra

Antes de ejecutar las demostraciones, veamos en qué se va el tiempo. La tarea de vuelo grabada tomó **32,8 segundos** en total. Las decisiones de Laya tomaron alrededor de **0,5 segundos en total a lo largo de la tarea**, mientras que el análisis de Qwen tomó alrededor de **3,5 segundos**. Las acciones del navegador, las esperas de página, las comprobaciones y el guardado también contribuyen al total.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-decision-vs-task-time-en.png" alt="Barras independientes muestran 32,8 segundos de tiempo transcurrido de la tarea, 0,5 segundos de decisiones acumuladas de Laya y 3,5 segundos de análisis de Qwen para una tarea de vuelo que reutilizó las condiciones de búsqueda." loading="lazy" />
</div>

*Tiempos registrados de la tarea de vuelo. Las barras son contadores separados, no un desglose aditivo completo; la tarea reutilizó condiciones de búsqueda existentes.*

### Buscar vuelos

Inicia el asistente y espera a `Models ready` y `Task>`:

```bash
./launch.sh
```

Introduce la siguiente tarea, sustituyendo la fecha por una fecha futura válida:

```text
Find one-way flights from Shenzhen to Shanghai on 2026-11-13 for 1 adult in economy. Nonstop only, lowest price first. Show up to 3 options and open the fare options for one matching flight.
```

El lanzador muestra el sitio web y una ventana Live Flow de solo lectura. Usa `./launch.sh --no-visualize` para mostrar solo el sitio web. Comprueba los candidatos, `Query verified` y `Fare options opened`. El asistente abre la capa de opciones de tarifa sin enviar un pedido ni un pago.

### Editar la misma pizarra

Finaliza o cancela cualquier tarea activa y luego abre un lienzo en blanco:

```bash
./launch-whiteboard.sh --open examples/whiteboard/blank.excalidraw
```

`--open` sustituye el lienzo actual; las exportaciones existentes se mantienen. En `Task>`, introduce:

```text
Draw three labeled boxes: Camera on the left, Jetson in the center, and Display on the right. Connect Camera to Jetson and Jetson to Display with arrows.
```

Una vez que termine, envía una segunda tarea sin volver a abrir el archivo en blanco:

```text
Make Jetson green. Add a box labeled Robot Arm below Jetson and connect Jetson to Robot Arm. Keep everything else.
```

Cada tarea de pizarra completada guarda un `scene.excalidraw` editable, un PNG, una captura de pantalla y un informe de verificación. La [guía de pizarra](https://github.com/zibochen6/jetson-browser-assistant/blob/main/docs/whiteboard.md) cubre ediciones adicionales y la reapertura de escenas guardadas.

La medición del tiempo comienza cuando pulsas Enter e incluye el análisis, la apertura necesaria del navegador, la inferencia, las acciones de la interfaz, las esperas, la verificación y el guardado. La carga del modelo, el calentamiento y la espera de entrada se excluyen; la espera humana se incluye y se informa por separado.

Pulsa Ctrl+C durante una tarea para cancelarla. En el aviso inactivo, introduce `exit` o `quit` para dejar los modelos y el navegador en ejecución. Usa `./status.sh` para comprobar los servicios y `./stop.sh` para detener los servicios y modelos del proyecto. Los registros de vuelos están en `runs/`; los registros de pizarra están en `whiteboard-runs/`. Consulta la [guía de uso](https://github.com/zibochen6/jetson-browser-assistant/blob/main/docs/usage.md) para otros controles y recuperación.

## Referencias

- [Código fuente y README de Jetson Browser Assistant](https://github.com/zibochen6/jetson-browser-assistant)
- [Modelo laya-browser, datos de entrenamiento y limitaciones](https://huggingface.co/cklxx/laya-browser)
- [Wrapper laya-browser fijado](https://huggingface.co/cklxx/laya-browser/blob/645cf366a2ae35f1086e8c20eff48f909bb49206/laya_browser.py)
- [Configuración fijada de encoder y head](https://huggingface.co/cklxx/laya-browser/blob/645cf366a2ae35f1086e8c20eff48f909bb49206/rl_agent_config.json)
- [Arquitectura de Laya y calibración de probabilidad](https://huggingface.co/convaiinnovations/laya#architecture)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
