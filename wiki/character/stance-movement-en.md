---
title: "Stance and Movement"
category: character
source: "https://docs.google.com/document/d/1_sgiJk9Iqd0HGYndeL7yAcKh_ialGfQCPMryczw9njY/"
status: ingested
lang: en
last_updated: 2026-05-14
---

> [Index](../index-en.html) | [한국어](stance-movement.html)


# Character - Stance and Movement

---

## Stance

### Stand

| Field | Description |
|-------|-------------|
| Stance description | Default stance state |
| Stance toggle input | Toggle On/Off from Crouch/Prone |
| Fire mode | Aimed and unaimed |
| Movement mode | Walk, Run |
| Muzzle height | Aimed: ____cm / Unaimed: ____cm (1st person view) |
| Forced state exit | Reaction (knockback, knockdown, etc.), fall, death |
| Turn speed modifier | None |

### Crouch

| Field | Description |
|-------|-------------|
| Stance description | Crouched stance |
| Stance toggle input | Toggle to Crouch from Prone/Stand |
| Fire mode | Aimed and unaimed |
| Movement mode | Walk, Run |
| Muzzle height | Aimed: ____cm / Unaimed: ____cm |
| Forced state exit | Sprint (switches to Stand first), reaction, fall, death |
| Turn speed modifier | None |

### Prone

| Field | Description |
|-------|-------------|
| Stance description | Lying flat on the ground in a prone firing position |
| Stance toggle input | Toggle to Prone from Stand/Crouch |
| Fire mode | Aimed and unaimed |
| Movement mode | Crawl (forced when moving) |
| Muzzle height | Aimed: ____cm / Unaimed: ____cm |
| Forced state exit | Sprint (Crouch→Stand first), fall, death (while prone) |
| Turn speed modifier | 50% (mouse: reduced sensitivity / gamepad: reduced stick angular velocity) |

---

## Movement

### Run

| Field | Description |
|-------|-------------|
| Description | Default movement mode — move while aiming or unaimed with no stamina cost |
| Movement mode switch | None |
| Fire mode | Aimed and unaimed |
| Allowed stances | Stand, Crouch |
| Muzzle height | Stand unaimed: ____cm / Stand aimed: ____cm / Crouch unaimed: ____cm / Crouch aimed: ____cm |
| Base movement speed | Stand: ___m/sec / Crouch: ___m/sec |
| Noise level | 5 (neutral) |

### Sprint

| Field | Description |
|-------|-------------|
| Description | Full-speed movement without maintaining a firing stance. Consumes stamina |
| Movement mode switch | Hold sprint button |
| Fire mode | Not allowed (firing cancels sprint) |
| Allowed stances | Stand only (forced to Stand from Prone/Crouch) |
| Base movement speed | Stand: ___m/sec |
| Noise level | 8 (loud) |

### Walk

| Field | Description |
|-------|-------------|
| Description | Slower than standard movement; minimizes noise and muzzle sway |
| Movement mode switch | Hold walk button |
| Fire mode | Aimed and unaimed |
| Allowed stances | Stand, Crouch |
| Muzzle height | Stand unaimed: ____cm / Stand aimed: ____cm / Crouch unaimed: ____cm / Crouch aimed: ____cm |
| Base movement speed | Stand: ___m/sec / Crouch: ___m/sec |
| Noise level | 2 (quiet) |

### Crawl

| Field | Description |
|-------|-------------|
| Description | Default movement mode while prone. Minimizes noise and muzzle sway |
| Movement mode switch | None (automatic when going Prone) |
| Fire mode | Not allowed (firing cancels crawl) |
| Allowed stances | Prone |
| Muzzle height | Prone aimed: ____cm / Unaimed: ____cm |
| Base movement speed | Prone: ___m/sec |
| Noise level | 2 (quiet) |
