/**
 * Email Scrambler Component
 * Protects email from scraping while making it accessible to users
 */

// Scrambled String Constructor
function scrambledString(tag, objName, initScrambledString, initScrambledStringIndices) {
  this.tag = tag;
  this.objName = objName;
  this.string = initScrambledString;
  this.indices = initScrambledStringIndices;
  this.rescramble = rescramble;
  this.initAnimatedBubbleSort = initAnimatedBubbleSort;
  this.bubbleSortStep = bubbleSortStep;
  this.bubbleSortBookmark = this.indices.length - 2;

  this.rescramble();
  this.tag.innerHTML = ' <a href="#" onClick="' + this.objName + '.initAnimatedBubbleSort();return false;">' + this.string + '</a>';
}

// Rescramble the email
function rescramble() {
  for (i = 0; i < this.indices.length; i++) {
    indexToMove = Math.floor(Math.random() * (this.indices.length - i));
    charIndexRemoved = this.indices.splice(indexToMove, 1);
    this.indices = this.indices.concat(charIndexRemoved);
    scrambledStringTemp = this.string.substring(0, indexToMove) +
      this.string.substring(indexToMove + 1) +
      this.string.substring(indexToMove, indexToMove + 1);
    this.string = scrambledStringTemp;
  }
}

// Initialize animated bubble sort
function initAnimatedBubbleSort() {
  this.interval = setInterval(this.objName + '.bubbleSortStep()', 20);
}

// Bubble sort step
function bubbleSortStep() {   
  if (this.bubbleSortBookmark < 0) {
    this.bubbleSortBookmark = this.indices.length - 2;
  }
  for (i = this.bubbleSortBookmark; i >= 0; i--) {
    if (i == this.indices.length - 2) {
      this.changed = 0;
    }
    if (this.indices[i] > this.indices[i + 1]) {
      this.changed = 1;
      tempIndex = this.indices[i];
      this.indices[i] = this.indices[i + 1];
      this.indices[i + 1] = tempIndex;
      tempArrange = this.string.substring(0, i) +
        this.string.substring(i + 1, i + 2) + 
        this.string.substring(i, i + 1) +
        this.string.substring(i + 2);
      this.string = tempArrange;
      this.tag.innerHTML = this.string;
      this.bubbleSortBookmark = i;
      break;
    }
  }
  this.bubbleSortBookmark = i;
  if (!this.changed) {
    clearInterval(this.interval);
  }
}

// Initialize the email scrambler
function initializeEmailScrambler() {
  // If the email element exists
  const emailElement = document.getElementById('email');
  if (emailElement) {
    // Create the scrambledString instance
    emailScramble = new scrambledString(
      emailElement,
      'emailScramble',
      'mrago1ina@.rgapcagv7lm', // Scrambled email
      [14, 1, 2, 6, 20, 11, 16, 3, 4, 12, 18, 8, 9, 7, 0, 19, 15, 13, 5, 10, 17, 21] // Indices
    );
  }
}