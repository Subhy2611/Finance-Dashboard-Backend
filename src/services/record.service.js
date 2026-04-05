const Record = require('../models/record.model');

const createRecordService = async (data, userId) => {
  const { amount, type, category, date, note } = data;

  const record = await Record.create({
    user: userId, //user will not decide the user id
    amount,
    type,
    category,
    date,
    note
  });

  return record;
};

const getRecordsService = async (query, userId) => {
  const { type, category, startDate, endDate } = query;

  // Base filter (VERY IMPORTANT)
  let filter = {
    user: userId
  };

  // Type filter
  if (type) {
    filter.type = type;
  }

  // Category filter
  if (category) {
    filter.category = category;
  }

  // Date filter (updated to handle date range properly)
  if (startDate || endDate) {
    filter.date = {};

    if (startDate) {
      const start = new Date(startDate);
      start.setHours(0, 0, 0, 0);   // start of day
      filter.date.$gte = start;
    }

    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);  // end of day
      filter.date.$lte = end;
    }
  } 

  // Fetch records
  const records = await Record.find(filter).sort({ date: -1 });

  return records;
};

const getDashboardService = async (userId) => {
  const records = await Record.find({ user: userId });

  let totalIncome = 0;
  let totalExpense = 0;

  let categoryMap = {};

  records.forEach((record) => {
    if (record.type === 'income') {
      totalIncome += record.amount;
    } else {
      totalExpense += record.amount;
    }

    // Category totals
    if (!categoryMap[record.category]) {
      categoryMap[record.category] = 0;
    }

    categoryMap[record.category] += record.amount;
  });

  const balance = totalIncome - totalExpense;

  return {
    totalIncome,
    totalExpense,
    balance,
    categoryMap
  };
};

const getRecentRecordsService = async (userId, limit = 3) => {
  const records = await Record.find({ user: userId })
    .sort({ date: -1 })   // latest transactions first
    .limit(limit);        // only N records

  return records;
};

module.exports = {
  createRecordService,
  getRecordsService,
  getDashboardService
};