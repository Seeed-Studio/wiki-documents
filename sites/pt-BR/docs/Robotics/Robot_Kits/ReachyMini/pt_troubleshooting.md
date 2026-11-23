---
description: Guia abrangente de solução de problemas e FAQ do Reachy Mini cobrindo problemas frequentes, montagem, conexão, hardware, SDK e mensagens de erro.
image: https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini-demo/reachymini-soarm.webp
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
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-09-29'
url: https://wiki.seeedstudio.com/pt-br/reachymini_troubleshooting/
---

# Solução de Problemas & FAQ

Bem-vindo à página de suporte do Reachy Mini. Clique nas perguntas abaixo para revelar as respostas.

## 🛠️ Solução de problemas - Questões frequentes

**Solução de problemas essencial - Leia isto primeiro, resolve todas as questões já conhecidas!**


<details>
<summary><strong>Antes de qualquer coisa e para qualquer problema: atualize & reinicie</strong></summary>

**Certifique-se de que está usando o software atualizado e de que você reiniciou tanto o seu robô quanto o seu computador.**
Para reiniciar o seu robô, pressione OFF, espere 5 segundos e então pressione ON. Este procedimento simples corrige vários problemas comuns e já conhecidos.

**Como atualizar o software:**

- **Se você estiver usando o Reachy Mini Control**
  Na aba de configurações "⚙️", clique em "Check for updates". Se uma atualização estiver disponível, clique em "Update now".
- **Se você estiver usando um repositório clonado**
  Certifique-se de que você está:
  - Na versão mais recente marcada (tagged release), ou
  - Atualizado com a branch `main` (`git pull`).

**Reachy Mini Wireless**: execute `reachyminios_check` para garantir que tudo está correto (veja [Get Started](/pt-br/reachymini_platforms_reachy_mini_get_started))

</details>


<details>
<summary><strong>Falha no bootstrap ou na atualização / Problemas com o ambiente Python (Lite & Simulation)</strong></summary>

Se o Reachy Mini Control falhar durante o bootstrap inicial, travar ao criar o ambiente virtual ou se uma atualização deixar o ambiente Python em um estado quebrado, você pode redefinir os ambientes virtuais diretamente a partir do aplicativo desktop.

Duas opções de redefinição estão disponíveis:

- **Reset apps environment** — recria apenas o `apps_venv` (o ambiente usado pelos aplicativos instalados). Os aplicativos instalados precisarão ser reinstalados. Use esta opção primeiro se apenas os apps falharem ao iniciar ou instalar.
- **Full Environment Reset** — apaga todos os arquivos Python e baixa tudo novamente (interpretador + ambos os venvs). Use esta opção se o próprio bootstrap falhar ou se "Reset apps environment" não ajudar. Isso pode levar alguns minutos.

**Onde encontrar esses botões:**

- **Antes de conectar** (tela Finding Robot): clique no ícone ⚙️ no canto superior direito. Um menu aparece em "Local environment (USB & Sim)" com "Reset apps environment" e a opção de redefinição completa.
- **Depois de conectado** (modo USB / Simulation): abra o painel de Settings e vá para a seção "Environment", que contém os botões "Reset Apps Environment" e "Full Environment Reset".

Após uma redefinição completa, o aplicativo desktop executará novamente o bootstrap no próximo lançamento.

</details>


<details>
<summary><strong>Problemas relacionados aos motores</strong></summary>

Isto diz respeito a problemas como:
- Motores piscando em vermelho ou que não respondem/não se movem.
- Motores exibindo erros como "Overload Error"
- Motores ausentes: "No motor found on port", "Missing motor", etc.

Se você tiver qualquer um dos seguintes sintomas, consulte o [guia de diagnóstico e solução de problemas dos motores](/pt-br/reachymini_troubleshooting_motors_diagnosis) para etapas detalhadas de diagnóstico e correção de problemas relacionados aos motores.

Usar o aplicativo Reachy Mini Testbench ajudará você a identificar e resolver esses problemas de forma eficaz.

</details>

<details>
<summary><strong>Erro de choque elétrico </strong></summary>

Um erro de choque elétrico em motores Dynamixel significa que há um problema com a fonte de alimentação ou um curto-circuito em algum lugar.
Verifique se algum cabo está danificado, desde a PCB do pé até a cabeça. Especialmente os seguintes cabos:
- Cabo de alimentação (preto & vermelho)
- Cabos de 3 fios para motores (300mm, 200mm, 100mm e 40mm)

Também pode ser o mesmo problema descrito acima em "Motor piscando em vermelho ou Overload Error".

</details>

<details>
<summary><strong>Microfone não funciona</strong></summary>

Se você tiver um dos seguintes sintomas:
- Gravação de áudio não funciona / retorna silêncio
- Gravação de áudio retornando zeros

Você pode ter conectado o cabo do microfone de cabeça para baixo.
- Se o seu cabo for branco e azul, verifique novamente as instruções de montagem para ter certeza de que o lado azul está para cima.
- Se o seu cabo for preto, verifique se o lado com a inscrição "Main Board" está para cima (veja a imagem abaixo).
![mic_cable](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/black_fpc_cable.png)


Se o seu cabo estiver conectado corretamente e você ainda tiver problemas, é provável que o cabo FPC do microfone esteja danificado. Consulte o tutorial [How to change the FPC cable of the microphone of Reachy Mini?](/pt-br/reachymini_troubleshooting_change_mic_fpc_cable) para corrigir esse problema.

</details>


<details>

<summary><strong>Volume de áudio baixo</strong></summary>

- Atualize o seu robô para a versão 1.2.3 ou posterior

Para mais detalhes, consulte a documentação:
[Getting Started](/pt-br/reachymini_platforms_reachy_mini_get_started)

</details>

<details>
<summary><strong>Erros de permissão</strong></summary>

- Atualize o seu robô para a versão 1.2.3 ou posterior
- Reinicie o robô

</details>

<details>
<summary><strong>Uma antena parece girada em 90° ou 180°</strong></summary>

Isto é um problema de fabricação.

É fácil de corrigir seguindo este guia:
[Antenna repositioning guide](https://drive.google.com/file/d/1FsmNpwELuXUbdhGHDMjG_CNpYXOMtR7A/view?usp=drive_link)

</details>

<details>
<summary><strong>Um motor está tremendo</strong></summary>

**Antenas tremendo**

Este é o caso mais comum. As antenas (motores 17 e 18) tendem a tremer quando ajustadas para a posição vertical (0°). Nesse ângulo, a folga da caixa de engrenagens coloca o motor em um equilíbrio instável — como um pêndulo invertido. O motor tenta constantemente corrigir sua posição em torno de um ponto onde o atrito é muito baixo, o que causa a oscilação.

A correção mais simples é deslocar as antenas alguns graus (tipicamente 10° são suficientes). Isso permite que a gravidade aplique um pequeno viés que elimina a folga mecânica em uma direção, eliminando a trepidação.

Este agora é o comportamento padrão no Reachy Mini — veja [PR #952](https://github.com/pollen-robotics/reachy_mini/pull/952) para detalhes.

**Ajuste dos valores de PID**

Outra opção é [ajustar os valores de controle PID](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/config/hardware_config.yaml#L66C1-L67C1). Os valores ideais podem variar entre unidades de robô, pois pequenas diferenças de atrito na fabricação já são suficientes para alterar o comportamento.

Você pode primeiro tentar reduzir P para 180 nos motores 10 (pé), 17 e 18 (antenas).
Se isso não ajudar, você também pode tentar aumentar D para 10 nos mesmos motores.

</details>

<details>
<summary><strong>A cabeça faz ruídos de rangido ou atrito durante o movimento</strong></summary>

Se você ouvir ruídos agudos de rangido ou atrito quando a cabeça do robô se move, é provável que as juntas esféricas (ball joints) das hastes da plataforma Stewart precisem de manutenção. Você também pode notar poeira escura ou resíduos ao redor das hastes de conexão.

Este é um desgaste normal ao longo do tempo. Siga o [guia de manutenção das juntas esféricas](/pt-br/reachymini_troubleshooting_spherical_joints_maintenance) para limpar e lubrificar novamente as juntas.

</details>

<details>
<summary><strong>A imagem está escura na versão Lite</strong></summary>

**➡️ Correção rápida: Ajuste o tempo de exposição nas configurações da câmera**

Para corrigir uma imagem escura, ative a autoexposição ou aumente manualmente o tempo de exposição usando um aplicativo de controle de câmera. Esses aplicativos fornecem uma interface intuitiva para ajustar a exposição e outros parâmetros da câmera.

**Aplicativos recomendados:**

- **macOS:** [CameraController](https://github.com/itaybre/CameraController) - Aplicativo GUI de código aberto para controle de câmeras USB
- **Linux:** qv4l2 - Aplicativo GUI baseado em Qt para controle de câmeras V4L2
  - Instalação: `sudo apt install qv4l2`
- **Windows:** [Webcam Settings](https://www.softpedia.com/get/Internet/WebCam/Webcam-Settings-Tool.shtml) ou [ManyCam](https://manycam.com/) para controle avançado da câmera

Esses aplicativos permitem ajustar o tempo de exposição, brilho e outros parâmetros da câmera por meio de uma interface gráfica intuitiva.

---

**➡️ Avançado: Usando libuvc para controle aprofundado da câmera**

Para usuários avançados que desejam controle preciso sobre os parâmetros da câmera, você pode usar utilitários de linha de comando baseados em libuvc. Essas ferramentas fornecem acesso em baixo nível a todos os controles de câmeras UVC.

Para corrigir especificamente o problema de escuridão, defina `auto-exposure-priority=1` usando essas ferramentas de linha de comando.

**Ferramentas de linha de comando por plataforma:**

- **macOS:** [uvc-util](https://github.com/jtfrey/uvc-util)

- **Linux:** [v4l2-ctl](https://manpages.debian.org/testing/v4l-utils/v4l2-ctl.1.en.html)
  - Instalação: `sudo apt install v4l-utils`

- **Windows:** o Windows não possui um equivalente direto.

**Observação:** Essas ferramentas de linha de comando exigem conhecimento técnico e o acesso aos parâmetros da câmera pode variar dependendo da ferramenta selecionada. Use `--help` e liste os controles disponíveis antes de fazer qualquer alteração.

</details>

<details>
<summary><strong>Está faltando uma peça no meu pacote</strong></summary>

Certifique-se de desempacotar tudo primeiro. Algumas peças vêm pré-montadas (por exemplo, a parte inferior da cabeça já está colocada na parte traseira da cabeça).

![head_parts](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/head_parts.jpg)

Em seguida, verifique a lista de peças do guia de montagem para ver se você realmente está sem alguma peça:
Se você tiver 100% de certeza de que está faltando uma peça, entre em contato com sales@pollen-robotics.com com uma foto de todas as peças que você tem e o número do pedido ou número da fatura.
Você também pode encontrar [arquivos stl](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/descriptions/reachy_mini/mjcf/assets) para imprimi-la você mesmo enquanto isso.
</details>


<details>
<summary><strong>Não consigo conectar ao meu Reachy Mini Wireless usando um cabo USB-C</strong></summary>

As unidades Wireless não expõem o robô via USB da mesma forma que a versão Lite, então conectar um cabo USB-C ao seu laptop não fornecerá uma conexão funcional.
Em vez disso:

- Conecte o robô à sua rede Wi-Fi e use o cliente SDK no seu laptop para controlá-lo remotamente.
- Se você quiser executar código diretamente no Raspberry Pi embarcado, faça SSH nele e execute seus scripts lá (é isso que o Reachy Mini Control faz depois que você publica/instala um app).
- Para uma conexão com fio, use um adaptador USB-C-para-Ethernet mais um cabo Ethernet — isso simplesmente substitui o Wi‑Fi por Ethernet com fio.

</details>

<details>
<summary><strong>O ponto de acesso sem fio não aparece - o RPI não inicializa</strong></summary>
Há uma chave na placa na cabeça que precisa estar em uma determinada posição. E, se não estiver, o AP não aparece. É possível que essa chave tenha sido movida durante a montagem ou até mesmo por um erro de fábrica.
Verifique se a chave está na posição "debug" e não em "download". Veja a imagem abaixo:

![switch_position](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/wireless_switch.png)

Se essa chave estiver na posição correta e você ainda não conseguir ver o AP, talvez seja necessário regravar a iso do Raspberry Pi, seguindo o [tutorial de regravação da Iso do RPI](/pt-br/reachymini_platforms_reachy_mini_reflash_the_rpi_iso).

</details>

## 🚀 Primeiros Passos & Montagem

<details>
<summary><strong>Quanto tempo a montagem geralmente leva?</strong></summary>

A maioria dos testadores relata entre **1,5 e 2 horas**. Pode levar até 4 horas, dependendo do seu nível de experiência.

</details>

<details>
<summary><strong>Há alguma etapa difícil durante a montagem?</strong></summary>

Na verdade, não; os testadores a descrevem como **divertida, simples e satisfatória**. Ferramentas básicas e paciência são suficientes. O **roteamento de cabos** e o **aperto correto das peças** são os elementos mais complicados. Quando você compra um Reachy Mini Lite ou Wireless, ele vem com um guia do usuário impresso, e você também tem acesso a um vídeo e ao guia digital.
Vídeo para Reachy Mini [BETA](https://www.youtube.com/watch?v=_r0cHySFbeY), LITE, WIRELESS

Guia Digital de Montagem para Reachy Mini [BETA](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide), LITE, WIRELESS

</details>

<details>
<summary><strong>Fiquei com 2 cabos e alguns parafusos após terminar a montagem. Isso é normal?</strong></summary>

Sim, isso é completamente normal.
Nós incluímos intencionalmente cabos e parafusos sobressalentes no kit, caso algumas peças sejam danificadas ou perdidas durante a montagem.

Você não precisa instalá-los.

</details>

<details>
<summary><strong>Meu Reachy Mini não se move na primeira inicialização. O que devo verificar?</strong></summary>

* **Fonte de alimentação:** Certifique-se de que a fonte de alimentação de 7V-5A esteja conectada. A conexão USB não é suficiente para alimentar os motores.
* **Cabos:** Verifique se todos os cabos estão totalmente inseridos. Cabos de alimentação soltos são uma causa comum de erros de "motor não respondendo".
* **Seção de solução de problemas:** Veja a seção Essencial de Solução de Problemas no topo desta página.

</details>

<details>
<summary><strong>Preciso iniciar o daemon manualmente?</strong></summary>

**NÃO**

- Com o Reachy Mini (Wireless), o daemon já está em execução no Raspberry Pi embarcado.
- Com o Reachy Mini Lite, você pode usar [o aplicativo desktop](/pt-br/reachymini_platforms_reachy_mini_lite_get_started).
- Se o aplicativo desktop não funcionar no seu sistema (por exemplo, ARM64, distribuições incomuns), você pode [instalar e usar diretamente o SDK em Python](/pt-br/reachymini_sdk_installation) — é uma alternativa totalmente suportada!

</details>



## 🔌 Conexão & Controle do Reachy Mini

<details>
<summary><strong>Como conecto o robô ao Wi‑Fi?</strong></summary>

Veja o [guia Reachy Mini Wireless](/pt-br/reachymini_platforms_reachy_mini_get_started) para instruções detalhadas sobre como se conectar ao Wi‑Fi.

</details>

<details>
<summary><strong>Como redefino o hotspot Wi‑Fi?</strong></summary>

Se você precisar redefinir o hotspot Wi‑Fi do robô (por exemplo, se não conseguir se conectar ou quiser mudar a rede), siga as instruções no [Guia de Redefinição de Wi‑Fi](/pt-br/reachymini_platforms_reachy_mini_reset).

</details>

<details>
<summary><strong>O PIN do Bluetooth no rótulo do número de série não funciona</strong></summary>

O PIN são os últimos 5 dígitos do número de série. Se o hardware foi substituído, o rótulo pode não corresponder mais. Leia o número de série real no robô via SSH:

```bash
dfu-util -l
```

Use o campo `serial` das linhas `Reachy Mini Audio DFU`, por exemplo, `serial="xxxxxxxx12345"` fornece o PIN `12345`.

</details>

<details>
<summary><strong>O robô tem uma Web API?</strong></summary>

Sim. O daemon fornece uma REST API (FastAPI) e suporte a WebSocket.
* **Docs:** `http://localhost:8000/docs` (disponível quando o daemon está em execução).
* **Recursos:** Obter estado, mover juntas, controlar o daemon.

Você pode usar a API para controlar o robô, obter seu estado e até mesmo controlar o próprio daemon. A API é implementada usando modelos [FastAPI](https://fastapi.tiangolo.com/) e [pydantic](https://docs.pydantic.dev/latest/).

Ela deve fornecer todos os endpoints necessários para interagir com o robô, incluindo:

- Obter o estado do robô (posições das juntas, status dos motores, etc.)
- Mover as juntas do robô ou definir poses específicas

A API é documentada usando OpenAPI, e você pode acessar todas as rotas disponíveis e testá-las em http://localhost:8000/docs quando o daemon estiver em execução. Você também pode acessar o esquema OpenAPI bruto em http://localhost:8000/openapi.json.

Isso pode ser útil se você quiser gerar código de cliente para sua linguagem de programação ou framework preferido, conectá-la ao seu aplicativo de IA ou até mesmo criar seu servidor MCP.

**Suporte a WebSocket**

A API também oferece suporte a conexões WebSocket para atualizações em tempo real. Por exemplo, você pode assinar atualizações do estado das juntas:

```
let ws = new WebSocket(`ws://127.0.0.1:8000/api/state/ws/full`);

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
};
```

</details>

<details>
<summary><strong>Por que eu preciso de um ambiente virtual (.venv)?</strong></summary>

Ajuda a evitar conflitos de pacotes durante a instalação do SDK.

</details>

<details>
<summary><strong>reachy-mini.local não resolve</strong></summary>

Uma unidade sem fio se anuncia como `reachy-mini.local` via mDNS. Isso funciona na maioria das redes domésticas e de escritório, mas pode falhar em algumas redes corporativas, de conferências ou de hotéis.

Se `reachy-mini.local` não resolver:
- Verifique a lista de clientes DHCP do seu roteador para encontrar o endereço IP do robô.
- Use o aplicativo Reachy Mini Control — ele pode descobrir o robô na rede local.
- Em último caso, faça uma varredura na sub-rede:
```bash
for i in $(seq 1 254); do
  curl -sf --connect-timeout 0.3 "http://192.168.1.${i}:8000/api/daemon/status" > /dev/null 2>&1 && echo "Found: 192.168.1.${i}"
done
```
Ajuste o prefixo `192.168.1.` para corresponder à sua rede.

</details>

<details>
<summary><strong>O robô e o computador não conseguem se comunicar no Wi‑Fi de conferência/hotel</strong></summary>

Muitas redes Wi‑Fi de conferências e hotéis ativam o **isolamento de clientes**, o que impede que dispositivos na mesma rede se comuniquem entre si. Sintomas: ambos os dispositivos estão conectados ao Wi‑Fi, ambos têm endereços IP na mesma sub-rede, mas não conseguem alcançar os endpoints HTTP um do outro.

**Solução alternativa:** Use o hotspot de um telefone celular. Conecte tanto o robô quanto o seu computador ao hotspot. Isso fornece uma rede simples em que os dispositivos podem se enxergar.

Como alternativa, use um adaptador USB-C-para-Ethernet e um cabo Ethernet para se conectar diretamente ao robô (versão Wireless).

</details>

<details>
<summary><strong>Como acessar os serviços da HuggingFace a partir da China?</strong></summary>

Você pode usar este espelho: https://hf-mirror.com/

Você precisará definir a seguinte variável de ambiente:
```bash
export HF_ENDPOINT=https://hf-mirror.com/
```

Observe que você também pode precisar usar espelhos para acessar serviços como PyPI e GitHub.

</details>

<details>
<summary><strong>Como usar o Reachy Mini atrás de um proxy HTTP?</strong></summary>

O Reachy Mini respeita as variáveis de ambiente padrão de proxy para todo o seu tráfego HTTP(S) de saída — autenticação do Hugging Face, listagem da loja de aplicativos, instalações e atualizações de aplicativos e o servidor de sinalização WebRTC:

```bash
export HTTP_PROXY=http://proxy.example.com:3128
export HTTPS_PROXY=http://proxy.example.com:3128
export NO_PROXY=localhost,127.0.0.1,reachy-mini.local
```

Mantenha endereços locais em `NO_PROXY` para que a API do daemon (usada pelo Reachy Mini Control) e a descoberta mDNS permaneçam acessíveis sem passar pelo proxy.

Para a versão Wireless, as variáveis devem ser visíveis para o serviço do daemon, não apenas para o seu shell. Adicione-as à unidade e reinicie-a:

```bash
sudo systemctl edit reachy-mini-daemon
```

Adicione o seguinte e salve:

```ini
[Service]
Environment="HTTP_PROXY=http://proxy.example.com:3128"
Environment="HTTPS_PROXY=http://proxy.example.com:3128"
Environment="NO_PROXY=localhost,127.0.0.1,reachy-mini.local"
```

```bash
sudo systemctl restart reachy-mini-daemon
```

Limitações conhecidas:

- Somente proxies HTTP sem autenticação são cobertos por nossos testes. Um proxy que exija credenciais (`http://user:password@host:port`) é repassado diretamente para o cliente subjacente e não é exercitado em CI.
- Proxies SOCKS não são suportados, e URLs de proxy devem ser simples `http://` (HTTPS é tunelado através deles); uma URL de proxy `https://` é ignorada com um aviso.
- `ALL_PROXY` não é respeitado — defina `HTTP_PROXY` e `HTTPS_PROXY` explicitamente.
- `~/.netrc` nunca é consultado para essas chamadas: o proxy é resolvido explicitamente por requisição.
- Os aplicativos são executados em seus próprios processos e herdam o ambiente do daemon, mas um aplicativo que faça suas próprias chamadas de rede é responsável por respeitar o proxy por conta própria.

</details>

<details>
<summary><strong>Como fazer o aplicativo de conversação funcionar na China?</strong></summary>

O aplicativo de conversação do Reachy Mini depende da API OpenAI gpt-realtime, que pode estar inacessível a partir da China.

A melhor solução alternativa no momento é configurar uma VPN na sua máquina (versão Lite), no robô (versão Wireless) ou diretamente no seu roteador.

Ao configurar as regras de roteamento da VPN:

1) Direcione o tráfego pela VPN, exceto o tráfego da rede local, para que o dispositivo permaneça acessível a partir da sua rede local.

Você deve colocar na lista de permissões:
- Sua faixa de IP da LAN local (por exemplo, 192.168.0.0/16, 192.168.1.0/24, etc., dependendo da configuração da sua rede).
- As seguintes portas:
  - 22 (SSH)
  - 8000 (daemon Reachy Mini)
  - 5353 TCP/UDP (mDNS / descoberta local)

Isso garante que o robô permaneça acessível e detectável localmente, e o mDNS (`reachy-mini.local`) deve continuar funcionando na rede.

2) Se a sua VPN suporta roteamento seletivo, uma abordagem melhor é rotear apenas os serviços externos necessários pela VPN, em vez de tunelar todo o tráfego HTTPS.

Se possível, configure a VPN para ser usada apenas para `huggingface.co` e `api.openai.com`.

Isso minimiza efeitos colaterais na rede e mantém os serviços locais funcionando normalmente.

Para a versão Wireless, depois que a VPN estiver configurada no robô, reinicie o daemon para que as alterações entrem em vigor:
```
sudo systemctl restart reachy-mini-daemon
```
Para verificar se o robô está acessível a partir de um dispositivo na mesma rede, você pode executar:
```
ping reachy-mini.local
```

_Abordagens baseadas em modelos de pesos abertos estão em desenvolvimento, fique ligado!_

</details>


## 🤖 Hardware, Motores e Limites

<details>
<summary><strong>Onde posso encontrar mais informações sobre o hardware?</strong></summary>

Consulte a [página de Hardware do Reachy Mini](/pt-br/reachymini_platforms_reachy_mini_hardware) para informações detalhadas sobre os componentes de hardware do robô.

</details>

<details>
<summary><strong>Quais são os limites de segurança (Cabeça e Corpo)?</strong></summary>

Se você comandar uma pose fora desses limites, o robô irá automaticamente limitar para a pose segura mais próxima.

* **Giro do Corpo (Body Yaw):** [-180°, 180°].
* **Inclinação/Rolagem da Cabeça (Head Pitch/Roll):** [-40°, 40°].
* **Giro da Cabeça (Head Yaw):** [-180°, 180°].
* **Limite Combinado:** A diferença entre `body_yaw` e `head_yaw` deve estar dentro de **[-65°, 65°]**.

</details>

<details>
<summary><strong>Por que os motores estão "moles" ou "rígidos"? (Compliancy)</strong></summary>

* **`enable_motors()`**: Motores **LIGADOS** (rígidos). O robô mantém a posição.
* **`disable_motors()`**: Motores **DESLIGADOS** (moles). Você pode movê-lo com a mão.
* **`make_motors_compliant()`**: Motores **LIGADOS porém suaves**. Útil para ensino por demonstração.

</details>

<details>
<summary><strong>Como acesso os parâmetros dos motores?</strong></summary>

1. Você pode consultar fazendo o scan dos motores usando o [script scan_motors.py](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/tools/scan_motors.py).

- Se o seu robô é Lite, você pode executar o script diretamente no seu computador:
```bash
python -m reachy_mini.tools.scan_motors
```
- Se o seu robô é Wireless, faça ssh no robô:
```bash
ssh pollen@reachy-mini.local
```
- Ative o venv:
```bash
source /venvs/mini_daemon/bin/activate
```
- E execute o script (os motores precisam estar ligados para isso!):
```bash
python -m reachy_mini.tools.scan_motors --wireless
```
- Ele deve imprimir a lista de motores detectados. Você deve ter todos os motores com baudrate 1000000, com os seguintes IDs: 10,11, 12, 13, 14, 15,17, 18. Se alguns estiverem faltando, verifique os cabos novamente. Se houver um motor com um ID ou baudrate diferente, entre em contato com o suporte.

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

</details>

<details>
<summary><strong>Os motores param de responder depois de um tempo.</strong></summary>

* Verifique a conexão da fonte de alimentação.
* Os motores podem ter entrado em modo de proteção térmica (superaquecimento). Desligue e ligue novamente.
* Atualizar o SDK (`pip install -U reachy-mini`) resolveu isso para alguns usuários.
* Se o led do motor piscar em vermelho, veja a seção "Motor piscando em vermelho ou Erro de Sobrecarga" na parte de Solução de Problemas Essenciais acima.

</details>

<details>
<summary><strong>A bateria possui recursos de segurança?</strong></summary>

A versão Wireless inclui um carregador de bateria adequado.
A bateria integra um BMS com um sensor de temperatura também.

</details>

<details>
<summary><strong>Como vejo a carga restante da bateria?</strong></summary>

Não temos a possibilidade de verificar o status da bateria, essa é uma limitação conhecida do design.

Nós só temos a indicação por led de "bateria fraca" quando é hora de carregá-la. (verde -> laranja -> vermelho)

</details>

<details>
<summary><strong>Como remover a bateria</strong></summary>

- Primeiro, verifique se o led verde não está aceso.
- Remova os 3 parafusos na parte de baixo e puxe um pouco o pé para fora.
![remove_foot](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/remove_foot.png)
- Desconecte o conector indicado (seta vermelha) para poder remover a bateria. Deve haver uma fita dupla face que mantém a bateria no lugar, então pode ser um pouco difícil de remover.
![battery_location](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/battery_connector.png)
- Quando você for remontar, faça esses passos novamente na ordem inversa. Apenas tome cuidado para não prender nenhum cabo.

</details>

<details>
<summary><strong>A cabeça pode tocar o corpo durante alguns movimentos oficiais</strong></summary>

Esse comportamento é esperado e não é um bug de hardware ou software.
No entanto, como pode ser confuso, vamos atualizar esses movimentos para evitar esse contato.

</details>

<details>
<summary><strong>Posso modificar a aparência (Skins/CAD)?</strong></summary>

* **CAD:** Os arquivos STEP completos ainda não foram publicados, mas planejamos disponibilizá-los no futuro. Enquanto isso, você pode encontrar alguns arquivos STL na [pasta assets](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/descriptions/reachy_mini/mjcf/assets) do repositório.
* **Skins:** Sim, a comunidade criou versões personalizadas. Alguns arquivos STEP de "skin" foram compartilhados no Discord, no canal ["Pimp my Reachy Mini"](https://discord.com/channels/519098054377340948/1453340883775651861).

</details>

<details>
<summary><strong>O cabo flat do meu microfone está quebrado</strong></summary>

As especificações do cabo do microfone são as seguintes:
- Cabo flat flexível FFC/FPC
- 12 pinos
- Espaçamento de 0,5 mm
- Tipo A (conectores do mesmo lado)
- 15 mm de comprimento

Aqui estão algumas referências se você estiver procurando um cabo de substituição para o seu microfone:
- [Amazon](https://www.amazon.fr/dp/B09TR4X1BP?ref=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&ref_=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&social_share=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z)
- [Farnell](https://fr.farnell.com/molex/15020-0127/cordon-ffc-12-cond-152mm-blanc/dp/3862090)

</details>


## 🐍 SDK, Apps e Programação

<details>
<summary><strong>Como me conecto a partir do Python?</strong></summary>

Use a classe `ReachyMini`.

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
    print(mini.state)
```

</details>

<details>
<summary><strong>Como crio um novo App?</strong></summary>

Use o assistente de apps via CLI:

```bash
reachy-mini-app-assistant create my_app_name /path/to/destination --publish
```

Veja o guia completo: [Construindo e Publicando Apps](/pt-br/reachymini_sdk_apps) — cobre estrutura do app, testes, publicação, depuração e implantação.

</details>

<details>
<summary><strong>Meu app trava silenciosamente ou não inicia</strong></summary>

Se o seu app depende de um pacote não instalado no ambiente, ele irá falhar ao importar sem erro visível. Teste as importações manualmente:

```bash
# On Wireless
ssh pollen@reachy-mini.local "/venvs/apps_venv/bin/python3 -c 'from my_app.main import MyApp'"

# On Lite / local
python -c "from my_app.main import MyApp"
```

Para mais dicas de depuração (visualização de logs, armadilhas comuns), veja [Depurando Apps](/pt-br/reachymini_sdk_apps#depurando-apps).

</details>

<details>
<summary><strong>Instalar apps diretamente pelo Reachy Mini Control é suportado?</strong></summary>

Sim! Você pode instalar apps diretamente pelo Reachy Mini Control se forem nativos, ou adicioná-los aos seus favoritos se forem baseados na web.

</details>

<details>
<summary><strong>Todas as instalações de apps falham no Windows!</strong></summary>

Isso pode estar relacionado a permissões insuficientes para criar symlinks no Windows. Você pode definir a variável de ambiente `HF_HUB_DISABLE_SYMLINKS_WARNING` para 1 para remover os avisos que causam a falha.

Em um terminal, execute:
```powershell
set HF_HUB_DISABLE_SYMLINKS_WARNING=1
```

</details>

<details>
<summary><strong>A instalação de apps a partir do Hugging Face falha.</strong></summary>

Atualize o seu SDK. As primeiras versões tinham um bug com a instalação de Spaces.

```bash
pip install -U reachy-mini
```

</details>

<details>
<summary><strong>Existe um modo de Simulação?</strong></summary>

Sim, via MuJoCo. Ainda está em desenvolvimento, mas você pode executar código com a flag `--sim` ou `ReachyMini(media_backend="no_media")` se estiver apenas testando lógica sem física.

</details>

<details>
<summary><strong>Como depuro um app na versão Wireless?</strong></summary>

Faça SSH no computador embarcado, clone (ou copie) o seu app e execute-o manualmente. Isso reproduz o que o Reachy Mini Control faz ao iniciar o seu app.

```bash
ssh pollen@reachy-mini.local
# password: root
cd your_app_name
python your_app_name/main.py
```

Sua interface gráfica abrirá no endereço de sempre (por exemplo, `http://reachy-mini.local:8042`).

</details>



## 🕹️ Movendo o Robô

<details>
<summary><strong>Como movo a cabeça?</strong></summary>

Use `goto_target` com `create_head_pose`:

```python
from reachy_mini.utils import create_head_pose

# ... inside with ReachyMini() as mini:
mini.goto_target(head=create_head_pose(yaw=-10, pitch=20))
```

</details>

<details>
<summary><strong>Qual é a diferença entre `goto_target` e `set_target`?</strong></summary>

* **`goto_target`**: **Suave**. Interpola o movimento ao longo do tempo (padrão 0,5 s). Melhor para gestos.
* **`set_target`**: **Instantâneo**. Define o alvo imediatamente. Melhor para controle de alta frequência (teleoperação, trajetórias matemáticas).

</details>

<details>
<summary><strong>Como faço para gravar e reproduzir movimentos?</strong></summary>

**Gravação:**
Chame `start_recording()` e `stop_recording()` em torno do seu loop de controle.

```python
mini.start_recording()
# ... move robot ...
move = mini.stop_recording()
```

**Reprodução:**
Use a classe `RecordedMoves` para carregar movimentos da [biblioteca do Hugging Face](https://github.com/pollen-robotics/reachy_mini_dances_library).

```python
mini.play_move(recorded_moves.get("dance_1"))
```

</details>

<details>
<summary><strong>Os movimentos do meu robô parecem trêmulos. O loop de controle está rodando corretamente?</strong></summary>

Você pode verificar se o loop de controle do motor está rodando corretamente checando o status do daemon:
- via o SDK
```python
mini = ReachyMini()
print(mini.client.get_status())
```
- via a REST API em `http://localhost:8000/docs` em um Lite e `http://reachy-mini.local:8000/docs` para o Wireless (procure pelo endpoint `/api/daemon/status`)

Você deve ver valores em torno de 50Hz (~20ms de período):
```python
{
  ...
"motor_controller": "ControlLoopStats(period=~19.99ms, read_dt=~1.94 ms, write_dt=~0.19 ms)"
  ...
}
```

Se o período for muito maior que 20ms, significa que o loop de controle não está rodando rápido o suficiente. Isso pode ser devido a:
- Carga pesada de CPU no computador (por exemplo, outros apps usando muita CPU).
- (apenas para Lite) alta latência USB (tente configurar sua porta serial).

</details>



<details>
<summary><strong>Meu robô não se move e nenhum erro é reportado</strong></summary>

Se comandos de movimento são aceitos mas nada acontece, os motores provavelmente estão desativados. Com o torque desligado o daemon ainda aceita todos os comandos, relata sucesso e mantém seu loop de controle rodando a 50Hz sem erros, então nada indica que o robô não está se movendo.

Duas situações comuns deixam os motores desativados:
- O robô está dormindo e mole depois que um app foi encerrado, ou depois que o daemon acabou de iniciar.
- `wake_up()` foi chamado sozinho. Ele executa a pose de despertar, emoção e som, mas não ativa o torque.

Verifique o modo atual:

```python
mini = ReachyMini()
print(mini.client.get_status().backend_status.motor_control_mode)
```

Se aparecer `MotorControlMode.Disabled`, ative os motores antes de mover o robô:

```python
mini.enable_motors()
mini.wake_up()
```

Observe que um robô mole mantém a cabeça abaixada na posição de sono, próxima ao corpo. A câmera então fica voltada para o interior da carcaça e retorna uma imagem escura, quase uniforme, com exposição e ganho no máximo, o que é fácil de confundir com uma câmera quebrada. Verifique se a cabeça está realmente levantada antes de investigar a câmera.

</details>

## 👁️ Visão e Áudio

<details>
<summary><strong>O volume está muito baixo (Linux)</strong></summary>

1.  Execute `alsamixer`.
2.  Defina **PCM1** para 100%.
3.  Use **PCM,0** para ajustar o volume global.

Para torná-lo permanente:
```bash
CARD=$(aplay -l | grep -i "reSpeaker" | head -n1 | sed -n 's/^card \([0-9]*\):.*/\1/p')
amixer -c "$CARD" set PCM,1 100%
sudo alsactl store "$CARD"
```

Este é um [problema conhecido](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/02_setting_up_the_hardware.html#low-volume-of-playback-audio-on-linux-for-project-ua) da placa de som baseada em XVF3800.

</details>

<details>
<summary><strong>A qualidade do som não é boa / o alto-falante soa "abafado".</strong></summary>

O daemon já aplica um equalizador padrão para compensar a coloração acústica da carcaça da cabeça. Se o som ainda não estiver do seu agrado, os ganhos por banda podem ser ajustados — ou o EQ desativado — via a entrada `speaker_eq_gains` no arquivo de configuração do daemon.

</details>

<details>
<summary><strong>Como faço para obter frames da câmera?</strong></summary>

Use o objeto `media`.

```python
with ReachyMini() as mini:
    frame = mini.media.get_frame()
    # Returns a numpy array (BGR format, compatible with OpenCV)
```

</details>

<details>
<summary><strong>Como faço para usar o Microfone / Alto-falante?</strong></summary>

```python
# Get audio
sample = mini.media.get_audio_sample()

# Play audio
mini.media.push_audio_sample(numpy_chunk)
```

</details>

<details>
<summary><strong>Posso obter a saída bruta do microfone?</strong></summary>

Sim — instale o [firmware de 6 canais](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/firmware).

</details>

<details>
<summary><strong>Como faço para que o Reachy olhe para algo?</strong></summary>

* **2D (Imagem):** `mini.look_at_image(x, y)` - (0,0 é o canto superior esquerdo).
* **3D (Mundo):** `mini.look_at_world(x, y, z)` - Coordenadas no referencial do robô.

</details>

<details>
<summary><strong>O rastreamento de rosto parece lento.</strong></summary>

O desempenho depende fortemente das condições de iluminação. Certifique-se de que o rosto esteja bem iluminado. O backend LOCAL (GStreamer IPC) oferece a menor latência para aplicações no dispositivo.

</details>

<details>
<summary><strong>A câmera não consegue focar.</strong></summary>

Ao executar o exemplo look_at, é fácil ver se a câmera está focando colocando sua mão na frente dela. Se não estiver, a câmera pode estar fisicamente bloqueada. Ela é presa à parte preta por 4 parafusos — afrouxe-os muito levemente, cerca de 1/8 de volta.

![camera_focus](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/troubleshooting_screw_focus_camera.png)

</details>

<details>
<summary><strong>A câmera não é detectada (e todos os apps falham ao iniciar)</strong></summary>

Os movimentos da cabeça e do corpo funcionam, mas todos os apps falham ao iniciar, frequentemente com uma conexão recusada em vez de qualquer erro mencionando a câmera. O daemon precisa da câmera na inicialização, então uma câmera que não é vista derruba toda a pilha de mídia junto com ela.

Verifique primeiro o cabo flat da câmera: se ele está totalmente encaixado em ambas as extremidades e se está na posição correta. Mesma regra que o cabo do microfone — o lado azul para cima, ou o lado com "Main Board" escrito voltado para cima. Desligue o robô antes de recolocá-lo e depois ligue-o novamente.

Para confirmar em um Wireless:

```bash
rpicam-hello --list-cameras     # lists imx708_wide when the camera is seen
dmesg | grep "camera module ID" # one line per detected sensor
```

Um robô saudável imprime algo como `imx708 0-001a: camera module ID 0x0302`. Se nenhum dos comandos relatar um sensor, a câmera realmente não está sendo vista e o cabo é o primeiro suspeito.

> **Nota:** Uma linha `failed to read chip id 708, with error -5` em `dmesg` é normal e não é um sintoma. O CM4 expõe duas portas CSI e o Reachy Mini usa apenas uma, então a porta não utilizada sempre falha ao ser sondada na inicialização. Apenas a ausência de uma linha `camera module ID` significa que a câmera está ausente.

</details>

<details>
<summary><strong>Como verifico se o sistema de som está funcionando?</strong></summary>

### Versão Reachy Mini Lite

A maneira mais fácil de testar a versão Lite é usar diretamente o dispositivo *Pollen Robotics Reachy Mini Audio* do seu computador para verificar o funcionamento adequado.

### Versão Reachy Mini Wireless

Para a versão Wireless, você pode usar os seguintes comandos GStreamer para testar gravação e reprodução de áudio:

No caso da versão Wireless, você pode usar os seguintes comandos:
```bash
# record a sound
gst-launch-1.0 -e alsasrc device="reachymini_audio_src" ! audioconvert ! audioresample ! wavenc ! filesink location="test.wav"
# playback the recording
gst-launch-1.0 filesrc location=test.wav ! wavparse ! audioconvert ! alsasink device=reachymini_audio_sink
#playback a test sound (pink noise)
gst-launch-1.0 audiotestsrc wave="pink-noise" ! audioconvert ! audioresample ! alsasink device="reachymini_audio_sink"
```

**Teste avançado:**
Você pode reproduzir um som enquanto grava simultaneamente para testar o desempenho do cancelamento de eco. Isso ajuda a verificar se o array de microfones está processando o áudio corretamente e cancelando o eco dos alto-falantes.

**Dicas de solução de problemas:**
- Certifique-se de que o arquivo `.asoundrc` exista no diretório home
- Verifique se o microfone é detectado: `arecord -l`
- Verifique se o alto-falante é detectado: `aplay -l`
- Se a configuração da placa de áudio falhar com `No Reachy Mini Audio USB device found!`,
  execute o código do SDK na máquina que tem a placa de áudio ReSpeaker conectada.
  Para Lite esta é o seu computador; para Wireless este é o próprio robô.

</details>



## 🔧 Mensagens de erro específicas e correções

<details>
<summary><strong>Erros de hardware do motor &#39;&lt;name&gt;&#39;: [&#39;Input Voltage Error&#39;]</strong></summary>

Estamos usando uma tensão mais alta no Reachy Mini, é de propósito :)

</details>



<details>
<summary><strong>Erro: "OSError: PortAudio library not found"</strong></summary>

Esse erro ocorre ao usar `sounddevice` diretamente (por exemplo, após chamar `release_media()`). Instale a dependência de sistema:

```bash
sudo apt-get install libportaudio2
```

</details>

<details>
<summary><strong>Aviso: "Circular buffer overrun" (Simulação/Mujoco)</strong></summary>

Isso aparece se você se conectar ao robô mas não consumir os frames de vídeo, fazendo com que o buffer encha.
* **Correção:** Se você não precisa de vídeo, inicialize com `ReachyMini(media_backend="no_media")`.

</details>

<details>
<summary><strong>App Conversation trava ao iniciar após atualização (perfil personalizado)</strong></summary>

Se você criou um perfil personalizado para o app Conversation em uma versão mais antiga e o app agora sai imediatamente após a atualização, o app está procurando o perfil em um caminho que não existe mais — a localização padrão do perfil mudou em um lançamento recente.

**Sintomas** — os logs terminam com um `SystemExit: 1` gerado a partir de `prompts.py`, por exemplo:
```
File ".../reachy_mini_conversation_app/prompts.py", line 88, in get_session_instructions
    sys.exit(1)
SystemExit: 1
```

**Correção (recomendada):** No app de desktop Reachy Mini Control, clique em **Reset apps environment** (veja "Falha ao inicializar ou atualizar / problemas com o ambiente Python" acima). Os apps precisarão ser reinstalados depois.

**Alternativa (avançado):** Faça SSH no robô (Wireless: `ssh pollen@reachy-mini.local`) e exclua diretamente o venv dos apps, depois reinstale o app Conversation:
```bash
rm -rf /venvs/apps_venv
```

</details>


<details>
<summary><strong>Sem entrada de microfone / Direção de chegada (Unidades Beta)</strong></summary>

* **Sem entrada:** Requer firmware 2.1.3. Execute o [script de atualização](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/firmware/update.sh).
* **Sem direção:** Requer firmware 2.1.0+.
* Verifique se o cabo flat flexível está instalado na direção correta (slides 45-47 do guia de montagem).

</details>

<details>
<summary><strong>Script de restauração de parâmetros do servo</strong></summary>

Quando um servo (por exemplo, S5) apresenta parâmetros anormais, você pode usar a ferramenta de backup/restauração para gravar novamente os parâmetros padrão.

**Arquivos envolvidos**

- `dynamixel_xl330_backup_restore.py` — ferramenta de backup/restauração
- `DYNAMIXEL_XL330_BACKUP.json` — arquivo de parâmetros padrão para este modelo

URLs para download: [dynamixel_xl330_backup_restore.py](https://files.seeedstudio.com/wiki/reachymini/dynamixel_xl330_backup_restore.py) e [DYNAMIXEL_XL330_BACKUP.json](https://files.seeedstudio.com/wiki/reachymini/DYNAMIXEL_XL330_BACKUP.json)

**Pré-requisitos**

- Python 3; Reachy Mini conectado ao computador via U2D2, servos alimentados normalmente (mesmo que na depuração do dia a dia).
- Instale as dependências: `pip install dynamixel-sdk pyserial`
- Coloque ambos os arquivos na mesma pasta e execute todos os comandos a partir dessa pasta.

**Etapas**

1. **Inicie a ferramenta**

   ```bash
   python dynamixel_xl330_backup_restore.py
   ```

   Selecione a porta serial do U2D2 e baudrate 1.000.000. O menu principal primeiro faz uma varredura e lista todos os servos — confirme que todos os seis estão presentes, modelo XL330-M288, e anote o ID real de S5.

2. **Backup seguro (obrigatório)**

   Selecione a opção de menu 2 (Export / backup ALL) para exportar os parâmetros atuais de todos os seis motores para um arquivo JSON (nome padrão como `DYNAMIXEL_XL330_BACKUP_timestamp.json`). Renomeie para `backup_all.json` e guarde. Este é o estado original pré-restauração, útil para rollback e para verificar diferenças de registradores.

3. **Restaurar parâmetros padrão para S5**

   Selecione a opção de menu 3 (Restore) e escolha o arquivo de parâmetros padrão que fornecemos na lista de JSON. Selecione o modo de mapeamento 1 (Same ID). O script exibe um "plano de restauração" mostrando quais servos serão gravados (ID atual → ID do backup → ID final).

   Confirme que S5 está incluído e que o ID final de cada motor corresponde ao seu ID atual (sem renomear), depois digite `RESTORE`.

   O script irá: forçar Torque off → gravar cada parâmetro de config/PID/profile/Indirect Address → ler de volta e verificar cada item → revisão completa final; o Torque permanece desligado durante todo o processo, sem movimentos inesperados.

   > Se o arquivo de parâmetros padrão contiver apenas a entrada de S5, somente S5 será gravado; se contiver todos os seis, todos os seis serão gravados com os parâmetros padrão. Ambos os casos são claramente listados no "plano de restauração" — revise antes de confirmar.

4. **Saia do script, desligue e ligue novamente a alimentação dos servos e volte a testar o S5 na carga de altura de curso total no robô.**

**Checklist**

- Após regravar, o S5 consegue alcançar o topo sozinho (ainda precisa de um empurrão / som de zumbido)?
- A saída do script é `RESTORE + VERIFY SUCCESS` ou há alguma linha `[FAIL]` (se houver, envie as linhas correspondentes)?
- O arquivo `backup_all.json` da etapa 2.

**Notas**

- Após regravar, o Torque estar desligado é normal — o software do robô o habilitará na energização.
- Se o script indicar `MODEL MISMATCH`, significa que o modelo de S5 é diferente dos outros motores — esta é uma pista importante, por favor nos informe.
- Se o "plano de restauração" não incluir S5, ou se o ID final não corresponder ao ID atual, não digite `RESTORE` — entre em contato conosco (provavelmente o ID no arquivo de parâmetros não corresponde ao ID real de S5; forneceremos um arquivo corrigido).
- Se a regravação + verificação forem bem-sucedidas, mas o problema persistir, a configuração é confirmada como normal, o que respalda o prosseguimento com uma substituição.

</details>

## 📦 Envio & Garantia

<details>
<summary><strong>Meu pacote está danificado ou faltando.</strong></summary>

Entre em contato imediatamente com a equipe da **Pollen Robotics**. Você pode nos enviar um e-mail para sales@pollen-robotics.com com fotos do pacote, número do recibo ou número da fatura e seu nome completo. Em seguida, verificaremos com a transportadora e manteremos você atualizado.

</details>

<details>
<summary><strong>Política de reembolso</strong></summary>

* **Antes do envio:** Entre em contato com `sales@pollen-robotics.com` para um reembolso de 100%.
* **Após o envio:** Você tem 30 dias para devolver seu pacote. Entre em contato com o setor de vendas (sales@pollen-robotics.com) com o comprovante de entrega e o número da fatura ou do recibo. Se tiver comentários / feedback, por favor nos informe, nosso foco é construir um robô que a comunidade de código aberto goste de montar.

</details>

<details>
<summary><strong>Garantia</strong></summary>

Se uma peça estiver quebrada/com mau funcionamento, a equipe de pós-venda da Pollen determinará se é um defeito de hardware coberto pela garantia. Em seguida, nosso fabricante fornecerá peças de reparo ou substituição. Você pode nos enviar um e-mail para sales@pollen-robotics.com com fotos do problema, número do recibo ou número da fatura e seu nome completo.

</details>


## 💬 Ainda com problemas?

Se você não encontrou a resposta para o seu problema neste guia, entre em contato diretamente conosco!
A equipe da Pollen Robotics e a comunidade estão ativas no Discord para ajudar você a solucionar problemas específicos.

👉 **[Entre no Discord da Pollen Robotics](https://discord.gg/Y7FgMqHsub)**