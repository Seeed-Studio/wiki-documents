---
description: Comenzando con N3uron
title: Comenzando con N3uron
keywords:
  - reTerminal DM
  - Getting started
  - IIoT
  - Industrial 
  - N3uron
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminalDM_N3uron_Get_Start
last_update:
  date: 2/27/2024
  author: Xabier Fernández and Kasun Thushara
---

## ¿Qué es N3uron?

[N3uron](https://n3uron.com/) es una **Plataforma Industrial Edge completa para IIoT y DataOps** que permite la integración perfecta entre la planta industrial y aplicaciones de terceros, ya sea en las instalaciones o en la nube.

Con N3uron, puedes crear fácilmente pipelines de datos bidireccionales entre sistemas OT e IT y desacoplar dispositivos de aplicaciones consolidando, modelando, procesando y visualizando todos tus datos operacionales en una única fuente de verdad y, en última instancia, haciendo que todos estos datos estén disponibles en toda la organización.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_1.png" /></center>

- **Modular**: Es completamente modular, con casi cincuenta módulos, los usuarios pueden apilar según sea necesario para satisfacer las necesidades de su proyecto, adquiriendo solo los estrictamente necesarios para sus aplicaciones.
- **Multiplataforma**: N3uron puede ejecutarse en la mayoría de versiones de Windows y distribuciones Linux, así como en arquitecturas ARM como Raspberry Pi.
- **Licencia ilimitada**: N3uron cuenta con un modelo de licencia ilimitado, ofreciendo uso sin restricciones en términos de etiquetas, usuarios, dispositivos y conexiones, todo a un precio asequible.
- **Basado en web**: Una vez instalado, todo lo que necesitas para acceder al nodo es un navegador web.
- **Despliegue y desarrollo rápido**: N3uron se puede instalar en menos de un minuto, y su entorno de desarrollo facilita la creación rápida de modelos de datos, especialmente cuando se utilizan plantillas.
- **Extremadamente eficiente**: Un solo nodo puede gestionar fácilmente varios cientos de miles de etiquetas, manteniendo bajos requisitos de hardware.
- **Arquitectura escalable y versátil**: Desde su concepción, N3uron fue diseñado para desplegar sin problemas arquitecturas distribuidas con varios cientos o miles de nodos. Los usuarios pueden conectar múltiples nodos rápidamente usando N3uron Links, escalando sin esfuerzo su arquitectura para adaptarse a sus necesidades.

## Prerrequisitos

### Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Software

Recomendamos instalar la versión **Bullseye** del SO Raspberry Pi de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo SO Raspbian, por favor sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/es/reterminal-dm-flash-OS/)

## Instalación

N3uron se puede instalar fácilmente con nuestro script de instalación automatizada de un solo paso. Antes de proceder con los siguientes pasos, por favor verifica que tu reTerminal DM esté conectado a internet. Además, asumimos que estás utilizando el SO Raspberry Pi predeterminado proporcionado con reTerminal.

 **Paso 1**: Primero necesitas obtener acceso al reTerminal DM.

- Escritorio: Conecta el ratón y el teclado directamente. Por favor procede a abrir la aplicación Terminal en tu dispositivo reTerminal DM.

- VNC: Escritorio remoto completo usando Virtual Network Computing (VNC).

- SSH: Conexión remota usando Secure Shell (SSH). Asegúrate de que tu reTerminal sea accesible a través de la red y que el servidor SSH esté habilitado.

Para más información, visita: [Configuración de un servidor SSH en reTerminal DM](https://wiki.seeedstudio.com/es/reterminal-dm-flash-OS/#access-reterminal-dm-via-ssh).

En tu terminal, ingresa el comando:

```sh
ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}
```

En Raspberry Pi OS, el nombre de usuario predeterminado es pi.
Por ejemplo:

```sh
ssh pi@192.168.2.100
```

Se te pedirá que ingreses la contraseña, en Raspberry Pi OS, la contraseña predeterminada es **raspberry**.

- Paso 2: Instalando N3uron con el script de instalación automatizada de un paso.

```sh
curl -fsSL https://get.n3uron.com/install.sh | sudo bash
```

En unos segundos tendrás N3uron instalado y funcionando.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_3.gif" /></center>

## Desinstalar

Para desinstalar N3uron del reTerminal, ejecuta los siguientes comandos en tu Terminal

**Paso 1:** Desinstalar el servicio N3uron.

```sh
sudo <n3uron folder>/bin/n3uron uninstall
```

Por ejemplo, si N3uron está instalado en la carpeta '/opt/n3uron', el comando sería:

```sh
sudo /opt/n3uron/bin/n3uron uninstall
```

**Paso 2:** Eliminar la carpeta N3uron (opcional).

```sh
sudo rm -r <n3uron folder>
```

Por ejemplo, si la carpeta de N3uron es '/opt/n3uron' el comando sería:

```sh
sudo rm -r /opt/n3uron
```

## Accediendo a la WebUI de N3uron

Para acceder a la WebUI de N3uron, sigue estos pasos:

**Paso 1:** Abre un navegador web en tu máquina local.

**Paso 2:** Ingresa una de las siguientes direcciones en la barra de direcciones del navegador:

- Para acceso local: http://localhost:8003 .
- Para acceso remoto dentro de la red de área local (LAN): http://reTerminal_IpAddress:8003.
- Para acceso local seguro: https://localhost:8443 .
- Para acceso remoto seguro dentro de la red de área local (LAN): https://reTerminal_IpAddress:8443.

**Paso 3:** Presiona Enter para navegar a la página de inicio de sesión de la WebUI de N3uron.

**Paso 4:** Ingresa el nombre de usuario predeterminado **admin** y la contraseña **n3uron** cuando se te solicite.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_4.gif" /></center>

## Uso

N3uron fue diseñado con una arquitectura orientada a microservicios en la cual cada módulo se ejecuta como un proceso independiente y Bootstrap es el servicio principal que gestiona el resto de los procesos. Por defecto, el módulo **WebUI** se activa automáticamente, haciéndolo accesible tan pronto como se completa la instalación, las funcionalidades adicionales se habilitan creando nuevas instancias de módulos.

Cada módulo requiere una licencia válida para ejecutarse en modo de producción. Si un módulo no encuentra una licencia válida, se ejecutará en modo demo durante dos horas. Para reiniciar el período demo, el módulo debe ser reiniciado.

Utilicemos el módulo WebVision para crear nuestra primera experiencia HMI, mejorando las capacidades de visualización de nuestro reTerminal DM.

## Introduciendo WebVision al reTerminal DM

WebVision es una interfaz HMI/SCADA web pura y autónoma diseñada para aplicaciones industriales. Construido completamente con tecnologías JavaScript, HTML5 y CSS, WebVision ofrece flexibilidad sin igual, permitiendo a los usuarios controlar sin problemas sus aplicaciones a través de una gran variedad de dispositivos como smartphones, tablets, pantallas táctiles, laptops, computadoras de escritorio y paredes de video de salas de control.

Diseñado como una solución todo en uno, WebVision elimina la necesidad de aplicaciones externas—todo lo que necesitas viene directamente de la caja. Desde monitoreo y control hasta recolección y análisis de datos, WebVision establece el estándar para eficiencia y conveniencia.
Para más información, por favor visita nuestro sitio web dedicado para WebVision en nuestra [Base de Conocimientos](https://docs.n3uron.com/docs/web-vision).

### Instanciar un módulo WebVision

**Paso 1:** Abre N3uron y navega al menú Config.

**Paso 2:**  Haz clic en Modules, luego crea un nuevo módulo. Esta instancia puede recibir cualquier nombre (excepto nombres con caracteres especiales como '.', '/', etc.), aunque se recomienda a los usuarios nombrar las instancias de manera similar al nombre del módulo que se está instanciando para fácil identificación. En este ejemplo, el módulo WebVision ha sido seleccionado y también ha sido nombrado WebVision.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_5.gif" /></center>

**Paso 3:** Navega a la configuración principal de WebVision y elige la configuración de servidor apropiada. La configuración predeterminada debería ser suficiente para la mayoría de casos de uso. Para más detalles, por favor consulta el siguiente enlace: [Configuración Inicial de WebVision](https://docs.n3uron.com/docs/web-vision-configuration).

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_6.png" /></center>

**Paso 4:** Una vez que el módulo WebVision ha sido instanciado, el primer paso es asignar permisos a los roles previamente creados en la sección Roles de WebUI. Por defecto, existen dos roles: Administrator para acceso administrativo y User para acceso regular. Puedes agregar usuarios a estos roles o crear nuevos según sea necesario. Una vez que los roles están establecidos, configura los permisos para los roles Designer y Viewer en consecuencia.
Adicionalmente, establece una ruta de filtro de Tag para cada rol. El acceso a la ruta de filtro de Tag determina qué tags del modelo de tags serán accesibles para visualización por el rol correspondiente. En este caso, asignaremos la ruta completa del modelo de tags a ambos roles.

- Administrator:
  - Designer: Edit
  - Viewer: View
  - TagFilterPath:
    - Mode: Include
    - Path: /
    - Regex pattern: .*
- User:
  - Designer: None
  - Viewer: View
  - TagFilterPath:
    - Mode: Include
    - Path: /
    - Regex pattern: .*

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_7.gif" /></center>

- Enlaces Útiles

  - [Configuración de Usuarios y Roles](https://docs.n3uron.com/docs/platform-security-users-and-roles)

  - [Configuración de Acceso](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)

**Paso 5:** Para probar nuestra pantalla inicial de WebVision, creemos un tag. Ve a la WebUI, selecciona **Config**, y luego haz clic en **Tag**. En la sección **Model**, haz clic en el menú y elige **New Tag**. Nómbralo **TestTag**, por ejemplo, selecciona el tipo como **Number**, otórgale **permiso Read-Write**, inicialízalo a 0 (opcional) y luego guarda la configuración.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_8.gif" /></center>

**Paso 6:** A continuación, navega a WebVision en la sección Config y haz clic en **Open Designer**.
Inicia sesión usando tus **credenciales de Administrator**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_9.png" /></center>

**Paso 7:** En la sección Templates, crea un nuevo Container llamado Main. Luego, designa este contenedor como el startup. Esto establecerá Main como nuestra pantalla inicial de WebVision. Aparecerá con un símbolo de asterisco (*) al lado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_10.gif" /></center>

**Paso 8:** Cambia el color de fondo del contenedor Main.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_11.gif" /></center>

**Paso 9:** Dentro del contenedor Main, navega a Components y agrega un nuevo componente. Para este ejemplo, selecciona el componente Gauge.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_12.gif" /></center>

**Paso 10:** Dentro del componente Gauge, selecciona la etiqueta que proporcionará los valores mostrados en el componente gauge.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_13.gif" /></center>

**Paso 11:** A continuación, navega a WebVision en la sección Config y haz clic en Open UI.
Inicia sesión usando tus credenciales de Administrador.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

**Paso 12:** Para probar nuestro diseño simple, navega a la WebUI y selecciona Data > Realtime. Cambia el valor de TestTag. Después, regresa a la UI de WebVision y verifica si el valor mostrado por el componente Gauge ha sido actualizado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_15.gif" /></center>

Hay mucho que explorar sobre WebVision para mejorar tu experiencia con reTerminal DM. Para más detalles, por favor consulta nuestra [Base de Conocimientos sobre WebVision](https://docs.n3uron.com/docs/web-vision-configuration).

El módulo WebVision de N3uron emparejado con el reTerminal DM de Seeed Studio ofrece un potente procesamiento visual para aplicaciones SCADA y HMI, ejemplificado en esta imagen con fines ilustrativos.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_16.png" /></center>

Lo que has visto es solo el comienzo. Abraza las posibilidades ilimitadas que ofrece su impresionante conjunto de casi 50 módulos. Atrévete a soñar en grande, innovar y llevar tus proyectos a nuevas alturas con las características de vanguardia de N3uron. Para una inmersión más profunda en esta poderosa plataforma, visita [https://n3uron.com/](https://n3uron.com/) y embárcate en un emocionante viaje de descubrimiento!

## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
