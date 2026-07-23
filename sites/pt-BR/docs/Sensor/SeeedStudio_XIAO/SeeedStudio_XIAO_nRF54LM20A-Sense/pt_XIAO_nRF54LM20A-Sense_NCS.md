---
title: NRF Connect SDK com XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - ncs
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_ncs
sku: 100018440
last_update:
  date: 07/22/2026
  author: Brandy
createdAt: '2025-05-13'
updatedAt: '2026-07-10'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_ncs/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_first.png" style={{width:600, height:'auto'}}/></div>

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

nRF Connect SDK (NCS) é o kit de desenvolvimento de software oficial da Nordic Semiconductor, construído sobre o sistema operacional de tempo real Zephyr RTOS. Ele fornece um framework de desenvolvimento completo, nativo e altamente otimizado para os chips da série nRF. Em comparação com o PlatformIO, o NCS oferece aos desenvolvedores um acesso mais amplo a todas as capacidades de hardware da série nRF54, incluindo suporte nativo para Bluetooth Low Energy (BLE), Thread, Matter e outras pilhas de protocolos sem fio, bem como gerenciamento de energia e controle de periféricos em nível mais detalhado. A Nordic mantém e atualiza oficialmente este SDK de forma contínua, garantindo compatibilidade ideal com o firmware dos chips e acesso antecipado aos recursos mais recentes.

Este tutorial irá guiá-lo passo a passo por todo o processo — desde a configuração do ambiente de desenvolvimento do nRF Connect SDK e instalação da toolchain, até a criação e configuração do seu primeiro projeto e, por fim, a gravação do seu primeiro programa de exemplo no XIAO nRF54LM20A Sense para vê-lo em funcionamento.

## Primeiros passos com o NCS

### Preparação de hardware

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
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
      </td>
    </tr>
  </table>
</div>

### Baixar o VS Code

Baixe de acordo com o sistema que você está usando o [VS Code](https://code.visualstudio.com/download)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### Instalar a extensão nRF Connect for VS Code Extension Pack

1. Abra o VS Code, pesquise e instale o **nRF Connect for VS Code Extension Pack**. Esta extensão instalará automaticamente todas as subextensões necessárias para a toolchain completa, incluindo nRF Connect, Kconfig, DeviceTree e mais.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. O nRF Connect for VS Code Extension Pack instalará automaticamente as seguintes extensões para você.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_2.png" style={{width:800, height:'auto'}}/></div>


### Instalar o nRF Connect SDK e a Toolchain

1. Abra a extensão nRF Connect, selecione **Install SDK** e, em seguida, escolha **nRF Connect SDK**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_4.png" style={{width:800, height:'auto'}}/></div>
<br/>

2. Selecione **v3.3.0** na lista **Pre-packaged SDKs & Toolchains**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/7.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip

Para o nRF Connect SDK v3.3.0, a instalação pré-empacotada inclui tanto o código do SDK quanto a toolchain correspondente. Você não precisa instalar a toolchain separadamente.

O nRF Connect SDK é bastante grande, e a instalação inicial levará algum tempo. Certifique-se de ter uma conexão de rede estável durante a instalação para evitar falhas.

:::

### Verificação do ambiente

Após a conclusão da instalação, o ambiente integrado para o nRF Connect SDK será configurado automaticamente. Para garantir um desenvolvimento contínuo sem problemas, recomendamos verificar o ambiente nesta etapa.

1. Inicie o **nRF Terminal**, um terminal integrado do nRF Connect SDK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/2.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip
Certifique-se de que tanto a versão do nRF Connect SDK (NCS) quanto a versão da Toolchain sejam 3.3.0. Misturar versões diferentes pode causar problemas de compilação ou compatibilidade.
:::

2. Insira comandos para verificar as informações de versão das ferramentas necessárias. Você pode copiar e executar os comandos um por um para verificação.

```bash
# Check west (project manager & build entry) version
west --version
#West version: v1.5.0

# Check CMake (build system generator) version
cmake --version
#cmake version 4.2.1

# Check Ninja (build executor) version
ninja --version
#1.13.2

# Check Python (scripting runtime for west & Zephyr tools) version
python --version
#Python 3.11.7

# Check ARM cross-compiler (Zephyr toolchain for Cortex-M) version
arm-zephyr-eabi-gcc --version
#arm-zephyr-eabi-gcc (Zephyr SDK 0.17.0) 12.2.0
#Copyright (C) 2022 Free Software Foundation, Inc.
#This is free software; see the source for copying conditions.  There is NO
#warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

# Check OpenOCD (on-chip debugger & flasher via CMSIS-DAP) version
openocd --version
#Open On-Chip Debugger 0.12.0+dev-01514-g21fa2de70 (2024-02-07-19:03)
#Licensed under GNU GPL v2
#For bug reports, read
#        http://openocd.org/doc/doxygen/bugs.html
```

- A saída é mostrada abaixo. Se algum componente estiver faltando, reinstale a toolchain e garanta uma rede estável durante a instalação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/3.png" style={{width:800, height:'auto'}}/></div>



### Adicionar caminho de placa personalizada

As definições de placa para a série XIAO nRF54LM20A ainda não foram mescladas no repositório oficial do NCS, portanto você precisa adicionar o caminho da placa manualmente.

1. Clone o repositório **platform-seeedboards** para o diretório de sua preferência.

```bash
git clone https://github.com/Seeed-Studio/platform-seeedboards.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_9.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Abra **Settings** no canto inferior esquerdo do VS Code.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_10.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. Pesquise por **nRF Connect**, modifique **Board Roots** e adicione o caminho `~\your_path\platform-seeedboards\zephyr`. As definições de placa para a série XIAO nRF54LM20A são armazenadas aqui.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_11.png" style={{width:800, height:'auto'}}/></div>

### Criar um novo aplicativo

Nesta seção, vamos modificar um projeto de exemplo em branco.

1. Na extensão, selecione **Create a blank application** para duplicar o template.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_12.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Nomeie o projeto como `blinky` e escolha um caminho de armazenamento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_13.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. Depois de criado, abra o projeto copiado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_14.png" style={{width:800, height:'auto'}}/></div>
<br/>

4. Remova as configurações originais. Esta etapa elimina interferências para configurar as configurações relacionadas ao XIAO nRF54LM20A na próxima fase. (Se o seu projeto não tiver um build, você pode pular diretamente esta etapa)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_15.png" style={{width:800, height:'auto'}}/></div>

### Escrever o programa Blinky

Como a série XIAO nRF54LM20A possui devicetree e mapeamentos de pinos de hardware personalizados, vários arquivos precisam ser modificados. Os arquivos a serem editados estão listados abaixo.

- `main.c`: Programa principal que contém a lógica da aplicação.
- `app.overlay`: Arquivo de overlay do devicetree para configuração de periféricos de hardware.
- `prj.conf`: Arquivo de configuração do projeto para habilitar os módulos necessários do Zephyr.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_16.png" style={{width:800, height:'auto'}}/></div>
<br/>

1. Modifique o código em main.c

<details>

<summary>main.c</summary>

```c

/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/pwm.h>
#include <nrfx_power.h>

#define PWM_PERIOD_NS 1000000U
#define STEP_TIME_MS 500

#define LED_R_NODE DT_ALIAS(pwm_led1)
#define LED_G_NODE DT_ALIAS(pwm_led2)
#define LED_B_NODE DT_ALIAS(pwm_led0)

#if !DT_NODE_EXISTS(LED_R_NODE) || !DT_NODE_EXISTS(LED_G_NODE) || !DT_NODE_EXISTS(LED_B_NODE)
#error "This RGB blink demo expects pwm-led0/pwm-led1/pwm-led2 devicetree aliases"
#endif

static const struct pwm_dt_spec led_r = PWM_DT_SPEC_GET(LED_R_NODE);
static const struct pwm_dt_spec led_g = PWM_DT_SPEC_GET(LED_G_NODE);
static const struct pwm_dt_spec led_b = PWM_DT_SPEC_GET(LED_B_NODE);

struct rgb_step {
	uint8_t r;
	uint8_t g;
	uint8_t b;
	uint32_t delay_ms;
};

static int pwm_set_u8(const struct pwm_dt_spec *led, uint8_t level)
{
	uint32_t duty_ns = (PWM_PERIOD_NS * (uint32_t)level) / 255U;

	return pwm_set_dt(led, PWM_PERIOD_NS, duty_ns);
}

static int rgb_set(uint8_t r, uint8_t g, uint8_t b)
{
	int ret;

	ret = pwm_set_u8(&led_r, r);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_g, g);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_b, b);
	if (ret < 0) {
		return ret;
	}

	return 0;
}

int main(void)
{
	int ret;

#if defined(CONFIG_NRFX_POWER)
	nrfx_power_constlat_mode_request();
#endif

	if (!device_is_ready(led_r.dev) || !device_is_ready(led_g.dev) || !device_is_ready(led_b.dev)) {
		return -1;
	}

	static const struct rgb_step demo[] = {
		{ 255, 0, 0, STEP_TIME_MS },
		{ 0, 255, 0, STEP_TIME_MS },
		{ 0, 0, 255, STEP_TIME_MS },
		{ 255, 255, 0, STEP_TIME_MS },
		{ 0, 255, 255, STEP_TIME_MS },
		{ 255, 0, 255, STEP_TIME_MS },
		{ 255, 255, 255, STEP_TIME_MS },
		{ 0, 0, 0, STEP_TIME_MS },
	};

	while (1) {
		for (size_t i = 0; i < ARRAY_SIZE(demo); i++) {
			ret = rgb_set(demo[i].r, demo[i].g, demo[i].b);
			if (ret < 0) {
				return ret;
			}
			k_msleep(demo[i].delay_ms);
		}
	}

	return 0;
}
```

</details>

2. Adicione **xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay**

- Crie uma pasta **board** no diretório raiz do projeto blinky, no mesmo nível que pastas como src.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_17.png" style={{width:600, height:'auto'}}/></div>
<br/>

- Crie o arquivo devicetree **xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay** dentro da pasta board.

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</summary>

```dts
/*
 * Device tree overlay for XIAO nRF54LM20A RGB LED PWM demo.
 *
 * PWM20 peripheral is used for RGB LED control:
 *   - Channel 0: P1.22 (Blue LED)  -> pwm_led0
 *   - Channel 1: P1.23 (Red LED)   -> pwm_led1
 *   - Channel 2: P1.24 (Green LED) -> pwm_led2
 */

&pwm20 {
	status = "okay";
};

/ {
	pwmleds {
		compatible = "pwm-leds";

		pwm_led0: pwm_led_0 {
			pwms = <&pwm20 0 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Blue LED";
		};

		pwm_led1: pwm_led_1 {
			pwms = <&pwm20 1 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Red LED";
		};

		pwm_led2: pwm_led_2 {
			pwms = <&pwm20 2 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Green LED";
		};
	};
};

/ {
	aliases {
		pwm-led0 = &pwm_led0;
		pwm-led1 = &pwm_led1;
		pwm-led2 = &pwm_led2;
	};
};
```

</details>

3. Modifique o arquivo prj.conf para habilitar as configurações correspondentes.

```conf
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n
```

1. Navegue até a seção APPLICATIONS da extensão e selecione Add build configuration. Verifique as versões do SDK e da toolchain. Defina o Board Target como xiao_nrf54lm20a/nrf54lm20a/cpuapp e os arquivos de configuração base como prj.conf. Role a página para baixo e clique em Generate and Build para gerar os arquivos de configuração correspondentes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/4_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip

Se `xiao_nrf54lm20a/nrf54lm20a/cpuapp` não puder ser encontrado aqui, verifique se o caminho foi adicionado corretamente na seção [Add Custom Board Path](#Add-Custom-Board-Path).

:::

2. Se a compilação for bem-sucedida, as seguintes informações serão exibidas no terminal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/5.png" style={{width:800, height:'auto'}}/></div>
<br/>

### Gravação do Programa

Nesta seção, usamos a ferramenta west do nRF Connect SDK para gravar o programa.

1. Conecte o XIAO nRF54LM20A Sense com um cabo USB-C. Abra o nRF Terminal e insira o comando west para gravar o programa.

```bash
west flash
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/6.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip

Se o firmware a ser gravado for gerado a partir do primeiro arquivo de configuração criado em **Add build configuration**, você precisa especificar o caminho da configuração quando existirem várias pastas de configuração, como `build` e `build_1`.

```bash
# examples: west flash configgration build_1
west flash --build-dir build_1
```

:::

### Observe o Resultado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_5.gif" style={{width:600, height:'auto'}}/></div>

## FAQ

 **P1: O download do nRF Connect SDK está muito lento ou trava**

Se o download do SDK estiver muito lento ou travar, você pode usar o **aria2** para baixar os pacotes necessários com múltiplas conexões e, em seguida, instalar o SDK usando o **nrfutil**.

### Etapa 1. Instalar o aria2

Para macOS:

```bash
brew install aria2
```

Para Windows:

```bash
winget install aria2.aria2
```

**Etapa 2. Criar o diretório de download**

```bash
mkdir -p /opt/nordic/ncs/downloads
```

**Etapa 3. Baixar o Toolchain Bundle**

```bash
aria2c -c -x 16 -s 16 -k 1M --file-allocation=none \
  -d /opt/nordic/ncs/downloads \
  -o ncs-toolchain-aarch64-macos-0c0f19d91c.tar.gz \
  "https://files.nordicsemi.cn/artifactory/NCS/external/bundles/v3/ncs-toolchain-aarch64-macos-0c0f19d91c.tar.gz"
```

**Etapa 4. Baixar o nRF Connect SDK Bundle**

```bash
aria2c -c -x 16 -s 16 -k 1M --file-allocation=none \
  -d /opt/nordic/ncs/downloads \
  -o sdk-nrf-bundle-v3.3.0.tar.gz \
  "https://files.nordicsemi.cn/artifactory/ncs-src-mirror/external/sdk-nrf/v3.3.0/src.tar.gz"
```

**Etapa 5. Instalar o nRF Connect SDK v3.3.0**

```bash
nrfutil sdk-manager install v3.3.0 \
  --sdk-path /opt/nordic/ncs/v3.3.0 \
  --type nrf
```

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
