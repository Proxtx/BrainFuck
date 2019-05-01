function BF(code, r = 1000) {
  var sc = "";
  var rc = 0;
  var p = 0;
  var output = "";
  var final = [0];
  for (var i = 0; i < code.length; i++) {
    if (
      code[i] == "<" ||
      code[i] == ">" ||
      code[i] == "+" ||
      code[i] == "-" ||
      code[i] == "[" ||
      code[i] == "]" ||
      code[i] == "." ||
      code[i] == ","
    ) {
      sc = sc + code[i];
    }
  }
  for (var i = 0; i < sc.length; i++ && rc++) {
    if (!(r >= rc)) {
      return [final, output];
    }
    if (sc[i] == "+") {
      if (final[p] == 227) {
        return [final, output];
      }
      final[p]++;
    } else if (sc[i] == "-") {
      if (final[p] == -226) {
        return [final, output];
      }
      final[p]--;
    } else if (sc[i] == ">") {
      if (final.length <= p + 1) {
        final.push(0);
      }
      p++;
    } else if (sc[i] == "<") {
      if (0 == p) {
        return [final, output];
      }
      p--;
    } else if (sc[i] == "[") {
      var o = 0;
      var f = false;
      if (final[p] == 0) {
        for (var x = i + 1; x < sc.length; x++) {
          if (sc[x] == "]") {
            if (o == "0") {
              i = x;
              f = true;
            } else {
              o--;
            }
          } else if (sc[x] == "[") {
            o++;
          }
        }
        if (!f) {
          return [final, output];
        }
      }
    } else if (sc[i] == "]") {
      var o = 0;
      var f = false;
      for (var x = i - 1; x > -1; x--) {
        if (sc[x] == "[") {
          if (o == 0) {
            i = x - 1;
            f = true;
          } else {
            alert(o);
            o++;
          }
        } else if (sc[x] == "]") {
          o--;
        }
      }
      if (!f) {
        return [final, output];
      }
    } else if (sc[i] == ".") {
      output = output + String.fromCharCode(final[p]);
    } else if (sc[i] == ",") {
      final[p] = window.prompt().charCodeAt(0);
    }
  }
  return [final, output];
}
