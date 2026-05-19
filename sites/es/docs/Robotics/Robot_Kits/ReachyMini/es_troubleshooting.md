---
description: Guía completa de resolución de problemas y Preguntas Frecuentes para Reachy Mini que cubre problemas frecuentes, montaje, conexión, hardware, SDK y mensajes de error.
title: Resolución de problemas y Preguntas Frecuentes
slug: /reachymini_troubleshooting
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
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/reachymini_troubleshooting/
---

# Resolución de problemas y Preguntas Frecuentes

Bienvenido a la página de soporte de Reachy Mini. Haz clic en las preguntas de abajo para mostrar las respuestas.

## 🛠️ Resolución de problemas - Problemas frecuentes

**Resolución de problemas esencial - Por favor, lee esto primero, ¡resuelve todos los problemas conocidos!**


<details>
<summary><strong>Antes de nada y para cualquier problema: actualiza y reinicia</strong></summary>

**Asegúrate de que estás usando software actualizado y de que has reiniciado tanto tu robot como tu ordenador.**
Para reiniciar tu robot, pulsa OFF, espera 5 segundos y luego pulsa ON. Este sencillo procedimiento soluciona varios problemas comunes y conocidos.

**Cómo actualizar el software:**

- **Si estás usando Reachy Mini Control**
  Desde la pestaña de ajustes "⚙️", "Check for updates". Si hay una actualización disponible, haz clic en "Update now".
- **Si estás usando un repositorio clonado**
  Asegúrate de que estás:
  - En la última versión etiquetada, o
  - Al día con la rama `main` (`git pull`).

**Reachy Mini inalámbrico**: ejecuta `reachyminios_check` para asegurarte de que todo está bien (consulta [Get Started](./platforms/reachy_mini/get_started.md))

</details>


<details>
<summary><strong>Fallo al hacer bootstrap o actualizar / Problemas con el entorno de Python (Lite y Simulación)</strong></summary>

Si Reachy Mini Control falla durante el bootstrap inicial, se queda bloqueado al crear el entorno virtual, o una actualización deja el entorno de Python en un estado roto, puedes restablecer los entornos virtuales directamente desde la aplicación de escritorio.

Hay dos opciones de restablecimiento disponibles:

- **Reset apps environment** — vuelve a crear solo el `apps_venv` (el entorno usado por las apps instaladas). Las apps instaladas tendrán que volver a instalarse. Usa esto primero si solo fallan al iniciarse o instalarse las apps.
- **Full Environment Reset** — borra todos los archivos de Python y vuelve a descargar todo (intérprete + ambos entornos virtuales). Usa esto si el propio bootstrap falla o si "Reset apps environment" no ayudó. Esto puede tardar unos minutos.

**Dónde encontrar estos botones:**

- **Antes de conectar** (pantalla Finding Robot): haz clic en el icono ⚙️ en la esquina superior derecha. Aparece un menú bajo "Local environment (USB & Sim)" con "Reset apps environment" y la opción de restablecimiento completo.
- **Una vez conectado** (modo USB / Simulación): abre la superposición de Settings y ve a la sección "Environment", que contiene los botones "Reset Apps Environment" y "Full Environment Reset".

Después de un restablecimiento completo, la aplicación de escritorio volverá a ejecutar el bootstrap en el siguiente inicio.

</details>


<details>
<summary><strong>Problemas relacionados con los motores</strong></summary>

Esto se refiere a problemas como:
- Motores parpadeando en rojo o que no responden/no se mueven.
- Motores que muestran errores como "Overload Error"
- Motores ausentes: "No motor found on port", "Missing motor", etc.

Si tienes alguno de los siguientes síntomas, consulta la [Guía de diagnóstico y resolución de problemas de motores](./troubleshooting/motors_diagnosis.md) para seguir pasos detallados para diagnosticar y solucionar problemas relacionados con los motores.

Usar la app Reachy Mini Testbench te ayudará a identificar y resolver estos problemas de forma eficaz.

</details>

<details>
<summary><strong>Error de descarga eléctrica</strong></summary>

Un error de descarga eléctrica en los motores Dynamixel significa que hay un problema con la fuente de alimentación o un cortocircuito en algún lugar.
Por favor, comprueba si algún cable está dañado, desde la PCB del pie hasta la cabeza. En especial los siguientes cables:
- Cable de alimentación (negro y rojo)
- Cables de 3 hilos para motores (300mm, 200mm, 100mm y 40mm)

También puede ser el mismo problema que "Motor blinking red or Overload Error" descrito arriba.

</details>

<details>
<summary><strong>El micrófono no funciona</strong></summary>

Si tienes uno de los siguientes síntomas:
- La grabación de audio no funciona / devuelve silencio
- La grabación de audio devuelve ceros

Puede que hayas conectado el cable del micrófono al revés.
- Si tu cable es blanco y azul, vuelve a comprobar las instrucciones de montaje para asegurarte de que el lado azul está hacia arriba.
- Si tu cable es negro, comprueba que el lado con la inscripción "Main Board" está hacia arriba (ver imagen abajo).
![mic_cable](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/black_fpc_cable.png)


Si tu cable está conectado correctamente y sigues teniendo problemas, es probable que el cable FPC del micrófono esté dañado. Consulta el tutorial [¿Cómo cambiar el cable FPC del micrófono de Reachy Mini?](./troubleshooting/change_mic_fpc_cable.md) para solucionar este problema.

</details>


<details>

<summary><strong>Volumen de audio bajo</strong></summary>

- Actualiza tu robot a la versión 1.2.3 o posterior

Para más detalles, consulta la documentación:
[Getting Started](./platforms/reachy_mini/get_started.md)

</details>

<details>
<summary><strong>Errores de permisos</strong></summary>

- Actualiza tu robot a la versión 1.2.3 o posterior
- Reinicia el robot

</details>

<details>
<summary><strong>Una antena aparece girada 90° o 180°</strong></summary>

Se trata de un problema de fabricación.

Es fácil de solucionar siguiendo esta guía:
[Guía de reposicionamiento de la antena](https://drive.google.com/file/d/1FsmNpwELuXUbdhGHDMjG_CNpYXOMtR7A/view?usp=drive_link)

</details>

<details>
<summary><strong>Un motor tiembla</strong></summary>

**Antenas que tiemblan**

Este es el caso más común. Las antenas (motores 17 y 18) tienden a temblar cuando se colocan en su posición vertical (0°). En este ángulo, el juego del engranaje coloca el motor en un equilibrio inestable, como un péndulo invertido. El motor intenta corregir constantemente su posición alrededor de un punto donde la fricción es muy baja, lo que provoca la oscilación.

La solución más sencilla es desviar las antenas unos pocos grados (normalmente 10° es suficiente). Esto permite que la gravedad aplique un pequeño sesgo que absorbe el juego mecánico en una dirección, eliminando el temblor.

Este es ahora el comportamiento predeterminado en Reachy Mini — consulta [PR #952](https://github.com/pollen-robotics/reachy_mini/pull/952) para más detalles.

**Ajuste de los valores PID**

Otra opción es [ajustar los valores de control PID](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/config/hardware_config.yaml#L66C1-L67C1). Los valores óptimos pueden variar entre unidades de robot, ya que pequeñas diferencias de fricción debidas a la fabricación son suficientes para cambiar el comportamiento.

Puedes probar primero a reducir P a 180 en los motores 10 (pie), 17 y 18 (antenas).
Si no ayuda, también puedes intentar aumentar D a 10 en los mismos motores.

</details>

<details>
<summary><strong>La cabeza hace ruidos de chirrido o fricción durante el movimiento</strong></summary>

Si oyes chirridos agudos o ruidos de fricción cuando se mueve la cabeza del robot, es probable que las rótulas esféricas (ball joints) de las varillas de la plataforma Stewart necesiten mantenimiento. También puedes notar polvo oscuro o residuos alrededor de las bielas.

Esto es un desgaste normal con el tiempo. Sigue la [Guía de mantenimiento de rótulas esféricas](./troubleshooting/spherical_joints_maintenance.md) para limpiar y volver a engrasar las rótulas.

</details>

<details>
<summary><strong>La imagen es oscura en la versión Lite</strong></summary>

**➡️ Solución rápida: Ajustar el tiempo de exposición en la configuración de la cámara**

Para corregir una imagen oscura, activa la autoexposición o aumenta manualmente el tiempo de exposición usando una aplicación de control de cámara. Estas aplicaciones proporcionan una interfaz intuitiva para ajustar la exposición y otros parámetros de la cámara.

**Aplicaciones recomendadas:**

- **macOS:** [CameraController](https://github.com/itaybre/CameraController) - Aplicación GUI de código abierto para control de cámaras USB
- **Linux:** qv4l2 - Aplicación GUI basada en Qt para control de cámaras V4L2
  - Instalación: `sudo apt install qv4l2`
- **Windows:** [Webcam Settings](https://www.softpedia.com/get/Internet/WebCam/Webcam-Settings-Tool.shtml) o [ManyCam](https://manycam.com/) para control avanzado de la cámara

Estas aplicaciones te permiten ajustar el tiempo de exposición, el brillo y otros parámetros de la cámara mediante una interfaz gráfica intuitiva.

---

**➡️ Avanzado: Uso de libuvc para un control exhaustivo de la cámara**

Para usuarios avanzados que quieran un control preciso sobre los parámetros de la cámara, puedes usar utilidades de línea de comandos basadas en libuvc. Estas herramientas proporcionan acceso de bajo nivel a todos los controles de cámaras UVC.

Para solucionar específicamente el problema de oscuridad, establece `auto-exposure-priority=1` usando estas herramientas de línea de comandos.

**Herramientas de línea de comandos por plataforma:**

- **macOS:** [uvc-util](https://github.com/jtfrey/uvc-util)

- **Linux:** [v4l2-ctl](https://manpages.debian.org/testing/v4l-utils/v4l2-ctl.1.en.html)
  - Instalación: `sudo apt install v4l-utils`

- **Windows:** Windows no tiene un equivalente directo.

**Nota:** Estas herramientas de línea de comandos requieren conocimientos técnicos y el acceso a los parámetros de la cámara puede variar según la herramienta seleccionada. Usa `--help` y lista los controles disponibles antes de hacer cualquier cambio.

</details>

<details>
<summary><strong>Falta una pieza en mi paquete</strong></summary>

Asegúrate primero de desempaquetar todo. Algunas piezas vienen premontadas (por ejemplo, la parte inferior de la cabeza ya está colocada en la parte trasera de la cabeza).

![head_parts](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/head_parts.jpg)

Luego, revisa la lista de piezas de la guía de montaje para ver si realmente te falta alguna pieza:
Si estás 100% seguro de que te falta una pieza, ponte en contacto con sales@pollen-robotics.com con una foto de todas las piezas que tienes y el número de pedido o número de factura.
También puedes encontrar [archivos stl](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/descriptions/reachy_mini/mjcf/assets) para imprimirla tú mismo mientras tanto.
</details>


<details>
<summary><strong>No puedo conectar con mi Reachy Mini inalámbrico usando un cable USB-C</strong></summary>

Las unidades inalámbricas no exponen el robot por USB de la misma forma que la versión Lite, así que conectar un cable USB-C a tu portátil no te dará una conexión funcional.
En su lugar:

- Conecta el robot a tu red Wi-Fi y usa el cliente del SDK en tu portátil para controlarlo de forma remota.
- Si quieres ejecutar código directamente en la Raspberry Pi integrada, entra por SSH y ejecuta tus scripts allí (esto es lo que hace Reachy Mini Control después de que publiques/instales una app).
- Para una conexión por cable, utiliza un adaptador USB-C-a-Ethernet más un cable Ethernet; esto simplemente reemplaza el Wi‑Fi por Ethernet por cable.

</details>

<details>
<summary><strong>El punto de acceso inalámbrico no aparece - La RPI no arranca</strong></summary>
Hay un interruptor en la placa de la cabeza que debe estar en una posición determinada. Y si no lo está, el AP no aparece. Es posible que este interruptor se haya movido durante el montaje o incluso que sea un error de fábrica.
Comprueba que el interruptor está en la posición "debug" y no en "download". Mira la imagen de abajo:

![switch_position](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/wireless_switch.png)

Si este interruptor está en la posición correcta y aún no puedes ver el AP, puede que necesites volver a grabar la iso de la Raspberry Pi, siguiendo el [tutorial para volver a grabar la Iso de la RPI](/es/reachymini_platforms_reachy_mini_reflash_the_rpi_iso).

</details>

## 🚀 Primeros pasos y montaje

<details>
<summary><strong>¿Cuánto tiempo suele llevar el montaje?</strong></summary>

La mayoría de los probadores indican entre **1,5 y 2 horas**. Puede llevar hasta 4 horas dependiendo de tu nivel de experiencia.

</details>

<details>
<summary><strong>¿Hay pasos difíciles durante el montaje?</strong></summary>

Realmente no, los probadores lo describen como **divertido, sencillo y satisfactorio**. Herramientas básicas y paciencia son suficientes. El **enrutamiento de cables** y **apretar las piezas con el par correcto** son los elementos más delicados. Cuando compras un Reachy Mini Lite o Wireless, viene con una guía de usuario impresa, y también tienes acceso a un vídeo y a la guía digital.
Vídeo para Reachy Mini [BETA](https://www.youtube.com/watch?v=_r0cHySFbeY), LITE, WIRELESS

Guía de montaje digital para Reachy Mini [BETA](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide), LITE, WIRELESS

</details>

<details>
<summary><strong>Me sobran 2 cables y algunos tornillos después de terminar el montaje. ¿Es normal?</strong></summary>

Sí, esto es completamente normal.
Incluimos intencionadamente cables y tornillos de repuesto en el kit por si algunas piezas se dañan o se pierden durante el montaje.

No necesitas instalarlos.

</details>

<details>
<summary><strong>Mi Reachy Mini no se mueve en el primer arranque. ¿Qué debo comprobar?</strong></summary>

* **Fuente de alimentación:** Asegúrate de que la fuente de alimentación de 7V-5A está conectada. La conexión USB no es suficiente para alimentar los motores.
* **Cables:** Comprueba que todos los cables estén completamente insertados. Los cables de alimentación sueltos son una causa común de errores de "motor no responde".
* **Sección de resolución de problemas:** Consulta la sección de resolución de problemas esencial al principio de esta página.

</details>

<details>
<summary><strong>¿Necesito iniciar el daemon manualmente?</strong></summary>

**NO**

- Con Reachy Mini (Wireless), el daemon ya se está ejecutando en la Raspberry Pi integrada.
- Con Reachy Mini Lite, puedes usar [la aplicación de escritorio](./platforms/reachy_mini_lite/get_started.md).
- Si la aplicación de escritorio no funciona en tu sistema (por ejemplo, ARM64, distribuciones poco habituales), puedes [instalar y usar directamente el SDK de Python](./SDK/installation.md); ¡es una alternativa totalmente compatible!

</details>



## 🔌 Conexión y control de Reachy Mini

<details>
<summary><strong>¿Cómo conecto el robot al Wi‑Fi?</strong></summary>

Consulta la [guía de Reachy Mini Wireless](./platforms/reachy_mini/get_started.md) para obtener instrucciones detalladas sobre cómo conectarse al Wi‑Fi.

</details>

<details>
<summary><strong>¿Cómo restablezco el punto de acceso Wi‑Fi?</strong></summary>

Si necesitas restablecer el punto de acceso Wi‑Fi del robot (por ejemplo, si no puedes conectarte o quieres cambiar de red), sigue las instrucciones de la [Guía de restablecimiento de Wi‑Fi](./platforms/reachy_mini/reset.md).

</details>

<details>
<summary><strong>¿El robot tiene una Web API?</strong></summary>

Sí. El daemon proporciona una REST API (FastAPI) y compatibilidad con WebSocket.
* **Docs:** `http://localhost:8000/docs` (disponible cuando el daemon se está ejecutando).
* **Funciones:** Obtener estado, mover articulaciones, controlar el daemon.

Puedes usar la API para controlar el robot y obtener su estado e incluso controlar el propio daemon. La API está implementada usando modelos de [FastAPI](https://fastapi.tiangolo.com/) y [pydantic](https://docs.pydantic.dev/latest/).

Debería proporcionarte todos los endpoints necesarios para interactuar con el robot, incluyendo:

- Obtener el estado del robot (posiciones de las articulaciones, estado de los motores, etc.)
- Mover las articulaciones del robot o establecer poses específicas

La API está documentada usando OpenAPI, y puedes acceder a todas las rutas disponibles y probarlas en http://localhost:8000/docs cuando el daemon se está ejecutando. También puedes acceder al esquema OpenAPI en bruto en http://localhost:8000/openapi.json.

Esto puede ser útil si quieres generar código cliente para tu lenguaje de programación o framework preferido, conectarlo a tu aplicación de IA o incluso crear tu propio servidor MCP.

**Compatibilidad con WebSocket**

La API también admite conexiones WebSocket para actualizaciones en tiempo real. Por ejemplo, puedes suscribirte a las actualizaciones del estado de las articulaciones:

```
let ws = new WebSocket(`ws://127.0.0.1:8000/api/state/ws/full`);

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
};
```

</details>

<details>
<summary><strong>¿Por qué necesito un entorno virtual (.venv)?</strong></summary>

Ayuda a evitar conflictos de paquetes durante la instalación del SDK.

</details>

<details>
<summary><strong>reachy-mini.local no se resuelve</strong></summary>

Una unidad inalámbrica se anuncia como `reachy-mini.local` mediante mDNS. Esto funciona en la mayoría de redes domésticas y de oficina, pero puede fallar en algunas redes de empresa, conferencias u hoteles.

Si `reachy-mini.local` no se resuelve:
- Comprueba en la lista de clientes DHCP de tu router la dirección IP del robot.
- Usa la app Reachy Mini Control: puede descubrir el robot en la red local.
- Como último recurso, escanea la subred:
```bash
for i in $(seq 1 254); do
  curl -sf --connect-timeout 0.3 "http://192.168.1.${i}:8000/api/daemon/status" > /dev/null 2>&1 && echo "Found: 192.168.1.${i}"
done
```
Ajusta el prefijo `192.168.1.` para que coincida con tu red.

</details>

<details>
<summary><strong>El robot y el ordenador no pueden comunicarse en el Wi‑Fi de una conferencia/hotel</strong></summary>

Muchas redes Wi‑Fi de conferencias y hoteles activan el **aislamiento de clientes**, lo que impide que los dispositivos de la misma red se comuniquen entre sí. Síntomas: ambos dispositivos están conectados al Wi‑Fi, ambos tienen direcciones IP en la misma subred, pero no pueden alcanzar los endpoints HTTP del otro.

**Solución alternativa:** Usa un hotspot de teléfono móvil. Conecta tanto el robot como tu ordenador al hotspot. Esto proporciona una red sencilla donde los dispositivos pueden verse entre sí.

Como alternativa, utiliza un adaptador USB-C-a-Ethernet y un cable Ethernet para conectarte directamente al robot (versión Wireless).

</details>

<details>
<summary><strong>¿Cómo acceder a los servicios de HuggingFace desde China?</strong></summary>

Puedes usar este mirror: https://hf-mirror.com/

Necesitarás establecer la siguiente variable de entorno:
```bash
export HF_ENDPOINT=https://hf-mirror.com/
```

Ten en cuenta que también puede que necesites usar mirrors para acceder a servicios como PyPI y GitHub.

</details>

<details>
<summary><strong>¿Cómo hacer que la aplicación de conversación funcione en China?</strong></summary>

La aplicación de conversación de Reachy Mini se basa en la API gpt-realtime de OpenAI, que podría ser inaccesible desde China.

La mejor solución alternativa por el momento es configurar una VPN en tu máquina (versión Lite), en el robot (versión Wireless) o directamente en tu router.

Al configurar las reglas de enrutamiento de la VPN:

1) Redirige el tráfico a través de la VPN excepto el tráfico de la red local, para que el dispositivo siga siendo accesible desde tu red local.

Debes incluir en la lista blanca:
- Tu rango de IP de LAN local (por ejemplo 192.168.0.0/16, 192.168.1.0/24, etc., dependiendo de la configuración de tu red).
- Los siguientes puertos:
  - 22 (SSH)
  - 8000 (daemon de Reachy Mini)
  - 5353 TCP/UDP (mDNS / descubrimiento local)

Esto garantiza que el robot siga siendo accesible y detectable localmente, y mDNS (`reachy-mini.local`) debería seguir funcionando en la red.

2) Si tu VPN admite enrutamiento selectivo, un mejor enfoque es enrutar solo los servicios externos necesarios a través de la VPN, en lugar de tunelizar todo el tráfico HTTPS.

Si es posible, configura la VPN para que se use solo para `huggingface.co` y `api.openai.com`.

Esto minimiza los efectos secundarios en la red y mantiene los servicios locales funcionando con normalidad.

Para la versión Wireless, una vez que la VPN esté configurada en el robot, reinicia el daemon para que los cambios surtan efecto:
```
sudo systemctl restart reachy-mini-daemon
```
Para verificar que el robot es accesible desde un dispositivo en la misma red, puedes ejecutar:
```
ping reachy-mini.local
```

_Se están desarrollando enfoques basados en modelos de pesos abiertos, ¡permanece atento!_

</details>


## 🤖 Hardware, motores y límites

<details>
<summary><strong>¿Dónde puedo encontrar más información sobre el hardware?</strong></summary>

Consulta la [página de hardware de Reachy Mini](./platforms/reachy_mini/hardware.md) para obtener información detallada sobre los componentes de hardware del robot.

</details>

<details>
<summary><strong>¿Cuáles son los límites de seguridad (cabeza y cuerpo)?</strong></summary>

Si ordenas una pose fuera de estos límites, el robot se limitará automáticamente a la pose segura más cercana.

* **Giro del cuerpo (Body Yaw):** [-180°, 180°].
* **Inclinación/rotación de la cabeza (Head Pitch/Roll):** [-40°, 40°].
* **Giro de la cabeza (Head Yaw):** [-180°, 180°].
* **Límite combinado:** La diferencia entre `body_yaw` y `head_yaw` debe estar dentro de **[-65°, 65°]**.

</details>

<details>
<summary><strong>¿Por qué los motores están "flojos" o "rígidos"? (Compliancy)</strong></summary>

* **`enable_motors()`**: Motores **ON** (rígidos). El robot mantiene la posición.
* **`disable_motors()`**: Motores **OFF** (flojos). Puedes moverlo a mano.
* **`make_motors_compliant()`**: Motores **ON pero suaves**. Útil para enseñanza por demostración.

</details>

<details>
<summary><strong>¿Cómo accedo a los parámetros de los motores?</strong></summary>

1. Puedes consultar el escaneo de los motores usando el [script scan_motors.py](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/tools/scan_motors.py).

- Si tu robot es Lite, puedes ejecutar el script directamente en tu computadora:
```bash
python -m reachy_mini.tools.scan_motors
```
- Si tu robot es Wireless, haz ssh en el robot:
```bash
ssh pollen@reachy-mini.local
```
- Activa el venv:
```bash
source /venvs/mini_daemon/bin/activate
```
- Y ejecuta el script (¡los motores deben estar encendidos para esto!):
```bash
python -m reachy_mini.tools.scan_motors --wireless
```
- Debería imprimir la lista de motores detectados. Deberías tener todos los motores con baudrate 1000000, con los siguientes IDs: 10,11, 12, 13, 14, 15,17, 18. Si falta alguno, revisa los cables de nuevo. Si hay un motor con un ID o baudrate diferente, ponte en contacto con el soporte.

Ejemplo de la salida correcta:
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
2. Lite: También puedes usar el Dynamixel Wizard para leer los parámetros de los motores. Sigue la guía [aquí](./platforms/reachy_mini_lite/wizard.md).

</details>

<details>
<summary><strong>Los motores dejan de responder después de un tiempo.</strong></summary>

* Comprueba la conexión de la fuente de alimentación.
* Es posible que los motores hayan entrado en modo de protección térmica (sobrecalentamiento). Apágalos y enciéndelos de nuevo.
* Actualizar el SDK (`pip install -U reachy-mini`) ha resuelto esto para algunos usuarios.
* Si el led del motor parpadea en rojo, consulta la sección "Motor blinking red or Overload Error" en la parte de Solución de problemas esencial de arriba.

</details>

<details>
<summary><strong>¿La batería tiene funciones de seguridad?</strong></summary>
Wireless incluye un cargador de batería adecuado.
La batería integra también un BMS con un sensor de temperatura.

</details>

<details>
<summary><strong>¿Cómo veo la batería restante?</strong></summary>
No tenemos la posibilidad de comprobar el estado de la batería, es una limitación conocida del diseño.

Solo tenemos la indicación por led de "batería baja" cuando es hora de cargarla. (verde -> naranja -> rojo)

</details>

<details>
<summary><strong>Cómo retirar la batería</strong></summary>

- Primero comprueba que el led verde no esté encendido.
- Retira los 3 tornillos de la parte inferior y saca un poco el pie.
![remove_foot](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/remove_foot.png)
- Desconecta el conector indicado (flecha roja) para poder retirar la batería. Debería haber algo de cinta de doble cara que mantiene la batería en su sitio, por lo que puede ser un poco difícil de quitar.
![battery_location](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/battery_connector.png)
- Cuando la vuelvas a montar, realiza estos pasos de nuevo en orden inverso. Solo ten cuidado de no pellizcar ningún cable.

</details>

<details>
<summary><strong>La cabeza puede tocar el cuerpo durante algunos movimientos oficiales</strong></summary>

Este comportamiento es esperado y no es un error de hardware ni de software.
Sin embargo, como puede resultar confuso, actualizaremos esos movimientos para evitar este contacto.

</details>

<details>
<summary><strong>¿Puedo modificar la apariencia (Skins/CAD)?</strong></summary>

* **CAD:** Los archivos STEP completos aún no se han publicado, pero planeamos publicarlos en el futuro. Mientras tanto, puedes encontrar algunos archivos STL en la [carpeta assets](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/descriptions/reachy_mini/mjcf/assets) del repositorio.
* **Skins:** Sí, la comunidad ha creado montajes personalizados. Algunos archivos STEP de "skin" se han compartido en Discord, en el canal ["Pimp my Reachy Mini"](https://discord.com/channels/519098054377340948/1453340883775651861).

</details>

<details>
<summary><strong>Mi cable plano del micrófono está roto</strong></summary>

Las especificaciones del cable del micrófono son las siguientes:
- Cable flexible plano FFC/FPC
- 12 pines
- Espaciado de 0,5 mm
- Tipo A (conectores en el mismo lado)
- Longitud de 15 mm

Aquí tienes algunas referencias si estás buscando un reemplazo para el cable de tu micrófono:
- [Amazon](https://www.amazon.fr/dp/B09TR4X1BP?ref=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&ref_=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&social_share=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z)
- [Farnell](https://fr.farnell.com/molex/15020-0127/cordon-ffc-12-cond-152mm-blanc/dp/3862090)

</details>


## 🐍 SDK, Apps y Programación

<details>
<summary><strong>¿Cómo me conecto desde Python?</strong></summary>

Usa la clase `ReachyMini`.

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
    print(mini.state)
```

</details>

<details>
<summary><strong>¿Cómo creo una nueva App?</strong></summary>

Usa el asistente de apps por CLI:

```bash
reachy-mini-app-assistant create my_app_name /path/to/destination --publish
```

Consulta la guía completa: [Building & Publishing Apps](./SDK/apps.md) — cubre la estructura de la app, pruebas, publicación, depuración y despliegue.

</details>

<details>
<summary><strong>Mi app se cierra sin avisar o no se inicia</strong></summary>

Si tu app depende de un paquete que no está instalado en el entorno, fallará al importar sin mostrar ningún error visible. Prueba las importaciones manualmente:

```bash
# On Wireless
ssh pollen@reachy-mini.local "/venvs/apps_venv/bin/python3 -c 'from my_app.main import MyApp'"

# On Lite / local
python -c "from my_app.main import MyApp"
```

Para más consejos de depuración (ver logs, errores comunes), consulta [Debugging Apps](./SDK/apps.md#debugging-apps).

</details>

<details>
<summary><strong>¿Se admite instalar apps directamente desde Reachy Mini Control?</strong></summary>

¡Claro! Puedes instalar apps directamente desde Reachy Mini Control si son nativas, o añadirlas a tus favoritas si son basadas en web.

</details>

<details>
<summary><strong>¡Todas las instalaciones de apps fallan en Windows!</strong></summary>

Puede estar relacionado con permisos insuficientes para crear symlinks en Windows. Puedes establecer la variable de entorno `HF_HUB_DISABLE_SYMLINKS_WARNING` a 1 para eliminar las advertencias que causan el fallo.

En una terminal, ejecuta:
```powershell
set HF_HUB_DISABLE_SYMLINKS_WARNING=1
```

</details>

<details>
<summary><strong>La instalación de apps desde Hugging Face falla.</strong></summary>

Actualiza tu SDK. Las primeras versiones tenían un error con la instalación de Spaces.

```bash
pip install -U reachy-mini
```

</details>

<details>
<summary><strong>¿Hay un modo de Simulación?</strong></summary>

Sí, vía MuJoCo. Todavía está en desarrollo, pero puedes ejecutar código con la opción `--sim` o `ReachyMini(media_backend="no_media")` si solo estás probando lógica sin física.

</details>

<details>
<summary><strong>¿Cómo depuro una app en el Wireless?</strong></summary>

Haz SSH en el ordenador embebido, clona (o copia) tu app y ejecútala manualmente. Esto reproduce lo que hace Reachy Mini Control al lanzar tu app.

```bash
ssh pollen@reachy-mini.local
# password: root
cd your_app_name
python your_app_name/main.py
```

Tu GUI se abrirá en la dirección habitual (por ejemplo, `http://reachy-mini.local:8042`).

</details>



## 🕹️ Mover el Robot

<details>
<summary><strong>¿Cómo muevo la cabeza?</strong></summary>

Usa `goto_target` con `create_head_pose`:

```python
from reachy_mini.utils import create_head_pose

# ... inside with ReachyMini() as mini:
mini.goto_target(head=create_head_pose(yaw=-10, pitch=20))
```

</details>

<details>
<summary><strong>¿Cuál es la diferencia entre `goto_target` y `set_target`?</strong></summary>

* **`goto_target`**: **Suave**. Interpola el movimiento en el tiempo (por defecto 0,5 s). Mejor para gestos.
* **`set_target`**: **Instantáneo**. Establece el objetivo inmediatamente. Mejor para control de alta frecuencia (teleoperación, trayectorias matemáticas).

</details>

<details>
<summary><strong>¿Cómo grabo y reproduzco movimientos?</strong></summary>

**Grabación:**
Llama a `start_recording()` y `stop_recording()` alrededor de tu bucle de control.

```python
mini.start_recording()
# ... move robot ...
move = mini.stop_recording()
```

**Reproducción:**
Usa la clase `RecordedMoves` para cargar movimientos desde la [biblioteca de Hugging Face](https://github.com/pollen-robotics/reachy_mini_dances_library).

```python
mini.play_move(recorded_moves.get("dance_1"))
```

</details>

<details>
<summary><strong>Los movimientos de mi robot se ven temblorosos. ¿Se está ejecutando correctamente el bucle de control?</strong></summary>

Puedes comprobar que el bucle de control de los motores se ejecuta correctamente verificando el estado del daemon:
- vía el SDK
```python
mini = ReachyMini()
print(mini.client.get_status())
```
- vía la REST API en `http://localhost:8000/docs` en un Lite y `http://reachy-mini.local:8000/docs` para el Wireless (busca el endpoint `/api/daemon/status`)

Deberías ver valores alrededor de 50 Hz (~20 ms de periodo):
```python
{
  ...
"motor_controller": "ControlLoopStats(period=~19.99ms, read_dt=~1.94 ms, write_dt=~0.19 ms)"
  ...
}
```

Si el periodo es mucho mayor que 20 ms, significa que el bucle de control no se está ejecutando lo suficientemente rápido. Esto puede deberse a:
- Carga elevada de CPU en el ordenador (por ejemplo, otras apps usando demasiada CPU).
- (solo para Lite) alta latencia USB (intenta configurar tu puerto serie).

</details>



## 👁️ Visión y Audio

<details>
<summary><strong>El volumen es demasiado bajo (Linux)</strong></summary>

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

</details>

<details>
<summary><strong>¿Cómo obtengo frames de la cámara?</strong></summary>

Usa el objeto `media`.

```python
with ReachyMini() as mini:
    frame = mini.media.get_frame()
    # Returns a numpy array (BGR format, compatible with OpenCV)
```

</details>

<details>
<summary><strong>¿Cómo uso el micrófono / altavoz?</strong></summary>

```python
# Get audio
sample = mini.media.get_audio_sample()

# Play audio
mini.media.push_audio_sample(numpy_chunk)
```

</details>

<details>
<summary><strong>¿Cómo hago que Reachy mire algo?</strong></summary>

* **2D (Imagen):** `mini.look_at_image(x, y)` - (0,0 es la esquina superior izquierda).
* **3D (Mundo):** `mini.look_at_world(x, y, z)` - Coordenadas en el marco del robot.

</details>

<details>
<summary><strong>El seguimiento de rostro se siente lento.</strong></summary>

[LINE_23>El rendimiento depende en gran medida de las condiciones de iluminación. Asegúrate de que el rostro esté bien iluminado. El backend LOCAL (GStreamer IPC) proporciona la latencia más baja para aplicaciones en el dispositivo.

</details>

<details>
<summary><strong>¿Cómo compruebo que el sistema de sonido funciona?</strong></summary>

### Versión Reachy Mini Lite

La forma más sencilla de probar la versión Lite es usar directamente el dispositivo *Pollen Robotics Reachy Mini Audio* desde tu ordenador para verificar que funciona correctamente.

### Versión Reachy Mini Wireless

Para la versión Wireless, puedes usar los siguientes comandos de GStreamer para probar la grabación y reproducción de audio:

En el caso de la versión Wireless, puedes usar los siguientes comandos:
```bash
# record a sound
gst-launch-1.0 -e alsasrc device="reachymini_audio_src" ! audioconvert ! audioresample ! wavenc ! filesink location="test.wav"
# playback the recording
gst-launch-1.0 filesrc location=test.wav ! wavparse ! audioconvert ! alsasink device=reachymini_audio_sink
#playback a test sound (pink noise)
gst-launch-1.0 audiotestsrc wave="pink-noise" ! audioconvert ! audioresample ! alsasink device="reachymini_audio_sink"
```

**Pruebas avanzadas:**
Puedes reproducir un sonido mientras grabas simultáneamente para probar el rendimiento de la cancelación de eco. Esto ayuda a verificar que la matriz de micrófonos está procesando correctamente el audio y cancelando el eco de los altavoces.

**Consejos de resolución de problemas:**
- Asegúrate de que el archivo `.asoundrc` exista en el directorio home
- Comprueba que el micrófono sea detectado: `arecord -l`
- Comprueba que el altavoz sea detectado: `aplay -l`
- Si la configuración de la placa de audio falla con `No Reachy Mini Audio USB device found!`,
  ejecuta el código del SDK en la máquina que tiene conectada la placa de audio ReSpeaker.
  Para Lite esta es tu computadora; para Wireless este es el propio robot.

</details>



## 🔧 Mensajes de error específicos y soluciones

<details>
<summary><strong>Errores de hardware del motor &#39;&lt;name&gt;&#39;: [&#39;Input Voltage Error&#39;]</strong></summary>
Estamos usando un voltaje más alto en Reachy Mini, es a propósito :)

</details>



<details>
<summary><strong>Error: "OSError: PortAudio library not found"</strong></summary>

Este error ocurre al usar `sounddevice` directamente (por ejemplo, después de llamar a `release_media()`). Instala la dependencia del sistema:

```bash
sudo apt-get install libportaudio2
```

</details>

<details>
<summary><strong>Advertencia: "Circular buffer overrun" (Simulación/Mujoco)</strong></summary>

Esto aparece si te conectas al robot pero no consumes los fotogramas de vídeo, lo que hace que el búfer se llene.
* **Solución:** Si no necesitas vídeo, inicializa con `ReachyMini(media_backend="no_media")`.

</details>

<details>
<summary><strong>La app de conversación se bloquea al iniciar después de una actualización (perfil personalizado)</strong></summary>

Si creaste un perfil personalizado para la app Conversation en una versión anterior y ahora la app se cierra inmediatamente después de actualizar, la app está buscando el perfil en una ruta que ya no existe: la ubicación predeterminada del perfil cambió en una versión reciente.

**Síntomas**: los registros terminan con un `SystemExit: 1` lanzado desde `prompts.py`, por ejemplo:
```
File ".../reachy_mini_conversation_app/prompts.py", line 88, in get_session_instructions
    sys.exit(1)
SystemExit: 1
```

**Solución (recomendada):** Desde la app de escritorio Reachy Mini Control, haz clic en **Reset apps environment** (consulta "Bootstrap or update fails / Python environment issues" arriba). Después será necesario reinstalar las apps.

**Alternativa (avanzada):** Haz SSH al robot (Wireless: `ssh pollen@reachy-mini.local`) y elimina directamente el venv de las apps, luego reinstala la app Conversation:
```bash
rm -rf /venvs/apps_venv
```

</details>


<details>
<summary><strong>Sin entrada de micrófono / Dirección de llegada (unidades Beta)</strong></summary>

* **Sin entrada:** Requiere firmware 2.1.3. Ejecuta el [script de actualización](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/firmware/update.sh).
* **Sin dirección:** Requiere firmware 2.1.0+.
* Comprueba que el cable plano flexible esté instalado en la orientación correcta (diapositivas 45-47 de la guía de montaje).

</details>



## 📦 Envío y garantía

<details>
<summary><strong>Mi paquete está dañado o falta.</strong></summary>

Contacta inmediatamente con el equipo de **Pollen Robotics**. Puedes enviarnos un correo electrónico a sales@pollen-robotics.com con fotos del paquete, número de recibo o número de factura y tu nombre completo. Luego verificaremos con la empresa de transporte y te mantendremos informado.

</details>

<details>
<summary><strong>Política de reembolso</strong></summary>

* **Antes del envío:** Contacta con `sales@pollen-robotics.com` para un reembolso del 100%.
* **Después del envío:** Tienes 30 días para devolver tu paquete. Contacta con ventas (sales@pollen-robotics.com) con el comprobante de entrega y el número de factura o recibo. Si tienes comentarios / sugerencias, háznoslo saber; nuestro objetivo es construir un robot que la comunidad de código abierto disfrute construyendo.

</details>

<details>
<summary><strong>Garantía</strong></summary>

Si una pieza está rota o funciona mal, el equipo de posventa de Pollen determinará si se trata de un defecto de hardware cubierto por la garantía. Entonces, nuestro fabricante proporcionará piezas de reparación o reemplazo. Puedes enviarnos un correo electrónico a sales@pollen-robotics.com con fotos del problema, número de recibo o número de factura y tu nombre completo.

</details>


## 💬 ¿Sigues atascado?

Si no pudiste encontrar la respuesta a tu problema en esta guía, ¡ponte en contacto con nosotros directamente!
El equipo de Pollen Robotics y la comunidad están activos en Discord para ayudarte a solucionar problemas específicos.

👉 **[Únete al Discord de Pollen Robotics](https://discord.gg/Y7FgMqHsub)**