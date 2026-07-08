---
title: Matter para XIAO nRF54LM20A
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_Matter.webp
slug: /xiao_nrf54lm20a_with_matter
sku: 100018440
last_update:
  date: 05/26/2026
  author: Zeller
createdAt: '2025-05-26'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_with_matter/
---

# Matter para XIAO nRF54LM20A

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_Matter.png" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
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


## Introducción

Impulsada por el SoC nRF54LM20A, la Serie XIAO nRF54LM20A es compatible con Bluetooth LE, Matter, Thread, Zigbee y protocolos propietarios de 2,4 GHz, ofreciendo una velocidad de datos máxima de 4 Mbps ideal para escenarios de baja latencia.

Este tutorial utiliza dos placas XIAO nRF54LM20A para verificar la creación de red Matter: una actúa como router de borde conectado a Home Assistant, y la otra funciona como un dispositivo Matter que se une a la red Thread para mostrar datos simulados de temperatura y humedad en el panel de Home Assistant.

***Gracias al autor [@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) por las ideas para la Wiki***

:::tip

Este tutorial se basa en VS Code y la extensión nRF Connect. Si eres nuevo en ellas, puedes consultar [XIAO nRF54LM20A nRFConnect SDK Usage](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_ncs/)

:::

### Qué es Matter

Matter (anteriormente CHIP) es un estándar universal de capa de aplicación desarrollado por la Connectivity Standards Alliance (CSA).

- Interoperabilidad entre proveedores sobre redes IP (Wi-Fi/Ethernet/Thread)
- Tipos de dispositivos estandarizados (por ejemplo, luces, cerraduras de puertas, termostatos)
- Puesta en servicio segura mediante códigos QR/NFC
- Cifrado de extremo a extremo con Distributed Compliance Ledger (DCL)

### Qué es OpenThread

OpenThread es una implementación de código abierto del protocolo de red Thread. Crea redes malladas de baja potencia y seguras para dispositivos IoT utilizando la tecnología de radio IEEE 802.15.4. Características clave:

- Compatibilidad integrada con IPv6 (6LoWPAN)
- Topología de red autoorganizada
- Cifrado AES-128 para todas las comunicaciones
- Compatible con dispositivos tan pequeños como bombillas o sensores

### Cuál es la relación entre Matter y Thread

***Gracias al autor[@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) por una explicación muy detallada de este punto, ¡citándola aquí!***

Después de esta breve introducción a Matter y Thread, ahora entiendes que Thread y Matter tienen propósitos diferentes y operan en distintas capas de la pila tecnológica. Para recapitular:

Thread:

- Thread es un protocolo de red mallada inalámbrica y de baja potencia diseñado para dispositivos del hogar conectado. Proporciona una forma fiable y segura para que los dispositivos se comuniquen entre sí y con Internet.
- Thread crea una red local que permite que los dispositivos se comuniquen entre sí incluso si se cae la conexión a Internet.

Matter:

- Matter es un protocolo de capa de aplicación que se sitúa sobre protocolos de red como Thread, Wi-Fi y Ethernet. Su objetivo es simplificar y unificar el ecosistema del hogar inteligente garantizando que los dispositivos de distintos fabricantes puedan funcionar juntos sin problemas.
- Matter define cómo se comunican e interactúan los dispositivos a nivel de aplicación, centrándose en la interoperabilidad, la seguridad y la facilidad de uso.

Conexión entre Thread y Matter:

- Matter puede utilizar Thread como uno de sus protocolos de red subyacentes. Esto significa que los dispositivos que usan el protocolo Matter pueden comunicarse a través de una red Thread.
- La combinación de Matter y Thread permite un ecosistema de hogar inteligente robusto, seguro e interoperable donde los dispositivos pueden comunicarse localmente y de forma eficiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/TOPPLOGY.jpg" style={{width:900, height:'auto'}}/></div>

## Introducción a [Home Assistant](https://www.home-assistant.io/)

Home Assistant es una potente plataforma de automatización del hogar de código abierto que te permite controlar y supervisar tus dispositivos de hogar inteligente desde una única interfaz unificada. Actúa como el concentrador central de tu hogar inteligente, lo que te permite automatizar rutinas, supervisar sensores y crear un espacio vital más inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Más información 🖱️</font></span></strong></a>
</div>

## Preparación de hardware

Se requieren dos XIAO nRF54LM20A Sense para la preparación del hardware.

<div className="table-center">
<table align="center">
    <tr>
        <th>Home Assistant Green</th>
        <th>SeeedStudio XIAO nRF54LM20A × 2</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Gree_HA.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>
</div>

## Antena Bluetooth

Esta placa utiliza una antena Bluetooth externa. Para garantizar una mejor calidad de la señal Bluetooth y mejorar tu experiencia de uso de Bluetooth, se recomienda instalar una antena Bluetooth.
El método de conexión se muestra a continuación:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_6.gif"
    alt="Bluetooth antenna connection"
    style={{width: 600, height: 'auto'}}
  />
</div>

## Conectar a HomeAssistant mediante Matter

### Instalar el complemento

Ve a Settings -> Apps y selecciona Install app para añadir el complemento.

1. Añade **Open Thread Border Router** y modifica su configuración.

- Ve a Settings -> Apps, selecciona Install app para añadir el complemento, luego busca **Open Thread Border Router** y completa la instalación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_1.png" style={{width:800, height:'auto'}}/></div>

2. Añade **Matter Server**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_2.png" style={{width:800, height:'auto'}}/></div>

### Configurar el enrutamiento Thread

Sigue los pasos a continuación para grabar un XIAO nRF54LM20A como coprocesador para emular un dispositivo router de borde.

:::tip

También se pueden utilizar dispositivos de enrutamiento Thread como Connect ZBT-1, Connect ZBT-2 o Home Assistant Yellow.

:::

#### Grabar el XIAO nRF54LM20A con firmware de coprocesador RCP

:::tip

Este tutorial se basa en VS Code y la extensión nRF Connect. Si eres nuevo en ellas, puedes consultar [XIAO nRF54LM20A nRFConnect SDK Usage](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_ncs/#getting-started-with-ncs)

:::

1. Selecciona Create a new application, elige copy a sample, busca Coprocessor y crea el proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_3.png" style={{width:800, height:'auto'}}/></div>

2. Añade y modifica los archivos de configuración del árbol de dispositivos en la carpeta boards. Desactiva la configuración I2C utilizada por el PMIC para evitar conflictos y establece la velocidad en baudios de UART20 en 1000000.

Ruta del archivo: ~/boards：

- xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay.

```dts
&uart20 {
        current-speed = <1000000>;
        status = "okay";
        hw-flow-control;
};

/ {
        chosen {
                zephyr,ot-uart = &uart20;
        };
};

&pmic_i2c {
        status = "disabled";
};

&pmic {
        status = "disabled";

        charger {
                status = "disabled";
        };

        regulators {
                status = "disabled";

                LDO1 {
                        status = "disabled";
                };
        };
};
```

- xiao_nrf54lm20a_nrf54lm20a_cpuapp.conf.

```conf
#
# Copyright (c) 2025 Nordic Semiconductor ASA
#
# SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
#

CONFIG_SPI_NOR=n

# Increase Main and shell stack sizes to avoid stack overflow
# while using CRACEN
CONFIG_MAIN_STACK_SIZE=2048
```

3. Compila y habilita la configuración.

- Configura y compila el proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-2.png" style={{width:800, height:'auto'}}/></div>

- Graba el firmware usando `west flash`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter_9_mt5.png" style={{width:800, height:'auto'}}/></div>
<br/>
4. Para detectar el dispositivo en Home Assistant, conecta el XIAO nRF54LM20A flasheado con el firmware Coprocessor a Home Assistant Green mediante USB-C.

- Abre la tienda de Add-on, localiza Open Thread Border Router y configúralo. Verás el dispositivo llamado XIAO nRF54LM20A; configura la velocidad en baudios y otros parámetros, luego guarda la configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_6.png" style={{width:800, height:'auto'}}/></div>

- Selecciona Start en la pestaña Info.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_7.png" style={{width:800, height:'auto'}}/></div>

- Puedes comprobar el estado de la configuración en el Log: la configuración se ha realizado correctamente como se muestra en la figura siguiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_8.png" style={{width:800, height:'auto'}}/></div>

- Ve a Settings -> Thread para descubrir el dispositivo, que normalmente se llama `ha-thread-c6c8`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_9.png" style={{width:800, height:'auto'}}/></div>

### Configurar el dispositivo Matter

1. Elige Create a new application, selecciona copy a sample, busca Matter-Template y crea el proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_10.png" style={{width:800, height:'auto'}}/></div>

2. Modifica los archivos del device tree y los archivos de configuración.

- Debido a las diferencias de hardware entre el XIAO nRF54LM20A y la placa de evaluación oficial de Nordic, es necesario revisar los archivos del device tree y de configuración. La placa de evaluación oficial está equipada con un chip de memoria flash externo MX25R64, mientras que el XIAO nRF54LM20A utiliza un PY25Q64; se deben realizar los ajustes correspondientes.

- Los archivos que se deben añadir se enumeran a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-8.png" style={{width:350, height:'auto'}}/></div>

Ruta del archivo: ~/boards：

- xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay
- xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay</summary>

```dts
/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
 */

/ {
	aliases {
		/* Use watchdog wdt31 as the application watchdog */
		watchdog0 = &wdt31;
	};
};

&py25q64 {
	status = "disabled";
};

&wdt31 {
	status = "okay";
};
```

</details>

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</summary>

```dts
/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
 */

/ {
	chosen {
		nordic,pm-ext-flash = &py25q64;
	};

	aliases {
		/* Use watchdog wdt31 as the application watchdog */
		watchdog0 = &wdt31;
	};
};

&py25q64 {
	status = "okay";
};

&wdt31 {
	status = "okay";
};
```

</details>

Ruta del archivo: ~/sysbuild/mcuboot/boards：


<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.conf</summary>

```conf
#
# Copyright (c) 2025 Nordic Semiconductor ASA
#
# SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
#

CONFIG_HW_STACK_PROTECTION=n
CONFIG_BOOT_WATCHDOG_FEED=n

# Disable all debug features
CONFIG_ASSERT_VERBOSE=n
CONFIG_ASSERT_NO_FILE_INFO=y
CONFIG_PRINTK=n

# Bootloader size optimization to fit into 28 KB partition.
# These options can be safely disabled because in this configuration,
# the secondary slot resides in the internal RRAM, so features
# needed to handle the external flash are not needed.
CONFIG_SPI_NOR=n
CONFIG_SPI=n

# Increase the maximum number of sectors to 512 to fit the big image size (> 1024 kB).
CONFIG_BOOT_MAX_IMG_SECTORS=512

# Currently, without tickless kernel, the SYSCOUNTER value after the software
# reset is not set properly and due to that the first system interrupt is not called
# in the proper time - the SYSCOUNTER value is set to the value from before
# reset + 1. Hence, the reboot time increases more and more.
# To avoid it enable tickless kernel for mcuboot.
CONFIG_TICKLESS_KERNEL=y

```

</details>

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay</summary>

```dts
/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
 */

/* Disable the external flash, as it's not needed
 * for the configuration with secondary slot residing
 * in the internal RRAM.
 */
&py25q64 {
	status = "disabled";
};
```

</details>

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp.conf</summary>

```conf
#
# Copyright (c) 2025 Nordic Semiconductor ASA
#
# SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
#

CONFIG_HW_STACK_PROTECTION=n
CONFIG_BOOT_WATCHDOG_FEED=n

# XIAO nRF54LM20A uses SPI NOR external flash (PY25Q64)
CONFIG_GPIO=y
CONFIG_SPI=y
CONFIG_SPI_NOR=y
CONFIG_SPI_NOR_SFDP_DEVICETREE=y
CONFIG_SPI_NOR_FLASH_LAYOUT_PAGE_SIZE=4096

# Increase the maximum number of sectors to 512 to fit the big image size (> 1024 kB).
CONFIG_BOOT_MAX_IMG_SECTORS=512

# Currently, without tickless kernel, the SYSCOUNTER value after the software
# reset is not set properly and due to that the first system interrupt is not called
# in the proper time - the SYSCOUNTER value is set to the value from before
# reset + 1. Hence, the reboot time increases more and more.
# To avoid it enable tickless kernel for mcuboot.
CONFIG_TICKLESS_KERNEL=y
```

</details>

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</summary>

```conf
/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
 */

/ {
	chosen {
		nordic,pm-ext-flash = &py25q64;
	};
};

&py25q64 {
	status = "okay";
};
```

</details>

Ruta del proyecto ~/ :

<details>

<summary>pm_static_xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.yml</summary>

```yml
mcuboot:
  address: 0x0
  region: flash_primary
  size: 0xA000
mcuboot_pad:
  address: 0xA000
  region: flash_primary
  size: 0x800
app:
  address: 0xA800
  region: flash_primary
  size: 0x125800
mcuboot_primary:
  address: 0xA000
  orig_span: &id001
  - app
  - mcuboot_pad
  region: flash_primary
  size: 0x126000
  span: *id001
mcuboot_primary_app:
  address: 0xA800
  orig_span: &id002
  - app
  region: flash_primary
  size: 0x125800
  span: *id002
mcuboot_secondary:
  address: 0x130000
  orig_span: &id003
  - mcuboot_secondary_pad
  - mcuboot_secondary_app
  region: flash_primary
  size: 0xC0000
  span: *id003
mcuboot_secondary_pad:
  region: flash_primary
  address: 0x130000
  size: 0x800
# Compression rate 34.75%
mcuboot_secondary_app:
  region: flash_primary
  address: 0x130800
  size: 0xBF800
factory_data:
  address: 0x1F0000
  region: flash_primary
  size: 0x1000
settings_storage:
  address: 0x1F1000
  region: flash_primary
  size: 0xC000
```

</details>

<details>

<summary>pm_static_xiao_nrf54lm20a_nrf54lm20a_cpuapp.yml</summary>

```yml
mcuboot:
  address: 0x0
  region: flash_primary
  size: 0xD000
mcuboot_pad:
  address: 0xD000
  region: flash_primary
  size: 0x800
app:
  address: 0xD800
  region: flash_primary
  size: 0x1E2800
mcuboot_primary:
  address: 0xD000
  orig_span: &id001
  - app
  - mcuboot_pad
  region: flash_primary
  size: 0x1E3000
  span: *id001
mcuboot_primary_app:
  address: 0xD800
  orig_span: &id002
  - app
  region: flash_primary
  size: 0x1E2800
  span: *id002
factory_data:
  address: 0x1F0000
  region: flash_primary
  size: 0x1000
settings_storage:
  address: 0x1F1000
  region: flash_primary
  size: 0xC000
mcuboot_secondary:
  address: 0x0
  orig_span: &id003
  - mcuboot_secondary_pad
  - mcuboot_secondary_app
  region: external_flash
  size: 0x1E3000
  span: *id003
mcuboot_secondary_pad:
  region: external_flash
  address: 0x0
  size: 0x800
mcuboot_secondary_app:
  region: external_flash
  address: 0x800
  size: 0x1E2800
external_flash:
  address: 0x1E3000
  size: 0x5DB000
  device: PY25Q64
  region: external_flash
```

</details>

:::tip

Para los dos últimos archivos, debes crearlos tú mismo y pegar el código

:::

#### Descripción del propósito de los archivos añadidos

<table>
  <thead>
    <tr>
      <th>File</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td colspan="2"><strong>1. Archivos de Overlay de la placa (<code>boards/</code>)</strong><br/>
      Overlays del device tree a nivel de aplicación para el XIAO nRF54LM20A.</td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</code></td>
      <td>
        <strong>Variante con Flash externa:</strong> Habilita la memoria Flash SPI NOR PY25Q64 como ranura secundaria OTA;<br/>
        habilita el watchdog wdt31;<br/>
        declara <code>nordic,pm-ext-flash</code> para que el Partition Manager pueda reconocer la Flash externa.
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay</code></td>
      <td>
        <strong>Variante con Flash interna:</strong> Deshabilita el PY25Q64 (reduce el coste de la lista de materiales y el consumo de energía);<br/>
        sitúa la ranura secundaria OTA en la RRAM interna;<br/>
        habilita el watchdog wdt31.
      </td>
    </tr>

    <tr>
      <td colspan="2"><strong>2. Archivos de configuración de MCUboot (<code>sysbuild/mcuboot/boards/</code>)</strong><br/>
      MCUboot es una imagen Zephyr independiente que requiere sus propios archivos Kconfig y de overlay del device tree.</td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp.conf</code></td>
      <td>
        <strong>Flash externa — Kconfig:</strong> Habilita los controladores SPI/SPI_NOR para el acceso a PY25Q64;<br/>
        establece <code>BOOT_MAX_IMG_SECTORS=512</code> para firmware de gran tamaño;<br/>
        habilita el kernel sin ticks.
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</code></td>
      <td>
        <strong>Flash externa — Overlay DTS:</strong> Habilita PY25Q64 como <code>pm-ext-flash</code>,
        permitiendo que MCUboot acceda a la imagen OTA en la Flash externa durante el arranque.
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.conf</code></td>
      <td>
        <strong>Flash interna — Kconfig:</strong> Desactiva SPI/SPI_NOR;<br/>
        desactiva la salida de depuración (<code>PRINTK=n</code>, <code>ASSERT=n</code>) para reducir el tamaño de MCUboot para la partición de 40 KB;<br/>
        establece <code>BOOT_MAX_IMG_SECTORS=512</code>.
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay</code></td>
      <td>
        <strong>Flash interna — Superposición DTS:</strong> Desactiva PY25Q64, asegurando que MCUboot use solo la Flash interna.
      </td>
    </tr>

    <tr>
      <td colspan="2"><strong>3. Archivos de partición estática (<code>pm_static_*.yml</code>)</strong><br/>
      Tablas de partición estática para el Partition Manager, que definen el diseño completo de la Flash para MCUboot, APP, OTA, datos de fábrica y ajustes.</td>
    </tr>
    <tr>
      <td><code>pm_static_xiao_nrf54lm20a_nrf54lm20a_cpuapp.yml</code></td>
      <td>
        <strong>Variante de Flash externa:</strong> <code>mcuboot_secondary</code> (imagen OTA) reside en la Flash externa (PY25Q64);<br/>
        el tamaño utilizable de la APP es <code>0x1E2800</code> (~1,9 MB).
      </td>
    </tr>
    <tr>
      <td><code>pm_static_xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.yml</code></td>
      <td>
        <strong>Variante de Flash interna:</strong> <code>mcuboot_secondary</code> reside en la Flash interna;<br/>
        MCUboot se reduce a <code>0xA000</code> (40 KB);<br/>
        la APP se reduce a <code>0x125800</code> (~1,2 MB);<br/>
        la imagen OTA requiere compresión.
      </td>
    </tr>

  </tbody>
</table>



#### Flashear y descargar al dispositivo

- Continúa con la configuración de la compilación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-3.png" style={{width:800, height:'auto'}}/></div>

- Selecciona otro XIAO nRF54LM20A como dispositivo de destino, inicia OpenTerminal y flashea el firmware usando el comando `west flash`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-4.png" style={{width:800, height:'auto'}}/></div>

### Conecta el dispositivo Matter usando la app Home Assistant.

1. Conecta el dispositivo Matter y genera el código QR del dispositivo.

- En el entorno de desarrollo NCS, abre el nRF Serial Terminal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-5.2.png" style={{width:800, height:'auto'}}/></div>
<br/>
- Aparecerá una lista de puertos serie en la parte superior de la interfaz; selecciona el puerto serie correspondiente a XIAO nRF54LM20A.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-6.png" style={{width:800, height:'auto'}}/></div>
<br/>
- La información del dispositivo Matter y el enlace del código QR de emparejamiento se mostrarán a través de los registros serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-7.2.png" style={{width:800, height:'auto'}}/></div>
<br/>
- Toca directamente el enlace del código QR o copia el enlace a un navegador web por separado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_16.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Descarga la app Home Assistant.

- La inclusión del dispositivo Matter en Home Assistant se completa a través de la aplicación móvil; escanea el código QR proporcionado para descargar la app.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_17.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. Ve a los ajustes para añadir el dispositivo Matter y luego escanea el código QR generado en el navegador para finalizar el emparejamiento.

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_18.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_19.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_20.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_21.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_22.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
</table>

4. La información del dispositivo Matter se puede ver en el panel del navegador de Home Assistant.

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_23.jpg" style={{width:600, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_24.png" style={{width:600, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_25.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
</table>

5. Añade el dispositivo al panel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_26.png" style={{width:800, height:'auto'}}/></div>
<br/>
6. Los datos en tiempo real del dispositivo Matter se mostrarán en el panel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_27.png" style={{width:800, height:'auto'}}/></div>

## Resumen

Siguiendo los procedimientos anteriores, hemos configurado una red Matter over Thread usando dos módulos XIAO nRF54LM20A y conectado correctamente la red a Home Assistant. El protocolo Matter admite el acceso a una gama más amplia de tipos de sensores, mientras que la demostración anterior solo simula la adquisición de datos de temperatura y humedad. Al integrar otros dispositivos de sensores, verifica si los Clusters correspondientes están definidos dentro de la especificación Matter. Para más detalles, consulta la documentación oficial en [Home Assistant Matter](https://www.home-assistant.io/integrations/matter).

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
