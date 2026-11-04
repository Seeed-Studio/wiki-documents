---
title: XIAO STM32C5 Com STM32CubeIDE
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
url: https://wiki.seeedstudio.com/pt-br/xiao_stm32c5_with_stm32cubeide/
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
                  Adquira agora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## Visão geral

[STM32CubeIDE](https://www.st.com/content/st_com/en/stm32cubeide.html#st-get-software) é o ambiente de desenvolvimento integrado oficial, gratuito e multiplataforma da STMicroelectronics para microcontroladores STM32. Ele também é adequado para desenvolver aplicações para o XIAO STM32C5.

O STM32CubeIDE fornece a toolchain GNU Arm e oferece suporte a fluxos de compilação baseados em CMake e Ninja, reduzindo a necessidade de configurações adicionais de ambiente. Ele cobre todo o fluxo de trabalho de desenvolvimento, incluindo criação de projeto, configuração de periféricos, edição de código, compilação, gravação de firmware e depuração em alvo.

## Preparação de hardware

Antes de começar, prepare os seguintes itens:

- 1 × XIAO STM32C5
- PC e cabo USB Type‑C
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

## Instalando o STM32CubeIDE

1. Baixe o pacote de instalação. Clique em [STM32CubeIDE Software](https://www.st.com/en/development-tools/stm32cubeide.html) para ir para a página de download. Selecione **Get Software** na página inicial ou role até a parte inferior da página. Escolha o instalador correspondente ao sistema operacional do seu PC. Recomenda‑se usar a versão mais recente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_2.png" style={{width:600, height:'auto'}}/></div>

2. Você pode baixar o instalador com uma conta registrada ou como convidado. São necessários e‑mail e outras informações relacionadas para esse processo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_3.png" style={{width:600, height:'auto'}}/></div>

3. O link de download será enviado para o seu endereço de e‑mail. Clique no link para obter o instalador do software.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_4.png" style={{width:600, height:'auto'}}/></div>

4. Inicie o instalador, leia os contratos de licença relevantes e selecione **I Agree**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_5.png" style={{width:600, height:'auto'}}/></div>

5. Selecione o diretório de instalação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_6.png" style={{width:600, height:'auto'}}/></div>

6. Instale o driver para a sonda de depuração que você planeja usar. Os drivers da sonda não são necessários para as etapas de gravação UF2 abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_7.png" style={{width:600, height:'auto'}}/></div>

## Desenvolvendo com o XIAO STM32C5

1. Como o XIAO STM32C5 oferece suporte nativo à gravação de firmware no formato UF2, é fornecido um projeto de exemplo de referência para simplificar o seu desenvolvimento. Clique no link abaixo para baixar o exemplo:

- **🗃️[Project]** [XIAO STM32C5 Blink Project](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/xiao_c5_project.zip)

- Extraia o arquivo compactado após o download. A estrutura resultante do projeto deve corresponder ao layout mostrado abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_8.png" style={{width:800, height:'auto'}}/></div>

2. Inicie o STM32CubeIDE; a interface mostrada abaixo aparecerá. O conteúdo desta seção é extraído do **📄[PDF]** [STM32CubeIDE User Guide](https://www.st.com/resource/en/user_manual/um2609-stm32cubeide-user-guide-stmicroelectronics.pdf)

:::note

Na primeira inicialização, o STM32CubeIDE solicita a seleção de um workspace. O workspace padrão funciona bem e não afetará as etapas posteriores.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_9.png" style={{width:800, height:'auto'}}/></div>

3. Importe o projeto. Na barra de ferramentas superior direita, navegue até **File → STM32 Project Create/Import** e selecione **Import STM32CubeMX / STM32CubeIDE Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_10.png" style={{width:800, height:'auto'}}/></div>

4. Selecione o diretório do projeto extraído **xiao_c5_project** e clique em **Finish**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_11.png" style={{width:800, height:'auto'}}/></div>

5. Após a importação, a estrutura do projeto é mostrada na figura abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_12.png" style={{width:800, height:'auto'}}/></div>

- **SDK**: Contém o pacote SDK STM32CubeC5. Este é um SDK reduzido que inclui apenas os arquivos essenciais para compilar o firmware do XIAO STM32C5; não é a versão completa do SDK.
- **Source**: Diretório de código‑fonte, contendo `main.c` e arquivos de definição específicos da placa para o XIAO STM32C5.
- **Startup**: Arquivos de inicialização obrigatórios para o XIAO STM32C5.
- **tools**: Contém o script `uf2conv.py`, que converte os binários compilados em formato bin para UF2 após cada compilação.

### Compilando e gravando o firmware

1. Visão geral do programa. Abra **Source → main.c**. Este é um exemplo simples de piscar o LED on‑board para o XIAO STM32C5. Ele alterna o nível lógico do LED a cada 500 ms para obter o efeito de piscar.

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

- `board_clock_init();`: Inicializa os clocks de periféricos necessários para o XIAO STM32C5.
- `board_uart_init();`: Inicializa a configuração de E/S UART para o XIAO STM32C5.
- `board_led_init();`: Inicializa a configuração de E/S para o LED de usuário on‑board do XIAO STM32C5.
- `HAL_GPIO_TogglePin(LED_PORT, LED);`: Função de alternância de GPIO da biblioteca STM32 HAL, que alterna o nível lógico de GPIO do LED de usuário.

2. Na barra de ferramentas, selecione **Release** para acionar a compilação automática do projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_13.png" style={{width:800, height:'auto'}}/></div>

3. Após uma compilação bem‑sucedida, uma pasta **Release** será gerada contendo vários artefatos de compilação. Entre essas saídas, o arquivo bin e o arquivo uf2 são os arquivos de que você precisa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_14.png" style={{width:600, height:'auto'}}/></div>

:::tip

Você também pode compilar o projeto selecionando **Build**. Isso cria uma pasta **Build** que contém os arquivos de firmware gerados.

:::

### Gravando firmware em formato UF2

- Toque duas vezes rapidamente no botão de reset do XIAO STM32C5. A unidade de armazenamento em massa do XIAO STM32C5 será exibida. Copie o arquivo UF2 para essa unidade para concluir a gravação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_15.png" style={{width:800, height:'auto'}}/></div>


### Gravando com [ST-LINK/V2](https://www.st.com/en/development-tools/st-link-v2.html)

[ST-LINK/V2](https://www.st.com/en/development-tools/st-link-v2.html) é uma ferramenta oficial de depuração e programação lançada pela STMicroelectronics. Ela oferece suporte às famílias de microcontroladores STM8 e STM32 e permite download de programas, gravação de firmware e depuração em chip por meio das interfaces SWIM, JTAG ou SWD. A seção a seguir descreve como gravar firmware no XIAO STM32C5 usando o ST‑LINK/V2 juntamente com o STM32CubeIDE

- Conecte o ST‑LINK/V2 ao seu PC. No IDE, vá para **Help → ST‑LINK Upgrade** e atualize o firmware dele para a versão mais recente para garantir boa compatibilidade com dispositivos STM32C5.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_15_1.png" style={{width:800, height:'auto'}}/></div>

- Conecte o ST‑LINK/V2 ao XIAO STM32C5. Veja abaixo as conexões dos pinos. É necessário soldar para esta etapa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_16.png" style={{width:800, height:'auto'}}/></div>

:::tip

1. Entre os pinos de conexão, RST é uma interface opcional e pode ser deixada desconectada.
2. Você também pode usar o [**XIAO Debug Mate**](https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html) para conectar à ferramenta ST‑LINK/V2, o que elimina a necessidade de soldagem manual.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_16_1.jpg" style={{width:600, height:'auto'}}/></div>
:::
<br/>
- Clique em **Run** na barra de ferramentas para concluir a gravação. O STM32CubeIDE detectará automaticamente o programador ST‑LINK/V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_17.png" style={{width:800, height:'auto'}}/></div>

## Resumo

- Após gravar o firmware correspondente no XIAO STM32C5 usando os métodos acima, o LED de usuário on‑board irá alternar e piscar a cada 500 ms.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4_1.gif" style={{width:500, height:'auto'}}/></div>

Você também pode conectar D6 e D7 a um adaptador TTL‑para‑UART. Abra qualquer monitor serial; a porta serial imprimirá a string **[LED] PB12 onboard LED is blinking** a cada 500 ms.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/cubeide_18.png" style={{width:800, height:'auto'}}/></div>

## Arquivos dentro da pasta Source

- **board.c / board.h**

  Define o mapeamento de pinos e os recursos específicos da placa para o XIAO STM32C5. Fornece configurações de inicialização para periféricos incluindo clock, GPIO, CAN e ADC, e pode servir como base para o desenvolvimento de aplicações.

- **test.c / test.h**

  Fornece rotinas de verificação para periféricos on‑board como IMU e LED, bem como interfaces incluindo CAN, SPI, I2C e ADC. Essas rotinas podem ser usadas para validação das funções de hardware e como referência de código.

- **uart_io.c / uart_io.h**

  Lida com o processamento de caracteres e a análise de comandos para os dados UART recebidos, oferecendo um ponto de entrada interativo para as rotinas de teste. As interfaces de comunicação de baixo nível são implementadas por outros módulos.

## Recursos de referência

- **🗃️[Project]** [XIAO STM32C5 Blink Project](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/xiao_c5_project.zip)
- **📄[Document]** [STM32CubeIDE User Guide](https://www.st.com/resource/en/user_manual/um2609-stm32cubeide-user-guide-stmicroelectronics.pdf)
- **📄[Datasheet]** [STM32C5A3CGX](https://www.st.com/resource/en/datasheet/stm32c5a3cg.pdf)
- **📄[Examples]** [STM32 Example Library](https://dev.st.com/stm32-example-library/)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
