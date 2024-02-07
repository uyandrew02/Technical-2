function animateBox(day, buttonElement) {
    const container = document.getElementById('animation-container');
    
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  
    const newBox = document.createElement('div');
    newBox.style.width = '400px';
    newBox.style.height = '400px';
    newBox.style.backgroundColor = getBackgroundColor(day);
    newBox.style.position = 'absolute';
    newBox.style.left = '50%';
    newBox.style.transform = 'translateX(-50%)';
    newBox.style.top = '-300px'; 
    newBox.style.transition = 'top 2s'; 
    
    container.appendChild(newBox);
  
    setTimeout(() => {
      newBox.style.top = '90px';
    }, 100);
  
    resetButtons();
    highlightButton(buttonElement, getBackgroundColor(day));
  }
  
  function getBackgroundColor(day) {
    switch (day) {
      case 'Monday': return 'violet';
      case 'Tuesday': return 'pink';
      case 'Wednesday': return 'blue';
      case 'Thursday': return 'green';
      case 'Friday': return 'yellow';
      case 'Saturday': return 'orange';
      case 'Sunday': return 'red';
      default: return 'gray';
    }
  }
  
  function resetButtons() {
    var buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(button => {
      button.style.backgroundColor = '';
      button.style.color = '';
    });
  }

  