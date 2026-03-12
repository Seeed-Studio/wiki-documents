---
description: Tutorial Básico do XIAO Round Display
title: Primeiros Passos com o Seeed Studio Round Display para XIAO
keywords:
  - XIAO
  - Round Dislay
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /get_start_round_display
sku: 104030087
last_update:
  date: 07/11/2024
  author: Spencer
createdAt: '2023-03-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/get_start_round_display/
---

# Primeiros Passos com o Seeed Studio Round Display para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O Seeed Studio Round Display para XIAO é uma placa de expansão compatível com todas as placas de desenvolvimento XIAO. Ele possui uma tela sensível ao toque totalmente coberta em um dos lados, projetada como um disco de 39 mm. Contém RTC onboard, chip de carregamento, slot para cartão TF dentro de seu tamanho compacto, perfeito para exibições interativas em casas inteligentes, wearables e muito mais.

<table align="center">
 <tr>
  <th>REV</th>
  <th>Descrição</th>
  <th>DATA</th>
  <th>POR</th>
 </tr>
 <tr>
  <td>v1.0</td>
  <td>Versão inicial</td>
  <td>2023/1/29</td>
  <td>Linus.Liao</td>
 </tr>
 <tr>
  <td>v1.1</td>
  <td>1.Alterar CI de carregamento de bateria Li<br />2.Adicionar uma chave para A0 e D6</td>
  <td>2023/4/7</td>
  <td>Linus.Liao</td>
 </tr>
</table>

### Especificações

<table align="center">
 <tr>
     <th>Item</th>
     <th>Detalhe</th>
 </tr>
 <tr>
     <th>Fonte de alimentação</th>
     <td>USB Tipo-C: 5V @35 mA <br></br> Carregamento de bateria: 3.7V @37mA</td>
 </tr>
 <tr>
     <th>Corrente de carregamento</th>
     <td>~ 485 mA</td>
 </tr>
  <tr>
     <th>Memória expansível</th>
     <td>Slot para cartão TF de até 32GB FAT</td>
 </tr>
  <tr>
     <th>Tela</th>
     <td>Tela sensível ao toque de 1,28 polegadas <br></br> Resolução 240×240 <br></br> 65K cores</td>
 </tr>
  <tr>
     <th>Outro equipamento externo</th>
     <td>Conector JST 1.25</td>
 </tr>
  <tr>
     <th>Dimensão</th>
     <td>39mm x 39mm</td>
 </tr>
</table>

### Recursos

- **Placa de expansão com tela sensível ao toque capacitiva**: Tela redonda de 1,28 polegadas, resolução 240×240, 65K cores, proporcionando exibição de imagens claras e coloridas
- **Alta compatibilidade**: Altamente compatível com todos os produtos da série XIAO, facilmente integrado aos seus projetos atuais
- **Periféricos ricos**: Possui RTC onboard, chip de carregamento de bateria, slot para cartão TF, conector JST 1.25, tudo dentro de seu tamanho compacto
- **Design em tamanho de relógio**: Vem com design circular de 39 mm, adequado para projetos vestíveis e com espaço limitado
- **Plug and Play**: Todos os pinos são expostos, não é necessário soldar

## Visão Geral de Hardware

Antes de começarmos, podemos consultar as imagens a seguir para entender o design dos pinos do Round Display, a fim de facilitar nossa compreensão da função do Round Display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-pinout.png" style={{width:800, height:'auto'}}/></div>

Desde 7 de abril de 2023, o Round Display reformulado adiciona uma chave de 2 bits para controlar a luz de fundo da tela e a leitura da tensão da bateria. Para que o usuário possa escolher livremente se deseja usar o pino ou liberá-lo. Clique [aqui](https://wiki.seeedstudio.com/pt-br/seeedstudio_round_display_usage/#botão-ke--gpio) para ler mais detalhes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-display-v1.1-pinout.png" style={{width:800, height:'auto'}}/></div>

## Primeiros Passos

### Preparação de Hardware

Se você quiser aproveitar ao máximo os recursos do Round Display e ter uma ótima experiência, recomendamos fortemente que você adquira nossa série XIAO como a placa-mãe para o Round Display.

:::tip
XIAO SAMD21, RP2040 e RA4M1 **podem não** ser compatíveis com telas circulares devido à memória insuficiente.
:::

<table align="center">
 <tr>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
     <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C6</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

A fileira de pinos na parte de trás do Round Display é projetada para a série XIAO. Se você já tiver um XIAO em mãos, não precisa preparar nenhum cabo adicional, apenas alinhe os pinos do XIAO e conecte-os diretamente ao Round Display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

:::caution
Observe que, ao conectar o XIAO, **o conector Type-C do XIAO deve estar voltado para a parte externa do Round Display**. Se você inverter a polaridade acidentalmente, não se preocupe demais, o Round Display possui um circuito de proteção de energia que não será facilmente danificado, mas não recomendamos que você mantenha a conexão invertida por muito tempo.
:::

A orientação recomendada para o Round Display é: quando você estiver de frente para o Round Display, o conector Type-C do XIAO fica voltado para a direita, de modo que o botão liga/desliga do Round Display fique no canto inferior esquerdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/51.jpg" style={{width:700, height:'auto'}}/></div>

### Preparação de Software

Para usar o Round Display, precisamos programar a série XIAO. A ferramenta de programação recomendada é o Arduino IDE, e você precisa configurar o ambiente Arduino para o XIAO e adicionar o pacote da placa.

:::tip
Se esta é a sua primeira vez usando o Arduino, recomendamos fortemente que você consulte [Primeiros Passos com o Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

#### Etapa 1. Baixe e instale a versão estável do Arduino IDE de acordo com seu sistema operacional

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

#### Etapa 2. Inicie o aplicativo Arduino

#### Etapa 3. Configure o Arduino IDE para o XIAO que você está usando

- Se você quiser usar o **Seeed Studio XIAO RP2350** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/getting-started-xiao-rp2350/)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO nRF52840** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#configuração-de-software)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO ESP32C3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started#configuração-de-software)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO ESP32C6** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/#preparação-de-software)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO ESP32S3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started#preparação-de-software)** para concluir a adição.

#### Etapa 4. Instalação de bibliotecas gráficas e bibliotecas de driver de tela

Para usar o round display, precisamos instalar duas bibliotecas com antecedência. Uma é a biblioteca de driver de dispositivo do round display, que é usada para acionar as funções de tela e toque do dispositivo. A outra é a biblioteca de exibição gráfica, que fornece algumas interfaces muito comuns para desenhar gráficos.

1. Baixe a biblioteca **Seeed_Arduino_RoundDisplay** do GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

2. Baixe a biblioteca **Seeed_GFX** do GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. Instale a biblioteca adicionando o arquivo ZIP na IDE Arduino. Vá em **Sketch > Include Library > Add .ZIP Library** e selecione o arquivo ZIP baixado.

:::note
Se você já tiver instalado a biblioteca TFT_eSPI anteriormente, talvez seja necessário removê-la temporariamente ou renomeá-la na pasta de bibliotecas do Arduino para evitar conflitos, pois Seeed_GFX é um fork de TFT_eSPI com recursos adicionais.
:::

### Visão geral das bibliotecas Arduino

Como podemos ver pelo tutorial acima, a Round Display utiliza principalmente as bibliotecas **LVGL**, **TFT_eSPI** e **Arduino GFX**. Por questão de espaço, vamos apresentar o uso das bibliotecas **LVGL** e **TFT_eSPI** separadamente com o exemplo de desenhar um mostrador.

- Você pode aprender sobre a interface e o uso da biblioteca **TFT_eSPI** clicando **[aqui](https://wiki.seeedstudio.com/pt-br/using_lvgl_and_tft_on_round_display#interfaces-comuns-para-biblioteca-tft)**.

- Você pode aprender sobre a interface e o uso da biblioteca **LVGL** clicando **[aqui](https://wiki.seeedstudio.com/pt-br/using_lvgl_and_tft_on_round_display#interfaces-comuns-para-biblioteca-lvgl)**.

- Você pode aprender sobre a interface e o uso da biblioteca **Arduino GFX** clicando **[aqui](https://github.com/moononournation/Arduino_GFX)**.

## Acenda sua Round Display

### Demo 1: Arduino Life - Como usar a biblioteca Seeed_GFX na Round Display

Abra o sketch de exemplo da biblioteca Seeed_GFX: **[File > Seeed_GFX > Examples > Round Display > Arduino_Life](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/Round%20Display/Arduino_Life/Arduino_Life.ino)**

Crie um novo arquivo chamado `driver.h` na mesma pasta do seu sketch Arduino clicando na seta ao lado da aba do exemplo e selecionando "New Tab".

Nomeie o novo arquivo como `driver.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

Acesse a [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/), e selecione "TRMNL 7.5" (OG) DIY Kit" como mostrado na imagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/108.png" style={{width:600, height:'auto'}}/></div>

Copie o código gerado e cole no arquivo `driver.h` que você criou. O código deve ser semelhante a isto:

```cpp
#define BOARD_SCREEN_COMBO 501 // Round Display for Seeed Studio XIAO （GC9A01)
```

Agora você pode enviar o exemplo para o seu TRMNL DIY Kit e ver o display ePaper em ação!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/107.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Observe que o código para todas as telas subsequentes precisa ser acompanhado por um arquivo driver.h, que é usado para selecionar o tipo de tela a ser usada.
:::

### Demo 2: TFT Clock

:::caution
Consulte o Demo1, crie um novo arquivo `driver.h` no mesmo diretório do arquivo `.ino` e mantenha o seguinte código nele: `#define BOARD_SCREEN_COMBO 501`
:::

:::tip
Precisamos usar a função RTC na Round Display, então você também precisa buscar e instalar a biblioteca **I2C BM8563 RTC**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

Quando o hardware e o software estiverem prontos, começamos a enviar nosso primeiro programa de exemplo. Este programa pode ser usado para verificar se o relógio RTC da Round Display está funcionando corretamente. Como este demo requer uma pequena quantidade de memória, é adequado para todos os modelos XIAO.

:::tip
Se você quiser modificar este demo para implementar telas mais complexas, lembre-se do tamanho da memória do XIAO que você está usando. O tamanho específico pode ser encontrado na página de introdução desse XIAO.
:::

Você pode encontrar este programa de exemplo na IDE Arduino em **File -> Examples -> Seeed Arduino Round display -> TFT_Clock**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r1.png" style={{width:600, height:'auto'}}/></div>

Basta selecionar o XIAO que você está usando e o número da porta onde o XIAO está conectado, compilar e enviar.

Certifique-se de que o interruptor da Round Display esteja na posição ON.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

Se o programa rodar sem problemas, você verá o seguinte efeito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r3.png" style={{width:600, height:'auto'}}/></div>

### Demo 3: Teste de Hardware

:::caution
Consulte o Demo1, crie um novo arquivo `driver.h` no mesmo diretório do arquivo `.ino` e mantenha o seguinte código nele: `#define BOARD_SCREEN_COMBO 501`
:::

Como o demo HardwareTest é um pouco complexo e ocupa uma quantidade maior de memória, alguns modelos XIAO podem falhar na execução devido à memória insuficiente. Criamos uma tabela de testes para sua referência, usando a biblioteca TFT e a biblioteca Arduino GFX.

|         | Biblioteca TFT | Arduino GFX |
|---------|-----|-----|
| XIAO SAMD21 | ❌  | ❌  |
| XIAO RP2040 | ❌  | ❌  |
| XIAO RA4M1  | ❌  | ❌  |
| XIAO nRF52840 non mbed version| ✅  | ❌  |
| XIAO nRF52840 mbed version| ❌  | ✅  |
| XIAO ESP32C3 | ✅  | ✅  |
| XIAO ESP32C6 | ✅  | ❌  |
| XIAO ESP32S3 | ✅  | ✅  |

Este programa de exemplo pode ser usado para verificar se o relógio RTC, o cartão SD e as funções de toque da Round Display estão funcionando corretamente.

:::tip
Precisamos usar a função RTC na Round Display, então você também precisa buscar e instalar a biblioteca **I2C BM8563 RTC**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

Você pode encontrar este programa de exemplo na IDE Arduino em **File -> Examples -> Seeed Arduino Round display -> HardwareTest**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/58.png" style={{width:600, height:'auto'}}/></div>

Basta selecionar o XIAO que você está usando e o número da porta onde o XIAO está conectado, compilar e enviar.

Certifique-se de que o interruptor da Round Display esteja na posição ON.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

Se o programa rodar sem problemas, você verá o seguinte efeito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/60.gif" style={{width:600, height:'auto'}}/></div>

:::note
Este programa de exemplo irá testar todos os itens funcionais da placa de expansão, incluindo a função RTC. Se você não tiver a biblioteca I2C BM8563 RTC instalada, poderá ocorrer um erro; você pode comentar a função `lv_hardware_test()`, então a detecção funcional do cartão SD também será desativada.
:::

## Atualização do Firmware de Calibração

:::tip
Se você perceber que o toque às vezes não responde, pode seguir os passos abaixo para atualizar o firmware de calibração da tela.
:::

1. Baixe os códigos neste [link](https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay/tree/main/examples/TP_firmware_update)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c1.png" style={{width:1000, height:'auto'}}/></div>

2. Coloque-os no mesmo diretório e execute este firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c3.png" style={{width:600, height:'auto'}}/></div>

3. Abra o monitor serial e você verá uma mensagem de sucesso como na imagem abaixo, o que significa que a atualização foi bem-sucedida e você pode enviar o seu programa para testá-lo!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c2.png" style={{width:600, height:'auto'}}/></div>

## Solução de problemas

### P1: Por que o display não mostra nada depois que eu envio o programa?

R: Verifique se o interruptor da Round Display está ligado. Se você estiver usando o XIAO ESP32C3, talvez também seja necessário pressionar Reset após enviar o programa para que funcione.

### P2: Se eu quiser conectar o Seeed Studio XIAO ESP32S3 Sense a esta tela de expansão, haverá conflito com dois slots de cartão TF?

R: Isso não cria conflito. Os diferentes slots de cartão SD são controlados via chip select; se você quiser usar o slot de cartão microSD no Sense, o pino de chip select deve ser **21**; se quiser usar o slot de cartão microSD na Round Display, o pino de chip select deve ser **D2**.

Temos [exemplos](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_camera_usage/#projeto-i-making-a-handheld-camera) de uso simultâneo de hardware e cartões microSD no tutorial da câmera S3 Sense.

### P3: Por que meu XIAO RP2040 apresenta um erro C++ muito estranho ao usar o código de HardwareTest com o Round Display?

R: Isso pode ser causado por você não ter selecionado a opção de compilação apropriada para o XIAO RP2040. Consulte o diagrama abaixo para configurar e reenviar o programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/100.png" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Folha de dados do CI de carga](https://files.seeedstudio.com/wiki/round_display_for_xiao/charge-IC-datasheet.pdf)
- **[PDF]** [Folha de dados do ETA3410](https://files.seeedstudio.com/wiki/round_display_for_xiao/ETA3410-datasheet.pdf)
- **[PDF]** [Folha de dados do RTC PCF8563](https://files.seeedstudio.com/wiki/round_display_for_xiao/RTC-PCF8563-datasheet.pdf)
- **[PDF]** [Folha de dados do Display de Cristal Líquido TFT a-Si de 1,28''](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[PDF]** [Seeed Studio Round Display for XIAO SCH](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH_230308.pdf)
- **[PDF]** [Seeed Studio Round Display for XIAO SCH v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH_230407.pdf)
- **[PDF]** [Folha de dados GJX0128A4-15HY](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[ZIP]** [Seeed Studio Round Display for XIAO SCH&PCB](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH&PCB_230308.zip)
- **[ZIP]** [Seeed Studio Round Display for XIAO SCH&PCB v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH&PCB_230407.zip)
- **[3DM]** [O modelo 3D do Round Display for XIAO](https://grabcad.com/library/seeed-studio-round-display-for-xiao-1)
- **[STL]** [O diagrama em modelo 3D da carcaça para o Round Display](https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl)
- **[STL]** [Seeed Studio XIAO ESP32 S3 Sense Case With Round Screen](https://files.seeedstudio.com/wiki/round_display_for_xiao/Seeed_Studio-XIAO-ESP32-S3-Sense-Case-With-Round-Screen.stl)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
