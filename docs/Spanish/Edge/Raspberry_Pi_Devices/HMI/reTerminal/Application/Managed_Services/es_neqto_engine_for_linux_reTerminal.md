---
description: Introducción al NEQTO Engine para Linux en reTerminal
title: Introducción al NEQTO Engine para Linux en reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/neqto_engine_for_linux_reTerminal
last_update:
  date: 03/04/2025
  author: Erick González
---

## Introducción

NEQTO es un paquete de software ligero y seguro que permite a las empresas instalar y configurar su software de forma remota en dispositivos perimetrales (edge). NEQTO ofrece la posibilidad de proporcionar servicios de software mejorados a los usuarios finales a través de conectores de plataforma listos para usar y una administración integrada del ciclo de vida del software.

Los dispositivos que tienen instalado NEQTO pueden gestionarse a través de la API o de la consola NEQTO, la cual incluye servicios opcionales para almacenamiento de datos, alertas y monitoreo con watchdog. Las empresas pueden habilitar AIoT con una instalación casi instantánea en cualquier dispositivo Linux e integrar datos sin problemas con servidores en la nube o locales.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/header-img_2x.png" alt="pir" width={600} height="auto" /></p>

## Requisitos previos

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Cómpralo ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

- (Cualquier máquina Linux)

:::tip
- Arquitecturas compatibles: armv6l(32bit), armv7l(32bit), aarch64(64bit), x86_64(64bit)
- Espacio en disco requerido: ≥ 32 MB
- RAM requerida: ≥ 4 MB (en configuraciones por defecto)
- Interfaces de comunicación de red: Debe haber un adaptador de red físico en la placa.
- Monitor, teclado, ratón (opcional)
:::

## Primeros pasos
### Conexión de Hardware
Por favor, consulta la guía de primeros pasos con reTerminal (https://wiki.seeedstudio.com/reTerminal/)

### Crea una cuenta de NEQTO
- Paso 1. Visita esta página (https://console.neqto.com/register) para crear una cuenta NEQTO.
- Paso 2. Ingresa tu dirección de correo electrónico, crea una contraseña y continúa.
- Paso 3. Verifica la cuenta usando el correo de activación que recibas.

### Instalación de NEQTO Linux

1. Selecciona `Manage API Keys for Linux-based Device` desde

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65eee22eccae06004c6d9459.png" alt="pir" width={20} height="auto" /></p>

dentro de la consola NEQTO

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65effd1accae06004c6d94a0.png" alt="pir" width={600} height="auto" /></p>

2. Haz clic en `CREATE API KEY`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65efff89ccae06004c6d94a6.png" alt="pir" width={600} height="auto" /></p>

Luego se mostrará la API Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65efff33ccae06004c6d94a5.png" alt="pir" width={600} height="auto" /></p>


3. Descarga `NEQTO Engine Linux Installer` usando curl o wget.

   En este caso, usaremos el comando wget.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65eeeaa3ccae06004c6d945d.png" alt="pir" width={600} height="auto" /></p>

Copia el `Download link` de `Installer of NEQTO Engine for Linux` y pégalo después de "wget ".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbce4ccae06004c6d9812.png" alt="pir" width={600} height="auto" /></p>

La descarga del instalador se completa correctamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd0cccae06004c6d9813.png" alt="pir" width={600} height="auto" /></p>

4. Cambia los permisos de ejecución del instalador descargado (`neqto-daemon-install.latest.sh`) con el comando chmod antes de ejecutar la instalación de NEQTO Engine para Linux.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd27ccae06004c6d9814.png" alt="pir" width={600} height="auto" /></p>


<!--<div style="page-break-before:always"></div>-->

5. Copia el `API Key` de `API Keys for NEQTO Engine for Linux` en la consola NEQTO y pégalo después de `sudo ./neqto-daemon-install.latest.sh -k `.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd4dccae06004c6d9815.png" alt="pir" width={600} height="auto" /></p>


6. Justo después de la ejecución, se mostrarán notas importantes. Por favor revísalas y escribe "agree" si estás de acuerdo. Después de eso, se ejecutará el registro del dispositivo y la instalación del software continuará.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd63ccae06004c6d9816.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. Espera hasta que se muestre el estado final `Installation completed successfully!`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd7accae06004c6d9817.png" alt="pir" width={600} height="auto" /></p>

Confirmación de que el dispositivo se ha registrado en la consola NEQTO

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd9cccae06004c6d9819.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

### Hola Mundo

1. Haz clic en `ADD GROUP` en la sección `GROUPS`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660f9d61ccae06004c6d97b9.png" alt="pir" width={600} height="auto" /></p>

2. Ingresa `reTerminal` en el campo `Name` y haz clic en `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660f9e99ccae06004c6d97bd.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660f9ebbccae06004c6d97bf.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. Selecciona el grupo `reTerminal` que creaste y haz clic en `SCRIPTS`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbde5ccae06004c6d981a.png" alt="pir" width={600} height="auto" /></p>

4. Haz clic en `ADD SCRIPT`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe00ccae06004c6d981b.png" alt="pir" width={600} height="auto" /></p>

5. Ingresa `Hello World` en el campo `Name` y haz clic en `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe19ccae06004c6d981c.png" alt="pir" width={600} height="auto" /></p>

6. Copia y pega el [código de ejemplo](https://docs.neqto.com/docs/en/getting-started/tutorial-step1#sample-code) desde `Getting Started` en el editor de scripts de la consola NEQTO y luego haz clic en `Save`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe2bccae06004c6d981d.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. Haz clic en `TEMPLATES`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe46ccae06004c6d981e.png" alt="pir" width={600} height="auto" /></p>

Luego haz clic en `ADD TEMPLATE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe5dccae06004c6d981f.png" alt="pir" width={600} height="auto" /></p>

8. Configura `DEVICE INFORMATION` de la siguiente manera:

    - Ingresa `reTerminal Template` en el campo `Name`

    - Selecciona `Linux-based device` para el campo `Firmware Type`

    - Selecciona la versión más reciente para `Firmware Version`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe7cccae06004c6d9820.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

9. En `OPTIONS`, elige `Hello World` en el campo `Script` y haz clic en `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe98ccae06004c6d9821.png" alt="pir" width={600} height="auto" /></p>

10. Haz clic en `NODES`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbea7ccae06004c6d9823.png" alt="pir" width={600} height="auto" /></p>

Luego haz clic en `ADD NODE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbeb4ccae06004c6d9824.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

11. Configura `META DATA` de la siguiente manera:

    - Establece el campo `Name` en `reTerminal`

    - Establece el campo `Template` en `reTerminal Template`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbec5ccae06004c6d9825.png" alt="pir" width={600} height="auto" /></p>

12. Selecciona el dispositivo que acabas de registrar en `DEVICE INFORMATION` y haz clic en `SAVE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fca55ccae06004c6d982a.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fca62ccae06004c6d982b.png" alt="pir" width={600} height="auto" /></p>

13. Escribe `tail -F /tmp/neqto/log/neqto.log` en la terminal del reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbef2ccae06004c6d9826.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

14. Después de ejecutar `Reload Script` en la consola NEQTO, podrás ver `Hello World!!!` en la terminal del reTerminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbf0dccae06004c6d9828.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fa3e0ccae06004c6d97e8.png" alt="pir" width={600} height="auto" /></p>

## Más información / Solución de problemas

- [NEQTO Support](https://support.neqto.com/hc/en-us)
- [Support Guidelines](https://docs.neqto.com/docs/en/neqto/support-guidelines)

## Recursos

- [Centro de Recursos de NEQTO](https://docs.neqto.com/docs/en/linux/software/requirements)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diversas formas de soporte para que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
