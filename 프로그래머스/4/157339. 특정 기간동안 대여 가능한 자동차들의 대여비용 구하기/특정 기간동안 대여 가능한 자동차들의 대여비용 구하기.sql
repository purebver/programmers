WITH Available_Cars AS (
    SELECT 
        c.CAR_ID,
        c.CAR_TYPE,
        c.DAILY_FEE,
        dp.DISCOUNT_RATE
    FROM 
        CAR_RENTAL_COMPANY_CAR c
    LEFT JOIN 
        CAR_RENTAL_COMPANY_RENTAL_HISTORY h 
        ON c.CAR_ID = h.CAR_ID 
        AND (
            h.START_DATE <= '2022-11-30' AND h.END_DATE >= '2022-11-01'
        )
    JOIN 
        CAR_RENTAL_COMPANY_DISCOUNT_PLAN dp
        ON c.CAR_TYPE = dp.CAR_TYPE 
        AND dp.DURATION_TYPE = '30일 이상'
    WHERE 
        c.CAR_TYPE IN ('세단', 'SUV')
        AND h.HISTORY_ID IS NULL
)
SELECT 
    CAR_ID,
    CAR_TYPE,
    FLOOR(DAILY_FEE * 30 * (1 - DISCOUNT_RATE / 100)) AS FEE
FROM 
    Available_Cars
WHERE 
    FLOOR(DAILY_FEE * 30 * (1 - DISCOUNT_RATE / 100)) BETWEEN 500000 AND 1999999
ORDER BY 
    FEE DESC,
    CAR_TYPE ASC,
    CAR_ID DESC;