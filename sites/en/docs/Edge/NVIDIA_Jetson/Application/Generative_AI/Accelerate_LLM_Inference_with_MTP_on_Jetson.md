---
title: Speed Up llama.cpp on NVIDIA Jetson AGX Orin with MTP
description: Enable Multi-Token Prediction in llama.cpp on NVIDIA Jetson AGX Orin. Follow Qwen3.5-4B setup steps and compare MTP ON/OFF benchmark results.
keywords:
  - NVIDIA Jetson
  - Jetson AGX Orin
  - MTP
  - Multi-Token Prediction
  - speculative decoding
  - llama.cpp
  - Qwen3.5
  - edge AI
slug: /jetson/accelerate_llm_inference_mtp
draft: false
image: https://files.seeedstudio.com/wiki/Jetson/Application/jetson-mtp-cover-en.png
last_update:
  date: 10/23/2026
  author: zibo
createdAt: '2026-10-23'
updatedAt: '2026-10-23'
url: https://wiki.seeedstudio.com/jetson/accelerate_llm_inference_mtp/
---

# Speed Up llama.cpp on NVIDIA Jetson AGX Orin with MTP
<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-mtp-cover-en.png" alt="NVIDIA Jetson illustration with Qwen3.5-4B, llama.cpp, and an MTP token-flow graphic." />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

This wiki explains how Multi-Token Prediction (MTP) works and how to enable it in **llama.cpp on NVIDIA Jetson AGX Orin with Qwen3.5-4B**. Follow the setup and compare MTP ON/OFF performance using a local crowd-monitoring demo.

First, look at the actual test results. We had the LLM generate a Python script for computing the Fibonacci sequence, and compared the generation speed with and without the MTP model enabled.

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/Jetson/Application/mtp_vs.gif" alt="MTP OFF on the left and MTP ON on the right generating Fibonacci code with Qwen3.5-4B on Jetson AGX Orin." />
</div>

Without MTP mode enabled, the Qwen3.5 4B model outputs tokens at a rate of about 25.6 tokens/s, whereas with MTP mode enabled, the same model on the same device reaches a generation speed of 49.7 tokens/s. It can be seen that for this kind of relatively deterministic content, the model's generation speed nearly doubles. This gives us some insight: for some relatively routine tasks, enabling MTP mode can bring decent performance improvement gains!

Look at another visual analysis scenario: define an ROI region, and monitor whether the ROI count stays at or above five people for 1.5 seconds; if so, call the LLM for anomaly analysis and diagnosis. Let’s see how much faster it is with MTP mode enabled in the visual analysis scenario!

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/Jetson/Application/mtp_demo.gif" alt="Video-based ROI tracking on the left, with MTP OFF and ON crowd-analysis results in the center and right panels." />
</div>

As can be seen, for the above scenario, enabling MTP mode can shorten our task completion time by about 3 seconds—this optimization is quite significant!



## Why Does LLM Text Generation Take Time?

### One token at a time

Ask a model where NVIDIA Jetson can be used, and it may answer with robotics, industrial vision, and edge monitoring. The sentence appears gradually because an autoregressive LLM predicts one token, adds it to the context, and uses that context to predict the next.

A token may be a word, part of a word, or a punctuation mark. Each new prediction depends on what came before it, so the model repeats this process until the response is complete.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/autoregressive-token-generation-en.png" alt="Autoregressive decoding adds each generated token to the context before predicting the next." loading="lazy" />
</div>

At 20 tokens/s, generating 500 tokens takes about 25 seconds of decode time. That wait becomes noticeable when a local assistant writes code or a report.

### Prefill and decode

LLM inference has two main stages.

| Stage | Main task | Characteristic |
| --- | --- | --- |
| Prefill | Read the prompt and build context state | Input positions can be processed in parallel |
| Decode | Generate the response | Later tokens depend on earlier output |

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/prefill-vs-decode-en.png" alt="Prefill processes the prompt on the left; decode generates output tokens step by step on the right." loading="lazy" />
</div>

For a single-user LLM on Jetson, decode often spends much of its time reading model weights and cached context from memory. The GPU has parallel computing capacity, but a sequence of single-token steps may make limited use of it. MTP primarily targets this decode stage.

## What Is Multi-Token Prediction?

Multi-Token Prediction trains additional prediction heads or layers to propose future tokens. These candidates can then be used in speculative decoding, where the target model verifies several positions together before accepting output.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/autoregressive-vs-mtp-en.png" alt="Standard decoding on the left; MTP candidate drafting and target-model verification on the right." loading="lazy" />
</div>

When several candidates pass verification, the response advances by multiple tokens in one target-model pass. If a candidate fails, the runtime keeps the accepted prefix and discards the rejected candidate and remaining draft. The target model continues from that point.

This reduces the number of serial decoding passes when the proposals are accurate enough. The target model still checks the output. Correct lossless speculative decoding preserves its greedy result or sampling distribution, although quantization and runtime numerical differences can affect practical behavior.

The [multi-token prediction paper](https://arxiv.org/abs/2404.19737) explains the training idea. The [llama.cpp speculative decoding documentation](https://github.com/ggml-org/llama.cpp/blob/master/docs/speculative.md) describes its use during inference.

## Why Can MTP Be Faster?

### More useful output per verification

Batch verification lets the target model check several candidates together. In a memory-bandwidth-limited workload, that can cost less than generating the same tokens through separate serial passes.

Drafting and verification also take time. MTP speeds up generation only when the saved work exceeds this extra cost. A useful diagnostic is the draft acceptance rate, calculated as accepted draft tokens divided by generated draft tokens. Also measure how far each verification advances the response and how long the complete request takes.

### Draft depth needs testing

The maximum draft length is controlled by `--spec-draft-n-max`. A longer draft gives the target model more candidates to check, but later candidates may be less accurate. Discarding them can outweigh the benefit of a larger batch.

Start with a small depth and compare it on your own prompts. The Edge Crowd Agent comparison uses depth 2. A setting that works well for regular code or report formats may behave differently on another workload.

## Enable MTP in llama.cpp on Jetson

The demonstrations use the following setup.

| Component | Configuration |
| --- | --- |
| Hardware | NVIDIA Jetson AGX Orin 32GB |
| JetPack | 6.2.1 |
| Runtime | llama.cpp with CUDA |
| Model | Qwen3.5-4B with MTP tensors |
| Quantization | Q4_K_M GGUF |
| Comparison | MTP OFF / MTP ON |

Build llama.cpp with CUDA by following the [official build instructions](https://github.com/ggml-org/llama.cpp/blob/master/docs/build.md). Choose the [MTP-enabled Qwen3.5-4B GGUF](https://huggingface.co/unsloth/Qwen3.5-4B-MTP-GGUF), and check that your binary's help output lists `draft-mtp`.

Once the runtime is ready, the MTP launch command is short.

```bash
llama-server \
  -hf unsloth/Qwen3.5-4B-MTP-GGUF:Q4_K_M \
  -ngl 99 -c 8192 -np 1 \
  --spec-type draft-mtp \
  --spec-draft-n-max 2
```

Use the `llama-server` binary from your build. For a downloaded model, replace `-hf` with `-m` followed by the local GGUF path.

`--spec-type draft-mtp` enables MTP; `--spec-draft-n-max` controls its depth. For the OFF comparison, use `--spec-type none` and keep the model and shared settings unchanged.

After generation, check the startup log for the loaded MTP tensors and the server's draft acceptance statistics. Use one slot and text-only requests for this setup; consult the [model publisher's instructions](https://huggingface.co/unsloth/Qwen3.5-4B-MTP-GGUF) for current compatibility restrictions.


## Where Is MTP Useful?

### Inspection and monitoring reports

A Jetson can collect detections, sensor readings, and equipment logs, then ask a local LLM to write an inspection report. Recurring fields and descriptions make this a useful workload for testing candidate acceptance. The benefit is a shorter wait for the written report; real-time control and protection remain separate.

### Local coding assistants

Python scripts, shell commands, and device configuration files often produce relatively long responses with regular syntax. The Fibonacci example in the Introduction shows the potential on this device. Generated code still needs to be checked and tested.

### Offline voice assistants and robots

A voice assistant passes recognized speech to the local LLM, then sends its response to text-to-speech.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-voice-assistant-pipeline-en.png" alt="Voice-assistant pipeline from speech recognition through a local LLM to speech synthesis." loading="lazy" />
</div>

MTP can shorten the LLM's decode stage for longer replies. Speech recognition, synthesis, and streaming determine when the user actually hears an answer, so measure time to first usable speech as well as full response time.

### Local knowledge and technical explanations

Troubleshooting instructions and long answers based on device logs can spend substantial time generating output. These are worth testing. For a long document that needs only a one-line answer, prompt processing may dominate and leave little decode time to save.

## When Is MTP Worth Enabling?

A compatible model is the first requirement. The runtime must support its prediction components, and the extra drafting work must pay for itself on your hardware and prompts. Higher acceptance and longer outputs often help, while low acceptance or very short replies can make MTP slower.

Compare the time your application actually needs. Faster decode does not shorten image processing, tool execution, or model loading by the same factor. Keep the model, input, output limits, and sampling settings consistent, then decide from the measured result.

## Try the Crowd-Monitoring Demo

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/pipeline.png" alt="Edge Crowd Agent pipeline from video detection and ROI alerts to local LLM tools and reports, with MTP ON/OFF decoding." loading="lazy" />
</div>

The source for the opening demonstration is [Edge Crowd Agent](https://github.com/zibochen6/edge-crowd-agent). YOLO11n and ByteTrack measure current ROI occupancy, and a local LLM explains the saved count and movement evidence when an event is triggered.

Follow **[Start on Jetson in the README](https://github.com/zibochen6/edge-crowd-agent#start-on-jetson)** for dependencies, model and video paths, environment checks, and startup. The project uses uv with system Python 3.10 to retain access to JetPack's TensorRT bindings.

After startup, choose MTP OFF or ON and select **Start demo**. Video detection stays on the left, with analysis and tool progress on the right. The [recording guide](https://github.com/zibochen6/edge-crowd-agent#record-off-and-on) explains how to run both demonstrations.

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/Jetson/Application/mtp_demo.gif" alt="Video-based ROI tracking on the left, with MTP OFF and ON crowd-analysis results in the center and right panels." />
</div>

The default event condition is at least 5 people in the ROI for 1.5 seconds of continuous video time. The LLM receives structured evidence rather than video pixels; brief tracks support an occupancy assessment, but cannot establish intent or prolonged loitering.

For a controlled comparison, use the same frozen event rather than two separate recordings. The README's [benchmark section](https://github.com/zibochen6/edge-crowd-agent#benchmarks-and-measured-latency) provides the test method and measured results, with model loading listed separately.

## References

- [Edge Crowd Agent source and usage](https://github.com/zibochen6/edge-crowd-agent)
- [Edge Crowd Agent benchmark records](https://github.com/zibochen6/edge-crowd-agent/blob/main/docs/measurements/behavior-v3-fast.json)
- [Jetson AI Lab speculative decoding tutorial](https://www.jetson-ai-lab.com/tutorials/speculative-decoding/)
- [llama.cpp speculative decoding documentation](https://github.com/ggml-org/llama.cpp/blob/master/docs/speculative.md)
- [llama.cpp SPEED-Bench](https://github.com/ggml-org/llama.cpp/tree/master/tools/server/bench/speed-bench)
- [Qwen3.5-4B MTP GGUF model](https://huggingface.co/unsloth/Qwen3.5-4B-MTP-GGUF)
- [Better & Faster Large Language Models via Multi-token Prediction](https://arxiv.org/abs/2404.19737)

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
