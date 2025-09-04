---
description: Aprende cómo configurar PLCs de Siemens usando el protocolo S7 e integrarlos con Node-RED en un reComputer alimentado por Raspberry Pi para computación de borde eficiente. Descubre orientación paso a paso sobre configuración de nodos S7, creación de flujos y monitoreo de variables de PLC.
title: Conectando PLCs de Siemens Usando el Protocolo S7 con reComputer R1000

keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - Siemens
  - S7
  - PLC
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_nodered_s7
last_update:
  date: 08/30/2024
  author: Kasun Thushara
---

## Introducción

El **Protocolo S7** es un estándar de comunicación desarrollado por Siemens para su familia de controladores lógicos programables (PLCs). Es crucial para permitir el intercambio de datos fluido y confiable entre PLCs de Siemens. Este protocolo opera sobre Ethernet usando un método llamado ISO TCP, que está estructurado alrededor de bloques de datos conocidos como Unidades de Datos de Protocolo (PDUs). Cada PDU es un segmento de información cuyo tamaño y estructura se determinan cuando la conexión se establece por primera vez.

En este artículo, exploraremos cómo usar Node-RED, una herramienta de desarrollo basada en flujos muy popular, en un reComputer alimentado por Raspberry Pi para interfaz con PLCs de Siemens usando el Protocolo S7. Esta configuración permite una integración eficiente y flexible de sistemas de automatización industrial con plataformas IoT modernas.

## Configurando tu PLC para el Protocolo S7

Después de diseñar tu Diagrama de Escalera o Diagrama de Bloques de Función, el siguiente paso es configurar tu PLC de Siemens para habilitar el protocolo S7. Los pasos exactos pueden variar dependiendo del modelo de PLC que estés usando. Por ejemplo, si estás usando un [PLC Siemens LOGO](https://www.siemens.com/global/en/products/automation/systems/industrial/plc/logo.html), configurarás esto en el software de programación LOGO Soft.

**Configuración de Red**: Bajo la configuración de Ethernet, necesitarás ingresar la dirección IP del PLC, máscara de subred y puerta de enlace predeterminada.

**Habilitar Protocolo S7**: Hay una opción para permitir comunicación S7—asegúrate de marcar esta casilla.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo1.PNG" /></center>

**Configurar Comunicación S7**: Añade una conexión Ethernet configurada como un servidor S7. También necesitarás configurar el TSAP (Punto de Acceso de Servicio de Transporte) de Cliente y Servidor.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo2.PNG" /></center>

:::note
Si estás utilizando un modelo diferente de PLC Siemens, asegúrate de consultar la documentación correspondiente para conocer los pasos específicos de configuración.
:::

## Configuración de Nodos S7 en Node-RED

Para integrar PLCs de Siemens con Node-RED, necesitarás usar el nodo `node-red-contrib-s7`. Sigue estos pasos para configurarlo:

### Instalar el Nodo S7

- Ve a la opción **Manage Palette** en Node-RED.
- Navega a la pestaña **Install** y busca `node-red-contrib-s7`.
- Instala el nodo para añadir capacidades S7 a tu entorno Node-RED.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered_s7.PNG" /></center>

### Crear un Flujo

- Arrastra y suelta el nodo **S7 out** en tu espacio de trabajo, junto con dos nodos **inject**.
- Conecta los nodos inject al nodo S7 out para iniciar la comunicación con el PLC.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/s7_out.PNG" /></center>

### Configurar el Nodo S7 Out

- Primero, configura el endpoint haciendo clic en el icono `+ (más)`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/editS7.PNG" /></center>

- Ingresa la `dirección IP` de tu PLC.
- Establece el Modo a `TSAP`.
- Ingresa el `Local TSAP` y `Remote TSAP` como se configuró en la configuración del servidor de tu PLC.
- Dale a tu PLC un nombre reconocible para fácil identificación.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/LOGO_endpoint.PNG" /></center>

### Añadir Variables

- Define cada variable con un **Nombre** y **Dirección**.
- Usa los espacios de direcciones apropiados correspondientes a diferentes tipos de bloques (ej., bobinas, entradas). Puedes consultar la [Documentación de Direcciones Siemens S7](https://www.winccoa.com/documentation/WinCCOA/3.18/en_US/S7_Driver/topics/s7_address.html) para más detalles.
- Asegúrate de que cada nombre de variable corresponda exactamente a su tipo de bloque.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo_variables.PNG" /></center>

### Configurar el Nodo Inject

- Edita la carga útil del nodo inject para establecer un valor booleano. Usa un nodo inject para `true` y otro para `false`.

<center><img width={500} height={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/true.PNG" /></center>
<center><img width={500} height={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/false.PNG" /></center>

### Añadir Nodo S7 In para Monitoreo

- Arrastra y suelta el nodo **S7 in** para monitorear valores de variables.
- Puedes configurar este nodo para ver una sola variable o todas las variables.
- Selecciona el `PLC, Modo` y `Variable` correspondientes que deseas monitorear.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/s7_in.PNG" /></center>

### Desplegar tu Flujo

- Una vez que todo esté configurado, despliega tu flujo para comenzar a comunicarte con tu PLC de Siemens.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/final.PNG" /></center>

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
