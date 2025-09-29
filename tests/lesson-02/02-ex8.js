count = 1;
res = "" + count;
for (let i = 1; i <= 100; i++) {
    if (i == count + 4) {
        count = i;
        res += ", " + count;
    }
}
console.log(res);
