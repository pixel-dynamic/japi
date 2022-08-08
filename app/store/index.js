export const state = () => ({
  debt: {
    bank: [],
    moneyLess: 0,
    timeLess: '0',
    work: '6 meses',
    profit: '$0',
    user: {},
  },
  loans: {
    loan: '',
    score: '',
    job: '',
    salary: '',
    user: {},
  },
  newLoan: {
    user: {
      phone: '',
      email: '',
      date: '',
      state: '',
    },
    score: '',
    loan: '',
    work_status: '',
    income: '$4,000',
  },
})

export const mutations = {
  setBank(state, bank) {
    state.debt.bank = bank
  },
  setMoneyLess(state, moneyLess) {
    state.debt.moneyLess = moneyLess
  },
  setTimeLess(state, timeLess) {
    state.debt.timeLess = timeLess
  },
  setWork(state, work) {
    state.debt.work = work
  },
  setProfit(state, profit) {
    state.debt.profit = profit
  },
  setUser(state, user) {
    state.debt.user = user
  },
  // store loans
  setLoan(state, loan) {
    state.loans.loan = loan
  },
  setScore(state, score) {
    state.loans.score = score
  },
  setJob(state, job) {
    state.loans.job = job
  },
  setSalary(state, salary) {
    state.loans.salary = salary
  },
  setUserLoan(state, user) {
    state.loans.user = user
  },

  // store newLoans
  setNewUser(state, newUser) {
    state.newLoan.user = newUser
  },
  setMonth(state, month) {
    state.newLoan.score = month
  },
  setIncome(state, income) {
    state.newLoan.loan = income
  },
  setStatus(state, status) {
    state.newLoan.work_status = status
  },
  setDate(state, date) {
    state.newLoan.user.date = date
  },
  setState(state, place) {
    state.newLoan.user.state = place
  },
}
