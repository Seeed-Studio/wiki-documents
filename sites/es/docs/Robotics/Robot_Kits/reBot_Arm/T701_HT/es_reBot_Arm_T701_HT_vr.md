---
title: Teleoperación VR del reBot Arm T701 HT
sidebar_label: Teleoperación VR
description: Controla el reBot Arm T701 HT con controladores de VR por USB o WiFi, comprueba los datos de los controladores y utiliza el seguimiento de la pose del efector final y el control de la garra.
keywords:
  - reBot
  - T701 HT
  - VR
  - Quest
  - Pico
  - Dual-Arm Teleoperation
  - WebXR
slug: /rebot_t701_ht_vr
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp
aliases:
  - /rebot_t701_ht_quest
translation:
  skip: [zh-CN]
last_update:
  date: 11/19/2026
  author: liujunjie
createdAt: '2026-11-19'
url: https://wiki.seeedstudio.com/es/rebot_t701_ht_vr/
updatedAt: '2026-11-23'
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Teleoperación VR del reBot Arm T701 HT

<div className="rebot-page">

<div align="center">
  <img
    width={800}
    height={586}
    style={{ height: 'auto', aspectRatio: '800 / 586', objectFit: 'contain', backgroundColor: '#000' }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp"
    alt="reBot Arm T701 HT bimanual robot"
  />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701-SDK"
  fallbackCount={0}
  ariaLabel="Star T701-HT SDK on GitHub"
/>

Usa los controladores de VR izquierdo y derecho para controlar los brazos T701 HT correspondientes, incluido el seguimiento de la pose del efector final y el control de la garra. El navegador del visor lee los datos de los controladores mediante WebXR y los envía al ordenador a través de WebSocket. El servidor de streaming los reenvía después al controlador bimanual por UDP.

:::note[Compatibilidad de dispositivos]

Esta demo se ha probado en Quest. Los usuarios de Pico pueden conectarse mediante la misma canalización WebXR → WebSocket → UDP usando un navegador del visor compatible con WebXR. Las instrucciones siguientes usan Quest como ejemplo y cubren tanto conexiones por USB como por WiFi.

:::

<section className="section-card">

## Entorno y conexiones

Obtén el SDK e instala sus dependencias usando las [instrucciones de instalación de inicio rápido del T701 HT](https://wiki.seeedstudio.com/es/rebot_t701_ht_getting_started/#instalar-el-sdk). Completa el mapeo serie, comprueba la retroalimentación de las articulaciones y de la garra y establece las posiciones cero. El brazo izquierdo usa CAN1 y el derecho CAN2.

Prepara un visor de VR y ambos controladores. El modo USB también necesita un cable de datos USB; el modo WiFi necesita que el visor y el ordenador estén en la misma LAN.

Ejecuta los comandos siguientes desde la raíz del SDK. En cada nueva terminal, vuelve a ese directorio y activa el entorno `t701-ht`.

```bash
conda activate t701-ht
```

</section>

<section className="section-card">

## Iniciar el streaming

En la primera terminal, inicia la interfaz de streaming:

```bash
python Quest_controller_stream/quest_stream_tui.py
```

Usa Arriba/Abajo para seleccionar un campo, Izquierda/Derecha para ajustarlo, `E` para editar direcciones o puertos y Enter para activar un botón. Los valores predeterminados iniciales son WiFi / 8080, y la interfaz guarda tu configuración. Al cambiar de modo, selecciona primero **Stop Server**, luego establece el modo y los puertos que se muestran en la pestaña correspondiente.

<Tabs defaultValue="usb" groupId="t701-vr-connection">
<TabItem value="usb" label="USB (Con cable)">

#### Conexión y ajustes

Activa el modo desarrollador en el visor, conéctalo al ordenador que ejecuta el SDK con un cable de datos USB y autoriza la depuración USB en el visor. Comprueba la conexión en otra terminal:

```bash
adb devices
```

El dispositivo debe mostrar el estado `device`. Si muestra `unauthorized`, confirma la autorización en el visor. En Ubuntu, instala un `adb` que falte con `sudo apt install adb`.

Configura la interfaz de streaming como sigue:

| Ajuste | Valor |
| --- | --- |
| Mode | USB |
| Force HTTPS | False |
| HTTP Host / Port | 0.0.0.0 / 8080 |
| WS Host / Port | 0.0.0.0 / 8765 |
| UDP IP / Port | 127.0.0.1 / 5005 |
| Verify Port | 5005 |

#### Iniciar y abrir la página

Selecciona **Start Server**. El programa usa `adb reverse` para reenviar los puertos 8080 y 8765 del visor al ordenador. Abre esta URL en el navegador del visor:

```text
http://localhost:8080/index.html?ws=ws://localhost:8765
```

Configura la entrada de WebSocket de la página como `ws://localhost:8765`. El modo USB usa **HTTP / WS** y no necesita un certificado HTTPS. Aquí, `localhost` llega al ordenador a través del reenvío USB.

#### Inicio por línea de comandos (opcional)

Sin la interfaz de streaming, ejecuta este comando desde la raíz del SDK. No lo ejecutes junto con un servidor iniciado por la interfaz:

```bash
python Quest_controller_stream/start_stream_server.py --http-host 0.0.0.0 --http-port 8080 --ws-host 0.0.0.0 --ws-port 8765 --udp-ip 127.0.0.1 --udp-port 5005 --adb auto
```

</TabItem>
<TabItem value="wifi" label="WiFi (Inalámbrico)">

#### Conexión y ajustes

Conecta el visor y el ordenador que ejecuta el SDK a la misma LAN. Este modo no requiere cable USB, ADB ni autorización de depuración USB.

En el ordenador, encuentra su IP de la LAN y comprueba OpenSSL:

```bash
hostname -I
openssl version
```

Usa la IP real del ordenador en esa LAN, no una dirección de adaptador de Docker o VPN. En Ubuntu, instala un OpenSSL que falte con `sudo apt install openssl`.

Configura la interfaz de streaming como sigue:

| Ajuste | Valor |
| --- | --- |
| Mode | WiFi |
| Force HTTPS | True |
| HTTP Host / Port | 0.0.0.0 / 8080 |
| WS Host / Port | 0.0.0.0 / 8765 |
| UDP IP / Port | 127.0.0.1 / 5005 |
| Verify Port | 5005 |
| Cert File | .certs/quest-controller.crt |
| Key File | .certs/quest-controller.key |

#### Iniciar y abrir la página

Selecciona **Start Server**. El modo WiFi usa **HTTPS / WSS**. Si faltan el certificado y la clave privada, el programa genera un certificado autofirmado con OpenSSL.

Abre en el navegador del visor la URL WiFi que se muestra en la interfaz, comprobando que use la IP real de la LAN del ordenador. Por ejemplo, si la IP del ordenador es `192.168.1.100`:

```text
https://192.168.1.100:8080/index.html?ws=wss://192.168.1.100:8765
```

Sustituye la IP de ejemplo por la IP real del ordenador. En el primer acceso, gestiona el aviso del certificado autofirmado en el navegador y recarga la página. Configura la entrada de WebSocket como `wss://ACTUAL_COMPUTER_IP:8765`, no `localhost` ni `ws://`.

Los valores `0.0.0.0` de HTTP Host y WS Host son direcciones de escucha, no direcciones que se deban abrir en el visor. Cuando el servidor de streaming y el controlador bimanual se ejecutan en el mismo ordenador, el destino UDP sigue siendo `127.0.0.1:5005`.

#### Inicio por línea de comandos (opcional)

Sin la interfaz de streaming, ejecuta este comando desde la raíz del SDK. No lo ejecutes junto con un servidor iniciado por la interfaz. `--adb never` desactiva el reenvío ADB y habilita automáticamente HTTPS / WSS.

```bash
python Quest_controller_stream/start_stream_server.py --http-host 0.0.0.0 --http-port 8080 --ws-host 0.0.0.0 --ws-port 8765 --udp-ip 127.0.0.1 --udp-port 5005 --adb never
```

</TabItem>
</Tabs>

Después de conectar con el modo seleccionado, elige **Start XR Stream** en la página del visor. Comprueba los siguientes valores de estado:

| Estado de la página | Valor esperado |
| --- | --- |
| WebSocket | Connected |
| XR | Running |
| Both controllers | Tracking |

La página restaura la configuración de WebSocket guardada. Después de cambiar de modo, comprueba que el protocolo, la IP y el puerto de la entrada coincidan con la pestaña seleccionada y luego guarda la configuración.

</section>

<section className="section-card">

## Comprobar los datos de los controladores

Selecciona **Start Verify** en la interfaz de streaming del ordenador. Mueve ambos controladores y comprueba que el recuento de paquetes aumenta y que los datos de pose y botones cambian con tu entrada.

Luego selecciona **Stop Verify**. Mantén en ejecución el servidor, el modo USB o WiFi seleccionado y el streaming XR del visor. Verify y el controlador bimanual usan el mismo puerto UDP 5005 y no pueden recibir simultáneamente.

| Tecla en la terminal | Función |
| --- | --- |
| `1` / `2` / `3` / `4` | Abrir Controles, Mano izquierda, Mano derecha y Registros. |
| `Tab` | Cambiar de página. |
| `Q` | Detener el servidor de streaming y salir de la interfaz. |

</section>

<section className="section-card">

## Iniciar el control bimanual

:::warning[Despeja el rango de movimiento antes de empezar]

Detén Verify, `udp_receiver_test.py` y cualquier otro receptor UDP 5005. Después de recibir datos de los controladores, el programa mueve primero el brazo izquierdo y luego el derecho a sus poses iniciales de VR. Asegura el robot, retira las cargas y despeja el rango de movimiento y la trayectoria de retorno. Permanece junto al robot y mantente alejado de los puntos de pellizco de articulaciones y garras.

:::

En una segunda terminal, desde la raíz del SDK:

```bash
conda activate t701-ht
cd scripts
python t701_ht_vr_dual_cartesian_qp_control.py
```

Esta entrada controla directamente ambos brazos, sin un menú de selección de brazo. Los brazos izquierdo y derecho usan `T701-HT_robot_param/T701-HT_left.yaml` y `T701-HT_right.yaml`, respectivamente.

Espera a que terminen los movimientos iniciales y a que el programa muestre su mensaje de inicio de control, luego usa los siguientes controles:

| Entrada | Comportamiento del robot |
| --- | --- |
| Mantener pulsado **Squeeze** en el controlador izquierdo o derecho | El brazo correspondiente sigue la pose del controlador. |
| Soltar **Squeeze** | Mantener la posición actual. |
| Usar **Trigger** mientras mantienes Squeeze | Abrir o cerrar la garra correspondiente. |
| Pulsar el botón principal, etiquetado como A en el programa | Restablecer suavemente ese brazo a sus ángulos articulares iniciales para esta ejecución. |
| Pulsar `Ctrl+C` en la terminal de control | Devolver los brazos a cero en modo MIT y detener los motores. Espera a que finalice el apagado. |

Después de que el controlador salga, pulsa `Q` en la interfaz de streaming para detener el servidor y salir.

</section>

<section className="section-card">

## Solución de problemas

| Síntoma | Comprobación y acción |
| --- | --- |
| La página USB no se abre | Confirma la autorización de depuración USB, el estado `device` en `adb devices` y que el servidor de streaming esté en ejecución. Usa `http://localhost:8080`. |
| La página WiFi no se abre | Confirma que el visor y el ordenador estén en la misma LAN. Usa `https://ACTUAL_COMPUTER_IP:8080`, gestiona el aviso del certificado y comprueba que el ordenador permita conexiones en los puertos 8080 y 8765. |
| WebSocket alterna entre Connecting y Reconnecting | USB usa `ws://localhost:8765` con Force HTTPS desactivado; WiFi usa `wss://ACTUAL_COMPUTER_IP:8765`. Comprueba si la página restauró la configuración del otro modo. |
| No se puede enlazar el UDP 5005 | Detén Verify, `udp_receiver_test.py` u otro receptor que esté usando el puerto. |
| No hay paquetes de controladores en los 10 segundos posteriores al inicio | Selecciona Start XR Stream en el visor, comprueba que WebSocket esté conectado y establece el destino UDP en `127.0.0.1:5005`. El programa sale antes de inicializar los brazos. |
| El modo de conexión cambia después de restablecer la configuración | Reset Defaults o eliminar la configuración guardada restaura WiFi / 8080. Vuelve a establecer el modo y los puertos en la pestaña seleccionada; cambiar de modo no restablece los puertos automáticamente. |

</section>

<section className="section-card">

## Interfaz de escritorio (opcional)

La interfaz de escritorio es `Quest_controller_stream/quest_stream_ui.py`. Requiere la dependencia opcional `PyQt5` y utiliza una configuración `.quest_stream_ui.json` independiente. Se aplican los mismos requisitos de protocolo y dirección USB y WiFi; configúralos por separado en la interfaz de escritorio.

</section>

</div>
