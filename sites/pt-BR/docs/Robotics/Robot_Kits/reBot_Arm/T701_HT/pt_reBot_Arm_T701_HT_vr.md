---
title: Teleoperação VR do reBot Arm T701 HT
sidebar_label: Teleoperação VR
description: Controle o reBot Arm T701 HT com controladores de VR via USB ou WiFi, verifique os dados dos controladores e use rastreamento de pose do efetuador final e controle da garra.
keywords:
  - reBot
  - T701 HT
  - VR
  - Quest
  - Pico
  - Dual-Arm Teleoperation
  - WebXR
slug: /rebot_t701_ht_vr
aliases: ["/rebot_t701_ht_quest"]
translation:
  skip: [zh-CN]
last_update:
  date: 11/19/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Teleoperação VR do reBot Arm T701 HT

<div className="rebot-page">

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="reBot Arm T701 HT bimanual robot" />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701-SDK"
  fallbackCount={0}
  ariaLabel="Star T701-HT SDK on GitHub"
/>

Use os controladores de VR esquerdo e direito para controlar os braços T701 HT correspondentes, incluindo rastreamento de pose do efetuador final e controle da garra. O navegador do headset lê os dados dos controladores via WebXR e os envia para o computador por WebSocket. O servidor de stream então os encaminha para o controlador de dois braços via UDP.

:::note[Suporte de dispositivo]

Esta demonstração foi testada no Quest. Usuários de Pico podem se conectar pelo mesmo pipeline WebXR → WebSocket → UDP usando um navegador de headset compatível com WebXR. As instruções abaixo usam o Quest como exemplo e cobrem conexões tanto por USB quanto por WiFi.

:::

<section className="section-card">

## Ambiente e conexões

Obtenha o SDK e instale suas dependências usando as [instruções de instalação do T701 HT Quick Start](https://wiki.seeedstudio.com/pt-br/rebot_t701_ht_getting_started/#instalar-o-sdk). Conclua o mapeamento serial, verifique o retorno das juntas e da garra e defina as posições zero. O braço esquerdo usa CAN1 e o direito CAN2.

Prepare um headset de VR e ambos os controladores. O modo USB também precisa de um cabo de dados USB; o modo WiFi precisa do headset e do computador na mesma LAN.

Execute os comandos abaixo a partir da raiz do SDK. Em cada novo terminal, volte para esse diretório e ative o ambiente `t701-ht`.

```bash
conda activate t701-ht
```

</section>

<section className="section-card">

## Iniciar streaming

No primeiro terminal, inicie a interface de stream:

```bash
python Quest_controller_stream/quest_stream_tui.py
```

Use Cima/Baixo para selecionar um campo, Esquerda/Direita para ajustá-lo, `E` para editar endereços ou portas e Enter para ativar um botão. Os padrões iniciais são WiFi / 8080, e a interface salva suas configurações. Ao alternar modos, selecione primeiro **Stop Server**, depois defina o modo e as portas mostrados na aba correspondente.

<Tabs defaultValue="usb" groupId="t701-vr-connection">
<TabItem value="usb" label="USB (Com fio)">

#### Conexão e configurações

Ative o modo desenvolvedor no headset, conecte-o ao computador que executa o SDK com um cabo de dados USB e autorize a depuração USB no headset. Verifique a conexão em outro terminal:

```bash
adb devices
```

O dispositivo deve mostrar o status `device`. Se mostrar `unauthorized`, confirme a autorização no headset. No Ubuntu, instale um `adb` ausente com `sudo apt install adb`.

Defina a interface de stream da seguinte forma:

| Configuração | Valor |
| --- | --- |
| Mode | USB |
| Force HTTPS | False |
| HTTP Host / Port | 0.0.0.0 / 8080 |
| WS Host / Port | 0.0.0.0 / 8765 |
| UDP IP / Port | 127.0.0.1 / 5005 |
| Verify Port | 5005 |

#### Iniciar e abrir a página

Selecione **Start Server**. O programa usa `adb reverse` para encaminhar as portas 8080 e 8765 do headset para o computador. Abra esta URL no navegador do headset:

```text
http://localhost:8080/index.html?ws=ws://localhost:8765
```

Defina a entrada de WebSocket da página como `ws://localhost:8765`. O modo USB usa **HTTP / WS** e não precisa de certificado HTTPS. Aqui, `localhost` alcança o computador por meio do encaminhamento USB.

#### Inicialização via linha de comando (opcional)

Sem a interface de stream, execute este comando a partir da raiz do SDK. Não o execute junto com um servidor iniciado pela interface:

```bash
python Quest_controller_stream/start_stream_server.py --http-host 0.0.0.0 --http-port 8080 --ws-host 0.0.0.0 --ws-port 8765 --udp-ip 127.0.0.1 --udp-port 5005 --adb auto
```

</TabItem>
<TabItem value="wifi" label="WiFi (Sem fio)">

#### Conexão e configurações

Conecte o headset e o computador que executa o SDK à mesma LAN. Este modo não requer cabo USB, ADB ou autorização de depuração USB.

No computador, encontre seu IP na LAN e verifique o OpenSSL:

```bash
hostname -I
openssl version
```

Use o IP real do computador nessa LAN, não um endereço de adaptador Docker ou VPN. No Ubuntu, instale um OpenSSL ausente com `sudo apt install openssl`.

Defina a interface de stream da seguinte forma:

| Configuração | Valor |
| --- | --- |
| Mode | WiFi |
| Force HTTPS | True |
| HTTP Host / Port | 0.0.0.0 / 8080 |
| WS Host / Port | 0.0.0.0 / 8765 |
| UDP IP / Port | 127.0.0.1 / 5005 |
| Verify Port | 5005 |
| Cert File | .certs/quest-controller.crt |
| Key File | .certs/quest-controller.key |

#### Iniciar e abrir a página

Selecione **Start Server**. O modo WiFi usa **HTTPS / WSS**. Se o certificado e a chave privada estiverem ausentes, o programa gera um certificado autoassinado com OpenSSL.

Abra no navegador do headset a URL de WiFi exibida na interface, verificando se ela usa o IP real da LAN do computador. Por exemplo, se o IP do computador for `192.168.1.100`:

```text
https://192.168.1.100:8080/index.html?ws=wss://192.168.1.100:8765
```

Substitua o IP de exemplo pelo IP real do computador. No primeiro acesso, trate o aviso de certificado autoassinado no navegador e recarregue a página. Defina a entrada de WebSocket como `wss://ACTUAL_COMPUTER_IP:8765`, não `localhost` ou `ws://`.

Os valores `0.0.0.0` de HTTP Host e WS Host são endereços de escuta, não endereços para abrir no headset. Quando o servidor de stream e o controlador de dois braços são executados no mesmo computador, o destino UDP permanece `127.0.0.1:5005`.

#### Inicialização via linha de comando (opcional)

Sem a interface de stream, execute este comando a partir da raiz do SDK. Não o execute junto com um servidor iniciado pela interface. `--adb never` desativa o encaminhamento ADB e ativa automaticamente HTTPS / WSS.

```bash
python Quest_controller_stream/start_stream_server.py --http-host 0.0.0.0 --http-port 8080 --ws-host 0.0.0.0 --ws-port 8765 --udp-ip 127.0.0.1 --udp-port 5005 --adb never
```

</TabItem>
</Tabs>

Após conectar com o modo selecionado, selecione **Start XR Stream** na página do headset. Verifique os seguintes valores de status:

| Status da página | Valor esperado |
| --- | --- |
| WebSocket | Connected |
| XR | Running |
| Ambos os controladores | Tracking |

A página restaura as configurações de WebSocket salvas. Após alternar modos, verifique se o protocolo, IP e porta da entrada correspondem à aba selecionada e então salve as configurações.

</section>

<section className="section-card">

## Verificar dados dos controladores

Selecione **Start Verify** na interface de stream do computador. Mova ambos os controladores e verifique se a contagem de pacotes aumenta e se os dados de pose e botões mudam com sua entrada.

Em seguida, selecione **Stop Verify**. Mantenha o servidor, o modo USB ou WiFi selecionado e o stream XR do headset em execução. Verify e o controlador de dois braços usam a mesma porta UDP 5005 e não podem receber simultaneamente.

| Tecla no terminal | Função |
| --- | --- |
| `1` / `2` / `3` / `4` | Abrir Controles, Mão Esquerda, Mão Direita e Logs. |
| `Tab` | Alternar páginas. |
| `Q` | Parar o servidor de stream e sair da interface. |

</section>

<section className="section-card">

## Iniciar controle de dois braços

:::warning[Limpe a área de movimento antes de iniciar]

Pare Verify, `udp_receiver_test.py` e qualquer outro receptor UDP 5005. Após receber dados dos controladores, o programa move o braço esquerdo e depois o direito para suas poses iniciais de VR. Fixe o robô, remova cargas e limpe a área de movimento e o caminho de retorno. Permaneça junto ao robô e mantenha-se afastado de pontos de beliscão das juntas e da garra.

:::

Em um segundo terminal, a partir da raiz do SDK:

```bash
conda activate t701-ht
cd scripts
python t701_ht_vr_dual_cartesian_qp_control.py
```

Esta entrada controla ambos os braços diretamente, sem um menu de seleção de braço. Os braços esquerdo e direito usam, respectivamente, `T701-HT_robot_param/T701-HT_left.yaml` e `T701-HT_right.yaml`.

Espere os movimentos iniciais terminarem e o programa exibir sua mensagem de início de controle e então use os seguintes controles:

| Entrada | Comportamento do robô |
| --- | --- |
| Manter pressionado **Squeeze** no controlador esquerdo ou direito | O braço correspondente segue a pose do controlador. |
| Soltar **Squeeze** | Manter a posição atual. |
| Usar **Trigger** enquanto mantém Squeeze pressionado | Abrir ou fechar a garra correspondente. |
| Pressionar o botão principal, rotulado como A no programa | Redefinir suavemente esse braço para seus ângulos de junta iniciais desta execução. |
| Pressionar `Ctrl+C` no terminal de controle | Retornar os braços para zero em modo MIT e parar os motores. Aguarde o término do desligamento. |

Após o controlador encerrar, pressione `Q` na interface de stream para parar o servidor e sair.

</section>

<section className="section-card">

## Solução de problemas

| Sintoma | Verificação e ação |
| --- | --- |
| Página USB não abre | Confirme a autorização de depuração USB, o status `device` em `adb devices` e um servidor de stream em execução. Use `http://localhost:8080`. |
| Página WiFi não abre | Confirme que o headset e o computador estão na mesma LAN. Use `https://ACTUAL_COMPUTER_IP:8080`, trate o aviso de certificado e verifique se o computador permite conexões nas portas 8080 e 8765. |
| WebSocket alterna entre Connecting e Reconnecting | USB usa `ws://localhost:8765` com Force HTTPS desativado; WiFi usa `wss://ACTUAL_COMPUTER_IP:8765`. Verifique se a página restaurou configurações do outro modo. |
| Não é possível fazer bind na porta UDP 5005 | Pare Verify, `udp_receiver_test.py` ou outro receptor que esteja usando a porta. |
| Nenhum pacote de controlador em até 10 segundos após a inicialização | Selecione Start XR Stream no headset, verifique se o WebSocket está conectado e defina o destino UDP como `127.0.0.1:5005`. O programa encerra antes de inicializar os braços. |
| O modo de conexão muda após redefinir as configurações | Reset Defaults ou excluir a configuração salva restaura WiFi / 8080. Defina novamente o modo e as portas na aba selecionada; alternar modos não redefine as portas automaticamente. |

</section>

<section className="section-card">

## Interface desktop (opcional)

A interface desktop é `Quest_controller_stream/quest_stream_ui.py`. Ela requer a dependência opcional `PyQt5` e usa uma configuração `.quest_stream_ui.json` separada. Os mesmos requisitos de protocolo e endereço para USB e WiFi se aplicam; configure-os separadamente na interface desktop.

</section>

</div>
