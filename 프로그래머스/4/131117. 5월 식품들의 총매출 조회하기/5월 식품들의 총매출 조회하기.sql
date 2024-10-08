SELECT PRODUCT_ID, PRODUCT_NAME, SUM(PRICE * AMOUNT) AS TOTAL_SALES
FROM
(
SELECT A.PRODUCT_ID, A.PRODUCT_NAME, A.PRICE, B.AMOUNT
FROM FOOD_PRODUCT A JOIN FOOD_ORDER B ON A.PRODUCT_ID = B.PRODUCT_ID
WHERE DATE_FORMAT(PRODUCE_DATE, "%Y-%m") = "2022-05"
) A
GROUP BY PRODUCT_ID
ORDER BY TOTAL_SALES DESC, PRODUCT_ID ASC
