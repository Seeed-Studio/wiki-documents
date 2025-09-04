---
description: Aprende cómo configurar una Raspberry Pi con un HAT 4G usando el módulo Quectel EG25 en modo QMI para acceso confiable a internet LTE. Guía paso a paso para configurar, compilar y marcar con quectel-CM en Raspberry Pi.

title: HAT 4G para Raspberry Pi - Configuración en Modo QMI en Raspberry Pi OS
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - QMI
  - 4G LTE
  
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Raspberry-Pi-4G-LTE-CAT4-HAT.webp
slug: /es/raspberry_pi_4g_lte_hat_qmi
last_update:
  date: 3/20/2025
  author: Kasun Thushara
---

## Introducción

Esta guía explica cómo configurar el acceso a internet en una Raspberry Pi usando un HAT 4G equipado con un módulo Quectel EG25-G. El Quectel EG25-G es un módem LTE ampliamente utilizado que soporta múltiples protocolos de red, incluyendo el modo QMI (Qualcomm MSM Interface), que permite conectividad de banda ancha móvil eficiente y de alta velocidad. Siguiendo esta guía, aprenderás cómo configurar el módulo en modo QMI, compilar y usar la herramienta de marcado quectel-CM, y establecer una conexión estable de internet 4G en tu Raspberry Pi. Este método es ideal para aplicaciones que requieren acceso a internet móvil, como despliegues IoT, monitoreo remoto y computación en el borde.

## Prerrequisitos

### Requisitos de Hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>HAT 4G LTE CAT4 para Raspberry Pi</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Prerrequisitos de Software

#### Eliminar Configuraciones de Marcado Previas

Antes de proceder, asegúrate de que cualquier otro método de marcado sea eliminado para evitar conflictos.

1. **Verificar el Puerto Serie Correcto**

Ejecuta el siguiente comando para verificar que estás usando el puerto de comandos AT correcto (reemplaza `/dev/ttyUSB2` si es necesario):

```bash
sudo minicom -D /dev/ttyUSB2
```

2. **Verificar y Configurar el Modo de Red USB**

Dentro del terminal minicom, ingresa:

```bash
AT+QCFG="usbnet"?
```

- Si la respuesta es `usbnet,0`, no se necesitan cambios.

Para establecer explícitamente el modo a `0`:

```bash
AT+QCFG="usbnet",0
```

3. **Reiniciar el Módulo**

Reinicia el módulo usando:

```bash
AT+CFUN=1,1
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbnet_qmi.PNG"
    style={{ width: 600}}
  />
</div>

## Verificar el Controlador del Kernel (qmi_wwan y otros)

Verificar si el controlador `qmi_wwan` está cargado:

```bash
lsmod 
```

- Si ves una salida que indica que `qmi_wwan` está cargado, el controlador del kernel está activo.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/lsmod.PNG"
    style={{ width: 600}}
  />
</div>

## Trasplantando la Herramienta de Marcado

1. **Descargar y Extraer la Herramienta**

- Después de descargar, [descomprime el paquete](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/eg25qmi.zip) en tu directorio home.
- Navega a tu directorio home:
  
```bash
ls
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls1.PNG"
    style={{ width: 600}}
  />
</div>

- Deberías ver una carpeta llamada `eg25qmi`.

2. **Navegar al Directorio de Herramientas**

```bash
cd eg25qmi
ls
```

- Verás los archivos fuente para la herramienta de marcado.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls2.PNG"
    style={{ width: 600}}
  />
</div>

## Compilación

1. **Compilar la Herramienta de Marcado**

```bash
sudo make
```

- Después de la compilación, los archivos recién generados (resaltados en verde) serán visibles, incluyendo la herramienta de marcado `quectel-CM`.

### Verificar los Archivos Compilados

```bash
ls
```

- El ejecutable `quectel-CM` debería estar presente. Esta es la herramienta de marcado requerida para conectarse a internet.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls3.PNG"
    style={{ width: 600}}
  />
</div>

## Acceso a Internet por Marcado

1. **Iniciar Marcado**

```bash
sudo ./quectel-CM
```

- Si el proceso de marcado es exitoso, verás una dirección IP asignada e información de puerta de enlace.
- Si el primer intento falla, espera y vuelve a intentar; el segundo intento debería tener éxito.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/connect.PNG"
    style={{ width: 600}}
  />
</div>

## Verificación Post-Marcado

1. **Verificar Interfaz de Red**

```bash
ifconfig
```

- Busca la interfaz `wwan0` con una dirección IP.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/wwan0.PNG"
    style={{ width: 600}}
  />
</div>

2. **Probar Conectividad**

```bash
ping -I wwan0 8.8.8.8
```

- Un ping exitoso confirma que la conexión está activa.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ping.PNG"
    style={{ width: 600}}
  />
</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
