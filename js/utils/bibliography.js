/**
 * Bibliography Utilities
 * Functions for handling bibliography entries
 */

// Hide all bibliography entries
function hideallbibs() {
  var bibEntries = document.getElementsByClassName('bibdetails');
  for (var i = 0; i < bibEntries.length; i++) {
    bibEntries[i].style.display = 'none';
  }
}

// Toggle visibility of a bibliography entry
function togglebib(bibId) {
  var bibEntry = document.getElementById(bibId);
  if (bibEntry) {
    if (bibEntry.style.display === 'block') {
      bibEntry.style.display = 'none';
    } else {
      bibEntry.style.display = 'block';
    }
  }
}