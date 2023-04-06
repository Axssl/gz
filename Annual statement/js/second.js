window.onload = function () {
    //顶部手机轮廓图、山、云、最下面三角梯子
    let bg = document.querySelector('.bg')
    let mountains = document.querySelector('.mountain')
    let shoujis = document.querySelector('.top')
    let tows = document.querySelector('.tow')
    //包裹除了升天的柱子，其他所有柱子的盒子
    let first = document.querySelector('.first')

    let jiantous = document.querySelectorAll('.jiantou') //获取向上箭头
    //四根激活柱
    let z1 = document.querySelector('.z09')
    let z2 = document.querySelector('.z15')
    let z3 = document.querySelector('.z30')
    let z4 = document.querySelector('.z12')
    //鸽子
    let gzs = document.querySelector('.gz1')
    let tps = gzs.querySelector('img')

    let zhuzi = document.querySelectorAll('.pillar')//所有柱子
    let fengc = document.querySelector('.feng')//风车
    let columns = document.querySelectorAll('.column')//三根柱子元素集合
    //三根柱子上的图片
    let dh = document.querySelector('.z20')
    let wf = document.querySelector('.z32')
    let jb = document.querySelector('.z16')
    //获取光圈
    let gq1 = document.querySelector('.gq1')
    let gq2 = document.querySelector('.gq2')
    let gq3 = document.querySelector('.gq3')
    let gq4 = document.querySelector('.gq4')
    //包裹第二部分的框
    let yinc = document.querySelector('.yincang')
    //音频
    let mymusic1 = document.querySelector('.mymusic1')
    let mymusic2 = document.querySelector('.mymusic2')
    let mymusic3 = document.querySelector('.mymusic3')
    let mymusic4 = document.querySelector('.mymusic4')
    //装文字的div
    let one = document.querySelector('.one')//首页
    //第二部分
    let three = document.querySelector('.three')
    let four = document.querySelector('.four')
    let five = document.querySelector('.five')
    let six = document.querySelector('.six')
    let seven = document.querySelector('.seven')//第三部分
    //三个球
    let t1 = document.querySelector('.t1')
    let t2 = document.querySelector('.t2')
    let t3 = document.querySelector('.t3')

    let sid1, sid, sid2, sid3
    let flat1 = false, flat2 = false

    //开始鸽子上升动画
    gzs.setAttribute('class', 'gz1 gg')

    //开始音频
    document.onmousedown = function () {
        musicstart(mymusic1)
    }

    //用户滑动事件
    setTimeout(() => {
        document.ontouchmove = function () {
            musicstop(mymusic1)//开始音频停止
            document.onmousedown = null
            document.ontouchmove = null
            yingc(one)
            xianshi(yinc)
            ladder(0, gq1, 1, false, 5500, 3500)//第一部分梯子升起
        }
    }, 3000)

    // 箭头循环添加动画
    for (let i = 0; i < jiantous.length; i++) {
        setInterval(function () {
            jiantous[2 - i].setAttribute('class', 'jiantou cycle')
        }, i * 900)
    }

    //风车
    let f = 1
    setInterval(function () {
        if (f > 3) f = 1
        fengc.setAttribute('src', `../img/z18-${f}.png`)
        f++
    }, 100)

    //循环添加梯子升降动画
    let j = 0
    function pillars(zhuzindex) {
        sid = setInterval(function () {
            zhuzi[j].classList.add('remove')
            zhuzindex = j
            j++
            if (j == 7) clearInterval(sid)
            if (j == 12) clearInterval(sid)
            if (j == 17) clearInterval(sid)
            if (j > zhuzi.length - 1) { j = 0; clearInterval(sid) }
        }, 500)
    }

    //三根柱子循环添加动画(电话，wifi,金币)
    let b = 0
    function column(columnindex) {
        sid2 = setInterval(function () {
            columns[b].classList.add('remove1')
            columnindex = b
            b++
            if (b == 2) clearInterval(sid2)
            if (b == 4) clearInterval(sid2)
            if (b > columns.length - 1) { b = 0; clearInterval(sid2) }
        }, 50)
    }

    //封装点柱子瞬移
    function zz(g, h, d, k, r, t, y) {
        if (flat1) {
            flat1 = false
            if (gzs.getAttribute('class') == `gz1 move${g}`
                || `gz1 jihuo${g}`
                || `gz1 jihuo${h}`
                || `gz1 move${h}`) {
                gzs.setAttribute('class', `gz1 jihuo${d}`)
                tps.setAttribute('src', `../img/gg/gz${k}${1}.png`)
                yingc(r)
                yingc(t)
                xianshi(y)
                flat1 = true
            }
        }
    }

    //点击激活柱添加瞬移类名
    z1.onclick = function () {
        zz(2, 3, 1, 0, six, five, four)
    }

    z2.onclick = function () {
        zz(1, 3, 2, 2, six, four, five)
    }

    z3.onclick = function () {
        if (flat2) {
            zz(1, 2, 3, 3, four, five, six)
        }
    }


    //封装梯子升起动画 //梯子升起音频开启
    function ladder(x, y, i, n, z, l) {
        setTimeout(() => {
            musicstart(mymusic2) //梯子升起音频开启
            pillars(x)//调用柱子升起动画
            setTimeout(() => {
                musicstop(mymusic2)//梯子升起音频关闭
                //光圈显示加动画
                xianshi(y)
                y.setAttribute('class', `gq${i} gqeffect`)
                flat1 = n
            }, z)
        }, l)
    }

    //封装三根柱子上升动画(电话，wifi,金币)//梯子升起音频开启
    function triplets(x, y, a, z, n, b, i) {
        setTimeout(() => {
            musicstart(mymusic2)//梯子升起音频开启
            column(x)
            setTimeout(() => {
                //电话柱子，电话加动画，换文字
                yingc(y)
                yingc(a)
                xianshi(z)
                n.setAttribute('class', `${b} column dh`)
            }, 2000)
        }, i)
    }

    //封装给鸽子添加移动类名，走路音频开始播放
    function yidong(a, b) {
        musicstart(mymusic4)//鸽子走路音频开始
        gzs.setAttribute('class', `gz1 move${a}`)
        tps.setAttribute('src', `../img/gg/gz${b}${4}.png`)
    }

    //封装鸽子转弯动画和清除定时器
    function xj1(a, b) {
        setTimeout(() => {
            clearInterval(sid1)
            fz1(a)
        }, b)
    }

    //封装最后清楚的定时器,鸽子停止，走路音频停止
    function xj2(a, b) {
        setTimeout(() => {
            clearInterval(sid1)
            tps.setAttribute('src', `../img/gg/gz${a}${1}.png`)
            musicstop(mymusic4)//小鸡走路音频停止
        }, b)
    }


    // 柱子、鸽子添加升天动画 和 山、手机、文字隐藏
    function st(a) {
        setTimeout(() => {
            // 柱子、鸽子添加升天动画
            z4.setAttribute('class', 'z12 pillar child stz')
            gzs.setAttribute('class', 'gz1 stg')
            // 山、手机、文字隐藏
            yingc(mountains)
            yingc(shoujis)
            yingc(six)
            yingc(five)
            yingc(four)
        }, a)
    }

    // 升天时其他柱子添加下降动画
    function xiaj(a, b) {
        setTimeout(() => {
            bg.setAttribute('class', 'bg shengt')
            first.setAttribute('class', 'first firstxy')
            tows.setAttribute('class', 'tow firstxy')
            tps.setAttribute('src', `../img/gg/gz${a}${1}.png`)
        }, b)
    }

    // 第三部分显示
    function third(c) {
        setTimeout(() => {
            xianshi(seven)
            //两秒后给球加动画
            qdh(2000)
        }, c)
    }

    //两秒后给球加动画
    function qdh(a) {
        setTimeout(() => {
            t1.setAttribute('class', 't1 q')
            t2.setAttribute('class', 't2 q')
            t3.setAttribute('class', 't3 q')
        }, a)
    }




    // 点击光圈添加小鸡移动动画
    gq1.onclick = function () {
        yingc(gq1)
        yidong(1, 0)//添加移动类名
        fz1(0)  //鸽子走路动画
        xj1(1, 1800)//鸽子走路转弯动画
        xj1(0, 3200)
        xj1(1, 5600)
        xj2(1, 7800)
        //调用三根柱子效果函数
        triplets(2, three, five, four, dh, 'z20', 7784)//三根柱子上升动画(电话，wifi,金币)
        ladder(7, gq2, 2, false, 4684, 9784)//第二部分梯子升起
    }

    gq2.onclick = function () {
        yingc(gq2)
        yidong(2, 0)//添加移动类名
        fz1(0)//鸽子走路动画
        xj1(1, 400)//鸽子走路转弯动画
        xj2(1, 4544)
        triplets(4, four, six, five, wf, 'z32', 4544)//三根柱子上升动画(电话，wifi,金币)
        ladder(12, gq3, 3, true, 4444, 6544)//第三部分梯子升起
    }

    gq3.onclick = function () {
        flat1 = false
        flat2 = true
        yingc(gq3)
        yidong(3, 2)//添加移动类名
        fz1(2)//鸽子走路动画
        xj1(3, 1600)//鸽子走路转弯动画
        xj1(2, 2800)
        xj2(2, 5100)
        triplets(6, four, five, six, jb, 'z16', 5006)//三根柱子上升动画(电话，wifi,金币)
        ladder(17, gq4, 4, true, 4300, 7006)//第四部分梯子升起
    }

    gq4.onclick = function () {
        flat1 = false
        yingc(gq4)
        yidong(4, 3)//添加移动类名
        fz1(3)//鸽子走路动画
        xj1(0, 2100)//鸽子走路转弯动画
        xj1(0, 3800)
        xj2(0, 3800)
        musicstart(mymusic3, 3800)
        st(3800)// 柱子、鸽子添加升天动画  // 山、手机、文字消失
        xiaj(3, 4300) // 其他柱子下降动画
        third(7600)//第三部分显示
        musicstop(mymusic3, 9600)
    }

    // 封装鸽子走路动画
    function fz1(x) {
        let y = 1
        sid1 = setInterval(() => {
            if (y > 5) y = 1
            tps.setAttribute('src', `../img/gg/gz${x}${y}.png`)
            y++
        }, 150)
    }

    //显示
    function xianshi(disp) {
        disp.style.display = 'block'
    }

    //隐藏
    function yingc(hide) {
        hide.style.display = 'none'
    }

    // 封装音频开始
    function musicstart(a, b) {
        setTimeout(() => {
            a.play()
        }, b)
    }

    // 封装音频停止
    function musicstop(a, b) {
        setTimeout(() => {
            a.pause()
        }, b)
    }
}