---
title: XIAO STM32C5 con STM32CubeIDE
description: ''
keywords:
  - xiao
  - stm32
  - stm32c5
  - stm32cubeide
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_with_stm32cubeide
sku: 100036669
last_update:
  date: 08/17/2026
  author: Zeller
createdAt: '2026-08-14'
updatedAt: '2026-08-17'
url: https://wiki.seeedstudio.com/es/xiao_stm32c5_with_stm32cubeide/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiaostm32c5_cubeide.png" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Consigue uno ahora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## Descripción general

[STM32CubeIDE](https://www.st.com/content/st_com/en/stm32cubeide.html#st-get-software) es el entorno de desarrollo integrado oficial, gratuito y multiplataforma de STMicroelectronics para microcontroladores STM32. También es adecuado para desarrollar aplicaciones para la XIAO STM32C5.

STM32CubeIDE proporciona la toolchain GNU Arm y admite flujos de compilación basados en CMake y Ninja, lo que reduce la necesidad de configuración adicional del entorno. Cubre todo el flujo de trabajo de desarrollo, incluida la creación de proyectos, la configuración de periféricos, la edición de código, la compilación, la programación del firmware y la depuración en el dispositivo.

## Preparación de hardware

Antes de comenzar, prepara los siguientes elementos:

- 1 × XIAO STM32C5
- PC y cable USB tipo‑C
- 1 × ST‑LINK/V2 (opcional)

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO STM32C5</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Consigue uno ahora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

## Instalación de STM32CubeIDE

1. Descarga el paquete de instalación. Haz clic en [STM32CubeIDE Software](https://www.st.com/en/development-tools/stm32cubeide.html) para ir a la página de descarga. Selecciona **Get Software** en la página principal o desplázate hasta la parte inferior de la página. Elige el instalador que coincida con el sistema operativo de tu PC. Se recomienda utilizar la versión más reciente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_2.png" style={{width:600, height:'auto'}}/></div>

2. Puedes descargar el instalador con una cuenta registrada o como invitado. Para este proceso se requiere el correo electrónico y otra información relacionada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_3.png" style={{width:600, height:'auto'}}/></div>

3. El enlace de descarga se enviará a tu dirección de correo electrónico. Haz clic en el enlace para obtener el instalador del software.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_4.png" style={{width:600, height:'auto'}}/></div>

4. Ejecuta el instalador, lee los acuerdos de licencia correspondientes y selecciona **I Agree**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_5.png" style={{width:600, height:'auto'}}/></div>

5. Selecciona el directorio de instalación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_6.png" style={{width:600, height:'auto'}}/></div>

6. Instala el controlador para la sonda de depuración que planeas usar. Los controladores de la sonda no son necesarios para los pasos de flasheo UF2 que se muestran a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_7.png" style={{width:600, height:'auto'}}/></div>

## Desarrollo con XIAO STM32C5

1. Dado que la XIAO STM32C5 admite de forma nativa el flasheo de firmware en formato UF2, se proporciona un proyecto de ejemplo de referencia para simplificar tu desarrollo. Haz clic en el siguiente enlace para descargar el ejemplo:

- **🗃️[Project]** [XIAO STM32C5 Blink Project](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/xiao_c5_project.zip)

- Extrae el archivo comprimido después de descargarlo. La estructura resultante del proyecto debe coincidir con el esquema que se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_8.png" style={{width:800, height:'auto'}}/></div>

2. Inicia STM32CubeIDE; aparecerá la interfaz que se muestra a continuación. El contenido de esta sección está extraído del **📄[PDF]** [STM32CubeIDE User Guide](https://www.st.com/resource/en/user_manual/um2609-stm32cubeide-user-guide-stmicroelectronics.pdf)

:::note

En el primer inicio, STM32CubeIDE solicita la selección del espacio de trabajo. El espacio de trabajo predeterminado funciona bien y no afectará a los pasos posteriores.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_9.png" style={{width:800, height:'auto'}}/></div>

3. Importa el proyecto. En la barra de herramientas superior derecha, ve a **File → STM32 Project Create/Import** y luego selecciona **Import STM32CubeMX / STM32CubeIDE Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_10.png" style={{width:800, height:'auto'}}/></div>

4. Elige el directorio del proyecto extraído **xiao_c5_project** y haz clic en **Finish**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_11.png" style={{width:800, height:'auto'}}/></div>

5. Después de la importación, la estructura del proyecto se muestra en la siguiente figura.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_12.png" style={{width:800, height:'auto'}}/></div>

- **SDK**: Contiene el paquete SDK STM32CubeC5. Es un SDK reducido que solo incluye los archivos esenciales para compilar el firmware de la XIAO STM32C5; no es la versión completa del SDK.
- **Source**: Directorio de código fuente, que contiene `main.c` y archivos de definición específicos de la placa para la XIAO STM32C5.
- **Startup**: Archivos de inicio obligatorios para la XIAO STM32C5.
- **tools**: Contiene el script `uf2conv.py`, que convierte los binarios compilados bin al formato UF2 después de cada compilación.

### Compilación y flasheo del firmware

1. Descripción general del programa. Abre **Source → main.c**. Este es un ejemplo sencillo de parpadeo del LED integrado para la XIAO STM32C5. Cambia el nivel lógico del LED cada 500 ms para lograr el efecto de parpadeo.

```c
/**
 * @file    main.c
 * @brief   Minimal LED application for the Seeed XIAO STM32C5.
 *
 * SPDX-License-Identifier: MIT
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 */
#include "board.h"
#include "uart_io.h"

int main(void)
{
    if (HAL_Init() != HAL_OK) {
        Error_Handler();
    }

    board_clock_init();
    board_uart_init();
    board_led_init();

//    uprintln("[LED] PB12 onboard LED is blinking (500 ms interval)");
    uart_log_flush();

    while (1) {
        HAL_GPIO_TogglePin(LED_PORT, LED);
        uprintln("[LED] PB12 onboard LED is blinking");
        uart_log_flush();
        HAL_Delay(500U);
    }
}
```

- `board_clock_init();`: Inicializa los relojes de periféricos necesarios para la XIAO STM32C5.
- `board_uart_init();`: Inicializa la configuración de E/S UART para la XIAO STM32C5.
- `board_led_init();`: Inicializa la configuración de E/S para el LED de usuario integrado de la XIAO STM32C5.
- `HAL_GPIO_TogglePin(LED_PORT, LED);`: Función de conmutación GPIO de la biblioteca STM32 HAL, que conmuta el nivel lógico GPIO del LED de usuario.

2. En la barra de herramientas, selecciona **Release** para activar la compilación automática del proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_13.png" style={{width:800, height:'auto'}}/></div>

3. Después de una compilación correcta, se generará una carpeta **Release** que contiene múltiples artefactos de compilación. Entre estas salidas, el archivo bin y el archivo uf2 son los que necesitas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_14.png" style={{width:600, height:'auto'}}/></div>

:::tip

También puedes compilar el proyecto seleccionando **Build**. Esto crea una carpeta **Build** que contiene los archivos de firmware generados.

:::

### Flasheo de firmware en formato UF2

- Pulsa dos veces el botón de reinicio en la XIAO STM32C5. Aparecerá la unidad de almacenamiento masivo de la XIAO STM32C5. Copia el archivo UF2 en esta unidad para finalizar el flasheo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_15.png" style={{width:800, height:'auto'}}/></div>


### Flasheo con [ST-LINK/V2](https://www.st.com/en/development-tools/st-link-v2.html)

[ST-LINK/V2](https://www.st.com/en/development-tools/st-link-v2.html) es una herramienta oficial de depuración y programación lanzada por STMicroelectronics. Es compatible con las familias de microcontroladores STM8 y STM32, y permite la descarga de programas, el flasheo de firmware y la depuración en chip a través de las interfaces SWIM, JTAG o SWD. La siguiente sección describe cómo flashear firmware a la XIAO STM32C5 usando ST‑LINK/V2 junto con STM32CubeIDE

- Conecta el ST‑LINK/V2 a tu PC. En el IDE, ve a **Help → ST‑LINK Upgrade** y actualiza su firmware a la versión más reciente para garantizar una buena compatibilidad con los dispositivos STM32C5.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_15_1.png" style={{width:800, height:'auto'}}/></div>

- Conecta el ST‑LINK/V2 al XIAO STM32C5. Consulta abajo las conexiones de pines. Este paso requiere soldadura.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_16.png" style={{width:800, height:'auto'}}/></div>

:::tip

1. Entre los pines de conexión, RST es una interfaz opcional y puede dejarse sin conectar.
2. También puedes usar el [**XIAO Debug Mate**](https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html) para conectarte a la herramienta ST‑LINK/V2, lo que elimina la necesidad de soldadura manual.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_16_1.jpg" style={{width:600, height:'auto'}}/></div>
:::
<br/>
- Haz clic en **Run** en la barra de herramientas para completar el flasheo. STM32CubeIDE detectará automáticamente el programador ST‑LINK/V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_17.png" style={{width:800, height:'auto'}}/></div>

## Resumen

- Después de flashear el firmware correspondiente al XIAO STM32C5 usando los métodos anteriores, el LED de usuario integrado conmutará y parpadeará cada 500 ms.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4_1.gif" style={{width:500, height:'auto'}}/></div>

También puedes conectar D6 y D7 a un adaptador TTL‑a‑UART. Abre cualquier monitor serie; el puerto serie imprimirá la cadena **[LED] PB12 onboard LED is blinking** cada 500 ms.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_18.png" style={{width:800, height:'auto'}}/></div>

## Archivos dentro de la carpeta Source

- **board.c / board.h**

  Define el mapeo de pines y los recursos específicos de la placa para XIAO STM32C5. Proporciona configuraciones de inicialización para periféricos como reloj, GPIO, CAN y ADC, y puede servir como base para el desarrollo de aplicaciones.

- **test.c / test.h**

  Proporciona rutinas de verificación para periféricos integrados como el IMU y el LED, así como interfaces que incluyen CAN, SPI, I2C y ADC. Estas rutinas pueden utilizarse para la validación de funciones de hardware y como referencia de código.

- **uart_io.c / uart_io.h**

  Gestiona el procesamiento de caracteres y el análisis de comandos para los datos UART recibidos, ofreciendo un punto de entrada interactivo para las rutinas de prueba. Las interfaces de comunicación de bajo nivel son implementadas por otros módulos.

## Recursos de referencia

- **🗃️[Project]** [Proyecto de parpadeo XIAO STM32C5](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/xiao_c5_project.zip)
- **📄[Document]** [Guía de usuario de STM32CubeIDE](https://www.st.com/resource/en/user_manual/um2609-stm32cubeide-user-guide-stmicroelectronics.pdf)
- **📄[Datasheet]** [STM32C5A3CGX](https://www.st.com/resource/en/datasheet/stm32c5a3cg.pdf)
- **📄[Examples]** [Librería de ejemplos STM32](https://dev.st.com/stm32-example-library/)

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
