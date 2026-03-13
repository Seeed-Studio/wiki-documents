---
title: Grove - IR Distance Interrupter v1.2
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-IR_Distance_Interrupter_v1.2/
slug: /Grove-IR_Distance_Interrupter_v1.2
sku: 101020175, 101020040
last_update:
  date: 01/03/2022
  author: gunengyu
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-IR_Distance_Interrupter_v1.2/
---

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Grove_-_IR_Distance_Interrupter_v1.2.jpg)

**Grove - IR Distance Interrupter** é usado para detectar qualquer objeto que esteja bloqueando o caminho da luz. O módulo consiste em um par de um LED IR e um fotosensor (fototransistor). A luz emitida pelo LED IR é refletida por qualquer objeto colocado na frente do sensor e essa reflexão é detectada pelo fotosensor (fototransistor). Qualquer superfície branca (ou mais clara) reflete mais do que uma superfície preta (ou mais escura).

Quando a luz refletida é detectada, ela produz uma saída **Digital HIGH** (ou binário **1**) no pino **SIG**. O LED indicador on-board também acenderá. Se nenhuma reflexão for detectada ou se o objeto estiver muito longe do sensor, a saída no pino **SIG** permanece em **Digital LOW** (binário **0**). O LED indicador on-board também ficará apagado. A faixa detectável deste sensor é de 7,5–40 cm. O módulo incorpora um amplificador operacional Rail-to-Rail para amplificar a saída do fototransistor. Há um potenciômetro que pode ser usado para ajustar o ganho do amplificador, isto é, a sensibilidade de detecção.

Com este sensor, você pode construir as seguintes aplicações (entre outras): **robôs seguidores de linha, encoders ópticos** e **aplicações de contagem de objetos**.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)

<div class="admonition note">
<p class="admonition-title">Note</p>
Este produto é levemente sensível também a radiações não infravermelhas e, portanto, qualquer luz intensa incidindo sobre o fotosensor prejudica ou interfere na detecção da luz IR.
</div>

<div className="admonition tip">
  <p className="admonition-title">Tip</p>
  As instruções para usar este produto são as mesmas do <span style={{fontWeight: 'bold'}}>Grove - Infrared Reflective Sensor</span>. Você pode usar este produto diretamente se já tiver usado o Grove - Infrared Reflective Sensor.
</div>

Rastreador de Versão
---------------

| Versão do produto                                   | Data de lançamento | Status de suporte |
|-------------------------------------------------------|--------------------|-------------------|
| Versões anteriores à v1.2                            | Junho de 2012      | Não suportado     |
| Grove - IR Distance Interrupter v1.2 (versão atual)  | Abril de 2016      | Suportado         |

Recursos
--------

- Compatível com Grove e fácil de usar
- Altamente sensível e confiável
- Maior distância detectável
- Sensibilidade ajustável para várias ocasiões
- Mais durável

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Especificações
--------------

| Parâmetro                     | Valor                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------|
| Tensão de operação (V)        | 3,3 ou 5 Volts                                                                         |
| Corrente de operação (mA)     | Máximo: 20 mA                                                                          |
| Distância efetiva detectável  | 7,5–40 cm                                                                              |
| Fotosensor reflexivo          | [datasheet](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/ITR9909_datasheet.pdf) |
| Amplificadores operacionais de saída | [datasheet](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LM393.pdf)                  |
| Peso                          | 2,5 g (para o módulo), 8,5 g (para todo o pacote individual)                           |

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Visão Geral de Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/hardware_overview.png)

- **Fotosensor reflexivo ITR9909**, fotosensor reflexivo altamente sensível.
- **Amplificador operacional LM393**, amplificador operacional rail-to-rail.
- **LED indicador**, o LED acenderá quando a intensidade da luz infravermelha recebida exceder um nível predefinido.
- **Potenciômetro de ajuste de sensibilidade à luz**, ajusta a sensibilidade do fotosensor reflexivo à luz.

### **Pacote inclui**

| Nome das partes                                                                                                               | Quantidade |
|-------------------------------------------------------------------------------------------------------------------------------|-----------|
| Grove - Infrared Reflective Sensor                                                                                            | 1 peça    |
| [Grove cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 peça    |

Primeiros Passos
---------------

Vamos ver como implementar algumas aplicações básicas com este módulo:

### Com Arduino

#### Material necessário

- Grove - IR Distance Interrupter v1.2 × 1
- Arduino UNO (outros modelos também servem) × 1
- Cabo Grove × 1
- Grove - Base Shield × 1

#### Conexões

1.Conecte o Grove - IR Distance Interrupter v1.2 ao Arduino UNO com o cabo Grove.

2.Posicione e mantenha o fotosensor reflexivo voltado para uma superfície branca (ou de cor clara).

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor3.jpg)

3.Ajuste o potenciômetro com uma chave de fenda para alterar a sensibilidade do fotosensor reflexivo até que o LED indicador acenda. Ao girar no sentido horário, o fotosensor reflexivo ficará mais sensível à luz.

<div class="admonition note">
<p class="admonition-title">Note</p>
Use uma chave de fenda adequada para ajustar o pequeno potenciômetro. Aplicar muita pressão ou fazer ajustes frequentes pode danificar o cursor do potenciômetro.
</div>

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor2.jpg)

![](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor1.jpg)

4.Crie um sketch Arduino e copie o código abaixo nele.

```
void setup()  {
    Serial.begin(9600);
    pinMode(6,INPUT);
}
void loop()  {
    while(1)  {
        delay(500);
        if(digitalRead(6)==LOW)  {
            Serial.println("Somebody is here.");
        }
        else  {
            Serial.println("Nobody.");
        }
    }
}
```

5.Faça o upload do código. Se você não sabe como fazer upload de um sketch Arduino, visite [https://www.arduino.cc/en/Guide/Windows](https://www.arduino.cc/en/Guide/Windows) para usuários Windows ou [https://www.arduino.cc/en/Guide/MacOSX](https://www.arduino.cc/en/Guide/MacOSX) para usuários Mac. Você poderá ver o resultado como abaixo.

6.Quando o caminho da luz for bloqueado por algum objeto, você verá "Somebody is here." no Serial Terminal; caso contrário, verá "Nobody."

### Com Raspberry Pi

#### Material necessário

- Raspberry Pi (outros modelos também servem) × 1
- [GrovePi](https://www.seeedstudio.com/depot/GrovePi-p-1672.html?cPath=73) ou [Grovepi+](https://www.seeedstudio.com/depot/GrovePi-p-2241.html?cPath=122_154_158) × 1
- [Grove cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1

#### Conexões de Hardware e Trabalho de Software

1.Você deve ter um Raspberry Pi e um GrovePi ou GrovePi+. Neste demo, usamos o GrovePi.

2.Supomos que você já tenha configurado o ambiente de desenvolvimento com sucesso. Caso contrário, siga este tutorial

3.Conexão:

Conecte o Grove - IR Distance Interrupter na porta D4 do GrovePi com um [Grove cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57).

4.Navegue até o diretório de demos e execute o seguinte comando em um terminal.

```
    cd yourpath/GrovePi/Software/Python/
```

Execute o comando em um terminal:

```
    nano grove_infrared_distance_interrupt.py
```

Copie e salve o código a seguir nele.

```
import time
import grovepi

# Connect the Grove Infrared Distance Interrupt Sensor to digital port D4
# SIG,NC,VCC,GND
sensor = 4

grovepi.pinMode(sensor,"INPUT")

while True:
    try:
        # Sensor returns LOW and onboard LED lights up when the
        # received infrared light intensity exceeds the calibrated level
        if grovepi.digitalRead(sensor) == 0:
            print "found something"
        else:
            print "nothing"

        time.sleep(.5)

    except IOError:
        print "Error"
```

5.Execute a demonstração, execute o seguinte comando no terminal.

```
    sudo python grove_infrared_distance_interrupt.py
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Arquivo Eagle do Grove - IR Distance Interrupter v1.2](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Eagle_files.zip)
- [Folha de Dados do Fotossensor Reflexivo (ITR9909)](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/ITR9909_datasheet.pdf)
- [Folha de Dados do LM393](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LM393.pdf)
- [Folha de Dados do LMV358](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LMV358_datasheet.pdf)
- [Arquivos-fonte do Sensor Reflexivo Infravermelho](https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Grove-Infrared_Reflective_Sensor_v1.0_SourceFile.zip)

Este arquivo Markdown foi criado a partir de [https://www.seeedstudio.com/wiki/Grove_-_IR_Distance_Interrupter_v1.2](https://www.seeedstudio.com/wiki/Grove_-_IR_Distance_Interrupter_v1.2)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
