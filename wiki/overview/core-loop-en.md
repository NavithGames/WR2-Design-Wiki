---
title: "Core Loop"
category: overview
lang: en
source: "https://docs.google.com/document/d/1PGFAL7Ed7CuaE8p2f7724ZcRHYiVal0eRpFDqtuNAw4/"
status: ingested
last_updated: 2026-05-12
---

# Core Loop

Describes the 6-stage core loop (lobby - desert movement - town looting - return - escape - settlement), the 2-stop standard match structure, match density, and session director role.

> 2 stops is the standard match structure. The moment cargo is loaded onto the truck is the match's turning point, and from there decisions never stop until the Chinook climax.

---

## 4-1. Match Timeline

| Time | Phase | Feel | Key Decision |
|------|-------|------|-------------|
| 0-4 min | Desert entry/recon | Exploration, tension building | Is that a bot or a player? |
| 4-11 min | Town stay/operations | Rising tension | Grab more, or leave now? |
| 11-16 min | Return with loaded cargo | High tension | Which route? Is pursuit coming? |
| 16-20 min | Chinook holdout | Peak tension | Call it now, or move to another point? |
| Escape | Success/failure | Catharsis | -- |

---

## 4-2. 6 Stages in Detail

### Stage 1: Lobby
Vehicle/gear/mission preparation. Receive missions from dealer NPCs in the hideout, select vehicle formation and dual-class, then deploy. Up to 2 vehicles per team in free combination; whether a truck is included determines escape method and rewards.

### Stage 2: Desert Movement
Vehicle combat/encounters/decisions. The movement phase between towns is also a core tension phase. AI vehicles and player vehicles are mixed together and indistinguishable from afar. Progressive identification occurs in 4 stages: starting from dust/engine sounds, then binocular/visual confirmation, drone scanning, and finally direct behavioral observation. Movement is not empty time -- the journey to the next strongpoint is gameplay itself.

### Stage 3: Town Looting
Infantry entry/operations/loading. Vehicles park at town outskirts and the convoy splits into inside/outside/recovery line roles. Towns are not looting locations but work sites. The 3-stage structure of location confirmation -> access clearance (hacking/breaching etc., 20 sec) -> cargo loading (6-12 sec per crate) forces a minimum 2-4 minute stay.

Interior operators (combat class focus), perimeter guards (drone surveillance/intel relay), and truck standby (maintaining recovery line/loading connection) -- these three positions must experience the same event at different rhythms for the convoy-level play experience to come alive.

### Stage 4: Return
Cargo loaded, back to the desert. From the moment cargo is loaded onto the truck, you have something to lose. The truck is big, slow, and visible -- it becomes a target. When the truck is destroyed, 40-60% of cargo drops on-site and 5-10% returns via insurance to the hideout (draft values). 2 stops is standard; 3 stops is the high-risk/high-reward greedy path.

### Stage 5: Escape
Three escape methods exist:
- **Chinook escape** (truck formation only): Beacon placement 5 sec -> position exposed to entire map -> 90-second holdout -> all vehicles board. Full recovery of large+small cargo.
- **Vehicle escape** (no-truck formation): Drive directly to escape point. Small cargo only. No position exposure.
- **Emergency escape** (on foot): Last resort when all vehicles are destroyed. Personal inventory only.

### Stage 6: Out-Game
Settlement/progression. Settle based on escape results and grow the hideout. Results should read not as "won/lost" but as what you extracted, what you lost, and what carries over to the next match.

---

## 4-3. 5 Match Outcome Types

| Outcome Type | Truck Status | Escape Method | Target Emotion |
|-------------|-------------|---------------|---------------|
| Contract success return | Survived | Chinook escape | The risk was worth the reward |
| Vehicle escape return | No truck in formation | Vehicle escape | Got it done quietly |
| Partial recovery failure | Destroyed | Infantry escape or ride-along | Disappointing. But not a total zero |
| Survival return | Destroyed/abandoned | Infantry escape | Didn't completely fail |
| Total failure | Destroyed | All killed | Next time I'll do it differently |

---

## 4-4. Sea of Thieves Structural Parallel and Differences

What we reference from Sea of Thieves is the "grammar of spatial structure and tension transitions."
- Ocean = desert, island = town/strongpoint, ship = formation vehicles
- After arriving at destination, the transport stays at the outskirts while crew disembark for interior operations
- The moment cargo is loaded, the return becomes the most dangerous phase
- Team members experience the same event simultaneously from different positions

Referenced but different: WR2 has higher PvPvE density than Sea of Thieves (AI vehicles/player vehicles/strongpoint AI/dynamic missions all operating simultaneously), combat texture is Battlefield-style vehicle+infantry combat, extraction economy (cargo bed progression/vehicle repair/insurance/dealer progression) clearly exists, and there is a definitive climax in the Chinook call + 90-second holdout.

---

## 4-5. Town Play Experience Design (Detailed)

After arriving at the town outskirts, the convoy naturally splits into three roles:
- **Inside the town** (1-2 players, combat class focus)
- **Perimeter guard** (1 player, combat class + vehicle role)
- **Truck standby** (1 player, vehicle role)

### Right after arriving at the outskirts
Where to park the truck is the first tactical choice. Concealed position (safe but slower loading) vs. quick-restart position (faster loading but exposed) become the options.

### Interior entry through mid-operation
Danger level must escalate over time. Interior operators debate "push all the way, or stop and check the outside situation?", while perimeter operators debate "is that approaching target a bot or player? Do I engage or just warn?" Information from outside must change the rhythm inside.

### Just before/during cargo loading
This is the tension turning point of town play. Before loading, everything is opportunity; once loading begins, you have something to lose. The truck standby must judge: "too close is dangerous, too far means longer recovery time."

### Just before leaving town
The transition point from town play to the return pursuit phase. Must decide who boards first and who covers until last.

### How town play fails (common patterns)
Inside is fun but outside is boring; operations are long but without tension; truck standby is passive; inside and outside don't affect each other's game; town exit and return feel disconnected.

---

## 4-6. Stop Structure Definition

| Stops | Description |
|-------|-------------|
| **1 stop** | Only 1 target strongpoint. Fast and easy to understand. Suitable for beginners/small groups, but becomes shallow if repeated. Should exist as an option but shouldn't become the standard. |
| **2 stops (standard)** | 2 target strongpoints. The second choice ("keep going/fold now") emerges, and return tension grows as cargo accumulates in the truck. With 2 town stays, role division operates twice, in-transit identification happens sufficiently, and the Chinook climax is reached naturally. |
| **3 stops** | The greedy path that embraces time and risk. Truck cargo is maximized, making target value peak. If executed well, it's a jackpot; if not, it's a long match ending in disaster. Should be possible but shouldn't become the standard. |

---

## 4-7. Session Director Role

The session director is not a device that forcibly fills empty matches, but one that tunes an already functional rhythm.

**What it should tune**: Situations where first contact is too late, specific strongpoint overcrowding, zero-cargo return situations, escape phases that end anticlimactically.

**What it should not do**: Excessively shake the entire match, make player choices meaningless, force the same intensity of conflict every time, use systems to cover up empty map design.

---

## 4-8. Match Density Definition

Match density is not about map size or POI count, but **how frequently meaningful decisions and pressure occur within 20 minutes**.

**Conditions for good match density**: Bot/player identification during movement, tension pressure during town stay, clear sense that the loaded truck becomes a target, pursuit/evasion decisions during return, a compression phase just before escape.

**Common cases of empty matches**: Long movement gaps, long town stays with no information, cargo loading that doesn't feel like a turning point, Chinook that ends like a mere procedure.

**Common cases of overcrowded matches**: Too many teams converge on one spot in the first 5 minutes, AI overwrites player engagements, mandatory external intervention as soon as town stay begins, return and escape connected in a straight line.

---

## 4-9. Core Experience Goals

Within a single match, the player must feel each of the following at least once:
- Is that a bot or a player?
- Do I go in now or not?
- Which route do I take the loaded truck?
- Do I engage now, or take a wide detour?
- Do I call the Chinook now, or wait?

---

## 4-10. Return Phase Tension Mechanics

Return phase tension operates through information reading and line-of-sight judgment. The truck is big, slow, and conspicuous. Any team that spots a loaded truck knows it's a target. Which route the truck takes and how it uses terrain become tactical decisions. When the Chinook is called, position exposure and pressure reach their peak.

In this structure, return tension must be created through the truck's physical presence, terrain exposure, movement speed differences, and route selection. A separate artificial exposure system (cargo exposure UI) is unnecessary and would actually dilute the Chinook climax.

---

## 4-11. Impact of Down/Revival on the Core Loop

The down/revival system directly affects town stay duration and Chinook holdout difficulty. With a medic, you can work longer in dangerous towns and have a higher chance of surviving the 90-second Chinook holdout. Without a medic, the down timer is short so revival opportunities are tight, and you become vulnerable to vehicle pressure during Chinook holdout. This is the mechanism by which dual-class combinations actually change match outcomes.
