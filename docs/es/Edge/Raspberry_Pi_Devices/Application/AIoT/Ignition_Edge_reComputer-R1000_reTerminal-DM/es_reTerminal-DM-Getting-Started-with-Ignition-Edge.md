---
description: reTerminal DM Primeros Pasos con Ignition Edge
title: reTerminal DM Primeros Pasos con Ignition Edge
keywords:
  - Edge
  - reTerminal-DM
  - Ignition Edge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-DM-Getting-Started-with-Ignition-Edge
last_update:
  date: 09/29/2023
  author: Corey Thompson
---
# reTerminal DM Primeros Pasos con Ignition Edge

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/reTerminal_DM_Ignition_Edge.png" alt="pir" width="600" height="auto"/></p>

> Capturar, procesar y visualizar datos críticos en el borde remoto de la red puede ser difícil y costoso. Ignition Edge de Inductive Automation® es una línea de soluciones de software Ignition® limitadas y ligeras diseñadas específicamente para dispositivos utilizados en el campo y dispositivos OEM en el borde de la red. Con Ignition Edge, la computación en el borde es más fácil y asequible que nunca, por lo que puede extender su recopilación de datos, visualización y gestión de sistemas hasta el borde de su red.
>
> — [inductiveautomation.com](https://inductiveautomation.com/ignition/edge)

Ignition Edge ofrece varios productos que pueden combinarse y emparejarse en un dispositivo de borde para crear soluciones poderosas en el borde de la red:

- **Ignition Edge IIoT**: Publique datos de dispositivos de campo a través de MQTT.
- **Ignition Edge Panel**: Cree HMIs locales para dispositivos de campo.
- **Ignition Edge Compute**: Agregue verdadera computación en el borde a su red.
- **Ignition Edge Sync Services**: Sincronice datos desde el borde de la red.
- **Ignition Edge EAM**: Combine con otros productos Edge para gestión centralizada.

Al integrar Ignition Edge en dispositivos de campo y OEM en el borde de la red, puede extender Ignition hasta el borde de su red. El reTerminal DM está equipado con rica escalabilidad y conectividad híbrida, como E/S Digital, bus CAN, RS485, RS232, potentes capacidades de comunicación inalámbrica como WiFi, BLE, \*4G, \*LoRa® y panel capacitivo multitáctil de 10 puntos de alta sensibilidad de 10.1" que lo convierte en una excelente opción para alojar cualquier combinación de las potentes aplicaciones de la colección Ignition Edge.

> \*Los módulos 4G y LoRa® no vienen con reTerminal DM por defecto, por favor compre los módulos relevantes según corresponda.

## Prerrequisitos de Hardware

- PC / Mac con capacidad de terminal SSH
- PC / Mac con capacidad de disco duro disponible para instalar las aplicaciones Designer de Ignition.
- Fuente de alimentación DC de 12-24V
- Cable Ethernet
- reTerminal DM x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

:::note
*Esta guía asume que tu reTerminal DM está ejecutando una instalación nueva de Raspberry Pi OS (x64) con acceso por terminal SSH desde otro dispositivo cliente. Consulta [instrucciones para flashear el sistema operativo del reTerminal DM](https://wiki.seeedstudio.com/es/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os) si necesitas instrucciones detalladas sobre este procedimiento.*
:::

## Instalando Ignition Edge En reTerminal

Instalar Ignition Edge en tu dispositivo es simple.

1. Visita [la Página de Descarga de Ignition](https://inductiveautomation.com/downloads/)
2. Descarga la versión de la aplicación que desees usar - se te pedirá que ingreses tu información antes de poder descargar el paquete
3. Copia el paquete comprimido a tu dispositivo edge, donde desees que sea instalado (he elegido una ubicación bajo /opt/)
4. Extrae el paquete en la ubicación actual
5. Elimina el paquete original sobrante
6. Modifica los permisos para ejecutar el script de inicio de Ignition
7. Ejecuta el script de inicio de Ignition

Se ha escrito un script de conveniencia que sigue estos pasos y no requiere que crees un login de usuario para el sitio de Inductive Automation. Para usarlo, simplemente necesitas obtener el script de descarga/instalación de ignition edge. Una vez que hayas descargado el script, márcalo como ejecutable y ejecútalo. Puede que necesites credenciales de superusuario para crear los directorios necesarios. Ve y tómate un café, esto tomará unos minutos para instalar.

```bash
curl -o download-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/download-ignition-edge.sh
chmod +x ./download-ignition-edge.sh
./download-ignition-edge.sh
```

### Desinstalación

Si deseas desinstalar el paquete (como fue instalado por el script del instalador), simplemente descarga y ejecuta el script de desinstalación. Inductive Automation no sugiere una ubicación predeterminada para su aplicación, por lo que *esto solo funcionará para esta instalación personalizada*.

```bash
curl -o uninstall-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/uninstall-ignition-edge.sh
chmod +x ./uninstall-ignition-edge.sh
./uninstall-ignition-edge.sh
```

## Lanzando la Puerta de Enlace Ignition Edge por Primera Vez

Cuando la instalación esté completa necesitarás iniciar el servicio. Puedes [configurar la puerta de enlace para que inicie al arrancar](#launch-ignition-edge-gateway-on-boot) y realizar un reinicio del reTerminal o puedes elegir iniciar el servicio manualmente.

 ```bash
/opt/ignitionedge/ignition.sh start
```

:::tip
Puedes comprobar fácilmente si el servicio se está ejecutando si puedes cargar la página de inicio del Gateway Ignition Edge.
:::

Para cargar la página de inicio del gateway, abre un navegador web ya sea en el propio reTerminal en `localhost:8088`, desde otro dispositivo en la red en `{reterminalhostname}:8088`, o desde cualquier lugar en la red con la dirección IP del propio reTerminal en `{reterminalip}:8088`.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-eula-screenshot.png" />
</p>

### Iniciar Gateway Ignition Edge al Arrancar
:::note
Se recomienda iniciar automáticamente el servicio del gateway al arrancar el dispositivo. Existen múltiples formas de lograr esto y, en última instancia, depende del usuario decidir cómo hacerlo.
:::

Una forma de lanzar el servicio al arrancar es agregar el comando de lanzamiento a tu `.bashrc`. Para hacer esto, simplemente abre tu `.bashrc` en un editor de texto de tu elección.

```bash
nano ~/.bashrc
```

Añade el comando de lanzamiento al archivo

```bash
/opt/ignitionedge/ignition.sh start'
```

<p style={{textAlign: 'center'}}>
  <img alt="Configuración de Inicio al Arranque" src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-gateway-launch-setup.png" />
</p>
¡Y no olvides guardar el archivo!
(`ctrl + x` en el ejemplo anterior usando nano)

:::warning
Este método no inicia el gateway al guardar, por lo que se recomienda reiniciar el reTerminal para asegurar que el cambio funcione como se espera.
:::

## Configurando Ignition Edge

Configurar la puerta de enlace es un proceso sencillo. Procede aceptando el EULA y luego crea un usuario/contraseña predeterminado para Ignition. Recuerda esta información ya que se crearán credenciales de administrador que se utilizarán para la configuración del sistema a lo largo de esta serie.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-create-user.png" />
</p>

:::note
Aunque Ignition Edge está configurado por defecto para comunicarse con un sistema SCADA maestro, no es obligatorio utilizar un servidor SCADA. Ignition Edge es un producto completamente independiente que puede integrarse fácilmente a una red SCADA en el futuro si así se desea.
:::

Después de tener un usuario, se te preguntará si deseas cambiar alguna de las configuraciones de puerto predeterminadas para la instalación. No tengo una red con puertos en conflicto, así que he elegido aceptar los valores predeterminados. Estos puertos se utilizarán para comunicarse de vuelta a la instalación SCADA principal, por lo que si estás configurando para trabajar con una instalación existente de Ignition, asegúrate de que esta página coincida con tus valores esperados. Ten en cuenta que estos son los puertos principales utilizados para la aplicación, pero si eliges instalar módulos en el futuro, probablemente tendrás más puertos que configurar más adelante.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-configure-ports.png" />
</p>

¡Ahora estás listo para inicializar y lanzar el servicio! Esto toma un par de minutos para configurarse y no requiere ninguna interacción, así que puedes volver a revisar más tarde. Se redirigirá a la página de inicio del diseñador cuando esté completo y podrás comenzar a trabajar libremente.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

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
