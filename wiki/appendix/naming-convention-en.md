---
title: "Asset Naming Convention"
category: appendix
lang: en
source: "http://222.107.148.242:8989/ko/tools/naming-convention"
status: ingested
last_updated: 2026-05-12
---

> [Index](../index-en.html) | [한국어](naming-convention.html)

# Asset Naming Convention

## Project Folder Structure

> Contents root folder = FPS engine folder, WR2Content folder = WR2 mod folder (same structure repeated)

### /Game/ Root Structure

```
/Game/
├── Asset/
├── Audio/
├── Blueprints/
├── Cinematics/
├── Data/
├── Environment/
├── Localization/
├── Maps/
├── Materials/
│   ├── Common/
│   │   └── T_Default_LinearGrey
│   └── Masters/
│       ├── M_NV_Building_Base
│       ├── M_NV_Decal_Base
│       ├── M_NV_Emissive_Base
│       ├── M_NV_Eye_Base
│       ├── M_NV_Foliage_Base
│       ├── M_NV_Glass_Base
│       ├── M_NV_Hair_Base
│       ├── M_NV_Invis
│       ├── M_NV_PBR_Base
│       └── M_NV_Skin_Base
├── UI/
├── VFX/
└── WR2Content/
```

### WR2Content/Assets/ Structure

```
WR2Content/
└── Assets/
    ├── Attachments/
    │   ├── Flash/        (ATT_Flash_M952V, ATT_Flash_PT_TLR7)
    │   ├── Foregrip/     (ATT_Foregrip_AFG, ATT_Foregrip_RVG)
    │   ├── Laser/        (ATT_Laser_DBAL-A2, ATT_Laser_PT_VISM)
    │   ├── Magazine/
    │   ├── Mount/        (ATT_Mount_LPVO, ATT_Mount_Rail_Right, ATT_Mount_RingMount)
    │   ├── Muzzle/       (ATT_Muzzle_Saker762)
    │   └── Scope/        (ACOG4, EO533, EODual, EOG33, EOXPS3, KobraEKP,
    │                      Mark8CQBSS, MRS, NightForce, PLx6, RMR-T2,
    │                      SpecterDR, Vudu, WaltherRedDot)
    │       └── Each folder: MaterialInstances/ Meshes/ Textures/
    │
    ├── Character/
    │   └── Class/
    │       ├── Assault/
    │       ├── Engineer/
    │       ├── Medic/
    │       └── Sniper/
    │       └── Each folder: MaterialInstances/ Meshes/ Textures/
    │
    ├── Vehicle/
    │   ├── Aircraft/        (A10, AH-6, AH-6_Weapons, F35, UH-60V, V22)
    │   ├── ArmoredVehicle/  (LAV-25)
    │   ├── Ground/          (JLTV, JLTV_SHORAD, MRZRD4, MTVR_Mk23)
    │   ├── Naval/           (CB90_NG, Jetski)
    │   └── Tank/            (M1A2, T-90M)
    │       └── Each folder: Animations/ MaterialInstances/ Meshes/ Parts/ Textures/
    │       └── +Crush/ folder: destruction meshes
    │
    └── Weapons/
        ├── AR/         (AK12, FAMAS, MK18, TAR-21)
        ├── DMR/        (M110, SVD)
        ├── LAUNCHER/   (Javelin, RPG7, Stinger)
        ├── LMG/        (MK46, PKM, PKP)
        ├── MELEE/      (Knife, Spear)
        ├── PISTOL/     (M17, M1911, M45A1, M9A3, MP443, USP45, VP9)
        ├── SG/         (KELTEC_KSG, M1014, M870c, Origin12)
        ├── SMG/        (KrissVector, MP5, MP7, MP9, Mpx, P90, PP19, UMP45)
        ├── SPECIAL/    (ASVAL)
        └── THROWABLE/  (C4R, Claymore, Grenade, M19_Mine)
            └── Each folder: Animations/ MaterialInstances/ Meshes/ Textures/
```

---

> **Project:** WR2 / Nevith Games
> **Date:** 2026-05-06
> **Based on:** UE5 standard naming + Nevith/WR2 project rules
> **Scope:** `Content/Materials`, `Content/WR2Contents` (all assets)

---

## 1. Basic Principles

All assets follow this structure:

```
{Prefix}_{Project}_{Category}_{Name}_{Variant}_{Suffix}
```

| Field | Description | Example |
|-------|-------------|---------|
| **Prefix** | Asset type identifier | `M`, `MI`, `T`, `SM` |
| **Project** | Project marker | `NV` (shared) / `WR2` (game-specific) |
| **Category** | Asset category | `PBR`, `Skin`, `AK12`, `Tank` |
| **Name** | Unique descriptive name | `Base`, `Barrel`, `Ground` |
| **Variant** | Variation identifier | `A`, `B`, `01`, `02` |
| **Suffix** | Channel / purpose | `D`, `N`, `ORM`, `Spec`, `Mask` |

**Examples:**
```
M_NV_PBR_Base              → Master material, shared PBR base
MI_WR2_AK12_Barrel_01      → Material instance, AK12 barrel variation 01
T_WR2_Tank_Body_D          → Texture, tank body diffuse
SM_WR2_Vehicle_Tank_A      → Static mesh, tank variation A
```

---

## 2. Prefixes by Asset Type

### Materials

| Prefix | Type | Example |
|--------|------|---------|
| `M_` | Material (master) | `M_NV_PBR_Base` |
| `MI_` | Material Instance | `MI_WR2_AK12_Barrel_01` |
| `MF_` | Material Function | `MF_NV_PBR_Core` |
| `MPC_` | Material Parameter Collection | `MPC_NV_GlobalParams` |
| `SP_` | Subsurface Profile | `SP_NV_Skin_Profile_Main` |

### Textures

| Prefix | Type | Example |
|--------|------|---------|
| `T_` | Texture (distinguished by suffix) | `T_WR2_Tank_Body_D` |

**Texture Suffixes:**

| Suffix | Channel / Type | Color Space |
|--------|---------------|-------------|
| `_D` | Diffuse / Albedo | sRGB |
| `_N` | Normal Map | Linear |
| `_ORM` | Occlusion + Roughness + Metallic | Linear |
| `_Spec` | Specular | Linear |
| `_E` | Emissive | sRGB |
| `_Mask` | Mask (general purpose) | Linear |
| `_H` | Height Map | Linear |
| `_AO` | Ambient Occlusion | Linear |
| `_R` | Roughness | Linear |
| `_M` | Metallic | Linear |
| `_Atlas` | Texture Atlas | -- |
| `_LUT` | Lookup Table | -- |

### Meshes

| Prefix | Type | Example |
|--------|------|---------|
| `SM_` | Static Mesh | `SM_WR2_Vehicle_Tank_A` |
| `SK_` | Skeletal Mesh | `SK_WR2_Character_Soldier` |
| `SKEL_` | Skeleton | `SKEL_WR2_Character_Soldier` |
| `PA_` | Physics Asset | `PA_WR2_Character_Soldier` |

### Animations

| Prefix | Type | Example |
|--------|------|---------|
| `AS_` | Animation Sequence | `AS_WR2_AK12_Fire_FP` |
| `AM_` | Animation Montage | `AM_WR2_AK12_Reload_FP` |
| `AO_` | Aim Offset | `AO_WR2_Character_AimOffset` |
| `BS_` | Blend Space | `BS_WR2_Character_Locomotion` |
| `ABP_` | Animation Blueprint | `ABP_WR2_Character_Soldier` |

### Blueprints

| Prefix | Type | Example |
|--------|------|---------|
| `BP_` | Blueprint Actor | `BP_WR2_Vehicle_Tank` |
| `WBP_` | Widget Blueprint | `WBP_WR2_HUD_Main` |
| `BPI_` | Blueprint Interface | `BPI_WR2_Damageable` |

### VFX / SFX

| Prefix | Type | Example |
|--------|------|---------|
| `NS_` | Niagara System | `NS_WR2_Explosion_Large` |
| `NE_` | Niagara Emitter | `NE_WR2_Spark_Base` |
| `SW_` / `S_` | Sound Wave | `SW_WR2_AK12_Fire_01` |
| `SC_` | Sound Cue | `SC_WR2_AK12_Fire` |
| `MSB_` | MetaSound | `MSB_WR2_Footstep` |

### Landscape / PCG

| Prefix | Type | Example |
|--------|------|---------|
| `LGT_` | Landscape Grass Type | `LGT_NV_Grass_Medium` |
| `LL_` | Landscape Layer Info | `LL_NV_Ground_Dirt` |
| `PCG_` | PCG Graph | `PCG_WR2_Forest_Dense` |

### Data

| Prefix | Type | Example |
|--------|------|---------|
| `DA_` | Data Asset | `DA_WR2_Weapon_AK12` |
| `DT_` | Data Table | `DT_WR2_WeaponStats` |
| `CT_` | Curve Table | `CT_WR2_DamageFalloff` |
| `RC_` | Curve (Float/Vector) | `RC_WR2_RecoilPattern` |

---

## 3. Folder Structure Rules

```
Content/
├── Materials/
│   ├── Masters/          # M_NV_PBR_Base, M_NV_Decal_Base ...
│   ├── Functions/        # MF_NV_PBR_Core, MF_NV_Blend_Layer ...
│   ├── Profiles/         # SP_NV_Skin_Profile_Main ...
│   └── {Team Folder}/    # MI_NV_* instances (per team)
└── WR2Contents/
    └── Assets/           # WR2-specific assets (WR2 marker or omitted)
```

| Folder | Project Marker | Notes |
|--------|---------------|-------|
| `Content/Materials/Masters/` | `NV` | Shared master materials only |
| `Content/Materials/Functions/` | `NV` | Shared material functions only |
| `Content/Materials/Profiles/` | `NV` | Subsurface profiles only |
| `Content/Materials/{team}/` | `NV` | Per-team MI instances |
| `Content/WR2Contents/Assets/` | `WR2` (or omitted) | Game-specific assets |

---

## 4. Variation Rules

| Situation | Rule | Example |
|-----------|------|---------|
| Meaningful visual variation | Alphabetic suffix `_a` / `_b` | `MI_WR2_Tank_Body_a` |
| Indexed variation (ordered) | 2-digit number `_01` / `_02` | `T_WR2_Ground_Dirt_01` |
| LOD / Quality tier | `_LOD0`, `_Hero`, `_Lite` | `SM_WR2_Tank_LOD0` |
| First-person / Third-person | `_FP` / `_TP` | `AS_WR2_AK12_Fire_FP` |

---

## 5. Prohibited Practices

- Korean or non-ASCII characters in file names
- Spaces anywhere in the name (use underscore `_` instead)
- Special characters: `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`
- Dots (.) -- except for file extensions
- Dashes `-` -- always use underscore `_` instead
- Temporary names: `Test`, `Temp`, `New`, `Copy`, `Untitled`, `Asset1`

---

## 6. Pre-Commit Checklist

Verify all of the following before committing assets to SVN/Perforce:

- [ ] Prefix matches the asset type (e.g., `T_` for textures, `SM_` for static meshes)
- [ ] Project marker is correct (`NV` = shared, `WR2` = game-specific)
- [ ] No Korean or spaces in file names
- [ ] No dashes or special characters (underscores only)
- [ ] Texture suffixes accurately reflect the channel and color space
- [ ] Variation format is correct (alphabetic for meaningful, numeric for indexed)
- [ ] Asset is placed in the correct location per folder structure rules
- [ ] No temporary/placeholder names (Test, Temp, New, Copy, etc.)

---

## 7. Quick Reference Card

```
Materials      M_   MI_   MF_   MPC_   SP_
Textures       T_   (+suffixes: _D _N _ORM _Spec _E _Mask _H _AO _R _M _Atlas _LUT)
Meshes         SM_  SK_   SKEL_  PA_
Animations     AS_  AM_   AO_    BS_   ABP_
Blueprints     BP_  WBP_  BPI_
VFX/SFX        NS_  NE_   SW_    SC_   MSB_
Landscape/PCG  LGT_ LL_   PCG_
Data           DA_  DT_   CT_    RC_

Project Markers
  NV  → Shared / engine-level (Content/Materials/*)
  WR2 → Game-specific (Content/WR2Contents/*)

Variation Formats
  Visual variation   → _a / _b
  Indexed variation  → _01 / _02
  LOD/Quality        → _LOD0 / _Hero / _Lite
  View model         → _FP / _TP
```
