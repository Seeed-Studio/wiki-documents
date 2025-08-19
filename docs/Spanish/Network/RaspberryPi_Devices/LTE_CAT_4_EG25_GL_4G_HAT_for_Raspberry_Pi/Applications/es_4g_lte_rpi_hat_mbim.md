---
description: Guía para configurar Quectel 4G Raspberry Pi HAT en Windows usando el modo MBIM para una conexión a Internet celular estable.

title: HAT 4G para Raspberry Pi - Configuración en Modo MBIM en Windows
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - MBIM
  - 4G LTE
  
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcmd.webp
slug: /es/raspberry_pi_4g_lte_hat_mbim
last_update:
  date: 06/03/2025
  author: Guillermo
---

## Introducción

El **HAT 4G Quectel para Raspberry Pi** permite la conectividad a internet en Windows utilizando el modo MBIM (Mobile Broadband Interface Model). Este modo permite que Windows reconozca el módulo 4G como un módem celular nativo, facilitando una conexión de red estable y compatible con controladores del sistema operativo.

Esta guía te guiará a través de los pasos necesarios para configurar tu módulo Quectel en modo MBIM y conectarlo a internet en sistemas Windows 10/11.

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

## Requisitos de Software

Antes de continuar, asegúrate de que:
- Se hayan desinstalado los drivers NDIS de Quectel u otros previamente instalados.
- Se haya instalado el controlador MBIM correcto desde los enlaces proporcionados a continuación.

### Descarga del Driver MBIM
- [Descargar Quectel Windows MBIM Driver v1.3](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_Windows_MBIM_V1.3_EN.zip)
- [Obtener las últimas actualizaciones de Quectel](https://www.quectel.com/download-zone/?_sf_s=MBIM)

Una vez instalado, puedes verificar la instalación del controlador navegando a **Administración de Equipos** → **Administrador de Dispositivos**. Una instalación exitosa mostrará los dispositivos bajo "Adaptadores de red" y "Puertos (COM y LPT)", similar a la imagen siguiente:

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/devicetree_mbim.PNG" 
    style={{ width: 600}} 
  />
</div>

### Configurar el Modo MBIM

Para cambiar el módulo al modo MBIM, necesitarás la **herramienta QCOM**.

1. Descarga y abre la [herramienta QCOM](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/QCOM_V1.6.rar).
2. Conecta tu HAT 4G a la PC con Windows mediante USB y enciéndelo.
3. En QCOM, envía el siguiente comando AT para verificar el modo USB actual:
   ```
   AT+QCFG="usbnet"?
   ```
   - Si devuelve algo diferente a `"usbnet",2`, continúa con el siguiente paso.

4. Para cambiar al modo MBIM mode, envía:
   ```
   AT+QCFG="usbnet",2
   ```
5. Luego reinicia el módulo con: 

   ```
   AT+CFUN=1,1
   ```

:::note
A veces puede que el puerto AT no responda. En esos casos, utiliza el puerto DM.
:::



  <div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcommand.PNG" 
    style={{ width: 600}} 
  />
  </div>



## Conectarse a la Red

Una vez configurado en modo MBIM:
- Windows debería detectar una **Interfaz de Red Celular**.
- Ahora puedes gestionar y conectarte a redes directamente desde **Configuración de Red e Internet** en Windows.


   <div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/windows.PNG" 
    style={{ width: 600}} 
  />
  </div>

## Verificar la Configuración de Red

Para verificar si tu PC ha adquirido una conexión de red mediante MBIM:
1. Abre la terminal de comandos (CMD).

2. Ejecuta:

  ```
  ipconfig
  ```
  Deberías ver una interfaz con una dirección IP bajo "Conexión de Banda Ancha Móvil" o "Celular".

  <div style={{ textAlign: 'center' }}>
    <img 
      src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcmd.PNG" 
      style={{ width: 600}} 
    />
  </div>




## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible.  
Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>