# English artwork review — local Wiki draft

Prepared on October 23, 2026 using the built-in imagegen editing tool. These five English PNGs are local source copies of the uploaded article artwork. The original source images and the two GIFs have not been changed. Exact editing prompts are recorded in `english-image-prompts.json`.

| English asset | Review and correction |
| --- | --- |
| `jetson-mtp-cover-en.png` | All Chinese display text translated. Removed the original J501 label to avoid implying that the illustrated enclosure identifies the measured AGX Orin 32GB device. Preserved the illustration and NVIDIA Jetson branding. |
| `autoregressive-token-generation-en.png` | English headings, prompt, annotations, context timeline, and example response. Uses schematic Token 1/2/3 labels instead of suggesting complete English words are always one token. Checked left-to-right progression and context feedback. |
| `prefill-vs-decode-en.png` | English headings and annotations; parallel input processing is distinct from sequential output generation. Example word boundaries remain schematic, as the figure caption states. Checked arrow and cache labels. |
| `autoregressive-vs-mtp-en.png` | English labels; the proposer produces candidates, target verification accepts T2–T4 and rejects X, and only accepted tokens enter the context. Matching output rows are schematic. The illustration explicitly does not specify the measured draft depth, which is 2. |
| `jetson-voice-assistant-pipeline-en.png` | English labels for user voice, ASR, local LLM, TTS, and spoken response. Annotation locates MTP at the LLM decode stage, without implying acceleration of ASR or TTS. |

All five outputs were visually inspected for remaining Chinese text, English spelling, clipped labels, diagram direction, and consistency with the article. All five article image tags include descriptive English alt text. Any illustrative acceleration wording describes the intended stage, not a guaranteed speedup for every workload.

The GIF files were not edited. The article uses uploaded `mtp_vs.gif` and `mtp_demo.gif` in the Introduction. Their alt text was checked against the middle and final frames. This folder includes no copied GIF.

Keep this review and prompts separate from the article. The article remains a local draft; publication is a separate action.

## Editorial asset checklist

The English static PNGs are stored under `static/img/jetson-mtp-draft/` in this checkout. Original PNGs and GIFs remain unchanged in the source note's `Tmp/images/` folder. The article now uses uploaded PNGs and GIFs under `https://files.seeedstudio.com/wiki/Jetson/Application/`. The English editing review and prompts are saved with the local artwork.

| Asset / position | Original source filename | Uploaded filename | English alt text |
| --- | --- | --- | --- |
| 1 / Introduction | `Pasted image 20261023105746.png` | `jetson-mtp-cover-en.png` | NVIDIA Jetson illustration with Qwen3.5-4B, llama.cpp, and an MTP token-flow graphic. |
| 2 / Autoregressive generation | `Pasted image 20261021111409.png` | `autoregressive-token-generation-en.png` | Autoregressive decoding adds each generated token to the context before predicting the next. |
| 3 / Prefill and decode | `Pasted image 20261021113558.png` | `prefill-vs-decode-en.png` | Prefill processes the prompt on the left; decode generates output tokens step by step on the right. |
| 4 / MTP verification | `Pasted image 20261022110151.png` | `autoregressive-vs-mtp-en.png` | Standard decoding on the left; MTP candidate drafting and target-model verification on the right. |
| 5 / Code demonstration | `jetson-mtp-lab-20261022-110633-200af2.gif` | `mtp_vs.gif` | MTP OFF on the left and MTP ON on the right generating Fibonacci code with Qwen3.5-4B on Jetson AGX Orin. |
| 6 / Crowd demonstration | `mtp demo (1600px) 1.gif` | `mtp_demo.gif` | Video-based ROI tracking on the left, with MTP OFF and ON crowd-analysis results in the center and right panels. |
| 7 / Voice use case | `Pasted image 20261023094537.png` | `jetson-voice-assistant-pipeline-en.png` | Voice-assistant pipeline from speech recognition through a local LLM to speech synthesis. |

The Introduction holds both demo GIFs. Duplicate placeholders and all visible Figure captions have been removed. GIF translation remains deferred; files and image order were preserved.

## Prose and accessibility revision

The article now uses the title `Speed Up llama.cpp on NVIDIA Jetson AGX Orin with MTP`. The slug remains `/jetson/accelerate_llm_inference_mtp`. All seven alt descriptions were shortened to describe the image rather than repeat benchmark findings. Static artwork and GIF files were not edited in this revision. Code blocks and historical benchmark values were retained.

## Current image audit

All seven rendered image resources were checked. The five uploaded PNGs match the previously reviewed local English files byte for byte. The code GIF shows OFF on the left and ON on the right; the crowd GIF shows detection on the left, OFF analysis in the center, and ON analysis on the right. Each now has its own matching alt. No visible Figure captions remain.

## Source-note structure revision

The article follows the author's source-note structure: generation basics, MTP verification, acceleration and draft depth, a short enablement example, and practical applications. The author's Introduction and all seven image tags were preserved. Build steps now link to llama.cpp documentation; project setup, recording, and measurements link to README sections. Only one MTP launch code block remains.
