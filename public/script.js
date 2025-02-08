function toggleDiv1122() {
    var div11 = document.getElementById('div11');
    var div22 = document.getElementById('div22');

    if (div11.style.display !== 'none') {
        div11.style.display = 'none';
        div22.style.display = 'block';
    } else {
        div11.style.display = 'block';
        div22.style.display = 'none';
    }
}

function toggleDiv1() {
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');

    if (div1.style.display !== 'none') {
        div1.style.display = 'none';
        div2.style.display = 'block';
    } else {
        div1.style.display = 'block';
        div2.style.display = 'none';
    }
}

function increaseSize() {
    var button1 = document.getElementById('btn-yes');
    var maxSize = 500;
    var currentSize = parseInt(window.getComputedStyle(button1).getPropertyValue('padding'));

    function increaseButtonSize() {
        currentSize += 30;
        if (currentSize < maxSize) {
            button1.style.padding = currentSize + 'px';
        } else {
            resetButtonSize();
        }
    }
    increaseButtonSize();
}

function resetButtonSize() {
    var button = document.getElementById('btn-yes');
    button.style.padding = '8px';
}

function toggleDiv2() {
    var div2 = document.getElementById('div2');
    var div3 = document.getElementById('div3');
    var hearts = document.getElementById('heart-float');

    if (div2.style.display !== 'none') {
        div2.style.display = 'none';
        div3.style.display = 'block';
        hearts.style.display = 'block';
    } else {
        div2.style.display = 'block';
        div3.style.display = 'none';
        hearts.style.display = 'none';
    }
}
