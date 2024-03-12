
document.querySelector("#content-load").innerHTML = `
<div class="card-column-1">
  <div class="card radius-all box-shadow">
    <div class="card-text radius-tlr">
      <h3 class="font-color">UUIDv4 Generator</h3>
    </div>
      <div class="card-text radius-tlr">
        <input class="card-text-npt card-text-spacing" type="text" placeholder="########-####-4###-####-############" id="result1" readonly maxlength="36">
        <button class="card-text-btn" id="copy1">Copy</button>
      </div>
      <div class="card-text radius-tlr">
        <input class="card-text-npt card-text-spacing" type="text" placeholder="########-####-4###-####-############" id="result2" readonly maxlength="36">
        <button class="card-text-btn" id="copy2">Copy</button>
      </div>
      <div class="card-text radius-tlr">
        <input class="card-text-npt card-text-spacing" type="text" placeholder="########-####-4###-####-############" id="result3" readonly maxlength="36">
        <button class="card-text-btn" id="copy3">Copy</button>
      </div>
      <div class="card-text radius-tlr">
        <input class="card-text-npt card-text-spacing" type="text" placeholder="########-####-4###-####-############" id="result4" readonly maxlength="36">
        <button class="card-text-btn" id="copy4">Copy</button>
      </div>
      <div class="card-text radius-tlr">
        <input class="card-text-npt card-text-spacing" type="text" placeholder="########-####-4###-####-############" id="result5" readonly maxlength="36">
        <button class="card-text-btn" id="copy5">Copy</button>
      </div>
      <div class="card-text radius-blr">
        <button class="card-btn" id="generate">Generate</button>
      </div>
    </div>
</div>
`;

document.getElementById('generate').onclick = () => {
  function UUIDv4() {
    let uuid = "", random;
    for (let i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i == 8 || i == 12 || i == 16 || i == 20) uuid += "-";
      uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
  }

  let UUID = UUIDv4();
  document.getElementById('result1').value = UUID;
  copyTextAlert('copy1', UUID);
  UUID = UUIDv4();
  document.getElementById('result2').value = UUID;
  copyTextAlert("copy2", UUID);
  UUID = UUIDv4();
  document.getElementById('result3').value = UUID;
  copyTextAlert('copy3', UUID);
  UUID = UUIDv4();
  document.getElementById('result4').value = UUID;
  copyTextAlert('copy4', UUID);
  UUID = UUIDv4();
  document.getElementById('result5').value = UUID;
  copyTextAlert('copy5', UUID);
}
