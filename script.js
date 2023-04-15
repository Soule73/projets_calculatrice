var btnSeconde = document.getElementById("btnSeconde");
var btnAlpha = document.getElementById("btnAlpha");
var btnPourcentage = document.getElementById("btnPourcentage");
var btnXauCarre = document.getElementById("btnXauCarre");
var btnFlecheVersLeHaut = document.getElementById("btnFlecheVersLeHaut");
var btnFlecheVersLeGauche = document.getElementById("btnFlecheVersLeGauche");
var btnFlecheVersLeDroit = document.getElementById("btnFlecheVersLeDroit");
var btnFlecheVersLeBas = document.getElementById("btnFlecheVersLeBas");
var btnModeConfig = document.getElementById("btnModeConfig");
var btnOn = document.getElementById("btnOn");
var btnXexposantTrois = document.getElementById("btnXexposantTrois");
var btnXexposant = document.getElementById("btnXexposant");
var btnPGCD = document.getElementById("btnPGCD");
var btnPPCM = document.getElementById("btnPPCM");
var btnPointVirgule = document.getElementById("btnPointVirgule");
var btnaFoisDixexposant = document.getElementById("btnaFoisDixexposant");
var btnDixexposant = document.getElementById("btnDixexposant");
var btnExposant = document.getElementById("btnExposant");
var btnParenthesetA = document.getElementById("btnParenthesetA");
var btnDecompetB = document.getElementById("btnDecompetB");
var btnFractionC = document.getElementById("btnFractionC");
var btnArcsinsD = document.getElementById("btnArcsinsD");
var btnArccosE = document.getElementById("btnArccosE");
var btnArctanF = document.getElementById("btnArctanF");
var btnSTO = document.getElementById("btnSTO");
var btnQuatrePointVirgule = document.getElementById("btnQuatrePointVirgule");
var ParentheseOuvrant = document.getElementById("ParentheseOuvrant");
var ParentheseFermant = document.getElementById("ParentheseFermant");
var btnSD = document.getElementById("btnSD");
var btnMPlus = document.getElementById("btnMPlus");
var btnSept = document.getElementById("btnSept");
var btnHuit = document.getElementById("btnHuit");
var btnNeuf = document.getElementById("btnNeuf");
var btnSUPPR = document.getElementById("btnSUPPR");
var btnAC = document.getElementById("btnAC");
var btnQuatre = document.getElementById("btnQuatre");
var btnCinq = document.getElementById("btnCinq");
var btnSix = document.getElementById("btnSix");
var btnMul = document.getElementById("btnMul");
var btnDiv = document.getElementById("btnDiv");
var btnUn = document.getElementById("btnUn");
var btnDeux = document.getElementById("btnDeux");
var btnTrois = document.getElementById("btnTrois");
var btnPlus = document.getElementById("btnPlus");
var btnMoins = document.getElementById("btnMoins");
var btnZero = document.getElementById("btnZero");
var btnVirgule = document.getElementById("btnVirgule");
var btnPi = document.getElementById("btnPi");
var btnDRG = document.getElementById("btnDRG");
var btnEXE = document.getElementById("btnEXE");
var DegOrRad = document.getElementById("DegOrRad");
var valeurDeCalcul = document.getElementById("valeurDeCalcul");
var resultasDeCalcul = document.getElementById("resultasDeCalcul");

/**
 * Les valeurs secondes
 */
var XexposantTrois = document.getElementById("XexposantTrois").innerHTML.trim();
var XracineCarre = document.getElementById("XracineCarre").innerHTML.trim();
var arcsin = document.getElementById("arcsin").innerHTML.trim() + "(";
var arccos = document.getElementById("arccos").innerHTML.trim() + "(";
var arctan = document.getElementById("arctan").innerHTML.trim() + "(";
var pi = document.getElementById("pi").innerHTML.trim();
var XexposantTroisValeur =
  XexposantTrois.substring(0, XexposantTrois.length - 1) + "(";
var XracineCarreValeur = XracineCarre + "(";

var seconde = document.getElementById("seconde");
var isSeconde = false;
btnSeconde.addEventListener("click", () => {
  valeurDeCalcul.focus();
  seconde.classList.toggle("hidden");
  seconde.className.includes("hidden")
    ? (isSeconde = false)
    : (isSeconde = true);
});

var resultatsPrecedent = "";
var lesResultasPrecedent = [];
var lesResultasPrecedentHaut = 1;
var isDegOrRad = true;
btnFlecheVersLeHaut.addEventListener("click", () => {
  if (lesResultasPrecedent.length > 0) {
    valeurDeCalcul.value =
      lesResultasPrecedent[
        lesResultasPrecedent.length - lesResultasPrecedentHaut
      ];
    if (lesResultasPrecedent.length > lesResultasPrecedentHaut) {
      lesResultasPrecedentHaut++;
    }
  }
});
btnFlecheVersLeBas.addEventListener("click", () => {
  if (lesResultasPrecedent.length > 0) {
    valeurDeCalcul.value =
      lesResultasPrecedent[
        lesResultasPrecedent.length - lesResultasPrecedentHaut
      ];
    if (lesResultasPrecedentHaut > 1) {
      lesResultasPrecedentHaut--;
    }
  }
});
function deg() {
  DegOrRad.innerText = "D";
  isDegOrRad = false;
}
function rad() {
  DegOrRad.innerText = "R";
  isDegOrRad = true;
}
btnModeConfig.addEventListener("click", () => {
  isDegOrRad ? deg() : rad();
});
var listeDeValuerSansSeconde = [
  btnPourcentage,
  btnXauCarre,
  btnXexposantTrois,
  btnXexposant,
  btnPPCM,
  btnPointVirgule,
  btnaFoisDixexposant,
  btnDixexposant,
  btnExposant,
  btnParenthesetA,
  btnDecompetB,
  btnFractionC,
  btnArcsinsD,
  btnArccosE,
  btnArctanF,
  ParentheseOuvrant,
  ParentheseFermant,
  btnSept,
  btnHuit,
  btnNeuf,
  btnQuatre,
  btnCinq,
  btnSix,
  btnUn,
  btnDeux,
  btnTrois,
  btnZero,
  btnVirgule,
  btnPlus,
  btnMoins,
  btnMul,
  btnDiv,
  btnPi,
  btnDRG,
  btnPGCD,
];

var i = 0;

for (i; i < listeDeValuerSansSeconde.length; i++) {
  listeDeValuerSansSeconde[i].addEventListener("click", function () {
    valeurDeCalcul.focus();
    resultasDeCalcul.value = "";

    if (isSeconde) {
      if (listeDeValuerSansSeconde.indexOf(this) == 0) {
        valeurDeCalcul.value += "Abs(";
      }
      if (listeDeValuerSansSeconde.indexOf(this) == 1) {
        valeurDeCalcul.value += XracineCarreValeur;
      }
      if (listeDeValuerSansSeconde.indexOf(this) == 2) {
        valeurDeCalcul.value += XexposantTroisValeur;
      }
      if (listeDeValuerSansSeconde.indexOf(this) == 4) {
        valeurDeCalcul.value += "PPCM(";
      }
      if (listeDeValuerSansSeconde.indexOf(this) == 5) {
        valeurDeCalcul.value += ":";
      }
      if (listeDeValuerSansSeconde.indexOf(this) == 7) {
        valeurDeCalcul.value += "10^";
      }
      if (listeDeValuerSansSeconde.indexOf(this) == 8) {
        valeurDeCalcul.value += "e(";
      }
      if (listeDeValuerSansSeconde.indexOf(this) == 12) {
        valeurDeCalcul.value += arcsin;
      }
      if (listeDeValuerSansSeconde.indexOf(this) == 13) {
        valeurDeCalcul.value += arccos;
      }
      if (listeDeValuerSansSeconde.indexOf(this) == 14) {
        valeurDeCalcul.value += arctan;
      }
      if (listeDeValuerSansSeconde.indexOf(this) == 15) {
        valeurDeCalcul.value += "^-1";
      }
      if (listeDeValuerSansSeconde.indexOf(this) == 16) {
        valeurDeCalcul.value += "!";
      }
      if (listeDeValuerSansSeconde.indexOf(this) == 25) {
        valeurDeCalcul.value += ";";
      }
      if (listeDeValuerSansSeconde.indexOf(this) == 32) {
        valeurDeCalcul.value += pi;
      }
      if (listeDeValuerSansSeconde.indexOf(this) == 34) {
        valeurDeCalcul.value += "PGCD(";
      }
      seconde.classList.add("hidden");
      isSeconde = false;
    } else {
      if (listeDeValuerSansSeconde.indexOf(this) == 34) {
        traitementDeCalcul();
      }
      valeurDeCalcul.value += this.value;
    }
  });
}
function fact(n) {
  var ans = 1;

  for (var i = 2; i <= n; i++) ans = ans * i;
  return ans;
}
function calculEval() {
  valeurDeCalcul.value = res;

  if (isNaN(eval(resCos))) {
    resultasDeCalcul.value = "ERREUR MATH";
  } else {
    resultasDeCalcul.value = eval(resCos);
  }
}
function traitementDeCalcul() {
  valeurDeCalcul.focus();
  if (!isSeconde) {
    try {
      res = valeurDeCalcul.value;
      valeurDeCalcul.value = "";
      if (!res) {
        valeurDeCalcul.value = "";
      } else if (
        res.includes(btnXauCarre.value) ||
        res.includes(btnXexposantTrois.value) ||
        res.includes(btnXexposant.value) ||
        res.includes(btnDixexposant.value) ||
        res.includes(btnExposant.value) ||
        res.includes(btnArcsinsD.value) ||
        res.includes(btnArccosE.value) ||
        res.includes(btnArccosE.value) ||
        res.includes(btnArctanF.value) ||
        res.includes(btnVirgule.value) ||
        res.includes("e(") ||
        res.includes("Abs(") ||
        res.includes("PPCM(") ||
        res.includes("PGCD(") ||
        res.includes("!") ||
        res.includes(arcsin) ||
        res.includes(arccos) ||
        res.includes(arctan) ||
        res.includes(btnPourcentage.value) ||
        res.includes(btnDecompetB.value) ||
        res.includes(pi) ||
        res.includes(XexposantTroisValeur) ||
        res.includes(XracineCarreValeur) ||
        res.includes(btnMul.value) ||
        res.includes(btnDRG.value) ||
        res.includes(btnDiv.value)
      ) {
        resCos = res;
        function replaceElement(ele, val) {
          if (resCos.includes(ele.value)) {
            resCos = resCos.replaceAll(ele.value, val);
          }
        }
        function replaceElementSeconde(ele, val) {
          if (resCos.includes(ele)) {
            resCos = resCos.replaceAll(ele, val);
          }
        }
        replaceElement(btnXauCarre, "**2");
        replaceElement(btnXexposantTrois, "**3");
        replaceElement(btnXexposant, "**");
        if (resCos.includes(btnArcsinsD.value)) {
          if (isDegOrRad) {
            replaceElement(btnArcsinsD, "Math.sin(");
          } else {
            replaceElement(btnArcsinsD, "MathD.sin(");
          }
        }
        replaceElementSeconde(arcsin, "MathD.asin(");
        if (resCos.includes(btnArccosE.value)) {
          if (isDegOrRad) {
            replaceElement(btnArccosE, "Math.cos(");
          } else {
            replaceElement(btnArccosE, "MathD.cos(");
          }
        }
        replaceElementSeconde(arccos, "MathD.acos(");
        if (resCos.includes(btnArctanF.value)) {
          if (isDegOrRad) {
            replaceElement(btnArctanF, "Math.tan(");
          } else {
            replaceElement(btnArctanF, "MathD.tan(");
          }
        }
        replaceElementSeconde(arctan, "MathD.atan(");

        replaceElement(btnDixexposant, "Math.log10(");
        replaceElement(btnExposant, "Math.log(");
        replaceElement(btnVirgule, ".");
        replaceElement(btnDiv, "/");
        replaceElement(btnMul, "*");
        replaceElementSeconde("e(", "Math.abs(");
        replaceElementSeconde("Abs(", "Math.abs(");
        replaceElementSeconde(XexposantTroisValeur, "Math.cbrt(");
        replaceElementSeconde(XracineCarreValeur, "Math.sqrt(");
        replaceElementSeconde(pi, "Math.PI");
        /**
         * valeurs de résultats précedents
         */
        if (resultatsPrecedent != "") {
          replaceElement(btnDRG, resultatsPrecedent);
        } else {
          replaceElement(btnDRG, 0);
        }

        if (resCos.includes(btnPourcentage.value)) {
          var a, b, percent;
          var splitWord = [];
          splitWord = resCos.split("%");
          a = eval(splitWord[0]);
          splitWord[1] ? (b = eval(splitWord[1])) : (b = 1);
          percent = eval((a / 100) * b);
          valeurDeCalcul.value = res;
          if (isNaN(a) || isNaN(b) || isNaN(percent)) {
            resultasDeCalcul.value = "ERREUR MATH";
          } else {
            resultasDeCalcul.value = eval(percent);
          }
        } else if (resCos.includes(btnDecompetB.value)) {
          var q = Math.floor(eval(resCos.replaceAll(btnDecompetB.value, "/")));
          var r = eval(res.replaceAll(btnDecompetB.value, "%"));
          valeurDeCalcul.value = res;

          if (isNaN(q) || isNaN(r)) {
            resultasDeCalcul.value = "ERREUR MATH";
          } else {
            resultasDeCalcul.value = "Q=" + q + " R=" + r;
          }
        } else if (resCos.includes("PPCM(")) {
          splitWord = resCos.split(";");
          var val1 = splitWord[0];
          val1 = eval(val1.split("(")[1]);
          var val2 = splitWord[1];
          val2 = eval(val2.split(")")[0]);
          var multiple;
          if (val1 > 0 && val2 > 0) {
            for (var i = val1 * val2; i >= val1; i--) {
              if (i % val1 == 0 && i % val2 == 0) {
                multiple = i;
              }
            }
          }
          var pgcm = resCos.substring(
            resCos.lastIndexOf("P") - 1,
            resCos.lastIndexOf(")") + 1
          );
          resCos = eval(resCos.replaceAll(pgcm, multiple));

          valeurDeCalcul.value = res;
          resultasDeCalcul.value = resCos;
        } else if (resCos.includes("PGCD(")) {
          splitWord = resCos.split(";");
          var val1 = splitWord[0];
          val1 = eval(val1.split("(")[1]);
          var val2 = splitWord[1];
          val2 = eval(val2.split(")")[0]);
          var diviseur;
          if (val1 > 0 && val2 > 0) {
            for (var i = 1; i <= val1; i++) {
              if (val1 % i == 0 && val2 % i == 0) {
                diviseur = i;
              }
            }
          }
          var pgcd = resCos.substring(
            resCos.lastIndexOf("P"),
            resCos.lastIndexOf(")") + 1
          );
          resCos = eval(resCos.replaceAll(pgcd, diviseur));

          valeurDeCalcul.value = res;
          resultasDeCalcul.value = resCos;
        } else if (resCos.includes("!")) {
          var factorielle = fact(eval(resCos.split("!")[0]));
          resCos = resCos.replaceAll(resCos.split("!")[0], factorielle);
          resCos = eval(resCos.replaceAll("!", ""));
          calculEval();
        } else {
          calculEval();
        }
      } else {
        switch (res) {
          case "": {
            valeurDeCalcul.value = "";
            break;
          }
          default: {
            valeurDeCalcul.value = res;
            resultasDeCalcul.value = eval(res);
            break;
          }
        }
      }
      if (valeurDeCalcul.value.length > 0) {
        resultatsPrecedent = resultasDeCalcul.value;
      }
      if (
        valeurDeCalcul.value.length > 0 &&
        lesResultasPrecedent[lesResultasPrecedent.length - 1] !=
          valeurDeCalcul.value
      ) {
        lesResultasPrecedent.push(valeurDeCalcul.value);
      }
    } catch (e) {
      if (e.name == "SyntaxError") {
        resultasDeCalcul.value = "ERREUR Syntax";
        console.log(res);
      } else {
        resultasDeCalcul.value = e.name;
      }
      console.log(e);
    }
  } else {
  }
}
btnEXE.addEventListener("click", () => {
  traitementDeCalcul();
});

btnAC.addEventListener("click", () => {
  resultasDeCalcul.value = "";
  valeurDeCalcul.value = "";
});

btnSUPPR.addEventListener("click", () => {
  var last = valeurDeCalcul.value.substring(0, valeurDeCalcul.value.length - 1);
  var lastif = valeurDeCalcul.value.substring(valeurDeCalcul.value.length - 4);
  var lastif1 = valeurDeCalcul.value.substring(valeurDeCalcul.value.length - 6);
  var pgcdOrppcm = valeurDeCalcul.value.substring(
    valeurDeCalcul.value.length - 5
  );
  var ifLastLnOrRacineCube = valeurDeCalcul.value.substring(
    valeurDeCalcul.value.length - 3
  );
  var expOrRacine = valeurDeCalcul.value.substring(
    valeurDeCalcul.value.length - 2
  );
  if (
    lastif1.includes(arcsin) ||
    lastif1.includes(arccos) ||
    lastif1.includes(arctan)
  ) {
    valeurDeCalcul.value = valeurDeCalcul.value.substring(
      0,
      valeurDeCalcul.value.length - lastif1.length
    );
  } else if (
    lastif.includes("Abs(") ||
    lastif.includes(btnPi.value) ||
    lastif.includes(btnArcsinsD.value) ||
    lastif.includes(btnArccosE.value) ||
    lastif.includes(btnDixexposant.value) ||
    lastif.includes(btnArctanF.value)
  ) {
    valeurDeCalcul.value = valeurDeCalcul.value.substring(
      0,
      valeurDeCalcul.value.length - lastif.length
    );
  } else if (
    ifLastLnOrRacineCube.includes("10^") ||
    ifLastLnOrRacineCube.includes(btnExposant.value) ||
    ifLastLnOrRacineCube.includes(btnDRG.value) ||
    ifLastLnOrRacineCube.includes(XexposantTroisValeur)
  ) {
    valeurDeCalcul.value = valeurDeCalcul.value.substring(
      0,
      valeurDeCalcul.value.length - ifLastLnOrRacineCube.length
    );
  } else if (
    pgcdOrppcm.includes("PGCD(") ||
    pgcdOrppcm.includes("PPCM(") ||
    pgcdOrppcm.includes(">Simp")
  ) {
    valeurDeCalcul.value = valeurDeCalcul.value.substring(
      0,
      valeurDeCalcul.value.length - pgcdOrppcm.length
    );
  } else if (
    expOrRacine.includes("e(") ||
    expOrRacine.includes("|-") ||
    expOrRacine.includes(btnXauCarre.value) ||
    expOrRacine.includes(btnXexposantTrois.value) ||
    expOrRacine.includes(XracineCarre)
  ) {
    valeurDeCalcul.value = valeurDeCalcul.value.substring(
      0,
      valeurDeCalcul.value.length - expOrRacine.length
    );
  } else {
    valeurDeCalcul.value = last;
  }
});

/**
 * converts degree to radians
 * @param degree
 * @returns {number}
 */
var toRadians = function (degree) {
  return degree * (Math.PI / 180);
};

/**
 * Converts radian to degree
 * @param radians
 * @returns {number}
 */
var toDegree = function (radians) {
  return radians * (180 / Math.PI);
};

/**
 * Rounds a number mathematical correct to the number of decimals
 * @param number
 * @param decimals (optional, default: 11)
 * @returns {number}
 */
var roundNumber = function (number, decimals) {
  decimals = decimals || 15;
  return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
};
/**
 * the object
 */
var MathD = {
  sin: function (number) {
    return roundNumber(Math.sin(toRadians(number)));
  },
  cos: function (number) {
    return roundNumber(Math.cos(toRadians(number)));
  },
  tan: function (number) {
    return roundNumber(Math.tan(toRadians(number)));
  },
  asin: function (number) {
    return roundNumber(toDegree(Math.asin(number)));
  },
  acos: function (number) {
    return roundNumber(toDegree(Math.acos(number)));
  },
  atan: function (number) {
    return roundNumber(toDegree(Math.atan(number)));
  },
};

/**
 * pour affiche l'heure
 * @returns date
 */
function dateD() {
  setInterval(() => {
    document.getElementById("date").innerText = new Date().toLocaleTimeString();
  }, 1000);
}
dateD();
