---
description: Flashea o migra un dispositivo Jetson compatible de Seeed Studio a JetPack 7.2, usando Seeed Jetson DevelopTool para el flujo de trabajo recomendado de flasheo completo y una carga útil OTA validada basada en imagen para despliegues gestionados.
title: Flasheo y actualización OTA a JetPack 7.2
keywords:
  - JetPack 7.2
  - Jetson Linux 39.2
  - Seeed Jetson DevelopTool
  - Flash Center
  - OTA
  - NVIDIA Jetson
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-flash-center.png
slug: /flash_and_ota_jetpack_7.2
last_update:
  date: 07/31/2026
  author: Seeed Studio
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/es/flash_and_ota_jetpack_7.2/
---

# Flasheo y actualización OTA a JetPack 7.2

Esta guía es la entrada principal de instalación de JetPack 7.2 para los productos NVIDIA Jetson de Seeed Studio compatibles. Explica cuándo realizar un flasheo limpio, cuándo es apropiada una actualización OTA basada en imagen y cómo usar **Seeed Jetson DevelopTool Flash Center** como ejemplo guiado de flasheo.

:::info Línea base de JetPack 7.2
JetPack 7.2 se basa en **Jetson Linux 39.2**, **Ubuntu 24.04** y **kernel de Linux 6.8**. Siempre selecciona una imagen creada para la combinación exacta de módulo Jetson y carrier board de Seeed.
:::

## Elige primero el método de actualización

| Método | Uso recomendado | Impacto en los datos | Estado de JetPack 7.2 |
| --- | --- | --- | --- |
| Flasheo completo con Seeed Jetson DevelopTool | Dispositivos nuevos, sistemas de desarrollo, migración de JetPack 6.x a 7.2, recuperación o sustitución de BSP | El almacenamiento del sistema de destino se borra | **Predeterminado recomendado** |
| Flasheo manual de BSP | Desarrollo de BSP personalizado, automatización de fábrica o resolución de problemas fuera de la GUI | El almacenamiento del sistema de destino se borra | Compatible cuando se usa el BSP y la configuración de placa Seeed/NVIDIA correctos |
| OTA basada en imagen | Flotas de producción gestionadas con una imagen de origen validada, imagen de destino, configuración de placa, diseño de particiones y plan de reversión | Los datos de la aplicación pueden conservarse si se diseña y prueba explícitamente | Usar solo cuando una carga útil OTA de JetPack 7.2 esté validada para el producto y la versión de origen exactos |
| `apt upgrade` entre versiones principales de JetPack | No recomendado | Impredecible | No usar como método de migración de JetPack 6.x a 7.2 |

:::caution
Para una migración importante como de JetPack 6.x a JetPack 7.2, usa un flasheo completo a menos que Seeed publique o valide explícitamente una carga útil OTA para tu producto exacto, versión L4T de origen, dispositivo de almacenamiento y diseño de particiones.
:::

## Vídeo: Flujo de trabajo de flasheo con Seeed Jetson DevelopTool

El siguiente vídeo muestra Seeed Jetson DevelopTool con una plataforma NVIDIA Jetson AGX Thor. El flujo de trabajo de Flash Center también es representativo de los productos Seeed Jetson compatibles, pero los modelos de dispositivo y versiones de firmware disponibles dependen del catálogo actual de DevelopTool.

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/SjXyQ3abxms" title="Seeed Jetson DevelopTool with AGX Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Parte 1: Flasheo completo con Seeed Jetson DevelopTool

### Antes de empezar

- Confirma que el [selector de flasheo de JetPack](/es/flash/jetpack_to_selected_product/) o el wiki del producto enumeran una imagen JetPack 7.2 / L4T 39.2 para tu dispositivo.
- Usa un host Ubuntu estable. Se recomienda Linux nativo para la conexión de recuperación USB más fiable.
- Prepara al menos 20 GB de almacenamiento libre en el host; puede necesitarse espacio adicional para los paquetes BSP descargados y extraídos.
- Usa un cable de datos USB conectado directamente al puerto correcto de recuperación/flasheo.
- Haz copia de seguridad de los datos de usuario, contenedores, archivos de calibración, configuración de aplicaciones, claves de cifrado y fuentes de BSP personalizadas.
- Desconecta los dispositivos Jetson en modo de recuperación que no sean necesarios para que no se pueda seleccionar el objetivo equivocado.

:::warning
El flasheo borra el almacenamiento del sistema Jetson seleccionado. Confirma el dispositivo de destino, la carrier board, el SKU del módulo y el destino de almacenamiento antes de empezar.
:::

### Paso 1: Instalar y lanzar DevelopTool

Instala el paquete de Python publicado:

```bash
python3 -m pip install --upgrade seeed-jetson-developer
seeed-jetson-developer
```

Como alternativa, instálalo desde el código fuente:

```bash
git clone https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool.git
cd Seeed-Jetson-DevelopTool
python3 -m pip install .
seeed-jetson-developer
```

Consulta [Instalación de DevelopTool](/es/jetson_developtool_installation/) para la configuración completa del host.

### Paso 2: Abrir Flash Center

Abre **Flash Center** en Seeed Jetson DevelopTool.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-flash-center.png" style={{width:800, height:'auto'}}/>
</div>

### Paso 3: Seleccionar el dispositivo exacto y la imagen JetPack 7.2

Selecciona el producto Seeed o la configuración de carrier board exactos y luego selecciona **L4T 39.2 / JetPack 7.2** cuando esté disponible para ese objetivo.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-select-device.png" style={{width:800, height:'auto'}}/>
</div>

:::caution
No selecciones una placa con un nombre similar. Un módulo Jetson puede conectarse eléctricamente a diferentes carrier boards que requieren distintos device trees, ajustes de pinmux, configuraciones de alimentación y controladores de periféricos.
:::

Si L4T 39.2 no se ofrece para el producto seleccionado, detente y comprueba:

- [Flashear BSP con JetPack al Jetson seleccionado](/es/flash/jetpack_to_selected_product/)
- [Dispositivos compatibles con DevelopTool](/es/jetson_developtool_supported_devices/)
- El wiki de flasheo específico del producto enlazado desde el [Centro de recursos de JetPack 7.2](/es/jetpack_7_2_resource_hub/)

### Paso 4: Descargar, verificar y extraer el BSP

Haz clic en **Download / Extract BSP**. DevelopTool descarga el paquete de firmware, admite descargas reanudables, verifica la suma de comprobación cuando se proporciona y extrae el BSP.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-prepare-bsp.png" style={{width:800, height:'auto'}}/>
</div>

No continúes si la verificación de la descarga o la extracción fallan. Elimina un paquete incompleto solo después de confirmar que DevelopTool no puede reanudarlo.

### Paso 5: Poner el Jetson en modo Force Recovery

Usa el botón de recuperación específico del producto o la secuencia de jumpers, conecta el puerto USB de recuperación y enciende o reinicia el dispositivo según lo indicado por su guía de hardware.

En el host, verifica que el USB de recuperación de NVIDIA esté presente:

```bash
lsusb | grep 0955
```

Los IDs de dispositivo de recuperación de Jetson Orin suelen coincidir con la familia `0955:7x23`. Jetson Thor usa un ID de recuperación diferente. El valor exacto depende del módulo.

Consulta [Conectar dispositivo](/es/jetson_developtool_connect_device/) para el flujo de trabajo de recuperación USB de DevelopTool.

### Paso 6: Detectar y confirmar el objetivo

Haz clic en **Detect Device**. Antes de iniciar el flasheo, confirma:

- Producto Seeed y carrier board seleccionados
- Módulo Jetson y configuración de memoria
- Imagen L4T 39.2 / JetPack 7.2
- Dispositivo de almacenamiento de destino
- Dispositivo USB de recuperación
- Finalización de la copia de seguridad

### Paso 7: Iniciar el flasheo

Haz clic en **Start Flash** y mantén tanto el USB como la alimentación conectados hasta que el proceso termine.

:::warning
No reintentes automáticamente un flasheo fallido sin revisar primero el registro de errores. Para errores de USB, vuelve a poner el dispositivo en modo Force Recovery, reconéctalo directamente al host y detecta de nuevo el objetivo.
:::

### Paso 8: Completar el primer arranque

Después de que el dispositivo arranque:

1. Completa la configuración de primer arranque de Ubuntu o usa el [flujo de trabajo de inicialización remota de DevelopTool](/es/jetson_developtool_remote_development/) para un dispositivo sin pantalla.
2. Configura la red y el acceso SSH.
3. Restaura los datos de la aplicación solo después de que el sistema base supere la validación.

### Paso 9: Verificar JetPack 7.2

Ejecuta:

```bash
head -n 1 /etc/nv_tegra_release
cat /etc/os-release
uname -r
nvcc --version
dpkg -l | grep -E 'nvidia-jetpack|tensorrt|libnvinfer|cudnn'
```

Confirma la siguiente línea base:

- Jetson Linux informa de la familia de versiones R39.2.
- El sistema de archivos raíz informa Ubuntu 24.04.
- El kernel informa la línea de kernel 6.8 de JetPack 7.2 suministrada por la imagen.
- Los paquetes CUDA y TensorRT coinciden con la imagen JetPack de destino.

Luego valida Ethernet, Wi-Fi, cámara, GMSL, CAN, USB, M.2, GPIO, almacenamiento, control del ventilador y los modos de energía requeridos.

## Parte 2: OTA basada en imagen para JetPack 7.2

La OTA basada en imagen actualiza un Jetson desplegado sin conectar cada dispositivo a un host de flasheo. Es un flujo de trabajo de ingeniería de releases, no una actualización genérica de paquetes.

:::danger Las cargas útiles actuales del repositorio no son cargas útiles de JetPack 7.2
Las cargas útiles OTA listas para usar documentadas actualmente en [Desplegar OTA en reComputer](/es/deploy_ota_on_recomputer/) actualizan sistemas JetPack 5.1.3 a JetPack 6.2. **No** apliques esas cargas útiles a dispositivos con JetPack 7.2 ni las uses como paquetes de JetPack 6.x a 7.2.
:::

### Entradas de compatibilidad OTA requeridas

Una carga útil OTA de JetPack 7.2 debe generarse y validarse para todos los siguientes elementos:

- Producto Seeed y carrier board exactos
- SKU de módulo Jetson exacto y configuración de memoria
- Versión L4T de origen exacta y estado del sistema de archivos raíz
- BSP de destino L4T 39.2 exacto
- Almacenamiento de arranque y diseño de particiones
- Secure Boot, cifrado de disco y configuración de claves
- Cambios personalizados en device tree, kernel, módulos de kernel, firmware y sistema de archivos raíz
- Lista de preservación de datos y espacio libre disponible
- Comportamiento de recuperación ante pérdida de energía y reversión

Si alguna de estas entradas difiere, crea y valida una carga útil independiente.

### Flujo de desarrollo OTA recomendado

1. Reproduce tanto la imagen de origen como la imagen JetPack 7.2 de destino a partir de entradas BSP bajo control de versiones.
2. Flashea dispositivos representativos con la imagen de origen y registra el estado de particiones, gestor de arranque, almacenamiento y seguridad.
3. Genera la carga útil OTA basada en imagen usando las herramientas OTA de Jetson Linux 39.2 y el paquete de soporte de placa de Seeed correspondiente.
4. Firma la carga útil cuando el modelo de seguridad de producción lo requiera.
5. Define solo los datos que deben sobrevivir a la actualización; haz una copia de seguridad independiente antes del primer despliegue en producción.
6. Prueba los escenarios de actualización normal, descarga interrumpida, instalación interrumpida, poco almacenamiento, pérdida de energía y reversión.
7. Despliega primero en un pequeño grupo canario antes de ampliar el despliegue.
8. Verifica Jetson Linux, ranuras de arranque, servicios de aplicación, periféricos y versiones del runtime de IA después del reinicio.

Las páginas existentes [Deploy OTA on reComputer](/es/deploy_ota_on_recomputer/) y [Updating Jetson Linux with Image-Based OTA](/es/updating_jetpack_with_ota/) son referencias útiles para la estructura de generación de paquetes y el flujo de trabajo en el dispositivo de `nv_ota_start.sh`. Sus comandos específicos de versión deben sustituirse por los paquetes correctos de Jetson Linux 39.2, la configuración de la placa y los datos de partición.

### Lista de verificación de validación OTA en el dispositivo

Antes de aplicar el payload:

```bash
df -h
lsblk -f
head -n 1 /etc/nv_tegra_release
systemctl --failed
```

Después del reinicio de la OTA:

```bash
head -n 1 /etc/nv_tegra_release
uname -r
systemctl --failed
journalctl -b -p err
```

Verifica también los datos de la aplicación, la identidad de red, los certificados del dispositivo, los volúmenes de contenedores, las interfaces de hardware y el watchdog de producción.

## Lista de verificación de migración de JetPack 6.x a 7.2

- Reconstruye los módulos de kernel out-of-tree con los headers del kernel de JetPack 7.2.
- Reconstruye los controladores de cámara y GMSL para el BSP de destino.
- Reconstruye las extensiones CUDA y las aplicaciones nativas para CUDA 13.
- Reconstruye los motores TensorRT serializados en JetPack 7.2.
- Recrea los entornos de Python en lugar de copiar el directorio de entorno de JetPack 6.x.
- Revalida los contenedores con el runtime de contenedores NVIDIA de JetPack 7.2.
- Restaura los [módulos inalámbricos de JetPack 7.2](/es/jetpack72_ax210_ax200_wifi_setup_guide/) cuando el hardware lo requiera.
- Valida el modo de energía original antes de habilitar `MAXN_SUPER` u otro modo de mayor rendimiento.
- Registra memoria, latencia, rendimiento, temperatura y consumo de energía antes del despliegue en producción.

## Solución de problemas

### DevelopTool no detecta ningún dispositivo en modo Recovery

- Confirma que el cable USB admite datos.
- Usa el puerto USB dedicado para recovery/flashing.
- Repite la secuencia de Force Recovery específica del producto.
- Ejecuta `lsusb | grep 0955` en el host.
- Desconecta otros dispositivos Jetson en modo recovery.
- Prefiere Ubuntu nativo si el passthrough USB de WSL2 es inestable.

### La imagen requerida de JetPack 7.2 no aparece en la lista

No selecciones otra carrier board como solución temporal. Revisa el selector central de flashing y la wiki del producto, luego espera o solicita un BSP validado para el hardware exacto.

### El dispositivo no arranca después del flashing

- Confirma que la imagen coincide con la carrier board y el SKU del módulo.
- Retira el jumper de Force Recovery o suelta el botón de recovery.
- Apaga y vuelve a encender el dispositivo.
- Captura el log de arranque por serie UART.
- Vuelve a entrar en modo recovery y revisa el log de flashing de DevelopTool antes de volver a flashear.

### La OTA falla o no reinicia en JetPack 7.2

- Confirma que las versiones de origen y destino del payload coinciden exactamente con el dispositivo.
- Confirma que hay suficiente almacenamiento libre para staging e instalación.
- Revisa los logs de la OTA antes de reintentar.
- Restaura la imagen completa conocida como buena si la ruta de rollback probada no puede recuperar el dispositivo.

## Recursos relacionados

- [Centro de recursos de JetPack 7.2](/es/jetpack_7_2_resource_hub/)
- [Flashear BSP con JetPack al Jetson seleccionado](/es/flash/jetpack_to_selected_product/)
- [Flashear firmware con DevelopTool](/es/jetson_developtool_flash_firmware/)
- [Dispositivos compatibles con DevelopTool](/es/jetson_developtool_supported_devices/)
- [Deploy OTA on reComputer](/es/deploy_ota_on_recomputer/)
- [Updating Jetson Linux with Image-Based OTA](/es/updating_jetpack_with_ota/)
- [Análisis detallado de JetPack 7.2](/es/jetpack72_deep_dive/)

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
