---
description: Instalar Ubuntu en SenseCAP M4 vía USB
title: Instalar Ubuntu en SenseCAP M4 vía USB
keywords:
  - SenseCAP Network
  - SenseCAP M4
  - Ubuntu
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /install_ubuntu_on_sensecap_m4
sku: E23010412, 110991885, 110991865
last_update:
  date: 08/18/2026
  author: Zhai Chenyang
createdAt: '2026-08-18'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/es/install_ubuntu_on_sensecap_m4/
---

# Instalar Ubuntu en SenseCAP M4 vía USB

Esta guía explica cómo instalar Ubuntu 24.04 en el SenseCAP M4 usando una unidad USB.

## Requisitos de instalación

1. Una memoria USB con al menos 4 GB de almacenamiento
2. Un ordenador con Microsoft Windows XP o posterior
3. Rufus, una herramienta gratuita y de código abierto para crear USB de arranque
4. Un archivo de imagen ISO de Ubuntu

## 1. Descargar la imagen ISO de Ubuntu

Haz clic [aquí](https://releases.ubuntu.com/24.04/) para descargarla.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-01.png" /></div>

## 2. Descargar Rufus

Haz clic [aquí](https://rufus.ie/en/#download) para descargarlo.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-02.png" /></div>

## 3. Crear una unidad USB de arranque

Consulta este [enlace](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#1-overview).

### 3.1 Abre Rufus y selecciona la unidad USB

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-03.png" /></div>

### 3.2 Selecciona la imagen ISO

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-04.png" /></div>

### 3.3 Inicia la escritura de la imagen ISO

Después de seleccionar la imagen ISO, haz clic en **START**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-05.png" /></div>

### 3.4 Selecciona el modo de escritura de la imagen ISO

Cuando aparezca la siguiente ventana emergente, selecciona **Write in ISO Image mode (Recommended)**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-06.png" /></div>

Es posible que se te indique que Rufus necesita descargar archivos adicionales para completar la escritura de la imagen ISO. Si aparece este cuadro de diálogo, haz clic en **Yes** para continuar.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-07.png" /></div>

Cuando se te pida borrar la unidad USB, haz clic en **Yes** para continuar.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-08.png" /></div>

Una vez que el estado muestre **READY**, puedes cerrar Rufus.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-09.png" /></div>

## 4. Instalar Ubuntu

Haz clic [aquí](https://ubuntu.com/tutorials/install-ubuntu-server#1-overview) como referencia.

Inserta la unidad USB en el SenseCAP M4, conecta un teclado y una pantalla mediante el puerto HDMI, luego enciende el dispositivo y presiona la tecla **Delete**.

### 4.1 Introduce la contraseña de la BIOS

Introduce la contraseña: `QbCuNBAz`

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-10.png" /></div>

### 4.2 Arranca desde la unidad USB

En la pantalla **Save & Exit**, selecciona la unidad USB en **Boot Override** y luego presiona **Enter** para arrancar desde ella.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-11.png" /></div>

### 4.3 Inicia la instalación de Ubuntu

Selecciona la primera opción para comenzar a instalar Ubuntu.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-12.png" /></div>

### 4.4 Selecciona el idioma

Después de entrar en la interfaz de instalación, selecciona el idioma que prefieras.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-13.png" /></div>

### 4.5 Selecciona la distribución del teclado

Selecciona la distribución del teclado. Se pueden usar los ajustes predeterminados.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-14.png" /></div>

### 4.6 Selecciona la opción de instalación

Selecciona la opción para instalar Ubuntu.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-15.png" /></div>

### 4.7 Configura la red

Puedes omitir el paso de conexión de red por ahora.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-16.png" /></div>

### 4.8 Configura el proxy

También puedes omitir el paso de configuración del proxy.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-17.png" /></div>

### 4.9 Configura el mirror del archivo de Ubuntu

Para la configuración del mirror del archivo de Ubuntu, mantén los ajustes predeterminados y continúa con el siguiente paso.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-18.png" /></div>

### 4.10 Configura el almacenamiento

Configura el almacenamiento y selecciona **Custom storage layout**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-19.png" /></div>

### 4.11 Formatea el disco

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-20.png" /></div>

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-21.png" /></div>

### 4.12 Crea las particiones

Puedes personalizar el esquema de particiones según sea necesario. En este ejemplo, se crean particiones separadas para root y datos.

Establece el tamaño de la partición root en **50 GB**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-22.png" /></div>

### 4.13 Asigna el espacio restante

Asigna el espacio restante a la partición de datos. Si dejas este campo en blanco, se asignará todo el espacio restante a `/data`.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-23.png" /></div>

### 4.14 Confirma el esquema de particiones

Una vez que se hayan creado las particiones, haz clic en **Next**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-24.png" /></div>

### 4.15 Configura la cuenta de usuario

Introduce el hostname, el nombre de usuario y la contraseña.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-25.png" /></div>

### 4.16 Omite Ubuntu Pro

Puedes omitir por ahora la actualización a Ubuntu Pro.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-26.png" /></div>

### 4.17 Instala OpenSSH

Instala OpenSSH aquí para habilitar las conexiones SSH.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-27.png" /></div>

### 4.18 Reinicia el sistema

Una vez que la instalación haya finalizado, selecciona **Reboot Now**. Puedes retirar la unidad USB mientras el sistema se está reiniciando.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-28.png" /></div>

### 4.19 Completa la instalación

La instalación se ha completado correctamente.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-29.png" /></div>

