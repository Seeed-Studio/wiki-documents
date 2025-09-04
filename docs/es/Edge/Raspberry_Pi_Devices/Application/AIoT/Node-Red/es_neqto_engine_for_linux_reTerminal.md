---
description: Introducción a NEQTO Engine para Linux en reTerminal
title: Introducción a NEQTO Engine para Linux en reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/neqto_engine_for_linux_reTerminal
last_update:
  date: 04/17/2024
  author: Kazuhiro Ozuchi
---

## Introducción

NEQTO es un paquete de software ligero y seguro que permite a las empresas instalar y configurar remotamente su software en dispositivos edge. NEQTO permite a las empresas proporcionar servicios de software mejorados a los usuarios finales a través de conectores de plataforma llave en mano y gestión integrada del ciclo de vida del software.

Los dispositivos instalados con NEQTO pueden gestionarse a través de API o la consola NEQTO lista para usar, que incluye servicios opcionales para almacenamiento de datos, alertas y monitoreo watchdog. Las empresas pueden habilitar AIoT con instalación casi instantánea en cualquier dispositivo Linux e integración de datos sin problemas con cualquier servidor local o en la nube.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/header-img_2x.png" alt="pir" width={600} height="auto" /></p>

## Prerrequisitos

### Hardware compatible

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

- (Cualquier máquina Linux)

:::tip
- Arquitecturas compatibles: armv6l (32bit), armv7l (32bit), aarch64 (64bit), x86_64 (64bit)
- Espacio en disco requerido: ≥ 32 MB
- Memoria RAM requerida: ≥ 4 MB (con configuración por defecto)
- Interfaces de comunicación en red: Se requiere un adaptador de red físico a bordo.
- Monitor, teclado, ratón (opcionales)
:::

## Comenzando
### Conexión de Hardware
Por favor consulte Comenzando con reTerminal (https://wiki.seeedstudio.com/es/reTerminal/)

### Registrarse para una Cuenta NEQTO:
- Paso 1. Visite esta página (https://console.neqto.com/register) para registrarse para una cuenta NEQTO
- Paso 2. Ingrese su dirección de correo electrónico, cree una contraseña y proceda
- Paso 3. Verifique la cuenta desde el correo de activación que reciba

### Instalación de NEQTO Linux

1. Seleccione `Manage API Keys for Linux-based Device` desde

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65eee22eccae06004c6d9459.png" alt="pir" width={20} height="auto" /></p>

en la Consola NEQTO

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65effd1accae06004c6d94a0.png" alt="pir" width={600} height="auto" /></p>

2. Haga clic en `CREATE API KEY`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65efff89ccae06004c6d94a6.png" alt="pir" width={600} height="auto" /></p>

Y entonces se mostrará la Clave API

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65efff33ccae06004c6d94a5.png" alt="pir" width={600} height="auto" /></p>


3. Descargue el `NEQTO Engine Linux Installer` mediante curl o wget.

    Esta vez, use el comando wget.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65eeeaa3ccae06004c6d945d.png" alt="pir" width={600} height="auto" /></p>

Copie el `Download link` del `Installer of NEQTO Engine for Linux` y péguelo después de "wget ".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbce4ccae06004c6d9812.png" alt="pir" width={600} height="auto" /></p>

El instalador se descarga exitosamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd0cccae06004c6d9813.png" alt="pir" width={600} height="auto" /></p>

4. Cambie los permisos de ejecución del instalador descargado (`neqto-daemon-install.latest.sh`) con el comando chmod antes de ejecutar la instalación de NEQTO Engine para Linux.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd27ccae06004c6d9814.png" alt="pir" width={600} height="auto" /></p>


<!--<div style="page-break-before:always"></div>-->

5. Copie la `API Key` de `API Keys for NEQTO Engine for Linux` en la Consola NEQTO y péguelo después de `sudo ./neqto-daemon-install.latest.sh -k `.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd4dccae06004c6d9815.png" alt="pir" width={600} height="auto" /></p>


6. Justo después de la ejecución, se mostrarán notas importantes. Por favor revíselas e ingrese "agree" si está de acuerdo. Después, se ejecutará el registro del dispositivo y continuará la instalación del software.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd63ccae06004c6d9816.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. Por favor espere hasta que se muestre el estado final `Installation completed successfully!`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd7accae06004c6d9817.png" alt="pir" width={600} height="auto" /></p>

Confirmación de que el dispositivo ha sido registrado en la Consola NEQTO

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd9cccae06004c6d9819.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

### Hola Mundo

1. Haga clic en `ADD GROUP` bajo `GROUPS`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660f9d61ccae06004c6d97b9.png" alt="pir" width={600} height="auto" /></p>

2. Ingrese `reTerminal` en `Name` y haga clic en `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660f9e99ccae06004c6d97bd.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660f9ebbccae06004c6d97bf.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. Seleccione el `reTerminal` que creó y haga clic en `SCRIPTS`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbde5ccae06004c6d981a.png" alt="pir" width={600} height="auto" /></p>

4. Haga clic en `ADD SCRIPT`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe00ccae06004c6d981b.png" alt="pir" width={600} height="auto" /></p>

5. Ingrese `Hello World` en el campo `Name` y haga clic en `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe19ccae06004c6d981c.png" alt="pir" width={600} height="auto" /></p>

6. Copie y pegue el [código de ejemplo](https://docs.neqto.com/docs/en/getting-started/tutorial-step1#sample-code) de `Getting Started` en el editor de scripts de la Consola NEQTO y luego haga clic en `Save`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe2bccae06004c6d981d.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. Haz clic en `TEMPLATES`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe46ccae06004c6d981e.png" alt="pir" width={600} height="auto" /></p>

Y luego haz clic en `ADD TEMPLATE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe5dccae06004c6d981f.png" alt="pir" width={600} height="auto" /></p>

8. Configura `DEVICE INFORMATION` de la siguiente manera

    - Ingresa `reTerminal Template` en el campo `Name`

    - Selecciona `Linux-based device` en el campo `Firmware Type`

    - Selecciona la versión más reciente en el campo `Firmware Version`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe7cccae06004c6d9820.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

9. Para `OPTIONS`, selecciona `Hello World` en el campo `Script` y haz clic en `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe98ccae06004c6d9821.png" alt="pir" width={600} height="auto" /></p>

10. Haz clic en `NODES`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbea7ccae06004c6d9823.png" alt="pir" width={600} height="auto" /></p>

Y luego haz clic en `ADD NODE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbeb4ccae06004c6d9824.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

11. Configura `META DATA` de la siguiente manera

    - Establece el campo `Name` como `reTerminal`

    - Establece el campo `Template` como `reTerminal Template`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbec5ccae06004c6d9825.png" alt="pir" width={600} height="auto" /></p>

12. Selecciona el dispositivo que acabas de registrar en `DEVICE INFORMATION` y haz clic en `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fca55ccae06004c6d982a.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fca62ccae06004c6d982b.png" alt="pir" width={600} height="auto" /></p>

13. Escribe `tail -F /tmp/neqto/log/neqto.log` en la terminal del reTerminal 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbef2ccae06004c6d9826.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

14. Después de ejecutar `Reload Script` en NEQTO Console, puedes ver `Hello World!!!` en la terminal del reTerminal 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbf0dccae06004c6d9828.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fa3e0ccae06004c6d97e8.png" alt="pir" width={600} height="auto" /></p>

## Qué Más / Solución de Problemas

- [Soporte NEQTO](https://support.neqto.com/hc/en-us)
- [Directrices de Soporte](https://docs.neqto.com/docs/en/neqto/support-guidelines)

## Recursos

- [Centro de Recursos NEQTO](https://docs.neqto.com/docs/en/linux/software/requirements)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

