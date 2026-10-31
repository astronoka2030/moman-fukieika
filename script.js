document.addEventListener('DOMContentLoaded', () => {
  // JSONデータの読み込みと初期化
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      renderStateTable(data.stateData);
      renderVillageTable(data.villageData);
      renderCountyTable(data.countyData);
      renderTitleTable(data.titleData);
      renderVehicleTables(data.vehicleUpgradeData, data.vehicleModData);
    })
    .catch(error => console.error('データ取得エラー:', error));

  // タブ切り替え機能
  const tabButtons = document.querySelectorAll('.tab-button');
  const sections = document.querySelectorAll('.content-section');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      sections.forEach(sec => sec.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(targetId).classList.add('active');
    });
  });
});

function renderStateTable(data) {
  const container = document.getElementById('state-table-container');
  let html = `<table><thead><tr><th>占有率</th><th>配当</th><th>評判</th><th>機縁</th><th>次Lv必要金額</th><th>累計必要金額</th></tr></thead><tbody>`;
  data.forEach(item => {
    const estClass = item.isEstimated ? 'class="estimated"' : '';
    const badge = item.isEstimated ? '<span class="badge-estimated">補完</span>' : '';
    html += `<tr ${estClass}><td>${item.percent}${badge}</td><td>${item.dividend}</td><td>${item.reputation}</td><td>${item.kizen}</td><td>${item.cost}</td><td>${item.totalCost}</td></tr>`;
  });
  html += `</tbody></table>`;
  container.innerHTML = html;
}

function renderVillageTable(data) {
  const container = document.getElementById('village-table-container');
  let html = `<table><thead><tr><th>占有率</th><th>配当</th><th>評判</th><th>機縁</th><th>次Lv必要金額</th><th>累計必要金額</th></tr></thead><tbody>`;
  data.forEach(item => {
    const estClass = item.isEstimated ? 'class="estimated"' : '';
    const badge = item.isEstimated ? '<span class="badge-estimated">補完</span>' : '';
    html += `<tr ${estClass}><td>${item.percent}${badge}</td><td>${item.dividend}</td><td>${item.reputation}</td><td>${item.kizen}</td><td>${item.cost}</td><td>${item.totalCost}</td></tr>`;
  });
  html += `</tbody></table>`;
  container.innerHTML = html;
}

function renderCountyTable(data) {
  const container = document.getElementById('county-table-container');
  let html = `<table><thead><tr><th>占有率</th><th>配当</th><th>評判</th><th>機縁</th><th>次Lv必要金額</th></tr></thead><tbody>`;
  data.forEach(item => {
    const estClass = item.isEstimated ? 'class="estimated"' : '';
    const badge = item.isEstimated ? '<span class="badge-estimated">補完</span>' : '';
    html += `<tr ${estClass}><td>${item.percent}${badge}</td><td>${item.dividend}</td><td>${item.reputation}</td><td>${item.kizen}</td><td>${item.cost}</td></tr>`;
  });
  html += `</tbody></table>`;
  container.innerHTML = html;
}

function renderTitleTable(data) {
  const container = document.getElementById('title-table-container');
  let html = `<table><thead><tr><th>分類</th><th>称号</th><th>必要総資産</th><th>必要総評判</th><th>解放要素</th></tr></thead><tbody>`;
  data.forEach(item => {
    html += `<tr><td>${item.rank}</td><td>${item.title}</td><td>${item.asset}</td><td>${item.reputation}</td><td>${item.unlock}</td></tr>`;
  });
  html += `</tbody></table>`;
  container.innerHTML = html;
}

function renderVehicleTables(upgradeData, modData) {
  const upgradeContainer = document.getElementById('vehicle-upgrade-table');
  let upHtml = `<table><thead><tr><th>Lv</th><th>価格</th><th>🛞 轅</th><th>🔩 車軸</th><th>📥 荷台</th><th>🏳️ 旗</th></tr></thead><tbody>`;
  upgradeData.forEach(item => {
    const estClass = item.isEstimated ? 'class="estimated"' : '';
    const badge = item.isEstimated ? '<span class="badge-estimated">補完</span>' : '';
    upHtml += `<tr ${estClass}><td>Lv ${item.lv}${badge}</td><td>${item.cost}</td><td>${item.en}</td><td>${item.jiku}</td><td>${item.nibako}</td><td>${item.hata}</td></tr>`;
  });
  upHtml += `</tbody></table>`;
  upgradeContainer.innerHTML = upHtml;

  const modContainer = document.getElementById('vehicle-mod-table');
  let modHtml = `<table><thead><tr><th>上限解放</th><th>費用</th><th>対象乗り物</th></tr></thead><tbody>`;
  modData.forEach(item => {
    modHtml += `<tr><td>${item.limit}</td><td>${item.cost}</td><td>${item.name}</td></tr>`;
  });
  modHtml += `</tbody></table>`;
  modContainer.innerHTML = modHtml;
}
