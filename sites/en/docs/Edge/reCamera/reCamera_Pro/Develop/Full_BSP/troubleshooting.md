---
description: Diagnose full source package issues based on build, flashing, boot, and runtime symptoms.
title: BSP Troubleshooting
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_troubleshooting
sku: 10003420
sidebar_position: 8
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/recamera_pro_bsp_troubleshooting/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# BSP Troubleshooting

The general rule is to **identify the failing layer first**. This SDK has five layers, each with different debugging methods:

```text
1. Host environment     → setup_build_env.sh --check / ./build.sh check
2. Build                → build.sh logs, make info, help <component>
3. Images and flashing  → output/image/, upgrade_tool, serial console
4. System boot          → serial console at 1500000, init scripts, /var/log
5. Application/runtime  → /var/log/Recamera2_developer.log, processes, ports, configuration
```

## 1. General Diagnostic Tools

| Command | Purpose |
| --- | --- |
| `./build.sh check` | Check host build dependencies |
| `./build.sh info` | Print the current BoardConfig, all non-empty `RK_*` variables, `make info` from the three component SDKs, and power-domain checks |
| `./build.sh help <component>` | Print the actual `make` command and arguments for a component so you can reproduce it manually |
| `make -C project/app/<app> V=1` | Enable detailed output for an application build |
| `make V=1 -C media/samples` | Enable detailed output for media (a non-empty `V` disables `CMD_DBG=@` quiet mode) |
| `./build.sh DEBUG app` | Rebuild with `-O0 -g` and skip stripping during packaging |
| `./build.sh ASAN app` | Rebuild with AddressSanitizer to investigate memory problems |
| `/bin/sdkinfo` on the device | Identify the build and BoardConfig running on the device |
| `cat /etc/ota_version` on the device | Check the firmware version |

`build.sh` sets `trap 'err_handler' ERR`; on failure, it prints the failed function and line number. Search the log for `err_handler` or `Error:` to locate the problem quickly.

## 2. Host Environment and Build Issues

| Symptom | Cause | Resolution |
| --- | --- | --- |
| `./build.sh --help` opens the board-selection menu | `lunch` has not been run; the script checks for `.BoardConfig.mk` before parsing arguments | Run `./build.sh lunch` first; then `help` / `--help` will work |
| `Not found tool aarch64-rockchip1240-linux-gnu-gcc, please install first !!!` | Toolchain directory is missing or not executable | Confirm `tools/linux/toolchain/aarch64-rockchip1240-linux-gnu/bin/` exists; if needed, source `tools/linux/toolchain/<tc>/env_install_toolchain.sh` |
| `*** error: Please Check Configure !!!` / `build app depend on media libs and header files` | App build started before media was built | Run `./build.sh media` first and confirm `output/out/media_out/{include,lib}` exists |
| `Build rootfs is not yet complete, packaging cannot proceed!` | rootfs tar archive was not generated | Run `./build.sh rootfs` and check `output/out/sysdrv_out/rootfs_glibc_rv1126b.tar` |
| It is unclear which app failed to build | `project/app/Makefile` builds apps serially with `$(foreach)` and exits on the first failure | Reproduce the build with `make -C project/app/<app> V=1` |
| Rust app (`recamera_services`) produces an armv7 binary | The app Makefile defaults to `armv7-unknown-linux-gnueabihf` | Run `make SERVICE_TARGET=aarch64-unknown-linux-gnu` |
| `cross` reports an error or hangs | Docker is stopped, or the user is not in the docker group | Run `sudo systemctl start docker`; log out and back in |
| Node frontend build fails | Node.js version is below 18 | Run `nvm use 18` or use the version installed by `setup_build_env.sh` |
| CMake version is too old | `recamera_ipc` requires CMake ≥3.21 | Use the CMake installed by `setup_build_env.sh` and check PATH order |
| protobuf-related build errors | `libprotobuf-dev` / `protobuf-compiler` is missing | Run `sudo apt install libprotobuf-dev protobuf-compiler` |
| Unexpected errors after switching boards | Outputs from old and new configurations are mixed | Run `./build.sh clean`, then rebuild |
| Disk is full | Buildroot, kernel, and media outputs are large | Keep at least 20 GB free (100 GB recommended); use `du -sh output sysdrv/source/buildroot` to locate usage |
| Permission problems after one build as root | Build outputs are owned by root | Run `sudo chown -R $USER:$USER .` and rebuild |
| Scripts behave incorrectly because symbolic links are missing | Files were transferred through Windows | Re-extract the original tar archive; see [Download and Extract](/recamera_pro_bsp_download/) |

## 3. Flashing Issues

| Symptom | Cause | Resolution |
| --- | --- | --- |
| `upgrade_tool ld` does not list the device | Not in Maskrom / Loader mode; udev rule missing; not run with sudo | Install `88-rockusb.rules`, then run `udevadm control --reload-rules && udevadm trigger`; confirm `lsusb` shows a `2207:` device; use `sudo` |
| `Permission denied` when running `upgrade_tool` | Execute permission was lost during extraction | Run `chmod +x tools/linux/Linux_Upgrade_Tool/upgrade_tool` |
| `./rkflash.sh update` does nothing | The branch is commented out in the script | Run `sudo upgrade_tool uf output/image/update.img` |
| Unexpected partition behavior after `./rkflash.sh all` | `all` does not flash `env.img` | Run `upgrade_tool di -p output/image/env.img` manually (or use `parameter.txt`) |
| `./build.sh sdcard_upgrade` produces no output | The Recamera2 board configuration does not define `RK_SDCARD_UPGRADE_UBOOT_DEFCONFIG`; `check_config` returns silently | Add the required variables to the board configuration; see [System Customization (DTS / Kernel / Buildroot / Overlay)](/recamera_pro_bsp_system_customization/) |
| Device is bricked after flashing was interrupted | Loader was not written completely | Force Maskrom mode, run `upgrade_tool ul download.bin`, then flash again |
| `Writing 'xxx' failed` | Image size does not match the partition size | Check that `boot.img` is under 11 M and `rootfs.img` is under 3 G |

## 4. Boot Issues

**The serial console is the only reliable channel:** 1500000 8N1, `console=ttyFIQ0`.

| Serial-console symptom | Diagnosis | Resolution |
| --- | --- | --- |
| No output at all | Loader / DDR did not start, or the serial connection / baud rate is wrong | Confirm 1500000 baud; reflash `idblock.img` + `download.bin`; measure the serial TX signal |
| U-Boot appears, then stops | Kernel image or DTB problem | Reflash `boot.img`; check `RK_KERNEL_DTS` |
| `Kernel panic - not syncing: VFS: Unable to mount root fs` | rootfs does not match boot, or PARTUUID changed | Use `boot` and `rootfs` from the same build; after partition changes, reflash env |
| Repeated resets with watchdog messages on serial | A blocked process prevented watchdog refresh (`-T 30`) | Stop `S15watchdog` and investigate; check for a stuck process |
| System boots but has no network | udhcpc script or DNS-priority issue | See the network troubleshooting section in [Device Access and Debugging](/recamera_pro_bsp_device_debug/) |
| Time is wrong by a whole number of hours | `S20hwclock` uses `--hctosys --utc`, although the comment says the RTC stores local time | Confirm whether the RTC stores UTC or local time, then adjust the script if needed |
| Cannot enter Linux but U-Boot works | rootfs is corrupted | Flash only rootfs with `sudo ./rkflash.sh rootfs` |

Check the boot sequence with:

```bash
# ls /etc/init.d/ /oem/usr/etc/init.d/          # Available startup scripts
# dmesg | head -50                               # Early kernel logs
# cat /var/log/Recamera2_developer.log | head    # Application logs
# ps w                                             # Processes that actually started
```

## 5. Runtime and Application Issues

### Shared Library Not Found

```bash
# ldd /userdata/my_app
```

- Missing `librockit.so`, `librknnrt.so`, etc. → `LD_LIBRARY_PATH` does not include `/oem/usr/lib`. Login shells set it through `/etc/profile.d/RkEnv.sh`; for non-login contexts (init scripts, cron), source the file or export the variable explicitly.
- Missing third-party library → the library is not in the rootfs. Enable its Buildroot package; see [System Customization (DTS / Kernel / Buildroot / Overlay)](/recamera_pro_bsp_system_customization/).
- At link time, you may also need `-Wl,-rpath,/oem/usr/lib`; see [Choose a Development Path](/recamera_pro_dev_path/).

### Architecture / ABI Mismatch

```bash
# file /userdata/my_app        # Must be ARM aarch64
```

`Exec format error` means the binary was built for x86-64. `GLIBC_2.xx not found` means the host toolchain is newer than the target device's runtime.

### Video Issues

| Symptom | Cause | Resolution |
| --- | --- | --- |
| Sample cannot open VI / device node is busy | `rkipc` already owns the device | Run `sh /oem/usr/bin/RkLunch-stop.sh`, then retry; restore the service when finished |
| Image is all black or green | Sensor not detected or IQ file missing | Run `dmesg | grep -i <sensor>` and check `/oem/usr/share/iqfiles/` |
| Wrong colors or heavy noise | IQ file does not match the sensor | Compare `RK_CAMERA_SENSOR_IQFILES` with the installed sensor |
| Cannot receive the RTSP stream | go2rtc has not enabled external port 554 | Check `[video.0.rtsp] enable` in `/userdata/config/rkipc.ini`, then restart `S50go2rtc` |
| Web UI shows video but an external player does not | go2rtc API is bound to 127.0.0.1 | Use WebRTC on `:8555` or forward port `1984` over SSH |
| `/dev/videoN` number changed | Different firmware versions enumerate devices differently | Check on the device with `v4l2-ctl --list-devices`; do not hard-code the number |

See `docs/zh/media/Rockchip_Trouble_Shooting_Linux_VENC_CN.pdf` for Rockchip's video troubleshooting guide.

### NPU / AI Issues

| Symptom | Cause | Resolution |
| --- | --- | --- |
| `rknn_init` fails | Model was not converted for rv1126b, or Toolkit and Runtime versions do not match | Convert again with `target_platform='rv1126b'`; check the board's `librknnrt.so` version (internal baseline 2.3.2) |
| Inference output is completely wrong | Preprocessing mismatch (mean/std, RGB/BGR, NCHW/NHWC, resize policy) | Check the export script parameters instead of guessing |
| Results are inaccurate | INT8 calibration set is not representative | First establish an FP16 baseline, then quantize again with a better calibration set |
| OOM / process killed | LLM / VLM uses too much memory | Check `memory_usage` with `rkllm_benchmark_demo`; try a smaller quantization |
| Inference is slow | Only one NPU core is in use | Set `rknn_set_core_mask(ctx, RKNN_NPU_CORE_0_1)` |
| Performance degrades after a long run | Thermal throttling | Check thermal status; see `docs/zh/bsp/Rockchip_Developer_Guide_Thermal_CN.pdf` |
| VLM output is garbled or unexpected | Vision special tokens do not match | Pass `img_start` / `img_end` / `img_content` at runtime |

### Audio Issues

See the issue table in [Audio Development](/recamera_pro_audio_development/). The most common problem is opening `hw:0,0` directly instead of using dsnoop, resulting in `Device or resource busy`.

### Services and Ports

```bash
# netstat -tlnp        # 22 / 7681 / 21 / 8555 / 1984 / 8765 / 554 / 5554
# ps w | grep -E 'rkipc|gmgr|skt2ws|tmir|rcisd|go2rtc|ttyd|notify'
# /etc/init.d/S49notify start|stop
# /oem/usr/etc/init.d/S50go2rtc restart
```

If SSH rejects a correct password, PAM lockout may have been triggered (5 failures / 300 seconds). The state file is `/userdata/config/system/login_lock.json`; rebooting clears it.

If the ttyd page says the user is not allowed, the allowlist in `ssh-login-whitelist.sh` contains only `root` and `admin`.

If FTP does not show the config directory, `hide_file` / `deny_file` in `vsftpd.conf` intentionally hide it. Use SFTP instead.

### Logs

```bash
# tail -f /var/log/Recamera2_developer.log    # Human-readable
# tail -n 100 /var/log/Recamera2.log          # JSON for programmatic parsing
# dmesg                                        # Kernel logs
```

WebSocket live logs on port 8765 bind to 127.0.0.1. From the host, use `ssh -L 8765:127.0.0.1:8765 root@<IP>`.

### Memory and Performance

The kernel has debug nodes enabled; inspect them with:

```bash
# cat /proc/rk_cma/*        2>/dev/null      # CONFIG_RK_CMA_PROCFS
# cat /proc/rk_dmabuf/*     2>/dev/null      # CONFIG_RK_DMABUF_PROCFS
# cat /proc/rk_memblock/*   2>/dev/null      # CONFIG_RK_MEMBLOCK_PROCFS
# cat /proc/rk_rga/*        2>/dev/null      # CONFIG_ROCKCHIP_RGA_PROC_FS
# ls /sys/kernel/debug/                       # CONFIG_DEBUG_FS
```

Exact node names depend on the device and still need hardware verification. Note that `RK_BOOTARGS_CMA_SIZE="8M"` sets a small CMA region; check it first if large contiguous allocations fail.

Coredumps are enabled with `CONFIG_ELF_CORE=y`. `__BUILD_ENABLE_COREDUMP_SCRIPT()` in `build.sh` can generate an enablement script. Use it together with `IMAGE/.../DEBUG_FILES/kernel/vmlinux.tar.bz2` and a cross-gdb to analyze a dump.

## 6. Information to Include in a Bug Report

For an internal report or a Rockchip issue (see `docs/en/Rockchip_User_Guide_Bug_System_EN.pdf`), collect this information in one pass:

```bash
# On the host
./build.sh info > info.txt 2>&1
cat IMAGE/*/build_info.txt

# On the device
/bin/sdkinfo
cat /etc/ota_version
uname -a && cat /proc/cmdline
dmesg > dmesg.txt
cat /var/log/Recamera2_developer.log > app.log
cat /run/board_id.env
netstat -tlnp
ps w
```

Also include the complete serial boot log (1500000 baud), reproduction steps, and the path to the `IMAGE/..._RELEASE_TEST/` archive.

Static source findings, their evidence, impact, and verification status are collected in [Source Review and Known Issues](/recamera_pro_sdk_source_notes/) to keep maintenance audits separate from operational procedures. If you encounter a related behavior, verify it against the current SDK files and version first.

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