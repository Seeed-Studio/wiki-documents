---
description: Grove - Recorder v2.0
title: Grove - Recorder v2.0
keywords:
  - Grove Grove_Sensors Sound
image: https://wiki.seeedstudio.com/pt-br/Grove-Loudness_Sensor/
slug: /Grove-Recorder_v2.0
sku: 107020007
last_update:
  date: 01/20/2023
  author: jianjing huang
createdAt: '2023-01-20'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Recorder_v2.0/
---


![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_V2.0.jpg)
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Recorder-v2-0-p-4552.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

Grove - Recorder v2.0 é um gravador atualizado com recursos enriquecidos. Ele pode gravar 8–20 segundos<sup>\[1\]</sup> de áudio com voz natural e de alta qualidade. Além disso, ele também possui controle de volume de som e funções de reprodução. Com um MCU como Seeeduino ou placa Arduino, você pode criar protótipos de várias aplicações rapidamente com interfaces fáceis de usar.

<sup>[1]</sup>O tempo de gravação pode ser personalizado (se você precisar) substituindo diferentes resistores; a solução para fazer isso será descrita nas seções posteriores.

Rastreador de Versão
---------------

| Revisão do produto | Data de lançamento | Status de suporte    | Notas |
|--------------------|--------------------|----------------------|-------|
| V1.0               | Abr 2014           | Suportado            |  -    |
| V2.0               | Out 2015           | Suporte principal    | <ol><li>Adicionar controlador de volume do alto-falante.</li><li>Adicionar amplificador NS8002 para aumentar a potência.</li><li> Adicionar interruptor do pino Rec para alternar o pino Rec.</li></ol>|

Características
--------

- Fácil de usar, com controle de volume de som, funções de gravação, reprodução e interfaces Grove.
- Fácil de programar para muitas aplicações com MCU.
- Modo automático de desligamento, duração variável de gravação e reprodução, armazenamento não volátil.
- Baixo consumo de energia.
- Enviado com um alto-falante (8Ω/2W).

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Ideias de aplicação
-----------------

- Brinquedos.
- Alarme.
- Aplicações que exigem eco de curta duração.

Especificações
--------------

| Parâmetro                  | Valor                                                                                                         |
|----------------------------|---------------------------------------------------------------------------------------------------------------|
| Tensão de operação         | 3,3~5,0V(DC)                                                                                                  |
| Ripple (na potência máx.)  | ≤ 50mV                                                                                                        |
| Duração da gravação(padrão) | 12 segundos (valor MÁX.)<sup>\[2\]</sup>.                                                                     |
| Duração da reprodução(padrão)  | 12 segundos (valor MÁX.).                                                                                    |
| Taxa de amostragem         | 53 kHz                                                                                                        |
| Chip                        | ISD1820PY([Datasheet](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/ISD_1800_Specifications.pdf)), NS8002(Amplificador de volume) |

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

<sup>[2]</sup>Você pode substituir o resistor mostrado a seguir para alterar a duração da gravação.

![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_V2.0_back_view_600.jpg)

*Área marcada em retângulo vermelho*

:::note
A duração da reprodução será a mesma da duração da gravação conforme ela for alterada. Diferentes tipos de resistores levarão a diferentes durações de gravação, como mostra a tabela a seguir.
:::

| ROSC             | Duração | Frequência de amostragem | Largura de banda de entrada |
|------------------|---------|---------------------------|-----------------------------|
| 80 KΩ            | 8 s     | 8,0 KHz                   | 3,4 KHz                     |
| 100 KΩ (padrão)  | 10 s    | 6,4 KHz                   | 2,6 KHz                     |
| 120 KΩ           | 12 s    | 5,3 KHz                   | 2,3 KHz                     |
| 160 KΩ           | 16 s    | 4,0 KHz                   | 1,7 KHz                     |
| 200 KΩ           | 20 s    | 3,2 KHz                   | 1,3 KHz                     |

Visão geral de hardware
-----------------

![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_Hardware_View_wiki_s.jpg)

**Interface Grove**

Conecte a placa de controle principal, como a placa Seeeduino_v4.2, ao Grove - Recorder.

**Interface do alto-falante**

Conecte o Grove - Recorder ao alto-falante.

**Eixo Rec**

Iniciar gravação.

**Interface de controle de volume**

Controla o volume do alto-falante.

**MIC**

Microfone para gravação.

**IDS 1820PY**

Microcontrolador.

**Indicador de funcionamento**

Acende enquanto você está gravando. Apaga quando você para de gravar ou o tempo de gravação excede a duração configurada.

**Interruptor do pino Rec**

Você pode alternar o pino Rec para LIGADO/DESLIGADO, assim pode desabilitar ou habilitar a gravação controlada pelo MCU.

**Cabo Grove**

Conecta a placa de controle principal à placa de acionamento.

**Alto-falante**

### **Lista de peças**

| Nome das peças         | Quantidade |
|------------------------|------------|
| Grove - Recorder v2.0  | 1 unid.    |
| Cabo Grove             | 1 unid.    |
| Alto-falante           | 1 unid.    |

Primeiros passos
-----------

### **Materiais necessários**

- Seeeduino_v4.2 x 1
- Grove - Button x 1
- Cabo Grove x 1

### **Preparativos**

Consulte os seguintes guias para construir um IDE apropriado:

:::note
    Usamos o Seeeduino neste caso.
:::

- Primeiros passos no Windows

- Primeiros passos no Mac OS X

### **Conexões de hardware**

![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_Hardware_connection_s.jpg)

- Conecte todos os módulos como mostrado na figura acima.
  - Grove - Button > **D2**
  - Grove - Recorder > **D7**

### **Trabalho de software**

Código de teste abaixo; copie-o para o seu Arduino IDE e clique em Upload(CTRL+U) para enviar o código para o seu Arduino.

```
// demo for Grove - Recorder

const int pinButton = 2;
const int pinRec    = 7;


void setup()
{
    pinMode(pinButton, INPUT);
    pinMode(pinRec, OUTPUT);
}

void loop()
{
    if(digitalRead(pinButton))      // button pressed
    {
        digitalWrite(pinRec, HIGH);
        delay(200);
        digitalWrite(pinRec, LOW);
        while(digitalRead(pinButton));  // until button release
    }

    delay(10);
}
```

### Teste

- Depois que as conexões e o trabalho de software estiverem concluídos, pressione o eixo Rec para iniciar a gravação.
- Em seguida, pressione o botão no Grove - Button para reproduzir.
- Você também pode ajustar o volume com uma chave de fenda Philips.

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_Eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- Arquivo de esquemático em formato [Eagle](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_Eagle_file.zip)
- Arquivo de esquemático em formato [PDF](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_PDF_file.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Recorder_v2.0 -->

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
