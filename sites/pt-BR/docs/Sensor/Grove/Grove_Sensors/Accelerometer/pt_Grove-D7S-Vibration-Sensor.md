---
description: Introdução ao Grove D7S Vibration Sensor
title: Grove - D7S Vibration Sensor
keywords:
  - Grove
  - vibração
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove-d7s-vibration-sensor
sku: 101021096
last_update:
  date: 6/6/2023
  author: Stephen Lo
createdAt: '2023-06-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/grove-d7s-vibration-sensor/
---

# Grove - D7S Vibration Sensor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-D7S-Vibration-Sensor-p-5701.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o seu agora 🖱️</font></span></strong>
    </a>
</div>

<br />

O Grove - D7S Vibration Sensor é um poderoso módulo de detecção de terremotos que fornece monitoramento em tempo real de atividades sísmicas. Ele é baseado no avançado módulo D7S desenvolvido pela Omron Corporation, um fabricante líder em tecnologia de sensores.

Com um acelerômetro triaxial de alta precisão e algoritmos sofisticados de detecção de terremotos, o Grove - D7S Vibration Sensor oferece detecção precisa e confiável de eventos sísmicos. Ele pode detectar vários tipos de vibrações e classificá-las com base em sua severidade, fornecendo informações valiosas para monitoramento de terremotos e aplicações de segurança.

Projetado com simplicidade e versatilidade em mente, o Grove - D7S Vibration Sensor se integra perfeitamente ao sistema Grove, uma plataforma modular de prototipagem. Sua interface padronizada permite fácil conexão a placas Arduino e outras plataformas de desenvolvimento compatíveis.

## Introdução

### Recursos

- Acelerômetro de alta precisão: Equipado com um acelerômetro triaxial, o sensor fornece medições precisas de vibrações e atividade sísmica.
- Detecção de terremotos em tempo real: O Grove - D7S Vibration Sensor usa algoritmos avançados para detectar e classificar eventos sísmicos em tempo real. Ele pode diferenciar entre diferentes magnitudes de terremotos e fornecer sinais de alerta correspondentes.
- Integração fácil com o sistema Grove: O sensor possui uma interface compatível com Grove, permitindo conexão simples a placas Arduino e outras plataformas compatíveis. Não é necessário cabeamento complexo ou soldagem, tornando-o acessível a usuários de todos os níveis de habilidade.
- Design compacto e robusto: O Grove - D7S Vibration Sensor possui um formato compacto, tornando-o adequado para várias aplicações em que o espaço é limitado. Sua construção robusta garante durabilidade e desempenho confiável, mesmo em ambientes agressivos.
- Baixo consumo de energia: O sensor foi projetado para operar com baixo consumo de energia, sendo adequado para aplicações de monitoramento de longo prazo sem esgotar rapidamente a fonte de alimentação.

### Especificação

- Chip: D7S
- Faixa de medição: ±6g
- Interface de comunicação: I2C
- Conector Grove: HY2.0 de 4 pinos
- Tensão de operação: 3,3/5 V

### Na caixa

- 1 x placa Grove - D7S Vibration Sensor
- 1 x cabo Grove (20 cm)

### Aplicações

O Grove - D7S Vibration Sensor pode ser usado em uma ampla variedade de aplicações, incluindo, mas não se limitando a:

- Sistemas de monitoramento de terremotos: A implantação do sensor em edifícios, pontes e infraestrutura crítica permite o monitoramento em tempo real das atividades sísmicas. Isso possibilita sistemas de detecção e alerta precoce, contribuindo para maior segurança e melhor resposta a desastres.
- Pesquisa e análise sísmica: Pesquisadores podem utilizar o Grove - D7S Vibration Sensor para coletar dados para estudos e análises sísmicas. As medições de alta precisão do sensor fornecem informações valiosas sobre os padrões e características de terremotos.
- Avaliação de segurança estrutural: O sensor pode ser integrado em sistemas de monitoramento de saúde estrutural para avaliar a integridade e a estabilidade de edifícios, pontes e outras estruturas. Ele ajuda a identificar possíveis fragilidades estruturais causadas por eventos sísmicos.
- Redes de monitoramento sísmico baseadas em IoT: Ao implantar vários Grove - D7S Vibration Sensors em uma rede, é possível criar um sistema distribuído para monitoramento sísmico abrangente em uma área maior. Essa configuração permite coleta e análise eficientes de dados para melhorar a preparação para terremotos.

Estes são apenas alguns exemplos das diversas aplicações possibilitadas pelo Grove - D7S Vibration Sensor. Sua versatilidade e alto desempenho o tornam uma ferramenta valiosa em projetos relacionados a terremotos.

## Visão geral do hardware

### Mapa de pinos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/pinmap.png" alt="pir" width={500} height="auto" /></p>

## Primeiros passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove - D7S Vibration Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/main.jpg" alt="pir" width={250} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-D7S-Vibration-Sensor-p-5701.html" target="_blank">Adquira agora</a>|

:::note
**1.** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2.** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - D7S Vibration Sensor à porta **I2C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC através de um cabo USB.


| Seeeduino     | Grove - D7S Vibration Sensor |
|---------------|-------------------------|
| 3.3/5V        | Vermelho                |
| GND           | Preto                   |
| SDA           | Branco                  |
| SCL           | Amarelo                 |

#### Software

- **Passo 1.** Baixe o [Grove - D7S Vibration Sensor](https://github.com/limengdu/d7s-grove-arduino) no Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Após baixar e instalar a biblioteca corretamente, você pode encontrar um programa de exemplo chamado sample.ino na pasta de exemplos. Este programa foi projetado para o módulo D7S.

```cpp
#include <D7S.h>

//old earthquake data
float oldSI = 0;
float oldPGA = 0;

//flag variables to handle collapse/shutoff only one time during an earthquake
bool shutoffHandled = false;
bool collapseHandled = false;

//function to handle collapse event
void handleCollapse()
{
    //put here the code to handle the collapse event
    Serial.println("-------------------- COLLAPSE! --------------------");
}

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    while (!Serial)
    {
        ; // wait for serial port to connect. Needed for native USB port only
    }

    Serial.print("Starting D7S communications (it may take some time)...");
    //start D7S connection
    D7S.begin();
    //wait until the D7S is ready
    while (!D7S.isReady())
    {
        Serial.print(".");
        delay(500);
    }
    Serial.println("STARTED");

    //setting the D7S to switch the axis at inizialization time
    Serial.println("Setting D7S sensor to switch axis at inizialization time.");
    D7S.setAxis(SWITCH_AT_INSTALLATION);

    Serial.println("Initializing the D7S sensor in 2 seconds. Please keep it steady during the initializing process.");
    delay(2000);
    Serial.print("Initializing...");
    //start the initial installation procedure
    D7S.initialize();
    //wait until the D7S is ready (the initializing process is ended)
    while (!D7S.isReady())
    {
        Serial.print(".");
        delay(500);
    }
    Serial.println("INITIALIZED!");

    //check if there there was a collapse (if this is the first time the D7S is put in place the installation data may be wrong)
    if (D7S.isInCollapse())
    {
        handleCollapse();
    }

    //reset the events shutoff/collapse memorized into the D7S
    D7S.resetEvents();

    Serial.println("\nListening for earthquakes!");
}

void loop()
{

    //checking if there is an earthquake occuring right now
    if (D7S.isEarthquakeOccuring())
    {

        //check if the shutoff event has been handled and if the shutoff condition is met
        //the call of D7S.isInShutoff() is executed after to prevent useless I2C call
        if (!collapseHandled && D7S.isInCollapse())
        {
            handleCollapse();
            collapseHandled = true;
        }

        //print information about the current earthquake
        float currentSI = D7S.getInstantaneusSI();
        float currentPGA = D7S.getInstantaneusPGA();

        if (currentSI > oldSI || currentPGA > oldPGA)
        {
            //getting instantaneus SI
            Serial.print("\tInstantaneus SI: ");
            Serial.print(currentSI);
            Serial.println(" [m/s]");

            //getting instantaneus PGA
            Serial.print("\tInstantaneus PGA (Peak Ground Acceleration): ");
            Serial.print(currentPGA);
            Serial.println(" [m/s^2]\n");

            //save the current data
            oldSI = currentSI;
            oldPGA = currentPGA;
        }
    }
    else
    {
        //reset the old earthquake data
        oldPGA = 0;
        oldSI = 0;
        //reset the flag of the handled events
        shutoffHandled = false;
        collapseHandled = false;
        //reset D7S events
        D7S.resetEvents();
    }
}
```

- **Passo 4.** Faça o upload da demonstração. Se você não souber como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Você pode gerar algumas vibrações, por exemplo, batendo na mesa, e obterá os seguintes resultados.

:::note
A inicialização do sensor leva aproximadamente de 3 a 5 minutos.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/output.png" style={{width:1000, height:'auto'}}/></div>

## Solução de Problemas

### P1: O Grove - D7S Vibration Sensor pode detectar todos os tipos de terremotos?

O Grove - D7S Vibration Sensor foi projetado para detectar uma ampla variedade de atividades sísmicas, incluindo terremotos tanto leves quanto fortes. No entanto, o alcance de detecção e a sensibilidade podem variar dependendo da magnitude e da proximidade do terremoto.

### P2: Posso usar o Grove - D7S Vibration Sensor com outras placas de desenvolvimento além do Arduino?

Sim, o Grove - D7S Vibration Sensor é compatível com outras placas de desenvolvimento que suportam a interface I2C. Certifique-se de que você tenha as bibliotecas e recursos necessários disponíveis para a plataforma escolhida.

### P3: Qual é o requisito de alimentação para o Grove - D7S Vibration Sensor?

O sensor pode operar a 3,3 V.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/D7S-Vibration-Sensor.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Grove - D7S Vibration Sensor SCH&PCB](https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/D7S-Vibration-Sensor.zip)
- **[PDF]** [D7S Datasheet](https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/en-d7s-957666.pdf)

## Suporte Técnico & Discussão sobre o Produto

Agradecemos por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


