---
title: "Weapon Base Specifications"
category: weapon
lang: en
source: "https://docs.google.com/document/d/1agil5iEOV1jqetm4S5jhM4HDmuzP7zYuIKBtEf6XJyo/"
status: ingested
last_updated: 2026-05-12
---

> [Index](../index-en.html) | [한국어](gun-specs.html)


# Weapon Base Specifications

Defines the base spec fields and units for each weapon's data sheet.

---

## Identification

| Field | Unit | Description |
|-------|------|-------------|
| Code name | Alphanumeric | Weapon identification code (M-16, AK-47, etc.) |
| Name | English | Weapon unique name (vector, scorpion, etc. -- separate nickname) |
| Category | Type | HG=Pistol / AR=Assault Rifle / SMG=Submachine Gun / SR=Sniper Rifle / SG=Shotgun / LMG=Light Machine Gun |
| Ammo type | Type | Ammunition type used. LMGs share ammo from assault rifle through sniper rifle range (no dedicated ammo type) |
| Caliber | Type | Caliber of the ammunition used (see ammo type characteristics) |

---

## Magazine

| Field | Unit | Description |
|-------|------|-------------|
| Magazine type | Type | Determined per weapon based on caliber and format |

---

## Weight (Per Part)

| Field | Unit | Description |
|-------|------|-------------|
| Receiver weight | kg | Base body weight. Total weapon weight = sum of all base part weights |
| Stock weight | kg | 0 if integrated or absent |
| Barrel weight | kg | Default barrel weight |
| Handguard weight | kg | 0 if receiver-integrated or absent |
| Pistol grip weight | kg | 0 if receiver-integrated |

---

## Receiver Type

| Type | Description |
|------|-------------|
| 1 | Standard AR form. Stock + barrel + pistol grip part configuration |
| 2 | Pistol form. Stock is an attachment, pistol grip integrated, handguard receiver-integrated |
| 3 | Handguard integrated with receiver (e.g., MP7) |
| 4 | Handguard and stock integrated (e.g., M-1 Garand) |

---

## Part Compatibility Type

| Field | Unit | Description |
|-------|------|-------------|
| Barrel type | Type | Compatible barrel types for replacement |
| Stock type | Type | Compatible stock types for replacement |
| Pistol grip type | Type | Compatible pistol grip types for replacement |
| Upper rail type | Type | Compatible upper rail attachment types for the receiver |

---

## Speed Modifiers

| Field | Unit | Description |
|-------|------|-------------|
| Base movement speed modifier | % | Affects movement speed independent of weight. 0.9 = 90% of base speed |
| ADS speed modifier | % | Base speed multiplier for the ADS animation. Combined tuning/attachment/character trait modifiers are multiplied against animation length |
| Un-ADS speed modifier | % | Base speed modifier for the ADS-to-hip-fire transition animation |
