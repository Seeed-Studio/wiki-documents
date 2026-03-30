---
description: Crie uma página de documentação com conteúdo rico.
title: IO Expander para XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /io_expander_for_xiao
sku: 103030415
last_update:
  date: 09/18/2023
  author: Stephen Lo
createdAt: '2023-09-19'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/io_expander_for_xiao/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/1.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/GPIO-Expander-for-XIAO-p-5795.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div><br />

O IO Expander para XIAO é uma placa de expansão de última geração projetada para aumentar as capacidades da série Seeed Studio XIAO. Alimentada pelo chip MCP23017, esta placa oferece 16 pinos de IO adicionais, permitindo que os usuários expandam seus projetos sem restrições. Seja você um hobbysta que deseja experimentar com mais componentes ou um profissional em busca de uma solução confiável de expansão de IO, esta placa foi feita sob medida para atender às suas necessidades. Sua compatibilidade com a série XIAO garante uma integração perfeita, tornando seu processo de desenvolvimento mais simples e eficiente.

## Recursos

- Integração perfeita com XIAO: Projetada para funcionar perfeitamente com a série Seeed Studio XIAO.
- 16 pinos de IO adicionais: Alimentada pelo MCP23017, ela fornece 16 pinos de IO extras para seus projetos.
- Interface I2C com endereço configurável: O endereço I2C padrão é 0x21, mas pode ser configurado para 0x20.
- Design robusto: Construída com materiais de alta qualidade para garantir durabilidade e confiabilidade.

## Especificações

- Chip: MCP23017
- Número de pinos de IO: 16
- Protocolo de comunicação: I2C
- Endereço I2C padrão: 0x21 (configurável para 0x20)
- Tensão de operação: 3,3 V
- Dimensões: 21 mm x 17 mm

## Aplicações

O IO Expander para XIAO é versátil e pode ser usado em uma infinidade de aplicações, incluindo, mas não se limitando a:

- Sistemas de automação residencial: Expanda o número de dispositivos que você pode controlar na sua configuração de casa inteligente.
- Robótica: Adicione mais sensores, motores ou outros componentes ao seu robô sem ficar sem pinos de IO.
- Consoles de jogos: Projete controles personalizados ou outros periféricos com uma grande quantidade de botões e chaves.
- Sistemas de controle industrial: Gerencie mais dispositivos e sensores em sua instalação industrial.
- Projetos educacionais: Ensine estudantes sobre microcontroladores e eletrônica sem ser limitado pelo número de pinos de IO.

## Visão geral do hardware

Esta seção fornece uma visão geral detalhada dos vários componentes e interfaces na placa XIAO IO Expander.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/2.png" alt="pir" width={800} height="auto" /></p>

### 0. Pads padrão do XIAO

Estes são os pads padrão para conectar o microcontrolador XIAO.

### 1. Pads J1

Os pads J1 permitem que os usuários decidam se desejam conectar os pinos RST, INTB e INTA do MCP23017 aos pinos D6, D1 e D0 do XIAO por meio de soldagem. De cima para baixo, eles são RST, INTB, INTA.

Por padrão, quando você usa a placa de expansão, os pads de saída adicionais na área 8 estão habilitados. Se você não quiser habilitá-los, precisa cortar com uma faca os dois pads adjacentes na área J1.

### 2. Chip MCP23017

Este é o principal chip expansor de I/O, fornecendo 16 IOs adicionais.

### 3. Pads J2

Este pad é para selecionar o endereço I2C. O endereço padrão é 0x21. Se você soldar este pad, o endereço pode ser alterado para 0x20.

### 4. Pinos de saída MCP23017

Estes são os pinos de saída do chip MCP23017. A definição de cada pino pode ser vista na parte de trás da placa. Eles vão de PA0 a PB7, fornecendo um total de 16 IOs.

### 5. Pads Grove

Se você desejar conectar um módulo Grove, pode soldar o soquete Grove fornecido. Esta interface Grove está conectada ao barramento I2C. Se você optar por usar os pinos IIC aqui, então não poderá usar os pinos de IO estendidos na área 4.

### 6. Pino VCC

Este é um pino de saída que pode ser usado para alimentar outros componentes.

### 7. Pino GND

Este também é um pino de saída que pode ser usado como aterramento para outros componentes.

### 8. Pads de saída adicionais

Estes são alguns pads de saída adicionais, incluindo GND, INTB, INTA, RST. Se você desejar soldar estes pinos para uso em outro lugar, pode fazê-lo.

## Primeiros passos

Bem-vindo ao guia de início rápido do IO Expander para XIAO. Este guia tem como objetivo ajudá-lo a configurar e começar a usar sua nova placa IO Expander em conjunto com o controlador principal XIAO RP2040.

### Preparação de hardware

Existem três principais maneiras de usar esta placa de expansão,

**Modo 1: SMD**

Se o seu XIAO estiver com pinos não soldados, então você pode escolher o método SMD direto para soldar o XIAO e a placa de expansão na placa de circuito impresso (PCB) para usar a função de expansão de GPIO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/4.jpg" alt="pir" width={800} height="auto" /></p>

:::note
As PCBs mostradas nas imagens são apenas para demonstração e não estavam disponíveis para venda nas prateleiras na data deste artigo.
:::

**Modo 2: XIAO conecta-se diretamente à placa de expansão através da fileira de pinos**

Nesta abordagem, você tem a opção de soldar fios de conexão diretamente na placa de expansão de GPIO para conectar seu dispositivo alvo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/5.jpg" alt="pir" width={800} height="auto" /></p>

**Modo 3: XIAO conecta-se com a placa de expansão através da longa fileira de pinos, e a placa de expansão é estendida soldando a fileira de pinos**

Com este método de conexão, você é livre para instalar cabos DuPont na placa de expansão de GPIO. Fiação conveniente para a sua aplicação.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/6.jpg" alt="pir" width={800} height="auto" /></p>

Quando a soldagem estiver concluída, você poderá prosseguir para conectar a placa de expansão ao controlador principal XIAO RP2040.

Para programar o XIAO RP2040, você precisará de um cabo de dados USB TYPE-C. Conecte uma extremidade ao XIAO RP2040 e a outra ao seu computador. Para um guia detalhado sobre como programar o XIAO RP2040, consulte este [Wiki](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040/).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/3.jpg" alt="pir" width={600} height="auto" /></p>

### Preparação de software

Antes de começar a programar a placa, você precisará de uma biblioteca específica para o XIAO. Baixe a biblioteca MCP23017 neste [link do GitHub](https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library). Depois de baixá-la, instale a biblioteca em seu ambiente de programação.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## Demo: saída de IO em nível alto e baixo

No Arduino IDE, abra um novo sketch e copie o código de exemplo a seguir:

```cpp
#include <Adafruit_MCP23X17.h>

Adafruit_MCP23X17 mcp;

void setup() {
    Serial.begin(9600);
    Serial.println("MCP23xxx Blink Test!");
    if (!mcp.begin_I2C()) {
        Serial.println("Error.");
        while (1);
    }

    Serial.println("Looping...");

    for(int i=0; i<16; i++) {
        mcp.pinMode(i, OUTPUT);
    }
}

void loop() {
    mcp.digitalWrite(15, LOW); //PB7
    mcp.digitalWrite(14, HIGH); //PB6
    mcp.digitalWrite(13, HIGH); //PB5
    mcp.digitalWrite(12, HIGH); //PB4
    mcp.digitalWrite(11, HIGH); //PB3
    mcp.digitalWrite(10, HIGH); //PB2
    mcp.digitalWrite(9, HIGH); //PB1
    mcp.digitalWrite(8, HIGH); //PB0
    mcp.digitalWrite(7, HIGH); //PA7
    mcp.digitalWrite(6, HIGH); //PA6
    mcp.digitalWrite(5, HIGH); //PA5
    mcp.digitalWrite(4, HIGH); //PA4
    mcp.digitalWrite(3, HIGH); //PA3
    mcp.digitalWrite(2, HIGH); //PA2
    mcp.digitalWrite(1, HIGH); //PA1
    mcp.digitalWrite(0, HIGH); //PA0
    delay(1000);
}
```

Carregue o código acima para o seu XIAO. Após o código ser carregado com sucesso, você verá que todos os pinos estão em nível alto de 3,3 V, exceto o pino PB7.

:::caution
Esta placa de expansão só pode usar entradas e saídas digitais, não funções de entrada e saída PWM ou analógicas.
:::

### Endereçamento de pinos

Ao usar operações de pino único como _pinMode(pinId, dir)_ ou _digitalRead(pinId)_ ou _digitalWrite(pinId, val)_ então os pinos são endereçados usando os IDs abaixo. Por exemplo, para definir o modo de _GPB0_ use _pinMode(8, ...)_. **NOTA** O MCP23008 e o MCP23S08 possuem apenas pinos _GPAx_.

| Pino MCP23x17 # | Nome do pino | ID do pino |
| :------------: | :------: | :----: |
|       21       |   GPA0   |   0    |
|       22       |   GPA1   |   1    |
|       23       |   GPA2   |   2    |
|       24       |   GPA3   |   3    |
|       25       |   GPA4   |   4    |
|       26       |   GPA5   |   5    |
|       27       |   GPA6   |   6    |
|       28       |   GPA7   |   7    |
|       1        |   GPB0   |   8    |
|       2        |   GPB1   |   9    |
|       3        |   GPB2   |   10   |
|       4        |   GPB3   |   11   |
|       5        |   GPB4   |   12   |
|       6        |   GPB5   |   13   |
|       7        |   GPB6   |   14   |
|       8        |   GPB7   |   15   |

## Perguntas Frequentes (FAQ)

### 1. Por que meu IO Expander para XIAO não está respondendo?

**Resposta**: Certifique-se de que o módulo XIAO está corretamente conectado à placa de expansão. Além disso, verifique se as bibliotecas necessárias estão instaladas e se a placa e a porta corretas estão selecionadas na IDE do Arduino.

### 2. Posso usar o IO Expander para XIAO com outros microcontroladores?

**Resposta**: Sim, o IO Expander foi projetado principalmente para o módulo XIAO, mas pode ser usado com outros microcontroladores que suportem comunicação I2C. Talvez seja necessário ajustar o código e as conexões de acordo.

### 3. Como altero o endereço I2C do chip MCP23017 no IO Expander para XIAO?

**Resposta**: O endereço I2C padrão é definido como 0x21. Se você quiser alterá-lo para 0x20, há um jumper rotulado como "J2" na placa. Você precisará soldar o jumper J2 para mudar o endereço.

### 4. Estou recebendo ruído ou comportamento irregular nos meus pinos de IO. O que pode ser a causa?

**Resposta**: Certifique-se de que as conexões estejam firmes e que não haja interferência. O uso de resistores de pull-up ou pull-down pode ajudar a estabilizar os pinos de entrada. Além disso, garanta que a fonte de alimentação seja estável e possa fornecer a corrente necessária para todos os dispositivos conectados.

## Recursos

- **[ZIP]** [Arquivo Eagle](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/XIAO_IO.zip)
- **[PDF]** [Ficha técnica - MCP23017](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/MCP23017_Data_Sheet_DS20001952-2998473.pdf)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
