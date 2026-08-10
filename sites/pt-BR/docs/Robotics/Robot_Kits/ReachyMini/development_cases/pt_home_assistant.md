---
description: Integração do Reachy Mini com o Home Assistant. Instale a integração oficial via HACS para descoberta automática na LAN, monitoramento de sensores e blueprints de automação.
title: Integração com Home Assistant
slug: /reachymini_development_cases_home_assistant
keywords:
  - reachy mini
  - home assistant
sku: 100090917，100025004
last_update:
  date: 7/29/2026
  author: ZhuYuan
translation:
  skip: [zh-CN]
createdAt: '2026-07-29'
updatedAt: '2026-07-29'
url: https://wiki.seeedstudio.com/cn/reachymini_development_cases_home_assistant/
---
# Integração do Reachy Mini com Home Assistant

Quer que o Reachy Mini controle seus dispositivos de casa inteligente — Mi Home (Xiaomi), Aqara, Midea, Haier e muito mais (como geladeiras e aparelhos de ar-condicionado)? Este projeto explica em detalhes como controlá-los com o Reachy Mini, sem necessidade de código. Você pode até mesmo entregar este documento diretamente para uma IA e deixá-la instalar e configurar tudo para você.

**Para usuários finais:** instale a integração oficial do Reachy Mini — [https://github.com/pollen-robotics/reachy_mini_homeassistant](https://github.com/pollen-robotics/reachy_mini_homeassistant) — via HACS (Custom Repository → Integration). Quando o seu robô estiver na mesma LAN, o Home Assistant o descobre automaticamente em cerca de 30 segundos e cria um cartão de dispositivo real com sensores e sensores binários agrupados abaixo. Seis blueprints de automação são fornecidos no mesmo repositório. **Sem YAML, sem ligação manual de entidades.**

Esta página documenta a superfície do lado do SDK que a integração (e qualquer outro cliente de monitoramento) consome:

- o **contrato de descoberta mDNS / zeroconf** — como o HA encontra o daemon na LAN.
- os **endpoints REST existentes** que a integração consulta para montar sua visão do estado do robô.

O SDK não fornece um endpoint dedicado de "agregador do Home Assistant". Os consumidores do HA se distribuem pelos mesmos caminhos que qualquer outro cliente usa (status do daemon, status do bloqueio de aplicativos, mixer de áudio, DoA). As semânticas no formato do HA — `awake`, `active_app_transport`, `webrtc_active` — vivem inteiramente no repositório da integração.

## Superfície de descoberta

O daemon do Reachy Mini se anuncia na LAN via mDNS como `_reachy-mini._tcp.local.`. O componente zeroconf do Home Assistant associa a integração do Reachy Mini a `model=ReachyMini` no registro TXT, portanto é o filtro de propriedade que torna a descoberta automática inequívoca.


| Chave TXT      | Tipo            | Significado                                                                                                                                   |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `unit_id`      | hex de 16 chars | Identificador estável por robô — SHA-256 do número de série do dispositivo de áudio, truncado. Usado pela integração como o unique-id da entrada de configuração do HA. |
| `model`        | string          | `"ReachyMini"`. Usado como filtro de manifesto.                                                                                               |
| `manufacturer` | string          | `"Pollen Robotics"`.                                                                                                                          |
| `version`      | string          | Versão do pacote do daemon.                                                                                                                   |
| `caps`         | separado por vírgulas | Flags de capacidade:`camera,mic,speaker,motion,apps`.                                                                                         |
| `api`          | string          | `"rest+ws"`.                                                                                                                                  |
| `robot_name`   | string          | Nome de exibição configurável pelo usuário.                                                                                                   |
| `ws_path`      | string          | `/ws/sdk` — o caminho WebSocket do SDK.                                                                                                       |
| `address`      | string          | Endereço IP (também resolvível a partir do registro A).                                                                                       |

Verifique a partir de qualquer host na LAN:

```bash
avahi-browse -rt _reachy-mini._tcp        # Linux
dns-sd -Z _reachy-mini._tcp local.        # macOS
dns-sd.exe -B _reachy-mini._tcp           # Windows
Resolve-DnsName reachy-mini.local         # PowerShell
```

Verificação independente de plataforma: no Home Assistant, **Settings → Devices & Services** mostra um cartão "Discovered: Reachy Mini" assim que a integração HACS é instalada e o robô está na mesma LAN. Essa é a verificação real para o usuário final — os comandos de CLI acima são para depuração quando a descoberta falha silenciosamente.

Implementação: `src/reachy_mini/utils/discovery.py`.

## Endpoints consumidos pela integração

O coordenador da integração consulta estes endpoints a cada 30 segundos em paralelo (`asyncio.gather`). Cada um falha de forma independente — uma interrupção parcial tira do ar apenas as entidades afetadas, não o dispositivo inteiro.


| Endpoint                                | Campos usados pela integração                                                                                                                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `GET /api/daemon/status`                | `version` → versão do firmware, `hardware_id` → unit_id (verificação cruzada com o TXT do mDNS), `backend_status.motor_control_mode` → awake + motor_mode bruto, `backend_status.ready` → porta de disponibilidade |
| `GET /api/daemon/robot-app-lock-status` | `state` + `holder_name` → active_app, active_app_transport, webrtc_active                                                                                                                        |
| `GET /api/state/doa`                    | `angle` → DoA em radianos, `speech_detected` → VAD de fala                                                                                                                                    |
| `GET /api/volume/current`               | `volume` → volume do alto-falante                                                                                                                                                               |
| `GET /api/volume/microphone/current`    | `volume` → volume do microfone                                                                                                                                                                  |

O coordenador da integração (`coordinator.py`) faz o ajuste no formato do HA por cima: `awake = motor_mode in {"enabled", "gravity_compensation"}`, derivação de `active_app_transport` a partir do estado de bloqueio, etc. O SDK nunca fornece campos específicos do HA; os consumidores os compõem.

## Atualmente não exposto

Estes seriam úteis no HA, mas nenhum caminho do SDK os expõe hoje:

- **CPU / memória / tempo de atividade (uptime)** — métricas do processo host. Elas funcionam tanto no Lite quanto no Wireless (são estatísticas do processo do daemon, não sensores de hardware do robô).
- **Inclinação / rolagem / temperatura da IMU** — apenas Wireless (o BMI088 está apenas na placa CM4). No Lite estes seriam nulos.

Ambos poderiam ser adicionados depois como pequenos caminhos adicionais (por exemplo, `/api/daemon/host`, `/api/state/imu`) sem quebrar nada. A integração os captaria como alvos adicionais de fan-out e os exporia como novas entidades.

## Alternativa sem integração

Se você não quiser instalar a integração personalizada, os mesmos endpoints podem ser usados diretamente a partir da integração `rest:` embutida do Home Assistant — um bloco `rest:` por endpoint. A troca é que você mantém o YAML por conta própria e escreve as derivações Jinja (`awake`, `webrtc_active`, …) inline.

```yaml
rest:
  - resource: http://reachy-mini.local:8000/api/daemon/status
    scan_interval: 30
    sensor:
      - name: "Reachy Mini Motor Mode"
        unique_id: reachy_mini_motor_mode
        value_template: "{{ value_json.backend_status.motor_control_mode }}"
      - name: "Reachy Mini Firmware"
        unique_id: reachy_mini_firmware
        value_template: "{{ value_json.version }}"
    binary_sensor:
      - name: "Reachy Mini Awake"
        unique_id: reachy_mini_awake
        value_template: >-
          {{ value_json.backend_status.motor_control_mode in
             ['enabled', 'gravity_compensation'] }}
        device_class: power

  - resource: http://reachy-mini.local:8000/api/daemon/robot-app-lock-status
    scan_interval: 30
    sensor:
      - name: "Reachy Mini Active App"
        unique_id: reachy_mini_active_app
        value_template: "{{ value_json.holder_name | default('none') }}"
    binary_sensor:
      - name: "Reachy Mini WebRTC Active"
        unique_id: reachy_mini_webrtc_active
        value_template: "{{ value_json.state == 'remote_session' }}"
        device_class: connectivity
```

Adicione mais blocos `rest:` para `/api/state/doa`, `/api/volume/current` e `/api/volume/microphone/current` conforme necessário — consulte os esquemas de resposta em `/docs` no daemon em execução para ver os formatos exatos dos campos.

Em seguida, chame a ação `rest.reload` (Developer Tools → Actions) ou reinicie o Home Assistant; as entidades aparecem em **Settings → Devices & Services → Entities** filtradas por `reachy_mini`.

## Assumindo o controle após a instalação

Depois que o Home Assistant estiver instalado, siga estas etapas para assumir o controle:

1. Abra [http://localhost:8123](http://localhost:8123).
2. O primeiro lançamento inicia o assistente de onboarding: crie uma conta de administrador (nome/nome de usuário/senha), selecione China como região e continue clicando em próximo.
3. Vá para **Settings → Devices & Services**.
4. Em cerca de 30 segundos, um cartão "Discovered: Reachy Mini" deve aparecer → clique em **Add** para confirmar.
   - Na primeira adição, o HA baixa automaticamente a dependência aiortc da câmera; isso requer acesso à internet, então aguarde um momento.
5. Se o cartão de descoberta não aparecer: clique em **Add Integration** no canto inferior direito → pesquise por "Reachy Mini" → insira o endereço manualmente (para a versão Lite você pode usar 127.0.0.1).

Depois de adicionar, você verá um dispositivo Reachy Mini com: um feed de câmera ao vivo, botões de ativar/desativar, menus suspensos com 81 expressões + 34 danças, controles deslizantes de volume, um seletor de modo do motor (desativado funciona como um e-stop por software) e sensores como detecção de fala.

<div align="center">
  <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini-demo/reachymini-home.webp"
  />
</div>

## Notas de design

- O SDK expõe apenas endpoints de uso geral — status do daemon, estado, volume, bloqueio do app. **Nenhuma semântica com formato de HA vive no daemon.**
- Derivações específicas de HA (`awake`, `active_app_transport`, `webrtc_active`) vivem inteiramente no coordenador do repositório de integração. Alterar suas definições não afeta o SDK.
- A integração é intencionalmente tolerante a endpoints ausentes — se `/api/state/doa` retornar 404 (áudio desativado), os campos de DoA apenas ficam indisponíveis enquanto o restante do cartão do dispositivo continua funcionando.
- **Sem autenticação, confiança apenas em LAN.** Mesma postura que qualquer outra rota `/api/*` no daemon. **Não exponha a porta 8000 diretamente para a internet.**

Para o fluxo de instalação / configuração / automação voltado ao usuário, consulte o repositório de integração em [https://github.com/pollen-robotics/reachy_mini_homeassistant](https://github.com/pollen-robotics/reachy_mini_homeassistant).
