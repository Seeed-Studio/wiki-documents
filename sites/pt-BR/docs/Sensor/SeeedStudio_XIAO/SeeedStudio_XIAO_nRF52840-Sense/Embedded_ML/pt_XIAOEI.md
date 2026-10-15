---
description: Reconhecimento de Movimento baseado em Edge Impulse
title: Reconhecimento de Movimento baseado em Edge Impulse
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAOEI
sku: 102010469,102010490,102010632
last_update:
  date: 04/11/2023
  author: Citric
createdAt: '2022-11-23'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/XIAOEI/
---

# Primeiros Passos com Edge Impulse no Seeed Studio XIAO nRF52840 Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/50.jpg" style={{width:1000, height:'auto'}}/></div>

Bem-vindo a este wiki de início rápido sobre como usar o Edge Impulse com o Seeed Studio XIAO nRF52840 Sense! Neste guia, vamos explorar como usar o sensor IMU onboard para detectar movimento humano e classificar diferentes ações. Seja você um desenvolvedor experiente ou esteja apenas começando, este tutorial fornecerá o conhecimento e as habilidades de que você precisa para começar a usar o Edge Impulse na placa XIAO nRF52840 Sense. Então, vamos mergulhar e começar!

<iframe width={560} height={315} src="https://www.youtube.com/embed/hLKKorpDlYw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Primeiros Passos

Neste wiki, vamos mostrar como utilizar o acelerômetro no Seeed Studio XIAO nRF52840 Sense combinado com o Edge Impulse para habilitar o reconhecimento de movimento. Os códigos que apresentamos aqui são suportados pela versão mais recente das Seeed nRF52 Boards.

> Quando se trata de aplicações de IA embarcada, recomendamos fortemente usar a "Seeed nrf52 mbed-enabled Boards Library".

### Hardware

Neste wiki, precisamos preparar os seguintes materiais:

- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Bateria Li-po (702025)
- [Grove - OLED Display 0.66"](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)
- Cabos Dupont ou cabos Grove
- Carcaça impressa em 3D
- Fibra plástica de guia de luz

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/BLEmotion.png" alt="pir" width={600} height="auto" /></p>

**Configuração de Hardware**

- **Passo 1**. Remova a base Grove do Grove - OLED Display 0.66" com um ferro de solda
- **Passo 2**. Use alicates de corte para cortar os cabos DuPont em um comprimento de cerca de 3 cm e exponha cerca de 2 mm dos fios internos em ambas as extremidades
- **Passo 3**. Passe a fibra pelo pequeno furo na frente e posicione a extremidade no LED

- **Passo 4**.  Solde o Seeed Studio XIAO nRF52840 Sense com os outros elementos de acordo com o diagrama abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition2.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition3.png" alt="pir" width={500} height="auto" /></p>

:::note
    Será melhor se você usar adesivo de cola quente para reforçar as soldas.
:::

- **Passo 5**. Monte todos os componentes:

  1. Passe a fibra pelo pequeno furo na parte frontal da carcaça
  2. Prenda a tela na posição fixa
  3. Posicione a bateria entre o Seeed Studio XIAO nRF52840 e a tela
  4. Manuseie os fios com cuidado
  5. Coloque a extremidade da fibra plástica guia de luz na luz RGB do Seeed Studio XIAO nRF52840 e corte o excesso
  6. Monte a caixa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition4.png" alt="pir" width={400} height="auto" /></p>

A unidade montada:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition6.png" alt="pir" width={400} height="auto" /></p>

### Software

As bibliotecas necessárias estão listadas abaixo. É altamente recomendável usar os códigos daqui para verificar se o hardware está funcionando bem. Se você tiver problema ao instalar a biblioteca, consulte [aqui](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/).

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)
- [U8g2](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/U8g2.zip)

Para configurar o Seeed Studio XIAO nRF52840 Sense no Edge Impulse, você precisará instalar o seguinte software:

1. [Node.js v12](https://nodejs.org/en/) ou superior.
2. [Arduino CLI](https://arduino.github.io/arduino-cli/latest/)
3. O Edge Impulse CLI e um monitor serial. Instale abrindo o prompt de comando ou terminal e execute:

```sh
npm install -g edge-impulse-cli 
```

:::note
Problemas ao instalar o CLI? Verifique [Installation and troubleshooting](https://docs.edgeimpulse.com/docs/cli-installation) para mais referência.
:::

## Conectando ao Edge Impulse

Com todo o software instalado, é hora de conectar a placa de desenvolvimento ao Edge Impulse.

- **Passo 1.** Conecte o Seeed Studio XIAO nRF52840 Sense ao seu computador via um cabo USB Tipo-C.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Crie um novo projeto no [Edge Impulse](https://studio.edgeimpulse.com/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition9.png" alt="pir" width={800} height="auto" /></p>

- **Passo 3.** Escolha "Accelerometer data" e clique em "Let’s get started!"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition10.png" alt="pir" width={1000} height="auto" /></p>

## Aquisição de Dados e Treinamento

:::note
Nesta etapa, estamos tentando coletar os "Accelerometer data" do IMU onboard do Seeed Studio XIAO nRF52840 Sense para construir um conjunto de dados e depois treinar o modelo com a plataforma EdgeImpulse.
:::

- **Passo 4.** Faça o upload do sketch "Accelerometer Raw Data" para o Seeed Studio XIAO nRF52840 Sense.

[Download Seeed_Arduino_LSM6DS3 Library](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) como um arquivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>

Abra o Arduino IDE, navegue até `Sketch > Include Library > Add .ZIP Library...` e abra o arquivo zip baixado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

Envie os códigos abaixo e abra o **Serial Monitor**

```
// XIAO BLE Sense LSM6DS3 Accelerometer Raw Data 

#include "LSM6DS3.h"
#include "Wire.h"

//Create a instance of class LSM6DS3
LSM6DS3 myIMU(I2C_MODE, 0x6A);  //I2C device address 0x6A

#define CONVERT_G_TO_MS2 9.80665f
#define FREQUENCY_HZ 50
#define INTERVAL_MS (1000 / (FREQUENCY_HZ + 1))

static unsigned long last_interval_ms = 0;


void setup() {
  Serial.begin(115200);
  while (!Serial)
    ;

  if (myIMU.begin() != 0) {
    Serial.println("Device error");
  } else {
    Serial.println("Device OK!");
  }
}


void loop() {
  if (millis() > last_interval_ms + INTERVAL_MS) {
    last_interval_ms = millis();
    Serial.print(myIMU.readFloatAccelX() * CONVERT_G_TO_MS2, 4);
    Serial.print('\t');
    Serial.print(myIMU.readFloatAccelY() * CONVERT_G_TO_MS2, 4);
    Serial.print('\t');
    Serial.println(myIMU.readFloatAccelZ() * CONVERT_G_TO_MS2, 4);
  }
}


```

Agora você verá os dados do acelerômetro e do giroscópio exibidos um após o outro no monitor serial como abaixo!

<p style={{textAlign: 'center'}}><img src="https://workshop.makergram.com/assets/images/raawIMUSerial-095365f65dd0cde808620906ab5a7ab8.png" alt="IMU Raw" width={800} height="auto" /></p>

- **Passo 5.** Execute o comando no seu `terminal` ou `cmd` ou `powershell` para iniciá-lo.

```
edge-impulse-data-forwarder
```

- **Passo 6.** Precisamos usar o CLI para conectar o Seeed Studio XIAO nRF52840 Sense ao Edge Impulse. Primeiro, faça login na sua conta e escolha o seu projeto

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition11.png" alt="pir" width={800} height="auto" /></p>

Dê um nome ao acelerômetro e ao dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition12.png" alt="pir" width={800} height="auto" /></p>

- **Passo 7.** Conecte o XIAO nRF52840 Sense ao Edge Inpulse

Vá para a página "Data acquisition" do Edge Impulse, o resultado deve ser como este se a conexão for bem-sucedida. Você pode encontrar o dispositivo "Seeed Studio XIAO nRF52840 Sense" mostrado à direita da página.

- **Passo 8.**  Selecione o sensor como "3 axes". Nomeie seu rótulo como `up` e `down`, modifique Sample length (ms.) para 20000 e clique em start sampling.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition13.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 9.** Balance o Seeed Studio XIAO nRF52840 Sense para cima e para baixo e mantenha o movimento por 20 segundos. Você pode ver que a aquisição é mostrada assim:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition14.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 10.** Divida os dados clicando nos dados brutos no canto superior direito e escolhendo "Split Sample". Clique em +Add Segment e depois clique no gráfico. Repita isso mais de 20 vezes para adicionar segmentos. Clique em Split e você verá os dados de amostra, cada um por 1 segundo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition30.png" alt="pir" width={600} height="auto" /></p>

- **Passo 11.** Repita o **Passo 8.** e o **Passo 9.** e rotule os dados com nomes diferentes para marcar diferentes dados de movimento, como `left` e `right`, `clockwise`, `anticlockwise` e assim por diante. O exemplo fornecido está classificando cima e baixo, esquerda e direita, e círculo. Você pode alterar isso conforme desejar aqui.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition16.png" alt="pir" width={1000} height="auto" /></p>

:::note
No Passo 9, o tempo de divisão é de 1 segundo, o que significa que você deve fazer pelo menos um movimento de cima para baixo em um segundo no Passo 8. Caso contrário, os resultados não serão precisos. Enquanto isso, você pode ajustar o tempo de divisão de acordo com a sua própria velocidade de movimento.
:::

## Construindo um modelo de machine learning

- **Passo 12.** Reequilibre o conjunto de dados. Clique em **Dashboard** e role a página para baixo para encontrar **Perform train** / **test split**

Clique em Perform train / test split, escolha Yes e confirme

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition17.png" alt="pir" width={800} height="auto" /></p>

- **Passo 13.** Criar Impulse

Clique em **Create impulse** -> Adicione um bloco de processamento -> Escolha **Spectral Analysis** -> Adicione um bloco de aprendizado -> Escolha **Classification (Keras)** -> Salve o Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew1.png" alt="pir" width={800} height="auto" /></p>

- **Passo 14.** Spectral features

Clique e configure

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew2.png" alt="pir" width={800} height="auto" /></p>

Clique em **Spectral features** -> Role a página para baixo e clique em Save parameters -> Clique em **Generate features**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew3.png" alt="pir" width={800} height="auto" /></p>

A página de saída deve ser assim:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew4.png" alt="pir" width={800} height="auto" /></p>

- **Passo 15.** Treinando seu modelo

Clique em NN Classifier -> Clique em Start training -> Escolha Unoptimized (float32)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew5.png" alt="pir" width={800} height="auto" /></p>

:::note
A precisão do modelo de treinamento é muito importante para o resultado final. Se os resultados de treinamento de saída forem tão baixos quanto menos de 65%, recomendamos fortemente que você treine mais vezes.
:::

## Implantando no Seeed Studio XIAO nRF52840 Sense

- **Passo 16.** Teste do modelo

Clique em Model testing -> Clique em Classify all

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition23.png" alt="pir" width={800} height="auto" /></p>

:::note
Se a sua precisão estiver baixa, você pode verificar o conjunto de dados aumentando o conjunto de treinamento e estendendo o tempo de amostragem
:::

- **Passo 17.** Construir biblioteca Arduino

Clique em Deployment -> Clique em Arduino Library -> Clique em **Build** -> Baixe o arquivo .ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew7.png" alt="pir" width={400} height="auto" /></p>

- **Passo 18.** O nome do arquivo .ZIP é muito importante, ele é definido como o nome do seu projeto do Edge Impulse por padrão. Como aqui, o nome do projeto é "XIAO-BLE-gestures_inferencing". Selecione o arquivo como ""Add the ".ZIP file" to your Arduino libraries

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition35.png" alt="pir" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition36.png" alt="pir" width={500} height="auto" /></p>

- **Passo 19.** Baixe o código [aqui](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEI.ino). Altere o nome do seu arquivo de cabeçalho para o nome do seu próprio e faça o upload.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition33.png" alt="pir" width={800} height="auto" /></p>

- **Passo 20.** Mova ou segure o Seeed Studio XIAO nRF52840 Sense e verifique os resultados:

Clique no monitor no canto superior direito do Arduino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew15a.png" alt="pir" width={800} height="auto" /></p>

Quando você move o Seeed Studio XIAO nRF52840 Sense na direção **esquerda e direita**:

O monitor exibirá algo como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew11a.png" alt="pir" width={500} height="auto" /></p>

E a tela de saída é assim:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew14a.png" alt="pir" width={300} height="auto" /></p>

Quando você move o Seeed Studio XIAO nRF52840 Sense na direção **cima e baixo**:

O monitor exibirá algo como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew9a.png" alt="pir" width={500} height="auto" /></p>

E a tela de saída é assim:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew12a.png" alt="pir" width={300} height="auto" /></p>

Quando você **segura** o Seeed Studio XIAO nRF52840 Sense em estado ocioso:

O monitor exibirá algo como:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew10a.png" alt="pir" width={500} height="auto" /></p>

E a tela de saída é assim:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew13a.png" alt="pir" width={300} height="auto" /></p>

Parabéns! Você chegou ao fim do projeto. É encorajado que você tente mais direções e verifique qual delas terá a melhor saída.

## Recursos

- [Arquivo do Case do Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/xiao-case-pink.stl)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
