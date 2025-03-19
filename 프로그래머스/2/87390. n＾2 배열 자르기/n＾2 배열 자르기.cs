using System;

public class Solution {
    public int[] solution(int n, long left, long right) {
        int[] result = new int[right - left + 1];
        for(long i = left; i <= right; i++){
            long a = i % n;
            long b = i / n;
            result[(int)(i - left)] = (int)(Math.Max(a, b) + 1);
        }
        return result;
    }
}