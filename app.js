const LANGUAGE_KEY = 'cashPickupLanguage_v1';

const translations = {
  en: {
    appTitle: 'Cash Pickup Salary Ledger',
    authHeading: 'Your private salary ledger',
    authIntro: 'Create an account to keep your salary and cash pickup records private.',
    signIn: 'Sign in',
    signOut: 'Sign out',
    createAccount: 'Create account',
    nameLabel: 'Name',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    passwordHint: 'Use at least 10 characters.',
    signedInAs: 'Signed in as',
    importCsv: 'Import CSV',
    csvHelp: 'CSV columns: date, amount, payer. Optional: time, receiver, note. Dates use YYYY-MM-DD.',
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
const authShell = document.getElementById('authShell');
const appShell = document.getElementById('appShell');
const authForm = document.getElementById('authForm');
const authNameField = document.getElementById('authNameField');
const authNameInput = document.getElementById('authNameInput');
const authEmailInput = document.getElementById('authEmailInput');
const authPasswordInput = document.getElementById('authPasswordInput');
const authMessage = document.getElementById('authMessage');
const authSubmitBtn = document.getElementById('authSubmitBtn');
const signInModeBtn = document.getElementById('signInModeBtn');
const createAccountModeBtn = document.getElementById('createAccountModeBtn');
const passwordHint = document.getElementById('passwordHint');
const accountName = document.getElementById('accountName');
const logoutBtn = document.getElementById('logoutBtn');
const appStatus = document.getElementById('appStatus');
const importCsvBtn = document.getElementById('importCsvBtn');
const csvFileInput = document.getElementById('csvFileInput');

const monthlySalaryDisplay = document.getElementById('monthlySalaryDisplay');
const dailyIncomeDisplay = document.getElementById('dailyIncomeDisplay');
const cashPickupsDisplay = document.getElementById('cashPickupsDisplay');
const salaryRemainingDisplay = document.getElementById('salaryRemainingDisplay');
const summaryCards = document.getElementById('summaryCards');
const summarySpacer = document.getElementById('summarySpacer');
let appState = {
  user: null,
  records: [],
  settings: { salary: 2500, selectedMonth: '' },
};
let editingRecordId = null;
let authMode = 'login';
let summaryPinned = false;
let summaryOriginalTop = 0;

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

function getDefaultReceiver() {
  return appState.user?.name || getTranslation('defaultReceiver');
}

function setAppNotice(message = '') {
  appStatus.textContent = message;
}

async function apiRequest(url, options = {}) {
  const headers = { Accept: 'application/json', ...(options.headers || {}) };
  if (options.body) headers['Content-Type'] = 'application/json';
  const response = await fetch(url, {
    ...options,
    headers,
    credentials: 'same-origin',
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401 && appState.user && !['/api/login', '/api/register'].includes(url)) {
      showAuthentication('Your session expired. Please sign in again.');
    }
    throw new Error(payload.error || 'The request could not be completed.');
  }
  return payload;
}

function getSettings() {
  return {
    salary: Number(appState.settings.salary) || 0,
    selectedMonth: appState.settings.selectedMonth || getDefaultMonthValue(),
  };
}

async function saveSettings(settings) {
  appState.settings = { ...settings };
  return apiRequest('/api/settings', {
    method: 'PUT',
    body: JSON.stringify(appState.settings),
  });
}

function getRecords() {
  return appState.records;
}

function getCurrentLanguage() {
  const saved = localStorage.getItem(LANGUAGE_KEY);
  return saved && translations[saved] ? saved : 'en';
}

function saveCurrentLanguage(language) {
  localStorage.setItem(LANGUAGE_KEY, language);
}

function updateAuthMode() {
  const registering = authMode === 'register';
  authNameField.hidden = !registering;
  authNameInput.required = registering;
  authPasswordInput.autocomplete = registering ? 'new-password' : 'current-password';
  passwordHint.hidden = !registering;
  signInModeBtn.classList.toggle('active', !registering);
  createAccountModeBtn.classList.toggle('active', registering);
  signInModeBtn.setAttribute('aria-pressed', String(!registering));
  createAccountModeBtn.setAttribute('aria-pressed', String(registering));
  authSubmitBtn.textContent = getTranslation(registering ? 'createAccount' : 'signIn');
}

function showAuthentication(message = '') {
  appState = {
    user: null,
    records: [],
    settings: { salary: 2500, selectedMonth: getDefaultMonthValue() },
  };
  editingRecordId = null;
  resetSummaryDock();
  appShell.hidden = true;
  authShell.hidden = false;
  authForm.reset();
  authMode = 'login';
  authMessage.textContent = message;
  updateAuthMode();
}

function showApplication(payload) {
  appState = {
    user: payload.user,
    records: Array.isArray(payload.records) ? payload.records : [],
    settings: {
      salary: 2500,
      selectedMonth: getDefaultMonthValue(),
      ...(payload.settings || {}),
    },
  };
  authShell.hidden = true;
  appShell.hidden = false;
  window.scrollTo(0, 0);
  accountName.textContent = appState.user.name;
  authMessage.textContent = '';
  setAppNotice('');
  initializeForm();
}

signInModeBtn.addEventListener('click', () => {
  authMode = 'login';
  authMessage.textContent = '';
  updateAuthMode();
});

createAccountModeBtn.addEventListener('click', () => {
  authMode = 'register';
  authMessage.textContent = '';
  updateAuthMode();
});

authForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const registering = authMode === 'register';
  const requestBody = {
    email: authEmailInput.value.trim(),
    password: authPasswordInput.value,
  };
  if (registering) requestBody.name = authNameInput.value.trim();

  authSubmitBtn.disabled = true;
  authMessage.textContent = '';
  try {
    const payload = await apiRequest(registering ? '/api/register' : '/api/login', {
      method: 'POST',
      body: JSON.stringify(requestBody),
    });
    showApplication(payload);
  } catch (error) {
    authMessage.textContent = error.message;
  } finally {
    authSubmitBtn.disabled = false;
    updateAuthMode();
  }
});

logoutBtn.addEventListener('click', async () => {
  logoutBtn.disabled = true;
  try {
    await apiRequest('/api/logout', { method: 'POST' });
    showAuthentication();
  } catch (error) {
    setAppNotice(error.message);
  } finally {
    logoutBtn.disabled = false;
  }
});

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
    const translation = translations[language]?.[key] ?? translations.en[key];
    if (key && translation) {
      node.textContent = translation;
    }
  });

  const placeholderNodes = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderNodes.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    const translation = translations[language]?.[key] ?? translations.en[key];
    if (key && translation) {
      node.placeholder = translation;
    }
  });

  const defaultReceiver = getTranslation('defaultReceiver');
  if (receiverInput && !receiverInput.dataset.userModified && !receiverInput.value) {
    receiverInput.value = getDefaultReceiver() || defaultReceiver;
  }

  if (languageSelect) {
    languageSelect.value = language;
  }

  const isNightMode = document.body.classList.contains('night-mode');
  nightModeBtn.textContent = isNightMode ? getTranslation('dayMode') : getTranslation('nightMode');
  fullscreenBtn.textContent = document.fullscreenElement ? getTranslation('exitFullScreen') : getTranslation('fullScreen');
  updateAuthMode();
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
          <td>${escapeHtml(record.date)}</td>
          <td>${escapeHtml(record.time)}</td>
          <td>${formatCurrency(record.amount)}</td>
          <td>${escapeHtml(record.payer)}</td>
          <td>${escapeHtml(record.receiver)}</td>
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
  window.requestAnimationFrame(updateSummaryDock);
}

function resetSummaryDock() {
  summaryCards.classList.remove('summary-pinned');
  summarySpacer.hidden = true;
  summarySpacer.style.height = '';
  summaryPinned = false;
  summaryOriginalTop = 0;
}

function getSummaryFlowHeight() {
  const bottomGap = window.matchMedia('(max-width: 768px)').matches ? 16 : 22;
  return summaryCards.offsetHeight + bottomGap;
}

function updateSummaryDock() {
  if (!appState.user || appShell.hidden) {
    resetSummaryDock();
    return;
  }

  if (summaryPinned) {
    summaryOriginalTop = summarySpacer.getBoundingClientRect().top + window.scrollY;
    summarySpacer.style.height = `${getSummaryFlowHeight()}px`;
    if (window.scrollY < summaryOriginalTop) {
      resetSummaryDock();
      summaryOriginalTop = summaryCards.getBoundingClientRect().top + window.scrollY;
    }
    return;
  }

  summaryOriginalTop = summaryCards.getBoundingClientRect().top + window.scrollY;
  if (window.scrollY >= summaryOriginalTop) {
    summarySpacer.style.height = `${getSummaryFlowHeight()}px`;
    summarySpacer.hidden = false;
    summaryCards.classList.add('summary-pinned');
    summaryPinned = true;
  }
}

window.addEventListener('scroll', updateSummaryDock, { passive: true });
window.addEventListener('resize', () => window.requestAnimationFrame(updateSummaryDock));

form.addEventListener('submit', async (event) => {
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

  try {
    const wasEditing = Boolean(editingRecordId);
    const response = await apiRequest(
      wasEditing ? `/api/records/${encodeURIComponent(editingRecordId)}` : '/api/records',
      {
        method: wasEditing ? 'PUT' : 'POST',
        body: JSON.stringify(record),
      },
    );
    if (wasEditing) {
      const recordIndex = appState.records.findIndex((savedRecord) => savedRecord.id === editingRecordId);
      if (recordIndex === -1) {
        cancelRecordEdit();
        return;
      }
      appState.records[recordIndex] = response.record;
    } else {
      appState.records.push(response.record);
    }
    setAppNotice('');
    resetPickupForm();
    render();
  } catch (error) {
    setAppNotice(error.message);
  }
});

function resetPickupForm() {
  form.reset();
  dateInput.value = getCurrentDateString();
  timeInput.value = getCurrentTimeString();
  receiverInput.value = getDefaultReceiver();
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
    saveSettings(settings).catch((error) => setAppNotice(error.message));
    render();
  }

  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  amountInput.focus({ preventScroll: true });
}

cancelEditBtn.addEventListener('click', cancelRecordEdit);

salaryInput.addEventListener('input', () => {
  const settings = getSettings();
  settings.salary = Number(salaryInput.value || 0);
  appState.settings = settings;
  render();
});

salaryInput.addEventListener('change', () => {
  const settings = getSettings();
  saveSettings(settings).catch((error) => setAppNotice(error.message));
});

monthInput.addEventListener('change', () => {
  const settings = getSettings();
  settings.selectedMonth = monthInput.value || getDefaultMonthValue();
  saveSettings(settings).catch((error) => setAppNotice(error.message));
  render();
});

clearAllBtn.addEventListener('click', async () => {
  const confirmed = window.confirm(getTranslation('clearAllConfirm'));
  if (!confirmed) {
    return;
  }

  try {
    await apiRequest('/api/records', { method: 'DELETE' });
    appState.records = [];
    setAppNotice('');
    render();
  } catch (error) {
    setAppNotice(error.message);
  }
});

function parseCsvText(text) {
  const rows = [];
  let row = [];
  let field = '';
  let insideQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (insideQuotes) {
      if (character === '"' && text[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        insideQuotes = false;
      } else {
        field += character;
      }
      continue;
    }

    if (character === '"' && field.length === 0) {
      insideQuotes = true;
    } else if (character === ',') {
      row.push(field);
      field = '';
    } else if (character === '\n' || character === '\r') {
      if (character === '\r' && text[index + 1] === '\n') index += 1;
      row.push(field);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      field = '';
    } else {
      field += character;
    }
  }

  if (insideQuotes) throw new Error('The CSV contains an unfinished quoted field.');
  row.push(field);
  if (row.some((value) => value.trim())) rows.push(row);
  return rows;
}

function csvDateToIso(value) {
  const date = String(value || '').trim();
  let match = date.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (match) {
    const iso = `${match[1]}-${match[2].padStart(2, '0')}-${match[3].padStart(2, '0')}`;
    const parsed = new Date(`${iso}T00:00:00Z`);
    return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === iso ? iso : '';
  }
  match = date.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
  if (!match) return '';
  const iso = `${match[3]}-${match[1].padStart(2, '0')}-${match[2].padStart(2, '0')}`;
  const parsed = new Date(`${iso}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === iso ? iso : '';
}

function csvHeaderIndex(headers, names) {
  return headers.findIndex((header) => names.includes(header));
}

async function importCsvFile(file) {
  if (file.size > 2 * 1024 * 1024) throw new Error('CSV files must be 2 MB or smaller.');
  const rows = parseCsvText(await file.text());
  if (rows.length < 2) throw new Error('The CSV needs a header row and at least one record.');

  const headers = rows[0].map((value) => value.trim().replace(/^\uFEFF/, '').toLowerCase().replace(/[^a-z0-9]/g, ''));
  const columns = {
    date: csvHeaderIndex(headers, ['date', 'pickupdate']),
    time: csvHeaderIndex(headers, ['time', 'pickuptime']),
    amount: csvHeaderIndex(headers, ['amount', 'value']),
    payer: csvHeaderIndex(headers, ['payer', 'from', 'paidby']),
    receiver: csvHeaderIndex(headers, ['receiver', 'to', 'receivedby']),
    note: csvHeaderIndex(headers, ['note', 'description', 'details']),
  };
  if (columns.date < 0 || columns.amount < 0 || columns.payer < 0) {
    throw new Error('CSV headers must include date, amount, and payer.');
  }

  const records = [];
  for (let index = 1; index < rows.length; index += 1) {
    const row = rows[index];
    if (!row.some((value) => value.trim())) continue;
    const cell = (column) => column < 0 ? '' : String(row[column] || '').trim();
    const date = csvDateToIso(cell(columns.date));
    const time = cell(columns.time) || '00:00';
    const amountText = cell(columns.amount).replace(/[$,\s]/g, '');
    const amount = Number(amountText);
    const payer = cell(columns.payer);
    const receiver = cell(columns.receiver) || appState.user.name;
    const note = cell(columns.note);
    if (!date) throw new Error(`CSV row ${index + 1}: date must be a real date in YYYY-MM-DD or MM/DD/YYYY format.`);
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) throw new Error(`CSV row ${index + 1}: time must use HH:MM format.`);
    if (!Number.isFinite(amount) || amount <= 0) throw new Error(`CSV row ${index + 1}: amount must be greater than zero.`);
    if (!payer) throw new Error(`CSV row ${index + 1}: payer is required.`);
    records.push({ date, time, amount, payer, receiver, note });
  }
  if (!records.length) throw new Error('No record rows were found in the CSV.');
  if (records.length > 1000) throw new Error('Import up to 1,000 records at a time.');
  return records;
}

importCsvBtn.addEventListener('click', () => csvFileInput.click());

csvFileInput.addEventListener('change', async () => {
  const file = csvFileInput.files?.[0];
  csvFileInput.value = '';
  if (!file) return;
  try {
    const records = await importCsvFile(file);
    if (!window.confirm(`Import ${records.length} records from this CSV?`)) return;
    const result = await apiRequest('/api/records/import', {
      method: 'POST',
      body: JSON.stringify({ records }),
    });
    appState.records.push(...result.records);
    setAppNotice(`Imported ${result.imported} records.`);
    render();
  } catch (error) {
    setAppNotice(error.message);
  }
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

tableBody.addEventListener('click', async (event) => {
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

  try {
    await apiRequest(`/api/records/${encodeURIComponent(id)}`, { method: 'DELETE' });
    appState.records = appState.records.filter((record) => record.id !== id);
    if (editingRecordId === id) {
      cancelRecordEdit();
    }
    setAppNotice('');
    render();
  } catch (error) {
    setAppNotice(error.message);
  }
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
  dateInput.value = getCurrentDateString();
  timeInput.value = getCurrentTimeString();
  receiverInput.value = getDefaultReceiver();

  const settings = getSettings();
  salaryInput.value = settings.salary ?? 2500;
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

async function startApplication() {
  languageSelect.value = getCurrentLanguage();
  applyTranslations();
  updateAuthMode();
  try {
    const payload = await apiRequest('/api/session');
    if (payload.user) {
      showApplication(payload);
    } else {
      showAuthentication();
    }
  } catch (error) {
    showAuthentication(`Could not connect to the account server. ${error.message}`);
  }
}

startApplication();
