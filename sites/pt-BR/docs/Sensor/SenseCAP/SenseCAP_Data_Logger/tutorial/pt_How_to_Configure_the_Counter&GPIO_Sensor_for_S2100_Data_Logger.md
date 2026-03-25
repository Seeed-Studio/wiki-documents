---
description: Configurar o Sensor de Contador & GPIO
title: Configurar o Sensor de Contador & GPIO
keywords:
  - SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger
last_update:
  date: 4/12/2023
  author: Yvonne
createdAt: '2023-02-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger/
---

# # Colocando o S2100 em funcionamento com o Sensor de Contador & GPIO

Vamos começar aprendendo como usar o S2100 com o sensor de Contador & GPIO. Depois que tivermos entendido isso, passaremos para o básico da aplicação do S2100. Isso lhe dará uma boa ideia de como conectar seu próprio sensor personalizado no futuro.

## Sonda do Sensor

Prepare estes itens:

- Data logger
- Sensor de chuva Rain Gauge RG-15 (como exemplo)
- Cabo de 8 pinos
- Chave de fenda cruzada (entalhe cruzado nº 2)
- SenseCAP Mate APP

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/2.png"/></div>

# Conectar a Sonda do Sensor

## Desmontar o Data Logger

1. Desparafuse três parafusos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/3.png"/></div>

2. Retire a tampa.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/4.png"/></div>

3. Remova a tampa roscada e passe-a através do cabo do sensor, passe-a pela tampa inferior e conecte-a ao terminal de fiação.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/5.png"/></div>

| **Nº** | **Pino** | **Descrição** |
| --- | --- | --- |
| 1 | 12V | Tensão de entrada externa de 12V. O Data Logger pode ser alimentado por uma fonte de alimentação externa de 12V DC. Ao usar fonte de alimentação de 12V, a bateria servirá como fonte de alimentação de backup. |
| 2 | 5V | Tensão de saída de 5V, fornecendo 5V de tensão para o sensor. |
| 3 | 3V | Tensão de saída de 3V, fornecendo 3V de tensão para o sensor. |
| 4 | IO | Nível de aquisição ou entrada de pulso |
| 5 | V1 | A entrada de tensão de 0 a 10V é coletada |
| 6 | V2 | A entrada de tensão de 0 a 10V é coletada |
| 7 | A | RS485 A/+ |
| 8 | B | RS485 B/- |
| 9 | I1 | Coleta a entrada de corrente de 4 a 20mA |
| 10 | I2 | Coleta a entrada de corrente de 4 a 20mA |
| 11 | GND | Pino de terra |
| 12 | GND | Pino de terra |

## Opções de alimentação do sensor

O Data Logger suporta dois modos de alimentação; aqui escolhemos o modo de Bateria Interna:

| **Modo** | **Descrição** |
| --- | --- |
| Built-in Battery | O Data Logger e os sensores são alimentados por baterias. Nesse caso, o Data Logger pode ser conectado a um sensor de 5V. |

## Conectar ao Datalogger

Sequência de fios do Datalogger:

| **Tipo de fio** | **Descrição** |
| --- | --- |
| Fio vermelho | 5V |
| Fio preto | GND (qualquer porta serve.) |
| Fio amarelo | IO |

1. Passe o cabo de 8 pinos pela tampa inferior e conecte-o à base do Data Logger de acordo com os requisitos da sequência de fios;

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/6.png"/></div>

2. Conecte a tampa superior, o anel de borracha e a tampa roscada em sequência

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/7.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/8.png"/></div>

3. **Aperte os parafusos e as tampas roscadas** para verificar a vedação contra água. Se o diâmetro do fio for muito fino, adicione fita à prova d'água para enrolamento.

**\*Observação:** Ao montar o dispositivo, é necessário instalar a almofada à prova d'água do Data Logger e da caixa adaptadora, e apertar a tampa roscada e o parafuso, caso contrário o efeito de impermeabilidade do dispositivo pode ser afetado!

Se o diâmetro do fio for muito pequeno, ele pode ser enrolado com fita à prova d'água, como mostrado abaixo:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/9.png"/></div>

## Conectar ao Sensor de Medidor de Chuva

Sequência de fios do sensor Rain Gauge:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/10.png"/></div>

1. Desparafuse quatro parafusos, retire a tampa. Passe o cabo de 8 pinos pela tampa inferior e conecte-o à base do J1 de acordo com os requisitos da sequência de fios;

|Tipo de fio|Descrição|
| --- | --- |
|Vermelho|  V+|
|Preto| GND|
|Amarelo|OUT|

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/11.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/12.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/13.png"/></div>

2. Coloque o DIP Switch **1** da base do sensor de chuva S1 em ON, coloque o switch **2** em OFF, e coloque o **3** e o **4** em OFF;

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/14.png"/></div>

3. Instale a tampa e aperte os parafusos. Conclua a conexão.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/15.png"/></div>

Terminamos a fiação neste ponto. Agora, vamos configurar o S2100 e configurá-lo em nosso APP

## Conectar ao Detector de Vazamento de Água

Sequência de fios do sensor detector de vazamento de água:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/37.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/38.png"/></div>

|Tipo de fio|Descrição|
| --- | --- |
|Vermelho|V+|
|Azul|NC (sinal normalmente fechado)|
|Amarelo|COM|
|Branco|IN IO|
|Marrom|V-|

1. Passe o cabo de 5 vias pela tampa inferior e conecte-o à base do Data Logger de acordo com os requisitos da ordem de fiação;

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/39.png"/></div>

| **Cor do fio do sensor** | **Função** | **Terminal no S2100** |
| --- | --- | --- |
| **Vermelho** | Alimentação positiva | **`5V OUT`** |
| **Marrom** | Alimentação negativa | **`GND`** |
| **Amarelo** | Comum do sinal | **`GND`** |
| **Branco** | Sinal de chave digital | **`IO IN`** |
| **Azul** | Sinal normalmente fechado | *(Deixe desconectado e isole com fita)* |

2. Reinstale a tampa superior, o anel de borracha e a porca do cabo em sequência.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/41.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/42.png"/></div>

# Configurar o S2100

## Conectar o Sensor ao App

1. Pressione o botão e segure por **3 segundos**, o LED piscará em frequência de 1s. Use o App para conectar o sensor em até 1 minuto; caso contrário, o dispositivo será desligado ou reinicializado.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/16.png"/></div>

2. Selecione "S2100 Data Logger".

Clique no botão "User" para entrar em User Settings e, em seguida, clique em "Bluetooth Configuration" para começar a escanear o Bluetooth do sensor.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/50.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/51.png"/></div>

3. Selecione o Sensor pelo S/N (S/N está na etiqueta frontal do sensor). Então, as informações básicas do sensor serão exibidas após a entrada.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/52.png"/></div>

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/53.png"/></div>

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/54.png"/></div>

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/55.png"/></div>

4. Entre no modo de configuração após a conexão Bluetooth ser bem-sucedida: o LED pisca em frequência de 2s.

## Configurar parâmetros básicos pelo App

### Selecionar a Plataforma e a Frequência

Os sensores S210x são fabricados para suportar plano de frequência universal de 863MHz ~ 928MHz em um único SKU. Ou seja, cada dispositivo individual pode suportar 7 planos de frequência.

Aqui selecionamos "SenseCAP for Helium" ou "SenseCAP for TTN". O Plano de Frequência é baseado na sua situação real.

**\*Observação:** O Data Logger pode enviar dados quando houver uma rede Helium ao redor do usuário. Ele roda no SenseCAP private Helium Console. Os usuários não precisam criar um dispositivo no Helium Console;

A plataforma SenseCAP for TTN precisa ser usada com o gateway [LoRaWAN outdoor](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html) da SenseCAP

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/56.png"/></div>

### Definir o Intervalo

O modo de funcionamento do dispositivo: acordar o dispositivo a cada intervalo, coletar os valores de medição e enviá-los através de LoRa.

Por exemplo, o dispositivo coleta e envia dados **a cada 5 minutos por padrão**.

### Definir a Política de Pacotes

A estratégia de uplink de pacotes do sensor possui três modos; selecionamos 1N aqui, ou você pode escolher de acordo com sua própria necessidade.

| **Parâmetro** | **Descrição** |
| --- | --- |
| 2C+1N (default) | 2C+1N (2 pacotes confirmados e 1 não confirmado) é a melhor estratégia; o modo pode minimizar a taxa de perda de pacotes, porém o dispositivo consumirá a maior quantidade de pacotes de dados no TTN ou créditos de dados na rede Helium. |
| 1C | 1C (1 confirmado) o dispositivo irá dormir depois de receber 1 pacote de confirmação do servidor. |
| 1N | 1N (1 não confirmado) o dispositivo apenas envia o pacote e então começa a dormir, independentemente de o servidor ter recebido os dados ou não. |

### Restaurar Configuração de Fábrica

Ao selecionar a plataforma SenseCAP, você deve usar o EUI/App EUI/App Key fixos. Portanto, é necessário restaurar as configurações de fábrica antes de mudar de volta para a plataforma SenseCAP a partir de outras plataformas.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/57.png"/></div>

Quando cometemos um erro ou queremos redefinir tudo, podemos clicar no botão. O dispositivo será restaurado para a configuração padrão de fábrica.

**\*Observação:** A função "Restore Factory" só pode redefinir as Configurações Básicas.

## Configurar Sensor GPIO via App

Selecione o "Protocol" como "GPIO". Em seguida, defina os seguintes parâmetros em sequência.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/25.png"/></div>

1. Selecione a tensão de alimentação do sensor. Ele suporta 3V/5V/12V. Aqui selecionamos **5V**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/26.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/27.png"/></div>

2. Defina o "Sensor Warm-up time"; o tempo de aquecimento indica quanto tempo o sensor leva para atingir o nível máximo de precisão ou desempenho após o fornecimento de tensão. Inserimos **50(ms)** aqui.
2. Selecione o tipo de entrada:

| Modo de Nível | O sinal de nível de entrada é coletado, o nível alto é 1, o nível baixo é 0 |
| --- | --- |
| Modo de Contador | O sinal de pulso é coletado e o número de pulsos é registrado |

Selecionamos **Counter Mode** aqui.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/28.png"/></div>

### Definir o Sensor de Contador

Selecione o "Counter Mode" como tipo de entrada. Em seguida, defina os seguintes parâmetros em sequência.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/29.png"/></div>

| Entrada digital | Define o tipo de pulso de entrada. Pull High: Válido quando uma borda de subida é detectada. Pull Low: Válido quando uma borda de descida é detectada. Selecionamos **Pull High** aqui. |
| --- | --- |
| Filtro Digital | Quando a largura de pulso exceder 10 ms, é recomendado habilitá-lo. Ele é habilitado por padrão. **Enable** aqui. |
| Reiniciar para limpar a contagem | Quando ocorre uma reinicialização do Datalogger, a contagem é zerada para 0. Ele é desabilitado por padrão. **Disable** aqui. |
| Y= Ax + B | "Y": É o valor que o Datalogger irá enviar. "x": É o valor original do contador. Fábrica A: Valores personalizados que podem ser aumentados ou reduzidos em múltiplos de "x". Fábrica B: Um valor personalizado que incrementa ou diminui o valor de "x". Definindo os valores de A e B, você pode calcular o valor desejado. Defina **A=0.2** e **B=0**. |
| Coleta por unidade de tempo | Habilitar esta função aumenta o envio por um valor: quantidade acumulada por hora. Por exemplo, se o valor de Y dentro de uma hora for 1000, 1000/h será enviado. **Disable** aqui. |

Após concluir as informações de configuração, clique em "Back to Home" (neste momento, o nó e o Bluetooth do APP serão desconectados automaticamente), e o Data Logger tentará se conectar à rede (o LED indicador pisca em vermelho lentamente ao tentar se conectar à rede e pisca em verde rapidamente depois que a conexão for bem-sucedida);

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/30.png"/></div>

# Verificar dados no SenseCAP Portal

## Vincular Sensor ao SenseCAP Portal

Abra o SenseCAP Mate App.

1. Digitalizar o QR Code

2. Clique em "Add device" no canto superior direito da página do dispositivo para entrar na página de vinculação do dispositivo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/31.png"/></div>

3. Digitalize o código QR no dispositivo para vinculá-lo à sua conta. Se você não defini-lo para um grupo designado, o dispositivo será colocado no grupo "default".

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/32.png"/></div>

4. Preencher o EUI manualmente

Se o adesivo do código QR estiver danificado, você pode preencher manualmente o EUI do dispositivo para vinculá-lo à sua conta. Certifique-se de inserir o EUI no formato sugerido pelo sistema e clique em "confirm".

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/33.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/34.png"/></div>

## Verificar Dados no SenseCAP Portal

No SenseCAP App ou no site [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/) , você pode verificar o status online do dispositivo e os dados mais recentes. Na lista de cada Sensor, você pode verificar seu status online e a hora do último envio de dados.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/35.png"/></div>

Além disso, você pode verificar os dados no SenseCAP Mate APP.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/36.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/1.png"/></div>
