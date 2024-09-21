SELECT A.history_id, TRUNCATE(A.FEE * (1 - COALESCE(C.discount_rate, 0) / 100), 0) AS FEE
FROM
(
SELECT *, (A.daily_fee * A.DAY) AS FEE,
    CASE WHEN A.DAY >= 7 AND A.DAY < 30 THEN '7일 이상'
    WHEN A.DAY >= 30 AND A.DAY < 90 THEN '30일 이상'
    WHEN A.DAY >= 90 THEN '90일 이상'
    ELSE 'NO_DISCOUNT' END duration_type
FROM
(
SELECT A.car_id, A.car_type, A.daily_fee, B.history_id, DATEDIFF(B.end_date, B.start_date) + 1 AS DAY
FROM CAR_RENTAL_COMPANY_CAR A JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY B ON A.CAR_ID = B.CAR_ID
WHERE A.car_type = "트럭"
) A
) A LEFT JOIN CAR_RENTAL_COMPANY_DISCOUNT_PLAN C ON A.car_type = C.car_type AND A.duration_type = C.duration_type
ORDER BY FEE DESC, history_id DESC