---
description: Primeiros passos com Wio Terminal e Wappsto IoT
title: Primeiros passos com Wio Terminal e Wappsto IoT
keywords:
  - Wio_terminal Easy_IoT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Get-Started-with-Wio-Terminal-and-Wappsto-IoT
last_update:
  date: 1/30/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Get-Started-with-Wio-Terminal-and-Wappsto-IoT/
---

# Primeiros passos com Wio Terminal e Wappsto IoT

## Visão geral

O **Wio Terminal** é um microcontrolador baseado em SAMD51 com conectividade sem fio alimentado por **Realtek RTL8720DN** que é compatível com Arduino e MicroPython. Atualmente, a conectividade sem fio é suportada apenas pelo Arduino. Ele roda a **120MHz** (Boost até 200MHz), possui **4MB** de Flash externa e **192KB** de RAM. Ele suporta tanto Bluetooth quanto Wi‑Fi, fornecendo a espinha dorsal para projetos de IoT. O próprio Wio Terminal vem equipado com **uma tela LCD de 2,4”, IMU onboard (LIS3DHTR), microfone, buzzer, slot para cartão microSD, sensor de luz e emissor infravermelho (IR 940nm).** Além disso, ele também possui duas portas Grove multifuncionais para o [Ecossistema Grove](https://www.seeedstudio.com/grove.html) e 40 pinos GPIO compatíveis com Raspberry Pi para mais expansões.

Wappsto é um aplicativo poderoso e inteligente que pode ser facilmente configurado para obter dados automaticamente de várias fontes. Ele possui um dashboard padrão integrado para monitorar e analisar seus dados.

O Wappsto também oferece ferramentas que permitem aos desenvolvedores criar aplicações de IoT como web apps com integrações e automações. Integrado ao Wappsto há também um marketplace, onde desenvolvedores e usuários podem compartilhar seus Apps.

Wappsto by Seluxit é uma poderosa plataforma de IoT com Dashboards facilmente personalizáveis que tornam a visualização de dados em tempo real ou históricos muito simples, além de muitos outros recursos, incluindo automações na nuvem.

O aplicativo Wappsto para IOS e Android também permite que você visualize e controle dispositivos em qualquer lugar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto1.png" alt="pir" width={500} height="auto" /></p>

## Recursos do Wappsto

Você pode operar a seguinte função enquanto estiver conectando ao Wappsto. Para mais informações, você pode fazer mais com seus dados [aqui](https://www.seluxit.com/iot-products/iot-solution-builder/wapps).

### Recursos do dashboard

#### Tipos de dashboard

1. Dashboard em branco - Tela estática limpa para combinar e misturar widgets
2. Gerenciamento de frota - Tela dinâmica limpa para combinar e misturar widgets - alterne facilmente entre dispositivos para obter uma visão geral de possíveis valores discrepantes.
3. Dashboard de geolocalização - Visão geral em mapa dos dispositivos, com possibilidade de filtrar com base em alarmes do dispositivo.<br />
![](https://media-exp1.licdn.com/dms/image/C4E22AQEUQmsBHpzjaw/feedshare-shrink_2048_1536/0/1646730023138?e=1651708800&v=beta&t=cTkLbXeXVVgWV9a-Is62CDUlb3s4t-GqqSpBsusyy8A)
<!-- 图片链接有问题 -->

- Geolocalização usando filtro de listas filtradas:
![](https://media-exp1.licdn.com/dms/image/C4E22AQHzGNNMQWDfLw/feedshare-shrink_2048_1536/0/1646902827428?e=1651708800&v=beta&t=hChKemrGzqtM53xwikfvONJu_2DyrCSMX17jMKXuybc)
<!-- 图片链接有问题 -->

#### Widgets do dashboard em branco e de gerenciamento de frota

1. Lista filtrada - configure limites de valores do dispositivo que disparem alarmes e sinais visuais no dashboard de geolocalização.
 ![](https://media-exp1.licdn.com/dms/image/C4E22AQGPxAJgcCVbKw/feedshare-shrink_2048_1536/0/1646809215991?e=1651708800&v=beta&t=-XvhET6EEvVJetMns_UcJ9AY8hBIcVw_R8XEi0vUZhI)
<!-- 图片链接有问题 -->

2. Widget de localização histórica - Desenha em um mapa com base nas localizações do dispositivo dentro de um período de tempo configurado. (máximo de 1 marca por minuto e mínimo de 50 metros entre marcas)
![](https://media-exp1.licdn.com/dms/image/C4E22AQE8TWlSnbBS0Q/feedshare-shrink_2048_1536/0/1647252033404?e=2147483647&v=beta&t=YWuyjUFveAiTut4AwMgXFRZL5BiaqJYKV8MeYcwq31E)

3. Widget de gráfico - Escolha e configure múltiplas fontes de dados, período de tempo, estilo de gráfico e método de agregação. Também pode ser alternado para mostrar dados em tempo real.
![](https://media-exp1.licdn.com/dms/image/C4E22AQERLllOaWHaeA/feedshare-shrink_1280/0/1647331243930?e=1651708800&v=beta&t=wxkgoFKpxV8A2j-KsXqKRm6t6gnAEorUuR4UaSsu1pk)
<!-- 图片链接有问题 -->

4. Exemplo de dados em tempo real:
![](https://media-exp1.licdn.com/dms/image/C4E22AQHexShrPAZxHw/feedshare-shrink_1280/0/1647856842400?e=1651708800&v=beta&t=CziKwYL3y3drg7PyCN-NcC3t6lRjqTxoMoguKy9h_yE)
<!-- 图片链接有问题 -->

5. Widget de lista de valores - Mostra dados em tempo real em uma caixa junto com valores de controle / estado desejado.
![](https://media-exp1.licdn.com/dms/image/C4E22AQHLKi07FF-vjg/feedshare-shrink_1280/0/1647414020945?e=2147483647&v=beta&t=5PjZ0-bA5knscCdfUufKY7b98tXlXbWtpIfFjsZ_ykg)

6. Widget de bússola - Mostra o ângulo de um único dispositivo com dados em tempo real.
![](https://media-exp1.licdn.com/dms/image/C4E22AQH0uYCQd8y7XQ/feedshare-shrink_1280/0/1647522120991?e=2147483647&v=beta&t=9Biv-IoQukTwfiyEd1siexYGwS5EX5uCaVl_dROZYsI)

7. Widget de gráfico de líquido - Mostra o nível relativo de um único dispositivo com dados em tempo real.
![](https://media-exp1.licdn.com/dms/image/C4E22AQEPNSFj-MKSVw/feedshare-shrink_2048_1536/0/1647609902322?e=2147483647&v=beta&t=suXEme0-tfR6PQQIAzU7xw8hD7CBTGLZ8aAOxogm7t0)

8. Widget de medidor - Mostra dados em tempo real de um único valor em um medidor, com esquema de cores e limites configuráveis.
![](https://media-exp1.licdn.com/dms/image/C4E22AQGwQ7COEUwKwA/feedshare-shrink_1280/0/1647939626856?e=2147483647&v=beta&t=NfZBE7e7R-kUNNRUpEiEyRYVO-xXBwrI13NjtvqZHjU)

9. Widget de localização atual - Mostra a localização atual de um ou vários dispositivos juntamente com outros widgets.
![](https://media-exp1.licdn.com/dms/image/C4D22AQFCTjZrX8RU4g/feedshare-shrink_2048_1536/0/1648046103353?e=1651708800&v=beta&t=CFn2wQhscrECrcNU65PcI7HpuK7NhHtZKVMXQ9VzoWA)
<!-- 图片链接有问题 -->

10. Widget de lista de logs - Mostra logs de um ou mais dispositivos ou valores, juntamente com outros widgets.
![](https://media-exp1.licdn.com/dms/image/C4E22AQEFmHPALVfFhw/feedshare-shrink_2048_1536/0/1648126885539?e=2147483647&v=beta&t=eKmZ70IIQZAq3DR96JXB_nsmSsvBqe8gKIJfG0XZXZs)

### Automação em nuvem e web APPS

1. Integração com Twitter
2. Integração com Hue
3. Integração com Shelly
4. Integração com previsão do tempo (yr.no)
   - Blocks - Automações em nuvem
   - Programação NoCode com Blockly
   - Programação javascript com Blockly
   - Configure automações e interações entre todos os dispositivos e serviços que você conectou ao Wappsto
   - Exemplo de automação cruzada entre Twitter e Wappsto:bit: [https://bit.wappsto.com/project/wappsto-blocks/](https://bit.wappsto.com/project/wappsto-blocks/)

### Recursos do Wappsto às vezes negligenciados

1. Serviço de nuvem distribuída com múltiplos backups
2. Compartilhamento de dispositivo
3. Criptografia de ponta a ponta (criptografia de transporte)
4. Segurança do dispositivo (chaves únicas de dispositivo e de rede)
5. Encaminhamento de dados
6. Extração de dados (CSV)
7. Login inteligente entre plataformas (login por email, google, facebook, apple)
8. Multiplataforma: site + aplicativos para smartphone.

## Primeiros passos

### Requisitos de hardware

- Wio Terminal x 1
- Computador x 1
- Cabo USB Type-C x 1

### Requisitos de software

Por favor, verifique este [link](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/#software).

## Atualizar o firmware WiFi do Wio Terminal

Por favor, verifique este [link](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware).

## Pré-requisitos do Wappsto

### Uma conta no Wappsto

Também é presumido que você tenha criado uma conta no [Wappsto](https://wappsto.com/); se não, por favor, crie uma primeiro.

### Arduino IDE instalado no seu PC

Se você não tiver, veja [https://www.arduino.cc/en/Guide](https://www.arduino.cc/en/Guide)

#### Instalar a biblioteca ArduinoJson

No gerenciador de bibliotecas você precisa instalar a biblioteca ArduinoJson - veja [https://arduinojson.org/v6/doc/installation/](https://arduinojson.org/v6/doc/installation/) para mais detalhes.

#### Instalar esta biblioteca do Wappsto

Para instalar esta biblioteca no Arduino IDE, baixe este projeto como um arquivo zip, clique em "Code" e escolha "Download ZIP".
Depois escolha "Sketch"->"Include Library"->"Add .Zip Library..." Veja [https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries](https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries) para detalhes.

### Gerar certificados e ID para um novo dispositivo

Para que seu dispositivo físico possa se identificar perante o Wappsto, ele precisa de um ID de rede, do certificado CA do servidor e do certificado/chave do cliente - tudo isso precisa ser gerado em Wappsto.com e colocado em (se corresponder aos exemplos) um arquivo chamado wappsto_config.h.

#### wappsto_config.h

Como ajuda para gerar isso você pode usar o **script Python** incluído neste repositório na pasta generate_config_header.
Na primeira execução, talvez seja necessário instalar as bibliotecas exigidas

```
cd <path to downloaded arduino_wappstoiot>
cd generate_config_header
pip install -r requirements.txt
```

Para gerar um arquivo de cabeçalho:

1. Vá para a pasta `generate_config_header`:

```
cd generate_config_header
```

2. Use o comando:

```
python main.py --type arduino
```

3. Em seguida, você será solicitado a fazer login usando email e senha do seu usuário no Wappsto.

4. Copie o arquivo recém-gerado `wappsto_config.h` para sua pasta de sketch do Arduino. Observe que, se gerado corretamente, ele deverá ter um UUID válido (uma string semelhante, mas diferente, a esta `"d7fafe76-b020-4594-8f2a-aae11c6b6589"` definida na linha `const char* network_uuid =`.

Observe que, se você tiver tanto pyhton2 quanto python3 instalados, talvez seja necessário usar

```
pip3 install -r requirements.txt
python3 main.py --type arduino
```

Se você obtiver o erro como abaixo:

```
ImportError: cannot import name 'soft_unicode' from 'markupsafe' 
```

O que acontece devido a uma alteração na dependência de outra biblioteca, pode ser corrigido usando este comando.

```
pip install -U MarkupSafe==0.20
```

#### Reivindicação e propriedade - Não é permitido acessar valores

Se você obtiver um "not allowed to access" para valores no dispositivo que você criou, é porque você ou não o reivindicou ou a propriedade foi redefinida.

Como você seria o fabricante, ainda verá o dispositivo na sua lista de redes, poderá ver que ele está online, mas não poderá ver valores nem controlar o dispositivo.

Para reivindicar um dispositivo, vá para a aba "IoT Devices" em [https://wappsto.com/devices](https://wappsto.com/devices), clique no botão "+ Add an IoT device" no canto superior direito e insira o UUID da rede na caixa.

Se você clicar no botão de exclusão de uma rede, isso removerá a propriedade do dispositivo, de modo que ele possa ser reivindicado por outro usuário. Depois que um dispositivo for reivindicado, ele não poderá ser reivindicado por outro.

## Esta biblioteca Wappsto

### Estrutura necessária

O ID da rede é gerado pelo [Wappsto](https://wappsto.com/) e está vinculado aos certificados.

```
├── "Network Name"
│   └── "Device 1 name"
│   |   └── "Value 1 name"
│   |   └── "Value 2 name"
|   |   ...
│   └── "Device 2 name"
│       └── "Value 1 name"
│       └── "Value 2 name"
...

```

Observe que o "name" para o dispositivo e o objeto value têm funcionalidade extra e regras.

- Uma rede não deve ter dispositivos com nomes idênticos.
- Um único dispositivo não deve ter valores com nomes idênticos. (como no exemplo acima, é permitido usar o mesmo nome em um dispositivo diferente.)

A biblioteca perguntará ao Wappsto se existe um dispositivo/valor com esse nome antes de criá-lo, para que seja vinculado ao valor correto. Se nada tiver esse nome, um novo será criado. Se um pai tiver vários filhos com o mesmo nome, a biblioteca escolherá o primeiro disponível.

Se você alterar um nome, um novo será criado, mas o antigo não será deletado. Isso você terá que fazer manualmente, por exemplo usando [https://wappsto.com/devices](https://wappsto.com/devices)

### Inicializar o Wappsto

O Wappsto precisa de uma referência a WiFiClientSecure quando for criado, por exemplo.

```c
WiFiClientSecure client;
Wappsto wappsto(&client);
```

#### Definir a configuração e conectar

```c
#include "wappsto_config.h"
...
wappsto.config(network_uuid, ca, client_crt, client_key);
if(wappsto.connect()) {
    // Connected
} else {
    // Failed to connect
}
```

### Parâmetros opcionais de configuração, log e ping

Além dos comandos obrigatórios, você também pode definir o intervalo de ping e o nível de log:

```c
wappsto.config(network_uuid, ca, client_crt, client_key, ping interval in minutes, log level);
```

- O intervalo de ping enviará um pacote curto do dispositivo para o Wappsto para manter a conexão ativa. Se o seu dispositivo raramente envia dados, pode ser uma boa ideia adicionar isso para evitar timeout na conexão.
- O nível de log pode imprimir informações da biblioteca Wappsto na porta de depuração serial - os seguintes níveis são possíveis:

```
   VERBOSE
   INFO
   WARNING
   ERROR
   NO_LOGS <- Default
```

### Crie sua rede

```c
myNetwork = wappsto.createNetwork("Network Name");
```

### Criar um dispositivo

```c
DeviceDescription_t myDeviceDescription = {
    .name = "Device name",
    .product = "Product name",
    .manufacturer = "Company name",
    .description = "Description of the product",
    .version = "1.0",
    .serial = "00001",
    .protocol = "Json-RPC",
    .communication = "WiFi",
};

myDevice = myNetwork->createDevice("Device Name", &myDeviceDescription);
```

#### Values

Values é provavelmente o que mais interessa a você, e pode ser um dos seguintes:

- Number - inteiros ou decimais, estes serão registrados e exibidos como um gráfico.
- String - uma string legível por humanos (UTF-8)
- Blob - dados, por exemplo uma imagem codificada em base64, valores hexadecimais, etc.
- Xml - um documento xml completo

#### Ler e escrever dados

Cada value pode ter um ou dois pontos de dados:

- Report: Dados lidos no dispositivo e reportados ao servidor [READ]
- Control: Dados enviados do servidor para o dispositivo para controlá‑lo [WRITE]

Seu value pode ser um deles ou ambos.

### Parâmetros de value

Para explicar os parâmetros, usaremos um exemplo de um value de temperatura colocado em uma sala de estar.

- name: Um nome para o value, aqui "Living room"
- type: É uma ajuda para a interface encontrar values do tipo correto, aqui "temperature"
- O parâmetro PERMISSION_e informa à biblioteca se ela deve criar report e/ou control para este value.
  - READ -> estado de report
  - WRITE -> estado de control
  - READ_WRITE -> estado de report e control
- min: (Number apenas) número mais baixo (a ser usado pela interface)
- max: Para number, o número mais alto; para string/blob, o comprimento máximo
- step: (Number apenas) Tamanho do passo para um número, por exemplo 1 para inteiros e 0,1 para decimais
- unit: (Numbers apenas) existe uma unidade para esse número; no exemplo de temperatura é °C

Na primeira vez que um value é criado, um número terá o valor NA, e a string/blob estará vazia, tanto para control quanto para report.

Se o value existir, os dados do value não serão alterados. Se você quiser que o value seja atualizado quando o dispositivo reiniciar, terá que chamar report/control.

#### Criar um value numérico

```c
ValueNumber_t myNumberValueParameters = {   .name = "Living room",
                                            .type = "temperature", // value type
                                            .permission = READ_WRITE,
                                            .min = -20,
                                            .max = 100,
                                            .step = 0.1,
                                            .unit = "°C",
                                            .si_conversion = ""};

myNumberValue = myDevice->createValueNumber(&myNumberValueParameters);
```

#### Criar um value de string

```c
ValueString_t myStringValueParameters = { .name = "Value String Name",
                                          .type = "value type",
                                          .permission = READ_WRITE,
                                          .max = 200,
                                          .encoding = ""};

myStringValue = myDevice->createValueString("Value String Name", "value type", READ_WRITE, &myStringValueParameters);
```

#### Criar um value de blob

```c
ValueBlob_t myBlobValueParameters =  { .name = "Value Blob Name",
                                       .type = "value type",
                                       .permission = READ_WRITE,
                                       .max = 200,
                                       .encoding = ""};

myBlobValue = myDevice->createValueBlob(&myBlobValueParameters);
```

#### Criar um value de xml

```c
ValueXml_t myXmlValueParameters =  { .name = "Value Xml Name",
                                     .type = "value type",
                                     .permission = READ_WRITE,
                                     .xsd = "test",
                                     .namespace = "test"};

myXmlValue = myDevice->createValueXml(&myXmlValueParameters);
```

#### Enviar um report de value

```c
int myInt = 123;
double myDouble = 42.7;

myNumberValue.report("987");    // You can send numbers as a string you format
myNumberValue.report(myInt);    // Report the number as an int
myNumberValue.report(myDouble); // Report the number as a double


myStringValue.report("Example string");

myBlobValue.report("A5FF2C");

```

#### Definir um value de control

Normalmente o value de control será atualizado apenas a partir de wappsto.com, mas você pode precisar definir um valor atual ao iniciar ou em outras situações.
Definir isso é semelhante a report:

```c
int myInt = 123;
double myDouble = 42.7;

myNumberValue.control("987");    // You can send numbers as a string you format
myNumberValue.control(myInt);    // Set control as an int
myNumberValue.control(myDouble); // Set control as a double


myStringValue.control("Example string");

myBlobValue.control("A5FF2C");

```

## Adicionar o Wappsto na sua função loop

Para que o Wappsto possa receber dados (control, refresh e pings), ele precisa ser incluído na sua função loop do Arduino - caso contrário, você nunca receberá callbacks com dados e a conexão pode sofrer timeout.

Também é recomendado não bloquear o loop por períodos prolongados.

```
wappsto.dataAvailable();
```

### Receber uma solicitação de control de value

Você pode escolher se deseja que os dados de control sejam traduzidos para um double ou se você quer a string diretamente.

```c
// Receive control with a number (double)
void controlNumberCallback(Value *value, double data, String timestamp)
{
    // handle control request
}

// Receive control with a string
void controlStringCallback(Value *value, String data, String timestamp)
{
    // handle control request
}

...
myNumberValue->onControl(&controlNumberCallback);
myStringValue->onControl(&controlStringCallback);
```

### Receber uma solicitação de refresh de value (apenas value de report)

```c
void refreshNumberCallback(Value *value)
{
    // handle refresh request
}
...
myNumberValue->onRefresh(&refreshNumberCallback);

```

### Obter os últimos dados e timestamp de um value

Você pode acessar os últimos dados recebidos/enviados e o timestamp usando estas funções.
Por exemplo, após um novo boot, o último estado controlado definido no Wappsto.com será recuperado, para que seu programa possa iniciar com esse estado.

_Note_ recuperar numberData de um value vazio retornará 0;

```c
String ctrlData = myNumberValue.getControlData();

double ctrlDataNumber = myNumberValue.getControlNumberData();

String ctrlTime = myNumberValue.getControlTimestamp();

String reportData = myNumberValue.getReportData();

double reportDataNumber = myNumberValue.getReportNumberData();

String reportTime = myNumberValue.getReportTimestamp();
```

Para mais exemplos, veja o código na pasta de exemplos ou veja 'File -> Examples -> Wappsto' na IDE do Arduino.

### Demonstração de Detecção de Temperatura

Aqui vamos usar o exemplo de temperatura fornecido e exibir no Wappsto como você vê abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto2.png" alt="pir" width={500} height="auto" /></p>

- **Passo 1**. Depois de enviar o código, você pode ver que ele mostrou conexão bem‑sucedida em "IoT Devices" no site do Wappsto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto3.png" alt="pir" width={800} height="auto" /></p>

- **Passo 2**. Clique na coluna "Dashboards" à esquerda e selecione "Add widget"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto4.png" alt="pir" width={800} height="auto" /></p>

- **Passo 3**. Esses blocos fornecidos podem exibir dados de várias maneiras, aqui escolhemos "Chart"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto5.png" alt="pir" width={800} height="auto" /></p>

- **Etapa 4**. Selecione "Temperature Example" como fizemos o upload antes e clique em "Next"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto6.png" alt="pir" width={800} height="auto" /></p>

- **Etapa 5**. Configure os dados exibidos. Aqui definimos os dados exibidos em "Line"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto7.png" alt="pir" width={800} height="auto" /></p>

- **Etapa 6**. Depois de tudo configurado, podemos ver a saída de dados nos Dashboards

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto8a.jpeg" alt="pir" width={800} height="auto" /></p>
