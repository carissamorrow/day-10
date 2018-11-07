export default class Jobs {
  constructor({ type, hours, days, requirements, salary, description, img }) {
    if (!type || !hours || !days || !requirements || !salary || !description) {
      throw new Error("Invalid Auto Creation")
    }
    this.type = type
    this.hours = hours
    this.days = days
    this.requirements = requirements
    this.salary = salary
    this.description = description
    this.img = img
  }
}