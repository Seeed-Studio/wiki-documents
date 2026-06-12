---
title: Uso do NRF Connect SDK com Seeed Studio XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - ncs
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_ncs
sku: 100018440
last_update:
  date: 05/13/2026
  author: Brandy
createdAt: '2025-05-13'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_ncs/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Uso do nRFConnect SDK com Seeed Studio XIAO nRF54LM20A Sense

nRF Connect SDK (NCS) é o kit de desenvolvimento de software oficial da Nordic Semiconductor, construído sobre o sistema operacional de tempo real Zephyr RTOS. Ele fornece um framework de desenvolvimento completo, nativo e altamente otimizado para os chips da série nRF. Em comparação com o PlatformIO, o NCS oferece aos desenvolvedores acesso mais completo a todas as capacidades de hardware da série nRF54, incluindo suporte nativo para Bluetooth Low Energy (BLE), Thread, Matter e outras pilhas de protocolos sem fio, bem como gerenciamento de energia e controle de periféricos em nível mais detalhado. A Nordic mantém e atualiza oficialmente este SDK de forma contínua, garantindo compatibilidade ideal com o firmware dos chips e acesso antecipado aos recursos mais recentes.

Este tutorial irá guiá-lo passo a passo por todo o processo — desde a configuração do ambiente de desenvolvimento do nRF Connect SDK e instalação da toolchain, até a criação e configuração do seu primeiro projeto e, por fim, a gravação do seu primeiro programa de exemplo no XIAO nRF54LM20A Sense para vê-lo em funcionamento.

## Preparação de hardware

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

## Usando o nRF Connect SDK no VSCode

<details>

<summary>Instalar previamente o conhecimento sobre o nRF Connect SDK</summary>

Este documento detalha como instalar o ambiente de desenvolvimento do nRF Connect SDK em um computador com Windows 11. A seguir está uma visão geral das ferramentas que precisam ser instaladas

- Instalar VS Studio Code

  [Visual Studio Code - Code Editing .Redefined](https://code.visualstudio.com/ )

- nRF Command Line Tools
- nRF Connect for Desktop
- Git

- Ninja

```cpp
ninja --version
```

- CMake

```cpp
cmake --version
```

- Zephyr SDK

```cpp
west --version
```

- nRF Connect SDK
- Plugin nRF Connect para VSCode

***Se você já o tiver pré-instalado em seu computador, pode verificar o número da versão da sua ferramenta usando o comando abaixo***

</details>

<Steppers>

### Instalar a extensão

Abra o VS Code e pesquise por **nRF Connect for VS Code Extension Pack** no Centro de Plugins. Este pacote de plugins instalará automaticamente outros plugins do VS Code necessários para o nRF Connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn8.png" style={{width:600, height:'auto'}}/></div>
<br />
A extensão nRF Connect para VS Code permite que os desenvolvedores utilizem o popular Ambiente de Desenvolvimento Integrado Visual Studio Code (VS Code IDE) para desenvolver, compilar, depurar e implantar aplicações embarcadas baseadas no nRF Connect SDK (Software Development Kit) da Nordic. A extensão inclui ferramentas de desenvolvimento úteis, como interface para compilador, linker, sistema de build completo, depurador com suporte a RTOS, integração perfeita com o nRF Connect SDK, editor de visualização de device tree e um terminal serial integrado.

O pacote de extensão nRF Connect para VS Code inclui os seguintes componentes:

- nRF Connect for VS Code: A extensão principal contém a interface entre o sistema de build e o nRF Connect SDK, bem como uma interface para gerenciar a versão do nRF Connect SDK e da toolchain.
- nRF DeviceTree: Fornece suporte à linguagem de device tree e um editor de visualização de device tree.
- nRF Kconfig: Fornece suporte à linguagem Kconfig.
- nRF Terminal: Terminais seriais e RTT.
- Microsoft C/C++: Adiciona suporte de linguagem para C/C++, incluindo recursos do IntelliSense.
- CMake: Suporte à linguagem CMake.
- GNU Linker Mapping Files: Suporte para arquivos de mapeamento do linker.
Podemos baixar qualquer versão preferida do nRF Connect SDK e sua toolchain por meio da extensão. A documentação completa do nRF Connect para VS Code está disponível em https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html.

### Instalando a toolchain

A toolchain é um conjunto de ferramentas que trabalham juntas para compilar aplicações do nRF Connect SDK, incluindo montador, compilador, linker e componentes do CMake.
Na primeira vez que você abrir o nRF Connect para VS Code, será solicitado que instale a toolchain. Isso geralmente acontece se a extensão não detectar nenhuma toolchain instalada em seu computador.
Clique em Install Toolchain e será exibida uma lista de versões de toolchain que podem ser baixadas e instaladas em seu computador. Selecione a versão da toolchain que corresponde à versão do nRF Connect SDK que você planeja usar. Recomendamos sempre usar a versão marcada mais recente do nRF Connect SDK.

Por padrão, o nRF Connect para VS Code exibe apenas a aba Released (ou seja, a versão estável) da toolchain. Se você estiver avaliando um novo recurso e quiser usar a aba Preview ou outro tipo de aba (por exemplo, Customer Sampling -cs), clique em "Show all toolchain versions" como mostrado abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_7.png" style={{width:800, height:'auto'}}/></div>

:::note
**A ToolChain aqui é 3.3.0 ou superior**
:::

### Instalando o nRF Connect SDK

Na extensão nRF Connect para VS Code, clique em Manage SDK. No menu Manage SDK, podemos instalar ou desinstalar a versão do nRF Connect SDK. Como esta é a primeira vez que usamos a extensão, a interface mostrará apenas duas opções.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/install_sdk.png" style={{width:800, height:'auto'}}/></div>

Ao clicar em Install SDK, serão listadas todas as versões disponíveis do nRF Connect SDK que podem ser baixadas e instaladas localmente. Selecione a versão do nRF Connect SDK necessária para o desenvolvimento do seu projeto.

:::note
**O nRF Connect SDK aqui é 3.2.4 ou superior**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_8_1.png" style={{width:800, height:'auto'}}/></div>


:::tip
Se você não vir nenhuma dessas opções, certifique-se de ter instalada a versão mais recente do pacote de extensão nRF Connect para VS Code.
É importante notar que o nRF Connect SDK é independente de IDE, o que significa que você pode optar por usar qualquer IDE ou nenhum. O nRF Connect SDK está disponível por meio da interface de linha de comando https://www.nordicsemi.com/Products/Development-tools/nRF-Util (nrfutil). A interface de linha de comando (CLI) (nrfutil) fará o download e instalará o nRF Connect. No entanto, recomendamos fortemente o uso da nossa extensão nRF Connect para VS Code com o VS Code, pois ela integra não apenas uma interface gráfica de usuário (GUI) conveniente e uma interface de linha de comando (CLI) eficiente, mas também inclui vários recursos que irão simplificar bastante o desenvolvimento de firmware. Configurar outras IDEs para funcionar com o nRF Connect SDK requer etapas manuais adicionais que estão além do escopo deste curso.
:::

### Criando programas de usuário

Neste exercício, escreveremos uma aplicação simples baseada no exemplo blinky para controlar o piscar de LEDs em uma placa de desenvolvimento. O mesmo se aplica a todas as placas de desenvolvimento da Nordic Semiconductor suportadas (séries nRF54, nRF53, nRF52, nRF70 ou nRF91). O objetivo é garantir que todas as ferramentas necessárias para compilar e gravar o exemplo estejam configuradas corretamente. O foco é aprender como criar uma aplicação, compilá-la e gravá-la em uma placa de desenvolvimento com chip Nordic usando o modelo “Copy Example”!

- No VS Code, clique no ícone da extensão nRF Connect. Na visualização Welcome, clique em Create New Application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project1.png" style={{width:800, height:'auto'}}/></div>

- Digite blinky na barra de pesquisa e selecione o segundo exemplo Blinky (caminho zephyr/samples/basic/blinky), como mostrado abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project2.png" style={{width:800, height:'auto'}}/></div>

O exemplo Blinky fará com que o LED1 na placa de desenvolvimento pisque continuamente. No entanto, como o nosso nRF54LM20A está equipado com uma luz RGB, você pode modificar alguns arquivos seguindo as etapas abaixo para fazer a luz RGB brilhar com vários efeitos de iluminação.

Nossa primeira aplicação será baseada no exemplo Blinky. O exemplo Blinky é derivado do bloco de modelo Zephyr no nRF Connect SDK, portanto você verá o nome zephyr no caminho do exemplo: zephyr\samples\basic\blinky.

### Adicionar a placa XIAO nRF54LM20A

<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Para começar, **clone o repositório a partir do link do GitHub** na sua pasta local preferida. Depois de clonar, navegue até o diretório `platform-seeedboards/zephyr/`. **Lembre-se deste caminho da pasta `zephyr`**;

```bash
git clone https://github.com/Seeed-Studio/platform-seeedboards.git
```

Para configurar sua placa para o nRF Connect no VS Code, você pode seguir estes passos:

- Abra o VS Code e vá para Settings.

- Digite nRF Connect na caixa de pesquisa.

- Encontre o item de configuração Board Roots e clique em Edit in settings.json.

- Adicione o caminho `zephyr` do arquivo de placa XIAO nRF54LM20A baixado ao array boardRoots.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/12ncs_2.PNG" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip
Observe que o ponto final do caminho adicionado é o caminho da pasta `boards`, não o caminho da pasta `platform-seeedboards`.
:::

- Na visualização da aplicação, clique em Add Build Configuration abaixo do nome da aplicação.

- Podemos selecionar o modelo do XIAO nRF54LM20A em Board target e selecionar o arquivo prj.config padrão em Base configuration files e, por fim, clicar em `Generate and Build` para compilar o arquivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/11ncs_1.PNG" style={{width:800, height:'auto'}}/></div>

### Baixar plug-in de gravação

<Tabs>
<TabItem  value="window" label="Window" default>

**Plugins adicionais:**

No Windows, usaremos o gerenciador de pacotes Chocolatey para instalar o OpenOCD.

**1. Abra o PowerShell (Executar como administrador):**

- Na barra de pesquisa do Windows, digite **PowerShell**.
- Clique com o botão direito em **Windows PowerShell** e selecione **Run as administrator**.

**2. Verifique a Execution Policy do PowerShell:**

- Digite `Get-ExecutionPolicy` e pressione Enter.
- Digite `Get-ExecutionPolicy -List` e pressione Enter.

**3. Instale o Chocolatey:**

- Cole e execute o seguinte comando:

```cpp
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Este comando ignora a execution policy para a sessão atual do PowerShell e instala o Chocolatey. Após a instalação, feche e reabra a janela do PowerShell (ainda executando como administrador).

**4. Instale o OpenOCD:**

- Na nova janela do PowerShell (como administrador), digite:

```cpp
choco install openocd
```

**5. Verifique a instalação do OpenOCD:**

- Digite `Get-Command openocd` e pressione Enter.

- Se a instalação for bem-sucedida, este comando exibirá o caminho para o openocd.exe.

</TabItem>

<TabItem value="mac" label="Mac OS" default>

**Plugins adicionais:**

No macOS, usaremos o gerenciador de pacotes Homebrew para instalar as ferramentas necessárias.

**1. Instale o Homebrew (se ainda não estiver instalado):**

- Abra o Terminal.app.

- Execute o seguinte comando:

```cpp
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- Siga as instruções na tela; talvez seja necessário inserir a senha do usuário do macOS. Após a instalação, execute os comandos indicados pelo terminal para adicionar o Homebrew à sua variável de ambiente PATH `(por exemplo, eval "$(/opt/homebrew/bin/brew shellenv)")`. Em seguida, feche e reabra o terminal.

**2. Instale o Ccache:**

No terminal, digite:

```cpp
brew install ccache
```

**3. Instale o OpenOCD:**

No terminal, digite:

```cpp
brew install openocd
```

**4. Verifique a instalação do OpenOCD::**

- Digite `which openocd` e pressione Enter.

- Se a instalação for bem-sucedida, este comando exibirá o caminho para o executável `openocd`.

</TabItem>

</Tabs>

### Programa de gravação

- Abra os arquivos **src/main.c** e **prj.conf** e substitua o código original pelo código a seguir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_1.png" style={{width:800, height:'auto'}}/></div>

<details>
<summary>src/main.c</summary>
<div>

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

</div>
</details>

<details>
<summary>prj.conf</summary>
<div>

```prj
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n

```

</div>
</details>

<details>
<summary>board/xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</summary>
1. Se você precisar modificar ou redefinir o conteúdo de nós da device tree, crie um novo arquivo **xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay** no diretório do Zephyr para vincular explicitamente os nós de dispositivo.
2. Se você tiver modificado os arquivos da device tree, limpe os arquivos originais antes de recompilar para evitar que o CMake deixe de reconhecer suas alterações.
<div>

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

</div>
</details>

- Em seguida, abra o **Open terminal** e digite o comando `west flash`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_2.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip
 Se ocorrer o erro do west flash, isso significa que você precisa adicionar a configuração de compilação novamente, mas antes é necessário remover a compilação incorreta.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/error.jpg" style={{width:800, height:'auto'}}/></div>
<br/>
:::

</Steppers>

### Explicação do código

- **src/main.c**
Ponto de entrada principal da aplicação que implementa a lógica de demonstração, incluindo configuração de cor do LED, efeitos de respiração, controle de ritmo de piscar, troca de modo baseada em botão e outros comportamentos de interação com o hardware.

- **zephyr/prj.conf**
Arquivo de configuração do Zephyr RTOS para habilitar/desabilitar componentes do sistema e drivers de periféricos, incluindo registro de logs, UART, PWM, I2C, SPI, gerenciamento de baixo consumo de energia e outras funcionalidades.

### Observe o resultado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_5.gif" style={{width:600, height:'auto'}}/></div>


## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
