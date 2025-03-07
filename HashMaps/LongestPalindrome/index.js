function longestPalindrome(s) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }

    let length = 0
    let isOdd = false

    for (let count of map.values()) {
        if (count % 2 === 0) {
            length += count
        } else {
            length += count - 1
            isOdd = true
        }
    }
    
    if (isOdd) {
        length += 1
    }
    return length
}

console.log(longestPalindrome('abccccdd'))
console.log(longestPalindrome('ssgggrt'))
console.log(longestPalindrome('ffgjwjww'))
