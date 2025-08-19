---
description: Primeros pasos con reTerminal DM e Ignition Edge
title: Primeros pasos con reTerminal DM e Ignition Edge
keywords:
  - Edge
  - reTerminal-DM
  - Ignition Edge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-DM-Getting-Started-with-Ignition-Edge
last_update:
  date: 04/04/2025
  author: Erick González
---

#  Primeros pasos con reTerminal DM e Ignition Edge

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/reTerminal_DM_Ignition_Edge.png" alt="pir" width="600" height="auto"/></p>

> Capturar, procesar y visualizar datos críticos en el borde remoto de la red puede ser difícil y costoso. Ignition Edge de Inductive Automation® es una línea de soluciones de software Ignition® limitadas y ligeras, diseñadas específicamente para dispositivos utilizados en el campo y dispositivos OEM en el borde de la red. Con Ignition Edge, la computación en el borde es más fácil y asequible que nunca, permitiéndote extender la recolección, visualización y gestión de datos hasta el extremo de tu red.
>
> — [inductiveautomation.com](https://inductiveautomation.com/ignition/edge)

Ignition Edge ofrece varios productos que se pueden combinar en un dispositivo edge para crear soluciones potentes en el borde de la red:
- **Ignition Edge IIoT**: Publica datos de dispositivos de campo a través de MQTT.
- **Ignition Edge Panel**: Crea HMIs locales para dispositivos de campo.
- **Ignition Edge Compute**: Agrega capacidad real de computación en el borde a tu red.
- **Ignition Edge Sync Services**: Sincroniza datos desde el borde de la red.
- **Ignition Edge EAM**: Combínalo con otros productos Edge para una gestión centralizada.

Al incorporar Ignition Edge en dispositivos de campo y OEM en el borde de la red, puedes extender Ignition hasta el extremo de tu red. El reTerminal DM cuenta con una gran escalabilidad y conectividad híbrida, como E/S digital, bus CAN, RS485, RS232, potentes capacidades de comunicación inalámbrica como WiFi, BLE, *4G, *LoRa® y un panel capacitivo de 10.1" multitáctil de 10 puntos de alta sensibilidad, lo que lo convierte en una excelente opción para alojar cualquier combinación de las potentes aplicaciones de la colección Ignition Edge.

> *Los módulos *4G y LoRa® no vienen incluidos por defecto con reTerminal DM; por favor, adquiere los módulos correspondientes según sea necesario.

## Requisitos de Hardware
- PC / Mac con capacidad de terminal SSH
- PC / Mac con capacidad de almacenamiento disponible para instalar las aplicaciones Designer de Ignition
- Fuente de alimentación DC de 12-24V
- Cable Ethernet
- reTerminal DM x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
    </a>
</div>

<br />

:::note
*Esta guía asume que tu reTerminal DM está ejecutando una instalación nueva de Raspberry Pi OS (x64) con acceso a terminal SSH desde otro dispositivo cliente. Consulta las [instrucciones para flashear el sistema operativo de reTerminal DM](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os) si requieres instrucciones detalladas sobre este procedimiento.*
:::

## Instalando Ignition Edge en reTerminal

Instalar Ignition Edge en tu dispositivo es muy sencillo.

1. Visita la [página de descarga de Ignition](https://inductiveautomation.com/downloads/).
2. Descarga la versión de la aplicación que deseas utilizar; se te pedirá ingresar tu información antes de poder descargar el paquete.
3. Copia el paquete comprimido a tu dispositivo edge, en el lugar donde deseas instalarlo (en este ejemplo se eligió una ubicación bajo `/opt/`).
4. Extrae el paquete en la ubicación actual.
5. Elimina el paquete original que quedó.
6. Modifica los permisos para ejecutar el script de inicio de Ignition.
7. Inicia el script de inicio de Ignition.

Se ha creado un script de conveniencia que sigue estos pasos y no requiere que crees una cuenta en el sitio de Inductive Automation. Para utilizarlo, simplemente descarga el script de descarga/instalación de Ignition Edge, márcalo como ejecutable y ejecútalo. Puede que necesites credenciales de superusuario para crear los directorios necesarios. Tómate un café, ya que esto tomará unos minutos en instalarse.

```bash
curl -o download-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/download-ignition-edge.sh
chmod +x ./download-ignition-edge.sh
./download-ignition-edge.sh
```

### Desinstalación

Si deseas desinstalar el paquete (tal y como fue instalado por el script), simplemente descarga y ejecuta el script de desinstalación. Inductive Automation no sugiere una ubicación por defecto para su aplicación, por lo que *esto funcionará únicamente para esta instalación personalizada*.

```bash
curl -o uninstall-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/uninstall-ignition-edge.sh
chmod +x ./uninstall-ignition-edge.sh
./uninstall-ignition-edge.sh
```

## Lanzando el Gateway de Ignition Edge por Primera Vez

Cuando la instalación se complete, necesitarás iniciar el servicio. Puedes configurar el gateway para que inicie en el arranque y reiniciar el reTerminal o puedes optar por iniciar el servicio manualmente.

```bash
/opt/ignitionedge/ignition.sh start
```

:::tip
Puedes verificar fácilmente si el servicio se está ejecutando si puedes cargar la página principal del Gateway de Ignition Edge.
:::

Para cargar la página principal del gateway, inicia un navegador web ya sea en el propio reTerminal en `localhost:8088` O desde otro dispositivo en la red utilizando `{reterminalhostname}:8088` O desde cualquier lugar en la red con la dirección IP del reTerminal, es decir, `{reterminalip}:8088`.

<p style={{textAlign: 'center'}}>
  <img src ="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-eula-screenshot.png" />
</p>

### Lanzar el Gateway de Ignition Edge en el Arranque
:::note
Se recomienda configurar el servicio del gateway para que se inicie automáticamente al arrancar el dispositivo. Existen múltiples formas de lograrlo y, en última instancia, depende del usuario decidir cómo hacerlo.
:::

Una forma de iniciar el servicio al arrancar es agregar el comando de inicio a tu archivo `.bashrc`. Para hacerlo, simplemente abre tu archivo `.bashrc` en el editor de texto de tu preferencia.

```bash
nano ~/.bashrc
```
Agrega el comando de inicio al final del archivo:
```bash
/opt/ignitionedge/ignition.sh start
```
<p style={{textAlign: 'center'}}>
  <img alt="Configuración de inicio automático" src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-gateway-launch-setup.png" />
</p>
¡Y no olvides guardar el archivo!  
(En el ejemplo con nano, presiona `ctrl + x`)

:::warning
Este método no inicia el gateway al guardar, así que reinicia el reTerminal para asegurarte de que el cambio funcione correctamente.
:::

## Configurando Ignition Edge

La configuración del gateway es un proceso directo. Procede aceptando el EULA y luego crea un usuario/contraseña predeterminados para Ignition. Recuerda esta información, ya que se creará con credenciales de administrador y se utilizará para la configuración del sistema a lo largo de esta serie.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-create-user.png" />
</p>

:::note
Aunque Ignition Edge está configurado por defecto para comunicarse con un sistema SCADA maestro, no es obligatorio utilizar un servidor SCADA. Ignition Edge es un producto completamente autónomo que puede configurarse para integrarse fácilmente en una red SCADA en el futuro, si así se desea.
:::

Después de crear un usuario, se te preguntará si deseas cambiar alguna de las configuraciones de puerto predeterminadas de la instalación. En este ejemplo, no hay conflictos de puertos en la red, por lo que se han aceptado los valores por defecto. Estos puertos se utilizarán para la comunicación con la instalación SCADA principal, así que si estás configurando el sistema para trabajar con una instalación existente de Ignition, asegúrate de que esta página coincida con los valores esperados. Ten en cuenta que estos son los puertos básicos utilizados por la aplicación, pero si decides instalar módulos en el futuro, probablemente tendrás que configurar más puertos.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-configure-ports.png" />
</p>

¡Ahora estás listo para inicializar y lanzar el servicio! Este proceso toma un par de minutos y no requiere interacción, así que puedes volver a consultarlo más tarde. Se redirigirá a la página principal del diseñador cuando esté completo y podrás comenzar a trabajar.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte a través de diferentes canales y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
