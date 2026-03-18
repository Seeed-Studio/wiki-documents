---
description: Guia abrangente de solução de problemas e FAQ para o Reachy Mini, cobrindo problemas frequentes, montagem, conexão, hardware, SDK e mensagens de erro.
title: Solução de Problemas & FAQ
slug: /reachymini_troubleshooting
keywords:
  - troubleshooting
  - faq
  - support
  - issues
  - fixes
  - assembly
  - connection
  - motors
  - sdk
  - errors
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_troubleshooting/
---

# Solução de Problemas & FAQ

Bem-vindo à página de suporte do Reachy Mini. Encontre abaixo respostas para perguntas comuns e soluções.

## 🛠️ Solução de problemas - Questões frequentes

:::warning Solução de problemas essencial
**Leia isto primeiro** - resolve a maioria dos problemas mais conhecidos!
:::

### Antes de qualquer coisa e para qualquer problema: atualizar & reiniciar

:::tip Primeiro passo: Atualizar & Reiniciar
**Certifique-se de que está usando o software atualizado e de que você reiniciou tanto o seu robô quanto o seu computador.**

Para reiniciar o seu robô, pressione OFF, espere 5 segundos e então pressione ON. Esse procedimento simples corrige vários problemas comuns e bem conhecidos.
:::

**Como atualizar o software:**

* **Se você estiver usando o painel em um navegador web**
  Abra `Settings`, depois clique em **Check for updates**.
  ![Update](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/update.png)
* **Se você estiver usando o novo painel/app**
  A partir da versão 0.8.5 do app,
* **Se você estiver usando um repositório clonado**
  Certifique-se de que você está:
  * Na última versão marcada (tagged release), ou
  * Em dia com o branch `develop` (`git pull`).

**Reachy Mini Wireless**: execute `reachyminios_check` para garantir que está tudo certo (veja [Get Started](/pt-br/reachymini_platforms_reachy_mini_get_started))

### Problemas relacionados aos motores

Isto diz respeito a problemas como:
* Motores piscando em vermelho ou que não respondem/não se movem.
* Motores exibindo erros como "Overload Error"
* Motores ausentes: "No motor found on port", "Missing motor", etc.

:::info Diagnóstico dos motores
Se você tiver qualquer um dos seguintes sintomas, consulte o [guia de diagnóstico e solução de problemas dos motores](/pt-br/reachymini_troubleshooting_motors_diagnosis) para etapas detalhadas de diagnóstico e correção de problemas relacionados aos motores.

Usar o aplicativo Reachy Mini Testbench ajudará você a identificar e resolver esses problemas de forma eficaz.
:::

### Erro de Choque Elétrico

:::danger Erro de Choque Elétrico
Um erro de choque elétrico nos motores Dynamixel significa que há um problema na fonte de alimentação ou um curto-circuito em algum lugar.

Verifique se algum cabo está danificado, desde a PCB do pé até a cabeça. Especialmente os seguintes cabos:
* Cabo de alimentação (preto & vermelho)
* Cabos de 3 fios para motores (300mm, 200mm, 100mm e 40mm)

Também pode ser o mesmo problema descrito acima em "Motor piscando vermelho ou Overload Error".
:::

### Microfone não funciona

:::warning Problemas com o microfone
Se você tiver um dos seguintes sintomas:
* Gravação de áudio não funciona / retorna silêncio
* Gravação de áudio retornando zeros

**Você pode ter conectado o cabo do microfone de cabeça para baixo.**
* Se o seu cabo for branco e azul, verifique novamente as instruções de montagem para garantir que o lado azul esteja para cima.
* Se o seu cabo for preto, verifique se o lado com a inscrição "Main Board" está para cima (veja a imagem abaixo).

![mic_cable](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/black_fpc_cable.png)
:::

Se o seu cabo estiver conectado corretamente e você ainda tiver problemas, é provável que o cabo FPC do microfone esteja danificado. Consulte o tutorial [How to change the FPC cable of the microphone of Reachy Mini?](/pt-br/reachymini_troubleshooting_change_mic_fpc_cable) para corrigir esse problema.

### Volume de áudio baixo

:::tip
* Atualize seu robô para a versão 1.2.3 ou posterior

Para mais detalhes, veja a documentação: [Getting Started](/pt-br/reachymini_platforms_reachy_mini_get_started)
:::

### Erros de permissão

:::tip
* Atualize seu robô para a versão 1.2.3 ou posterior
* Reinicie o robô
:::

### Uma antena aparece girada em 90° ou 180°

Isso é um problema de fabricação.

É fácil de corrigir seguindo este guia:
[Antenna repositioning guide](https://drive.google.com/file/d/1FsmNpwELuXUbdhGHDMjG_CNpYXOMtR7A/view?usp=drive_link)

### Um motor está trêmulo

Isso pode acontecer se os valores de PID do motor não forem ideais. Com frequência, os motores 10 (pé), 17 e 18 (as antenas) podem apresentar pequenas trepidações ao manter posição.
São "ajustes" finos que o motor está fazendo, que neste caso acabam sendo uma correção excessiva.
A boa notícia é que você pode [ajustar os valores de controle PID](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/config/hardware_config.yaml#L66C1-L67C1) para acalmar essas trepidações.

:::tip
Você pode primeiro tentar reduzir P para 180 nos motores 10, 17 e 18.
Se isso não ajudar, você também pode tentar aumentar D para 10 nos mesmos motores.
:::

### A imagem está escura na versão Lite

:::info Correção rápida: ajustar o tempo de exposição nas configurações da câmera
Para corrigir uma imagem escura, ative a exposição automática ou aumente manualmente o tempo de exposição usando um aplicativo de controle de câmera. Esses aplicativos fornecem uma interface intuitiva para ajustar a exposição e outros parâmetros da câmera.
:::

**Aplicativos recomendados:**

* **macOS:** [CameraController](https://github.com/itaybre/CameraController) - Aplicativo GUI open-source para controle de câmeras USB
* **Linux:** qv4l2 - Aplicativo GUI baseado em Qt para controle de câmeras V4L2
  * Instalação: `sudo apt install qv4l2`
* **Windows:** [Webcam Settings](https://www.softpedia.com/get/Internet/WebCam/Webcam-Settings-Tool.shtml) ou [ManyCam](https://manycam.com/) para controle avançado de câmera

Esses aplicativos permitem ajustar o tempo de exposição, brilho e outros parâmetros da câmera por meio de uma interface gráfica intuitiva.

---

:::info Avançado: usando libuvc para controle detalhado da câmera
Para usuários avançados que desejam controle preciso sobre os parâmetros da câmera, você pode usar utilitários de linha de comando baseados em libuvc. Essas ferramentas fornecem acesso em baixo nível a todos os controles de câmeras UVC.

Para corrigir especificamente o problema de imagem escura, defina `auto-exposure-priority=1` usando essas ferramentas de linha de comando.
:::

**Ferramentas de linha de comando por plataforma:**

* **macOS:** [uvc-util](https://github.com/jtfrey/uvc-util)

* **Linux:** [v4l2-ctl](https://manpages.debian.org/testing/v4l-utils/v4l2-ctl.1.en.html)
  * Instalação: `sudo apt install v4l-utils`

* **Windows:** O Windows não tem um equivalente direto.

:::note
Essas ferramentas de linha de comando exigem conhecimento técnico e o acesso aos parâmetros da câmera pode variar dependendo da ferramenta selecionada. Use `--help` e liste os controles disponíveis antes de fazer qualquer alteração.
:::

### Está faltando uma peça no meu kit

:::tip Verifique primeiro
Certifique-se de desembrulhar tudo primeiro. Algumas peças vêm pré-montadas (por exemplo, a parte inferior da cabeça já vem colocada na parte traseira da cabeça).

![head_parts](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/head_parts.jpg)

Depois, verifique a lista de peças do guia de montagem para ver se você realmente está sem alguma peça.
:::

Se você tiver 100% de certeza de que está faltando uma peça, entre em contato com sales@pollen-robotics.com com uma foto de todas as peças que você tem e o número do pedido ou número da nota fiscal.
Você também pode encontrar [arquivos stl](https://github.com/pollen-robotics/reachy_mini/tree/develop/src/reachy_mini/descriptions/reachy_mini/mjcf/assets) para imprimir a peça você mesmo enquanto isso.

### Não consigo conectar ao meu Reachy Mini Wireless usando um cabo USB-C

:::info
As unidades Wireless não expõem o robô via USB da mesma forma que a versão Lite, então conectar um cabo USB-C ao seu laptop não fornecerá uma conexão funcional.

**Em vez disso:**
* Conecte o robô à sua rede Wi‑Fi e use o cliente do SDK no seu laptop para controlá-lo remotamente.
* Se você quiser executar código diretamente no Raspberry Pi embarcado, faça SSH nele e execute seus scripts lá (é isso que o Dashboard faz depois que você publica/instala um app).
* Para um link com cabo, use um adaptador USB-C‑para‑Ethernet mais um cabo Ethernet — isso simplesmente substitui o Wi‑Fi por Ethernet cabeada.
:::

### O ponto de acesso Wireless não aparece - RPI não inicia

Há uma chave na placa na cabeça que precisa estar em uma determinada posição. E, se não estiver, o AP não aparece. É possível que essa chave tenha sido movida durante a montagem ou talvez por erro de fábrica.

:::warning
Verifique se a chave está na posição "**debug**" e não em "**download**". Veja a imagem abaixo:

![switch_position](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/wireless_switch.png)
:::

Se essa chave estiver na posição correta e você ainda não conseguir ver o AP, talvez seja necessário regravar a iso do Raspberry Pi, seguindo o tutorial [reflash the RPI Iso tutorial](/pt-br/reachymini_platforms_reachy_mini_reflash_the_rpi_iso).

## 🚀 Primeiros Passos & Montagem

### Quanto tempo a montagem geralmente leva?

:::tip
A maioria dos testadores relata entre **1,5 e 2 horas**. Pode levar até 4 horas dependendo do seu nível de experiência.
:::

### Existem etapas difíceis durante a montagem?

Na verdade não, os testadores a descrevem como **divertida, simples e satisfatória**. Ferramentas básicas e paciência são suficientes. O roteamento dos cabos e o aperto correto das peças são os elementos mais delicados. Quando você compra um Reachy Mini Lite ou Wireless, ele vem com um guia do usuário impresso e você também tem acesso a um vídeo e ao guia digital.

Vídeo para Reachy Mini [BETA](https://www.youtube.com/watch?v=_r0cHySFbeY), LITE, WIRELESS

Guia Digital de Montagem para Reachy Mini [BETA](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide), LITE, WIRELESS

### Terminei a montagem e sobraram 2 cabos e alguns parafusos. Isso é normal?

:::info
Sim, isso é completamente normal.

Nós intencionalmente incluímos cabos e parafusos sobressalentes no kit para o caso de algumas peças serem danificadas ou perdidas durante a montagem.

Você não precisa instalá-los.
:::

### Meu Reachy Mini não se move na primeira inicialização. O que devo verificar?

:::warning Checklist
* **Fonte de alimentação:** Certifique-se de que a fonte de alimentação de 7V-5A está conectada. A conexão USB não é suficiente para alimentar os motores.
* **Cabos:** Verifique se todos os cabos estão totalmente inseridos. Cabos de alimentação soltos são uma causa comum de erros de "motor not responding".
* **Seção de Solução de Problemas:** Veja a seção de Solução de Problemas Essencial no topo desta página.
:::

### Preciso iniciar o daemon manualmente?

:::success NÃO
* Com o Reachy Mini (Wireless), o daemon já está em execução no Raspberry Pi embarcado.
* Com o Reachy Mini Lite, você pode usar [o app desktop](/pt-br/reachymini_platforms_reachy_mini_lite_get_started).
* Se o app desktop não funcionar no seu sistema (por exemplo, ARM64, distribuições incomuns), você pode [instalar e usar o Python SDK](/pt-br/reachymini_sdk_installation) diretamente - é uma alternativa totalmente suportada!
:::

## 🔌 Conexão & Dashboard

### Como conecto o robô ao Wi‑Fi?

Veja o [guia Reachy Mini Wireless](/pt-br/reachymini_platforms_reachy_mini_get_started) para instruções detalhadas sobre como conectar ao Wi‑Fi.

### Como faço para redefinir o hotspot Wi‑Fi?

Se você precisar redefinir o hotspot Wi‑Fi do robô (por exemplo, se não conseguir conectar ou quiser mudar de rede), siga as instruções no [Guia de Redefinição de Wi‑Fi](/pt-br/reachymini_platforms_reachy_mini_reset).

### O dashboard em http://localhost:8000 não funciona.

:::info Etapas de solução de problemas
**1. Verifique as permissões do navegador**: Certifique‑se de que seu navegador pode acessar redes locais. No _macOS_, essas permissões ficam em Configurações do Sistema → Privacidade e Segurança → Rede Local.

**2. Para Reachy Mini Wireless**: Certifique‑se de que tanto o seu computador quanto o robô estejam conectados à **mesma rede** e, em seguida, verifique a conectividade executando o seguinte comando no seu terminal:
:::

```bash
ping reachy-mini
```

:::info Para Reachy Mini Lite
Faça estas verificações:
* _Ambiente Virtual:_ Certifique‑se de que você está executando dentro do seu ambiente virtual (`.venv`, `reachy_mini_env`,...).
* _Atualização do SDK:_ Certifique‑se de ter a versão mais recente.

Com `pip`, execute:
```bash
pip install -U reachy-mini
```

Com `uv`, execute:
```bash
uv pip install -U reachy-mini
```

* _Daemon:_ Certifique‑se de que o daemon `reachy-mini-daemon` esteja em execução em um terminal.
:::

### O robô tem uma Web API?

:::info Sim!
O daemon fornece uma REST API (FastAPI) e suporte a WebSocket.
* **Documentação:** `http://localhost:8000/docs` (disponível quando o daemon está em execução).
* **Recursos:** Obter estado, mover juntas, controlar o daemon.
:::

Você pode usar a API para controlar o robô, obter seu estado e até mesmo controlar o próprio daemon. A API é implementada usando modelos [FastAPI](https://fastapi.tiangolo.com/) e [pydantic](https://docs.pydantic.dev/latest/).

Ela deve fornecer todos os endpoints necessários para interagir com o robô, incluindo:

* Obter o estado do robô (posições das juntas, status dos motores, etc.)
* Mover as juntas do robô ou definir poses específicas

A API é documentada usando OpenAPI, e você pode acessar todas as rotas disponíveis e testá‑las em http://localhost:8000/docs quando o daemon estiver em execução. Você também pode acessar o esquema OpenAPI bruto em http://localhost:8000/openapi.json.

Isso pode ser útil se você quiser gerar código cliente para sua linguagem ou framework de programação preferido, conectá‑la ao seu aplicativo de IA, ou até mesmo criar seu servidor MCP.

**Suporte a WebSocket**

A API também oferece suporte a conexões WebSocket para atualizações em tempo real. Por exemplo, você pode assinar atualizações de estado das juntas:

```javascript
let ws = new WebSocket(`ws://127.0.0.1:8000/api/state/ws/full`);

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
};
```

### Por que eu preciso de um ambiente virtual (.venv)?

:::tip
Ajuda a evitar conflitos de pacotes durante a instalação do SDK.
:::

## 🤖 Hardware, Motores & Limites

### Onde posso encontrar mais informações sobre hardware?

Consulte a [página de Hardware do Reachy Mini](/pt-br/reachymini_platforms_reachy_mini_hardware) para informações detalhadas sobre os componentes de hardware do robô.

### Quais são os limites de segurança (Cabeça & Corpo)?

:::warning Limites de Segurança
Se você comandar uma pose fora desses limites, o robô irá automaticamente limitar para a pose segura mais próxima.
:::

* **Yaw do Corpo:** [-180°, 180°].
* **Pitch/Roll da Cabeça:** [-40°, 40°].
* **Yaw da Cabeça:** [-180°, 180°].
* **Limite Combinado:** A diferença entre `body_yaw` e `head_yaw` deve estar dentro de **[-65°, 65°]**.

### Por que os motores estão “moles” ou “rígidos”? (Conformidade)

* **`enable_motors()`**: Motores **LIGADOS** (Rígidos). O robô mantém a posição.
* **`disable_motors()`**: Motores **DESLIGADOS** (Moles). Você pode movê‑lo com a mão.
* **`make_motors_compliant()`**: Motores **LIGADOS mas Macios**. Útil para ensino por demonstração.

### Como acesso os parâmetros dos motores?

1. Você pode consultar fazendo o scan dos motores usando o [script scan_motors.py](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/tools/scan_motors.py).

:::tip Se o seu robô for Lite
Você pode executar o script diretamente no seu computador:
```bash
python -m reachy_mini.tools.scan_motors
```
:::

:::tip Se o seu robô for Wireless
Acesse o robô via SSH:
```bash
ssh pollen@reachy-mini.local
```
Ative o venv:
```bash
source /venvs/mini_daemon/bin/activate
```
E execute o script (os motores devem estar ligados para isso!):
```bash
python -m reachy_mini.tools.scan_motors --wireless
```
:::

Ele deve imprimir a lista de motores detectados. Você deve ter todos os motores na baudrate 1000000, com os seguintes IDs: 10,11, 12, 13, 14, 15,17, 18. Se algum estiver faltando, verifique os cabos novamente. Se houver um motor com um ID ou baudrate diferente, entre em contato com o suporte.

Exemplo de saída correta:
```
Trying baudrate: 9600
No motors found at baudrate 9600
Trying baudrate: 57600
No motors found at baudrate 57600
Trying baudrate: 115200
No motors found at baudrate 115200
Trying baudrate: 1000000
Found motors at baudrate 1000000: [10, 11,12,13, 14, 15, 16, 17, 18]
```

2. Lite: Você também pode usar o Dynamixel Wizard para ler os parâmetros dos motores. Siga o guia [aqui](/pt-br/reachymini_platforms_reachy_mini_lite_wizard).

### Os motores param de responder depois de um tempo.

* Verifique a conexão da fonte de alimentação.
* Os motores podem ter entrado em modo de proteção térmica (superaquecimento). Desligue e ligue novamente.
* Atualizar o SDK (`pip install -U reachy-mini`) resolveu isso para alguns usuários.
* Se o LED do motor piscar em vermelho, veja a seção “Motor piscando em vermelho ou Erro de Sobrecarga” na parte de Solução de Problemas Essenciais acima.

### A bateria possui recursos de segurança?

:::info
O modelo Wireless inclui um carregador de bateria adequado.
A bateria integra um BMS com um sensor de temperatura também.
:::

### Como vejo a carga restante da bateria?

:::warning
Não temos a possibilidade de verificar o status da bateria, isso é uma limitação conhecida do projeto.

Só temos a indicação por LED de “bateria fraca” quando é hora de carregá‑la. (verde -> laranja -> vermelho)
:::

### Como remover a bateria

:::tip
* Verifique primeiro se o LED verde não está aceso.
* Remova os 3 parafusos na parte inferior e puxe o pé um pouco para fora.
![remove_foot](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/remove_foot.png)
* Desconecte o conector indicado (seta vermelha) para poder remover a bateria. Deve haver uma fita dupla face que mantém a bateria no lugar, então pode ser um pouco difícil removê‑la.
![battery_location](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/battery_connector.png)
* Quando você for remontar, faça essas etapas novamente em ordem inversa. Apenas tome cuidado para não prender nenhum cabo.
:::

### A cabeça pode tocar o corpo durante alguns movimentos oficiais

:::info
Esse comportamento é esperado e não é um bug de hardware ou software.

No entanto, como pode ser confuso, iremos atualizar esses movimentos para evitar esse contato.
:::

### Posso modificar a aparência (Skins/CAD)?

:::info
* **CAD:** Os arquivos STEP completos ainda não foram lançados, mas planejamos disponibilizá‑los no futuro. Enquanto isso, você pode encontrar alguns arquivos STL na [pasta assets](https://github.com/pollen-robotics/reachy_mini/tree/develop/src/reachy_mini/descriptions/reachy_mini/mjcf/assets) do repositório.
* **Skins:** Sim, a comunidade criou versões personalizadas. Alguns arquivos STEP de “skins” foram compartilhados no Discord, no canal ["Pimp my Reachy Mini"](https://discord.com/channels/519098054377340948/1453340883775651861).
:::

### Meu cabo flat do microfone está quebrado

:::info Especificações
As especificações do cabo do microfone são as seguintes:
* Cabo flat flexível FFC/FPC
* 12 pinos
* Espaçamento de 0,5mm
* Tipo A (conectores no mesmo lado)
* 15mm de comprimento
:::

Aqui estão algumas referências se você estiver procurando um cabo de substituição para o seu microfone:
* [Amazon](https://www.amazon.fr/dp/B09TR4X1BP?ref=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&ref_=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&social_share=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z)
* [Farnell](https://fr.farnell.com/molex/15020-0127/cordon-ffc-12-cond-152mm-blanc/dp/3862090)

## 🐍 SDK, Apps & Programação

### Como me conecto a partir do Python?

Use a classe `ReachyMini`.

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
    print(mini.state)
```

### Como crio um novo App?

1.  Use o gerador: `reachy-mini-make-app my_app_name`.
2.  Edite o `main.py` na pasta gerada.
3.  Execute: `python my_app_name/main.py`.

Confira o [Tutorial da Hugging Face](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps) para detalhes.

### A instalação de todos os apps falha no Windows!

:::tip
Claro! Você pode instalar apps diretamente pelo seu Dashboard se forem nativos, ou adicioná‑los aos favoritos se forem baseados na Web.
:::

### Todas as instalações de apps falham no Windows !

:::warning
Isso pode estar relacionado a permissões insuficientes para criar symlinks no Windows. Você pode definir a variável de ambiente `HF_HUB_DISABLE_SYMLINKS_WARNING` para 1 para remover os avisos que causam a falha.

Em um terminal, execute:
```powershell
set HF_HUB_DISABLE_SYMLINKS_WARNING=1
```
:::

### A instalação de apps pela Hugging Face falha.

:::tip
Atualize seu SDK. Versões iniciais tinham um bug com a instalação de Spaces.

```bash
pip install -U reachy-mini
```
:::

### Existe um modo de Simulação?

:::info
Sim, via MuJoCo. Ainda está em desenvolvimento, mas você pode executar código com a flag `--sim` ou `ReachyMini(media_backend="no_media")` se estiver apenas testando lógica sem física.
:::

### Como depuro um app no modelo Wireless?

:::info
Acesse o computador embarcado via SSH, clone (ou copie) seu app e execute‑o manualmente. Isso reproduz o que o dashboard faz ao iniciar seu app.
:::

```bash
ssh pollen@reachy-mini.local
# password: root
cd your_app_name
python your_app_name/main.py
```

Sua interface gráfica (GUI) será aberta no endereço de sempre (por exemplo, `http://reachy-mini.local:8042`).

## 🕹️ Movendo o Robô

### Como movo a cabeça?

Use `goto_target` with `create_head_pose`:

```python
from reachy_mini.utils import create_head_pose

# ... inside with ReachyMini() as mini:
mini.goto_target(head=create_head_pose(yaw=-10, pitch=20))
```

### Qual é a diferença entre `goto_target` e `set_target`?

:::info
* **`goto_target`**: **Suave**. Interpola o movimento ao longo do tempo (padrão 0,5s). Melhor para gestos.
* **`set_target`**: **Instantâneo**. Define o alvo imediatamente. Melhor para controle de alta frequência (teleoperação, trajetórias matemáticas).
:::

### Como faço para gravar e reproduzir movimentos?

:::tip Recording
Chame `start_recording()` e `stop_recording()` ao redor do seu loop de controle.
:::

```python
mini.start_recording()
# ... move robot ...
move = mini.stop_recording()
```

:::tip Replaying
Use a classe `RecordedMoves` para carregar movimentos a partir da [biblioteca do Hugging Face](https://github.com/pollen-robotics/reachy_mini_dances_library).
:::

```python
mini.play_move(recorded_moves.get("dance_1"))
```

### Os movimentos do meu robô parecem trêmulos. O loop de controle está rodando corretamente?

:::info
Você pode verificar se o loop de controle dos motores está rodando corretamente checando o status do daemon:
:::

* via SDK
```python
mini = ReachyMini()
print(mini.client.get_status())
```
* via a dashboard API em `http://localhost:8000/docs` na versão lite e `http://reachy-mini.local:8000/docs` para a versão sem fio (procure pelo endpoint `/api/daemon/status`)

Você deve ver valores em torno de 50Hz (~20ms de período):
```python
{
  ...
"motor_controller": "ControlLoopStats(period=~19.99ms, read_dt=~1.94 ms, write_dt=~0.19 ms)"
  ...
}
```

:::warning
Se o período for muito maior que 20ms, significa que o loop de controle não está rodando rápido o suficiente. Isso pode ser devido a:
* Carga pesada de CPU no computador (por exemplo, outros apps usando muita CPU).
* (apenas para lite) alta latência USB (tente configurar sua porta serial).
:::

## 👁️ Visão & Áudio

### O volume está muito baixo (Linux)

1.  Rode `alsamixer`.
2.  Defina **PCM1** em 100%.
3.  Use **PCM,0** para ajustar o volume global.

Para torná‑lo permanente:
```bash
CARD=$(aplay -l | grep -i "reSpeaker" | head -n1 | sed -n 's/^card \([0-9]*\):.*/\1/p')
amixer -c "$CARD" set PCM,1 100%
sudo alsactl store "$CARD"
```

Este é um [problema conhecido](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/02_setting_up_the_hardware.html#low-volume-of-playback-audio-on-linux-for-project-ua) da placa de som baseada em XVF3800.

### Como obtenho frames da câmera?

Use o objeto `media`.

```python
with ReachyMini() as mini:
    frame = mini.media.get_frame()
    # Returns an OpenCV-compatible numpy array
```

### Como uso o Microfone / Alto-falante?

```python
# Get audio
sample = mini.media.get_audio_sample()

# Play audio
mini.media.push_audio_sample(numpy_chunk)
```

### Como faço o Reachy olhar para alguma coisa?

* **2D (Imagem):** `mini.look_at_image(x, y)` - (0,0 é o canto superior esquerdo).
* **3D (Mundo):** `mini.look_at_world(x, y, z)` - Coordenadas no referencial do robô.

### O rastreamento de rosto parece lento.

:::tip
O desempenho depende muito das condições de iluminação. Garanta que o rosto esteja bem iluminado. Usar o backend GStreamer também pode melhorar a latência em comparação com o backend padrão do OpenCV.
:::

### Como verifico se o sistema de som está funcionando?

#### Reachy Mini Versão Lite

:::info
A maneira mais fácil de testar a versão Lite é usar diretamente o dispositivo *Pollen Robotics Reachy Mini Audio* a partir do seu computador para verificar o funcionamento adequado.
:::

#### Reachy Mini Versão Wireless

:::info
Para a versão Wireless, você pode usar os seguintes comandos GStreamer para testar a gravação e reprodução de áudio:
:::

```bash
# record a sound
gst-launch-1.0 -e alsasrc device="reachymini_audio_src" ! audioconvert ! audioresample ! wavenc ! filesink location="test.wav"
# playback the recording
gst-launch-1.0 filesrc location=test.wav ! wavparse ! audioconvert ! alsasink device=reachymini_audio_sink
#playback a test sound (pink noise)
gst-launch-1.0 audiotestsrc wave="pink-noise" ! audioconvert ! audioresample ! alsasink device=reachymini_audio_sink
```

:::tip Advanced Testing
Você pode reproduzir um som enquanto grava simultaneamente para testar o desempenho da cancelamento de eco. Isso ajuda a verificar se a matriz de microfones está processando o áudio corretamente e cancelando o eco dos alto-falantes.

**Dicas de solução de problemas:**
* Verifique se o arquivo `.asoundrc` existe no diretório home
* Verifique se o microfone é detectado: `arecord -l`
* Verifique se o alto-falante é detectado: `aplay -l`
:::

## 🔧 Mensagens de Erro Específicas & Correções

### Erros de hardware do motor `'<name>'`: ['Input Voltage Error']

:::info
Estamos usando uma voltagem mais alta no Reachy Mini, é de propósito :)
:::

### Erro: "OSError: PortAudio library not found"

:::warning
Está faltando uma dependência de sistema. Rode:

```bash
sudo apt-get install libportaudio2
```

Depois reinicie o daemon.
:::

### Aviso: "Circular buffer overrun" (Simulação/Mujoco)

:::tip
Isso aparece se você se conectar ao robô mas não consumir os frames de vídeo, fazendo o buffer encher.

**Correção:** Se você não precisa de vídeo, inicialize com `ReachyMini(media_backend="no_media")`.
:::

### Sem Entrada de Microfone / Direção de Chegada (Unidades Beta)

:::warning
* **Sem Entrada:** Requer firmware 2.1.3. Rode o [script de atualização](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/firmware/update.sh).
* **Sem Direção:** Requer firmware 2.1.0+.
* Verifique se o cabo flat flexível está instalado na orientação correta (Slides 45-47 do guia de montagem).
:::

## 📦 Envio & Garantia

### Meu pacote está danificado ou faltando.

:::danger
Entre em contato com a equipe da **Pollen Robotics** imediatamente. Você pode nos enviar um e-mail para sales@pollen-robotics.com com fotos do pacote, número do recibo ou número da fatura e seu nome completo. Em seguida, verificaremos com a transportadora e manteremos você atualizado.
:::

### Política de Reembolso

:::info
* **Antes do envio:** Contate `sales@pollen-robotics.com` para um reembolso de 100%.
* **Após o envio:** Você tem 30 dias para devolver seu pacote. Contate o setor de vendas (sales@pollen-robotics.com) com comprovante de entrega e número da fatura ou recibo. Se você tiver comentários / feedback, por favor nos avise, nosso foco é construir um robô que a comunidade open-source goste de montar.
:::

### Garantia

:::info
Se uma peça estiver quebrada/com mau funcionamento, a equipe de pós-venda da Pollen determinará se é um defeito de hardware coberto pela garantia. Em seguida, nosso fabricante fornecerá peças de reparo ou substituição. Você pode nos enviar um e-mail para sales@pollen-robotics.com com fotos do problema, número do recibo ou número da fatura e seu nome completo.
:::

## 💬 Ainda com dúvidas?

Se você não encontrou a resposta para o seu problema neste guia, entre em contato diretamente conosco!
A equipe da Pollen Robotics e a comunidade estão ativas no Discord para ajudar você a resolver problemas específicos.

👉 **[Entre no Discord da Pollen Robotics](https://discord.gg/Y7FgMqHsub)**
