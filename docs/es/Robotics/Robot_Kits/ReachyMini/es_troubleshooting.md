---
description: Guía completa de resolución de problemas y FAQ para Reachy Mini que cubre incidencias frecuentes, montaje, conexión, hardware, SDK y mensajes de error.
title: Resolución de problemas y FAQ
slug: /es/reachymini_troubleshooting
keywords:
- troubleshooting
- faq
- support
- issues
- fixes
- assembly
- connection
- motors
- sdk
- errors
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Resolución de problemas y FAQ

Bienvenido a la página de soporte de Reachy Mini. Encuentra a continuación respuestas a preguntas frecuentes y soluciones.

## 🛠️ Resolución de problemas - Incidencias frecuentes

:::warning Resolución de problemas esencial
**Por favor, lee esto primero**: ¡resuelve la mayoría de los problemas conocidos!
:::

### Antes que nada y para cualquier problema: actualiza y reinicia

:::tip Primer paso: Actualizar y Reiniciar
**Asegúrate de que estás usando el software actualizado y de que has reiniciado tanto tu robot como tu ordenador.**

Para reiniciar tu robot, pulsa OFF, espera 5 segundos y luego pulsa ON. Este sencillo procedimiento soluciona varios problemas comunes y conocidos.
:::

**Cómo actualizar el software:**

* **Si estás usando el dashboard en un navegador web**
  Abre `Settings`, luego haz clic en **Check for updates**.
  ![Update](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/update.png)
* **Si estás usando el nuevo dashboard/app**
  Desde la versión 0.8.5 de la app,
* **Si estás usando un repositorio clonado**
  Asegúrate de que estás:
  * En la última versión etiquetada, o
  * Al día con la rama `develop` (`git pull`).

**Reachy Mini Wireless**: ejecuta `reachyminios_check` para asegurarte de que todo está bien (consulta [Get Started](/es/reachymini_platforms_reachy_mini_get_started))

### Problemas relacionados con los motores

Esto se refiere a problemas como:
* Motores parpadeando en rojo o que no responden/no se mueven.
* Motores que muestran errores como "Overload Error"
* Motores ausentes: "No motor found on port", "Missing motor", etc.

:::info Diagnóstico de motores
Si tienes alguno de los siguientes síntomas, consulta la [guía de diagnóstico y resolución de problemas de motores](/es/reachymini_troubleshooting_motors_diagnosis) para seguir pasos detallados para diagnosticar y solucionar problemas relacionados con los motores.

Usar la app Reachy Mini Testbench te ayudará a identificar y resolver estos problemas de forma eficaz.
:::

### Error de descarga eléctrica

:::danger Error de descarga eléctrica
Un error de descarga eléctrica en los motores Dynamixel significa que hay un problema con la fuente de alimentación o un cortocircuito en algún lugar.

Por favor, comprueba si algún cable está dañado, desde la PCB del pie hasta la cabeza. En especial los siguientes cables:
* Cable de alimentación (negro y rojo)
* Cables de 3 hilos para motores (300mm, 200mm, 100mm y 40mm)

También puede tratarse del mismo problema que "Motor blinking red or Overload Error" descrito arriba.
:::

### El micrófono no funciona

:::warning Problemas con el micrófono
Si tienes uno de los siguientes síntomas:
* La grabación de audio no funciona / devuelve silencio
* La grabación de audio devuelve ceros

**Es posible que hayas conectado el cable del micrófono al revés.**
* Si tu cable es blanco y azul, vuelve a comprobar las instrucciones de montaje para asegurarte de que el lado azul está hacia arriba.
* Si tu cable es negro, comprueba que el lado con la inscripción "Main Board" está hacia arriba (ver imagen abajo).

![mic_cable](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/black_fpc_cable.png)
:::

Si tu cable está conectado correctamente y sigues teniendo problemas, es probable que el cable FPC del micrófono esté dañado. Consulta el tutorial [How to change the FPC cable of the microphone of Reachy Mini?](/es/reachymini_troubleshooting_change_mic_fpc_cable) para solucionar este problema.

### Volumen de audio bajo

:::tip
* Actualiza tu robot a la versión 1.2.3 o posterior

Para más detalles, consulta la documentación: [Getting Started](/es/reachymini_platforms_reachy_mini_get_started)
:::

### Errores de permisos

:::tip
* Actualiza tu robot a la versión 1.2.3 o posterior
* Reinicia el robot
:::

### Una antena aparece girada 90° o 180°

Se trata de un problema de fabricación.

Es fácil de solucionar siguiendo esta guía:
[Antenna repositioning guide](https://drive.google.com/file/d/1FsmNpwELuXUbdhGHDMjG_CNpYXOMtR7A/view?usp=drive_link)

### Un motor tiembla

Esto puede ocurrir si los valores PID del motor no son óptimos. A menudo, los motores 10 (pie), 17 y 18 (las antenas) pueden mostrar ligeras vibraciones al mantener la posición.
Se trata de pequeños "ajustes" que hace el propio motor, que en este caso son una sobrecorrección.
La buena noticia es que puedes [ajustar los valores de control PID](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/config/hardware_config.yaml#L66C1-L67C1) para reducir estas vibraciones.

:::tip
Puedes probar primero a reducir P a 180 en los motores 10, 17 y 18.
Si no ayuda, también puedes probar a aumentar D a 10 en los mismos motores.
:::

### La imagen es oscura en la versión Lite

:::info Solución rápida: Ajustar el tiempo de exposición en la configuración de la cámara
Para corregir una imagen oscura, activa la autoexposición o aumenta manualmente el tiempo de exposición usando una aplicación de control de cámara. Estas aplicaciones proporcionan una interfaz intuitiva para ajustar la exposición y otros parámetros de la cámara.
:::

**Aplicaciones recomendadas:**

* **macOS:** [CameraController](https://github.com/itaybre/CameraController) - Aplicación GUI de código abierto para control de cámaras USB
* **Linux:** qv4l2 - Aplicación GUI basada en Qt para control de cámaras V4L2
  * Instalación: `sudo apt install qv4l2`
* **Windows:** [Webcam Settings](https://www.softpedia.com/get/Internet/WebCam/Webcam-Settings-Tool.shtml) o [ManyCam](https://manycam.com/) para control avanzado de cámara

Estas aplicaciones te permiten ajustar el tiempo de exposición, el brillo y otros parámetros de la cámara mediante una interfaz gráfica intuitiva.

---

:::info Avanzado: Uso de libuvc para un control exhaustivo de la cámara
Para usuarios avanzados que quieran un control preciso sobre los parámetros de la cámara, puedes usar utilidades de línea de comandos basadas en libuvc. Estas herramientas proporcionan acceso de bajo nivel a todos los controles de cámaras UVC.

Para solucionar específicamente el problema de oscuridad, establece `auto-exposure-priority=1` usando estas herramientas de línea de comandos.
:::

**Herramientas de línea de comandos por plataforma:**

* **macOS:** [uvc-util](https://github.com/jtfrey/uvc-util)

* **Linux:** [v4l2-ctl](https://manpages.debian.org/testing/v4l-utils/v4l2-ctl.1.en.html)
  * Instalación: `sudo apt install v4l-utils`

* **Windows:** Windows no tiene un equivalente directo.

:::note
Estas herramientas de línea de comandos requieren conocimientos técnicos y el acceso a los parámetros de la cámara puede variar según la herramienta seleccionada. Usa `--help` y lista los controles disponibles antes de hacer cualquier cambio.
:::

### Falta una pieza en mi paquete

:::tip Comprueba primero
Asegúrate de desempaquetar todo primero. Algunas piezas vienen premontadas (por ejemplo, la parte inferior de la cabeza ya está colocada en la parte trasera de la cabeza).

![head_parts](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/head_parts.jpg)

Después, comprueba la lista de piezas de la guía de montaje para ver si realmente te falta alguna pieza.
:::

Si estás 100% seguro de que te falta una pieza, ponte en contacto con sales@pollen-robotics.com con una foto de todas las piezas que tienes y el número de pedido o número de factura.
También puedes encontrar [archivos stl](https://github.com/pollen-robotics/reachy_mini/tree/develop/src/reachy_mini/descriptions/reachy_mini/mjcf/assets) para imprimirla tú mismo mientras tanto.

### No puedo conectar a mi Reachy Mini Wireless usando un cable USB-C

:::info
Las unidades Wireless no exponen el robot por USB de la misma forma que la versión Lite, por lo que conectar un cable USB-C a tu portátil no te dará una conexión funcional.

**En su lugar:**
* Conecta el robot a tu red Wi‑Fi y usa el cliente SDK en tu portátil para controlarlo de forma remota.
* Si quieres ejecutar código directamente en la Raspberry Pi integrada, conéctate por SSH y ejecuta tus scripts allí (esto es lo que hace el Dashboard después de que publiques/instales una app).
* Para un enlace por cable, usa un adaptador USB-C-a-Ethernet más un cable Ethernet: esto simplemente sustituye el Wi‑Fi por Ethernet por cable.
:::

### El punto de acceso inalámbrico no aparece - La RPI no arranca

Hay un interruptor en la placa de la cabeza que debe estar en una posición determinada. Si no lo está, el AP no aparece. Es posible que este interruptor se haya movido durante el montaje o incluso que sea un error de fábrica.

:::warning
Por favor, comprueba que el interruptor está en la posición "**debug**" y no en "**download**". Mira la imagen de abajo:

![switch_position](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/wireless_switch.png)
:::

Si este interruptor está en la posición correcta y aún así no puedes ver el AP, puede que necesites volver a grabar la iso de la Raspberry Pi siguiendo el tutorial [reflash the RPI Iso tutorial](/es/reachymini_platforms_reachy_mini_reflash_the_rpi_iso).

## 🚀 Primeros pasos y montaje

### ¿Cuánto tiempo suele llevar el montaje?

:::tip
La mayoría de los testers indican entre **1,5 y 2 horas**. Puede llevar hasta 4 horas dependiendo de tu nivel de experiencia.
:::

### ¿Hay pasos difíciles durante el montaje?

Realmente no, los testers lo describen como **divertido, sencillo y satisfactorio**. Herramientas básicas y paciencia son suficientes. El guiado de cables y el apriete correcto de las piezas son los elementos más delicados. Cuando compras un Reachy Mini Lite o Wireless, viene con una guía de usuario impresa y también tienes acceso a un vídeo y a la guía digital.

Vídeo para Reachy Mini [BETA](https://www.youtube.com/watch?v=_r0cHySFbeY), LITE, WIRELESS

Guía de montaje digital para Reachy Mini [BETA](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide), LITE, WIRELESS

### Me quedan 2 cables y algunos tornillos después de terminar el montaje. ¿Es normal?

:::info
Sí, es completamente normal.

Incluimos intencionadamente cables y tornillos de repuesto en el kit por si algunas piezas se dañan o se pierden durante el montaje.

No necesitas instalarlos.
:::

### Mi Reachy Mini no se mueve en el primer arranque. ¿Qué debo comprobar?

:::warning Lista de comprobación
* **Fuente de alimentación:** Asegúrate de que la fuente de alimentación de 7V-5A está conectada. La conexión USB no es suficiente para alimentar los motores.
* **Cables:** Comprueba que todos los cables están completamente insertados. Los cables de alimentación sueltos son una causa común de errores de "motor not responding".
* **Sección de resolución de problemas:** Consulta la sección Essential Troubleshooting al principio de esta página.
:::

### ¿Necesito iniciar el daemon manualmente?

:::success NO
* Con Reachy Mini (Wireless), el daemon ya se está ejecutando en la Raspberry Pi integrada.
* Con Reachy Mini Lite, puedes usar [the desktop app](/es/reachymini_platforms_reachy_mini_lite_get_started).
* Si la desktop app no funciona en tu sistema (por ejemplo, ARM64, distribuciones poco habituales), puedes [instalar y usar directamente el Python SDK](/es/reachymini_sdk_installation), ¡es una alternativa totalmente soportada!
:::

## 🔌 Conexión y Panel de control

### ¿Cómo conecto el robot al Wi‑Fi?

Consulta la [guía inalámbrica de Reachy Mini](/es/reachymini_platforms_reachy_mini_get_started) para obtener instrucciones detalladas sobre cómo conectarte a Wi‑Fi.

### ¿Cómo restablezco el punto de acceso Wi‑Fi?

Si necesitas restablecer el punto de acceso Wi‑Fi del robot (por ejemplo, si no puedes conectarte o quieres cambiar de red), sigue las instrucciones de la [Guía de restablecimiento de Wi‑Fi](/es/reachymini_platforms_reachy_mini_reset).

### El panel en http://localhost:8000 no funciona.

:::info Pasos de resolución de problemas
**1. Comprueba los permisos del navegador**: Asegúrate de que tu navegador puede acceder a redes locales. En _macOS_, estos permisos se encuentran en System Settings → Privacy & Security → Local Network.

**2. Para Reachy Mini Wireless**: Asegúrate de que tanto tu ordenador como el robot estén conectados a la **misma red**, y luego verifica la conectividad ejecutando el siguiente comando en tu terminal:
:::

```bash
ping reachy-mini
```

:::info Para Reachy Mini Lite
Realiza estas comprobaciones:
* _Entorno virtual:_ Asegúrate de estar trabajando dentro de tu entorno virtual (`.venv`, `reachy_mini_env`,...).
* _Actualización del SDK:_ Asegúrate de tener la última versión.

Con `pip`, ejecuta:
```bash
pip install -U reachy-mini
```

Con `uv`, ejecuta:
```bash
uv pip install -U reachy-mini
```

* _Daemon:_ Asegúrate de que el daemon `reachy-mini-daemon` se esté ejecutando en una terminal.
:::

### ¿El robot tiene una Web API?

:::info ¡Sí!
El daemon proporciona una REST API (FastAPI) y compatibilidad con WebSocket.
* **Docs:** `http://localhost:8000/docs` (disponible cuando el daemon está en ejecución).
* **Funciones:** Obtener estado, mover articulaciones, controlar el daemon.
:::

Puedes usar la API para controlar el robot, obtener su estado e incluso controlar el propio daemon. La API está implementada usando modelos de [FastAPI](https://fastapi.tiangolo.com/) y [pydantic](https://docs.pydantic.dev/latest/).

Debería proporcionarte todos los endpoints necesarios para interactuar con el robot, incluyendo:

* Obtener el estado del robot (posiciones de las articulaciones, estado de los motores, etc.)
* Mover las articulaciones del robot o establecer poses específicas

La API está documentada usando OpenAPI, y puedes acceder a todas las rutas disponibles y probarlas en http://localhost:8000/docs cuando el daemon esté en ejecución. También puedes acceder al esquema OpenAPI en bruto en http://localhost:8000/openapi.json.

Esto puede ser útil si quieres generar código cliente para tu lenguaje de programación o framework preferido, conectarlo a tu aplicación de IA o incluso crear tu propio servidor MCP.

**Compatibilidad con WebSocket**

La API también admite conexiones WebSocket para actualizaciones en tiempo real. Por ejemplo, puedes suscribirte a actualizaciones del estado de las articulaciones:

```javascript
let ws = new WebSocket(`ws://127.0.0.1:8000/api/state/ws/full`);

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
};
```

### ¿Por qué necesito un entorno virtual (.venv)?

:::tip
Ayuda a evitar conflictos de paquetes durante la instalación del SDK.
:::

## 🤖 Hardware, motores y límites

### ¿Dónde puedo encontrar más información sobre el hardware?

Consulta la [página de hardware de Reachy Mini](/es/reachymini_platforms_reachy_mini_hardware) para obtener información detallada sobre los componentes de hardware del robot.

### ¿Cuáles son los límites de seguridad (Cabeza y Cuerpo)?

:::warning Límites de seguridad
Si ordenas una pose fuera de estos límites, el robot se ajustará automáticamente a la pose segura más cercana.
:::

* **Giro del cuerpo (Body Yaw):** [-180°, 180°].
* **Inclinación/Rodamiento de la cabeza (Head Pitch/Roll):** [-40°, 40°].
* **Giro de la cabeza (Head Yaw):** [-180°, 180°].
* **Límite combinado:** La diferencia entre `body_yaw` y `head_yaw` debe estar dentro de **[-65°, 65°]**.

### ¿Por qué los motores están “flojos” o “rígidos”? (Compliancy)

* **`enable_motors()`**: Motores **ON** (rígidos). El robot mantiene la posición.
* **`disable_motors()`**: Motores **OFF** (flojos). Puedes moverlo a mano.
* **`make_motors_compliant()`**: Motores **ON pero suaves**. Útil para enseñanza por demostración.

### ¿Cómo accedo a los parámetros de los motores?

1. Puedes consultar escaneando los motores usando el [script scan_motors.py](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/tools/scan_motors.py).

:::tip Si tu robot es Lite
Puedes ejecutar el script directamente en tu ordenador:
```bash
python -m reachy_mini.tools.scan_motors
```
:::

:::tip Si tu robot es Wireless
Haz SSH al robot:
```bash
ssh pollen@reachy-mini.local
```
Activa el venv:
```bash
source /venvs/mini_daemon/bin/activate
```
Y ejecuta el script (¡los motores deben estar encendidos para esto!):
```bash
python -m reachy_mini.tools.scan_motors --wireless
```
:::

Debería mostrar la lista de motores detectados. Deberías tener todos los motores con baudrate 1000000, con los siguientes IDs: 10,11, 12, 13, 14, 15,17, 18. Si falta alguno, vuelve a comprobar los cables. Si hay un motor con un ID o baudrate diferente, ponte en contacto con el soporte.

Ejemplo de salida correcta:
```
Trying baudrate: 9600
No motors found at baudrate 9600
Trying baudrate: 57600
No motors found at baudrate 57600
Trying baudrate: 115200
No motors found at baudrate 115200
Trying baudrate: 1000000
Found motors at baudrate 1000000: [10, 11,12,13, 14, 15, 16, 17, 18]
```

2. Lite: También puedes usar Dynamixel Wizard para leer los parámetros de los motores. Sigue la guía [aquí](/es/reachymini_platforms_reachy_mini_lite_wizard).

### Los motores dejan de responder después de un tiempo.

* Comprueba la conexión de la fuente de alimentación.
* Es posible que los motores hayan entrado en modo de protección térmica (sobrecalentamiento). Apaga y vuelve a encender.
* Actualizar el SDK (`pip install -U reachy-mini`) ha resuelto esto para algunos usuarios.
* Si el led del motor parpadea en rojo, consulta la sección "Motor blinking red or Overload Error" en el apartado de resolución de problemas esencial anterior.

### ¿La batería tiene funciones de seguridad?

:::info
Wireless incluye un cargador de batería adecuado.
La batería integra también un BMS con un sensor de temperatura.
:::

### ¿Cómo veo la batería restante?

:::warning
No tenemos la posibilidad de comprobar el estado de la batería; es una limitación conocida del diseño.

Solo tenemos la indicación por led de "batería baja" cuando es momento de cargarla. (verde -> naranja -> rojo)
:::

### Cómo retirar la batería

:::tip
* Primero comprueba que el led verde no esté encendido.
* Quita los 3 tornillos de la parte inferior y saca un poco el pie.
![remove_foot](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/remove_foot.png)
* Desconecta el conector indicado (flecha roja) para poder retirar la batería. Debería haber algo de cinta de doble cara que mantiene la batería en su sitio, por lo que puede ser un poco difícil de sacar.
![battery_location](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/battery_connector.png)
* Cuando la vuelvas a montar, realiza estos pasos de nuevo en orden inverso. Solo ten cuidado de no pellizcar ningún cable.
:::

### La cabeza puede tocar el cuerpo durante algunos movimientos oficiales

:::info
Este comportamiento es esperado y no es un error de hardware ni de software.

Sin embargo, dado que puede resultar confuso, actualizaremos esos movimientos para evitar este contacto.
:::

### ¿Puedo modificar la apariencia (Skins/CAD)?

:::info
* **CAD:** Los archivos STEP completos aún no se han publicado, pero planeamos hacerlo en el futuro. Mientras tanto, puedes encontrar algunos archivos STL en la [carpeta assets](https://github.com/pollen-robotics/reachy_mini/tree/develop/src/reachy_mini/descriptions/reachy_mini/mjcf/assets) del repositorio.
* **Skins:** Sí, la comunidad ha creado montajes personalizados. Algunos archivos STEP de "skin" se han compartido en Discord, en el canal ["Pimp my Reachy Mini"](https://discord.com/channels/519098054377340948/1453340883775651861).
:::

### Mi cable plano del micrófono está roto

:::info Especificaciones
Las especificaciones del cable del micrófono son las siguientes:
* Cable flexible plano FFC/FPC
* 12 pines
* Espaciado de 0,5 mm
* Tipo A (conectores en el mismo lado)
* Longitud de 15 mm
:::

Aquí tienes algunas referencias si estás buscando un reemplazo para el cable de tu micrófono:
* [Amazon](https://www.amazon.fr/dp/B09TR4X1BP?ref=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&ref_=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&social_share=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z)
* [Farnell](https://fr.farnell.com/molex/15020-0127/cordon-ffc-12-cond-152mm-blanc/dp/3862090)

## 🐍 SDK, Apps y Programación

### ¿Cómo me conecto desde Python?

Usa la clase `ReachyMini`.

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
    print(mini.state)
```

### ¿Cómo creo una nueva App?

1.  Usa el generador: `reachy-mini-make-app my_app_name`.
2.  Edita `main.py` en la carpeta generada.
3.  Ejecútala: `python my_app_name/main.py`.

Consulta el [Tutorial de Hugging Face](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps) para más detalles.

### ¿Se admite la instalación de apps directamente desde el panel?

:::tip
¡Claro! Puedes instalar apps directamente desde tu Dashboard si son nativas, o añadirlas a tus favoritos si son basadas en la web.
:::

### ¡Todas las instalaciones de apps fallan en Windows!

:::warning
Puede estar relacionado con permisos insuficientes para crear symlinks en Windows. Puedes establecer la variable de entorno `HF_HUB_DISABLE_SYMLINKS_WARNING` a 1 para eliminar las advertencias que causan el fallo.

En una terminal, ejecuta:
```powershell
set HF_HUB_DISABLE_SYMLINKS_WARNING=1
```
:::

### La instalación de apps desde Hugging Face falla.

:::tip
Actualiza tu SDK. Las primeras versiones tenían un bug con la instalación de Spaces.

```bash
pip install -U reachy-mini
```
:::

### ¿Hay un modo de simulación?

:::info
Sí, mediante MuJoCo. Todavía está en desarrollo, pero puedes ejecutar código con la opción `--sim` o `ReachyMini(media_backend="no_media")` si solo estás probando lógica sin física.
:::

### ¿Cómo depuro una app en el Wireless?

:::info
Haz SSH al ordenador embebido, clona (o copia) tu app y ejecútala manualmente. Esto reproduce lo que hace el panel cuando lanza tu app.
:::

```bash
ssh pollen@reachy-mini.local
# password: root
cd your_app_name
python your_app_name/main.py
```

Tu GUI se abrirá en la dirección habitual (por ejemplo, `http://reachy-mini.local:8042`).

## 🕹️ Mover el robot

### ¿Cómo muevo la cabeza?

Usa `goto_target` con `create_head_pose`:

```python
from reachy_mini.utils import create_head_pose

# ... inside with ReachyMini() as mini:
mini.goto_target(head=create_head_pose(yaw=-10, pitch=20))
```

### ¿Cuál es la diferencia entre `goto_target` y `set_target`?

:::info
* **`goto_target`**: **Suave**. Interpola el movimiento a lo largo del tiempo (por defecto 0,5 s). Ideal para gestos.
* **`set_target`**: **Instantáneo**. Establece el objetivo inmediatamente. Ideal para control de alta frecuencia (teleoperación, trayectorias matemáticas).
:::

### ¿Cómo grabo y reproduzco movimientos?

:::tip Recording
Llama a `start_recording()` y `stop_recording()` alrededor de tu bucle de control.
:::

```python
mini.start_recording()
# ... move robot ...
move = mini.stop_recording()
```

:::tip Replaying
Usa la clase `RecordedMoves` para cargar movimientos desde la [biblioteca de Hugging Face](https://github.com/pollen-robotics/reachy_mini_dances_library).
:::

```python
mini.play_move(recorded_moves.get("dance_1"))
```

### Los movimientos de mi robot se ven temblorosos. ¿Está funcionando correctamente el bucle de control?

:::info
Puedes comprobar que el bucle de control del motor funciona correctamente verificando el estado del daemon:
:::

* a través del SDK
```python
mini = ReachyMini()
print(mini.client.get_status())
```
* a través del dashboard API en `http://localhost:8000/docs` en la versión lite y `http://reachy-mini.local:8000/docs` para la versión inalámbrica (busca el endpoint `/api/daemon/status`)

Deberías ver valores alrededor de 50 Hz (~20 ms de período):
```python
{
  ...
"motor_controller": "ControlLoopStats(period=~19.99ms, read_dt=~1.94 ms, write_dt=~0.19 ms)"
  ...
}
```

:::warning
Si el período es mucho mayor que 20 ms, significa que el bucle de control no se está ejecutando lo suficientemente rápido. Esto puede deberse a:
* Carga elevada de CPU en el ordenador (p. ej., otras aplicaciones usando demasiada CPU).
* (solo para lite) alta latencia USB (intenta configurar tu puerto serie).
:::

## 👁️ Visión y Audio

### El volumen es demasiado bajo (Linux)

1.  Ejecuta `alsamixer`.
2.  Ajusta **PCM1** al 100%.
3.  Usa **PCM,0** para ajustar el volumen global.

Para hacerlo permanente:
```bash
CARD=$(aplay -l | grep -i "reSpeaker" | head -n1 | sed -n 's/^card \([0-9]*\):.*/\1/p')
amixer -c "$CARD" set PCM,1 100%
sudo alsactl store "$CARD"
```

Este es un [problema conocido](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/02_setting_up_the_hardware.html#low-volume-of-playback-audio-on-linux-for-project-ua) de la tarjeta de sonido basada en XVF3800.

### ¿Cómo obtengo fotogramas de la cámara?

Usa el objeto `media`.

```python
with ReachyMini() as mini:
    frame = mini.media.get_frame()
    # Returns an OpenCV-compatible numpy array
```

### ¿Cómo uso el micrófono / altavoz?

```python
# Get audio
sample = mini.media.get_audio_sample()

# Play audio
mini.media.push_audio_sample(numpy_chunk)
```

### ¿Cómo hago que Reachy mire algo?

* **2D (Imagen):** `mini.look_at_image(x, y)` - (0,0 es la esquina superior izquierda).
* **3D (Mundo):** `mini.look_at_world(x, y, z)` - Coordenadas en el marco del robot.

### El seguimiento de caras se siente lento.

:::tip
El rendimiento depende en gran medida de las condiciones de iluminación. Asegúrate de que la cara esté bien iluminada. Usar el backend GStreamer también puede mejorar la latencia en comparación con el backend OpenCV por defecto.
:::

### ¿Cómo compruebo que el sistema de sonido funciona?

#### Versión Reachy Mini Lite

:::info
La forma más sencilla de probar la versión Lite es usar directamente el dispositivo *Pollen Robotics Reachy Mini Audio* desde tu ordenador para verificar su correcto funcionamiento.
:::

#### Versión Reachy Mini Wireless

:::info
Para la versión Wireless, puedes usar los siguientes comandos de GStreamer para probar la grabación y reproducción de audio:
:::

```bash
# record a sound
gst-launch-1.0 -e alsasrc device="reachymini_audio_src" ! audioconvert ! audioresample ! wavenc ! filesink location="test.wav"
# playback the recording
gst-launch-1.0 filesrc location=test.wav ! wavparse ! audioconvert ! alsasink device=reachymini_audio_sink
#playback a test sound (pink noise)
gst-launch-1.0 audiotestsrc wave="pink-noise" ! audioconvert ! audioresample ! alsasink device=reachymini_audio_sink
```

:::tip Advanced Testing
Puedes reproducir un sonido mientras grabas simultáneamente para probar el rendimiento de la cancelación de eco. Esto ayuda a verificar que la matriz de micrófonos está procesando correctamente el audio y cancelando el eco de los altavoces.

**Consejos de resolución de problemas:**
* Asegúrate de que el archivo `.asoundrc` exista en el directorio home
* Comprueba que el micrófono sea detectado: `arecord -l`
* Comprueba que el altavoz sea detectado: `aplay -l`
:::

## 🔧 Mensajes de error específicos y soluciones

### Errores de hardware del motor `'<name>'`: ['Input Voltage Error']

:::info
Estamos usando un voltaje más alto en Reachy Mini, es a propósito :)
:::

### Error: "OSError: PortAudio library not found"

:::warning
Te falta una dependencia del sistema. Ejecuta:

```bash
sudo apt-get install libportaudio2
```

Luego reinicia el daemon.
:::

### Advertencia: "Circular buffer overrun" (Simulation/Mujoco)

:::tip
Esto aparece si te conectas al robot pero no consumes los fotogramas de vídeo, lo que hace que el búfer se llene.

**Solución:** Si no necesitas vídeo, inicializa con `ReachyMini(media_backend="no_media")`.
:::

### Sin entrada de micrófono / Dirección de llegada (unidades Beta)

:::warning
* **Sin entrada:** Requiere firmware 2.1.3. Ejecuta el [script de actualización](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/firmware/update.sh).
* **Sin dirección:** Requiere firmware 2.1.0+.
* Comprueba que el cable plano flexible esté instalado en la orientación correcta (diapositivas 45-47 de la guía de montaje).
:::

## 📦 Envío y garantía

### Mi paquete está dañado o falta.

:::danger
Contacta inmediatamente con el equipo de **Pollen Robotics**. Puedes enviarnos un correo electrónico a sales@pollen-robotics.com con fotos del paquete, número de recibo o número de factura y tu nombre completo. Luego verificaremos con la empresa de transporte y te mantendremos informado.
:::

### Política de reembolso

:::info
* **Antes del envío:** Contacta con `sales@pollen-robotics.com` para un reembolso del 100%.
* **Después del envío:** Tienes 30 días para devolver tu paquete. Contacta con ventas (sales@pollen-robotics.com) con el comprobante de entrega y el número de factura o recibo. Si tienes comentarios / sugerencias, háznoslo saber; nuestro objetivo es construir un robot que la comunidad de código abierto disfrute construyendo.
:::

### Garantía

:::info
Si una pieza está rota o funciona mal, el equipo de posventa de Pollen determinará si se trata de un defecto de hardware cubierto por la garantía. Entonces, nuestro fabricante proporcionará piezas de reparación o reemplazo. Puedes enviarnos un correo electrónico a sales@pollen-robotics.com con fotos del problema, número de recibo o número de factura y tu nombre completo.
:::

## 💬 ¿Sigues atascado?

Si no pudiste encontrar la respuesta a tu problema en esta guía, ¡ponte en contacto con nosotros directamente!
El equipo de Pollen Robotics y la comunidad están activos en Discord para ayudarte a solucionar problemas específicos.

👉 **[Únete al Discord de Pollen Robotics](https://discord.gg/Y7FgMqHsub)**
