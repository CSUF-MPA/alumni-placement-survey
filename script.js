(function(){
  const form = document.getElementById('alumniForm');
  const statusRadios = form.querySelectorAll('input[name="naspaa_status"]');
  const sectorBlock = document.getElementById('sectorBlock');
  const eduBlock = document.getElementById('eduBlock');
  const sectorSelect = document.getElementById('naspaa_sector');
  const msg = document.getElementById('formMsg');

  const toggleBlocks = () => {
    const val = [...statusRadios].find(r => r.checked)?.value;
    sectorBlock.style.display = (val === 'employed') ? 'block' : 'none';
    eduBlock.style.display = (val === 'edu') ? 'block' : 'none';
    // Only require sector if employed
    sectorSelect.required = (val === 'employed');
  };
  statusRadios.forEach(r => r.addEventListener('change', toggleBlocks));
  toggleBlocks();

  // Enhanced form submission with AJAX
  form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting…';
    msg.textContent = '';
    msg.className = '';
    
    // Submit to Formspree
    const formData = new FormData(form);
    
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Redirect to thank you page
        window.location.href = 'thankyou.html';
      } else {
        return response.json().then(data => {
          throw new Error(data.error || 'Form submission failed');
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      msg.textContent = 'Oops! There was a problem submitting your form. Please try again.';
      msg.className = 'error';
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    });
  });

  // Allow user to download a JSON copy of their responses
  document.getElementById('saveJson').addEventListener('click', function(){
    const data = new FormData(form);
    const obj = {};
    for (const [k, v] of data.entries()) {
      if (k === '_gotcha' && v) { return; } // honeypot trip
      obj[k] = v;
    }
    const blob = new Blob([JSON.stringify(obj, null, 2)], {type: 'application/json'});
    const a = document.createElement('a');
    const ts = new Date().toISOString().slice(0,19).replace(/[:T]/g,'-');
    a.href = URL.createObjectURL(blob);
    a.download = `mpa-alumni-survey-${ts}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
})();
