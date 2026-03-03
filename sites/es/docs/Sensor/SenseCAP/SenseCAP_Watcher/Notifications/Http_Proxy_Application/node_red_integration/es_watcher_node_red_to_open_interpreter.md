---
description: Enviar mensaje desde Watcher & Node-RED a Open Interpreter
title: Watcher & Node-RED a Open Interpreter
keywords:
- watcher
- Open Interpreter
image: https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png
slug: /es/watcher_node_red_to_open_interpreter
last_update:
  date: 08/19/2024
  author: Allen
---

# Inicio Rápido de Watcher a Open Interpreter

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png" style={{width:1000, height:'auto'}}/></div>

## Parte 1. ¿Qué es [Open Interpreter](https://docs.openinterpreter.com/getting-started/introduction)?

Open Interpreter es una herramienta de código abierto que facilita la interacción entre usuarios y sus computadoras al permitir que comandos en lenguaje natural ejecuten código en varios lenguajes de programación. Actúa como un puente, permitiendo a los usuarios escribir instrucciones en lenguaje simple, que el intérprete luego traduce a código ejecutable. Esto mejora la productividad y hace que la programación sea más accesible, especialmente para aquellos que pueden no estar familiarizados con la sintaxis de codificación.

## Parte 2. Operaciones en Node-RED

En esta parte, necesitamos 4 módulos para completar el trabajo. Estos son los módulos **SenseCap Watcher OpenSteam, function, http request y debug**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/6.png" style={{width:1000, height:'auto'}}/></div>

1. **Módulo SenseCap Watcher OpenSteam**: Obtener mensaje desde Watcher a Node-RED.
2. **Módulo function**: Procesar datos para obtener el mensaje que deseas.
3. **Módulo http request**: Enviar mensaje a Open Interpreter vía protocolo http.
4. **Módulo debug**: Depurar todo el flujo de trabajo para verificar si todo está bien.

Te mostraremos cómo configurar esos módulos en los siguientes pasos.

### Paso 1. Configurar el módulo SenseCap Watcher OpenSteam

Primero que todo, necesitas ejecutar una tarea en Watcher siguiendo el video a continuación. Si quieres saber más [por favor haz clic aquí](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Si aún no sabes cómo enviar mensajes desde Watcher a Node_RED, [por favor haz clic aquí](https://wiki.seeedstudio.com/es/watcher_to_node_red/).

### Paso 2. Configurar el módulo function

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/7.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

### Paso 3. Configurar el módulo de solicitud http

Usamos solicitud POST por seguridad y enviamos al puerto 3000, y usaremos Open Interpreter para mantener escuchando el puerto 3000 más tarde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/8.png" style={{width:800, height:'auto'}}/></div>

### Paso 4. Configurar el módulo de depuración

Selecciona como se muestra en la siguiente imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/9.png" style={{width:800, height:'auto'}}/></div>

Cuando termines la configuración, no olvides **Desplegarlos**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/10.png" style={{width:1000, height:'auto'}}/></div>

## Parte 3. Operaciones en Open Interpreter

:::tip
Antes de continuar, el prerrequisito es que necesitas tener un entorno de desarrollo Python en tu computadora.

Si no lo tienes, [por favor haz clic aquí para tu referencia.](https://phoenixnap.com/kb/how-to-install-python-3-windows)
:::

### Paso 5. Instalar Open Interpreter

Después de instalar Python, puedes instalar Open Interpreter a través de Python fácilmente, solo un comando.

```python
pip install open-interpreter
```

### Paso 6. Iniciar Open Interpreter

Interpreter tiene dos modos, modo en línea y modo local. Por defecto, Interpreter selecciona el modo en línea, usando la clave API de OpenAI ChatGPT gpt-4-turbo. También puedes configurarlo en modo local, lo que significa que necesitas descargar el modelo para ejecutarlo localmente.

:::tip
Recomendaría el modo en línea porque el modo en línea es mucho más rápido e inteligente que el modo local y el modo local a menudo se atasca.
:::

#### Modo en línea

1. Antes de comenzar, necesitamos una clave API de OpenAI. [Puedes hacer clic aquí](https://platform.openai.com/api-keys) para obtener una si eres miembro de pago de OpenAI GPT-4.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/16.png" style={{width:1000, height:'auto'}}/></div>

2. Y luego, ingresamos el comando ```interpreter``` para iniciarlo y nos requiere ingresar la clave API. Después de eso, configuramos el modelo a gpt-4-turbo exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2_1.png" style={{width:1000, height:'auto'}}/></div>

#### Modo local

1. Antes de comenzar, necesitamos descargar un modelo para ejecutarlo localmente. Recomendaría **Ollama** aquí. [Haz clic aquí para ir.](https://ollama.com/) Debes descargar esta aplicación e instalarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/12.png" style={{width:1000, height:'auto'}}/></div>

2. Cuando lo instales exitosamente, ejecuta ```ollama``` en tu **PowerShell (o Terminal)**, se verá como la siguiente imagen. Y luego, ejecuta ```ollama run llama3.1``` para descargar el modelo **llama3.1** y ejecutarlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/15.png" style={{width:1000, height:'auto'}}/></div>

3. Si quieres probar otros modelos, [haz clic aquí para ir.](https://ollama.com/library) Solo ejecuta ```ollama run xxx```.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/13.png" style={{width:1000, height:'auto'}}/></div>

4. Después de instalar el modelo y ejecutarlo exitosamente, podemos continuar. Necesitamos ingresar el comando ```interpreter -l``` para entrar en él, y luego seleccionar **ollama** y **llama3.1** (el modelo que acabas de descargar).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/11.png" style={{width:1000, height:'auto'}}/></div>

### Paso 7. Ejecutar comandos

:::tip
Intenté muchas veces ejecutar el siguiente comando en Interpreter, pero no todas las veces la reacción de Interpreter es la misma.

Así que necesitas interactuar con Interpreter según su reacción. A veces necesitas reiniciarlo e intentar de nuevo.
:::

Aquí está mi comando en lenguaje natural enviado a Open Interpreter.

```
i want you to keep listening computer port 3000 and extract the image_url and open it in browser.
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2.png" style={{width:1000, height:'auto'}}/></div>

En la primera vez, Interpreter dijo que su configuración inicial solo soporta solicitudes GET por simplicidad, pero mi solicitud es POST por seguridad, así que no puede soportarla y me sugiere modificar el servidor para manejar solicitudes POST. Dije que sí y ella se ejecutará automáticamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/3.png" style={{width:1000, height:'auto'}}/></div>

Como puedes ver, el código se ejecutó exitosamente, escuchando en el puerto 3000.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/4.png" style={{width:1000, height:'auto'}}/></div>

Ahora, usa Watcher para detectarte a ti mismo. La imagen será capturada y abierta en el navegador automáticamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/5.png" style={{width:1000, height:'auto'}}/></div>

¡Felicitaciones por integrar exitosamente las aplicaciones Watcher y Open Interpreter! Este logro marca un paso significativo en tu viaje, mostrando tu dedicación y habilidad. A medida que avances, encontrarás conceptos y herramientas aún más fascinantes para explorar. Abraza los desafíos y descubrimientos que te esperan, ¡y disfruta cada momento de esta emocionante aventura!

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