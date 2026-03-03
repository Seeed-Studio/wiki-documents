---
description: Comenzando con FUXA
title: Comenzando con FUXA - Herramienta SCADA Basada en Web
keywords:
  - reTerminal Dm
  - Getting started
  - SCADA
  - Industrial 
  - FUXA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM_intro_FUXA
last_update:
  date: 1/27/2024
  author: Kasun Thushara
---

## ¿Qué es SCADA?

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-demo.gif" /></center>

**Control Supervisor y Adquisición de Datos (SCADA)** es un sistema crítico en entornos industriales diseñado para monitorear y controlar procesos. Sirve como una **plataforma centralizada que recopila datos en tiempo real de varios sensores y dispositivos a través de la red industrial**. SCADA permite a los operadores **visualizar, analizar y responder a estos datos, facilitando la toma de decisiones eficiente**. Además, proporciona **capacidades de acceso y control remoto, permitiendo a los operadores gestionar procesos desde una ubicación central**. La integración de SCADA mejora la eficiencia general, seguridad y confiabilidad de las operaciones industriales al proporcionar una visión integral y control de todo el sistema.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-editor.png" /></center>

## FUXA

FUXA se presenta como un software robusto basado en web, que permite la creación y despliegue rápido de sistemas escalables SCADA, HMI, Dashboard o IIoT. Con FUXA, tienes la capacidad de crear visualizaciones de procesos contemporáneas adaptadas a tus máquinas, mostrando datos en tiempo real y controlando instrumentos en plantas industriales automatizadas.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Preparación del hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparación del Software

Recomendamos instalar la versión **Bullesye** del SO Raspberry Pi de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo SO Raspbian, por favor sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/es/reterminal-dm-flash-OS/)

## Instalación de FUXA en reTerminal DM

:::note

Es necesario tener instalada la Versión 18 de Node. Ejecuta los siguientes comandos uno por uno en la terminal.

:::

```sh
wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz

tar -xf node-v18.20.3-linux-arm64.tar.xz

cd node-v18.20.3-linux-arm64
    
sudo cp -R * /usr/local/
    
node -v
    
npm -v

```

**Siguiente: Instalar FUXA desde NPM**

```sh
sudo npm install -g --unsafe-perm @frangoteam/fuxa-min

sudo fuxa

```

La interfaz de usuario de FUXA estará disponible usando la URL: **http://localhost:1881**.

Principalmente el servidor web de FUXA realiza dos páginas:

- Visualización para el usuario final **http://localhost:1881/home**
- Editor para proyectar y diseñar **http://localhost:1881/editor**

## ¿Cómo Agregar los Dispositivos y etiquetas?

Para establecer una conexión con un dispositivo, el primer paso es obtener las credenciales necesarias del dispositivo. FUXA cuenta con soporte para una gama de dispositivos, incluyendo Modbus RTU/TCP, Protocolo Siemens S7, OPC-UA, BACnet IP, MQTT, y Ethernet/IP (Allen Bradley). Una vez conectado a un dispositivo, puedes proceder a configurar suscripciones para valores en vivo, Etiquetas, Sensores, y más.

**Paso 1**

Navega al menú de configuración y selecciona "Connections" para acceder a la configuración del dispositivo.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/tagdevice.PNG" /></center>

**Paso 2**

Haz clic en el ícono "+" ubicado en la parte inferior de la pantalla.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/devicesadd.PNG" /></center>

**Paso 3**

En este ejemplo, vamos a conectar un servidor MQTT. Dependiendo de tu tipo de dispositivo (Modbus RTU/TCP, Protocolo Siemens S7, OPC-UA, BACnet IP, MQTT, o Ethernet/IP), elige el tipo de conexión apropiado.

**Para más detalles** [Haz Clic Aquí](https://github.com/frangoteam/FUXA/wiki/HowTo-Devices-and-Tags)

Selecciona el tipo de dispositivo, establece el intervalo de sondeo al número de segundos deseado, y habilítalo. Luego, proporciona las credenciales necesarias al servidor, incluyendo la dirección, ID del cliente, nombre de usuario, y contraseña.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtdevice.PNG" /></center>

## Seleccionar Etiquetas

**Paso 1**

Después de eso, observarás un indicador verde confirmando la conexión exitosa al servidor MQTT. Posteriormente, haz clic en el ícono de adjuntar.

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtgreen.PNG" /></center>

**Paso 2**

Haz clic en el ícono "+" para agregar un broker MQTT. Suscríbete a temas relevantes, y luego procede haciendo clic en el ícono de búsqueda.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe.png" /></center>

**Paso 3**

A continuación, elige el tema deseado de la lista para suscripción. Proporciona un nombre y haz clic en "Subscribe." Tienes la flexibilidad de agregar múltiples temas para suscripción.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe2.png" /></center>

Para publicar un tema, necesitas especificarlo. Proporciona un nombre para identificación y especifica el tema.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/publishmqqt.png" /></center>

Después, tendrás una lista de temas, permitiéndote elegir si publicar o suscribirse.

## Ajustar el valor enviado al dispositivo final usando el deslizador

En este ejemplo, vincularemos los controladores a la etiqueta del dispositivo. La pestaña Control ofrece varias características para ingresar valores, y en este caso, usaremos un deslizador. El deslizador puede ser personalizado para adaptarse a tus requerimientos específicos.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-slider-control.gif" /></center>

## Mostrando Datos de Dispositivos

En tu sistema, podría haber valores de sensores para mostrar. Para este propósito, puedes utilizar herramientas como Medidor Circular, Medidor de Barras, etc. Para el propósito de esta demostración, emplearemos el Medidor Circular, que se puede encontrar bajo la pestaña Controles.

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/gauge.png" /></center>

A continuación, te encontrarás con una interfaz de usuario interactiva para modificar tu medidor circular. Elige la etiqueta y personalízala según tus preferencias. Tienes la opción de dividirla en subdivisiones, asignar colores a estas divisiones, e incluso cambiar la posición del texto, entre otras características de personalización.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/bar.gif" /></center>

## Agregar Elementos de Ingeniería de Procesos

En esta sección, descubrirás una gran cantidad de componentes de ingeniería de procesos como **bombas, motores, sopladores, tanques, mezcladores**, y más. Para nuestra demostración, nos enfocaremos en configurar los colores de encendido y apagado para una bomba. Simplemente selecciona la etiqueta relevante y especifica los colores para ambas situaciones de encendido y apagado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/processengineer.gif" /></center>

## Cómo Animar una Tubería

Primero diseñas la forma de tu tubería y luego defines la acción vinculando la Etiqueta-Dispositivo (Variable) con la animación.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-pipe.gif" /></center>

## Cómo Agregar un Gráfico

Para agregar un Control de Gráfico a una Vista. ve al editor y selecciona la Vista.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-chart.gif" /></center>

## Cómo Agregar una Alarma

Para agregar una alarma, necesitas navegar a la configuración en la ventana del editor y seleccionar **Alarmas**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/setup-alarms.png" /></center>

A continuación, hay algunas opciones para configurar alarmas: Alto-Alto, Alto, Bajo, y Mensajes. En **Alto-Alto**, podemos establecer el valor umbral y configurar alarmas. En **Alto,** cuando un valor excede un cierto rango, podemos configurar alarmas entre dos puntos críticos. **Mensaje** es una notificación que aparece y desaparece cuando un valor alcanza un cierto umbral. **Bajo** se activa cuando los datos del sensor caen por debajo de un cierto nivel, por ejemplo, cuando el nivel de líquido del tanque está bajo. También podemos configurar alarmas para dos puntos críticos establecidos en este escenario. En este ejemplo, demostraremos la funcionalidad de las alarmas **Alto-Alto** y **Mensaje** funcionando fenomenalmente.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-alarms.gif" /></center>

Para ver las alarmas, es posible que necesites ajustar ligeramente el diseño porque está oculto por defecto. Para hacer eso, ve al **Diseño** y navega a la **Barra de Navegación del Encabezado**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/Layout1.PNG" /></center>

Luego, asegúrate de que el **Modo de notificación de alarmas** esté configurado como **fijo** y el **Modo de notificación de información** también esté configurado como **fijo.** Esta configuración te permite ver las notificaciones de alarma cuando operas el sistema SCADA.

<center><img width={650} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/layoutalarms.PNG" /></center>

<center><img width={750} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/alrmnotification.PNG" /></center>

## Demo

En esta demostración integral, la configuración incluye tres tanques, con dos de ellos llenos de varias soluciones. Además, dos válvulas y bombas independientes están presentes para transferir las soluciones a un tanque de mezcla. Después del proceso de mezcla, una válvula separada está en su lugar para obtener la solución resultante. Durante toda esta operación, la temperatura del tanque de mezcla se monitorea continuamente.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/demo-fuxa.gif" /></center>

Extendemos nuestro sincero agradecimiento al **frangoteam** por su apoyo y orientación durante la creación de esta wiki. Para más detalles sobre el proyecto FUXA, consulte la pestaña de recursos a continuación.

## Recursos

- **[Página Web]** [Documentación Oficial de FUXA](https://github.com/frangoteam/FUXA/wiki)

## Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
