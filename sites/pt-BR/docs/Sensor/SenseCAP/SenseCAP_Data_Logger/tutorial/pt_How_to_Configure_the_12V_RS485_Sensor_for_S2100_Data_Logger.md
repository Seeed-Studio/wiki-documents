---
description: Configurar o Sensor RS485 de 12V
title: Configurar o Sensor RS485 de 12V
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/f/i/first_page_all-22.jpg
slug: /Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger
keywords:
  - SenseCAP data logger
  - registrador de dados
  - coletor
last_update:
  date: 08/17/2024
  author: Yvonne
createdAt: '2023-02-24'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger/
---
# Primeiros Passos com o S2100 e um Sensor RS485 de 12V

Este guia ajudará você a começar a usar o S2100 e um sensor RS485 de 12V. Após concluí-lo, você entenderá como conectar seu próprio sensor personalizado no futuro.

## Etapa 1: Reunir os Itens Necessários

- Data Logger
- Sensor ONE Compact Weather Station (como exemplo)
- Caixa de junção
- Cabo M12
- Fio de 8 pinos (40cm)
- Chave de fenda Phillips (entalhe cruzado nº 2)
- App SenseCAP Mate

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/2.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

## Etapa 2: Conectar o Sensor

Siga as etapas abaixo para concluir o processo de fiação.

### Etapa 2.1: Desmontar o Data Logger

1. Desparafuse os três parafusos.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. Remova a tampa.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. Remova a tampa rosqueada, passe o cabo do sensor pela tampa e pela tampa inferior e conecte-o ao terminal de fiação.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

:::note
Observe que o registrador de dados S2100 suporta apenas três protocolos de medição: `RS485 Modbus RTU` (A/B), `Analog Input` (V1, V2, I1, I2) e `Pulse-Level Input` (IO).
:::

### Etapa 2.2: Descrição do Terminal de Fiação

|**Nº**|**Pino**|**Descrição**|
| - | - | - |
| 1 | 12V | Tensão de entrada externa de 12V. O Data Logger pode ser alimentado por uma fonte de alimentação externa DC de 12V. Ao usar uma fonte de alimentação de 12V, a bateria atuará como fonte de alimentação de backup. |
| 2 | 5V  | Tensão de saída de 5V, fornecendo 5V de tensão para o sensor. |
| 3 | 3V  | Tensão de saída de 3V, fornecendo 3V de tensão para o sensor. |
| 4 | IO  | Nível de aquisição ou entrada de pulso. |
| 5 | V1  | A tensão de entrada de 0 a 10V é coletada. |
| 6 | V2  | A tensão de entrada de 0 a 10V é coletada. |
| 7 | A   | RS485 A/+ |
| 8 | B   | RS485 B/- |
| 9 | I1  | Coleta a entrada de corrente de 4 a 20mA. |
| 10 | I2 | Coleta a entrada de corrente de 4 a 20mA. |
| 11 | GND| Pino de aterramento. |
| 12 | GND| Pino de aterramento. |

### Etapa 2.3: Opções de Alimentação para o Sensor

O Data Logger suporta dois modos de alimentação. Aqui usaremos o modo DC externo de 12V:

| **Modo** | **Descrição** |
| - | - |
| Bateria Interna | O Data Logger e os sensores são alimentados por baterias. Nesse caso, o Data Logger pode ser conectado a um sensor de 5V. |
| DC Externo de 12V | Fornece energia ao Data Logger e ao sensor por meio de uma fonte de alimentação externa de 12V. Se o 12V externo for desconectado, o sistema muda para alimentação por bateria. Ao usar uma fonte de alimentação externa de 12V, use-a junto com a caixa de junção para garantir o desempenho à prova d'água do dispositivo. |

### Etapa 2.4: Conectar à Caixa de Junção

Sequência de fios do cabo M12:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/6.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Quando o seu sensor requer alimentação de 12V, a bateria sozinha não consegue acioná-lo. Portanto, é necessária uma fonte de alimentação externa de 12V.

1. Prepare os seguintes itens: Adaptador DC de 12V, Caixa de junção e fio de 8 pinos (apenas 4 pinos são necessários).
2. Faça a fiação do terminal do Data Logger.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/7.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

   Prenda a tampa, o anel de borracha e a tampa rosqueada em sequência.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/8.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/9.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. Faça a fiação do terminal da caixa de junção.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/10.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

4. Conecte o fio do sensor M12 à caixa de junção.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/11.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

5. Conecte o adaptador DC de 12V à fonte de alimentação.

## Etapa 3: Conectar ao Sensor

Agora que você conectou com sucesso a caixa de junção ao S2100, passaremos para a conexão do sensor.

### Etapa 3.1: Conhecer a Sequência de Fios do Sensor ONE Compact Weather Station

O dispositivo usa um conector M12 de 8 pinos. Os pinos de cores diferentes fornecem alimentação e comunicação de dados, conforme mostrado abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/12.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Ao trabalhar com RS-485, você pode conectar apenas 4 fios (sem usar a função de aquecimento). O restante deve ser individualmente enrolado com fita para evitar curtos-circuitos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/13.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Certifique-se de que os furos do cabo e os pinos do conector do dispositivo **estejam corretamente alinhados** ao conectar o cabo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/14.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Conecte o cabo e aperte-o no sentido horário.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/15.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Por fim, conclua a montagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/16.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

**Aperte os parafusos e as tampas rosqueadas** para garantir a impermeabilidade. Se o diâmetro do fio for muito fino, adicione fita impermeável para enrolar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/17.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

**\*Observação:** Ao montar o dispositivo, certifique-se de que a almofada impermeável do Data Logger e da caixa adaptadora esteja instalada, e que a tampa rosqueada e os parafusos estejam apertados. Caso contrário, a impermeabilidade do dispositivo poderá ser comprometida. Se o diâmetro do fio for muito pequeno, enrole-o com fita impermeável, como mostrado abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/18.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Neste ponto, a fiação está concluída. Agora, vamos configurar o S2100 e ajustá-lo usando nosso app.

## Etapa 4: Configurar o S2100

### Etapa 4.1: Conectar ao Sensor pelo App

1. Pressione o botão e segure por **3 segundos**. O LED piscará com uma frequência de 1s. Use o app para conectar ao sensor em até 1 minuto; caso contrário, o dispositivo será desligado ou reiniciado.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/19.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. Selecione “S2100 Data Logger”.

   Ative o Bluetooth clicando no botão “Setup” e, em seguida, clique em “Scan” para iniciar a varredura pelo Bluetooth do sensor.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/20.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/21.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. Selecione o sensor pelo S/N (o S/N está na etiqueta frontal do sensor). As informações básicas do sensor serão exibidas.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/22.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/23.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

4. Entre no modo de configuração após a conexão Bluetooth ser bem-sucedida. O LED piscará com uma frequência de 2s.

### Etapa 4.2: Configurar Parâmetros Básicos pelo App

#### Selecionar a Plataforma e a Frequência

Os sensores S210x suportam um plano de frequência universal de 863MHz a 928MHz. Cada dispositivo pode suportar sete planos de frequência.

Aqui, selecione “SenseCAP for Helium” ou “SenseCAP for TTN” com base na sua situação real.

**\*Observação:** O Data Logger pode enviar dados quando houver uma rede Helium nas proximidades. Ele é executado no Console privado SenseCAP da Helium, portanto, os usuários não precisam criar um dispositivo no Console da Helium.

A plataforma SenseCAP for TTN precisa ser usada com o [gateway LoRaWAN externo SenseCAP](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/25.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

#### Definir o Intervalo

O dispositivo coleta e envia dados **a cada 60 minutos por padrão**. Você pode ajustar esse intervalo de acordo com suas necessidades.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/26.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

#### Definir a Política de Pacotes

Selecione a estratégia de pacote uplink com base em seus requisitos. Iremos selecionar 1N aqui.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/27.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

| **Parâmetro** | **Descrição** |
| - | - |
| 2C+1N (padrão) | 2C+1N (2 pacotes confirmados e 1 não confirmado) minimiza a perda de pacotes, mas consome mais pacotes de dados no TTN ou créditos de dados na rede Helium. |
| 1C | 1C (1 confirmado) fará com que o dispositivo entre em modo de espera após receber 1 pacote confirmado do servidor. |
| 1N | 1N (1 não confirmado) enviará o pacote e então começará a entrar em modo de espera, independentemente de o servidor ter recebido os dados. |

#### Restaurar Configurações de Fábrica

Se você estiver voltando para a plataforma SenseCAP a partir de outras plataformas, restaure as configurações de fábrica. Isso redefine as configurações básicas do dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/28.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### Etapa 4.3: Configurar o Sensor RS485 Modbus-RTU pelo App

Selecione “Protocol” como “RS485 Modbus RTU” e configure os seguintes parâmetros em sequência.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/29.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

| **Taxa de Baud** | Taxa de baud da comunicação com o sensor. Selecione **9600**. |
| - | - |
| **Endereço Modbus** | O endereço padrão é 10 para Five in ONE, 20 para Seven in ONE, 38 para Nine in ONE e 43 para Ten in ONE. O endereço escravo do sensor varia de 1 a 247. Digite **20** aqui. |
| **Tipo de Alimentação** | Selecione **Always on**. A alimentação periódica reduz o consumo de energia e aumenta a vida útil da bateria, alimentando o sensor apenas antes da coleta de dados. |
| **Tensão de Alimentação** | Selecione a tensão de alimentação **12V** para o sensor. |
| **Tempo de Aquecimento do Sensor** | O tempo necessário para que o sensor atinja sua maior precisão ou nível de desempenho após a aplicação de energia. Digite **200ms**. |
| **Tempo de Resposta** | Tempo que o Data Logger espera por uma resposta após enviar uma requisição de leitura de dados ao sensor. Se excedido, o comando será reenviado. **5(\*100ms)** é adequado. |
| **Tempo de Inicialização** | Tempo para o sensor começar a se comunicar com Modbus após ser energizado. **10\*(100ms)** é adequado. |
| **Número de Medições** | Coletar de 0 a 10 medições no modo RS485. Como o sensor possui sete tipos de registradores de sensor, selecione **7**. |
| **Modo de Trabalho** | Selecione o modo **Periodic collect**: Coletar e enviar dados periodicamente. |
| **Configuração de Medição** | Definir o registrador do valor de medição e outras configurações. |

#### Configuração de Medição

Defina cada medição em sequência. Medição1 (**Temperatura do ar**)

|Endereço do Registrador|O endereço do registrador do valor medido no sensor, que é um número inteiro. O endereço do registrador de temperatura do ar é 0. Digite **0** aqui.|
| - | - |
|Código de Função|Código de função Modbus, selecione **03** aqui.|
|Tipo de Dados|<p>O tipo de dados determina o número de registradores lidos do sensor e como os dados devem analisar o valor. </p><p>Selecione **Signed 32bit integer, 0xABCD** aqui.</p>|
|Precisão|<p>Precisão do valor. Você pode escolher a casa decimal do valor de medição. Se 1 for selecionado, uma casa decimal é mantida.</p><p>Selecione **2, #.##** aqui.</p>|
|Y= Ax + B|<p>“Y”: É o valor que o Data Logger enviará. </p><p>“x”: É o valor atual original. </p><p>Factory A: Valores personalizados que podem ser aumentados ou reduzidos em múltiplos de “x”. </p><p>Factory B: Um valor personalizado que incrementa ou diminui o valor de “x”.</p><p>Ao definir os valores de A e B, você pode calcular o valor desejado. Se apenas valores brutos forem enviados, defina A=1 e B=0.</p><p>**Factory A é 0.001 e Factory B é 0.**</p>|
|Estratégia de Escrita|<p>Esta função é habilitada apenas para alguns sensores especiais e geralmente é desativada por padrão</p><p>Após ler o valor do registrador, instruções especiais podem ser emitidas para o sensor, como a instrução para esvaziar o registrador após ler o registrador 0.</p><p>None: Desativado por padrão.</p><p>After Read: Enviar o comando RS485 para o sensor após ler o registrador.</p><p>On New Data: Enviar o comando RS485 para o sensor a cada 24 horas.</p><p>Não precisamos de estratégia de escrita, então selecionamos **None** aqui.</p>|

Medição2 (**Umidade do ar**)

|Endereço do Registrador|Digite **2** aqui.|
| - | - |
|Código de Função|Selecione **03** aqui.|
|Tipo de Dados|Selecione **Signed 32bit integer, 0xABCD** aqui.|
|Precisão|Selecione **2, #.##** aqui.|
|Y= Ax + B|**Factory A é 0.001 e Factory B é 0.**|
|Estratégia de Escrita|Não precisamos de estratégia de escrita, então selecionamos **None** aqui.|

Medição3 (**Pressão barométrica**)

|Endereço do Registrador|Digite **4** aqui.|
| - | - |
|Código de Função|Selecione **03** aqui.|
|Tipo de Dados|Selecione **Signed 32bit integer, 0xABCD** aqui.|
|Precisão|Selecione **0, #** aqui.|
|Y= Ax + B|**Factory A é 0.001 e Factory B é 0.**|
|Estratégia de Escrita|Não precisamos de estratégia de escrita, então selecionamos **None** aqui.|

Medição4 (**Intensidade de luz**)

|Endereço do Registrador|Digite **6** aqui.|
| - | - |
|Código de Função|Selecione **03** aqui.|
|Tipo de Dados|Selecione **Signed 32bit integer, 0xABCD** aqui.|
|Precisão|Selecione **0, #** aqui.|
|Y= Ax + B|**Factory A é 0.001 e Factory B é 0.**|
|Estratégia de Escrita|Não precisamos de estratégia de escrita, então selecionamos **None** aqui.|

Medição5 (**Direção média do vento**)

|Endereço do Registrador|Digite **12** aqui.|
| - | - |
|Código de Função|Selecione **03** aqui.|
|Tipo de Dados|Selecione **Signed 32bit integer, 0xABCD** aqui.|
|Precisão|Selecione **1, #.#** aqui.|
|Y= Ax + B|**Factory A é 0.001 e Factory B é 0.**|
|Estratégia de Escrita|Não precisamos de estratégia de escrita, então selecionamos **None** aqui.|

Medição6 (**Velocidade média do vento**)

|Endereço do Registrador|Digite **18** aqui.|
| - | - |
|Código de Função|Selecione **03** aqui.|
|Tipo de Dados|Selecione **Signed 32bit integer, 0xABCD** aqui.|
|Precisão|Selecione **1, #.#** aqui.|
|Y= Ax + B|**Factory A é 0.001 e Factory B é 0.**|
|Estratégia de Escrita|Não precisamos de estratégia de escrita, então selecionamos **None** aqui.|

Medição7 (**Intensidade da chuva**)

|Endereço do Registrador|Digite **24** aqui.|
| - | - |
|Código de Função|Selecione **03** aqui.|
|Tipo de Dados|Selecione **Signed 32bit integer, 0xABCD** aqui.|
|Precisão|Selecione **1, #.#** aqui.|
|Y= Ax + B|**Factory A é 0.001 e Factory B é 0.**|
|Estratégia de Escrita|Não precisamos de estratégia de escrita, então selecionamos **None** aqui.|

Após configurar essas medições, clique em **"Back to Home"**. O nó e o Bluetooth do app serão desconectados automaticamente. O Data Logger tentará se conectar à rede. O indicador LED piscará vermelho lentamente enquanto tenta se conectar e piscará verde rapidamente quando a conexão com a rede for bem-sucedida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/30.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

## Etapa 5: Verificar Dados no Portal SenseCAP

### Etapa 5.1: Vincular o Sensor ao Portal SenseCAP

Abra o SenseCAP Mate App.

1. **Escanear QR Code**: Clique em **"Add device"** no canto superior direito da página do dispositivo para entrar na página de vinculação do dispositivo.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/31.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. Escaneie o QR code no dispositivo para vinculá-lo à sua conta. Se você não defini-lo para um grupo designado, o dispositivo será colocado no grupo **"default"**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/32.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. **Preencher manualmente o EUI**: Se o adesivo do QR code estiver danificado, você pode preencher manualmente o EUI do dispositivo para vinculá-lo à sua conta. Certifique-se de que o EUI seja inserido no formato sugerido pelo sistema e então clique em **"confirm"**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/33.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/34.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### Etapa 5.2: Verificar Dados no Portal SenseCAP

No SenseCAP Mate App ou no [SenseCAP Portal](http://sensecap.seeed.cc/), você pode verificar o status online do dispositivo e os dados mais recentes. A lista de cada sensor mostrará seu status online e o horário do último envio de dados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/35.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Você também pode verificar os dados no SenseCAP Mate App.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/36.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/1.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
