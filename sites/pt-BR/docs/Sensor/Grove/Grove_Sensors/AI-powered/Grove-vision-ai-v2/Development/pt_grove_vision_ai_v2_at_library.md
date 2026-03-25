---
title: Usando o Grove Vision AI V2 com comandos AT
hide_title: false
description: Este guia mostra como usar o Grove Vision AI V2 com comandos AT.
keywords:
  - Visão
  - Grove
  - AT
  - SSCMA
image: https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg
slug: /grove_vision_ai_v2_at
last_update:
  date: 04/22/2024
  author: Spencer
toc_max_heading_level: 3
createdAt: '2024-04-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_at/
---

## Introdução

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o seu agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

O Grove Vision AI V2 é um poderoso módulo de câmera com IA que permite aos usuários implantar modelos prontos para uso em aplicações de visão. Além de seus recursos de IA, o Grove Vision AI V2 oferece vários recursos de hardware e opções de uso para aprimorar sua funcionalidade e facilidade de uso.

![](https://mermaid.ink/svg/pako:eNp1kk9vozAQxb_KyCciRSi4aRe4RemfXWmrVpuqh4qL155St-CJjMk2G-W7r02AZKXmNr_3xuN5mB2TpJDlrNZG1WJdGABL5KLoztIG4Vk3mgw888kkWABLqsheo0PpvBF1CCP3TQA_tcFbqir6o00ZBYIRxyZFroniOO6Fh9_vfsovlFQa3U0_KHAijWe_U42L1lEtus6AcOSxbVUL6xZSYtMsyThLVdRJcNCgF8-tBHCzQeOerC5LtKjCJlaFSJ0OowGj05-8FRJPowT-Msgj2oaMqH4oP1C_atkFWKFsrXbbaLDhfx-GhgkMg_r0qJZt4yu0K7QbLTEaDRgc6K1zse8p3HF85QN_8cxPb_jqFpWwddSV0NXHnR7R3ZMPTDZ8M09wxHOXnyCbMr9tLbTyf-gu2AVzb1hjwXJfKmE_ClaYve8TPuRqayTLnW1xytq18pGvtSitqAdxLcwL0SmyfMc-Wc7jS55m6cXFFU-yNJ0lU7ZlecKTePYtm3vmPMtmfD9lf7vzszg0Z_wyu-LzeZrw_T852RLp)

Nesta página, vamos nos concentrar em orientar os usuários sobre **como utilizar efetivamente a biblioteca Arduino** especificamente projetada para o Grove Vision AI V2. Iremos abordar o processo de instalação, os principais recursos e fornecer exemplos práticos demonstrando como usar as funções da biblioteca para controlar e configurar o módulo, permitindo que os usuários criem facilmente aplicações inovadoras baseadas em visão.

## Firmware e conjunto de comandos AT

O Grove Vision AI V2 vem com firmware pré-instalado que suporta um conjunto de comandos AT. Esse conjunto de comandos permite que os usuários controlem e configurem a funcionalidade do módulo sem a necessidade de ambientes de programação complexos.

A especificação do conjunto de comandos AT pode ser encontrada em [SSCMA-Micro](https://github.com/Seeed-Studio/SSCMA-Micro). É importante notar que o conjunto de comandos AT pode evoluir com o tempo, e versões mais recentes do firmware podem incluir comandos adicionais. Recomenda-se manter o firmware atualizado para acessar os recursos mais recentes.

:::note
Se você precisa gravar um novo firmware ou atualizar o firmware, pode acessar o site [SenseCraft AI](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process).
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/at-diagram.png" alt="at diagram" width={320} height="auto" /></p>

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Verificar o protocolo AT</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Biblioteca Arduino

Para simplificar o uso do conjunto de comandos AT e fornecer uma interface amigável, está disponível uma biblioteca Arduino chamada [Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA). Essa biblioteca encapsula os comandos AT em funções fáceis de usar, permitindo que os usuários integrem rapidamente o Grove Vision AI V2 em seus projetos Arduino.

A biblioteca Arduino mantém a compatibilidade com o conjunto de comandos AT mais recente, garantindo uma abordagem consistente e unificada para interagir com o módulo. Ao utilizar essa biblioteca, os usuários podem se concentrar no desenvolvimento de suas aplicações sem se preocupar com os detalhes de baixo nível dos comandos AT.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Baixar a biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

:::info

<div class="table-center">
<table align="center">
    <tr>
        <td>MCU</td>
        <td>Versão da placa</td>
        <td>Grove(I2C)</td>
        <td>Pino(Uart)</td>
    </tr>
    <tr>
        <td>SAMD21</td>
        <td>1.8.5</td>
        <td>✅</td>
        <td>⚠️</td>
    </tr>
    <tr>
        <td>RP2040</td>
        <td>3.9.1</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>nRF52840 - nRF52 Boards</td>
        <td>1.1.8</td>
        <td>✅</td>
        <td>⚠️</td>
    </tr>
    <tr>
        <td>nRF52840 - mbed-enabled</td>
        <td>2.9.2</td>
        <td>✅</td>
        <td>⚠️</td>
    </tr>
    <tr>
        <td>ESP32C3</td>
        <td>2.0.17</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>ESP32S3</td>
        <td>2.0.17</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
</table>
</div>

\*⚠️: pode não funcionar bem
:::

## Conectar o Grove Vision AI V2

<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/i2c-connect.jpg" width={420} height="auto" /></p>

Usando um cabo Grove para conectar o Grove Vision AI V2 a qualquer placa MCU.

</TabItem>
<TabItem value="uart" label="Compatível com XIAO" default>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" width={420} height="auto" /></p>

Dessa forma você pode usar não apenas **UART** mas também **I2C** para estabelecer uma conexão.

:::tip Serial Baudrate
Para alta capacidade de resposta, a taxa de baud serial do Grove Vision V2 é `921600` por padrão.
Portanto, você precisará usar serial de hardware em vez de serial por software para conectar.
:::
</TabItem>
</Tabs>

## *Exemplo 1:* Capturar uma imagem

:::tip a função de invoke?
Confira [invoke - FAQ](#faq_invoke)
:::

```cpp
// invoke once, no filter, contain image
if (!AI.invoke(1, false, true)){
   if (AI.last_image().length() > 0){
      Serial.print("Last image:");
      Serial.println(AI.last_image());
   }
}
```

`AI.last_image()` é uma string, que contém os dados da imagem (JPEG) codificados em base64. [🖱️quer aprender como analisá-la?](#base64tojpeg)

### Código completo

<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

<!-- I2C -->

```cpp
#include <Seeed_Arduino_SSCMA.h>
SSCMA AI;

void setup()
{
    AI.begin();
    Serial.begin(9600);
}

void loop()
{
    // invoke once, no filter, get image
    if (!AI.invoke(1, false, true)){
        if (AI.last_image().length() > 0){
            Serial.print("Last image:");
            Serial.println(AI.last_image());
        }
    }
}
```

</TabItem>
<TabItem value="xiao" label="Compatível com XIAO (UART)" default>

<!-- UART Image-->
```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// Define two Serial devices mapped to the two internal UARTs
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup()
{
   AI.begin(&atSerial);
   Serial.begin(9600);
}

void loop()
{
    // invoke once, no filter, get image
    if (!AI.invoke(1, false, true)){
        if (AI.last_image().length() > 0){
            Serial.print("Last image:");
            Serial.println(AI.last_image());
        }
    }
}
```

</TabItem>
</Tabs>

<table align="center">
 <tr>
     <th>Conectar dispositivos</th>
     <th>Enviar firmware</th>
        <th>Monitor</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_connect.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_code.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_monitor.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

## *Exemplo 2:* Obter resultado de inferência

### Código completo

<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

```cpp
#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup() {
  AI.begin();
  Serial.begin(9600);
}

void loop() {
  if (!AI.invoke(1, false, false)) { // invoke once, no filter, not contain image
    Serial.println("invoke success");
    Serial.print("perf: prepocess=");
    Serial.print(AI.perf().prepocess);
    Serial.print(", inference=");
    Serial.print(AI.perf().inference);
    Serial.print(", postpocess=");
    Serial.println(AI.perf().postprocess);

    for (int i = 0; i < AI.boxes().size(); i++) {
      Serial.print("Box[");
      Serial.print(i);
      Serial.print("] target=");
      Serial.print(AI.boxes()[i].target);
      Serial.print(", score=");
      Serial.print(AI.boxes()[i].score);
      Serial.print(", x=");
      Serial.print(AI.boxes()[i].x);
      Serial.print(", y=");
      Serial.print(AI.boxes()[i].y);
      Serial.print(", w=");
      Serial.print(AI.boxes()[i].w);
      Serial.print(", h=");
      Serial.println(AI.boxes()[i].h);
    }
    for (int i = 0; i < AI.classes().size(); i++) {
      Serial.print("Class[");
      Serial.print(i);
      Serial.print("] target=");
      Serial.print(AI.classes()[i].target);
      Serial.print(", score=");
      Serial.println(AI.classes()[i].score);
    }
    for (int i = 0; i < AI.points().size(); i++) {
      Serial.print("Point[");
      Serial.print(i);
      Serial.print("]: target=");
      Serial.print(AI.points()[i].target);
      Serial.print(", score=");
      Serial.print(AI.points()[i].score);
      Serial.print(", x=");
      Serial.print(AI.points()[i].x);
      Serial.print(", y=");
      Serial.println(AI.points()[i].y);
    }
    for (int i = 0; i < AI.keypoints().size(); i++) {
      Serial.print("keypoint[");
      Serial.print(i);
      Serial.print("] target=");
      Serial.print(AI.keypoints()[i].box.target);
      Serial.print(", score=");
      Serial.print(AI.keypoints()[i].box.score);
      Serial.print(", box:[x=");
      Serial.print(AI.keypoints()[i].box.x);
      Serial.print(", y=");
      Serial.print(AI.keypoints()[i].box.y);
      Serial.print(", w=");
      Serial.print(AI.keypoints()[i].box.w);
      Serial.print(", h=");
      Serial.print(AI.keypoints()[i].box.h);
      Serial.print("], points:[");
      for (int j = 0; j < AI.keypoints()[i].points.size(); j++) {
        Serial.print("[");
        Serial.print(AI.keypoints()[i].points[j].x);
        Serial.print(",");
        Serial.print(AI.keypoints()[i].points[j].y);
        Serial.print("],");
      }
      Serial.println("]");
    }
  }
}
```

</TabItem>
<TabItem value="uart" label="Compatível com XIAO (UART)" default>

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// Define two Serial devices mapped to the two internal UARTs
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup() {
  AI.begin( & atSerial);
  Serial.begin(9600);
}

void loop() {
  if (!AI.invoke(1, false, false)) { // invoke once, no filter, not contain image
    Serial.println("invoke success");
    Serial.print("perf: prepocess=");
    Serial.print(AI.perf().prepocess);
    Serial.print(", inference=");
    Serial.print(AI.perf().inference);
    Serial.print(", postpocess=");
    Serial.println(AI.perf().postprocess);

    for (int i = 0; i < AI.boxes().size(); i++) {
      Serial.print("Box[");
      Serial.print(i);
      Serial.print("] target=");
      Serial.print(AI.boxes()[i].target);
      Serial.print(", score=");
      Serial.print(AI.boxes()[i].score);
      Serial.print(", x=");
      Serial.print(AI.boxes()[i].x);
      Serial.print(", y=");
      Serial.print(AI.boxes()[i].y);
      Serial.print(", w=");
      Serial.print(AI.boxes()[i].w);
      Serial.print(", h=");
      Serial.println(AI.boxes()[i].h);
    }
    for (int i = 0; i < AI.classes().size(); i++) {
      Serial.print("Class[");
      Serial.print(i);
      Serial.print("] target=");
      Serial.print(AI.classes()[i].target);
      Serial.print(", score=");
      Serial.println(AI.classes()[i].score);
    }
    for (int i = 0; i < AI.points().size(); i++) {
      Serial.print("Point[");
      Serial.print(i);
      Serial.print("]: target=");
      Serial.print(AI.points()[i].target);
      Serial.print(", score=");
      Serial.print(AI.points()[i].score);
      Serial.print(", x=");
      Serial.print(AI.points()[i].x);
      Serial.print(", y=");
      Serial.println(AI.points()[i].y);
    }
    for (int i = 0; i < AI.keypoints().size(); i++) {
      Serial.print("keypoint[");
      Serial.print(i);
      Serial.print("] target=");
      Serial.print(AI.keypoints()[i].box.target);
      Serial.print(", score=");
      Serial.print(AI.keypoints()[i].box.score);
      Serial.print(", box:[x=");
      Serial.print(AI.keypoints()[i].box.x);
      Serial.print(", y=");
      Serial.print(AI.keypoints()[i].box.y);
      Serial.print(", w=");
      Serial.print(AI.keypoints()[i].box.w);
      Serial.print(", h=");
      Serial.print(AI.keypoints()[i].box.h);
      Serial.print("], points:[");
      for (int j = 0; j < AI.keypoints()[i].points.size(); j++) {
        Serial.print("[");
        Serial.print(AI.keypoints()[i].points[j].x);
        Serial.print(",");
        Serial.print(AI.keypoints()[i].points[j].y);
        Serial.print("],");
      }
      Serial.println("]");
    }
  }
}
```

</TabItem>
</Tabs>

<table align="center">
 <tr>
     <th>Conectar dispositivos</th>
     <th>Carregar firmware</th>
      <th>Monitorar</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_connect.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/reference_code.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/reference_monitor.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

## *Exemplo 3:* Salvando imagens JPEG no cartão SD

> Mais detalhes na seção [Set action trigger - AT protocol](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md#set-action-trigger-experimental).

O módulo Grove Vision AI V2 permite salvar imagens JPEG diretamente em um cartão SD externo. Para garantir compatibilidade, é recomendável formatar o cartão SD como ***FAT32*** com um tamanho de cluster de `8192` ou usar o sistema de arquivos **exFAT**. Ao salvar imagens, o módulo cria automaticamente um caminho de salvamento padrão chamado `Grove Vision AI (V2) Export` se ele ainda não existir.

:::info atenção

- Certifique-se de que a versão do firmware seja posterior a 18/04/2024.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/jpeg_format_sd.png" alt="filesystem" width={220} height="auto" /></p>

Dentro desse caminho de salvamento, uma nova pasta é criada para cada sessão de boot quando a ação de salvamento é acionada, e o nome da pasta é um número incrementado. O nome da pasta mais recente é armazenado em um arquivo oculto chamado `.sscma` no caminho de salvamento, o qual *não deve ser modificado pelo usuário* para evitar possíveis erros.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/export_files.png" alt="export files" width={480} height="auto" /></p>

<details>
<summary>Para pré-visualizar imagens como fluxos usando Python</summary>

```python
import os
import platform
import tkinter as tk
from PIL import Image, ImageTk
import time

class ImagePlayer:
    def __init__(self, parent_directory, switch_time=1):
        self.parent_directory = parent_directory
        self.image_files = []
        self.current_index = 0
        self.switch_time = switch_time
        self.root = tk.Tk()
        self.label = tk.Label(self.root)
        self.label.pack()
        self.load_image_files()

    def load_image_files(self):
        # Get all subdirectories in the parent directory
        directories = [os.path.join(self.parent_directory, folder) for folder in os.listdir(self.parent_directory) if os.path.isdir(os.path.join(self.parent_directory, folder))]

        # Traverse subdirectories and get image file paths
        for directory in directories:
            image_files = [os.path.join(directory, file) for file in sorted(os.listdir(directory)) if file.endswith(('.jpg', '.jpeg', '.png'))]
            self.image_files.extend(image_files)

    def play_images(self):
        if self.current_index < len(self.image_files):
            image_file = self.image_files[self.current_index]
            image = Image.open(image_file)
            self.display_image(image)
            self.current_index += 1
            self.root.after(int(self.switch_time * 1000), self.play_images)
        else:
            self.root.destroy()

    def display_image(self, image):
        # Adjust the image size to fit the window
        width, height = self.root.winfo_screenwidth(), self.root.winfo_screenheight()
        image.thumbnail((width, height))

        # Convert the image to a format usable by Tkinter
        photo = ImageTk.PhotoImage(image)

        # Display the image in the label
        self.label.config(image=photo)
        self.label.image = photo

    def start(self):
        self.root.geometry("240x240")  # Set the window size
        self.root.title("Image Player")  # Set the window title

        self.root.after(0, self.play_images)  # Start playing the images
        self.root.mainloop()

# Create an ImagePlayer object and provide the parent directory path
parent_directory = r"E:\Grove Vision AI (V2) Export"
player = ImagePlayer(parent_directory, switch_time=0.3)  # Customize the image switch time here (in seconds)

# Start the image player
player.start()
```

</details>

Quando você chama `save_jpeg()`, isso significa que você envia um comando AT `AT+ACTION="save_jpeg()"` para o módulo Grove Vision AI V2.
E você deve chamá-la apenas uma vez.

Se você não quiser mais armazenar a imagem JPEG, será necessário limpar os Action Sets, mesmo que reinicie o seu módulo Grove Vision AI V2.

<div class="table-center">
<iframe width="380" height="300" src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/insert_sd_visionv2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

```cpp
void setup()
{
   atSerial.println("AT+ACTION=\"\""); // Same as `AI.clean_actions()`
   AI.clean_actions(); 
}
```

### Código Completo

<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

<!-- Saving JPEG Images to SD Card -->

```cpp
#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
  Serial.begin(9600); // Initialize serial port
  AI.begin(); 
  AI.save_jpeg();
}

void loop()
{
  static int cnt = 0;
  // every invoke it will save jpeg
  if (!AI.invoke(1, false, false)){
    Serial.printf("Record image %d\n", ++cnt);
  } 
}

```

</TabItem>
<TabItem value="uart" label="Compatível com XIAO (UART)" default>

<!-- Saving JPEG Images to SD Card -->

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// Define two Serial devices mapped to the two internal UARTs
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup()
{
  Serial.begin(9600); // Initialize serial port
  AI.begin(&atSerial);
  AI.save_jpeg();
}

void loop()
{
  static int cnt = 0;
  // every invoke it will save jpeg
  if (!AI.invoke(1, false, true)){
    Serial.printf("Record image %d\n", ++cnt);
  } 
}
```

</TabItem>
<TabItem value="at_actions" label="Verificar ações AT">

<!-- AT actions -->

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// Define two Serial devices mapped to the two internal UARTs
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup()
{
   Serial.begin(9600); // Initialize serial port
   AI.begin(&atSerial);
   AI.save_jpeg();
}

void loop()
{
  atSerial.println("AT+ACTION?"); // request to get action information

  String str_action = atSerial.readString(); // read the response
  if(str_action.indexOf("save_jpeg") > 0){ // check if the action exists
      Serial.println("save_jpeg exists");
      Serial.println("trigger action: clean_actions");
      AI.clean_actions(); // clean the action
  }else{ // if null, trigger action to save_jpeg again
      Serial.println("save_jpeg doesn't exist");
      Serial.println("trigger action: save_jpeg");
      AI.save_jpeg();
  }
  delay(5000);
}
```

:::tip
se não estiver funcionando, verifique se o cartão SD está formatado e inserido corretamente.
:::

</TabItem>
</Tabs>

<table align="center">
 <tr>
     <th>Conectar dispositivos</th>
     <th>Carregar firmware</th>
      <th>Monitorar</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_connect.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/save_image_code.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/save_image_monitor.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

## Base64 para Imagem JPEG {#base64tojpeg}

Há duas maneiras de obter a imagem decodificada quando você tenta obter a imagem JPEG em programação:

<Tabs>
<TabItem value="esp32" label="ESP32">

Se o seu MCU for um ESP32, você pode usar o seguinte código para obter a imagem:

```cpp
#include <string.h>

#include "mbedtls/base64.h"

#include <Seeed_Arduino_SSCMA.h>

#define DECODED_IMAGE_MAX_SIZE(15 * 1024) // choose your own max size_t

static unsigned char jpegImage[DECODED_IMAGE_MAX_SIZE + 1];

size_t decode_base64_image(const unsigned char * p_data, unsigned char * decoded_str) {
  if (!p_data || !decoded_str)
    return 0;

  size_t str_len = strlen((const char * ) p_data);
  size_t output_len = 0;
  // Obtain the decoded length
  int decode_ret = mbedtls_base64_decode(NULL, 0, & output_len, p_data, str_len);
  if (decode_ret == MBEDTLS_ERR_BASE64_INVALID_CHARACTER) {
    Serial.println(TAG, "Invalid character in Base64 string");
    return 0;
  }

  // Check if the decoded length is reasonable
  if (output_len == 0 || output_len > DECODED_IMAGE_MAX_SIZE) {
    Serial.println("Base64 decode output size is too large or zero.");
    return 0;
  }

  // Actual decoding operation
  decode_ret = mbedtls_base64_decode(decoded_str, DECODED_IMAGE_MAX_SIZE, & output_len, p_data, str_len);
  if (decode_ret != 0) {
    Serial.println(TAG, "Failed to decode Base64 string, error: %d", decode_ret);
    return 0;
  }

  Serial.println("str_len: %d, output_len: %d", str_len, output_len);

  return output_len;
}

SSCMA AI;

void setup() {
  AI.begin();
  Serial.begin(115200);
}

void loop() {
  if (!AI.invoke(1, false, true)) {
    if (AI.last_image().length() > 0) {
      Serial.print("Last image:");
      Serial.println(AI.last_image());
      size_t jpegImageSize = decode_base64_image(AI.last_image().c_str(), jpegImage);
      if (jpegImageSize > 0) {
        // your function to display the jpeg image
        display_jpeg_image(jpegImage, jpegImageSize);
      }
    }
  }
}
```

</TabItem>
<TabItem value="arduino" label="Arduino" default>

```cpp
#include <base64.h>

#include <Seeed_Arduino_SSCMA.h>

#define atSerial Serial1 /* Define your Serial interface */

SSCMA AI;

void setup() {
  AI.begin( & atSerial);
  Serial.begin(115200);
}

void loop() {
  // invoke once, no filter, get image
  if (!AI.invoke(1, false, true)) {
    if (AI.last_image().length() > 0) {
      String toEncode = AI.last_image();
      Serial.print("Image Code:");
      Serial.println(toEncode);
      String encoded_jpeg = base64::encode(toEncode);
      // your function to display the jpeg image
      func_display_jpeg(encoded_jpeg);
    }
  }
}
```

</TabItem>
</Tabs>

:::tip Por que Usar Codificação Base64?
Base64 é uma forma de codificar dados binários (como imagens) em uma string de caracteres ASCII. Isso permite que dados binários sejam incluídos em formatos que não suportam nativamente binário, como JSON.

A codificação Base64 é usada para evitar transmitir dados binários diretamente por meio de protocolos baseados em texto (como HTTP, JSON, XML). Ela também evita a necessidade de bibliotecas adicionais de análise, já que a maioria das linguagens de programação possui funções integradas de codificação/decodificação Base64. Base64 permite que dados binários sejam transmitidos com segurança como texto ASCII padrão e facilmente decodificados de volta à sua forma binária original.

Existem muitas ferramentas online que facilitam a decodificação de Base64 para uma imagem, tais como:
[Base64 Online Decoder](https://base64.guru/converter/decode/image)
Basta colar a string Base64 na ferramenta e ela exibirá a imagem decodificada.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/e.g.base64.png" width={420} height="auto" /></p>

## Personalização e Desenvolvimento com SDK

Para usuários que precisam de mais personalização e funcionalidades avançadas, o Grove Vision AI V2 também oferece suporte a desenvolvimento via SDK. O chip controlador principal Himax do módulo pode ser programado diretamente usando o SDK fornecido, permitindo projetos de nível industrial com recursos altamente personalizados.

Usuários interessados em desenvolvimento com SDK podem consultar os exemplos existentes, como o [sdio_app](https://github.com/Seeed-Studio/sscma-example-we2/tree/main/EPII_CM55M_APP_S/app/scenario_app/sdio_app), que demonstra operações SDIO diretas. Esses exemplos servem como ponto de partida para modificar e implementar projetos personalizados.

Aproveitando a potência do SDK, os usuários podem liberar todo o potencial do Grove Vision AI V2 e criar soluções sob medida para suas necessidades específicas. Siga [a página wiki anterior](/pt-br/grove_vision_ai_v2_himax_sdk) para obter mais orientações.

## FAQ & Solução de Problemas

### Qual é a função de invoke? {#faq_invoke}

Sempre que for obter o valor de dados do Grove Vision V2, é necessário chamar a função `invoke`:

```cpp
/**
 * @brief Invoke the algorithm for a specified number of times
 * 
 * This function invokes the algorithm for a specified number of times and waits for the response and event.
 * The result can be filtered based on the difference from the previous result, and the event reply can be
 * configured to contain only the result data or include the image data as well.
 *
 * @param times The number of times to invoke the algorithm
 * @param filter If true, the event reply will only be sent if the last result is different from the previous result
 *               (compared by geometry and score)
 * @param show If true, the event reply will also contain the image data; if false, the event reply will *only contain* the result data
 * @return int Returns CMD_OK if the invocation is successful and the response and event are received within the timeout;
 *             otherwise, returns CMD_ETIMEDOUT
 *
 * Pattern: AT+INVOKE=<N_TIMES,DIFFERED,RESULT_ONLY>\r
 * Request: AT+INVOKE=1,0,1\r
 */
int SSCMA::invoke(int times, bool filter, bool show);
```

### O que `AI.begin()` faz? {#faq_begin}

:::info
Se você usar `SSCMA.begin()`, ele usa por padrão I2C (Wire) para comunicação, conforme definido no cabeçalho da função:

```cpp
bool begin(TwoWire *wire = &Wire, int32_t rst = -1, uint16_t address = I2C_ADDRESS,
      uint32_t wait_delay = 2, uint32_t clock = SSCMA_IIC_CLOCK);
```

:::

## Recursos

- [Manual de referência de comandos AT](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)
- [Seeed Arduino SSCMA - Biblioteca Arduino](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA)

## Referências

- [WiseEye2 AI Processor - Himax](https://www.himax.com.tw/products/wiseeye-ai-sensing/wiseeye2-ai-processor/)
- [WIseEye2 Technical Highlights](https://himaxwiseeyeplus.github.io/)

## Contribuindo

Agradecemos contribuições de qualquer forma! Se você quiser contribuir com esta página, você pode:

- Relate bugs ou sugira novos recursos abrindo uma [issue](https://github.com/Seeed-Studio/wiki-documents/issues)
- Envie melhorias ou correções de página criando um [pull request](https://github.com/Seeed-Studio/wiki-documents/pulls)
- Melhore a documentação sugerindo edições ou adições
- Ajude a responder perguntas ou oferecer suporte a outros usuários
- Compartilhe o produto com outras pessoas que possam achá-lo útil

Para começar, leia nossas [Diretrizes de Contribuição](https://raw.githubusercontent.com/Seeed-Studio/wiki-documents/docusaurus-version/CONTRIBUTING.md) para mais informações sobre como contribuir e o processo para enviar pull requests.

Agradecemos todas as contribuições e obrigado por nos ajudar a torná-lo melhor!

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
