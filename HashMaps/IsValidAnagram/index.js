function isValidAnagram(s, t) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }

    for (let char of t) {
        if(!map.has(char) || map.get(char) === 0) {
            return false
        }

        map.set(char, map.get(char) - 1)
    }
    return true
}

console.log(isValidAnagram('listen','sitlen'))
console.log(isValidAnagram('hello','llohe'))
console.log(isValidAnagram('nexus','suten'))
