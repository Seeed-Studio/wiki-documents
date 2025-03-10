---
description: Introducción a NEQTO Engine para Linux en una reComputer J30
title: Introducción a NEQTO Engine para Linux en una reComputer J30
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/neqto_engine_for_linux_recomputer
last_update:
  date: 03/14/2024
  author: Kazuhiro Ozuchi
---

## Introducción

NEQTO es un paquete de software ligero y seguro que permite a las empresas instalar y configurar de forma remota su software en dispositivos perimetrales. NEQTO permite a las empresas proporcionar servicios de software mejorados a los usuarios finales a través de conectores de plataforma llave en mano y gestión integrada del ciclo de vida del software.

Los dispositivos instalados con NEQTO se pueden administrar a través de una API o la consola NEQTO lista para usarse, que incluye servicios opcionales para almacenamiento de datos, alertas y monitoreo de vigilancia. Las empresas pueden habilitar AIoT con una instalación casi instantánea en cualquier dispositivo Linux y una perfecta integración de datos con cualquier servidor local o en la nube.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/header-img_2x.png" alt="pir" width={600} height="auto" /></p>

## Prerequisitos

### Hardware soportado

Puedes elegir cualquiera de los dos:

<div class="table-center">
  <table align="center">
    <tr>
        <th>reComputer J3011 - NVIDIA Jetson Orin™ Nano 8GB </th>
        <th>reComputer J4011 - NVIDIA Jetson Orin™ NX 8GB</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image1_1_1.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image2.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4011-p-5585.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

- (Cualquier máquina con Linux instalado)

:::tip
- Arquitecturas soportadas: armv6l(32bit), armv7l(32bit), aarch64(64bit), x86_64(64bit)
- Cantidad de memoria requerida en el disco: ≥ 32 MB
- Cantidad de RAM requerida: ≥ 4MB (In default settings)
- Interfaces de comunicación de red: debe haber un adaptador de red físico.
- Monitor, teclado y mouse (opcional)
:::

## Primeros pasos

### Crea una cuenta NEQTO:

- Paso 1. Visita la [página oficial](https://console.neqto.com/register) para crear una cuenta NEQTO
- Paso 2. Ingresa tu dirección de correo electrónico, crea una contraseña y continúa
- Paso 3. Verifica la cuenta desde el correo electrónico de activación que recibiste

### Instalación de NEQTO en Linux

1. Selecciona `Manage API Keys for Linux-based Device` desde

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eee22eccae06004c6d9459.png" alt="pir" width={20} height="auto" /></p>

en la consola de NEQTO

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65effd1accae06004c6d94a0.png" alt="pir" width={600} height="auto" /></p>

2. Haz click en `CREATE API KEY`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65efff89ccae06004c6d94a6.png" alt="pir" width={600} height="auto" /></p>

Y luego se mostrará la API Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65efff33ccae06004c6d94a5.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. Descarga `NEQTO Engine Linux Installer` mediante curl o wget.

    Esta vez, usa el comando wget.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eeeaa3ccae06004c6d945d.png" alt="pir" width={600} height="auto" /></p>

Copia el `Enlace de descarga` del `Instalador de NEQTO Engine para Linux` y pégalo después de "wget␣".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00259ccae06004c6d94a8.png" alt="pir" width={600} height="auto" /></p>

El instalador se descarga correctamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f002fbccae06004c6d94aa.png" alt="pir" width={600} height="auto" /></p>

4. Cambia los permisos de ejecución del instalador descargado (`neqto-daemon-install.latest.sh`) con el comando chmod antes de ejecutar la instalación de NEQTO Engine para Linux.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00369ccae06004c6d94ab.png" alt="pir" width={600} height="auto" /></p>


<!--<div style="page-break-before:always"></div>-->

5. Copia la `API Key` de `API Keys for NEQTO Engine for Linux` en la consola NEQTO y pégala después de `sudo. /neqto-daemon-install.sh␣-k␣`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00476ccae06004c6d94ae.png" alt="pir" width={600} height="auto" /></p>

6. Ingresa tu contraseña

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00529ccae06004c6d94af.png" alt="pir" width={600} height="auto" /></p>

7. Inmediatamente después de la ejecución, se mostrarán notas importantes. Por favor, verifícalo e ingresa "aceptar" si estás de acuerdo. A partir de entonces, se ejecutará el registro del dispositivo y continuará la instalación del software.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f005c1ccae06004c6d94b1.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

8. Espera hasta que se muestre el estado final "¡La instalación se completó correctamente!".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00657ccae06004c6d94b3.png" alt="pir" width={600} height="auto" /></p>

Confirmación de que el dispositivo ha sido registrado en la Consola NEQTO

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00722ccae06004c6d94b5.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

### ¡Hola mundo!

1. Haz click en `ADD GROUP` debajo de `GROUPS`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eef7b9ccae06004c6d947b.png" alt="pir" width={600} height="auto" /></p>

2. Ingresa `reComputer J30` en `Nombre` y haz click en `GUARDAR`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eef7d6ccae06004c6d947c.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f007ddccae06004c6d94b6.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. Selecciona `reComputer J30` y haz click en `SCRIPTS`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f0392accae06004c6d9518.png" alt="pir" width={600} height="auto" /></p>

4. Haz click en `ADD SCRIPT`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f0379fccae06004c6d9512.png" alt="pir" width={600} height="auto" /></p>

5. Escribe `Hello World` en el campo `nombre` y haz click en `guardar`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03861ccae06004c6d9515.png" alt="pir" width={600} height="auto" /></p>

6. Copia y pega el [código de ejemplo](https://docs.neqto.com/docs/en/getting-started/tutorial-step1#sample-code) desde `Getting Started` al editor de scripts de la consola NEQTO y luego haz click en `Save`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f036f4ccae06004c6d950f.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. Haz click en `TEMPLATES`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f035d5ccae06004c6d950d.png" alt="pir" width={600} height="auto" /></p>

Y luego haz click en `ADD TEMPLATE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03451ccae06004c6d950a.png" alt="pir" width={600} height="auto" /></p>

8. Configura `INFORMACIÓN DEL DISPOSITIVO` de la siguiente manera

    - Escribe `reComputer J30 Template` en el campo `Name`

    - Selecciona `Linux-based device` en el campo `Firmware Type`

    - Selecciona la última versión disponible en el campo `Firmware Version`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03337ccae06004c6d9505.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

9. Para "OPCIONES", selecciona "Hello world" en el campo "Script" y haz click en "GUARDAR".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03261ccae06004c6d9501.png" alt="pir" width={600} height="auto" /></p>

10. Haz click en `NODES`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f0313accae06004c6d94fe.png" alt="pir" width={600} height="auto" /></p>

Y luego haz click en `ADD NODE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03019ccae06004c6d94fb.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

11. Configura `META DATA` tal como se muestra a continuación

    - Establece el campo `Nombre` como `reComputer J30`

    - Establece el campo `Plantilla` como `reComputer J30 Template`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02f56ccae06004c6d94f8.png" alt="pir" width={600} height="auto" /></p>

12. Selecciona el dispositivo que acabas de registrar en "INFORMACIÓN DEL DISPOSITIVO" y haz click en "GUARDAR".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02e10ccae06004c6d94f5.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02d0dccae06004c6d94f2.png" alt="pir" width={600} height="auto" /></p>

13. Escribe `tail -F /tmp/neqto/log/neqto.log` en la terminal de la reComputer J30

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00ac6ccae06004c6d94c8.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

14. Después de ejecutar `Reload Script` en la consola NEQTO, podrás ver `Hello World!!!` en la terminal de la reComputer J30

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02b89ccae06004c6d94ef.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00bf7ccae06004c6d94cd.png" alt="pir" width={600} height="auto" /></p>

## Contenido adicional / Solución de problemas

- [Soporte NEQTO](https://support.neqto.com/hc/en-us)
- [Directrices de soporte](https://docs.neqto.com/docs/en/neqto/support-guidelines)

## Recursos

- [Centro de recursos NEQTO](https://docs.neqto.com/docs/en/linux/software/requirements)

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

