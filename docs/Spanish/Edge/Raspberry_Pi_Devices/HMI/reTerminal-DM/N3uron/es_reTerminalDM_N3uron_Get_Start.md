---
description: Primeros pasos con N3uron
title: Primeros pasos con N3uron
keywords:
  - reTerminal DM
  - Getting started
  - IIoT
  - Industrial 
  - N3uron
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminalDM_N3uron_Get_Start
last_update:
  date: 04/06/2025
  author: Erick González
---

## ¿Qué es N3uron?

[N3uron](https://n3uron.com/) es una completa **Plataforma Industrial Edge para IIoT & DataOps** que permite la integración perfecta entre el piso de planta industrial y aplicaciones de terceros, ya sea en instalaciones locales o en la nube.

Con N3uron, puedes crear con facilidad pipelines de datos bidireccionales entre sistemas OT e IT, y desacoplar los dispositivos de las aplicaciones al consolidar, modelar, procesar y visualizar todos tus datos operativos en una única fuente de verdad, haciendo que toda esta información esté disponible para toda la organización.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_1.png" /></center>

- **Modular**: Es completamente modular. Con casi cincuenta módulos, los usuarios pueden agregar solo aquellos necesarios para sus proyectos.
- **Multiplataforma**: N3uron puede ejecutarse en la mayoría de versiones de Windows, distribuciones Linux, así como en arquitecturas ARM como Raspberry Pi.
- **Licencia ilimitada**: N3uron dispone de un modelo de licencia ilimitada, ofreciendo un uso sin restricciones en términos de tags, usuarios, dispositivos y conexiones, a un precio accesible.
- **Basado en la web**: Una vez instalado, sólo se necesita un navegador web para acceder al nodo.
- **Despliegue y desarrollo rápido**: N3uron puede instalarse en menos de un minuto, y su entorno de desarrollo facilita la creación rápida de modelos de datos, especialmente cuando se utilizan plantillas.
- **Extremadamente eficiente**: Un solo nodo puede gestionar fácilmente varios cientos de miles de tags, sin requerir hardware costoso.
- **Arquitectura escalable y versátil**: Desde su concepción, N3uron fue diseñado para desplegar arquitecturas distribuidas con cientos o miles de nodos. Los usuarios pueden conectar múltiples nodos rápidamente mediante N3uron Links, escalando su arquitectura según sus necesidades.

## Requisitos Previos

### Hardware 

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
						<strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
					</a>
				</div>
			</td>
		</tr>
	</table>
</div>

### Software

Se recomienda instalar la versión **Bullseye** del sistema operativo Raspberry Pi 64 bits desde el sitio oficial. Si prefieres instalar un nuevo sistema operativo Raspbian, sigue los pasos detallados en esta [guía](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/).

## Instalación

N3uron se puede instalar fácilmente con nuestro script de instalación automatizado de un solo paso. Antes de proceder, verifica que tu reTerminal DM esté conectado a Internet. Además, se asume que estás utilizando el Raspberry Pi OS predeterminado que trae el reTerminal.

**Paso 1**: Primero, necesitas acceder a tu reTerminal DM.

- **Escritorio**: Conecta el ratón y el teclado directamente. Abre la aplicación Terminal en tu reTerminal DM.
- **VNC**: Escritorio remoto completo usando VNC.
- **SSH**: Conexión remota a través de SSH. Asegúrate que tu reTerminal sea accesible vía red y que el servidor SSH esté habilitado.

Para más información, visita: [Configurar un servidor SSH en reTerminal DM](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/#access-reterminal-dm-via-ssh).

En tu terminal, ingresa el siguiente comando:

```sh
ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}
```
En Raspberry Pi OS, el nombre de usuario predeterminado es **pi**.  
Por ejemplo:

```sh
ssh pi@192.168.2.100
```
Se te solicitará la contraseña. En Raspberry Pi OS, la contraseña predeterminada es **raspberry**.

**Paso 2**: Instalar N3uron con el script de instalación automatizado de un solo paso.

```sh
curl -fsSL https://get.n3uron.com/install.sh | sudo bash
```
En unos pocos segundos tendrás N3uron instalado, en funcionamiento.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_3.gif" /></center>

## Desinstalación

Para desinstalar N3uron del reTerminal, ejecuta los siguientes comandos en tu terminal:

**Paso 1:** Desinstala el servicio de N3uron.
```sh
sudo <n3uron folder>/bin/n3uron uninstall
```
Por ejemplo, si N3uron está instalado en la carpeta `/opt/n3uron`, el comando sería:
```sh
sudo /opt/n3uron/bin/n3uron uninstall
```
**Paso 2:** Elimina la carpeta de N3uron (opcional).
```sh
sudo rm -r <n3uron folder>
```
Por ejemplo, si la carpeta de N3uron es `/opt/n3uron`, el comando sería:
```sh
sudo rm -r /opt/n3uron
```

## Accediendo a la WebUI de N3uron

Para acceder a la WebUI de N3uron, sigue estos pasos:

**Paso 1:** Abre un navegador web en tu máquina local.

**Paso 2:** Ingresa a la barra de direcciones uno de los siguientes:
- Para acceso local: http://localhost:8003.  
- Para acceso remoto dentro de la red local (LAN): http://reTerminal_IpAddress:8003.  
- Para acceso seguro local: https://localhost:8443.  
- Para acceso seguro remoto dentro de la red local (LAN): https://reTerminal_IpAddress:8443.

**Paso 3:** Presiona Enter para navegar a la página de inicio de sesión de N3uron WebUI.

**Paso 4:** Ingresa el nombre de usuario **admin** y la contraseña **n3uron** cuando se te solicite.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_4.gif" /></center>

## Uso

N3uron fue diseñada con una arquitectura orientada a microservicios, en la que cada módulo se ejecuta como un proceso independiente y Bootstrap es el servicio central que los administra. Por defecto, el módulo **WebUI** se activa automáticamente, haciéndolo accesible en cuanto se completa la instalación, y funcionalidades adicionales se habilitan creando nuevas instancias de módulos.

Cada módulo requiere una licencia válida para ejecutarse en modo producción. Si un módulo no encuentra una licencia válida, funcionará en modo demo durante dos horas. Para reiniciar el periodo demo, el módulo debe reiniciarse.

Utilicemos el módulo WebVision para crear nuestra primera experiencia HMI, mejorando las capacidades de visualización de nuestro reTerminal DM.

## Introduciendo WebVision a reTerminal DM

WebVision es una interfaz HMI/SCADA puramente web y autónoma, diseñada para aplicaciones industriales. Construido completamente con tecnologías JavaScript, HTML5 y CSS, WebVision ofrece flexibilidad inigualable, permitiendo a los usuarios controlar sus aplicaciones de forma fluida en una multitud de dispositivos como smartphones, tablets, pantallas táctiles, laptops, ordenadores de escritorio y muros de video en salas de control.

Diseñado como una solución integral, WebVision elimina la necesidad de aplicaciones externas: todo lo que necesitas viene directamente en el paquete. Desde monitoreo y control hasta recolección y análisis de datos, WebVision establece el estándar en eficiencia y conveniencia.  
Para más información, visita nuestra [Base de Conocimiento sobre WebVision](https://docs.n3uron.com/docs/web-vision-configuration).

### Instanciar un módulo WebVision

**Paso 1:** Abre N3uron y navega al menú **Config**.

**Paso 2:** Haz clic en **Modules** y luego crea un nuevo módulo. Esta instancia puede recibir cualquier nombre (evita utilizar caracteres especiales como ‘.’, ‘/’, etc.); se recomienda asignar un nombre similar al del módulo que se está instanciando para una fácil identificación. En este ejemplo, el módulo WebVision se selecciona y se nombra **WebVision**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_5.gif" /></center>

**Paso 3:** Navega a la configuración principal de WebVision y elige los ajustes del servidor apropiados. Los ajustes predeterminados deben ser suficientes para la mayoría de los casos. Para más detalles, consulta: [Configuración Inicial de WebVision](https://docs.n3uron.com/docs/web-vision-configuration).

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_6.png" /></center>

**Paso 4:** Una vez que se ha instanciado el módulo WebVision, el primer paso es asignar permisos a los roles previamente creados en la sección Roles de la WebUI. Por defecto, existen dos roles: **Administrator** para acceso administrativo y **User** para acceso regular. Puedes asignar usuarios a estos roles o crear nuevos según sea necesario. Luego, configura los permisos para los roles Designer y Viewer. Además, establece un Tag filter path para cada rol. El acceso al Tag filter path determina qué tags del modelo de tags serán accesibles para la visualización por el rol correspondiente. En este ejemplo, asignaremos la ruta completa del modelo de tags a ambos roles.

- **Administrator:**
  - Designer: Edit
  - Viewer: View
  - TagFilterPath:
    - Mode: Include
    - Path: /
    - Regex pattern: .*
- **User:**
  - Designer: None
  - Viewer: View
  - TagFilterPath:
    - Mode: Include
    - Path: /
    - Regex pattern: .*

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_7.gif" /></center>

- **Enlaces Útiles**

  - [Configuración de Usuarios y Roles](https://docs.n3uron.com/docs/platform-security-users-and-roles)
  - [Configuración de Acceso](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)

**Paso 5:** Para probar la pantalla inicial de WebVision, crea un tag. Ve a la WebUI, selecciona **Config** y haz clic en **Tag**. En la sección **Model**, haz clic en el menú y selecciona **New Tag**. Nómbralo **TestTag**, por ejemplo, selecciona el tipo como **Number**, asígnale permisos de Lectura-Escritura, inicialízalo a 0 (opcional) y luego guarda la configuración.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_8.gif" /></center>

**Paso 6:** Luego, navega a WebVision en la sección **Config** y haz clic en **Open Designer**. Inicia sesión usando tus credenciales de **Administrator**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_9.png" /></center>

**Paso 7:** En la sección **Templates**, crea un nuevo Container llamado **Main**. Luego, designa este container como el inicio. Esto establecerá a **Main** como nuestra pantalla inicial en WebVision. Aparecerá con un asterisco (*) al lado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_10.gif" /></center>

**Paso 8:** Cambia el color de fondo del container **Main**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_11.gif" /></center>

**Paso 9:** Dentro del container **Main**, navega a **Components** y añade un nuevo componente. Para este ejemplo, selecciona el componente **Gauge**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_12.gif" /></center>

**Paso 10:** Dentro del componente **Gauge**, selecciona el tag que proporcionará el valor a mostrar en el gauge.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_13.gif" /></center>

**Paso 11:** Luego, navega a WebVision en la sección **Config** y haz clic en **Open UI**. Inicia sesión con tus credenciales de **Administrator**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

**Paso 12:** Para probar nuestro diseño simple, navega a la WebUI y selecciona **Data > Realtime**. Cambia el valor de **TestTag**. Posteriormente, regresa a la UI de WebVision y verifica si el valor mostrado en el componente Gauge se ha actualizado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_15.gif" /></center>

N3uron WebVision, combinado con reTerminal DM de Seeed Studio, ofrece un procesamiento visual potente para aplicaciones SCADA y HMI, tal como se ejemplifica en la imagen ilustrativa a continuación:

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_16.png" /></center>

Lo que has visto es solo el comienzo. Aprovecha las ilimitadas posibilidades que ofrece su impresionante variedad de casi 50 módulos. Atrévete a soñar en grande, innova y lleva tus proyectos a nuevos niveles con las capacidades de vanguardia de N3uron. Para profundizar en esta poderosa plataforma, visita [https://n3uron.com/](https://n3uron.com/) y emprende un emocionante viaje de descubrimiento.

## Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte a través de diversos canales y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
