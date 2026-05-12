---
title: "에셋 네이밍 컨벤션"
category: appendix
source: "http://222.107.148.242:8989/ko/tools/naming-convention"
status: ingested
last_updated: 2026-05-12
---

> [목차](../index.html) | [English](naming-convention-en.html)

# 에셋 네이밍 컨벤션

## 프로젝트 폴더 구조

> Contents 루트 폴더 = FPS 엔진 폴더, WR2Content 폴더 = WR2 모드 폴더 (동일한 구조 반복)

### /Game/ 루트 구조

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

### WR2Content/Assets/ 구조

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
    │       └── 각 폴더: MaterialInstances/ Meshes/ Textures/
    │
    ├── Character/
    │   └── Class/
    │       ├── Assault/
    │       ├── Engineer/
    │       ├── Medic/
    │       └── Sniper/
    │       └── 각 폴더: MaterialInstances/ Meshes/ Textures/
    │
    ├── Vehicle/
    │   ├── Aircraft/        (A10, AH-6, AH-6_Weapons, F35, UH-60V, V22)
    │   ├── ArmoredVehicle/  (LAV-25)
    │   ├── Ground/          (JLTV, JLTV_SHORAD, MRZRD4, MTVR_Mk23)
    │   ├── Naval/           (CB90_NG, Jetski)
    │   └── Tank/            (M1A2, T-90M)
    │       └── 각 폴더: Animations/ MaterialInstances/ Meshes/ Parts/ Textures/
    │       └── +Crush/ 폴더: 파괴 메시
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
            └── 각 폴더: Animations/ MaterialInstances/ Meshes/ Textures/
```

---

> **프로젝트:** WR2 / Nevith Games
> **작성일:** 2026-05-06
> **기준:** UE5 표준 네이밍 + Nevith/WR2 프로젝트 룰
> **대상:** `Content/Materials`, `Content/WR2Contents` 전체

---

## 1. 기본 원칙

모든 에셋은 다음 구조를 따릅니다:

```
{Prefix}_{Project}_{Category}_{Name}_{Variant}_{Suffix}
```

| 필드 | 설명 | 예시 |
|------|------|------|
| **Prefix** | 에셋 타입 식별자 | `M`, `MI`, `T`, `SM` |
| **Project** | 프로젝트 마커 | `NV` (공용) / `WR2` (게임 전용) |
| **Category** | 에셋 카테고리 | `PBR`, `Skin`, `AK12`, `Tank` |
| **Name** | 고유 설명 이름 | `Base`, `Barrel`, `Ground` |
| **Variant** | 베리에이션 식별자 | `A`, `B`, `01`, `02` |
| **Suffix** | 채널 / 용도 | `D`, `N`, `ORM`, `Spec`, `Mask` |

**예시:**
```
M_NV_PBR_Base              → 마스터 머티리얼, 공용 PBR 베이스
MI_WR2_AK12_Barrel_01      → 머티리얼 인스턴스, AK12 바렐 베리에이션 01
T_WR2_Tank_Body_D          → 텍스처, 탱크 바디 디퓨즈
SM_WR2_Vehicle_Tank_A      → 스태틱 메시, 탱크 베리에이션 A
```

---

## 2. 에셋 타입별 프리픽스

### 머티리얼

| 프리픽스 | 타입 | 예시 |
|---------|------|------|
| `M_` | 머티리얼 (마스터) | `M_NV_PBR_Base` |
| `MI_` | 머티리얼 인스턴스 | `MI_WR2_AK12_Barrel_01` |
| `MF_` | 머티리얼 펑션 | `MF_NV_PBR_Core` |
| `MPC_` | 머티리얼 파라미터 컬렉션 | `MPC_NV_GlobalParams` |
| `SP_` | 서브서피스 프로파일 | `SP_NV_Skin_Profile_Main` |

### 텍스처

| 프리픽스 | 타입 | 예시 |
|---------|------|------|
| `T_` | 텍스처 (서픽스로 구분) | `T_WR2_Tank_Body_D` |

**텍스처 서픽스:**

| 서픽스 | 채널 / 타입 | 컬러 스페이스 |
|-------|-----------|------------|
| `_D` | 디퓨즈 / 알베도 | sRGB |
| `_N` | 노말 맵 | Linear |
| `_ORM` | 오클루전 + 러프니스 + 메탈릭 | Linear |
| `_Spec` | 스페큘러 | Linear |
| `_E` | 이미시브 | sRGB |
| `_Mask` | 마스크 (범용) | Linear |
| `_H` | 하이트 맵 | Linear |
| `_AO` | 앰비언트 오클루전 | Linear |
| `_R` | 러프니스 | Linear |
| `_M` | 메탈릭 | Linear |
| `_Atlas` | 텍스처 아틀라스 | — |
| `_LUT` | 룩업 테이블 | — |

### 메시

| 프리픽스 | 타입 | 예시 |
|---------|------|------|
| `SM_` | 스태틱 메시 | `SM_WR2_Vehicle_Tank_A` |
| `SK_` | 스켈레탈 메시 | `SK_WR2_Character_Soldier` |
| `SKEL_` | 스켈레톤 | `SKEL_WR2_Character_Soldier` |
| `PA_` | 피직스 에셋 | `PA_WR2_Character_Soldier` |

### 애니메이션

| 프리픽스 | 타입 | 예시 |
|---------|------|------|
| `AS_` | 애니메이션 시퀀스 | `AS_WR2_AK12_Fire_FP` |
| `AM_` | 애니메이션 몽타주 | `AM_WR2_AK12_Reload_FP` |
| `AO_` | 에임 오프셋 | `AO_WR2_Character_AimOffset` |
| `BS_` | 블렌드 스페이스 | `BS_WR2_Character_Locomotion` |
| `ABP_` | 애니메이션 블루프린트 | `ABP_WR2_Character_Soldier` |

### 블루프린트

| 프리픽스 | 타입 | 예시 |
|---------|------|------|
| `BP_` | 블루프린트 액터 | `BP_WR2_Vehicle_Tank` |
| `WBP_` | 위젯 블루프린트 | `WBP_WR2_HUD_Main` |
| `BPI_` | 블루프린트 인터페이스 | `BPI_WR2_Damageable` |

### VFX / SFX

| 프리픽스 | 타입 | 예시 |
|---------|------|------|
| `NS_` | 나이아가라 시스템 | `NS_WR2_Explosion_Large` |
| `NE_` | 나이아가라 이미터 | `NE_WR2_Spark_Base` |
| `SW_` / `S_` | 사운드 웨이브 | `SW_WR2_AK12_Fire_01` |
| `SC_` | 사운드 큐 | `SC_WR2_AK12_Fire` |
| `MSB_` | 메타사운드 | `MSB_WR2_Footstep` |

### 랜드스케이프 / PCG

| 프리픽스 | 타입 | 예시 |
|---------|------|------|
| `LGT_` | 랜드스케이프 그래스 타입 | `LGT_NV_Grass_Medium` |
| `LL_` | 랜드스케이프 레이어 인포 | `LL_NV_Ground_Dirt` |
| `PCG_` | PCG 그래프 | `PCG_WR2_Forest_Dense` |

### 데이터

| 프리픽스 | 타입 | 예시 |
|---------|------|------|
| `DA_` | 데이터 에셋 | `DA_WR2_Weapon_AK12` |
| `DT_` | 데이터 테이블 | `DT_WR2_WeaponStats` |
| `CT_` | 커브 테이블 | `CT_WR2_DamageFalloff` |
| `RC_` | 커브 (Float/Vector) | `RC_WR2_RecoilPattern` |

---

## 3. 폴더 구조 규칙

```
Content/
├── Materials/
│   ├── Masters/          # M_NV_PBR_Base, M_NV_Decal_Base ...
│   ├── Functions/        # MF_NV_PBR_Core, MF_NV_Blend_Layer ...
│   ├── Profiles/         # SP_NV_Skin_Profile_Main ...
│   └── {팀 폴더}/        # MI_NV_* 인스턴스 (팀별)
└── WR2Contents/
    └── Assets/           # WR2 전용 에셋 (WR2 마커 또는 생략)
```

| 폴더 | 프로젝트 마커 | 비고 |
|------|------------|------|
| `Content/Materials/Masters/` | `NV` | 공용 마스터 머티리얼 전용 |
| `Content/Materials/Functions/` | `NV` | 공용 머티리얼 펑션 전용 |
| `Content/Materials/Profiles/` | `NV` | 서브서피스 프로파일 전용 |
| `Content/Materials/{team}/` | `NV` | 팀별 MI 인스턴스 |
| `Content/WR2Contents/Assets/` | `WR2` (또는 생략) | 게임 전용 에셋 |

---

## 4. 베리에이션 규칙

| 상황 | 규칙 | 예시 |
|------|------|------|
| 의미 있는 시각적 베리에이션 | 알파벳 서픽스 `_a` / `_b` | `MI_WR2_Tank_Body_a` |
| 인덱스 베리에이션 (순서 있음) | 2자리 숫자 `_01` / `_02` | `T_WR2_Ground_Dirt_01` |
| LOD / 퀄리티 단계 | `_LOD0`, `_Hero`, `_Lite` | `SM_WR2_Tank_LOD0` |
| 1인칭 / 3인칭 | `_FP` / `_TP` | `AS_WR2_AK12_Fire_FP` |

---

## 5. 금지 사항

- 파일명에 한글 또는 비ASCII 문자 사용
- 이름 어디에도 공백(스페이스) 사용 (언더스코어 `_` 사용)
- 특수 문자: `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`
- 점(.) -- 확장자 제외
- 대시 `-` -- 항상 언더스코어 `_` 사용
- 임시 이름: `Test`, `Temp`, `New`, `Copy`, `Untitled`, `Asset1`

---

## 6. 커밋 전 체크리스트

SVN/Perforce에 에셋을 커밋하기 전 다음 항목을 모두 확인하세요:

- [ ] 프리픽스가 에셋 타입과 일치함 (예: 텍스처는 `T_`, 스태틱 메시는 `SM_`)
- [ ] 프로젝트 마커가 올바름 (`NV` = 공용, `WR2` = 게임 전용)
- [ ] 파일명에 한글 또는 공백 없음
- [ ] 대시나 특수문자 없음 (언더스코어만 사용)
- [ ] 텍스처 서픽스가 채널과 컬러 스페이스를 정확히 반영함
- [ ] 베리에이션 포맷이 올바름 (의미 있는 것은 알파벳, 인덱스는 숫자)
- [ ] 폴더 구조 규칙에 맞는 위치에 배치됨
- [ ] 임시/placeholder 이름 없음 (Test, Temp, New, Copy 등)

---

## 7. 빠른 참조 카드

```
머티리얼       M_   MI_   MF_   MPC_   SP_
텍스처         T_   (+서픽스: _D _N _ORM _Spec _E _Mask _H _AO _R _M _Atlas _LUT)
메시           SM_  SK_   SKEL_  PA_
애니메이션     AS_  AM_   AO_    BS_   ABP_
블루프린트     BP_  WBP_  BPI_
VFX/SFX       NS_  NE_   SW_    SC_   MSB_
랜드스케이프/PCG  LGT_ LL_   PCG_
데이터         DA_  DT_   CT_    RC_

프로젝트 마커
  NV  → 공용 / 엔진 레벨 (Content/Materials/*)
  WR2 → 게임 전용 (Content/WR2Contents/*)

베리에이션 포맷
  시각적 베리에이션  → _a / _b
  인덱스 베리에이션  → _01 / _02
  LOD/퀄리티        → _LOD0 / _Hero / _Lite
  뷰 모델           → _FP / _TP
```
