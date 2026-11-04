---
description: Este tutorial explicará como usar corretamente a câmera no XIAO ESP32S3 Sense.
title: Uso da Câmera para Versão Sense
keywords:
  - xiao esp32s3
  - esp32s3
  - camera
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_camera_usage
last_update:
  date: 04/17/2023
  author: Citric
createdAt: '2022-11-15'
updatedAt: '2025-12-24'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_camera_usage/
---

# Uso da Câmera no Seeed Studio XIAO ESP32S3 Sense

:::tip
O conteúdo deste tutorial é aplicável apenas ao Seeed Studio XIAO ESP32S3 Sense.
:::

Neste tutorial, vamos guiá-lo no uso do módulo de câmera no XIAO ESP32S3 Sense. Este tutorial é dividido nas seguintes partes: primeiro, explicaremos a função de câmera fornecida pelo ESP32 e suas funções. Em seguida, mostraremos como usar a câmera em duas dimensões: tirar fotos e gravar vídeos e, por fim, criaremos alguns projetos interessantes em torno de tirar fotos e gravar vídeos.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Introdução

Este tutorial pode envolver o uso de cartão microSD, câmera, antena, etc. Prepare os seguintes materiais e instale-os corretamente de acordo com as necessidades do seu projeto.

#### Instalação da antena

No canto inferior esquerdo da frente do XIAO ESP32S3, há um "WiFi/BT Antenna Connector" separado. Para obter um sinal melhor de WiFi/Bluetooth, você precisa pegar a antena dentro da embalagem e instalá-la no conector.

Existe um pequeno truque para a instalação da antena: se você pressioná-la com força diretamente para baixo, verá que é muito difícil pressionar e seus dedos vão doer! A maneira correta de instalar a antena é colocar primeiro um lado do conector da antena no bloco do conector, depois pressionar um pouco o outro lado, e a antena será instalada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

### Instalação das placas de expansão (para Sense)

Instalar a placa de expansão é muito simples, você só precisa alinhar o conector na placa de expansão com o conector B2B no XIAO ESP32S3, pressionar com firmeza e ouvir um "clique", e a instalação estará concluída.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

Agora temos uma nova câmera poderosa totalmente compatível com o XIAO ESP32S3 Sense, a OV5640, disponível em nossas prateleiras e, se você a adquirir, poderá substituir a câmera para usá-la.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

Se você precisar conhecer as informações detalhadas dos parâmetros da OV5640, pode consultar o gráfico a seguir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Todos os programas sobre câmeras na Wiki são compatíveis com as câmeras OV5640 e OV2640.
:::

### Prepare o cartão microSD

O XIAO ESP32S3 Sense suporta cartões microSD de até **32GB**, portanto, se você estiver pronto para comprar um cartão microSD para o XIAO, consulte esta especificação. E formate o cartão microSD para o formato **FAT32** antes de usá-lo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

Após a formatação, você pode inserir o cartão microSD no slot de cartão microSD. Observe a direção de inserção, o lado com o "gold finger" deve ficar voltado para dentro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

### Projeto do circuito do slot da câmera para placas de expansão

O slot de cartão do XIAO ESP32S3 Sense ocupa 14 GPIOs do ESP32-S3, e os detalhes dos pinos ocupados são mostrados na tabela abaixo.

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">Camera</th>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">Camera</th>
        </tr>
        <tr>
            <td align="center">GPIO10</td>
            <td align="center">XMCLK</td>
            <td align="center">GPIO11</td>
            <td align="center">DVP_Y8</td>
        </tr>
        <tr>
            <td align="center">GPIO12</td>
            <td align="center">DVP_Y7</td>
            <td align="center">GPIO13</td>
            <td align="center">DVP_PCLK</td>
        </tr>
        <tr>
            <td align="center">GPIO14</td>
            <td align="center">DVP_Y6</td>
            <td align="center">GPIO15</td>
            <td align="center">DVP_Y2</td>
        </tr>
        <tr>
            <td align="center">GPIO16</td>
            <td align="center">DVP_Y5</td>
            <td align="center">GPIO17</td>
            <td align="center">DVP_Y3</td>
        </tr>
        <tr>
            <td align="center">GPIO18</td>
            <td align="center">DVP_Y4</td>
            <td align="center">GPIO38</td>
            <td align="center">DVP_VSYNC</td>
        </tr>
        <tr>
            <td align="center">GPIO39</td>
            <td align="center">CAM_SCL</td>
            <td align="center">GPIO40</td>
            <td align="center">CAM_SDA</td>
        </tr>
        <tr>
            <td align="center">GPIO47</td>
            <td align="center">DVP_HREF</td>
            <td align="center">GPIO48</td>
            <td align="center">DVP_Y9</td>
        </tr>
    </table>
</div>

### Ativar a opção PSRAM

A PSRAM do ESP32 refere-se à PSRAM externa (Pseudo Static Random Access Memory) no chip ESP32, que fornece espaço de memória adicional para aumentar a memória disponível do sistema ESP32. No sistema ESP32, a PSRAM tem os seguintes usos principais:

1. Estender a RAM disponível: a RAM interna do ESP32 é limitada, especialmente para algumas aplicações que precisam de muita memória, como processamento de imagem, processamento de áudio, etc., a RAM interna pode não ser suficiente. Ao usar a PSRAM, a RAM disponível do ESP32 pode ser estendida para atender às necessidades dessas aplicações.

2. Acelerar o acesso à memória: como a PSRAM é uma memória externa, a velocidade de acesso é mais lenta do que a RAM interna, porém ela pode ser usada como cache ou memória temporária para acelerar o acesso à memória e o processamento de dados.

3. Armazenar buffers: para aplicações que exigem buffers grandes, como buffers de rede, buffers de áudio, etc., a PSRAM pode fornecer espaço de armazenamento suficiente para evitar situações de falta de memória.

Para o conteúdo deste tutorial, você **precisa ativar a função PSRAM** da Arduino IDE para garantir que a câmera funcione corretamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:700, height:'auto'}}/></div>

## Visão geral da biblioteca da câmera

Antes de começarmos, recomendamos que você leia este capítulo para entender as funções comuns da câmera. Assim, você poderá usar essas funções para concluir o desenvolvimento do seu próprio projeto ou conseguir ler o programa com mais facilidade.

### Parte I: esp_camera.h

1. Estrutura de configuração para inicialização da câmera.

A seguir está um exemplo da configuração, basta preencher de acordo com a situação real dos pinos.

```cpp
static camera_config_t camera_example_config = {
        .pin_pwdn       = PWDN_GPIO_NUM,
        .pin_reset      = RESET_GPIO_NUM,
        .pin_xclk       = XCLK_GPIO_NUM,
        .pin_sccb_sda   = SIOD_GPIO_NUM,
        .pin_sccb_scl   = SIOC_GPIO_NUM,
        .pin_d7         = Y9_GPIO_NUM,
        .pin_d6         = Y8_GPIO_NUM,
        .pin_d5         = Y7_GPIO_NUM,
        .pin_d4         = Y6_GPIO_NUM,
        .pin_d3         = Y5_GPIO_NUM,
        .pin_d2         = Y4_GPIO_NUM,
        .pin_d1         = Y3_GPIO_NUM,
        .pin_d0         = Y2_GPIO_NUM,
        .pin_vsync      = VSYNC_GPIO_NUM,
        .pin_href       = HREF_GPIO_NUM,
        .pin_pclk       = PCLK_GPIO_NUM,

        .xclk_freq_hz   = 20000000, // The clock frequency of the image sensor
        .fb_location = CAMERA_FB_IN_PSRAM; // Set the frame buffer storage location
        .pixel_format   = PIXFORMAT_JPEG, // The pixel format of the image: PIXFORMAT_ + YUV422|GRAYSCALE|RGB565|JPEG
        .frame_size     = FRAMESIZE_UXGA, // The resolution size of the image: FRAMESIZE_ + QVGA|CIF|VGA|SVGA|XGA|SXGA|UXGA
        .jpeg_quality   = 12, // The quality of the JPEG image, ranging from 0 to 63.
        .fb_count       = 2, // The number of frame buffers to use.
        .grab_mode      = CAMERA_GRAB_WHEN_EMPTY //  The image capture mode.
    };
```

2. Inicializar o driver da câmera.

Depois de configurar `camera_example_config` no formato acima, precisamos usar esta função para inicializar o driver da câmera.

```cpp
esp_err_t esp_camera_init(const camera_config_t* config);
```

- **Parâmetros de entrada**: parâmetros de configuração da câmera

- **Saída**: ESP_OK em caso de sucesso

:::note
Atualmente esta função só pode ser chamada uma vez e não há como desinicializar este módulo.
:::

3. Obter ponteiro para um frame buffer.

```cpp
camera_fb_t* esp_camera_fb_get();
```

Estrutura de dados do frame buffer da câmera:

```cpp
typedef struct {
    uint8_t * buf;              /*!< Pointer to the pixel data */
    size_t len;                 /*!< Length of the buffer in bytes */
    size_t width;               /*!< Width of the buffer in pixels */
    size_t height;              /*!< Height of the buffer in pixels */
    pixformat_t format;         /*!< Format of the pixel data */
    struct timeval timestamp;   /*!< Timestamp since boot of the first DMA buffer of the frame */
} camera_fb_t;
```

4. Devolva o buffer de quadro para ser reutilizado novamente.

```cpp
void esp_camera_fb_return(camera_fb_t * fb);
```

- **Parâmetros de entrada**: ponteiro para o buffer de quadro

5. Obtenha um ponteiro para a estrutura de controle do sensor de imagem.

```cpp
sensor_t * esp_camera_sensor_get();
```

- **Saída**: ponteiro para o sensor

6. Salve as configurações da câmera na memória não volátil (NVS).

```cpp
esp_err_t esp_camera_save_to_nvs(const char *key);
```

- **Parâmetros de entrada**: um nome de chave NVS exclusivo para as configurações da câmera

7. Carregue as configurações da câmera da memória não volátil (NVS).

```cpp
esp_err_t esp_camera_load_from_nvs(const char *key);
```

- **Parâmetros de entrada**: um nome de chave NVS exclusivo para as configurações da câmera

### Parte II: img_converters.h

1. Converter buffer de imagem para JPEG.

```cpp
bool fmt2jpg_cb(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **Parâmetros de entrada**:
  - **src**:       Buffer de origem no formato RGB565, RGB888, YUYV ou GRAYSCALE
  - **src_len**:   Comprimento em bytes do buffer de origem
  - **width**:     Largura em pixels da imagem de origem
  - **height**:    Altura em pixels da imagem de origem
  - **format**:    Formato da imagem de origem
  - **quality**:   Qualidade JPEG da imagem resultante
  - **cp**:        Callback a ser chamado para gravar os bytes do JPEG de saída
  - **arg**:       Ponteiro a ser passado para o callback

- **Saída**: true em caso de sucesso

2. Converter buffer de quadro da câmera para JPEG.

```cpp
bool frame2jpg_cb(camera_fb_t * fb, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **Parâmetros de entrada**:
  - **fb**:       Buffer de quadro da câmera de origem
  - **quality**:  Qualidade JPEG da imagem resultante
  - **cp**:       Callback a ser chamado para gravar os bytes do JPEG de saída
  - **arg**:      Ponteiro a ser passado para o callback

- **Saída**: true em caso de sucesso

3. Converter buffer de imagem para buffer JPEG.

```cpp
bool fmt2jpg(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **Parâmetros de entrada**:
  - **src**:       Buffer de origem no formato RGB565, RGB888, YUYV ou GRAYSCALE
  - **src_len**:   Comprimento em bytes do buffer de origem
  - **width**:     Largura em pixels da imagem de origem
  - **height**:    Altura em pixels da imagem de origem
  - **format**:    Formato da imagem de origem
  - **quality**:   Qualidade JPEG da imagem resultante
  - **out**:       Ponteiro a ser preenchido com o endereço do buffer resultante. Você DEVE liberar o ponteiro quando terminar de usá-lo.
  - **out_len**:   Ponteiro a ser preenchido com o comprimento do buffer de saída

- **Saída**: true em caso de sucesso

4. Converter buffer de quadro da câmera para buffer JPEG.

```cpp
bool frame2jpg(camera_fb_t * fb, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **Parâmetros de entrada**:
  - **fb**:       Buffer de quadro da câmera de origem
  - **quality**:  Qualidade JPEG da imagem resultante
  - **out**:      Ponteiro a ser preenchido com o endereço do buffer resultante
  - **out_len**:  Ponteiro a ser preenchido com o comprimento do buffer de saída

- **Saída**: true em caso de sucesso

5. Converter buffer de imagem para buffer BMP.

```cpp
bool fmt2bmp(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t ** out, size_t * out_len);
```

- **Parâmetros de entrada**:
  - **src**:       Buffer de origem no formato RGB565, RGB888, YUYV ou GRAYSCALE
  - **src_len**:   Comprimento em bytes do buffer de origem
  - **width**:     Largura em pixels da imagem de origem
  - **height**:    Altura em pixels da imagem de origem
  - **format**:    Formato da imagem de origem
  - **quality**:   Qualidade JPEG da imagem resultante
  - **out**:       Ponteiro a ser preenchido com o endereço do buffer resultante.
  - **out_len**:   Ponteiro a ser preenchido com o comprimento do buffer de saída

- **Saída**: true em caso de sucesso

6. Converter buffer de quadro da câmera para buffer BMP.

```cpp
bool frame2bmp(camera_fb_t * fb, uint8_t ** out, size_t * out_len);
```

- **Parâmetros de entrada**:
  - **fb**:       Buffer de quadro da câmera de origem
  - **quality**:  Qualidade JPEG da imagem resultante
  - **cp**:       Callback a ser chamado para gravar os bytes do JPEG de saída
  - **arg**:      Ponteiro a ser passado para o callback

- **Saída**: true em caso de sucesso

### Parte III: app_httpd.cpp

:::note
Esta parte da introdução da biblioteca é baseada na seção Create a video preservation terminal -- Based WebServer. Esta biblioteca é usada principalmente para executar funções de aquisição de imagem e reconhecimento facial para o servidor web. Ela não está incluída diretamente no pacote onboard do ESP.
:::

1. Função de reconhecimento facial.

```cpp
static int run_face_recognition(fb_data_t *fb, std::list<dl::detect::result_t> *results)
```

- **Parâmetros de entrada**:
  - **fb**: um ponteiro para uma struct que representa um buffer de quadro contendo dados de imagem.
  - **results**: um ponteiro para uma lista de resultados de faces detectadas.

2. Lida com solicitações HTTP para arquivos de imagem BMP.

```cpp
static esp_err_t bmp_handler(httpd_req_t *req)
```

- **Parâmetros de entrada**: um ponteiro para uma struct que representa a solicitação HTTP.

3. Codifica dados de imagem JPEG de forma contínua (streaming).

```cpp
static size_t jpg_encode_stream(void *arg, size_t index, const void *data, size_t len)
```

- **Parâmetros de entrada**:
  - **arg**: um ponteiro para um argumento definido pelo usuário que é passado para a função.
  - **index**: um valor de índice indicando a posição atual dentro dos dados da imagem.
  - **data**: um ponteiro para um buffer contendo os dados de imagem a serem codificados.
  - **len**: o comprimento do buffer de dados.

4. Lida com solicitações HTTP para captura e transmissão contínua de imagens da câmera.

```cpp
static esp_err_t capture_handler(httpd_req_t *req)
```

- **Parâmetros de entrada**: um ponteiro para uma struct que representa a solicitação HTTP.

5. Lida com solicitações HTTP para transmissão contínua de vídeo de uma câmera.

```cpp
static esp_err_t stream_handler(httpd_req_t *req)
```

- **Parâmetros de entrada**: um ponteiro para uma struct que representa a solicitação HTTP.

6. Inicializa e inicia um servidor de câmera que captura e transmite vídeo via HTTP.

```cpp
void startCameraServer()
```


## Tirando fotos com a câmera

Em seguida, começamos com o uso mais básico da câmera, por exemplo, primeiro usaremos a câmera para concluir a aquisição de imagem. No primeiro projeto usaremos o cartão microSD, a principal tarefa deste programa é obter as imagens da câmera a cada minuto e depois salvar essas imagens no cartão microSD.

Antes de começar, faça como eu fiz e instale o cartão microSD e a câmera.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/91.jpg" style={{width:300, height:'auto'}}/></div>

Você pode encontrar o código completo do programa e os arquivos de dependência necessários no link abaixo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/take_photos" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aqui está o programa Arduino para este projeto.

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"
#include "ESP32_OV5640_AF.h"   // OV5640 auto-focus library (github.com/0015/ESP32-OV5640-AF)

OV5640 ov5640 = OV5640();

#define OV5640_AF_FOCUS_FRAMESIZE FRAMESIZE_SXGA // AF focusing requires >=1280x1024
#define OV5640_FOCUS_TIMEOUT_MS  8000

unsigned long lastCaptureTime = 0; // Last shooting time
int imageCount = 1;                // File Counter
bool camera_sign = false;          // Check camera status
bool sd_sign = false;              // Check sd status

// Save pictures to SD card
void photo_save(const char * fileName) {
  // Take a photo
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Failed to get camera frame buffer");
    return;
  }
  // Save photo to file
  writeFile(SD, fileName, fb->buf, fb->len);

  // Release image buffer
  esp_camera_fb_return(fb);

  Serial.println("Photo saved to file");
}

// SD card write file
void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("Writing file: %s\r\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("Failed to open file for writing");
        return;
    }
    if(file.write(data, len) == len){
        Serial.println("File written");
    } else {
        Serial.println("Write failed");
    }
    file.close();
}

// Wait for the OV5640 continuous auto-focus to settle (FW_STATUS == 0x10 FOCUSED)
bool waitForOv5640Focus() {
  const uint32_t started = millis();
  uint8_t status = 0;
  while (millis() - started < OV5640_FOCUS_TIMEOUT_MS) {
    status = ov5640.getFWStatus();
    if (status == 0x10) {
      Serial.printf("OV5640 focus settled: FW_STATUS=0x%02X\n", status);
      return true;
    }
    delay(100);
  }
  Serial.printf("ERROR: OV5640 focus not settled within %u ms; last FW_STATUS=0x%02X\n",
                OV5640_FOCUS_TIMEOUT_MS, status);
  return false;
}

void setup() {
  Serial.begin(115200);
  while(!Serial); // When the serial monitor is turned on, the program starts to execute

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG; // for streaming
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limit the frame size when PSRAM is not available
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // Best option for face detection/recognition
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  camera_sign = true; // Camera initialization check passes

  // --- OV5640 auto-focus init (a key step missing from factory firmware; without it the lens defaults out of focus) ---
  sensor_t *s = esp_camera_sensor_get();
  if (s && s->id.PID == OV5640_PID) {
    Serial.println("OV5640 detected, initializing auto-focus...");
    // Switch to SXGA for focusing (the AF firmware needs >=1280x1024 to evaluate contrast)
    if (s->set_framesize(s, OV5640_AF_FOCUS_FRAMESIZE) != 0) {
      Serial.println("WARN: cannot set SXGA for AF focus, captures will be out of focus");
    } else if (!ov5640.start(s)) {
      Serial.println("WARN: OV5640 CHIPID check failed, AF skipped");
      s->set_framesize(s, config.frame_size); // restore the capture framesize
    } else {
      int r1 = ov5640.focusInit();                       // load focus firmware, 0 = success
      int r2 = (r1 == 0) ? ov5640.autoFocusMode() : -1;  // enable continuous auto-focus
      Serial.printf("  focusInit=%d autoFocusMode=%d\n", r1, r2);
      if (r1 == 0 && r2 == 0 && waitForOv5640Focus()) {
        Serial.println("OV5640 AF ready.");
      } else {
        Serial.println("ERROR: OV5640 AF setup failed; captures will be out of focus.");
      }
      // Restore the capture framesize
      if (s->set_framesize(s, config.frame_size) != 0) {
        Serial.println("WARN: cannot restore capture framesize");
      }
    }
  }

  // Initialize SD card
  if(!SD.begin(21)){
    Serial.println("Card Mount Failed");
    return;
  }
  uint8_t cardType = SD.cardType();

  // Determine if the type of SD card is available
  if(cardType == CARD_NONE){
    Serial.println("No SD card attached");
    return;
  }

  Serial.print("SD Card Type: ");
  if(cardType == CARD_MMC){
    Serial.println("MMC");
  } else if(cardType == CARD_SD){
    Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
  } else {
    Serial.println("UNKNOWN");
  }

  sd_sign = true; // sd initialization check passes

  Serial.println("Photos will begin in one minute, please be ready.");
}

void loop() {
  // Camera & SD available, start taking pictures
  if(camera_sign && sd_sign){
    // Get the current time
    unsigned long now = millis();

    //If it has been more than 1 minute since the last shot, take a picture and save it to the SD card
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("Saved picture: %s\r\n", filename);
      Serial.println("Photos will begin in one minute, please be ready.");
      imageCount++;
      lastCaptureTime = now;
    }
  }
}
```

:::note
A compilação e o upload deste programa exigem duas outras dependências, acesse o GitHub e faça o download completo delas.
:::

Envie o programa para o XIAO ESP32S3, e após o upload ser concluído com sucesso, ligue o monitor serial, ajuste a câmera para ficar voltada para o objeto que você deseja fotografar, aguarde um minuto e a foto será salva no cartão SD. Em seguida, o XIAO tirará uma foto a cada minuto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/89.png" style={{width:700, height:'auto'}}/></div>

Remova o cartão microSD e, com a ajuda de um leitor de cartões, você poderá ver as fotos salvas dentro do cartão.

### Anotação do programa

O programa começa com as bibliotecas da câmera e do cartão SD que precisamos usar, e a importação de alguns arquivos de dependência de pinos que definimos para o XIAO ESP32S3.

Em seguida, para facilitar a leitura, definimos duas funções uma após a outra: uma é a função `photo_save()` que salva a imagem capturada no cartão SD, e a outra é a função `writeFile()` que grava o arquivo.

```cpp
// Save pictures to SD card
void photo_save(const char * fileName) {
  // Take a photo
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Failed to get camera frame buffer");
    return;
  }
  // Save photo to file
  writeFile(SD, fileName, fb->buf, fb->len);

  // Release image buffer
  esp_camera_fb_return(fb);

  Serial.println("Photo saved to file");
}
```

Na função que salva a imagem no cartão microSD, duas tarefas principais são realizadas. A primeira é a aquisição da imagem e a segunda é a chamada da função que grava o arquivo.

A obtenção da imagem pode ser feita com `esp_camera_fb_get()`, as informações da imagem serão salvas no ponteiro `fb`, e então podemos gravar o `buf` de `fb` no cartão SD.

Na função `Setup()`, um grande trecho do programa está configurando os pinos da câmera e a inicialização da câmera; podemos simplesmente aplicá‑lo diretamente como padrão. Se você tiver requisitos para os pixels ou a qualidade da câmera, pode ajustar os valores internos de acordo com as funções descritas no capítulo [Camera Library Overview](#visão-geral-da-biblioteca-da-câmera).

A última coisa a fazer na função `loop()` é controlar para que as fotos sejam tiradas a cada minuto e seguir o número incremental como sufixo do nome de arquivo das fotos tiradas.

```cpp
if(camera_sign && sd_sign){
    // Get the current time
    unsigned long now = millis();

    //If it has been more than 1 minute since the last shot, take a picture and save it to the SD card
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("Saved picture：%s\n", filename);
      Serial.println("Photos will begin in one minute, please be ready.");
      imageCount++;
      lastCaptureTime = now;
    }
  }
```

Antes de executar o `loop()`, configuramos duas verificações de sinalizadores `camera_sign` e `sd_sign`. Isso garante que a tarefa de tirar e salvar fotos só seja executada depois que as verificações da câmera e do cartão SD tiverem sido concluídas com sucesso em `Setup()`.

## Projeto I: Fazendo uma câmera portátil

Em seguida, usamos o conhecimento teórico acima para criar um artefato de fotografia super pequeno. O resultado final deste projeto é que o feed ao vivo da câmera é exibido no Seeed Studio Round Display for XIAO e, quando você travar o objeto que deseja fotografar, toque na tela e tire uma foto para registrar no cartão microSD.

### Preparação preliminar

Antes de iniciar este projeto, você precisará preparar antecipadamente o seguinte hardware.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Round Display for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

Como este projeto usará o Round Display for XIAO, leia o conteúdo de **[Wiki environment configuration of the display expansion board](https://wiki.seeedstudio.com/pt-br/get_start_round_display#software-preparation)**, instale as bibliotecas necessárias e configure o ambiente TFT antes de executar as rotinas deste projeto.

Como o XIAO EPS32S3 Sense foi projetado com três resistores de pull‑up R4~R6 conectados ao slot do cartão SD, e o round display também possui resistores de pull‑up, os dois slots de cartão SD entram em conflito quando ambas as placas são usadas ao mesmo tempo. Existem duas maneiras de resolver esse problema:

- **Opção 1 — sem alteração de hardware (usada pelo código de exemplo deste projeto)**: mantenha o J3 intacto e use o slot de cartão microSD no próprio XIAO ESP32S3 Sense. Conforme demonstrado pelo **engenheiro Mjrovai**, isso é possível em nível de software — o código abaixo inicializa o cartão SD com `SD_CS_PIN 21` (o leitor de cartão do Sense). Para detalhes, consulte **[os métodos e procedimentos dele](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)**.
- **Opção 2 — cortar o J3 e usar o slot do Round Display**: corte o J3 na placa de expansão do XIAO ESP32S3 Sense. Após desconectar o J3, o slot de cartão SD no XIAO ESP32S3 Sense não funcionará mais, então você precisa inserir o cartão microSD no slot de cartão SD do Round Display e alterar `SD_CS_PIN` no código de `21` para `D2`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:500, height:'auto'}}/></div>

:::tip
Se você escolher a Opção 2, recomendamos que remova primeiro o módulo da câmera para evitar arranhar a câmera ao cortar a conexão J3 com a lâmina.
:::

Em seguida, instale o cartão microSD, o XIAO ESP32S3 Sense e o Round Display nessa ordem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/101.gif" style={{width:500, height:'auto'}}/></div>

### Operação específica

Você pode encontrar o código completo do programa e os arquivos de dependência necessários no link abaixo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/round_display_take_picture_fix" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aqui está o programa Arduino para este projeto.

```c
/*
 * This code was adapted from the original, developed by Seeed Studio:
 * https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera
 *
 * Important changes:
 *  - It is not necessary to to cut off J3 on the XIAO ESP32S3 Sense expansion board.
 *  It is possible to use the XIAO's SD Card Reader. For that you need use SD_CS_PIN as 21.
 *
 * - The camera buffer data should be captured as RGB565 (raw image) with a 240x240 frame size
 * to be displayed on the round display. This raw image should be converted to jpeg before save
 * in the SD card. This can be done with the line:
 * bool ok = frame2jpg(fb, 12, &out_buf, &out_len);
 *
 * - The XCLK_FREQ_HZ should be reduced from 20KHz to 10KHz in order to prevent
 * the message "no EV-VSYNC-OVF message" that appears on Serial Monitor (probably due the time
 * added for JPEG conversion.
 *
 * Adapted by MRovai @02June23
 *
 * Generic OV5640 auto-focus patch (only applies to the OV5640; fixed-focus modules
 * such as the OV3660/NT99141 are skipped automatically):
 *  - After esp_camera_init, run focusInit / autoFocusMode only when PID == OV5640_PID
 *  - In RGB565 mode do not switch to SXGA (it would overflow the fb buffer);
 *    rely on the OV5640's internal full-size image for focus evaluation
*/

#include <Arduino.h>
#include <TFT_eSPI.h>
#include <SPI.h>
#include "esp_camera.h"
#include "ESP32_OV5640_AF.h"   // OV5640 auto-focus library (github.com/0015/ESP32-OV5640-AF), OV5640 only
#include "FS.h"
#include "SD.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM
#define TOUCH_INT D7

/*
 * NOTE: This sketch keeps J3 intact and uses the microSD card slot on the
 * XIAO ESP32S3 Sense itself (SD_CS_PIN 21), so no hardware change is needed
 * (Mjrovai's software-level method). If you have cut J3 and want to use the
 * Round Display card reader instead, comment out the 21 line and use D2.
 */

#define SD_CS_PIN 21 // ESP32S3 Sense SD Card Reader
//#define SD_CS_PIN D2 // XIAO Round Display SD Card Reader (requires J3 cut)

#include "camera_pins.h"

// Width and height of round display
const int camera_width = 240;
const int camera_height = 240;

// File Counter
int imageCount = 1;
bool camera_sign = false;          // Check camera status
bool sd_sign = false;              // Check sd status

TFT_eSPI tft = TFT_eSPI();

// --- OV5640 AF (OV5640 module only) ---
OV5640 ov5640 = OV5640();
#define OV5640_FOCUS_TIMEOUT_MS 8000

// Wait for the OV5640 continuous auto-focus to settle (FW_STATUS == 0x10 FOCUSED)
bool waitForOv5640Focus() {
  const uint32_t started = millis();
  uint8_t status = 0;
  while (millis() - started < OV5640_FOCUS_TIMEOUT_MS) {
    status = ov5640.getFWStatus();
    if (status == 0x10) {
      Serial.printf("OV5640 focus settled: FW_STATUS=0x%02X\n", status);
      return true;
    }
    delay(100);
  }
  Serial.printf("WARN: OV5640 focus not settled within %u ms; last FW_STATUS=0x%02X\n",
                OV5640_FOCUS_TIMEOUT_MS, status);
  return false;
}

// SD card write file
void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("Writing file: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("Failed to open file for writing");
        return;
    }
    if(file.write(data, len) == len){
        Serial.println("File written");
    } else {
        Serial.println("Write failed");
    }
    file.close();
}

bool display_is_pressed(void)
{
    if(digitalRead(TOUCH_INT) != LOW) {
        delay(3);
        if(digitalRead(TOUCH_INT) != LOW)
        return false;
    }
    return true;
}

void setup() {
  Serial.begin(115200);
  delay(300);
  Serial.println();
  Serial.println("==== round_display_take_picture_fix ====");

  // Camera pinout
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 10000000; // Reduced XCLK_FREQ_HZ from 20KHz to 10KHz (no EV-VSYNC-OVF message)
  config.frame_size = FRAMESIZE_240X240;
  config.pixel_format = PIXFORMAT_RGB565;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  // RGB565 240x240 uses a single internal-DRAM buffer: TFT_eSPI's SPI DMA can read
  // DRAM directly, while reading from PSRAM crashes pushColors (see the Setup66 + PSRAM issue notes)
  config.fb_location = CAMERA_FB_IN_DRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }
  Serial.println("Camera ready");
  camera_sign = true; // Camera initialization check passes

  // --- OV5640 auto-focus init (OV5640 only; fixed-focus modules are skipped) ---
  // A key step missing from factory firmware: esp_camera_init does not set up AF,
  // so the OV5640 defaults to an out-of-focus lens.
  // In RGB565 mode do not switch to SXGA (it would overflow the fb buffer);
  // rely on the OV5640's internal full-size image for focus evaluation.
  sensor_t *s = esp_camera_sensor_get();
  if (s && s->id.PID == OV5640_PID) {
    Serial.println("OV5640 detected, initializing auto-focus...");
    if (!ov5640.start(s)) {
      Serial.println("WARN: OV5640 CHIPID check failed, AF skipped");
    } else {
      int r1 = ov5640.focusInit();                       // load focus firmware, 0 = success
      int r2 = (r1 == 0) ? ov5640.autoFocusMode() : -1;  // enable continuous auto-focus
      Serial.printf("  focusInit=%d autoFocusMode=%d\n", r1, r2);
      if (r1 == 0 && r2 == 0) {
        waitForOv5640Focus();
      } else {
        Serial.println("ERROR: OV5640 AF setup failed; captures will be out of focus.");
      }
    }
  } else {
    Serial.printf("PID=0x%04X (not OV5640), AF skipped - fixed-focus module works as-is.\n",
                  s ? s->id.PID : 0);
  }

  // Display initialization
  tft.init();
  pinMode(TFT_BL, OUTPUT);
  digitalWrite(TFT_BL, HIGH);  // turn on the backlight
  tft.setRotation(1);
  tft.fillScreen(TFT_WHITE);

  // Initialize SD card - Card Reader under the camera (21)
  // Change to D2 for using Display Card Reader
  if(!SD.begin(SD_CS_PIN)){
    Serial.println("Card Mount Failed");
    return;
  }
  uint8_t cardType = SD.cardType();

  // Determine if the type of SD card is available
  if(cardType == CARD_NONE){
    Serial.println("No SD card attached");
    return;
  }

  Serial.print("SD Card Type: ");
  if(cardType == CARD_MMC){
    Serial.println("MMC");
  } else if(cardType == CARD_SD){
    Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
  } else {
    Serial.println("UNKNOWN");
  }

  sd_sign = true; // sd initialization check passes
}

void loop() {
  if( sd_sign && camera_sign){

    // Take a photo
    camera_fb_t *fb = esp_camera_fb_get();
    if (!fb) {
      Serial.println("Failed to get camera frame buffer");
      return;
    }

    if(display_is_pressed()){
      Serial.println("display is touched");
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);

      // RGB565 -> JPEG, then save to SD (frame2jpg returns bool: true = success)
      size_t out_len = 0;
      uint8_t* out_buf = NULL;
      bool ok = frame2jpg(fb, 12, &out_buf, &out_len);
      if (ok) {
        // Save photo to file
        writeFile(SD, filename, out_buf, out_len);
        Serial.printf("Saved picture: %s\n", filename);
        imageCount++;
        free(out_buf);
      } else {
        Serial.println("JPEG conversion failed");
      }
    }

    // Draw image on the round display
    uint8_t* buf = fb->buf;
    uint32_t len = fb->len;
    tft.startWrite();
    tft.setAddrWindow(0, 0, camera_width, camera_height);
    tft.pushColors(buf, len);
    tft.endWrite();

    // Release image buffer
    esp_camera_fb_return(fb);

    delay(10);
  }
}
```

Carregue o programa no XIAO ESP32S3 Sense; se a tela não acender após o upload bem-sucedido, talvez seja necessário clicar no botão Reset no XIAO. Em seguida, você verá a tela de monitoramento exibida em tempo real no Round Display. Clique em qualquer lugar na tela: a imagem será registrada e salva no cartão microSD.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/95.gif" style={{width:800, height:'auto'}}/></div>

### Anotação do programa

A configuração da câmera e do cartão microSD é o conteúdo anterior, portanto não a repetiremos aqui. Para o uso do cartão microSD, você pode consultar o Wiki [XIAO ESP32S3 Sense file system](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_sense_filesystem) para aprender como utilizá-lo.

```cpp
// Take a photo
camera_fb_t *fb = esp_camera_fb_get();
if (!fb) {
  Serial.println("Failed to get camera frame buffer");
  return;
}

...

// Release image buffer
esp_camera_fb_return(fb);

delay(10);
```

O programa acima, que é o bloco básico de código para chamar a câmera, é dividido em três partes: captura de tela, saída em caso de exceção e liberação do buffer da foto.

```cpp
if(display_is_pressed()){
  Serial.println("display is touched");
  char filename[32];
  sprintf(filename, "/image%d.jpg", imageCount);
  // Save photo to file
  writeFile(SD, filename, fb->buf, fb->len);
  Serial.printf("Saved picture：%s\n", filename);
  imageCount++;
}
```

O programa acima é usado para verificar se a tela foi tocada. Se tiver sido, o código salva a imagem capturada em um arquivo em um cartão microSD.

```cpp
// Decode JPEG images
uint8_t* buf = fb->buf;
uint32_t len = fb->len;
tft.startWrite();
tft.setAddrWindow(0, 0, camera_width, camera_height);
tft.pushColors(buf, len);
tft.endWrite();
```

Esta parte do código exibe a imagem capturada em uma tela. Primeiro, ela obtém o buffer da imagem e seu comprimento a partir da estrutura `camera_fb_t`. Em seguida, configura a tela para receber os dados da imagem e exibe a imagem na tela usando a função `pushColors()`.

## Gravar vídeos curtos e salvar no cartão microSD

:::note
Não recomendamos a exportação de codificação de vídeo em cima de um MCU porque os recursos das bibliotecas de codificação atualmente suportadas são muito limitados e a operação é muito complicada e trabalhosa.

Este exemplo não envolve codificação de vídeo, e o vídeo exportado é um MJPG composto de AVI quadro a quadro, portanto a gravação de vídeo pode não ser particularmente boa e satisfatória. O objetivo deste tutorial é fornecer métodos e ideias simples para gravar vídeos curtos, e damos boas-vindas a parceiros que tenham soluções melhores para enviar PR para nós.
:::

Nos capítulos anteriores, dominamos como usar a câmera para capturar imagens. Sabemos que imagens individuais são unidas para formar um vídeo em movimento. Com base nessa teoria, nosso projeto neste capítulo irá guiá-lo sobre como escrever um programa para gravar um vídeo de 10 segundos a cada 1 minuto e salvá-lo em um cartão microSD.

Você pode encontrar o código completo do programa e os arquivos de dependência necessários no link abaixo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/record_video" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aqui está o programa Arduino para este projeto.

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"
#include "esp_timer.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"

const int SD_PIN_CS = 21;

File videoFile;
bool camera_sign = false;
bool sd_sign = false;
unsigned long lastCaptureTime = 0;
unsigned long captureDuration = 10000; // 10 seconds
int imageCount = 0;

void setup() {
  Serial.begin(115200);
  while(!Serial);

  // Initialize the camera
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  config.frame_size = FRAMESIZE_SVGA;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  camera_sign = true;

  // Initialize the SD card
  if (!SD.begin(SD_PIN_CS)) {
    Serial.println("SD card initialization failed!");
    return;
  }

  uint8_t cardType = SD.cardType();

  // Determine if the type of SD card is available
  if(cardType == CARD_NONE){
    Serial.println("No SD card attached");
    return;
  }

  Serial.print("SD Card Type: ");
  if(cardType == CARD_MMC){
    Serial.println("MMC");
  } else if(cardType == CARD_SD){
    Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
  } else {
    Serial.println("UNKNOWN");
  }

  sd_sign = true;

  Serial.println("Video will begin in one minute, please be ready.");
}

void loop() {
  // Camera & SD available, start taking video
  if (camera_sign && sd_sign) {
    // Get the current time
    unsigned long now = millis();

    //If it has been more than 1 minute since the last video capture, start capturing a new video
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/video%d.avi", imageCount);
      videoFile = SD.open(filename, FILE_WRITE);
      if (!videoFile) {
        Serial.println("Error opening video file!");
        return;
      }
      Serial.printf("Recording video：%s\n", filename);
      lastCaptureTime = now;

      // Start capturing video frames
      while ((millis() - lastCaptureTime) < captureDuration) {
        camera_fb_t *fb = esp_camera_fb_get();
        if (!fb) {
          Serial.println("Error getting framebuffer!");
          break;
        }
        videoFile.write(fb->buf, fb->len);
        esp_camera_fb_return(fb);
      }

      // Close the video file
      videoFile.close();
      Serial.printf("Video saved: %s\n", filename);
      imageCount++;

      Serial.println("Video will begin in one minute, please be ready.");

      // Wait for the remaining time of the minute
      delay(60000 - (millis() - lastCaptureTime));
    }
  }
}
```

Carregue o código no XIAO ESP32S3 Sense, ligue o monitor serial; neste momento, ajuste a posição da câmera para o objeto que você deseja gravar. Após um minuto, o LED laranja no XIAO começará a piscar e a gravação será iniciada e salva no cartão microSD.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/96.png" style={{width:800, height:'auto'}}/></div>

:::note
Como o programa não envolve configurações como codificação e taxa de quadros, o vídeo pode abrir por apenas um segundo se não houver mudança em cada quadro das imagens gravadas.
:::

### Anotação do programa

O núcleo e o ponto-chave no procedimento de gravação de vídeo é continuar adquirindo o fluxo de fotos por um período contínuo de 10 segundos e escrevê-lo continuamente no cartão microSD.

```cpp
// Start capturing video frames
while ((millis() - lastCaptureTime) < captureDuration) {
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Error getting framebuffer!");
    break;
  }
  videoFile.write(fb->buf, fb->len);
  esp_camera_fb_return(fb);
}
```

Além disso, aninhamos uma camada de verificações de espera de 1 minuto na parte externa para garantir que o vídeo comece a cada 1 minuto.

```cpp
//If it has been more than 1 minute since the last video capture, start capturing a new video
if ((now - lastCaptureTime) >= 60000) {

  ...

  delay(60000 - (millis() - lastCaptureTime));
}
```

## Projeto II: Transmissão de Vídeo

No final deste tutorial, vamos mostrar um projeto de transmissão de vídeo. Este projeto permite que você veja um fluxo de vídeo ao vivo em uma página da web criada pelo XIAO ESP32S3 Sense, e você pode alterar a exibição da tela configurando alguns parâmetros.

Você pode encontrar o código completo do programa e os arquivos de dependência necessários no link abaixo.

Se você estiver usando o pacote de placas esp32 com versão **2.0.x** no Arduino, faça o download em:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/CameraWebServer_for_esp-arduino_2.0.x" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Se você estiver usando o pacote de placas esp32 com a versão **3.0.x** no Arduino, faça o download com:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/CameraWebServer_for_esp-arduino_3.0.x" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aqui está o programa Arduino para este projeto.

```cpp
#include "esp_camera.h"
#include "ESP32_OV5640_AF.h"   // OV5640 auto-focus library (OV5640 only)
#include <WiFi.h>

//
// WARNING!!! PSRAM IC required for UXGA resolution and high JPEG quality
//            Ensure ESP32 Wrover Module or other board with PSRAM is selected
//            Partial images will be transmitted if image exceeds buffer size
//
//            You must select partition scheme from the board menu that has at least 3MB APP space.
//            Face Recognition is DISABLED for ESP32 and ESP32-S2, because it takes up from 15
//            seconds to process single frame. Face Detection is ENABLED if PSRAM is enabled as well

// ===================
// Select camera model
// ===================
#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM
#include "camera_pins.h"

// ===========================
// Enter your WiFi credentials
// ===========================
const char *ssid = "**********";
const char *password = "**********";

void startCameraServer();
void setupLedFlash(int pin);

// --- OV5640 AF (OV5640 module only; fixed-focus modules such as the OV3660/NT99141 are skipped automatically) ---
OV5640 ov5640 = OV5640();
#define OV5640_AF_FOCUS_FRAMESIZE FRAMESIZE_SXGA  // AF focus evaluation requires >=1280x1024
#define OV5640_FOCUS_TIMEOUT_MS 8000
bool waitForOv5640Focus() {
  const uint32_t started = millis();
  uint8_t status = 0;
  while (millis() - started < OV5640_FOCUS_TIMEOUT_MS) {
    status = ov5640.getFWStatus();
    if (status == 0x10) { Serial.printf("OV5640 focus settled: FW_STATUS=0x%02X\n", status); return true; }
    delay(100);
  }
  Serial.printf("WARN: OV5640 focus not settled; last FW_STATUS=0x%02X\n", status);
  return false;
}

void setup() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Serial.println();

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM;
  config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG;  // for streaming
  //config.pixel_format = PIXFORMAT_RGB565; // for face detection/recognition
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if (config.pixel_format == PIXFORMAT_JPEG) {
    if (psramFound()) {
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limit the frame size when PSRAM is not available
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // Best option for face detection/recognition
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  sensor_t *s = esp_camera_sensor_get();
  // --- OV5640 Heat Optimization: lower IO drive (0x302C bit[7:6] 11->00) ---
  if (s && s->id.PID == OV5640_PID) {
    s->set_reg(s, 0x302C, 0xC0, 0x00);
  }
  // --- OV5640 auto-focus init (OV5640 only; fixed-focus modules are skipped) ---
  if (s && s->id.PID == OV5640_PID) {
    Serial.println("OV5640 detected, initializing auto-focus...");
    if (s->set_framesize(s, OV5640_AF_FOCUS_FRAMESIZE) == 0 && ov5640.start(s)) {
      int r1 = ov5640.focusInit();
      int r2 = (r1 == 0) ? ov5640.autoFocusMode() : -1;
      Serial.printf("  focusInit=%d autoFocusMode=%d\n", r1, r2);
      if (r1 == 0 && r2 == 0) waitForOv5640Focus();
      s->set_framesize(s, config.frame_size);  // restore the capture framesize
    } else {
      Serial.println("WARN: OV5640 AF setup failed, skipped");
      s->set_framesize(s, config.frame_size);
    }
  }
  // initial sensors are flipped vertically and colors are a bit saturated
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1);        // flip it back
    s->set_brightness(s, 1);   // up the brightness just a bit
    s->set_saturation(s, -2);  // lower the saturation
  }
  // drop down frame size for higher initial frame rate
  if (config.pixel_format == PIXFORMAT_JPEG) {
    s->set_framesize(s, FRAMESIZE_QVGA);
  }

#if defined(CAMERA_MODEL_M5STACK_WIDE) || defined(CAMERA_MODEL_M5STACK_ESP32CAM)
  s->set_vflip(s, 1);
  s->set_hmirror(s, 1);
#endif

#if defined(CAMERA_MODEL_ESP32S3_EYE)
  s->set_vflip(s, 1);
#endif

// Setup LED FLash if LED pin is defined in camera_pins.h
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");

  startCameraServer();

  Serial.print("Camera Ready! Use 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("' to connect");
}

void loop() {
  // Do nothing. Everything is done in another task by the web server
  delay(10000);
}
```

Antes de enviar o programa, você precisa alterar no código o nome e a senha do WiFi para os seus. Depois de enviar o programa, se o XIAO ESP32C3 se conectar com sucesso ao seu WiFi, o endereço IP dele será impresso.

:::caution
O XIAO ESP32S3 ficará muito quente durante transmissões de longa duração — tenha cuidado para não se queimar. Para reduzir a temperatura, aplique o patch [OV5640 Heat Optimization](#OV5640-Otimização-de-Calor) abaixo.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/97.png" style={{width:800, height:'auto'}}/></div>

:::tip
Como você pode ver na figura acima, se você ativar a saída de informações de depuração, poderá ver algumas informações de depuração do kernel do chip sendo impressas no monitor serial. Por exemplo `[0;31mE (2947) MFN: Partition Not found[0m`, por favor, não se preocupe, isso não afeta a execução do programa.
:::

Abra o seu navegador, recomendamos Edge ou Google Chrome, e digite esse endereço IP; você verá a página de configuração do vídeo.

:::note
Observe que o dispositivo em que você está usando o navegador precisa estar na mesma LAN que o XIAO.
:::

Depois de configurar as especificações do fluxo de vídeo que você deseja configurar, clique em **Start Stream** na parte inferior da barra de ferramentas à esquerda e você verá a transmissão ao vivo da câmera.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:1000, height:'auto'}}/></div>

Felizmente, o ESP32 também adicionou oficialmente reconhecimento facial ao programa. Você pode experimentar o recurso ativando o botão de alternância para reconhecimento facial com qualidade de imagem reduzida.

:::tip
Por motivos de desempenho, a qualidade da tela não pode ser superior a **CIF**, caso contrário a página da web exibirá um erro quando você ativar a chave de reconhecimento facial.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/99.png" style={{width:400, height:'auto'}}/></div>

Ah, meu rostão está circulado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/100.png" style={{width:600, height:'auto'}}/></div>

## Foco Automático OV5640

### Preparação de Hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Câmera OV5640 para XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html?qid=UXYOXT_08tfc9pt_1746512260418" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparação de software

#### Método 1

Agradecimentos especiais a **@Eric** por fornecer o código open source

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/0015/ESP32-OV5640-AF/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

**Exemplo de código**

``` cpp
#include "esp_camera.h"
#include <WiFi.h>
#include "ESP32_OV5640_AF.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"

const char* ssid = "";
const char* password = "";

void startCameraServer();
void setupLedFlash(int pin);
OV5640 ov5640 = OV5640();

void setup() {
  Serial.begin(115200);
  while(!Serial);
  Serial.setDebugOutput(true);
  Serial.println();

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG; // for streaming
  //config.pixel_format = PIXFORMAT_RGB565; // for face detection/recognition
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limit the frame size when PSRAM is not available
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // Best option for face detection/recognition
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  sensor_t * s = esp_camera_sensor_get();
  // --- OV5640 Heat Optimization: lower IO drive (0x302C bit[7:6] 11->00) ---
  if (s && s->id.PID == OV5640_PID) {
    s->set_reg(s, 0x302C, 0xC0, 0x00);
  }
  ov5640.start(s);

    if (ov5640.focusInit() == 0) {
    Serial.println("OV5640_Focus_Init Successful!");
  }

  if (ov5640.autoFocusMode() == 0) {
    Serial.println("OV5640_Auto_Focus Successful!");
  }

// Setup LED FLash if LED pin is defined in camera_pins.h
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");

  startCameraServer();

  Serial.print("Camera Ready! Use 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("' to connect");
}

void loop() {
  uint8_t rc = ov5640.getFWStatus();
  Serial.printf("FW_STATUS = 0x%x\n", rc);

  if (rc == -1) {
    Serial.println("Check your OV5640");
  } else if (rc == FW_STATUS_S_FOCUSED) {
    Serial.println("Focused!");
  } else if (rc == FW_STATUS_S_FOCUSING) {
    Serial.println("Focusing!");
  }
}

```

### Gráfico de resultados

:::tip
A resolução precisa ser superior a 1280*1024 para ver o efeito de foco; a tela irá travar e você precisará aguardar um pouco enquanto o foco é ajustado.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640.gif" style={{width:700, height:'auto'}}/></div>

#### Método 2

:::tip
A resolução precisa ser superior a 1600*1200 para ver o efeito de foco; a tela irá travar e você precisará aguardar um pouco enquanto o foco é ajustado.
:::

Baixe o arquivo zip a seguir e adicione-o ao Arudino

- **[ZIP]** [OV5640 Auto](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/OV5640_AF.zip)

:::tip
O OV5640 nas bibliotecas do método 1 e do método 2 não pode existir ao mesmo tempo
:::

```cpp
#include "esp_camera.h"
#include <WiFi.h>
#include "ESP32_OV5640_AF.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"

const char *ssid = "";
const char *password = "";

void startCameraServer();
void setupLedFlash(int pin);
OV5640 ov5640 = OV5640();

void setup() {
  Serial.begin(115200);

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG;
  config.grab_mode = CAMERA_GRAB_LATEST;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 10;
  config.fb_count = 2;

  if(psramFound()){
    config.jpeg_quality = 10;
    config.fb_count = 2;
    config.grab_mode = CAMERA_GRAB_LATEST;
  } else {
    // Limit the frame size when PSRAM is not available
    config.frame_size = FRAMESIZE_SVGA;
    config.fb_location = CAMERA_FB_IN_DRAM;
  }

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  // auto focus
#if 1
  sensor_t* sensor = esp_camera_sensor_get();
  // --- OV5640 Heat Optimization: lower IO drive (0x302C bit[7:6] 11->00) ---
  if (sensor && sensor->id.PID == OV5640_PID) {
    sensor->set_reg(sensor, 0x302C, 0xC0, 0x00);
  }
  int ret = 0;
  ov5640.start(sensor);

  if (ov5640.focusInit() == 0) {
      Serial.println("OV5640_Focus_Init Successful!");
  } else {
      Serial.println("OV5640_Focus_Init Failed!");
  }

  ret = ov5640.autoFocusMode(false);
  if (ret == 0) {
    Serial.println("OV5640_Auto_Focus Successful!");
  } else {
    Serial.printf("OV5640_Auto_Focus Failed! - [%d]\n", ret);
  }
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected");

  startCameraServer();

  Serial.printf("Camera Ready! Use 'http://%s' to connect\n", WiFi.localIP().toString().c_str());
}

void loop() {
  if (Serial.available()) {
    sensor_t* sensor = esp_camera_sensor_get();
    int ret = 0;

    switch (Serial.read()) {
      case 'b':
        ret = sensor->set_reg(sensor, 0x3022, 0xff, 0x03);
        Serial.printf("begin to auto focus - %d\n", ret);
        break;
      case 's':
        ret = sensor->set_reg(sensor, 0x3022, 0xff, 0x06);
        Serial.printf("focus stop here - %d\n", ret);
        break;
    }
  }

  uint8_t rc = ov5640.getFWStatus();
  Serial.printf("FW_STATUS = 0x%x\n", rc);

  if (rc == -1) {
    Serial.println("Check your OV5640");
  } else if (rc == FW_STATUS_S_FOCUSED) {
    Serial.println("Focused!");
  } else if (rc == FW_STATUS_S_FOCUSING) {
    Serial.println("Focusing!");
  } else {
  }

  delay(1000);
}
```

:::tip
O Modo 1 é recomendado porque tem um efeito de foco mais pronunciado do que o Modo 2 e fornece uma imagem mais nítida.
:::

## Otimização de aquecimento do OV5640

O módulo OV5640 esquenta de forma perceptível durante o uso prolongado. Esta seção oferece duas maneiras de reduzir a temperatura: ajustar os parâmetros de software (Método 1) e reduzir a capacidade de acionamento de IO por meio de uma configuração de registrador (Método 2).

### Método 1: Reduzir o aquecimento ajustando parâmetros

O código de exemplo neste Wiki é ajustado para a melhor qualidade de imagem possível — resolução UXGA (1600×1200) com captura contínua de quadros em buffer duplo nos exemplos de foto e uma CPU a 240 MHz — portanto, a placa esquenta de forma perceptível durante execuções longas. Se você achar que a temperatura está muito alta, ou não precisar de tanta resolução, pode reduzir o consumo de energia das seguintes maneiras, a maioria das quais não afeta a nitidez de capturas únicas:

| Alavanca | O que mudar | Redução de calor | Afeta a qualidade da imagem? |
|---|---|---|---|
| Frequência da CPU | Arduino IDE: `Tools → CPU Frequency: 240MHz` → `160MHz` (ou adicione `setCpuFrequencyMhz(160);` em `setup()`) | Média | Não (a captura da imagem do sensor e a codificação JPEG são feitas dentro do OV5640, independentes da CPU) |
| Frequência de foco | Trocar o foco automático contínuo (`autoFocusMode`) por foco de disparo único acionado periodicamente, ou aumentar o intervalo de foco | Pequena | Inalterada para cenas estáticas; cenas em movimento demoram mais para voltar a focar |
| Captura de quadros | `CAMERA_GRAB_LATEST` → `CAMERA_GRAB_WHEN_EMPTY` (a câmera preenche os buffers disponíveis, o que reduz o processamento contínuo de quadros; não é captura sob demanda e não coloca o sensor em standby) | Média | O quadro que você captura pode ser alguns quadros mais antigo do que com `CAMERA_GRAB_LATEST`; a nitidez não é afetada |
| Resolução | `FRAMESIZE_UXGA` (1600×1200) → `FRAMESIZE_HD` (1280×720) ou `SVGA` (800×600) | Grande | Menos pixels, portanto menos detalhes quando ampliada (a nitidez por pixel permanece inalterada) |
| Buffer duplo | `fb_count` de 2 para 1 (junto com a mudança de modo de captura acima) | Média | Não |

> A combinação com melhor custo-benefício é usar uma resolução mais baixa e um único buffer de quadro para reduzir a sobrecarga de captura e processamento — isto é, um nível abaixo na resolução mais `CAMERA_GRAB_WHEN_EMPTY` com `fb_count = 1`. A temperatura cai de forma perceptível, com quase nenhum impacto na nitidez de capturas únicas. Observe que `CAMERA_GRAB_WHEN_EMPTY` preenche os buffers disponíveis; ele não fornece captura sob demanda do sensor nem standby.

### Método 2: Reduzir o consumo diminuindo a capacidade de drive de IO
:::tip
Esta seção se aplica apenas ao módulo de câmera **OV5640**. O OV2640 não possui esse registrador e é ignorado automaticamente pela verificação de `PID` no código abaixo.
:::

Quando o OV5640 roda continuamente por muito tempo — transmissão de vídeo, visualização ao vivo ou foco automático contínuo — a temperatura do chip pode subir acima de 70°C. Esta é uma causa raiz em nível de hardware e não pode ser totalmente eliminada por software; só pode ser mitigada.

#### Por que o OV5640 esquenta

1. **Queda no regulador interno de DVDD**: quando a alimentação de I/O (DOVDD) é 2,8 V e o regulador interno de DVDD é usado, a grande queda de tensão em si dissipa potência significativa (conforme observado no datasheet oficial).
2. **Sequência de energização inadequada** introduz corrente de fuga e aumenta o consumo estático.
3. O datasheet **recomenda fortemente cortar toda a alimentação (incluindo DVDD externa) quando o sensor não estiver em uso**, o que confirma que o consumo em standby do OV5640 não é ideal.

A única alavanca de software eficaz é **reduzir a corrente de drive dos pinos de IO** para diminuir a potência dinâmica.

#### Como funciona — registrador 0x302C

O registrador `0x302C` (chamado de `DRIVE_CAPABILITY` no código-fonte do esp32-camera) controla a capacidade de drive dos pinos de IO (D0–D7, PCLK, VSYNC, HREF). O campo-chave é **Bit[7:6]**:

| Bit[7:6] | Capacidade de drive |
|---|---|
| `11` | 4x (padrão após energizar o chip) |
| `10` | 3x |
| `01` | 2x |
| `00` | 1x (mais fraca, menor corrente, menos calor) |

Alterar Bit[7:6] de `11` para `00` reduz a capacidade de drive de 4x para 1x. Esse é todo o princípio — não há outra mágica envolvida.

#### Código — adicione isto logo após `esp_camera_init()`

```cpp
// --- OV5640 Heat Optimization ---
// Lower IO drive capability via register 0x302C.
// Bit[7:6]: 11=4x (chip default) -> 00=1x (lowest current, least heat).
// Drops chip temperature from ~70°C+ to ~54°C during continuous streaming.
// OV5640 only; the PID check skips OV2640, which has no such register.
sensor_t * s = esp_camera_sensor_get();
if (s && s->id.PID == OV5640_PID) {
  s->set_reg(s, 0x302C, 0xC0, 0x00);
}
```

- `esp_camera_init(&config)` — chamado como de costume, a função **não** é modificada. Internamente ela chama `sensor.reset()`, que grava um lote de registradores padrão.
- `esp_camera_sensor_get()` — obtém o ponteiro `sensor_t *` necessário para se comunicar com o sensor.
- `if (s->id.PID == OV5640_PID)` — aplica-se apenas ao OV5640. Todos os exemplos neste wiki também são compatíveis com o OV2640, e `0x302C` é específico do OV5640, portanto não deve ser gravado em um OV2640. O exemplo de transmissão de vídeo já usa o mesmo padrão `if (s->id.PID == OV3660_PID)`.
- `s->set_reg(s, 0x302C, 0xC0, 0x00)` — lê de volta `0x302C`, limpa apenas **Bit[7:6]** para `00` (máscara `0xC0 = 0b11000000`, valor `0x00`), e deixa os outros bits com o que quer que a biblioteca tenha definido. Isso é mais seguro do que gravar `0x03` diretamente — não depende do valor padrão da biblioteca e toca apenas nos bits de capacidade de drive.

#### Efeito e riscos

- **Efeito**: em transmissão contínua de longa duração, a temperatura do chip OV5640 cai de ~70°C+ para ~54°C (varia com a temperatura ambiente e o dissipador de calor).
- **Risco**: capacidade de drive menor torna as bordas de sinal mais lentas, o que eleva a exigência de imunidade a ruído nas trilhas da PCB; em casos extremos pode introduzir ruído na imagem ou distorção de amostragem. No XIAO ESP32S3 Sense + OV5640 (versão com dissipador) o impacto é aceitável nos testes.
- **Escopo**: apenas OV5640; o OV2640 não possui esse registrador e é ignorado pela verificação de `PID`.

## Solução de problemas

### P1: Quando o XIAO ESP32S3 Sense e o Round Display são usados juntos, eu preciso cortar o pino J3? Qual slot de cartão SD pode ser usado?

R: Em princípio, você precisa cortar o pino J3 quando o XIAO ESP32S3 Sense é usado junto com o Round Display para usar o cartão microSD. O motivo é que há resistores de pull-up no projeto do circuito de ambas as placas de expansão, então, teoricamente, se dois resistores de pull-up funcionarem ao mesmo tempo, o slot do cartão SD não funcionará corretamente. Uma mensagem de erro de falha ao montar o cartão SD aparecerá. Como o resistor de pull-up no Round Display não pode ser bloqueado, você precisa cortar o J3 na placa de expansão Sense para garantir que apenas um resistor de pull-up esteja funcionando quando os dois forem usados juntos. Isso também determina que, quando ambos são usados juntos, há e somente o slot de cartão SD no Round Display ativo.

No entanto, **precisamos agradecer ao engenheiro Mjrovai pelo novo método de usar o slot de cartão microSD no XIAO ESP32S3 Sense ao mesmo tempo**, o que também é possível em nível de software. Podemos nos referir **[aos métodos e procedimentos dele](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)**.

### P2: O OV5640 fica muito quente durante transmissões de longa duração. O que devo fazer?

R: Isso é esperado para o OV5640 em captura contínua. Reduza a capacidade de drive de IO via registrador `0x302C`, conforme descrito em [OV5640 Heat Optimization](#OV5640-Heat-Optimization) — isso reduz a temperatura do chip de ~70°C+ para ~54°C. Se você não precisa de alta resolução, reduzir também o tamanho do quadro e alternar para `CAMERA_GRAB_WHEN_EMPTY` reduz ainda mais o consumo.

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
