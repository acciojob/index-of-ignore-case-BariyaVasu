



 function indexOfIgnoreCase(str, subStr) {
      if (subStr === "") return 0;
      if (str === "") return -1;
      return str.toLowerCase().indexOf(subStr.toLowerCase());
    }

    // Prompt the user for input
    const str = prompt("Enter the main string:");
    const subStr = prompt("Enter the substring to search:");

    // Call the function and show result
    const result = indexOfIgnoreCase(str, subStr);
    alert("Index of first occurrence (case-insensitive): " + result);
