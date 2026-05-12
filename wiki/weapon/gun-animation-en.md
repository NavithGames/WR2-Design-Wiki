---
title: "Weapon Animation List"
category: weapon
lang: en
source: "https://docs.google.com/document/d/1bbmpaT8WUzJxlIfw33sKNBVCq3BlhpELV62d0RRL-eA/"
status: ingested
last_updated: 2026-05-12
---

# Weapon Animation List (First-Person)

---

## Equip & Aiming

| Category | Animation Name | Notes | Key |
|----------|---------------|-------|-----|
| Equip | equip | Draw weapon from back to hip-fire ready stance. Includes chambering animation and unfolding of foldable parts | -- |
| Unequip | unequip | Stow weapon from firing-ready stance. Foldable part animations omitted (quick stow behind back) | -- |
| Aim | aim | Align sights from hip-fire stance. Blending needed when sight height changes due to optics | RMB |
| Un-aim | unaim | Return from ADS to hip-fire stance | RMB |

---

## Firing & Reloading

| Category | Animation Name | Notes |
|----------|---------------|-------|
| Fire-hip start | fire-hip start | Begin firing during hip-fire |
| Fire-hip loop | fire-hip loop | Sustained firing during hip-fire |
| Fire-hip finish | fire-hip finish | End firing during hip-fire |
| Fire-aim start | fire-aim start | Begin firing while ADS |
| Fire-aim loop | fire-aim loop | Sustained firing while ADS |
| Fire-aim finish | fire-aim finish | End firing while ADS |
| Bolt action | bolt action | Post-fire rechambering animation (bolt-action weapons) |
| Release magazine | release magazine | Remove current magazine. Additional motions like bolt hold-open depending on weapon type |
| Insert magazine | insert magazine | Insert new magazine. Attach magazine with appearance matching the ammo carrier slot order |
| Release magazine (ADS) | release magazine aim | Left-hand magazine release while ADS |
| Insert magazine (ADS) | insert magazine aim | Left-hand magazine insertion while ADS |
| Insert bullet | insert bullet | Loading individual rounds like shotgun tube magazines |
| Chamber | load | Chamber after magazine insertion/bullet loading (bolt release, pump action, etc.). **No separate chambering needed if magazine is not fully emptied** |
| Chamber (ADS) | load aim | Chambering animation while ADS |

---

## Movement

| Category | Animation Name | Notes |
|----------|---------------|-------|
| Run | run | Standard movement. Running while maintaining hip-fire stance |
| Run (ADS) | run aim | ADS maintained with slight weapon sway |
| Walk | walk | Quiet footsteps, slow movement |
| Walk (ADS) | walk aim | Quiet walking while maintaining ADS |
| Sprint start | sprint start | Begin sprinting, weapon lowered |
| Sprint loop | sprint loop | Sustained sprinting |
| Sprint end | sprint end | Return from sprint to hip-fire stance |
| Crouch run | crouch run | Standard movement while crouched (slower than run) |
| Crouch walk | crouch walk | Slow walking while crouched |
| Prone move | prone move | Crawling movement. ADS auto-cancels. Decision needed: COD-style (hip-fire) vs BF-style (left-arm crawl) |

---

## Stance Transitions

| Category | Animation Name |
|----------|---------------|
| Run to sprint | run to sprint |
| Run to walk | run to walk |
| Walk to run | walk to run |
| Walk to sprint | walk to sprint |
| Sprint to walk | sprint to walk |
| Crouch | crouch (from standing) |
| Crouch (ADS) | crouch aim |
| Stand | stand (from crouched) |
| Stand (ADS) | stand aim |
| Stand to prone | stand to prone (ADS cancels) |
| Crouch to prone | crouch to prone (ADS cancels) |
| Prone to stand | prone to stand (ADS cancels) |
| Prone to crouch | prone to crouch (ADS cancels) |

---

## Jumping

| Category | Animation Name | Notes |
|----------|---------------|-------|
| Jump start | jump start | Jump start through apex through descent start (not ADS) |
| Jump loop | jump loop | Falling loop (not ADS) |
| Jump land | jump end | Normal landing. Muzzle dips significantly then recovers |
| Jump land (damage) | jump end hurt | Landing from height. View snaps to ground then slowly recovers. ADS breaks. Bone cracking SFX + red damage indicator |
| Jump start (ADS) | jump start aim | Jump through apex while ADS |
| Jump loop (ADS) | jump loop aim | Falling loop while ADS |
| Jump land (ADS) | jump end aim | Landing while ADS. Weapon wobbles down then returns to ADS (ADS maintained) |

---

## Magazine Loading

| Category | Animation Name | Notes |
|----------|---------------|-------|
| Magazine load start | magazine load start | After selecting ammo type from inventory, begin loading. Stow weapon and pull magazine from ammo carrier |
| Magazine load loop | magazine load loop | Load rounds one by one into magazine |
| Magazine load end | magazine load end | Loading finished/interrupted. Return magazine to ammo carrier |

---

## Weapon Inspection / Demo Animations

| Category | Animation Name | Notes |
|----------|---------------|-------|
| Inspect 1 | gun observe 1 | Observe left side of receiver (check accessories). Selector position = matches fire mode |
| Inspect 2 | gun observe 2 | Twist to observe right side of receiver, check chamber. Empty chamber visible if no rounds remaining |
| Inspect 3 | gun observe 3 | Remove magazine to check remaining rounds. Rounds displayed based on remaining count. Polymer magazines show orange follower |
| Inspect 4 | gun observe 4 | Lock bolt open, check chamber with pinky finger. Different animation depending on whether round is present |
| Inspect 5 | gun observe 5 | Per-weapon unique demo (overall inspection, pistol spin, etc. -- free-form) |

---

## Lean Animations

In first-person, lean can be substituted with camera work, but if dedicated lean animations are produced, separate lean animation sets are needed alongside aim and fire animations.
