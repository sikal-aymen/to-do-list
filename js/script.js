
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const taskList = $('#taskList');
const modal = $('#modal');
const openModalBtn = $('#openModalBtn');
const cancelBtn = $('#cancelBtn');
const taskForm = $('#taskForm');
const searchInput = $('#searchInput');
const statusFilter = $('#statusFilter');
const priorityFilter = $('#priorityFilter');
const sortSelect = $('#sortSelect');
const selectAllBtn = $('#selectAll');
const clearSelectionBtn = $('#clearSelection');
const deleteSelectedBtn = $('#deleteSelected');
const clearDoneBtn = $('#clearDone');
