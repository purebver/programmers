using System;

public class Solution {
    public int solution(int n) {
        int result = 0;
        while(n > 0){
            result += n % 10;
            n = n / 10;
        }
        return result;
    }
}