 let dynamic_text = document.querySelector(".dynamic_text");

// Storing the words or sentences for displaying inside the dynamic text element one by one with animation.
let text_array = ["Design", "Media", "Programering", "Kreativitet"];

// For extracting the values from array by the using this value as a index.
let i = 0;

  // Endrer teksten hvert 2 sekund
 setInterval(() => {
    change_text();
    }, 2000);

 function change_text() {
     // Increment the i variable value by 1. We'll use as a index to get the array element.
        i++;

    // Adding the text or array element inside the element with class "dynamic_text" according to i variable value.
        dynamic_text.innerHTML = text_array[i - 1];

  // To repeat the array element when its reaches the last one.
        if (i == text_array.length) {
            i = 0;
        }
    }