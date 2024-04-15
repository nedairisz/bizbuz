import { bizBuz, seged } from "./bizbuz.js";

export function tesztBizBuz() {
    const tesztLISTA = [
    {
        n: 0,
        vart: "nincs ilyen sorozat",
    },
    {
        n: -1,
        vart: "nincs ilyen sorozat",
    },
    {
        n: 1,
        vart: "1",
    },
    {
        n: 2,
        vart: "1, BIZ",
    },
    {
        n: 3,
        vart: "1, BIZ, BUZ",
    },
    {
        n: 10,
        vart: "1, BIZ, BUZ, BIZ, 5, BIZBUZ, 7, BIZ, BUZ, BIZ",
    },
    ];
  /* for (let i=0; i<tesztLISTA.lenght; i++){
    let tesztEset=tesztLISTA[i]
} */
  tesztLISTA.forEach((tesztEset, index) => {
    let fvEredmeny = bizBuz(tesztEset.n);
    console.assert(
        tesztEset.vart === fvEredmeny,
        "%o",
        `n: ${tesztEset.n} vart:${tesztEset.vart} kapott:${fvEredmeny}`,
        `HIBA! a ${index}. tesztesetnél`
    );
  });
}

export function tesztSeged() {
  const tesztLISTA = [
    {
        n: 1,
        vart: 1,
    },
    {
        n: 2,
        vart: "BIZ",
    },
    {
        n: 3,
        vart: "BUZ",
    },
    {
        n: 6,
        vart: "BIZBUZ",
    },
    ];
 
  tesztLISTA.forEach((tesztEset, index) => {
    let fvEredmeny = seged(tesztEset.n);
    console.assert(
        tesztEset.vart === fvEredmeny,
        "%o",
        `n: ${tesztEset.n} vart:${tesztEset.vart} kapott:${fvEredmeny}`,
        `HIBA! a ${index}. tesztesetnél`
    );
  });
}