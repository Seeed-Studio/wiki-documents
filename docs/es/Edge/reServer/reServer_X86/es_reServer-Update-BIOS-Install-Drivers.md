---
description: reServer X86
title: Actualización del BIOS e Instalación de Controladores
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reServer-Update-BIOS-Install-Drivers
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: Actualización del BIOS e Instalación de Controladores
category: reServer
bzurl: 
wikiurl: 
sku: 
--- -->

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Notas Importantes</p>
    <p style={{color: '#000000', fontSize: 14}}> Esto <b>borra la configuración anterior del BIOS</b>, por lo que necesitarás <b>reactivar</b> tu Windows (si usas Windows) nuevamente (borra la clave de activación, necesita Internet para activarse de nuevo). <br /></p>
  </div>
</div>

## Actualización del BIOS

Se recomienda mantener actualizado el firmware del BIOS de tu reServer para obtener el mejor rendimiento con todas las correcciones de errores. Por favor, sigue los pasos a continuación para actualizar el BIOS

### Firmware BIOS Más Reciente

**[ODYSSEY-TGL-A_v2.0a 7/7/2022 16:00:00](https://files.seeedstudio.com/wiki/reServer/ODYSSEY-TGL-A_v2.0a.zip)**

- **SHA256:** 02CC2C24E615EE2665CCCF79257709433D69C5B80326FB6DB12D0341DAC2E5F5

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/BIOS-main.png" /></div>

### Pasos para Actualizar

- **Paso 1.** Formatear la unidad flash como FAT32

- **Paso 2.** Extraer **ODYSSEY-TGL-A_v1.7a.zip**

- **Paso 3.** Copiar los 3 archivos incluidos dentro de ODYSSEY-TGL-A_v1.1a a la raíz de la Unidad Flash

- **Paso 4.** Apagar reServer si ya está ENCENDIDO

- **Paso 5.** Conectar la Unidad Flash al reServer

- **Paso 6.** Encender reServer y luego presionar la tecla **DELETE** para entrar a la configuración del BIOS

- **Paso 7.** Elegir **Save & Exit -> Boot Override -> UEFI:Built-in EFI shell**, luego **ENTER**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/BIOS-EFI-start.png" /></div>

- **Paso 8.** La placa entrará al entorno shell (solo espera, no hagas nada)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-2.jpg" /></div>

- **Paso 9.** Escribir **fs0:**

<div align="center"><img width={260} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-3.jpg" /></div>

- **Paso 10.** Escribir **dir**, y asegurarse de que el archivo sea correcto. Si no es correcto, intenta escribir **fs1:** o **fs2:** o **fs3:** luego **dir** para listar los archivos dentro

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/dir-1.png" /></div>

- **Paso 11.** Escribir **update.nsh** para flashear el BIOS

<div align="center"><img width={260} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update.nsh.png" /></div>

- **Paso 12.** Si la actualización del BIOS fue exitosa, verás el siguiente mensaje

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-6.jpg" /></div>

- **Paso 13.** Presionar el botón de encendido para APAGAR la placa

- **Paso 14.** Desconectar la alimentación DC y la batería CMOS de la placa

- **Paso 15.** Esperar unos minutos

- **Paso 16.** Conectar la alimentación DC y la batería CMOS de vuelta a la placa

- **Paso 17.** Finalmente encender la placa presionando el botón de encendido nuevamente

- **Paso 18.** Por favor espera pacientemente y **NO** desconectes la alimentación (o el hardware) para no corromper el proceso de actualización. El proceso tomará de 6 a 8 minutos, ¡siéntete libre de tomar un descanso para café!

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Atención</p>
    <p style={{color: '#000000', fontSize: 14}}>El primer arranque después de la actualización del BIOS es <b>relativamente largo</b>, por favor ten paciencia para esperar, y el SO instalado se iniciará eventualmente. Tomará <b>alrededor de 6 a 8 minutos</b>.</p>
  </div>
</div>

## Instalación de Controladores

Si estás usando Windows en el reServer, se recomienda instalar los controladores relevantes para una mejor funcionalidad del sistema.

Los controladores incluyen:

- Controlador de Audio de Alta Definición Realtek
- Software de Dispositivo de Chipset Intel®
- Controlador de Gráficos Intel®
- Controlador de Filtro de Eventos HID Intel®
- Controlador de Motor de Seguridad y Gestión Convergente Intel®
- Controlador de Controlador Host Serial IO Intel®
- Controlador WiFi
- Controlador Ethernet
- Controlador Bluetooth

Por favor, sigue los pasos a continuación para instalar los controladores mencionados

- **Paso 1.** Descarga [este archivo](https://files.seeedstudio.com/wiki/reServer/reServer-Drivers.zip) y extrae el archivo **reServer-drivers.zip**

- **Paso 2.** Procede con los pasos a continuación

### Controlador de Audio de Alta Definición Realtek

- **Paso 1.** Extrae **audio_realtek_6.0.9057.1_w1064.zip**

- **Paso 2.** Abre **audio_realtek_6.0.9057.1_w1064**

- **Paso 3.** Haz doble clic en **Setup.exe**

### Software de Dispositivo de Chipset Intel®

- **Paso 1.** Extrae **chipset-10.1.18460.8229-public-mup.zip**

- **Paso 2.** Abre **1_chipset-10.1.18460.8229-public-mup**

- **Paso 3.** Haz doble clic en **SetupChipset.exe**

### Controlador de Gráficos Intel®

- **Paso 1.** Extrae **Graphics Driver.zip**

- **Paso 2.** Haz doble clic en **igfx_win_101.1069.exe**

### Controlador de Filtro de Eventos HID Intel®

- **Paso 1.** Extrae **Intel(R)_HIDEventFilterDriver-2.2.1.384_20H1Certified.zip**

- **Paso 2.** Navega a `Intel(R)_HIDEventFilterDriver-2.2.1.384_20H1Certified > Installer`

- **Paso 3.** Haz doble clic en **Setup.exe**

### Controlador de Motor de Seguridad y Gestión Convergente Intel®

- **Paso 1.** Extrae **intel_(r)_csme_15.0.0.1318v3_b0_cons.zip**

- **Paso 2.** Navega a `4_intel_(r)_csme_15.0.0.1318v3_b0_cons > intel_(r)_csme_15.0.0.1318v3_b0_cons > MEI-Only Installer MSI`

- **Paso 3.** Haz doble clic en **MEISetup.exe**

### Controlador de Controlador Host Serial IO Intel®

- **Paso 1.** Extrae **SerialIO-Win10-30.100.2129.8.zip**

- **Paso 2.** Haz doble clic en **SetupSerialIO.exe**

### Controlador WiFi

- **Paso 1.** Extrae **WiFi-22.90.0-Driver64-Win10-Win11.zip**

- **Paso 2.** Haz doble clic en **WiFi-22.90.0-Driver64-Win10-Win11.exe**

### Controlador Ethernet

- **Paso 1.** Extrae **Wired_driver_26.6_x64.zip**

- **Paso 2.** Haz doble clic en **Wired_driver_26.6_x64.exe**

### Controlador Bluetooth

- **Paso 1.** Extrae **Wireless Bluetooth.zip**

- **Paso 2.** Haz doble clic en **BT-22.90.2-32-64UWD-Win10-Win11.exe**

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
