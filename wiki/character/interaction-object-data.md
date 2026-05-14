---
title: "상호작용 오브젝트 데이터"
category: character
source: "https://docs.google.com/document/d/1IPMoEdnmcFqUK-kofVDsM4uEvFVEpE1yRI1cXNxXPOc/"
status: ingested
last_updated: 2026-05-14
---

> [목차](../index.html) | [English](interaction-object-data-en.html)


# 상호작용 오브젝트 데이터

> 작성중

---

## 상호작용 오브젝트 구조

- 하나의 상호작용 오브젝트(Interaction Object)는 여러 개의 **페이즈(Phase)**를 가짐
- 각 페이즈마다 **컨디션(Condition)**을 통해 인터렉션 가능
- 캐릭터의 인터렉션 → 기능 수행 → 다음 페이즈로 상태 변경
- 상태에 따라 오브젝트 외형(Mesh)을 다르게 지정 가능

**예시: 여닫이 문**
- 열려있음 / 닫히고있음 / 닫혀있음 / 열리고있음 — 4개 상태 + 외형 필요

**컨디션 종류**
- PC 직접 인터렉션 (기본)
- 시간의 흐름
- 외부 변수 카운트 등

컨디션 작동 → 기능(Function) 수행 → 다음 상태(Phase)로 전환

---

## 상호작용 오브젝트 데이터

| 데이터 | 단위 | 비고 |
|--------|------|------|
| ID | Type ID | 상호작용 오브젝트 고유 ID |
| Guideline Radius | cm | 상호작용 가이드라인이 표시되는 거리 |
| Interaction Radius | cm | 상호작용 메뉴가 나타나는 거리 |
| Interaction Ready Ani 1st | file name | 상호작용 메뉴가 나타날 때 1인칭 모션 |
| Interaction Ready Ani 3rd | file name | 상호작용 메뉴가 나타날 때 3인칭 모션 |
| Interaction Execute Ani 1st | file name | 상호작용 실행시 1인칭 모션 |
| Interaction Execute Ani 3rd | file name | 상호작용 실행시 3인칭 모션 |
| Interaction Execute Bind Time | ms | 상호작용 시작시 행동제약 시간 (컷씬 모션) |
| Interaction Loop Ani 1st | file name | 상호작용중 1인칭 루프 애니 |
| Interaction Loop Ani 3rd | file name | 상호작용중 3인칭 루프 애니 |
| Interaction End Ani 1st | file name | 상호작용 마무리 시 1인칭 애니 |
| Interaction End Ani 3rd | file name | 상호작용 마무리 시 3인칭 애니 |
| Interaction End Bind Time | ms | 상호작용 마무리시 행동제약 시간 |

---

## 상호작용 오브젝트 페이즈

| 데이터 | 단위 | 비고 |
|--------|------|------|
| Object ID | Type ID | 해당 페이즈가 적용될 상호작용 오브젝트 ID |
| Phase ID | Phase ID | 해당 오브젝트의 고유 Phase ID |
| Phase Mesh | file name | 해당 페이즈의 외형 메쉬 파일명 |
| Condition | Condition ID | 어떤 작동 조건으로 기능을 수행하는지 정의 |
| Function | Function ID | 컨디션 수행 시 작동하는 기능 ID |
| Phase Shift Time | ms | 페이즈 전환시 지연 시간 |
| Next Phase ID | Phase ID | 기능 수행 후 다음 연결될 페이즈 ID |
