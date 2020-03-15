import Person from '../symbols-iterators.Person';
import Team from '../symbols-iterators.Team';

test('Should be Bowman', () => {
  const bowman = new Person('Лучник', 'Bowman', 50, 1, 40, 10);
  expect(bowman).toEqual({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Should add the newbie', () => {
  const shurikener = new Person('Сюрикенщик', 'Shurikener', 40, 4, 20, 15);
  const newTeam = new Team('newTeam');

  expect(newTeam.add(shurikener)).toEqual([shurikener]);
});

test('Should add all the newbies', () => {
  const bowman = new Person('Лучник', 'Bowman', 50, 1, 40, 10);
  const shurikener = new Person('Сюрикенщик', 'Shurikener', 40, 4, 20, 15);
  const newTeam = new Team('newTeam');

  newTeam.addAll(bowman, shurikener);
  expect(newTeam.team).toEqual([bowman, shurikener]);
});

test('Should throw an error', () => {
  const bowman = new Person('Лучник', 'Bowman', 50, 1, 40, 10);
  const newTeam = new Team('newTeam');

  newTeam.add(bowman);
  expect(() => newTeam.add(bowman)).toThrow('The member / Лучник / already exists');
});

test('Should iterate the newTeam', () => {
  const bowman = new Person('Лучник', 'Bowman', 50, 1, 40, 10);
  const shurikener = new Person('Сюрикенщик', 'Shurikener', 40, 4, 20, 15);
  const newTeam = new Team('newTeam');

  newTeam.addAll(bowman, shurikener);
  const newTeamIterator = newTeam[Symbol.iterator]();

  expect.assertions(3);
  expect(newTeamIterator.next()).toEqual({ done: false, value: bowman });
  expect(newTeamIterator.next()).toEqual({ done: false, value: shurikener });
  expect(newTeamIterator.next()).toEqual({ done: true });
});

// {
//   name: 'Лучник',
//   type: 'Bowman',
//   health: 50,
//   level: 1,
//   attack: 40,
//   defence: 10