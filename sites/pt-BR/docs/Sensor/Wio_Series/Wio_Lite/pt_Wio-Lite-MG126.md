---
title: Wio Lite MG126
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-Lite-MG126/
slug: /Wio-Lite-MG126
sku: 102991186
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-Lite-MG126/
---

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/Wio-Lite-MG126-wiki.jpg)

O Wio Lite MG126 é uma placa de desenvolvimento econômica baseada no SAMD21 com o Módulo Bluetooth MG126 on-board. O SAM D21 é um microcontrolador baseado em ARM Cortex-M0+ e o MG126 é um módulo transceptor Bluetooth de modo único de 2,4GHz. Assim como o Wio Lite W600, esta placa também é compatível com o Arduino Zero (usa o mesmo Arduino Core SAM D21) e possui o mesmo fator de forma compatível com a série Adafruit Feather.

Nós expomos os pinos de I/O de 3,3V do SAM D21, o chip SAM D21 possui ricos recursos de I/O, incluindo 14 pinos digitais, 6 pinos analógicos, 1 porta UART, 1 porta I2C e 1 porta ICSP. Cada vez mais placas na Seeed usam interfaces tipo C para fornecer energia e transmitir dados, o mesmo ocorre com o Wio Lite MG126. Ao mesmo tempo, há uma porta de bateria Li-Po JST2.0, você pode usar uma bateria Li-Po de 3,5V ou 4,2V para alimentar esta placa.  

Agora, vamos falar sobre o núcleo Bluetooth, o MG126. O MG126 é um transceptor RF BLE de 2,4GHz com registradores configuráveis por software e mecanismo de tratamento de pacotes embarcado. Ele pode funcionar com consumo de energia ultrabaixo. A taxa de dados pelo ar do Bluetooth do MG126 é de 1Mbps e o MG126 pode se comunicar com o núcleo Arduino na velocidade de 4Mbps via interface SPI.

<p style={{}}><a href="https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- Compatível com Arduino Zero / Compatível com Adafruit Feather
- Operação na banda ISM de 2,4GHz com espaçamento de canal de 2MHz
- Taxa de dados pelo ar de 1Mbps
- Consumo de energia ultrabaixo

## Especificação

|Parâmetro|Valor|
|---|--------|
|**Controlador Principal**||
|Microcontrolador|SAM D21|
|Pinos Digitais de I/O|14|
|Canais de Entrada Analógica|6|
|Corrente CC por Pino de I/O|40 mA|
|Tensão de Entrada de IO|3,3 V|
|SRAM|32 KB|
|Flash|256 KB|
|Frequência Máxima da CPU|48 MHz|
|**Bluetooth**||
|Núcleo Bluetooth|MG126|
|Banda de Frequência|2,4GHz ISM|
|Taxa de Dados|Taxa de dados pelo ar de 1Mbps|
|Comunicação com MCU|SPI (Máx. 4Mbps)|
|Transmissor|Potência de saída programável: -28 ~ +4 dBm sem um PA RF externo 20mA a 0dBm de potência de saída|
|Receptor|Filtros de canal integrados sensibilidade de -85 dBm ganho de LNA programável|
|Antena|Antena PCB on-board|
|Distância Máx. de Conexão Bluetooth|10 m|
|**Outros**||
|Porta de Entrada de Energia|USB Tipo C Bateria Lipo JST2.0|
|Tensão de Operação|USB 5V Bateria 4,2 V|
|Fusível Resetável|Corrente de proteção 1A|
|Corrente de Carga da Bateria|400 mA|

## Visão Geral de Hardware

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/Hardware-overview.jpg)

:::tip
    - A antena PCB não deve ser blindada por metal quando montada, caso contrário causará atenuação do sinal Bluetooth;
    - Os terminais positivo e negativo da bateria são indicados na parte traseira do módulo. É estritamente proibido inverter os terminais positivo e negativo da bateria.
:::

## Primeiros Passos

Antes de começar, faça o download do aplicativo **nRF Connect** na Google/Apple Store. O **nRF Connect** é compatível com funções padrão do protocolo Bluetooth, todos os exemplos são testados com base neste aplicativo.

## Hardware

**Materiais necessários**

- Wio Lite Mg126 x1
- Computador x1
- Cabo USB type C x1
- Jumper x1

:::tip
        Alguns cabos USB podem apenas fornecer energia e não transferir dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode verificar [Seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

Conecte o Wio Lite MG126 ao seu computador através do cabo USB.

## Software

### Passo 1. Você precisa instalar o Software Arduino

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Inicie o aplicativo Arduino**

Clique duas vezes no aplicativo Arduino (arduino.exe) que você baixou anteriormente.

:::note
    Se o Software Arduino carregar em um idioma diferente, você pode alterá-lo na caixa de diálogo de preferências. Consulte a página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para mais detalhes.
:::

### Passo 2. Adicione a placa Wio Lite MG126 ao Arduino IDE

Abra o seu Arudino IDE, clique em **File > Preferences**, e copie a seguinte url para Additional Boards Manager URLs

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)

Clique em **Toos > Board > Board Manager**. Procure a placa pelo nome, apenas pesquise a palavra-chave `Seeeduino_Wio_Lite_MG126` e instale a placa correspondente.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-2.jpg)

### Passo 3. Selecione sua placa e porta

Você precisará selecionar a entrada no menu **Tools > Board** que corresponde ao seu Arduino.
Selecionando o **Wio Lite MG126**.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-4.jpg)

Selecione o dispositivo serial da placa Arduino no menu Tools | Serial Port. Provavelmente será COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Arduino e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

:::caution
        Você pode não encontrar os exemplos do MG126 na aba **File > Examples** antes de selecionar a placa Wio Lite MG126. Quando você selecionar a placa, os exemplos aparecerão aqui.
:::

### Passo 4. Abra a demonstração

Baixe a [Biblioteca MG126](https://github.com/Seeed-Studio/Seeed_Arduino_MG126) do Seeed Github. Em seguida, consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para o Arduino.
Clique em **File > Examples >Seeeduino Wio Lite MG126 >analog_output**.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-5.png)

Você pode encontrar 7 demos nesta pasta. As demos `button`/`get_bat_vol` não usam a biblioteca bluetooth, e o restante usa.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-6.jpg)

|Nome da Demo|Função|DeviceInfo|
|-----|-----|----|
|analog_output|O valor analógico na placa de desenvolvimento é obtido via Bluetooth e exibido no aplicativo móvel.|Wio_BLE_Analog|
|button|Pressione o botão de usuário on-board e imprima no monitor serial.||
|echo_ble|Servidor de eco Bluetooth, ou seja, o celular recebe os dados enviados pela placa de desenvolvimento.|Wio_Lite_BLE|
|get_bat_vol|Obtenha a tensão da bateria externa||
|rgb_led_matrix_control|Controle a [Grove - RGB LED Matrix](https://www.seeedstudio.com/Grove-RGB-LED-Matrix-w-Driver.html) para exibir|Wio_Led_matrix|
|serial_transparent_transmission|Os dados da porta serial são transmitidos de forma transparente, ou seja, os dados enviados pelo celular serão enviados pela porta serial da placa de desenvolvimento, e os dados enviados para a porta serial da placa de desenvolvimento serão enviados para o celular.|Wio_Lite_Serial|
|temp_humidity|obtenha as informações do [Grove - I2C High Accuracy Temp&Humi Sensor (SHT35)](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html), e envie-as para o seu telefone.|Wio_BLE_T&H|

### Passo 5. Faça o upload do programa

Agora, simplesmente clique no botão "Upload" no ambiente. Aguarde alguns segundos e, se o upload for bem-sucedido, a mensagem "Done uploading." aparecerá na barra de status.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
  </figure>
</div>

Quando terminar, a informação **Done Uploading** aparecerá no canto inferior esquerdo do Arduino IDE.

### Passo 6. Use o telefone para conectar ao MG126**  

Abra o aplicativo [nRF Connect](#Primeiros-Passos), clique em **SCANNER** e procure pelo nome do DeviceInfo na página. Demos diferentes têm DeviceInfo diferentes, e o DeviceInfo correspondente de analog_output é `Wio_BLE_Analog`.

Portanto, selecione `Wio_BLE_Analog` na lista de dispositivos bluetooth. Toque em **CONNECT**, depois clique em **Automation IO > Analog**, e o valor do pino A0 será exibido.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/ana-0.jpg)

:::caution
        Devido à função de cache do Bluetooth, sempre que você modificar o valor de característica do Bluetooth (ou seja, fizer o download do exemplo usando diferentes funções de Bluetooth), você precisa limpar o cache do aplicativo uma vez e também precisa reiniciar o telefone.
:::

## Interface de funções

### Interface de função WiFi

- 1. Classe de pacote Bluetooth

```
MG126_Ble  
```

- 2. Inicializar a pilha de protocolo Bluetooth e ligar o Bluetooth

```
MG126_Ble .ble_init();
```

- 3. Relatar mensagens via Bluetooth

```
sconn_notifydata();
```

Apenas algumas interfaces comuns são listadas aqui, outras interfaces podem ser vistas nos exemplos.

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/Wio%20Lite%20MG126.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivos de esquemático do Wio lite MG126](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/Wio%20Lite%20MG126.zip)

- **[PDF]** [DS-MG126-BLE-Datasheet](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/DS-MG126-BLE.pdf)

## Suporte Técnico & Discussão de Produto

 se você tiver qualquer problema técnico, envie o problema para o nosso [fórum](http://forum.seeedstudio.com/).
Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
