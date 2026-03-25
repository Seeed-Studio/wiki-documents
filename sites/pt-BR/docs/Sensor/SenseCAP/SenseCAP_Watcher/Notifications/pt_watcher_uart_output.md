---
description: O usuário aprenderá como integrar o Watcher com o sistema Grove, permitindo expandir suas capacidades e conectá-lo a uma ampla variedade de sensores e periféricos.
title: Saída UART
image: https://files.seeedstudio.com/wiki/watcher_getting_started/64.jpg
slug: /uart_output
sidebar_position: 1
last_update:
  date: 07/10/2024
  author: Citric
createdAt: '2024-07-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/uart_output/
---

# Como sensor & Uso com Grove

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/64.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora</font></span></strong>
    </a>
</div><br />

Neste wiki, exploraremos as possibilidades empolgantes que surgem quando o Watcher, atuando como um sensor, utiliza sua funcionalidade de UART (Universal Asynchronous Receiver/Transmitter). Ao habilitar a comunicação UART, o Watcher pode transmitir dados valiosos, como imagens capturadas e resultados de reconhecimento, por meio de sua interface UART localizada na parte traseira do dispositivo. Isso abre um mundo de oportunidades para integrar o Watcher a diversas plataformas de hardware e criar aplicações inovadoras.

Ao longo deste wiki, entraremos em detalhes sobre como ler e interpretar os dados de saída da interface UART do Watcher. Além disso, forneceremos tutoriais abrangentes sobre como analisar e utilizar esses dados usando placas e plataformas de desenvolvimento populares, incluindo XIAO, Arduino, Raspberry Pi e Jetson.

## Configuração Avançada do SenseCAP Watcher

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

SenseCAP Watcher é o primeiro agente físico de LLM para ambientes inteligentes, capaz de monitorar cenas, acionar ações e interagir com base em comandos. Este vídeo apresentará como o SenseCAP Watcher seleciona modelos de disparo de cena com base na análise da tarefa: modelo embarcado e modelo LLM. Também mostraremos como configurar a luz RGB e o alerta de Display&Sound, além do modo de envio de notificações: APP, UART, HTTP.

## Fiação UART do Watcher

Quando você estiver pronto para usar a UART para alarmes de mensagem, conecte o Watcher ao seu MCU da seguinte forma.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/58.png" style={{width:800, height:'auto'}}/></div>

:::note
Observe que, se o seu Watcher e o MCU forem alimentados separadamente, então você **não precisa** conectar os pinos **3.3V ou 5V** do Watcher e do MCU.

Se você planeja usar o Watcher para alimentar o MCU, então você pode usar **3.3V** para alimentar o MCU além da fiação mostrada na figura. (Não use os pinos de 5V, eles são apenas para entrada)

Se você planeja usar o MCU para alimentar o Watcher, então você precisa usar a entrada de **5V**. (3.3V pode não ser suficiente para que o Watcher funcione corretamente)
:::

## Habilitando a Funcionalidade UART no Watcher

Para liberar todo o potencial dos recursos de UART do Watcher, primeiro precisamos habilitar a funcionalidade UART dentro do dispositivo. Isso é particularmente útil em cenários em que o Watcher é utilizado como um sistema de alarme. Quando um alarme é disparado, o Watcher pode ativar sua comunicação UART, permitindo transmitir informações críticas, como imagens capturadas e resultados de reconhecimento, para dispositivos externos para processamento e análise adicionais.

Para habilitar a função de alarme via UART, você tem duas opções:

1. Solicitar explicitamente que o Watcher o notifique via UART ao atribuir tarefas usando o aplicativo SenseCraft APP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/60.png" style={{width:250, height:'auto'}}/></div>

2. Habilitar manualmente a função de alarme UART nas configurações detalhadas da tarefa:

   - Acesse o **Detail Config** da tarefa que você deseja configurar.
   - Localize a seção **Action**.
   - Marque a caixa para habilitar a **Serial Port / UART Output**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/86.png" style={{width:250, height:'auto'}}/></div><br />

:::tip
Escolha se você precisa habilitar a saída de imagens de acordo com o seu cenário de aplicação real. Se **Include base64 image** estiver habilitado, então seu MCU precisa de **pelo menos 70k de memória** para armazenar em cache a imagem.
:::

Depois de habilitar a função de alarme UART usando qualquer um dos métodos acima, o Watcher irá emitir as informações de alarme necessárias via UART sempre que detectar o conteúdo de alarme especificado. Certifique-se de que o Watcher esteja conectado ao dispositivo receptor apropriado, como um microcontrolador ou um computador com terminal serial, para capturar e processar as informações de alarme transmitidas via UART.

## Lendo a Saída UART do Watcher

Depois que a funcionalidade UART é habilitada, o Watcher começará a transmitir dados por meio de sua interface UART. Nesta seção, forneceremos um guia detalhado sobre como ler e interpretar os dados recebidos da saída UART do Watcher. Cobriremos as conexões de hardware necessárias, protocolos de comunicação e formatos de dados para garantir um processo de obtenção de dados tranquilo e bem-sucedido.

Por padrão, o Watcher usa a seguinte configuração UART: taxa de transmissão de **115200**, **8 bits de dados**, **sem paridade**, **1 bit de parada** e **sem controle de fluxo por hardware**. Ao conectar-se à interface UART do Watcher, certifique-se de que o dispositivo receptor esteja configurado com as mesmas configurações para garantir uma comunicação adequada.

Quando o Watcher envia informações de alarme via UART, ele segue um protocolo e formato específicos com base na estrutura `tf_module_uart_alarm_t` definida no arquivo de cabeçalho `tf_module_uart_alarm.h`. O protocolo e o formato UART para o módulo de alarme UART do Watcher são os seguintes:

### Formato de Saída

O formato da saída UART é controlado pelo campo `output_format`.

- Quando `output_format` é definido como 0, a saída está em formato binário.
- Quando `output_format` é definido como 1, a saída está em formato JSON.

:::note
`output_format` é definido como 1 por padrão para saída em JSON.
:::

### Formato de Saída Binária

Quando `output_format` é definido como 0, a estrutura do pacote de saída UART é a seguinte:

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/api.png" style={{width:1000, height:'auto'}}/></div><br />

- `PKT_MAGIC_HEADER`: Cabeçalho mágico do pacote, fixo como "SEEED" (5 bytes).
- `Prompt Str Len`: O comprimento da string de prompt, inteiro sem sinal de 4 bytes em little-endian.
- `Prompt Str`: A string de prompt, usada para explicar brevemente a tarefa que o Watcher está executando. Se o parâmetro `text` for definido, seu valor será usado.
- `Big Image Len`: O comprimento da imagem grande, inteiro sem sinal de 4 bytes em little-endian. Incluído apenas quando `include_big_image` é `true`.
- `Big Image`: Imagem JPG 640*480, codificada em base64, sem caixas dos objetos detectados. Incluída apenas quando `include_big_image` é `true`.
- `Small Image Len`: O comprimento da imagem pequena, inteiro sem sinal de 4 bytes em little-endian. Incluído apenas quando `include_small_image` é `true`.
- `Small Image`: Imagem JPG 240*240, codificada em base64, com caixas desenhadas para os objetos detectados. Incluída apenas quando `include_small_image` é `true`.
- `Boxes Count`: O número de caixas de objetos detectados, inteiro sem sinal de 4 bytes em little-endian. Incluído apenas quando `include_boxes` é `true`.
- `Box Structure`: A estrutura de uma caixa de objeto detectado, cada caixa ocupa 10 bytes, incluindo coordenadas, pontuação e ID da classe do alvo. Incluída apenas quando `include_boxes` é `true`.

:::note
A mensagem das caixas reconhecidas (boxes) não será recebida neste momento, pois o recurso correspondente do Watcher ainda está em desenvolvimento e ainda não foi incluído na versão mais recente v1.1.
:::

### Formato de Saída JSON

Quando `output_format` é definido como 1, a estrutura do pacote de saída UART é a seguinte:

```json
{
      "prompt": "People detected",
      "big_image": "base64 encoded JPG image, if include_big_image is enabled, otherwise this field is omitted",
      "inference":{
        "boxes": [
            {
                "x": 100,
                "y": 100,
                "w": 50,
                "h": 60,
                "score": 0.8,
                "target_cls_id": 1
            }
        ],
        "classes_name": ["person"]
      },

}
```

Entre eles, **(x,y)** é a posição do ponto central do objeto reconhecido, e **(w,h)** é a altura e a largura da caixa de reconhecimento, conforme mostrado na figura abaixo. **score** é o nível de confiança e **target_cls_id** é o ID do objeto reconhecido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/xyhw.png" style={{width:400, height:'auto'}}/></div>

### Opções de Configuração

- `output_format`: Controla o formato da saída UART, o padrão é 1 (formato JSON).
- `text`: Usado para preencher o campo `prompt` do pacote de saída.
- `include_big_image`: Booleano (true | false), controla se a imagem grande é incluída na saída, o padrão é `true`.
- `include_boxes`: Booleano (true | false), controla se as caixas são incluídas na saída, o padrão é `true`.

Nota: Se qualquer campo de configuração for omitido, o valor padrão será assumido.

:::note
A mensagem das caixas reconhecidas (boxes) não será recebida neste momento, pois o recurso correspondente do Watcher ainda está em desenvolvimento e ainda não foi incluído na versão mais recente v1.1.
:::

## XIAO ESP32 Série & Watcher

Aprenda como conectar o Watcher à placa XIAO ESP32 Série e analisar os dados UART usando o Arduino. Esta seção o guiará sobre como conectar o Watcher à placa XIAO ESP32 Série e analisar os dados UART usando o Arduino.

### Fiação

Este tutorial é compatível com a série XIAO:

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32C3</th>
   <th>XIAO ESP32S3</th>
            <th>XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip
Isso não significa que outras séries XIAO não sejam suportadas. Principalmente porque os dados de mensagem reportados pelo Watcher ocupam cerca de **100k** (pelo menos 70k) de memória, recomendamos que você use a série ESP32 do XIAO para a parte UART do desenvolvimento com o Watcher. Se você não precisar analisar dados de imagem, então a memória dos outros XIAO é perfeitamente adequada.
:::

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/63.png" style={{width:700, height:'auto'}}/></div><br />

- Conecte o pino TX do Watcher ao pino RX da interface UART do XIAO.

- Conecte o pino RX do Watcher ao pino TX da interface UART do XIAO.

- Conecte o pino GND do Watcher a um pino GND no XIAO.

### Explicação do Código

Você pode usar qualquer placa de desenvolvimento XIAO ESP32 Série, ou qualquer outra placa da série ESP32, para usar o programa a seguir para ler o fluxo de dados UART do Watcher.

:::note
Atualmente, apenas fluxos de dados JSON podem ser gerados, portanto somente programas que analisam fluxos de dados JSON são fornecidos.

Outros XIAOs nem sempre são suportados, principalmente porque a análise de um fluxo JSON requer pelo menos 70k de memória.
:::

```cpp
#include <ArduinoJson.h>

long int count = 0;  // Number of alarms

void setup() {
  Serial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, D7, D6);  // RX, TX
  while(!Serial);
  delay(100);

  Serial.println("Device Ready. Waiting for Watcher's JSON data...");
}

void loop() {
  if (Serial1.available()) {
    // Set up enough space to store the parsed JSON objects
    const size_t capacity = 1024 * 100 + 512; // At least 70k, insurance 100k
    DynamicJsonDocument doc(capacity);

    // Streaming parsing from Serial1
    DeserializationError error = deserializeJson(doc, Serial1);

    if (error) {
      Serial.print("deserializeJson() failed: ");
      Serial.println(error.c_str());
      return;
    }

    // Print the parsed key-value pairs
    if (doc.containsKey("prompt")) {
      Serial.print("prompt: ");
      Serial.println(doc["prompt"].as<String>());
    }

    if (doc.containsKey("inference")) {
      Serial.print("inference: ");
      Serial.println(doc["inference"].as<String>());
    }

   if (doc.containsKey("inference")) {
     JsonArray boxes = doc["inference"]["boxes"][0].as<JsonArray>();
      Serial.println();
      Serial.println("You can get the number inside the boxes.");
      Serial.print("Box -> ");
      Serial.print("x: ");
      Serial.print(boxes[0].as<int>());
      Serial.print(", y: ");
      Serial.print(boxes[1].as<int>());
      Serial.print(", widths: ");
      Serial.print(boxes[2].as<int>());
      Serial.print(", height: ");
      Serial.print(boxes[3].as<int>());
      Serial.print(", score: ");
      Serial.print(boxes[4].as<int>());
      Serial.print(", target_cls_id: ");
      Serial.println(boxes[5].as<int>());
   }

    // You need to turn on "Inculde base64 iamge" button in your app, default is off.
    //And then, uncomment the following code.
    /*
    if (doc.containsKey("big_image")) {
      Serial.print("big_image: ");
      String big_imageData = doc["big_image"].as<String>();
      // Print only the first 100 characters of the image data for example
      Serial.println(big_imageData.substring(0, 100) + "...");
    }
    */


    count++;
    if(count > 2147483646){  // Spillage prevention
      count = 0;
    }
    Serial.print("The ");
    Serial.print(count);
    Serial.println(" alarm message reception is complete. Wait for the next message...");
    Serial.println("------------------------------------------------------------------");
  }
}
```

O código fornecido demonstra como receber e analisar dados JSON do Watcher usando a Arduino IDE e a biblioteca ArduinoJson. Aqui está uma breve explicação do código:

1. A biblioteca necessária, **ArduinoJson**, é incluída para lidar com a análise JSON. Você pode pesquisá-la e instalá-la no gerenciador de bibliotecas do Arduino.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/bblanchon/ArduinoJson" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Ir para o Github 🖱️</font></span></strong>
    </a>
</div>

2. Na função `setup()`, a comunicação serial é inicializada tanto para a serial USB (para depuração) quanto para a serial UART (para receber dados do Watcher).

3. Na função `loop()`, o código verifica se há dados disponíveis na serial UART.

4. Se houver dados disponíveis, um `DynamicJsonDocument` é criado com uma capacidade especificada para armazenar os objetos JSON analisados.

5. Os dados JSON são analisados usando a função `deserializeJson()`, e quaisquer erros de análise são tratados.

6. O código então verifica a presença de chaves específicas no objeto JSON analisado, como "prompt", "big_image" e "small_image".

:::note
A análise de informações sobre caixas reconhecidas (boxes) não está disponível no momento, porque a função correspondente do Watcher ainda está em desenvolvimento, e essa informação ainda não é reportada na versão mais recente v1.0.1.
:::

7. Se uma chave for encontrada, seu valor correspondente é impresso na serial USB para fins de depuração.

8. O código também mantém o controle do número de mensagens de alarme recebidas usando a variável `count`.

9. Por fim, uma mensagem é impressa para indicar a conclusão de cada recepção de mensagem de alarme, e o código aguarda a próxima mensagem.

### Enviando o Código para a Série XIAO ESP32

Para enviar o código para sua placa XIAO ESP32 Série, siga estas etapas:

1. Conecte sua placa XIAO ESP32 Série ao computador usando um cabo USB.

2. Abra a Arduino IDE e certifique-se de que você tenha o pacote de suporte de placa necessário instalado para a XIAO ESP32 Série.

   - Se você quiser usar **Seeed Studio XIAO ESP32C3** para as rotinas, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started#software-setup)** para concluir a adição.

   - Se você quiser usar **Seeed Studio XIAO ESP32S3** para as rotinas, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started#preparação-de-software)** para concluir a adição.

   - Se você quiser usar **Seeed Studio XIAO ESP32C6** para as rotinas, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/)** para concluir a adição.

3. Selecione a placa e a porta apropriadas no menu Tools na Arduino IDE.

4. Abra o código fornecido na Arduino IDE.

5. Clique no botão **Upload** para compilar e enviar o código para sua placa XIAO ESP32 Série.

### Resultados Esperados

Depois que o código for enviado e estiver em execução na sua placa XIAO ESP32 Série, após o Watcher identificar o alarme alvo, você deverá observar o seguinte comportamento:

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/62.png" style={{width:800, height:'auto'}}/></div><br />

Você também pode tentar usar outra placa de desenvolvimento Arduino, mas certifique-se de que ela tenha memória suficiente.

## Raspberry Pi & Watcher

Explore o processo de conexão do Watcher a um Raspberry Pi e a utilização de scripts Python para analisar e processar os dados UART.

### Fiação

Esta seção explicará usando o Raspberry Pi 5 como exemplo; se você precisar, pode fazer um pedido através do link abaixo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Comprar Raspberry Pi 🖱️</font></span></strong>
    </a>
</div>

Se você estiver usando outra série Raspberry Pi, o código e os tutoriais sobre como usá-la são essencialmente os mesmos.

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/65.png" style={{width:800, height:'auto'}}/></div><br />

- Conecte o pino TX do Watcher ao pino RX (GPIO 15) do Raspberry Pi.

- Conecte o pino RX do Watcher ao pino TX (GPIO 14) do Raspberry Pi.

- Conecte o pino GND do Watcher a um pino GND no Raspberry Pi.

### Explicação do Código

Antes de executar os scripts Python, certifique-se de instalar as dependências necessárias:

```
sudo apt update
sudo apt install python3-pip
pip3 install pyserial pillow
```

Verifique o nome do dispositivo da interface UART no Raspberry Pi:

```
ls /dev/ttyAMA*
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/67.png" style={{width:700, height:'auto'}}/></div><br />

O primeiro script em Python lê os dados JSON do Watcher via UART e os imprime:

```python
import serial

# Set up the serial port
ser = serial.Serial('/dev/ttyAMA0', 115200, timeout=1) 

def read_json_from_serial():
    while True:
        if ser.in_waiting > 0:
            data = ser.readline()
            print(data.decode().strip())

if __name__ == "__main__":
    print("Starting serial JSON reader on Raspberry Pi...")
    read_json_from_serial()
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/68.png" style={{width:900, height:'auto'}}/></div><br />

:::note

1. Minha interface UART corresponde a `/dev/ttyAMA0`, se a sua não corresponder, modifique-a você mesmo.

2. Este é um script de teste que você pode usar para verificar se a UART do Raspberry Pi/Watcher está funcionando corretamente.

:::

O segundo script em Python se baseia no primeiro e adiciona análise de JSON e salvamento de dados de imagem:

```python
import json
import serial  
import base64
from PIL import Image
import io

# Set up the serial port
ser = serial.Serial('/dev/ttyAMA0', 115200, timeout=1)

# Initialize image counters
big_image_counter = 1
small_image_counter = 1

def read_json_from_serial(): 
    buffer = ""
    try:
        while True:
            if ser.in_waiting > 0:
                data = ser.read(ser.in_waiting).decode()  
                buffer += data

                if '}' in buffer:
                    end = buffer.rfind('}')
                    json_data = buffer[:end+1]
                    buffer = buffer[end+1:]

                    try:  
                        data = json.loads(json_data)
                        print("Received JSON data, processing...")
                        process_json_data(data)
                    except json.JSONDecodeError:
                        print("Error decoding JSON")  
                        buffer = json_data + buffer
    except Exception as e:
        print(f"An error occurred: {e}")

def process_json_data(data):
    global big_image_counter, small_image_counter  # Declare global variables

    # Process prompt info
    if "prompt" in data:  
        print(f"Prompt: {data['prompt']}")

    # Process boxes info
    #if "boxes" in data:
        #for index, box in enumerate(data['boxes']):
            #print(f"Box {index + 1} - x: {box['x']}, y: {box['y']}, w: {box['w']}, h: {box['h']}, score: {box['score']}, target_cls_id: {box['target_cls_id']}")

    if "big_image" in data:  
        filename = f'big_image_{big_image_counter}.png'
        decode_and_save_image(data['big_image'], filename) 
        print(f"Big image processed and saved as {filename}.")
        big_image_counter += 1  # Update global variable 

    if "small_image" in data:
        filename = f'small_image_{small_image_counter}.png' 
        decode_and_save_image(data['small_image'], filename)
        print(f"Small image processed and saved as {filename}.")  
        small_image_counter += 1  # Update global variable

def decode_and_save_image(base64_data, filename):
    image_bytes = base64.b64decode(base64_data)
    image = Image.open(io.BytesIO(image_bytes))
    image.save(filename)  # Save as PNG file
    return image

if __name__ == "__main__": 
    print("Starting serial JSON reader on Raspberry Pi...")
    read_json_from_serial()
```

:::note
Atualmente, apenas fluxos de dados JSON podem ser gerados, portanto, somente programas que analisam fluxos de dados JSON são fornecidos.
:::

Este script faz o seguinte:

- Lê dados JSON da UART em um loop

- Decodifica os dados JSON e chama `process_json_data` para tratá-los

- Extrai informações de prompt e dados de imagem do JSON

:::note
A análise das informações sobre caixas reconhecidas (boxes) não está disponível no momento, porque a função correspondente do Watcher ainda está em desenvolvimento, e essas informações ainda não são relatadas na versão v1.0.1 mais recente.
:::

- Decodifica os dados de imagem codificados em base64 e salva como arquivos PNG usando `decode_and_save_image`

- Imprime as informações extraídas e os nomes dos arquivos das imagens salvas

### Executando o código no Raspberry Pi

1. Crie um novo arquivo Python no Raspberry Pi, por exemplo, watcher_uart.py:

```
nano watcher_uart.py
```

2. Copie e cole o código Python completo no arquivo.

3. Pressione Ctrl+X, depois Y e Enter para salvar e sair do editor.

4. Execute o script Python:

```
python watcher_uart.py
```

### Resultados Esperados

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/69.png" style={{width:1000, height:'auto'}}/></div><br />

Depois de executar o script:

- Os dados JSON analisados recebidos do Watcher serão impressos no terminal em tempo real.

- A imagem grande e a imagem pequena recebidas serão salvas automaticamente como arquivos big_image_x.png e small_image_x.png.

É isso! Agora você aprendeu como conectar o Watcher a um Raspberry Pi, ler os dados da UART com Python, analisar o JSON e salvar as imagens transmitidas. Sinta-se à vontade para experimentar mais, como tentar exibir os dados recebidos em uma tela conectada ao Raspberry Pi em tempo real.

## reComputer Jetson & Watch

Explore o processo de conectar o Watcher a um reComputer (um dispositivo baseado em NVIDIA Jetson) e utilizar scripts em Python para analisar e processar os dados da UART.

### Fiação

Este tutorial explicará, como exemplo, a placa carrier reComputer J401 adequada para desenvolvedores e, se você quiser comprar o reComputer, pode adquiri-lo no link abaixo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Comprar reComputer 🖱️</font></span></strong>
    </a>
</div>

Em teoria, o conteúdo e o código desta seção se aplicam a todos os produtos da série NVIDIA Jetson.

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/66.png" style={{width:800, height:'auto'}}/></div><br />

- Conecte o pino TX do Watcher ao pino RX da interface UART do reComputer.

- Conecte o pino RX do Watcher ao pino TX da interface UART do reComputer.

- Conecte o pino GND do Watcher a um pino GND no reComputer.

### Explicação do Código

Antes de executar os scripts em Python, certifique-se de instalar as dependências necessárias:

```
sudo apt-get update
sudo apt-get install python3-serial
sudo apt-get install python3-pillow
```

Se você não pretende usar o Console Serial na UART, deve desabilitar o Console Serial:

```
systemctl stop nvgetty
systemctl disable nvgetty
udevadm trigger
```

Talvez seja necessário reiniciar o seu reComputer neste ponto para que as alterações entrem em vigor.

Verifique o nome de dispositivo da interface UART no reComputer:

```
ls /dev/ttyTHS*
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/71.png" style={{width:700, height:'auto'}}/></div><br />

O primeiro script em Python lê os dados JSON do Watcher via UART e os imprime:

```python
import serial

# Set up the serial port
ser = serial.Serial('/dev/ttyTHS0', 115200, timeout=1) 

def read_json_from_serial():
    while True:
        if ser.in_waiting > 0:
            data = ser.readline()
            print(data.decode().strip())

if __name__ == "__main__":
    print("Starting serial JSON reader on reComputer...")
    read_json_from_serial()
```

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/70.png" style={{width:1000, height:'auto'}}/></div><br />

:::note

1. Minha interface UART corresponde a `/dev/ttyTHS0`, se a sua não corresponder, modifique-a você mesmo.

2. Este é um script de teste que você pode usar para verificar se a UART do reComputer/Watcher está funcionando corretamente.

:::

O segundo script em Python se baseia no primeiro e adiciona análise de JSON e salvamento de dados de imagem:

```python
import json
import serial  
import base64
from PIL import Image
import io

# Set up the serial port
ser = serial.Serial('/dev/ttyTHS0', 115200, timeout=1)

# Initialize image counters
big_image_counter = 1
small_image_counter = 1

def read_json_from_serial(): 
    buffer = ""
    try:
        while True:
            if ser.in_waiting > 0:
                data = ser.read(ser.in_waiting).decode()  
                buffer += data

                if '}' in buffer:
                    end = buffer.rfind('}')
                    json_data = buffer[:end+1]
                    buffer = buffer[end+1:]

                    try:  
                        data = json.loads(json_data)
                        print("Received JSON data, processing...")
                        process_json_data(data)
                    except json.JSONDecodeError:
                        print("Error decoding JSON")  
                        buffer = json_data + buffer
    except Exception as e:
        print(f"An error occurred: {e}")

def process_json_data(data):
    global big_image_counter, small_image_counter  # Declare global variables

    # Process prompt info
    if "prompt" in data:  
        print(f"Prompt: {data['prompt']}")

    # Process boxes info
    #if "boxes" in data:
        #for index, box in enumerate(data['boxes']):
            #print(f"Box {index + 1} - x: {box['x']}, y: {box['y']}, w: {box['w']}, h: {box['h']}, score: {box['score']}, target_cls_id: {box['target_cls_id']}")

    if "big_image" in data:  
        filename = f'big_image_{big_image_counter}.png'
        decode_and_save_image(data['big_image'], filename) 
        print(f"Big image processed and saved as {filename}.")
        big_image_counter += 1  # Update global variable 

    if "small_image" in data:
        filename = f'small_image_{small_image_counter}.png' 
        decode_and_save_image(data['small_image'], filename)
        print(f"Small image processed and saved as {filename}.")  
        small_image_counter += 1  # Update global variable

def decode_and_save_image(base64_data, filename):
    image_bytes = base64.b64decode(base64_data)
    image = Image.open(io.BytesIO(image_bytes))
    image.save(filename)  # Save as PNG file
    return image

if __name__ == "__main__": 
    print("Starting serial JSON reader on reComputer...")
    read_json_from_serial()
```

:::note
Atualmente, apenas fluxos de dados JSON podem ser gerados, portanto, somente programas que analisam fluxos de dados JSON são fornecidos.
:::

Este script faz o seguinte:

- Lê dados JSON da UART em um loop

- Decodifica os dados JSON e chama process_json_data para processá-los

- Extrai informações de prompt e dados de imagem do JSON

- Decodifica os dados de imagem codificados em base64 e os salva como arquivos PNG usando `decode_and_save_image`

:::note
A análise das informações sobre caixas reconhecidas (boxes) não está disponível no momento, porque a função correspondente do Watcher ainda está em desenvolvimento e essas informações ainda não são reportadas na versão mais recente v1.0.1.
:::

- Imprime as informações extraídas e os nomes de arquivo das imagens salvas

### Enviando o código para o reComputer

Crie um novo arquivo Python no reComputer, por exemplo, `watcher_uart.py`:

```
nano watcher_uart.py
```

Copie e cole o código Python completo no arquivo. Pressione Ctrl+X, depois Y e Enter para salvar e sair do editor. Execute o script Python:

```
sudo python watcher_uart.py
```

### Resultados esperados

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/72.png" style={{width:1000, height:'auto'}}/></div><br />

Após executar o script:

- Os dados JSON analisados recebidos do Watcher serão impressos no terminal em tempo real, incluindo as informações de prompt.

- A imagem grande e a imagem pequena recebidas serão salvas automaticamente como arquivos big_image_x.png e small_image_x.png.

É isso! Agora você aprendeu como conectar o Watcher a um reComputer, ler os dados UART com Python, analisar o JSON e salvar as imagens transmitidas. Sinta-se à vontade para experimentar mais e adaptar o código ao seu caso de uso específico na plataforma reComputer.

## Recursos

- [Começando com SenseCAP Watcher](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher/)

- [Série de Introdução Rápida ao Watcher 1# : Como atribuir tarefas ao Watcher](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/)

- [Série de Introdução Rápida ao Watcher 2# : Aparência do Watcher & Ferramentas SenseCraft](https://wiki.seeedstudio.com/pt-br/integrate_watcher_to_ha/#step-6-place-the-task-and-configure-the-http-message-block)

- [Série de Introdução Rápida ao Watcher 3# : Como sensor & Uso do Grove](https://wiki.seeedstudio.com/pt-br/watcher_as_grove)

- [Série de Introdução Rápida ao Watcher 4# : Implantar localmente os recursos de IA do Watcher](https://wiki.seeedstudio.com/pt-br/watcher_local_deploy)

- Série de Introdução Rápida ao Watcher 5# : Treinando um modelo para o Watcher

- [Série de Introdução Rápida ao Watcher 6# : O que o Watcher faz](https://wiki.seeedstudio.com/pt-br/what_does_watcher_do)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
