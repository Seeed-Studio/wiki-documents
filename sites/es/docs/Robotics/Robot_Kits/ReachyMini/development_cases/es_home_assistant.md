---
description: Integración de Reachy Mini con Home Assistant. Instala la integración oficial vía HACS para autodescubrimiento por LAN, monitorización de sensores y blueprints de automatización.
title: Integración con Home Assistant
slug: /reachymini_development_cases_home_assistant
keywords:
  - reachy mini
  - home assistant
sku: 100090917，100025004
last_update:
  date: 7/29/2026
  author: ZhuYuan
translation:
  skip: [zh-CN]
createdAt: '2026-07-29'
updatedAt: '2026-07-29'
url: https://wiki.seeedstudio.com/cn/reachymini_development_cases_home_assistant/
---
# Integración de Reachy Mini con Home Assistant

¿Quieres que Reachy Mini controle tus dispositivos de hogar inteligente — Mi Home (Xiaomi), Aqara, Midea, Haier y más (como refrigeradores y aires acondicionados)? Este proyecto explica en detalle cómo controlarlos con Reachy Mini, sin necesidad de código. Incluso puedes entregar este documento directamente a una IA y dejar que instale y configure todo por ti.

**Para usuarios finales:** instala la integración oficial de Reachy Mini — [https://github.com/pollen-robotics/reachy_mini_homeassistant](https://github.com/pollen-robotics/reachy_mini_homeassistant) — vía HACS (Custom Repository → Integration). Una vez que tu robot esté en la misma LAN, Home Assistant lo detecta automáticamente en unos ~30 segundos y crea una tarjeta de dispositivo real con sensores y sensores binarios agrupados debajo. Seis blueprints de automatización se incluyen en el mismo repositorio. **Sin YAML, sin cableado manual de entidades.**

Esta página documenta la superficie del lado del SDK que consume la integración (y cualquier otro cliente de monitorización):

- el **contrato de descubrimiento mDNS / zeroconf** — cómo HA encuentra el daemon en la LAN.
- los **endpoints REST existentes** que la integración consulta para construir su vista del estado del robot.

El SDK no incluye un endpoint dedicado de "agregador de Home Assistant". Los consumidores de HA se distribuyen a las mismas rutas que usa cualquier otro cliente (estado del daemon, estado de bloqueo de aplicaciones, mezclador de audio, DoA). La semántica con forma de HA — `awake`, `active_app_transport`, `webrtc_active` — vive completamente en el repositorio de la integración.

## Superficie de descubrimiento

El daemon de Reachy Mini se anuncia en la LAN mediante mDNS como `_reachy-mini._tcp.local.`. El componente zeroconf de Home Assistant hace coincidir la integración de Reachy Mini con `model=ReachyMini` en el registro TXT, por lo que el filtro de propiedades es lo que hace que el autodescubrimiento sea inequívoco.


| Clave TXT      | Tipo            | Significado                                                                                                                                   |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `unit_id`      | Hex de 16 caracteres     | Identificador estable por robot — SHA-256 del número de serie del dispositivo de audio, truncado. Usado por la integración como el unique-id para la entrada de configuración de HA. |
| `model`        | string          | `"ReachyMini"`. Usado como filtro de manifiesto.                                                                                              |
| `manufacturer` | string          | `"Pollen Robotics"`.                                                                                                                          |
| `version`      | string          | Versión del paquete del daemon.                                                                                                               |
| `caps`         | separado por comas | Banderas de capacidad:`camera,mic,speaker,motion,apps`.                                                                                       |
| `api`          | string          | `"rest+ws"`.                                                                                                                                  |
| `robot_name`   | string          | Nombre para mostrar configurable por el usuario.                                                                                              |
| `ws_path`      | string          | `/ws/sdk` — la ruta WebSocket del SDK.                                                                                                        |
| `address`      | string          | Dirección IP (también resoluble desde el registro A).                                                                                         |

Verifica desde cualquier host en la LAN:

```bash
avahi-browse -rt _reachy-mini._tcp        # Linux
dns-sd -Z _reachy-mini._tcp local.        # macOS
dns-sd.exe -B _reachy-mini._tcp           # Windows
Resolve-DnsName reachy-mini.local         # PowerShell
```

Comprobación independiente de la plataforma: en Home Assistant, **Settings → Devices & Services** muestra una tarjeta "Discovered: Reachy Mini" tan pronto como la integración de HACS está instalada y el robot está en la misma LAN. Esa es la verificación real para el usuario final — los comandos de CLI anteriores son para depurar cuando el descubrimiento falla silenciosamente.

Implementación: `src/reachy_mini/utils/discovery.py`.

## Endpoints consumidos por la integración

El coordinador de la integración consulta estos cada 30 segundos en paralelo (`asyncio.gather`). Cada uno falla de forma independiente — una caída parcial solo deja fuera de línea las entidades afectadas, no todo el dispositivo.


| Endpoint                                | Campos usados por la integración                                                                                                                                                                  |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET /api/daemon/status`                | `version` → versión de firmware, `hardware_id` → unit_id (comprobación cruzada frente al TXT de mDNS), `backend_status.motor_control_mode` → awake + motor_mode bruto, `backend_status.ready` → compuerta de disponibilidad |
| `GET /api/daemon/robot-app-lock-status` | `state` + `holder_name` → active_app, active_app_transport, webrtc_active                                                                                                                        |
| `GET /api/state/doa`                    | `angle` → radianes de DoA, `speech_detected` → VAD de voz                                                                                                                                        |
| `GET /api/volume/current`               | `volume` → volumen del altavoz                                                                                                                                                                   |
| `GET /api/volume/microphone/current`    | `volume` → volumen del micrófono                                                                                                                                                                 |

El coordinador de la integración (`coordinator.py`) hace el modelado para HA por encima: `awake = motor_mode in {"enabled", "gravity_compensation"}`, derivación de `active_app_transport` a partir del estado de bloqueo, etc. El SDK nunca incluye campos específicos de HA; los consumidores los componen.

## Actualmente no expuesto

Estos serían útiles en HA pero hoy ningún endpoint del SDK los expone:

- **CPU / memoria / tiempo de actividad** — métricas del proceso host. Funcionan tanto en Lite como en Wireless (son estadísticas del proceso del daemon, no sensores de hardware del robot).
- **Inclinación / balanceo / temperatura del IMU** — solo Wireless (el BMI088 solo está en la placa CM4). En Lite serían nulos.

Ambos podrían añadirse más adelante como rutas aditivas pequeñas (por ejemplo, `/api/daemon/host`, `/api/state/imu`) sin romper nada. La integración los recogería como destinos adicionales de distribución y los expondría como nuevas entidades.

## Alternativa sin integración

Si no quieres instalar la integración personalizada, los mismos endpoints se pueden usar directamente desde la integración `rest:` incorporada de Home Assistant — un bloque `rest:` por endpoint. La contrapartida es que mantienes el YAML tú mismo y escribes las derivaciones Jinja (`awake`, `webrtc_active`, …) en línea.

```yaml
rest:
  - resource: http://reachy-mini.local:8000/api/daemon/status
    scan_interval: 30
    sensor:
      - name: "Reachy Mini Motor Mode"
        unique_id: reachy_mini_motor_mode
        value_template: "{{ value_json.backend_status.motor_control_mode }}"
      - name: "Reachy Mini Firmware"
        unique_id: reachy_mini_firmware
        value_template: "{{ value_json.version }}"
    binary_sensor:
      - name: "Reachy Mini Awake"
        unique_id: reachy_mini_awake
        value_template: >-
          {{ value_json.backend_status.motor_control_mode in
             ['enabled', 'gravity_compensation'] }}
        device_class: power

  - resource: http://reachy-mini.local:8000/api/daemon/robot-app-lock-status
    scan_interval: 30
    sensor:
      - name: "Reachy Mini Active App"
        unique_id: reachy_mini_active_app
        value_template: "{{ value_json.holder_name | default('none') }}"
    binary_sensor:
      - name: "Reachy Mini WebRTC Active"
        unique_id: reachy_mini_webrtc_active
        value_template: "{{ value_json.state == 'remote_session' }}"
        device_class: connectivity
```

Añade más bloques `rest:` para `/api/state/doa`, `/api/volume/current` y `/api/volume/microphone/current` según sea necesario — consulta los esquemas de respuesta en `/docs` en el daemon en vivo para conocer las formas exactas de los campos.

Luego llama a la acción `rest.reload` (Developer Tools → Actions) o reinicia Home Assistant; las entidades aparecen en **Settings → Devices & Services → Entities** filtradas por `reachy_mini`.

## Tomar el control después de la instalación

Una vez que Home Assistant esté instalado, sigue estos pasos para tomar el control:

1. Abre [http://localhost:8123](http://localhost:8123).
2. El primer inicio lanza el asistente de incorporación: crea una cuenta de administrador (nombre/usuario/contraseña), selecciona China como región y sigue haciendo clic en siguiente.
3. Ve a **Settings → Devices & Services**.
4. En unos ~30 segundos debería aparecer una tarjeta "Discovered: Reachy Mini" → haz clic en **Add** para confirmar.
   - En la primera adición, HA descarga automáticamente la dependencia aiortc de la cámara; esto requiere acceso a internet, así que dale un momento.
5. Si la tarjeta de descubrimiento no aparece: haz clic en **Add Integration** en la esquina inferior derecha → busca "Reachy Mini" → introduce la dirección manualmente (para la versión Lite puedes usar 127.0.0.1).

Una vez añadido, verás un dispositivo Reachy Mini con: una transmisión de cámara en vivo, botones de activación/suspensión, menús desplegables con 81 expresiones + 34 bailes, controles deslizantes de volumen, un selector de modo de motor (deshabilitado funciona como una parada de emergencia suave) y sensores como detección de voz.

<div align="center">
  <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini-demo/reachymini-home.webp"
  />
</div>

## Notas de diseño

- El SDK expone solo endpoints de propósito general: estado del daemon, estado, volumen, bloqueo de la aplicación. **No hay semántica con forma de HA en el daemon.**
- Las derivaciones específicas de HA (`awake`, `active_app_transport`, `webrtc_active`) residen completamente en el coordinador del repositorio de integración. Cambiar sus definiciones no toca el SDK.
- La integración es intencionalmente tolerante a endpoints faltantes: si `/api/state/doa` devuelve 404 (audio deshabilitado), los campos de DoA simplemente pasan a no estar disponibles mientras el resto de la tarjeta del dispositivo sigue funcionando.
- **Sin autenticación, confianza solo en LAN.** La misma postura que cualquier otra ruta `/api/*` en el daemon. **No expongas el puerto 8000 directamente a internet.**

Para el flujo de instalación / configuración / automatización orientado al usuario, consulta el repositorio de integración en [https://github.com/pollen-robotics/reachy_mini_homeassistant](https://github.com/pollen-robotics/reachy_mini_homeassistant).
