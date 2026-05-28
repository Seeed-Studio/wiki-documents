---
description: Accede a VS Code Server, Jupyter Lab, escritorio remoto VNC, terminal SSH y herramientas de agentes de IA en tu dispositivo Jetson — además de Compartir Red del PC y la inicialización Jetson Init en el primer arranque — usando Seeed Jetson DevelopTool.
title: Desarrollo remoto
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - desarrollo remoto
  - VS Code Server
  - Jupyter Lab
  - VNC
  - uso compartido de red
  - Jetson Init
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_remote_development
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/es/jetson_developtool_remote_development/
---

El módulo **Remote Dev** te ofrece acceso desde el navegador a un entorno de desarrollo completo que se ejecuta directamente en tu Jetson, sin necesidad de conectar un monitor o teclado al dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-remote-dev.png" style={{width:800, height:'auto'}}/></div>

## Herramientas disponibles

| Herramienta | Método de acceso | Descripción |
|------|--------------|-------------|
| VS Code Server | Navegador | IDE completo de VS Code ejecutándose en Jetson, accesible vía navegador |
| Jupyter Lab | Navegador | Entorno interactivo de cuadernos de Python |
| Escritorio remoto VNC | Navegador (noVNC) o cliente VNC | Escritorio gráfico completo del Jetson |
| Terminal SSH | Terminal integrado | Acceso rápido a la terminal dentro de DevelopTool |
| Instalación de agente de IA | Un solo clic | Instala Claude Code, Codex u OpenClaw CLI en Jetson |

## VS Code Server

1. Conéctate a tu dispositivo Jetson.
2. En la pestaña **Remote Dev**, haz clic en **Launch VS Code Server**.
3. La herramienta instala `code-server` en Jetson (solo la primera vez) y lo inicia.
4. Haz clic en el botón **Open in Browser**; VS Code se abrirá en tu navegador predeterminado conectado al Jetson.

Puedes abrir cualquier carpeta en el sistema de archivos del Jetson, instalar extensiones, ejecutar terminales y depurar código igual que lo harías en un VS Code local.

## Jupyter Lab

1. Haz clic en **Launch Jupyter Lab** en la pestaña Remote Dev.
2. Jupyter Lab se inicia en el Jetson y se muestra la URL de acceso (con token).
3. Haz clic en **Open in Browser** para conectarte.

## Escritorio remoto VNC

1. Haz clic en **Launch VNC** en la pestaña Remote Dev.
2. La herramienta configura un servidor VNC en Jetson (solo la primera vez).
3. Accede mediante el visor de navegador integrado **noVNC**, o conéctate usando cualquier cliente VNC con la dirección y el puerto mostrados.

:::tip
Para obtener el mejor rendimiento de VNC en una red local, un cliente VNC dedicado (por ejemplo, TigerVNC) es más rápido que el visor noVNC basado en navegador.
:::

## Instalación de agente de IA

La sección **AI Agent** te permite instalar asistentes de programación con IA directamente en tu Jetson:

| Agente | Descripción |
|-------|-------------|
| Claude Code | Agente de programación por CLI de Anthropic |
| OpenClaw | Framework de agente de código abierto de Seeed |

Haz clic en **Install** junto al agente deseado. La herramienta gestiona toda la configuración de dependencias para el entorno ARM de Jetson.

---

## Compartir red del PC

El módulo **PC Network Sharing** te permite compartir la conexión a internet de tu PC host con el dispositivo Jetson a través de un cable Ethernet directo; es útil cuando el Jetson no tiene tarjeta Wi‑Fi instalada o cuando trabajas en un entorno de laboratorio sin un router local.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-network-share.png" style={{width:800, height:'auto'}}/></div>

### Cómo funciona

El PC actúa como router: enlaza su interfaz de internet activa (Wi‑Fi u otro puerto Ethernet) con la interfaz Ethernet conectada al Jetson. La herramienta también detecta automáticamente tu configuración de proxy y la reenvía al Jetson para que herramientas como `apt`, `pip` y `docker pull` funcionen de forma transparente.

### Configuración

**Lo que necesitas:**

- Un cable Ethernet que conecte el PC host y el Jetson
- El PC host debe tener una conexión a internet activa (Wi‑Fi o segundo Ethernet)

**Pasos:**

1. Conecta el cable Ethernet entre el PC y el Jetson.
2. Abre la pestaña **PC Network Sharing** en DevelopTool.
3. Selecciona la **interfaz de salida** (la conexión del PC hacia internet, por ejemplo `wlan0` o `eth0`).
4. Selecciona la **interfaz de entrada** (el puerto Ethernet conectado al Jetson, por ejemplo `eth1`).
5. Haz clic en **Enable Sharing**.
6. La herramienta configura NAT, asigna al Jetson una IP mediante DHCP y muestra la dirección IP del Jetson.

Una vez activo, el Jetson tendrá acceso completo a internet a través del PC.

:::tip
Si estás detrás de un proxy corporativo, activa el interruptor **Auto Proxy Forward**. La herramienta detectará la configuración de proxy de tu PC y establecerá automáticamente las variables de entorno `http_proxy` / `https_proxy` en la sesión del Jetson.
:::

### Desactivar el uso compartido de red

Haz clic en **Disable Sharing** para detener el puente y restaurar la configuración de red original en el PC.

---

## Jetson Init

El módulo **Jetson Init** proporciona un asistente guiado por terminal serie que te guía a través de la configuración de primer arranque de NVIDIA (configuración OEM) sin necesidad de conectar un monitor o teclado al Jetson. Es la forma recomendada de inicializar un dispositivo Jetson recién flasheado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-jetson-init.png" style={{width:800, height:'auto'}}/></div>

### Cuándo usar Jetson Init

- Después de flashear una imagen JetPack nueva en un dispositivo Jetson
- Cuando el Jetson no tiene pantalla conectada y necesitas completar la OOBE (Out-of-Box Experience) inicial
- Para configurar el nombre de host del sistema, nombre de usuario, contraseña, zona horaria y red Wi‑Fi en el primer arranque

### Configuración

**Lo que necesitas:**

- Un cable USB a serie (UART) conectado al puerto serie de depuración del Jetson (normalmente un conector de 3 o 4 pines en la placa portadora)
- DevelopTool ejecutándose en el PC host

**Pasos:**

1. Conecta el cable serie entre el PC host y el puerto UART de depuración del Jetson.
2. Enciende el Jetson.
3. Abre la pestaña **Jetson Init** en DevelopTool.
4. Selecciona el **puerto serie** correcto (por ejemplo `COM3` en Windows, `/dev/ttyUSB0` en Linux) y establece la velocidad en baudios a **115200**.
5. Haz clic en **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/connect-jetson-init.png" style={{width:800, height:'auto'}}/></div>

6. El asistente detecta el mensaje de primer arranque y te guía a través de:
   - Aceptar el acuerdo de licencia de NVIDIA
   - Configurar el idioma y la configuración regional del sistema
   - Crear el nombre de usuario y la contraseña predeterminados
   - Configurar la red (Ethernet por DHCP o Wi‑Fi)
   - Establecer el nombre de host y la zona horaria
7. Una vez completada la configuración, el Jetson se reinicia y se muestra la dirección IP asignada.

:::tip
Después de que Jetson Init termine, puedes cambiar inmediatamente a [Device Management](/es/jetson_developtool_device_management) o usar las herramientas **Remote Dev** anteriores con la dirección IP mostrada.
:::

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
