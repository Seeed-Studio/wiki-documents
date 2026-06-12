---
title: Introdução ao Seeed Studio XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_getting_started
sku: 100018440
last_update:
  date: 05/13/2026
  author: Brandy
createdAt: '2025-05-13'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/get_start_1.jpg" style={{width:600, height:'auto'}}/></div>

## Introdução

Seeed Studio XIAO nRF54LM20A Sense é uma placa de desenvolvimento sem fio compacta e de consumo ultrabaixo, construída em torno do SoC nRF54LM20A da Nordic Semiconductor. Ela combina um processador Arm Cortex-M33 de 128 MHz, 512 KB de RAM, 2 MB de NVM integrada, conectividade sem fio multiprotocolo de 2,4 GHz, IMU onboard, microfone digital, flash externo de 8 MB, conector de antena IPEX e PMIC nPM1300 para aplicações avançadas de IoT alimentadas por bateria, vestíveis, de detecção inteligente e de IA de borda.

### Especificações

<table>
  <thead>
    <tr>
      <th>Nome do Produto</th>
      <th>Seeed Studio XIAO nRF54LM20A</th>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Processador</strong></td>
      <td colspan="2">Arm® Cortex®-M33 128 MHz &amp; Coprocessador RISC-V 128 MHz</td>
    </tr>
    <tr>
      <td><strong>RAM</strong></td>
      <td colspan="2">512KB</td>
    </tr>
    <tr>
      <td><strong>Flash</strong></td>
      <td colspan="2">2 MB de memória não volátil (NVM)</td>
    </tr>
    <tr>
      <td><strong>Flash Externa</strong></td>
      <td colspan="2">8MB de flash externa onboard</td>
    </tr>
    <tr>
      <td><strong>PMIC / Bateria</strong></td>
      <td colspan="2">PMIC nPM1300 para regulação de energia e carregamento de bateria</td>
    </tr>
    <tr>
      <td><strong>Interface</strong></td>
      <td colspan="2">
        28x pinos GPIO<br/>
        9x pinos analógicos<br/>
        1x I2C<br/>
        1x UART<br/>
        1x SPI<br/>
        1x NFC<br/>
        1x SHPHLD
      </td>
    </tr>
    <tr>
      <td><strong>Onboard</strong></td>
      <td>
        1x LED de usuário (R/G/B 3 cores)<br/>
        1x LED de carga (indicador de carregamento da bateria)<br/>
        1x botão de reset<br/>
        1x botão de usuário<br/>
        1x conector IPEX4 (para antena externa)
      </td>
      <td>
        1x LED de usuário (R/G/B 3 cores)<br/>
        1x LED de carga (indicador de carregamento da bateria)<br/>
        1x botão de reset<br/>
        1x botão de usuário<br/>
        1x conector IPEX4 (para antena externa)<br/>
        1x IMU de 6 eixos<br/>
        1x microfone PDM
      </td>
    </tr>
    <tr>
      <td><strong>Conectividade sem fio</strong></td>
      <td colspan="2">
        Bluetooth LE 6.0 (inclui Channel Sounding)<br/>
        Bluetooth Mesh<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        Protocolos proprietários de 2,4 GHz
      </td>
    </tr>
    <tr>
      <td><strong>Entrada de energia</strong></td>
      <td colspan="2">
        Type-C: 5V<br/>
        Bateria: 3.7V
      </td>
    </tr>
    <tr>
      <td><strong>Modo de baixo consumo (3.7V@2A)</strong></td>
      <td>/</td>
      <td>
        Light-Sleep: ~9.96µA<br/>
        Deep-Sleep (System OFF): ~4.76µA<br/>
        Deep-Sleep (System OFF, GRTC wake-up): ~4.92µA<br/>
        Ship-Mode: 0.33µA
      </td>
    </tr>
    <tr>
      <td><strong>Compatibilidade de software</strong></td>
      <td colspan="2">
        Nordic nRF Connect SDK (baseado em Zephyr RTOS)<br/>
        PlatformIO (baseado em Zephyr RTOS)
      </td>
    </tr>
    <tr>
      <td><strong>Temperatura de operação</strong></td>
      <td colspan="2">-20°C a 70°C</td>
    </tr>
    <tr>
      <td><strong>Dimensões</strong></td>
      <td colspan="2">21 x 17.8mm</td>
    </tr>
  </tbody>
</table>

### Recursos

- **SoC poderoso com conectividade e segurança avançadas**

  Seeed Studio XIAO nRF54LM20A Sense é uma placa de desenvolvimento sem fio compacta e de consumo ultrabaixo, alimentada pelo SoC nRF54LM20A da Nordic Semiconductor. Ela apresenta um processador Arm Cortex-M33 de 128 MHz, 512 KB de RAM, 2 MB de NVM integrada, um coprocessador RISC-V de 128 MHz, conectividade sem fio multiprotocolo de 2,4 GHz, IMU onboard, microfone digital, flash externa de 8MB, conector de antena IPEX e PMIC Nordic nPM1300 para gerenciamento de energia eficiente. Com suporte para Bluetooth LE, Bluetooth Channel Sounding, Bluetooth Mesh, Thread, Zigbee, Matter e protocolos proprietários de 2,4 GHz de até 4 Mbps, esta placa foi criada para produtos conectados de próxima geração. Os sensores de movimento e áudio onboard a tornam ideal para vestíveis, detecção inteligente, TinyML, reconhecimento de gestos, dispositivos acionados por voz e aplicações de IoT alimentadas por bateria.

- **Eficiência de energia ultrabaixa**

  Baseado no Nordic nRF54LM20A e no PMIC nPM1300, o XIAO nRF54LM20A Sense atinge uma corrente de deep sleep medida de apenas 4,76 µA sob alimentação BAT. Combinado com o PMIC nPM1300 e sua corrente BAT de 0,33 µA em Ship Mode, em operação sem fio ativa ele registra uma corrente média de 3,87 mA com uma entrada de bateria simulada de 3,7 V e potência de TX ajustada para +8 dBm; a placa é ideal para aplicações de detecção alimentadas por bateria de longa duração, vestíveis e dispositivos de IoT sempre ligados.

- **Experiência de desenvolvimento simplificada**

  Suporte completo para Nordic nRF Connect SDK e PlatformIO (Zephyr) permite fluxos de trabalho eficientes de desenvolvimento embarcado. (Observação: Arduino IDE atualmente não é suportado)

## Visão geral de hardware

<div className="table-center">
  <TabItem value="54lm20a" label="XIAO nRF54LM20A" default>
    <table align="center">
      <tbody>
        <tr>
          <th>Lista de pinos do XIAO nRF54LM20A</th>
        </tr>
        <tr>
          <td>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/4_pin.png"
                style={{width: 800, height: 'auto'}}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/5_pin.png"
                style={{width: 800, height: 'auto'}}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </TabItem>
</div>

## **Mapa de pinos**

| Pino XIAO      | Função         | Pino do chip                       | Descrição                                                                   |
| :------------: | :------------: | :-------------------------------: | :-------------------------------------------------------------------------- |
| **Pinos de energia** |                |                                   |                                                                             |
| VBUS           | VBUS           | -                                 | Entrada/Saída de energia de 5V                                             |
| GND            | GND            | -                                 | Terra                                                                       |
| 3V3            | 3V3-OUT        | -                                 | Saída de energia de 3,3V                                                   |
| BAT+           | BAT+           | -                                 | Entrada de bateria (monitorada pelo nPM1300 via I²C)                       |
| BAT-           | BAT-           | -                                 | Terminal negativo da bateria                                               |
| SHPHLD         | SHPHLD         | -                                 | Controle de modo Ship/Hibernate do PMIC (estado de envio de ultrabaixo consumo) |
| **Pinos de sistema e controle** |        |                                   |                                                                             |
| RESET          | RESET          | -                                 | Reset da placa                                                              |
| SWCLK          | SWCLK          | nRF54LM20A SWCLK / SAMD11 SWCLK   | Clock de fio serial (para nRF54 e SAMD11)                                  |
| SWDIO          | SWDIO          | nRF54LM20A SWDIO / SAMD11 SWDIO   | Dados de fio serial (para nRF54 e SAMD11)                                  |
| SAMD11_RESET   | RESET          | SAMD11 RESET                      | Reset do coprocessador SAMD11                                              |
| **Pinos de usuário e LED** |            |                                   |                                                                             |
| -              | USER_BUTTON    | P0.09                             | Entrada do botão de usuário                                                |
| -              | RGB-B          | P1.23                             | Canal azul do LED RGB onboard                                              |
| -              | RGB-G          | P1.24                             | Canal verde do LED RGB onboard                                             |
| -              | RGB-R          | P1.22                             | Canal vermelho do LED RGB onboard                                          |
| **Pinos de entrada analógica (ADC)** |      |                                   |                                                                             |
| A0             | AIN0           | P1.00                             | Entrada analógica 0 / GPIO                                                 |
| A1             | AIN1           | P1.31                             | Entrada analógica 1 / GPIO                                                 |
| A2             | AIN2           | P1.30                             | Entrada analógica 2 / GPIO                                                 |
| A3             | AIN3           | P1.29                             | Entrada analógica 3 / GPIO                                                 |
| A7             | AIN7           | P1.03                             | Entrada analógica 7 / GPIO                                                 |
| **Pinos I2C**  |                |                                   |                                                                             |
| SDA            | I2C_SDA        | P1.03                             | Linha de dados I2C (IMU e periférico)                                      |
| SCL            | I2C_SCL        | P1.07                             | Linha de clock I2C (IMU e periférico)                                      |
| -              | BAT_SDA        | P1.18                             | SDA I2C do monitor de bateria (nPM1300)                                    |
| -              | BAT_SCL        | P1.17                             | SCL I2C do monitor de bateria (nPM1300)                                    |
| **Pinos UART** |                |                                   |                                                                             |
| TX             | UART_TX        | P1.08                             | Transmissão UART                                                            |
| RX             | UART_RX        | P1.09                             | Recepção UART                                                               |
| **Pinos SPI**  |                |                                   |                                                                             |
| MOSI           | SPI_MOSI       | P1.06                             | SPI Master Out Slave In                                                     |
| MISO           | SPI_MISO       | P1.05                             | SPI Master In Slave Out                                                     |
| SCK            | SPI_SCK        | P1.04                             | Clock serial SPI                                                            |
| **Pinos de periféricos onboard** |      |                                   |                                                                             |
| -              | MIC_DAT        | P1.14                             | Linha de dados do microfone                                                |
| -              | MIC_CLK        | P1.13                             | Linha de clock do microfone                                                |
| -              | IMU_SDA        | P0.08                             | SDA I2C da IMU (IMU onboard)                                               |
| -              | IMU_SCL        | P0.07                             | SCL I2C da IMU (IMU onboard)                                               |
| -              | IMU_CS         | P3.12                             | Chip Select da IMU                                                          |
| -              | IMU_INT1       | P0.06                             | Interrupção 1 da IMU                                                        |
| -              | NFC            | P1.02 / P1.01                     | Pinos de antena NFC                                                         |
| -              | GRTC           | P0.04 / P0.05                     | Pinos RTC de uso geral                                                      |
## Introdução

Nesta seção, vamos guiá-lo para começar rapidamente com o XIAO nRF54LM20A por meio do efeito de piscar em várias cores de um LED RGB.
Conclua as preparações de hardware e software abaixo para configurar seu XIAO para o desenvolvimento subsequente.

### Hardware

Você precisa preparar o seguinte:

- 1 x [Seeed Studio XIAO nRF54LM20A](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-p-5884.html)
- 1 x Computador
- 1 x Cabo USB Type-C

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

## Software

<!-- <Tabs>
  <TabItem value="platformio" label="PlatformIO" default> -->

### Configurando o PlatformIO para o XIAO nRF54LM20A

Siga estas etapas simplificadas para configurar seu ambiente de desenvolvimento e implantar seu primeiro aplicativo no XIAO nRF54LM20A.

#### Instalar a extensão PlatformIO IDE para o VS Code

Se ainda não o fez, instale a extensão PlatformIO IDE diretamente no Visual Studio Code. Esta poderosa extensão transforma o VS Code em um ambiente completo de desenvolvimento embarcado.

- Abra o VS Code.
- Vá para a visualização de Extensões (Ctrl+Shift+X ou Cmd+Shift+X).
- Procure por [**PlatformIO IDE**](https://platformio.org/platformio-ide) e clique em Install.

#### Criar um novo projeto PlatformIO

Aqui você pode escolher qualquer uma das versões de desenvolvimento para criar um arquivo de projeto, eu uso o XIAO ESP32 C3 como exemplo.

<div className="table-center">
<table align="center">
  <tr>
      <th>Operação um</th>
        <th>Operação dois</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_platform/mg24patform2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/mg24_platformIO.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
</table>
</div>

#### Configurar o platformio.ini para suporte ao Zephyr no XIAO nRF54LM20A

Depois que o projeto for criado, localize o arquivo platformio.ini na raiz do diretório do seu projeto (visível no Explorador do VS Code à esquerda). Este arquivo é o coração da configuração do seu projeto PlatformIO.

<table align="center">
  <tbody>
    <tr>
      <th>Operação três</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/1.1.png"style={{width: 800, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
  </tbody>
</table>


Você precisa substituir todo o conteúdo do seu arquivo platformio.ini pela seguinte configuração:

```ini
[env:seeed-xiao-nrf54lm20a]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20a
```

Em seguida, salve novamente o arquivo platformio.ini (Ctrl+S ou Cmd+S) e aguarde até que ele seja carregado completamente.

Você pode fechar este projeto assim que o carregamento for concluído. Esta etapa serve para baixar os arquivos de biblioteca necessários.

:::tip
Se você já instalou outras bibliotecas XIAO antes, recomendamos atualizar esta biblioteca para a versão mais recente usando o seguinte comando do PlatformIO.
Este é o método oficialmente recomendado. Basta executar o comando diretamente no diretório raiz do seu projeto (não é necessário navegar até a pasta platform):

```bash
pio pkg update -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_1.png" style={{width:800, height:'auto'}}/></div>

:::

#### Compile e envie seu primeiro exemplo Blink

Agora, vamos testar sua configuração com um clássico exemplo **Blink**. Este código irá alternar o LED embutido no seu XIAO nRF54LM20A Sense.

Abaixo está o link para baixar a biblioteca. Você pode optar por baixar este projeto diretamente para sua máquina local e, em seguida, abri-lo diretamente no VS Code. Como alternativa, você pode seguir estas etapas: substituir e adicionar algum código de demonstração. Este processo envolve:

:::tip

As definições para as placas de desenvolvimento da série Seeed Studio XIAO são armazenadas no repositório **platform-seeedboards**. Se você estiver usando o XIAO nRF54LM20A Sense, certifique-se de atualizar este repositório para a versão mais recente.

<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="hhttps://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-blink" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::

Etapa 1: Criar um novo projeto
<table align="center">
  <tbody>
    <tr>
      <th>Operação quatro</th>
    </tr>
    <tr>
      <td>
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/2.png"
    style={{width: 800, height: 'auto'}}
  />
</div>
      </td>
    </tr>
  </tbody>
</table>

Etapa 2: Abrir o projeto
Você pode compilá-lo primeiro para ver se o projeto que você puxou é executado corretamente. Se for, o projeto foi puxado com sucesso.
Imagem abaixo:
<table align="center">
  <tbody>
    <tr>
      <th>Operação cinco</th>
    </tr>
    <tr>
      <td>
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_2.png"
    style={{width: 800, height: 'auto'}}
  />
</div>  
      </td>
    </tr>
  </tbody>
</table>

Etapa 3: Substituir o código do projeto
- Abra os arquivos **src/main.c** e **Zephyr/prj.conf** e substitua o código original pelo código a seguir.
<table align="center">
  <tbody>
    <tr>
      <th>Operação seis</th>
    </tr>
    <tr>
      <td>
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/14io.png"
    style={{width: 800, height: 'auto'}}
  />
</div>
      </td>
    </tr>
  </tbody>
</table>


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
<summary>Zephyr/prj.conf</summary>
<div>

```prj
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n
```

</div>
</details>

<details>
1. Se você precisar modificar ou redefinir o conteúdo de nós da device tree, crie um novo arquivo **app.overlay** no diretório do Zephyr para vincular explicitamente os nós do dispositivo.
2. Se você tiver modificado os arquivos da device tree, limpe os arquivos originais antes de recompilar para evitar que o CMake deixe de reconhecer suas alterações.

<summary>Zephyr/app.overlay</summary>
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

Agora, conecte seu XIAO nRF54LM20A ao computador via USB. Após salvar, compilar e fazer o download, a luz RGB começará a piscar. No VS Code:

<!-- You can use the command line or the buttons.

```bash
pio run -e seeed-xiao-nrf54lm20a -t upload -v
```

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_3.png"
    style={{width: 800, height: 'auto'}}
  />
</div> -->

<table align="center">
  <tbody>
    <tr>
      <th>Operação sete</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_4.png"
            style={{width: 800, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
  </tbody>
</table>

A saída no terminal deve indicar um processo de compilação e gravação bem-sucedido.

### Explicação do Código

- **src/main.c**
Ponto de entrada principal da aplicação que implementa a lógica de demonstração, incluindo configuração de cor do LED, efeitos de respiração, controle de ritmo de piscar, troca de modo baseada em botão e outros comportamentos de interação com o hardware.

- **zephyr/prj.conf**
Arquivo de configuração do Zephyr RTOS para habilitar/desabilitar componentes do sistema e drivers de periféricos, incluindo registro de logs, UART, PWM, I2C, SPI, gerenciamento de baixo consumo de energia e outras funcionalidades.

#### Observe o Resultado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_5.gif" style={{width:600, height:'auto'}}/></div>

## Antena Bluetooth

Esta placa utiliza uma antena Bluetooth externa. Para garantir uma melhor qualidade de sinal Bluetooth e aprimorar sua experiência de uso, recomenda-se instalar uma antena Bluetooth.
O método de conexão é mostrado abaixo:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_6.gif"
    alt="Bluetooth antenna connection"
    style={{width: 600, height: 'auto'}}
  />
</div>

## Uso da Bateria

O XIAO nRF54LM20A é capaz de usar uma bateria de lítio de 3,7 V como entrada de alimentação. Você pode consultar o diagrama a seguir para o método de fiação.

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/6_battry.png"
    alt="Battery wiring"
    style={{width: 600, height: 'auto'}}
  />
</div>

:::caution
Tenha cuidado para não causar curto-circuito entre os terminais positivo e negativo e queimar a bateria e o equipamento durante a soldagem.
Se a bateria estiver com carga, nunca a solde na placa, pois isso pode queimar a placa de circuito. Um curto-circuito enquanto o circuito estiver energizado representa um risco significativo; recomenda-se usar um adaptador.

:::

**Instruções sobre o uso de baterias:**

1. Utilize baterias qualificadas que atendam às especificações.
2. O XIAO pode ser conectado ao seu dispositivo computador via cabo de dados enquanto utiliza a bateria; fique tranquilo, pois o XIAO possui um chip de proteção de circuito integrado, sendo seguro.



### Detecção de Tensão da Bateria

O XIAO nRF54LM20A integra um recurso de detecção de tensão da bateria que se concentra em gerenciar de forma eficiente as medições de energia da bateria usando o load switch nPM1300-CAA. Este guia se concentrará em analisar a implementação de software da detecção de bateria **(especialmente o código main.c)** e orientá-lo sobre como implantar e usar facilmente esse recurso em um ambiente PlatformIO, evitando a complexidade do Zephyr NCS SDK.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/9_battery.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:600, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Esquemático de Detecção da Bateria</em></p>
</div>

O que o chip nPM1300-CAA faz:

O nPM1300-CAA é um CI de gerenciamento de energia (PMIC) altamente integrado que substitui a função simples de load switch do TPS22916. Ele não apenas controla a comutação da tensão da bateria para monitoramento de baixo consumo, mas também integra carregamento, regulação e medição precisa do nível de carga (via tensão, corrente, temperatura) para maximizar a vida útil da bateria do nRF54LM20A.



<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

:::note
O exemplo a seguir funciona tanto para PlatformIO quanto para nRF Connect SDK. Ele pode ser usado diretamente no PlatformIO, enquanto o SDK exige a adição manual de arquivos. Consulte este [link](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/#placa-alimentada-por-bateria)
:::

## Visão Geral dos Periféricos

A circuitaria periférica desta placa inclui um IMU e um microfone. Você pode ver suas localizações no diagrama abaixo:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/8.IMU_MIC.png"
    alt="IMU and microphone locations"
    style={{width: 400, height: 'auto'}}
  />
</div>

## IMU

O XIAO nRF54LM20A possui um IMU LSM6DS3TR-C, com suporte a acelerômetro, giroscópio e magnetômetro de 6 eixos.

- [Uso do IMU do XIAO nRF54LM20A](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_with_onboard/#imu)

## MIC

O XIAO nRF54LM20A está equipado com um microfone MSM261DGT006, com suporte a captura de áudio de 16 bits.
- [Uso do MIC do XIAO nRF54LM20A](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_with_onboard/#mic)

## FAQ

### Problema 1: Travado em **Reading CMake configuration** no macOS

Ao compilar e enviar programas com o PlatformIO no macOS, o processo pode ficar travado na etapa **Reading CMake configuration** mesmo após descartar problemas de rede. Isso geralmente é causado por um problema de compatibilidade do macOS que impede a execução correta da ferramenta baseada em Python `arm-none-eabi-gdb-py`.

**Correção recomendada:** Substituir o arquivo `gdb-py` com defeito por um link simbólico.

1. Navegue até o diretório da ferramenta:
   `/Users/mengdu/.platformio/packages/toolchain-gccarmnoneeabi@1.80201.181220/bin/`
2. Faça backup do arquivo original renomeando `arm-none-eabi-gdb-py` para `arm-none-eabi-gdb-py.broken.bak`.
3. Crie um novo link simbólico chamado `arm-none-eabi-gdb-py` que aponte para `arm-none-eabi-gdb`.

### Problema 2: Erros de compilação após modificar arquivos de configuração

Se você compilou anteriormente o projeto completo do Zephyr e depois modificou arquivos de configuração, é recomendável limpar o cache de compilação antes de recompilar e enviar. Isso ajuda a evitar erros de compilação causados por arquivos de cache antigos ou corrompidos.

```cpp
pio run -t clean  // Clean command
```

### Problema 3: Erros de compilação após modificar arquivos de configuração

Alguns cabos USB podem apenas fornecer energia e não transferir dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode verificar o [Seeed USB Type-C com suporte a USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).

## Recursos

### Seeed Studio XIAO nRF54LM20A

**Projeto de Hardware**
- **📄[Datasheet]** [Nordic nRF54LM20A Datasheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[Schematic]** [Esquemático do XIAO nRF54LM20A](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Schematic.pdf )
- **🗃️[Arquivos de Projeto de PCB]** [Projeto KiCad do XIAO nRF54LM20A](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_V1.0_SCH&PCB_260508.zip )
- **🗃️[Bibliotecas de Projeto de PCB]** 
  - [Footprints KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de Pinagem]**[Folha de Pinagem do XIAO nRF54LM20A](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Pin_definition.xlsx)

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20A Dimension in DXF](1) -->

### Seeed Studio XIAO nRF54LM20A Sense

**Design de hardware**
- **📄[Datasheet]** [Nordic nRF54LM20A Datasheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[Schematic]** [Esquemático do XIAO nRF54LM20A Sense](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Schematic.pdf )
- **🗃️[PCB Design Files]** [Projeto KiCad do XIAO nRF54LM20A](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_V1.0_SCH&PCB_260508.zip )
- **🗃️[PCB Design Libraries]**
  - [Footprints KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]**[Folha de pinagem do XIAO nRF54LM20A Sense](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Pin_definition.xlsx)

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20A Sense Dimension in DXF](1) -->


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
