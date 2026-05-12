---
title: "Weapon Animation List"
category: weapon
lang: en
source: "https://docs.google.com/document/d/1bbmpaT8WUzJxlIfw33sKNBVCq3BlhpELV62d0RRL-eA/"
status: ingested
last_updated: 2026-05-12
---

> [Index](../index-en.html) | [한국어](gun-animation.html)


# Weapon Animation List (First-Person)

---

## Equip & Aiming

| Category | Animation Name | Notes | Key |
|----------|---------------|-------|-----|
| Equip | equip | Draw weapon from back to hip-fire ready stance. Includes chambering animation and unfolding of foldable parts | -- |
| Unequip | unequip | Stow weapon from firing-ready stance. Foldable part animations omitted (quick stow behind back) | -- |
| Aim | aimin | Align sights from hip-fire stance. Blending needed when sight height changes due to optics | RMB |
| Un-aim | aimout | Return from ADS to hip-fire stance | RMB |

---

## Firing & Reloading

| Category | Animation Name | Notes |
|----------|---------------|-------|
| Fire start | fire_start | Begin firing during hip-fire |
| Fire loop | fire_loop | Sustained firing during hip-fire |
| Fire finish | fire_finish | End firing during hip-fire |
| ADS fire start | aimfire_start | Begin firing while ADS |
| ADS fire loop | aimfire_loop | Sustained firing while ADS |
| ADS fire finish | aimfire_finish | End firing while ADS |
| Bolt action | bolt_action | Post-fire rechambering animation (bolt-action weapons) |
| Release magazine | release magazine | Remove current magazine. Additional motions like bolt hold-open depending on weapon type |
| Insert magazine | insert magazine | Insert new magazine. Attach magazine with appearance matching the ammo carrier slot order |
| Release magazine (ADS) | release magazine aim | Left-hand magazine release while ADS |
| Tactical reload | reload | Reload with rounds remaining in magazine |
| Tactical reload (ADS) | aimreload | Reload while ADS with rounds remaining |
| Empty reload | reloadempty | Reload after fully emptying magazine (bolt release, pump action, etc.). **No separate chambering needed if magazine is not fully emptied** |
| Empty reload (ADS) | aimreloadempty | Empty reload while ADS |

---

## Movement

| Category | Animation Name | Notes |
|----------|---------------|-------|
| Run | run | Standard movement. Running while maintaining hip-fire stance |
| Run (ADS) | run aim | ADS maintained with slight weapon sway. Not needed |
| Walk | walk | Quiet footsteps, slow movement |
| Walk (ADS) | walk aim | Quiet walking while maintaining ADS. Not needed |
| Sprint start | spring start | Begin sprinting, weapon lowered. Not needed |
| Sprint loop | sprint loop | Sustained sprinting |
| Sprint end | sprint end | Return from sprint to hip-fire stance. Not needed |
| Crouch run | crouch run | Standard movement while crouched (slower than run). 3rd person |
| Crouch walk | crouch walk | Slow walking while crouched. 3rd person |
| Prone move | pronemove | Crawling movement. ADS auto-cancels. Decision needed: COD-style (hip-fire) vs BF-style (left-arm crawl) |

---

## Stance Transitions

| Category | Animation Name |
|----------|---------------|
| Run to sprint | run2sprint |
| Run to walk | run2walk |
| Walk to run | walk2run |
| Walk to sprint | walk2sprint |
| Sprint to walk | sprint2walk |
| Crouch | crouch (from standing) |
| Crouch (ADS) | crouch aim. Not needed |
| Stand | Idle (from crouched) |
| Stand (ADS) | stand aim. Not needed |
| Stand to prone | Idle2prone (ADS cancels) |
| Crouch to prone | crouch2prone (ADS cancels) |
| Prone to stand | prone2idle (ADS cancels) |
| Prone to crouch | prone2crouch (ADS cancels) |

---

## Jumping

| Category | Animation Name | Notes |
|----------|---------------|-------|
| Jump start | jumpstart | Jump start through apex through descent start (not ADS) |
| Jump loop | jumploop | Falling loop (not ADS) |
| Jump land | jumpend | Normal landing. Muzzle dips significantly then recovers |
| Jump land (damage) | jumpend_hurt | Landing from height. View snaps to ground then slowly recovers. ADS breaks. Bone cracking SFX + red damage indicator |
| Jump start (ADS) | aimjump_start | Jump through apex while ADS |
| Jump loop (ADS) | aimjump_loop | Falling loop while ADS |
| Jump land (ADS) | aimjump_end | Landing while ADS. Weapon wobbles down then returns to ADS (ADS maintained) |

---

## Magazine Loading (Shotgun Only)

| Category | Animation Name | Notes |
|----------|---------------|-------|
| Magazine load start | reload(empty)_start | After selecting ammo type from inventory, begin loading. Stow weapon and pull magazine from ammo carrier |
| Magazine load loop | reload(empty)_loop | Load rounds one by one into magazine |
| Magazine load end | reload(empty)_end | Loading finished/interrupted. Return magazine to ammo carrier |

---

## Weapon Inspection / Demo Animations

| Category | Animation Name | Notes |
|----------|---------------|-------|
| Inspect 1 | Inspect01 | Observe left side of receiver (check accessories). Selector position = matches fire mode |
| Inspect 2 | Inspect02 | Twist to observe right side of receiver, check chamber. Empty chamber visible if no rounds remaining |
| Inspect 3 | Inspect03 | Remove magazine to check remaining rounds. Rounds displayed based on remaining count. Polymer magazines show orange follower |
| Inspect 4 | Inspect04 | Lock bolt open, check chamber with pinky finger. Different animation depending on whether round is present |
| Inspect 5 | Inspect05 | Per-weapon unique demo (overall inspection, pistol spin, etc. -- free-form) |

---

## Lean Animations

In first-person, lean can be substituted with camera work, but if dedicated lean animations are produced, separate lean animation sets are needed alongside aim and fire animations.
