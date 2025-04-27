document.getElementById('connectWallet').addEventListener('click', async () => {
  if (window.solana && window.solana.isPhantom) {
    try {
      const resp = await window.solana.connect();
      document.getElementById('walletAddress').innerText = 'Connected: ' + resp.publicKey.toString();
    } catch (err) {
      alert('Connection failed!');
    }
  } else {
    alert('Phantom Wallet not found!');
  }
});

document.getElementById('datasetUpload').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    document.getElementById('fileName').innerText = 'Uploaded: ' + file.name;
    document.getElementById('licenseMsg').innerText = 'License generated for dataset: ' + file.name;
  }
});
