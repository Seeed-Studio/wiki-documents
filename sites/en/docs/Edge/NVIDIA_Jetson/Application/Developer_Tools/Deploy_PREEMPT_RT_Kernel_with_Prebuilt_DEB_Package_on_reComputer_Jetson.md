---
description: This wiki explains how to quickly deploy a PREEMPT_RT real-time kernel on Seeed reComputer and reServer Jetson devices with a single prebuilt DEB package, switch between the real-time and standard kernels, verify the real-time gains with cyclictest, GPIO, and EtherCAT benchmarks, and reproduce all benchmarks with the included demo sources.
title: Deploy a PREEMPT_RT Real-Time Kernel with a Prebuilt DEB Package on Seeed reComputer Jetson Devices
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
updatedAt: '2026-09-21'
url: https://wiki.seeedstudio.com/deploy_preempt_rt_kernel_with_prebuilt_deb_package_on_recomputer_jetson/
---

# Deploy a PREEMPT_RT Real-Time Kernel with a Prebuilt DEB Package on Seeed reComputer Jetson Devices

A real-time kernel, also known as a PREEMPT_RT kernel, is a Linux kernel variant with enhanced real-time scheduling capabilities. It reduces scheduling latency and improves task execution determinism, which is critical for workloads such as motor control, sensor data acquisition, and industrial bus communication (CAN, EtherCAT) in robotics, industrial automation, and edge computing scenarios.

If you prefer to build the PREEMPT_RT kernel from source, please refer to [this wiki](https://wiki.seeedstudio.com/flash_preempt_rt_kernel_on_recomputer_jetson_jetpack_6_2_1/). This guide takes a much simpler path: a single prebuilt DEB package installs the real-time kernel in about one minute, keeps the original standard kernel untouched as a fallback, and lets you switch between the two kernels at any time.

:::note
This wiki applies to Seeed reComputer and reServer Jetson devices based on the NVIDIA Orin (T234) module running JetPack 7.2 (Jetson Linux R39.2.0) with the standard kernel. A single DEB package covers all T234-based carrier boards. This wiki has been tested and verified on a reComputer Super.
:::

## Prerequisites

- [reComputer Super](https://wiki.seeedstudio.com/recomputer_jetson_super_getting_started/) (or another Seeed reComputer/reServer Jetson device based on an Orin T234 module) running the standard JetPack 7.2 system
- The real-time kernel DEB package: [nvidia-l4t-kernel-rt-7.2.0-39.2.0-2026-08-26.deb](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQAoDsCcwIXuSJ3O2f1gQj92AUCcOTbm_hvQsHluDfxDq1s?e=FaUh3J)
- A host PC for transferring the DEB package to the device

:::note
For devices still running JetPack 6.2 (Jetson Linux R36.4.3), use the matching package [nvidia-l4t-kernel-rt-6.2-36.4.3-2026-08-26.deb](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBOyNDAj5Q5TbWq1d4gx-BqAXA0nCeeg2rcw0W2gMOe4g8?e=XK7LDY) instead. The procedures in this wiki are identical; only the kernel version strings differ (`5.15.148-tegra` / `5.15.148-rt-tegra`).
:::

If your device is not running the standard system yet, please refer to the [reComputer Super Getting Started](https://wiki.seeedstudio.com/recomputer_jetson_super_getting_started/) wiki first.

## Check the Standard Kernel Version

The DEB package requires the device to run the standard kernel version that matches the package. Open a terminal on the device and run:

```bash
uname -r
```

You should see output similar to:

```text
6.8.12-1021-tegra
```

If the output is a different version (for example `5.15.148-tegra` from an older JetPack release, or `6.8.12-1021-rt-tegra` from the real-time kernel), flash the matching standard system image first, then continue with this guide.

## Install the Real-Time Kernel DEB Package

**Step 1.** Transfer the DEB package to the device (a USB drive or scp both work):

```bash
scp nvidia-l4t-kernel-rt-7.2.0-39.2.0-2026-08-26.deb <username>@<device-ip>:~
```

**Step 2.** Log in to the device and install the package:

```bash
sudo dpkg -i ~/nvidia-l4t-kernel-rt-7.2.0-39.2.0-2026-08-26.deb
```

The installation takes about one minute and is fully automatic. It places the real-time kernel image at `/boot/Image.real-time`, installs the matching modules under `/lib/modules/6.8.12-1021-rt-tegra/`, rebuilds the initrd, and switches the default boot entry to the real-time kernel. The original standard kernel at `/boot/Image` is left untouched, so it always remains available as a fallback.

**Step 3.** Reboot the device:

```bash
sudo reboot
```

## Verify the Real-Time Kernel

After the reboot, confirm that the real-time kernel is running:

```bash
uname -r
cat /sys/kernel/realtime
zcat /proc/config.gz | grep PREEMPT
```

You should see output similar to:

```text
6.8.12-1021-rt-tegra
1
CONFIG_PREEMPT_RT=y
```

The package ships a kernel with the Seeed carrier-board patches already applied, so all peripherals should behave exactly as on the standard system. You can spot-check a few of them:

```bash
lsmod | grep nvgpu
ip -br addr
systemctl --failed
```

`systemctl --failed` should report no failed services.

## Switch Between the Real-Time and Standard Kernels

You can switch between the two kernels at any time. To switch back to the standard kernel:

```bash
sudo nv-update-extlinux generic && sudo reboot
```

To switch to the real-time kernel again:

```bash
sudo nv-update-extlinux real-time && sudo reboot
```

:::tip
During boot, press `0` (standard kernel) or `1` (real-time kernel) within 3 seconds in the boot menu to select a kernel for that boot only, without changing the default entry.
:::

### Uninstall the Real-Time Kernel

:::caution
Make sure the device has been switched back to the standard kernel before uninstalling the package.
:::

```bash
sudo nv-update-extlinux generic && sudo reboot
sudo apt remove nvidia-l4t-kernel-rt
```

## Performance Comparison: Real-Time vs Standard Kernel

To show what the real-time kernel actually brings, the two kernels were compared under three workloads: scheduler latency (cyclictest), GPIO output jitter, and EtherCAT servo motor control — all on the same device, under the same interference, and with the CPU kept under full load.

:::note
All results below were measured on a Seeed reComputer Super (Orin Nano Super) running JetPack 7.2, under full CPU load.
:::

### Principle

The experiments use a kernel module called `spinlock_holder`: a kernel thread bound to one CPU core that repeatedly takes a `spin_lock()` and holds it for a configured duration.

- On the **standard kernel**, `spin_lock()` disables kernel preemption. Every task on that CPU — including the highest-priority `SCHED_FIFO` real-time task — is frozen until the lock is released.
- On the **PREEMPT_RT kernel**, `spinlock_t` is replaced by a sleepable lock backed by an rt_mutex, so a higher-priority task preempts the lock holder at any time.

This is the difference the experiments make visible: on the standard kernel, a 1-second lock means a 1-second stall for the real-time task; on the real-time kernel, the same interference is almost invisible to it.

:::info
Why a kernel thread and not a busy-loop user process? User-space load is always schedulable — on both kernels an `SCHED_FIFO` task outranks it, so nothing interesting shows up. Only a non-preemptible kernel critical section separates the two kernels. The [control group](#control-group-cpu-load-is-not-the-killer) below proves this with data.
:::

### Test Setup

| Item | Value |
|---|---|
| Device | Seeed reComputer Super (Orin Nano Super, 6 cores) |
| System | JetPack 7.2 (Jetson Linux R39.2.0) |
| Standard kernel | `6.8.12-1021-tegra` |
| Real-time kernel | `6.8.12-1021-rt-tegra` (deployed via DEB package) |
| Interference | `spinlock_holder` kernel module, kthread bound to CPU3 |
| Workloads | cyclictest, GPIO square wave (`SCHED_FIFO`), IgH EtherCAT master 1 kHz (`SCHED_FIFO` 89, same core) |

During the experiments, the interference thread keeps the target core pinned at 100% in jtop, while the other cores stay mostly idle:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/zzd/gpio_demo_cpu3_load.png"/></div>

### Cyclictest Latency

Install `rt-tests` first:

```bash
sudo apt update && sudo apt install -y rt-tests
```

Generate full system load in one terminal:

```bash
stress --cpu 6 --io 4 --vm 2 --vm-bytes 64M &
```

Then run cyclictest in a second terminal, for 30 seconds (the `-S` option starts one measurement thread per CPU core, with the interval increasing by 500 µs from thread to thread):

```bash
sudo cyclictest -m -S -p90 -i1000 -D30s
```

The image below shows an example run on the standard kernel: every thread's average latency stays between 8 and 21 µs — deceptively close to the real-time kernel — but the maximum latency spikes to 1,909 µs, more than **60 times** the real-time kernel's ceiling, with no way to predict when it happens:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/5.png"/></div>

The real-time kernel has a hard ceiling on the maximum latency: no matter how heavy the load gets, it never runs out of control. This determinism is exactly what a real-time kernel is for.

### GPIO Square-Wave Jitter

This test also runs under full CPU load. A kernel thread periodically holds a spinlock on a CPU core while a `SCHED_FIFO` task on the same core toggles a GPIO pin to output a 2 kHz square wave. Edge timestamps are recorded in a ring buffer and written to a log file at exit, so logging itself never adds jitter. The edge-to-edge statistics and the oscilloscope view show the difference directly (lock held for 300 µs every 1 ms):

| Lock hold / period | Metric | Standard kernel | Real-time kernel |
|---|---|---|---|
| 300 µs / 1 ms | p99 / max / σ | 306 / 325~547 / 40 µs | 251 / 257 / 0.56 µs |
| 500 µs / 1 ms | lost edges / merged pairs | 25% / 25% | 0 / 0 |
| 500 µs / 1 ms | p99 / max | 506 / 529 µs | ~251 µs |

On the standard kernel, edges that fall inside the spinlock window are delayed or swallowed, so the waveform visibly distorts. On the real-time kernel the waveform stays clean.

Standard kernel — the square wave distorts and stops whenever the spinlock is held:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/zzd/gpio_square_wave_standard_kernel.png"/></div>

Real-time kernel — a continuous square wave (time base 500 µs/div):

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/zzd/gpio_square_wave_realtime_kernel.png"/></div>

### EtherCAT Servo Motor Control

This test also runs under full CPU load: the target core is kept loaded in all phases. The Jetson device runs an IgH EtherCAT master (1 kHz cycle, `SCHED_FIFO` 89) that drives an EtherCAT servo motor. The EtherCAT drive has a communication watchdog of about 100 ms: if the process-data frames stop for longer, the drive cuts output and the motor stops. The interference module holds a spinlock for 1,000 ms every 3 s on the master's core — so any freeze longer than the watchdog should, and does, kill the bus on the standard kernel.

A three-phase demo shows the whole story in one run:

| Phase | Interference | Standard kernel | Real-time kernel |
|---|---|---|---|
| 1 (10 s) | CPU load only | Motor rotates smoothly | Motor rotates smoothly |
| 2 (15 s) | + spinlock (1,000 ms / 3 s) | `CYCLE BROKEN — SAFE STOP`, bus drops out of OP, motor stops | Motor keeps rotating, zero alarms |
| 3 (15 s) | spinlock removed, load stays | Master self-recovers in ~4 s, motor restarts | No change |

Core metrics over identical runs:

| Metric | Standard kernel | Real-time kernel |
|---|---|---|
| Safe stop triggered | On the first lock window | **Never** |
| Slave dropped out of OP | 1~3 times per 25 s | **0 times** |
| Master wake-up p50 / p99 / max | 7 / ~994,000 / ~1,018,000 µs | 2 / **3** / **12** µs |
| Cycles over 1 ms (per 5,000) | ~2,000 | **0** |
| Motor behavior | Stops while locked, recovers ~4 s after release | Continuous sinusoidal motion |

Standard kernel output when the lock hits (the master freezes for a full second, then recovers after the lock is released):

```text
############ Phase 2: LOADING spinlock interference ############
*** CYCLE BROKEN (frozen >500ms) — SAFE STOP: disabling motor ***
!!! BUS DROPPED: slave left OP (AL 0x08 -> 0x4) — comm watchdog/error !!!
[STAT] cycles=15000 WKC0=2255 late>1ms=2084 drops(total)=1
       wake_us p50/p99/max=7/994615/1018037
############ Phase 3: REMOVING interference ############
+++ cycle restored — re-enabling motor +++
```

Real-time kernel output under the same interference, for the entire run:

```text
[STAT] cycles=5000  WKC0=131  late>1ms=0 drops(total)=0 wake_us p50/p99/max=2/3/8
[STAT] cycles=10000 WKC0=0    late>1ms=0 drops(total)=0 wake_us p50/p99/max=2/3/9
[STAT] cycles=15000 WKC0=0    late>1ms=0 drops(total)=0 wake_us p50/p99/max=2/3/8
Running: Act=41268 Vel=29970 TgtV=29630 md=9 SW=1237
```

:::note
The master has built-in cycle health monitoring: a wake-up delay over 500 ms is treated as "frozen" and triggers a controlled safe stop (standard practice for industrial stacks); the motor re-enables after 4 s without any freeze. On the standard kernel the interference returns every 3 s, so the recovery window never opens.
:::

On the standard kernel, the master stalls for whole seconds — more than **10 times** the EtherCAT drive watchdog (~100 ms) — so the bus drops out of OP state and the motor is disabled. On the real-time kernel, the master wake-up jitter stays within a few microseconds, and neither the bus nor the motor is affected by the interference.

On the real-time kernel, the EtherCAT servo motor rotates smoothly for 30 seconds:

<video src="https://files.seeedstudio.com/wiki/zzd/ethercat_motor_realtime_kernel.mp4" controls width="800"></video>

On the standard kernel, the motor stops whenever the lock is held (10 s of rotation, 15 s of stall, 15 s of rotation):

<video src="https://files.seeedstudio.com/wiki/zzd/ethercat_motor_standard_kernel.mp4" controls width="800"></video>

### Control Group: CPU Load Is Not the Killer

To prove that the damage comes from the non-preemptible critical section and not from CPU utilization, the same core was loaded by an ordinary `SCHED_OTHER` user process (busy 1 s / idle 2 s, peaks at 100%) instead of the spinlock module — same core, same rhythm:

| Metric | Standard + CPU load | Real-time + CPU load | Standard + spinlock |
|---|---|---|---|
| Motor | Rotates | Rotates | **Stops** |
| Bus drops / safe stops | 0 / 0 | 0 / 0 | 1~3 / triggered |
| wake p99 | up to 1,879 µs | 11 µs | ~994,000 µs |
| wake max | ~8,200 µs | 32 µs | ~1,018,000 µs |
| Cycles over 1 ms (per 5,000) | 28~56 | **0** | ~2,000 |

User-space load never outranks an `SCHED_FIFO` task on either kernel, so the motor keeps turning in both columns — but the standard kernel is still dragged into millisecond-scale jitter (p99 roughly **170 times** worse than the real-time kernel). The kernel spinlock is what turns jitter into a second-long outage. **The killer is not CPU usage; it is the non-preemptible kernel critical section.**

## Reproduce the Experiments

The complete source code of the GPIO experiment (interference module, square-wave task, and Makefile) is embedded below, so it can be used directly. The EtherCAT demo is built on the open-source [ethercat-myctor](https://github.com/jjjadand/ethercat-myctor) project with a customized device controller; the complete demo package (controller override, run scripts, and CPU-load generator) is available here: [rt_ethercat_demo.zip](https://files.seeedstudio.com/wiki/zzd/rt_ethercat_demo.zip).

Switching between the two kernels is described in [Switch Between the Real-Time and Standard Kernels](#switch-between-the-real-time-and-standard-kernels). After each switch, verify with `uname -v` — the output should contain `SMP PREEMPT_RT` or `SMP PREEMPT` respectively.

### Prepare the Real-Time Kernel Source Tree (once)

:::note
The real-time DEB package ships the kernel image and modules but no headers package. Kernel modules must be built against a prepared source tree while the real-time kernel is running, otherwise `insmod` fails with `module_layout disagrees`.
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

`CONFIG_LOCALVERSION` must equal the suffix of `uname -r` after `6.8.12` (here `-1021-rt-tegra`), otherwise the module vermagic does not match. For the standard kernel, use `-1021-tegra` and prepare the tree the same way.

### Demo Source Code (GPIO Experiment)

Create a working directory and place the following three files in it:

```bash
mkdir -p ~/rt_demo && cd ~/rt_demo
```

`spinlock_holder.c` — the interference module:

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

`gpio_pwm.c` — the `SCHED_FIFO` square-wave task (requires `sudo apt install -y libgpiod-dev`):

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
To use a different GPIO pin, change the `CHIP` / `LINE` macros in `gpio_pwm.c`. List the available lines on your carrier board with `gpioinfo gpiochip0`, and pick an unused output-capable line on the 40-pin header.
:::

### Build the Interference Module for Both Kernels

```bash
# Standard kernel
make
# Real-time kernel
KBUILD_MODPOST_WARN=1 make KDIR=~/rt-kernel-src/kernel-noble
```

`KBUILD_MODPOST_WARN=1` is required for the real-time build: a tree that only ran `modules_prepare` has no `Module.symvers`, so modpost reports every kernel symbol as undefined — all false alarms.

### Run the Demos

GPIO demo (oscilloscope on the GPIO pin), under full CPU load:

```bash
stress --cpu 6 --io 4 --vm 2 --vm-bytes 64M &
sudo insmod spinlock_holder.ko demo_cpu=3 hold_us=300 period_us=1000
sudo ./gpio_pwm 3 250
```

EtherCAT demo (three phases: load only, load + spinlock, load only):

```bash
sudo ./run_demo.sh 10 15 15
```

The script brings up the EtherCAT master, waits for the bus, starts the CPU load, loads and removes the spinlock module on schedule (choosing the right `.ko` by kernel version), and cleans up at the end.

### Known Pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| `insmod: File exists` after changing parameters | Module parameters only apply at first load | Change via `/sys/module/spinlock_holder/parameters/`, or `rmmod` then `insmod` again |
| Interference seems loaded but the waveform is clean | The holder thread stopped without an error ("fake run") | Check that the `hold #` counter in `dmesg` keeps advancing; if not, `rmmod` and reload |
| `insmod: Invalid module format` | Module built against the other kernel | Rebuild against the running kernel's tree |
| `modpost: "kfree" ... undefined` | Prepared tree has no `Module.symvers` | Build with `KBUILD_MODPOST_WARN=1` |
| `openssl/opensslv.h: No such file` | Missing libssl-dev | `sudo apt install libssl-dev` |
| EtherCAT port shows `Link: DOWN` | Port grabbed by NetworkManager | `sudo nmcli dev set <interface> managed no` |
| Actuator refuses to activate after repeated watchdog trips | Drive firmware latch-up after many bus drops | Power-cycle the actuator |
| Everything breaks after interrupting the demo script | The spinlock module was left loaded | `sudo rmmod spinlock_holder`, then power-cycle the actuator if needed |

## Conclusion

On the standard kernel, a kernel spinlock held for one second freezes every task on that CPU for one second — including a top-priority `SCHED_FIFO` EtherCAT master. One second of frame loss is ten times the drive watchdog, so the bus drops out of OP and the motor stops, and repeated interference prevents recovery. On the PREEMPT_RT kernel, the same interference costs the real-time task single-digit microseconds. For hard real-time field buses, the real-time kernel is not "faster" — it is immune to being starved by activity inside the kernel, a property no amount of tuning can guarantee on the standard kernel.

## References

- https://wiki.seeedstudio.com/flash_preempt_rt_kernel_on_recomputer_jetson_jetpack_6_2_1/
- https://gitlab.com/etherlab.org/ethercat

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
