---
description: Este artigo descreve como usar o microfone na placa de expansão XIAO ESP32S3 Sense.
title: Uso do Microfone para Versão Sense
keywords:
  - Template
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_sense_mic
last_update:
  date: 04/14/2023
  author: Citric
createdAt: '2023-04-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_sense_mic/
---

# Uso do microfone Seeed Studio XIAO ESP32S3

Neste tutorial, vamos mostrar como usar o microfone da placa de expansão XIAO ESP32S3 Sense. Primeiro está o uso mais básico do pino I2S, vamos obter a intensidade sonora do ambiente atual usando I2S e o microfone, e exibi-la no gráfico de forma de onda da porta serial. Em seguida, explicaremos como gravar som e salvar o áudio gravado no cartão SD.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::caution
Todo o conteúdo deste tutorial é aplicável apenas ao XIAO ESP32S3 Sense.
:::

## Primeiros Passos

Antes de começar o conteúdo do tutorial, você pode precisar preparar antecipadamente o seguinte hardware e software.

### Instalação da placa de expansão (para Sense)

Instalar a placa de expansão é muito simples, você só precisa alinhar o conector na placa de expansão com o conector B2B no XIAO ESP32S3, pressionar com firmeza até ouvir um “clique” e a instalação estará concluída.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### Preparar o cartão microSD

Você pode precisar de um cartão microSD ao trabalhar em um projeto em que as gravações são salvas.

O XIAO ESP32S3 Sense suporta cartões microSD de até **32GB**, portanto, se você estiver pronto para comprar um cartão microSD para o XIAO, consulte esta especificação. Formate também o cartão microSD para o formato **FAT32** antes de usá-lo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

Após a formatação, você pode inserir o cartão microSD no slot de cartão microSD. Observe a direção de inserção, o lado com o “gold finger” deve ficar voltado para dentro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

### Entendendo os Pinos

<div class="table-center">
	<table align="center">
    <tr>
			<th>Número do Pino</th>
			<th>Descrição da Função</th>
		</tr>
		<tr>
			<td align="center">GPIO 41</td>
			<td align="center">DATA do Microfone PDM</td>
		</tr>
		<tr>
			<td align="center">GPIO 42</td>
			<td align="center">CLK do Microfone PDM</td>
		</tr>
	</table>
</div>

## Detecção da intensidade sonora

Para o primeiro exemplo de projeto, vamos detectar o ruído no ambiente e mostrar a intensidade sonora ambiente detectada pelo microfone usando o gráfico de forma de onda da porta serial do Arduino IDE.

A seguir está o programa de exemplo completo.

:::tip
Verifique e certifique-se de qual versão do `esp32` você está usando; o exemplo a seguir é para 2.0.x, o abaixo é para 3.0.x e posteriores
:::

```cpp
#include <I2S.h>

void setup() {
  // Open serial communications and wait for port to open:
  // A baud rate of 115200 is used instead of 9600 for a faster data rate
  // on non-native USB ports
  Serial.begin(115200);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // start I2S at 16 kHz with 16-bits per sample
  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
  }
}

void loop() {
  // read a sample
  int sample = I2S.read();

  if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
  }
}
```

:::tip
O exemplo acima é compatível apenas com 2.0.x do `esp32`; se você estiver na versão mais recente (por exemplo, 3.0.x), use o de baixo
:::

```cpp
#include <ESP_I2S.h>
I2SClass I2S;

void setup() {
  // Open serial communications and wait for port to open:
  // A baud rate of 115200 is used instead of 9600 for a faster data rate
  // on non-native USB ports
  Serial.begin(115200);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // setup 42 PDM clock and 41 PDM data pins
  I2S.setPinsPdmRx(42, 41);

  // start I2S at 16 kHz with 16-bits per sample
  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
  }
}

void loop() {
  // read a sample
  int sample = I2S.read();

  if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
  }
}
```

Envie este programa para o XIAO ESP32S3 Sense e abra o **Serial Plotter**; você verá a curva de variação da intensidade do som.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/83.png" style={{width:600, height:'auto'}}/></div>

### Anotação do programa

No início do programa, precisamos primeiro importar a biblioteca I2S para poder usar os pinos do microfone.

```c
#include <I2S.h>
```

A função `setAllPins()` é chamada no objeto I2S para configurar os pinos usados para a interface I2S. A função recebe cinco parâmetros inteiros que representam, respectivamente, os pinos GPIO conectados ao bit clock, word select, entrada de dados, saída de dados e linhas de seleção de canal da interface I2S.

```c
I2S.setAllPins(-1, 42, 41, -1, -1);
```

Neste código específico, os valores `-1` indicam que os pinos correspondentes não são usados, enquanto os valores `42` e `41` representam, respectivamente, os pinos GPIO conectados às linhas de word select e entrada de dados. As linhas de saída de dados e seleção de canal não são usadas nesta configuração e são definidas como `-1`.

```c
if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
}
```

A função `begin()` é chamada no objeto I2S para inicializar a interface I2S com os parâmetros especificados: modo `PDM_MONO_MODE`, taxa de amostragem de `16000` Hz e resolução de `16-bit`.

:::tip
Deve-se observar que, para o chip ESP32-S3 atual, só podemos usar `PDM_MONO_MODE` e a largura de bits de amostragem só pode ser `16bit`. Apenas a taxa de amostragem pode ser modificada, mas após testes, a taxa de 16 kHz é relativamente estável.
:::

```c
int sample = I2S.read();

if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
}
```

A função `read()` é chamada no objeto I2S para ler uma única amostra de áudio da interface I2S. A instrução if verifica o valor da variável sample. Se o valor de sample não for 0, -1 ou 1, ele é considerado uma amostra de áudio válida, e o código dentro do bloco if será executado. Nesse caso, o valor de sample é impresso no console serial usando a função `Serial.println()`.

## Salvar o som gravado no cartão microSD

Neste próximo projeto, vamos guiá-lo sobre como combinar as funções do cartão microSD e salvar o som gravado no cartão microSD. Portanto, para este projeto, prepare o cartão microSD e formate-o previamente para o formato **FAT32**.

Se esta for a sua primeira vez usando um cartão microSD no XIAO ESP32S3, você pode ler o conteúdo do [file system Wiki](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_sense_filesystem/#prepare-the-microsd-card) para aprender sobre instalação e preparação do cartão microSD.

A seguir está o programa Arduino para este projeto.
:::tip
Verifique e certifique-se de qual versão do `esp32` você está usando; o exemplo a seguir é para 2.0.x, o abaixo é para 3.0.x e posteriores
:::

```cpp
/* 
 * WAV Recorder for Seeed XIAO ESP32S3 Sense 
*/

#include <I2S.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// make changes as needed
#define RECORD_TIME   20  // seconds, The maximum value is 240
#define WAV_FILE_NAME "arduino_rec"

// do not change for best
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2

void setup() {
  Serial.begin(115200);
  while (!Serial) ;
  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("Failed to initialize I2S!");
    while (1) ;
  }
  if(!SD.begin(21)){
    Serial.println("Failed to mount SD Card!");
    while (1) ;
  }
  record_wav();
}

void loop() {
  delay(1000);
  Serial.printf(".");
}

void record_wav()
{
  uint32_t sample_size = 0;
  uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;
  uint8_t *rec_buffer = NULL;
  Serial.printf("Ready to start recording ...\n");

  File file = SD.open("/"WAV_FILE_NAME".wav", FILE_WRITE);
  // Write the header to the WAV file
  uint8_t wav_header[WAV_HEADER_SIZE];
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  file.write(wav_header, WAV_HEADER_SIZE);

  // PSRAM malloc for recording
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("malloc failed!\n");
    while(1) ;
  }
  Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());

  // Start recording
  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
  if (sample_size == 0) {
    Serial.printf("Record Failed!\n");
  } else {
    Serial.printf("Record %d bytes\n", sample_size);
  }

  // Increase volume
  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
  }

  // Write data to the WAV file
  Serial.printf("Writing to the file ...\n");
  if (file.write(rec_buffer, record_size) != record_size)
    Serial.printf("Write file Failed!\n");

  free(rec_buffer);
  file.close();
  Serial.printf("The recording is over.\n");
}

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // See this for reference: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}
```

:::tip
O exemplo acima é compatível apenas com a versão 2.0.x do `esp32`; se você estiver na versão mais recente (por exemplo, 3.0.x), use o exemplo abaixo
:::

```cpp
#include "ESP_I2S.h"
#include "FS.h"
#include "SD.h"

void setup() {
  // Create an instance of the I2SClass
  I2SClass i2s;

  // Create variables to store the audio data
  uint8_t *wav_buffer;
  size_t wav_size;

  // Initialize the serial port
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  Serial.println("Initializing I2S bus...");

  // Set up the pins used for audio input
  i2s.setPinsPdmRx(42, 41);

  // start I2S at 16 kHz with 16-bits per sample
  if (!i2s.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
  }

  Serial.println("I2S bus initialized.");
  Serial.println("Initializing SD card...");

  // Set up the pins used for SD card access
  if(!SD.begin(21)){
    Serial.println("Failed to mount SD Card!");
    while (1) ;
  }
  Serial.println("SD card initialized.");
  Serial.println("Recording 20 seconds of audio data...");

  // Record 20 seconds of audio data
  wav_buffer = i2s.recordWAV(20, &wav_size);

  // Create a file on the SD card
  File file = SD.open("/arduinor_rec.wav", FILE_WRITE);
  if (!file) {
    Serial.println("Failed to open file for writing!");
    return;
  }

  Serial.println("Writing audio data to file...");

  // Write the audio data to the file
  if (file.write(wav_buffer, wav_size) != wav_size) {
    Serial.println("Failed to write audio data to file!");
    return;
  }

  // Close the file
  file.close();

  Serial.println("Application complete.");
}

void loop() {
  delay(1000);
  Serial.printf(".");
}
```

Para executar este exemplo, precisaremos usar a função PSRAM do chip ESP-32, portanto ative-a antes de fazer o upload.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:700, height:'auto'}}/></div>

Este programa é executado apenas uma vez depois que o usuário **liga o monitor serial**, gravando por 20 segundos e salvando o arquivo de gravação no cartão microSD como "arduino_rec.wav".

Quando o "." for exibido a cada 1 segundo no monitor serial, a execução do programa estará concluída e você poderá reproduzir o arquivo de som gravado com a ajuda de um leitor de cartão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/102.png" style={{width:700, height:'auto'}}/></div>

:::tip
Para reproduzir o áudio gravado pelo XIAO ESP32S3, talvez você precise usar um reprodutor de áudio que suporte o formato WAV.
:::

### Anotação do programa

Neste programa, escrevemos duas funções para a função de gravação, uma é `record_wav()` e a outra é `generate_wav_header()`.

- `record_wav()`: Função de gravação. Nessa função, o programa lê dados de áudio de um microfone usando a interface I2S e os armazena em um cartão SD como um arquivo de áudio WAV.

  a. Inicializar variáveis. O programa define um buffer `rec_buffer` para armazenar os dados gravados e define o tempo de gravação `RECORD_TIME`.

  b. Abrir o arquivo WAV. O programa usa a função `SD.open()` para abrir um arquivo de áudio WAV e define seu nome de arquivo como `WAV_FILE_NAME`.

  c. Escrever o cabeçalho do arquivo WAV. O programa gera as informações de cabeçalho do arquivo de áudio WAV usando a função `generate_wav_header()` e as escreve no arquivo WAV aberto.

  d. Alocar memória e iniciar a gravação. O programa usa a função `ps_malloc()` para alocar um bloco de memória na PSRAM do ESP32S3 para armazenar os dados gravados e usa a função `esp_i2s::i2s_read()` para ler dados de áudio do microfone. Os dados lidos são armazenados no buffer rec_buffer.

  e. Aumentar o volume. O programa aumenta o volume dos dados gravados usando um valor de ganho definido pela constante `VOLUME_GAIN`.

  f. Escrever os dados gravados no arquivo WAV. O programa usa a função `file.write()` para escrever os dados gravados no arquivo WAV aberto.

  g. Liberar a memória do buffer e fechar o arquivo WAV. O programa usa a função `free()` para liberar a memória do buffer `rec_buffer` e usa a função `file.close()` para fechar o arquivo WAV aberto.

- `generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)`: Função para gerar as informações de cabeçalho de um arquivo WAV. Nessa função, o programa gera um array de bytes contendo as informações de cabeçalho de um arquivo WAV com base nas especificações do arquivo WAV.

  a. Definir as constantes para as informações de cabeçalho do arquivo WAV. O programa define um array de bytes `set_wav_header` contendo as informações de cabeçalho de um arquivo WAV e define as constantes para as especificações do arquivo WAV, incluindo `NUM_CHANNELS`, `BITS_PER_SAMPLE`, `WAV_HEADER_SIZE` e `SUB_CHUNK_SIZE`.

  b. Configurar as informações de cabeçalho do arquivo WAV. O programa configura as informações de cabeçalho do arquivo WAV usando as constantes definidas na etapa a e calcula os valores de alguns campos com base nas especificações do arquivo WAV, incluindo `AUDIO_FORMAT`, `BYTE_RATE`, `BLOCK_ALIGN`, `SAMPLES_PER_CHANNEL` e `CHUNK_SIZE`. Os valores calculados são armazenados no array de bytes `set_wav_header`.

  c. Copiar as informações de cabeçalho do arquivo WAV. O programa copia as informações de cabeçalho armazenadas em `set_wav_header` para o array de bytes `wav_header`.

## Solução de problemas

### Por que não consigo reproduzir os arquivos de áudio gravados?

Se você se deparar com uma situação em que não consegue reproduzir, verifique as informações de depuração impressas pelo monitor serial em busca de mensagens de erro sobre leitura e gravação do cartão. Se houver, substitua o cartão microSD ou verifique se a conexão entre o cartão e a placa de expansão está solta ou instável. Se não houver problema com o cartão, então o arquivo de áudio deve ter tamanho; se houver um problema na gravação, isso pode aparecer como um arquivo de áudio gravado com tamanho de apenas 0 KB.

Por exemplo, na figura abaixo, há um problema com a leitura e a gravação do cartão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/103.png" style={{width:600, height:'auto'}}/></div>

Se não houver problemas com o cartão e a gravação tiver sido bem-sucedida, você precisará verificar se o software suporta a reprodução de áudio em formato WAV. Recomendamos usar software de reprodução de música especializado para reproduzir o áudio; tente não usar reprodutor de vídeo. Após testes práticos, há muitos reprodutores de vídeo (embora suportem o formato WAV) que não conseguem reproduzi-lo.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
