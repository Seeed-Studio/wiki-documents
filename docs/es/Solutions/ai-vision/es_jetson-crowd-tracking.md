---
description: Presenta una demostración de IA de seguimiento de multitudes con Jetson
title: Seguimiento y Conteo de Multitudes
image: https://files.seeedstudio.com/wiki/solution/crowd_tracking/crowd%20tracking.webp
slug: /es/solutions/jetson-crowd-tracking
last_update:
  date: 08/15/2025
  author: lian
---

Esta guía es para entornos **NVIDIA Jetson Ubuntu 22 + JetPack 6.x**, ayudándote a completar rápidamente el despliegue.

## 📋 Requisitos del Entorno

- **Dispositivo**: Serie NVIDIA Jetson (Nano, Xavier, Orin, etc.)
- **Sistema**: Ubuntu 22.x + JetPack 6.x
- **Red**: Capaz de acceder a GitHub y Docker Hub
- **Permisos**: Privilegios `sudo`

> Si tu dispositivo aún no tiene instalado el entorno del sistema adecuado, consulta la guía oficial de flasheo para la instalación del sistema y preparación del entorno:  
> [Tutorial de Flasheo JetPack (Seeed Studio)](/es/flash/jetpack_to_selected_product/)

## ⚡ Despliegue con Un Solo Clic

Ejecuta el siguiente comando en la terminal de tu dispositivo Jetson:

```bash
curl -fsSL https://raw.githubusercontent.com/Seeed-Studio/SenseCraft-AI_Server/refs/heads/jetson/scripts/install.sh | bash
```

> 💡 El script soporta **ejecución idempotente**, lo que significa que es seguro ejecutarlo múltiples veces.

## 🔍 Proceso de Despliegue

El script realiza automáticamente los siguientes pasos:

1. **Instalar Docker (27.x)**  
   - Verificar si Docker está instalado  
   - Si está instalado pero no es la versión 27.x → desinstalar y reinstalar automáticamente  
   - Configurar NVIDIA Container Toolkit  
   - Establecer el runtime predeterminado de Docker como `nvidia`

2. **Instalar MQTT Broker**  
   - Instalar `mosquitto` y `mosquitto-clients`  
   - Configurar para permitir acceso externo:  

     ```shell
     listener 1883 0.0.0.0
     allow_anonymous true
     ```

3. **Desplegar SenseCraft AI Server**  
   - Clonar la rama especificada a `~/sensecraft-ai_server`  
   - Ejecutar `scripts/run.sh` para iniciar el servicio  
   - Descargar el modelo YOLOv11 a `~/sensecraft-ai_server/models/yolo11n.pt`

---

## 🛡 Manejo de Excepciones

- **Ejecución idempotente**:  
  - **La mayoría de problemas** (ej., interrupciones de red, fallos de instalación parcial) pueden solucionarse **simplemente volviendo a ejecutar el script**  
  - El script verifica las versiones de software y configuraciones, instalando solo las partes faltantes o incorrectas  
- **Problemas raros** (ej., fallo permanente de fuente apt, repositorio externo inaccesible) requieren intervención manual

---

## 🖥 Iniciar y Acceder al Servicio

1. **Iniciar el servicio**  

   ```bash
   cd ~/sensecraft-ai_server
   sudo bash scripts/run.sh
   ```

### 📷 Salida de Línea de Comandos (Ejemplo)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Command%20Line%20Output%20%28Example%29.png" alt="Command"/></div>

2. **Acceder a la página principal**  
   - En tu navegador:  

     ```bash
     http://<JETSON_IP>:46654
     ```

   - Los parámetros predeterminados están preconfigurados; inicia para ver resultados

### 📷 Interfaz Web (Ejemplo)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Web%20Interface%20%28Example%29.png"/></div>

3. **Acceder a la página de configuración**  
   - En tu navegador:  

     ```bash
     http://<JETSON_IP>:46654/config.html
     ```

   - Aquí puedes ajustar fuentes de video, modelos, parámetros de inferencia, etc., y guardarlos en el servidor

## ⚙ Resumen de la Página de Configuración

### 📷 Página de Configuración (Ejemplo)

<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Configuration%20Page%20%28Example%29.png"/></div>

## ✨ Recuperación de Resultados de Detección
Al desplegar el servicio, se instala un broker MQTT local. Por lo tanto, los resultados de reconocimiento se pueden obtener a través del MQTT local.

### 📡 Tema de Envío de Mensajes MQTT

```bash
edgeai/result
```
### 🧩 Estructura de Datos de Mensajes MQTT
```json
{
  "uuid": "0c7ef3d9-617d-4e6b-83f6-467f89b28d78", // result's uuid
  "info": {
    "person": 6 // object count
  },
  "line_crossing": {
    "enter": 1, // enter count
    "exit": 0   // exit count
  }
}
```
### 🔧 Configuración de Node-RED
Puede ser necesario calibrar la IP del broker MQTT.
En este caso, Node-RED se despliega en un contenedor, por lo que se usa la dirección docker0.
<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/nodered.png"/></div>
## 🔧 Configuración de Node-RED (Flujo Completo)

Puede ser necesario calibrar la IP del broker MQTT.  
En este caso, Node-RED se despliega en un contenedor, por lo que se usa la dirección `docker0`.

```json
[{
  "id": "f7641cb7c6a84d23",
  "type": "mqtt in",
  "z": "827a3420678b76d2",
  "name": "",
  "topic": "edgeai/result",
  "qos": "2",
  "datatype": "auto-detect",
  "broker": "0f948328c1975515",
  "nl": false,
  "rap": true,
  "rh": 0,
  "inputs": 0,
  "x": 530,
  "y": 620,
  "wires": [
    ["c086c2dfcc39b708"]
  ]
},
{
  "id": "c086c2dfcc39b708",
  "type": "ui-template",
  "z": "827a3420678b76d2",
  "group": "e33e8e2eb3424d08",
  "page": "",
  "ui": "",
  "name": "human tracking",
  "order": 0,
  "width": 0,
  "height": 0,
  "head": "",
  "format": "<template>\n    <div>\n        <!-- Conditional Styling using Attribute Binding (\":\") -->\n        <!-- and rendering content inside <tags></tags> with {{ }} -->\n        <p> <span :style=\"{'color' : (count > 5 ? 'red' : 'green' )}\">Current Count: {{ msg.payload.info.person }}</span>\n            <span style=\"margin-left:20px\"><b v-if=\"msg.payload.info.person > 5\">Too many!</b> </span>\n        </p>\n        <!-- Computed Rendering using Vue Computed Variables -->\n        <p class=\"my-class\">enter: {{ msg.payload.line_crossing.enter }}</p>\n        <p class=\"my-class\">exit: {{ msg.payload.line_crossing.exit }}</p>\n        <!-- Conditional Rendering with \"v-if\" -->\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            // define variables available component-wide\n            // (in <template> and component functions)\n            return {\n                count: 0\n            }\n        },\n        watch: {\n            // watch for any changes of \"count\"\n            count: function () {\n                if (this.count % 5 === 0) {\n                    this.send({payload: 'Multiple of 5'})\n                }\n            }\n        },\n        computed: {\n            // automatically compute this variable\n            // whenever VueJS deems appropriate\n            formattedCount: function () {\n                return this.count + ' Apples'\n            }\n        },\n        methods: {\n            // expose a method to our <template> and Vue Application\n            increase: function () {\n                this.count++\n            }\n        },\n        mounted() {\n            // code here when the component is first loaded\n        },\n        unmounted() {\n            // code here when the component is removed from the Dashboard\n            // i.e. when the user navigates away from the page\n        }\n    }\n</script>\n<style>\n    /* define any styles here - supports raw CSS */\n    .my-class {\n        color: red;\n    }\n</style>",
  "storeOutMessages": true,
  "passthru": true,
  "resendOnRefresh": true,
  "templateScope": "local",
  "className": "",
  "x": 740,
  "y": 620,
  "wires": [[]]
},
{
  "id": "0f948328c1975515",
  "type": "mqtt-broker",
  "name": "",
  "broker": "172.17.0.1",
  "port": 1883,
  "clientid": "",
  "autoConnect": true,
  "usetls": false,
  "protocolVersion": 4,
  "keepalive": 15,
  "cleansession": true,
  "autoUnsubscribe": true,
  "birthTopic": "",
  "birthQos": "0",
  "birthPayload": "",
  "birthMsg": {},
  "closeTopic": "",
  "closePayload": "",
  "closeMsg": {},
  "willTopic": "",
  "willQos": "0",
  "willPayload": "",
  "willMsg": {},
  "userProps": "",
  "sessionExpiry": ""
},
{
  "id": "e33e8e2eb3424d08",
  "type": "ui-group",
  "name": "人流追踪",
  "page": "h1i2j3k4l5m6n7o8",
  "width": "8",
  "height": "8",
  "order": -1,
  "showTitle": true,
  "className": "",
  "visible": "true",
  "disabled": "false",
  "groupType": "default"
},
{
  "id": "h1i2j3k4l5m6n7o8",
  "type": "ui-page",
  "name": "Frigate Page",
  "ui": "f121584d21d465f1",
  "path": "/frigate",
  "icon": "",
  "layout": "grid",
  "theme": "6666b6af5668e7b2",
  "breakpoints": [
    {"name": "Default","px": "0","cols": "3"},
    {"name": "Tablet","px": "576","cols": "6"},
    {"name": "Small Desktop","px": "768","cols": "9"},
    {"name": "Desktop","px": "1024","cols": "12"}
  ],
  "order": 1,
  "className": "",
  "visible": "true",
  "disabled": "false"
},
{
  "id": "f121584d21d465f1",
  "type": "ui-base",
  "name": "My Dashboard",
  "path": "/dashboard",
  "headerContent": "page",
  "titleBarStyle": "default",
  "showReconnectNotification": true,
  "notificationDisplayTime": 5,
  "showDisconnectNotification": true,
  "allowInstall": true
},
{
  "id": "6666b6af5668e7b2",
  "type": "ui-theme",
  "name": "Default Theme",
  "colors": {
    "surface": "#ffffff",
    "primary": "#0094CE",
    "bgPage": "#eeeeee",
    "groupBg": "#ffffff",
    "groupOutline": "#cccccc"
  },
  "sizes": {
    "density": "default",
    "pagePadding": "12px",
    "groupGap": "12px",
    "groupBorderRadius": "4px",
    "widgetGap": "12px"
  }
},
{
  "id": "e9696690fa075863",
  "type": "global-config",
  "env": [],
  "modules": {
    "@flowfuse/node-red-dashboard": "1.26.0"
  }
}]
```
### 📊 Vista Previa del Dashboard de Node-RED
<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/nodered%20preview.png"/></div>


### Fuente de Video

- Soporta **archivos de video locales**, **cámaras USB** (primer dispositivo por defecto), **streams RTSP**
- Soporta cargas de MP4, AVI, MOV, MKV
- Ver y eliminar fuentes de video cargadas

### Modelo de IA

- Seleccionar de los modelos de inferencia de IA disponibles
- Soporta formatos `.pt`, `.pth`, `.onnx`, `.engine`
- Ver y eliminar modelos cargados

### Parámetros de Inferencia

- **Umbral de confianza**: 0.1–1.0
- **Detecciones máximas**: 1–1000
- **Inferencia de media precisión**: aumenta la velocidad (diferencia mínima para modelos pequeños)

### Visualización

- Mostrar cajas de detección (color personalizable, naranja por defecto)
- Marca de tiempo y FPS siempre habilitados

### Seguimiento

- Habilitar seguimiento de múltiples objetos
- Mostrar líneas de trayectoria con longitud, grosor y color personalizables


### Detección de Línea de Activación

- Soporta línea de activación horizontal o vertical (se recomienda vertical)
- Dibuja puntos de inicio/fin; habilita la visualización para depuración en tiempo real
- Tolerancia: 1–20 píxeles
- Color y grosor personalizables
- Mostrar/ocultar y reiniciar contador (se reinicia cuando el servicio se reinicia)

### Gestión de Configuración

- Guardar configuración actual en el servidor (cargada en tiempo de ejecución)
- Exportar/importar archivos de configuración
- Restaurar configuración predeterminada

---

## 🛠 Problemas Comunes

| Problema                        | Causa                      | Solución                                                              |
| ------------------------------- | -------------------------- | --------------------------------------------------------------------- |
| `Falló la instalación de Docker` | Red inestable o fuente | Verificar la red y volver a ejecutar el script                                   |
| Mosquitto no puede conectar     | Problema de firewall/configuración      | Asegurar que `/etc/mosquitto/mosquitto.conf` contenga `listener 1883 0.0.0.0` |
| Modelo YOLO no descargado    | Interrupción de red       | Eliminar `~/sensecraft-ai_server/models/yolo11n.pt` y volver a ejecutar el script |

---

## 📦 Desinstalando el Servicio

```bash
# Uninstall MQTT
sudo apt remove -y mosquitto mosquitto-clients

# Uninstall Docker
sudo apt-get purge -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras

# Remove service directory
rm -rf ~/sensecraft-ai_server
```

---

## 📚 Referencias

- [Guía de Flasheo de Jetson](/es/flash/jetpack_to_selected_product/)
- [Repositorio Fuente de SenseCraft-AI_Server](https://github.com/Seeed-Studio/SenseCraft-AI_Server/tree/jetson)
- [Guía de Docker para NVIDIA Jetson](https://www.jetson-ai-lab.com/tips_ssd-docker.html)
- [Documentación Oficial de Mosquitto](https://mosquitto.org/man/mosquitto-conf-5.html)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
