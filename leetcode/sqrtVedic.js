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

function dwandwa(n) {
    let v
    let s = String(n).split('').map(Number)
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
    let ans = ''
    let dwlist = { n: 0, l: [], i: -1 }
    let firstPart = Number(ar[0]) // number
    let secondPart = { v: ar.reduce((st, si, i) => i > 0 ? st + si : st, ''), i: 0 }
    let carry, nextStep = 'subtract'
    let divisor
    console.log('parts', firstPart, secondPart)
    for (let stepNu = 0; stepNu < steps;) {
        // different for first step
        if (stepNu == 0) {
            let [ls, lsq] = lesserSq(firstPart)
            ans += ls
            divisor = 2 * ls
            console.log('ls', ls, lsq, ans)
            carry = firstPart - lsq // subtract step
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
            console.log('divisor', divisor,curPart,qut,carry)
            ans += qut
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
            let curPart = Number(`${carry}${secondPart.v[secondPart.i]}`)
            secondPart.i++
            let temp = curPart - dwandwa(dwlist.l[dwlist.i])
            dwlist.i++
            subtractTotal--
            stepNu++

            if (divideTotal > 0) {
                let qut = Math.floor(temp / divisor)
                carry = temp % divisor
                ans += qut
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
    return Number(ans)
}

// sqrtVedic(389376)
// sqrtVedic(12321)
sqrtVedic(21316)

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
        [21316, NaN, 146, false],
        [22201, NaN, 149, false],
        [30276, 1101, 174, false],
        [30976, 1104, 176, false],
        [36864, 1131, 192, false],
        [53361, 231, 231, true],
        [57121, NaN, 239, false],
        [78400, NaN, 280, false],
        [83521, 2108, 289, false],
        [98596, 314, 314, true],
        [116281, 341, 341, true],
        [120409, NaN, 347, false],
        [132496, NaN, 364, false],
        [159201, 3115, 399, false],
        [164836, 406, 406, true],
        [220900, 470, 470, true],
        [301401, NaN, 549, false],
        [304704, 552, 552, true],
        [350464, 5100, 592, false],
        [356409, 5106, 597, false],
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
        [976144, NaN, 988, false]
    ]).map(ti => {
        // let tsi = [ti[0], sqrtVedic(ti[0]), ti[2]]
        // test.push([...tsi, tsi[1] === tsi[2]])
    })

console.log(test.sort((a, b) => a[2] - b[2]))
// 15 false
