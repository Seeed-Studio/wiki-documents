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
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_with_matter/
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
                  Adquira agora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>


## Introdução

Com o SoC nRF54LM20A, a Série XIAO nRF54LM20A oferece suporte a Bluetooth LE, Matter, Thread, Zigbee e protocolos proprietários de 2,4 GHz, fornecendo uma taxa de dados de pico de 4 Mbps ideal para cenários de baixa latência.

Este tutorial usa duas placas XIAO nRF54LM20A para verificar a rede Matter: uma atua como um roteador de borda conectado ao Home Assistant, e a outra opera como um dispositivo Matter ingressando na rede Thread para exibir dados simulados de temperatura e umidade no painel do Home Assistant.

***Agradecimentos ao autor [@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) pelas ideias para o WiKi***

:::tip

Este tutorial é baseado no VS Code e na extensão nRF Connect. Se você é iniciante neles, pode consultar [XIAO nRF54LM20A nRFConnect SDK Usage](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_ncs/)

:::

### O que é Matter

Matter (anteriormente CHIP) é um padrão universal de camada de aplicação desenvolvido pela Connectivity Standards Alliance (CSA).

- Interoperabilidade entre fornecedores em redes IP (Wi-Fi/Ethernet/Thread)
- Tipos de dispositivos padronizados (por exemplo, lâmpadas, fechaduras de porta, termostatos)
- Comissionamento seguro usando códigos QR/NFC
- Criptografia ponta a ponta com Distributed Compliance Ledger (DCL)

### O que é OpenThread

OpenThread é uma implementação de código aberto do protocolo de rede Thread. Ele cria redes mesh de baixo consumo e seguras para dispositivos IoT usando tecnologia de rádio IEEE 802.15.4. Principais recursos:

- Suporte IPv6 integrado (6LoWPAN)
- Topologia de rede auto-organizável
- Criptografia AES-128 para todas as comunicações
- Compatível com dispositivos tão pequenos quanto lâmpadas ou sensores

### Qual é a relação entre Matter e Thread

***Agradecimentos ao autor[@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) por uma explicação muito detalhada deste ponto, citada aqui!***

Após esta breve introdução ao Matter e ao Thread, agora você entende que Thread e Matter têm finalidades diferentes e operam em camadas distintas da pilha de tecnologia. Para recapitular:

Thread:

- Thread é um protocolo de rede mesh sem fio de baixo consumo projetado para dispositivos de casa conectada. Ele fornece uma forma confiável e segura para que os dispositivos se comuniquem entre si e com a internet.
- Thread cria uma rede local que permite que os dispositivos conversem entre si mesmo se a internet cair.

Matter:

- Matter é um protocolo de camada de aplicação que fica sobre protocolos de rede como Thread, Wi-Fi e Ethernet. Ele busca simplificar e unificar o ecossistema de casa inteligente garantindo que dispositivos de diferentes fabricantes possam funcionar juntos sem problemas.
- Matter define como os dispositivos se comunicam e interagem na camada de aplicação, com foco em interoperabilidade, segurança e facilidade de uso.

Conexão entre Thread e Matter:

- Matter pode usar Thread como um de seus protocolos de rede subjacentes. Isso significa que dispositivos usando o protocolo Matter podem se comunicar por meio de uma rede Thread.
- A combinação de Matter e Thread permite um ecossistema de casa inteligente robusto, seguro e interoperável, em que os dispositivos podem se comunicar localmente e de forma eficiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/TOPPLOGY.jpg" style={{width:900, height:'auto'}}/></div>

## Introdução ao [Home Assistant](https://www.home-assistant.io/)

Home Assistant é uma poderosa plataforma de automação residencial de código aberto que permite controlar e monitorar seus dispositivos de casa inteligente a partir de uma interface única e unificada. Ele atua como o hub central da sua casa inteligente, permitindo automatizar rotinas, monitorar sensores e criar um ambiente mais inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Saiba mais 🖱️</font></span></strong></a>
</div>

## Preparação de hardware

São necessários dois XIAO nRF54LM20A Sense para a preparação de hardware.

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
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>
</div>

## Antena Bluetooth

Esta placa usa uma antena Bluetooth externa. Para garantir melhor qualidade de sinal Bluetooth e aprimorar sua experiência de uso de Bluetooth, é recomendável instalar uma antena Bluetooth.
O método de conexão é mostrado abaixo:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_6.gif"
    alt="Bluetooth antenna connection"
    style={{width: 600, height: 'auto'}}
  />
</div>

## Conectar ao HomeAssistant via Matter

### Instalar o Add-on

Navegue até Settings -> Apps e selecione Install app para adicionar o add-on.

1. Adicione o **Open Thread Border Router** e modifique sua configuração.

- Vá para Settings -> Apps, selecione Install app para adicionar o add-on, depois procure por **Open Thread Border Router** e conclua a instalação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_1.png" style={{width:800, height:'auto'}}/></div>

2. Adicione o **Matter Server**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_2.png" style={{width:800, height:'auto'}}/></div>

### Configurar o roteamento Thread

Siga os passos abaixo para gravar um XIAO nRF54LM20A como Coprocessor para emular um dispositivo roteador de borda.

:::tip

Dispositivos de roteamento Thread como Connect ZBT-1, Connect ZBT-2 ou Home Assistant Yellow também podem ser usados.

:::

#### Grave o XIAO nRF54LM20A com o firmware RCP Coprocessor

:::tip

Este tutorial é baseado no VS Code e na extensão nRF Connect. Se você é iniciante neles, pode consultar [XIAO nRF54LM20A nRFConnect SDK Usage](http://localhost:3000/xiao_nrf54lm20a_getting_started/#uso-do-nrfconnect-sdk)

:::

1. Selecione Create a new application, escolha copy a sample, procure por Coprocessor e crie o projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_3.png" style={{width:800, height:'auto'}}/></div>

2. Adicione e modifique arquivos de configuração de device tree na pasta boards. Desative a configuração I2C usada pelo PMIC para evitar conflitos e defina a taxa de baud da UART20 para 1000000.

Caminho do arquivo: ~/boards：

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
```

- xiao_nrf54lm20a_nrf54lm20a_cpuapp.conf.

```conf
CONFIG_SPI_NOR=n

# Increase Main and shell stack sizes to avoid stack overflow
# while using CRACEN
CONFIG_MAIN_STACK_SIZE=2048

CONFIG_I2C_GPIO=n
CONFIG_MFD_NPM13XX=n
CONFIG_NPM13XX_CHARGER=n
```

3. Compile e habilite a configuração.

- Configure e compile o projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_4.png" style={{width:800, height:'auto'}}/></div>

- Grave o firmware usando `west flash`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_5.png" style={{width:800, height:'auto'}}/></div>
<br/>
4. Para detectar o dispositivo no Home Assistant, conecte o XIAO nRF54LM20A gravado com o firmware Coprocessor ao Home Assistant Green via USB-C.

- Abra a Add-on store, localize Open Thread Border Router e configure-o. Você verá o dispositivo chamado XIAO nRF54LM20A; configure a taxa de baud e outros parâmetros e, em seguida, salve as configurações.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_6.png" style={{width:800, height:'auto'}}/></div>

- Selecione Start na aba Info.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_7.png" style={{width:800, height:'auto'}}/></div>

- Você pode verificar o status da configuração no Log — a configuração é bem-sucedida como mostrado na figura abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_8.png" style={{width:800, height:'auto'}}/></div>

- Vá para Settings -> Thread para descobrir o dispositivo, que normalmente é nomeado como `ha-thread-c6c8`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_9.png" style={{width:800, height:'auto'}}/></div>

### Configurar o dispositivo Matter

1. Escolha Create a new application, selecione copy a sample, procure por Matter-Template e crie o projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_10.png" style={{width:800, height:'auto'}}/></div>

2. Modifique os arquivos de device tree e os arquivos de configuração.

- Devido às diferenças de hardware entre o XIAO nRF54LM20A e a placa de avaliação oficial da Nordic, são necessárias revisões nos arquivos de device tree e de configuração. A placa de avaliação oficial é equipada com um chip de flash externo MX25R64, enquanto o XIAO nRF54LM20A usa um PY25Q64; ajustes correspondentes devem ser feitos.

- Os arquivos a serem adicionados estão listados abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_11.png" style={{width:800, height:'auto'}}/></div>

Caminho do arquivo: ~/boards：

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

Caminho do arquivo: ~/sysbuild/mcuboot/boards：


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

Caminho do projeto ~/ :

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

#### Descrição da finalidade dos arquivos adicionados

<table>
  <thead>
    <tr>
      <th>File</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td colspan="2"><strong>1. Arquivos de Overlay da Placa (<code>boards/</code>)</strong><br/>
      Overlays de device tree em nível de aplicação para o XIAO nRF54LM20A.</td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</code></td>
      <td>
        <strong>Variante com Flash externa:</strong> Habilita a Flash SPI NOR PY25Q64 como slot secundário de OTA;<br/>
        habilita o watchdog wdt31;<br/>
        declara <code>nordic,pm-ext-flash</code> para que o Partition Manager possa reconhecer a Flash externa.
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay</code></td>
      <td>
        <strong>Variante com Flash interna:</strong> Desabilita a PY25Q64 (reduz o custo de BOM e o consumo de energia);<br/>
        coloca o slot secundário de OTA na RRAM interna;<br/>
        habilita o watchdog wdt31.
      </td>
    </tr>

    <tr>
      <td colspan="2"><strong>2. Arquivos de Configuração do MCUboot (<code>sysbuild/mcuboot/boards/</code>)</strong><br/>
      MCUboot é uma imagem Zephyr independente que requer seus próprios arquivos Kconfig e de overlay de device tree.</td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp.conf</code></td>
      <td>
        <strong>Flash externa — Kconfig:</strong> Habilita os drivers SPI/SPI_NOR para acesso à PY25Q64;<br/>
        define <code>BOOT_MAX_IMG_SECTORS=512</code> para firmware grande;<br/>
        habilita o kernel sem ticks (tickless).
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</code></td>
      <td>
        <strong>Flash externa — Overlay DTS:</strong> Habilita a PY25Q64 como <code>pm-ext-flash</code>,
        permitindo que o MCUboot acesse a imagem OTA na Flash externa durante a inicialização.
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.conf</code></td>
      <td>
        <strong>Flash interna — Kconfig:</strong> Desabilita SPI/SPI_NOR;<br/>
        desabilita a saída de depuração (<code>PRINTK=n</code>, <code>ASSERT=n</code>) para reduzir o tamanho do MCUboot para a partição de 40 KB;<br/>
        define <code>BOOT_MAX_IMG_SECTORS=512</code>.
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay</code></td>
      <td>
        <strong>Flash interna — DTS Overlay:</strong> Desativa o PY25Q64, garantindo que o MCUboot use apenas a Flash interna.
      </td>
    </tr>

    <tr>
      <td colspan="2"><strong>3. Arquivos de partição estática (<code>pm_static_*.yml</code>)</strong><br/>
      Tabelas de partição estática para o Partition Manager, definindo todo o layout da Flash para MCUboot, APP, OTA, Dados de Fábrica e Configurações.</td>
    </tr>
    <tr>
      <td><code>pm_static_xiao_nrf54lm20a_nrf54lm20a_cpuapp.yml</code></td>
      <td>
        <strong>Variante com Flash externa:</strong> <code>mcuboot_secondary</code> (imagem OTA) fica na Flash externa (PY25Q64);<br/>
        o tamanho utilizável do APP é <code>0x1E2800</code> (~1,9 MB).
      </td>
    </tr>
    <tr>
      <td><code>pm_static_xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.yml</code></td>
      <td>
        <strong>Variante com Flash interna:</strong> <code>mcuboot_secondary</code> fica na Flash interna;<br/>
        MCUboot reduzido para <code>0xA000</code> (40 KB);<br/>
        APP reduzido para <code>0x125800</code> (~1,2 MB);<br/>
        a imagem OTA requer compactação.
      </td>
    </tr>

  </tbody>
</table>

#### Gravar e fazer download para o dispositivo

- Prossiga com a configuração de build.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_12_1.png" style={{width:800, height:'auto'}}/></div>

- Selecione outro XIAO nRF54LM20A como dispositivo de destino, inicie o OpenTerminal e grave o firmware usando o comando `west flash`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_12.png" style={{width:800, height:'auto'}}/></div>

### Conecte o dispositivo Matter usando o aplicativo Home Assistant.

1. Conecte o dispositivo Matter e gere o código QR do dispositivo.

- No ambiente de desenvolvimento NCS, abra o nRF Serial Terminal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_13.png" style={{width:800, height:'auto'}}/></div>
<br/>
- Uma lista de portas seriais aparecerá na parte superior da interface; selecione a porta serial correspondente ao XIAO nRF54LM20A.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_14.png" style={{width:800, height:'auto'}}/></div>
<br/>
- As informações do dispositivo Matter e o link do código QR de pareamento serão exibidos pelos logs seriais.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_15.png" style={{width:800, height:'auto'}}/></div>
<br/>
- Toque diretamente no link do código QR ou copie o link para um navegador web separadamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_16.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Baixe o aplicativo Home Assistant.

- A inclusão do dispositivo Matter no Home Assistant é concluída por meio do aplicativo móvel; escaneie o código QR fornecido para baixar o aplicativo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_17.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. Vá para as configurações para adicionar o dispositivo Matter e, em seguida, escaneie o código QR gerado no navegador para finalizar o pareamento.

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_18.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_19.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_20.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_21.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_22.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
</table>

4. As informações do dispositivo Matter podem ser visualizadas no painel do navegador do Home Assistant.

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_23.jpg" style={{width:600, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_24.png" style={{width:600, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_25.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
</table>

5. Adicione o dispositivo ao painel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_26.png" style={{width:800, height:'auto'}}/></div>
<br/>
6. Os dados em tempo real do dispositivo Matter serão exibidos no painel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_27.png" style={{width:800, height:'auto'}}/></div>

## Resumo

Seguindo os procedimentos acima, configuramos uma rede Matter over Thread usando dois módulos XIAO nRF54LM20A e conectamos a rede com sucesso ao Home Assistant. O protocolo Matter oferece suporte ao acesso a uma gama mais ampla de tipos de sensores, enquanto o demo acima apenas simula a aquisição de dados de temperatura e umidade. Ao integrar outros dispositivos sensores, verifique se Clusters correspondentes estão definidos na especificação Matter. Para mais detalhes, consulte a documentação oficial em [Home Assistant Matter](https://www.home-assistant.io/integrations/matter).

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>