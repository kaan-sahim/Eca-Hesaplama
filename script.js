function calculateECA() {
    const lp = parseFloat(document.getElementById('lp').value);
    const epw = parseFloat(document.getElementById('epw').value);
    const cat = parseFloat(document.getElementById('cat').value);

    if (isNaN(lp) || isNaN(epw) || isNaN(cat)) {
        document.getElementById('result').innerText = 'Please enter valid numbers for LP, EPW, and CAT.';
        return;
    }

    const nLP = lp * 5 / 100;
    const nEPW = epw * 5 / 100;
    const nCAT = cat * 20 / 100;

    const total = nLP + nEPW + nCAT;
    const youneed = (60 - total) * 8 / 7;

    document.getElementById('result').innerText = `You need: ${youneed.toFixed(2)}`;
}