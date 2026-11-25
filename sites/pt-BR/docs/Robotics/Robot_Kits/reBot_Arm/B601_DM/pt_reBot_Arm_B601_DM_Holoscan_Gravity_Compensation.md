---
description: "Execute o exemplo do Holoscan 5 da NVIDIA no Ubuntu 24.04 para verificar a compensação de gravidade no reBot Arm B601-DM e medir o loop de controle com o Nsight Systems."
title: "reBot-DM Holoscan5: Compensação de gravidade"
sidebar_label: "reBot-DM Holoscan5: Compensação de gravidade"
keywords:
  - reBot Arm B601-DM
  - NVIDIA Holoscan
  - compensação de gravidade
  - Pinocchio
slug: /rebot_b601_dm_holoscan_gravity_compensation
sku: 100065783, 100095532
last_update:
  date: 2026-11-25
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-11-25'
updatedAt: '2026-11-25'
url: https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_holoscan_gravity_compensation/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm.png" alt="Braço robótico reBot Arm B601-DM" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Adquira agora</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p align="center">
  <strong>Taxa alvo de 400 Hz · Dinâmica com Pinocchio · Análise de latência com Nsight Systems</strong>
</p>

Este tutorial usa o NVIDIA Holoscan 5 para ler o feedback das juntas, calcular o torque de compensação de gravidade e enviar comandos aos motores em um único loop de controle. Os motores sustentam o peso do **reBot Arm B601-DM**, para que você possa reposicioná-lo com a mão. [Blog técnico da NVIDIA](https://developer.nvidia.com/blog/make-a-robot-arm-feel-weightless-with-nvidia-holoscan-5/)

## Pré-requisitos

| Item | Requisito |
| --- | --- |
| Braço robótico | reBot Arm B601-DM com motores Damiao e a garra instalada |
| Conectividade | Fonte de alimentação do B601-DM, placa controladora USB-CAN e cabo de dados USB |
| Host | Ubuntu 24.04 x86_64 com acesso à internet para baixar o código-fonte e as dependências |
| Ambiente de execução | Python 3.12, Holoscan 5.0.0 e um driver NVIDIA compatível com CUDA 13 |

Se o braço ainda não estiver montado, siga o início rápido para fixar a base, concluir a fiação e verificar os IDs dos motores e as posições zero das juntas. Desligue a energia antes de conectar ou desconectar a alimentação ou o chicote CAN. [B601-DM Início Rápido](https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/)

Verifique o sistema e o driver no host.

```bash
uname -m
getconf GNU_LIBC_VERSION
nvidia-smi
```

Espere `x86_64`, glibc 2.39 ou posterior, e uma saída de `nvidia-smi` que liste a GPU. A NVIDIA especifica um driver R580 ou posterior compatível com CUDA 13 para o Holoscan 5. Se o driver estiver ausente ou for antigo demais, use o utilitário Drivers adicionais do Ubuntu ou `sudo ubuntu-drivers list` para encontrar um ramo de driver para o seu hardware. Siga o guia de instalação do Ubuntu, reinicie e verifique novamente. No Jetson, verifique primeiro a versão correspondente do JetPack SDK. [Requisitos de instalação do Holoscan SDK](https://docs.nvidia.com/holoscan/sdk-user-guide/setup/sdk-installation) · [Instalação de drivers NVIDIA no Ubuntu](https://ubuntu.com/server/docs/how-to/graphics/install-nvidia-drivers/)

:::tip

O Ubuntu 22.04 inclui o glibc 2.35. Mesmo com o Python 3.12 instalado no Conda, execute o Holoscan 5 em um host ou em um contêiner que atenda ao requisito de glibc. Os comandos deste guia usam o ambiente nativo de Python do Ubuntu 24.04. [Requisitos do wheel do Holoscan](https://pypi.org/project/holoscan-core-cu13/5.0.0/)

:::

## Executar a compensação de gravidade

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Configurar o ambiente e verificar o grafo de controle

Baixe o exemplo da NVIDIA no Bash. Use a revisão fixada para que os comandos, a configuração e os testes abaixo correspondam ao código-fonte.

```bash
sudo apt update
sudo apt install -y ca-certificates git nano python3.12-venv libgl1 libglib2.0-0t64 libgomp1 psmisc

git clone https://github.com/nvidia-holoscan/holoscan-tutorials.git
cd holoscan-tutorials
git checkout --detach e79b1a662f358dca734d8a4426c0aeb60699e264
cd tutorials/rebot-gravity-compensation
```

Escolha uma forma de criar um ambiente Python 3.12.

<Tabs>
<TabItem value="venv" label="Python venv">

```bash
python3.12 -m venv .venv
source .venv/bin/activate
```

</TabItem>
<TabItem value="conda" label="Conda">

Se você já tem o Conda, crie um ambiente dedicado. Você pode escolher outro nome de ambiente. [Guia de instalação do Conda](https://docs.conda.io/projects/conda/en/stable/user-guide/install/linux.html)

```bash
conda create -n holoscan-rebot python=3.12 pip -y
conda activate holoscan-rebot
```

</TabItem>
</Tabs>

Permaneça no diretório do exemplo com o ambiente ativo. Baixe o modelo e instale as dependências do exemplo.

```bash
python --version
python scripts/fetch-urdf.py
test -s urdf/DM/urdf/ReBot_Arm_DM.urdf

python -m pip install --only-binary=:all: -r requirements-python.txt \
  'holoscan==5.0.0' 'nvidia-cuda-runtime==13.0.96'
python -m pip check
```

O script de download obtém o URDF de uma revisão fixada da Seeed Studio, verifica o arquivo de origem e preserva os dados de dinâmica. O arquivo de requisitos instala o Pinocchio 3.9.0 e o motorbridge 0.5.0. O pacote pip do Pinocchio é `pin`, e o nome de importação em Python é `pinocchio`. [Código-fonte e dependências do exemplo oficial](https://github.com/nvidia-holoscan/holoscan-tutorials/tree/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation)

O grafo de controle é executado na CPU e, ao importar o Holoscan, o runtime CUDA também é carregado. Estes comandos adicionam as bibliotecas compartilhadas do wheel ao caminho de busca de bibliotecas do terminal atual. Sempre que abrir um novo terminal, volte ao diretório do exemplo, reative o ambiente e execute estes comandos novamente. [Bibliotecas de runtime do wheel do Holoscan](https://pypi.org/project/holoscan-core-cu13/5.0.0/)

```bash
CUDA_LIB_DIR="$(python - <<'PY'
from importlib.metadata import distribution

runtime = distribution("nvidia-cuda-runtime")
library = next(file for file in runtime.files if file.name == "libcudart.so.13")
print(runtime.locate_file(library).parent)
PY
)"
test -n "$CUDA_LIB_DIR" && export LD_LIBRARY_PATH="$CUDA_LIB_DIR${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"
python python/gravity_compensation.py --help
```

Antes de conectar o braço, você pode carregar o modelo e compilar o grafo de controle. Esta verificação inicializa o modelo e compila o grafo sem abrir a porta serial nem habilitar os motores.

```bash
PYTHONPATH=python python - <<'PY'
import holoscan as hsdk
from gravity_compensation import build_graph, load_configuration
from rebot_gravity import GravityCompensation
from rebot_robot import Robot

config, params = load_configuration("config/rebotarm_dm.yaml")
controller = GravityCompensation(config, params)
controller.initialize()
plan = hsdk.compile(build_graph(Robot(config), controller), hsdk.CompileOptions())
if not plan:
    raise SystemExit(plan.summary())
print(f"URDF loaded: nq={controller.model.nq}, nv={controller.model.nv}")
print("Control graph compiled successfully.")
PY
```

Espere `nq=8, nv=8` e uma mensagem de compilação bem-sucedida. O modelo tem seis coordenadas do braço e duas coordenadas dos dedos. O braço físico tem sete motores. Para uma verificação de regressão de software mais completa, execute mais adiante neste guia os testes com motores simulados.

</div>
</section>
<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Conectar o braço e configurar a porta serial

Confirme que a base está fixa, conecte o cabo de dados USB e ligue o braço. Execute o comando a seguir para conceder acesso de leitura e escrita aos dispositivos seriais.

```bash
sudo chmod 666 /dev/ttyACM*
```

Copie a configuração oficial e edite `channel` na cópia. Substitua o caminho de exemplo pela sua porta serial real.

```bash
cp config/rebotarm_dm.yaml config/rebotarm_local.yaml
nano config/rebotarm_local.yaml
```

```yaml
channel: "/dev/ttyACM0"
```

| Configuração | Valor do exemplo oficial |
| --- | --- |
| IDs dos motores e IDs de feedback | 1–7 e 17–23, respectivamente, em decimal |
| Modelos de motor | `4340P` para `joint1`–`joint3`, e `4310` para `joint4`–`joint6` e a garra |
| Taxa de baud da serial | 921600 |
| Ganhos do braço | `kp: 1.5` e `kd: 1.0` |
| Escala do torque de gravidade e direção da junta | `tau_scale` e `joint_direction` têm o padrão 1 nas seis juntas do braço |
| Watchdog de comandos | 100 ms |

Mantenha os ganhos, as direções e a escala oficiais na primeira execução. Se os IDs dos motores, as orientações de montagem ou as posições zero das juntas forem diferentes do hardware real, confira-os primeiro no início rápido. Se mudar a orientação da base ou adicionar uma carga, use um modelo dinâmico que leve a mudança em conta. [Configuração oficial dos motores](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/config/rebotarm_dm.yaml)

</div>
</section>
<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### Iniciar, verificar e parar o controlador

:::warning

O comando de início habilita os motores físicos. Remova qualquer carga extra, libere a faixa de movimento e coloque o braço em uma postura em que ele continue apoiado se o torque for perdido. Garanta que alguém no local possa cortar a energia imediatamente. Uma falha também pode fazer o controlador remover o torque de sustentação.

:::

Execute os comandos no mesmo ambiente. Garanta que o controlador tenha acesso exclusivo à porta serial.

```bash
unset MOTORBRIDGE_LIB
python python/gravity_compensation.py config/rebotarm_local.yaml
```

O programa verifica o modelo, a postura atual e o estado dos motores, configura o watchdog e começa a enviar comandos. Quando a mensagem abaixo aparecer, guie o braço lentamente em um movimento pequeno. Confira se ele sustenta o próprio peso e acompanha a mão. Se ele empurrar de forma perceptível, cair, oscilar ou informar um erro de motor, apoie o braço e pare o controlador antes de investigar.

```text
Gravity compensation active.
```

**Para encerrar normalmente, primeiro guie o braço de volta a uma postura com apoio e depois pressione `Ctrl+C`.** O programa tenta desabilitar os motores ao sair, o que remove o torque de sustentação. Em uma saída normal, o terminal mostra uma mensagem de parada e a contagem de lotes de comandos.

</div>
</section>
</div>

## Como funciona o loop de controle

| Operador | Função |
| --- | --- |
| `joint_feedback` | É executado em um período de 2.5 ms e lê posições, velocidades e o estado dos motores |
| `gravity` | Calcula o torque de gravidade de alimentação direta a partir do URDF e dos ângulos atuais das juntas, e gera os parâmetros de rigidez e amortecimento |
| `motor_commands` | Valida os comandos e envia comandos de controle MIT aos sete motores por meio do motorbridge |

Os três operadores são executados em sequência na mesma partição `control` do Holoscan. Cada fila entre operadores guarda uma mensagem pendente. O Pinocchio calcula o termo de gravidade como `g(q) = RNEA(q, 0, 0)`. A meta de escalonamento é 400 Hz. Use o Nsight Systems para medir o intervalo real entre iterações.

O watchdog verifica lotes de comandos atrasados. O motorbridge devolve o feedback em cache. Se o feedback dos motores parar enquanto os comandos ainda puderem ser enviados, o exemplo pode continuar lendo valores antigos. Durante os testes com hardware, alguém deve observar o braço no local. [Guia técnico oficial](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#startup-watchdogs-and-feedback)

## Opcional: testes com motores simulados

Os dois conjuntos oficiais de testes cobrem o torque de gravidade, o grafo de controle, o desligamento em caso de falha e a manutenção de um ponto cartesiano. Pare o controlador de hardware antes de executar os comandos a seguir. Você pode desconectar o cabo USB do braço para estes testes. Execute-os a partir do diretório do exemplo com o ambiente ativo. Os comandos compilam a biblioteca de motor simulado usada pelos testes, sem exigir o SDK de C++.

```bash
sudo apt install -y curl g++
mkdir -p build/wiki-test

curl -fL \
  https://raw.githubusercontent.com/motorbridge/motorbridge/082cbb8c36dfdc8fbf9baa4cc02c5992ab0dc2ad/motor_abi/include/motor_abi.h \
  -o build/wiki-test/motor_abi.h

g++ -std=c++20 -shared -fPIC -I build/wiki-test tests/fake_motor_abi.cpp \
  -o build/wiki-test/librebot_fake_motor_abi.so

REBOT_FAKE_ABI="$PWD/build/wiki-test/librebot_fake_motor_abi.so"
REBOT_TEST_MOTOR_LIBRARY="$REBOT_FAKE_ABI" python tests/test_python_gravity.py
REBOT_TEST_MOTOR_LIBRARY="$REBOT_FAKE_ABI" python tests/test_python_cartesian.py
```

Na revisão fixada, espere 20 testes no primeiro conjunto e 15 no segundo, cada um terminando com `OK`. Os testes de injeção de falha produzem registros de erro previstos. Passar nestes testes verifica o caminho de software. Siga as etapas 2 e 3 para conferir a fiação, as direções dos motores, as posições zero das juntas e o comportamento no braço físico.

## Opcional: comparação de fixação de CPU com o Nsight Systems

Instale o Nsight Systems e execute `nsys --version` para confirmar que a CLI está disponível. As duas execuções de perfil acionam o braço físico. Execute-as uma de cada vez e confirme que o processo anterior parou antes de iniciar outra. No fim de cada execução, devolva o braço a uma postura com apoio antes de pressionar `Ctrl+C`. [Download do Nsight Systems](https://developer.nvidia.com/nsight-systems)

Primeiro, capture uma execução com o escalonamento padrão e sem fixação de CPU.

```bash
mkdir -p build/profiles
nsys profile --trace=nvtx --sample=none --backtrace=none --cpuctxsw=none \
  --output=build/profiles/gravity-unpinned \
  python python/gravity_compensation.py config/rebotarm_local.yaml
```

Em seguida, verifique quais CPUs lógicas estão disponíveis e escolha um número de CPU permitido. O valor `2` abaixo é um exemplo.

```bash
lscpu -e=CPU,CORE,SOCKET,NODE
taskset -pc $$
REBOT_CPU=2
nsys profile --trace=nvtx --sample=none --backtrace=none --cpuctxsw=none \
  --output=build/profiles/gravity-pinned \
  python python/gravity_compensation.py config/rebotarm_local.yaml --cpu "$REBOT_CPU"
```

Inspecione os dois relatórios. Use novos nomes de arquivo de saída nas repetições.

```bash
nsys stats --report nvtx_sum build/profiles/gravity-unpinned.nsys-rep
nsys stats --report nvtx_sum build/profiles/gravity-pinned.nsys-rep
```

Abra os relatórios `.nsys-rep` na interface do Nsight Systems e inspecione os intervalos NVTX dos três operadores na linha do tempo. Mantenha a postura do braço, a duração da captura e a carga do host o mais consistentes possível entre as duas execuções.

| Métrica | Como medi-la |
| --- | --- |
| Duração do operador | Verifique as estatísticas do intervalo NVTX correspondente em `nvtx_sum`. |
| Intervalo do loop e variação | Compare os carimbos de tempo sucessivos de entrada em `joint_feedback`. O intervalo alvo é 2.5 ms. |
| Latência dentro do grafo | Use os marcadores de mensagem para associar eventos da mesma iteração e meça da entrada em `joint_feedback` até a entrada em `motor_commands`. Meça a transmissão serial separadamente. |

Para análise em lote, exporte o relatório para SQLite. Execute `nsys export --help` para verificar se `--include-blobs` existe. Se a opção estiver ausente, atualize o Nsight Systems antes de exportar as cargas úteis de mensagem estruturadas. Para associar eventos de publicação e recebimento na mesma aresta, use `source_identity` e `sequence`. Depois, siga a entrada e a saída do operador para rastrear a mesma iteração de controle. [Anotações NVTX do Holoscan](https://docs.nvidia.com/holoscan/sdk-user-guide/5-0-latest/performance/nsight-profiling)

```bash
nsys export --type sqlite --include-blobs=true \
  -o build/profiles/gravity-pinned.sqlite build/profiles/gravity-pinned.nsys-rep
```

`--cpu` define a afinidade apenas da thread de controle. A NVIDIA também isolou um núcleo físico e seu irmão SMT, descartou os primeiros 10 segundos como aquecimento e manteve mais de um milhão de iterações por execução. Registre a sua própria contagem de amostras, a topologia de CPU e as configurações de isolamento ao reproduzir o experimento. Use um rastreamento curto para inspecionar o comportamento do grafo e uma amostra suficientemente grande para os percentis de latência de cauda. [Condições do benchmark da NVIDIA](https://developer.nvidia.com/blog/make-a-robot-arm-feel-weightless-with-nvidia-holoscan-5/#pinning-cores) · [Guia de correlação de mensagens](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#profiling-and-cpu-placement)

## Opcional: comparação em C++

Instale o Holoscan SDK 5.0 com os componentes de desenvolvimento, um compilador C++20, CMake 4 ou posterior, Ninja, Rust/Cargo e Python 3.12. A NVIDIA usou a build 5.0.0.7 do SDK neste exemplo. [Guia de instalação do SDK](https://docs.nvidia.com/holoscan/sdk-user-guide/setup/sdk-installation) · [Instruções de build em C++ do exemplo](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#c-build)

Execute estes comandos a partir do diretório do exemplo. Se você já verificou que o arquivo do modelo existe, pule a primeira linha.

```bash
python3.12 scripts/fetch-urdf.py
./scripts/bootstrap-deps.sh
cmake --preset default
cmake --build --preset default
ctest --preset default
```

Depois que os testes passarem, use as etapas 2 e 3 para conferir o hardware e a postura inicial. Em seguida, use o comando abaixo no lugar do comando de inicialização em Python. Para perfilar C++ com o Nsight Systems, altere o executável e o nome da saída nos comandos de perfil. Mantenha a mesma configuração serial e as mesmas condições de comparação.

```bash
./build/rebot_gravity_compensation config/rebotarm_local.yaml
```

## Solução de problemas

| Sintoma | O que verificar |
| --- | --- |
| O pip não encontra o wheel do Holoscan | Verifique `python --version`, `uname -m` e `getconf GNU_LIBC_VERSION` e use uma versão de Python e um sistema compatíveis. |
| `libcudart.so.13` está ausente | Verifique se o wheel do runtime CUDA está instalado no ambiente Python ativo e defina `LD_LIBRARY_PATH` novamente. |
| `libcuda.so.1` está ausente | Verifique o driver NVIDIA do host e a saída de `nvidia-smi`. O wheel do runtime CUDA não inclui o driver do host. |
| O URDF está ausente ou o Pinocchio falha ao importar | Execute novamente o script de download do modelo a partir do diretório do exemplo. Verifique a versão de `pin` e o caminho de importação no ambiente ativo. Evite carregar extensões ROS de outro ambiente Python. |
| A porta serial não abre ou está ocupada | Verifique o cabo de dados USB, o caminho de `channel` e as permissões da porta serial. Use `fuser -v /dev/ttyACM0` com o caminho real do dispositivo para identificar o processo que usa a porta e pare-o no terminal original. |
| Um motor para de informar feedback ou informa uma falha | Apoie o braço e pare o controlador primeiro. Verifique os IDs dos motores, a alimentação, a fiação e as instruções de firmware. Salve o erro completo e o número da junta, e mantenha o watchdog habilitado. |
| O braço cai, empurra de volta ou oscila | Apoie o braço e pare o controlador primeiro. Verifique a orientação da base, as posições zero das juntas, o modelo e a carga. |
| O grafo não compila ou não inicia com uma CPU especificada | Execute `taskset -pc $$` para ver quais CPUs são permitidas, ou remova `--cpu` para restaurar o escalonamento padrão. |
