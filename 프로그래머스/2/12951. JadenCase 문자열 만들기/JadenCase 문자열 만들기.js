function solution(s) {
    const lower = s.toLowerCase();
    const arr = lower.split(' ').map(a => {
        const char = a.charAt(0);
        if(typeof(char) === Number){
            return a;
        } else {
            return a.charAt(0).toUpperCase() + a.slice(1);
        }
    });
    return arr.join(' ');
}