---
title: AI Voice Recognition Demo-1 (Wake Word)
description: ''
keywords:
  - xiao
  - nrf54lm20b
  - edge ai
  - wake word
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/edge_ai/xiao_nrf54lm20b_wake_word.webp
slug: /xiao_nrf54lm20b_ai_wake_word
sku:
last_update:
  date: 10/21/2026
  author: Brandy
createdAt: '2026-10-21'
updatedAt: '2026-10-21'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20b_ai_wake_word/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/XIAO_nRF54LM20B_Wiki_Banners/XIAO_nRF54LM20B_AI_Wake_Word.png" style={{width:600, height:'auto'}}/></div>

This tutorial walks through a wake word project on the **XIAO nRF54LM20B**: you enter your own wake word on Nordic's cloud platform **Edge AI Lab** and train it, first verify the recognition and tune the detection parameters with your computer's microphone, then deploy the model back onto the board — the on-board microphone captures audio, the **Axon NPU** runs real-time inference locally, and speaking the wake word lights the LED. The whole recognition process stays offline and uploads no audio.

<details>
<summary>What is the difference between a Wake Word and Keyword Spotting?</summary>

**Wake Word Detection** focuses on recognizing a single wake phrase, such as `Hey Seeed` — the phrase itself can contain two words, but to the model it is one unit. **Keyword Spotting (KWS)** can recognize several independent commands, such as `Play`, `Stop`, `Next`, each triggering a different action.

Edge AI Lab's training flow covers both uses: entering one wake phrase makes it a Wake Word, entering several commands makes it KWS. This tutorial trains a single wake word `seeed`, so it is the former.

</details>

The whole flow splits into two main phases and five steps:

1. **Train**: create a Solution on Edge AI Lab, enter the wake word command, and the platform collects data and trains automatically (about 2–3 hours);
2. **Tune**: use your computer's microphone to test wake and false-wake behavior on the web page, and adjust Threshold and Detections;
3. **Export**: download the finished model deployment package;
4. **Deploy**: integrate the model package into a PlatformIO project, build, sign, and flash;
5. **Verify**: say the wake word at the board and watch the LED and serial output.

## Hardware Preparation

You will need the following:

- 1 x [Seeed Studio XIAO nRF54LM20B](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html) (with on-board PDM microphone) <!-- TODO: confirm whether all 20B variants have an on-board mic, or only the Sense version; swap in the official 20B store link and product photo when available -->
- 1 x computer (macOS / Windows / Linux all work; screenshots in this tutorial are from macOS)
- 1 x USB Type-C data cable (data-capable)

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20B</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Get One Now 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

## Software Preparation

Training happens in the cloud, so locally you only need **PlatformIO**. Check in a terminal:

```bash
pio --version
```

You also need a [Nordic Edge AI Lab](https://ai.lab.nordicsemi.com/) account, which is free to register. The deploy step also uses Nordic's official runtime library sdk-edge-ai (the version must match the model); how to get it is in Step 2.

## Step 1 — Train the Model on Nordic Edge AI Lab

Open [Nordic Edge AI Lab](https://ai.lab.nordicsemi.com/), sign in, and go to **My Solutions → Add New Solution**:


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/17.png" style={{width:600, height:'auto'}}/></div>
<br/>


<!-- Image 1: My Solutions → Add New Solution screen -->

**1. Create a Solution**

<div className="table-center">

| Setting | Choose |
|---|---|
| Model | Axon |
| Mode | Train a new model |
| Task type | Classification <!-- TODO: matches the table on the gesture page; verify the Task type value against the actual wake-word creation UI --> |
| Solution Name | XIAO_M20B_Wakeword |

</div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/app_mic/1.png" style={{width:800, height:'auto'}}/></div>
<br/>


<!-- Image 2: new Solution configuration screen -->

**2. Enter the wake word command**


Edge AI Lab's voice solution is organized around **commands**: a command is a short phrase the device responds to when spoken, such as `Play`. This tutorial enters a single command `seeed`, which is our wake word.

After creation, the platform first shows an explanation that lays out the whole flow:

1. **Enter a command** — a command is a short phrase the device responds to when spoken;
2. **Start training** — training starts automatically and usually takes 2 to 3 hours depending on the number of commands, and may take longer in some cases;
3. **Run on a device** — once training is done, download the ready-made firmware package and deploy it to the device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/app_mic/9.png" style={{width:800, height:'auto'}}/></div>
<br/>

The concrete steps are three:

1. First add the wake word you want to use; after submitting, wait for the platform to review it;
2. Once approved, add the command again; it shows up at the top of the page for you to confirm;
3. Check the acknowledgment box, click next, and on the next page just wait for training to finish.



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/app_mic/3.png" style={{width:800, height:'auto'}}/></div>
<br/>


**3. Wait for training to finish and read the report**


When training is done, download the trained model file from the page for the deploy step later.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/app_mic/4.png" style={{width:800, height:'auto'}}/></div>
<br/>

The report shows the data the platform prepared for each command; confirm it is correct and start training.

Training runs automatically, and when it finishes you land on the model testing page. The point of this page is not to keep training but to verify two things: whether the model recognizes the wake word correctly and whether it false-wakes; and to tune the detection parameters until accuracy and false-wake are both acceptable — these parameters later go into the XIAO firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/app_mic/5.png" style={{width:800, height:'auto'}}/></div>
<br/>

On to testing and tuning.

<!-- Image 5: model testing page after training finishes -->

**4. Test and tune with your computer's microphone**

The page has three areas:

<div className="table-center">

| Area | Function | What you do |
|---|---|---|
| Run the model on your device | shows which files and parameters the deployed model needs | used later when deploying to the XIAO |
| Keyword Spotting model test | live-test the wake behavior with your computer's microphone | click the blue microphone to start |
| Detection Settings | adjust the recognition threshold and consecutive detection count | find the balance between accuracy and false-wake |

</div>

:::warning
**The web test is not the same as running the model on the XIAO.** When you click the blue microphone, what gets tested is the sound picked up by your computer's microphone; only after integrating the model, inference library, and detection config into the device firmware is it true on-device local recognition. Also, Nordic explicitly states that the detection parameters from the web test **are not written into the device firmware automatically** — they must be set manually in firmware (see the [Nordic Detection Settings documentation](https://docs.nordicsemi.com/bundle/edge-ai-lab/page/wake_word.html/detection-settings)).
:::



#### How to test

Start with the recommended parameters, click the blue microphone, and test three situations:

<div className="table-center">

| Test | Action | Expected result |
|---|---|---|
| Normal wake | say `seeed` 10 times in a row | recognize as many as possible |
| False wake | say Hi Seeed, Hey Siri, other English phrases | trigger as little as possible |
| Environmental interference | play music, speak from a distance, vary volume | watch for missed or false triggers |

</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/app_mic/6.png" style={{width:800, height:'auto'}}/></div>
<br/>

<!-- Image 6: live testing with the computer microphone -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/app_mic/7.png" style={{width:800, height:'auto'}}/></div>
<br/>

#### How to read the detection parameters

The page's recommended starting parameters look like this:

<div className="table-center">

| Category | Threshold | Detections |
|---|---|---|
| Keywords (the keyword `seeed`) | 0.2 | 2 |
| System (OTHER / SILENCE) | 0 | 4 |

</div>

**Threshold is a probability threshold.** Every prediction outputs a probability for `seeed`, for example:

- probability 0.15: below the 0.2 threshold, no trigger;
- probability 0.35: above threshold, counts as one valid detection;
- probability 0.90: high recognition confidence.

A lower threshold wakes more easily but also raises the false-wake risk.

**Detections is the consecutive detection count.** Keywords Detections = 2 means the model's predictions over consecutive audio windows have to hit the threshold at least 2 times in a row to trigger a wake. It does not mean you say the wake word twice — in the second or two you speak, the model already makes many predictions over consecutive audio windows, and this parameter debounces among them.

**OTHER and SILENCE are system categories**: `OTHER` is non-target speech, and `SILENCE` is a near-silent segment. Setting them to threshold = 0 and detections = 4 just lets the detection logic handle the non-keyword state stably; it does not make them trigger a wake.

:::note
What the top of the page shows is the **recommended starting value**, which may not equal what you actually configured in Detection Settings — double-check before testing.
:::

<!-- Image 7: recognition result of one test -->

#### How to tune after testing

<div className="table-center">

| Problem | Tuning suggestion |
|---|---|
| Saying `seeed` gets no response | drop Threshold from 0.2 to 0.15, or reduce the consecutive detection count |
| Other people speaking also wakes it | raise Threshold from 0.2 to 0.4 |
| Occasional misrecognition | increase Detections from 2 to 3 |
| Slow wake response | reduce Detections, but re-check false-wake behavior |

</div>

These tuning directions match the [official Nordic Detection Settings documentation](https://docs.nordicsemi.com/bundle/edge-ai-lab/page/wake_word.html/detection-settings). Once you are happy with the values, note them down — Step 2 writes them into the firmware Kconfig.

## Step 2 — Deploy the Model to the XIAO nRF54LM20B

There are two ways to deploy: build the project from scratch by hand, or use the example project we have already configured on GitHub and just replace the relevant files with your own content.


<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/seeed-xiao-nrf54lm20b" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

The steps below walk through the manual build.



Deploy needs two separate downloads, and you cannot skip either. This is where readers most easily get confused ("I downloaded the model package, why won't it build"): the model package is just the model; the inference runtime is a separate repository.

**1. Get the model package**
After training on the Edge AI Lab page, export (Deploy/Export) to get a ZIP, extract the `nrf_edgeai_generated/` folder, 7 files in total:

<div className="table-center">

| File | Required | Purpose |
|---|---|---|
| `nrf_edgeai_user_model.c` | ✅ | the model itself (weights/network structure) + all metadata macros |
| `nrf_edgeai_user_model.h` | ✅ | model interface declarations |
| `nrf_edgeai_user_types.h` | ✅ | input/output type definitions |
| `prj_example.conf` | ✅ | the Axon buffer Kconfig that must be copied line by line (differs per model) |
| `nrf_edgeai_user_model_axon.h` | optional | generated only in Axon/NPU mode (present in this project) |
| `nrf_edgeai_user_model_labels.h` | optional | generated only for wake-word/keyword solutions (present here, `{ "seeed" }`) |
| `README.md` | info | not compiled |

</div>

The instance in this tutorial is solution 97021 (wake word `seeed`, 3 classes OTHER/SILENCE/seeed), corresponding to `CONFIG_NRF_AXON_INTERLAYER_BUFFER_SIZE=6656`.

**2. Get the sdk-edge-ai v3 runtime library**
```bash
git clone https://github.com/nrfconnect/sdk-edge-ai.git <local sdk-edge-ai path>
git -C <local sdk-edge-ai path> checkout v3.0.0
```

This repository holds the nrf_edgeai + nrf_axon inference libraries (`include/`, `lib/`, `subsys/`), plus the official wake-word example `applications/ww_kws/` — which you use as a template when writing `main.c` later. It is not copied into the project; leave it anywhere and point to it at build time with the `XIAO_EDGE_AI_DIR` environment variable.

<details>
<summary>Why must you checkout v3.0.0?</summary>

The model's `.metadata` carries the runtime version that generated it; this project's model is `0x00000003`, which maps to the v3.x runtime. Using v2 sdk-edge-ai fails to build or run outright. When you train your own model, match the tag to the version number in the export package.

</details>

**3. Structure of the deploy project**

The project has 8 files — half copied from elsewhere, half newly written:

```
8_AI_Wakeword/
├── platformio.ini                # new, core configuration
├── flash.sh                      # new, build + sign + flash in one shot
├── src/
│   ├── main.c                    # new, the only application code (algorithm copied from the official ww_kws example)
│   └── nrf_edgeai_generated/     # copied verbatim from the extracted ZIP, zero modification
└── zephyr/
    ├── CMakeLists.txt            # carried over from the 7_AI_Gesture project
    ├── prj.conf                  # first few lines copied from prj_example.conf, the rest is board config
    ├── app.overlay               # new: power + pdm20 + axon
    └── Kconfig                   # new, tunable parameters like wake threshold
```

A summary of where each file comes from and what changes:

<div className="table-center">

| # | Source | What to copy | Where it goes | Changed? |
|---|---|---|---|---|
| 1 | Edge AI Lab ZIP extract | the whole `nrf_edgeai_generated/` folder (7 files) | `src/nrf_edgeai_generated/` | zero modification |
| 2 | (new) | `platformio.ini` | project root | — |
| 3 | (new, modeled on 2_Mic_demo) | `app.overlay` | `zephyr/app.overlay` | — |
| 4 | `prj_example.conf` from the ZIP | 7 effective config lines | the top section of `zephyr/prj.conf` | values copied verbatim |
| 5 | 7_AI_Gesture_5Class project | 4 integration-layer files | `zephyr/` | 2 small changes |
| 6 | (new, algorithm copied from the ww_kws example) | `main.c` | `src/main.c` | — |
| 7 | github.com/nrfconnect/sdk-edge-ai | the whole repository (v3.0.0) | local sdk-edge-ai clone directory | not in the project; referenced via env var at build time |
| 8 | (new) | `flash.sh` | project root | version number increments each time |

</div>

In one sentence: the ZIP package gives the "model trio" (`src/nrf_edgeai_generated` + the `prj.conf` header), the gesture project gives the "board trio" (CMake / integration layer / flash flow), and the official ww_kws gives the "algorithm one" (`main.c`).

**4. Copy in the model package**

Extract the ZIP to any directory (referred to below as `extract-dir`), then copy the whole model package folder into the project's `src/`:

```bash
# macOS / Linux
cp -R <extract-dir>/nrf_edgeai_generated <your 8_AI_Wakeword project>/src/

# Windows (PowerShell)
Copy-Item -Recurse <extract-dir>\nrf_edgeai_generated <your 8_AI_Wakeword project>\src\
```

:::warning
Do not change a single character, including `prj_example.conf` — leave it in the package as a reference; it does not take part in compilation, and the next step is where you copy content out of it. Of the 7 files, only `nrf_edgeai_user_model.c` gets compiled (explicitly listed by CMakeLists); the rest are all headers pulled in by `#include`.
:::

**5. Create platformio.ini**

```ini
[env:seeed-xiao-nrf54lm20b]
platform = https://github.com/Seeed-Studio/platform-seeedboards
framework = zephyr
board = seeed-xiao-nrf54lm20b
monitor_speed = 115200
; Source files are listed explicitly by zephyr/CMakeLists.txt (the model is not in PIO's src glob),
; so hand build control to the Zephyr app target:
board_build.zephyr.app_build_control = true
build_src_filter = -<*>
```

The reason for the last two lines: PIO by default globs `src/*.c` itself, but the model file lives in the `src/nrf_edgeai_generated/` subdirectory and must be specified explicitly, so PIO's source management is turned off.

**6. Create zephyr/app.overlay**

This file is written for this board (modeled on the 2_Mic_demo project's overlay), in full:

```dts
&imu_vdd {
        regulator-boot-on;    /* the mic's power rail! nPM1300 LDO1, shared with the IMU */
};

&pdm20 {
        status = "okay";      /* disabled by default in the SoC dtsi */
        queue-size = <16>;    /* driver RX queue 4→16 blocks (40→160 ms), absorbs jitter */
};

&axon {
        status = "okay";      /* enable the NPU node */
};
```

Three nodes, three sources: `imu_vdd` is XIAO board-level circuit knowledge (the easiest to miss — miss it and the mic has no data at all); `pdm20` is a fact from the SoC dtsi; `queue-size` is the fix after a stumble — with the default 4 blocks, the margin against a 9.2 ms / 10 ms inference window is too thin and the driver stalls.

<!-- TODO: verify whether the 20B board dtsi already ships imu_vdd regulator-boot-on — if so, the imu_vdd block here is dead code and can be removed (confirm before touching) -->

**7. Create zephyr/prj.conf**

The top section copies line by line from `src/nrf_edgeai_generated/prj_example.conf` in the ZIP package:

```ini
# ↓↓↓ the lines below are copied verbatim from nrf_edgeai_generated/prj_example.conf ↓↓↓
CONFIG_NRF_EDGEAI=y
CONFIG_NEWLIB_LIBC=y
CONFIG_FPU=y
CONFIG_NRF_AXON=y
CONFIG_NRF_AXON_INTERLAYER_BUFFER_SIZE=6656
CONFIG_NRF_AXON_PSUM_BUFFER_SIZE=0
# ↑↑↑ copy up to here ↑↑↑
```

:::tip
The two `*_BUFFER_SIZE` values are allocated at compile time per model — **when you swap models you must re-copy the values from the matching package** (the IMU gesture model is 80/0; this model is 6656/0).
:::

The bottom section is board configuration (serial, DMIC, PMIC, MCUboot, floating-point printf, stack size), sourced from the `prj.conf` of 2_Mic_demo and 7_AI_Gesture — this section stays as-is when you swap models.

**8. Copy 4 integration-layer files from the 7_AI_Gesture_5Class project**

From the `zephyr/` of the 7_AI_Gesture_5Class project, copy into the `zephyr/` of the 8_AI_Wakeword project:

<div className="table-center">

| Source file (7_AI_Gesture) | Target (8_AI_Wakeword) | Change |
|---|---|---|
| `CMakeLists.txt` | `zephyr/CMakeLists.txt` | ① change the `project()` name to wakeword; ② the `main.c` path in the trailing `target_sources` stays the same, and the model `.c` is still `nrf_edgeai_user_model.c` (same name, convenient) |
| `mdk_lm20b_compat.h` | `zephyr/mdk_lm20b_compat.h` | as-is, one line `#undef NRF54LM20A_XXAA` |
| `nrf_axon_platform_wrapper.c.in` | `zephyr/nrf_axon_platform_wrapper.c.in` | as-is (template, generated at CMake configure time) |
| `Kconfig` | `zephyr/Kconfig` | adjust parameters for the wake word: threshold 800 / window 20 / count 12 (was gesture parameters) |

</div>

These 4 files solve the three big PlatformIO + sdk-edge-ai build pitfalls (version header not generated, LM20A/B macro conflict, `static_assert`); they are model-independent and board-bound — which is why they are called the "integration layer": write them once and carry them over forever. The specifics of the three pitfalls are in this series' gesture recognition tutorial under "Porting essentials" <!-- TODO: add in-page jump link -->.

**9. Write src/main.c**

This is not written from scratch; copy function-by-function against a reference:

<div className="table-center">

| Part of `main.c` | Where it is copied from |
|---|---|
| `mic_start()` (PDM config: pcm_rate=16000, block_size=320, pdm_clk range) | mic init from 2_Mic_demo + the same parameters from the official ww_kws |
| `wakeword_postprocess()` (bitmap sliding-window debounce) | copied line by line from sdk-edge-ai `applications/ww_kws/src/ww/wakeword.c` |
| main loop `feed_inputs → run_inference → INPROGRESS silent skip` | the data path from ww_kws (note: the INPROGRESS return value must be handled in both places) |
| banner delayed to DTR, LED via k_timer, [STAT] every 5 s | details polished on our own |

</div>

Key design: the dmic block size is deliberately equal to the model window (both 160 samples / 10 ms), so each `dmic_read()` is exactly one complete window; `BUILD_ASSERT` locks this correspondence at compile time.




**10. Build**

sdk-edge-ai is not copied into the project; reference it via env var at build time:

```bash
cd <your 8_AI_Wakeword project directory>
XIAO_EDGE_AI_DIR=<local sdk-edge-ai path> pio run
```

Why: the PIO platform builder sees `CONFIG_NRF_EDGEAI=y` in `prj.conf` and registers the directory `XIAO_EDGE_AI_DIR` points at as a Zephyr external module (the CMakeLists also filters out the old v2 under the framework's own `_pio`, to prevent double registration).

**11. Flash**

The signing parameters map one-to-one onto the MCUboot partition table (`--header-size 0x800 --align 16 --slot-size 0x1BE000`, carried over from the flash.sh validated in 7_AI_Gesture, only the version number changes):

```bash
IMGVER=0.0.116 ./flash.sh
```

:::warning
The version number must increase on every flash, or MCUboot rejects it as "same version".
:::

There are two ways into DFU: hold B0 and tap RST to enter manually, or trigger it in software at 1200 bps with no button press <!-- TODO: the software-trigger command is to be filled in -->. Flash details (partition table, signing parameters, common pitfalls) are in this series' Getting Started page <!-- TODO: add jump link -->.

## Verify the Result

Say `seeed` at the board; the on-board LED lights green, and the serial port prints a wake prompt alongside:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/app_mic/8.png" style={{width:800, height:'auto'}}/></div>
<br/>



## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
