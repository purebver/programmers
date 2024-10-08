SELECT A.FLAVOR
FROM
(
SELECT FLAVOR, SUM(TOTAL_ORDER) TOTALA
FROM JULY
GROUP BY FLAVOR
)A JOIN
(
SELECT FLAVOR, SUM(TOTAL_ORDER) TOTALB
FROM FIRST_HALF
GROUP BY FLAVOR
)B ON A.FLAVOR = B.FLAVOR
ORDER BY A.TOTALA + B.TOTALB DESC
LIMIT 3