---
title: Arduino Introduction
nointro:
---

---
Arduino is an open-source prototyping platform based on easy-to-use hardware and software. Arduino boards are able to read inputs - light on a sensor, a finger on a button, or a Twitter message - and turn it into an output - activating a motor, turning on an LED, publishing something online. You can tell your board what to do by sending a set of instructions to the microcontroller on the board. It is like the brain of a project.

Because it is so flexible and open source, Arduino is the best solution if you are interested in creating interactive objects or environments no matter you are artists, designers or hobbyists.

One of Seeed Studio’s motto is “Grow the Difference”, which has now become part of the culture of the company. This is not just reflected from what we are doing in popularizing open source culture, but also from our products. Ever since the company funded, we are continuously creating our own open platform to differentiate from the existing one.

Here at  Seeed, you can find not only Arduino boardssuch such as Arduino Nano and Arduino Mega, but also many boards that drived fom Arduino such as Seeeduino, a joint effort by Seeed Studio and Arduino. Seeeduino is compatible with Arduino while has more powerful functions and lower price. To start with, you can try the latest version Seeeduino V4.2 or Seeeduino Mega that corresponding to Arduino Mega.

## Product  List
---

Here is the list of the Seeeduino Boards you can find in the Seeed WiKi. The list will constantly updated.

{{ range .Data.Pages.ByTitle }}{{ $cat1 := trim (index (split .Params.category ",") 0) " "}}{{ $cat2 := trim (index (split .Params.category ",") 1) " "}}{{if or (eq $cat1 "Arduino") (eq $cat2 "Arduino") }}- [{{.Title}}](/{{.File.BaseFileName}}/){{"\n"}}{{ end }}{{ end }}
