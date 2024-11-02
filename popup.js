// document.getElementById("pickColor").addEventListener("click", async () => {
//     if (!window.EyeDropper) {
//       alert("Your browser doesn't support the EyeDropper API.");
//       return;
//     }
  
//     const eyeDropper = new EyeDropper();
//     try {
//       const result = await eyeDropper.open();
//       document.getElementById("colorDisplay").style.backgroundColor = result.sRGBHex;
//       document.getElementById("colorCode").textContent = `Color: ${result.sRGBHex}`;
//     } catch (e) {
//       console.error("Color picking was cancelled or failed:", e);
//     }
//   });

document.getElementById("pickColor").addEventListener("click", async () => {
    if (!window.EyeDropper) {
      alert("Your browser doesn't support the EyeDropper API.");
      return;
    }
  
    const eyeDropper = new EyeDropper();
    try {
      const result = await eyeDropper.open();
      const colorDisplay = document.getElementById("colorDisplay");
      const colorCodeElement = document.getElementById("colorCode");
      const copyButton = document.getElementById("copyColor");
  
      // Display picked color
      colorDisplay.style.backgroundColor = result.sRGBHex;
      colorCodeElement.textContent = `Color: ${result.sRGBHex}`;
  
      // Show copy button
      copyButton.style.display = "inline";
      
      // Set color code in button for easy copying
      copyButton.setAttribute("data-color", result.sRGBHex);
    } catch (e) {
      console.error("Color picking was cancelled or failed:", e);
    }
  });
  
  document.getElementById("copyColor").addEventListener("click", () => {
    const colorCode = document.getElementById("copyColor").getAttribute("data-color");
    
    // Copy the color code to the clipboard
    navigator.clipboard.writeText(colorCode).then(() => {
      alert(`Copied ${colorCode} to clipboard!`);
    }).catch(err => {
      console.error("Failed to copy color:", err);
    });
  });
  
  