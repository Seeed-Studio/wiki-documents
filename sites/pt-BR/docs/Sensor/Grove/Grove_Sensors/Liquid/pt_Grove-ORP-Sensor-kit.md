---
description: Grove - Kit de Sensor de ORP (501Z)
title: Grove - Kit de Sensor de ORP (501Z)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-ORP-Sensor-kit
sku: 110020293
last_update:
  date: 1/6/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-ORP-Sensor-kit/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/main.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/main.png" alt="pir" width={600} height="auto" /></p>


<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-501Z-p-4575.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-501Z-p-4575.html)

Um Sensor de Potencial de Oxirredução (ORP) mede a atividade de oxidantes e redutores em uma solução aquosa; ele mede a capacidade de um lago ou rio de se autolimpar ou decompor resíduos. O sensor Grove ORP funciona tanto em sistemas de 3,3 V quanto de 5 V, e o conector Grove e a interface de sonda BNC o tornam fácil de usar e muito adequado para projetos com Arduino e Raspberry Pi.

:::note
    Este produto não é certificado RoHS.
:::
## Características

- Funciona de forma eficiente em 3,3 V e 5 V.
- Compatível tanto com Arduino quanto com Rasberry Pi.
- Tamanho compacto para fácil implantação.

## Especificações
|Items|Values|
|---|---|
|Potencial do eletrodo|	245-270mv(15-30℃)|
|Resistência interna do eletrodo de referência	|≤10k|
|Estabilidade do eletrodo de resolução	|±8mv/24|
|Eletrodo indicador	|Boa continuidade|
|Tensão de operação|	3.3V/5V|
|Temperatura de operação|	5℃-70℃|

## Plataformas compatíveis
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros Passos

#### Materiais necessários

| Seeeduino Lotus | Kit de Sensor Grove-ORP | 
|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/thumb.png" alt="pir" width={600} height="auto" /></p>
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)|[Adquira agora](https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-501Z-p-4575.html)|

#### Conexão de Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORD-Sensor/IMG/ORP_Connection.jpg)  -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORD-Sensor/IMG/ORP_Connection.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::
- **Passo 1.** Conecte o Grove-ORP Sensor à interface **A2** da placa Seeeduino Lotus com um cabo Grove e conecte a Seeeduino Lotus ao PC por meio de um cabo USB.

:::tip
    Conecte o cabo USB e a interface do Grove-ORP Sensor na interface da placa Seeeduino Lotus com cuidado; caso contrário, você pode danificar a porta.
:::

- **Passo 2.** Baixe o [código de demonstração](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/ORPSensorSample.zip) e copie todo o arquivo **ORPSensorSample** e cole-o na pasta de bibliotecas da sua IDE Arduino.

- **Passo 3.** Abra o arquivo **ORPSensorSample.ino** na sua IDE Arduino e faça o upload do exemplo. Se você não sabe como enviar o código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).


#### Código de Software
```cpp
#define VOLTAGE 5.00    //system voltage
#define OFFSET 0        //zero drift voltage
#define LED 13         //operating instructions

double orpValue;

#define ArrayLenth  40    //times of collection
#define orpPin 2         //orp meter output,connect to Arduino controller ADC pin

int orpArray[ArrayLenth];
int orpArrayIndex=0;

double avergearray(int* arr, int number){
  int i;
  int max,min;
  double avg;
  long amount=0;
  if(number<=0){
    printf("Error number for the array to avraging!/n");
    return 0;
  }
  if(number<5){   //less than 5, calculated directly statistics
    for(i=0;i<number;i++){
      amount+=arr[i];
    }
    avg = amount/number;
    return avg;
  }else{
    if(arr[0]<arr[1]){
      min = arr[0];max=arr[1];
    }
    else{
      min=arr[1];max=arr[0];
    }
    for(i=2;i<number;i++){
      if(arr[i]<min){
        amount+=min;        //arr<min
        min=arr[i];
      }else {
        if(arr[i]>max){
          amount+=max;    //arr>max
          max=arr[i];
        }else{
          amount+=arr[i]; //min<=arr<=max
        }
      }//if
    }//for
    avg = (double)amount/(number-2);
  }//if
  return avg;
}


void setup(void) {
  Serial.begin(9600);
  pinMode(LED,OUTPUT);
}

void loop(void) {
  static unsigned long orpTimer=millis();   //analog sampling interval
  static unsigned long printTime=millis();
  if(millis() >= orpTimer)
  {
    orpTimer=millis()+20;
    orpArray[orpArrayIndex++]=analogRead(orpPin);    //read an analog value every 20ms
    if (orpArrayIndex==ArrayLenth) {
      orpArrayIndex=0;
    }   
    orpValue=((30*(double)VOLTAGE*1000)-(75*avergearray(orpArray, ArrayLenth)*VOLTAGE*1000/1024))/75-OFFSET;   //convert the analog value to orp according the circuit
  }
  if(millis() >= printTime)   //Every 800 milliseconds, print a numerical, convert the state of the LED indicator
  {
	printTime=millis()+800;
	Serial.print("ORP: ");
	Serial.print((int)orpValue);
        Serial.println("mV");
        digitalWrite(LED,1-digitalRead(LED));
  }
}
```


:::note
     - Ao medir o eletrodo, a parte de teste do eletrodo (incluindo o fio de platina e a junção de referência) deve ser submersa ao mesmo tempo.

     - A solução padrão do eletrodo — solução saturada de quinona e hidroquinona — tem tempo de armazenamento de 48 h. (Anexo: preparação da solução saturada de quinona e hidroquinona: adicione quinona e hidroquinona em excesso ao tampão de pH 4,00 até ficar saturado).
     - Método para preparar a solução de hidroquinona: adicionar 10 g de quinidrona a 1 L de solução tampão de pH 4 ou pH 7 (ASTM D1498). As soluções são misturadas em uma placa de agitação magnética por no mínimo 15 minutos para criar uma solução saturada com cristais não dissolvidos restantes. Soluções de quinidrona podem ser usadas por 8 horas a partir do momento da mistura.

     - Se o fio de platina do eletrodo estiver manchado com gordura, ele pode ser esfregado com algodão absorvente e acetona ou álcool. E se estiver sujo com substâncias inorgânicas insolúveis, ácido clorídrico a 30–50% também funciona. Além disso, também pode ser limpo com papel higiênico de boa qualidade uma vez por dia.

     - A sonda **NÃO DEVE** ficar imersa em nenhuma solução por muito tempo.
:::

- **Passo 4.** Retire a interface do cabo da sonda e pressione continuamente o **Botão Preto** no sensor para redefini-lo.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_for_ORP.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_for_ORP.png" alt="pir" width={600} height="auto" /></p>
- **Passo 5.** Pelo gráfico acima, podemos ver que o erro é de -11 mv; portanto, o dado de offset pode ser modificado para -11 na **linha 2** do código de demonstração.

- **Passo 6.** Após redefinir o sensor, podemos colocá-lo em um líquido de calibração indicado com especificação de 204 mv para verificar se ele funciona bem. 

<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_Solution.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_Solution.png" alt="pir" width={600} height="auto" /></p>
- **Passo 7.** Por fim, você está livre para detectar o seu próprio líquido.

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/202002872_Grove-OPR Sensor_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos

- **[ZIP]** [Biblioteca de código de demonstração](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/ORPSensorSample.zip)


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
