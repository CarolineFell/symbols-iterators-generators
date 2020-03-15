export default class Team {
  constructor(name) {
    this.name = name;
    this.team = [];
  }

  add(newbie) {
    this.team.forEach((member) => {
      if (member.name === newbie.name) {
        throw new Error(`The member / ${newbie.name} / already exists`);
      }
    });

    this.team.push(newbie);
    return this.team;
  }

  addAll(...newbies) {
    newbies.forEach((newbie) => this.add(newbie));
    return this.team;
  }

  [Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield

    const { team } = this;
    let i = 0;
    return {
      next() {
        if (i < team.length) {
          const current = team[i];
          i += 1;
          return { done: false, value: current };
        }
        return { done: true };
      },
    };
  }
}