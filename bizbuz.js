export function bizBuz(n) {
    let eredmeny = "";
    if (n <= 0) {
        eredmeny = "nincs ilyen sorozat";
    } else {
        for (let index = 1; index <= n; index++) {
            if (index === n) {
                eredmeny += seged(index);
            } else {
                eredmeny += seged(index) + ", ";
            }
        }
    }
    /* ha n%2===0 akkor fűzzük hozzá az eredményhez BIZ */
    /* kell egy ciklus */
    return eredmeny;
  }
  
  export function seged(n) {
    /*  n>=1 , BIZ, BUZ, BIZBUZ */
    let eredmeny = "";
    if (n % 2 === 0 && n % 3 === 0) {
        eredmeny = "BIZBUZ";
    } else if (n % 2 === 0) {
        eredmeny = "BIZ";
    } else if (n % 3 === 0) {
        eredmeny = "BUZ";
    } else {
        eredmeny = n;
    }
    return eredmeny;
  }