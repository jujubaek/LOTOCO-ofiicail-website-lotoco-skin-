# LOTOCO 공식몰(카페24) 스킨 변경 기록

- 대상: PC 대표 디자인 skin11 (skin_no=15, shop_no=1, 반응형이라 모바일도 같은 원본)
- `original/` = 바꾸기 전 원본(2026-11-19 어사이드가 스마트디자인 편집기에서 읽어 Drive `TEMES/skin-exchange-20261119`에 저장한 것)
- `skin11/` = 적용할 파일. 바뀐 파일만 둔다.

## 2026-11-19 교환 신청: 교환 받을 상품·옵션 선택 필수 (주주 승인)
- `/myshop/order/exchange.html`: [교환신청] 버튼이 먼저 `lotocoExchangeApply()`로 확인. 화면에 선택된 교환상품이 없거나
  '옵션을 선택하세요'가 남아 있으면 알림만 띄우고 신청하지 않음. 통과하면 카페24 원래 `OrderApply.apply()` 그대로.
  안내 문구 '교환상품 선택없이 교환신청은 가능합니다' → 선택 안내로 변경.
- `/myshop/order/exchange_product.html`: 같은 안내 문구만 변경.
