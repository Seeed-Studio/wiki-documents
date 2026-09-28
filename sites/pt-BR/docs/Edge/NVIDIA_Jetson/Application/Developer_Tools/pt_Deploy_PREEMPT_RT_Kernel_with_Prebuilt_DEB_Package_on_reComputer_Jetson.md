---
description: Este wiki explica como implantar rapidamente um kernel em tempo real PREEMPT_RT em dispositivos Seeed reComputer e reServer Jetson com um único pacote DEB pré‑compilado, alternar entre os kernels em tempo real e padrão, verificar os ganhos de tempo real com benchmarks de cyclictest, GPIO e EtherCAT e reproduzir todos os benchmarks com os códigos de demonstração incluídos.
title: Implantar um kernel em tempo real PREEMPT_RT com um pacote DEB pré‑compilado em dispositivos Seeed reComputer Jetson
keywords:
  - Jetson
  - reComputer
  - reServer
  - JetPack 7.2
  - PREEMPT_RT
  - Real-Time Kernel
  - DEB
image: https://files.seeedstudio.com/wiki/zzd/gpio_square_wave_realtime_kernel.png
slug: /deploy_preempt_rt_kernel_with_prebuilt_deb_package_on_recomputer_jetson
sku: E2025032601,114110314,114110312,114110313,114110311
last_update:
  date: 09/18/2026
  author: Zhida Zhang
createdAt: '2026-09-18'
updatedAt: '2026-09-18'
url: https://wiki.seeedstudio.com/pt-br/deploy_preempt_rt_kernel_with_prebuilt_deb_package_on_recomputer_jetson/
---

# Implantar um kernel em tempo real PREEMPT_RT com um pacote DEB pré‑compilado em dispositivos Seeed reComputer Jetson

Um kernel em tempo real, também conhecido como kernel PREEMPT_RT, é uma variante do kernel Linux com capacidades aprimoradas de escalonamento em tempo real. Ele reduz a latência de escalonamento e melhora o determinismo da execução de tarefas, o que é crítico para cargas de trabalho como controle de motores, aquisição de dados de sensores e comunicação em barramentos industriais (CAN, EtherCAT) em cenários de robótica, automação industrial e computação de borda.

Se você preferir compilar o kernel PREEMPT_RT a partir do código‑fonte, consulte [este wiki](https://wiki.seeedstudio.com/pt-br/flash_preempt_rt_kernel_on_recomputer_jetson_jetpack_6_2_1/). Este guia segue um caminho muito mais simples: um único pacote DEB pré‑compilado instala o kernel em tempo real em cerca de um minuto, mantém o kernel padrão original intacto como fallback e permite alternar entre os dois kernels a qualquer momento.

:::note
Este wiki se aplica a dispositivos Seeed reComputer e reServer Jetson baseados no módulo NVIDIA Orin (T234) executando JetPack 7.2 (Jetson Linux R39.2.0) com o kernel padrão. Um único pacote DEB cobre todas as placas‑carrier baseadas em T234. Este wiki foi testado e verificado em um reComputer Super.
:::

## Pré‑requisitos

- [reComputer Super](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_super_getting_started/) (ou outro dispositivo Seeed reComputer/reServer Jetson baseado em um módulo Orin T234) executando o sistema padrão JetPack 7.2
- O pacote DEB do kernel em tempo real: [nvidia-l4t-kernel-rt-7.2.0-39.2.0-2026-08-26.deb](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQAoDsCcwIXuSJ3O2f1gQj92AUCcOTbm_hvQsHluDfxDq1s?e=FaUh3J)
- Um PC host para transferir o pacote DEB para o dispositivo

:::note
Para dispositivos que ainda executam JetPack 6.2 (Jetson Linux R36.4.3), use em vez disso o pacote correspondente [nvidia-l4t-kernel-rt-6.2-36.4.3-2026-08-26.deb](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBOyNDAj5Q5TbWq1d4gx-BqAXA0nCeeg2rcw0W2gMOe4g8?e=XK7LDY). Os procedimentos neste wiki são idênticos; apenas as strings de versão do kernel diferem (`5.15.148-tegra` / `5.15.148-rt-tegra`).
:::

Se o seu dispositivo ainda não estiver executando o sistema padrão, consulte primeiro o wiki [reComputer Super Getting Started](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_super_getting_started/).

## Verificar a versão do kernel padrão

O pacote DEB requer que o dispositivo esteja executando a versão do kernel padrão que corresponde ao pacote. Abra um terminal no dispositivo e execute:

```bash
uname -r
```

Você deverá ver uma saída semelhante a:

```text
6.8.12-1021-tegra
```

Se a saída for uma versão diferente (por exemplo, `5.15.148-tegra` de um JetPack mais antigo, ou `6.8.12-1021-rt-tegra` do kernel em tempo real), grave primeiro a imagem de sistema padrão correspondente e depois continue com este guia.

## Instalar o pacote DEB do kernel em tempo real

**Passo 1.** Transfira o pacote DEB para o dispositivo (um pendrive USB ou scp funcionam igualmente bem):

```bash
scp nvidia-l4t-kernel-rt-7.2.0-39.2.0-2026-08-26.deb <username>@<device-ip>:~
```

**Passo 2.** Faça login no dispositivo e instale o pacote:

```bash
sudo dpkg -i ~/nvidia-l4t-kernel-rt-7.2.0-39.2.0-2026-08-26.deb
```

A instalação leva cerca de um minuto e é totalmente automática. Ela coloca a imagem do kernel em tempo real em `/boot/Image.real-time`, instala os módulos correspondentes em `/lib/modules/6.8.12-1021-rt-tegra/`, reconstrói o initrd e alterna a entrada de boot padrão para o kernel em tempo real. O kernel padrão original em `/boot/Image` permanece intacto, portanto ele continua sempre disponível como fallback.

**Passo 3.** Reinicie o dispositivo:

```bash
sudo reboot
```

## Verificar o kernel em tempo real

Após a reinicialização, confirme que o kernel em tempo real está em execução:

```bash
uname -r
cat /sys/kernel/realtime
zcat /proc/config.gz | grep PREEMPT
```

Você deverá ver uma saída semelhante a:

```text
6.8.12-1021-rt-tegra
1
CONFIG_PREEMPT_RT=y
```

O pacote fornece um kernel com os patches da placa‑carrier da Seeed já aplicados, portanto todos os periféricos devem se comportar exatamente como no sistema padrão. Você pode verificar alguns deles rapidamente:

```bash
lsmod | grep nvgpu
ip -br addr
systemctl --failed
```

`systemctl --failed` não deve relatar nenhum serviço com falha.

## Alternar entre os kernels em tempo real e padrão

Você pode alternar entre os dois kernels a qualquer momento. Para voltar ao kernel padrão:

```bash
sudo nv-update-extlinux generic && sudo reboot
```

Para alternar novamente para o kernel em tempo real:

```bash
sudo nv-update-extlinux real-time && sudo reboot
```

:::tip
Durante a inicialização, pressione `0` (kernel padrão) ou `1` (kernel em tempo real) em até 3 segundos no menu de boot para selecionar um kernel apenas para aquela inicialização, sem alterar a entrada padrão.
:::

### Desinstalar o kernel em tempo real

:::caution
Certifique‑se de que o dispositivo foi alternado de volta para o kernel padrão antes de desinstalar o pacote.
:::

```bash
sudo nv-update-extlinux generic && sudo reboot
sudo apt remove nvidia-l4t-kernel-rt
```

## Comparação de desempenho: kernel em tempo real vs kernel padrão

Para mostrar o que o kernel em tempo real realmente traz, os dois kernels foram comparados sob três cargas de trabalho: latência do escalonador (cyclictest), jitter de saída GPIO e controle de motor de servo EtherCAT — todos no mesmo dispositivo, sob a mesma interferência e com a CPU mantida em carga total.

:::note
Todos os resultados abaixo foram medidos em um Seeed reComputer Super (Orin Nano Super) executando JetPack 7.2, sob carga total de CPU.
:::

### Princípio

Os experimentos usam um módulo de kernel chamado `spinlock_holder`: uma thread de kernel vinculada a um núcleo de CPU que repetidamente adquire um `spin_lock()` e o mantém por uma duração configurada.

- No **kernel padrão**, `spin_lock()` desabilita a preempção do kernel. Toda tarefa naquele CPU — incluindo a tarefa em tempo real `SCHED_FIFO` de maior prioridade — fica congelada até que o lock seja liberado.
- No **kernel PREEMPT_RT**, `spinlock_t` é substituído por um lock bloqueável (sleepable) baseado em um rt_mutex, de modo que uma tarefa de maior prioridade preempte o detentor do lock a qualquer momento.

Esta é a diferença que os experimentos tornam visível: no kernel padrão, um lock de 1 segundo significa uma parada de 1 segundo para a tarefa em tempo real; no kernel em tempo real, a mesma interferência é quase invisível para ela.

:::info
Por que uma thread de kernel e não um processo de usuário em busy‑loop? A carga em espaço de usuário é sempre escalonável — em ambos os kernels uma tarefa `SCHED_FIFO` tem prioridade maior, então nada de interessante aparece. Apenas uma seção crítica de kernel não preemptível separa os dois kernels. O [grupo de controle](#grupo-de-controle-a-carga-de-cpu-não-é-a-vilã) abaixo prova isso com dados.
:::

### Configuração de teste

| Item | Valor |
|---|---|
| Dispositivo | Seeed reComputer Super (Orin Nano Super, 6 núcleos) |
| Sistema | JetPack 7.2 (Jetson Linux R39.2.0) |
| Kernel padrão | `6.8.12-1021-tegra` |
| Kernel em tempo real | `6.8.12-1021-rt-tegra` (implantado via pacote DEB) |
| Interferência | módulo de kernel `spinlock_holder`, kthread vinculada à CPU3 |
| Cargas de trabalho | cyclictest, onda quadrada GPIO (`SCHED_FIFO`), IgH EtherCAT master 1 kHz (`SCHED_FIFO` 89, mesmo núcleo) |

Durante os experimentos, a thread de interferência mantém o núcleo alvo fixado em 100% no jtop, enquanto os outros núcleos permanecem em grande parte ociosos:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/zzd/gpio_demo_cpu3_load.png"/></div>

### Latência do cyclictest

Instale primeiro o `rt-tests`:

```bash
sudo apt update && sudo apt install -y rt-tests
```

Gere carga total do sistema em um terminal:

```bash
stress --cpu 6 --io 4 --vm 2 --vm-bytes 64M &
```

Em seguida, execute o cyclictest em um segundo terminal, por 30 segundos (a opção `-S` inicia uma thread de medição por núcleo de CPU, com o intervalo aumentando em 500 µs de thread para thread):

```bash
sudo cyclictest -m -S -p90 -i1000 -D30s
```

A imagem abaixo mostra uma execução de exemplo no kernel padrão: a latência média de cada thread permanece entre 8 e 21 µs — enganadoramente próxima à do kernel em tempo real — mas a latência máxima dispara para 1.909 µs, mais de **60 vezes** o teto do kernel em tempo real, sem nenhuma forma de prever quando isso acontece:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/5.png"/></div>

O kernel em tempo real tem um teto rígido para a latência máxima: não importa quão pesada fique a carga, ela nunca sai de controle. Esse determinismo é exatamente o propósito de um kernel em tempo real.

### Jitter da onda quadrada em GPIO

Este teste também é executado sob carga total de CPU. Uma thread de kernel mantém periodicamente um spinlock em um núcleo de CPU enquanto uma tarefa `SCHED_FIFO` no mesmo núcleo alterna um pino GPIO para gerar uma onda quadrada de 2 kHz. Os timestamps das bordas são registrados em um buffer circular e gravados em um arquivo de log na saída, de modo que o próprio log nunca adiciona jitter. As estatísticas de borda a borda e a visualização no osciloscópio mostram diretamente a diferença (lock mantido por 300 µs a cada 1 ms):

| Tempo de lock / período | Métrica | Kernel padrão | Kernel em tempo real |
|---|---|---|---|
| 300 µs / 1 ms | p99 / máx / σ | 306 / 325~547 / 40 µs | 251 / 257 / 0,56 µs |
| 500 µs / 1 ms | bordas perdidas / pares fundidos | 25% / 25% | 0 / 0 |
| 500 µs / 1 ms | p99 / máx | 506 / 529 µs | ~251 µs |

No kernel padrão, as bordas que caem dentro da janela do spinlock são atrasadas ou engolidas, de modo que a forma de onda se distorce visivelmente. No kernel em tempo real a forma de onda permanece limpa.

Kernel padrão — a onda quadrada se distorce e para sempre que o spinlock é mantido:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/zzd/gpio_square_wave_standard_kernel.png"/></div>

Kernel em tempo real — uma onda quadrada contínua (base de tempo 500 µs/div):

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/zzd/gpio_square_wave_realtime_kernel.png"/></div>

### Controle de motor de servo EtherCAT

Este teste também é executado sob carga total de CPU: o núcleo alvo é mantido carregado em todas as fases. O dispositivo Jetson executa um IgH EtherCAT master (ciclo de 1 kHz, `SCHED_FIFO` 89) que aciona um motor de servo EtherCAT. O drive EtherCAT tem um watchdog de comunicação de cerca de 100 ms: se os quadros de dados de processo pararem por mais tempo, o drive corta a saída e o motor para. O módulo de interferência mantém um spinlock por 1.000 ms a cada 3 s no núcleo do master — portanto qualquer congelamento maior que o watchdog deve, e de fato irá, derrubar o barramento no kernel padrão.

Uma demonstração em três fases mostra toda a história em uma única execução:

| Fase | Interferência | Kernel padrão | Kernel em tempo real |
|---|---|---|---|
| 1 (10 s) | Carga de CPU apenas | Motor gira suavemente | Motor gira suavemente |
| 2 (15 s) | + spinlock (1.000 ms / 3 s) | `CYCLE BROKEN — SAFE STOP`, o barramento sai de OP, o motor para | Motor continua girando, zero alarmes |
| 3 (15 s) | spinlock removido, carga permanece | Master se recupera sozinho em ~4 s, motor reinicia | Sem mudança |

Métricas principais em execuções idênticas:

| Métrica | Kernel padrão | Kernel em tempo real |
|---|---|---|
| Safe stop acionado | Na primeira janela de travamento | **Nunca** |
| Slave saiu de OP | 1~3 vezes por 25 s | **0 vezes** |
| Despertar do master p50 / p99 / máx | 7 / ~994.000 / ~1.018.000 µs | 2 / **3** / **12** µs |
| Ciclos acima de 1 ms (por 5.000) | ~2.000 | **0** |
| Comportamento do motor | Para enquanto travado, recupera ~4 s após liberar | Movimento senoidal contínuo |

Saída do kernel padrão quando o travamento ocorre (o master congela por um segundo inteiro e depois se recupera quando o travamento é liberado):

```text
############ Phase 2: LOADING spinlock interference ############
*** CYCLE BROKEN (frozen >500ms) — SAFE STOP: disabling motor ***
!!! BUS DROPPED: slave left OP (AL 0x08 -> 0x4) — comm watchdog/error !!!
[STAT] cycles=15000 WKC0=2255 late>1ms=2084 drops(total)=1
       wake_us p50/p99/max=7/994615/1018037
############ Phase 3: REMOVING interference ############
+++ cycle restored — re-enabling motor +++
```

Saída do kernel em tempo real sob a mesma interferência, durante toda a execução:

```text
[STAT] cycles=5000  WKC0=131  late>1ms=0 drops(total)=0 wake_us p50/p99/max=2/3/8
[STAT] cycles=10000 WKC0=0    late>1ms=0 drops(total)=0 wake_us p50/p99/max=2/3/9
[STAT] cycles=15000 WKC0=0    late>1ms=0 drops(total)=0 wake_us p50/p99/max=2/3/8
Running: Act=41268 Vel=29970 TgtV=29630 md=9 SW=1237
```

:::note
O master possui monitoramento de integridade de ciclo embutido: um atraso de despertar acima de 500 ms é tratado como "congelado" e aciona um safe stop controlado (prática padrão para pilhas industriais); o motor é reativado após 4 s sem qualquer congelamento. No kernel padrão, a interferência retorna a cada 3 s, então a janela de recuperação nunca se abre.
:::

No kernel padrão, o master trava por segundos inteiros — mais de **10 vezes** o watchdog do drive EtherCAT (~100 ms) — então o barramento sai do estado OP e o motor é desabilitado. No kernel em tempo real, o jitter de despertar do master permanece dentro de alguns microssegundos, e nem o barramento nem o motor são afetados pela interferência.

No kernel em tempo real, o motor de servo EtherCAT gira suavemente por 30 segundos:

<video src="https://files.seeedstudio.com/wiki/zzd/ethercat_motor_realtime_kernel.mp4" controls width="800"></video>

No kernel padrão, o motor para sempre que o travamento é mantido (10 s de rotação, 15 s de parada, 15 s de rotação):

<video src="https://files.seeedstudio.com/wiki/zzd/ethercat_motor_standard_kernel.mp4" controls width="800"></video>

### Grupo de Controle: Carga de CPU Não é o Vilão

Para provar que o dano vem da seção crítica não preemptível e não da utilização de CPU, o mesmo núcleo foi carregado por um processo de usuário `SCHED_OTHER` comum (ocupado 1 s / ocioso 2 s, picos em 100%) em vez do módulo de spinlock — mesmo núcleo, mesmo ritmo:

| Métrica | Kernel padrão + carga de CPU | Kernel em tempo real + carga de CPU | Kernel padrão + spinlock |
|---|---|---|---|
| Motor | Gira | Gira | **Para** |
| Quedas de barramento / safe stops | 0 / 0 | 0 / 0 | 1~3 / acionado |
| wake p99 | até 1.879 µs | 11 µs | ~994.000 µs |
| wake máx | ~8.200 µs | 32 µs | ~1.018.000 µs |
| Ciclos acima de 1 ms (por 5.000) | 28~56 | **0** | ~2.000 |

A carga em espaço de usuário nunca supera uma tarefa `SCHED_FIFO` em nenhum dos kernels, então o motor continua girando em ambas as colunas — mas o kernel padrão ainda é arrastado para jitter na escala de milissegundos (p99 aproximadamente **170 vezes** pior que o kernel em tempo real). O spinlock do kernel é o que transforma jitter em uma interrupção de um segundo. **O vilão não é o uso de CPU; é a seção crítica não preemptível do kernel.**

## Reproduzir os Experimentos

O código-fonte completo do experimento de GPIO (módulo de interferência, tarefa de onda quadrada e Makefile) está incorporado abaixo, para que possa ser usado diretamente. A demonstração EtherCAT é construída sobre o projeto open-source [ethercat-myctor](https://github.com/jjjadand/ethercat-myctor) com um controlador de dispositivo personalizado; o pacote completo da demo (substituição do controlador, scripts de execução e gerador de carga de CPU) está disponível aqui: [rt_ethercat_demo.zip](https://files.seeedstudio.com/wiki/zzd/rt_ethercat_demo.zip).

A alternância entre os dois kernels é descrita em [Switch Between the Real-Time and Standard Kernels](#Switch-Between-the-Real-Time-and-Standard-Kernels). Após cada troca, verifique com `uname -v` — a saída deve conter `SMP PREEMPT_RT` ou `SMP PREEMPT`, respectivamente.

### Preparar a Árvore de Código-Fonte do Kernel em Tempo Real (uma vez)

:::note
O pacote DEB em tempo real traz a imagem do kernel e os módulos, mas nenhum pacote de headers. Módulos de kernel devem ser compilados contra uma árvore de código-fonte preparada enquanto o kernel em tempo real está em execução, caso contrário `insmod` falha com `module_layout disagrees`.
:::

```bash
curl -sL -o ~/public_sources.tbz2 \
  https://developer.download.nvidia.cn/embedded/L4T/r39_Release_v2.0/sources/public_sources.tbz2
mkdir -p ~/nvsrc ~/rt-kernel-src
tar xf ~/public_sources.tbz2 -C ~/nvsrc Linux_for_Tegra/source/kernel_src.tbz2
tar xf ~/nvsrc/Linux_for_Tegra/source/kernel_src.tbz2 -C ~/rt-kernel-src --strip-components=1

cd ~/rt-kernel-src/kernel-noble
zcat /proc/config.gz > .config
sed -i 's/^CONFIG_LOCALVERSION=".*"/CONFIG_LOCALVERSION="-1021-rt-tegra"/' .config
make ARCH=arm64 olddefconfig
make ARCH=arm64 -j6 prepare modules_prepare
```

`CONFIG_LOCALVERSION` deve ser igual ao sufixo de `uname -r` após `6.8.12` (aqui `-1021-rt-tegra`), caso contrário o vermagic do módulo não corresponde. Para o kernel padrão, use `-1021-tegra` e prepare a árvore da mesma forma.

### Código-Fonte da Demo (Experimento GPIO)

Crie um diretório de trabalho e coloque nele os três arquivos a seguir:

```bash
mkdir -p ~/rt_demo && cd ~/rt_demo
```

`spinlock_holder.c` — o módulo de interferência:

```c
// spinlock_holder: PREEMPT_RT demo module (ms and us granularity)
//
// One-shot mode (period = 0): sysfs trigger makes the bound kthread hold a
// spinlock for the configured hold time, once. On a normal kernel
// spin_lock() disables preemption so every task on that CPU freezes for
// the duration; on PREEMPT_RT spinlock_t is a sleepable rt_mutex-backed
// lock and higher priority tasks preempt the holder instead.
//
// Periodic mode (period > 0): the kthread repeats hold/idle cycles.
// Writing any *_us parameter (or period) via sysfs wakes the kthread so
// changes take effect immediately.
#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/slab.h>
#include <linux/kthread.h>
#include <linux/delay.h>
#include <linux/spinlock.h>
#include <linux/wait.h>
#include <linux/sysfs.h>
#include <linux/kobject.h>
#include <linux/sched.h>
#include <linux/ktime.h>

static int demo_cpu = 3;
module_param(demo_cpu, int, 0644);
MODULE_PARM_DESC(demo_cpu, "CPU to bind the holder kthread to (default 3)");

static int hold_ms = 3000;
module_param(hold_ms, int, 0644);
MODULE_PARM_DESC(hold_ms, "critical section length in ms (one-shot default 3000)");

static int period_ms = 0;
MODULE_PARM_DESC(period_ms, "0 = one-shot trigger; >0 = repeat every period_ms (ms mode)");

static int idle_ms = 400;
module_param(idle_ms, int, 0644);
MODULE_PARM_DESC(idle_ms, "ms mode: ms to idle between critical sections");

static int hold_us = 500;
MODULE_PARM_DESC(hold_us, "us mode: critical section length in us");

static int period_us = 1000;
MODULE_PARM_DESC(period_us, "us mode: full period in us (hold_us + idle). >0 selects us mode");

static int idle_us = 700;
module_param(idle_us, int, 0644);
MODULE_PARM_DESC(idle_us, "us mode: idle part of the period in us");

static DEFINE_SPINLOCK(test_lock);
static DECLARE_WAIT_QUEUE_HEAD(trigger_wq);
static atomic_t triggered = ATOMIC_INIT(0);

static struct task_struct *holder_task;
static u64 hold_count;

static void spin_for_ns(u64 ns)
{
	u64 end = ktime_get_ns() + ns;
	while (ktime_get_ns() < end)
		cpu_relax();
}

static void spin_for_ns_periodic(u64 ns)
{
	if (ns > (u64)50 * 1000)         /* > 50 us left: udelay in chunks */
		udelay(ns / 1000);
	else if (ns > 0)
		spin_for_ns(ns);
}

static void run_critical_section_us(void)
{
	u64 t0_ns = ktime_get_ns();
	u64 t1_ns;

	spin_lock(&test_lock);
	spin_for_ns((u64)hold_us * 1000);
	spin_unlock(&test_lock);

	t1_ns = ktime_get_ns();
	hold_count++;

	/* log only every 2000 holds to keep dmesg quiet at kHz rates */
	if (hold_count % 2000 == 1)
		pr_info("spinlock_holder: cpu %d hold #%llu wall %llu us (%s)\n",
			smp_processor_id(), hold_count,
			div_u64(t1_ns - t0_ns, 1000),
			(t1_ns - t0_ns) > (u64)hold_us * 1200
				? "stretched by preemption" : "clean");
}

static void run_critical_section_ms(void)
{
	u64 t0_ns = ktime_get_ns();
	u64 t1_ns;

	spin_lock(&test_lock);
	mdelay(hold_ms);
	spin_unlock(&test_lock);

	t1_ns = ktime_get_ns();
	hold_count++;

	pr_info("spinlock_holder: cpu %d hold #%llu wall %llu ms (%s)\n",
		smp_processor_id(), hold_count,
		div_u64(t1_ns - t0_ns, 1000000),
		(t1_ns - t0_ns) > (u64)hold_ms * 1200000 / 1000
			? "stretched by preemption" : "clean");
}

static int holder_fn(void *unused)
{
	while (!kthread_should_stop()) {
		if (period_us > 0) {
			u64 cycle_start = ktime_get_ns();
			s64 spent_ns;

			run_critical_section_us();
			/* busy-wait the remainder of the period for exact rate.
			 * s64: if hold overran the period, remainder clamps to 0
			 * instead of wrapping to ~2^64 ns (which would udelay forever). */
			spent_ns = (s64)(ktime_get_ns() - cycle_start);
			if (spent_ns < (s64)period_us * 1000)
				spin_for_ns_periodic((u64)period_us * 1000 - (u64)spent_ns);
		} else if (period_ms > 0) {
			run_critical_section_ms();
			msleep(max(idle_ms, 1));
		} else {
			wait_event_interruptible(trigger_wq,
						 atomic_read(&triggered) || kthread_should_stop());
			if (kthread_should_stop())
				break;
			if (atomic_read(&triggered)) {
				run_critical_section_ms();
				atomic_set(&triggered, 0);
			}
		}
	}
	return 0;
}

static int wake_holder(const char *val, const struct kernel_param *kp)
{
	int ret = param_set_int(val, kp);
	if (ret)
		return ret;
	atomic_set(&triggered, 1);
	wake_up(&trigger_wq);
	if (holder_task)
		wake_up_process(holder_task);
	return 0;
}

static const struct kernel_param_ops wake_ops = { .set = wake_holder, .get = param_get_int };
module_param_cb(period_ms, &wake_ops, &period_ms, 0644);
module_param_cb(period_us, &wake_ops, &period_us, 0644);
module_param_cb(hold_us, &wake_ops, &hold_us, 0644);

static ssize_t trigger_store(struct kobject *kobj, struct kobj_attribute *attr,
			     const char *buf, size_t count)
{
	if (period_us > 0 || period_ms > 0)
		return -EBUSY;
	atomic_set(&triggered, 1);
	wake_up(&trigger_wq);
	return count;
}

static struct kobj_attribute trigger_attribute =
	__ATTR(trigger, 0220, NULL, trigger_store);

static struct kobject *demo_kobj;

static int __init spinlock_holder_init(void)
{
	struct task_struct *t;
	int ret;

	/* create parked, bind while parked, then start — kthread_run()+bind()
	 * races and the bind gets rejected with a WARNING in dmesg */
	t = kthread_create(holder_fn, NULL, "spinlock_holder");
	if (IS_ERR(t))
		return PTR_ERR(t);
	kthread_bind(t, demo_cpu);
	wake_up_process(t);
	holder_task = t;

	demo_kobj = kobject_create_and_add("spinlock_holder", kernel_kobj);
	if (!demo_kobj) {
		kthread_stop(t);
		return -ENOMEM;
	}

	ret = sysfs_create_file(demo_kobj, &trigger_attribute.attr);
	if (ret) {
		kobject_put(demo_kobj);
		kthread_stop(t);
		return ret;
	}

	pr_info("spinlock_holder: loaded, cpu %d, us-mode: hold %d us / period %d us%s\n",
		demo_cpu, hold_us, period_us,
		period_us > 0 ? " [ACTIVE]" : " (inactive; set period_us>0)");
	return 0;
}

static void __exit spinlock_holder_exit(void)
{
	kthread_stop(holder_task);
	kobject_put(demo_kobj);
	pr_info("spinlock_holder: unloaded after %llu holds\n", hold_count);
}

module_init(spinlock_holder_init);
module_exit(spinlock_holder_exit);

MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("PREEMPT_RT demo: spinlock critical section vs schedulable tasks (ms/us modes)");
```

`gpio_pwm.c` — a tarefa de onda quadrada `SCHED_FIFO` (requer `sudo apt install -y libgpiod-dev`):

```c
// gpio_pwm: toggle a GPIO line every half-period from a SCHED_FIFO task.
// Half period is configurable in microseconds (default 500000 = 1s square
// wave). Edges are timestamped (CLOCK_MONOTONIC) into a ring buffer and
// flushed to edges.log so logging itself never adds jitter.
#define _GNU_SOURCE
#define _DEFAULT_SOURCE
#include <gpiod.h>
#include <sys/mman.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <sched.h>
#include <unistd.h>
#include <errno.h>
#include <signal.h>

#define CHIP    "gpiochip0"
#define LINE    41
#define NBUF    (1 << 20)                      /* 1M edges ring buffer */

static volatile sig_atomic_t stop = 0;
static void on_sigint(int s) { (void)s; stop = 1; }

static double now_sec(void)
{
	struct timespec ts;
	clock_gettime(CLOCK_MONOTONIC, &ts);
	return ts.tv_sec + ts.tv_nsec / 1e9;
}

struct edge { int level; double t; };
static struct edge ring[NBUF];
static size_t nring;

int main(int argc, char **argv)
{
	int cpu = argc > 1 ? atoi(argv[1]) : 3;
	long half_us = argc > 2 ? atol(argv[2]) : 500000;
	struct gpiod_chip *chip;
	struct gpiod_line *line;
	struct sched_param sp = { .sched_priority = 80 };
	cpu_set_t set;
	FILE *log;
	double t0, target;
	int level = 0;
	struct sigaction sa = { .sa_handler = on_sigint };
	struct timespec req;

	sigaction(SIGINT, &sa, NULL);

	CPU_ZERO(&set);
	CPU_SET(cpu, &set);
	if (sched_setaffinity(0, sizeof(set), &set)) { perror("setaffinity"); return 1; }
	if (sched_setscheduler(0, SCHED_FIFO, &sp)) { perror("SCHED_FIFO (run as root)"); }
	mlockall(MCL_CURRENT | MCL_FUTURE);

	chip = gpiod_chip_open_by_name(CHIP);
	if (!chip) { perror("gpiod_chip_open"); return 1; }
	line = gpiod_chip_get_line(chip, LINE);
	if (!line) { perror("gpiod_chip_get_line"); return 1; }
	if (gpiod_line_request_output(line, "gpio_pwm", 0)) { perror("request_output"); return 1; }

	fprintf(stderr, "gpio_pwm: toggling %s line %d every %ld us on cpu %d (fifo %d). Ctrl-C to stop.\n",
		CHIP, LINE, half_us, cpu, sp.sched_priority);

	t0 = now_sec();
	target = t0;

	while (!stop) {
		level = !level;
		gpiod_line_set_value(line, level);

		if (nring < NBUF) {
			ring[nring].level = level;
			ring[nring].t = now_sec() - t0;
			nring++;
		} else {
			fprintf(stderr, "ring full, stopping\n");
			break;
		}

		target += half_us / 1e6;
		req.tv_sec = (time_t)target;
		req.tv_nsec = (long)((target - (time_t)target) * 1e9);
		clock_nanosleep(CLOCK_MONOTONIC, TIMER_ABSTIME, &req, NULL);
	}

	gpiod_line_release(line);
	gpiod_chip_close(chip);

	log = fopen("edges.log", "w");
	if (!log) { perror("fopen edges.log"); return 1; }
	for (size_t i = 0; i < nring; i++)
		fprintf(log, "%d %.6f\n", ring[i].level, ring[i].t);
	fclose(log);
	fprintf(stderr, "gpio_pwm: stopped, %zu edges written to edges.log\n", nring);
	return 0;
}
```

`Makefile`:

```make
# Normal kernel:            make
# RT kernel (JP7.2, no headers pkg): make KDIR=~/rt-kernel-src/kernel-noble
obj-m += spinlock_holder.o

KDIR ?= /lib/modules/$(shell uname -r)/build

all: spinlock_holder.ko gpio_pwm

spinlock_holder.ko:
	KBUILD_MODPOST_WARN=1 $(MAKE) -C $(KDIR) M=$(CURDIR) modules

gpio_pwm: gpio_pwm.c
	$(CC) -O2 -Wall -o $@ $< $(shell pkg-config --cflags --libs libgpiod)

clean:
	$(MAKE) -C $(KDIR) M=$(CURDIR) clean
	rm -f gpio_pwm

.PHONY: all clean
```

:::tip
Para usar um pino GPIO diferente, altere as macros `CHIP` / `LINE` em `gpio_pwm.c`. Liste as linhas disponíveis na sua placa carrier com `gpioinfo gpiochip0` e escolha uma linha não utilizada, com capacidade de saída, no conector de 40 pinos.
:::

### Compile o módulo de interferência para ambos os kernels

```bash
# Standard kernel
make
# Real-time kernel
KBUILD_MODPOST_WARN=1 make KDIR=~/rt-kernel-src/kernel-noble
```

`KBUILD_MODPOST_WARN=1` é necessário para a compilação em tempo real: uma árvore que só executou `modules_prepare` não possui `Module.symvers`, então o modpost relata todo símbolo de kernel como indefinido — todos falsos positivos.

### Execute os demos

Demo de GPIO (osciloscópio no pino GPIO), sob carga total de CPU:

```bash
stress --cpu 6 --io 4 --vm 2 --vm-bytes 64M &
sudo insmod spinlock_holder.ko demo_cpu=3 hold_us=300 period_us=1000
sudo ./gpio_pwm 3 250
```

Demo de EtherCAT (três fases: apenas carga, carga + spinlock, apenas carga):

```bash
sudo ./run_demo.sh 10 15 15
```

O script inicia o master EtherCAT, espera pelo barramento, inicia a carga de CPU, carrega e remove o módulo de spinlock conforme o cronograma (escolhendo o `.ko` correto pela versão do kernel) e faz a limpeza ao final.

### Armadilhas conhecidas

| Sintoma | Causa | Correção |
|---|---|---|
| `insmod: File exists` após alterar parâmetros | Parâmetros de módulo só se aplicam na primeira carga | Altere via `/sys/module/spinlock_holder/parameters/`, ou execute `rmmod` e depois `insmod` novamente |
| A interferência parece carregada, mas a forma de onda está limpa | A thread holder parou sem erro ("execução falsa") | Verifique se o contador `hold #` em `dmesg` continua avançando; se não, execute `rmmod` e recarregue |
| `insmod: Invalid module format` | Módulo compilado contra o outro kernel | Recompile contra a árvore do kernel em execução |
| `modpost: "kfree" ... undefined` | Árvore preparada não possui `Module.symvers` | Compile com `KBUILD_MODPOST_WARN=1` |
| `openssl/opensslv.h: No such file` | libssl-dev ausente | `sudo apt install libssl-dev` |
| Porta EtherCAT mostra `Link: DOWN` | Porta capturada pelo NetworkManager | `sudo nmcli dev set <interface> managed no` |
| Atuador se recusa a ativar após disparos repetidos do watchdog | Travamento do firmware do drive após muitas quedas de barramento | Desligue e ligue novamente o atuador (power-cycle) |
| Tudo quebra após interromper o script de demo | O módulo de spinlock ficou carregado | `sudo rmmod spinlock_holder`, depois desligue e ligue novamente o atuador se necessário |

## Conclusão

No kernel padrão, um spinlock de kernel mantido por um segundo congela todas as tarefas naquele CPU por um segundo — incluindo um master EtherCAT `SCHED_FIFO` de prioridade máxima. Um segundo de perda de quadros é dez vezes o watchdog do drive, então o barramento sai de OP e o motor para, e interferências repetidas impedem a recuperação. No kernel PREEMPT_RT, a mesma interferência custa à tarefa em tempo real alguns microssegundos de um dígito. Para field buses de tempo real rígido, o kernel em tempo real não é "mais rápido" — ele é imune a ficar faminto por atividade dentro do kernel, uma propriedade que nenhum ajuste consegue garantir no kernel padrão.

## Referências

- https://wiki.seeedstudio.com/pt-br/flash_preempt_rt_kernel_on_recomputer_jetson_jetpack_6_2_1/
- https://gitlab.com/etherlab.org/ethercat

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
