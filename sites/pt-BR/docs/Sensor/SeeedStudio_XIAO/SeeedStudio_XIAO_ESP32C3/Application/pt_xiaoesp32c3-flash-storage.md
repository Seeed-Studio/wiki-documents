---
description: XIAO ESP32C3 Flash-storage
title: XIAO ESP32C3 Flash-storage
keywords:
  - XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiaoesp32c3-flash-storage
last_update:
  date: 03/03/2023
  author: Citric
createdAt: '2023-03-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiaoesp32c3-flash-storage/
---

# XIAO ESP32C3 Dados Permanentes de Diferentes Formas

Quando usamos placas de desenvolvimento, muitos de nós gostariam de poder usar a memória flash do chip para armazenar alguns dados importantes. Isso requer um método de armazenamento que garanta que nenhum dado seja perdido mesmo em caso de falha anormal da placa de desenvolvimento.

Este tutorial apresentará como armazenar dados importantes na memória flash do XIAO ESP32C3 a partir de dois métodos de armazenamento diferentes, conforme descrito a seguir

1. O primeiro guia mostra como **salvar dados permanentemente** na memória flash do ESP32 usando a biblioteca `Preferences.h`. Os dados mantidos na memória flash persistem após reinicializações ou falhas de energia. Usar a biblioteca `Preferences.h` é útil para salvar dados como credenciais de rede, chaves de API, valores de limiar ou até mesmo o último estado de um GPIO. Você aprenderá como salvar e ler dados da memória flash.

2. O segundo guia explica o que é a **EEPROM** do XIAO ESP32C3 e para que ela é útil. Também mostraremos como escrever e ler da EEPROM e construir um exemplo de projeto para colocar em prática os conceitos aprendidos.

A grande maioria deste artigo vem de [**RandomNerdTutorials.com**](https://randomnerdtutorials.com/), e alguns dos programas e descrições foram ligeiramente modificados para se adequar ao XIAO ESP32C3. Agradecimentos especiais ao [**RandomNerdTutorials.com**](https://randomnerdtutorials.com/) por fornecer os tutoriais e métodos. Aqui está o link direto para a fonte original.

- [ESP32 Flash Memory – Store Permanent Data (Write and Read)](https://randomnerdtutorials.com/esp32-flash-memory/)

- [Arduino EEPROM Explained – Remember Last LED State](https://randomnerdtutorials.com/arduino-eeprom-explained-remember-last-led-state/)

- [ESP32 Save Data Permanently using Preferences Library](https://randomnerdtutorials.com/esp32-save-data-permanently-preferences/)

## Salvar Dados Permanentemente usando a Biblioteca Preferences

### Biblioteca Preferences.h

Esta biblioteca é instalada automaticamente quando você instala as placas XIAO ESP32C3 na sua Arduino IDE.

A biblioteca `Preferences.h` é preferencialmente usada para armazenar valores de variáveis por meio de pares chave:valor. Salvar dados permanentemente pode ser importante para:

- Lembrar o último estado de uma variável;

- Salvar configurações;

- Salvar quantas vezes um dispositivo foi ativado;

- Ou qualquer outro tipo de dado que você precise salvar permanentemente.

Se você deseja usar o XIAO ESP32C3 para armazenar arquivos ou strings muito longas ou dados, recomendamos que você use a placa de expansão e cartão SD; não recomendamos o uso dos dois métodos deste tutorial.

A seguir estão as **Funções Úteis da Biblioteca Preferences.h**

**Func 1**. O método `begin()` abre um "espaço de armazenamento" com um namespace definido. O argumento false significa que o usaremos no modo leitura/escrita. Use true para abrir ou criar o namespace no modo somente leitura.

```c
preferences.begin("my-app", false);
```

Neste caso, o nome do namespace é my-app. O nome do namespace é limitado a 15 caracteres.

**Func 2**. Use `clear()` para limpar todas as preferências sob o namespace aberto (não exclui o namespace):

```c
preferences.clear();
```

**Func 3**. Remover uma chave do namespace aberto:

```c
preferences.remove(key);
```

**Func 4**. Use o método `end()` para fechar as preferências sob o namespace aberto:

```c
preferences.end();
```

**Func 5**. Você deve usar métodos diferentes dependendo do tipo de variável que deseja salvar.

Ao usar a biblioteca `Preferences.h`, você deve definir o tipo de dado que deseja salvar. Posteriormente, se quiser ler esses dados, deve conhecer o tipo de dado salvo. Em outras palavras, o tipo de dado de escrita e leitura deve ser o mesmo.

Você pode salvar os seguintes tipos de dados usando `Preferences.h`: char, Uchar, short, Ushort, int, Uint, long, Ulong, long64, Ulong64, float, double, bool, string e bytes.

<table align="center">
  <tbody><tr>
      <td align="center">Char</td>
      <td align="left"><code>putChar(const char*key, int8_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Char</td>
      <td align="left"><code>putUChar(const char* key, int8_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Short</td>
      <td align="left"><code>putShort(const char*key, int16_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Short</td>
      <td align="left"><code>putUShort(const char* key, uint16_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Int</td>
      <td align="left"><code>putInt(const char*key, int32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Int</td>
      <td align="left"><code>putUInt(const char* key, uint32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Long</td>
      <td align="left"><code>putLong(const char*key, int32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Long</td>
      <td align="left"><code>putULong(const char* key, uint32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Long64</td>
      <td align="left"><code>putLong64(const char*key, int64_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Long64</td>
      <td align="left"><code>putULong64(const char* key, uint64_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Float</td>
      <td align="left"><code>putFloat(const char*key, const float_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Double</td>
      <td align="left"><code>putDouble(const char* key, const double_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Bool</td>
      <td align="left"><code>putBool(const char*key, const bool value)</code></td>
    </tr>
    <tr>
      <td align="center">String</td>
      <td align="left"><code>putString(const char* key, const String value)</code></td>
    </tr>
    <tr>
      <td align="center">Bytes</td>
      <td align="left"><code>putBytes(const char*key, const void* value, size_t len)</code></td>
    </tr>
  </tbody></table>

**Func 6**. Da mesma forma, você deve usar métodos diferentes dependendo do tipo de variável que deseja obter.

<table align="center">
    <tr>
     <td align="center">Char</td>
     <td align="left"><code>getChar(const char*key, const int8_t defaultValue)</code></td>
 </tr>
 <tr>
     <td align="center">Unsigned Char</td>
     <td align="left"><code>getUChar(const char* key, const uint8_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Short</td>
     <td align="left"><code>getShort(const char*key, const int16_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Short</td>
     <td align="left"><code>getUShort(const char* key, const uint16_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Int</td>
     <td align="left"><code>getInt(const char*key, const int32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Int</td>
     <td align="left"><code>getUInt(const char* key, const uint32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Long</td>
     <td align="left"><code>getLong(const char*key, const int32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Long</td>
     <td align="left"><code>getULong(const char* key, const uint32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Long64</td>
     <td align="left"><code>getLong64(const char*key, const int64_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Long64</td>
     <td align="left"><code>gettULong64(const char* key, const uint64_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Float</td>
     <td align="left"><code>getFloat(const char*key, const float_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Double</td>
     <td align="left"><code>getDouble(const char* key, const double_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Bool</td>
     <td align="left"><code>getBool(const char*key, const bool defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">String</td>
     <td align="left"><code>getString(const char* key, const String defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">String</td>
     <td align="left"><code>getString(const char*key, char* value, const size_t maxLen)</code></td>
 </tr>
    <tr>
     <td align="center">Bytes</td>
     <td align="left"><code>getBytes(const char*key, void* buf, size_t maxLen)</code></td>
 </tr>
</table>

**Func 7**. Remover um Namespace

Na implementação Arduino do Preferences, não há método para remover completamente um namespace. Como resultado, ao longo de vários projetos, a partição de armazenamento não volátil (nvs) Preferences do ESP32 pode ficar cheia. Para apagar completamente e reformatar a memória NVS usada pelo Preferences, crie um sketch que contenha:

```c
#include <nvs_flash.h>

void setup() {
  nvs_flash_erase(); // erase the NVS partition and...
  nvs_flash_init(); // initialize the NVS partition.
  while(true);
}

void loop() {

}
```

Você deve fazer o upload de um novo sketch para sua placa imediatamente após executar o acima, ou ele reformatará a partição NVS toda vez que for ligado.

Para mais informações, você pode acessar o arquivo Preferences.cpp [aqui](https://github.com/espressif/arduino-esp32/blob/master/libraries/Preferences/src/Preferences.cpp).

### Formas gerais de usar a biblioteca Preferences.h

**Passo 1.** Para usar a biblioteca Preferences.h para armazenar dados, primeiro você precisa incluí-la no seu sketch:

```c
#include <Preferences.h>
```

**Passo 2.** Em seguida, você deve iniciar uma instância da biblioteca Preferences. Você pode chamá-la de preferences, por exemplo:

```c
Preferences preferences;
```

**Passo 3.** No `setup()`, inicialize o Monitor Serial com uma taxa de baud de 115200.

```c
Serial.begin(115200);
```

**Passo 4.** Crie um "espaço de armazenamento" na memória flash chamado `my-app` no modo leitura/escrita. Você pode dar qualquer outro nome a ele.

```c
preferences.begin("my-app", false);
```

**Passo 5.** Use os métodos get e put para obter/armazenar conteúdo de dados.

#### Armazenar/obter dados de par Chave:valor

Os dados salvos usando preferences são estruturados assim:

```c
namespace {
  key:value
}
```

Você pode salvar diferentes chaves no mesmo namespace, por exemplo:

```c
namespace {
  key1: value1
  key2: value2
}
```

Você também pode ter múltiplos namespaces com a mesma chave (mas cada chave com seu valor):

```c
namespace1{
  key:value1
}
namespace2{
  key:value2
}
```

Por exemplo, armazene o novo valor na chave "counter":

```c
preferences.putUInt("counter", counter);
```

Em seguida, obtenha o valor da chave `counter` salvo nas preferences. Se não encontrar nenhum valor, retorna 0 por padrão (o que acontece quando este código é executado pela primeira vez).

```c
unsigned int counter = preferences.getUInt("counter", 0);
```

Portanto, seus dados são estruturados desta forma:

```c
my-app{
  counter: counter
}
```

#### Armazenar/obter dados do tipo String

Os códigos a seguir salvam suas credenciais de rede permanentemente na memória flash do ESP32 usando `Preferences.h`.

Crie uma chave chamada ssid que salva o valor do seu SSID (variável ssid) – use o método `putString()`.

```c
preferences.putString("ssid", ssid);
```

Adicione outra chave chamada password para salvar o valor da senha (variável password):

```c
preferences.putString("password", password);
```

Portanto, seus dados são estruturados desta forma:

```c
my-app{
  ssid: ssid
  password: password
}
```

Obtenha os valores de SSID e senha usando o método `getString()`. Você precisa usar o nome da chave que utilizou para salvar as variáveis, neste caso, as chaves ssid e password:

```c
String ssid = preferences.getString("ssid", ""); 
String password = preferences.getString("password", "");
```

Como segundo argumento para a função `getString()`, passamos uma String vazia. Este é o valor retornado caso não haja chaves `ssid` ou `password` salvas nas preferences.

**Passo 6.** Feche as Preferences.

```c
preferences.end();
```

- O procedimento completo de Armazenar/obter dados de par Chave:valor é mostrado abaixo.

```c
#include <Preferences.h>

Preferences preferences;

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();

  // Open Preferences with my-app namespace. Each application module, library, etc
  // has to use a namespace name to prevent key name collisions. We will open storage in
  // RW-mode (second parameter has to be false).
  // Note: Namespace name is limited to 15 chars.
  preferences.begin("my-app", false);

  // Remove all preferences under the opened namespace
  //preferences.clear();

  // Or remove the counter key only
  //preferences.remove("counter");

  // Get the counter value, if the key does not exist, return a default value of 0
  // Note: Key name is limited to 15 chars.
  unsigned int counter = preferences.getUInt("counter", 0);

  // Increase counter by 1
  counter++;

  // Print the counter to Serial Monitor
  Serial.printf("Current counter value: %u\n", counter);

  // Store the counter to the Preferences
  preferences.putUInt("counter", counter);

  // Close the Preferences
  preferences.end();

  // Wait 10 seconds
  Serial.println("Restarting in 10 seconds...");
  delay(10000);

  // Restart ESP
  ESP.restart();
}

void loop() {

}
```

Faça o upload do código para sua placa e isto é o que você deve ver no Monitor Serial:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/1.png"/></div>

- O procedimento completo de Armazenar/obter dados do tipo String é mostrado abaixo.

Salve as credenciais de rede usando `Preferences.h`.

```c
#include <Preferences.h>

Preferences preferences;

const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();

  preferences.begin("credentials", false);
  preferences.putString("ssid", ssid); 
  preferences.putString("password", password);

  Serial.println("Network Credentials Saved using Preferences");

  preferences.end();
}

void loop() {

}
```

Faça o upload do código para sua placa e isto é o que você deve ver no Monitor Serial:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/2.png"/></div>

Conecte-se ao Wi-Fi com as Credenciais de Rede Salvas nas Preferences.

```c
#include <Preferences.h>
#include "WiFi.h"

Preferences preferences;

String ssid;
String password;

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();

  preferences.begin("credentials", false);

  ssid = preferences.getString("ssid", ""); 
  password = preferences.getString("password", "");

  if (ssid == "" || password == ""){
    Serial.println("No values saved for ssid or password");
  }
  else {
    // Connect to Wi-Fi
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(100);
    WiFi.begin(ssid.c_str(), password.c_str());
    Serial.print("Connecting to WiFi ");
    Serial.println(ssid);
    Serial.println(password);
    while (WiFi.status() != WL_CONNECTED) {
      Serial.print('.');
      delay(1000);
    }
    Serial.println(WiFi.localIP());  
  }
}

void loop() {
  // put your main code here, to run repeatedly:
}
```

Faça o upload deste código para sua placa após o anterior (para garantir que você tenha as credenciais salvas). Se tudo correr como esperado, isto é o que você deve ver no seu Monitor Serial.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/3.png"/></div>

## Armazenar Dados Permanentes usando EEPROM

### O que é EEPROM?

A EEPROM é uma memória interna do microcontrolador ESP32 que permite manter dados na memória após reiniciar a placa. Ao trabalhar com microcontroladores, é interessante manter dados na memória especialmente quando a placa é desligada, seja de forma intencional ou não, como no caso de uma perda de energia elétrica.

O microcontrolador ESP32 possui uma área de memória Flash que pode ser utilizada como a EEPROM de um Arduino para manter dados na memória mesmo após a placa ser desligada.

:::caution
Uma coisa importante a notar é que a EEPROM tem tamanho e vida útil limitados. As células de memória podem ser lidas quantas vezes forem necessárias, mas o número de ciclos de escrita é limitado a **100.000**. É aconselhável prestar muita atenção ao tamanho dos dados armazenados e com que frequência você deseja atualizá-los. A memória EEPROM pode armazenar 512 valores de 0 a 255, ou 128 endereços IP ou tags RFID.
:::

O microcontrolador do ESP32 possui EEPROM (Electrically Erasable Programmable Read-Only Memory). Este é um pequeno espaço que pode armazenar variáveis do tipo byte. As variáveis armazenadas na EEPROM permanecem lá, mesmo quando você reinicia ou desliga o ESP32. Simplificando, a EEPROM é um armazenamento permanente semelhante a um disco rígido em computadores.

A EEPROM pode ser lida, apagada e reescrita eletronicamente. No Arduino, você pode ler e escrever na EEPROM facilmente usando a biblioteca EEPROM.

Cada posição da EEPROM pode salvar um byte, o que significa que você só pode armazenar números de 8 bits, que incluem valores inteiros entre 0 e 255.

### Funções Disponíveis da EEPROM

Para ler e escrever na memória flash do ESP32 usando o Arduino IDE, utilizaremos a biblioteca EEPROM. Usar esta biblioteca com o ESP32 é muito semelhante a usá-la com o Arduino. Portanto, se você já usou a EEPROM do Arduino antes, não há muita diferença.

Portanto, também recomendamos dar uma olhada em nosso artigo sobre [Arduino EEPROM](https://randomnerdtutorials.com/arduino-eeprom-explained-remember-last-led-state/).

**Func 1**. Inicializar o tamanho da memória

Antes de usar a função, precisamos inicializar o tamanho da memória com `EEPROM.begin()`.

```c
EEPROM.begin(EEPROM_SIZE);
```

**Func 2**. Write & Put

Para escrever dados na EEPROM, você usa a função `EEPROM.write()` que recebe dois argumentos. O primeiro é o endereço ou localização da EEPROM onde você deseja salvar os dados, e o segundo é o valor que queremos salvar:

```c
EEPROM.write(address, value);
```

`EEPROM.write()` é equivalente a usar `EEPROM.put()`.

```c
EEPROM.put(address, value);
```

Por exemplo, para escrever 9 no endereço 0, você terá:

```c
EEPROM.write(0, 9);
```

:::tip
Se quisermos armazenar dados do tipo float, geralmente usamos o método `EEPROM.put()` em vez do método `EEPROM.write()`. Se você quiser armazená-lo usando o método write(), então precisa usar `EEPROM.writeFloat()`.
:::

**Func 3**. Read & Get

Para ler um byte da EEPROM, você usa a função `EEPROM.read()`. Esta função recebe o endereço do byte como argumento.

```c
EEPROM.read(address);
```

`EEPROM.read()` é equivalente a usar `EEPROM.get()`.

```c
EEPROM.get(address);
```

Por exemplo, para ler o byte armazenado anteriormente no endereço 0:

```c
EEPROM.read(0);
```

Isso retornaria **9**, que é o valor armazenado naquela localização.

:::tip
Se quisermos obter dados do tipo float, geralmente usamos o método `EEPROM.get()` em vez do método `EEPROM.read()`. Se você quiser obtê-lo usando o método read(), então precisa usar `EEPROM.readFloat()`.
:::

**Func 4**. Atualizar um valor

A função `EEPROM.update()` é particularmente útil. Ela só escreve na EEPROM se o valor escrito for diferente do que já está salvo.

Como a EEPROM tem vida útil limitada devido aos ciclos limitados de escrita/apagamento, usar a função `EEPROM.update()` em vez de `EEPROM.write()` economiza ciclos.

Você usa a função `EEPROM.update()` da seguinte forma:

```c
EEPROM.update(address, value);
```

No momento, temos 9 armazenado no endereço 0. Portanto, se chamarmos:

```c
EEPROM.update(0, 9);
```

Não será escrito na EEPROM novamente, pois o valor atualmente salvo é o mesmo que queremos escrever.

:::note
Para saber mais sobre a operação da EEPROM, você pode ler a [documentação oficial do Arduino](https://docs.arduino.cc/learn/programming/eeprom-guide#eeprom-clear).
:::

### Formas gerais de usar a EEPROM

Para mostrar como salvar dados na memória flash do XIAO ESP32C3, salvaremos o último estado de uma saída, neste caso um LED.

Conecte um LED ao XIAO ESP32C3 conforme mostrado no seguinte diagrama esquemático.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png"/></div>

Primeiro, você precisa incluir a biblioteca EEPROM.

```c
#include <EEPROM.h>
```

Em seguida, você define o tamanho da EEPROM. Este é o número de bytes que você deseja acessar na memória flash. Neste caso, vamos apenas salvar o estado do LED, então o tamanho da EEPROM é definido como 1.

```c
#define EEPROM_SIZE 1
```

Também definimos outras variáveis necessárias para que este sketch funcione.

```c
// constants won't change. They're used here to set pin numbers:
const int ledPin = D10;      // the number of the LED pin

// Variables will change:
int ledState = LOW;  // ledState used to set the LED

// Generally, you should use "unsigned long" for variables that hold time
// The value will quickly become too large for an int to store
unsigned long previousMillis = 0;  // will store last time LED was updated

// constants won't change:
const long interval = 10000;  // interval at which to blink (milliseconds)
```

No `setup()` você inicializa a EEPROM com o tamanho predefinido.

```c
EEPROM.begin(EEPROM_SIZE);
```

Para garantir que seu código inicialize com o último estado do LED, no `setup()`, você deve ler o último estado do LED da memória flash. Ele está armazenado no endereço zero.

Em seguida, você só precisa ligar ou desligar o LED de acordo com o valor lido da memória flash.

```c
digitalWrite (ledPin, ledState);
```

Na seção da função `loop()`, tudo o que precisamos fazer é alternar o estado do LED em um determinado período de tempo.

```c
// check to see if it's time to blink the LED; that is, if the difference
// between the current time and last time you blinked the LED is bigger than
// the interval at which you want to blink the LED.
unsigned long currentMillis = millis();

if (currentMillis - previousMillis >= interval) {
    // save the last time you blinked the LED
    previousMillis = currentMillis;
    Serial.println("State changed");
    // if the LED is off turn it on and vice-versa:
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }

    // set the LED with the ledState of the variable:
    digitalWrite(ledPin, ledState);
}
```

Em seguida, precisamos determinar se a contagem regressiva terminou, alternar o estado do LED após o término e armazená-lo na memória flash.

```c
EEPROM.write(0, ledState);
```

Por fim, usamos o EEPROM.commit() para que as alterações entrem em vigor.

```c
EEPROM.commit();
```

A seguir está o procedimento completo.

:::caution
Por favor, note que você **não deve** executar este exemplo por um longo período de tempo. Neste exemplo, escreveremos na EEPROM a cada dez segundos, e executar este exemplo por muito tempo **reduzirá bastante** a vida útil da EEPROM.
:::

```c
// include library to read and write from flash memory
#include <EEPROM.h>

// define the number of bytes you want to access
#define EEPROM_SIZE 1

// constants won't change. They're used here to set pin numbers:
const int ledPin = D10;      // the number of the LED pin

// Variables will change:
int ledState = LOW;  // ledState used to set the LED

// Generally, you should use "unsigned long" for variables that hold time
// The value will quickly become too large for an int to store
unsigned long previousMillis = 0;  // will store last time LED was updated

// constants won't change:
const long interval = 10000;  // interval at which to blink (milliseconds)

void setup() { 
  Serial.begin(115200);

  // initialize EEPROM with predefined size
  EEPROM.begin(EEPROM_SIZE);

  pinMode(ledPin, OUTPUT);

  // read the last LED state from flash memory
  ledState = EEPROM.read(0);
  // set the LED to the last stored state
  digitalWrite(ledPin, ledState);
}

void loop() {
  // here is where you'd put code that needs to be running all the time.

  // check to see if it's time to blink the LED; that is, if the difference
  // between the current time and last time you blinked the LED is bigger than
  // the interval at which you want to blink the LED.
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval) {
    // save the last time you blinked the LED
    previousMillis = currentMillis;
    Serial.println("State changed");
    // if the LED is off turn it on and vice-versa:
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }
    // save the LED state in flash memory
    EEPROM.write(0, ledState);
    EEPROM.commit();
    Serial.println("State saved in flash memory");

    // set the LED with the ledState of the variable:
    digitalWrite(ledPin, ledState);
  }
}
```

Carregue o código na sua placa e isto é o que você deverá ver no Monitor Serial:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/4.png"/></div>

## Suporte Técnico e Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
