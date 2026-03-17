---
description: Configurar o Sensor Analógico
title: Configurar o Sensor Analógico
keywords:
  - SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger
last_update:
  date: 4/12/2023
  author: Yvonne
createdAt: '2023-02-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger/
---

# Começando com o S2100 usando Sensor de Entrada Analógica

Vamos começar aprendendo como usar o S2100 com um sensor de entrada analógica. Depois que entendermos isso, vamos passar para o básico da aplicação do S2100. Isso lhe dará uma boa ideia de como conectar seu próprio sensor personalizado no futuro.

## Prepare estes itens

- Data logger
- Sensor de luz (como exemplo)
- Chave de fenda cruzada (fenda cruzada nº 2)
- SenseCAP Mate APP

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/2.png"/></div>

# Conectar a Sonda do Sensor

Primeiro, precisamos fazer a fiação. Siga os passos abaixo.

## Desmonte o Data Logger

1. Desaperte três parafusos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png"/></div>

2. Retire a tampa.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png"/></div>

3. Remova a tampa roscada e passe-a pelo cabo do sensor, passe-a pela tampa inferior e conecte-a ao terminal de fiação.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png"/></div>
## Descrição do terminal de fiação

| **Nº** | **Pino** | **Descrição** |
| --- | --- | --- |
| 1 | 12V | Tensão de entrada externa de 12V. O Data Logger pode ser alimentado por uma fonte de alimentação externa de 12V DC. Ao usar fonte de alimentação de 12V, a bateria servirá como fonte de alimentação de backup. |
| 2 | 5V | Tensão de saída de 5V, fornecendo tensão de 5V ao sensor. |
| 3 | 3V | Tensão de saída de 3V, fornecendo tensão de 3V ao sensor. |
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

O Data Logger suporta dois modos de alimentação; escolhemos o modo de Bateria Interna, já que o sensor de luz só precisa de uma alimentação de 5V:

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

1. Passe o fio de 8 pinos pela tampa inferior e conecte-o à base do Data Logger de acordo com os requisitos da sequência de fios;

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/6.png"/></div>

2. Conecte a tampa superior, o anel de borracha e a tampa de rosca em sequência

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/7.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/8.png"/></div>

3. **Aperte os parafusos e as tampas roscadas****para verificar a vedação contra água**. Se o diâmetro do fio for muito fino, adicione fita impermeável para enrolar.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/9.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/10.png"/></div>

**\*Nota:** Ao montar o dispositivo, é necessário instalar a almofada à prova d'água do Data Logger e da caixa adaptadora, e apertar a tampa de rosca e o parafuso, caso contrário o efeito à prova d'água do dispositivo pode ser afetado!

Se o diâmetro do fio for muito pequeno, ele pode ser enrolado com fita impermeável, como mostrado abaixo:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/11.png"/></div>

Concluímos a fiação neste ponto. Agora, vamos configurar o S2100 e configurá-lo em nosso APP.

# Configurar o S2100

## Conectar o Sensor ao App

1. Pressione o botão e segure por **3 segundos** , o LED piscará em frequência de 1s. Use o App para conectar o sensor dentro de 1 minuto; caso contrário, o dispositivo será desligado ou reiniciado.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/12.png"/></div>

2. Selecione "S2100 Data Logger".

Clique no botão "Setup" para ligar o Bluetooth e clique em "Scan" para iniciar a varredura do Bluetooth do sensor.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/13.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/14.png"/></div>

3. Selecione o Sensor pelo S/N (o S/N está na etiqueta frontal do sensor). Em seguida, as informações básicas do sensor serão exibidas após a entrada.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/15.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/16.png"/></div>

4. Entre no modo de configuração após a conexão Bluetooth ser bem-sucedida: o LED pisca em frequência de 2s.

## Configurar parâmetros básicos pelo App

### Selecionar a Plataforma e Frequência

Os sensores S210x são fabricados para suportar um plano de frequência universal de 863MHz ~928MHz em um único SKU. Isso quer dizer que cada dispositivo individual pode suportar 7 planos de frequência.

Aqui selecionamos "SenseCAP for Helium" ou "SenseCAP for TTN". O plano de frequência é baseado na sua situação real.

**\*Nota:** O Data Logger pode fazer upload de dados quando houver uma rede Helium ao redor do usuário. Ele roda no SenseCAP private Helium Console. Os usuários não precisam criar um dispositivo no Helium Console;

A plataforma SenseCAP for TTN precisa ser usada com o gateway externo SenseCAP LoRaWAN (https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html)

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/17.png"/></div>

### Definir o Intervalo

O modo de funcionamento do dispositivo: acordar o dispositivo a cada intervalo e coletar valores de medição e carregá-los através de LoRa.

Por exemplo, o dispositivo coleta e envia dados **a cada 60 minutos por padrão**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/18.png"/></div>

### Definir a Política de Pacotes

A estratégia de pacote uplink do sensor possui três modos; selecionamos 1N aqui ou você pode escolher de acordo com sua própria necessidade.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/19.png"/></div>

| **Parâmetro** | **Descrição** |
| --- | --- |
| 2C+1N (default) | 2C+1N (2 pacotes confirmados e 1 não confirmado) é a melhor estratégia; o modo pode minimizar a taxa de perda de pacotes, porém o dispositivo consumirá a maior quantidade de pacotes de dados no TTN, ou créditos de dados na rede Helium. |
| 1C | 1C (1 confirmado): o dispositivo entrará em modo de espera após receber 1 pacote de confirmação do servidor. |
| 1N | 1N (1 não confirmado): o dispositivo apenas envia o pacote e então entra em modo de espera, não importando se o servidor recebeu os dados ou não. |

### Restaurar Configuração de Fábrica

Ao selecionar a plataforma SenseCAP, você deve usar o EUI/App EUI/App Key fixos. Portanto, você precisa restaurar as Configurações de Fábrica antes de voltar para a plataforma SenseCAP a partir de outras plataformas.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/20.png"/></div>

Quando cometemos um erro ou queremos redefinir tudo, podemos clicar no botão. O dispositivo será restaurado para a configuração padrão de fábrica.

**\*Nota:** A função "Restore Factory" só pode redefinir as Configurações Básicas.

## Configurar Sensor Analógico via App

Selecione o “Protocol” como “Analog Input”. Em seguida, defina os seguintes parâmetros por sua vez.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/21.png"/></div>

Selecione o Tipo de Alimentação como **Periodical power**.

| Tensão de Alimentação | Selecionamos **5V** aqui. |
| --- | --- |
| Tempo de Aquecimento do Sensor | O tempo de aquecimento indica o tempo necessário para que o sensor atinja seu mais alto nível de precisão ou desempenho após o fornecimento de tensão ter sido aplicado. Inserimos **200(ms)** aqui. |
| Faixa de Tensão | 0-10V (o Data Logger pode coletar sinais de tensão dentro de 0~10V e ajustar automaticamente o limite superior para aumentar a precisão). Selecionamos **Voltage** aqui. |
| Interface V1 | O Data Logger suporta dois sinais de tensão analógica. Quando o fio do sensor está conectado a V1/V2, a configuração pode ser habilitada. Habilitamos **Interface V1** aqui. |
| Interface V2 |
| Y= Ax + B | "Y": É o valor que o Data Logger irá enviar. "x": É o valor de corrente original. Fábrica A: Valores personalizados que podem ser aumentados ou reduzidos em múltiplos de "x". Fábrica B: Um valor personalizado que incrementa ou diminui o valor de "x". Definindo os valores de A e B, você pode calcular o valor desejado. Definimos A como **100** e B como **0** aqui. |

Depois que as informações de configuração forem concluídas, clique em "Back to Home" (neste momento, o nó e o Bluetooth do APP serão desconectados automaticamente), e o Data Logger tentará se conectar à rede (o indicador LED pisca em vermelho lentamente ao tentar se conectar à rede e pisca em verde rapidamente depois que a conexão for bem-sucedida);

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/22.png"/></div>

# Verificar dados no SenseCAP Portal

## Vincular Sensor ao SenseCAP Portal

Abra o SenseCAP Mate App.

1. **Escanear QR Code**

1. Clique em "Add device" no canto superior direito da página do dispositivo para entrar na página de vinculação do dispositivo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/23.png"/></div>

1. Escaneie o código QR no dispositivo para vinculá-lo à sua conta. Se você não o definir para um grupo designado, o dispositivo será colocado no grupo "default".

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/24.png"/></div>

1. **Preencher manualmente o EUI**

Se o adesivo do código QR estiver danificado, você pode preencher manualmente o EUI do dispositivo para vinculá-lo à sua conta. Certifique-se de inserir o EUI no formato sugerido pelo sistema e, em seguida, clique em "confirm".

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/25.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/26.png"/></div>

## Verificar Dados no aplicativo SenseCAP Mate

Por fim, no aplicativo SenseCAP ou no site [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/), você pode verificar o status online do dispositivo e os dados mais recentes. Na lista de cada sensor, você pode verificar seu status online e a hora do último envio de dados.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/27.png"/></div>

Além disso, você pode verificar a data no aplicativo SenseCAP Mate.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/28.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/1.png"/></div>
