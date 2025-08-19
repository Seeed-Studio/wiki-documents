---
description: Empezando con FUXA
title: Empezando con FUXA - Herramienta SCADA basada en la web
keywords:
  - reTerminal Dm
  - Empezando
  - SCADA
  - Industrial 
  - FUXA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-DM_intro_FUXA
last_update:
  date: 04/06/2025
  author: Erick González
---

## ¿Qué es SCADA?

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-demo.gif" /></center>

**Supervisory Control and Data Acquisition (SCADA)** es un sistema crítico en entornos industriales diseñado para monitorizar y controlar procesos. Sirve como una **plataforma centralizada que recopila datos en tiempo real de varios sensores y dispositivos a través de la red industrial**. SCADA permite a los operadores **visualizar, analizar y responder a estos datos, facilitando la toma de decisiones eficiente**. Además, ofrece **capacidades de acceso y control remoto, permitiendo a los operadores gestionar procesos desde una ubicación central**. La integración de SCADA mejora la eficiencia, seguridad y fiabilidad general de las operaciones industriales al proporcionar una visión y control integrales de todo el sistema.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-editor.png" /></center>

## FUXA

FUXA se destaca como un robusto software basado en la web, que permite la rápida creación y despliegue de sistemas SCADA, HMI, Dashboard o IIoT escalables. Con FUXA, tienes la capacidad de diseñar visualizaciones de procesos contemporáneos adaptados a tus máquinas, mostrando datos en tiempo real y controlando instrumentos en plantas industriales automatizadas.

## Empezando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software por adelantado, según se describe aquí.

### Preparación del Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg">
        <div style={{textAlign:'center'}}>
          <img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/>
        </div>
      </td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg">
        <div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
        </div>
      </td>
        </tr>
    </table>
</div>

### Preparación del Software

Se recomienda instalar la versión **Bullseye** del sistema operativo Raspberry Pi 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo sistema operativo Raspbian, por favor sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/)

## Instalación de FUXA en reTerminal DM

:::note

Es necesario tener instalado Node versión 18. Ejecuta los siguientes comandos uno por uno en la terminal.

:::

```sh
wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz

tar -xf node-v18.20.3-linux-arm64.tar.xz

cd node-v18.20.3-linux-arm64
    
sudo cp -R * /usr/local/
    
node -v
    
npm -v

```

**A continuación, instala FUXA desde NPM**

```sh
sudo npm install -g --unsafe-perm @frangoteam/fuxa-min

sudo fuxa

```
La interfaz de FUXA estará disponible utilizando la URL: **http://localhost:1881**.

Principalmente, el servidor web de FUXA realiza dos páginas:

- Visualización para el usuario final: **http://localhost:1881/home**
- Editor para proyectar y diseñar: **http://localhost:1881/editor**

## ¿Cómo agregar los dispositivos y etiquetas?

Para establecer una conexión con un dispositivo, el primer paso es obtener las credenciales necesarias del dispositivo. FUXA soporta una variedad de dispositivos, incluyendo Modbus RTU/TCP, Protocolo Siemens S7, OPC-UA, BACnet IP, MQTT y Ethernet/IP (Allen Bradley). Una vez conectado a un dispositivo, puedes proceder a configurar suscripciones para valores en vivo, etiquetas, sensores y más.

**Paso 1**

Navega al menú de configuración y selecciona "Connections" para acceder a la configuración del dispositivo.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/tagdevice.PNG" /></center>

**Paso 2**

Haz clic en el ícono "+" ubicado en la parte inferior de la pantalla.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/devicesadd.PNG" /></center>

**Paso 3**

En este ejemplo, vamos a conectar un servidor MQTT. Dependiendo del tipo de dispositivo (Modbus RTU/TCP, Protocolo Siemens S7, OPC-UA, BACnet IP, MQTT o Ethernet/IP), elige el tipo de conexión adecuado.

**Para más detalles** [Haz clic aquí](https://github.com/frangoteam/FUXA/wiki/HowTo-Devices-and-Tags)

Selecciona el tipo de dispositivo, establece el intervalo de sondeo a la cantidad de segundos deseada y actívalo. Luego, proporciona las credenciales necesarias para el servidor, incluyendo la dirección, el ID del cliente, el nombre de usuario y la contraseña.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtdevice.PNG" /></center>

## Seleccionar Etiquetas

**Paso 1**

Después de esto, verás un indicador verde que confirma la conexión exitosa al servidor MQTT. Posteriormente, haz clic en el ícono de adjuntar.

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtgreen.PNG" /></center>

**Paso 2**

Haz clic en el ícono "+" para agregar un broker MQTT. Suscríbete a los temas relevantes y luego procede haciendo clic en el ícono de búsqueda.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe.png" /></center>

**Paso 3**

Luego, elige el tema deseado de la lista para la suscripción. Proporciona un nombre y haz clic en "Subscribe". Tienes la flexibilidad de agregar múltiples temas para suscribirte.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe2.png" /></center>

Para publicar un tema, necesitas especificarlo. Proporciona un nombre para la identificación y especifica el tema.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/publishmqqt.png" /></center>

Después de eso, tendrás una lista de temas, lo que te permitirá elegir si deseas publicar o suscribirte.

## Ajustar el valor enviado al dispositivo final utilizando el deslizador

En este ejemplo, vincularás los controladores a la etiqueta del dispositivo. La pestaña de Control ofrece varias opciones para ingresar valores, y en este caso, usaremos un deslizador. El deslizador se puede personalizar para adaptarse a tus necesidades específicas.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-slider-control.gif" /></center>

## Mostrar datos de dispositivos

En tu sistema, puede haber valores de sensores que mostrar. Para este propósito, puedes utilizar herramientas como Circular Gauge, Bar Gauge, etc. Para esta demostración, emplearemos el Circular Gauge, que se encuentra en la pestaña de Controles.

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/gauge.png" /></center>

A continuación, encontrarás una interfaz de usuario interactiva para modificar tu Circular Gauge. Elige la etiqueta y personalízala según tus preferencias. Tienes la opción de dividirla en subdivisiones, asignar colores a estas divisiones e incluso cambiar la posición del texto, entre otras características de personalización.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/bar.gif" /></center>

## Agregar elementos de Ingeniería de Procesos

En esta sección, descubrirás una gran variedad de componentes de ingeniería de procesos como **bombas, motores, sopladores, tanques, mezcladores** y más. Para nuestra demostración, nos centraremos en configurar los colores de encendido y apagado para una bomba. Simplemente selecciona la etiqueta correspondiente y especifica los colores para ambas situaciones.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/processengineer.gif" /></center>

## ¿Cómo animar una tubería?

Primero diseñas la forma de la tubería y luego defines la acción vinculando la etiqueta del dispositivo (variable) con la animación.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-pipe.gif" /></center>

## ¿Cómo agregar un gráfico?

Para agregar un control de gráfico a una vista, ingresa al editor y selecciona la vista.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-chart.gif" /></center>

## ¿Cómo agregar una alarma?

Para agregar una alarma, necesitas navegar a la configuración en la ventana del editor y seleccionar **Alarms**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/setup-alarms.png" /></center>

Luego, hay varias opciones para configurar alarmas: High-High, High, Low y Messages. En **High-High**, podemos establecer el valor límite y configurar alarmas. En **High**, cuando un valor excede un cierto rango, podemos establecer alarmas entre dos puntos críticos. **Message** es una notificación que aparece y desaparece cuando un valor alcanza cierto umbral. **Low** se activa cuando los datos del sensor caen por debajo de un cierto nivel, por ejemplo, cuando el nivel de líquido en un tanque es bajo. También podemos configurar alarmas para dos puntos críticos en este escenario. En este ejemplo, demostraremos el funcionamiento fenomenal de las alarmas **High-High** y **Message**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-alarms.gif" /></center>

Para ver las alarmas, puede que necesites ajustar ligeramente el diseño, ya que están ocultas por defecto. Para ello, ve a **Layout** y navega a la **Barra de Navegación del Encabezado**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/Layout1.PNG" /></center>

Luego, asegúrate de que el **modo de notificación de alarmas** esté configurado como **fixed** y que el **modo de notificación de información** también esté configurado como **fixed**. Esta configuración te permite ver las notificaciones de alarma al operar el sistema SCADA.

<center><img width={650} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/layoutalarms.PNG" /></center>

<center><img width={750} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/alrmnotification.PNG" /></center>

## Demo

En esta demostración integral, el conjunto incluye tres tanques, de los cuales dos están llenos de varias soluciones. Además, se cuentan con dos válvulas y bombas independientes para transferir las soluciones a un tanque de mezcla. Tras el proceso de mezcla, se dispone de una válvula separada para obtener la solución resultante. Durante toda esta operación, se monitoriza continuamente la temperatura del tanque de mezcla.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/demo-fuxa.gif" /></center>

Extendemos nuestro sincero agradecimiento al **frangoteam** por su apoyo y guía durante la creación de este wiki. Para más detalles sobre el proyecto FUXA, por favor refiérete a la pestaña de recursos a continuación.

## Recursos

- **[Página Web]** [Documentación Oficial de FUXA](https://github.com/frangoteam/FUXA/wiki)

# Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes canales de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
