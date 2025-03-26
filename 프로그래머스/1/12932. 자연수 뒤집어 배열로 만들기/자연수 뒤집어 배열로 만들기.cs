public class Solution {
    public int[] solution(long n) {
        int length = n.ToString().Length;
        int[] answer = new int[length];
        int count = 0;
        while(n > 0){
            int num = (int)(n % 10);
            n /= 10;
            answer[count] = num;
            count++;
        }
        return answer;
    }
}