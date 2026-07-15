---
description: XIAO Round Dislay Christmas Ball
title: Crie uma pequena bola de Natal para a sua árvore de Natal
keywords:
  - XIAO
  - Round Dislay
  - Christmas
image: https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball_1.gif
slug: /round_display_christmas_ball
last_update:
  date: 12/08/2024
  author: Bruno Santos
createdAt: '2024-12-09'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/round_display_christmas_ball/
---

# Bola de Natal com Seeed Studio Round Display para XIAO

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball.gif" style={{width:400, height:'auto'}}/>
</div>

Neste tutorial vou mostrar como você pode criar uma bola de Natal com neve caindo e imagens de fundo que mudam.

O programa executa o seguinte:

- Exibe uma imagem de fundo armazenada como um array em C.
- Simula partículas de neve caindo sobre a imagem, com um efeito de vento.
- Detecta o toque e percorre um conjunto de imagens de fundo.
- Usa double-buffering para animações suaves.

## Preparação do Ambiente

### Hardware

Para o projeto, vamos precisar de:

- [Seeed Studio Round Display For XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)

Estou usando o XIAO ESP32S3 por causa da memória. A PNGDEC precisa de um pouco de memória para rodar ~40 kbytes.

### Preparação de Software

Para usar o Round Display, vá para [Getting Started with Round Display for XIAO](https://wiki.seeedstudio.com/pt-br/get_start_round_display/#getting-started) para instalar as bibliotecas necessárias.

Experimente alguns dos exemplos para ver se tudo está funcionando bem.

### Bibliotecas

Para este projeto, vamos usar as bibliotecas que vêm junto com o [Seeed Studio Round Display For XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

Instale todas as bibliotecas como especificado no tutorial [Getting Started with Round Display for XIAO](https://wiki.seeedstudio.com/pt-br/get_start_round_display/#getting-started).
Depois disso, você precisa do seguinte:

- Biblioteca PNGdec.
- **Atualizar a biblioteca LVGL** (ou não instalar a do github da Seeed Studio)

## Imagens

Nossas imagens são imagens PNG armazenadas em Flash Arrays. Elas são exibidas usando a biblioteca PNGdec.

**Todas as imagens devem ser PNG**

Aqui estão as imagens que eu usei - todas são geradas por IA
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background1.png" style={{width:200, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background2.png" style={{width:200, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background3.png" style={{width:200, height:'auto'}}/>
</div>

Nossas imagens de fundo precisam ser preparadas para que a TFT_eSPI possa exibi-las e elas caibam bem no Round Display for XIAO.

### Preparar imagens

#### Redimensionar Imagens

Nosso Round Display for XIAO tem resolução de 240x240. Precisamos redimensionar as imagens. Vou mostrar como fazer isso usando o [GIMP](https://www.gimp.org/)

1. Abra a imagem
2. Vá em **Image > Scale Image**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot1.jpg" style={{width:600, height:'auto'}}/></div>

3. Defina Largura e Altura para 240. Como o **Keep Ratio** está selecionado (o cadeado), quando você alterar a **width**, a **height** também deve mudar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot2.jpg" style={{width:400, height:'auto'}}/></div>

4. Pressione o botão **Scale**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot3.jpg" style={{width:400, height:'auto'}}/></div>

5. Salve a imagem (vou sobrescrever a antiga)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot4.jpg" style={{width:400, height:'auto'}}/></div>

#### Criar os Flash Arrays

**NOTA:** Estas instruções estão dentro do exemplo TFT_eSPI Flash_PNG.

Para criar o flash array, vá para [File to C style array converter](https://notisrac.github.io/FileToCArray/)

Os passos agora são:

1. Envie a imagem usando **Browse**. Após enviar a imagem

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot5.jpg" style={{width:800, height:'auto'}}/></div>

2. Precisamos definir algumas opções

- **Treat as binary**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot6.jpg" style={{width:800, height:'auto'}}/></div>

Todas as outras opções ficam em cinza.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot7.jpg" style={{width:600, height:'auto'}}/></div>

3. Vamos mudar o **Data type** para **char**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot8.jpg" style={{width:800, height:'auto'}}/></div>

4. Pressione convert. Isso vai converter a imagem em um array.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot9.jpg" style={{width:800, height:'auto'}}/></div>

5. Agora você pode pressionar o botão **Save as file** para salvar sua imagem e adicioná-la ao seu Sketch Arduino ou pressionar o botão **Copy to clipboard**
Se você usar **Copy to clipboard**, terá que pressionar os 3 pontos no lado direito do editor Arduino e escolher **New Tab**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot10.jpg" style={{width:400, height:'auto'}}/></div>

Dê um nome (geralmente o nome da sua imagem com extensão .h)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot11.jpg" style={{width:600, height:'auto'}}/></div>

Você vai terminar com todas as suas imagens como arquivos *.h*.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot12.jpg" style={{width:800, height:'auto'}}/></div>

## Código

Aqui está o código para a bola de Natal.
Uma pequena explicação das principais funções do código. O código também inclui alguns comentários.

### Headers e bibliotecas

Começamos incluindo algumas bibliotecas.

```cpp
#include <PNGdec.h>
#include <TFT_eSPI.h>
#include <Wire.h>

#include "background1.h"
#include "background2.h"
#include "background3.h"

#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"
```

Lembre-se de que você precisa ter as bibliotecas da Seeed Studio instaladas.

### Imagens de fundo

Aqui estão as funções para gerenciar as imagens de fundo

```cpp
struct Background {
  const uint8_t *data;
  size_t size;
};

const Background backgrounds[] = {
    {(const uint8_t *)background1, sizeof(background1)},
    {(const uint8_t *)background2, sizeof(background2)},
    {(const uint8_t *)background3, sizeof(background3)},
};

```

- Struct: Cada imagem de fundo é armazenada como uma struct Background contendo:
  - data: Ponteiro para os dados PNG.
  - size: Tamanho do arquivo PNG.

- Array: O array backgrounds armazena todas as imagens de fundo. A variável currentBackground rastreia o fundo exibido atualmente.

### Simulação das partículas de neve

1. Inicialização das partículas

```cpp
void initParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].x = random(0, sprite.width());
    particles[i].y = random(0, sprite.height());
    particles[i].speed = random(3, 8);
  }
}
```

- Inicializa *numParticles* com posições e velocidades aleatórias.

2. Atualização das partículas

```cpp
void updateParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].speed += random(-1, 2); // Speed variation
    particles[i].speed = constrain(particles[i].speed, 3, 8);
    particles[i].y += particles[i].speed; // Move down
    particles[i].x += random(-1, 2);      // Wind effect
    // Wrap-around logic
    if (particles[i].y > sprite.height()) {
      particles[i].y = 0;
      particles[i].x = random(0, sprite.width());
      particles[i].speed = random(3, 8);
    }
    if (particles[i].x < 0) particles[i].x = sprite.width();
    if (particles[i].x > sprite.width()) particles[i].x = 0;
  }
}
```

- Atualiza as posições das partículas com:
  - Efeito de Queda: Cada partícula se move para baixo.
  - Efeito de Vento: Adiciona um leve desvio horizontal.
  - Wrap Around: As partículas voltam para o topo quando saem pela parte de baixo.

3. Renderização das partículas:

```cpp
void renderParticlesToSprite() {
  for (int i = 0; i < numParticles; i++) {
    sprite.fillCircle(particles[i].x, particles[i].y, 2, TFT_WHITE);
  }
}
```

- Renderiza cada partícula como um pequeno círculo branco

### Decodificação de PNG

```cpp
int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                           backgrounds[currentBackground].size,
                           pngDrawToSprite);
if (rc != PNG_SUCCESS) {
  Serial.println("Failed to open PNG file!");
  return;
}
png.decode(NULL, 0);
```

- Carrega e decodifica o PNG de fundo atual usando a função *png.openFLASH()*

### Interação por toque

```cpp
if (chsc6x_is_pressed()) {
  currentBackground = (currentBackground + 1) % numBackgrounds; // Cycle backgrounds
  delay(300); // Debounce
}
```

- Detecta um evento de toque usando *chsc6x_is_pressed()* e altera a imagem de fundo incrementando *currentBackground*

### Setup e loop

- **Setup:**

```cpp
void setup() {
  Serial.begin(115200);
  tft.begin();
  tft.fillScreen(TFT_BLACK);
  sprite.createSprite(240, 240); // Match display size
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
  initParticles();
}
```

- Inicializa o display, o toque e as partículas de neve

- **Loop principal:**

```cpp
void loop() {
  sprite.fillScreen(TFT_BLACK);
  // Render background and snow
  int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                             backgrounds[currentBackground].size,
                             pngDrawToSprite);
  if (rc == PNG_SUCCESS) {
    png.decode(NULL, 0);
    updateParticles();
    renderParticlesToSprite();
    sprite.pushSprite(0, 0);
  }
  // Handle touch input
  if (chsc6x_is_pressed()) {
    currentBackground = (currentBackground + 1) % numBackgrounds;
    delay(300);
  }
  delay(10); // ~100 FPS
}
```

- Limpa o sprite, renderiza o quadro atual (plano de fundo + partículas) e verifica a entrada do usuário.

### Duplo buffer

Para reduzir o tremeluzir e melhorar a suavidade da animação dos flocos de neve, usamos **duplo buffer**.

Isso nos permite desenhar em um buffer fora da tela antes de exibi-lo na tela.

#### Duplo buffer aqui

Neste projeto, a classe TFT_eSprite da biblioteca TFT_eSPI implementa o duplo buffer.

1. **Criação do sprite**

- O sprite (buffer fora da tela) é criado na função setup():

```cpp
sprite.createSprite(240, 240); // Match display size
```

2. **Desenho do buffer**

- Todas as operações de desenho (renderização do plano de fundo e animação das partículas de neve) são feitas no sprite:

```cpp
sprite.fillScreen(TFT_BLACK); // Clear the sprite
renderParticlesToSprite();   // Draw snow particles
```

3. **Atualização do display**

- Depois que o quadro é totalmente desenhado no sprite, ele é enviado ao display em uma única operação:

```cpp
sprite.pushSprite(0, 0);
```

- Isso transfere instantaneamente o conteúdo do buffer para a tela.

4. **Reutilização**

- O sprite é reutilizado para cada quadro, sendo limpo no início do *loop()*:

```cpp
sprite.fillScreen(TFT_BLACK);
```

### Vantagens de usar duplo buffer

- Animação suave da neve: As partículas de neve em queda são atualizadas de forma contínua, sem tremeluzir.
- Troca dinâmica de plano de fundo: As mudanças de plano de fundo acionadas por toque acontecem sem atrasos visíveis ou artefatos.
- Renderização eficiente: Desenhar na memória (RAM) é mais rápido do que atualizar o display diretamente linha por linha.

**Aqui está o código completo do projeto**:

```cpp
/**
*
* To create the images as C arrays, visit:
* https://notisrac.github.io/FileToCArray/
*
*/
#include <PNGdec.h>
#include <TFT_eSPI.h>

#include "background1.h"
#include "background2.h"
#include "background3.h"

#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

// PNG decoder and TFT display instances
PNG png;
//TFT_eSPI tft = TFT_eSPI();
TFT_eSprite sprite = TFT_eSprite(&tft); // Off-screen buffer

#define MAX_IMAGE_WIDTH 240 

// Backgrounds for the snow globe
struct Background {
  const uint8_t *data;
  size_t size;
};

// Define the backgrounds with explicit casting
const Background backgrounds[] = {
    {(const uint8_t *)background1, sizeof(background1)},
    {(const uint8_t *)background2, sizeof(background2)},
    {(const uint8_t *)background3, sizeof(background3)},
};
const size_t numBackgrounds = sizeof(backgrounds) / sizeof(backgrounds[0]);

int currentBackground = 0; // Index of the current background

// Snow particle properties
const int numParticles = 100; // Number of snow particles
struct Particle {
  int16_t x, y;   // Position
  int16_t speed;  // Vertical speed
};
Particle particles[numParticles];

// Function to draw PNG to the sprite (callback for PNG decoder)
void pngDrawToSprite(PNGDRAW *pDraw) {
  uint16_t lineBuffer[MAX_IMAGE_WIDTH];
  png.getLineAsRGB565(pDraw, lineBuffer, PNG_RGB565_BIG_ENDIAN, 0xffffffff);
  sprite.pushImage(0, pDraw->y, pDraw->iWidth, 1, lineBuffer);
}

// Initialize snow particles
void initParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].x = random(0, sprite.width());
    particles[i].y = random(0, sprite.height());
    particles[i].speed = random(3, 8); // Random speed for each snowflake
  }
}

// Update snow particle positions
void updateParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].speed += random(-1, 2); // Random variation in speed
    particles[i].speed = constrain(particles[i].speed, 3, 8);
    particles[i].y += particles[i].speed;
    particles[i].x += random(-1, 2); // Wind effect

    // Wrap around screen
    if (particles[i].y > sprite.height()) {
      particles[i].y = 0;
      particles[i].x = random(0, sprite.width());
      particles[i].speed = random(3, 8);
    }
    if (particles[i].x < 0) particles[i].x = sprite.width();
    if (particles[i].x > sprite.width()) particles[i].x = 0;
  }
}

// Render snow particles to the sprite
void renderParticlesToSprite() {
  for (int i = 0; i < numParticles; i++) {
    sprite.fillCircle(particles[i].x, particles[i].y, 2, TFT_WHITE);
  }
}

void setup() {
  Serial.begin(115200);
  Serial.println("\n\nUsing the PNGdec library with touch interaction");

  // Initialize TFT
  tft.begin();
  tft.fillScreen(TFT_BLACK);
  sprite.createSprite(240, 240); // Match display size

  // Initialize touch interrupt pin
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();

  // Initialize particles
  initParticles();

  Serial.println("Setup complete.");
}

void loop() {
  // Clear the sprite for the new frame
  sprite.fillScreen(TFT_BLACK);

  // Render the current background to the sprite  
  int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                           backgrounds[currentBackground].size,
                           pngDrawToSprite);


  if (rc != PNG_SUCCESS) {
    Serial.println("Failed to open PNG file!");
    return;
  }
  png.decode(NULL, 0); // Decode and render background

  // Update and render snow particles
  updateParticles();
  renderParticlesToSprite();

  // Push the sprite to the display
  sprite.pushSprite(0, 0);

  // Check for touch input using chsc6x_is_pressed
  if (chsc6x_is_pressed()) {
    currentBackground = (currentBackground + 1) % numBackgrounds; // Cycle through backgrounds
    delay(300); // Debounce delay
  }

  delay(10); // ~100 FPS
}
```

Agora você pode usar suas próprias imagens para criar uma Bola de Natal mágica.

## ✨ Projeto de Colaborador

- Este projeto é apoiado pelo [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Agradecimentos a [Bruno Santos](https://github.com/orgs/Seeed-Studio/projects/6/views/1?sliceBy%5Bvalue%5D=feiticeir0&pane=issue&itemId=90657934&issue=Seeed-Studio%7Cwiki-documents%7C1993) e seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/contributors/).

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
