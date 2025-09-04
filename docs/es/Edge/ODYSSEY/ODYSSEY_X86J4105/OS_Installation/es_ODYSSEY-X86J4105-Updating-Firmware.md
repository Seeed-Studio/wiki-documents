---
description: ODYSSEY - X86J41x5
title: Actualización de Firmware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-X86J4105-Updating-Firmware
last_update:
  date: 03/16/2023
  author: Lakshantha

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl:
--- -->

Este tutorial demuestra cómo actualizar el BIOS y el firmware del EC (Controlador Embebido) para el ODYSSEY - X86.

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>PRESTA ATENCIÓN</p>
    <p style={{color: '#000000', fontSize: 15}}> Como <b>el firmware proporcionado en la Wiki es compatible con J4105/J4125-V1</b>, actualizar el firmware del BIOS desde la Wiki en una placa J4125-V2 causará que la placa se bloquee. Por favor asegúrate de que tienes la versión correcta de ODYSSEY.</p>
  </div>
</div>

## Requisitos de Hardware

- Una Computadora Funcional

- Una Unidad USB

- Un Monitor

- Un Teclado

## Cómo Actualizar el BIOS

El BIOS es también como un SO y puede ser actualizado para corregir errores y mejorar el rendimiento del ODYSSEY - X86J41x5. Aquí están las instrucciones de cómo actualizar la versión del BIOS en ODYSSEY - X86J41x5.

### Versión Actual Más Reciente del BIOS y Registro de Cambios

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Notas Importantes</p>
    <p style={{color: '#000000', fontSize: 14}}> 1. <b>Borra la configuración antigua del BIOS</b>, por lo que necesitarías <b>reactivar</b> tu Windows (si usas Windows) nuevamente (borra la clave de activación, necesita Internet para activar nuevamente). <br /><br /> 2. Si tienes la <b>versión sin EMMC de ODYSSEY-X86</b>, antes de actualizar el BIOS, Por favor asegúrate de <b>deshabilitar eMMC en la Configuración del BIOS</b> Antes y Después de las actualizaciones.</p>
  </div>
</div>

> Puedes verificar en la página principal del BIOS las versiones del BIOS y del Firmware del EC.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-OS/SD-BS-CJ41G-300-101-H.jpg" /></div>

### Firmware del BIOS Más Reciente

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>PRESTA ATENCIÓN</p>
    <p style={{color: '#000000', fontSize: 15}}> Como <b>el firmware proporcionado en la Wiki es compatible con J4105/J4125-V1</b>, actualizar el firmware del BIOS desde la Wiki en una placa J4125-V2 causará que la placa se bloquee. Por favor asegúrate de que tienes la versión correcta de ODYSSEY.</p>
  </div>
</div>

<br />

**[SD-BS-CJ41G-300-101-K 07/26/2022 15:00:00](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-K.zip)**

- Mejora la estabilidad general.

**Nota:** Si quieres el BIOS anterior con **función de bifurcación habilitada**, por favor contacta techsupport@seeed.io

Con la función de bifurcación, podrás usar el M.2 M-Key para 4 PCIe x1. Esto te permite conectar cuatro dispositivos PCIe x1 diferentes al M.2 como múltiples puertos de red, múltiples SSDs y otros dispositivos de expansión. Con el BIOS normal sin función de bifurcación, M.2 M-Key puede ser usado para solo un PCIe x4.

>**BIOS Histórico:**

**[SD-BS-CJ41G-300-101-H 08/16/2021 15:00:00](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-H.zip)**

- **SHA256:** 9ea30178b4ef8453c6f24f037b4b3352ac6d214c7c22f94985428bcb23a178c2

- Mejora la estabilidad general.

> **[SD-BS-CJ41G-300-101-F 04/16/2021 01:20:07](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-F.zip)**

> - **SHA256:** 53711DBF9FB6ABE564BE1C7A870840F8B87CAA42239448869D87C08C1BDF0EC5

>    1. Mejora la estabilidad general.

> **[SD-BS-CJ41G-300-101-C 03/11/2021 16:28:07](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-C.zip)**

> - **SHA256:** 12f4ce1ab81008525138fcd7d830e18dc13936f3ce4a51e17c314fc55debe480

>    1. Corrige error: carga en otros SO distintos a Windows cuando se configura para cargar otros.

> **[SD-BS-CJ41G-M-101-K 12/31/2020 20:34:37](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-M-101-K.zip)**

> - **SHA256:** 7208d39c4f77a4837a0a1072dce45c7bc8feba28597522ea036778a9c09aa61a

>    1. Agregado **Secure Boot**.
>    2. Agregado **Wake on LAN**.
>    3. Corrige reinicio en la página de configuración del BIOS bajo entorno Linux (Ej. `systemctl reboot --firmware-setup`).
>    4. Corrige problema de luz Wake on Lan en Linux.

> **[SD-BS-CJ41G-M-101-G 08/31/2020 14:01:20](http://files.seeedstudio.com/wiki/X86-BIOS/SD-BS-CJ41G-M-101-G.zip)**

> **SHA256:** eb932b69435d26a5b076c485c90e4289a697681ac092c18e85c86804e3fe4206

>1. En el Menú BIOS, **Configuración** -> **Chipset** -> **Control de Ventilador**, se añadieron las opciones **Siempre Encendido**.

>**[SD-BS-CJ41G-M-101-E 01/07/2020 14:03:11](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-M-101-E.zip)**

>**SHA256:** 98bb25d6d32250fb10bf047f5902630b82a8560020fb4336d7723b4dfb3f9df2

>1. Se corrigió el problema de visualización incompleta de la pantalla del logo de Seeed al inicio.

:::note
El BIOS más reciente admite la **función de auto-flash**, donde solo necesitas colocar los archivos en la **ubicación raíz de una USB en formato FAT32** y **seleccionar la unidad USB como opción de arranque**. Entrará automáticamente en el proceso de flasheo.
:::

### Paso 1 - Descargar la versión más reciente del BIOS

Descarga la versión más reciente del BIOS desde [**aquí**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-H.zip).

### Paso 2 - Preparar USB de arranque

Al igual que crear un USB de arranque para instalar un SO, formatea el USB al sistema de archivos `FAT32`. Esta vez, simplemente descomprime el archivo descargado y copia el contenido al USB.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios-files.png
" /></div>

### Paso 3 - Actualizar BIOS

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Atención</p>
    <p style={{color: '#000000', fontSize: 14}}>El primer arranque después de la actualización del BIOS es <b>relativamente largo</b>, por favor ten paciencia para esperar, y el SO instalado se iniciará eventualmente. Tomará <b>alrededor de 3 ~ 5 minutos</b>.</p>
  </div>
</div>

Conecta el USB al ODYSSEY - X86J41x5 y arranca siguiendo los pasos a continuación:

- Mantén presionada la tecla `F7` para entrar a la **Pantalla del Administrador de Arranque**. Selecciona `UEFI: Built-in EFI Shell` como dispositivo de arranque y presiona `Enter`.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios1.jpg" /></div>

- Espera un par de segundos para entrar al shell EFI

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios2.jpg" /></div>

- Verás el siguiente mensaje

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios3.jpg" /></div>

- Escribe **BIOS.nsh** y presiona **ENTER** para iniciar el proceso de actualización

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios4.jpg" /></div>

- Si la actualización del BIOS fue exitosa, verás la siguiente salida

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios5.jpg" /></div>

### Paso 4 - Reiniciar

- Cuando el BIOS esté actualizado, **presiona el botón ON/OFF**, y deberías ver que la luz azul se apaga.

- **Desconecta el conector de alimentación DC y la batería RTC** del ODYSSEY-X86.

- Espera un par de minutos

- Conecta la batería RTC y el conector de alimentación DC de vuelta al ODYSSEY-X86.

- **Presiona el botón ON/OFF y espera pacientemente**. Deberías ver que la luz azul se enciende.

### Paso 5 - Esperar Pacientemente

Por favor espera pacientemente y **NO** desconectes la alimentación (o el hardware) para corromper el proceso de actualización. El proceso tomará **6 ~ 8 minutos**, ¡siéntete libre de tomar un descanso para café!

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Atención</p>
    <p style={{color: '#000000', fontSize: 14}}>El primer arranque después de la actualización del BIOS es <b>relativamente largo</b>, por favor ten paciencia para esperar, y el SO instalado se iniciará eventualmente. Tomará <b>alrededor de 6 ~ 8 minutos</b>.</p>
  </div>
</div>

## Cómo actualizar el Controlador Embebido

El X86 también tiene un controlador embebido que puede ser actualizado. Actualizar el EC tiene el mismo procedimiento que actualizar el BIOS (actualización automática):

1. Descarga los archivos de firmware.

2. Guárdalos en la ubicación raíz de una unidad USB formateada en FAT32.

3. Inicia ODYSSEY-X86 y presiona **F7** para entrar al **Modo de Selección de Arranque**

4. Elige la unidad flash conectada (si hay 2 opciones para la unidad flash, elige la que comience con **UEFI**)

5. Espera y automáticamente iniciará el proceso de flasheo.

6. Reinicia el dispositivo cuando termine.

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/r7M4T-HOZ20" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### Último Firmware EC

[**SD-EC-CJ41G-M-101-R 07/26/2022 17:00:00**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-R.zip)

1. **Corrección de error**: Aumenta la estabilidad general.

>**Historial de Firmware EC:**

[**SD-EC-CJ41G-M-101-Q 10/12/2021 17:00:00**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-Q.zip)

- **SHA256:** 6009005FF61A64A580F0862343CED1E1E8B4DE8625E326510582063D6E20BCE4

1. **Corrección de error**: Aumenta la estabilidad general.

[**SD-EC-CJ41G-M-101-O 08/16/2021 15:00:00**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-O.zip)

> - **SHA256:** a08605b8b76bda6a50b64e64c4a9b256297d393f7139ffb2525cc93b28556f13

> 1. **Corrección de error**: Aumenta la estabilidad general.

> [**SD-EC-CJ41G-M-101-M 04/16/2021 01:20:07**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-M.zip)

> - **SHA256:** DB6E1F77D6EB4B9A79DDAF6E7A55052B7BE6E63B8339C7B948FF111E5C9CA8AD

> 1. **Corrección de error**: Aumenta la estabilidad general.

> [**SD-EC-CJ41G-M-101-K 03/23/2021 10:57:32**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-K.zip)

> - **SHA256:** 5e479185398121b1913ada3cff03264ea1522196b53f34c9ace77bd1f3ecc47e

> 1. **Corrección de error**: Aumenta la estabilidad del firmware EC.

> [**SD-EC-CJ41G-M-101-J 02/02/2021 15:39:11**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-J.zip)

> - **SHA256:** 4ab099f45439f8f6ec14e25ae50a64f878eed4c998e39000e17f2047df6bbb83

> 1. **Corrección de error**: Apagar durante la página de configuración del BIOS causa que el ODYSSEY necesite reiniciar la alimentación para poder encenderse nuevamente.

> [**SD-EC-CJ41G-M-101-I 12/31/2020 20:34:37**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-I.zip)

> - **SHA256:** 94f664401120183238c5eaa41ea267b240dd5836fa879c568bf3275bca508c52

> 1. Optimiza la lógica de control del ventilador

>**[SD-EC-CJ41G-M-101-C 08/31/2020 14:01:20](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-C.zip)**

>- **SHA256:** 4b7ed82357eb608c3ec00f6f5f0358a35e63b327ae33855eb5e7608814f8df6a

> 1. Optimiza el problema de temperatura incorrecta de encendido y apagado del ventilador.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
