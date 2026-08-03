---
description: Introdução ao uso do reCamera Gimbal
title: reCamera Gimbal
keywords:
  - AI
  - reCamera
  - Gimbal
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.webp
slug: /recamera_gimbal_getting_started
sku: 108990119,108990120,E20245041001
sidebar_position: 1
last_update:
  date: 04/09/2025
  author: Dawn Yao
createdAt: '2025-02-27'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/pt-br/reCamera/reCamera_Basic/getting_start/recamera_gimbal_getting_started
---

# Introdução ao uso do reCamera Gimbal

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" /></div>

## Introdução

Bem-vindo ao reCamera Gimbal! A série reCamera gimbal 2002 é o primeiro sistema de controle de câmera open-source, composto por uma pequena câmera de IA - reCamera 2002w 8GB/64GB, e uma base de gimbal compatível de 2 eixos com 2 motores brushless. Ele é alimentado por um SoC RISC-V, fornecendo 1 TOPS de desempenho de IA com codificação de vídeo em 5MP @ 30 FPS. Oferece um pacote de auto-montagem no estilo Lego e integra a plataforma Sensecraft AI e a plataforma Node-RED para programação gráfica fluida e construção de pipelines, permitindo treinamento próprio rápido, conversão de modelos e implantação de modelos de IA como Yolo v5/v8/11.

Este guia ajudará você a configurar rapidamente seu dispositivo e começar a usá-lo para desbloquear poderosos recursos de Visão com IA. Seja você iniciante ou usuário experiente, este passo a passo o guiará pela instalação, configuração e primeiro uso.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱</font></span></strong>
    </a>
</div>

## Pré-requisitos

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_prerequisites.png" /></div>

- reCamera Gimbal
- Manual do usuário (dentro da caixa)
- Fonte de alimentação DC 12V para conector DC 5521 ([Purchase link](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html))
- Cabo USB Tipo C ([Purchase lini](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html))
- Conexão Wi-Fi
- Chave de fenda elétrica (opcional para uma melhor experiência de montagem)

## Desembalagem

Comece desembalando o seu reCamera Gimbal. Dentro da caixa, você deverá encontrar:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

Certifique-se de que todas as partes estão incluídas.

### Montagem de hardware

Monte o reCamea Gimbal de acordo com as instruções de montagem na caixa ou no [Manual do usuário](#jump1).

<div style={{textAlign:'center'}}><iframe width={560} height={315} src="https://www.youtube.com/embed/VAkhDHct0p4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

:::note
Certifique-se de que todos os parafusos estejam bem apertados, caso contrário isso afetará o funcionamento do motor.
:::

### Configurar o dispositivo e fazer login

**Passo 1:** Após montar o Gimbal, conecte o cabo USB do reCamera Gimbal ao seu PC. Acesse `192.168.42.1` no navegador e altere a senha padrão. Se você estiver usando o modo de configuração WiFi AP, acesse em vez disso `192.168.16.1`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
Lembre-se da sua senha, caso contrário todos os logs serão apagados para redefinir o dispositivo. Se você esquecer a senha, por favor faça o [factory reset](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#factory-reset) do seu dispositivo.
:::

:::note
O nome de usuário e a senha padrão são ambos `recamera`. Se você realizar um factory reset ou estiver usando um dispositivo novo (não configurado), estes são o nome de usuário e a senha a serem usados.
:::

**Passo 2:** Aqui você será levado ao Dashboard de Pré-visualização do Gimbal. Antes de experimentar alguns movimentos de motor com os controles no Dashboard, vá para `Network` para configurar o Wi-Fi.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_network.png" /></div>

**Passo 3:** Conecte-se ao seu Wi-Fi. Após conectar-se com sucesso ao Wi-Fi, clique no `lock icon` para ver o endereço IP do dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/view_wifi_IP.png" /></div>

**Passo 4:** Abra uma nova aba do navegador e use esse endereço IP para acessar o dispositivo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_5.png" /></div>

**Passo 6:** Conecte primeiro a alimentação à base e, em seguida, remova o cabo USB tipo C para obter os melhores movimentos do motor.

:::note

Deve ser conectada uma fonte de alimentação com tensão de 12V.

:::

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/switch_power.png" /></div>

**Passo 7:** Volte ao navegador com o seu `ip address` para acessar o dashboard e, em seguida, clique no `Calibrate button` no lado direito para que o seu Gimbal se calibre automaticamente.

:::note

Durante a calibração, evite interferir na operação do dispositivo, pois isso pode resultar em falha na calibração. A calibração é realizada automaticamente sempre que o gimbal é ligado.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_calibrate.png" /></div>

### Comportamento de calibração

O eixo de guinada (yaw) tem uma faixa de movimento de 0–360°, embora a faixa mecânica real seja limitada a aproximadamente 345° devido a restrições estruturais. No entanto, a cobertura de visão permanece em 360°. O eixo de inclinação (pitch) suporta uma faixa de movimento de 0–180°.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/movement_range.png" /></div>

Ao ligar, o gimbal iniciará sua sequência automática de calibração:

- **Eixo de guinada (Yaw)**: O gimbal primeiro girará no sentido horário até seu limite mecânico (posicionado acima do cabo de alimentação) e, em seguida, girará no sentido anti-horário até o limite oposto. Após atingir ambas as extremidades, retornará à posição central.

- **Eixo de inclinação (Pitch)**: O gimbal irá inclinar-se para cima até a posição de 0°, depois para baixo até atingir o limite de 180° e, por fim, retornará ao centro.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/calibrate.gif" /></div>

Essa sequência conclui o processo de auto-calibração do gimbal.

Você também pode calibrar inserindo este comando no terminal

```bash
gimbal cali
```

### Solução de problemas de calibração

Se o gimbal não executar corretamente a sequência de calibração, pode haver várias causas potenciais:

- **Verifique as limitações mecânicas**: Verifique manualmente o gimbal para garantir que a faixa de movimento não esteja obstruída ou limitada de forma incorreta.

- **Verifique a resistência das peças impressas em 3D**: Sinta se há alguma resistência quando o motor se move. Se a resistência for excessiva, talvez seja necessário ajustar as configurações de PID do motor para aumentar a força do motor. Você pode ver [como ajustar o PID aqui](https://wiki.seeedstudio.com/pt-br/recamera_pid_adjustment). Como alternativa, reduza o atrito lixando algumas peças ou afrouxando levemente os parafusos para melhorar o movimento.

## Acesso Web básico

URLs da Web:

- **Página de pré-visualização**: `ip_address/#/dashboard`

- **Página inicial**: `ip_address/#/init`
- **Área de trabalho**: `ip_address/#/workspace`
- **Configuração de rede**: `ip_address/#/network`
- **Segurança**: `ip_address/#/security`
- **Terminal**: `ip_address/#/terminal`
- **Sistema**: `ip_address/#/system`
- **Energia**: `ip_address/#/power`
- **Node-RED original**: `ip_address:1880`

### Início rápido com o Dashboard do Gimbal

#### Controle dos motores

Após concluir a configuração e a calibração, você pode controlar o gimbal usando as opções disponíveis no dashboard. Acesse `ip_address/#/dashboard` ou `ip_address` para abrir o dashboard de pré-visualização do Gimbal feito com nós do Node-RED:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

- **Joystick**: Controla a direção do campo de visão da câmera. Por exemplo, arrastar o joystick para a direita faz com que a imagem se mova para a direita de forma correspondente.
- **Sliders**:
  - Sliders de Yaw e Pitch: Movem o gimbal para um ângulo absoluto especificado.

    Faixa de yaw: 0–360°

    Faixa de pitch: 0–180°

:::note
Devido a restrições estruturais, a faixa de yaw é limitada a 0–345° e a faixa de pitch é limitada a 0–180°. Quaisquer valores inseridos fora dessas faixas serão ajustados para o limite mais próximo. Por exemplo, se você inserir 360° para yaw, o sistema executará automaticamente o movimento como 345°.
:::

- Slider de velocidade: Ajusta a velocidade de ambos os motores simultaneamente.

    Faixa de velocidade: 0–720°/s (graus por segundo)
- **Auto-Tracking**: Selecione um objeto-alvo no menu suspenso (por exemplo, pessoa, carro, gato, cachorro, garrafa) e clique em `Start Tracking` para iniciar o rastreamento automático de objetos. Clique em `Stop Tracking` para encerrar o rastreamento.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_tarck.png" /></div>

- **Botão Sleep**: Move o gimbal para uma posição absoluta de (Yaw: 180°, Pitch: 180°).

:::note

O botão Sleep não ativa um modo de baixo consumo de energia. Ele apenas reposiciona a câmera para ficar voltada para baixo.

:::

- **Botão Standby**: Move o gimbal para uma posição absoluta de (Yaw: 180°, Pitch: 90°).
- **Botão Calibrate**: Inicia o processo de calibração do gimbal.
- **Botão Emergency Stop**: Desativa imediatamente ambos os motores durante o movimento.

    ⚠️ Nota: Isso não interromperá o processo de calibração.

#### Parâmetros do modelo de IA

**Confidence**: A confiança no modelo YOLO representa a probabilidade de que uma caixa delimitadora prevista contenha um objeto e o quão precisa é a previsão. É um valor entre 0 e 100.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**Intersection over Union (IoU)**: IoU é uma métrica usada para avaliar a sobreposição entre a caixa delimitadora prevista e a caixa delimitadora de referência (ground truth). Ela é calculada como a razão entre a área de interseção das duas caixas e a área de união das duas caixas. O valor de IoU normalmente está na faixa de 0 a 1. Nós o padronizamos para uma escala de 0 a 100; um valor de IoU igual a 0 representa nenhuma sobreposição entre a caixa prevista e a caixa de referência. Um valor de 100 indica uma correspondência perfeita, significando que as duas caixas se sobrepõem completamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### Início rápido com o fluxo do painel do Gimbal

Se você quiser saber como o painel é feito com os nós do Node-RED, clique no canto inferior direito ou visite `ip_address/#/workspace` para acessar o workspace do Node-RED do Gimbal

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_to_workspace.png" /></div>

Em seguida, você verá o fluxo padrão do painel do gimbal; você pode clicar duas vezes em cada nó para ver os detalhes do nó. O fluxo do painel ficará assim:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.png" /></div>

**Configurações do modelo**:

- Os nós de controle deslizante permitem ajustar o IoU (Intersection over Union) e o limite de confiança para o modelo de IA YOLO.

**Exibição da interface do painel**:

- O nó de modelo de interface exibe um texto mostrando as configurações atuais do modelo.
- Ele também renderiza a imagem em base64 da câmera, incluindo caixas de detecção para objetos identificados pelo YOLO.

**Rastreamento automático com alvo**:

- Nós de função obtêm informações sobre o objeto alvo (por exemplo, largura, altura, coordenadas) e processam esses dados usando um algoritmo de rastreamento.

- O nó de função do algoritmo calcula o desvio do centro da caixa do alvo em relação ao centro da visão e envia esse desvio para o nó de definição de ângulo do motor para mover o gimbal para a posição desejada.

**Controle manual do motor**:

- Use nós de controle deslizante para definir manualmente os ângulos do motor, movendo o gimbal por um grau específico.

- Alternativamente, o nó de interface de joystick permite o controle manual ajustando a posição do gimbal em pequenos incrementos (desvio a desvio).

**Botões de atalho**:

- Nós de botão de interface enviam posições específicas para o nó de definição de ângulo do motor, acionando comportamentos como Suspender ou Espera.

- Esses botões também podem acionar nós `exec` que executam scripts bash como `gimbal cali` para calibração ou `gimbal stop 1; gimbal stop 2` para uma parada de emergência.

**Subfluxo básico de iframe da Web**:

- Um subfluxo de iframe exibe páginas da web básicas, como configurações de rede, informações do sistema e informações do dispositivo.

- Observe que isso pode consumir recursos de CPU, pois renderiza a página com vários nós. Ele pode ser excluído se não for necessário.

## Aplicar gerenciamento em nuvem e backup

Se você quiser criar um novo aplicativo ou salvar aplicativos no serviço em nuvem SenseCraft, você pode fazer login na conta sensecraft no canto inferior esquerdo e, em seguida, clicar no ícone `+` para adicionar um novo aplicativo. Depois disso, você pode começar a trabalhar no seu fluxo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

Você pode visualizar e gerenciar seus aplicativos em [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera).

:::note

Você precisa registrar uma conta antes de poder fazer login pela plataforma para sincronizar seus aplicativos.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## Lista de portas

A seguir estão listadas as portas usadas pelo reCamera Gimbal:

- **Porta 22**: Utilizada para login remoto via SSH e está aberta.
- **Porta 53**: Associada à resolução de nomes de domínio DNS e é essencial para o redirecionamento da web. Ela é aberta por padrão.
- **Porta 80**: Serve como interface do painel web para exibição HTTP da aplicação Node-RED.
- **Porta 554**: Empregada para streaming de vídeo RTSP.
- **Porta 9090**: Destinada ao acesso ao terminal web, que requer uma senha para login.
- **Porta 1880**: Dedicada às operações do Node-RED.

## Atualização de SO via OTA

Consulte as [Instruções de atualização OTA](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#atualização-ota-de-013-para-a-versão-mais-recente).

## Restauração de fábrica

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_usr_button.png" /></div>

Se você quiser redefinir o dispositivo, por exemplo, ao esquecer o código de acesso do dispositivo, você pode manter pressionado o botão **User** e, em seguida, conectar o dispositivo à alimentação. Quando a `luz vermelha` do dispositivo estiver **constantemente acesa** em vez de piscando, solte o botão User.

## Recursos

- <span id="jump1"><a href="https://files.seeedstudio.com/gimbal/GIMBAL_Manual0311.pdf">Manual do Usuário do reCamera Gimbal</a></span>

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
