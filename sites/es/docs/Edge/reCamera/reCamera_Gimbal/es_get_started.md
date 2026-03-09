---
description: Comenzando con reCamera Gimbal
title: Guía de Inicio Rápido
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
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/recamera_gimbal_getting_started/
---

# Comenzando con reCamera Gimbal

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" /></div>

## Introducción

¡Bienvenido a reCamera Gimbal! La serie reCamera gimbal 2002 es el primer sistema de control de cámara de código abierto, compuesto por una pequeña cámara AI - reCamera 2002w 8GB/64GB, y una base gimbal compatible de 2 ejes con 2 motores sin escobillas. Está alimentado por un SoC RISC-V, proporcionando 1 TOPS de rendimiento AI con codificación de video a 5MP @ 30 FPS. Ofrece un paquete de autoensamblaje tipo Lego e integra la plataforma Sensecraft AI y la plataforma Node-RED para programación gráfica fluida y construcción de pipelines, permitiendo entrenamiento automático rápido, conversión de modelos y despliegue de modelos AI como Yolo v5/v8/11.

Esta guía te ayudará a configurar rápidamente tu dispositivo y comenzar a usarlo para desbloquear potentes características de AI-Vision. Ya seas principiante o usuario experimentado, este tutorial paso a paso te guiará a través de la instalación, configuración y primer uso.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱</font></span></strong>
    </a>
</div>

## Prerrequisitos

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_prerequisites.png" /></div>

- reCamera Gimbal
- Manual de usuario (dentro de la caja)
- Adaptador de corriente DC 12V a conector DC 5521 ([Enlace de compra](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html))
- USB Tipo C ([Enlace de compra](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html))
- Conexión Wi-Fi
- Destornillador eléctrico (Opcional para una mejor experiencia de ensamblaje)

## Desempaquetado

Comienza desempaquetando tu reCamera Gimbal. Dentro de la caja, deberías encontrar:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

Asegúrate de que todas las partes estén incluidas.

### Ensamblaje de Hardware

Ensambla el reCamera Gimbal según las instrucciones de ensamblaje en la caja o [Manual de usuario](#jump1).

<div style={{textAlign:'center'}}><iframe width={560} height={315} src="https://www.youtube.com/embed/VAkhDHct0p4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

:::note
Por favor asegúrate de que todos los tornillos estén apretados, de lo contrario afectará el funcionamiento del motor.
:::

### Configurar dispositivo e iniciar sesión

**Paso 1:** Después de ensamblar el Gimbal, conecta el cable USB del reCamera Gimbal a tu PC. Navega a `192.168.42.1` en el sitio web y cambia la contraseña predeterminada. Si estás usando el modo de configuración WiFi AP, navega en su lugar a `192.168.16.1`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
Por favor recuerda tu contraseña, de lo contrario todos los registros serán borrados para restablecer tu dispositivo. Si olvidas la contraseña, por favor [restablece de fábrica](https://wiki.seeedstudio.com/es/recamera_getting_started/#factory-reset) tu dispositivo.
:::

:::note
El nombre de usuario y contraseña predeterminados son ambos `recamera`. Si realizas un restablecimiento de fábrica o estás usando un dispositivo nuevo (no configurado), estos son el nombre de usuario y contraseña a usar.
:::

**Paso 2:** Aquí serás llevado al Panel de Vista Previa del Gimbal. Antes de experimentar algunos movimientos del motor con los controles en el Panel, por favor ve a `Network` para configurar Wi-Fi.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_network.png" /></div>

**Paso 3:** Conéctate a tu Wi-Fi. Después de conectarte exitosamente al Wi-Fi, haz clic en el `icono de candado` para ver la dirección IP del dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/view_wifi_IP.png" /></div>

**Paso 4:** Abre una nueva pestaña del navegador y usa esta dirección IP para acceder al dispositivo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_5.png" /></div>

**Paso 6:** Conecta primero la alimentación a la base, luego retira el cable USB tipo C para obtener los mejores movimientos del motor.

:::note

Debe conectarse el adaptador de corriente con voltaje de 12V.

:::

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/switch_power.png" /></div>

**Paso 7:** Regresa a tu navegador de `dirección ip` para visitar el panel, luego presiona el `botón Calibrar` en el lado derecho para permitir que tu Gimbal se calibre a sí mismo.

:::note

Durante la calibración, evita interferir con la operación del dispositivo ya que esto podría resultar en falla de calibración. La calibración se realiza automáticamente cada vez que el gimbal se enciende.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_calibrate.png" /></div>

### Comportamiento de Calibración

El eje de guiñada tiene un rango de movimiento de 0–360°, aunque el rango mecánico real está limitado a aproximadamente 345° debido a restricciones estructurales. Sin embargo, la cobertura de visión permanece en 360°. El eje de inclinación soporta un rango de movimiento de 0–180°.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/movement_range.png" /></div>

Al encenderse, el gimbal comenzará su secuencia de calibración automática:

- **Eje de Guiñada**: El gimbal primero rotará en sentido horario hacia su límite mecánico (posicionado sobre el cable de alimentación), luego rotará en sentido antihorario al límite opuesto. Después de alcanzar ambos extremos, regresará a la posición central.

- **Eje de Inclinación**: El gimbal se inclinará hacia arriba a la posición de 0°, luego hacia abajo para alcanzar el límite de 180°, y finalmente regresará al centro.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/calibrate.gif" /></div>

Esta secuencia completa el proceso de auto-calibración del gimbal.

También puedes calibrar ingresando este comando en la terminal

```bash
gimbal cali
```

### Solución de Problemas de Calibración

Si el gimbal no realiza la secuencia de calibración correctamente, puede haber varias causas potenciales:

- **Verificar las Limitaciones Mecánicas**: Revise manualmente el gimbal para asegurar que el rango de movimiento no esté obstruido o limitado incorrectamente.

- **Verificar la Resistencia de las Piezas Impresas en 3D**: Sienta cualquier resistencia cuando el motor se mueva. Si la resistencia es excesiva, puede necesitar ajustar la configuración PID del motor para aumentar la fuerza del motor. Puede ver [cómo ajustar PID aquí](https://wiki.seeedstudio.com/es/recamera_pid_adjustment). Alternativamente, reduzca la fricción lijando cualquier pieza o aflojando ligeramente los tornillos para mejorar el movimiento.

## Acceso Web Básico

URLs web:

- **Página de Vista Previa**: `ip_address/#/dashboard`

- **Página de Inicio**: `ip_address/#/init`
- **Espacio de Trabajo**: `ip_address/#/workspace`
- **Configuración de Red**: `ip_address/#/network`
- **Seguridad**: `ip_address/#/security`
- **Terminal**: `ip_address/#/terminal`
- **Sistema**: `ip_address/#/system`
- **Energía**: `ip_address/#/power`
- **Node-RED Original**: `ip_address:1880`

### Inicio Rápido con el Panel de Control del Gimbal

#### Control de motores

Después de que la configuración y calibración estén completas, puede controlar el gimbal usando las opciones disponibles en el panel de control. Visite `ip_address/#/dashboard` o `ip_address` para acceder al panel de vista previa del Gimbal hecho con nodos Node-RED:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

- **Joystick**: Controla la dirección de la vista de la cámara. Por ejemplo, arrastrar el joystick hacia la derecha hace que la imagen se mueva hacia la derecha en consecuencia.
- **Deslizadores**:
  - Deslizadores de Yaw y Pitch: Mueven el gimbal a un ángulo absoluto especificado.

    Rango de Yaw: 0–360°

    Rango de Pitch: 0–180°

:::note
Debido a restricciones estructurales, el rango de yaw está limitado a 0–345° y el rango de pitch está limitado a 0–180°. Cualquier valor ingresado fuera de estos rangos será ajustado al límite más cercano. Por ejemplo, si ingresa 360° para yaw, el sistema ejecutará automáticamente el movimiento como 345°.
:::

- Deslizador de Velocidad: Ajusta la velocidad de ambos motores simultáneamente.

    Rango de velocidad: 0–720°/s (grados por segundo)
- **Seguimiento Automático**: Seleccione un objeto objetivo del menú desplegable (ej., persona, carro, gato, perro, botella), luego haga clic en `Start Tracking` para iniciar el seguimiento automático de objetos. Haga clic en `Stop Tracking` para terminar el seguimiento.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_tarck.png" /></div>

- **Botón Sleep**: Mueve el gimbal a una posición absoluta de (Yaw: 180°, Pitch: 180°).

:::note

El botón Sleep no activa un modo de suspensión de bajo consumo. Simplemente reposiciona la cámara para que mire hacia abajo.

:::

- **Botón Standby**: Mueve el gimbal a una posición absoluta de (Yaw: 180°, Pitch: 90°).
- **Botón Calibrate**: Inicia el proceso de calibración del gimbal.
- **Botón Emergency Stop**: Desactiva inmediatamente ambos motores durante el movimiento.

    ⚠️ Nota: Esto no interrumpirá el proceso de calibración.

#### Parámetros del Modelo de IA

**Confidence**: La confianza en el modelo YOLO representa la probabilidad de que una caja delimitadora predicha contenga un objeto y qué tan precisa es la predicción. Es un valor entre 0 y 100.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**Intersection over Union (IoU)**: IoU es una métrica utilizada para evaluar la superposición entre la caja delimitadora predicha y la caja delimitadora de verdad fundamental. Se calcula como la relación del área de intersección de las dos cajas al área de unión de las dos cajas. El valor de IoU está típicamente en el rango de 0 a 1. Lo estandarizamos a una escala de 0 - 100, un valor de IoU de 0 representa ninguna superposición entre la caja predicha y la caja de verdad fundamental. Un valor de 100 indica una coincidencia perfecta, lo que significa que las dos cajas se superponen completamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### Inicio rápido con el Flujo del Panel de Control del Gimbal

Si desea saber cómo se hace el panel de control con nodos Node-RED, haga clic en la esquina inferior derecha o visite `ip_address/#/workspace` para acceder al espacio de trabajo Node-RED del Gimbal

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_to_workspace.png" /></div>

Entonces verá el flujo del panel de control del gimbal predeterminado, puede hacer doble clic en cada nodo para ver el detalle del nodo. El flujo del panel de control se verá así:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.png" /></div>

**Configuraciones del Modelo**:

- Los nodos deslizadores le permiten ajustar el IoU (Intersection over Union) y el umbral de confianza para el modelo de IA YOLO.

**Visualización de la UI del Panel de Control**:

- El nodo de plantilla UI muestra texto que indica la configuración actual del modelo.
- También renderiza la imagen base64 de la cámara, incluyendo cajas de detección para objetos identificados por YOLO.

**Seguimiento Automático con Objetivo**:

- Los nodos de función recuperan información sobre el objeto objetivo (ej., ancho, altura, coordenadas) y procesan estos datos usando un algoritmo de seguimiento.

- El nodo de función del algoritmo calcula el desplazamiento del centro de la caja objetivo relativo al centro de visión y envía este desplazamiento al nodo de establecer ángulo del motor para mover el gimbal a la posición deseada.

**Control Manual del Motor**:

- Use nodos deslizadores para establecer manualmente ángulos del motor, moviendo el gimbal por un grado específico.

- Alternativamente, el nodo UI del joystick permite control manual ajustando la posición del gimbal en pequeños incrementos (desplazamiento por desplazamiento).

**Botones de Acceso Directo**:

- Los nodos UI de botón envían posiciones específicas al nodo de establecer ángulo del motor, activando comportamientos como Sleep o Standby.

- Estos botones también pueden activar nodos exec ejecutando scripts bash como `gimbal cali` para calibración o `gimbal stop 1; gimbal stop 2` para una parada de emergencia.

**Subflujo Básico de Iframe Web**:

- Un subflujo iframe muestra páginas web básicas como configuración de red, información del sistema e información del dispositivo.

  - Ten en cuenta que estos pueden consumir recursos de CPU ya que renderiza la página con múltiples nodos. Se puede eliminar si no es necesario.

## Aplicar gestión en la nube y respaldo

Si deseas crear una nueva aplicación o guardar aplicaciones en el servicio en la nube de SenseCraft, puedes iniciar sesión con tu cuenta de sensecraft en la parte inferior izquierda, y luego hacer clic en el icono `+` para agregar una nueva aplicación. Entonces puedes comenzar a trabajar en tu flujo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

Puedes ver y gestionar tus aplicaciones en [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera).

:::note

Necesitas registrar una cuenta antes de poder iniciar sesión a través de la plataforma para sincronizar tus aplicaciones.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## Lista de Puertos

La siguiente lista muestra los puertos utilizados por reCamera Gimbal:

- **Puerto 22**: Utilizado para inicio de sesión SSH remoto y está abierto.
- **Puerto 53**: Asociado con la resolución de nombres de dominio DNS y es esencial para la redirección web. Está abierto por defecto.
- **Puerto 80**: Sirve como la interfaz del panel web para la visualización HTTP de la Aplicación Node-RED.
- **Puerto 554**: Empleado para transmisión de video RTSP.
- **Puerto 9090**: Destinado para acceso a terminal web, que requiere una contraseña para iniciar sesión.
- **Puerto 1880**: Dedicado a las operaciones de Node-RED.

## Actualización OTA del SO

Por favor consulta las [Instrucciones de Actualización OTA](https://wiki.seeedstudio.com/es/recamera_getting_started/#ota-upgrade-from-013-to-latest-version).

## Restablecimiento de Fábrica

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_usr_button.png" /></div>

Si deseas restablecer el dispositivo, como por ejemplo si olvidaste el código de acceso de tu dispositivo, puedes mantener presionado el botón **User** y luego conectar el dispositivo a la alimentación. Cuando la `luz roja` del dispositivo esté **constantemente encendida** en lugar de parpadeando, suelta el botón User.

## Recursos

- <span id="jump1"><a href="https://files.seeedstudio.com/gimbal/GIMBAL_Manual0311.pdf">Manual de Usuario de reCamera Gimbal</a></span>

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
