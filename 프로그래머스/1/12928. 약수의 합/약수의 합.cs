public class Solution {
    public int solution(int n) {
        int num = n;
        int result = 0;
        while(num > 0){
            if(n % num == 0){
                result += num;
            }
            num--;
        }
        return result;
    }
}