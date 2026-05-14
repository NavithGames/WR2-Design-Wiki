---
title: "Object Interaction"
category: character
source: "https://docs.google.com/document/d/12-FG9ZOrg5qNkGdeJ2KDQWXHQKHKuq8vNSEoRwATGSY/"
status: ingested
lang: en
last_updated: 2026-05-14
---

> [Index](../index-en.html) | [한국어](object-interaction.html)


# Character - Object Interaction

---

## System Overview

### Interaction Interface

**Guideline Display**
- When the player enters the guideline range (dashed area) of an interactable object, an outline appears on the target to indicate it can be interacted with

**Interaction Prompt**
- The interaction button appears when the player is within the guideline range AND looking toward the target
- If a motion is assigned, the character switches to an interaction-ready pose
- Pressing the interaction button begins the interaction

**Multiple Interactions**
- When multiple interactions are available, a list is displayed alongside the buttons
- Shortcut keys: F-G-H-J (up to 4 options)
- These keys take priority while the interaction prompt is shown
- Gamepad: hold the interaction key + use D-pad to select, release to execute

---

## Object Interactions

### Doors

- Uses a dedicated motion depending on the door type
- If no motion is assigned, the door opens/closes without animation

| Door Type | Description |
|-----------|-------------|
| Hinged door | Pushed or pulled depending on hinge direction. Opening direction is fixed |
| Sliding door | Opens and closes by sliding. Can be opened from the side blocked by a wall, but cannot be closed from that side |
| Cutscene door | Interaction motion is presented as a short cutscene. No other actions possible during it. Used for high-importance door presentations |

### Switches

- Uses a dedicated motion depending on the switch type, same as doors
- If no motion is assigned, the switch activates without animation

| Switch Type | Description |
|-------------|-------------|
| Button switch | Activates each time it is pressed. No state change |
| Toggle switch | Changes form based on On/Off state. Interaction flips to the opposite state |
| Cutscene switch | Same as cutscene door. No other actions possible during it |

### Examine

- Environmental interaction for looting or examining objects other than doors/switches
- The character holds a designated pose while examining; the pose is released on exit

| Phase | Description |
|-------|-------------|
| Examine start | Dedicated start motion. If a cutscene motion is used, other actions are blocked |
| Examine loop | Loop motion (idle / rummaging / moving items, etc.). Looting interactions display the loot inventory |
| Examine end | Closing motion plays |
