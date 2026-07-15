---
description: Para a biblioteca Seeed nRF52 Boards
title: Para a biblioteca Seeed nRF52 Boards
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-Bluetooth_Usage
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-Bluetooth_Usage/
---

# Uso de Bluetooth (Seeed nRF52 Boards Library)

**Seeed Studio XIAO nRF52840** e **Seeed Studio XIAO nRF52840 Sense** ambos suportam conectividade Bluetooth. Este wiki apresentará as funções básicas de Bluetooth usadas pela "Seeed nRF52 Boards Library".

## Primeiros passos

### Hardware necessário

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) ou [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x Smartphone com conectividade bluetooth
- 1 x cabo USB Tipo-C

### Software necessário

- [nRF Connect for Mobile (Android)](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
- [LightBlue App (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)

### Instalação

> Como a função que aplicamos está empacotada na "Seeed nRF52 Boards Library", não precisamos instalar outra biblioteca de terceiros. Você pode pular esta etapa.

- **Método Um** (Este método está disponível para ambas as bibliotecas de código acima.)

Como você já baixou a biblioteca zip, abra sua IDE do Arduino, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>


- **Método Dois** (Apenas a biblioteca ArduinoBLE pode ser instalada.)

O gerenciador de bibliotecas foi adicionado a partir das versões 1.5 e superiores (1.6.x) da IDE do Arduino. Ele é encontrado no menu 'Sketch', em 'Include Library', 'Manage Libraries...'

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg" /></div>


Quando você abrir o Library Manager encontrará uma grande lista de bibliotecas prontas para instalação com um clique. Para encontrar uma biblioteca para o seu produto, procure pelo nome do produto ou uma palavra-chave como 'k type' ou 'digitizer', e a biblioteca desejada deve aparecer. Clique na biblioteca desejada e o botão 'Install' aparecerá. Clique nesse botão e a biblioteca deverá ser instalada automaticamente. Quando a instalação terminar, feche o Library Manager.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRF.png" /></div>

## Exemplos de aplicação

Aqui apresentaremos para você aplicações de Bluetooth.

### Conectar sem fio um teclado de PC ao telefone celular

**Passo 1.** Inicie o aplicativo Arduino.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>


**Passo 2.** Selecione o modelo da sua placa de desenvolvimento e adicione-o à IDE do Arduino. Aqui estamos usando "Seeed nRF52 Boards Library".

> Para a instalação das bibliotecas de placas, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup) para concluir a instalação.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new.png" /></div>


**Passo 3.** Navegue até **"File -> Examples -> Adafruit Bluefruit nRF52 Libraries -> Peripheral -> blehid_keyboard"** e abra o arquivo de exemplo "blehid_keyboard".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new1.png" /></div>


**Passo 4.** Clique em "Upload" e depois abra o "monitor" no canto superior direito da IDE do Arduino. O monitor será mostrado como:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new3.png" /></div>


**Passo 5.** Abra o App "nRF Connect for Mobile" ou "LightBlue" no seu telefone celular, e ao mesmo tempo certifique‑se de que o Bluetooth do telefone está ligado. Depois de um tempo, você encontrará um dispositivo chamado "XIAO nRF52840" listado.

- Para o **nRF Connect for Mobile APP** deve ser assim:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new5.jpg" /></div>


- Para o **LightBlue APP** deve ser assim:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new4.jpg" /></div>


**Passo 6.** Basta clicar no dispositivo e a conexão será concluída automaticamente. Depois disso, podemos digitar caracteres no monitor com o teclado do PC e então ver o que acontece no seu telefone celular.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new6.gif" /></div>


## E o que mais?

Se você quiser testar mais exemplos, pode navegar até `File > Examples > INCOMPATIBLE > ArduinoBLE` e verificar todos os exemplos em **ArduinoBLE**


## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

