---
description: Guía para configurar el Quectel 4G Raspberry Pi HAT en Windows utilizando el modo MBIM para una conexión celular estable.

title: 4G Raspberry Pi HAT - Configuración del modo MBIM en Windows
keywords:
  - Raspberry Pi Hat
  - Primeros pasos
  - IIoT
  - MBIM
  - 4G LTE
  
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcmd.webp
slug: /es/raspberry_pi_4g_lte_hat_mbim
last_update:
  date: 3/18/2025
  author: Kasun Thushara
---

## Introducción

El **Quectel 4G Raspberry Pi HAT** admite conectividad a Internet en Windows mediante el uso del modo MBIM (Mobile Broadband Interface Model). Este modo permite que Windows reconozca el módulo 4G como un módem celular nativo, facilitando una conexión de red estable y compatible con controladores.

Esta guía le mostrará los pasos necesarios para configurar su módulo Quectel en modo MBIM y conectarlo a Internet en sistemas Windows 10/11.

## Requisitos previos

### Requisitos de hardware

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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener ahora 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Requisitos de software

Antes de continuar, asegúrese de que:

- Se hayan desinstalado previamente cualquier controlador Quectel NDIS u otros controladores.
- El controlador MBIM correcto esté instalado utilizando los enlaces proporcionados a continuación.

### Descarga del controlador MBIM

- [Descargar Quectel Windows MBIM Driver v1.3](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_Windows_MBIM_V1.3_EN.zip)
- [Obtener las últimas actualizaciones de Quectel](https://www.quectel.com/download-zone/?_sf_s=MBIM)

Una vez instalado, puede verificar la instalación del controlador navegando a **Administración de equipos** → **Administrador de dispositivos**. Una instalación exitosa mostrará dispositivos en "Adaptadores de red" y "Puertos (COM y LPT)" similares a la imagen siguiente:

  <div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/devicetree_mbim.PNG"
    style={{ width: 600}}
  />
</div>

### Configurar el modo MBIM

Para cambiar el módulo al modo MBIM, necesitará la **herramienta QCOM**.

1. Descargue y abra la [herramienta QCOM](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/QCOM_V1.6.rar).
2. Conecte su 4G HAT a su PC con Windows mediante USB y enciéndalo.
3. En QCOM, envíe el siguiente comando AT para verificar el modo USB actual:

   ```
   AT+QCFG="usbnet"?
   ```

   - Si devuelve algo distinto de `"usbnet",2`, omita este paso.

4. Para cambiar al modo MBIM, envíe:

   ```
   AT+QCFG="usbnet",2
   ```

5. Luego reinicie

   ```
   AT+CFUN=1,1
   ```

:::note
En ocasiones puede que el puerto AT no responda. En esos casos, utilice el puerto DM en su lugar.
:::

  <div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcommand.PNG"
    style={{ width: 600}}
  />
</div>

## Conectarse a la red

Una vez configurado en modo MBIM:

- Windows debería detectar una **Interfaz de red celular**.
- Ahora puede administrar y conectarse a redes directamente desde **Configuración de Red e Internet** de Windows.

   <div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/windows.PNG"
    style={{ width: 600}}
  />

</div>

## Verificar la configuración de red

Para verificar si su PC ha obtenido una conexión de red mediante MBIM:

1. Abra el Símbolo del sistema.
2. Ejecute:

   ```
   ipconfig
   ```

   Debería ver una interfaz con una dirección IP bajo "Conexión de banda ancha móvil" o "Celular".

   <div style={{ textAlign: 'center' }}>

  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcmd.PNG"
    style={{ width: 600}}
  />
</div>

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes opciones de soporte y garantizar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
