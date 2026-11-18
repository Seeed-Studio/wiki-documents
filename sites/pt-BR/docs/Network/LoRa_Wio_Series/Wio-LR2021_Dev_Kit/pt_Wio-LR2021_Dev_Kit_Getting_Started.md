---
title: Introdução ao Wio-LR2021 Dev Kit
description: 'Comece a usar o Wio-LR2021 Dev Kit'
keywords:
  - Wio-LR2021
  - Semtech LR2021
  - ESP32-S3
  - LoRa
  - FLRC
  - Dev Kit
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_getting_started
sku: 100038329
sidebar_position: 1
last_update:
  date: 11/02/2026
  author: David Du
createdAt: '2026-11-02'
updatedAt: '2026-11-02'
url: https://wiki.seeedstudio.com/pt-br/wio_lr2021_dev_kit_getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introdução ao Wio-LR2021 Dev Kit

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp" style={{width:600, height:'auto'}}/>
</div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-LR2021-Dev-Kit-p-7040.html"
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

O **Wio-LR2021 Dev Kit** é um kit de desenvolvimento LoRa de banda dupla que combina o transceptor LR2021 da Semtech com um **ESP32-S3**. O módulo de rádio cobre de 150 ~ 960 MHz e a faixa de 2400 ~ 2500 MHz em um único encapsulamento, então uma única placa pode alternar entre enlaces de longo alcance e canais globais via software. FLRC adiciona taxas de rajada de até 2,6 Mbps para imagens e áudio, e o ESP32-S3R8, com 8 MB de PSRAM e 16 MB de flash, pode avaliar um quadro de câmera antes que ele chegue ao ar.

Um Media HAT destacável traz uma **câmera GC2145 de 2 MP**, um **microfone MEMS**, um **codec ES8311** e um **amplificador NS4150B** com um conector para alto-falante. Na placa principal você também obtém um OLED 128 × 64, um **expansor PCA9535** que comuta quatro trilhos de alimentação periféricos, uma entrada para Li-ion de 3,7 V e uma entrada solar de 5 V atrás de um carregador CN3165, uma porta Grove e dois headers de 16 pinos.

O kit é enviado com um firmware de fábrica, para que você possa testar o rádio, a câmera, o display, o caminho de áudio e a bateria a partir de um terminal antes de gravar qualquer firmware.

### Especificações

<table>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th>Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MCU</td>
      <td>**ESP32-S3R8**, dual-core Xtensa LX7 até 240 MHz</td>
    </tr>
    <tr>
      <td>Transceptor RF</td>
      <td>Semtech LR2021, integrado no **módulo Wio-LR2021**</td>
    </tr>
    <tr>
      <td>Faixas de frequência</td>
      <td>150 ~ 960 MHz e 2400 ~ 2500 MHz</td>
    </tr>
    <tr>
      <td>Modulação</td>
      <td>LoRa (SF5 ~ SF12), (G)FSK, FLRC, LR-FHSS</td>
    </tr>
    <tr>
      <td>Potência de transmissão</td>
      <td>até `+22` dBm (sub-GHz), até `+12` dBm (2.4 GHz)</td>
    </tr>
    <tr>
      <td>Wi-Fi e Bluetooth</td>
      <td>802.11 b/g/n 2.4 GHz, Bluetooth 5 LE</td>
    </tr>
    <tr>
      <td>Conectores de antena</td>
      <td>2 × SMA (sub-GHz, 2.4 GHz) mais 3 × U.FL</td>
    </tr>
    <tr>
      <td>Interface Type-C</td>
      <td>USB-C com USB-Serial-JTAG nativo, sem chip de ponte</td>
    </tr>
    <tr>
      <td>Interface Grove</td>
      <td>Porta Grove mais 2 × headers de 16 pinos, passo 2,54 mm</td>
    </tr>
    <tr>
      <td>Botões e LEDs</td>
      <td>Botões USER, BOOT e RESET; 1 LED de alimentação; 1 LED de usuário</td>
    </tr>
    <tr>
      <td>Expansor de I/O</td>
      <td>**PCA9535**, 16 I/O, endereço I2C: `0x21`</td>
    </tr>
    <tr>
      <td>OLED</td>
      <td>128 × 64 monocromático, 0,96 polegada, driver **CH1116**, endereço I2C: `0x3D`</td>
    </tr>
    <tr>
      <td>Câmera (HAT)</td>
      <td>**GC2145**, 2 MP, interface DVP de 8 bits</td>
    </tr>
    <tr>
      <td>Áudio (HAT)</td>
      <td>Codec **ES8311**, amplificador **NS4150B**, microfone MEMS, conector para alto-falante</td>
    </tr>
    <tr>
      <td>Interface de alimentação</td>
      <td>USB-C 5 V, solar 5 V (JST), Li-ion 3,7 V (JST)</td>
    </tr>
    <tr>
      <td>CI de carregamento</td>
      <td>**CN3165**, corrente de carga de 495 mA</td>
    </tr>
    <tr>
      <td>Reguladores</td>
      <td>**TPS62A03** buck (sistema 3,3 V), **SGM2059** LDO (trilho do rádio)</td>
    </tr>
    <tr>
      <td>Dimensões</td>
      <td>Placa principal 55 × 38,5 mm, Media HAT 55 × 38,5 mm</td>
    </tr>
    <tr>
      <td>Furo de fixação</td>
      <td>3 × furos M2</td>
    </tr>
  </tbody>
</table>

### Recursos

- **Rádio de banda dupla:** Sub-GHz e 2,4 GHz compartilham um único módulo, então um único projeto cobre faixas globais.
- **Rajadas rápidas:** FLRC transporta uma imagem a até 2,6 Mbps e depois volta para LoRa quando o alcance é importante.
- **Visão no dispositivo:** 8 MB de PSRAM armazenam quadros da câmera em buffer, então o rádio envia uma conclusão em vez de pixels.
- **Media HAT destacável:** Câmera, microfone, codec e amplificador conectam-se por dois conectores de 16 pinos.
- **Alimentação em campo:** Uma entrada solar de 5 V e um conector para Li-ion de 3,7 V mantêm um nó funcionando fora da rede elétrica.
- **Trilhos comutáveis:** O PCA9535 comanda via software os trilhos de alimentação da câmera, áudio, OLED e Grove.
- **Display onboard:** Um OLED 128 × 64 no barramento I2C compartilhado mostra leituras ou estado do enlace sem hardware extra.
- **USB nativo:** USB-Serial-JTAG não precisa de chip de ponte, então a gravação e o console compartilham um único cabo.

## Visão geral do hardware

O kit possui duas placas que compartilham uma área de 55 × 38,5 mm. A placa principal traz o rádio, o display e o caminho de alimentação; o Media HAT adiciona a câmera e o caminho de áudio.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/Wio-LR2021_Dev_Kit_hardware.webp" style={{width:1000, height:'auto'}}/>
</div>

### Frente da placa principal

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/main_board_front.webp" style={{width:1000, height:'auto'}}/>
</div>

1. **ESP32-S3R8** com 16 MB de flash SPI NOR
2. **Módulo Wio-LR2021** contendo o transceptor LR2021, com um TCXO de 32 MHz integrado
3. **Conector SMA sub-GHz** para a porta de 150 ~ 960 MHz
4. **Conector SMA de 2,4 GHz** para a porta de 2400 ~ 2500 MHz
5. **Três pads U.FL:** ESP32-S3 2,4 GHz, LR2021 2,4 GHz e LR2021 sub-GHz
6. **Porta USB-C** com USB-Serial-JTAG nativo
7. **Entrada solar** em um conector JST de 2 pinos, rotulado `Solar-5V`
8. **Entrada de bateria** em um conector JST de 2 pinos, rotulado `BAT-3.7V`
9. **Dois headers de 16 pinos, passo 2,54 mm**, um ao longo de cada borda longa

:::note
Os conectores SMA e os pads U.FL são conectados às mesmas duas redes de RF por meio de links de 0 Ω. Por padrão, os **conectores SMA** estão habilitados. Para usar a interface U.FL em vez disso, ressoldar os links de 0 Ω para os pads alternativos correspondentes.
:::

### Verso da placa principal

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/main_board_back.webp" style={{width:1000, height:'auto'}}/>
</div>

1. **OLED 128 × 64**, controlado via I2C no endereço `0x3D`
2. **Botão USER** em `GPIO46`, com resistor pull-up de 10 kΩ e capacitor de debounce de 100 nF
3. **Botão BOOT** em `GPIO0`, coloca o chip em modo de download se ativado no reset
4. **Botão RESET**, ligado ao pino de enable do ESP32-S3 (ativo em nível BAIXO)
5. **Conector Grove**, um soquete padrão de 4 pinos, 2,0 mm
6. **LED de usuário**, controlado pelo `P06` do PCA9535 (ativo em nível BAIXO)
7. **LED de alimentação**, aceso sempre que a placa tem alimentação presente

:::caution
O botão USER está em `GPIO46`, que é um pino de strapping no ESP32-S3. Se o botão for mantido pressionado enquanto o RESET é liberado, o chip amostra um nível BAIXO nesse strap e entra no modo de download em vez de inicializar. Solte o botão antes de reiniciar.
:::

### Media HAT

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/media_hat_front.webp" style={{width:1000, height:'auto'}}/>
</div>

1. **Câmera GC2145**, 2 MP, conectada por um barramento `DVP de 8 bits` em um FPC de 24 pinos
2. **Microfone MEMS** com saída analógica, ligado ao codec
3. **Codec ES8311**, áudio I2S de entrada e saída, configurado via I2C
4. **Amplificador Classe D NS4150B** que aciona o conector de alto-falante rotulado `SPK`

## Mapa de pinos

A placa principal expõe dois **headers de 16 pinos** com passo de 2,54 mm. O Media HAT expõe dois **soquetes de 14 pinos** com passo de 2,54 mm que podem ser encaixados em ambos os headers da placa principal.

:::caution
Como a **placa principal** usa um `header de 16 pinos` enquanto a placa de expansão **Media Hat** usa apenas um `soquete de 14 pinos`, é NECESSÁRIO prestar muita atenção à orientação durante a instalação. Certifique-se de que os pinos estejam corretamente **ALINHADOS**. A instalação incorreta pode causar mau funcionamento e resultar em danos irreversíveis ao dispositivo.
:::

<br />

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/pinout_1.webp" style={{width:1000, height:'auto'}}/>
</div>


| Índice | Função | Pino ESP32-S3 | Descrição |
| --- | --- | --- | --- |
| 1 | VSYS | — | Trilho do sistema, 5 V do USB ou solar, 3,0 ~ 4,2 V na bateria |
| 2 | GND | — | Terra |
| 3 | IIC0_SCL | GPIO48 | Barramento I2C compartilhado: OLED, PCA9535, codec do HAT |
| 4 | IIC0_SDA | GPIO47 | Barramento I2C compartilhado: OLED, PCA9535, codec do HAT |
| 5 | CODEC_I2S0_MCLK | GPIO41 | Clock de áudio para o ES8311 |
| 6 | CODEC_I2S0_LRCK | GPIO42 | Seleção de canal esquerdo e direito |
| 7 | GROVE_DAT_2 | GPIO43 | Bit de dados Grove 2, UART0_TXD |
| 8 | GROVE_DAT_1 | GPIO44 | Bit de dados Grove 1, UART0_RXD |
| 9 | CODEC_I2S0_SCLK | GPIO9 | Clock de bits de áudio |
| 10 | CODEC_I2S0_DSDIN | GPIO1 | Dados de reprodução para o codec |
| 11 | CODEC_I2S0_SDOUT | GPIO2 | Dados gravados vindos do codec |
| 12 | EXP_PWR_AUDIO_EN | PCA9535 `P02` | Habilita o trilho de áudio no HAT |
| 13 | EXP_CAM_RESET | PCA9535 `P07` | Pino de reset da câmera |
| 14 | EXP_PWR_CAM_EN | PCA9535 `P01` | Habilita o trilho da câmera no HAT |
| 15 | EXP_GPIO_P16 | PCA9535 `P16` | I/O reserva através do expansor |
| 16 | EXP_GPIO_P17 | PCA9535 `P17` | I/O reserva através do expansor |

<br />

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/pinout_2.webp" style={{width:1000, height:'auto'}}/>
</div>

| Índice | Função | Pino ESP32-S3 | Descrição |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | — | Trilho de sistema 3,3 V |
| 2 | GND | — | Terra |
| 3 | DVP_VSYNC | GPIO38 | Sincronismo vertical da câmera, `VSYNC` no HAT |
| 4 | DVP_HSYNC | GPIO39 | Sincronismo horizontal da câmera, `HSYNC` no HAT |
| 5 | DVP_D7 | GPIO21 | Bit de dados da câmera 7 |
| 6 | DVP_D6 | GPIO18 | Bit de dados da câmera 6 |
| 7 | DVP_D5 | GPIO17 | Bit de dados da câmera 5 |
| 8 | DVP_D4 | GPIO16 | Bit de dados da câmera 4 |
| 9 | DVP_D0 | GPIO15 | Bit de dados da câmera 0 |
| 10 | DVP_D3 | GPIO14 | Bit de dados da câmera 3 |
| 11 | DVP_PCLK | GPIO13 | Clock de pixel da câmera |
| 12 | DVP_D1 | GPIO12 | Bit de dados da câmera 1 |
| 13 | DVP_D2 | GPIO11 | Bit de dados da câmera 2 |
| 14 | DVP_XCLK | GPIO10 | Clock mestre da câmera, gerado pelo ESP32-S3 |
| 15 | EXP_GPIO_P14 | PCA9535 `P14` | I/O reserva através do expansor |
| 16 | EXP_GPIO_P15 | PCA9535 `P15` | I/O reserva através do expansor |

<br />

### Expansor de E/S

O **PCA9535** responde no endereço I2C `0x21`, e sua linha de interrupção vai para o `GPIO3`. Todos os 16 pinos iniciam como entradas na energização, portanto, cada trilho e reset abaixo permanece inativo até que o firmware os acione.

| Porta | Função | Observações |
| --- | --- | --- |
| P00 | — | Não conectado |
| P01 | EXP_PWR_CAM_EN | Habilitação do trilho da câmera |
| P02 | EXP_PWR_AUDIO_EN | Habilitação do trilho de áudio |
| P03 | EXP_PWR_OLED_EN | Habilitação do trilho do OLED |
| P04 | EXP_PWR_GROVE_EN | Habilitação do trilho Grove |
| P05 | EXP_OLED_RST | Reset do OLED |
| P06 | EXP_User_LED | LED de usuário (ativo em nível BAIXO) |
| P07 | EXP_CAM_RESET | Reset da câmera |
| P10 | EXP_BAT_ADC_CTR | Conecta o divisor de bateria ao `GPIO8` |
| P11 | EXP_Sig_CHG_Done | Sinal de carga concluída do CN3165 |
| P12 | EXP_Sig_CHGING | Sinal de carga em andamento do CN3165 |
| P13 | EXP_LoRa_RST | Reset do Wio-LR2021 |
| P14 | EXP_GPIO_P14 | `P14` do PCA9535 |
| P15 | EXP_GPIO_P15 | `P15` do PCA9535 |
| P16 | EXP_GPIO_P16 | `P16` do PCA9535 |
| P17 | EXP_GPIO_P17 | `P17` do PCA9535 |

<br />

### Fonte de Alimentação

| Trilho | Faixa | Observações |
| --- | --- | --- |
| VSYS | 3,0 ~ 5,5 V | Segue o USB ou o solar quando presentes, caso contrário a bateria |
| VCC_3V3 | 3,3 V | Saída do conversor buck, até o limite de corrente do regulador |
| VCC_Grove | 3,3 V | Comutado por `P04`, protegido por um fusível de 350 mA |
| Solar+ | 5,0 V nominal | Com bloqueio reverso e proteção contra sobretensão |
| BAT+ | 3,0 ~ 4,2 V | Célula de íon de lítio, carregada pelo CN3165 |

:::caution
`VSYS` não é um trilho fixo de 3,3 V. Com USB ou solar conectados ele fica próximo de 5,0 V e danificará um periférico somente 3,3 V.
:::

<br />

### Pinos de Configuração (Strapping Pins)

O ESP32-S3 amostra quatro pinos no reset: `GPIO0`, `GPIO3`, `GPIO45` e `GPIO46`. Dois deles são roteados para fora na placa principal.

| Pino | Conectado a | Descrição |
| --- | --- | --- |
| GPIO0 | Botão BOOT | Mantido em nível **BAIXO** com o botão USER, o chip entra no modo de download serial em vez de iniciar o firmware |
| GPIO46 | Botão USER | Mantido em nível **BAIXO** com o botão BOOT, o chip entra no modo de download serial em vez de iniciar o firmware |
| GPIO3 | Não exposto | usado como pino `INTERRUPT` do PCA9535 |
| GPIO45 | Não exposto | usado como pino `IRQ` do Wio-LR2021 |

## Introdução

### Preparação de Hardware

#### Etapa 1 — Conecte as antenas

Rosqueie a antena Sub-GHz no conector marcado `SUB-1G` e a antena de 2,4 GHz no conector marcado `LR-2.4G`. Aperte apenas com a mão. Se você usar antenas U.FL em vez disso, ressoldar os jumpers de 0 Ω para as ilhas correspondentes e deixe os conectores SMA vazios.

:::caution
Nunca transmita sem uma antena. O LR2021 não tem proteção contra porta aberta, e uma onda contínua ou uma transmissão longa em uma carga aberta pode destruir o amplificador de potência.
:::

#### Etapa 2 — Instale o Media HAT (opcional)

Alinhe os dois soquetes de 14 pinos no HAT com os dois headers de 16 pinos na placa principal e pressione uniformemente em ambas as extremidades. O HAT obtém sua alimentação da placa principal, portanto nenhum cabo extra é necessário. Remova-o da mesma forma, levantando as duas extremidades ao mesmo tempo.

:::note
O lado de trás da placa de expansão está marcado com as posições das portas USB Type‑C correspondentes na placa-mãe, o que pode ser usado para determinar a orientação correta de instalação. Em seguida, localize os pinos correspondentes de acordo com a serigrafia dos pinos na PCB.
:::

Os soquetes ficam no Media HAT, e a serigrafia ao lado de cada um imprime o número do pino do ESP32-S3, para que você possa verificar a orientação sem um diagrama.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/media_hat_back.webp" style={{width:1000, height:'auto'}}/>
</div>

#### Etapa 3 — Escolha uma fonte de alimentação

Qualquer uma das três entradas ligará a placa: USB-C em 5 V, um painel solar de 5 V no conector JST `Solar-5V`, ou uma célula de íon de lítio de 3,7 V no conector `BAT-3.7V`. USB-C é a escolha certa para a primeira inicialização, porque também carrega o console serial.

## Recursos

- 📄 [Folha de Dados do ESP32-S3](https://documentation.espressif.com/esp32-s3_datasheet_en.pdf)

- 📄 [Folha de Dados do Módulo Wio-LR2021](https://files.seeedstudio.com/products/100058045/Wio-LR2021%20Module%20Datasheet.pdf)

- 📄 [Esquemático da Placa Principal do Wio-LR2021 Dev Kit](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Schematic.pdf)

- 📄 [Esquemático do Media HAT do Wio-LR2021 Dev Kit](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Media_HAT_Schematic.pdf)

- 📄 [Modelo 3D da Placa Principal do Wio-LR2021 Dev Kit](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Main_Board.step)

- 📄 [Modelo 3D do Media HAT do Wio-LR2021 Dev Kit](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Media_HAT.step)

- 🗃️ [Documentação dos Componentes de Hardware](https://files.seeedstudio.com/products/100038329/doc/Hardware_Component_Documentation.zip)

- 📄 [Diagrama de Pinagem](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/pinout_diagram.webp)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>