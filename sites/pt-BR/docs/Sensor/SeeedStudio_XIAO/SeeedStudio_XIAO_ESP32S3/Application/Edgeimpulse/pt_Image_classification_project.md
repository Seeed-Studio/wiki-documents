---
description: Classifique cachorro e gato a partir de uma imagem.
title: Classificação de imagem
keywords:
  - tinyml course
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/image_classification.webp
slug: /tinyml_course_Image_classification_project
last_update:
  date: 11/29/2024
  author: Salman
createdAt: '2023-08-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/tinyml_course_Image_classification_project/
---

# Classificação de Imagem com XIAO ESP32S3-Sense

Aqui vamos criar um projeto de tinyML com o XIAO ESP32S3-Sense para classificar cachorro e gato em uma foto. Vamos começar.

## Como funciona

Estamos executando o modelo de aprendizado de máquina no nosso XIAO e enviando o fluxo da câmera para ele. Em seguida, o XIAO faz a inferência do resultado e prevê com a ajuda da rede neural onboard que implementamos. Vamos construir uma.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/digram.png?raw=true" style={{width:1000, height:'auto'}}/></div>

### Itens necessários

- XIAO ESP32-Sense
- Cartão MicroSD &lt;32GB
- Cabo Type-C
- Arduino IDE
- Conta Edge Impulse

:::info

1. Use a versão 2.x do arduino-esp32, pois ela não é compatível com a 3.x.
2. Ative a PSRAM para habilitar o módulo/recurso da câmera.

:::

## Etapa 1. Coletando imagens de gato e cachorro

A primeira etapa de um projeto de aprendizado de máquina é coletar o conjunto de dados e aqui precisamos coletar imagens de cachorro e gato. Aqui, podemos coletar as imagens de dois métodos.

1. Coletar imagens diretamente do XIAO-ESP32S3 Sense e salvar no cartão SD e depois enviar para o Edge Impulse
2. Coletar diretamente a imagem via celular, internet ou conjunto de dados aberto e depois enviar para o Edge Impulse.

### 1.1 Método 1: Coletar imagens via XIAO-ESP32S3 Sense

Aqui estamos coletando imagens usando o módulo de câmera Sense e salvando no cartão SD, depois faremos o upload para o EdgeImpulse.

#### 1.1.1 Conectar a câmera

Se você está comprando o XIAO ESP32S3 Sense, então você também deve incluir uma placa de expansão. Esta placa de expansão possui um sensor de câmera OV2640 1600\*1200, slot de cartão SD onboard e microfone digital.

Ao instalar a placa de expansão com o XIAO ESP32S3 Sense, você pode usar as funções da placa de expansão.

Instalar a placa de expansão é muito simples, você só precisa alinhar o conector da placa de expansão com o conector B2B no XIAO ESP32S3, pressionar com força e ouvir um “clique”, a instalação estará concluída.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

Agora temos uma nova e poderosa câmera totalmente compatível com XIAO ESP32S3 Sense, a OV5640, disponível em nosso catálogo, e se você comprá-la, poderá substituir a câmera para usá-la.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

- **Passo 1.** Baixe e instale a versão estável do Arduino IDE de acordo com o seu sistema operacional.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

#### 1.1.2 Instalar o XIAO-ESP32S3 Sense no Arduino

- **Passo 1.** Adicione o pacote de placas ESP32 ao seu Arduino IDE.

  Vá em **File > Preferences** e preencha **"Additional Boards Manager URLs"** com a URL abaixo:
  *https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json*

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

  Vá em **Tools > Board > Boards Manager...**, digite a palavra-chave **esp32** na caixa de pesquisa, selecione a versão mais recente de **esp32** e instale.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
O pacote onboard para o XIAO ESP32S3 requer pelo menos a versão **2.0.8** para estar disponível.
:::

- **Passo 2.** Selecione sua placa e porta.

Na parte superior do Arduino IDE, você pode selecionar a porta diretamente. Provavelmente será COM3 ou superior (**COM1** e **COM2** são geralmente reservadas para portas seriais de hardware).

Além disso, pesquise por **xiao** na placa de desenvolvimento à esquerda. Selecione **XIAO_ESP32S3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

Com essa preparação, você pode começar a escrever programas para o XIAO ESP32S3 para compilar e enviar.

#### 1.1.3 Enviar o sketch que pode tirar imagem e salvar no cartão SD

Baixe o arquivo de sketch a partir [daqui](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/take_photos_command.ino.zip), extraia no seu computador e clique em "take_photos_command.ino" para abrir o sketch. Em seguida, selecione a porta e a placa corretas para o XIAO para fazer o upload.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/img_CaptureSketch01.png?raw=true
" style={{width:600, height:'auto'}}/></div>

Ao tirar fotos, certifique-se de apontar para a imagem ou objeto que precisamos coletar como conjunto de dados.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/cat_image_snap.png?raw=true" style={{width:600, height:'auto'}}/></div>

Como é uma classificação de imagem, precisamos coletar o máximo de imagens possível para tornar o sistema mais estável. Portanto, colete mais imagens fofas de cachorros e gatos.

### 1.2 Método 2: Enviar imagens diretamente para o EdgeImpulse

Para este método, precisamos coletar imagens da internet ou via celular. Felizmente, temos serviços como o [Kaggle](https://www.kaggle.com/) para nos fornecer conjuntos de dados de imagens de cachorro e gato, por favor [veja aqui](https://www.kaggle.com/datasets/tongpython/cat-and-dog).

Depois de coletar o conjunto de dados, abra seu projeto EdgeImpulse e vá para **Data acquisition** e selecione **+ Add data** e então escolha a opção **Upload data**.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/collectData1.png" style={{width:600, height:'auto'}}/></div>

Na página, selecione o modo de upload como **"Select a folder"**, depois selecione os arquivos na opção abaixo. Certifique-se de selecionar **"Automaticlly split between training and testing"** e rotular como **"Infer from file name"**

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/DataCollection01.png?raw=true" style={{width:600, height:'auto'}}/></div>

Depois que você terminar o upload, poderá ver a janela como abaixo.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/DataCollection02.png?raw=true" style={{width:600, height:'auto'}}/></div>

## Etapa 2. Projetar o Impulse e treinar nossa rede neural

Depois de coletar dados para o seu projeto, agora você pode criar seu Impulse. Um Impulse completo consiste em 3 blocos principais de construção: bloco de entrada, bloco de processamento e um bloco de aprendizado.

1. Para projetar um impulse, selecione **Create an impulse** em **Impulse design**.
2. **Input block** : O bloco de entrada indica o tipo de dados de entrada com os quais você está treinando seu modelo. Isso pode ser séries temporais (áudio, vibração, movimentos) ou imagens. Aqui selecionamos os dados de imagem como Inputblock
3. **Processing blocks**: Um bloco de processamento é basicamente um extrator de características. Ele consiste em operações de DSP (Processamento Digital de Sinais) usadas para extrair características nas quais nosso modelo aprende. Essas operações variam dependendo do tipo de dado usado em seu projeto. Aqui estamos usando a imagem pre-build do EdgeImpulse como bloco de processamento.
4. **Learning blocks** : Depois de adicionar seu bloco de processamento, agora é hora de adicionar um bloco de aprendizado para completar seu impulse. Um bloco de aprendizado é simplesmente uma rede neural que é treinada para aprender com seus dados. Aqui estamos usando Transfer Learning (Images), que irá ajustar um modelo pré-treinado de classificação de imagens com seus dados. Bom desempenho mesmo com conjuntos de dados de imagem relativamente pequenos.
5. Depois de projetar o impulse, clique em **save impulse** para continuar.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/Impulse01.png?raw=true" style={{width:600, height:'auto'}}/></div>

### Etapa 2.1: Extração de características usando o bloco de processamento

Aqui usaremos operações de DSP (Processamento Digital de Sinais) que são usadas para extrair características nas quais nosso modelo aprende. Essas operações variam dependendo do tipo de dado usado em seu projeto. Primeiro precisamos definir os parâmetros conforme mencionado abaixo.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/Impulse02.png?raw=true
" style={{width:600, height:'auto'}}/></div>

Depois de definir os parâmetros, precisamos gerar as características, clique em **generate features** para iniciar a operação.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/feature03.png?raw=true" style={{width:600, height:'auto'}}/></div>

Depois de gerar as características, precisamos configurar a rede neural que é treinada para aprender com seus dados. Aqui estamos usando Transfer Learning (Images), que irá ajustar um modelo pré-treinado de classificação de imagens com seus dados. Bom desempenho mesmo com conjuntos de dados de imagem relativamente pequenos. Selecione a rede neural conforme mencionado abaixo e clique em **Start Training**. Isso levará algum tempo e você precisará esperar.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/train2.png?raw=true" style={{width:600, height:'auto'}}/></div>

Quando o treinamento for concluído, estaremos prontos para baixar a nossa biblioteca tinyML que foi criada. Vá até a opção **Deployment** e selecione **Arduino library** como deployment e clique em **Build** para gerar a biblioteca.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/deployment1.png?raw=true" style={{width:600, height:'auto'}}/></div>

A biblioteca será baixada automaticamente. Depois disso, adicione-a à Arduino IDE. Abra sua Arduino IDE, clique em Sketch > Include Library > Add .ZIP Library.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:1000, height:'auto'}}/></div>

Escolha o arquivo zip que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá Library added to your libraries na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png" style={{width:1000, height:'auto'}}/></div>

## Etapa 3. Execute o exemplo de sketch

<!-- Even though Edge Impulse has not released its SDK for ESP32S3 using the ESP NN accelerator, thanks to Dmitry Maslov, we can have its assembly optimizations restored and fixed for ESP32-S3. This solution is not official yet, and EI will include it in EI SDK once they fix conflicts with other boards.

:::caution
Por enquanto, isso só funciona com a versão não EON. Portanto, você também deve manter a opção **Enable EON Compiler** não selecionada.
:::

Quando o botão Build é selecionado, um arquivo Zip será criado e baixado para o seu computador.

Antes de usarmos a biblioteca baixada, precisamos habilitar o acelerador **ESP NN**. Para isso, você pode baixar uma versão preliminar do [project GitHub](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/blob/main/ESP-NN.zip), descompactá-la e substituir a pasta ESP NN por ela em:`src/edge-impulse-sdk/porting/espressif/ESP-NN`, na pasta de bibliotecas do seu Arduino.

:::warning Atenção

- Lembre-se de substituir a pasta ESP-NN, não mantenha uma pasta existente ou altere o nome dela para restaurá-la. Simplesmente remova-a.
- A ordem do arquivo de cabeçalho pode afetar a compilação, portanto, certifique-se de manter a ordem correta dos arquivos de cabeçalho.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/10.png" style={{width:800, height:'auto'}}/></div> -->

Copie o código de inferência abaixo e cole-o em sua Arduino IDE.

```cpp
/* Edge Impulse Arduino examples
 * Copyright (c) 2022 EdgeImpulse Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* Includes ---------------------------------------------------------------- */
#include <XIAO_esp32S3_CatDog2_inferencing.h>
#include "edge-impulse-sdk/dsp/image/image.hpp"

#include "esp_camera.h"

// Select camera model - find more camera models in camera_pins.h file here
// https://github.com/espressif/arduino-esp32/blob/master/libraries/ESP32/examples/Camera/CameraWebServer/camera_pins.h

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#define PWDN_GPIO_NUM     -1
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM     10
#define SIOD_GPIO_NUM     40
#define SIOC_GPIO_NUM     39

#define Y9_GPIO_NUM       48
#define Y8_GPIO_NUM       11
#define Y7_GPIO_NUM       12
#define Y6_GPIO_NUM       14
#define Y5_GPIO_NUM       16
#define Y4_GPIO_NUM       18
#define Y3_GPIO_NUM       17
#define Y2_GPIO_NUM       15
#define VSYNC_GPIO_NUM    38
#define HREF_GPIO_NUM     47
#define PCLK_GPIO_NUM     13

#define LED_GPIO_NUM      21


/* Constant defines -------------------------------------------------------- */
#define EI_CAMERA_RAW_FRAME_BUFFER_COLS           320
#define EI_CAMERA_RAW_FRAME_BUFFER_ROWS           240
#define EI_CAMERA_FRAME_BYTE_SIZE                 3

/* Private variables ------------------------------------------------------- */
static bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal
static bool is_initialised = false;
uint8_t *snapshot_buf; //points to the output of the capture

static camera_config_t camera_config = {
    .pin_pwdn = PWDN_GPIO_NUM,
    .pin_reset = RESET_GPIO_NUM,
    .pin_xclk = XCLK_GPIO_NUM,
    .pin_sscb_sda = SIOD_GPIO_NUM,
    .pin_sscb_scl = SIOC_GPIO_NUM,

    .pin_d7 = Y9_GPIO_NUM,
    .pin_d6 = Y8_GPIO_NUM,
    .pin_d5 = Y7_GPIO_NUM,
    .pin_d4 = Y6_GPIO_NUM,
    .pin_d3 = Y5_GPIO_NUM,
    .pin_d2 = Y4_GPIO_NUM,
    .pin_d1 = Y3_GPIO_NUM,
    .pin_d0 = Y2_GPIO_NUM,
    .pin_vsync = VSYNC_GPIO_NUM,
    .pin_href = HREF_GPIO_NUM,
    .pin_pclk = PCLK_GPIO_NUM,

    //XCLK 20MHz or 10MHz for OV2640 double FPS (Experimental)
    .xclk_freq_hz = 20000000,
    .ledc_timer = LEDC_TIMER_0,
    .ledc_channel = LEDC_CHANNEL_0,

    .pixel_format = PIXFORMAT_JPEG, //YUV422,GRAYSCALE,RGB565,JPEG
    .frame_size = FRAMESIZE_QVGA,    //QQVGA-UXGA Do not use sizes above QVGA when not JPEG

    .jpeg_quality = 12, //0-63 lower number means higher quality
    .fb_count = 1,       //if more than one, i2s runs in continuous mode. Use only with JPEG
    .fb_location = CAMERA_FB_IN_PSRAM,
    .grab_mode = CAMERA_GRAB_WHEN_EMPTY,
};

/* Function definitions ------------------------------------------------------- */
bool ei_camera_init(void);
void ei_camera_deinit(void);
bool ei_camera_capture(uint32_t img_width, uint32_t img_height, uint8_t *out_buf) ;

/**
* @brief      Arduino setup function
*/
void setup()
{
    // put your setup code here, to run once:
    Serial.begin(115200);
    //comment out the below line to start inference immediately after upload
    while (!Serial);
    Serial.println("Edge Impulse Inferencing Demo");
    if (ei_camera_init() == false) {
        ei_printf("Failed to initialize Camera!\r\n");
    }
    else {
        ei_printf("Camera initialized\r\n");
    }

    ei_printf("\nStarting continious inference in 2 seconds...\n");
    ei_sleep(2000);
}

/**
* @brief      Get data and run inferencing
*
* @param[in]  debug  Get debug info if true
*/
void loop()
{

    // instead of wait_ms, we'll wait on the signal, this allows threads to cancel us...
    if (ei_sleep(5) != EI_IMPULSE_OK) {
        return;
    }

    snapshot_buf = (uint8_t*)malloc(EI_CAMERA_RAW_FRAME_BUFFER_COLS * EI_CAMERA_RAW_FRAME_BUFFER_ROWS * EI_CAMERA_FRAME_BYTE_SIZE);

    // check if allocation was successful
    if(snapshot_buf == nullptr) {
        ei_printf("ERR: Failed to allocate snapshot buffer!\n");
        return;
    }

    ei::signal_t signal;
    signal.total_length = EI_CLASSIFIER_INPUT_WIDTH * EI_CLASSIFIER_INPUT_HEIGHT;
    signal.get_data = &ei_camera_get_data;

    if (ei_camera_capture((size_t)EI_CLASSIFIER_INPUT_WIDTH, (size_t)EI_CLASSIFIER_INPUT_HEIGHT, snapshot_buf) == false) {
        ei_printf("Failed to capture image\r\n");
        free(snapshot_buf);
        return;
    }

    // Run the classifier
    ei_impulse_result_t result = { 0 };

    EI_IMPULSE_ERROR err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", err);
        return;
    }

    // print the predictions
    ei_printf("Predictions (DSP: %d ms., Classification: %d ms., Anomaly: %d ms.): \n",
                result.timing.dsp, result.timing.classification, result.timing.anomaly);

#if EI_CLASSIFIER_OBJECT_DETECTION == 1
    bool bb_found = result.bounding_boxes[0].value > 0;
    for (size_t ix = 0; ix < result.bounding_boxes_count; ix++) {
        auto bb = result.bounding_boxes[ix];
        if (bb.value == 0) {
            continue;
        }
        ei_printf("    %s (%f) [ x: %u, y: %u, width: %u, height: %u ]\n", bb.label, bb.value, bb.x, bb.y, bb.width, bb.height);
    }
    if (!bb_found) {
        ei_printf("    No objects found\n");
    }
#else
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label,
                                    result.classification[ix].value);
    }
#endif

#if EI_CLASSIFIER_HAS_ANOMALY == 1
        ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif


    free(snapshot_buf);

}

/**
 * @brief   Setup image sensor & start streaming
 *
 * @retval  false if initialisation failed
 */
bool ei_camera_init(void) {

    if (is_initialised) return true;

#if defined(CAMERA_MODEL_ESP_EYE)
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

    //initialize the camera
    esp_err_t err = esp_camera_init(&camera_config);
    if (err != ESP_OK) {
      Serial.printf("Camera init failed with error 0x%x\n", err);
      return false;
    }

    sensor_t * s = esp_camera_sensor_get();
    // initial sensors are flipped vertically and colors are a bit saturated
    if (s->id.PID == OV3660_PID) {
      s->set_vflip(s, 1); // flip it back
      s->set_brightness(s, 1); // up the brightness just a bit
      s->set_saturation(s, 0); // lower the saturation
    }

#if defined(CAMERA_MODEL_M5STACK_WIDE)
    s->set_vflip(s, 1);
    s->set_hmirror(s, 1);
#elif defined(CAMERA_MODEL_ESP_EYE)
    s->set_vflip(s, 1);
    s->set_hmirror(s, 1);
    s->set_awb_gain(s, 1);
#endif

    is_initialised = true;
    return true;
}

/**
 * @brief      Stop streaming of sensor data
 */
void ei_camera_deinit(void) {

    //deinitialize the camera
    esp_err_t err = esp_camera_deinit();

    if (err != ESP_OK)
    {
        ei_printf("Camera deinit failed\n");
        return;
    }

    is_initialised = false;
    return;
}


/**
 * @brief      Capture, rescale and crop image
 *
 * @param[in]  img_width     width of output image
 * @param[in]  img_height    height of output image
 * @param[in]  out_buf       pointer to store output image, NULL may be used
 *                           if ei_camera_frame_buffer is to be used for capture and resize/cropping.
 *
 * @retval     false if not initialised, image captured, rescaled or cropped failed
 *
 */
bool ei_camera_capture(uint32_t img_width, uint32_t img_height, uint8_t *out_buf) {
    bool do_resize = false;

    if (!is_initialised) {
        ei_printf("ERR: Camera is not initialized\r\n");
        return false;
    }

    camera_fb_t *fb = esp_camera_fb_get();

    if (!fb) {
        ei_printf("Camera capture failed\n");
        return false;
    }

   bool converted = fmt2rgb888(fb->buf, fb->len, PIXFORMAT_JPEG, snapshot_buf);

   esp_camera_fb_return(fb);

   if(!converted){
       ei_printf("Conversion failed\n");
       return false;
   }

    if ((img_width != EI_CAMERA_RAW_FRAME_BUFFER_COLS)
        || (img_height != EI_CAMERA_RAW_FRAME_BUFFER_ROWS)) {
        do_resize = true;
    }

    if (do_resize) {
        ei::image::processing::crop_and_interpolate_rgb888(
        out_buf,
        EI_CAMERA_RAW_FRAME_BUFFER_COLS,
        EI_CAMERA_RAW_FRAME_BUFFER_ROWS,
        out_buf,
        img_width,
        img_height);
    }


    return true;
}

static int ei_camera_get_data(size_t offset, size_t length, float *out_ptr)
{
    // we already have a RGB888 buffer, so recalculate offset into pixel index
    size_t pixel_ix = offset * 3;
    size_t pixels_left = length;
    size_t out_ptr_ix = 0;

    while (pixels_left != 0) {
        out_ptr[out_ptr_ix] = (snapshot_buf[pixel_ix] << 16) + (snapshot_buf[pixel_ix + 1] << 8) + snapshot_buf[pixel_ix + 2];

        // go to the next pixel
        out_ptr_ix++;
        pixel_ix+=3;
        pixels_left--;
    }
    // and done!
    return 0;
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_CAMERA
#error "Invalid model for current sensor"
#endif
```

Certifique-se de substituir **`#include <XIAO_esp32S3_CatDog2_inferencing.h>`** pela biblioteca que você gerou. Em seguida, faça o upload do código e aponte para as imagens de Gato ou Cachorro, ou para imagens reais; poderemos ver os resultados no monitor Serial.

Parabéns para você 🙌 por concluir o projeto de classificação de imagens com tinyML.

## Recursos

[PDF] **[ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)**

### Para Seeed Studio XIAO ESP32S3

- **[PDF]** [Esquemático do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)

- **[ZIP]** [Bibliotecas Eagle do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)

- **[DXF]** [Dimensões em DXF do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)

- **[LBR]** [Footprint Eagle do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)

- **[ZIP]** [Firmware de fábrica do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware.zip)

- **[XLSX]** [Planilha de pinout do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

<!-- - **[STEP]** [Seeed Studio XIAO ESP32S3 3D Model]() -->

### Para Seeed Studio XIAO ESP32S3 Sense

- **[PDF]** [Esquemático do Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)

- **[ZIP]** [Bibliotecas KiCAD do Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)

- **[ZIP]** [Bibliotecas Eagle do Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)

- **[DXF]** [Dimensões em DXF (superior) do Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)

- **[DXF]** [Dimensões em DXF (inferior) do Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)

- **[ZIP]** [Firmware de fábrica do Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAOESP32S3-Sense-firmware.zip)

- **[XLSX]** [Planilha de pinout do Seeed Studio XIAO ESP32S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

<!-- - **[STEP]** [Seeed Studio XIAO ESP32S3 Sense 3D Model]() -->

### Outros

- **[STP]** [Design da carcaça do XIAO ESP32S3 Sense (superior)](<https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp>)

- **[STP]** [Design da carcaça do XIAO ESP32S3 Sense (inferior)](<https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp>)

*O restante do material de código aberto está sendo compilado, então fique ligado!*

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
