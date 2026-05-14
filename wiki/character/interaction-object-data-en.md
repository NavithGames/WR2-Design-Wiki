---
title: "Interaction Object Data"
category: character
source: "https://docs.google.com/document/d/1IPMoEdnmcFqUK-kofVDsM4uEvFVEpE1yRI1cXNxXPOc/"
status: ingested
lang: en
last_updated: 2026-05-14
---

> [Index](../index-en.html) | [한국어](interaction-object-data.html)


# Interaction Object Data

> Work in progress

---

## Interaction Object Structure

- A single Interaction Object can have multiple **Phases**
- Each phase can be triggered via a **Condition**
- Character interaction → function executes → state transitions to the next phase
- A different mesh can be assigned to represent the object's appearance per state

**Example: Hinged door**
- Open / Closing / Closed / Opening — 4 states, each requiring its own mesh

**Condition Types**
- Direct PC interaction (default)
- Time elapsed
- External variable count, etc.

Condition triggers → Function executes → Transitions to next Phase

---

## Interaction Object Data

| Data | Unit | Notes |
|------|------|-------|
| ID | Type ID | Unique ID of the interaction object |
| Guideline Radius | cm | Distance at which the interaction guideline is displayed |
| Interaction Radius | cm | Distance at which the interaction menu appears |
| Interaction Ready Ani 1st | file name | 1st-person animation when the interaction menu appears |
| Interaction Ready Ani 3rd | file name | 3rd-person animation when the interaction menu appears |
| Interaction Execute Ani 1st | file name | 1st-person animation when interaction is executed |
| Interaction Execute Ani 3rd | file name | 3rd-person animation when interaction is executed |
| Interaction Execute Bind Time | ms | Action-lock duration at the start of interaction (cutscene motion) |
| Interaction Loop Ani 1st | file name | 1st-person loop animation during interaction |
| Interaction Loop Ani 3rd | file name | 3rd-person loop animation during interaction |
| Interaction End Ani 1st | file name | 1st-person animation at the end of interaction |
| Interaction End Ani 3rd | file name | 3rd-person animation at the end of interaction |
| Interaction End Bind Time | ms | Action-lock duration at the end of interaction |

---

## Interaction Object Phase

| Data | Unit | Notes |
|------|------|-------|
| Object ID | Type ID | ID of the interaction object this phase belongs to |
| Phase ID | Phase ID | Unique Phase ID within the object |
| Phase Mesh | file name | Mesh file name representing this phase's appearance |
| Condition | Condition ID | Defines what trigger condition causes the function to execute |
| Function | Function ID | ID of the function that runs when the condition is met |
| Phase Shift Time | ms | Delay time when transitioning to this phase |
| Next Phase ID | Phase ID | Phase ID to transition to after the function executes |
