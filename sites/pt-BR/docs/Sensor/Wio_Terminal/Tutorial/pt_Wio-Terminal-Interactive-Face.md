---
description: Demonstração de Faces Interativas do Wio Terminal
title: Demonstração de Faces Interativas do Wio Terminal
keywords:
  - Tutorial do Wio_terminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Interactive-Face
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Interactive-Face/
---

# Carinhas de Emoji Interativas no Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0274.2019-11-26%2014_50_05.gif" /></div>

## Visão geral

Este exemplo demonstra como exibir várias imagens (olhos) na tela LCD por meio do cartão SD (formato BMP) e, com o uso dos botões integrados e do giroscópio, interagir com os usuários.

### Recursos

- Botão Esquerdo: Imagem Anterior (olhos)

- Botão do Meio: Animações

- Botão Direito: Próxima Imagem (olhos)

- Giroscópio: Olhos se movendo de acordo com a orientação da placa

## Bibliotecas Arduino necessárias

- Instale a biblioteca da tela LCD `Seeed_Arduino_LCD`, visite [Wio Terminal LCD](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Overview/) para mais informações.

- Instale a biblioteca do Cartão SD `Seeed_Arduino_FS`, visite [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta) para mais informações.

- Instale a biblioteca do acelerômetro on-board `Seeed_Arduino_LIS3DHTR`, visite [Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/beta) para mais informações.

- Instale a biblioteca `RawImage.h`, visite [Loading Images](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Loading-Image/) para mais informações.

## Instruções Arduino

1. Baixe o arquivo [`Emoji_face.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Emoji_face.zip) e `RawImage.h` e faça o upload para o seu Wio Terminal por meio da `Adruino IDE`. Certifique-se de ter instalado todas as bibliotecas.

2. Arraste o arquivo `face` (incluindo todas as imagens) e salve-o no cartão SD.

3. Comece a mover o seu Wio Terminal e interaja!

## Código

- **Para inicializar a tela LCD**

```Cpp
TFT_eSPI tft;

void setup() {
  ...
    tft.begin();
    tft.setRotation(3);
  ...
}
```

- **Para inicializar o cartão SD**

```Cpp
void setup() {
  ...
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
      while (1);
  }
  ...
}
```

- **Para inicializar o Acelerômetro on-board**

```Cpp
LIS3DHTR<TwoWire>  lis;

void setup () {
  ...
  lis.begin(Wire1);
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Output rate of Accelerator
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale selection
  ...
}

void loop() {
  ...
  float x_raw = lis.getAccelerationX(); //Read the raw x-axis values of acc
  float y_raw = lis.getAccelerationY(); //Read the raw y-axis values of acc
  ...
}
```

- **Para inicializar o Botão integrado**

```Cpp
void setup() {
  ...
  pinMode(BUTTON_1, INPUT); //left button
  pinMode(BUTTON_2, INPUT); //middle button
  pinMode(BUTTON_3, INPUT); //right button
  ...
}
```

- **Para inicializar a Imagem e Desenhar a Imagem**

Neste exemplo, as imagens não são em tamanho total de 320x240, portanto, ao desenhar, é necessário especificar onde a imagem começa. As imagens são primeiro carregadas no buffer para evitar atraso de imagem causado ao chacoalhar o Wio Terminal.

Para mais informações, visite [Loading Images](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Loading-Image/).

```Cpp
void loop() {
  ...
  Raw8 * eyes = newImage<uint8_t>(eye[eye_count]); //initilising 8-bit images
  writeToBuffer(x_axis, y_axis, eyes); //writing to buffer first, see full code to check this function
  ...
}
```
