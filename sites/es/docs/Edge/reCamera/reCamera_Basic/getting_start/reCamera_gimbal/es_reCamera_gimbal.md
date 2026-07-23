---
description: Primeros pasos con reCamera Gimbal
title: reCamera Gimbal
keywords:
  - AI
  - reCamera
  - Gimbal
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.webp
slug: /recamera_gimbal_getting_started
sku: 108990119,108990120,E20245041001
sidebar_position: 1
last_update:
  date: 04/09/2025
  author: Dawn Yao
createdAt: '2025-02-27'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/reCamera/reCamera_Basic/getting_start/recamera_gimbal_getting_started
---

# Primeros pasos con reCamera Gimbal

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" /></div>

## Introducción

¡Bienvenido a reCamera Gimbal! La serie reCamera gimbal 2002 es el primer sistema de control de cámara de código abierto, compuesto por una pequeña cámara de IA, reCamera 2002w 8GB/64GB, y una base de gimbal de 2 ejes compatible con 2 motores sin escobillas. Está impulsado por un SoC RISC-V, que proporciona un rendimiento de IA de 1 TOPS con codificación de vídeo a 5MP @ 30 FPS. Ofrece un paquete de autoensamblaje tipo Lego e integra la plataforma Sensecraft AI y la plataforma Node-RED para una programación gráfica fluida y construcción de canalizaciones, lo que permite un rápido autoentrenamiento, conversión de modelos y despliegue de modelos de IA como Yolo v5/v8/11.

Esta guía te ayudará a configurar rápidamente tu dispositivo y empezar a usarlo para desbloquear potentes funciones de visión por IA. Tanto si eres principiante como usuario experimentado, este recorrido paso a paso te guiará por la instalación, configuración y primer uso.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱</font></span></strong>
    </a>
</div>

## Requisitos previos

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_prerequisites.png" /></div>

- reCamera Gimbal
- Manual de usuario (dentro de la caja)
- Adaptador de corriente DC de 12V a conector DC 5521 ([Purchase link](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html))
- Cable USB tipo C ([Purchase lini](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html))
- Conexión Wi‑Fi
- Destornillador eléctrico (opcional para una mejor experiencia de montaje)

## Desempaquetado

Comienza desempaquetando tu reCamera Gimbal. Dentro de la caja deberías encontrar:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

Asegúrate de que todas las piezas estén incluidas.

### Montaje de hardware

Ensamble el reCamea Gimbal de acuerdo con las instrucciones de montaje en la caja o en el [Manual de usuario](#jump1).

<div style={{textAlign:'center'}}><iframe width={560} height={315} src="https://www.youtube.com/embed/VAkhDHct0p4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

:::note
Asegúrate de que todos los tornillos estén bien apretados, de lo contrario afectará al funcionamiento del motor.
:::

### Configurar el dispositivo e iniciar sesión

**Paso 1:** Después de ensamblar el Gimbal, conecta el cable USB desde reCamera Gimbal a tu PC. Ve a `192.168.42.1` en el navegador web y cambia la contraseña predeterminada. Si estás usando el modo de configuración WiFi AP, ve en su lugar a `192.168.16.1`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
Por favor recuerda tu contraseña, de lo contrario todos los registros se borrarán para restablecer tu dispositivo. Si olvidas la contraseña, por favor realiza un [restablecimiento de fábrica](https://wiki.seeedstudio.com/es/recamera_getting_started/#restablecimiento-de-fábrica) de tu dispositivo.
:::

:::note
El nombre de usuario y la contraseña predeterminados son ambos `recamera`. Si realizas un restablecimiento de fábrica o estás usando un dispositivo nuevo (no configurado), estos son el nombre de usuario y la contraseña que debes usar.
:::

**Paso 2:** Aquí accederás al Panel de vista previa del Gimbal. Antes de experimentar algunos movimientos del motor con los controles del Panel, ve a `Network` para configurar el Wi‑Fi.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_network.png" /></div>

**Paso 3:** Conéctate a tu red Wi‑Fi. Después de conectarte correctamente a la red Wi‑Fi, haz clic en el `lock icon` para ver la dirección IP del dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/view_wifi_IP.png" /></div>

**Paso 4:** Abre una nueva pestaña del navegador y usa esta dirección IP para acceder al dispositivo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_5.png" /></div>

**Paso 6:** Conecta primero la alimentación a la base y luego desconecta el cable USB tipo C para obtener los mejores movimientos del motor.

:::note

Debe conectarse el adaptador de corriente con un voltaje de 12V.

:::

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/switch_power.png" /></div>

**Paso 7:** Regresa al navegador con tu `ip address` para visitar el panel, luego pulsa el `Calibrate button` en el lado derecho para que tu Gimbal se calibre automáticamente.

:::note

Durante la calibración, evita interferir con el funcionamiento del dispositivo, ya que esto podría provocar un fallo en la calibración. La calibración se realiza automáticamente cada vez que el gimbal se enciende.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_calibrate.png" /></div>

### Comportamiento de la calibración

El eje de guiñada (yaw) tiene un rango de movimiento de 0–360°, aunque el rango mecánico real está limitado a aproximadamente 345° debido a restricciones estructurales. Sin embargo, la cobertura de visión sigue siendo de 360°. El eje de inclinación (pitch) admite un rango de movimiento de 0–180°.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/movement_range.png" /></div>

Al encenderse, el gimbal iniciará su secuencia de calibración automática:

- **Eje de guiñada (Yaw)**: El gimbal girará primero en el sentido de las agujas del reloj hacia su límite mecánico (situado por encima del cable de alimentación), luego girará en sentido antihorario hasta el límite opuesto. Después de alcanzar ambos extremos, volverá a la posición central.

- **Eje de inclinación (Pitch)**: El gimbal se inclinará hacia arriba hasta la posición de 0°, luego hacia abajo hasta alcanzar el límite de 180° y finalmente volverá al centro.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/calibrate.gif" /></div>

Esta secuencia completa el proceso de auto‑calibración del gimbal.

También puedes calibrar introduciendo este comando en la terminal

```bash
gimbal cali
```

### Solución de problemas de calibración

Si el gimbal no realiza correctamente la secuencia de calibración, puede haber varias causas posibles:

- **Verificar las limitaciones mecánicas**: Comprueba manualmente el gimbal para asegurarte de que el rango de movimiento no esté obstruido o limitado de forma incorrecta.

- **Comprobar la resistencia de las piezas impresas en 3D**: Percibe si hay alguna resistencia cuando se mueve el motor. Si la resistencia es excesiva, es posible que necesites ajustar los parámetros PID del motor para aumentar la fuerza del motor. Puedes ver [cómo ajustar el PID aquí](https://wiki.seeedstudio.com/es/recamera_pid_adjustment). Alternativamente, reduce la fricción lijando algunas piezas o aflojando ligeramente los tornillos para mejorar el movimiento.

## Acceso web básico

URLs web:

- **Página de vista previa**: `ip_address/#/dashboard`

- **Página de inicio**: `ip_address/#/init`
- **Espacio de trabajo**: `ip_address/#/workspace`
- **Configuración de red**: `ip_address/#/network`
- **Seguridad**: `ip_address/#/security`
- **Terminal**: `ip_address/#/terminal`
- **Sistema**: `ip_address/#/system`
- **Energía**: `ip_address/#/power`
- **Node-RED original**: `ip_address:1880`

### Inicio rápido con el panel de Gimbal

#### Control de motores

Una vez completadas la configuración y la calibración, puedes controlar el gimbal usando las opciones disponibles en el panel. Visita `ip_address/#/dashboard` o `ip_address` para acceder al panel de vista previa del Gimbal creado con nodos de Node-RED:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

- **Joystick**: Controla la dirección del campo de visión de la cámara. Por ejemplo, arrastrar el joystick hacia la derecha hace que la imagen se mueva hacia la derecha en consecuencia.
- **Deslizadores**:
  - Deslizadores de guiñada (Yaw) e inclinación (Pitch): Mueven el gimbal a un ángulo absoluto especificado.

    Rango de guiñada (Yaw): 0–360°

    Rango de inclinación (Pitch): 0–180°

:::note
Debido a las limitaciones estructurales, el rango de guiñada está limitado a 0–345° y el rango de inclinación está limitado a 0–180°. Cualquier valor introducido fuera de estos rangos se ajustará al límite más cercano. Por ejemplo, si introduces 360° para la guiñada, el sistema ejecutará automáticamente el movimiento como 345°.
:::

- Deslizador de velocidad: Ajusta la velocidad de ambos motores simultáneamente.

    Rango de velocidad: 0–720°/s (grados por segundo)
- **Auto-Tracking**: Selecciona un objeto objetivo en el menú desplegable (por ejemplo, persona, coche, gato, perro, botella) y luego haz clic en `Start Tracking` para iniciar el seguimiento automático de objetos. Haz clic en `Stop Tracking` para finalizar el seguimiento.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_tarck.png" /></div>

- **Botón Sleep**: Mueve el gimbal a una posición absoluta de (Yaw: 180°, Pitch: 180°).

:::note

El botón Sleep no activa un modo de suspensión de bajo consumo. Simplemente recoloca la cámara para que mire hacia abajo.

:::

- **Botón Standby**: Mueve el gimbal a una posición absoluta de (Yaw: 180°, Pitch: 90°).
- **Botón Calibrate**: Inicia el proceso de calibración del gimbal.
- **Botón de parada de emergencia**: Desactiva inmediatamente ambos motores durante el movimiento.

    ⚠️ Nota: Esto no interrumpirá el proceso de calibración.

#### Parámetros del modelo de IA

**Confidence**: La confianza en el modelo YOLO representa la probabilidad de que una caja delimitadora predicha contenga un objeto y cuán precisa es la predicción. Es un valor entre 0 y 100.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**Intersection over Union (IoU)**: IoU es una métrica utilizada para evaluar la superposición entre la caja delimitadora predicha y la caja delimitadora de referencia (ground truth). Se calcula como la relación entre el área de intersección de las dos cajas y el área de unión de las dos cajas. El valor de IoU suele estar en el rango de 0 a 1. Lo estandarizamos a una escala de 0 - 100; un valor de IoU de 0 representa que no hay superposición entre la caja predicha y la caja de referencia. Un valor de 100 indica una coincidencia perfecta, lo que significa que las dos cajas se superponen completamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### Inicio rápido con el flujo del panel de control del Gimbal

Si deseas saber cómo se crea el panel con nodos de Node-RED, haz clic en la esquina inferior derecha o visita `ip_address/#/workspace` para acceder al espacio de trabajo de Node-RED del Gimbal

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_to_workspace.png" /></div>

Entonces verás el flujo predeterminado del panel del gimbal; puedes hacer doble clic en cada nodo para ver los detalles del nodo. El flujo del panel se verá así:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.png" /></div>

**Configuración del modelo**:

- Los nodos de control deslizante te permiten ajustar el IoU (Intersection over Union) y el umbral de confianza para el modelo de IA YOLO.

**Visualización de la interfaz del panel**:

- El nodo de plantilla de interfaz muestra texto con la configuración actual del modelo.
- También renderiza la imagen en base64 de la cámara, incluidas las cajas de detección de los objetos identificados por YOLO.

**Seguimiento automático con objetivo**:

- Los nodos de función obtienen información sobre el objeto objetivo (por ejemplo, ancho, alto, coordenadas) y procesan estos datos utilizando un algoritmo de seguimiento.

- El nodo de función del algoritmo calcula el desplazamiento del centro de la caja del objetivo con respecto al centro de visión y envía este desplazamiento al nodo de ajuste del ángulo del motor para mover el gimbal a la posición deseada.

**Control manual del motor**:

- Utiliza nodos de control deslizante para establecer manualmente los ángulos del motor, moviendo el gimbal un número específico de grados.

- Alternativamente, el nodo de interfaz de joystick permite el control manual ajustando la posición del gimbal en pequeños incrementos (desplazamiento por desplazamiento).

**Botones de acceso rápido**:

- Los nodos de botón de interfaz envían posiciones específicas al nodo de ajuste del ángulo del motor, activando comportamientos como Sleep o Standby.

- Estos botones también pueden activar nodos `exec` que ejecutan scripts bash como `gimbal cali` para la calibración o `gimbal stop 1; gimbal stop 2` para una parada de emergencia.

**Subflujo básico de iframe web**:

- Un subflujo de iframe muestra páginas web básicas como la configuración de red, información del sistema e información del dispositivo.

- Ten en cuenta que esto puede consumir recursos de CPU, ya que renderiza la página con múltiples nodos. Puede eliminarse si no es necesario.

## Aplicar gestión en la nube y copia de seguridad

Si deseas crear una nueva aplicación o guardar aplicaciones en el servicio en la nube de SenseCraft, puedes iniciar sesión en tu cuenta de sensecraft en la parte inferior izquierda y luego hacer clic en el icono `+` para añadir una nueva aplicación. Después puedes empezar a trabajar en tu flujo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

Puedes ver y gestionar tus aplicaciones en [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera).

:::note

Debes registrar una cuenta antes de poder iniciar sesión a través de la plataforma para sincronizar tus aplicaciones.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## Lista de puertos

A continuación se enumeran los puertos utilizados por reCamera Gimbal:

- **Puerto 22**: Utilizado para inicio de sesión remoto por SSH y está abierto.
- **Puerto 53**: Asociado con la resolución de nombres de dominio DNS y es esencial para la redirección web. Está abierto de forma predeterminada.
- **Puerto 80**: Sirve como la interfaz del panel web para la visualización HTTP de la aplicación Node-RED.
- **Puerto 554**: Empleado para la transmisión de vídeo RTSP.
- **Puerto 9090**: Destinado al acceso al terminal web, que requiere una contraseña para iniciar sesión.
- **Puerto 1880**: Dedicado a las operaciones de Node-RED.

## Actualización OTA del sistema operativo

Consulta las [Instrucciones de actualización OTA](https://wiki.seeedstudio.com/es/recamera_getting_started/#actualización-ota-desde-013-a-la-última-versión).

## Restablecimiento de fábrica

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_usr_button.png" /></div>

Si deseas restablecer el dispositivo, por ejemplo, si olvidas el código de acceso de tu dispositivo, puedes mantener presionado el botón **User** y luego conectar el dispositivo a la alimentación. Cuando la `luz roja` del dispositivo esté **constantemente encendida** en lugar de parpadear, suelta el botón User.

## Recursos

- <span id="jump1"><a href="https://files.seeedstudio.com/gimbal/GIMBAL_Manual0311.pdf">Manual de usuario de reCamera Gimbal</a></span>

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

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
