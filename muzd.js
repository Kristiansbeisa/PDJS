function uzd1() {
    let n = document.getElementById("in1").value;
    let izv1 = "";
    for (i=2; i<=n; i++) {
        if (i==2) {
            izv1+=" "+i 
        }
        for (j=2; j<i; j++) {
            if(i%j==0) {
                break;
            }
            if (j==i-1 && i%j!=0) {
                izv1+=" "+i
                break;
            }
        }
    }
    document.getElementById("izv1").innerHTML = izv1;
}

function uzd2() {
    let n2 = document.getElementById("in2").value;
    let izv2 = "";
    for (i=1; i<=n2; i++) {
        if (i%3==0 && i%5!=0) {
            izv2 += " fizz";
        }
        if (i%5==0 && i%3!=0) {
            izv2 +=" buzz";
        }
        if (i%3==0 && i%5==0) {
            izv2+=" fizzbuzz";
        }
        if (i%5!=0 && i%3!=0) {
            izv2+=" " + i;
        }
    }
    document.getElementById("izv2").innerHTML = izv2;
}

function uzd3() {
    let count = 0;
    let m = document.getElementById("in3").value;
    let n = document.getElementById("in31").value;
    while (m > 0) {
        if (m % 10 == n) {
            count++;
        }
        m = Math.floor(m / 10);
    }
    document.getElementById("izv3").innerHTML ="Cipara biežums skaitlī: " + count;
}