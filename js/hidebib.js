// JavaScript function to hide bibliography entries
function hideallbibs() {
    var bibEntries = document.getElementsByClassName('bibdetails');
    for (var i = 0; i < bibEntries.length; i++) {
        bibEntries[i].style.display = 'none';
    }
}

function togglebib(bibId) {
    var bibEntry = document.getElementById(bibId);
    if (bibEntry.style.display === 'block') {
        bibEntry.style.display = 'none';
    } else {
        bibEntry.style.display = 'block';
    }
}