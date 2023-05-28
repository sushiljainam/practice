// ts-check

console.log('----------FILE START ----------')

let SQ100 = Array(10).fill(0).map((v, i) => v = (i + 1) * (i + 1))
// console.log(SQ100)

function lesserSq(n) {
    for (let i = 0; i < SQ100.length; i++) {
        if (SQ100[i] <= n) {
        } else {
            return [i, SQ100[i - 1]]
        }
    }
}

/**
 * 
 * @param {number[]} arr 
 * @param {Object} dwRef 
 */
function dwandwaNextKey(arr, dwRef) {
    let dwl = []
    let dwr = []
    let ds = 'd_'
    for (let i = 0; i < arr.length; i++) {
        ds = `${ds}${arr[i]}`
        dwl.push(ds)
    }
    ds = ''
    for (let i = arr.length - 1; i > 0; i--) {
        ds = `${arr[i]}${ds}`
        dwr.unshift(`r_${ds}`)
    }
    dwl = dwl.concat(dwr)
    console.log(dwl, dwr, dwRef)
    for (let i = 0; i < dwl.length; i++) {
        if (!dwRef[dwl[i]])
            return dwl[i]
    }
}

/**
 * 
 * @param {string} n e.g. d_2 or d_23 or d_234
 * @returns {number}
 */
function dwandwaValue(n) {
    let v = 0
    let s = n.split('_')[1].split('').map(Number)
    let [a, b, c, d] = s
    switch (s.length) {
        case 4:
            v = 2 * (a * d) + 2 * (b * c)
            break;
        case 3:
            v = 2 * (a * c) + (b * b)
            break;
        case 2:
            v = 2 * (a * b)
            break;
        default:
            v = a * a
            break;
    }
    return v
}

function markDwandwaUsed(dwRef, dwKey) {
    dwRef[dwKey] = true
}

/**
 * 
 * @param {number} n whole square number
 * @returns {number} sqrt of given number
 */
function sqrtVedic(n) {
    console.log('s', n)
    let ar = [], s = String(n)
    for (let i = s.length - 1; i >= 0; i -= 2) {
        ar.unshift(`${s[i - 1] || ''}${s[i]}`)
    }
    console.log('ar', ar)
    let divideTotal = ar.length - 1
    let subtractTotal = divideTotal * 2
    let steps = divideTotal + subtractTotal
    let ans = [[], []]
    let dwlist = { n: 0, l: [], i: -1 }
    let firstPart = Number(ar[0]) // number
    let secondPart = { v: ar.reduce((st, si, i) => i > 0 ? st + si : st, ''), i: 0 }
    let carry, nextStep = 'subtract'
    let divisor
    let usedDwandwa = {}
    console.log('parts', firstPart, secondPart)
    for (let stepNu = 0; stepNu < steps;) {
        // different for first step
        if (stepNu == 0) {
            let [ls, lsq] = lesserSq(firstPart)
            ans[0].push(ls)
            divisor = 2 * ls
            console.log('ls', ls, lsq, ans)
            carry = firstPart - lsq // subtract step
            if (carry < 0) console.log('ALERT--22')
            subtractTotal--
            nextStep = 'divide'
            stepNu++
            continue
        }
        if (nextStep == 'divide') {
            console.log('stepNu-d', stepNu, carry, secondPart)
            let curPart = Number(`${carry}${secondPart.v[secondPart.i]}`)
            secondPart.i++

            let qut = Math.floor(curPart / divisor)
            carry = curPart % divisor
            while (qut > 9) {
                qut--
                carry += divisor
            }
            console.log('divisor', divisor, curPart, qut, carry)
            ans[1].push(qut)
            dwlist.n = dwlist.n * 10 + qut
            dwlist.l = [qut]
            dwlist.i = 0
            divideTotal--

            console.log('div-car', carry, ans, secondPart)
            nextStep = 'subtract'
            stepNu++
            continue
        }
        if (nextStep == 'subtract') {
            console.log('stepNu-s', stepNu, carry, secondPart)
            // console.log('divisor', divisor)
            let temp = -1, udw = ''
            while (temp < 0) {
                let curPart = Number(`${carry}${secondPart.v[secondPart.i]}`)
                udw = dwandwaNextKey(ans[1], usedDwandwa)
                temp = curPart - dwandwaValue(udw)
                if (temp < 0) {
                    ans[1][ans[1].length - 1]--
                    if (ans[1][ans[1].length - 1] < 0) console.log('ALERT--33')
                    carry += divisor
                    console.log('refined ans', ans, carry)
                }
            }
            if (temp < 0) console.log('ALERT--11')
            markDwandwaUsed(usedDwandwa, udw)
            secondPart.i++
            dwlist.i++
            subtractTotal--
            stepNu++

            if (divideTotal > 0) {
                let qut = Math.floor(temp / divisor)
                carry = temp % divisor
                ans[1].push(qut)
                dwlist.l = [dwlist.n]
                dwlist.n = dwlist.n * 10 + qut
                dwlist.l.push(dwlist.n)
                dwlist.l.push(qut)
                // dwlist.i++
                divideTotal--
                stepNu++
            } else {
                carry = temp
            }

            console.log('div-car', carry, ans, secondPart)
            nextStep = 'subtract'
            continue
        }
    }
    return Number(ans.flat().join(''))
}

// sqrtVedic(389376)
// sqrtVedic(12321)
// sqrtVedic(21316)
// sqrtVedic(976144)
// sqrtVedic(10201)
// sqrtVedic(11664)
// sqrtVedic(11881)
// sqrtVedic(350464)
// sqrtVedic(3136)
// sqrtVedic(59049)

let test = []
for (let i = 0; i < 0; i++) {
    let n = 100 + Math.floor(Math.random() * 900)
    let ti = [n * n, sqrtVedic(n * n), n]
    test.push([...ti, ti[1] === ti[2]])
}
console.log(test)

let tests = []
    .concat([
        [12100, 110, 110, true],
        [12321, 111, 111, true],
        [14884, 122, 122, true],
        [14884, 122, 122, true],
        [21316, 146, 146, true],
        [22201, 1412, 149, false],
        [30276, 174, 174, true],
        [30976, 1710, 176, false],
        [36864, 192, 192, true],
        [53361, 231, 231, true],
        [57121, 2310, 239, false],
        [78400, 280, 280, true],
        [83521, 2811, 289, false],
        [98596, 314, 314, true],
        [116281, 341, 341, true],
        [120409, 347, 347, true],
        [132496, 364, 364, true],
        [159201, 3911, 399, false],
        [164836, 406, 406, true],
        [220900, 470, 470, true],
        [301401, 549, 549, true],
        [304704, 552, 552, true],
        [350464, 592, 592, true],
        [356409, 597, 597, true],
        [398161, 631, 631, true],
        [407044, 638, 638, true],
        [467856, 684, 684, true],
        [515524, 718, 718, true],
        [541696, 736, 736, true],
        [558009, 747, 747, true],
        [568516, 754, 754, true],
        [582169, 763, 763, true],
        [651249, 807, 807, true],
        [746496, 864, 864, true],
        [758641, 871, 871, true],
        [840889, 917, 917, true],
        [879844, 938, 938, true],
        [883600, 940, 940, true],
        [960400, 980, 980, true],
        [976144, 988, 988, true]
    ]).map(ti => {
        let tsi = [ti[0], sqrtVedic(ti[0]), ti[2]]
        test.push([...tsi, tsi[1] === tsi[2]])
    })

console.log(test.sort((a, b) => a[2] - b[2]))
// 15 falseTotal
// 14 falseTotal
