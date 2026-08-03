---
description: Aprende un flujo de trabajo repetible basado en habilidades para acelerar la entrega de aplicaciones Jetson, desde la inspección del dispositivo hasta el prototipo ejecutable y el empaquetado de la demo.
title: Prototipado rápido en Jetson con NVIDIA Skills
keywords:
  - Jetson
  - NVIDIA Skills
  - Claude Code
  - Agentic AI
  - Rapid Prototyping
  - reComputer
  - Edge AI
  - AI Agent
image: https://files.seeedstudio.com/wiki/nv_skills/banner.png
slug: /rapid_prototyping_on_jetson_with_nvidia_skills_bk
last_update:
  date: 07/10/2026
  author: zibo
createdAt: '2026-07-09'
updatedAt: '2026-07-10'
url: https://wiki.seeedstudio.com/es/rapid_prototyping_on_jetson_with_nvidia_skills_bk/
---

# Prototipado rápido en Jetson con NVIDIA Skills

:::note Copia de la colección JetPack 7.2
Esta copia se incluye porque las agent skills forman parte del ecosistema de desarrollo de JetPack 7.2. Antes de ejecutar una skill, confirma que el dispositivo de destino informa JetPack 7.2 / L4T 39.2 y revisa cada paquete u optimización propuesta para el dispositivo en vivo.
:::

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/banner.png" style={{width:1000, height:'auto'}} />
</div>

## Introducción

Los proyectos con Jetson rara vez se detienen porque los desarrolladores no puedan escribir código de modelos. Normalmente se detienen antes, en el trabajo de pegado alrededor del despliegue: comprobar el estado del dispositivo, confirmar la compatibilidad de JetPack, elegir una ruta de instalación viable, construir el primer pipeline ejecutable, validar las salidas y empaquetar el resultado en algo demostrable. En un proyecto real, a menudo es ahí donde desaparecen los primeros días.

Aquí es donde ayudan los **flujos de trabajo de agente + skill**. Una skill enfocada en Jetson proporciona a un agente de programación de IA instrucciones estructuradas para una clase estrecha de tareas, como diagnóstico del dispositivo, inspección de memoria, preparación del entorno o importación de modelos. En lugar de empezar desde una shell vacía y reconstruir el flujo de trabajo a partir de documentación dispersa, comienzas desde una ruta de entrega con conocimiento de Jetson.

Este método no está ligado a un único framework de agentes. Cualquier agente que pueda cargar skills reutilizables, inspeccionar archivos, ejecutar comandos e interactuar con dispositivos remotos puede beneficiarse del mismo patrón. En este wiki, usamos **Claude Code** para la guía paso a paso simplemente porque ofrece una forma clara de demostrar el flujo de trabajo de extremo a extremo.

Este artículo está escrito intencionadamente como una **metodología de entrega**, no como un registro de demo puntual. Usaremos un ejemplo de detección de velocidad de vehículos, pero el objetivo real es mostrar una ruta repetible que puedas reutilizar en diferentes aplicaciones Jetson y diferentes configuraciones de agentes.

:::note
"Skills" en este artículo se refiere a **agent skills reutilizables creadas por NVIDIA** y cargadas por el agente de programación utilizado en el flujo de trabajo. Esto es distinto del **módulo "Skills" de Jetson DevelopTool** de Seeed, que es una función de automatización GUI independiente. Si estás buscando ese módulo GUI, consulta el artículo [DevelopTool Skills module](/es/jetson_developtool_skills/).
:::

## ¿Qué son NVIDIA Skills?

Una **skill** es un paquete reutilizable de instrucciones y material de referencia que un agente de programación de IA carga bajo demanda. Cuando invocas una skill, el agente recibe orientación específica de la tarea: qué inspeccionar, qué convenciones seguir, qué herramientas usar y qué salidas verificar. En Claude Code, nombrar explícitamente una skill con `/<skill-name>` es solo una forma de activar ese comportamiento; una vez que las skills están instaladas en el espacio de trabajo, el agente también puede elegir entre ellas automáticamente.

Dos repositorios de skills de NVIDIA son especialmente relevantes para desarrolladores de Jetson:

- **[NVIDIA/skills](https://github.com/NVIDIA/skills)** para flujos de trabajo de propósito general

En este artículo, usamos estas skills para reducir el trabajo repetido de bring-up y acortar el camino desde "dispositivo disponible" hasta "prototipo validado".

## Por qué se ralentiza la entrega en Jetson

La primera versión de una aplicación Jetson normalmente tiene que coordinar el estado del hardware, la compatibilidad de JetPack y del runtime, las opciones de instalación de paquetes en ARM, la ubicación del modelo, los comandos de lanzamiento, las rutas de salida y un nivel mínimo de validación de rendimiento. El problema no es que ningún paso individual sea imposible. El problema es que los pasos están dispersos entre diferentes herramientas, documentación y trabajo ad hoc en la shell, por lo que la ruta de entrega permanece difusa durante más tiempo del necesario.

El valor práctico de un flujo de trabajo basado en skills es que convierte esto:

| Ruta tradicional | Ruta basada en skills |
| --- | --- |
| Leer varios documentos antes de actuar | Empezar desde una skill enfocada en la tarea |
| Inspeccionar manualmente el estado del dispositivo | Pedir al agente que diagnostique el Jetson |
| Adivinar una ruta de dependencias | Pedir al agente que use una ruta de instalación con conocimiento de Jetson |
| Construir a mano un prototipo de primera pasada | Pedir al agente que cree el esqueleto de la versión ejecutable más pequeña |
| Explicar manualmente los artefactos al equipo | Pedir al agente que resuma archivos, comandos y salidas |
| Construir desde cero una interfaz de demo rápida | Pedir al agente que envuelva el prototipo para compartirlo |

## En qué son buenas las Skills

Para el trabajo con Jetson, las skills son más fuertes cuando la tarea aún trata de reducir la incertidumbre: inspeccionar el dispositivo actual, elegir una ruta de configuración más compatible con Jetson, generar el primer prototipo ejecutable alrededor de un modelo o recurso de prueba, explicar lo que se creó y empaquetar el resultado en algo que pueda mostrarse o volver a ejecutarse. Son mucho menos útiles como sustituto de la ingeniería de producción. Una skill puede acelerar el bring-up y la validación, pero no garantiza el mejor rendimiento posible, la fiabilidad de grado de producción, la precisión calibrada para tu escena ni las decisiones finales de arquitectura que tomarías para escalar y mantener. Ese límite importa, porque el objetivo del flujo de trabajo es alcanzar una base confiable más rápido y luego endurecerla de forma deliberada.

## El flujo de trabajo de entrega en Jetson en 5 pasos

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/jetson_delivery_workflow.png" style={{width:1000, height:'auto'}} />
</div>


## Qué Skill usar en cada paso

No todos los proyectos necesitan todas las skills. Un mejor modelo mental es usar la skill adecuada cuando aparece un bloqueo específico.

### Empieza con `jetson-diagnostic`

Úsala primero cuando aún no sepas si el Jetson está listo para el despliegue. En la práctica, le da al agente suficiente contexto del dispositivo en vivo para responder a las preguntas que normalmente bloquean el resto del flujo de trabajo: qué modelo de Jetson se está ejecutando, qué versión de JetPack/L4T está instalada, cuánta memoria está libre, si el dispositivo está limitado térmicamente y si los servicios principales o endpoints de hardware son visibles.

Ejemplo de prompt:
```text
/jetson-diagnostic Check whether this Jetson is ready for a real-time vision prototype and summarize any blockers.
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/jetson-diagnostic.PNG" style={{width:900, height:'auto'}} />
</div>

### Usa `jetson-package` cuando la guía de configuración se vuelva genérica o insegura

En Jetson, los consejos de instalación de paquetes copiados de Linux x86 o de tutoriales genéricos de IA a menudo fallan. Usa `jetson-package` cuando quieras que el agente prefiera fuentes y rutas de despliegue con conocimiento de Jetson, especialmente al decidir entre paquetes del host, wheels o contenedores para dependencias como PyTorch u OpenCV.

```text
/jetson-package Recommend the correct Jetson-compatible dependency path for this vision project.
```

### Usa `jetson-memory-audit` cuando la memoria sea el primer cuello de botella

Esto es útil cuando el modelo se carga lentamente, el proceso se mata o el dispositivo se siente inestable bajo carga de inferencia. Le da al agente una visión basada en datos de lo que está usando actualmente la DRAM, de si un proceso anterior realmente liberó memoria y de si un cambio de configuración produjo una diferencia medible en lugar de solo sonar plausible.

```text
/jetson-memory-audit Measure the current memory pressure and identify the biggest consumers before I deploy this prototype.
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/memory-opt.PNG" style={{width:900, height:'auto'}} />
</div>

### Usa `jetson-headless-mode` cuando el dispositivo actúe como un appliance

Si el Jetson se usa como un nodo de borde dedicado en lugar de una máquina de escritorio, cambiar al modo headless puede recuperar recursos para cargas de trabajo de inferencia.

```text
/jetson-headless-mode Compare memory usage before and after enabling headless mode for this deployment target.
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/headless-mode.PNG" style={{width:900, height:'auto'}} />
</div>

### Usa una skill de compilación específica de la tarea para generar la primera versión ejecutable

Una vez que se entienden el dispositivo y el entorno, el siguiente objetivo no es la perfección. El objetivo es llegar al **prototipo útil más pequeño** con salidas inspeccionables.

En el ejemplo siguiente, usamos `deepstream-import-vision-model` como paso de compilación.

## Criterios de aceptación del prototipo

Antes de profundizar más en la optimización, define qué cuenta como un prototipo exitoso. Un primer prototipo en Jetson suele ser suficientemente bueno cuando puede volver a ejecutarse con un comando claro, sus rutas de entrada y salida son explícitas, el resultado puede inspeccionarse de inmediato y la situación actual de recursos ya no es un misterio. Si puedes ver el principal cuello de botella y el siguiente paso de ingeniería es obvio, el prototipo ya ha cumplido su función. El objetivo de la primera pasada no es terminar el producto. El objetivo es reducir la incertidumbre lo bastante rápido como para que la siguiente iteración sea deliberada en lugar de un ejercicio de prueba y error.

## Requisitos previos

Antes de seguir el flujo de trabajo de ejemplo, prepara lo siguiente:

- un **reComputer Jetson** u otro dispositivo Jetson encendido y accesible a través de la red
- un entorno **JetPack** funcional en el Jetson
- un **agente de programación de IA** instalado en la máquina host que dirigirá el flujo de trabajo
- **acceso SSH** desde la máquina host al Jetson
- suficiente almacenamiento en el Jetson para descargas de modelos, archivos temporales y salidas
- un **recurso de prueba** como un clip de vídeo ya colocado en el Jetson

Para este ejemplo, asumimos que el vídeo de prueba `top_view.mp4` está ubicado en `/home/seeed/workspace/traffic_monitor/` en el Jetson.

:::note
La máquina host ejecuta el agente de programación y usa skills para dirigir el trabajo en el Jetson, normalmente a través de SSH. En la práctica, tu configuración exacta aún puede requerir dependencias adicionales como Python, DeepStream o soporte de contenedores, dependiendo de la ruta de implementación seleccionada por el agente.
:::

## Configurar el espacio de trabajo de Skills

En el ejemplo de Claude Code utilizado en este artículo, las skills viven dentro de un directorio `.claude/` en la raíz de tu proyecto. 

```bash
mkdir -p project/.claude/
cd project/
git clone https://github.com/NVIDIA/skills.git
cp -r skills/skills .claude/
claude
```

Una vez que se inicie el comando `claude`, puedes escribir `/<skill-name>` para forzar explícitamente que el agente lea una skill específica. Eso es útil cuando ya sabes qué flujo de trabajo quieres. Pero una vez que las skills están instaladas en el espacio de trabajo, el agente ya sabe que existen y puede elegir entre ellas automáticamente a partir de tu solicitud. En la práctica, puede encadenar varias skills en una sola pasada, por ejemplo combinando diagnóstico, selección de paquetes, inspección de memoria y generación de prototipos en lugar de tratar cada paso como una sesión completamente separada.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/skills_list.PNG" style={{width:800, height:'auto'}} />
</div>

## Estudio de caso: detección de velocidad de vehículos mapeada al flujo de trabajo

El siguiente ejemplo muestra cómo se ve en la práctica el flujo de trabajo de 5 pasos. El ejemplo es la detección de velocidad de vehículos, pero la verdadera conclusión es el patrón de entrega.

### Paso 1. Diagnosticar el dispositivo

Comienza comprobando si el Jetson está realmente listo para una carga de trabajo de visión. Un prompt como el siguiente le da al agente suficiente contexto para inspeccionar el dispositivo e informar de los bloqueadores que importan para el prototipo en lugar de simplemente volcar telemetría en bruto.

```text
/jetson-diagnostic Check the current status of my Jetson and summarize any blockers for a vision prototype.
SSH login: seeed@192.168.6.204
Password: seeed
```
:::note
La dirección IP y la contraseña anteriores son valores de ejemplo. Sustitúyelos por tus propias credenciales de Jetson. `seeed` es la contraseña predeterminada en algunos dispositivos Jetson de Seeed y debe cambiarse en unidades de producción.
:::

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/check_device.PNG" style={{width:800, height:'auto'}} />
</div>

### Paso 2. Preparar el entorno

Si el paso de diagnóstico muestra que el entorno no está lo suficientemente limpio para el prototipo, este es el momento de prepararlo en lugar de seguir adelante a ciegas. `jetson-package` ayuda al agente a elegir una ruta de dependencias compatible con Jetson, mientras que `jetson-memory-audit` y `jetson-headless-mode` son útiles cuando la presión de memoria o la sobrecarga innecesaria del escritorio se convierten en el primer obstáculo.

```text
/jetson-package Recommend the correct dependency path for this Jetson vision prototype.
```

```text
/jetson-memory-audit Measure memory usage before I deploy the model and identify the top consumers.
```

```text
/jetson-headless-mode Compare whether this device should be switched to headless mode for better inference headroom.
```

El beneficio práctico es que solo dedicas tiempo al trabajo de configuración cuando el diagnóstico anterior muestra que realmente es necesario.

### Paso 3. Crear el prototipo ejecutable más pequeño

Ahora pasa de la preparación del entorno al arranque de la aplicación.

```text
/deepstream-import-vision-model Help me access the following directory on Jetson: /home/seeed/workspace/traffic_monitor
Deploy a vehicle speed detection system under this directory. Use the top_view.mp4 file in this directory for testing.
```

Este es el video de muestra de tráfico con vista superior utilizado en la guía paso a paso:

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/top_view.png" style={{width:1000, height:'auto'}} />
</div>

El agente puede elegir diferentes rutas de implementación dependiendo de lo que exista en el dispositivo. Lo importante en esta etapa no es si eligió la pila final de producción. Lo importante es que produzca una primera pasada ejecutable con resultados inspeccionables.

Al final de este paso, quieres un script principal de inferencia o punto de entrada de la aplicación, una ruta clara de reejecución, un video de salida anotado o artefacto similar, y los archivos generados colocados en un espacio de trabajo conocido. Si esas piezas existen, la línea base ya es útil incluso si la pila final sigue abierta a cambios.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/quick_deploy.PNG" style={{width:800, height:'auto'}} />
</div>

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/output_video.png" style={{width:1000, height:'auto'}} />
</div>

Aquí es donde el flujo de trabajo empieza a dar frutos. En lugar de dedicar la primera pasada a cablear scripts y rutas a mano, puedes evaluar una línea base ejecutable y decidir qué merece un esfuerzo de ingeniería más profundo.

### Paso 4. Validar las salidas e inspeccionar la arquitectura

Una vez que existe la primera pasada, pídele al agente que explique qué creó y cómo ejecutarlo de nuevo.

```text
Please explain the generated files, the rerun command, the output locations, the current bottlenecks, and the technical approach and architecture you are using.
```

En este punto, las preguntas útiles ya no son “¿se ejecutó algo?” sino “¿qué se creó exactamente, cómo lo ejecuto de nuevo, dónde están las salidas y qué eligió el agente a nivel de arquitectura?” Una buena explicación de seguimiento debería dejarte con una visión clara de la disposición de archivos, la ruta de reejecución, las ubicaciones de salida, el enfoque de detección y estimación de velocidad, y el probable cuello de botella de rendimiento.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/explain1.png" style={{width:800, height:'auto'}} />
</div>

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/explain6.png" style={{width:800, height:'auto'}} />
</div>

Esto ahorra tiempo porque el agente no solo está generando código. También está acortando el tiempo necesario para entender y evaluar la línea base que acaba de producir.

### Paso 5. Empaquetar el prototipo en algo compartible

Una vez que el algoritmo funciona desde la línea de comandos, la siguiente brecha suele ser la capacidad de hacer una demo.

```text
Help me create a web UI that I can access from my local PC to upload videos for detection and continuously loop the output video.
```

El agente puede envolver el prototipo en un pequeño servicio web o interfaz similar para que compañeros de equipo o clientes puedan probarlo sin tocar la línea de comandos.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/web_ui_deploy.png" style={{width:1000, height:'auto'}} />
</div>

:::note
Para acceder a la interfaz de usuario desde tu PC local, asegúrate de que el puerto elegido sea accesible en el Jetson y de que ambas máquinas estén en la misma red, o utiliza reenvío de puertos por SSH. Al juzgar la velocidad de inferencia, usa el tiempo de ejecución local del lado de Jetson como punto de referencia, porque una interfaz web reenviada puede sentirse más lenta debido a la latencia de red y no solo al rendimiento del modelo.
:::

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/out_ui.gif" style={{width:1000, height:'auto'}} />
</div>

Esta es otra razón por la que el flujo de trabajo es útil en la práctica: el mismo proceso que creó el prototipo también puede salvar la brecha entre la prueba de concepto de backend y el empaquetado listo para demo.

## Modos de fallo comunes y qué hacer a continuación

El flujo de trabajo es más útil cuando lo utilizas para reducir la incertidumbre correcta en el momento adecuado.

| Problema | Lo que suele significar | Qué hacer |
| --- | --- | --- |
| La ruta de instalación parece genérica o falla en ARM | Se está ignorando la compatibilidad con Jetson | usa `jetson-package` |
| El modelo no se carga o la inferencia es inestable | la presión de memoria es el primer cuello de botella | usa `jetson-memory-audit` |
| El dispositivo desperdicia demasiada memoria en servicios de escritorio | es mejor tratar el Jetson como un appliance | usa `jetson-headless-mode` |
| El prototipo se ejecuta pero es demasiado lento | la línea base es válida pero aún no está optimizada | pídele al agente que identifique cuellos de botella y recomiende DeepStream o TensorRT |
| La demo solo funciona en forma de terminal | la línea base de ingeniería existe pero no es compartible | pídele al agente que empaquete una interfaz web o un wrapper de servicio |

## Del prototipo a producción

Este flujo de trabajo es más sólido durante la exploración, el arranque y la validación. Una vez que se demuestra la línea base, el siguiente paso suele ser el endurecimiento manual.

Los movimientos típicos hacia producción son conocidos: sustituir la lógica de prototipo por un pipeline DeepStream más estructurado, convertir modelos a TensorRT para mayor rendimiento, mejorar la robustez del seguimiento y la calidad de la calibración, convertir scripts ad hoc en un servicio o aplicación mantenible y añadir la disciplina de monitorización y despliegue que necesita un sistema real. El punto clave es simple: **usa skills para comprimir el camino hacia una línea base confiable y luego refuérzala de forma deliberada.**

## Plantilla reutilizable de prompts

La siguiente secuencia de prompts es una buena plantilla inicial para nuevos proyectos con Jetson:

```text
1. Diagnose this Jetson and list any blockers for running a vision prototype.
2. Recommend the correct Jetson-compatible dependency path.
3. Build the smallest runnable prototype in /path/to/workspace using /path/to/test-asset.
4. Explain the generated files, rerun command, and expected outputs.
5. Measure the current bottleneck and recommend whether to stay in Python or move to DeepStream/TensorRT next.
6. Package the prototype into a simple demo interface if the baseline is validated.
```

Puedes adaptar esta plantilla para detección de objetos, analítica de video, percepción en robótica u otros trabajos de arranque de aplicaciones del lado de Jetson.

## Resumen

La idea principal no es que un agente específico pueda crear una única demo de detección de velocidad de vehículos. La conclusión más útil es que **la entrega de aplicaciones en Jetson se vuelve mucho más rápida cuando tratas las skills como un flujo de trabajo estructurado**: diagnostica primero el dispositivo, prepara solo donde sea necesario, genera el prototipo ejecutable más pequeño, valida las salidas y los cuellos de botella y luego empaqueta el resultado para compartirlo. Ese es el patrón repetible. El ejemplo de velocidad de vehículos es solo una instancia de ello.

## Referencias

- [NVIDIA/skills (GitHub)](https://github.com/NVIDIA/skills) — skills de agente de propósito general de NVIDIA
- [NVIDIA-AI-IOT/jetson-device-skills (GitHub)](https://github.com/NVIDIA-AI-IOT/jetson-device-skills) — skills específicas para Jetson
- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code) — instalación y uso de Claude Code
- [Traffic Management DeepStream SDK](/es/Traffic-Management-DeepStream-SDK/) — una ruta más manual orientada a DeepStream
- [Deploy YOLOv8 with TensorRT and DeepStream SDK](/es/YOLOv8-DeepStream-TRT-Jetson/) — una ruta de despliegue de modelos más manual
- [DevelopTool Skills module](/es/jetson_developtool_skills/) — el módulo de automatización "Skills" de Seeed DevelopTool

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
