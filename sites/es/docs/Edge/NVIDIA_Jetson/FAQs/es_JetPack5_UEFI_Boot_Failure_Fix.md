---
description: Soluciona fallos de arranque repetido en determinados dispositivos Seeed reComputer y reServer Orin que ejecutan JetPack 5.1.3 (L4T 35.5.0).
title: Solucionar el fallo de arranque UEFI de JetPack 5.1.3 en Jetson
keywords:
  - JetPack 5.1.3
  - UEFI
  - QSPI
  - bootloader
image: https://files.seeedstudio.com/wiki/other/JetPack-513-UEFI.png
slug: /jetpack5_uefi_boot_failure_fix
last_update:
  date: 11/19/2026
  author: Dayu
createdAt: '2026-11-18'
updatedAt: '2026-11-18'
url: https://wiki.seeedstudio.com/es/jetpack5_uefi_boot_failure_fix/
---

import { useEffect } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ProductSelect } from '@site/src/components/jetson/JetsonSelect';
import { PrepareRequirementsClassic, RecoveryClassic, PrepareRequirementsIndustrial, RecoveryIndustrial, PrepareRequirementsReserver, RecoveryReserver } from '@site/src/components/jetson/FlashCodeBlock';
import { productOptions as sharedProductOptions } from '@site/src/components/jetson/productData';
import { useJetsonStore } from '@site/src/stores/useJetsonStore';

export const affectedProductValues = [
  'j4012classic', 'j4011classic', 'j3011classic', 'j3010classic',
  'j4012industrial', 'j4011industrial', 'j3011industrial', 'j3010industrial',
  'j4012reserver', 'j4011reserver', 'j3011reserver', 'j3010reserver',
];

export const affectedProductOptions = sharedProductOptions
  .filter(({ value }) => affectedProductValues.includes(value))
  .map(({ value, label, l4t, img, interfaceUsage }) => ({
    value,
    label,
    l4t: l4t.filter((version) => version === '35.5.0'),
    img,
    interfaceUsage: interfaceUsage.en,
  }));

export const BootloaderProductSelect = () => {
  const l4t = useJetsonStore((state) => state.l4t);
  const setL4T = useJetsonStore((state) => state.setL4T);

  useEffect(() => {
    useJetsonStore.setState({ product: 'j4012classic', l4t: '35.5.0' });
  }, []);

  useEffect(() => {
    if (l4t !== '35.5.0') {
      setL4T('35.5.0');
    }
  }, [l4t, setL4T]);

  return <ProductSelect options={affectedProductOptions} lang="en" />;
};

![Corrección del fallo de arranque UEFI de JetPack 5.1.3](https://files.seeedstudio.com/wiki/other/JetPack-513-UEFI.png)

## Problema

:::info Problema de UEFI de NVIDIA upstream
**Este fallo de arranque está causado por un error de firmware UEFI de NVIDIA upstream que afecta a JetPack 5.1.3 y versiones anteriores.** No está causado por el hardware del producto de Seeed ni por el diseño de la carrier board. Este FAQ proporciona soluciones para los dispositivos Seeed afectados que se enumeran a continuación.
:::

En los productos que se indican a continuación, JetPack 5.1.3 (Jetson Linux 35.5.0) puede dejar de arrancar tras ciclos de inicio repetidos. En los debates del foro de NVIDIA se notifican fallos de arranque relacionados en Orin y corrupción de la partición OP-TEE:

- [Orin NX fails to boot: corrupted OP-TEE partition](https://forums.developer.nvidia.com/t/orin-nx-fail-to-boot-corrupted-op-tee-partition/344068/6)
- [Orin on JetPack 5.1.3](https://forums.developer.nvidia.com/t/orin-5-1-3/293414)

Este problema se aplica a estas familias de productos que ejecutan L4T 35.5.0:

- reComputer Classic J40/J30, incluidas las variantes B
- reComputer Industrial J40/J30
- reServer Industrial J40/J30

Elige una de las siguientes soluciones. Si el dispositivo no puede arrancar en Ubuntu, utiliza la **Opción 1**. Si puede arrancar en el espacio de usuario de Ubuntu, la **Opción 2** evita el flasheo desde un PC host.

## Opción 1: Volver a flashear el paquete QSPI MFI parcheado

Esto actualiza el bootloader parcheado en QSPI y conserva los datos de usuario almacenados en el SSD. Descarga el **paquete QSPI-only MFI parcheado** para tu dispositivo exacto desde las pestañas siguientes. La configuración del host, las instrucciones de modo de recuperación y el comando de flasheo siguen el [resumen de flasheo de JetPack](/es/flash/jetpack_to_selected_product).

### Descarga el paquete QSPI MFI parcheado

Todos los paquetes siguientes son para **JetPack 5.1.3 / L4T 35.5.0**. Haz coincidir tanto la familia de productos como el módulo Jetson antes de descargar. Los paquetes Classic también son compatibles con las correspondientes variantes B.

<Tabs groupId="jetpack5-uefi-boot-fix">
  <TabItem value="classic" label="reComputer Classic J40/J30 (B)">

| Producto | Módulo Jetson | Paquete QSPI MFI parcheado |
| --- | --- | --- |
| reComputer Classic J3010 / J3010B | Orin Nano 4GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQAqlWDz2zdIRZKTVBYDWkCHAX3Cz55AFZluL4k7ml1ddZk) |
| reComputer Classic J3011 / J3011B | Orin Nano 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQCoN2fwkuk_Qp5bKVJOOQgBAZKpVXjhD8asNo9l1gmy2uk) |
| reComputer Classic J4011 / J4011B | Orin NX 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBmviQxqpvjSJFj98iAARcVAcs8ehTPyhIId-nYvsQmJ-Y) |
| reComputer Classic J4012 / J4012B | Orin NX 16GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQDV-rfRgCdSRpnIEO0G00BdAb0piBnU_A8oIftLalLDYw4) |

  </TabItem>
  <TabItem value="industrial" label="reComputer Industrial J40/J30">

| Producto | Módulo Jetson | Paquete QSPI MFI parcheado |
| --- | --- | --- |
| reComputer Industrial J3010 | Orin Nano 4GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQAyzO4DsGOTSYfgFJZ1TDaLAWaqXLTo0gTJzmxebidhIfs) |
| reComputer Industrial J3011 | Orin Nano 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQB8H6RGWd6JT6tGJLP8v_pYAZSViOD-LH0swDgxMk9CKq0) |
| reComputer Industrial J4011 | Orin NX 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBifqhryNZPSaPDNqFZ8yeiAfOWUyOzMor_z-96wZfkoEg) |
| reComputer Industrial J4012 | Orin NX 16GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBeemJ7ciR2RLeYG1DI1NvLAcl7uSxwhMXeomUBt_YK75Q) |

  </TabItem>
  <TabItem value="reserver" label="reServer Industrial J40/J30">

| Producto | Módulo Jetson | Paquete QSPI MFI parcheado |
| --- | --- | --- |
| reServer Industrial J3010 | Orin Nano 4GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQDAD6PRbbdtTK3_1j-PLbudAdxV0NQqzkoZ6tfSQHkFfiE) |
| reServer Industrial J3011 | Orin Nano 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQAnMqViu7CmSKL4JbsKob2YAfZ-gboKbE_mIEQ4vznB9F4) |
| reServer Industrial J4011 | Orin NX 8GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQCS0GsZnpHkQ4P5gXNuDlGqAb7q1ntBmiG9xzNNPrxgrns) |
| reServer Industrial J4012 | Orin NX 16GB | [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQB8fzLJ3G_PSLU2U2RbfwbqAXGZBp_e1F2kPnQ1gqXneso) |

  </TabItem>
</Tabs>

### Prepara el host y entra en modo de recuperación

Selecciona a continuación el producto exacto y **R35.5.0 (JetPack 5.1.3)** para mostrar sus requisitos de host y las instrucciones de modo de recuperación, reutilizadas del [resumen de flasheo de JetPack](/es/flash/jetpack_to_selected_product). Instala las dependencias del host indicadas en esa guía antes de flashear. Utiliza el paquete QSPI-only parcheado descargado arriba para el paso de flasheo.

<BootloaderProductSelect />

<PrepareRequirementsClassic lang="en" />
<PrepareRequirementsIndustrial lang="en" />
<PrepareRequirementsReserver lang="en" />
<RecoveryClassic lang="en" />
<RecoveryIndustrial lang="en" />
<RecoveryReserver lang="en" />

### Extraer y flashear

En el PC host, extrae el archivo QSPI MFI parcheado descargado. Sustituye `<patched-qspi-mfi-archive>` por su nombre de archivo real y `<extracted-mfi-directory>` por el directorio extraído que contiene `tools/kernel_flash/l4t_initrd_flash.sh`.

```bash
sudo tar xpf <patched-qspi-mfi-archive>
cd <extracted-mfi-directory>
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Espera a que el flasheo se complete correctamente, luego reinicia el Jetson y confirma que arranca desde el SSD existente.

## Opción 2: Actualizar el bootloader desde el espacio de usuario de Ubuntu

Utiliza esta opción cuando el Jetson todavía arranca en Ubuntu. Instala el paquete de bootloader proporcionado en el dispositivo y no requiere volver a flashear el sistema.

1. Descarga el [paquete de bootloader reComputer Orin](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQDDc4wU3676Qp3FC4MmwLwjAShNzdHT0PjqdNQnBMZ64OA?e=miBcQj) en el Jetson.
2. En una terminal, cambia al directorio que contiene el archivo descargado e instálalo:

   ```bash
   sudo dpkg -i ./nvidia-l4t-bootloader-recomputer-orin_35.5.0-recomputer20261110.1_arm64.deb
   ```

3. Confirma que la versión esperada del paquete de bootloader está instalada:

   ```bash
   sudo dpkg -l | grep nvidia-l4t-bootloader
   ```

   La salida debe incluir este paquete y versión:

   ```text
   nvidia-l4t-bootloader-recomputer-orin  35.5.0-recomputer20261110.1  arm64
   ```

4. Reinicia el Jetson y confirma que se inicia con normalidad.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
