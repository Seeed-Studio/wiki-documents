---
description: Grove - Kit de Sensor de CE
title: Grove - Kit de Sensor de CE
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-EC-Sensor-kit
sku: 110020292
last_update:
  date: 1/6/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-EC-Sensor-kit/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.01.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.01.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html)
Com o desenvolvimento da tecnologia, nosso ambiente enfrenta grandes desafios. Precisamos de uma ferramenta para testar preliminarmente se a qualidade da água
atinge o padrão. O Sensor Grove EC é um medidor analógico de condutividade elétrica. O sensor de condutividade elétrica (sensor EC) mede a condutividade elétrica em uma solução, geralmente usado para aquicultura e testes de qualidade da água. O Grove - Electrical Conductivity Sensor é especialmente projetado para um sistema de baixo custo com precisão relativamente alta, que pode cobrir a maioria das aplicações. O conector Grove e a interface de sonda BNC o tornam fácil de usar e muito adequado para projetos com Arduino e Raspberry Pi. Este kit inclui uma sonda de EC e uma placa driver, e a placa driver suporta sistemas de 3.3V e 5V.

:::note
    Este produto não possui certificação RoHS.
:::

## Características

- Amplamente utilizado na maioria das aplicações de aquicultura e testes de qualidade da água
- Tamanho compacto para fácil implantação  
- Compatível tanto com Arduino quanto com Rasberry Pi
- Custo-benefício

## Especificação

|Itens|Valores|
|---|---|
|Tensão de operação |3.3V/5V|
|Faixa de CE |0-2000us/cm|
|Resolução |±5%（STP）|
|Tempo de resposta |＜10sec|
|Interface da sonda| BNC|
|Temperatura de operação |5-80℃|

## Plataformas Suportadas
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros Passos

#### Materiais Necessários

| Arduino uno | Grove-EC Sensor kit | base shield|
|:--------------:|:--------------:|:--------------:|
|<p><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/arduinouno.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.09.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.06.png" alt="pir" width={600} height="auto" /></p>
|[Adquira agora](https://www.seeedstudio.com/Arduino-Uno-Rev3-p-694.html)|[Adquira agora](https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2.html)|

#### Conexão de Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/hardware.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/hardware.jpg" alt="pir" width={600} height="auto" /></p>
:::tip
    Conecte o cabo USB e a interface do Grove-EC Sensor na placa Arduino Uno com cuidado, caso contrário você pode danificar a porta.
:::
- **Passo 1.** Conecte o Grove-EC Sensor na interface **A1** de um base shield com um cabo Grove.

- **Passo 2.** Conecte o base shield ao Arduino Uno.
- **Passo 3.** Conecte o Arduino Uno ao PC por meio de um cabo USB.
- **Passo 4.** Baixe o código, consulte a parte de software.

- **Passo 5.** Execute o código e o resultado será exibido na tela do **Serial Monitor** na sua IDE do Arduino.

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe o [código de demonstração](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DFRobot_EC_master.zip).

- **Passo 2.** Adicione o arquivo completo **DFRobot_EC_master.zip** à pasta de bibliotecas da sua IDE do Arduino. Você pode consultar [How to install an Arduino library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/)

- **Passo 3.** Abra o arquivo de exemplo **DFRobot_EC_Test** na sua IDE do Arduino.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.07.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.07.png" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Carregue o exemplo. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

#### Código de Software

```cpp
#include "DFRobot_EC.h"
#include <EEPROM.h>

#define EC_PIN A1
float voltage,ecValue,temperature = 25;
DFRobot_EC ec;

void setup()
{
  Serial.begin(115200);  

  ec.begin();
}

void loop()
{
    static unsigned long timepoint = millis();
    if(millis()-timepoint>1000U)  //time interval: 1s
    {
      timepoint = millis();
      voltage = analogRead(EC_PIN)/1024.0*5000;   // read the voltage
      //temperature = readTemperature();          // read your temperature sensor to execute temperature compensation
      ecValue =  ec.readEC(voltage,temperature);  // convert voltage to EC with temperature compensation
      Serial.print("temperature:");
      Serial.print(temperature,1);
      Serial.print("^C  EC:");
      Serial.print(ecValue,2);
      Serial.println("ms/cm");
    }
    ec.calibration(voltage,temperature);          // calibration process by Serail CMD
}

float readTemperature()
{
  //add your code here to get the temperature from your temperature sensor
}
```

:::note

     - Antes de detectar a solução alvo, o sensor **DEVE** ser calibrado com soluções de condutividade, e também **DEVE** ser colocado em água limpa antes de detectar um novo tipo de solução e enxaguado.

     - Antes de ser medida, o eletrodo deve ser calibrado com uma solução tampão padrão. Para obter resultados mais precisos, o valor conhecido da solução de condutividade deve ser confiável e mais próximo possível do valor medido.

     - Não imerja em líquido por muito tempo. Caso contrário, isso encurtará a vida útil da sonda. A camada de platina negra é fixada na superfície da chapa metálica na sonda. Deve-se evitar que qualquer objeto a toque. Ela só pode ser lavada com água destilada, caso contrário, a camada de platina negra será danificada, resultando em medição imprecisa.

     - O sensor **NÃO DEVE** ficar imerso no líquido de detecção por muito tempo.
:::

Para garantir a precisão, a sonda precisa ser calibrada na primeira utilização e após ficar sem uso por um longo período de tempo. As etapas a seguir usam calibração em dois pontos e, portanto, requerem soluções tampão padrão de 1413us/cm e 12.88ms/cm. As etapas a seguir mostram como realizar a calibração em dois pontos.

- **Passo 5.** Depois de carregar o código no Arduino, abra o serial monitor, você poderá ver a temperatura e a condutividade elétrica como na imagem abaixo.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.02.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.02.png" alt="pir" width={600} height="auto" /></p>
- **Passo 6.** Use água destilada para lavar a sonda, depois absorva as gotas de água residuais com papel. Insira a sonda na solução tampão padrão de 1413us/cm, mexa suavemente até que os valores estejam estáveis. Digite o comando enterec no serial monitor para entrar no modo de calibração.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.03.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.03.png" alt="pir" width={600} height="auto" /></p>
- **Passo 7.** Digite os comandos calec para iniciar a calibração. O programa identificará automaticamente qual das duas soluções tampão padrão está presente: 1413us/cm ou 12.88ms/cm. Nesta etapa, a solução tampão padrão é 1413us/cm.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.04.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.04.png" alt="pir" width={600} height="auto" /></p>

- **Passo 8.** Quando a calibração for bem-sucedida, insira o comando exitec para salvar os parâmetros relevantes e sair do modo de calibração.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.05.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.05.png" alt="pir" width={600} height="auto" /></p>
Depois de concluir as etapas acima, a calibração do primeiro ponto é finalizada. A calibração do segundo ponto segue o mesmo procedimento. Aqui usamos as soluções tampão padrão de 12,88ms/cm. O processo de calibração não será repetido aqui.

Depois de concluir as etapas acima, a calibração de dois pontos é finalizada e, em seguida, o sensor pode ser usado para medição real. Os parâmetros relevantes no processo de calibração foram salvos na EEPROM da placa de controle principal.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/Grove-EC_Sensor_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Biblioteca de código de demonstração](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DFRobot_EC_master.zip)
- **[PDF]** [Especificação de material CD4060BM](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/CD4060BM_Material_specification.pdf)
- **[PDF]** [Especificação do sensor DIP TDS](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DIP_TDS_Sensor_specification.pdf)
- **[PDF]** [Especificação de material LMV324](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/LMV324_Material_specification.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
