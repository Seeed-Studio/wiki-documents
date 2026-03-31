---
description: Introdução ao uso do SenseCAP ONE Compact Weather Sensor
title: Introdução ao uso do SenseCAP ONE Compact Weather Sensor
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor
sku: 101990787,101990693,101990784,101990902,101990961,101991022,101991021,101991023,101991024,101991044,101991102,101991050,101991232,101991141
last_update:
  date: 03/18/2026
  author: Kian
createdAt: '2023-04-13'
updatedAt: '2026-03-18'
url: https://wiki.seeedstudio.com/pt-br/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor/
---
# Introdução ao uso do SenseCAP ONE Compact Weather Sensor

# Pré-instalação

## Instalação

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image2.png" /></div>

# Instalação

### Introdução à interface do dispositivo

Existem dois conectores na parte inferior do dispositivo.

- A interface USB Type-C permite conectar seu computador ao dispositivo com um cabo USB Type-C comum para configuração.

- A interface principal de dados pode ser conectada ao cabo M12 de 8 pinos, suportando múltiplos protocolos de barramento

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image4.png" /></div>

#### Estações meteorológicas V1 vs V2

As estações meteorológicas V1 e V2 podem ser identificadas pelo **SKU no rótulo branco** ou pelo design da base.

Além disso, a porta USB Type-C está localizada em posições diferentes: na V1, ela fica no mesmo lado do rótulo branco, enquanto na V2, fica no lado oposto.

:::tip
As seguintes estações meteorológicas foram atualizadas para V2: S500, S700, S900 e S1000.
:::

| Nome do produto | SKU V1   | SKU V2    |
| -----------  | --------  | --------- |
| S200         |    None   | 101991044 |
| S500         | 101990693 | 101991021 |
| S600-A       |    None   | 101991232 |
| S700         | 101990787 | 101991022 |
| S700-A       |    None   | 101991050 |
| S700-B       |    None   | 101991102 |
| S700-C       |    None   | 101991141 |
| S800         |    None   | 101991023 |
| S900         | 101990784 |    None   |
| S1000        | 101990902 | 101991024 |

:::info
- Qual é a diferença entre o SenseCAP ONE V2 e o V1?
  - Função de software inalterada, o V2 é totalmente compatível para substituir o V1.
  - Otimização parcial de desempenho, como medição de vento.
  - A interface RS422/RS232 foi removida.
:::

#### Layout da interface do dispositivo V1

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/V1.png" /></div>

#### Layout da interface do dispositivo V2

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image3_V2.png" /></div>

### Conectar com cabo USB

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image5.png" /></div>

### Cabo M12

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image6.png" /></div>

O dispositivo adota um conector M12 de 8 pinos; os pinos de cores diferentes fornecem alimentação e comunicação de dados (conforme mostrado no diagrama acima).

Ao trabalhar com RS-485, você pode conectar apenas 4 fios (sem usar a função de aquecimento), e o restante pode ser individualmente enrolado com fita para evitar curto-circuito

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image7.png" /></div>

Os furos do cabo e os pinos do conector do dispositivo devem estar alinhados quando o cabo for conectado.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image8.png" /></div>

Conecte o cabo e aperte-o no sentido horário

Nota: o cabo deve estar alinhado com a parte inferior antes de inseri-lo na base. Caso contrário, os pinos desalinhados podem causar anomalias na comunicação.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image9.png" /></div>

Ao usar o dispositivo com função de aquecimento, é necessária uma fonte de alimentação separada de 24V (recomenda-se 24V@1A). O fio cinza 5 é conectado ao negativo da fonte de alimentação e o fio rosa 6 é conectado ao polo positivo da fonte de alimentação.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image10.png" /></div>

### Instalar o dispositivo

Existem dois principais métodos de instalação: montado em um mastro com uma luva ou em uma plataforma com uma placa de flange.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image11.png" /></div>

O tamanho da luva é mostrado abaixo.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image12.png" /></div>

Recomenda-se que o diâmetro do mastro seja menor ou igual a 75cm.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image13.png" /></div>

A dimensão da placa de flange é mostrada abaixo.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image14.png" /></div>

> Nota: Para obter os dados de direção do vento mais precisos possível, certifique-se da orientação física para o norte durante a instalação, alinhando a **seta** na base diretamente para o norte verdadeiro. Caso contrário, ative a bússola eletrônica durante a configuração.

# Modo de operação do dispositivo

Após a instalação, você pode ligar o dispositivo, configurá-lo e coletar dados do dispositivo.

O dispositivo possui dois modos de operação, **modo de configuração e modo de trabalho.**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image15.png" /></div>

### Configurar o dispositivo via porta USB

Há uma tampa redonda à prova d'água na parte inferior do dispositivo. Gire-a no sentido anti-horário para remover essa tampa e você verá um conector USB Type-C e um botão de configuração.

Conecte o dispositivo ao computador com um cabo USB Type-C. O computador instalará automaticamente o driver do dispositivo. Após a instalação bem-sucedida do driver, você poderá ver uma porta serial no gerenciador de dispositivos.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image16.png" /></div>

Se o driver não for instalado automaticamente, clique neste link para [baixar manualmente](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) e [instalar](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) o [driver](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers). (A versão é CP210x Windows Drivers)

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image17.png" /></div>

**Existem dois métodos para configurar o dispositivo:**

- SenseCAP ONE Configuration Tool

- Ferramenta de depuração serial

### SenseCAP ONE Configuration Tool

SenseCAP ONE Configuration Tool oferece uma interface gráfica para você configurar o dispositivo. Você pode baixar a ferramenta pelo link do GitHub abaixo:

&lt;https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases&gt;

Selecione o software para o respectivo sistema operacional, Windows, macOS ou Linux, de acordo com suas necessidades.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image18.png" /></div>

A próxima imagem mostra a interface principal do SenseCAP ONE Configuration Tool.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image19.png" /></div>

1. Abra o software, clique na caixa suspensa da porta serial e selecione a porta serial correspondente ao dispositivo.

2. Defina a taxa de transmissão (Baud rate) para 9600.

3. Clique em Connect; se a conexão for bem-sucedida, a área de dados do sensor à direita exibirá as medições correspondentes.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image20.png" /></div>

Clique em Settings para entrar nas configurações do dispositivo e clique em "Read From Device" para obter informações sobre o dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image21.png" /></div>

1. Selecione o protocolo de comunicação. No exemplo aqui, escolhemos RS-485 Modbus RTU.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image22.png" /></div>

2. Modifique o endereço Modbus: escreva o endereço em Modbus address e, em seguida, clique em "Write to Device".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image23.png" /></div>

Na página de configuração, você pode modificar o seguinte: nome do dispositivo, tipo de dado e intervalo de envio de dados. Após qualquer modificação, será necessário clicar em "Write to Device" para que as alterações entrem em vigor.

Em Application Settings, você pode definir o ciclo para a ferramenta ler os dados do sensor, com o mínimo de 2S, e um intervalo de pontos para a curva.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image24.png" /></div>

Clique em "Firmware Update" para atualizar o firmware do dispositivo. Entre em contato com o setor de vendas ou suporte técnico em (sensecap@seeed.cc) para obter o firmware.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image25.png" /></div>

Na página de atualização, você precisará escolher se deseja atualizar o firmware da placa principal ou o firmware da placa de driver. Selecione o arquivo de firmware no seu repositório local e clique em "Update Now". Se houver uma queda de energia inesperada durante o processo de atualização, a atualização não será executada. Você precisará repetir o mesmo processo para atualizar o firmware.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image26.png" /></div>

#### Atualização de firmware

1. Abra o `SenseCAP One Configuration Tool`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_One_Configuration_Tool.png" /></div>

2. Conecte o dispositivo ao seu computador via cabo Type-C

3. Abra o software, selecione a porta `COM` correta para o dispositivo e clique em `"Connect"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Connect.png" /></div>

4. Após conectar, clique em `"Firmware Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Firmware_Update.png" /></div>

5. Selecione a placa de destino e o arquivo de firmware correspondente

- Selecione a `Master board`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Master_board.png" /></div>

- Clique em `"Local File"` e navegue até a pasta do firmware

- Clique em `"Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update.png" /></div>

6. Pressione o botão Reset no dispositivo (localizado ao lado da porta Type-C) após clicar em `"Update"`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset.png" /></div>

O processo de atualização começará alguns segundos após pressionar o botão.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update2.png" /></div>

7. Quando a atualização estiver concluída, pressione o botão Reset novamente e clique em `"OK"` na tela.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset2.png" /></div>

8. Repita as etapas acima para gravar outro firmware na `Slave Board 1`.

9. Feche a janela de atualização de firmware após a conclusão e clique em `"Disconnect"`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Disconnect.png" /></div>

Isso conclui todas as etapas de atualização de firmware para a estação meteorológica.

### Ferramenta de depuração serial

As configurações de comunicação são as seguintes:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image27.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image28.png" /></div>

- No Serial Debug Assistant, selecione a porta COM correspondente.

- Marque a caixa de seleção "click Enter to start a new line".

- Defina a taxa de transmissão para 9.600.

- Envie na área de envio.

- Se você receber a mensagem 0XA correspondente na janela de recepção serial, a configuração foi bem-sucedida. Caso contrário, verifique a porta COM e a taxa de transmissão.

Verifique o comando ASIIC detalhado no próximo capítulo.

# Protocolos de comunicação

O dispositivo suporta os seguintes protocolos de comunicação:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image29.png" /></div>

## Protocolo Modbus-RTU

**Parâmetros de comunicação do protocolo**

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/DefaultDeviceAddress.png" /></div>

### Formato de mensagem do protocolo Modbus-RTU

Os dados do sensor são armazenados no Input Register e são somente leitura.

O endereço do dispositivo e a taxa de transmissão de comunicação do RS-485 são armazenados no Holding Register e podem ser modificados.

Cada registrador tem 16 bits e ocupa 2 bytes.

**Ler a mensagem do input register.**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image32.png" /></div>

**Ler e escrever o holding register.**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image33.png" /></div>

### Definição de endereço de registrador

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image34.png" /></div>

### Leitura Modbus-RTU

Aqui está um exemplo da **ferramenta Modbus Poll**

(faça o download em &lt;https://www.modbustools.com/download.html&gt;).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image35.png" /></div>

Parâmetros de conexão de configuração: taxa de transmissão 9600bps, 8 bits de dados,
sem paridade, 1 bit de parada.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image36.png" /></div>

Leia o registrador de temperatura do ar 0x0000 a 0x0001, clique em Setup e selecione Read/Write Definition

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image37.png" /></div>

Defina o ID de escravo padrão (5-em-1 é 10, 7-em-1 é 20, 9-em-1 é 38), código de função 04, endereço inicial 0, quantidade (5-em-1 é 6, 7-em-1 é
28, 9-em-1 é 32);

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image38.png" /></div>

Agora o computador lê os dados do sensor a cada 1 segundo, e a medição (linha 0 e linha 1) é mostrada na imagem abaixo; após dividir a medição por 1000, obtém-se o valor real da temperatura, 28300/1000 = 28,3 °C

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image39.png" /></div>

À direita, você pode verificar os pacotes de dados brutos enviados e recebidos.

Quando a temperatura é positiva:

1. O host envia 01 04 00 00 00 02 71 CB

2. O escravo responde 01 04 04 00 00 6E 8C D6 41

3. Retorna os dados de temperatura 0x00006E8C (Hex), convertidos para decimal = 28300, obtenha a temperatura do ar correspondente dividindo por 1000, temperatura do ar = 28300/1000 = 28,3 °C

**Quando a temperatura é negativa**

A temperatura precisa ser obtida por meio de um cálculo de complemento.

1. O host envia 01 04 00 00 00 02 71 CB

2. O escravo responde 01 04 04 FF FF FC 18 D6 41

3. Dados de temperatura retornados FFFFFC18H (complemento Hex).

4. O código original é - (FF FF FC 18-1 = FF FF FC 17) = 80 00 03 E8(Hex) = -1000 (Decimal).

5. Então a medição de temperatura é -1000/1000 = -1°

**Decodificação S500**

Leia o registrador 0x0000~0x0005.

Enviar comando: 0A 04 00 00 00 06 71 73（código de verificação）；

Retorno: 26 04 40 00 00 70 80（Temperatura）00 00 95 10（Umidade） 06 07 94 40（Pressão do ar）99 09（código de verificação）；Leia o registrador 0x0008~0x0013. Enviar comando: 0A 04 00 08 00 0C 70 B6（código de verificação）；

Retorno: 0A 04 0C 00 00 00 00（Direção mínima do vento）00 03 6E 84（Direção máxima do vento）00 03 C8 C0（Direção média do vento）00 00 00 00（Velocidade mínima do vento）00 00 04 BC（Velocidade máxima do vento）00 00 02 10（Velocidade média do vento）BC 78（código de verificação）

**Decodificação S600**

Leia o registrador 0x0000~0x0013

Enviar comando: 45 03 00 00 00 13 0B 43

Retorno: 45 04 40 00 00 70 80（Temperatura） 00 00 95 10（Umidade） 06 07 94 40（Pressão do ar） 00 00 00 00（Luz） 00 00 00 00（Direção mínima do vento） 00 00 00 00（Velocidade máxima do vento） 00 00 00 00（Direção média do vento） 00 00 00 00 （Velocidade mínima do vento） 00 00 00 00（Velocidade máxima do vento） 00 00 00 00（Velocidade média do vento）77FD（código de verificação）

**Decodificação S700**

Leia o registrador 0x0000-0x001F & 0x0030-0x0033.

Enviar comando: 14 04 00 00 00 20 F3 06

Retorno: 14 04 40 00 00 70 80（Temperatura） 00 00 95 10（Umidade） 06 07 94 40（Pressão do ar） 00 00 00 00（Luz） 00 00 00 00（Direção mínima do vento） 00 00 00 00（Direção máxima do vento） 00 00 00 00（Direção média do vento） 00 00 00 00 （Velocidade mínima do vento）00 00 00 00（Velocidade máxima do vento) 00 00 00 00（Velocidade média do vento） 00 00 00 00（Chuva acumulada） 00 00 00 00（Duração da chuva acumulada） 00 00 00 00（Intensidade da chuva） 00 00 00 00（Intensidade máxima da chuva） 00 00 6A 7C（Temperatura de aquecimento） 00 00 00 00（O estado de tombamento） 99 09（código de verificação）

**Decodificação S900**

Leia o registrador 0x0000-0x001F & 0x0030-0x0033.

Enviar comando: 26 04 00 00 00 20 F7 05

Retorno: 26 04 40 00 00 70 80 (Temperatura) 00 00 95 10(Umidade) 06 07 94 40(Pressão do ar) 00 00 00 00(Luz) 00 00 00 00(Direção mínima do vento) 00 00 00 00(Direção máxima do vento) 00 00 00 00(Direção média do vento) 00 00 00 00 (Velocidade mínima do vento) 00 00 00 00(Velocidade máxima do vento) 00 00 00 00(Velocidade média do vento) 00 00 00 00(Chuva acumulada) 00 00 00 00(Duração da chuva acumulada) 00 00 00 00(Intensidade da chuva) 00 00 00 00(Intensidade máxima da chuva)00 00 6A 7C(Temperatura de aquecimento) 00 00 00 00(Estado de tombamento) 99 09(Código de verificação)

PM2.5 e PM10 precisam ser lidos separadamente：

Enviar comando: 26 04 00 30 00 04 F7 11

Retorno: 26 04 08 00 00 90 88(PM2.5) 00 00 A4 10(PM10) 13 FA(Código de verificação)

**Decodificação S1000**

Leia o registrador 0x0000-0x001F e 0x0030-0x0033.

Enviar comando: 2B 04 00 00 00 20 F6 18

Retorno: 2B 04 40 00 00 70 80 (Temperatura) 00 00 95 10(Umidade) 06 07 94 40(Pressão do ar) 00 00 00 00(Luz) 00 00 00 00(Direção mínima do vento) 00 00 00 00(Direção máxima do vento) 00 00 00 00(Direção média do vento) 00 00 00 00 (Velocidade mínima do vento) 00 00 00 00(Velocidade máxima do vento) 00 00 00 00(Velocidade média do vento) 00 00 00 00(Chuva acumulada) 00 00 00 00(Duração da chuva acumulada) 00 00 00 00(Intensidade da chuva) 00 00 00 00(Intensidade máxima da chuva)00 00 6A 7C(Temperatura de aquecimento) 00 00 00 00(Estado de tombamento) 99 09(Código de verificação)

PM2.5, PM10 e CO2 precisam ser lidos separadamente：

Enviar comando: 2B 04 00 30 00 04 F6 0C

Retorno: 2B 04 08 00 00 90 88(PM2.5) 00 00 A4 10(PM10) 13 FA(Código de verificação)

Leia o registrador 0x0040~0x0041.

Enviar comando:2B 04 00 40 00 02 77 D5

Retorno:2B 04 04 00 0C EC 98 （CO2） FD 2F （Código de verificação）；

### Sensor de ruído

O sensor de ruído é usado como um sensor RS485 independente, que é conectado em paralelo com outras unidades de medição no mesmo barramento RS-485, portanto precisa ser lido e configurado separadamente.

Especificação:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image40.png" /></div>

Protocolo de leitura de dados e configuração:

O protocolo de comunicação adota o protocolo padrão RS485 Modbus-RTU e os parâmetros de comunicação do protocolo são os seguintes:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image41.png" /></div>

Consultando os dados do sensor de ruído (endereço: 40, 0x28) :

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image42.png" /></div>

Se a consulta for bem-sucedida, as seguintes informações serão retornadas:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image01.png" /></div>

DB real = valor do registrador /100

O valor do registrador de ruído é 0x128E=4750, e o valor é =4750/100=47.5dB

## Protocolo ASCII

### Definição de comando

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image44.png" /></div>

### Formato do comando de consulta

Os comandos têm dois formatos:

**1.** **Um comando sem =** **refere-se ao método básico de consulta.**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/11.png" /></div>

*Exemplo: `?<CR><LF>` indica consultar o endereço do dispositivo*

**2.** Um comando **com = refere-se a uma consulta com um argumento**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/22.png" /></div>

*Exemplo: 0XA;BD=`?<CR><LF>` indica consultar a taxa de transmissão do dispositivo*

### Formato do comando de configuração

**Definir um parâmetro especificado, como definir uma taxa de transmissão.**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/33.png" /></div>

*Exemplo: 0XA;BD=96`<CR><LF>` indica consultar a taxa de transmissão do dispositivo*

### Lista de comandos

Por favor, consulte:
[SenseCAP ONE/SenseCAP ONE V3 Compact Weather Station User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

## SDI-12

A comunicação SDI-12 adota três fios, dois dos quais são fios de alimentação do sensor e o outro é o fio de sinal SDI-12.

Cada sensor no barramento SDI-12 tem um endereço exclusivo, que pode ser definido como '0', '1' ~ '9', 'A' ~ 'Z', 'A' ~ 'Z'. O endereço SDI-12 do SenseCAP ONE é por padrão '0'. As instruções suportadas por este sensor são mostradas no próximo capítulo, onde cada instrução está em conformidade com o SDI-12 v1.4.

O sensor é alimentado por uma fonte de alimentação CC de 3.6~16V. Após o sensor ser energizado, ele entrará imediatamente no modo de suspensão e aguardará o equipamento de aquisição de dados dar instruções. SDI-12 usa uma taxa de transmissão de 9600bps, 1 bit de início (nível alto), 7 bits de dados (0 alto e 1 baixo, anti-lógica), 1 bit de paridade par e 1 bit de parada.

A sequência de cada byte enviado é mostrada na figura a seguir:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/44.png" /></div>

### Comando e resposta SDI-12

Por favor, consulte [SenseCAP ONE/SenseCAP ONE V3 Compact Weather Station User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

### Leitura SDI-12

**Fiação do SDI-12**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image47.png" /></div>

**Usar o depurador USB para SDI-12 para se comunicar com o dispositivo**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image48.png" /></div>

**As configurações de comunicação:**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image49.png" /></div>

Conecte o fio verde (GND Data) e o fio amarelo (SDI-12 Data) ao depurador **USB para SDI-12**.

E conecte o fio vermelho (Vin+ positivo de alimentação) e o fio marrom (Vin- terra de alimentação) à fonte de alimentação de 12V.

Baixe o assistente de depuração de porta serial:
&lt;https://github.com/Neutree/COMTool&gt;, e então abra a ferramenta de depuração de porta serial.

- Escolha o número de porta correto

- Defina a taxa de transmissão para a taxa de transmissão do depurador USB para SDI-12 (observe que não é a taxa de transmissão do protocolo SDI-12)

- Marque "CRLF"

- Clique para abrir a porta serial.

- Envie o comando de consulta de endereço do dispositivo "?!", se você puder ver a resposta "0", significa que a conexão está OK.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image50.png" /></div>

**Iniciar medição**

Ler temperatura do ar, umidade do ar, pressão barométrica, intensidade de luz

Envie o "comando de início de medição 0M!", o sensor primeiro responde com "00024", o que significa que o comando "0M!" leva 2 segundos para medir e retorna 4 valores medidos. Após 2 segundos, o sensor responde com seu próprio endereço "0", indicando que a medição foi concluída.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image51.png" /></div>

Em seguida, envie " comando de leitura do valor medido 0D0!" para obter os 4 valores medidos desta medição, que são temperatura do ar +27.01℃, umidade do ar 64.74%, pressão barométrica 100720Pa e intensidade de luz 10Lux.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image52.png" /></div>

Use o comando de medição estendida 0M1! para ler direção mínima do vento, direção máxima do vento, direção média do vento, velocidade mínima do vento, velocidade máxima do vento e velocidade média do vento. O dispositivo responde com "00056", o que significa que o comando "0M1!" leva 5 segundos para medir e retorna 6 valores medidos. Após 5 segundos, o dispositivo responde com seu próprio endereço "0", indicando que a medição foi concluída.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image53.png" /></div>

Em seguida, envie "Comando de leitura do valor medido 0D0!" para obter os 6 valores medidos desta medição, que são direção mínima do vento 345.9 graus, direção máxima do vento 347.5 graus, direção média do vento 346.3 graus, velocidade mínima do vento 2.8m/s, e velocidade máxima do vento 2.8m/s, velocidade média do vento 2.8m/s.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image54.png" /></div>

Em seguida, envie "comando de medição contínua 0R2! o dispositivo retorna 4 valores medidos: precipitação acumulada 1.2mm, duração da precipitação acumulada 20 segundos, intensidade de precipitação 1.2mm/h, intensidade máxima de precipitação 72.0mm/h.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image55.png" /></div>

## Código de erro

### Código de erro Modbus

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image56.png" /></div>

### Código de erro ASCII

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image57.png" /></div>

### Código de erro SDI-12

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image58.png" /></div>

## Recurso

[SenseCAP ONE/SenseCAP ONE V3 Compact Weather Station User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

## FAQ

**Como a velocidade e a direção média do vento são calculadas?**

A janela de tempo médio padrão é de 5s. Dentro desta janela, o dispositivo coletará dados de velocidade e direção do vento cinco vezes e retornará um valor médio.
