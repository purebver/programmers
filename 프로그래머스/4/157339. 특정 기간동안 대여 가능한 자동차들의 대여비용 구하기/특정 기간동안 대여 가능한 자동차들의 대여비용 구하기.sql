SELECT CAR_ID, CAR_TYPE, FEE
FROM
(
SELECT A.CAR_ID, A.CAR_TYPE, TRUNCATE(A.DAILY_FEE * (1 - C.DISCOUNT_RATE / 100) * 30, 0) FEE
FROM
(
SELECT A.CAR_ID, A.CAR_TYPE, A.DAILY_FEE
FROM CAR_RENTAL_COMPANY_CAR A LEFT JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY B 
ON A.CAR_ID = B.CAR_ID AND (B.START_DATE <= '2022-11-30' AND B.END_DATE >= '2022-11-01')
WHERE B.HISTORY_ID IS NULL AND A.CAR_TYPE IN ('세단', 'SUV')
) A JOIN CAR_RENTAL_COMPANY_DISCOUNT_PLAN C ON A.CAR_TYPE = C.CAR_TYPE AND C.DURATION_TYPE = '30일 이상'
) A
WHERE FEE BETWEEN 500000 AND 1999999
ORDER BY FEE DESC, CAR_TYPE ASC, CAR_ID DESC
