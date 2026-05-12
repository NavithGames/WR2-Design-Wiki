---
title: "Weapon Customization"
category: weapon
lang: en
source: "https://docs.google.com/document/d/1nw2PSwf8eM-2x4W0DLDjtYqMmQtHsNNLy_ngtN9RtPA/"
status: ingested
last_updated: 2026-05-12
---

# Weapon Customization

---

## Design Philosophy

- Adopt only necessary attachments
- Parts that modify the base weapon configuration are managed under **Tuning** (stock, receiver, barrel, etc.)
- Attachments and tuning parts can be stored in bags/pouches
- Magazines are individual items mounted on the ammo carrier, but can be applied as tuning effects on the equipped weapon
- Reload swaps to the next magazine on the ammo carrier (not refilling the current magazine) *(decision needed)*

---

## Attachment Structure

### Body Sockets

For rifles, the body components consist of stock, grip, and barrel centered on the receiver.

- The body has default parts equipped even without tuning; replacing via tuning swaps both appearance and performance
- Replaced parts move to the default bag
- Parts can be stored in bags (assembled weapons cannot)
- The **receiver** holds sockets for stock, barrel, and grip
  - When swapping to a receiver without a socket, the corresponding body part is unequipped -> moves to inventory
  - All receivers must have barrel and grip sockets
  - Only some receivers lack the stock socket
- If the handguard has no side rail/under rail, previous attachments are unequipped -> move to bag
- If the barrel is swapped and the handguard is incompatible, it is unequipped -> moves to bag

### Body Part Roles

| Part | Role |
|------|------|
| **Receiver** | Central weapon part. Mounting base for all parts. Determines firing characteristics like rate of fire and muzzle velocity |
| **Stock** | Affects shouldered performance (some weapons have none) |
| **Pistol grip** | Affects overall stability |
| **Barrel** | Affects firing precision and ballistic characteristics |
| **Handguard** | Barrel protection. Without one, only hip-fire is possible. Provides firing stability, side rail/under rail |

---

## Attachments

Accessories mounted on sockets connected to body components.

### Mounted on Receiver
- Rear sight and scopes
- Accessories (decorative items)

### Mounted on Handguard
- Side rail
- Under rail

### Mounted on Barrel
- Front sight
- Muzzle device

> If a body part lacks the corresponding socket, the attachment automatically moves to inventory

### Fixed Sight Weapons
- M-4: Rear sight replaceable, front sight not replaceable
- K-2: Neither rear sight nor front sight replaceable
- Weapons without receiver rails (K-2, etc.): A rail adapter part is added when mounting a scope

---

## Magazines

Magazines are not default parts but essential ammo feeding devices required for firing. Magazines of the same caliber are cross-compatible between different weapon types sharing a common magazine format.

- Swapping to an **option magazine** grants option effects while that magazine is in use
- **Loading**: Magazines are used in order of their position on the ammo carrier. Empty magazines can be refilled via loading (requires ammo in inventory). Auto-inserts one round at a time; relatively time-consuming
- **Reload**: Swaps the magazine in the weapon with the next magazine on the ammo carrier. Empty magazines are not discarded. Frequent reloading leads to many partially filled magazines, requiring longer loading sessions later

---

## Attachment Configuration by Weapon Category

### Part Compatibility Philosophy
- All parts are weapon-category-specific (only some scopes can be universally mounted on upper rails)
- Assault rifle scopes can also be used on SMGs, sniper rifles, and LMGs

---

### Pistol

**Characteristics**: No stock slot on the body (attached as an accessory). Under rail mounted on receiver. Uses dedicated scopes.

| Slot | Attachments |
|------|------------|
| Main scope | Iron sights, dot sight, holographic sight, low-magnification scope |
| Muzzle | Suppressor, compensator, flash hider |
| Under rail | Flashlight, laser sight, combo sight |
| Magazine | Polymer magazine, extended magazine, Teflon magazine |

---

### Assault Rifle

**Characteristics**: Standard body parts + attachment configuration.

| Slot | Attachments |
|------|------------|
| Main scope | Iron sights, dot sight, low-mag scope, high-mag scope, hybrid scope |
| Muzzle | Suppressor, flash hider |
| Magazine | Polymer/extended/Teflon magazine |
| Under barrel | Vertical grip, angled grip |
| Side barrel | Laser sight, flashlight, combo sight |

---

### Sniper Rifle

**Characteristics**: Can mount sniper-rifle-specific scopes.

| Slot | Attachments |
|------|------------|
| Main scope | Iron sights, low-mag scope, high-mag scope (default) |
| Magazine | Polymer/extended/Teflon magazine |
| Muzzle | Suppressor (limited noise reduction, significant range decrease), flash hider |
| Under barrel | Tripod (stability improvement in certain stances) |

---

### Submachine Gun

**Characteristics**: No handguard slot. Under rail/side rail integrated into receiver.

| Slot | Attachments |
|------|------------|
| Main scope | Dot sight, low-mag scope (range increase) |
| Magazine | -- |
| Muzzle | Suppressor, flash hider |
| Side barrel | Flashlight, laser sight |

---

### Light Machine Gun

**Characteristics**: Uses dedicated magazines.

| Slot | Attachments |
|------|------------|
| Main scope | Iron sights, dot sight, low-mag/high-mag/hybrid scope |
| Muzzle | Suppressor, flash hider |
| Magazine | Polymer/extended/Teflon magazine, box magazine (some weapons, reduces capacity to 30 rounds + faster reload) |
| Under barrel | Vertical grip, bipod (tighter grouping in certain stances) |

---

### Shotgun

| Slot | Attachments |
|------|------------|
| Main scope | Iron sights, dot sight, low-mag/hybrid scope |
| Muzzle | Suppressor, flash hider |
| Magazine (magazine-fed weapons) | Polymer/extended/Teflon magazine. Extended magazine is drum-type (12-20 rounds) |
| Reloader (tube-magazine weapons) | Quick reloader (loads multiple rounds at once) |
| Under barrel | Vertical grip, flashlight, laser sight, combo sight |
