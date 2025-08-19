---
description: Aprende a configurar una Raspberry Pi con un HAT 4G usando el módulo Quectel EG25 en modo QMI para un acceso a internet LTE confiable. Guía paso a paso para configurar, compilar y marcar con quectel-CM en Raspberry Pi.

title: HAT 4G para Raspberry Pi - Configuración en modo QMI en el sistema operativo Raspberry Pi
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - QMI
  - 4G LTE
  
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Raspberry-Pi-4G-LTE-CAT4-HAT.webp
slug: /es/raspberry_pi_4g_lte_hat_qmi
last_update:
  date: 06/03/2025
  author: Guillermo
---

## Introducción

Esta guía explica cómo configurar el acceso a Internet en una Raspberry Pi utilizando una HAT 4G equipada con un módulo Quectel EG25-G. El EG25-G es un módem LTE ampliamente utilizado que admite múltiples protocolos de red, incluido el modo QMI (Qualcomm MSM Interface), que permite una conectividad móvil de banda ancha eficiente y de alta velocidad. Siguiendo esta guía, aprenderás a configurar el módulo en modo QMI, compilar y usar la herramienta de marcación quectel-CM, establecer una conexión estable a Internet 4G en tu Raspberry Pi. Este método es ideal para aplicaciones que requieren acceso móvil a Internet, como implementaciones IoT, monitoreo remoto y computación en el borde (*edge computing*).

## Requisitos Previos

### Requisitos de Hardware


<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>    
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Requisitos de Software

#### Eliminar configuraciones de marcado previas

Antes de continuar, asegúrate de que cualquier otro método de conexión haya sido eliminado para evitar conflictos.

1. **Verifica el puerto serie correcto**

Ejecuta el siguiente comando para verificar que estás utilizando el puerto AT correcto (reemplaza `/dev/ttyUSB2` si es necesario):

```bash
sudo minicom -D /dev/ttyUSB2
```

2. **Verifica y establece el modo de red USB**

Dentro del terminal de minicom, escribe:

```bash
AT+QCFG="usbnet"?
```
- Si la respuesta es `usbnet,0`, no se necesitan cambios.

Para establecer explícitamente el modo en `0`:

```bash
AT+QCFG="usbnet",0
```

3. **Reinicia el módulo**

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

## Verificar el controlador del kernel (`qmi_wwan` y otros)

Verifica si el controlador `qmi_wwan` está cargado:

```bash
lsmod 
```

- Si ves una salida indicando que `qmi_wwan` está cargado, el controlador del kernel está activo.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/lsmod.PNG" 
    style={{ width: 600}} 
  />
</div>

## Transferencia de la herramienta de marcado

1. **Descargar y extraer la herramienta**

- Después de descargar, [descomprime el paquete](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/eg25qmi.zip) en tu directorio home.
- Navega al directorio home:
  
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

2. **Navega al directorio de la herramienta**

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

1. **Compila la herramienta de marcado**

```bash
sudo make
```
- After compilation, newly generated files (highlighted in green) will be visible, including the `quectel-CM` dial-up tool.

### Verifica los archivos compilados

```bash
ls
```
- El ejecutable `quectel-CM` debe estar presente. Esta es la herramienta necesaria para conectarse a Internet.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls3.PNG" 
    style={{ width: 600}} 
  />
</div>

## Acceso a Internet vía Marcado

1. **Inicia el proceso de marcado**

```bash
sudo ./quectel-CM
```
- Si el proceso es exitoso, verás una dirección IP asignada e información de puerta de enlace.
- Si falla en el primer intento, espera y vuelve a intentarlo; el segundo intento debería funcionar.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/connect.PNG" 
    style={{ width: 600}} 
  />
</div>

## Verificación posterior al marcado

1. **Verifica la interfaz de red**
```bash
ifconfig
```
- Busca la interfaz `wwan0` con una dirección IP asignada.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/wwan0.PNG" 
    style={{ width: 600}} 
  />
</div>

2. **Prueba la conectividad**
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

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>