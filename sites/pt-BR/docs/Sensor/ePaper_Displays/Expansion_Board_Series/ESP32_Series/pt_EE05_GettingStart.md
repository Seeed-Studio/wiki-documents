---
description: Introdução à XIAO ePaper Display Board(ESP32-S3) - EE05
sku: 100057220
title: Introdução à EE05
image: https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.webp
slug: /epaper_ee05
sidebar_position: 4
last_update:
  date: 09/22/2026
  author: Nemo
createdAt: '2026-04-07'
url: https://wiki.seeedstudio.com/pt-br/epaper_ee05/
updatedAt: '2026-09-22'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Introdução à XIAO ePaper Display Board - EE05

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE05-p-6755.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introdução

Alimentada pelo **XIAO ESP32-S3 Plus**, a placa de display EE05 é compatível com uma ampla variedade de displays ePaper de 24 pinos e permite o design e a implantação de UI sem código com o SenseCraft Seeedash. Com IO de extensão e um conector de bateria com chave liga/desliga, ela é ideal para aplicações de display inteligente de baixo consumo de energia.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/4.jpg" style={{width:800, height:'auto'}}/></div>

### Recursos

- **Alimentada por XIAO ESP32-S3 Plus:** Funciona imediatamente quando conectada a um display ePaper compatível.
- **Suporte versátil a displays:** Compatível com uma ampla gama de displays ePaper de 24 pinos para diferentes requisitos de projeto.
- **Porta de IO de extensão:** Permite a conexão de sensores adicionais, como sensores de temperatura e umidade, para funcionalidade aprimorada.
- **Conector de bateria com chave:** Oferece conexão simples de bateria e integra uma chave, permitindo gerenciamento eficiente de energia e economia de consumo.
- **Design e implantação de UI sem código com SenseCraft Seeedash:** Projete e implemente painéis personalizados com facilidade usando o SenseCraft Seeedash, nossa nova plataforma sem código com IA. Crie sua interface arrastando e soltando elementos simples, escolha entre nossos modelos ricos ou deixe a IA ajudar você. Conecte dados em tempo real a partir de APIs web e, em seguida, implemente o painel final no display ePaper com apenas alguns cliques. Do design à configuração de dados e à implantação, tudo acontece de forma contínua em uma única plataforma.

### Especificações

| Parâmetro | Descrição |
|---|---|
| **Processador** | XIAO ESP32-S3 Plus |
| **Conector ePaper** | SPI FPC 24 pinos 0,5 mm |
| **Conector de bateria** | JST 2,0 mm |
| **Chave** | Chave deslizante de alimentação por hardware |
| **Fonte de alimentação** | Bateria Li 3,7 V / USB Type-C |
| **Botão** | 1x botão de reset (montado na lateral) <br/> 3x botões de usuário (montados na lateral) |

### Aplicações

- **Dashboard de casa inteligente**: Exiba informações em tempo real, como atualizações de clima, eventos de calendário e notificações de vários dispositivos de casa inteligente.
- **Monitoramento de energia**: Mostre dados de consumo de energia de medidores inteligentes, ajudando moradores a acompanhar e gerenciar o uso de energia com mais eficiência.
- **Alertas de segurança**: Exiba alertas e notificações sobre eventos de segurança, como detecção de movimento ou ativação de sensores de porta/janela.
- **Porta-retratos digital**: Crie um porta-retratos digital com Wi‑Fi que pode exibir imagens da sua rede de casa inteligente.

## Visão geral de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Pin.png" style={{width:900, height:'auto'}}/></div>

### Displays ePaper compatíveis

A EE05 é compatível com diversos displays ePaper SPI de 24 pinos, incluindo, mas não se limitando a:

- [1.54-inch E-paper - Dotmatix 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch E-Paper -Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch E-Paper - Quadruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9 inch E-paper - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [4.2-inch E-Paper - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch E-Paper - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch E-paper - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch Monochrome ePaper Display with 800x480 Pixels](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

### Botões

A EE05 possui 3 botões de usuário e 1 botão de reset, todos montados na lateral para fácil acesso:

- **Key1 / Key2 / Key3**: Três botões de usuário programáveis para interações e navegação personalizadas. Eles são mapeados para **D1 (GPIO2)**, **D2 (GPIO3)** e **D9 (GPIO8)** do XIAO ESP32-S3 Plus, respectivamente, cada um com um pull-up externo de 10k (ativo em nível BAIXO quando pressionado).
- **RESET**: Botão de reset por hardware conectado ao pino EN para reiniciar o dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Buttons.jpg" style={{width:700, height:'auto'}}/></div>

### Porta de IO de extensão

A EE05 inclui uma porta de IO de extensão que permite conectar sensores e módulos adicionais, expandindo as capacidades da placa além da funcionalidade de display. Você pode conectar sensores como sensores de temperatura e umidade, sensores de movimento ou outros periféricos I2C/SPI para construir projetos mais avançados.

### Conector de bateria

A placa está equipada com um conector de bateria JST 2,0 mm e uma chave deslizante de alimentação por hardware, facilitando a alimentação do dispositivo com uma bateria de lítio de 3,7 V para aplicações portáteis e de baixo consumo.

:::note
Os seguintes fenômenos são comportamentos normais inerentes ao próprio firmware SenseCraft Seeedash:

- Design de baixo consumo de energia otimizado para aplicações com display ePaper
- A vida útil da bateria depende da frequência de atualização (tipicamente 3 meses com carga completa usando as configurações padrão)
- Um ícone de indicador de bateria fraca aparece na tela quando o nível da bateria cai abaixo de 20%
:::

## Introdução ao SenseCraft Seeedash

:::note
Este guia usa o **ePaper monocromático de 7,5 polegadas (800 x 480)** como exemplo. Todas as capturas de tela nesta seção mostram esse modelo de tela. Se você estiver usando um modelo de tela diferente, basta selecionar o firmware da sua tela na Etapa 2 — todas as outras etapas são idênticas.
:::

:::caution
O kit DIY XIAO EE05 é enviado sem firmware específico de tela pré-instalado. Quando você conectar uma tela pela primeira vez e ligar a placa, **a tela provavelmente permanecerá preta — isso é normal e não é um defeito**. Você deve primeiro gravar o firmware correspondente ao modelo da sua tela usando o SenseCraft Seeedash Firmware Flasher. Após a gravação, a tela de boas‑vindas e a interface de configuração aparecerão.
:::

### Pré-requisitos

- XIAO ePaper Display Board - EE05
- Um display ePaper compatível
- Cabo USB Type-C
- Um computador com navegador web (Chrome ou Edge recomendados)

### Instalação do equipamento

**Etapa 1. Conectar o display e a alimentação**

1. Conecte seu display ePaper ao conector FPC de 24 pinos na placa EE05. Certifique-se de que o conector esteja travado com segurança.
2. Conecte a placa EE05 ao seu computador usando um cabo USB Type-C.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/Connect.gif" style={{width:800, height:'auto'}}/></div>

:::tip
Se você estiver alimentando a placa por bateria, certifique-se de que a chave deslizante de hardware esteja na posição **ON**.
:::

**Etapa 2. Gravar o firmware da tela**

Antes de poder usar o SenseCraft Seeedash, você precisa gravar o firmware para o modelo específico da sua tela.

1. Abra o site do [SenseCraft Seeedash](https://sensecraft.seeed.cc/hmi) no seu navegador.
2. Clique em **Tools** na barra lateral esquerda e selecione **Firmware Flasher**.
3. No menu suspenso **Device**, selecione **XIAO EE05 DIY Kit** e, em seguida, escolha o modelo da sua tela na lista (por exemplo, "7.5 inch Monochrome ePaper Display with 800*480").
4. Clique no botão **Flash**, selecione a porta serial da sua placa EE05 e inicie o processo de gravação do firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_6.png" style={{width:800,height:'auto'}}/></div>

:::tip
Se a porta serial não aparecer, tente pressionar o botão **RESET** na placa ou usar um cabo USB diferente (certifique-se de que ele suporte transferência de dados, não apenas carregamento).
:::

**Etapa 3. Tela de boas-vindas**

Após a conclusão da gravação do firmware, a placa será reiniciada automaticamente. Você deverá ver a tela de boas‑vindas do SenseCraft Seeedash, seguida da interface de configuração de Wi‑Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_1.png" style={{width:300,height:'auto'}}/></div>

### Configuração de rede

**Etapa 4. Conectar ao Wi‑Fi**

Use seu telefone celular para escanear o código QR exibido na tela. Siga as instruções no telefone para inserir o SSID e a senha do seu Wi‑Fi local e conectar a EE05 à internet.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/Step_4.png" style={{width:600,height:'auto'}}/></div>

**Etapa 5. Vincular dispositivo**

Quando a configuração de rede for concluída com sucesso, a tela será atualizada novamente e exibirá um **Pair Code** exclusivo. Você precisará desse código para a próxima etapa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_2.png" style={{width:300,height:'auto'}}/></div>

### Vinculação à plataforma e atualização

**Etapa 6. Vincular dispositivo no SenseCraft Seeedash**

Acesse a [plataforma SenseCraft Seeedash](https://sensecraft.seeed.cc/hmi/device). Faça login na sua conta. Vá para a seção de gerenciamento de dispositivos e selecione **New Device**. Insira o Pair Code exibido na sua tela E‑ink.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.png" style={{width:500, height:'auto'}}/></div>

**Etapa 7. Criar e enviar nova interface**

Na plataforma SenseCraft Seeedash, selecione o modelo adequado para a tela de 7,5 polegadas para criar uma nova interface ou enviar uma imagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_4.png" style={{width:500, height:'auto'}}/></div>

**Etapa 8. Aplicar suas imagens**

Quando terminar, clique no botão "Apply" e selecione o seu dispositivo EE05.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_5.png" style={{width:800, height:'auto'}}/></div>

**Etapa 9. Exibir na tela**

Por fim, o EE05 receberá os dados e atualizará a tela de 7,5 polegadas com o seu novo conteúdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_3.png" style={{width:300, height:'auto'}}/></div>

## Introdução ao Arduino

### Instalar a biblioteca Seeed GFX2

:::tip
Esta biblioteca tem a mesma função que a biblioteca TFT e **não** é compatível com ela. Se você instalou a biblioteca TFT ou outras bibliotecas de display semelhantes, desinstale-as primeiro.
:::

Baixe e instale a biblioteca Seeed GFX2 a partir do GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_GFX2" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para baixar</button></p>
</a>
</div>

Após baixar a biblioteca, vá em **Sketch** -> **Include Library** -> **Add .ZIP Library** e selecione a biblioteca baixada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:500, height:'auto'}}/></div>


### Configurar e gravar o programa

Conforme mostrado na imagem, navegue até o exemplo por meio deste menu:
File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → ESP32 Series → XIAO ePaper Display Board - EE05 → 7.5-inch ePaper - Monochrome 800x480 → HelloWorld

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Arduino_2.png" style={{width:800, height:'auto'}}/></div>

:::note
Este guia usa o **7.5-inch Monochrome ePaper (800 x 480)** como exemplo. Se você tiver uma tela diferente, em vez disso abra a pasta de exemplo que corresponde ao modelo do seu próprio painel em `EE05`.
:::

Depois disso, vá em **Tools** -> **Board** -> **XIAO ESP32S3 Plus** e **Tools** -> **Port** -> **Selecione a porta à qual sua placa está conectada**. 

Observe que o PSRAM deve estar habilitado.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/17.png" style={{width:400, height:'auto'}}/></div>

Em seguida, clique em **Upload** para enviar o código.
Agora você verá o resultado na sua tela de epaper! A seguir está o resultado do exemplo HelloWorld.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Arduino_1.png" style={{width:500, height:'auto'}}/></div>

## Visão geral do software

### Exemplo de teste dos botões

O EE05 possui três botões de usuário (serigrafia: Key1 / Key2 / Key3) que você pode usar em seus projetos. De acordo com o esquemático, eles são mapeados para D1 (GPIO2), D2 (GPIO3) e D9 (GPIO8), com resistores de pull-up externos de 10k para 3,3 V — pressionar um botão puxa o pino para LOW. Aqui está um exemplo simples de teste de botões:

```cpp
#define KEY1_PIN  2  // Key1 -> D1 (GPIO2)
#define KEY2_PIN  3  // Key2 -> D2 (GPIO3)
#define KEY3_PIN  8  // Key3 -> D9 (GPIO8)

void setup() {
  Serial.begin(115200);
  pinMode(KEY1_PIN, INPUT_PULLUP);
  pinMode(KEY2_PIN, INPUT_PULLUP);
  pinMode(KEY3_PIN, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(KEY1_PIN) == LOW) {
    Serial.println("Key1 (GPIO2) pressed");
    delay(200);
  }
  if (digitalRead(KEY2_PIN) == LOW) {
    Serial.println("Key2 (GPIO3) pressed");
    delay(200);
  }
  if (digitalRead(KEY3_PIN) == LOW) {
    Serial.println("Key3 (GPIO8) pressed");
    delay(200);
  }
}
```

## Recursos

- **[PDF]** [Esquemático da XIAO ePaper Display Board Ex05](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE05 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_EE05_V1.11_SCH&PCB_260420.zip)
- **[GitHub]** [Biblioteca Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2)
- **[Website]** [SenseCraft Seeedash](https://sensecraft.seeed.cc/hmi)

## Suporte técnico e discussão sobre o produto

**P1: A tela não exibe nada após o envio do código.**

- **Verifique o cabo FPC**: Certifique-se de que o cabo FPC do ePaper esteja inserido na orientação correta e bem travado no conector.
- **Verifique se o PSRAM está habilitado**: Certifique-se de que você selecionou "OPI PSRAM" em Tools → PSRAM na Arduino IDE.
- **Verifique a seleção do modelo de tela**: Confirme se você selecionou o exemplo correto para o modelo específico da sua tela.

**P2: As cores estão invertidas ou o display mostra padrões anormais.**

- **Selecione o modelo exato**: Diferentes tamanhos de tela ou revisões de CI exigem configurações específicas. Certifique-se de estar usando o exemplo correto para o modelo da sua tela.
- **Verifique a fonte de alimentação**: Para telas maiores (como a de 7,5 polegadas), certifique-se de que sua fonte de alimentação possa fornecer corrente suficiente durante a atualização da tela.

**P3: A placa não liga quando conectada a uma bateria.**

- **Chave de hardware**: Verifique se a chave deslizante de hardware na placa está alternada para a posição **ON**.
- **Conexão da bateria**: Verifique a polaridade do conector JST 2,0 mm para garantir que corresponda ao projeto da placa.
- **Carga da bateria**: Certifique-se de que a bateria tenha carga suficiente. Tente carregar a bateria via USB-C.

**P4: O gravador de firmware SenseCraft Seeedash não detecta minha placa.**

- **Pressione RESET**: Tente pressionar o botão RESET na placa enquanto o gravador estiver procurando pelo dispositivo.
- **Verifique o cabo USB**: Certifique-se de estar usando um cabo USB que suporte transferência de dados (não apenas carregamento).

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
