---
description: Apresentando nós e fluxo do Node-RED criados para o reCamera Gimbal. Se você está desenvolvendo o Gimbal com Node-RED, esta documentação irá guiá‑lo para entender como usar nós para controlar o seu Gimbal.
title: Nós e Fluxo do Node-RED para Gimbal
keywords:
  - AI
  - reCamera
  - Gimbal
  - Node-RED
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.webp
slug: /recamera_gimbal_node_red
sidebar_position: 3
last_update:
  date: 04/09/2025
  author: Dawn Yao
createdAt: '2025-04-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recamera_gimbal_node_red/
---

# Introdução ao Node-RED para Gimbal

Este wiki fornece orientações passo a passo sobre como usar nós do Node-RED para operar e controlar os motores do gimbal. O fluxo padrão no Dispositivo é um exemplo mais abrangente de como você pode usar nós de UI com nós do gimbal, mas vamos detalhar os nós um por um para explicar como você pode usá‑los.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.png" /></div>

Se você é novo em Node-RED ou se tem interesse em aprender como integrar Vision AI com o controle do gimbal, consulte [esta página](https://wiki.seeedstudio.com/pt-br/recamera_develop_with_node-red/).

Também fique atento ao alcance dos eixos do Gimbal, conforme mostrado na imagem abaixo:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/movement_range.png" /></div>

## Nós

### Definir ângulo do motor

Este nó permite definir o gimbal para um ângulo específico passando valores de destino para os motores. Quando um ângulo é fornecido, o gimbal se moverá de acordo para realizar o posicionamento desejado.

Exemplo: Usar um nó inject para mover o motor de yaw para 50°

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_motor_angle.png" /></div>

#### Configuração

- Name: Nome personalizado para o nó.
- Input: analisar livremente o valor do ângulo por msg, variável de flow ou global.
- Unit: Formato do valor de entrada:
  - Input em decimal: Os valores de entrada estão em graus decimais (por exemplo, 180.23°)
  - Input em inteiro: Os valores de entrada estão em formato inteiro representando centésimos de grau (por exemplo, 18023 = 180.23°)
- Motor Selection: Escolha qual motor controlar e o modo de controle:
  - Eixo de Yaw (Esquerda e Direita): Movimento horizontal

  - Eixo de Pitch (Cima e Baixo): Movimento vertical

  - Posição Absoluta: Define o motor para um ângulo específico
  - Deslocamento Relativo: Move o motor por uma quantidade relativa
- Definir eixo duplo ao mesmo tempo: Controla ambos os motores com um único comando
  - Posição Absoluta: Define ambos os motores para ângulos específicos
  - Deslocamento Relativo: Move ambos os motores por deslocamentos relativos

#### Entrada

Para controle de eixo único, a entrada é um número que representa o valor do ângulo.

Para controle de dois eixos, a entrada deve ser um objeto JSON com esta estrutura:

```json
{
    "yaw_angle": value,           // Horizontal angle in degrees
    "yaw_speed": speed_value,     // Optional: 0-720
    "pitch_angle": value,         // Vertical angle in degrees
    "pitch_speed": speed_value    // Optional: 0-720
}
```

#### Saída

Este nó não produz mensagens de saída. Ele apenas define o ângulo do motor e atualiza sua exibição de status para refletir o resultado da operação.

#### Exibição de Status

O nó exibe a operação atual em seu status:

- **Processing**: Ponto azul com o texto `Processing` quando o comando está sendo enviado
- **Success**: Ponto verde com detalhes sobre a operação quando concluída com êxito:
  - Exemplo para eixo simples: `Set Yaw: 90°` ou `Offset Pitch: 10°`
  - Exemplo para dois eixos: `Set Yaw: 90°, Pitch: 45°` ou `Offset Yaw: 5°, Pitch: 10°`
- **Error**: Anel vermelho com mensagem de erro se a configuração falhar
- **Busy**: Anel amarelo com o texto `Busy` se o nó já estiver processando um comando

### Definir velocidade do motor

O nó define o valor de velocidade para o motor de yaw (horizontal) ou de pitch (vertical). Esta configuração de velocidade é armazenada no contexto global e usada por outros nós de controle de motor ao enviar comandos de movimento usando SocketCAN.

Exemplo: usar um nó slider para ter um controle deslizante de UI para ajustar a velocidade do motor de Yaw.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_speed_slider.png" /></div>

O dashboard é feito pelo seguinte fluxo:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_speed_nodes.png" /></div>

Neste exemplo, queremos garantir que definimos o intervalo para 1-720, que é o intervalo de velocidade do motor. Também é necessário garantir qual msg você está analisando para o próximo nó. Aqui escolhemos `msg.topic`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/slider_config.png" /></div>

Como no nó slider escolhemos `msg.topic`, precisamos garantir que estamos recebendo de `msg.topic` para responder com o slider.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/speed_config.png" /></div>

#### Configuração

Você pode especificar de onde obter o valor de entrada:

- msg: Uma propriedade da mensagem de entrada (por exemplo, payload)
- flow: Uma variável de contexto do fluxo
- global: Uma variável de contexto global

Seleção do Motor:

- Eixo de Yaw (Esquerda e Direita): Define a velocidade para o motor de movimento horizontal
- Eixo de Pitch (Cima e Baixo): Define a velocidade para o motor de movimento vertical

#### Entrada

A entrada deve ser um valor numérico que represente a velocidade desejada do motor. O valor padrão da velocidade é `90` se nenhuma velocidade personalizada tiver sido definida. O valor pode ser fornecido nos seguintes formatos:

- Número: 90
- String contendo um número: "45"

**Unidades de Velocidade**: O valor de velocidade é medido em `dps/LSB` (graus por segundo / Least Significant Bit), que é a resolução do controle de velocidade do motor. O intervalo válido é de 0 a 65535, com valores típicos entre 50 e 720 para o gimbal.

**Valores de referência de velocidade**:

- Movimento lento: 1-120
- Movimento médio: 120-360
- Movimento rápido: 360-720

#### Saída

Este nó não produz mensagens de saída. Ele apenas atualiza as seguintes variáveis de contexto global:

- Motor de Yaw: can$$currentYawSpeed
- Motor de Pitch: can$$currentPitchSpeed

O valor de velocidade é armazenado em formato hexadecimal (por exemplo, `5A.00` para velocidade 90) no contexto global.

Os nós de controle de motor recuperam esses valores ao enviar comandos pelo barramento CAN.

#### Exibição de Status

O nó exibe a configuração de velocidade atual em seu status:

- Ponto verde com `Yaw Speed: X` ou `Pitch Speed: X` quando definido com sucesso
- Anel vermelho com mensagem de erro se a configuração falhar. O nó relatará erros nos seguintes casos:

  - Valor de entrada inválido (não é um número)
  - Valor de entrada vazio

### Obter ângulo do motor

O nó obtém a posição atual do motor de yaw (horizontal) ou de pitch (vertical) e fornece o ângulo. Isso é útil para monitorar a orientação atual da câmera ou para implementar lógica baseada em posição nos seus fluxos.

Exemplo: Usando um botão para obter a posição atual do ângulo do motor de yaw

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_yaw_angle.gif" /></div>

O dashboard é feito pelo seguinte fluxo:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_yaw_angle.gif" /></div>

O `button UI node` irá acionar o `get motor angle node`, depois analisar o resultado para o `text UI node`.
Você também pode importar o JSON abaixo em um fluxo vazio para obter este exemplo:

```json
[{"id":"24bca102bda2cc7b","type":"ui-button","z":"4c965edca3cbeb30","group":"e339fda5d481fc57","name":"","label":"Get Angle","order":0,"width":0,"height":0,"emulateClick":false,"tooltip":"","color":"","bgcolor":"","className":"","icon":"","iconPosition":"left","payload":"","payloadType":"str","topic":"topic","topicType":"msg","buttonColor":"","textColor":"","iconColor":"","enableClick":true,"enablePointerdown":false,"pointerdownPayload":"","pointerdownPayloadType":"str","enablePointerup":false,"pointerupPayload":"","pointerupPayloadType":"str","x":180,"y":200,"wires":[["254d3292e774ea35"]]},{"id":"e339fda5d481fc57","type":"ui-group","name":"get angle","page":"d682a21c64a5b02a","width":"6","height":"1","order":1,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"d682a21c64a5b02a","type":"ui-page","name":"Page 1","ui":"a6b81038728cf4fb","path":"/page1","icon":"home","layout":"grid","theme":"d7858d0ba6eee558","breakpoints":[{"name":"Default","px":0,"cols":3},{"name":"Tablet","px":576,"cols":6},{"name":"Small Desktop","px":768,"cols":9},{"name":"Desktop","px":1024,"cols":12}],"order":1,"className":"","visible":"true","disabled":"false"},{"id":"a6b81038728cf4fb","type":"ui-base","name":"My Dashboard","path":"/dashboard","appIcon":"","includeClientData":true,"acceptsClientConfig":["ui-notification","ui-control"],"showPathInSidebar":false,"headerContent":"page","navigationStyle":"default","titleBarStyle":"default","showReconnectNotification":true,"notificationDisplayTime":1,"showDisconnectNotification":true},{"id":"d7858d0ba6eee558","type":"ui-theme","name":"Default Theme","colors":{"surface":"#ffffff","primary":"#0094CE","bgPage":"#eeeeee","groupBg":"#ffffff","groupOutline":"#cccccc"},"sizes":{"density":"default","pagePadding":"12px","groupGap":"12px","groupBorderRadius":"4px","widgetGap":"12px"}}]
```

#### Configuração

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_motor_anlge_node.png" /></div>

Seleção do Motor:

- **Eixo de Yaw (Esquerda e Direita)**: Obtém o ângulo do motor de movimento horizontal
- **Eixo de Pitch (Cima e Baixo)**: Obtém o ângulo do motor de movimento vertical

Unidade:

- **Saída em decimal**: Fornece o valor do ângulo em graus decimais (por exemplo, 180.23°)
- **Saída em inteiro**: Fornece o valor do ângulo em formato inteiro representando centésimos de grau (por exemplo, 18023 = 180.23°)

#### Entrada

Qualquer mensagem de entrada acionará o nó para ler o ângulo atual do motor. O conteúdo da mensagem de entrada não é utilizado.

#### Saída

O nó fornece o valor do ângulo atual na propriedade `msg.payload`:

```json
// With "Output in decimal" selected
{
    "payload": 90.5
}

// With "Output in integer" selected
{
    "payload": 9050
}
```

Unidades:

- **Valor Inteiro Bruto**: Unidades do motor (centésimos de grau, 0-36000 para yaw, 0-18000 para pitch)
- **Valor decimal convertido**: Graus (0° a 360° para yaw, 0° a 180° para pitch)

#### Exibição de Status

O nó exibe o ângulo atual em seu status:

- Ponto azul com `Reading` enquanto consulta o motor
- Ponto verde com `Yaw: X°` ou `Pitch: X°` quando recuperado com sucesso
- Anel amarelo com `Busy` se outra consulta já estiver em andamento
- Anel vermelho com mensagem de erro se a leitura falhar
  - Erro de comunicação com o motor
  - Resposta inválida do motor
  - Solicitações concorrentes (mostrará o status `Busy`)

### Obter velocidade do motor

O nó lê o valor de velocidade atual armazenado no contexto global para o motor de guinada (horizontal) ou de inclinação (vertical). Esse valor de velocidade é usado por outros nós de controle de motor ao enviar comandos de movimento usando SocketCAN.

Exemplo: Use um `injection node` para obter a velocidade do motor e enviar para a janela de depuração

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_motor_speed_flow.png" /></div>

Clicando no nó inject, você verá a velocidade atual do motor de guinada na janela de depuração.

#### Configuração

- Eixo de Guinada (Esquerda e Direita): Recupera a configuração de velocidade para o motor de movimento horizontal
- Eixo de Inclinação (Cima e Baixo): Recupera a configuração de velocidade para o motor de movimento vertical
- O valor de velocidade é medido em `dps/LSB` (graus por segundo / Least Significant Bit), que é a resolução do controle de velocidade do motor. O intervalo válido é de 0 a 65535, com valores típicos entre 50 e 720 para gimbal.

#### Entrada

Qualquer mensagem de entrada fará com que o nó leia a velocidade atual do motor a partir do contexto global. O conteúdo da mensagem de entrada não é usado.

#### Saída

O nó gera o valor de velocidade atual na propriedade msg.payload:

```json
{
  "payload": 90
}
```

#### Exibição de Status

O nó exibe o valor de velocidade atual em seu status:

- Ponto verde com `Speed: X` quando recuperado com sucesso
- Anel vermelho com mensagem de erro se a recuperação falhar

### Ângulo para CAN

O nó recebe um valor numérico de ângulo como entrada e gera um objeto de mensagem CAN que pode ser enviado diretamente para uma interface de barramento CAN ou para um nó CAN Write.

Exemplo: Use `inject nodes` para fazer o eixo de guinada girar 30 graus no sentido horário ou anti-horário. O nó `angle to CAN` converterá o número em comando CAN, e usará `CAN Write` para executar o comando.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can_flow.png" /></div>

Você pode definir o payload da mensagem no nó inject como abaixo:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/counterclockwise.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/clockwise.png" /></div>

e configurar o nó angle to CAN para deslocamento relativo:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can.png" /></div>

Para `CAN write`, basta adicionar o cliente padrão e selecioná-lo.

#### Configuração

- Seleção de Motor: Escolha qual motor controlar e o modo de controle:
  - Eixo de Guinada (Esquerda e Direita): Movimento horizontal

  - Eixo de Inclinação (Cima e Baixo): Movimento vertical

  - Posição Absoluta: Define o motor para um ângulo específico
  - Deslocamento Relativo: Move o motor por uma quantidade relativa
- Unidade: Formato do valor de entrada:
  - Entrada em decimal: Os valores de entrada estão em graus decimais (por exemplo, 180,23°)
  - Entrada em inteiro: Os valores de entrada estão em formato inteiro representando centésimos de grau (por exemplo, 18023 = 180,23°)

#### Entrada

Especifique a fonte do valor do ângulo:

- msg.xxx: Usa o valor em msg
- flow.xxx: Usa um valor do contexto de fluxo
- global.xxx: Usa um valor do contexto global

A entrada deve ser um valor numérico representando o ângulo de destino (para posicionamento absoluto) ou deslocamento de ângulo (para movimento relativo de ângulo).

Exemplos:

    90.5 - Mover para 90,5 graus (ao usar graus decimais)
    9050 - Mover para 90,5 graus (ao usar unidades do motor)
    -10 - Mover 10 graus no sentido anti-horário (ao usar deslocamento relativo)
    10 - Mover 10 graus no sentido horário (ao usar deslocamento relativo)

#### Saída

O nó gera um objeto de mensagem CAN que pode ser enviado diretamente a um barramento CAN:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can_debug.png" /></div>

```json
{
  "payload": {
    "id": 0x141,  // Motor ID in hex format (0x141 for Yaw, 0x142 for Pitch)
    "data": [0xA4, 0x00, 0x5A, 0x00, 0x10, 0x27, 0x00, 0x00]  // Command data as byte array
  }
}
```

Nota: 321 é o formato hexadecimal do motor de guinada (ID 141), 322 é o formato hexadecimal do motor de inclinação (ID 142).

##### Formato de Comando

A mensagem CAN de saída segue este formato, para mais detalhes, visite o [latest motor manual](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf):

##### Comando de Posição Absoluta

- **Byte 0**: Tipo de comando (0xA4)
- **Byte 1**: Direção (0x00)
- **Byte 2-3**: Velocidade (2 bytes, little-endian)
- **Byte 4-7**: Ângulo (4 bytes, little-endian)

##### Comando de Deslocamento Relativo

- **Byte 0**: Tipo de comando (0xA8)
- **Byte 1**: Direção (0x00)
- **Byte 2-3**: Velocidade (2 bytes, little-endian)
- **Byte 4-7**: Deslocamento (4 bytes, little-endian)

##### Limites de Ângulo

- **Guinada**: -180° a +180°
- **Inclinação**: -90° a +90°

Valores fora desses intervalos serão automaticamente limitados ao intervalo permitido.

#### Exibição de Status

O nó exibe o ângulo atual em seu status:

- Ponto verde com `command ID` + `motor ID` + `move degrees`

### Can Write

O nó CAN Write permite enviar quadros de comando para dispositivos de barramento CAN e receber seus quadros de resposta. É particularmente útil para consultar o status do dispositivo, enviar comandos de controle e monitorar respostas de dispositivos no barramento CAN.

O exemplo de uso é mostrado acima com o nó `angle to CAN`.

#### Configuração

- Name: Nome opcional para o nó
- Client: Selecione a configuração de barramento CAN a ser usada (deve ser configurada em um nó CAN-config)

#### Entrada

A entrada suporta dois formatos:

##### Formato 1: Formato de String (Recomendado)

Uma string no formato: `ID#DATA` onde ID é o identificador CAN em hexadecimal e DATA são bytes hexadecimais separados por ponto.

Exemplo: `141#c1.0a.64.00.00.00.00.00`

##### Formato 2: Formato de Objeto

Um objeto com a seguinte estrutura:

```json
{
  "id": "141",
  "data": ["A4", "00", "2C", "01", "50", "46", "00", "00"]
}
```

Onde:

- **id**: O identificador CAN como string (em hexadecimal sem o prefixo 0x)
- **data**: Array de bytes de dados em hexadecimal (sem o prefixo 0x)

#### Saída

O nó gera um objeto com a seguinte estrutura: (Para detalhes de cada comando CAN, visite o [latest motor manual](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf))

```json
{
  "payload": "141#90.00.AB.02.3C.4C.91.49",
  "details": {
    "id": "141",
    "data": ["90", "00", "AB", "02", "3C", "4C", "91", "49"],
    "raw": "90.00.AB.02.3C.4C.91.49"
  },
  "timestamp": 1632048172456,
  "topic": "can-response"
}
```

Onde:

- **payload**: String no formato `ID#DATA`
- **details**: Objeto contendo informações detalhadas:
  - **ID**: O identificador CAN (igual ao da requisição)
  - **data**: Array de bytes de resposta em hexadecimal
  - **raw**: String dos bytes de resposta separados por ponto
- **timestamp**: Hora em que a resposta foi recebida
- **topic**: Definido como "can-response"

#### Exemplo

Requisição (String de entrada):

```
141#90.00.00.00.00.00.00.00
```

Resposta (Saída):

```json
{
  "payload": "141#90.00.AB.02.3C.4C.91.49",
  "details": {
    "id": "141",
    "data": ["90", "00", "AB", "02", "3C", "4C", "91", "49"],
    "raw": "90.00.AB.02.3C.4C.91.49"
  },
  "timestamp": 1632048172456,
  "topic": "can-response"
}
```

##### Tratamento de Resposta

O nó aguarda uma resposta do dispositivo CAN e filtra automaticamente os quadros de resposta para garantir que você receba a resposta relevante para o seu comando específico.

##### Timeout

Se nenhuma resposta for recebida dentro do período de timeout configurado, o nó irá gerar uma mensagem de erro.

##### Tratamento de Erros

O nó reportará erros nos seguintes casos:

- Formato de entrada inválido
- Erro de comunicação no barramento CAN
- Timeout de resposta

### CAN para Ângulo

O nó recebe um objeto de mensagem CAN como entrada e extrai o ID do motor, o tipo de comando e o valor de ângulo/deslocamento. Ele suporta comandos de posição absoluta (A4), comandos de deslocamento relativo (A8) e comandos de consulta de status (94).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_to_angle.png" /></div>

#### Configuração

O campo Input permite que você especifique a propriedade da mensagem, o contexto de fluxo ou a variável de contexto global que contém o objeto de mensagem CAN. Por padrão, ele usa `msg.payload`.

#### Entrada

A entrada deve ser um objeto de mensagem CAN com a seguinte estrutura:

```json
{
  "id": 0x141,  // Motor ID in hex format (0x141 for Yaw, 0x142 for Pitch)
  "data": [...]  // Byte array containing the command data (8 bytes)
}
```

Exemplo:

```json
{
  "id": 0x141,
  "data": [0xA4, 0x00, 0x5A, 0x00, 0x10, 0x27, 0x00, 0x00]
}
```

##### Validação de Comando

O nó inclui validação avançada para garantir que apenas comandos de dados significativos sejam processados:

- **Comandos 94**: NÃO devem ter todos os bytes restantes como zero (o que indicaria uma consulta, não uma resposta)
- **Comandos A4/A6**: O segundo byte deve ser 0x00 ou 0x01 para ser considerado válido (exclui respostas ACK como 0x2F)
- **Comandos A8**: O segundo byte deve ser 0x00 para ser considerado válido

Essas regras de validação evitam o processamento de respostas ACK e comandos de consulta que resultariam em cálculos de ângulo incorretos.

##### Unidade

- **Saída em decimal**: Gera valores de ângulo em graus decimais (por exemplo, 180,23°)
- **Saída em inteiro**: Gera valores de ângulo em formato inteiro representando centésimos de grau (por exemplo, 18023 = 180,23°)

#### Saída

O nó gera um objeto JSON com as informações decodificadas:

Para comandos de posição absoluta (A4) com "Saída em decimal" selecionado:

```json
{
    "payload": {
        "motorId": 0x141,
        "angle": 90.5
    }
}
```

Para comandos de posição absoluta (A4) com "Saída em inteiro" selecionado:

```json
{
    "payload": {
        "motorId": 0x141,
        "angle": 9050
    }
}
```

Para comandos de deslocamento relativo (A8) com "Saída em decimal" selecionado:

```json
{
    "payload": {
        "motorId": 0x142,
        "offset": 5.0
    }
}
```

Para comandos de consulta de status (94) com "Output in decimal" selecionado:

```json
{
    "payload": {
        "motorId": 0x141,
        "status": true,
        "angle": 90.5
    }
}
```

##### IDs dos motores

- Motor de yaw (horizontal): `0x141`
- Motor de pitch (vertical): `0x142`

##### Tipos de comando

- `0xA4`: comando de posição absoluta
- `0xA8`: comando de deslocamento relativo
- `0x94`: comando de consulta de status

## Explicação do fluxo padrão

O fluxo padrão é um exemplo de como você pode usar o palette de UI do dashboard, o palette de visão de IA e o palette da reCamera para formar um dashboard que pode pré-visualizar a câmera, rastrear objetos específicos e controlar motores. O dashboard se parece com isto:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

Nós iremos detalhar cada função individual para ajudar você a entender melhor este fluxo.

### Rastreamento automático

Esta seção do fluxo lida com a funcionalidade de rastreamento automático.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_to_angle.png" /></div>

- `Model Node`: executa o modelo YOLO e gera resultados de detecção como x, y, w, h, ID do objeto da caixa de detecção.

- `Function get_target_box Node`: o nó de função extrai apenas as informações das bounding boxes para o objeto desejado. O algoritmo seleciona a maior bounding box, tipicamente o alvo mais próximo ou mais relevante para rastrear.

- `Function control_motor Node`: calcula o deslocamento entre o centro desta bounding box e o centro do frame da câmera.

- `Set motor offset Node`: recebe o valor de deslocamento e então interpreta o comando CAN para os motores para manter o alvo centralizado no frame.

- `Function get_track_target Node`: faz a correspondência entre o ID do objeto no algoritmo Yolo e o nome real do objeto e atualiza a variável global `trackTarget`.

- `Dropdown List UI Node:` fornece a UI de lista suspensa no dashboard. Os usuários podem selecionar o TrackTarget em tempo real.

- `Function save_track_target Node`: atualiza o TrackTarget a partir da interação com a lista suspensa.

- `Function get_track_enable Node`: obtém o status da variável global `trackEnabled`.

- `Track Enable Button Group Node`: fornece o botão de alternância na UI do dashboard para os usuários habilitarem ou desabilitarem o rastreamento automático.

- `Function save_track_enabled Node`: atualiza se a variável global `trackEnabled` está habilitada ou não.

### Controle manual

O fluxo de controle manual permite que os usuários movam os motores do gimbal interagindo com sliders de UI.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/manual_control_motors.png" /></div>

- `Joystick Node`: usou o nó de UI de template para desenhar um joystick de interação, que irá analisar os dados de movimento para o próximo nó.

- `Set dual motor anle Node`: selecione a configuração *set dual axis at the same time*. Usa o JSON analisado a partir do Joystick para controlar o movimento do motor ao mesmo tempo. Observe que isto controla o movimento da imagem em vez da orientação real do gimbal físico.

- `Get motor angle Node`: recupera as posições iniciais dos motores de yaw e pitch quando o dispositivo é ligado e sincroniza com o nó de slider da UI.

-`Get motor speed Node`: recupera a velocidade inicial do motor de yaw quando o dispositivo é ligado e sincroniza com o nó de slider da UI.

- `Slider UI Node`: fornece um slider de UI no dashboard para o usuário interagir com os motores. Observe que usamos apenas um slider de velocidade aqui para controlar a velocidade de ambos os motores ao mesmo tempo. Você pode usar 2 nós para atribuir velocidades diferentes para dois motores.

- `Set motor angle Node`: recebe dados do nó de slider da UI e interpreta o comando CAN para executar o motor até uma determinada posição.

- `Set motor speed Node`: recebe dados do nó de slider da UI e atualiza a variável global para a velocidade do motor para estar pronta para ser enviada com um comando de posição.

### Botões de atalho

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/short_cut_buttons.png" /></div>

- `Button UI Node`: fornece botões de UI no dashboard para o usuário interagir com o gimbal. Ao clicar, o nó enviará o valor atribuído:
  - Sleep:

    ```json
    {"yaw_angle":180, "yaw_speed":360, "pitch_angle":175, "pitch_speed":360}
    ```

  - Standby:

    ```json
    {"yaw_angle":180, "yaw_speed":360,"pitch_angle":90, "pitch_speed":360}
    ```

  - Calibrate: aciona o nó exec
  - Emergency Stop: aciona o nó exec

Ao clicar nesses botões, o `trackEnabled` também será atualizado para desabilitado para parar o rastreamento automático (se ele estiver ligado).

- `Exec Node`: executa um comando de sistema e retorna sua saída. Você pode executar qualquer script bash para o gimbal com este nó:
  - Calibrate:

    ```bash
    gimbal cali
    ```

  - Emergency Stop:

    ```bash
    gimbal stop 1; gimbal stop 2
    ```

    Você pode ver todos os scripts disponíveis se digitar `gimbal` no terminal.

    <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script.png" /></div>

### Nós CAN

Este exemplo não é mostrado no dashboard, pois não possui nenhum nó de UI. É um exemplo no workspace para demonstrar como usar os seguintes nós.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/eg_using_can.png" /></div>

- `CAN read Node`: escuta continuamente mensagens CAN na interface configurada e as gera em um formato padronizado.

- `CAN to angle`: decodifica e converte os dados brutos lidos do CANbus para valores angulares.

- `Inject Node`: interpreta `30` graus para o nó `angle to CAN` para mover o motor.

- `angle to CAN`: recebe um valor de ângulo numérico (30 neste caso) como entrada e gera um objeto de mensagem CAN que pode ser enviado diretamente para uma interface de barramento CAN ou para um nó CAN Write.

- `CAN Write`: envia quadros de comando para dispositivos de barramento CAN e recebe seus quadros de resposta. Neste caso ele irá interpretar

    ```json
    "payload": {
        "id": 0x141,  // Motor ID in hex format (0x141 for Yaw, 0x142 for Pitch)
        "data": [0xA8, 0x00, 0x5A, 0x00, 0xb8, 0xb, 0x00, 0x00]  // Command data as byte array
    }

    ```

    para o comando CAN para girar 30 graus no sentido anti-horário.

### Controle PID

Por favor, veja o documento [aqui](https://wiki.seeedstudio.com/pt-br/recamera_pid_adjustment/#ajustar-pid-com-node-red) sobre nós PID.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
