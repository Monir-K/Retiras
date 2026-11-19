const STORAGE_KEY = 'cashPickupLedger_v1';
const SALARY_SETTINGS_KEY = 'cashPickupSalarySettings_v1';
const LANGUAGE_KEY = 'cashPickupLanguage_v1';

const translations = {
  en: {
    appTitle: 'Cash Pickup Salary Ledger',
    companyCashLedger: 'Company Cash Ledger',
    cashPickupSalaryTracker: 'Cash Pickup Salary Tracker',
    languageLabel: 'Language',
    nightMode: 'Night Mode',
    dayMode: 'Day Mode',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Exit Full Screen',
    exportPdf: 'Export PDF',
    exportPng: 'Export PNG',
    addCashPickup: 'Add Cash Pickup',
    dateLabel: 'Date',
    timeLabel: 'Time',
    amountLabel: 'Amount',
    payerLabel: 'Payer',
    payerPlaceholder: 'Who gave you the money',
    receiverLabel: 'Receiver',
    noteLabel: 'Note',
    notePlaceholder: 'Optional details',
    saveCashPickup: 'Save Cash Pickup',
    updateCashPickup: 'Update Cash Pickup',
    cancelEdit: 'Cancel Edit',
    monthlySalaryTitle: 'Monthly Salary',
    monthlySalaryField: 'Monthly Salary',
    selectMonthField: 'Select Month',
    summaryMonthlySalary: 'Monthly Salary',
    summaryDailyIncome: 'Daily Income',
    summaryCashPickups: 'Cash Pickups',
    summarySalaryRemaining: 'Salary Remaining',
    cashPickupRecords: 'Cash Pickup Records',
    clearAll: 'Clear All',
    tableDate: 'Date',
    tableTime: 'Time',
    tableAmount: 'Amount',
    tablePayer: 'Payer',
    tableReceiver: 'Receiver',
    tableNote: 'Note',
    tableAction: 'Action',
    periodLabel: 'Period',
    monthlySalaryLabel: 'Monthly Salary',
    dailyIncomeLabel: 'Daily Income',
    cashPickupsLabel: 'Cash Pickups',
    remainingLabel: 'Remaining',
    defaultReceiver: 'Your Name',
    emptyState: 'No cash pickups recorded for this month yet.',
    edit: 'Edit',
    delete: 'Delete',
    requiredFields: 'Please fill in all required fields.',
    clearAllConfirm: 'Are you sure you want to remove all cash pickup records?',
    exportNoRecords: 'No records found for this month.',
    unavailable: '—',
  },
  pt: {
    appTitle: 'Livro de Salário de Retirada de Dinheiro',
    companyCashLedger: 'Livro de Caixa da Empresa',
    cashPickupSalaryTracker: 'Rastreador de Salário de Retirada de Dinheiro',
    languageLabel: 'Idioma',
    nightMode: 'Modo Noturno',
    dayMode: 'Modo Dia',
    fullScreen: 'Tela Cheia',
    exitFullScreen: 'Sair da Tela Cheia',
    exportPdf: 'Exportar PDF',
    exportPng: 'Exportar PNG',
    addCashPickup: 'Adicionar Retirada de Dinheiro',
    dateLabel: 'Data',
    timeLabel: 'Hora',
    amountLabel: 'Valor',
    payerLabel: 'Pagador',
    payerPlaceholder: 'Quem te deu o dinheiro',
    receiverLabel: 'Recebedor',
    noteLabel: 'Observação',
    notePlaceholder: 'Detalhes opcionais',
    saveCashPickup: 'Salvar Retirada',
    updateCashPickup: 'Atualizar Retirada',
    cancelEdit: 'Cancelar Edição',
    monthlySalaryTitle: 'Salário Mensal',
    monthlySalaryField: 'Salário Mensal',
    selectMonthField: 'Selecionar Mês',
    summaryMonthlySalary: 'Salário Mensal',
    summaryDailyIncome: 'Rendimento Diário',
    summaryCashPickups: 'Retiradas de Dinheiro',
    summarySalaryRemaining: 'Salário Restante',
    cashPickupRecords: 'Registros de Retirada',
    clearAll: 'Limpar Tudo',
    tableDate: 'Data',
    tableTime: 'Hora',
    tableAmount: 'Valor',
    tablePayer: 'Pagador',
    tableReceiver: 'Recebedor',
    tableNote: 'Observação',
    tableAction: 'Ação',
    periodLabel: 'Período',
    monthlySalaryLabel: 'Salário Mensal',
    dailyIncomeLabel: 'Rendimento Diário',
    cashPickupsLabel: 'Retiradas de Dinheiro',
    remainingLabel: 'Restante',
    defaultReceiver: 'Seu Nome',
    emptyState: 'Ainda não há retiradas de dinheiro registradas para este mês.',
    edit: 'Editar',
    delete: 'Excluir',
    requiredFields: 'Preencha todos os campos obrigatórios.',
    clearAllConfirm: 'Tem certeza de que deseja remover todos os registros de retirada?',
    exportNoRecords: 'Nenhum registro encontrado para este mês.',
    unavailable: '—',
  },
  fa: {
    appTitle: 'ثبت دستی حقوق و برداشت پول',
    companyCashLedger: 'دفتر نقدی شرکت',
    cashPickupSalaryTracker: 'ردیاب حقوق و برداشت نقدی',
    languageLabel: 'زبان',
    nightMode: 'حالت شب',
    dayMode: 'حالت روز',
    fullScreen: 'تمام صفحه',
    exitFullScreen: 'خروج از تمام صفحه',
    exportPdf: 'خروجی PDF',
    exportPng: 'خروجی PNG',
    addCashPickup: 'افزودن برداشت نقدی',
    dateLabel: 'تاریخ',
    timeLabel: 'زمان',
    amountLabel: 'مبلغ',
    payerLabel: 'پرداخت‌کننده',
    payerPlaceholder: 'کسی که پول را داده است',
    receiverLabel: 'دریافت‌کننده',
    noteLabel: 'یادداشت',
    notePlaceholder: 'جزئیات اختیاری',
    saveCashPickup: 'ذخیره برداشت نقدی',
    updateCashPickup: 'به‌روزرسانی برداشت نقدی',
    cancelEdit: 'لغو ویرایش',
    monthlySalaryTitle: 'حقوق ماهانه',
    monthlySalaryField: 'حقوق ماهانه',
    selectMonthField: 'انتخاب ماه',
    summaryMonthlySalary: 'حقوق ماهانه',
    summaryDailyIncome: 'درآمد روزانه',
    summaryCashPickups: 'برداشت‌های نقدی',
    summarySalaryRemaining: 'حقوق باقیمانده',
    cashPickupRecords: 'سوابق برداشت نقدی',
    clearAll: 'حذف همه',
    tableDate: 'تاریخ',
    tableTime: 'زمان',
    tableAmount: 'مبلغ',
    tablePayer: 'پرداخت‌کننده',
    tableReceiver: 'دریافت‌کننده',
    tableNote: 'یادداشت',
    tableAction: 'عملیات',
    periodLabel: 'دوره',
    monthlySalaryLabel: 'حقوق ماهانه',
    dailyIncomeLabel: 'درآمد روزانه',
    cashPickupsLabel: 'برداشت‌های نقدی',
    remainingLabel: 'باقی‌مانده',
    defaultReceiver: 'نام شما',
    emptyState: 'هنوز هیچ برداشت نقدی برای این ماه ثبت نشده است.',
    edit: 'ویرایش',
    delete: 'حذف',
    requiredFields: 'لطفاً تمامی فیلدهای ضروری را پر کنید.',
    clearAllConfirm: 'آیا مطمئن هستید که می‌خواهید همه سوابق برداشت نقدی را حذف کنید؟',
    exportNoRecords: 'هیچ سابقه‌ای برای این ماه پیدا نشد.',
    unavailable: '—',
  },
};

const languageSelect = document.getElementById('languageSelect');
const form = document.getElementById('pickupForm');
const dateInput = document.getElementById('dateInput');
const timeInput = document.getElementById('timeInput');
const amountInput = document.getElementById('amountInput');
const payerInput = document.getElementById('payerInput');
const receiverInput = document.getElementById('receiverInput');
const noteInput = document.getElementById('noteInput');
const salaryInput = document.getElementById('monthlySalaryInput');
const monthInput = document.getElementById('salaryMonthInput');
const tableBody = document.getElementById('recordTableBody');
const clearAllBtn = document.getElementById('clearAllBtn');
const submitPickupBtn = document.getElementById('submitPickupBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const exportPdfBtn = document.getElementById('exportPdfBtn');
const exportPngBtn = document.getElementById('exportPngBtn');
const nightModeBtn = document.getElementById('nightModeBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');

const monthlySalaryDisplay = document.getElementById('monthlySalaryDisplay');
const dailyIncomeDisplay = document.getElementById('dailyIncomeDisplay');
const cashPickupsDisplay = document.getElementById('cashPickupsDisplay');
const salaryRemainingDisplay = document.getElementById('salaryRemainingDisplay');
let editingRecordId = null;

function getCurrentDateString() {
  return new Date().toISOString().split('T')[0];
}

function getCurrentTimeString() {
  return new Date().toTimeString().slice(0, 5);
}

function getDefaultMonthValue() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

function getSettings() {
  const defaults = {
    salary: 2500,
    selectedMonth: getDefaultMonthValue(),
  };

  try {
    const saved = JSON.parse(localStorage.getItem(SALARY_SETTINGS_KEY) || '{}');
    return { ...defaults, ...saved };
  } catch (error) {
    return defaults;
  }
}

function saveSettings(settings) {
  localStorage.setItem(SALARY_SETTINGS_KEY, JSON.stringify(settings));
}

function getRecords() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function saveRecords(records) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function getCurrentLanguage() {
  const saved = localStorage.getItem(LANGUAGE_KEY);
  return saved && translations[saved] ? saved : 'en';
}

function saveCurrentLanguage(language) {
  localStorage.setItem(LANGUAGE_KEY, language);
}

function getTranslation(key, fallback = '') {
  const language = getCurrentLanguage();
  return translations[language]?.[key] ?? translations.en[key] ?? fallback;
}

function applyTranslations() {
  const language = getCurrentLanguage();
  document.documentElement.lang = language;
  document.title = getTranslation('appTitle');

  const textNodes = document.querySelectorAll('[data-i18n]');
  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (key && translations[language]?.[key]) {
      node.textContent = translations[language][key];
    }
  });

  const placeholderNodes = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderNodes.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (key && translations[language]?.[key]) {
      node.placeholder = translations[language][key];
    }
  });

  const defaultReceiver = getTranslation('defaultReceiver');
  if (receiverInput && !receiverInput.dataset.userModified && !receiverInput.value) {
    receiverInput.value = defaultReceiver;
  }

  if (languageSelect) {
    languageSelect.value = language;
  }

  const isNightMode = document.body.classList.contains('night-mode');
  nightModeBtn.textContent = isNightMode ? getTranslation('dayMode') : getTranslation('nightMode');
  fullscreenBtn.textContent = document.fullscreenElement ? getTranslation('exitFullScreen') : getTranslation('fullScreen');
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(amount) || 0);
}

function getDaysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function getSelectedMonthParts() {
  const value = monthInput.value || getDefaultMonthValue();
  const [year, month] = value.split('-').map(Number);
  return { year, month: month - 1 };
}

function getMonthlyRecords(records, year, monthIndex) {
  return records.filter((record) => {
    const recordDate = new Date(`${record.date}T${record.time || '00:00'}`);
    return recordDate.getFullYear() === year && recordDate.getMonth() === monthIndex;
  });
}

function calculateSummary() {
  const settings = getSettings();
  const selectedMonth = monthInput.value || settings.selectedMonth;
  const [year, monthValue] = selectedMonth.split('-').map(Number);
  const monthIndex = monthValue - 1;
  const daysInMonth = getDaysInMonth(year, monthIndex);
  const salary = Number(salaryInput.value || settings.salary || 0);
  const records = getRecords();
  const monthlyRecords = getMonthlyRecords(records, year, monthIndex);
  const totalCashPickups = monthlyRecords.reduce((sum, record) => sum + Number(record.amount || 0), 0);
  const dailyIncome = salary / daysInMonth;
  const remainingSalary = salary - totalCashPickups;

  return {
    salary,
    dailyIncome,
    totalCashPickups,
    remainingSalary,
    monthlyRecords,
    daysInMonth,
  };
}

function renderSummary() {
  const summary = calculateSummary();

  monthlySalaryDisplay.textContent = formatCurrency(summary.salary);
  dailyIncomeDisplay.textContent = formatCurrency(summary.dailyIncome);
  cashPickupsDisplay.textContent = formatCurrency(summary.totalCashPickups);
  salaryRemainingDisplay.textContent = formatCurrency(summary.remainingSalary);
}

function renderTable() {
  const settings = getSettings();
  const selectedMonthValue = monthInput.value || settings.selectedMonth;
  const [year, monthValue] = selectedMonthValue.split('-').map(Number);
  const monthIndex = monthValue - 1;
  const records = getRecords().filter((record) => {
    const recordDate = new Date(`${record.date}T${record.time || '00:00'}`);
    return recordDate.getFullYear() === year && recordDate.getMonth() === monthIndex;
  }).sort((a, b) => new Date(`${b.date}T${b.time}`) - new Date(`${a.date}T${a.time}`));

  if (records.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" class="empty-state">${getTranslation('emptyState')}</td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = records
    .map(
      (record) => `
        <tr>
          <td>${record.date}</td>
          <td>${record.time}</td>
          <td>${formatCurrency(record.amount)}</td>
          <td>${record.payer}</td>
          <td>${record.receiver}</td>
          <td>${record.note ? escapeHtml(record.note) : getTranslation('unavailable')}</td>
          <td>
            <div class="record-actions">
              <button class="edit-btn" type="button" data-action="edit" data-id="${record.id}">${getTranslation('edit')}</button>
              <button class="delete-btn" type="button" data-action="delete" data-id="${record.id}">${getTranslation('delete')}</button>
            </div>
          </td>
        </tr>
      `
    )
    .join('');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function render() {
  renderSummary();
  renderTable();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const record = {
    id: editingRecordId || crypto.randomUUID(),
    date: dateInput.value,
    time: timeInput.value,
    amount: Number(amountInput.value),
    payer: payerInput.value.trim(),
    receiver: receiverInput.value.trim(),
    note: noteInput.value.trim(),
  };

  if (!record.date || !record.time || !record.amount || !record.payer || !record.receiver) {
    alert(getTranslation('requiredFields'));
    return;
  }

  const records = getRecords();
  if (editingRecordId) {
    const recordIndex = records.findIndex((savedRecord) => savedRecord.id === editingRecordId);
    if (recordIndex === -1) {
      cancelRecordEdit();
      return;
    }
    records[recordIndex] = record;
  } else {
    records.push(record);
  }
  saveRecords(records);

  resetPickupForm();
  render();
});

function resetPickupForm() {
  form.reset();
  dateInput.value = getCurrentDateString();
  timeInput.value = getCurrentTimeString();
  receiverInput.value = getTranslation('defaultReceiver');
  editingRecordId = null;
  submitPickupBtn.textContent = getTranslation('saveCashPickup');
  cancelEditBtn.hidden = true;
}

function cancelRecordEdit() {
  resetPickupForm();
}

function editRecord(id) {
  const record = getRecords().find((savedRecord) => savedRecord.id === id);
  if (!record) {
    return;
  }

  editingRecordId = record.id;
  dateInput.value = record.date;
  timeInput.value = record.time;
  amountInput.value = record.amount;
  payerInput.value = record.payer;
  receiverInput.value = record.receiver;
  noteInput.value = record.note || '';
  submitPickupBtn.textContent = getTranslation('updateCashPickup');
  cancelEditBtn.hidden = false;

  const recordMonth = record.date.slice(0, 7);
  if (monthInput.value !== recordMonth) {
    monthInput.value = recordMonth;
    const settings = getSettings();
    settings.selectedMonth = recordMonth;
    saveSettings(settings);
    render();
  }

  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  amountInput.focus({ preventScroll: true });
}

cancelEditBtn.addEventListener('click', cancelRecordEdit);

salaryInput.addEventListener('input', () => {
  const settings = getSettings();
  settings.salary = Number(salaryInput.value || 0);
  saveSettings(settings);
  render();
});

monthInput.addEventListener('input', () => {
  const settings = getSettings();
  settings.selectedMonth = monthInput.value || getDefaultMonthValue();
  saveSettings(settings);
  render();
});

clearAllBtn.addEventListener('click', () => {
  const confirmed = window.confirm(getTranslation('clearAllConfirm'));
  if (!confirmed) {
    return;
  }

  saveRecords([]);
  render();
});

exportPdfBtn.addEventListener('click', () => {
  document.body.classList.add('mobile-print-layout');
  window.print();
  setTimeout(() => {
    document.body.classList.remove('mobile-print-layout');
  }, 300);
});

exportPngBtn.addEventListener('click', () => {
  const settings = getSettings();
  const selectedMonth = monthInput.value || settings.selectedMonth || getDefaultMonthValue();
  const [year, month] = selectedMonth.split('-').map(Number);
  const monthIndex = month - 1;
  const records = getRecords().filter((record) => {
    const recordDate = new Date(`${record.date}T${record.time || '00:00'}`);
    return recordDate.getFullYear() === year && recordDate.getMonth() === monthIndex;
  }).sort((a, b) => new Date(`${b.date}T${b.time}`) - new Date(`${a.date}T${a.time}`));

  const summary = calculateSummary();
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const padding = 36;
  const rowHeight = 24;
  const columnWidth = [120, 90, 120, 160, 160, 220];
  const title = getTranslation('cashPickupRecords');

  const totalWidth = columnWidth.reduce((sum, width) => sum + width, 0) + 40;
  const rows = Math.max(8, records.length + 4);
  const height = 220 + rows * rowHeight + 40;

  canvas.width = Math.max(1200, totalWidth);
  canvas.height = height;

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#1b2430';
  ctx.font = 'bold 28px Arial';
  ctx.fillText(title, padding, 48);

  ctx.font = '16px Arial';
  ctx.fillStyle = '#627086';
  ctx.fillText(`${getTranslation('periodLabel')}: ${selectedMonth}`, padding, 78);
  ctx.fillText(`${getTranslation('monthlySalaryLabel')}: ${formatCurrency(summary.salary)}`, padding + 300, 78);
  ctx.fillText(`${getTranslation('dailyIncomeLabel')}: ${formatCurrency(summary.dailyIncome)}`, padding + 540, 78);
  ctx.fillText(`${getTranslation('cashPickupsLabel')}: ${formatCurrency(summary.totalCashPickups)}`, padding + 770, 78);
  ctx.fillText(`${getTranslation('remainingLabel')}: ${formatCurrency(summary.remainingSalary)}`, padding + 1010, 78);

  let xPos = padding;
  const yStart = 120;
  const headers = [
    getTranslation('tableDate'),
    getTranslation('tableTime'),
    getTranslation('tableAmount'),
    getTranslation('tablePayer'),
    getTranslation('tableReceiver'),
    getTranslation('tableNote'),
  ];

  ctx.fillStyle = '#eaf1ff';
  ctx.fillRect(padding, yStart, totalWidth - 15, 30);
  ctx.fillStyle = '#1b2430';
  ctx.font = 'bold 14px Arial';

  headers.forEach((header, index) => {
    ctx.fillText(header, xPos + 12, yStart + 20);
    xPos += columnWidth[index] + (index === headers.length - 1 ? 0 : 10);
  });

  xPos = padding;
  ctx.font = '13px Arial';
  ctx.fillStyle = '#1b2430';

  records.forEach((record, rowIndex) => {
    const y = yStart + 42 + rowIndex * rowHeight;
    const cellValues = [
      record.date,
      record.time,
      formatCurrency(record.amount),
      record.payer,
      record.receiver,
      record.note || getTranslation('unavailable'),
    ];

    xPos = padding;
    cellValues.forEach((value, index) => {
      const clipped = value.length > 22 ? `${value.substring(0, 20)}...` : value;
      ctx.fillText(clipped, xPos + 12, y + 18);
      xPos += columnWidth[index] + (index === cellValues.length - 1 ? 0 : 10);
    });
  });

  if (records.length === 0) {
    ctx.fillStyle = '#627086';
    ctx.font = '16px Arial';
    ctx.fillText(getTranslation('exportNoRecords'), padding, yStart + 80);
  }

  const link = document.createElement('a');
  link.download = `cash-pickup-records-${selectedMonth}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
});

tableBody.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) {
    return;
  }

  const id = button.dataset.id;
  if (button.dataset.action === 'edit') {
    editRecord(id);
    return;
  }

  if (button.dataset.action !== 'delete') {
    return;
  }

  const records = getRecords().filter((record) => record.id !== id);
  saveRecords(records);
  if (editingRecordId === id) {
    cancelRecordEdit();
  }
  render();
});

function updateNightModeButton() {
  const isNightMode = document.body.classList.contains('night-mode');
  nightModeBtn.textContent = isNightMode ? getTranslation('dayMode') : getTranslation('nightMode');
  nightModeBtn.setAttribute('aria-pressed', String(isNightMode));
}

function updateFullscreenButton() {
  const isFullscreen = Boolean(document.fullscreenElement);
  fullscreenBtn.textContent = isFullscreen ? getTranslation('exitFullScreen') : getTranslation('fullScreen');
  fullscreenBtn.setAttribute('aria-pressed', String(isFullscreen));
}

nightModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('night-mode');
  updateNightModeButton();
});

fullscreenBtn.addEventListener('click', async () => {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (error) {
    console.warn('Fullscreen toggle was blocked:', error);
  }
});

document.addEventListener('fullscreenchange', updateFullscreenButton);

languageSelect.addEventListener('change', (event) => {
  const nextLanguage = event.target.value;
  saveCurrentLanguage(nextLanguage);
  applyTranslations();
  render();
});

function initializeForm() {
  const today = new Date();
  dateInput.value = getCurrentDateString();
  timeInput.value = getCurrentTimeString();

  const settings = getSettings();
  salaryInput.value = settings.salary || 2500;
  monthInput.value = settings.selectedMonth || getDefaultMonthValue();

  if (!monthInput.value) {
    monthInput.value = getDefaultMonthValue();
  }

  if (languageSelect) {
    languageSelect.value = getCurrentLanguage();
  }

  updateNightModeButton();
  updateFullscreenButton();
  applyTranslations();
  render();
}

initializeForm();
