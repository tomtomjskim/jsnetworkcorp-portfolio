# Live-Commerce Architecture Direction

version: PF-v0.7.0
updated: 2026-06-29
visibility: public-sanitized
status: draft

## Summary

A public-safe architecture direction for extending commerce operations into live sales channels. This page does not claim a completed production integration. It frames live-commerce as a portfolio-adjacent design direction that can reuse product, order, fulfillment, and synchronization boundaries from seller commerce operations.

## Problem

Live-commerce combines realtime media, chat, product exposure, seller operations, order handoff, moderation, and fulfillment. Without explicit boundaries, it can blur responsibility between realtime systems, commerce data, and logistics execution.

## Architecture Direction

| Layer | Responsibility |
|---|---|
| Realtime media | Live video session, room state, reconnect state, viewer experience |
| Interaction | Chat, product overlay, moderation controls, incident states |
| Commerce channel | Product exposure, order intent, channel attribution |
| Order handoff | Future connection point into commerce order intake and fulfillment boundaries |
| Fulfillment | Existing commerce/fulfillment integration model, not claimed as completed here |
| Safety | Redacted synthetic screens, no stream keys, no chat logs, no user identifiers |

## Public Resume Claims Supported

Use as portfolio/architecture discussion, not core work-experience proof:

- live-commerce를 신규 판매 채널로 보고 기존 커머스/fulfillment 구조와 연결 가능한 아키텍처 방향성 검토
- WebRTC/SFU/LiveKit 기반 실시간 방송형 커머스 구조를 R&D 관점에서 검토
- 방송, 상품 노출, 채팅, moderation, 주문 handoff 사이의 책임 경계를 분리해 설명 가능

## Boundary

Do not claim:

- production live-commerce integration completed
- SaaS platform completed
- live-commerce and fulfillment fully integrated
- production metrics, viewer counts, stream performance, or seller adoption

## Redaction Notes

- No production stream keys
- No API endpoints
- No seller/buyer identifiers
- No chat logs
- No real room metadata
- No checkout or payment records
- No operational incident logs

## Next Evidence Work

- Public-safe sequence diagram: live session → product overlay → order intent → commerce order boundary
- Public-safe moderation diagram: report → review → action → audit note
- Protected/private proof only if implementation evidence is reviewed and redacted
